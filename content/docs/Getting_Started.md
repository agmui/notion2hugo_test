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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667THCXRZB%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T132424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI%2FVLsvAFLG0%2BAgAP3RBMtOjZLQhmS7w4M99BMBG3evwIgCFHGlG3ndQ7pVheSvvh4RYBjlcllBz5TxIGnAL7nXwYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5x2ApXhL6zeh%2BBQircAyWTemF1EoPG%2BhMpcrqWt1qUZQEoy11WzuFgS7tjgoPMPhkSxhw5pI13POuRu6Mhb8BCCvsu%2Fll33lm9EcTfLgEPqiAHgEW%2B5knBoXbqCf%2BRcwvMOXjBuhAtJK8RiIz9DScBsxOh3Miir%2FF8%2F%2F%2F8VACEhN%2BBskF9eUWSq9K1zFePJPYkh%2Bliju33otXR0WxQVREe2zK7b6UjQK5PPZLj39ngWAz9TpO9K0oqDS%2BRrBfp3wd60HPapX0Gi5SCPMlKQi8EOi72P88rh8lEXBpT1EpIpKD%2BFWVVFL5ydZp2qE%2BbyPv%2FuaTfwoD1kmeFSdFpric7STlGaQhhIOAXOKvQB43RBfN9JLkRkom64ZXrXRZLCku0ZzYIUG21D4JnytJ09wyWrZQh66nLm7Hdt96VOxRJL5viCjse3a8WlpnljGogUJsuEhrmoYJPcGWZPY8zGFVYPEPFz1OJCaUeVDOFUWkgrmB2Xx7rnl21geDs2qmIbjWlzBDSntlskVWM4Ern%2FafWXYGauLlmyb5DP69zqG6zDvfdD%2F7HwHYjyxkoDZ%2FC4bgepTj14kgVKOm%2BFTj9065x77Kj7gUMICF5Q9u5yDLnGLG4gSimGkmRwErhZyul9f%2FCMstjHRVqWfu1MKCT0MIGOqUBJLDitxNt%2F%2FA5%2FJEUpKRfO3gfT2t8TMliCFtr2nUN%2FXww%2BVN6H%2FEh3vSur%2F%2BNrGSiHTX6LMgkYNd6q6cJd%2Blbm71gpoHM0nhDpDbeVRRp9%2BcX3zXg%2BjeFv0d2B9qdmJM2mLh4dvnL7GQdC1nFbTFri%2BbTGBbwfogZX0%2B2DlWhjeraXuDCFC5REmCA1ViZvLNtj47tHCdYavp0%2FAbsJi31CnB2l5KN&X-Amz-Signature=2a8bead01851964d1b6abeb75dae5e964ff2da28c1df31d7489e57599390dd15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667THCXRZB%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T132424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI%2FVLsvAFLG0%2BAgAP3RBMtOjZLQhmS7w4M99BMBG3evwIgCFHGlG3ndQ7pVheSvvh4RYBjlcllBz5TxIGnAL7nXwYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5x2ApXhL6zeh%2BBQircAyWTemF1EoPG%2BhMpcrqWt1qUZQEoy11WzuFgS7tjgoPMPhkSxhw5pI13POuRu6Mhb8BCCvsu%2Fll33lm9EcTfLgEPqiAHgEW%2B5knBoXbqCf%2BRcwvMOXjBuhAtJK8RiIz9DScBsxOh3Miir%2FF8%2F%2F%2F8VACEhN%2BBskF9eUWSq9K1zFePJPYkh%2Bliju33otXR0WxQVREe2zK7b6UjQK5PPZLj39ngWAz9TpO9K0oqDS%2BRrBfp3wd60HPapX0Gi5SCPMlKQi8EOi72P88rh8lEXBpT1EpIpKD%2BFWVVFL5ydZp2qE%2BbyPv%2FuaTfwoD1kmeFSdFpric7STlGaQhhIOAXOKvQB43RBfN9JLkRkom64ZXrXRZLCku0ZzYIUG21D4JnytJ09wyWrZQh66nLm7Hdt96VOxRJL5viCjse3a8WlpnljGogUJsuEhrmoYJPcGWZPY8zGFVYPEPFz1OJCaUeVDOFUWkgrmB2Xx7rnl21geDs2qmIbjWlzBDSntlskVWM4Ern%2FafWXYGauLlmyb5DP69zqG6zDvfdD%2F7HwHYjyxkoDZ%2FC4bgepTj14kgVKOm%2BFTj9065x77Kj7gUMICF5Q9u5yDLnGLG4gSimGkmRwErhZyul9f%2FCMstjHRVqWfu1MKCT0MIGOqUBJLDitxNt%2F%2FA5%2FJEUpKRfO3gfT2t8TMliCFtr2nUN%2FXww%2BVN6H%2FEh3vSur%2F%2BNrGSiHTX6LMgkYNd6q6cJd%2Blbm71gpoHM0nhDpDbeVRRp9%2BcX3zXg%2BjeFv0d2B9qdmJM2mLh4dvnL7GQdC1nFbTFri%2BbTGBbwfogZX0%2B2DlWhjeraXuDCFC5REmCA1ViZvLNtj47tHCdYavp0%2FAbsJi31CnB2l5KN&X-Amz-Signature=8d33d941b4841263377ead3363dc7289d8975324b9d189a9602c5ad93fbc83f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667THCXRZB%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T132424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI%2FVLsvAFLG0%2BAgAP3RBMtOjZLQhmS7w4M99BMBG3evwIgCFHGlG3ndQ7pVheSvvh4RYBjlcllBz5TxIGnAL7nXwYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5x2ApXhL6zeh%2BBQircAyWTemF1EoPG%2BhMpcrqWt1qUZQEoy11WzuFgS7tjgoPMPhkSxhw5pI13POuRu6Mhb8BCCvsu%2Fll33lm9EcTfLgEPqiAHgEW%2B5knBoXbqCf%2BRcwvMOXjBuhAtJK8RiIz9DScBsxOh3Miir%2FF8%2F%2F%2F8VACEhN%2BBskF9eUWSq9K1zFePJPYkh%2Bliju33otXR0WxQVREe2zK7b6UjQK5PPZLj39ngWAz9TpO9K0oqDS%2BRrBfp3wd60HPapX0Gi5SCPMlKQi8EOi72P88rh8lEXBpT1EpIpKD%2BFWVVFL5ydZp2qE%2BbyPv%2FuaTfwoD1kmeFSdFpric7STlGaQhhIOAXOKvQB43RBfN9JLkRkom64ZXrXRZLCku0ZzYIUG21D4JnytJ09wyWrZQh66nLm7Hdt96VOxRJL5viCjse3a8WlpnljGogUJsuEhrmoYJPcGWZPY8zGFVYPEPFz1OJCaUeVDOFUWkgrmB2Xx7rnl21geDs2qmIbjWlzBDSntlskVWM4Ern%2FafWXYGauLlmyb5DP69zqG6zDvfdD%2F7HwHYjyxkoDZ%2FC4bgepTj14kgVKOm%2BFTj9065x77Kj7gUMICF5Q9u5yDLnGLG4gSimGkmRwErhZyul9f%2FCMstjHRVqWfu1MKCT0MIGOqUBJLDitxNt%2F%2FA5%2FJEUpKRfO3gfT2t8TMliCFtr2nUN%2FXww%2BVN6H%2FEh3vSur%2F%2BNrGSiHTX6LMgkYNd6q6cJd%2Blbm71gpoHM0nhDpDbeVRRp9%2BcX3zXg%2BjeFv0d2B9qdmJM2mLh4dvnL7GQdC1nFbTFri%2BbTGBbwfogZX0%2B2DlWhjeraXuDCFC5REmCA1ViZvLNtj47tHCdYavp0%2FAbsJi31CnB2l5KN&X-Amz-Signature=fc2e38a4015906539795ad505d19a431c7d4f52c73c982bb340c34299e1e588c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FLQD43S%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T132427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHdMo8hLlbTFa84ii%2FTdEyFno7Q7Nw0C0FtgHR1OS%2B%2FAIgdWO09xqTkIpL0HYO%2FTv8quCNgJOtjdZdpYlfWbQnMfQqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCT%2BkSpHaTSygwseDyrcA0uf3nlmHYq46g%2ByiK1d6clYwNZ%2BU7dt%2Bc0xU9FqLbIJvFBQef3vFVJES9hLZpkc422f52QPBZCgTNsntvGaKbVd6xAQ69kq%2BLApks3nKrps7sYCjxnKifBbiMFpg1n72mYR%2BcdHBJph7%2FdAmJg3LUdXPbtFonJORX7Fy6NWpCHHwguRNY3J8QAw3Imf%2BS%2BXScD6PMGrkicgNJg6slMd8mOuiZ0nLdmQ2zCwZAMWOIYZQXaxYrLLBCtNHd60FEoeJvFTfRHjrNoEbeZWXixnEKFTwBsYIZz365fHRHHcdfJSqLUD9Y7qP54P6uuGKlX7Gapa0bRREtZq2wT7L%2FUSmi1s68me1eydBGXyzI8zo53mFTm3PWsjv8vAGNEqUMgKopfs2SAVE34n5Au3DH3wFwahtHZLdFMBFMit6M8Lqfpmb3iezKpGEirB6yFNTVqGm1BM%2FQ4Uo7LXD4K90LP83t%2F5Lvi%2FLx623g8ycsJmJ4Gfg7wj1DcDBOwRYzxNBr00LbY0%2FKjrfYHLk7GLLWGeeg4%2FXiZfYIhiu32YpqkrcdQ8A%2F4%2B%2Bm%2F%2B4CT56nW4Hk4nZqgc6Z%2FMc8M2tNbZC9JnnOqbCd4SMecrO1n58MaJbGxulRI7i3KKBo4oZf2yMKqJ0MIGOqUB8bome0Azf%2BCQpzKosCoEF%2BEMhgrWgI2tqMN%2FTy4XsH8PH1J7GR8LBzUsJOLyylpPtLan6thux9Gqg0iK%2FDCa7xXtK6qFRUPfLB4VkxZHedl3zwD4HcVJpUDgZ5SWMbDgXVRBKm0vnD03ITQFlqPEAoUtqYesgU1ok8Cb8FLEKRX0zxQjI3t020fd73KXDBAGFKEovZvhiJfjaOCQSiqU4LneXbwL&X-Amz-Signature=5c890cbbfb144ecc182c75c4fd89062f9154f3f43dbcf5cbac85895efa365241&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ABIFVXC%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T132428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAK0jWA93%2F0hyJMz5MVUIL3RnauT94l0lx6g8FUUtjGqAiAyMcwNQw5eed4IwUsrV9rbCRckHx9MSiRut8y0Vu4X6iqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8F3jwfVQglpvvNf7KtwDdYPwIQIHI2alB4c82oO33bGSOVx8mdKB4l62OF9KtapFOWqeZknvWjdTqjLcBfvybEkyECGJhK5sfSaNPfY8cISkihQUYLupJFdaHjSSVcGVBIb5NZPpSxR3lRYobjj1CtB7miHzfYXHeMaiNUMuFHhcCjKirWTdmUZe%2FEDNzcva1BsX3ZLeoY8bn%2FYbtWGx0nCflP5H3upyGobGJYK3m2udAtp4Qbiz21xI7%2BYC8qSrJuPspoDd1htPfNfcr4Zup1oLx1cKHxQXA6hKV9C6nYXnY%2F5tEsne7aS6a1%2B%2FcJiQz7x9L9NHcPLatRypoLQg7tkWUiV0ozE4pgyt2NoSkRuXhnDkREwHM7001NqsEsgUagC%2FjqhT3jn7F%2BFXADS2XaaGgiuhC3xqYjps2WdBnmD1P8H1DiGDOWy4TE5GiCGcuV91CTWMX%2FL3JBipKsIH74DjIZJO1qUhuKzjByzwBSrwvdWO1A7l1PpHEY5vaVtWLqBgz91eWNT5A98Bi5z36y2Hihsjfh%2BzUcapX72Fx%2FJg1HNHyDPFD4eqXtVqyeqWVTMmzIRmZNo0hWrY0TXBtAz5KDNX1xuizFCNOy%2Fd5uSjl1mbw%2Fo5GCdU%2FuPOGG6dAhtYMeozMsm1AXUwtIjQwgY6pgH5NOwYVWjWOa4EVADGmGcWcSGTLwQ%2FjjiJxAaweiegUh1CbT36T2LeBn%2FyqhZ3YAKtIyhfazRVhtE%2Bv%2B7o3aYovrqYYXMCgsU8DoRX5Dj7Tygqz%2FR%2B2UOlll13mHwDtD4HJuoVlCeAc5nAlPpmzkF%2FbRzAioLVt9A3HVlWP%2BlfENeICTK9lR5eLdc4ZQkyj4vzf%2B6LmtgntmxYh5iqe4W6I2fRYtUD&X-Amz-Signature=7243a2fc1fb8c0155c177c5bf1469a879a67a73d6b723817e518154b9073e8f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667THCXRZB%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T132424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI%2FVLsvAFLG0%2BAgAP3RBMtOjZLQhmS7w4M99BMBG3evwIgCFHGlG3ndQ7pVheSvvh4RYBjlcllBz5TxIGnAL7nXwYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5x2ApXhL6zeh%2BBQircAyWTemF1EoPG%2BhMpcrqWt1qUZQEoy11WzuFgS7tjgoPMPhkSxhw5pI13POuRu6Mhb8BCCvsu%2Fll33lm9EcTfLgEPqiAHgEW%2B5knBoXbqCf%2BRcwvMOXjBuhAtJK8RiIz9DScBsxOh3Miir%2FF8%2F%2F%2F8VACEhN%2BBskF9eUWSq9K1zFePJPYkh%2Bliju33otXR0WxQVREe2zK7b6UjQK5PPZLj39ngWAz9TpO9K0oqDS%2BRrBfp3wd60HPapX0Gi5SCPMlKQi8EOi72P88rh8lEXBpT1EpIpKD%2BFWVVFL5ydZp2qE%2BbyPv%2FuaTfwoD1kmeFSdFpric7STlGaQhhIOAXOKvQB43RBfN9JLkRkom64ZXrXRZLCku0ZzYIUG21D4JnytJ09wyWrZQh66nLm7Hdt96VOxRJL5viCjse3a8WlpnljGogUJsuEhrmoYJPcGWZPY8zGFVYPEPFz1OJCaUeVDOFUWkgrmB2Xx7rnl21geDs2qmIbjWlzBDSntlskVWM4Ern%2FafWXYGauLlmyb5DP69zqG6zDvfdD%2F7HwHYjyxkoDZ%2FC4bgepTj14kgVKOm%2BFTj9065x77Kj7gUMICF5Q9u5yDLnGLG4gSimGkmRwErhZyul9f%2FCMstjHRVqWfu1MKCT0MIGOqUBJLDitxNt%2F%2FA5%2FJEUpKRfO3gfT2t8TMliCFtr2nUN%2FXww%2BVN6H%2FEh3vSur%2F%2BNrGSiHTX6LMgkYNd6q6cJd%2Blbm71gpoHM0nhDpDbeVRRp9%2BcX3zXg%2BjeFv0d2B9qdmJM2mLh4dvnL7GQdC1nFbTFri%2BbTGBbwfogZX0%2B2DlWhjeraXuDCFC5REmCA1ViZvLNtj47tHCdYavp0%2FAbsJi31CnB2l5KN&X-Amz-Signature=83db796ac4298a9f37e299540b1597ef394dbadcf2a0680d24e5feee72e2913e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
