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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UBDRUQN%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T200957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGF4uSHl%2FdTTL7rvzrWuhX6%2FZGdZjAr0bbJ%2F6pxPuKmwIhAKH2NM8yOQXZtlXeErRo3SoMoxZSlP%2BTa6s%2FGfi1ItJeKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMuwUze4CVfPeMy%2F8q3AODMu%2B7nQRvcUPZprnpf1FCtrWBHgnO9s4ciLN%2BJT3GOf584tcBYTBawFj8a4LwEVwu8msLeIgu4g5W5QnuzmsRDPGFEmwiViN6bm%2BEE9qEbEoXkMw3X%2BlMrM264AATZ9c2EBALOG2X594BbfJzMPOq1uLvmy9s2rTjaKmbdONZ8tQgfyfg2z6EOZzjj9rCkH3lY9zs5%2B6QizzHvK5fLWWETAny8J6yDl48skYo%2FooxFeq9O5YgBp%2BR2efzlTNueNCcGGiNk3XdSZ%2FimXayfAsKeBRHJtXHClthBtAcpPgDynTC8CwcRH3srSnWOzquxWG00zZ7Mbg9IyqQ7o1zA8GWuxYNGh9dBjvJuf65MMoudYkHidPyAL0qTM2AvqlKB26lOd4mThDrv8LAg3Lc8TClScwweET5wr3t6H7Dv5%2BVvKcBY04hnlu2K87j1TSxV%2BNw9mVRzdmJmRW%2BCzZ36Jbf3lHbYL5N%2BN35YP5g%2BgZKFuWkUxakM5J2hyDpmiYflk5AYMh0oNerb4wsyh4ijgspMtE21mDicCOfwpk4RrIK9KIPeBcH22rkFQRDu2o2D6Ad%2F%2B%2F6uU5qWjTP6OZ7A0I7ZT3LGGQEYDq2I06wq4%2B%2BpRSrPqVYRhx07%2FoQnzDQosDDBjqkAWND6OeEfDhQoUk%2B5yX69Uq3k%2Fn4pR%2Fo8UixJg8CdBUC8ovHbpFmKY7bmKzvTbZiELq98s8U%2FgF1SEnZm3I2bd3zfj%2BdhqcpC%2FOcEXOIs0rhUug9Rgl2EKn%2F3clkJD3QKOmRTHonnu0eHTs6FXpG5Ltfhvsy0Oj3vEt3GsePNj8rwsQcKkWBZqGBBqRlPwr%2Ffma0lP8DPCy108BSDcnIwJdEEfyh&X-Amz-Signature=5137c2370a7ab9b92327211e6e43975b9fc6f80c10006a936b48c1515a722d23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UBDRUQN%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T200957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGF4uSHl%2FdTTL7rvzrWuhX6%2FZGdZjAr0bbJ%2F6pxPuKmwIhAKH2NM8yOQXZtlXeErRo3SoMoxZSlP%2BTa6s%2FGfi1ItJeKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMuwUze4CVfPeMy%2F8q3AODMu%2B7nQRvcUPZprnpf1FCtrWBHgnO9s4ciLN%2BJT3GOf584tcBYTBawFj8a4LwEVwu8msLeIgu4g5W5QnuzmsRDPGFEmwiViN6bm%2BEE9qEbEoXkMw3X%2BlMrM264AATZ9c2EBALOG2X594BbfJzMPOq1uLvmy9s2rTjaKmbdONZ8tQgfyfg2z6EOZzjj9rCkH3lY9zs5%2B6QizzHvK5fLWWETAny8J6yDl48skYo%2FooxFeq9O5YgBp%2BR2efzlTNueNCcGGiNk3XdSZ%2FimXayfAsKeBRHJtXHClthBtAcpPgDynTC8CwcRH3srSnWOzquxWG00zZ7Mbg9IyqQ7o1zA8GWuxYNGh9dBjvJuf65MMoudYkHidPyAL0qTM2AvqlKB26lOd4mThDrv8LAg3Lc8TClScwweET5wr3t6H7Dv5%2BVvKcBY04hnlu2K87j1TSxV%2BNw9mVRzdmJmRW%2BCzZ36Jbf3lHbYL5N%2BN35YP5g%2BgZKFuWkUxakM5J2hyDpmiYflk5AYMh0oNerb4wsyh4ijgspMtE21mDicCOfwpk4RrIK9KIPeBcH22rkFQRDu2o2D6Ad%2F%2B%2F6uU5qWjTP6OZ7A0I7ZT3LGGQEYDq2I06wq4%2B%2BpRSrPqVYRhx07%2FoQnzDQosDDBjqkAWND6OeEfDhQoUk%2B5yX69Uq3k%2Fn4pR%2Fo8UixJg8CdBUC8ovHbpFmKY7bmKzvTbZiELq98s8U%2FgF1SEnZm3I2bd3zfj%2BdhqcpC%2FOcEXOIs0rhUug9Rgl2EKn%2F3clkJD3QKOmRTHonnu0eHTs6FXpG5Ltfhvsy0Oj3vEt3GsePNj8rwsQcKkWBZqGBBqRlPwr%2Ffma0lP8DPCy108BSDcnIwJdEEfyh&X-Amz-Signature=40579b3e6ea3cc5fd81fb7ec51b38b797f5d873d40338f6bdf40c27b72b602bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UBDRUQN%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T200957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGF4uSHl%2FdTTL7rvzrWuhX6%2FZGdZjAr0bbJ%2F6pxPuKmwIhAKH2NM8yOQXZtlXeErRo3SoMoxZSlP%2BTa6s%2FGfi1ItJeKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMuwUze4CVfPeMy%2F8q3AODMu%2B7nQRvcUPZprnpf1FCtrWBHgnO9s4ciLN%2BJT3GOf584tcBYTBawFj8a4LwEVwu8msLeIgu4g5W5QnuzmsRDPGFEmwiViN6bm%2BEE9qEbEoXkMw3X%2BlMrM264AATZ9c2EBALOG2X594BbfJzMPOq1uLvmy9s2rTjaKmbdONZ8tQgfyfg2z6EOZzjj9rCkH3lY9zs5%2B6QizzHvK5fLWWETAny8J6yDl48skYo%2FooxFeq9O5YgBp%2BR2efzlTNueNCcGGiNk3XdSZ%2FimXayfAsKeBRHJtXHClthBtAcpPgDynTC8CwcRH3srSnWOzquxWG00zZ7Mbg9IyqQ7o1zA8GWuxYNGh9dBjvJuf65MMoudYkHidPyAL0qTM2AvqlKB26lOd4mThDrv8LAg3Lc8TClScwweET5wr3t6H7Dv5%2BVvKcBY04hnlu2K87j1TSxV%2BNw9mVRzdmJmRW%2BCzZ36Jbf3lHbYL5N%2BN35YP5g%2BgZKFuWkUxakM5J2hyDpmiYflk5AYMh0oNerb4wsyh4ijgspMtE21mDicCOfwpk4RrIK9KIPeBcH22rkFQRDu2o2D6Ad%2F%2B%2F6uU5qWjTP6OZ7A0I7ZT3LGGQEYDq2I06wq4%2B%2BpRSrPqVYRhx07%2FoQnzDQosDDBjqkAWND6OeEfDhQoUk%2B5yX69Uq3k%2Fn4pR%2Fo8UixJg8CdBUC8ovHbpFmKY7bmKzvTbZiELq98s8U%2FgF1SEnZm3I2bd3zfj%2BdhqcpC%2FOcEXOIs0rhUug9Rgl2EKn%2F3clkJD3QKOmRTHonnu0eHTs6FXpG5Ltfhvsy0Oj3vEt3GsePNj8rwsQcKkWBZqGBBqRlPwr%2Ffma0lP8DPCy108BSDcnIwJdEEfyh&X-Amz-Signature=c6400026218dbf4b3085a0c4589dcc79d8171ca001c44610b6acfbf71a6b831f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLTX2OU5%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGk04nDw86915%2F5zHgnntQzDmdqans36hxLCmmga%2FVpQAiEArxsl%2BUxdUU3OFvjVDv5uxu55FtbgUZyfa%2BKHml4iPQwqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKrwfCEsfpYa6fTeSrcAyjeSfMayoZ%2BfePDKAr8pNSyYmqJpFfcfxNR3OVGfOHTKOc6AAFYmqXd3pJ9hnTgO34Syb09NRtOyzq5Pz%2Fe7PK9c9R1WhyogRdotrooT2gkzQ%2FHsAnuGWX0l76dAfVqFdT4AP8ME6pSyNUAevZG0H%2FHvqBVyY%2BW2Ev8T6FZA0kTcfNC6cNKIRU2i3VOY02mXF9aoqydmWmjOZPKZcF85gceN2%2FpWPEEgqJzeGjcHzG1aTiYHsmNl%2BmJi5mA0yuu2GnW0lJJv8%2F4q2WgFSOU4T%2BXbge1U9NW3VXa7%2BXK6tETmwq4lEHkLyGKIULK5ueB7ZFwdAhHq6h6nEpihFcGY9U%2F6GfcRJyV1zSnhoNTzH8kZ45kp6EM3U4VV7fzAplgMfZxir%2BCbSIwC5awSxQSYH77YKqJG2JJerXtdG6jWu7bN2LT1KCowAuUqNfFRRg39GdEDNsXMLn6rYp73RWGMDrCNqGjFtM7RjmlQNCeMKeIlIQi2r0njpWK8Igf4Xhk2SWJJ5JX%2BrGfS0JnLVMtBcLMJZKK4Ie5Jmy0LCCBUipqWvsFeb1rm0I1mqGgzyrDE40l3keSIhu60ZZfNAmU99Vmd6Ggf4CVkV3Qfidh9rG%2BfJoozgHpoimRJIyRMM2iwMMGOqUBI2TJN9YV1KZMCO0XzjsxWxbjFJr9%2BWwa71%2FplapnWfVDC3ITtpbKca%2FO8rnJ%2FLLmzQMmZiBd6Dww8rKUpJGl2yVS6sZl8oakh7MRzh2JaGDspaC37DrQa7tRuFl%2B%2F4dISzhbWpao0l%2FUsrCgbteaYOk%2Fh6FldLzvaHc2mFgj0omy2KlFKoEjnEfEM%2BSWIRnQQP6FvOmnhCTw0k%2Buhi8%2FYoL8EXfS&X-Amz-Signature=04763819fdc5d891e556c8ca9c6ee3e4e4165acf6b84d5836a18469ea11b198b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4IPU34K%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqslHzl4va%2BoFS8%2BBvf%2FrPBxwaYjMfKwppGzEsluhLkwIgH3WIhclfl15HScLax6MWEhH1XF%2BXT2p6J37f4C%2BoECgqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2DwG%2BNgJWDY%2B%2Fg0CrcA90wqWi3dcX%2Fak4spf9WRQXSzZYDCJEkD2em5dK4L1A6Vx%2FkkGfwUMHuggjJ8Vb6OsYwl1gduc80Qk0b4M1a60o8AoP6QPMmYA78Wxl9FYnjZfoDTyoIE5UDtrIkgEFXZmJCAIf%2BZLm76K9MEx0nPPQlyux7QpTFISuICfkLz3cQ5ypbWkn9XqGhxwKd1nkMGPQgcDKJpqbgQU0KuSDNFqdtouZ%2BuE2vwzQ%2FWxpKhkmCH%2F5Nyqc1B1ZSeZ6QZKDCtzOVhLkH%2FAuUuaRgN7FR5t0fe9BYWa2wYI3chemAnTnJTfEUl5kAbnfMQiPNiyO3sn%2BAdtDacgrN2rgimqzOQNLnd%2BUsRKsRLyml8icZdtFINgrlsFSrC8%2B96vKZEGUBIf3R4clH%2B3W7DfoMjlJDh2V1vT102W8xjRP%2BHTldHoWEf6Q%2FkWH%2FUgQ0%2BpAZEEIJ06dJK0z5epdv2f7c%2BoO3MoEnLISuYBp4zFpikdwyKYXYYeMDrPgcevwcIUoAGH2a33Egjo84rPsxj17Wfi%2FksREC3uTS1HNFip3UW24bMfmpTeX74BznMifphWkzUorK72qpoOmb0bIhDIy%2BMj11pjFlddyWeixWSH0o%2FatXERFa0js3rIWSdWfjpB85MJ6jwMMGOqUBMF4vOLT5MlfOqAhvDVUhPd8NAvrdyvoMGEpQGwC3QG03LmZWthZTasfpKbHX2Ek9LoimIOWGEsTXzi9J7%2Bm%2BhwtcXnv05ec9m8pK0apnf85886%2BptA%2BQJVMjw5khQfkkEp3vrLm8C3ApqfaVBXQcwYALhlD4o6TEjI6OrQfax0VuiyCljqN7iOYc1zZtENPd1SLXqazpU4hDE1SUzKMLTf0F4lm8&X-Amz-Signature=6913d73ee53c62d51306596142708d8996ae05e20be1fb29287691de73b32e65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UBDRUQN%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T200957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGF4uSHl%2FdTTL7rvzrWuhX6%2FZGdZjAr0bbJ%2F6pxPuKmwIhAKH2NM8yOQXZtlXeErRo3SoMoxZSlP%2BTa6s%2FGfi1ItJeKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMuwUze4CVfPeMy%2F8q3AODMu%2B7nQRvcUPZprnpf1FCtrWBHgnO9s4ciLN%2BJT3GOf584tcBYTBawFj8a4LwEVwu8msLeIgu4g5W5QnuzmsRDPGFEmwiViN6bm%2BEE9qEbEoXkMw3X%2BlMrM264AATZ9c2EBALOG2X594BbfJzMPOq1uLvmy9s2rTjaKmbdONZ8tQgfyfg2z6EOZzjj9rCkH3lY9zs5%2B6QizzHvK5fLWWETAny8J6yDl48skYo%2FooxFeq9O5YgBp%2BR2efzlTNueNCcGGiNk3XdSZ%2FimXayfAsKeBRHJtXHClthBtAcpPgDynTC8CwcRH3srSnWOzquxWG00zZ7Mbg9IyqQ7o1zA8GWuxYNGh9dBjvJuf65MMoudYkHidPyAL0qTM2AvqlKB26lOd4mThDrv8LAg3Lc8TClScwweET5wr3t6H7Dv5%2BVvKcBY04hnlu2K87j1TSxV%2BNw9mVRzdmJmRW%2BCzZ36Jbf3lHbYL5N%2BN35YP5g%2BgZKFuWkUxakM5J2hyDpmiYflk5AYMh0oNerb4wsyh4ijgspMtE21mDicCOfwpk4RrIK9KIPeBcH22rkFQRDu2o2D6Ad%2F%2B%2F6uU5qWjTP6OZ7A0I7ZT3LGGQEYDq2I06wq4%2B%2BpRSrPqVYRhx07%2FoQnzDQosDDBjqkAWND6OeEfDhQoUk%2B5yX69Uq3k%2Fn4pR%2Fo8UixJg8CdBUC8ovHbpFmKY7bmKzvTbZiELq98s8U%2FgF1SEnZm3I2bd3zfj%2BdhqcpC%2FOcEXOIs0rhUug9Rgl2EKn%2F3clkJD3QKOmRTHonnu0eHTs6FXpG5Ltfhvsy0Oj3vEt3GsePNj8rwsQcKkWBZqGBBqRlPwr%2Ffma0lP8DPCy108BSDcnIwJdEEfyh&X-Amz-Signature=989259511cee2b3c916cf824fef9b3bd15b86fa74fccdf8bef563848d9fbcbee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
