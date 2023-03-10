import Head from 'next/head';
import Link from "next/link";

export default function Page2() {
    return (
    <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="app">
          <img src="https://cdn-cpdmn.nitrocdn.com/orEWXKDMGNeMQjNOdQRAQfYcFKerZCvg/assets/images/optimized/rev-a443ec7/wp-content/uploads/2021/07/logo-white.svg" className="logo"/>
          <h1>Page 2</h1>
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/page1" className="nav-link">Page 1</Link>
          <Link href="/page2" className="nav-link">Page 2</Link>
          <Link href="/page3" className="nav-link">Page 3</Link>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis viverra mauris nec sagittis. Phasellus interdum tortor a efficitur fermentum. Vivamus lorem augue, mollis eu lobortis sit amet, interdum vitae dui. In eleifend, nulla sit amet fringilla interdum, odio mi sodales enim, vel sollicitudin erat lectus eu neque. Proin eget consequat odio. Pellentesque vestibulum auctor odio, id ultricies dolor sagittis ut. Sed non leo ac nulla placerat sagittis. Curabitur venenatis molestie est a suscipit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis viverra mauris nec sagittis. Phasellus interdum tortor a efficitur fermentum. Vivamus lorem augue, mollis eu lobortis sit amet, interdum vitae dui. In eleifend, nulla sit amet fringilla interdum, odio mi sodales enim, vel sollicitudin erat lectus eu neque. Proin eget consequat odio. Pellentesque vestibulum auctor odio, id ultricies dolor sagittis ut. Sed non leo ac nulla placerat sagittis. Curabitur venenatis molestie est a suscipit.</p>
        </main>
      </>
    )
  }