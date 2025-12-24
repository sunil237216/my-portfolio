import { NextResponse } from 'next/server';
import { getRecentPosts } from '../../../../lib/blog';

export async function GET() {
  try {
    const posts = getRecentPosts(3);
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching recent posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}
