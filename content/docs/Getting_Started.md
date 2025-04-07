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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEYQNJSH%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T110713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyke8FdcgFH9lsySbeuFo8KIgQgiK0bQ4pIPxj1HT0vAIgDoMVBPV6%2Fw4AmUOIrg480C4KEmUT1VFhvl%2Baq07%2BYsEq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDA1i%2BSvS3yXNDRFYqCrcAxZ%2BUVfk7D8pOvN2cpPGX3vpDBhxiSEipI85NDv7TmGNw7VqVKa7RUpeAPKGF4Qh%2FvLViA7mg4n7JPzZShrkdrnVBiY6OOi3hP2o01IqdJhpjxZNAcK80SPR0aHHJDap7KX3cXcIN1Fvfui6oMNZdPrqGnoBN%2FoiZQqYOa%2B7r%2B9HvZNOGhco4cBzZGu%2FD1rpHvRftniXCMPSqCbA6L%2BEz74Fz8%2FRw9PLyymJAN7d49Lr0C5YZMw7uOCbu5qElJ5gJu%2F3tR7WNqSy1i1%2F8RYah1Eqn%2FTFeDYtxKNFEOz1gTyfkhqpMLzI4QRv%2BO8ApZrBloaWQau6zwvm6rL4%2BmwSFHj2MPv3fgcqSPrJd%2BZPrAXUBTtX7sCp1maShqYm9nOPp5li3C%2Fo%2Fg7hn2osKIwNwUqIV%2BEpMtPbcyuX2IVqPfxZ2V1WRTXI3sP%2FsiNDBq2%2BvmxpVIXOej9LPePggvJQ2WY4UqCPAK6VsZQKrG8ZmBCKhK2ddVjhfobgzt1%2BAyvNQGec%2B7gBEZKvHw1VQfU8ItmA386cMhcR6meoXKPIOTeW1oulmCQWYcvvwfUnw9U52UGe9idCqeAeR2xByUZXmHJlAGgF7uOVogW2HRRyhDp7q2z39ZR0CdTUw9FWMMHUzr8GOqUB%2FXSnFCqOpjcgVs1R5CbWYwB4wKS7m1y93oLDZVV%2BxrVcFAMmGnoLgfL1fYu%2FdKX2iY78RyooPsvpSWjx2Z71qIJNdwUb5AXayXF5LVNATNptFPPJjoFyWeoQ86ou3Aol85SNX6UuQDJabGUwz34VwPFSylVFcBGxWV0UI2s3yWwjK4RRt5g%2BwP2Whn1VnNVComBR92mYHITjIGyJ%2FEg8bUeEazU6&X-Amz-Signature=20b66fd2d65ccd0ab7c3649ede659a643e34208dab3536b7c97fcbadb1d668de&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEYQNJSH%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T110713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyke8FdcgFH9lsySbeuFo8KIgQgiK0bQ4pIPxj1HT0vAIgDoMVBPV6%2Fw4AmUOIrg480C4KEmUT1VFhvl%2Baq07%2BYsEq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDA1i%2BSvS3yXNDRFYqCrcAxZ%2BUVfk7D8pOvN2cpPGX3vpDBhxiSEipI85NDv7TmGNw7VqVKa7RUpeAPKGF4Qh%2FvLViA7mg4n7JPzZShrkdrnVBiY6OOi3hP2o01IqdJhpjxZNAcK80SPR0aHHJDap7KX3cXcIN1Fvfui6oMNZdPrqGnoBN%2FoiZQqYOa%2B7r%2B9HvZNOGhco4cBzZGu%2FD1rpHvRftniXCMPSqCbA6L%2BEz74Fz8%2FRw9PLyymJAN7d49Lr0C5YZMw7uOCbu5qElJ5gJu%2F3tR7WNqSy1i1%2F8RYah1Eqn%2FTFeDYtxKNFEOz1gTyfkhqpMLzI4QRv%2BO8ApZrBloaWQau6zwvm6rL4%2BmwSFHj2MPv3fgcqSPrJd%2BZPrAXUBTtX7sCp1maShqYm9nOPp5li3C%2Fo%2Fg7hn2osKIwNwUqIV%2BEpMtPbcyuX2IVqPfxZ2V1WRTXI3sP%2FsiNDBq2%2BvmxpVIXOej9LPePggvJQ2WY4UqCPAK6VsZQKrG8ZmBCKhK2ddVjhfobgzt1%2BAyvNQGec%2B7gBEZKvHw1VQfU8ItmA386cMhcR6meoXKPIOTeW1oulmCQWYcvvwfUnw9U52UGe9idCqeAeR2xByUZXmHJlAGgF7uOVogW2HRRyhDp7q2z39ZR0CdTUw9FWMMHUzr8GOqUB%2FXSnFCqOpjcgVs1R5CbWYwB4wKS7m1y93oLDZVV%2BxrVcFAMmGnoLgfL1fYu%2FdKX2iY78RyooPsvpSWjx2Z71qIJNdwUb5AXayXF5LVNATNptFPPJjoFyWeoQ86ou3Aol85SNX6UuQDJabGUwz34VwPFSylVFcBGxWV0UI2s3yWwjK4RRt5g%2BwP2Whn1VnNVComBR92mYHITjIGyJ%2FEg8bUeEazU6&X-Amz-Signature=07402a20a9d2ee3b4779d7bb4bd86bb1a3e9ae5e3a930b11674a0eb95f46967d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDSK7A2I%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T110715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4xlnNUOxZZBwSAftr6quiAIDHq%2BK9z5Qz%2F%2FK9IwB2vAiBE8upF0M7LzyjYUmZDZCL%2FX203OzH4fvfLsJaeCHi3Ryr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMhuMlfBCCqHX9U2EXKtwDgyoqH8u99%2FaMXKOIxz1pfAMIMBy1AFYz7EKwgmxV0Jz3v3Mx5avMW4blXqYbb8lPn339GUDAd1qAg0jAKgCc%2Bs3J73oLVRcNoeXrkLCXAWsdJTNb3PTIQPAA%2FuyCAthzrdRpp%2FiQD7cin9WgtyNLlYOUoMj1gCHo2dmKrjtiWydM4VyxJZ6hEgciGSkECF5XNhIkQYyHX96CsZSYUQ2UXVJKGxEo79dG8TPsJi4XEWi8n1zEqpzryUMEZJ5frsTz1J%2FhdT4TVfmEnj%2FqSN4XDwva1xec3qD63DETfmLyl%2BqPvE0bGvsEczGbPkmhaYr4OZXLmcLt1dDqzPd%2FZ6WMOcFPPHq1qWeCuGPkGy2hlq3DjLnJYalbosXpCRhpPeQ90o8Mjc%2FJA9%2B3PWxnYLimrU%2FtzyjtZRQmj01l1N38qUNAOWG1tn767p6PO6YuRiwtvD8%2F5vezI%2FD5wXHPyHIMN0ButU3v58xVC6U7ZY1tQUZ%2F3oFSFIy%2FLlNsTTn1wDtlapwuj18dE1avjb75n%2B6ifvTao4ykdcbifru1h4ffKG1xUqEhwYzhlrt8%2BHQ%2BHQRZ1J4kT1%2FzY44wTqJ4GCp3HRAUkZjFLijyX72uMpvGeNDifmqzq0olI%2FiRp%2BAwwdTOvwY6pgGdAOzNBan6VfEaAfnL%2BbbKT5aSZT%2F29fDcuz3UvA3X3Sc8zZOe5QAdSCXRxisU4JDrz2RTJ8W8k2pTrNHjhLIs3ejiHlAO1lVkT6OBjZ8SKN6rsODEzhqscObcZRuXQXEweDfWoKM22zzS1VtbRjYJ1qLbNSakgaScO0u%2B1cBVkaZdTeTDxfRvI3t%2FfU4X1QEcx%2BOLzZA%2FPybkOPzcweNNrZazg9ji&X-Amz-Signature=38404bd99ecfa93ea825457f0b635b9f5f2fd3c16d9ce9b00cfe0909bced8c78&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTGRNDPY%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T110716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCndDccqOa9O8km9WO26vySgGTFM%2F0vGKIAG1aU8HXkowIhALkJdFc1MYcoL53ightVjjJGZc51yCLcP1%2FKldfVwcoiKv8DCFwQABoMNjM3NDIzMTgzODA1Igxu%2Fes%2F%2FIRP8ThUppEq3APxHMC9gO%2B9KWywfg2002kfoWClwnon2tu7Xuyd3xkxdMaAnii5lqko%2FE6w1ORdlLR4jL6NTvR2aIQsNM1BaJRhAWAPWNRgmCy%2FLhzLQL91tOYjxnqGHYY3gBecV2mUoZ5hC8OiGs78CUS7ey7TrI0283meIxqjyNs0jwpSdKPbWhlwo50DclNUdcEUPvLRtn1d21TpqGYxnqynY9RnrL5nytzSc%2BqORdzQgOncljRPhXiLo7znw6mPzyU2RkV4g36sLqR4jeW1sb%2BA8bVVadFFCT0lLy9Hnon4xWpII%2FKkiBz%2FxYtUN37QFDscTsfiP1wdxaNp4HkbLN%2Bg0GtPhbQPO75huPvRjDrMGMRT1SY3DnEIOZfb9LbkignoXoWoz7K%2BL8gm%2FwNIps7GPU0PdJF9wgoM%2FO9A7cqhNIMsH%2B9StWZQE5dOFjY5Sy4FziYV1Qe%2Bahyy1FvSi5nTMSjP210ejiA0n18%2FALpYbNzQ%2FCarOpz077Otk2OcjET%2By50RNO8pbJIJk67w5yURZRHiFXaDWQ07DAHg9ea%2BOTXKI0SOlSiMMrdJDaEy0M1dVRnESE4nMVCceVi7gINgcPvrWXDLmWJvlGdO12CqcIODrRTOzS9a%2BqfQBWt09a7eYjCc1M6%2FBjqkAeac1G1DHaV71YYhQyxEmzm5Q0UtHQHRwOcasomPhDbMBoE6s4RuYOuN5W61FeiIKApXTitnIQdOk%2Bjr8iN083z2lbSuLFrocNCuxa7OSA6XxW0VZLu1RmwjDg2bl8C8MTikZo%2BDSl3XIEyIkjiopOaw5vqOB%2BFZFqmTOLLkLysQu91hTvktRD59qVXiergd0UKcm1j0ofb1%2F5%2BMXfCAPI0YTCTj&X-Amz-Signature=b536dc529ab045ee162da1d9ca2c6973b2cbbd853f70784dec028bc321217006&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEYQNJSH%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T110713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyke8FdcgFH9lsySbeuFo8KIgQgiK0bQ4pIPxj1HT0vAIgDoMVBPV6%2Fw4AmUOIrg480C4KEmUT1VFhvl%2Baq07%2BYsEq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDA1i%2BSvS3yXNDRFYqCrcAxZ%2BUVfk7D8pOvN2cpPGX3vpDBhxiSEipI85NDv7TmGNw7VqVKa7RUpeAPKGF4Qh%2FvLViA7mg4n7JPzZShrkdrnVBiY6OOi3hP2o01IqdJhpjxZNAcK80SPR0aHHJDap7KX3cXcIN1Fvfui6oMNZdPrqGnoBN%2FoiZQqYOa%2B7r%2B9HvZNOGhco4cBzZGu%2FD1rpHvRftniXCMPSqCbA6L%2BEz74Fz8%2FRw9PLyymJAN7d49Lr0C5YZMw7uOCbu5qElJ5gJu%2F3tR7WNqSy1i1%2F8RYah1Eqn%2FTFeDYtxKNFEOz1gTyfkhqpMLzI4QRv%2BO8ApZrBloaWQau6zwvm6rL4%2BmwSFHj2MPv3fgcqSPrJd%2BZPrAXUBTtX7sCp1maShqYm9nOPp5li3C%2Fo%2Fg7hn2osKIwNwUqIV%2BEpMtPbcyuX2IVqPfxZ2V1WRTXI3sP%2FsiNDBq2%2BvmxpVIXOej9LPePggvJQ2WY4UqCPAK6VsZQKrG8ZmBCKhK2ddVjhfobgzt1%2BAyvNQGec%2B7gBEZKvHw1VQfU8ItmA386cMhcR6meoXKPIOTeW1oulmCQWYcvvwfUnw9U52UGe9idCqeAeR2xByUZXmHJlAGgF7uOVogW2HRRyhDp7q2z39ZR0CdTUw9FWMMHUzr8GOqUB%2FXSnFCqOpjcgVs1R5CbWYwB4wKS7m1y93oLDZVV%2BxrVcFAMmGnoLgfL1fYu%2FdKX2iY78RyooPsvpSWjx2Z71qIJNdwUb5AXayXF5LVNATNptFPPJjoFyWeoQ86ou3Aol85SNX6UuQDJabGUwz34VwPFSylVFcBGxWV0UI2s3yWwjK4RRt5g%2BwP2Whn1VnNVComBR92mYHITjIGyJ%2FEg8bUeEazU6&X-Amz-Signature=830b56ae136239efe33240818f2dd8d8c82b61cbeb99070d66e76c76c853f1f7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
