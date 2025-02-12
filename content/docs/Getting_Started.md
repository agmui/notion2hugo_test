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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JTNON4G%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T003554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHm7LDHMvrOVcezY02VRUro8P8X4gAw5%2BJ6NmBO4ICc%2BAiBn1JJWAQDJl9OvS7jXv%2F2wbU0gk0E6TF6IdjTVyk1ARCqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDFPySbE%2BzAUdSxFEKtwDYpp9AGR7RMhGPQLDVkNCPhVGZp5nj9gMvasy8z6rRL4otKJ20KjHZMePVK0jfjpsM1ehNEE5oZEtc1OD4pf5byYfes%2FdcySsaaNW6XqfK8U4A1zRSSeaxKvfg%2Ft2u2eXl7TV6mAgZM3sqbvsDVJECgkwLRz9dye0Hb1OZ3ywjt8%2BI1KtX1raN0ouD%2BqLsciw41FC%2BDXn18mNfw5zlU0lTcg6qMpWDbVEaVcRXjWvU%2BEButTwXooudzf4JhYHKnHI0hbvMKhrosl5xwDg9We%2BJNdoEqhFutGdkkd0n0sVcPJzcJpLjO9vHfXP3QTi%2FeC3xI6oiNuCWYSPPqiZeDFSLriPJvTn1EJWWgkNhAD%2BZc71QqPcuXxj0yZxnf1559jU78vTPsRVI0bLqDBVsV9mJw%2Fexwwj82R6k%2B83gN8iIJAYGUPdNvcilRZgu75SuXuIumqsYMI60JJbE9EFmnPxeOF3xunCOj5iKD9gffSHi0aFimmL%2BzQWnuljMjcSv62oB5XXLzmNf7l5Fai4qxuHdoDaBhypbRZHCfuwiKnuVbVIBJEmkk8dJXvZfB4IsLybLqTqoJMfmW%2B3bdDuoBk4xBKjbboVECm37IB7SNJu5rRswxfKllPz3NrJancw4siuvQY6pgGaASVeTKSIHZBAxWaUAlMwXvJhGaNIUwugC9WdV83eAr73Mi7inbfFltF79v3fj%2FoQIVTsOZqQW%2FsXBxZTc0sdns6j7YRpj4xKiXwRZgdKZIqPqFhefzrs6Ygc%2BxczPij1GsIpVx8a%2BafPmod87D%2F%2FfR1YexxGI83%2BVFcPw9A2eAEJxoOlDlIAlc5IoNndHJYDK2HVBs0XPotckajcvwTFFyBfMsIr&X-Amz-Signature=da64d5cd0718ef6f5da749b946df21a134c7652834684c307234375f12e395b7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JTNON4G%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T003554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHm7LDHMvrOVcezY02VRUro8P8X4gAw5%2BJ6NmBO4ICc%2BAiBn1JJWAQDJl9OvS7jXv%2F2wbU0gk0E6TF6IdjTVyk1ARCqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDFPySbE%2BzAUdSxFEKtwDYpp9AGR7RMhGPQLDVkNCPhVGZp5nj9gMvasy8z6rRL4otKJ20KjHZMePVK0jfjpsM1ehNEE5oZEtc1OD4pf5byYfes%2FdcySsaaNW6XqfK8U4A1zRSSeaxKvfg%2Ft2u2eXl7TV6mAgZM3sqbvsDVJECgkwLRz9dye0Hb1OZ3ywjt8%2BI1KtX1raN0ouD%2BqLsciw41FC%2BDXn18mNfw5zlU0lTcg6qMpWDbVEaVcRXjWvU%2BEButTwXooudzf4JhYHKnHI0hbvMKhrosl5xwDg9We%2BJNdoEqhFutGdkkd0n0sVcPJzcJpLjO9vHfXP3QTi%2FeC3xI6oiNuCWYSPPqiZeDFSLriPJvTn1EJWWgkNhAD%2BZc71QqPcuXxj0yZxnf1559jU78vTPsRVI0bLqDBVsV9mJw%2Fexwwj82R6k%2B83gN8iIJAYGUPdNvcilRZgu75SuXuIumqsYMI60JJbE9EFmnPxeOF3xunCOj5iKD9gffSHi0aFimmL%2BzQWnuljMjcSv62oB5XXLzmNf7l5Fai4qxuHdoDaBhypbRZHCfuwiKnuVbVIBJEmkk8dJXvZfB4IsLybLqTqoJMfmW%2B3bdDuoBk4xBKjbboVECm37IB7SNJu5rRswxfKllPz3NrJancw4siuvQY6pgGaASVeTKSIHZBAxWaUAlMwXvJhGaNIUwugC9WdV83eAr73Mi7inbfFltF79v3fj%2FoQIVTsOZqQW%2FsXBxZTc0sdns6j7YRpj4xKiXwRZgdKZIqPqFhefzrs6Ygc%2BxczPij1GsIpVx8a%2BafPmod87D%2F%2FfR1YexxGI83%2BVFcPw9A2eAEJxoOlDlIAlc5IoNndHJYDK2HVBs0XPotckajcvwTFFyBfMsIr&X-Amz-Signature=f30074ab68a4c99748f4700fac207f59508f8366a55c5fe8f5b4aa31f0a47c33&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKUR4KKM%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T003556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAj93H1xvnuCY2ljYJx09UtLFWla%2BT%2FGfC1NecYNviIAiBsQRwhiriOEuh5xzj5fjszOI7nYYpiFhim2rfgwnF%2FHyqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMblWg%2B8zSb3cfgG14KtwDdl3rN1laRRjQb7xo6IG%2F38zs6oVe5x1pHnhuXZmJB%2FbZZ0D1ci8DsRTyLG3cXhFD7eQqvqFjMBbQOK05lLVVK1bkah01auK7%2FZ1ryPFY%2BA1HHjxfrh0jVSFloyuHBqEI0bzWwOwTPg5%2B2YhfmMEmc6SAsAqn8Rq6gJ5pQCsGhjEs%2BK10Li4sa0FKO3izoBZt%2BLOtw3VkfPcuZRcKbhNatGo4ti0CCZzULG7THvchz2YlHO7MvAcbfxT5qeCXMa2iMVCcUW5spHInH528Xc6ki%2F%2F5QZkkghZ303R19BYHXv5D3ZN9RWOn7gJD68ewvKEjj0HY4PB2wM070p%2FYG7f%2BwPstsmLt%2FilwwhJG1FVmWgEOIr%2FMBrHibJmTEpRnubi46RMcVEu1QQXDtuM6irD4meHjvneBelS6d2Bt44TN5X2t4aiLLmEdM968hkoS1ldigNyeZihQPRAJ6SjTDWzPDNgQMl9WXB0pT2PBR9kldZcSI3BJiVUwb%2Btf5a4ikHsL%2Bi1QSxYNqcAgYK2wdJU%2BFUHkqMAiQlN3xdTHPjuwZTN%2FqEmqQCDTqQnYMhPQijZ1j0P%2FAM0uOmPwRwrRX4dcebqrgbC8L5uitsa6drtxsVpo7vYXXJO%2FXFtJ%2F0Uw9MiuvQY6pgFfOJ6NRBChnScV1gKaBbLnp%2F%2BuCROt4cuHR%2F65Zk1NwyfH2JwyW%2FwaxX4FiknoDEzOUUaywM2%2BUHYqXYadkh0%2BsHA9P%2FtZJ43xsx2PnoRfEjHxH90kgdvOjcKCRJPh%2FREqssUlDL22r3kxKpbEno6JgD2Z4w03peWPK7H%2BCnvxMo4CBwc8mmgiHfFIbcwF8IYgklJP0SAtvaWo2VldmXBqLEiY6YF1&X-Amz-Signature=5df6daccfd977c7b638cd7ae1aa41e6998035311a63fd9896682b69482b9a00a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W43NDAMP%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T003556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsMf2SQPcSzxbKvUfyC9sWEkli%2BtsV5vLrYwTned2wcQIgfhlEmUI3quw63k0qvtSUTogsdCHxi6yZ6RHV7mg%2FPl8qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGVJtGj56v%2FJigY2vircAwNE0Crx%2F381vphgzJ6fFnA%2F4E2ni%2BdHinO2xCOU8R4IOA7qSQgv6cXQK8oUHBl7Kzk8tX9dwkuU2X9XhyAqVWhYbaUlbFCmJc0LZsbJvmFYBAdqjJ6LoxUMZoXn7yIJC5b5yK2LxqB%2FY8YyxEm7aP%2F5XfKh8mo5Z6QpQQohOXG2WcrMSJJO6lfi7YdXPAylepJIjbTppBY%2F1tMybI0CqNjihlm1Cxxc2OLSXsf1O%2FSsN2ny%2BTJd7D0hIHMbk1RW46hATwI08DfP35S85w2reDpEoBU%2FSR%2FS2OKI%2FS5Dxli5SRO9e4QIVERgt9MVxvfALJBUsLGV1VQlk%2FEDjG9%2FF%2Blwos1VyFAG9loAWTqfZuKWn8LzwV4Foy%2Fm5Hc2nTyb070ZVMV2w8iHG1I44ERVhBdBQKNLZZtUtYHbiEqOVj%2Blgeyjuv6XBj2LW8fFnoU4dZ1gCl0ogzwAwMiEGB%2B0gfFgt0G4LhpSYIDeu%2Fur3a5BTdr27pR%2FN4%2F1JHvwX%2Fdm8tw7rE%2FpUW4tK94ykTxR%2FQN82erBa7iw3Lj47bmyz15w84g5JFx2U37bWrZXn14LhWA3jCxntjdxZ7KdoAxDiwNZpkdIphF04uvfPyWHERDSpN8eGKIXQIhGxFsZMLzIrr0GOqUBv0eAvoaMQcEWUgaQM4uS1QK2h%2Bn1My8kMxHYHcQs5dticrIlfd1Lh%2FOClnTehapaOJv%2Bjt49yVdy26wdM8WRyVUldk3YcHsmJYpvIt29di62TRMDDwEEeSkjyTylRz7gJYy8medAlg4YqYyFSG902yn9gTaa%2FGVdMAihSaF0ffTI3BzxqJm4ehHV01aEIxEGb9xIgqW2xWrhUegzE3jF4OMKYE2w&X-Amz-Signature=51b0870866865fabafa0420627e58024477d18f668eba7426fd613f6a17b9855&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JTNON4G%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T003554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHm7LDHMvrOVcezY02VRUro8P8X4gAw5%2BJ6NmBO4ICc%2BAiBn1JJWAQDJl9OvS7jXv%2F2wbU0gk0E6TF6IdjTVyk1ARCqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDFPySbE%2BzAUdSxFEKtwDYpp9AGR7RMhGPQLDVkNCPhVGZp5nj9gMvasy8z6rRL4otKJ20KjHZMePVK0jfjpsM1ehNEE5oZEtc1OD4pf5byYfes%2FdcySsaaNW6XqfK8U4A1zRSSeaxKvfg%2Ft2u2eXl7TV6mAgZM3sqbvsDVJECgkwLRz9dye0Hb1OZ3ywjt8%2BI1KtX1raN0ouD%2BqLsciw41FC%2BDXn18mNfw5zlU0lTcg6qMpWDbVEaVcRXjWvU%2BEButTwXooudzf4JhYHKnHI0hbvMKhrosl5xwDg9We%2BJNdoEqhFutGdkkd0n0sVcPJzcJpLjO9vHfXP3QTi%2FeC3xI6oiNuCWYSPPqiZeDFSLriPJvTn1EJWWgkNhAD%2BZc71QqPcuXxj0yZxnf1559jU78vTPsRVI0bLqDBVsV9mJw%2Fexwwj82R6k%2B83gN8iIJAYGUPdNvcilRZgu75SuXuIumqsYMI60JJbE9EFmnPxeOF3xunCOj5iKD9gffSHi0aFimmL%2BzQWnuljMjcSv62oB5XXLzmNf7l5Fai4qxuHdoDaBhypbRZHCfuwiKnuVbVIBJEmkk8dJXvZfB4IsLybLqTqoJMfmW%2B3bdDuoBk4xBKjbboVECm37IB7SNJu5rRswxfKllPz3NrJancw4siuvQY6pgGaASVeTKSIHZBAxWaUAlMwXvJhGaNIUwugC9WdV83eAr73Mi7inbfFltF79v3fj%2FoQIVTsOZqQW%2FsXBxZTc0sdns6j7YRpj4xKiXwRZgdKZIqPqFhefzrs6Ygc%2BxczPij1GsIpVx8a%2BafPmod87D%2F%2FfR1YexxGI83%2BVFcPw9A2eAEJxoOlDlIAlc5IoNndHJYDK2HVBs0XPotckajcvwTFFyBfMsIr&X-Amz-Signature=3f2676320dddef566596d9863015a37ac076e4d36188acdf76ad4ec717612635&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
