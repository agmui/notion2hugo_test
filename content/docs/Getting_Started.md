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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623H2YOX2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt%2FsT1aGNwM9sBrdjR0CRQJ3zfzoPiYLz03zeU2y0OrQIhAKN2YBpYp2PVlwUIylpERO9fCKH11W82Rv0IYvEypYGeKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIggf4uOZmAVKPzy8q3AM%2BLi1xQpBh5AHo4ZSh2NE7zGYWrM%2BFRddMgTMAky18bkgLJLPLi9QKqHKbKT%2ByxszHzQeufgcrWzYYYPnu%2BYq0l3JNfGRrIDcQhvtrU8x57ge1IeZG5R%2BxcCEC6VGWFU%2BN%2FfgOR9XqRy2mtqB5lepTDL8oSSNXdJXXXIxWrOMkMTMkV22Nyz0FvXLh7iS7g6Qr6ZcbYcAzJNzASywOWhySXtYZhYrliKTuCl4bEzLypLoShHZ5AbTrAGEsarft5A7VjSltS1XmISoQf1vvuqlpj94UoIUnsv8uFLtgVqsuSDM%2B8WjMDkoCdY0B0lsIVnG%2B3wAF4FJik0xDNQcI0cx%2Fc4OdXu6UlNp4QOERXeLZ3%2B1bc1WiXmY8VBL15EOzaUo0S8hDt1vXySRuGwBH%2Bl1KGKx72llSC4aCL70Ma75s%2FofftnFcZctn7yNrD4wOr22qlIJ%2B%2Bx%2BXVyyF4M4kzcsgqLCT4uv7QMeKQLuEiKnECUOipCyAjhn49gWVJdNC7cBdBcaYPN11%2Bi2UUYR3HOY8HhZX5Ce0S1V2y3dlEES0%2F%2FHGruWGlS3S%2BP%2F2%2BU5M9DM%2BOz7xKUQH8U0OVeTqxgCs34vOLzexgrsjNKqyxOmjyn3L58CPe0Wpi%2B2E%2BzCj9e%2FDBjqkAZ0CXOQKutVChug1IfECmuCqcdG6QKdDB7Ebxxef822gUJCHNFgMqlo2saeek444cVNmw9Q0YV7YZiHEa0BSMRxgL7dtl388WXEdEqaD9MCVtlAX%2Fx6AKX%2BNYAkoNP%2BiStq6eBrA%2BEJ2JsMqhkRAGwcFJdc6opKLiY0lXFklspA55kGs61aOwNsUYL0%2FJ8%2FkD8T0dGt0FxExcKkkEfThiuiKlSsQ&X-Amz-Signature=8e508dc7d681dd6e747120f59657d452d245146c3b16f80bd9d682d4113c8c2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623H2YOX2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt%2FsT1aGNwM9sBrdjR0CRQJ3zfzoPiYLz03zeU2y0OrQIhAKN2YBpYp2PVlwUIylpERO9fCKH11W82Rv0IYvEypYGeKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIggf4uOZmAVKPzy8q3AM%2BLi1xQpBh5AHo4ZSh2NE7zGYWrM%2BFRddMgTMAky18bkgLJLPLi9QKqHKbKT%2ByxszHzQeufgcrWzYYYPnu%2BYq0l3JNfGRrIDcQhvtrU8x57ge1IeZG5R%2BxcCEC6VGWFU%2BN%2FfgOR9XqRy2mtqB5lepTDL8oSSNXdJXXXIxWrOMkMTMkV22Nyz0FvXLh7iS7g6Qr6ZcbYcAzJNzASywOWhySXtYZhYrliKTuCl4bEzLypLoShHZ5AbTrAGEsarft5A7VjSltS1XmISoQf1vvuqlpj94UoIUnsv8uFLtgVqsuSDM%2B8WjMDkoCdY0B0lsIVnG%2B3wAF4FJik0xDNQcI0cx%2Fc4OdXu6UlNp4QOERXeLZ3%2B1bc1WiXmY8VBL15EOzaUo0S8hDt1vXySRuGwBH%2Bl1KGKx72llSC4aCL70Ma75s%2FofftnFcZctn7yNrD4wOr22qlIJ%2B%2Bx%2BXVyyF4M4kzcsgqLCT4uv7QMeKQLuEiKnECUOipCyAjhn49gWVJdNC7cBdBcaYPN11%2Bi2UUYR3HOY8HhZX5Ce0S1V2y3dlEES0%2F%2FHGruWGlS3S%2BP%2F2%2BU5M9DM%2BOz7xKUQH8U0OVeTqxgCs34vOLzexgrsjNKqyxOmjyn3L58CPe0Wpi%2B2E%2BzCj9e%2FDBjqkAZ0CXOQKutVChug1IfECmuCqcdG6QKdDB7Ebxxef822gUJCHNFgMqlo2saeek444cVNmw9Q0YV7YZiHEa0BSMRxgL7dtl388WXEdEqaD9MCVtlAX%2Fx6AKX%2BNYAkoNP%2BiStq6eBrA%2BEJ2JsMqhkRAGwcFJdc6opKLiY0lXFklspA55kGs61aOwNsUYL0%2FJ8%2FkD8T0dGt0FxExcKkkEfThiuiKlSsQ&X-Amz-Signature=023afea2a5adad79b28883597550538cbd963b225dff21317f9773240dd15bb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623H2YOX2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt%2FsT1aGNwM9sBrdjR0CRQJ3zfzoPiYLz03zeU2y0OrQIhAKN2YBpYp2PVlwUIylpERO9fCKH11W82Rv0IYvEypYGeKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIggf4uOZmAVKPzy8q3AM%2BLi1xQpBh5AHo4ZSh2NE7zGYWrM%2BFRddMgTMAky18bkgLJLPLi9QKqHKbKT%2ByxszHzQeufgcrWzYYYPnu%2BYq0l3JNfGRrIDcQhvtrU8x57ge1IeZG5R%2BxcCEC6VGWFU%2BN%2FfgOR9XqRy2mtqB5lepTDL8oSSNXdJXXXIxWrOMkMTMkV22Nyz0FvXLh7iS7g6Qr6ZcbYcAzJNzASywOWhySXtYZhYrliKTuCl4bEzLypLoShHZ5AbTrAGEsarft5A7VjSltS1XmISoQf1vvuqlpj94UoIUnsv8uFLtgVqsuSDM%2B8WjMDkoCdY0B0lsIVnG%2B3wAF4FJik0xDNQcI0cx%2Fc4OdXu6UlNp4QOERXeLZ3%2B1bc1WiXmY8VBL15EOzaUo0S8hDt1vXySRuGwBH%2Bl1KGKx72llSC4aCL70Ma75s%2FofftnFcZctn7yNrD4wOr22qlIJ%2B%2Bx%2BXVyyF4M4kzcsgqLCT4uv7QMeKQLuEiKnECUOipCyAjhn49gWVJdNC7cBdBcaYPN11%2Bi2UUYR3HOY8HhZX5Ce0S1V2y3dlEES0%2F%2FHGruWGlS3S%2BP%2F2%2BU5M9DM%2BOz7xKUQH8U0OVeTqxgCs34vOLzexgrsjNKqyxOmjyn3L58CPe0Wpi%2B2E%2BzCj9e%2FDBjqkAZ0CXOQKutVChug1IfECmuCqcdG6QKdDB7Ebxxef822gUJCHNFgMqlo2saeek444cVNmw9Q0YV7YZiHEa0BSMRxgL7dtl388WXEdEqaD9MCVtlAX%2Fx6AKX%2BNYAkoNP%2BiStq6eBrA%2BEJ2JsMqhkRAGwcFJdc6opKLiY0lXFklspA55kGs61aOwNsUYL0%2FJ8%2FkD8T0dGt0FxExcKkkEfThiuiKlSsQ&X-Amz-Signature=1e22f4170d553698394085aebcca1417525a5c0452cf1681ae1f3eb5264fee08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNRYSPM3%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzmkGF%2FkbVGrkNVfeXMyFlIWiAFDl2%2FvIlYCuyCgffSQIgHvXkTMjvGzhzQ7WKLYnEEqcAocZUmZoYhhVarhyjKfEqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF691viU6YuQG0NZ3SrcA9bDkWOtnQUEQvep%2BEHrkaK0Hq3GWlq7XlUHlzUhpcOH%2F2oHqY929P1A3mR0cCTKIC44DAZmkWhpg8U1QyRuZNreaY0WyqpHlK9zzdqYEdJkYL9FLzDKvX%2F%2FLaQKgb7wKGhQMl8vorp1G8xHy6WBgiFbCSu31%2BV634y41DZNzT55EgIOD7XrG0616L%2BvEixBbrD7kZIrvdDKWIhGj8Qk0VGE9AKghsIs0hByKh6LewcpvjYs%2FgJSR9l0rbKCGDnElIfjOThB3sTsWwS%2BtfZtmhlTPDI0G7dzG8RdQl5AhlhaNWKwBYPIAX8NkqrSeXtpJgZdgHksgspvdnjZJhjOgI2AgEDXzGhEqa7cOGRoalTnWgQRsBERO56jAZAHnouvuS4Xa%2F6SXOzG2UfJz%2BxlGKQ6hWWu8LOO17q5fhuewT8HCZF6tu96cSVOmtFfTi70s4KHYM3SluNUHMKq9DKskuPoBH%2FX81vHFZu2m8uUtEf0zwZPdIWJ66bBZoUn6C4g6y%2B%2BJn7n%2Fz0ncxmpY8JTCjaMLMbNMoFK0yd299T10SisUNzR5XQWwfP%2B96Bi%2BNJFjoxP7D%2FiNoRRwt%2B6VDom%2FzpA2Uvt%2B1QyVJ3VmnUF3recjza2j92t9N3MtzTQMML178MGOqUBGgDyEwH3q2VkAcMCY1dgYi3LQod6LekGRXgA2MOBo%2B6Ybapy2texQnEPoi4y2LtAb4OPUQvUWOSaQ3PiTBKCSQJEm8df22dLXTzClBdftoil0aRfV9AsoyPDjF0Sl4wvpusLuDc4tWWd8w5%2FHYLNBgfUNwikeKHly3oc6Ck1VNTHTMGces4vZPng7BPfzDHDua9sdKOwRHbfK8DzYVdgZGdK5Ypt&X-Amz-Signature=371588e104d8f4363b4102d654f0d14e0dd754063eb023498dc44dc0153561e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ3YRDVG%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzaz6DdEu%2BLx1BEgYIpmrprXDsPLhgra81Gid3t%2FHBEAiEAyccEIYUCMxoTYLObT%2FIbY3DMcAWdLGSIl86QCIW97TgqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2B2tQlox90qt%2BTdJSrcA4mcI%2FiWudnpfbQIeXwUvACfEbjLMlZKE8RZ5wmWqwfDLDJMkPVDk1Ud0lkGafkOQv9Tm7GPVdg1zvv2jf22ZE3bKhSOUtpMGL%2FD49Xn4PyM7HUJP0w0Yx6xUMx2vRB4gtHnnZWwyVFUZS%2FE9s4%2B91Ll%2BlYWQ0yg2ktXi%2BoQ%2F8L3O3YKjpiy0yfUgrjQ959rojQvgaolE3mwiUzJ%2FnoL4vYPPPbk7iJ8TuNZ1pYPyQwpUryps1uqwQMrvmm77W3Nz6vi53qRGTb%2BiiOwVCS1AKyYr7Wi9V7M9FAd2f8AYiNDtrrFa7d27DevAjgxzZ3wrBkk6DtgVZ%2FaNaqxSkBZQaKsuVIesJJAPguMioFqfMtPW7JQQTiv1tv%2BQZiWo9Yg260FocFhyTjVbs9BLW6iryHhT7e0BcxHkEofF2pJmjT69Zd14734A3nIDthrKTODZbYARE4oAfV8h3OMIVSl4huU2iIHcpWgXnRy986Of1K9D0onnILjrqBA9acYlxH%2FLbYk%2FMXTWpW3G%2FHRZ03pUV70qZBAYu48bY4%2BHy1WgYv%2FNhDgS3qYVWQU2Sj4Ivo4mFU0v3egYCuGutcCljWpvWpnrXCASiitLm3KSSddPDLHI7aeN4FPz6PLJ3P1MI7a78MGOqUBk9h7Y1TRIoO9WXN3D16MLnhpFvoTY%2B6KO69rpfODSZlVDd9khI2jNQ6fYhaD6cTG%2BCPLqRNdlbBl3roecReYlhT4iBgs2a0Q%2FkiyzZD%2BZNqNp0N3DmCwJJDMjZd7ZT%2BOy1BfgI1Ci8in%2FYI7y17gfTR%2Bu5lALkdfWcIsAgchfBHlEsWgj6YGGfs0GZLVs1JieWh7ab77yc5xr5Nq6dHkMQl9DYIb&X-Amz-Signature=d82a8722c1a801511367f446ee0b824aa8e38790bba33c822de3a7c5ec3c48b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623H2YOX2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt%2FsT1aGNwM9sBrdjR0CRQJ3zfzoPiYLz03zeU2y0OrQIhAKN2YBpYp2PVlwUIylpERO9fCKH11W82Rv0IYvEypYGeKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIggf4uOZmAVKPzy8q3AM%2BLi1xQpBh5AHo4ZSh2NE7zGYWrM%2BFRddMgTMAky18bkgLJLPLi9QKqHKbKT%2ByxszHzQeufgcrWzYYYPnu%2BYq0l3JNfGRrIDcQhvtrU8x57ge1IeZG5R%2BxcCEC6VGWFU%2BN%2FfgOR9XqRy2mtqB5lepTDL8oSSNXdJXXXIxWrOMkMTMkV22Nyz0FvXLh7iS7g6Qr6ZcbYcAzJNzASywOWhySXtYZhYrliKTuCl4bEzLypLoShHZ5AbTrAGEsarft5A7VjSltS1XmISoQf1vvuqlpj94UoIUnsv8uFLtgVqsuSDM%2B8WjMDkoCdY0B0lsIVnG%2B3wAF4FJik0xDNQcI0cx%2Fc4OdXu6UlNp4QOERXeLZ3%2B1bc1WiXmY8VBL15EOzaUo0S8hDt1vXySRuGwBH%2Bl1KGKx72llSC4aCL70Ma75s%2FofftnFcZctn7yNrD4wOr22qlIJ%2B%2Bx%2BXVyyF4M4kzcsgqLCT4uv7QMeKQLuEiKnECUOipCyAjhn49gWVJdNC7cBdBcaYPN11%2Bi2UUYR3HOY8HhZX5Ce0S1V2y3dlEES0%2F%2FHGruWGlS3S%2BP%2F2%2BU5M9DM%2BOz7xKUQH8U0OVeTqxgCs34vOLzexgrsjNKqyxOmjyn3L58CPe0Wpi%2B2E%2BzCj9e%2FDBjqkAZ0CXOQKutVChug1IfECmuCqcdG6QKdDB7Ebxxef822gUJCHNFgMqlo2saeek444cVNmw9Q0YV7YZiHEa0BSMRxgL7dtl388WXEdEqaD9MCVtlAX%2Fx6AKX%2BNYAkoNP%2BiStq6eBrA%2BEJ2JsMqhkRAGwcFJdc6opKLiY0lXFklspA55kGs61aOwNsUYL0%2FJ8%2FkD8T0dGt0FxExcKkkEfThiuiKlSsQ&X-Amz-Signature=73f3edb6403ca4c4eebc5df6cf478f4f3c25fa21b8de4728dce31538fa06952f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
