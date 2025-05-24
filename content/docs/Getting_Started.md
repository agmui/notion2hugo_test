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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC25KDZ4%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIGWGBu0Wg0RpfYbsgupnGSunBZKY9b3CEk4qqavJ7TKxAiEAwqosRXtf%2FiwPNjCS24C1bF2d8OhzLggvC7IOAQyRbUMqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjkNUJtes8dGIpJ8SrcA6nMv1AR842fPP4%2Bo9iSyzy5hv02hyK0%2B6Lw4suv7G68i0DsTVu9RdZZt%2FNf4p81g%2BvbcrrMp2O3qO9DdJriS6zx1yxy0yjZ6tP3TrTUnL3W05aJ3HEGHLs47dVhuSiV%2FFo95oZxJXu2IE67qeJjvlRVoOSMGHGyuN70fQvsAWuTBel2svzA%2FZU8e9apjOewH%2BfsW5nQ7tYewwg9UMIer%2FwUQjo%2FsP5Zww8YmYkMaxvs26pU%2Fn2sDDs40Sv1muGUxFIlKq1K0uG%2FycP0dYuJ6HHYMXVdFekr2HBxQt9ANY0WXAKAlb5DStIr4HyAsj%2B2JZsa4Dbm5KWTaKBK5ekKtywmrOEDVtk%2FjRDffmZdNqtSSL1K6ywHkBxUOfO5GKy%2BRRVk7qI08SuhQ%2Bvp%2FyMwMy6Djs9wbJO7Y06K7gOa5w%2F8lImoyqrQA5fjKAyD11MlnolyFOfQuYximht2DpQ43snnCYdUfVAKSIxBYBwgci7grUptoujXmJCFE0PcSeh4IOmxVQUQoBsKtBK2ZR16Oz5ERfxhvGbz9luhz4mr%2F60Crw9h83Xco1Ki798Pt7yKCLrEubG3IFz3etHSMwywadRT%2B%2BgBvH7%2BSQPiYivl8buw9ow%2FfQdhU7hkMwQAMOurxcEGOqUBomgwqESYdiFvYZ2sbBZ1V6n16z7%2B%2BN7vG56cKfnBxkMUpGHvrRfcanNanrk3KunBOHapPJUjesKPG5T6m1Uldnrn%2BWD%2F6WYsg3e%2FQnVIAAEIiQAUHiiUqHahemDXiiuw0CYNNcUrptIHFO2ytQQEwOtYLq976gOryIfJ50i2OBqXHh%2FOcpQGa6dHmPRn2a7B%2FtYHQl5KsZXdinNDPYtxykRQcPLf&X-Amz-Signature=9ddd34b723d93a3be008d37f2a92f32ed62f1614ad60f7a04bc71bc7aa4da3fb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC25KDZ4%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIGWGBu0Wg0RpfYbsgupnGSunBZKY9b3CEk4qqavJ7TKxAiEAwqosRXtf%2FiwPNjCS24C1bF2d8OhzLggvC7IOAQyRbUMqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjkNUJtes8dGIpJ8SrcA6nMv1AR842fPP4%2Bo9iSyzy5hv02hyK0%2B6Lw4suv7G68i0DsTVu9RdZZt%2FNf4p81g%2BvbcrrMp2O3qO9DdJriS6zx1yxy0yjZ6tP3TrTUnL3W05aJ3HEGHLs47dVhuSiV%2FFo95oZxJXu2IE67qeJjvlRVoOSMGHGyuN70fQvsAWuTBel2svzA%2FZU8e9apjOewH%2BfsW5nQ7tYewwg9UMIer%2FwUQjo%2FsP5Zww8YmYkMaxvs26pU%2Fn2sDDs40Sv1muGUxFIlKq1K0uG%2FycP0dYuJ6HHYMXVdFekr2HBxQt9ANY0WXAKAlb5DStIr4HyAsj%2B2JZsa4Dbm5KWTaKBK5ekKtywmrOEDVtk%2FjRDffmZdNqtSSL1K6ywHkBxUOfO5GKy%2BRRVk7qI08SuhQ%2Bvp%2FyMwMy6Djs9wbJO7Y06K7gOa5w%2F8lImoyqrQA5fjKAyD11MlnolyFOfQuYximht2DpQ43snnCYdUfVAKSIxBYBwgci7grUptoujXmJCFE0PcSeh4IOmxVQUQoBsKtBK2ZR16Oz5ERfxhvGbz9luhz4mr%2F60Crw9h83Xco1Ki798Pt7yKCLrEubG3IFz3etHSMwywadRT%2B%2BgBvH7%2BSQPiYivl8buw9ow%2FfQdhU7hkMwQAMOurxcEGOqUBomgwqESYdiFvYZ2sbBZ1V6n16z7%2B%2BN7vG56cKfnBxkMUpGHvrRfcanNanrk3KunBOHapPJUjesKPG5T6m1Uldnrn%2BWD%2F6WYsg3e%2FQnVIAAEIiQAUHiiUqHahemDXiiuw0CYNNcUrptIHFO2ytQQEwOtYLq976gOryIfJ50i2OBqXHh%2FOcpQGa6dHmPRn2a7B%2FtYHQl5KsZXdinNDPYtxykRQcPLf&X-Amz-Signature=516aaa4e6c078663a5e95440445127a0df84334c2eb026d4d9e1a5cd5a2a5710&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC25KDZ4%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIGWGBu0Wg0RpfYbsgupnGSunBZKY9b3CEk4qqavJ7TKxAiEAwqosRXtf%2FiwPNjCS24C1bF2d8OhzLggvC7IOAQyRbUMqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjkNUJtes8dGIpJ8SrcA6nMv1AR842fPP4%2Bo9iSyzy5hv02hyK0%2B6Lw4suv7G68i0DsTVu9RdZZt%2FNf4p81g%2BvbcrrMp2O3qO9DdJriS6zx1yxy0yjZ6tP3TrTUnL3W05aJ3HEGHLs47dVhuSiV%2FFo95oZxJXu2IE67qeJjvlRVoOSMGHGyuN70fQvsAWuTBel2svzA%2FZU8e9apjOewH%2BfsW5nQ7tYewwg9UMIer%2FwUQjo%2FsP5Zww8YmYkMaxvs26pU%2Fn2sDDs40Sv1muGUxFIlKq1K0uG%2FycP0dYuJ6HHYMXVdFekr2HBxQt9ANY0WXAKAlb5DStIr4HyAsj%2B2JZsa4Dbm5KWTaKBK5ekKtywmrOEDVtk%2FjRDffmZdNqtSSL1K6ywHkBxUOfO5GKy%2BRRVk7qI08SuhQ%2Bvp%2FyMwMy6Djs9wbJO7Y06K7gOa5w%2F8lImoyqrQA5fjKAyD11MlnolyFOfQuYximht2DpQ43snnCYdUfVAKSIxBYBwgci7grUptoujXmJCFE0PcSeh4IOmxVQUQoBsKtBK2ZR16Oz5ERfxhvGbz9luhz4mr%2F60Crw9h83Xco1Ki798Pt7yKCLrEubG3IFz3etHSMwywadRT%2B%2BgBvH7%2BSQPiYivl8buw9ow%2FfQdhU7hkMwQAMOurxcEGOqUBomgwqESYdiFvYZ2sbBZ1V6n16z7%2B%2BN7vG56cKfnBxkMUpGHvrRfcanNanrk3KunBOHapPJUjesKPG5T6m1Uldnrn%2BWD%2F6WYsg3e%2FQnVIAAEIiQAUHiiUqHahemDXiiuw0CYNNcUrptIHFO2ytQQEwOtYLq976gOryIfJ50i2OBqXHh%2FOcpQGa6dHmPRn2a7B%2FtYHQl5KsZXdinNDPYtxykRQcPLf&X-Amz-Signature=a9d3519ef3bee4cca211cb3b8e8dda31051312431a1a1abc179a0f960d7d6474&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCCCQXUT%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIGYIujvw3kvC%2BZIPVP%2FI5fhYsGzwrwIa8KfJ2Ay1lgEhAiBu8%2BWmOqMTQ7bHNy8tSe2YRUcH0rPGdKMhU%2FNtaPmfFiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGgBwB6a%2FBNmpduC4KtwDJcOep%2FWG8tOhoA3uygMXU1hD6wcMKQ9svXIyhXZORHxFyH3g9%2Bk7uFj0D0qKJRbF46xps5QK%2F6k6FdBGntiORpp6GSWcf%2BSP6Tn4cYlYZepkHhlC%2FXXOmPwTSihM2Bmv%2F9Vf%2FpwpUymlYdT%2FfoGplMseR4B5U%2FGPTcHWRHLfWszK9vrjwxZe8tHox1W8GTjLHSSdBRuybr9vEjJnfOWMucWkAtAtJjefHXXnouVBKOU1Oqso8r%2B1ar3hTyYGIQf3IEvsYV9MFPbwlNNnYMOwox5wa1jT115Vbn8OPHEZ%2Fhl42mVp5oWAdA%2BaSzjSncKVXABjX2iXGh1isj0uPz2WPJVz7vDauK%2BQvkGb%2F0lup%2BnBt6eLqoyzfna7ZYOmhrNCj7yqG6PMXim3JroWbMbP4b4%2Fp8%2F5oyAbjdUvQY6N3m%2BbELu%2B1MAJsVngtecTzH1JkFLc%2FGjW9%2BCw%2FXnYHdAkI6avVbLXPUbIHxk7%2BA3IzMfUPFVGVlnP6fUxA0t5nd%2Bl3jjk%2FK13tydvABlOt4lPG3Rrg7vwzUZms1s8JR6L36nKDVDQuuUxSOZLsc1Uq9PCmGfGLKEQZnV7wGtsTtlarUcyLLz3XmDO8F42sGOExpHPySlf0oU%2BsBAyMjgw7qvFwQY6pgG9LtKFGg7fhDOo4h9uxtozXtW6gJ1l3KRcv5dzWLsIsPljav3KUplpSEpj9DNn8RZj862DJ57LNJNK5FqzPP1h550fD%2BA1OUnEnTtjXIe58AAyLeBo7MBBx5XLWywiNO23yf4TIvZABUViThOfTdKHkdYUW7cET81tfSMII4EmqEBiEkPPCACup4OtYq9NiwhEEVX45%2Bcv7KpnBOHuCYVR%2BrazMKZ5&X-Amz-Signature=0fbe7a88ecaad8f2ab74ddd8ffbd4201448eeff347df54e29483e7a2e4318b88&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AZTPISM%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIGmJ%2FrQsvLhEX4iq1fhwTI6QEu8a3Cx1G8wNJyDZ%2FyHqAiAp5uwfbYmVwXi%2FS4KzW5%2BUSkg22KHXLUPxQaVNO0LaZiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9LzBTcrkBYiGKfk3KtwDIHGgb1%2FOpYCbr1%2FhHi1sAv5wyBQMbgdlFBgMRotul7YjFxHFxcM3z1fmCpZnQY4KdkbLYaqyTIzLlCTo7xxAMW46ZBt6xprkHpwJLV8f%2Beke%2FhPSzGMca7DijXj4qymPfkYmgylNTNqFYaMqeI4bhRdm6q%2FtlZuHthRKBSRgqTBujbem19yO%2BCwcSz6%2B2z1M9DS9n15tcGzn%2FYsQ2QVniP7OfHFHpxgklTFnWFlT529xtjam3tcVObotz2PNyzhVf9PdbzW13l8dNU1d%2FIbl0mtHJof1cW7%2FtBQ332f3EJB%2F%2BaaT7nsO4qB5AXGofJQ0LHXRHYEdXYWByYj0%2FL3ICiEca2d8KF0NabGoFPd91xZRJtPMnGPX%2FZSOCiswq458qU8h%2F1du4ocPCMvzV9H8FKQhG52wRKx2tcmda4sZA5xtBJZao17KXuYc0bDwZ1KUvy9qiEC0IqC2dp7bB8Q45WDEEKPe4JxQ%2BXl71fa8ugYhzkb5OUCBipZPtSodtu9IK2Va6xn0SuQY%2B4EDOxmgLQ%2Bu6NscdHHrj3NTCHCvZ9fQ8etM5rmIcOarQKQGTYaUBdknNcmVMn6P7A3ty0bB7mAZYgC7SD%2Fa5dQF73ZuA6tiH7X%2FgAGzQWlKqSAwqqvFwQY6pgFtrEM2223BlPSoUa0Q%2Bxd61mymp8api%2FYcoODkd%2FnZENC1hP0Z%2FUmSIWk4rrmGAMniZCsdRlTkP4kbTMfXQ3dkdajqTgl3JQwhnBeFTb6PXZdvsEuZEidAH%2FpeoPKAUaiAKn89LgcjXyTJKoZIor0KptVUDqvDy9tSDKosi6fucVjsrZt154zGBI4cf5Gdx4vVgARsJe0pkULflHSlaQmNmi5HZWv4&X-Amz-Signature=8bed36473a227bfd081a247569b45d58189fdd1e02dbc01ea3c41d8837af1efb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC25KDZ4%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIGWGBu0Wg0RpfYbsgupnGSunBZKY9b3CEk4qqavJ7TKxAiEAwqosRXtf%2FiwPNjCS24C1bF2d8OhzLggvC7IOAQyRbUMqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjkNUJtes8dGIpJ8SrcA6nMv1AR842fPP4%2Bo9iSyzy5hv02hyK0%2B6Lw4suv7G68i0DsTVu9RdZZt%2FNf4p81g%2BvbcrrMp2O3qO9DdJriS6zx1yxy0yjZ6tP3TrTUnL3W05aJ3HEGHLs47dVhuSiV%2FFo95oZxJXu2IE67qeJjvlRVoOSMGHGyuN70fQvsAWuTBel2svzA%2FZU8e9apjOewH%2BfsW5nQ7tYewwg9UMIer%2FwUQjo%2FsP5Zww8YmYkMaxvs26pU%2Fn2sDDs40Sv1muGUxFIlKq1K0uG%2FycP0dYuJ6HHYMXVdFekr2HBxQt9ANY0WXAKAlb5DStIr4HyAsj%2B2JZsa4Dbm5KWTaKBK5ekKtywmrOEDVtk%2FjRDffmZdNqtSSL1K6ywHkBxUOfO5GKy%2BRRVk7qI08SuhQ%2Bvp%2FyMwMy6Djs9wbJO7Y06K7gOa5w%2F8lImoyqrQA5fjKAyD11MlnolyFOfQuYximht2DpQ43snnCYdUfVAKSIxBYBwgci7grUptoujXmJCFE0PcSeh4IOmxVQUQoBsKtBK2ZR16Oz5ERfxhvGbz9luhz4mr%2F60Crw9h83Xco1Ki798Pt7yKCLrEubG3IFz3etHSMwywadRT%2B%2BgBvH7%2BSQPiYivl8buw9ow%2FfQdhU7hkMwQAMOurxcEGOqUBomgwqESYdiFvYZ2sbBZ1V6n16z7%2B%2BN7vG56cKfnBxkMUpGHvrRfcanNanrk3KunBOHapPJUjesKPG5T6m1Uldnrn%2BWD%2F6WYsg3e%2FQnVIAAEIiQAUHiiUqHahemDXiiuw0CYNNcUrptIHFO2ytQQEwOtYLq976gOryIfJ50i2OBqXHh%2FOcpQGa6dHmPRn2a7B%2FtYHQl5KsZXdinNDPYtxykRQcPLf&X-Amz-Signature=be3b1833976135d6a68eacadff7e6c0dbb0b05f91238dd9cbaaadde4a8ae0ea2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
