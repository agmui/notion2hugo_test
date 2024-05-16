---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-04-17T20:29:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-04-17T20:29:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 1
toc: false
icon: "rocket_launch"
---

## Install

{{< tabs tabTotal="4">}}
{{% tab tabName="Windows" %}}

Download and run: [rm-pico-installer](https://github.com/agmui/sample_rm_pico_app/blob/main/windows_install.exe)

It automatically installs all the tools and vscode.

### Zadig install

TODO: add zadig install guide

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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240516T014513Z&X-Amz-Expires=3600&X-Amz-Signature=ade2e839ca7e1f3abde40cfce9b70a94662b6d6e902257a7d8e090d6136d9856&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240516T014513Z&X-Amz-Expires=3600&X-Amz-Signature=ca7647c5d3af3c8a985937aa00c647fc501b144eab3e719c7b17b35fa47e377a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

{{< alert context="info" text="Make sure the pico is **pluged in**" />}}

{{< tabs tabTotal="3">}}
{{% tab tabName="Method 1" %}}

### Step1:

select kit

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bdef0d54-6332-4187-b52a-eb4e69908fc0/noKitBtn.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240516T014513Z&X-Amz-Expires=3600&X-Amz-Signature=6eaf5eabe61e69074a228d462cbbcebe1c74f7494d84ac08c31728a38f7a436a&X-Amz-SignedHeaders=host&x-id=GetObject)

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/15135698-6e60-4452-8ede-576d687a564a/armKit.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240516T014513Z&X-Amz-Expires=3600&X-Amz-Signature=70d9c56ea41f31c6ac98e3f38cdee0d96f7680023e82ba3563d0fd7435398236&X-Amz-SignedHeaders=host&x-id=GetObject)

### Step2:

press `CTRL + SHIFT + B`

### Step3:

select the usb port the pico is plugged in it should look like this:

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240516T014513Z&X-Amz-Expires=3600&X-Amz-Signature=8c7b0825380d79ec7d98aacfb86400a53cb22fc2ec9b9bf4f941793cb6b07a6c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

{{% alert context="warning" %}}
<details>
<summary>The pico did not show up?</summary>

- is the pico plugged in!?

	plugin then re press `CTRL + SHIFT + B`
- **(Windows users)** did you install the [Zidag drivers](https://www.notion.so/Getting_Started-54dc585fd15f45d0b75c8fdc66a854a8#zadig-install)
</details>
{{% /alert %}}

{{% /tab %}}
{{% tab tabName="Method 2" %}}

{{< alert context="warning" text="run in project **root**" />}}

Manual build

```shell
mkdir build
cd build
cmake ..
make -j4
picotool load -f pico_app.uf2

```

{{% /tab %}}
{{% tab tabName="Reset pico (If all else fails)" %}}

### Reset pico

```shell
mkdir build
cd build
cmake ..
make -j4

```

unplug the pico

Hold the bootsel button on the pico

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9e1f170b-d0ce-4bcf-978e-bb25bf1d630b/bootsel.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240516T014513Z&X-Amz-Expires=3600&X-Amz-Signature=a13b15675eba15f200ae350179df4c589947b4a028bf3fdd3b13e7a518c76a64&X-Amz-SignedHeaders=host&x-id=GetObject)

while still holding the button plug the pico back in

A usb stick should pop up in your file explorer

TODO: add pic

drag and drop the `pico_app.u2f` file in the build folder

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18bd49a6-0102-44ae-9f59-0bb08248a312/copy_uf2_over.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240516T014513Z&X-Amz-Expires=3600&X-Amz-Signature=54af66e7c79192d109bca1750fc32a0d05abc0b9b4f6bc887cdd2b32eec9deab&X-Amz-SignedHeaders=host&x-id=GetObject)

{{% /tab %}}
{{< /tabs >}}

## Running in [Wokwi](https://wokwi.com/) 👀

{{< alert icon="🤯 " text=" **No pico no problem!** We can just **simulate** it: [setup guide](https://www.notion.so/Wokwi/Set_up.md) "/>}}

## Building

{{< tabs tabTotal="2">}}
{{% tab tabName="Method 1" %}}
Just press `f7` **if** you installed all [plugins](https://www.notion.so/Getting_Started-54dc585fd15f45d0b75c8fdc66a854a8#vscode-extensions)

{{% /tab %}}
{{% tab tabName="Method 2" %}}

run:

```shell
mkdir build
cd build
cmake ..
make -j4
```

{{% /tab %}}
{{< /tabs >}}

## I borked my pico

If the pico bricks you **CAN'T** just use `CTRL + SHIFT + B` you have to [reset](https://www.notion.so/Getting_Started-54dc585fd15f45d0b75c8fdc66a854a8#uploading) it or do [Method 2](https://www.notion.so/Getting_Started-54dc585fd15f45d0b75c8fdc66a854a8#uploading)

slides install guide: [https://docs.google.com/presentation/d/1am9qFasZtjAnBu1M_k-8S4nNLxHHzSmExr1Sa2NGVAE/edit?usp=sharing](https://docs.google.com/presentation/d/1am9qFasZtjAnBu1M_k-8S4nNLxHHzSmExr1Sa2NGVAE/edit?usp=sharing)

### Compiling example folder files TODO: maybe make own page

You can either compile the files in the examples folder or just copy the code form the guides and paste it in main.cpp

## [C++_basics](https://www.notion.so/9021d9b4e87a45a5bb017030d4b6fbef)  
