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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHT3O2RW%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T210234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd85c4ffp%2BZ%2BpIYjTKUWtoGsaWh2467i3XpyPgP7JFZwIhAP8nHas1OxMD0T18ZXiXz46fYBAeDzOORfvtT6Vv1M7vKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FnFoHNjx4G%2FYxMfAq3ANoxIjHGXiwxb3BLtmMomMqIT84%2BxJpcOEp9sTvzglPdSgUIxhkGATA8Twc2o14Tdt09TnKgEITs7WyovK48u8M5ENaER0JZ3P4eFkJu5eQasqYu30G%2FvQgDcWYpeDW1WDGcGQJjvltLxzOAGSPPkAvBShGhVrLKtxXq%2BwtqvAEy%2FqJVlnnbcDpuSzbsRV1rr3dIhYL80gnPkAWzVukuobScp7wB3DeAgH4y1uZNJAGGPsZNHNzSQn%2F%2F8QWLvk6cauxMQaqpjmIvQb9W7FNvziI5AzzTswMSwBVJB7JniCqROjPwAHIyzyO3JPbKcG6XogLPAIyI4a35JRZkRvnJFXC%2BhikEMq%2FdNgQQ7FAk%2F6zb5SiDP%2BBGXZFL0kG4pIMFvf00L6OZ9J6OymQa%2BS8ZRuiF53EM9umOjiOyMNwK8p4vL2k%2FkN%2BYkUq0mAEV178vHlgCys4rvQOqr63kIa8yKCrB9Z3CGAOIcep1cXNwi3saP0upOFX52u7Hr%2Fh4%2FUoeojkaPQ3Oei5fzl5daioN3Oj9r8uiDpZxwnA2FKZ89YD162SYNmYSiTyIKCxr5f2ZK7wnbxPQHDknJLADL9HLaXRP%2FCy59gDRlDUHjIf9YOq6vqEYtPoX9eqW9ViIjCDlpK%2BBjqkAQgY3fUYaKRnJJo5ntO7oRQFhQLYJ61%2FjOpaPLb25SilOfmgczDPm7HVG6RR85aOgX0y%2FNeK%2Bz9tS%2Bu1I7Ha9H2pIGUetUg82eJGRdeMfG7bHqHk9q0P%2FVeHmB0Pj92P4uvurOpPR20A%2BzE%2BZfxhRy7h%2BVsrqgKhpcffPjX2mpm6WDu6dizQidFpxfPXKWpqjsLVT8YaoPRZ2zJHxKmWRGMabvj%2B&X-Amz-Signature=5b7fb4cd80b1cd81ae19bba8ecb3b572f586be6f90dd30b3a2b812e977de5092&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHT3O2RW%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T210234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd85c4ffp%2BZ%2BpIYjTKUWtoGsaWh2467i3XpyPgP7JFZwIhAP8nHas1OxMD0T18ZXiXz46fYBAeDzOORfvtT6Vv1M7vKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FnFoHNjx4G%2FYxMfAq3ANoxIjHGXiwxb3BLtmMomMqIT84%2BxJpcOEp9sTvzglPdSgUIxhkGATA8Twc2o14Tdt09TnKgEITs7WyovK48u8M5ENaER0JZ3P4eFkJu5eQasqYu30G%2FvQgDcWYpeDW1WDGcGQJjvltLxzOAGSPPkAvBShGhVrLKtxXq%2BwtqvAEy%2FqJVlnnbcDpuSzbsRV1rr3dIhYL80gnPkAWzVukuobScp7wB3DeAgH4y1uZNJAGGPsZNHNzSQn%2F%2F8QWLvk6cauxMQaqpjmIvQb9W7FNvziI5AzzTswMSwBVJB7JniCqROjPwAHIyzyO3JPbKcG6XogLPAIyI4a35JRZkRvnJFXC%2BhikEMq%2FdNgQQ7FAk%2F6zb5SiDP%2BBGXZFL0kG4pIMFvf00L6OZ9J6OymQa%2BS8ZRuiF53EM9umOjiOyMNwK8p4vL2k%2FkN%2BYkUq0mAEV178vHlgCys4rvQOqr63kIa8yKCrB9Z3CGAOIcep1cXNwi3saP0upOFX52u7Hr%2Fh4%2FUoeojkaPQ3Oei5fzl5daioN3Oj9r8uiDpZxwnA2FKZ89YD162SYNmYSiTyIKCxr5f2ZK7wnbxPQHDknJLADL9HLaXRP%2FCy59gDRlDUHjIf9YOq6vqEYtPoX9eqW9ViIjCDlpK%2BBjqkAQgY3fUYaKRnJJo5ntO7oRQFhQLYJ61%2FjOpaPLb25SilOfmgczDPm7HVG6RR85aOgX0y%2FNeK%2Bz9tS%2Bu1I7Ha9H2pIGUetUg82eJGRdeMfG7bHqHk9q0P%2FVeHmB0Pj92P4uvurOpPR20A%2BzE%2BZfxhRy7h%2BVsrqgKhpcffPjX2mpm6WDu6dizQidFpxfPXKWpqjsLVT8YaoPRZ2zJHxKmWRGMabvj%2B&X-Amz-Signature=100f8227d4718cac5d1de68fae44e8ac44edeadfc63be2dbbf8e73af7a58ea70&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675KTQEHC%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T210237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfS6NzP%2BZKur5%2BmJtCbzQ%2BUhQZkDQdAZrx73DYxPBWOQIhAO2%2Bk%2B1AaHWfEMQAymfvYOpbjSdaZ6dqjs0xUlc9lh%2F3KogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxH%2B74eCbaqhTcFd8q3AMtMi5x3n05%2FmSb%2Bhwjimh%2FvOlwk7yewDZmrI2hTIt4iLU%2F96KkHlS7GkVm3cGr2UQzsos2M1zMESdlESw8Q6Qg5QrD0pkqZN3mgA0Jr7lm4wUBVhwwJueoIkzQ70pazRcYU4wE0uVgEkHeIvFq6OE2n%2FxHjcSrnfERn5tcEvuiHz2xqeIROCEUSwz9fKSeHzG%2BT9pyo1YwIe3sjMGTk31Ee8enIVub4pFHvh%2BGqc44GxAfZQKZ8b%2Fn%2Bi6PzRATJgaiMOAmlzIF6UeeARRthBGBMZII%2BIkaPjDjUV4KHAdGDpTCGf1qNDGvDeAmCjOPWjxG%2BGB%2B2DTnEN2dWSj%2Fa50qGDnj4YsUwoptv8tPppgOJnF89BMHYL%2FzOwDXwqaVefkfTUEqCcazn%2BUmV4Axks4ibqMpjDJmu1%2FqPzwsZ%2Fv7eVL1eutejKyrKDCISitDSaNdchPJNcYGzk78nWY1HzFV0DdCX3Mgg3sMRhRAQERjER6EHr9MQn9BQF2lXXOEqxwuE%2FA5YMN6%2F7ShUKRRSSjJqNOqGWrNFV6DMWBtQB42SqDVSva27pmoSsY6ILALOYiAh4SwI4mKldbtz2AWe%2FOeUmyTpSsJ5p0Qntedp1SZFso8oXs6zatEqwV56jDIlZK%2BBjqkAYRkM%2B1O1PMXC%2BfatOBIeGvhZbR5e79DfwxTAjWzQ1fPcLRo8596l8C8DWCEn9o8HEYUGP9zEPHn3yqDLu2HU2ZBhJLMM3b5xws5jf7KepUo6DLPZiqhVWNEmlgZJ1Wygv90i8yYF5zSgft8qucu8oRMVyUnX4c9FruG8xMz4CH4njvB%2FMdZlvciJzRCce9WMHoLCVC6%2BKyvBt4rA4UQhEUg%2BfEJ&X-Amz-Signature=b587b6a3853962735b66f84608ae01dd51b90c628bbe142dfbbfd42f850598fc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMWJVFDX%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T210238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2Sx4d1%2BDbECVLUO1H%2BCp%2F9BuRsePzKgxIMlCbFOknSwIhANjA%2FlSiS8DTErTerRwN6lqrn9pe8LV6VrUWzS8h74tOKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2NWsC6BaUjekgjU4q3AN5XudVdfGTHE%2BO5bHuZ6IzJ3GvVT63YSvIeBPiTARO7QD%2BXyTYj0flzCcTB8rJjdKnaAU9AxULTjmtGIOoYGVZWeyrZ5VxvcgCZk3PVqbAfJXbDL1Kw2zVFyyiB%2BCGG5nY4bKtw9cbH8%2B%2FbARqyjndWDjwQs8bHcoJk1046e38%2B%2F0TNspZSZLY6JJKs2v1RcPt8wKG%2BKqWSSJECHZOsZ4gAMUmMGduB2huwGMSlBci6j6Hazr%2BkLkhjsQOBCxrR95ZqNFCbJvVp0rUO1cjZOrPY7g1GpjptyLijpXX9XCJQq%2FhEnEyRdBt0QaKTT%2FYffoYDsKenOrU0%2Fuw7flDdpNJv5r78Focpsi2SP2uyIVIw2RY7q620TTLinrreo1DuXa8kTfpDBGxBlntqgtCX69etzXFZrKlQt4dEP%2FbgintrddrpFa%2B9Zp%2BTYVyX2UdIwKDX%2F6X67yebAKHqWh8jt2mDM2RJL5VgS7g2hrZHT3cFtGk4L4rNBEozTzDdsIP8yiAPtIbch8QQ1XvRLKMCKoeMwKpqj6qRODncB6F0FhgMerGGrUvQK27aarwX64AL7eiuspcnjZtfSQmLIJzQH7WMaxndNllGsY2z1zf7%2F%2FgMLLr%2B9hWu8ntywWYwDDnlJK%2BBjqkAYxGuWqwa3fX2NItia0H1hRF3aCJc9sPRU%2Bc40%2B%2FFW6Cv0S2E0DWl5fE5IJjQaknKskP7rKOtpwIvbnxl7YJYX8GilzNqcjVUqayGE2K9POEu7L%2B%2F2cruYCNy2b0jjJTxzB3Vd2xEmDNWVyEZJSup4%2BN9mCIbPXS9sN5hbbcf8LYaBMs19vIZL6QySuRP9yf%2F9eahnbvLVNGHqqwOYabB7XQx5mm&X-Amz-Signature=6dfb0ebb2163a3803859446742b57491a32f1a62b83d6b3292ed2e23dac8e3de&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHT3O2RW%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T210234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd85c4ffp%2BZ%2BpIYjTKUWtoGsaWh2467i3XpyPgP7JFZwIhAP8nHas1OxMD0T18ZXiXz46fYBAeDzOORfvtT6Vv1M7vKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FnFoHNjx4G%2FYxMfAq3ANoxIjHGXiwxb3BLtmMomMqIT84%2BxJpcOEp9sTvzglPdSgUIxhkGATA8Twc2o14Tdt09TnKgEITs7WyovK48u8M5ENaER0JZ3P4eFkJu5eQasqYu30G%2FvQgDcWYpeDW1WDGcGQJjvltLxzOAGSPPkAvBShGhVrLKtxXq%2BwtqvAEy%2FqJVlnnbcDpuSzbsRV1rr3dIhYL80gnPkAWzVukuobScp7wB3DeAgH4y1uZNJAGGPsZNHNzSQn%2F%2F8QWLvk6cauxMQaqpjmIvQb9W7FNvziI5AzzTswMSwBVJB7JniCqROjPwAHIyzyO3JPbKcG6XogLPAIyI4a35JRZkRvnJFXC%2BhikEMq%2FdNgQQ7FAk%2F6zb5SiDP%2BBGXZFL0kG4pIMFvf00L6OZ9J6OymQa%2BS8ZRuiF53EM9umOjiOyMNwK8p4vL2k%2FkN%2BYkUq0mAEV178vHlgCys4rvQOqr63kIa8yKCrB9Z3CGAOIcep1cXNwi3saP0upOFX52u7Hr%2Fh4%2FUoeojkaPQ3Oei5fzl5daioN3Oj9r8uiDpZxwnA2FKZ89YD162SYNmYSiTyIKCxr5f2ZK7wnbxPQHDknJLADL9HLaXRP%2FCy59gDRlDUHjIf9YOq6vqEYtPoX9eqW9ViIjCDlpK%2BBjqkAQgY3fUYaKRnJJo5ntO7oRQFhQLYJ61%2FjOpaPLb25SilOfmgczDPm7HVG6RR85aOgX0y%2FNeK%2Bz9tS%2Bu1I7Ha9H2pIGUetUg82eJGRdeMfG7bHqHk9q0P%2FVeHmB0Pj92P4uvurOpPR20A%2BzE%2BZfxhRy7h%2BVsrqgKhpcffPjX2mpm6WDu6dizQidFpxfPXKWpqjsLVT8YaoPRZ2zJHxKmWRGMabvj%2B&X-Amz-Signature=466a46cc3c94b4129fd1b511a292b159cff79ba45299353caa40dfdac8d36fe8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
