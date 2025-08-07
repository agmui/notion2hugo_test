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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE63NF4V%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIDiEM6r%2Fm4gnfruYm7%2BsjVc1jQZs%2BO%2BdiRT5ZRmoQ5CzAiBWSGKyrFsdlvvaNdk6ZllCcJHg5fwbykTNTFTU%2F4I%2BnSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOPK%2BeZ095VPSWnu6KtwDarFzaLTWnVpqk%2FI9721vQ1hANaozNLba7Y6Jr91vx0X8IkC3eh2rjDlIAv83Iv0FLQDBX%2FGSAu5KknACuGwlL7XCZBoj7mHoSsUu9bwQ7py7ypSFUfkkWZ%2FG56qCweIVoVLeLx35veIMJN4i3Z%2FleMkvLNi1Uv1jeOkXDa8XorTtLfVAZplgA0d7Zzzj4ifke3G8Me%2FGNT5cU0bkmmVgwmUMMUg%2FVgqCye939UuO65BLVr%2FKI4fU7PnjFxnVacvOiNpnhCjWvqmu5jwkJ79I50jHBa8WCDpZjecIM9glvycgMKYNLRdXeBfkZhtCMmYfLvaZKem4%2BiA15Ea2czj2BnDsM4f9by1jWLX9eLCB8owcWuuyIK1RdlTjCfvh3Cj4gGT1yvygOzXR36mU%2Bc0RcgASn1IJmkXUd7uonHyExTbbsPhXpjUUjsTBBd928OHMYk4MEKckablyITwfr%2FWmh26XNNFywnkKUk%2BxxsrC0M5d2ECLQTJJQuGR4BpCBRho%2B3AmTfM84Q6%2FT4WN71NBH2nEhRqR1LxtXcW7up8vASNSfrxSVUsQR7Ikb42FJKF5H2S7xkP6JBgZj42blqEArnQKRLRVd44xACYTOvjRPDhkj1adPppMpLiUvYQwnbXRxAY6pgFCZ%2FADQHmVnoroeL6pT4fuqQhjYovPsnXFB7jKk%2F1%2FrWjQ6gmeEyQXkPyZfyODsdvS6fzkvkywZLeQU6BBJ5MyLE%2BanADtx8G0rtpQoWib9vvHAVhKDXeNqh6hrzWSIgcviNInqJrms41rfJAxdJJAmkLFtuC5hX8sSVysXkgkdOQXhfKMjIINpBhsZKR%2BrVnrMa78MIup7Aed75wSrapuYC%2BBVu1w&X-Amz-Signature=9e9f455c30c35e025122432a1b0fc0a257a3e5dbf74bd9bc53c6ca20eef36660&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE63NF4V%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIDiEM6r%2Fm4gnfruYm7%2BsjVc1jQZs%2BO%2BdiRT5ZRmoQ5CzAiBWSGKyrFsdlvvaNdk6ZllCcJHg5fwbykTNTFTU%2F4I%2BnSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOPK%2BeZ095VPSWnu6KtwDarFzaLTWnVpqk%2FI9721vQ1hANaozNLba7Y6Jr91vx0X8IkC3eh2rjDlIAv83Iv0FLQDBX%2FGSAu5KknACuGwlL7XCZBoj7mHoSsUu9bwQ7py7ypSFUfkkWZ%2FG56qCweIVoVLeLx35veIMJN4i3Z%2FleMkvLNi1Uv1jeOkXDa8XorTtLfVAZplgA0d7Zzzj4ifke3G8Me%2FGNT5cU0bkmmVgwmUMMUg%2FVgqCye939UuO65BLVr%2FKI4fU7PnjFxnVacvOiNpnhCjWvqmu5jwkJ79I50jHBa8WCDpZjecIM9glvycgMKYNLRdXeBfkZhtCMmYfLvaZKem4%2BiA15Ea2czj2BnDsM4f9by1jWLX9eLCB8owcWuuyIK1RdlTjCfvh3Cj4gGT1yvygOzXR36mU%2Bc0RcgASn1IJmkXUd7uonHyExTbbsPhXpjUUjsTBBd928OHMYk4MEKckablyITwfr%2FWmh26XNNFywnkKUk%2BxxsrC0M5d2ECLQTJJQuGR4BpCBRho%2B3AmTfM84Q6%2FT4WN71NBH2nEhRqR1LxtXcW7up8vASNSfrxSVUsQR7Ikb42FJKF5H2S7xkP6JBgZj42blqEArnQKRLRVd44xACYTOvjRPDhkj1adPppMpLiUvYQwnbXRxAY6pgFCZ%2FADQHmVnoroeL6pT4fuqQhjYovPsnXFB7jKk%2F1%2FrWjQ6gmeEyQXkPyZfyODsdvS6fzkvkywZLeQU6BBJ5MyLE%2BanADtx8G0rtpQoWib9vvHAVhKDXeNqh6hrzWSIgcviNInqJrms41rfJAxdJJAmkLFtuC5hX8sSVysXkgkdOQXhfKMjIINpBhsZKR%2BrVnrMa78MIup7Aed75wSrapuYC%2BBVu1w&X-Amz-Signature=7e99782927edcbb1dc454e59beabe7919def214a8dd0bb6250a0a7ead4f8fbb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE63NF4V%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIDiEM6r%2Fm4gnfruYm7%2BsjVc1jQZs%2BO%2BdiRT5ZRmoQ5CzAiBWSGKyrFsdlvvaNdk6ZllCcJHg5fwbykTNTFTU%2F4I%2BnSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOPK%2BeZ095VPSWnu6KtwDarFzaLTWnVpqk%2FI9721vQ1hANaozNLba7Y6Jr91vx0X8IkC3eh2rjDlIAv83Iv0FLQDBX%2FGSAu5KknACuGwlL7XCZBoj7mHoSsUu9bwQ7py7ypSFUfkkWZ%2FG56qCweIVoVLeLx35veIMJN4i3Z%2FleMkvLNi1Uv1jeOkXDa8XorTtLfVAZplgA0d7Zzzj4ifke3G8Me%2FGNT5cU0bkmmVgwmUMMUg%2FVgqCye939UuO65BLVr%2FKI4fU7PnjFxnVacvOiNpnhCjWvqmu5jwkJ79I50jHBa8WCDpZjecIM9glvycgMKYNLRdXeBfkZhtCMmYfLvaZKem4%2BiA15Ea2czj2BnDsM4f9by1jWLX9eLCB8owcWuuyIK1RdlTjCfvh3Cj4gGT1yvygOzXR36mU%2Bc0RcgASn1IJmkXUd7uonHyExTbbsPhXpjUUjsTBBd928OHMYk4MEKckablyITwfr%2FWmh26XNNFywnkKUk%2BxxsrC0M5d2ECLQTJJQuGR4BpCBRho%2B3AmTfM84Q6%2FT4WN71NBH2nEhRqR1LxtXcW7up8vASNSfrxSVUsQR7Ikb42FJKF5H2S7xkP6JBgZj42blqEArnQKRLRVd44xACYTOvjRPDhkj1adPppMpLiUvYQwnbXRxAY6pgFCZ%2FADQHmVnoroeL6pT4fuqQhjYovPsnXFB7jKk%2F1%2FrWjQ6gmeEyQXkPyZfyODsdvS6fzkvkywZLeQU6BBJ5MyLE%2BanADtx8G0rtpQoWib9vvHAVhKDXeNqh6hrzWSIgcviNInqJrms41rfJAxdJJAmkLFtuC5hX8sSVysXkgkdOQXhfKMjIINpBhsZKR%2BrVnrMa78MIup7Aed75wSrapuYC%2BBVu1w&X-Amz-Signature=52854e39d12dd71effa839d1b8e279d7eb4eca872e3a63ae9320596521a2ab02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MEMHBO5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCmoxCHqze4uEiIq31mOBnBG0WAmwyhECQacOyjXcVDjwIgf%2FiyQmKK6nskBmnvG84SKNM7LfZHmm7QENIK7kt3%2BHIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFCamLEQ7dPdVMJd1ircA2JRz%2BUjQ%2Fqq8q1T1EBeN0OteJKnequuu1POBxaPdjKYzfaUU3z%2Bi2VSdWGAKNKazVQxJvV7c8ZS9vOnLg7Jzy%2BXE4TEKsHHes9ulBMSO%2FAOCb1e%2FNLxCqx2AOo3odKodWytcV2fst4%2B%2FvyWqlroX0H7mYCfis4CtRA8KcOa8MNWkRmMzxbXlcm5LU3rYR6LGj8SOqp5N9Pio3xd8ccOvGnvp1r%2BgnPl3f4NDc%2F8XLLHVHlRl5gnRd5h%2Bj6d2UzqS0PVzdchaAGAlSHlYSwWCqBvDFSonxOjmjOp%2BJyw91jBacFQg2uWBAZa4aRK%2F8xalD4BKqrgtwuJrZ7vHiB5NXOoSMYXBkjZdCeIsTB79UagnULTr1YrIlJYIdoDIbc8648Lm7GRzv7fwosLPxR2PkpCLkZ5rWtNcgBcyggymEzb2beU2v2XbJN8Mk17HwKGF5ot0q1fMPMHGk6gd58yrvDweZ5ZH41UqYJ8zaZU9nsp5nALRWfjKCtsR%2Bj6mbUEYe0sEeml1hNrpGBXcWtVvZRtqkw9xnkEhms6mVZUUvLZ5nQRXdHaXaUnlsJ3Ydh3jHEmSIo8D%2FtNwU7gPXGIIdqY138c2%2BxYv3Ge6%2BYH%2B6HkhY526GsiJiH9Wza6MLe10cQGOqUBpteHcavLyPIhLLWNFOVKkD7UnH2LZwbUgf%2FhraBETbAHGv6Vzkc%2FabrfSq12jkDk2zxm%2FNkxyTQWM14rbDBYYdlcq0IKzQILTKcLfur4oMq2Wn44xeyZf5hxyVEOGDiyQbhPczHdk6ZhAvaiXABR9KLab6FA9UcesuFJE4GNTCcb9HYqcg9PsKK7RPEvYmGm8Pcmp2pi%2F6LSz8imfMM6HJQ37ALN&X-Amz-Signature=dbe7b157b12cde2fb4b4a9cbf871e1333014eb7d43c84a70c0274cd7f0036034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5E2E4R6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCICL4oO6%2BR7H1ZI1XFJyMSVx5HLOdEyZ4GKi2boduN8ExAiBjfwQZRtA0SeY3h9WHRU9adb119cAprrGxd0uYYwsO5SqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM06748MYwUAlv4FfHKtwDkiWYhLpYwLC2dg7m7c9TFHNvRvFMRqQ6gGGTHfJvidVPY%2FkI1CpPapJUhbs1CnSAJWlPEq59ypkv9KsJImexstvXx3qyqICYolhh01AQA7ujE38gK5X%2BIvPRAiDkKvjgUbYko1jln1fZonBQn0I%2FzrY4dIgS6UsFzbTcLUEfpoW9TeHLiZSV%2BdSP69XMP9jDs5q8aSiMfpLfK1ktfs0lC5zimS2B%2FibOCMBENLv4rlsoySzH6XaHztnFvPuA3toQXmjf8CuKw3Bl39wblUePaEU1moyD48szmtQuA4VywYTkyBBvFBo1rUMOduOfGh6oFPRc0o3pq2mhBxg%2Fdo2eIiSubQ06O32dEkDA5ZM6xV%2Fvb8r5aIer77EZEYprxyt6zWjJ1u8CTYRxiVolvkc8F3UQ%2FXlihqqVtzPo1Aslov9OdJBcpZ1pVgVmGQl%2FCdGdOYeETnweN1IgPOrbIgHipYyU%2BiVUzHXso7I6ZRcl9Vs7%2B7dtHpsqRNArdQxw%2Bh1u2vU1E4rtvcFEkFZhv8cXHUTQ62KjJrJVR5euE5RxwJsd%2FEJ3b1CdEipaiNSij%2Fyx1OQBF2wPhCBvSIuEzOoc0iIgHSZxV%2FftGD0Yl14Qr2KpnNIpL5ZkrpwtUPIw2rXRxAY6pgGoa6Rp7rc5Ko3zLbArExyF9BKEpaUgZBYER7rA5bjJjAqgmyFLnhbBEmw595ramQ0Fs3DCWY1LiDzdE3PfAuKEqIRJ6WBp0hU0siyHg%2FxS%2FkXIU15HR0I2OW0azxXBDNYyFotXQXqca6yg1mGwd0zK1zo65FtZfVPZKQfNOuwDDSdn3U3Z43MLeduz9roIXE79gG5qv1qMxxeO1UMq%2Bb%2B4dBBciIuB&X-Amz-Signature=c67a737a47d37d6e6259fb031f659919a11e88b3d9fe5b35599cb562126a3b43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE63NF4V%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIDiEM6r%2Fm4gnfruYm7%2BsjVc1jQZs%2BO%2BdiRT5ZRmoQ5CzAiBWSGKyrFsdlvvaNdk6ZllCcJHg5fwbykTNTFTU%2F4I%2BnSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOPK%2BeZ095VPSWnu6KtwDarFzaLTWnVpqk%2FI9721vQ1hANaozNLba7Y6Jr91vx0X8IkC3eh2rjDlIAv83Iv0FLQDBX%2FGSAu5KknACuGwlL7XCZBoj7mHoSsUu9bwQ7py7ypSFUfkkWZ%2FG56qCweIVoVLeLx35veIMJN4i3Z%2FleMkvLNi1Uv1jeOkXDa8XorTtLfVAZplgA0d7Zzzj4ifke3G8Me%2FGNT5cU0bkmmVgwmUMMUg%2FVgqCye939UuO65BLVr%2FKI4fU7PnjFxnVacvOiNpnhCjWvqmu5jwkJ79I50jHBa8WCDpZjecIM9glvycgMKYNLRdXeBfkZhtCMmYfLvaZKem4%2BiA15Ea2czj2BnDsM4f9by1jWLX9eLCB8owcWuuyIK1RdlTjCfvh3Cj4gGT1yvygOzXR36mU%2Bc0RcgASn1IJmkXUd7uonHyExTbbsPhXpjUUjsTBBd928OHMYk4MEKckablyITwfr%2FWmh26XNNFywnkKUk%2BxxsrC0M5d2ECLQTJJQuGR4BpCBRho%2B3AmTfM84Q6%2FT4WN71NBH2nEhRqR1LxtXcW7up8vASNSfrxSVUsQR7Ikb42FJKF5H2S7xkP6JBgZj42blqEArnQKRLRVd44xACYTOvjRPDhkj1adPppMpLiUvYQwnbXRxAY6pgFCZ%2FADQHmVnoroeL6pT4fuqQhjYovPsnXFB7jKk%2F1%2FrWjQ6gmeEyQXkPyZfyODsdvS6fzkvkywZLeQU6BBJ5MyLE%2BanADtx8G0rtpQoWib9vvHAVhKDXeNqh6hrzWSIgcviNInqJrms41rfJAxdJJAmkLFtuC5hX8sSVysXkgkdOQXhfKMjIINpBhsZKR%2BrVnrMa78MIup7Aed75wSrapuYC%2BBVu1w&X-Amz-Signature=7316df7ec37f2c6fc6db381ddea9743ad2566c6029c1a06ab757dd34a17e6e1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
