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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCDET2J%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBs74nf7QRRMbVreb6jV6L8fEFiTPoE3OwAZ2m8E2ObKAiB0%2B1n%2BMvVsp0HaRRy4yM0e7m44Iu%2FrPjD995kHX3uDeyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMK%2FOJWwvw9gHg0jrzKtwDYKiNynSdhA2OL6LTZ16o5pnqFvwKEJcOSpkiEJIBUy8APz%2BAiteZyVDVXaLYTu%2BuvYSU0QBBQ3xE3q4sTyFLSGKNYMx%2BRqzbV1gaOqpbMaMyN6LLRaZ9U3H99Ftzef0Vo5wbEFlFfGuQdZcTmSWWPAvmQyC13auO6CsghOLxLJkXGhrGBDEVYhDMKziBkgml3EC3PsdwP%2BoT5Tc6jO52fweThEhgkuZ7srBBUvu5iq5exKabTfK%2BOGbVFQQCBqpwRocTpiwGAzEHYzZWoRb%2BOdaC7J0CATfVoGs9fJzClLhGpiLPlPNnlZjGfeN%2FlMgBHh7rjfogSVRT30tBxbD922JoqGbSPpXDlA4Zzd0thywE1KogZ9x8UgHSh7yCLZnDE7m3vAjQJvzdqA0AAYF5yOJ7VOsGv8ohe5nBDeBfi%2FEXrWfuEvdYEouopPDWZR9NlUJmfnbn9E%2FP5IUSwOGgPd0d4a4ciutNJc2gS9vlNltBMBg%2FQ7bgP%2FCquGggLaTYFacw87Q07PAWWg0m5xKp07XBZpGslkkJk%2B41vY5PBq61KYclH91iwKfD1657oxdQLKSYU03Qec3uc%2FrefHe6ZCyGuCVOPn%2Bd00JkwKMI6U7fKgp4QK0YUzBISdww8OKRxAY6pgG1bBMKKTYXA10ps11Tb%2FIADvczpI9g428epnomxCfKeDAUzSmoodgWPCTO2FkgWCgjYsn99U0l9KlHqR%2FucGGxG5vQyDdpcnqX%2BjaTzjGqXl26ko%2BemIV%2BHdz5PoC3Ko8OaGc6hUsDFqMNAr5tHWmAUReiMu2ghLf73FlXvu7pIg3WrvTsVzG%2FGhV3Oghnv7IDzFXUkdJLoeMAv%2BDTrFoL8aAhIIET&X-Amz-Signature=ae086f90dc7214d92eaffd749feb241a719efc560971eaa8c8fcb81976c31091&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCDET2J%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBs74nf7QRRMbVreb6jV6L8fEFiTPoE3OwAZ2m8E2ObKAiB0%2B1n%2BMvVsp0HaRRy4yM0e7m44Iu%2FrPjD995kHX3uDeyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMK%2FOJWwvw9gHg0jrzKtwDYKiNynSdhA2OL6LTZ16o5pnqFvwKEJcOSpkiEJIBUy8APz%2BAiteZyVDVXaLYTu%2BuvYSU0QBBQ3xE3q4sTyFLSGKNYMx%2BRqzbV1gaOqpbMaMyN6LLRaZ9U3H99Ftzef0Vo5wbEFlFfGuQdZcTmSWWPAvmQyC13auO6CsghOLxLJkXGhrGBDEVYhDMKziBkgml3EC3PsdwP%2BoT5Tc6jO52fweThEhgkuZ7srBBUvu5iq5exKabTfK%2BOGbVFQQCBqpwRocTpiwGAzEHYzZWoRb%2BOdaC7J0CATfVoGs9fJzClLhGpiLPlPNnlZjGfeN%2FlMgBHh7rjfogSVRT30tBxbD922JoqGbSPpXDlA4Zzd0thywE1KogZ9x8UgHSh7yCLZnDE7m3vAjQJvzdqA0AAYF5yOJ7VOsGv8ohe5nBDeBfi%2FEXrWfuEvdYEouopPDWZR9NlUJmfnbn9E%2FP5IUSwOGgPd0d4a4ciutNJc2gS9vlNltBMBg%2FQ7bgP%2FCquGggLaTYFacw87Q07PAWWg0m5xKp07XBZpGslkkJk%2B41vY5PBq61KYclH91iwKfD1657oxdQLKSYU03Qec3uc%2FrefHe6ZCyGuCVOPn%2Bd00JkwKMI6U7fKgp4QK0YUzBISdww8OKRxAY6pgG1bBMKKTYXA10ps11Tb%2FIADvczpI9g428epnomxCfKeDAUzSmoodgWPCTO2FkgWCgjYsn99U0l9KlHqR%2FucGGxG5vQyDdpcnqX%2BjaTzjGqXl26ko%2BemIV%2BHdz5PoC3Ko8OaGc6hUsDFqMNAr5tHWmAUReiMu2ghLf73FlXvu7pIg3WrvTsVzG%2FGhV3Oghnv7IDzFXUkdJLoeMAv%2BDTrFoL8aAhIIET&X-Amz-Signature=380b5c8d42457231b23ffe2928683cd6878d1ad3ffa32622def7a68805846449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCDET2J%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBs74nf7QRRMbVreb6jV6L8fEFiTPoE3OwAZ2m8E2ObKAiB0%2B1n%2BMvVsp0HaRRy4yM0e7m44Iu%2FrPjD995kHX3uDeyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMK%2FOJWwvw9gHg0jrzKtwDYKiNynSdhA2OL6LTZ16o5pnqFvwKEJcOSpkiEJIBUy8APz%2BAiteZyVDVXaLYTu%2BuvYSU0QBBQ3xE3q4sTyFLSGKNYMx%2BRqzbV1gaOqpbMaMyN6LLRaZ9U3H99Ftzef0Vo5wbEFlFfGuQdZcTmSWWPAvmQyC13auO6CsghOLxLJkXGhrGBDEVYhDMKziBkgml3EC3PsdwP%2BoT5Tc6jO52fweThEhgkuZ7srBBUvu5iq5exKabTfK%2BOGbVFQQCBqpwRocTpiwGAzEHYzZWoRb%2BOdaC7J0CATfVoGs9fJzClLhGpiLPlPNnlZjGfeN%2FlMgBHh7rjfogSVRT30tBxbD922JoqGbSPpXDlA4Zzd0thywE1KogZ9x8UgHSh7yCLZnDE7m3vAjQJvzdqA0AAYF5yOJ7VOsGv8ohe5nBDeBfi%2FEXrWfuEvdYEouopPDWZR9NlUJmfnbn9E%2FP5IUSwOGgPd0d4a4ciutNJc2gS9vlNltBMBg%2FQ7bgP%2FCquGggLaTYFacw87Q07PAWWg0m5xKp07XBZpGslkkJk%2B41vY5PBq61KYclH91iwKfD1657oxdQLKSYU03Qec3uc%2FrefHe6ZCyGuCVOPn%2Bd00JkwKMI6U7fKgp4QK0YUzBISdww8OKRxAY6pgG1bBMKKTYXA10ps11Tb%2FIADvczpI9g428epnomxCfKeDAUzSmoodgWPCTO2FkgWCgjYsn99U0l9KlHqR%2FucGGxG5vQyDdpcnqX%2BjaTzjGqXl26ko%2BemIV%2BHdz5PoC3Ko8OaGc6hUsDFqMNAr5tHWmAUReiMu2ghLf73FlXvu7pIg3WrvTsVzG%2FGhV3Oghnv7IDzFXUkdJLoeMAv%2BDTrFoL8aAhIIET&X-Amz-Signature=068ae09d6655c448cf4fa8e1e7a330b050ba6b9f094f64e759262e69963bd40e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW44K36F%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQD5unC8i9sGTJZkq8loDvElVhvqFj%2FmA23rnMagZKPstQIgdZ0aLSrsY8mLlXdmd2Dxr3KyqVLYpR7lIR4dyFQoHfAq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDLMJxHO8vzAke4DiGCrcA93zJoZ5s5d4rNTNhljB2Yf4Z%2FaWDuOJopWH2RrE%2BZDJTvjUHQZzK23bCNTfl6T7oWZURfMz6FsgPrZRZToejzd8SGxD%2F7whF5bcVzlSdxjBT45Vzq50e%2FMSpB48QpyJSsRoTK90vkfqzDox14vyqGXwB3xNRhvS5ABS12E2dlLBU6ya%2Ft58VrkCGPwWRwGpnldQyH3RcH%2BWC2k6gDMg369KZglYfiGB4PhN8zjzO1E7SaCKUXJGqFtZ3C5H3z2mfNtqN2SCiDfDqENqYhWBBiK9XKInIQBC%2BwfKtbSXsA1WIBv9q%2FlpeHBM%2FaPuJZf%2FiJV%2BsGzaFkyhywWekiGQ%2FmHLgzG6UptOd%2BohyeyritRpDkPq6%2BydB4JblVGt7C5UYlDeH7WTz0TRQ9%2BBy%2BDmzk1Nwf0pX%2BrQ4A9%2BKLU0Y2o4UqbcfEC78GfpZcm9ooP59H0d71R59e%2FDrbdNUHVarkzMyVXqwByax2C5hyiAcrSUVJEI%2BNqK5ZIJNKmxKaAVwCNP%2F6BOnUhbZFIz%2F3rHVU5P4hI7AuuiXfVmer7HsIL%2BTljDzTDcWiSvBk0oMhcDjRe2q4h6As8RSF0NeyIvP89KGhTYEa32X2busbgGcI6pGZJdnJgabGI%2BuW%2FwMKm8kcQGOqUBLXgInqrFdPkK3XUEo8V4DZhcKDiBJTjFPsixncSEDpfwBxD6Z0f2b8Jyl4XiBUS0To1XjQXFfPR2u%2F%2FtfOV56P36U%2Bfc92VPgt2iW2ZI%2Bh%2B3bpvgMqV8ewQHNta5romOgv2Wgr4e0jLhS38yMIKYFzDiujuZLXz%2BYK4AVbBox4AWw7h9XVi1SdBpVtn8kfSeVOKFMfTJN%2FobquqPrK1lDBH0lvwi&X-Amz-Signature=93d01a352d3cbfe08bd76eeeab07302e5d452f4b0ac8733967fb8ec28caa42ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTW7NYPP%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIEeeENwa5L3gS9EEgo%2FK6h535IsIUkq1GOEsH9HENVeFAiBv28uV9DWIZ%2BivdEEWIDU%2Fo%2BXqxa%2BVS4x6rC8w6Ean%2Bir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMp2ubha0YATHK8%2B8UKtwDxXNgy%2FiH3NtIkAWfWfJFHg28EALUK4jchhWx6eIa%2FnnAtQhUkviQhasRSVLzPs7z49PqFeJK63XpLBmt5C32VCKKdtKO8BWL52D7Uzt7ql278OxBd0SyyQDSXuVncScbYjYaSYfMLMJXU%2Bw27mudlVW1%2B4HBPzWssN09GeFDxcG7zoTWYEh7F%2B1XFI3%2Fwu7Sa19ATNdOm9Ds1JpHN4gfP34BIpY04IHo9%2F6jdjOOIx%2FgVP37Eka2c192dX7b842Vf0gGgrlbcA39zcbHv%2BDmrtYuzyeh0jspulCufNiLiM0n59oEHL7B%2FaomO2cwcfu3oYpWmzDMiIzCSoaBsExwYe%2BhzT5hVGgqYJEjror4c05mpf6jjoSw0CbcyhqNFTFikC3nov%2FpKdDZS%2BzCQoiII%2BzVtgukAjcJlpYzil6bqSF6COulftuLshxOBY0WMTXQVoflxKSEOMslr0AqksV9YLq2bS4Epp%2FOB4XZcnT1QZy4Kj0lWTGXFy0hcHOqitdFvwjYTlzv0fbJokxj41LhxpMeBCY6hGSJPc6yqy%2BSrev0MY1MrCNgVjkgJlCuUPCrC2e71JoZJDs%2BZnTJ6Ekmfej%2BnI6RDtm81pByyO6uacBkQjQTrVH0fVwIBiIwreKRxAY6pgHlLYugDkN%2BkSoX7t%2FEZOpl3xut3Ijbm006mVhmHfi8BM8TrA%2FOzPZJQ2FQplvZXlY3YgLRdjCu9HA3u8We09H%2FXxXsSBdDiei0q830fiKYdQ80l9NISQUHoruzcxlveRMeTv2XhLtQx%2BCjGH3s%2FjTsLBbwtsS3RTrH3Omyl%2FPfLYJ%2BLw9yIJR9%2FqtawUtBa7y%2BNaf8HPtcmWwJQanZPgvxEJCdKSYp&X-Amz-Signature=46ed4bb2c370887be501b3f7c41fed21de3155d9d45caabaf32f133303dadefb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCDET2J%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBs74nf7QRRMbVreb6jV6L8fEFiTPoE3OwAZ2m8E2ObKAiB0%2B1n%2BMvVsp0HaRRy4yM0e7m44Iu%2FrPjD995kHX3uDeyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMK%2FOJWwvw9gHg0jrzKtwDYKiNynSdhA2OL6LTZ16o5pnqFvwKEJcOSpkiEJIBUy8APz%2BAiteZyVDVXaLYTu%2BuvYSU0QBBQ3xE3q4sTyFLSGKNYMx%2BRqzbV1gaOqpbMaMyN6LLRaZ9U3H99Ftzef0Vo5wbEFlFfGuQdZcTmSWWPAvmQyC13auO6CsghOLxLJkXGhrGBDEVYhDMKziBkgml3EC3PsdwP%2BoT5Tc6jO52fweThEhgkuZ7srBBUvu5iq5exKabTfK%2BOGbVFQQCBqpwRocTpiwGAzEHYzZWoRb%2BOdaC7J0CATfVoGs9fJzClLhGpiLPlPNnlZjGfeN%2FlMgBHh7rjfogSVRT30tBxbD922JoqGbSPpXDlA4Zzd0thywE1KogZ9x8UgHSh7yCLZnDE7m3vAjQJvzdqA0AAYF5yOJ7VOsGv8ohe5nBDeBfi%2FEXrWfuEvdYEouopPDWZR9NlUJmfnbn9E%2FP5IUSwOGgPd0d4a4ciutNJc2gS9vlNltBMBg%2FQ7bgP%2FCquGggLaTYFacw87Q07PAWWg0m5xKp07XBZpGslkkJk%2B41vY5PBq61KYclH91iwKfD1657oxdQLKSYU03Qec3uc%2FrefHe6ZCyGuCVOPn%2Bd00JkwKMI6U7fKgp4QK0YUzBISdww8OKRxAY6pgG1bBMKKTYXA10ps11Tb%2FIADvczpI9g428epnomxCfKeDAUzSmoodgWPCTO2FkgWCgjYsn99U0l9KlHqR%2FucGGxG5vQyDdpcnqX%2BjaTzjGqXl26ko%2BemIV%2BHdz5PoC3Ko8OaGc6hUsDFqMNAr5tHWmAUReiMu2ghLf73FlXvu7pIg3WrvTsVzG%2FGhV3Oghnv7IDzFXUkdJLoeMAv%2BDTrFoL8aAhIIET&X-Amz-Signature=c46b42dd056f0237bd7dccfd9791d0d0f03af5dd94e255d53f35198cbd8c59ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
