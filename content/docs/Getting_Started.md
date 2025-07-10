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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSUDRB5E%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGI0DZLQSQFT28MQQNVHop%2FLUFqXMettPjC%2F0VGvpX%2F%2FAiEA1%2Bu9RvdDi67yIUh6g8eXznO95Yawuva8uJIdVNaLTyQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BFCWzs94B8SGrprSrcAx4NNhx%2BHgY5o4d6%2FPFXZxKQSWV%2BvT%2FltEEX4msKQucgjoLdHh9W%2Fs2oUsXSCktRf83x%2FfDUW78tUzY9ub5ZS%2FxBO8dN8s7n4Bz660mEiq%2FnCdOiwsEoqtCVhSivuMv5w5IiEM%2FwvriMxD7XCun9GXKHBGrjHUCJxRXnv5o2Xgtxaia%2BNMuc8oOtn%2BQ0THE7ap8UD6tUOGFjIdHus5oFsKj9g6U1axBnh69eUzdWpNOeccNBNfrer004JeouPCI6K1abAvo89Vm5lpce636qGmRw4BrqQFgZNMPHdTyC4wOThTIQjkH7WQPLe%2F9XdriqLF8m%2Fd62kcP%2FqmddCXqe5f2LHqQJqqWtpmuO5Pv%2FaL6BZ8BmjDSxLQPJXPO4jq2c6VAdLO8hh1ceCJuWJhiSIDQz%2BiYMV%2F5G5Ozwb4b%2Bb6BEm%2BI0u%2B8pFy4dtVhNmkwCBh%2FC7Ck%2B7a1kEnFvlOhe49wO5fOC%2BgX2akZJAWLM8E0p%2FgiXPocOKHreR6hAdWpmFDzRXU%2B8%2FKD8ptE8a9qJXeWxZyrxdf0r9MOXCOg%2BRIOkGZE8JzOZa0F%2BZpJov7OOerKvlEQvQibJrLuEhd2nIib3jSa5n76iqtp587CLxbJYhmgfaPqD80U%2BMlfdMNDQvMMGOqUBnSPYg87vVXDMyJWGcP5dxusqjznnE4ZJz2sMtzk1EQeZmuFDqFpl2hoEb1VBbkHhEBPAj6jtPqhSo9GYjs1kk8ithqh88izRwtDlcSdI3OgWgsdtJszXCsbUQQD3NQ0WFC9OgSK2J4Vunp1h5ss1RgkHHr3IT7Cj1ts5JcQNJKvLX8vziRHFTPMepZ7Ya8cRcRddf5td4LcBtEC5fyavLbHbiFPP&X-Amz-Signature=d48579aeaf63bd10179a0d31ba015c4d71172d5b044c8b47127d216576d224ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSUDRB5E%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGI0DZLQSQFT28MQQNVHop%2FLUFqXMettPjC%2F0VGvpX%2F%2FAiEA1%2Bu9RvdDi67yIUh6g8eXznO95Yawuva8uJIdVNaLTyQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BFCWzs94B8SGrprSrcAx4NNhx%2BHgY5o4d6%2FPFXZxKQSWV%2BvT%2FltEEX4msKQucgjoLdHh9W%2Fs2oUsXSCktRf83x%2FfDUW78tUzY9ub5ZS%2FxBO8dN8s7n4Bz660mEiq%2FnCdOiwsEoqtCVhSivuMv5w5IiEM%2FwvriMxD7XCun9GXKHBGrjHUCJxRXnv5o2Xgtxaia%2BNMuc8oOtn%2BQ0THE7ap8UD6tUOGFjIdHus5oFsKj9g6U1axBnh69eUzdWpNOeccNBNfrer004JeouPCI6K1abAvo89Vm5lpce636qGmRw4BrqQFgZNMPHdTyC4wOThTIQjkH7WQPLe%2F9XdriqLF8m%2Fd62kcP%2FqmddCXqe5f2LHqQJqqWtpmuO5Pv%2FaL6BZ8BmjDSxLQPJXPO4jq2c6VAdLO8hh1ceCJuWJhiSIDQz%2BiYMV%2F5G5Ozwb4b%2Bb6BEm%2BI0u%2B8pFy4dtVhNmkwCBh%2FC7Ck%2B7a1kEnFvlOhe49wO5fOC%2BgX2akZJAWLM8E0p%2FgiXPocOKHreR6hAdWpmFDzRXU%2B8%2FKD8ptE8a9qJXeWxZyrxdf0r9MOXCOg%2BRIOkGZE8JzOZa0F%2BZpJov7OOerKvlEQvQibJrLuEhd2nIib3jSa5n76iqtp587CLxbJYhmgfaPqD80U%2BMlfdMNDQvMMGOqUBnSPYg87vVXDMyJWGcP5dxusqjznnE4ZJz2sMtzk1EQeZmuFDqFpl2hoEb1VBbkHhEBPAj6jtPqhSo9GYjs1kk8ithqh88izRwtDlcSdI3OgWgsdtJszXCsbUQQD3NQ0WFC9OgSK2J4Vunp1h5ss1RgkHHr3IT7Cj1ts5JcQNJKvLX8vziRHFTPMepZ7Ya8cRcRddf5td4LcBtEC5fyavLbHbiFPP&X-Amz-Signature=2368c9df559655ece2c0f4e51fbed562d452595b974d234a37f2fdefbdabb4e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSUDRB5E%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGI0DZLQSQFT28MQQNVHop%2FLUFqXMettPjC%2F0VGvpX%2F%2FAiEA1%2Bu9RvdDi67yIUh6g8eXznO95Yawuva8uJIdVNaLTyQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BFCWzs94B8SGrprSrcAx4NNhx%2BHgY5o4d6%2FPFXZxKQSWV%2BvT%2FltEEX4msKQucgjoLdHh9W%2Fs2oUsXSCktRf83x%2FfDUW78tUzY9ub5ZS%2FxBO8dN8s7n4Bz660mEiq%2FnCdOiwsEoqtCVhSivuMv5w5IiEM%2FwvriMxD7XCun9GXKHBGrjHUCJxRXnv5o2Xgtxaia%2BNMuc8oOtn%2BQ0THE7ap8UD6tUOGFjIdHus5oFsKj9g6U1axBnh69eUzdWpNOeccNBNfrer004JeouPCI6K1abAvo89Vm5lpce636qGmRw4BrqQFgZNMPHdTyC4wOThTIQjkH7WQPLe%2F9XdriqLF8m%2Fd62kcP%2FqmddCXqe5f2LHqQJqqWtpmuO5Pv%2FaL6BZ8BmjDSxLQPJXPO4jq2c6VAdLO8hh1ceCJuWJhiSIDQz%2BiYMV%2F5G5Ozwb4b%2Bb6BEm%2BI0u%2B8pFy4dtVhNmkwCBh%2FC7Ck%2B7a1kEnFvlOhe49wO5fOC%2BgX2akZJAWLM8E0p%2FgiXPocOKHreR6hAdWpmFDzRXU%2B8%2FKD8ptE8a9qJXeWxZyrxdf0r9MOXCOg%2BRIOkGZE8JzOZa0F%2BZpJov7OOerKvlEQvQibJrLuEhd2nIib3jSa5n76iqtp587CLxbJYhmgfaPqD80U%2BMlfdMNDQvMMGOqUBnSPYg87vVXDMyJWGcP5dxusqjznnE4ZJz2sMtzk1EQeZmuFDqFpl2hoEb1VBbkHhEBPAj6jtPqhSo9GYjs1kk8ithqh88izRwtDlcSdI3OgWgsdtJszXCsbUQQD3NQ0WFC9OgSK2J4Vunp1h5ss1RgkHHr3IT7Cj1ts5JcQNJKvLX8vziRHFTPMepZ7Ya8cRcRddf5td4LcBtEC5fyavLbHbiFPP&X-Amz-Signature=29af40407f0e39c80ce2e1a1010efc633dfeb0fef2c20f658e6fb3fd55bd364a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MOPG7W%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2ZuCzkzlur4blde0EKXi%2Fm3tMjSjRRqHZ%2B6PKaoLIowIhANMxAtRXPnd8WSSjYbijhgaNEyaeemmtclv3u6eXGMtpKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGRB1RHHAIzplo9KQq3ANcGnXpEoQ6VNKU2AMWW9NnODTe4JqitMZkGzTDkLT0SFInYsoaMKtNhC4AY%2FVCD3u9UeW%2Bn75nhCFsAkZwMA9PGir8FumHanpWuqhPdAOqGNJ1nPv%2FFqIw%2FCLn17iUwhpNRQR35UFHF7FOwmZV7cxqudVVe6ZanpvSsYitzH8BRWPlQ%2FnljEYUjvBIxlYkjlgSTmlcJ0IuYUl9yEiuE7b2drWt%2FcaK4YLummJ4naEkyRN6U7XYQ46o1Y2vej6Q0cq4iMnV%2BqGqcDAp0RwYNf%2FPxSSCCiQl6ZjofjZtBnIwVtZUIgJlyhNcuhiKJVYIojcBhCT41TqYkxZ3RHOVhmc6HzoK2Uefa4TfULpTIn76y5nL9JrKw%2FusjFdSZnXLt2hCUNgJU%2BtbHTTivcrAE7F1xu5sGsAfvWf9b8%2BoKBr8juTeYKwu02fRhUrYBnkEg3QdNyUjUcWM62C%2BrsTVczTJx8bWF4a6sOjQgwLk6e%2B%2BHsnPfQU777Ya1rW3udTQiTY6vL1TkclbLuP4RlGn7puh2r5OjRDravWNLTRW0Efim7USufMR0sNCeXXfSt4k%2Fv%2FU4Jb6LLgYfvB5F4%2FfCjHA8toAW2A%2FMu1eLYuAuLuBql1O9fjIKIDJBrbfqDCg0LzDBjqkAXJ0rrZJCT7k%2FUwulmvIXvQ%2FCaSzqq5SMYq13drE24CXbhJi4gWQkmSwnQ%2FgKJSByk%2FEXTadkTu4FGsBqaqQepIb8GxZFvQU8QK2vygBsWuIGpAxgzwMD4vtJmvppJ8P23YTZrNZlBv7J%2F0Ia3%2BLwkDBABP%2B08zEgS6FrwF8orWS2sg2KmzYRV8oVL%2FV0Qe7HUozIX2FkI2SMHZjoSGnzQ8uTHmw&X-Amz-Signature=f1fe288ea9a3fd14421873a8b6dc1902d92120972e8584ea13a801ced27651d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTZESJOG%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG5erIeV9bb9ZEu8wSYkWVa2H3btN7TvJ9fxnsuIyOoIAiEAjhIxV4vt0pfWFgOe0n2%2BuWHmynDtsysnTn%2F9PWhuQ7EqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGRdM1nYPEyvMTDrYircAyzsBENwa1eQ1RTe7yYzZTjVgkrMctAr7cjqnCzVwRiXBJBx9dXhwfEfdz%2Fqdn4UuJnBeESvBIbRzs%2B29OvtgE3PvLwz%2BbfZfEDpEh8oMW0PR%2BeYICKIJgdbsqsJrCmt84qdhmL%2B6Tzpqa77cdV9FLYGCFgsnlGy%2B%2BChqi0xu8K%2FigfeuQVKaRJjLZPPnLec1ZzJi1RQENZne5%2BdwIRPGW%2FIzIKITtanaBxXNAIBfGtAl5DJ9V246BaMdjYmR82xSN0NJO%2FJBbCxF51UOCQFpzXymUY264iDl1Pdym7Vg4cZYvwuW5C5BVvduSMOuGkgy%2BtBwL8HCt7d8nVpdAsoG0FNtSTIj1z81NswIlNzSgHxEA7fKFs9r2vxxjOzLXxc60pEz6ZcKLQAeRVrHjIQ0yBFFrxIRpsBYcwW8M03t80qg3pj7c2Dy3l3kSif51MVelvvZNEcFmmkRjLa4oPxNpcDL6pZ%2BCOTJrvqVLb%2FL0tMjp20Mg45QrBxwqW3z03taFhMKhaFGTD2x0RspNPak4JjhNsUi%2FCl8m7Gnz4jkByt1Dw466ZLDNp3%2BanM8p40NRNzFwPnNiPLjWaZ4Vus5maCDxzVfNjPNeqbFHo6h%2Bla76Tfphbd6n%2BWKGFgMPLPvMMGOqUBd6C3MhnrDdTN1mbr1I3FWQRQMQubPlYWikrG34EtUYIKSnKmVVMX8HwvqILRraO3eYOjyl6PlsdNhd8BXmGt%2F%2FrdWOCB%2ByQDJiYbTE4%2BqPqEbXd%2BFyQ1p6x1iznHihXBYkyiPS45ilW%2FQeFPoVs5jz9Q%2Btk3bjR9UMHgDvERTgM4mm1RvZ1llX68WhQ%2Be5U6zYQdgbYhyE78%2BTX9A%2FVIsT%2FKeb7r&X-Amz-Signature=0d16720d0cb1388eef865732f715964c69ff415d0dfb4f28c84894d6bbe6fda4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSUDRB5E%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGI0DZLQSQFT28MQQNVHop%2FLUFqXMettPjC%2F0VGvpX%2F%2FAiEA1%2Bu9RvdDi67yIUh6g8eXznO95Yawuva8uJIdVNaLTyQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BFCWzs94B8SGrprSrcAx4NNhx%2BHgY5o4d6%2FPFXZxKQSWV%2BvT%2FltEEX4msKQucgjoLdHh9W%2Fs2oUsXSCktRf83x%2FfDUW78tUzY9ub5ZS%2FxBO8dN8s7n4Bz660mEiq%2FnCdOiwsEoqtCVhSivuMv5w5IiEM%2FwvriMxD7XCun9GXKHBGrjHUCJxRXnv5o2Xgtxaia%2BNMuc8oOtn%2BQ0THE7ap8UD6tUOGFjIdHus5oFsKj9g6U1axBnh69eUzdWpNOeccNBNfrer004JeouPCI6K1abAvo89Vm5lpce636qGmRw4BrqQFgZNMPHdTyC4wOThTIQjkH7WQPLe%2F9XdriqLF8m%2Fd62kcP%2FqmddCXqe5f2LHqQJqqWtpmuO5Pv%2FaL6BZ8BmjDSxLQPJXPO4jq2c6VAdLO8hh1ceCJuWJhiSIDQz%2BiYMV%2F5G5Ozwb4b%2Bb6BEm%2BI0u%2B8pFy4dtVhNmkwCBh%2FC7Ck%2B7a1kEnFvlOhe49wO5fOC%2BgX2akZJAWLM8E0p%2FgiXPocOKHreR6hAdWpmFDzRXU%2B8%2FKD8ptE8a9qJXeWxZyrxdf0r9MOXCOg%2BRIOkGZE8JzOZa0F%2BZpJov7OOerKvlEQvQibJrLuEhd2nIib3jSa5n76iqtp587CLxbJYhmgfaPqD80U%2BMlfdMNDQvMMGOqUBnSPYg87vVXDMyJWGcP5dxusqjznnE4ZJz2sMtzk1EQeZmuFDqFpl2hoEb1VBbkHhEBPAj6jtPqhSo9GYjs1kk8ithqh88izRwtDlcSdI3OgWgsdtJszXCsbUQQD3NQ0WFC9OgSK2J4Vunp1h5ss1RgkHHr3IT7Cj1ts5JcQNJKvLX8vziRHFTPMepZ7Ya8cRcRddf5td4LcBtEC5fyavLbHbiFPP&X-Amz-Signature=fb400c49dee913852f8a58ba7c4b352b141a687a0b0755a0dc4bf9fa024cd596&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
