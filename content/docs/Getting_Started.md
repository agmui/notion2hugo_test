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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGKYKUXM%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwAEeeH3ndF4eDXLNzirXf55mBjnLvBa146ouZVvguCAiEAsbZJxFNd9qlqT7Xknt8r9nNgAEwQ86WgnA1FVG6poLAqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHb34bsqSsgUJ1GaKircA6iWlX8ILpyPEDFuE6QvPsVMhNw40uDkKE%2BdSR1m3FCN3kMTBBC7VX%2B%2FRDQX0pdPo%2BHNWZO2owsynHnub%2BJzs8Prwi5Xv3s43l67gUCHltaloIj2tNjYuo3OGZ9H84ePeWSLRpANPvn7VZ%2BhnZfH59%2FWOut0OV6rasSecy%2BXoySSwGubuD8abVpVvPcSc41D1GPwZWSo1Jdqg0mPfBc9ZrmTVR6%2BtK2HqEkycwt%2Becrw%2BBfX3WaSq7yoETchT1Ao0oJwLa0ETSZKU9u0vO%2BjFLRG9qoImdl0gsj610qjIcDpMpURmlksah8RGVIE5DYf0YYLSn7RgOsKvnE9tb386PcViuxV6ejq7DA2VsDHpcH%2BW%2FagHzHtjJIACCY2s7aBjtQrMLyhlXZ36gqc7nO3KvSOl0ANRPUvAAFPt5yQS1AIfTVrDYuRxPU9mnD02phlLqsxgppDhsa1J2XgfvQRFi7VSd3WSeVzw%2FfcmrnVAx0bevfSXXp0r98nbUtMG1ETXkxoI%2BAj3eNpXULoRhoAwAIhaTzTAnaDMKE6NQlJLXMu0dpKrSmz0ngMBk1vzCL0EgixRTadz%2B7RdhEMc8nu5LbSYW7oINPevWmXG9dLXJhGZfqtyccw5eDKcV3xMLrK08IGOqUBUtLRKS2%2BXfGE5rjQlYi50HTu27WIv4pMQiUDJh%2FC3WyvfZ%2BEc1fRSazayvb5HmM1U3ENos7KdaRtCDARjiLrqOXCJaPW4G4ONlZFVi%2BieidsQhZEWhw3213eLu%2FnuAMgOzQU3Uh1w5oMawUR3NsOe8rgZ66F%2Bzys0ht03S%2Bq1xhNsuvSU6SGtfNeHlDd2wsXNCIVSMKTRfIX7QH1m2SLwTSJXPyF&X-Amz-Signature=27be3cb7ef0e9af563e8b7a7b02955b68b574660b3ba3a7764c98a8f5a933594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGKYKUXM%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwAEeeH3ndF4eDXLNzirXf55mBjnLvBa146ouZVvguCAiEAsbZJxFNd9qlqT7Xknt8r9nNgAEwQ86WgnA1FVG6poLAqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHb34bsqSsgUJ1GaKircA6iWlX8ILpyPEDFuE6QvPsVMhNw40uDkKE%2BdSR1m3FCN3kMTBBC7VX%2B%2FRDQX0pdPo%2BHNWZO2owsynHnub%2BJzs8Prwi5Xv3s43l67gUCHltaloIj2tNjYuo3OGZ9H84ePeWSLRpANPvn7VZ%2BhnZfH59%2FWOut0OV6rasSecy%2BXoySSwGubuD8abVpVvPcSc41D1GPwZWSo1Jdqg0mPfBc9ZrmTVR6%2BtK2HqEkycwt%2Becrw%2BBfX3WaSq7yoETchT1Ao0oJwLa0ETSZKU9u0vO%2BjFLRG9qoImdl0gsj610qjIcDpMpURmlksah8RGVIE5DYf0YYLSn7RgOsKvnE9tb386PcViuxV6ejq7DA2VsDHpcH%2BW%2FagHzHtjJIACCY2s7aBjtQrMLyhlXZ36gqc7nO3KvSOl0ANRPUvAAFPt5yQS1AIfTVrDYuRxPU9mnD02phlLqsxgppDhsa1J2XgfvQRFi7VSd3WSeVzw%2FfcmrnVAx0bevfSXXp0r98nbUtMG1ETXkxoI%2BAj3eNpXULoRhoAwAIhaTzTAnaDMKE6NQlJLXMu0dpKrSmz0ngMBk1vzCL0EgixRTadz%2B7RdhEMc8nu5LbSYW7oINPevWmXG9dLXJhGZfqtyccw5eDKcV3xMLrK08IGOqUBUtLRKS2%2BXfGE5rjQlYi50HTu27WIv4pMQiUDJh%2FC3WyvfZ%2BEc1fRSazayvb5HmM1U3ENos7KdaRtCDARjiLrqOXCJaPW4G4ONlZFVi%2BieidsQhZEWhw3213eLu%2FnuAMgOzQU3Uh1w5oMawUR3NsOe8rgZ66F%2Bzys0ht03S%2Bq1xhNsuvSU6SGtfNeHlDd2wsXNCIVSMKTRfIX7QH1m2SLwTSJXPyF&X-Amz-Signature=8148fd4f47f8ea02763349dc5508bfe4b32ecf4c37947b7bd487c23ecfbe7575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGKYKUXM%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwAEeeH3ndF4eDXLNzirXf55mBjnLvBa146ouZVvguCAiEAsbZJxFNd9qlqT7Xknt8r9nNgAEwQ86WgnA1FVG6poLAqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHb34bsqSsgUJ1GaKircA6iWlX8ILpyPEDFuE6QvPsVMhNw40uDkKE%2BdSR1m3FCN3kMTBBC7VX%2B%2FRDQX0pdPo%2BHNWZO2owsynHnub%2BJzs8Prwi5Xv3s43l67gUCHltaloIj2tNjYuo3OGZ9H84ePeWSLRpANPvn7VZ%2BhnZfH59%2FWOut0OV6rasSecy%2BXoySSwGubuD8abVpVvPcSc41D1GPwZWSo1Jdqg0mPfBc9ZrmTVR6%2BtK2HqEkycwt%2Becrw%2BBfX3WaSq7yoETchT1Ao0oJwLa0ETSZKU9u0vO%2BjFLRG9qoImdl0gsj610qjIcDpMpURmlksah8RGVIE5DYf0YYLSn7RgOsKvnE9tb386PcViuxV6ejq7DA2VsDHpcH%2BW%2FagHzHtjJIACCY2s7aBjtQrMLyhlXZ36gqc7nO3KvSOl0ANRPUvAAFPt5yQS1AIfTVrDYuRxPU9mnD02phlLqsxgppDhsa1J2XgfvQRFi7VSd3WSeVzw%2FfcmrnVAx0bevfSXXp0r98nbUtMG1ETXkxoI%2BAj3eNpXULoRhoAwAIhaTzTAnaDMKE6NQlJLXMu0dpKrSmz0ngMBk1vzCL0EgixRTadz%2B7RdhEMc8nu5LbSYW7oINPevWmXG9dLXJhGZfqtyccw5eDKcV3xMLrK08IGOqUBUtLRKS2%2BXfGE5rjQlYi50HTu27WIv4pMQiUDJh%2FC3WyvfZ%2BEc1fRSazayvb5HmM1U3ENos7KdaRtCDARjiLrqOXCJaPW4G4ONlZFVi%2BieidsQhZEWhw3213eLu%2FnuAMgOzQU3Uh1w5oMawUR3NsOe8rgZ66F%2Bzys0ht03S%2Bq1xhNsuvSU6SGtfNeHlDd2wsXNCIVSMKTRfIX7QH1m2SLwTSJXPyF&X-Amz-Signature=c9d1ed51bca0babac7a956301cec31886a0ed766ecaf27dbf6b02f0cb83e0387&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJISFHQL%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDA%2FRWS8ZxO8FNggCJ391R4VES%2Ba%2BL6pWEkrKLh%2F3C6igIhAPZaA90Z1sVV0Lc2XTTJQXPr6QGU4zarprnhbgBcc7ZNKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydEMILIJpxfce9izcq3ANDODeyEeyPp%2BsoJWZgRztVP1wM%2BF2ATkCnXbLG69%2FIuVBk3cidXxXA%2BzjXgtv4qqMj8Jm6VfwQTJb76yUTq06njCFxtI%2F6URsdmJ4aLDh9DPMnHZGuPx07hIwI6glcTIgLRftwGzacvgN8RzLUGhaSOUWNXbkqUt4qSNGczm%2B0wVZgsqX4DZ1XYVfaVWn%2Br6ndTSBZuJHo7JpHvc9mV0CGzC%2FnJPq8S3DgQSPDfyGfGYhjq%2FH6EMRoxqJWr7QgR%2BQqnO38HD3zymKEdw%2B02KzVzKGR5lL1vPENgXaIfERvOCi26F%2BI0i5Ht3R4sMTC8KrFrGB5zviEtJOZyfdsGnnXQqmVseJsWl56URK67TtPxo9gyi7ednGEKfyo9iXb9riFW9DY6z%2FtxvwLQj8vTaTAX6Wj3rknCTjMgPXrB%2BRn3zCi4mAVp0ViU6KNpguGuPtLGDhCW7vRgjwcWWVy5%2ByaCwlHJ5BLi4rRnp5HzOeU55pS3cnnop11%2FXvbsE6uiDPphmvOg3wre1hUeiZNlu8n1oHBgMSnJW07z3xbTCxSwwurOtqUBGTAYkyxxwwyAGFXTLr4MzF%2BTSnt0RQQD9Qw06yhP3bmTvcI%2Bv78pXd88kQ%2FCdD%2FSKtyXXE%2BYTDJvdPCBjqkAWdehzrZ2uJkfYdVNTPi22HhLWIc%2Fl5MmOdhdrOEjiLUMf03xQo%2FTfg0bUqEKOjjkbJrqe7k5BuO1PFSy7VR4vOslssuhx%2BtUGhVO1MExQ%2B6qkivTBn1jAAUYhrscYz16%2BIXqledl2gEipJvPU65kWziFn4MM8N%2Bnw1TkPKkcaA2AWRGpyKYWtVRdoGJ%2B%2FINR1NBfLLd9daEpO%2B7L9hJEQOWkBbD&X-Amz-Signature=168d79e31a52a7f9f9b0dd1f32bffe2884e645f46b7497b1a44d964665387a04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466746WEHR2%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwN818cFrWF30%2BBAh%2F9X1UnJW7iQa6xlG0k%2FTmcnwIQAiA5CvmczclEHOMZa89t9YzdVmQKiWmJIAFDF4qonvNtMiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZkkaA8uJpZMdgsXTKtwDR7t7gvqyHtP2Nf%2B2TqkjAXKEvVdZ38mf9uK8wiqKd3vLcTZ6Er9RslCdPHzxrpZqYDmegRTYC1yHykQfi5Kxu%2FiJZv8D5lmOk5At1P8pWWhhhK9F7jFOdAmf8w0kzlBYOMfrDcFBOIm%2Frw8qNSjSWWX5K6qO909jGjyOMZqSijWHXIzfQGt32zt3gJ%2BzkJwLgCzHdN%2B6ocTDXIu6AVO6yjsvf74qwTfmAsoljvEhg04vCYSDCbb%2FXs%2F1ZlNUrFw93FQB4K5W7ieLVvOPFJeY11RxdRDWy8VPSVkYehAp3e%2BQtiKwvRc6NmuCACgvCppkXJSmH3NZ82gx2Vvx%2F3JHrjff%2BifYy9khVc9ZpJK25swx6rVSwd8gxaFvsz%2FaFhvchzbQ28Q7BSLBL4A%2BCstzo4Pr2yo3RwSp29uANTlNa7y5V%2FYlStw%2F1jXFKM%2FJDcJPbsSXHcxxnDAyEv%2Fs31SgQWM8TPF%2FXLdeiz1JY6JIVTSwBWQaK8gwi4bbFZmt2Sh9jxV7FC6SUe1Qhf%2FC9pQi47TWcvvekPZlohtm%2Fpa0CP01AwkfYx2hdfyel%2FSUktA0DDDIOy722ETaMPDbNBhS5Hsw7LeAKn5%2BkUrurEcNa9oJpP2Z9FfqZ2vKUd8wqr3TwgY6pgEOHHlH7BOowoqC6JXQKpkaPX%2F0zZNqmmeqaGvDnbaww467mQM6sDm2twmqTIej%2BrgaVSqr1m0vtIb7LXeJOYyj%2B2dWuIC4nEVR3INxV23C%2Fq3eyirQhdIzSepo8uEO6xIW6NoCrNWM6X1Rpjelglm%2BXUkQvkCWwc1XQ9w3SieCVjufVHqrfcuONNz5MogNVLtYkaCPimOmnM1%2BypFJpBVtrHIAquuq&X-Amz-Signature=60df85efff5c32bbf0431e0c8e9f0977b960255a3643e64b571ea6f373ea9014&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGKYKUXM%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwAEeeH3ndF4eDXLNzirXf55mBjnLvBa146ouZVvguCAiEAsbZJxFNd9qlqT7Xknt8r9nNgAEwQ86WgnA1FVG6poLAqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHb34bsqSsgUJ1GaKircA6iWlX8ILpyPEDFuE6QvPsVMhNw40uDkKE%2BdSR1m3FCN3kMTBBC7VX%2B%2FRDQX0pdPo%2BHNWZO2owsynHnub%2BJzs8Prwi5Xv3s43l67gUCHltaloIj2tNjYuo3OGZ9H84ePeWSLRpANPvn7VZ%2BhnZfH59%2FWOut0OV6rasSecy%2BXoySSwGubuD8abVpVvPcSc41D1GPwZWSo1Jdqg0mPfBc9ZrmTVR6%2BtK2HqEkycwt%2Becrw%2BBfX3WaSq7yoETchT1Ao0oJwLa0ETSZKU9u0vO%2BjFLRG9qoImdl0gsj610qjIcDpMpURmlksah8RGVIE5DYf0YYLSn7RgOsKvnE9tb386PcViuxV6ejq7DA2VsDHpcH%2BW%2FagHzHtjJIACCY2s7aBjtQrMLyhlXZ36gqc7nO3KvSOl0ANRPUvAAFPt5yQS1AIfTVrDYuRxPU9mnD02phlLqsxgppDhsa1J2XgfvQRFi7VSd3WSeVzw%2FfcmrnVAx0bevfSXXp0r98nbUtMG1ETXkxoI%2BAj3eNpXULoRhoAwAIhaTzTAnaDMKE6NQlJLXMu0dpKrSmz0ngMBk1vzCL0EgixRTadz%2B7RdhEMc8nu5LbSYW7oINPevWmXG9dLXJhGZfqtyccw5eDKcV3xMLrK08IGOqUBUtLRKS2%2BXfGE5rjQlYi50HTu27WIv4pMQiUDJh%2FC3WyvfZ%2BEc1fRSazayvb5HmM1U3ENos7KdaRtCDARjiLrqOXCJaPW4G4ONlZFVi%2BieidsQhZEWhw3213eLu%2FnuAMgOzQU3Uh1w5oMawUR3NsOe8rgZ66F%2Bzys0ht03S%2Bq1xhNsuvSU6SGtfNeHlDd2wsXNCIVSMKTRfIX7QH1m2SLwTSJXPyF&X-Amz-Signature=8e447d19f4109d7f9a52071c5a46a4450f12a4141d9d0d19024e72fe8572bad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
