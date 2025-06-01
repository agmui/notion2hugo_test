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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G2U5WE6%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGj6aQN1z%2B21WMplDovi0o%2B2pOZt%2FA94BGhY7E7SNyhkAiAUJ%2FLQuhyOnfE8ZKPdV8FMgq9%2BrJKCQeWs%2BmWnruCWaCqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeBzLJQHbneJgaVtxKtwDNsuPVPSHShPluNmXAdz3FmurL%2F%2FrwB4ljgZfloH5Tf2UduDygJ8WY8AsdZectLu9cUUaDaJXL6qzPUHYlGUA%2BYjySTl%2FW9wAC8JVMue3VO8JJopO9Jl4Wp0%2F7CgdFgoU3YTaI15CFUjsfQPKhNRJkzfpc7%2FvyIe8aoNfgS2elrGCa1l%2B0YEqPS45JuNiwt858W166REru3luC50KUdxJuKOxnmIsFabwYx4KFH8t8ND9JG5MzVNPNcy83WolHG3GKu9e4R5B3Pn3fyCYtj%2BODoQJhZLWPIiQ%2B7SujO1RNfDxsKD9hAuO0s2hckFJQ%2FEUFgk9sIAkHlS1HIHtQnsL1tLu0J%2FlPBojk%2FFL3Jmgy%2BwGEerUbMkoAbeb4Zx6ErgOcz8gT6k0hlHPIiZXtTGmVxlPWc6JwK7mN8%2FlPzwkqtAHz6I6YOW0u7DlO1bpi4z4yPGwbchSZf03oVtSc6jx6EUNHNTyvL%2Fc9Sygo0l306wAgVEaH4PVuLOkYVFnO13StCKr531w0nce3zrhSH3bDRV8kQG%2F5sPmQjHyNbBtmJmePoNLZnLAFg6nxBchooFbdunDSz%2Fdct7b1fEybPXfE0PQRq6ZAr5bsnbS0filfFZ%2BxJinD3plj2jeto4wkIDzwQY6pgEuhNeo0REwdw9Fjb6KrN%2Btd1Sl9SiPBC7A47WLbnUzpUZBhiLdUGvNLCnTplUxlceb9MNdMJ8y7xW%2FZF%2B5tm4UDSJNIpMgW%2BhjcC%2B1zUXIRvjyXwsrGKq2pYeL3NpZ%2BVOHD9L4uliKd4Ba3BKf8sHcT%2B%2BM%2FyPLpcCqd%2FHrD3720jr%2FDpT6ZVXgBM1hca8BCR28AmjM3lRZy1QxvIv9kaF7qxwR1PG0&X-Amz-Signature=59631020b45fabe30c0c77bc933b3d410b22a69bf3b1b8d1b8b477c9e8c5bae0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G2U5WE6%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGj6aQN1z%2B21WMplDovi0o%2B2pOZt%2FA94BGhY7E7SNyhkAiAUJ%2FLQuhyOnfE8ZKPdV8FMgq9%2BrJKCQeWs%2BmWnruCWaCqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeBzLJQHbneJgaVtxKtwDNsuPVPSHShPluNmXAdz3FmurL%2F%2FrwB4ljgZfloH5Tf2UduDygJ8WY8AsdZectLu9cUUaDaJXL6qzPUHYlGUA%2BYjySTl%2FW9wAC8JVMue3VO8JJopO9Jl4Wp0%2F7CgdFgoU3YTaI15CFUjsfQPKhNRJkzfpc7%2FvyIe8aoNfgS2elrGCa1l%2B0YEqPS45JuNiwt858W166REru3luC50KUdxJuKOxnmIsFabwYx4KFH8t8ND9JG5MzVNPNcy83WolHG3GKu9e4R5B3Pn3fyCYtj%2BODoQJhZLWPIiQ%2B7SujO1RNfDxsKD9hAuO0s2hckFJQ%2FEUFgk9sIAkHlS1HIHtQnsL1tLu0J%2FlPBojk%2FFL3Jmgy%2BwGEerUbMkoAbeb4Zx6ErgOcz8gT6k0hlHPIiZXtTGmVxlPWc6JwK7mN8%2FlPzwkqtAHz6I6YOW0u7DlO1bpi4z4yPGwbchSZf03oVtSc6jx6EUNHNTyvL%2Fc9Sygo0l306wAgVEaH4PVuLOkYVFnO13StCKr531w0nce3zrhSH3bDRV8kQG%2F5sPmQjHyNbBtmJmePoNLZnLAFg6nxBchooFbdunDSz%2Fdct7b1fEybPXfE0PQRq6ZAr5bsnbS0filfFZ%2BxJinD3plj2jeto4wkIDzwQY6pgEuhNeo0REwdw9Fjb6KrN%2Btd1Sl9SiPBC7A47WLbnUzpUZBhiLdUGvNLCnTplUxlceb9MNdMJ8y7xW%2FZF%2B5tm4UDSJNIpMgW%2BhjcC%2B1zUXIRvjyXwsrGKq2pYeL3NpZ%2BVOHD9L4uliKd4Ba3BKf8sHcT%2B%2BM%2FyPLpcCqd%2FHrD3720jr%2FDpT6ZVXgBM1hca8BCR28AmjM3lRZy1QxvIv9kaF7qxwR1PG0&X-Amz-Signature=dded3b050a6af1ba4864b397b17c86130f184288c2428a5cb76db8a740e31bb2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G2U5WE6%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGj6aQN1z%2B21WMplDovi0o%2B2pOZt%2FA94BGhY7E7SNyhkAiAUJ%2FLQuhyOnfE8ZKPdV8FMgq9%2BrJKCQeWs%2BmWnruCWaCqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeBzLJQHbneJgaVtxKtwDNsuPVPSHShPluNmXAdz3FmurL%2F%2FrwB4ljgZfloH5Tf2UduDygJ8WY8AsdZectLu9cUUaDaJXL6qzPUHYlGUA%2BYjySTl%2FW9wAC8JVMue3VO8JJopO9Jl4Wp0%2F7CgdFgoU3YTaI15CFUjsfQPKhNRJkzfpc7%2FvyIe8aoNfgS2elrGCa1l%2B0YEqPS45JuNiwt858W166REru3luC50KUdxJuKOxnmIsFabwYx4KFH8t8ND9JG5MzVNPNcy83WolHG3GKu9e4R5B3Pn3fyCYtj%2BODoQJhZLWPIiQ%2B7SujO1RNfDxsKD9hAuO0s2hckFJQ%2FEUFgk9sIAkHlS1HIHtQnsL1tLu0J%2FlPBojk%2FFL3Jmgy%2BwGEerUbMkoAbeb4Zx6ErgOcz8gT6k0hlHPIiZXtTGmVxlPWc6JwK7mN8%2FlPzwkqtAHz6I6YOW0u7DlO1bpi4z4yPGwbchSZf03oVtSc6jx6EUNHNTyvL%2Fc9Sygo0l306wAgVEaH4PVuLOkYVFnO13StCKr531w0nce3zrhSH3bDRV8kQG%2F5sPmQjHyNbBtmJmePoNLZnLAFg6nxBchooFbdunDSz%2Fdct7b1fEybPXfE0PQRq6ZAr5bsnbS0filfFZ%2BxJinD3plj2jeto4wkIDzwQY6pgEuhNeo0REwdw9Fjb6KrN%2Btd1Sl9SiPBC7A47WLbnUzpUZBhiLdUGvNLCnTplUxlceb9MNdMJ8y7xW%2FZF%2B5tm4UDSJNIpMgW%2BhjcC%2B1zUXIRvjyXwsrGKq2pYeL3NpZ%2BVOHD9L4uliKd4Ba3BKf8sHcT%2B%2BM%2FyPLpcCqd%2FHrD3720jr%2FDpT6ZVXgBM1hca8BCR28AmjM3lRZy1QxvIv9kaF7qxwR1PG0&X-Amz-Signature=e8e7fcae41739996592be4f020287e3bcfd6944413bcc0a50a070c547f6c7ced&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWTJEYJE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCrFEobz4wwxIhrVqhb7ncxaXjQT3DJ1knhmH2Rd0UAAAIgCmP08%2BtsOEp6JOij00xSsZDTxxxk%2B9H3k0KOrH8doykqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMZKKknado75jrg%2F%2BircAzaKPh6paCdhlmqk5mkHQaNo6k%2BeHxy%2FoJLjxazHfpaJR6UvBf1sgM1yIb6yeu6XkFzO7VwxNJvpRwKbkDwAE9CemBEYTWMei8QE9C2Ta6P7qcQ9U7DbY96B49SqWuQxkRpjKVcxKfnp%2FSyrUdQIuptWx3bYbdv8KekUeVS%2F863LVwxoi%2BIKBqd%2BqbfBsNAQZIb%2Bhzso9yXSjUl8PBoAPd75GeEo8XDfXZEfh%2FiyKhWK9O9eJpb0AF0niFDv%2FlyfuSpOYtjVqJCAgvxc5p8qRbdOWDCMkbg5emKw1NnvdFbdxo6OozpQL%2FIvh9ZskTj5hqyD7Zs6k4dsTH9yXnTob%2FTLpa6t%2BLk9a9pAtKe%2FSiDXNX9%2FsvCaESjpKETVtQMdlMaTmFCzKQNT5xjzsJSu1VC4xWW%2FRuGXeZbNIOYBf118IpPSpgfkXhRvwlcs2UOD2PmJajkoej1Qn7Iy0WaI95OwLsBgFAtZdQh98vQllHNrFVFE%2FcZmX0LK%2Fw4gFMC1NLR6hcvLUsNbcIt4MGEvVcjwZh5uJ6wApgjO8MLlFoXfbF5dYKKlzXolJxnokKb%2FwwcBFqyqhYJti4WRzQ25cRfd%2Fq8j0zgrSPNaxanhxbdVU6AxUQ6CQYZhZSz7MLyA88EGOqUBjQYCKzVTGRJF%2BDFxmWY9fYGy2JyrNHcs3JkzITTKlXw1Gvxxt1zx6RoGkPib9x5C4B3IGGbdnT2UBhU13aHjsSnS30RJhjPMoiSyL2tklnqBvS0bXl82anENCSJiupkY4PqzFkRTmP3Bly%2BuDVnXl%2BCU527z6EtubKQVgHmRu4C22DiPLELF6ihtM4WvImw%2FVuNie%2B4Nqz6WilYZ3GdfGqdwGgNx&X-Amz-Signature=80afeef3cb9f1f3cd17d10e60dbfeeb9aac3bb28e5e0cb2af5ed1877c81baa02&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH6TLRYH%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCICX5xopUcx04cmkMijgszU0YyY0P3kE87Qhg5A%2B2S0uaAiEAh0ERrK3rwt2T%2BotNmFsmAF2IhVmDM%2FNcF1dBBV1hofYqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAzc2BrLC2BFnYmvsircA1zgBgR1lwYRdPqM6SR1%2FjVJDP9T0SfRJS94csIV1mfTSr90x0e5TI4fBemwv4e2UmMalGqcrHj7kfHJVmN2jHwrTxKNhS8mJbyxXFkmz6Cz3MnTxp%2BGWGC6aeT8yNVrcZzDfYE1xUZZh1m7BPNWTc5LXeynC09X8P9CGgYijaAPKXbXMVurVfHmLxmZhMZwpw5Qbtecycv%2B1c0GIreEnMg6M1u3gIT7Byqk%2B2RKNoQo9TwtAXzaeWri9c6ypwr7QIVZt%2FvpI3viCEPEdh4EqQi6vs5heZL3K%2BWGUZkow3eG0pVA3pMm24L1bow36%2BheWvyX4jgy8FP11Rm%2FZb6xNsjUjwKtSxW5aIujZ3E%2B%2F0MXy4skzHvPQGLfUykYAmVKSLFuJJlVqmcxrQnAVbmqkMT2IzPxqFmWA%2Bjg1iDRg4wCWR4XWOksqE7QGhJb7CmKVbv%2FjYdFQ6I2wsao6Ft1M8hEYcwyQRHD5cyi0LTUyHtq0pQ7YhEQDjGLS%2FLl3VSk1bwzk8bLlLHPPqAssUbK0TJLNv7nO2khgbmrbBxHy%2FoxTMau%2BNz8QZsAtEM%2FKl7lo0y%2F2OBlZGOXgM8a1p4ChsVeu8cMrO9ClhSj2TKyNsGmfGh%2BgukkwUg6%2F5GzMLaA88EGOqUBGSaWKbriR4p1P0LcKAo8Km%2BJxC1mNvEJB%2F4upupF5lzCcb1JsnF3bdWGumWVxpT5GMnP5XehxfDCg5FUZ0MgcEPzoEUih%2BwlnSarFwSGYuaBU%2BwxqA9mnZqyVALF2u%2BLhrikHHOvzgtFK6cKTXYVTLbLtvyWk2FuVpWwKE3aY8Klkc9pg5falfpltlVyT8Ld%2BtoTEqlODdU45j4Vr363XpvZ9tbA&X-Amz-Signature=ebff91150a5528a4b98598fa70638007ecde863447ccf27ce2522d00d7c9eed7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G2U5WE6%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGj6aQN1z%2B21WMplDovi0o%2B2pOZt%2FA94BGhY7E7SNyhkAiAUJ%2FLQuhyOnfE8ZKPdV8FMgq9%2BrJKCQeWs%2BmWnruCWaCqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeBzLJQHbneJgaVtxKtwDNsuPVPSHShPluNmXAdz3FmurL%2F%2FrwB4ljgZfloH5Tf2UduDygJ8WY8AsdZectLu9cUUaDaJXL6qzPUHYlGUA%2BYjySTl%2FW9wAC8JVMue3VO8JJopO9Jl4Wp0%2F7CgdFgoU3YTaI15CFUjsfQPKhNRJkzfpc7%2FvyIe8aoNfgS2elrGCa1l%2B0YEqPS45JuNiwt858W166REru3luC50KUdxJuKOxnmIsFabwYx4KFH8t8ND9JG5MzVNPNcy83WolHG3GKu9e4R5B3Pn3fyCYtj%2BODoQJhZLWPIiQ%2B7SujO1RNfDxsKD9hAuO0s2hckFJQ%2FEUFgk9sIAkHlS1HIHtQnsL1tLu0J%2FlPBojk%2FFL3Jmgy%2BwGEerUbMkoAbeb4Zx6ErgOcz8gT6k0hlHPIiZXtTGmVxlPWc6JwK7mN8%2FlPzwkqtAHz6I6YOW0u7DlO1bpi4z4yPGwbchSZf03oVtSc6jx6EUNHNTyvL%2Fc9Sygo0l306wAgVEaH4PVuLOkYVFnO13StCKr531w0nce3zrhSH3bDRV8kQG%2F5sPmQjHyNbBtmJmePoNLZnLAFg6nxBchooFbdunDSz%2Fdct7b1fEybPXfE0PQRq6ZAr5bsnbS0filfFZ%2BxJinD3plj2jeto4wkIDzwQY6pgEuhNeo0REwdw9Fjb6KrN%2Btd1Sl9SiPBC7A47WLbnUzpUZBhiLdUGvNLCnTplUxlceb9MNdMJ8y7xW%2FZF%2B5tm4UDSJNIpMgW%2BhjcC%2B1zUXIRvjyXwsrGKq2pYeL3NpZ%2BVOHD9L4uliKd4Ba3BKf8sHcT%2B%2BM%2FyPLpcCqd%2FHrD3720jr%2FDpT6ZVXgBM1hca8BCR28AmjM3lRZy1QxvIv9kaF7qxwR1PG0&X-Amz-Signature=6271a389f53785710ad99fc1799b21b61542fd5ed8ccfa946fb74fbf97b6483e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
