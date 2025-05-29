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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGKASQSN%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T100938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4cdXK7lP6jttdS6IaWUOMVJAvBzWDQNHETZEzSjxn4wIhAO8zWcd2GN4BIzRTEoYPSaQvNOnP32OwHH7EiBCJ11UkKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxURNFUBqSmmwfrCSUq3APEBi0b3RGkJkQiig6KD6nhbM83XnpGqU4pkC9cbfbFANebgMxYjX9%2F6SG3x1UHUjont%2FGwDLHRRDO2eTITcDokhyaRKq17qwYcpJDjj8Ome%2BMxmL%2FtrOMZ2NKWeIJ8XPgytlYi7ePwYEYg0%2BxdbDJOiPLnP7H4%2FRxkxSJaI8i3bvD%2BJiP88Jfsx%2Feq8v7x7PxxgljyaU6el1XmCV7uyRf%2BX1k6vQf0%2F22FkEg4ccHEYzJD%2Br0yAgAmuX9auP6GY9VKZfTEkNgIgLa1WFmruakTc%2FH5rSrWnOQ4ngFQgqkORppxZsom2kBqC9zpqC%2FILjZGedSKelg86H2sl5aFo0REqzch7g7ueVWm8L207f%2FFnCC0YkqXVg2d0wIyoTuY8s9tMhJ8k1Bx9M395kYJ4YV1Inm58e4ni0DRaOAw97xNre9hGF7oVOOnjUBoRw37Y3bh%2B7Jz7f1ELSu4jPZvVeuyM7QyLK1D1ZJzaVeCWrHLsyeXn1bqYL8VB%2F5YrUeQeRxPBxSo8LA3ebkAyrocrAseIgSz3ChuSae48Pl2R1n%2Bjk07oxwfXU8OVOya6IYRGnxCszfJMB01dU0fFTf37afchvFEo%2FLH%2Fj31anVlIye21x%2B2jFjtfiR2yLmQADCZ3ODBBjqkAZHU%2FGEJoBN2BgK%2FEzoZ8CJGr4xAnij45KG8EH7SSV2eLchoPm94a6ONhVyEG7bgwHzMVtkaLJlQB8ss6TRasjtckIFF4NVjGV2c2qkfBqZNLqy96tvo03mcO3R2M5pmyuDf%2FvDebpo6FufRyNmgzl5TtM5qTR69fBHxHYv44jqd7P6S041ZgDsn9%2FLZsGS%2Bpdbtrmnh8slBfZKgh26%2FI0%2Bgihea&X-Amz-Signature=4e556666e7893b30cd6163b728f4c2006130819796af6cbbf3d8d8656981a457&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGKASQSN%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T100938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4cdXK7lP6jttdS6IaWUOMVJAvBzWDQNHETZEzSjxn4wIhAO8zWcd2GN4BIzRTEoYPSaQvNOnP32OwHH7EiBCJ11UkKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxURNFUBqSmmwfrCSUq3APEBi0b3RGkJkQiig6KD6nhbM83XnpGqU4pkC9cbfbFANebgMxYjX9%2F6SG3x1UHUjont%2FGwDLHRRDO2eTITcDokhyaRKq17qwYcpJDjj8Ome%2BMxmL%2FtrOMZ2NKWeIJ8XPgytlYi7ePwYEYg0%2BxdbDJOiPLnP7H4%2FRxkxSJaI8i3bvD%2BJiP88Jfsx%2Feq8v7x7PxxgljyaU6el1XmCV7uyRf%2BX1k6vQf0%2F22FkEg4ccHEYzJD%2Br0yAgAmuX9auP6GY9VKZfTEkNgIgLa1WFmruakTc%2FH5rSrWnOQ4ngFQgqkORppxZsom2kBqC9zpqC%2FILjZGedSKelg86H2sl5aFo0REqzch7g7ueVWm8L207f%2FFnCC0YkqXVg2d0wIyoTuY8s9tMhJ8k1Bx9M395kYJ4YV1Inm58e4ni0DRaOAw97xNre9hGF7oVOOnjUBoRw37Y3bh%2B7Jz7f1ELSu4jPZvVeuyM7QyLK1D1ZJzaVeCWrHLsyeXn1bqYL8VB%2F5YrUeQeRxPBxSo8LA3ebkAyrocrAseIgSz3ChuSae48Pl2R1n%2Bjk07oxwfXU8OVOya6IYRGnxCszfJMB01dU0fFTf37afchvFEo%2FLH%2Fj31anVlIye21x%2B2jFjtfiR2yLmQADCZ3ODBBjqkAZHU%2FGEJoBN2BgK%2FEzoZ8CJGr4xAnij45KG8EH7SSV2eLchoPm94a6ONhVyEG7bgwHzMVtkaLJlQB8ss6TRasjtckIFF4NVjGV2c2qkfBqZNLqy96tvo03mcO3R2M5pmyuDf%2FvDebpo6FufRyNmgzl5TtM5qTR69fBHxHYv44jqd7P6S041ZgDsn9%2FLZsGS%2Bpdbtrmnh8slBfZKgh26%2FI0%2Bgihea&X-Amz-Signature=bb342a4a36d5bf195989b83b288e3e6fed3f5d7f8ea3d817ffa32741fc9a3f87&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGKASQSN%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T100938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4cdXK7lP6jttdS6IaWUOMVJAvBzWDQNHETZEzSjxn4wIhAO8zWcd2GN4BIzRTEoYPSaQvNOnP32OwHH7EiBCJ11UkKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxURNFUBqSmmwfrCSUq3APEBi0b3RGkJkQiig6KD6nhbM83XnpGqU4pkC9cbfbFANebgMxYjX9%2F6SG3x1UHUjont%2FGwDLHRRDO2eTITcDokhyaRKq17qwYcpJDjj8Ome%2BMxmL%2FtrOMZ2NKWeIJ8XPgytlYi7ePwYEYg0%2BxdbDJOiPLnP7H4%2FRxkxSJaI8i3bvD%2BJiP88Jfsx%2Feq8v7x7PxxgljyaU6el1XmCV7uyRf%2BX1k6vQf0%2F22FkEg4ccHEYzJD%2Br0yAgAmuX9auP6GY9VKZfTEkNgIgLa1WFmruakTc%2FH5rSrWnOQ4ngFQgqkORppxZsom2kBqC9zpqC%2FILjZGedSKelg86H2sl5aFo0REqzch7g7ueVWm8L207f%2FFnCC0YkqXVg2d0wIyoTuY8s9tMhJ8k1Bx9M395kYJ4YV1Inm58e4ni0DRaOAw97xNre9hGF7oVOOnjUBoRw37Y3bh%2B7Jz7f1ELSu4jPZvVeuyM7QyLK1D1ZJzaVeCWrHLsyeXn1bqYL8VB%2F5YrUeQeRxPBxSo8LA3ebkAyrocrAseIgSz3ChuSae48Pl2R1n%2Bjk07oxwfXU8OVOya6IYRGnxCszfJMB01dU0fFTf37afchvFEo%2FLH%2Fj31anVlIye21x%2B2jFjtfiR2yLmQADCZ3ODBBjqkAZHU%2FGEJoBN2BgK%2FEzoZ8CJGr4xAnij45KG8EH7SSV2eLchoPm94a6ONhVyEG7bgwHzMVtkaLJlQB8ss6TRasjtckIFF4NVjGV2c2qkfBqZNLqy96tvo03mcO3R2M5pmyuDf%2FvDebpo6FufRyNmgzl5TtM5qTR69fBHxHYv44jqd7P6S041ZgDsn9%2FLZsGS%2Bpdbtrmnh8slBfZKgh26%2FI0%2Bgihea&X-Amz-Signature=504ba5ba2e89ee39572f71df0b986b6736e5329123d94a02060f3c891ee07714&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QF62FJG%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T100943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRssZNUXHFRpahljld0weicBSSyYpQ0wEi6ayqyBVJDAiBRGcPUaKD4yUqwwnNFB6jX6b6fNQN9%2B3XtrcuPdPtceyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdUHbqzG2pNP7JmioKtwDLH25qPTgjtvEbUy%2FGRskLI2c2%2Fm%2BnubMsXlQ7bQ4gRye8R9HWG14T3xSjglRrY99jgLE%2BiX1wbqzEMgV%2BKTi4Hewrh0FcyA24O8%2FiZf%2FRzty1Oim3xs7qNGf9xXePdBIYGG82Oaj53XhriyD3YNx7nD8xIdyjkYs4pzGbGNBI5vLT4YCU9x7owPaqGdGV2CoCwqr26jh6BYi5jfO7pBHFi%2FAozT2buGN%2Fvr3muystN3KUNzecEJGD3QSXCbKWVn1wwMgRBg5ns6etJL2DAw1EoBSUqtDqF1dH69jcYcyz%2BpZzkKxDlvwMfwOyf4WcxexIn9%2B89KgBN9GYgyoSQrgKc2T%2FsUmthdHGTedc7KmbYE6SIJn5EL9%2BJ1ubWjT65S7wNryy8n2WnaXYQfJXtUYEQ9030oY0HdohloWg8f5cho5E8LiuD0NK9h%2FJEWYCVtBni2DEiDGAzrGiszvu%2F9n9keQgU%2BhszgOpwmDOhdt7uWxH76Try05X%2Fh3hmM4LhQmdKrpz%2FEERBaqvEU130Y8zi5gr3SJpHMZ%2FhXZwkykKcHHjNLoJsBEvZDxxys9l1vJG1zdjc3W6tGOWlHGJDybrYgK2mHdwm9nrfEZ%2F933obnnoI%2FGGuJqFUOsqIow0dzgwQY6pgHLS6yiSAoMutT93mBLmfr9AQ3Hn%2Bu%2BNzYJSmBPrLBDaHCO4%2FRYrmkzzYhZ0%2BEG4Ooe3%2BnCZsvqX%2BECUF9hFJ%2FPRkcjudFs7i1b0IQqRYrN0SHkXSNsdL%2Fiu%2BqF6mVIo1SI7aItCb79OPsLnf9SxIoxXMQ8G5maiRF48FU%2F8FoMLpewfmF%2BN0KWDkUe5YrsGY7%2Bb2IRBv8t4bXFgT0rgw2RkJpsX2bT&X-Amz-Signature=df543c5eb52f9321e120cad73127e7cf8143b44418d2128bf46b73707cf7b8bd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGKASQSN%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T100943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4cdXK7lP6jttdS6IaWUOMVJAvBzWDQNHETZEzSjxn4wIhAO8zWcd2GN4BIzRTEoYPSaQvNOnP32OwHH7EiBCJ11UkKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxURNFUBqSmmwfrCSUq3APEBi0b3RGkJkQiig6KD6nhbM83XnpGqU4pkC9cbfbFANebgMxYjX9%2F6SG3x1UHUjont%2FGwDLHRRDO2eTITcDokhyaRKq17qwYcpJDjj8Ome%2BMxmL%2FtrOMZ2NKWeIJ8XPgytlYi7ePwYEYg0%2BxdbDJOiPLnP7H4%2FRxkxSJaI8i3bvD%2BJiP88Jfsx%2Feq8v7x7PxxgljyaU6el1XmCV7uyRf%2BX1k6vQf0%2F22FkEg4ccHEYzJD%2Br0yAgAmuX9auP6GY9VKZfTEkNgIgLa1WFmruakTc%2FH5rSrWnOQ4ngFQgqkORppxZsom2kBqC9zpqC%2FILjZGedSKelg86H2sl5aFo0REqzch7g7ueVWm8L207f%2FFnCC0YkqXVg2d0wIyoTuY8s9tMhJ8k1Bx9M395kYJ4YV1Inm58e4ni0DRaOAw97xNre9hGF7oVOOnjUBoRw37Y3bh%2B7Jz7f1ELSu4jPZvVeuyM7QyLK1D1ZJzaVeCWrHLsyeXn1bqYL8VB%2F5YrUeQeRxPBxSo8LA3ebkAyrocrAseIgSz3ChuSae48Pl2R1n%2Bjk07oxwfXU8OVOya6IYRGnxCszfJMB01dU0fFTf37afchvFEo%2FLH%2Fj31anVlIye21x%2B2jFjtfiR2yLmQADCZ3ODBBjqkAZHU%2FGEJoBN2BgK%2FEzoZ8CJGr4xAnij45KG8EH7SSV2eLchoPm94a6ONhVyEG7bgwHzMVtkaLJlQB8ss6TRasjtckIFF4NVjGV2c2qkfBqZNLqy96tvo03mcO3R2M5pmyuDf%2FvDebpo6FufRyNmgzl5TtM5qTR69fBHxHYv44jqd7P6S041ZgDsn9%2FLZsGS%2Bpdbtrmnh8slBfZKgh26%2FI0%2Bgihea&X-Amz-Signature=5f0269de7b2f679d446dce207d18e884edcd009d54f390de70861a0e476d9d44&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGKASQSN%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T100938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4cdXK7lP6jttdS6IaWUOMVJAvBzWDQNHETZEzSjxn4wIhAO8zWcd2GN4BIzRTEoYPSaQvNOnP32OwHH7EiBCJ11UkKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxURNFUBqSmmwfrCSUq3APEBi0b3RGkJkQiig6KD6nhbM83XnpGqU4pkC9cbfbFANebgMxYjX9%2F6SG3x1UHUjont%2FGwDLHRRDO2eTITcDokhyaRKq17qwYcpJDjj8Ome%2BMxmL%2FtrOMZ2NKWeIJ8XPgytlYi7ePwYEYg0%2BxdbDJOiPLnP7H4%2FRxkxSJaI8i3bvD%2BJiP88Jfsx%2Feq8v7x7PxxgljyaU6el1XmCV7uyRf%2BX1k6vQf0%2F22FkEg4ccHEYzJD%2Br0yAgAmuX9auP6GY9VKZfTEkNgIgLa1WFmruakTc%2FH5rSrWnOQ4ngFQgqkORppxZsom2kBqC9zpqC%2FILjZGedSKelg86H2sl5aFo0REqzch7g7ueVWm8L207f%2FFnCC0YkqXVg2d0wIyoTuY8s9tMhJ8k1Bx9M395kYJ4YV1Inm58e4ni0DRaOAw97xNre9hGF7oVOOnjUBoRw37Y3bh%2B7Jz7f1ELSu4jPZvVeuyM7QyLK1D1ZJzaVeCWrHLsyeXn1bqYL8VB%2F5YrUeQeRxPBxSo8LA3ebkAyrocrAseIgSz3ChuSae48Pl2R1n%2Bjk07oxwfXU8OVOya6IYRGnxCszfJMB01dU0fFTf37afchvFEo%2FLH%2Fj31anVlIye21x%2B2jFjtfiR2yLmQADCZ3ODBBjqkAZHU%2FGEJoBN2BgK%2FEzoZ8CJGr4xAnij45KG8EH7SSV2eLchoPm94a6ONhVyEG7bgwHzMVtkaLJlQB8ss6TRasjtckIFF4NVjGV2c2qkfBqZNLqy96tvo03mcO3R2M5pmyuDf%2FvDebpo6FufRyNmgzl5TtM5qTR69fBHxHYv44jqd7P6S041ZgDsn9%2FLZsGS%2Bpdbtrmnh8slBfZKgh26%2FI0%2Bgihea&X-Amz-Signature=9dd69cc585b76b2e123c44b093319e5f9b64117830babc55fc5359d04113e9a5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
