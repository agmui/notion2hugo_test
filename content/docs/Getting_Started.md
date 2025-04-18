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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAM4V4XG%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T121420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIcNn2e%2Fa2uvjQxatdBQV8Jb8ArciasaL46dhP8TXfIwIgXVTj0%2BlVOyNvUN5fxzj2qeCa2ykKk0ziW1ewB8fMvWwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOiCYxisR513CdI7gCrcAxgAKRJu8Lb6K4bC9921EAE3U%2Fq35XhytXzFHIGEhfJtbJOySj9ph1JpiuWHhCK9%2FuBza5blFxu2F0MO0Srf%2BMjhdDCESLKnziqVQ3aXa0MDludUx%2Biah%2BKFx2rT2D4bWN3PoejVa%2BN23JsEj5JzEfznPf%2B5Dm9UvlC7hRwBRluPnF8LKfFNLmumC60UjUZqrgWF7baXpMq2%2F7RX4BwpA0Q2n8wcwf8wUxKahuSXljBluiTtTtXLo0MP2sCtAErt9%2FB9v%2Bf0dcarEwRWlxPKmiLyy3s1dfHUw7OM%2FdaDL%2BWdf%2FSgMItFWNLf52cWXLL6neDK3xbugFp0JxMa57CyTBYqllpEdWL5Q6RQDCxx4eo2RMchpbLkBRtaiS6MZQ1lI1NBu32ZHF4dpPkyjKMBnRjZ4AIC07fBOd93OHodlWKEvZjKM%2BfWjfQ2uOgem6AqMh1WrwO0x0E4JM7SKxEHD2YeTarcKKB62ty1w7Dt0iE4VH3eQc7Qrgegp%2B0BIWMygSrOVK%2BOGwcSVuVuSc7WSLm3C364Fcw2O7P484Ktvqqi6wkN40S7BDDCo%2BZ%2FiJYpeZE6YpOMLoyxNXrQ0C91gW8k4Iq%2Bm8h%2FHESdStiSqMp8aJu3jAyT6EFfTbBCMMf1iMAGOqUBeMPSkOIowxkNRbGxONm88Qx68bQuoKHNU9UW%2F3kYIwFh17E7zaRJBejHFFDyRrrtTfOeW%2FkSc2Ll07o1uKhKm2Rd68Cq3bEzcKmKpilbYs6CBSUZoA2vAGdG01F7LbYsScD8og9GYOwoZIyWwkpIFmZC6ntdsXQafmFkyBzkki990hu3WSjqHBKORkzL70MNTGbfU8MJXCKd%2Bg6gtsNPnrcCliPo&X-Amz-Signature=496854c37e5e4ed61693286e7f12773f6e21cc91c93b97fa944c4872bb7e16ef&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAM4V4XG%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T121420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIcNn2e%2Fa2uvjQxatdBQV8Jb8ArciasaL46dhP8TXfIwIgXVTj0%2BlVOyNvUN5fxzj2qeCa2ykKk0ziW1ewB8fMvWwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOiCYxisR513CdI7gCrcAxgAKRJu8Lb6K4bC9921EAE3U%2Fq35XhytXzFHIGEhfJtbJOySj9ph1JpiuWHhCK9%2FuBza5blFxu2F0MO0Srf%2BMjhdDCESLKnziqVQ3aXa0MDludUx%2Biah%2BKFx2rT2D4bWN3PoejVa%2BN23JsEj5JzEfznPf%2B5Dm9UvlC7hRwBRluPnF8LKfFNLmumC60UjUZqrgWF7baXpMq2%2F7RX4BwpA0Q2n8wcwf8wUxKahuSXljBluiTtTtXLo0MP2sCtAErt9%2FB9v%2Bf0dcarEwRWlxPKmiLyy3s1dfHUw7OM%2FdaDL%2BWdf%2FSgMItFWNLf52cWXLL6neDK3xbugFp0JxMa57CyTBYqllpEdWL5Q6RQDCxx4eo2RMchpbLkBRtaiS6MZQ1lI1NBu32ZHF4dpPkyjKMBnRjZ4AIC07fBOd93OHodlWKEvZjKM%2BfWjfQ2uOgem6AqMh1WrwO0x0E4JM7SKxEHD2YeTarcKKB62ty1w7Dt0iE4VH3eQc7Qrgegp%2B0BIWMygSrOVK%2BOGwcSVuVuSc7WSLm3C364Fcw2O7P484Ktvqqi6wkN40S7BDDCo%2BZ%2FiJYpeZE6YpOMLoyxNXrQ0C91gW8k4Iq%2Bm8h%2FHESdStiSqMp8aJu3jAyT6EFfTbBCMMf1iMAGOqUBeMPSkOIowxkNRbGxONm88Qx68bQuoKHNU9UW%2F3kYIwFh17E7zaRJBejHFFDyRrrtTfOeW%2FkSc2Ll07o1uKhKm2Rd68Cq3bEzcKmKpilbYs6CBSUZoA2vAGdG01F7LbYsScD8og9GYOwoZIyWwkpIFmZC6ntdsXQafmFkyBzkki990hu3WSjqHBKORkzL70MNTGbfU8MJXCKd%2Bg6gtsNPnrcCliPo&X-Amz-Signature=f2393701fd77821f8d61af5bb04f0a2712c100c4b9263cd8c19b7881fbd03008&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLBEGXWP%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T121429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGd4bQoQ2HeRKKK%2Fen%2Bop34E6LAgv1onO2sn5NPe1x47AiAdFbMyzd8IOip6GBQbTevfpSYVMgrP3%2FlnfQqzJhI7Xyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMXXtgeryyj%2FlNljVUKtwDRu6O6tZ%2FFOGX%2FXAaUVpPsiVQPnewqojInnaPgQpgrtLluTeGYXGOV8kkJGf85u8RxF%2B7VBM9KFsqhqTbI%2BxH04ZJTMvagDnJCEvcwwhcAmgO5W7E7ot8EZIC5GjirVQ%2FFZ4LP%2FnCNif6UhO288u9QKBaZJGxbt5yZVMRQhVyQmaS04CdTHMntHr7ITM4RzvEMt1%2FQH9JkYkY%2B2W87vhwS7M1myY3I9j6jIxwIv3fUftw50nDiFLeBApbM5UxySg5G6x9JCDzQCOWcAfjPkvcFuUIyK6rQ93JaOuvUvqUJn9ZNR7yyseWScQNz7PwmaZ9xtT%2FH44pJYZsFS1OXIB0UUgD52v%2F0FfID3%2B1p1zqezm8D7c5JTsNiFhsv8rgnKRq1QMAJFCYQ035rYDeZBl6IJ7acvvpUQvjhSWSs6ktGfldexfbCEWIFpIt%2BuBFc8DdkLBONEDgr0n7Rbnaf6WuZLUwbe4vug7n4%2BDMHPQyX884q0Gm717d2Ng51tlT0TjNaaglcL%2BQbyxqKvlXQa3dUHO86ftFuYXntQD%2F25yfDhgV%2FID5BzLA41SED80nsv5PTnURQMug%2Bmg20W3Qzoy8QeqTwrHAYDYliQHy0EW%2FEaw59lTEO6IRHBiQgngwmvWIwAY6pgHis4yqYMO0%2FCyON2BDo0JMuiy0%2BBVZtzoEKQ0LBl%2FpbVAsISVubQrT9rp6%2BrSiEM%2FC8pc9n5SabYWRmjrM6cYoJhaQPZYUgQbu4y%2BqTeNXHLblqjFkzJQkspPRc%2FOQcSZcPozvtJGF5bf0GrPh0NV5BIXOx15uIXxIiIxmuMaWogHuSyFKWP%2BCcxykyga31GiXL0udiaLGrNdlQ6CHKRrNYCRarp9W&X-Amz-Signature=774a0fba90b3233c088f77215fb0d7f65d1bba9ac3a24cd6531d7e99323ac555&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMENA3HK%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T121429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4YhlZc0Z2P5VuiFghyq%2BLap9dcy0tnrjIKkeDdAea%2BwIgB1jDB0gZ5bH%2FIFeFSskuDTRsgKMo7GYiwaV1gC0ybFIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPqCU4Rn49Xgd6alUSrcA82L%2B5zA44pXmJ81b9aON7lZSBuIzxXmIN3cmT4WI0Au0s2ZMWtbo2asGsNQdhN7N%2FU6DXAii62g%2FKA4BYt8hZH0q0MTprw0H3h59QbvViHKAG%2BusBTNAvpWXC%2BX3zSZ2jqCLE1%2Fmw%2FDg8FhXLdMhYaqtOSi5Kw%2BfqaGu7geFBqBDltazx9hm54cbdI7Wm3wFJxm11KRZlTvuFBJ2ceZqq5pUzj80MV1gJ6WtfojVT%2FXGKn%2BNaR%2BUIqCPl1vAPj9lgi0VoVtxNdpufTR3jR5UgVIu20iSQnAU9Qyul3HlHOJgwwGNt8HDsqRSHFzMOmS5qgKmigHZ0ezxD6%2BkN%2FweRmCAf8iVjIkTFtTy8gXBkAAKFAsB%2BXWDh%2F8nY0fLnWbRH14YIVtJwlsda9%2BpNnxLJeZ0y%2BCjKA7cMO%2FQscN8PdK65N4xb2GvKMIJy0smxTJtJZne86F1vgMa09EalPtDFLYQkur5xamj5NLJsBEZ27PoG5GHzrS%2B3kHd%2BrMSAmxqY6dESCSkB5Sw5%2Bjewxy1sVQLiM6baSEEMqps%2BDGu0opZuLQCyib%2Bvd4Geh7H1tcfMrxfTtn0af5DuWrEDs9Zr0FKCtrSUFD%2FpvCYX9XlM4t5ORvjx3Id3KtPO05ML71iMAGOqUBovaN2yjAUvvo66EmJq6%2FIyxdiKSBOE%2FI7nLCIQgoAsMZwzkCTRyVlkOh4b2g2Ysuh8NriHkRE260yaHX3M%2FV0%2BKU6S2%2BOo1MIE2pHU3DDso0Gn6iUmUwFipg5STqCNU1IeyEx2f%2B%2FXHJU7gGw%2FoxKZXdMbUgPg3jKj07i2143GEZ%2BiS0tGtlS9O2s7WV7eRYWFjCiFZRxogiGtVAE7HaJqtDiP8m&X-Amz-Signature=82154a4efb1328fa1726c7a673d83aa08dfbb45902cb6ef80f6b7035d8182276&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAM4V4XG%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T121420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIcNn2e%2Fa2uvjQxatdBQV8Jb8ArciasaL46dhP8TXfIwIgXVTj0%2BlVOyNvUN5fxzj2qeCa2ykKk0ziW1ewB8fMvWwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOiCYxisR513CdI7gCrcAxgAKRJu8Lb6K4bC9921EAE3U%2Fq35XhytXzFHIGEhfJtbJOySj9ph1JpiuWHhCK9%2FuBza5blFxu2F0MO0Srf%2BMjhdDCESLKnziqVQ3aXa0MDludUx%2Biah%2BKFx2rT2D4bWN3PoejVa%2BN23JsEj5JzEfznPf%2B5Dm9UvlC7hRwBRluPnF8LKfFNLmumC60UjUZqrgWF7baXpMq2%2F7RX4BwpA0Q2n8wcwf8wUxKahuSXljBluiTtTtXLo0MP2sCtAErt9%2FB9v%2Bf0dcarEwRWlxPKmiLyy3s1dfHUw7OM%2FdaDL%2BWdf%2FSgMItFWNLf52cWXLL6neDK3xbugFp0JxMa57CyTBYqllpEdWL5Q6RQDCxx4eo2RMchpbLkBRtaiS6MZQ1lI1NBu32ZHF4dpPkyjKMBnRjZ4AIC07fBOd93OHodlWKEvZjKM%2BfWjfQ2uOgem6AqMh1WrwO0x0E4JM7SKxEHD2YeTarcKKB62ty1w7Dt0iE4VH3eQc7Qrgegp%2B0BIWMygSrOVK%2BOGwcSVuVuSc7WSLm3C364Fcw2O7P484Ktvqqi6wkN40S7BDDCo%2BZ%2FiJYpeZE6YpOMLoyxNXrQ0C91gW8k4Iq%2Bm8h%2FHESdStiSqMp8aJu3jAyT6EFfTbBCMMf1iMAGOqUBeMPSkOIowxkNRbGxONm88Qx68bQuoKHNU9UW%2F3kYIwFh17E7zaRJBejHFFDyRrrtTfOeW%2FkSc2Ll07o1uKhKm2Rd68Cq3bEzcKmKpilbYs6CBSUZoA2vAGdG01F7LbYsScD8og9GYOwoZIyWwkpIFmZC6ntdsXQafmFkyBzkki990hu3WSjqHBKORkzL70MNTGbfU8MJXCKd%2Bg6gtsNPnrcCliPo&X-Amz-Signature=ea51a1773376f1bad356adc648ebb9adc3792f8c690303570a1a1236085d004b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
