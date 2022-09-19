import React from 'react';

export const ProductCard = ({
  id,
  imageSrc,
  imageAlt,
  href,
  name,
  description,
  options,
  price,
}): JSX.Element => {
  return (
    <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
      <div
        className="group w-full block h-full relative border-r border-b border-gray-200 p-4 sm:p-6"
      >
        <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
          <img
            src={imageSrc}
            alt={imageAlt}

            className="object-cover object-center"
          />
        </div>
        <div className="pt-10 pb-4 text-center">
          <h3 className="text-md font-medium text-gray-900">
            <a href={href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </a>
          </h3>
          <p className="text-sm text-gray-500 line-through">de R$ 200,00</p>
          <p className="text-md text-green-600">de R$ 200,00</p>
          <div className="mt-3 flex flex-col items-center">
            {/* <p className="sr-only">{rating} out of 5 stars</p> */}
            {/* <div className="flex items-center">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  className={classNames(
                    rating > rating ? "text-yellow-400" : "text-gray-200",
                    "flex-shrink-0 h-5 w-5"
                  )}
                  aria-hidden="true"
                />
              ))}
            </div> */}
            <p className="mt-1 text-sm text-gray-500">5 reviews</p>
          </div>
          <p className="mt-4 text-base font-medium text-gray-900">{price}</p>
        </div>
      </div>
    </div>
  );
};


const ProductCardWithEvent = ({ name }) => {
  return (
    <ProductCard
        id={2}
        name={name}
        description='Produto muito legal'
        imageSrc='https://picsum.photos/200/300'
        imageAlt='Produto 1'
        options='aaaaa'
        href='#'
        price='R$ 200,00'
    />
  )
}

export default ProductCardWithEvent