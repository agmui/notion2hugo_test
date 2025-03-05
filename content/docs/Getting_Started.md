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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZT4BZE6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgV%2BXHj%2BPGKMVH%2Fn6VM%2FL%2FZUaKAATdjL7CFLQv6Po6lQIgEx6rmx4l9iiMx3Ebku%2Bbinfp51cx3OeJZoZrVl8j3%2Boq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDGqKsPC0PpMhxKrHRyrcA5CGYCDU4wV8tSzcaEsvnfwqz56HxtOd8y5B8aOR2nmOtJpV6u8fPt9J5WZ3onwII5%2BJmyhBPspSt%2BQYmK7bv1jUH673e6XrtA6Gon5YwgAS8Bw7mejdkwxAwyc3Uc6l9JihqFTZZJFu4YDUZeX0GoqqqU%2F0PNbDSlmR4IC0FIUfyVogyPUTsjJ7HoOjQxRAS0WYAaWs%2BP1Pd3Y76eLubmlJsdz5LQdoLB9%2F%2F6NDIsY9N8xHsjKGrV5mwPTgg%2FWKZARkNQbWh45QUMY2V8eHVbz5iTxFa%2FeAzkt5%2Bt%2Fp1alJonAHoYs1y7Mq0ooHdiVkjIP2tXwEwWirDo7aWMOe6zmvKMgaux9FN23L5ZOnV0D%2B7jd09pWLKirI%2BxSw98Ss0r7Hfinu0rTMeeu7d7ifZyAus3MLcjAZCtdZozAZWupq%2BjqqI85XISAMk%2BRA%2FkWUoWpZwOWls6qln3LKhKpkpcr%2Fbh5PA3Nv3G0d7cL9MMVmMFM8yNA4SH847LHGYMqjyQ3PSQ0tiVVQWwzzb1gYFvFs%2FUnS1Wo%2B8d0QDLT6QrQNuWjO6m7dBEn97xJExRxx7GIdCbQYny2zsfqpzoEy31y6rU0qkD0CyF1S0i6IJQteUWLGuge9jh5v2JGUML%2BBo74GOqUB2ccOpregJ7027UhkjVRtWs0KHgl010PWSKZhjyTtD8NWDEECUpi5pRXhyxXUhC%2BnHlB2YfrQeDVZ7m3PwtICtvPLIgLtvIntCXF6sgzgmF738YZa55iWldiDghWTN3R8y9oEvGPzZR18pejglzuecbk7YIVCRu2RDUu5J1VhKSt9nX15k8VbFSvThROP2AaNX%2Fq49cII3tu6POuTdnZJqlEfzpON&X-Amz-Signature=7af68eef01b9314f6399bb4ab2a33e3f127e71f6144dd2fd05346282c7cbbe48&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZT4BZE6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgV%2BXHj%2BPGKMVH%2Fn6VM%2FL%2FZUaKAATdjL7CFLQv6Po6lQIgEx6rmx4l9iiMx3Ebku%2Bbinfp51cx3OeJZoZrVl8j3%2Boq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDGqKsPC0PpMhxKrHRyrcA5CGYCDU4wV8tSzcaEsvnfwqz56HxtOd8y5B8aOR2nmOtJpV6u8fPt9J5WZ3onwII5%2BJmyhBPspSt%2BQYmK7bv1jUH673e6XrtA6Gon5YwgAS8Bw7mejdkwxAwyc3Uc6l9JihqFTZZJFu4YDUZeX0GoqqqU%2F0PNbDSlmR4IC0FIUfyVogyPUTsjJ7HoOjQxRAS0WYAaWs%2BP1Pd3Y76eLubmlJsdz5LQdoLB9%2F%2F6NDIsY9N8xHsjKGrV5mwPTgg%2FWKZARkNQbWh45QUMY2V8eHVbz5iTxFa%2FeAzkt5%2Bt%2Fp1alJonAHoYs1y7Mq0ooHdiVkjIP2tXwEwWirDo7aWMOe6zmvKMgaux9FN23L5ZOnV0D%2B7jd09pWLKirI%2BxSw98Ss0r7Hfinu0rTMeeu7d7ifZyAus3MLcjAZCtdZozAZWupq%2BjqqI85XISAMk%2BRA%2FkWUoWpZwOWls6qln3LKhKpkpcr%2Fbh5PA3Nv3G0d7cL9MMVmMFM8yNA4SH847LHGYMqjyQ3PSQ0tiVVQWwzzb1gYFvFs%2FUnS1Wo%2B8d0QDLT6QrQNuWjO6m7dBEn97xJExRxx7GIdCbQYny2zsfqpzoEy31y6rU0qkD0CyF1S0i6IJQteUWLGuge9jh5v2JGUML%2BBo74GOqUB2ccOpregJ7027UhkjVRtWs0KHgl010PWSKZhjyTtD8NWDEECUpi5pRXhyxXUhC%2BnHlB2YfrQeDVZ7m3PwtICtvPLIgLtvIntCXF6sgzgmF738YZa55iWldiDghWTN3R8y9oEvGPzZR18pejglzuecbk7YIVCRu2RDUu5J1VhKSt9nX15k8VbFSvThROP2AaNX%2Fq49cII3tu6POuTdnZJqlEfzpON&X-Amz-Signature=34de778a7814903cf1f3abaf9398341fc9cb6258af7b35b79704d76d674e5061&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657KHUFDR%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T220740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFD5Cc73IWha%2FhVxFg3EczR%2B5UN3wTAvnJOzZ7XfeoEyAiAzDiL7su7JgeVFVPxhzbLsxbDfnSgXYaw4bBv%2Fgdpmlyr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMNacwoa%2FAsTfwFPrxKtwDwgCZ0jJIsVGuv%2BHQe5L4lZVcptm%2Fxu%2FROOaNlzgaCi68Q6hMZ0kODf4WbmNYynsV9oDbN%2BR6ZFl3nifaFq%2BONaB62jYJpcStQBPLH%2FmCDFnRLIIlqmWI207FeHCpZXsShZhEYMmfVHgq6NfYIc8Jw3H2pV3JfLpMjw8m8Yb1I2GHPtcozPy1Jxwx9Iq7p4GnFZ7g19zN2DujVkB6nivu4iH7SEnST2ITocjQPMWKNlp7zF6%2BWCL7dOKS4cRT0Jm%2FcFsOlOgWcr2R3bdHmf3nteJXT8S%2FYgO3pyYXDZ5%2F7bZLHiC55RWenQYds7LTeDhEyWm6TYqBA34HwlNh%2FZW9laMeO2m0J2oFpCPJXxGP2GghVrApdeItmPELLZNiw5DPG8IihGGMJAr3QOKNfyWT7AjvD9TiIhKdpPDvmYBFlhwSYRsMGEInNt1D2aFDk2splPylH3tjhkWJYLW4dBcrqtOQrOr3aXzR6GsyQM3CHz8lK0mHZmZbaXZPRED0PxXmoM5nCPDPz4UdNRwofT%2FtJOouYl0pLSjx6h2D%2F0AioN%2BtuazxyFnDGdb7xXVHQrfyXZkYwzRGnL9czfUc92It%2BLqix6U2Twae6BmbB%2BNiEOn5NYnt3xq%2FQmPlXd0wyoGjvgY6pgGprvVds1zaiw9WFZl8NlEgieFWFYyMpJjT%2F3ZvE%2Bei5o%2BLRniW0EK0y1V3eeI6UMMrugBqvleNTjFrKDIitgolUBca3tL9uhQllplZyxNSulIYVWa3maUIRWjbZ52wd4XocAvNgnEAs%2FCZhKjO3KID5KyPhbX9a5jArgiKrUr2HqyFO4Y8WuVCXehfAzQjBASAZFXifj4DfspcQRw97AkX2tTXTOPb&X-Amz-Signature=57f01b6dcde59d1f0c13e9562d29b035779371e9dfa3b6fd8632a71ec25d7a06&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUI27PHC%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUvQdM4tbOfsg2CFqsnbLyn2ERnWAHuts3mxoVstjSLgIhAM%2FTUMR03Ntufq9DJ08KSHzJ2Vi2AxyCn4m2gjGhbPGUKv8DCB4QABoMNjM3NDIzMTgzODA1IgwrnjT9CRMtZB6mEy0q3AMoaBnYsWOm3FkM50LT9DAbGBxLkeSHaHHYegnhX1cAd3er1YGqsuod2vZ7dhVyqHq5CMUSyjusBseo31QYiumcfN6X5ziXwzdwNLagzww%2BeUgasOX84n1fk10wxtRc5KBAz5DHn6Das416BK8I6j0FWl2aKzPLIB9%2FThdorFHu9UYwO%2FuFb%2BI31KlLmi%2FZ5r5ycNcDarSAlV2esDPUT5t3d4MA0wDm%2FyYo3OVVolNkOCyVuvJZResPMkKjtv4N5H8mhC27fVxm8vVl%2B%2FPrkAOkwbinw2evINriYITUdZ12JGvWnUDNroVNrtIg01f05P9N6jh1gCVeioNAQy7p8S0ilmylW6y5RVFlaiaA1QgtEaPn11N3r45phvV0gjyUn6kLvu4KPxMYjuSjD4lUhKscn0c1qKcTl2PoHNhKUlfNWECILVrt0uJeFoKOOip2m0cszuCxTvCLwTeLw%2Bph1qwUv75bDnq89%2FnmDdUUhtX0Sy7er1RNkerFhLX3HO5%2BWRzeZC6O73myuvCw4%2BYrfke49pS1ax2ClKsb5LVlgEmmvY04fCi80orAbQAw8IRsUjyIICs6Yj2ftkqfYqA%2BSkXPaLu%2FXCrLzAX4tbfO9gEKUS68n%2FxCwuqqSwrPdDDbgaO%2BBjqkAZadjEF3bN1LuOlcgm1ibbvb8gfmOfBpfUb2jH5Ic%2BjgUZNs7Fse0L3vmXbDpaZtoCw9fsifyUsyKZYgJX9fdiv9EydFiDMl9iI9t5tkN599yych0GuQxRZZYyWl7NkQDWsSzOlJdsvuyLOFYy59sdFTX6h4eFoGDAPEDT9LPcTIs5wqHCfcQD4i2gg1UC0%2FguqQDss39VeOmitTxdJLf72gQie4&X-Amz-Signature=80a6daf6b82fac6ec47c3b9e7a96d16aba2fa447051e1311153e4087a0724a17&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZT4BZE6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgV%2BXHj%2BPGKMVH%2Fn6VM%2FL%2FZUaKAATdjL7CFLQv6Po6lQIgEx6rmx4l9iiMx3Ebku%2Bbinfp51cx3OeJZoZrVl8j3%2Boq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDGqKsPC0PpMhxKrHRyrcA5CGYCDU4wV8tSzcaEsvnfwqz56HxtOd8y5B8aOR2nmOtJpV6u8fPt9J5WZ3onwII5%2BJmyhBPspSt%2BQYmK7bv1jUH673e6XrtA6Gon5YwgAS8Bw7mejdkwxAwyc3Uc6l9JihqFTZZJFu4YDUZeX0GoqqqU%2F0PNbDSlmR4IC0FIUfyVogyPUTsjJ7HoOjQxRAS0WYAaWs%2BP1Pd3Y76eLubmlJsdz5LQdoLB9%2F%2F6NDIsY9N8xHsjKGrV5mwPTgg%2FWKZARkNQbWh45QUMY2V8eHVbz5iTxFa%2FeAzkt5%2Bt%2Fp1alJonAHoYs1y7Mq0ooHdiVkjIP2tXwEwWirDo7aWMOe6zmvKMgaux9FN23L5ZOnV0D%2B7jd09pWLKirI%2BxSw98Ss0r7Hfinu0rTMeeu7d7ifZyAus3MLcjAZCtdZozAZWupq%2BjqqI85XISAMk%2BRA%2FkWUoWpZwOWls6qln3LKhKpkpcr%2Fbh5PA3Nv3G0d7cL9MMVmMFM8yNA4SH847LHGYMqjyQ3PSQ0tiVVQWwzzb1gYFvFs%2FUnS1Wo%2B8d0QDLT6QrQNuWjO6m7dBEn97xJExRxx7GIdCbQYny2zsfqpzoEy31y6rU0qkD0CyF1S0i6IJQteUWLGuge9jh5v2JGUML%2BBo74GOqUB2ccOpregJ7027UhkjVRtWs0KHgl010PWSKZhjyTtD8NWDEECUpi5pRXhyxXUhC%2BnHlB2YfrQeDVZ7m3PwtICtvPLIgLtvIntCXF6sgzgmF738YZa55iWldiDghWTN3R8y9oEvGPzZR18pejglzuecbk7YIVCRu2RDUu5J1VhKSt9nX15k8VbFSvThROP2AaNX%2Fq49cII3tu6POuTdnZJqlEfzpON&X-Amz-Signature=7892ffcd3e55facd11d7d5cf3af43a66af84e90af20b337b77c68e3f8a9cdd87&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
