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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O7MSTZQ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7Czlcs18rCDoa5t7xcYaJURy%2Fb6QdbqzRiscw%2BzHs%2BAiAOprxofJPf2ywu37QPJ19iFGFru3JeGVT%2FTUxidvpycCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMLIrceB9tizawpG4uKtwDbf%2BUufAy108y4VnU0kBxVT10rgbRu9MD3NXS16gjwTz73PbDQJKrIrWR2%2FZYrmF9lbK8fWVpdMIdJNm1RBjuLjxGm8t3jhOfDti%2F9CNE3ewe1qsMm75uWu1CuwDxKvNf7kReRXy7blytoRQghGNPLaKXAW6C3Zl8PLvHWjC1w7O%2Fcu6ooQ8CdqM23lo%2Fh0ce%2Bf6mlZjvsTDtGGIGBbLwEPLTY%2B05q53MtYCYQbusFhmJMmmqTzR1kNwOG2jNZvqRVhFxqSj8pH1fppBEfFkZCbcEVK88B9KM5%2FjnUbQUHIfqzZtFAc7yfML1078zRPSlRzaBz1mp7LAOs4uWzixOc%2Fb7Cn3magGIoGTgux%2FeC%2FB0XaZ%2BwcoJU0S3hwSGGyTTjk4irLp3l5ND%2BB%2F0CSwJ96eDxFfJ7N5Ody98T1rT82cxQZswZagZAcLFeReObQJv5UT4ad2VUuU6790bSxuXn8FiILCFUmgK0fmHpf8Q9hoJOozKlsfLRAsGQKllQ6rrInPnR%2B%2F15%2BdtQmEl3lXNuj880cb781k0B45xqFltpowwvvpAxjrl1Hq%2BzGYcJ4Q0%2Fdk70P36VLHIHBBuViJsTLuV34wsB6fEaOuUk1A3IQtJsgXE5xZoJMmC4mEw78nYwQY6pgGOVLGV4buV2B6Xs5C1Iq%2F4F9jWyMMZFSYCeWL8FI6N%2BbdoD71Bbt9asHU8gFOyGL%2Fg9vVbWvW1S6grgBPP8eh3OS1%2Fga2F4gN%2B9L1LM%2Bxz3yhYIWSR5fykiMdwUEaXF3xmw%2FL8LTUkVJVHiBk99RrN%2BY8yFkpJMKQTqUVkPuu8D%2BUS5dxLMLME4QEdOm0gPDcPL58s2RBCnmy4MKqPg9R4I7qzAWAC&X-Amz-Signature=17fb79c549f7a91d504375b9ae06dc327ef6ba66755ba7783c9a73a9983e42ee&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O7MSTZQ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7Czlcs18rCDoa5t7xcYaJURy%2Fb6QdbqzRiscw%2BzHs%2BAiAOprxofJPf2ywu37QPJ19iFGFru3JeGVT%2FTUxidvpycCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMLIrceB9tizawpG4uKtwDbf%2BUufAy108y4VnU0kBxVT10rgbRu9MD3NXS16gjwTz73PbDQJKrIrWR2%2FZYrmF9lbK8fWVpdMIdJNm1RBjuLjxGm8t3jhOfDti%2F9CNE3ewe1qsMm75uWu1CuwDxKvNf7kReRXy7blytoRQghGNPLaKXAW6C3Zl8PLvHWjC1w7O%2Fcu6ooQ8CdqM23lo%2Fh0ce%2Bf6mlZjvsTDtGGIGBbLwEPLTY%2B05q53MtYCYQbusFhmJMmmqTzR1kNwOG2jNZvqRVhFxqSj8pH1fppBEfFkZCbcEVK88B9KM5%2FjnUbQUHIfqzZtFAc7yfML1078zRPSlRzaBz1mp7LAOs4uWzixOc%2Fb7Cn3magGIoGTgux%2FeC%2FB0XaZ%2BwcoJU0S3hwSGGyTTjk4irLp3l5ND%2BB%2F0CSwJ96eDxFfJ7N5Ody98T1rT82cxQZswZagZAcLFeReObQJv5UT4ad2VUuU6790bSxuXn8FiILCFUmgK0fmHpf8Q9hoJOozKlsfLRAsGQKllQ6rrInPnR%2B%2F15%2BdtQmEl3lXNuj880cb781k0B45xqFltpowwvvpAxjrl1Hq%2BzGYcJ4Q0%2Fdk70P36VLHIHBBuViJsTLuV34wsB6fEaOuUk1A3IQtJsgXE5xZoJMmC4mEw78nYwQY6pgGOVLGV4buV2B6Xs5C1Iq%2F4F9jWyMMZFSYCeWL8FI6N%2BbdoD71Bbt9asHU8gFOyGL%2Fg9vVbWvW1S6grgBPP8eh3OS1%2Fga2F4gN%2B9L1LM%2Bxz3yhYIWSR5fykiMdwUEaXF3xmw%2FL8LTUkVJVHiBk99RrN%2BY8yFkpJMKQTqUVkPuu8D%2BUS5dxLMLME4QEdOm0gPDcPL58s2RBCnmy4MKqPg9R4I7qzAWAC&X-Amz-Signature=e1b35301456aa4c43b7f332de533c18fc601684daafa1db4fad526b1567f0fd0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O7MSTZQ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7Czlcs18rCDoa5t7xcYaJURy%2Fb6QdbqzRiscw%2BzHs%2BAiAOprxofJPf2ywu37QPJ19iFGFru3JeGVT%2FTUxidvpycCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMLIrceB9tizawpG4uKtwDbf%2BUufAy108y4VnU0kBxVT10rgbRu9MD3NXS16gjwTz73PbDQJKrIrWR2%2FZYrmF9lbK8fWVpdMIdJNm1RBjuLjxGm8t3jhOfDti%2F9CNE3ewe1qsMm75uWu1CuwDxKvNf7kReRXy7blytoRQghGNPLaKXAW6C3Zl8PLvHWjC1w7O%2Fcu6ooQ8CdqM23lo%2Fh0ce%2Bf6mlZjvsTDtGGIGBbLwEPLTY%2B05q53MtYCYQbusFhmJMmmqTzR1kNwOG2jNZvqRVhFxqSj8pH1fppBEfFkZCbcEVK88B9KM5%2FjnUbQUHIfqzZtFAc7yfML1078zRPSlRzaBz1mp7LAOs4uWzixOc%2Fb7Cn3magGIoGTgux%2FeC%2FB0XaZ%2BwcoJU0S3hwSGGyTTjk4irLp3l5ND%2BB%2F0CSwJ96eDxFfJ7N5Ody98T1rT82cxQZswZagZAcLFeReObQJv5UT4ad2VUuU6790bSxuXn8FiILCFUmgK0fmHpf8Q9hoJOozKlsfLRAsGQKllQ6rrInPnR%2B%2F15%2BdtQmEl3lXNuj880cb781k0B45xqFltpowwvvpAxjrl1Hq%2BzGYcJ4Q0%2Fdk70P36VLHIHBBuViJsTLuV34wsB6fEaOuUk1A3IQtJsgXE5xZoJMmC4mEw78nYwQY6pgGOVLGV4buV2B6Xs5C1Iq%2F4F9jWyMMZFSYCeWL8FI6N%2BbdoD71Bbt9asHU8gFOyGL%2Fg9vVbWvW1S6grgBPP8eh3OS1%2Fga2F4gN%2B9L1LM%2Bxz3yhYIWSR5fykiMdwUEaXF3xmw%2FL8LTUkVJVHiBk99RrN%2BY8yFkpJMKQTqUVkPuu8D%2BUS5dxLMLME4QEdOm0gPDcPL58s2RBCnmy4MKqPg9R4I7qzAWAC&X-Amz-Signature=d2e7c12cc746110424ad488abbf4b1b697c013428bfdf10cf264d8b47389c24e&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYFRB3AJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlrqeiyPSZ9orSEzbqbGwcUxstmywmetxZjxsqim0nsgIhAPmyde3FP67R1AZ%2BoHX3tOK0zKFhEDVbgI2oNIYVfhe7Kv8DCGYQABoMNjM3NDIzMTgzODA1Igxj8KKH4cjapoH89a4q3AN%2B%2BxWp6OiwbEndxeXwb6FBt0K737PR0x%2FE8pQAL2NbxaY4NPStONs1JPcDJ%2Bln%2F%2F1gQ2X%2FJp%2FXxLm71VTMVjawhyB1jIUSccM3991kjU0MUeb4mWA%2FEJ4OdnQTgJe6Qx1MaLDzJQy3Kvc9bEf2a7mtlCmgIUu3BvO%2BJpb6Fpo7uBwWP5KFAUNDxPHqYxzjIKkU8ljfJLHVXcNm5b0rT20Qa5A4SSurSmR%2BF%2BVwh%2BDEqvAiDI0qvfXIPCuCjr7JV1gkBPVkI%2BC0BEBRT0TZFh5P%2FyCAzkUIqlzCiS9qDOrB90FcO6ppTfj4KakrFO51gTV0zVruGR4XCPYenYXmA%2FcAFsKG0TVNJD7zEe9Hzn9lOj9M4KeJhfNHPYcwRTVIiZcSd6xiY63JKbM%2BVm8KJvg26J8n2acv%2FBnmRtz6xe82lwT2%2FriivIT%2BXTK%2BtSm7ZIXXhe521BqtlPWgULhAkiVsKgYsf67HdFaJZsJsyGH8xLLdcYh83UwvgVKHgpzeYcjUaiLAUky%2F8z9OTq%2BK7oFVGSVnbYg7A1YFVnzz%2BqtSY%2ByygFZcWDetYDCFKQGiAN5ptf1kNDH%2BNP1mh6RnNvRUgak32W8a7gkYBNivIbbVYjKst7N%2BufaMhMwLfTCtydjBBjqkAXD%2BycLcoCxy7GdCPxrCQeM7qkRgKmApaMRJcaZfl64QWl%2BkznXNqJ1MS%2B0mU0z77FDpVh%2B1UD%2BdVaCqGf%2BhDDpyupI4RSjaKbssEqahEglj4%2FQRSHSh9Wnbbod2R2CIHp4Ha6hh7ILhto%2BrZhgxQGeNZjXdE4u2%2FJ7V8Vprefq56Vfb%2FUQtLmr0nR46zVNIgxPtxKN5HZL%2BWHl2lcJCTcu8jjz1&X-Amz-Signature=691054a6ad1743dc37ec3f57a3f67da20359e8bfd75d5e9a2a58ebedd730b205&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYV26H2K%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHdxntymIfOrB9Op4Dm2qaf51mj3Lvy8N6e%2B4Eih%2FFfIAiEA3lZbx62kF4KFkj%2FS76vKcx06JiwUmdk5pNWi4Tvlt%2Bkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDCiF3RqoEWJcOVnswyrcA3ssb3ulPGraV%2BW8VcUlx%2BAwlx9PYwF%2BD0bsn9gfK46hBmBWrvK5qTPwFu8scX8LtWXGmYo612936GVWq7YB%2FkOi87WXR2RsSQ5eHPn%2FIrbJcKRxF2hhxDWFiLdjFYnVXViUUPxrJq1v%2FVyiL7dA1unwVVo9fiAwdwZECzgVVUv9pg6qK%2F6rxH0fG%2Fo2CG2G0NVplfcHfo9i4%2BRgTbr2W5vwwR9l147YowAn0o9Tt0Uif%2ByzUATL9i%2BhuiNC1%2Bz46NtQmdSbFBSii49JMLhZ8DlnpyzcD5%2B8wSExW3r%2B0xmyDcARRkdHXAUHKfbdUZxDUIUr%2FkFrUdVj4bZeDF6JrY8hbvZwpb%2FM1%2BPvVUge9rzS8YlgNyL9CzVBxcWcG25vZS5yvfyKGCh1iGz9ev3rsQux32xD94A9KfMMPf38901EZwRdw97hEFzdtEFCvFR9A5g%2B7mAKvxcuTs%2BizHUz%2BrMb2mtw5dXBWcMpArGSxo9icg%2Fh9vNc2QUz85Z8sELAZBniZtjJsihkC3K1emfSYlytFKT95pLK59bIS9Ze7UK7ACBXot9rxnYQeNlBICnxCLEdAfVcU9f%2B4knsQRpFd0vedjLNAke6NX3CjCJ76wJZL069WSpZ1A6RBU5wMMvJ2MEGOqUBgGi%2Fuxza3P5yjC8uvs73cxu2QVIZOY37fKMjAFLCu2MwGlmRtq96CkxlV6mQ%2FhnVDrpEZ0aFHXKx6zXRG1%2BFtw6UG7oxamjra1yazEmgbN8%2BmDzrgUueyY5JsmPwIFnL4DdDZKThTla2uqtSEWI%2B6ewS2fPdLZbze%2F2xd180R7qEybEtSJz86Y0YxLkM1gePQqFirdL5qQSHxBpjQQQkbi9ODIM4&X-Amz-Signature=821a38b921e206222c5e630634ed494c120cc140cbc49a98829affad81e3b946&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O7MSTZQ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7Czlcs18rCDoa5t7xcYaJURy%2Fb6QdbqzRiscw%2BzHs%2BAiAOprxofJPf2ywu37QPJ19iFGFru3JeGVT%2FTUxidvpycCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMLIrceB9tizawpG4uKtwDbf%2BUufAy108y4VnU0kBxVT10rgbRu9MD3NXS16gjwTz73PbDQJKrIrWR2%2FZYrmF9lbK8fWVpdMIdJNm1RBjuLjxGm8t3jhOfDti%2F9CNE3ewe1qsMm75uWu1CuwDxKvNf7kReRXy7blytoRQghGNPLaKXAW6C3Zl8PLvHWjC1w7O%2Fcu6ooQ8CdqM23lo%2Fh0ce%2Bf6mlZjvsTDtGGIGBbLwEPLTY%2B05q53MtYCYQbusFhmJMmmqTzR1kNwOG2jNZvqRVhFxqSj8pH1fppBEfFkZCbcEVK88B9KM5%2FjnUbQUHIfqzZtFAc7yfML1078zRPSlRzaBz1mp7LAOs4uWzixOc%2Fb7Cn3magGIoGTgux%2FeC%2FB0XaZ%2BwcoJU0S3hwSGGyTTjk4irLp3l5ND%2BB%2F0CSwJ96eDxFfJ7N5Ody98T1rT82cxQZswZagZAcLFeReObQJv5UT4ad2VUuU6790bSxuXn8FiILCFUmgK0fmHpf8Q9hoJOozKlsfLRAsGQKllQ6rrInPnR%2B%2F15%2BdtQmEl3lXNuj880cb781k0B45xqFltpowwvvpAxjrl1Hq%2BzGYcJ4Q0%2Fdk70P36VLHIHBBuViJsTLuV34wsB6fEaOuUk1A3IQtJsgXE5xZoJMmC4mEw78nYwQY6pgGOVLGV4buV2B6Xs5C1Iq%2F4F9jWyMMZFSYCeWL8FI6N%2BbdoD71Bbt9asHU8gFOyGL%2Fg9vVbWvW1S6grgBPP8eh3OS1%2Fga2F4gN%2B9L1LM%2Bxz3yhYIWSR5fykiMdwUEaXF3xmw%2FL8LTUkVJVHiBk99RrN%2BY8yFkpJMKQTqUVkPuu8D%2BUS5dxLMLME4QEdOm0gPDcPL58s2RBCnmy4MKqPg9R4I7qzAWAC&X-Amz-Signature=b531a03129c52233fec46f854f935806cd38317adeee752d4f91f60c6779b715&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
