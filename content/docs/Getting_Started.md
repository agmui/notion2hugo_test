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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OQ73LIN%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8FLWzerbgFGNUmmhZ%2BWVCsqwVm%2BT2N622pEhpSveQJQIhALg%2BgVI%2BXZvEoqWvlWRCP22zJ7oZxft2OaVEktrE9GQwKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2xgQWqGk4J8op%2Fisq3APcN541PdjHOtqJi8nq5DevuHRjOwdU929hsyZf0qeXMB62LTVzjwQto0dwkwo%2FU1bzCzD9gXyO9gjauaIU0VP3Y4BqgsJ%2BCTlrEjNVJjIHUOFUVLXMVFPxWX0Nm4UjDoq2TU%2F3mr3gsja9Xr%2B3t6dI4brsOF4LEPcOYTaWnv9U1Le62jN1Pn5hrZEXPdjtARAoW6YtDT%2BEcfAasE%2Bu8ab5MwJwHLjymo9B6TaWqajWGteNLPfCLrof15CJfyLVUQeE2isFY9nXrV%2BdnrVjrVw7gJPkFhlPU5BTmUfY8DdGrt6NPnVJ4PN182rPjEZ%2Fih5nVWM0VWYTdQZva0kac1%2FNFY%2FvL6MhyAsN8IuxMTegiGwLdP%2BdLPxWhDSMjM2ubi2d71CgE7QNFtexnz86jWH6dvc40dPjx8ZB9ttY%2BX1Ce1jlbQQFoanfVQ7EfQnAH1%2BRUVpcKK1UUytQucrH3%2FZqa54IsJe1XRY%2F9xeBy92jJ7ALRrzn7W6hlPJXE02az7uP76TobGsJzuh%2Bzd4xhhRsb2%2BkrcpFGzPc%2FTPfozQfdneaZNRiODyCodstmH5IKpLJ8bAtOahJ9yMpCidUaXUK70Pe8awf4uctdpiHUYVtNElIBKQ5ZmB%2F8TQwCjCFkqe9BjqkAboE96O7FS939m87IqDTsdVioNX6cofPNfymGrdZioPkIMRIBDNxePdw2TeIjbxNB7Gm%2BRFPibeViHMte8jTj2AFlUXBMNItKorEb5%2BsrpyKII%2F6NfjRpL%2BUjlYpzDUSR7qRLDQ3wAP3zsarNLDXpeiD0dhMT0oSdFvFOaMXtbx3BvOdRrOUVlRPSdFVoulvOehgvJ7aM4SGXWXVeiXHJDgsUxBz&X-Amz-Signature=23441ddad3072b876e1d862658cc36db52c76473da8d540896c3d1281ca9d41e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OQ73LIN%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8FLWzerbgFGNUmmhZ%2BWVCsqwVm%2BT2N622pEhpSveQJQIhALg%2BgVI%2BXZvEoqWvlWRCP22zJ7oZxft2OaVEktrE9GQwKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2xgQWqGk4J8op%2Fisq3APcN541PdjHOtqJi8nq5DevuHRjOwdU929hsyZf0qeXMB62LTVzjwQto0dwkwo%2FU1bzCzD9gXyO9gjauaIU0VP3Y4BqgsJ%2BCTlrEjNVJjIHUOFUVLXMVFPxWX0Nm4UjDoq2TU%2F3mr3gsja9Xr%2B3t6dI4brsOF4LEPcOYTaWnv9U1Le62jN1Pn5hrZEXPdjtARAoW6YtDT%2BEcfAasE%2Bu8ab5MwJwHLjymo9B6TaWqajWGteNLPfCLrof15CJfyLVUQeE2isFY9nXrV%2BdnrVjrVw7gJPkFhlPU5BTmUfY8DdGrt6NPnVJ4PN182rPjEZ%2Fih5nVWM0VWYTdQZva0kac1%2FNFY%2FvL6MhyAsN8IuxMTegiGwLdP%2BdLPxWhDSMjM2ubi2d71CgE7QNFtexnz86jWH6dvc40dPjx8ZB9ttY%2BX1Ce1jlbQQFoanfVQ7EfQnAH1%2BRUVpcKK1UUytQucrH3%2FZqa54IsJe1XRY%2F9xeBy92jJ7ALRrzn7W6hlPJXE02az7uP76TobGsJzuh%2Bzd4xhhRsb2%2BkrcpFGzPc%2FTPfozQfdneaZNRiODyCodstmH5IKpLJ8bAtOahJ9yMpCidUaXUK70Pe8awf4uctdpiHUYVtNElIBKQ5ZmB%2F8TQwCjCFkqe9BjqkAboE96O7FS939m87IqDTsdVioNX6cofPNfymGrdZioPkIMRIBDNxePdw2TeIjbxNB7Gm%2BRFPibeViHMte8jTj2AFlUXBMNItKorEb5%2BsrpyKII%2F6NfjRpL%2BUjlYpzDUSR7qRLDQ3wAP3zsarNLDXpeiD0dhMT0oSdFvFOaMXtbx3BvOdRrOUVlRPSdFVoulvOehgvJ7aM4SGXWXVeiXHJDgsUxBz&X-Amz-Signature=f1961f92f813a034df4a1b51579c1ba1811d4ef424703c59b7a69ae3f94ed2ed&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4SBTZYV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLkHWi374QKpwF51jbD1oRqAQwyI5O2QVIYhdHPkSOmwIgV1RC2jjsHF0k9WXx05q4Bl9Sts%2Bubzi%2FyLfqEztBBeUqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFls%2FXgtHrzgQYc7zSrcA2NVmZPffoGgOk00B9udpdmJ%2BKD9FIYk0yGWQeKYJrsWML%2FkqXZ4ROQDSnmWuu8yZzQQARRVjOCedMTHnZZ9ntxeC1k%2BufaR79QXxMIX2CDdfLrf%2FJkweFyv0Qoi7%2Fn1mLtgEVAo6u%2Bk6AGuS1hvqIQci%2BmA%2B%2FwmACRYT81LULneo3dc7BWKuNjDOfo2u3dQWX7C7QJhbIDz896AYirx81dt7gyXeRfSeOHQC5iyEdWIfpUN77hDE0T796pHMQ19rA2Hs4O%2BvUba7EuhoiIk5TXPsy782fDJTflIZhO%2Ba9JYAJr9fzhqWp0X9JNHvKgAWoKiy4IaD3ajaFMcQw%2Fvg6MydFR5weQffMui2szN7U5iMvHlk4BYg4bXnfoTQ%2BDNbSuzzdw3E9PKk031b9TS4oPUp94ItR63sEifwSyPbK3ltXMdNdNTQE2pid58zrEBgtGBMvVytCTLKxvPjQa4SoGrVosBJNdCeryCgEIExOYCZ%2FtlO6yBorlelPiGlZq%2Bnd%2BTvxT%2Bfud4GgS%2FQGXEiQE%2BvKxeXCKeB1tS77BlOlTh6LJrbueWozdIB9LHLAdHO6L8GflobzgeMcXkOjQDxJLY8GBooo7DpgJkVy1gAlYbZ4Nu6ySVVZfxccQXMJOSp70GOqUBM0AYKSdosAc4JFdeXj7OVQYRV2MqrHNIf3h5h%2FRImqFcZUnAX1auzCKmpf8Jhjl4ToKEhdfKUGjj%2BSPvwxnExewiQWx75aBiELE%2Bdozfpm54mg%2FFXTW9Fr2solEckQkIGlcbYpnmUqp6bTNr4grwugKWwvYTAZHvMuj6ot7wqmYWmAemSgVKvvNYqzLmQ808td9mChtDTWEYetIj3nVj6sNDnySl&X-Amz-Signature=b85b982a93b600ce29b6907afa0add5cba571d2b355b3cb8f804e8b0781529ff&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW6JNSNB%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0uDHU6xnbxgUDMxTBuqdJn8QWnDw8x6pX9bMtxMMLKQIhALWDCY6dMvLLN7P9D5c%2FYhJYEWIs8ERHr9qVD86SN4MJKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxh9cKgFRTiOcD4VPwq3ANjJd7tEDdBUj6XEOzrJ%2FAl5W1T%2BBU5qGnPGF6G%2FGSrVULKAkiZkDwoptSClLKZseM%2FSbBBWin2KGc1wBcj%2BwCH8itKDhkCMQg9Pu0RM%2FFCcD1Lx88lLcZZM0Oq9BVpclylwENcj6b%2FCAftxt9KoEN5GdAN8WESa14dUVoOuP%2FZ0VVM9ok%2F5tCcK1lBKufA7VcHXZlc6NBUPtvV%2Boi7fR7R2WV%2FEi2ya3GzhTCN%2FveMZDDM3wIig10COt9zqhIFSRtb1Cm0xKK9dSFKzLw%2FhxC8Dm7i2V%2F0cbN3sxkzL%2F%2BMJBdXfeT53uZZI5YCVGT5RRTcoRdmwKMmFfOW4zIZSo0N2lulR53cCImxUi5cX2ZquAbg24%2Fua1S7SHRB4%2BCemntEcpi%2FyhKbgVcPRSiv31yWvgLHcXCSq2OmrDKzN1WdOjQcGleWRGDIJO7kzQ6xjH4W45fXUqhFlGk7y%2F1UBC50Qck4pSOLDFE0gGFPcN3Y8%2FC%2F2stL9kZm7Gf%2FlCELH%2FckJTRS%2BHGZsnL6C8k7bc6Nz8G5BlxJAvBR%2F4LJYkZmJnttx3FddnANpzahUp3aBihsXvjpgcmZyacGynDDR4coOKyBahjgEyH%2BPzxsh1YiSRjcgtnVgHAmD48QezD8kae9BjqkAV1H3CG1rE9OhRBdfKXGbcNqXt3RtK69%2Foo%2B59WeQDpAnac7ErD7BEJy7xsXWJa%2BCNc7f0wgnCgreZ7yI0YpiKyvuyfFgZkDLo3ElzSIYMutA60iijGoGi08Xh%2Fo2bAaUfDNm97UDYvayIuZWRZpDNTAZnVk0u9B2pdyycAtxGXXpJozXShFiSljbQnMcegplIwUnDVWfwfzdY%2FxxLhFwbJPcP6b&X-Amz-Signature=29a7e2b354a9bf15f3d92d3f358d0d363a0b21fb02b9fb4e287bf35a13fe65c9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OQ73LIN%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8FLWzerbgFGNUmmhZ%2BWVCsqwVm%2BT2N622pEhpSveQJQIhALg%2BgVI%2BXZvEoqWvlWRCP22zJ7oZxft2OaVEktrE9GQwKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2xgQWqGk4J8op%2Fisq3APcN541PdjHOtqJi8nq5DevuHRjOwdU929hsyZf0qeXMB62LTVzjwQto0dwkwo%2FU1bzCzD9gXyO9gjauaIU0VP3Y4BqgsJ%2BCTlrEjNVJjIHUOFUVLXMVFPxWX0Nm4UjDoq2TU%2F3mr3gsja9Xr%2B3t6dI4brsOF4LEPcOYTaWnv9U1Le62jN1Pn5hrZEXPdjtARAoW6YtDT%2BEcfAasE%2Bu8ab5MwJwHLjymo9B6TaWqajWGteNLPfCLrof15CJfyLVUQeE2isFY9nXrV%2BdnrVjrVw7gJPkFhlPU5BTmUfY8DdGrt6NPnVJ4PN182rPjEZ%2Fih5nVWM0VWYTdQZva0kac1%2FNFY%2FvL6MhyAsN8IuxMTegiGwLdP%2BdLPxWhDSMjM2ubi2d71CgE7QNFtexnz86jWH6dvc40dPjx8ZB9ttY%2BX1Ce1jlbQQFoanfVQ7EfQnAH1%2BRUVpcKK1UUytQucrH3%2FZqa54IsJe1XRY%2F9xeBy92jJ7ALRrzn7W6hlPJXE02az7uP76TobGsJzuh%2Bzd4xhhRsb2%2BkrcpFGzPc%2FTPfozQfdneaZNRiODyCodstmH5IKpLJ8bAtOahJ9yMpCidUaXUK70Pe8awf4uctdpiHUYVtNElIBKQ5ZmB%2F8TQwCjCFkqe9BjqkAboE96O7FS939m87IqDTsdVioNX6cofPNfymGrdZioPkIMRIBDNxePdw2TeIjbxNB7Gm%2BRFPibeViHMte8jTj2AFlUXBMNItKorEb5%2BsrpyKII%2F6NfjRpL%2BUjlYpzDUSR7qRLDQ3wAP3zsarNLDXpeiD0dhMT0oSdFvFOaMXtbx3BvOdRrOUVlRPSdFVoulvOehgvJ7aM4SGXWXVeiXHJDgsUxBz&X-Amz-Signature=4ba0c575a22a9f16da9db1144a9a215294f982cb1466bd70c9b6529b42fca61b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
