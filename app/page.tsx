import CardItem from '@/components/CartItem';

const cards = [
  {
    id: 1,
    title: 'Muzdlu işçilər üçün',
    imageUrl: '/images/worker.jpg',
    slug: '/forworker',
  },
  {
    id: 2,
    title: 'İşə götürənlər üçün',
    imageUrl: '/images/business.jpg',
    slug: '/forbusiness',
  },
];

export default function Home() {
  return (
    <>
      <h1 className="mx-auto mt-4 mb-1 text-2xl">Əməkhaqqından tutulmaların hesablanması</h1>
      <main className="flex-grow container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((item, index) => (
          <CardItem key={index} {...item} />
        ))}
      </main>
    </>
  );
}
