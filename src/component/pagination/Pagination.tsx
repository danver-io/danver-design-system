import React, {useMemo} from 'react'

export interface IProps {
    className?: string
    total_count?: number
    current_page?: number
    page_size?: number
    fetchPage: (page: number) => void
}

interface IPageItem {
    type: 'prev' | 'next' | 'normal'
    page: number
    label: string
}

const Pagination: React.FC<IProps> = ({className, total_count = 0, current_page = 0, page_size = 0, fetchPage}) => {
    const onClickPage = (page: number) => {
        fetchPage && fetchPage(page)
    }

    const pageList: IPageItem[] = useMemo(() => {
        const result: IPageItem[] = []

        const MAX_PAGE = 5
        const totalPageCount = Math.ceil(total_count / page_size)

        const offsetPage = Math.floor(current_page / MAX_PAGE) * MAX_PAGE
        const lastPage =
            totalPageCount >= offsetPage + MAX_PAGE ? offsetPage + MAX_PAGE : offsetPage + (totalPageCount % MAX_PAGE)

        // add prev
        if (offsetPage > 0) {
            result.push({type: 'prev', page: offsetPage - 1, label: '이전'})
        }

        // normal pages
        for (let i = offsetPage; i < lastPage && i < totalPageCount; ++i) {
            result.push({type: 'normal', page: i, label: (i + 1).toString()})
        }

        // add next
        if (totalPageCount > lastPage) {
            result.push({type: 'next', page: lastPage, label: '다음'})
        }

        return result
    }, [total_count, current_page, page_size])

    return (
        <nav className={`${className} py-[12px] flex items-center justify-center`}>
            <ul className="inline-flex -space-x-px text-base h-10">
                {pageList?.map(item => {
                    return (
                        <li
                            key={item.page}
                            onClick={() => onClickPage(item.page)}
                            className={`flex items-center justify-center px-4 h-10 ms-0 leading-tight border border-gray-300 first:rounded-l-lg last:rounded-r-lg hover:text-gray-700 cursor-pointer ${
                                item.page == current_page
                                    ? 'text-blue-600 bg-blue-50 hover:bg-blue-100'
                                    : 'text-gray-500 bg-white hover:bg-gray-100'
                            }`}>
                            {item.label}
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Pagination
