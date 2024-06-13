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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240613T190134Z&X-Amz-Expires=3600&X-Amz-Signature=3842fa51b81e87e2d4760a8d9ebb2233ddbd1326ede301028f31b80bec2ca74b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240613T190134Z&X-Amz-Expires=3600&X-Amz-Signature=e0632475a24e6ab0944a821e5481dfaa98193f485e74d371bd6822536ea4e7aa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

{{< alert context="info" text="Make sure the pico is **pluged in**" />}}

{{< tabs tabTotal="3">}}
{{% tab tabName="Method 1" %}}

### Step1:

select kit

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bdef0d54-6332-4187-b52a-eb4e69908fc0/noKitBtn.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240613T190134Z&X-Amz-Expires=3600&X-Amz-Signature=c9673bea7f8288d7ec6535aa56aca6193b5478fbbee0c618c813988f4b1b5f3b&X-Amz-SignedHeaders=host&x-id=GetObject)

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/15135698-6e60-4452-8ede-576d687a564a/armKit.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240613T190134Z&X-Amz-Expires=3600&X-Amz-Signature=ef15407081da8bcdae3299a849e72d2e76ad0b59a9271468ac64eb2880c273b8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Step2:

press `CTRL + SHIFT + B`

### Step3:

select the usb port the pico is plugged in it should look like this:

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240613T190134Z&X-Amz-Expires=3600&X-Amz-Signature=14f06b41f7464d1ae73e7997b89a41b9890980372280bcb980cf12145cc85326&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9e1f170b-d0ce-4bcf-978e-bb25bf1d630b/bootsel.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240613T190135Z&X-Amz-Expires=3600&X-Amz-Signature=f8dcace5361bdce9ac6e78342493789d7b9d38d9392f51496ab805b663f3997a&X-Amz-SignedHeaders=host&x-id=GetObject)

while still holding the button plug the pico back in

A usb stick should pop up in your file explorer

TODO: add pic

drag and drop the `pico_app.u2f` file in the build folder

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18bd49a6-0102-44ae-9f59-0bb08248a312/copy_uf2_over.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240613T190135Z&X-Amz-Expires=3600&X-Amz-Signature=6eafbbf873138081ff45758aada262710d370c2a585038c15d7ecdcdf79248c2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
