import { NextRequest, NextResponse } from 'next/server';

// get api
export const GET = () => {
    return NextResponse.json({ message: "hello world" })
}
// Post Api
export const POST = () => {
    return NextRequest()
}
// patch api




// put Api



// delete pai





