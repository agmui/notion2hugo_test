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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSBABN5S%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T170350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCICvci6LSFkpk%2FuoJ75lyx7q8e635A5d5HoOL7XHAdWQAAiBWhZL9chuPj1LuiKeFWGiBZ57z9IINu2OMVA2GEGIH9ir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMZGXIdYIbs0XM0Q5EKtwDIVoBXT7FZdPsnraEfXrgImyUj%2Bb8JTHKZtHjQfryQgRphvQcNl8%2F3fx0CWf7sb5IV4xBEI0UzYSDQ1I6vHcHq9%2BmaC0WgxKlREjHFxkVdR5UlBdrJ6o%2B%2BzsJPpqmCe9lTXiCtx54VjkLZIUqmJWe0M3NQgYQzVS0HT5aU6cHQhp41hMBydE%2FcwbfxlgIJuN6zvZK4%2BSrR1DxnzKfXNEQoBsLd2IDu4A3bYYy6Mbx2R0HRoXcr44GyO1echrWrmW1GLYj%2Bkq8tpf5TV313ieG0FD5FLf7bKPH2ek9OifaEWucIxa28Nm2mxZta7Mh09uNm2kklckpvGfSCUs19wzaC6Xxb3oyBUElxe15%2BtvKd5624CHwQY5fHxG2EBbaX%2B%2BFNubW3BOXkuqgKWXXwhUgpz8FngvUzlTQRoAbFm1r5xMjFZwld4lquvK%2BymvXg17TyLUyj6yGYHkVx1ow9WmsBxcj56GEIqyNsO%2FIXAAnhd5eQlrAVM9MfOhkt55vZUAVQ2ul2aJFaBbv%2BHES1jkW8Pq%2BjkTXz1YjNERTnSlRUMwvPjN2RlHzFAGTNr4%2Fv4i9SW0f0xzBS6b6Zrr6qbXsBYhY2P7RpTOxIIOnVF5qr2XpG1RXpNWRoTvTV4Yw7rrewAY6pgESSm5V0K1rKggQJc%2BZrJyTQl%2FzgMX6wIRIrpZy89DNitQ6%2FbOOVYC0Wth%2FGhJ1VrqN0mC5DVd6qq6nLDQRGx8DtFoS5n6R0RNl6kjpHfQryNgQpcZHJKPDvoCtz%2B2EN8jpRZvluZSkAoe4shn3CaZ5FjfThgHpinzT7MqAQO55hSw4ytDOmqBELaVO%2B%2BCdEzVjxm6JTCLbyi0CVyr4tgnGip3JR8Sc&X-Amz-Signature=b39c0963485d6c02ac8f012d3d889c90109c6d3b9595d0f1026836e17041e017&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSBABN5S%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T170350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCICvci6LSFkpk%2FuoJ75lyx7q8e635A5d5HoOL7XHAdWQAAiBWhZL9chuPj1LuiKeFWGiBZ57z9IINu2OMVA2GEGIH9ir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMZGXIdYIbs0XM0Q5EKtwDIVoBXT7FZdPsnraEfXrgImyUj%2Bb8JTHKZtHjQfryQgRphvQcNl8%2F3fx0CWf7sb5IV4xBEI0UzYSDQ1I6vHcHq9%2BmaC0WgxKlREjHFxkVdR5UlBdrJ6o%2B%2BzsJPpqmCe9lTXiCtx54VjkLZIUqmJWe0M3NQgYQzVS0HT5aU6cHQhp41hMBydE%2FcwbfxlgIJuN6zvZK4%2BSrR1DxnzKfXNEQoBsLd2IDu4A3bYYy6Mbx2R0HRoXcr44GyO1echrWrmW1GLYj%2Bkq8tpf5TV313ieG0FD5FLf7bKPH2ek9OifaEWucIxa28Nm2mxZta7Mh09uNm2kklckpvGfSCUs19wzaC6Xxb3oyBUElxe15%2BtvKd5624CHwQY5fHxG2EBbaX%2B%2BFNubW3BOXkuqgKWXXwhUgpz8FngvUzlTQRoAbFm1r5xMjFZwld4lquvK%2BymvXg17TyLUyj6yGYHkVx1ow9WmsBxcj56GEIqyNsO%2FIXAAnhd5eQlrAVM9MfOhkt55vZUAVQ2ul2aJFaBbv%2BHES1jkW8Pq%2BjkTXz1YjNERTnSlRUMwvPjN2RlHzFAGTNr4%2Fv4i9SW0f0xzBS6b6Zrr6qbXsBYhY2P7RpTOxIIOnVF5qr2XpG1RXpNWRoTvTV4Yw7rrewAY6pgESSm5V0K1rKggQJc%2BZrJyTQl%2FzgMX6wIRIrpZy89DNitQ6%2FbOOVYC0Wth%2FGhJ1VrqN0mC5DVd6qq6nLDQRGx8DtFoS5n6R0RNl6kjpHfQryNgQpcZHJKPDvoCtz%2B2EN8jpRZvluZSkAoe4shn3CaZ5FjfThgHpinzT7MqAQO55hSw4ytDOmqBELaVO%2B%2BCdEzVjxm6JTCLbyi0CVyr4tgnGip3JR8Sc&X-Amz-Signature=6f3c7bbdb44b13e1a400b5119adb0aa2fb33704e55ecc41fefa339d22de5dbd0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSBABN5S%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T170350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCICvci6LSFkpk%2FuoJ75lyx7q8e635A5d5HoOL7XHAdWQAAiBWhZL9chuPj1LuiKeFWGiBZ57z9IINu2OMVA2GEGIH9ir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMZGXIdYIbs0XM0Q5EKtwDIVoBXT7FZdPsnraEfXrgImyUj%2Bb8JTHKZtHjQfryQgRphvQcNl8%2F3fx0CWf7sb5IV4xBEI0UzYSDQ1I6vHcHq9%2BmaC0WgxKlREjHFxkVdR5UlBdrJ6o%2B%2BzsJPpqmCe9lTXiCtx54VjkLZIUqmJWe0M3NQgYQzVS0HT5aU6cHQhp41hMBydE%2FcwbfxlgIJuN6zvZK4%2BSrR1DxnzKfXNEQoBsLd2IDu4A3bYYy6Mbx2R0HRoXcr44GyO1echrWrmW1GLYj%2Bkq8tpf5TV313ieG0FD5FLf7bKPH2ek9OifaEWucIxa28Nm2mxZta7Mh09uNm2kklckpvGfSCUs19wzaC6Xxb3oyBUElxe15%2BtvKd5624CHwQY5fHxG2EBbaX%2B%2BFNubW3BOXkuqgKWXXwhUgpz8FngvUzlTQRoAbFm1r5xMjFZwld4lquvK%2BymvXg17TyLUyj6yGYHkVx1ow9WmsBxcj56GEIqyNsO%2FIXAAnhd5eQlrAVM9MfOhkt55vZUAVQ2ul2aJFaBbv%2BHES1jkW8Pq%2BjkTXz1YjNERTnSlRUMwvPjN2RlHzFAGTNr4%2Fv4i9SW0f0xzBS6b6Zrr6qbXsBYhY2P7RpTOxIIOnVF5qr2XpG1RXpNWRoTvTV4Yw7rrewAY6pgESSm5V0K1rKggQJc%2BZrJyTQl%2FzgMX6wIRIrpZy89DNitQ6%2FbOOVYC0Wth%2FGhJ1VrqN0mC5DVd6qq6nLDQRGx8DtFoS5n6R0RNl6kjpHfQryNgQpcZHJKPDvoCtz%2B2EN8jpRZvluZSkAoe4shn3CaZ5FjfThgHpinzT7MqAQO55hSw4ytDOmqBELaVO%2B%2BCdEzVjxm6JTCLbyi0CVyr4tgnGip3JR8Sc&X-Amz-Signature=558f05ee03c2b42b519420fa12bb2b5ba231505a05aa586fc40a21c4eafb237c&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675H555YS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T170406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIBHZE9e%2BUqkPnYFVSNZecVfw5SUwSIp8W5D8vAffIu53AiAiQsZr65fJK%2F6TGJXrJMH4xgzUaOs9hMDxQm4Z5tdApir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMdKJ3BApZTbA9b7TUKtwDOkXBBBKG7kJ6iedXcx%2BvjBqDbqvpB3t0hOC0cxUuy1o43xn%2F3HCEcouX0dxrMMx6DVHZDwIaSV%2F2bZivalG47sDtffpdkRszxy6agS0brqaE1dkHWsxOFGOaZ7lCNrxRHq7FJgUxIP%2BNzZCh55uT5nh2ETzEn6zNsYTOJOqhyqxrOzHWi21kn%2F3W%2B56t1s2TL40LoBvU%2FBrk9ppVV7s82Od4cnwf8%2B5ph%2Fs8KJs0xrQjghNEPgMhKaa3QGDk4eOwuUimDpqEW11sDSFuHej7j0gRJkoevXC5x5Ih%2Fjq3jLqctT9l%2B9%2FpLPqKY3GFS1PvU%2BsLlxZjORAs6iYQsD0XdaWRz9O7XFVY2Vax5u4CawcBRLR5mMN31RbKVzNkVfis9fEOBWqWj%2FgEYMp7w%2F7X6fkFK4Fa5ecZbD5aP4EybuF4oJUBiojSvw36aaPJgPVzWYH4aZIN9RnISImvl21u1HH5n4qE3uf3hPqumirDxnm1CWM4rx0MjUkhZTv3FEFBQc8KtC28gLWlq6X2Mu%2FVYPfeOhn87x52%2BH%2Fl%2BnR1rIoXAs8JRaiiu5u7UrJq0ZdB2PK%2F96Xc8qTEKemwg4ctJtG2rgdDyYqz6NSlf7WKGfXF7zNNhKAoa0CBGG8w8brewAY6pgFuoW9XP7Zitr9pKyT4xpyzieeiw4mIn7f9jI48tN9%2F8w899Cb2%2FJPgXqmW2VntSmyZls3Prq8jwRPhssqLk7rrkQMIjZRL4xm6adCElCjv%2F%2BB5XeCfsy2brTE6xuEBueUn5hQbNkGtO2L8FmblScRuEb3XMps6p4sn6E8Uh6nPLR8mnALdhPoqgrd49XFbEad1eG9Tsl1YMxtvXVZXiHqQanco4x9e&X-Amz-Signature=b862c1ee5c2bde72a66379744dccb37672053b46e25c1d9d33a3035544399d73&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMMRFRCU%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T170407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDpO%2F1J%2FTemQfywRpNKay8oGNQR50bME0VeNxXt%2Bap2wQIhAITuObWbLipDK%2F%2F18xGz2X%2B%2FxVsDZBPA4GWGAQCuU72XKv8DCBoQABoMNjM3NDIzMTgzODA1IgxmZ7OvXdQpw%2FfraMcq3AM3%2FFvfIHBJVwhnXouoHJrpMkEcm6eeo0bT9Eqy%2FbAnczaYE4IjWAqyKRsktAqaaHKixIEdvO97vt3FwgicfsGYh00CVa4RMGNFobx6n2ObWXJ0ttBq68CRSv%2B536W3ZzONKuP2nQO%2BMQKNqIzmwV7aeBTROHppAeMNVxsH8Wj7lrjJXsHo%2BDp8Nb3fT3kBPc%2FtKh0wZAYpTWGl29YfYTjsYD1sNDBlWp97p0GN8t2lfRqP7Z6VWBARcXLU5p63JkNWWhu9yDXgvmBjq7gXFg%2B2L6yqY3sgMNnodtFX02oxj4748Qn4OhTpgY3wo4HrvJv4N49%2B05PKrRIHtMZ%2ByGF%2Bx3F3XRuukCTfHvUPixTkS96F1tJCkDIkTyZO5Zw4P4V99wIdIvgohKYy0khcN0sWigsSAHW18ElHxifSGo1naohs6g2H32e8CAhbuT6V9F5Tl91hR72ZLwBfmv1xupqRZwzv1jJgVynLI663UtTEYwNBFxrIJ38hg71SdWdnM0J%2F0obVhcoDDgPJVczJyfamSnjVXxli9MIDgzlAJPUdEwYeZ%2B8%2FdV%2BlZ8or2WjpAmcZdh47sC%2BdpkYBXPfgKHA5DNF%2B9lft3GmVjS%2Ba4U0DAJdJpBlmP2WHrdPiVDCYu97ABjqkAW5VXFc560ClXRYzQmpLvqc82BJVC5171xSSrmjkImNS7J9h1YUKF6vAsMTLjVhcYc38GNoR15NTrP0YQpBP1i4h6ad44w2U7g5%2Bo3cOwRfOkJnsYr50jNKrihrxbr0Al8vhvquNZyUogvFqDvTv0XBxU8e%2F3xxkuY13KTIbnokecsDhMB4Mq0fJC7xHF7xNiA7z7HhbEoIqzRLRojH0QpuEXii9&X-Amz-Signature=1a819df4d0b1559edda3e57828a375900adf3f388b6ca9d0e00479cda52fb127&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSBABN5S%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T170350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCICvci6LSFkpk%2FuoJ75lyx7q8e635A5d5HoOL7XHAdWQAAiBWhZL9chuPj1LuiKeFWGiBZ57z9IINu2OMVA2GEGIH9ir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMZGXIdYIbs0XM0Q5EKtwDIVoBXT7FZdPsnraEfXrgImyUj%2Bb8JTHKZtHjQfryQgRphvQcNl8%2F3fx0CWf7sb5IV4xBEI0UzYSDQ1I6vHcHq9%2BmaC0WgxKlREjHFxkVdR5UlBdrJ6o%2B%2BzsJPpqmCe9lTXiCtx54VjkLZIUqmJWe0M3NQgYQzVS0HT5aU6cHQhp41hMBydE%2FcwbfxlgIJuN6zvZK4%2BSrR1DxnzKfXNEQoBsLd2IDu4A3bYYy6Mbx2R0HRoXcr44GyO1echrWrmW1GLYj%2Bkq8tpf5TV313ieG0FD5FLf7bKPH2ek9OifaEWucIxa28Nm2mxZta7Mh09uNm2kklckpvGfSCUs19wzaC6Xxb3oyBUElxe15%2BtvKd5624CHwQY5fHxG2EBbaX%2B%2BFNubW3BOXkuqgKWXXwhUgpz8FngvUzlTQRoAbFm1r5xMjFZwld4lquvK%2BymvXg17TyLUyj6yGYHkVx1ow9WmsBxcj56GEIqyNsO%2FIXAAnhd5eQlrAVM9MfOhkt55vZUAVQ2ul2aJFaBbv%2BHES1jkW8Pq%2BjkTXz1YjNERTnSlRUMwvPjN2RlHzFAGTNr4%2Fv4i9SW0f0xzBS6b6Zrr6qbXsBYhY2P7RpTOxIIOnVF5qr2XpG1RXpNWRoTvTV4Yw7rrewAY6pgESSm5V0K1rKggQJc%2BZrJyTQl%2FzgMX6wIRIrpZy89DNitQ6%2FbOOVYC0Wth%2FGhJ1VrqN0mC5DVd6qq6nLDQRGx8DtFoS5n6R0RNl6kjpHfQryNgQpcZHJKPDvoCtz%2B2EN8jpRZvluZSkAoe4shn3CaZ5FjfThgHpinzT7MqAQO55hSw4ytDOmqBELaVO%2B%2BCdEzVjxm6JTCLbyi0CVyr4tgnGip3JR8Sc&X-Amz-Signature=e1591e362b73ade87450263fae6ae4302706a6f6464961bb6112eb73afb35a2d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
