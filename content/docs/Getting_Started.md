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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKZRIXI2%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCdrDHBQUQsW8pEckPVuqH6Dpb78wNSgzZj7rl%2Fk1rtRgIgN7faG1Ej1vBQ6Rnxic75b3jgjxXpxthvmTbDx4SxSXwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDD7PtNS44zKVufz1DCrcA9WF6A9ofPf5QqoBSZU27LqWrHUP9mNxJ25p3S5sKZEq6jhNo41Par1Bca32M6lERqhljq28EyOwdfj3yLkcZniUGT40zFBqY%2FdCYMFMZ3BkX9dk7RJY%2BD%2B3ikTi9AegDIupWxT49BF6hUlphOeidqzl2khi8R2aeq6c5j21x0R%2FAh3QKi7ZDaFYYuxmfMZrkiM4HTTIjZtfKQOk1Wf7gElKMuSF9aCQlKV1ZgIbUKJo8UIbSkUsQADnB3V3hyZrMG871anHADvzYWoK3hp%2FcBmelQsGMu%2FQiCbZRnyGetCadv%2BhzVxuFPyg9fVtOKh%2FhiiGzw3oSGCDvynmZlvbTM4XjyPQ8s90qBJBZJs7Ayl3McnGIPKgayMLQve2nOeBtFA9t0rlBRmXCaXBZdPdKhm8b7JCZUiZh7a5k4TbgFrf273h0LMv9kzWF771FoOP7dOhkHPfFOHRP1x4dV2U0diJb6pWAOg5dGtaA8i9ftnfUfBsxASrr20vPt2VW2weQg%2FfFQXzdIji43%2FSvyRaLiMxk7SwW%2BBNibqF9Ay0cZLqkIAYk6PgqosWJG9ywajHr9bi6Xdduzx3tNyjxu%2FOgw9vQ6g6gbsFpizK8E5v8P%2FbJ031n%2Beb%2Fy50Hu4oMLb8mMEGOqUBUuUeRFfjz2NwvXJvpx6Rqvon6pqkOc9ZAwrP5yiifVO%2Bgx4NHjDW8il865zdsbFIWvNQfmjV6oRSIoswzzRuUS464MK5%2FiDxl1d%2FYUuz41z4jdkjvs7qlZDNPuUF%2Fby%2B0MMmpx1eebEQgM75TVaEKuyoScqqj9leldQz96bx6PHgPLd9yy5Uc8%2FBq7MYYAPHwjYwW%2BFJdrLaVimhdB0NSA0HKQY0&X-Amz-Signature=0fd97ac24574c24b04bdc86e90a00bcc16c5f0b69cfc8414d6db38da76af006a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKZRIXI2%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCdrDHBQUQsW8pEckPVuqH6Dpb78wNSgzZj7rl%2Fk1rtRgIgN7faG1Ej1vBQ6Rnxic75b3jgjxXpxthvmTbDx4SxSXwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDD7PtNS44zKVufz1DCrcA9WF6A9ofPf5QqoBSZU27LqWrHUP9mNxJ25p3S5sKZEq6jhNo41Par1Bca32M6lERqhljq28EyOwdfj3yLkcZniUGT40zFBqY%2FdCYMFMZ3BkX9dk7RJY%2BD%2B3ikTi9AegDIupWxT49BF6hUlphOeidqzl2khi8R2aeq6c5j21x0R%2FAh3QKi7ZDaFYYuxmfMZrkiM4HTTIjZtfKQOk1Wf7gElKMuSF9aCQlKV1ZgIbUKJo8UIbSkUsQADnB3V3hyZrMG871anHADvzYWoK3hp%2FcBmelQsGMu%2FQiCbZRnyGetCadv%2BhzVxuFPyg9fVtOKh%2FhiiGzw3oSGCDvynmZlvbTM4XjyPQ8s90qBJBZJs7Ayl3McnGIPKgayMLQve2nOeBtFA9t0rlBRmXCaXBZdPdKhm8b7JCZUiZh7a5k4TbgFrf273h0LMv9kzWF771FoOP7dOhkHPfFOHRP1x4dV2U0diJb6pWAOg5dGtaA8i9ftnfUfBsxASrr20vPt2VW2weQg%2FfFQXzdIji43%2FSvyRaLiMxk7SwW%2BBNibqF9Ay0cZLqkIAYk6PgqosWJG9ywajHr9bi6Xdduzx3tNyjxu%2FOgw9vQ6g6gbsFpizK8E5v8P%2FbJ031n%2Beb%2Fy50Hu4oMLb8mMEGOqUBUuUeRFfjz2NwvXJvpx6Rqvon6pqkOc9ZAwrP5yiifVO%2Bgx4NHjDW8il865zdsbFIWvNQfmjV6oRSIoswzzRuUS464MK5%2FiDxl1d%2FYUuz41z4jdkjvs7qlZDNPuUF%2Fby%2B0MMmpx1eebEQgM75TVaEKuyoScqqj9leldQz96bx6PHgPLd9yy5Uc8%2FBq7MYYAPHwjYwW%2BFJdrLaVimhdB0NSA0HKQY0&X-Amz-Signature=1fed4bdc1cc5b38c8536eced8a364347633df054218a0f4930b79a3959c050ab&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKZRIXI2%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCdrDHBQUQsW8pEckPVuqH6Dpb78wNSgzZj7rl%2Fk1rtRgIgN7faG1Ej1vBQ6Rnxic75b3jgjxXpxthvmTbDx4SxSXwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDD7PtNS44zKVufz1DCrcA9WF6A9ofPf5QqoBSZU27LqWrHUP9mNxJ25p3S5sKZEq6jhNo41Par1Bca32M6lERqhljq28EyOwdfj3yLkcZniUGT40zFBqY%2FdCYMFMZ3BkX9dk7RJY%2BD%2B3ikTi9AegDIupWxT49BF6hUlphOeidqzl2khi8R2aeq6c5j21x0R%2FAh3QKi7ZDaFYYuxmfMZrkiM4HTTIjZtfKQOk1Wf7gElKMuSF9aCQlKV1ZgIbUKJo8UIbSkUsQADnB3V3hyZrMG871anHADvzYWoK3hp%2FcBmelQsGMu%2FQiCbZRnyGetCadv%2BhzVxuFPyg9fVtOKh%2FhiiGzw3oSGCDvynmZlvbTM4XjyPQ8s90qBJBZJs7Ayl3McnGIPKgayMLQve2nOeBtFA9t0rlBRmXCaXBZdPdKhm8b7JCZUiZh7a5k4TbgFrf273h0LMv9kzWF771FoOP7dOhkHPfFOHRP1x4dV2U0diJb6pWAOg5dGtaA8i9ftnfUfBsxASrr20vPt2VW2weQg%2FfFQXzdIji43%2FSvyRaLiMxk7SwW%2BBNibqF9Ay0cZLqkIAYk6PgqosWJG9ywajHr9bi6Xdduzx3tNyjxu%2FOgw9vQ6g6gbsFpizK8E5v8P%2FbJ031n%2Beb%2Fy50Hu4oMLb8mMEGOqUBUuUeRFfjz2NwvXJvpx6Rqvon6pqkOc9ZAwrP5yiifVO%2Bgx4NHjDW8il865zdsbFIWvNQfmjV6oRSIoswzzRuUS464MK5%2FiDxl1d%2FYUuz41z4jdkjvs7qlZDNPuUF%2Fby%2B0MMmpx1eebEQgM75TVaEKuyoScqqj9leldQz96bx6PHgPLd9yy5Uc8%2FBq7MYYAPHwjYwW%2BFJdrLaVimhdB0NSA0HKQY0&X-Amz-Signature=bee4768de9988eeacb0ba00efcfe1cead32a86f9777f3a3e286da102f9d324e6&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q33Q6TBQ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCID9KmUhG%2FJ2j6ugO0JPAr6hG8srPnFNbBIMkQ8BZz2j9AiAirsGSvn6cwhAEnTF6bb2XWpMnjRN92qU%2FAgvzB1STqyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMiOn5LJ6ifPxP8gKmKtwDjnClr%2FJGljVQJWUVRGSez5jm2kmLqAN2vvnXyH8D2aeemLK0EzGgiQpGeGCMuo2DSqOZqn3MVeRGziomQwS6Eeyiefb46ONC7L4iV5Bm%2BRrgAnRgb09R2JUcaX0Ms%2BW5CuE%2B%2F0l1rvhmaA9KqCqsAEyMRfgXi8iugrVmlKHN1%2Fobdr278aBgQAqgxRlurXcEWVOiDCXWDNuqbxA%2FjRTYNR8PuejJBREbFaw8vHoYBQ4Kr6%2F0xGwDA70lv112z5%2FjPjIFNPw5f%2BLqtsI39UNylFBiFeW2%2BwcAXWOAQkIi7AJ%2BIbqWKfJa6kCldIbPI%2FXopcawSoVePhtFFP8H1mThA%2BrhrX5RJuHBDm2CdqnqGxOD4GEoZs1RqnCE1s8ZfdV9gw%2FVWESq1eaDryMlkGR3njnoOAxaXtzqWWK1qeMi9SrPF9XPPu16ffoVf8OS4tYBQrtIg90y%2FaoIBADgqV9BWfiVVId8WgbS7UjHIKHfd8ZYdzXqiIfUIR7XKwZoxul%2B00tr9DL%2BVM9LRQlQZhnn6D%2Bg08gDtW5xF7uMYkjwgmGS7G%2BTazuGq08Rijco7J4LaEI9pWMh98Dx5rL5AdFnpHpRGcPnve0Ul81ALMBiCZBbSiX5x0n7XvzfElMwm6eZwQY6pgHN2mbMVV7Gom02f9nvXjLZhEfTJCXxBvm1bOeD7BFO%2BZHAj18l2Pno%2BI6P4tSZwbs60mBBV5hYH%2FUhouUFG%2F8AzVqsHpBR2zFhtmtsSlaUgNZn%2Bze2vO%2BOL319%2FatJ4830xQtWZkxQu3LKvOn2Krr%2FUqV3NFM%2FHuS31PoFE62YC25zGOKVO%2BGyTUGuXaJeh%2F1eEJXLzj%2FzoUWmPfNKLLh8OF7Tcq2D&X-Amz-Signature=29728cd33ec05f5cdcfff65cb7004b2c78ddbc46aa6dddafe68cb254262d68b9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAEDRX44%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCG7SSMlMIiSW1TpxhnbL3%2Bi54VP0EeiAjJ2PPC3LE7UAIgSpmdPJTl8wONhA7AJPEQ5WoNmEerD3SU%2BinCZeukN1sq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDHXrN0b5F%2Bk05sMu8ircAz6qoRL6D4rC30mVjBli0R9oODAoE196v%2Fwu4sYDat%2FTtdnJ8KlPI7wCHZYGKVPx4TS5zFsBGMWlWje63POre2mbMW2ZRECBaiknYyFsphOcJsUwMuGzuS7uUCECfWysyzlqUJ%2FsaFEI4pfewvm1AfiAzmzvXMN7xB3ONd7fgLK0zoVdIn3kGwewQEAeDOgVA1E788w4%2FhqrMnPfoWyeU4Wp9o6FKmwrQi2zH53U11uYfBRdvEr3aE3XxnGkChPGkc8TE4PW6eM5oLIRorSdJcgN7DCO0IsnjZFxeIFgVZUGg%2FUNazXZl5zGJz0%2F117edTDIZA841JJ6MEjTQ3e46iA8BbBPbaSBCJcRSeIkXTYO6VCsZirwBHry0sUlrsDQUOMuTCXhnDGQ6JcxGseqWpWr2kCFybq7QKWzY0BWBdnP2bE9eBcYC1NbBgSyHW9Pahz5dbg5LLcDL5iwaATqGRkhqI%2BgsO2tGCqA43M77BjyVBXC6o1rX7ohXqMgJ9i7pPeS27f0szbEP7hx1ov%2Fmtx9RHJcMwT49qeOs7JuKCqqrA33BYQbNNtKIE79LjGuz8W%2Fx3nZA2C4FNt1nEKr9Lm2AAnT7SVHw6GTDD%2FC1WYONK0Je35n7ytQCRmMMKf8mMEGOqUBJW0cL8Y0IADJ0tTBOfQCUi%2BZ2glCc1KQhxqBw5M3iiLz%2BNBXROdEHvysHSfVzqMCUWNgA9T%2B%2B%2Bip2j8LwlCbqFFNUMhzsHm6%2B5N8eQPDuBuXTH%2BeoJ2N84qBt6etKNWeT6jfX8Qa51A0gUC9UZ17svMRjnVKTQpOfSp3SAbohdJbBPNrO6YfkVUfFjK8PbvluwMOfPkdQh2DGXA9IxzIibXJSmQe&X-Amz-Signature=d698cc283476d336a5151886c7f4dddafeedef331866d532d2a3e2bf18b244a6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKZRIXI2%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCdrDHBQUQsW8pEckPVuqH6Dpb78wNSgzZj7rl%2Fk1rtRgIgN7faG1Ej1vBQ6Rnxic75b3jgjxXpxthvmTbDx4SxSXwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDD7PtNS44zKVufz1DCrcA9WF6A9ofPf5QqoBSZU27LqWrHUP9mNxJ25p3S5sKZEq6jhNo41Par1Bca32M6lERqhljq28EyOwdfj3yLkcZniUGT40zFBqY%2FdCYMFMZ3BkX9dk7RJY%2BD%2B3ikTi9AegDIupWxT49BF6hUlphOeidqzl2khi8R2aeq6c5j21x0R%2FAh3QKi7ZDaFYYuxmfMZrkiM4HTTIjZtfKQOk1Wf7gElKMuSF9aCQlKV1ZgIbUKJo8UIbSkUsQADnB3V3hyZrMG871anHADvzYWoK3hp%2FcBmelQsGMu%2FQiCbZRnyGetCadv%2BhzVxuFPyg9fVtOKh%2FhiiGzw3oSGCDvynmZlvbTM4XjyPQ8s90qBJBZJs7Ayl3McnGIPKgayMLQve2nOeBtFA9t0rlBRmXCaXBZdPdKhm8b7JCZUiZh7a5k4TbgFrf273h0LMv9kzWF771FoOP7dOhkHPfFOHRP1x4dV2U0diJb6pWAOg5dGtaA8i9ftnfUfBsxASrr20vPt2VW2weQg%2FfFQXzdIji43%2FSvyRaLiMxk7SwW%2BBNibqF9Ay0cZLqkIAYk6PgqosWJG9ywajHr9bi6Xdduzx3tNyjxu%2FOgw9vQ6g6gbsFpizK8E5v8P%2FbJ031n%2Beb%2Fy50Hu4oMLb8mMEGOqUBUuUeRFfjz2NwvXJvpx6Rqvon6pqkOc9ZAwrP5yiifVO%2Bgx4NHjDW8il865zdsbFIWvNQfmjV6oRSIoswzzRuUS464MK5%2FiDxl1d%2FYUuz41z4jdkjvs7qlZDNPuUF%2Fby%2B0MMmpx1eebEQgM75TVaEKuyoScqqj9leldQz96bx6PHgPLd9yy5Uc8%2FBq7MYYAPHwjYwW%2BFJdrLaVimhdB0NSA0HKQY0&X-Amz-Signature=8b65faad112c39aea1b36dd987cb2771b766aa1d8be6ae72f90db5998795d6e5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
