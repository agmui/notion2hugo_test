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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BLIGNC5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJQMRf27y9r%2FjpmpmSMZiSoyGsPC%2BL62PAoLCcXQlaCwIgcNzZyo9vs4k5btbAYzdJqYODX39LQ5RGPTU0NQQ1iGoq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDPnV9Kfy11j0RYEweyrcA2AuwyF%2FFLCFsQrzh3%2BWWCcCI8XOPnykeGP3wIWxycwb8Vx4ELnoajv7SOAJuPFc37R744GVWDBFU4QgZQuZeRx%2FBFnM3HHCqwZj95Ld0CnS6IFG5rIJcryMNLXJeGmiYNZNexFwq1Fy1TY%2Fwi8pq6H8CzxK3bxRhVJS%2FThKpj7izWD48GsmG%2FvKKr6T2QrR4D3%2BBVMiSTYmsl01em8IfG%2B4xObjNwz8pgHweTAt5RqASa5EF1e%2BnTBRYG1vcYjxl2v7C%2Fu64cDPu7gjxI3S1x8UvVgxMQ5Au02nHVx7jjb0KYZdqaEuJbH29yLVysbP6Tj6jfdIqSIuPQMFbUowJagBjGJo%2FDOemnIPu15Fi0uX%2B%2FH3vJdot8ORY0WVFFzSciztJEiioxR7%2B9ZKMh%2B7FUWxW5OzFsXja5xpVWh0AirusYe2YBdaGcSeTxN%2B2rJq%2BsXB4PZCYIhCUyfLN9uGwKZXdvOrwpqGlsXgjylRDeYese1SVKaWwPSwsSxd9krNpRPmnL9f3%2BLX4V5L1NkKAViL4ix7tg7%2FdVT%2BikHaMJcDz5BKIT07mblUds9eaVUkaur%2F%2FzLwNZTYxo6K0RoxnBAGyQBSRMww3MPfVUhNYJ3EORy%2FLi60Yfkj8f%2FDMMOB1sEGOqUBsT3oIIFZaZrBp2sCWh5ThuIAEIfD%2BcoryJyKRBM0SBVNXfVJKkhAZl1foxsz0%2Bp4O9XC10caPQ0Kpa6yzWeq9gflalceDSGNt%2FRpnaIPO14a%2FXoBa2PLdCNNOM8hcWoNwVyO7ZWlMkHjSG7uHINxqX%2BaDQXf2xDhzBTtkgnIuk2e4WDiwYKrRegrb%2FrYPxCH0K6MlDmMJuAd4jZ7hSbU1B2%2BLP81&X-Amz-Signature=ac2e9fd8e5a852caff68610ec198632dae81f20cd31a92f3239a8f409e44cc16&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BLIGNC5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJQMRf27y9r%2FjpmpmSMZiSoyGsPC%2BL62PAoLCcXQlaCwIgcNzZyo9vs4k5btbAYzdJqYODX39LQ5RGPTU0NQQ1iGoq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDPnV9Kfy11j0RYEweyrcA2AuwyF%2FFLCFsQrzh3%2BWWCcCI8XOPnykeGP3wIWxycwb8Vx4ELnoajv7SOAJuPFc37R744GVWDBFU4QgZQuZeRx%2FBFnM3HHCqwZj95Ld0CnS6IFG5rIJcryMNLXJeGmiYNZNexFwq1Fy1TY%2Fwi8pq6H8CzxK3bxRhVJS%2FThKpj7izWD48GsmG%2FvKKr6T2QrR4D3%2BBVMiSTYmsl01em8IfG%2B4xObjNwz8pgHweTAt5RqASa5EF1e%2BnTBRYG1vcYjxl2v7C%2Fu64cDPu7gjxI3S1x8UvVgxMQ5Au02nHVx7jjb0KYZdqaEuJbH29yLVysbP6Tj6jfdIqSIuPQMFbUowJagBjGJo%2FDOemnIPu15Fi0uX%2B%2FH3vJdot8ORY0WVFFzSciztJEiioxR7%2B9ZKMh%2B7FUWxW5OzFsXja5xpVWh0AirusYe2YBdaGcSeTxN%2B2rJq%2BsXB4PZCYIhCUyfLN9uGwKZXdvOrwpqGlsXgjylRDeYese1SVKaWwPSwsSxd9krNpRPmnL9f3%2BLX4V5L1NkKAViL4ix7tg7%2FdVT%2BikHaMJcDz5BKIT07mblUds9eaVUkaur%2F%2FzLwNZTYxo6K0RoxnBAGyQBSRMww3MPfVUhNYJ3EORy%2FLi60Yfkj8f%2FDMMOB1sEGOqUBsT3oIIFZaZrBp2sCWh5ThuIAEIfD%2BcoryJyKRBM0SBVNXfVJKkhAZl1foxsz0%2Bp4O9XC10caPQ0Kpa6yzWeq9gflalceDSGNt%2FRpnaIPO14a%2FXoBa2PLdCNNOM8hcWoNwVyO7ZWlMkHjSG7uHINxqX%2BaDQXf2xDhzBTtkgnIuk2e4WDiwYKrRegrb%2FrYPxCH0K6MlDmMJuAd4jZ7hSbU1B2%2BLP81&X-Amz-Signature=88807c2d6fb91949bbf24d0bbbefb8ed69a6eca15c26bbd112d51753c217d0f1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BLIGNC5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJQMRf27y9r%2FjpmpmSMZiSoyGsPC%2BL62PAoLCcXQlaCwIgcNzZyo9vs4k5btbAYzdJqYODX39LQ5RGPTU0NQQ1iGoq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDPnV9Kfy11j0RYEweyrcA2AuwyF%2FFLCFsQrzh3%2BWWCcCI8XOPnykeGP3wIWxycwb8Vx4ELnoajv7SOAJuPFc37R744GVWDBFU4QgZQuZeRx%2FBFnM3HHCqwZj95Ld0CnS6IFG5rIJcryMNLXJeGmiYNZNexFwq1Fy1TY%2Fwi8pq6H8CzxK3bxRhVJS%2FThKpj7izWD48GsmG%2FvKKr6T2QrR4D3%2BBVMiSTYmsl01em8IfG%2B4xObjNwz8pgHweTAt5RqASa5EF1e%2BnTBRYG1vcYjxl2v7C%2Fu64cDPu7gjxI3S1x8UvVgxMQ5Au02nHVx7jjb0KYZdqaEuJbH29yLVysbP6Tj6jfdIqSIuPQMFbUowJagBjGJo%2FDOemnIPu15Fi0uX%2B%2FH3vJdot8ORY0WVFFzSciztJEiioxR7%2B9ZKMh%2B7FUWxW5OzFsXja5xpVWh0AirusYe2YBdaGcSeTxN%2B2rJq%2BsXB4PZCYIhCUyfLN9uGwKZXdvOrwpqGlsXgjylRDeYese1SVKaWwPSwsSxd9krNpRPmnL9f3%2BLX4V5L1NkKAViL4ix7tg7%2FdVT%2BikHaMJcDz5BKIT07mblUds9eaVUkaur%2F%2FzLwNZTYxo6K0RoxnBAGyQBSRMww3MPfVUhNYJ3EORy%2FLi60Yfkj8f%2FDMMOB1sEGOqUBsT3oIIFZaZrBp2sCWh5ThuIAEIfD%2BcoryJyKRBM0SBVNXfVJKkhAZl1foxsz0%2Bp4O9XC10caPQ0Kpa6yzWeq9gflalceDSGNt%2FRpnaIPO14a%2FXoBa2PLdCNNOM8hcWoNwVyO7ZWlMkHjSG7uHINxqX%2BaDQXf2xDhzBTtkgnIuk2e4WDiwYKrRegrb%2FrYPxCH0K6MlDmMJuAd4jZ7hSbU1B2%2BLP81&X-Amz-Signature=06c19430d84eebbaf31c984b2857043f64bec75f92f47df513b4e681755e7fb8&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PPGSOCP%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T100958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTcELVRrLfnZzj%2BG8H%2BVs2X8n2Eh%2F8xeZXK%2BzfR0D4WwIgfs5Sk2nsfDgETqRShFsGNEatjdErHuBk9EUPbxMvo3Aq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDDDRPy4fzIvI2U%2B8JircA7V%2F%2BwtkAKlLPViq3Ik2Iik65nwKS%2BgI6GJIaqgXmiEeu8p9s9xrrCDrq%2BZWbhObMJVifzf%2Fd56U%2By0OLt%2FX0HXp2mrIwhEyJoNyczFDugtX05EXLgAmXdnuOr6sDEkGubtJJFiXumG3lqNtkSE2OwAwLnQKHM%2BwfZItbKJ0pggH7xt04JksizhmQUVeps3B8xHvLhtNVkS85sfpUNCWHHbmtsTKNJggzPGTIA%2FIVfEDYnAVoxAAYLN3DA%2FRav9C76Yby2XD6dEgYEOFSL44VXBjI43XdjebNAMtVu%2FhSoDxtGciJLPKYjn5OifDE8IM87flnmb3SryCQzJCKBsTzKrKjkJsfPPHy1xo2XpRZvijspS0w%2FdcI9%2FnC9UYq9Jfz%2BEJ4mn1%2FnYeGRZFi%2B4xrQZRSODeG%2BhqAwk5eeyoTS6q044hy1Sf0f61ho%2Bq04wrl3I%2BNQuZyK6eePrH%2FxiVy2GeJTt77ZuALUzKm%2FAQgd%2FPN0hs%2FYhD6hOB3%2BWxh2HMuviH%2BzHojDW3DZ9Y%2BvebF52Zb4zHEYhKBxabxCx0Vy6fkHM3uO1LcavSrWMg3zgOApZ%2BNUc2HL6ZPdPpZ8UElIs5Ba2gYYo43QbynfvnMTyygKpcbgqhocMWBLX3MNmB1sEGOqUBlnjS%2F3aHKyYI8G0gwAl53jz%2Bq11B8sB5s3tgdGBgX5ekhJ5ddX3CFrXnViUneykcn0aDj35A9xhvGY1mKfItTHkTOMv76ABSLnKORzH13tSKDbmz09XtL3K%2FRTusYsCelRY1LKLGOhq%2BPhNF3wwe%2F3pFUjbVQqPcr9zAXy5fS837BrJN9v9rpEvcOAq7oBvSr4R1F46iFBHX0dqEm9F7tf0DBQof&X-Amz-Signature=7045560bb26a097f09cc593abec1742a5e2687cdacd903969ac796bf4f3cfec8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2TS4PGM%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T100958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2d%2B9U2htZ0BpE0KLtfVsFwHxw9bGrwo1JgbOGugUt6AIhALgO40qt6KoR3%2BKieUyi1cEvmfb2WD15MnUgAE5MzdlOKv8DCFoQABoMNjM3NDIzMTgzODA1IgzcqKoOhJcyfYQElbYq3AM2BawlIRUtA7iCojGZNkjvp4usgzCFIliLurSRzOaxaO8EiHdrjbErWQ1rngn7C4lM2%2B2XDBO9Br8IouMdBdAa6uwZMmSOamFlmSKde%2BmdVm2WlAZVPbBENikQ6ef5dfswP4OB7muqsPln0J0gPnASqLO91tjo%2FAWfYvR4IxLBARu0HqEGt%2BCN4sB7x4EXx2yZM7rqm9APAW39XmF6TCgW8Y1iGYZ0rv9nS2SS11pPpRlqKd9TVFD0bVlK3BoQ35lerHT5%2BNqsAHnBm0PkLxWg%2BbvC1x%2FLbARbtkUxMcnZX87uXd7nInIN98YqDpva0Ezg%2BnnL3jITrNxGDKz3ko%2BjJuIImsu%2B0Ki15fbPO10vAKUgOLQzsdRXNTi4qePmG3WQ7fsp5%2Fx8loSHXqHZid%2BtbzBS6WIyAPlC6feMoxFyxUS1V4vmbqaeaIorFMsBxe8zCSoy30judjFLmHsq9GgkgUXgIsIPXZo7tcMu4O0aBIRcwb9sX87bZ8ejMC%2B4AVkNwpgB6J6MJay5k%2FyUAzgxm%2BwLTwkhcnvZRuhBrpqrWVx86%2BuU6%2BiC3KkIcUPJA3Ga8ALhuYc6w%2FvmOpFm3EiRJCk3%2F8o%2FMUhObV%2FFORVUzLuFOMd%2BwgHVzdxUczCAgdbBBjqkATYRchy1w3oCunrtdbESPD51350NGRubeG%2Fv4Ku1L9OV0K4RmHvMo%2B519sQ3kmRdkw9V5013GKBDAS2jScStXnKUyX%2BeLAetOKEe9idCIqEYorUC6b0MJnE3w09c1AcqfxxZGNR6HmwlF%2BynLQdonRHLT0Jp2bPe%2BjoRzUvuqEkLmlGEFayBYFiP0GkvkMYuBhcmq5BuZb7ZGG5LLmR0GII%2BFvEH&X-Amz-Signature=49c13b9db8cb783fd4960a266438fc3acc6aba9832cc9ae1cc1e4f76ea9de4b4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BLIGNC5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJQMRf27y9r%2FjpmpmSMZiSoyGsPC%2BL62PAoLCcXQlaCwIgcNzZyo9vs4k5btbAYzdJqYODX39LQ5RGPTU0NQQ1iGoq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDPnV9Kfy11j0RYEweyrcA2AuwyF%2FFLCFsQrzh3%2BWWCcCI8XOPnykeGP3wIWxycwb8Vx4ELnoajv7SOAJuPFc37R744GVWDBFU4QgZQuZeRx%2FBFnM3HHCqwZj95Ld0CnS6IFG5rIJcryMNLXJeGmiYNZNexFwq1Fy1TY%2Fwi8pq6H8CzxK3bxRhVJS%2FThKpj7izWD48GsmG%2FvKKr6T2QrR4D3%2BBVMiSTYmsl01em8IfG%2B4xObjNwz8pgHweTAt5RqASa5EF1e%2BnTBRYG1vcYjxl2v7C%2Fu64cDPu7gjxI3S1x8UvVgxMQ5Au02nHVx7jjb0KYZdqaEuJbH29yLVysbP6Tj6jfdIqSIuPQMFbUowJagBjGJo%2FDOemnIPu15Fi0uX%2B%2FH3vJdot8ORY0WVFFzSciztJEiioxR7%2B9ZKMh%2B7FUWxW5OzFsXja5xpVWh0AirusYe2YBdaGcSeTxN%2B2rJq%2BsXB4PZCYIhCUyfLN9uGwKZXdvOrwpqGlsXgjylRDeYese1SVKaWwPSwsSxd9krNpRPmnL9f3%2BLX4V5L1NkKAViL4ix7tg7%2FdVT%2BikHaMJcDz5BKIT07mblUds9eaVUkaur%2F%2FzLwNZTYxo6K0RoxnBAGyQBSRMww3MPfVUhNYJ3EORy%2FLi60Yfkj8f%2FDMMOB1sEGOqUBsT3oIIFZaZrBp2sCWh5ThuIAEIfD%2BcoryJyKRBM0SBVNXfVJKkhAZl1foxsz0%2Bp4O9XC10caPQ0Kpa6yzWeq9gflalceDSGNt%2FRpnaIPO14a%2FXoBa2PLdCNNOM8hcWoNwVyO7ZWlMkHjSG7uHINxqX%2BaDQXf2xDhzBTtkgnIuk2e4WDiwYKrRegrb%2FrYPxCH0K6MlDmMJuAd4jZ7hSbU1B2%2BLP81&X-Amz-Signature=605aadfc3b2b365ba3d6613d623676ed556b703a89939bace51314c7c84416e5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
