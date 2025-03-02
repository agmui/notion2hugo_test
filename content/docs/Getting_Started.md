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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZESXE2NR%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T140204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBSEZtzKM%2B%2FG4YDujM2Pgh%2FaJtJZxZc5OtFAAmrmXZMAiEApD4shqQNvZA2n6Oc9qStErbFCmoYBp9DTkR4wricqM4qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPA6gPNwVED6wLnImyrcA4DQCaiZ7vdYRbGsBRDmgxdT3sIkuMHnlyJy3ulQ2mnyqjOy8%2BgrPbtAvDR7zcU0OYg2wqF0QgdJoWn3iUVQWHYkb2NHzAKSA5Ou6ax7l5YMYVqncx90y0JrhBr23fbWTgM9qscZLOcvUlpK1O1E1FpcjWQmcjnZfhYSOf1mInxu6SaBoSPGkgb7Q7fjmd3sATL2H2sSS3pvXhUdrunHqWCudSDXKv2hk145rSDOOqnqGHUpqj9QM6PcyYGK8eCkVfrKs%2Fxncq4mVYrrL%2FX0QUQ89r4CiGM3XEC4gLOQcWHOvrEke3GRCBtYtw1BrIc%2FsyzM7xiiA6RigsiFhmz1Wy5glBOSj7KpmY7dcwvKgO%2Fgjl%2BP3O8vmTnog0HQo0uMZ28UE8vSlrTZrM8fIbAnpc8UwrHxfnA99f6lLmqxYX%2FMPwRUscIvrQdMfaO2AweqONsvbn4CscablOTWijyZohoNEw5qVUQn3KzmC12IYe6mGyvUh9ijtzvbwev2Mo6BlZEHt%2F7vSICPOfus%2BOVZZjL9AEsZLCJrYMjTlTajmpcaIvPGeQo%2FF0PxAni7LXzK6oKzWmwyJiUTPdIZep9O7xTeX1JTJdC34aL4xc32zdfNLXGHAwXS0R192W5OMOj4kL4GOqUByHUQ4tyGs8L4OilsY7pWoDeKpNm6hPMvpKkd7NVu4FdlQehGD32sqw6q6yyJBQ7t1xUazpqqMKk4GzIzqGv1CHOPpDdl1cHu1HqgglThn7ZnXsHu1HDMruR%2FG5hI8W4rTRMZ65xudhUPaHXN8cIs%2BkHuY43kFthRrn9uUheqtPDkmRYja1%2BGKa11pC51ZHS5xXzkWXrxm7ee4jfm3xAKoHSJObpR&X-Amz-Signature=961e63ecbcd4d0259569a322699e5bd9dd247a26e3cc4e03cd894bc248df38fe&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZESXE2NR%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T140204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBSEZtzKM%2B%2FG4YDujM2Pgh%2FaJtJZxZc5OtFAAmrmXZMAiEApD4shqQNvZA2n6Oc9qStErbFCmoYBp9DTkR4wricqM4qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPA6gPNwVED6wLnImyrcA4DQCaiZ7vdYRbGsBRDmgxdT3sIkuMHnlyJy3ulQ2mnyqjOy8%2BgrPbtAvDR7zcU0OYg2wqF0QgdJoWn3iUVQWHYkb2NHzAKSA5Ou6ax7l5YMYVqncx90y0JrhBr23fbWTgM9qscZLOcvUlpK1O1E1FpcjWQmcjnZfhYSOf1mInxu6SaBoSPGkgb7Q7fjmd3sATL2H2sSS3pvXhUdrunHqWCudSDXKv2hk145rSDOOqnqGHUpqj9QM6PcyYGK8eCkVfrKs%2Fxncq4mVYrrL%2FX0QUQ89r4CiGM3XEC4gLOQcWHOvrEke3GRCBtYtw1BrIc%2FsyzM7xiiA6RigsiFhmz1Wy5glBOSj7KpmY7dcwvKgO%2Fgjl%2BP3O8vmTnog0HQo0uMZ28UE8vSlrTZrM8fIbAnpc8UwrHxfnA99f6lLmqxYX%2FMPwRUscIvrQdMfaO2AweqONsvbn4CscablOTWijyZohoNEw5qVUQn3KzmC12IYe6mGyvUh9ijtzvbwev2Mo6BlZEHt%2F7vSICPOfus%2BOVZZjL9AEsZLCJrYMjTlTajmpcaIvPGeQo%2FF0PxAni7LXzK6oKzWmwyJiUTPdIZep9O7xTeX1JTJdC34aL4xc32zdfNLXGHAwXS0R192W5OMOj4kL4GOqUByHUQ4tyGs8L4OilsY7pWoDeKpNm6hPMvpKkd7NVu4FdlQehGD32sqw6q6yyJBQ7t1xUazpqqMKk4GzIzqGv1CHOPpDdl1cHu1HqgglThn7ZnXsHu1HDMruR%2FG5hI8W4rTRMZ65xudhUPaHXN8cIs%2BkHuY43kFthRrn9uUheqtPDkmRYja1%2BGKa11pC51ZHS5xXzkWXrxm7ee4jfm3xAKoHSJObpR&X-Amz-Signature=7abfbbd47e0a24123678a24ae91e7804dabd3d92da52b120a325bdb87c1718b1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YPJK37P%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T140206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChzZOXC9Kr83on2lzC7zG3UWQg9Z4F2QtY0KVoVVHqlQIhALdGg1dZa65yrseo5HPnBxBIOKj9iIX51LkcbKCeJ6vMKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYwLh%2Fmrs%2FRYKXLYMq3AOLf89gTtc6eG32HdHUN0hFtC%2FuqP7XXkXvfbUU3apfarooTkNoN8zoxu%2FHmICcgGea%2BI4WZwSzDwmYW6gFuWmgDfn2YO5WGMk2vFIwwoJU9eXzmPRu0gAKbgr2zVzfV9lzYOwzJKUAIh%2FGDJPiLfwxR%2BqERPlfk3agdKINK62qVBZp6IAT23bFqT0mJVMltb%2FnBeBEF%2FONAjdBjcSpieMg0KFmzmN6vOnDrKBOOOJrliN0%2BKfIaERiK4mkLPCKdJkpFjNdvOVQVBaQj72GVBJSbUGIsBlscdKZW9GNEgej6Ne55dnK4syuOe%2FxrbwjDOPwJR5ikgDtvSUj4%2B%2FiAIje45BpFy7pJSUISLd7mpa7QGgjlt67Mk4mWr605FKnQ3JoAy%2FpzDFxsuLMx8HLRCJ8IS%2FDX%2FU0VsSS0lYkzSYo3cL3n1ZQIE9bmwIZ9Twu86QBhg3rW9EjXWR7P9ovQF1S4LiezdqYKVa2MmG7Hwpkg9%2BtI8JdmJSCHP5iZLDHShWpv7uD4hOI30X3atSxh3LcNFEpLXDF51vf2DEwjABpIrMHpIAV8Q6UOJtoxnz%2Bhb8guazz7D6CQiTQrqkhMoppd0b9%2B%2FJeGiY7u2UNsRmhTN7Cvj0bjER3LRjLEDDv%2BpC%2BBjqkARVvSINbn4LxYu6weyHbONZojgHLfoNckJb%2BNepsFUVkBRBBq7GdO0aPRhUr9%2BnAZCYk5aa13rL%2FEZIO2aQy%2B6PR40IX3KnATWvdcJ9TuZJVAc04czGOxXYSGi14%2Fbuyz639uzizjRRHtVu8AbiKC%2FIGioXrmVauNyPSYCxxdbTCVmRvhDN97EOcMEwQHZ%2BUOrgpVaVSlZfWsuiezttJfRKjHjIe&X-Amz-Signature=f22309cc3be49887fab3f1533881cd5c7426e6f64635bc21d5f2e6bbbf38ea1a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFZTMTDQ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T140210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKGk5CeqV2TkK%2BaY7PvcYTawkWTxPJn%2BKriEYMnErf5AiEA65%2FSuDUQcXtqolObA28jhWxqeTVZP61ovqjtVZMKU%2BAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP20JHwBF4La6ZzAjCrcA3lcp4F9fj2r9uCQbl14FIEOjGpJ%2FwRcANMlR6NkMqhuobJ17gVpA%2BMTqoK%2BqZJqcuAsWpkAXu3N%2F2o5TJoE3eLWvyAgOS%2Bgk%2BsXookM8fK0oiMCtlPoLU0Mj%2FfSfEEmt4q8sPzSYLufeWpnU0VivBZKfpwS8JjzxpOUHUsTqFX6gNt7ryqKVkhJ%2F5uTbhR7XQ2OHXNN9%2F2zJgW8NrzAFWFV0aiToksc54urBPzICC%2BP8wno1EBcoU4yecYFueUV%2B%2FvPR2iEZ%2FjIcc0jDHMGqPT2csKGJE%2FpUK0aWk%2FUYkdH%2BVOUOcgYld5ghL98ANP0m%2FUwd4xPgl0WbH5UQy0z65s8drfVS5SFhfzQdJBzXrjYuStttXDbQ2lvH6Ob2FcuBuEV9VU5LsnxPFLpHaw0Im0DsxGpYj0s0Dc7%2BfBIBmhP3ermF8e7sT%2BM%2BHlvs6WaWdvv2FPa24TwoAbNE0UOp1%2F3dOMwaEx%2BWqn9glCCkViKxUd96Wh8rnpVZI6Q7sRYsbtosVIlggiGPIOygft7d92IhuWmZ%2BaLm9hgadHFzvW6%2BAV5uzVsZRaY0p6Kjkt1EtyzXEdb6d1hoosazuj3%2FAqE52%2F9Q84qnEHLCSdWgOvwRXAg2mmwC9vt6%2Fy4MOv6kL4GOqUBRuVmRInDfZpUoc78WoNvcxHbigcZ5yCmKJZkFhJxRyViMCDUA%2BmikWFjHf2Fj7r8HfFmZLgKe6ouXc%2FA%2FWEZ%2FnMFjZIL9Q%2BCVyNjhcNmg9MVtc3Qql9O7wfKvTOhXVXlvqaOAs%2FxX%2B11OXHRLP08puv7hHMa4hYERkUR5hahHxivCO5iOR%2Bo7ACZviXnYKjIx10WFOda7wVA59LRK7TTNqsi9Bue&X-Amz-Signature=b122762fe060177ab94d00e4159722654669ca592a8f5ae5962abd6ffa0a62aa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZESXE2NR%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T140204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBSEZtzKM%2B%2FG4YDujM2Pgh%2FaJtJZxZc5OtFAAmrmXZMAiEApD4shqQNvZA2n6Oc9qStErbFCmoYBp9DTkR4wricqM4qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPA6gPNwVED6wLnImyrcA4DQCaiZ7vdYRbGsBRDmgxdT3sIkuMHnlyJy3ulQ2mnyqjOy8%2BgrPbtAvDR7zcU0OYg2wqF0QgdJoWn3iUVQWHYkb2NHzAKSA5Ou6ax7l5YMYVqncx90y0JrhBr23fbWTgM9qscZLOcvUlpK1O1E1FpcjWQmcjnZfhYSOf1mInxu6SaBoSPGkgb7Q7fjmd3sATL2H2sSS3pvXhUdrunHqWCudSDXKv2hk145rSDOOqnqGHUpqj9QM6PcyYGK8eCkVfrKs%2Fxncq4mVYrrL%2FX0QUQ89r4CiGM3XEC4gLOQcWHOvrEke3GRCBtYtw1BrIc%2FsyzM7xiiA6RigsiFhmz1Wy5glBOSj7KpmY7dcwvKgO%2Fgjl%2BP3O8vmTnog0HQo0uMZ28UE8vSlrTZrM8fIbAnpc8UwrHxfnA99f6lLmqxYX%2FMPwRUscIvrQdMfaO2AweqONsvbn4CscablOTWijyZohoNEw5qVUQn3KzmC12IYe6mGyvUh9ijtzvbwev2Mo6BlZEHt%2F7vSICPOfus%2BOVZZjL9AEsZLCJrYMjTlTajmpcaIvPGeQo%2FF0PxAni7LXzK6oKzWmwyJiUTPdIZep9O7xTeX1JTJdC34aL4xc32zdfNLXGHAwXS0R192W5OMOj4kL4GOqUByHUQ4tyGs8L4OilsY7pWoDeKpNm6hPMvpKkd7NVu4FdlQehGD32sqw6q6yyJBQ7t1xUazpqqMKk4GzIzqGv1CHOPpDdl1cHu1HqgglThn7ZnXsHu1HDMruR%2FG5hI8W4rTRMZ65xudhUPaHXN8cIs%2BkHuY43kFthRrn9uUheqtPDkmRYja1%2BGKa11pC51ZHS5xXzkWXrxm7ee4jfm3xAKoHSJObpR&X-Amz-Signature=d7cb6195c283eb5bcb80c513b2d67d7273a8d772812a559a351208a20f7f8038&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
