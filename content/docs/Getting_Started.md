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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466357Z2LLR%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T081026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDCepKcvnpIHc4msfqDXK9Yl9SV3sJTKBWjI9J64CZHAAIhAIbYCka3g7mYncoN1Lwu1HgCe925hyxBhhxSdOVvsxEEKv8DCEEQABoMNjM3NDIzMTgzODA1IgzF3%2BmpI5RHvB4qaUUq3ANHUXCRKQpZXWtTtQZfnx80t%2BzfjJFlYjHJVXUwlie5HW3f6j9F2loiadx2KkhARykNl6tBBNUPvgR4R9o561RgMAB2D7jtB7Ln9ZWAmOk39J6yr1UBTHdimwfelUE9UAtZwIPIhlGaAJDn39UivD5ElVEsE0avIPL74ZSUsly6ewkSSyUWk4mn3LW%2BrTFiUR86PDlhYVxK8AcCd7FS7nUspPzkYaPdyTmST2vG%2B%2BxwU1F3k1yBHp9r%2BM54MzeG%2FxqwpnQCmIHdUq1Kw%2BzmBJfTw3dgtrbBCgMOdyS34fCdGGvhmHaSJalfKAFaQthQpyC%2BwYzXGt%2F4LhtNGDEgI1Cagac%2BBnYD1s9FJLzqOg9IYSSpUrV1y%2Fga4MbCBADGyQdTDt0o5xfBgkpYc0bxvPXtM1Ie7bX6U6WvT0IFY%2FyQkI1vsMNKhULaD6k88pTXyFdfneWY0jGFtO6yagVnKD05H%2B2pARXBsLJcbORZJVP44vfvkeSc%2FwHbaEDqp1ORabepfWSh8sxsIqML3BtQQXDHXeKP04E%2BZObDDOrbtouR%2FbmoSLw6timUJ%2B%2F%2Bj1ctwGAWABUP0elWimpAdgtSk3XQpUT0QpPl5IGrRoej6LJwFO816V%2F9CLeMj3yWpzCKtYy9BjqkAeTkWdnhwDkOh%2BXIOIgTL0kRA29M6vTT3gT37N2qJtnLbAnPDJXhp6P2tuUbOXo0ryKwIiZycSKjIqSfNXh0jsx7iA5YeWJ17cKeLM%2BASBbV3pBocW4OpKF4D5%2BkhN9gX7HlAicelw48N5D%2FG3oowTJY%2B7NpZq%2BgoyZkordsPxbQoNccY0dF54D%2Bh0PfnpYCGmmZdu5EeJyUOV5%2FqpmR2JXEjNMC&X-Amz-Signature=ac5809e95ad62b704086ffaff7e1223e7b540f1b0afa1f7879bd48642eb46eb3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466357Z2LLR%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T081026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDCepKcvnpIHc4msfqDXK9Yl9SV3sJTKBWjI9J64CZHAAIhAIbYCka3g7mYncoN1Lwu1HgCe925hyxBhhxSdOVvsxEEKv8DCEEQABoMNjM3NDIzMTgzODA1IgzF3%2BmpI5RHvB4qaUUq3ANHUXCRKQpZXWtTtQZfnx80t%2BzfjJFlYjHJVXUwlie5HW3f6j9F2loiadx2KkhARykNl6tBBNUPvgR4R9o561RgMAB2D7jtB7Ln9ZWAmOk39J6yr1UBTHdimwfelUE9UAtZwIPIhlGaAJDn39UivD5ElVEsE0avIPL74ZSUsly6ewkSSyUWk4mn3LW%2BrTFiUR86PDlhYVxK8AcCd7FS7nUspPzkYaPdyTmST2vG%2B%2BxwU1F3k1yBHp9r%2BM54MzeG%2FxqwpnQCmIHdUq1Kw%2BzmBJfTw3dgtrbBCgMOdyS34fCdGGvhmHaSJalfKAFaQthQpyC%2BwYzXGt%2F4LhtNGDEgI1Cagac%2BBnYD1s9FJLzqOg9IYSSpUrV1y%2Fga4MbCBADGyQdTDt0o5xfBgkpYc0bxvPXtM1Ie7bX6U6WvT0IFY%2FyQkI1vsMNKhULaD6k88pTXyFdfneWY0jGFtO6yagVnKD05H%2B2pARXBsLJcbORZJVP44vfvkeSc%2FwHbaEDqp1ORabepfWSh8sxsIqML3BtQQXDHXeKP04E%2BZObDDOrbtouR%2FbmoSLw6timUJ%2B%2F%2Bj1ctwGAWABUP0elWimpAdgtSk3XQpUT0QpPl5IGrRoej6LJwFO816V%2F9CLeMj3yWpzCKtYy9BjqkAeTkWdnhwDkOh%2BXIOIgTL0kRA29M6vTT3gT37N2qJtnLbAnPDJXhp6P2tuUbOXo0ryKwIiZycSKjIqSfNXh0jsx7iA5YeWJ17cKeLM%2BASBbV3pBocW4OpKF4D5%2BkhN9gX7HlAicelw48N5D%2FG3oowTJY%2B7NpZq%2BgoyZkordsPxbQoNccY0dF54D%2Bh0PfnpYCGmmZdu5EeJyUOV5%2FqpmR2JXEjNMC&X-Amz-Signature=4a81c1a30a1e0cbd1fa73fa50616bcb052a51693f2e43df79d124197346a3f0e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XSGLTFX%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T081031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIGxE9EcxAYq2ObsDRxPCSFfM6ZhBGc2HL%2B3Inf7Jjmy8AiEAqtZ1G%2Fp7L2rbBvCKDyE1xcte070MSR03uIBV8ahC86Eq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDB2GYq2wJHC9KZyivircA9x6oInWmAHXeb3xJpmhRMg3WJ0F16yuTNbkTV%2FgYpgM4zteD0d6QD1tvNJ0JroVZNdDj2xsd9HIsT%2BlyPIo1VoM%2F59zVggP9UnudxXLHpUwukXMPKNTyLmCSdbrhu1KAsx4g%2Bms54tcOpxdtdJKiKI3XQt7XThrHSFb02v9QLCUyylF3tX7EYXb1Z%2FnHjSvCHj5YiQHFyLpTUiFvtrmrYWfyjB%2Bu%2F8WS6DB2vyAL4x4bQWvtfbUQsc%2FcbFbQsfCOv69qKKTGUogmUeHb4IaGShCX3gxUoxQQ8ctHA2cOei%2BXhNH9WY%2Fcjs8vHs%2BtAmB7LwTuTkYXtyop82sTBEaW1ATHMQzOir6hhGD3XYbiARnZ5oPneMBszGifeCHj9rzx8OiJOudWyl43lynPBid5EBtu8V1CegSxAww1WmQJywyy8yAcztWV9IdeF%2BK1lnP4FIzW3weEQ%2F7XkBtM70GRyxq5uaKGQ6P7r0yt0fcfPWzMHw62NGO9zZXfh1NClbbX45Z6HxiiU2MGQrEatdhNd5UHAQFI42d396xwAV8VD%2BJKcaXjus4mIHcvfCFV9edAvJpaWBncHC5ZYeohcgbDzn9RnRCqAAKxjQTG4%2BPBoq2Jxx2EcnEIogwKdqFMMm0jL0GOqUB24fDhBU2bT48RBfXi3vxwcKw4ZKP0Qdhs%2FQe4O9c8Osrv7VCrYHtThbv2clhe2z0H41uCXLeMRC1Kyc4d1zJUPDm4bwKZtpCedcfEyU%2FpQh6cTr8OE5wFMuj%2BIN85jVeDhCgDIVmtEDT3Ujc7m3y35lwZiwsX4dpbiund93pzaDF9jORZaXweW3S5%2BX%2BCsMRaStP25mHIghfN7kz1hA59p6ylhIY&X-Amz-Signature=d15f2ff9826fc3447319b43d394d4a1c7c153bfbb4226f058bb9ee0945bbfa2f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKZUABSC%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T081034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCID97qe5gjVzC%2BFmqGrmKTjBXZ3huUVhQnt9PTklZGtNZAiAxRm06cK6IXuDqrF70jFainqiyvzF0h9keKHgJ83Pijyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMOpdcJOT19QelovoqKtwDj8%2BfyVlMUS4tGkTZl95HXP4zx%2BcmclKXYXn0LpaFSPlHJWzXDV4NPsyEimkmk9GlmVjLSp3JHD%2FhX1fovM1sOP%2FwSSgbGL2EX%2B43EYEWSrzfjp71%2BZRq45k8QESIBPa5cdz4scGdQmfXujrEfaco2YVHb8utSlOuyx8epB4%2BmdYmlnABqTqYkRi86RcmNnGkSEMUftUja1dRliqzVvGkyIXyRnP78GyXgxh%2FQqi9wqSl%2FS7jO13h25d0Bx0UsAsD2DmTxI%2F9kkkoJbgbQNh5T2Y92MJtzWnOvdVsGD6x8Zd1cSFf4IPpOnHoY8dBdrh%2FUC727izMRHvnz%2FwtZiy%2BSL0i5oZToC0Y7LVF1qPXrPVekuYk8KjfIdYXJ4A6V%2BSmVNTE80lDfkxci8Ux5meRzmoyHKpCC7WC85QhKSfBUcjqzsByWtwzcsdPb%2FU24I%2B8C9Y2WpY%2BaMoNmKVO6JLG7HWolD4i93FCuCgtiIT3CU5JLoL7XJdX22B5fpbgoe%2BP%2BT9O%2BJySbWlQY9anqLjwPYw8Hx%2FgUpI%2Fy3t236OsPptUq%2BuOJnp6wDRZi9%2Fi3piEWoU5VsJg6JNPSriC%2F0jq55VjoO12HgEVXmYlcbNSI51EIjpyMpdTOW32OjMwsrSMvQY6pgFljhEM1JY%2FeznXHXZen%2Fu3OPM89EJ9KlxbzXSCfTRUhHQfzQyzLH5QKrxirrZxWTBTBrQ05VNvI7mlpwWKOsx44t%2BUykmNaKOo3vG2hXbXKKZwE3fdXr2k3Y0oY%2F%2FRv8sZyCWliCmh19jE%2BR8vx8gfwA%2Fb2%2BPWbXF14lRd%2BNGWl6pX%2B7lUO8OQmyA9RwTWyvEr%2FwjhkvIiASA%2BD833fRAvMBOp0K8%2F&X-Amz-Signature=d0cba5f691210d1f4c2053753ee83aa1b7575af81b379bc8c8c72e0ac173a002&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466357Z2LLR%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T081026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDCepKcvnpIHc4msfqDXK9Yl9SV3sJTKBWjI9J64CZHAAIhAIbYCka3g7mYncoN1Lwu1HgCe925hyxBhhxSdOVvsxEEKv8DCEEQABoMNjM3NDIzMTgzODA1IgzF3%2BmpI5RHvB4qaUUq3ANHUXCRKQpZXWtTtQZfnx80t%2BzfjJFlYjHJVXUwlie5HW3f6j9F2loiadx2KkhARykNl6tBBNUPvgR4R9o561RgMAB2D7jtB7Ln9ZWAmOk39J6yr1UBTHdimwfelUE9UAtZwIPIhlGaAJDn39UivD5ElVEsE0avIPL74ZSUsly6ewkSSyUWk4mn3LW%2BrTFiUR86PDlhYVxK8AcCd7FS7nUspPzkYaPdyTmST2vG%2B%2BxwU1F3k1yBHp9r%2BM54MzeG%2FxqwpnQCmIHdUq1Kw%2BzmBJfTw3dgtrbBCgMOdyS34fCdGGvhmHaSJalfKAFaQthQpyC%2BwYzXGt%2F4LhtNGDEgI1Cagac%2BBnYD1s9FJLzqOg9IYSSpUrV1y%2Fga4MbCBADGyQdTDt0o5xfBgkpYc0bxvPXtM1Ie7bX6U6WvT0IFY%2FyQkI1vsMNKhULaD6k88pTXyFdfneWY0jGFtO6yagVnKD05H%2B2pARXBsLJcbORZJVP44vfvkeSc%2FwHbaEDqp1ORabepfWSh8sxsIqML3BtQQXDHXeKP04E%2BZObDDOrbtouR%2FbmoSLw6timUJ%2B%2F%2Bj1ctwGAWABUP0elWimpAdgtSk3XQpUT0QpPl5IGrRoej6LJwFO816V%2F9CLeMj3yWpzCKtYy9BjqkAeTkWdnhwDkOh%2BXIOIgTL0kRA29M6vTT3gT37N2qJtnLbAnPDJXhp6P2tuUbOXo0ryKwIiZycSKjIqSfNXh0jsx7iA5YeWJ17cKeLM%2BASBbV3pBocW4OpKF4D5%2BkhN9gX7HlAicelw48N5D%2FG3oowTJY%2B7NpZq%2BgoyZkordsPxbQoNccY0dF54D%2Bh0PfnpYCGmmZdu5EeJyUOV5%2FqpmR2JXEjNMC&X-Amz-Signature=067aa87f4a1e9b12eef43116df0e616626fe4188fc55180e9037b640bac28353&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
