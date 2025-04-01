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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRZ5F2IW%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCvgSf47FzmixYrliic9BRUA7Zkp5nSIfIxT9QjGAIPrgIhALXYQ%2BrdEmRoTAA4gj77pdTHpgnE4YISZRGkXDHj5aGMKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLsUYqlH%2BDKrWsULEq3AMJIfCnc2YKj0QqnRi3%2BUS5fkjA%2B3Yp%2Bi9XHxO8GHWJ2j4CnRK0CXC2DboMC08f2UE4K%2BZdZLMlaTJVJAq7l7E%2FcYblcOj2FtuDulGFEcNSYHCZp023BCG10ZnIxthpgvdC9luCSspEsmt8RsfSrKTQDPZDM7ltPZWUyIE4JaSAiLxAOl%2FIbXhyJqGti4ssWdi3YRyGu49h7qsrJ5pjL62CpURke1gB9eeUAPanrKzlWIierD%2Fxn%2BQTRzo0e0frsim%2FKEQ2CSaou6An6vtquWgQYktPK3GQVxVOZHciLKbwnnQv6QykfVm1WsIxR7t80x%2F%2BP8lrn3GppoFjmXQl1OlxlvlWjXc9fo6e4JsBZRFbVw7mVA07Q5MTH3MUrOphc4stFqz2wglPozh8I4p3mg4EYy3H38WYw8s%2F5nCC0%2BZHzAsFJE1GhAejPFc8Hkn1oVN9Zct1OH5JQOBNgnh5WxI0rRTZqXwy1aZRucD0ttr4XYXA5U9S7hK1eWehFXEBrODUn0zcbaq6H%2BYF%2Ff5dbg1X%2Bh6lKS1dKBSmqW5FaIKb%2FdpKt4F5a8OLfxnhsbwfJTIo9UWHlOImsoJviggUMyQtSUoW8Jb7uKm9V1y3TIkN%2FDkUFIWHij5y40%2F4hjC3iq2%2FBjqkATyMgi0daZINE36HUjjbw3cGELqSt2mTTsM2gJenEXWNlmFf7PeaRtdqg38UrDKHImFFxkH9B5lZ6xCjd546qVpZ2%2BLJN%2FssrikIsqg3bdAc3afz3t1Z5nalLlfFn3Osu287XQLRCgEUShGWxt4TUI0Zm2hD2Y9WEhayAzXJAGe2BGZ3zqKZ7YfMhCJNEA2Yex2x5awnMoLtuqyss5zMFXMDkblL&X-Amz-Signature=4322c04dd5d238a97e684545763887996c6f5e37d1b39be3ac240e5b1f24f7dd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRZ5F2IW%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCvgSf47FzmixYrliic9BRUA7Zkp5nSIfIxT9QjGAIPrgIhALXYQ%2BrdEmRoTAA4gj77pdTHpgnE4YISZRGkXDHj5aGMKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLsUYqlH%2BDKrWsULEq3AMJIfCnc2YKj0QqnRi3%2BUS5fkjA%2B3Yp%2Bi9XHxO8GHWJ2j4CnRK0CXC2DboMC08f2UE4K%2BZdZLMlaTJVJAq7l7E%2FcYblcOj2FtuDulGFEcNSYHCZp023BCG10ZnIxthpgvdC9luCSspEsmt8RsfSrKTQDPZDM7ltPZWUyIE4JaSAiLxAOl%2FIbXhyJqGti4ssWdi3YRyGu49h7qsrJ5pjL62CpURke1gB9eeUAPanrKzlWIierD%2Fxn%2BQTRzo0e0frsim%2FKEQ2CSaou6An6vtquWgQYktPK3GQVxVOZHciLKbwnnQv6QykfVm1WsIxR7t80x%2F%2BP8lrn3GppoFjmXQl1OlxlvlWjXc9fo6e4JsBZRFbVw7mVA07Q5MTH3MUrOphc4stFqz2wglPozh8I4p3mg4EYy3H38WYw8s%2F5nCC0%2BZHzAsFJE1GhAejPFc8Hkn1oVN9Zct1OH5JQOBNgnh5WxI0rRTZqXwy1aZRucD0ttr4XYXA5U9S7hK1eWehFXEBrODUn0zcbaq6H%2BYF%2Ff5dbg1X%2Bh6lKS1dKBSmqW5FaIKb%2FdpKt4F5a8OLfxnhsbwfJTIo9UWHlOImsoJviggUMyQtSUoW8Jb7uKm9V1y3TIkN%2FDkUFIWHij5y40%2F4hjC3iq2%2FBjqkATyMgi0daZINE36HUjjbw3cGELqSt2mTTsM2gJenEXWNlmFf7PeaRtdqg38UrDKHImFFxkH9B5lZ6xCjd546qVpZ2%2BLJN%2FssrikIsqg3bdAc3afz3t1Z5nalLlfFn3Osu287XQLRCgEUShGWxt4TUI0Zm2hD2Y9WEhayAzXJAGe2BGZ3zqKZ7YfMhCJNEA2Yex2x5awnMoLtuqyss5zMFXMDkblL&X-Amz-Signature=b56427d400a8265774fdc81e972d7c684b43d7faff11bb20dd37e867835c3c7a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NTS4KVU%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQC3GZIerbClJQ9VqzLvcHWjSZj6Xeqv6ftr%2FSbI6D4A8gIgZTcu93ileWm9VgeB%2FROR4Z2yBy2s0rMuPP3U62LGk2MqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyq6aO1aFoY97JxaircAxIiM8JviyR1uVKTU%2BRSXQOA%2BGN6KoQa6NePEEnCfSrQemLCdfrjzmdyNaP9FxZVSqyvX1oVHgsWP5R8nTdick0XFe6XK5WIkr%2FxybUbySTDKhFDGqQc9fshAyB2yXxA2b3AL6a9VyKFY%2FQmt%2BuLtvsU4fXZcBxzdQwFGHc%2BY5%2BivV74UUymaGzOSKpqTSNl5%2BHmUEIMvAS6DOZfzdSCtzZCwGJS4fh8Fke8VuvGoUcvS%2F1PWaXwD%2BHDERXt6KaPeR24Zk9gExkJDNHX%2FXjU9JsxHSoMMIUW14BmUqLt8gXihh0CKro%2Bh0%2Bb2BP3Rn%2F9Hpret3bTL3CbVCSa7pA3Dge6QgXPwpp0DTnS1T%2B7xpZSYniMoWsnE%2Fv7jx5W79TNvv8UnTV3BHzfc8hElYw1p0D7Ii68fWKxdEPkZIS3f1jA0PFj7c55Z35rj8EpYZR7Om6uCZTsoam9wfmuZMpgMMdP7jgOPlCCiElD2JjwKlRWe1efD%2FS4%2Bn1f%2F%2FADCxt%2BFqybdI7cUcBjixGJ8qfiUiomxz2lapR5gxVGlL9cyYoS9aMe3lCcI1fnjOBt3p2GjPAwwxmluPvdAKMnzNGE9yait7ReAn4d2EZp%2FALAGDgtadb9JP0eBJy9El5WMJmKrb8GOqUBxzZracswjaCRIU0uqeJN4KW0Iz57R30ohaLGCK1RsVLEBPZmj4ebP9upg0e3MDpsB3lQ1Yn5ZVBWed13pxQex17hoR8WdbNq8EPOK7Il32K5j3c1yt7cNkBpNEwPqQty%2FfTRw%2FM8EOVghxxzOwlJffyKwJg64kw0PtSY5lA%2FVWaphRd%2FUtdv%2F1F4gdqZCMqCFWA9lCVGIX1pfnKBIJrGdqv%2FPr1w&X-Amz-Signature=25542f5b9dec64b9bbc42c2dc38cd893350e0ab2beab86e118ad269272127174&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KWVDR2C%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCFfKmMsqx0pS535kD4DBA6Jd7SXwiPKgjdFLG1TcBtggIgNOzeqZlK%2Bw2xU60F8SsTWyTmGPMdoL0rnZXUZR5pHEcqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5Uv7s%2BckxkwJWNjyrcA4GHjGhiBRWyc1IV4C48Gcd49lniECPrL1FoGOq14BOnRsglZ%2F32%2BxUaaM6%2FnFjZOqGLKtACcEfxOC3xT0HKthCoF3D8nrUeYpm49wHUX48G3F1WHw3i5FkvhaaqmgDw4yj9Oc4byYtSIQemXh8ERXqqDW1denOM1DRlOOTsBB7HOAF20XS13WgEMpd%2Br2PkNIoV4tCuyfbCDmpSGvjuvOy066QvjOK%2F427y9YmhP38M%2BtwXXTZA1yzV5SHfi8DxQ6sjreiHs3n9OQYjFyRQT3a5FnqSqrGP%2FwAOn06pBIuUfLM3TCT3v2o1TK3eLwqZ%2B0SBDuFmO6JcUe79hNzwRudmkmpAY9T6HmfCjI2J45QBcUd9M3bXzoZ677RbVCwJrp5dnAH9zyg6YRLzFFL0KRFvx9AuXzRpnBFA8ka7ZF3rBg9w7L40Xx%2BOWW6vIWrlk1NjC%2F7ySxC46WZt%2F%2Ba64fDTALZ4c%2B84dNDgQChqd%2FGiZDKqka7edBHkvc83cnO9r8XLzVtqS9nKkRkdEFWXa1bbpRGef1dRnLaeg6i6etKFQPg9duRmA7fMamsc65WucX66RyXx6K1QaVJtvaR1QViAHJ4tbAf%2BMSRQW6XXCOWG4ZcgU%2FUuU4q%2BKdstMIqKrb8GOqUBCj0%2BAsZ4Q%2Fo1DkhS0HyVSuzEV2n5O8fbTWoZpuoi%2BckR2EtvSpfjFkCudZJ4kSDu0D5BaEqD0URxkdnXCXuySpIiXmCDsBAxWzB6fmJVm4jm5DS2PAYfZneux1TarlWX9qptkQ57lPSywm6UB9austE5w%2BLccWi9UJziPF8PFQuhQ4lwAOfc9Y22MG3193XJvh4HL5vgYMXWMERkDLbPGqpOJ6Bf&X-Amz-Signature=dfdfcbb7f2342e626b4956f80c769a6cd26715898d6c22aced673d9cfc8326a8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRZ5F2IW%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCvgSf47FzmixYrliic9BRUA7Zkp5nSIfIxT9QjGAIPrgIhALXYQ%2BrdEmRoTAA4gj77pdTHpgnE4YISZRGkXDHj5aGMKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLsUYqlH%2BDKrWsULEq3AMJIfCnc2YKj0QqnRi3%2BUS5fkjA%2B3Yp%2Bi9XHxO8GHWJ2j4CnRK0CXC2DboMC08f2UE4K%2BZdZLMlaTJVJAq7l7E%2FcYblcOj2FtuDulGFEcNSYHCZp023BCG10ZnIxthpgvdC9luCSspEsmt8RsfSrKTQDPZDM7ltPZWUyIE4JaSAiLxAOl%2FIbXhyJqGti4ssWdi3YRyGu49h7qsrJ5pjL62CpURke1gB9eeUAPanrKzlWIierD%2Fxn%2BQTRzo0e0frsim%2FKEQ2CSaou6An6vtquWgQYktPK3GQVxVOZHciLKbwnnQv6QykfVm1WsIxR7t80x%2F%2BP8lrn3GppoFjmXQl1OlxlvlWjXc9fo6e4JsBZRFbVw7mVA07Q5MTH3MUrOphc4stFqz2wglPozh8I4p3mg4EYy3H38WYw8s%2F5nCC0%2BZHzAsFJE1GhAejPFc8Hkn1oVN9Zct1OH5JQOBNgnh5WxI0rRTZqXwy1aZRucD0ttr4XYXA5U9S7hK1eWehFXEBrODUn0zcbaq6H%2BYF%2Ff5dbg1X%2Bh6lKS1dKBSmqW5FaIKb%2FdpKt4F5a8OLfxnhsbwfJTIo9UWHlOImsoJviggUMyQtSUoW8Jb7uKm9V1y3TIkN%2FDkUFIWHij5y40%2F4hjC3iq2%2FBjqkATyMgi0daZINE36HUjjbw3cGELqSt2mTTsM2gJenEXWNlmFf7PeaRtdqg38UrDKHImFFxkH9B5lZ6xCjd546qVpZ2%2BLJN%2FssrikIsqg3bdAc3afz3t1Z5nalLlfFn3Osu287XQLRCgEUShGWxt4TUI0Zm2hD2Y9WEhayAzXJAGe2BGZ3zqKZ7YfMhCJNEA2Yex2x5awnMoLtuqyss5zMFXMDkblL&X-Amz-Signature=cefceab778da1f11cfe40aa430bb4a7692a0387112d8cd2f5cc440b9670cfbfe&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
