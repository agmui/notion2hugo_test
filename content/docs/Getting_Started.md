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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPI5QQ2E%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T061137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGlC1Ym9VXICXbJfubQdr2a3%2Fmfjm915dHX0gIhwhg4vAiEAvuti4cDq7OX6RRJE1BkcuvJ%2FoD2tse5Smu2H4RDS4Gwq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDA66Hlf135Pb2um8jCrcA0zP%2BnQyFWPCP82Pj4AhesY76cIHUy4UHqhipiQDtkkg4sol2Wvo4iCbjXVs2%2FOc8k7zJst2B%2FU7eicpPrvfE5avtHUTrvbC4%2Bg%2Bc2rPhiBjqO4oaOigxmUAJWpZT5IX9L6%2BwTnn%2FIx%2Fmc6bz6RbWFJ0fBqEvks%2BB4yuyxz8l92KBQw8cH62db9oQJ6oZfdDJTWNJovhNakWc6X9yiOcaVllL78IJCN%2Fy1t4qa8bkLY5AwJB4JPhudwlc79Ncm6p%2Fjq%2FiHg39hbv70h9iw7z30etzF1a7s2JvcykpCBwCbHDLt957WxgaZ%2BHjZ1gwNSpPxkYxlzJT%2BeeIgRfZgs2JfnrLQteCvLljoUqBmYlgZmEc3YCLiw13jn%2B5CainWRjoWY5SDs51vpfChiDSzv%2FlnF2uxYAwgkNuVRthjb7Fb%2FiaaVHKuTCb%2BOLcCwP7QYNGHoWO4ZdMIIRhtiGikV8iQa65eznlJAhjxmoICW5Pp%2FfJrFx%2BBWPdQl0Fbcj3EV7HHxxu25F%2FsUBCJXfPgWLMdVNX%2FSHzlK3aQDL4XmEvLhQO55O4Kne9b647BRtABtJcrbVl%2BmBnvUN1ig0BOrz6vzklFxSCebzkCadg9Flt9LZ70Nrh%2FCmz054NK09MOH%2B6L4GOqUBHM3YBPGyCsncZjhUt8oXUGel9%2Fqez8VHgG103aFYrveLQ4WhyqYqYBwG%2BH95bxGDUaB%2FczJSxZdvqa5fqhtFb8HvT1dmLDvA%2B%2B5jRlHzW%2Fl7OlvbiX8W4WGsuDwddhr9ZZN28AOqAFvOmmhniCVDDOnQ3gnFHhmTHhOCw%2FADg2OlbUIjiKQ9Z9INv1yU1%2BjwUrXJv86yxq6m1b0RFXNGuGFrbwcw&X-Amz-Signature=a989c367728366374e0e1c4266f0376d1d3696faf52174fafea001e5dcb52931&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPI5QQ2E%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T061137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGlC1Ym9VXICXbJfubQdr2a3%2Fmfjm915dHX0gIhwhg4vAiEAvuti4cDq7OX6RRJE1BkcuvJ%2FoD2tse5Smu2H4RDS4Gwq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDA66Hlf135Pb2um8jCrcA0zP%2BnQyFWPCP82Pj4AhesY76cIHUy4UHqhipiQDtkkg4sol2Wvo4iCbjXVs2%2FOc8k7zJst2B%2FU7eicpPrvfE5avtHUTrvbC4%2Bg%2Bc2rPhiBjqO4oaOigxmUAJWpZT5IX9L6%2BwTnn%2FIx%2Fmc6bz6RbWFJ0fBqEvks%2BB4yuyxz8l92KBQw8cH62db9oQJ6oZfdDJTWNJovhNakWc6X9yiOcaVllL78IJCN%2Fy1t4qa8bkLY5AwJB4JPhudwlc79Ncm6p%2Fjq%2FiHg39hbv70h9iw7z30etzF1a7s2JvcykpCBwCbHDLt957WxgaZ%2BHjZ1gwNSpPxkYxlzJT%2BeeIgRfZgs2JfnrLQteCvLljoUqBmYlgZmEc3YCLiw13jn%2B5CainWRjoWY5SDs51vpfChiDSzv%2FlnF2uxYAwgkNuVRthjb7Fb%2FiaaVHKuTCb%2BOLcCwP7QYNGHoWO4ZdMIIRhtiGikV8iQa65eznlJAhjxmoICW5Pp%2FfJrFx%2BBWPdQl0Fbcj3EV7HHxxu25F%2FsUBCJXfPgWLMdVNX%2FSHzlK3aQDL4XmEvLhQO55O4Kne9b647BRtABtJcrbVl%2BmBnvUN1ig0BOrz6vzklFxSCebzkCadg9Flt9LZ70Nrh%2FCmz054NK09MOH%2B6L4GOqUBHM3YBPGyCsncZjhUt8oXUGel9%2Fqez8VHgG103aFYrveLQ4WhyqYqYBwG%2BH95bxGDUaB%2FczJSxZdvqa5fqhtFb8HvT1dmLDvA%2B%2B5jRlHzW%2Fl7OlvbiX8W4WGsuDwddhr9ZZN28AOqAFvOmmhniCVDDOnQ3gnFHhmTHhOCw%2FADg2OlbUIjiKQ9Z9INv1yU1%2BjwUrXJv86yxq6m1b0RFXNGuGFrbwcw&X-Amz-Signature=5339d935f4af66da536328d88e09556a73ecfda029783f3d6712edc673f37f07&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZPBMQJ7%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T061141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIG%2FrqeEwlVhF88dJH01iC8qGm0OjNjvVIZkspnV5pPIyAiAKOKApAmfPpuWnaTSIXcTNy6bguwk0dFF0zCD4XYo2ISr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMsWHeeSIEZAHYER3cKtwDjljdWSvXcwcckDwd58atF2ZAVjI1o6%2FNY4CGIGWpXlgZmKCVmpF0go0H6bXqDd0yzL4qW4HUMOctn%2FdMiOw5HZGlhb94FpEc8v7QBsGIChB%2BqJ1iMFhE5n8etnJtcRzw2ym6hlVsxdJ%2FJL2IfsN3belr9Loh02641up%2FBLVahdTlKbHGYzTyUHRUZyjq3XdzPInOrfdpWMTKKA2sjW2aqdUa6Jf%2FGYQ6Vn4PjmA10f2hoVm5PQ6vmFlJ%2F25pXuq3g2HEgu8N25Jgn9SWrJFi4OPafHQkIvVV3YCqclNecsQ1zOzOyXC1tfxVwGTxeuSBDPGWH5gA937FsBfeisdPNI1iG87c%2BGzTiK%2FWBXAaw4A5IB2ih8IPc457mBa%2FxlegKwRoH%2Bs%2B6IAMHVohF2SBlzjlY40DlLo4OC0zHu019gRqd96yNZBmoca8LGAGAhug7EWDEZS24Vu%2BeZcSygv8aEFggoVySPGf93RXaRLGnoA%2FZzQ7wsEpv4CH6O7b7NcaohH%2FJAo1AdbfkP4c560BySTtH8XNJ1OQfmxGr%2BLTByFgyPoDGsgpOzHyybUsilwtEIGeKWk5UpQrebEC3lFwywoDsyteI8qX9nwNrjh3ENbdog8Jtuvpv30LTmcwgv7ovgY6pgHSgEo0AxkiobFUKwp6xWZ6SjTKBIJRvAslUuRiouwk7ELuHDn%2B5O5HesG8dJXj%2B9Pp7loc2C2c6QCg%2FHN9xlexOb23Xi81EMdQ2tWpYnbfBheMTQKBNerJxPnC0lbHAhZL2TFX4lTxldMoBlvfDxu2hiZgFE0oIKV2du2dg5zm%2B1qDh11HPdadRbgepAdacgNyr4tjyUCqxKhK50bOrLEnUgDwEgsu&X-Amz-Signature=ca3b1bad41af9914f59f780e017e6be0b2a4453d7bf7f5fd6fee84754412852a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMEUYD24%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T061142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIF1jbEJwmYfc6ZAzaQM%2BhTSIRce3O%2B28G5sXtC5hzayKAiEAtjuOY6rdK565g7afpbKR61jrhOSra9xXrprg1hwJEE8q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDHM9xJ5mnnKrjOpQ8SrcA7b99Vzsh4gincTLQC43QdfX32I3fgDL4KxtJWKMo9Tf8gzO2H%2FSHmdGrAaEjfgCbwYP9kX1tlatZXChYE7EdAg735uJQAa6HYtPaFDfbjndava%2FUKIJeDzUj9pgw3EzVuSzYOsa5CxACATm9UNxdemekKaqpNbP%2B7c2lKzJeMjVb4kay8Rqt4%2B7ldF2%2F0vYNniTSviqYJCRRlnaOZ%2F6fCZKZ3VtiA%2BjZkB2a0RtqrHqRRBq%2B7ksBnjpkgbHALO4uioBSwgirsSzy5456%2BOpDGw1iddu2EnJ54MD9%2BCeuldcjMDLemDIywseo%2F%2Ba5exDh62mM2m94SoRPYoZUrNYLTClNHvTTWBD%2FeVd9IjaXMTTl8W3b4XcCLRLYRIyq3JvsLDI3U5H49MkctjGY6TV41QE0F5hme%2B6OTBTkQjtYmxIQhCAdnhouzaA%2BA6%2BjmzKKkUed0qK98IcbZ5rHRovB7z3MKaBLOBCZjH55SnY4q0tRItVmJu3JFtVNAiDp93l1JWkEArUsLDw5xTgFAbaMgCaqsAri855ciA2hRBa8PWt5Ou5uf4xx%2FERHq5YUl41dTLTlmlByXbxdfI%2FkesI7OwKT%2Bbe0%2F3zHf4QyLEOOkU6U8xdjQ4LfP5d1rFAMNf96L4GOqUB5z%2FuXeMM7NojyNz6SBQY7Farao%2B8T4quH8mtouwGS%2BIr8YocLVfhAIVQjNwjJxYCfMJl1Setw3rswjL0WSDQRwiS1C0zJtPybuQRGOOZrS7WBBSsG%2BkuQtOc5rBSdlZpxRpXgLf61aVncuxOIYqhYS45WRRsF32VKClCNbKIvTg%2FJxfn1yIuYDqItq2v1qSjyWq0gPD8XPea7How0lJfJwz3CFRR&X-Amz-Signature=aa10a3e4b4ee31d0a6d379e4af9a742d81980388ee771c157e2e664bbd536607&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPI5QQ2E%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T061137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGlC1Ym9VXICXbJfubQdr2a3%2Fmfjm915dHX0gIhwhg4vAiEAvuti4cDq7OX6RRJE1BkcuvJ%2FoD2tse5Smu2H4RDS4Gwq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDA66Hlf135Pb2um8jCrcA0zP%2BnQyFWPCP82Pj4AhesY76cIHUy4UHqhipiQDtkkg4sol2Wvo4iCbjXVs2%2FOc8k7zJst2B%2FU7eicpPrvfE5avtHUTrvbC4%2Bg%2Bc2rPhiBjqO4oaOigxmUAJWpZT5IX9L6%2BwTnn%2FIx%2Fmc6bz6RbWFJ0fBqEvks%2BB4yuyxz8l92KBQw8cH62db9oQJ6oZfdDJTWNJovhNakWc6X9yiOcaVllL78IJCN%2Fy1t4qa8bkLY5AwJB4JPhudwlc79Ncm6p%2Fjq%2FiHg39hbv70h9iw7z30etzF1a7s2JvcykpCBwCbHDLt957WxgaZ%2BHjZ1gwNSpPxkYxlzJT%2BeeIgRfZgs2JfnrLQteCvLljoUqBmYlgZmEc3YCLiw13jn%2B5CainWRjoWY5SDs51vpfChiDSzv%2FlnF2uxYAwgkNuVRthjb7Fb%2FiaaVHKuTCb%2BOLcCwP7QYNGHoWO4ZdMIIRhtiGikV8iQa65eznlJAhjxmoICW5Pp%2FfJrFx%2BBWPdQl0Fbcj3EV7HHxxu25F%2FsUBCJXfPgWLMdVNX%2FSHzlK3aQDL4XmEvLhQO55O4Kne9b647BRtABtJcrbVl%2BmBnvUN1ig0BOrz6vzklFxSCebzkCadg9Flt9LZ70Nrh%2FCmz054NK09MOH%2B6L4GOqUBHM3YBPGyCsncZjhUt8oXUGel9%2Fqez8VHgG103aFYrveLQ4WhyqYqYBwG%2BH95bxGDUaB%2FczJSxZdvqa5fqhtFb8HvT1dmLDvA%2B%2B5jRlHzW%2Fl7OlvbiX8W4WGsuDwddhr9ZZN28AOqAFvOmmhniCVDDOnQ3gnFHhmTHhOCw%2FADg2OlbUIjiKQ9Z9INv1yU1%2BjwUrXJv86yxq6m1b0RFXNGuGFrbwcw&X-Amz-Signature=8464753c0e25e7c22d5b0705fb9488dee704265415e64811c2dd38ffb2943d56&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
