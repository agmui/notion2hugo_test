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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAWNZME5%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T081103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCkfzX7f9zRjDUq%2FkshR%2BEGgGLObUGAReeB%2BsKHzeMTPQIgUBPztxP1R3bPRblE5Sp0hs9r5OKNymdL7InGJGuvLd8qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMCL78DMkLjQfSntCircA4%2Fs65kTkS1AfoL6cd7AUcXxHZusGQco%2BAnTbO%2BKm4aYxU9EaxAe6b41qQvGV5jxkv5uz4GlE%2FcjD%2FKASf54Xk8nuXXPeqMLkF6ppWxr2JqmyhNhJuFNWEc%2FC%2BlCUqtSAb9fcWUqB41bHCrHvRis%2B8%2Fjb%2FDctQ6UUHSXoBDjYgb1nygEnPLKngXEczo6P6LbWi9OqwqI3a%2Bod6IL0I5tPCPzXx%2BnKYIXgCV5ykAM1DN6aimLFTKtMN1QO0msqjlVH5o%2BvbvX9mvyNyb5WTRhduSIekfBsTCpNM4GwhpyrqBc0pKc7p%2BSWagpGyLZmNRcVBAlBbpTvQ7U0qXuazaaChz0oXN3UgJbLvLLxLHLWJZyXqqkWViHRG7Z6LQY6RVTmWsbGxYoozyD7gYHtt2NNKvHbOKq98TQxsRPQ4aG9LYEx1%2BW%2BSCvEe%2BbQASoFilu7HwX37qwEYpCboM6lskrX9CHRg%2BuaB%2BykDSlDVEurtrmVa4hyLBPA49U9wUrpiNuFCZOwtGqOgWpz4pAeA1mCKwIPB7P5z5cYLzGVvLtkw%2BeQQKx1gViSAPc3TRktNQ8%2Fbor73n4YWQmIq6Z2Mbbr8VLrOGCTxE4XWqSAxNJZPa6dHOO8EjtOW30VSUGMLbRv74GOqUB%2FB4CQCSXTQcX255JyIG%2F%2FEQRQlUhSmrewJMq6SfzSxWndu875yoMBjp2KuSRWKPx6uyVI27Q8fiHf1pFkQ9kfcGwY70IIaKGpIDYAF8M7KysxbxYq3UqsH0ahTAfgzCajw6alkzN3iruhd%2BTfRAnExXfjLO7CD%2FPu7IjuJU3EjHREcXZtEF3XDua1pId0%2FDSLUzxU7gBrub1%2FjCCGHPKKdx9Jkw1&X-Amz-Signature=bf56e1d209b084fa036b7ca783dfd3b82d88019055e2db99179428ff6ddb25b2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAWNZME5%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T081103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCkfzX7f9zRjDUq%2FkshR%2BEGgGLObUGAReeB%2BsKHzeMTPQIgUBPztxP1R3bPRblE5Sp0hs9r5OKNymdL7InGJGuvLd8qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMCL78DMkLjQfSntCircA4%2Fs65kTkS1AfoL6cd7AUcXxHZusGQco%2BAnTbO%2BKm4aYxU9EaxAe6b41qQvGV5jxkv5uz4GlE%2FcjD%2FKASf54Xk8nuXXPeqMLkF6ppWxr2JqmyhNhJuFNWEc%2FC%2BlCUqtSAb9fcWUqB41bHCrHvRis%2B8%2Fjb%2FDctQ6UUHSXoBDjYgb1nygEnPLKngXEczo6P6LbWi9OqwqI3a%2Bod6IL0I5tPCPzXx%2BnKYIXgCV5ykAM1DN6aimLFTKtMN1QO0msqjlVH5o%2BvbvX9mvyNyb5WTRhduSIekfBsTCpNM4GwhpyrqBc0pKc7p%2BSWagpGyLZmNRcVBAlBbpTvQ7U0qXuazaaChz0oXN3UgJbLvLLxLHLWJZyXqqkWViHRG7Z6LQY6RVTmWsbGxYoozyD7gYHtt2NNKvHbOKq98TQxsRPQ4aG9LYEx1%2BW%2BSCvEe%2BbQASoFilu7HwX37qwEYpCboM6lskrX9CHRg%2BuaB%2BykDSlDVEurtrmVa4hyLBPA49U9wUrpiNuFCZOwtGqOgWpz4pAeA1mCKwIPB7P5z5cYLzGVvLtkw%2BeQQKx1gViSAPc3TRktNQ8%2Fbor73n4YWQmIq6Z2Mbbr8VLrOGCTxE4XWqSAxNJZPa6dHOO8EjtOW30VSUGMLbRv74GOqUB%2FB4CQCSXTQcX255JyIG%2F%2FEQRQlUhSmrewJMq6SfzSxWndu875yoMBjp2KuSRWKPx6uyVI27Q8fiHf1pFkQ9kfcGwY70IIaKGpIDYAF8M7KysxbxYq3UqsH0ahTAfgzCajw6alkzN3iruhd%2BTfRAnExXfjLO7CD%2FPu7IjuJU3EjHREcXZtEF3XDua1pId0%2FDSLUzxU7gBrub1%2FjCCGHPKKdx9Jkw1&X-Amz-Signature=44c873c3848a31fa364088996634a024cd0374a81f5d480ef6690951c629992a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYEZWMW5%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T081108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCICmFu5Ury6WwvN5S9hrzxl9EhpbI%2Bpwh1BgdlPbBd4M0AiAL38XNFEMexw0yrXqVAff0pDdVYzD7%2FCzPziTW%2FYBQbyqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlBhlxuKyifkZ%2FobQKtwDzKvgKwJlMY56pAMStB63ZrVPipqUuw2dzNmZKgoDRQEH%2Ffpf4sK7a3S0nA%2BX86Q4f3mSNatYeLcoV88nSipbY9AFB6%2FEotxri6bl4lMManyd%2Bi1pMp5n52x%2F%2BQqFrDk%2FDJm%2F65Y63%2F0b%2FjJjzwcvNbcIeu9%2BT1nTUPMj3im85TFj1fTIjX%2BduaAc4u%2FrmE%2FWrKz1Ciwddqd6XMK44fgKSLEsAzSGhk66wxvmnaBW0DbWn8RNC156HRTERADUqoBLhL%2F1X%2BWsjx1cqjQ7tU7NBzBOYvLYGd4stQGKuw9G18atj4egjIqBU7ApmTy29OYWguCx7zFuIWU6F7e0hobNgcAnO9UT9VG5V0nYaKJ1xGv5JGZrjrofGorfg8WUmNTETaFRLGOE4GXHl%2B5AhHXN27UOrsfna7tytHgbsAjq2l2z9tReS2u%2BXCsaejRpZ628GCkvKKFHV9NlWZFX2yfIKFA%2BzqvU3ooH89qnsDU1iEv9dvMSe0S9HEmi2v8i%2F7WqknwMHjJhYHV8AYJJDdDwFylx6ciPIUH5z0lQN4POuvghfPLuhfvCmNY3%2BCMSzDri8muA%2ByfnbYDI2vYcdyukChTTVqK1tf7oK0ooDfVJjvNOzeEE2QBzREEPIagwndG%2FvgY6pgE12SDp8Sp3oWv4vrl%2FPN4X7XO5F5zb8azfZZ0JX8nEgFKs4oo%2FXC3Owc99cdy0japJfTcQtuuhQ8mUwfr0GhgP6DrU5SLeS%2FG9GekRUx7PRsAkKCeRqgSIWQBbXBW%2BoUk9%2BCyn2kpKYWVWuS%2FNtyWEEBw8F8Ra4%2BMvtFGrnv%2BFytAKuCL7MbwAQXuE%2BhhRz2AXeEKM02ki2gkIhRSjtJWwvt1fk4%2FE&X-Amz-Signature=d9e9d6a64c1fcd17124de29abdac55701277efda23c435dd8bac4e23252cdb47&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676WS5LZJ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIGUnE%2BfAfJ7DS9OETEh6AeV4CIpRtOsAjbWiGCbDqmXkAiEA2dHsRTWktrqGBHfG7IAglPaG41czYUiWeakp2Vn%2F58AqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWFElgw84xBJQFRVCrcA8kE9LjhlyfrfNLXNuwiUbikxtbl5Mrt0CFmmRaPh8OXN64OKB75PYyvKvCuuNlnpo1DHFATN0rJCKzZ0JQTT4EduZXOAlZdEHhESBw6hMuGVV4HMX9Op9X0Ji%2FMzwh3nzF4cT13QgaWJ%2Fh65fFYZKsYNcoEcENuf4PaXD%2B1WPKguFtyISZpAcan7Hfx3CDmB%2Fb1w1o17UKsxjcrKe9mFa%2FGWIu7dK60Uc7oU6DK%2BZ%2F3Bf0nLWiecSJZrHavbCdEHGJnIC8J1Wcd5Ie%2FsZEPCZcuOjM4qfynrCQ1bixFG8uCYKAztlGt1FgPtI%2BdDqjxpEVYhR1f4ocFAHKASODlUNSZBhxNnDDzEcSG2xVDb9PyDk%2F9oJY1HUfvqkAEFK1oJjemUtKr%2BwucYDvvrzD5T6Q%2Bt8tIk%2BK6%2BPevHP%2FwmZl2niGwa1xi4XsKM9C5Ud5MFFEokZINvwVx8DVhTLFZyoiT6Hao06%2FA3hd8YyYQVxsHMeeYg%2BdM7h6YB%2BeW5IONYM50HZUgCaS%2FKzlw9HRLRQWruWVjfgIvM255bEq6%2BXc5sptahQtNuA8u6IFzG%2FC1IMwQFGt7KcjSxv1qCDAT7x%2BX46c08wh%2BUXltUeod%2FTlYM3WPOPNx0ykAlduEMK3Rv74GOqUBUT%2Ftv1lTmPLMpEEAGg5jdDxr3%2BeOfzz3h4RAG6jp4NFs46q85h0R8ohqrCaF4F%2FYIB%2FvS2rggnV6q6mBqDinmdOu1Hn9XDNDr8bU0KHWJjcVTnaPePVgrlUS6tBUJ%2BWvlebApCiq%2F522sYodIgwBz9p6I8VCuclPsDgIDaUMzZKYD37H8fCOtWJXHJ1lo%2FT1jyf1Go3IZ6Lhgw%2BBlXlIAuumGSin&X-Amz-Signature=5467d1ac992fd416e21ac361ab3e5aca69289bb957500c62ed1c3d43f9c6c731&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAWNZME5%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T081103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCkfzX7f9zRjDUq%2FkshR%2BEGgGLObUGAReeB%2BsKHzeMTPQIgUBPztxP1R3bPRblE5Sp0hs9r5OKNymdL7InGJGuvLd8qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMCL78DMkLjQfSntCircA4%2Fs65kTkS1AfoL6cd7AUcXxHZusGQco%2BAnTbO%2BKm4aYxU9EaxAe6b41qQvGV5jxkv5uz4GlE%2FcjD%2FKASf54Xk8nuXXPeqMLkF6ppWxr2JqmyhNhJuFNWEc%2FC%2BlCUqtSAb9fcWUqB41bHCrHvRis%2B8%2Fjb%2FDctQ6UUHSXoBDjYgb1nygEnPLKngXEczo6P6LbWi9OqwqI3a%2Bod6IL0I5tPCPzXx%2BnKYIXgCV5ykAM1DN6aimLFTKtMN1QO0msqjlVH5o%2BvbvX9mvyNyb5WTRhduSIekfBsTCpNM4GwhpyrqBc0pKc7p%2BSWagpGyLZmNRcVBAlBbpTvQ7U0qXuazaaChz0oXN3UgJbLvLLxLHLWJZyXqqkWViHRG7Z6LQY6RVTmWsbGxYoozyD7gYHtt2NNKvHbOKq98TQxsRPQ4aG9LYEx1%2BW%2BSCvEe%2BbQASoFilu7HwX37qwEYpCboM6lskrX9CHRg%2BuaB%2BykDSlDVEurtrmVa4hyLBPA49U9wUrpiNuFCZOwtGqOgWpz4pAeA1mCKwIPB7P5z5cYLzGVvLtkw%2BeQQKx1gViSAPc3TRktNQ8%2Fbor73n4YWQmIq6Z2Mbbr8VLrOGCTxE4XWqSAxNJZPa6dHOO8EjtOW30VSUGMLbRv74GOqUB%2FB4CQCSXTQcX255JyIG%2F%2FEQRQlUhSmrewJMq6SfzSxWndu875yoMBjp2KuSRWKPx6uyVI27Q8fiHf1pFkQ9kfcGwY70IIaKGpIDYAF8M7KysxbxYq3UqsH0ahTAfgzCajw6alkzN3iruhd%2BTfRAnExXfjLO7CD%2FPu7IjuJU3EjHREcXZtEF3XDua1pId0%2FDSLUzxU7gBrub1%2FjCCGHPKKdx9Jkw1&X-Amz-Signature=dd36a96e35dc44b16a5122a810f41a9e4ba91b0c280d50d7d765b6fb57e45460&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
