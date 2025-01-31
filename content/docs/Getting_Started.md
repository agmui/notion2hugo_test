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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FX3WYSJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T190059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfQYYtD0dsXMR8fRN%2BFxnWDkmuq65bFMe8W9dhAOSB9AiEA73aZ4azq77p081CBN6R65JGPSYYzeuHOygLnjCPMpnIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVwMgphh2QyzeiVSyrcA0aHYv3j3F7aiu3uSNgjrGGUd2jNWOJaE96QkvY8BTEc%2FGr9Wqhz7YO%2Ftz4QPzPchgD4fNOsmVuqzgjm%2BrP1V08Dk5G29IoEcblXwpR4EMLlhp%2FS77ePYx5CfC%2B4MIaMKHsexhE%2BNdPec%2FSZjQY2kFkPYPuWGXPkIMBbZeJw0VYJB8OghOaFrXrc9idlnSJBaiIS5wvtq9%2F9H0ZtDdBFx4N5oU8VT09U9b%2B0rfCfnU%2BOY5KHFr1CFF%2B9n0eJExc%2Fy2xLoMxeUesPtQcnL0XE8KfBPR8YVcD1fkwim4rMGWBfo9ZMzMJ7ErZ3lzd8YCxL73LnLmEA0BVrTBHgjFJWV4jVy%2BgVgXc%2Btm2nVEtzdRXABPnwfT2LaxSqYeRv%2BFiNpHWHka%2B201FRLtGfVIqhPSDlQcRMRcq47ieHzxYNzEZRX%2FQwjMiJsrREzMv7BEPUnBquFW0iQWxhaRldNjhOJ1PidHFMfsBhKltmTWphM29x01UBE0qsmDaeKHP6rAH6ke4GhbVMAV%2FnVIvnXSIB6vsYb0nxGYiueDQ3vGA0elED3fatth03D1KIeWgYhoDJIuCH%2B310gQ3fAAnElUaQOH3Xrb74Wh2Th1uVhT4fl7UB%2BTzQTrOPpNYUofXxMMil9LwGOqUBFthHyw5Wej9nB2U03nTS%2B4BOEwO9xHdgECBNME6TAYVI88VnTdt2nY64H6RdXPzc0rUlpCiAfCXwzs7XOmz%2FOC9avgnEG0BuGU8jJI2DeJdQ55E51Ri95aIsouW0fduQgCmbFujGE77I92IB%2Br76R7ej8FakpuLGIUE3QKNetu13pSKhtW%2BW6YeUe1unOYPIq8aDk3borhSeLD6BMaC89emR4vCg&X-Amz-Signature=66952a80d0e6a775f320b060cb323f998194685c64f20925b962b4d2a809e3c8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FX3WYSJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T190059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfQYYtD0dsXMR8fRN%2BFxnWDkmuq65bFMe8W9dhAOSB9AiEA73aZ4azq77p081CBN6R65JGPSYYzeuHOygLnjCPMpnIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVwMgphh2QyzeiVSyrcA0aHYv3j3F7aiu3uSNgjrGGUd2jNWOJaE96QkvY8BTEc%2FGr9Wqhz7YO%2Ftz4QPzPchgD4fNOsmVuqzgjm%2BrP1V08Dk5G29IoEcblXwpR4EMLlhp%2FS77ePYx5CfC%2B4MIaMKHsexhE%2BNdPec%2FSZjQY2kFkPYPuWGXPkIMBbZeJw0VYJB8OghOaFrXrc9idlnSJBaiIS5wvtq9%2F9H0ZtDdBFx4N5oU8VT09U9b%2B0rfCfnU%2BOY5KHFr1CFF%2B9n0eJExc%2Fy2xLoMxeUesPtQcnL0XE8KfBPR8YVcD1fkwim4rMGWBfo9ZMzMJ7ErZ3lzd8YCxL73LnLmEA0BVrTBHgjFJWV4jVy%2BgVgXc%2Btm2nVEtzdRXABPnwfT2LaxSqYeRv%2BFiNpHWHka%2B201FRLtGfVIqhPSDlQcRMRcq47ieHzxYNzEZRX%2FQwjMiJsrREzMv7BEPUnBquFW0iQWxhaRldNjhOJ1PidHFMfsBhKltmTWphM29x01UBE0qsmDaeKHP6rAH6ke4GhbVMAV%2FnVIvnXSIB6vsYb0nxGYiueDQ3vGA0elED3fatth03D1KIeWgYhoDJIuCH%2B310gQ3fAAnElUaQOH3Xrb74Wh2Th1uVhT4fl7UB%2BTzQTrOPpNYUofXxMMil9LwGOqUBFthHyw5Wej9nB2U03nTS%2B4BOEwO9xHdgECBNME6TAYVI88VnTdt2nY64H6RdXPzc0rUlpCiAfCXwzs7XOmz%2FOC9avgnEG0BuGU8jJI2DeJdQ55E51Ri95aIsouW0fduQgCmbFujGE77I92IB%2Br76R7ej8FakpuLGIUE3QKNetu13pSKhtW%2BW6YeUe1unOYPIq8aDk3borhSeLD6BMaC89emR4vCg&X-Amz-Signature=3a953877879bbda65e309b79cafda69a943b3a8ec885eb39cc7e801e6a7c58f9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRVFJRZV%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T190101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPS68DgjGvud24jrQWfFUXupwFKooOJtBF9iQGuOKufAIgZ7aOkcyyqpUD3NvP6wPqmOHoboasPmECtVAYVwkk4zAqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMFUVGyFeuJkzvtTSrcAxUgtZ0KxZuxpTr3XWFXFW1u0UZy04kw7pn%2BXOpKvpBNp83y9L4r3fuPU2Ppg4SXkphyFcIaCsr2uAUX13Bwq7QhM0vRgDgq2QtY%2FOjDsjmE92m6RGhSL0E9aNgA15xoZ3GAA8b7rZEhqA1PR6%2FZUX0jLJHCXrBK5C7CDVsajj5HomVOf%2FnvGVJVsAnFet03vPHr1mLWVBH8GYOHyO%2B8y0aPTI2k8DkPuaUxRzew5KfLChZw%2FXoJeK0kdrqYQQw00oOPt2WsX%2FGEtFbPX%2FglbZu7U4r80wdWgz6T5%2BVlNKRVpPCdFLCa7iTqcTaqoLdOt8beFOZQI7MDDz2J5knnFB4G%2FcdsVdNoyQN2T0YE7bk%2Fw7G8IEFp0cWxklYDB4Ok3DNxaeg6i2AL3LHql08FiDpcyMDhe2h5KBlqQOc48HRaqryUWegipZ67iJenmdDWbCU45catPUykT7uV6t14R8Hc3fXsdSlMqQ3Aieb05QbB2yDEIQfKWICBfb0gi9Ysp9F%2BJUY3gQKfvCghgB5q0%2BXpq8ZQ3RedgG3EVl7pyrA1sLCQqRp5Eg5As%2FS%2BoViDTQUd3FlTdQxNOJdQmIAcJ4begSWeuz2VvFGRSYOH6RW0Nit79dU4eFJx%2FskeMMOl9LwGOqUBbwDxIm9ddGQ3X3IohiGsitzeowZOo210z0B%2BW%2BKxl4jbv4EXSbRiA2S3jSDcXmwhS4kLl%2FhtSFcx0ThAb5a4zYMZwckFkpJlhe%2BoT116BS7OAuE83ZS%2B4%2Fn95JGbIvs3hZwecUNX1C49jmkAv2%2FfJuHo9bCIoK4etFJsx6WhZ5j3IZVDEIHL8ycL5r7eoO9bkMyDfOfsPK3jLjIyl%2B9ks%2Fh0GsIV&X-Amz-Signature=de8a982bcc8fe94174d5b1c0704a71e8b0ea15e64108dae36cfbd1db393f7cca&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUJVBT5K%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T190101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1YLaNV4feYJ30sw5pAtslZmTLgVe5SsfXyVB8sEHXEAiBawwtbRXiVIpwX7%2BmC2ijF029kh4u8dHXsVjtLeF7bDCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpcrAcnChmQPsBYozKtwD4yKvDKdTKFkTk4HyeJhyjW%2BSR5yAGkvk%2B2zHb8pG9O7h%2BlVcPIFiKl5hJ%2FY28194Wojrarhq290PGGMkLzo6cFpGG2QHcjFH5h483SUIUlYFk8Jnoqs6ePPkVSBfh26G1QPrnHoYonZiS9cQjKiWeyaSvh810kmeXFlOgDouDNIsYO7lSeb836ibMziWgwkL%2F07M3nHk0dAl1rbGNloZc69R5ECtZ3uTI%2BO1t3v8LbcBKVTuQonJ%2FjSXJUGW84TL7LdBxoHqKslLm4ifS7g0pZ72Hox1LNGlwFSLO33MquxU734DtsXWRkeVKucaKD2BHY05q%2BUeIVxRd53kRG7dcpCQGRa9G12nzx1vaDPzCC9qa5ygTscJBGmelDMRKPR9fIsbCnPR6i47Y%2Bm6vlLFq20TNr0k7Jzd7cSR78OOlCE4VQovkkpWPJ6bfATc5H9swrs57PROhxI9U7tnOt%2B%2BOoYN8yqWkeh8%2Bb0PXhRYFQOFu2EvgWCsSsdCuW0OQvw5k9JDGpq2sK3vnnrlHxeZbiSud2xZHGNHsfPG%2FonEuteLye6QC0KFAnDBERY9HehN8FBJof4RJxYfomIMOjtMLJXWeEO0jQWcSMBMMrBGZYI5ciL2WndKZ25nU2Yw96X0vAY6pgEKVqVWkOhz4V10%2B%2B84dvn25DYOiE8hLSAujdrp6UFu%2B59ZRkavsEIg8Rp%2FzjIzjSabzxsp29b4Fg0JZQWtiz1XSA4LjFVEaPaKoTCGepbJvtA7wVCejUwLhaoeZ%2BJylszyhKd%2FZ6PxAa37DXVJ2FT1XvRdJ%2B9whOBSFPotmjI6aME525wuf3%2BPeSRartJfo9OEXGqqvPHA68DeNwOIjHzWyOimrs%2Fv&X-Amz-Signature=e2c413bdac80ead3f65f7fafbae294dafd26407e1447cb9f361b5e8641b394df&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FX3WYSJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T190059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfQYYtD0dsXMR8fRN%2BFxnWDkmuq65bFMe8W9dhAOSB9AiEA73aZ4azq77p081CBN6R65JGPSYYzeuHOygLnjCPMpnIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVwMgphh2QyzeiVSyrcA0aHYv3j3F7aiu3uSNgjrGGUd2jNWOJaE96QkvY8BTEc%2FGr9Wqhz7YO%2Ftz4QPzPchgD4fNOsmVuqzgjm%2BrP1V08Dk5G29IoEcblXwpR4EMLlhp%2FS77ePYx5CfC%2B4MIaMKHsexhE%2BNdPec%2FSZjQY2kFkPYPuWGXPkIMBbZeJw0VYJB8OghOaFrXrc9idlnSJBaiIS5wvtq9%2F9H0ZtDdBFx4N5oU8VT09U9b%2B0rfCfnU%2BOY5KHFr1CFF%2B9n0eJExc%2Fy2xLoMxeUesPtQcnL0XE8KfBPR8YVcD1fkwim4rMGWBfo9ZMzMJ7ErZ3lzd8YCxL73LnLmEA0BVrTBHgjFJWV4jVy%2BgVgXc%2Btm2nVEtzdRXABPnwfT2LaxSqYeRv%2BFiNpHWHka%2B201FRLtGfVIqhPSDlQcRMRcq47ieHzxYNzEZRX%2FQwjMiJsrREzMv7BEPUnBquFW0iQWxhaRldNjhOJ1PidHFMfsBhKltmTWphM29x01UBE0qsmDaeKHP6rAH6ke4GhbVMAV%2FnVIvnXSIB6vsYb0nxGYiueDQ3vGA0elED3fatth03D1KIeWgYhoDJIuCH%2B310gQ3fAAnElUaQOH3Xrb74Wh2Th1uVhT4fl7UB%2BTzQTrOPpNYUofXxMMil9LwGOqUBFthHyw5Wej9nB2U03nTS%2B4BOEwO9xHdgECBNME6TAYVI88VnTdt2nY64H6RdXPzc0rUlpCiAfCXwzs7XOmz%2FOC9avgnEG0BuGU8jJI2DeJdQ55E51Ri95aIsouW0fduQgCmbFujGE77I92IB%2Br76R7ej8FakpuLGIUE3QKNetu13pSKhtW%2BW6YeUe1unOYPIq8aDk3borhSeLD6BMaC89emR4vCg&X-Amz-Signature=91497613aea473b53a10e11d2b23951cfff0367bdfbe18261530956aab4e5ead&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
