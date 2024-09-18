import "../StyledShowDetail.css";
export default function DataTable({ headers, data }) {
  // headers가 있는지 체크하고, 없다면 에러를 던짐
  console.log(data);
  if (!headers || !headers.length) {
    throw new Error("<DataTable /> headers is required.");
  }
  return (
    <div className="table">
      <div className="header-wp">
        <div className="fx center header">
          {headers.map((header, index) => {
            if (index === 0) return <div className="ws-10">{header.text}</div>;
            if (index === 1)
              return <span className="wc-18">{header.text}</span>;
            return <div className="w-18">{header.text}</div>;
          })}
        </div>
        <div className="fx center">
          {headers.map((header, index) => {
            if (index === 0) return <span className="w-10"></span>;
            if (index === 1) return <span className="w-18"></span>;
            return (
              <div className="w-18 fx center">
                {header.detail.map((data, index) => {
                  return <span className="w-33 d-header">{data.text}</span>;
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        {data.map((list, index) => {
          return (
            <>
              <div
                className={
                  "fx center " +
                  (index === data.length - 1 ? "p-10" : "d-bor p-10")
                }
              >
                <div className="w-10 year">{list.year}</div>
                <div className="w-18 club">{list.club}</div>
                {list.league.map((count, index) => {
                  return <GameInfo count={count} />;
                })}
                {list.facup.map((count, index) => {
                  return <GameInfo count={count} />;
                })}
                {list.domCup.map((count, index) => {
                  return <GameInfo count={count} />;
                })}
                {list.continent.map((count, index) => {
                  return <GameInfo count={count} />;
                })}
              </div>
            </>
          );
        })}
        {/* TODO 테이블 데이터 바인딩 */}
      </div>
    </div>
  );
}

function GameInfo({ count }) {
  return (
    <div className="fx w-18 center">
      <div className="w-33">{count.game}</div>
      <div className="w-33">{count.score}</div>
      <div className="w-33">{count.assist}</div>
    </div>
  );
}
