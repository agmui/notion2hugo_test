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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU7NVJUX%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T100908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQD6g9nb749VH9ty6C9VsYPTc%2BDwbDpoPVGW5Yzvnf61QgIhAL%2FT5EMJQqlr%2FWxfzmrOKfUxr87oZUhtQTjpI%2FR41fpKKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOn0UM%2F2PPFOpnNkgq3APTNEi%2FP0xlM7dW8QAl4%2FAntrIg6H6v9cMihAww%2BkbIS9szJGQf%2B%2Bx%2BT3CYxxQidbcFWM1KnhcRolqfx64ae1A4Oo5cls%2BOAC5JdzS2IyEgga0VnR%2BawCBdA6tMWdNJ5Mgq09Cv%2Fa8rJFPLrNRY0NqMSfZ2zt5vptTn4oMEI8IQs5Fo%2FjVnjN%2FNUQV1ksWcqYkD%2FjOyQOAYRpG4XEIIzeQKIkPp2eRuHK1%2BsW%2Fgx9dS95DUxX%2BRsEsG9sp7Wou150mRKy8INIXzPgKhskJ9E9O59SekUdcGDa3WhtyWd5I5ck24%2FRMrUOUz%2Fxd1oIzMyslrTnxLTchI5Uz9BthIgYrmK8Exh1WFXWlZqyN702Un7Je9VxLx4c1u8nhJlNqk6cq9%2BXAfVe%2BjvZOSWy2uumoeNkV%2FskPIa3xzIpDDvkrCzfKcpipMCmNXEIfeNS%2F1%2FPKdxdMkGDZ9jBR9WSm%2FhuUgH99YfIPItd79tl%2F147lzDUbUwPx8WUkphCgLEVf%2FdpfCW4%2BlQLqv0j8v09kBjbXk1OQ2q2wZQW2UZSsgJLuj3cIG1KmnEjneC9TkfJkv3PUGVVlcrNBXh39b%2FrrSrlmS8G21RP5K8kP0FLI39QXE83bIVEDHiqiIFSIKYDCZoZjABjqkAd0rrdrGJnHzyhkYH3FeMQZ9gOyASJ9zyrVMlSaWBmMSoKKeiwX%2FA28ndTzJ%2FuVPBJo4pfMC51cmIu8gJ2sjeW4ZgitRzpLPpxrOvV2fsarLHA3TcZTu%2F5DFu%2F5KhLdX%2BFX64w0OoqaD%2BoAVSUi2pI0USuz62lVjjxJevwLfNpdmbiMvIULGkI5k72BXpcEYLP9Em5F6Mev6Agq9fiM6qeMTkY5Y&X-Amz-Signature=e5f1e9b3b0a6d255b51f680c38c1d57ab75fabaeda8b158c42b5a269e95bb2a8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU7NVJUX%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T100908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQD6g9nb749VH9ty6C9VsYPTc%2BDwbDpoPVGW5Yzvnf61QgIhAL%2FT5EMJQqlr%2FWxfzmrOKfUxr87oZUhtQTjpI%2FR41fpKKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOn0UM%2F2PPFOpnNkgq3APTNEi%2FP0xlM7dW8QAl4%2FAntrIg6H6v9cMihAww%2BkbIS9szJGQf%2B%2Bx%2BT3CYxxQidbcFWM1KnhcRolqfx64ae1A4Oo5cls%2BOAC5JdzS2IyEgga0VnR%2BawCBdA6tMWdNJ5Mgq09Cv%2Fa8rJFPLrNRY0NqMSfZ2zt5vptTn4oMEI8IQs5Fo%2FjVnjN%2FNUQV1ksWcqYkD%2FjOyQOAYRpG4XEIIzeQKIkPp2eRuHK1%2BsW%2Fgx9dS95DUxX%2BRsEsG9sp7Wou150mRKy8INIXzPgKhskJ9E9O59SekUdcGDa3WhtyWd5I5ck24%2FRMrUOUz%2Fxd1oIzMyslrTnxLTchI5Uz9BthIgYrmK8Exh1WFXWlZqyN702Un7Je9VxLx4c1u8nhJlNqk6cq9%2BXAfVe%2BjvZOSWy2uumoeNkV%2FskPIa3xzIpDDvkrCzfKcpipMCmNXEIfeNS%2F1%2FPKdxdMkGDZ9jBR9WSm%2FhuUgH99YfIPItd79tl%2F147lzDUbUwPx8WUkphCgLEVf%2FdpfCW4%2BlQLqv0j8v09kBjbXk1OQ2q2wZQW2UZSsgJLuj3cIG1KmnEjneC9TkfJkv3PUGVVlcrNBXh39b%2FrrSrlmS8G21RP5K8kP0FLI39QXE83bIVEDHiqiIFSIKYDCZoZjABjqkAd0rrdrGJnHzyhkYH3FeMQZ9gOyASJ9zyrVMlSaWBmMSoKKeiwX%2FA28ndTzJ%2FuVPBJo4pfMC51cmIu8gJ2sjeW4ZgitRzpLPpxrOvV2fsarLHA3TcZTu%2F5DFu%2F5KhLdX%2BFX64w0OoqaD%2BoAVSUi2pI0USuz62lVjjxJevwLfNpdmbiMvIULGkI5k72BXpcEYLP9Em5F6Mev6Agq9fiM6qeMTkY5Y&X-Amz-Signature=d21b569f48ce39b9b745fc5c32d6b586127bbb4fbf4c8f4ffa51c8ef84cbf722&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ7RYXPA%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDfCNxiU%2FcrsecqAelSM4X7Y%2BUJQV8LUSKJjM7dtw6fhwIhANBgThnYQyyZJ0LUaGQDKPOD8Ixj19ORqXYMxYQ3PF5OKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwupMyAWE2czNlBDE0q3AO26k5vGlpYIV%2Fmt9zkgXOqBgjSbWsBMU2FWz%2F1PpNUXIpCRY3qO0PBkhkzqj4Y7HxaKrOHAG50x%2B2cAGKG3lkDL%2BG1L6HQ8%2BfVSpTdKQuc6mBsiAvy3ujG%2BKgkaSIj8gftrCFrHkPfHoX2pLe%2FVMRKRzUA1Rvha95%2Ftmt94EuNA6fGH52fXdED4L2Zg0w1XaBPUGQw3WeXSszaCYuWMELtCIQqbvqyC78Z%2FeqUc%2BaqNRGbS1g3vV4JnX%2Fznax%2FpOhpL0YDrZbQIDhZ4mTlieNCVM3CaMOkK7XMzD2ow5KQ31U%2Flubawo7PdRcNvZSP%2BJrobv6Ce2cmEThKzO0KiR%2BRy%2BNCAuPUYRQEiMiX5gbNQKmZCGGHL6O9niHLFMhXawhRlgZV8wY214zgCv4Qr%2FIQkBxxYFJNBnVEMo0cOxIMm4SxvTpypCL4mxM4CPMwK6Csi5RAV8Ugz0ob1uyHidKHnmY%2FvQ4gL6NDycNb8wN5ckqy2yE%2FHZdy37rebgQ5l91FY%2BFhauEhIwtG7MV8DxNsdWKd8JTioPz2%2FAGoD90p5ZbNaOLtlx2Sp82PzfFOem6QiZc3PjSraDlS7QaX%2FtD4oOO2kD1ALH8ZlZcip28SxGCKemBmyWCmKx64vTCooZjABjqkAXPijCs3vXjwjEeZA6eqDzamZjAaVIqRiZcqQnHolEVuULNNBbuAe%2FNHYSE%2BH%2FOUaRAhkuCAX7RBfvx%2FVnUA7al3hOiX55ulMUe30u8n%2BwxlK3hZbeN5gB%2FfX2PoWU2FxHjOIHhoa736NZgK%2BEAGF9if4zuTrUsMMaEUS4hrlV309oDEeWKlKeXducbMbD7RU2krXm6mbH1IlhVUFTOKW19tU7CB&X-Amz-Signature=6dbbf512001f910c685c31fe4aa306eaa13eaf43c362d24f72c44991f2df9302&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TNONHNY%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQD%2FubUUFt4BWVzwrUu4G71Z33fivgHuKzIVjRsHOoVhlQIgU2d%2FHKndT2Kc8CYxwONkYwY2PUB6%2BNr2OeSy4ViiNKUqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaqJC2AvYuVuHgFaircA9p%2BJ0zV6Z4vBiPWtV6CWybFW2a%2B5srh66Bom6j5gNVNpfhbnkv0cpKubrGlJxzMruuwHMHezKjH%2FrkXxla3hKP%2B57u%2FuVY17b7eoX%2B7FZ%2Fd6kQb1JRCeOWkW0iOOM1Ji70f1L4PA0%2B%2B6ZmO3BBTPunmQm4NGbNkunYhES6TxSx6D%2BjgJXR%2B9fOooMwqyHUXKwgi7zRA0aPQVaCIIc%2FBAIn7tqBeLYP20JhNvQHTp3Sr8REC1hgdFcmnd4O3OQpR87NfNLJ6z8WInau9JRfaxeTMMKj2BErQv%2FV7BO2t5cRg71IcrPxfMRPSDlAFQINkPChvXsycGbIy2Y8OM0lB3oahrDIVl3nZff%2BvDaserOcPpjZlGIDd7%2FUR1CbazxaZ97DXOfmyFvVGJoOW8%2B8IlF5nRQyfa2qeXu%2BUR9%2BqPmV1WmQRh%2Bjoq2B%2FAtQbfmhRU4sP1FkLQMOlQbvSRs7LT%2BhtssCno8ArwMaQGGpXnWzqop2HngijKFzZOGU4c7ZrW%2FCaf4nzBGT%2FNhVZWo27PpzjWo%2BodEUIeOPzP%2Fn6AZmsDF1xH%2BpZZEoFfHxavYAMVu3ICrn4rJpQvD%2Bp9twQJaeqyPBS92d4tM2IJrhmPrwzozAIhXuLMr%2BV%2B9xEMM6rmMAGOqUB613hi23Ms2xrs8Y5Ves5uIGRwRq%2BzhkUIR4jq%2Bsf4z6ZNobQVrO7d%2FiRxwDXhMqPOQucgNz7Eldpp0dJdPOVImKvxalTPwRWHbSVCN%2FXddLmP5qAC4b9lIl4F4V%2BvFuB0wxopp1Uzy%2BWzijQrwS1SPFjPGcvDn0GE41c0xmBn4fgbYDj3PqsbBOdnok8DvsVwqOQIP0QYG3ywUovHrjB6VDUwevY&X-Amz-Signature=1642a482ed3277d1d28792a41e4545e2adc0875d06cd86bf6980ddf1e036341e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU7NVJUX%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T100908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQD6g9nb749VH9ty6C9VsYPTc%2BDwbDpoPVGW5Yzvnf61QgIhAL%2FT5EMJQqlr%2FWxfzmrOKfUxr87oZUhtQTjpI%2FR41fpKKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOn0UM%2F2PPFOpnNkgq3APTNEi%2FP0xlM7dW8QAl4%2FAntrIg6H6v9cMihAww%2BkbIS9szJGQf%2B%2Bx%2BT3CYxxQidbcFWM1KnhcRolqfx64ae1A4Oo5cls%2BOAC5JdzS2IyEgga0VnR%2BawCBdA6tMWdNJ5Mgq09Cv%2Fa8rJFPLrNRY0NqMSfZ2zt5vptTn4oMEI8IQs5Fo%2FjVnjN%2FNUQV1ksWcqYkD%2FjOyQOAYRpG4XEIIzeQKIkPp2eRuHK1%2BsW%2Fgx9dS95DUxX%2BRsEsG9sp7Wou150mRKy8INIXzPgKhskJ9E9O59SekUdcGDa3WhtyWd5I5ck24%2FRMrUOUz%2Fxd1oIzMyslrTnxLTchI5Uz9BthIgYrmK8Exh1WFXWlZqyN702Un7Je9VxLx4c1u8nhJlNqk6cq9%2BXAfVe%2BjvZOSWy2uumoeNkV%2FskPIa3xzIpDDvkrCzfKcpipMCmNXEIfeNS%2F1%2FPKdxdMkGDZ9jBR9WSm%2FhuUgH99YfIPItd79tl%2F147lzDUbUwPx8WUkphCgLEVf%2FdpfCW4%2BlQLqv0j8v09kBjbXk1OQ2q2wZQW2UZSsgJLuj3cIG1KmnEjneC9TkfJkv3PUGVVlcrNBXh39b%2FrrSrlmS8G21RP5K8kP0FLI39QXE83bIVEDHiqiIFSIKYDCZoZjABjqkAd0rrdrGJnHzyhkYH3FeMQZ9gOyASJ9zyrVMlSaWBmMSoKKeiwX%2FA28ndTzJ%2FuVPBJo4pfMC51cmIu8gJ2sjeW4ZgitRzpLPpxrOvV2fsarLHA3TcZTu%2F5DFu%2F5KhLdX%2BFX64w0OoqaD%2BoAVSUi2pI0USuz62lVjjxJevwLfNpdmbiMvIULGkI5k72BXpcEYLP9Em5F6Mev6Agq9fiM6qeMTkY5Y&X-Amz-Signature=3b14e133e48314351f8d7c3272b643390b4c0cda97b3d2a05bc3cfa8254fbaa1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
