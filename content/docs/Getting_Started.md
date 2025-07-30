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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M4JQ526%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJudEYU%2BcMqYityzItc6LPctup37Ub77ATphYtzpqPmAIhAMERC01JDKZ1GnR66uniL1wb4WHiYFaG0c7vzcKXdOA4KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVd0tqwb0Q%2FP0SSEMq3ANGQIa7Oc9SGxBXtYe9xffusohFBrQk1BZpTELLmaHQ%2BZjOKIjfNkTaamGPPYo1n48tZCIjZO8iqVU2uOlkAdcG%2BzV6SOnRDqALb6w1IpMmzUqVFb%2FiB2tflx48ztt73O9lvcKdCphKvNZkFvLSclzdGLFfgfF3bhcJ5h2dj08APxFUPqgdubooLJp49Ho7B%2FkBmrf3QRyZ2AlmVmd1vxN4rKAnNUlRk9OL3c7Q8u7xJbR%2Bu2%2B3XOH60ok037P%2BHkMrlFPmmmfHdLwGekKqa122Uu0QuwK8Q1ttePMkhjfeMP6XU8gLn8agTM2XsRO5zZfy58hZrMECbr3ZcdsgRzc1JuNJTemv9WJBHqhVUJsUS5ayNPqxDytz8mSuhx1p1zLRNrGHw92%2BHZ0LLG0UV7SoxKo5KdLQIDkGThczfd3Fo2rZfrB1xetv%2B6kx%2B%2Batq%2B0q5InduyvnHiycEZUhelWt4z080xgUSyMhPVWW496qEcFHPsQt0DiDpKV71KKJxHcAaLXksMIvriXjPbeQMt3IwDg4C0LY1msGDdRQtqEpBC%2BJ7kbR4fAMDxAPGXf3SNSs98PhsHCodTMzvXZL7nQdY4LgV3DfEWfIWk0hS72O%2FR%2B25h76nsoo1M6naDDvt6XEBjqkAQWba%2FWSmCILRYtqmaf0BI4RjBQM3CkzVVrKMT7kk0zZjIlfX%2Bmz4888V5lSUuE6%2FqKNqhq1g0kZ2YNScH48b7QLkY89CgCD4w8MLS%2FcGe9kGs%2F6S2TKnI8ls9y%2BOahOUid5zOeJ9gZRAQbE0I3GF5W8ospAO7x7G9NIkk6T0CzuqkfHeYYvY%2FBRdMJEVgjMokbXqtkGc5Scj8KUcl3FGzeIEXV%2F&X-Amz-Signature=8892d14c173cfcc3cc5c1f01771df66bc2e8a179da9a06c56b59b88150533fa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M4JQ526%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJudEYU%2BcMqYityzItc6LPctup37Ub77ATphYtzpqPmAIhAMERC01JDKZ1GnR66uniL1wb4WHiYFaG0c7vzcKXdOA4KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVd0tqwb0Q%2FP0SSEMq3ANGQIa7Oc9SGxBXtYe9xffusohFBrQk1BZpTELLmaHQ%2BZjOKIjfNkTaamGPPYo1n48tZCIjZO8iqVU2uOlkAdcG%2BzV6SOnRDqALb6w1IpMmzUqVFb%2FiB2tflx48ztt73O9lvcKdCphKvNZkFvLSclzdGLFfgfF3bhcJ5h2dj08APxFUPqgdubooLJp49Ho7B%2FkBmrf3QRyZ2AlmVmd1vxN4rKAnNUlRk9OL3c7Q8u7xJbR%2Bu2%2B3XOH60ok037P%2BHkMrlFPmmmfHdLwGekKqa122Uu0QuwK8Q1ttePMkhjfeMP6XU8gLn8agTM2XsRO5zZfy58hZrMECbr3ZcdsgRzc1JuNJTemv9WJBHqhVUJsUS5ayNPqxDytz8mSuhx1p1zLRNrGHw92%2BHZ0LLG0UV7SoxKo5KdLQIDkGThczfd3Fo2rZfrB1xetv%2B6kx%2B%2Batq%2B0q5InduyvnHiycEZUhelWt4z080xgUSyMhPVWW496qEcFHPsQt0DiDpKV71KKJxHcAaLXksMIvriXjPbeQMt3IwDg4C0LY1msGDdRQtqEpBC%2BJ7kbR4fAMDxAPGXf3SNSs98PhsHCodTMzvXZL7nQdY4LgV3DfEWfIWk0hS72O%2FR%2B25h76nsoo1M6naDDvt6XEBjqkAQWba%2FWSmCILRYtqmaf0BI4RjBQM3CkzVVrKMT7kk0zZjIlfX%2Bmz4888V5lSUuE6%2FqKNqhq1g0kZ2YNScH48b7QLkY89CgCD4w8MLS%2FcGe9kGs%2F6S2TKnI8ls9y%2BOahOUid5zOeJ9gZRAQbE0I3GF5W8ospAO7x7G9NIkk6T0CzuqkfHeYYvY%2FBRdMJEVgjMokbXqtkGc5Scj8KUcl3FGzeIEXV%2F&X-Amz-Signature=440f21645a0a243d4e241d4213f0f261159e95ba30881aed4267cce8a0ca8b9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M4JQ526%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJudEYU%2BcMqYityzItc6LPctup37Ub77ATphYtzpqPmAIhAMERC01JDKZ1GnR66uniL1wb4WHiYFaG0c7vzcKXdOA4KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVd0tqwb0Q%2FP0SSEMq3ANGQIa7Oc9SGxBXtYe9xffusohFBrQk1BZpTELLmaHQ%2BZjOKIjfNkTaamGPPYo1n48tZCIjZO8iqVU2uOlkAdcG%2BzV6SOnRDqALb6w1IpMmzUqVFb%2FiB2tflx48ztt73O9lvcKdCphKvNZkFvLSclzdGLFfgfF3bhcJ5h2dj08APxFUPqgdubooLJp49Ho7B%2FkBmrf3QRyZ2AlmVmd1vxN4rKAnNUlRk9OL3c7Q8u7xJbR%2Bu2%2B3XOH60ok037P%2BHkMrlFPmmmfHdLwGekKqa122Uu0QuwK8Q1ttePMkhjfeMP6XU8gLn8agTM2XsRO5zZfy58hZrMECbr3ZcdsgRzc1JuNJTemv9WJBHqhVUJsUS5ayNPqxDytz8mSuhx1p1zLRNrGHw92%2BHZ0LLG0UV7SoxKo5KdLQIDkGThczfd3Fo2rZfrB1xetv%2B6kx%2B%2Batq%2B0q5InduyvnHiycEZUhelWt4z080xgUSyMhPVWW496qEcFHPsQt0DiDpKV71KKJxHcAaLXksMIvriXjPbeQMt3IwDg4C0LY1msGDdRQtqEpBC%2BJ7kbR4fAMDxAPGXf3SNSs98PhsHCodTMzvXZL7nQdY4LgV3DfEWfIWk0hS72O%2FR%2B25h76nsoo1M6naDDvt6XEBjqkAQWba%2FWSmCILRYtqmaf0BI4RjBQM3CkzVVrKMT7kk0zZjIlfX%2Bmz4888V5lSUuE6%2FqKNqhq1g0kZ2YNScH48b7QLkY89CgCD4w8MLS%2FcGe9kGs%2F6S2TKnI8ls9y%2BOahOUid5zOeJ9gZRAQbE0I3GF5W8ospAO7x7G9NIkk6T0CzuqkfHeYYvY%2FBRdMJEVgjMokbXqtkGc5Scj8KUcl3FGzeIEXV%2F&X-Amz-Signature=57efe89b8177cf2efd21b447ee73684d5c0675536bdc6baf4127b1911effb174&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJUNGVO5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDadeuIJ7qCOx1t%2B13DjJHeJy%2FftQqIuTvazLVdaWhC5gIhAPfMUmgKcSpsTjfkUlhxWWsu1uuSZ9KeNkMnj94DTu0XKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcvuZAla2T52BaA0Qq3AM37qp1MpGpt4cKT2dBuumqg2CTX1GaC53IgT5KrTP44KkNDoCKq3VGq%2BwYUsjSADCPuC5o3%2FMaizyYvdoe9WxdZTVckkLkUu5qDvE1ho0R2nPsY%2FFmKk0FgdMSgJf03k1S0jitjjYovuSjqj9eYF5%2BNFzJymtTiEwnuNM5VglqDyfDhJ5cK1jC5PcTlN6a%2Bs09zWdK2x3alE4QA8aWMQrACXWttoj9iXRbQcvo2S%2BTSyr3vxSVPZ3MZbKCHZfPgBdBfXB9Us9YZI9SD4vf%2BYE0BDREv4b3dSnT9Kk8cK%2FzDxGvKy0tIvXsFsm9dseVkgkPjPVC7bROCdWugBovbAvS8hL2o1ilf%2B3YWJ6sOFPFxUM5DjGvIpA45IHdbKNvgloS%2FA920b%2FJ2O5NyScrDMoLdCPmENCsJLRzu%2FJvAXPIMA6PhWUpqsXVn28WAyiL2c6lzffsVL54lx8MraiHwb2aSce9in8fzhYeKpvHBlJVpcqkS3Cf0Cqi3ZFHoWv6d6kr%2FiocxZuqFKEAlfMkzaRt6VvphhoYpJufJbX7mX%2FVnLPEdvfMp8rfg1nNW4ngqnN%2F0hcb7Yg%2FV9PfNUKv5QifxB09gbBLMRMUuvTPsE2salERf4Nyo1Jm6Mi9NTDLt6XEBjqkAYUhLL04ftcszt2l4mY3Dkfeb6i9SLvfglPF2qkZUBW4q3FKrN1y0fYYVPInfflLBTBtVp0ZGBrfMhPcOejE2ScX%2BEIPGvwCOS2BBRXO%2F0VoONbvVLq%2FgFVc2Dfq8DexsjtX2Yn6UfYPamA5GyHVWMlDJYxQq6lcxAzdjvIhIUodPT2nwErqJwdJDnkyfprZEzPjCJVSWXoKfYqqCnirwGFSygP4&X-Amz-Signature=873003bdde0a1cd3c8a26f87bda5b724def416b7d5cf938c979dea1f2a84b654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDQTFVOF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6Dw%2FTrRdraoOehPz3NJe6K6%2Fjy3nIe1lUXT%2FGrkYIugIgALEQB6QbI2W2uy3i0xJT%2FCWn9TkOcw2DXR7E6tGKAp4qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3XVShb4w0cllFqOCrcAybO65iUDcJmrptp9kIO4Gu9nSAfFE%2Bia49tVAe23%2Fl8Va07BKq40%2Bh3kR%2FU2ootKyJ%2BPgtURJtYiLKG1Xz%2BSBeCg96nlOor6Tk1LzzkxU7daJev67w3bHW1QYbwf9I639Po0lNGeuq2Ap9pMhSpoffS53bao7OdD4GD3IelyoK%2Fq9OideFKPxzY97xrVMsggUSzaeUCUaOWd32P6Vi3L8Nr3J9AJfPTziqh%2Fl5GyzpIgiLj%2FGZSZqC2qVZQwJOQGuOSxo%2BHvL2Yr2DuwEdZyhICHm6LCn%2Bfz5iyEJ7Ochm%2FIUboxs2OMsmX8JUlXGSKKpJqrM8bySwqa0ED%2FxY8Plm%2FZOiuXLGns46No1kk8Z8lt%2BPEdDXq01hA4WfswZ%2B1OH9Rhx7ArEgs2uTFU1lo5EZMVxC6owGdw9XriRYYsJ7te8B1xLzthbvzl68x%2FX1D9YXNeptSsWzaU%2BrDBm42affqXsUv%2FD7lr3KMJV1Tani4KyMbCeYsZSBA4k%2FWuBWYrai56mFrVmEsyk2NrFs1kyPRuqoJ%2BKcFs67n5G2rvUms%2BwSl2SUi%2BZ8He5JSqTDhYEr3FG4wQgWI85pvyk4%2BbZYwaQZjxw3WF2XZuIjKiYbo%2Fo4wJhFVTsb%2BuIC%2BMNy3pcQGOqUBujBXPYAa5m7%2B%2BA5D2c6golQD308QvLNXtN6AyLaNWj%2B9BBdb36ZP87AOXeaO7b1K7yBZPtHzy8FnIM0gkwJzT1aw3lhvpeT82TL%2Fbro%2BSu8sNpNjzoHRKlzochgcTS02dAZecZ0gBvkrrHlcTf8aTdLFSBk4J%2BoDDjNqDIbgM%2BD14n8moLAfzwmTmqVweU6RdLQgHUlaWGKjVYANhWaktLP4ab2h&X-Amz-Signature=fba2d5a4b1cc6003aeb0f7ca299de3994301ddf1cc8968868e4fcfb251ae3cad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M4JQ526%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJudEYU%2BcMqYityzItc6LPctup37Ub77ATphYtzpqPmAIhAMERC01JDKZ1GnR66uniL1wb4WHiYFaG0c7vzcKXdOA4KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVd0tqwb0Q%2FP0SSEMq3ANGQIa7Oc9SGxBXtYe9xffusohFBrQk1BZpTELLmaHQ%2BZjOKIjfNkTaamGPPYo1n48tZCIjZO8iqVU2uOlkAdcG%2BzV6SOnRDqALb6w1IpMmzUqVFb%2FiB2tflx48ztt73O9lvcKdCphKvNZkFvLSclzdGLFfgfF3bhcJ5h2dj08APxFUPqgdubooLJp49Ho7B%2FkBmrf3QRyZ2AlmVmd1vxN4rKAnNUlRk9OL3c7Q8u7xJbR%2Bu2%2B3XOH60ok037P%2BHkMrlFPmmmfHdLwGekKqa122Uu0QuwK8Q1ttePMkhjfeMP6XU8gLn8agTM2XsRO5zZfy58hZrMECbr3ZcdsgRzc1JuNJTemv9WJBHqhVUJsUS5ayNPqxDytz8mSuhx1p1zLRNrGHw92%2BHZ0LLG0UV7SoxKo5KdLQIDkGThczfd3Fo2rZfrB1xetv%2B6kx%2B%2Batq%2B0q5InduyvnHiycEZUhelWt4z080xgUSyMhPVWW496qEcFHPsQt0DiDpKV71KKJxHcAaLXksMIvriXjPbeQMt3IwDg4C0LY1msGDdRQtqEpBC%2BJ7kbR4fAMDxAPGXf3SNSs98PhsHCodTMzvXZL7nQdY4LgV3DfEWfIWk0hS72O%2FR%2B25h76nsoo1M6naDDvt6XEBjqkAQWba%2FWSmCILRYtqmaf0BI4RjBQM3CkzVVrKMT7kk0zZjIlfX%2Bmz4888V5lSUuE6%2FqKNqhq1g0kZ2YNScH48b7QLkY89CgCD4w8MLS%2FcGe9kGs%2F6S2TKnI8ls9y%2BOahOUid5zOeJ9gZRAQbE0I3GF5W8ospAO7x7G9NIkk6T0CzuqkfHeYYvY%2FBRdMJEVgjMokbXqtkGc5Scj8KUcl3FGzeIEXV%2F&X-Amz-Signature=25973796591a82cfaa1646a66ac6e1beb95961596befa5dcfa9d0422b4e919e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
