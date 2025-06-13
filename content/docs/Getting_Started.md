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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672ZFY6NM%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T070926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBsnazVwtgOD9d3bfK%2FuHNM%2Bv2%2BgWP2xAGbaLUxyoGc5AiAfwH%2BB%2BxE7xup%2BMS9VjxZbhMJepVrDplX%2Bkr40XOKF2yr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMgHkWDs2sM9Q8UsV7KtwDPIgxuVMsMXbKm8u5qRc%2FRtsBjGlcloke7WgYV3lkHlWtlQPj7OVrgxEDHSMKC%2Fxu%2FVVqAgKR95mWONTg1%2BBSQJKDRrTAV1%2FXZNhEXErkV5oX3CWmvFalq2p9g69SolGh1WknFyALAUOobyspEDuS5%2FkRPtEAVD9taz%2B%2FxweijXQH4HPrcVa4fppfS0oO9SHMgRH510jhBxZD6KjPVn6IVdoGqAObUSsDQKus6u31x7c2gEED%2FPuI8VTieyg%2FWmt%2FgwS%2BtMNgGvznJsmbc0s0NNQ73sZkTdL%2FRbHicBaE3a5iDwGDz9JPyY%2FIa6zLmrT2bKcqTzPAY%2FplKjPI%2FpR70yRXFpw5RaQ47j523g88bWOWaTCebKUSBDe3iRr%2B3v28aQz9uHBAk%2Ftazt%2F14HgW3YeI6X1l%2Fx%2Fwqht7cbr30gKXgIRdvHhy2b6vVvDDLE2s8r2E3PiI6tjKCfgvtqP0Dv9sQj4%2FyaZrejKna4NNrCvf%2BDS%2B3xxPUfhNPb8bY8zjfJAYr7Nzyaf7x%2Bt0DtXgWNloPTAl2PSXivaRKPHmKgVrlarAbBqdJbUNjM1JiJtDAHILCEEofhy4AP4pbmIGDtyppjMOL4DiuZCgCxJctlysjhMNntTT2PSA0dYwl5KvwgY6pgE4n1nPooss0gTGOr9xU5sCfgaJ7NrEZIxb0hWa3YEjFoeFtywXe3nWuF8ZyWXQZrweWg%2BNOoXZ%2Bdqih%2F7EIaHyasklku1NTteAzoluYVhUskRQkuwqo5NAIjMlRCFIyDaYBsy1FDTXdyvlGCH6q001ry9myhqonmkwzTi7IvBWmIUP9xW7j1GY5U%2BNlU7YQn9Dn3hBJlA7soFmue6Gx0kgNcYStm48&X-Amz-Signature=96abd3724d03d9d5b333d9f32b523e7e349e6560b767e303c4e6ad17afee6b21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672ZFY6NM%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T070926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBsnazVwtgOD9d3bfK%2FuHNM%2Bv2%2BgWP2xAGbaLUxyoGc5AiAfwH%2BB%2BxE7xup%2BMS9VjxZbhMJepVrDplX%2Bkr40XOKF2yr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMgHkWDs2sM9Q8UsV7KtwDPIgxuVMsMXbKm8u5qRc%2FRtsBjGlcloke7WgYV3lkHlWtlQPj7OVrgxEDHSMKC%2Fxu%2FVVqAgKR95mWONTg1%2BBSQJKDRrTAV1%2FXZNhEXErkV5oX3CWmvFalq2p9g69SolGh1WknFyALAUOobyspEDuS5%2FkRPtEAVD9taz%2B%2FxweijXQH4HPrcVa4fppfS0oO9SHMgRH510jhBxZD6KjPVn6IVdoGqAObUSsDQKus6u31x7c2gEED%2FPuI8VTieyg%2FWmt%2FgwS%2BtMNgGvznJsmbc0s0NNQ73sZkTdL%2FRbHicBaE3a5iDwGDz9JPyY%2FIa6zLmrT2bKcqTzPAY%2FplKjPI%2FpR70yRXFpw5RaQ47j523g88bWOWaTCebKUSBDe3iRr%2B3v28aQz9uHBAk%2Ftazt%2F14HgW3YeI6X1l%2Fx%2Fwqht7cbr30gKXgIRdvHhy2b6vVvDDLE2s8r2E3PiI6tjKCfgvtqP0Dv9sQj4%2FyaZrejKna4NNrCvf%2BDS%2B3xxPUfhNPb8bY8zjfJAYr7Nzyaf7x%2Bt0DtXgWNloPTAl2PSXivaRKPHmKgVrlarAbBqdJbUNjM1JiJtDAHILCEEofhy4AP4pbmIGDtyppjMOL4DiuZCgCxJctlysjhMNntTT2PSA0dYwl5KvwgY6pgE4n1nPooss0gTGOr9xU5sCfgaJ7NrEZIxb0hWa3YEjFoeFtywXe3nWuF8ZyWXQZrweWg%2BNOoXZ%2Bdqih%2F7EIaHyasklku1NTteAzoluYVhUskRQkuwqo5NAIjMlRCFIyDaYBsy1FDTXdyvlGCH6q001ry9myhqonmkwzTi7IvBWmIUP9xW7j1GY5U%2BNlU7YQn9Dn3hBJlA7soFmue6Gx0kgNcYStm48&X-Amz-Signature=722b6434809b74d44aca09cf78485af7c14cc00a4463bcb80b2fa5aeae312c5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672ZFY6NM%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T070926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBsnazVwtgOD9d3bfK%2FuHNM%2Bv2%2BgWP2xAGbaLUxyoGc5AiAfwH%2BB%2BxE7xup%2BMS9VjxZbhMJepVrDplX%2Bkr40XOKF2yr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMgHkWDs2sM9Q8UsV7KtwDPIgxuVMsMXbKm8u5qRc%2FRtsBjGlcloke7WgYV3lkHlWtlQPj7OVrgxEDHSMKC%2Fxu%2FVVqAgKR95mWONTg1%2BBSQJKDRrTAV1%2FXZNhEXErkV5oX3CWmvFalq2p9g69SolGh1WknFyALAUOobyspEDuS5%2FkRPtEAVD9taz%2B%2FxweijXQH4HPrcVa4fppfS0oO9SHMgRH510jhBxZD6KjPVn6IVdoGqAObUSsDQKus6u31x7c2gEED%2FPuI8VTieyg%2FWmt%2FgwS%2BtMNgGvznJsmbc0s0NNQ73sZkTdL%2FRbHicBaE3a5iDwGDz9JPyY%2FIa6zLmrT2bKcqTzPAY%2FplKjPI%2FpR70yRXFpw5RaQ47j523g88bWOWaTCebKUSBDe3iRr%2B3v28aQz9uHBAk%2Ftazt%2F14HgW3YeI6X1l%2Fx%2Fwqht7cbr30gKXgIRdvHhy2b6vVvDDLE2s8r2E3PiI6tjKCfgvtqP0Dv9sQj4%2FyaZrejKna4NNrCvf%2BDS%2B3xxPUfhNPb8bY8zjfJAYr7Nzyaf7x%2Bt0DtXgWNloPTAl2PSXivaRKPHmKgVrlarAbBqdJbUNjM1JiJtDAHILCEEofhy4AP4pbmIGDtyppjMOL4DiuZCgCxJctlysjhMNntTT2PSA0dYwl5KvwgY6pgE4n1nPooss0gTGOr9xU5sCfgaJ7NrEZIxb0hWa3YEjFoeFtywXe3nWuF8ZyWXQZrweWg%2BNOoXZ%2Bdqih%2F7EIaHyasklku1NTteAzoluYVhUskRQkuwqo5NAIjMlRCFIyDaYBsy1FDTXdyvlGCH6q001ry9myhqonmkwzTi7IvBWmIUP9xW7j1GY5U%2BNlU7YQn9Dn3hBJlA7soFmue6Gx0kgNcYStm48&X-Amz-Signature=a0b3938c168bada08b913e6b330c205aea5f9079288c2758e77ca479faa869df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEVZJO52%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T070934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCcYxF9SHRbP0l72aF3oVMBylvROrJTPOlfPGsDgzh2pQIgXGv4R8IH6ZlHe8TQS%2B6gjWukxjjsGPrIGEvE4ZEM%2BOkqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmW0JnkebAka1eHdyrcA99ivC9KScCCvK9w42uznuFWXRHUc33n5mQkzzPTu3Gcapbihs297XQ6uFe3MHb7IrLIvEF5WAt6uwzxKunqag7jsudcWG%2B%2F4pPfXedZVr9SNlQD9o4iXOIEY7uM%2Befp4OgNxytsMypUfS0IgTyQyUUgJ0qy0Lyw2COlaw9qcmXIHedMdB8FFEiiDr6skB8RFjDEWXKTXw%2FVcvHxJjNMvvP%2BHmhsymWlNExi519AvoZQRGjg3EpXBuuRV3KVE0qB95QcYz8F3elbR3YZannhAnXnea%2FWy1ZuTWPwYtx0dzoNYIAUG96FWcC6v4qsnKUjhD%2B%2FN2LVOrsdTONE8Tw6bIEbHcyjtN4rNnLSLOctB1KFEKZ%2BcZPUnXfOtetiKHjIO17GaEX4iCct7zulwyl%2F5QZkZTdfGPyJepqoC4jVXx3rleGu0xZwNbzI%2FPQ5sQqd4DbNu9tqo01WlqCbges9%2Flgnk7DOiHIinaoz8E1zq7aWaPAeGrNIMN0NS5VL%2FNTzgS%2FycWIkBgShbhwXG3Q11bw8McXm1xsoIrbtz0pb7%2F%2B2LMCLi5lzwSwvoJxnBp4FKM7g%2FNabN31c5VYwGMppmn6hNVOrxq2LTvEK4Lf0ddKT9%2BQv7Itx9eMgrlOFMOqOrsIGOqUBlSNp%2BUWL7UKKF%2BgbdLtiVxHdZebTSa7%2Bcq%2BdgOPKllg5oEYUdwRS6A24ewBNssbjObn3D0K4jjcDYLh26vEaAMub173KNkFTZ2XzKPN4UPt%2BLBRO5d22G8Ex2tleVB6oDjoHrV7VIO8wqHr3AC%2FVZtW79B00e30UGIQwGFBGiTS%2FZt%2Bp%2BB%2FDRzSQC1Ol7aqAzqBeW7ADzmwfqZYZUQfTDkjeho9Z&X-Amz-Signature=4baef436b82bff5ceba2b8e3e2516e2c9587ca08c5025d096b5975de80e3b20f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOTDUD7C%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T070935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIGmlspMkoyvdQFtWlMtnRs02lC4pPe74o2yoMu8lCX38AiAvWI1lxwDaCkS1CHs5WvRXjsEgklC%2FTyUi6g5thXpgGCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2ZXOVAzqeDW6NGjFKtwDX18WlbVX1wfk1MLoMuT0kq%2F4eqosdZG90kcyXUu9%2Boe6WYO%2FNebz1CyrmZ%2FD9mC8t42YR3yOllRwbb024JGylJ6ZiSQ%2F3sjcBpdmxckb0dBiWLpyMj110pM2lfWozXHYJorudkdhUhXL6LBfuqA8VsjalliAEYFw5hFajeUHb2Ynal0sA9pO4aFfR7q2p7csBTbXhq13WzP6xVoZBNyvppR0oqZCB7h6EDWNhIBNgpAaTZdJRJpypRk6WTAHuMMjbA703bXpMBVcWPMTKbND0kODNdnSIzOUuY0KE%2BOlgYZo5rWvrQxip8r%2FAd%2B4XVooCORrjLDLGmcxXnZCnWYWauKv3nHsX8XxYJsbnkjixB252YdAvW0k%2F8JX9T56vEdwBSeXndon9hrww6iJhZ58iCoVIHZ%2B%2BNlD9fgwo0uQGaJcDXThLL7hBBkANXYjEDef4yu5G%2Fqx7RiLiU3Feo9tGzcS7bxtq1cwT27VMCk7VAlBa2nzTjns5LYxGB9Xmb9%2FY%2FVC%2BpMMGHPDAIcWYSJaWZVsr%2BFw3xveBpzjJVGejZULyXB6ZyJ8VkMqT%2BZ%2B3e%2FnDKoOVBvMoXNS4Cw%2Bb90ASeX1FZwf97qeIPD0%2FnstBFncyr89ugAHe9vyvr8wr9iuwgY6pgGAE6vtqnPydPFFzqKVn7MD5th%2BF111ZOaI7Lmt52TwmtXAB1CyedrupPW8RjMSrfwN2KypJfy%2BoTgu4ncXCBW1999KTdapHfImgKQbdZ2B%2F0WhTNknAmRKFeR06l1LNjBVbf6dpjWToS0vW0IKN8pZYRsfcP6dzc2yAYaomX0srUictRBU1HfeGM3Cw%2F0mC447j0HSzDqFOhMrSePIIeMM7oIgTj40&X-Amz-Signature=a78d229fb962cb1438f253bb1d9e5d5f0fb8432489b0c1601d32c7b7f10bacd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672ZFY6NM%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T070926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBsnazVwtgOD9d3bfK%2FuHNM%2Bv2%2BgWP2xAGbaLUxyoGc5AiAfwH%2BB%2BxE7xup%2BMS9VjxZbhMJepVrDplX%2Bkr40XOKF2yr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMgHkWDs2sM9Q8UsV7KtwDPIgxuVMsMXbKm8u5qRc%2FRtsBjGlcloke7WgYV3lkHlWtlQPj7OVrgxEDHSMKC%2Fxu%2FVVqAgKR95mWONTg1%2BBSQJKDRrTAV1%2FXZNhEXErkV5oX3CWmvFalq2p9g69SolGh1WknFyALAUOobyspEDuS5%2FkRPtEAVD9taz%2B%2FxweijXQH4HPrcVa4fppfS0oO9SHMgRH510jhBxZD6KjPVn6IVdoGqAObUSsDQKus6u31x7c2gEED%2FPuI8VTieyg%2FWmt%2FgwS%2BtMNgGvznJsmbc0s0NNQ73sZkTdL%2FRbHicBaE3a5iDwGDz9JPyY%2FIa6zLmrT2bKcqTzPAY%2FplKjPI%2FpR70yRXFpw5RaQ47j523g88bWOWaTCebKUSBDe3iRr%2B3v28aQz9uHBAk%2Ftazt%2F14HgW3YeI6X1l%2Fx%2Fwqht7cbr30gKXgIRdvHhy2b6vVvDDLE2s8r2E3PiI6tjKCfgvtqP0Dv9sQj4%2FyaZrejKna4NNrCvf%2BDS%2B3xxPUfhNPb8bY8zjfJAYr7Nzyaf7x%2Bt0DtXgWNloPTAl2PSXivaRKPHmKgVrlarAbBqdJbUNjM1JiJtDAHILCEEofhy4AP4pbmIGDtyppjMOL4DiuZCgCxJctlysjhMNntTT2PSA0dYwl5KvwgY6pgE4n1nPooss0gTGOr9xU5sCfgaJ7NrEZIxb0hWa3YEjFoeFtywXe3nWuF8ZyWXQZrweWg%2BNOoXZ%2Bdqih%2F7EIaHyasklku1NTteAzoluYVhUskRQkuwqo5NAIjMlRCFIyDaYBsy1FDTXdyvlGCH6q001ry9myhqonmkwzTi7IvBWmIUP9xW7j1GY5U%2BNlU7YQn9Dn3hBJlA7soFmue6Gx0kgNcYStm48&X-Amz-Signature=3fa11a8e5772eaf484447307e86b8448e1d4450960bff941179f593ac47667d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
