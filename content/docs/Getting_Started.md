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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4ZGMNKF%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8eJ5D2i30%2B485Lbe2OxW56RyF9rFadfiI%2BhJnHcL%2BhgIhAJa9rv6l8iEfsJ4wWR1MYl8kmGDcvmIkfRrMIT7sGqDnKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwf3CaHsKI59XpzCWAq3AOAkrLHbxfJQcBomW0IfOLV%2BKRofaV3oWo6whMNrkximHr1360DykAiiSKH8eAFudPgIqIJpzWXmsS%2BgMqlJo%2FfMBLoPZAZNvqrh%2BFtOtO2w6KkFgAZEhMK32fREF60%2Bmw%2F6ZOyQCUNtMBdz2%2F9TvCQv2dTHHEeXnU848J%2F4fskdQ33SRqS6hNKEAkyG1AZB7nfcVMLvbS1w5OVJF7tbVDeYZrgkgjI2CBZXdkYzSyNyZ4DnhbUkJ%2FagVf0EklyrsqpyUAwKLR6NbhCgcuv9dGphevT4ECWmdTYPk0lGRqZTNXD9CRIgahMMAjyb%2BDF5CzVqonMjqdQuduKKDHeaZTj7JAhx2Iz%2Bkad%2FKK00XeuItTmDrV%2Bj5d%2FSc%2FAhAaOshU8p5ooFEGRLizi5HFbgPDNxePGIWA1sOBeuIfiIK8czyIuJn7nGCTAI%2BJIj4jLRcWd1Ozt7qs3%2Bi%2BY2eDzYiiQ%2FR2pVrEbMGqRC0R8j1PFRBL%2B21bY71le%2FeTA7ioV1YdzFrLFhCi%2BC4WC2LJl2%2B1pO9jSfV5p1VKhullgNLgvpBiHa09Ep6%2FP2t2Fboj2NAmfqsx8%2BALuRdVWxiNBvyNK4f69n3n4lLMuJfXrL53yM5m%2BWYwD%2Fy7oPAp8yTDDmLW9BjqkAWg%2BPsbicQQSDVa%2BZlkB8F1TYtUnwEjAdN6PGmQi9MHF8u%2BnOSMwQBMwpmpyGa7d8ggxWPqVEhDGYB7RjV1Xnqmc%2FHS4IZ30piBEfMIWGNwP1%2BZ4ewWM5lyO%2F2M5jMlll9KxvwXYulJ6C0FgEpE60mTJhHQwm4YaSG7aTJZutPTS7uRbPERYJFqz%2FLaClh3aTAxoXcL8R4pi%2BXOBxJnMj7zkJpiX&X-Amz-Signature=3f108ca72101767d217964d020679e0486bb53f96dcf3fb185e107415165a855&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4ZGMNKF%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8eJ5D2i30%2B485Lbe2OxW56RyF9rFadfiI%2BhJnHcL%2BhgIhAJa9rv6l8iEfsJ4wWR1MYl8kmGDcvmIkfRrMIT7sGqDnKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwf3CaHsKI59XpzCWAq3AOAkrLHbxfJQcBomW0IfOLV%2BKRofaV3oWo6whMNrkximHr1360DykAiiSKH8eAFudPgIqIJpzWXmsS%2BgMqlJo%2FfMBLoPZAZNvqrh%2BFtOtO2w6KkFgAZEhMK32fREF60%2Bmw%2F6ZOyQCUNtMBdz2%2F9TvCQv2dTHHEeXnU848J%2F4fskdQ33SRqS6hNKEAkyG1AZB7nfcVMLvbS1w5OVJF7tbVDeYZrgkgjI2CBZXdkYzSyNyZ4DnhbUkJ%2FagVf0EklyrsqpyUAwKLR6NbhCgcuv9dGphevT4ECWmdTYPk0lGRqZTNXD9CRIgahMMAjyb%2BDF5CzVqonMjqdQuduKKDHeaZTj7JAhx2Iz%2Bkad%2FKK00XeuItTmDrV%2Bj5d%2FSc%2FAhAaOshU8p5ooFEGRLizi5HFbgPDNxePGIWA1sOBeuIfiIK8czyIuJn7nGCTAI%2BJIj4jLRcWd1Ozt7qs3%2Bi%2BY2eDzYiiQ%2FR2pVrEbMGqRC0R8j1PFRBL%2B21bY71le%2FeTA7ioV1YdzFrLFhCi%2BC4WC2LJl2%2B1pO9jSfV5p1VKhullgNLgvpBiHa09Ep6%2FP2t2Fboj2NAmfqsx8%2BALuRdVWxiNBvyNK4f69n3n4lLMuJfXrL53yM5m%2BWYwD%2Fy7oPAp8yTDDmLW9BjqkAWg%2BPsbicQQSDVa%2BZlkB8F1TYtUnwEjAdN6PGmQi9MHF8u%2BnOSMwQBMwpmpyGa7d8ggxWPqVEhDGYB7RjV1Xnqmc%2FHS4IZ30piBEfMIWGNwP1%2BZ4ewWM5lyO%2F2M5jMlll9KxvwXYulJ6C0FgEpE60mTJhHQwm4YaSG7aTJZutPTS7uRbPERYJFqz%2FLaClh3aTAxoXcL8R4pi%2BXOBxJnMj7zkJpiX&X-Amz-Signature=cceafbcb1a23e547e733d28b03a4483b221a77b85216caac18990ca5e704e3ec&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVYLQXRQ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCO4CjwolEzeNOaDqwP4u%2FNJ5fjXzwVdaJOoaRy87z5bQIhAOta3xSiDAjZiEjQOqeR%2BiXI64TkKqadGsl7tvvzMtEdKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyARrcXC%2FVmx%2F1yLeQq3AMPhxRVZ17bzijpPQE4EXscFt5pNZJ%2BhNabSedZmVyfUXhyOpCIXOFHK5uU0MY%2B%2FXmObsg52Fvp9b0Imm8O8Ab3M1TRvcIZ0aTbaMjzIYI7BN4W4XH8fb%2Brbz9Qi6TXoVbl6QK3GR8Ro9AK8gDEPW5WdZzoPntDd0to3KTKelu4KfboxGleur0T7FDkwF0qYFboyIhhZaHtZhEFwu7n%2BOVxLMvdmdOO9foa9FObO6hW%2BgO8maxM%2BGKpifEuvSqRpcTbCoVEFkcU1l%2BLQYEQFBbx5oLDptHEU8S8xi87L%2F0B60sL7dxyXnzIzm6UJ0RfulgOtWERCRNpVwQ%2BGWgFF4ftYsXn9CK%2FRfML216vcFZqQl6avaETrQQQv83rv5WfJmxYYbxpknDW8WExZ3MntnVLHfGqZmH0lhok3nyk3wsitsG%2FFOy76dB8ypDBkKIibpt2wNhsVHTmv44wzCSLkcuftLc6j5LAqK4%2FDwrEBL%2BpJhSrvk8THJ1XiFyZDSiUj1TUW7XJJbHf7QYGT%2Bod9s8k3e32hsBJeTUYzSI2LeAnlW2SPnbFyhrkFQ3NaHYxL0fbXwEmVkhEglopARnvoYU6HEhBBt9WJPdfNkG8NjcP3AtYZ%2BthTkr30KN%2FVTDEmLW9BjqkAQaLj4XHXxVDfGPFhGbBztI8V7I5sXis9VtFFefU0sVh5hfmA0ytiMpHJiI%2Fzs3un7NWQly9HWXxqwG7%2B4uenccPF1uPaUr1ePuAhoSjDRUNAze2KAVxPtlVNeeqXQrvmbCeBoz24QK5Lkp2ZKAbQg%2BuCReoDnWwfYGJxG4btXEqb1b95VqFLzjDT7FlmL%2BRuk3XeNRg8IRuuxCtnRzB%2F%2FPOK4bS&X-Amz-Signature=41f45fb1f48eb4edeb4a67ec659505f6625e5efef746e55f61f404cbae0ac2cd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NJHELLR%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGj5ieahgu0nZXvEPDUvUh%2FGVmkDP%2Blhk7VXVxQh1cQQIhAJFH4BobWVakV9qOvQlvaqW%2FdpirulsNPlyWDkUBly8HKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyybuTXt74rizbNz34q3AMwzBXrvDitz5StJpZY5OTwQqguH%2FygLmgriK9ZwUIuuGERhk17P2ao1cFj51wzVvtzTipfvJn6EiqoXIoilOFruUQSUfat89T1cQHj6ZLmL6RWSBEdUMnX%2BpH9Qp8wWjjOJ5m1YpopxJteWGJcaENVBUb%2FN5p2txgLc%2F8Y3gZ%2FX9eii79j%2FPRTotNwyG%2Bg7fAeFNkLMuLCATO4wReFGcPT0HGiAfiKmS7LAhixSmSGsZqEmcBFl3xwydc5QEYiY5H5cRViTH9dvehEQdquNinbg95f8tgHm6fW8zU1OSGUVzA6Mq7L11P%2BWOYoOMeetUfTUNRzmN4Mneaud0VhJ3eZbWhSvg0A4LDpZPwd5%2F85Siq3xjFjH2E%2F%2F7Ai%2FuVpuxtVPh673AIM3Q0VTBWo%2FlDaxisY2AiitjQgJ4qCoSvQGH9h6qN8RCdRVj2CtinT200G16FzNqImvf3k2%2Fex8NtaX%2BjE63hXx5BpC%2Bw4vXtpZqfGqfQ9SKq%2F0EsgdDXBtDe%2Bat3GF8HHW5FO2gk%2BiPWxgjEykirFRU3wuWkmq7ZUWJPmXei0nlncERMbivas6%2Fil8MzIaqCK%2FnDX1GF28eDYJoIQK7K7aKv7rKvgf7z%2FsWicJQFZQbiRQi5tAzC6mLW9BjqkAWwvBK8qzaBnQ6APXQOoqfA1hQieMxy0bAZWgSeqhZk1PruyQirv%2F%2BvlYN0%2BvHLY0eCVyiTfEF%2FboEcxD4V3giRp5ANmYYKCCfwPhpfBv3IhHTNi2zoTrpcBwnGGEr8MTmk74Gi6RrSlx%2BeVtHJDUeWS%2BWkc7m4RNBgmTkfNcBwaSYbYiNIsUtgbufzLFJEqoPqVJ6HvBYmhP8dTLHDl3Ud1a093&X-Amz-Signature=3af7656359c55b40bf85d4c9c4cfb42bcba436ccc38fb9efbe8ae94af1f74cce&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4ZGMNKF%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8eJ5D2i30%2B485Lbe2OxW56RyF9rFadfiI%2BhJnHcL%2BhgIhAJa9rv6l8iEfsJ4wWR1MYl8kmGDcvmIkfRrMIT7sGqDnKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwf3CaHsKI59XpzCWAq3AOAkrLHbxfJQcBomW0IfOLV%2BKRofaV3oWo6whMNrkximHr1360DykAiiSKH8eAFudPgIqIJpzWXmsS%2BgMqlJo%2FfMBLoPZAZNvqrh%2BFtOtO2w6KkFgAZEhMK32fREF60%2Bmw%2F6ZOyQCUNtMBdz2%2F9TvCQv2dTHHEeXnU848J%2F4fskdQ33SRqS6hNKEAkyG1AZB7nfcVMLvbS1w5OVJF7tbVDeYZrgkgjI2CBZXdkYzSyNyZ4DnhbUkJ%2FagVf0EklyrsqpyUAwKLR6NbhCgcuv9dGphevT4ECWmdTYPk0lGRqZTNXD9CRIgahMMAjyb%2BDF5CzVqonMjqdQuduKKDHeaZTj7JAhx2Iz%2Bkad%2FKK00XeuItTmDrV%2Bj5d%2FSc%2FAhAaOshU8p5ooFEGRLizi5HFbgPDNxePGIWA1sOBeuIfiIK8czyIuJn7nGCTAI%2BJIj4jLRcWd1Ozt7qs3%2Bi%2BY2eDzYiiQ%2FR2pVrEbMGqRC0R8j1PFRBL%2B21bY71le%2FeTA7ioV1YdzFrLFhCi%2BC4WC2LJl2%2B1pO9jSfV5p1VKhullgNLgvpBiHa09Ep6%2FP2t2Fboj2NAmfqsx8%2BALuRdVWxiNBvyNK4f69n3n4lLMuJfXrL53yM5m%2BWYwD%2Fy7oPAp8yTDDmLW9BjqkAWg%2BPsbicQQSDVa%2BZlkB8F1TYtUnwEjAdN6PGmQi9MHF8u%2BnOSMwQBMwpmpyGa7d8ggxWPqVEhDGYB7RjV1Xnqmc%2FHS4IZ30piBEfMIWGNwP1%2BZ4ewWM5lyO%2F2M5jMlll9KxvwXYulJ6C0FgEpE60mTJhHQwm4YaSG7aTJZutPTS7uRbPERYJFqz%2FLaClh3aTAxoXcL8R4pi%2BXOBxJnMj7zkJpiX&X-Amz-Signature=abe39263ee4e5b0e84727b5a88025eb15cd84bffa0a0db85d3de9982f41d6ba8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
