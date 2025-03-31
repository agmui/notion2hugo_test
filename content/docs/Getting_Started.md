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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V32K4LPI%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIGz%2Fv%2FIbSo8OqtNtJGxFOMxMUKjMLfsgBK9Gk3%2FkMo0eAiEA5B9%2B8QYFfkvJDF4Jc0fE1pRZvLumvpwdU6%2FSidqNj8sqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8FmuDE8jRA7ZyGYCrcA4%2FmGdtGLPx736xIk5Igs2akRGLvZ1yEbkuSBESH4mLC5SoVxktCVWS8zsv44eCqUcewiuQboE76CpQup%2BqS4pxIgIcozJSi0YhdMh6w5VtdX1V2jaY8lB3RQVQ5F7VTcG9zWlCewIaIl1VLJBXmSH%2B7VvnejUcSsSk3krZlGJBQQAXe2I9cOULUFW1noxvNguJcX3Ekz5f0zxglSjOtuRFH6T%2FqrFOLbbLg5Wt6JZzrautgwFysAV6XJf99w8x05dQVscnIBucfh9jZRIRPuc%2FeGtnlqvsCWbHx1l8dM9mlvHG92dnJJfhCm9ZUnzKPOuxkW%2FtDXag0QNYPe5pE%2Bp%2BJ0HGMbTne97M7Q4YUL8Ef7Me2Za%2B3gKZqUA%2BFNiwPL%2B397yZozMxQ1xF0pMV43xRGkekqot7zslD08bd371gisQqXHNJkuA%2FTkpXSnVcLV7VtIXkI0%2FhpBoEeFnrDsVtMXEjz8rtmlnPpPkMmIGpcARmrF7IoX4T5Ss1dbkJcZii9cvI83qeA%2Fc0KtHhavPSf9GH%2BNsI5J14WKdTrOjVMgEnadoxAbZAWZ%2FuhUOkdLgshkC3zM2lrcESh%2FFqbGuUOaxoMel2uwn3cCJJIrc3fZQuqu4uSQ1UNPhKrMN25q78GOqUB6BqtcxoJYZ1L1if74MYEfvvwR11OfvYJZngJWF1IuCNsuzCZCkOSCCTYwpjCU5s5rrTQZ5a%2BQqu316aGEHxzFTFBHdClpgXjccQcRS10sSQvq9%2Ba4AaUOf1S5U4el011vx4oFj5hyzLtlhMhLEkdxTQB0RIZqJUE0w9%2FCco2AP1XV9Kis0QUD%2F3r5Lh0psBXH6F94m7KH81jl%2BsKGFzSG80NAzJu&X-Amz-Signature=0ca7e36335d388ac3c3139a628a87017dee3c77da823d50824502743af7ffb1c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V32K4LPI%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIGz%2Fv%2FIbSo8OqtNtJGxFOMxMUKjMLfsgBK9Gk3%2FkMo0eAiEA5B9%2B8QYFfkvJDF4Jc0fE1pRZvLumvpwdU6%2FSidqNj8sqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8FmuDE8jRA7ZyGYCrcA4%2FmGdtGLPx736xIk5Igs2akRGLvZ1yEbkuSBESH4mLC5SoVxktCVWS8zsv44eCqUcewiuQboE76CpQup%2BqS4pxIgIcozJSi0YhdMh6w5VtdX1V2jaY8lB3RQVQ5F7VTcG9zWlCewIaIl1VLJBXmSH%2B7VvnejUcSsSk3krZlGJBQQAXe2I9cOULUFW1noxvNguJcX3Ekz5f0zxglSjOtuRFH6T%2FqrFOLbbLg5Wt6JZzrautgwFysAV6XJf99w8x05dQVscnIBucfh9jZRIRPuc%2FeGtnlqvsCWbHx1l8dM9mlvHG92dnJJfhCm9ZUnzKPOuxkW%2FtDXag0QNYPe5pE%2Bp%2BJ0HGMbTne97M7Q4YUL8Ef7Me2Za%2B3gKZqUA%2BFNiwPL%2B397yZozMxQ1xF0pMV43xRGkekqot7zslD08bd371gisQqXHNJkuA%2FTkpXSnVcLV7VtIXkI0%2FhpBoEeFnrDsVtMXEjz8rtmlnPpPkMmIGpcARmrF7IoX4T5Ss1dbkJcZii9cvI83qeA%2Fc0KtHhavPSf9GH%2BNsI5J14WKdTrOjVMgEnadoxAbZAWZ%2FuhUOkdLgshkC3zM2lrcESh%2FFqbGuUOaxoMel2uwn3cCJJIrc3fZQuqu4uSQ1UNPhKrMN25q78GOqUB6BqtcxoJYZ1L1if74MYEfvvwR11OfvYJZngJWF1IuCNsuzCZCkOSCCTYwpjCU5s5rrTQZ5a%2BQqu316aGEHxzFTFBHdClpgXjccQcRS10sSQvq9%2Ba4AaUOf1S5U4el011vx4oFj5hyzLtlhMhLEkdxTQB0RIZqJUE0w9%2FCco2AP1XV9Kis0QUD%2F3r5Lh0psBXH6F94m7KH81jl%2BsKGFzSG80NAzJu&X-Amz-Signature=0549f16d9ac775bf1b083ef547a736f908d15649aca2eff4d56b30e42107b602&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PPMXVDX%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIE10PPXW9DcWcb2z2P%2F05L0Xq9RkDnNti3Il8RjErVTTAiAIFxxtV0MpACMGMuR%2BV0AH6m3kWmP%2Fd6Nw5CstAweAEyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDTYnlotwrueurti0KtwDCMjY6GQmfj2NnG4lYCFZvWLcCECc6mJ0iWVH1eh%2F%2BU90zKNWRC7ZkR2YU7IRmtSbB4rbKObXbcWuXEAphUzSRfl9PZ7QbUTqvTeO2ZqA1mMeINW0MgbH9miYfwxrbLrX0DeKWPWQExdmbH0IxxnO4jRiDYgjIxl9TFOe29q45uBw25eonB0hX9cdP1c3mBQ9XmiPSE2GHtTZBsTMWj4XuKh8yn39fwBuaZLjumxW9v%2B1mrdXQyjVLYg3jCqWe7bQ%2BJUFd62ZERx0rN1GVE%2BsKJqCalniIY6FHEsClwnkPCXIMvuBb%2Bv9mOxKR457YLNorygjJvOFhj1PleB%2BSN%2BPq5HrrXmIaphuOtGR1eVhiRtmhjqCimN5PIrsVlDUPR6Xz6X2tbOCizwSWml2ML%2FpZXGf52iQbOGeIWckmizk0uIlClxN97LAdYGYJfCawwpJhr1Lm9LBrorwxlM%2FP1aZkIZZaBLPVSka5GatMxVULGEHPVTG1QwoD%2FsCfnYHewu%2BJ4lTm870ttan81fiRO3ZSipOxr45P3xCYTUHYxbX6Nuezxu%2BrPTLApePwvKFLW2l47ytcrPELKprXhz1DB9n33mes4BVwx7o6A%2BTqTqCvjIow7%2BhObA3zlSYttQwsbirvwY6pgEVrtN0%2B3LVORTSel2V%2Be0GuGatyh5fw5zTfA5UESVroCdUF0BGv4ZswtTllGjAzYBO7nm%2F%2Bod263YMi1tl1ZqmUTQInA73HcqxTHH45u93m6HVGTdXyNd3JCqDCzpGsIoXVQQk7J1n23%2F7cCFtxe1a1CK0mjqkupXJ3W%2FjnOERtGGo0%2FJJZk3mGvOc7V3FOiN9O3e6E1gCmfDhz8HY9PqpAsSDIVWz&X-Amz-Signature=267188049b44448780a53c00233b9e7842dc34e2dc6d17d734429040ba98d597&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5GZDRT4%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIB%2FZWlZmxrkWu%2BgpDXdhMXPWQNhzxQMS4hC9BkZ6vsnQAiAOI68qYWK21VfbBdb6nHVgYZGPM8SXJ6JF6lG3T6EEFSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHxSN2v1TPDsZaswqKtwDsXlJh57D6FpcvSZaJfE3ksLVdbRq%2F9E2mwOOI0bce3UwBuUdxTtwahalBfVOZSL1J6n9o%2Fs1VWUfrBWhOk%2BSZWTYQKtV9c%2FTtdqZygWcj4ogPSMNTcDrkdpT%2FJMbz1g17kVzasmOKW21etWsxTb7Q6lFbfKD1Vsorn22iwXBMqmmzahaO%2BYn83AZAxOSNwNpM2NqzDAc2KS%2BjTXrMSndIAG4duvXAlNZWLNw72RRtbeZvRo8KWQIZg9aSPcLavq2yMzcV7wjQIBnQVbmxdE0bcXJreqIDV3DvY7GlC8d1bZWWUn1QLHJIY64HG84GuZ6%2F4VgrIT7NLjuG2FDcMntQpf39KPMvQiHQjpGongjVVP7TXB0vZlRo9iMFYrCWmzPxUe%2Bd6VJ%2B7jddtgiUjIIb7S5ibaF75ze45dkTkSzEMrXFjxMC24T6G8ICCJ84mjv4VjKk67zHzHMw%2BnWqzKFX0wBY3B9Zf1s5uXoyvRYpyvSgCmY0gM3yH92l9QZ1%2B2R40h9%2BX6RkXfufuatAXDbW4VXsoy0VgRHUHcogZH1s1bZwbF6uOKwyEqSVf5MHEbRbNz7TSSrSosoAN8stqJ%2BU4Q6zB04JB1HT12NmlavsLbCugFxwyr5b2uD9kkwuLirvwY6pgEgp9C0f9acm0LCQkRnZX7h8lRos5yHiN6qJAQpIt6ERdifqOkMi%2FvzHIRR3Q9ao4%2FktHJhsh2coCzaMsSNr7S7xaub0lcdo%2Bvke%2Fie7%2F792H0rBuHrjddOg00CiEzy6CDU2%2FaejHiiMpPdNnw8D7PxvH1ZNS7LvAGYgiUGUJv%2F3QAuOnr0oz5jo1Zv%2BAs6LMpL1MIO5j7kLMEyO0OxMF5mz7TDWNLA&X-Amz-Signature=840dccda363b06ef811483da1c10b089598b960b2016028525811f0f092db07d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V32K4LPI%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIGz%2Fv%2FIbSo8OqtNtJGxFOMxMUKjMLfsgBK9Gk3%2FkMo0eAiEA5B9%2B8QYFfkvJDF4Jc0fE1pRZvLumvpwdU6%2FSidqNj8sqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8FmuDE8jRA7ZyGYCrcA4%2FmGdtGLPx736xIk5Igs2akRGLvZ1yEbkuSBESH4mLC5SoVxktCVWS8zsv44eCqUcewiuQboE76CpQup%2BqS4pxIgIcozJSi0YhdMh6w5VtdX1V2jaY8lB3RQVQ5F7VTcG9zWlCewIaIl1VLJBXmSH%2B7VvnejUcSsSk3krZlGJBQQAXe2I9cOULUFW1noxvNguJcX3Ekz5f0zxglSjOtuRFH6T%2FqrFOLbbLg5Wt6JZzrautgwFysAV6XJf99w8x05dQVscnIBucfh9jZRIRPuc%2FeGtnlqvsCWbHx1l8dM9mlvHG92dnJJfhCm9ZUnzKPOuxkW%2FtDXag0QNYPe5pE%2Bp%2BJ0HGMbTne97M7Q4YUL8Ef7Me2Za%2B3gKZqUA%2BFNiwPL%2B397yZozMxQ1xF0pMV43xRGkekqot7zslD08bd371gisQqXHNJkuA%2FTkpXSnVcLV7VtIXkI0%2FhpBoEeFnrDsVtMXEjz8rtmlnPpPkMmIGpcARmrF7IoX4T5Ss1dbkJcZii9cvI83qeA%2Fc0KtHhavPSf9GH%2BNsI5J14WKdTrOjVMgEnadoxAbZAWZ%2FuhUOkdLgshkC3zM2lrcESh%2FFqbGuUOaxoMel2uwn3cCJJIrc3fZQuqu4uSQ1UNPhKrMN25q78GOqUB6BqtcxoJYZ1L1if74MYEfvvwR11OfvYJZngJWF1IuCNsuzCZCkOSCCTYwpjCU5s5rrTQZ5a%2BQqu316aGEHxzFTFBHdClpgXjccQcRS10sSQvq9%2Ba4AaUOf1S5U4el011vx4oFj5hyzLtlhMhLEkdxTQB0RIZqJUE0w9%2FCco2AP1XV9Kis0QUD%2F3r5Lh0psBXH6F94m7KH81jl%2BsKGFzSG80NAzJu&X-Amz-Signature=83e50a580a331300d5527d2ef088d4dc13378b0104f319a816dba1e137ec7957&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
