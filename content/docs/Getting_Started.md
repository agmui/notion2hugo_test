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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDUP3U72%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQD7xdq%2BPsQge%2Fr8MK3HLela67uMrPRRxYJMjZeBuShy3AIhAOYIAQmOzVZThXBzoBYIul77GK%2BB05%2Bio6Ty2Q77M4tQKv8DCGMQABoMNjM3NDIzMTgzODA1IgwffP4UdrTehSpgcw8q3AMjvQoY4tdQ%2Be0GfwmiRtobp8Ae2%2Fh%2F1%2FuDfIDIj%2FZtxQDqRG5RJkrqFfMRZegzSeRmfeEeZnX0Zqff35CHVLuPIGKFVW1rmPKqEI465E5LvAouYf2tJ03QEDqYJZeT%2BA14F0KRteotHW7WTuF%2FBOEkKdV47GzPfmE6Uo8TbDh47i9knqPyyZFumwJQX2d2dBRrYgExmqJ%2B4Bmx2grZXs5VLXzUND0akvSExF9EIrcvxJvFyptr3gaiaEshXwOypoNevaqOklUAFeT8m2VlYHXrSHndV7mxMZProIYiko7hQoWUYvrTqYTEJh7ewsaqPfcs8yBHyFjlCadUGQsr3jolYHFQ22i0KNo9XE2byCp5lXCw0Qeaz4vXl%2BT0okKBThAKSs9UU6LckJJuZT8HUL8l3J%2B1Aar18eocTuyvlWBgJ3EI7kgo2vuNzF%2F43YJUqRc3mWSrRwg5SySvTUwnQcOMZHFpHZhDyexpSg4T%2BaqBa1v1B97%2FdzTug%2FNeRf5uf1XHg7wSKx%2BcSQRe64B9kqNSWwZgWn%2Fj3JJVqsXssO129mAo0yhxLRGCWMDb6JXeu%2FzKZfp2o786qvmJNm4Q7yULE0vyNNYhUk4p38wHkW7gN4J71FeBq6iRZiwyvDCm8arDBjqkAQiKWnmEN70Nvk3nEAV6ynEYLjKDacal0l9%2FDhtTZKf8DaXQteOvfa%2FW4t%2BM4XHQeazsSpT3H6jJQe%2BSRKxVA0rtHZvyW29bjmH9%2BkNuSY1Yv%2BV5rLvO7fvt%2BN0pM8tQOcliVKCLtt3OPtETMJiC3vwKbphZQH%2Fa7PxE1umtN49Ujpgtj2wf2KRpRgUKWwPxkq3kpWpuKLxENnaygjpRvzW4qNzB&X-Amz-Signature=0c20f5b1b75ddf88daa4bf6272c38afc2eaa8853a931e4ad01ec997378739006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDUP3U72%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQD7xdq%2BPsQge%2Fr8MK3HLela67uMrPRRxYJMjZeBuShy3AIhAOYIAQmOzVZThXBzoBYIul77GK%2BB05%2Bio6Ty2Q77M4tQKv8DCGMQABoMNjM3NDIzMTgzODA1IgwffP4UdrTehSpgcw8q3AMjvQoY4tdQ%2Be0GfwmiRtobp8Ae2%2Fh%2F1%2FuDfIDIj%2FZtxQDqRG5RJkrqFfMRZegzSeRmfeEeZnX0Zqff35CHVLuPIGKFVW1rmPKqEI465E5LvAouYf2tJ03QEDqYJZeT%2BA14F0KRteotHW7WTuF%2FBOEkKdV47GzPfmE6Uo8TbDh47i9knqPyyZFumwJQX2d2dBRrYgExmqJ%2B4Bmx2grZXs5VLXzUND0akvSExF9EIrcvxJvFyptr3gaiaEshXwOypoNevaqOklUAFeT8m2VlYHXrSHndV7mxMZProIYiko7hQoWUYvrTqYTEJh7ewsaqPfcs8yBHyFjlCadUGQsr3jolYHFQ22i0KNo9XE2byCp5lXCw0Qeaz4vXl%2BT0okKBThAKSs9UU6LckJJuZT8HUL8l3J%2B1Aar18eocTuyvlWBgJ3EI7kgo2vuNzF%2F43YJUqRc3mWSrRwg5SySvTUwnQcOMZHFpHZhDyexpSg4T%2BaqBa1v1B97%2FdzTug%2FNeRf5uf1XHg7wSKx%2BcSQRe64B9kqNSWwZgWn%2Fj3JJVqsXssO129mAo0yhxLRGCWMDb6JXeu%2FzKZfp2o786qvmJNm4Q7yULE0vyNNYhUk4p38wHkW7gN4J71FeBq6iRZiwyvDCm8arDBjqkAQiKWnmEN70Nvk3nEAV6ynEYLjKDacal0l9%2FDhtTZKf8DaXQteOvfa%2FW4t%2BM4XHQeazsSpT3H6jJQe%2BSRKxVA0rtHZvyW29bjmH9%2BkNuSY1Yv%2BV5rLvO7fvt%2BN0pM8tQOcliVKCLtt3OPtETMJiC3vwKbphZQH%2Fa7PxE1umtN49Ujpgtj2wf2KRpRgUKWwPxkq3kpWpuKLxENnaygjpRvzW4qNzB&X-Amz-Signature=d8abf102eb332b17eaeaaa1d9ca1c987f88f56f6babca2f6ca8e02311f9c585f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDUP3U72%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQD7xdq%2BPsQge%2Fr8MK3HLela67uMrPRRxYJMjZeBuShy3AIhAOYIAQmOzVZThXBzoBYIul77GK%2BB05%2Bio6Ty2Q77M4tQKv8DCGMQABoMNjM3NDIzMTgzODA1IgwffP4UdrTehSpgcw8q3AMjvQoY4tdQ%2Be0GfwmiRtobp8Ae2%2Fh%2F1%2FuDfIDIj%2FZtxQDqRG5RJkrqFfMRZegzSeRmfeEeZnX0Zqff35CHVLuPIGKFVW1rmPKqEI465E5LvAouYf2tJ03QEDqYJZeT%2BA14F0KRteotHW7WTuF%2FBOEkKdV47GzPfmE6Uo8TbDh47i9knqPyyZFumwJQX2d2dBRrYgExmqJ%2B4Bmx2grZXs5VLXzUND0akvSExF9EIrcvxJvFyptr3gaiaEshXwOypoNevaqOklUAFeT8m2VlYHXrSHndV7mxMZProIYiko7hQoWUYvrTqYTEJh7ewsaqPfcs8yBHyFjlCadUGQsr3jolYHFQ22i0KNo9XE2byCp5lXCw0Qeaz4vXl%2BT0okKBThAKSs9UU6LckJJuZT8HUL8l3J%2B1Aar18eocTuyvlWBgJ3EI7kgo2vuNzF%2F43YJUqRc3mWSrRwg5SySvTUwnQcOMZHFpHZhDyexpSg4T%2BaqBa1v1B97%2FdzTug%2FNeRf5uf1XHg7wSKx%2BcSQRe64B9kqNSWwZgWn%2Fj3JJVqsXssO129mAo0yhxLRGCWMDb6JXeu%2FzKZfp2o786qvmJNm4Q7yULE0vyNNYhUk4p38wHkW7gN4J71FeBq6iRZiwyvDCm8arDBjqkAQiKWnmEN70Nvk3nEAV6ynEYLjKDacal0l9%2FDhtTZKf8DaXQteOvfa%2FW4t%2BM4XHQeazsSpT3H6jJQe%2BSRKxVA0rtHZvyW29bjmH9%2BkNuSY1Yv%2BV5rLvO7fvt%2BN0pM8tQOcliVKCLtt3OPtETMJiC3vwKbphZQH%2Fa7PxE1umtN49Ujpgtj2wf2KRpRgUKWwPxkq3kpWpuKLxENnaygjpRvzW4qNzB&X-Amz-Signature=ea07e3a58de39ad488909edde2440bf9ae616f7d1e26d0ba5359bf17b0a192c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZLWJ75Y%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIAMd59B%2BC%2BHVYBBvJw8Qdb2SRAJNbWdM2N7ZwQqFXmUrAiEAx3t4Ke8rB5OnA5E%2F1UuScKcBBaE41SPkwwtp6iIi2esq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCcGG4fFrJsDp5Q62CrcAzHJ0DMKainbNKX1UJvhWJVhUjBhujG9UuVitKgza3T%2BHDthe0V5CbxNF7LZSK3lviBkvzkncGbe6qJSbAzQPeRiiGt%2BGz9Di3wJebz8ruHqAlRYTbGSkwyIZjPj1Iww6mRBJTfM4EhIY20rwl%2FcuBGwLG3eZ4lBMFFnCbes3agyeh4%2FOFXJrwxQDz7c%2BrLeUj5M6spX4da3ceT0bdR98j37tTjmQ%2Bs8eLyCEHDZW8DCJdyIVz68EZZM%2BbWPvimNUxX2BzG4paBtQHfh%2F2rqKcB6YSvjdGbT6LTIguxDBySKqt%2Fhe3p%2BO3jyDDaxSoi%2F2RXiS8%2FG3fwxxsLAn3f9mhwOGTAsmbGUTCHNIII9ppE6ttOfWXxJp137I2i0QDc1zhDUWaBD4lAKB4gvqvoA8vKkA8hzgS9XFTCNLTrUOKaqSDSWYIklglpgWuRsh0MKW%2FR9IFDDYN%2Bik2B37CSxYbx%2FDcoZWEkuRImu9fvswhsYGzBywnXiySeiMsWboS0mMWhqKfmHbAKh810MPpDUH7SkI9IzONpC0syIQypEYNKOHSk%2BoTKyxYHpkuG5QQvsBKRoP3PT0Tg2LDhnJqE2I5VEAFMW%2FQJx68ChKjnoCD6ENityObhAdWaYAOLfMND5qsMGOqUBnvp%2BSamG1kWtTlIqbmzDDYgcMsJ7GmFDXE7NVcs5XNG%2BVJw7gJR3IvIqa94novB3SxQb%2BwpjCclrS%2FJkZ%2F4iMp%2BI5U3Tl2yTNhopqRmpd%2BSow0UjmkwBnIggCEveKzrGQyBjzeUB32oH8pPJhlRgSi23VPScar9msJVKKQKZINRn4Tjl7Xv3SWVlEhzg2%2Bgc2J%2BxF97MPoimW598FYNU%2FTnxDTlY&X-Amz-Signature=5c1be1e1fe7f9594947194c344aa92bb92a7840c678c4eeabafc330868b49c7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BGHFL3R%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIACituNVbrC2FemhkX0goTvJmVkwl0Ul492q%2F5bJ82pKAiEA6ipdvNLna7t1uDvwDN4lfssJku3XJWVOo4jd8cCnQ10q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDP1aUe8Qrw%2B2uBkDCCrcAyLH7tHAd4INBJPKz7NSLyOY0XsuotIx6HaznQW6aw8YiPwh4irMvaVyeZ6AmE8LoXAOQLPSUUfRNapzwU8icEtQ%2BNRBTMKUfpdhcogP9Imztjc9bdHG3NHtAzSmelVgbtzuOj8kSqQctxoUkEP9L4DQBhGTOFGfwMh4vt0jh2mvT%2Br3QX8Y3wpW7zwVkshWLEW5cZ3WAwVYxxI%2Fg8qHCTL73UrnH4fHB%2F%2FX69p2GIvnKqp7pMRljUuRbQYDExfnR39HTDF1%2FJpq5s8hHfUQ0%2FCwyh4yHixpqorCOPoSer1RaaqebodNHips7cuB7HqWG36ZbACiGPtUg%2BgAMM6MHEvJpMIbPdOhqtiqt56b2NgGaCYNFv5xHVsGuJEjYjUk0kQgIAXVzuMRTWFnqIL%2FTdntgIv4qicBQsOFOZC4K3WaE7Z2vkXj9O67Ea0pWGG%2FpPvoPN3D2LiPClxlBsJyBywe3U4euU6JZ9YRkIgxf6qgZQAYezQxEwFeGQNKxt8UtexxF21klofWObI001bqOp%2B%2F8ovC3jVYR0KYTwHG6GWyooTEE7CUmbWEB%2BTfeXcfr6kLb3EyVbWKG9Fzhh9nPmmE4oico%2F1Xn%2F%2By0FnL1c%2FOVMLf8vHqKjtISGM8MKPwqsMGOqUBv5uz1lkEAqhzlL6TBSwXtwbpOtl4eCteoiNPV5k5wXIvAcSliNeA9opXc26bjMQf7t9aK4B2L96qaP4qkBOlICLcEJaXF1sOd4%2BJpTiRu96de7QD2zswwsIyrgcyPu0%2B19Pl4yK%2BRDSjnjmkxsXPjM3CApL%2FLO15X%2FO7ORUR%2BA0kcTfSG10Q2FWxXATKh27kkmEJGh8eVWtABWdW5fgxNqMfNIOA&X-Amz-Signature=b07ad6dac1f1d4a337073d5b71053ce26ff78b7d497935b410c273c6de44cf7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDUP3U72%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQD7xdq%2BPsQge%2Fr8MK3HLela67uMrPRRxYJMjZeBuShy3AIhAOYIAQmOzVZThXBzoBYIul77GK%2BB05%2Bio6Ty2Q77M4tQKv8DCGMQABoMNjM3NDIzMTgzODA1IgwffP4UdrTehSpgcw8q3AMjvQoY4tdQ%2Be0GfwmiRtobp8Ae2%2Fh%2F1%2FuDfIDIj%2FZtxQDqRG5RJkrqFfMRZegzSeRmfeEeZnX0Zqff35CHVLuPIGKFVW1rmPKqEI465E5LvAouYf2tJ03QEDqYJZeT%2BA14F0KRteotHW7WTuF%2FBOEkKdV47GzPfmE6Uo8TbDh47i9knqPyyZFumwJQX2d2dBRrYgExmqJ%2B4Bmx2grZXs5VLXzUND0akvSExF9EIrcvxJvFyptr3gaiaEshXwOypoNevaqOklUAFeT8m2VlYHXrSHndV7mxMZProIYiko7hQoWUYvrTqYTEJh7ewsaqPfcs8yBHyFjlCadUGQsr3jolYHFQ22i0KNo9XE2byCp5lXCw0Qeaz4vXl%2BT0okKBThAKSs9UU6LckJJuZT8HUL8l3J%2B1Aar18eocTuyvlWBgJ3EI7kgo2vuNzF%2F43YJUqRc3mWSrRwg5SySvTUwnQcOMZHFpHZhDyexpSg4T%2BaqBa1v1B97%2FdzTug%2FNeRf5uf1XHg7wSKx%2BcSQRe64B9kqNSWwZgWn%2Fj3JJVqsXssO129mAo0yhxLRGCWMDb6JXeu%2FzKZfp2o786qvmJNm4Q7yULE0vyNNYhUk4p38wHkW7gN4J71FeBq6iRZiwyvDCm8arDBjqkAQiKWnmEN70Nvk3nEAV6ynEYLjKDacal0l9%2FDhtTZKf8DaXQteOvfa%2FW4t%2BM4XHQeazsSpT3H6jJQe%2BSRKxVA0rtHZvyW29bjmH9%2BkNuSY1Yv%2BV5rLvO7fvt%2BN0pM8tQOcliVKCLtt3OPtETMJiC3vwKbphZQH%2Fa7PxE1umtN49Ujpgtj2wf2KRpRgUKWwPxkq3kpWpuKLxENnaygjpRvzW4qNzB&X-Amz-Signature=246c5491b0894ed819459c34467648ccdd14c6a9d3e51616aa87d6d976fbe3c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
