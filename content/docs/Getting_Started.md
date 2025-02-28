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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WJZKH7M%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T181040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCJI2r%2FSqsg9tN3WB9pxFiAXj8QhPg%2FQFuhGKtwyaPZiwIhANccqBmvpLIA9KdCBAOiqMrFqurNzg%2F6g3FsmeL4N3FqKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHTSrkJ9UjyMFFHzUq3AN4b13cJPajtVVno9ydjU0HYTO0ej8Kv1mtLIy4fQdjR%2BGTXLyJkHE4nHNnDrDDB0MCtI04VuUgTkQo6eBjHaDc2%2FCX8fGd1SPpC13Q%2FO0RdE9i86kDsRFt2FfcccjeeUr6%2B9awlBQlTd7o1PjFCjI4bqDVoWV1N%2FDXWFdqBc2scU9PwDccUOBWMvwqCFhEvLW%2BDNI5mqUNRnhDDMnVp%2FMAikRWOjx6RQwccLOZQiLoIHuTynv0u5JwvRkp4wk3UBxZADoF8iokmumMfqhFW4qA7dBJTAhSm9uO%2BuXBbDXd9em5cVoNm7CTOM9Nfw4I61HsSLH%2B%2FNQqTxXWeEXWGvL167257cGTUM0%2Fm%2F0ey3%2BxWTkAnjRsUnEZS2lx0GyIdNSHUWql3e4FEF%2FmzeTlejOW%2BHydA%2BNCn%2FN7vpr6U3WPQC2QVG0O%2BPuZ499atB9Bt0DvlaX1jE9TbYhsIgj7wJsgszNB3o1kfVVjlrCw1F528kluqzVYQ0Eer%2B8jgIpCo8YjZ3h4ozFscK8xqhcen27GAPeuVjkxHkBgewaXq%2Fz54IcRjxmx%2BWmjSRerLRFhaI9rXY7%2F%2BthwGocGnKo1D7PxG4gzbEDwjpcTS69yIvK88yo2qPiLmMrfLOeknjCe7Ie%2BBjqkAfIjGv0DBFMzCzfdAWgZINCDvz5bW8cKVOrFeLQdGSUpljYnR9XHlItvFKeJanC2cFqi7v%2BMa6oYLPax0DSh1twLBCjzj8RzbVky%2F5bvVqVChbRHnuLXqI732fN3skpAtEw%2FH%2BDLeWZsP2KWbi1qrnQwrNkpLjhWkAhEjWbyapsSb54qNy2FBigQq3uHdrYsVYlCp%2BcP1vU2zJAYQksMgobHIJxA&X-Amz-Signature=835e7cb09971aa1e55a67cb34d531340366b0e361fd7b94bea8e852cffe0eab2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WJZKH7M%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T181040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCJI2r%2FSqsg9tN3WB9pxFiAXj8QhPg%2FQFuhGKtwyaPZiwIhANccqBmvpLIA9KdCBAOiqMrFqurNzg%2F6g3FsmeL4N3FqKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHTSrkJ9UjyMFFHzUq3AN4b13cJPajtVVno9ydjU0HYTO0ej8Kv1mtLIy4fQdjR%2BGTXLyJkHE4nHNnDrDDB0MCtI04VuUgTkQo6eBjHaDc2%2FCX8fGd1SPpC13Q%2FO0RdE9i86kDsRFt2FfcccjeeUr6%2B9awlBQlTd7o1PjFCjI4bqDVoWV1N%2FDXWFdqBc2scU9PwDccUOBWMvwqCFhEvLW%2BDNI5mqUNRnhDDMnVp%2FMAikRWOjx6RQwccLOZQiLoIHuTynv0u5JwvRkp4wk3UBxZADoF8iokmumMfqhFW4qA7dBJTAhSm9uO%2BuXBbDXd9em5cVoNm7CTOM9Nfw4I61HsSLH%2B%2FNQqTxXWeEXWGvL167257cGTUM0%2Fm%2F0ey3%2BxWTkAnjRsUnEZS2lx0GyIdNSHUWql3e4FEF%2FmzeTlejOW%2BHydA%2BNCn%2FN7vpr6U3WPQC2QVG0O%2BPuZ499atB9Bt0DvlaX1jE9TbYhsIgj7wJsgszNB3o1kfVVjlrCw1F528kluqzVYQ0Eer%2B8jgIpCo8YjZ3h4ozFscK8xqhcen27GAPeuVjkxHkBgewaXq%2Fz54IcRjxmx%2BWmjSRerLRFhaI9rXY7%2F%2BthwGocGnKo1D7PxG4gzbEDwjpcTS69yIvK88yo2qPiLmMrfLOeknjCe7Ie%2BBjqkAfIjGv0DBFMzCzfdAWgZINCDvz5bW8cKVOrFeLQdGSUpljYnR9XHlItvFKeJanC2cFqi7v%2BMa6oYLPax0DSh1twLBCjzj8RzbVky%2F5bvVqVChbRHnuLXqI732fN3skpAtEw%2FH%2BDLeWZsP2KWbi1qrnQwrNkpLjhWkAhEjWbyapsSb54qNy2FBigQq3uHdrYsVYlCp%2BcP1vU2zJAYQksMgobHIJxA&X-Amz-Signature=13ae2c25cd47f337efc3694de214bd57d53b94730dfdee11ebe2a9ed2277fe60&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664COCHV2P%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T181047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCICe%2F7zVaHXzegx33tJe146dTxZePT5ciGLC1CZ5y5Oe4AiAznYzqDiwRF8C1oAR%2FkICk%2BM1hznQ06fZSFcd5hniyNSqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUDv3%2BW64OOF6658wKtwDzIPDUx7AV3c3ygVL%2BHtwhiFDKMUXNeSuaxpKCYZnV90Ett4BRRmszt1Nxpsn42BSNXjxj1i6QY4YKx7d7G9bgX3TfG%2Bqc4CIQimpwnmSCDP1p4BYXQ9htbW6slk1ksXypvi0b27DhlgQhCcBe4KOalAuhE5DZDMSijCGlPYvY1fnXghdTIYXGLHpA55mthc%2BYobpe8AKNRfhM59SkO3YuNZOo0aNFsQeqA0MawT0Fja28RUaU%2BbZKR2QsnAwbcZupwyGsGYl9Bdj%2BrtH6M57NCpbaOGJuZw7Np0bsrmu0rV3k3Bi4gCpqKZEuh4vwPH95NMARA5NjsYkyacfM6%2FHlJhcD1mIMglsgxiv6M9C%2FgwrOSk5uUsTd6t7XIEiEJNizK27SKp%2BDTySuoRyTQshkjkWMTHapuBBelQqNIEtLz%2BGZV%2FpczzvUw%2B47HajM9h9im9uLVZwFEpR1xD5AALKwRn0LtVyFORbBFTgpG7sOFNhCQSS9INpf%2BoRuWGJIUZNxG5Ek2ckpzzalccfc8O9M7XgrWXM7DPIGSlrAP9MqQW%2FLCaPF8Uw81FqWi8E0Xwv%2Fsb8jEMKk19MCRNCX3UUI5%2B9i%2F%2BUUC0GrtwAQo%2BWSXpClgDLjMBx5qVNuDEw%2FOuHvgY6pgFcAPxthF7I7sq6EpyAFCYLypxzE%2BS2IAqNZ%2FheBMh9tGJER1qDSt9l3hOGXdtJkTUvrwkrAhr32Y4BE2e7koqxxAgqHWMmwJiZv8ypS3DqoTg2qfemU7YiRex8CY%2FeOyTXVOOPUp2%2F7txlcEYVSv%2BhER8y7cFVgTa2qlxmmbqwvDHZ2e7bkG7d43XnwYvNJs2glhSv7o8Bst%2B5Fpu3OZZmKSqFiGr3&X-Amz-Signature=3004526faf967c47c587045a49e9081d9112ce33b87687636a21404d5e88cb40&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVC3ANJK%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T181048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQC5f6IX7Xt92sVeiyi55CxJxbwnaXT4kv87WlU0yOOLIwIhAOP1zOYRfo6BQ7Xrd%2FRnHU0ewSzj9GQx4X5qZFbcKEDAKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYliHhzL8aVtFPHPcq3AMnN5UMEW0HsuuJRCEndhlFR0sfla8uZpvwSqzBbFQ14nhLHTDFLm0osoaLLzzxefnGwZOnrObPcew0EyzrU7qUNuZjkZcaWiBPbr7Ot7tPQDeY4ZgFNGOQ%2BfSToJ%2Bae49lqVjwfhvk38I1DSAhf0mIEwp7MoTi9CkO6ozTWnx9v5FgOqvzzInZTZ61mEOk%2BnDlde2JpaaM79KsuUvDrggMUitv8LHdFJ7wjSxHnbADIEI3XnuJRVQXHzrP8rze6DCb%2BGZPyof%2BD410jlP2IC7UVK23%2F0ppnl2vKNGs6KnKiA%2FxYj028CIc1YUd%2BOqoy66LjpT956JvJ8BA9yf%2BMTl3K94OVdYgRuXjekQmgdNy9yLjRLNAvxYhbHN6ZlQ%2BAxWz9bWgVFfukriuoUbBX6BGegKaxx0BJHGcgVBTbJUMHDIXjcAFCvzXQMBo0THQ2Oyw%2F5O7CK%2BnZNetk7ZH85aw5TEorsyFpMeVXhuSiVoteRQiUUR2DURK%2FuZ1FJ9Eu%2Bw1oE6s4FHDmgTrSCsXOHmutS2B%2FBgsFsmPpr3nkKrFOOFvLlGgU%2BHCAHQIz%2FMBT3Y%2Fd%2BK%2FAB6bmPorzRr4icTUdhqnNHNyQCKasKrovIo0wBoQWp92sPVqP7jOYzCB7Ie%2BBjqkARmmkYfGmy7JeYCXsjcZ9BBxZGG1YbxulE8OZOIi0o9S7ZCkTekkCL92CPV%2BbyRh3I%2F7lzd5bO19IKavrA7ekFhL%2BmLMR7LY17VqaKSkr10QOecTwxgYvPxeKxxV0CtQqfihhgIQAgp1du4A5eqJkl2WBXWg3m8XXgBS5EgRX3eXY%2FkxgC1svWbfCwfsql6h8iWAw9yG8bFpSlDdF33CGOv6rRvg&X-Amz-Signature=ffc675deab81a569db92d8130361b0db4d5b2f701d8bfe4b471a293f73bc03da&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WJZKH7M%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T181040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCJI2r%2FSqsg9tN3WB9pxFiAXj8QhPg%2FQFuhGKtwyaPZiwIhANccqBmvpLIA9KdCBAOiqMrFqurNzg%2F6g3FsmeL4N3FqKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHTSrkJ9UjyMFFHzUq3AN4b13cJPajtVVno9ydjU0HYTO0ej8Kv1mtLIy4fQdjR%2BGTXLyJkHE4nHNnDrDDB0MCtI04VuUgTkQo6eBjHaDc2%2FCX8fGd1SPpC13Q%2FO0RdE9i86kDsRFt2FfcccjeeUr6%2B9awlBQlTd7o1PjFCjI4bqDVoWV1N%2FDXWFdqBc2scU9PwDccUOBWMvwqCFhEvLW%2BDNI5mqUNRnhDDMnVp%2FMAikRWOjx6RQwccLOZQiLoIHuTynv0u5JwvRkp4wk3UBxZADoF8iokmumMfqhFW4qA7dBJTAhSm9uO%2BuXBbDXd9em5cVoNm7CTOM9Nfw4I61HsSLH%2B%2FNQqTxXWeEXWGvL167257cGTUM0%2Fm%2F0ey3%2BxWTkAnjRsUnEZS2lx0GyIdNSHUWql3e4FEF%2FmzeTlejOW%2BHydA%2BNCn%2FN7vpr6U3WPQC2QVG0O%2BPuZ499atB9Bt0DvlaX1jE9TbYhsIgj7wJsgszNB3o1kfVVjlrCw1F528kluqzVYQ0Eer%2B8jgIpCo8YjZ3h4ozFscK8xqhcen27GAPeuVjkxHkBgewaXq%2Fz54IcRjxmx%2BWmjSRerLRFhaI9rXY7%2F%2BthwGocGnKo1D7PxG4gzbEDwjpcTS69yIvK88yo2qPiLmMrfLOeknjCe7Ie%2BBjqkAfIjGv0DBFMzCzfdAWgZINCDvz5bW8cKVOrFeLQdGSUpljYnR9XHlItvFKeJanC2cFqi7v%2BMa6oYLPax0DSh1twLBCjzj8RzbVky%2F5bvVqVChbRHnuLXqI732fN3skpAtEw%2FH%2BDLeWZsP2KWbi1qrnQwrNkpLjhWkAhEjWbyapsSb54qNy2FBigQq3uHdrYsVYlCp%2BcP1vU2zJAYQksMgobHIJxA&X-Amz-Signature=342431e5eae4d77b9f30f87fa0f75de52d77a243f863ae0236755b7ca327caa3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
