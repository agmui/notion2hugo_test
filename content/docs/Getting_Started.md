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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVWARXN7%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDl7GKFju6nONCxZzPDuOz%2B3uY9yuv5Ekf1%2BKStxojglAiAYGb04a8cvS6Q31VK9YERxqMCltqZ8VCS72ApYugaUfyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt%2BdHFTd1YLyAsSB4KtwD4tVKR%2B93rqfoaFTzRMpTykzyK81lAYInMgVJRQ%2FtBITGU7lUAALxCLaMRAlcrcx4FiN7OZaGvYMq6IZi7dNOPuTtuLh2WYrz4BI%2BpzFzWrPSfNGyNwwTL3fJy4jL9Rj7QIHWG5Yi7pTtSCxoxSn37yPiat7ogEP1dFDk5MOr%2FsbTrYRAXPQdfRA58L%2FcaIACHbww1BwPcrdXulrGee8DzT%2BhVeMSFQgj5aJMOY%2BRYzxOr5Hu8l0vqZhBPSFNf66XPuhVt79KwGCm3lfTKBG6QSSedrXJQKtHCeWwCwABqo7nQVEgemrgWSn5Nd4qEb%2FcLYhdoBWqR%2BGtKl5ezHC63uhaGgrftj%2BLVkdRd6eGpewlRwDN2E2ouYd2slHCVHRlFa1lKL5yeLD8ZXZTjf%2FzEfMTaNp5RPmOBNWhHM0eYD88Lcnromzp3CVfzqRB0ghWqv78hHLgBIQgdbBr8u1QAVijcs2a%2BU2jtyloynaRLQwLBIfjbk9lfR4emcKxD9QVPeupRXYACs%2BOnU8C57GHTg6Qpy2O5sKOkzRDZY%2BYi9R%2FTWcWZDFFjN5fBQusb9Uv%2B5vzh20djz6FDJuZ79ZcSkZmyexaBJSTIx%2B5j0D1IiqkWr14lDEillDh0tUwm52lvQY6pgGTGTj1q5Qlje7hx1bXk4%2FJAJEfCa%2BC6oI2aLnbUIC9DpIUKe7Zbcl%2FjSB1gBq4kE7fqh1SdAtux%2Bk8PPukNnd22oG32IFxrqCZ5SXIP2Rz7jUMW5bAo1Cwjb7y2L8AnMXy9NH79dVf0ZRGbMp7aY%2FgfMh9W3c3P9AheijOWgXNSF5FCwBYvKR01ZGF0hFO0FxdbZ6QSW8y3CrymarNGfWtRY5YB4su&X-Amz-Signature=9c073494e79db031881b465edf311dacac19640b05ec2e163cb40596b86545d1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVWARXN7%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDl7GKFju6nONCxZzPDuOz%2B3uY9yuv5Ekf1%2BKStxojglAiAYGb04a8cvS6Q31VK9YERxqMCltqZ8VCS72ApYugaUfyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt%2BdHFTd1YLyAsSB4KtwD4tVKR%2B93rqfoaFTzRMpTykzyK81lAYInMgVJRQ%2FtBITGU7lUAALxCLaMRAlcrcx4FiN7OZaGvYMq6IZi7dNOPuTtuLh2WYrz4BI%2BpzFzWrPSfNGyNwwTL3fJy4jL9Rj7QIHWG5Yi7pTtSCxoxSn37yPiat7ogEP1dFDk5MOr%2FsbTrYRAXPQdfRA58L%2FcaIACHbww1BwPcrdXulrGee8DzT%2BhVeMSFQgj5aJMOY%2BRYzxOr5Hu8l0vqZhBPSFNf66XPuhVt79KwGCm3lfTKBG6QSSedrXJQKtHCeWwCwABqo7nQVEgemrgWSn5Nd4qEb%2FcLYhdoBWqR%2BGtKl5ezHC63uhaGgrftj%2BLVkdRd6eGpewlRwDN2E2ouYd2slHCVHRlFa1lKL5yeLD8ZXZTjf%2FzEfMTaNp5RPmOBNWhHM0eYD88Lcnromzp3CVfzqRB0ghWqv78hHLgBIQgdbBr8u1QAVijcs2a%2BU2jtyloynaRLQwLBIfjbk9lfR4emcKxD9QVPeupRXYACs%2BOnU8C57GHTg6Qpy2O5sKOkzRDZY%2BYi9R%2FTWcWZDFFjN5fBQusb9Uv%2B5vzh20djz6FDJuZ79ZcSkZmyexaBJSTIx%2B5j0D1IiqkWr14lDEillDh0tUwm52lvQY6pgGTGTj1q5Qlje7hx1bXk4%2FJAJEfCa%2BC6oI2aLnbUIC9DpIUKe7Zbcl%2FjSB1gBq4kE7fqh1SdAtux%2Bk8PPukNnd22oG32IFxrqCZ5SXIP2Rz7jUMW5bAo1Cwjb7y2L8AnMXy9NH79dVf0ZRGbMp7aY%2FgfMh9W3c3P9AheijOWgXNSF5FCwBYvKR01ZGF0hFO0FxdbZ6QSW8y3CrymarNGfWtRY5YB4su&X-Amz-Signature=73f39628b3a0616ca0aa624758cc7bd732ca4057d32c39d5f0a31e703c4b1ff7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHQDS2MA%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRa2PJBTwAjDAtNx2XnCbHrP4zRQQuQhCzSEe8ItXKpAIgLP8lU%2B3HJMOqBf93h67bCMuqScQkKURaXI9nv7zjH0oqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLonm%2BgwrM8rexFzvCrcA%2FzqZBH%2Fj0gHz9L%2BrB8JOzsep%2BWpmOsbSXe7%2FqZs2HrgEWnZB0LM%2FnDCMr3s9EB3kTdtxggaAzg7X%2BBet79IdkdmgkEjt2QyUxNz5Ck41uR5z4c7eXKMuLDEZau%2FwlgbWdPMrB6qoFgshl70VDpOo7Ha4y8RYlgeqJs%2BP9jr0NkXLTih5eTEhieRGvZkAFShM82%2FQMEynEifFtXIaqtNv1EkexGqgO6Ig6rgvBayMta67dmw1xZd0%2BWeNKl4Q2%2FuBYqjsVFyrlM4Xr9iqMsqypXOJs8w%2BJCTBioaopyGNh3lq83sK2%2FrQf7F0y32JpJdXrh3MdMDzRbHl%2FPdVW4Wgt%2BG8r0ab3KeTi0s0vfFSQX%2FQmRCUE3%2FKNk3Mrql4MSj38wM2nP12rqPeTVvkpd8aW%2FO4cFiFl8wUW1o27qzF2i%2FQ4krzDtQDdYYMwOeFzyct8af5dyXc4uxxSmsyCa%2BeS%2F0KuLd8Y7ogRpSsXGb3grs3Cc0p9PREWaIYiUQ5lDfjBXtX7%2F7V1ZZfgoq865sf8%2FSxWjsOn7H3GY3lE4QJ00fbqPWEaoLlRT5MkILDClwg3l%2BgDm7NsrBoGkqdCgn%2FCrSUaLwINmEvnpUNLlnmY4skcaM7vmK13oXhwUEMKmcpb0GOqUBymF7eg5wOA1ylImV8QtlF8f1cHVX8Qtx0dyuC93ctSXlsomIN8ESwB7zXdaKyjWqusNAsgsFDUUj18Jyh%2F65cjtgxC%2F5n%2FdPE%2FOjWLEXJRogYpEZYvpICCy2sL6NG8QXTxtWGv4fm7Smo9w2yM%2Frs245A%2BB1nujaoCopZFKN1Ndxm0RMkt5GjIpQVrYpaswQnlk4Utjksc8XhVzLKe60D9%2BPF%2B7d&X-Amz-Signature=a23fb36228bf9d7b38408cdf94db197f9ef25e9dcd1ebca9d7b54fae54891295&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCFHHT2K%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwMFUrFJWWAf%2BZopE2HIxF7y7odm0%2BgrnaLaPTDAXq2AiEA%2BfgpaiYBMkVi7l6iu3UHg2COuoWJkD9s6Ji2l0Bo1v8qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNyJLvJGFUdoEntdyrcA0fRf9SaRivgZ0EY%2B%2B%2FufdWtI%2BEf%2FeTTuoTsilvt7cb%2FBKu2LB9na2Nm2naCa%2FsiG%2FU18R4Rfh%2BDG%2B8hTNvpsNCEH%2BcjEowuSCNl3bqg68aKsbKpBmDpkKH0SNiVmS2cISM2j%2FZ9o6fZNdU0Y7MqQbcKfwKDyn%2FGqQfdNG%2FuyWNJDc%2BrVAvDYOEFMPhf%2B4xoKaCW4IeaUHTUk%2FYifARZbDSFz74ejQSxRqpJiavI3sEQVd0%2B%2BFvLQrJtzXk5KRZzdPpdmj5YOATqKH8xjaTuzaSzTexZ5GiE2jJSpyDIkhQJz%2F0%2FMZ1i3BRxlcGAyEdAcgc69WY7aJjx5MK4Gfb28Tyq6tf94GzA8btvATqu4NmMwXYWDzTVW0XjWDgKOu2hIuEWgk8lvraBvBMv%2Be2BKmmmKGFv6FkigRXf1LMz7g6jUuCLaZs4ppN0p6bHJTefDNc3CiIK6tjlGw78d8V%2FKMxbQMnHsyy8LBpPtXmuP2hLFFIeawElUUxzFN1nscQnSZ%2BWzIdaeB2hPzPMTlNgMYs9MAjd94FgKF1lF89EY7tCDjZhtPKdPwdcEFJVM%2Bl1RDcFFeMyZK1M1cTHzahT0CpRefproAqXw1G0BG6Rik054wuUQBGCis%2BU4G9VMI2dpb0GOqUBuYRj4VkdY%2Bw3827B8sUvRWvja7UmOEi51h%2BatoIV86kwpsnN2Awe%2BptlRYXxinxsRK9Xt8ra2nzXFR81PXqDK%2Bkq0thp8Z9%2B3nTC9bNrFT8NgVSA8LKAele8llM3zLL2NIM3rJCN%2B60Q4Fb5Elmm1z%2Bvb%2FshZ6AkTpJ4W59DrJrCNoDUvXdq3n40LFbvuivox09xgWy5KvgrOIf9hB14UQon2N6x&X-Amz-Signature=25d7beaef8bb83d14ef2ae7703cfcf6e96c4cba796c0ecd66f97902fc5e5b68a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVWARXN7%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDl7GKFju6nONCxZzPDuOz%2B3uY9yuv5Ekf1%2BKStxojglAiAYGb04a8cvS6Q31VK9YERxqMCltqZ8VCS72ApYugaUfyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt%2BdHFTd1YLyAsSB4KtwD4tVKR%2B93rqfoaFTzRMpTykzyK81lAYInMgVJRQ%2FtBITGU7lUAALxCLaMRAlcrcx4FiN7OZaGvYMq6IZi7dNOPuTtuLh2WYrz4BI%2BpzFzWrPSfNGyNwwTL3fJy4jL9Rj7QIHWG5Yi7pTtSCxoxSn37yPiat7ogEP1dFDk5MOr%2FsbTrYRAXPQdfRA58L%2FcaIACHbww1BwPcrdXulrGee8DzT%2BhVeMSFQgj5aJMOY%2BRYzxOr5Hu8l0vqZhBPSFNf66XPuhVt79KwGCm3lfTKBG6QSSedrXJQKtHCeWwCwABqo7nQVEgemrgWSn5Nd4qEb%2FcLYhdoBWqR%2BGtKl5ezHC63uhaGgrftj%2BLVkdRd6eGpewlRwDN2E2ouYd2slHCVHRlFa1lKL5yeLD8ZXZTjf%2FzEfMTaNp5RPmOBNWhHM0eYD88Lcnromzp3CVfzqRB0ghWqv78hHLgBIQgdbBr8u1QAVijcs2a%2BU2jtyloynaRLQwLBIfjbk9lfR4emcKxD9QVPeupRXYACs%2BOnU8C57GHTg6Qpy2O5sKOkzRDZY%2BYi9R%2FTWcWZDFFjN5fBQusb9Uv%2B5vzh20djz6FDJuZ79ZcSkZmyexaBJSTIx%2B5j0D1IiqkWr14lDEillDh0tUwm52lvQY6pgGTGTj1q5Qlje7hx1bXk4%2FJAJEfCa%2BC6oI2aLnbUIC9DpIUKe7Zbcl%2FjSB1gBq4kE7fqh1SdAtux%2Bk8PPukNnd22oG32IFxrqCZ5SXIP2Rz7jUMW5bAo1Cwjb7y2L8AnMXy9NH79dVf0ZRGbMp7aY%2FgfMh9W3c3P9AheijOWgXNSF5FCwBYvKR01ZGF0hFO0FxdbZ6QSW8y3CrymarNGfWtRY5YB4su&X-Amz-Signature=fba211f104495349a16785aaf965c824da86002083834f9f307ce0ed93a1d520&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
