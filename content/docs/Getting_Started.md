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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYCVD7ZG%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T100915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJidtg11wftdwlZn%2FyvF99vuQwE6%2BPRzZHx3mJgHgdIAIhAMKB1DVfuE5VS11Tsa0GI9MVOCi4mPnXuJ3uG6YikcQMKv8DCEIQABoMNjM3NDIzMTgzODA1Igz%2FFzfGVU3VNJ2o5PIq3AN%2FtrTo0bfebHpDRkTRA2DEWGvGM%2FMsJEaORnyVi2u%2FaIMCabRgjcwPqdmZx5DLZO6%2B2oMPIw3GFoUFWJ3eYIrF0MVocP%2F%2Fa2rrngvbt2VeuGH6lA5swfWoYA1XiB4%2FqSnUwlzG7lrAfH08sc%2FkfaGe5eBsihd%2FNwme7ecSL5xaYNTdk%2BET7LNsaFlI%2BHDYRn7tmd8gOnQg9rsVp8JFUX4K5w9Icg%2FlAxtSgKTayy4smsTKvtKQta3Bj3f8sSx91gTnxn7FXCHnDOOZQd7M1wVnwtcjwCTVHWCkR7beab94aXOWKtpdOtWQ1fj7jxtdOKvzwUa7uUHy%2F7s0Yu9hR2IJOwRMbZpuXICwfA2dxG939%2Bcq8XWIF%2BbyYCKNWEi1eGRUb4exuzNh4AbwJjUup2Zs5HyojuM51tauAqF6HmUp0P5e5EZcTGQohlx1iNcuGH8d5mxgNqyiJrXfhslqYeODE5KJn8QCVhr%2By5ThSWGBmJ2C92uDGl95OX7mgA3Hr4NaSTC7BxniRI8tZpPOzhyOm6XK030XhULbHE%2FvslofOBqcyvRe943DrxyZmBXewa%2BiygmVgjAwcU%2FWUk8SFKTwhcCNBFgtUi%2F3P9hJu2ABzVfGyquLEAkXTFyudTDm7ZvBBjqkAcsojWGxmOusp1i8tuNiiGTQBNWj907%2F%2F9K01Pg6R5RBTymBcn1cB2Z6VZ83KdqPT0%2BGgeJPsb%2By%2F45bT3fHSooqJk7xsvzWUwRwytw5O%2FauMgG1ec%2B4sV3zHFdJPh9kgdZDvmZR138cR%2BGP9yOmqOLr3DqI1WC9IhZLuNXA4w69DQuGBxPEAfQGw005R9T8OJZOOghQtpa8L%2BReXuPx7BsHwf3s&X-Amz-Signature=001a3842566b2322b6724a439ef6c080f3ee2b51740729889f9da660c6c3456e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYCVD7ZG%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T100915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJidtg11wftdwlZn%2FyvF99vuQwE6%2BPRzZHx3mJgHgdIAIhAMKB1DVfuE5VS11Tsa0GI9MVOCi4mPnXuJ3uG6YikcQMKv8DCEIQABoMNjM3NDIzMTgzODA1Igz%2FFzfGVU3VNJ2o5PIq3AN%2FtrTo0bfebHpDRkTRA2DEWGvGM%2FMsJEaORnyVi2u%2FaIMCabRgjcwPqdmZx5DLZO6%2B2oMPIw3GFoUFWJ3eYIrF0MVocP%2F%2Fa2rrngvbt2VeuGH6lA5swfWoYA1XiB4%2FqSnUwlzG7lrAfH08sc%2FkfaGe5eBsihd%2FNwme7ecSL5xaYNTdk%2BET7LNsaFlI%2BHDYRn7tmd8gOnQg9rsVp8JFUX4K5w9Icg%2FlAxtSgKTayy4smsTKvtKQta3Bj3f8sSx91gTnxn7FXCHnDOOZQd7M1wVnwtcjwCTVHWCkR7beab94aXOWKtpdOtWQ1fj7jxtdOKvzwUa7uUHy%2F7s0Yu9hR2IJOwRMbZpuXICwfA2dxG939%2Bcq8XWIF%2BbyYCKNWEi1eGRUb4exuzNh4AbwJjUup2Zs5HyojuM51tauAqF6HmUp0P5e5EZcTGQohlx1iNcuGH8d5mxgNqyiJrXfhslqYeODE5KJn8QCVhr%2By5ThSWGBmJ2C92uDGl95OX7mgA3Hr4NaSTC7BxniRI8tZpPOzhyOm6XK030XhULbHE%2FvslofOBqcyvRe943DrxyZmBXewa%2BiygmVgjAwcU%2FWUk8SFKTwhcCNBFgtUi%2F3P9hJu2ABzVfGyquLEAkXTFyudTDm7ZvBBjqkAcsojWGxmOusp1i8tuNiiGTQBNWj907%2F%2F9K01Pg6R5RBTymBcn1cB2Z6VZ83KdqPT0%2BGgeJPsb%2By%2F45bT3fHSooqJk7xsvzWUwRwytw5O%2FauMgG1ec%2B4sV3zHFdJPh9kgdZDvmZR138cR%2BGP9yOmqOLr3DqI1WC9IhZLuNXA4w69DQuGBxPEAfQGw005R9T8OJZOOghQtpa8L%2BReXuPx7BsHwf3s&X-Amz-Signature=569da3f7a50943a644fd96e7f16c04d971ffd613fc240fffd56b600664f5ea2f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYCVD7ZG%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T100915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJidtg11wftdwlZn%2FyvF99vuQwE6%2BPRzZHx3mJgHgdIAIhAMKB1DVfuE5VS11Tsa0GI9MVOCi4mPnXuJ3uG6YikcQMKv8DCEIQABoMNjM3NDIzMTgzODA1Igz%2FFzfGVU3VNJ2o5PIq3AN%2FtrTo0bfebHpDRkTRA2DEWGvGM%2FMsJEaORnyVi2u%2FaIMCabRgjcwPqdmZx5DLZO6%2B2oMPIw3GFoUFWJ3eYIrF0MVocP%2F%2Fa2rrngvbt2VeuGH6lA5swfWoYA1XiB4%2FqSnUwlzG7lrAfH08sc%2FkfaGe5eBsihd%2FNwme7ecSL5xaYNTdk%2BET7LNsaFlI%2BHDYRn7tmd8gOnQg9rsVp8JFUX4K5w9Icg%2FlAxtSgKTayy4smsTKvtKQta3Bj3f8sSx91gTnxn7FXCHnDOOZQd7M1wVnwtcjwCTVHWCkR7beab94aXOWKtpdOtWQ1fj7jxtdOKvzwUa7uUHy%2F7s0Yu9hR2IJOwRMbZpuXICwfA2dxG939%2Bcq8XWIF%2BbyYCKNWEi1eGRUb4exuzNh4AbwJjUup2Zs5HyojuM51tauAqF6HmUp0P5e5EZcTGQohlx1iNcuGH8d5mxgNqyiJrXfhslqYeODE5KJn8QCVhr%2By5ThSWGBmJ2C92uDGl95OX7mgA3Hr4NaSTC7BxniRI8tZpPOzhyOm6XK030XhULbHE%2FvslofOBqcyvRe943DrxyZmBXewa%2BiygmVgjAwcU%2FWUk8SFKTwhcCNBFgtUi%2F3P9hJu2ABzVfGyquLEAkXTFyudTDm7ZvBBjqkAcsojWGxmOusp1i8tuNiiGTQBNWj907%2F%2F9K01Pg6R5RBTymBcn1cB2Z6VZ83KdqPT0%2BGgeJPsb%2By%2F45bT3fHSooqJk7xsvzWUwRwytw5O%2FauMgG1ec%2B4sV3zHFdJPh9kgdZDvmZR138cR%2BGP9yOmqOLr3DqI1WC9IhZLuNXA4w69DQuGBxPEAfQGw005R9T8OJZOOghQtpa8L%2BReXuPx7BsHwf3s&X-Amz-Signature=bfc097e0910b71669275766e0cfde1445787ee3ef0d2721d33f4786111ba57c7&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OKC36UD%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaA0oQo8tvWStGkESBLX7JB9eyXXijw7X4gbnTa2MqAwIhAJ9k%2BditPZlqSElBRY92Z9ahfQC2tSuqx3YjZFxiykdeKv8DCEMQABoMNjM3NDIzMTgzODA1IgxvVdq%2BeDbRghUVUqIq3ANarGcju%2BK6eYe4n1O5lGj1TlP7S%2FEFY14Q3rlI%2Fcu5WnKjFSs0saUfQ64gVAHtm2ZOR%2BunqTSLalJ38%2BaXzFQ3xnqmBTPShE6RAvfnYsVQuAn32N0tKUy4JeDy8kxFIzMltLmrX0z0F%2BNTFC3zegNLTWXNirIvxh7R8q9DplWKAZGWmXkUwNevv%2FZvNmit7sw3YTuqkNF2SzPyM7x3t0q0ZgGZMsCiGqhyDEiXgWAJ5oCBx%2B7I59YVHy3NxQty%2FH2g3wnZVA9zJCJpG061y7xgk4U8ztE0Ltf%2F9%2FgiUwKDcqP6TfEyVDnGZlLxvyXgAIZ5dspUEwZSpCIHawpfbIdz812M%2FWHNi6OeyOu30gXv2tFTb25qdtNeut7QXnChfjiAU77tuff%2FA2OprG3cuDaYpW4r3lrrQNMa9Gky2dnRw1TC96pQ2xu20bFlMTPAkbN6m8iUR6KKulh4r%2BrXD1C1UzGB9pPfem02ZEVukH%2BH3gi0XnxWXf9gLcz8tsq6OJcwELT%2BFqm48DW3bmCXV95HyMN25UMteCVxDzhvVGL99zYBP%2BlQETOv7DvlNfbiPuD4L%2BqS7tEqtkqMifCjWLSHjT3NZnXLuhjvQzCYjVz1Wu1gB5ufHPiKLPh9ojDNi5zBBjqkAbjZprJHWnBIG%2FA3BxQfCKYJ6SFyAmzHrwL8WWBsmAo0cQEMHl5dCuN%2BWMdsZBQ%2ByrA%2Bc57N%2BnCxDmx3%2BTSvJQH38qLggXUNcIMwZbCvfiGHfat01BuM%2FoTE3s4ZhbEymw7wrbAhObfStAOZQt84mSjKV4dLxvcf%2F5Z%2BymKj8BTlj%2B9HBiREBKtCPaNPNBtI7etGG%2BsKbaE%2B%2FG1xiofJNhFeWdPu&X-Amz-Signature=9cacdeef08ccc9f145ce11e95e256fcd1ab6ece19f25deaa4dbbbdb2d281f2e7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466565ZFOZF%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTu5VJi3VeNUAkBjVn%2BCgmTyQRSLGVkLIlZCD6Nq7eWAiEApDaXQC9nYv1w0Ydp%2BdYINaVmMba19WTiKCA0R1ZwLEQq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDKlTjJnVEEv4vmuU%2BCrcA4afjTtmNixP19QsP%2BFBXjPTA5A9wY1P%2ByCex9plAXcTBhEYBYw042SHA77lfRUxUCfFkJG4pziVLjEejuovO8BVBWLHXhDViHookSxd%2FSowb5zLHjvVAteVgbLB7KTOuboKBTlG2you4C84SmgOS7QgPT7y%2BMvWWzTHqVAz08EK6YqpoQeX3yFNa9Bc373ji%2FvwdVYtk%2B%2F%2BwE8sWJ6c6bJNec8RPemHSGzeSIF015p8gcHx8tGjyKvtlKm4CkGhJLfes2azSfVTcJLuEhhplB2Fd8F7MCUcWM29r4PIkgz%2BRF0XvJtlYL0U2zSqW1AyEZ%2FQE3dm8xftIpi%2FXP6g8T1SpN5QcFNlchhfC%2BK0qCWPQjE0XQh4lV8Et3TVKhiBDYqt4J5NdewsixmR%2BZkG54q8ItmHmPHf9BalKtlxY9dVU30CfomzzvzRY5XxfXvyhvMyT9gGXtLW8%2BmNlNDa1iva8JXB4pPobRmj65WVMiY%2FOme%2F%2FUpCsmguKqcCPc1RpX%2BE0GzNqpgwu9%2BAUKlpfmCG%2BJC0RsaaoXNb3wuin3VUYoNV3%2FwzheO14IMYseShGjNC5MLQtIKsUDcPwklFb%2FxkOkXeBDXGq%2Fgd0nLdUHzj4056v6Jv9VHW2ZT%2BMPDtm8EGOqUBYy9x2oK99dtnYuEDoMdVwCkLDV762u%2BG7BvJMH6r5wjk7SKhuyDUTV7S85aEDZsM%2FzpZstxkM0E5YrHvmfl74ugcGHdnhvHPHwph6QP7RbEn1t7Xbi3SqzZfiX0ttCuNeeAvV8djG1xruLmr32A%2BVBbEped4h7QXdad6ktfDikJj2WwI6OGudlbxNM4nGPw91Bof9uFX9ozo3R7zZC0qCq2PpnAE&X-Amz-Signature=ba5f96d2b50223abdae5068aead75c6952f612c43a0f289fb3529c5a9ad13aeb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYCVD7ZG%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T100915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJidtg11wftdwlZn%2FyvF99vuQwE6%2BPRzZHx3mJgHgdIAIhAMKB1DVfuE5VS11Tsa0GI9MVOCi4mPnXuJ3uG6YikcQMKv8DCEIQABoMNjM3NDIzMTgzODA1Igz%2FFzfGVU3VNJ2o5PIq3AN%2FtrTo0bfebHpDRkTRA2DEWGvGM%2FMsJEaORnyVi2u%2FaIMCabRgjcwPqdmZx5DLZO6%2B2oMPIw3GFoUFWJ3eYIrF0MVocP%2F%2Fa2rrngvbt2VeuGH6lA5swfWoYA1XiB4%2FqSnUwlzG7lrAfH08sc%2FkfaGe5eBsihd%2FNwme7ecSL5xaYNTdk%2BET7LNsaFlI%2BHDYRn7tmd8gOnQg9rsVp8JFUX4K5w9Icg%2FlAxtSgKTayy4smsTKvtKQta3Bj3f8sSx91gTnxn7FXCHnDOOZQd7M1wVnwtcjwCTVHWCkR7beab94aXOWKtpdOtWQ1fj7jxtdOKvzwUa7uUHy%2F7s0Yu9hR2IJOwRMbZpuXICwfA2dxG939%2Bcq8XWIF%2BbyYCKNWEi1eGRUb4exuzNh4AbwJjUup2Zs5HyojuM51tauAqF6HmUp0P5e5EZcTGQohlx1iNcuGH8d5mxgNqyiJrXfhslqYeODE5KJn8QCVhr%2By5ThSWGBmJ2C92uDGl95OX7mgA3Hr4NaSTC7BxniRI8tZpPOzhyOm6XK030XhULbHE%2FvslofOBqcyvRe943DrxyZmBXewa%2BiygmVgjAwcU%2FWUk8SFKTwhcCNBFgtUi%2F3P9hJu2ABzVfGyquLEAkXTFyudTDm7ZvBBjqkAcsojWGxmOusp1i8tuNiiGTQBNWj907%2F%2F9K01Pg6R5RBTymBcn1cB2Z6VZ83KdqPT0%2BGgeJPsb%2By%2F45bT3fHSooqJk7xsvzWUwRwytw5O%2FauMgG1ec%2B4sV3zHFdJPh9kgdZDvmZR138cR%2BGP9yOmqOLr3DqI1WC9IhZLuNXA4w69DQuGBxPEAfQGw005R9T8OJZOOghQtpa8L%2BReXuPx7BsHwf3s&X-Amz-Signature=d1dc9621c65a4b630d7fe40694fcc78d539679cf6e3426e6b462d2bc2e1b2ed3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
