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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YP3KJDK%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T004036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCICOf9AYOBu3shWcdWSojAs%2BVM63f8NuDSAx%2B6ZE25gXbAiAY8uiPAR%2BNZ2MnLSmTaWXIUeYD04kJS%2By0VA1sYwwi2Sr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMn1YgJm4%2FsQSyjR%2FFKtwDDwC9T1mVR%2BmCi8XAVRBLKe3WpNUPNT4hQsVoNRByDFa%2BO92mYI28f%2BX%2B%2FomEbtS%2BePMS5OQZ3NCElIQaLMvKloGWVwQ7WycuXahcpPyTOuJqHT2PayqFT1ci%2BwE1YOMEVYpM5OyaHnt2y88kcgn4KxTC3HNHApx3hK%2F%2F4I685qSBifwsHdnBbOf%2FVwIS90iv6IbRF%2Fi3VmCnRCw4A%2FqPM5HtHj5apDshyR%2FQL2sLhxophuPf1CzOOrSCWLLnWamQCxy2Zn5v6r8XUeseE%2FQyyxJJlvzK%2BbTdhHhjoueAuot3XZNEutiy%2F0Bkn7qEHfeIM9OIDS4vFDc501sndBSDbeeu0O00Qpk7F%2FCGnxQczBDdn97WnppOuFiOZGliZcLzs%2F560MK6YmluPeh%2BWKV5V702EGgK76TfJ5IOEhOpMuFCWNhX7yPXAJEPjoWVFfM89jsgQrREbpvGnU6CVtQIKbyEN1NdTQvmV%2B3aX%2F2KTo29%2BP4zWgmIVZKLvYsmgtvPXs94Xc8UcQYHBdb%2B2obT6KQDjChGJdfjib1yvZT7c0OxN5fyduMf8eXwe0tJpGtb4TI0QIfeTbNwxXkgQnx77Zh1JLqFWQ%2Fg%2F8sh6NB88vjnga9AjDP94azKT0swmOyUwQY6pgEUr%2BhD8VFIQHb5kwAmhEW1pQCiojEKx9uXMxspKrPLlaANT%2FNgzhSDYSdAq57wLW1m%2BxTmxIiKolrGF5rGE8OC74O9KLKnDB%2BaJVLA25VqAQxyNiUnN1L%2BtAx2siXB8M3DNc4mdmY3rCu4xQA%2F33NwIZfLOKr9Kmxn2%2BVK7tnMRRbfv8hduri0VBWYcAuD%2F35OXngxb1CK6Myl17J%2B9wd7gtE%2BWz6n&X-Amz-Signature=d0fe1e313122f27d08d3ed16925769a81436e2e0549799647cc03e0aaccb1659&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YP3KJDK%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T004036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCICOf9AYOBu3shWcdWSojAs%2BVM63f8NuDSAx%2B6ZE25gXbAiAY8uiPAR%2BNZ2MnLSmTaWXIUeYD04kJS%2By0VA1sYwwi2Sr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMn1YgJm4%2FsQSyjR%2FFKtwDDwC9T1mVR%2BmCi8XAVRBLKe3WpNUPNT4hQsVoNRByDFa%2BO92mYI28f%2BX%2B%2FomEbtS%2BePMS5OQZ3NCElIQaLMvKloGWVwQ7WycuXahcpPyTOuJqHT2PayqFT1ci%2BwE1YOMEVYpM5OyaHnt2y88kcgn4KxTC3HNHApx3hK%2F%2F4I685qSBifwsHdnBbOf%2FVwIS90iv6IbRF%2Fi3VmCnRCw4A%2FqPM5HtHj5apDshyR%2FQL2sLhxophuPf1CzOOrSCWLLnWamQCxy2Zn5v6r8XUeseE%2FQyyxJJlvzK%2BbTdhHhjoueAuot3XZNEutiy%2F0Bkn7qEHfeIM9OIDS4vFDc501sndBSDbeeu0O00Qpk7F%2FCGnxQczBDdn97WnppOuFiOZGliZcLzs%2F560MK6YmluPeh%2BWKV5V702EGgK76TfJ5IOEhOpMuFCWNhX7yPXAJEPjoWVFfM89jsgQrREbpvGnU6CVtQIKbyEN1NdTQvmV%2B3aX%2F2KTo29%2BP4zWgmIVZKLvYsmgtvPXs94Xc8UcQYHBdb%2B2obT6KQDjChGJdfjib1yvZT7c0OxN5fyduMf8eXwe0tJpGtb4TI0QIfeTbNwxXkgQnx77Zh1JLqFWQ%2Fg%2F8sh6NB88vjnga9AjDP94azKT0swmOyUwQY6pgEUr%2BhD8VFIQHb5kwAmhEW1pQCiojEKx9uXMxspKrPLlaANT%2FNgzhSDYSdAq57wLW1m%2BxTmxIiKolrGF5rGE8OC74O9KLKnDB%2BaJVLA25VqAQxyNiUnN1L%2BtAx2siXB8M3DNc4mdmY3rCu4xQA%2F33NwIZfLOKr9Kmxn2%2BVK7tnMRRbfv8hduri0VBWYcAuD%2F35OXngxb1CK6Myl17J%2B9wd7gtE%2BWz6n&X-Amz-Signature=474ce6ee2fd48a943f0cc67b2f1e44635e3e3b83517ae9cef9f49a2522b9b9c0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YP3KJDK%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T004036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCICOf9AYOBu3shWcdWSojAs%2BVM63f8NuDSAx%2B6ZE25gXbAiAY8uiPAR%2BNZ2MnLSmTaWXIUeYD04kJS%2By0VA1sYwwi2Sr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMn1YgJm4%2FsQSyjR%2FFKtwDDwC9T1mVR%2BmCi8XAVRBLKe3WpNUPNT4hQsVoNRByDFa%2BO92mYI28f%2BX%2B%2FomEbtS%2BePMS5OQZ3NCElIQaLMvKloGWVwQ7WycuXahcpPyTOuJqHT2PayqFT1ci%2BwE1YOMEVYpM5OyaHnt2y88kcgn4KxTC3HNHApx3hK%2F%2F4I685qSBifwsHdnBbOf%2FVwIS90iv6IbRF%2Fi3VmCnRCw4A%2FqPM5HtHj5apDshyR%2FQL2sLhxophuPf1CzOOrSCWLLnWamQCxy2Zn5v6r8XUeseE%2FQyyxJJlvzK%2BbTdhHhjoueAuot3XZNEutiy%2F0Bkn7qEHfeIM9OIDS4vFDc501sndBSDbeeu0O00Qpk7F%2FCGnxQczBDdn97WnppOuFiOZGliZcLzs%2F560MK6YmluPeh%2BWKV5V702EGgK76TfJ5IOEhOpMuFCWNhX7yPXAJEPjoWVFfM89jsgQrREbpvGnU6CVtQIKbyEN1NdTQvmV%2B3aX%2F2KTo29%2BP4zWgmIVZKLvYsmgtvPXs94Xc8UcQYHBdb%2B2obT6KQDjChGJdfjib1yvZT7c0OxN5fyduMf8eXwe0tJpGtb4TI0QIfeTbNwxXkgQnx77Zh1JLqFWQ%2Fg%2F8sh6NB88vjnga9AjDP94azKT0swmOyUwQY6pgEUr%2BhD8VFIQHb5kwAmhEW1pQCiojEKx9uXMxspKrPLlaANT%2FNgzhSDYSdAq57wLW1m%2BxTmxIiKolrGF5rGE8OC74O9KLKnDB%2BaJVLA25VqAQxyNiUnN1L%2BtAx2siXB8M3DNc4mdmY3rCu4xQA%2F33NwIZfLOKr9Kmxn2%2BVK7tnMRRbfv8hduri0VBWYcAuD%2F35OXngxb1CK6Myl17J%2B9wd7gtE%2BWz6n&X-Amz-Signature=3879336e4773f5c7091029c8d504eae74b0b7fd71dddc9422fca83da41503141&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYC26VTG%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T004044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDpb%2FdNqpF%2F%2FXJZjxnuiY5yfw1tVIq0pmKbddG8ojlvkwIgK3EgWRdhrwORjF9P0oO1zsFZJYsCIkL58wLz0GoWgXEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDDSFu2akRltB4EBiRyrcA16ObN5ayZNyPENAiAfPs2%2Fc5UO2gZ66dg8Vip7MXeqqetwmws8Bsb69LSqqZDPSx5ffvEcmTR0YWcpwBKtMss8WZX3wD4EwG1JCl2z86VTCrzMIfegcZOjtZ%2BGbuO8hmduk3XQ6%2FRJ3zdIJqfTS0EyNU6b64To4dLG8YIhaSZyQO8Ibux6JF51nvB4GR0yUS0Z2Iv8cPDZEr%2BBrXnjKDGT6n60UZPoCIqundKb0HC0lFn9EpZEwhQB1yYTRSs9Nw7yKK8lmULnSGT6fXfg8Fmkfvgj%2F%2Fo4r4uQ5YRmsPkyJ4nLRUA7VjXfUeVUBytKQmYzGXEbr0Fa%2BSKeAiFG1VfUu6RjUQvSWAnUfOqOPcbR97hhw8RUA8Gc9VV65pTgq7QVVvC7E1r6AFqqccuOJ8V0CqlUaJEerQ8%2FyFoHpYAYEZmMzFCCPcVDcI4VYHcTP9rre91t3QCSdcV6%2Funt%2F9JBLnJO0LMieJux7Hztv8PxbFS2V6cAiIzFDOr8nXto9CwQDw7WHWj08KEI3FobACJGvAphUcVf08q6JtazbmqTodNMsnc4y%2BxX6Fi%2BV29H03udzM6Vk3UbZLZ1COd4ookQGCz8f48eOl19QJ%2F9y1KA9NgBP8WjRubyQc7PVMPLrlMEGOqUB0%2Fep78YCtdCVOGwFu9IYtpSvFbFsPlb8TF0nS4xctfFFs3smiK3Vd9Xofm8Dk%2BCwKk7UCRUXRLWIIi7dffv7Kz0Inz3D5xWD21fbVcDxX%2F2pqF98dwOFAhWgFYwoO2RECsh5%2FmQ0NhDMa4TlNQN3LeJRI5hC6o4h%2BAjFQ0SEE%2FQ1i5bjfGQaibNv739cPBFJX63Q89qqsm%2FlJSKzXLzAWtS2HvCl&X-Amz-Signature=d663f4a4d55acf16721181a6f8f7bb1d881ab6457a9ca3c0bd0726d4eb285e2a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQP6ALKJ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T004044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIGsizYK0zwyXsHDz5wgCu3sUwqkCIk%2FZvY5VlYhhpjN8AiEA5%2BivenihejuF6XnbSADR1%2FuD8gJ%2FTtsN%2Bw5pHBXjUuUq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDH3Zr10uouEMnMvlHCrcA7TDPfZ2Ya8AjsSlgvIFNefABag3spFErvwBGWMYXIbGEt32ByRY2uQH3mbkyyiWncnfCkDhPSEiEdCXxc9SuD62RMrFUXu3wMIaNeVltqGKWS2Y8JF9l0FfZZHDco4zMx4RuqXonqkloKuQ0bv3MnEWJHEUf2KBJB83%2FdcCVbYtb0XhipFnz7WNsG%2BimJ4bsp7iFXDvMkW%2B5BwPpI9InxJ3B6aiiSnKDz9hFvLZ9CNYFQDp7GxUloKi513M7Xl%2FIIzOeBDYtvCeoh6O3is4dC1yZp84mRnS%2B9WSxynUpotyg4W8ffgX8vcoHhGWbzlhnatkqHMGbxiEoWXdA0vTjtVhx4nQ40LyuGAYkXpGJNKucM8borBPVt76OnLUCHxry4wyrPRTL9H9XPhFEJQqKpwDsSHFx6121rVtUD6drZuyTmkrUHOKkuhywNOQTNQhllyJmQXU0gow1IpXIdXPDbpmEGZT8K7GrSk2cKkGqv8Fv1JtCgRgrMhzj5Szw7j5sbF6WkBJN6q%2FG0zMNmotHrvSf0UklN0CsR8JIMeLijs1rVyfMaYkC7AIXsp%2BhOK109hUW1mcbzr54geCc3%2Bqhk4YyI0Kg%2BAxPQRmCj%2FhmZmqMV6u73gCXn4y3DlUMJjslMEGOqUBR2WhGZWQu7QMuM2UtBCYtu%2Fk4MmTI0pGzBkZ5g0oOyga9CCVoZmLZRC4cD8F5LmQKZ99UMwbigBHO5ERfzxqBf2rlA3KbnkXIdJUV3vGJkfe03F8r%2B5jQ6ie0fWyLjL2NqxHZsXZ%2BX7VuXOHmApqUiZaCJFn2ChYpngzWyzDdMlaL2fNSuvyeH3gvzyTkHleWpgKFiCC1weMjF9u4JDb0U9ZeCUx&X-Amz-Signature=e648e077d88eab28e6649a6e9a9726e37ba7d3a182f127e07e818dfb1f2c913f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YP3KJDK%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T004036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCICOf9AYOBu3shWcdWSojAs%2BVM63f8NuDSAx%2B6ZE25gXbAiAY8uiPAR%2BNZ2MnLSmTaWXIUeYD04kJS%2By0VA1sYwwi2Sr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMn1YgJm4%2FsQSyjR%2FFKtwDDwC9T1mVR%2BmCi8XAVRBLKe3WpNUPNT4hQsVoNRByDFa%2BO92mYI28f%2BX%2B%2FomEbtS%2BePMS5OQZ3NCElIQaLMvKloGWVwQ7WycuXahcpPyTOuJqHT2PayqFT1ci%2BwE1YOMEVYpM5OyaHnt2y88kcgn4KxTC3HNHApx3hK%2F%2F4I685qSBifwsHdnBbOf%2FVwIS90iv6IbRF%2Fi3VmCnRCw4A%2FqPM5HtHj5apDshyR%2FQL2sLhxophuPf1CzOOrSCWLLnWamQCxy2Zn5v6r8XUeseE%2FQyyxJJlvzK%2BbTdhHhjoueAuot3XZNEutiy%2F0Bkn7qEHfeIM9OIDS4vFDc501sndBSDbeeu0O00Qpk7F%2FCGnxQczBDdn97WnppOuFiOZGliZcLzs%2F560MK6YmluPeh%2BWKV5V702EGgK76TfJ5IOEhOpMuFCWNhX7yPXAJEPjoWVFfM89jsgQrREbpvGnU6CVtQIKbyEN1NdTQvmV%2B3aX%2F2KTo29%2BP4zWgmIVZKLvYsmgtvPXs94Xc8UcQYHBdb%2B2obT6KQDjChGJdfjib1yvZT7c0OxN5fyduMf8eXwe0tJpGtb4TI0QIfeTbNwxXkgQnx77Zh1JLqFWQ%2Fg%2F8sh6NB88vjnga9AjDP94azKT0swmOyUwQY6pgEUr%2BhD8VFIQHb5kwAmhEW1pQCiojEKx9uXMxspKrPLlaANT%2FNgzhSDYSdAq57wLW1m%2BxTmxIiKolrGF5rGE8OC74O9KLKnDB%2BaJVLA25VqAQxyNiUnN1L%2BtAx2siXB8M3DNc4mdmY3rCu4xQA%2F33NwIZfLOKr9Kmxn2%2BVK7tnMRRbfv8hduri0VBWYcAuD%2F35OXngxb1CK6Myl17J%2B9wd7gtE%2BWz6n&X-Amz-Signature=ad5d4a74ea630d1a58f8d2e6d0390b67ab937b950072b258bda0d8663f10a258&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
