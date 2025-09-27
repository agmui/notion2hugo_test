---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GSDLAGH%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCJ479UvqX9hVdh%2Fo%2BPPbx%2FmGaslD4S1W4E8U2BbxsHnQIhAJOnylal42YYU4ytsaa55FfqEQ0vQyG%2FgANLwEIQ00boKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJVCtpXtTqDbx1Zi0q3APLjWnt5w4Z5zZlskF0zYj2fR7AVrT7a6euKAdu8Uvz4Csd5JKesJ%2FUVOnpAz4ktPRHBxYQBTHcPffpNuR5E49rXyhgHmwbDhMVnbuPpY05%2FaLUzeP2QM00jLvvRooiUm19Dy0rcT0UPsp1Z0z2hfksIJ0cyux4AfqZEfEgYuyJyEyLsNk1ER46aiA9Jltx4pekqNQ0VcUnSzf2qZS4jvHa4SyG8J9p6qMSVmDeLVPB0GJaAzhD1h%2BR8Q6FJkcF9VmbRyWcrp1d%2BAk%2FRceUlvZHSeyix6Gs43G2FGRpfD5dsyyLYTPfxmzKtPUDENjx4iEZLHALvrKxhH9Xhff3UKRqeJE8tpWBhjPIJrN4CMoyEtoG%2BD16Q%2FIupFVGTcWAe6rNxq9XPG1UwV7DLoa0OqgkBO1pkSLDUYQ9kMO0ii6uVHHlS2eS%2BJiDKoNKCggT%2Fjeiif8NHl%2BU2G%2FRBWaGNeHijvcmjMblFJOlGa1dxqMk7Eg08uwVvscv1uvv9hR3wfnooU37JqkTj%2FLNLF0UVkdVkR0SSmGZMyDvPTCuaRZUHR0uORjuMC6ZcPTc3PVP56F6UPwL8DwsaNGePPigSKQX78cve3TNFOBrpssIpi6y82MHPPdAze8bKUNheDC859zGBjqkAVkNcpihZCZ%2BHmi%2FdrED0zcGZe5f6jqY%2FAI5F7hStJqOaLK2KtA7Pvpvtd3fD2pMKAzcksZRO6PS7HO%2B9oh1iXWqwiv3fLaf8sOSnv%2B1rZX5f17TI12BZjTBF8ne7ogg95BTJSmWaila2tmmBOlXCq9sKOHSE5bOPtb7fcvZ6B1uHSKdP0dRATx1%2BMxozDGR54XCXVDVW06RlY%2BbJ0mLu8YXOHde&X-Amz-Signature=90704d80c966cf97b629682f2ef8961f6b9a656de2123a5ce7a9098c2f20c1ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GSDLAGH%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCJ479UvqX9hVdh%2Fo%2BPPbx%2FmGaslD4S1W4E8U2BbxsHnQIhAJOnylal42YYU4ytsaa55FfqEQ0vQyG%2FgANLwEIQ00boKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJVCtpXtTqDbx1Zi0q3APLjWnt5w4Z5zZlskF0zYj2fR7AVrT7a6euKAdu8Uvz4Csd5JKesJ%2FUVOnpAz4ktPRHBxYQBTHcPffpNuR5E49rXyhgHmwbDhMVnbuPpY05%2FaLUzeP2QM00jLvvRooiUm19Dy0rcT0UPsp1Z0z2hfksIJ0cyux4AfqZEfEgYuyJyEyLsNk1ER46aiA9Jltx4pekqNQ0VcUnSzf2qZS4jvHa4SyG8J9p6qMSVmDeLVPB0GJaAzhD1h%2BR8Q6FJkcF9VmbRyWcrp1d%2BAk%2FRceUlvZHSeyix6Gs43G2FGRpfD5dsyyLYTPfxmzKtPUDENjx4iEZLHALvrKxhH9Xhff3UKRqeJE8tpWBhjPIJrN4CMoyEtoG%2BD16Q%2FIupFVGTcWAe6rNxq9XPG1UwV7DLoa0OqgkBO1pkSLDUYQ9kMO0ii6uVHHlS2eS%2BJiDKoNKCggT%2Fjeiif8NHl%2BU2G%2FRBWaGNeHijvcmjMblFJOlGa1dxqMk7Eg08uwVvscv1uvv9hR3wfnooU37JqkTj%2FLNLF0UVkdVkR0SSmGZMyDvPTCuaRZUHR0uORjuMC6ZcPTc3PVP56F6UPwL8DwsaNGePPigSKQX78cve3TNFOBrpssIpi6y82MHPPdAze8bKUNheDC859zGBjqkAVkNcpihZCZ%2BHmi%2FdrED0zcGZe5f6jqY%2FAI5F7hStJqOaLK2KtA7Pvpvtd3fD2pMKAzcksZRO6PS7HO%2B9oh1iXWqwiv3fLaf8sOSnv%2B1rZX5f17TI12BZjTBF8ne7ogg95BTJSmWaila2tmmBOlXCq9sKOHSE5bOPtb7fcvZ6B1uHSKdP0dRATx1%2BMxozDGR54XCXVDVW06RlY%2BbJ0mLu8YXOHde&X-Amz-Signature=0a1813bfd23db21979b4a3239c48edaf4ae69679404ad2373c94d909a71556c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GSDLAGH%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCJ479UvqX9hVdh%2Fo%2BPPbx%2FmGaslD4S1W4E8U2BbxsHnQIhAJOnylal42YYU4ytsaa55FfqEQ0vQyG%2FgANLwEIQ00boKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJVCtpXtTqDbx1Zi0q3APLjWnt5w4Z5zZlskF0zYj2fR7AVrT7a6euKAdu8Uvz4Csd5JKesJ%2FUVOnpAz4ktPRHBxYQBTHcPffpNuR5E49rXyhgHmwbDhMVnbuPpY05%2FaLUzeP2QM00jLvvRooiUm19Dy0rcT0UPsp1Z0z2hfksIJ0cyux4AfqZEfEgYuyJyEyLsNk1ER46aiA9Jltx4pekqNQ0VcUnSzf2qZS4jvHa4SyG8J9p6qMSVmDeLVPB0GJaAzhD1h%2BR8Q6FJkcF9VmbRyWcrp1d%2BAk%2FRceUlvZHSeyix6Gs43G2FGRpfD5dsyyLYTPfxmzKtPUDENjx4iEZLHALvrKxhH9Xhff3UKRqeJE8tpWBhjPIJrN4CMoyEtoG%2BD16Q%2FIupFVGTcWAe6rNxq9XPG1UwV7DLoa0OqgkBO1pkSLDUYQ9kMO0ii6uVHHlS2eS%2BJiDKoNKCggT%2Fjeiif8NHl%2BU2G%2FRBWaGNeHijvcmjMblFJOlGa1dxqMk7Eg08uwVvscv1uvv9hR3wfnooU37JqkTj%2FLNLF0UVkdVkR0SSmGZMyDvPTCuaRZUHR0uORjuMC6ZcPTc3PVP56F6UPwL8DwsaNGePPigSKQX78cve3TNFOBrpssIpi6y82MHPPdAze8bKUNheDC859zGBjqkAVkNcpihZCZ%2BHmi%2FdrED0zcGZe5f6jqY%2FAI5F7hStJqOaLK2KtA7Pvpvtd3fD2pMKAzcksZRO6PS7HO%2B9oh1iXWqwiv3fLaf8sOSnv%2B1rZX5f17TI12BZjTBF8ne7ogg95BTJSmWaila2tmmBOlXCq9sKOHSE5bOPtb7fcvZ6B1uHSKdP0dRATx1%2BMxozDGR54XCXVDVW06RlY%2BbJ0mLu8YXOHde&X-Amz-Signature=56fdaa6313a0ee4187e730c8ce3b2413ad955bdf9d69076166757b05586df2b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2T6DU2R%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIEzVLnHqg4Upg%2Fx2uUxXTTaNeuR5vITJDSNtqfDw8iB4AiA8ZZG5ujnaPH9ls1SZ44EBb7n13Ptjq%2BIxuNzdYJG20CqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqkIrxQxxrFTGWp12KtwD%2BCX259jP5pe%2FXLH76p%2B2DRHO4dLNYhOHLTSiFf6G%2FZRnBySrpQx%2FjTXGlI0qOhUFxsMPCMMakmhDD3KhsMLpUiOVOex%2FhqsKm105C363ATXCUOfpTC8tptOH6OKuTEDpVyU94oR03Jj%2FB1poWNqIBaI%2FbxxgyHI%2FRKTqB84%2FsBpYOChJo1vMK%2B1TgDDuQOVH3so7jJ5IY4rWaw8UVL3Nnvs2j0gAPuurnwpw34pivFnTbkutudRp5IWB1%2BNAcTcL20BaiOeJDBJQH6VWbGbhX7LIRpqUw6PWkM0kkmwmUMM5fHmcMAVEgcH%2FElQTOxTB7NVS27CIkjEbyRSDE1J02eZBJo6e%2FMjMpGznTjxdVxeTXKoWdZedBaCHjoEmqSfZFVoIZGmz%2FwVKcRO4I7IwoMpsreOsDUhYvUie8wSLYiAlODXG1UOjQ%2FiHfiERJAt6Y0Q2AaSZJeWLW%2Bucfs08EcYEyHJaWknrz%2F2DgjK%2FMpUAdp%2FdhqjkA1J42o2rdPuOItUPQJI1LE1UMGwMgLMu6Suu31uDVHMTWZtcSmU%2BcoPzP0SkKSC2kmZnKQwTKinEssYyD6Ne0fYHibw4%2FGdqPDbN7jxHo3o9StVPon6%2FB0DX9kezgGOMMtbKZSEw1%2BfcxgY6pgFHjCZiMhbMJTslgo5NJmxYT3wwpFzDAYptyBTRcQySLcVK%2F4%2BapkuP35g%2Bv6AunUm8I3qh5O%2FSCtvnPwrK7GL1foQvpUwWE3ypyh3V2NhneQ%2FD%2FQ13Dma3yXEkt3msbs1t%2BR10DcC9D%2BjFjWWa3cvZSyy%2FDr5ywwIPw8U8H6gxc02%2B9oYbHVbbYpFmS6G1sJzdoXSUlPHxBuqS%2Fo6UZy872HQ1jiS5&X-Amz-Signature=e89f209bca1d29912baa66eb59f488d1a031c6ef3b5eb67567d687e8d072dc34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N3YBM2K%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIGpIHbkpTZcLRxliUaxmuNe5RmA7X9LAziiBPFEC0FCbAiAsq90tbGcYMzqN8grlIhM32ULnr%2FtUvVpcQs0nRaPraiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2swZ4JNoULzGIDm8KtwDkDtm9e8XZ4zxqmmuozfsTwx7CbtYLSEA2SF7EQaDxRBgXpEnnMn6NFmS64JYb2VAZszvuL9gE2tkUZ5%2BU43QGesVBVJcMnNVn32U%2FuVEk2E0tWnYi%2BITF9fXzvk3ycBQec3G%2BWxoA%2Fm57w2OCOYVRnXQZRYoOm1%2Fe5kKGuPoT4fq5h8dpoqkYI8oEVGXWYNhj9sN1FeIfjsH54u2ms8Euqlo%2FDrvmi9hIDVQUc5sOv0GVOabMCfF10Ut%2BsICqwe7y%2BZTQ1Andk%2FhoEGNeE8rJ%2FgVqTOURDwhUbU99slaSTfWKj4lxkB4%2B39wLIvlTHzFvtaPefSNJn6lVQEJCk4ohTpMTn%2BYcYBQ3ySK34fyqQZKCBam22fQ%2FrCRqeLqi8SMxelXtccukRH1hxpdPrkk%2FERRhVG9ulWudvPj%2F5IPFZTtOrumWEoT%2BEf%2FVuCQRTOWcfBbxCfKzvhwmRWvirJ4iiMvZ7ttYDdr1nX0qcxXOYDYcUVYtXI9npcpPoZc3d9RfLpmp1clXll168KNCtgNJXuPxST9FgVpMBgFaumcGRR0RF%2BlI2rYylPcFtwc5h7azWLZ85UwIJcdi1za75HUDlQMcXpW0Uc4C9U3ddh3gqYllUlVy1FTmjiM%2FDgwgejcxgY6pgGjYqddm9eTqIhUCgeGkYNVYGm01nEn9Ytpu6nx4NeSTGYL7sq4lC7Kig5kJGKPugTRzFDoleHEUz5Jkk42GzEBeWyQJi0y%2FVQQT3yxACsaEl8d2G5%2BsAqcP5uX7aCzqy8MrWNWTt7NUtAaFiHbwRAtDKsv8TLwU5HNLorxgd2HY49r4OmPAoY9uY9j%2BqP8HVOtT05ohlL7PHuKGslRle%2Fr7%2BxijrFh&X-Amz-Signature=181b1da0de89a776ac1135a5ee778a63be0cef2ef94533ea1ddb24abcf96da0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GSDLAGH%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCJ479UvqX9hVdh%2Fo%2BPPbx%2FmGaslD4S1W4E8U2BbxsHnQIhAJOnylal42YYU4ytsaa55FfqEQ0vQyG%2FgANLwEIQ00boKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJVCtpXtTqDbx1Zi0q3APLjWnt5w4Z5zZlskF0zYj2fR7AVrT7a6euKAdu8Uvz4Csd5JKesJ%2FUVOnpAz4ktPRHBxYQBTHcPffpNuR5E49rXyhgHmwbDhMVnbuPpY05%2FaLUzeP2QM00jLvvRooiUm19Dy0rcT0UPsp1Z0z2hfksIJ0cyux4AfqZEfEgYuyJyEyLsNk1ER46aiA9Jltx4pekqNQ0VcUnSzf2qZS4jvHa4SyG8J9p6qMSVmDeLVPB0GJaAzhD1h%2BR8Q6FJkcF9VmbRyWcrp1d%2BAk%2FRceUlvZHSeyix6Gs43G2FGRpfD5dsyyLYTPfxmzKtPUDENjx4iEZLHALvrKxhH9Xhff3UKRqeJE8tpWBhjPIJrN4CMoyEtoG%2BD16Q%2FIupFVGTcWAe6rNxq9XPG1UwV7DLoa0OqgkBO1pkSLDUYQ9kMO0ii6uVHHlS2eS%2BJiDKoNKCggT%2Fjeiif8NHl%2BU2G%2FRBWaGNeHijvcmjMblFJOlGa1dxqMk7Eg08uwVvscv1uvv9hR3wfnooU37JqkTj%2FLNLF0UVkdVkR0SSmGZMyDvPTCuaRZUHR0uORjuMC6ZcPTc3PVP56F6UPwL8DwsaNGePPigSKQX78cve3TNFOBrpssIpi6y82MHPPdAze8bKUNheDC859zGBjqkAVkNcpihZCZ%2BHmi%2FdrED0zcGZe5f6jqY%2FAI5F7hStJqOaLK2KtA7Pvpvtd3fD2pMKAzcksZRO6PS7HO%2B9oh1iXWqwiv3fLaf8sOSnv%2B1rZX5f17TI12BZjTBF8ne7ogg95BTJSmWaila2tmmBOlXCq9sKOHSE5bOPtb7fcvZ6B1uHSKdP0dRATx1%2BMxozDGR54XCXVDVW06RlY%2BbJ0mLu8YXOHde&X-Amz-Signature=2680aa27ce77be94bfce760323f7a349b3b36993118a7ad04ef5d8bf4e31cd68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
