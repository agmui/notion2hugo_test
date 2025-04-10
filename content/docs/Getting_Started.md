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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6M4AMOZ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCa%2BfLpvrTJkl0hGmNihtv19owRPOfdKX2vv5ACqfZI6AIhAMfmPDiUU9OJhybf58jhkYmvVJoLPhXW21X76htba2SCKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzC1SHSSB43JKK7ftEq3AN2V3jD%2BL9jBEJ4RrYlnuJXelRzTd7s0VGTfApcJpNAL07sh5HuBKMABAoU2rPbZLOXctDG%2FaE3kLLnL01L6Y%2FWNyS%2FFQvnHSDiqsV78pt8T7aHjDOc74UxR7ppLDHZ860JtfEGU9gyKqSfiotfgYg4%2BuqNzp7U7NPIhVxLX54jMgtaqHyCOFmlrCvzJO3Fbps5nYyCWmewaZW%2Ba1BhMWCxgg1EAA5z73YiyrXEBN9OYii9pfkoXX2gIZkJ9DlZKV0xU8WTG3z5GW2IqfF3mjI8kndNhvsIFKdBd6eZffm8VsVMJVJyrrnQWw4b6ElFdPzuXtjrXFlqg6%2BP4wQIlvDt8XyOp75nFGDekbETmYPLybCSI2RgSGxi4JApeYbdwHmQUmmcVs0Q9hCYN64aNiifjGlayxHCOniRJM%2BBmuf1bzusT7IiiuzWZMB7jVqRq99E7GlK2vHtN0wABZTNkn3KKdvh71G16pr%2B2JgaIuzzJDV1IRFX5zJ7KIHicrcoPUCylGF9AKjPoASbWMhcbd75G50YAwGtD%2FqsdkGzZEAT%2BbdxX4XYhmccHkDhLh4irgnDvFDs8xfipr0iw2bdBCmlQ45FF7t8AaXURR%2B9uwKJL5KJl6XaGu22qaGqeDCr892%2FBjqkAWtCcKe8%2BBmmu4codtCT%2FN2RTcmQc4FC28Mts3ITRbo9QSi%2FJ9WvNXTzJmWZxU%2FL3c2stnN1CNWB5NC8nFbEMmZHmpFxlcVLabJgh7malZ1eNlZVjqf0%2FwQsO%2BC3DvW9FvpRQRxLxqgq41suwvu4EYPTE9Vu3K6zu4NuhvpHdzuksInbmsy4yAQI71BLv%2BAFJg8F%2Fpe2R1scPg6JN7guqshpC08W&X-Amz-Signature=a76b9f469a0bea465d5cb6fa0860df0e3fc66c8b29666971311e34c3d1be1d42&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6M4AMOZ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCa%2BfLpvrTJkl0hGmNihtv19owRPOfdKX2vv5ACqfZI6AIhAMfmPDiUU9OJhybf58jhkYmvVJoLPhXW21X76htba2SCKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzC1SHSSB43JKK7ftEq3AN2V3jD%2BL9jBEJ4RrYlnuJXelRzTd7s0VGTfApcJpNAL07sh5HuBKMABAoU2rPbZLOXctDG%2FaE3kLLnL01L6Y%2FWNyS%2FFQvnHSDiqsV78pt8T7aHjDOc74UxR7ppLDHZ860JtfEGU9gyKqSfiotfgYg4%2BuqNzp7U7NPIhVxLX54jMgtaqHyCOFmlrCvzJO3Fbps5nYyCWmewaZW%2Ba1BhMWCxgg1EAA5z73YiyrXEBN9OYii9pfkoXX2gIZkJ9DlZKV0xU8WTG3z5GW2IqfF3mjI8kndNhvsIFKdBd6eZffm8VsVMJVJyrrnQWw4b6ElFdPzuXtjrXFlqg6%2BP4wQIlvDt8XyOp75nFGDekbETmYPLybCSI2RgSGxi4JApeYbdwHmQUmmcVs0Q9hCYN64aNiifjGlayxHCOniRJM%2BBmuf1bzusT7IiiuzWZMB7jVqRq99E7GlK2vHtN0wABZTNkn3KKdvh71G16pr%2B2JgaIuzzJDV1IRFX5zJ7KIHicrcoPUCylGF9AKjPoASbWMhcbd75G50YAwGtD%2FqsdkGzZEAT%2BbdxX4XYhmccHkDhLh4irgnDvFDs8xfipr0iw2bdBCmlQ45FF7t8AaXURR%2B9uwKJL5KJl6XaGu22qaGqeDCr892%2FBjqkAWtCcKe8%2BBmmu4codtCT%2FN2RTcmQc4FC28Mts3ITRbo9QSi%2FJ9WvNXTzJmWZxU%2FL3c2stnN1CNWB5NC8nFbEMmZHmpFxlcVLabJgh7malZ1eNlZVjqf0%2FwQsO%2BC3DvW9FvpRQRxLxqgq41suwvu4EYPTE9Vu3K6zu4NuhvpHdzuksInbmsy4yAQI71BLv%2BAFJg8F%2Fpe2R1scPg6JN7guqshpC08W&X-Amz-Signature=fd4f7ae47e7f85f96d08a1764aff48a8980a6a3d8fa48027c3f1ed16fb5e2701&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QALWOWPO%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDou4RkJM9cq9T90c6Z2fa4TeYKzDpOUtSmo2yztkggrAIhANlu7%2BaW6zEUYoxJfHga9VGi%2FBejf7PCPdolKnxOifImKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyjvqy8zC1t5PC1FO4q3ANI3DbhcJOU6e0AB0s0A964XRBR878iFKXeHyCgBG1f50zY%2FgE4rZvuVR50jMae%2BIV2aS5Dxa4JAE2nq59kp4YWGCbfrRAE2Oq%2BiiG5vOVZORDWTKP%2FHUA6uyvTpaB%2BzfNIrmQhtA92Z8EkdNhVQN%2BIxekvDeEWJ4ejjwcwpsqVdXq6MREv30jpLMf18YF8ouQ3sUwaINRx9BIyIzNmnBgoPYIg7rOaU8N9vXyShZPptcjcvZEvjPq%2FKWVkXThIhjvBS6V3JyQzVGRjhc08e7JlmUNlALkxj7Zr%2FPd581KIy0zy0pBGvvImlOC02sfMDfJHgXcBEPXTASTx1vaQJ4%2BMrJrO8c3QkWBl5EuoTtgixHQa%2FjxKh4sWd2YeE1dUjAlTpPgVdtNiVBKft6qAzC1YWGqVfS1Ptljj5%2B%2BmzsPmkfRcS5bh28xGDaDOzi5TJ2zwslfvxgPov416eRrmU6WOM1wvhiIPw2oOdw%2BfvHVBlKWE4B%2Bh5VGIOAnpX2OFDzBDvleezJhxosx3vsK6pVch5p6Q%2BGuQNbj9oua%2BMYqUjvTJ8sAOS71VY7jxXlswbYXxX4VyEZZdtug3DZWzI9HJkbOTxmoZr2%2FpUlk6Cw35xkjBQhJQcN2Vtyg4SzDf892%2FBjqkASYK087abWsXgeaYvTVgdW2aiFjcKm9afrOyXlP4QwKSoO7PUoXCDFr8sKTKGOEYrRdJFcMljWpYhD%2B9jXCCnme9JUz0lyW7RfmxgcVIz4yU5PuO7KZ%2BuVjAbQ2UbX4%2FiXyHIp%2Bvw1t4BmJFpl%2BeSfaE6NefrzenpkCoKV99nhrZ3p0waBfdUO5ND3ze2XYsOIi0fPg8SIXWpEuB%2B%2FmUr12L6i19&X-Amz-Signature=fc84f5cda86b64efe418b397806437341d45e3c5a2ff32caa3ff5152eadba0b3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBZWPF2I%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQD6JbjBshaQS6sBY4KFAiglhHCkbEOyTYkUUXEcqeqbewIhAN%2FAokBCBYZH24SiUO%2BWNQaipJvWbizeDAnsYqiE9HnTKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXj33izrtkph3L4foq3AOUvLT2Ao9xJltKjBluDKSKIQ6bwJOM7nIWbmLGZT8jhsk4E%2BeCGtNWqc7we3PSG2zK7S%2BSoWWRJkfJ4AdvDn1U8cuGZERC5PxscKGGs2ZMVWe%2BExos5moSVLhEF3zZPxoNUhV6wtdFWQ37cm%2FzOFJKIEhLG40rifwfCgFhjsFb0%2BYExkFtuq%2BonPNKhMG4NP%2FReYfDC1NyLb2O4L6C3EjMjaMikSmXB48D7MLV9BmobquXBUl%2BRNJZfM9H6xFgQd5MdpcxI3ay2wVKUPuVvTPOCGsb86J57pJ83T3gV1lKRSuwEXosPdhCpz%2BvkuKBivsfuhZtdbNtcmav0u39Q%2BjpK3cbjT1%2F1tM3pLT%2B3xbYM96MTPzsjHpqMsLi5PGXORIwU4QFFrDe1CaYHNKZ4CFqIn5NicWr%2FIrZVY2dorDmibomjPPYmh3Lof9PzQmd47q4gLzJHJ0JcH0wWtfygIsN9LNhkLkfdhNJStVEqopr6sdkWcSp6QKv2l0wYl31cVQ9X%2Biib2Y1ZBAt1a8sVQKO%2BvARQZV6ILyCkrfpxTM%2FCasb3SuYVt2V8GmrL1sQ3oAgor3su5cZRt6deF3iuR1T2pvnOvRgDvF7v0wCaALiz0NdXPBkTcUVCzWV0TDC892%2FBjqkAd0jCMfZPdqWFAM3C5exGqaioKhFZFK%2BXC1PTL981zM7M3ChdQKyJr7m7DOav1U%2BW8KYTH3v8Mgy9aMxMr1D3hZTRQUzaibaPIKRB%2F%2Fp6jXdHgLZZ2a5qPCFMS1YR9ADIswS7ROZgOb2BH9nTx5EoRKjPlc6VD4m4up8ydoVBKvRnPL2h5omo%2BPs5Gw0fBLRtfP0hzWk%2Fze22OxCeDek3XthAefi&X-Amz-Signature=a51a8bb9b2a93cf6a5201fd8d542446b8eb4921214b22a5e73521a7b93580f0a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6M4AMOZ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCa%2BfLpvrTJkl0hGmNihtv19owRPOfdKX2vv5ACqfZI6AIhAMfmPDiUU9OJhybf58jhkYmvVJoLPhXW21X76htba2SCKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzC1SHSSB43JKK7ftEq3AN2V3jD%2BL9jBEJ4RrYlnuJXelRzTd7s0VGTfApcJpNAL07sh5HuBKMABAoU2rPbZLOXctDG%2FaE3kLLnL01L6Y%2FWNyS%2FFQvnHSDiqsV78pt8T7aHjDOc74UxR7ppLDHZ860JtfEGU9gyKqSfiotfgYg4%2BuqNzp7U7NPIhVxLX54jMgtaqHyCOFmlrCvzJO3Fbps5nYyCWmewaZW%2Ba1BhMWCxgg1EAA5z73YiyrXEBN9OYii9pfkoXX2gIZkJ9DlZKV0xU8WTG3z5GW2IqfF3mjI8kndNhvsIFKdBd6eZffm8VsVMJVJyrrnQWw4b6ElFdPzuXtjrXFlqg6%2BP4wQIlvDt8XyOp75nFGDekbETmYPLybCSI2RgSGxi4JApeYbdwHmQUmmcVs0Q9hCYN64aNiifjGlayxHCOniRJM%2BBmuf1bzusT7IiiuzWZMB7jVqRq99E7GlK2vHtN0wABZTNkn3KKdvh71G16pr%2B2JgaIuzzJDV1IRFX5zJ7KIHicrcoPUCylGF9AKjPoASbWMhcbd75G50YAwGtD%2FqsdkGzZEAT%2BbdxX4XYhmccHkDhLh4irgnDvFDs8xfipr0iw2bdBCmlQ45FF7t8AaXURR%2B9uwKJL5KJl6XaGu22qaGqeDCr892%2FBjqkAWtCcKe8%2BBmmu4codtCT%2FN2RTcmQc4FC28Mts3ITRbo9QSi%2FJ9WvNXTzJmWZxU%2FL3c2stnN1CNWB5NC8nFbEMmZHmpFxlcVLabJgh7malZ1eNlZVjqf0%2FwQsO%2BC3DvW9FvpRQRxLxqgq41suwvu4EYPTE9Vu3K6zu4NuhvpHdzuksInbmsy4yAQI71BLv%2BAFJg8F%2Fpe2R1scPg6JN7guqshpC08W&X-Amz-Signature=75a5422b4ee818d513776a43c22f62ee4dba03b1ceba859f0d7dc0d76ff795ab&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
