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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJHHBPQ2%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFkjwp7bDWgjKRRBa4fLn%2Ffxqr6mTKESzL0ejGc6RPYgIgHphu%2Fci%2BBqUdkNIijbvPxpzkB%2FuaML%2BWA1eo2L2f3vMq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNMFGNFL4D7vExDb0yrcA5I0pYk7qu7f95r20Q92Kl8KmxYItwoMb%2BEnLM0Mqm7cTLsuMhwq8YyNzADgw8YQJz1Fp7tm5dCwFpX9YxLzW2QUnqKxh%2BW2iaL%2FHzjsrzMR8vmSlDOCkEIVD%2BOgpEjHCFnonDn4TRhtkhtpb7Rk1t%2BUDhxPmQrl8SqNfGGmFKm%2Fs4AhLatb2%2B5oXwlNlEjo3yOj304%2Bi9%2FOmFLDh0hrqwKun7DI7kXEvfE%2FiniotfjhySautrL6PMwq1U3R6TL8dtrM%2FsLZf17jacwddj98yY5VahYgCfKJ0c3D6c3xgX0NY5NJQ0qyLXbfSs7M%2FLcTMrkoWJxX%2F1rYBHoYdlZcrbYzVIJBJaxqijfcJi%2BDeGWSKlnuq1LishzdBuUNksG5sqncKqTp5xF5%2F1x659ArIodf%2BpAbl2Oe5A2uRzXNaPKoDVzoMXyAXcls9SRmPP1hitbem3eWIPiAEMYghdLpBwUudlVBrhQRG4AsZFIkjW%2F2Po200yl3ZvVjSL7yZSug6cfRvC5MlwqteMzV9wgzTgEajdP%2BO9X%2FO7gqDH%2FtKA%2FY5wxtdXo21H8PnusygFoXW9PfFjIkN3BqQVCrw2cUc0xbHzGyer%2BZMYd0et%2BFkpzeSQF8imOlHJKUx6grMOvhgsAGOqUBizsRpUYW4s4lM4WkF3vVCNCd5XUxhPCDfoLREjx8oyhgMUW0VxsYYoGetO5G9ntiAxOLuOYS8BNE%2FLXFH54C%2FdYMIVgrk4K2Z%2Bm7C1rRHtl9B1u7cFgpaqPxmwCby7IOGXNkSrA4bocO8UJVLlp3BkEALyRzNt%2F7U1doL5vq4XOi3P1mCZkALF2G2XpM%2BoSlVZnIRIhlYkgOVbuX9L1dXBDmIIE%2F&X-Amz-Signature=5fd877e39cc39e7ada9931d24486d23784b06ce9e0a429b910a7b8a3e2adf887&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJHHBPQ2%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFkjwp7bDWgjKRRBa4fLn%2Ffxqr6mTKESzL0ejGc6RPYgIgHphu%2Fci%2BBqUdkNIijbvPxpzkB%2FuaML%2BWA1eo2L2f3vMq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNMFGNFL4D7vExDb0yrcA5I0pYk7qu7f95r20Q92Kl8KmxYItwoMb%2BEnLM0Mqm7cTLsuMhwq8YyNzADgw8YQJz1Fp7tm5dCwFpX9YxLzW2QUnqKxh%2BW2iaL%2FHzjsrzMR8vmSlDOCkEIVD%2BOgpEjHCFnonDn4TRhtkhtpb7Rk1t%2BUDhxPmQrl8SqNfGGmFKm%2Fs4AhLatb2%2B5oXwlNlEjo3yOj304%2Bi9%2FOmFLDh0hrqwKun7DI7kXEvfE%2FiniotfjhySautrL6PMwq1U3R6TL8dtrM%2FsLZf17jacwddj98yY5VahYgCfKJ0c3D6c3xgX0NY5NJQ0qyLXbfSs7M%2FLcTMrkoWJxX%2F1rYBHoYdlZcrbYzVIJBJaxqijfcJi%2BDeGWSKlnuq1LishzdBuUNksG5sqncKqTp5xF5%2F1x659ArIodf%2BpAbl2Oe5A2uRzXNaPKoDVzoMXyAXcls9SRmPP1hitbem3eWIPiAEMYghdLpBwUudlVBrhQRG4AsZFIkjW%2F2Po200yl3ZvVjSL7yZSug6cfRvC5MlwqteMzV9wgzTgEajdP%2BO9X%2FO7gqDH%2FtKA%2FY5wxtdXo21H8PnusygFoXW9PfFjIkN3BqQVCrw2cUc0xbHzGyer%2BZMYd0et%2BFkpzeSQF8imOlHJKUx6grMOvhgsAGOqUBizsRpUYW4s4lM4WkF3vVCNCd5XUxhPCDfoLREjx8oyhgMUW0VxsYYoGetO5G9ntiAxOLuOYS8BNE%2FLXFH54C%2FdYMIVgrk4K2Z%2Bm7C1rRHtl9B1u7cFgpaqPxmwCby7IOGXNkSrA4bocO8UJVLlp3BkEALyRzNt%2F7U1doL5vq4XOi3P1mCZkALF2G2XpM%2BoSlVZnIRIhlYkgOVbuX9L1dXBDmIIE%2F&X-Amz-Signature=4ec6068b71bae696081e9821ec24b5fe1465cfc4d3a8ca95b01fbcbac1c9d6c5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667UWWN5A%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdms2cgKv2QcCzLMBCLIpZOWA906VRH24RB5b6DBIz%2BwIgCelhu2maafaaQw7xGJ6QX4Pz7BFKE1xNT7c7oGhH6Qoq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDBQW646ooC6tY2LARircAyHA1%2BBM6%2B1%2BiSlcFk9WOkwBvGJPoI6LO7%2FnyxB4pv9RNzZ4IMBIetR9xUOLmLrWI7NLeEZeud1ezKe1rFW2tp5phze9s4es6ym9i4AD18%2FMiuvWBc6iBIFATFKSscFPDZ6dGaYoh1AfYEbcWxir5QF9jymBbJtsjhFkEG5Y1DCR82j0ZCYfC%2FFZPfEBwpsqYGf4vUx9Piz5yq%2FjTscVaFrLJYXv18jJwVP9aNPCdHOImFZIj0Jg0cfqYbRrASR%2B5RQIlvREtQEMbSyMWs0EkAcS7jbMC3PVj41F6EJ2AriPPUT7c2sSXe9iQlv22m%2Foz53HJfjIk3uBH9WUEYA%2F3wk7FqOft6Q46xlIunCfbqlSJHBdNWA%2F4ebd3BzCIovVBwZIXlUgwxYmQRFlbSvNC0WCUst56TSFK87FFIuR4kh0Q1RezZB1dnIb6ZiaRTeu26jFEkIkauAvhB19NRvpXqx11WVpGWGKW%2FUdkapNLIiYF3BJB3DUUVla9sqU46AAIddqWEeyJrtUqxqnHQFm4vMunNqpwRzUnLBMFpyig2og8G6o8P9uK9preTXl0MJKdtRdk8PJQGKx2HvWFkIr0kmKxvW%2BQtNkxBsuI1cfXa4R6o3zAIoSCUM4rNveMO3hgsAGOqUBJZ1Y2Fe0jHJnQbPFofKuYP8vQU0Y4TsFSuAhjZGx8hCfU2IZwtySXizsIH92SpMOtBy8LXXVDSMfTgjfFz%2FjR0Spm3KBecQGLDharLTReLL%2Btq35sh3kDVSI%2FERftnoJ5Udm2nGYcdC3zuQtzDCXMmBdknp85S7%2B0k7fvGSQH78N3iLPZbPZnoMId9szk4q7vNVF8h8ZZ2SrbMttPSBymD9s0myf&X-Amz-Signature=92f5919430a3f2d479427b5273f2811fc8363c0eb4b78ff0f1870764b8c44e9d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEHDRP2E%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCN2RoFjMNjuBNn6Yd25AWItZxg%2BGBx1h7cE7Zc5FuOUgIhAJ%2B6jXZT8qsBXxizHmhZ6qb6lDyXcXSLxEEu6B1ftHF2Kv8DCFkQABoMNjM3NDIzMTgzODA1Igzg1j4FMWZZDpcBJIwq3ANYDCLLgtL1PQrM0lMPDDj8k9bkjtF%2FWLle0o3QboO%2BwucJ54sm8IfXHnCwyIN2PhRmmQmqUgefFsV10i6vS6U8oQNFw0rODyrv1aKwWGrMMGR9LSXnr1ui3y%2FFr39Jcv8%2Fffll8lqvIuFfBY9Rkmuw19XyM2rZCUMoDY%2B4xlwtujz7MEW3lf%2BUk6nU4HJrLuZvWlhHRUQ8C2xyw%2B7%2Ffp4gdlaXxboRhj3Mf%2FibFShR7FgicjInWwb6x9fL5W8majyOml7N%2BqQJ2jelPbUyiZqtDvIQ8ZXS1g1oPZPPAtZaRlPmknAXQKS4O%2FzQDicfiu4nS2kqzabswvYZxWZ2TJqOgeL1uHG8k90pEtbZE3HVtjmb2OKdBz42PlYB6QC76c3iQrHjHKCFb1BSjY%2BVS%2FR%2FHJkCoG2dPCByjX0MsDkS%2B0bHuF3pscYUC%2BuyHbXAG3An2jEUUGfEGHEVsttP5tbH6prvaIEiQdo0IIYkuuQC0uY1VRU8nAnFCUQwLeW6H9QwBCWhkFzm%2BhzP09r5g8iziMhYmHq4BuCaL1DJRy76nCxuWRPG1ctakENHvPeIxxE9wxsfNHxO75NV82YXHXOVz4Ttuq6q9fw0eq6vL4ejM%2FdgAIQsLUMoX42xmTDC4ILABjqkAQPewjNxcmVaAFhRU0fjxKg%2Fw1HcdnC2T6a%2Bq%2BH9LOfyx3aRLwyFjYlhpRgqKSFXulyiFHGfl%2BQ3hGiK6k9KQsG4AQaQULwZJQBESpmtD%2BbmU%2FTozZ4GydiAHppCnfBTPVIMRZwqHJq6JmWgBO3piv1Eoc%2B6WHFROEldN4MuATxuBNXHD87IYLYMf8CvCQ53qbS1YT%2FKFxt1VOCkJFdn4S8H8AYq&X-Amz-Signature=b496609139f267be269426f57c71aea13d75b9046cce9a6ae0faa35d8ca45cae&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJHHBPQ2%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFkjwp7bDWgjKRRBa4fLn%2Ffxqr6mTKESzL0ejGc6RPYgIgHphu%2Fci%2BBqUdkNIijbvPxpzkB%2FuaML%2BWA1eo2L2f3vMq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNMFGNFL4D7vExDb0yrcA5I0pYk7qu7f95r20Q92Kl8KmxYItwoMb%2BEnLM0Mqm7cTLsuMhwq8YyNzADgw8YQJz1Fp7tm5dCwFpX9YxLzW2QUnqKxh%2BW2iaL%2FHzjsrzMR8vmSlDOCkEIVD%2BOgpEjHCFnonDn4TRhtkhtpb7Rk1t%2BUDhxPmQrl8SqNfGGmFKm%2Fs4AhLatb2%2B5oXwlNlEjo3yOj304%2Bi9%2FOmFLDh0hrqwKun7DI7kXEvfE%2FiniotfjhySautrL6PMwq1U3R6TL8dtrM%2FsLZf17jacwddj98yY5VahYgCfKJ0c3D6c3xgX0NY5NJQ0qyLXbfSs7M%2FLcTMrkoWJxX%2F1rYBHoYdlZcrbYzVIJBJaxqijfcJi%2BDeGWSKlnuq1LishzdBuUNksG5sqncKqTp5xF5%2F1x659ArIodf%2BpAbl2Oe5A2uRzXNaPKoDVzoMXyAXcls9SRmPP1hitbem3eWIPiAEMYghdLpBwUudlVBrhQRG4AsZFIkjW%2F2Po200yl3ZvVjSL7yZSug6cfRvC5MlwqteMzV9wgzTgEajdP%2BO9X%2FO7gqDH%2FtKA%2FY5wxtdXo21H8PnusygFoXW9PfFjIkN3BqQVCrw2cUc0xbHzGyer%2BZMYd0et%2BFkpzeSQF8imOlHJKUx6grMOvhgsAGOqUBizsRpUYW4s4lM4WkF3vVCNCd5XUxhPCDfoLREjx8oyhgMUW0VxsYYoGetO5G9ntiAxOLuOYS8BNE%2FLXFH54C%2FdYMIVgrk4K2Z%2Bm7C1rRHtl9B1u7cFgpaqPxmwCby7IOGXNkSrA4bocO8UJVLlp3BkEALyRzNt%2F7U1doL5vq4XOi3P1mCZkALF2G2XpM%2BoSlVZnIRIhlYkgOVbuX9L1dXBDmIIE%2F&X-Amz-Signature=11606d7c285d65cfd279a75dda53bfdcdbef18dd16f2fececb7188f282455500&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
