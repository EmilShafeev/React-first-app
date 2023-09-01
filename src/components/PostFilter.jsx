import React from 'react'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'

const PostFilter = ({ filter, setFilter }) => {
    return (
        <div>
            <MyInput
                placeholder="Поиск..."
                value={filter.query}
                onChange={(e) =>
                    setFilter({ ...filter, query: e.target.value })
                }
            />
            <MySelect
                value={filter.sort}
                onChange={(selectedSort) =>
                    setFilter({ ...filter, sort: selectedSort })
                }
                defaultValue={'Сортировка по...'}
                options={[
                    { name: 'Сортировка по имени', value: 'title' },
                    { name: 'Сортировка по описанию', value: 'body' },
                ]}
            />
            <MySelect
                value={filter.limit}
                defaultValue={2}
                options={[
                    { value: 10, name: 10 },
                    { value: 2, name: 2 },
                ]}
                onChange={(value) => {
                    setFilter({ ...filter, limit: value })
                }}
            />
        </div>
    )
}

export default PostFilter
