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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUHKU3G3%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T132913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIG0Na4%2FP765KWG%2B91ni7sw27sANHZ7%2BXq0Q9RlfLZHQMAiEA0mg4MMVQL1QhEJI21EDYqYmJG5Co9hOH9OSmXU0TvE8qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOxr6jf666jRLBG0ircA26HH8tlm7qKSiIj%2BLCr0iwnn1yVt%2Fw%2FRPnBNulfRz04LTJBJ0evjwSd21cUeNyfKX9wJS2Jnh%2BXDOaiKoctHfJEbuHjs70AGFa8jUE%2F8VUvaHoaU%2BygfFr6bRIohyRJMWWIDNRnZprkh1dExG0wrbFQl3DWmsA1uBKgsmYwRYJ%2FMKtbB%2FrV6IFlng8viOv50Ru2PYbHUy6OFjGIqa8MQbj50U8f%2BzGUk4%2BfZR0xjU2FFpbMg4E44xiQmWCv7KlA0T7AgUEdf7Xrmaytgz53HpkTSif5nFjZFoChnZ79dm3NvELvYSTZMP3WBIONrDHJS8GQhlOiL9HxMVzw7jrDqg7aK3WH7B0qfeDyZEMbu0QRChTcT0wZVbjYfeDAmBsbG2FJSs7sTtH%2Ft15D64%2BeXGcd37dF178KrPwy6xLdrrC%2BBAi%2FjOSt9cZzkaSK7zw8z23MARjQnSRNcPSY3vb4fxQZpW6xhOSXy0kyKNXWgxuduuI7fSE8V6moVQ7ZXnkum%2F4bAyzaIMjl3dWIbXb67cXwCHtKZiwvBx%2BQDIQBsDkbCIlzOlMhx822Gatrk1KY%2BQJ%2BQLNAadGurEk6Wj6Ocdlb2CbWnC1ayJzk9MLrFd%2FA2ITU3un18srO%2F46uMJnQ6MMGOqUB3wMyfmblpTBEifFLZEZahz3%2BNvv59Cjf2K4emPwiNiy4tAOg1%2FAIGGPymN37ZKY90KoACNfFXZnWtu0ZoI%2F4Wl5oabfsvicxCN1JQEPHmkAk%2Bim82piKRQW3pBERg3iDrXmdHSM0Aw1rZrISY6zKBgPbIlVivZzBJY%2BY6jI6CQlbTiGtLy1UxZ0Tm6MvyD4T4Lh3gt9cM8V4Pch3iNeKg6fnv0C9&X-Amz-Signature=54b91f88613fee6da9aedd0dea5d94a3238ad9083e787d86dc3a46e2c04eeb79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUHKU3G3%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T132913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIG0Na4%2FP765KWG%2B91ni7sw27sANHZ7%2BXq0Q9RlfLZHQMAiEA0mg4MMVQL1QhEJI21EDYqYmJG5Co9hOH9OSmXU0TvE8qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOxr6jf666jRLBG0ircA26HH8tlm7qKSiIj%2BLCr0iwnn1yVt%2Fw%2FRPnBNulfRz04LTJBJ0evjwSd21cUeNyfKX9wJS2Jnh%2BXDOaiKoctHfJEbuHjs70AGFa8jUE%2F8VUvaHoaU%2BygfFr6bRIohyRJMWWIDNRnZprkh1dExG0wrbFQl3DWmsA1uBKgsmYwRYJ%2FMKtbB%2FrV6IFlng8viOv50Ru2PYbHUy6OFjGIqa8MQbj50U8f%2BzGUk4%2BfZR0xjU2FFpbMg4E44xiQmWCv7KlA0T7AgUEdf7Xrmaytgz53HpkTSif5nFjZFoChnZ79dm3NvELvYSTZMP3WBIONrDHJS8GQhlOiL9HxMVzw7jrDqg7aK3WH7B0qfeDyZEMbu0QRChTcT0wZVbjYfeDAmBsbG2FJSs7sTtH%2Ft15D64%2BeXGcd37dF178KrPwy6xLdrrC%2BBAi%2FjOSt9cZzkaSK7zw8z23MARjQnSRNcPSY3vb4fxQZpW6xhOSXy0kyKNXWgxuduuI7fSE8V6moVQ7ZXnkum%2F4bAyzaIMjl3dWIbXb67cXwCHtKZiwvBx%2BQDIQBsDkbCIlzOlMhx822Gatrk1KY%2BQJ%2BQLNAadGurEk6Wj6Ocdlb2CbWnC1ayJzk9MLrFd%2FA2ITU3un18srO%2F46uMJnQ6MMGOqUB3wMyfmblpTBEifFLZEZahz3%2BNvv59Cjf2K4emPwiNiy4tAOg1%2FAIGGPymN37ZKY90KoACNfFXZnWtu0ZoI%2F4Wl5oabfsvicxCN1JQEPHmkAk%2Bim82piKRQW3pBERg3iDrXmdHSM0Aw1rZrISY6zKBgPbIlVivZzBJY%2BY6jI6CQlbTiGtLy1UxZ0Tm6MvyD4T4Lh3gt9cM8V4Pch3iNeKg6fnv0C9&X-Amz-Signature=7735ed091dbf2a8ab7d63a03c90cca06e0e2665ee084b2fcb6123e1088dece7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUHKU3G3%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T132913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIG0Na4%2FP765KWG%2B91ni7sw27sANHZ7%2BXq0Q9RlfLZHQMAiEA0mg4MMVQL1QhEJI21EDYqYmJG5Co9hOH9OSmXU0TvE8qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOxr6jf666jRLBG0ircA26HH8tlm7qKSiIj%2BLCr0iwnn1yVt%2Fw%2FRPnBNulfRz04LTJBJ0evjwSd21cUeNyfKX9wJS2Jnh%2BXDOaiKoctHfJEbuHjs70AGFa8jUE%2F8VUvaHoaU%2BygfFr6bRIohyRJMWWIDNRnZprkh1dExG0wrbFQl3DWmsA1uBKgsmYwRYJ%2FMKtbB%2FrV6IFlng8viOv50Ru2PYbHUy6OFjGIqa8MQbj50U8f%2BzGUk4%2BfZR0xjU2FFpbMg4E44xiQmWCv7KlA0T7AgUEdf7Xrmaytgz53HpkTSif5nFjZFoChnZ79dm3NvELvYSTZMP3WBIONrDHJS8GQhlOiL9HxMVzw7jrDqg7aK3WH7B0qfeDyZEMbu0QRChTcT0wZVbjYfeDAmBsbG2FJSs7sTtH%2Ft15D64%2BeXGcd37dF178KrPwy6xLdrrC%2BBAi%2FjOSt9cZzkaSK7zw8z23MARjQnSRNcPSY3vb4fxQZpW6xhOSXy0kyKNXWgxuduuI7fSE8V6moVQ7ZXnkum%2F4bAyzaIMjl3dWIbXb67cXwCHtKZiwvBx%2BQDIQBsDkbCIlzOlMhx822Gatrk1KY%2BQJ%2BQLNAadGurEk6Wj6Ocdlb2CbWnC1ayJzk9MLrFd%2FA2ITU3un18srO%2F46uMJnQ6MMGOqUB3wMyfmblpTBEifFLZEZahz3%2BNvv59Cjf2K4emPwiNiy4tAOg1%2FAIGGPymN37ZKY90KoACNfFXZnWtu0ZoI%2F4Wl5oabfsvicxCN1JQEPHmkAk%2Bim82piKRQW3pBERg3iDrXmdHSM0Aw1rZrISY6zKBgPbIlVivZzBJY%2BY6jI6CQlbTiGtLy1UxZ0Tm6MvyD4T4Lh3gt9cM8V4Pch3iNeKg6fnv0C9&X-Amz-Signature=e5df32d4d219c89fb5d281fd58018fa61d57c28b544057f74e92942cf405d564&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULAJI4X3%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T132915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQD%2Fpg16ITTbQgxSaoR%2BJF5AO5yHSsum5mJq5f%2B64XEGLQIgYzTfMLfGyH7rnB6pYSVg7sGXQTOkp7zuh%2FidHOzruMMqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuSD8oCK2cCIv9MpSrcA0wZ1tro8gesd2BXVS6PBrXLM6wREWuCD%2F2c00RJ5FS5SQWHIHntZfPGaetvoVNebePkAmTUFGGRW5rIwDrZuoyqYmWfQATc5bzxF5XgFGky78beAFkQf7Qp8phq%2FP8Xq54EKxn7FCzHfHZXZOD5%2BA1ds3MB04M0SVWvoqmwyULEv3Pidlzg%2FpgWEX6MwrDoYPSd0riNyOI0vtwLj2hi5nE6H9o3%2Ffs5qQznKV3zeuy8WBGnAxvJfRBS7aBLem747gOslwDlMTbyLfc4dRmB5b9w4l7r%2FcSNw7uOUjQuAyW4NOsi5g%2BF5YH%2F87T4FX2SA%2FJ%2Fl4ieh186NmTrkCCx%2FYPP5hjlpF%2BeiZPAUteuRpB4y8Oukc0qenLU6x%2F8Jfk2dr6sxIT43fcHunt26rRKnZm9jIWEm1V9h6e%2FV4diIL%2FGOTVxwlWWPgmxuSVq%2FSBdplQptLYhxiDBBSmBb0SVhiBC%2FHNC4cX6PFrOut%2BFdBhx6qCtLNW8ly10H7XQelQG59uPt%2FKEB91DvIRGN0a%2BW25jZQNo3QdeD8P3zj9G5M0CWb9HjXl3Hn6zR3kk8p1QmCE8HQm2w9MSJ6ZizOD8DDrOAmmPlB6a6l2V0YPMVCYpOefU8nrgg1%2FBvuAFMMXP6MMGOqUBsm4vZMyAXhAZRTh7DZdlbdsk4UWhzJ%2Frz8b00HRQbYKk4yTV8qadUnZqdasg0WI7uN9keTQBvr3KTL5dQfvlOp0lglff0QBFiLI3XKh%2FVU3gtD6F4IZvDJ264fmwqGc%2B6YMcQR8tv1i3qY%2FnJsWw0aJvle1IvtUPFazgxeeXekTpDI9%2FTuM6rdj3QXScWZe4QfFzpqsfQz7pwPpngMXATNGYz5Ty&X-Amz-Signature=eddda958e7c0defc93211c02d28c2ca352fecbd063a5e6ded87d9405e00e1b1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTNUM7DI%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T132916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGGgbXqTcUzr8N1jpqY4PQJyJnWLabQZB4PFwZq3iP0kAiEA0jPmHPZCwRnU%2FftYPZnXLZYyPCn3oVFULAQ0kSHzPaUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLP7k1sZ0jPoOCVBSrcA6xS4mP6zDxY2K8NjLlMaw7Looh712%2BnbnVbMdkGsWJ3IjL7SywR1RdHNaDWldI2aSXLbJ4KMjcaFuGfPw7niUW6St6a3PUmUsVZMJKdRMI9crMYvGp%2ByvFXOpzqzqZweg6%2BMTahPQxkAVyyXaklQvN2ceV5NMlWXJcNcQro48VlLFIyuIeowoNcm%2BJSD5yiioezArnscgVTM6vpdBA8%2FqCA%2FUVHbsJdHeEq2rc27rsgl0iWv43uU9Lq64r%2FpZwLXmrQQ9Lg7cMXxc5kescrW67k%2B1cMzPiJ4wdIRbSLWLiD3kXKCQIN6I4gz%2BGMCOpAejqb0giifUVeo49mU1hltHCQrroHuW5TWj7BVPHe2BzlEFDBs%2BzR5Y9wD%2BuCEyrdeSN8L%2FFZtdZRO3Z%2B%2FuzimlU1CtfcGqE0saNcZ51K4IymV2YvT7tOZU1Huui7PIbNgNdz2vk6GjnuCHNhozwNsvVf26csWellxjvrAnNsKnfdyqnOyt7dyYI4o86IsMSaXDS6UWsyI1KbNl8kzOSEZMB7ONhj%2B55WX40d3cB8IWGfKRVKGe%2FVcRxItX3D7TzTLIITL%2FAsTL9A6thxYpEnpQHqX5lO0YUNhV2%2BoXiZJ6hRmFM9xQIr80jR56FEMOLP6MMGOqUBiT6jFVKv%2BiyDexqGZhOdrB4RKgEpUs9r1p1AeVYjo5r%2BNVepyARJxVooB7CCC0hxOkF0Efn2MWRDbQ4GCqN%2FUBlWHUAKFHJ4lpXdCjtj8NbE17Y5Ka7%2BmBN1ekheH8suQ4%2F7DJQeZwi8MlswInnFwIzbml2M0XwhjrnGqbE%2FjcYRZq4PeJDowAAKhaiX1oqTTr8lDepoJcMGq6Yqa4m6Kpmx%2BIax&X-Amz-Signature=b169fa312085a495d736e269e3535ace511e66ec4c05a85e903249c127bbb6d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUHKU3G3%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T132913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIG0Na4%2FP765KWG%2B91ni7sw27sANHZ7%2BXq0Q9RlfLZHQMAiEA0mg4MMVQL1QhEJI21EDYqYmJG5Co9hOH9OSmXU0TvE8qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOxr6jf666jRLBG0ircA26HH8tlm7qKSiIj%2BLCr0iwnn1yVt%2Fw%2FRPnBNulfRz04LTJBJ0evjwSd21cUeNyfKX9wJS2Jnh%2BXDOaiKoctHfJEbuHjs70AGFa8jUE%2F8VUvaHoaU%2BygfFr6bRIohyRJMWWIDNRnZprkh1dExG0wrbFQl3DWmsA1uBKgsmYwRYJ%2FMKtbB%2FrV6IFlng8viOv50Ru2PYbHUy6OFjGIqa8MQbj50U8f%2BzGUk4%2BfZR0xjU2FFpbMg4E44xiQmWCv7KlA0T7AgUEdf7Xrmaytgz53HpkTSif5nFjZFoChnZ79dm3NvELvYSTZMP3WBIONrDHJS8GQhlOiL9HxMVzw7jrDqg7aK3WH7B0qfeDyZEMbu0QRChTcT0wZVbjYfeDAmBsbG2FJSs7sTtH%2Ft15D64%2BeXGcd37dF178KrPwy6xLdrrC%2BBAi%2FjOSt9cZzkaSK7zw8z23MARjQnSRNcPSY3vb4fxQZpW6xhOSXy0kyKNXWgxuduuI7fSE8V6moVQ7ZXnkum%2F4bAyzaIMjl3dWIbXb67cXwCHtKZiwvBx%2BQDIQBsDkbCIlzOlMhx822Gatrk1KY%2BQJ%2BQLNAadGurEk6Wj6Ocdlb2CbWnC1ayJzk9MLrFd%2FA2ITU3un18srO%2F46uMJnQ6MMGOqUB3wMyfmblpTBEifFLZEZahz3%2BNvv59Cjf2K4emPwiNiy4tAOg1%2FAIGGPymN37ZKY90KoACNfFXZnWtu0ZoI%2F4Wl5oabfsvicxCN1JQEPHmkAk%2Bim82piKRQW3pBERg3iDrXmdHSM0Aw1rZrISY6zKBgPbIlVivZzBJY%2BY6jI6CQlbTiGtLy1UxZ0Tm6MvyD4T4Lh3gt9cM8V4Pch3iNeKg6fnv0C9&X-Amz-Signature=e0cb543b72e3f72ca43d35d8b806c86a325a77ef6e094f459d51f495e62993a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
