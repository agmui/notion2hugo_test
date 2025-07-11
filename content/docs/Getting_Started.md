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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647JYAUQE%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T081235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDp8Tqh5IoJYngg1fmNzL33mnq1M94rRtcW3pdO%2BiN4LwIgfbuSnzsP6lOMyviquIBDg60J3%2B6mTKsYYba8uSWBe4oqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMlzyTicwya8y2cXRircA%2FLFC3gvjDoDMLBYKCmcxs9u6faZOkbAh9qagKNxsHkKHKLLRZM1WWXB7VH8lsSXoE7S67dd%2FDI%2FMwRR0IZSudafhdbdDHvUWx8rDN3%2BsGl%2BaFvJGZuFOtDR0DSgevem31btLYO3X3OioRJp5zMp2usyk3GWCGN%2BFbOaxmh8SbEDqY%2FZinxjBgB4eQnVM4WYBgGvV6r%2BqDThY7Ixv7DO%2BN7DkNh2WqY%2BfRGA%2BxI%2FD775CDBfiEd2IBCc5Pso0sjbjZh4mU8bcwFrmrxwT9xWE8%2FljQ2ebY34bwHGqei3JbQ7x4NiHWQ9Uj1YarJMvJ6Fruw14cS%2Bk4YdxdcuAQ7LB4ZrW%2Bkd6LrsCMpiWR%2BI1alYAwFV1e2dzzwYY8ZKwxHgxnkGMak%2Fb2Bbjusu9KTtx87ZzTsQnZuQRzRmmf%2FcYKuI%2Bg9PuZzCIpyd%2FZvD2RmvvNqYtmu67xr7jS4Tp79tceuG273RA0Pdrq2p0U3zwru%2Bs54Ro7koXhwecmJ%2BSF43nDvh%2BN5m3XeCuagb5elNDGxhnfDksL1CsTJ7Li1n7lEjbKClp7YIsaQUACpYvPT%2FrE08FG0HVE3r6wQvNIf%2B5v3i1aD0DDnJdeM9KM0HzMTwl9G1IqQ6psKoz2yfMKf9wsMGOqUBbfYEvgmyMOnLReZbsIQLcJfP3nN%2F2Qk%2BMrl33PvKpyxtpqRmqoTAgVODSq24VNtU%2FyrQ%2B9T1ASg%2FXpei5CcO%2Fu2WO0PdGMjsNePq7za92YWxuiZs4Io0NezpoKZXIbV%2B39ezFCxHSDae1AX3I4NKAefZTYc9tFrWHC%2FgQkTLeGNX20JzGfurs5IxnxY8uE4ToGj9ZaQ2R2VP8GFlqrRBG8fIoGDF&X-Amz-Signature=4b2353bf3b60157d59f598ec80e7e40a44ca3b857f4562b89feba0e844f434d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647JYAUQE%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T081235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDp8Tqh5IoJYngg1fmNzL33mnq1M94rRtcW3pdO%2BiN4LwIgfbuSnzsP6lOMyviquIBDg60J3%2B6mTKsYYba8uSWBe4oqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMlzyTicwya8y2cXRircA%2FLFC3gvjDoDMLBYKCmcxs9u6faZOkbAh9qagKNxsHkKHKLLRZM1WWXB7VH8lsSXoE7S67dd%2FDI%2FMwRR0IZSudafhdbdDHvUWx8rDN3%2BsGl%2BaFvJGZuFOtDR0DSgevem31btLYO3X3OioRJp5zMp2usyk3GWCGN%2BFbOaxmh8SbEDqY%2FZinxjBgB4eQnVM4WYBgGvV6r%2BqDThY7Ixv7DO%2BN7DkNh2WqY%2BfRGA%2BxI%2FD775CDBfiEd2IBCc5Pso0sjbjZh4mU8bcwFrmrxwT9xWE8%2FljQ2ebY34bwHGqei3JbQ7x4NiHWQ9Uj1YarJMvJ6Fruw14cS%2Bk4YdxdcuAQ7LB4ZrW%2Bkd6LrsCMpiWR%2BI1alYAwFV1e2dzzwYY8ZKwxHgxnkGMak%2Fb2Bbjusu9KTtx87ZzTsQnZuQRzRmmf%2FcYKuI%2Bg9PuZzCIpyd%2FZvD2RmvvNqYtmu67xr7jS4Tp79tceuG273RA0Pdrq2p0U3zwru%2Bs54Ro7koXhwecmJ%2BSF43nDvh%2BN5m3XeCuagb5elNDGxhnfDksL1CsTJ7Li1n7lEjbKClp7YIsaQUACpYvPT%2FrE08FG0HVE3r6wQvNIf%2B5v3i1aD0DDnJdeM9KM0HzMTwl9G1IqQ6psKoz2yfMKf9wsMGOqUBbfYEvgmyMOnLReZbsIQLcJfP3nN%2F2Qk%2BMrl33PvKpyxtpqRmqoTAgVODSq24VNtU%2FyrQ%2B9T1ASg%2FXpei5CcO%2Fu2WO0PdGMjsNePq7za92YWxuiZs4Io0NezpoKZXIbV%2B39ezFCxHSDae1AX3I4NKAefZTYc9tFrWHC%2FgQkTLeGNX20JzGfurs5IxnxY8uE4ToGj9ZaQ2R2VP8GFlqrRBG8fIoGDF&X-Amz-Signature=47dcb17bcf5c01399ecf583b49f6a379ffaef6f5845e852c68f8bfb8ba18ed19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647JYAUQE%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T081235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDp8Tqh5IoJYngg1fmNzL33mnq1M94rRtcW3pdO%2BiN4LwIgfbuSnzsP6lOMyviquIBDg60J3%2B6mTKsYYba8uSWBe4oqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMlzyTicwya8y2cXRircA%2FLFC3gvjDoDMLBYKCmcxs9u6faZOkbAh9qagKNxsHkKHKLLRZM1WWXB7VH8lsSXoE7S67dd%2FDI%2FMwRR0IZSudafhdbdDHvUWx8rDN3%2BsGl%2BaFvJGZuFOtDR0DSgevem31btLYO3X3OioRJp5zMp2usyk3GWCGN%2BFbOaxmh8SbEDqY%2FZinxjBgB4eQnVM4WYBgGvV6r%2BqDThY7Ixv7DO%2BN7DkNh2WqY%2BfRGA%2BxI%2FD775CDBfiEd2IBCc5Pso0sjbjZh4mU8bcwFrmrxwT9xWE8%2FljQ2ebY34bwHGqei3JbQ7x4NiHWQ9Uj1YarJMvJ6Fruw14cS%2Bk4YdxdcuAQ7LB4ZrW%2Bkd6LrsCMpiWR%2BI1alYAwFV1e2dzzwYY8ZKwxHgxnkGMak%2Fb2Bbjusu9KTtx87ZzTsQnZuQRzRmmf%2FcYKuI%2Bg9PuZzCIpyd%2FZvD2RmvvNqYtmu67xr7jS4Tp79tceuG273RA0Pdrq2p0U3zwru%2Bs54Ro7koXhwecmJ%2BSF43nDvh%2BN5m3XeCuagb5elNDGxhnfDksL1CsTJ7Li1n7lEjbKClp7YIsaQUACpYvPT%2FrE08FG0HVE3r6wQvNIf%2B5v3i1aD0DDnJdeM9KM0HzMTwl9G1IqQ6psKoz2yfMKf9wsMGOqUBbfYEvgmyMOnLReZbsIQLcJfP3nN%2F2Qk%2BMrl33PvKpyxtpqRmqoTAgVODSq24VNtU%2FyrQ%2B9T1ASg%2FXpei5CcO%2Fu2WO0PdGMjsNePq7za92YWxuiZs4Io0NezpoKZXIbV%2B39ezFCxHSDae1AX3I4NKAefZTYc9tFrWHC%2FgQkTLeGNX20JzGfurs5IxnxY8uE4ToGj9ZaQ2R2VP8GFlqrRBG8fIoGDF&X-Amz-Signature=703dbc0e19e54f96c6fad77da7c1820cf345aef0e4f2bc50ab8a0fa09783218d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLGVCAL2%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T081238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICneZ08zq7UUnHUy6Hl1AoHO5qbEvLmmv45yFKG0WRqWAiAOvK2LuZJxR8dll2bGhItZt0YVURaC2pGSicCCsJMD9yqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FI3oBwF8GhsBayRaKtwD3nnjcY0WvZdMWhDYymkLe5dDtplBPvCFGQ%2BdIOxsgQOaTT6SHifHKbmI4nVo5iXvVDAV9d6gd8rLaUrTUQG90YubD3Ujqbgf25RlME1AiexJMMJwXMZnuk9EFAyMsiMXE4tPrVovlqVvF7NL26oz1zoBUsKR04ux%2BdBT6OhrqdB1QWq5abfw6IRAjl%2F5VVDl66rcU4CYGjtyS95eQ1W3YYGOTt%2F%2FHlvMtdp0MwMkSiYvQt0ceyUCOFjxC40ltDuZeMD4jCbaIMWneAwZpaI3XBzDzBuSNxoxKLVUzu1pWudfbpmAS9V1CsdXEZO%2FPPGcKOMgjLq%2Bpuhezkz%2BRadNMi2H62FfviuarVIteiEWs%2BuYR4bYJJ%2BkZT5jtw9MIlorbLGg1Yg579swqseaBaSTDEWZTgrg%2F4U3Cg17sV2ql%2BRopE5%2BCZ2PBhUemFeY5qfRoO6jbnRc8Ie9e8erqu%2FCrLJB5wy%2BPeYdHeJ0rd4kbApc48BOsWbIKf7hlWB%2FyRPsDcNMSunRqNfNjWFOS4voReL6Pf28PlX2Zb2nxYeI3%2Ft%2FnSJ6D7h3kjahP5Y9pcKneFCR1ktxJDliRQk3Bop5JkmtZo1bff%2FVyzdvERoqKVhQYI86ka61W8sljnQwx%2F3CwwY6pgEflkWjoMcYmzE14mrGDLvaWEN6Z%2BY0iUr16TkeBsAWa7aoNZX%2FQV24sFUHEnlo%2BRhYIJ2ykDfOroa3IirRJrtv9i77JulX8ZX28nQuU2136Moy1OADuGEavbgWR%2F1jCTlxBUd8xb4sYqKe7ek6yAO2AnEN0rahhSUstj%2Bl0jw%2F9yG5Mf%2FAB5cdaoMM4Zf0JcFIfh%2BDPauanY7u3y%2BBjTZKTsnYsw6T&X-Amz-Signature=a0175749ac826a925f3ad17e2db01b4dca26d825f2fb9ea195da37aa2358a4ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKZXYE4Q%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T081239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwXUNRqiPDcZ7v00DHrKkz%2BHfn2xnDQHFz5NVvWtncOAiB2JTsSqbjRCkq9oCguwZrERQkUx7VuXsu9RYGV88tYFSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz7QfVF4STdJRjjQ9KtwDIR5%2FKXcbdPul6rJegiyuBR3zxEnEKAMYQ5uBceu46DbYgQ3ocLAPA0YixdXUSGp3FApSTKvjmSGbgo1tUALcgJOyJWdLXJFPWSbyFsLq9e8LRR6mUL9uT86IFvW%2BQVgP21rLRIaeeksoPTZuUfyIiB8qNDqJC4WIGBol0gwYDuhct521V02JpuHLk4198dRYZUchsdlK%2BDqIlelYxytrK2Kar6CXOgUbL1i5G1cQzhTDdv9p%2BlE5LbXeGGiK1NLOcKwK5Zw%2BvOv3w5PBgu3bWYiq1BSwS1BqKl5OKg2W1Kv73qGVv%2FA3XpqJVQcQ%2BSOaFIjKAZVUZRPyFy7g5wzmCC1b67xAM0Jn4%2BCNXMrGm1Esyyq7AkkjighXkj0hDKAvhlYuEochtYoRAomRCD1nANIdm%2Bd6zfrXoquOil1PCwPeiCJSZ3f%2FWc%2Fwv%2F%2BVXEQa%2FZqsI1xyt4cnPHiiMwDVTqdHpIEAif63pRC40FWKITvvM%2Fx%2BBFb3R9W03ADDHmmkrGVXA0EadKorSk4hvDWTd3y3f%2FngLtbmTD26jkIyLJW8aK23URl8T11NYpZ7LtCtL9i3THnpLJ1DrrHB79b9lTxri3VP%2FcKWPyuytXSTiVx6a4dPvaxM%2FHojkAwwsP7CwwY6pgG210SpMAZCTQ8xhJAn9CYiwWIM9GsotXgfLZ4hRNEZQKpXId9zNNsxJ0ziHeSOPYdhHbt5uUdfYBJUHn5n98vY%2Bbuh9cA8sGnopY%2FhI%2FuVidwUkG%2FHHcmXjFxPZLhWTYR74lhCFEfK%2Bca65TTs%2FnB4tWmoVRBqquTQS%2BkNA6X7EdRLIWAwsrXTR1h4P%2F19evl%2Fv1OcVN9s5F4JuRpLA%2B99L0yADDvH&X-Amz-Signature=ec02acd26e050c790155ed084aacd2e9e8ee2bea7891431111a4c0f5a1e1058c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647JYAUQE%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T081235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDp8Tqh5IoJYngg1fmNzL33mnq1M94rRtcW3pdO%2BiN4LwIgfbuSnzsP6lOMyviquIBDg60J3%2B6mTKsYYba8uSWBe4oqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMlzyTicwya8y2cXRircA%2FLFC3gvjDoDMLBYKCmcxs9u6faZOkbAh9qagKNxsHkKHKLLRZM1WWXB7VH8lsSXoE7S67dd%2FDI%2FMwRR0IZSudafhdbdDHvUWx8rDN3%2BsGl%2BaFvJGZuFOtDR0DSgevem31btLYO3X3OioRJp5zMp2usyk3GWCGN%2BFbOaxmh8SbEDqY%2FZinxjBgB4eQnVM4WYBgGvV6r%2BqDThY7Ixv7DO%2BN7DkNh2WqY%2BfRGA%2BxI%2FD775CDBfiEd2IBCc5Pso0sjbjZh4mU8bcwFrmrxwT9xWE8%2FljQ2ebY34bwHGqei3JbQ7x4NiHWQ9Uj1YarJMvJ6Fruw14cS%2Bk4YdxdcuAQ7LB4ZrW%2Bkd6LrsCMpiWR%2BI1alYAwFV1e2dzzwYY8ZKwxHgxnkGMak%2Fb2Bbjusu9KTtx87ZzTsQnZuQRzRmmf%2FcYKuI%2Bg9PuZzCIpyd%2FZvD2RmvvNqYtmu67xr7jS4Tp79tceuG273RA0Pdrq2p0U3zwru%2Bs54Ro7koXhwecmJ%2BSF43nDvh%2BN5m3XeCuagb5elNDGxhnfDksL1CsTJ7Li1n7lEjbKClp7YIsaQUACpYvPT%2FrE08FG0HVE3r6wQvNIf%2B5v3i1aD0DDnJdeM9KM0HzMTwl9G1IqQ6psKoz2yfMKf9wsMGOqUBbfYEvgmyMOnLReZbsIQLcJfP3nN%2F2Qk%2BMrl33PvKpyxtpqRmqoTAgVODSq24VNtU%2FyrQ%2B9T1ASg%2FXpei5CcO%2Fu2WO0PdGMjsNePq7za92YWxuiZs4Io0NezpoKZXIbV%2B39ezFCxHSDae1AX3I4NKAefZTYc9tFrWHC%2FgQkTLeGNX20JzGfurs5IxnxY8uE4ToGj9ZaQ2R2VP8GFlqrRBG8fIoGDF&X-Amz-Signature=18eea36ff5a6ba389ccc7feae0197e93dad37fb4cb69047cdca7420a8213dfbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
