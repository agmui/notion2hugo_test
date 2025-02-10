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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C6RGY3Y%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T090853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYuFPuxVAwRwbSbEdZhzMF0WoxNIQkxwePXpbHoAZKBAiEA%2BWt4kYU6j4z8qByRRhjgg1J1sRNvw79LosKJqF4KDDQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBGBs4yStILIQF1QyrcA6xoKyR5i60brZFwSfnJQVhPKRPHl%2F%2F8qSxJL%2F3PbM9n8CDsq3Ba2P8WnqJUJlNCZ8EgnFnGT%2F7vKKDhus7rIJQzZ4mP2z0YG%2Fg%2BAX2eLyy65ADk0yjicHzh99xU%2F4HbpbdOI6pJdPrZsmgTDAqnIIjgieQRewcl%2BucFZy%2F1yVuZiovaVbZ%2FKgWrZH0ou9ndHgSOzd7NFcVv781zZBZNzrHObOO2635q7kXZhI65b%2FocVpo8ALSkbSCDVUGoFRLfCRB8aD7ni4RIv4RYCH4KsSU6Io9B65H7watGajEsYwOW%2FyC19ZZsNPOe8V7mZi4EO786zXd%2FNfJ4Z7jmv9JfQeyuBxPUjW3TmV07y3sB479E4Symgwsj603h9OUY5znzQxRmdUlDzZUedQmD697hYt4mUWap4VUOypthuMWXGMV80FhQEgib8MJnUyCAIBQVt46CmjoDHvHTlu1x4ZZfb1mk9I2AWPxzLPi2Ha%2Baq4BnNgs5J7vo7bRCQNE5d2R6bmg%2FijxXvnsnXKzZIrLwnB9CY7TFxK1PlhszOtnaJ72tFj8Lshlw3GLtLDyYhmuvK38eW0O8p0xCzXoCqUCjvZAv3gOgH2OMs7PwHxsZ8JgZbVYN36%2BwWTBz1z7CMIHZpr0GOqUBcAiDVqzPoTkzVdIPtQql%2FcCIGDQxFgmNSq04n9TT4KtXS7rIog63esV0FHUXRycnWs0Se0qtUK%2FyUEMPsWaIhNwjkECX3t1tZTtmRAG8KNxIZM3rYIu2I7eS%2BT3g1Y8rXt5Tezg%2FsMoPlFjWxbdotk5RVrPZO69PLxkW%2BcDIW%2Ftr03fzN5WmqT8E4Kj%2BekSfZIaN2X1eysdexs1nutF7OmQukQnt&X-Amz-Signature=6401e25861ef2ffad5119e02ae2f97fd678f8e633bdc34c2ead80a870fb99c72&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C6RGY3Y%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T090853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYuFPuxVAwRwbSbEdZhzMF0WoxNIQkxwePXpbHoAZKBAiEA%2BWt4kYU6j4z8qByRRhjgg1J1sRNvw79LosKJqF4KDDQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBGBs4yStILIQF1QyrcA6xoKyR5i60brZFwSfnJQVhPKRPHl%2F%2F8qSxJL%2F3PbM9n8CDsq3Ba2P8WnqJUJlNCZ8EgnFnGT%2F7vKKDhus7rIJQzZ4mP2z0YG%2Fg%2BAX2eLyy65ADk0yjicHzh99xU%2F4HbpbdOI6pJdPrZsmgTDAqnIIjgieQRewcl%2BucFZy%2F1yVuZiovaVbZ%2FKgWrZH0ou9ndHgSOzd7NFcVv781zZBZNzrHObOO2635q7kXZhI65b%2FocVpo8ALSkbSCDVUGoFRLfCRB8aD7ni4RIv4RYCH4KsSU6Io9B65H7watGajEsYwOW%2FyC19ZZsNPOe8V7mZi4EO786zXd%2FNfJ4Z7jmv9JfQeyuBxPUjW3TmV07y3sB479E4Symgwsj603h9OUY5znzQxRmdUlDzZUedQmD697hYt4mUWap4VUOypthuMWXGMV80FhQEgib8MJnUyCAIBQVt46CmjoDHvHTlu1x4ZZfb1mk9I2AWPxzLPi2Ha%2Baq4BnNgs5J7vo7bRCQNE5d2R6bmg%2FijxXvnsnXKzZIrLwnB9CY7TFxK1PlhszOtnaJ72tFj8Lshlw3GLtLDyYhmuvK38eW0O8p0xCzXoCqUCjvZAv3gOgH2OMs7PwHxsZ8JgZbVYN36%2BwWTBz1z7CMIHZpr0GOqUBcAiDVqzPoTkzVdIPtQql%2FcCIGDQxFgmNSq04n9TT4KtXS7rIog63esV0FHUXRycnWs0Se0qtUK%2FyUEMPsWaIhNwjkECX3t1tZTtmRAG8KNxIZM3rYIu2I7eS%2BT3g1Y8rXt5Tezg%2FsMoPlFjWxbdotk5RVrPZO69PLxkW%2BcDIW%2Ftr03fzN5WmqT8E4Kj%2BekSfZIaN2X1eysdexs1nutF7OmQukQnt&X-Amz-Signature=d439fa84934793e9e527f115e89ba2e3f06bb86d4dbf061fd22758d88bf02cbd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKSZYQH%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T090854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMoK3Q%2BlZ%2FyThsr3T0W9kQjhhcgnygHiaRIYgsc2ulQAiEAnPv3ObrA8gfmKfm06Ymp5cP50LRlTRIAEmyuU8F1AMYqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ9dZysyYBMFoqsCESrcA0DSRQvW4uRjgZk9k416ilbBLVa2EUTtAc63z9P75kSQHJGxfpYGcp706IRWMVfuyaBU3kozCdpkSgsaBWBRUDB8RDPtQh28q9Su239jNtyK5cmmEJabhAVbiim81GksgwmQmd6eNHVSj9QiwAaOGPTIOxk9zMDgcv12lfYfj4k%2FoeiD9QSQv6ZcV%2Fn4NKoZxC7J7dyVhVfD1p%2F8RY6vMa9eu3ay2NdHGymAhsotscG5jKTyH6yDaUNYbK%2BWwQOau2TnP2XO2zsXSSjOEvHsWgami%2Bi0y3X3EPi3eEeTBwccJNUXun%2FHBMKjnNXEJn%2FmkC7DjdshoAd2T705wWs3TPpjvIyI5bmbt0YFT%2BhA3mqTFSD1yhlpfOfKMEe%2BCheMB2uMe8Qfc5AuCKEuEpyjtaQIzXqWO5zGOeq9Re9NkZWUpQHzOygUuBBj73Ar1mSUz4rHnlo1oLDkCTkc%2FMOvQmatkMWXi0nk5LL%2Bl%2BDabdfLaBUmaEBPkEz%2BqJSdo0zzV%2B6u3Fw5gkCbAHQnfSH7XB0rstAe5%2BbrAY5cncRfQExkwvScqyUHB1pAo7OIF8ZIu5eijMQ%2BkEplNnPFJ8t1woBfqXVi2kHhg1AApu2uSkqVTgbNgIvjf3rnkAKAMPnYpr0GOqUBtxxJU7DigNCPBDWtdWNbf7N54WgrWjPfIE0eLYQNl%2FssFrffmp%2FcX%2FQCRMuSbdVft86M5Fu1G%2B8K3frhe0I6tNgEJ89w7h5C5c99%2Bbz1XXL5zwNDHYpE03SaDXzhV0DIVcId%2BhruuYT%2BVOGjy5Ia6YznQict6QALlgRlew1GYdsL7UcHwqQTgrSjvrG1vOph%2BI1jvNRgCkRH1%2BU3c3k6JYI8Srmo&X-Amz-Signature=e1d06c55213ff8420a415ee87173084b019ccef94a5946d290a4a2bd4f987702&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWDUVKO%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T090855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlziNK4PYjISXoUU7pTUe%2FLpIw4w%2Blu9pBaivd32NQlQIhALy5iHo4U7fYwIMx9gsYMxne2yAX1T4%2FJanftfQc2QoHKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwdphmj%2FwUoLTb2mcAq3ANuBKErMz6RvmzFc6ah2zkt8f9dtxlWD8zK%2FNfcn2OOP%2Fc6jBwpjsFIUZAyYqkyueb6XKX0kuZT5HPi6sZkTvQRoenm%2FGgTVbVMoAHXm5aWJ9tD9Jx2%2BtUIx%2BneSENRv95t2uHVzxeUn2YIl5P3SvKDgkMUmqWUmxCzsy2InkAs%2FFkuCAbLoxFGSIgcz6KKM%2FJTaLBviom99WwSL5UonCqEFv%2BfIbmyAZ0q8pQCffylUkz8ejozTjkEeC3WeE5S%2BFGP%2BApYbt7VYwwUKk7p8M8ysmXK4I9kEUmj0Y%2BiRQ7492sI87dExW9fnVGNepY6%2F%2BvY8jDCZUdyrn34rEO2Og2lgMI23KVXJEbhGVyymK1BFtIjDcQDezpYV%2Bu7gmeUd3ZO33olxWCEdTADpGS%2FkL3%2BO51f28VFETHixgBJgzEDmND9QIgWIaKpayFw9vu2zdgL0d0cB71XVJKkk%2B0%2BhFdtX1sLziUMZwuPRq9%2Fd4fZqvtVBgI1%2BUyvLdyGtsNqVv88mid%2FFZTiQxRiPUlOZFNxo6mEC6i9jgiwo2MRKlRtcpoJQLp9tRF%2BcUYjRR9MUHmQX9T3JZLTb%2BUpEvwg26GL%2Fot8EayN4kEwXUVbr%2F%2F5y6hUe%2FuTvGPv73Q12TDo2aa9BjqkAX0F7UxobRWBZOkAzZCyGjm%2BQD7Gce5WsnKq5RveTjLoQjT1pq%2BYTM1q%2B4q6Q3l5DsMymHHX98Z29sTxef1KMzwnO7Mp%2B2QnZH8LF3ZwQZ4uXB3aQhZd9nF5ty5cUmEW%2FpMGsmpsiN%2FamyKE5ROJ5tY8lzUDXN4CCsSON2nk0z%2FF7SjXgf9H3HCH%2FlhlKi6PdvqM%2B2uAc0%2BbDjUhH5jpGpEYhTGn&X-Amz-Signature=1d26b13a131a3cffe86abdfe26e7e16fc3d0207688afcfd6a31aa305f44a1377&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C6RGY3Y%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T090853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYuFPuxVAwRwbSbEdZhzMF0WoxNIQkxwePXpbHoAZKBAiEA%2BWt4kYU6j4z8qByRRhjgg1J1sRNvw79LosKJqF4KDDQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBGBs4yStILIQF1QyrcA6xoKyR5i60brZFwSfnJQVhPKRPHl%2F%2F8qSxJL%2F3PbM9n8CDsq3Ba2P8WnqJUJlNCZ8EgnFnGT%2F7vKKDhus7rIJQzZ4mP2z0YG%2Fg%2BAX2eLyy65ADk0yjicHzh99xU%2F4HbpbdOI6pJdPrZsmgTDAqnIIjgieQRewcl%2BucFZy%2F1yVuZiovaVbZ%2FKgWrZH0ou9ndHgSOzd7NFcVv781zZBZNzrHObOO2635q7kXZhI65b%2FocVpo8ALSkbSCDVUGoFRLfCRB8aD7ni4RIv4RYCH4KsSU6Io9B65H7watGajEsYwOW%2FyC19ZZsNPOe8V7mZi4EO786zXd%2FNfJ4Z7jmv9JfQeyuBxPUjW3TmV07y3sB479E4Symgwsj603h9OUY5znzQxRmdUlDzZUedQmD697hYt4mUWap4VUOypthuMWXGMV80FhQEgib8MJnUyCAIBQVt46CmjoDHvHTlu1x4ZZfb1mk9I2AWPxzLPi2Ha%2Baq4BnNgs5J7vo7bRCQNE5d2R6bmg%2FijxXvnsnXKzZIrLwnB9CY7TFxK1PlhszOtnaJ72tFj8Lshlw3GLtLDyYhmuvK38eW0O8p0xCzXoCqUCjvZAv3gOgH2OMs7PwHxsZ8JgZbVYN36%2BwWTBz1z7CMIHZpr0GOqUBcAiDVqzPoTkzVdIPtQql%2FcCIGDQxFgmNSq04n9TT4KtXS7rIog63esV0FHUXRycnWs0Se0qtUK%2FyUEMPsWaIhNwjkECX3t1tZTtmRAG8KNxIZM3rYIu2I7eS%2BT3g1Y8rXt5Tezg%2FsMoPlFjWxbdotk5RVrPZO69PLxkW%2BcDIW%2Ftr03fzN5WmqT8E4Kj%2BekSfZIaN2X1eysdexs1nutF7OmQukQnt&X-Amz-Signature=df75046abc8fa5ece9ea6c34f0ad87030edaecd681807d8469e51dc15e7e41f1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
