---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SRQBEPT%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1oW5PLLSxNnmveknweIb%2BQZfLVJHwJgi592b3LoDmuAiBDLxfd2V9QaCuGzA2acVNGN4CLEN3L5mXnbgVsGMeMdiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3V8NlTVwUAAIKMkdKtwDlFvkszdQ2pFh%2FTKazT4cERGb%2FWSHO4aQucuP6AMSMIPSggmakq0irHETweukAD2dTJ9udCjgBZYECAIcRdRAlJhm0Q5Yb1jhjewfUMYeBBnaf9Kf7Hj%2BvQDqDWDYtaWZJziqV7GNCeab6lFFHbb09UN1KKXZ%2FVidhevcqEIqXCx8FopuxIzBS5Lr2qakrLJABgBKQ4uw27Gt80k2RCXxrhJYUnKTKj6KLGrd%2BIrizvGBg3fvfSkPuMq14LUNDmBdUMfrgyzPOma2STU1PF0%2FYwYHxVLyxvMxTIG5hyNy8taUPVroOp4qEr70UvUwqKI8ZcxVoYj4RWb0VKfBI%2BM%2ByI7NvpoqL99qwFYOqK8SiRT6%2BxjcNMma0By%2FI8XjOJkuq6JotTPCGRtxOYG5xvr%2Bxnr9Ycn05PLSo%2BF%2BsOx1JjSiH9ucUz5p2JwUgcUhzzZo4IoHtXcIx%2Bh7JcPY8NlOXA2dbecY%2FBxgzS24w9HAdDa0KdMKxUJt%2F%2F3oLiIFlzC77WRsnLTkLn60mnXGPZSt3PV8r0BfzeQer0iejxqVVblKoiOFnZBrVCj%2FS%2BSSlHUKm71kiMgRzNhbndN3vnenDp8jkLVHYJZ8sqR9MdNq2dn066AHlOnlkBFgHlswqfKvyAY6pgFj4JLtE1vptawZqdEkPClgf3fW1Wlhn6PDQApYX2eZo%2B%2FMDG2BioCo7KrPXL1UySaKEXqSa11lBowmpLnuGxiggikjuhD1Zet9kTCMfHFfrvElnrbWVj72HO%2BzcR2Vwo%2FvttlecR1HBjdW5e8E2FScuVfU2JAM3VikGia0zWXs9GSd9WB2DItZMsueyKbT5z9S3lDPPRzJq6E1qHbvrJgePCZqiGYR&X-Amz-Signature=c7dc808dfc57cdfa773efcd9af373e4be5aeaf250eba65e768ca09687d28fb7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SRQBEPT%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1oW5PLLSxNnmveknweIb%2BQZfLVJHwJgi592b3LoDmuAiBDLxfd2V9QaCuGzA2acVNGN4CLEN3L5mXnbgVsGMeMdiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3V8NlTVwUAAIKMkdKtwDlFvkszdQ2pFh%2FTKazT4cERGb%2FWSHO4aQucuP6AMSMIPSggmakq0irHETweukAD2dTJ9udCjgBZYECAIcRdRAlJhm0Q5Yb1jhjewfUMYeBBnaf9Kf7Hj%2BvQDqDWDYtaWZJziqV7GNCeab6lFFHbb09UN1KKXZ%2FVidhevcqEIqXCx8FopuxIzBS5Lr2qakrLJABgBKQ4uw27Gt80k2RCXxrhJYUnKTKj6KLGrd%2BIrizvGBg3fvfSkPuMq14LUNDmBdUMfrgyzPOma2STU1PF0%2FYwYHxVLyxvMxTIG5hyNy8taUPVroOp4qEr70UvUwqKI8ZcxVoYj4RWb0VKfBI%2BM%2ByI7NvpoqL99qwFYOqK8SiRT6%2BxjcNMma0By%2FI8XjOJkuq6JotTPCGRtxOYG5xvr%2Bxnr9Ycn05PLSo%2BF%2BsOx1JjSiH9ucUz5p2JwUgcUhzzZo4IoHtXcIx%2Bh7JcPY8NlOXA2dbecY%2FBxgzS24w9HAdDa0KdMKxUJt%2F%2F3oLiIFlzC77WRsnLTkLn60mnXGPZSt3PV8r0BfzeQer0iejxqVVblKoiOFnZBrVCj%2FS%2BSSlHUKm71kiMgRzNhbndN3vnenDp8jkLVHYJZ8sqR9MdNq2dn066AHlOnlkBFgHlswqfKvyAY6pgFj4JLtE1vptawZqdEkPClgf3fW1Wlhn6PDQApYX2eZo%2B%2FMDG2BioCo7KrPXL1UySaKEXqSa11lBowmpLnuGxiggikjuhD1Zet9kTCMfHFfrvElnrbWVj72HO%2BzcR2Vwo%2FvttlecR1HBjdW5e8E2FScuVfU2JAM3VikGia0zWXs9GSd9WB2DItZMsueyKbT5z9S3lDPPRzJq6E1qHbvrJgePCZqiGYR&X-Amz-Signature=34178da4bb33223b758a40612acef5003d67086f742c784046d5afbb470e2030&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SRQBEPT%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1oW5PLLSxNnmveknweIb%2BQZfLVJHwJgi592b3LoDmuAiBDLxfd2V9QaCuGzA2acVNGN4CLEN3L5mXnbgVsGMeMdiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3V8NlTVwUAAIKMkdKtwDlFvkszdQ2pFh%2FTKazT4cERGb%2FWSHO4aQucuP6AMSMIPSggmakq0irHETweukAD2dTJ9udCjgBZYECAIcRdRAlJhm0Q5Yb1jhjewfUMYeBBnaf9Kf7Hj%2BvQDqDWDYtaWZJziqV7GNCeab6lFFHbb09UN1KKXZ%2FVidhevcqEIqXCx8FopuxIzBS5Lr2qakrLJABgBKQ4uw27Gt80k2RCXxrhJYUnKTKj6KLGrd%2BIrizvGBg3fvfSkPuMq14LUNDmBdUMfrgyzPOma2STU1PF0%2FYwYHxVLyxvMxTIG5hyNy8taUPVroOp4qEr70UvUwqKI8ZcxVoYj4RWb0VKfBI%2BM%2ByI7NvpoqL99qwFYOqK8SiRT6%2BxjcNMma0By%2FI8XjOJkuq6JotTPCGRtxOYG5xvr%2Bxnr9Ycn05PLSo%2BF%2BsOx1JjSiH9ucUz5p2JwUgcUhzzZo4IoHtXcIx%2Bh7JcPY8NlOXA2dbecY%2FBxgzS24w9HAdDa0KdMKxUJt%2F%2F3oLiIFlzC77WRsnLTkLn60mnXGPZSt3PV8r0BfzeQer0iejxqVVblKoiOFnZBrVCj%2FS%2BSSlHUKm71kiMgRzNhbndN3vnenDp8jkLVHYJZ8sqR9MdNq2dn066AHlOnlkBFgHlswqfKvyAY6pgFj4JLtE1vptawZqdEkPClgf3fW1Wlhn6PDQApYX2eZo%2B%2FMDG2BioCo7KrPXL1UySaKEXqSa11lBowmpLnuGxiggikjuhD1Zet9kTCMfHFfrvElnrbWVj72HO%2BzcR2Vwo%2FvttlecR1HBjdW5e8E2FScuVfU2JAM3VikGia0zWXs9GSd9WB2DItZMsueyKbT5z9S3lDPPRzJq6E1qHbvrJgePCZqiGYR&X-Amz-Signature=47bcf8d9c1d279192002e101924e67b8ef2f5b27766555b89241c2b463038466&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6ADVLZW%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FNHYtoF7pNRgz3NROq8Xih4ki1SPH%2F%2BGT3Gg4da5L8QIhAJtXYITsfeadpcpHDp%2B9RX9tINP0Z5akfya1rfs5ZXXnKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTn01E8Oc2JElfmsAq3ANXGovHPACKTs5DKHlyZ7R3Eybj895oZPwlaCzIEv8LuOrhtojW1kqFjWo%2BwSP3jSmSbHJ8NimeoN2J8gHKvh18Iiv9H6RUkcY2P4MbmbMoTpLnoHqVAT%2BHKMiz2q8AWDZeM7c4Ud0r6%2FXb%2FTIzEYVkxdbNOIZy7ZTsQgHTn3BlVfYluFKm2d95NMGLhZ5gPLv3B4LZ4ZnJErNzjYguMl%2Bzl3ZCBvniAXH3rYaUZyS3HFQ%2FxkbPTc7sKScJmL5epkb7kVeGZ6v3txrFmsammYLO88wl0Yax4Y43BXbiowgQAWbGVyCZOHYHaK4A3hHZY1KBz3jcPVRydstX6FVQjkNrgpd9RgfBQ2p2r1AWK2XrYml135CdXpezHoxJmK4gfaHQ3ozwc83umywn5lsfVEV3DruGv%2FFPzGlvaHuKCLnDfG7Y4ybsplnSiRLsdJTqA%2B1mFEd2lYjJoXfn8k%2F60b5y%2FRAHU%2FC0Z2OXqSODuXoLLw2BazJOhqDtNYahBRkDX4rpb91X9BKNZ9mf0fh1N%2B1a%2FgyFocovMsAdfdKgy7Ze%2BXUiZgSsuQCHyjmYceee2gs1Tf5gA7f4apkeq9hja%2BY6Bj6fn%2F6gfRQJbf6eoLJ%2BBZsXsbm8lOvFtUOSwjCS8K%2FIBjqkAaYtPrri0slfF1%2FAbLBA9n6g447oT%2Bw%2FEfzpptCqmC6rOijOFjk40N%2FogkYB4vh2YAF4KewLKznfMzsaoKE8N4xb7KVxXOeiSeWUGyds%2FzcHtqivKbqEfjOP1J6rH%2BHKVA7w4f9HVIDeN%2FTL0bN8QR%2FoEtPw2N9L8EwHnYVNIc5Q1hV%2B6letUKwSyGIqHyY%2F6H75t8QcDHhSNWRK5f6ax2Dg7Fbm&X-Amz-Signature=f6410c9f8ce2804ea4c525cff490eef3b762273409f76cc2fba0dfe0924f9be7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KHIPS3B%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHN6%2BbzTcpwRvmqziQ5Z7JNM1HT7GjbqeutKXgEfOcpMAiEApJ%2BIEQwIS4tE%2FUG9Ccy0mdePYnmz4fOEn%2BWRRZ2ywWIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDDfDyTFIx3SMBkfcircA29klk3ljGe%2FO1ZbzUs2tWmSqt2giuhJUqtZHjcBa179hX%2FSikaONRkoWLRjZA97gCqBirM6m%2B1zQOm1mfbFJKUA8MsX5AIIpVT9bVQYz3%2FQDYuvrK27z1sCq%2BWVd2c9e%2Fhy1Surd%2Fnr%2F3qA0fFD5Zjtq4XNh57ml%2FqZsg26BNeipQychR450%2F17EI9ZVDCV7i7oUcaI4%2BMs0WgHl9NYZ0q%2F8w3TCaRE02xFtSD7xJmTmTuBaQca%2FQISRI5Ga%2BJ9I98YYKCS4Q5q5zUK4KjKgKrCfRfP4lF914OKyZCiuVsObgj3eNFC%2BynTCcpVDCzBrK8CIdulxwI%2BSUDDHpVT1yhWsB7KU6oZaHE9yCsMGUt8TK8iHlSsNfb3MHngQTCvm0ZRKP0WH0NSMAsRE0VhAIh5igC7kaceifNTdlHQUAK2dWIMJadkw5AgPQ0Og8pmZ0mvBE0FdbtxSUea6Y2EsTSbAnRsQfz%2BKPxoda4iNvez%2FoJWo1lM21CghxE3A6phIDnea%2BohaE1U3poJxUw%2Fvb5D3b%2FyOYPWOvWZSkGS25KhOzAoxwZRoUfqWoX%2BellxTQjiG%2BUkhtzYcSRSr48%2FkwBDVHXPVI8OFA%2FOnObsFCa75tfVQavh6CfjzryIMMXwr8gGOqUBEBtKnfPQKnYvLcg9LgJ0m3H2Gs3L1cyWym5qOjOZb5BgYECKl8nnh00KG47zUA7JwB8dTOUMs%2FnULFuVY1%2FdKXe%2FoT29rUG2wE3olqVZ%2F%2FvGI5q5p5irFRd9evMPQDijlxGpnrkziDQyRxTsjWo4UT1II2srHk3mUiURW%2BjFDgimDFbMONs56BTESHMvltTLvH5JBcrf2VnYWlvUi7QeJQey%2ByOg&X-Amz-Signature=b65967e0c5c3d9f9effe3f2c18bef12e262515b5d3669348ea8945b495c6f43a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SRQBEPT%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1oW5PLLSxNnmveknweIb%2BQZfLVJHwJgi592b3LoDmuAiBDLxfd2V9QaCuGzA2acVNGN4CLEN3L5mXnbgVsGMeMdiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3V8NlTVwUAAIKMkdKtwDlFvkszdQ2pFh%2FTKazT4cERGb%2FWSHO4aQucuP6AMSMIPSggmakq0irHETweukAD2dTJ9udCjgBZYECAIcRdRAlJhm0Q5Yb1jhjewfUMYeBBnaf9Kf7Hj%2BvQDqDWDYtaWZJziqV7GNCeab6lFFHbb09UN1KKXZ%2FVidhevcqEIqXCx8FopuxIzBS5Lr2qakrLJABgBKQ4uw27Gt80k2RCXxrhJYUnKTKj6KLGrd%2BIrizvGBg3fvfSkPuMq14LUNDmBdUMfrgyzPOma2STU1PF0%2FYwYHxVLyxvMxTIG5hyNy8taUPVroOp4qEr70UvUwqKI8ZcxVoYj4RWb0VKfBI%2BM%2ByI7NvpoqL99qwFYOqK8SiRT6%2BxjcNMma0By%2FI8XjOJkuq6JotTPCGRtxOYG5xvr%2Bxnr9Ycn05PLSo%2BF%2BsOx1JjSiH9ucUz5p2JwUgcUhzzZo4IoHtXcIx%2Bh7JcPY8NlOXA2dbecY%2FBxgzS24w9HAdDa0KdMKxUJt%2F%2F3oLiIFlzC77WRsnLTkLn60mnXGPZSt3PV8r0BfzeQer0iejxqVVblKoiOFnZBrVCj%2FS%2BSSlHUKm71kiMgRzNhbndN3vnenDp8jkLVHYJZ8sqR9MdNq2dn066AHlOnlkBFgHlswqfKvyAY6pgFj4JLtE1vptawZqdEkPClgf3fW1Wlhn6PDQApYX2eZo%2B%2FMDG2BioCo7KrPXL1UySaKEXqSa11lBowmpLnuGxiggikjuhD1Zet9kTCMfHFfrvElnrbWVj72HO%2BzcR2Vwo%2FvttlecR1HBjdW5e8E2FScuVfU2JAM3VikGia0zWXs9GSd9WB2DItZMsueyKbT5z9S3lDPPRzJq6E1qHbvrJgePCZqiGYR&X-Amz-Signature=6e853786db57af15baedd2b0d421e7d4c3854a469efd8f54bc1b09b33f41d5b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
