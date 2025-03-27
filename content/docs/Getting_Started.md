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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEBZ5THE%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp2gFYflCuTu9oIOW4ysqDe2Zm1AHYe8LuO8%2BlclyrywIhAK9FS6MJtXFR15YmMUWczWMRPScHv5CHniI6IsHdeVbTKv8DCE0QABoMNjM3NDIzMTgzODA1Igy5yPegP6JuWnqD5Twq3AM0ISoSbAPrN3lOEPcdJzt7q7b8TiwbNyblENfQ5b%2BzhIE9wZahcscppUlyQmKUnAdpDeCZN1ceEOvyh2kgAexuAawq2YMJjvgoXGlJ3fclkXtvuzgJcn3UNmcnKSDdbv7vA69OmaWJQg%2ByX5J%2BUpZQU5FbofxEPSBkwPUNcNAQfHn2jtYqjAyHBSTeiap4E6gIcjh0RRHZ4zSoUa0PXFq05bXZqahSFS7YcbLAhbWaJWUjRN9UqH5iJKzcJwWf477TALZS4126nvm%2FHadajEPPT4JZAeXh%2F5AjqoFxca5J8wfY7v0r3ohtCRjLL5z3r0L%2FNgZ4OoNrpWY1UkWlML%2BKKiL9ly4yv1Fy94vcEOTvYeNLPEooXNIF9%2BTL%2FRXGuPi8%2B9vhaF6kTX%2BYSs0ygoJTUV%2Fq5wx1PaKqERT3IeqUMNenCc%2FAyx6qNXIrIDbjTFiZLOaq1nJ0meulAo5%2B%2BeIIKt64dQfGTqTaH1MXW5IQhGhVWeDymFHGcxOS4kt8ZzASzqIh2DFuhdMT2xpvWKOvBB3BZNV%2Bq1BCFWM1i6DabJ4dwzV667lP83PshrkvMcBetTnRBYWV7T12cUzYhhgQOGV19430%2BZny8e8iW6uiEdDbZBJmKdz4gPOWaTCx3Za%2FBjqkASeFl3cIpDGmSmVFtbqZrwe6jXksLxkQ%2FeZlNp2RhbO4LKLU2fPYfL2U1YAdUeJ4R5bIwxpgnwPJljoRRj3olcGEfP7LOpRRdNWN7cDg735qr9AZntSBzCBbwNBsBueUFYx7dsWBh%2BnAVWIxCJVnVqws9gWporidO50dIkMw3lxDUqsu86O8HXP1VO5L1hczvUQo4I0ASAXjGbRhrLPTE0nmrwMa&X-Amz-Signature=4eaf08745b08b8543715830ffea9271bf2c9383969ffd5a6e68713040dfd742a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEBZ5THE%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp2gFYflCuTu9oIOW4ysqDe2Zm1AHYe8LuO8%2BlclyrywIhAK9FS6MJtXFR15YmMUWczWMRPScHv5CHniI6IsHdeVbTKv8DCE0QABoMNjM3NDIzMTgzODA1Igy5yPegP6JuWnqD5Twq3AM0ISoSbAPrN3lOEPcdJzt7q7b8TiwbNyblENfQ5b%2BzhIE9wZahcscppUlyQmKUnAdpDeCZN1ceEOvyh2kgAexuAawq2YMJjvgoXGlJ3fclkXtvuzgJcn3UNmcnKSDdbv7vA69OmaWJQg%2ByX5J%2BUpZQU5FbofxEPSBkwPUNcNAQfHn2jtYqjAyHBSTeiap4E6gIcjh0RRHZ4zSoUa0PXFq05bXZqahSFS7YcbLAhbWaJWUjRN9UqH5iJKzcJwWf477TALZS4126nvm%2FHadajEPPT4JZAeXh%2F5AjqoFxca5J8wfY7v0r3ohtCRjLL5z3r0L%2FNgZ4OoNrpWY1UkWlML%2BKKiL9ly4yv1Fy94vcEOTvYeNLPEooXNIF9%2BTL%2FRXGuPi8%2B9vhaF6kTX%2BYSs0ygoJTUV%2Fq5wx1PaKqERT3IeqUMNenCc%2FAyx6qNXIrIDbjTFiZLOaq1nJ0meulAo5%2B%2BeIIKt64dQfGTqTaH1MXW5IQhGhVWeDymFHGcxOS4kt8ZzASzqIh2DFuhdMT2xpvWKOvBB3BZNV%2Bq1BCFWM1i6DabJ4dwzV667lP83PshrkvMcBetTnRBYWV7T12cUzYhhgQOGV19430%2BZny8e8iW6uiEdDbZBJmKdz4gPOWaTCx3Za%2FBjqkASeFl3cIpDGmSmVFtbqZrwe6jXksLxkQ%2FeZlNp2RhbO4LKLU2fPYfL2U1YAdUeJ4R5bIwxpgnwPJljoRRj3olcGEfP7LOpRRdNWN7cDg735qr9AZntSBzCBbwNBsBueUFYx7dsWBh%2BnAVWIxCJVnVqws9gWporidO50dIkMw3lxDUqsu86O8HXP1VO5L1hczvUQo4I0ASAXjGbRhrLPTE0nmrwMa&X-Amz-Signature=06e4f02ea0c3fee64fa9c42b15668c7df9e45b23d8739162e5d0cfb1669b3745&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL2AX62K%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T200848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdBDuPyRYpsESfw04CPS0GfZzJmO%2BIJMA0U2gRYuzGIAiA3b9jEyKsqSGIoSrNheomhQTsOZQktNERDv%2FCpaDswbCr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMDZZ%2FkGz0KpeBuwbjKtwDp9RrDM6TrFzUC0sxqHJB3NWfxi1IV0XjwRTLcMCvPf%2Fq8gb2PvgJ%2B0tD%2BsYYeyfO7yO4OejUqHdtEWlh75rVKssAWu%2BYIHdMe7S4FJYx85mnNwQKbHtqsWcFaWOrh1G5z66F2coJySQAZHYiFLzw4f%2F3tZBYNwUfpahT8Alm01A849tAl3p78jIuiafBV%2BQPCNQXjkjTm9UDjWEfIpAwmBwX8OS3ev78vfvOSxcedCziysHDsnD6%2BbfkCOvfgOznWFQTyV2iKVv4%2FtMZQw9bPu38YviKUqOnv9V26br6wc6uHiUNI%2FhjVsl9W5bf9os56man%2BwkzBqdfJi5ZfA%2B%2FYSpfgGXPxp%2BUdzbcvejEfgZhC99Np1lyXIkcWPBC8BPU%2F04oDz2LpgpQm3MSPwdwA2dKvI5QEFNa8RZ0jLf7TxxGhCnY9pD3BK%2Bf%2FwTF4y1SaS0g41appH%2FDrhYzHPMCPLuw96tNRp%2FI3Yk9qqxg2FZtRLvFwWnpL7fvCuIeSdVC2dEtKJmbhDoyAxWdRQLlthAR5OSMW6UUgO7xQNCdrU98jWIVSduUFjSuUzk4z8HBl8CII7npH%2FJAIcqXImv%2BRng6ACPWN6NHzM5G3ANV1sUiz7%2Bpx6ihlhQcwTkwh92WvwY6pgH1S7fpYdN1yBi59yHXXjoomNTyhvFN%2BQx921wztW4%2Btc7G%2BAlIerR9dCmS8fvTB8kaEbeh5ufk%2BPsmDt%2BaJ2yOm6eWTjosfRxu%2BSo1ausdU3mQW7r1i30ASaqjRonRe%2BfYsgAwKZXlUffhFWOq52wBFmG0fvNMfaSs1LLQt3OEbKgnt%2BQILmQDHEpPoRkaDiAHAo6zCfvlputuPGhMxwdEuLXMqgi2&X-Amz-Signature=cff7f9c74e59484094ef2022362c93c9fa7a11c7d27e16479cdd1adcc9469593&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLYCO3XU%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAIH%2FaCRDuqoyW1gy4WSArC%2BDZukLG0wy9yiNp4h5ztLAiEAzOG2NI7nNKZ%2BNRXZi86AVsm9vKGr9mDcduuSuNYx8wMq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDM5xM6nfKYVb6Fs8jCrcA3VpKOr7mZSpdlXAjjWYY5D2Coc8fF3p2IDw6X0oCrbPkw5yztM62sXWsQmmd4ziP0llMRHqapW%2BV8YVwh633v9WIs9qMorKonLq%2F%2Bxxy6FjkPZjZrL1XVSPEzcNJhZCArAq8ZUwKsl9NKFPDu8Jk9JikFsSi095pNPDOguD5x%2BTl%2B6flbGqRmmyDcqws30fFlINT3uggLOuLtUc8HpdFnsQSb13KbyOAILoH0qKDC6lD%2F3osJvwqXUCcEkU0YAAb9o2dE%2BYyjZJCvGAqcezv1cZ8R16IeS8%2Fsbyk4pAOq%2F6SpHToJBI2%2Fio%2FnlYeLB0FPI8%2Bde2ULkcxpsIqbbF3XZIlYdfIbj4o0xLRasE8xXEQK4KcJPZ%2FQIuSBDAK2MLvTFSLbpNlyGVTsnDAnamK4uY%2BwxquANm1kOQhlZL19pJxA7WbKM86DeuefNygUjRJBuyhC14b%2FLzFnpI3IE7qKyJ4e3s5Yzapgffl77Oa4mi0G96hOqT8W6Uc5Axsbo2P9h9FQ2TlulPBakFd94Uc8mLTyk8VzsupEWxT%2Fx0E%2FmakpPk3I9AQhj%2BY0aCUd5UInxUXsm%2BRUUReInfvqeMtpdw1rnKk5dxW69zs%2FXFicBKxf3SZCWM18uNC6zFMLTdlr8GOqUBCblG4RBHXRqHG3TUDc2zo5BddWuwq1eoKewMbfDEDhQ70ljOy72KpJEoGiAlBCK4XgTPh0TauIzJH5qVYfjnyLBSUnSSEg1kifVNXZ7bzHCIafzWBui1q1gsCgb9qxcIS31vUQ35lPvK%2B3nY7VKOzIt2muGQ0YNN5MqZ3CfhWLKu%2BJQPnVu7%2BLh90rQcX3Mw%2F5uPHQa%2Fb6kYKSbvz7zAL1NclEjQ&X-Amz-Signature=c3b124ff31f5ef52becd200848a06ba752bda54570ae9b3fb11631c78f74a413&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEBZ5THE%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp2gFYflCuTu9oIOW4ysqDe2Zm1AHYe8LuO8%2BlclyrywIhAK9FS6MJtXFR15YmMUWczWMRPScHv5CHniI6IsHdeVbTKv8DCE0QABoMNjM3NDIzMTgzODA1Igy5yPegP6JuWnqD5Twq3AM0ISoSbAPrN3lOEPcdJzt7q7b8TiwbNyblENfQ5b%2BzhIE9wZahcscppUlyQmKUnAdpDeCZN1ceEOvyh2kgAexuAawq2YMJjvgoXGlJ3fclkXtvuzgJcn3UNmcnKSDdbv7vA69OmaWJQg%2ByX5J%2BUpZQU5FbofxEPSBkwPUNcNAQfHn2jtYqjAyHBSTeiap4E6gIcjh0RRHZ4zSoUa0PXFq05bXZqahSFS7YcbLAhbWaJWUjRN9UqH5iJKzcJwWf477TALZS4126nvm%2FHadajEPPT4JZAeXh%2F5AjqoFxca5J8wfY7v0r3ohtCRjLL5z3r0L%2FNgZ4OoNrpWY1UkWlML%2BKKiL9ly4yv1Fy94vcEOTvYeNLPEooXNIF9%2BTL%2FRXGuPi8%2B9vhaF6kTX%2BYSs0ygoJTUV%2Fq5wx1PaKqERT3IeqUMNenCc%2FAyx6qNXIrIDbjTFiZLOaq1nJ0meulAo5%2B%2BeIIKt64dQfGTqTaH1MXW5IQhGhVWeDymFHGcxOS4kt8ZzASzqIh2DFuhdMT2xpvWKOvBB3BZNV%2Bq1BCFWM1i6DabJ4dwzV667lP83PshrkvMcBetTnRBYWV7T12cUzYhhgQOGV19430%2BZny8e8iW6uiEdDbZBJmKdz4gPOWaTCx3Za%2FBjqkASeFl3cIpDGmSmVFtbqZrwe6jXksLxkQ%2FeZlNp2RhbO4LKLU2fPYfL2U1YAdUeJ4R5bIwxpgnwPJljoRRj3olcGEfP7LOpRRdNWN7cDg735qr9AZntSBzCBbwNBsBueUFYx7dsWBh%2BnAVWIxCJVnVqws9gWporidO50dIkMw3lxDUqsu86O8HXP1VO5L1hczvUQo4I0ASAXjGbRhrLPTE0nmrwMa&X-Amz-Signature=120e914948188c3738310ed6c59e48547f18aa70ece3a37dd2939671b963bbf1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
