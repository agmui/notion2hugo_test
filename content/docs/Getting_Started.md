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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KXBX5JP%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T080936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCM%2BQw%2FdlbxaPHqKTAyCHwpeszi%2BMYodumvZjBz6twnRQIgFALFTUBwSu1DwoANqOcRwyJXAH%2F9ZBuX3sp%2BoMkGGHIqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7OulrjkCVA8BesqSrcAyEdgASI7nxUi5hxxwCupjKZVtzFMmh59qwgN6yjNXdwJuFhmTObVwFItSJQoPopnk%2FJfzDImOKv%2FdWnwjvTlGBxTCHCEq3WdJUw0iQBWhOHM8KIB8WTpWnEVqSJGiZpAqsynopPGZGljQuKY%2BeCPbIJJ%2BYSPKjhRpCGbfVEGWf1ycKdvZELiHPpvHfmK2xQtv%2BJhPMm74kEWgDiOUaJIS3k%2BtKPq%2FaBeHdLNXL2Of5ie%2FTpt0ayRcbBknpAoCZDKJoXUuCTSiUixMNT7BpxAvguOod97jmvaCfWpDNzRV%2F%2BgXapwK9JQPxH4Ku7P01PkqqL2NS7cDOiFZ8QtFdNAPdLC9vGeMpGGQd5l4EGIYkeI45aFjDV1%2BsT13YLLOnZhjwQ0dX92cgWXVr%2BXC3thsd0QYKbJYg9zd4xneW7oWUPYAUHnSGw4gwsK%2FFyOz8DOv9ohvvAywGO6ea6RiRnUcaTe3oEVoEtUBQhkuLsDYfhZhxNXXXon7XxswbPEhDW8kijlSlMGBa0380bOWTA8SQKSUQGVN9hEOedtgA5F0%2FJMDDDVMl5sHMNm%2BGTmU5mU8Sh%2FDgU39IyDZEdilWfhNRwRcOCqWpNohL%2BcuULuqBojDzxSRK0NjMXDgHuMN3y%2Fr4GOqUBvjCVZtHwT8Bw29F7Rc0nOsZtGIv9nnhoUlRjbqwqckLBXYwSiz%2Byy0Aphn7oWjCOOtxFMBkcanZigrb2B3xaS2AFRmjLi%2FhpFmvvGwM4T4JNLe%2F869JvONUg4FVlURFDO%2F7KQHtwOSok0AnjX9CRMglP4IZeyOXhBMe8RpqUVgvIfFm58moFKqZKPvZGVQAZNxBIrjA3nV0voeoJACC9ddfktp6J&X-Amz-Signature=9342e307f7bdf224b34d41546aa6b34dbba35d07e9bdb9af95eb688602706e22&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KXBX5JP%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T080936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCM%2BQw%2FdlbxaPHqKTAyCHwpeszi%2BMYodumvZjBz6twnRQIgFALFTUBwSu1DwoANqOcRwyJXAH%2F9ZBuX3sp%2BoMkGGHIqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7OulrjkCVA8BesqSrcAyEdgASI7nxUi5hxxwCupjKZVtzFMmh59qwgN6yjNXdwJuFhmTObVwFItSJQoPopnk%2FJfzDImOKv%2FdWnwjvTlGBxTCHCEq3WdJUw0iQBWhOHM8KIB8WTpWnEVqSJGiZpAqsynopPGZGljQuKY%2BeCPbIJJ%2BYSPKjhRpCGbfVEGWf1ycKdvZELiHPpvHfmK2xQtv%2BJhPMm74kEWgDiOUaJIS3k%2BtKPq%2FaBeHdLNXL2Of5ie%2FTpt0ayRcbBknpAoCZDKJoXUuCTSiUixMNT7BpxAvguOod97jmvaCfWpDNzRV%2F%2BgXapwK9JQPxH4Ku7P01PkqqL2NS7cDOiFZ8QtFdNAPdLC9vGeMpGGQd5l4EGIYkeI45aFjDV1%2BsT13YLLOnZhjwQ0dX92cgWXVr%2BXC3thsd0QYKbJYg9zd4xneW7oWUPYAUHnSGw4gwsK%2FFyOz8DOv9ohvvAywGO6ea6RiRnUcaTe3oEVoEtUBQhkuLsDYfhZhxNXXXon7XxswbPEhDW8kijlSlMGBa0380bOWTA8SQKSUQGVN9hEOedtgA5F0%2FJMDDDVMl5sHMNm%2BGTmU5mU8Sh%2FDgU39IyDZEdilWfhNRwRcOCqWpNohL%2BcuULuqBojDzxSRK0NjMXDgHuMN3y%2Fr4GOqUBvjCVZtHwT8Bw29F7Rc0nOsZtGIv9nnhoUlRjbqwqckLBXYwSiz%2Byy0Aphn7oWjCOOtxFMBkcanZigrb2B3xaS2AFRmjLi%2FhpFmvvGwM4T4JNLe%2F869JvONUg4FVlURFDO%2F7KQHtwOSok0AnjX9CRMglP4IZeyOXhBMe8RpqUVgvIfFm58moFKqZKPvZGVQAZNxBIrjA3nV0voeoJACC9ddfktp6J&X-Amz-Signature=c9cfdffb3023a9f51a7e850ac2f7aeeb9ba3ea0f937a00df204b8ab5fc41ac9e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666APK62PP%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T080943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCsBhIXiRL%2FsVaytba3IMfBrCPEuuA6sNEqhWhfoEHDuwIgQ7z%2B8KH25E%2FpRjMvIoz09as1wXBQpchitkvXavtsIywqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9FBys3aHo5bSkS%2FSrcA7xCSONHKz6WKacU72Q4hnJh918dWaocETXeh1m%2F67%2FGmGJA4jf49TqeyZHmLbJ8S6mwep09CaYV2VfO%2B1nSWOqmaPCGlVTPjPsnd8TgMa1eDHLITUdw%2BV4Ohomocqco04DvzqzSjU0W5oXhrB3t66cWr6tGI1hR%2FbteN2QcWBFod90FbsLrAx1OC%2Fp%2FIrCPoRnOlydiMtnhzCfKEgGkANSg0HCMnW12RyhMsR185QzRzvg6HMnSrvu70rb5Wwt%2BYdQzqBIs7RmmL30DVtjkzBJku3X8IWdNrDbC4vdyqeYkazyioDXF7y1Ldy9rw8hhd%2B26NQNN3Iv14YPzteUEjUaW43L4yPjXNryaqv155xJmLRXhIhA5Fq3eiv2mcaJaprT%2Bwrn0kUUZlkQBDIf1R3vbJZQHtVLV8A1D%2BWOFNnFMZxY8EakbeEhCQoWxra4fN0lUcRTGARr1HZ26VK8paiSiuoe9B0HXXE4DLYnJmfPCptTLLID%2FeVrC3OcYwaBFifmcVMigTACO%2BiKgojjGWAW%2BRUkMkR2btTHI6phqvFZ3X%2BlcBgkbZkaWaijkH%2F3A88iSrzT%2FN3pWSV%2BfEmsAhTy2OdkMUwsQvahH7upNIlpS%2FuAQwgLYr8BRhnfBMNDz%2Fr4GOqUBc0IhlkyFMJceZ1yUMcCZxbfRHXbcuB6mB2nBEmhkUUyd6YNrkMEtFuJV3EngSGWuOqlTUUNpUG0NTQ1c7fERL1em0YfvKuLSK54gomYzlMQ%2FIL0UYtdD0q7PbnOclTPe5vqs4n7lFzy7W4A6eEdG6YgGBQc%2BXgC6J2TP2saYMMh1pL1NThiggLGpZcZKEjYLJrrA3%2FTM%2FP9vTCW3U2vlor7lMNwR&X-Amz-Signature=7a1683a87bf6e15832491e75415481e68481bbdbd62c3330dfec5124df748f0e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LFAUCRE%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T080943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDA6ihp9P5ESaapwFBP6pzB5vsMzgU%2Fwba%2BuJXZm9DEvQIgY9HQKhVUglY1imoPdgd5%2B7LMFqQYwqFtXC%2FqX%2BGfRSsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMoA2yK1etOEmz%2BhFSrcA0VK9%2BKqPEY7Gz%2FNLxFrjAPFlTGJaiRIRf0TS4DVY3jG9ffy2VZBOu3ffHoYKf%2BWF72MzoupWH0KlJ5ZMbQDl1rQyqucgyRBrP%2FaWuf4nVAr6dakFhGTKWUXDVxXPBptqap38tox3%2FPbbfqwXRAHZXlj41AjwWkuUzKmn024zZjIDvRRDmIrcGWGwREeEVbrRVxQCQpUPks2kcT4DGfKrybyLLinj3q1e2hvNEkhh9NzwA47lJJ1PJYIEjKUiAzcgtHYU0zjd8jKbV%2BTwF4Qko09DQ4ao%2BRpfNUJME%2BWAyWK6O5Zj6G1c4v4bhbCmdgmDySksxswfzf4ys4ZS0VRYwTUn3oJrL4Dazwjyz3izM8VVBbn%2BgXoQ3ewS1waYB7mWNGKkoWFsCUY0vDSBvEw1sbISm12uazdpLIQu9wSAtbb3fKOXQf%2FtwdDAUyjhjh4cNzlANeIub6wLQRiJDqXfHTvq3ds6WGsL5042%2BMXKJBd2Drso%2FEwturX2fy215b4Vbp6WL%2F9nAThDIXT4GiW8toPCIOp%2B9crKeHGCoU6AT5mKQJ3mEkbywNV8ZUsNf93me7dSOaA8bkhzfEnbjuj%2B12seJ6HSMDeZTYg17paVlVKNnnzeDthf9xYzic%2BMKry%2Fr4GOqUBWE0JV%2BDGz3AIQ7MVIDFfY42BIJPbeN%2BveuX2qAjGTT5Aj1IYEFuznsdzbYy9tppQm1moyJyMx5gbkdd0r3ya0%2F9TolLO0MWbaLyUfoWUE99eska2AUXm06XdqcfftiasZBfVylCb7gjGUZLL3Uj7rK1lZU0qmH2KL3XAiHx8hcMpKv16na%2Bz6Xpah4aFhJMDowrqrMD3RijaF%2BXse1K7XZd5NGbp&X-Amz-Signature=0727ddbcbbe05b9bf5cbb36d3f52c5b369c407fc2e92cd16be85fd8299a7e8b3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KXBX5JP%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T080936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCM%2BQw%2FdlbxaPHqKTAyCHwpeszi%2BMYodumvZjBz6twnRQIgFALFTUBwSu1DwoANqOcRwyJXAH%2F9ZBuX3sp%2BoMkGGHIqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7OulrjkCVA8BesqSrcAyEdgASI7nxUi5hxxwCupjKZVtzFMmh59qwgN6yjNXdwJuFhmTObVwFItSJQoPopnk%2FJfzDImOKv%2FdWnwjvTlGBxTCHCEq3WdJUw0iQBWhOHM8KIB8WTpWnEVqSJGiZpAqsynopPGZGljQuKY%2BeCPbIJJ%2BYSPKjhRpCGbfVEGWf1ycKdvZELiHPpvHfmK2xQtv%2BJhPMm74kEWgDiOUaJIS3k%2BtKPq%2FaBeHdLNXL2Of5ie%2FTpt0ayRcbBknpAoCZDKJoXUuCTSiUixMNT7BpxAvguOod97jmvaCfWpDNzRV%2F%2BgXapwK9JQPxH4Ku7P01PkqqL2NS7cDOiFZ8QtFdNAPdLC9vGeMpGGQd5l4EGIYkeI45aFjDV1%2BsT13YLLOnZhjwQ0dX92cgWXVr%2BXC3thsd0QYKbJYg9zd4xneW7oWUPYAUHnSGw4gwsK%2FFyOz8DOv9ohvvAywGO6ea6RiRnUcaTe3oEVoEtUBQhkuLsDYfhZhxNXXXon7XxswbPEhDW8kijlSlMGBa0380bOWTA8SQKSUQGVN9hEOedtgA5F0%2FJMDDDVMl5sHMNm%2BGTmU5mU8Sh%2FDgU39IyDZEdilWfhNRwRcOCqWpNohL%2BcuULuqBojDzxSRK0NjMXDgHuMN3y%2Fr4GOqUBvjCVZtHwT8Bw29F7Rc0nOsZtGIv9nnhoUlRjbqwqckLBXYwSiz%2Byy0Aphn7oWjCOOtxFMBkcanZigrb2B3xaS2AFRmjLi%2FhpFmvvGwM4T4JNLe%2F869JvONUg4FVlURFDO%2F7KQHtwOSok0AnjX9CRMglP4IZeyOXhBMe8RpqUVgvIfFm58moFKqZKPvZGVQAZNxBIrjA3nV0voeoJACC9ddfktp6J&X-Amz-Signature=6a59fa093cda536cd078112054e867784a5606d0f9236c496f5b8885cb8cb995&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
