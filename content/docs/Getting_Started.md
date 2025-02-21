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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVFAPWRZ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDTzHNa0A%2BKz%2BpRe2XUi8tfbyHQnhMPVIqhCqVKpG%2B8EAiA%2FKm8wg10YKiikR%2FjwUOBzcgd3pwV9DkufwVcxqoMRGSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUTJ%2FYCcRqkkPNw3fKtwDWlVpCji%2FuUzNUCO%2F27I3NqR1UiOMH6Vo6FOCBS18kq8YpgK2CBs0sEy8IyRndWQJvMIeqexGkimFKZ1TAYUu6PnBTfIJV3t2lHPGHQB8RZcJg6%2BhuHOFg5WQGE%2BwboR6GIC6CYwliTfxHNcGLAvfqss8fXTX7N7Lk1LprWU3JHVIthPXgiZrRTb2EaqOJIcuGp8rGLE0phhYCGlwGe4Dlrcf4ot5Ykf%2F7amj3YXzOHwd9SDE4Ffk3OoFL45YVQdNfWYqW3BWpU3neXfrbykjhYMa9ZcfmL268dmXqj543%2BeIg%2FqpzI8z7SrSM%2F9MzWWCJBoBjHKFE8MMPL%2BNlsDh%2FhfglZwcB69dV15qxVsm2ankRoIbUlq7Af1mlR8NQCGQk6Fs35tgO3Qz%2F%2F626qGn3VONVpVj8XZvHGfdqWl3FQAx%2BAUbqvBQxOjrwqgddsUOU8aAcTzMbtVU%2FsGPXbnO7U%2FHkVal2esdGj%2F7CoW%2BZaR1yLuq6KyTDtlVBLWgcR2o%2FSJdIqdhpO6WpydsnmtZ%2BdbK%2BO8wRccnA3eMX3Kt9ijNsfOjnLhsDQQGoNfc8EmFexYIg3w%2BKz1y%2FhG%2BF7MToas1J8Tf1nQrI%2Fc2zSvYcOAzBByTXJLKjzy8cUow%2F93gvQY6pgHYLGfIaRxLdamFFMcCfZlBVVFZ4hPJK6W97jFDswf4czYtropLp4SkggE5anfSKAh8ETScCJ8bGQbNiqi5HpsHTKgnl2%2FkBzeOA0uoGd4i65qKXXUo%2B03wGeFhY5K6ErdUKJaZyegdJouy8PYWfPElWMFk%2F9U33Fmi4gioQYDo1MJnF2selEn%2FuguiZB%2FWUjXrIVuT0hneCPKXbwumeGzGToQduxcd&X-Amz-Signature=5047ddcb465ad27e32b6722cce1323014d7adc65ccc0a6e10d6095c75af9bd58&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVFAPWRZ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDTzHNa0A%2BKz%2BpRe2XUi8tfbyHQnhMPVIqhCqVKpG%2B8EAiA%2FKm8wg10YKiikR%2FjwUOBzcgd3pwV9DkufwVcxqoMRGSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUTJ%2FYCcRqkkPNw3fKtwDWlVpCji%2FuUzNUCO%2F27I3NqR1UiOMH6Vo6FOCBS18kq8YpgK2CBs0sEy8IyRndWQJvMIeqexGkimFKZ1TAYUu6PnBTfIJV3t2lHPGHQB8RZcJg6%2BhuHOFg5WQGE%2BwboR6GIC6CYwliTfxHNcGLAvfqss8fXTX7N7Lk1LprWU3JHVIthPXgiZrRTb2EaqOJIcuGp8rGLE0phhYCGlwGe4Dlrcf4ot5Ykf%2F7amj3YXzOHwd9SDE4Ffk3OoFL45YVQdNfWYqW3BWpU3neXfrbykjhYMa9ZcfmL268dmXqj543%2BeIg%2FqpzI8z7SrSM%2F9MzWWCJBoBjHKFE8MMPL%2BNlsDh%2FhfglZwcB69dV15qxVsm2ankRoIbUlq7Af1mlR8NQCGQk6Fs35tgO3Qz%2F%2F626qGn3VONVpVj8XZvHGfdqWl3FQAx%2BAUbqvBQxOjrwqgddsUOU8aAcTzMbtVU%2FsGPXbnO7U%2FHkVal2esdGj%2F7CoW%2BZaR1yLuq6KyTDtlVBLWgcR2o%2FSJdIqdhpO6WpydsnmtZ%2BdbK%2BO8wRccnA3eMX3Kt9ijNsfOjnLhsDQQGoNfc8EmFexYIg3w%2BKz1y%2FhG%2BF7MToas1J8Tf1nQrI%2Fc2zSvYcOAzBByTXJLKjzy8cUow%2F93gvQY6pgHYLGfIaRxLdamFFMcCfZlBVVFZ4hPJK6W97jFDswf4czYtropLp4SkggE5anfSKAh8ETScCJ8bGQbNiqi5HpsHTKgnl2%2FkBzeOA0uoGd4i65qKXXUo%2B03wGeFhY5K6ErdUKJaZyegdJouy8PYWfPElWMFk%2F9U33Fmi4gioQYDo1MJnF2selEn%2FuguiZB%2FWUjXrIVuT0hneCPKXbwumeGzGToQduxcd&X-Amz-Signature=31ae916b98e841258b6f95e63d9f6a28cc1ea25c6ebcc8908ab005e8ebec015c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMZQB5LQ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BbEGCtLewAvB2%2FE0E3Jte7SalO922UZaG2OUaTDZyBAIgFk9BWR2u1QQz4t8%2FEIPw71Nr01xmjuPMFjty2c38CU4qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqtyTcjhBapNix1mircA4LjPZiSM1wlFHFSguG%2BF7SnKD7zzCE2ASz7GnWMeVDQTeI1JY2krB05jLNEUcUo4vvS3ArupbGU2IbWYiiX%2FBBUa%2B53xcUPktN%2FyXPPpyGo9PJJnQXEwHMgBiYramb9fkxyqvicUpFvmMte7Nl4iMCPLACYOYDvC6H1bxmOCeVMMPQff7Lb2WbdgTeJGeLdAAsIklmsoqfPkCqm9liiF%2FGXxqjrNqlcUw%2BrrzAsevZexkUhCi0qDoqm2GFZS%2B5C6NluNZBdYnAq6UH4opxAiCwpbmTcji7rnAMW9ScHr8ubbTB59x%2BSkj7agrMwiFmAab1cBtCYPo79EQ8ifbv5yiXI%2BAdbDnqPoPX4JDgbBUJxdpDGv7az26Xtp3HJhZ1QPna8hidlvlXx7%2Fd9EmhOz5P41j8iJJH%2BFMZV9UXCPmVa8hkOQhzE7U0THfCgBfHv5shYTwVU68fPXmNTNCtyqu2YvAXiHkJowUKQ%2BTmb963UFunFe%2F2UTiZdF2n%2FXnK4t%2B%2FADFZ7usp8CgXJ0GdkSkCEOUTX8LW%2FH9JNXgngl%2FlmnxedEc51xSWsfrsOHtcMkOxAY5%2By1X4h2CZ7J3Y9Aa7MEtcdC22H5wYVRmCbOy2FDKCPnK3ySLTAG4EfMPTd4L0GOqUBjwm1BnFiuhU4Ud7SUwhS3EuWgXncScIn%2BJ%2BoPPr52YX3V%2FCUJFa%2B60smRBgVkTf6EoLhyHF8kEVgQkRcGTn4XBke8I5Je32%2F7qXpOYprrSkskap7ysPNijVWL8YXuGCI71%2FKGeolEQ%2Fov%2FTe%2BSRBejgC29GZ%2Fxd5KB96fWMlaWFrzmYjeZOvTY%2F8HfsVbAav5EUg8kuB9XZf7grRsIdA8gDjnIIp&X-Amz-Signature=50e12d2cece2b9c439c9579d4eb615d7cc3410619d2faae0fd00007cad68d2ea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MS5SJAM%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErRvSmyIohT5WEuKbhDZN76TL1VQJXVAmm%2FtgBGa9iMAiBucwqSxjUoh43zuOfifuxmtntf05fX%2B9vP9fd%2FcjyspSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2fi4VFznkte%2FcwCLKtwD74bruItXsQXtCTtkarY7bQ7P3n7lOvN6H5IdoFKdEi8bDAper4ztBuRmCIWyjoKOFkfXzVj6tYvRF8ULJly2OC%2FGjqzilY6uPwLXCzhj83m3bNMBzkggDCqaFi5DVqjMXCGwPgZMoUsJTO%2FZpGDEFdMXucKCviC8UPJzCH%2FdJuvauk8p2WMHGDqDJ3xkfzYZtc0yXjHOgrj7rD4%2Frh%2Bf4o7sBTiJwpUIXeMQa5RfWTYn4Ma9Yv90Z5%2FZkGnhEn0qr7d%2FO8aOdvDQI5vBD1hUpYpntbALPbqAuOVb2d8Xe7T1Z66MdynRx6%2BurqIzN6TrAWZHD3WYUVySr9Y7X8SM6x957Gj7LXb6OtIpV7Ke%2Fqo%2BzNODtrAeOFaL6Ci3fuvDtzozja47jLFNgxIJhKXUDM%2FFteiFsLRov9E6jq79oOlXFa6ayugG4otetdhm0Cl1vnnS4hKzrbRuAKCXAUDp6Ht8thB5WpKD7VVEOvLKf37OwwKf7dWvP%2B7Jmjdc6i1X7QhHqkatuIeg%2FWTFaeS6XAZGnLZMuBSvxzbu3%2FTEZpWu2tWTruCjU2QXIMouEPfZvhQOECQRp7OWx0eepJgv%2BeiFp6ZTsdt49ZPeV%2BSr94KVuZM1pxBPmAA8zMIwoN7gvQY6pgEiRF14NYK0miertYpfKHfxa2W5AheO0n71U9T18xn8qQyxAq9%2BiwxDk1%2BoggOVQOjcwBRE6eCT%2B1goISlw9YV87s9cXsZ2kKg8UDtWCZzKNrZVEvGwgfmDXcuWpnacmzV2yrTPmNVVPNwsIPxlB3OOi8fIS505eXs8jgMuEtbQY%2FPYpiThzphzaJI8CvoSJjAKKGEfcZ6SP221J1fwlwo%2Fj1e%2BbDdR&X-Amz-Signature=0aef520a53acdd1843014bf7677ba3b7c4597ccd3e364d5cd66e9c72c0c3645c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVFAPWRZ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDTzHNa0A%2BKz%2BpRe2XUi8tfbyHQnhMPVIqhCqVKpG%2B8EAiA%2FKm8wg10YKiikR%2FjwUOBzcgd3pwV9DkufwVcxqoMRGSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUTJ%2FYCcRqkkPNw3fKtwDWlVpCji%2FuUzNUCO%2F27I3NqR1UiOMH6Vo6FOCBS18kq8YpgK2CBs0sEy8IyRndWQJvMIeqexGkimFKZ1TAYUu6PnBTfIJV3t2lHPGHQB8RZcJg6%2BhuHOFg5WQGE%2BwboR6GIC6CYwliTfxHNcGLAvfqss8fXTX7N7Lk1LprWU3JHVIthPXgiZrRTb2EaqOJIcuGp8rGLE0phhYCGlwGe4Dlrcf4ot5Ykf%2F7amj3YXzOHwd9SDE4Ffk3OoFL45YVQdNfWYqW3BWpU3neXfrbykjhYMa9ZcfmL268dmXqj543%2BeIg%2FqpzI8z7SrSM%2F9MzWWCJBoBjHKFE8MMPL%2BNlsDh%2FhfglZwcB69dV15qxVsm2ankRoIbUlq7Af1mlR8NQCGQk6Fs35tgO3Qz%2F%2F626qGn3VONVpVj8XZvHGfdqWl3FQAx%2BAUbqvBQxOjrwqgddsUOU8aAcTzMbtVU%2FsGPXbnO7U%2FHkVal2esdGj%2F7CoW%2BZaR1yLuq6KyTDtlVBLWgcR2o%2FSJdIqdhpO6WpydsnmtZ%2BdbK%2BO8wRccnA3eMX3Kt9ijNsfOjnLhsDQQGoNfc8EmFexYIg3w%2BKz1y%2FhG%2BF7MToas1J8Tf1nQrI%2Fc2zSvYcOAzBByTXJLKjzy8cUow%2F93gvQY6pgHYLGfIaRxLdamFFMcCfZlBVVFZ4hPJK6W97jFDswf4czYtropLp4SkggE5anfSKAh8ETScCJ8bGQbNiqi5HpsHTKgnl2%2FkBzeOA0uoGd4i65qKXXUo%2B03wGeFhY5K6ErdUKJaZyegdJouy8PYWfPElWMFk%2F9U33Fmi4gioQYDo1MJnF2selEn%2FuguiZB%2FWUjXrIVuT0hneCPKXbwumeGzGToQduxcd&X-Amz-Signature=78806970d64413802e27aa55013abf1f12f06366c1d7ee4af1aa59ce5a63c3dc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
