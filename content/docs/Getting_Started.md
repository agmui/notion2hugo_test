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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMQZFOF%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T061211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOHcTrTlHKWG09Q6ULBE%2F0ytW9hjnTb2RNdG61oWoUqgIhAKncpfBR1kEV4R6mGjIsVLivJ6PcAD6WoF2Cu6jNp549Kv8DCG8QABoMNjM3NDIzMTgzODA1IgxV%2FIr0CDzc6QEtXYwq3AOQJkEN7Tu%2BdH8Vd%2B3w5OWqQ7gm8Ge4xgZYi6JVRtdTazmryulVb3aFpBWRJ4QhqMwNzTX4luGhRxfDFvJGNqZbdsnU3jfBM0%2BLAgMTNOSLlvmBbd2BE6wijP5v4SzzuFbEAwMmyc3nsdQR6Kglx0BW9Mbot8iKVfVnYcLGeOcP7Q8HVFEny6%2FYmR6Ighl96gQhoYPZatm7nKksREHRmsx%2FRCI52jOEXDUqjWDG20gS3BmeU24wjWbkNqG2dokLbAdh%2F1bjrTjJjo3PBtNNd4t1gOf6bdNpfWJ0n%2BwiQugTuEny3nRJFnH0hFXTR7ti4WpkvaMSjXmwD3FPViRnShqQtLx4WULcqXUfVI6p73o3P7IfFzBf6DEtih9KMS7jJdSoItxXaMx8BCxcLYkbHAcz9jg61yVPgr7k7j0t7MX5q%2FaYy58OZir%2F2ZKD2WVsoHJz5vrAjy32GCVWqukqEVmn4OKKBd4haL3KiYjolljk6eubJZqEEY3YI%2BF4p2RLctmKpM%2F%2FMRJIkU8Jfi%2BBUGjV%2BU%2BCiHD3JmlCikJdHvNayygROrxMBliegODlfcYmRcfrHUE0gmUGo4K8MTfMn%2FNXrhxgFQFKrQEWH8y8CL1GzVgGRDnIdaX0KFZXsDDo7NK%2FBjqkAXpZUQiw%2B9IkqY47jnubwHscqxDN9f5sEWrgdSi91elQpZ9wh5IYqADXkvFHmEYkL0u7pChWUCoTwrb8W%2F6kbp6cWc8M6GGS2rbl%2BtSZgJLy3Fe5YxtoNegkUs7pmFoqScqTiH85vLFRgklfTTxsgHiIcb4E18I%2Bw1Ia5LQlt%2BQhBHUFKJTr8DBH%2BEvAJ%2FgxbDB3OeC6DB6IdLtUwDMTw7%2BYbmZI&X-Amz-Signature=c1ccb7e7db75a2b87d0af5b909ce61cac99e2332709218cddf84ef1833e6d621&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMQZFOF%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T061211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOHcTrTlHKWG09Q6ULBE%2F0ytW9hjnTb2RNdG61oWoUqgIhAKncpfBR1kEV4R6mGjIsVLivJ6PcAD6WoF2Cu6jNp549Kv8DCG8QABoMNjM3NDIzMTgzODA1IgxV%2FIr0CDzc6QEtXYwq3AOQJkEN7Tu%2BdH8Vd%2B3w5OWqQ7gm8Ge4xgZYi6JVRtdTazmryulVb3aFpBWRJ4QhqMwNzTX4luGhRxfDFvJGNqZbdsnU3jfBM0%2BLAgMTNOSLlvmBbd2BE6wijP5v4SzzuFbEAwMmyc3nsdQR6Kglx0BW9Mbot8iKVfVnYcLGeOcP7Q8HVFEny6%2FYmR6Ighl96gQhoYPZatm7nKksREHRmsx%2FRCI52jOEXDUqjWDG20gS3BmeU24wjWbkNqG2dokLbAdh%2F1bjrTjJjo3PBtNNd4t1gOf6bdNpfWJ0n%2BwiQugTuEny3nRJFnH0hFXTR7ti4WpkvaMSjXmwD3FPViRnShqQtLx4WULcqXUfVI6p73o3P7IfFzBf6DEtih9KMS7jJdSoItxXaMx8BCxcLYkbHAcz9jg61yVPgr7k7j0t7MX5q%2FaYy58OZir%2F2ZKD2WVsoHJz5vrAjy32GCVWqukqEVmn4OKKBd4haL3KiYjolljk6eubJZqEEY3YI%2BF4p2RLctmKpM%2F%2FMRJIkU8Jfi%2BBUGjV%2BU%2BCiHD3JmlCikJdHvNayygROrxMBliegODlfcYmRcfrHUE0gmUGo4K8MTfMn%2FNXrhxgFQFKrQEWH8y8CL1GzVgGRDnIdaX0KFZXsDDo7NK%2FBjqkAXpZUQiw%2B9IkqY47jnubwHscqxDN9f5sEWrgdSi91elQpZ9wh5IYqADXkvFHmEYkL0u7pChWUCoTwrb8W%2F6kbp6cWc8M6GGS2rbl%2BtSZgJLy3Fe5YxtoNegkUs7pmFoqScqTiH85vLFRgklfTTxsgHiIcb4E18I%2Bw1Ia5LQlt%2BQhBHUFKJTr8DBH%2BEvAJ%2FgxbDB3OeC6DB6IdLtUwDMTw7%2BYbmZI&X-Amz-Signature=7d7f3b6d163fb65c8ef494e8c87febc94f8f234bb7728bbfa4b25663c93500f2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCK3VSQY%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T061214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5roSsNwa3Mb5sT3aPgKnm0RpK3XrakGG8a2Dho0eeXAIgJD73csZ13v2GSLMd4%2Bg49gS1pZiuNIsuxCPr3byF%2BbEq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDApeTImPyt%2FroxuZYSrcA0B08yNwDif5HWzMfS%2Brq0U9v80BEZWFCgugGCrLZfDZ05Qbg268om4rWMgmxPDX0ZpxHaMcvGHdAxbYKZk%2FasubbI%2FGH22tGJMFeulENwKbAaSZU4g8RV5%2BeE73XDDQ%2B1kfADgjGNmqm1H5ATW9tOw%2F2EhE%2BY9a4mZ6L4eNnbcy25918Vrfrib27CraYJ2WGz4ToJ9wXdMo8med4yy%2FGuykCvxUkwvfyJogBNhds8dOnCjHrE0alqAHiZ55Bc%2BGc9dVHgJAumx0rGHiIVAUDr5Y5dwu%2Bw56wYK1HCvpS9m4E0zFatSphGmNQ7tP40isNk7OuAtY850QvA7zvxyIk%2F%2B5KaPwTpELz8HZ8xPc5V3ChgokmkXK81eLdZBuVUgw2OZ51v7TV1hQCgGoHbDAdJLDS3dRDjlq2NrjDKEzT1Q%2BqvD6qpKmnuyybiFnbselTvTxdygX1pBrExxMzFbK6YV%2BEUqKwPx%2FQXrR018VGp3gnXFjSfsIicKRBR2z5w%2Bynp8MKTvRShvaQ6o4d48Vd3MZIvNIgYWMTzlzk%2BBRbl2nVc3kfdc%2BrOQv%2BP34NNN0RRErzdyZDUqJYJ%2Bldc2wYPfyrM%2F7VVezR%2FoZ2HgQKxp8kg4G2tg%2FDcs2C6Q2MKjt0r8GOqUBT4iNsFVkagCyxTK7RDAyDRKvvaN%2BuD9ODpouxriZ8LrIpC%2BgP7bRxYjhzKBZz3Er3qbZa2d5%2B88RAAu8FYVdUtBr41a4IxSo82P8m7S1c%2F%2FW0TXN6kXlHZ7yY3PUpDj4uT1TkorV%2Fn3ldnigtYey%2F9f%2BvIbk49lNLE3iAzNsr5CzavlB1cZVItHr9RmS1TkdHsqbAPkHCWW5ZvMOP7xKoNHABsOI&X-Amz-Signature=ec984d721e30c9f3eab1c8e8c88e724595fa915974d4c5acae4f9d8bd0dfbb96&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHIQEYYP%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T061215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdRiypbHfqXcjHj1VUXW%2Be5zjr4y1CE2Cg4kN%2F7dXlBQIhAMyOqT7TY7upDpcS9m303ZJZ%2BAvFX2aggF6Xh%2FPasOd3Kv8DCG8QABoMNjM3NDIzMTgzODA1Igw5fsxu5CZq%2Ft%2Fo6Mgq3AOWjLkrahr7na8ae0ywyb01Q4Z%2BI0g1y9L5p%2BLjXnF7yZDn5vDxfop41p7DPIwP0PriO%2B3ubT6wnLsTLLlheofI4i0lDzWrgwxegxQhf%2BAW%2FdN2mmtkaOWY4ys3Anmm4%2FtPIs5s6csdJE20mdCJ6DBpEaZWuXMi38v1C%2BmrNvKDFi%2B529EtytaM0%2B%2ByiUGEGONRiCkN%2Bur5cj0FT5sXAiPjx2IbiwqoHWnnw%2F%2FgAbxZFtDtJxZQzR9qj3i6di%2BoOykaIUlfwKWlCQOzexV2PwbzRcTRBz2%2FgKbCjelUHd7S96iMSA6F1Y7e5g2OTN4S4JEEs55k3oSxnHEqugajZD0vYYXcliWKC3zE6%2Fz0vDW1nm6SY2pMH3iuWh7HRh7qMtBH1C%2FPQ5c6faFh%2B5HCIcMmv3Kd8uo%2Ff2mNPR8zfWe8nhEaZ4R1fy0ypExK8HshDgbuYfrtUdDLN8bYY7f1IZ3byN1GgujylwCxq8WuPGBGvD8gnNWh7S4OSyoIMnUZQt88AMzU2wIpOJW2ysXyKIbSblPvKnbPhmdXGJ4wdx%2BqVd0Us1UqXxwXkhu0snDkC5BAUX8qBYBmECuWwtPICkaHDxTf%2BySvJkNnurb9enns%2BJlOacMk462z3Gp9CzCQ7dK%2FBjqkAbylPuKLRCwZ2n4OfIdYbr4kl5pTCBgaXMo%2B9MIvBQTVit%2BXGqRXdycGdBIAsyiRXvgP2eOxmbqut0UPHQGfFBJZpkOhuEuLW%2Bz1dy5gXSjgCx4YnMFIz%2BBVqnvXxNmuhQIUQOD3uAkWZKnQ3H8lsW2uLockbpX1oF3cMTXhdWkd5MppWoYkQNHgNjnXKz0o9QjJ035IhUR9FnsgRhr3GOvARnws&X-Amz-Signature=3f59bdec51bbc05a3982e72c85da50a8ea2b902870d63de003dc2176f58739b8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMQZFOF%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T061211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOHcTrTlHKWG09Q6ULBE%2F0ytW9hjnTb2RNdG61oWoUqgIhAKncpfBR1kEV4R6mGjIsVLivJ6PcAD6WoF2Cu6jNp549Kv8DCG8QABoMNjM3NDIzMTgzODA1IgxV%2FIr0CDzc6QEtXYwq3AOQJkEN7Tu%2BdH8Vd%2B3w5OWqQ7gm8Ge4xgZYi6JVRtdTazmryulVb3aFpBWRJ4QhqMwNzTX4luGhRxfDFvJGNqZbdsnU3jfBM0%2BLAgMTNOSLlvmBbd2BE6wijP5v4SzzuFbEAwMmyc3nsdQR6Kglx0BW9Mbot8iKVfVnYcLGeOcP7Q8HVFEny6%2FYmR6Ighl96gQhoYPZatm7nKksREHRmsx%2FRCI52jOEXDUqjWDG20gS3BmeU24wjWbkNqG2dokLbAdh%2F1bjrTjJjo3PBtNNd4t1gOf6bdNpfWJ0n%2BwiQugTuEny3nRJFnH0hFXTR7ti4WpkvaMSjXmwD3FPViRnShqQtLx4WULcqXUfVI6p73o3P7IfFzBf6DEtih9KMS7jJdSoItxXaMx8BCxcLYkbHAcz9jg61yVPgr7k7j0t7MX5q%2FaYy58OZir%2F2ZKD2WVsoHJz5vrAjy32GCVWqukqEVmn4OKKBd4haL3KiYjolljk6eubJZqEEY3YI%2BF4p2RLctmKpM%2F%2FMRJIkU8Jfi%2BBUGjV%2BU%2BCiHD3JmlCikJdHvNayygROrxMBliegODlfcYmRcfrHUE0gmUGo4K8MTfMn%2FNXrhxgFQFKrQEWH8y8CL1GzVgGRDnIdaX0KFZXsDDo7NK%2FBjqkAXpZUQiw%2B9IkqY47jnubwHscqxDN9f5sEWrgdSi91elQpZ9wh5IYqADXkvFHmEYkL0u7pChWUCoTwrb8W%2F6kbp6cWc8M6GGS2rbl%2BtSZgJLy3Fe5YxtoNegkUs7pmFoqScqTiH85vLFRgklfTTxsgHiIcb4E18I%2Bw1Ia5LQlt%2BQhBHUFKJTr8DBH%2BEvAJ%2FgxbDB3OeC6DB6IdLtUwDMTw7%2BYbmZI&X-Amz-Signature=24756bc7d87fbb16479cbfaaea2adbb062c5478786ced229f0b29be6dd98c700&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
