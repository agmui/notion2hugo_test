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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UGWLWQ4%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T131516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyq2UfdQelaqYlbzK%2FUlJ%2B1B8egjguQyNU5C1cLVw%2F5QIgStbg%2FIMPWSezmzqk%2B3cvNIh64glhOw4RseCbaUYL0HkqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPgt3DX5cqUwnqbexSrcAwt5AECrsbtiCfW26WA%2FN55uQtX4ekKTYUEhDOHb8dLV7LXLAh1lbAziiYoT9e%2FMoDKLfuFBjraDj%2B9vquLlckl5NHIul%2BrzDqzsEmGc37druwAi1R0LScbPFLKKoE8Q%2BP3X%2F5tc6UHvLs82B00Nucfz3%2BFjGKzcbiroKV8SWKjoIdTZQZKmtQjYugDaj0CzENFG5Yj1A5VDx4HeugJ%2FpoQSEsfByik5D7dePDRJnpFZxCgv7TS6i9fc%2FnCj%2ByXNy75XA%2BV%2FHmLMc2WrGKjov69S3k0yXYgllVTuJw3Zcly562FFAetI0ddXdht9clQ0%2FcGKn6YKvfdWd9XAU5keprwBeF3Hx0yyd5HjW%2FyhvZR3BqnZJIrbs%2FmoGdyfaRQNrKabH36HP2zukjnWw3UnHq6JyJh5Q5rVMgbZU422ZDoCrc%2FEvS27VwBRq11%2FGTSabhpy%2FzJnzwqrW8b4nmLZnYhDkI65ga4KczeBc1r7bE%2FKfJg99GGeyyxon%2FEpQvbHdvfZmTBhLAJDBonBcefi0%2FJCS4W7ziOdJP993mc00Lrx8JhjSbp6pIYtcKhyz71hoaxKOWt6D90T4cLYPvbpGv3byaL%2B%2BgBP3feQGe%2BNWHGO0HZfYhQHP6UVJptxMJuysr0GOqUB2MAZ3H9J1dgUP8yVKNRztA1dj01NArXm47TUT598PsjVTSR4s0g25nkGqfP0h08ADjQxjLkoioMNR%2BK96c%2F1EhtBa5IGNRlIEpTNrSx01XFej5oo89kJ8LYtXUVtwIK%2F05m3pTjxSE58zof7q6AK90J81OV4%2BFZWUio6XZCJJxMnh6%2FNxUaziTqwq4OhTPq2j9MN385Cm0PF6%2Fv9yHeAKCwYPzeU&X-Amz-Signature=d765f7077252d65acfab6847cda154ff10b8e99f7ee0a6fe8bca7a3d415c475d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UGWLWQ4%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T131516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyq2UfdQelaqYlbzK%2FUlJ%2B1B8egjguQyNU5C1cLVw%2F5QIgStbg%2FIMPWSezmzqk%2B3cvNIh64glhOw4RseCbaUYL0HkqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPgt3DX5cqUwnqbexSrcAwt5AECrsbtiCfW26WA%2FN55uQtX4ekKTYUEhDOHb8dLV7LXLAh1lbAziiYoT9e%2FMoDKLfuFBjraDj%2B9vquLlckl5NHIul%2BrzDqzsEmGc37druwAi1R0LScbPFLKKoE8Q%2BP3X%2F5tc6UHvLs82B00Nucfz3%2BFjGKzcbiroKV8SWKjoIdTZQZKmtQjYugDaj0CzENFG5Yj1A5VDx4HeugJ%2FpoQSEsfByik5D7dePDRJnpFZxCgv7TS6i9fc%2FnCj%2ByXNy75XA%2BV%2FHmLMc2WrGKjov69S3k0yXYgllVTuJw3Zcly562FFAetI0ddXdht9clQ0%2FcGKn6YKvfdWd9XAU5keprwBeF3Hx0yyd5HjW%2FyhvZR3BqnZJIrbs%2FmoGdyfaRQNrKabH36HP2zukjnWw3UnHq6JyJh5Q5rVMgbZU422ZDoCrc%2FEvS27VwBRq11%2FGTSabhpy%2FzJnzwqrW8b4nmLZnYhDkI65ga4KczeBc1r7bE%2FKfJg99GGeyyxon%2FEpQvbHdvfZmTBhLAJDBonBcefi0%2FJCS4W7ziOdJP993mc00Lrx8JhjSbp6pIYtcKhyz71hoaxKOWt6D90T4cLYPvbpGv3byaL%2B%2BgBP3feQGe%2BNWHGO0HZfYhQHP6UVJptxMJuysr0GOqUB2MAZ3H9J1dgUP8yVKNRztA1dj01NArXm47TUT598PsjVTSR4s0g25nkGqfP0h08ADjQxjLkoioMNR%2BK96c%2F1EhtBa5IGNRlIEpTNrSx01XFej5oo89kJ8LYtXUVtwIK%2F05m3pTjxSE58zof7q6AK90J81OV4%2BFZWUio6XZCJJxMnh6%2FNxUaziTqwq4OhTPq2j9MN385Cm0PF6%2Fv9yHeAKCwYPzeU&X-Amz-Signature=2b8832da9a30f21c99649304debb776bdcf741cfe76292f244808dd42beefd89&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMYXPAU2%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T131519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Fsd1Dge62T6owyTgyXKEpbZ4pZQCOTgLkeCzlMfh0LwIhAJibq3rSJcMfWw7RGIboUKk3A%2F%2BAtA%2BiTH2Un2Kzh4%2ByKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIKW34cwwDcZfXKIoq3AP1YE7VzuZV6yph3RNIrNzWv%2F01DBoPCSs6dX6LGIK0JXk%2F3F1TkRmC3rXz6E18RPZegFaDzDAdkL7ipTL7w0Eucfkgd1o3gaHrf5kpuMgz8MY9KpD%2Fn9k%2BtVD6ElIxbzzZ2M0RZ6abhFamG5bKO2nvqeKGowP6dgvRunjFOtiYL8O3szILsLdSZs%2FwEftRr0m9GnBGes8PQaDT1IPgRj%2FbYhhEvhZQWpFgzzkZrOwOJAGb81CZ8a%2B0GCjWkj3DXhk543ipflh3f97y46BOjbohjqqH92uJm%2FGobQlDW%2FyiJk4cSPaHXrYs0QWe9GpGk7OKDxgIofat65BdGcdFwDCylZTSLwNdAsHR8pdzYb6E55KGoEIKVI54HAx5JeKdb51sfro8RKJCuTcIiTAyR3w8fRCl4bdoflX9b4keXBBmWFpbypGlAafheiIdkgpLeakpDd1e23rwXSAhjxZiTp6GpxYJRm9JuHLR3kUeO6oU4Nobo5Ku0fOJpg7NDI780GHBS6qjrsut7hV9CbE9IVm2ClzpX%2BOKLocWA2W8Ke9AR4SeKblts3LGBxPk20a28a418xD%2Fa%2Bk5oWr2l0CiViJXP3t7X56KGWK8hiLm8BGiVshIIQS3%2Ba%2FS1FlA2DDnrLK9BjqkAUyuQBBJivqJPRTP3YemIDQVIYIe%2BXOfb2lipfYsXEB72iCZWs98X7IrDHTXuI5ml4Hz%2BeJKZrAv0rdOzSg4pnX1ZeEHgYnIUowrtPYV9GoVk%2BfwZrjB7lmZqMw3MFO%2FfQ6PJ53oOaQ5XeAREMcr5EE6Unpbbd8WEo8oJlLDGUZ5TOPwq3q3eJoFuhfscsWH3OG11iSOCd4VESO1XKHpO7%2BhyRYP&X-Amz-Signature=438e91979c68e6972a99b8188b3929e43e772351513157de3f97d5d07d99954b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FA7SGX6%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T131519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FxCAmNG%2FiN94XUCsdjTy%2Fhy7Ol28b6RnUD4S19eADkAiEA5EVV2%2BlhNluSmLpjrVZNq3njknCub48hWgKN6H8VVKMqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFctX9TyQKwh%2BasuCircA9sPa0NGHvqzqMSTehfkZtU9kA3Yvnib5Vg9Qkk%2Bd5QelvEh7e%2BR%2BbVpbuKDVFK2HzAPHMWsDtPqIWWLwe6RMZRotQE6eNFSHZz8z1niPTotlxXglj8ZBq3wgA3QdE6fery6rP8R80g7d78ssuBu2%2FKVWmKk73FExOsWiBvX%2F2qqrajkL9BWOH6EiIM2e8Kjp4IfvCJZRkLV7gUibAY0WPB6cJMG2Sz8ZLKVaHgJMrK9yuePV6Phr4zh5iPvLJtlZcFfyoWuFr0vUfO3yzRbAB4uPyb3uLLErovBb5ZTXWQIelDE%2FqNrUMXrCuC%2F7dPqwsCEC4BLE3JOgPbvUqeXu7vJ%2Fwm97jqErheXDH4yjvLQlLIKtVvcrq6J1wN7OVdmfDN%2BEE7kNXuMuCkEyXGUUOXvNncRXKth6ZkRQgltTjiu27OBRuKMUizuPoJ6ngmSqXDG60c0ZDtlq8MyhiH6VdWjsR4E8ZgAde7EI1psQkdQASF2BLkbhcIg7qiYiLWyscmvR5QpEC3dAO0Q9BrXXYvbi0%2FG642oE34IbBOAIeB%2BSnRcOADDPgM2tOa9t1RqQwVjvLQWiCVtvo4ueMx7F0G7qb6zh4uyxpHIvnc1dNjEdL1PmyCADhWsf86xMLC3sr0GOqUBtsNDcIiUz4XQZOmm6DQALQyBU7FdJxj8lHBb9q3iE0g7m6LT3ULS%2FOBmiFwIh10IMcZEgEESG8Tu1zccq66tb0twY2BzEtKYxjSr1DjMXyL6%2FDmXPmmy1c%2BlGcdDlXR0BJRlVcAe8DUMcaMBbORPMGsBa%2FLBTTlIk0dPiv5jHbx0I998PMIYP8OQG6vSVvihtwoirSnd%2BYMFXzr2l3SK52WT35CQ&X-Amz-Signature=7efa3ca52332d7f0cb730845387ef5d46a458d3a61fb6254bfad7a1b73617eb7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UGWLWQ4%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T131516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyq2UfdQelaqYlbzK%2FUlJ%2B1B8egjguQyNU5C1cLVw%2F5QIgStbg%2FIMPWSezmzqk%2B3cvNIh64glhOw4RseCbaUYL0HkqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPgt3DX5cqUwnqbexSrcAwt5AECrsbtiCfW26WA%2FN55uQtX4ekKTYUEhDOHb8dLV7LXLAh1lbAziiYoT9e%2FMoDKLfuFBjraDj%2B9vquLlckl5NHIul%2BrzDqzsEmGc37druwAi1R0LScbPFLKKoE8Q%2BP3X%2F5tc6UHvLs82B00Nucfz3%2BFjGKzcbiroKV8SWKjoIdTZQZKmtQjYugDaj0CzENFG5Yj1A5VDx4HeugJ%2FpoQSEsfByik5D7dePDRJnpFZxCgv7TS6i9fc%2FnCj%2ByXNy75XA%2BV%2FHmLMc2WrGKjov69S3k0yXYgllVTuJw3Zcly562FFAetI0ddXdht9clQ0%2FcGKn6YKvfdWd9XAU5keprwBeF3Hx0yyd5HjW%2FyhvZR3BqnZJIrbs%2FmoGdyfaRQNrKabH36HP2zukjnWw3UnHq6JyJh5Q5rVMgbZU422ZDoCrc%2FEvS27VwBRq11%2FGTSabhpy%2FzJnzwqrW8b4nmLZnYhDkI65ga4KczeBc1r7bE%2FKfJg99GGeyyxon%2FEpQvbHdvfZmTBhLAJDBonBcefi0%2FJCS4W7ziOdJP993mc00Lrx8JhjSbp6pIYtcKhyz71hoaxKOWt6D90T4cLYPvbpGv3byaL%2B%2BgBP3feQGe%2BNWHGO0HZfYhQHP6UVJptxMJuysr0GOqUB2MAZ3H9J1dgUP8yVKNRztA1dj01NArXm47TUT598PsjVTSR4s0g25nkGqfP0h08ADjQxjLkoioMNR%2BK96c%2F1EhtBa5IGNRlIEpTNrSx01XFej5oo89kJ8LYtXUVtwIK%2F05m3pTjxSE58zof7q6AK90J81OV4%2BFZWUio6XZCJJxMnh6%2FNxUaziTqwq4OhTPq2j9MN385Cm0PF6%2Fv9yHeAKCwYPzeU&X-Amz-Signature=482078a14885471d8af9aa5b2cc8c02389d859b927e97c364788ff24dd9d4f88&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
