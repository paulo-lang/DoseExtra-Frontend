import React, { useEffect } from 'react';

import image from '../../assets/Home/wallpaper.jpg'
import './styles.css';

function Contact() {
  useEffect(() => {
    var links = document.getElementsByClassName('link')
    for (let i = 0; i < links.length; i++) {
      links[i].style.color = "#5ae1e6"
    }
    document.getElementsByClassName('header')[0].style.backgroundColor = "#0b2047"
  }, [])

  return (

    <div className='container'>

      <div className='members-container'>
        <div className='member-container'>
          <div className='member-sub-container'>
            <div className='member-name'>Lorem Ipsum</div>

            <img className='member-image' src={image} height={300} width={260} />
            <div className='member-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis congue enim ac rutrum. Quisque ac tellus nulla. Proin aliquam ornare ex non pretium. Aenean interdum varius vehicula. Donec venenatis odio eros, sed molestie nulla sollicitudin ac. Proin odio ante, maximus non molestie eget, viverra sed urna. Donec eget ultricies purus.

              Vivamus bibendum turpis urna, eu egestas lectus venenatis et. Donec scelerisque est justo, vel pretium arcu faucibus eget. Integer sit amet lacus non quam sagittis malesuada. Aliquam erat volutpat. Mauris id convallis nisi, sed condimentum risus. In ultrices sem diam, in feugiat enim tincidunt ut. Duis hendrerit at odio malesuada faucibus. In vitae felis quis turpis ultricies vestibulum nec ut mauris. Mauris facilisis imperdiet turpis, at pellentesque felis posuere at. Mauris at sodales quam. Duis et est sit amet justo cursus dictum. In mattis erat in risus volutpat, quis iaculis neque mollis.</div>

          </div>
        </div>
        <div className='member-container'>
          <div className='member-sub-container'>
            <div className='member-name'>Lorem Ipsum</div>

            <img className='member-image' src={image} height={300} width={260} />
            <div className='member-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis congue enim ac rutrum. Quisque ac tellus nulla. Proin aliquam ornare ex non pretium. Aenean interdum varius vehicula. Donec venenatis odio eros, sed molestie nulla sollicitudin ac. Proin odio ante, maximus non molestie eget, viverra sed urna. Donec eget ultricies purus.

              Vivamus bibendum turpis urna, eu egestas lectus venenatis et. Donec scelerisque est justo, vel pretium arcu faucibus eget. Integer sit amet lacus non quam sagittis malesuada. Aliquam erat volutpat. Mauris id convallis nisi, sed condimentum risus. In ultrices sem diam, in feugiat enim tincidunt ut. Duis hendrerit at odio malesuada faucibus. In vitae felis quis turpis ultricies vestibulum nec ut mauris. Mauris facilisis imperdiet turpis, at pellentesque felis posuere at. Mauris at sodales quam. Duis et est sit amet justo cursus dictum. In mattis erat in risus volutpat, quis iaculis neque mollis.</div>

          </div>
        </div>
        <div className='member-container'>
          <div className='member-sub-container'>
            <div className='member-name'>Lorem Ipsum</div>

            <img className='member-image' src={image} height={300} width={260} />
            <div className='member-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis congue enim ac rutrum. Quisque ac tellus nulla. Proin aliquam ornare ex non pretium. Aenean interdum varius vehicula. Donec venenatis odio eros, sed molestie nulla sollicitudin ac. Proin odio ante, maximus non molestie eget, viverra sed urna. Donec eget ultricies purus.

              Vivamus bibendum turpis urna, eu egestas lectus venenatis et. Donec scelerisque est justo, vel pretium arcu faucibus eget. Integer sit amet lacus non quam sagittis malesuada. Aliquam erat volutpat. Mauris id convallis nisi, sed condimentum risus. In ultrices sem diam, in feugiat enim tincidunt ut. Duis hendrerit at odio malesuada faucibus. In vitae felis quis turpis ultricies vestibulum nec ut mauris. Mauris facilisis imperdiet turpis, at pellentesque felis posuere at. Mauris at sodales quam. Duis et est sit amet justo cursus dictum. In mattis erat in risus volutpat, quis iaculis neque mollis.</div>

          </div></div>
        <div className='member-container'>
          <div className='member-sub-container'>
            <div className='member-name'>Lorem Ipsum</div>

            <img className='member-image' src={image} height={300} width={260} />
            <div className='member-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis congue enim ac rutrum. Quisque ac tellus nulla. Proin aliquam ornare ex non pretium. Aenean interdum varius vehicula. Donec venenatis odio eros, sed molestie nulla sollicitudin ac. Proin odio ante, maximus non molestie eget, viverra sed urna. Donec eget ultricies purus.

              Vivamus bibendum turpis urna, eu egestas lectus venenatis et. Donec scelerisque est justo, vel pretium arcu faucibus eget. Integer sit amet lacus non quam sagittis malesuada. Aliquam erat volutpat. Mauris id convallis nisi, sed condimentum risus. In ultrices sem diam, in feugiat enim tincidunt ut. Duis hendrerit at odio malesuada faucibus. In vitae felis quis turpis ultricies vestibulum nec ut mauris. Mauris facilisis imperdiet turpis, at pellentesque felis posuere at. Mauris at sodales quam. Duis et est sit amet justo cursus dictum. In mattis erat in risus volutpat, quis iaculis neque mollis.</div>

          </div>
        </div>
      </div>

    </div>

  );
}

export default Contact;