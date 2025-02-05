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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU5UQKPU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDdH04LdOjAl3Vw8gb9jIFkUHDPIrmZGQAuWKD26dDqeAIhALqVcFL9ARef00NtlHTMWvnAmsVgXkQ0jfKtHk6f5RE9Kv8DCEQQABoMNjM3NDIzMTgzODA1Igxp8IfMobYEYcK9Akcq3ANy4HZ8Lf2PGT%2FybKDG%2Boa2r4tlCXlny7dmo6%2BpVq4rtC%2B8ew751HoXjV1BHHVqbiKkVIydRRgWWvWt9PjdWOYp5TZaSoZzFxA10AqAyebW5DhOQHPXz2PvK%2FsVkqUCrKwYK%2BgkaCdJqqdyXS%2FR6v2K8zQjjzM4tXtIUDMZDBa8Lje9VYrISmQhwtrjVMcYbDAPHc4qbuRI%2FOEv9LjTxfiyeLaSPIcf%2FyLP0rJTUGqJxO9iFp%2BYtuEy%2BT%2B%2BbxLzJ6hyZPexoGlSWhdX8TtSlXT3GA%2FujD9oweq6lCKPJpTozrKt04UB3aGT9eoxuXZY4I70GR8c4lZTIIvmL3zeRg8WPtgB2jZkv6uQB8EVECd5Dw8Lqoaio1Za7zLL4BlgJ15wQ9rrORBNlDk7HomDtn608NRYzqcl0QOK1vGAs04u8exicLxa91Cgp3uMpCLl%2F87sfjsC2gn1cTqrhakDFOUdXk59eL7CFI4QPkSaarBI0FtckTW3Pl2ZP%2F4QEiD1Nav35eKGPTRzVtoeLwJEusc%2BEXWNEFGJbfPGK7vulIMV9ekQOiPLOBQHiSw5XLhUEaiyEHZZ8kDtH2oEu57%2BoYugzfAKDXZuS2WIf9AplYr1rvPnbOhA7tteWUEOcDCZjI29BjqkAfga%2F9r6%2FljUpAcTxZvaCqxu7mvCcNF6v0u4IGc8Yg4TiBU9ZmFa09QXzNO81XLawLJ5x9qZP%2BpFvls%2BBg%2BvBqwXsnJ1g9JJc3W%2FD6K2XVQBaCxyFIvK7MWvpkFqJpIr%2FER1TLH7ck3UZ01XFnPCr7hqT%2B%2F8czec%2FIQZzWqMmS34XuonzL1GFwd7ObzuYaZs98OSzw1tMYQhrK54AdJ7A6AGTjI%2F&X-Amz-Signature=892693b351dfdf8abe4d8d4a80fde04af53983618b5df5df22c658c4f231eb3c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU5UQKPU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDdH04LdOjAl3Vw8gb9jIFkUHDPIrmZGQAuWKD26dDqeAIhALqVcFL9ARef00NtlHTMWvnAmsVgXkQ0jfKtHk6f5RE9Kv8DCEQQABoMNjM3NDIzMTgzODA1Igxp8IfMobYEYcK9Akcq3ANy4HZ8Lf2PGT%2FybKDG%2Boa2r4tlCXlny7dmo6%2BpVq4rtC%2B8ew751HoXjV1BHHVqbiKkVIydRRgWWvWt9PjdWOYp5TZaSoZzFxA10AqAyebW5DhOQHPXz2PvK%2FsVkqUCrKwYK%2BgkaCdJqqdyXS%2FR6v2K8zQjjzM4tXtIUDMZDBa8Lje9VYrISmQhwtrjVMcYbDAPHc4qbuRI%2FOEv9LjTxfiyeLaSPIcf%2FyLP0rJTUGqJxO9iFp%2BYtuEy%2BT%2B%2BbxLzJ6hyZPexoGlSWhdX8TtSlXT3GA%2FujD9oweq6lCKPJpTozrKt04UB3aGT9eoxuXZY4I70GR8c4lZTIIvmL3zeRg8WPtgB2jZkv6uQB8EVECd5Dw8Lqoaio1Za7zLL4BlgJ15wQ9rrORBNlDk7HomDtn608NRYzqcl0QOK1vGAs04u8exicLxa91Cgp3uMpCLl%2F87sfjsC2gn1cTqrhakDFOUdXk59eL7CFI4QPkSaarBI0FtckTW3Pl2ZP%2F4QEiD1Nav35eKGPTRzVtoeLwJEusc%2BEXWNEFGJbfPGK7vulIMV9ekQOiPLOBQHiSw5XLhUEaiyEHZZ8kDtH2oEu57%2BoYugzfAKDXZuS2WIf9AplYr1rvPnbOhA7tteWUEOcDCZjI29BjqkAfga%2F9r6%2FljUpAcTxZvaCqxu7mvCcNF6v0u4IGc8Yg4TiBU9ZmFa09QXzNO81XLawLJ5x9qZP%2BpFvls%2BBg%2BvBqwXsnJ1g9JJc3W%2FD6K2XVQBaCxyFIvK7MWvpkFqJpIr%2FER1TLH7ck3UZ01XFnPCr7hqT%2B%2F8czec%2FIQZzWqMmS34XuonzL1GFwd7ObzuYaZs98OSzw1tMYQhrK54AdJ7A6AGTjI%2F&X-Amz-Signature=0be06b86876864b92e317c2b3dc58035285bff7480ac898aff608e45090d9cae&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FKD6CXO%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDcHpXjFkNOMO7Wkfc5m17VoJ%2B3pzOO1aA6AjJhTSlxIgIgDUsoRrcclemjjL%2BKTb%2FPqmeRofrpDCUJ8%2BUtXUkammQq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFIaMO7xp3W12i8DTyrcA%2FXa%2B8EIUWyBe0Rf4xS0D6XU3rgqslG4ciCPdO0Qs5kfRCmNnCGYIqRP1Zk1R9IFB2Q5NI%2B9ZlD2KUkwIysxlNlIuM0QBYsLPqrA1L8I7E0%2B37eqPHL%2BeQf1wcLaHUSd1LjMQ5%2F424IRCSr4DfA32CPeSt9s6MDeesD3cchdCJE5b%2FIer4cIwEt9a8NdhBEZl3%2F6xNuxCAj0wMhLDb6ysf8gjrVTPYCkWe9X4gvlH9KZe2G%2FfiB%2BdALnGN6r3AoQg7YcSif%2Ftl6LhLYs2H64uQ2yuzawGLREA2N2TRvcYji1t6DGBicPkTH9zN4ODIIZdvBeEmRvDvaFjDEJS0Q5HqzZA26ISGbXKoHYiasw9DC6NGOmWaKYXhSX3klkkNNth2b3TcXZyBgpWCIcKNyr4zbpRzQjx5UKp%2Bfs1BtmQhHT%2BLr07No6lLkfAmwgG9d%2FKxEsxbi%2FpFkMRra%2B%2FxMri3aZHEqeX4oQKNjq6nyW2yxokCmlFFTvlkTsAqWuu6aFRJwqYg8LqJkZjXLDJUabUXs%2BPjh0LX9MHxJIszbH4XgkaD4W4tCoNQkVoE6XkKtxC6b8Frz7FpCfXsOlEjsOYWViYnkuhWajpGzUf9vt%2BE9AvWMe0UZHtDgVJ4hoMOOLjb0GOqUBs7vVEKKP6CL559lSfvQjURgznOsPujAMFksfUWRcDEuwZIeHhISlC3aYdp80iOGuH0c%2F0k1ZP1x7KNsdzhVWrpDJAhoIiQu0ZnvUVIoM4Ik1OnF1eeOMUrzYI%2FEglAxpRQ%2FFUZGIiezvYcKeT5UKQPeaR4tA7m4dy6CwItpVl7xAQc06WTCAC0R1lVlwqnLCV8JgB1Y9OxEwutFlzf%2Be7btFxcUa&X-Amz-Signature=a4eb92de868b5ec3ed056378cb73ec42bbbce51e2c4b429f7bcb650dccf8f7a7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZKP4IBX%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQC7O0%2BR8LV3t9ABmoAv%2BKL57nZ66SET1ehQCMca85FLwQIhAN9Wd%2FT%2FVNb0DjHUo5O8qJv%2BbmavH6dQ1YO3jY6L1viVKv8DCEQQABoMNjM3NDIzMTgzODA1IgzUU5VcG26eF8AmefIq3AMXaxCBsr2ucqEE4k%2FONeeDo%2F7B7jKPbu27czvfZrtXR3mj%2B6D7up0jJSXlP2ILm1rdqtYYzigOZIY7Dyq3357g%2Fww5kKiJw%2F2ST12690C20EJjGdObdLavG923%2BS8FvZpEsGg7ty8Juedf68IpC77Mb9iWtgnP9%2FN6TS8jxSOqe2aJZvaMii8%2BAoZ%2Fh5r5%2BfQum60pK4GCp7T%2B9S6Lh4Rlv03fctzd1ETUan0%2FFdOYE7oGVsZP8KFeWlbu0%2FUgIog14Omt%2F%2BwgbpfnutshV%2F1GtPvel%2F10ZnJ5b%2B%2Bvvv6iYTLPryiKmcpYAuaTpslgCuQ40FbFTziKGa8%2FeFpG8bn53%2Bj2UTeVBq%2F7OF%2BQO4Ysl%2Fyg0ckFdc0Zx4Ap3SEu4HFZDY%2FUCkD3jot22mEMEFB%2BpGEUWTesf5N5iXiCreZ1XTN0EUNUYgfw5YExO5DnZMdCLizXqBGFH6l7ua5Gdj9aQdbCnUB4fWGqkdVxQUJfLW9QhakagpAs5ZXBfFeJlK6FLN5%2BHmVhr4QwC6Xj6bOS0ISf15W3w7CrOf2rqBeDtIBdfyJj02XtJDX6ATt7pUD4MJxN0tzFjpJWp7f%2FkjILYWvkGxC%2BhQIDqZW9F%2FS%2FOEFVEQzM1N6YaCP4WzCEjY29BjqkAUD2%2Ba4t1nZKC5Phe0PMosGpCrnJlZu7P5UOb0gZJ96SMC7AgbVZJHiBlupnVMkEzyVhuSoBWXWZ64ofx35UxRsuOAgd7d3TXVhFeUygwzuxdkIzU7Q34VX3pYiqsLaDoyEZy%2FrGgS7sSruGr9k24AyJItCZ150P8tZoGKd9orgjZSUzZzNpl9%2BhtMXjzx3Jn693DUg6B623huP1erYoaLdbFI45&X-Amz-Signature=a2d8e4735e88f0687176728efaaa954d6c55ea4b11ff3a58ed646d5d25d6a272&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU5UQKPU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDdH04LdOjAl3Vw8gb9jIFkUHDPIrmZGQAuWKD26dDqeAIhALqVcFL9ARef00NtlHTMWvnAmsVgXkQ0jfKtHk6f5RE9Kv8DCEQQABoMNjM3NDIzMTgzODA1Igxp8IfMobYEYcK9Akcq3ANy4HZ8Lf2PGT%2FybKDG%2Boa2r4tlCXlny7dmo6%2BpVq4rtC%2B8ew751HoXjV1BHHVqbiKkVIydRRgWWvWt9PjdWOYp5TZaSoZzFxA10AqAyebW5DhOQHPXz2PvK%2FsVkqUCrKwYK%2BgkaCdJqqdyXS%2FR6v2K8zQjjzM4tXtIUDMZDBa8Lje9VYrISmQhwtrjVMcYbDAPHc4qbuRI%2FOEv9LjTxfiyeLaSPIcf%2FyLP0rJTUGqJxO9iFp%2BYtuEy%2BT%2B%2BbxLzJ6hyZPexoGlSWhdX8TtSlXT3GA%2FujD9oweq6lCKPJpTozrKt04UB3aGT9eoxuXZY4I70GR8c4lZTIIvmL3zeRg8WPtgB2jZkv6uQB8EVECd5Dw8Lqoaio1Za7zLL4BlgJ15wQ9rrORBNlDk7HomDtn608NRYzqcl0QOK1vGAs04u8exicLxa91Cgp3uMpCLl%2F87sfjsC2gn1cTqrhakDFOUdXk59eL7CFI4QPkSaarBI0FtckTW3Pl2ZP%2F4QEiD1Nav35eKGPTRzVtoeLwJEusc%2BEXWNEFGJbfPGK7vulIMV9ekQOiPLOBQHiSw5XLhUEaiyEHZZ8kDtH2oEu57%2BoYugzfAKDXZuS2WIf9AplYr1rvPnbOhA7tteWUEOcDCZjI29BjqkAfga%2F9r6%2FljUpAcTxZvaCqxu7mvCcNF6v0u4IGc8Yg4TiBU9ZmFa09QXzNO81XLawLJ5x9qZP%2BpFvls%2BBg%2BvBqwXsnJ1g9JJc3W%2FD6K2XVQBaCxyFIvK7MWvpkFqJpIr%2FER1TLH7ck3UZ01XFnPCr7hqT%2B%2F8czec%2FIQZzWqMmS34XuonzL1GFwd7ObzuYaZs98OSzw1tMYQhrK54AdJ7A6AGTjI%2F&X-Amz-Signature=e6ce88cc95161fb1d9f86c815398dba35a2353d14a8fdd0963f1e12bdbbfa5a3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
