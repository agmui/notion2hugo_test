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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634MJXZCV%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9zk%2FldHp6Y2jDK2y3rMqSOh8yYayl8gkaubjJI%2Bj0UAiEAt0z2S5u8G1hKyxWVBGwOGJFaR366VapTIoG0UiB%2BKC8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF56p5mBlRZxGFJLlCrcA44hMa4K6ziENSxrbZMWXxsU483kn37qo0JOtwYa6FA0xYT9%2BrFvAL06CBGvHCeDW1N%2BLxdH9Gs1O66rlhZN0XmJayJjfz4dwUSNcizZRnfXUe2xzJihWXqoMFWJgqwctwQqX0f%2B1B6V%2BtO18t5Hnde%2FRX4nuhrz4msk0wuS%2Bdzde9QzWEQVt3jaf10IhEH2tnIxN8kuVymtfcOyc37aLRW7zVLxIuAn%2BbRxDltXP2K6RFSfocD2IhDQK7M6%2FH%2Ft3F4yGWo8f030SywJ8pWw3gq3ij6qMD2cNpPYnXatFnA4LrRrW2qnfH8tZhPQJrfkp9bLFUHQx12DbLm6BxPjk2ZVnsm7w8i8oR52on1Iu5DG2dLwHsEzypKwLrqi2EamzB0YNl8RoMbhhr2VV8Ar5i2v%2BzHBL7dy57CWtKlqRP5BDPGmhfCy04lTXoSdqFD7Jox4bloSVSN0zohm%2FtECy8DlLQq7DVwz6nvB5zm4VEksEgnpNgkDJ14pCI2uhBhCePUtbyNOpvfDNE3FS3NENeTc3Gw3GrHiPFV8RlpFe6RDhUbW%2BN9KoZEL5Uxdj38s%2BFLHzp65anFe0s8Q6kl6uUUJp4llUwPVg6Z%2Boy1yh%2B7%2FBzhas%2Bo2%2BwmFXHf2MNfrzMIGOqUBIprJ71FTmC%2BH%2FkTn9ou5XzG5QGoYMtRwJKJkhW8xy0auYZoFClO%2FEarDAikkiJ8kQoeTz57blyHI9fkYjHNldvvG4vuYyiSZdQUU4j%2BznKpZ67%2FRNaIzvxkzBIUiaIzND7tc8Ujo%2FNw4NtJPaCLmc3EmVdK5qwJrbsmjRHilgaybTqmOLncJCSAqzDbzsOStV17Alm6l9%2BJIet4%2FOmYWaePh%2BBHU&X-Amz-Signature=d3d3d8835ea6fd145ebde14b28b2226b8c59e2467a0d99442a36e5d63c3066c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634MJXZCV%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9zk%2FldHp6Y2jDK2y3rMqSOh8yYayl8gkaubjJI%2Bj0UAiEAt0z2S5u8G1hKyxWVBGwOGJFaR366VapTIoG0UiB%2BKC8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF56p5mBlRZxGFJLlCrcA44hMa4K6ziENSxrbZMWXxsU483kn37qo0JOtwYa6FA0xYT9%2BrFvAL06CBGvHCeDW1N%2BLxdH9Gs1O66rlhZN0XmJayJjfz4dwUSNcizZRnfXUe2xzJihWXqoMFWJgqwctwQqX0f%2B1B6V%2BtO18t5Hnde%2FRX4nuhrz4msk0wuS%2Bdzde9QzWEQVt3jaf10IhEH2tnIxN8kuVymtfcOyc37aLRW7zVLxIuAn%2BbRxDltXP2K6RFSfocD2IhDQK7M6%2FH%2Ft3F4yGWo8f030SywJ8pWw3gq3ij6qMD2cNpPYnXatFnA4LrRrW2qnfH8tZhPQJrfkp9bLFUHQx12DbLm6BxPjk2ZVnsm7w8i8oR52on1Iu5DG2dLwHsEzypKwLrqi2EamzB0YNl8RoMbhhr2VV8Ar5i2v%2BzHBL7dy57CWtKlqRP5BDPGmhfCy04lTXoSdqFD7Jox4bloSVSN0zohm%2FtECy8DlLQq7DVwz6nvB5zm4VEksEgnpNgkDJ14pCI2uhBhCePUtbyNOpvfDNE3FS3NENeTc3Gw3GrHiPFV8RlpFe6RDhUbW%2BN9KoZEL5Uxdj38s%2BFLHzp65anFe0s8Q6kl6uUUJp4llUwPVg6Z%2Boy1yh%2B7%2FBzhas%2Bo2%2BwmFXHf2MNfrzMIGOqUBIprJ71FTmC%2BH%2FkTn9ou5XzG5QGoYMtRwJKJkhW8xy0auYZoFClO%2FEarDAikkiJ8kQoeTz57blyHI9fkYjHNldvvG4vuYyiSZdQUU4j%2BznKpZ67%2FRNaIzvxkzBIUiaIzND7tc8Ujo%2FNw4NtJPaCLmc3EmVdK5qwJrbsmjRHilgaybTqmOLncJCSAqzDbzsOStV17Alm6l9%2BJIet4%2FOmYWaePh%2BBHU&X-Amz-Signature=7c76edcc6237f1117a8b9dfce42505510a505bff55a0bac99fbf3252b5a69a9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634MJXZCV%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9zk%2FldHp6Y2jDK2y3rMqSOh8yYayl8gkaubjJI%2Bj0UAiEAt0z2S5u8G1hKyxWVBGwOGJFaR366VapTIoG0UiB%2BKC8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF56p5mBlRZxGFJLlCrcA44hMa4K6ziENSxrbZMWXxsU483kn37qo0JOtwYa6FA0xYT9%2BrFvAL06CBGvHCeDW1N%2BLxdH9Gs1O66rlhZN0XmJayJjfz4dwUSNcizZRnfXUe2xzJihWXqoMFWJgqwctwQqX0f%2B1B6V%2BtO18t5Hnde%2FRX4nuhrz4msk0wuS%2Bdzde9QzWEQVt3jaf10IhEH2tnIxN8kuVymtfcOyc37aLRW7zVLxIuAn%2BbRxDltXP2K6RFSfocD2IhDQK7M6%2FH%2Ft3F4yGWo8f030SywJ8pWw3gq3ij6qMD2cNpPYnXatFnA4LrRrW2qnfH8tZhPQJrfkp9bLFUHQx12DbLm6BxPjk2ZVnsm7w8i8oR52on1Iu5DG2dLwHsEzypKwLrqi2EamzB0YNl8RoMbhhr2VV8Ar5i2v%2BzHBL7dy57CWtKlqRP5BDPGmhfCy04lTXoSdqFD7Jox4bloSVSN0zohm%2FtECy8DlLQq7DVwz6nvB5zm4VEksEgnpNgkDJ14pCI2uhBhCePUtbyNOpvfDNE3FS3NENeTc3Gw3GrHiPFV8RlpFe6RDhUbW%2BN9KoZEL5Uxdj38s%2BFLHzp65anFe0s8Q6kl6uUUJp4llUwPVg6Z%2Boy1yh%2B7%2FBzhas%2Bo2%2BwmFXHf2MNfrzMIGOqUBIprJ71FTmC%2BH%2FkTn9ou5XzG5QGoYMtRwJKJkhW8xy0auYZoFClO%2FEarDAikkiJ8kQoeTz57blyHI9fkYjHNldvvG4vuYyiSZdQUU4j%2BznKpZ67%2FRNaIzvxkzBIUiaIzND7tc8Ujo%2FNw4NtJPaCLmc3EmVdK5qwJrbsmjRHilgaybTqmOLncJCSAqzDbzsOStV17Alm6l9%2BJIet4%2FOmYWaePh%2BBHU&X-Amz-Signature=a05d345fbf586632809bef72223be0ead24be891b1a47f555c11f3258c5d2bb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LFEOU7M%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv8k3TUyU49Yt3dy%2FyeBJHBFPYkCfKfJ%2BxbGrx2aMWXQIgJklPqZE8Urt%2BWD%2BDzJQk6zx7fISDMRQkcXZ7r9btNIcqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMY5TeLvxB%2F0YpdiYircAx3aMxjTbi34cN15%2B2gW7kalID7KsvQGfvYdjPhf00O2WzgNVod%2B%2B0j7ysz%2FlNidblYuTpuYHs1dFxjONc%2FMg3A%2FbRr6b3oTawUhJi%2FJzLAYp%2B5pKKZ7%2BDiyQrIkQKbalHMcNhGccnvaxA%2FOyR5ueX7yGUB0BNVPBgY3NwcWT6oVsAuEkvIfEstBmQlhGMhXf4FBbmT%2BR4rbl4SHNuTE4adoP3KV6kQVyzZ6GJOk0XeOSTYPam0328m7mpMdSzjE43LWE%2Ft035N56iviiLInnGBDonDLrypYPulhK%2FbadEfsOCcnI9zpMN6wZlGEDtZxD4nLiDjPA4eDoY0kKK1riPFLm06ayfxx8Vl8ZwKamelSBt9nsjGtDgvmus%2FleWDuE%2FolIMb05BWMkEjgPKxSE32YYRdCSPv9uCBPXkbBNpmxgaX643l22V2N7bMKISZkXGa6k0mo69FPr1uiM6OQc8%2F2zHVhkzw1oBDffnAbO9rxT7bZOROnw66MrWycXJ29%2FqWxUftxX3MjX5VuMdNU%2BCXGBlElreWwVXP5wYM6F%2B%2BmE7xkaywwFNsEIJeOW0MY88nXMD25V5ogRTXnfk%2FqJ3xxgsunCoKkU5VxPjio6BwTNOAibVBADwItwezQMNz7y8IGOqUBAGB9XR57Y9eESrT0f58JNO4i91Nb0j%2BXglxcaOvHKlx6xNs1ED8LlnxSr08WidF1UWb2%2BSLs%2B59NZ3uuxN1oAovNo7PCUVCNm3f5ADWke2sgYS4qaYAUMKrpjTwtNnMv5x9fi%2BA1EaclNZk%2Bbc1mE7R2Fdt7z9hfdNUBpfpfzjN6CP3JerbwLfVgEvLCif5GUCZXehGv%2BacUJOiH%2B6Iezwn9OysE&X-Amz-Signature=15e555ddde15abf98c0d05d217a81107990b483f7d9c426f16e1d384646b23d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B5ICXOS%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJ8rEtX%2FQN8xGsdJgdlVh97%2FLvHJoRj1XMjpy%2Fwwp9MAiEA1n7rZRgUoENFo7s9qL6wXdSObP%2BWvjDTQ6HHaLsJVMUqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGLzmC%2BJrlbH7G1HSrcA4JO88RCut9CDqAyneFfKa%2FWT4eyBTm0qhI5tTc81hGTKwOnGd5RL2Bn4EjIdglc1lmRcMw3QnzbHY%2FjbirL8A4NAynW%2BT2YHpPft4dPW8sSy5v%2BB%2B%2B%2BN0ZbGmHH8mc%2BAB7SdEsYSxv2vVEM9tR1VlGPCmVMgZxtjYGU5V76fEqXwcPO%2B3KKxhC6jX0T%2BFzEaz1GOfLhkYD7ndqeeT3hnviJEbXaCrPvhTMSGs1lScN4iDJusQGYfuZ2N%2FITRzP3IvEejrobWR1xEq%2BVxcKYkH0ooP7MdE988%2FGOqBQs%2F7o0JMPkCdAAbRtIqe%2BtILKBIv2373iDnF83fmOCtofZywo%2Fv%2FhDHn9lXMxX2LOW40e%2F4WAin%2Bd0Uu0qEBzIb5HdQoOg3lyCEWfiYmqt%2FKp2SovYFWV2BRv43yIy2cqvjw1sMT7MKRCDMSgJLTLaNUYHWQKQkFLwYqhiI4j7AWze7Aj7iNJvFxsZSJSYCBvD9y1ZqxGaoNkcbNEobO8CNhb%2FW3K%2Ba0LHCz%2FqLzF7Cn6GbM6vHsyKr3Rwt3Jn5QT176JU62da6UdTfKVZX8H%2Fmy2KNw5nPEazKYX3Xr0sajZ3G7r5MElQ3JWX5bXqXxmWO5qjMtHEHS5nmwdtDKlaMP2DzMIGOqUB1sTXvOoXoRcu%2BuNMy%2FR8VNEo0RyFqTuAaAt2YA%2F36qEQFnKFZrPHguBy2WlCfc9Fr8rpTRL%2FtZvdbwSWyPM5%2FudPIPFlqs8P0Tz8qvXR4aOCYTed5tuVIHVv5fqJKtVIgyn7Xk5RmOnsRyDrRE%2Fp%2FsuscOrqtYNtYDSeTjMfYTGVZkNMSbioeshufqzlAxOmInvCQcEa%2FAiVA6b%2FYUZIwuSudrjU&X-Amz-Signature=ffb19774b88bca0615adbcb66314efcecac84ccf591a50ad904348970c55ec4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634MJXZCV%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9zk%2FldHp6Y2jDK2y3rMqSOh8yYayl8gkaubjJI%2Bj0UAiEAt0z2S5u8G1hKyxWVBGwOGJFaR366VapTIoG0UiB%2BKC8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF56p5mBlRZxGFJLlCrcA44hMa4K6ziENSxrbZMWXxsU483kn37qo0JOtwYa6FA0xYT9%2BrFvAL06CBGvHCeDW1N%2BLxdH9Gs1O66rlhZN0XmJayJjfz4dwUSNcizZRnfXUe2xzJihWXqoMFWJgqwctwQqX0f%2B1B6V%2BtO18t5Hnde%2FRX4nuhrz4msk0wuS%2Bdzde9QzWEQVt3jaf10IhEH2tnIxN8kuVymtfcOyc37aLRW7zVLxIuAn%2BbRxDltXP2K6RFSfocD2IhDQK7M6%2FH%2Ft3F4yGWo8f030SywJ8pWw3gq3ij6qMD2cNpPYnXatFnA4LrRrW2qnfH8tZhPQJrfkp9bLFUHQx12DbLm6BxPjk2ZVnsm7w8i8oR52on1Iu5DG2dLwHsEzypKwLrqi2EamzB0YNl8RoMbhhr2VV8Ar5i2v%2BzHBL7dy57CWtKlqRP5BDPGmhfCy04lTXoSdqFD7Jox4bloSVSN0zohm%2FtECy8DlLQq7DVwz6nvB5zm4VEksEgnpNgkDJ14pCI2uhBhCePUtbyNOpvfDNE3FS3NENeTc3Gw3GrHiPFV8RlpFe6RDhUbW%2BN9KoZEL5Uxdj38s%2BFLHzp65anFe0s8Q6kl6uUUJp4llUwPVg6Z%2Boy1yh%2B7%2FBzhas%2Bo2%2BwmFXHf2MNfrzMIGOqUBIprJ71FTmC%2BH%2FkTn9ou5XzG5QGoYMtRwJKJkhW8xy0auYZoFClO%2FEarDAikkiJ8kQoeTz57blyHI9fkYjHNldvvG4vuYyiSZdQUU4j%2BznKpZ67%2FRNaIzvxkzBIUiaIzND7tc8Ujo%2FNw4NtJPaCLmc3EmVdK5qwJrbsmjRHilgaybTqmOLncJCSAqzDbzsOStV17Alm6l9%2BJIet4%2FOmYWaePh%2BBHU&X-Amz-Signature=2460e12feb85e57930f36148f994c0a070a346136696deb44b52daed985a7400&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
