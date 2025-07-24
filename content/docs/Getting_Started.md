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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPS4AY6L%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIEUAcbe%2F7Ci4OgLJePEJeJKOb%2FbS0PI14Fd42F%2BY7EXwAiBHWsmLbukLyqP2to0YTkE45e7lvKNsCrBxcS2fGaxdTyr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMDqrHaLJL40bhP7FcKtwDFHxnvUV4MVVwgtoGpfkjL6M5dtK%2FcdLiU8vdKIs1QVumIU1gdt78YmYjHdOVA%2BF28ZLjVYGi%2FYLw9v114Jtt57QkUHIYuD8vNHCERAcdm8Mmd3LF826RnVz7BHEJCQAZwkCBZBt95roT6wgfgooQiURtoUPVk07QHGtKKpjUfoGQkfQc3I0dtvKo6jyNxA8AUJHQYbhBft3jSONY7EF%2FbCA3iSYmIXGgi18%2BOZdmUCVoVxkGwTzQ6nJnqeA9SCNwHuDnaf9YHRckBo9WSuiZt41aWgA%2FcnAdEqOYgI8pl2qdiTulu8cbl%2F7jD2pXWTgC2cYPBocMi2D254MUFZiWOZIV4%2FwqSfGypIBFohJfLXLI4a63hGmJqkwgKEu8z1gw2o1kvqknsoq7wvz1yJ2eiB3lJeZCNe2B0N38wWRX8pROklS1XOeIzHeTRL8gjIP%2Bx0MMrUjh0sonc8U6K8W22dmjcCfviAXdq4qnSj949PR2pId%2FUkVUfAedXcAJc30rFuETmAjKnmypYK17BdxzWkZwOjBLRfR0E2KPPxUW26XzfAlRbaDwqBIogP14X9l2dky0Pzl5meav%2FPS1eGRu8Xn9j4mjjpZlLp%2BERPQqEciLRwvmfZSlxwcftDEwq9qIxAY6pgENx6gnHWH7%2BI0AWSQTsa%2F8J%2FhRmOQHSKCqT%2FDVUk2nnmcyOFpqFWtYjCdD7XP0w%2BXeMpo7J77qV58kZrgGhb3fxrZfR%2F2BNE5KU6RNZb24gjL9ETSR3PqKTaz%2Bb8Fep6jZ%2Fq9vEg%2BiEqgAqjSqZm7Ou8%2FqJ%2FTB2yaBV54oSkakk1%2Btv5E%2FrEoWvDoW59N2RPiWcdokrlcANC52II7Da7XKLKUPNxoc&X-Amz-Signature=254d78cf1f886d8c1806c0392b512290029910a35495017bf4f7f92964ff7fbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPS4AY6L%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIEUAcbe%2F7Ci4OgLJePEJeJKOb%2FbS0PI14Fd42F%2BY7EXwAiBHWsmLbukLyqP2to0YTkE45e7lvKNsCrBxcS2fGaxdTyr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMDqrHaLJL40bhP7FcKtwDFHxnvUV4MVVwgtoGpfkjL6M5dtK%2FcdLiU8vdKIs1QVumIU1gdt78YmYjHdOVA%2BF28ZLjVYGi%2FYLw9v114Jtt57QkUHIYuD8vNHCERAcdm8Mmd3LF826RnVz7BHEJCQAZwkCBZBt95roT6wgfgooQiURtoUPVk07QHGtKKpjUfoGQkfQc3I0dtvKo6jyNxA8AUJHQYbhBft3jSONY7EF%2FbCA3iSYmIXGgi18%2BOZdmUCVoVxkGwTzQ6nJnqeA9SCNwHuDnaf9YHRckBo9WSuiZt41aWgA%2FcnAdEqOYgI8pl2qdiTulu8cbl%2F7jD2pXWTgC2cYPBocMi2D254MUFZiWOZIV4%2FwqSfGypIBFohJfLXLI4a63hGmJqkwgKEu8z1gw2o1kvqknsoq7wvz1yJ2eiB3lJeZCNe2B0N38wWRX8pROklS1XOeIzHeTRL8gjIP%2Bx0MMrUjh0sonc8U6K8W22dmjcCfviAXdq4qnSj949PR2pId%2FUkVUfAedXcAJc30rFuETmAjKnmypYK17BdxzWkZwOjBLRfR0E2KPPxUW26XzfAlRbaDwqBIogP14X9l2dky0Pzl5meav%2FPS1eGRu8Xn9j4mjjpZlLp%2BERPQqEciLRwvmfZSlxwcftDEwq9qIxAY6pgENx6gnHWH7%2BI0AWSQTsa%2F8J%2FhRmOQHSKCqT%2FDVUk2nnmcyOFpqFWtYjCdD7XP0w%2BXeMpo7J77qV58kZrgGhb3fxrZfR%2F2BNE5KU6RNZb24gjL9ETSR3PqKTaz%2Bb8Fep6jZ%2Fq9vEg%2BiEqgAqjSqZm7Ou8%2FqJ%2FTB2yaBV54oSkakk1%2Btv5E%2FrEoWvDoW59N2RPiWcdokrlcANC52II7Da7XKLKUPNxoc&X-Amz-Signature=f6f94d073f82e7e3108c3c3331d577f1153057ab1dedc0b68389014f1d9b8848&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPS4AY6L%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIEUAcbe%2F7Ci4OgLJePEJeJKOb%2FbS0PI14Fd42F%2BY7EXwAiBHWsmLbukLyqP2to0YTkE45e7lvKNsCrBxcS2fGaxdTyr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMDqrHaLJL40bhP7FcKtwDFHxnvUV4MVVwgtoGpfkjL6M5dtK%2FcdLiU8vdKIs1QVumIU1gdt78YmYjHdOVA%2BF28ZLjVYGi%2FYLw9v114Jtt57QkUHIYuD8vNHCERAcdm8Mmd3LF826RnVz7BHEJCQAZwkCBZBt95roT6wgfgooQiURtoUPVk07QHGtKKpjUfoGQkfQc3I0dtvKo6jyNxA8AUJHQYbhBft3jSONY7EF%2FbCA3iSYmIXGgi18%2BOZdmUCVoVxkGwTzQ6nJnqeA9SCNwHuDnaf9YHRckBo9WSuiZt41aWgA%2FcnAdEqOYgI8pl2qdiTulu8cbl%2F7jD2pXWTgC2cYPBocMi2D254MUFZiWOZIV4%2FwqSfGypIBFohJfLXLI4a63hGmJqkwgKEu8z1gw2o1kvqknsoq7wvz1yJ2eiB3lJeZCNe2B0N38wWRX8pROklS1XOeIzHeTRL8gjIP%2Bx0MMrUjh0sonc8U6K8W22dmjcCfviAXdq4qnSj949PR2pId%2FUkVUfAedXcAJc30rFuETmAjKnmypYK17BdxzWkZwOjBLRfR0E2KPPxUW26XzfAlRbaDwqBIogP14X9l2dky0Pzl5meav%2FPS1eGRu8Xn9j4mjjpZlLp%2BERPQqEciLRwvmfZSlxwcftDEwq9qIxAY6pgENx6gnHWH7%2BI0AWSQTsa%2F8J%2FhRmOQHSKCqT%2FDVUk2nnmcyOFpqFWtYjCdD7XP0w%2BXeMpo7J77qV58kZrgGhb3fxrZfR%2F2BNE5KU6RNZb24gjL9ETSR3PqKTaz%2Bb8Fep6jZ%2Fq9vEg%2BiEqgAqjSqZm7Ou8%2FqJ%2FTB2yaBV54oSkakk1%2Btv5E%2FrEoWvDoW59N2RPiWcdokrlcANC52II7Da7XKLKUPNxoc&X-Amz-Signature=96daaae3110280099f2c230440a9b318f3b68131ff3c555e8ec7f6b32165444f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVB4YFYX%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIHWQ7uBGG3KDM6weOVhJ90vhX4GsrQQuWqqKbLzFaMHoAiBgYmOJVU2EMKd%2BcWtsdm3UXAobwRdr4tfGr8uiQsAdZir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMuG2f9Wc%2B3lIAqapcKtwDTwCJMthZKJpT5AXZ6U8RaMMDRVI%2FdNOezgSXjIJpNI%2FhvaRNGtS4Bo6%2BMa47%2BUygrNblv%2BSfdSqucm%2B%2BAg6bkKqI9fl7xorSSRdWetdRR%2F0PuVYavyWEeQe%2BEQPQzGL4y3h2xIoBhuzBPyew%2Bm9wpnkEPlvEpKGSYsmkf%2BfX67ihXF7KOOBId9AwQdnJ6drhMNWOtH7hRyJushGVBMYENykNzt0bsy51y1vl2O9VRMjZ6Y7P4GCrjG7KQ519U%2FSfJoIwnCpej%2BDBnLXjdQ3iifB6Qso1lwVVAXoo03pM4v3lBtmS0VdT2Yqyly23%2F6ktPvi3Oo0AmNJx5Xd6at7%2Fse13toldNDK6Rexd%2Bj3bg6T1UWOxIWobzMXGup6RuGo%2Fzh%2FIRJVQFj8TjTfAEeVKoBjHcQQXTLA%2B3amnl9j1nna4kgJdkIsHH4XXaI5zp7KdsJ1B9s8EQergICrtfmf2%2FZVmdD%2FzqHtPPYsVX1BPhf37f%2Fgsnx5Qb%2ForMPqptuFQzNX8O8LlBaGNSjVvOE2MShqh%2FZC3zaOMj2HWNSL7eoy2909CCZaXiKB7VGYQkYYdPmuiy%2FiMMqnrcfa95idI1yhI4n9q0PxXhp4vRuhQEpSCFiyV4MFp7eqBzpIwzNmIxAY6pgF6sCJ88zaq8FnS7htXClWcKwJoEBi8tlPxrn3YU9RKyqJG5%2B6vJHyWpiO88J6Mo8Ga1%2BWHBJnb0Dxk2KCnMTdSkfWotCEpE%2BrzsHHFUmea%2BkQmrQVYiUK1GPlQ0l4bKMGFYsout1dcuxpXv20H5RjG%2FLI%2FhXWmf7VVu5pZj%2FRJy1nDjMsYIAvDx96X%2BPrGrMPglfQazfVGiAdLfoscjeU%2BYoKLRlHA&X-Amz-Signature=a1011424292a4ffdf1e1e3c83da5acbfdb91d03e8a240b9d4dfe80ea8e96f0a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTFFDKVS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJFMEMCH0fOf8MQXMDNpDsSRezTwT0zfMNx68nO6xA8f8TDpPwCIEUCOgvaU7iITGPUuwaXMoplH8sO%2BYfmLfO%2BJf26E94UKv8DCC4QABoMNjM3NDIzMTgzODA1IgwuoPpra2mSYNU0Fcgq3AMH0q4yvsblDJWbfviACN1OB4Hke057rmN1YvOBAhq567nS0L5Sh8p465gUtgR9I%2FITzu6TcrdLAJs1arZhzuUjDvk16wMgoFQMom%2Fk2UGxxwwkZIYycqnN9IC7o9lDhNl3dp1PMeHWQQflKgFsbH0s34Y5FYdBGT7cL%2F%2B%2BZ%2BzcTAA0PhmvjArrNHIpu6Ym1lPVtp8%2B20rzzK%2BFMh1m%2BcqsKthLBUEXJT1InIdYqZAHoCmOxIfEr6j0QIhalIMywOqtd23irfsZxab5YjoUGe7QOlKQuFPRumYcnIQ5FV424IG%2F597NoUO33v9f%2FT%2FGQ%2F%2FRTvjIoxAMKDZwvFA%2Fm5JvJ83vFFaQenhB4OqW3Xs%2F0NsbOVZdMwJWhwrSK8GpK66yFj4dpg20wpaHIhj9j72Gf%2BNLZSejise0A54q9noiJYmOT%2B2oMZhqm3P8f8XYMB1U3YbbQeeLtJ8Wr%2B7VEzr%2FVKhoPLXNYqcR6ZcBTXHyV4DL9EnFMYl5jJZo3lhcYu52n%2FwGmzreeYdLuCLO8lkZ2bh5%2F7Dx340LwPAWpjhUOZ1Z1MZSh%2F59kMNZDfrjsVG7p6QDzcjfd%2FV2velqHZRnFCc11SlH2Zwq5U3KNrG1edzPGEUpCyREIpnJdzC%2F2YjEBjqnAY9uEyP5Nlbgqp%2FnAEmLZGNLslVD4Horqhhv699EE8Gh34naMGfD%2BkyfTwUNH0bMEQsw2uDLqKl5zBYc%2BU8k1Cjkvi0CaogULYOxunkNnstGMacWrLayR45jwd%2F7Tp2HAEAtV5RgBFSVz0f2h66FmJDAi3B5eaM5ebchAn31tDz%2BIy91dx4WdVhdkj6CDdZf7G4DPdO%2BnnskODhKmMdKKwyJ4y62zFUi&X-Amz-Signature=62b67508c6f3aa7606b6fcdd72460c7cf59bcf2f5242c2d6ea4279e8c3055cca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPS4AY6L%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIEUAcbe%2F7Ci4OgLJePEJeJKOb%2FbS0PI14Fd42F%2BY7EXwAiBHWsmLbukLyqP2to0YTkE45e7lvKNsCrBxcS2fGaxdTyr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMDqrHaLJL40bhP7FcKtwDFHxnvUV4MVVwgtoGpfkjL6M5dtK%2FcdLiU8vdKIs1QVumIU1gdt78YmYjHdOVA%2BF28ZLjVYGi%2FYLw9v114Jtt57QkUHIYuD8vNHCERAcdm8Mmd3LF826RnVz7BHEJCQAZwkCBZBt95roT6wgfgooQiURtoUPVk07QHGtKKpjUfoGQkfQc3I0dtvKo6jyNxA8AUJHQYbhBft3jSONY7EF%2FbCA3iSYmIXGgi18%2BOZdmUCVoVxkGwTzQ6nJnqeA9SCNwHuDnaf9YHRckBo9WSuiZt41aWgA%2FcnAdEqOYgI8pl2qdiTulu8cbl%2F7jD2pXWTgC2cYPBocMi2D254MUFZiWOZIV4%2FwqSfGypIBFohJfLXLI4a63hGmJqkwgKEu8z1gw2o1kvqknsoq7wvz1yJ2eiB3lJeZCNe2B0N38wWRX8pROklS1XOeIzHeTRL8gjIP%2Bx0MMrUjh0sonc8U6K8W22dmjcCfviAXdq4qnSj949PR2pId%2FUkVUfAedXcAJc30rFuETmAjKnmypYK17BdxzWkZwOjBLRfR0E2KPPxUW26XzfAlRbaDwqBIogP14X9l2dky0Pzl5meav%2FPS1eGRu8Xn9j4mjjpZlLp%2BERPQqEciLRwvmfZSlxwcftDEwq9qIxAY6pgENx6gnHWH7%2BI0AWSQTsa%2F8J%2FhRmOQHSKCqT%2FDVUk2nnmcyOFpqFWtYjCdD7XP0w%2BXeMpo7J77qV58kZrgGhb3fxrZfR%2F2BNE5KU6RNZb24gjL9ETSR3PqKTaz%2Bb8Fep6jZ%2Fq9vEg%2BiEqgAqjSqZm7Ou8%2FqJ%2FTB2yaBV54oSkakk1%2Btv5E%2FrEoWvDoW59N2RPiWcdokrlcANC52II7Da7XKLKUPNxoc&X-Amz-Signature=c3ad8a5bef2deab365acadeca208952ff85f0053c51a58ce0d9dc6f39f2c62c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
