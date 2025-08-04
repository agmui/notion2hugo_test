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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQD3Y5F3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDPdmjG9a4vHPuygU2XIyfkQ59FQTu3nhIDoNHrZpmbcQIgPuaRcZoBK7ezs0y8WCWY5yjs8WOtIcMQd4A0ztoAPBcq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDIspc1PyNPUDmIid2yrcA4HFGYaQWHftKUYwP9OhVcja8Ao1%2BJop3pBcKd6Bm4ZfB9AxylqvYHP17h8LP9S%2BVVOqL%2BPd89v1rWqEKOQP6057PIpLRsumX9IsAIqilm%2FaXnzVbVVBWAijVebScfAOTGU6CFq%2BfADRdhVWT9ErpcPenUbbRhmNassWOiyY8SD5DRv75VQumU6LRAhakPMXJ0yqC57WxBbQvD7ObL7o%2F%2BT%2BdteieM%2B53dYjKRpYBWcR3%2BBtX9bzdnPKRBNhuGhA2hUQFF03q9eERAysvYcjcnDauUxNxHLmzhrNIjBmd4nK6JqdGjY23I%2FKkDyxQheSKBs%2Fpwx68z%2BSK3v0Aq4Uvo1SvNZYv4Vjb2QSPCsfrWi8LNeaRMb3U42qI4aualDonc8MEcpuuuCf3hRsOP%2BIK7qvL6C5W%2Fzu%2BeSasxLSSp7ngANAC7hu9ISjB55eMQHc070Yzz6w6b3u7fVVjQjgt7vzj%2FXpOjykYutyyV7l4T96dW9UHjE%2BHzFopcL%2FMTesCsgMNOfDOUF2ZbQWcg%2BVShe5xpoAgh32y2cmB3orBkMe76VHq2TxlSfUhDKmkzWiF%2FM0lN5fNy0lbkAPFsdHmjSS%2FgcxkED6ED0T1s4g%2B8v3TipnzzKgPp8wmqm%2FMIr0xMQGOqUB4o4CnpWyCtuUbEDJJzwL8TigaQszi0mptTVtGoHH8WvIdaGE6pXSQ4gRZJmjHwf4bgPdFNClzVBV7PkyBA2xlzs2IM2oUYpDFzPs6tucXLckKT2uTqtw5POWptql9Q0Y6lS0Hv1cLgB1f0Cj4%2Fgd%2F1TaI9EETqEGZiiCtkOrLUHuDqoD3d99FkEWGa1Vbe8HYAJB6Yh0%2FBzFAfyMFLvFH%2F8VUJZp&X-Amz-Signature=a7384cecae3c8fdf81c5bec05d7267a643443e5eab80fed184f08329d2db43b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQD3Y5F3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDPdmjG9a4vHPuygU2XIyfkQ59FQTu3nhIDoNHrZpmbcQIgPuaRcZoBK7ezs0y8WCWY5yjs8WOtIcMQd4A0ztoAPBcq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDIspc1PyNPUDmIid2yrcA4HFGYaQWHftKUYwP9OhVcja8Ao1%2BJop3pBcKd6Bm4ZfB9AxylqvYHP17h8LP9S%2BVVOqL%2BPd89v1rWqEKOQP6057PIpLRsumX9IsAIqilm%2FaXnzVbVVBWAijVebScfAOTGU6CFq%2BfADRdhVWT9ErpcPenUbbRhmNassWOiyY8SD5DRv75VQumU6LRAhakPMXJ0yqC57WxBbQvD7ObL7o%2F%2BT%2BdteieM%2B53dYjKRpYBWcR3%2BBtX9bzdnPKRBNhuGhA2hUQFF03q9eERAysvYcjcnDauUxNxHLmzhrNIjBmd4nK6JqdGjY23I%2FKkDyxQheSKBs%2Fpwx68z%2BSK3v0Aq4Uvo1SvNZYv4Vjb2QSPCsfrWi8LNeaRMb3U42qI4aualDonc8MEcpuuuCf3hRsOP%2BIK7qvL6C5W%2Fzu%2BeSasxLSSp7ngANAC7hu9ISjB55eMQHc070Yzz6w6b3u7fVVjQjgt7vzj%2FXpOjykYutyyV7l4T96dW9UHjE%2BHzFopcL%2FMTesCsgMNOfDOUF2ZbQWcg%2BVShe5xpoAgh32y2cmB3orBkMe76VHq2TxlSfUhDKmkzWiF%2FM0lN5fNy0lbkAPFsdHmjSS%2FgcxkED6ED0T1s4g%2B8v3TipnzzKgPp8wmqm%2FMIr0xMQGOqUB4o4CnpWyCtuUbEDJJzwL8TigaQszi0mptTVtGoHH8WvIdaGE6pXSQ4gRZJmjHwf4bgPdFNClzVBV7PkyBA2xlzs2IM2oUYpDFzPs6tucXLckKT2uTqtw5POWptql9Q0Y6lS0Hv1cLgB1f0Cj4%2Fgd%2F1TaI9EETqEGZiiCtkOrLUHuDqoD3d99FkEWGa1Vbe8HYAJB6Yh0%2FBzFAfyMFLvFH%2F8VUJZp&X-Amz-Signature=ac45f1c25345acda28b784be9d89de0e19bb156faedb3f29bb2425d5abc82e44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQD3Y5F3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDPdmjG9a4vHPuygU2XIyfkQ59FQTu3nhIDoNHrZpmbcQIgPuaRcZoBK7ezs0y8WCWY5yjs8WOtIcMQd4A0ztoAPBcq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDIspc1PyNPUDmIid2yrcA4HFGYaQWHftKUYwP9OhVcja8Ao1%2BJop3pBcKd6Bm4ZfB9AxylqvYHP17h8LP9S%2BVVOqL%2BPd89v1rWqEKOQP6057PIpLRsumX9IsAIqilm%2FaXnzVbVVBWAijVebScfAOTGU6CFq%2BfADRdhVWT9ErpcPenUbbRhmNassWOiyY8SD5DRv75VQumU6LRAhakPMXJ0yqC57WxBbQvD7ObL7o%2F%2BT%2BdteieM%2B53dYjKRpYBWcR3%2BBtX9bzdnPKRBNhuGhA2hUQFF03q9eERAysvYcjcnDauUxNxHLmzhrNIjBmd4nK6JqdGjY23I%2FKkDyxQheSKBs%2Fpwx68z%2BSK3v0Aq4Uvo1SvNZYv4Vjb2QSPCsfrWi8LNeaRMb3U42qI4aualDonc8MEcpuuuCf3hRsOP%2BIK7qvL6C5W%2Fzu%2BeSasxLSSp7ngANAC7hu9ISjB55eMQHc070Yzz6w6b3u7fVVjQjgt7vzj%2FXpOjykYutyyV7l4T96dW9UHjE%2BHzFopcL%2FMTesCsgMNOfDOUF2ZbQWcg%2BVShe5xpoAgh32y2cmB3orBkMe76VHq2TxlSfUhDKmkzWiF%2FM0lN5fNy0lbkAPFsdHmjSS%2FgcxkED6ED0T1s4g%2B8v3TipnzzKgPp8wmqm%2FMIr0xMQGOqUB4o4CnpWyCtuUbEDJJzwL8TigaQszi0mptTVtGoHH8WvIdaGE6pXSQ4gRZJmjHwf4bgPdFNClzVBV7PkyBA2xlzs2IM2oUYpDFzPs6tucXLckKT2uTqtw5POWptql9Q0Y6lS0Hv1cLgB1f0Cj4%2Fgd%2F1TaI9EETqEGZiiCtkOrLUHuDqoD3d99FkEWGa1Vbe8HYAJB6Yh0%2FBzFAfyMFLvFH%2F8VUJZp&X-Amz-Signature=9ca9ab47af6dc73006f700e52aa9b184af9342bdf1a01ce61987f205ae1a58e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6FPZA5O%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCuve70ilCPcXeaQ%2BvNiVLXIohtoXbjhlWnYdaQYEGltgIhAMUVvhjyvv3KUq2R3aZrVBrNM7wCy1ToCNpLf1HGmuLZKv8DCFAQABoMNjM3NDIzMTgzODA1IgzorBQGeZrq2ph2GJIq3AMyk0G4ziTeHAQnRq9cBOGV4TxQqBPlvn51f2djMmdW1g7vkEjkSPt%2By3tG5A2sG4Tq50DKNb%2B7ODWx25fusR0JPzeWCMi8iR23FOyAWU1PMHKKv0%2BbpvHFyTmyTx%2FFgcoCu99QiPt6hhXfTquvNU1ouWYWq6auTNc5q%2F%2Fb9nvehmJ0v8zWmMEFKOEq02Z3dPL5%2Fv2nkmPo36jBrfyi74vUFF6pWcfmiPpjFn3ZBAnrPDoF%2FkcgpHPV%2BwylLXewCwrDyieFLbehkoprr5l%2Fklmw6vHvlph2h1aBuw6j%2BdL1QpYwUTH30p2P4GvCFgNCv7IGmQwWYAk3CksIOh0jHXS6Z9ltnjmhQ03cjQ7lRhNeWXbjuggC5n35qP0uwhaDqBEYs%2FN1cweT%2FxLUWV46goM0D7kfJ7WoZUSshFdciOrri03xLu%2BGmqMyn4IxQhr%2FbEd0gHFyo45tVTuIJv0XU%2BNU1bbNFwcXDKA6DvMo6H%2FGn3AWNfCjnRVdTzhH0SneqU0y%2FPfBeT9Hy7JpZU5KGVqRct%2BH5Hfc%2BF0J3FJgZ%2FwV9551zX%2BbQHIdRGPQIGQVk6Z3sKciRKEnwgviGt9f64mbIifdLD6h64%2ByUreDeVH5zIfWbuPDweXG%2FrYrRTCp9MTEBjqkASG1fC0JO6ZrosLXmBrHru7ofeORr6Z9tDhbWgc2U6GVNl9Wu5SrYFmjNbiXrZFgf3KZdw1Twlbvgrh%2BNvtMH9ODddDhxUuysJmxvhcgsiFtK4orFuSsWAMHxHjDNkItwutSPhXW%2FspLor2mPviCLPUyjBuA6zMC%2B96AVYpjvXF33q8yYNFWP3x5abq9fvgX3PXKgaDrUeSSbcWZD6L4BRHRjrzZ&X-Amz-Signature=bf59afe414b2249344c268d7be07c28cb5c8b9416891568d2c82f7953fff7486&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EBD764P%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIHsAhTIoK37XxhTVG1VZjKDDDXejL5tJ0cZq8DUIsclfAiBJt3PnanGlXp8qgl5eQFyCRr6yuwpbucnh%2B4p8Cu43dSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMwHg4dsPwyuJuyOxTKtwDuz6c8Xu9eh655q30SVsAWYaKNWmVjPVDS1zNEgqoXshOLPpPFZtiJ2FKIWdGBFiytVRiMxmLslFUEmAlzWJFmaxsnpexIGEzYbN1SUkYg2MgSpMM31JKD4AyVp8nRgsfYkGMqMtRy2eyFm5SmS7paq6HxmcVJBewP2%2BS%2BFFUsWw05pa7E7UfLm6hp61Y8gFDjujXyz0UlqiZnDuat9RpFJF6mxA1WBvuRfnkLSVofP4K9mTYhAQrzD5%2FuFErNLcldTuH%2BBNM0%2FBM%2B8uW9D6EJ9Tcp9f3dZk4f5v9vG9lPFDlGnjwcoCPyhkysrM3mAK1HXhunNhsDNQOtvGGOJklyclRgzEkaw9MoGiZAatUbnqTmTvKh5yP7ro%2BkyYJlZyXcqm43KmrnOmKkeKiiQ92N1VjZULkPyUBRKsO6JNw9cTXOIsV6VCMSMnWtyVgVDn6cZ5CoGb6Kyo0QcCH1T6Ig0WZXZDQcoqvcwMvyEwfNXAVfrubNXXpjuyz0g%2Fmzgyooos2sxQLlrKv4iLTZ5uU1uGlYYI5%2FyRUzUfFmEoS5PPYOeo9nfA1%2BQA950mNlU9mpF4788TCwsVlhwO7NZJVLD%2FIqIyMH047uZkWk%2FSi%2Bq3T%2Flg15r6Maurrdc8w3vTExAY6pgEX0ywZ5p53TeBIlUSI7EX4rrU6Sa0%2FMvSb84xJ0W7bgsRElHL%2Bo%2Bm40LsSyK1J7sMg2m68NzaTBy%2FEscKvUq7Gcz80DBtLN4%2BEMBrKV3QJOBJoeJPo3NISJDCAoaE0vbfvn6zSPmzVtKApaDWwuvpRPjy2Nx0Y3nJFul%2BiseJVrM8c6d35vx13j77%2FuyKdpdH2D77O5bNuNy2Hi3jNLyk1svaxpYVO&X-Amz-Signature=75b85e7cbff321c6f4971ff559019b00341ed0986066661354af1bf1dfbfbb42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQD3Y5F3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDPdmjG9a4vHPuygU2XIyfkQ59FQTu3nhIDoNHrZpmbcQIgPuaRcZoBK7ezs0y8WCWY5yjs8WOtIcMQd4A0ztoAPBcq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDIspc1PyNPUDmIid2yrcA4HFGYaQWHftKUYwP9OhVcja8Ao1%2BJop3pBcKd6Bm4ZfB9AxylqvYHP17h8LP9S%2BVVOqL%2BPd89v1rWqEKOQP6057PIpLRsumX9IsAIqilm%2FaXnzVbVVBWAijVebScfAOTGU6CFq%2BfADRdhVWT9ErpcPenUbbRhmNassWOiyY8SD5DRv75VQumU6LRAhakPMXJ0yqC57WxBbQvD7ObL7o%2F%2BT%2BdteieM%2B53dYjKRpYBWcR3%2BBtX9bzdnPKRBNhuGhA2hUQFF03q9eERAysvYcjcnDauUxNxHLmzhrNIjBmd4nK6JqdGjY23I%2FKkDyxQheSKBs%2Fpwx68z%2BSK3v0Aq4Uvo1SvNZYv4Vjb2QSPCsfrWi8LNeaRMb3U42qI4aualDonc8MEcpuuuCf3hRsOP%2BIK7qvL6C5W%2Fzu%2BeSasxLSSp7ngANAC7hu9ISjB55eMQHc070Yzz6w6b3u7fVVjQjgt7vzj%2FXpOjykYutyyV7l4T96dW9UHjE%2BHzFopcL%2FMTesCsgMNOfDOUF2ZbQWcg%2BVShe5xpoAgh32y2cmB3orBkMe76VHq2TxlSfUhDKmkzWiF%2FM0lN5fNy0lbkAPFsdHmjSS%2FgcxkED6ED0T1s4g%2B8v3TipnzzKgPp8wmqm%2FMIr0xMQGOqUB4o4CnpWyCtuUbEDJJzwL8TigaQszi0mptTVtGoHH8WvIdaGE6pXSQ4gRZJmjHwf4bgPdFNClzVBV7PkyBA2xlzs2IM2oUYpDFzPs6tucXLckKT2uTqtw5POWptql9Q0Y6lS0Hv1cLgB1f0Cj4%2Fgd%2F1TaI9EETqEGZiiCtkOrLUHuDqoD3d99FkEWGa1Vbe8HYAJB6Yh0%2FBzFAfyMFLvFH%2F8VUJZp&X-Amz-Signature=280886f26b7eec4ceae66f3abf7428cbf96f6300e0bd6c130096b2ad6f9bf7f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
