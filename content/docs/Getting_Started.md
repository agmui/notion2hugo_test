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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UFERTBB%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIBTaqOwxb6vCFBxJm2NBMZNpoHAWB%2F84jOUSBx9xtl3NAiEA0Z%2FkVDvH5RcmzwnRpGBRYLeAV4j5QQscW0IrvdOXcfEqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZqveOrzt9CJs05%2ByrcA%2F7ToY18fA4cP1VxNqXzphafOjRZPTEjRWAgq8PqGOJ8iXXs3NJQtAXFho2ndPBkCpDVphIPYbgNOQ%2BMe7pCfYIVacAEXo5wibT01V7U87ZMv14KKNEkfiMbvFWWJqDcwPhMF37%2FI7HYCCB4t%2Bf%2F1YEWsSryGP7v0ZT0tPe8M%2F99MeMq0Rb8901Uyo8JVh2eGG44IcVjXge1xUIgrw2zReG8oAbbwa2S9NE1Z867WX41FhtqClDPI83tpogt2zF6sqlrOJbpOMXDi58nOGI7ZjeXy9VQYgbehNlWWEchOPOyVWvdlQQhjISouEwSKLqLFQFtD04L5v292m81vQV18StvDw%2B%2FUvq%2FASYi5V7EphibDx0yGCo2UECtTQaPnhTirgjEkwDWEGEdw%2FaExxH1TyLZysdoocIGYge%2F4UtkYVNmQ68tt97zfDvP8OSxIjr5w3P6BNyGp2IjPoLvJHC5lHudzqUm2DpOcOmYdT0i4NeYg%2FqgiQSOpnkQv0PW6u04eZJZCyQ1CKwcNSmslu1klJkBW2X5U4LUHYk54s1RFGFUaLCIN4RYqJ24tBU8gIFEBKscQJVzZSEcAWKOov2Dsw2yV46B6h4sQ1y5XgO9SM8yeb3NHvgu%2BUL%2F97ISMIvH48IGOqUBaumF%2FITKezgUix7UlH34yeGj1QsdcYhDsqjm8ZAuOftswnbafaYkJPS5G%2Ff83OTcI2tm%2FTa%2F9XMiOdk0lHd8DJW1DGwm3Swgyg3ar07W6LNRKxZyjEmAhMlY9FjqkBf0oCYkZ6%2BbPlgjkPzzCXefQU5DdXL%2BVRa9wvflJiluAxW%2F%2BGAocDj2B0TS9PUW7XTSu8aYY5vr8j253v0b665Rn6nO%2FX1r&X-Amz-Signature=2043ebfc4a4eec46dac5d5424df21e0bb88bab80438b6e76687656c264e1d7b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UFERTBB%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIBTaqOwxb6vCFBxJm2NBMZNpoHAWB%2F84jOUSBx9xtl3NAiEA0Z%2FkVDvH5RcmzwnRpGBRYLeAV4j5QQscW0IrvdOXcfEqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZqveOrzt9CJs05%2ByrcA%2F7ToY18fA4cP1VxNqXzphafOjRZPTEjRWAgq8PqGOJ8iXXs3NJQtAXFho2ndPBkCpDVphIPYbgNOQ%2BMe7pCfYIVacAEXo5wibT01V7U87ZMv14KKNEkfiMbvFWWJqDcwPhMF37%2FI7HYCCB4t%2Bf%2F1YEWsSryGP7v0ZT0tPe8M%2F99MeMq0Rb8901Uyo8JVh2eGG44IcVjXge1xUIgrw2zReG8oAbbwa2S9NE1Z867WX41FhtqClDPI83tpogt2zF6sqlrOJbpOMXDi58nOGI7ZjeXy9VQYgbehNlWWEchOPOyVWvdlQQhjISouEwSKLqLFQFtD04L5v292m81vQV18StvDw%2B%2FUvq%2FASYi5V7EphibDx0yGCo2UECtTQaPnhTirgjEkwDWEGEdw%2FaExxH1TyLZysdoocIGYge%2F4UtkYVNmQ68tt97zfDvP8OSxIjr5w3P6BNyGp2IjPoLvJHC5lHudzqUm2DpOcOmYdT0i4NeYg%2FqgiQSOpnkQv0PW6u04eZJZCyQ1CKwcNSmslu1klJkBW2X5U4LUHYk54s1RFGFUaLCIN4RYqJ24tBU8gIFEBKscQJVzZSEcAWKOov2Dsw2yV46B6h4sQ1y5XgO9SM8yeb3NHvgu%2BUL%2F97ISMIvH48IGOqUBaumF%2FITKezgUix7UlH34yeGj1QsdcYhDsqjm8ZAuOftswnbafaYkJPS5G%2Ff83OTcI2tm%2FTa%2F9XMiOdk0lHd8DJW1DGwm3Swgyg3ar07W6LNRKxZyjEmAhMlY9FjqkBf0oCYkZ6%2BbPlgjkPzzCXefQU5DdXL%2BVRa9wvflJiluAxW%2F%2BGAocDj2B0TS9PUW7XTSu8aYY5vr8j253v0b665Rn6nO%2FX1r&X-Amz-Signature=611d203089094b16b56e400eb2adda5880b1f54e20f5d15c19ed7195f1b4163d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UFERTBB%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIBTaqOwxb6vCFBxJm2NBMZNpoHAWB%2F84jOUSBx9xtl3NAiEA0Z%2FkVDvH5RcmzwnRpGBRYLeAV4j5QQscW0IrvdOXcfEqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZqveOrzt9CJs05%2ByrcA%2F7ToY18fA4cP1VxNqXzphafOjRZPTEjRWAgq8PqGOJ8iXXs3NJQtAXFho2ndPBkCpDVphIPYbgNOQ%2BMe7pCfYIVacAEXo5wibT01V7U87ZMv14KKNEkfiMbvFWWJqDcwPhMF37%2FI7HYCCB4t%2Bf%2F1YEWsSryGP7v0ZT0tPe8M%2F99MeMq0Rb8901Uyo8JVh2eGG44IcVjXge1xUIgrw2zReG8oAbbwa2S9NE1Z867WX41FhtqClDPI83tpogt2zF6sqlrOJbpOMXDi58nOGI7ZjeXy9VQYgbehNlWWEchOPOyVWvdlQQhjISouEwSKLqLFQFtD04L5v292m81vQV18StvDw%2B%2FUvq%2FASYi5V7EphibDx0yGCo2UECtTQaPnhTirgjEkwDWEGEdw%2FaExxH1TyLZysdoocIGYge%2F4UtkYVNmQ68tt97zfDvP8OSxIjr5w3P6BNyGp2IjPoLvJHC5lHudzqUm2DpOcOmYdT0i4NeYg%2FqgiQSOpnkQv0PW6u04eZJZCyQ1CKwcNSmslu1klJkBW2X5U4LUHYk54s1RFGFUaLCIN4RYqJ24tBU8gIFEBKscQJVzZSEcAWKOov2Dsw2yV46B6h4sQ1y5XgO9SM8yeb3NHvgu%2BUL%2F97ISMIvH48IGOqUBaumF%2FITKezgUix7UlH34yeGj1QsdcYhDsqjm8ZAuOftswnbafaYkJPS5G%2Ff83OTcI2tm%2FTa%2F9XMiOdk0lHd8DJW1DGwm3Swgyg3ar07W6LNRKxZyjEmAhMlY9FjqkBf0oCYkZ6%2BbPlgjkPzzCXefQU5DdXL%2BVRa9wvflJiluAxW%2F%2BGAocDj2B0TS9PUW7XTSu8aYY5vr8j253v0b665Rn6nO%2FX1r&X-Amz-Signature=f77af54c7397aa919e5bcebcb63d1c17b8209855bf0269538c31e31e3c7c9893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4OP667Y%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCGAOEvQb1J1ihzoBSbuizAZVSFPVxGJeaTlFRYCthQygIgJIZW971NvbLgYixfVftYY%2BzF9sKhp30z0fbFJy%2BEweYqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHaJfVx%2FziZXwzrT8ircA5M9PuesTnxpG1k868chjDmKZWJJ3MGvMnkytmPjxBBdFPhBQ5XSbtcmZEBw6dDz1gy7uvM%2B0EvERu1YVItUWiR9nRdTVyL%2BiIyfaCQUvd4RdSE23dm%2FtJuoXwq3fGuYLCJLaiM6NHMFi8NnP4NYiv7wcCtneA9z8vMo5LRsS4G9Fl6gVVQupRtd18ht8qCmPFvxbSWxCcJClt%2FBmR%2BTVT1A7uW7iwUe%2FzLj8Sn84rFqTLqgXRrQUFq4FxLATIGnPtvGpcLfAnrGgH%2Fr9D6H2FjzDUFzqrnjVqAjbufZ3eZly26ZuxvIkcrYoCCuyi3UyEm6Ftq%2FY22apPIc3%2F6RXEQBLEj%2BySONY9gdW8TWUZhU%2Bhp4990aiZdhw0sozi8WYIT9rc3WNdQfdfyn8N5Y6Voj8plZqEPPnBVcfl6eniWAiyD%2BqTbm%2BFOSeblAT1jHKjynfmv8DlQ1KkelgqKKUjqMHR118bdZlSSq8%2B%2BtFKHhu1%2BG2tpn6b8iKA2Acj7pwO7yYyFWiA0%2F1w7Fd%2F7SMRC2DKkNpI%2BUkJr84rWfkg17xI9oSny08bRcIoQdYJlLNXQhQ7IcDoJjPVxHhygCtASq3mMfVH%2BQOivh0JXdPonhmtQC6XjNkuFkYg%2FLMNXc48IGOqUBVK2oY0%2BXiS8Io6wAf0S%2FPn%2Bjq4R%2B5O%2FewxNwlsSxb7undSh%2Fpwr10x1el5UcSu27HHr7JDRkRjCmuLaxh7cxcxC%2FEwVtU%2F0Cm4KFp1PCSjWX7hB8cfX8t%2BjKUmMUemVZKUaFT0XzmRW4JvTXQ9jDuDqSBOOTU32Jc1tP7Cw4kjKIryt9kz00jbrgV1aWD12tfGM%2F0i5Yx74HcdzRLYVZwIx2Xa9p&X-Amz-Signature=79268bd4947ebedf498af28dbce1e2a37b70207f7598b158b7cdf3440b55c836&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YERELCK3%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDah0U%2Bpb6srFI9S1fcsMHQryf%2FViaDd%2BM9l6lgZD6YhwIhALNGrYp7hLg0v5KtYrwCZ4yu4QQjraDNVOp9jI31aJvBKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igza5kdEPQkN3TQVPx8q3AO98%2FjC%2FBXhl5zq9UTfoNMTPKB6qAshjlJCxTg7IzGo9ufQP%2FbbC8NY20VJHF8K4BMAnRTIUwZaeDBamNKdGy3ZZ1P%2BfHf5mU8Pz2jihIVlm%2Fg6ndzCWmLA3%2Bu2n3P1cXk2KDGUDv6ZYoh5u52fgB751I2yXr6bJWCFs6NujVyCTHG9g3w%2Bsl9RjlV9GN6d9TldhWNGszCWMoOwl9%2BjV%2FVPy%2FUcc6IN7UNKnlKm%2FdSGLdBH5dcJAHp30si4Sba3sCAbaAmwjRAkAR7iCQk5n6LEF4%2B1cBoZ04mfwiYFAlSEImF8F6YmZ560CMbBaCPsDqC7kTwPJeyKGlnd6okXk5P7blaJbtAzzvd1tbgwSZ8XD%2BRWWzRWda9EXuf58CiPcxaFB%2FUmpBtQMePyaRnZfNDHkPwAfV7fvEbq77nWIBZqvMLEXAy837YrFz8DgKXVrP1b1pXnF3ccNeIAgiqm1XP%2FpPorXECK2zV6SaWJKCUkV6LIpmFUufAZOze7C0HzzZCBW74w7Pj7pNwRqi36A0ebQRa0Zsfu3YfCd0xnevcqJvDobGZgKcO5HeQ680sB%2FBLpT04w2B0tRYmNiM9PBKXaJgxlGLJBC0kLeiXcIqPDsFWCUz5sqKLqOVhsUjDD3ePCBjqkAdhd9MTUGBKF%2FK%2Fcg9l%2Bv1KBVdGHH9WPc5PexeBblphRx3N7olT34SFUMicxrjZ8RIJT%2B5Q78Dgbt2yV3qz8t2DVv7S%2BBQtKj0T1w3p3j8%2BWQf885dTi6MgBByv%2FFUK7uL26x0k%2BejAF2ql2415EeyEX%2BZliOi55wo9vefbk7kaRTkLOTbZcaGm7P0pvE5UDTr1%2ByUeEHfleL0Hu5%2BfX0efHPPCZ&X-Amz-Signature=df1c12fd0ff84792da2d7b466c5d28b6eb037e8f1e5acf51d050fbedc9f0fc30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UFERTBB%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIBTaqOwxb6vCFBxJm2NBMZNpoHAWB%2F84jOUSBx9xtl3NAiEA0Z%2FkVDvH5RcmzwnRpGBRYLeAV4j5QQscW0IrvdOXcfEqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZqveOrzt9CJs05%2ByrcA%2F7ToY18fA4cP1VxNqXzphafOjRZPTEjRWAgq8PqGOJ8iXXs3NJQtAXFho2ndPBkCpDVphIPYbgNOQ%2BMe7pCfYIVacAEXo5wibT01V7U87ZMv14KKNEkfiMbvFWWJqDcwPhMF37%2FI7HYCCB4t%2Bf%2F1YEWsSryGP7v0ZT0tPe8M%2F99MeMq0Rb8901Uyo8JVh2eGG44IcVjXge1xUIgrw2zReG8oAbbwa2S9NE1Z867WX41FhtqClDPI83tpogt2zF6sqlrOJbpOMXDi58nOGI7ZjeXy9VQYgbehNlWWEchOPOyVWvdlQQhjISouEwSKLqLFQFtD04L5v292m81vQV18StvDw%2B%2FUvq%2FASYi5V7EphibDx0yGCo2UECtTQaPnhTirgjEkwDWEGEdw%2FaExxH1TyLZysdoocIGYge%2F4UtkYVNmQ68tt97zfDvP8OSxIjr5w3P6BNyGp2IjPoLvJHC5lHudzqUm2DpOcOmYdT0i4NeYg%2FqgiQSOpnkQv0PW6u04eZJZCyQ1CKwcNSmslu1klJkBW2X5U4LUHYk54s1RFGFUaLCIN4RYqJ24tBU8gIFEBKscQJVzZSEcAWKOov2Dsw2yV46B6h4sQ1y5XgO9SM8yeb3NHvgu%2BUL%2F97ISMIvH48IGOqUBaumF%2FITKezgUix7UlH34yeGj1QsdcYhDsqjm8ZAuOftswnbafaYkJPS5G%2Ff83OTcI2tm%2FTa%2F9XMiOdk0lHd8DJW1DGwm3Swgyg3ar07W6LNRKxZyjEmAhMlY9FjqkBf0oCYkZ6%2BbPlgjkPzzCXefQU5DdXL%2BVRa9wvflJiluAxW%2F%2BGAocDj2B0TS9PUW7XTSu8aYY5vr8j253v0b665Rn6nO%2FX1r&X-Amz-Signature=25058755e26f1bf7753b0460f4a742db28a180b8fd4a50a1d621d00a5326c60c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
