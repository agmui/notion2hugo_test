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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643JP2JX2%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChESgNnkeIeHaUVfEiSRqWnXhcEWqTW5tMYbdgllaQ2gIgSOlsgtOmWoSOQoyrcVH3RBRtsGSKdq7lscsGmv2iTAAq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDI%2B85vWJQiD2l5DzoyrcA5G3VHAdN6czqOStTBp4oCUpu9DN5UWqyYTjJkYiXQnI5Cpbpo3zGdT%2FGaoutabQqZP8bbtkWT4lLlbvPBurg4OGDTBlLsXd66ZVUvO1C%2FdlmFj5Ovm%2B4ubPkv9YlO0UsSRfcbRpOm8VQM6pSjZD81THixY1Vo7PsWwsRiA9%2FOzmm0nJrI3wdMjmQiimkE45MuvH4b%2F2GPRSNdEKGqYVLvEWCh5qeol5SMIgMue4u5AvzNKNFAfssqP%2FQrTYLeMjO5pGCpyc0Tem8zPP8XkWWhx8jI%2BzZSHufLxo5cpPNkQQT3BlFUz1dLpQsAGTwqE93%2B8IbO4N4ip%2FjtqV42QyQVMW94zfrPEwUGOD6aRtojwqL%2BbE2%2FN3TGevEGRPwmOwcDnt7ABYEtJBhefzuS5KQjfbHiGpy5NDT5WZ%2BCd6aMEQwfqTs4Ok9z%2F3mlL2UzZZ1A%2FXRhpK1dOZXDU0oJvH%2F6RuWaXJAZQLrZpKJrYqOOLC1uWtV%2BBuYLh1jXHOlu1nA3yvLABLljzJRip5ElJ2QtFKzPxygIjWq7psNbbLhVP5iLhhGrtmQOGaGJvgqQlWEMlJ62wNyGbuOwfOODiunzEzTISlAEbwI2OPqejjedDAzfzmK1NELEGQectaMNmb7sAGOqUBxjJXdFVdWQ91lM94QhV4ItLceK%2B7FdiVBqJNx%2FVOeAX3YMr5e1pWWqXq7kAApK%2FTO4J%2B2b1j%2BzpmezNSBuXuQLBJydJtiIPDKo7irEsx4cN25CdFCO3sCp4Jt7Tf%2FrW0LcWXRXo1SPJDo4pN8cCjMCls8wDTsht3evHKrbzDgGiDKITfcVxwjt0dPxRDduBfCbLr%2BZZmy0Folj8l%2BXhRshqxtxJ%2F&X-Amz-Signature=d53931e3b5f9b77ee0ddabf3f186f73debc9ad310cdf839775e455d5fa9e2e42&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643JP2JX2%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChESgNnkeIeHaUVfEiSRqWnXhcEWqTW5tMYbdgllaQ2gIgSOlsgtOmWoSOQoyrcVH3RBRtsGSKdq7lscsGmv2iTAAq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDI%2B85vWJQiD2l5DzoyrcA5G3VHAdN6czqOStTBp4oCUpu9DN5UWqyYTjJkYiXQnI5Cpbpo3zGdT%2FGaoutabQqZP8bbtkWT4lLlbvPBurg4OGDTBlLsXd66ZVUvO1C%2FdlmFj5Ovm%2B4ubPkv9YlO0UsSRfcbRpOm8VQM6pSjZD81THixY1Vo7PsWwsRiA9%2FOzmm0nJrI3wdMjmQiimkE45MuvH4b%2F2GPRSNdEKGqYVLvEWCh5qeol5SMIgMue4u5AvzNKNFAfssqP%2FQrTYLeMjO5pGCpyc0Tem8zPP8XkWWhx8jI%2BzZSHufLxo5cpPNkQQT3BlFUz1dLpQsAGTwqE93%2B8IbO4N4ip%2FjtqV42QyQVMW94zfrPEwUGOD6aRtojwqL%2BbE2%2FN3TGevEGRPwmOwcDnt7ABYEtJBhefzuS5KQjfbHiGpy5NDT5WZ%2BCd6aMEQwfqTs4Ok9z%2F3mlL2UzZZ1A%2FXRhpK1dOZXDU0oJvH%2F6RuWaXJAZQLrZpKJrYqOOLC1uWtV%2BBuYLh1jXHOlu1nA3yvLABLljzJRip5ElJ2QtFKzPxygIjWq7psNbbLhVP5iLhhGrtmQOGaGJvgqQlWEMlJ62wNyGbuOwfOODiunzEzTISlAEbwI2OPqejjedDAzfzmK1NELEGQectaMNmb7sAGOqUBxjJXdFVdWQ91lM94QhV4ItLceK%2B7FdiVBqJNx%2FVOeAX3YMr5e1pWWqXq7kAApK%2FTO4J%2B2b1j%2BzpmezNSBuXuQLBJydJtiIPDKo7irEsx4cN25CdFCO3sCp4Jt7Tf%2FrW0LcWXRXo1SPJDo4pN8cCjMCls8wDTsht3evHKrbzDgGiDKITfcVxwjt0dPxRDduBfCbLr%2BZZmy0Folj8l%2BXhRshqxtxJ%2F&X-Amz-Signature=409e5e3f3f9636aaa90c102a5fb397e84d98f991c99ebde38d8c93ea9239eeac&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643JP2JX2%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChESgNnkeIeHaUVfEiSRqWnXhcEWqTW5tMYbdgllaQ2gIgSOlsgtOmWoSOQoyrcVH3RBRtsGSKdq7lscsGmv2iTAAq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDI%2B85vWJQiD2l5DzoyrcA5G3VHAdN6czqOStTBp4oCUpu9DN5UWqyYTjJkYiXQnI5Cpbpo3zGdT%2FGaoutabQqZP8bbtkWT4lLlbvPBurg4OGDTBlLsXd66ZVUvO1C%2FdlmFj5Ovm%2B4ubPkv9YlO0UsSRfcbRpOm8VQM6pSjZD81THixY1Vo7PsWwsRiA9%2FOzmm0nJrI3wdMjmQiimkE45MuvH4b%2F2GPRSNdEKGqYVLvEWCh5qeol5SMIgMue4u5AvzNKNFAfssqP%2FQrTYLeMjO5pGCpyc0Tem8zPP8XkWWhx8jI%2BzZSHufLxo5cpPNkQQT3BlFUz1dLpQsAGTwqE93%2B8IbO4N4ip%2FjtqV42QyQVMW94zfrPEwUGOD6aRtojwqL%2BbE2%2FN3TGevEGRPwmOwcDnt7ABYEtJBhefzuS5KQjfbHiGpy5NDT5WZ%2BCd6aMEQwfqTs4Ok9z%2F3mlL2UzZZ1A%2FXRhpK1dOZXDU0oJvH%2F6RuWaXJAZQLrZpKJrYqOOLC1uWtV%2BBuYLh1jXHOlu1nA3yvLABLljzJRip5ElJ2QtFKzPxygIjWq7psNbbLhVP5iLhhGrtmQOGaGJvgqQlWEMlJ62wNyGbuOwfOODiunzEzTISlAEbwI2OPqejjedDAzfzmK1NELEGQectaMNmb7sAGOqUBxjJXdFVdWQ91lM94QhV4ItLceK%2B7FdiVBqJNx%2FVOeAX3YMr5e1pWWqXq7kAApK%2FTO4J%2B2b1j%2BzpmezNSBuXuQLBJydJtiIPDKo7irEsx4cN25CdFCO3sCp4Jt7Tf%2FrW0LcWXRXo1SPJDo4pN8cCjMCls8wDTsht3evHKrbzDgGiDKITfcVxwjt0dPxRDduBfCbLr%2BZZmy0Folj8l%2BXhRshqxtxJ%2F&X-Amz-Signature=f502c0e08f86c5798a00c8411267d2cff7bd16622752dc4b9e4987afdfb99e11&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKNJFIKP%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T170810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjTIZUCJo6NNfyViujrl%2BTRmifrAIZe%2Fhz6%2FamspH4ZQIhAKPYR9OKbwJlYV8WyjRrEm8k91OUSFKTMTBBA5Rm9y4FKv8DCGIQABoMNjM3NDIzMTgzODA1IgwQbziWyfjycYgBzEYq3AM7TVAn7Y27iaEg2gq8eCtmrskGfq4U3bTxscG6%2F3xqL0eF7jG7MR38q0jgz7x%2Fcs7a6vJAaFmL655X1OG1x%2Fysl9xuJSzUluaqbRhkA1tTM9gvvyE7Eaqk7oHoWpibTQxSQb2i%2BsbA4uRs6M05cD%2FXYt98rXbKltIhgZ5Qwff0TFTlwJH6u7wRwdYnMY2SvE6P0vWIEjGRBcHS%2FkUPQlMqjrnWJdnfzFO2%2FJXv5fd68MpL1Tybdwn409fTV%2BelhcvHQoKtbtwDXGGTEVbEBnA2lCdpzT2dnBwqxvP0Rxdm3fZbPnKL1jgpskgPNRxp0XbU6YCFFlLgM3K8JnnveiZvKkO6C%2B%2BSKLsVJ9EMRyuY8Igipo%2BksIePeNNGV%2BIFmudQt2T6Q10qr3Nk35UZIHM8G2%2FuDpkzelD9vhd0SXlX0YfZciRttefRZ45BA6l2amjEucz%2Bc5mqAAtWVwZEDrjQkO1CMcwL3lDw8WLcBX6WlWRxlMIOAQtqvJV8EF9KV3tRHO6dnv0%2BsVFojRrrzyTAbs7E%2BRMJ5dgfZpfjy1K0o0hcC4MqXnCkf1JpoqyRtNALrWz4rsZ5%2BRXXyXo9eOSKxviWclqmtHOarhcBxm0XaH9e3Ws7MH8TryhwPzCrnO7ABjqkAastCaV%2FyEtC33lwJu7AIfxVRcJv108yxocnzhCsOiYv46IxZay7xq%2FTSwpoelxEOa7lxMd8E1sQufpgq0uF5h0rDkSQ15IbWA6l0DfQIHvf9%2Bhqmg94TQRhtqknq4usk95y848M2VFme6tOA%2Fzd5AZX896BcGd22tv5Hc3uVP%2FRWGP%2B5n%2FteWSZWYKAOGF%2BQCY4fjOoGbHI8clFRiaVmeOMGpIs&X-Amz-Signature=eee8ee19d3ded1a82ea80b71457dba39f5bc45d668f00c6532d5ca1723a5d960&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ2NWCB4%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T170810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzGUcGahLhQEkQWKEDHkn7pzRkwYgn5l0StEqUina6rAiEAhkSe%2F2o107xXQkAn1iglTRqT8g59qsuWLN%2F6lfr7Jksq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDEhUksP73cvs%2F0PuDircAzdfwsDHXvyNDIqXwztxJT8HmATN%2FBCup9lw%2Bv%2BDTVOAgmRXx3HTGA7TmVO%2Fqzgw7PBVjS53Kva9utvl0zeP8w2nhFhY8pzuof649BwNuhB7lbwchvgriBQWWMlC1V%2Fsa%2F3uiPeG3pyzkpO%2BgMmGAo34omlAccKYixiYPv1yYxBeQQcigrPYoMC3%2BxET4QabwvdWs7xIFX2qVF8BNpt6HN0k2%2BN4Ecu2mhttvdP2nV%2BSudT73r3Do3jl98QD5%2BaIdWKLlfY3CBgVePgrxl%2FmVbR2eM9ODOM6akMjW1G4UdSDwRPRqkH1AGyzD3dNQb5vMeRQKpWsuCMStMSKvkYwTUIBDK%2FfrTlBb%2B4Coxvo6SNEz%2FqAbAiaIsIMBBpiiuqx7byEfeH3Ch3meMzTYFTTmskhUSnIa6Br4Uym3tYiOYUITcEVegP1wldj2mJJBjYIZIFYqCc1pbJmuRxeuE0Mrn7U8BT6ulF0WpNzebvAhW63p0r636YIUZy0DMsBMQoLqgfJUSEx4YGlxYb2i9tzkOqUeWBAjV%2FtdmU9Ekyn77NMg0EqNVBM%2BI91ayfSF8bQZEtTUUIsbzzKOAsH98c9BRRqsAWGCZDa9u1x1CSCXH83WrqW6LP0pWqzyQyFMMGb7sAGOqUBUGEcwWEAuGO%2B%2BHbj82ax1fHaXtaTPvNiBvlm5D9E%2BrouIKqNA6AuqXVMEULTZB8zOFJm3y21qz6MtWp2LjdUUVyMM5Nv6oTUeslFwyHjpoATTK8HTd4WK5Lr2eQbQOUkvqod%2BRfMCuN17QmAshPTEGqpsP4YPxMLtHZHs0k23VttkrOSw6FbI4JRjW5lH%2BVYHR5XG36E9qgnj9AD7PkZnpn8l%2B%2B%2B&X-Amz-Signature=74391e798ab6a82eeeea0b87df5d066fb1419335151e0871d7da20030d46f8be&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643JP2JX2%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChESgNnkeIeHaUVfEiSRqWnXhcEWqTW5tMYbdgllaQ2gIgSOlsgtOmWoSOQoyrcVH3RBRtsGSKdq7lscsGmv2iTAAq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDI%2B85vWJQiD2l5DzoyrcA5G3VHAdN6czqOStTBp4oCUpu9DN5UWqyYTjJkYiXQnI5Cpbpo3zGdT%2FGaoutabQqZP8bbtkWT4lLlbvPBurg4OGDTBlLsXd66ZVUvO1C%2FdlmFj5Ovm%2B4ubPkv9YlO0UsSRfcbRpOm8VQM6pSjZD81THixY1Vo7PsWwsRiA9%2FOzmm0nJrI3wdMjmQiimkE45MuvH4b%2F2GPRSNdEKGqYVLvEWCh5qeol5SMIgMue4u5AvzNKNFAfssqP%2FQrTYLeMjO5pGCpyc0Tem8zPP8XkWWhx8jI%2BzZSHufLxo5cpPNkQQT3BlFUz1dLpQsAGTwqE93%2B8IbO4N4ip%2FjtqV42QyQVMW94zfrPEwUGOD6aRtojwqL%2BbE2%2FN3TGevEGRPwmOwcDnt7ABYEtJBhefzuS5KQjfbHiGpy5NDT5WZ%2BCd6aMEQwfqTs4Ok9z%2F3mlL2UzZZ1A%2FXRhpK1dOZXDU0oJvH%2F6RuWaXJAZQLrZpKJrYqOOLC1uWtV%2BBuYLh1jXHOlu1nA3yvLABLljzJRip5ElJ2QtFKzPxygIjWq7psNbbLhVP5iLhhGrtmQOGaGJvgqQlWEMlJ62wNyGbuOwfOODiunzEzTISlAEbwI2OPqejjedDAzfzmK1NELEGQectaMNmb7sAGOqUBxjJXdFVdWQ91lM94QhV4ItLceK%2B7FdiVBqJNx%2FVOeAX3YMr5e1pWWqXq7kAApK%2FTO4J%2B2b1j%2BzpmezNSBuXuQLBJydJtiIPDKo7irEsx4cN25CdFCO3sCp4Jt7Tf%2FrW0LcWXRXo1SPJDo4pN8cCjMCls8wDTsht3evHKrbzDgGiDKITfcVxwjt0dPxRDduBfCbLr%2BZZmy0Folj8l%2BXhRshqxtxJ%2F&X-Amz-Signature=4778d1559a1c62553b48aac7d2853bfc06419b54012f5f9cf4bbcab97ec491d1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
