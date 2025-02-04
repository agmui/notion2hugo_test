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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ2OKPT6%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T190100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDEWopYSkH8YKZ3vWK239EFm8oLgxXfA5%2FhXsx9tOODBgIgbIIjc7Q2CmbdMpeAnyZCmbd88hubswABvBfdtcMKFcEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDGmcefs%2FCvwEqUVf%2FSrcA14YA1Nm%2FFHzxiptv2ZDCsTikxHH9jrIh3yeg%2BqDrtcwCeM90%2FqFkWwC3ks7vMGtLF%2FmXH%2F8SJAgpxvtCU%2FFa1MJvnvSNAamEry25vxfEaX%2FAIoWSm10MO9cUPTZhyS6NJ%2Bs%2BuZFPK%2FFsJSplqyo%2BX%2FDOw2DiJ6HAK1dWYgkZ%2FOZYse8ViLRMlaUUfaf9cHrvboBTZ3QEq5Os2ZKY10AWKkkIIgawzhukNES7yssTHZjJkdwv8qZVpmbz8lq8AAWSZS2ipFFdGLQ9ZUml5nTO4kJgDqOY8312g8dCZ3bX7gB4eRXKZoMSbehYPu3l%2F6L8g2Uonn3CbCMJq%2FigXVvTEpiFiiVmFsiBvZK7rUbCmU%2Bf2sTJWUWD5q6RrkWZa7Xclqk%2FbiaaMUowk8s%2FBmBR%2B%2FW3WGfWNy0%2FqDsRxb09DScR1kUr5phWP6u%2BTnk345KYuq0Q3Vjaf98yQ60n9DGbADIl9Q9cilDMJ%2BI30HLQ%2FM4rLhxl2Lo6y7w%2Fcmsi2a0mYHeDl0J0a%2FR04I9EV8dQJJSfi7Vr8XF6xfICG894BgKi3E4iBjjaE3T7DnGFxq7LU%2FzPuUrJ2hWljY1GWbaQqh6NP23h0rbbHIgCZdP5rUnNXWStoRVczg4lNw4MOm%2Bib0GOqUBsyJgw%2FeIPN8i5YqTd1ti%2FEz8lZ5khVpKjX8RfPs3EVOgJY8ajyCZZFEGiQOuP9TxsFvUe3dpgMPaq9YhoYmSBFZpUu5%2B1j3wcEtylt2%2F7jNEiEXoo8uPpu%2Bb1bOC60FPkD4nR%2F%2F8%2BAzak%2FSdOJU9OHTrGpEjBkyZClav1MS6TtKTidCjtu%2BEhfTQ9sNqRibp4tUGnbUu1oxQr01Z03URgjY1HJlY&X-Amz-Signature=2fb69ba3da3ba129372650348075f1ece5c74a386b4e0fd8855c607d2202c613&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ2OKPT6%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T190100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDEWopYSkH8YKZ3vWK239EFm8oLgxXfA5%2FhXsx9tOODBgIgbIIjc7Q2CmbdMpeAnyZCmbd88hubswABvBfdtcMKFcEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDGmcefs%2FCvwEqUVf%2FSrcA14YA1Nm%2FFHzxiptv2ZDCsTikxHH9jrIh3yeg%2BqDrtcwCeM90%2FqFkWwC3ks7vMGtLF%2FmXH%2F8SJAgpxvtCU%2FFa1MJvnvSNAamEry25vxfEaX%2FAIoWSm10MO9cUPTZhyS6NJ%2Bs%2BuZFPK%2FFsJSplqyo%2BX%2FDOw2DiJ6HAK1dWYgkZ%2FOZYse8ViLRMlaUUfaf9cHrvboBTZ3QEq5Os2ZKY10AWKkkIIgawzhukNES7yssTHZjJkdwv8qZVpmbz8lq8AAWSZS2ipFFdGLQ9ZUml5nTO4kJgDqOY8312g8dCZ3bX7gB4eRXKZoMSbehYPu3l%2F6L8g2Uonn3CbCMJq%2FigXVvTEpiFiiVmFsiBvZK7rUbCmU%2Bf2sTJWUWD5q6RrkWZa7Xclqk%2FbiaaMUowk8s%2FBmBR%2B%2FW3WGfWNy0%2FqDsRxb09DScR1kUr5phWP6u%2BTnk345KYuq0Q3Vjaf98yQ60n9DGbADIl9Q9cilDMJ%2BI30HLQ%2FM4rLhxl2Lo6y7w%2Fcmsi2a0mYHeDl0J0a%2FR04I9EV8dQJJSfi7Vr8XF6xfICG894BgKi3E4iBjjaE3T7DnGFxq7LU%2FzPuUrJ2hWljY1GWbaQqh6NP23h0rbbHIgCZdP5rUnNXWStoRVczg4lNw4MOm%2Bib0GOqUBsyJgw%2FeIPN8i5YqTd1ti%2FEz8lZ5khVpKjX8RfPs3EVOgJY8ajyCZZFEGiQOuP9TxsFvUe3dpgMPaq9YhoYmSBFZpUu5%2B1j3wcEtylt2%2F7jNEiEXoo8uPpu%2Bb1bOC60FPkD4nR%2F%2F8%2BAzak%2FSdOJU9OHTrGpEjBkyZClav1MS6TtKTidCjtu%2BEhfTQ9sNqRibp4tUGnbUu1oxQr01Z03URgjY1HJlY&X-Amz-Signature=447a562d92648f6a5c1eda6a368134363cdfc2aec7192f5c5793c27b841214ee&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEIZETTE%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIA%2Fhs0rN7se%2FStOhzYJRv68hDSRKU8vUZL5%2F5zBxh5ZbAiBgU0RuzaLg6dpRJJ4tB02zZeFa8LhBn9oK8reMrzcBjyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMbADZV1k51BlbylQgKtwD57jbqDRPTo8TXf5AmLg06T3C%2BKg4X3qpuQ1f8hyFL0Lp5TP7qRTehqw8osIKYaYezIV4ITgW0awb8377%2FNtuQdRpX3AmYl7Xb3IM42VdxbaVhASPXSODtiNlwH8f5ttxHn5wPobR1VpdxXJ889iwIrDJHHTrh%2BeCD%2FwF%2B%2B7ETPS8eRYBXZhI6iCr5A5OU3Q6xN96pbfFSJvH8gavkjy5Fk4s49TDRVgZGe%2F0D%2B2SnAi17mTeKyTR1HK%2FA9nnn9C8%2BdHaIAg3%2BeCTQ2IX6TgEfawkdfzCTEuhsbIyQNWzVhxNxhZ9H%2Bern1OqUn9vCVMaqtWkp8L2a0yCP5preMZwWI1WRm6DIdyX0A%2F6C%2Bs5OSRdynN8YBgA49MUnj4n1KVDw%2FER%2BrpVtrR1e%2Fvmd5rdSYubYyV%2FLYGRKw8HwA9tN80dsPuVjizSBziTFgkWnTLWO%2FqedK5FUvAWKDH0cAeJ1Liztrv57DOsFSvlJHh%2Fbs1%2BNHKU33zBsitXa97ticXbPCQNh4n82kuZCukk5zLEVgy2KpIimgZElUojAHyB6sLDuaA0lR%2BKq1Yu%2BmcI7PQxVEz7NBjmlrRekai0Dqd719vkC922eAXRPoeJon7Qtz69GZWUf90gBoKob7YwtL%2BJvQY6pgEdC%2FQsAxlgVcAAxa%2BaXbITTfMevQTunIprNR0GpcNN8uI2dkoeGl%2BTXZGfAIZ0P5pTZh465WBWtC5YXQVoCLzKZmTWXex8OGbtlHRabsz0UkzeWZxqLF1QhuVuIWtCsvrvdzSY7H25s7yfgw18Ur%2B62LjGn3W9uRIOKRuea5At39r8Q6rFdieDiDPEJpJa0vaUZbW7D0MYaDrT3ANmxQTlT2lOsdpn&X-Amz-Signature=9e0c129f605eebe8f24d34c1fb6b8b48c82b043a61115df99d87a70373d67367&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXCVA23T%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T190105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDj3d46ZQcVRs174fwqhg3qK3GYhuVt%2FvvQN2dD585vawIgbb3T94%2FiAAhbF%2FqrF2TRpRaEypDij%2BN3e6mR1GNnUnQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBFydjuBMpkaXbEzkyrcA5V5Lsy51RenlbUiphc7hKg7nlr0uZu%2BJXmZgsL65teC4KgDWyOeWCXTQ%2BmqyQ6nIHpv%2BG%2BC4ULMyc%2Fk76rYH2o6xSBayiulA7ZmEYbRUZHAtCX3sJ6vKaLRaLRjGQnc32k%2BzslVeo0OgQH48CFGq7S5%2BQSQV6pQawI6zNCAeemkCOEOHEEjHgNbdKiY0ItglyZRHBRhyR0zwn%2FQO5zH5JCeJwzHaJJpHHSA8SV1iXWUioethz20U0sbcro6VQG%2F9TMCJVFqnSFElU33M5CFEiPBIvuD0lyxWpbVO5qq804hHpHw0DQdkSA4QE3yrht%2BCG1MD94Md1crH0RvZYDwE21t3HgQhFtQU8kXhquApN3O6zcazOplS0SeZG%2FdRTvxNtF4IrSxcOjGRBTwEPY2dhTcLjmb%2B7nm5CPrpWheErt7D1Mmt9N6fHfqaRNlnqk184SXnfzdNXKgbkv0AOeToOM6O1y87Tqo6F%2FBs27N%2BpVPBNaWIbtg4N4xHUCqpuzgS%2FeVpNOOWvY2gmDR5ZiQRXwZRzGh4woNZ7%2BHYEVWGgFkNPF5k8%2BS%2FiKJg49zUpxWJqzZi4Jb7BGrrKa2HKq7rqe%2BYwCIEwyjFxbl8jq%2BSC%2FDbT5JAxiwbHWCYhA1MKO%2Fib0GOqUBUUQS%2B%2BzmOcPSvLSPV3u8ayzwYTIrCfpYk8RhSu%2BwhpE8i9BLt0x0oxUHGCtOcqkAGPssoTf%2FukDU%2Fd94tLfBx%2B7jENM%2Fde9%2BKfXX9MVIPr3U1Zey3zWCv0%2FC5dqFeiLiOIqgM9oo%2Fo%2F7Bn1ARy8OeN71BKwHzOeLkHN92TZ%2FjLUUeI%2B%2BPXD4Tz49dski3dd1OyvehiMLjBeqq2QZNMWEdha3wzNk&X-Amz-Signature=38282e418d47913e5cfd220b537777006c46fb796a92b6f3af9dd7fce6d4d252&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ2OKPT6%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T190100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDEWopYSkH8YKZ3vWK239EFm8oLgxXfA5%2FhXsx9tOODBgIgbIIjc7Q2CmbdMpeAnyZCmbd88hubswABvBfdtcMKFcEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDGmcefs%2FCvwEqUVf%2FSrcA14YA1Nm%2FFHzxiptv2ZDCsTikxHH9jrIh3yeg%2BqDrtcwCeM90%2FqFkWwC3ks7vMGtLF%2FmXH%2F8SJAgpxvtCU%2FFa1MJvnvSNAamEry25vxfEaX%2FAIoWSm10MO9cUPTZhyS6NJ%2Bs%2BuZFPK%2FFsJSplqyo%2BX%2FDOw2DiJ6HAK1dWYgkZ%2FOZYse8ViLRMlaUUfaf9cHrvboBTZ3QEq5Os2ZKY10AWKkkIIgawzhukNES7yssTHZjJkdwv8qZVpmbz8lq8AAWSZS2ipFFdGLQ9ZUml5nTO4kJgDqOY8312g8dCZ3bX7gB4eRXKZoMSbehYPu3l%2F6L8g2Uonn3CbCMJq%2FigXVvTEpiFiiVmFsiBvZK7rUbCmU%2Bf2sTJWUWD5q6RrkWZa7Xclqk%2FbiaaMUowk8s%2FBmBR%2B%2FW3WGfWNy0%2FqDsRxb09DScR1kUr5phWP6u%2BTnk345KYuq0Q3Vjaf98yQ60n9DGbADIl9Q9cilDMJ%2BI30HLQ%2FM4rLhxl2Lo6y7w%2Fcmsi2a0mYHeDl0J0a%2FR04I9EV8dQJJSfi7Vr8XF6xfICG894BgKi3E4iBjjaE3T7DnGFxq7LU%2FzPuUrJ2hWljY1GWbaQqh6NP23h0rbbHIgCZdP5rUnNXWStoRVczg4lNw4MOm%2Bib0GOqUBsyJgw%2FeIPN8i5YqTd1ti%2FEz8lZ5khVpKjX8RfPs3EVOgJY8ajyCZZFEGiQOuP9TxsFvUe3dpgMPaq9YhoYmSBFZpUu5%2B1j3wcEtylt2%2F7jNEiEXoo8uPpu%2Bb1bOC60FPkD4nR%2F%2F8%2BAzak%2FSdOJU9OHTrGpEjBkyZClav1MS6TtKTidCjtu%2BEhfTQ9sNqRibp4tUGnbUu1oxQr01Z03URgjY1HJlY&X-Amz-Signature=0a2350547582a2da9a8f4a8943d72ffc28b992228233a9e31a8e7e71616af4c9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
