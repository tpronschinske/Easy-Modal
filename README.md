<h1>Easy Modal</h1>
<p>An easy to use jquery modal plugin. All you have to do is change the settings to your desire and the modal plugin will take care of the rest</p>

<p>The modal is created dynamically through jquery. No longer do you have to recreate templates. All you have to do is provide the content and settings and your off to the races. See the index file and you can see the three ways this modal can be set up.</p>

<h2>Requirements</h2>
<hr />
    <ul>
        <li>jQuery 1.9.1 or Higher</li>
        <li>easy-modal.js</li>
        <li>style-modal.css</li>
        <li>(Optional) Font Awesome Library For Close Icon</li>
    </ul>

<h2>How To Use</h2>
<pre>
  
      $(document).ready(function(){
          $('.modal-click').click(function(){
             $.easyModal()
          }); 
      });


</pre>

<h2>Modal Settings</h2>
<pre>
        content: '<span>New Easy Modal/Dialog Box</span>',
        size: 'medium',
        fadeInModal: 800,
        fadeOutModal: 800,
        footer: false,
        buttonText: "Ok",
        linkText: "Cancel"
</pre>

<p>content: can be changed to any form of string or you can pass in a file via ajax</p>
<p>size: small, medium, large</p>
<p>fadeInModal: the speed you wish to fade in</p>
<p>fadeOutModal: the speed you wish to fade out</p>
<p>footer: Boolean (true or false) if true the footer will render buttons at the foot of the modal. If false no buttons and close button will be in the upper right corner</p>
<p>buttonText: String to set the button text</p>
<p>linkText: String to set the link text</p>

<h3>The MIT License (MIT)</h3>
<hr />

<p>Copyright (c) 2016 Travis Pronschinske ()</p>

<p>Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:</p>

<p>HE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.</p>
