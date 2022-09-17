export default function TestDua() {
  let background = "https://source.unsplash.com/1000x600?food";
  let backgroundKedua = "https://source.unsplash.com/1000x600?pizza";

  return (
    <>
      <div className="max-w-xl h-96 bg-red-300 mx-auto mt-[42px] overflow-y-scroll mb-5 bg-scroll" style={{ backgroundImage: `url(${background})` }}>
        <p className="p-5 text-2xl font-extrabold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita dicta inventore placeat sit iste eligendi recusandae corrupti dolorem iure labore. Porro, facere odio. In fugiat eius praesentium maxime dolore aperiam ducimus
          consequuntur ipsam nobis esse hic porro voluptatem voluptas assumenda nemo, dicta iusto quis quia illo accusamus excepturi! Consequuntur qui magni tempore nobis quasi ab deleniti, vero maiores? Fuga doloribus ratione earum
          consequuntur iure perspiciatis harum, sint dolores amet odio nobis. Exercitationem ut non voluptates, ipsa similique sed aliquam repellendus! Earum quis, saepe inventore minima, rerum reprehenderit mollitia, beatae sunt dicta
          quasi eius eum natus pariatur magni molestias delectus odio vel quidem atque fugiat eveniet nulla nisi officia architecto? Quaerat libero rem animi delectus possimus harum nam, autem nesciunt ratione iste illum officiis aut vero,
          odio exercitationem sit? Consectetur quod unde facere sed, facilis assumenda iure. Ab adipisci, ipsam aperiam voluptate nihil facilis vitae beatae voluptatibus placeat natus officiis vero nobis, quibusdam animi blanditiis
          perferendis nesciunt dolore sapiente repudiandae. Eius fuga ab rem. Quos deserunt obcaecati praesentium eius, consequatur tenetur ab delectus facilis harum labore fugiat ipsa dicta. Fuga vel facilis dignissimos deleniti qui.
          Sapiente officiis, vel ipsum odio fugiat hic consequatur tenetur laborum culpa suscipit tempore distinctio nesciunt veritatis.
        </p>
      </div>

      <div className="mt-32 mb-10 h-96 mx-auto max-w-xl bg-emerald-300 bg-cover rounded-lg  shadow-xl shadow-indigo-400 opacity-90" style={{ backgroundImage: `url(${backgroundKedua})` }}></div>
    </>
  );
}
