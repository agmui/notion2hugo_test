---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD6UZCNL%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQD3xcdyC6yK6nXuEMon9XX9uJ0hkdE3ekDRNCsWarMqMwIgBOCrjahqDLafQ%2B8GN9MRVJUgY5%2BnEc8bTjGL1qKOxAQq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDPNmNwR0fg8ude8EyyrcA0sDHPZog9NujBnnvZBO%2FuWuU16cxyNvL4hSP82HvJch2RH0evrHKmib%2B9QpQKyxTgD6pVfzjOQmufybZ%2Bn6bK0ynXkdMdefMSjUqhwDiGPT5xdR2WPYER6yhgKQ6ny6iVPTBYXrUl9jddqGZLyjIrRU1Gq%2B2TPuNp7ZBQ3v6nSaKCnGfKtsZiqGG5gegv%2FnhIH0NMzMyEw9zUErvEFsDZ%2FseuU9zNZJPiB99%2BsH6BK4TivgGrdMkoDSXRAwCfQHYVXXRCCG0ckZL86hIFWfk0b4q277MsJH98c4iUe88c5Cd40%2BoQ%2FVfj3opWUmXlwxHrHvYcKQb22tCJ4hint%2BGfqpvx%2B4eEJVeQaIYYkX%2BZG5yBUMy8LLyIQZjM7JQN0StAfKYVpgNqzzimRQ3JcYlPeA7lPwf5v2s2BIfV7sx7Xsz0s1jcB7Zt5Itsyu27Hba5LtdeAEZbbECFVDyMM52W4JwvXjP6aO9yQcjSpV79DlQCcqJpQUBxIXZd9T%2FQWsOzMegWXPyOB6q5GqiWWqzzcn4CLtjO611QCgvXuyAaitbjFstADJr%2By4hvkx83FwTjCYdpAF%2BQuk4uIMHtF3y%2BV8Et6%2B0dpN59YnZGXjCrN3e6p3MqUSyzchGIxAMPHnldMGOqUBXWDXh1%2Bi6OiMsTfSLuVUm4itXwmEKI2wQL%2BgqIOSmdkdk1OJHzx6TGrcAyOpiCAApQl3vzhob1xmMrIa%2FD4H5esZHw2Y4KMj5IvdxB8MREDW93Q9blL1LSSYRIdRoUzCbsuKUobGAChSJ70%2BNzmtc1jytm2cAKABV%2FlE1NEYTmFY3FqRTgbtlzNxE8oBsJAHjY%2B3FnefdzdI%2FMi2FseARB5uFlcq&X-Amz-Signature=9bdc788ced82234984c7e772e17a3fa2e3a2f55b165f6ddaeec968a18607e06a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD6UZCNL%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQD3xcdyC6yK6nXuEMon9XX9uJ0hkdE3ekDRNCsWarMqMwIgBOCrjahqDLafQ%2B8GN9MRVJUgY5%2BnEc8bTjGL1qKOxAQq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDPNmNwR0fg8ude8EyyrcA0sDHPZog9NujBnnvZBO%2FuWuU16cxyNvL4hSP82HvJch2RH0evrHKmib%2B9QpQKyxTgD6pVfzjOQmufybZ%2Bn6bK0ynXkdMdefMSjUqhwDiGPT5xdR2WPYER6yhgKQ6ny6iVPTBYXrUl9jddqGZLyjIrRU1Gq%2B2TPuNp7ZBQ3v6nSaKCnGfKtsZiqGG5gegv%2FnhIH0NMzMyEw9zUErvEFsDZ%2FseuU9zNZJPiB99%2BsH6BK4TivgGrdMkoDSXRAwCfQHYVXXRCCG0ckZL86hIFWfk0b4q277MsJH98c4iUe88c5Cd40%2BoQ%2FVfj3opWUmXlwxHrHvYcKQb22tCJ4hint%2BGfqpvx%2B4eEJVeQaIYYkX%2BZG5yBUMy8LLyIQZjM7JQN0StAfKYVpgNqzzimRQ3JcYlPeA7lPwf5v2s2BIfV7sx7Xsz0s1jcB7Zt5Itsyu27Hba5LtdeAEZbbECFVDyMM52W4JwvXjP6aO9yQcjSpV79DlQCcqJpQUBxIXZd9T%2FQWsOzMegWXPyOB6q5GqiWWqzzcn4CLtjO611QCgvXuyAaitbjFstADJr%2By4hvkx83FwTjCYdpAF%2BQuk4uIMHtF3y%2BV8Et6%2B0dpN59YnZGXjCrN3e6p3MqUSyzchGIxAMPHnldMGOqUBXWDXh1%2Bi6OiMsTfSLuVUm4itXwmEKI2wQL%2BgqIOSmdkdk1OJHzx6TGrcAyOpiCAApQl3vzhob1xmMrIa%2FD4H5esZHw2Y4KMj5IvdxB8MREDW93Q9blL1LSSYRIdRoUzCbsuKUobGAChSJ70%2BNzmtc1jytm2cAKABV%2FlE1NEYTmFY3FqRTgbtlzNxE8oBsJAHjY%2B3FnefdzdI%2FMi2FseARB5uFlcq&X-Amz-Signature=c3d199e131badc5568ad762b920e3f2973117c1c1c16514e3fccc5428d72e6fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD6UZCNL%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQD3xcdyC6yK6nXuEMon9XX9uJ0hkdE3ekDRNCsWarMqMwIgBOCrjahqDLafQ%2B8GN9MRVJUgY5%2BnEc8bTjGL1qKOxAQq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDPNmNwR0fg8ude8EyyrcA0sDHPZog9NujBnnvZBO%2FuWuU16cxyNvL4hSP82HvJch2RH0evrHKmib%2B9QpQKyxTgD6pVfzjOQmufybZ%2Bn6bK0ynXkdMdefMSjUqhwDiGPT5xdR2WPYER6yhgKQ6ny6iVPTBYXrUl9jddqGZLyjIrRU1Gq%2B2TPuNp7ZBQ3v6nSaKCnGfKtsZiqGG5gegv%2FnhIH0NMzMyEw9zUErvEFsDZ%2FseuU9zNZJPiB99%2BsH6BK4TivgGrdMkoDSXRAwCfQHYVXXRCCG0ckZL86hIFWfk0b4q277MsJH98c4iUe88c5Cd40%2BoQ%2FVfj3opWUmXlwxHrHvYcKQb22tCJ4hint%2BGfqpvx%2B4eEJVeQaIYYkX%2BZG5yBUMy8LLyIQZjM7JQN0StAfKYVpgNqzzimRQ3JcYlPeA7lPwf5v2s2BIfV7sx7Xsz0s1jcB7Zt5Itsyu27Hba5LtdeAEZbbECFVDyMM52W4JwvXjP6aO9yQcjSpV79DlQCcqJpQUBxIXZd9T%2FQWsOzMegWXPyOB6q5GqiWWqzzcn4CLtjO611QCgvXuyAaitbjFstADJr%2By4hvkx83FwTjCYdpAF%2BQuk4uIMHtF3y%2BV8Et6%2B0dpN59YnZGXjCrN3e6p3MqUSyzchGIxAMPHnldMGOqUBXWDXh1%2Bi6OiMsTfSLuVUm4itXwmEKI2wQL%2BgqIOSmdkdk1OJHzx6TGrcAyOpiCAApQl3vzhob1xmMrIa%2FD4H5esZHw2Y4KMj5IvdxB8MREDW93Q9blL1LSSYRIdRoUzCbsuKUobGAChSJ70%2BNzmtc1jytm2cAKABV%2FlE1NEYTmFY3FqRTgbtlzNxE8oBsJAHjY%2B3FnefdzdI%2FMi2FseARB5uFlcq&X-Amz-Signature=18830111c45a4974b7538f7f0d4000b19a990e6061d9a770418c3104f95f5212&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRPHSHP7%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQD8ZDrR%2BS2iV%2B6SBcqIguPMQKUTmk89Atx0NWVELnk%2BkQIgTTQK2pgkcXbqMz9Bqrli1aG55vcoYjbN4wIpSiIbC08q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDBxgvajxtUbdzhp%2FKCrcA8vJ0SIAlnxF71zMYe2KrVhiglkv6ZDmuLEhxbZ77toljMQYbqYTXpMy4snz3I7d%2Fe8VkYU5uwtdvvtWX6aEgUWwTb%2F%2BIk2fGWw4jhWTYK18xDhw%2BvdZ2yn2G%2B8BjtGT0WZIWi0enNF%2Fx02d6lHPuUbUldD6RkqsPP4N%2F%2FQz1jvNb5tCpfqQDnJuxBoOuS%2FTY3WwVLm3oGypkld0uI%2BCc5ib%2FTwET%2FjhHAMWJcEJ6v%2BWipDDNNCH%2Fa4Y686qHp3IfuIJV3uymwLIPGNy2donq1odos7PZ%2BRx2B053jnhWRz2Yyrc4weylWqNAsdcoJuXDON6uNZU9wcoUgmt6Gd9SWhDiF5wudSJZeVHstyKkvG%2BhC9vLvXB9%2BZfQWtwUjkjxEAGkk0X5jjD%2FXzmgcVOj2CIXqqTopxlK2nNiercprwDQeXQmPQOuAMNC5%2B%2FmOWAbSOAPh6XBzcNzxtC8Wun5qIFf14HUP8dVTcO6FgfdRDfYrcxdy0wxUdESuXfS7sLBatcGJkhuR4o3xemKNninkHlEN1oIJVEIn37%2BYbkRDSR6S4LqSw1OAR3lClTFXKXLQKQX%2F%2B0c9%2BembwnYS9TBrFRhkWuYz0OtT7H%2FP5jpSLVRrL9z2f2ezuuwzwzMJDpldMGOqUBxQGhakfLTNZ3imlR9GldT4eyLMp29rC8x%2BeHrLGkB%2F%2BPT4OMlt2Lgb9UoalGxT9dovcvmA%2BItVgiVO7kac1Ph1UiNiFwd3s3OmaJ2cPPaBlDtsgcNhompRODVXZC7l7ths5sl5RxGMXYPhqOpZYR2o9ITrrYoTSo8nCYIvdyuDminR9%2FCS3j9u%2FKqpL2e%2F6NlESiuDyx5vNjz1x4Ba3ilGq%2FMD3O&X-Amz-Signature=4d648cf9ff7ba9977e87c3847fb1674fecff6e928939f0323ab5404ce8617e07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRKMHYHG%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEmXiDoEaqvLccNlV8%2BME162jPCKafmEVV3bu5VQEkUfAiBAfdnE7oqEJzJlnUi5Uh0DoFYyLluv12akcpML0KYY8yr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMhclFh32lG0cDQZV6KtwDQT86ljT9%2F0k01c5zjFnbnuE51l%2BtmRQleWjFfaaxw0%2FsawFhscyinfwmOTGwRL0rhYz0mB0gM5FONsE0HlMnG%2B9wHC2z0us80O7ygu7rPaTj3O7lKa8VNcFiiJDRyTIcZUXaKeee%2FIxqmLlJCvhnP5ANE1EER5MMdwbHb7Yx2tPP0%2FOihotUDyLXxcoKaNCG2%2BR%2F8R26KKm2iNBFrLTOKWgeDkN4aTwEMqYLQUssb%2FaEX7P553b6TsAGv0KgmwBK%2BQ5OFNil713gCmavOKbd%2Frsqa4dI%2BJ%2F%2BCxSt5v7mKqnuC48Ksa94wNMAwzBLTK4i%2BkyfAF%2BA4Fu3xP03ppFDDCmTm4kit%2FAXPP3S5pq%2FXSKokNy4%2FLvyOPAsyEF%2FQkAwrPmn7B8TzwkzJk3a15UFQaeLiO89LLKW7g3lXm6YMbOaFBpXr%2F1z2F%2Fgbuz2LEYfOskk%2B4swmQNDj%2BJsDBbGUM2YqGHwarUDS4mXLHhgitgDmIUPklMH0jCDE8M1RNZcTzTX6r%2Bp5M4ViHuTHQamHWXFKJgG7a%2BWQN%2Fad6aef%2FGV01duTCh84jH8sI0nQrB3Uh4At1V0sRA5s4XBpGWq0TjH8K9eKEQVr3EyFrjgUwH8AOrXBKIbL2%2B5T9gw2%2BiV0wY6pgEQz%2BfE0KFEIZxa8QufaPZVrv%2Fcy7rWT6nGXg%2BaK%2BU9w7uuvnWS8x8rlQyYMOlEE8NbrFuhRKTtH2%2BsR3TB%2Flix2LIMvUwn3tavcqTh3IO5aceirn6ls%2FkKIUMufMlCSZnjZAm0kxWnFpHsqQG%2FqMSJqwrQhXHuaypWqzTeM8d35NKSMCThySYkgHxxn19Ki4gLAJGkVjngcCETniHhzlLwVLgpznsn&X-Amz-Signature=aaa9c3c45f203faf71d593a27b13692641475546a82608c361b22941a5f3c3f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD6UZCNL%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQD3xcdyC6yK6nXuEMon9XX9uJ0hkdE3ekDRNCsWarMqMwIgBOCrjahqDLafQ%2B8GN9MRVJUgY5%2BnEc8bTjGL1qKOxAQq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDPNmNwR0fg8ude8EyyrcA0sDHPZog9NujBnnvZBO%2FuWuU16cxyNvL4hSP82HvJch2RH0evrHKmib%2B9QpQKyxTgD6pVfzjOQmufybZ%2Bn6bK0ynXkdMdefMSjUqhwDiGPT5xdR2WPYER6yhgKQ6ny6iVPTBYXrUl9jddqGZLyjIrRU1Gq%2B2TPuNp7ZBQ3v6nSaKCnGfKtsZiqGG5gegv%2FnhIH0NMzMyEw9zUErvEFsDZ%2FseuU9zNZJPiB99%2BsH6BK4TivgGrdMkoDSXRAwCfQHYVXXRCCG0ckZL86hIFWfk0b4q277MsJH98c4iUe88c5Cd40%2BoQ%2FVfj3opWUmXlwxHrHvYcKQb22tCJ4hint%2BGfqpvx%2B4eEJVeQaIYYkX%2BZG5yBUMy8LLyIQZjM7JQN0StAfKYVpgNqzzimRQ3JcYlPeA7lPwf5v2s2BIfV7sx7Xsz0s1jcB7Zt5Itsyu27Hba5LtdeAEZbbECFVDyMM52W4JwvXjP6aO9yQcjSpV79DlQCcqJpQUBxIXZd9T%2FQWsOzMegWXPyOB6q5GqiWWqzzcn4CLtjO611QCgvXuyAaitbjFstADJr%2By4hvkx83FwTjCYdpAF%2BQuk4uIMHtF3y%2BV8Et6%2B0dpN59YnZGXjCrN3e6p3MqUSyzchGIxAMPHnldMGOqUBXWDXh1%2Bi6OiMsTfSLuVUm4itXwmEKI2wQL%2BgqIOSmdkdk1OJHzx6TGrcAyOpiCAApQl3vzhob1xmMrIa%2FD4H5esZHw2Y4KMj5IvdxB8MREDW93Q9blL1LSSYRIdRoUzCbsuKUobGAChSJ70%2BNzmtc1jytm2cAKABV%2FlE1NEYTmFY3FqRTgbtlzNxE8oBsJAHjY%2B3FnefdzdI%2FMi2FseARB5uFlcq&X-Amz-Signature=afe2bc8a9e34e744ecb1c2253be8c06a7e61c7853aaf922f3eb3af6116c0520b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
