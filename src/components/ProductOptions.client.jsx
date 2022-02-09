import {useProduct} from '@shopify/hydrogen/client';

/**
 * A client component that tracks a selected variant and/or selling plan state, as well as callbacks for modifying the state
 */
export default function ProductOptions() {
  const {options, setSelectedOption, selectedOptions} = useProduct();

  // let url = new URL(window.location.href);
  // let variant = url.searchParams.get('variant');
  // console.log(variant);

  // Note: Once we bump to hydrogen v 0.11.x the useUrl hook will be available for this
  // const urlData = useUrl();
  //
  // let variantId = urlData.searchParams.get('variant');
  // if (variantId != null) {
  //   console.log('Hello Varient', variantId);
  // }

  return (
    <>
      {options.map(({name, values}) => {
        return (
          <fieldset key={name} className="mt-8">
            <legend className="mb-4 text-xl font-medium text-gray-900">
              {name}
            </legend>
            <div className="flex items-center flex-wrap gap-4 mb-4">
              {values.map((value) => {
                const checked = selectedOptions[name] === value;
                const id = `option-${name}-${value}`;

                return (
                  <label key={id} htmlFor={id}>
                    <input
                      className="sr-only"
                      type="radio"
                      id={id}
                      name={`option[${name}]`}
                      value={value}
                      checked={checked}
                      onChange={() => setSelectedOption(name, value)}
                    />
                    <div
                      className={`p-2 border cursor-pointer rounded text-sm md:text-md ${
                        checked ? 'bg-gray-900 text-white' : 'text-gray-900'
                      }`}
                    >
                      {value}
                    </div>
                  </label>
                );
              })}
            </div>
          </fieldset>
        );
      })}
    </>
  );
}
