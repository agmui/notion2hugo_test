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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ7F6MXR%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsAZ4dkajqgVC%2BugmVrkqyL40C7DARiD2X3CfKWrjP7wIhAJPeDe4%2BX4B8CgbZ%2BRPbRIr4Kn6YUea7fMUtJjzDdQi2KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0eM5LuCgCUDUZiqwq3AODmNx8n5t9DbCWzwACrgAJ5oZgiPc8TyDv7M1BerIHbL6xMXXuCJPXOZiBKg0ZFdd242EoXV5x7rUIxglFvBNzwRW1bkEbAserZFL%2Fc%2F85xlCY%2B6R%2BHO9YboJlMUXgliT%2BlA%2BvhAn9OtCmYI5vSjqTDE5wVHFnFWMT1KGb2zXA06r4UC%2FBSWZBjIPvHH52QUKYzE7uJJbaI2aXfarhmy0d98929eLsWaOcIe6yulJSTnH1MQKaKTE4yiwKOpF3vD%2BPDQ7FIUU1j4uWjMiWGJI6rGgzjK0LkJ%2Bs7aePyjSA09ZIa76w8uQADM9I60TMW7c2w%2By77keJNSmMyhwstm0g%2BmDFbUL%2F4XYiKh0E5XWcYcLDaHMdJCwZoy%2BCJ0hy%2B3xYeoJZsdGPJ45mv2diV2TLInctkdT%2FzfPXGN%2FwoME3sKbxRx6VQdbVhQtqqjiPz%2Fus5jqsh%2Fk9gGPLBOo0%2FFIFYe3lX2jqkyNB6bopbm5TUUz6IKLXMTTN5hkxeNSMfyBeCB6igL2n%2FZXckyNZIcwS%2Beth75RqUkcl4HPw1t%2Fy9uVXYRRR%2B%2B9wgnk4UKp3levEnC9dEEDyzsvWtYN11dLTQKqtQid5wLmigDOi3na4TaWR%2BmhUuEHjB%2BZcDzDz9IzOBjqkASDqEvD8NS51SnvQfHec9Vje7A9%2BLiCqU%2FvwoB3%2BXQb598R7QlmyOuvrEMikO8Qx0b2LypGuWixgn7H1ZVUZI%2FMYToPGo0%2B10azeZrsKkVAPGHY92%2FzUggDs2tZb%2Bah1%2BPJpYPo733O8jWKrNQN2xkXrJrHUPcr97H1S7bWkZUJ1QbN7R1plJtkhRM1a%2BBWUs5Qfl8bBnUE15Wye%2FQxdzJEifUxf&X-Amz-Signature=691c499f8accac1550c0a7f218713bf4030884e6857d9a03ea636be61020ee0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ7F6MXR%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsAZ4dkajqgVC%2BugmVrkqyL40C7DARiD2X3CfKWrjP7wIhAJPeDe4%2BX4B8CgbZ%2BRPbRIr4Kn6YUea7fMUtJjzDdQi2KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0eM5LuCgCUDUZiqwq3AODmNx8n5t9DbCWzwACrgAJ5oZgiPc8TyDv7M1BerIHbL6xMXXuCJPXOZiBKg0ZFdd242EoXV5x7rUIxglFvBNzwRW1bkEbAserZFL%2Fc%2F85xlCY%2B6R%2BHO9YboJlMUXgliT%2BlA%2BvhAn9OtCmYI5vSjqTDE5wVHFnFWMT1KGb2zXA06r4UC%2FBSWZBjIPvHH52QUKYzE7uJJbaI2aXfarhmy0d98929eLsWaOcIe6yulJSTnH1MQKaKTE4yiwKOpF3vD%2BPDQ7FIUU1j4uWjMiWGJI6rGgzjK0LkJ%2Bs7aePyjSA09ZIa76w8uQADM9I60TMW7c2w%2By77keJNSmMyhwstm0g%2BmDFbUL%2F4XYiKh0E5XWcYcLDaHMdJCwZoy%2BCJ0hy%2B3xYeoJZsdGPJ45mv2diV2TLInctkdT%2FzfPXGN%2FwoME3sKbxRx6VQdbVhQtqqjiPz%2Fus5jqsh%2Fk9gGPLBOo0%2FFIFYe3lX2jqkyNB6bopbm5TUUz6IKLXMTTN5hkxeNSMfyBeCB6igL2n%2FZXckyNZIcwS%2Beth75RqUkcl4HPw1t%2Fy9uVXYRRR%2B%2B9wgnk4UKp3levEnC9dEEDyzsvWtYN11dLTQKqtQid5wLmigDOi3na4TaWR%2BmhUuEHjB%2BZcDzDz9IzOBjqkASDqEvD8NS51SnvQfHec9Vje7A9%2BLiCqU%2FvwoB3%2BXQb598R7QlmyOuvrEMikO8Qx0b2LypGuWixgn7H1ZVUZI%2FMYToPGo0%2B10azeZrsKkVAPGHY92%2FzUggDs2tZb%2Bah1%2BPJpYPo733O8jWKrNQN2xkXrJrHUPcr97H1S7bWkZUJ1QbN7R1plJtkhRM1a%2BBWUs5Qfl8bBnUE15Wye%2FQxdzJEifUxf&X-Amz-Signature=983c0ca987860ce96b5f677e82005bf934448872728f15f0debe95361f81a9c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ7F6MXR%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsAZ4dkajqgVC%2BugmVrkqyL40C7DARiD2X3CfKWrjP7wIhAJPeDe4%2BX4B8CgbZ%2BRPbRIr4Kn6YUea7fMUtJjzDdQi2KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0eM5LuCgCUDUZiqwq3AODmNx8n5t9DbCWzwACrgAJ5oZgiPc8TyDv7M1BerIHbL6xMXXuCJPXOZiBKg0ZFdd242EoXV5x7rUIxglFvBNzwRW1bkEbAserZFL%2Fc%2F85xlCY%2B6R%2BHO9YboJlMUXgliT%2BlA%2BvhAn9OtCmYI5vSjqTDE5wVHFnFWMT1KGb2zXA06r4UC%2FBSWZBjIPvHH52QUKYzE7uJJbaI2aXfarhmy0d98929eLsWaOcIe6yulJSTnH1MQKaKTE4yiwKOpF3vD%2BPDQ7FIUU1j4uWjMiWGJI6rGgzjK0LkJ%2Bs7aePyjSA09ZIa76w8uQADM9I60TMW7c2w%2By77keJNSmMyhwstm0g%2BmDFbUL%2F4XYiKh0E5XWcYcLDaHMdJCwZoy%2BCJ0hy%2B3xYeoJZsdGPJ45mv2diV2TLInctkdT%2FzfPXGN%2FwoME3sKbxRx6VQdbVhQtqqjiPz%2Fus5jqsh%2Fk9gGPLBOo0%2FFIFYe3lX2jqkyNB6bopbm5TUUz6IKLXMTTN5hkxeNSMfyBeCB6igL2n%2FZXckyNZIcwS%2Beth75RqUkcl4HPw1t%2Fy9uVXYRRR%2B%2B9wgnk4UKp3levEnC9dEEDyzsvWtYN11dLTQKqtQid5wLmigDOi3na4TaWR%2BmhUuEHjB%2BZcDzDz9IzOBjqkASDqEvD8NS51SnvQfHec9Vje7A9%2BLiCqU%2FvwoB3%2BXQb598R7QlmyOuvrEMikO8Qx0b2LypGuWixgn7H1ZVUZI%2FMYToPGo0%2B10azeZrsKkVAPGHY92%2FzUggDs2tZb%2Bah1%2BPJpYPo733O8jWKrNQN2xkXrJrHUPcr97H1S7bWkZUJ1QbN7R1plJtkhRM1a%2BBWUs5Qfl8bBnUE15Wye%2FQxdzJEifUxf&X-Amz-Signature=a965e9ad545a0e9edaa6132e816cb03130a8d42cc2516cd6379853e1138d15cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOAYPZOB%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjsmmONJjdA75k1EobdXO%2FKyAEgsZM1ioS7TTiQSIToQIhAJCtYvSHNMBqvr8oIrkYx6fP%2F3K3H3I1Xj2eA15ZnmYjKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPjqeX1SEoYozidhAq3AMG8Jo%2FdI0fgk%2FrnDUsh6bvzd5dxuNTJOLrCIVLDqQWyrBqtDlULWgLeN9qxylqlA8fDM4Z10U7y0q7nVkVw2h7zPRj%2BEOLRWQmPj4uIfy2Aez%2B%2FDuO3L459zx%2By4w8uYIQPzcFvstxASW2%2FqEVbwunKGR9DKylrm8tZ0quWpXVOsfFN2vKqJ0LE2vwFZniYdjaMBho32lquUTZMOZir8Jhu6J2r0Mu%2FozAT1p%2F8QrLvA23wa71b5a5OozIMNiw2mhcvj9RpTpuS294F%2FXXC%2FdNlpN8qON1WLpuyxswHQXa7GS%2F0%2FD0oZo3JYExPKR1med5n%2BzxV1xYa4Gio6ZSgdbSkgOz15VyeEY6Tqf4iS8y1x%2FY8PFVY%2FoDLF%2F88Ay5yGL8YPIUnPCz7%2FUv2sA2gXKJ3xmHJzc4bYFOKetU5iYmvkRr4rmERDci2mimPXnU8T8lEN5AjCyp9nQakxE8ZcyjYHh248jhlg8fOpkFBTFRREzfUTVJU3XcpTJM1AUHo3BqYp7xwNPGsJ1w%2BAxy3KlfdSqjRxEdeKjrb0UsJeBNRorAEIwbvqShERgQkzCxyfdZKGoLeBPIJELi6vvRLS%2Bf%2FY3NzO9bLjB9i3UTo3CwnoVAgh%2Fb%2BnLfqfxQajCo9IzOBjqkAWQXwtn%2BFXbuXMivpzTjwBhPM406rd7Y%2FmzhUxa%2B7lW51dudufY16NpPg3DLHPaIsnX%2BrAu9MpcLyouM0dPXGwPvjG5iCZGvnlNoZdMajs07r4qBw%2Bs04HQagHW7aFwfW6TKpPNzjPvqXVvdo19Q%2FUbpL94O9fgcumxok6B1DOcS2EEjgsGRVUhtcxMVNWdc%2FMLS18cK8iIF9k%2FvnEuXIOy6f6gf&X-Amz-Signature=e928eb977c95723ca5ca27002f254e935260d9c0a84231fd7a2b9ba22413e12a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FSEL57V%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhZkkv4RVqcfH%2B8zrSJ7XpTmCVWspZOKxgTVPD8yNeJQIhANS2fcNlGhPiWh02crPWEJHeWws%2Be70oDJmMh7u7FTlDKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9MGLg%2F%2BrtB5dcULIq3AM2h5DktuNtVk55lMXxNXLWp4Xes%2F7ekasLuNoGUQIhOFQODYg1VoZEgaIm%2FwG0NEIG%2BIZNaWoGcOojZgzjt2Tpeg2ByThPtJFVgqbC8P%2BMDMtgPaV8H1JBs0OMLdNOPLv6kLITtxI5OEHIm7YBOjlh1MFt6l6b7Tr61YT3B%2FGJ6Hg23x5VivG947pGlpjGkNwoGGQgvxUBYc%2FmZ7OJ5BM%2BXv5DrGwh5LGYSOPt8onm32YEATa%2BNui39IKFrBl%2FJYfGsax0HEnELgtuImnAWbKL7Tr94V2%2BCXljTTleUzRgRK%2Fntiez%2Fc2gH0uOdNkouxgaXKeNvQXCK6Xru3xdrBtWzm5CJ1bDb7TQhEmMYA5E557pYj5DDGLKNfUjjpzen%2B%2FhlmBzfeVnNGcK1yHeEpgKHi3Dvt%2F6TMrwAqZfSeR2RTQR%2Bd%2F4xEmuKwVaCkUSCJ3yAN0wCzePYWIFYMwIe8bqu4mcf3X0JxOtXKP%2BWVHLhajUgKVssPyj41viCnXjyuizrCHQWu5AWl%2FoC9gkrorUZco5HkB68fVdutCUolW2IVgcaVD3NNOBPOXHpLb4bx0P6jrUl93M37PnJw1HK2g%2F22W8i0Kz0UL54GDmACyROXTO8dUhp1%2BIOq16xzCx9YzOBjqkAX46Kes38MNvE%2FRvbALWpokqI5GpfdjOs3DWc3wAHqqfk3eZuxpAgvgWTY1cPZOOQ9Jcr8Q33zfXNmLzspUqN9%2BnES8g2%2BYR16gOhCC5%2BQua0qlZzS46QHqcue8FJK7eZ%2Bq6CvwicJTlg3rt3QKEgmdel1gXA8TbsKwFG1zJSTEXOXK4R9xJDRnX6ZqzdEuGG491SgrPgAuPBe09YjkNtCE42S4A&X-Amz-Signature=ca96eefc9a9211babbc38f85c3c9c412edf851d9d9063aa790bfd4075a0c6cab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ7F6MXR%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsAZ4dkajqgVC%2BugmVrkqyL40C7DARiD2X3CfKWrjP7wIhAJPeDe4%2BX4B8CgbZ%2BRPbRIr4Kn6YUea7fMUtJjzDdQi2KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0eM5LuCgCUDUZiqwq3AODmNx8n5t9DbCWzwACrgAJ5oZgiPc8TyDv7M1BerIHbL6xMXXuCJPXOZiBKg0ZFdd242EoXV5x7rUIxglFvBNzwRW1bkEbAserZFL%2Fc%2F85xlCY%2B6R%2BHO9YboJlMUXgliT%2BlA%2BvhAn9OtCmYI5vSjqTDE5wVHFnFWMT1KGb2zXA06r4UC%2FBSWZBjIPvHH52QUKYzE7uJJbaI2aXfarhmy0d98929eLsWaOcIe6yulJSTnH1MQKaKTE4yiwKOpF3vD%2BPDQ7FIUU1j4uWjMiWGJI6rGgzjK0LkJ%2Bs7aePyjSA09ZIa76w8uQADM9I60TMW7c2w%2By77keJNSmMyhwstm0g%2BmDFbUL%2F4XYiKh0E5XWcYcLDaHMdJCwZoy%2BCJ0hy%2B3xYeoJZsdGPJ45mv2diV2TLInctkdT%2FzfPXGN%2FwoME3sKbxRx6VQdbVhQtqqjiPz%2Fus5jqsh%2Fk9gGPLBOo0%2FFIFYe3lX2jqkyNB6bopbm5TUUz6IKLXMTTN5hkxeNSMfyBeCB6igL2n%2FZXckyNZIcwS%2Beth75RqUkcl4HPw1t%2Fy9uVXYRRR%2B%2B9wgnk4UKp3levEnC9dEEDyzsvWtYN11dLTQKqtQid5wLmigDOi3na4TaWR%2BmhUuEHjB%2BZcDzDz9IzOBjqkASDqEvD8NS51SnvQfHec9Vje7A9%2BLiCqU%2FvwoB3%2BXQb598R7QlmyOuvrEMikO8Qx0b2LypGuWixgn7H1ZVUZI%2FMYToPGo0%2B10azeZrsKkVAPGHY92%2FzUggDs2tZb%2Bah1%2BPJpYPo733O8jWKrNQN2xkXrJrHUPcr97H1S7bWkZUJ1QbN7R1plJtkhRM1a%2BBWUs5Qfl8bBnUE15Wye%2FQxdzJEifUxf&X-Amz-Signature=cdd9372ed103f3a17abd32a9217c783ffc07085cbf3db05ef129e51a4dab4abf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
