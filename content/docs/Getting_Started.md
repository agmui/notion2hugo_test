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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX6SKTGZ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIFMmbLT053acPWMR5V8wyk4q%2BSw8pl5Azz2PlXGFVoQbAiEAuxS5%2BJmJupwdEJgKciWFnBTyWA6sF9pfvkYZvcFgkDEqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoSy2yMiaMzktwvWSrcA8hgBSD9X57aP7kGDjV9gjqedpP7Ly20izPCawl2wdWcqhR8Cv21w3HdymWhXwUzn8lvQ7CzdzRWGnq0903jtvJ387zbUuNwUsWxPM952rclnwxjIdj6SznSas3Z%2BjslB3m6f5UYF5%2Fw5Y8qsqRHjtMvHTsy%2FeUZ3n%2Fo0j59gTKF0QNv4LONDD%2FUv1EFUCKdDHg1RcKIBe4JSeFLE9dd4W2YdJzBe7JN9tccqnhuv9s%2FrA7P6NSd1QAWPqQoE%2FrNvORsco0RJe%2BPJcmNu35CTTqzqGp4Bo73qRpBRHq8jMf%2F%2FI7Wsc%2BZMyO5186IV6Ttd%2Fce7PYIfWmgw0EPuKjjU7THpjXS7xR5Vzyz0GhBzsAU0MEdAVi5%2FFXFYxBWnWv5mpR1uDNwnz6Npiw4pSORePaU6egb7pTMmqfBAFgrA%2FkxNuQwgDLkM4b7Bd%2F9Y%2FIO7wplURvy%2Fr2Hcx9AYezxYGsbuM%2BForzhxDcZYTc0LHqmK3QwDh%2Bv6gk7Fg0PG%2Fz%2BclAL9qCxsgOmIAQ6zzavAd7zrIEMeBNop94Om3WOWP%2BwZk5Hs0h1opV6WWCix5UIuQm1pgBw2%2B5qiXOTtUpxVTzJM%2BE40Z%2FHeja8WeKo4T3y1%2FsutfiQWXjM%2BNsAMNnRhL4GOqUBQ%2F1PVyVBo8TZmTIIUiDNQWQR1ucKqnYuxil9lJ4GBCpkEJOHz6psOHbVdXUTn3ksZlqI%2B3t2lD%2BRd9YR6K4T%2FlWKP8A%2F341BNt2wmwIyj0BBGauZDEtNBDzYonJ1ziZ63oItqm8E1GpcJcXZVLGJQhSIJ9lVOE3gCdQkVb1WUEO68ve8m35lWPLHiXgwEpbf6zYCQe9j0lI9rBzmRFiMnTJqCU1o&X-Amz-Signature=adf3649eee6be3314d063b584cc2efc309470075996c05b9ead1767c648b162f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX6SKTGZ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIFMmbLT053acPWMR5V8wyk4q%2BSw8pl5Azz2PlXGFVoQbAiEAuxS5%2BJmJupwdEJgKciWFnBTyWA6sF9pfvkYZvcFgkDEqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoSy2yMiaMzktwvWSrcA8hgBSD9X57aP7kGDjV9gjqedpP7Ly20izPCawl2wdWcqhR8Cv21w3HdymWhXwUzn8lvQ7CzdzRWGnq0903jtvJ387zbUuNwUsWxPM952rclnwxjIdj6SznSas3Z%2BjslB3m6f5UYF5%2Fw5Y8qsqRHjtMvHTsy%2FeUZ3n%2Fo0j59gTKF0QNv4LONDD%2FUv1EFUCKdDHg1RcKIBe4JSeFLE9dd4W2YdJzBe7JN9tccqnhuv9s%2FrA7P6NSd1QAWPqQoE%2FrNvORsco0RJe%2BPJcmNu35CTTqzqGp4Bo73qRpBRHq8jMf%2F%2FI7Wsc%2BZMyO5186IV6Ttd%2Fce7PYIfWmgw0EPuKjjU7THpjXS7xR5Vzyz0GhBzsAU0MEdAVi5%2FFXFYxBWnWv5mpR1uDNwnz6Npiw4pSORePaU6egb7pTMmqfBAFgrA%2FkxNuQwgDLkM4b7Bd%2F9Y%2FIO7wplURvy%2Fr2Hcx9AYezxYGsbuM%2BForzhxDcZYTc0LHqmK3QwDh%2Bv6gk7Fg0PG%2Fz%2BclAL9qCxsgOmIAQ6zzavAd7zrIEMeBNop94Om3WOWP%2BwZk5Hs0h1opV6WWCix5UIuQm1pgBw2%2B5qiXOTtUpxVTzJM%2BE40Z%2FHeja8WeKo4T3y1%2FsutfiQWXjM%2BNsAMNnRhL4GOqUBQ%2F1PVyVBo8TZmTIIUiDNQWQR1ucKqnYuxil9lJ4GBCpkEJOHz6psOHbVdXUTn3ksZlqI%2B3t2lD%2BRd9YR6K4T%2FlWKP8A%2F341BNt2wmwIyj0BBGauZDEtNBDzYonJ1ziZ63oItqm8E1GpcJcXZVLGJQhSIJ9lVOE3gCdQkVb1WUEO68ve8m35lWPLHiXgwEpbf6zYCQe9j0lI9rBzmRFiMnTJqCU1o&X-Amz-Signature=3bac30c215fcb5b951d236c80fa48a03f2b32332b940e027f9e2ce528ca6f8ca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y334NV6K%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIHW7dMDnq3duHPgxSUYQxhdxlaDeao2ck2h15FfL7Tj5AiEAu2HfKNBOAzK0CclFuPWoFUP9FdbTFMNpBChqL3BGmaEqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxLaA4iDBTyEOZnWCrcA4fYhPsasBYphxoKlTpnpV2x%2FbqNHFhkoG4LOPRu5jjoW9fTfluEKLM9LUkzDowo6QORfJoJvvbSu1mt%2Fu04nZ3LENYC3QK4W6S%2Bpp%2BKKidur4ZdSYeyFCOy87uLKqSXQ1FDcIE6JLMTer6EdxTYzH8fMoc25lN%2BqJOeLOWHhb%2B232F15HGaTJb0d1otVy8XQCsVVI4Dgscu1JeWgQbGqhhRiUdQOCAmYwmT5OG1UjnxBdTih5ZqnNvVqHhJ2i6XYq3KBGo5KL68FkaFVLP4vCJ4OXBzjEMIOZ42YV8ZPXGq0Xu5QSgFmY0mP2YW1xHeGWJ9i7aVkM9STXL%2FO3j8Eb%2FKIWuxil8v7UejR8df1xuuUtvbnPVaUczs%2F7tK%2FiSIslpKXVOsUw0WCcfJtesF9o%2Biw5cxXxZe%2B3d5%2FUotiVsXR%2Bgq7TBaORygtVYQDsx%2FiGMUvdxWtXT%2BHk2LXPnrn5%2FzaEcSdiUeVDvOGgVcCANUftK93osF0zN51tMWwgOBVvoUlzxIA9mau1uf4u6zK40REpPFNR%2FIFQUwJv5nSnxxGmG1K59bqG1pMfv4r5ERnDpolOhF%2B5VAi5vV9UbrIZHIpgULFpRTRBwfpSQh707tZNZ4MOFsFGY4%2FIdYMNHShL4GOqUB98q3CxsTBguN9h4f1O6pZrQCuMCMPnSib56y4sqszDtAA97rtoHEvbe2aFGiLLBOhOjp1Mhvd%2B5qC4CwyrB%2BVEuA51dCk3kPl32BqNuNGd%2BxBlp32c7rBof3RxEOHEqqQEXPFWk8VTt7koJ1h4jEthNQlnIzpQABX0mAXWR6wNqNTT57p3bgb4S3sZj5khNXpuLak63ofzRhDYDgXDduNFnr5tUJ&X-Amz-Signature=642ba77f7d1b60bcebc0b8a7d02995130d3bde88bb5a5652b17e4d671c022b62&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGIX3VZY%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCxE4EGcMXhMfH0c47fZr0ycIS%2BQTwdWJdAThn5aHwk8QIgKkS9nnVRIwB9GHKSybrcJpXe8A5comYW50qUt%2Bsma3sqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFz7ImIuBZbHFLb4HyrcA0Og%2FdY0yxy052ooAKDgd50inBIDJ23xqQN8KZDnJWpb01qdnlBPaaHoNmvBbH1EUd5eBo6Bw5qo2dTzno5YA%2BRrAfVBibo6uH30BbdYRkTIhABImXu0BLFGLzTpac2lHphooh2emFJJQ%2BUPEbXKiV94IlVaDU3EVC5oQW87GbO7mKigubTDjhDIbNf5FISoancpWoWbVAW%2Br07xbKHKAyfkeqMFie0XAZ4n9eBvRnd1wjMwNhZv7IiEtXHsqKB4rn7RKCHQ1TjZ%2BWEfB%2BJw5JT4AGcbxiT4X%2FbYBxSu4sA%2FuwxEWBg6Vr3ubAWl%2FTJQ8QP3ZFqsibXye3VhSaN%2FJRcsJM1DdlTjgkHdfOlCxSnMkDEKvrV%2Bl6Jxk5AvhDwBQtavd1n%2FIdmMdDbyiE2F%2FC8rXmL2ZXV8yfBmH7cw2J6wnXQ5yoYJ0g3mesfloPTm6qh2rnBaggVbcLjhVYevHpCbyHzUHcj2TP0eLCEaYc%2FbRpzOYpmSWl2l93XrfWOcbt5kbh4uluv02UwsJR4CAsoVsbqYKMd8VpeTWE0u5BZxTY%2Fz2POEPoI3R5VomWEydMudF60rkC%2BLGTYtTJ5U7kUGLIK1uRpaTQPRgUgDVxGuXi1jWpSg7dl4uD4kMKrShL4GOqUBhFYacaDHbLrWNRtV7QbEP8nKCvc4aQ%2BN5f9NyFrUZ%2Ft6jw9F7RZnlIYTBlpMZeX2Ni570pm2FGVyh1xmoVCgDQhFE0juQE%2F98iHGinAQLpTdfWvnIqQr7gwB7lMcfRhHs%2FQaucPMsQVH4EdDdXp8hUrHhkJ%2B1kThaTCK1D2iAxrPgvkiyVDH2xgITw8u44XxQCEC5fS%2FsWLvC%2FTzLrlDjgfQFFpT&X-Amz-Signature=5f5473f668d2cbdee384f3b397c914ccb2a0fc8d3cb1cda46c7e2291dceb6d36&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX6SKTGZ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIFMmbLT053acPWMR5V8wyk4q%2BSw8pl5Azz2PlXGFVoQbAiEAuxS5%2BJmJupwdEJgKciWFnBTyWA6sF9pfvkYZvcFgkDEqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoSy2yMiaMzktwvWSrcA8hgBSD9X57aP7kGDjV9gjqedpP7Ly20izPCawl2wdWcqhR8Cv21w3HdymWhXwUzn8lvQ7CzdzRWGnq0903jtvJ387zbUuNwUsWxPM952rclnwxjIdj6SznSas3Z%2BjslB3m6f5UYF5%2Fw5Y8qsqRHjtMvHTsy%2FeUZ3n%2Fo0j59gTKF0QNv4LONDD%2FUv1EFUCKdDHg1RcKIBe4JSeFLE9dd4W2YdJzBe7JN9tccqnhuv9s%2FrA7P6NSd1QAWPqQoE%2FrNvORsco0RJe%2BPJcmNu35CTTqzqGp4Bo73qRpBRHq8jMf%2F%2FI7Wsc%2BZMyO5186IV6Ttd%2Fce7PYIfWmgw0EPuKjjU7THpjXS7xR5Vzyz0GhBzsAU0MEdAVi5%2FFXFYxBWnWv5mpR1uDNwnz6Npiw4pSORePaU6egb7pTMmqfBAFgrA%2FkxNuQwgDLkM4b7Bd%2F9Y%2FIO7wplURvy%2Fr2Hcx9AYezxYGsbuM%2BForzhxDcZYTc0LHqmK3QwDh%2Bv6gk7Fg0PG%2Fz%2BclAL9qCxsgOmIAQ6zzavAd7zrIEMeBNop94Om3WOWP%2BwZk5Hs0h1opV6WWCix5UIuQm1pgBw2%2B5qiXOTtUpxVTzJM%2BE40Z%2FHeja8WeKo4T3y1%2FsutfiQWXjM%2BNsAMNnRhL4GOqUBQ%2F1PVyVBo8TZmTIIUiDNQWQR1ucKqnYuxil9lJ4GBCpkEJOHz6psOHbVdXUTn3ksZlqI%2B3t2lD%2BRd9YR6K4T%2FlWKP8A%2F341BNt2wmwIyj0BBGauZDEtNBDzYonJ1ziZ63oItqm8E1GpcJcXZVLGJQhSIJ9lVOE3gCdQkVb1WUEO68ve8m35lWPLHiXgwEpbf6zYCQe9j0lI9rBzmRFiMnTJqCU1o&X-Amz-Signature=10c16a30937e6ab204f04ed4a358b5b72364f8bc39d25ae759cfe9f8b9532ca0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
