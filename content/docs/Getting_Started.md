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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH3CNXPZ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwHffqvm0EOT6CCq%2BDJEU4wCNJtHOGZehiFtfRZKPygAiAuKYeaFkAbm93oCKxBEOK3qH7dryX1QdP9DC%2FBd8Xzfir%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMBwU0BWhG%2BQfErpCZKtwDAqqdFayIftbzQxFWo50sDnrjgE0fkaJR68n%2BNFd2Y1AnY1NrHIgGfLOnFJJKE3S7trOolA4Q52WWjZMEFsaxXDLwK5j7GZOVdz%2FRWVyMvxS%2BVOuKC5X8z4XGeP5laMvnRKsRHj36WNuzEPIVzV5l1DwTiR5cY9jnv48hm1zYy7NiPDav1Ba6DLVSf%2F5d6VZi1vaZuAzAQf7ezZ422SVaJlRqBYelZPKp0%2BT2U80ssEhbrkkpZ5twl%2BvnYeoEHzPLUywG5H%2BU5XeGS36yRiaJLFPM1NqkrRfZOeXWDko2B1pJ6ydH8hBB%2FUIDlBn%2BlBZhKquTnWGEUSE6a9wVUzI4oiFLyg0JtP6F1RQN6pcuMNZ2PAgM30JT31Sn877zxYPIIg3ChnUbZdxHy9C77PYdoYbImPjuVJSpTyAQFuKi1YADRAI5auMmTrSuLFJrlIb8ir39oQltjtzPePupD7T4dWEgfShZzpfmQ%2FEvgQidfIUEEC2Tl3EUCnqofl6wZxkrTYooly8NQs2NFmLF8afeUn%2BaJvVRLGBAPRKrrIX4KHsMo2EdG3eKLFDQqqNneQNMM7RJAzqMRwwdXe%2B6pO4r5hfCUlnz2Od3LC6RA5F09aHokIBcKNLa%2F5qi8AAwpO22wAY6pgEn4TGjcQ3JvCE8109tl9t6%2F84CQBGn9c5lcZR4QMNJQhzQghnpmUolnHXCwQZ2r7R4lL2EUqDP3hwgnKBA8VnvrXJ9IX4%2F2Jj2dX7EWzSnWZmwjAKioyxiRcN%2FJPhup0wAALCFKBMIAAjfbI9wxWe7lUuPbbAt7V0Kz2U8Df0bDgVzBthGsGu8ogIMmsuexfkqfIiT4Y7zeRbhpGdWwaMNSbvvHgmL&X-Amz-Signature=a4dff66d0adb45a052ee9a46311f74fc620774e0ecf36bb83f18d2764143d282&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH3CNXPZ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwHffqvm0EOT6CCq%2BDJEU4wCNJtHOGZehiFtfRZKPygAiAuKYeaFkAbm93oCKxBEOK3qH7dryX1QdP9DC%2FBd8Xzfir%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMBwU0BWhG%2BQfErpCZKtwDAqqdFayIftbzQxFWo50sDnrjgE0fkaJR68n%2BNFd2Y1AnY1NrHIgGfLOnFJJKE3S7trOolA4Q52WWjZMEFsaxXDLwK5j7GZOVdz%2FRWVyMvxS%2BVOuKC5X8z4XGeP5laMvnRKsRHj36WNuzEPIVzV5l1DwTiR5cY9jnv48hm1zYy7NiPDav1Ba6DLVSf%2F5d6VZi1vaZuAzAQf7ezZ422SVaJlRqBYelZPKp0%2BT2U80ssEhbrkkpZ5twl%2BvnYeoEHzPLUywG5H%2BU5XeGS36yRiaJLFPM1NqkrRfZOeXWDko2B1pJ6ydH8hBB%2FUIDlBn%2BlBZhKquTnWGEUSE6a9wVUzI4oiFLyg0JtP6F1RQN6pcuMNZ2PAgM30JT31Sn877zxYPIIg3ChnUbZdxHy9C77PYdoYbImPjuVJSpTyAQFuKi1YADRAI5auMmTrSuLFJrlIb8ir39oQltjtzPePupD7T4dWEgfShZzpfmQ%2FEvgQidfIUEEC2Tl3EUCnqofl6wZxkrTYooly8NQs2NFmLF8afeUn%2BaJvVRLGBAPRKrrIX4KHsMo2EdG3eKLFDQqqNneQNMM7RJAzqMRwwdXe%2B6pO4r5hfCUlnz2Od3LC6RA5F09aHokIBcKNLa%2F5qi8AAwpO22wAY6pgEn4TGjcQ3JvCE8109tl9t6%2F84CQBGn9c5lcZR4QMNJQhzQghnpmUolnHXCwQZ2r7R4lL2EUqDP3hwgnKBA8VnvrXJ9IX4%2F2Jj2dX7EWzSnWZmwjAKioyxiRcN%2FJPhup0wAALCFKBMIAAjfbI9wxWe7lUuPbbAt7V0Kz2U8Df0bDgVzBthGsGu8ogIMmsuexfkqfIiT4Y7zeRbhpGdWwaMNSbvvHgmL&X-Amz-Signature=299f3ae691563a8b1e53681a14ab3b1b3e09e08fa0665ed564aed98044310e11&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YQL4KVS%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPCuJCJz7igpjnOa9q%2BSGZfP1soT5dVAD6lRGsD7gcbAiEAsUsgXSK5Iexz5Mj6kwQ73tQ%2B%2BZjLop6sDuQ9Ia0kNVoq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDBcb5sBQ1t1pvLz5bircA21j%2Bbs%2BROV%2BQfkptDidPUqS%2FbnhDcZvZ0mMCJyhRkRQIp3puNfFX9i2cWDO06cOjgad06DU8IFMudwnDN16iGAijn2HKXmdzXdjh%2BoO%2Bn7uBWisWk9vPgMp9e%2BGkH%2BwZB2FsQ7%2FqH4eQnnwY41ukZ9%2BgVrRanTr2ElhnxrlWg21ObGnHbjqhVjoTGnS2hk67FL5rpt9tMnn0%2F%2FLkCuNNmbVkw6Vs%2BtapWacJmSX1jSl7IhluOZPNcgtEUGD4HzV5F29Qrl4VF1V30ynVWxEz6taXVYTwU8bPMOAjVEtxBZAJOnxhNfxhEe5AYG0j3oZ6aPHa7cD01EVrpjJkxGj81VoIUXwng2bNwfEe2cyBBQ5E9ex6G%2BOV9mRuoLUrq7ocJAfyoI%2Bm7XpvVwzPAhvWgm%2FWP0LYh41gtVL8pOMLry3j0pTQ1wib7URZMu14S9WO6q3nWG4pM0lHaQ8V7X6c05xt%2FLfy4WcpBQXlfUAAJelzTGZ9MhJodQEnwbSqqrThEJiq0DgiLkvYDuRME4PGZcr7OGcAWabD5AH88Vl0HcS3Ts5KSMIsnVL5UeYtzsZYKWECqQvdePr7Z%2BWvNuOvz864nWcB3sVt8GzC7LQM8ZkIDZWLVe6M0bJ6JmMMJXttsAGOqUBSq6HLEgHCmO7pOHa63bOg7VeYmhSH2aqozmNd9%2BIjLAdnvmD1SAsWNrkXesYnK3el3A23LEGznke9LQux8aUHu3l%2FArOZONJcMb8Z4MoRDEA%2BLFYSjVNtI%2FGu3ev8%2FmBEJL2jyrkKB9%2FjvsjsE9bgWhVttzYa5onplaFhyiR1tDwzy0RMUzV6%2FdlILC%2FdwTrrHCI0V%2FSwdV%2ByeayVK77C26zN0wZ&X-Amz-Signature=6911bdce501d9f0dc50c6da40369bd96a7ba2f5d037948ca0720cde056ea06d3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3OQHXEJ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFve%2BPKeaj6UJ31VMYHz3Y1xpS8lf3UMiA0Vokw%2B2ubVAiB3GYJemyoISd6oZJvOLOM8NDcd2EshO22mgqGiq75O5Cr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIM9ZXhVlrPOKkXk%2FqaKtwDwJTWUaXj4WGeIsRC7PKnxghpXaQzfjPCYTt24lDVIN9lJHRIXIBg8TUMOZGiGz8sCUMXtomWynLWoz6fbEA4dx8Z1MAF3%2BeJbP7ON3oL0qXR1AYeYgO2DhMfyBLff4BGF4DxDsk7td5hvm1MlD6CandIJVKGj42JduCVA4ODFSxeMlvQnJhRoNPQNDhSaREMtSBvIfOglwTLaxu2ZNGVhh11jmG8A4IjK6STNK5OGg9M5KNmJfdwvLiAHPIExqo8Jf1VOWfMYxupY%2BPXSlNISozlVfTtKouYJykUCg8t61x%2B2LZWC8SgC%2FagpqNEaL6rIvXmqxBYKQLi%2Bsi%2BteHVDP3M9jZIbjnxLP15Ig5IULBB1IX1diRj%2BYPkBlKSrbfRnuhsUb%2Ff8YC7906a%2Fjm956vj%2Bm4vSkpk47%2BusvafmYioXz2KbRz0MiBRtEW4gboQJiod4J%2B95JpfTz9MBrvtVspgXbt%2BpgPTlVlQ3OS7A6im8lR4CoL%2FeRWchqqAlqY3Q%2FDutCkDD6qp2Oq%2FwSef5zxVpcLfPr74MwnGZ2y1v4U8WNyLfsar6b3ebVApJM80BTJ5LljnTlehnhk%2BzmP48eP1Y1DKr5W7KztzVkMjbKU0GPuInb4%2BahSBNwEw8ey2wAY6pgHHQ6JpVs%2BQiQqp2G3ZLMnk9CVTK9VLHhIzLV1Xr88xUF2iE66SUIyyAYJT9h0If4DSzFUgdB4bwPOqFv0IA7t1HQLs7GSFQyNJjo1wvZYVsm5ElqSx3SEHBs5%2Fh3enAHc9TsSO3sLte3ZtCEg0kntKWOJ9tRKZY6mAp2ZqnqmBCsYqpf5ACXyqxMrCeg%2FrffGbKZE18bw7wJF4hQb6SNo%2Bu%2BUtKR2v&X-Amz-Signature=bef097676507d327eec5e9ac0b3c3fa7216051caaaf693d00a3bf68b36b92826&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH3CNXPZ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwHffqvm0EOT6CCq%2BDJEU4wCNJtHOGZehiFtfRZKPygAiAuKYeaFkAbm93oCKxBEOK3qH7dryX1QdP9DC%2FBd8Xzfir%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMBwU0BWhG%2BQfErpCZKtwDAqqdFayIftbzQxFWo50sDnrjgE0fkaJR68n%2BNFd2Y1AnY1NrHIgGfLOnFJJKE3S7trOolA4Q52WWjZMEFsaxXDLwK5j7GZOVdz%2FRWVyMvxS%2BVOuKC5X8z4XGeP5laMvnRKsRHj36WNuzEPIVzV5l1DwTiR5cY9jnv48hm1zYy7NiPDav1Ba6DLVSf%2F5d6VZi1vaZuAzAQf7ezZ422SVaJlRqBYelZPKp0%2BT2U80ssEhbrkkpZ5twl%2BvnYeoEHzPLUywG5H%2BU5XeGS36yRiaJLFPM1NqkrRfZOeXWDko2B1pJ6ydH8hBB%2FUIDlBn%2BlBZhKquTnWGEUSE6a9wVUzI4oiFLyg0JtP6F1RQN6pcuMNZ2PAgM30JT31Sn877zxYPIIg3ChnUbZdxHy9C77PYdoYbImPjuVJSpTyAQFuKi1YADRAI5auMmTrSuLFJrlIb8ir39oQltjtzPePupD7T4dWEgfShZzpfmQ%2FEvgQidfIUEEC2Tl3EUCnqofl6wZxkrTYooly8NQs2NFmLF8afeUn%2BaJvVRLGBAPRKrrIX4KHsMo2EdG3eKLFDQqqNneQNMM7RJAzqMRwwdXe%2B6pO4r5hfCUlnz2Od3LC6RA5F09aHokIBcKNLa%2F5qi8AAwpO22wAY6pgEn4TGjcQ3JvCE8109tl9t6%2F84CQBGn9c5lcZR4QMNJQhzQghnpmUolnHXCwQZ2r7R4lL2EUqDP3hwgnKBA8VnvrXJ9IX4%2F2Jj2dX7EWzSnWZmwjAKioyxiRcN%2FJPhup0wAALCFKBMIAAjfbI9wxWe7lUuPbbAt7V0Kz2U8Df0bDgVzBthGsGu8ogIMmsuexfkqfIiT4Y7zeRbhpGdWwaMNSbvvHgmL&X-Amz-Signature=d2ed75f934dd8db688536beb3c3c5de0f2542a37da898b7473bfae3c2cd4bffa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
