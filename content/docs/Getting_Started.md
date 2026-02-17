---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4XG77QR%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDv71FdJG9YYx7sjMW90xcQetTV82OGFrLBFDcG1UMCPgIhAIUEoTf54gtQyw%2Be1qE6cTJmXkiq1AomI4Z%2FP0JOe69PKv8DCEMQABoMNjM3NDIzMTgzODA1IgyqRlNx7QAaFPlyAS0q3AOvVz5U72VUtoRNTcfDiUGZofzF8IrX6KtEPGLYIQ70i9USeZfLY4G46%2BNmvzl%2BxrAl%2F7bgZrCKZikKypDbB0N4CtieIAbzRrNsZlWeHW6jat60FMUZmKGV5C6%2BCJM707wNWbi9ZALVzsC0nkSPM4G2ncRwQG%2BYhO%2F%2FxMAYY0eJRmpH5byRYfHL35AyIgZPqr1m8VpJJ2WleYdNtDkGdoNk5Gz4GJ85gghmEM9dxzBAV0Lk%2F3xKqz5hGEC6PZvIqa9CEY14SrZ0Az1w78sVq3k7q1j1XzlJCOGsV6bWVycM%2FMZo%2FKEIlph7AUBVB0Oz0RhB5Ll05K61Yz1StVUTJfiVgBb7iv7kNF1MLPDxdlC9DkTDc3jiszHLdV7VwYynvFmNj9t6qSp7hOvFFz5bzacQh61Bm%2FzaRvcZaIUrZx5iohVE68GnYpngbaJSVazqyEvc0QmtAE2%2BsWcfhKVgiukQhRMTxl03yOXOKP%2FwUVhS8GSL%2FxrD6I1rBfI6WsfHM8KaH8SlkVmpHUyQLATJwzAPjL3spaus95EnrYRjrFJcySLjfMRghQIzGUXqdHOhtcXxJKpKILjXpDrC127AYKjjafChyUOihulrAKTpL%2B3Eecfu37tj36g930xZmjD8l8%2FMBjqkAbH61%2FsGoiTHGQA2AEkOTAKMfyc34KA3dhXDRimu2UE3pQl4Gmy63GDC0BWywotgjXNGbNRbOBpehaObNsZ8r7IrVXoFIJJOK1z1WXQhuGGqSkMF1BfkkRMlPVNdBp%2Ban80b%2B96u5b33jMBowwoEwqpuheUniIF5kNBQGe8wbLypoGphOkgVKnvewUjrz0bj15KjSToPcTqU5OWuQ2TAmVVGmgBE&X-Amz-Signature=74353033afeef5704b9dafa253d3a66d8ed812c78995549401cda64243483cdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4XG77QR%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDv71FdJG9YYx7sjMW90xcQetTV82OGFrLBFDcG1UMCPgIhAIUEoTf54gtQyw%2Be1qE6cTJmXkiq1AomI4Z%2FP0JOe69PKv8DCEMQABoMNjM3NDIzMTgzODA1IgyqRlNx7QAaFPlyAS0q3AOvVz5U72VUtoRNTcfDiUGZofzF8IrX6KtEPGLYIQ70i9USeZfLY4G46%2BNmvzl%2BxrAl%2F7bgZrCKZikKypDbB0N4CtieIAbzRrNsZlWeHW6jat60FMUZmKGV5C6%2BCJM707wNWbi9ZALVzsC0nkSPM4G2ncRwQG%2BYhO%2F%2FxMAYY0eJRmpH5byRYfHL35AyIgZPqr1m8VpJJ2WleYdNtDkGdoNk5Gz4GJ85gghmEM9dxzBAV0Lk%2F3xKqz5hGEC6PZvIqa9CEY14SrZ0Az1w78sVq3k7q1j1XzlJCOGsV6bWVycM%2FMZo%2FKEIlph7AUBVB0Oz0RhB5Ll05K61Yz1StVUTJfiVgBb7iv7kNF1MLPDxdlC9DkTDc3jiszHLdV7VwYynvFmNj9t6qSp7hOvFFz5bzacQh61Bm%2FzaRvcZaIUrZx5iohVE68GnYpngbaJSVazqyEvc0QmtAE2%2BsWcfhKVgiukQhRMTxl03yOXOKP%2FwUVhS8GSL%2FxrD6I1rBfI6WsfHM8KaH8SlkVmpHUyQLATJwzAPjL3spaus95EnrYRjrFJcySLjfMRghQIzGUXqdHOhtcXxJKpKILjXpDrC127AYKjjafChyUOihulrAKTpL%2B3Eecfu37tj36g930xZmjD8l8%2FMBjqkAbH61%2FsGoiTHGQA2AEkOTAKMfyc34KA3dhXDRimu2UE3pQl4Gmy63GDC0BWywotgjXNGbNRbOBpehaObNsZ8r7IrVXoFIJJOK1z1WXQhuGGqSkMF1BfkkRMlPVNdBp%2Ban80b%2B96u5b33jMBowwoEwqpuheUniIF5kNBQGe8wbLypoGphOkgVKnvewUjrz0bj15KjSToPcTqU5OWuQ2TAmVVGmgBE&X-Amz-Signature=b0a9626f20d97b43164be8249f55e3c7717b974c55d4c564ba37a62a8a3cff26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4XG77QR%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDv71FdJG9YYx7sjMW90xcQetTV82OGFrLBFDcG1UMCPgIhAIUEoTf54gtQyw%2Be1qE6cTJmXkiq1AomI4Z%2FP0JOe69PKv8DCEMQABoMNjM3NDIzMTgzODA1IgyqRlNx7QAaFPlyAS0q3AOvVz5U72VUtoRNTcfDiUGZofzF8IrX6KtEPGLYIQ70i9USeZfLY4G46%2BNmvzl%2BxrAl%2F7bgZrCKZikKypDbB0N4CtieIAbzRrNsZlWeHW6jat60FMUZmKGV5C6%2BCJM707wNWbi9ZALVzsC0nkSPM4G2ncRwQG%2BYhO%2F%2FxMAYY0eJRmpH5byRYfHL35AyIgZPqr1m8VpJJ2WleYdNtDkGdoNk5Gz4GJ85gghmEM9dxzBAV0Lk%2F3xKqz5hGEC6PZvIqa9CEY14SrZ0Az1w78sVq3k7q1j1XzlJCOGsV6bWVycM%2FMZo%2FKEIlph7AUBVB0Oz0RhB5Ll05K61Yz1StVUTJfiVgBb7iv7kNF1MLPDxdlC9DkTDc3jiszHLdV7VwYynvFmNj9t6qSp7hOvFFz5bzacQh61Bm%2FzaRvcZaIUrZx5iohVE68GnYpngbaJSVazqyEvc0QmtAE2%2BsWcfhKVgiukQhRMTxl03yOXOKP%2FwUVhS8GSL%2FxrD6I1rBfI6WsfHM8KaH8SlkVmpHUyQLATJwzAPjL3spaus95EnrYRjrFJcySLjfMRghQIzGUXqdHOhtcXxJKpKILjXpDrC127AYKjjafChyUOihulrAKTpL%2B3Eecfu37tj36g930xZmjD8l8%2FMBjqkAbH61%2FsGoiTHGQA2AEkOTAKMfyc34KA3dhXDRimu2UE3pQl4Gmy63GDC0BWywotgjXNGbNRbOBpehaObNsZ8r7IrVXoFIJJOK1z1WXQhuGGqSkMF1BfkkRMlPVNdBp%2Ban80b%2B96u5b33jMBowwoEwqpuheUniIF5kNBQGe8wbLypoGphOkgVKnvewUjrz0bj15KjSToPcTqU5OWuQ2TAmVVGmgBE&X-Amz-Signature=287c9b957e0fe995905c660a59c181d743a47a793754935b5653f9aab610f796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJR644TA%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCMFNpc6QQOxEFMJCc3zA%2F23D4PV84FEHwOlMXcz8ap7QIgF%2BL3zpvLvqED%2BRwZIhE%2FmKMLqyi6uRu5KZT3N8NQdTAq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDGf2bPC1kg85pewsXSrcA4Jq7TQeF4D37e6WUFDdzw%2BegSgBbIQRnM1jCiolLHfQGBGJ8hB1guqLcphNP2oSPFxwWAsqtr1%2BdzE%2BS29wqNBbAKz4TiRXbvLzflsuIE8nHti4Q%2BPTjwubdkRL58qMqfYC5j9dzk2EVW2ODGKnjYXoIUz0Sue%2F3MLkOYaWntnXefD6L2TuZotQBtjOgsdGwPn%2BPYnqMg%2FFMSfYLDaUez%2Fhzo%2Bo6QeYsyv2ICEIjGSGWQIJ5sVEWrBlQqU3zwKrjYjtWxDMk77zUXUgtYrvdKCAVgQnPB6h3HgpjSiGRotXgyJdny0SloaGLmRTuJFJZJCTLWxoN%2Bv%2BIGiQC2NK2Hi0NQctK2O0%2FtDb7G4Qcei1N%2Fq5A4XDtg6OzXqfaOUAz36t%2F5yoI5nO%2F4AP4%2FPn%2FBRLk0J96AbxYmWzNUoINXKQEEX0Uak7Lpiq%2BJB6WHWNsRFfcloXeTD2Mm%2B8Rqys7SNmsxb5iVlfA7IulANqKV2ALgPr%2FHXwLGwQE%2FKdOkxwVuqGJeo5jiGsMP0M%2BQV2rrL3eiG0SQsBeU2pBbbATiN%2F54ld7W5%2BwrHfhhCwWRU8nTqTbIXedclp0Qjn3CGoQkZiWH7BySiw3K5n%2FgkT355bqydLP2J%2B6qR2Ubz%2BMJOYz8wGOqUBMxp1louOzx2mpfeX8bXOAVB1Vyd59drkdP866P3xpXvqKbljY%2FhGGt8OKt8I9euwCOGoaR5V5vjsMoKso3kWQbUAUrHexOHVSokjo6iKXvv%2Bn6V2Ktgo5QRP73wUzgc9O4F%2FRwHYLV3iCThFYcxuAI1kqmgbJ1nEfqn4tB1w2cHbNwEDywFOIR%2BAXXj72h%2FCuznM1v86tO%2FlURBArV8aTy4ch6RN&X-Amz-Signature=1ef51a47eafe6f11c7b5b373c73695bd963653938c2436b2dd02177cda7d372c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CECVAOT%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDzRLH0U8hC8mo0KetYbEvIKAnwFI1yzTXiSJInI%2Fd6MAiBZesTe8p3PTjsiGWiPtzN%2FxHa9S%2BmM7bvS6fLjFofmaSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMZRNUDbwf%2Bm%2F%2FqNupKtwD248YAMCLVBiCZL%2Fy9KFd9pcyqLQ%2F7Nnk16wj2kEIaoxLtcZxYH4PXkYb8RTPcnlrArO8qiIv83EcTxS0XElfYThF8efb6p4Xmgho7y6guO2d3iGG9ApKwNYGCp55XWggm1Grzpiz%2BED9oA3klYl14TYa7jjV9J9upPiR%2B32Dk%2Bs1eyseWTWHTUJcpAzqqM6sxsAMPqUX6CDGx56wVg3khMIIYo0H31eO7nrezGwSOSuJGemGdxf9gMWT%2FX0AVXxeHjlp4Wu9t9T9nz4jB7LeyggdTiQYEV8TNdxrQYGrkqgM9HMDgsOdAEzC5gt3PYmPXpxt34ncVh29dNO1Wqq9z2bNf1DhYmHDLSmDaiZ%2BrIH7Tc0lJVrT3ACIKojDkO%2F%2BYImcjVwRYgRTUDvSFE9c95edHTctajewwz8%2Fa8mxkXedcOy%2F9GymrCS%2B6Tlilm%2BdM9RjcKjT3V06zaGfROl9jSna6qmL%2BIn%2FAHBWs6P1itmCElslOzOAOF2yby%2BcbOmam4%2ByeiXBR3Y0Z%2BeljCAZQwn%2F9CCv5kNXWdYKEvxguXkbznu4FZA4WPb9uQksYJ7sArNGlh3Jcd8XjX0mp02O%2F2a%2FKrXKIF%2B3esM7wsMoxOWew9bqkaebQlygM8AwpZjPzAY6pgHou8IP5WmF0vzO8QrJhqJixCHYWS6dAkgw9RvVvFX%2B1kd2ZZxbe9iiSom898nvbw1O7hiBIlhMAmueRsaCaOkDSoIpVHGUXYUO%2B08aXUZJjSwe%2BaRrwsEFouMXpwXD3%2BmMOI1rz7gYjjRg1a90Jsg4UYZw69NToGOAfFFns9bhtjXVOuMjsAcsVllqR2wewa1JoOcOipuNOc%2BsFr8zfLNPHre%2Bb9Gt&X-Amz-Signature=9aeb500b7de9db451b842fb7d005ae82c9080b01d4789a98c042aecc2e67f2e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4XG77QR%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDv71FdJG9YYx7sjMW90xcQetTV82OGFrLBFDcG1UMCPgIhAIUEoTf54gtQyw%2Be1qE6cTJmXkiq1AomI4Z%2FP0JOe69PKv8DCEMQABoMNjM3NDIzMTgzODA1IgyqRlNx7QAaFPlyAS0q3AOvVz5U72VUtoRNTcfDiUGZofzF8IrX6KtEPGLYIQ70i9USeZfLY4G46%2BNmvzl%2BxrAl%2F7bgZrCKZikKypDbB0N4CtieIAbzRrNsZlWeHW6jat60FMUZmKGV5C6%2BCJM707wNWbi9ZALVzsC0nkSPM4G2ncRwQG%2BYhO%2F%2FxMAYY0eJRmpH5byRYfHL35AyIgZPqr1m8VpJJ2WleYdNtDkGdoNk5Gz4GJ85gghmEM9dxzBAV0Lk%2F3xKqz5hGEC6PZvIqa9CEY14SrZ0Az1w78sVq3k7q1j1XzlJCOGsV6bWVycM%2FMZo%2FKEIlph7AUBVB0Oz0RhB5Ll05K61Yz1StVUTJfiVgBb7iv7kNF1MLPDxdlC9DkTDc3jiszHLdV7VwYynvFmNj9t6qSp7hOvFFz5bzacQh61Bm%2FzaRvcZaIUrZx5iohVE68GnYpngbaJSVazqyEvc0QmtAE2%2BsWcfhKVgiukQhRMTxl03yOXOKP%2FwUVhS8GSL%2FxrD6I1rBfI6WsfHM8KaH8SlkVmpHUyQLATJwzAPjL3spaus95EnrYRjrFJcySLjfMRghQIzGUXqdHOhtcXxJKpKILjXpDrC127AYKjjafChyUOihulrAKTpL%2B3Eecfu37tj36g930xZmjD8l8%2FMBjqkAbH61%2FsGoiTHGQA2AEkOTAKMfyc34KA3dhXDRimu2UE3pQl4Gmy63GDC0BWywotgjXNGbNRbOBpehaObNsZ8r7IrVXoFIJJOK1z1WXQhuGGqSkMF1BfkkRMlPVNdBp%2Ban80b%2B96u5b33jMBowwoEwqpuheUniIF5kNBQGe8wbLypoGphOkgVKnvewUjrz0bj15KjSToPcTqU5OWuQ2TAmVVGmgBE&X-Amz-Signature=a414db159e67ceb6be6dd9b065d5730c7bbd50070ea79203eebaed0d8cf77e3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
