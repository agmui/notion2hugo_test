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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U5LJ3ZE%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T060833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCICiac81YzlkyfKHDmJF%2B1TsSVm0mO58%2Fvw%2FuszeVE1e5AiBxdvs00inWjn5yKSZbX%2FMDKF6dIGJTu3fCia1noB3y4Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMBVWESc8lSyjYrb1pKtwD3MSnJZ9mBT9EvlYd7lTdoMicTDyuuR7IE5%2BgrMTnw5Zb%2BlJUHCGnLAbmY2N5L5pw7RZhJVf2OZJ0xv2czHx59Fd22%2BIu6uOVzjTcrEa%2Bg%2Fh6qyrPXyePd9feHK0%2FVfoTyA8glz5ngKWO64gb1jZwffseCczwoIQrlJMYlXIR1OUS6x8wgXf4XYVgUlmVkF0KJOyu6xpeV5AUPOLwzKxefguRkguVhZwxchT2%2BeK5177seNUIB8vEjRsmmBacesCbJBhm7rQdh7K3eOfzlEsuai%2FwgDaB%2B8w9IzoZ1l9M2tq245hLEsruEyMHtEw75AbIV9Zt4T310iUApstAoKJFbcViAlZem5zLj9pU7%2FB26OMctx8QJ8hOA5QYHQpw6yazhr0S3HnFRp82mf24OfB9qeoMZ8UNYSU1OzBxhHMN%2Fl95FGNo2Md2brxBPaCbOneZBooDuknEEZ7474Md4MjatvjMpxadxtW9fnHGywedGC5JoBXebyoqk4%2FKzzAs8fUgykK2qSTkrl8caPaH6yxz8jMRv50ZFkEq5h%2BA%2FomfGLBSTgP3UtFABZKxEO7nr4ujbPmx043bMISJhiLcpcQn6jCva7iznHRQunJJyaiXHobe01OkHafhBU%2F4SKUwtci0vgY6pgEVYwQJKtfYNoAZbMgvwqfNlrhOmhhLr5pd6lkKYhH%2BKSYlOVxOdY0ZHTHcKPtmu7UtnVdj15wAzbtQN1C%2FM3X1tyG9vUh9pLqDAQoz6ghBKnarwQGu4l97W0FklIYWh0zhXH3mDhzfA6I1Ak04vemJbi3pX6aeU1uTVp%2FjH6sYrEO9T4HYLQPFtnG7%2FH3%2FkCBadrdhfgFI1j3u9H4Jf%2BnGZwLxSozS&X-Amz-Signature=deb07591a4daec6b3fcda8b6d0f90163cf487ade3c15617ad30597f1f7bf7cbb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U5LJ3ZE%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T060833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCICiac81YzlkyfKHDmJF%2B1TsSVm0mO58%2Fvw%2FuszeVE1e5AiBxdvs00inWjn5yKSZbX%2FMDKF6dIGJTu3fCia1noB3y4Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMBVWESc8lSyjYrb1pKtwD3MSnJZ9mBT9EvlYd7lTdoMicTDyuuR7IE5%2BgrMTnw5Zb%2BlJUHCGnLAbmY2N5L5pw7RZhJVf2OZJ0xv2czHx59Fd22%2BIu6uOVzjTcrEa%2Bg%2Fh6qyrPXyePd9feHK0%2FVfoTyA8glz5ngKWO64gb1jZwffseCczwoIQrlJMYlXIR1OUS6x8wgXf4XYVgUlmVkF0KJOyu6xpeV5AUPOLwzKxefguRkguVhZwxchT2%2BeK5177seNUIB8vEjRsmmBacesCbJBhm7rQdh7K3eOfzlEsuai%2FwgDaB%2B8w9IzoZ1l9M2tq245hLEsruEyMHtEw75AbIV9Zt4T310iUApstAoKJFbcViAlZem5zLj9pU7%2FB26OMctx8QJ8hOA5QYHQpw6yazhr0S3HnFRp82mf24OfB9qeoMZ8UNYSU1OzBxhHMN%2Fl95FGNo2Md2brxBPaCbOneZBooDuknEEZ7474Md4MjatvjMpxadxtW9fnHGywedGC5JoBXebyoqk4%2FKzzAs8fUgykK2qSTkrl8caPaH6yxz8jMRv50ZFkEq5h%2BA%2FomfGLBSTgP3UtFABZKxEO7nr4ujbPmx043bMISJhiLcpcQn6jCva7iznHRQunJJyaiXHobe01OkHafhBU%2F4SKUwtci0vgY6pgEVYwQJKtfYNoAZbMgvwqfNlrhOmhhLr5pd6lkKYhH%2BKSYlOVxOdY0ZHTHcKPtmu7UtnVdj15wAzbtQN1C%2FM3X1tyG9vUh9pLqDAQoz6ghBKnarwQGu4l97W0FklIYWh0zhXH3mDhzfA6I1Ak04vemJbi3pX6aeU1uTVp%2FjH6sYrEO9T4HYLQPFtnG7%2FH3%2FkCBadrdhfgFI1j3u9H4Jf%2BnGZwLxSozS&X-Amz-Signature=f89b7fc180c2b56c294611b607277d96890e3dfd7a37defb3470942504ffa747&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNEIKUQK%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T060836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCgUpaUpHfr14M1evgCaU7GjOmUiYSuxCsaGj4TOzO5DgIgG3gyDjo1NjAUtooTBvpkvFc4m3HI131%2F%2FzN3aepoZQwq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDHzHF8qngNLjg0taPCrcAxTeQIh9RVzzVGO1RWiqysXYfvDlvwHA3vyaFyBKqEgnQZZxZeUdi6jEPZ8K8b7iQ4q4G%2B5LOu1yXV79CiN7MR6O%2FY3KuJwo4DNKGwUIJUxgD2QuEvfDDo4b5kgobNfyiVkhqtX2wyxv7pyfr3%2FFqnOeN%2BFqmDUYTYhrCUBvfhLCzlClIJTbHA0%2FZfh9CDI7RymPudFe6tOCRCB65C%2BAYvKcMxYFfTf%2FdyR4MRz6nbKKNCG%2Fi1VibYycS3xW9BlWVsXg6GgQrBsMwUaNM9zu%2BSw6loX26v%2BGFsI7kKxRHUd6X64v6xNqNe2FbiHEALDz2zS2%2F8leTcSWczbwPzyO17wDFZ%2FF20b9X%2B4AqixO7f8uT41oN6SqQ2xdNA93P9t7GmODQjKW21uvfimeWnpb1gc%2B4hG85s%2FxcnO5ZnfYwHSGKgHWp2gOizBFCTGLxKYbsdDPgaDlOdSWXP2%2F%2B6Bkz2Ts%2FDA5NEZNA%2BUUzsDo%2FVU6FUAs0lr542L7%2BTziit8PMI8M1%2FsZVPRIMvEp2btnMep317ANF9nXPaS6Rt5QYK%2FYrj5O41PsJYPzAm8E1Dw4za%2FPV3ZQUo2MkxcqLquZ1zSChg3f4QgZdTdb83aXJ0aLrSAMIHbpjRuNh37tMNfHtL4GOqUB%2BdmHaPlH4q8VxjgNbPg%2F7B1GeT7Z3UnJFE5jCXLx7OInK5gC1ojZvUiAjwmBb8MBNQ8WIh4bB%2FF0udbEUG8mOlyBdm74rAMs39V1KjbkqdyKKnod5b8XNOsTTOCB1WSq4SLNgV6saPyb291J4pUlIhCzcc7G0WKaBrxmvx5uwlvnFn250VhLKnG1UOqvH%2FDgrkJLRmC0uZJbi0aRrO%2FB2XA8ndzL&X-Amz-Signature=ca195bfa6cb65bd1eb96572dc8f986958af16ec962450f1924a5904e57f5e816&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2RAXIL3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T060836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCICgvk5fy8cyMc6pQazOL4jmpr6M1Kvn5gtDGnkY0%2BYrwAiEAhk0sZLgc%2BAPxEJTb9pffeO26Ab11D97OO4iOnYE2j7Iq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDK5ctyF1P54St9JDLyrcA8LFvZyrlagaJyILKiwnonARGd45%2BWKtOe5yu68ruajE5sUrPqeSvFSOuS8Yti2JFmT4kMh%2F1MKCayY9MDtN3jVni05BzNOhUslMDMzwYYTkyuvMq%2BAvw0usc8xmanf%2F8tFadrE0v3o0M%2BQkB2VQCtVUYGLzIcXQFoDYubh8cH7HnDwoFDaT1rq7AIkgPvpxll7SKDABOE%2Bh3MXeKFhKLhYhDN8hOaqvGJs3iDYT3tj5bWROuWVIkq346jDxROvgRopPJBPHRP4M%2FKDT8oGy3lvovVg%2Fo5joXrSYAX3UoKHSbEtxM%2FvqSGa%2BJm1Wxkv6Ca27sd8GaJkzwHYatq%2BCb97YLY5RYq%2FRVo0M7TlZLI2ZMjrtgKME4G%2FuPYS4BHsBd5Mm9mSUvVa6B61u2ULbU84sgwaojhaTJMamZUTqU5wNMMc6EFu%2BajQ1XwbnrEyUuKQ31Weq3CYGN0P8%2FLifPQx53RwrdPHw5RG6jWCBjbJ9%2BQn%2BgN1%2FBqFaOCdSWNH4RJdGSHBc%2Bq5J%2FEMW4WaHNNCa9VdZnFThcqwFK6AAywMTF9C8qKHlnGFSeDAxSIGVx%2FNh3YlPWgG49tfprurtUd1v88s16I4y2gPg8P5gVJpJqjYH3GTImIJgtqsBMJbItL4GOqUBXWEglSMlKJFVvV%2FidT60NKE3Hj6F6hHS42zUgWlKAp%2BrCHvG85cqHYRQ5XPSh3S3lo1ZtK0Whm2nlL9nf4UqA3lEEq73wYazURokGxwVmisRIsb5UYDPAPe%2FN0uXmDrfJXeyV94yJH6kHcF4AcovXd%2FaJlt49A0IoFpqX39KN31o8O6UCysKqDKz4xD0MKJUc2GaOQgVZyldDV17HPC4I0a5%2BlC4&X-Amz-Signature=659562601de2b797ac70c6a2950a60738d9faa253fe4843fab9b1816ebbfce05&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U5LJ3ZE%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T060833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCICiac81YzlkyfKHDmJF%2B1TsSVm0mO58%2Fvw%2FuszeVE1e5AiBxdvs00inWjn5yKSZbX%2FMDKF6dIGJTu3fCia1noB3y4Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMBVWESc8lSyjYrb1pKtwD3MSnJZ9mBT9EvlYd7lTdoMicTDyuuR7IE5%2BgrMTnw5Zb%2BlJUHCGnLAbmY2N5L5pw7RZhJVf2OZJ0xv2czHx59Fd22%2BIu6uOVzjTcrEa%2Bg%2Fh6qyrPXyePd9feHK0%2FVfoTyA8glz5ngKWO64gb1jZwffseCczwoIQrlJMYlXIR1OUS6x8wgXf4XYVgUlmVkF0KJOyu6xpeV5AUPOLwzKxefguRkguVhZwxchT2%2BeK5177seNUIB8vEjRsmmBacesCbJBhm7rQdh7K3eOfzlEsuai%2FwgDaB%2B8w9IzoZ1l9M2tq245hLEsruEyMHtEw75AbIV9Zt4T310iUApstAoKJFbcViAlZem5zLj9pU7%2FB26OMctx8QJ8hOA5QYHQpw6yazhr0S3HnFRp82mf24OfB9qeoMZ8UNYSU1OzBxhHMN%2Fl95FGNo2Md2brxBPaCbOneZBooDuknEEZ7474Md4MjatvjMpxadxtW9fnHGywedGC5JoBXebyoqk4%2FKzzAs8fUgykK2qSTkrl8caPaH6yxz8jMRv50ZFkEq5h%2BA%2FomfGLBSTgP3UtFABZKxEO7nr4ujbPmx043bMISJhiLcpcQn6jCva7iznHRQunJJyaiXHobe01OkHafhBU%2F4SKUwtci0vgY6pgEVYwQJKtfYNoAZbMgvwqfNlrhOmhhLr5pd6lkKYhH%2BKSYlOVxOdY0ZHTHcKPtmu7UtnVdj15wAzbtQN1C%2FM3X1tyG9vUh9pLqDAQoz6ghBKnarwQGu4l97W0FklIYWh0zhXH3mDhzfA6I1Ak04vemJbi3pX6aeU1uTVp%2FjH6sYrEO9T4HYLQPFtnG7%2FH3%2FkCBadrdhfgFI1j3u9H4Jf%2BnGZwLxSozS&X-Amz-Signature=090a24bfe93a67de2ba5df40c61e10132e30694bbd450be927c19850f52ed657&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
