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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBB6VKNC%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCqaApDLaLqYNCW4iXJLZCCcQu16XUJ2k3%2BmJx6rdh3qgIhALXruMUx3YzRmFVYQrDecl7l%2FqbNsrjajXVMc64CRH%2B0Kv8DCGYQABoMNjM3NDIzMTgzODA1IgwlE%2B%2B5cTXIb5ARPDgq3AOzBK%2F%2BVS0lVKXmVctn0WCtBIgX%2BJJFU5s%2BuWz51oUZ9nR1Un2864zOA%2FYWpcpNH0Nm%2BHWgYYiZeIuhoWw%2FHfe2NMCdSQv8Yz3FDRsRwwpt5zk2T8DDYuTa0Jbnk0XWyDSeXnfhOECLJgKO3QPRccG%2FStraxW6oRmvKLj41Zt8Y3UepcA9DEtdwESbdE%2FMWITK%2B7c24Jt%2BeluMGtpN2t6%2FN2hn0VzV6bETDNG29HyyFEd46h8p%2FmDU5UKXsl57po%2BGxl0D2vY1h1Ff0Gs1MVIr9VBXAY%2FIddus%2FnoghJ1bmZv20LzJ7xoKhJLdXEW8YUZi5KPF9ckRyqsEaKWdQgumA53cAkiPVixv9VTbk2Xco960ChQp5CjknK0ea6SLV4UwFWlAMw2akvD%2F3WfYRKUuy%2B5wItCkb3wZRcS13G9tX%2F6XeRlOrOM7ndSDjpky93WUlH65GmbyTyfbclzmGUQvTFMnP%2FlkQRHkPtxkDVFsRZ5%2FFTiv1StUuuTQvkIg8LxnIrXAlacngr1d1RKhs6OeHdgE7TE1TnezYxS5oZPvWMn5QT3imvAoecskpFWakEwcgpyyNt%2Bh92ceWUK%2FDLia6cUI2xSCw6wsssUg%2FgwCcC6SrKKTEEvlC%2F8ZzBDCxjsLCBjqkAfdjJkjO5pEDGgKVg0VNZhi%2FmgiB8UZ%2F3ifK35SgdaFarxHA5g5xKaPMtHZYWXJliRFOwIpLFFbYWBMQIZ3hjYVgmFRLt9dnZG%2Fzw9JGICh0ao2yqzxRPtnDfbQILETmSZe58hy2pf1HTRH7HgQ%2FTuVnxo0t%2BB8oHLrXxPo9zLbWqgL%2FRYFJoIxkd5WEHeQ2iAI2NElE5HwEuSwjfUkunCYY9xZT&X-Amz-Signature=e4f592c011243bc439bcac0295a3a41162f73dc56dc4703bb47511618cb6d365&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBB6VKNC%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCqaApDLaLqYNCW4iXJLZCCcQu16XUJ2k3%2BmJx6rdh3qgIhALXruMUx3YzRmFVYQrDecl7l%2FqbNsrjajXVMc64CRH%2B0Kv8DCGYQABoMNjM3NDIzMTgzODA1IgwlE%2B%2B5cTXIb5ARPDgq3AOzBK%2F%2BVS0lVKXmVctn0WCtBIgX%2BJJFU5s%2BuWz51oUZ9nR1Un2864zOA%2FYWpcpNH0Nm%2BHWgYYiZeIuhoWw%2FHfe2NMCdSQv8Yz3FDRsRwwpt5zk2T8DDYuTa0Jbnk0XWyDSeXnfhOECLJgKO3QPRccG%2FStraxW6oRmvKLj41Zt8Y3UepcA9DEtdwESbdE%2FMWITK%2B7c24Jt%2BeluMGtpN2t6%2FN2hn0VzV6bETDNG29HyyFEd46h8p%2FmDU5UKXsl57po%2BGxl0D2vY1h1Ff0Gs1MVIr9VBXAY%2FIddus%2FnoghJ1bmZv20LzJ7xoKhJLdXEW8YUZi5KPF9ckRyqsEaKWdQgumA53cAkiPVixv9VTbk2Xco960ChQp5CjknK0ea6SLV4UwFWlAMw2akvD%2F3WfYRKUuy%2B5wItCkb3wZRcS13G9tX%2F6XeRlOrOM7ndSDjpky93WUlH65GmbyTyfbclzmGUQvTFMnP%2FlkQRHkPtxkDVFsRZ5%2FFTiv1StUuuTQvkIg8LxnIrXAlacngr1d1RKhs6OeHdgE7TE1TnezYxS5oZPvWMn5QT3imvAoecskpFWakEwcgpyyNt%2Bh92ceWUK%2FDLia6cUI2xSCw6wsssUg%2FgwCcC6SrKKTEEvlC%2F8ZzBDCxjsLCBjqkAfdjJkjO5pEDGgKVg0VNZhi%2FmgiB8UZ%2F3ifK35SgdaFarxHA5g5xKaPMtHZYWXJliRFOwIpLFFbYWBMQIZ3hjYVgmFRLt9dnZG%2Fzw9JGICh0ao2yqzxRPtnDfbQILETmSZe58hy2pf1HTRH7HgQ%2FTuVnxo0t%2BB8oHLrXxPo9zLbWqgL%2FRYFJoIxkd5WEHeQ2iAI2NElE5HwEuSwjfUkunCYY9xZT&X-Amz-Signature=3b95fcf0d9e92efd72cf9efdb60ed8540741249f7a00d887e4fbd4691080c9a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBB6VKNC%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCqaApDLaLqYNCW4iXJLZCCcQu16XUJ2k3%2BmJx6rdh3qgIhALXruMUx3YzRmFVYQrDecl7l%2FqbNsrjajXVMc64CRH%2B0Kv8DCGYQABoMNjM3NDIzMTgzODA1IgwlE%2B%2B5cTXIb5ARPDgq3AOzBK%2F%2BVS0lVKXmVctn0WCtBIgX%2BJJFU5s%2BuWz51oUZ9nR1Un2864zOA%2FYWpcpNH0Nm%2BHWgYYiZeIuhoWw%2FHfe2NMCdSQv8Yz3FDRsRwwpt5zk2T8DDYuTa0Jbnk0XWyDSeXnfhOECLJgKO3QPRccG%2FStraxW6oRmvKLj41Zt8Y3UepcA9DEtdwESbdE%2FMWITK%2B7c24Jt%2BeluMGtpN2t6%2FN2hn0VzV6bETDNG29HyyFEd46h8p%2FmDU5UKXsl57po%2BGxl0D2vY1h1Ff0Gs1MVIr9VBXAY%2FIddus%2FnoghJ1bmZv20LzJ7xoKhJLdXEW8YUZi5KPF9ckRyqsEaKWdQgumA53cAkiPVixv9VTbk2Xco960ChQp5CjknK0ea6SLV4UwFWlAMw2akvD%2F3WfYRKUuy%2B5wItCkb3wZRcS13G9tX%2F6XeRlOrOM7ndSDjpky93WUlH65GmbyTyfbclzmGUQvTFMnP%2FlkQRHkPtxkDVFsRZ5%2FFTiv1StUuuTQvkIg8LxnIrXAlacngr1d1RKhs6OeHdgE7TE1TnezYxS5oZPvWMn5QT3imvAoecskpFWakEwcgpyyNt%2Bh92ceWUK%2FDLia6cUI2xSCw6wsssUg%2FgwCcC6SrKKTEEvlC%2F8ZzBDCxjsLCBjqkAfdjJkjO5pEDGgKVg0VNZhi%2FmgiB8UZ%2F3ifK35SgdaFarxHA5g5xKaPMtHZYWXJliRFOwIpLFFbYWBMQIZ3hjYVgmFRLt9dnZG%2Fzw9JGICh0ao2yqzxRPtnDfbQILETmSZe58hy2pf1HTRH7HgQ%2FTuVnxo0t%2BB8oHLrXxPo9zLbWqgL%2FRYFJoIxkd5WEHeQ2iAI2NElE5HwEuSwjfUkunCYY9xZT&X-Amz-Signature=fbf420081e7170b9bea528248c3bd8954842f1c751ea7fce8e1658f652267a18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675AHSAAC%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQC845hLitkwkOMMTjyph4KnmdEWI2Gex5fIww6a8CM34AIgRS6abRUUHp5jpYxCuSgB%2BSyMR%2BBZIszHLEMHbaIe8pkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDL5W8S59VzffZMXhfCrcA%2FVPV%2F%2Fv2Lla5RUqpUVLkxjoJhqh2HEdbD9r50inQNW61XRq0Gv5V0VzrAj1%2FgvYMDaA%2FG%2FWKWPXwnCERDUDOrW1h07KlgkHpq%2BeFSjS8Kk1Yjk%2B1d1hnWYOqxbjs1ky5pbp6PRSO%2BnICS9BwubE3o%2Fm39WRog3fd2jX2EllD6wcfMw0wURuX9b7pT8BRcrpQOkcV4%2FtGge1MHfEVQJJQ%2BByR42ud1iB2Y98rAt%2BFCcEiGmHuD1FUCtLdATdZf6VH2wQSUk1sdxo1AcIzzMy%2F8b7l%2FNnG6J5%2FcTDMbX6nFKtU%2BQr1buS8f%2FIr%2BnfXKlrH6K3aWhEDKqS4lls2ZClSIg4FRaeBQdDsdzhvDd9NddLQWCMhebchsuoQqjc1BDh%2B%2FYXhwmhVNrlFuibP%2FxxwFn2lOrLj%2BNaTPT9Pf4iwp4GUzlZF5bwzGQyyfbhudgu9%2BK8%2FeaAXNV87x5CJTHXVGCHVM0shtngMc2gEoiVYblMoFEWG01%2B37H9x09PRTvVhFJ8gwp3HWn69m2elqzJSyrVIrROyoVFZYjrpUu5Kw6qzQ4L2QTwDL6meCXOK4aqeUTZSdhu%2BljTgOfq3OvZ69q3R0z19sNE447uA9COyos9v2kXiR%2Fcz4O%2FELmoMKiOwsIGOqUBQtg495h5m7Qd21RJ2KU%2Fp616HMwYUma7bzEXYGN9wV%2B9C0aBnllJn0tA8j2CgA%2BACju7X49GKPgP3uq9B63aN4gR6irrdEBc1Tyv6P8xWspJoppYLd0zoMpXryd%2BljRs46kTeB4pD%2B7rw372noX%2B5p5axR8qHLLXL6sy4xhL3iG7j3ylRCQuZf4QIxRaforU1cGm6EQutW97TBkidPXGUXAkKfor&X-Amz-Signature=36afdac17b4b1a491413502f977b712985cd2405121fa0f2521a106a0c228093&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C6AW4H6%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIE1s0emteNI%2BD4HeLHNqCx8yQLjttaNEEte6wjyZiguQAiEAompnmwbLHT%2BpkBCtx%2B%2FbhYll5WncACL2cjwnf0B3OKsq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDConNEWciuwf08onmircA23D8gCcp3GY0TiqX3LzJL5nBHR9yGCcCJi7ZHHHyU8IrjQtwAITnZHwj5JY%2Byl3qCeMBNpRtZv3zajalHx8qLAkMbnqqOV9DpBNfPTN1Whj9Q02yzTjOjr8HMD%2FwnzH7kLIy292JGAQsAJhgo3YbEUzo98gZdAav4mzI0n9SK4KZfKTJMkr4PiynpLT8k43Oiq%2F%2BoooasxQAlCmg9swwsRkoDA52TpC8BzS8DFzH91b8h7heAbQviEXHdT3GQCKlCm0mTJjyCzGBijxEVN%2FFTwLJrS95BqcVKp8llCU152SkVntTMx0NlnAdsvZ0GFVph%2FoAqb4n%2B06i05ngLtgw177nVZo8rWqSjRuBmAN8T%2BJaNn2Kuf2w1NcCPY4HyVYQ48TVPjIe5Mi8c8G18Lch8gL%2B%2Fh7zSC4Dh18Ce85W21H%2BU6aI%2F%2Bv2gD6B9u%2BPb0RCNHWWX2a6svV92%2BJ3aouxs8uipFxwbRj14WwTj06G9HrZZXT2lM6ruvimyu6lZHvLfPZ1dOEFX4bU0d1wnruUYQTm%2FgOMn4bQUcYKkn7uH5VAGW4pC8OB05OgwmR5xXpaWejeo%2BH4YXNTCAoVxzqoU2mol20mghrj2Jofr%2BigWgXEKnAHElJ6yUqrvmYMLuOwsIGOqUBIpB1JwH5vBtD79aI20n18vxO%2FgFoP66IArBbauPxDfOE5Lx%2FDFE8%2BfZdI0LOazMR23g8GAsqf7AdcyFMrOheElc3SljDV6GUemOEiNOHZIt2W%2Bn3WurVs2mQftg1HlV3MJKAJGu84%2FXcEXc%2Fl0L8oCT9Q0joxxT9TDY%2Fy0RpICkxdEUgmYrqpYyP9w6xk0%2FGT4G%2BhZrW%2F2%2F%2FVTea5KfqpnA1LpPN&X-Amz-Signature=9d4183c25b77354d6aef109a48cdaae82c0b436df699d6249c094628b61b9325&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBB6VKNC%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCqaApDLaLqYNCW4iXJLZCCcQu16XUJ2k3%2BmJx6rdh3qgIhALXruMUx3YzRmFVYQrDecl7l%2FqbNsrjajXVMc64CRH%2B0Kv8DCGYQABoMNjM3NDIzMTgzODA1IgwlE%2B%2B5cTXIb5ARPDgq3AOzBK%2F%2BVS0lVKXmVctn0WCtBIgX%2BJJFU5s%2BuWz51oUZ9nR1Un2864zOA%2FYWpcpNH0Nm%2BHWgYYiZeIuhoWw%2FHfe2NMCdSQv8Yz3FDRsRwwpt5zk2T8DDYuTa0Jbnk0XWyDSeXnfhOECLJgKO3QPRccG%2FStraxW6oRmvKLj41Zt8Y3UepcA9DEtdwESbdE%2FMWITK%2B7c24Jt%2BeluMGtpN2t6%2FN2hn0VzV6bETDNG29HyyFEd46h8p%2FmDU5UKXsl57po%2BGxl0D2vY1h1Ff0Gs1MVIr9VBXAY%2FIddus%2FnoghJ1bmZv20LzJ7xoKhJLdXEW8YUZi5KPF9ckRyqsEaKWdQgumA53cAkiPVixv9VTbk2Xco960ChQp5CjknK0ea6SLV4UwFWlAMw2akvD%2F3WfYRKUuy%2B5wItCkb3wZRcS13G9tX%2F6XeRlOrOM7ndSDjpky93WUlH65GmbyTyfbclzmGUQvTFMnP%2FlkQRHkPtxkDVFsRZ5%2FFTiv1StUuuTQvkIg8LxnIrXAlacngr1d1RKhs6OeHdgE7TE1TnezYxS5oZPvWMn5QT3imvAoecskpFWakEwcgpyyNt%2Bh92ceWUK%2FDLia6cUI2xSCw6wsssUg%2FgwCcC6SrKKTEEvlC%2F8ZzBDCxjsLCBjqkAfdjJkjO5pEDGgKVg0VNZhi%2FmgiB8UZ%2F3ifK35SgdaFarxHA5g5xKaPMtHZYWXJliRFOwIpLFFbYWBMQIZ3hjYVgmFRLt9dnZG%2Fzw9JGICh0ao2yqzxRPtnDfbQILETmSZe58hy2pf1HTRH7HgQ%2FTuVnxo0t%2BB8oHLrXxPo9zLbWqgL%2FRYFJoIxkd5WEHeQ2iAI2NElE5HwEuSwjfUkunCYY9xZT&X-Amz-Signature=65ff1756ac62caa63e6e899b07b0072d942e9952d2db4c5b0c7941cd2081ba19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
