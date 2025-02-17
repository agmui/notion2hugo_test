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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDUIFFE7%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T170147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIGcwQ%2F3io1QpDj0J08zMGAGV2YRAyUnHJ4gw8zAigCkUAiBS1oWOc88%2BcuGo3vHrgtaJXdGut8eH1ZNQtU1HIy0T3Sr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMTgz55cXcgTQjebSDKtwD7eYy%2FQrhIre2JsB1R3Mk0qUdjXi1OwVBB6RTmv5DTn%2BPQDtBm25yUWLY0R8Vy9wVNtrHaEfR4atBP4jahhpUttXAlmnDKLJs1iix2zo5CaJq6apyxNEhfKI%2BHuDfw1VJi4fZm6yIr7CAL5UIM8HPiIvOygkfzsbr4mhYyUAXbHSXDqIiv6Ed4sralnLeTWTc4x6a67h0vFqsVWjJvzhbRaLMzlt9HllTw5vw5P7G6CEtlCTe%2BKxaIHPnwXUOuZTZhAwb2ajQyV8X6QvjZ4QbZ9lUs2Yo7o%2Fe%2B2yweirK6rhKpcyy57DAsmuDrcOSRCAqAsChJbtIwL%2FUOmm9v%2Bin2S51t21MxyAvsGlXJ03rRQ6DSPkxUrOJvZevrOe4byaX40MV%2BOfJWK6slJmkPbEE8cOCIs%2F%2FSis72LDZXtXJuJJvyMoaCBs%2Fy5aCXPpk9cYRJY1VBbyXe8AcKpsfFu%2FacEoaBq1E7Dy4F%2FqubHFRDhmHqRnB9s73Dk3QLmVxkswPFHGFBKXKbtzBEe%2B%2BAIfck7izEssGq9rtOIeT%2FJ3pWl6cIxOtv1153iy0%2FNQbwzGktwXInCbgqWgQAIRtKiJZnazdjq6QCiNLnD3cW%2BsDOGVGAsfhiqkOddKzzOMww8PNvQY6pgE4n7IExTsZvpmAVHXVfYQTwhqQIUBs3%2F2983y8VjuHqR%2FLcjNpVPJ2UuUWs7FIq2WjMU8zGnay%2BK%2BcYDdB21NKZSusu%2BIt8gwpdY2zzOS3DQEGfYWz19U2FezxxScYV62EkmbWMl%2FWmnv0J8gucWnluQYdohUclPrOzprVu%2FtcLgcg94N1L7GymYkck6kngIxsIiW5DaQnKScUTeJotQ8M5HfJcLY8&X-Amz-Signature=18e3e8fba6d2e8f57ea1c236dae2e667a1b58a48d7d02c756e7e19f1a77ac92e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDUIFFE7%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T170147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIGcwQ%2F3io1QpDj0J08zMGAGV2YRAyUnHJ4gw8zAigCkUAiBS1oWOc88%2BcuGo3vHrgtaJXdGut8eH1ZNQtU1HIy0T3Sr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMTgz55cXcgTQjebSDKtwD7eYy%2FQrhIre2JsB1R3Mk0qUdjXi1OwVBB6RTmv5DTn%2BPQDtBm25yUWLY0R8Vy9wVNtrHaEfR4atBP4jahhpUttXAlmnDKLJs1iix2zo5CaJq6apyxNEhfKI%2BHuDfw1VJi4fZm6yIr7CAL5UIM8HPiIvOygkfzsbr4mhYyUAXbHSXDqIiv6Ed4sralnLeTWTc4x6a67h0vFqsVWjJvzhbRaLMzlt9HllTw5vw5P7G6CEtlCTe%2BKxaIHPnwXUOuZTZhAwb2ajQyV8X6QvjZ4QbZ9lUs2Yo7o%2Fe%2B2yweirK6rhKpcyy57DAsmuDrcOSRCAqAsChJbtIwL%2FUOmm9v%2Bin2S51t21MxyAvsGlXJ03rRQ6DSPkxUrOJvZevrOe4byaX40MV%2BOfJWK6slJmkPbEE8cOCIs%2F%2FSis72LDZXtXJuJJvyMoaCBs%2Fy5aCXPpk9cYRJY1VBbyXe8AcKpsfFu%2FacEoaBq1E7Dy4F%2FqubHFRDhmHqRnB9s73Dk3QLmVxkswPFHGFBKXKbtzBEe%2B%2BAIfck7izEssGq9rtOIeT%2FJ3pWl6cIxOtv1153iy0%2FNQbwzGktwXInCbgqWgQAIRtKiJZnazdjq6QCiNLnD3cW%2BsDOGVGAsfhiqkOddKzzOMww8PNvQY6pgE4n7IExTsZvpmAVHXVfYQTwhqQIUBs3%2F2983y8VjuHqR%2FLcjNpVPJ2UuUWs7FIq2WjMU8zGnay%2BK%2BcYDdB21NKZSusu%2BIt8gwpdY2zzOS3DQEGfYWz19U2FezxxScYV62EkmbWMl%2FWmnv0J8gucWnluQYdohUclPrOzprVu%2FtcLgcg94N1L7GymYkck6kngIxsIiW5DaQnKScUTeJotQ8M5HfJcLY8&X-Amz-Signature=05b2a10e8bef35a89dff1d947dbb67f6983f03b358e537711cc490afba145384&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLLB4IK5%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T170149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIH%2FN%2FwzNlVQLu99cxdpuhHWnhjNHNcfJpC7pyrlGetgVAiAB8Ov1Jm%2FtoGlXwNoctIyYoY0jJwfQGzC0zBU2Ed6X9yr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMnHzc74U33mAcUhn5KtwDO6E76upK1lxNarOXIDfLqLM9ueSM87sgiE8ky4Xq5AszskJXXLKTzRVugRXRweW6bJiARsNwqd9MMBJKPYi%2Fr65jT9I3EpXWwFnIUWeiT%2BhVsBjZ6I3oe%2FN0V%2FpbbUdGBJ2WUe3rxPN1zL6Fjv6xfC%2FqX5Ow7hkJWYh7pUvlaj3xqF3AqMvDVqyPZdkMpEBGlyb7BmzIjJFDPphIDiCYf%2BkDF3sk3VO6aR8emwd6T7jbXHCPYv%2Bsc%2BwH7Zea81IAtr%2Fa54rpr2FqQoQMpnwO2BnAIDm3JWmcG4va8rPznXgQMhmpKVfgejR8qIo9xWpbCdMbMoxkjjQhqFTHeXnMn4lvEOBCwwTpLh5rdgDFfEKiNpWyVPntfGJQ6oeoZhNkPRqSPoa5qtf42Tm3XsDDS%2BCiM%2Bv0ra3isqHpleUE6EUUM64ojnal18JC8WcwMsxJwgjn5vCQrEbvaQiXDL2UYAFmnkJtsQYShbO4lqMh5ubvQKK%2FAJefdLufaEgcCfOf3K7qW2D9eTtWCiPArp0IglHMdyJEqrsIFa6iK0WcQmcR8ufJI3wS9qSSnak%2BSMze0%2BYJTTbzpiTpcMDODWvHwfaaktQLR8sVU%2F6NMHDyl0Ck8MHk7t2z62YU9NQwrcPNvQY6pgF61Hm1luwaaw5zsGjbKdUj7WiAiGKbj0gcPLe2KUtowr8gz%2BUMXrfuGzifKuhzqdW2msETfPosTnkVeQj4jz%2FkTNpT5uQZPqo91d9eZjya09V8Ip9wFn0k561otlNxvzKY7JnDCbaHeLSA5HE8CDGKoWY%2BnpbGRL8VxXDfnaGv3Kd7GQWAlAPWHgTQMtHQm5ppJ1qbNXLjZ2%2FC5H5Kj7W%2BFixzj%2B5E&X-Amz-Signature=7e5e8fd98e48a511025e605f69d1bfb6d98332eeb354246906bf87e7a7308f6c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBKFAAQP%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T170149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIBL9xtsUoXehQikrasXGAXKZ0WUp8TbtJQL6cwneqt3AAiEArunWsU9ztY9j54wycrpDecM7VaFQz10dtpAnPbdLcfgq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDL5%2F6QWRAy9rBzzgAyrcA8Dwr8OVPv2Lg0tEGgZ5sUbFhNtodscRiG9imZcBOYkJyycXOAvtEe80EjNPozF%2BxcOyQyHOTQZowr3S2Z7veB31Ia44M5vzyDzzE0guf8KBjCeS65hKZ4xEtypofSv%2BsNk2NQaooNM3uX5tFw76MS7p2SGuwSZwnoNqOR6FDPm0TU0HtgrBdGcAtF8Ydo0pQIT92yezNDdUhKF8YA4EvXPtrMQbxf%2Fe8oDkkMBqP3j%2Fa1%2Bup%2F5250xU8xVSHsBucinp1meYAs8x7VPA9RMCL53lznsWaQNIbGFM57AyvOFGIbn5Y920AUxxCbVYtNQPJWxWTkaGN%2ByVvClnb5KQGU6FNW6KlgYlTT1wjB%2FjuhFltKx8DSPn6%2BbBsrf%2BNqFvr%2BbAeHk1LySfhvuIF%2FnORkZey6VM261qXgpHKoopQjVIKbVVyRoaG2eMZmJSpbh%2Bnc3lv%2F09VAoNK0YYUiD%2FkV2zajsagjfbgIx1ykbxiPAtyC4pV3K%2B%2BXy3%2BIL9U%2Bd%2Fi5pHauawJc7T4CxB0KEt%2BmoeYcH1LCOTi9%2FVK11qSJCw3iSwgorCJt35gugpIWAlZ6lfB4UxH%2FNanGSjzqsd9H6cBI5g8NOlfMalfhX1C1oU3BtkBLgEvAoP3nbQML%2FCzb0GOqUBC7rV6S7%2FFHEncyBn65d6Jo4sk7IQeuf%2Ba%2Ft7WFa%2BXN7KfTw%2Fg80Soer6rkRSvo7Q6F5QdoIyJLm7X4pwBAaNBpBQrNQUw%2FgzWXPztlgkiKnMeIXL%2FrLIbjNH62GU0SyV5XS9s5DY6cV6nI8xelaMpNMZGeYzwXhqEY2dT8H2PoK6rZ9En6UwtaGLHnCpcj%2BhBKkI5QhnthhExdOyQ4Gn7FuF4B%2Fe&X-Amz-Signature=5b024b5397031a5baa11c6f892a18db9ea238a8f9a26d520f9078b8b0cf04ed8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDUIFFE7%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T170147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIGcwQ%2F3io1QpDj0J08zMGAGV2YRAyUnHJ4gw8zAigCkUAiBS1oWOc88%2BcuGo3vHrgtaJXdGut8eH1ZNQtU1HIy0T3Sr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMTgz55cXcgTQjebSDKtwD7eYy%2FQrhIre2JsB1R3Mk0qUdjXi1OwVBB6RTmv5DTn%2BPQDtBm25yUWLY0R8Vy9wVNtrHaEfR4atBP4jahhpUttXAlmnDKLJs1iix2zo5CaJq6apyxNEhfKI%2BHuDfw1VJi4fZm6yIr7CAL5UIM8HPiIvOygkfzsbr4mhYyUAXbHSXDqIiv6Ed4sralnLeTWTc4x6a67h0vFqsVWjJvzhbRaLMzlt9HllTw5vw5P7G6CEtlCTe%2BKxaIHPnwXUOuZTZhAwb2ajQyV8X6QvjZ4QbZ9lUs2Yo7o%2Fe%2B2yweirK6rhKpcyy57DAsmuDrcOSRCAqAsChJbtIwL%2FUOmm9v%2Bin2S51t21MxyAvsGlXJ03rRQ6DSPkxUrOJvZevrOe4byaX40MV%2BOfJWK6slJmkPbEE8cOCIs%2F%2FSis72LDZXtXJuJJvyMoaCBs%2Fy5aCXPpk9cYRJY1VBbyXe8AcKpsfFu%2FacEoaBq1E7Dy4F%2FqubHFRDhmHqRnB9s73Dk3QLmVxkswPFHGFBKXKbtzBEe%2B%2BAIfck7izEssGq9rtOIeT%2FJ3pWl6cIxOtv1153iy0%2FNQbwzGktwXInCbgqWgQAIRtKiJZnazdjq6QCiNLnD3cW%2BsDOGVGAsfhiqkOddKzzOMww8PNvQY6pgE4n7IExTsZvpmAVHXVfYQTwhqQIUBs3%2F2983y8VjuHqR%2FLcjNpVPJ2UuUWs7FIq2WjMU8zGnay%2BK%2BcYDdB21NKZSusu%2BIt8gwpdY2zzOS3DQEGfYWz19U2FezxxScYV62EkmbWMl%2FWmnv0J8gucWnluQYdohUclPrOzprVu%2FtcLgcg94N1L7GymYkck6kngIxsIiW5DaQnKScUTeJotQ8M5HfJcLY8&X-Amz-Signature=5e6e44d850d1f8090face4dbf7e4b9bb1e4d425bd9b57f98c66fe8bf0077d504&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
