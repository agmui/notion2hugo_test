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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDEOGBNL%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbbXQyjQhJO7kjmivmhDvHZGqn5zvQD5AKg1nhyq1YSAIhAOp9H2FSkt663ILPaElXM8rwgiIEYQahipTbyzcQ9YrWKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2KdRSoB%2BtCN5clq0q3ANOKPPlnVoAnPKWBwJUaIV9ilfOn6ZnnayYupf%2FmoAUUH9oG2WvniM7aWkE2HpRv5wl1wyvkAXroOsjAtDJNY0W%2F8bMEB3jiGgajT6GZdD4fPOp6ThExtbLr%2BLJhZgwejE3NQmlaMgBbuGtng42EwQ%2FOiIkX7%2FwQ5qgC07jWMm%2FfKWrasIHBO3warv81FMf0Lp5qa6VP5k%2FGUrrpASgL%2F2AXDSYdG1iBOUZ0NnETPizxDQY%2B0d7eMyIKZw%2BqRmmENnk6UvBvFSQrh7IFziA4tJB4nEnSzwrpyFY18HS2DWEo%2B%2FpUIyxvvHaTe3bx9TcfOSFvQ3q0RC6%2BPiZVmyTzu3Xxzu1qCrn%2BbSlU%2FKZK%2FnLDB0Ctos4dNX9DKDo7XON8SyffI7xziAhO%2Fd19pywzRyE8A1LDw%2FkUU8C%2Bu3xy3Jw934RykIU0BJTg5dw3nIewHtGSJsKmwBcd7wRtGZfANWwSf7RQFJjdcgqQv1GY63UoesrCfG2H5M0qj4g0PS5zzsaMeCNvOVcyZcttYSUWByXB4TQZU95qZloqYLZL%2BMc9%2BCcHiNRaLy5FiaSBHcd3N90Xjf44YxpHLDME02iFc7Mu8kyPzLv3cdh62ZW7Yw0oC%2FrO91e%2BRLlUjc4YTCGhJu%2BBjqkAVcRj%2F4L7Ryf5celEAzoMdhxXHIShYb89z2ePnDKpVFXsoVCHUGVbVmZqxl412YMNdhLqzSqf%2Be4mQusHkcy%2B4FqzFud4vOcge%2F8zeb%2BY7UhALMU2xUhJ%2FuUwovBZv61QZWg50tmIL2%2FbtBtQ%2BaZUKky7PE1KeIPFbrNo%2BfaA5Rf0XqUWOFn2cVbeMLUAU%2Fw3svgc%2B3DTOF5cczebKJxWGsvT291&X-Amz-Signature=ac79f3d00a73ea1c4f0b8df31fa58f3678ae361741d63859bf0b772e3eff2ab8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDEOGBNL%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbbXQyjQhJO7kjmivmhDvHZGqn5zvQD5AKg1nhyq1YSAIhAOp9H2FSkt663ILPaElXM8rwgiIEYQahipTbyzcQ9YrWKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2KdRSoB%2BtCN5clq0q3ANOKPPlnVoAnPKWBwJUaIV9ilfOn6ZnnayYupf%2FmoAUUH9oG2WvniM7aWkE2HpRv5wl1wyvkAXroOsjAtDJNY0W%2F8bMEB3jiGgajT6GZdD4fPOp6ThExtbLr%2BLJhZgwejE3NQmlaMgBbuGtng42EwQ%2FOiIkX7%2FwQ5qgC07jWMm%2FfKWrasIHBO3warv81FMf0Lp5qa6VP5k%2FGUrrpASgL%2F2AXDSYdG1iBOUZ0NnETPizxDQY%2B0d7eMyIKZw%2BqRmmENnk6UvBvFSQrh7IFziA4tJB4nEnSzwrpyFY18HS2DWEo%2B%2FpUIyxvvHaTe3bx9TcfOSFvQ3q0RC6%2BPiZVmyTzu3Xxzu1qCrn%2BbSlU%2FKZK%2FnLDB0Ctos4dNX9DKDo7XON8SyffI7xziAhO%2Fd19pywzRyE8A1LDw%2FkUU8C%2Bu3xy3Jw934RykIU0BJTg5dw3nIewHtGSJsKmwBcd7wRtGZfANWwSf7RQFJjdcgqQv1GY63UoesrCfG2H5M0qj4g0PS5zzsaMeCNvOVcyZcttYSUWByXB4TQZU95qZloqYLZL%2BMc9%2BCcHiNRaLy5FiaSBHcd3N90Xjf44YxpHLDME02iFc7Mu8kyPzLv3cdh62ZW7Yw0oC%2FrO91e%2BRLlUjc4YTCGhJu%2BBjqkAVcRj%2F4L7Ryf5celEAzoMdhxXHIShYb89z2ePnDKpVFXsoVCHUGVbVmZqxl412YMNdhLqzSqf%2Be4mQusHkcy%2B4FqzFud4vOcge%2F8zeb%2BY7UhALMU2xUhJ%2FuUwovBZv61QZWg50tmIL2%2FbtBtQ%2BaZUKky7PE1KeIPFbrNo%2BfaA5Rf0XqUWOFn2cVbeMLUAU%2Fw3svgc%2B3DTOF5cczebKJxWGsvT291&X-Amz-Signature=574a36261cbd75d0ffd03f6e4059ce35727de96d39f400984ddb5e8ac9f874c9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBZTHHSP%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T100841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEqsZiQRlDhybYszGuvRKdacX%2Fv8RoT0ag5BmkAmsB7AIgai5q5txmzHTfzed1tpfZrySsqQDcct1FjKaSVcOG9DkqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJP1JMofdt%2BqfX%2BGXSrcA5g2e%2FGxU2iNMzRVNjfe3Sz2y8S8Ld%2Fz2wLfaCCYNMIY%2BQXO2Z1v1BDUDiJORPMhtMDnTDjcZEDEj8laKDr6loEEQs9FE2bBabALkSiTZd8HCUCvuNsW9SXz4t7SABWVrGlYTpM7sk%2FvH8VGl7YCQY%2F%2BMyxt%2BDZsjxAKQfNWFQsllLT%2BTsveoECcSV2%2BDbFOB8mnUYPmeyGfO%2FHjlFRHUx0EZMHzFV0OmKVM3VtMYn%2BasMvU1fVThDSGMYGnv6pisZLBVIzooIf6dCdbfHfLXWirKJCGKx67ZTSuDkB1I9c5SZtToLfG1ou8B3p6nKn2vQXfuoMb1IUQwCkUVPWFu3Dhv9Q5uJrSv0iXMzAMTuuNlzz4w77xWMyQaCOSXYAhzUgtc7LwccFgMNEgxEUJNTBXoUEUlOWGa1S44r2P3QZLCDbXjkmswapmXvXno9GKqaObe2mju%2BkomuIXAeiAWP9EHXROKDJFoPnxlZw1cemGvYWbVR7F5MqURcbUiSXgO6ZvvdeBDifUmJVbMS1aEDRCw%2B7njpYfsfze102zI2VUL%2Fg7M%2FeBAMRyRI4bITWuKTxg%2F5cA321IUdj9p%2Bcn7ekN%2BR5%2FIIC3bSbUBkaUT3PtwUMEu1x3MH1Rw0gXMK2Em74GOqUBshKxBjUC5D3GZEC2QP7WPD1fatYxoNugM3v%2FnKlAJmOQp3UiEtvrVBjf0Yw7OVqnxa0rys3iye9ot%2BHl8ND9w4mvfYcridQ3PCGLZC0vjc0ttEJRqcbgJTChEaYu0uW%2FivU2%2Fq7SZceYFwaOeRfvn80b1Xty%2FiJBKgnMRF6lDadwnkS67NeDaN7WGoMUCPzto%2Fu%2FQrniK3Hvd93gXJQyJN2VH62s&X-Amz-Signature=df62736ac76de7b2ef0a2ed20daf95911d8a191e3cfa032ff14b2fc025395529&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS462P5Y%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDy5iSSPnYNkC5eOU%2Be8imhWZxPAlwog%2BOxaBrOyKfC%2FwIhANAJ14qtfdKw%2BvfdlqBKpHI1ScqnmzkVt8K6Q%2FSZYaf9KogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypthzpLNmvrcf6wdoq3AN3SCMWTH8UlwIiMaz7b711MF99gsUF2AD5sTEVQbU1aXJIPkx2IH11ynmkAj5EveaifuBYadYwtC%2FVxPYL%2B9UIeJcIj%2Bal15aI0RhCsWAEmXCRYTWv20WReHfJlp4FEIppJtj5HkjWlP%2Bux4jo6RMmt%2BY86uqBYnFmmIGIjOI5en3RYo4bFPIpMyqOskRACXL%2BG3GiWEjxhvMfqn%2FjsQzEzbg7I1aAYKpGYUa2A1AtdyuXdLVA8zD9frbukXrb9fpUcRF7vLVbS4kDKmoynmjTQ5LzWeWq787fuD5xM3tdNLH2OjVROAQiSqZ1gsJXYi7Vo8JWtEhKZK6jkmgz3r6cp55g138ex1i1tJCz2JjkUBZ7ycE4caFnXWh8qira4z62wuTA1nVr2o7ANpc4hxf5LVU26MyRVt7rCdW1IWkxJ4qqL%2BBOL2Hug6KeURwYY8PrOJGnFGsKVKnzYMAuA68a5Mz8EPKagBrsmiTsehBWjx5PY7q9il5hHY5SPbVyLGX4ke69aMlG%2FrkitnXDBq7USyYuMhaQRE7L2221vUWDz%2FiQ%2FA5gfG2gc8K43JhsM%2FrOCj6dJyQneB%2F3ZD1ci5EFosnc4EPj583xhWzEbqKMfZItp97dvIrZN7hQZDDthJu%2BBjqkAUAJC1GsGeojttRg%2FUkd9162jADITHpVSg0JKujfdWey5HQ%2BmStD%2FTfj%2B%2BxE9e%2FPEsVId3BIGXPapW7dTcLgiJl%2Br10q64q250nIyf6rt%2B0%2Bj3LAFvGbKJDBsAZI6P4wY%2Fex%2Bhs7WR%2FRbcHklfj%2FY%2FU3z7jeD0lCyUGArN%2BHe%2FVxBADsBlXsALW5S1%2FmIiw%2FYq2e%2F1Pqad68SPoJc0T46tzTK2eo&X-Amz-Signature=1e378297d76c552b133066b7d23c2dd9bf438559c0eee0e573d16f464f55a7e4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDEOGBNL%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbbXQyjQhJO7kjmivmhDvHZGqn5zvQD5AKg1nhyq1YSAIhAOp9H2FSkt663ILPaElXM8rwgiIEYQahipTbyzcQ9YrWKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2KdRSoB%2BtCN5clq0q3ANOKPPlnVoAnPKWBwJUaIV9ilfOn6ZnnayYupf%2FmoAUUH9oG2WvniM7aWkE2HpRv5wl1wyvkAXroOsjAtDJNY0W%2F8bMEB3jiGgajT6GZdD4fPOp6ThExtbLr%2BLJhZgwejE3NQmlaMgBbuGtng42EwQ%2FOiIkX7%2FwQ5qgC07jWMm%2FfKWrasIHBO3warv81FMf0Lp5qa6VP5k%2FGUrrpASgL%2F2AXDSYdG1iBOUZ0NnETPizxDQY%2B0d7eMyIKZw%2BqRmmENnk6UvBvFSQrh7IFziA4tJB4nEnSzwrpyFY18HS2DWEo%2B%2FpUIyxvvHaTe3bx9TcfOSFvQ3q0RC6%2BPiZVmyTzu3Xxzu1qCrn%2BbSlU%2FKZK%2FnLDB0Ctos4dNX9DKDo7XON8SyffI7xziAhO%2Fd19pywzRyE8A1LDw%2FkUU8C%2Bu3xy3Jw934RykIU0BJTg5dw3nIewHtGSJsKmwBcd7wRtGZfANWwSf7RQFJjdcgqQv1GY63UoesrCfG2H5M0qj4g0PS5zzsaMeCNvOVcyZcttYSUWByXB4TQZU95qZloqYLZL%2BMc9%2BCcHiNRaLy5FiaSBHcd3N90Xjf44YxpHLDME02iFc7Mu8kyPzLv3cdh62ZW7Yw0oC%2FrO91e%2BRLlUjc4YTCGhJu%2BBjqkAVcRj%2F4L7Ryf5celEAzoMdhxXHIShYb89z2ePnDKpVFXsoVCHUGVbVmZqxl412YMNdhLqzSqf%2Be4mQusHkcy%2B4FqzFud4vOcge%2F8zeb%2BY7UhALMU2xUhJ%2FuUwovBZv61QZWg50tmIL2%2FbtBtQ%2BaZUKky7PE1KeIPFbrNo%2BfaA5Rf0XqUWOFn2cVbeMLUAU%2Fw3svgc%2B3DTOF5cczebKJxWGsvT291&X-Amz-Signature=d9a3571d19f8f77ce324a1fbefacf6bcd57f36e0e5348182b1faaa7a1b172ebf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
