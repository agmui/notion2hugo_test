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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQXMQHHW%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T170532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSx2%2FE2nrrc3ICC4pXPUZ4a6BN7h7y9G%2FCYIzQNhEKGQIgef33XUpBG965FyN8lk6ZILrHT%2FCBrUFLhgOwE7vOx5Iq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDG8owYfQn7gftMQQbircA4cqtXTY5q79VnsA9bOFJF01iShr0JxtcAaKAZUI6BtSkGmVHlrTlZ9%2BjPh5EYa4g69O9BJV9PM6awaPE%2B6eh3wM1VDGmXEZVIFHgJnKN5Y2jPucjV5z8JmCYHIzmudbn5fq6ueVv7WVbgRJFNyRc38xNM%2B6QLaBrX8LpfRo5f8al8ucBuQoa%2F954ysMbKXu42KXe8RGNzM423yXifqJcxLwXdulkRDd43XmDsKWVjtEiBErxr9uwtbo3L050dBSqYCsgR0rIEYPdI5H6lBPlOjJEnU2I4eufA3YSxULRyn7rSl3IXZZvmu0nukieb9m2Ij8%2FCfGBNIAD6RVwlzp8SDA1SVW6Hrg%2B27zuTOhqRgLU7mWnrfyaskBd9GeojaN5A34MvIUl8XndvKM0pTV%2FXNzIxfzM5k7B0BJazmUbJMaWWyV9uZJKvgPu5v9%2BG4iVEfGiEZiYNMLAUFjoRPSPiTPbtEmo89xxkHSM9coKUci1tPHNgwCo7nYLPbl3RAmtrp25Ldve2h5KA5hUc%2BXylgZ5EVdJEeROSyDmZv2bgaYQHnTkJmzGi1Y7BbAUjl2xYBaTC01FbjRg3kiUpdiwaeC0AgLKYWE%2BoATCF7lW7NgUjLrRQR92Dtb404CMKKBkcIGOqUB7K9nGvhfiVUCWGQrGX2Em4c6OGSjJfdxOATWYGHGSnQmkMO3fWqWeR%2FuW2ui3P4Yo1LOgtrqeQnIm529180HGCHXZz83FS5OtZJ1jzePwZRoD4hKB3tSZiQCLpgoTGd66862rzyOBK9KSnZD1E5Lt9nbaOr%2BbCEkJXDcG%2FotoDSSqLvlBfXauXYY06c4O4mGM5Fun40OPqBHAL19foSvkoRAsUDn&X-Amz-Signature=7e73e683756a64e336112a743f0d56f595d79b2300f231551cb88d0f0fd2d78f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQXMQHHW%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T170532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSx2%2FE2nrrc3ICC4pXPUZ4a6BN7h7y9G%2FCYIzQNhEKGQIgef33XUpBG965FyN8lk6ZILrHT%2FCBrUFLhgOwE7vOx5Iq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDG8owYfQn7gftMQQbircA4cqtXTY5q79VnsA9bOFJF01iShr0JxtcAaKAZUI6BtSkGmVHlrTlZ9%2BjPh5EYa4g69O9BJV9PM6awaPE%2B6eh3wM1VDGmXEZVIFHgJnKN5Y2jPucjV5z8JmCYHIzmudbn5fq6ueVv7WVbgRJFNyRc38xNM%2B6QLaBrX8LpfRo5f8al8ucBuQoa%2F954ysMbKXu42KXe8RGNzM423yXifqJcxLwXdulkRDd43XmDsKWVjtEiBErxr9uwtbo3L050dBSqYCsgR0rIEYPdI5H6lBPlOjJEnU2I4eufA3YSxULRyn7rSl3IXZZvmu0nukieb9m2Ij8%2FCfGBNIAD6RVwlzp8SDA1SVW6Hrg%2B27zuTOhqRgLU7mWnrfyaskBd9GeojaN5A34MvIUl8XndvKM0pTV%2FXNzIxfzM5k7B0BJazmUbJMaWWyV9uZJKvgPu5v9%2BG4iVEfGiEZiYNMLAUFjoRPSPiTPbtEmo89xxkHSM9coKUci1tPHNgwCo7nYLPbl3RAmtrp25Ldve2h5KA5hUc%2BXylgZ5EVdJEeROSyDmZv2bgaYQHnTkJmzGi1Y7BbAUjl2xYBaTC01FbjRg3kiUpdiwaeC0AgLKYWE%2BoATCF7lW7NgUjLrRQR92Dtb404CMKKBkcIGOqUB7K9nGvhfiVUCWGQrGX2Em4c6OGSjJfdxOATWYGHGSnQmkMO3fWqWeR%2FuW2ui3P4Yo1LOgtrqeQnIm529180HGCHXZz83FS5OtZJ1jzePwZRoD4hKB3tSZiQCLpgoTGd66862rzyOBK9KSnZD1E5Lt9nbaOr%2BbCEkJXDcG%2FotoDSSqLvlBfXauXYY06c4O4mGM5Fun40OPqBHAL19foSvkoRAsUDn&X-Amz-Signature=0d8b4feb58997d80bf40df1391e551dde765797e5732993bdc322604f5b545d4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQXMQHHW%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T170532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSx2%2FE2nrrc3ICC4pXPUZ4a6BN7h7y9G%2FCYIzQNhEKGQIgef33XUpBG965FyN8lk6ZILrHT%2FCBrUFLhgOwE7vOx5Iq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDG8owYfQn7gftMQQbircA4cqtXTY5q79VnsA9bOFJF01iShr0JxtcAaKAZUI6BtSkGmVHlrTlZ9%2BjPh5EYa4g69O9BJV9PM6awaPE%2B6eh3wM1VDGmXEZVIFHgJnKN5Y2jPucjV5z8JmCYHIzmudbn5fq6ueVv7WVbgRJFNyRc38xNM%2B6QLaBrX8LpfRo5f8al8ucBuQoa%2F954ysMbKXu42KXe8RGNzM423yXifqJcxLwXdulkRDd43XmDsKWVjtEiBErxr9uwtbo3L050dBSqYCsgR0rIEYPdI5H6lBPlOjJEnU2I4eufA3YSxULRyn7rSl3IXZZvmu0nukieb9m2Ij8%2FCfGBNIAD6RVwlzp8SDA1SVW6Hrg%2B27zuTOhqRgLU7mWnrfyaskBd9GeojaN5A34MvIUl8XndvKM0pTV%2FXNzIxfzM5k7B0BJazmUbJMaWWyV9uZJKvgPu5v9%2BG4iVEfGiEZiYNMLAUFjoRPSPiTPbtEmo89xxkHSM9coKUci1tPHNgwCo7nYLPbl3RAmtrp25Ldve2h5KA5hUc%2BXylgZ5EVdJEeROSyDmZv2bgaYQHnTkJmzGi1Y7BbAUjl2xYBaTC01FbjRg3kiUpdiwaeC0AgLKYWE%2BoATCF7lW7NgUjLrRQR92Dtb404CMKKBkcIGOqUB7K9nGvhfiVUCWGQrGX2Em4c6OGSjJfdxOATWYGHGSnQmkMO3fWqWeR%2FuW2ui3P4Yo1LOgtrqeQnIm529180HGCHXZz83FS5OtZJ1jzePwZRoD4hKB3tSZiQCLpgoTGd66862rzyOBK9KSnZD1E5Lt9nbaOr%2BbCEkJXDcG%2FotoDSSqLvlBfXauXYY06c4O4mGM5Fun40OPqBHAL19foSvkoRAsUDn&X-Amz-Signature=f8ec3e7ea1dc04a4db789e6b7bab540f8042f969a574f83a5ea131687be012cd&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BZVJ5S4%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T170535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALrEr02VG8%2F9rr0BW3UbxLE8lwVuDXUBZIv6QnQIOd2AiB1zMDLWeJnBHMtif4oO67UFQoCUUm1eNg09Z%2FDzKyA7ir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMX0czm1wFyvgC9pWkKtwDrXWGR5yZebL6XW%2BEwvJX2sp07G7jEnSGUk3t9FdvcdJmKRzYr%2BNFX3sJCMfHAxcwtroJVQdt7jxFZTD44f3v4eO2EfPCmG3OD0lHmNiaceDO8nfI%2FYvRAtWNRSXSe0p1kCkv54QKd3JSPmEbLR7ATTwEfIhsx7cbI05VCJ13HTu5jOjCXc1MCqCj%2BF%2BuK4Phri5VxiUB798zkRdKYDgtJBrr4gM5j5yE4ty3%2FDkkGx4M6g4VbIXZ1OGA5423g1mSltnPkZsapME18J4zswkAzT9iNwOhOYOcD2pbUOED9WIbpzT31vG%2FanV55VWuWOys1HzhGAljdrFTmNfyV6TQ2j0hHfERBcDyPDnC%2BNjbpz%2ByfaHED1yj3kqbitvSErhV%2F3B47U0hQciE9m%2FRL1Qjg3SghfQDO9nZotYY2Ye9vbBqtgoFn737hTwcBw0LeVrtNkBnHYMDDDBu1FaViMox94%2F5Hzl9h952oaqz1oG9DwcgbVWPA0uxxH%2FFtiBSHTAoDWRoQ75bXWjSnFQpGpMME2hSmi7PBFh%2BEJjhhe4IYDQ2zFSmxvX6HYtR5GtARVq3Q75kzwYEwvJY3hxVrshQeFbbCKnRu%2Bp9ZPosivd3e2fzh84%2BbWz8PSWTOAQws4GRwgY6pgH00zc1WA1D%2BnjKkTPfCandy255mZDFbs4ODWDG1rlZ67gEFYT6xBW%2FpVfrju328QO8b91G9ZwvIWJx8%2FeypWFAnlgldRas3K2Ko2JxeW0TqMQ3%2FPHXv9axXDdDWyk%2FDcMalFzJYT%2BTHpslCy7%2BJxff3CNOySLJyT1eto3fU6N8r0Uru3S%2BYT9L2U9LXNV%2FTDlnngUijH4bbjgApzkFhMlS4ONqdsL4&X-Amz-Signature=d31b0ef6a8a5b3b525a72bf3b48a0cf0554d7be3b3125b5e5f22ad9b2c306d26&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YAUMBXI%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T170536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGwyiW6CiU5i08N3IbCV5ZjzK%2FcrbBjPk1tfSv8sxLZwIhAMl1pb7U4zizkODcBmKb10rWYWWSApSJiHtks829Hlx9Kv8DCHcQABoMNjM3NDIzMTgzODA1Igy%2FWc1tKyNG1o%2BLkJIq3AOVTPQ2T5EXlbLfCN3YgTBFsDv7Kx85djDtpEO%2Fh3yhDHk0TbAUopXSFEJfFcz2Vi1ca7pDYlx6HC8tBl7VusvxPibyV6LPlhUw0GvXmhfYIKpbwUCqPHsTXNoJ8PyrwtZNFZYS%2Fj7WdOXxdy7umd3YHQbZW7AXggElDCZDeWmgPSwq%2BEuHuyn2kB3hQnJ2StxJdSDazrOJ933FxSzG5ANGLNH4yphgIOiJotzjnv4O2xL39rMqT9daLKq%2B8DMBajed8JzCs1HKe3837fcVt7LAKOQfSJ9%2FXhRCzfLB7oK3kVo8BB8Tap6lbDZ6nxrFNsUvRGgPfBY7COojeEVTg8q2O5kB3DTXq6Rk6Y96YltrdcVDearYOjGiZP8iVgDm5xRDph5liSa%2FOKaHyyoNzPPMYzSMNttwRgUogU%2Fs35VwYBBQzSUbQ%2FR9z6aVEwJeGR12YEA59kaxZuhutl0KiniBFYgMzt1G6T3XNHY6jQbTwLKzKo1QehP8r2rMhM1oCD9zhPvuswT5l8IpYtlHdqWC5TLfm9HUbMoqCjc3G0VXnHXDwrmL7PL9T6BjDfKCZj7IfX8LpvMK1Ib25zqTQBheh0FRfEmd5rDqrCYj7bRvlnTpED3sIHrJQVRfDjCqgZHCBjqkAQQczLmRbWELQSxEcjysSUwwVS35WZibXBZT5pnsBptiNWB8OY%2BPCQe%2FFQ9SN57cUcJQ%2FRTiITR9B8JOizx6m8ezv7XKqNVb3xW3wpXA9n%2B9MOXmvZIVgno%2BDGnqi4%2BENhm94Z6YwFK4bAd6SoLY0a6QpkaIZ1C%2FaiMCiMpJADQox1drP3bTCKmCQMU8QWVTAT3Qj1MZU6dJc1BDp%2BhpZLpAqRY%2F&X-Amz-Signature=64f40e0d8a8ba39941f1d9e88f5b18d90e533786d53d7b783a4abc5339fdaf6f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQXMQHHW%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T170532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSx2%2FE2nrrc3ICC4pXPUZ4a6BN7h7y9G%2FCYIzQNhEKGQIgef33XUpBG965FyN8lk6ZILrHT%2FCBrUFLhgOwE7vOx5Iq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDG8owYfQn7gftMQQbircA4cqtXTY5q79VnsA9bOFJF01iShr0JxtcAaKAZUI6BtSkGmVHlrTlZ9%2BjPh5EYa4g69O9BJV9PM6awaPE%2B6eh3wM1VDGmXEZVIFHgJnKN5Y2jPucjV5z8JmCYHIzmudbn5fq6ueVv7WVbgRJFNyRc38xNM%2B6QLaBrX8LpfRo5f8al8ucBuQoa%2F954ysMbKXu42KXe8RGNzM423yXifqJcxLwXdulkRDd43XmDsKWVjtEiBErxr9uwtbo3L050dBSqYCsgR0rIEYPdI5H6lBPlOjJEnU2I4eufA3YSxULRyn7rSl3IXZZvmu0nukieb9m2Ij8%2FCfGBNIAD6RVwlzp8SDA1SVW6Hrg%2B27zuTOhqRgLU7mWnrfyaskBd9GeojaN5A34MvIUl8XndvKM0pTV%2FXNzIxfzM5k7B0BJazmUbJMaWWyV9uZJKvgPu5v9%2BG4iVEfGiEZiYNMLAUFjoRPSPiTPbtEmo89xxkHSM9coKUci1tPHNgwCo7nYLPbl3RAmtrp25Ldve2h5KA5hUc%2BXylgZ5EVdJEeROSyDmZv2bgaYQHnTkJmzGi1Y7BbAUjl2xYBaTC01FbjRg3kiUpdiwaeC0AgLKYWE%2BoATCF7lW7NgUjLrRQR92Dtb404CMKKBkcIGOqUB7K9nGvhfiVUCWGQrGX2Em4c6OGSjJfdxOATWYGHGSnQmkMO3fWqWeR%2FuW2ui3P4Yo1LOgtrqeQnIm529180HGCHXZz83FS5OtZJ1jzePwZRoD4hKB3tSZiQCLpgoTGd66862rzyOBK9KSnZD1E5Lt9nbaOr%2BbCEkJXDcG%2FotoDSSqLvlBfXauXYY06c4O4mGM5Fun40OPqBHAL19foSvkoRAsUDn&X-Amz-Signature=aa3dbf26cb2c7bc3e1e47b589a9fdaf70b272c4477c753d19a893cd9c32abf09&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
