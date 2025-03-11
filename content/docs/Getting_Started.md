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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTY2YIG%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T021523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIFlf8B6wsk9Yz%2FdvWiChiqzt1LxINR0bZWXpxO0ccIdDAiAGtaIkUdTHvtXGMVF7uLzoR4m3mjypOtuYMkqsz0oitSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD4QYL7dI5rOfLmt9KtwD1J%2BmrX%2Bq34WE75GcFjWUzXw7FUbjBA%2BdEDYt6mPH6dqOBqvIdGAyKnsR%2FIFSpEUJkXijCAzsuSYP0lywHBGXD3ckXoE%2BBlgrPYDM3JMaedlkaZhArIiOjIs58IyiFPfGMJr8VtrsnAB0dALkmJSMPh4tHPZzDzCOI1jvXIIBxp%2FYI83EKre2L9Br7iAT8w9BJqKqt1qm%2FF65uAL50%2Bzy8X3OqEaZbEewDmoff5dS7HnV6LISax8UIT3MzA1zaf46BsChUwQlZyutDfgyhw1H8p3f3Re7ubvOzbI1rziKCbAKSlz%2BF8yYTrHECiD%2FCPTACLBWAYh81GyxMZdktuxI%2FJhy31IV6adnoiu3KlHAFkfWl9c4ovplYdjSDpgsIvMlq9U3VCYyurVE1RNF2Al9IgWQDZKSz4xPj1jktaeguMZGxWL8UKnUV1hODwvlGAPD0AVRUZ84PUyC7sNOf3YymzDsc2uucaG%2BQU4wL6c9hkq0Gb3WgCDV8DERYOBHrcyH3STPrEzUiAtMS9B4MgmQg7VmIk2sQK9iggiKSKKZD9RHnvhWm%2BKacJJpEqeNWuTymRAzF9ix2FeF813tLSlveL%2BKSuwX5om%2F4JIv3BIcs7nmvZ2zFiIlZkHG0o0w2q6%2BvgY6pgFH7od9URJ8j5yDqZPo2uakvUu%2BoE%2BhSBHEUxH75I69MJ%2BXEIJ8oRrGILz7cy1YlGlaGbIn5sjkZxB5kJzCoBKxYX53580hqq%2Fs%2BdhH38FD%2BAWWqRoN2RtLPtC9w%2BPY3c%2BlDphRVtcTRnz8KflnYdMnC%2BshCj1NOkM%2BAzr07bul%2FMM6UDC1iMjEUGcIQydm7IYVjuk4fQyEq6fevC70mkP%2FNDv1Qf2L&X-Amz-Signature=894e10293ee0f23fb7f12f014a8e053d32caeac3789c8de4a642b6a3a5bd938b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTY2YIG%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T021523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIFlf8B6wsk9Yz%2FdvWiChiqzt1LxINR0bZWXpxO0ccIdDAiAGtaIkUdTHvtXGMVF7uLzoR4m3mjypOtuYMkqsz0oitSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD4QYL7dI5rOfLmt9KtwD1J%2BmrX%2Bq34WE75GcFjWUzXw7FUbjBA%2BdEDYt6mPH6dqOBqvIdGAyKnsR%2FIFSpEUJkXijCAzsuSYP0lywHBGXD3ckXoE%2BBlgrPYDM3JMaedlkaZhArIiOjIs58IyiFPfGMJr8VtrsnAB0dALkmJSMPh4tHPZzDzCOI1jvXIIBxp%2FYI83EKre2L9Br7iAT8w9BJqKqt1qm%2FF65uAL50%2Bzy8X3OqEaZbEewDmoff5dS7HnV6LISax8UIT3MzA1zaf46BsChUwQlZyutDfgyhw1H8p3f3Re7ubvOzbI1rziKCbAKSlz%2BF8yYTrHECiD%2FCPTACLBWAYh81GyxMZdktuxI%2FJhy31IV6adnoiu3KlHAFkfWl9c4ovplYdjSDpgsIvMlq9U3VCYyurVE1RNF2Al9IgWQDZKSz4xPj1jktaeguMZGxWL8UKnUV1hODwvlGAPD0AVRUZ84PUyC7sNOf3YymzDsc2uucaG%2BQU4wL6c9hkq0Gb3WgCDV8DERYOBHrcyH3STPrEzUiAtMS9B4MgmQg7VmIk2sQK9iggiKSKKZD9RHnvhWm%2BKacJJpEqeNWuTymRAzF9ix2FeF813tLSlveL%2BKSuwX5om%2F4JIv3BIcs7nmvZ2zFiIlZkHG0o0w2q6%2BvgY6pgFH7od9URJ8j5yDqZPo2uakvUu%2BoE%2BhSBHEUxH75I69MJ%2BXEIJ8oRrGILz7cy1YlGlaGbIn5sjkZxB5kJzCoBKxYX53580hqq%2Fs%2BdhH38FD%2BAWWqRoN2RtLPtC9w%2BPY3c%2BlDphRVtcTRnz8KflnYdMnC%2BshCj1NOkM%2BAzr07bul%2FMM6UDC1iMjEUGcIQydm7IYVjuk4fQyEq6fevC70mkP%2FNDv1Qf2L&X-Amz-Signature=ffad64ba09fbb76d465aa024fdc58cd9669ca66b1126fddadd33c82224a14f6f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGALIDYH%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T021528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFavjss2KJ4SiUMBVuaz20J1g1AWwhFWC9BEjtQnXcXxAiEAr2nDrzCc4y%2BetQY8u9pBupwA8krX3soaAy3hrHvN4l4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGszAVC%2BpkrRcmFguCrcA6P0XtO4koit7dBXAk0G%2BaSbo6Ah9NjoyiWUhbdezpgjHBvRZlofkSaLomOVk%2Fnf0b37pYpWVdP%2FVwkwd%2FDKimK1XTG28pk%2FICGaUn4uxeaq7zI9lrmvdHegtBH7g3nCMIsYUN7FCEIuG1vFGNBSngQFZTmmzqAI4SlcoaRsPwCo4Of3PmN9k8jN%2FpGIsTB3kmGZ59K%2FosaEAleHdzZ9aetgMRl21HpHsQSYw0Z8u9MpwwUSOv7sAm%2FWqDPMY9J2b%2FKhfmXJkkP%2BX6OGwgpwb6Qf6blvpiS1qIt3jKiklhmkp%2BKAFvSB08s7P1D%2BOyDdl%2Foq%2BHc1GxcHJzGwjQftlh98t9DocPDjr%2ByMOrYtd1zRTU5qrWzFKDmTDANtg%2B7tNHpd7nkBY4DsNQHZ8s9iS2O7C43p%2FllNI0g%2BfgH99UFeuf8tKz8ivj5GC0UxERC6Hpf%2FqYcd0p2veyiFFYx4yDZAdv5lH%2BWusWarzFEqKkEjan5hbdoYJBp0SBZmDUa9I%2B56IZ3KcagXidG4yLSbpK8NuRTi06akfuiaw4%2Bmx%2FehDfPu9zqKOaUT2PcG8OXDSaQZnPr82PbRkO4ZAHSn4QclqgmB4Joom2F4Q14V4qUiOhaiz12h2%2BjwPQl2MOWvvr4GOqUBp5EeT42PouGhEN25yKEMTUA7h8ZZTE6RNR1ZAZBDH1YE%2Bb7c23jZoME9OjGbW%2BBwAdSj1XrPaDbNUzyvkV9UpUNkT%2FuZQg31qTLT24qmoUkt7Bt2N51HeFO1c0JBmb8ZBgMgY4D9Ze%2B7sLQERW9t6G4zQQUKWbY%2FUxZUNKJBwEih6cwWh6wX4yCjKx5gWLjC9Sc5Ct4JEwc1fiO73vY5w02CrQK2&X-Amz-Signature=70303710397db08252314af59dacf9d0c8d2acfcb1f58bada3b25a3e88205aae&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627QXPBPB%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T021529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQD2512cupWYJ6CloLnQFj083ulkqnElTtm%2B0pOpeZH4sQIgAyw%2FCCJadrKoFXBi0BfsXb6ZAbMHmCl%2Fx32DN50Y6SIqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGxIKWIdGSsf01kowircA1TgQsnC2giIpGc%2FUCiTMBnwSEOg%2BXR0l1JeUY1jyk01G938xlwUq33QXuEIavXvZLnFHxiEOdny9X1lBsFYiEJ9CuPx9yARvAcj4wzG5iusAC2SNzeM9DlaFZoAjAyVs0CphMYeQgWURZSXScoYErqP3Dj0eMGkeNuy40F7cjUjyV%2FxFVK9PjR9JfhzqgyM8%2BiByIfMtVJ%2BiyWvRObQFJ5Sz9nVOsbVY8Xn%2BcPrHpRF3L0Y5GO6gwxbMKdkPZuiIZwbhRiTfbgyYwlMLIw8TqKjcG5K7R5upTgy5b7bOvyJIyG7LqjBkJUgLbGlNDJB3Bv%2B%2FfE86YvagSzu1YrgvrdrNyQalXQC%2BBaIhxniRT1aR4%2FNBMbgkaE%2Bd7hyrtYlwW6TDiGM%2BZVwPiUUP26jeXxEYadcaofnuZRbrlV6D%2BAIT1XsIjkFNgLSKZpp87EY%2BZZ0DYzg27O05DrAhg6WkAtu9KImNKjvHRTewdVd6QFpgPx21GF3A0JATp5BJD5jFNuqWUdbUKcDbKED6MRldubt%2BsefMCswy0NbNrXhhul9UQRVAMdaZn%2BYpQvFK2U2N9Spv%2BNHtRaXhS3%2BnawiwaetdG21JSNIF4FSjTapFOOFilaJxaJ1sTjiKRMFMOWvvr4GOqUBzrmvmuvcVDMPj%2Fz%2BUAeGMFbdt52QBqwaCrRjc0YHmHf9Obc251k26gIsA3eWgb5gDFwefPsGhsxnO0jFMYp9dopvLSffrA49oWX1U085LbaWrJMsKQePSurS1cC28XO%2FiL6U%2FAqc5cckMZ4ZyVhiBW6eLFbtkqP5jzffxe%2FJTA67gm4JTiuybYKbxyrzYypiAlkart1UrZa8EhAydpgt%2FJIo1%2Fx%2B&X-Amz-Signature=901f676791c386ff28abe8edf96cb7d23f5067bd92e56e0f5954c987f69e64b4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTY2YIG%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T021523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIFlf8B6wsk9Yz%2FdvWiChiqzt1LxINR0bZWXpxO0ccIdDAiAGtaIkUdTHvtXGMVF7uLzoR4m3mjypOtuYMkqsz0oitSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD4QYL7dI5rOfLmt9KtwD1J%2BmrX%2Bq34WE75GcFjWUzXw7FUbjBA%2BdEDYt6mPH6dqOBqvIdGAyKnsR%2FIFSpEUJkXijCAzsuSYP0lywHBGXD3ckXoE%2BBlgrPYDM3JMaedlkaZhArIiOjIs58IyiFPfGMJr8VtrsnAB0dALkmJSMPh4tHPZzDzCOI1jvXIIBxp%2FYI83EKre2L9Br7iAT8w9BJqKqt1qm%2FF65uAL50%2Bzy8X3OqEaZbEewDmoff5dS7HnV6LISax8UIT3MzA1zaf46BsChUwQlZyutDfgyhw1H8p3f3Re7ubvOzbI1rziKCbAKSlz%2BF8yYTrHECiD%2FCPTACLBWAYh81GyxMZdktuxI%2FJhy31IV6adnoiu3KlHAFkfWl9c4ovplYdjSDpgsIvMlq9U3VCYyurVE1RNF2Al9IgWQDZKSz4xPj1jktaeguMZGxWL8UKnUV1hODwvlGAPD0AVRUZ84PUyC7sNOf3YymzDsc2uucaG%2BQU4wL6c9hkq0Gb3WgCDV8DERYOBHrcyH3STPrEzUiAtMS9B4MgmQg7VmIk2sQK9iggiKSKKZD9RHnvhWm%2BKacJJpEqeNWuTymRAzF9ix2FeF813tLSlveL%2BKSuwX5om%2F4JIv3BIcs7nmvZ2zFiIlZkHG0o0w2q6%2BvgY6pgFH7od9URJ8j5yDqZPo2uakvUu%2BoE%2BhSBHEUxH75I69MJ%2BXEIJ8oRrGILz7cy1YlGlaGbIn5sjkZxB5kJzCoBKxYX53580hqq%2Fs%2BdhH38FD%2BAWWqRoN2RtLPtC9w%2BPY3c%2BlDphRVtcTRnz8KflnYdMnC%2BshCj1NOkM%2BAzr07bul%2FMM6UDC1iMjEUGcIQydm7IYVjuk4fQyEq6fevC70mkP%2FNDv1Qf2L&X-Amz-Signature=f5a6e6e38dfe01689e6135975b3fecbf6de273add1e1c238e5da464266ef2a5b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
