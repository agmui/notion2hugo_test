---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHIOYXEH%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T121558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzvcxmJHXl5rxKxXZDxfkxEZ4hrlO23TWGfDwxuKORcAiAXkNChjMBsvvhCp%2BYonDr1fNiHX%2FJ%2ByvjaV9hUqUIXASqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdtoSCfoioe8d258hKtwDgJcfIB3e7TgWw2IWc5Z%2FpigfDbK3vZ68K8%2FZdSC0P20hnqOJRHTClPMKdLf7Bq09Su7Czel%2FX1mKtJrpq1582CQWDX0p7WX93F19sybpE3NrCOmLOAg86W%2B%2FkPe3V00bwF5CsgXDEgcDydTCI7kR5Fm%2FgjOu0aQIkMQh6aZEsaSidzugX6AvY%2Bm4Po8cD2aUrKRh2UfgofBv4NcMIV1dbOweQ4Cqpyq5YsoyxjvO%2F3qCqT7L0XMa2ZSnxtRha32jab2zdeG5nrCBD1a8hyCdKGPPx%2BlCp1FDnUZEjJ196jyHl4zL2cycedjiJgEIysJHq0r0vWyiijHzu9G%2Fy2uYZ4bkQMFFh3FWlQ64CSmMr%2FTmqIniUh%2BOJ1GENsegKjl5%2BL7FzLFD2RVRhpcaoIyOjr1pfZeQZkM%2B1HJ%2Bnn2Z2l30330AKAwZobfrtdd%2BEiGw%2BciYhmAB45S9E1gLVipRuAgxQKP7RMbdmF1lZ2CI9nIlH%2Bq1x5eHqgCiKmvdixoWfYcHmJwT0fuQ5r7H1uo4qeYpg5C2skB%2BhZvK1hmvMhKaLa2rZIbMACEquhQM4zuR8BU7dXCTdekBogvZUpdU1FJrch%2BN6O%2FW9ynKc58jFd0YSY%2Bv6iqaprgWay8wrLqUwwY6pgHiEyuyPT27V2edREfPGDCemzatosaUvCLkbFtINxbTlM6inSsHQTn6xTvAArhWvEpFiZCtchxe6j187w%2BEEcZ6vPcAfZXBDsLRPN82KDrIp%2FlX3fFJ%2BO2aSqE4K4fzeOnI%2BaGYF9rFGv4%2Fuk77TUzaEAoef7mx5glSGtaUYJQJhgiIkz0eaiuWMAuGtdVPCD1AF4ADpxRX2W3AVZs1Lj84aQzDmnaY&X-Amz-Signature=38eab697cb259ad51cc23ef37b9f0f2b14e08e5b95b6f7c63e6fa5cab3d0ec81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHIOYXEH%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T121558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzvcxmJHXl5rxKxXZDxfkxEZ4hrlO23TWGfDwxuKORcAiAXkNChjMBsvvhCp%2BYonDr1fNiHX%2FJ%2ByvjaV9hUqUIXASqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdtoSCfoioe8d258hKtwDgJcfIB3e7TgWw2IWc5Z%2FpigfDbK3vZ68K8%2FZdSC0P20hnqOJRHTClPMKdLf7Bq09Su7Czel%2FX1mKtJrpq1582CQWDX0p7WX93F19sybpE3NrCOmLOAg86W%2B%2FkPe3V00bwF5CsgXDEgcDydTCI7kR5Fm%2FgjOu0aQIkMQh6aZEsaSidzugX6AvY%2Bm4Po8cD2aUrKRh2UfgofBv4NcMIV1dbOweQ4Cqpyq5YsoyxjvO%2F3qCqT7L0XMa2ZSnxtRha32jab2zdeG5nrCBD1a8hyCdKGPPx%2BlCp1FDnUZEjJ196jyHl4zL2cycedjiJgEIysJHq0r0vWyiijHzu9G%2Fy2uYZ4bkQMFFh3FWlQ64CSmMr%2FTmqIniUh%2BOJ1GENsegKjl5%2BL7FzLFD2RVRhpcaoIyOjr1pfZeQZkM%2B1HJ%2Bnn2Z2l30330AKAwZobfrtdd%2BEiGw%2BciYhmAB45S9E1gLVipRuAgxQKP7RMbdmF1lZ2CI9nIlH%2Bq1x5eHqgCiKmvdixoWfYcHmJwT0fuQ5r7H1uo4qeYpg5C2skB%2BhZvK1hmvMhKaLa2rZIbMACEquhQM4zuR8BU7dXCTdekBogvZUpdU1FJrch%2BN6O%2FW9ynKc58jFd0YSY%2Bv6iqaprgWay8wrLqUwwY6pgHiEyuyPT27V2edREfPGDCemzatosaUvCLkbFtINxbTlM6inSsHQTn6xTvAArhWvEpFiZCtchxe6j187w%2BEEcZ6vPcAfZXBDsLRPN82KDrIp%2FlX3fFJ%2BO2aSqE4K4fzeOnI%2BaGYF9rFGv4%2Fuk77TUzaEAoef7mx5glSGtaUYJQJhgiIkz0eaiuWMAuGtdVPCD1AF4ADpxRX2W3AVZs1Lj84aQzDmnaY&X-Amz-Signature=3ec35d94af521add55d3969029744bf42588df460ce6610a6c99d6fd4c55d7fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHIOYXEH%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T121558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzvcxmJHXl5rxKxXZDxfkxEZ4hrlO23TWGfDwxuKORcAiAXkNChjMBsvvhCp%2BYonDr1fNiHX%2FJ%2ByvjaV9hUqUIXASqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdtoSCfoioe8d258hKtwDgJcfIB3e7TgWw2IWc5Z%2FpigfDbK3vZ68K8%2FZdSC0P20hnqOJRHTClPMKdLf7Bq09Su7Czel%2FX1mKtJrpq1582CQWDX0p7WX93F19sybpE3NrCOmLOAg86W%2B%2FkPe3V00bwF5CsgXDEgcDydTCI7kR5Fm%2FgjOu0aQIkMQh6aZEsaSidzugX6AvY%2Bm4Po8cD2aUrKRh2UfgofBv4NcMIV1dbOweQ4Cqpyq5YsoyxjvO%2F3qCqT7L0XMa2ZSnxtRha32jab2zdeG5nrCBD1a8hyCdKGPPx%2BlCp1FDnUZEjJ196jyHl4zL2cycedjiJgEIysJHq0r0vWyiijHzu9G%2Fy2uYZ4bkQMFFh3FWlQ64CSmMr%2FTmqIniUh%2BOJ1GENsegKjl5%2BL7FzLFD2RVRhpcaoIyOjr1pfZeQZkM%2B1HJ%2Bnn2Z2l30330AKAwZobfrtdd%2BEiGw%2BciYhmAB45S9E1gLVipRuAgxQKP7RMbdmF1lZ2CI9nIlH%2Bq1x5eHqgCiKmvdixoWfYcHmJwT0fuQ5r7H1uo4qeYpg5C2skB%2BhZvK1hmvMhKaLa2rZIbMACEquhQM4zuR8BU7dXCTdekBogvZUpdU1FJrch%2BN6O%2FW9ynKc58jFd0YSY%2Bv6iqaprgWay8wrLqUwwY6pgHiEyuyPT27V2edREfPGDCemzatosaUvCLkbFtINxbTlM6inSsHQTn6xTvAArhWvEpFiZCtchxe6j187w%2BEEcZ6vPcAfZXBDsLRPN82KDrIp%2FlX3fFJ%2BO2aSqE4K4fzeOnI%2BaGYF9rFGv4%2Fuk77TUzaEAoef7mx5glSGtaUYJQJhgiIkz0eaiuWMAuGtdVPCD1AF4ADpxRX2W3AVZs1Lj84aQzDmnaY&X-Amz-Signature=c7354408ad9e7c79b32c6958dd897ee1fdb777a9798f2a4b1455d184d9d8b785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NTB2R6E%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T121600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBHVzkip5sELhlw%2BMVnhPpf2BdsnxTInT28Mr9gHVnRAiEA6gStGTZcoW%2FeSZ%2BbEKa77QAuLlmoXGMbZR8UOJPpdsMqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJbT%2FK5LLrqgiNbRyrcA%2BP7CWvBxGBVGy52vugZcThs0RN0wevGfnLNDbCI6fLdTaF7sI%2FKE6rRWgnMItyV8jn7Q6ayfe5TvtoBhZHTo7YHehuhdOTlDktekl6nt5QN26fA9ujJh%2FhEmiSH9SKIkJ0GHrNoOoRYOaEQ7J%2Fb61xK2NlTsHxgcql3B%2FGYZEDbU2K4KK%2BEw8kZwOivHrWDG9n8vPntu1I6arjnbwf%2F07TJiXPoRTRAHo8y56vUsnnG8HDONZMzzSylZSiRqe2c9e%2B73nDV67I%2FhBpbNwpdHIXe%2BIxa9pcdvf7GNwA23mZoC%2Fc8Fm2IVV6U%2BW%2BmPytPwMBN7VwgJX0qn4gVTljW%2Fq9vH86D0nmCa%2BuZY0NeS1CCceC6Hv%2FfRZSLVQYylNQ188cV%2BlnxD%2BIpXw0Pkz0%2FL8iQ51cWZHDf63%2BEWXol6EB0%2F8zgqiCR663HrdAiUM%2BP1abC0lVI8ubb8OwSn39XjQ7UqD6S7Vr4oxU%2FoafO%2B%2FmH7eEHAKgfgVQstlMO6t6MdPKNwHAlzjelt4r7sFIXk9hek9A9a%2F90%2Fj2mVJzIEDhHYW3xAMpCA3PXZo%2FEFUpOXj7tWo54vmRcAnBcG1Ni3qCqrOf8JvZyQCl1ob5i1RZVH4BlS1UDoP%2FuGYUqMJ%2B7lMMGOqUBppv3zsV%2B%2FHzVksoAbceWcXuXnB123VX8H89dq5tKi8nuhjfsdns0uzx%2BxFZLerD7G%2FvnBVOcmCbB8vhSlCnp0vJc7sG8fvf1taXp%2BJkgqiSFLWTKVPRiUptNYilGLUwCR9HYlHyLbIDDaYS8CorDu8I9HFB9JuNe8kBsC1WFx%2Fs0Ax5Sfc6azOonjvO1%2F7MI557%2ByWYrpnlr7QmXjRfnvsZfhLI5&X-Amz-Signature=29ec0b8c9f5d473ec0e3b29e8fe2b08e7670f88446e6f9fb1ec764fe9c0ede3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TI3VGOG%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T121600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnLjXt2tpGWoYGZRUAPx8kzal%2BKpXB25al305rZ1evvgIhALl3VoAQCaIGdYiFGIAFvEbhNZElX2rtN3z%2BeXDHtP%2FEKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyh7FJzB0ojdtDIr4cq3AN%2FRLAOyuUwOHybZsw8zxmIhvuCnYOVTY7ofKmVWjzW6G0MKa8z22sosOrLC%2BU9l0rpbat%2BIBjexJWmcOQyMn8z%2BEkSQoqyKRbtH%2FF9Y6T0dz4MWUeVS%2BiN3%2B%2BgHnaC9A1AUMC3aVFNYhi36BcXlKY0lMmbTwgtzWqh8NPGfNR8Q2dhZj%2F3PYUg2njgQ9aau3LdgoJDD3zKCM5e0P7L%2FNo2%2FOOyo%2FxkutSKCZ1yYvV2jY3Rxy%2BFVRQC5gcGfWg76i2A4YJhyF8d8C%2F5zUWpnuC%2FsaawIFAey0dQui%2BgQKL%2BTKqolR7A1eTZVPRUJEtPC7pnJdoxXdxnLklF%2FO76CnfgO2gJmdpHuncXk9czf4xa%2BwsdmRQqhqYBNlPkd1Rrnsw5uN3ygt5DEN0OpTo8XRF6hHXtmLfmMRGzS%2BaiOJVa0Yt8Wl7Afigw77yNl7OmW1BeVLAw1EGN5P728k9ro%2BX1noYzIWHuvpulxJHBOJFyjkJhFGTfcOL079qNFww4tl%2FZIJBmEHvA86Kzkg9JYBe8BlMMdrneYwDQ%2FJsIqGrd16sZKJKqdsCeGxtRjPCHababpjZAO6IZOVTPC%2BpEUeqhYCW%2B%2B6KAPZj9GPFbj5seh4fsCijM%2FBGhQenfgTCQupTDBjqkAYall1zFtNUX506kvauprZoY7nBaQO5aX3AYgX1wnZAo7LJTv9CCuyhHkW7TxOYF%2FpB5T2GaBHK%2FBS2xmeX%2FgaPas%2FaHHDcRHnH9P9JsYjNxUoGE15ME7aE9jBSKneOU1MiBoXrGtHJapkjuCVMyE8jvGkbwHvkAHb9OdTt6Re4a2AShv6op%2FJdG3qHaNFrA%2FGsaV%2FxdsshPhapjrenpITOAwgJb&X-Amz-Signature=c5113700df2ee1e8a4794d01fe9a643285248320b8a90dbf0e1fe7b9e29a96ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHIOYXEH%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T121558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzvcxmJHXl5rxKxXZDxfkxEZ4hrlO23TWGfDwxuKORcAiAXkNChjMBsvvhCp%2BYonDr1fNiHX%2FJ%2ByvjaV9hUqUIXASqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdtoSCfoioe8d258hKtwDgJcfIB3e7TgWw2IWc5Z%2FpigfDbK3vZ68K8%2FZdSC0P20hnqOJRHTClPMKdLf7Bq09Su7Czel%2FX1mKtJrpq1582CQWDX0p7WX93F19sybpE3NrCOmLOAg86W%2B%2FkPe3V00bwF5CsgXDEgcDydTCI7kR5Fm%2FgjOu0aQIkMQh6aZEsaSidzugX6AvY%2Bm4Po8cD2aUrKRh2UfgofBv4NcMIV1dbOweQ4Cqpyq5YsoyxjvO%2F3qCqT7L0XMa2ZSnxtRha32jab2zdeG5nrCBD1a8hyCdKGPPx%2BlCp1FDnUZEjJ196jyHl4zL2cycedjiJgEIysJHq0r0vWyiijHzu9G%2Fy2uYZ4bkQMFFh3FWlQ64CSmMr%2FTmqIniUh%2BOJ1GENsegKjl5%2BL7FzLFD2RVRhpcaoIyOjr1pfZeQZkM%2B1HJ%2Bnn2Z2l30330AKAwZobfrtdd%2BEiGw%2BciYhmAB45S9E1gLVipRuAgxQKP7RMbdmF1lZ2CI9nIlH%2Bq1x5eHqgCiKmvdixoWfYcHmJwT0fuQ5r7H1uo4qeYpg5C2skB%2BhZvK1hmvMhKaLa2rZIbMACEquhQM4zuR8BU7dXCTdekBogvZUpdU1FJrch%2BN6O%2FW9ynKc58jFd0YSY%2Bv6iqaprgWay8wrLqUwwY6pgHiEyuyPT27V2edREfPGDCemzatosaUvCLkbFtINxbTlM6inSsHQTn6xTvAArhWvEpFiZCtchxe6j187w%2BEEcZ6vPcAfZXBDsLRPN82KDrIp%2FlX3fFJ%2BO2aSqE4K4fzeOnI%2BaGYF9rFGv4%2Fuk77TUzaEAoef7mx5glSGtaUYJQJhgiIkz0eaiuWMAuGtdVPCD1AF4ADpxRX2W3AVZs1Lj84aQzDmnaY&X-Amz-Signature=8193bf36914e58c290d29ba8ec2f1ed874ca2ad88b4cd75110cb97ded3cf8b49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
