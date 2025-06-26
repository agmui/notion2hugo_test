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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNNSOXKD%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T024036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIHrUpN1fkCRiQfJMEh8J5G6ZDnMiANw%2FKT%2BmAeaM4PkBAiEA3Kai7DL6%2FwVEhh9fWpeIv%2B1UKpA90LCi0vk72Zft%2BRgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDFtE2qy6U31PQ%2F%2F0SircA0Oyu22hWF5d9ZJKySwAyExe%2B3OyxJKsdMjE6voUk4k9%2BI5EIYC5Isbr6YzaVi%2BFBrHJdlxr%2FDo%2BXpeEems3sB1csFTp5lDsKv07xgm06xPhAQbn6S40FvbtTDlpuUkzbq4ipiM%2F2zVKqHzxwRwQqIWq%2BCvbzZLVC5xodeaLrLnZvW7Xo%2BzsmmrJWbj4DxRUB6hSCcltAvY%2B0nrfq7qxRBJiqWrJr%2F1ASMzHmlhrhdsZsQehDsUF%2FPpURSjwoFJGygUcZ%2FScqmOhHyHJ82sSU8MCDKGUalwQMAsLxF5QG3KZV0urMid6olsj0Gok5QJ9GqG0V10Z5g0yoJ85x13jR5EXQ2R0VyYPRomgmNCwy3vDb4QE7%2BPk5SQa5O8yskEbJ6OQO2eII4tKCIG8C9a7Bw2U%2FwcJj8yB3lEbRH4hTML2CJ90j2WVUUZkIKg%2FIAeDBjyrfGTEKOXU%2Fm%2FcE8YSeLAlMwwqxS2hkftt6BVgLoes9atJ%2FgIjpDw%2BDFQGED0BZ3MSXaheF4ChW2EVVPm51fojIeP%2B7hdR%2FDf9%2BUEeOAIMgRmjyTa0rmfakTHnnfzcajHFL0hNLE66IF4rP0A2NEmYtiz9sN82AK%2BgiM%2FE7faToa0oMPhO94zK6NGTMKLf8sIGOqUBzTCKknPvFJwiSYQ1NWW0u0q0Pgcym0b45sZAhkgUYdumydDEos2llcEEAuQ5FM16NG%2FHaKwZ0oBqgt0rhbadbFMBeQDEE9Yhvf1jjO6RLcG9NcQLPYkeFzmlbq9T9OrhqHinJftWUx6S80R%2F%2Bvh5fy5GgbOb6qNNNONVbn1eYwfNHIHKU%2Bv90xufziYGeRqGnMEuNmKV6KfCVAKPh7eFfnvOE0lS&X-Amz-Signature=a1abbebfc5a0ff65e5141d2efef659f640ef3f1e0816d8ca33d9b0377cab0edd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNNSOXKD%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T024036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIHrUpN1fkCRiQfJMEh8J5G6ZDnMiANw%2FKT%2BmAeaM4PkBAiEA3Kai7DL6%2FwVEhh9fWpeIv%2B1UKpA90LCi0vk72Zft%2BRgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDFtE2qy6U31PQ%2F%2F0SircA0Oyu22hWF5d9ZJKySwAyExe%2B3OyxJKsdMjE6voUk4k9%2BI5EIYC5Isbr6YzaVi%2BFBrHJdlxr%2FDo%2BXpeEems3sB1csFTp5lDsKv07xgm06xPhAQbn6S40FvbtTDlpuUkzbq4ipiM%2F2zVKqHzxwRwQqIWq%2BCvbzZLVC5xodeaLrLnZvW7Xo%2BzsmmrJWbj4DxRUB6hSCcltAvY%2B0nrfq7qxRBJiqWrJr%2F1ASMzHmlhrhdsZsQehDsUF%2FPpURSjwoFJGygUcZ%2FScqmOhHyHJ82sSU8MCDKGUalwQMAsLxF5QG3KZV0urMid6olsj0Gok5QJ9GqG0V10Z5g0yoJ85x13jR5EXQ2R0VyYPRomgmNCwy3vDb4QE7%2BPk5SQa5O8yskEbJ6OQO2eII4tKCIG8C9a7Bw2U%2FwcJj8yB3lEbRH4hTML2CJ90j2WVUUZkIKg%2FIAeDBjyrfGTEKOXU%2Fm%2FcE8YSeLAlMwwqxS2hkftt6BVgLoes9atJ%2FgIjpDw%2BDFQGED0BZ3MSXaheF4ChW2EVVPm51fojIeP%2B7hdR%2FDf9%2BUEeOAIMgRmjyTa0rmfakTHnnfzcajHFL0hNLE66IF4rP0A2NEmYtiz9sN82AK%2BgiM%2FE7faToa0oMPhO94zK6NGTMKLf8sIGOqUBzTCKknPvFJwiSYQ1NWW0u0q0Pgcym0b45sZAhkgUYdumydDEos2llcEEAuQ5FM16NG%2FHaKwZ0oBqgt0rhbadbFMBeQDEE9Yhvf1jjO6RLcG9NcQLPYkeFzmlbq9T9OrhqHinJftWUx6S80R%2F%2Bvh5fy5GgbOb6qNNNONVbn1eYwfNHIHKU%2Bv90xufziYGeRqGnMEuNmKV6KfCVAKPh7eFfnvOE0lS&X-Amz-Signature=23c41d77b2946e646cfeb89ce5adf362412b27596da6b648b6c57fe82f2510cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNNSOXKD%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T024036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIHrUpN1fkCRiQfJMEh8J5G6ZDnMiANw%2FKT%2BmAeaM4PkBAiEA3Kai7DL6%2FwVEhh9fWpeIv%2B1UKpA90LCi0vk72Zft%2BRgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDFtE2qy6U31PQ%2F%2F0SircA0Oyu22hWF5d9ZJKySwAyExe%2B3OyxJKsdMjE6voUk4k9%2BI5EIYC5Isbr6YzaVi%2BFBrHJdlxr%2FDo%2BXpeEems3sB1csFTp5lDsKv07xgm06xPhAQbn6S40FvbtTDlpuUkzbq4ipiM%2F2zVKqHzxwRwQqIWq%2BCvbzZLVC5xodeaLrLnZvW7Xo%2BzsmmrJWbj4DxRUB6hSCcltAvY%2B0nrfq7qxRBJiqWrJr%2F1ASMzHmlhrhdsZsQehDsUF%2FPpURSjwoFJGygUcZ%2FScqmOhHyHJ82sSU8MCDKGUalwQMAsLxF5QG3KZV0urMid6olsj0Gok5QJ9GqG0V10Z5g0yoJ85x13jR5EXQ2R0VyYPRomgmNCwy3vDb4QE7%2BPk5SQa5O8yskEbJ6OQO2eII4tKCIG8C9a7Bw2U%2FwcJj8yB3lEbRH4hTML2CJ90j2WVUUZkIKg%2FIAeDBjyrfGTEKOXU%2Fm%2FcE8YSeLAlMwwqxS2hkftt6BVgLoes9atJ%2FgIjpDw%2BDFQGED0BZ3MSXaheF4ChW2EVVPm51fojIeP%2B7hdR%2FDf9%2BUEeOAIMgRmjyTa0rmfakTHnnfzcajHFL0hNLE66IF4rP0A2NEmYtiz9sN82AK%2BgiM%2FE7faToa0oMPhO94zK6NGTMKLf8sIGOqUBzTCKknPvFJwiSYQ1NWW0u0q0Pgcym0b45sZAhkgUYdumydDEos2llcEEAuQ5FM16NG%2FHaKwZ0oBqgt0rhbadbFMBeQDEE9Yhvf1jjO6RLcG9NcQLPYkeFzmlbq9T9OrhqHinJftWUx6S80R%2F%2Bvh5fy5GgbOb6qNNNONVbn1eYwfNHIHKU%2Bv90xufziYGeRqGnMEuNmKV6KfCVAKPh7eFfnvOE0lS&X-Amz-Signature=f1da283766bb215baa542727ae940039104a40f1cd3ba85c9dec2135cc99bcf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNRUDZOI%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T024038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDN4OdKAXozfnSrj%2F1sqN3YFZiM6NuSIf9OyfsCYYWikAIhAKt6zipyjyLvoLdhxQ3e49MaIYMub0slAwsyZ7VhgitnKv8DCFMQABoMNjM3NDIzMTgzODA1IgyLnkbvS3fDMQM%2Bfn4q3AO0y%2B%2F4OjK5Qx5kzJA%2B7NE1VS78ZelYIMqktZ1DjgE9cjUv4Uspg6SiGaHk6hy72jRp0StuGElNRGlZFu7afT1brw5soHQj%2FvhmOLdB%2F%2BwhF1jVPHejuCxGaEYXyT6T0qcpjh%2By9x3OnwrxY9iBdjgSoDpGKRu7QFs%2FwkS1LuVamfcYPmUzu1q9Bm7gpXLbXvio6xMO264RvCP8IKa2HI1azTAAiGll7pNczF0FHbQfODqEbSdRRPp5xl%2Fq%2FA3zCDcRy6Hk0M1bt5mvVs4%2BmOdn54Ra6DStWj0fVHQM3Q%2BZn4wtdktP1opz9etccNYLZO10x%2BmSWujJRM1LhuW0vZlBbrWmCLym%2BUc8y%2BNfh5M%2FsGjslUr1PXClPC7IlnigB44E%2FsDRJBT7Z47%2BWb4uwwYOZ6dpczuOR6q9n9vJYJWp4IvMIOELBVDl0zwkeTrFywgPzsVCrzpbDd2Y5RQNf9h3eiHQ8lY%2B3uQL77dSYueCEklKYRJoT5Zb1352DNU6dVZX95UtPy40vSPL00lMkdPMul0rLzAjzpHZMvPEI84BS47C%2BdRZEakILfjN2Uo8x%2B69aeVaJiUC87jiNlifaPPIa8%2FzgJl4EyYjXxL6dz1nvQhKUOfnSX3s9MxOqDCT3%2FLCBjqkAXq%2FqfojB%2B5nSahMlOKxzd3DJUJvbQVRoxTx4GxzNpjjtXyLlnIXhlL%2BxE4kVu9YyulavBmQTVROGidCm98NbV9oZvOmKEPH9dB0WkgdAOecrNMxL4cLoEtqN%2B9W51v8QuQ3%2Bc5simNgcV7SjN1kbrY77jz7EpFFG8qbGnx5oC5wJTPAMTeMmhriMHHTwVYGRFGCwGz03Q8AL%2F1wBKPIGY%2FmLPLg&X-Amz-Signature=127f1e86aa9b791f394a91211581b3270df6f9e8aece2ca3f39c1ecf388560b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KAQPODG%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T024039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDzVCeoKWoq4HjBaL8SUB7zOUr963qc8JdEFoDxRgfdJAIhAMaffBBWspSeOKnj%2Fv9cE%2B0WaSna3l6V6JplWkfeYdkUKv8DCFMQABoMNjM3NDIzMTgzODA1Igy5MXabAp0ocq4uaN8q3ANVnU8G3M4seuVJWusFa7I2KPgCBsysKMU3KS21VlJ5IAZjk7ntCn9IeCqRm16X%2BFjw7u1UdTX6nhr%2Bfj8TduNuxVbRauiDAUHURxAtK1DKN%2FTMcifbTF06TWaVl96MPfYAd3OHwxOiezsV72ONPAY7lBZt1%2FsBaY2%2F%2FztYT4jJFJt1PGKNP6kdQVyT8JVJwOnMLvKzzi0M10uSaW6KEikW%2BnuraYEEw2Lv2XHxgCchkz0keX29V6l0ZJpKo5rzjeQXK32EruNo7z2NHfO6%2BFEMIC9vOg9CU8sjTN%2Bv1zGe68piR8yGtqDUTy%2BuqUFoRJ851YkjQ6wksYOmxNW%2F7h%2FGxRs8o0NgvPl%2FrECiYOGGBDka3PWWLGszbEwRd7y85Uig73U5bqQphp2gYMrYil7Kn3gxrpVGrVfc9zZrCnlRU%2FL%2BJ3IfyZSuG%2BLj8CK9mljO3Xmkt5ukbBQzW7y%2BqTY40QTWPI9eKaLVH0LD%2B8dP6XnUPOs4xdd5SIUunqO108fvOsnNeTdRCuTkDt6%2BRKcyR%2B40mcdgHacFR6DzPikPyE7A3fpQoDu3W%2BSzKoeIVPerAlFquPb%2BYGzlGMJd%2F5OtWS%2F2JqKNHtFNgg1S7Nxu%2FQyB7UUzW7ZkuhCv9DC43vLCBjqkAUd%2BpkqP6UeSiR7QHcC7xoMrwuBX%2BIKtt35DUVDibcTLWA7a4iJrqmv2KyEvQMW8%2BnTWlClcqfygSqHwTmfYelBAJP4sBIW28fxxqQC4u1ej5E7jJl0JPpqKRodMeXzl8Riush2Fl5JXzlqT8DJSXl%2FRmTUb3Q5OozGyE%2F8fLHlB68DnS2rPcKhef10v2AZoiN3UuiWLhmN87XXPdTYBuRyOFTjP&X-Amz-Signature=e401ecc7360e5418cae8ea021c87333426cb460c01d0234480c070c0e5a90074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNNSOXKD%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T024036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIHrUpN1fkCRiQfJMEh8J5G6ZDnMiANw%2FKT%2BmAeaM4PkBAiEA3Kai7DL6%2FwVEhh9fWpeIv%2B1UKpA90LCi0vk72Zft%2BRgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDFtE2qy6U31PQ%2F%2F0SircA0Oyu22hWF5d9ZJKySwAyExe%2B3OyxJKsdMjE6voUk4k9%2BI5EIYC5Isbr6YzaVi%2BFBrHJdlxr%2FDo%2BXpeEems3sB1csFTp5lDsKv07xgm06xPhAQbn6S40FvbtTDlpuUkzbq4ipiM%2F2zVKqHzxwRwQqIWq%2BCvbzZLVC5xodeaLrLnZvW7Xo%2BzsmmrJWbj4DxRUB6hSCcltAvY%2B0nrfq7qxRBJiqWrJr%2F1ASMzHmlhrhdsZsQehDsUF%2FPpURSjwoFJGygUcZ%2FScqmOhHyHJ82sSU8MCDKGUalwQMAsLxF5QG3KZV0urMid6olsj0Gok5QJ9GqG0V10Z5g0yoJ85x13jR5EXQ2R0VyYPRomgmNCwy3vDb4QE7%2BPk5SQa5O8yskEbJ6OQO2eII4tKCIG8C9a7Bw2U%2FwcJj8yB3lEbRH4hTML2CJ90j2WVUUZkIKg%2FIAeDBjyrfGTEKOXU%2Fm%2FcE8YSeLAlMwwqxS2hkftt6BVgLoes9atJ%2FgIjpDw%2BDFQGED0BZ3MSXaheF4ChW2EVVPm51fojIeP%2B7hdR%2FDf9%2BUEeOAIMgRmjyTa0rmfakTHnnfzcajHFL0hNLE66IF4rP0A2NEmYtiz9sN82AK%2BgiM%2FE7faToa0oMPhO94zK6NGTMKLf8sIGOqUBzTCKknPvFJwiSYQ1NWW0u0q0Pgcym0b45sZAhkgUYdumydDEos2llcEEAuQ5FM16NG%2FHaKwZ0oBqgt0rhbadbFMBeQDEE9Yhvf1jjO6RLcG9NcQLPYkeFzmlbq9T9OrhqHinJftWUx6S80R%2F%2Bvh5fy5GgbOb6qNNNONVbn1eYwfNHIHKU%2Bv90xufziYGeRqGnMEuNmKV6KfCVAKPh7eFfnvOE0lS&X-Amz-Signature=fa857f1716f1757478c1d2327479075dc5b31bb9513700c39c048982c325f926&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
