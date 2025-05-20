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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JFBQOJ3%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T181207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCGJPJ%2Fwboh%2BUmaPU5dXvQxpBOwKQRFvpgI8fH7sjPrgIhAP6lrnKJJdWV%2FDlvHjDhRP4PYUBmIpzkgsgH%2FgcZoFjeKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyU%2FjRVuU7e3xezQUq3APS3aLhGnA1HGZrMMZFN2FdYeaOjnzWWaigCNjKEtIzoT7yTAn%2BcDip0p2eH1km%2FPhaYNARM9h0%2FFl%2Bi1tROWqsACOVkOD9O4L4FvoWxMYImKLFFfMZOYBPaGHDeoHho8rfeelA78BmwJtmYJCRKkX%2BCYOfR8steoUpIGTkIN17yDOeQchpmGGGEtAgrdiNEK49%2BMOUB0f%2BCn7lon5pkQfVewlZzGuiNwN2dh28TFoN3Q0EhFo%2BiJhL0fDfLBJQzTbWwc1hdwsB4xVMAJ51jpVVJ4XHqm%2BjsyiifXkhZY60ulKFNExBWLYslQCc%2BnUdCvKpzvD9ltBBxO9h3c3LeE30kHhisBNVPK4kYVUzrq2Z5%2BwLnqwWJYP%2FPvRoZVKfaqimemZlz9bIHls4B30rIMNJa9%2FbS3b3IKckvSrLuBMYktPKXHKsD1IQrGaOqhr3BA5FeDc5CEp7NgquIjG5543cBxc3TfO0QvQlkWPT%2FzjBPvKxnm0JW%2FvUQx9JiBkL%2B%2FOTbyOjeU7ufjCY2y%2B5MTo7gx34ucFc1Xw6Y336c%2FnhwIrSlrr1ezwJurj%2Bc5WO4jwSA8vc79NjZkTylvUlw3q3P2SHPwLe%2FZzy0jd3Q2qax9m6se7rcOjcuBBVUDCN%2FrLBBjqkAXzOODRPb3kzDM3QggJCmpatpGq%2BgLUiV1olxQ9SBLN9WkbOTCid1s7MzUe6DxInD82awq1XT6X9R5WtLATQa2ZgfSHwNnqmYn86ht0lYNpTJxecgwKkATb5nf5jSOHcgnRmUxQ0L8o8mvntiA0jTGI3HuidgS%2BfXPhyOWDOqmsTJShS6tYApTQ9kF9GZo%2BPUlgayVBAgNa7QOJsuZmTH%2BbIrnjK&X-Amz-Signature=50a461569668f8edda2bf77fd356a129c932e92dc51b1eb2dd7c388c17fc94cb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JFBQOJ3%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T181207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCGJPJ%2Fwboh%2BUmaPU5dXvQxpBOwKQRFvpgI8fH7sjPrgIhAP6lrnKJJdWV%2FDlvHjDhRP4PYUBmIpzkgsgH%2FgcZoFjeKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyU%2FjRVuU7e3xezQUq3APS3aLhGnA1HGZrMMZFN2FdYeaOjnzWWaigCNjKEtIzoT7yTAn%2BcDip0p2eH1km%2FPhaYNARM9h0%2FFl%2Bi1tROWqsACOVkOD9O4L4FvoWxMYImKLFFfMZOYBPaGHDeoHho8rfeelA78BmwJtmYJCRKkX%2BCYOfR8steoUpIGTkIN17yDOeQchpmGGGEtAgrdiNEK49%2BMOUB0f%2BCn7lon5pkQfVewlZzGuiNwN2dh28TFoN3Q0EhFo%2BiJhL0fDfLBJQzTbWwc1hdwsB4xVMAJ51jpVVJ4XHqm%2BjsyiifXkhZY60ulKFNExBWLYslQCc%2BnUdCvKpzvD9ltBBxO9h3c3LeE30kHhisBNVPK4kYVUzrq2Z5%2BwLnqwWJYP%2FPvRoZVKfaqimemZlz9bIHls4B30rIMNJa9%2FbS3b3IKckvSrLuBMYktPKXHKsD1IQrGaOqhr3BA5FeDc5CEp7NgquIjG5543cBxc3TfO0QvQlkWPT%2FzjBPvKxnm0JW%2FvUQx9JiBkL%2B%2FOTbyOjeU7ufjCY2y%2B5MTo7gx34ucFc1Xw6Y336c%2FnhwIrSlrr1ezwJurj%2Bc5WO4jwSA8vc79NjZkTylvUlw3q3P2SHPwLe%2FZzy0jd3Q2qax9m6se7rcOjcuBBVUDCN%2FrLBBjqkAXzOODRPb3kzDM3QggJCmpatpGq%2BgLUiV1olxQ9SBLN9WkbOTCid1s7MzUe6DxInD82awq1XT6X9R5WtLATQa2ZgfSHwNnqmYn86ht0lYNpTJxecgwKkATb5nf5jSOHcgnRmUxQ0L8o8mvntiA0jTGI3HuidgS%2BfXPhyOWDOqmsTJShS6tYApTQ9kF9GZo%2BPUlgayVBAgNa7QOJsuZmTH%2BbIrnjK&X-Amz-Signature=89662906de054227904a413e3161822cdd4ec0b7d2031f2eb989aa9b75bde973&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JFBQOJ3%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T181207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCGJPJ%2Fwboh%2BUmaPU5dXvQxpBOwKQRFvpgI8fH7sjPrgIhAP6lrnKJJdWV%2FDlvHjDhRP4PYUBmIpzkgsgH%2FgcZoFjeKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyU%2FjRVuU7e3xezQUq3APS3aLhGnA1HGZrMMZFN2FdYeaOjnzWWaigCNjKEtIzoT7yTAn%2BcDip0p2eH1km%2FPhaYNARM9h0%2FFl%2Bi1tROWqsACOVkOD9O4L4FvoWxMYImKLFFfMZOYBPaGHDeoHho8rfeelA78BmwJtmYJCRKkX%2BCYOfR8steoUpIGTkIN17yDOeQchpmGGGEtAgrdiNEK49%2BMOUB0f%2BCn7lon5pkQfVewlZzGuiNwN2dh28TFoN3Q0EhFo%2BiJhL0fDfLBJQzTbWwc1hdwsB4xVMAJ51jpVVJ4XHqm%2BjsyiifXkhZY60ulKFNExBWLYslQCc%2BnUdCvKpzvD9ltBBxO9h3c3LeE30kHhisBNVPK4kYVUzrq2Z5%2BwLnqwWJYP%2FPvRoZVKfaqimemZlz9bIHls4B30rIMNJa9%2FbS3b3IKckvSrLuBMYktPKXHKsD1IQrGaOqhr3BA5FeDc5CEp7NgquIjG5543cBxc3TfO0QvQlkWPT%2FzjBPvKxnm0JW%2FvUQx9JiBkL%2B%2FOTbyOjeU7ufjCY2y%2B5MTo7gx34ucFc1Xw6Y336c%2FnhwIrSlrr1ezwJurj%2Bc5WO4jwSA8vc79NjZkTylvUlw3q3P2SHPwLe%2FZzy0jd3Q2qax9m6se7rcOjcuBBVUDCN%2FrLBBjqkAXzOODRPb3kzDM3QggJCmpatpGq%2BgLUiV1olxQ9SBLN9WkbOTCid1s7MzUe6DxInD82awq1XT6X9R5WtLATQa2ZgfSHwNnqmYn86ht0lYNpTJxecgwKkATb5nf5jSOHcgnRmUxQ0L8o8mvntiA0jTGI3HuidgS%2BfXPhyOWDOqmsTJShS6tYApTQ9kF9GZo%2BPUlgayVBAgNa7QOJsuZmTH%2BbIrnjK&X-Amz-Signature=663b7499bac3f3aaae06845fb3d2deef9c1e1b8b7eef2562d6b324e4a986e078&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYSF5RTS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T181216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOLu7d7MHsy5c0Uxy%2FsvF7Ow9GAl2r5MULUToTjftcXAIgM%2BbRYYMojl58rVQZ5RJbsApZ%2Bmfvno%2BRKZr2O1GdVzsqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPg5wEFicV7HvkGqfircA8z7sy212V7ogoyyXlhn7ikvGalDwDva%2FIqUe6%2FKy0K2z9gbzuzaNtIzkr391%2FqHKi4BrR%2FebkKjVRRivvCrYL9%2BdxM2BNvtiUQCv5VKrRneMmrEtPxbMqY88mzUr6tL1%2Bl3Lbz%2B8YQygc8mFQTVXKJYMg%2B3DZyQv6qnaxPUUUqRsNHonCnPnKhKhOglxJZQ7tt2bhKXFqeTEkxm1nI8ffolhsG8VzTkv%2FgQavLoHoW1yeIv5pfwqKMlj28KSzHO%2BeE%2F45OJrXf%2BfNaVj1LfMNNOumZZF843oPLRj8Ju0AZgHRrKVLDSYSnGLAqy2VaT0Yv%2B8OiuL9Jw71y8oaYm1Frz9kJGbPMOSfHMd07pyPlXb8n6tPxjvzrIWVzjihrR1A%2FKd8QLeYdXLtu5eDIb1yzF%2FoGir1FokIkbQUVm1qL23CtpdcyIiZdTkOyK%2Fq6aDEmnZ2yaFP782mxYqNKjb8J9P5MIvm3WFRatjY%2Fjz0g2BnEH7PU4JyDNI%2FQjWWa1Gtiq2IIRp5zTCDPQppAJlcM4LALY35nIWUjEHhuDOlt2Y10%2FJnS0U80YEY4KKSQGZoGmHYl3B%2FIv62SpuKYfLFT5NpFbzHnQq8mHACpi2fDTxxlpAdlWCP4ZCtRMMOr9ssEGOqUBjWxhM3ULOXIabS0MAcQ%2F1Ak39bkytXk6Q29OeSCwB6gkzniVOqNOcJ%2Fd4SyKZ%2FQlnyabPu3Pj4mlSAELOq%2FVHDvMY1bfFfbp3FEYc2zZF0rKD1aAwjD47uxw96nlIFibFrrQOaAIgv6nYIMVN0Gcj13%2BohzFleqswX9775YRepR9a%2BHO0t3FmqpQpc2HYKr0QhdU92hqbphZLAEpqy0pPZn4zWgN&X-Amz-Signature=5be2373019ee6e60bc1a71be0ab9eb5d5598f4a9902de0e1dc655e7a972bf16c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYZJPTOF%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T181216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEB2F0ULusANA5bSrf4DUnlHmyGumWuOHpfim4JXS3OJAiA84KrRw3eC%2Be9%2Ff7MUSSD8bQO3SGyI265z%2FLUfTnPD7yqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjG3oBUlKjDu8FRtUKtwDU6rI79ETvotW74xFKAjxxhJn2uX1BdwRgWcA1ziOE2V0vvbGNmSRpGV1TYL3T6dEc5NJw2viggsS2WoK2BGqVtVzYmEWSsB%2FrOLcupJudTVlxfK3FfdjIBaE3xOwSBlPHkJKRC2iC7Ic9JckvyyXe96NCO3Oj0MmXIMdpn9jSdwPkeFJFHJohXgRd8zN3%2BIWBqn30VjmpmVycPfQ7C7j%2F%2Bx61jqx339bUzZuCLCPnKLsNFFcRrcvE81JL0eTZfDWpdExzu8GEyU%2FEYvogfgDkL6a1H6dxEz0fvjspAIOPADL91sR7IK%2Fy8km3UcQcgNI9Efih2HcjPGPTDngMsFzKI%2BvmJJrrAmIltp84Lp1iS5tTaWJnmM3KmRAtRMVTFQOfa2Zs0BvRrrkfKsdOBDgdGRTWM%2FpXMsPB5UKeWYokNPpINHSHnvzQrBRzyFeBxzTgy6ziru4KF2d%2F6cXeoPTttrAm8u0jH%2Fm8KW%2F%2FwWip%2ByrkTZE9TXj%2F081lTUjRM6gyg4INRb6C1a%2BlFSiEKwgSCHuXJ8AkLCg8MvTQ4qu9jIC2el%2BAAg3S%2B%2FRWlbN0c430phzw%2F%2BkJsXNyGKNd7CxEtBdoyc4E4CHEzSLZP%2B5%2F8KZgotokemCWESwPY0w%2BP2ywQY6pgFAooGdy1IG37awgSYPhn9jn2bzjZrGUfsnphB3Yo16tnLFJIF9UcQa1xlnZrpr6ftPY5FTm6eL%2FCYy4RujiBmELS4JMIb%2Bdnx4NFjxk1LUppxJt49PD6kMBvP3j4omaFGWlsbFgJS%2FWytWNqoN9zO37EcuD6s1ndGS0miakCxKH%2Fzt8IPdHIrnUGZZuiCUvAMvHic3D49N%2BFq7Mmyq2%2BcuytbWyeht&X-Amz-Signature=531a31bc4f113b13e8b8a10854bad61b4fcb2738e12da6d8d7daa6430c096def&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JFBQOJ3%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T181207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCGJPJ%2Fwboh%2BUmaPU5dXvQxpBOwKQRFvpgI8fH7sjPrgIhAP6lrnKJJdWV%2FDlvHjDhRP4PYUBmIpzkgsgH%2FgcZoFjeKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyU%2FjRVuU7e3xezQUq3APS3aLhGnA1HGZrMMZFN2FdYeaOjnzWWaigCNjKEtIzoT7yTAn%2BcDip0p2eH1km%2FPhaYNARM9h0%2FFl%2Bi1tROWqsACOVkOD9O4L4FvoWxMYImKLFFfMZOYBPaGHDeoHho8rfeelA78BmwJtmYJCRKkX%2BCYOfR8steoUpIGTkIN17yDOeQchpmGGGEtAgrdiNEK49%2BMOUB0f%2BCn7lon5pkQfVewlZzGuiNwN2dh28TFoN3Q0EhFo%2BiJhL0fDfLBJQzTbWwc1hdwsB4xVMAJ51jpVVJ4XHqm%2BjsyiifXkhZY60ulKFNExBWLYslQCc%2BnUdCvKpzvD9ltBBxO9h3c3LeE30kHhisBNVPK4kYVUzrq2Z5%2BwLnqwWJYP%2FPvRoZVKfaqimemZlz9bIHls4B30rIMNJa9%2FbS3b3IKckvSrLuBMYktPKXHKsD1IQrGaOqhr3BA5FeDc5CEp7NgquIjG5543cBxc3TfO0QvQlkWPT%2FzjBPvKxnm0JW%2FvUQx9JiBkL%2B%2FOTbyOjeU7ufjCY2y%2B5MTo7gx34ucFc1Xw6Y336c%2FnhwIrSlrr1ezwJurj%2Bc5WO4jwSA8vc79NjZkTylvUlw3q3P2SHPwLe%2FZzy0jd3Q2qax9m6se7rcOjcuBBVUDCN%2FrLBBjqkAXzOODRPb3kzDM3QggJCmpatpGq%2BgLUiV1olxQ9SBLN9WkbOTCid1s7MzUe6DxInD82awq1XT6X9R5WtLATQa2ZgfSHwNnqmYn86ht0lYNpTJxecgwKkATb5nf5jSOHcgnRmUxQ0L8o8mvntiA0jTGI3HuidgS%2BfXPhyOWDOqmsTJShS6tYApTQ9kF9GZo%2BPUlgayVBAgNa7QOJsuZmTH%2BbIrnjK&X-Amz-Signature=96afcc3563e1ad68bbdf900b1e007a15cbcef7ccba7394d14d164cab9f0bed58&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
