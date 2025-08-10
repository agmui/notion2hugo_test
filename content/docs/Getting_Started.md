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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DYVB7PZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5XXpneoPJcyi8H4YyyINMKNeO87odcfZm%2BxleDQkzeAiBpXzNVTxYBiW1BD5KYiMEEPOhx2fT3KNiBl0IhSpBu8iqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGgxaUTWWgufLDI9iKtwDrYTGJLBKJpV%2FOMbLjO%2FsmnUgPztisiQoHxFVdzNC9%2BrMcDKOLXu4RXRqDqcUPClhHtgEkz8YRUVLABDnNt4733a9AKYUS0IDHGongzwFQll8IH%2FXHXSERHvlE9hdnGIh2t%2BH7j%2F%2FSFmcQ%2F7Hpyl%2BUxoxaEmeUZAd7uiOhRU3BC4gDeE4RJ%2FEBb5Dl37iG3tuelaKp7DgPkoPTRYsEHWYSiM33OyoVFnfJ9Q6I8d1KWCyfKXIy3u7Bp8Fp%2B3sOllPLoMYj%2BE6uamqrPTZMX8DmSu0uRwakGOZUjn8VmQZJZm5vJVg5qhJe6KQ3kbrz7j9%2FBYLWUyGHJMxfI8X9aiVN28CVbWNeEQ9rJHtzVqJrIbU%2Blg7zA8GG23mDCuw6roOXdSyWhm%2BW2gI8Fy4PpV3TzhLKEsCBfwJRsQb1uoIpv%2F1gL2k5CwjKH3tAx6oIAdRWOY66O8hrsjsy9oGt2%2F1fB%2BwakWt%2FnJDtJ4idCid%2Fb9Uckmn8JD5FFdhUkyK1ZVEG%2BShCGVLQIJ6FxhOtNwHqAG2uoPweYA6eG%2Blte1fcFjCTYPRw8qX5LLct540d3cvr7y5blV1bgSDdFaUVkkMygkHF4H0W%2Fdsf7pEVMg%2BbU2fR0Gxj02ipkbRijYwt9HgxAY6pgGE%2FriZSq5QWOEXDLn4V3xWBJnyTbzPc6xKSUwWC6BlQ%2Fz4Ujrrxv5DBiSzqqG1Stmf%2FG2ptsu7jSQ01KBP2ghgDXx%2B1%2BJzoQoXJpVfFarfsjfduhJrfW5em5JiqWMSlZZ878mnrxp%2B2SMLC3QTMvMg6IlNUQeIApr2s4XPO2nsF6B5WDYiU7fb9MXc1Vi0rHEDn142u%2FZaKZGQjWmMVbbdfsc1Lw%2Ba&X-Amz-Signature=8fdfa1931392596eccf3ab910d6e4e9c72dec247f5a474a809e703680831ac4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DYVB7PZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5XXpneoPJcyi8H4YyyINMKNeO87odcfZm%2BxleDQkzeAiBpXzNVTxYBiW1BD5KYiMEEPOhx2fT3KNiBl0IhSpBu8iqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGgxaUTWWgufLDI9iKtwDrYTGJLBKJpV%2FOMbLjO%2FsmnUgPztisiQoHxFVdzNC9%2BrMcDKOLXu4RXRqDqcUPClhHtgEkz8YRUVLABDnNt4733a9AKYUS0IDHGongzwFQll8IH%2FXHXSERHvlE9hdnGIh2t%2BH7j%2F%2FSFmcQ%2F7Hpyl%2BUxoxaEmeUZAd7uiOhRU3BC4gDeE4RJ%2FEBb5Dl37iG3tuelaKp7DgPkoPTRYsEHWYSiM33OyoVFnfJ9Q6I8d1KWCyfKXIy3u7Bp8Fp%2B3sOllPLoMYj%2BE6uamqrPTZMX8DmSu0uRwakGOZUjn8VmQZJZm5vJVg5qhJe6KQ3kbrz7j9%2FBYLWUyGHJMxfI8X9aiVN28CVbWNeEQ9rJHtzVqJrIbU%2Blg7zA8GG23mDCuw6roOXdSyWhm%2BW2gI8Fy4PpV3TzhLKEsCBfwJRsQb1uoIpv%2F1gL2k5CwjKH3tAx6oIAdRWOY66O8hrsjsy9oGt2%2F1fB%2BwakWt%2FnJDtJ4idCid%2Fb9Uckmn8JD5FFdhUkyK1ZVEG%2BShCGVLQIJ6FxhOtNwHqAG2uoPweYA6eG%2Blte1fcFjCTYPRw8qX5LLct540d3cvr7y5blV1bgSDdFaUVkkMygkHF4H0W%2Fdsf7pEVMg%2BbU2fR0Gxj02ipkbRijYwt9HgxAY6pgGE%2FriZSq5QWOEXDLn4V3xWBJnyTbzPc6xKSUwWC6BlQ%2Fz4Ujrrxv5DBiSzqqG1Stmf%2FG2ptsu7jSQ01KBP2ghgDXx%2B1%2BJzoQoXJpVfFarfsjfduhJrfW5em5JiqWMSlZZ878mnrxp%2B2SMLC3QTMvMg6IlNUQeIApr2s4XPO2nsF6B5WDYiU7fb9MXc1Vi0rHEDn142u%2FZaKZGQjWmMVbbdfsc1Lw%2Ba&X-Amz-Signature=83f9b9726ef6d8da1b440af9a75afe779a4c51491ea0b8db82083d982170dbb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DYVB7PZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5XXpneoPJcyi8H4YyyINMKNeO87odcfZm%2BxleDQkzeAiBpXzNVTxYBiW1BD5KYiMEEPOhx2fT3KNiBl0IhSpBu8iqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGgxaUTWWgufLDI9iKtwDrYTGJLBKJpV%2FOMbLjO%2FsmnUgPztisiQoHxFVdzNC9%2BrMcDKOLXu4RXRqDqcUPClhHtgEkz8YRUVLABDnNt4733a9AKYUS0IDHGongzwFQll8IH%2FXHXSERHvlE9hdnGIh2t%2BH7j%2F%2FSFmcQ%2F7Hpyl%2BUxoxaEmeUZAd7uiOhRU3BC4gDeE4RJ%2FEBb5Dl37iG3tuelaKp7DgPkoPTRYsEHWYSiM33OyoVFnfJ9Q6I8d1KWCyfKXIy3u7Bp8Fp%2B3sOllPLoMYj%2BE6uamqrPTZMX8DmSu0uRwakGOZUjn8VmQZJZm5vJVg5qhJe6KQ3kbrz7j9%2FBYLWUyGHJMxfI8X9aiVN28CVbWNeEQ9rJHtzVqJrIbU%2Blg7zA8GG23mDCuw6roOXdSyWhm%2BW2gI8Fy4PpV3TzhLKEsCBfwJRsQb1uoIpv%2F1gL2k5CwjKH3tAx6oIAdRWOY66O8hrsjsy9oGt2%2F1fB%2BwakWt%2FnJDtJ4idCid%2Fb9Uckmn8JD5FFdhUkyK1ZVEG%2BShCGVLQIJ6FxhOtNwHqAG2uoPweYA6eG%2Blte1fcFjCTYPRw8qX5LLct540d3cvr7y5blV1bgSDdFaUVkkMygkHF4H0W%2Fdsf7pEVMg%2BbU2fR0Gxj02ipkbRijYwt9HgxAY6pgGE%2FriZSq5QWOEXDLn4V3xWBJnyTbzPc6xKSUwWC6BlQ%2Fz4Ujrrxv5DBiSzqqG1Stmf%2FG2ptsu7jSQ01KBP2ghgDXx%2B1%2BJzoQoXJpVfFarfsjfduhJrfW5em5JiqWMSlZZ878mnrxp%2B2SMLC3QTMvMg6IlNUQeIApr2s4XPO2nsF6B5WDYiU7fb9MXc1Vi0rHEDn142u%2FZaKZGQjWmMVbbdfsc1Lw%2Ba&X-Amz-Signature=babdfa71d200ed75379dc274f1f20a315eab995da3ca1fa063acf527f78ab0ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV36A2EL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAp3um2OyGw6oS6DXxCq5APKLhgsZeOJSXnJgIPnifQgIgbURFiwRu0WIvhDhNITR5%2F7BKra7WqYWqpbmMbCkkQ4sqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6Gbt7v2Nz1zsTA1CrcA%2BfMxPOoPSo%2F6Zeq6z0NPLAAlTSC%2Feh%2Fxr32WejptQjTxn5%2FHR6uhBhVbXU%2FkldiSe%2FXp3n1Pw75fAMl5lne3OedVfdkJoKuAHmj2MriKM6kQaA4N58Iha3JZrHD90WNl0Z32PhbaoHKjVPBXHe4mbEE8aTq7haZo9L%2BwL33TgwRel31AQzkSK64R9QnqXFKQlgT7BSFH4Ix0LdeHbN107xC%2FcW%2BE9n6h%2B58yS6x1A12MBxhR95uR15IimBnFdr2%2FTdd8hu%2F8z0B7%2BwVXJzvsSUfZLp5PcwR7p8ScluiblC52XJsr4TeH6yE9YJZNupXl8LSfRbswJXrZ5DxPqqdq%2BGan0O%2BlmXPPY24r3k1eePNnPvTAZue%2F1V9VgmwcpZrUzAvFaeWum2yFssLgNRBgiuu%2FqlQbdS%2BPaJGb52VquDqE29ul8jz6DMRfNWR3gKYBJBSe1SXSgyT%2BwfRy21SwUvCXZPvt3ND5X8P0LL8c2BjtsobncqEVkVqMVn1Rd8YrWKNJLnqBAlNccUIkL7ly7eZtlEKrq4aQUH0%2BypTELU3KHXCuR1tSFGpDbEcJe5y7IlxJWabXqFIFMAMKMVfhPmPKyw9elJzm586nJNe%2FyoiorU%2BFiIUEKP0i2RmMM%2FR4MQGOqUBBDHlAuYNUsUYdueoudXHHo6FYBPU6N64VX38WPLzbN5bU%2BO5Obp5P%2F1ajxWeLCV%2BDv8E2uCTdvPogyDcuVJ63ermV5Y26mqOrMHoycRmmz7Nl35sH8A2gDOQUbYiqgR0P5iXoXPbbOXBObjCXFk6rQnAlPRU5Y6arhMhlmyJ2W2Td7B33KazZG1gMmvJcZUTI9LoEekwPGwyF%2FuY6DeUsKYfKZjZ&X-Amz-Signature=c74c8e8e704d1356c9dee2bab3106ca31c43a99d5d9954bd036a3952e7c7b32f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NKZA4CV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrbU3Mq%2BgRO%2BcE5K9dxkZwkI8rq%2FAhDy0PUJYJCwAigQIhAI9%2FP47xsYRZLmcKGVZkhhAHCpf0thXSp62CREqAN3AzKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysJHtI6GaBO2sdyRsq3AN0AjGYo0MJwPx60DoT%2BVfSOvjuGdmvxkTHMzbzjkSj0EsEoH4TcsaeZAu0t%2F7GGkW35%2BI%2FSlHBVABYYGjzif4IjUNn0Ky8gIH99LalCNE79EuV6PwfuaNi5D96RWUvxWpQw3QbzDzSc4DwmWFS9jxaUMgWNSZ7pxNxiRtWIBEJz9orFAcde8HMit%2Fnq8TTSl2ev38mjLMb0Ia0glrjZ31MhCDt%2BO9yXJEcYznVbrtNqVchLNNYJ%2B7gMBOJz45eGwPGQx25kr%2FAmCGpnR7vyD0r7pDb2JBOqnUYu0eMfRDIMQM6uFjWFxPi6Mr8Sueug%2Bv5JGCGK27OO10MVEEfOOvQl%2B812GouqysM%2FOSPaE0rM28CXrKprCu5vA5GRcMhinlbbEGadQeYFZH3FnpyhBYKAMgXsODrWIP5s2pSufmdwIsnciD9wr9Z%2B%2FakLsB21sWDZ4O1WXkwHqNddJ7phF7MnD2VW6IU5DxnN0r6DN3GCgLlWHyGpuZ%2BfXMtP7BZKr6Qu8h4LhM%2FQQzVCsb5XHMbv0Lj9mNt8ZZTBf2Y290en4R%2FPaa4FR2A2%2FluMJG0Nu%2BzWt1yzVibcmM2SFhrT8n1wsUN6gKfI4FTcn6NVouSWaiGBm%2FUMZcrATY1YzCi0eDEBjqkAe9df9xx7sXxThQ7U1D0VhBbNhEmaSWXg1A748jeLlPWFexCfYaaZtBflTQyedx8%2BE%2Bapfz8%2FTOZfEYdmw8JG%2FSKPVbvLv%2B4GvFhr5z76LlU3Qg7%2F%2Fuoq2S2MfIaRnly2%2BHqHfrDo0ACA%2BPGwEeHx8o5QdcTpKrHUkB2ATYZsZxnZeNqRW5TRjvnvtkwbDLSFWueIP3O60D0pohpfFj2LeJ2XPrj&X-Amz-Signature=d1e9622075bca90ff88204e138e5865437ca750a51530dcc6baf88e822b0d6a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DYVB7PZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5XXpneoPJcyi8H4YyyINMKNeO87odcfZm%2BxleDQkzeAiBpXzNVTxYBiW1BD5KYiMEEPOhx2fT3KNiBl0IhSpBu8iqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGgxaUTWWgufLDI9iKtwDrYTGJLBKJpV%2FOMbLjO%2FsmnUgPztisiQoHxFVdzNC9%2BrMcDKOLXu4RXRqDqcUPClhHtgEkz8YRUVLABDnNt4733a9AKYUS0IDHGongzwFQll8IH%2FXHXSERHvlE9hdnGIh2t%2BH7j%2F%2FSFmcQ%2F7Hpyl%2BUxoxaEmeUZAd7uiOhRU3BC4gDeE4RJ%2FEBb5Dl37iG3tuelaKp7DgPkoPTRYsEHWYSiM33OyoVFnfJ9Q6I8d1KWCyfKXIy3u7Bp8Fp%2B3sOllPLoMYj%2BE6uamqrPTZMX8DmSu0uRwakGOZUjn8VmQZJZm5vJVg5qhJe6KQ3kbrz7j9%2FBYLWUyGHJMxfI8X9aiVN28CVbWNeEQ9rJHtzVqJrIbU%2Blg7zA8GG23mDCuw6roOXdSyWhm%2BW2gI8Fy4PpV3TzhLKEsCBfwJRsQb1uoIpv%2F1gL2k5CwjKH3tAx6oIAdRWOY66O8hrsjsy9oGt2%2F1fB%2BwakWt%2FnJDtJ4idCid%2Fb9Uckmn8JD5FFdhUkyK1ZVEG%2BShCGVLQIJ6FxhOtNwHqAG2uoPweYA6eG%2Blte1fcFjCTYPRw8qX5LLct540d3cvr7y5blV1bgSDdFaUVkkMygkHF4H0W%2Fdsf7pEVMg%2BbU2fR0Gxj02ipkbRijYwt9HgxAY6pgGE%2FriZSq5QWOEXDLn4V3xWBJnyTbzPc6xKSUwWC6BlQ%2Fz4Ujrrxv5DBiSzqqG1Stmf%2FG2ptsu7jSQ01KBP2ghgDXx%2B1%2BJzoQoXJpVfFarfsjfduhJrfW5em5JiqWMSlZZ878mnrxp%2B2SMLC3QTMvMg6IlNUQeIApr2s4XPO2nsF6B5WDYiU7fb9MXc1Vi0rHEDn142u%2FZaKZGQjWmMVbbdfsc1Lw%2Ba&X-Amz-Signature=c833415943855c1d30c405e2b69e4cec759e2baf94bc70986be5b666ba9252ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
