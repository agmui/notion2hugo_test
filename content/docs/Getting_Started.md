---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 1
toc: false
icon: "rocket_launch"
---

## Computer Vision guide:

[link_to_page](86d45bc0-388b-4d26-8848-44f255f73d0e)

## ROS guide:

[link_to_page](3c76c1de-ec8f-46d6-8b0a-294005edc2d5)

## Controls guide:

## Install

{{< tabs tabTotal="4">}}
{{% tab tabName="Windows" %}}

Download and run _**AS ADMINISTRATOR**_: [taproot installer](https://github.com/Thornbots/TeachingFreshies/releases/tag/1.0)

It automatically installs all the tools and vscode.

{{% /tab %}}
{{% tab tabName="WSL" %}}

Follow the linux guide but currently some methods do not work (also ur kinda on ur own hehe)

TODO: make separate guide for vscode section

{{% /tab %}}
{{% tab tabName="MacOS" %}}

TODO: for now just read the [linux_init.sh](https://github.com/agmui/sample_rm_pico_app/blob/main/linux_init.sh)

<details>
<summary>might not work lol</summary>

`brew install libusb pkg-config`

Next install: [vscode](https://code.visualstudio.com/Download)

</details>

{{% /tab %}}
{{% tab tabName="Linux (ubuntu)" %}}

{{% alert context="danger" %}}
**Warning** do not update recursively
<details>
<summary>why tho?</summary>
There are some submodules that may go on for a while (like tinyusb) and I highly
recommend you don't need to get them.
If you want to see what submodules I update just look in `linux_init.sh`
</details>
{{% /alert %}}

```shell
git clone <https://github.com/agmui/sample_rm_pico_app.git>
cd sample_rm_pico_app
./linux_init.sh && source ~/.bashrc
```

## Install VScode

[vscode](https://code.visualstudio.com/Download)

{{% /tab %}}
{{< /tabs >}}

## VScode extensions

Have vscode open this repo
When first opining vscode should ask you to install the plugins

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUV3QST4%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T110710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQDqPtUHGQYSZ7jVADI7wXgbap2AcvBmHRWlbkqfcSBOWwIgeDrZti%2BaFD7r4vWI0ZNCEqdjcO6w3JZMCyNzAV7eiVYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7oSW8ERGG7XDNMjSrcAw2%2F9wwkE0yFy7zCqpeIPZkvQWfc5y2ncwu0rbrU7IAG6gGGDF3Nztnh31ms9QegEOQdtM%2Fg5oWT175tO5PihHnvJOvh5pdof%2F20gtWsfPiiIHJU404bIYL%2BzP8NLf1Yadoa5fHMgeEyjTofvf2f%2B2tdVICOSA%2F%2BcKbgbQcbTZO9B4pzvc3ho9phmNUWRtJxz8HW8Lyq1DI8fmMtetZV0JS4Gryjcj1jHDX1mDopF%2BUET%2BnmVuloq98Wr2DXeGkWl0E2xpg38NVLKWRJPBK3CUwamBbRzSS0BjkyOlQXR2t5nOsHoDtXxIvVdbGXvM29KsNzMDcPF42AhVYHoj8bb8LXsDdRA%2Fb9EYeY39sB66OeU2FUFVq5toa%2F5AqWlx%2Fn2JYN0ff16IJxN80J1aQyb3EcI9zw5jOl2J7FhTXcjjV4U%2BHzE5QIq9jeaU7qMuA1XFyeOpNN%2BKErIarptA0aybxhfYbjKKpa0MjZBcftzrtzJV0Hz4ntymq6N2LbYHLvOYvFBG2fo9mqnaALg5YEPObXResTruch59gs4g2YGMnM8%2FI9ASxgBwLobjIikXeIZKf6%2FxIvLsednrTtwmsgztzhgpwd9dpxSPSU3ouFVtGfx%2BOXzvd8wLH1OX7jMLnm774GOqUBo7Rc6A4vSY4Q8R4uAs6jTf3iaZWxdBNXXl7JGHc2y6PoxtMvy1HRe%2BillBIQIAU2tQ8DknsNKWfb7JQWG31m6qR6609xKnVV8dpQ5jZBFeMkKDesBIkqOLJDFLPMzhkbMqj2s7kmUo3BJLSi8I3DB0YK1TESpxSAR1mdtD1FYPy8Ctze0NmURNVvfHA26S8qdKgz6ktUos%2FBfa3qYIvOYSfCBfM9&X-Amz-Signature=0c24b1c6b9872940cf4925e64d5d66af3ef594b62368f539e6385328389cabf3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUV3QST4%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T110710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQDqPtUHGQYSZ7jVADI7wXgbap2AcvBmHRWlbkqfcSBOWwIgeDrZti%2BaFD7r4vWI0ZNCEqdjcO6w3JZMCyNzAV7eiVYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7oSW8ERGG7XDNMjSrcAw2%2F9wwkE0yFy7zCqpeIPZkvQWfc5y2ncwu0rbrU7IAG6gGGDF3Nztnh31ms9QegEOQdtM%2Fg5oWT175tO5PihHnvJOvh5pdof%2F20gtWsfPiiIHJU404bIYL%2BzP8NLf1Yadoa5fHMgeEyjTofvf2f%2B2tdVICOSA%2F%2BcKbgbQcbTZO9B4pzvc3ho9phmNUWRtJxz8HW8Lyq1DI8fmMtetZV0JS4Gryjcj1jHDX1mDopF%2BUET%2BnmVuloq98Wr2DXeGkWl0E2xpg38NVLKWRJPBK3CUwamBbRzSS0BjkyOlQXR2t5nOsHoDtXxIvVdbGXvM29KsNzMDcPF42AhVYHoj8bb8LXsDdRA%2Fb9EYeY39sB66OeU2FUFVq5toa%2F5AqWlx%2Fn2JYN0ff16IJxN80J1aQyb3EcI9zw5jOl2J7FhTXcjjV4U%2BHzE5QIq9jeaU7qMuA1XFyeOpNN%2BKErIarptA0aybxhfYbjKKpa0MjZBcftzrtzJV0Hz4ntymq6N2LbYHLvOYvFBG2fo9mqnaALg5YEPObXResTruch59gs4g2YGMnM8%2FI9ASxgBwLobjIikXeIZKf6%2FxIvLsednrTtwmsgztzhgpwd9dpxSPSU3ouFVtGfx%2BOXzvd8wLH1OX7jMLnm774GOqUBo7Rc6A4vSY4Q8R4uAs6jTf3iaZWxdBNXXl7JGHc2y6PoxtMvy1HRe%2BillBIQIAU2tQ8DknsNKWfb7JQWG31m6qR6609xKnVV8dpQ5jZBFeMkKDesBIkqOLJDFLPMzhkbMqj2s7kmUo3BJLSi8I3DB0YK1TESpxSAR1mdtD1FYPy8Ctze0NmURNVvfHA26S8qdKgz6ktUos%2FBfa3qYIvOYSfCBfM9&X-Amz-Signature=29330239969577179adf8edd493c1c371f1182da43b6864cb8898729ac0c4e65&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROUD22YI%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T110713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIGg9VkD%2FDZk87ZHlJt4wsgeEwZj3XHuRzvWw4yyjR6S2AiAIBkRKw5ra9OO53wdZgmUtLvI%2B6mbwy46SGgKk4p3s1CqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs%2FY%2BfzKLlApjCNKsKtwD3z89GVIGJHFmr4yeHHhC0C5mcVo32UCs9UY7ZhT5FhGKIBJjMIKdPNyJWj1zEbnmaT4WKn98gpalm3nSVnIkOPDRV2tXeYlhqgxyAIBomzZ76F770ngG3vpmBgBi0kKdtL3hvnQdLbFZpWaQDzmrKybaE2hPf%2FllG90R5TiYIEsxMASugIwJFYyIhMwfPwDQ2LsFhVLCLaYpmBiqPXqoUj%2FKmBkbhGu1w9KaHP1M8sXazI5rOu9lacJfVSRyyxSgOmlgj38xroz9XxhQNdqfWuXvDL%2FDyyxwwUgvc3trZKuYvgqZHMC7AC0ITr5TkjqnKKNnMvOcJ%2BYxU2AEJ%2FYfnmcz6GjR7wqYFeurEOlDfcDR382%2BkRQqeFCHKVHBk7k7l9VWcwcApMcxMXBLK6W7%2FK769Wg9XWYRf91GtBbW42eKW81yZYMBaph2o4cX9HHc6UpPsvIo%2Fjq2a7aGAzMESfRMxvOzRAlVgFG5fK0oMMlk1fVni7YiMMkBZIpeFUglKcHnneGA5qJgaWiKATkJdbNCF7biTBodvpQmOfbVgAtk5JIY3UrTR1x%2BfXHG0fpK0RZBX3ArMlF188GilcQGGiA08m%2BeJ%2B5CEQgj9llAOOA80QhzXK4qPelmtMcwr%2BbvvgY6pgGBYYyShNd6zgh0lh3iVEh1e13xN43E9NmRZRylYc%2By2FxRThJ4zM2XCQZwv4SdndIHYA22DlkQmVlzOKpRDIM7hXA2i80u15ddRyEkZHFlP9oDz7RRtxRl%2FzZXyPnDlF%2Fveuyhsz4lQlMX6n%2Frx3RF%2BP5ntCT%2BkbiHG6a3dSL5fp%2F%2FTku6hQ2TfHsqzzkoooQOwFxdsqFdf%2FwffEtJHDhuMaCr6TJQ&X-Amz-Signature=0b1e580d5c4129c0e56497a5f1091cc8d3883eeb6b35ae8dcbf40b538917c470&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ67T7BG%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T110714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQDPHQ2B2Tlozl7fGZDGyRNqlZ5NnUjDw5a4J8ZeFiMcqQIgFPznJg%2BanxAaz6kbCG%2BxSL47by%2FAP5dbJoIG%2Fv8%2BSZ8qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLEXqIvVNat8oy5nSrcAzpckILMwoH8tR9R01iONLyGMBSj4Bvl%2FlVrSDUSPiiF5F5SMK9Cg9YU%2FcG0QfERBogm8h%2F0xkk5Ma37150SCsJO4lO5jTPne5q7u%2F%2BkJ19ZN1TKfR%2F1HcPDeWC7pHNM%2BSldzJGgzZup47OyeeIS8svqT5Algzgf7RUJ10IDhUJhULgYu7YjsUBgFbagoJ9H6QcK2QOJfS5rdE4LrB6A0WGwhwiEiR0%2BbSlly4BMhA7kmQyLnTgTjFW9QWcD6sI3F5Cd9gHUku9k0nVlYVdTmYpBsMvFiVe%2B%2BBCKdrZBwuZy0fiOGiYtTXDfzzX6KoP8uL548A41G4Msk9QyR4szyPWkhVFJaQoLLx6hvtLJJXGpBkXAOTKVbfQ3KK4%2FmN4VKi%2F4ocfm4dWWrmaoFd6Wg%2FZIB8odFMnNxeJ2OFzETAKtGjPim4XC%2FkLimxN8FuzGNSt5ZX28bFzkHpIKEQ1IGYgrZERAeeI%2F3Tku1Dfo%2BnFhr9JsVyO5WTHxFXRM1jxI0ihGjk6kZV2cuRJYl50X16NEm7k5F%2BSefSDRWddMXMeedkNHFw8qbiQ2Yi0Ul%2F5T2OhSh3gMXb2IrXdXUGaBPVg1v1XCt4htXdW4CPLmNA38sLk6RSbr7pU%2F2nuXMPPl774GOqUB9hm7nbimf29%2BWZjum8lT%2Bjr3y9FhIozLu6xuGI03ryGtcF7%2FLpEe1IcnQmicPsQpoRwuMGzWXG1TinOEkHJd5FQMFF29LBfM1juCQxJgp0Jtgp%2FjkFN0%2FFuiWYrCeb9qKRQj5LdoT0aFHQyRqBs%2BTK0tBSbe86K8BUK1qCstG%2B92yXOJq4Xl9%2FPxBTXSxn5XXs7DmZr%2BYotFzw57rsfdQfWPVmqa&X-Amz-Signature=15eca9223508fa77121f1d642b874f26e7c06b90431e69f36f49e7438d14df96&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUV3QST4%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T110710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQDqPtUHGQYSZ7jVADI7wXgbap2AcvBmHRWlbkqfcSBOWwIgeDrZti%2BaFD7r4vWI0ZNCEqdjcO6w3JZMCyNzAV7eiVYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7oSW8ERGG7XDNMjSrcAw2%2F9wwkE0yFy7zCqpeIPZkvQWfc5y2ncwu0rbrU7IAG6gGGDF3Nztnh31ms9QegEOQdtM%2Fg5oWT175tO5PihHnvJOvh5pdof%2F20gtWsfPiiIHJU404bIYL%2BzP8NLf1Yadoa5fHMgeEyjTofvf2f%2B2tdVICOSA%2F%2BcKbgbQcbTZO9B4pzvc3ho9phmNUWRtJxz8HW8Lyq1DI8fmMtetZV0JS4Gryjcj1jHDX1mDopF%2BUET%2BnmVuloq98Wr2DXeGkWl0E2xpg38NVLKWRJPBK3CUwamBbRzSS0BjkyOlQXR2t5nOsHoDtXxIvVdbGXvM29KsNzMDcPF42AhVYHoj8bb8LXsDdRA%2Fb9EYeY39sB66OeU2FUFVq5toa%2F5AqWlx%2Fn2JYN0ff16IJxN80J1aQyb3EcI9zw5jOl2J7FhTXcjjV4U%2BHzE5QIq9jeaU7qMuA1XFyeOpNN%2BKErIarptA0aybxhfYbjKKpa0MjZBcftzrtzJV0Hz4ntymq6N2LbYHLvOYvFBG2fo9mqnaALg5YEPObXResTruch59gs4g2YGMnM8%2FI9ASxgBwLobjIikXeIZKf6%2FxIvLsednrTtwmsgztzhgpwd9dpxSPSU3ouFVtGfx%2BOXzvd8wLH1OX7jMLnm774GOqUBo7Rc6A4vSY4Q8R4uAs6jTf3iaZWxdBNXXl7JGHc2y6PoxtMvy1HRe%2BillBIQIAU2tQ8DknsNKWfb7JQWG31m6qR6609xKnVV8dpQ5jZBFeMkKDesBIkqOLJDFLPMzhkbMqj2s7kmUo3BJLSi8I3DB0YK1TESpxSAR1mdtD1FYPy8Ctze0NmURNVvfHA26S8qdKgz6ktUos%2FBfa3qYIvOYSfCBfM9&X-Amz-Signature=f713fdcc61a7bbd883ee9c19fc1d7bbf1761e0436de178117eb7ea5995487222&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
