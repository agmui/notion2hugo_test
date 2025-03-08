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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGDQZOXH%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T110109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIGhAG9A4OD678zMerGQNoHANJ%2BE8gRGoPWDCLXR140dbAiAYx0kp1OapKI2Ut9CzMi3JPS2LqhAw0C165vnP%2F7bNOSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMoG595%2FgaNIc1XKoKKtwDa664%2BeVNbHKxlG7Eocu%2Bj6xhPMBuX07RDbHOUO5pDO6UP5kctdKkfZ6DOgRBZXkvuxihQB6Taog9fpNutfrD8DY5wUHtLl3YdLPQNkO9KozZPAVMyful6ts1MzGft6UIrRTHbQb6Fp5G8WHNFApbNbWwyFKSDtb7cKxRsc8nrU6IArxg1Jdkw2SaGSPmIXgEblij0SuifUfQ713%2BkJLSwHNhtg54XvdKYa7rpNnExzT5Oma5TCcrJsjP9kup%2Fr9TrN9RKWvvVvpEG5gnHVrmlOvyZfG1oW393lpqSKdS7SaJTrmCYmZpbyKkWVAfVyCTu0p%2FxnDT7tCRkJkdO%2B%2BmF%2FI7Wx%2FaWTg3izvGhyecIpXm5DZCEhCN1MBtmW2CNLandbKfWm2zq9nPZ5Frq53Isg1B7zcu6pTMg7WfB3ylph%2FDYywk0reioNNQpchdHMoHwx%2BKnOZXgJVhllAPgVerUYtC6Cyk0Tis8ch%2FUfFikQoW4isRQVuVGjrDi2H1W77FyGN4zRMfSJGCWzFlRxU8iUcO0SiUuOQTdKYtYqKlwDQf%2BaCLiVNU1VdOv9jnUqao5K%2FgGrBUxnwgCkQcH0VKg%2FHfl9WrXrO2OxzCtlJbr%2B7zxXnsSpumaWjjfGAw%2FqSwvgY6pgGqKKshFKIykXMU5um96HEjzDSbJzFa1Tcw3AKmOUJQYBCw%2FsWW8p4hmY27DP%2F%2Bc20IjOmx5OhTaNlghI4%2Faf86WF5CiRSLKxNzVttC%2BtaFfWsjMw9ySHXY2u%2BFPh0TXNcH9syXoDJV5OgaiqnigSFls%2B5%2FtPVTm8mGUn%2Bizszoajk74cc5cBtqNga6YVuiE1RPwnfq8yFUINgRuXAF8RIYgVXM2i%2FI&X-Amz-Signature=0d35fd03686c7bb9e6b03073955f7b5182f119662197891fa5426f49a5e1a228&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGDQZOXH%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T110109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIGhAG9A4OD678zMerGQNoHANJ%2BE8gRGoPWDCLXR140dbAiAYx0kp1OapKI2Ut9CzMi3JPS2LqhAw0C165vnP%2F7bNOSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMoG595%2FgaNIc1XKoKKtwDa664%2BeVNbHKxlG7Eocu%2Bj6xhPMBuX07RDbHOUO5pDO6UP5kctdKkfZ6DOgRBZXkvuxihQB6Taog9fpNutfrD8DY5wUHtLl3YdLPQNkO9KozZPAVMyful6ts1MzGft6UIrRTHbQb6Fp5G8WHNFApbNbWwyFKSDtb7cKxRsc8nrU6IArxg1Jdkw2SaGSPmIXgEblij0SuifUfQ713%2BkJLSwHNhtg54XvdKYa7rpNnExzT5Oma5TCcrJsjP9kup%2Fr9TrN9RKWvvVvpEG5gnHVrmlOvyZfG1oW393lpqSKdS7SaJTrmCYmZpbyKkWVAfVyCTu0p%2FxnDT7tCRkJkdO%2B%2BmF%2FI7Wx%2FaWTg3izvGhyecIpXm5DZCEhCN1MBtmW2CNLandbKfWm2zq9nPZ5Frq53Isg1B7zcu6pTMg7WfB3ylph%2FDYywk0reioNNQpchdHMoHwx%2BKnOZXgJVhllAPgVerUYtC6Cyk0Tis8ch%2FUfFikQoW4isRQVuVGjrDi2H1W77FyGN4zRMfSJGCWzFlRxU8iUcO0SiUuOQTdKYtYqKlwDQf%2BaCLiVNU1VdOv9jnUqao5K%2FgGrBUxnwgCkQcH0VKg%2FHfl9WrXrO2OxzCtlJbr%2B7zxXnsSpumaWjjfGAw%2FqSwvgY6pgGqKKshFKIykXMU5um96HEjzDSbJzFa1Tcw3AKmOUJQYBCw%2FsWW8p4hmY27DP%2F%2Bc20IjOmx5OhTaNlghI4%2Faf86WF5CiRSLKxNzVttC%2BtaFfWsjMw9ySHXY2u%2BFPh0TXNcH9syXoDJV5OgaiqnigSFls%2B5%2FtPVTm8mGUn%2Bizszoajk74cc5cBtqNga6YVuiE1RPwnfq8yFUINgRuXAF8RIYgVXM2i%2FI&X-Amz-Signature=5c2285007d9f73df164abc7f1a732e0efa06b74914a109e0cf7ba54d0b12fe7e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR5Y4QZG%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T110112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCXsXIdnzkioF5lK%2Fsj3Nh%2BdZstEiSTElhgKCa0LsB6igIhAONnZjU8bLADdo%2BAwQz%2F1pj37p122J1O1zT0eZHaFlzCKv8DCFkQABoMNjM3NDIzMTgzODA1IgzOkc%2BggrfdLIotyDgq3ANkk7jFgfrqoFhpDg7SC9KjCaVSInAJ2iI9J6I8A%2BekYnZMe6cfqALsPxcJrSfQaEN7BqoEyH%2B7ILIW7qPXxKNjFkOpQx%2FA%2Fkypi7x5VELRDrKRZJtLg8yCuS2gy3GP744Ms1sRwvxDhfW2xintiloDneaGgFMaJIiV%2F3%2FjnfxFzwkUenbyblKNEPPxAdlUrt%2BI%2FGckd50m%2Bxcd9SdOvxjyceNHYusway0lmTa8FbOp7433gqyzyy%2FuSMqIhnuzmk5rPcT0habC2Q1Tkl3gzuKLU1t4TUI62VvEfBhS6MjG4vHhFSN9E%2FbxeLyEJG0Mo2ELSU7h2dsGuT4jliJ002KuG4zXQ9T7J7Gd0bBypWRK4Vnb0JHquYsQNvkgInSNEclAJ5o%2BORBesOAWtVAbiQVzxpcSSCp50XZj9dgOlDTy09gTKY6lvBp2AkVmRAxrWj2JBDp5MG4wuvpm33CV03JjS7qYLIAjaKPb14Qpgp%2B8IrQUlAO4L%2B4bAmFdGkeFWyq2Bj9Lxgj72X%2Bz6POGfCxyRsbzOFYzmBioyACk%2F00oytQY%2BV%2BUfQY%2FXJ8x7e8HqZKx%2FkcnExSubD0bcY4%2FkMyOkt9qFao3Y4PmjLjjI%2FZDiDZQJxHSmJQljB%2F0PjCy4K%2B%2BBjqkAam98tLlbr%2By4RPc%2B%2BYzsYsprGaOm9q%2Fwz%2BkRslj9LmjF2gLOL3I37ijXQlJMyjIpkzpBC7koCn8QQtHEq9XEr1OD1vEajE2LvDPZVpuN8X3vTlqvREZgM28X5sQW%2FsycrVj2RXh5cfr49f84fYgWXFtV5vlRPtm%2BY05ZWgqRPs8cMulq7UJ10tiRLUxMX2xeuQGofd6WBN6JBlv5GjAc3MxlOj5&X-Amz-Signature=c536e9dc04bfbb80f8cee9ecdfdfa0d6c9d267259c7e3b835152ca821772612e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635RH5ZYT%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T110113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIGqK%2BYCFuIBEXGyxs3bO8VwJoaL4YEIWC6mMbgn64GT3AiEA85wHqGDL5t9YAEVcXUsUjrSpFB5CDIouTy12eG1aTcQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDH9YtdDAB7D0xjOd9CrcA4%2B2ryTZBSpl4dgoOAJYN%2Bmw2WWmcBQX6kGa8RPtIUZ9OaX9cpx3W9FLU%2By0Ym%2FvVsu8apIrL2w5VXoJy4AGtj9rV3t9xWqvAWFJNJq%2B%2FYKk%2BN41CJRVHCnpL8LIrG%2F9yrP9Lt0WhMIMU5upt35md%2FsCeEaXrWx1y6g9VregNb2YUyBn72I69Yk4fhtOLLyM%2FGxOg28HPrfZYF6fTswSRT%2B9lZUvEKf0pYAmHIGtR7pKZnAUlH07N%2FbwdLhLvjXp87ubhKrfWjJwqoRwnQfccFWDNEG0farN8vsz%2FvCqk2mGnFUQfwKNI3EAK7xCroIJRsbuN5e%2FDGWt%2FFXRlQdt3XYjLkpf2frs8KSlQe%2FuHQ42x7lW%2Bj%2BjqV95SKy%2FBg0dNHnRbLqDtwLGABc1F1uBeuXDOK5vzWOOIVlviqMCDLFfL5sZbBYZng%2BgCzcFHbC9eg%2Fc%2BvwnjK3%2Bmf0SMGrhiJqwdvSM0%2FfbJb7Sr88GU6qYf7nqKfotw%2BstRQSHnqa4nJFODKX%2Bw4HSiSbXxvVRppfM4IMA5gE3qN6pwQ1clzNdufvHHRnFyPV3j2648sJWbeUpuv1kfhenrROUV8Sf7br5gtLUeRVndJeK3rwbpl1BcwxSnEyvEQR1AGEKMJ7gr74GOqUBH4aZ%2BxAxC49wg4Y1mdsJIyVc0edw%2BZgAh0SQetG5cCIKGgTGxfLhrPgPONwkuZSSzEZeHR1i3c8y00Ck5eHeFR6qP34%2BNnVbp0WYFQ969URTYxBGbQvFyEAMGhQGplMPgmDfOn0kE6QmqeRsqDAWO58StlF81pup9ZRsYVqoXDR5%2F6MEST%2FUuv4DDrYwdeFBRRG%2FeVyO40%2BzPVA3MvRakpU5%2FaCA&X-Amz-Signature=e58c40ad614d641508d326e0279e04a393e78112f930ee7c8d4286dc72fc373f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGDQZOXH%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T110109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIGhAG9A4OD678zMerGQNoHANJ%2BE8gRGoPWDCLXR140dbAiAYx0kp1OapKI2Ut9CzMi3JPS2LqhAw0C165vnP%2F7bNOSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMoG595%2FgaNIc1XKoKKtwDa664%2BeVNbHKxlG7Eocu%2Bj6xhPMBuX07RDbHOUO5pDO6UP5kctdKkfZ6DOgRBZXkvuxihQB6Taog9fpNutfrD8DY5wUHtLl3YdLPQNkO9KozZPAVMyful6ts1MzGft6UIrRTHbQb6Fp5G8WHNFApbNbWwyFKSDtb7cKxRsc8nrU6IArxg1Jdkw2SaGSPmIXgEblij0SuifUfQ713%2BkJLSwHNhtg54XvdKYa7rpNnExzT5Oma5TCcrJsjP9kup%2Fr9TrN9RKWvvVvpEG5gnHVrmlOvyZfG1oW393lpqSKdS7SaJTrmCYmZpbyKkWVAfVyCTu0p%2FxnDT7tCRkJkdO%2B%2BmF%2FI7Wx%2FaWTg3izvGhyecIpXm5DZCEhCN1MBtmW2CNLandbKfWm2zq9nPZ5Frq53Isg1B7zcu6pTMg7WfB3ylph%2FDYywk0reioNNQpchdHMoHwx%2BKnOZXgJVhllAPgVerUYtC6Cyk0Tis8ch%2FUfFikQoW4isRQVuVGjrDi2H1W77FyGN4zRMfSJGCWzFlRxU8iUcO0SiUuOQTdKYtYqKlwDQf%2BaCLiVNU1VdOv9jnUqao5K%2FgGrBUxnwgCkQcH0VKg%2FHfl9WrXrO2OxzCtlJbr%2B7zxXnsSpumaWjjfGAw%2FqSwvgY6pgGqKKshFKIykXMU5um96HEjzDSbJzFa1Tcw3AKmOUJQYBCw%2FsWW8p4hmY27DP%2F%2Bc20IjOmx5OhTaNlghI4%2Faf86WF5CiRSLKxNzVttC%2BtaFfWsjMw9ySHXY2u%2BFPh0TXNcH9syXoDJV5OgaiqnigSFls%2B5%2FtPVTm8mGUn%2Bizszoajk74cc5cBtqNga6YVuiE1RPwnfq8yFUINgRuXAF8RIYgVXM2i%2FI&X-Amz-Signature=c3d4fa77f8cb5628f657a481fe8a73a64044cba2c249950981fea664506fbe4a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
