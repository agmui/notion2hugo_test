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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BFXMJGG%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCICiWAagkuPdNOdM3sIoOsWLUS9fgBA%2BLm3El0QpkCrX9AiAz83Xw8QhB8N13ys5fn5Lh9K8FQerBkMm51wgXltHoCCr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMEwGvFXuVDYRfPZPRKtwDX3Ugbxu5MIjvkOCQ6EIq7ui%2Fxb65oAudB6aVhiPWw1EVNNtZYmPgKy4Tn91cuJv5wfQ%2F4pTQ8L6wyeAZAYRTxZTIGHiZNMl%2BhtW3lmZdLeJMefhXMIJ6bQppAWFkQWQet7XPnP%2FUWVq%2FPgXZ51SjRamqOO0SVHKJmMwFDV2GAm%2Fl4If986%2FmhknspBRu8fuzNeDuWIAdWfWluUy6Kxk3Hiiw8DqYBSDLlR3bU2afHhYksGjEmi0PJMtK3J3hzaWhBPKD7OGIs40mUhNDjQI1mna2K9JmaNBVJJgxK%2BY2MrdTsvHbOvNuc86QUC%2F1SDn1XWORvWhK%2BdjksNgBXoHg4GfPXAtNb8fn36z3NVpAsxg2APlluffzbFRe6FK7U%2B%2FHIMpjB2%2BjkWDxPjEnHYvQEQW1CDjHpHkBmsap3RBodc66X64j8YOAgVXBDGqR3zxZU6FuFVdfxkCmZ5mqCSuanTUg79J%2FPzuvGrx2zYD%2F2zEOfyLdbUePZYYn7FZTKw%2FFp6%2B7kCWY%2BTGj7fxL745Phv%2B%2BMvUJPSUkxkR5gzDNrk4XwNOko0PC8RiR8IxqWtk7MqXo0seZszQMD%2BKHBAoAZrvNy7x1y2iM5CUP6SpiZHIrs8WFBEwF7NIKfSUwyc68wgY6pgF8oAST%2F57VsVZDhXq3fbA4AR36nnT%2BhEGl0Agk%2Fe%2BMCebx3o3SKV0Y8QVY4dvUKkKPB4Y%2FQ9aUJ5zWFsBL0yzOgB6sMgDmrXWkQq2ZUqB%2B0EvtJiKYEDXhWh0ROUFr2LeStSrLe7TSTzrK38oQ517vBWYOvLZDjaSalh3L1nm3Q1A9myBfCem2EJk4ElwyifMxoWmjO2Fe%2BCrVHRFnQTECXB6oCGkS&X-Amz-Signature=1fec42ffc972c740f9f9818d9b1ffc82d49bebc1a43fb5900fa21a1a14220175&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BFXMJGG%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCICiWAagkuPdNOdM3sIoOsWLUS9fgBA%2BLm3El0QpkCrX9AiAz83Xw8QhB8N13ys5fn5Lh9K8FQerBkMm51wgXltHoCCr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMEwGvFXuVDYRfPZPRKtwDX3Ugbxu5MIjvkOCQ6EIq7ui%2Fxb65oAudB6aVhiPWw1EVNNtZYmPgKy4Tn91cuJv5wfQ%2F4pTQ8L6wyeAZAYRTxZTIGHiZNMl%2BhtW3lmZdLeJMefhXMIJ6bQppAWFkQWQet7XPnP%2FUWVq%2FPgXZ51SjRamqOO0SVHKJmMwFDV2GAm%2Fl4If986%2FmhknspBRu8fuzNeDuWIAdWfWluUy6Kxk3Hiiw8DqYBSDLlR3bU2afHhYksGjEmi0PJMtK3J3hzaWhBPKD7OGIs40mUhNDjQI1mna2K9JmaNBVJJgxK%2BY2MrdTsvHbOvNuc86QUC%2F1SDn1XWORvWhK%2BdjksNgBXoHg4GfPXAtNb8fn36z3NVpAsxg2APlluffzbFRe6FK7U%2B%2FHIMpjB2%2BjkWDxPjEnHYvQEQW1CDjHpHkBmsap3RBodc66X64j8YOAgVXBDGqR3zxZU6FuFVdfxkCmZ5mqCSuanTUg79J%2FPzuvGrx2zYD%2F2zEOfyLdbUePZYYn7FZTKw%2FFp6%2B7kCWY%2BTGj7fxL745Phv%2B%2BMvUJPSUkxkR5gzDNrk4XwNOko0PC8RiR8IxqWtk7MqXo0seZszQMD%2BKHBAoAZrvNy7x1y2iM5CUP6SpiZHIrs8WFBEwF7NIKfSUwyc68wgY6pgF8oAST%2F57VsVZDhXq3fbA4AR36nnT%2BhEGl0Agk%2Fe%2BMCebx3o3SKV0Y8QVY4dvUKkKPB4Y%2FQ9aUJ5zWFsBL0yzOgB6sMgDmrXWkQq2ZUqB%2B0EvtJiKYEDXhWh0ROUFr2LeStSrLe7TSTzrK38oQ517vBWYOvLZDjaSalh3L1nm3Q1A9myBfCem2EJk4ElwyifMxoWmjO2Fe%2BCrVHRFnQTECXB6oCGkS&X-Amz-Signature=c9a98c9fbd5f908ddc69a7c4241732de07c296d4eda35e7ba9a4fdf0bb925bdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BFXMJGG%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCICiWAagkuPdNOdM3sIoOsWLUS9fgBA%2BLm3El0QpkCrX9AiAz83Xw8QhB8N13ys5fn5Lh9K8FQerBkMm51wgXltHoCCr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMEwGvFXuVDYRfPZPRKtwDX3Ugbxu5MIjvkOCQ6EIq7ui%2Fxb65oAudB6aVhiPWw1EVNNtZYmPgKy4Tn91cuJv5wfQ%2F4pTQ8L6wyeAZAYRTxZTIGHiZNMl%2BhtW3lmZdLeJMefhXMIJ6bQppAWFkQWQet7XPnP%2FUWVq%2FPgXZ51SjRamqOO0SVHKJmMwFDV2GAm%2Fl4If986%2FmhknspBRu8fuzNeDuWIAdWfWluUy6Kxk3Hiiw8DqYBSDLlR3bU2afHhYksGjEmi0PJMtK3J3hzaWhBPKD7OGIs40mUhNDjQI1mna2K9JmaNBVJJgxK%2BY2MrdTsvHbOvNuc86QUC%2F1SDn1XWORvWhK%2BdjksNgBXoHg4GfPXAtNb8fn36z3NVpAsxg2APlluffzbFRe6FK7U%2B%2FHIMpjB2%2BjkWDxPjEnHYvQEQW1CDjHpHkBmsap3RBodc66X64j8YOAgVXBDGqR3zxZU6FuFVdfxkCmZ5mqCSuanTUg79J%2FPzuvGrx2zYD%2F2zEOfyLdbUePZYYn7FZTKw%2FFp6%2B7kCWY%2BTGj7fxL745Phv%2B%2BMvUJPSUkxkR5gzDNrk4XwNOko0PC8RiR8IxqWtk7MqXo0seZszQMD%2BKHBAoAZrvNy7x1y2iM5CUP6SpiZHIrs8WFBEwF7NIKfSUwyc68wgY6pgF8oAST%2F57VsVZDhXq3fbA4AR36nnT%2BhEGl0Agk%2Fe%2BMCebx3o3SKV0Y8QVY4dvUKkKPB4Y%2FQ9aUJ5zWFsBL0yzOgB6sMgDmrXWkQq2ZUqB%2B0EvtJiKYEDXhWh0ROUFr2LeStSrLe7TSTzrK38oQ517vBWYOvLZDjaSalh3L1nm3Q1A9myBfCem2EJk4ElwyifMxoWmjO2Fe%2BCrVHRFnQTECXB6oCGkS&X-Amz-Signature=d261c4dfa4def2eb4e876de1fdb85c92239a765d5190910b41242c7a66c27995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RI5KIFA%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T230800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIAawRDAPsVTdVAqrqpnlYW0WaQ4%2BiyFG3hbFZ%2BdRzPeKAiEAlHiGUbhEmxtZlEPGUvNW9sSJ08DLx81ZFw%2BmB4a1fGIq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDHRXd4ltLhTUU%2Br4mCrcA1IspNFN6jwTu6ryuYie%2BF2yrz2ZyTiu%2B60Oh9cYAkW7pL47qpOlCqj%2BS5Zw9dyKYKc%2F8Lr%2BQ1CXZ3Yzmv8%2FlIn497zRCWLosgaAiPAEEG8wKnBWcxV%2FCcCbjRv9pIwxSX6gsFlRy6aO5OGbRjXYRB%2BOnmZXJydU46TGpo2%2BvMYNpNMDyPj0G1v3FiKv0G0%2B0646tG7gqpAscdBaHX8FX161hhZUeqWgxPept%2B6cbHrU0WwP5fsU6hZ6S8M8w6CFEl1XPyYwN6velA5vajp%2Bc%2BLbmch6wPNx3df6j9ao4KCNIpFQSbk%2B%2FcB8sHV10V%2BMdqUZiDoHygo547m%2Bk%2ByDchUnTdNMGNeFrVK6lHsieFV1lWH5%2FeQ3BKMnE6vMec3m%2FXsIO1jEHvVnJ5wlCN9HEXqYWfVbEAUjdP7Nbdt66ZO8eyD%2FOvsQAEhfa%2FInbuBL1wjNC%2BvEGkRWUxlf%2Bnwy6%2BFayxmZrZuP32OjrRkx%2Bn6R65U3NPr2nHojHp4b07b1y4XgwUlKr7wnAg45qARUzyZHu2UKnG9DW0KRI6cKJExptvdQvhxogLBZK08EDGfWj7fZZMlHj1es2ChLT9lBQ9tiGGa2jIDuf62xUjaSBPRbizwm%2BGm3I%2Fq27bA%2FMLHOvMIGOqUB17zK%2F%2BxH53rA2MEsw4KfNcVGTQ8XP4qDCOjfQk6mBjEDdVh1FTzUaVp12bbabS%2FgMy2Mq7RtnPaBH%2Fa7weLIgiZWYv7WK7%2FhUsB5BGe%2FuV4C0dXjgt%2FmZAdNxS5bmIAmdhVjz0QuyNJiZ%2BhJxnUyd2wqKVUPNk3OAWDFLiCbVbO4eblNaIsdm9h70Q8Pv4CDTZRP6zWGJvxwkQdgmpiKGBoGWS4Q&X-Amz-Signature=1819ff7a58bad13de9f01510d232199331027fe2349df79700f89fb1af61380d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646VZXLTY%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDsPQD%2Bb%2B2UeHTHspQt4Gn%2B5Kqzjd3iJ87y1IdwzRt6igIhAOTwipHrBSJB1W2OjkdQUBS18zARHM5Y196cqT0UuidEKv8DCE0QABoMNjM3NDIzMTgzODA1Igw8a%2Bgp%2BLQ2WM0hJF0q3APdvxkaRH3fb8Yh11zlLaTnftfhQDzcZKFX4id2JQBbswRpXmV5XBhsoFoEfiIbqsZ2pazBFeGqKzZ3or7%2FtQ4JP31gIeweysbGtdq5zzJ5hx7BVMT8cWD7zkjkml61Snor9hW%2F67hfzDBrj3thrFLwGqLASPC0sZExcQUqB4fv7uNdHt9v0Dpmw5PDZzIIOsomr6tI0ELIP2PeEVti6WsuCAl9r7DNZsMkKV83vrY3NZDPrF9NV4tL2ViFJSdxmIKAyGoAoT76Di01AQOwnz3UiN5onM9QpNKET2bP4tpOI2JOG4nm6APiCHHW8ACkOx%2BKmsZhra6h%2Fi1lw6wVGSfQEai7%2BVzJ4sCON02K0HQruu5qa8Vl4cisVW4xWJAQB5sJTfTpq8EoLX0D44KOCd9CKA7PjlcqFHBOrltNBPcjsjONAyYj8flmERU7EQv5rc6wtvcbhbMDSRsxuo4H7gODWpYO9XTXAQPJKvibA4xP%2B15xo9rfmO%2ByvKebAUYU8kqaf367SY9iwG%2BayAmwb2vvHxU5YJ5VxE0M059OGW04nhyOGrniYfHQ9ojDmzEHtAbgVtpLZqIlbaGLZdUs0jzL%2Bh0ij4upPpxGcbbh53ABiNRdSDuaiosud5ByjDD1z7zCBjqkAQKId6uFFSAazAohGHFM%2FGwzNvoiFFhAvbqhO3YcyCGSO83B%2Bs%2FALRwlhBDIwOwFQRYvFPG81J7x%2BBpjbcDhSbkzeOzQt7TL3ccbE8yb1XJZ7MYDPLjlXc89gOiCbVm1hFnOo2dzV00XItJoMbzN%2FryJ2ceP%2Frpjs7q307fIvj6%2BGEiZY8L8syxvZSuiQj1rJwcGLrNvGQ8RpFaxIUJDdYttcHF2&X-Amz-Signature=181c4e48508f444b8bb69fbff2925ad39e700449f95f87a9f90e0b2c8140e944&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BFXMJGG%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCICiWAagkuPdNOdM3sIoOsWLUS9fgBA%2BLm3El0QpkCrX9AiAz83Xw8QhB8N13ys5fn5Lh9K8FQerBkMm51wgXltHoCCr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMEwGvFXuVDYRfPZPRKtwDX3Ugbxu5MIjvkOCQ6EIq7ui%2Fxb65oAudB6aVhiPWw1EVNNtZYmPgKy4Tn91cuJv5wfQ%2F4pTQ8L6wyeAZAYRTxZTIGHiZNMl%2BhtW3lmZdLeJMefhXMIJ6bQppAWFkQWQet7XPnP%2FUWVq%2FPgXZ51SjRamqOO0SVHKJmMwFDV2GAm%2Fl4If986%2FmhknspBRu8fuzNeDuWIAdWfWluUy6Kxk3Hiiw8DqYBSDLlR3bU2afHhYksGjEmi0PJMtK3J3hzaWhBPKD7OGIs40mUhNDjQI1mna2K9JmaNBVJJgxK%2BY2MrdTsvHbOvNuc86QUC%2F1SDn1XWORvWhK%2BdjksNgBXoHg4GfPXAtNb8fn36z3NVpAsxg2APlluffzbFRe6FK7U%2B%2FHIMpjB2%2BjkWDxPjEnHYvQEQW1CDjHpHkBmsap3RBodc66X64j8YOAgVXBDGqR3zxZU6FuFVdfxkCmZ5mqCSuanTUg79J%2FPzuvGrx2zYD%2F2zEOfyLdbUePZYYn7FZTKw%2FFp6%2B7kCWY%2BTGj7fxL745Phv%2B%2BMvUJPSUkxkR5gzDNrk4XwNOko0PC8RiR8IxqWtk7MqXo0seZszQMD%2BKHBAoAZrvNy7x1y2iM5CUP6SpiZHIrs8WFBEwF7NIKfSUwyc68wgY6pgF8oAST%2F57VsVZDhXq3fbA4AR36nnT%2BhEGl0Agk%2Fe%2BMCebx3o3SKV0Y8QVY4dvUKkKPB4Y%2FQ9aUJ5zWFsBL0yzOgB6sMgDmrXWkQq2ZUqB%2B0EvtJiKYEDXhWh0ROUFr2LeStSrLe7TSTzrK38oQ517vBWYOvLZDjaSalh3L1nm3Q1A9myBfCem2EJk4ElwyifMxoWmjO2Fe%2BCrVHRFnQTECXB6oCGkS&X-Amz-Signature=32d7589c23fb9782a3f26b848aaff10a773e99e455ddb5c4c9849d4c9bad8f80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
