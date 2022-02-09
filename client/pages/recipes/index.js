import RecipeCard from '../../components/RecipeCard';
import Link from 'next/link';
import Button from '../../components/Button';

export default function Home() {
  return (
    <div>
      <RecipeCard />
      <Link href="/recipes/new-recipe" passHref>
        <Button name="New Recipe" />
      </Link>
    </div>
  );
}
