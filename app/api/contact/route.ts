import { NextResponse } from 'next/server';

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as ContactBody;

  if (!body.name || !body.email || !body.phone || !body.message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
