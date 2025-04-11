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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZTVPO7L%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T190501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIG24IPq%2BuMbSKcbuD4pQxZNQhX8Ni76lxS2ujZny20XWAiBg64%2FaO5l2YTmy2Yo%2BiN4F9A%2BcLK04nKLPm1QQFn1ZiiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMll8h31nY%2BvygoLGXKtwDqL%2FP8Aj5ZhvRCoJb9JC2KFgcS1s9cdI4Bo%2F9Y1HLvb4GFuVCjfxBkp4NFSUnwERiaVmOu8hkqqr99nQyPfFdFk5q1hlOCjc2rlNfbMiuOA7xqHGaaiyagre9zztJnQNr0kUUzjhmaJaPU%2FAPcvqLLuUl6ct%2Ff4oqG7HiZaDt5p%2B4xT9lZFSwychiblTj%2Fiv9bA%2FPT%2ByzwCvS84vvKcw4Cgj%2BwcpJ%2FSuoUU8tbgacuVfh1%2FzXwVUJaSsgjU5U%2BhOmyqtp%2FqaIrPix6rrqhfHtivJapGBqoYdIBLM4%2FAzyG%2Be8eJis3c5EI9AISmHkHjXauCJPtuwxorqwLXICU5LxiMTbbpYKXF8WRhRdoGr%2BA5D8cVdRdrApN1Ez2kaS4vn63qpXDFUkfynpRnfDpVYf%2FDQEbXhH2GYKxKmPYvtmE%2BWohAF6XHkcS1OZWt8uAQuuncaDzvI32xNkNx5UecXxCo2MWpiMVx%2BPuYEjq3x%2BDWZjsyqHZjoVj8g2eFEcGBIUA%2FOnrZkua13dzIp3kcvjL3peMNXCiO04G4CsTY354B%2F8OmwHGPkxpoINqbXMmk4gDb8WM0aJnDknfN0kuHA%2F%2BxG8ntC8MjewlhXE%2B3AfjmNdjnKe00POgN%2FFFzMwhbzlvwY6pgEUA1%2BnmUgYuNe3npp6yH1h%2B6ahGLV4OpGinsu8jaxCOx1%2BA8RjiqSO527JPe7uTjoczlSVsot5Ix2xawztbQlARBPh%2FIzlQlJK3xJ6fZCQdN6Prac7n13yeHnFN4w099JGM4gWG8MK2MMRZTxnAZHaQbv4G%2FjPNlr2eghhjxO5Ng%2B9fSGndNN23KPMxY9xM40ZoPdPfwlcuVF8uY3EtQcHC3WRx%2FPm&X-Amz-Signature=6ad9f0564f5706df02caa0000ca7ccfd37e924b16b2ba3c11c69b0c2a0ad7c19&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZTVPO7L%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T190501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIG24IPq%2BuMbSKcbuD4pQxZNQhX8Ni76lxS2ujZny20XWAiBg64%2FaO5l2YTmy2Yo%2BiN4F9A%2BcLK04nKLPm1QQFn1ZiiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMll8h31nY%2BvygoLGXKtwDqL%2FP8Aj5ZhvRCoJb9JC2KFgcS1s9cdI4Bo%2F9Y1HLvb4GFuVCjfxBkp4NFSUnwERiaVmOu8hkqqr99nQyPfFdFk5q1hlOCjc2rlNfbMiuOA7xqHGaaiyagre9zztJnQNr0kUUzjhmaJaPU%2FAPcvqLLuUl6ct%2Ff4oqG7HiZaDt5p%2B4xT9lZFSwychiblTj%2Fiv9bA%2FPT%2ByzwCvS84vvKcw4Cgj%2BwcpJ%2FSuoUU8tbgacuVfh1%2FzXwVUJaSsgjU5U%2BhOmyqtp%2FqaIrPix6rrqhfHtivJapGBqoYdIBLM4%2FAzyG%2Be8eJis3c5EI9AISmHkHjXauCJPtuwxorqwLXICU5LxiMTbbpYKXF8WRhRdoGr%2BA5D8cVdRdrApN1Ez2kaS4vn63qpXDFUkfynpRnfDpVYf%2FDQEbXhH2GYKxKmPYvtmE%2BWohAF6XHkcS1OZWt8uAQuuncaDzvI32xNkNx5UecXxCo2MWpiMVx%2BPuYEjq3x%2BDWZjsyqHZjoVj8g2eFEcGBIUA%2FOnrZkua13dzIp3kcvjL3peMNXCiO04G4CsTY354B%2F8OmwHGPkxpoINqbXMmk4gDb8WM0aJnDknfN0kuHA%2F%2BxG8ntC8MjewlhXE%2B3AfjmNdjnKe00POgN%2FFFzMwhbzlvwY6pgEUA1%2BnmUgYuNe3npp6yH1h%2B6ahGLV4OpGinsu8jaxCOx1%2BA8RjiqSO527JPe7uTjoczlSVsot5Ix2xawztbQlARBPh%2FIzlQlJK3xJ6fZCQdN6Prac7n13yeHnFN4w099JGM4gWG8MK2MMRZTxnAZHaQbv4G%2FjPNlr2eghhjxO5Ng%2B9fSGndNN23KPMxY9xM40ZoPdPfwlcuVF8uY3EtQcHC3WRx%2FPm&X-Amz-Signature=d8ad31b8aede98d7e179b91b61b14d5293799e2cabc0d0272f4b656487ee3ef3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRLTKR2K%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T190504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIEaF7DSOlg3swDtYcwcbcfgZLfmotuKoZW6hc8CagphDAiEAhAFPmqjLlKkXDm4I9vyij%2F6JjBvzFnGz5R2GB6TVQFQqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BattyrUCe6s0JXmircA0lJWuc32sLoYYZeejRRboXEwV9BzV4aCw3Vks9VxOmmhC9RMzkszvmSn%2BFG2lYZP5zIzfAPjxA01LNi2mH8SrQray25WCRgUnkBiS0saaAstH0qMzFyM%2BRxiDundDYKTfsb1kplceLcpqJPQrV4YIZVaOcjBdBA7z2MY3tGPM2Y%2BmCZmuRyDYcn3ZurfFhyrk9VjGAgk3zoRgprpbGRcOo9gVQZj3Xy9QHEFskcuB5rqHoV%2FLDpSsz3awiQOP%2BDaSQFoVJ%2FtUPMwEV6QSRvuOToGMEfwgflcI7V8Nc%2BT0JiYroeyn2l8P7uFKBfSUz0pS%2F8r8ziSQa6z3wlAD1u%2BF996c2354tm4GORCK1YnT4toVLwsJqrYWfwzOqbiYFRigZizYFqXVESLzGTA6It47Ccv8cg8sILOfQ3xTaN0CqDbKMuY53ZRp0QK1JkZmDsksDK7kV6p022fjRKqG9XgHOOzo854bmiuBXMY97toYVNygChyNIE9AAFyxOCQOHwW%2FOKXCA8cv%2BmEdVd9BdQEpc3jBTzICEFxOCnPOzYxIA1eNIu6seI0E%2BguiHs1%2BaGRZ6BAsYITuLvLRzbzX6TTVnougNkT3SP2TpDew0dmnMwxnnBSmGunOBynUSZMIq85b8GOqUBcu7JUHmIKUn7Frjm864rg3iVDpfQOh3juHUa88Z9bB%2F1e4dtGUwWJxx7leMkyv7BPlZiSuo6vBccLhR7c%2BSuHhZTG7MQ8BKfNenQHp3GFkCKG3tr5ZsZXghvh3ei%2BXlwCzmivEnmyoqgPe9fDFSf1D4ytPqYC%2BcZKZ15K4BtU5r0Q8Jb8Mz6Iy8WmsdElGnLEHkfrETw7Ox2DVGdJ%2FA2gJXsancA&X-Amz-Signature=b3f1c1d53e422a981db8418656b46da85d03c00c1e6d39523ba072c59d4f4125&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGQZEBMN%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T190505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIGkQq2l6RIDNKxufGUcOLJHnnbdiP%2BzpElzqjkLNxC57AiEA4y60prjH4852KwO5ETL9whII8Hb2I2ZMmqYsahiHv9YqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2HtUdNjLYT8g4UfyrcAyJt70WC1hUk0Rjv33VNp3ieKpNmn%2FDmwtbGTFIMuj2SDfRmWPcMk%2BWwUZ0EQR4F0CCAE7Rb7%2F1TTQP7pWnOxF7OdIGWINUr8JeVpMaPPsJDc0wzubofcQn2LRXD6NQyMfqUTRTaXErIIGxyTt7SxdCNkcssLknxVAVQOiAjjzUpgXz2%2BBPZ%2F0R7bOEn6oe4PYQnBF%2B07oEuaCKa9Ps6V18VTqd9zfRtW0A6%2FOZfOMEO90orunqOMmm3PLaJgz9x5W5jhkPkOuOoXfM80xmZUn0JNvF7y%2BxsweNIK26dz6J%2BcTICG32VVXZ8IXxIJohhdAbFaNqX%2FaeaN9%2FOdYNW7hDrRPiAkcOyuog0StWHRvN%2FNy6Mp5zthO1SqeJBwNBmvu7GIULvfwQcVsNDOHEFkBBny3WbnC2psLBUH3p4fM8TfNUIAS1C0Cxxc2UbCUbP4HQU0erlw%2BAGqbZpwGbgGVi4gMDXz4ciLSaNB%2Bzb7A72c2RNrQLMOOjvnr%2FpVKEcG67H%2F7gvb4H9uaJSAgAw91vOrmM2s7mlqYPbzTkyfvisIpFpj4wy1Qbp8US1lLcRoh2aPbSL74JpQpfd3d3iJqGt3CtEejY7w8cf4mZlp%2BM3bz6QxnblwFr8IZl0MOS75b8GOqUBa%2B82hfrrG28FlCVtUKvJgZl%2Fn9KQFPap2%2BPJVkLvIZKEQ9igNePBRCGi35%2Bb9hyA4e78YFeQytGOach2zPHaLZIeRk354q6tbM5Q2pCr%2BACEJ2sKDrW%2B8oIeVLkeoMK04dNLq1MS3zhLd1uYRf%2F5dyRdwCg705DvuiBMybjf2dj2PgjGjqU2s3IvL2jQpQ6tJdfoZkzljTgEd%2FUw8TdydP2hgwPi&X-Amz-Signature=41919a88dd2b85d383dda6aea02d23218b783aeefb22ff881319c6a4a72ceeda&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZTVPO7L%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T190501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIG24IPq%2BuMbSKcbuD4pQxZNQhX8Ni76lxS2ujZny20XWAiBg64%2FaO5l2YTmy2Yo%2BiN4F9A%2BcLK04nKLPm1QQFn1ZiiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMll8h31nY%2BvygoLGXKtwDqL%2FP8Aj5ZhvRCoJb9JC2KFgcS1s9cdI4Bo%2F9Y1HLvb4GFuVCjfxBkp4NFSUnwERiaVmOu8hkqqr99nQyPfFdFk5q1hlOCjc2rlNfbMiuOA7xqHGaaiyagre9zztJnQNr0kUUzjhmaJaPU%2FAPcvqLLuUl6ct%2Ff4oqG7HiZaDt5p%2B4xT9lZFSwychiblTj%2Fiv9bA%2FPT%2ByzwCvS84vvKcw4Cgj%2BwcpJ%2FSuoUU8tbgacuVfh1%2FzXwVUJaSsgjU5U%2BhOmyqtp%2FqaIrPix6rrqhfHtivJapGBqoYdIBLM4%2FAzyG%2Be8eJis3c5EI9AISmHkHjXauCJPtuwxorqwLXICU5LxiMTbbpYKXF8WRhRdoGr%2BA5D8cVdRdrApN1Ez2kaS4vn63qpXDFUkfynpRnfDpVYf%2FDQEbXhH2GYKxKmPYvtmE%2BWohAF6XHkcS1OZWt8uAQuuncaDzvI32xNkNx5UecXxCo2MWpiMVx%2BPuYEjq3x%2BDWZjsyqHZjoVj8g2eFEcGBIUA%2FOnrZkua13dzIp3kcvjL3peMNXCiO04G4CsTY354B%2F8OmwHGPkxpoINqbXMmk4gDb8WM0aJnDknfN0kuHA%2F%2BxG8ntC8MjewlhXE%2B3AfjmNdjnKe00POgN%2FFFzMwhbzlvwY6pgEUA1%2BnmUgYuNe3npp6yH1h%2B6ahGLV4OpGinsu8jaxCOx1%2BA8RjiqSO527JPe7uTjoczlSVsot5Ix2xawztbQlARBPh%2FIzlQlJK3xJ6fZCQdN6Prac7n13yeHnFN4w099JGM4gWG8MK2MMRZTxnAZHaQbv4G%2FjPNlr2eghhjxO5Ng%2B9fSGndNN23KPMxY9xM40ZoPdPfwlcuVF8uY3EtQcHC3WRx%2FPm&X-Amz-Signature=2a85665a9668cef286cea6f53ebecd19d65f77584fca69338503d4be9ce0a91c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
