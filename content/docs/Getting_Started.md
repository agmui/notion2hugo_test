---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM5ACFEY%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIBBbC55k7aypBHfnlJi48l5UDf2raS%2B1M0BFOYb1RgxmAiBCejiR2XdVJWxq14g%2FtVobtm6jIi64iPfQRL3HlYOF6Cr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMT%2FP9AIUO3o7NaSoPKtwDIGysnCQNHnyssEDW8OZQCTyp8uReXIWAyMyO5GsUN0ZWuCwa1BcVFPDbFYOv35uI9oqIJngzeWjKcaV7EUKae4iqEZHlS%2BAXTCxvp%2Bdl5zUfY39WKhcaLyVwwEfxgW7FWx1SEe9m0OrWspR9bu6fSQDLRWuvZmM2shZALUbOL8mapPYT512OyAZr3mFL2uU%2FOv10COB6hX22ATxRtH1JYIe1v%2Fxa%2F3hKeYbYtIT4ci9prpOZQBSQ%2FQpgmaEn5eOnKSZbfEo75AaWlXCkt6FyAwMYvRm0j94544F7KicX%2BYMDvGUK8d7okn2WvMhSLzBMe9joaeceKJhfdTtiFPOg433M7v3kN0uG8Ou%2BngpOSg1dYte%2BFBPDWDrRpfVaAp4Gt%2Ff6LIYSHiiG731t67WfZGVBtKio2FomoTa0Jvx4WtURcLgdB4uMVGxokjWqyU71CUTD38RUo%2Fh0PVbM4UMgMTyrNKUvLTvIw65ho6yAKKF%2FzkptKhSYJ14N6mtgtN4NwSNw%2F4tliLkzvi8aDS8pFprvSmNm5VFlmqrOpoW2yHKN3ZfW9erIQPJWykjxnkYjtr%2BYQnSeq14MPJqMfAMLHu3VCWiDQ1%2BG5MBrvrsLjj3elf3wRlxbg87T6u4w5v%2F%2ByAY6pgGPN0y8v%2BsaE%2BfN2X0xLRsYbD1dBtiMfbFX9AuADyquFSvCH5WeQawazGCKiNrf%2BjQFY0mc%2FevqiDyN2sLNJOuZhLJmXWxILMij5KhgNlErQAzXmunr%2FTYHrJW7vOQ7FcUNGlOWb%2FXWnyrS8I9xb6FErn8hKMSNctT8LpQX4bysxrxGRiDz%2BTffLoiI%2F3DfWZ%2BatQqAVEunWIOtuISTJJG0dpLglZ4p&X-Amz-Signature=f625159c9b4f85d71ad3f9b2eb7d8090a2fa6b5d008ee737387713e45ba1b873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM5ACFEY%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIBBbC55k7aypBHfnlJi48l5UDf2raS%2B1M0BFOYb1RgxmAiBCejiR2XdVJWxq14g%2FtVobtm6jIi64iPfQRL3HlYOF6Cr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMT%2FP9AIUO3o7NaSoPKtwDIGysnCQNHnyssEDW8OZQCTyp8uReXIWAyMyO5GsUN0ZWuCwa1BcVFPDbFYOv35uI9oqIJngzeWjKcaV7EUKae4iqEZHlS%2BAXTCxvp%2Bdl5zUfY39WKhcaLyVwwEfxgW7FWx1SEe9m0OrWspR9bu6fSQDLRWuvZmM2shZALUbOL8mapPYT512OyAZr3mFL2uU%2FOv10COB6hX22ATxRtH1JYIe1v%2Fxa%2F3hKeYbYtIT4ci9prpOZQBSQ%2FQpgmaEn5eOnKSZbfEo75AaWlXCkt6FyAwMYvRm0j94544F7KicX%2BYMDvGUK8d7okn2WvMhSLzBMe9joaeceKJhfdTtiFPOg433M7v3kN0uG8Ou%2BngpOSg1dYte%2BFBPDWDrRpfVaAp4Gt%2Ff6LIYSHiiG731t67WfZGVBtKio2FomoTa0Jvx4WtURcLgdB4uMVGxokjWqyU71CUTD38RUo%2Fh0PVbM4UMgMTyrNKUvLTvIw65ho6yAKKF%2FzkptKhSYJ14N6mtgtN4NwSNw%2F4tliLkzvi8aDS8pFprvSmNm5VFlmqrOpoW2yHKN3ZfW9erIQPJWykjxnkYjtr%2BYQnSeq14MPJqMfAMLHu3VCWiDQ1%2BG5MBrvrsLjj3elf3wRlxbg87T6u4w5v%2F%2ByAY6pgGPN0y8v%2BsaE%2BfN2X0xLRsYbD1dBtiMfbFX9AuADyquFSvCH5WeQawazGCKiNrf%2BjQFY0mc%2FevqiDyN2sLNJOuZhLJmXWxILMij5KhgNlErQAzXmunr%2FTYHrJW7vOQ7FcUNGlOWb%2FXWnyrS8I9xb6FErn8hKMSNctT8LpQX4bysxrxGRiDz%2BTffLoiI%2F3DfWZ%2BatQqAVEunWIOtuISTJJG0dpLglZ4p&X-Amz-Signature=bcc355d72fa846efe9ee9e4dfc2b2e7c7945f6ff018a32161f7ec8e7360c3bfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM5ACFEY%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIBBbC55k7aypBHfnlJi48l5UDf2raS%2B1M0BFOYb1RgxmAiBCejiR2XdVJWxq14g%2FtVobtm6jIi64iPfQRL3HlYOF6Cr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMT%2FP9AIUO3o7NaSoPKtwDIGysnCQNHnyssEDW8OZQCTyp8uReXIWAyMyO5GsUN0ZWuCwa1BcVFPDbFYOv35uI9oqIJngzeWjKcaV7EUKae4iqEZHlS%2BAXTCxvp%2Bdl5zUfY39WKhcaLyVwwEfxgW7FWx1SEe9m0OrWspR9bu6fSQDLRWuvZmM2shZALUbOL8mapPYT512OyAZr3mFL2uU%2FOv10COB6hX22ATxRtH1JYIe1v%2Fxa%2F3hKeYbYtIT4ci9prpOZQBSQ%2FQpgmaEn5eOnKSZbfEo75AaWlXCkt6FyAwMYvRm0j94544F7KicX%2BYMDvGUK8d7okn2WvMhSLzBMe9joaeceKJhfdTtiFPOg433M7v3kN0uG8Ou%2BngpOSg1dYte%2BFBPDWDrRpfVaAp4Gt%2Ff6LIYSHiiG731t67WfZGVBtKio2FomoTa0Jvx4WtURcLgdB4uMVGxokjWqyU71CUTD38RUo%2Fh0PVbM4UMgMTyrNKUvLTvIw65ho6yAKKF%2FzkptKhSYJ14N6mtgtN4NwSNw%2F4tliLkzvi8aDS8pFprvSmNm5VFlmqrOpoW2yHKN3ZfW9erIQPJWykjxnkYjtr%2BYQnSeq14MPJqMfAMLHu3VCWiDQ1%2BG5MBrvrsLjj3elf3wRlxbg87T6u4w5v%2F%2ByAY6pgGPN0y8v%2BsaE%2BfN2X0xLRsYbD1dBtiMfbFX9AuADyquFSvCH5WeQawazGCKiNrf%2BjQFY0mc%2FevqiDyN2sLNJOuZhLJmXWxILMij5KhgNlErQAzXmunr%2FTYHrJW7vOQ7FcUNGlOWb%2FXWnyrS8I9xb6FErn8hKMSNctT8LpQX4bysxrxGRiDz%2BTffLoiI%2F3DfWZ%2BatQqAVEunWIOtuISTJJG0dpLglZ4p&X-Amz-Signature=e31d7b9f3950c453416890dfc87cba10ebe118793555e9c74bd2e2bf256e048a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SARPRCJH%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIB8ipyVV8UcqhlPhHX0PoC8rfLb4Kr9lGdywfVQva7ayAiA8GcueAXo4OysyIJKZxjyn298eWJ3X%2FvK%2FjpACG%2BPNVir%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIM8q6IIH7YwRPwlNuGKtwD8hyjGmIU3Cg%2B7v9TJgLr9p2lCPEBECz02oCMaiJoNFkym622MFYPPLxrTv%2BAWuvk23flPc4gCNTLW%2F3YfxWMvK%2BZPUWvMBdUCNGeiRtThvZO993Dxr8kzNgs04KochL1gw%2B%2B%2Bu7S2pf%2FaqCouHZnWMt7l9EsM78prVx90RxL8SvdCjeKYls6k1Th1%2B%2Ba1zO6eEh6LIv75wq20HC1fLqErkpey%2BarTYiN6rmZsBIStn8vlOtv9y0U0QlkpujIbtiYcupAJlgvS5On%2F2jZs7Ns%2Fv2AxpJyjNNQzXtWQEh8xEn%2BiKEKGmCi%2B11zQipyv4mqjZv59r3KRRI66sx7XiA315ZrjmjFlMjsc%2F9CMPRivoC45OC4WfcKUE2vKPVResz%2BI1noTqd9JxlUZpwwqxU4x6Ba9eKRMvADGQQv%2F9k3zWUjH4ql5AIIZwGOBtY3ngz881n%2FZIsN%2BaTCFhbBIIJSnMjWvRNEVtWuZMt063ThmtE71W1wVhBPpj5E4Jx5ai0kzMwpyMEDav8d9I6jDoPs8GU9N55KM5L7LY6Pf7IZETMeXiwwgMFykayn72CNNUF%2FkHMQYMdYFjz5hJn%2BeNaGKo00vnQl0wGGnUPdi%2FiGDNL36uF817Ww%2BUALBiswzIH%2FyAY6pgEHWRCCLEohB0aumE1hreCkD3L8nKc04atVC8EkubgxSFgUydOtP%2FNuxHWtAbdPxVgMJZSz%2BcjPh5cWdNiDQ8OWTLlptwQr5vUdUPwzfrZMw%2F6S5rb7s5efFj4gnACMJ3wbmB46Bit0YD8ALekpkBxutTKmCq1tLGB8ykFJED01EzFln2XXh2Z6G1RILMX%2FZR7AKQT1koXb%2FEZfPHsAIItJjIUzIoey&X-Amz-Signature=bd7fab1bcbf9aa58c80f6526b621e5c5eb224003994f0b39aeabd2f5aaa7e944&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRM6HATP%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIBOx9IjZX4NwlC7r4DNMUDarjVzKwlSl73uOiQL37nwMAiBf6la76cFk31CHUuw2dGmkVbpYM20QVbldlRvKRjb45yr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIM89eUDYrwFPybu3jwKtwDmJZk8%2F1R3dFapHIiPGIVhsyHYvXG%2BFmBUYMIKGb6nu52D2VUU49%2FjT8hXIbVgYQLhtZPvX%2FWdVvRdCKW0qHmEk2zou14QgZm57imk%2BLasOFmPM17c7hN%2B%2F6liGDln%2FqAT3eeI%2FbG9sDPvrju5S%2BVEDtbK4x%2F4X%2BmDKNZfwekqbpEceS0g7z5OGnIS9ZiawLVvAdBy5zD4GpknvigloMKFsj4IXzTAneamkqgm1zZlGcHUwpDkIrmodVqmnnPn1jsWc50AU2Qu%2FyPeMpg2XvNa9LZCCcMnrJRgAQqloeb1dbpm1ZBW6gn%2FUhhemBECisaqeZT2MSvS7L4xocA0frw5RpMQFpuWHXt8CH0yPEft4gYtAkYN3Zzd12AgWz4POiZmNYcGw9sJErMByQ3HaWQ%2Bl9UPSsAnfJ2cRHphfMUnAjdA1vTVYG0ryQf0c4t5dJ5ZOJWGB64s2yR9pf%2FUDc%2FCOKVSmqJUn%2Bi13gfZTQmIV6yHwUxQw8W5DUy8A5%2Fx2YvHji03BQzrju8jVcMAuywjUjs4rokiLXjWa4VrE8MleiNNznEWArGgShAPtZVO5V6g3Q3NfW8cv3gIQILDi31f2ElEnkeIx7Aotes%2BE8ZBi%2F9h2yrtNX51uQeWusw24H%2FyAY6pgEpmTFFoTVxgId%2BMPrV8Is0oEiamchrJ%2Fjevc7KQaiwoESbJuHf%2B9%2BvVA%2BDbXkLofQkmuB3UWtBJ77gXzQx82trVN9WorpWQQqbYoF7W045Ew%2FIdBsY28f%2BT5ulzATlhcVE6XpHXhh5v%2BuKJDbejdwMzJILjOoFOw9v2coTvxJUmDJz14iuCkhq2z17qUn9%2Fk20JVQrB2uSqeLPHLzrxh2LdtucsXP2&X-Amz-Signature=bda004b274288c419e35b1398b8403f5acc4cb94c3247f0619c0ffb6b0b5f4fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM5ACFEY%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIBBbC55k7aypBHfnlJi48l5UDf2raS%2B1M0BFOYb1RgxmAiBCejiR2XdVJWxq14g%2FtVobtm6jIi64iPfQRL3HlYOF6Cr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMT%2FP9AIUO3o7NaSoPKtwDIGysnCQNHnyssEDW8OZQCTyp8uReXIWAyMyO5GsUN0ZWuCwa1BcVFPDbFYOv35uI9oqIJngzeWjKcaV7EUKae4iqEZHlS%2BAXTCxvp%2Bdl5zUfY39WKhcaLyVwwEfxgW7FWx1SEe9m0OrWspR9bu6fSQDLRWuvZmM2shZALUbOL8mapPYT512OyAZr3mFL2uU%2FOv10COB6hX22ATxRtH1JYIe1v%2Fxa%2F3hKeYbYtIT4ci9prpOZQBSQ%2FQpgmaEn5eOnKSZbfEo75AaWlXCkt6FyAwMYvRm0j94544F7KicX%2BYMDvGUK8d7okn2WvMhSLzBMe9joaeceKJhfdTtiFPOg433M7v3kN0uG8Ou%2BngpOSg1dYte%2BFBPDWDrRpfVaAp4Gt%2Ff6LIYSHiiG731t67WfZGVBtKio2FomoTa0Jvx4WtURcLgdB4uMVGxokjWqyU71CUTD38RUo%2Fh0PVbM4UMgMTyrNKUvLTvIw65ho6yAKKF%2FzkptKhSYJ14N6mtgtN4NwSNw%2F4tliLkzvi8aDS8pFprvSmNm5VFlmqrOpoW2yHKN3ZfW9erIQPJWykjxnkYjtr%2BYQnSeq14MPJqMfAMLHu3VCWiDQ1%2BG5MBrvrsLjj3elf3wRlxbg87T6u4w5v%2F%2ByAY6pgGPN0y8v%2BsaE%2BfN2X0xLRsYbD1dBtiMfbFX9AuADyquFSvCH5WeQawazGCKiNrf%2BjQFY0mc%2FevqiDyN2sLNJOuZhLJmXWxILMij5KhgNlErQAzXmunr%2FTYHrJW7vOQ7FcUNGlOWb%2FXWnyrS8I9xb6FErn8hKMSNctT8LpQX4bysxrxGRiDz%2BTffLoiI%2F3DfWZ%2BatQqAVEunWIOtuISTJJG0dpLglZ4p&X-Amz-Signature=af3da3fae5ee6a16da8185e028475e33ff38751e7a14b1840a9400954d2e5671&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
