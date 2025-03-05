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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FDEOLVL%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T110207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFz%2F38BzWVMkRbgt7X8kBfSoR8gov406CnWIMXTAqKU4AiEA%2BTpeZLEeMN0lz6Y%2Fpq9lLz0XSTwRZgTVdnoEo567C2Iq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDGxA8X5qUDUeUKKwsyrcA9aoSAyxdoOzqrf08wIkQLKC3Fo0oHptcron26nColCt0ovkELrzhxzDlkRAmYb7knykMtukUbED3YzXbhukajtfX2HuUg462YsEuy2Vn6oatYWk5girS8FzS9IJynDU9nwfi7hqwxEq9ITFoc3IUoKy1YdEAvKfZIg0JyZ0mPqWvn%2FwY%2Fdf4zt%2BUgBUWfWIaLsKHtNpwPO03CICEjKat7qVJLmJtuWQtehund3gnl2fiTnH%2FAxxiRVsX%2BRyVh9r9uuAznZuO5Vq5lIuYWen164b1Yn9BJshhpiRZ6b1cdr3E5j4YRGRo9Ak%2FLEuF2vIUCx60O6icVaFI0tNqQPr3eplNoHPVyc1lY7EFv%2BPzzZT0iFZAUQiXeYIS39CkkIXhwra7Oj2vzI7LSuWt39RNRdP6xWYVkqngXjBMRJ54cjUURR6dtncuvmJQg3ySTZHtOYiaiPdTTwOUuxx3ecA2GlO%2FVio8vw3yLqpoBCsMlVd3a7YgyC0pevPx81BeQcpBhue4APrt3NRTSO150MLyD%2FsI2xxYXHSsZlehAbc2rVEmhOL3KzzNU7bGIP9um2nZ0%2BJVa63oTNktYauf46B77AvR0Pk8NU%2FVHSUW23Cj5nOgTsv37clcub8DsYEMLXSoL4GOqUB0v90JsDz5fFmQCms2rAH7NOVzNfDFWW9exoCqiHj0ssWVzbCBmjW3PobtnLC0WoBIJcn%2B6WP42WJeujAQygtoZvmZTtL9unHAVeNXaeLVFAU3k4fgFwaRwRYJic8V8pNkncv6WYEQUOa7V%2BY0kPF4Q4%2BfDKrl1drfKfNd9bBBUKYUg1JbbH%2Ftf4z85QheGwYRucu0NxCa8jDxyZ0jd%2Fnw9IYZ7xX&X-Amz-Signature=2be1dd9d26a63e8af91729ff4d43acfda73ecac00b0996238b550ad5d9635744&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FDEOLVL%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T110208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFz%2F38BzWVMkRbgt7X8kBfSoR8gov406CnWIMXTAqKU4AiEA%2BTpeZLEeMN0lz6Y%2Fpq9lLz0XSTwRZgTVdnoEo567C2Iq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDGxA8X5qUDUeUKKwsyrcA9aoSAyxdoOzqrf08wIkQLKC3Fo0oHptcron26nColCt0ovkELrzhxzDlkRAmYb7knykMtukUbED3YzXbhukajtfX2HuUg462YsEuy2Vn6oatYWk5girS8FzS9IJynDU9nwfi7hqwxEq9ITFoc3IUoKy1YdEAvKfZIg0JyZ0mPqWvn%2FwY%2Fdf4zt%2BUgBUWfWIaLsKHtNpwPO03CICEjKat7qVJLmJtuWQtehund3gnl2fiTnH%2FAxxiRVsX%2BRyVh9r9uuAznZuO5Vq5lIuYWen164b1Yn9BJshhpiRZ6b1cdr3E5j4YRGRo9Ak%2FLEuF2vIUCx60O6icVaFI0tNqQPr3eplNoHPVyc1lY7EFv%2BPzzZT0iFZAUQiXeYIS39CkkIXhwra7Oj2vzI7LSuWt39RNRdP6xWYVkqngXjBMRJ54cjUURR6dtncuvmJQg3ySTZHtOYiaiPdTTwOUuxx3ecA2GlO%2FVio8vw3yLqpoBCsMlVd3a7YgyC0pevPx81BeQcpBhue4APrt3NRTSO150MLyD%2FsI2xxYXHSsZlehAbc2rVEmhOL3KzzNU7bGIP9um2nZ0%2BJVa63oTNktYauf46B77AvR0Pk8NU%2FVHSUW23Cj5nOgTsv37clcub8DsYEMLXSoL4GOqUB0v90JsDz5fFmQCms2rAH7NOVzNfDFWW9exoCqiHj0ssWVzbCBmjW3PobtnLC0WoBIJcn%2B6WP42WJeujAQygtoZvmZTtL9unHAVeNXaeLVFAU3k4fgFwaRwRYJic8V8pNkncv6WYEQUOa7V%2BY0kPF4Q4%2BfDKrl1drfKfNd9bBBUKYUg1JbbH%2Ftf4z85QheGwYRucu0NxCa8jDxyZ0jd%2Fnw9IYZ7xX&X-Amz-Signature=de865a233e408de6788914c220542a591f480818e17da42df0f4be2a17a1b9e9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AJL2576%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T110210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgGYTdbTsM9lCPWFAP0QIwe0NZ0QrulZbQOZ4UpvKOfAiA06w75G58Htl2fr9roSPNN%2FVN%2FyR3Pz2JHM44c4b2BYCr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIM%2B5gpbDPulnJWdWqXKtwDF5p25ei64Uk9pX4kgvPkeCHEQwEJ%2FFLG8lnfQDNwYPc4p3VGCNudlIl0tNvCsRJrJ8ZZtXW2ImAHy%2B%2Bn%2BXkr%2FdxCcIWQKzrbU%2BNHBWy%2FGxOH9vkg8MXCLQxKjzaSEHRR3Cd5YpeUPZQpMN3Po6DeFaxhued5rYA9oJy0kesn7kpmqGHiryKjVTszrsYnIVKNI4hWUDTOJ0i6v%2Bnoe4WfcxoGd3%2FQXrh16chuP1RTy1XOzqJoY%2FaXKGeMVatM3pbh1s2uxHk2NR6CdjIi7ve58ZgnF8PwCtZ8euVZJFutyzGgJjrguQxx2PGkq%2B11pS6%2FGeJAPgqaGEY8tFTSNmnVGMpyeq%2BoDqW0O7CYPWXkdflyAf3B39RpRWwNFL9gpnrPMQziOPKXiHuO9XuG5qyuFmI6FuKXbAVg2JRgk0Wc8WKSRdLGdMRPwhiC6rbpmzkMqRy9dlapaNKON1tFATsoEwyRyItOUj1lt5gVZ5g91hCqqt0uzuSCicbk0QLpD3RzZmIfPtFUyKe%2FHLOpSxuw71oROsGzvyMLM6%2F1gEKdTiXImCFH%2BLwQfTXU1R422ms1uJE8b2PUC27w9PQWIY2DyxcVUVZnYJns2a7aZaVNTv795T9vHx%2BxCIzfO%2BwwldKgvgY6pgEk8uHSQsSxEjVWPrA2SO%2F%2Fl8YbkOqb1OplpbRW3Pt7tZsncKTwN6GmdJTGQn8TYAOmf5rPtPHTZc3Nps%2F6xrHUqE4p4mWyiR3tgxevUlbqczTVt0XxxW7igtXoXiLb%2ByYpO9PTJA9IxKVwS6BAkIvIf4FV3GzYaRi1JYZTzzFLKzYmu7JScMsjjpmuHHivj%2FM%2FWn3Z%2B5%2BzCTv5AzmmdRdNq3QvKilw&X-Amz-Signature=9ffd72c54b68d67e1216e0bbd8576d30d94ed4439d5f18ff5eb068f308d12413&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D3RTW5J%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T110211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgEFV5BxTED8WR4kpJEPDvpHz97FA88CF3ijXM4D6FhAiEAmBwWkvksVW3YMWoy5uE9jlviUmqE2V7viZ1W2tZ8Xe4q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDEuBvHRTDYVkweE9TircAxQYA5Pm0k1hkN07nl5%2Bbn2cZOS1JSIXlR0zRP%2B0qmBpJ1LOVQghifb1UVLPzajWl8LpVL8fHHNdzyuWmGGx8eN6I%2BCw8zoBdhqlL6ya5%2FDlIJZkfNOpLFgQBqW3dL9iy4L4KXspRnod6Fi%2BrDUiPfSHKLN3m0NZFVA8Vzs%2Fidt2MWBR1j0Vi8LOMlgEOK6ohkf%2BC0razucTMoDiHFE6RXp4gauQDV9FUdq9Cki%2BiQuLKgYVjFVzi5SCBwv5KbgLyhJ8efA99JP27Rc611QyELSM2aU96cQisp1726QAtAlhPqxSnDCuZC0D83NmTE5qDrCF2V2%2FB8lYiFnEOL0XTsrit%2BgtZBmMH83McLSpPbqKTHgMdZmrJgf1sr%2FhnCz2rf8wotw0HgF1EPErXoXhRyRfgrmwTfjL9CY3oIU7H1Ez9bVZpe8JrGnWmcAqrIIfGujBgHbJDk%2FwO6irZtrUTMNALkrZh%2Bd7Gp3QNRzqXbJECn21%2FlpT%2FlakjMTcxdpalN3qpugOqIGW1M%2BEyKU2GEnXCK7xetVpSSpFA0KcX%2FW3L7mvIKbUZvR32mxClTuiQYWPfN1sEX0ywLxSg42wn7oI1ZQbSANOMsKQoyPp1OgQw%2FwvQXPu29voDq0uMNzRoL4GOqUBBnCa2VOuWGOoAc0XY7IYSsiHCCmqI5YCRUxDAR4pin8hSysXY8MT0mZ%2FCgYaFrYnfqxDvMzR2odpxtvi68arxjzcziNj9BgBKPOrf2e5iUM1j66ef1CXNbILBatjOLMCoHi%2BJ7kPjL8G7E7tBhO%2Bjdf1S%2BYOuV%2Fx8nGFU%2Fu0SsoxcH%2FXDVxLWf5hZHKKQpSjL%2BtB4Vo2cwR%2BivGaY5aorW63uKtC&X-Amz-Signature=b6412f71c505e8fab00eb44891e6bad91a02eefd2501b5236a53ed7a2f1a007f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FDEOLVL%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T110207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFz%2F38BzWVMkRbgt7X8kBfSoR8gov406CnWIMXTAqKU4AiEA%2BTpeZLEeMN0lz6Y%2Fpq9lLz0XSTwRZgTVdnoEo567C2Iq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDGxA8X5qUDUeUKKwsyrcA9aoSAyxdoOzqrf08wIkQLKC3Fo0oHptcron26nColCt0ovkELrzhxzDlkRAmYb7knykMtukUbED3YzXbhukajtfX2HuUg462YsEuy2Vn6oatYWk5girS8FzS9IJynDU9nwfi7hqwxEq9ITFoc3IUoKy1YdEAvKfZIg0JyZ0mPqWvn%2FwY%2Fdf4zt%2BUgBUWfWIaLsKHtNpwPO03CICEjKat7qVJLmJtuWQtehund3gnl2fiTnH%2FAxxiRVsX%2BRyVh9r9uuAznZuO5Vq5lIuYWen164b1Yn9BJshhpiRZ6b1cdr3E5j4YRGRo9Ak%2FLEuF2vIUCx60O6icVaFI0tNqQPr3eplNoHPVyc1lY7EFv%2BPzzZT0iFZAUQiXeYIS39CkkIXhwra7Oj2vzI7LSuWt39RNRdP6xWYVkqngXjBMRJ54cjUURR6dtncuvmJQg3ySTZHtOYiaiPdTTwOUuxx3ecA2GlO%2FVio8vw3yLqpoBCsMlVd3a7YgyC0pevPx81BeQcpBhue4APrt3NRTSO150MLyD%2FsI2xxYXHSsZlehAbc2rVEmhOL3KzzNU7bGIP9um2nZ0%2BJVa63oTNktYauf46B77AvR0Pk8NU%2FVHSUW23Cj5nOgTsv37clcub8DsYEMLXSoL4GOqUB0v90JsDz5fFmQCms2rAH7NOVzNfDFWW9exoCqiHj0ssWVzbCBmjW3PobtnLC0WoBIJcn%2B6WP42WJeujAQygtoZvmZTtL9unHAVeNXaeLVFAU3k4fgFwaRwRYJic8V8pNkncv6WYEQUOa7V%2BY0kPF4Q4%2BfDKrl1drfKfNd9bBBUKYUg1JbbH%2Ftf4z85QheGwYRucu0NxCa8jDxyZ0jd%2Fnw9IYZ7xX&X-Amz-Signature=21f9d7ae64783dd123e873eb66e668d4f6519aee02bbd3e55ba0f0184a37f547&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
