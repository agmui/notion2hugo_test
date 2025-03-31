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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5L73K22%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T032944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCEILhG%2F14v83SJidEF5FII1b2quyQY8dMw8bZnGnlPFQIgWZOfW8RQGiFaThqd%2BFJtzkFlt5jQ%2BNgYrtneQu0mRGwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMZnqgSz63S3WqxyxCrcAzPQGGufzsU%2B92RPmSZKOeo0O8%2FlL6FIi0DVWMYgtBNjetcl0QHuKWTurSlNcCwcUa%2FIlu84io7VGZ9em0urN2KAOgu%2BxToawS0b1%2FrAjYwoOUrdwsf%2Bf0YGDnjsRb14RQ0njos9L97Q3S8zF89l%2FGdM8XLiHNYglWaEaEucheqXWMoaifzHOwJUYBj4JpuQIE7Z%2BkKKOQFq4uOHYoxuf46KKGwFFPpehcCqyHnvJqezENN%2FRLk8Qc0jTckY9G9CPm%2FPQQuckDLZiOTF1B9F3WBQL9fy0wUcjMXRPjRkWZnulDyNIAGhDaWalqnqsO9I8otynOhHT1CAt%2BrlD07JWlanGH494TzbsG93xt3vwkeiLlbsnZoDGsT6h70sey335%2BCkBuC9TVBe1vkJBMP2JLQ255Flw3BYN4nEUOKdrIgvGy2fcN4dja4zaZX1qq9ae9xxyPdmcTKzqk01cqL7REicdQL7eTUdV3ifM5itJYZZiRnJLFsosa1ohNRgLxuXhnL78vw4qt7KnELX0nEYwt8w3uVhhG4HbhTI9r2FPNx2lwFRQJX51wIrQ%2Frmg1At%2FJu6bTLPQdhAmaziG2xDhDQvnpkVcbs9iG0BgfpypbdSQtlLUnZRsyGvamPeMMCUqL8GOqUB60KaH%2FcfILJPlRwwS4ETNIbNbOoewpel9soDT4EnnIyztW9cc7cmdWJ8LlK7DH1DHn5f0xuucDKEiQ2zYG1it4AL4rzKxGUJk7Ez6wRJubAtpfZTreTg9kitfCC40I7gsrDPuQzjAvP2jMdtNYYophVtjufwgbBV4dquZvfLIxcKbbccpgEn%2BMYxITrj28VyTjvuB7KmXGDXeRYhPjqlEy0V4So2&X-Amz-Signature=f5518029a26c32817b7393bb7af589da0398c420a7a583f3771a2e695e935f16&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5L73K22%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T032944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCEILhG%2F14v83SJidEF5FII1b2quyQY8dMw8bZnGnlPFQIgWZOfW8RQGiFaThqd%2BFJtzkFlt5jQ%2BNgYrtneQu0mRGwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMZnqgSz63S3WqxyxCrcAzPQGGufzsU%2B92RPmSZKOeo0O8%2FlL6FIi0DVWMYgtBNjetcl0QHuKWTurSlNcCwcUa%2FIlu84io7VGZ9em0urN2KAOgu%2BxToawS0b1%2FrAjYwoOUrdwsf%2Bf0YGDnjsRb14RQ0njos9L97Q3S8zF89l%2FGdM8XLiHNYglWaEaEucheqXWMoaifzHOwJUYBj4JpuQIE7Z%2BkKKOQFq4uOHYoxuf46KKGwFFPpehcCqyHnvJqezENN%2FRLk8Qc0jTckY9G9CPm%2FPQQuckDLZiOTF1B9F3WBQL9fy0wUcjMXRPjRkWZnulDyNIAGhDaWalqnqsO9I8otynOhHT1CAt%2BrlD07JWlanGH494TzbsG93xt3vwkeiLlbsnZoDGsT6h70sey335%2BCkBuC9TVBe1vkJBMP2JLQ255Flw3BYN4nEUOKdrIgvGy2fcN4dja4zaZX1qq9ae9xxyPdmcTKzqk01cqL7REicdQL7eTUdV3ifM5itJYZZiRnJLFsosa1ohNRgLxuXhnL78vw4qt7KnELX0nEYwt8w3uVhhG4HbhTI9r2FPNx2lwFRQJX51wIrQ%2Frmg1At%2FJu6bTLPQdhAmaziG2xDhDQvnpkVcbs9iG0BgfpypbdSQtlLUnZRsyGvamPeMMCUqL8GOqUB60KaH%2FcfILJPlRwwS4ETNIbNbOoewpel9soDT4EnnIyztW9cc7cmdWJ8LlK7DH1DHn5f0xuucDKEiQ2zYG1it4AL4rzKxGUJk7Ez6wRJubAtpfZTreTg9kitfCC40I7gsrDPuQzjAvP2jMdtNYYophVtjufwgbBV4dquZvfLIxcKbbccpgEn%2BMYxITrj28VyTjvuB7KmXGDXeRYhPjqlEy0V4So2&X-Amz-Signature=a506b63b6a8e914aa7bb2089a3d0090bf16e311b0e3824e87eddfc40ab0bbd72&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROSUNRIE%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T032946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIEINEIX6Iq%2Bc1Op8ZZCTzYQa1NesNrnRZPVVcHLF3jtzAiApDLd2giUAnbSBZLWQZ%2FkHkhSbl72%2FxPKObhHZHvSyZSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx44Yf95c%2Fngdu1ZqKtwDjPnWyCCppWv0YLs734e0EleHY9JAVsNPdKkYGmdKuK43P7tmdGLH3bRJEVnPYhKCR%2Fo%2B0A31IT%2BD2dsuYkoETVpcoNprpp%2FnJDw8D8t8zPf07WhfoiaR%2F1qdUsBvYYxf7%2B9PphNwLnX0pUja87oSDUXas3zPEiyKsO36Dcnr%2FLHm8XiWU9%2B0Ckgsn2BSYXHUmslRabvq4lZs%2BVLaPWRCCrnXzSWwByrfs7yaBcMFwVZAan3Ke9nWe%2BTIhe%2FrprYqosq6foAMPrJok1RIEZ5lE3RJCVuoK1G58iFuz8uXyyJ9gIiGKOZwDGQgRUz9N%2F58ZgiTePBMlDFrx2mu0mbg6xgVC%2BW%2B3JrmnHLsnTCkicx%2Bae%2BZdkTXFWE0kxinNC91COMk7wUef8ioEWa4jDQUiONDtG%2FOqpeqhI1omvCo4Kk9LH96DzZSEZSJ8Kd0aGtMIYGTXkPC8C%2BkzXqpqDqWcaHSM2ZAx0xZ%2B1JSuguiii2G0bz%2FH6sRsJKvHYltgeYBlVo5eLEccXVHq7cKHabtx4w317dp7kBqa5Lja5ZXejllSccn4tU92UxO9Hh8SWGckORMQ4GMIwGV%2BW%2F3QYiMrBmDjikRPxk%2FoPPg48pQetBusrhKjOzwkQb%2BoVgwj5WovwY6pgEE2MA8QkYIYCVQaRlHC78D8oGCS%2Br5s1I81CVps43jco3NjSLYUJqHCXGM7Qp6fTt5d7zvvM0MxYrmgnPflv%2FerY%2BDUJ2uR7rCelUNBs7oPLkGdMAQyHKZ2anC92r9JodiZwf4R0W%2FYsqCEX%2BO4OKmOpbx%2BeEBBbCc5G2NZrfQrqBsh7RripHfyNStkFTRqqnDSRjNXqtbX5XjhYqA%2BXQ%2BrIqknNqj&X-Amz-Signature=8d6d14dca9075e7a2f47904852c41276b999cb8b43f5b45add94b5df3934afd1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAINHAEI%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T032947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDpsBmVzVqYjm%2BEt5RT%2FeGC51LnvkVc8bCJHA2hieftEAIhAOLvMK2u24F66QPO0zvekNADPPnFAH%2B1TK9Po%2Bl7w%2BeMKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznMUEBqkBbgsW%2F1zMq3ANASwaYaHGCcqX2o%2FPVPvbgiMeUkVCXo1X%2BRTIxLWFwrf4HeZ4M8tr3jLERqiRd%2B7S9x9Yg3QcEs2iKvs22d2Pjjghd4nYNeZ9V9o7jywCw3mCBmpM8TtwOybwSd1VFt6IhxdXY%2F6x8%2BMuhxPfZgUMKUw2T8GSa3IdNInpoKN0GpBnv8ChRHrngHNZZe5KIBA3x8ynhdZ9RNhN23ccw87il7srJI57O7D%2FumrR1FL2RIAVl4sLJgtZ1SDK6eGog30YLGwzIKNkYV%2FMmc5mZqf77xhekXrhhqjTRysfdcOy3%2FZ3%2BQ2yFqj4gGUnFWsUR8dGewblKw7xBPHSBMxwdl7JIkvi2VN%2FmgjMr%2FDeBG4JdNIh5mMwinJvMOCh8cc7HmAZ5i3xgxHAFutzbDwtN8d72UiFoszMnyvBywGNSFRZjiwmAANnJEYEik5m9YxFRtE5EwQZ0W7xeiJRZnqd85%2FjRU4IjLkHMD3FenVe%2FixKuWSnEHL6yguUfvBcxwAcndhkGlRVKici8wg2ShLiL4UTNXKUlNHVw6WjoOutZgPwENuYtg%2F4ABxBZI8c8B%2FXFMwijAoOaHGXlX4srRF4%2BfMbmJaBPIEvUx0a%2BM4yzFlr4qjI236LqtLc15aFiNzDMlKi%2FBjqkAfgDUAEStbFa3OFDR7mt2vAaLHhrsuBE%2Fp1PC0cY%2FUq9K6g94kUAM4G7zt0EbEVkcm06wT8ZwaUgIen2Q4sOJQ9Cn%2B1UkzP0sXmnGbf8rx%2BmP8CD5Wz5TvcUCcB0bmRl%2FZLGx0f3UOTF1umJYF9JRwtt6sUYgtAWkY4sewH3XAtKXGnqNu1hZdcyQikA1xhNxLCCYcKR2kcZgw4djKcpZrLulKgo&X-Amz-Signature=5254161d67a80301ce35d8178f9a965fc999e18d7d863867343f949046880275&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5L73K22%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T032944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCEILhG%2F14v83SJidEF5FII1b2quyQY8dMw8bZnGnlPFQIgWZOfW8RQGiFaThqd%2BFJtzkFlt5jQ%2BNgYrtneQu0mRGwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMZnqgSz63S3WqxyxCrcAzPQGGufzsU%2B92RPmSZKOeo0O8%2FlL6FIi0DVWMYgtBNjetcl0QHuKWTurSlNcCwcUa%2FIlu84io7VGZ9em0urN2KAOgu%2BxToawS0b1%2FrAjYwoOUrdwsf%2Bf0YGDnjsRb14RQ0njos9L97Q3S8zF89l%2FGdM8XLiHNYglWaEaEucheqXWMoaifzHOwJUYBj4JpuQIE7Z%2BkKKOQFq4uOHYoxuf46KKGwFFPpehcCqyHnvJqezENN%2FRLk8Qc0jTckY9G9CPm%2FPQQuckDLZiOTF1B9F3WBQL9fy0wUcjMXRPjRkWZnulDyNIAGhDaWalqnqsO9I8otynOhHT1CAt%2BrlD07JWlanGH494TzbsG93xt3vwkeiLlbsnZoDGsT6h70sey335%2BCkBuC9TVBe1vkJBMP2JLQ255Flw3BYN4nEUOKdrIgvGy2fcN4dja4zaZX1qq9ae9xxyPdmcTKzqk01cqL7REicdQL7eTUdV3ifM5itJYZZiRnJLFsosa1ohNRgLxuXhnL78vw4qt7KnELX0nEYwt8w3uVhhG4HbhTI9r2FPNx2lwFRQJX51wIrQ%2Frmg1At%2FJu6bTLPQdhAmaziG2xDhDQvnpkVcbs9iG0BgfpypbdSQtlLUnZRsyGvamPeMMCUqL8GOqUB60KaH%2FcfILJPlRwwS4ETNIbNbOoewpel9soDT4EnnIyztW9cc7cmdWJ8LlK7DH1DHn5f0xuucDKEiQ2zYG1it4AL4rzKxGUJk7Ez6wRJubAtpfZTreTg9kitfCC40I7gsrDPuQzjAvP2jMdtNYYophVtjufwgbBV4dquZvfLIxcKbbccpgEn%2BMYxITrj28VyTjvuB7KmXGDXeRYhPjqlEy0V4So2&X-Amz-Signature=75aa977479e5a7a2fba1419eaa94ab21a9f454f4fd84889ca1e4bdaacb169b0e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
