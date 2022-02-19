export default function SearchBar() {
  function callback($evt) {
    if ($evt.key === 'Enter') {
      console.log($evt.target.value);
      document.location.href = '/search/' + $evt.target.value;
    }
  }

  return (
    <div className={''}>
      <input
  className="p-0.5 text-xs"
  type="text"
  onKeyDown={callback.bind(this)}
  placeholder={'Search'}
  />
    </div>
  );
}
