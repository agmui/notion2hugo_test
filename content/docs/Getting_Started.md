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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y37I4OL2%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T150733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9CGdvHMbrgbPyFVR1xPjuxvB7ZwIPD2nn%2BVQm0z%2Bv0AiB90g2B8gf8o8LqDQofvd%2Br9QSVgW7%2FJaPBKIxcuuEhLCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIM1g0Ba7ZpXfq8Igm3KtwDq69hQOfaSKWD%2BA6VL3Smrou40deCRAilzNYvPnJe3gH%2FEzzDXoaRzpVGSvL2dJM7uKmx897XS881A5n17AoZ%2FS3uiZ7xGxS2JkcOK8ObKwnNqi3SVgULmcMn9bijaHBJR4Sv%2BJA%2F0BmzhtwXePLm2RNCuWdl0OtOraMKTuXemjjfsTFpsreVwRX%2FT2v8T3V%2B2w5T91nNbmHHHjmCm77e499JHcK3Vb7%2Fu2HdP8jvYwJX1VsXtkXm9bmgzthcZb3rePENjGtL7DEoRsn1ZSKP%2BAeFVALF%2BwawABi6j0jhfuV4uX8doWLiYEltU%2Bf8yKcIZTWTGTGNkAQBJqvJ9OhxkCmrWEPTr5pLNvTjDKU6b%2FyKkqHAZj2%2Ba2QJwGnBXh7EuIdDs2m69g%2FmTVpp%2BhXBdlyG2tiWEZdg%2FyDUhJKix3Uktpsv4F505gOOw6DJNYflzvpo%2B1j0nQNIvh1fNk6WxkvNYrHxVrvl3oGJP74UxmARrRKocj67aWdBunbzasUVGiRLqXwgHiU%2FuBrjjJcHY9CfImqyY1qFeUUnimQLyycQIk1acB5Kzv%2BrZyLFK%2BVtI8sYlyc93qyQS%2BhwktRKGUV37BM7ehJaM0wObfNohiU0FUJovuXCWIchR3Iwj4y4wAY6pgGkZcq%2FCEeymX9kMCy5JFEIOEwRq124nAzBAzj8d6iwb%2F37wMiG%2BbqhkYK9dOnsyix9wAPW4r5cdGp67rVI8TLZMNpK3OKEVfUoXfWKGwUsuv0Hxz439nlWXFNZfG3u5axbfIXBwqycTzOV8BY0qTHN%2FoGA3zAzxOYUMXLRv1aNWqWZDyb4cWLNtVfcAROD5ZvxeV7EvQ4l%2BETZslKHEOGEysJVZH7l&X-Amz-Signature=9eebf876dc4a8b054e34cfb0cffeaa25d94b68ca3464d34ba3e34a38f4191bf2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y37I4OL2%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T150733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9CGdvHMbrgbPyFVR1xPjuxvB7ZwIPD2nn%2BVQm0z%2Bv0AiB90g2B8gf8o8LqDQofvd%2Br9QSVgW7%2FJaPBKIxcuuEhLCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIM1g0Ba7ZpXfq8Igm3KtwDq69hQOfaSKWD%2BA6VL3Smrou40deCRAilzNYvPnJe3gH%2FEzzDXoaRzpVGSvL2dJM7uKmx897XS881A5n17AoZ%2FS3uiZ7xGxS2JkcOK8ObKwnNqi3SVgULmcMn9bijaHBJR4Sv%2BJA%2F0BmzhtwXePLm2RNCuWdl0OtOraMKTuXemjjfsTFpsreVwRX%2FT2v8T3V%2B2w5T91nNbmHHHjmCm77e499JHcK3Vb7%2Fu2HdP8jvYwJX1VsXtkXm9bmgzthcZb3rePENjGtL7DEoRsn1ZSKP%2BAeFVALF%2BwawABi6j0jhfuV4uX8doWLiYEltU%2Bf8yKcIZTWTGTGNkAQBJqvJ9OhxkCmrWEPTr5pLNvTjDKU6b%2FyKkqHAZj2%2Ba2QJwGnBXh7EuIdDs2m69g%2FmTVpp%2BhXBdlyG2tiWEZdg%2FyDUhJKix3Uktpsv4F505gOOw6DJNYflzvpo%2B1j0nQNIvh1fNk6WxkvNYrHxVrvl3oGJP74UxmARrRKocj67aWdBunbzasUVGiRLqXwgHiU%2FuBrjjJcHY9CfImqyY1qFeUUnimQLyycQIk1acB5Kzv%2BrZyLFK%2BVtI8sYlyc93qyQS%2BhwktRKGUV37BM7ehJaM0wObfNohiU0FUJovuXCWIchR3Iwj4y4wAY6pgGkZcq%2FCEeymX9kMCy5JFEIOEwRq124nAzBAzj8d6iwb%2F37wMiG%2BbqhkYK9dOnsyix9wAPW4r5cdGp67rVI8TLZMNpK3OKEVfUoXfWKGwUsuv0Hxz439nlWXFNZfG3u5axbfIXBwqycTzOV8BY0qTHN%2FoGA3zAzxOYUMXLRv1aNWqWZDyb4cWLNtVfcAROD5ZvxeV7EvQ4l%2BETZslKHEOGEysJVZH7l&X-Amz-Signature=348956021578bf5395397223ce4019bfe3da1513f2b8e28efb02294e9aaf5161&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G4DOL7U%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T150737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC89CnyzjAt1HlMShWl37QT%2BQl2JnzPAkstPZer3mPRAIhAK%2FHRAm2RCeiDR2%2BY7TLytDr7DMEw0iC%2FxJHWQBwrP07Kv8DCFwQABoMNjM3NDIzMTgzODA1IgyX2D5c2y4hdmfPnI4q3ANM8vWGGxxzXTbQYchrGE%2FaiCXtxcpNoVa0FZtlwufx4zz%2BGgvVygXF4JNYhYGmG3M9FTZ1nA1ihstllFKr9g2taHarzJ3T6VPPd9IqjtdpfQOZUTLX1POLKk6rVhIJVyQYw4RR8ZhA%2Fuvxs98%2Bxe3qwSAZdWtRSq41fbK5%2Fnr%2Bab%2BKx71fQ%2Fc1MuwRqtI4GOLA00ETwVnmW3Ehm1zgLpRftH%2B%2Bh0LNjYNh36SWQhM0Tyl2i1jRI4ZLeDCEwsyszayGFXioUmpXVcNqiJoFWFbIJ4pvvhuDHPKklr6Avf%2B4f76VSlax3vuUfkcM3lYFZ0IY4RqoAh7sLYX3iB%2BIFY0c6DlmEwyWbv4%2F4yXGMOWteJkYmRBe%2BOF7irf05q9MqHbfxKsbScpUAmdMvlAca4VTTJBRUCD1iwhTYRwgo0k58NHGeKjj1Hy2ACYQ%2FfaQHCT1wUbps3%2FD4duseZAEE8iaHnZyQ5XrGbmF%2FCfvx%2Fh5I64LckM5hXK5nUJhHhHNmFWWjIwogYEL56nSHNJciswmEZRlhnvsBd4Wm6vmm1IRqkYla3PA%2FbYuxWrNNFmbW1kWgmG4yfiVcw6Z36onzf9vRsHlmZnfymC1kAyUHkq9AHZF6jno5307pHMdxTDIjLjABjqkAQtneYR5OGH74St4%2BSCE0cewEujixjcSJRq3yS31tL%2FmyWcGk8xZ1x5KAn0DpSrNgHhM7RwKhESWebewJL9xMuyl6fO2vRZT7PGGIgbHwlrCYFB2XgH65dRLa9L0zSKMDTXrLqYgkmPfitZfNYRU4XZoTVgsUIkEpairKohV%2B3Wy8bpEYJuIigoW%2BmSOFoFGaziRyk2sQ3TmBAYJikBHESQIEnDp&X-Amz-Signature=9184363f687624cc93f25eedb264a8dd88cd31b20f8ae4f8cfbfc58f3660e152&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDELL6UF%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T150737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvmnTRDWhcTsczoJTBExFQaul01ZubJpCRDSWybCcbgQIgXKrDZZQijF3i4LaKt5AZzSCpzU877ykGFg9RZ4NeenYq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDNOZsJDqWVtYSok%2FfircA5z5JIdKfbjy23sQ%2F1FGeybMaiwsyNBjcRIAPuUL4gmr%2FTDhmZnWQKY%2BeSqtU26%2BTEDHfLQDnIyPg2YkvJm5ryWUHUcuAbHgXkTybzk9ZWGErI3EgwbPgCeLOcL3t83sBg1vD%2F2vjqmbJ1gMZQMnLeDH0Y6d4IvILY7UCCz5po5pIGmcQl9qcfsZV%2FOWWhxL52ZzQDENXkwxQ7nSCzZL7Xm5HIWU4DWdhUISXsWpb8CNSAauTIDHobmVEOry2G%2Bp27xWrwxGAkiBQfRa4agEc9VfZ2zTJFT9sLdB%2FenPILpGYEDoXNFcEB6YjJc2b62OeampZY5q5ViaQGQ8dkVIoQRIS7lEmeRxk%2FgsTlmNpc4XD8mbe3nZFUSU7bhE0cY4Uyek%2Fkxq5vU2jJf5dHEaH%2BOylqu8WoXEAIVrK8N7AnBNIuZpTIo1bPBdAMrrmpbCB9eYenfXA3I8aZLQ1Krlv2oghMFxP2mCljfW%2BPXLENJsy9RTSOHltYUjIEWKEUsy9kampYOMXDBuMaR3VpQR%2B86gq8lGFknMHjaQb9M8gGMNt8fJ7WEYKzHT2pz17IOZvM%2F2NdP%2FeFCu5kK7VlA9w5sSH6XypA6UOJNaTXO%2B7PVlgg6aB08YA33DdrttMPeLuMAGOqUBX5WWymFo440DQculA4RiXciMw57WHzFkzxJ6atbQHBnSryqUAGoc8u7YteddkwA5GCnGVokMwd3ZTf72YtZGDKFO3oKDzdaJEO%2BhMAu3udRHcTSJpsi2MNNq06BoU4fdUBfv15JRh0xlikXpfOJEtuiGrOyt%2FTwSMXe9IDJm6v2K%2Bufw75OxnO7LiC4iJ6%2FuCSOrmR9zHZRUNXlo7Xp6q5QTQU%2Bt&X-Amz-Signature=dba89a895b44ea9d0658c574b11f1263a1206f6bfb7f44a4d507af7200ecac30&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y37I4OL2%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T150733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9CGdvHMbrgbPyFVR1xPjuxvB7ZwIPD2nn%2BVQm0z%2Bv0AiB90g2B8gf8o8LqDQofvd%2Br9QSVgW7%2FJaPBKIxcuuEhLCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIM1g0Ba7ZpXfq8Igm3KtwDq69hQOfaSKWD%2BA6VL3Smrou40deCRAilzNYvPnJe3gH%2FEzzDXoaRzpVGSvL2dJM7uKmx897XS881A5n17AoZ%2FS3uiZ7xGxS2JkcOK8ObKwnNqi3SVgULmcMn9bijaHBJR4Sv%2BJA%2F0BmzhtwXePLm2RNCuWdl0OtOraMKTuXemjjfsTFpsreVwRX%2FT2v8T3V%2B2w5T91nNbmHHHjmCm77e499JHcK3Vb7%2Fu2HdP8jvYwJX1VsXtkXm9bmgzthcZb3rePENjGtL7DEoRsn1ZSKP%2BAeFVALF%2BwawABi6j0jhfuV4uX8doWLiYEltU%2Bf8yKcIZTWTGTGNkAQBJqvJ9OhxkCmrWEPTr5pLNvTjDKU6b%2FyKkqHAZj2%2Ba2QJwGnBXh7EuIdDs2m69g%2FmTVpp%2BhXBdlyG2tiWEZdg%2FyDUhJKix3Uktpsv4F505gOOw6DJNYflzvpo%2B1j0nQNIvh1fNk6WxkvNYrHxVrvl3oGJP74UxmARrRKocj67aWdBunbzasUVGiRLqXwgHiU%2FuBrjjJcHY9CfImqyY1qFeUUnimQLyycQIk1acB5Kzv%2BrZyLFK%2BVtI8sYlyc93qyQS%2BhwktRKGUV37BM7ehJaM0wObfNohiU0FUJovuXCWIchR3Iwj4y4wAY6pgGkZcq%2FCEeymX9kMCy5JFEIOEwRq124nAzBAzj8d6iwb%2F37wMiG%2BbqhkYK9dOnsyix9wAPW4r5cdGp67rVI8TLZMNpK3OKEVfUoXfWKGwUsuv0Hxz439nlWXFNZfG3u5axbfIXBwqycTzOV8BY0qTHN%2FoGA3zAzxOYUMXLRv1aNWqWZDyb4cWLNtVfcAROD5ZvxeV7EvQ4l%2BETZslKHEOGEysJVZH7l&X-Amz-Signature=10ff6cf1224fd35cb6846dedd8645526e2b6b622e7768d667df8aa904441e0e9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
