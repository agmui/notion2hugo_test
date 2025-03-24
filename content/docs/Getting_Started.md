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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PNKVV7X%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T022043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrhUrnL5hPbZ6n1TGo3x7YZyLGXk2J044BUQLdXx11%2BAiBiJf1XHBhFPp7WdwGI94yKZmmmTg8en%2B5xjAJAj6wxfSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBXzYAEu2hKIlB%2FyeKtwDu3CQ3%2FZ9e%2FSJn43KB8GYu6UP0K%2BaaM3Mw3eaMn7D0hOyf7RcQfzdiVu4a57Utqal4SY9m2ywArhVQNHPQsYI6iBdC3NegKuXJLNV8LcaSD41z3x6mm0kSSY7fryvnGUItsw1UjsKo4WDhp7os9FEtaMUQQjpkGpwUaBcjUYkLFc3PnNPlamuq6qLelFPJl6Dy7x0KkBNhbw0hVIqZ%2BG%2BfHHmWTOYOdmyR%2FMMbT9lggPMpugrLQwVFjIoq5j0Yd4bXQ6zZTRB4rfNIB5Ioa%2FskhpeU8yyLSVStOTvF8AEz849kviZStat59mp5m16UVfwZzlc3xqj4LFw7VehLGtEKAtWWQNVvkOUb%2Fxentu6oN9NgdjJRj6IWIWMN6Xtk1qoWh69G92yuGu6RyagrWFxgKw3SvROAeGOmznc%2BtUB8BprvAUJo7GnnmMAAkV6AfGuwylpGbz3%2Fs68PDrVoXiA0Pb%2BSQeCGN88njjv%2F2%2BnB081gs4rL8Oj%2Fa9%2Fl56GCDyaTVPmKjzfzW9DqD7Wis%2BxlqgLj4d6Ra1D7YR5K86d5lfFRuwwS2ui2sx7ZHPs30IutNBjv7uZmT1DnJ4IL83gRpT%2BDNXGXjo%2BRPsNpU188QDl1q6K%2B7UY1Tun8Mcw2rGCvwY6pgFhMO1AHqAXDMiDL%2Fxb1Qy0zbkaVuhK5p5NKxgQIia3oK4%2BGrsQxrkQOR1lmM8TA0sa4TWrBQT12OGiCs81q4fwYqg7zWe8MS4JeWOw0fP6IVbPBWuSxzGcJBvbUV96iA3a%2FA%2BaSydfpglD21s7SRu1v3nL3nv480eJ6RS9gNJAInk0OjpJeOlJdXQ3zBAWoH28MA4%2BR7l22oe8tE7ucSlUQjlp4IKw&X-Amz-Signature=95edf0761e12e06be4a47efe9c093990f165382aa77aad96a998f9d135ed1027&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PNKVV7X%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T022043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrhUrnL5hPbZ6n1TGo3x7YZyLGXk2J044BUQLdXx11%2BAiBiJf1XHBhFPp7WdwGI94yKZmmmTg8en%2B5xjAJAj6wxfSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBXzYAEu2hKIlB%2FyeKtwDu3CQ3%2FZ9e%2FSJn43KB8GYu6UP0K%2BaaM3Mw3eaMn7D0hOyf7RcQfzdiVu4a57Utqal4SY9m2ywArhVQNHPQsYI6iBdC3NegKuXJLNV8LcaSD41z3x6mm0kSSY7fryvnGUItsw1UjsKo4WDhp7os9FEtaMUQQjpkGpwUaBcjUYkLFc3PnNPlamuq6qLelFPJl6Dy7x0KkBNhbw0hVIqZ%2BG%2BfHHmWTOYOdmyR%2FMMbT9lggPMpugrLQwVFjIoq5j0Yd4bXQ6zZTRB4rfNIB5Ioa%2FskhpeU8yyLSVStOTvF8AEz849kviZStat59mp5m16UVfwZzlc3xqj4LFw7VehLGtEKAtWWQNVvkOUb%2Fxentu6oN9NgdjJRj6IWIWMN6Xtk1qoWh69G92yuGu6RyagrWFxgKw3SvROAeGOmznc%2BtUB8BprvAUJo7GnnmMAAkV6AfGuwylpGbz3%2Fs68PDrVoXiA0Pb%2BSQeCGN88njjv%2F2%2BnB081gs4rL8Oj%2Fa9%2Fl56GCDyaTVPmKjzfzW9DqD7Wis%2BxlqgLj4d6Ra1D7YR5K86d5lfFRuwwS2ui2sx7ZHPs30IutNBjv7uZmT1DnJ4IL83gRpT%2BDNXGXjo%2BRPsNpU188QDl1q6K%2B7UY1Tun8Mcw2rGCvwY6pgFhMO1AHqAXDMiDL%2Fxb1Qy0zbkaVuhK5p5NKxgQIia3oK4%2BGrsQxrkQOR1lmM8TA0sa4TWrBQT12OGiCs81q4fwYqg7zWe8MS4JeWOw0fP6IVbPBWuSxzGcJBvbUV96iA3a%2FA%2BaSydfpglD21s7SRu1v3nL3nv480eJ6RS9gNJAInk0OjpJeOlJdXQ3zBAWoH28MA4%2BR7l22oe8tE7ucSlUQjlp4IKw&X-Amz-Signature=0bbf173321c9e437fc61459d434e013eea674957c51d31fe9f0cb15fc90aa5b4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KNKX4QR%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T022045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAMUl5Satz15kg02L5ySQWCAq3%2BqJHLfL1ZWvXG8kw4wAiEAlsfnsLBKkdy%2FroBY17iuefMKfEFrpMMylJ72jkhS7F0qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDm7usZAO6y721AdgyrcA6xMDegbWNzLnT5K%2BRxXI6z%2Bnvvg9yOr7TuKJ5j%2BBdp3qV3Q3j65MhMy%2Bn7U88AaguLdo6oTsO2UhhLD6Ksi7Ao77OjXqdwH7rOjxnPMdelcTPWwxsJaC3d3Ka%2BXEplFA7wu%2BnAkQQvaazKEXkrIiAY6qKSJ1%2BPnvDd6%2Bugkf964N3mkb1UhOr4NL6ODNo%2FHMR048iCD5DRUuvaXTdWYJjurWq4Lj8PVAyZczlIvLqNaS2w8Pi6EKBcLtnTKuvqgl5fxCV%2BOyiWInoz3jUogGnQFIo%2FOfCif0OuDV4X9eE68IRQP6Fwi5P9UyKfFhsCB19hnln1y%2BAI%2FOBzgmajVoeVq8VaCR3znXrcqvr%2BrwNDXsV26TXE3TrKHF%2B7EDAqQYsvh03gzVTEoRnB2pYmuVhEHkC43GoT46cVid3y%2BeSkv2gsrvlwtTCObeCMszYF1Uno4vClXInsulyuojuJP1QWUhv4FDwpbds5%2Bpo4G5GxFhvv8inWFbdjznC1JSvMK%2BSGxnNS%2BwnPUOwWDOMqmZswmhGZB73dGAQGouV0WeOi3fjBzxA0ZSLW4kpIqEpUI0YvIrv7lsMbO2YQu%2Bf4RkBIbLtLpKtKw5ALdbaa%2BwmI%2BPJXEEna4mRvEwBs1MNOwgr8GOqUBuiR8aXripXczlrzy8vIdmhu6fWxUlV1O1YhxhP860tPIG3xy6Y6Mgve5qSdt944%2B8xt6Vj5BICtKLwO64OYsXN351ppuXgEeIlSAupIAvLOJdlfMXuG596P6l%2FlLRKmPghpVYiQNo5V%2F43MaxbW6P6cQ%2Fb09XWtNppJ1ie02VdSa3fH2DNuTndkc%2Fb88JRcjeBdXnEKJJLFApfwc27MHnvwDBZMY&X-Amz-Signature=8cb28244be17df537b7259cd6f9d48165d509d2c5edbb2c87670759ac2da2f12&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ2DZLGZ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T022045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4WINIY%2FklhjCdZUxQOf7MpelC5SLSUhg83PEe7fDlhAIhAIvlVNR8MF8A6Ju0WdhDyZ%2FUxarFepTZ%2FTM0Oa1n8R1kKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyM%2BWWQc07b3jby9QYq3AORy5UNAQRDbvrTxniUM7j95q1XWunRskut9%2BzudSXkhcYnxZHTyDa21DgaE3YYX5nhpEAqPNoncBVOoLK3S93Uuhdb7Cbbur%2B2SBSd6IzuvM6EvK6c2VdzvmPo%2Fuzpdj%2FjgYKIlidJri8Ovv7ItobFuDdMYHjdcKmHJ4prcj%2FY9MuzuAM4tZ4B4EXdCRV967sH4JqTVPAEnXA00SMmBDDDhOs%2F%2F4kMRwZbJTaes%2BF1fYZw26QfKgjFuBgbTsz7CDh9kELRK%2BDYGoNcYB0AXv0tLAUYUxcTKiA6U2Oswl9eMFlsTQL3legNZcuEkcbAyS6SzMqpXRrqsxUMea%2Fc2oAPBN0XqjxsqrQ3Ujlhg7Loab83NQlVzG%2BKFIs5EQP3V0XVRORlWyh%2FKbQaBo75Uv8UntN%2F%2B2wvn5qnc4UT%2FdprKkkleCDVHYDVU8kfskqwLJSOPWtr5jfwP%2F0nCulZ982Vmlxux%2BQJKUY3VpVapIZ8TuFQmLYJaHJAqYK5eYd%2F5SOiSWjpCuSBoQeJLly14Muq%2B7dOh%2FcqyrFLDiBomz87lkPXOr02A0Av1wWjdUiNmn1fllVNkt2wxCmLRyxxI50dAmEnCuJQokH0G8c%2FwQK7zi4MU09fDCf0VRVhjTCCsIK%2FBjqkAZKg2EDBRG%2FINYiw624A9%2FsoduARL8mGCRCLN%2Fez%2BfiI7WmygndV5TWJT9Oi7STxG%2Bo2WkjwmtRJFnNW1pbSY2ONyXtCRxfhVHHLVXoY%2BUdL7wDukyp72PPPeryH6J8XOQjJDLRIXCjjl05ClSMve1T77WhbLS8hGX0aeum0UHM3%2B4Jh0FVG38yPrc%2FOEPilG%2F4jgOV3fl6n22%2FKZdLj6JWNkWpE&X-Amz-Signature=3cb34b00bafb272fff393d20770adeef2c55414c490f85e8f87f78437971e31f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PNKVV7X%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T022043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrhUrnL5hPbZ6n1TGo3x7YZyLGXk2J044BUQLdXx11%2BAiBiJf1XHBhFPp7WdwGI94yKZmmmTg8en%2B5xjAJAj6wxfSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBXzYAEu2hKIlB%2FyeKtwDu3CQ3%2FZ9e%2FSJn43KB8GYu6UP0K%2BaaM3Mw3eaMn7D0hOyf7RcQfzdiVu4a57Utqal4SY9m2ywArhVQNHPQsYI6iBdC3NegKuXJLNV8LcaSD41z3x6mm0kSSY7fryvnGUItsw1UjsKo4WDhp7os9FEtaMUQQjpkGpwUaBcjUYkLFc3PnNPlamuq6qLelFPJl6Dy7x0KkBNhbw0hVIqZ%2BG%2BfHHmWTOYOdmyR%2FMMbT9lggPMpugrLQwVFjIoq5j0Yd4bXQ6zZTRB4rfNIB5Ioa%2FskhpeU8yyLSVStOTvF8AEz849kviZStat59mp5m16UVfwZzlc3xqj4LFw7VehLGtEKAtWWQNVvkOUb%2Fxentu6oN9NgdjJRj6IWIWMN6Xtk1qoWh69G92yuGu6RyagrWFxgKw3SvROAeGOmznc%2BtUB8BprvAUJo7GnnmMAAkV6AfGuwylpGbz3%2Fs68PDrVoXiA0Pb%2BSQeCGN88njjv%2F2%2BnB081gs4rL8Oj%2Fa9%2Fl56GCDyaTVPmKjzfzW9DqD7Wis%2BxlqgLj4d6Ra1D7YR5K86d5lfFRuwwS2ui2sx7ZHPs30IutNBjv7uZmT1DnJ4IL83gRpT%2BDNXGXjo%2BRPsNpU188QDl1q6K%2B7UY1Tun8Mcw2rGCvwY6pgFhMO1AHqAXDMiDL%2Fxb1Qy0zbkaVuhK5p5NKxgQIia3oK4%2BGrsQxrkQOR1lmM8TA0sa4TWrBQT12OGiCs81q4fwYqg7zWe8MS4JeWOw0fP6IVbPBWuSxzGcJBvbUV96iA3a%2FA%2BaSydfpglD21s7SRu1v3nL3nv480eJ6RS9gNJAInk0OjpJeOlJdXQ3zBAWoH28MA4%2BR7l22oe8tE7ucSlUQjlp4IKw&X-Amz-Signature=1ff4b63832bf535be60131444aeb84513cf6acbbf5e32f57d232bf052881d005&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
