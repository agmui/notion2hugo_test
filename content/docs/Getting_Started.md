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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R42PGC62%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T100917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCebaouWkM3qU8qJQRz%2F2PvZA6%2BvLch9Q%2Bt%2FXqmkhJx2wIgbVD4AXAIQ%2B9klBcdZrAIJHx1nsENny%2FJYpIdSO3mtlAqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSjNZLEBuM%2FD3IwSircA0z6g%2FXul7GeSVngTNBnbfu5BRgEzc8T8nx%2B4rAcT9%2FXICrzDg%2F%2FmF%2BAZC7hcYeNfQICV%2B5Fa5iAgan3Jk3mlqclfa9Qv%2BJXjx8ey2tEhbEGysroONbNMaJPLGahdfX8XD8SlpnrjqOD2aMU2TvPxAfd%2FYIbGuFraXVfALH6Q1VniK87jL7Y0TkmZRhIW1IktYeBiFUo4huzTzSxx50yxvHburkdMbfK1R677WUIISAlN8gRmGfdZt7DP%2FOkWRa5%2BbrdT9XJ8rh0kqrtuiHRlFJjcN77dBGoazuVgNqAW0X3c3dL10wLrbneSw2XJS9LjvvnwFCLCo6b2vdiVJftpchcHQW3YyMAEnPcCIZS%2B8g9Nt4U9BFHUAF7YIkGXcjT%2BopRGfHsJkUQbnCKYZDSiOmZSoCctz7sc6B1MzOSZmY2BtI6ybGSUxv5pXpbWr8I4Mx%2FzC0Cmt1%2BZPZy8oAuh358KgahW%2BUXw2ZCUejWKV1I0r2ypuklQDUE5ATyc8jHbHldvz%2BRAUKtyAt%2BHH1jTkhpJi2xMgTio%2FRlB7IOh%2BeOnUWxnAJhRQ0ny4p4EChIxdW3GDEU5KrLx3O3u2eRKJ%2Bz8pxDbtgr%2FjavCGopozvuSk18XbTD0nfi3fDyMJnFhL8GOqUBnbmglbwNIKWgT5BI%2FP4PudNi5Ez2joQ98u4N9%2BT1JeaB2VtDvl0sJB1CyHVgGG48Cdq5RkcS%2B%2BZHRnGgdIdDbPk20qA%2B0ENQeVSaap9ot4%2BZZCvtR4inTgQMomkFsbvFB4Zx3bJxfNhajbMtVJ2U2y4%2BJJQKBRZtqfHUJYTmm2EDZAnBowLQPY3VtqLLK5BJmmOfgsDBCME48LGPCy4j8%2B5jQMJ%2B&X-Amz-Signature=f8f9f60a7f9e795d3edf9fc457f5bac8d6ace9f115bc20aaea358fb722d4419a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R42PGC62%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T100917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCebaouWkM3qU8qJQRz%2F2PvZA6%2BvLch9Q%2Bt%2FXqmkhJx2wIgbVD4AXAIQ%2B9klBcdZrAIJHx1nsENny%2FJYpIdSO3mtlAqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSjNZLEBuM%2FD3IwSircA0z6g%2FXul7GeSVngTNBnbfu5BRgEzc8T8nx%2B4rAcT9%2FXICrzDg%2F%2FmF%2BAZC7hcYeNfQICV%2B5Fa5iAgan3Jk3mlqclfa9Qv%2BJXjx8ey2tEhbEGysroONbNMaJPLGahdfX8XD8SlpnrjqOD2aMU2TvPxAfd%2FYIbGuFraXVfALH6Q1VniK87jL7Y0TkmZRhIW1IktYeBiFUo4huzTzSxx50yxvHburkdMbfK1R677WUIISAlN8gRmGfdZt7DP%2FOkWRa5%2BbrdT9XJ8rh0kqrtuiHRlFJjcN77dBGoazuVgNqAW0X3c3dL10wLrbneSw2XJS9LjvvnwFCLCo6b2vdiVJftpchcHQW3YyMAEnPcCIZS%2B8g9Nt4U9BFHUAF7YIkGXcjT%2BopRGfHsJkUQbnCKYZDSiOmZSoCctz7sc6B1MzOSZmY2BtI6ybGSUxv5pXpbWr8I4Mx%2FzC0Cmt1%2BZPZy8oAuh358KgahW%2BUXw2ZCUejWKV1I0r2ypuklQDUE5ATyc8jHbHldvz%2BRAUKtyAt%2BHH1jTkhpJi2xMgTio%2FRlB7IOh%2BeOnUWxnAJhRQ0ny4p4EChIxdW3GDEU5KrLx3O3u2eRKJ%2Bz8pxDbtgr%2FjavCGopozvuSk18XbTD0nfi3fDyMJnFhL8GOqUBnbmglbwNIKWgT5BI%2FP4PudNi5Ez2joQ98u4N9%2BT1JeaB2VtDvl0sJB1CyHVgGG48Cdq5RkcS%2B%2BZHRnGgdIdDbPk20qA%2B0ENQeVSaap9ot4%2BZZCvtR4inTgQMomkFsbvFB4Zx3bJxfNhajbMtVJ2U2y4%2BJJQKBRZtqfHUJYTmm2EDZAnBowLQPY3VtqLLK5BJmmOfgsDBCME48LGPCy4j8%2B5jQMJ%2B&X-Amz-Signature=0c097a6acfd9eb7325d89a5d698d058e231ebd920b0b8cf038fa8723a4edc1e5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HMA5IP4%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFmIPaGqFKW0AqMFJzzWakdYXaJ8kaINt8v2vFSFlryAiEAj5JPJnn1NNz33KvzKs74Qi4ZZVE4WJcdIK2gLbrsTEkqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSQ9Sbnltuq27D0eCrcAyBo3BnVhy57ReVaU9YwYfGMcjB%2BqldqN2P0w%2F3mBRB%2F4GcXCxqRErrdpoq0RKPRDyFWn8uXxmd%2ByaWB8qbzWeGHapoxq8BZAIQVe4%2BOCHZ1xeKGKPNpUM5iLId4wKbRsrOWrNjDo%2FqLFa72y9lHAPTfS8fDUBpVCcgduH0MWYdjqHgdPtH0uA5McdaU1080iAuvWBbf8P4rRmOB%2BhQrnz1vV%2BelvUfFT3R%2Brqwm3AChBwwSsyXUhj9dxqwWgc4sQ6oYID%2BMuBeAeUP8zU2%2BKfYh%2Ftmxsyy5dsXLlc6aKniz6RscT2Pb1xIG8T8D0nMjQOu5pHNqVJFkGZyXSR4efyop2ej9LX0LNnEPK%2B%2BAQvX6NsDp6ntjqC0Wtq0sm6236iwiEOXruKg7YRligXBJnxbhqIOqDk1bBW%2FWAz5L7DiYAk5aLlmdrEUW4msp3esYu%2FAhIPzq7mDgt4H%2BjZxiQUv9zpF9Wncx58W2eZPhUaB3ilzY5Epe5o89zNFNq84ISFobOv7MtcPB5GiIhw1s6PYKK2f%2B2vX9GBRQ5mPIxHs%2FKVXLUUEAmKAqFwlgVPOHC3KeF8o%2BlJ1VCMUGskAbp8BN69CC2Ftr4CSe35QUqb5EIf0UdN5BM86cEZYYMMPEhL8GOqUBrhj8F6dsZ2QwpNzcmxg7ajOQl6jJekphZCmhCGP4WfMhwLW0GIzF9RQcPlFKka9HbCsAGsUv%2FfDJMzRo26VN0VWu7BkXIIKXzpzCmBXhqfJ6W9kSoxVV27aqlk%2BsuEqtgo5jf%2BZjujoQHTUo7oYJ%2B8nMUAmJazeR2Rs%2BSnR6x37JLS%2B5XjXCZeoPaimQUi4MemqDvODqOtr4OHnX8Gd7RpIm5gF3&X-Amz-Signature=7bfa0e333cd3128ea389c1386bb52d5d8324514a8c231ab628775df4f3b21816&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTBRYQQT%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBYgGnV23aVDfkEAyxFvaCJa3FzRS0QnjX%2Btd97dlF4sAiEAlcjjka89LTp35GlQ5fiNzsC0kMviF3zJR7lJsbM9YoYqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyeOzrZeGS7MQoyBSrcA2R7Z3j1SL%2B1ls4TfAjaQCHtaMFXJfiN56hW0dZhuWCpDTWFrU%2FIGDyVYFnTXboBRSQyp3hxYw5p9dRwmo1E4Gpa8vFCV0mR0nSQ5gP8TRmfUMkbOOOW7wY6giAFKLetz69l3smn1xMoz0%2FtrB9fULjCqhImpSqIlxRJ1hTL%2B0N8xzX8vk6FvfZ7G6c6wKSTWcTnufN4E%2FLbQuH1CKMO9c3NhQlqNbpeOeXvcwMw9Y7qpub1oXLUazvqbeAroUJ1mYvDajnE7Rxng0ByaCixLD7OTp9Yx8h2Po9KRJxNs2UnHIIiPpTA2945Irv6ksB%2BfTmme1nBbv%2F3GEcbD%2Ft%2Fp6BXPxuShmE9UoOTDU0L%2BatbuMsqM0b%2Bhso1DUtVk2TWJdswHysIVCQpb7sifRIRy0mkrnFY8mLAW1xuEELkFldOhICPHU2ipM7m2aPymL%2BBEmnNFoPYxPpf0ndi6dJLJGBCzbGJwFX28ovfAr1auN4%2FGOaMk7euMzC6%2BkDybENPUSQq9VQa1cJoVKhbTu1vv0Hw5z2V64UvQu3XdJ6cIL8GyLgieQTx1beKBdXWTh2x4A0UtUkAmk6AhRURalQOOdJlVQBtCfrj2pZacZZMTFrYzPV%2Fe17DUkpFB92xML7EhL8GOqUBjYl6K2xAG%2FswLWTfPRXhC%2BVMV16EIei4buDnK2JTPlMjxfzwxYW66HzTyrVeG1LCUU4Ldi5gqAYyThrEeMvr2hcp%2B%2BznyrLRrBCkNunq9TvR9eSt%2BpF7Zs2d7WOaZ9E20l1jAvsy3s%2FZPe%2FmBChIG9xNVFw2U%2F%2BjBzVYDI2wTn%2BkLPSx83DuHR947D%2BzPmLRRW3wXyAuAvNHo%2BbBuAC%2BLQWI6m6o&X-Amz-Signature=54fdce83f36c28c6e0b8eac8aae05d75c8e5dfd3862991ed57b0f8514fba1bac&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R42PGC62%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T100917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCebaouWkM3qU8qJQRz%2F2PvZA6%2BvLch9Q%2Bt%2FXqmkhJx2wIgbVD4AXAIQ%2B9klBcdZrAIJHx1nsENny%2FJYpIdSO3mtlAqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSjNZLEBuM%2FD3IwSircA0z6g%2FXul7GeSVngTNBnbfu5BRgEzc8T8nx%2B4rAcT9%2FXICrzDg%2F%2FmF%2BAZC7hcYeNfQICV%2B5Fa5iAgan3Jk3mlqclfa9Qv%2BJXjx8ey2tEhbEGysroONbNMaJPLGahdfX8XD8SlpnrjqOD2aMU2TvPxAfd%2FYIbGuFraXVfALH6Q1VniK87jL7Y0TkmZRhIW1IktYeBiFUo4huzTzSxx50yxvHburkdMbfK1R677WUIISAlN8gRmGfdZt7DP%2FOkWRa5%2BbrdT9XJ8rh0kqrtuiHRlFJjcN77dBGoazuVgNqAW0X3c3dL10wLrbneSw2XJS9LjvvnwFCLCo6b2vdiVJftpchcHQW3YyMAEnPcCIZS%2B8g9Nt4U9BFHUAF7YIkGXcjT%2BopRGfHsJkUQbnCKYZDSiOmZSoCctz7sc6B1MzOSZmY2BtI6ybGSUxv5pXpbWr8I4Mx%2FzC0Cmt1%2BZPZy8oAuh358KgahW%2BUXw2ZCUejWKV1I0r2ypuklQDUE5ATyc8jHbHldvz%2BRAUKtyAt%2BHH1jTkhpJi2xMgTio%2FRlB7IOh%2BeOnUWxnAJhRQ0ny4p4EChIxdW3GDEU5KrLx3O3u2eRKJ%2Bz8pxDbtgr%2FjavCGopozvuSk18XbTD0nfi3fDyMJnFhL8GOqUBnbmglbwNIKWgT5BI%2FP4PudNi5Ez2joQ98u4N9%2BT1JeaB2VtDvl0sJB1CyHVgGG48Cdq5RkcS%2B%2BZHRnGgdIdDbPk20qA%2B0ENQeVSaap9ot4%2BZZCvtR4inTgQMomkFsbvFB4Zx3bJxfNhajbMtVJ2U2y4%2BJJQKBRZtqfHUJYTmm2EDZAnBowLQPY3VtqLLK5BJmmOfgsDBCME48LGPCy4j8%2B5jQMJ%2B&X-Amz-Signature=e12d7ac0dbbb5d0dd7ccf6babcbe1dde2bb4b6962c186b46a8999e0023b1227c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
