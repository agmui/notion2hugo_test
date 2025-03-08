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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642LISTBD%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T040743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIEMiPKUyiTfEPiqIN1br52LFNChFL05L%2BG9jpQrE8GANAiEA403V42nyZf3wOL0PQTyIEXO%2FUCJ0C8JsLQPFEpVsgLkq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDO8hDjI%2FPpkTz06FDCrcA7rl4%2FSs1flT%2FnTZmcfFYF3zijshUmnTXM%2BynGxa9wKRmK4HpQMJ%2Bj6qGExTbfsUf1T5X294ELtIE2AZl435EtRKXjF1MGpxAWTYl62pkwuyu9qk62Xw2j2fmJu9LjXgP9aE8vQF0Lk0MjO80MhtfjndN5XaH2lhFtC25niW5lQV6TGuxAoCL%2BaMK5HeEmcJJsRNwlpoQ%2F%2Bm4IvlYCH7dNsGNLMUYRXlz6Cz3dnrA5nelhwhrmQBiKcGwaaTuRwSCglZOjsP%2Bkk%2FMR8SPyaGBch%2FPoI3P21KuaUx11csjnPvNADxxgz%2Bx0agbsNTw6kw7CtIBAIzhnUxNnIUGsY3kiGjk0vaCcnhdeUhn8X3PdnMnyoGhUpy7IJKJvHxmUNLzfkRAsdyLQsHuCujW1Wigxx5%2F2qtxKVUXTPpuLPTPnxurH8RlcoWZlLuUdUNqrNyQS5IXNdxMU1t2DlcZFIoSKJtgthAc9Hj0oWO%2Bu2jKUH9E1H2XEDzKNWYs%2FLaC1M2eESnOPp2ocuMFgnhzDA%2FNEKwWwoQduhJzYzub43mCaN9Cj%2B2Dfrjrsm7o9e4%2BKzrQA1y9ve9kv56Ov%2Br%2FZurISWfCDgDTGFEKqZzPvsy2zVxY1GDwZgjrNNWv9ZjMMD7rr4GOqUBN1uDcvCt728VnYlb12A9GvDoSOQq65bKTtmgKDc9z73pZEEsHohceXcZEJVzUlNHEE5Ua6LLGtQiCxCx5SsJO9gwxYrQ16uQr0VnQP%2FLaRSxQgOKCnJWDDex44dT05gPYLqPH9nHR7XzrtJcZv5OSeATEp3XRJiK5oy0NsnAWSbd4tuUH6NLkr%2BkgaSvDWJTH%2BCYEwzOaLhMixD0bxa%2B66FEQBgJ&X-Amz-Signature=bfdd93b239bf539430f026b721152010babe30b8ce84cfc9af3434bd667572b0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642LISTBD%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T040743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIEMiPKUyiTfEPiqIN1br52LFNChFL05L%2BG9jpQrE8GANAiEA403V42nyZf3wOL0PQTyIEXO%2FUCJ0C8JsLQPFEpVsgLkq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDO8hDjI%2FPpkTz06FDCrcA7rl4%2FSs1flT%2FnTZmcfFYF3zijshUmnTXM%2BynGxa9wKRmK4HpQMJ%2Bj6qGExTbfsUf1T5X294ELtIE2AZl435EtRKXjF1MGpxAWTYl62pkwuyu9qk62Xw2j2fmJu9LjXgP9aE8vQF0Lk0MjO80MhtfjndN5XaH2lhFtC25niW5lQV6TGuxAoCL%2BaMK5HeEmcJJsRNwlpoQ%2F%2Bm4IvlYCH7dNsGNLMUYRXlz6Cz3dnrA5nelhwhrmQBiKcGwaaTuRwSCglZOjsP%2Bkk%2FMR8SPyaGBch%2FPoI3P21KuaUx11csjnPvNADxxgz%2Bx0agbsNTw6kw7CtIBAIzhnUxNnIUGsY3kiGjk0vaCcnhdeUhn8X3PdnMnyoGhUpy7IJKJvHxmUNLzfkRAsdyLQsHuCujW1Wigxx5%2F2qtxKVUXTPpuLPTPnxurH8RlcoWZlLuUdUNqrNyQS5IXNdxMU1t2DlcZFIoSKJtgthAc9Hj0oWO%2Bu2jKUH9E1H2XEDzKNWYs%2FLaC1M2eESnOPp2ocuMFgnhzDA%2FNEKwWwoQduhJzYzub43mCaN9Cj%2B2Dfrjrsm7o9e4%2BKzrQA1y9ve9kv56Ov%2Br%2FZurISWfCDgDTGFEKqZzPvsy2zVxY1GDwZgjrNNWv9ZjMMD7rr4GOqUBN1uDcvCt728VnYlb12A9GvDoSOQq65bKTtmgKDc9z73pZEEsHohceXcZEJVzUlNHEE5Ua6LLGtQiCxCx5SsJO9gwxYrQ16uQr0VnQP%2FLaRSxQgOKCnJWDDex44dT05gPYLqPH9nHR7XzrtJcZv5OSeATEp3XRJiK5oy0NsnAWSbd4tuUH6NLkr%2BkgaSvDWJTH%2BCYEwzOaLhMixD0bxa%2B66FEQBgJ&X-Amz-Signature=286008f56c6425963000b50f2f76c6bb255f61c7c3221b35248729e5fe13a459&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5QUU5U7%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T040746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIBwufet%2BLlY9w2wws%2FenigTgZku%2FvbiaO18dgP7jnt9AAiEAjSnsaWpVC%2BWpnZZXCf31ncKucXV3Nh%2FdXf4dVcvDvX8q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDPF1i14wPvD%2B2vBmbCrcAxtOa1o0WlBY%2FlJKgHgWWVHhltKxR8lg2bTK%2FvYapqHdGWn5WsQiQoV%2BkT7UMrP8PVqHTp0l4XsyoG0T7e00LPM%2BLfPSbTgjfv8r06jX2J1862SLyYiUT3fgCqWgsOzV6hl3M8BJ4RYGs%2BLr6Ztn2rj48SZRvEmnda6OP74%2F2eXoy0MYu%2Bl8LY0LPJQHo8zlDOz1mJE5a7vIPpCZNIMGDeBeclW4%2Fgm%2BkK3BufLV1iLq%2BzRY%2FdP2WDUXBwQy9DVB9tJ62vz16szH%2BC%2F8FqOf%2FYnPWkdeBLb76Aunu3PvQ01p5vM79qUR19KPFuX6MHPBncc4oGNR8DdjjpLPt%2BSfySQqF8Z2GiNVQfeqKraQJUnWPUt2xTP4wffkYgL1GOUfb7TW6JOIaxY%2FiimYfivMjWTEJt5HiXEkBByqtCtC%2BSBzI3zSMWG9jDI89ASLhaa7cZvalcb0mHswh%2FggriaI%2FRlw0uuW1sYKa0t4lDb%2Fft0cQtgEu%2BOQq%2B4MgYl8AlenBPNuyi4wYIIl1r%2B%2FtnLx8Qjg1jkV%2B2taq%2Bt8dxi0F0mqwZSVcrYAQAXlbrn2wTkEmyzVL59EEY4CzTECXs1BVHa56tZL8KmipA429qAG5HH4s2mjZCwZsCZN9KnQMI37rr4GOqUBVDWzo4wHaLu%2FGE6FHY5KfAtlMsaw%2FiMcJYRd86hHU19jAfe3kN9zM6GlH1aNhcgkyXuUBGsP5d17tReZBEe0g7e7EHAlTH3oeOLm4l7SelM4ViZTXLtOLMBhjJbJ02txgFH32IB4vcSBKWWBb%2BIFuk1HeiJQfLJTQKvg5TOtt1goKMLgVQxDOdlI1d9BqLFx1kZSa75KnX%2BI3bsUCsSOrbBF%2Bfxu&X-Amz-Signature=aecb3a8b9b220323558fa4ab4954427d204d50f1d54cfad23570e03f6a484ce5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYLS2HCM%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T040746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCCKNebLoR6B1S1Kn9iBddLYW12tMMdyv25J6DWt52GSAIgexxXhw4WcpwBtvqkMqnLs0OxVRxCK45I6SLs986GRUwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDGyL50ZcyfedytiEJSrcA0dlpZq%2FWLLgu6HuiCE6%2Bh9H6pB%2FjA38xG0tImkVT4qkZ02R9dDfqS2Ui5lX9LOKe6jj7ei6L5aheodh3Fcn1gf6dK2elNSgDSLrczC7B9%2BAiogvgLEmZcN3Q3yEEZz5gr%2BrK%2BRgPiooFrOfbD9SjDCNxx8Frz08XAY1UoCob5OgTEf6ZYySFtEV6inyQoug5pjLb1Utv4dEnyM8FAAVm%2BGw%2F6R6cRRMTF%2BGssUsTkUZbO1g1uwol2EfrHO4yxs5xU7xBugnCPuBY7kw5AkF14sU3AigX%2BZC4Aj1G2wV5lYWspwnstld4lo1HJrFeD%2BwZBQtogiBUZPrBNRVGU1nUj4qQ%2FBNlfG1LQPmqf9qOBtXc5z0exu52oqIJwCxlpbdHiGzkFigeuTN75LWwIP%2BcDF8dGUJY7SpaLbXN2kCzbSHhLun%2Bpw8qi2iK1cMKnF7nhJ%2FSXGLgv%2BsQlRe3XLcO2m8f%2B3F8LIIUEePaKxE0uc8ukAB2Zy%2BQC748iFU4K9LVGSZuYztyFqvVHI%2B6ddVN9fp0uOOt%2FNvfBqSdAb1w3pzD7iAy8s4OxP4%2BJT%2FQTk55pquxEYm2hCoaBzUmjhAf4ehQMnX0boj6yWcM8NmGwflIDzZZkPrNQIO9hzeMMf7rr4GOqUBLhTrRvG%2FQP3jzOTylCVFEPoEEg1hy0mldM4XOq8PKE4fYEqRpxBKxtRGF87C8ZRQPOn8DC8pJeFEdrkcwwR5%2Bk1wdtajWWSws9Xwz7i%2FPNAr%2FrUnOekFB7HW5pfAC5c24ioKp8jF8QhwqTvZpGmYyVajxsYCzaSnut24aJ3rRV4969tmNvUDojEUZOmtEItPvf0PIAQvR%2FFl6cwA3oms%2BOWnCrD1&X-Amz-Signature=b77eb3511b331f5cc047e9a57e15b590c387a7f6fa392ddb1558bf31c19a64f3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642LISTBD%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T040743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIEMiPKUyiTfEPiqIN1br52LFNChFL05L%2BG9jpQrE8GANAiEA403V42nyZf3wOL0PQTyIEXO%2FUCJ0C8JsLQPFEpVsgLkq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDO8hDjI%2FPpkTz06FDCrcA7rl4%2FSs1flT%2FnTZmcfFYF3zijshUmnTXM%2BynGxa9wKRmK4HpQMJ%2Bj6qGExTbfsUf1T5X294ELtIE2AZl435EtRKXjF1MGpxAWTYl62pkwuyu9qk62Xw2j2fmJu9LjXgP9aE8vQF0Lk0MjO80MhtfjndN5XaH2lhFtC25niW5lQV6TGuxAoCL%2BaMK5HeEmcJJsRNwlpoQ%2F%2Bm4IvlYCH7dNsGNLMUYRXlz6Cz3dnrA5nelhwhrmQBiKcGwaaTuRwSCglZOjsP%2Bkk%2FMR8SPyaGBch%2FPoI3P21KuaUx11csjnPvNADxxgz%2Bx0agbsNTw6kw7CtIBAIzhnUxNnIUGsY3kiGjk0vaCcnhdeUhn8X3PdnMnyoGhUpy7IJKJvHxmUNLzfkRAsdyLQsHuCujW1Wigxx5%2F2qtxKVUXTPpuLPTPnxurH8RlcoWZlLuUdUNqrNyQS5IXNdxMU1t2DlcZFIoSKJtgthAc9Hj0oWO%2Bu2jKUH9E1H2XEDzKNWYs%2FLaC1M2eESnOPp2ocuMFgnhzDA%2FNEKwWwoQduhJzYzub43mCaN9Cj%2B2Dfrjrsm7o9e4%2BKzrQA1y9ve9kv56Ov%2Br%2FZurISWfCDgDTGFEKqZzPvsy2zVxY1GDwZgjrNNWv9ZjMMD7rr4GOqUBN1uDcvCt728VnYlb12A9GvDoSOQq65bKTtmgKDc9z73pZEEsHohceXcZEJVzUlNHEE5Ua6LLGtQiCxCx5SsJO9gwxYrQ16uQr0VnQP%2FLaRSxQgOKCnJWDDex44dT05gPYLqPH9nHR7XzrtJcZv5OSeATEp3XRJiK5oy0NsnAWSbd4tuUH6NLkr%2BkgaSvDWJTH%2BCYEwzOaLhMixD0bxa%2B66FEQBgJ&X-Amz-Signature=15af535189ccfb006c2ccec26f6969291ce4180eecded2450abf0dbeea45146a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
