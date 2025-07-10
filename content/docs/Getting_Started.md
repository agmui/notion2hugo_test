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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W667TGC%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T034534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGbuvJr8mSvvZuRnyPct%2FP1fJiI2KoyiP7ynAWJmPKdVAiEA33artg4QfUVbJuzwghly74nr8vgk9nUyfoEvdypre18qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEZUaxsNvepEk0wMircAwQOO5WKNFhXxplrdCNTLErjw7nR9DrQmwRn7Mz96I4x41exWxCvhfGFBoHLO3o3amK5iUZqLqfLhjrGcBPxS3BOdZe76Mf5AVzlfPrH9rpw4FtksE%2FjyGPcRiS183BTR7UmNGpZbAA9on%2BnH3SdervaHA3ABIPWxD6amY15NLwK%2Bizn%2Fx0o0kc%2BgFBmn5DPfnz42Qaf450v4wucULLGcu20JhW4RjoIrhYPkFQ0DqqdI7DQ0Gs98dJ87QsReuVWS3UJ9mZ%2BkCQlI1ehUhTgmyQ90tEhzzKs%2F6wyk4uuoKqfBbxrV9QDlKfct0YmZgEbHNEW9doGB1cvBNmCoInmIZAI7XfPxd1Qt5mHHRBl49be2JCdeCMxIscwawU6B6UcL8BbGoYBJp6e9jQ30Ct8P0FRANv0TyrcF8ogp5gks7e1CmqpeUX%2BJZfkEn6D1Ww5gsdEYkpbJuoh%2BhYkwGVGlLCTxuHI4AEVYMz29fMC%2BEl9MSo4tO%2B1MNdf3OPDyTm2N4lzHc9BMswCcgtei2UXi2hlW9ObmWo64rzbF0HXae2zgOgZk2X%2FCKkOznJcbSgjEvhck%2BFPZFOzKPmnlZwVHR9vGXmg40mN2gzS2nwgA%2FZHFZxKc4qyVnPz4vbwMLDRvMMGOqUBdrfT2LQ1TlHR9J8LjvnxFZLt%2FYYzMlIeOq6130fmKgM2jWVm19kp9F32GFrdDUDjXJC5SJFXt0FvnyrILhtacvJaN6J%2BuhWzQ1lu89hBVYeO%2F7QnM%2Fb4KeNBPo0D0%2F49jlvPT4pUnzP9MOtdAY0VXFJFd1hQlO4KpK7bnh6PUGP%2FGsCuiG49JBI6LQc2W6VNDg4xV5TtxUjsXBNT5kZZ1dUY4EAA&X-Amz-Signature=7cecfa429f2e238627479f517f964be558e7a40062d5ec36d7e5c271336de132&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W667TGC%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T034534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGbuvJr8mSvvZuRnyPct%2FP1fJiI2KoyiP7ynAWJmPKdVAiEA33artg4QfUVbJuzwghly74nr8vgk9nUyfoEvdypre18qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEZUaxsNvepEk0wMircAwQOO5WKNFhXxplrdCNTLErjw7nR9DrQmwRn7Mz96I4x41exWxCvhfGFBoHLO3o3amK5iUZqLqfLhjrGcBPxS3BOdZe76Mf5AVzlfPrH9rpw4FtksE%2FjyGPcRiS183BTR7UmNGpZbAA9on%2BnH3SdervaHA3ABIPWxD6amY15NLwK%2Bizn%2Fx0o0kc%2BgFBmn5DPfnz42Qaf450v4wucULLGcu20JhW4RjoIrhYPkFQ0DqqdI7DQ0Gs98dJ87QsReuVWS3UJ9mZ%2BkCQlI1ehUhTgmyQ90tEhzzKs%2F6wyk4uuoKqfBbxrV9QDlKfct0YmZgEbHNEW9doGB1cvBNmCoInmIZAI7XfPxd1Qt5mHHRBl49be2JCdeCMxIscwawU6B6UcL8BbGoYBJp6e9jQ30Ct8P0FRANv0TyrcF8ogp5gks7e1CmqpeUX%2BJZfkEn6D1Ww5gsdEYkpbJuoh%2BhYkwGVGlLCTxuHI4AEVYMz29fMC%2BEl9MSo4tO%2B1MNdf3OPDyTm2N4lzHc9BMswCcgtei2UXi2hlW9ObmWo64rzbF0HXae2zgOgZk2X%2FCKkOznJcbSgjEvhck%2BFPZFOzKPmnlZwVHR9vGXmg40mN2gzS2nwgA%2FZHFZxKc4qyVnPz4vbwMLDRvMMGOqUBdrfT2LQ1TlHR9J8LjvnxFZLt%2FYYzMlIeOq6130fmKgM2jWVm19kp9F32GFrdDUDjXJC5SJFXt0FvnyrILhtacvJaN6J%2BuhWzQ1lu89hBVYeO%2F7QnM%2Fb4KeNBPo0D0%2F49jlvPT4pUnzP9MOtdAY0VXFJFd1hQlO4KpK7bnh6PUGP%2FGsCuiG49JBI6LQc2W6VNDg4xV5TtxUjsXBNT5kZZ1dUY4EAA&X-Amz-Signature=c3999f686f685fbc090dee742fb3dd500916c80a458fc7ad26771eceba634077&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W667TGC%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T034534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGbuvJr8mSvvZuRnyPct%2FP1fJiI2KoyiP7ynAWJmPKdVAiEA33artg4QfUVbJuzwghly74nr8vgk9nUyfoEvdypre18qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEZUaxsNvepEk0wMircAwQOO5WKNFhXxplrdCNTLErjw7nR9DrQmwRn7Mz96I4x41exWxCvhfGFBoHLO3o3amK5iUZqLqfLhjrGcBPxS3BOdZe76Mf5AVzlfPrH9rpw4FtksE%2FjyGPcRiS183BTR7UmNGpZbAA9on%2BnH3SdervaHA3ABIPWxD6amY15NLwK%2Bizn%2Fx0o0kc%2BgFBmn5DPfnz42Qaf450v4wucULLGcu20JhW4RjoIrhYPkFQ0DqqdI7DQ0Gs98dJ87QsReuVWS3UJ9mZ%2BkCQlI1ehUhTgmyQ90tEhzzKs%2F6wyk4uuoKqfBbxrV9QDlKfct0YmZgEbHNEW9doGB1cvBNmCoInmIZAI7XfPxd1Qt5mHHRBl49be2JCdeCMxIscwawU6B6UcL8BbGoYBJp6e9jQ30Ct8P0FRANv0TyrcF8ogp5gks7e1CmqpeUX%2BJZfkEn6D1Ww5gsdEYkpbJuoh%2BhYkwGVGlLCTxuHI4AEVYMz29fMC%2BEl9MSo4tO%2B1MNdf3OPDyTm2N4lzHc9BMswCcgtei2UXi2hlW9ObmWo64rzbF0HXae2zgOgZk2X%2FCKkOznJcbSgjEvhck%2BFPZFOzKPmnlZwVHR9vGXmg40mN2gzS2nwgA%2FZHFZxKc4qyVnPz4vbwMLDRvMMGOqUBdrfT2LQ1TlHR9J8LjvnxFZLt%2FYYzMlIeOq6130fmKgM2jWVm19kp9F32GFrdDUDjXJC5SJFXt0FvnyrILhtacvJaN6J%2BuhWzQ1lu89hBVYeO%2F7QnM%2Fb4KeNBPo0D0%2F49jlvPT4pUnzP9MOtdAY0VXFJFd1hQlO4KpK7bnh6PUGP%2FGsCuiG49JBI6LQc2W6VNDg4xV5TtxUjsXBNT5kZZ1dUY4EAA&X-Amz-Signature=7c9fbc1e79c276211b2465fbc724f702678b4877dee36c5ec9847c3a0e89481d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLGD4OZX%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T034539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1%2F1Czbbe2MVx%2F8VN8h02dM%2BWWVfI3NDec2MfDE9AcZAIhAJvJTfDvkKeLqUb6gSXY%2FCvoUbeSfdPFCWI5sf4DUHlBKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKrzxjNRHrYgwNyTMq3AMNfkXzj384OMDDiMwBgOFrDG%2Fg3KlAfqyu5JVq%2FigYHHz1MnD0GvXDRiRaiTc2r5s8mmcLKITWp%2FWXBfE70gLIfzjDNzhEMnziyrG6yajsvUXWqm2eyJiN%2FZ%2BFhqfC1Ng%2BJ48kPu6X4Jw8ntxffoDHWmC0GShpj2%2BpE91iQXnDctVf1x3VLQx8CUlAoveYJjDNpADtDYgwMJveCa%2Fo0%2FDmL5OPsVO1bGGD5nNOiaMBkVUnMNpU7LUsBNZJiNh6%2FNTTLfKagrjC4urxtIFflVuw0G51h4o%2F9bZJKKtvEoyEvP7qhGftElHoqSv4FFoCFS2ktX9f1zPMRhzmHeEyvmichzeDEOkiy9mVR96VfT1BtfT%2FPJE6u1RYuF1M5xwWpebw6yJOZsS6c72bU1XKbUrYkbE1VXtlIVQopE%2B2HPVuANN71l%2BJeQBn4nlXtxoOt1sUK7R%2B%2BjVpiCyy2MO%2FonPfzAhWL6Vtz2qMuhXOyutK1mw6rddxYRbCZi19fxHphyzEJ%2FV%2BE%2FWbK6YFIVBjRTY6k7sMpMesz8TsgF2s7bQZ6bOSlqfwknqfZ2ZhkPQMbeZ6%2BnGWjmdD%2B%2F5nsZUKAecqh670Vls5biF3%2FbShkTvjgzD0la26k2IHvsYxzzCe0bzDBjqkAeZLi3AYxsaoWokp77W4gdPk1NYvYR3l%2B6rm40h0JqYqEZR9AbATxASkemu%2Bkd3mI7y1DXwZp%2F9e%2BX6lScxj2Z19pgb2M8SIoIFSFqbIRtkvvofJIWYAG6vIXsz9yJfBOL2qwuaSFh6UUGoaSDEi0Byv1iONi9Fqu7nIN38hYeyg5%2BzH%2FJDu%2F30X%2FIeJgrvBFKH1DxpVJGRi%2Fi98l8QM06uOPrZu&X-Amz-Signature=6b57391eb105f9a2085ddcb582b8371dc2ee8b794cf7af254217a94e178bc696&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYMMGNVJ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T034539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAa62B0Xa8dwKmTtptGxZIqnnuQ95FI26WJa1NfXpdghAiEA4c%2FBpazOG%2BWs798wkP0L5A9LO4raH8MxE04cBGwMONIqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMTG6QidgPne2PqnircAyYHx9cD%2F78jtwhkceaNpm5cFLuF3Reyaev7QJ1ZXOgWMvaFeXBfFEW%2B8T4O2VQ1MFG%2BwYwm1uKGQSsWaFyqlXCCLTJ9wZbGTzuZvb%2B%2FtMWX1gLTdxszbvrlff3HQCuHfUwbd0LjPwla%2Fp%2Foj0rDDAyV3shedwp7SidoCFsPIRik1XuMsz60Es66PJZxYpZfHegJQ%2Bz9MuDX%2BuXl3mmJ%2FHBrT8hpIv0RwXSdutfiiODB3shkuEHeGzwZplZLo1Ha0Dar24QjvsYRV%2BbPsmsfu8aO2XQz8ekjZB%2B8QlcETJNyGrDfy%2FInOV3BbYqw%2FVT4kWdMsrEjZZyeMPnEV78DUizJO6vWyiHyp%2BSKZHcpnFvpELGLVS433Jse8g0A3yQf3GW8y7a8XGdIMYlQTVJ%2F9ViQV0r%2FotJiMYnkg4GpqgUv%2BXtbZ29ADtQqcfsIH7RzpBww%2BoGI6yP1rAfJGr%2BKMPXUW53i%2BEhWZS7cnTFFA5c%2BDDKetGH6p1aPqoIKqBLsoZ3liWrr7HPwQHw1xB%2BoSoo7WBQhLSGrsA0bMYw%2BdvSr1Rm4PQo4mT5YSCIFdsGsVFwH36UHlLaonLPU%2B2OnXdOgdAYTzOyB5L38JIJz3pLvUS7vtMIGgpwFiGjrMMTPvMMGOqUBwSgngwdXbmjrmt8NmZyDf3KmxEc8nIk2b4KNbHUL7S5CXJFyeoGcpP4uInaW4bJHhBvggYxJrQ9uY22E1qWDvYBzqNf2ZShYtud%2FPy1QYnW8deHPYoj8ekQW6FvCTJAdRkNJVz9iVvaGy6E7VNkMdRORKWPHZ6jMPiidzS2fepuVtpuIIsW1sTpoG7QB6rQblNS4PLOTBypz81UZ1T%2Bvf9HrUxPq&X-Amz-Signature=3d06882af2fb60e76c6cd93819625e2190c5951df87dbf691b5e0d89ba46430d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W667TGC%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T034534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGbuvJr8mSvvZuRnyPct%2FP1fJiI2KoyiP7ynAWJmPKdVAiEA33artg4QfUVbJuzwghly74nr8vgk9nUyfoEvdypre18qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEZUaxsNvepEk0wMircAwQOO5WKNFhXxplrdCNTLErjw7nR9DrQmwRn7Mz96I4x41exWxCvhfGFBoHLO3o3amK5iUZqLqfLhjrGcBPxS3BOdZe76Mf5AVzlfPrH9rpw4FtksE%2FjyGPcRiS183BTR7UmNGpZbAA9on%2BnH3SdervaHA3ABIPWxD6amY15NLwK%2Bizn%2Fx0o0kc%2BgFBmn5DPfnz42Qaf450v4wucULLGcu20JhW4RjoIrhYPkFQ0DqqdI7DQ0Gs98dJ87QsReuVWS3UJ9mZ%2BkCQlI1ehUhTgmyQ90tEhzzKs%2F6wyk4uuoKqfBbxrV9QDlKfct0YmZgEbHNEW9doGB1cvBNmCoInmIZAI7XfPxd1Qt5mHHRBl49be2JCdeCMxIscwawU6B6UcL8BbGoYBJp6e9jQ30Ct8P0FRANv0TyrcF8ogp5gks7e1CmqpeUX%2BJZfkEn6D1Ww5gsdEYkpbJuoh%2BhYkwGVGlLCTxuHI4AEVYMz29fMC%2BEl9MSo4tO%2B1MNdf3OPDyTm2N4lzHc9BMswCcgtei2UXi2hlW9ObmWo64rzbF0HXae2zgOgZk2X%2FCKkOznJcbSgjEvhck%2BFPZFOzKPmnlZwVHR9vGXmg40mN2gzS2nwgA%2FZHFZxKc4qyVnPz4vbwMLDRvMMGOqUBdrfT2LQ1TlHR9J8LjvnxFZLt%2FYYzMlIeOq6130fmKgM2jWVm19kp9F32GFrdDUDjXJC5SJFXt0FvnyrILhtacvJaN6J%2BuhWzQ1lu89hBVYeO%2F7QnM%2Fb4KeNBPo0D0%2F49jlvPT4pUnzP9MOtdAY0VXFJFd1hQlO4KpK7bnh6PUGP%2FGsCuiG49JBI6LQc2W6VNDg4xV5TtxUjsXBNT5kZZ1dUY4EAA&X-Amz-Signature=f91450874b19ace5dadb4b7e88313805026bb9a132062c0a5fa6c30b29693698&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
