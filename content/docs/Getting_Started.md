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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YYUHR5X%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZg9ZBX6UvC66sBSjPBWCV2TotLK9GL9XmoQprXBAQfAiBALhqCgHz4f3O9KajtQS1D%2BA91DgSy%2BYwHtJOn8RlX1yqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuq03MX14OlUWRbPVKtwDmBT40fsIOw288cEZuYENjoBOzExM%2B7SVptyUf8mruGGSJlYwmRanBr%2FvtiTnOyyIFa3gykS2dTjSgIW7mhFta3WLa77pCHOv12IJzqZDhaN6B67LmCg0JdCt%2FO%2B73fGAYFaEZ8XM0Eu%2FFH%2F74hOoiU9gxfZCBnM2MXKb0T%2Fitv9dsNsRGPjFDhVWsTd7Y%2Bf16hmobc5P4oQMf3Yk8AvmZbNaZoLNchb6jpOdvmTj2UEYLve09LsMrDvuIZ9ZVd7WLVEbjiNwMTINBkmqU0htxbIRAwuZdKIfxagAh4Oocry8xJoYklF7zEqPIsVRJtzld3HdC%2Fs2hrhSBDhTYHAGKnEAD7LUq%2BCKGyoHcfuwuVondZnJyBrLettVhCmgOzfDWpTGAD2tOzFZDGIX%2BswJ%2BgEtdTGfYBmi5KqvfdyoXgGAOAgvTDOVB7dVFFYBhUSKFMovqbEz1AvzQ7OeVs0SrUXxf%2FOSeW%2BanPhRvXmOVNNAxFRXg2aaOxVmbicEHRcZYnAeGIB9UNtTr8a8BtvJ7rKQcDB5rpnUCN2ovbQL4HAuB%2FoVNjN3iHsdeRfUbvHXy6oS2PlfUrdHI8UYydTpF7MTZPjAyWhAEsBsjFWkYieStdunhNyGe4TOWuAw0PW3wwY6pgGyi7izvDKLiPKOwH5PEVVvJCjir00zf9ZRnoDUmoRP3l%2BRWrYCxjAo1W7boVFj8BGzXHbsMuwhCZCy1gmi%2BNFjKhvdwrpSn5wBhH7Mia0YGw%2BKbuC0B2jCgaLtGYXVuHrwIqMR5d1H0vp8eCixqUQTVRzIyYQ3%2ByuUbjs4qJ29jlbo8200pkc5xzpkqGhlXp9FAQYvlFN5ix0uuoGKm9HmJbmkD5OL&X-Amz-Signature=ddc56d18d36beeab87ae7ef022bc40622b1d48511236bdec58bf315cc1bd2231&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YYUHR5X%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZg9ZBX6UvC66sBSjPBWCV2TotLK9GL9XmoQprXBAQfAiBALhqCgHz4f3O9KajtQS1D%2BA91DgSy%2BYwHtJOn8RlX1yqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuq03MX14OlUWRbPVKtwDmBT40fsIOw288cEZuYENjoBOzExM%2B7SVptyUf8mruGGSJlYwmRanBr%2FvtiTnOyyIFa3gykS2dTjSgIW7mhFta3WLa77pCHOv12IJzqZDhaN6B67LmCg0JdCt%2FO%2B73fGAYFaEZ8XM0Eu%2FFH%2F74hOoiU9gxfZCBnM2MXKb0T%2Fitv9dsNsRGPjFDhVWsTd7Y%2Bf16hmobc5P4oQMf3Yk8AvmZbNaZoLNchb6jpOdvmTj2UEYLve09LsMrDvuIZ9ZVd7WLVEbjiNwMTINBkmqU0htxbIRAwuZdKIfxagAh4Oocry8xJoYklF7zEqPIsVRJtzld3HdC%2Fs2hrhSBDhTYHAGKnEAD7LUq%2BCKGyoHcfuwuVondZnJyBrLettVhCmgOzfDWpTGAD2tOzFZDGIX%2BswJ%2BgEtdTGfYBmi5KqvfdyoXgGAOAgvTDOVB7dVFFYBhUSKFMovqbEz1AvzQ7OeVs0SrUXxf%2FOSeW%2BanPhRvXmOVNNAxFRXg2aaOxVmbicEHRcZYnAeGIB9UNtTr8a8BtvJ7rKQcDB5rpnUCN2ovbQL4HAuB%2FoVNjN3iHsdeRfUbvHXy6oS2PlfUrdHI8UYydTpF7MTZPjAyWhAEsBsjFWkYieStdunhNyGe4TOWuAw0PW3wwY6pgGyi7izvDKLiPKOwH5PEVVvJCjir00zf9ZRnoDUmoRP3l%2BRWrYCxjAo1W7boVFj8BGzXHbsMuwhCZCy1gmi%2BNFjKhvdwrpSn5wBhH7Mia0YGw%2BKbuC0B2jCgaLtGYXVuHrwIqMR5d1H0vp8eCixqUQTVRzIyYQ3%2ByuUbjs4qJ29jlbo8200pkc5xzpkqGhlXp9FAQYvlFN5ix0uuoGKm9HmJbmkD5OL&X-Amz-Signature=ebbd8a026027681fea4b96846a52e52f29fe4f8ab3ebf16471df43f52abca4b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YYUHR5X%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZg9ZBX6UvC66sBSjPBWCV2TotLK9GL9XmoQprXBAQfAiBALhqCgHz4f3O9KajtQS1D%2BA91DgSy%2BYwHtJOn8RlX1yqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuq03MX14OlUWRbPVKtwDmBT40fsIOw288cEZuYENjoBOzExM%2B7SVptyUf8mruGGSJlYwmRanBr%2FvtiTnOyyIFa3gykS2dTjSgIW7mhFta3WLa77pCHOv12IJzqZDhaN6B67LmCg0JdCt%2FO%2B73fGAYFaEZ8XM0Eu%2FFH%2F74hOoiU9gxfZCBnM2MXKb0T%2Fitv9dsNsRGPjFDhVWsTd7Y%2Bf16hmobc5P4oQMf3Yk8AvmZbNaZoLNchb6jpOdvmTj2UEYLve09LsMrDvuIZ9ZVd7WLVEbjiNwMTINBkmqU0htxbIRAwuZdKIfxagAh4Oocry8xJoYklF7zEqPIsVRJtzld3HdC%2Fs2hrhSBDhTYHAGKnEAD7LUq%2BCKGyoHcfuwuVondZnJyBrLettVhCmgOzfDWpTGAD2tOzFZDGIX%2BswJ%2BgEtdTGfYBmi5KqvfdyoXgGAOAgvTDOVB7dVFFYBhUSKFMovqbEz1AvzQ7OeVs0SrUXxf%2FOSeW%2BanPhRvXmOVNNAxFRXg2aaOxVmbicEHRcZYnAeGIB9UNtTr8a8BtvJ7rKQcDB5rpnUCN2ovbQL4HAuB%2FoVNjN3iHsdeRfUbvHXy6oS2PlfUrdHI8UYydTpF7MTZPjAyWhAEsBsjFWkYieStdunhNyGe4TOWuAw0PW3wwY6pgGyi7izvDKLiPKOwH5PEVVvJCjir00zf9ZRnoDUmoRP3l%2BRWrYCxjAo1W7boVFj8BGzXHbsMuwhCZCy1gmi%2BNFjKhvdwrpSn5wBhH7Mia0YGw%2BKbuC0B2jCgaLtGYXVuHrwIqMR5d1H0vp8eCixqUQTVRzIyYQ3%2ByuUbjs4qJ29jlbo8200pkc5xzpkqGhlXp9FAQYvlFN5ix0uuoGKm9HmJbmkD5OL&X-Amz-Signature=be3c8a2d000e240fc130671edde97312824ce5d6fe48e3f971270a2c180bd16d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFHIK3RP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaJ48RGDxGMwB3gWb3FDpipq89vPU5a9jgkyjU67Gd1QIhANwTv47mlj9DjnGw4njiMOK7uCJ36LhbJUizykkw%2BoPpKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwou3IhfqukhniCFswq3AOYKm67mpHGVidByX8TxeNaTzROjcMNZqa%2FDD%2BXzVsx6K5yRrG8qKjySI5LVQKtvVOiDDhu0snaxDyI3cRMYFIDBsjNs0ypS%2F2d1NSR%2FnWob1ETUQhAblBRU1J1rdpNrqWad7bGr9kuwtq7h2ex2J6iiHL3dDq6uyJO%2BOOswQxYwaSMTwuGpusUfZkKhNgk%2FdhglncBRIBdGv41j3pKtkHvyBr%2BdN0vGeE7LXGr%2BII4K5THPLgY9GRw4zMQ9O0IHNM7eBm2XvH88nmh8p6dfQfw%2BLh%2FEkwC3YCEJd6ck7KN96Eg12oPn2PAPGrUv83ylAW8LlSkkGaXeajrtxHrHxFXFhnVs1gA2w8BGLbQHGhykIsH6un2g5uXBaqdS9jPxWINWvEmK9kcecWX0ONRmTHsxsVqYdwwT1rozs7hIXoUFK5vmJhiv8Os1H8KuGOCHYM0aXoHbpm1vuo4BX1WJkJToWY9mOPdsLL6gUSlUAbRf1wSWilNyKjY%2FQPUcK%2BxppAkHP53miRA8k9xulmYCInvLnmy47shG9gKyzwwJ%2BToQeV%2FAB0yhBHv4tSchN3p5pdLlOgkUEiS3PXC6Om42cI8QQ5kOEaVEBKQtQj20FCfkmq0igfXCRTSjB4wKzDo9LfDBjqkAWKajNdVFC%2FDpm0Z%2Bry4B5QAdYaChJ1XF5CJEb7RDKhqMPjpvIdqbIUYfMA3AD%2B7M5V9GExWi1vN1nLuNYsGc7BiPEFmFCQo80W6kDHxxklh2z7QK59OjI4eFbC5L%2BlgIrwl70IUr%2BoZL1R%2FQTbz1ddKf%2F0Kl9W7k9ah04K%2FU5QXN4ON7OCYpC2dLzbr%2B81juvIhYMDuSy1UD%2FEK1W%2BxaGOt%2F2Iu&X-Amz-Signature=d944b0f7aac80251f32da78714b7955cbf3ec3c5a8a522cfab530f3fb5523e29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4KHSODC%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAq4IeX485DC9%2BmBuvDPY%2F6WHCJABQOwnxKF1B5LSHX7AiB%2B9uL4kOX60FZA18dhGFRvcbc86QsK4TN7LozF4k8qtyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcCqWz%2FOcU5wavRJXKtwDctspIqFa8k1zmTIwa8kxAHN%2FOxXIf5L0J%2FEtzrRJbbaVjtSTH%2BXqn6CXO4%2F4eDrfOBUxEaPznY%2BrS37bux1xkCH2dc0T0xtgBNly2QpclycMOyOv9FbOseFHNCaJT5JHXnMAW2ybODjzHHnnn088x%2BUd2LSBYgge6GMM7ijHH%2BY7iNKVPQNk1lEo6Evxa5V1aqvka0LnBq2n1NLI0pBtnrOl0lrLcQAYAA8cnJrML24bNCIkzXViBpdIFbIaEvq%2BFpPz%2FvFfB5IQAJ8QMOgo3X05b959%2B72Aak1vZxqOjx%2BRBeZm1fHrhWg5LViMWXp7I7332WaBhpFUYRYd7sUnI7CUem4VS4C3WYzL69Wkn4jNFBXc0iHpCR8ldv7eKPN7j176MD1gy8NOD7lYovuRochZHtxIPNC8i%2BJFmARtJfh%2BOpjV%2F95KrCg4LtRFV%2FeCLnrf7knuxPkVIIDlfphot3A%2B4P5IJKFy6KUQg0Vu7AOErK%2BxaQdKn3YhQ3%2BkpgnJoPAxOWhX2Zf249B1EDU9LawHV2MeGF6wNImzckjqxZn3NZMwbPccSLTgr9JgI6FBB5xAOVDpmG69v0OWEmrgmaXHhZaksT%2Ba5ALx3mQxhrr5wlpdjOih%2Flv%2BYWAwyPW3wwY6pgFjc9aRaLvl3cxSHuS3B%2Fsr4RUW8Lz0cImu6i8L7qB%2BvVpls76RGzx3%2BRjEKeJIFo1T67oFF%2F15rwuWKnQzERgGBz%2B8rZHVVaTCqfpzEDh5xqK5uUiLlv0ZrtEs7M9PxUdOIXiSUrERQXrTq101V3JET1wpUeZGC8JYEgy%2FdZxHfrnA0Aqo721z%2Bg4Rcosp3lHBl9VfKGKeXXgDCNMJ5PRau63xdyN4&X-Amz-Signature=9f261349e608a98d029eb82d5094e0abe7c75edc082925cab242c7accba168b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YYUHR5X%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZg9ZBX6UvC66sBSjPBWCV2TotLK9GL9XmoQprXBAQfAiBALhqCgHz4f3O9KajtQS1D%2BA91DgSy%2BYwHtJOn8RlX1yqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuq03MX14OlUWRbPVKtwDmBT40fsIOw288cEZuYENjoBOzExM%2B7SVptyUf8mruGGSJlYwmRanBr%2FvtiTnOyyIFa3gykS2dTjSgIW7mhFta3WLa77pCHOv12IJzqZDhaN6B67LmCg0JdCt%2FO%2B73fGAYFaEZ8XM0Eu%2FFH%2F74hOoiU9gxfZCBnM2MXKb0T%2Fitv9dsNsRGPjFDhVWsTd7Y%2Bf16hmobc5P4oQMf3Yk8AvmZbNaZoLNchb6jpOdvmTj2UEYLve09LsMrDvuIZ9ZVd7WLVEbjiNwMTINBkmqU0htxbIRAwuZdKIfxagAh4Oocry8xJoYklF7zEqPIsVRJtzld3HdC%2Fs2hrhSBDhTYHAGKnEAD7LUq%2BCKGyoHcfuwuVondZnJyBrLettVhCmgOzfDWpTGAD2tOzFZDGIX%2BswJ%2BgEtdTGfYBmi5KqvfdyoXgGAOAgvTDOVB7dVFFYBhUSKFMovqbEz1AvzQ7OeVs0SrUXxf%2FOSeW%2BanPhRvXmOVNNAxFRXg2aaOxVmbicEHRcZYnAeGIB9UNtTr8a8BtvJ7rKQcDB5rpnUCN2ovbQL4HAuB%2FoVNjN3iHsdeRfUbvHXy6oS2PlfUrdHI8UYydTpF7MTZPjAyWhAEsBsjFWkYieStdunhNyGe4TOWuAw0PW3wwY6pgGyi7izvDKLiPKOwH5PEVVvJCjir00zf9ZRnoDUmoRP3l%2BRWrYCxjAo1W7boVFj8BGzXHbsMuwhCZCy1gmi%2BNFjKhvdwrpSn5wBhH7Mia0YGw%2BKbuC0B2jCgaLtGYXVuHrwIqMR5d1H0vp8eCixqUQTVRzIyYQ3%2ByuUbjs4qJ29jlbo8200pkc5xzpkqGhlXp9FAQYvlFN5ix0uuoGKm9HmJbmkD5OL&X-Amz-Signature=73cae94fbe7d804fc956a8d84c1f26dfe8f3d5e0c80a89a1863a6c865fb3b9ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
