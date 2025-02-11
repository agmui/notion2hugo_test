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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWAHK6GY%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T090805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0ENhavdltzZOK4A6Mfd8jRsqBFtj3RmXoMHJ%2BmQmkHAiEAt9Tc%2B%2FjLPnddlsfK5yBSQxXr%2FGWk%2BKbzLB5ZCfP%2F%2FVoqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO37omy8k4Eq5YX5%2BCrcAxPxwqqVLhjTRfM%2BtPOZkZXFLyiL4Yd%2BfXbJJKtjNy08Cx0lvOXK0AYkM90g0kBAzSmgmpLCtavFd0WWlye%2FwZKaD%2B0RYQo1FAO4x%2B3jYynt7g%2BCfa1PB9LUbWXud0xuACjvjnDAYFTR38pjcmKBl31n%2FP%2BeRRCCvmt7eWVIcMdIz%2FkyhlZl%2BIywugXv1nesbJrq%2FpTZBjjJ9xqIokG%2B3QQ4mQc%2BuFufApa4P4tRVw%2FzSpyAHjs6q7hk6BYOGV84rsHIkEKWkpyCbuM28dIc7Bb%2B%2B%2Bp1vfyRVOV96tZ4uSpTgBW5t6ytGSH%2Fdfck8fPS1owNma7JrkM2hSmnsQuTS8hU5ZxgJhtBQ21cU%2BJ0cY%2FVKSJJ7VVjS%2B8IlcM6avFfbSw3ZYhl71IZfMCD4OshM7ijT1OvhPR3LfaJ2cTM1bRW9pJFvFC1TIyKgxoeYq7GXnKHQmhHYgnsAryumyMoX9d%2Byo3547KVcAUTZ7n%2BmrhlArii5W6cjpEwekWLGZPq34AKy8RhWmyPyOCDRNPs2FkyxXRtQAhPtBwzjlKVOfJ%2FgOHtXWH5VAqoghznwvX9ezQu1YE6hddBDdsoYVev8mPB%2BNdgK2Dzx5ttU0Q8axt%2BvAlipuJaVNgJQ%2B4QMMqcrL0GOqUBwfXUpfx85hI89CnfBlMsgzxBxFvHIikNmsDBFCmkLhsiZVCemzTV2ohO64EWBbTDdhlySPNBABiLZgtR19jOGqvxaYIwzpM5vXKkJhcveqquXYAx1pjiTL7rGAdNEPvBNq0RaqkqyqLgSwBXViLfttJFira16kS5UahwL7iT9CB301S%2BtOPdRec43oVvLyFwhNJorJZ2imO%2BtfWdPNednwZNydWc&X-Amz-Signature=a5d6fbb082bcdfa21fb9bda901f8fec8001d725c3793e120524d1d4dc1ca393f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWAHK6GY%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T090805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0ENhavdltzZOK4A6Mfd8jRsqBFtj3RmXoMHJ%2BmQmkHAiEAt9Tc%2B%2FjLPnddlsfK5yBSQxXr%2FGWk%2BKbzLB5ZCfP%2F%2FVoqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO37omy8k4Eq5YX5%2BCrcAxPxwqqVLhjTRfM%2BtPOZkZXFLyiL4Yd%2BfXbJJKtjNy08Cx0lvOXK0AYkM90g0kBAzSmgmpLCtavFd0WWlye%2FwZKaD%2B0RYQo1FAO4x%2B3jYynt7g%2BCfa1PB9LUbWXud0xuACjvjnDAYFTR38pjcmKBl31n%2FP%2BeRRCCvmt7eWVIcMdIz%2FkyhlZl%2BIywugXv1nesbJrq%2FpTZBjjJ9xqIokG%2B3QQ4mQc%2BuFufApa4P4tRVw%2FzSpyAHjs6q7hk6BYOGV84rsHIkEKWkpyCbuM28dIc7Bb%2B%2B%2Bp1vfyRVOV96tZ4uSpTgBW5t6ytGSH%2Fdfck8fPS1owNma7JrkM2hSmnsQuTS8hU5ZxgJhtBQ21cU%2BJ0cY%2FVKSJJ7VVjS%2B8IlcM6avFfbSw3ZYhl71IZfMCD4OshM7ijT1OvhPR3LfaJ2cTM1bRW9pJFvFC1TIyKgxoeYq7GXnKHQmhHYgnsAryumyMoX9d%2Byo3547KVcAUTZ7n%2BmrhlArii5W6cjpEwekWLGZPq34AKy8RhWmyPyOCDRNPs2FkyxXRtQAhPtBwzjlKVOfJ%2FgOHtXWH5VAqoghznwvX9ezQu1YE6hddBDdsoYVev8mPB%2BNdgK2Dzx5ttU0Q8axt%2BvAlipuJaVNgJQ%2B4QMMqcrL0GOqUBwfXUpfx85hI89CnfBlMsgzxBxFvHIikNmsDBFCmkLhsiZVCemzTV2ohO64EWBbTDdhlySPNBABiLZgtR19jOGqvxaYIwzpM5vXKkJhcveqquXYAx1pjiTL7rGAdNEPvBNq0RaqkqyqLgSwBXViLfttJFira16kS5UahwL7iT9CB301S%2BtOPdRec43oVvLyFwhNJorJZ2imO%2BtfWdPNednwZNydWc&X-Amz-Signature=47a7b2885fd2585a8a61799b76200dfd193097357a556815d2efd6968580a349&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQPZL2SZ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T090807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0WhRh4rwD%2FGbcT4im%2B0eCzoe9AC2K0BhVP93dRPycGAIgPbn%2Fazmxr98mjtgGFngh%2BJTxq1Wvkk3T1lOdyoXiHxoqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyVs8JAWYDXz4VIZircA57EqfjuFaRgYUJpkLb8AgKh6CUIrnVSvuNzjmjUWKiNMMMWa1ndTHK3xwThtvuiDOpu3ZuUukGs8DeOa%2BaMOr9q8BuDXFVledtppmSjS9GUN1V%2FefvPM6cQjBiH8vpRoVp0gwtARLd8M6NCU54FHHliYlhR1vjGG9cKZIaGFvB3Xrb9TMB22GvEqLikxxJ5%2FUAHnXvC5YImDBddPqjiexwFkH3RJsPr6st1q9QrMx9ozYZTJPzG5DR0laXnFXOpxUCy3HW7TcSjR7uG2zhJywiuzZ9N2mncz1TPDI3fYt7uErlMt7mY%2FVKM0sQkD4Q1B7IHIr5iBG%2BOQa6KCzHoWBUoh6pHLVIOoy5m%2BAlbakTbJlOL46IdOr%2FyRf1H0sq7bw8Xa3TOSFSPt0WhVndBoCQmYbpvu%2FZZecqTtharpGFVvsCt%2FtV38JSX1us8Am6PGngi5lO74bulmRnsIcr8edWgrzgne66hwkFEHPKJoU%2BhwUIw2wh8OI4YcSETpMvvrc0O8vHEanN2P7HfeKGmCdRvXCC7cefDEnocwqVbMGIgebsmLlCq3AGAno9s9htSBklacdHxFKgLTSE2ShwCnLn36dyXMw8p8G%2BpdycBGMirrlOyufzcy9ig6e5YMIqbrL0GOqUBi0Uacv2NQYycpFW3e7e6%2BY24pxKFKN1MfWb5HJPCj%2Ba3X7Vi7amGbcohcMeLx%2FDiPQ5vDRD735MZ2VHxB73U7Z%2F9eHvSfNWa8VvAbizTRJb0luGhTxd%2B32k43CX2Am1OjlCknxIJJtT%2BJma7sqTJ36jPD91qCkaGwNN3tnkH8a7b8HTI28Cg4uKrIC%2FpCdzwPFH1vPYPjt8cnggbDlqlWbkd3%2Bdb&X-Amz-Signature=30a824f3855c6926bdc02e73302f5327c58a1bd850495ad8b5ebf07972d7f055&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5QJEVGL%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T090808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrmKZaCZKnxni89667tKhu8GSz115%2FxXjHy1842NQIBwIhAJFbk%2F6eYZ1KkM4cTAvUrcbKaKtzPU9%2BmwvsBOfgZtA8KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwfem%2F%2FbfdVweeM1E4q3APwtYVSY9rjLs%2FULYgV3F8AC96f8yDx2GucoXkHjyCFe%2B2uZOV6WEuhMk3ch4XejnPkhZOGKUs0lJnbJCFgWQx1vkCSVU%2Bh8n8qCfFzN1KIR1RVEFsIMiJ7C%2BxUKW%2FLdfdbCqiIqRtlQ3s6dCQR2%2BAhnVQQ7mw%2BgqpoSe7FdZT6%2BbDmCK4f3tOTIkALKmlKUQ4HArhNHqRu1LvDstpAX7fzdBQefN87HlINkz2aALIbbMc5YCeKV44uzyeV8iOILWScoKPWKTVbTHiHTe4ooM45hOGf4p9zwtA%2BtcGLT5wxAPKV1MTYP3O%2BmEpPG0ET4znL%2F2kZfacVGu6Km6ToxIpv5T9egRgsXBLdyzPDr1%2FUjMUGeEyohlR4ynvoy1rBYHiuHgwqC9Q%2FTCCTm14W46gaGvmsWpNhOvu%2F%2BF8V1bRy9eE7jQZ5qXn0nfbkV41MV7MyuyPu0PANqJ2sgZw45HcC4iKuw5UG93r9QHuCp0A43%2FZzA%2F0IBXBn2vBAY5%2BEHFTb7UE9ChwdbLqekHAJ%2BoL6lz6HJYvZCgr0TpWvBHcR6jksra00AamRdzCoHQ9nzr5LFLAikLMXJlr93G%2FWT%2BWBvujtXa7Jl2sHizukjt%2B1qW7Cdx3pg2015imJGTCHnKy9BjqkAV2MypeWGZEFiGcyZFQnvpfc40AX9BDvWMaHD9lUCGKN%2B9pDIjCYRptVLsw%2FCHGc5XO%2BOsJfeM1DVtd6qMJyuxldM%2BOMTW4aVyPkpPQPx%2FuF5MF0FI6X9Gvi05yxKpEzTULTf2G7ZZ4obm2f3oCdSyHzHURbRcMGgXTtG6bB3wtDbThprz2SHC7M2JiEBOyDqjwJDtX4T%2BlVbDvx9aj48rAUNUT%2B&X-Amz-Signature=9ed6452a47de8700c01a6c890ec0bdeb83ab45e956a372212cb4e07383d30677&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWAHK6GY%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T090805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0ENhavdltzZOK4A6Mfd8jRsqBFtj3RmXoMHJ%2BmQmkHAiEAt9Tc%2B%2FjLPnddlsfK5yBSQxXr%2FGWk%2BKbzLB5ZCfP%2F%2FVoqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO37omy8k4Eq5YX5%2BCrcAxPxwqqVLhjTRfM%2BtPOZkZXFLyiL4Yd%2BfXbJJKtjNy08Cx0lvOXK0AYkM90g0kBAzSmgmpLCtavFd0WWlye%2FwZKaD%2B0RYQo1FAO4x%2B3jYynt7g%2BCfa1PB9LUbWXud0xuACjvjnDAYFTR38pjcmKBl31n%2FP%2BeRRCCvmt7eWVIcMdIz%2FkyhlZl%2BIywugXv1nesbJrq%2FpTZBjjJ9xqIokG%2B3QQ4mQc%2BuFufApa4P4tRVw%2FzSpyAHjs6q7hk6BYOGV84rsHIkEKWkpyCbuM28dIc7Bb%2B%2B%2Bp1vfyRVOV96tZ4uSpTgBW5t6ytGSH%2Fdfck8fPS1owNma7JrkM2hSmnsQuTS8hU5ZxgJhtBQ21cU%2BJ0cY%2FVKSJJ7VVjS%2B8IlcM6avFfbSw3ZYhl71IZfMCD4OshM7ijT1OvhPR3LfaJ2cTM1bRW9pJFvFC1TIyKgxoeYq7GXnKHQmhHYgnsAryumyMoX9d%2Byo3547KVcAUTZ7n%2BmrhlArii5W6cjpEwekWLGZPq34AKy8RhWmyPyOCDRNPs2FkyxXRtQAhPtBwzjlKVOfJ%2FgOHtXWH5VAqoghznwvX9ezQu1YE6hddBDdsoYVev8mPB%2BNdgK2Dzx5ttU0Q8axt%2BvAlipuJaVNgJQ%2B4QMMqcrL0GOqUBwfXUpfx85hI89CnfBlMsgzxBxFvHIikNmsDBFCmkLhsiZVCemzTV2ohO64EWBbTDdhlySPNBABiLZgtR19jOGqvxaYIwzpM5vXKkJhcveqquXYAx1pjiTL7rGAdNEPvBNq0RaqkqyqLgSwBXViLfttJFira16kS5UahwL7iT9CB301S%2BtOPdRec43oVvLyFwhNJorJZ2imO%2BtfWdPNednwZNydWc&X-Amz-Signature=645796fbb0fac1eda076ec1f78fa3f4e506214908afd07a65c5455989884ec4f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
