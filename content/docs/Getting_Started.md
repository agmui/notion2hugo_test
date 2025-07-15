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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DK5I7VC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T071257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIHzkqQ41JBTIIAH9O5%2BKUK9Q41nEGhRipS9Flml6dZlEAiEAqIarqvfIf%2FjxLFAPPdQX4AZVC9yjv7%2FmubvabfF6mr0q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDKxKyKymRfT%2FVNPufCrcAy6wFXCOx%2FNnXDQD%2BS1381SvSmW6OpI5Xb727U2PGBjeGYv7hzvvTFfgVTSNBGj093csODQnQP4WzqqN%2FdJP265veei1NJDH8BAAQGb7%2Boz4xSpmodOGGk6Z0aci4quWv3Ktw9cP7GXdf69XPMB6m5dV6AZgtJdQ8pBFJP9Nlk8wh2XPRfUe71%2BNfZpdQjor5rYtpDiuGmc7sRdbm103o1hI6Actb4BbqrFOvMKwT9Cz5ASKx6N1bJTvxWSMW%2F6j9pn0Oh3AaRXjK2NQepY%2Bkjv3DHH%2FNzrxRnyUjjt0Uz5mDEq3WWJwmgEJRmUgt1oG3YjjdFTmgnZMMTzqiqnky99P17m97pK7tVjG3m8tdGDYxMQ2C%2FpafCXUYSFIyPVSqFPu0CoiS%2BndmCvB8vBBHj4eNRvJakxz91B9Ls9uCh69fDwjN5lzVk0%2FcZdnxBbkiw0Rmc4zA5bBaV4dyChAsxYJyrRTBooyUlcjX2uMWqsLsxj9svj0E8kjdA%2FWbqZr4I5yV7RztOpDR6z3Whnpbf8QKZ3vft%2FXXlFATmA9sVzic36DbNww9S%2BY%2FFeqXPyyHMLZu2EhEhozL%2B5xnXYbUPCjjSbkgAyM0b%2FjgEIIGHs8yYcUu712MEyW9xxnMKDV18MGOqUBKp%2FbSjFTBSGPGmiVz5sHoHKsh8l8O48JH1zpNkbG%2BmPWB7NDbJ2kKNyQXGcFvCxQ65m3pSaqA5PRoI2RunK8VAQL65WvdrrF7JY%2Ft%2FFV3IgBhyzue1%2BdKqRbCFTrmvNQz%2ByUjH%2F33nevBot603Qs1cKs%2FljMGLsP7Wsd5vYuGwrP9AVvXQuOu7P7JVPTuxe53dpHIweRqDcxov5TrhbDyqz9%2BuTe&X-Amz-Signature=4903e42719a8a4edc4b1ca38b499d2e1f6a98db601f4e848edf40d4ddb417e6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DK5I7VC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T071257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIHzkqQ41JBTIIAH9O5%2BKUK9Q41nEGhRipS9Flml6dZlEAiEAqIarqvfIf%2FjxLFAPPdQX4AZVC9yjv7%2FmubvabfF6mr0q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDKxKyKymRfT%2FVNPufCrcAy6wFXCOx%2FNnXDQD%2BS1381SvSmW6OpI5Xb727U2PGBjeGYv7hzvvTFfgVTSNBGj093csODQnQP4WzqqN%2FdJP265veei1NJDH8BAAQGb7%2Boz4xSpmodOGGk6Z0aci4quWv3Ktw9cP7GXdf69XPMB6m5dV6AZgtJdQ8pBFJP9Nlk8wh2XPRfUe71%2BNfZpdQjor5rYtpDiuGmc7sRdbm103o1hI6Actb4BbqrFOvMKwT9Cz5ASKx6N1bJTvxWSMW%2F6j9pn0Oh3AaRXjK2NQepY%2Bkjv3DHH%2FNzrxRnyUjjt0Uz5mDEq3WWJwmgEJRmUgt1oG3YjjdFTmgnZMMTzqiqnky99P17m97pK7tVjG3m8tdGDYxMQ2C%2FpafCXUYSFIyPVSqFPu0CoiS%2BndmCvB8vBBHj4eNRvJakxz91B9Ls9uCh69fDwjN5lzVk0%2FcZdnxBbkiw0Rmc4zA5bBaV4dyChAsxYJyrRTBooyUlcjX2uMWqsLsxj9svj0E8kjdA%2FWbqZr4I5yV7RztOpDR6z3Whnpbf8QKZ3vft%2FXXlFATmA9sVzic36DbNww9S%2BY%2FFeqXPyyHMLZu2EhEhozL%2B5xnXYbUPCjjSbkgAyM0b%2FjgEIIGHs8yYcUu712MEyW9xxnMKDV18MGOqUBKp%2FbSjFTBSGPGmiVz5sHoHKsh8l8O48JH1zpNkbG%2BmPWB7NDbJ2kKNyQXGcFvCxQ65m3pSaqA5PRoI2RunK8VAQL65WvdrrF7JY%2Ft%2FFV3IgBhyzue1%2BdKqRbCFTrmvNQz%2ByUjH%2F33nevBot603Qs1cKs%2FljMGLsP7Wsd5vYuGwrP9AVvXQuOu7P7JVPTuxe53dpHIweRqDcxov5TrhbDyqz9%2BuTe&X-Amz-Signature=2a7ed716d3565249c54c910bc55b20305ca0ad0c009777bc9985988b065e7529&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DK5I7VC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T071257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIHzkqQ41JBTIIAH9O5%2BKUK9Q41nEGhRipS9Flml6dZlEAiEAqIarqvfIf%2FjxLFAPPdQX4AZVC9yjv7%2FmubvabfF6mr0q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDKxKyKymRfT%2FVNPufCrcAy6wFXCOx%2FNnXDQD%2BS1381SvSmW6OpI5Xb727U2PGBjeGYv7hzvvTFfgVTSNBGj093csODQnQP4WzqqN%2FdJP265veei1NJDH8BAAQGb7%2Boz4xSpmodOGGk6Z0aci4quWv3Ktw9cP7GXdf69XPMB6m5dV6AZgtJdQ8pBFJP9Nlk8wh2XPRfUe71%2BNfZpdQjor5rYtpDiuGmc7sRdbm103o1hI6Actb4BbqrFOvMKwT9Cz5ASKx6N1bJTvxWSMW%2F6j9pn0Oh3AaRXjK2NQepY%2Bkjv3DHH%2FNzrxRnyUjjt0Uz5mDEq3WWJwmgEJRmUgt1oG3YjjdFTmgnZMMTzqiqnky99P17m97pK7tVjG3m8tdGDYxMQ2C%2FpafCXUYSFIyPVSqFPu0CoiS%2BndmCvB8vBBHj4eNRvJakxz91B9Ls9uCh69fDwjN5lzVk0%2FcZdnxBbkiw0Rmc4zA5bBaV4dyChAsxYJyrRTBooyUlcjX2uMWqsLsxj9svj0E8kjdA%2FWbqZr4I5yV7RztOpDR6z3Whnpbf8QKZ3vft%2FXXlFATmA9sVzic36DbNww9S%2BY%2FFeqXPyyHMLZu2EhEhozL%2B5xnXYbUPCjjSbkgAyM0b%2FjgEIIGHs8yYcUu712MEyW9xxnMKDV18MGOqUBKp%2FbSjFTBSGPGmiVz5sHoHKsh8l8O48JH1zpNkbG%2BmPWB7NDbJ2kKNyQXGcFvCxQ65m3pSaqA5PRoI2RunK8VAQL65WvdrrF7JY%2Ft%2FFV3IgBhyzue1%2BdKqRbCFTrmvNQz%2ByUjH%2F33nevBot603Qs1cKs%2FljMGLsP7Wsd5vYuGwrP9AVvXQuOu7P7JVPTuxe53dpHIweRqDcxov5TrhbDyqz9%2BuTe&X-Amz-Signature=bed0e4314c7b0e9ed01ce6028b1d69db4f451845b9a02d9a9b5ba0c27db0abfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CAZBTXI%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T071301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIAx8tETHb74hggcFxysFwHGT9fCBZspVSIylETOmkP8oAiEA9GDJW12mRQ2E%2Bh5995cxyWF%2B8X4TUlfBIFY%2BtVE%2F7IIq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDBjksGJAflSYWLNEsCrcA2lLbeOdYV%2FA65x0%2BpYLEVYGjifC1WaBCwLhVfpzpbvqgLJrACZnlj2ZcoRhEW15HylRSgFXSRsU4NdZmIwSs%2Bi%2B7g%2FLkqymYQ%2BJaKwKGtrPA5jMekLEndJ8ob914ytgnLlevhIZYWlZXKsS22CLIDfzYiKZ0YctgdZjNGkyFkScabMA1NtEo6P95meuWGkSfS62bT36Mt%2FVeLN6PM%2BUIu8DRHVS2aCvh7F1pYRx0GUVP2RSX6wl2DoIVHI2EzJJr4ijGdX%2BHkocUSDjXVsJ6efuF5bwj9V%2FZQiCae%2F63zCJ4hNzw9PY4j%2BT4KGJHEjJKoxKRIZPhlIYtQ1tepphRNuwcODGNrZQRHMnegYQCqaG8%2BwdahZhybdF7MGSbZL8jdl%2BTL7ZtMXdCCpEauy6PUSXjwGW9XslCV0WZZfMwXddaUOVyB9cc8DcaCy%2FBUBc5pFGHx42g8adxvraQ4MhrK%2FRq4YHCHH2fbtvzsQGKRJ%2BeVcFtIi9dv3lsEyLL9GiD3WiutqNjLpC6NzypZNsAAjKZyMPAxN9zVg2%2Fu0t7XZlOsIAkXNe8fz%2BRTrlNUt1AiqT7sP8Hnn2iiXJGfoh7F1cIDF%2FJd%2BHkAJugzYNENcGTWmzHY%2Fui4XdfULsMJ7U18MGOqUBGjiB4zkh4nA2hpBMhunjZwO8vnx2%2BwfrWlq35dl0W7AAesWkUuux%2Bp%2FT3kxYswC5q6IUTuIV8Oq%2BhimT8CO8PBXmdDAK96P1myJJq5fr%2BWsgAby%2FMtf%2FsNVsB7ZXDBjtj8XVKO15m0GbrQ3uv%2BSWoUxEEpAgBmYYBkcsumrhb8yQT45hIYw8QJ4kGy1hDNE%2FfODGZAf%2BdITwGaqgCShclYVFrSPn&X-Amz-Signature=eeec099b4de8e4ee42e4311dd557e54c8dc9a4abee8df7ed3d7d0658a2a4620a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMME7WC2%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T071303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCID5zoXMG%2FDZzHlLHLMp8zWjvrpuCYT52in%2BTO9M32%2BuSAiEAkXJPzMM1ME%2BWLwdYBPX03byeHUXYAB1b00mG%2FbqekmUq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDM6qXrT8m6VyjrIb1CrcA6wuzso8OX0GUge9mM0bVmm4brStwQmVeARBRjhaU0hzV%2F%2BNB6xdAC6llAgP%2BeKhyI2kIcx6t2jDJGPGV%2BC2pSRjyNKVtDvJtqwLeTMFRA3gLXVehKEshcUKbi%2F%2FYG8LTWgsOX2FPSsO%2B9FMWVBsGVUUymcEh7aG7B9X0rwZPd0qbLLtLlng%2F%2BcYcZ8XBEbxgfVcfU2R%2BaOVARV0XPUt81fSCNz0NctDHwruJAoNowXpndGxrxzk9NTU6V03Apa6d9p8Q5jsOeIneFbENtoDqrGhC6ZbAXCIzfU60pXsgd%2Ftdb8YaHQF7jBnYGg3lMiopP6ZtfNoOwlxZyHfeX0uXaLgF%2BZZXFyg%2FFb%2B5SyAwVG7dgs8jS8oh%2FemWwOX4GjxiHzszLXfmtOetOPp7LyRD%2FMMWfc3YU4lMzPYitMwcUFwP13jUIGJsYk1cgnaaq9A6abdER7T80VQ99xfND%2BGkbhAYwe2dVKZmh6lYOxiRpcrL30UJgRnQQD%2BnMJd7C%2FcljDsd7Dm0lGocmrUaggXCtmocPM5wmgy0OR8xflQLDTC4D788VYV7%2FnzaWGyNeGEszudkuerHB%2Bluuz5%2BTpsdAYBbn%2FWp5zU%2BABtelwXRBS9dqqz7m0qS5ROLeUTMJTU18MGOqUBypvqJJTtj1AUOuqx7yAzq1XB9U1hbsd3xi8GpE3Qs2pmBXNjuLTBA4cFtty3NJmUvPxmTrdJfhuutxmce5Rj2HnTYckeMCAeMt%2FGQZ0edphxTm3rcwyrbCxeE%2FXR%2B7Aa8vKmlyV42GefCqoK7txb7%2FTbAQe0%2BQKmsFD3sra1xwbFiZ02tnByA%2BOAoenVeesbwSFzdOH5Vu1DY7mtsTuCLBimCvfj&X-Amz-Signature=fe7d50f4b92342ee70beccdd2621be733833f3a3b0c4a538c79237b69961653e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DK5I7VC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T071257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIHzkqQ41JBTIIAH9O5%2BKUK9Q41nEGhRipS9Flml6dZlEAiEAqIarqvfIf%2FjxLFAPPdQX4AZVC9yjv7%2FmubvabfF6mr0q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDKxKyKymRfT%2FVNPufCrcAy6wFXCOx%2FNnXDQD%2BS1381SvSmW6OpI5Xb727U2PGBjeGYv7hzvvTFfgVTSNBGj093csODQnQP4WzqqN%2FdJP265veei1NJDH8BAAQGb7%2Boz4xSpmodOGGk6Z0aci4quWv3Ktw9cP7GXdf69XPMB6m5dV6AZgtJdQ8pBFJP9Nlk8wh2XPRfUe71%2BNfZpdQjor5rYtpDiuGmc7sRdbm103o1hI6Actb4BbqrFOvMKwT9Cz5ASKx6N1bJTvxWSMW%2F6j9pn0Oh3AaRXjK2NQepY%2Bkjv3DHH%2FNzrxRnyUjjt0Uz5mDEq3WWJwmgEJRmUgt1oG3YjjdFTmgnZMMTzqiqnky99P17m97pK7tVjG3m8tdGDYxMQ2C%2FpafCXUYSFIyPVSqFPu0CoiS%2BndmCvB8vBBHj4eNRvJakxz91B9Ls9uCh69fDwjN5lzVk0%2FcZdnxBbkiw0Rmc4zA5bBaV4dyChAsxYJyrRTBooyUlcjX2uMWqsLsxj9svj0E8kjdA%2FWbqZr4I5yV7RztOpDR6z3Whnpbf8QKZ3vft%2FXXlFATmA9sVzic36DbNww9S%2BY%2FFeqXPyyHMLZu2EhEhozL%2B5xnXYbUPCjjSbkgAyM0b%2FjgEIIGHs8yYcUu712MEyW9xxnMKDV18MGOqUBKp%2FbSjFTBSGPGmiVz5sHoHKsh8l8O48JH1zpNkbG%2BmPWB7NDbJ2kKNyQXGcFvCxQ65m3pSaqA5PRoI2RunK8VAQL65WvdrrF7JY%2Ft%2FFV3IgBhyzue1%2BdKqRbCFTrmvNQz%2ByUjH%2F33nevBot603Qs1cKs%2FljMGLsP7Wsd5vYuGwrP9AVvXQuOu7P7JVPTuxe53dpHIweRqDcxov5TrhbDyqz9%2BuTe&X-Amz-Signature=87c5c55ff4f5be54a192375d0fb170eb7457042870cbaa88e84f3317f1dffab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
