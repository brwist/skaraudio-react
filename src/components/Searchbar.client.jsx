export default function SearchBar() {
  function callback($evt) {
    if ($evt.key === 'Enter') {
      console.log($evt.target.value);
      document.location.href = '/search/' + $evt.target.value;
    }
  }

  return (
    <div className={'relative'}>
      <input
        className="p-1"
        type="text"
        onKeyDown={callback.bind(this)}
        placeholder={'Search'}
      ></input>
    </div>
  );
}
