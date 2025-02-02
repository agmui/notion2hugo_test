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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYAFEOJI%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGyUPQ%2F49pR7Wh0zGq6KBom2PdWkCZxEO3B9wSoP3gcwIhAIbdgenbogIZAOo5RIjuYZROcDC2FIzB2s448hA8NqchKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkwtkVhWwSIUVI5CIq3AOmImnRAmjXFhG3Xfi%2B6e%2BUPSCDIIkdEptNC%2FxW%2B3lZkuFysgx1fmGeMrJIcJLo2jxLGIUJhiglO0nCOuNC%2FRDMqGGkAnfhBz7e8SuL9DZXHcbTKAL76KF66LulebursYEUGNNGbvSGNv3%2BvsXLxpJ%2FqALemGC810BHi7mg7zzyvvaSpN6wknEL6Sg%2BS%2BuOCMF58a51a8UKSrkn%2B1OCKUElXa7wH6fpFDg0Y%2FnM7Zt9Xgb%2BM0mA%2Fcxq%2FhBnYpvsEJ2e8RIFXpA1%2FGxRDHtiizSBZ6421qnTnz3YrqvpNszKfRBMxaHPsRj85jeIJaEfNOjV22H7Ch%2B1sMb5ez3O66RX69ges3D%2FWPElpZo40Pih7AFjmBDtV%2FI7rDc%2Bx%2B5mdGL8xdR%2FugzTHUDWeTCuomBBMw8HUagNiiBFTaBigCuISiE%2BRRVXES3e0pIzuHKueiMH4lgTDG%2Fjqf%2BpeOXCY0OUPpYNWBifmhVYCZwlo1ewuhh8be70nm0SML5H%2By7D554eTuAq9USGDdjjqjrnC%2B8g9NDGPH9CfDwMHH7A2EW%2BPqOIIksQ%2FBbkltd3M3ugqFwnbzae2xqc1XjVwx4RqGSGaN0Ich%2BPCYSs49auVHREvfY%2FSpn19DhQhoTcKzCYoPu8BjqkAd9XL3rvb0Hh67uXSeofSBLX8nbv4qwXRTEmoYFfV1Uhq1GlEL7vqqxeys16jsdQCu7X4m5sNbp6h9xQTlD3Tg1LPxqHcEOdIYdCNtdtaSugdyZrwsg9LnyoaNKE9s%2FSSwxT55g1YJnkn11TuYhv5oQ6UaTbh1HeNbiss0rsy0LlvtcsZhUHz3EBsZzUfSpHYtJnlCmI8u%2BOrv7KxbYa4BCnC3lq&X-Amz-Signature=5779a69249c99d409b5a95fddb885ae48cd3ad29f452a66cad6bc0b702237c35&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYAFEOJI%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGyUPQ%2F49pR7Wh0zGq6KBom2PdWkCZxEO3B9wSoP3gcwIhAIbdgenbogIZAOo5RIjuYZROcDC2FIzB2s448hA8NqchKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkwtkVhWwSIUVI5CIq3AOmImnRAmjXFhG3Xfi%2B6e%2BUPSCDIIkdEptNC%2FxW%2B3lZkuFysgx1fmGeMrJIcJLo2jxLGIUJhiglO0nCOuNC%2FRDMqGGkAnfhBz7e8SuL9DZXHcbTKAL76KF66LulebursYEUGNNGbvSGNv3%2BvsXLxpJ%2FqALemGC810BHi7mg7zzyvvaSpN6wknEL6Sg%2BS%2BuOCMF58a51a8UKSrkn%2B1OCKUElXa7wH6fpFDg0Y%2FnM7Zt9Xgb%2BM0mA%2Fcxq%2FhBnYpvsEJ2e8RIFXpA1%2FGxRDHtiizSBZ6421qnTnz3YrqvpNszKfRBMxaHPsRj85jeIJaEfNOjV22H7Ch%2B1sMb5ez3O66RX69ges3D%2FWPElpZo40Pih7AFjmBDtV%2FI7rDc%2Bx%2B5mdGL8xdR%2FugzTHUDWeTCuomBBMw8HUagNiiBFTaBigCuISiE%2BRRVXES3e0pIzuHKueiMH4lgTDG%2Fjqf%2BpeOXCY0OUPpYNWBifmhVYCZwlo1ewuhh8be70nm0SML5H%2By7D554eTuAq9USGDdjjqjrnC%2B8g9NDGPH9CfDwMHH7A2EW%2BPqOIIksQ%2FBbkltd3M3ugqFwnbzae2xqc1XjVwx4RqGSGaN0Ich%2BPCYSs49auVHREvfY%2FSpn19DhQhoTcKzCYoPu8BjqkAd9XL3rvb0Hh67uXSeofSBLX8nbv4qwXRTEmoYFfV1Uhq1GlEL7vqqxeys16jsdQCu7X4m5sNbp6h9xQTlD3Tg1LPxqHcEOdIYdCNtdtaSugdyZrwsg9LnyoaNKE9s%2FSSwxT55g1YJnkn11TuYhv5oQ6UaTbh1HeNbiss0rsy0LlvtcsZhUHz3EBsZzUfSpHYtJnlCmI8u%2BOrv7KxbYa4BCnC3lq&X-Amz-Signature=14c9a9128e04a027b80c520d5c46c959370045276826eba1680e3cacb10b87eb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M5FH7SV%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIXffmYUZTRu4l5zzNO3tjYwYQtaC1UdAMFWH15%2Fv4FAiEA%2Fba28uwqfIi6Tpa6KGZRg7ftHZwGbr98GeJ74udo0sQqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD1yRSapHq%2Brcd%2Fu1SrcA%2BjvPKcxIfWH8ceZ8lir3fhbNpXTtOVsLTdtblEIwOpeHn75uGHf2SefzT8Z%2BD81cJcY5FMeydcfZDI3lJ8f8yFGDJJewAU1O4zzk1jeYCQGJ8jR0wRBd4Joj2F3B9hjlk9Pw%2FzU5hx5rov%2BD0rBIj0Divv8fZ281OHD4PaKDgvGlijrLpuA7NyhjZTm5QKrnbu9w3Rrl6XaQQ%2FsxAwA5hklpbpnIh7MFn2Eqm4bJVxWNfs7HlYNVfqF0xwTPm32b02xBH4QyYUpIlCuPrhkCa8eLbGr7MxHBT4jES4BXcHZ7%2FN%2Fjl9YXhCkJG2w08Qb1g4EdGO3Wf%2FMzIf0RfTjccAnaX3osVeLcBpvArYU4Hcz1iAsZ%2F4Ph7dhBmk%2BvASb2ML8o84MMbn%2FcDiYJyzgTqswVSFpNsyf213cO9r5%2BKAOFnFTGoiPAeqpcNkuJWlDFU0hfibu19uOr1GESbV1QRDs6RWQOlnpkWF9txB9hb3HVOm97E3FXv6pIhwpT86VwmFje1Kk2e%2FbTVJYJfuNrhhQcGp2HPKUUZQV%2BdHmiLaAzasnpR8maldaL%2BMSVcH%2BqYM%2FZ%2BPf2TWpC%2B9Vbd028CYSTBJVD2zgDZ05y5aez80ZmrQnnX%2BG%2BMFK0sH7MOKg%2B7wGOqUBpa8YZeeYcLwXLQ3Ie7jyOks7E36euc9x%2Bi31IhKmPdI7yWPor%2BfS9nMQYE5rmWF4mqDHujPkcPQI1vm6isBxeK1SlFeeUI%2F%2B6NaxvZRC5LH%2BmHSFZUI%2BSYiw0WiOHxRYQMRB1TOQ0we2nLqfzKczx%2BBA5BQzNczlCgnf7iUmTEgC%2Bgj8C8C4aGcDIrY1L4LCPGHSN3zwziJ08v4wDpG3dMz4TDLY&X-Amz-Signature=753ac616800ee9e5b7f9a6c312fe053536a80f17e17e029da05e58f10d72e18f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQXUWHO7%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICy2feHOJLcmI68mxro4r%2FAMHlg8TtyNrk9ym7Ejp%2BbOAiEA%2BLlx9JwpGsutxvoxEMjF7Fsp9HeGggYBIxrjOMPVsyMqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwN5Z7BEXrjYjXiRCrcA3mK9bYIilJ3IM6%2FxVp%2By9Jaw5ovq%2Ftujy0j9u9j1ejitVcHPlQrdgbK4j7iaGF70vmM3GANgIpgIj2q6RcWbnAGFQRgwKS45LbJsrj9Nrwg38mhVdo4XNloJEWTR7zqssEdXSKQ42JHLuc6MTmTrILn2TKSEq9OHxOHg8ig%2FvDCi6eQlcyHoiS8Zd1%2BKGP4JDG0YssaQzG3ZwX%2B0pRw9F3Zbxi1DLQgz2dzXva1t13oQ9YfZGCQGgFNqFGENVsKMczltvJIhj36JkbDbERqjly4eewLwlm4HCwUJNfmV59kXtg2mWTlaLQvAsZETyrWc7rSw9OaU0%2BDUs9sJmDlU0PSjsde7VQ%2FCegzUx2gLHIftpAWSZPuy6p4sOHBXaO7EiA0E0rpCt934F9wdqVZaARXiY4g%2BNAE4d5ciiHBtBg2J4l8vgjx4YdcJEI37YcXRs08WRTWNIItPyqtYDBespMY5mnOAbCDVf8P%2Bx%2BQUnxw%2BlkuPqfgWG%2B8MpSz%2FzY7DUpUpRFpZhTyha3gRbW8Ppt%2B9lneJoG7M0A8Ai9tw7pBQQe7YsBZIUg7%2BKmAYQKgNJsmPiBZvQtIOAsFecAnwGXhEHecNS0nlG202r7sDXJp%2Bb11ZbyrKTSMFTKdMKWg%2B7wGOqUBNCw%2F7565tZz%2BkLtoH7ACDM9YiTVmk%2FgSEp5fAZFlr8C0iOhbCcs66namOeBBZ9%2Be8C%2FCQK4caxiYB3aINZNbXREvMcaS4cXXSDnIGdvP2UhnOsXH8nmErHFI2qnQT3n5O0Ws%2FFjCSJPoWkw70aTn3IlVJep5cSGmveDfSGfSf7S1Vuq4unnP7mu%2BBGqLN%2B9zvooLelhAcCOK8AjfXSn7VBITJCWL&X-Amz-Signature=3dea3d5add403b4974e0e0b841bfc1632c42cbb2319983b0089b089cbdfffe00&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYAFEOJI%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGyUPQ%2F49pR7Wh0zGq6KBom2PdWkCZxEO3B9wSoP3gcwIhAIbdgenbogIZAOo5RIjuYZROcDC2FIzB2s448hA8NqchKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkwtkVhWwSIUVI5CIq3AOmImnRAmjXFhG3Xfi%2B6e%2BUPSCDIIkdEptNC%2FxW%2B3lZkuFysgx1fmGeMrJIcJLo2jxLGIUJhiglO0nCOuNC%2FRDMqGGkAnfhBz7e8SuL9DZXHcbTKAL76KF66LulebursYEUGNNGbvSGNv3%2BvsXLxpJ%2FqALemGC810BHi7mg7zzyvvaSpN6wknEL6Sg%2BS%2BuOCMF58a51a8UKSrkn%2B1OCKUElXa7wH6fpFDg0Y%2FnM7Zt9Xgb%2BM0mA%2Fcxq%2FhBnYpvsEJ2e8RIFXpA1%2FGxRDHtiizSBZ6421qnTnz3YrqvpNszKfRBMxaHPsRj85jeIJaEfNOjV22H7Ch%2B1sMb5ez3O66RX69ges3D%2FWPElpZo40Pih7AFjmBDtV%2FI7rDc%2Bx%2B5mdGL8xdR%2FugzTHUDWeTCuomBBMw8HUagNiiBFTaBigCuISiE%2BRRVXES3e0pIzuHKueiMH4lgTDG%2Fjqf%2BpeOXCY0OUPpYNWBifmhVYCZwlo1ewuhh8be70nm0SML5H%2By7D554eTuAq9USGDdjjqjrnC%2B8g9NDGPH9CfDwMHH7A2EW%2BPqOIIksQ%2FBbkltd3M3ugqFwnbzae2xqc1XjVwx4RqGSGaN0Ich%2BPCYSs49auVHREvfY%2FSpn19DhQhoTcKzCYoPu8BjqkAd9XL3rvb0Hh67uXSeofSBLX8nbv4qwXRTEmoYFfV1Uhq1GlEL7vqqxeys16jsdQCu7X4m5sNbp6h9xQTlD3Tg1LPxqHcEOdIYdCNtdtaSugdyZrwsg9LnyoaNKE9s%2FSSwxT55g1YJnkn11TuYhv5oQ6UaTbh1HeNbiss0rsy0LlvtcsZhUHz3EBsZzUfSpHYtJnlCmI8u%2BOrv7KxbYa4BCnC3lq&X-Amz-Signature=ab8af987374c0dc86c56351ac6e512c4c14ec29e97a30022cada0a80778c9e60&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
