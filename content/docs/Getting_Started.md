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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLG3BNF7%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCZDwNBQWBNKkGFTVZad5edHsneW8AtgHYz0Sq0Zz%2BXQAIgX5sbK9Uq%2BrWoh5u5iEqMvhMmyirNy4NfUjQ92YqrxDQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNoDNno5%2FLqzdL%2FCFircA9qD3NsRXeUKxy26X8rPkXo8VUMn3jyO1aBXbZCrK1%2FwdpIbt9rVX28u0WzkYdGqu8YYNlzVJZCfn%2BDFrZuv%2FKfJfT7A1bOXvkSJxYjbO3ljixqyNzPomsaQWKhPPtJckWa7DJ78uL50Lh9XQ5Igu8xCDBf1m1RFg4jnhtsnyL6GcFo5c0zyg%2Bv5vZlku4gdosP7N3kbsgM6zdciDSzlcnAHBHMWiy2ngdgpsK%2FEArdjpqMw6ZYPizGkg5jEuxnlvHvUS9qqDCnhP%2BSOW6wlBilAkXA%2Fl6XyHdhSTgEMCoJX4TcyYaAwvtBGxhugqcrfj1sBKPPvQnMkyt1kiu2DJG49hLZJW0GtPp0I9B9pSnQDyyqJUAZ8ludkQdznKjoANFkhw1aRbYfXsvpXsAPU%2FgbaDwxDttZnTUCHwQ1lrNZA%2F0eHF0BGKA%2Fa7UPH9nPvz9MpCdxmrLhoTb7EnDZC4b9bUVslduWt8eOlViyJbABwS2KFIzoehFYFa9SkYSETl9SiA4hd48X3kCUVlKM5sA2DX5D8v%2B8Vie8wmIKy52EVHJSrRwJ6rqQ%2BEmiBdlij5qC%2FRUfoNMxil1MpZnR07OMbH99J5j6aoxJEA%2FP%2F9LuZ98iMwgaMv4pWnSb5MNTt4cMGOqUBzTR6%2FEB1ZrZCelhgMavKD%2FF3XxEDSEsS55yBk9qBAyH5Hw%2BXNUbwF3imqrqvjD1Lm71ZGaQ1veasDMNifrafUTjGodiE%2FdWVKJ0KNGOxHvNH9PShEORfqNy4aJiucz%2BrvSL6FOeyqX8KnGjy8tZwnOTaToHHzOEvDZr0VVB%2BuxRHEj201%2ByIMyVp9eo%2FPmd%2BDJiM5UKTo8s%2BGLFYv3AOX86mryqu&X-Amz-Signature=a636719b262559dad4fa1bcaade70ed3a0367617b22fad4f4e604e7c270a8f29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLG3BNF7%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCZDwNBQWBNKkGFTVZad5edHsneW8AtgHYz0Sq0Zz%2BXQAIgX5sbK9Uq%2BrWoh5u5iEqMvhMmyirNy4NfUjQ92YqrxDQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNoDNno5%2FLqzdL%2FCFircA9qD3NsRXeUKxy26X8rPkXo8VUMn3jyO1aBXbZCrK1%2FwdpIbt9rVX28u0WzkYdGqu8YYNlzVJZCfn%2BDFrZuv%2FKfJfT7A1bOXvkSJxYjbO3ljixqyNzPomsaQWKhPPtJckWa7DJ78uL50Lh9XQ5Igu8xCDBf1m1RFg4jnhtsnyL6GcFo5c0zyg%2Bv5vZlku4gdosP7N3kbsgM6zdciDSzlcnAHBHMWiy2ngdgpsK%2FEArdjpqMw6ZYPizGkg5jEuxnlvHvUS9qqDCnhP%2BSOW6wlBilAkXA%2Fl6XyHdhSTgEMCoJX4TcyYaAwvtBGxhugqcrfj1sBKPPvQnMkyt1kiu2DJG49hLZJW0GtPp0I9B9pSnQDyyqJUAZ8ludkQdznKjoANFkhw1aRbYfXsvpXsAPU%2FgbaDwxDttZnTUCHwQ1lrNZA%2F0eHF0BGKA%2Fa7UPH9nPvz9MpCdxmrLhoTb7EnDZC4b9bUVslduWt8eOlViyJbABwS2KFIzoehFYFa9SkYSETl9SiA4hd48X3kCUVlKM5sA2DX5D8v%2B8Vie8wmIKy52EVHJSrRwJ6rqQ%2BEmiBdlij5qC%2FRUfoNMxil1MpZnR07OMbH99J5j6aoxJEA%2FP%2F9LuZ98iMwgaMv4pWnSb5MNTt4cMGOqUBzTR6%2FEB1ZrZCelhgMavKD%2FF3XxEDSEsS55yBk9qBAyH5Hw%2BXNUbwF3imqrqvjD1Lm71ZGaQ1veasDMNifrafUTjGodiE%2FdWVKJ0KNGOxHvNH9PShEORfqNy4aJiucz%2BrvSL6FOeyqX8KnGjy8tZwnOTaToHHzOEvDZr0VVB%2BuxRHEj201%2ByIMyVp9eo%2FPmd%2BDJiM5UKTo8s%2BGLFYv3AOX86mryqu&X-Amz-Signature=f0a253026ef302abf1e2e1122d9ad8437008683cd42819b5beb2bd8b3a587347&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLG3BNF7%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCZDwNBQWBNKkGFTVZad5edHsneW8AtgHYz0Sq0Zz%2BXQAIgX5sbK9Uq%2BrWoh5u5iEqMvhMmyirNy4NfUjQ92YqrxDQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNoDNno5%2FLqzdL%2FCFircA9qD3NsRXeUKxy26X8rPkXo8VUMn3jyO1aBXbZCrK1%2FwdpIbt9rVX28u0WzkYdGqu8YYNlzVJZCfn%2BDFrZuv%2FKfJfT7A1bOXvkSJxYjbO3ljixqyNzPomsaQWKhPPtJckWa7DJ78uL50Lh9XQ5Igu8xCDBf1m1RFg4jnhtsnyL6GcFo5c0zyg%2Bv5vZlku4gdosP7N3kbsgM6zdciDSzlcnAHBHMWiy2ngdgpsK%2FEArdjpqMw6ZYPizGkg5jEuxnlvHvUS9qqDCnhP%2BSOW6wlBilAkXA%2Fl6XyHdhSTgEMCoJX4TcyYaAwvtBGxhugqcrfj1sBKPPvQnMkyt1kiu2DJG49hLZJW0GtPp0I9B9pSnQDyyqJUAZ8ludkQdznKjoANFkhw1aRbYfXsvpXsAPU%2FgbaDwxDttZnTUCHwQ1lrNZA%2F0eHF0BGKA%2Fa7UPH9nPvz9MpCdxmrLhoTb7EnDZC4b9bUVslduWt8eOlViyJbABwS2KFIzoehFYFa9SkYSETl9SiA4hd48X3kCUVlKM5sA2DX5D8v%2B8Vie8wmIKy52EVHJSrRwJ6rqQ%2BEmiBdlij5qC%2FRUfoNMxil1MpZnR07OMbH99J5j6aoxJEA%2FP%2F9LuZ98iMwgaMv4pWnSb5MNTt4cMGOqUBzTR6%2FEB1ZrZCelhgMavKD%2FF3XxEDSEsS55yBk9qBAyH5Hw%2BXNUbwF3imqrqvjD1Lm71ZGaQ1veasDMNifrafUTjGodiE%2FdWVKJ0KNGOxHvNH9PShEORfqNy4aJiucz%2BrvSL6FOeyqX8KnGjy8tZwnOTaToHHzOEvDZr0VVB%2BuxRHEj201%2ByIMyVp9eo%2FPmd%2BDJiM5UKTo8s%2BGLFYv3AOX86mryqu&X-Amz-Signature=d9636010c39d2fbedf7294799a850c727e1a7e854214da314d4f24d8667dc843&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PJQ5VAZ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCK5TCwIX19PbOGj%2FYVHPHSp696NJPS3rB9rfL66zivxwIhALT0VGjsQUmJP3HSTND22dNwn70s7%2BbP9i90FP0e67O4Kv8DCG0QABoMNjM3NDIzMTgzODA1IgyHqDQy%2Bz0JShkrgNgq3ANdGF6U4uMgbmBDX0bvIQrgrwAsrAiJ5K%2FPS5jre%2Fkpm%2FnlCLUIEUrtofjri%2FfRtEnCe4fjFl4n5MgeDy2EbOL5KK769uCV%2BLkJJ8uSxaCRHeiWxM2LeHpRAVD3%2BPBsWHa4TcQxV0hFXMUCdTR7eCD7NgQ8cDxBLQaWBMJinO7end8nZMnLvmGT1qq0ZnIh8Q5crtg%2FA9KrgeG94nd5uqk%2BbP2gA00a9%2BCjchDM5cI1dSRvkfkkSoxNPM1XYMueg8osWmm0U3iZLQz4G0W%2BcE1A%2BHco4Im%2Fhmmfbz54vX9k%2BbpHg67ZI8uGo0FmtN4nAYKq0HCsVasmcwHvfgT0OH4nTidrZbHq%2FZ5utcD703c0ciTDUiWMPa7rmclbCM6NZz5hFjr7rS5oZTE6gFFpUBl8TB3HRoXtUy1xpCn1FVpqP4b6upB32CYVWQpDubcptLlPvX5RtKKG304J36KDXcrSuq7E%2BPTShX%2F2KJHGgF%2FLk7HlhjCL4PXySGYxxt3nnsL1NRballkQJDZ86nf3a0iVZfLdpXXN5UtsUEX4EwsNSuT4kW1Mekisy%2BaJ%2BPvjXP1buOR6ayviDZYpRYkv%2BpCS0RypL0pEOsD8lj%2Bgd2Z37C3FuSnIIj2dZrHTETDG7uHDBjqkAUFEokiU8r75gZ20FY0FRWXLQuWYaIjmvguVkEzSslbVr4mBjOGAbDAS3eZdey8bmwP1K4zWckyr%2Fd1Zmaga8u3e2uy3XleR01r2sMXH5NYHhjNHsR6p5q3mVDi7hhWzQTiKnvm7TOHv3cx12J97OXtVo7yk8vwatif3cbE%2BZtQjNkFbgxDNvwMUiITtxioOvJvZKTp39F9BNEA%2FjIN5ItZ9nKn7&X-Amz-Signature=14aeeef5e1da1bb4521429cdc82dde15cdb4a5e850fb071fa15dba91b1254649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDQGQM33%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDtAFxNamcw41J%2Fn16Xfok62QhOotnbYaKLt7TolyIzqQIhAMOlcXEgPxAAaKZOKTPW7wEkJcn5NtgbZQK5gjkakZFPKv8DCG0QABoMNjM3NDIzMTgzODA1IgzKoOPzNB1N0VMvClMq3AM28eCQkz1OjV%2BTdrOLsTQvaK5Crlw2vC9FF8iRXBTo0fR%2BfCTtWs9sQFxZs6yttRXOu3IHiUDKgbEaOtoGJ2HLCqWEaAnc4f0nvCPGY1FDb%2FBe6chdti5sWWqYhk5UIATk31evRC6FmhnB7dcOHd5G1u4M8KYGixSYtC49V0pqXcPwaGXKYFZTqRB7hB76IMyFGW4I9Ovp7VE0FdvJ6QrVDU8iGEsqnnT%2BgwYvl8O%2FgXdSZK61hEgcA6h0tohtYOTRc9qbZA1Ng7fXfJRCD%2FZk6OPmNxFuOwR9HiTbJ%2BMMppNLqfWvKqRRfuMhcxxphpylgw9RFFcXAMYZVMI8TJnVS7fgKmsCSqWu9JEKoVl9wOo2pzpM%2Bgli0nry9D1aMEdLLM3PMQxyCoM%2F3V1Iw8AL%2BJnUpMoOAZF%2Fjpf0R%2BxaMq%2FWGOk7aGo0MHk4fww1LIAhpe3Ge6Q08JKLPRSEMtWv04HxBtM3FWeJWt9eAECodkqMv0B3wo4ESVtqhpPKYF0XuRAq13uATgBDgrS4b8Jq7KTH8m90sRWNvYzlGbweUpockD3V%2Bs%2BeUQeV5MWgIqVqAyYToCR%2FUxYP0%2FvoCLjNOdwnYGhgxqRTLmf40g0CzBohdU86pUZe%2BJ5evzCm7uHDBjqkASZ2kX9o8hkRqUeUXxIwaK4KMCfjLZQE1baiHI32WZpcusoO5HkwxQEv0I5l8%2FOIfNnh0av5DTeBOtHeVrW2PXcPbFDYD%2BHOreR3VkrEeabziQjbJDwFFjFAbxISkEC6TJ6hKquwLrZrqmd4cHjvVvZXb2TwtfwaTjnNd5zynBLKLAYfmmspX16lvFvbZ5rHvGUOatTRO6X5JbpuR6B1mW9ihpsU&X-Amz-Signature=ec4a398e30728734bf511aab9d95417656c03aa8fbb5a047474ed2c7375e0cbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLG3BNF7%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCZDwNBQWBNKkGFTVZad5edHsneW8AtgHYz0Sq0Zz%2BXQAIgX5sbK9Uq%2BrWoh5u5iEqMvhMmyirNy4NfUjQ92YqrxDQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNoDNno5%2FLqzdL%2FCFircA9qD3NsRXeUKxy26X8rPkXo8VUMn3jyO1aBXbZCrK1%2FwdpIbt9rVX28u0WzkYdGqu8YYNlzVJZCfn%2BDFrZuv%2FKfJfT7A1bOXvkSJxYjbO3ljixqyNzPomsaQWKhPPtJckWa7DJ78uL50Lh9XQ5Igu8xCDBf1m1RFg4jnhtsnyL6GcFo5c0zyg%2Bv5vZlku4gdosP7N3kbsgM6zdciDSzlcnAHBHMWiy2ngdgpsK%2FEArdjpqMw6ZYPizGkg5jEuxnlvHvUS9qqDCnhP%2BSOW6wlBilAkXA%2Fl6XyHdhSTgEMCoJX4TcyYaAwvtBGxhugqcrfj1sBKPPvQnMkyt1kiu2DJG49hLZJW0GtPp0I9B9pSnQDyyqJUAZ8ludkQdznKjoANFkhw1aRbYfXsvpXsAPU%2FgbaDwxDttZnTUCHwQ1lrNZA%2F0eHF0BGKA%2Fa7UPH9nPvz9MpCdxmrLhoTb7EnDZC4b9bUVslduWt8eOlViyJbABwS2KFIzoehFYFa9SkYSETl9SiA4hd48X3kCUVlKM5sA2DX5D8v%2B8Vie8wmIKy52EVHJSrRwJ6rqQ%2BEmiBdlij5qC%2FRUfoNMxil1MpZnR07OMbH99J5j6aoxJEA%2FP%2F9LuZ98iMwgaMv4pWnSb5MNTt4cMGOqUBzTR6%2FEB1ZrZCelhgMavKD%2FF3XxEDSEsS55yBk9qBAyH5Hw%2BXNUbwF3imqrqvjD1Lm71ZGaQ1veasDMNifrafUTjGodiE%2FdWVKJ0KNGOxHvNH9PShEORfqNy4aJiucz%2BrvSL6FOeyqX8KnGjy8tZwnOTaToHHzOEvDZr0VVB%2BuxRHEj201%2ByIMyVp9eo%2FPmd%2BDJiM5UKTo8s%2BGLFYv3AOX86mryqu&X-Amz-Signature=d7a8892a2bfa19a3abd1feccad4e8b49fb453426455ff6994686c734a1481138&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
