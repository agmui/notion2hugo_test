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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3SUPWQ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T051428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2B7cmHIAYCeql0MeYPfdgh9zZWD1RKFDlZLTkpGPZn6AiEAw9B8HPltqQg5dNBoMnPkD29Q5pdfcv9k%2FdANDNrKn1wqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFN9SG7VmyK2hAN4BSrcA1FcYRWCWFe7YDPLNrEqgsZ1bTbUQnOsJDVC8USe%2BA1P%2BBqKS8OACSsPy6FCjYoGJLKv2vwfr3poNViqxInEtoTWWL58d3xTHNoW4x7rSDYCEZVi%2F4LJBRkg617tn0UXMGpDs%2FddKoelgWeB6OiQpEGrFGUfmXaEDyV3Xu66upkJmq%2BgKwuQ1%2FqsHcgUICT4Sv72I2OCfdHpLcOfYHxS5vYXhvUQw9Y50JhCEAIxZzJAKcJgY1%2BxKub4m989sbn2Ry5j7nxQXioMmgUl8ilaiYNlLrh83CmOxHIzU5qaZniDyLbnALe9jjBctWR9qHHgwnsJIzjVkDXc2yxGOObKcoNorTEvTPatES2PjGC9I%2BwCEK55eW5qG9RRJoSh0LyyxaZ3YqgwCumB2UhPGD6nH4uAO59WYYEoThvMQbyLakrfiSOjZEr23FRbWWM9Dsw86Q%2B70gJ5KIJ54NqKMt5tgM4zH2NHK5U8rSbOz5%2F9dVp7uh%2BwIUgA8Qc%2BsPRJcDtKn%2BFUD7b1ntqB9r78lyHPgi66LxtCP64b4ffTPowNg7MyRIs9yYXLkBLWjxe7YkVXMPoKgb7%2Foee1E8SCRhgC8ji7i0aW83J47XxhrtmGke335H%2Bw7XGGi%2F9U6Mg2MK7LjcMGOqUBohoY%2F6rQYYX9WbXUApr2o30zQrNT%2FmtAhcPny8gwGlRDJdAglgyuTRhB1Msk6pgXm%2BrxQ0Vklp8Wzw9VsaMdfaNoWAHi7J61GjnRxTefXz5gQcM3jgYpsBlPiqDNRstaUgPFFbRpgSVhNj%2BdyF0pd9CvmCzdWa4N3HoyRV8WXfW8O1LeStsl%2BSvPvQbHIekhoWhfBkqPcBUTR6hw%2FfFmwif68JIJ&X-Amz-Signature=42c03514b08337f19e5ef0e1c62123ba89bba5799ffe6fd14b8e14a23806b995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3SUPWQ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T051428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2B7cmHIAYCeql0MeYPfdgh9zZWD1RKFDlZLTkpGPZn6AiEAw9B8HPltqQg5dNBoMnPkD29Q5pdfcv9k%2FdANDNrKn1wqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFN9SG7VmyK2hAN4BSrcA1FcYRWCWFe7YDPLNrEqgsZ1bTbUQnOsJDVC8USe%2BA1P%2BBqKS8OACSsPy6FCjYoGJLKv2vwfr3poNViqxInEtoTWWL58d3xTHNoW4x7rSDYCEZVi%2F4LJBRkg617tn0UXMGpDs%2FddKoelgWeB6OiQpEGrFGUfmXaEDyV3Xu66upkJmq%2BgKwuQ1%2FqsHcgUICT4Sv72I2OCfdHpLcOfYHxS5vYXhvUQw9Y50JhCEAIxZzJAKcJgY1%2BxKub4m989sbn2Ry5j7nxQXioMmgUl8ilaiYNlLrh83CmOxHIzU5qaZniDyLbnALe9jjBctWR9qHHgwnsJIzjVkDXc2yxGOObKcoNorTEvTPatES2PjGC9I%2BwCEK55eW5qG9RRJoSh0LyyxaZ3YqgwCumB2UhPGD6nH4uAO59WYYEoThvMQbyLakrfiSOjZEr23FRbWWM9Dsw86Q%2B70gJ5KIJ54NqKMt5tgM4zH2NHK5U8rSbOz5%2F9dVp7uh%2BwIUgA8Qc%2BsPRJcDtKn%2BFUD7b1ntqB9r78lyHPgi66LxtCP64b4ffTPowNg7MyRIs9yYXLkBLWjxe7YkVXMPoKgb7%2Foee1E8SCRhgC8ji7i0aW83J47XxhrtmGke335H%2Bw7XGGi%2F9U6Mg2MK7LjcMGOqUBohoY%2F6rQYYX9WbXUApr2o30zQrNT%2FmtAhcPny8gwGlRDJdAglgyuTRhB1Msk6pgXm%2BrxQ0Vklp8Wzw9VsaMdfaNoWAHi7J61GjnRxTefXz5gQcM3jgYpsBlPiqDNRstaUgPFFbRpgSVhNj%2BdyF0pd9CvmCzdWa4N3HoyRV8WXfW8O1LeStsl%2BSvPvQbHIekhoWhfBkqPcBUTR6hw%2FfFmwif68JIJ&X-Amz-Signature=a21017649dbfd448601b7652f6e6b2c60914a88680e5f475c699c1585295eb08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3SUPWQ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T051429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2B7cmHIAYCeql0MeYPfdgh9zZWD1RKFDlZLTkpGPZn6AiEAw9B8HPltqQg5dNBoMnPkD29Q5pdfcv9k%2FdANDNrKn1wqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFN9SG7VmyK2hAN4BSrcA1FcYRWCWFe7YDPLNrEqgsZ1bTbUQnOsJDVC8USe%2BA1P%2BBqKS8OACSsPy6FCjYoGJLKv2vwfr3poNViqxInEtoTWWL58d3xTHNoW4x7rSDYCEZVi%2F4LJBRkg617tn0UXMGpDs%2FddKoelgWeB6OiQpEGrFGUfmXaEDyV3Xu66upkJmq%2BgKwuQ1%2FqsHcgUICT4Sv72I2OCfdHpLcOfYHxS5vYXhvUQw9Y50JhCEAIxZzJAKcJgY1%2BxKub4m989sbn2Ry5j7nxQXioMmgUl8ilaiYNlLrh83CmOxHIzU5qaZniDyLbnALe9jjBctWR9qHHgwnsJIzjVkDXc2yxGOObKcoNorTEvTPatES2PjGC9I%2BwCEK55eW5qG9RRJoSh0LyyxaZ3YqgwCumB2UhPGD6nH4uAO59WYYEoThvMQbyLakrfiSOjZEr23FRbWWM9Dsw86Q%2B70gJ5KIJ54NqKMt5tgM4zH2NHK5U8rSbOz5%2F9dVp7uh%2BwIUgA8Qc%2BsPRJcDtKn%2BFUD7b1ntqB9r78lyHPgi66LxtCP64b4ffTPowNg7MyRIs9yYXLkBLWjxe7YkVXMPoKgb7%2Foee1E8SCRhgC8ji7i0aW83J47XxhrtmGke335H%2Bw7XGGi%2F9U6Mg2MK7LjcMGOqUBohoY%2F6rQYYX9WbXUApr2o30zQrNT%2FmtAhcPny8gwGlRDJdAglgyuTRhB1Msk6pgXm%2BrxQ0Vklp8Wzw9VsaMdfaNoWAHi7J61GjnRxTefXz5gQcM3jgYpsBlPiqDNRstaUgPFFbRpgSVhNj%2BdyF0pd9CvmCzdWa4N3HoyRV8WXfW8O1LeStsl%2BSvPvQbHIekhoWhfBkqPcBUTR6hw%2FfFmwif68JIJ&X-Amz-Signature=2b56297e82a5ff1c9c5d387d91107a99305c77a707ecbbfaf0d43e014e011f53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7A6X4HB%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T051434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDS7Zjv%2BEDGFC%2FCjxeSr4i9NTa1hY6Zkh2hu0b%2BgM6nlwIgLf6sMaaHYiiYvmrXhP951SSWzytlvDfp0nJIQZ0epQkqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpq5nu0hh339ZcZVyrcA6agErxLFeNBcy96Fv8pgCOilPa1wEHIw%2Fyh8N67r8Gm%2FRGaiiGW61WR9qfaFtx0Qf5MVnJJ8DLNC9aIB4EDDTo3Z5kvBmFuKAdjv6jfQHJ%2F2Muo9y8KXPJAjinbj0fl14SrtLMIesvYUKkdulmYXUOBDsvpjHErLJY2BxeRi%2FPRKnTXOcNCp6T5kaG4fwMAziJJapIS8NOWSG7Zcnm1ZJ9ei3kEiWsTZVmhRpU3WDTjoWy9DmVmfX6ynPuBpzMu3uTNlogyYZQZFik1SvDH%2FvtNPVAqm2Y3jdxf%2FiSwYaXihRzAVHGGGFIpKO4trmlFLpY8IsEMDMsNcRi17tUxmg6jJPvV2FEnerWK0DKlBupgycCY1e38bnLrEE2W166DLBvVcpnmFzd02YFncp5TFlstN25iqlhuyL0MfhjyxV6Wl5g14ZFXa5x9dTQpRs6xTDJOjuRMbge5g5Ywhl2Rg0FFyl4wU0UsWyLVQz27hQMP6NQGW3l%2BzfQfm%2BC4g5RetJvHcFGo%2FJWl1wxa92Km%2F0xJaBA3JEy5uS%2F0Eh5UjCYqu%2FoC39%2BfoUFazs1UXmscItBFLYj0E6AHKBDzX%2F875XW3fsxzUwJRlBzccPoaqk0uDGxp9X8UvAhVwwPaMLDLjcMGOqUBrpdpDr10%2FC%2BJe2rbHjXX2ehBpocHSn2VehZdcWmknD0%2B22Yl6q75AxXZXHXF5AC%2Bw%2FlSoDO%2Fdp%2BMUwIWj%2F3A4mYR59XUAjL8XdvhVVnjBpRIrPRPlCordVaTrUIZgB%2Fc6kyY%2BD2Aq9ykdhERuWJcb79MQe7t7Dfa9VYD%2FtnewS5XoLUUsWwVehsNFrGQ8Sa8njUbiOncGKe82Da2IOjeh%2BdU%2FFWr&X-Amz-Signature=4a9d5bf3ee7b1d8e1be90e00f7f8d5820a3ea1906774dd79f1f467b93b153dc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GIB23MG%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T051434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLtHYuAJliI3xe1C1o1%2BJSP%2F6YliMiQVJADNqSBy4B2AIgKYcrBbOOn41blYXPFpVmfrADIwX6IHD7gwSFTqtFjasqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwrILvuPY8mZc6JaSrcA4dq2VxZarv7lfMeHGHLO7%2B1mV3%2FPk%2ByWUhZFqbjM5o0UHB8%2F3K62otyNtYkYB92QDbULNmGM0XhlGIQhw52i6SmC%2FHJ5lzuVEwftFnirC17WK4Yih0Bsw1QlCWnv%2BG2NY6n4htMRmZ8Dvpg6UkDEjXO9CmRnRkugz2WlqTFSKkT7ijxMTxl9rQkP1XjZasW7BhqBz9ZX37AuV7BIB9y6ahKbQYM1t8MB28r4G8cnoHovxZVHOwjioXJguYGwlesct%2FoYv1AFDdbdeHmqxPjjZfVzsg0f7jaRMQomdKFBiFSkmQ%2BcfyeE%2FqPhNoQjseReknWdA4u4qdnAkerTdzWZuWYnqJ6ZTJiPsNNlGgLiHGhbL0TlgRGYQ%2F2sCzNJBQMUBhyzIkEy7XdnJnJZZup5ilCPwB5PQoaDwsIEJK1TvhtAwFMENStjUAcWxbJ%2B31du1oKKq20%2BtrTHd%2BS90pGyqTF34hZ4ScTr%2FpJSvmprM6gT7Wgse8g5UMy4%2BmIWBlEQbQwFMurknIJs40rnvRPp%2BjJbZpGslkoZJqlicZPx3VQWvTNmzwdQZKb%2Bqck0voDVpzCguCP7WdPqg9XLdNdHnm2AKqQ%2FGKrnYtb6QH2bFX1qDt1XxFPtSETtJyLMLPLjcMGOqUBhuw4qgmtp07CgiX3ZxAKTUOUJHUouYrybUqWRy3iB39LP0WVRtvjFKlTTK3vGyckYd0w52vilEFaWbraENPvA15adkw1vXIuWt0FHOU0RKTKgjIhjnLOw6BjHvXRRFvb6lo1eHZvCg0wxf7bYmXVBL70EP3YCW5Mcypyx%2FkqsGBBpJxJPOeGX4rVi7g8mIg7iWCrw3NzfsxM3atV5CKwzp%2FiYYVU&X-Amz-Signature=8e97b2ecac6047b17c47f1815a03e677c1d0d5736a0d0f7f5d5cd8d0705d088c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3SUPWQ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T051429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2B7cmHIAYCeql0MeYPfdgh9zZWD1RKFDlZLTkpGPZn6AiEAw9B8HPltqQg5dNBoMnPkD29Q5pdfcv9k%2FdANDNrKn1wqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFN9SG7VmyK2hAN4BSrcA1FcYRWCWFe7YDPLNrEqgsZ1bTbUQnOsJDVC8USe%2BA1P%2BBqKS8OACSsPy6FCjYoGJLKv2vwfr3poNViqxInEtoTWWL58d3xTHNoW4x7rSDYCEZVi%2F4LJBRkg617tn0UXMGpDs%2FddKoelgWeB6OiQpEGrFGUfmXaEDyV3Xu66upkJmq%2BgKwuQ1%2FqsHcgUICT4Sv72I2OCfdHpLcOfYHxS5vYXhvUQw9Y50JhCEAIxZzJAKcJgY1%2BxKub4m989sbn2Ry5j7nxQXioMmgUl8ilaiYNlLrh83CmOxHIzU5qaZniDyLbnALe9jjBctWR9qHHgwnsJIzjVkDXc2yxGOObKcoNorTEvTPatES2PjGC9I%2BwCEK55eW5qG9RRJoSh0LyyxaZ3YqgwCumB2UhPGD6nH4uAO59WYYEoThvMQbyLakrfiSOjZEr23FRbWWM9Dsw86Q%2B70gJ5KIJ54NqKMt5tgM4zH2NHK5U8rSbOz5%2F9dVp7uh%2BwIUgA8Qc%2BsPRJcDtKn%2BFUD7b1ntqB9r78lyHPgi66LxtCP64b4ffTPowNg7MyRIs9yYXLkBLWjxe7YkVXMPoKgb7%2Foee1E8SCRhgC8ji7i0aW83J47XxhrtmGke335H%2Bw7XGGi%2F9U6Mg2MK7LjcMGOqUBohoY%2F6rQYYX9WbXUApr2o30zQrNT%2FmtAhcPny8gwGlRDJdAglgyuTRhB1Msk6pgXm%2BrxQ0Vklp8Wzw9VsaMdfaNoWAHi7J61GjnRxTefXz5gQcM3jgYpsBlPiqDNRstaUgPFFbRpgSVhNj%2BdyF0pd9CvmCzdWa4N3HoyRV8WXfW8O1LeStsl%2BSvPvQbHIekhoWhfBkqPcBUTR6hw%2FfFmwif68JIJ&X-Amz-Signature=c7b4be9039dcc614259848a5fdd070fcd94afc309fd5b31644fa790a50be5a59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
