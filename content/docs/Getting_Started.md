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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJBMJ2AX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJO2nEfX%2FSIGCCPo0QXF7Jh5LzCmcvzOa0iYXCGvo1owIgbzXxThzIOJPO4aQY%2FqRs%2F0sw7qdDhxJvyjfSk2%2BTLRcqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXYHHjX0YMD%2Fs79sCrcA5BQ8tH615MseCq4tGnds2saL6gNCKwPFJdodBY2w5wk1RhtTO5jfLw95eZUFeKw1df0l%2BN%2Fj1j1UPA1ANOp8SGV7hCxhbp0vrDbuNQ1qt24CbNe6NgCdXR81RRTHdmOLZlRqLs9l9pGZUpV3xIMinW9zoqWtZ94EFo1GcCiYPr8jnMSRkLLAR7ffgXSe9PHrBicdZk2XNzX0UV42GNrepCXlH8tYlvm2Hw1H8LhXxRaEDFnuw228KsyW2DAgNjdTe%2FsBpHBnXrvmfX2h6WkoJImzs9j6TmFlK4Lo8ngemEeU8YHNeBpkzGmTsHVaq9VCfFm%2F7proa6Yf4m7PWJUE6O7xx04E0g5L6ZfxDdT5oQY2wcs7rPAbglGbOf9DEK8hPlajSDQCOjuTX81HHs1rmv7f80zFGe%2BMw9NYAAfL1J0KiAEGxSn01kVz%2BO5OcJFdwJS9uIj6dJKvg68M21VpVjCF8ZxmQAvbBwu3%2B6jP5UI9Q7RU2ac8uIiWxpzZnt3E8Qo9Gf2BsoKmma5AvJYw0JEz5O7KmPqcdQqyUCe81M0JghlWFtQu92BFuucgwo1k%2FY7G6AQasKt%2BkgVW99u4XHZsPiCquoGGPL2PXjpLpr4XTyQIDiRj4hOw0JIMPfwp8QGOqUB1bYxxporu6EU63rt2JAs93wZabVapM%2Brg76VWIeUcZExtAsKvKKmcf6ND4CFA9zBWvc37sJOdbTOXSPaGS47hylIlxrYDZDrO2H4w7BcFgA9UFzHMffF2fev5GQckdT34Avs1qW%2B3%2Fkf6GE3TwlodCEGJets1R2p7317kTAWri0e0XRcaE3yltuxJf7TjZqP9U31pwnXc1QwSW%2FF3di241q4vrII&X-Amz-Signature=46cdb966d464c205ac54e52db622a6b6ccab21c354bbda4100e9f9a89e2af362&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJBMJ2AX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJO2nEfX%2FSIGCCPo0QXF7Jh5LzCmcvzOa0iYXCGvo1owIgbzXxThzIOJPO4aQY%2FqRs%2F0sw7qdDhxJvyjfSk2%2BTLRcqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXYHHjX0YMD%2Fs79sCrcA5BQ8tH615MseCq4tGnds2saL6gNCKwPFJdodBY2w5wk1RhtTO5jfLw95eZUFeKw1df0l%2BN%2Fj1j1UPA1ANOp8SGV7hCxhbp0vrDbuNQ1qt24CbNe6NgCdXR81RRTHdmOLZlRqLs9l9pGZUpV3xIMinW9zoqWtZ94EFo1GcCiYPr8jnMSRkLLAR7ffgXSe9PHrBicdZk2XNzX0UV42GNrepCXlH8tYlvm2Hw1H8LhXxRaEDFnuw228KsyW2DAgNjdTe%2FsBpHBnXrvmfX2h6WkoJImzs9j6TmFlK4Lo8ngemEeU8YHNeBpkzGmTsHVaq9VCfFm%2F7proa6Yf4m7PWJUE6O7xx04E0g5L6ZfxDdT5oQY2wcs7rPAbglGbOf9DEK8hPlajSDQCOjuTX81HHs1rmv7f80zFGe%2BMw9NYAAfL1J0KiAEGxSn01kVz%2BO5OcJFdwJS9uIj6dJKvg68M21VpVjCF8ZxmQAvbBwu3%2B6jP5UI9Q7RU2ac8uIiWxpzZnt3E8Qo9Gf2BsoKmma5AvJYw0JEz5O7KmPqcdQqyUCe81M0JghlWFtQu92BFuucgwo1k%2FY7G6AQasKt%2BkgVW99u4XHZsPiCquoGGPL2PXjpLpr4XTyQIDiRj4hOw0JIMPfwp8QGOqUB1bYxxporu6EU63rt2JAs93wZabVapM%2Brg76VWIeUcZExtAsKvKKmcf6ND4CFA9zBWvc37sJOdbTOXSPaGS47hylIlxrYDZDrO2H4w7BcFgA9UFzHMffF2fev5GQckdT34Avs1qW%2B3%2Fkf6GE3TwlodCEGJets1R2p7317kTAWri0e0XRcaE3yltuxJf7TjZqP9U31pwnXc1QwSW%2FF3di241q4vrII&X-Amz-Signature=81bd6a38d3da4e55d38cf48721bdb95755663829086ff29185e97c5413f23962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJBMJ2AX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJO2nEfX%2FSIGCCPo0QXF7Jh5LzCmcvzOa0iYXCGvo1owIgbzXxThzIOJPO4aQY%2FqRs%2F0sw7qdDhxJvyjfSk2%2BTLRcqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXYHHjX0YMD%2Fs79sCrcA5BQ8tH615MseCq4tGnds2saL6gNCKwPFJdodBY2w5wk1RhtTO5jfLw95eZUFeKw1df0l%2BN%2Fj1j1UPA1ANOp8SGV7hCxhbp0vrDbuNQ1qt24CbNe6NgCdXR81RRTHdmOLZlRqLs9l9pGZUpV3xIMinW9zoqWtZ94EFo1GcCiYPr8jnMSRkLLAR7ffgXSe9PHrBicdZk2XNzX0UV42GNrepCXlH8tYlvm2Hw1H8LhXxRaEDFnuw228KsyW2DAgNjdTe%2FsBpHBnXrvmfX2h6WkoJImzs9j6TmFlK4Lo8ngemEeU8YHNeBpkzGmTsHVaq9VCfFm%2F7proa6Yf4m7PWJUE6O7xx04E0g5L6ZfxDdT5oQY2wcs7rPAbglGbOf9DEK8hPlajSDQCOjuTX81HHs1rmv7f80zFGe%2BMw9NYAAfL1J0KiAEGxSn01kVz%2BO5OcJFdwJS9uIj6dJKvg68M21VpVjCF8ZxmQAvbBwu3%2B6jP5UI9Q7RU2ac8uIiWxpzZnt3E8Qo9Gf2BsoKmma5AvJYw0JEz5O7KmPqcdQqyUCe81M0JghlWFtQu92BFuucgwo1k%2FY7G6AQasKt%2BkgVW99u4XHZsPiCquoGGPL2PXjpLpr4XTyQIDiRj4hOw0JIMPfwp8QGOqUB1bYxxporu6EU63rt2JAs93wZabVapM%2Brg76VWIeUcZExtAsKvKKmcf6ND4CFA9zBWvc37sJOdbTOXSPaGS47hylIlxrYDZDrO2H4w7BcFgA9UFzHMffF2fev5GQckdT34Avs1qW%2B3%2Fkf6GE3TwlodCEGJets1R2p7317kTAWri0e0XRcaE3yltuxJf7TjZqP9U31pwnXc1QwSW%2FF3di241q4vrII&X-Amz-Signature=c0dba9a9f850921af6b3472f739fe172cca43b17ad83c2ca56626b371ab9614b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OGG7Z7L%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6%2FvNjIn1S1ibdIXAeXJHBHB%2BrWvaRn1AFb2pW2X9GOAiEAjp9BFJZiy57y5450YQT%2BfAxvyku5VfUZsyoczj5ObWMqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOg0OM5YRZnBM9w3wSrcA0DAzMu%2B9h1WGJvIayluaKOB74%2FjLVk3Vd5NecZdAtq7YjEzKLwSiJX5GNOGZAPijjo1e90HDocvCsuI%2BL9sbEHj3XzMJjU1tctSAEOzSaZaarsomd274onYDw6pYPTtCjxzxzgDLyNifiPL9pPlUqCrATmNifNj0%2BJcWs1U%2BloXxWoLVk8ouOV3NZnfwfyf39eucRtxOvAcpbPm39ZFlT4a01DfuJbtRyUBRrJbwOLRbm9C%2FguT8WPSYqHclDyiSvKTCfXnmqnmlORrCjbE4XYpxIaj6seUYQNGjBqgAkVOT%2BQMNwXZaIQB1311c%2FgXTODK557IlBmSDMs3CXlKcT1x11vzLAocXn2YTtxHpfla7muCn5LGQJTCsHDTr6cMZiUB8oLPcEwg9HMNHvg66728lD94jjQ1W2RtbSHsKOchlPslP36JQ6kYg%2BfGSESkpH6%2FZRFamAZXaiqkFAdBhWcEp361PHrC7ld%2FmaucfH7UyJZJinOO%2BACvoh6tobLxP2GEk8Va2qUY5McaxYqx5KbKazhCqZksLARMBjFm5tReXV7woA2fkkm1CDfh4cziyRt%2FiXLr%2BvNzTFF2%2FqtXzJqrACuwSYTzaXn%2BQ2OSpcSIZ5NkD9p2kkyX50lHMKvwp8QGOqUB0JS7cOiGSkCU%2B7w0XSNfMP%2FrotgjmXoR4QpzYGN4nh2tMGWESRf4K412jRNiO3gQu0%2FR%2BPH1LJo7xdLFjdkadvPI74Z%2F7a3qZoleGVmqBWTj%2F1bSHiGGDM6JpMzc3c3Pg4e1z7XPiUMRjc7ApjzAbj0TTSdx7O5gxbVNHKV7ki8KO94E5OkITCeX%2BmpbchC6zzWBJ71UXc%2FWL%2F8JSdemtQYwdVJg&X-Amz-Signature=37703d4e74deabcd1eb3c69584c3cba076f907bc5b89a230e97fd0454083a656&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBPEEXJZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECRUxJJujDo6C5z1gQQGLLH98sQyaVe3qG%2B6HW3tzauAiBQxbTSXHDwZcKxVebfH%2BgT28jRtlzoq6BOk3DP8lZJOiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhYoierAI7OQbSNihKtwDMu%2FMfCfPB8JAXMVd4ooOr4sBzZHEux%2B%2BlGiB87xW1VICc63wENDQGDfJ0efwTNVC9n3IphC%2FV4L49lNLTWCWGH810rk2sAj4yIBlSADEJ%2FMvCIPpZCkO0FPTYW8gTI86V1b4ILkMglagdrYGf9J7eHLk7WnO2DIlfOi4IJ5GjGKu3EO64XMZqptkrNISY%2B1%2FF17n%2FfmqZxzajPrCcI3NXhHu%2BEW6ST%2FWjV2kHL0mjcHRflA1uVIY0ongKeV3%2FRnzADA9NNhDu2HUntkT0RVqP0W7xxCPrYmkWtSdohbHylKY0ml%2FoJwZ0syhdNDES3AP6I14REtzK%2FocPScISO40YEL5UhegqeV23f%2FTHKngHGBa3wecqWni6KGhyGbqYFYAjLDn5NtQ%2BzpStf4Xhvfj0%2BmNdSk4YsDQEICNUKC3t%2F%2FFvO0PyQmHUgDzURPhr2pEQ1fsDExPytK4oFhOh1IjgaRwXK86AI6kzURsBp%2FA%2BrT5uPvkbSUZ7qchAaaBbmWx1hnSXaExHvhDgJs1DCU7%2BS3LcXcZoyyeNqQ59ISPrkdr0HQo3Xq1IlxlsOyymO0DMYKm4QNJh388OCwcXyLgt%2FRymqO9cso9Rq44IpbwmswCewsh5fNJDEWFM%2Fsw5e%2BnxAY6pgEijaAn0daeQFdrh8TGYpkp4TfJRJniXC477KHO9M%2F%2BGy%2FvImQDtsPsJud8qnLj%2BLzEiyumyR5jWmedEWyaY9NwdT%2FCqV1ZVetJkKqUVg0vl92cMnr1IeTUWWY112ZV96VmiCy9oIodDbpeOaLEGvToaLSqqRTnkQrDsCigWcO4yDCq%2BYzaLJcEJvcqL6YaSmuazgUZ6ZBRTGCG6PJuydQjBXPo3qUF&X-Amz-Signature=c19bc2c842a2870237823d15d82c67764aed0254066fedf47aebf3e1279ca4c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJBMJ2AX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJO2nEfX%2FSIGCCPo0QXF7Jh5LzCmcvzOa0iYXCGvo1owIgbzXxThzIOJPO4aQY%2FqRs%2F0sw7qdDhxJvyjfSk2%2BTLRcqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXYHHjX0YMD%2Fs79sCrcA5BQ8tH615MseCq4tGnds2saL6gNCKwPFJdodBY2w5wk1RhtTO5jfLw95eZUFeKw1df0l%2BN%2Fj1j1UPA1ANOp8SGV7hCxhbp0vrDbuNQ1qt24CbNe6NgCdXR81RRTHdmOLZlRqLs9l9pGZUpV3xIMinW9zoqWtZ94EFo1GcCiYPr8jnMSRkLLAR7ffgXSe9PHrBicdZk2XNzX0UV42GNrepCXlH8tYlvm2Hw1H8LhXxRaEDFnuw228KsyW2DAgNjdTe%2FsBpHBnXrvmfX2h6WkoJImzs9j6TmFlK4Lo8ngemEeU8YHNeBpkzGmTsHVaq9VCfFm%2F7proa6Yf4m7PWJUE6O7xx04E0g5L6ZfxDdT5oQY2wcs7rPAbglGbOf9DEK8hPlajSDQCOjuTX81HHs1rmv7f80zFGe%2BMw9NYAAfL1J0KiAEGxSn01kVz%2BO5OcJFdwJS9uIj6dJKvg68M21VpVjCF8ZxmQAvbBwu3%2B6jP5UI9Q7RU2ac8uIiWxpzZnt3E8Qo9Gf2BsoKmma5AvJYw0JEz5O7KmPqcdQqyUCe81M0JghlWFtQu92BFuucgwo1k%2FY7G6AQasKt%2BkgVW99u4XHZsPiCquoGGPL2PXjpLpr4XTyQIDiRj4hOw0JIMPfwp8QGOqUB1bYxxporu6EU63rt2JAs93wZabVapM%2Brg76VWIeUcZExtAsKvKKmcf6ND4CFA9zBWvc37sJOdbTOXSPaGS47hylIlxrYDZDrO2H4w7BcFgA9UFzHMffF2fev5GQckdT34Avs1qW%2B3%2Fkf6GE3TwlodCEGJets1R2p7317kTAWri0e0XRcaE3yltuxJf7TjZqP9U31pwnXc1QwSW%2FF3di241q4vrII&X-Amz-Signature=563a1d397358906aef083cdb48a646d8733c091c366e25e896d547e61a637a28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
