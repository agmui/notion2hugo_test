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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYGHOUYH%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQC3O0VaXr5drJIp4vZm0aePo6TGq6c8bSFCCRPyA5xeFAIgN45WYW%2BjimCL15F7fBYr1fcXpf4S%2FVPr%2FalJs%2FRVL44qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BQI8%2FRAXBbwz10NyrcA%2BHpN%2FRZDaySrvXUhYCdSV3UbIThL6Bd8%2FVmxPtNkqoEsL8wr0OerB4BxrNOJUlYaG%2FHMcmJ%2FQrY1MXsmBSexNckGP6xT4iBQQpKiBPM8EVuBF4CitpdXjhPFa9XdpEHYl12UVd9TFH%2FwJdNQ%2BhU5VyVg7uu0RTCzyG40GyK5YBWkY%2FB2RRmM5pOOdvgcjxkTAFvnX1BVAcKY1Es6%2BLyMRK%2BpK6T3oLK78LZKHuGO3xxl1Gxinwk2tElqIWsuzl2ZuncwRVbUnbVOd%2BZc84BgZtQJmvHawTr19k2ymmXo3vfmv950NvjiYpSSWLqDyiTEg37hNh2KtXsW77UTsOG4iMb65lb2vbVJ9JG6RMuUS8o72pCMfXmJxDJdK96vICV7aFsVpJ3hATRdqTAPR4c%2FCcMTVomqKj%2FWRe9Cuklpe855AYh1zFtIDSl3b8zrdlrtEt4EQxDXLtTl3tIVYMaRIGARPR378ZSsyLJpwRjY%2F38Ndh8RcEQ7CCtQjoNR%2F3aJQiR3zw9nwzHorRCXfR1yIKjg8uL229Hm14rKkNaEGdTmHygp9qZXylEBDyljwmF8GfPva8EgUFMCdE7cQD5Ue64rTDEuAetSYQ1E4BQbDSHh2Klq%2FLVx7OShdnpMI7Wm70GOqUBhcQv1UhAOt6tbyqHsgO73x5QTX%2FQgD%2FQNHSEofeEJEBHhIQ6j796WQl0k1PyPtxTbYGROP24MbyYLLDvV2wM31qMuBAIsOX3QdkWJI%2BtFFNKlOerTjfCvv7ly0diLDx9iwF8I46%2FG6LQXsUdvQLDO8g4hTvB4t3D1GD1cjj7sHXg8H5fcrNaFpfFUqqwaGIvC%2FOBKj7HXcVxwwzYOMZb0XiEKYiI&X-Amz-Signature=552e63e44a45089f339a51ebaa21132a4d3b9185ef41019af3d7e8f7d4d09db7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYGHOUYH%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQC3O0VaXr5drJIp4vZm0aePo6TGq6c8bSFCCRPyA5xeFAIgN45WYW%2BjimCL15F7fBYr1fcXpf4S%2FVPr%2FalJs%2FRVL44qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BQI8%2FRAXBbwz10NyrcA%2BHpN%2FRZDaySrvXUhYCdSV3UbIThL6Bd8%2FVmxPtNkqoEsL8wr0OerB4BxrNOJUlYaG%2FHMcmJ%2FQrY1MXsmBSexNckGP6xT4iBQQpKiBPM8EVuBF4CitpdXjhPFa9XdpEHYl12UVd9TFH%2FwJdNQ%2BhU5VyVg7uu0RTCzyG40GyK5YBWkY%2FB2RRmM5pOOdvgcjxkTAFvnX1BVAcKY1Es6%2BLyMRK%2BpK6T3oLK78LZKHuGO3xxl1Gxinwk2tElqIWsuzl2ZuncwRVbUnbVOd%2BZc84BgZtQJmvHawTr19k2ymmXo3vfmv950NvjiYpSSWLqDyiTEg37hNh2KtXsW77UTsOG4iMb65lb2vbVJ9JG6RMuUS8o72pCMfXmJxDJdK96vICV7aFsVpJ3hATRdqTAPR4c%2FCcMTVomqKj%2FWRe9Cuklpe855AYh1zFtIDSl3b8zrdlrtEt4EQxDXLtTl3tIVYMaRIGARPR378ZSsyLJpwRjY%2F38Ndh8RcEQ7CCtQjoNR%2F3aJQiR3zw9nwzHorRCXfR1yIKjg8uL229Hm14rKkNaEGdTmHygp9qZXylEBDyljwmF8GfPva8EgUFMCdE7cQD5Ue64rTDEuAetSYQ1E4BQbDSHh2Klq%2FLVx7OShdnpMI7Wm70GOqUBhcQv1UhAOt6tbyqHsgO73x5QTX%2FQgD%2FQNHSEofeEJEBHhIQ6j796WQl0k1PyPtxTbYGROP24MbyYLLDvV2wM31qMuBAIsOX3QdkWJI%2BtFFNKlOerTjfCvv7ly0diLDx9iwF8I46%2FG6LQXsUdvQLDO8g4hTvB4t3D1GD1cjj7sHXg8H5fcrNaFpfFUqqwaGIvC%2FOBKj7HXcVxwwzYOMZb0XiEKYiI&X-Amz-Signature=58f23c7fe11e1d15de62e817b9718eb23d1996493fbda33192444c2cfd10e213&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5IWNVLC%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIBRJWced7V6M6fTk3SoFaXv2VHbGYn7Bk3J6Cmp%2BaqomAiAGvKYBTOkLwo%2F%2FKkNjG%2F3OKCOQMUSNSGSqDukRNUJVYiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOI70sYoTAvdXxzdeKtwDxpRhUJy6kQXwvIa7MxP1hkPL5Ap%2BLVTjCT%2FdTCXHNKmOlr8cUFi%2FJQBla9sVTzVSRg11GqwGHZlH60TmLkROMEKwEkmUwjzOvRiaGwmNRL2ktiBGfHpwFVpwcuJyH%2BxkW6eSZmPloPOy20BBa9T2RRvJ5mae5n%2BKD%2FtowaJ7dJ7CKvwfg%2Fj3UceJKS%2FvbjkSDDlD8zArmWSDSRDDkSyNNJwI1UlvzQwPpVpQAOOa9E8VG3yq7k21hsQueFSFN50Sl8ZHGHrzQHRfhMsEv%2FYVXtN9F96NMKBAEC2%2Bix0H0bZOzEL18%2FMLaSWFGlQNjz3Mswa0%2FxTmpKwslx2%2FMhVjsyWSIrpq768FzxsCfOZuA%2FQl%2Bpvj14cxs7OQNewhVNMybOMEAfMZVYnYra1gvEavI%2BiXKFt%2BhLXZoo%2BsCscGrVk21Llz3MpFWWYUDPKclI6xd7xA%2FChD5OVytI%2FRzHm5HT6DMK7y4lAjVh2nAaj1F9p6QlGVyW5yb1MJYkigoeFeBuU1IehJdLKGgGmRvGzwiXmg243ZV8ZqzyzOJ52eYU%2BcQPxlJf1f0r1ziDx74SsjQADeNP%2Bc%2B23Sg6gz0m5cZEtbGq8IVd5mJVCIUMyCBYy7oot6R9ou3kO%2B8n8wldWbvQY6pgEMUWlFID4mLsJaPKwYVvWXRU7MWnLPXmSHEIiSPgJT1bH%2FqAjF9LYtgIRH%2FpGAsyFQAZkRATGveVw1vR%2FgoEtQqVQ8FMEgKBX73QvmUqd%2BYwwVX8pyPiLe1ZCrp0sJXmqZ%2FKcUhyqOVVf2dHqfaWLG0B4rmKRh86qpDMxZ0VFXDPXGx5c7ASm52Z%2BVQc%2B63PZV6sLcHqXY90LMvVTc0LLjJKiLrP7k&X-Amz-Signature=cd175cdc32d58ad3b174133d35d56eb26da0bda3b857999a3472e8a4c19fda2c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYQJTFRP%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCfKH7eYIFlycrxRyCzYtLcRjHhwEEOeyp70I%2FKqcYeQgIgXNrqIxI6Y0r5wfB1Eyy1cehHFiILK8IOk6CPXwZJTn0qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJvDUYLl%2FC5w6X0t9ircA8LVuoZ6LMSG0bb2LXTM2sXZV1HChM%2BFzuogBgGdFvFVnVjoTCZtf3%2FBz%2BFhO8HLNWkB40ZptalzRRfaXjvgchDk2bAHtfz%2FABiMzSGP3aYMc%2FkdzdPte8mWXtkDLiKeFWGEz45noNCDKGZDUJlaeNiGPBxcqjayhxts5qRbvbtm%2BChjMTlcrpOng8hQmAyqQLeOLRo55yQNAkWeNCMw2v%2BMIy7Rpl28VATSMlpQ5yZZe8xjaZWdhYcYcLFJGG7KPrDJTTVXXuFtjtBDs%2BCrfZEZsqI%2B%2FyO%2FA5bxR3t3Y9%2BJE15dAv5Ahhm8YVfFTTlKDTVWNj1XN51iq0Cio0HOPrZqaYJLqKM9Ow6fVT6xZeu2yM6uPK3jIcSzp%2FkfHGkvJJe1aPPE%2FSnEbeXFR8OnaWNf3gWJHn4ijESwx2VvnIF87MHThA7HQq3rV7EVWIPwbXQShCjVWqfVSLy5ZsZpCnlZ6pInIoV06Cm0sD1D2I0UxS6BMFOLfV5N6fwPahSaxGafIfBS7UCyjHNfZsLze0DqgyyTjW59c%2F5qyVXILeTI%2Bs%2BpaXuabr8L0ZrhUhf5gcr%2F8B%2FlUWm9hVtB%2FRJbC%2B1BJDiAO6afgq7W9w75mBY88UGKYoLahGjKoNWnML3Vm70GOqUBQ%2FFFEy3%2Fi%2FEGT4npTdktEvTJxuIGz9EZhwoOgk7OXGtxGhHy4PeVbAOmOrQcJhzGYvpvcaMHwbKCKhQiGsi4GU%2Fu%2BezaWAX122a%2BAg46yNAsZE%2BCe%2FpzXjzId1tNrGGap71Il8kjA5Srm2adZN50uI6LH6FLTNXQIUX44gUjDToM9gBpQITLFaR62bcPsuwRKuTz%2BKEIjK8XxuGSL7wOanlO7rc5&X-Amz-Signature=7a81ef3057410fd70d45bf2f0b90a4caa096604ad7e705c45b8d9bd00c520b55&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYGHOUYH%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQC3O0VaXr5drJIp4vZm0aePo6TGq6c8bSFCCRPyA5xeFAIgN45WYW%2BjimCL15F7fBYr1fcXpf4S%2FVPr%2FalJs%2FRVL44qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BQI8%2FRAXBbwz10NyrcA%2BHpN%2FRZDaySrvXUhYCdSV3UbIThL6Bd8%2FVmxPtNkqoEsL8wr0OerB4BxrNOJUlYaG%2FHMcmJ%2FQrY1MXsmBSexNckGP6xT4iBQQpKiBPM8EVuBF4CitpdXjhPFa9XdpEHYl12UVd9TFH%2FwJdNQ%2BhU5VyVg7uu0RTCzyG40GyK5YBWkY%2FB2RRmM5pOOdvgcjxkTAFvnX1BVAcKY1Es6%2BLyMRK%2BpK6T3oLK78LZKHuGO3xxl1Gxinwk2tElqIWsuzl2ZuncwRVbUnbVOd%2BZc84BgZtQJmvHawTr19k2ymmXo3vfmv950NvjiYpSSWLqDyiTEg37hNh2KtXsW77UTsOG4iMb65lb2vbVJ9JG6RMuUS8o72pCMfXmJxDJdK96vICV7aFsVpJ3hATRdqTAPR4c%2FCcMTVomqKj%2FWRe9Cuklpe855AYh1zFtIDSl3b8zrdlrtEt4EQxDXLtTl3tIVYMaRIGARPR378ZSsyLJpwRjY%2F38Ndh8RcEQ7CCtQjoNR%2F3aJQiR3zw9nwzHorRCXfR1yIKjg8uL229Hm14rKkNaEGdTmHygp9qZXylEBDyljwmF8GfPva8EgUFMCdE7cQD5Ue64rTDEuAetSYQ1E4BQbDSHh2Klq%2FLVx7OShdnpMI7Wm70GOqUBhcQv1UhAOt6tbyqHsgO73x5QTX%2FQgD%2FQNHSEofeEJEBHhIQ6j796WQl0k1PyPtxTbYGROP24MbyYLLDvV2wM31qMuBAIsOX3QdkWJI%2BtFFNKlOerTjfCvv7ly0diLDx9iwF8I46%2FG6LQXsUdvQLDO8g4hTvB4t3D1GD1cjj7sHXg8H5fcrNaFpfFUqqwaGIvC%2FOBKj7HXcVxwwzYOMZb0XiEKYiI&X-Amz-Signature=6f85b969da61b148952a5d908a7ca4db99a115cd387c8cb4056e8fe70aacbf70&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
