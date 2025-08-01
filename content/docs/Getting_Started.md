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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW37QIVL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8V7nAwpV%2BBgfjBl62WUGj7t1Xie%2FoSZx%2FFcNevsHAqQIgZnpXtzduz051F0%2BTY4jBWpLXFa3RDTxrSGyPOB5rZ0oqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQIhGx7h4jfhx0F0CrcAyNbGbVv%2B82kV4XJ2fIGtWT7Oi5v38wdkNNtIFCO8GjWs7ICcOqF%2F15lJRLGwQtpMv6AgYwUJGcBmZIrJWG5Z7MXN64sEVyrSi03Ti65V8z4u4bGYFBaWsH%2BDOkGBuNQgAijLSj29v%2Big7BJIQM%2FgzM7z2xxKbOfAQdNKHCyc7y5vyJVeqZnzQQOAZWt74Z6s45bVbXzHbti13V8B7Qe434I2GyG8iVtGOXzcdb8UenVwM86iIi01VBqjVvCF5gVI%2FWhgLw%2FbV9ISeYs2X2CHOQ%2FruXmG%2FWHoTI3FeC1gAgSjglKBr8%2BM1vPt0PCqSQ%2FZI5ofUBF7BbKq2mklv9KsXUzpPq9paAIgSoUah9OoEUhLfhJ1jfKGxxkyPXDVJJJsJvVkgkdHzVZumOB%2BY4RdLWjLViOBaS97HxParTPr3NnfAqM0PwMzI1WkSx28zTTcJ8W7l0HQhYnljMul8dvwGsGtBOmemibsunDuCIs%2B4ncKfEDvdpFEwZoq5nlPD1ECcRfrRKYxPagQCqDluzLstwhM26seqqH35Czlrh9Ig4oDhNCvTwR%2B3sF0G7lRGPR3eH0j8ra1M3c39kz2UVc75PrhV%2BqsIn5SqVuZ8%2FGrYDewkzkk3peeFI1oDbiMIXtscQGOqUBQ9eB0WobvbxLIypx1UxiqZWfh%2B%2B6qzsV2Gxz0sw581uzVkpLAja1R31FFVL%2FkoEVTIr1ZQHc964KenrNAr537UYlfq3cXZoC8LpmPEt%2FWlrSCOCw2qH6%2Fr7uxYEUpRq8u0zYbQ2yTAwNaAZ9Fo5eiVcuBU2xg4B2GWAlTverFabSvVRIs1lYj3pmGH10EyI8nAQ%2BfLfYwpV4fST44u%2BhqnMJQEtH&X-Amz-Signature=f219c3826abb6f9b2b120e0042ed7253247ca84bd2991517db66585a35e17737&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW37QIVL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8V7nAwpV%2BBgfjBl62WUGj7t1Xie%2FoSZx%2FFcNevsHAqQIgZnpXtzduz051F0%2BTY4jBWpLXFa3RDTxrSGyPOB5rZ0oqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQIhGx7h4jfhx0F0CrcAyNbGbVv%2B82kV4XJ2fIGtWT7Oi5v38wdkNNtIFCO8GjWs7ICcOqF%2F15lJRLGwQtpMv6AgYwUJGcBmZIrJWG5Z7MXN64sEVyrSi03Ti65V8z4u4bGYFBaWsH%2BDOkGBuNQgAijLSj29v%2Big7BJIQM%2FgzM7z2xxKbOfAQdNKHCyc7y5vyJVeqZnzQQOAZWt74Z6s45bVbXzHbti13V8B7Qe434I2GyG8iVtGOXzcdb8UenVwM86iIi01VBqjVvCF5gVI%2FWhgLw%2FbV9ISeYs2X2CHOQ%2FruXmG%2FWHoTI3FeC1gAgSjglKBr8%2BM1vPt0PCqSQ%2FZI5ofUBF7BbKq2mklv9KsXUzpPq9paAIgSoUah9OoEUhLfhJ1jfKGxxkyPXDVJJJsJvVkgkdHzVZumOB%2BY4RdLWjLViOBaS97HxParTPr3NnfAqM0PwMzI1WkSx28zTTcJ8W7l0HQhYnljMul8dvwGsGtBOmemibsunDuCIs%2B4ncKfEDvdpFEwZoq5nlPD1ECcRfrRKYxPagQCqDluzLstwhM26seqqH35Czlrh9Ig4oDhNCvTwR%2B3sF0G7lRGPR3eH0j8ra1M3c39kz2UVc75PrhV%2BqsIn5SqVuZ8%2FGrYDewkzkk3peeFI1oDbiMIXtscQGOqUBQ9eB0WobvbxLIypx1UxiqZWfh%2B%2B6qzsV2Gxz0sw581uzVkpLAja1R31FFVL%2FkoEVTIr1ZQHc964KenrNAr537UYlfq3cXZoC8LpmPEt%2FWlrSCOCw2qH6%2Fr7uxYEUpRq8u0zYbQ2yTAwNaAZ9Fo5eiVcuBU2xg4B2GWAlTverFabSvVRIs1lYj3pmGH10EyI8nAQ%2BfLfYwpV4fST44u%2BhqnMJQEtH&X-Amz-Signature=3421a4136572a29e71ef2c68146cf31d4118c315af77c2c3dc7ef7af6a373882&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW37QIVL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8V7nAwpV%2BBgfjBl62WUGj7t1Xie%2FoSZx%2FFcNevsHAqQIgZnpXtzduz051F0%2BTY4jBWpLXFa3RDTxrSGyPOB5rZ0oqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQIhGx7h4jfhx0F0CrcAyNbGbVv%2B82kV4XJ2fIGtWT7Oi5v38wdkNNtIFCO8GjWs7ICcOqF%2F15lJRLGwQtpMv6AgYwUJGcBmZIrJWG5Z7MXN64sEVyrSi03Ti65V8z4u4bGYFBaWsH%2BDOkGBuNQgAijLSj29v%2Big7BJIQM%2FgzM7z2xxKbOfAQdNKHCyc7y5vyJVeqZnzQQOAZWt74Z6s45bVbXzHbti13V8B7Qe434I2GyG8iVtGOXzcdb8UenVwM86iIi01VBqjVvCF5gVI%2FWhgLw%2FbV9ISeYs2X2CHOQ%2FruXmG%2FWHoTI3FeC1gAgSjglKBr8%2BM1vPt0PCqSQ%2FZI5ofUBF7BbKq2mklv9KsXUzpPq9paAIgSoUah9OoEUhLfhJ1jfKGxxkyPXDVJJJsJvVkgkdHzVZumOB%2BY4RdLWjLViOBaS97HxParTPr3NnfAqM0PwMzI1WkSx28zTTcJ8W7l0HQhYnljMul8dvwGsGtBOmemibsunDuCIs%2B4ncKfEDvdpFEwZoq5nlPD1ECcRfrRKYxPagQCqDluzLstwhM26seqqH35Czlrh9Ig4oDhNCvTwR%2B3sF0G7lRGPR3eH0j8ra1M3c39kz2UVc75PrhV%2BqsIn5SqVuZ8%2FGrYDewkzkk3peeFI1oDbiMIXtscQGOqUBQ9eB0WobvbxLIypx1UxiqZWfh%2B%2B6qzsV2Gxz0sw581uzVkpLAja1R31FFVL%2FkoEVTIr1ZQHc964KenrNAr537UYlfq3cXZoC8LpmPEt%2FWlrSCOCw2qH6%2Fr7uxYEUpRq8u0zYbQ2yTAwNaAZ9Fo5eiVcuBU2xg4B2GWAlTverFabSvVRIs1lYj3pmGH10EyI8nAQ%2BfLfYwpV4fST44u%2BhqnMJQEtH&X-Amz-Signature=b7b57a4520b0d787e45560a16612a3ede4b70d29408bf5a39c0b48d7ec44088e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJMS3AGJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BRnHKOGn20yhw8MYfy%2FfAQHvWWSMvJFpGBMeXliWHjgIhAKFKrJOQPEfcj%2FeUQxs7wb0CcpCes%2FjXZYlvSo3sB3DcKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGrYF00pPY2Gs68DAq3APiFUDmGQdkLG0DFjD0zP9xafLIUgR560Olkj0KN0%2FBBzdtWhRdWvO%2B9SY4ORY%2Bx%2BcEmTY46Nc5GN8IJB2FWqKB%2FyiIjgtQHB%2BPBXgxrQ9aoqqHx%2FfEfJ4Fx7u6Z2D9NN4bpxxD8NwZRdMyWuUujcg3Zw8WfUDMV9pxa8QPY89WumqQRT4%2F%2FIq%2B8l3t8tOLXgm4yRxphm%2BsC2MTb8CVZ1M1eem%2BDZJYr4CYFb7yscpDYdA3v%2Bgl2qhcRrNirBoYIRsqSlS0g9uaEawK4FTRE5qvfbxx3a%2Bo9QY9CKpL3rWY%2ByPz7fb5Ec04Ro45ranKJ1mKX04R%2FQdT1leWzagp2WrjBzkqDns7xDb1oYC6nvZn0htGzvVKxYQnxL1Wurm2euGvNej1wPDBJiEU%2Fdj31eX0vWU1vNlW1TRclZnuSzK%2BgtlV%2FSSAR3l2C4UI0ffvQzwd4LrgC8BoOj7g353loZ7fbghgbSZGinkkBvkQHlkZfa2Q00n%2Fx2Fdb%2Bf6lY1lE0NsniszEO%2FWluMtU4AFEh%2Bjd5MK5zUwxmnPToqS2BH4BxI54K8nwqbhwCwUuPpB%2B0aUvrScOCOUOq2j37etYPOBfdSv6MGQgYQPDcCbx4VOyxl1oNN5ti96HbRIvjCz67HEBjqkATgGbEM%2Bc72olF3XSVwTcL5kjr9R1fnwQtP31PPCd3OmT6LemX%2B3QkXqxbNOtCBBtIkoAcdVOWeqUxFRvbAboN0Ves8O1qFkS5XVOLmDB777kzt9Ls485rWMUSQ6lBD8m9rCqKy1kirqWxGmR3QrIlfJozNstHW2AOvTAkt4eSAn%2BPaKwgD87dOHAESnT4RI42P0%2FqiczzAVRVvWEjca%2FgDZLmzT&X-Amz-Signature=0454834931a75833e132db3ff280d996722e3346a4d2408beca0ec0cd7b31fae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GLD4KPC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDylAWKVM2LV6HNIzDPNFa9uQiJxhnlY4nliSacKSJedAiA8jbZlCRD7wCJYSU0jP13CDiQobqqIxOuNJOEp%2FK1qNiqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiCFOn9FjcogruGBfKtwDyd370IGJUAYa89cRLnRXqkYf9zFiO8Osh%2Bh8Xi4zSFzesmSVM4QFn%2BR%2BzA2eSSpjKDVB82TkyycYg9JBV%2BS9%2BAgUfR1aw7MzIOcCm7IDz7RsuMZ5of1fX%2Fwt0s8JBq%2Bsf245MGSTjtLeqsncOocJMn1CasZk0yisy0gHb0QpMEQuwQ6zPuWt%2FT18VIgXyMZBhkgPu6VX9u3rOcUMn8k8Ydar%2BnP0cH8Q9B4jU1W2GmFjeX%2FadCiijqcHfmETLowsaRi7Au6hrUYDTfyVT8I7oOK4gUTKq9On4H4RvdXr8BUsn80nKONHVdEBQveqGFm62d2BiiM8s%2FXMg1YzSJ4173Td7CbOzJOGF9MoyygbknSCYB%2FB4yxMr%2FFshgtESy7cqZWqOnq3l0%2BqTc9MhJbt3gND3RwAuxkUlh0cYo008JqCwqFtVobsRQ1cYkuDkDWAUUtRBKd23mKsaKgKo6liByNM3qJkyZWBXbQl0uO4%2BMkctudu2cxnN1h2lPZIQswHnSWZCacxMo5DB667L78eF9noZnkOOrq%2Bp4hsUfMZ7OaakyRQOUGP4GKrA8cBXaMdn1FY1jSywq3NloOFEXMV05n6nyDy6l3P%2FmI3S6BK%2F4HDBqImfTa9HncKKCAwoO2xxAY6pgGac0Td%2BYTov6Cw9ZfX4nOJo9aAZpNBPA%2FUor0JBAtGUvAISorF4tsxmPy8IStYRTEoYpNBtga81GCdCNe7cyQviFZrcGlIIwLDMsNRZWkG%2B8eNAR004iu6rp9EM%2FxAM9knKnXlXHbBtZwwDD4PA1aV7gK%2BrJYaDP6fr1UNCskBujxlImZJmD%2BjJvx%2BOc0IOP7GIEc4xap4nkTh0GO%2BK%2BE3OkxPoH3F&X-Amz-Signature=a94bfce7dcac6a51abd1c114103c500419e0dc5f47e5d3ba465f5549a5461dc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW37QIVL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8V7nAwpV%2BBgfjBl62WUGj7t1Xie%2FoSZx%2FFcNevsHAqQIgZnpXtzduz051F0%2BTY4jBWpLXFa3RDTxrSGyPOB5rZ0oqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQIhGx7h4jfhx0F0CrcAyNbGbVv%2B82kV4XJ2fIGtWT7Oi5v38wdkNNtIFCO8GjWs7ICcOqF%2F15lJRLGwQtpMv6AgYwUJGcBmZIrJWG5Z7MXN64sEVyrSi03Ti65V8z4u4bGYFBaWsH%2BDOkGBuNQgAijLSj29v%2Big7BJIQM%2FgzM7z2xxKbOfAQdNKHCyc7y5vyJVeqZnzQQOAZWt74Z6s45bVbXzHbti13V8B7Qe434I2GyG8iVtGOXzcdb8UenVwM86iIi01VBqjVvCF5gVI%2FWhgLw%2FbV9ISeYs2X2CHOQ%2FruXmG%2FWHoTI3FeC1gAgSjglKBr8%2BM1vPt0PCqSQ%2FZI5ofUBF7BbKq2mklv9KsXUzpPq9paAIgSoUah9OoEUhLfhJ1jfKGxxkyPXDVJJJsJvVkgkdHzVZumOB%2BY4RdLWjLViOBaS97HxParTPr3NnfAqM0PwMzI1WkSx28zTTcJ8W7l0HQhYnljMul8dvwGsGtBOmemibsunDuCIs%2B4ncKfEDvdpFEwZoq5nlPD1ECcRfrRKYxPagQCqDluzLstwhM26seqqH35Czlrh9Ig4oDhNCvTwR%2B3sF0G7lRGPR3eH0j8ra1M3c39kz2UVc75PrhV%2BqsIn5SqVuZ8%2FGrYDewkzkk3peeFI1oDbiMIXtscQGOqUBQ9eB0WobvbxLIypx1UxiqZWfh%2B%2B6qzsV2Gxz0sw581uzVkpLAja1R31FFVL%2FkoEVTIr1ZQHc964KenrNAr537UYlfq3cXZoC8LpmPEt%2FWlrSCOCw2qH6%2Fr7uxYEUpRq8u0zYbQ2yTAwNaAZ9Fo5eiVcuBU2xg4B2GWAlTverFabSvVRIs1lYj3pmGH10EyI8nAQ%2BfLfYwpV4fST44u%2BhqnMJQEtH&X-Amz-Signature=d9203ab30045cb9fff3bcab9c9b4d34c23f4fcbb0045056c18d35395ae918c7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
