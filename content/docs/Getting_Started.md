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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN4IEBJ7%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T041034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQD1F%2Bd4PT%2Br97B4aX8L1M2%2Fkj9RFBhM0Mwq92W%2FbI1tOwIgEOJ72oNMGPkvNwnvwql4EHQkGR6JSkEEvubp0LK8O4EqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYrgraJKikRcDE7VyrcA%2Bu3Kwdj4KGXW6DtHCruurGZj6ZJWu2nHU%2F%2BX52pu4vmYAvg%2BQGsZAY1EmWOkX8Ftg%2BFEuP87DcGcW7FLKFTWmEsjaocEjsZSFhYojGMtpq3p3gGWxjHD6a9lK9DAaR5rgkp8GpjpQ7hWR8y2ziMa9U6o496MeNfUK8yJDQeNtic65BDHPS5ckUU%2Fsk8Zxzsmn34SU9OFAYQ%2FKDfEkFroq7DggZN%2Fw5688ZSQuczH%2FwlQ%2BmrfUkD0iDHfGTrnKBnfNGSf3SU35XSfjwC3b7lS9YTK13aF%2F8D3S66r5Zjq7mSz1x4d0cJTwdx9VitfZ1djwUaUNWgJuGZC4kuO1Kj2R5wfHQHiWBDns1YP%2Fd%2FIo7LW6uY9mIHQ3xFS%2BOdEVR7dmy%2F0W6eXwkwsVJcHBlHyk%2BtoQIb8ROj9gLGx%2Bdjjx95Ov2h5nlt4eEpfD4Np59kqeUW%2BeqXCqqy6mHL7js0UWTdjLLw26fIami19XHnTAicdcrBl1ZaHqiaDY33A6W8aKYVTMSEr3aL2tHDRgLYfsg5Hx0pQgUnXRUXan%2Fv%2BErlcZs0UMgkI1QX9%2FODRjg130Eg3hk3If1rP0NG7AlzzWOmD1KMFpXirOm%2B3z6xIsl%2FqyY7MVidirx7wSlwMJrvsr8GOqUBsVu843VCHINQuoobL%2F6PcVnaO2TMFoXg4cPxkFiWHmT37H7%2BRaNMygZWS3G6dFuMjlDiyjncWuVNxmy97LcYEgP%2F4QYPa8oGj%2FNlLza%2BohzsYRGIrixRfpazShLNqB6HLGtCAojRCSfrXv5dI5y9aAhfiV49FXtKnRXvdbxTjPVSfiqS4tjNYU75niahvRypM2rEN08itgBki9%2FV0UhTAI4AZ7Ph&X-Amz-Signature=e06f0e371731b0961607355adfa88458e82c68c3c84b71c31603041599dd29b0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN4IEBJ7%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T041034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQD1F%2Bd4PT%2Br97B4aX8L1M2%2Fkj9RFBhM0Mwq92W%2FbI1tOwIgEOJ72oNMGPkvNwnvwql4EHQkGR6JSkEEvubp0LK8O4EqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYrgraJKikRcDE7VyrcA%2Bu3Kwdj4KGXW6DtHCruurGZj6ZJWu2nHU%2F%2BX52pu4vmYAvg%2BQGsZAY1EmWOkX8Ftg%2BFEuP87DcGcW7FLKFTWmEsjaocEjsZSFhYojGMtpq3p3gGWxjHD6a9lK9DAaR5rgkp8GpjpQ7hWR8y2ziMa9U6o496MeNfUK8yJDQeNtic65BDHPS5ckUU%2Fsk8Zxzsmn34SU9OFAYQ%2FKDfEkFroq7DggZN%2Fw5688ZSQuczH%2FwlQ%2BmrfUkD0iDHfGTrnKBnfNGSf3SU35XSfjwC3b7lS9YTK13aF%2F8D3S66r5Zjq7mSz1x4d0cJTwdx9VitfZ1djwUaUNWgJuGZC4kuO1Kj2R5wfHQHiWBDns1YP%2Fd%2FIo7LW6uY9mIHQ3xFS%2BOdEVR7dmy%2F0W6eXwkwsVJcHBlHyk%2BtoQIb8ROj9gLGx%2Bdjjx95Ov2h5nlt4eEpfD4Np59kqeUW%2BeqXCqqy6mHL7js0UWTdjLLw26fIami19XHnTAicdcrBl1ZaHqiaDY33A6W8aKYVTMSEr3aL2tHDRgLYfsg5Hx0pQgUnXRUXan%2Fv%2BErlcZs0UMgkI1QX9%2FODRjg130Eg3hk3If1rP0NG7AlzzWOmD1KMFpXirOm%2B3z6xIsl%2FqyY7MVidirx7wSlwMJrvsr8GOqUBsVu843VCHINQuoobL%2F6PcVnaO2TMFoXg4cPxkFiWHmT37H7%2BRaNMygZWS3G6dFuMjlDiyjncWuVNxmy97LcYEgP%2F4QYPa8oGj%2FNlLza%2BohzsYRGIrixRfpazShLNqB6HLGtCAojRCSfrXv5dI5y9aAhfiV49FXtKnRXvdbxTjPVSfiqS4tjNYU75niahvRypM2rEN08itgBki9%2FV0UhTAI4AZ7Ph&X-Amz-Signature=271dfd6ef925930e954dc64bd02b0e5f0b27ffdba0cf1cce4872d74553c02db1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M5JLL2P%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T041037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQC3xj49PV%2BuRMJXmchL97gQNq7VN%2Fqp2sHeo%2BDF4fYmbAIgNGIo39OVsXD7Z7SKekbeA%2FTw86472Jo1fvGIZYCtsK4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLL1ckBQZ9PfWtbGEircA%2BqlqOlLFJ8w0QM3%2Fn1uOXG4eIJkrqaQCatucJ4ne2UQjS%2FOLVfzIQ6fadPiFQQfV80p92Y3bBXOv4%2F8PLcKqHjLafV5rVWUoZgIXZeFnk2ZZn8lTVkYma5EEVNLdJY5OrRlc73FXPYorrzFNoooK%2B7iizvYekNyGBh6ygfbFjR2iggkb3k0P0GcQtZHB2uHl07%2Fv9QuajsMDU6V2KJT31CDGQym%2BDcKrmUtYfI64hfiy0PV0j9vh1opEar3%2F8aKj5ygkYBUOBOL9%2FBjJHdMRps8eHA2icIKzN5c1QKx4QyMAJS4JoTfEdrG0BGmtSP0NR48yAZ3L9NCVM8%2FsFOMp0reLhG5k1mSyOzy%2B1DOztI%2Fj2uVWQiEU1s%2BjN0Qp%2BJuoFjE%2B%2BaFGMjM%2FWLSOFcjoxE3I19Gserm7IYuy7SPyT%2BZT%2BA2z6KiA80UK3d9bjHZ7IxQxosHaBqsiALsU7C%2FTgxsDg2Un36eh%2FImuIsRF67nQubQyRuY0VaiiNbQ9jDSD9V1E8BoGkXrNUrzIjVaf%2B1sir%2Fe2F3rrFCSi21BA7QpYXAseOv7z2Jw1xzS91pgFogG0s5Gxsu3TXPHQFLOmslgN1lO4sLfHtW%2FZuwL9gZhIXxWALTcCQvEsC34MIPvsr8GOqUB2BdRbVMe54TFxgAuXDcap9orZOSf%2BJYdJS%2BtOUhUoMO1TA3dO19SZ4AQvTbaAnJfFcpnk%2BPwhNLbWJW1fYTFRM1p4tn5ILBK4q71hOzynTuHatrfdoPGWQq4qOtnowRPB0iry42Twk0SEhoW9S%2By08%2BCjWGGBxrQzhL1vswaUOlXyJhg7Zoe85Oe%2FUhfDfqrxaFuB%2BKE%2BJ72Nm4uarw61Yx1S12Y&X-Amz-Signature=d050b0f7b8d846739ebfc1b6f0ac76ccb6e95bf544eee6119d3bffab323d8394&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R757LV23%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T041038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCHyC8Ax0Ank9Fgu1ggkBAx92ntHCwThD%2FjeZDlKFmuDkCIQDU8NTWWC2Vl4MMxtXDrlHqIeaqe%2BZ%2BWGGxm8BEM9IkcSqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGwMiNC9x38WyiXavKtwDFZQ%2BF4yzvJ2r53To3QC6TGTxLs%2F1NaMo5pfUI2rov5lX0KcMXJWchmrBUwm2yje0aEibfUAwCxKhJskz0vFEoVkcPuWi%2FAYeKjjaSJtxL7Y30e1x6GqkQmzIk5cKcg3E2O4Ngv5l5VwmP7Zewi13mFoae7Me8TgxowRI62lnliBD5qkPPwo0AlGf9l3WqNm696FSfJnBbIOsjL96WZiIyVTY%2BVvio9UdX%2B%2FxtRtfC%2BqO0DQmU6M9sfNYc9T4yqcz1UfdoT7%2FAVp1hPsKepHC%2BjSi76M4CsTIOetma9equvRZl2tdMShqwtnvuF4EFKydP%2BKdBu8AG9CzhhdTDwPtGYH2EXRrkaDZ4%2FCYQE1TjR41WYGMPfcX4HhmnA6a4%2FBRZyXDpwImxhf1U4L6d%2BrHQIJ7CCErouHJmQPikyAGTutHViSmAWDtjVxARZezsY6%2Fexkkvu1To6h6VGkSKQEa6WLGj2qFW2O5eO6LgdHkWGs8PYwXDp%2FzrK%2Fv%2Bw6VMroUv%2FITKTTZK5oEQ1WFRqkynHLUqJz3U8tvcm1qL42q1f1y8ioqVmC2uX%2F17HiIil4N6dBascvphGmSmu8fVevXKIQaPB3DuD4XWFKPNSaMfxKk%2F7XfApJrLggv3HIwse%2ByvwY6pgExJ3i3VZe7ZM9a5dxPYQ9tk5yW4w0Lgp3pdE7syHl%2Ftdps6g%2F%2F2H9xO3tlmK8570QKOpQ13%2BvT1RrrK7omB4rD5RIE0jJdxsEgWCwOfXxfNRTL32G3GuLv8TamFzUzBOTQDga9ugmkkg2f%2BCJrsr4eugRPB2krwqGdK6217WcKDG%2B4IUCnTrFxTGoZzfCW9mfQTRHuvm75mDEebXY5boN8RLSQWyVc&X-Amz-Signature=9412b137e6547f0bf0f8753f5b481e303255f3e65af38445b03f7b831d01cb39&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN4IEBJ7%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T041034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQD1F%2Bd4PT%2Br97B4aX8L1M2%2Fkj9RFBhM0Mwq92W%2FbI1tOwIgEOJ72oNMGPkvNwnvwql4EHQkGR6JSkEEvubp0LK8O4EqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYrgraJKikRcDE7VyrcA%2Bu3Kwdj4KGXW6DtHCruurGZj6ZJWu2nHU%2F%2BX52pu4vmYAvg%2BQGsZAY1EmWOkX8Ftg%2BFEuP87DcGcW7FLKFTWmEsjaocEjsZSFhYojGMtpq3p3gGWxjHD6a9lK9DAaR5rgkp8GpjpQ7hWR8y2ziMa9U6o496MeNfUK8yJDQeNtic65BDHPS5ckUU%2Fsk8Zxzsmn34SU9OFAYQ%2FKDfEkFroq7DggZN%2Fw5688ZSQuczH%2FwlQ%2BmrfUkD0iDHfGTrnKBnfNGSf3SU35XSfjwC3b7lS9YTK13aF%2F8D3S66r5Zjq7mSz1x4d0cJTwdx9VitfZ1djwUaUNWgJuGZC4kuO1Kj2R5wfHQHiWBDns1YP%2Fd%2FIo7LW6uY9mIHQ3xFS%2BOdEVR7dmy%2F0W6eXwkwsVJcHBlHyk%2BtoQIb8ROj9gLGx%2Bdjjx95Ov2h5nlt4eEpfD4Np59kqeUW%2BeqXCqqy6mHL7js0UWTdjLLw26fIami19XHnTAicdcrBl1ZaHqiaDY33A6W8aKYVTMSEr3aL2tHDRgLYfsg5Hx0pQgUnXRUXan%2Fv%2BErlcZs0UMgkI1QX9%2FODRjg130Eg3hk3If1rP0NG7AlzzWOmD1KMFpXirOm%2B3z6xIsl%2FqyY7MVidirx7wSlwMJrvsr8GOqUBsVu843VCHINQuoobL%2F6PcVnaO2TMFoXg4cPxkFiWHmT37H7%2BRaNMygZWS3G6dFuMjlDiyjncWuVNxmy97LcYEgP%2F4QYPa8oGj%2FNlLza%2BohzsYRGIrixRfpazShLNqB6HLGtCAojRCSfrXv5dI5y9aAhfiV49FXtKnRXvdbxTjPVSfiqS4tjNYU75niahvRypM2rEN08itgBki9%2FV0UhTAI4AZ7Ph&X-Amz-Signature=75efc15138c0ecc109d682f8f208f7689945c7bb5f100a85aef4b18b704a534c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
