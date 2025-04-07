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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NJ4URMT%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T004046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSj16tF7gBMPBdTfCc8etA5O%2Bvra6H8WnoZSJqxGCr7AiA4FnKTY92XYX%2FtZshw6q84QolyAbQkJs2Zl5iIpNgPxir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMep6C8pSA255AeAMhKtwDGSb%2BezSMqJrkqFlP0fGsNG0yNd3Nx76%2F%2BX1%2BUhBW2qrNE%2BK5%2B1yV%2FhOQqBT0Mfl9dS%2FY%2B8QHRaeYv46hn4PErWO5zlW%2BY4H3Zrx%2BiZqYWMJkdcMkRSZpmzOt8usp3K4y75z%2B962eY6UzCVq8SrjZw8O1XwQIUuLC2lm6a%2FUe8SycfGQ5ktA1Yn6%2FYQEJgYqIxAQ86ePHifgjkGclCxM%2B%2BYI7g6O2IPvJBafi0NMps6w1W5D%2B7T95Dp28Qj5mFjf8a5fwUp3hVARaq%2Fl%2FAYj1y1Ca%2BU4YIgp9JyVACDXo%2BAIdPe5doY7J4kX8%2Bs0bY97zyMGaZNk43Vsul9t%2BOCwXGaiSYQoxgqsSgGI1lFROCQBt2A0x%2B3aGPVIR%2FpfUDQZjuLYRzki6i5Dz9M6OexUV3fJUc0A5QtDyogzaO5OjKPh4OJX%2B2c%2Fzm3qZBhX638vRlF%2FivlmpZJHhPXpLz9sBXon%2Bq1z37wX9%2FNQsOm3HsnWR8GW4psQh2vt6nv1PMcW9LU7u9D1%2FnmCLu3l3Rh%2BUlGJz8O%2B9pni0WVVX8LKalwJGNod4z18oPTuw%2BAJ%2FHs2mOe%2BaUzGcRe4O8jBHslqvyYytoKT4246gDfS7RB1OzI3J3e%2FZpGuKwZJd3ogwj7XMvwY6pgGA1EpOkyBF8fPM4eW64J%2FAPRwk5Cn1tds%2F2SLA8P3%2FvSI991z8Ws70ckHaSsT1g7%2FYuLZO1KjVs90El%2FJxdo7P9HxvzgbJ6rtNrINXMyBqX5cHmzqdkLoBP65y8TpUYeD3wXJk1X3idh59Y%2FF9fN2YSw1%2FdySvDS7%2FAcV5dAfrv%2FTaJ9465NiVlkImYHGkUKdcGfnQwjUS8vZrNztorth17ARPAQ1d&X-Amz-Signature=ddad0b7aac0eca164dc9f4f01cceaf023f6e0ab3fb967b56822a4ae0c0d2b11a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NJ4URMT%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T004046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSj16tF7gBMPBdTfCc8etA5O%2Bvra6H8WnoZSJqxGCr7AiA4FnKTY92XYX%2FtZshw6q84QolyAbQkJs2Zl5iIpNgPxir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMep6C8pSA255AeAMhKtwDGSb%2BezSMqJrkqFlP0fGsNG0yNd3Nx76%2F%2BX1%2BUhBW2qrNE%2BK5%2B1yV%2FhOQqBT0Mfl9dS%2FY%2B8QHRaeYv46hn4PErWO5zlW%2BY4H3Zrx%2BiZqYWMJkdcMkRSZpmzOt8usp3K4y75z%2B962eY6UzCVq8SrjZw8O1XwQIUuLC2lm6a%2FUe8SycfGQ5ktA1Yn6%2FYQEJgYqIxAQ86ePHifgjkGclCxM%2B%2BYI7g6O2IPvJBafi0NMps6w1W5D%2B7T95Dp28Qj5mFjf8a5fwUp3hVARaq%2Fl%2FAYj1y1Ca%2BU4YIgp9JyVACDXo%2BAIdPe5doY7J4kX8%2Bs0bY97zyMGaZNk43Vsul9t%2BOCwXGaiSYQoxgqsSgGI1lFROCQBt2A0x%2B3aGPVIR%2FpfUDQZjuLYRzki6i5Dz9M6OexUV3fJUc0A5QtDyogzaO5OjKPh4OJX%2B2c%2Fzm3qZBhX638vRlF%2FivlmpZJHhPXpLz9sBXon%2Bq1z37wX9%2FNQsOm3HsnWR8GW4psQh2vt6nv1PMcW9LU7u9D1%2FnmCLu3l3Rh%2BUlGJz8O%2B9pni0WVVX8LKalwJGNod4z18oPTuw%2BAJ%2FHs2mOe%2BaUzGcRe4O8jBHslqvyYytoKT4246gDfS7RB1OzI3J3e%2FZpGuKwZJd3ogwj7XMvwY6pgGA1EpOkyBF8fPM4eW64J%2FAPRwk5Cn1tds%2F2SLA8P3%2FvSI991z8Ws70ckHaSsT1g7%2FYuLZO1KjVs90El%2FJxdo7P9HxvzgbJ6rtNrINXMyBqX5cHmzqdkLoBP65y8TpUYeD3wXJk1X3idh59Y%2FF9fN2YSw1%2FdySvDS7%2FAcV5dAfrv%2FTaJ9465NiVlkImYHGkUKdcGfnQwjUS8vZrNztorth17ARPAQ1d&X-Amz-Signature=6ed231b9bca2e8ea5ff22e75a8a915a528370789d757afc231ac1605e2c8458f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGVTAX3K%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T004049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGqlpO1nP9lgKU2GjUlhAP%2B7o4cNWpbm%2BcYDz9X9fD5AiEAgNINqQIDva2KY0dtV%2Bc16BCVEEYeTpMdNBVRVaX1SqYq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDKZNfglS7YS0R4rTMyrcA60BE9NiFjtb6hNbpK1zYCh4chgnmPl0115s2n5%2B2h5lUbHomvsLpuyBbsrCfIH6PbWZlSHHISiapFm9ZljGFl20DxxVjfbxPEyFcXSzITRDzSEy28RB8c9tkQzVp7dJtHg6IlVZN9C2EVj7ozp5P4o5iVIcWqFjA56SAZAyxw2mI%2FJe12vl5nV4vt7QCQg%2Fd%2BPYHfWwjoBMtud3Rmd%2F1AFGkVlab6qrWbLnkkgbD9haDFUHOGito4rAyrlBLYc9mqX7QjOWNACj5P97rDyMQTwgpOeLVMedj6aGYjAEmVfbQt5GhSd5qo9Mu4eDSalDGnhhb5VF70xmtAvK9N7afL3QebsKwNUyRJFxAkZj4h9L9cmWK%2F5rkQ2VEW0mWGO9jLvcDEZDcVJMk5h%2B3kVG99QRAcUi23lmP3uLFnIzGqEBw72wouwrIL8sPsnccO5%2B2UQTs10QHCZkJaesAv2ufAgF%2BIi6GLgmtyTjK0ed3aHSHtUG%2BJ8dgMQ93ihgFj9gdI2KQ2XgOWGM0ZnkfetEqb6F0kyguq2741HAnhAOqZGgdKqY0eX9W6QL8QZ40nTgxnBEJ84XWx%2B775m4j4TVBKc1j0MKQ3iNdanjsVQLxMcBoqcxo9e7WELhQeo8MIG2zL8GOqUBfM7R0l6jUwCs4cm1TEc7MrHpxnLSQE1HT6qGZ4poYHv8SgyNg1wxOB4%2BMHjkLkNsCETJKKmu7S2%2BGiAURAJbZTCd4gq2c73VGRPA8fL6Ahab5UZhb7EZMuDpcF21VqA9ndXXQR6Z1K%2FbY45AwY0YghDQQKc1PJ35LUwBqLIO8pSomUijidVfVei%2FOOS2CRxnsMWZn2lIm6UlTPQGz2GxoN37wVzf&X-Amz-Signature=36fb617826248b5e0edeb6a22d39fe60d156ff1c3df3a3869ad53f82f8562eeb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672GGGB2W%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T004049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNl%2FQHz1368ygYwfK84dvVGTJGI2RHKZ%2BQrhx6IYnBoAiBZaJDho2tYtHRJY%2BODEFJpbcfGUa5gxTmKwYJkUJgvmir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMYYDHRiHxnyPQ8VpBKtwDBEaw60vrTI%2BgcdEmjvJAzXNzeME7geYXLSpag0SNCZsR94qe07nlj%2FMOfl27%2BWGUHO5OIwodWOdPmHpIqGly%2FPN4x6VTGEo4LA7zLwpgre9nfCgtY3wZcfpS81NzJUT1f6WM%2FWl0hEtnSgAHZFzt6vFGBxluXVZh4Y0IFO1mzIBEp11nvu5URgiRlcO%2BttVQz294OM8MqrGza0BZqqvbQNOnJ3kIZl3oxjYbIGMhwanWG%2FVBTLexkORw%2F7FGRrfjBfoVPW9YSZwe1FGcATZ6ATnd4XDra4BbnOAWhJsdhHazibtB1Urky5U8Dm5QzX5Szv6yS%2FDcGyqS2b9xqtDdTRBQcpVB6QqK0G%2BYb4uobm4uzIZKkvy2mb9%2FDVNXKvKfc1uht0rbhXITwS7mKMhJXHBJ15NLLtdXy5BEO1Ba7Oha9jFw3RRQMhSOdPF9O1mDcXRk6cek2Shze4XOpjqnTj6BJhOkRHf6un2pXSvw1jPUTMM0NqEUmwQmoyXVS7vXBYwKmTt1dJbX9sM9i8SMvgsO%2BiKSUpBe4uKGkng7aqOOdQn9fqhYzb7cylEbaTi%2BaD35HAsXtHDaJLdft6L1NQi8K0iCs4ADMQ6LSJCNrJd%2FgDzDedm%2FvtTUf80wurXMvwY6pgEVCJC0RG8P58rYNYqAAkiG2PhLTxNUeFA1t4nbjQ94T%2Bv3Hbpn%2FLFIbR%2FJChwmbCZNdrncWxhlBzkBbd0hVMvPFPqOztLb3f9va1BAhDhSR8AkkZV7kAx%2Bx0Bz0XV2d8M6dGRKq3LaOnUqReekA%2FPfGqIR7grzewIkPlyA7Dg5HU9D2Q9ab5Cvg2oK4oJ97ZgvYPcGHFbumJnh7HFES1OXGYTV8%2FHl&X-Amz-Signature=29cab5533f39e8a727b14c732b1e54b49eb6b8a672993bb9d4bf414a62c10934&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NJ4URMT%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T004046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSj16tF7gBMPBdTfCc8etA5O%2Bvra6H8WnoZSJqxGCr7AiA4FnKTY92XYX%2FtZshw6q84QolyAbQkJs2Zl5iIpNgPxir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMep6C8pSA255AeAMhKtwDGSb%2BezSMqJrkqFlP0fGsNG0yNd3Nx76%2F%2BX1%2BUhBW2qrNE%2BK5%2B1yV%2FhOQqBT0Mfl9dS%2FY%2B8QHRaeYv46hn4PErWO5zlW%2BY4H3Zrx%2BiZqYWMJkdcMkRSZpmzOt8usp3K4y75z%2B962eY6UzCVq8SrjZw8O1XwQIUuLC2lm6a%2FUe8SycfGQ5ktA1Yn6%2FYQEJgYqIxAQ86ePHifgjkGclCxM%2B%2BYI7g6O2IPvJBafi0NMps6w1W5D%2B7T95Dp28Qj5mFjf8a5fwUp3hVARaq%2Fl%2FAYj1y1Ca%2BU4YIgp9JyVACDXo%2BAIdPe5doY7J4kX8%2Bs0bY97zyMGaZNk43Vsul9t%2BOCwXGaiSYQoxgqsSgGI1lFROCQBt2A0x%2B3aGPVIR%2FpfUDQZjuLYRzki6i5Dz9M6OexUV3fJUc0A5QtDyogzaO5OjKPh4OJX%2B2c%2Fzm3qZBhX638vRlF%2FivlmpZJHhPXpLz9sBXon%2Bq1z37wX9%2FNQsOm3HsnWR8GW4psQh2vt6nv1PMcW9LU7u9D1%2FnmCLu3l3Rh%2BUlGJz8O%2B9pni0WVVX8LKalwJGNod4z18oPTuw%2BAJ%2FHs2mOe%2BaUzGcRe4O8jBHslqvyYytoKT4246gDfS7RB1OzI3J3e%2FZpGuKwZJd3ogwj7XMvwY6pgGA1EpOkyBF8fPM4eW64J%2FAPRwk5Cn1tds%2F2SLA8P3%2FvSI991z8Ws70ckHaSsT1g7%2FYuLZO1KjVs90El%2FJxdo7P9HxvzgbJ6rtNrINXMyBqX5cHmzqdkLoBP65y8TpUYeD3wXJk1X3idh59Y%2FF9fN2YSw1%2FdySvDS7%2FAcV5dAfrv%2FTaJ9465NiVlkImYHGkUKdcGfnQwjUS8vZrNztorth17ARPAQ1d&X-Amz-Signature=8bc54b10a1c404df39d19d5150c95e89a25a4d4b5c88da9f10426f66542e7863&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
