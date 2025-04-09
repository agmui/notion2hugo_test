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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOEDONRK%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T210700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQC8y1iYjq5FHqsl34Rl9xjrcXwsU92bGBc6AEzXt3PSIgIgBlu%2FCiHPYkBbazOrRgkfY5auzk1O96XRlMcTTlPC7QoqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEqosXsmRnn4hU2fSrcA5DlylV5EvaHtJ9jXyLyB7au0%2FocDV%2BGr9rdM1cgLrRFaE4%2FcdyV9qAB0sjl2F4E5sOJPFBXM42fdbTrbkhqRBEZQKCFqTnun7Sllq3ZBmYAGdJ2VwBk3eI7QVJ5dhhXVh4s%2F2QIV8SHD%2BVyU5E7G822O5mk2%2BKgJzOTdQGoowG%2FLVLULy8SPEe57cxkb0anFIX3Yr5K9Jo3HR0FWfLPgqpyVdB49Q%2BAesB3WhYRXDLdLkWIheFr1td5uBjLZAh3cN1bOV3tFfmaycHfn%2Bzzp9dzJ4%2BuywVi3plp0ng9cXGcqdmYx15aImejjm6%2BCSWnY4sajYC3Zgn1miCYG3a5B%2BYCWYW0wV8Rjq6MP0%2BwhjjbstDDqFSlWll9aat2kOJ1gR5QZdqtlP%2BwcMbJCHssR%2FWPyiqtjOlrnlQaoWaLheDQfoT%2FrztZR64jtT%2F7rKYR%2FKTMb3Q0vaGDH6N4Hkel1e5QpAXkIfCjKDhlWDPStN4XgZIztaPPx10PSkEl9snnx1SyT%2FmudMXK4AXiC2dPbgoPcYYLUgo%2BJoBfpGXx1gMEKBlcj4Ms4%2B3uxhtmREC39dr9SA2PGb4RAgwb2M7PtPzkBcwYlAVi%2Ft45rpGIYlTlDd09dFasoqJV0UW%2BMOWv278GOqUBxGdNDn5Yv7ih7U3XEzvKBABYpPcq99SH9USGQ7uWJjT84BB95kaGmoEKkXssYb7rE%2FwHxWUDkakFflK2G2kNd%2BjLdIcJ6eiCkURfQ6meaIb1CxCgNHPs8C29qzglu9JlaE9DOUfxeRKfa9aGgE9%2F7EOtmihIP%2FnFGt%2FVEaRcstDHufd8U3jQSvc7F56%2FYGcxKHphWap%2FwR%2B2XrCHHoZdDgwh9b%2Bf&X-Amz-Signature=df5c63c79f4a4c203a5a0c585d45aac0d7bbdcc249e8bcaaa0933ecde176bc14&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOEDONRK%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T210700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQC8y1iYjq5FHqsl34Rl9xjrcXwsU92bGBc6AEzXt3PSIgIgBlu%2FCiHPYkBbazOrRgkfY5auzk1O96XRlMcTTlPC7QoqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEqosXsmRnn4hU2fSrcA5DlylV5EvaHtJ9jXyLyB7au0%2FocDV%2BGr9rdM1cgLrRFaE4%2FcdyV9qAB0sjl2F4E5sOJPFBXM42fdbTrbkhqRBEZQKCFqTnun7Sllq3ZBmYAGdJ2VwBk3eI7QVJ5dhhXVh4s%2F2QIV8SHD%2BVyU5E7G822O5mk2%2BKgJzOTdQGoowG%2FLVLULy8SPEe57cxkb0anFIX3Yr5K9Jo3HR0FWfLPgqpyVdB49Q%2BAesB3WhYRXDLdLkWIheFr1td5uBjLZAh3cN1bOV3tFfmaycHfn%2Bzzp9dzJ4%2BuywVi3plp0ng9cXGcqdmYx15aImejjm6%2BCSWnY4sajYC3Zgn1miCYG3a5B%2BYCWYW0wV8Rjq6MP0%2BwhjjbstDDqFSlWll9aat2kOJ1gR5QZdqtlP%2BwcMbJCHssR%2FWPyiqtjOlrnlQaoWaLheDQfoT%2FrztZR64jtT%2F7rKYR%2FKTMb3Q0vaGDH6N4Hkel1e5QpAXkIfCjKDhlWDPStN4XgZIztaPPx10PSkEl9snnx1SyT%2FmudMXK4AXiC2dPbgoPcYYLUgo%2BJoBfpGXx1gMEKBlcj4Ms4%2B3uxhtmREC39dr9SA2PGb4RAgwb2M7PtPzkBcwYlAVi%2Ft45rpGIYlTlDd09dFasoqJV0UW%2BMOWv278GOqUBxGdNDn5Yv7ih7U3XEzvKBABYpPcq99SH9USGQ7uWJjT84BB95kaGmoEKkXssYb7rE%2FwHxWUDkakFflK2G2kNd%2BjLdIcJ6eiCkURfQ6meaIb1CxCgNHPs8C29qzglu9JlaE9DOUfxeRKfa9aGgE9%2F7EOtmihIP%2FnFGt%2FVEaRcstDHufd8U3jQSvc7F56%2FYGcxKHphWap%2FwR%2B2XrCHHoZdDgwh9b%2Bf&X-Amz-Signature=57af3b9d429f1e7c60382dd806b59888fc8999a4caca1da3e2c0697fb2645771&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NZGCA2C%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T210704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDd38YQQxPL9yl5las0MKFi1d%2BtFU9FNU20hyEISh6CrgIhAKQ1%2FPNUFTFpsTQbPER5R2jmuPR5FIBYcFu%2BGQueulzNKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMgqCXgZ2Q71yAJKYq3APlZK6YMsu5M0zWQbtsPKEHZ3d58BGhOIXy4NlFRKiXQ4UwMix3%2FkB%2Bcc%2Fxtc%2FMPacLK4iM4YlUpkTReCi%2FLLG5yx8096RBPjwY3aGGirsTZrHaO3pkd6McAo%2FFuiI49yV10WOcqubnOhc%2B%2BOrSW0D5SveJipX1iGrG140IHiP%2BIgRNV4XYMpflMtIWi0SwqGFmbkbE4bOVZNApa5pFqJrQHBlU5Bs0%2Fv9u2x27HqFvEz3hpJ9PCDlGAP70rrOpJU1wM9fIVA6JIQlmkngTo2otQFNmKjVaOCBAT9LyWvaS5FCGxvBaO0gzfonPu%2Fy0SnqT5eRuSw57EmK%2B1RAarFsZ39BNFOWn1nTYQ%2FU%2BmjPFpsoU1za1I%2BBpbULV2CQWcc5EFbOBgod2VOuxzHt%2FfZqG1CIsj95ofdNwoUSSe%2FvA0iK1A19yUTcV300QiaqDxcoS4GBFE9ftF1zA3qfrRMUhXvKg44FIzXu%2FCN2f41Ye9CvRDCpJhCKSadXaIqw57tbLNyjVk3pCrg22wRWHzfr5XvPMR1kslkn%2BAd0Uhtwg%2F8jfIM1NzleF67IATr1USmUIHTaWs297s13wfl8TQCud8tgnyenF%2F62WFy6lEu%2BSfMZKdf9c1QSL%2B34g1TCgr9u%2FBjqkAbGW%2BCbJotGxjJg4TKDlrXpz2law47zD86shUlXutLnFCqzZwdlm91Z85l9gzyRnidGH152LFJKWGcYtWSO6d2yznvIUsujay30ZQlw3%2BmHbslHI4ZvVfMaYf8FbNSQgX6FMAZ%2BPYLi90ZFBaohh9yOUgadmzjXaSaWcrgQPslqFD52v0AH0YVhcqLZx73MvggwYBFzypxzWK0jnyUAvEt1rX4XF&X-Amz-Signature=4fc26eed9b3bc3dd0e56b367b3bf304151ed1c74d292057080c93372997ae2e1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STVCA3WE%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCUzSSOIdTCaBYtH5gr7ndqHAspIhqvWKvVwofjMC2OCgIgdyfJLzfs1FK1pAYBORQbbsIDPCfOabUWGYujOG855q0qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOn0eKNSxuBiKoHuICrcA6dHtTEHWvmtwF%2BxjK28yKHzhBjWbbZL3fgZUAPEx%2BhYtQXy5pBUebBzjMjEE%2FS%2FN1OZKZNBZ6ni1la57G%2FDHYlOg8xY3%2B%2FIIWMAa5I1fww3QPweoInMnzdlacbWvAFBa9oDwHrvUvGafVMTMQfYe6f%2B%2FYpD8DFoRDp3%2Bvp8lpKP0IdGgrtRP%2FayrsdKhSGpUL9ErWHdfWJbUoBBXKR2sXOyFxBnDn4Trz3PsJ3vRlpjoHELCeWGhbs0J5plqiiyyewguarDb00XP%2F6H3h8KIvmgLKS2aAcwbZ5LO6p8qT39p1ZiVBEhmUW%2FJu4K4MlgSGhAIthOvDmJ%2F9IE7BTLv3Nnoc3Asp9Y8Q%2F6TarBg6FZxF1oGxPoudn4jmqG2bs0T7eGYZmP74UBQdZrZCHV2DRG9%2Fh0%2BW0HdV3ItPfpuOkZcknTMb8XyT4BRGtcBposF6CUEKy0oN3l%2FOGGGjpUMqTsUlosQ8anTQ2jNuexJ%2Fbqe1IjngXzr%2Fia54z39T1%2FhPFW6NQEAMIPmfphFxT2vIz38m4kqgEXC9S3%2F1CZKdMgbYUrlM2YssisnemTNF28wI3MSrS07ezRkEX3R1FaR1mWRQzJfw94z1arYaeKxjmEg3m46u0FiUjN3hKQMPKv278GOqUBxsJ1QSV8I1TW8A9Ds7r6RIgOU%2FDzUrTGia%2BBVzWUuJc08%2Fua5Rn8kZX7nUsLT33Eof2v67ywypzry0rbe7zHZh03gtVaXPh6g2vLAaDZwZhBC%2F4gv%2FgYMsopHDRnt0uxHJ%2FkF7AM5t9bSVESd9NPtDWomWHNZFfJcahF%2BI2SxM44g%2B2oA2uvRvq8NML5z9%2BJ96EbTIpQReG5msahuk9fkmmp3Qly&X-Amz-Signature=f431f3b2d77b29cb555c6d28c1ca8e3c1ab9ef320c6f111158ef0591161dc546&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOEDONRK%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T210700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQC8y1iYjq5FHqsl34Rl9xjrcXwsU92bGBc6AEzXt3PSIgIgBlu%2FCiHPYkBbazOrRgkfY5auzk1O96XRlMcTTlPC7QoqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEqosXsmRnn4hU2fSrcA5DlylV5EvaHtJ9jXyLyB7au0%2FocDV%2BGr9rdM1cgLrRFaE4%2FcdyV9qAB0sjl2F4E5sOJPFBXM42fdbTrbkhqRBEZQKCFqTnun7Sllq3ZBmYAGdJ2VwBk3eI7QVJ5dhhXVh4s%2F2QIV8SHD%2BVyU5E7G822O5mk2%2BKgJzOTdQGoowG%2FLVLULy8SPEe57cxkb0anFIX3Yr5K9Jo3HR0FWfLPgqpyVdB49Q%2BAesB3WhYRXDLdLkWIheFr1td5uBjLZAh3cN1bOV3tFfmaycHfn%2Bzzp9dzJ4%2BuywVi3plp0ng9cXGcqdmYx15aImejjm6%2BCSWnY4sajYC3Zgn1miCYG3a5B%2BYCWYW0wV8Rjq6MP0%2BwhjjbstDDqFSlWll9aat2kOJ1gR5QZdqtlP%2BwcMbJCHssR%2FWPyiqtjOlrnlQaoWaLheDQfoT%2FrztZR64jtT%2F7rKYR%2FKTMb3Q0vaGDH6N4Hkel1e5QpAXkIfCjKDhlWDPStN4XgZIztaPPx10PSkEl9snnx1SyT%2FmudMXK4AXiC2dPbgoPcYYLUgo%2BJoBfpGXx1gMEKBlcj4Ms4%2B3uxhtmREC39dr9SA2PGb4RAgwb2M7PtPzkBcwYlAVi%2Ft45rpGIYlTlDd09dFasoqJV0UW%2BMOWv278GOqUBxGdNDn5Yv7ih7U3XEzvKBABYpPcq99SH9USGQ7uWJjT84BB95kaGmoEKkXssYb7rE%2FwHxWUDkakFflK2G2kNd%2BjLdIcJ6eiCkURfQ6meaIb1CxCgNHPs8C29qzglu9JlaE9DOUfxeRKfa9aGgE9%2F7EOtmihIP%2FnFGt%2FVEaRcstDHufd8U3jQSvc7F56%2FYGcxKHphWap%2FwR%2B2XrCHHoZdDgwh9b%2Bf&X-Amz-Signature=f063fcfa5c8b2a5b83a40dd7991a921ef520c4fd16d3c40e09fa01c93c88a245&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
