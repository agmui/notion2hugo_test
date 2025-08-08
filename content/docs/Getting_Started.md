---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFPLRLLJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCkZNUEGcPz0jLDlIvJMfXXG61IOePiGuLLhXs7hvcAdQIgeaKWMlH%2BGQpN8RUws%2FO4BaHwpqbjMl5ft%2FoGtOqX77cqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEaNrGOqdMQ7sMbrjCrcA9XuboTUJ%2F1Le%2FmWn%2FLKR%2FlG0Dh6YqNN8RwKjR1xEQt6JUxMqBhu%2FmIk84hzt9et4czkY6vZDw1Y3HGjDNKXY6r06FHqUDAslNLgLtaUpnFHYkv5CaWR6MDocN9mR1DDYUsnZLn2%2FdjpWh1GQz6bzjVs3uVaywk5T1V%2Bl%2BYXKRHYGSrEU12YikQ%2BPMenL4ySyzD0Uw09odS6gUYh9MDfnSDsGOAXOdqt%2BS29YkJX6J7x7t7Enp2OUAXZtU1K7llElkE%2FeicG5pBTAOkSYDvu11Htk1Q4CSq8Y1K7XCp4D38XOJPzzu3OgGpYFOv3eyee4EShii6T7Cd%2FdsalJFevT7WSOFRXq2m3%2BL0OrABv%2FTs90r9hvESslBXrcHB7cMYhsjOSIP6yVPTj9uwwGbCgF2VwnzU2r204UmLl6CShT5VFrQJ%2BjCdBPPHODbn9Q1zE%2Fi96jCH8DBsoJCQALdVd7PZG%2BFni4scczgATkDv3VJPSd5cjbC8ZR2d2JkEMH2iwICr7nmWqL5qU1xCyQAPQ5fL%2FyU36LXz0b%2BZcL9G5LSRhUXzmVJzxbotemZ5G22u9ZUbdhURue%2Fq0RqSdLwCKpF6FmkCQhVJhNVUYmKBixbaCESRe5Lw0f6tSUQKhMLjH1sQGOqUBlz9NSZb2FVCrU081o%2FVchDu8VhD%2FDelzkfVQb%2B1DioGh%2FSFNbj2Jh%2Bgda1dJi8BHlgykj5AEetC8PtqP3isWp4DJMnjY78lfy7EMH7xaezB9Ot6ag6ygoLa1mrI2P3t6l%2Bk5xrwr5mKemLcpoUqLtYogDkQ5bNRarS1eBr1xzVBfSoEr9Blvi4QEMGCx6P579pGZpTGkOi4mdPu2Mv%2FZSc2Bbpfw&X-Amz-Signature=d3c2f3d25305a9a08814777ffdf96c8384eda7235f4f90e16b90d0f7e1f26ff1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFPLRLLJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCkZNUEGcPz0jLDlIvJMfXXG61IOePiGuLLhXs7hvcAdQIgeaKWMlH%2BGQpN8RUws%2FO4BaHwpqbjMl5ft%2FoGtOqX77cqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEaNrGOqdMQ7sMbrjCrcA9XuboTUJ%2F1Le%2FmWn%2FLKR%2FlG0Dh6YqNN8RwKjR1xEQt6JUxMqBhu%2FmIk84hzt9et4czkY6vZDw1Y3HGjDNKXY6r06FHqUDAslNLgLtaUpnFHYkv5CaWR6MDocN9mR1DDYUsnZLn2%2FdjpWh1GQz6bzjVs3uVaywk5T1V%2Bl%2BYXKRHYGSrEU12YikQ%2BPMenL4ySyzD0Uw09odS6gUYh9MDfnSDsGOAXOdqt%2BS29YkJX6J7x7t7Enp2OUAXZtU1K7llElkE%2FeicG5pBTAOkSYDvu11Htk1Q4CSq8Y1K7XCp4D38XOJPzzu3OgGpYFOv3eyee4EShii6T7Cd%2FdsalJFevT7WSOFRXq2m3%2BL0OrABv%2FTs90r9hvESslBXrcHB7cMYhsjOSIP6yVPTj9uwwGbCgF2VwnzU2r204UmLl6CShT5VFrQJ%2BjCdBPPHODbn9Q1zE%2Fi96jCH8DBsoJCQALdVd7PZG%2BFni4scczgATkDv3VJPSd5cjbC8ZR2d2JkEMH2iwICr7nmWqL5qU1xCyQAPQ5fL%2FyU36LXz0b%2BZcL9G5LSRhUXzmVJzxbotemZ5G22u9ZUbdhURue%2Fq0RqSdLwCKpF6FmkCQhVJhNVUYmKBixbaCESRe5Lw0f6tSUQKhMLjH1sQGOqUBlz9NSZb2FVCrU081o%2FVchDu8VhD%2FDelzkfVQb%2B1DioGh%2FSFNbj2Jh%2Bgda1dJi8BHlgykj5AEetC8PtqP3isWp4DJMnjY78lfy7EMH7xaezB9Ot6ag6ygoLa1mrI2P3t6l%2Bk5xrwr5mKemLcpoUqLtYogDkQ5bNRarS1eBr1xzVBfSoEr9Blvi4QEMGCx6P579pGZpTGkOi4mdPu2Mv%2FZSc2Bbpfw&X-Amz-Signature=63a9680169073c7d1a2d4f310f2a870809d2733f2af8abb02ff7d33e07fe62d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFPLRLLJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCkZNUEGcPz0jLDlIvJMfXXG61IOePiGuLLhXs7hvcAdQIgeaKWMlH%2BGQpN8RUws%2FO4BaHwpqbjMl5ft%2FoGtOqX77cqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEaNrGOqdMQ7sMbrjCrcA9XuboTUJ%2F1Le%2FmWn%2FLKR%2FlG0Dh6YqNN8RwKjR1xEQt6JUxMqBhu%2FmIk84hzt9et4czkY6vZDw1Y3HGjDNKXY6r06FHqUDAslNLgLtaUpnFHYkv5CaWR6MDocN9mR1DDYUsnZLn2%2FdjpWh1GQz6bzjVs3uVaywk5T1V%2Bl%2BYXKRHYGSrEU12YikQ%2BPMenL4ySyzD0Uw09odS6gUYh9MDfnSDsGOAXOdqt%2BS29YkJX6J7x7t7Enp2OUAXZtU1K7llElkE%2FeicG5pBTAOkSYDvu11Htk1Q4CSq8Y1K7XCp4D38XOJPzzu3OgGpYFOv3eyee4EShii6T7Cd%2FdsalJFevT7WSOFRXq2m3%2BL0OrABv%2FTs90r9hvESslBXrcHB7cMYhsjOSIP6yVPTj9uwwGbCgF2VwnzU2r204UmLl6CShT5VFrQJ%2BjCdBPPHODbn9Q1zE%2Fi96jCH8DBsoJCQALdVd7PZG%2BFni4scczgATkDv3VJPSd5cjbC8ZR2d2JkEMH2iwICr7nmWqL5qU1xCyQAPQ5fL%2FyU36LXz0b%2BZcL9G5LSRhUXzmVJzxbotemZ5G22u9ZUbdhURue%2Fq0RqSdLwCKpF6FmkCQhVJhNVUYmKBixbaCESRe5Lw0f6tSUQKhMLjH1sQGOqUBlz9NSZb2FVCrU081o%2FVchDu8VhD%2FDelzkfVQb%2B1DioGh%2FSFNbj2Jh%2Bgda1dJi8BHlgykj5AEetC8PtqP3isWp4DJMnjY78lfy7EMH7xaezB9Ot6ag6ygoLa1mrI2P3t6l%2Bk5xrwr5mKemLcpoUqLtYogDkQ5bNRarS1eBr1xzVBfSoEr9Blvi4QEMGCx6P579pGZpTGkOi4mdPu2Mv%2FZSc2Bbpfw&X-Amz-Signature=226be393d1ba51c335c7468f87a6525ba41891ac82cfd87a00a04a1f23780545&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DJI5AL7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCpBmnRzkewTIg3J2%2FQ%2BbI68agarjfRUl0pq%2F9sCgqveAIgfZu5vHDtpGxNgSkBE6v%2F5FysOzNouKqBOqZBvSkCVcQqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEntNjBw2ydW7IUaGyrcA9j%2FxEWyj%2B175qv%2Bma2NKa2qOJ2Geso3mx8VnYzCOQA8XLEpgVttdkisBKSp3WyqI0emFfai1Bc1F0S%2Bv5Fg0CfTvI64oc5mhx99WpbX9P%2BUkLHosD9IerRRGSwhHI0RYLUCaBCPWZ%2BEvQXEbt5tXzUfe3E6r48JFxZjbyMgyS5OqD3rfJEHqfr6DPA0YbJRQzKPm%2BB1leSXh4BrWp1tHYi%2Fqqx27YXm3tCDo9pb0LVAkx8URIxbuuCOHMrOcPZvZItwsOuLwkywLEn1DiqgRCxAc9LdFRavhu5cowH5LOQQ%2Frd1uw%2FZ8Fw%2Fsxmk51pMhnik6lNJ7YOg%2B%2FgE0%2BuPZVbd4UGpFrgPYZ075GoURpRNHo%2BbbmXj8JpdLrqpK1Aaf%2FMSfV%2BWi8X8HzYevte0y4lQT2YC0WZK2CgETJ9mxqmEIlpcdoogcAjp1Dsv%2BYjFC0ckw%2B0Hv0Vbmv7mzwhAKNdveofig6KL8PwJR4z4bLRia%2BecbTVC0TBbiQQE5w6%2BUMKfzOFUDesHFDaMi4aY0TixLgIIOlaZxw9aVwiSzoO6IIcN10ewyaI7A0UJ%2BCB%2Fwt8zuYqqM1fPJU1oBGj8mcCQyJYtnE336c8HUbOohE9ZUjx1W7ostp0UhAxyMMXH1sQGOqUBVG6hYRdSinI4w%2Fw5NMc0SZQw2SDbg8%2BIpSZ3%2BT2YTm4Cddemx4CBOOv6ZaAW392r9iIUN3Zfv8D385o4zvEIEnfeO3UlLPQIzySTZiPKwqHBPsmkk6jIxa51nVOyPV5AzQQGwPpKll3YqlkdKGcVOj7XwoCIcSEAEm11R%2BJGAfehAm6buBX7HfDEtIjo468sK3oNCqkfv9HTr0Ub0OJ7nridtqWt&X-Amz-Signature=06940a981ec30a9dde9d008684bad00d03faa74cfa2efd4924b41338b7e13182&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYFF22HD%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQD96v2oxl9SI%2FuPaUz%2FaX%2B4fZ%2FJgbRT%2BtMg%2BpVdmV30lQIgJ13aVtyCVmrvNPvm8%2Bi1hAc6vlzrupu8%2B8gcZUAnN4IqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvB68Sn2v1jJmJt3CrcA7TKn3lRkM8%2FOjufuJi68%2B4hhADjtJQP%2FO1mAhjSe3itmJsj1P6%2BsFDSdqH2KJLqeGJXcZkWKOoUraxSvrW92L%2FGcMhPWbfh%2FmLDI%2FRAj14tAvPl82pAr4IkBaL1yLCvHuvWPPTBZNm5xQa%2BBTqvBitP9gCsRHOXuOncShxfQ2orJjQ4m5JIIcae%2BY4jPt1DtC41jhxqFxqWrzXwJ3H%2B0sGwDbaw1i2eYv3YZIxYkiOr2xH69bbKzaNSeDwpNHI811VQ4xkxfrEeyOkSxm8brxggdgEa%2BX9HeN0NWaplsob9T1cDaJn4AJLMrsCV%2B6gESjWyahSZozwWOqIycD6kel3Mao6HLfmDAVhovGtIpBTPSRwZd8f6CyaeMgtL9xODaTJrfLy1u7dScY4XGB4E%2BDlcLVRQ50HDp6SVckHJ9%2FpSw%2FZAkdru36fJqFyhZmjQF0PjAKNM%2FU%2BTlXeTGRBG1YfYD%2FP7sKez5wv%2BVRen7JNkAaQFJuvNimswICRRqHEwb%2FSH%2Bq2opk8fv%2FZUpTaaJYsYmBVhMThnDHk%2BtDSDrfR1Alnk6R8w9Fgp8%2Fz%2F4IiuT9TKpqQ0ygUJ0jN37Opz8R2%2BxBqDbFOqMfmDjYqBpellq0tSMSUEeK6TjEpOMJeg1sQGOqUBPQijYHepjTJ9VrR2oRdUpG94MNNXXqkbiqcT80tUOCkYCkvghqwgWh42sEJbv8LhumHgBCK7jVXzwGFifqJ4zQa1Rozp0lCE5QFNhOE2%2FxtIyv64nkhKemnj22y%2BYUWNFkhrWx7zJVvU%2BxJr0%2BSn3gyNmjZYBEaYpNSsKmaJl2dE1AsTxu61SDs5M82MXnsqGVDT0%2F3jVtntKkhWbr49Eayq9zbi&X-Amz-Signature=924a4ea3449b7046cacfc53a0d1a1c68b230d0591f605d7a7b17d22eeccfae43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFPLRLLJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCkZNUEGcPz0jLDlIvJMfXXG61IOePiGuLLhXs7hvcAdQIgeaKWMlH%2BGQpN8RUws%2FO4BaHwpqbjMl5ft%2FoGtOqX77cqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEaNrGOqdMQ7sMbrjCrcA9XuboTUJ%2F1Le%2FmWn%2FLKR%2FlG0Dh6YqNN8RwKjR1xEQt6JUxMqBhu%2FmIk84hzt9et4czkY6vZDw1Y3HGjDNKXY6r06FHqUDAslNLgLtaUpnFHYkv5CaWR6MDocN9mR1DDYUsnZLn2%2FdjpWh1GQz6bzjVs3uVaywk5T1V%2Bl%2BYXKRHYGSrEU12YikQ%2BPMenL4ySyzD0Uw09odS6gUYh9MDfnSDsGOAXOdqt%2BS29YkJX6J7x7t7Enp2OUAXZtU1K7llElkE%2FeicG5pBTAOkSYDvu11Htk1Q4CSq8Y1K7XCp4D38XOJPzzu3OgGpYFOv3eyee4EShii6T7Cd%2FdsalJFevT7WSOFRXq2m3%2BL0OrABv%2FTs90r9hvESslBXrcHB7cMYhsjOSIP6yVPTj9uwwGbCgF2VwnzU2r204UmLl6CShT5VFrQJ%2BjCdBPPHODbn9Q1zE%2Fi96jCH8DBsoJCQALdVd7PZG%2BFni4scczgATkDv3VJPSd5cjbC8ZR2d2JkEMH2iwICr7nmWqL5qU1xCyQAPQ5fL%2FyU36LXz0b%2BZcL9G5LSRhUXzmVJzxbotemZ5G22u9ZUbdhURue%2Fq0RqSdLwCKpF6FmkCQhVJhNVUYmKBixbaCESRe5Lw0f6tSUQKhMLjH1sQGOqUBlz9NSZb2FVCrU081o%2FVchDu8VhD%2FDelzkfVQb%2B1DioGh%2FSFNbj2Jh%2Bgda1dJi8BHlgykj5AEetC8PtqP3isWp4DJMnjY78lfy7EMH7xaezB9Ot6ag6ygoLa1mrI2P3t6l%2Bk5xrwr5mKemLcpoUqLtYogDkQ5bNRarS1eBr1xzVBfSoEr9Blvi4QEMGCx6P579pGZpTGkOi4mdPu2Mv%2FZSc2Bbpfw&X-Amz-Signature=b9346147eb7fe4c40282442ed025c61e2452560109973032ec31ca623db30088&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
