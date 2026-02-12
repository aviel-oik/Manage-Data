function ShowList({ list }) {
  return (
    <section className="table">
      {list.map((item) => (
        <article key={item.name} className="row">
          <img src={item.imageUrl || "https://tse1.explicit.bing.net/th/id/OIP.sxxzdWrXFVgcaaDvR3WG3QHaGK?w=627&h=522&rs=1&pid=ImgDetMain&o=7&rm=3"} className="profile-img"/>
          <p>{item.name}</p>
          <p>{item.organization}</p>
          <p>{item.attacksCount}</p>    
          <p>{item.status}</p>
          <p>{item.relationToIsraelSummary}</p>
        </article>
      ))}
    </section>
  );
}

export default ShowList;