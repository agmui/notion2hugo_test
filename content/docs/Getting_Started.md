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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U32YKY7S%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T024313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDXI3FbrHqijHZVMqhhqn0Kd%2Bam2rhqwl2rs6Q3dDgNiQIgLwQBfTrQPm60Fb8Sd6HV1qG8w0z2ZF5MMEf8Tfg53UEq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDAcaqoMYPIMYidQHAircA7HXIkfydVusyBEl1DfyFhJ6r8ZoDzrjW1EcEd0qHvEwj%2FvTQJcz%2FK7aUB%2FzCi20AsTmXsTa%2FqRj75ScI2IlYPHxZHIWB371gCwdcoeYiGc9sfA%2B06ecPyI7bYWExb1PzqIz1JeocC%2BVJeb8GhVSHekfDqz8CqvSesX%2FaFU%2BNMeRWoP%2F8f9AY6OvfjTk3AS8h1Zng8ttFx2fzX%2Bu5z5i995%2FdQQOdzwU2meYSJOyhPnSwWwFRBk3ZAq6bJv%2Fpblz8%2BdplRSO%2BY7T%2FlzWSxWPJqxSUzzij3Nb2%2BSWub0fg5gHpsB3lmqO6d4DAQYTeXniwPJcYEPRfNOoYFouHX2wY8UtMgdEEeyOREcaqhsx9WG5BKomEUXh1CGgEAIM3ewMNk8qWoYboEWe597bOU7s6ERplkG9vcdsWdlP4C0fCsN5o%2Bsc1Zo%2Fgl9TXGefOkAggcBPf29eiZmK8HXTN0B7toezMpPB%2FbcdvV1iuFTQ%2F6lLaCprmgqmaDngTSQew5PpRTkV%2FQqMCABBs888W4HsIALewyLoZ7sPGxsy76ILmloALMkB4OnTr6KtmL%2B%2Fe8M5ovIWSkBcpOKelUlHNFuBXFzDfstUeJqjoXHCGjQhxNtYsJmhFECldwLlVIZeMOzsycEGOqUB%2FQyTVf%2BA80yuYHFS9lsN%2FpVFvvwi3zLf4K1yc01rIMDkqkZnyfeyQV8j1zG5XsaBC7MfPAldYaCKj0vrZZ1DuW9u61AnYZvQ8dDBTJjehN9ByAVfHPF2kQ7GcGuZfOt6eZNinsf6QSODjaUoqXSNBd19JuHqHef6cA9B5M2pKKQdzHh1jPHsrVDRUp%2Fcjhg9i1853SF4ZWLnRV3UmOsxlXFugL0L&X-Amz-Signature=dd16cc185dc4f36662baa8aa78385fc29c7163d58ed7329525d059f0cd442a4a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U32YKY7S%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T024313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDXI3FbrHqijHZVMqhhqn0Kd%2Bam2rhqwl2rs6Q3dDgNiQIgLwQBfTrQPm60Fb8Sd6HV1qG8w0z2ZF5MMEf8Tfg53UEq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDAcaqoMYPIMYidQHAircA7HXIkfydVusyBEl1DfyFhJ6r8ZoDzrjW1EcEd0qHvEwj%2FvTQJcz%2FK7aUB%2FzCi20AsTmXsTa%2FqRj75ScI2IlYPHxZHIWB371gCwdcoeYiGc9sfA%2B06ecPyI7bYWExb1PzqIz1JeocC%2BVJeb8GhVSHekfDqz8CqvSesX%2FaFU%2BNMeRWoP%2F8f9AY6OvfjTk3AS8h1Zng8ttFx2fzX%2Bu5z5i995%2FdQQOdzwU2meYSJOyhPnSwWwFRBk3ZAq6bJv%2Fpblz8%2BdplRSO%2BY7T%2FlzWSxWPJqxSUzzij3Nb2%2BSWub0fg5gHpsB3lmqO6d4DAQYTeXniwPJcYEPRfNOoYFouHX2wY8UtMgdEEeyOREcaqhsx9WG5BKomEUXh1CGgEAIM3ewMNk8qWoYboEWe597bOU7s6ERplkG9vcdsWdlP4C0fCsN5o%2Bsc1Zo%2Fgl9TXGefOkAggcBPf29eiZmK8HXTN0B7toezMpPB%2FbcdvV1iuFTQ%2F6lLaCprmgqmaDngTSQew5PpRTkV%2FQqMCABBs888W4HsIALewyLoZ7sPGxsy76ILmloALMkB4OnTr6KtmL%2B%2Fe8M5ovIWSkBcpOKelUlHNFuBXFzDfstUeJqjoXHCGjQhxNtYsJmhFECldwLlVIZeMOzsycEGOqUB%2FQyTVf%2BA80yuYHFS9lsN%2FpVFvvwi3zLf4K1yc01rIMDkqkZnyfeyQV8j1zG5XsaBC7MfPAldYaCKj0vrZZ1DuW9u61AnYZvQ8dDBTJjehN9ByAVfHPF2kQ7GcGuZfOt6eZNinsf6QSODjaUoqXSNBd19JuHqHef6cA9B5M2pKKQdzHh1jPHsrVDRUp%2Fcjhg9i1853SF4ZWLnRV3UmOsxlXFugL0L&X-Amz-Signature=06a2f254ac0347e337b862c000d1f23a104c17e0d214ddd89aae586b5b6c1c9e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U32YKY7S%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T024313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDXI3FbrHqijHZVMqhhqn0Kd%2Bam2rhqwl2rs6Q3dDgNiQIgLwQBfTrQPm60Fb8Sd6HV1qG8w0z2ZF5MMEf8Tfg53UEq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDAcaqoMYPIMYidQHAircA7HXIkfydVusyBEl1DfyFhJ6r8ZoDzrjW1EcEd0qHvEwj%2FvTQJcz%2FK7aUB%2FzCi20AsTmXsTa%2FqRj75ScI2IlYPHxZHIWB371gCwdcoeYiGc9sfA%2B06ecPyI7bYWExb1PzqIz1JeocC%2BVJeb8GhVSHekfDqz8CqvSesX%2FaFU%2BNMeRWoP%2F8f9AY6OvfjTk3AS8h1Zng8ttFx2fzX%2Bu5z5i995%2FdQQOdzwU2meYSJOyhPnSwWwFRBk3ZAq6bJv%2Fpblz8%2BdplRSO%2BY7T%2FlzWSxWPJqxSUzzij3Nb2%2BSWub0fg5gHpsB3lmqO6d4DAQYTeXniwPJcYEPRfNOoYFouHX2wY8UtMgdEEeyOREcaqhsx9WG5BKomEUXh1CGgEAIM3ewMNk8qWoYboEWe597bOU7s6ERplkG9vcdsWdlP4C0fCsN5o%2Bsc1Zo%2Fgl9TXGefOkAggcBPf29eiZmK8HXTN0B7toezMpPB%2FbcdvV1iuFTQ%2F6lLaCprmgqmaDngTSQew5PpRTkV%2FQqMCABBs888W4HsIALewyLoZ7sPGxsy76ILmloALMkB4OnTr6KtmL%2B%2Fe8M5ovIWSkBcpOKelUlHNFuBXFzDfstUeJqjoXHCGjQhxNtYsJmhFECldwLlVIZeMOzsycEGOqUB%2FQyTVf%2BA80yuYHFS9lsN%2FpVFvvwi3zLf4K1yc01rIMDkqkZnyfeyQV8j1zG5XsaBC7MfPAldYaCKj0vrZZ1DuW9u61AnYZvQ8dDBTJjehN9ByAVfHPF2kQ7GcGuZfOt6eZNinsf6QSODjaUoqXSNBd19JuHqHef6cA9B5M2pKKQdzHh1jPHsrVDRUp%2Fcjhg9i1853SF4ZWLnRV3UmOsxlXFugL0L&X-Amz-Signature=b477de349fbd816d6740a630ad304b36498e20f04d15678035b02d553a2c8be3&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634AESUW2%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T024320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCfE11QkcbUL97TgW5dtDuBSGgGddSQRxJTkq6cMJpQ1wIgXWo7lmdmKHfeEGvJ2M4w9GDCSNghmQVsUUhLPAQWj5cq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDHmXOu7FLhGx%2FTGrwyrcA2Fowwuh2JHC5hht951AjVYSXZ0emgUu9zGiLg0bCCLooRAX%2Fm69bf4qJTUgjChtb%2BTIzNy9PqmxsT8LalAHbfDwhxEsuhbooFX10fxPuYz6b3X0ZdYPOy2QlwL0%2BZwjav%2BE7ArJJOpgJoLUA2mM0K%2Br0s%2FPYzqlbnmabkteihV1iJCoLWQHU5cueN8B7aaTgZYkjlqbCvStWub6EB9ltqSPJowD4uRPHKskAYZ9CWBE0UCVt5D9ZuRkIL7nFk3SmlD7jFLHLd91junxyFNmJZaLataPG%2FVxqi%2FPy7Up7nV46bFFq9I4%2B0p0eCYg0tdBnbiGcUr6AWkLXVolj7jYpfYyMBHc0MHzzWqu0VTaU44luclagLKhQpVYzFsem887fzz5JXy34hbAAKEHSJU34Jqeme12QBUIYKfhtULeKw3QC9rBLlhQk2aR7Ibm2HxJQFw7N6itZdrrLgG8SSLRueb8yGrv1yNn7Fb%2BtO1Y5XRa0gRJEMjNPRgbpteRrMmp1mUSej%2BGu7ASvC3549OmHKKbGaoqKUXoSWM8H02BwCTeAQpMMjyB9Vx3ICw4rwPlqTRLpwEj%2F2WlJjXp6IPjvS0DJmr8HyGrcdAwM6RqM3w4fT0IDHjZhDEglJhTMJrsycEGOqUBMi5b470YaZ%2F%2FpnTmZn4YDnTteyd0lSRS7FIrqK7SiqY0BJ2NE6iX8URAFCjH8FNt29xokjmT3kNnQjQgaRZm5P4jvEXRZySVzcLvKt3SCzE00kS0EZIiT%2Bsu8RVYojr%2FRMn8AkQfBdHBape12sS%2BFA1fFyy2fC1HQyYE5njOWWqctCIvka0VlAHtNk5yW4O3E%2BIYRStHFATFCLXr5rogXQLnX6VO&X-Amz-Signature=f7a64e3809f5b42001a4850a0812e41e5917c77edf2e949234afaf4602aff993&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VNECG3R%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T024322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIGH0ETLr8gohnf0qvTnYtX%2FX1BhOZ0apNB7XvdCf93KSAiB8od2lZMnS3owfusm9no06C7J0A%2BgOid7s5X%2FpBW0GUyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMJolKJKc9OwT%2Fz3QeKtwD3UoT7p0x7XwYG181OA99OE%2BTEgXKNWxTrLAtjTS1WP6YIZ8BzTs1IgybGtiL0OyuVTg5m%2BvNjMfaJKyZ%2BTWr4VudvF1l4Ee38NoPLW3%2ByJVZDlndwPw8QaqJupuRzU8A2F0yDB2wSOKdlPkFI6q1zkXiO1r7mEyH73dtTWXztfyVvmXpTdLLslxP473S2ocMlPCK3d%2FNRJtc%2BwXRGqmkX6J2zOPNXKNsPzd3n%2BipCBn9P17ZQ0jwJoL2g0k0a7m92rs4ojhSPAo42NxJNz6%2BfGDhseuMAw%2FMHCKhnNisvccaO6RsZScFNNr2E%2B%2BgfIlrGcU%2F8%2FQvNaDmKNCcJbLvISn1MUhHc%2FIOuP%2BId7juVFRuJnQjT53klEe9FcpWpemASMXVIU3LzV0xBSvulzkmJqJuf9%2FRJakosyhZbj1ELaJnA%2FSlJh0AJlL5mwySof4RqySktGzP6Ed9tMjDr4O9CSSG9cDcTWmYnp0XdZE4Oe2udF%2BygJ0KrN5gmk1gPz00dsuISmi5xcYHUbsWCkqLAB4YNBqW38vJn2qjouAGMBnF5e4hb%2FavlYoKHnrE%2Bz%2FvuhV1kDBMb7nl6DB4F%2F3fnhzCJMi8Ij9Y23mOqC%2BhD0%2BV2urk58xGm0dU3qYw7ezJwQY6pgFrzLyz0mL6oa2qUApCtr8Y4xxqfE%2B5D74dTHFA3jUIuXINTkyaP1k1ORtnmX7kTcIELvgJtCEo7eVhE%2FJkcyVvdiy4hGcs2gIkrpmLqVKtlmKvu%2Fll8NhBAJw74NjphM0%2BuebcFND83eAsVjM2o9qTtf1IkfV%2BtKtjZv5vUux7L6d22HNr3SycXHQ0%2Bj71VWt4JN0FqesrWJCwMibn9fV%2Fy4UoxLSS&X-Amz-Signature=1b7ae399200276046c8c6e1920a79bd0232b7f62d33dce9189230e55418b3110&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U32YKY7S%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T024313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDXI3FbrHqijHZVMqhhqn0Kd%2Bam2rhqwl2rs6Q3dDgNiQIgLwQBfTrQPm60Fb8Sd6HV1qG8w0z2ZF5MMEf8Tfg53UEq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDAcaqoMYPIMYidQHAircA7HXIkfydVusyBEl1DfyFhJ6r8ZoDzrjW1EcEd0qHvEwj%2FvTQJcz%2FK7aUB%2FzCi20AsTmXsTa%2FqRj75ScI2IlYPHxZHIWB371gCwdcoeYiGc9sfA%2B06ecPyI7bYWExb1PzqIz1JeocC%2BVJeb8GhVSHekfDqz8CqvSesX%2FaFU%2BNMeRWoP%2F8f9AY6OvfjTk3AS8h1Zng8ttFx2fzX%2Bu5z5i995%2FdQQOdzwU2meYSJOyhPnSwWwFRBk3ZAq6bJv%2Fpblz8%2BdplRSO%2BY7T%2FlzWSxWPJqxSUzzij3Nb2%2BSWub0fg5gHpsB3lmqO6d4DAQYTeXniwPJcYEPRfNOoYFouHX2wY8UtMgdEEeyOREcaqhsx9WG5BKomEUXh1CGgEAIM3ewMNk8qWoYboEWe597bOU7s6ERplkG9vcdsWdlP4C0fCsN5o%2Bsc1Zo%2Fgl9TXGefOkAggcBPf29eiZmK8HXTN0B7toezMpPB%2FbcdvV1iuFTQ%2F6lLaCprmgqmaDngTSQew5PpRTkV%2FQqMCABBs888W4HsIALewyLoZ7sPGxsy76ILmloALMkB4OnTr6KtmL%2B%2Fe8M5ovIWSkBcpOKelUlHNFuBXFzDfstUeJqjoXHCGjQhxNtYsJmhFECldwLlVIZeMOzsycEGOqUB%2FQyTVf%2BA80yuYHFS9lsN%2FpVFvvwi3zLf4K1yc01rIMDkqkZnyfeyQV8j1zG5XsaBC7MfPAldYaCKj0vrZZ1DuW9u61AnYZvQ8dDBTJjehN9ByAVfHPF2kQ7GcGuZfOt6eZNinsf6QSODjaUoqXSNBd19JuHqHef6cA9B5M2pKKQdzHh1jPHsrVDRUp%2Fcjhg9i1853SF4ZWLnRV3UmOsxlXFugL0L&X-Amz-Signature=70c9f6bd0edc0277098a1ee3eac777a55485e30fe737693927eb16c088320367&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
