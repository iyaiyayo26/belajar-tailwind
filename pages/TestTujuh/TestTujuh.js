import Card from "./card";

export default function TestTujuh() {
  return (
    <>
      <h2 className="text-center font-bold font-inter text-3xl text-indigo-800 mb-8">Guide to SVT: Hip-Hop Team</h2>

      {/* flex wrap buat kasih tau kalau lebar gacukup buat card nanti sisanya kebawah */}
      <div className="container mx-auto px-6 sm:flex sm:flex-wrap sm:gap-6 sm:justify-evenly">
        <Card gambar="/1.png" name="S.Coups" desc="The leader of the boy group SEVENTEEN and the leader of Hip-Hop Team. He is the leader of the special sub-unit 'Leaders'." />
        <Card gambar="/2.png" name="Wonwoo" desc="South Korean rapper under Pledis Entertainment. He is a member of the boy group SEVENTEEN under 'Hip Hop Team'" />
        <Card gambar="/3.png" name="Mingyu" desc="South Korean rapper under Pledis Entertainment. He is a member of the boy group SEVENTEEN under 'Hip Hop Team'" />
        <Card gambar="/4.png" name="Vernon" desc="Korean-American rapper and songwriter under Pledis Entertainment. He is a member of the boy group SEVENTEEN, and its subunit 'Hip-Hop Team'." />
      </div>

      <hr className="my-10" />
    </>
  );
}
