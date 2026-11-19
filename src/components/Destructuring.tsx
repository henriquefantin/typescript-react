import React from 'react'

interface Props {
    title: string;
    content: string;
    commentQty: number;
    tags: string[];

    // enum
    category: Category
}

// substitudo do enum
export const Category = {
    JS: "JavaScript",
    TS: "TypeScript",
    PY: "Pyton"
} as const

export type Category = typeof Category[keyof typeof Category]

const Destructuring = ({ title, content, commentQty, tags, category }: Props) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
            <p>Quantidade de comentarios: {commentQty}</p>
            <div>
                {
                    tags.map((tag) => (
                        <span key={tag}>#{tag}</span>
                    ))
                }
            </div>
            <h4>Categoria: {category}</h4>
        </div>
    )
}

export default Destructuring