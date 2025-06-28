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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHXCI4GC%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T170706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF8%2BenbN50mBsuF%2F7JXUs4JdCPo5OXKQW3gJfhFDKUvQIgMtbxTLY4VSKOpCi97sTI%2BrguKopURkkJlRzMDfIU6SkqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqyUZC3C4vit3beICrcA7iwbyhBMJWYoa9B8E%2FUWG4Efyri8TxhsGzo93%2BvKfYh5epi28a41tJIB0oJ3112bHPj4BEIRLawypDE6gZN%2Fc16wQ%2BPMVycQ1CA44RCxQubrd35bYemQNCPtoitAJ%2F4BtSj9C493%2BWGHE27CTg7CZfeX1DrVY%2BY6sqi6gBxOIz9yHgjUKvPN2IEgp2KMmU%2F7BmowGfzIZ9nnMLyybSXAjPX3XfTg9Ylm0H9f1wPIvzavia06orEA9BiorI8V6FmDXOQBvi9GlcPGSj2uJ2u%2BZUq2RC3xM%2B8n0ZXgaK6NAJlL8GctmL%2FxUbyByGDTGLema26vPWJf98I9H52AYDb79CUfZxdDj2z1woB5tvzmNZVvlPol9y8N3z5eH82ziwZo%2F7Ag14%2FtnokEgVe6%2FfOYItX%2FtG9zFbXVyKIXuOHIJsnFUUNvkQQZQpbxOrt7c2SsLU3Ej%2BwSEdnv3Au13uio%2FQXBk0yHr7VF2KJu5A3upHTjUO0wwptiseMsd%2FzhO2LoXovhcAA79L8yhLi%2BsprDXiwEuZGDl7e6Nw5VtBTlGof2Wb8%2FBDrwsXA%2FYwfnDfgFTfGx9y92cAfHPoK8I8cq6VRq3qRsBX5FkYohgYvSzdTt9AkMEv6UC7eTKIiMKKKgMMGOqUB5WUWc3MF%2BLShXt7PEv12ege3kuMmPsm%2FzgZHJt0ufUs4Gg7Mu3t0d%2BmXjKpS7KdnbNnp40mvm2ii62NCHOoMWENiq5KHsJkCVWRYd3mCGYWQ%2FaUuK8EytObBuwtOswgefL4p5ykO7Rn8l6yIO1uhFMOvgqaQ4QJO8%2FpsAwiraqV%2BfuIAyhhptzHwH0MWLYSlgteUBP60PSCe1EbtLKy8grgAPMDT&X-Amz-Signature=60c496c44aee1cd11349475489a1736c633f64ef2561791cc3c7052b7d9483a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHXCI4GC%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T170706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF8%2BenbN50mBsuF%2F7JXUs4JdCPo5OXKQW3gJfhFDKUvQIgMtbxTLY4VSKOpCi97sTI%2BrguKopURkkJlRzMDfIU6SkqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqyUZC3C4vit3beICrcA7iwbyhBMJWYoa9B8E%2FUWG4Efyri8TxhsGzo93%2BvKfYh5epi28a41tJIB0oJ3112bHPj4BEIRLawypDE6gZN%2Fc16wQ%2BPMVycQ1CA44RCxQubrd35bYemQNCPtoitAJ%2F4BtSj9C493%2BWGHE27CTg7CZfeX1DrVY%2BY6sqi6gBxOIz9yHgjUKvPN2IEgp2KMmU%2F7BmowGfzIZ9nnMLyybSXAjPX3XfTg9Ylm0H9f1wPIvzavia06orEA9BiorI8V6FmDXOQBvi9GlcPGSj2uJ2u%2BZUq2RC3xM%2B8n0ZXgaK6NAJlL8GctmL%2FxUbyByGDTGLema26vPWJf98I9H52AYDb79CUfZxdDj2z1woB5tvzmNZVvlPol9y8N3z5eH82ziwZo%2F7Ag14%2FtnokEgVe6%2FfOYItX%2FtG9zFbXVyKIXuOHIJsnFUUNvkQQZQpbxOrt7c2SsLU3Ej%2BwSEdnv3Au13uio%2FQXBk0yHr7VF2KJu5A3upHTjUO0wwptiseMsd%2FzhO2LoXovhcAA79L8yhLi%2BsprDXiwEuZGDl7e6Nw5VtBTlGof2Wb8%2FBDrwsXA%2FYwfnDfgFTfGx9y92cAfHPoK8I8cq6VRq3qRsBX5FkYohgYvSzdTt9AkMEv6UC7eTKIiMKKKgMMGOqUB5WUWc3MF%2BLShXt7PEv12ege3kuMmPsm%2FzgZHJt0ufUs4Gg7Mu3t0d%2BmXjKpS7KdnbNnp40mvm2ii62NCHOoMWENiq5KHsJkCVWRYd3mCGYWQ%2FaUuK8EytObBuwtOswgefL4p5ykO7Rn8l6yIO1uhFMOvgqaQ4QJO8%2FpsAwiraqV%2BfuIAyhhptzHwH0MWLYSlgteUBP60PSCe1EbtLKy8grgAPMDT&X-Amz-Signature=9d59030472c5b6b77e60dec19a80ad1dfd0497802cc6d02cc7546596c27bae69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHXCI4GC%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T170706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF8%2BenbN50mBsuF%2F7JXUs4JdCPo5OXKQW3gJfhFDKUvQIgMtbxTLY4VSKOpCi97sTI%2BrguKopURkkJlRzMDfIU6SkqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqyUZC3C4vit3beICrcA7iwbyhBMJWYoa9B8E%2FUWG4Efyri8TxhsGzo93%2BvKfYh5epi28a41tJIB0oJ3112bHPj4BEIRLawypDE6gZN%2Fc16wQ%2BPMVycQ1CA44RCxQubrd35bYemQNCPtoitAJ%2F4BtSj9C493%2BWGHE27CTg7CZfeX1DrVY%2BY6sqi6gBxOIz9yHgjUKvPN2IEgp2KMmU%2F7BmowGfzIZ9nnMLyybSXAjPX3XfTg9Ylm0H9f1wPIvzavia06orEA9BiorI8V6FmDXOQBvi9GlcPGSj2uJ2u%2BZUq2RC3xM%2B8n0ZXgaK6NAJlL8GctmL%2FxUbyByGDTGLema26vPWJf98I9H52AYDb79CUfZxdDj2z1woB5tvzmNZVvlPol9y8N3z5eH82ziwZo%2F7Ag14%2FtnokEgVe6%2FfOYItX%2FtG9zFbXVyKIXuOHIJsnFUUNvkQQZQpbxOrt7c2SsLU3Ej%2BwSEdnv3Au13uio%2FQXBk0yHr7VF2KJu5A3upHTjUO0wwptiseMsd%2FzhO2LoXovhcAA79L8yhLi%2BsprDXiwEuZGDl7e6Nw5VtBTlGof2Wb8%2FBDrwsXA%2FYwfnDfgFTfGx9y92cAfHPoK8I8cq6VRq3qRsBX5FkYohgYvSzdTt9AkMEv6UC7eTKIiMKKKgMMGOqUB5WUWc3MF%2BLShXt7PEv12ege3kuMmPsm%2FzgZHJt0ufUs4Gg7Mu3t0d%2BmXjKpS7KdnbNnp40mvm2ii62NCHOoMWENiq5KHsJkCVWRYd3mCGYWQ%2FaUuK8EytObBuwtOswgefL4p5ykO7Rn8l6yIO1uhFMOvgqaQ4QJO8%2FpsAwiraqV%2BfuIAyhhptzHwH0MWLYSlgteUBP60PSCe1EbtLKy8grgAPMDT&X-Amz-Signature=689b78dfe46c34d7bedbf1e250edb66a76e2d256517f37bb957c6d2e400b477a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNFRVAZD%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T170707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSVwtRCVKrRHmX8zbWRS4r8usNxqMvydYYRxVcEVjHfQIhAOpZlYU%2BOTiq5dqnotOWIf5kEDpLLk9PzqmjYqmPm6gMKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQQazApZ8RFywH%2BnYq3APFALzKQXc9xWLQ8PARdLByyiYGKA2HovQkEmdKQv%2FwUSBPSdlCAQBE3CGbxq88gZJpDU5xPTHwcOBoNd%2F5u%2ByYNkV5EQghgZKWkIufTvalItYZFr9ZXMdctmbGkKEIdkSim%2F%2FtgLC4OKfrAOBVsO7vsGGyCveeedNYF%2FIdaPmJskyY5SbUdb3mZteoAPW7YEXzp9P6NNbjKKgkjNmR8%2BP40a0YUo0xdG2Z5utOlJ1tVYUvwcdPqCj%2F9WVAK0KDFOALEbWo1vru81o%2BaQpL1rVTlHlBs6Lh%2FrdFHSXUMp8%2BSZGMUfJHmC5zK9yvV%2FF9i0JezaKRRkA6hvFFzUx%2BBmjHOlsF%2B1SOZascazHbRKE8anHLZ3eO6aXEtUlNYVZDUZ74%2BJHvwL62BZynn8lCmxQeq6%2FD1D4psGEtkRCYS6TC89swMNKPUV89Cn0LcB9efTbiqP017UDDu55gKKSK%2FXj0jEwWeCY0u7Q0%2F5f3DtoCXhI9%2F9qVFyZB2vfd%2FQr1cg5GwNyp5Btm3PRliTckVjXiPUnVOWMCVWOVFN5NnJ%2BEkWZyP%2FGFGdJG8SJZLtQ%2BpuMsFwrsg6q64s%2F%2B5xflRkb%2BQkYQvZuaveoexxMVrF1Q62AUVWrs6RFPZC4Y0jChioDDBjqkAVx1WZe3ODDoV9GGGkpOm6rElQ5%2BB0mWepo8gryXWQXT3jkTbmF3ppL7vNGjhicbVA75yGJ3L962Ww7wTi0G7L7E8AU4%2B4zfaohziYEINh1HBTf5l%2FOtNjmEeYVypYwqdaD0b%2FQq7CUVkoeitGQ4G4E4gV2EKiIXsd21%2BbmYzJQRmdkb6VCclPV%2BR%2BF0JUwGyGVk8RH30Faay1N46zwQOjVE0Vjr&X-Amz-Signature=d73b3d9d7f119cd838f8355574affcf826f497e1563518e762602684a618e1a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JVYJNFH%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T170708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeq2n02IY1idnixAfMBux3euTNurpWIDY3vh2zFzJ2lgIgE179cFjVJfL%2FdreNHLA6%2FX5wVm14w02a4jmNi8gjhlUqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2FaWxLfwhkPR9eNzyrcA90S3TNPI%2BEf%2BkKcDYKZxmRs2y%2F5Exl%2BM5H%2B4mr4llI2N0wjQ4Ji2TkaFVNIcVuWE6ud36ZJGa8qWMQFTYXDC8E9EucRALDMvQWVl8pkF0BY2X4B8aNFKvtSvotinu8MssXNfMz4PWX4dMadUlJ%2BzPFv2AZDoSkJ%2By9iFaSPcfH%2FLTy2ygRf0IQHxoGy%2BobcLbINgfe4CTsBlArqgwhnsOkNOm%2BppLevDkdtv%2BtzaYdm8%2FdXl%2BKIvZdzyezeQHXk3PN9p%2FZAsNqwqZw6E7bCVkwkxDzQ9hsltK0aqZHnqF0vK7eY9gKBd82KDXftYLsuksOruZmey2HYW9bksb2Tamg5K05%2F5CELVsija%2Bc%2Fqz0mQXvXGZ8cGXx2rS61QIMGe%2FCnykgfaSPMBmyHEi7wruCi2v75c%2BTeAuqc4brh9ZKuxOegL3Ak6jW88wzmKpAQ1h2%2F84%2F96YjrbhQxDRRMtLUYfxiVJj%2BaJTkr5V00KMdXanwgwmqdpCMWTRGbcjNSqiBA4%2BuHbyjVyH5HfP48DqWDVVCP%2BOcG1zxldUYGOYz1uovcpdqHhhIETJKc9TQowdsu9uHNQt041DOqYAG9XuCMrW1yHXKTpHr6RUfRoQDXH8kRUSN8QDNO4C4VMJSLgMMGOqUBdXW7j%2B%2Bibx99mECNHplZs%2BlWK3eG9wkY5BWAmOWc8F2meWUlEKozGOGDnXobKQBDyISJ%2F%2Fqmg2yaMbSx8ahcGlAGjQfHe8aql8xg5U%2BCU7CeZ5G5MwjQpfyaNgXgfAwINDCXYDPhmFeYcB8yT2kaioMmO2chCN1Dg38xQSjm84GdTxdLXYRTMlDd1J77mTOvhkD2A6469R4%2F0SlAZB2i19o0596I&X-Amz-Signature=39a93eb05a27a75c15bd30dbe13dbf87be61357f8b3232e8a2487dbbdfe0889d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHXCI4GC%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T170706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF8%2BenbN50mBsuF%2F7JXUs4JdCPo5OXKQW3gJfhFDKUvQIgMtbxTLY4VSKOpCi97sTI%2BrguKopURkkJlRzMDfIU6SkqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqyUZC3C4vit3beICrcA7iwbyhBMJWYoa9B8E%2FUWG4Efyri8TxhsGzo93%2BvKfYh5epi28a41tJIB0oJ3112bHPj4BEIRLawypDE6gZN%2Fc16wQ%2BPMVycQ1CA44RCxQubrd35bYemQNCPtoitAJ%2F4BtSj9C493%2BWGHE27CTg7CZfeX1DrVY%2BY6sqi6gBxOIz9yHgjUKvPN2IEgp2KMmU%2F7BmowGfzIZ9nnMLyybSXAjPX3XfTg9Ylm0H9f1wPIvzavia06orEA9BiorI8V6FmDXOQBvi9GlcPGSj2uJ2u%2BZUq2RC3xM%2B8n0ZXgaK6NAJlL8GctmL%2FxUbyByGDTGLema26vPWJf98I9H52AYDb79CUfZxdDj2z1woB5tvzmNZVvlPol9y8N3z5eH82ziwZo%2F7Ag14%2FtnokEgVe6%2FfOYItX%2FtG9zFbXVyKIXuOHIJsnFUUNvkQQZQpbxOrt7c2SsLU3Ej%2BwSEdnv3Au13uio%2FQXBk0yHr7VF2KJu5A3upHTjUO0wwptiseMsd%2FzhO2LoXovhcAA79L8yhLi%2BsprDXiwEuZGDl7e6Nw5VtBTlGof2Wb8%2FBDrwsXA%2FYwfnDfgFTfGx9y92cAfHPoK8I8cq6VRq3qRsBX5FkYohgYvSzdTt9AkMEv6UC7eTKIiMKKKgMMGOqUB5WUWc3MF%2BLShXt7PEv12ege3kuMmPsm%2FzgZHJt0ufUs4Gg7Mu3t0d%2BmXjKpS7KdnbNnp40mvm2ii62NCHOoMWENiq5KHsJkCVWRYd3mCGYWQ%2FaUuK8EytObBuwtOswgefL4p5ykO7Rn8l6yIO1uhFMOvgqaQ4QJO8%2FpsAwiraqV%2BfuIAyhhptzHwH0MWLYSlgteUBP60PSCe1EbtLKy8grgAPMDT&X-Amz-Signature=3cb29b182a8ba5125899ae90b6637c3bb4a098dcfe5aae8de1261405e5686c98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
