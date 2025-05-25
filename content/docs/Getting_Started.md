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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URUVLKOX%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T041544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIELFd8hDe9XJEr4e7tDt2SgLqxHTtvuPXVBGStXjr7LKAiA6vFSv0WNMn2pJy8DclEx0zD5afGdlMfiAXflScbCTSCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMkR5d%2FbtnmWB%2FEhd9KtwDswUAtjEwhD58R4KZYzxMeBPphbnL33hBIsAtsheoWfVrOAwAQlSj09qtfU1LAPasQ95WkQqLo410IjCcAdV34IF%2FPyIpkNKkbhrKtzMzYo%2FLrTBbtWqpVXRf%2FmH8kyy57XLLvy8GIBjeGU1AwUUibniQ6p5MDOdLCEyu3bvEYc%2BKTSIIhE0zCT6ilttfuw%2B9HqJy4CFTU%2FbuIz16P2nbsslAaNjGdLpAK3qvsv1IB06OK8H%2BlxAXEIMk0AMAwzMhcQC%2BtU5DohSIs6yNdsr6%2B136spJ%2FvMT%2BuO0LQaNswfDxKIrar5QTsT%2B0S2mgJHh0Kxvjicjnzxe1iluze5ijIiQrvBeF9aFMmDIuABZ0OvyGLG5TEu63zNBq%2BvMQcH30HJXPsq2bv7hsJk3FYdv%2B3sdVbWzxqEKDRcqzXsW%2BgQDfpKBLFTxDlK38tUZKeJEij99k77WTBcKiBN0eT8WiFTmPo9HVWK2IQPDLmclZZB63WLR1EF14meBoa%2Bsxr72CsvgLtlB5e1Bto5CkMy6XpqRkyNPNIhF9HRn1VYbB8e1v1NHIrm5JCZo9PZYe3ErYLBcxiINw7VUL4354NTB%2FBOaGieWzpiZWO11CyEILHi0i%2BjkeIk2%2FmKtQhIcw7ZjKwQY6pgHJXBgidzFeRZx8zMloWj1wzPcjsviKEINWk7G80koKKslDgA1ogU4p%2FqMgIPR7UWjc5%2BLM%2Bbc7udFBFD5ja560z%2FjFugeW4XSUBPm%2F%2BMuVXee84uY0Nxzq6CfO1fVcGYfYP%2BI%2FNEeTlew10mDBQh8ub7amhxdeNYe9sQ7fjiq%2FvVMjeSckevfsX6kcWOints41guXDthl92sYnFLp1cCbIWXpYNNsn&X-Amz-Signature=624020b5e5f0070320d4873e7bccac39b993fbb83c4c1b0b15c2ec72db542897&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URUVLKOX%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T041544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIELFd8hDe9XJEr4e7tDt2SgLqxHTtvuPXVBGStXjr7LKAiA6vFSv0WNMn2pJy8DclEx0zD5afGdlMfiAXflScbCTSCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMkR5d%2FbtnmWB%2FEhd9KtwDswUAtjEwhD58R4KZYzxMeBPphbnL33hBIsAtsheoWfVrOAwAQlSj09qtfU1LAPasQ95WkQqLo410IjCcAdV34IF%2FPyIpkNKkbhrKtzMzYo%2FLrTBbtWqpVXRf%2FmH8kyy57XLLvy8GIBjeGU1AwUUibniQ6p5MDOdLCEyu3bvEYc%2BKTSIIhE0zCT6ilttfuw%2B9HqJy4CFTU%2FbuIz16P2nbsslAaNjGdLpAK3qvsv1IB06OK8H%2BlxAXEIMk0AMAwzMhcQC%2BtU5DohSIs6yNdsr6%2B136spJ%2FvMT%2BuO0LQaNswfDxKIrar5QTsT%2B0S2mgJHh0Kxvjicjnzxe1iluze5ijIiQrvBeF9aFMmDIuABZ0OvyGLG5TEu63zNBq%2BvMQcH30HJXPsq2bv7hsJk3FYdv%2B3sdVbWzxqEKDRcqzXsW%2BgQDfpKBLFTxDlK38tUZKeJEij99k77WTBcKiBN0eT8WiFTmPo9HVWK2IQPDLmclZZB63WLR1EF14meBoa%2Bsxr72CsvgLtlB5e1Bto5CkMy6XpqRkyNPNIhF9HRn1VYbB8e1v1NHIrm5JCZo9PZYe3ErYLBcxiINw7VUL4354NTB%2FBOaGieWzpiZWO11CyEILHi0i%2BjkeIk2%2FmKtQhIcw7ZjKwQY6pgHJXBgidzFeRZx8zMloWj1wzPcjsviKEINWk7G80koKKslDgA1ogU4p%2FqMgIPR7UWjc5%2BLM%2Bbc7udFBFD5ja560z%2FjFugeW4XSUBPm%2F%2BMuVXee84uY0Nxzq6CfO1fVcGYfYP%2BI%2FNEeTlew10mDBQh8ub7amhxdeNYe9sQ7fjiq%2FvVMjeSckevfsX6kcWOints41guXDthl92sYnFLp1cCbIWXpYNNsn&X-Amz-Signature=e7a8d3159845febbcaf0b79ac18da796202c8b0a32a91e9db8e092b0a7b6c57e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URUVLKOX%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T041544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIELFd8hDe9XJEr4e7tDt2SgLqxHTtvuPXVBGStXjr7LKAiA6vFSv0WNMn2pJy8DclEx0zD5afGdlMfiAXflScbCTSCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMkR5d%2FbtnmWB%2FEhd9KtwDswUAtjEwhD58R4KZYzxMeBPphbnL33hBIsAtsheoWfVrOAwAQlSj09qtfU1LAPasQ95WkQqLo410IjCcAdV34IF%2FPyIpkNKkbhrKtzMzYo%2FLrTBbtWqpVXRf%2FmH8kyy57XLLvy8GIBjeGU1AwUUibniQ6p5MDOdLCEyu3bvEYc%2BKTSIIhE0zCT6ilttfuw%2B9HqJy4CFTU%2FbuIz16P2nbsslAaNjGdLpAK3qvsv1IB06OK8H%2BlxAXEIMk0AMAwzMhcQC%2BtU5DohSIs6yNdsr6%2B136spJ%2FvMT%2BuO0LQaNswfDxKIrar5QTsT%2B0S2mgJHh0Kxvjicjnzxe1iluze5ijIiQrvBeF9aFMmDIuABZ0OvyGLG5TEu63zNBq%2BvMQcH30HJXPsq2bv7hsJk3FYdv%2B3sdVbWzxqEKDRcqzXsW%2BgQDfpKBLFTxDlK38tUZKeJEij99k77WTBcKiBN0eT8WiFTmPo9HVWK2IQPDLmclZZB63WLR1EF14meBoa%2Bsxr72CsvgLtlB5e1Bto5CkMy6XpqRkyNPNIhF9HRn1VYbB8e1v1NHIrm5JCZo9PZYe3ErYLBcxiINw7VUL4354NTB%2FBOaGieWzpiZWO11CyEILHi0i%2BjkeIk2%2FmKtQhIcw7ZjKwQY6pgHJXBgidzFeRZx8zMloWj1wzPcjsviKEINWk7G80koKKslDgA1ogU4p%2FqMgIPR7UWjc5%2BLM%2Bbc7udFBFD5ja560z%2FjFugeW4XSUBPm%2F%2BMuVXee84uY0Nxzq6CfO1fVcGYfYP%2BI%2FNEeTlew10mDBQh8ub7amhxdeNYe9sQ7fjiq%2FvVMjeSckevfsX6kcWOints41guXDthl92sYnFLp1cCbIWXpYNNsn&X-Amz-Signature=0d4ee04ebe6e7318e300518bbcc726171d50049b1207fc2d1c707b63253778d2&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H2VM3ZM%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T041546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIFmc3Ap83f0o2bJQgzcAYKb%2FJP9rq6kyS81jTZt80Hy4AiEA41VjEgEZxYKNvrF0IPje1Im1ka38RzaNUeKyxfMqPdQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDHaRAn5NuLiG%2FIpLEircAwyilxYT4OYPrLOAlUel6%2FCArijXYxudn29Gs0TL5vSO2AcsOa%2BwA2XhX6MCdo%2Fm9TnCICtpzvuI0yS0ttPiwp0XDAYydimeETHSMM2p1D5h9eIoqeTQZFslR2tcW9F4GW2r5VuOY2HLZM7JvSYOqv%2BuEj8I27I%2Bg0ibfs1eBSPX9FuKhZNVQyeII%2FsvtW%2FR%2FnoSyVkrEr%2Bzx1MtXaNZsk2tNc3IpzYtKRzdEdWg4sI6nu12YMjqd2gTg9Bace98VNve1NKd41Wp%2B21vbFNUbrVZNZ3S%2BdQzwy1xo7Vf1VrghWhile8NmsG1%2FEzC5tUFzCb0ZD2b6SbW5LOlPfJyOAyY22o2FWEHLdGs2B%2FX57lRqae63eomDi%2BnX8EOgqMfEChar90yX%2FX5JD3x2q7f9TXt1Qw1g9RvkibuygZgE00ePu4Kpw%2BxVNx1oTb%2B2YAmtBxhX7SaL2qrA8vTGKsRtG2Kl6CicIFbAfYSM48NVCnJiXA1iVG10x5LnuyYaKvez8hUXXtwcmFe1aNHG%2FDIIM%2FDlJ2Dwcys6boD1THBvf4osIZaO3rgm8uzYuu815EK%2FG%2F4e%2Fp9cIdX%2B4CpkM%2BXpABpDbxqZ6TDfuOHp6nHgoSHINIVOJD3goUVfF%2BNML%2BYysEGOqUBlSUsXe2V%2BGbRI8wJoOPJKRfXGpQwfeLhk8q2PmZZNGPuQdneL5jy4xGF6d99%2FypKuiOLbHYLdmWz25BBaMTSnW9lJ%2F4pQSKpY3%2F6QwENbDdKRLBadEUdkA9E7U8MQM1fcsGDY38D%2Ff%2BTl%2Fq0a9DvGJEB90HgENZamnwPhGBp14M467xqn7xi%2Fo41rqm67da%2FjyATZyz%2Bvil2MWhDhnfs0NWgVPtO&X-Amz-Signature=6799687cca8a8b63985b51b694cd189ac0055ee52b12245d25cdc88d49a2adb3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAKOUCET%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T041546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDnesg2aCklJdIhzub3yHJg29w4tcAszBiYtXO0QMW1HAIhAOvOflabGgDJkdbQiiQeCSLNOlzKD3iYBcYL29Ut7f8DKv8DCCQQABoMNjM3NDIzMTgzODA1IgzKMRh6K3A3BBLLZEoq3AMwg5FjU5Zqqu%2BE0ac%2BI%2BZ8dH5IGVCPgo61bPfE1%2BR9jWVzfugkyvfJm%2B1Lbnw2Y%2B8OlLpt0SPE5Tynq77dR7NOwFGBlxizy5Q5ARukRrN7SXwh2rPsX1R9p1eKJPV0%2BzfPq3rdbZuSyB8OhLOt%2BH3pbihZ3DiU3hx0o9ZcdT1LObq5dariSgyJhNsJjTljL0dwmoAIeyI5eWpYegopCF4gvpJ0eZS2Evbiiyh9IhtghbcxWRZx9HD8ozX7g2RJWBFUhNSZm9M7R0jzBdOSdFbRFWfG0yqCeokt6glXisVpzXFwZuU0zz%2FckW6gW0xkD8SSBM%2BaXI3xsI5t6yB64eS32FN2SFfhHR2tcECYKrP%2FaguDBrDbHhrz3Kp4sX39Y%2F9MVvla4QQsbO%2BA5KmsKbP3jKbe2iP9AayE4AjBlmz5poEO%2BLa%2F2O8Wd2XHLys4nIU%2Fvodb3HkM43jcYt5CkEuApApf8jgUpcdx4pyUTLB3UmXiuWJNx373RH9S%2BAYnuGahgR9JeP%2F%2BsRCNG%2BCirhjKaS6SxVFBcu%2FPL%2F7iArJMMfPY3%2FZC%2FDgeG6LHDu4PV%2BC404E5cBPCoTHAkxvTlEA0mt7Zv9uvNEliG7kuESCfqpMW0B8tJHoti84pzDCmmMrBBjqkATGjHA43Pvih9a4WN85Lw0xP0yV7pb94XDLI7V7tkVmcVjmZw2PupeO3fCEZemc5LdJplKiX7zN11vTXlb7jtLvblc%2F63HePX4gYQso94pZd4p1NuD8cwRW7cWJvwML2s3qc%2BBEJXlPEVMGIlxZxGirnm%2FaeffIhCq1qZzTwjKup%2Fh2%2Fw3Z9%2F4bEOUnlKU0iPZ95oR3tM2Y60D1A31Q6Qmuv5dKO&X-Amz-Signature=114ec9a7172ca3d756a648cb4e340a99977254ab733292712c849977e5ec2e93&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URUVLKOX%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T041544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIELFd8hDe9XJEr4e7tDt2SgLqxHTtvuPXVBGStXjr7LKAiA6vFSv0WNMn2pJy8DclEx0zD5afGdlMfiAXflScbCTSCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMkR5d%2FbtnmWB%2FEhd9KtwDswUAtjEwhD58R4KZYzxMeBPphbnL33hBIsAtsheoWfVrOAwAQlSj09qtfU1LAPasQ95WkQqLo410IjCcAdV34IF%2FPyIpkNKkbhrKtzMzYo%2FLrTBbtWqpVXRf%2FmH8kyy57XLLvy8GIBjeGU1AwUUibniQ6p5MDOdLCEyu3bvEYc%2BKTSIIhE0zCT6ilttfuw%2B9HqJy4CFTU%2FbuIz16P2nbsslAaNjGdLpAK3qvsv1IB06OK8H%2BlxAXEIMk0AMAwzMhcQC%2BtU5DohSIs6yNdsr6%2B136spJ%2FvMT%2BuO0LQaNswfDxKIrar5QTsT%2B0S2mgJHh0Kxvjicjnzxe1iluze5ijIiQrvBeF9aFMmDIuABZ0OvyGLG5TEu63zNBq%2BvMQcH30HJXPsq2bv7hsJk3FYdv%2B3sdVbWzxqEKDRcqzXsW%2BgQDfpKBLFTxDlK38tUZKeJEij99k77WTBcKiBN0eT8WiFTmPo9HVWK2IQPDLmclZZB63WLR1EF14meBoa%2Bsxr72CsvgLtlB5e1Bto5CkMy6XpqRkyNPNIhF9HRn1VYbB8e1v1NHIrm5JCZo9PZYe3ErYLBcxiINw7VUL4354NTB%2FBOaGieWzpiZWO11CyEILHi0i%2BjkeIk2%2FmKtQhIcw7ZjKwQY6pgHJXBgidzFeRZx8zMloWj1wzPcjsviKEINWk7G80koKKslDgA1ogU4p%2FqMgIPR7UWjc5%2BLM%2Bbc7udFBFD5ja560z%2FjFugeW4XSUBPm%2F%2BMuVXee84uY0Nxzq6CfO1fVcGYfYP%2BI%2FNEeTlew10mDBQh8ub7amhxdeNYe9sQ7fjiq%2FvVMjeSckevfsX6kcWOints41guXDthl92sYnFLp1cCbIWXpYNNsn&X-Amz-Signature=1a03cd1e6331227c3513443f7c1c3c9a22b6a0aba061300b9be9413727451b35&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
