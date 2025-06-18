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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOJQJRIR%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T121629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPBvkIabOMSlBl%2FUJsaOULdRQn73gpe%2BQhWwD1CyofJAiEApkyuKb%2FoRTL5rQDmKq5dHTctM%2BvAZt2%2FAJQ32eGO4VwqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGiTwYrRv0RmiBewtircA98I%2BhHYRlQdauA%2Bz%2Fh4%2FVCDf2AGy1BCTRytFHgCAXKjwNXweXLUyPFHM6if1Pj%2F6RsQK%2Fmgxb%2F0YCNby4OGnPJgwakQeX17N66pQVTMcfpUAo9Sl1bLoSDCzq4%2B4GO%2FNy38snpHogYJEk9Wq2X9xOxxD0Bc2kryz5iXRVsL19pkl0c6GUWXAIYybZGZwVxcCl9EXjkp8oj6%2Fu%2BrqqyLtuYxTUX0uePFQVWg8W%2BrNLjaf6ntPCpc5vyFBjmXmHES0ifya6BC7U2oLuAI1ngHGBDr%2Bx%2FooSP%2FvIsLhaHYTq1mmlG3SStEfpYl70gXKoA6u3HHkL%2BA3OkBGHdWI8Y9Ue95wzy5KS%2F0Q4qwQ6kNafKmbRdAmmG%2B6GpxVOTNL2hz6Wx%2FStDS11Sc6uzMcUiX2KMpxYNjfc4L3MB4%2F2BNm0SI1hTNNAcobC2mgJ86uw9XJx7Q%2B8%2FBtjlq5QiGpRQPWCaKywMRl%2BXGUffCMGAUWo9mUDiKakVQqLp%2BiqtxPRHthyOQcaxs4YuuODqSMPTHZlsMGJO2LcuXl4ANj2kYEqhMCFfuQOxLIyIpVkwgRwjQrjJILijW%2FCwkPLcipsIlDdABfJUC99SOV8znv8UP5d4Wz%2F3KL4wCKh22xkVgMNO2ysIGOqUBVvW1W4J8PFq2VQPcmnGSkADDeaHhQdDQNgthCfG1dSEMnpM2x28AHV0e0ZjJdwzE2QGOcONOaIBvm9UYBNW8Po3iHUEEAHVY0n2kOp%2B9hjDRXJjRUcIlRnRi83SJbQa5GnVN0dHzEnxd1WX8O4ed8WtURy1TTZs5bABGq2njl2fHBK4D3INwK036xpB5Pu8PBMjI6DUIEPD9RhOSSXCZ6nvf%2BX78&X-Amz-Signature=3d68fcdba2940c7595820837510d40b7f87fb68842f7d42964558b3aff913025&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOJQJRIR%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T121629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPBvkIabOMSlBl%2FUJsaOULdRQn73gpe%2BQhWwD1CyofJAiEApkyuKb%2FoRTL5rQDmKq5dHTctM%2BvAZt2%2FAJQ32eGO4VwqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGiTwYrRv0RmiBewtircA98I%2BhHYRlQdauA%2Bz%2Fh4%2FVCDf2AGy1BCTRytFHgCAXKjwNXweXLUyPFHM6if1Pj%2F6RsQK%2Fmgxb%2F0YCNby4OGnPJgwakQeX17N66pQVTMcfpUAo9Sl1bLoSDCzq4%2B4GO%2FNy38snpHogYJEk9Wq2X9xOxxD0Bc2kryz5iXRVsL19pkl0c6GUWXAIYybZGZwVxcCl9EXjkp8oj6%2Fu%2BrqqyLtuYxTUX0uePFQVWg8W%2BrNLjaf6ntPCpc5vyFBjmXmHES0ifya6BC7U2oLuAI1ngHGBDr%2Bx%2FooSP%2FvIsLhaHYTq1mmlG3SStEfpYl70gXKoA6u3HHkL%2BA3OkBGHdWI8Y9Ue95wzy5KS%2F0Q4qwQ6kNafKmbRdAmmG%2B6GpxVOTNL2hz6Wx%2FStDS11Sc6uzMcUiX2KMpxYNjfc4L3MB4%2F2BNm0SI1hTNNAcobC2mgJ86uw9XJx7Q%2B8%2FBtjlq5QiGpRQPWCaKywMRl%2BXGUffCMGAUWo9mUDiKakVQqLp%2BiqtxPRHthyOQcaxs4YuuODqSMPTHZlsMGJO2LcuXl4ANj2kYEqhMCFfuQOxLIyIpVkwgRwjQrjJILijW%2FCwkPLcipsIlDdABfJUC99SOV8znv8UP5d4Wz%2F3KL4wCKh22xkVgMNO2ysIGOqUBVvW1W4J8PFq2VQPcmnGSkADDeaHhQdDQNgthCfG1dSEMnpM2x28AHV0e0ZjJdwzE2QGOcONOaIBvm9UYBNW8Po3iHUEEAHVY0n2kOp%2B9hjDRXJjRUcIlRnRi83SJbQa5GnVN0dHzEnxd1WX8O4ed8WtURy1TTZs5bABGq2njl2fHBK4D3INwK036xpB5Pu8PBMjI6DUIEPD9RhOSSXCZ6nvf%2BX78&X-Amz-Signature=870b503ea9368bbbac61946470d24b9be0f66911c5f478f2a363d7d4640c551b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOJQJRIR%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T121629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPBvkIabOMSlBl%2FUJsaOULdRQn73gpe%2BQhWwD1CyofJAiEApkyuKb%2FoRTL5rQDmKq5dHTctM%2BvAZt2%2FAJQ32eGO4VwqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGiTwYrRv0RmiBewtircA98I%2BhHYRlQdauA%2Bz%2Fh4%2FVCDf2AGy1BCTRytFHgCAXKjwNXweXLUyPFHM6if1Pj%2F6RsQK%2Fmgxb%2F0YCNby4OGnPJgwakQeX17N66pQVTMcfpUAo9Sl1bLoSDCzq4%2B4GO%2FNy38snpHogYJEk9Wq2X9xOxxD0Bc2kryz5iXRVsL19pkl0c6GUWXAIYybZGZwVxcCl9EXjkp8oj6%2Fu%2BrqqyLtuYxTUX0uePFQVWg8W%2BrNLjaf6ntPCpc5vyFBjmXmHES0ifya6BC7U2oLuAI1ngHGBDr%2Bx%2FooSP%2FvIsLhaHYTq1mmlG3SStEfpYl70gXKoA6u3HHkL%2BA3OkBGHdWI8Y9Ue95wzy5KS%2F0Q4qwQ6kNafKmbRdAmmG%2B6GpxVOTNL2hz6Wx%2FStDS11Sc6uzMcUiX2KMpxYNjfc4L3MB4%2F2BNm0SI1hTNNAcobC2mgJ86uw9XJx7Q%2B8%2FBtjlq5QiGpRQPWCaKywMRl%2BXGUffCMGAUWo9mUDiKakVQqLp%2BiqtxPRHthyOQcaxs4YuuODqSMPTHZlsMGJO2LcuXl4ANj2kYEqhMCFfuQOxLIyIpVkwgRwjQrjJILijW%2FCwkPLcipsIlDdABfJUC99SOV8znv8UP5d4Wz%2F3KL4wCKh22xkVgMNO2ysIGOqUBVvW1W4J8PFq2VQPcmnGSkADDeaHhQdDQNgthCfG1dSEMnpM2x28AHV0e0ZjJdwzE2QGOcONOaIBvm9UYBNW8Po3iHUEEAHVY0n2kOp%2B9hjDRXJjRUcIlRnRi83SJbQa5GnVN0dHzEnxd1WX8O4ed8WtURy1TTZs5bABGq2njl2fHBK4D3INwK036xpB5Pu8PBMjI6DUIEPD9RhOSSXCZ6nvf%2BX78&X-Amz-Signature=ff8d215e0c21dd43bacc83b6b35ba512270a9db73cf88126dc0964430199404b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T52DDLG2%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T121632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGk8imjkEm8dsgOorobw7ip%2BV9sPJuoVvXD8BBqWFwbNAiBAfFDHz52PbX3xoV2sPyCvbz1ULls%2FA0bnzLgM6s%2BvNiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb6hPdTR%2FwJK%2BxdUNKtwD9TQYpxSWifvEjoZhPhMJYWfh674NosqeXpeUfw1q74fcM0zBWOckGDFej254wm0T3VmidePU%2FtIUQ24M%2F7F5TXrBwrm%2FPZT481dx%2BK45s5O%2BmCGVJhUMZROKWPZobDLX5%2B9g1TNCLvhXwCL%2BJv9y4senM9QBa38pT7jg7BXdmLBaCuC1KMmpFw7IoH64ZJIWNOpPWNMPGJy0Um5nthPOHeWyzd0hJ4l%2FiMHaBsFuT%2BS8zpliRNNH07c%2BgU2jk4FQFEt0jnu4bKuzhZacKgTuZBucMXB4w3TRms1ANXr6f7zHz68NS2liYxs8rZksG7MgEvUZQFALAq5dwxrxNVU8ektuORoELJv1wDXX6sgb0nzjuRLszCBe90ypA0SlClGQ9c%2BJ99dStpzqk2qPWDQB0GjxBmDPSMYJTzjsl44HpO%2BdrqntXZGAiiQ8D5Ti9CSrHchPzo3eA43O7PRVVPlErKpj7kK2zbcRwafD8U41Jox0ue3MTnp3fqpSxAnm%2FLXKs6SopxA%2BIxPVei1vJOCPXtW2X%2F78lLnLrTk%2FK%2Fi4TaKTMNDisoDcdncb6Lb%2F4t9EhU2xFYcz9ZSAsQfED0blnJsi%2FLBET2W33Yl57HL1vTJxuMopn7nVw6QTn14w5r3KwgY6pgGFPnOEceNDGQAMPSksHiF3VkGwLnjyk16L9uqtLtU6MXPy4dGmscGrgefshM4nUoi9%2B9MzTaU0PLyqrwkuuoEhG3ba18i8UiLTJ%2BtEdMMbFxHuj82O9r4Tu%2BJzlH6WREKInKJ2waWVtcmG2DbYhK9yqNoWIHWazgT5vtwD%2FnGVNuibtGcd%2BwmOtrYTV6rlFwHyCEA4jQ55Np9Uwsa8w0wUV1WQURb8&X-Amz-Signature=c0c15215636ce87ac829fbb455924a0ed1e93c0fab98531f770d4eaa06a00225&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HDH5D2G%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T121634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrA2yuEw8xdwYo2kAXKKydhALb888QR%2Bme2JyC23eb0gIgIcOPYc0M1rJ1dd3ZhW8bwlADpwrWdW9onD8GrfsOASEqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPg2JwvDvfPws7JK%2ByrcA4InhcmSTpGz%2BsOqWQLiGYtcvbxaczae3szfqb4JbRZrp%2B%2Fg6RfAMy1UOhIfzvyo7C8i%2F4erCwWIJEmP6K2kXC3U26LVz488yZAqoaPgQwXyf1yhNLZTC94jvGiG83SeO89nuvdvybLKldWd%2B0p5Utc0vwSRaicOyHqxyQ2QY3pxcE%2Bpe4kQMmT1sRIbtgLfj5oiJWHGjHVaUJyPhC1C9opzYgySCSELRXbNfr4EkRceGPH3H1uiB7GZfqwVTcI7EDmhx4RZyIBC2xlpEY0fC1B2TGfMl18tQt53A4XAuzudtezZwH9pVXcA8SbOxPz%2Fm7XJkQPs78mRZfrHi1LhKUOHl%2BZ8Hajy8Qx45WZMSl%2FAklNUjv7SNzcBNX3LUk5ALVNPXP76%2FRaVYt1Ar0wJsqB3TjKscUMbP4FpXVLV3FEchH%2FKzVMGx00PyMIiYpF6Ek1t2JYtt6Myh1iWHh1%2F5FMovUa545bzefnqGWsSrmXZyMzi%2B08K1HZqEjiqJCCUSt7LEK4FPifP%2BRFdfRjLi14MR8SpgW764GO84zEh65VFvkVE2VRBzzPelWpQ%2Fw4KS8hvbCcldfJ2Qcu8XgvgHQ477E2xW%2BMicD%2FDUOrpbtClH6%2BRiWVctF0wv76uMOm2ysIGOqUBet51ibBjM7fTGtnZ3RY2E9GCyuJkuGbnXxpb8edgGdEsYYcglrqOdUoU%2FtVVH%2F3WHM8jvi3slA0XiE4PYzNcuY9kT%2B9NLTvujkQoi%2BsnKOB19NTSP8laVCTq%2FBKDazORHLcjrHMm4nDGBIAnsccFJZQhKthR0fJnJN8Nth2nR1aR2HRD%2B9LUxjiKp5%2FZkUwnXFrI836iZw2ZixadbM4khd%2BBgQOQ&X-Amz-Signature=cf88a2d4fe9812e2251ce1eadfee62e7c0fdaebab83efb21e16a335801e79306&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOJQJRIR%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T121629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPBvkIabOMSlBl%2FUJsaOULdRQn73gpe%2BQhWwD1CyofJAiEApkyuKb%2FoRTL5rQDmKq5dHTctM%2BvAZt2%2FAJQ32eGO4VwqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGiTwYrRv0RmiBewtircA98I%2BhHYRlQdauA%2Bz%2Fh4%2FVCDf2AGy1BCTRytFHgCAXKjwNXweXLUyPFHM6if1Pj%2F6RsQK%2Fmgxb%2F0YCNby4OGnPJgwakQeX17N66pQVTMcfpUAo9Sl1bLoSDCzq4%2B4GO%2FNy38snpHogYJEk9Wq2X9xOxxD0Bc2kryz5iXRVsL19pkl0c6GUWXAIYybZGZwVxcCl9EXjkp8oj6%2Fu%2BrqqyLtuYxTUX0uePFQVWg8W%2BrNLjaf6ntPCpc5vyFBjmXmHES0ifya6BC7U2oLuAI1ngHGBDr%2Bx%2FooSP%2FvIsLhaHYTq1mmlG3SStEfpYl70gXKoA6u3HHkL%2BA3OkBGHdWI8Y9Ue95wzy5KS%2F0Q4qwQ6kNafKmbRdAmmG%2B6GpxVOTNL2hz6Wx%2FStDS11Sc6uzMcUiX2KMpxYNjfc4L3MB4%2F2BNm0SI1hTNNAcobC2mgJ86uw9XJx7Q%2B8%2FBtjlq5QiGpRQPWCaKywMRl%2BXGUffCMGAUWo9mUDiKakVQqLp%2BiqtxPRHthyOQcaxs4YuuODqSMPTHZlsMGJO2LcuXl4ANj2kYEqhMCFfuQOxLIyIpVkwgRwjQrjJILijW%2FCwkPLcipsIlDdABfJUC99SOV8znv8UP5d4Wz%2F3KL4wCKh22xkVgMNO2ysIGOqUBVvW1W4J8PFq2VQPcmnGSkADDeaHhQdDQNgthCfG1dSEMnpM2x28AHV0e0ZjJdwzE2QGOcONOaIBvm9UYBNW8Po3iHUEEAHVY0n2kOp%2B9hjDRXJjRUcIlRnRi83SJbQa5GnVN0dHzEnxd1WX8O4ed8WtURy1TTZs5bABGq2njl2fHBK4D3INwK036xpB5Pu8PBMjI6DUIEPD9RhOSSXCZ6nvf%2BX78&X-Amz-Signature=c7119dace72c7a31c185a0ddcf08f8c3ac338f96e055670e123e1c7bd5f3ad6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
