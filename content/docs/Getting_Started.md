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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EXTD4K6%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T070747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIF2PUIdrUTQxl%2Bavb9ln%2FMeMZISqWUN13UEuSbjAjSveAiAj9lDXnn9283aufqfAlY3n%2BdNrvd3a0MSBc8E8bMCkVCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMFb49fH3kon9MLJ%2FHKtwDtNdaj7g%2BvAheBgMXbS5P3mKAgy7mfhmKb6TzPPz4%2BnmPZf3n%2FcWNnH9Cd7UDa2x62OolLHRm%2FLBga5vf0Ev9IRVK1JR7PK9rv8rJf%2FNFonF7jzsmdrUT0A4jf2rrZAqzCv78UfSlXGn8q2mAY8QvQ%2B%2Bf%2B20yaamhFvebNXPRNe82XvoEgsQCVQZLjHxoA%2FEdtqJIJLsvZJITKnbu2IiSCD6qcb4M2w3zQCXxqU148oEORuwitgloJwNmzyV1GcBTpQJXkd2V7RoRSdu6H6w%2F9t8ZZz4aZM%2FjstsqN3LFoIe4H%2BLqbxHKovWBSaPBtGIVZrDXxdL3ng7qQRsWwFt75NSnHqCWIfJeTsFE%2BLXXhtwphMj8K3yeXuL45k3sOVdEHzIkFLxqe4K%2FnnNK9k4OHEfLEiPoqUFuSL88%2BMctm%2BSAejOVadY%2BjFUEequqCZABpVTSGsTbSN0hEAYYy6j4pfKZd04N%2FCtuvzCjg9fCT9%2BuzEGjkNPyiIjBWRiXxsoQJbTpXMjlPbvjhVDA6Gl2uU9KAU7DNxjCR68f9ZBQJNVhdsKVSc2NqwT1l8qu8lne18WojxivcU%2FMl1cfXSp%2BrKf0Wkp724CWV6QlVgjdMLeE4egwAObwHiZR358w%2Ft6WvQY6pgExnsfeILWrw2gZGsN8c2ODKFRXfMXLz9FVizae8nu%2B7gQTH%2Fj3TyoXQuxOGPgOB04C5%2FxmOPdxFXf2hYrymPOhXmtYi6Z82JdV08RR7arMKMMwfKyByWxU8M9i8giDbZssC9VkX3CkUk1oF0XGXA4fRZG1gkKRGgY5%2FdJSAVRbr2GzASRJj8atK3tFwIa6rdtzgwDx2NBwcNulWN0kZcmZ67i6gB%2B2&X-Amz-Signature=94ae3ee84e35d8703e00d278377e598eb53be79d7ba9fe6bbbfbd3abdf217108&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EXTD4K6%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T070747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIF2PUIdrUTQxl%2Bavb9ln%2FMeMZISqWUN13UEuSbjAjSveAiAj9lDXnn9283aufqfAlY3n%2BdNrvd3a0MSBc8E8bMCkVCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMFb49fH3kon9MLJ%2FHKtwDtNdaj7g%2BvAheBgMXbS5P3mKAgy7mfhmKb6TzPPz4%2BnmPZf3n%2FcWNnH9Cd7UDa2x62OolLHRm%2FLBga5vf0Ev9IRVK1JR7PK9rv8rJf%2FNFonF7jzsmdrUT0A4jf2rrZAqzCv78UfSlXGn8q2mAY8QvQ%2B%2Bf%2B20yaamhFvebNXPRNe82XvoEgsQCVQZLjHxoA%2FEdtqJIJLsvZJITKnbu2IiSCD6qcb4M2w3zQCXxqU148oEORuwitgloJwNmzyV1GcBTpQJXkd2V7RoRSdu6H6w%2F9t8ZZz4aZM%2FjstsqN3LFoIe4H%2BLqbxHKovWBSaPBtGIVZrDXxdL3ng7qQRsWwFt75NSnHqCWIfJeTsFE%2BLXXhtwphMj8K3yeXuL45k3sOVdEHzIkFLxqe4K%2FnnNK9k4OHEfLEiPoqUFuSL88%2BMctm%2BSAejOVadY%2BjFUEequqCZABpVTSGsTbSN0hEAYYy6j4pfKZd04N%2FCtuvzCjg9fCT9%2BuzEGjkNPyiIjBWRiXxsoQJbTpXMjlPbvjhVDA6Gl2uU9KAU7DNxjCR68f9ZBQJNVhdsKVSc2NqwT1l8qu8lne18WojxivcU%2FMl1cfXSp%2BrKf0Wkp724CWV6QlVgjdMLeE4egwAObwHiZR358w%2Ft6WvQY6pgExnsfeILWrw2gZGsN8c2ODKFRXfMXLz9FVizae8nu%2B7gQTH%2Fj3TyoXQuxOGPgOB04C5%2FxmOPdxFXf2hYrymPOhXmtYi6Z82JdV08RR7arMKMMwfKyByWxU8M9i8giDbZssC9VkX3CkUk1oF0XGXA4fRZG1gkKRGgY5%2FdJSAVRbr2GzASRJj8atK3tFwIa6rdtzgwDx2NBwcNulWN0kZcmZ67i6gB%2B2&X-Amz-Signature=c5b54ecde19195d0d931122fe7df9b96996a3222fc8a3bdaa3202d2aa8effec4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HLSFVEV%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T070749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIF3lXF9ocdlvMAKw%2BqUA2vkpEXDOikmW2S4ftUlwP4bjAiApYj2kCqU%2FL18HaZi1PcCWeKZP%2B5FAc%2F6yCv%2BqopE%2B1Sr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMq%2F%2Fhflm48eX1%2Fv1fKtwDL%2FC08%2B7Ha8%2BU35zz0o4ZeNtBdNQ5dLa1HI66oTcH%2FunbNu%2FmfijJcA9ufk0gznHFvsFS7fDTpmPU%2FWW9ojtYRcYdehvU7aDZH1UuVziKDguMUyxtNWSOymsqVP79CM8V9ltCUQDPeN9ACYam3T9PiLuApVs8VPdi5Hc%2Fe%2BPA4BqD1OeASYvxRSmD0eSWTomW%2BPaV9WifFKz0w8%2FZdv9uB6sMBspceDHbM5lBaFNpToEuVoddFp6ghL4hUsOc7kgbE8jPJ%2BCBcw4lcM9Px%2Bwwg%2BTNE63jbG5ekB7UeNAlFK7vcyMr%2BvZIP1WJQrl9NJZx0Fa2aZ3Y28Qam2RVwNo3Ul7Lg7X9tvhOGg4BBF7qHeSWr3Nad%2F8S4F4qMaRSkwakxKoWdMt5TzIMDUHMxJswssaOc5OC9RSlq6muzookfaX7fKGf8pOLbvPQKrPZ0g4bkLk1d457zw2jtjVEhKGn9evhbdPbTwR%2FvbzxULMr553Aa2F1VgUpO6YY3Ug4DUT4iO8mkES0tkF7lE3gCVdYzb%2BWzNGby%2FMz3Xx5q%2B2cj%2Bgug%2B%2BBwKFhLIUZ7jYSXw5BMi5js82pE7vbhRsRCQ3nYOoVVdIEHI%2B24cM5My4OXXxedzd7YLPJlb5okXowvN6WvQY6pgE%2B4QUacT%2FxSFk5ZBD0xF4appHiJVEO6IbOzKYAviC%2BGSmYt%2BNu7RdZrA5NLByMxFqLuFbgqxpMk4vRCv5lZ1GCRrF8TFfMCw%2B2bhjGl76CuFfpi2y7prv9e6IOfrnG40UifTnbfet9qVb2ZV8p%2FjQ0WP0CsP7Dllkr9GF5fj%2BgBj60EFPJc3OFPcKONtjFPJUUPEqrZ00Rk7txIwyQqfSru3OKZLe5&X-Amz-Signature=882fd6e96e993cf49470d260b1b2dc22002233e4cb43cac67e8d3f04b6bff1db&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URNVRRZA%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T070749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIG%2FhN%2FK0dagAEyvUCdWKggV72Dsj05DyIHCfjlTijElrAiBGY5eqLiTfqKZ3wQZi4MhWE%2BJqHIZrN%2BmcLjGU8Q2hHyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMIN8wdoP105MPUf1GKtwDlwEJ42EiDs9kINnsLzW7ERMlN%2FKrwgF9TuQbqwKp4Xydn7fq%2FfiUzF%2FNE7GJpnW6tcxtaRcPw5oz7L%2BuS8J4jZtqNczWX4B8GBbq%2FUOdjXZlG%2FZiNT1CgZ7rJT5QqB1IGfuN6DPr8jLTz2ELcieyGitBQftr3QNVOH61%2BaMH9zv96Gpx2kgtsPDsY3qJ2l6vVp%2Ff2QRD%2BVBrXUKLQX%2BcFSNxM3Rq1nxDf7fAeFKUyDprnu3tb%2Fh5tda3daznNxBhxkRiQo6xzhmcaB09ZR2nUmeU%2FLEHIOX7weRNRNWjMNo2Fa7hDTjH3vxee25Am%2FsQcta7%2B2fxtVtREFWhx8Mq46EyKBgbNw55DMIDGZXEvMjxy45O6rmsvy1v4z%2F5HE8WoCYoo4GTjlySslz%2BD36aeZKrWDabF%2FwHaoaOgLXttYs5O7fc%2FtCNQJ2Inn7DvIvCCmlagOsTTD1llstQwbwZWjPwUIiBFPWontOnvRc4Bqmign5y%2F8%2FFrb5KFViGQFY4s1PnYWSJxHb9l%2BLdkd0nTeUTqIMUL7WBtH5FvHKE9Do6q3DfQDYsjvxJmZsxiXgMjEv%2FBwl%2Fo3r2%2FS71t7jnkxMjayXznYySOXCfgJgjCd64%2FFnDosdHQFS09Kow%2B96WvQY6pgEXBM0bH9LMaI13YY4z%2FrCQL3lz1GFgcNR%2BEcsD%2F1P4pXApf5368klopIjHRoH1ySo9oNbPUSPcEk503zVAODovm%2Fd0gESupLdVQ10F9lwiodTVmXMeaV6EA7Ge5dPM5uFvsatVSFcfgTBj0f0rz6COnk%2BP%2FaRY235Atg6OFDNBAlipdDr5Tx9YkWGSE%2FMng8dEkK29ybGC31Q%2BajBD%2FWi6CGzugaKd&X-Amz-Signature=c27dbf938a4a9af78e14ac43950dff30c3778ac931ac26dafa72f49aff39aaf4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EXTD4K6%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T070747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIF2PUIdrUTQxl%2Bavb9ln%2FMeMZISqWUN13UEuSbjAjSveAiAj9lDXnn9283aufqfAlY3n%2BdNrvd3a0MSBc8E8bMCkVCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMFb49fH3kon9MLJ%2FHKtwDtNdaj7g%2BvAheBgMXbS5P3mKAgy7mfhmKb6TzPPz4%2BnmPZf3n%2FcWNnH9Cd7UDa2x62OolLHRm%2FLBga5vf0Ev9IRVK1JR7PK9rv8rJf%2FNFonF7jzsmdrUT0A4jf2rrZAqzCv78UfSlXGn8q2mAY8QvQ%2B%2Bf%2B20yaamhFvebNXPRNe82XvoEgsQCVQZLjHxoA%2FEdtqJIJLsvZJITKnbu2IiSCD6qcb4M2w3zQCXxqU148oEORuwitgloJwNmzyV1GcBTpQJXkd2V7RoRSdu6H6w%2F9t8ZZz4aZM%2FjstsqN3LFoIe4H%2BLqbxHKovWBSaPBtGIVZrDXxdL3ng7qQRsWwFt75NSnHqCWIfJeTsFE%2BLXXhtwphMj8K3yeXuL45k3sOVdEHzIkFLxqe4K%2FnnNK9k4OHEfLEiPoqUFuSL88%2BMctm%2BSAejOVadY%2BjFUEequqCZABpVTSGsTbSN0hEAYYy6j4pfKZd04N%2FCtuvzCjg9fCT9%2BuzEGjkNPyiIjBWRiXxsoQJbTpXMjlPbvjhVDA6Gl2uU9KAU7DNxjCR68f9ZBQJNVhdsKVSc2NqwT1l8qu8lne18WojxivcU%2FMl1cfXSp%2BrKf0Wkp724CWV6QlVgjdMLeE4egwAObwHiZR358w%2Ft6WvQY6pgExnsfeILWrw2gZGsN8c2ODKFRXfMXLz9FVizae8nu%2B7gQTH%2Fj3TyoXQuxOGPgOB04C5%2FxmOPdxFXf2hYrymPOhXmtYi6Z82JdV08RR7arMKMMwfKyByWxU8M9i8giDbZssC9VkX3CkUk1oF0XGXA4fRZG1gkKRGgY5%2FdJSAVRbr2GzASRJj8atK3tFwIa6rdtzgwDx2NBwcNulWN0kZcmZ67i6gB%2B2&X-Amz-Signature=7ba569340f88e1d65541c3be8fe741e4edcce0b28c155cb716e20fcc7f3cbdf5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
