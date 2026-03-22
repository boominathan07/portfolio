import React from 'react'
import { socialLink } from '../constant/data'

function Contact() {
  return (
      <section className='pt-28' id='contact'>
          <div className='container grid gap-11 md:grid-cols-[0.7fr_1fr] md:pb-16 border-b border-zinc-200 dark:border-zinc-900'>
              <div className='flex flex-col gap-5'>
              <div className=''>
                  <h2 className='section-title'>Get In Touch</h2> 
                  <p className=''>Have a project idea or want to collaborate? Feel free to reach out.
</p>
                  </div>

              <div className='flex  gap-2.5 mt-9'>
                  {socialLink.map(item => (
                      <a href={item.href} target='_blank' key={item.id } className='hover:text-emerald-700 transition-colors'><item.icon /></a>
                  ))}
              </div>
              </div>
              
                 <form className='space-y-3.5'>
          {/* Name + Email Inputs */}
          <div className='grid gap-2.5 md:grid-cols-2'>
            <div className='border border-zinc-200 bg-zinc-100/60 rounded-lg dark:border-zinc-800 dark:bg-zinc-900/60'>
              <input
                type='text'
                placeholder='Name'
                className='py-2.5 indent-4 w-full placeholder-zinc-800 dark:placeholder-zinc-400'
              />
            </div>

            <div className='border border-zinc-200 bg-zinc-100/60 rounded-lg dark:border-zinc-800 dark:bg-zinc-900/60'>
              <input
                type='email'
                placeholder='Email'
                className='py-2.5 indent-4 w-full placeholder-zinc-800 dark:placeholder-zinc-400'
              />
            </div>
          </div>

          {/* Message Textarea */}
          <div>
            <textarea
              placeholder='Message'
              className='w-full border border-zinc-200 bg-zinc-100/60 rounded-lg dark:border-zinc-800 dark:bg-zinc-900/60 indent-4 py-2.5 h-32 resize-none placeholder-zinc-800 dark:placeholder-zinc-400'
            />
          </div>

          {/* Submit Button */}
          <button className='btn bg-emerald-700 border border-emerald-700 py-3 font-bold w-full md:w-full'>
            Submit
          </button>
        </form>
              </div>
    </section>
  )
}

export default Contact