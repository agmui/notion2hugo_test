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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTJDHACW%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQC8IAxOTEmtekUlLSz2sgrqrIHz8wjvK0Rm4Mi7samNEgIhAPMj7y3%2B%2BNdsaMiNmE3CKB3sLZ0K7ViovLtYKLMbt8OxKv8DCHMQABoMNjM3NDIzMTgzODA1IgyYnDZ5AZjdcgnFyuEq3APqZkXCrjXyP8uH52iJ7gBVyRgi5Nncejr0CZOhLBpXwQLyCkGS24ERj%2B7qvsFhJ0nnEbNRAdopaXCin3iN3WDX7Qx6bb7UUt2jE3E7aYwSLX3OWaciO71QTMgE8jwqcJIUbBaSHBVA7ujL7xdpGlaJuW4Q2%2FyltkmtiREy2rR7g53N5R%2BCjMs68B5GOiXrPVg4TfoyrzLH8wXFXOETK9ofz4z9S0DhgeJg1Q1VxbLrH66NusWE0RHUXJIqHjsWpEhxidni%2FgkF1C94qrVQMd1f51dBTko9x97kEmPEJeH29HbkbCs7pJ2A76QDm6N61qT6J4%2FIwEr%2FBKJL9tTTO1Txb%2FEiPkv6hZeNBFFunuphqc%2FhV64LyC2DVAlm26Dtu%2BvX4Q6udVGLZBSSeHe3%2F2HqLkB%2BUm6MvTju2%2Fo6%2BVsjudTkB5dcAZxUcN2AkJszV7QgIZ%2BG6u0Qpu8icQyeEVYExy%2FgYuDICG6hz1T49syFJVk5Fytj%2BQShaW448wVapTwTe1cWhhJc7VXLyekig1mUe7Zonlkc16MVeJFSSXm95XztBVajycD%2BoHoESOI7I3HMNC6TwFCh5CXroWcAZ7ChsNdR2x2vBgUqbbwDEP28cC9y1wrxZxfXmHxQzzCxi5%2B%2FBjqkAbpDqoVP2RacauY4VRuWwmsLI%2FEqnKpPBc1nHLBoIcAEnQmjxe7T3t%2FMqi6SEqHFVjKJrR5LuNNO07PrjrgFbUnlZJcX1%2BX%2FT0gzaDeM%2B2VMJgeH5SDBYrcY1kdy2OSTYf6QQzJcReSox9hPTXf%2FFXCCVxlrsICUJchTNDTrMpBrtk0IxzFKIHR9awXAqYivWj9btFFSKmwGo6WX2N1q3olZ3u7M&X-Amz-Signature=20536da742140e72930f7708603213727c930c8c0fd6f1c11afd05f8f624740f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTJDHACW%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQC8IAxOTEmtekUlLSz2sgrqrIHz8wjvK0Rm4Mi7samNEgIhAPMj7y3%2B%2BNdsaMiNmE3CKB3sLZ0K7ViovLtYKLMbt8OxKv8DCHMQABoMNjM3NDIzMTgzODA1IgyYnDZ5AZjdcgnFyuEq3APqZkXCrjXyP8uH52iJ7gBVyRgi5Nncejr0CZOhLBpXwQLyCkGS24ERj%2B7qvsFhJ0nnEbNRAdopaXCin3iN3WDX7Qx6bb7UUt2jE3E7aYwSLX3OWaciO71QTMgE8jwqcJIUbBaSHBVA7ujL7xdpGlaJuW4Q2%2FyltkmtiREy2rR7g53N5R%2BCjMs68B5GOiXrPVg4TfoyrzLH8wXFXOETK9ofz4z9S0DhgeJg1Q1VxbLrH66NusWE0RHUXJIqHjsWpEhxidni%2FgkF1C94qrVQMd1f51dBTko9x97kEmPEJeH29HbkbCs7pJ2A76QDm6N61qT6J4%2FIwEr%2FBKJL9tTTO1Txb%2FEiPkv6hZeNBFFunuphqc%2FhV64LyC2DVAlm26Dtu%2BvX4Q6udVGLZBSSeHe3%2F2HqLkB%2BUm6MvTju2%2Fo6%2BVsjudTkB5dcAZxUcN2AkJszV7QgIZ%2BG6u0Qpu8icQyeEVYExy%2FgYuDICG6hz1T49syFJVk5Fytj%2BQShaW448wVapTwTe1cWhhJc7VXLyekig1mUe7Zonlkc16MVeJFSSXm95XztBVajycD%2BoHoESOI7I3HMNC6TwFCh5CXroWcAZ7ChsNdR2x2vBgUqbbwDEP28cC9y1wrxZxfXmHxQzzCxi5%2B%2FBjqkAbpDqoVP2RacauY4VRuWwmsLI%2FEqnKpPBc1nHLBoIcAEnQmjxe7T3t%2FMqi6SEqHFVjKJrR5LuNNO07PrjrgFbUnlZJcX1%2BX%2FT0gzaDeM%2B2VMJgeH5SDBYrcY1kdy2OSTYf6QQzJcReSox9hPTXf%2FFXCCVxlrsICUJchTNDTrMpBrtk0IxzFKIHR9awXAqYivWj9btFFSKmwGo6WX2N1q3olZ3u7M&X-Amz-Signature=d38b1e805c05dec975a782c28acf22e13897ce93fc1b85ab05867387d7d1f5b1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S74HXM5W%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIFScGTb45Avi5e66rHiswcsNUgPOd7BDbsn5TEc1HRbbAiAkeupVY%2BOFAc2r9DJz1ZpMIymHGV8Z%2BjB%2BwGxQ1DA1Yyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMfCU5c7UBrG9Q%2BdyNKtwDif12%2FbYHm5UPU0PDciuFqIM8BC1IyBRDKU3i9Cb3QBb4uKWsvJa%2FzZ5YxwDgYMZTvN38I21z%2FPwGiswg6f2pCrIRQ8ZGs0LG1ne0wv0%2FLJnuwsm%2F1xIQukb1x7VRw3MAxxw%2BknkXv6bemhDhr4ssUcTIREv32Ety9OHFUAAtuymkFNO7bynYy61U94idqPXJ%2Bbl8koZBWaoiLNM6xigTyODbq6Hg7QnD65%2BN24x1ulVZkBFuqhWiwlKlACs2mwkZYlJbJ0isb%2FRcIL8rQQbGeS13dhwjSIFdn6P6Y0fsjenUQZi9YpCcC5U%2F5S8EPqNNsRRtISy7LwUng4S4AWoH2VS%2FlunYUpN%2F%2BaaZykjZQdasWjeY77JMLKnfUPi0xqy5A%2B0xJZ8d%2FvVEhBdx%2Fl9Q%2BzmeEX3J1jPkLnmISd3BEhkNmjs9R9RoZBMxizfBzMaKk4%2B%2FvvLPNNuBvTHFM5Pl79xoBvYtnWpfO7tM6aOWlbAUbN3uigcal%2FmftFjKWfpXXLvZlZSSRjt3puu3u5boLTWnoF%2FAjTxssIx%2BY8xmyb26PdAkoe9P%2BlBAeayxIT03rJbLkmCbjEiDJBtLDCead%2BgdF7sX1EGFg%2BjAYfdpngjgv0q0QllfyT5L3Bkw5IufvwY6pgGur4r8Ubb2GWK4%2FWwJ0OXuca0DNOUi5hgTKgQOP5EAjTNczcLTNIcG7hHGprwzRiU9OdPy6X%2Bm0YMBxFQzO7jzERh1Q1GGtRtjRqwm8t2H%2BZ114K32mXoq%2BK2bHdMWzupPb9nOJqh3m2BTmAid%2FZuSBds1VNdsMZPc%2FycVxuVBBisRjmFTp%2Fwarhqk541BVOziqLJxveN98I60KtaX%2BreLgMz5KeZX&X-Amz-Signature=2c4c676cd522593c56663a3915d9b45729236249cebe8275c86a8037cc92078b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXGADOJ6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDXFo02z7QNYBrG4PhqIvdyTDKVA%2FGjb20L5PP3GgWlRwIhANlLLxn0FI3oBBWJJDqyfjk9zHIPE2isxv87e1MmyzYsKv8DCHMQABoMNjM3NDIzMTgzODA1Igy5RDEliM50RTZfy1Aq3APrV9IPvrCN34DVL99r4l0OmvgkxpHvFzL28ct1gAHNZUOzzsNAeqlLh3I3NlT0JvvWpCWn51CZnfTUAHsNL6FWb4%2FjOSr6Mza38m%2FjffSgG6Ybra3DGECZ3r3c0mg2LnaLwiT4RH6D5LbNXYhpemakVqY4N0%2F53sgvbfDvKuMxpuefCvTXkKxgyujIi9xZi4gI8CAfXkw4B%2BRKd3eM9IR1%2FzhVRmMUYonzGoYKZD4KqoSSkA%2BdWMTE0DsTXxcdmJlxakqzOVm0KVgcLanQcmMM3Q7Z1Y4Q%2F1W74BAXOPj68qXMgzzU2z3GPjzwbqU4vW%2FKwtmUVa41Fwn67HZ4he7iouGbV8896Yddt7XEPwq8iA8%2FAQNdnZpCkntNrWuDFF4xxqdF8%2F3l88cvirc8nJSFF3wflCsHqcpxBaTNXxJM7FgdsKeVN8aqW36gahWzXJJ6CsiKmn1gYiHfyVduMz1Nxkz5Ho%2BxeA%2BWiDGdQqFj5h5hETIgnww4jo6xtYLYnVar7xzC2WupJ%2FYnReykhQedZ6KhHPlmzSQidSA1JNXe39zAb%2B4z1Zd4%2Flnez0euecJj43FcF%2BzajwmUmNz8KGptwolamUVyQ8nofMyrXiFu59exSB%2BeltcWdDOsSDC2i5%2B%2FBjqkAb9w07Uk7MqS%2ByC%2FRYNPajCHXPB67SaImmSDSq2X73GdmUWdLIch1wuj4WRyEQZ8%2FyqsmU2VKNE%2BVIO6JWUfAdqbKVxg0nPGxji5rL8TYR7Wjts2VJ3xTqHh6rkANMjK7k1VMHW05oldDbRzuo28Eqst08TUhtjtTg4MW2VL7hWEvwVrcoqhEj88bJXqBgoaSStsFj2lKHHES7R1u7ZhmMeyh6qi&X-Amz-Signature=eb0517e6809d189b3e7d125c3d2ae45f6651d66bfe3651d29780770dd650f586&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTJDHACW%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQC8IAxOTEmtekUlLSz2sgrqrIHz8wjvK0Rm4Mi7samNEgIhAPMj7y3%2B%2BNdsaMiNmE3CKB3sLZ0K7ViovLtYKLMbt8OxKv8DCHMQABoMNjM3NDIzMTgzODA1IgyYnDZ5AZjdcgnFyuEq3APqZkXCrjXyP8uH52iJ7gBVyRgi5Nncejr0CZOhLBpXwQLyCkGS24ERj%2B7qvsFhJ0nnEbNRAdopaXCin3iN3WDX7Qx6bb7UUt2jE3E7aYwSLX3OWaciO71QTMgE8jwqcJIUbBaSHBVA7ujL7xdpGlaJuW4Q2%2FyltkmtiREy2rR7g53N5R%2BCjMs68B5GOiXrPVg4TfoyrzLH8wXFXOETK9ofz4z9S0DhgeJg1Q1VxbLrH66NusWE0RHUXJIqHjsWpEhxidni%2FgkF1C94qrVQMd1f51dBTko9x97kEmPEJeH29HbkbCs7pJ2A76QDm6N61qT6J4%2FIwEr%2FBKJL9tTTO1Txb%2FEiPkv6hZeNBFFunuphqc%2FhV64LyC2DVAlm26Dtu%2BvX4Q6udVGLZBSSeHe3%2F2HqLkB%2BUm6MvTju2%2Fo6%2BVsjudTkB5dcAZxUcN2AkJszV7QgIZ%2BG6u0Qpu8icQyeEVYExy%2FgYuDICG6hz1T49syFJVk5Fytj%2BQShaW448wVapTwTe1cWhhJc7VXLyekig1mUe7Zonlkc16MVeJFSSXm95XztBVajycD%2BoHoESOI7I3HMNC6TwFCh5CXroWcAZ7ChsNdR2x2vBgUqbbwDEP28cC9y1wrxZxfXmHxQzzCxi5%2B%2FBjqkAbpDqoVP2RacauY4VRuWwmsLI%2FEqnKpPBc1nHLBoIcAEnQmjxe7T3t%2FMqi6SEqHFVjKJrR5LuNNO07PrjrgFbUnlZJcX1%2BX%2FT0gzaDeM%2B2VMJgeH5SDBYrcY1kdy2OSTYf6QQzJcReSox9hPTXf%2FFXCCVxlrsICUJchTNDTrMpBrtk0IxzFKIHR9awXAqYivWj9btFFSKmwGo6WX2N1q3olZ3u7M&X-Amz-Signature=117851b4442714e807d5977bab99e1294a4ce6c16df4f4652de3911ea2f2e5da&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
