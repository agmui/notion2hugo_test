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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QQKYHQS%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXMrD%2Fv0k0d2PTfnl%2Bjfpq%2B4bZ8uGKWYNpHiNjoub5EAiBcYQPcDnvTc4AKZ8Hs7MPZnJJDUeQ%2BYkv5ppLkGybgfir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMS3lAT9qq9cs3kQ7sKtwDJ1JkX4XCd5svWJ5v4SzIBS%2B%2F6VBtEg4OKkeEH3jAhxX2IORmY5mMT8nuJjEt8QXvtxBieauGNQRiDxpFgSAIJG%2Fk0dw1ntRCeCfxiRQb8uQGyQU9wDXjfJu%2F%2Bq3azKRbyBTsDyVKrD8JA%2FgSPofVpu%2FB8sCp4xV%2BhYS2xea7uGG9xwdGcS8JssTiS%2BfsgQJhWdDZHOv6%2B8uguZYP%2BF5bn6%2F906nin6hQmRMeUIuY0hCSzvn0AkmRp6k14M7YMGyq1mC9rFM7L%2FtBLiR35r9Br77MMS01NExl5I%2Fsm%2FbyNWSc%2FSdYJzvMf3Ht2SDPPAE1zvg%2F9LeLBMeWtYy6muYotZ6xCcNq%2BIAILZ2gk5rsXAzfRCmVrQ3wUaMJbA4vWUS7QZqTqX0Bbbc5bY8LZOzc8TMD5Px4CrMVx1%2Fj9BdSk%2FoJLDzm5tK9L1m7riaLNXLLGD9vLd87S64L0NAYrQim93Wu5ul5InyQvKmGPiKifVOSDiYqxVcicavfFmg%2B5hY4pj2Y%2FIdJPkHLSjzUEO9QCWFTF9mMkrSv8ZOcY39DPwW43mVwhWRryR3DGl0j7niyvxmnnMleA0Lqso60hfcHSok4ZhCsWXo1NbfjMkHBr0KPuN7JkG4LfmH7BRcwk%2BSxwAY6pgEgh0lGCAmmaz5n%2FcNaRbA19ghgs4a5H6zJ8K3bXKJ2sgRnCEBU9p7nVjR%2FgPEAobpZBwVrd%2FWlBpvY3gMPfTq0r3Ja0pHvNxiLYgiX%2BJm8RhNjTd4yxn6fqaEjQH9aaKP3J3WkuswvqAvxajTgVYwrhP9OZ5J%2BZafUqZFs8V4tONrYC6mly%2FqKRqn4U79uB3%2FsT6KaAxGkUEsGdf4fX0XV0rx0q6dc&X-Amz-Signature=872c9ec2831dacd4cf88c5dc38cad91842d974d910e9346db07beb9021e8c8b1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QQKYHQS%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXMrD%2Fv0k0d2PTfnl%2Bjfpq%2B4bZ8uGKWYNpHiNjoub5EAiBcYQPcDnvTc4AKZ8Hs7MPZnJJDUeQ%2BYkv5ppLkGybgfir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMS3lAT9qq9cs3kQ7sKtwDJ1JkX4XCd5svWJ5v4SzIBS%2B%2F6VBtEg4OKkeEH3jAhxX2IORmY5mMT8nuJjEt8QXvtxBieauGNQRiDxpFgSAIJG%2Fk0dw1ntRCeCfxiRQb8uQGyQU9wDXjfJu%2F%2Bq3azKRbyBTsDyVKrD8JA%2FgSPofVpu%2FB8sCp4xV%2BhYS2xea7uGG9xwdGcS8JssTiS%2BfsgQJhWdDZHOv6%2B8uguZYP%2BF5bn6%2F906nin6hQmRMeUIuY0hCSzvn0AkmRp6k14M7YMGyq1mC9rFM7L%2FtBLiR35r9Br77MMS01NExl5I%2Fsm%2FbyNWSc%2FSdYJzvMf3Ht2SDPPAE1zvg%2F9LeLBMeWtYy6muYotZ6xCcNq%2BIAILZ2gk5rsXAzfRCmVrQ3wUaMJbA4vWUS7QZqTqX0Bbbc5bY8LZOzc8TMD5Px4CrMVx1%2Fj9BdSk%2FoJLDzm5tK9L1m7riaLNXLLGD9vLd87S64L0NAYrQim93Wu5ul5InyQvKmGPiKifVOSDiYqxVcicavfFmg%2B5hY4pj2Y%2FIdJPkHLSjzUEO9QCWFTF9mMkrSv8ZOcY39DPwW43mVwhWRryR3DGl0j7niyvxmnnMleA0Lqso60hfcHSok4ZhCsWXo1NbfjMkHBr0KPuN7JkG4LfmH7BRcwk%2BSxwAY6pgEgh0lGCAmmaz5n%2FcNaRbA19ghgs4a5H6zJ8K3bXKJ2sgRnCEBU9p7nVjR%2FgPEAobpZBwVrd%2FWlBpvY3gMPfTq0r3Ja0pHvNxiLYgiX%2BJm8RhNjTd4yxn6fqaEjQH9aaKP3J3WkuswvqAvxajTgVYwrhP9OZ5J%2BZafUqZFs8V4tONrYC6mly%2FqKRqn4U79uB3%2FsT6KaAxGkUEsGdf4fX0XV0rx0q6dc&X-Amz-Signature=a46e0c72c76215323c18743469defed4703ec8ab965f9b36fb450287cf7c3140&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR7QQD6S%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T061042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDrNDngbTgzyB%2FjXHJ%2BycKOX5zvNUPERvAoyjm0IjM5gIgU%2Br53nFPoYP5imJEcdorhg5hW7IRGmo1OxMEG1msiOAq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDB9cCEc0IpJXztHf3CrcAzmIfe6XC5JbmKkEPL8vA4eaOXNxmWeuAU2HSPLDJJbuQnjpzPv4ieTgF7l8sV27wYwRDQv2FBPvpH7009X1ggttk3OSSI%2Bm64QLykK56Fdd6HH5%2Ba9CYeALGk%2BWkbLZkLFN9IXxfgEqAdBxN%2FugWY%2FVx%2BTWo%2FR069wp9nypw68kr3fnXjLC0ePBnZq9%2FQ%2FIwnVGJvLZEnTkBg%2FSzQo9av%2FHtPzNeh4YLgQPoWRmwqZxEZ2T2y2xkAPUkFqF89kxwPagvNIkVX5SA6SG0DI%2Fhc32W3Booqx3dCGvkUDYbnUZiAME7v%2FvaUxh7LTI4xyHtrcGUMZX%2FR7Bt6zOIudLlIJzJ1DuQwfscO1qVuIJmTy4JXrqbrJhyg8WBmgTWCI8L42bDgrvK8m7mPEuvIIVQnc7MprKi3YmP0q8hc7Xo5vTcJikRdV8Sgq5IEZrQ0Pa5y7RK60FyK2RF8%2BW8EtjQU2oPrH%2FDVvgsrWvqOaCtGRm%2FwjI69UXBbS0V1w7OjZ7tthkAnUXQdgoVmMJacnBa86zbmdrKDGh40O%2BU2NS32vM%2BUlSwtISBbvtfMC8e3znCn9Yd4GujnQoxZAKkB%2BYYS8xzGBj0MtbP9R3BCI%2FHbBvv6htzKxCSlomqa6LMJrkscAGOqUBoSWyRmVWwSZJebowvt0zxR%2Ft4WSi2uely%2FNYMzf7P4GALOJyfcFPRMGF94aEMMiWr6SaiM%2FJ5%2BUM%2Br4KV%2B8oN33la81mlBu1u5VKndMyJuArCfpXuBL9pYyz3kocseufWBVOMTSP%2BsNW1wcBDwKtlSI%2FXCVV78D2hULsEshkkL1CkUxYCPUbnHcb2wZI9SO9qsjqmLzMPF6nAA1XfDAoTaRVlDez&X-Amz-Signature=faff2b137e489245bb6332a5373aac95dd4f9ee90031adf631cf0cb4c50994c9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V6KANAM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T061044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTWRs6pUzcSCvMdDVhIIDuiPx7q5vBGvkp7VMvqSskrgIgG%2B11QwW76TimYM0tR65XHK1wMgKNY3LVVHEinV1FP94q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDCYXGSGBHctnxwn9uircAy0FD4JZzxBosrnGeIpcFfj4Uy3xB%2F9JNs2JQRzLs3Gxhf6159p47fJbYj1dpWXSQQmqjvnwj2bw4oyf51sLmr6JiFxRmlAsCW%2BEn5y%2BP%2Br6xUMho78ena9Vk6zAtLyIX2Rs1%2BfY9VZ%2FGutQKWpa477WHlkGgwJ8k%2B0wYCZzNpmTopiHLFrwJiFWYVRqwaBzWj0Z9EmmV2qV38OTI2dv5TkNAGT2anKHNdnM6OUhLBvkkM384SXDyPuWy%2FY5wHDxPlcvc3wz4SLFklfnxZ3vJIl5xYCtSlxaKVbrkthQOSd5ZtzWmCX%2BEqGrMorLcB3Cf68Ocrirgq77G%2BGyD1%2FKmd3YCMmZCGLo3fXbC%2Fw2XavX2FXqDRnw8BMwmXaNg6ueLlChfqXGlv6JRBEYrBAsAEcC3A9O6XoCuX4%2BXeJHywioHgDveYTo62Yuxrf4yWXur0pdLliv%2FLIb6ML%2BqEm6DxceoStJV5AqNmeuRcnjP4tjm9kQ9iY7SUDC8gYq%2BRpXUXrMOgcu9xkY0C%2B%2FCat%2F%2FT3YPI6yA68T0hIVzvMZ0z9N0ZYNfPI3AdwrvDK7r%2FoeGfSaMQMccECRU19%2BqGxT0h8FFQYhS3SJHPVaM4z9B8Sk0smXPCMCITQJ0OwmMPHjscAGOqUBFpqeICif80AmgBljv39E%2BipARFRmDpjFX9AYda4Prr%2FCFjWIHh2E7Sfg1TWUIfnkwzrTo%2FWdqrHhl6wqGjoYMlK2zGnoXqvYWWw9fouV3mC2KnZmHni8WHNe%2Bw%2FtFqqROnjWEJ1zO3gDF8PLTRhiiMR2qhAocE5lcTUku0zNgH5v5zPV6mAgTH9CBQ7FT3A1qMTZOCjuk6JbgaROSLKBBCgtAML9&X-Amz-Signature=f7f4ea440e4fe28923ca41c841ae468d9468dfc12a574305ce181f32080c5923&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QQKYHQS%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXMrD%2Fv0k0d2PTfnl%2Bjfpq%2B4bZ8uGKWYNpHiNjoub5EAiBcYQPcDnvTc4AKZ8Hs7MPZnJJDUeQ%2BYkv5ppLkGybgfir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMS3lAT9qq9cs3kQ7sKtwDJ1JkX4XCd5svWJ5v4SzIBS%2B%2F6VBtEg4OKkeEH3jAhxX2IORmY5mMT8nuJjEt8QXvtxBieauGNQRiDxpFgSAIJG%2Fk0dw1ntRCeCfxiRQb8uQGyQU9wDXjfJu%2F%2Bq3azKRbyBTsDyVKrD8JA%2FgSPofVpu%2FB8sCp4xV%2BhYS2xea7uGG9xwdGcS8JssTiS%2BfsgQJhWdDZHOv6%2B8uguZYP%2BF5bn6%2F906nin6hQmRMeUIuY0hCSzvn0AkmRp6k14M7YMGyq1mC9rFM7L%2FtBLiR35r9Br77MMS01NExl5I%2Fsm%2FbyNWSc%2FSdYJzvMf3Ht2SDPPAE1zvg%2F9LeLBMeWtYy6muYotZ6xCcNq%2BIAILZ2gk5rsXAzfRCmVrQ3wUaMJbA4vWUS7QZqTqX0Bbbc5bY8LZOzc8TMD5Px4CrMVx1%2Fj9BdSk%2FoJLDzm5tK9L1m7riaLNXLLGD9vLd87S64L0NAYrQim93Wu5ul5InyQvKmGPiKifVOSDiYqxVcicavfFmg%2B5hY4pj2Y%2FIdJPkHLSjzUEO9QCWFTF9mMkrSv8ZOcY39DPwW43mVwhWRryR3DGl0j7niyvxmnnMleA0Lqso60hfcHSok4ZhCsWXo1NbfjMkHBr0KPuN7JkG4LfmH7BRcwk%2BSxwAY6pgEgh0lGCAmmaz5n%2FcNaRbA19ghgs4a5H6zJ8K3bXKJ2sgRnCEBU9p7nVjR%2FgPEAobpZBwVrd%2FWlBpvY3gMPfTq0r3Ja0pHvNxiLYgiX%2BJm8RhNjTd4yxn6fqaEjQH9aaKP3J3WkuswvqAvxajTgVYwrhP9OZ5J%2BZafUqZFs8V4tONrYC6mly%2FqKRqn4U79uB3%2FsT6KaAxGkUEsGdf4fX0XV0rx0q6dc&X-Amz-Signature=76af10cedaff78f438ea58a0b6d473fde944db7011e43fee1059a852c9645139&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
