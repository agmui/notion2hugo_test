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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBUBYMY7%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T140943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIDwxPX3J5%2FMgkc2gUQzvl8Ii0n0PlVba9OLUi%2BuMcUEmAiBXUridGIoHVCTtF%2FG57J1xXY9V9IcSru6fGK29XAFpJyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMU5eY4cl%2Fbp%2FAuoJ%2FKtwDBESKxtmjdKR8gn9wiLdZWvJsHLpczWS8j3O0KJgAYpfm0bmbc4wAJtoYzZ%2F165Nkfu9jXFWpHYUQG%2BeO3NjnOv3n0TEVwDX1hbkaiM3yc6YKtYrWvx5aIDLtJOYp2Yp%2FSwvFlKEn%2B%2B8tTKosZZbD%2FBmjAg9wGXIyKiLHILmUTJDLl%2BAqFg1CEQATCuGXLTQhDZRtDdD5rqN0BzfkWFoShy3jRnnbFImrpMmpXvg%2B7f1zldk%2FtiiFlyYeW%2B7obgmvxG1ZiCmglFasBL6hjOCVGc%2Fw%2FAgl3sFPUKfbMYSYaslL6Eo4uBeRjRankK%2BpDZI3vbHXpE5EDK2tcfO1Y8yZgNqmEBYuYZ30RiJ1ppxXllYCnfpwkjUurGeiX227OD0b2%2Fya3CaHsoMdFGm%2Bs24XLE%2FjavxqR5ZQIapjYFbJfmZSczdfpofDaX9s9C5t%2FC4L7XR9UbI7FyRJeuXIRh9EQqXjY6c60as5ZlD%2FI%2FZjL4joGkoD80nS8JV3j1RNV4StamBoHdpu7hUg7KO3TYpx%2BgINx1oMWHwM1YAPW0MzBXymQ%2F7AA7%2B2tW2ccydr3mofymtL06fCTpudzpiClMl5%2Bi2asaxFFT5OXdovafkMysFTXoZ1E1xy2%2BdbkXcwzZPewwY6pgF4U1eEWztUCTgFbuHx72xWMSkxB6vcNq6hEkdDJTk4bQMjiJsW4GJaIPC2kRNdH4cHzi1QmoXl8TFdoJSgPGgGjamU%2B76ASqhoMBt0CdxUaRsDrjp5ipnYO9%2BsFm2qeGTiW2Q9uJiNiLPtYhTGcThZ4mQh5SIEvStfU2c4o7bRKKHGiY%2BkaJXCfxeGPXoHnLrGyi6vgNvU%2FL4PSyiqtOZCg4rGoAW%2B&X-Amz-Signature=bd6900b279876b4699f0ecd94cb64544968f36ca32492d20b70eeaca99867e6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBUBYMY7%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T140943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIDwxPX3J5%2FMgkc2gUQzvl8Ii0n0PlVba9OLUi%2BuMcUEmAiBXUridGIoHVCTtF%2FG57J1xXY9V9IcSru6fGK29XAFpJyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMU5eY4cl%2Fbp%2FAuoJ%2FKtwDBESKxtmjdKR8gn9wiLdZWvJsHLpczWS8j3O0KJgAYpfm0bmbc4wAJtoYzZ%2F165Nkfu9jXFWpHYUQG%2BeO3NjnOv3n0TEVwDX1hbkaiM3yc6YKtYrWvx5aIDLtJOYp2Yp%2FSwvFlKEn%2B%2B8tTKosZZbD%2FBmjAg9wGXIyKiLHILmUTJDLl%2BAqFg1CEQATCuGXLTQhDZRtDdD5rqN0BzfkWFoShy3jRnnbFImrpMmpXvg%2B7f1zldk%2FtiiFlyYeW%2B7obgmvxG1ZiCmglFasBL6hjOCVGc%2Fw%2FAgl3sFPUKfbMYSYaslL6Eo4uBeRjRankK%2BpDZI3vbHXpE5EDK2tcfO1Y8yZgNqmEBYuYZ30RiJ1ppxXllYCnfpwkjUurGeiX227OD0b2%2Fya3CaHsoMdFGm%2Bs24XLE%2FjavxqR5ZQIapjYFbJfmZSczdfpofDaX9s9C5t%2FC4L7XR9UbI7FyRJeuXIRh9EQqXjY6c60as5ZlD%2FI%2FZjL4joGkoD80nS8JV3j1RNV4StamBoHdpu7hUg7KO3TYpx%2BgINx1oMWHwM1YAPW0MzBXymQ%2F7AA7%2B2tW2ccydr3mofymtL06fCTpudzpiClMl5%2Bi2asaxFFT5OXdovafkMysFTXoZ1E1xy2%2BdbkXcwzZPewwY6pgF4U1eEWztUCTgFbuHx72xWMSkxB6vcNq6hEkdDJTk4bQMjiJsW4GJaIPC2kRNdH4cHzi1QmoXl8TFdoJSgPGgGjamU%2B76ASqhoMBt0CdxUaRsDrjp5ipnYO9%2BsFm2qeGTiW2Q9uJiNiLPtYhTGcThZ4mQh5SIEvStfU2c4o7bRKKHGiY%2BkaJXCfxeGPXoHnLrGyi6vgNvU%2FL4PSyiqtOZCg4rGoAW%2B&X-Amz-Signature=6bdd92622618bcd4933d6ce8f7f2626a978077980e34f3c9049a2a9feb66f315&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBUBYMY7%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T140943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIDwxPX3J5%2FMgkc2gUQzvl8Ii0n0PlVba9OLUi%2BuMcUEmAiBXUridGIoHVCTtF%2FG57J1xXY9V9IcSru6fGK29XAFpJyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMU5eY4cl%2Fbp%2FAuoJ%2FKtwDBESKxtmjdKR8gn9wiLdZWvJsHLpczWS8j3O0KJgAYpfm0bmbc4wAJtoYzZ%2F165Nkfu9jXFWpHYUQG%2BeO3NjnOv3n0TEVwDX1hbkaiM3yc6YKtYrWvx5aIDLtJOYp2Yp%2FSwvFlKEn%2B%2B8tTKosZZbD%2FBmjAg9wGXIyKiLHILmUTJDLl%2BAqFg1CEQATCuGXLTQhDZRtDdD5rqN0BzfkWFoShy3jRnnbFImrpMmpXvg%2B7f1zldk%2FtiiFlyYeW%2B7obgmvxG1ZiCmglFasBL6hjOCVGc%2Fw%2FAgl3sFPUKfbMYSYaslL6Eo4uBeRjRankK%2BpDZI3vbHXpE5EDK2tcfO1Y8yZgNqmEBYuYZ30RiJ1ppxXllYCnfpwkjUurGeiX227OD0b2%2Fya3CaHsoMdFGm%2Bs24XLE%2FjavxqR5ZQIapjYFbJfmZSczdfpofDaX9s9C5t%2FC4L7XR9UbI7FyRJeuXIRh9EQqXjY6c60as5ZlD%2FI%2FZjL4joGkoD80nS8JV3j1RNV4StamBoHdpu7hUg7KO3TYpx%2BgINx1oMWHwM1YAPW0MzBXymQ%2F7AA7%2B2tW2ccydr3mofymtL06fCTpudzpiClMl5%2Bi2asaxFFT5OXdovafkMysFTXoZ1E1xy2%2BdbkXcwzZPewwY6pgF4U1eEWztUCTgFbuHx72xWMSkxB6vcNq6hEkdDJTk4bQMjiJsW4GJaIPC2kRNdH4cHzi1QmoXl8TFdoJSgPGgGjamU%2B76ASqhoMBt0CdxUaRsDrjp5ipnYO9%2BsFm2qeGTiW2Q9uJiNiLPtYhTGcThZ4mQh5SIEvStfU2c4o7bRKKHGiY%2BkaJXCfxeGPXoHnLrGyi6vgNvU%2FL4PSyiqtOZCg4rGoAW%2B&X-Amz-Signature=d781f40dc0182e668ca39a85efd30fac77aad8ec5320d7abceae19908c6a3d6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJLGQM4R%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T140949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDXILKROR0qXffRDd9YtemlQVJrjkXq1jq0rE0H9hvFgQIhAN0bt8G9QMvZzz%2Fa5NTnWr1uuJC6lC2Ms7u05QTmTyo6Kv8DCFwQABoMNjM3NDIzMTgzODA1IgzHb6ft8ZuuOaz9PN4q3AMqOTO2cuyaQJ%2FMePqbKh2FgkjHwvtTckq3yoIfq7EIthLaXwGT4%2BMzUCWR8vZB74THSSyycFN7xQzwvznEw1mhdz0F%2BsxvXBXixn%2FRt8KN%2FUOJ6jeFjfHQBPuIwIwJP25T5MQF5HG3JhPGLYczEBmGmO88iDewrQOwbMJUljBk0ro2KSxCCOi2tduHPyftSuEZhiIAj10gvc0BdflerXnDVZu7%2BdKtOtbZMQfjZbP18YEtmBub9Ws4K9z7QdavKIdjNQTJAkhA7sR3fCtx%2BGgdB989HHn9BQnksZ%2ByMVxgUW%2B%2Becd%2FVSksH0Jd8wJc%2B0oluDWjL56llfK3VQY34gJHNHjizbKPpDK0P0%2BXKAO6ShO1GGkFUd4qFhrokDbaqx9G4F90rIwnCAa6cb9smTaFyasWwi02sWJuuEN62icr2baNGkh2sUlggHCiqR9sGlJ8XaFVdEeUyUJmdc4Vtk9X8ew%2Bjpqnrxil0vegMrOvsj%2FgGqo8DoRYwL1IKDOfdyJmvnum0Lk%2FeWkCUniNPpJ3osHQlvL9OAOPBfmMMsKwV9pQ954UbViojNdreONDmZSXPO7P%2BpSJgFZ49Tl0uNOLeAsSia%2BzvaqMWep58PPbM5QDYP%2FzeJiQcB65yTDCk97DBjqkATP15zyJr%2FREJCGlcb673FopYHpGQN6V1r2HPYex1qKBNRxV1UROpAaOn4DSeZzQzuzs9dQMXaahkr564NFOdbXkUQOd9Lm0cdjRru%2FdwN2l9rW8gQykkdJif8GApUDvdEFukQunAmDR6v%2FTC5lJiheFOkNYaMuGTkHHMnh%2BN5hboTxFGdiy2Mbe0lai%2BHAuWKKiy%2FEHyxwY8IK1fEwkbG8R0bun&X-Amz-Signature=91eeb3be8655d7b33d49d16dae3a04b93a92d082e0b67cfda93818cce3116fe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRARLPIT%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T140949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCty%2FVNBhLWnccyADp4RGYtNtPfS9ZE7vfTvAxmIchF9wIgCb0Iw%2FjzvOwBl%2FKgFmxGDmGnc1%2F5Eyg5HPpQPmGmZ0Qq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDGX1bGkfdkSxbkfIxCrcA2Pu%2FBU5zUKNvjVDEAMLsjR6Vi%2F%2Bf5uhkk%2BO5vk7OzWGSFb0Pf%2F9yyWADFn1B9ne%2B%2F4nahhP2JPJk1W6z4aedGuZful5DoUaEwKV0eJ3DGH%2BdDXkUTAtjv7TDIWwWsBB2EQQpwmzjnaVoIzFJfGHNedggN74XP5r%2B8HrCmX%2F7oYmUQKE3lkkVTNWpa2C4jJ6znNtIhCjX1glH5p9kEltlKrZqKUpVMYeCsa8TMKRuCnHqIm7xkIAbJ19OOwGGRjndxxFNLLbnMsX%2FFIGFa95AdtAgwWme58mt%2B%2F%2FM3LAtnjIvaxYtKSWHOV85c17UsYBotSuy9KjCNhHOCa4QOMqUCw9xQ0%2F9b9V9agcdYL64iBjLzKAgGP%2FBxuPP%2FAFAFhjEOcM3%2BgXqFn3FP1ZJaFv%2Fb4SW3oMBWnaaVKT7iB7TkoDIH9TXyXO7oKwV63p06OJP8r1AGJSIBUh0ylFZSAkC2xJc%2BS9xWlUxaf9hJgyF8%2BQGgvIssYz%2BembH4OyhWyBlt%2Fyqpmjj6wBULpWHcaNlDQXRCtmlj2kPhwpe6lfyo3lGIZdLHxMhlFkCVdLfE6P8m%2BNhfO5jAUY0r67dkJqsWlESzdeAzfILkjGZ5DmhUcGCL4yf0mFBfkspsJsMIqT3sMGOqUBc98jiWtckF0cL0hDRsUOqTbzCSI4bAc0J9wOz9dDX8B91m8oLCDZh5jbCbB63sbl2p6U%2BUzdlaiAcz0h6%2BZ9OG6E4Gv4txtIIYQCuqG1GJQ%2FDYBw%2FhVO5Bw8rjGpFdQ3aSmgsjRc7eOPzRIJsgAGY9DwFZ6izaCuogvZLFxcgERuC0riBeTpL4bdum8laL7RKOxx7NL21FbiBoMKWsHit9N6Vno%2F&X-Amz-Signature=1e5aece3da5f3c47d3ea2dd27a4ad211d7c05f94ac0ccd32203c1b70ec0cf551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBUBYMY7%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T140943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIDwxPX3J5%2FMgkc2gUQzvl8Ii0n0PlVba9OLUi%2BuMcUEmAiBXUridGIoHVCTtF%2FG57J1xXY9V9IcSru6fGK29XAFpJyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMU5eY4cl%2Fbp%2FAuoJ%2FKtwDBESKxtmjdKR8gn9wiLdZWvJsHLpczWS8j3O0KJgAYpfm0bmbc4wAJtoYzZ%2F165Nkfu9jXFWpHYUQG%2BeO3NjnOv3n0TEVwDX1hbkaiM3yc6YKtYrWvx5aIDLtJOYp2Yp%2FSwvFlKEn%2B%2B8tTKosZZbD%2FBmjAg9wGXIyKiLHILmUTJDLl%2BAqFg1CEQATCuGXLTQhDZRtDdD5rqN0BzfkWFoShy3jRnnbFImrpMmpXvg%2B7f1zldk%2FtiiFlyYeW%2B7obgmvxG1ZiCmglFasBL6hjOCVGc%2Fw%2FAgl3sFPUKfbMYSYaslL6Eo4uBeRjRankK%2BpDZI3vbHXpE5EDK2tcfO1Y8yZgNqmEBYuYZ30RiJ1ppxXllYCnfpwkjUurGeiX227OD0b2%2Fya3CaHsoMdFGm%2Bs24XLE%2FjavxqR5ZQIapjYFbJfmZSczdfpofDaX9s9C5t%2FC4L7XR9UbI7FyRJeuXIRh9EQqXjY6c60as5ZlD%2FI%2FZjL4joGkoD80nS8JV3j1RNV4StamBoHdpu7hUg7KO3TYpx%2BgINx1oMWHwM1YAPW0MzBXymQ%2F7AA7%2B2tW2ccydr3mofymtL06fCTpudzpiClMl5%2Bi2asaxFFT5OXdovafkMysFTXoZ1E1xy2%2BdbkXcwzZPewwY6pgF4U1eEWztUCTgFbuHx72xWMSkxB6vcNq6hEkdDJTk4bQMjiJsW4GJaIPC2kRNdH4cHzi1QmoXl8TFdoJSgPGgGjamU%2B76ASqhoMBt0CdxUaRsDrjp5ipnYO9%2BsFm2qeGTiW2Q9uJiNiLPtYhTGcThZ4mQh5SIEvStfU2c4o7bRKKHGiY%2BkaJXCfxeGPXoHnLrGyi6vgNvU%2FL4PSyiqtOZCg4rGoAW%2B&X-Amz-Signature=f17d7bb115980dfb959abc89ea1d6c2e53da3ea515ed0d727744bb40e22f7b25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
