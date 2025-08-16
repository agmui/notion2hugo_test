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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P3LJ335%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIEwOgXuCPUwimiktgn8jEisgzy6uUll5q6B0oYergpbNAiBApkhB%2BBHZGKQZ%2BztHs15571KOUF3aDTxZdgmjP98CHyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM4OQiuBymUVocJFeKKtwDlSFkckBE%2Fand8YBatmIRGDv5BuGUJi5eVVEcDFYQ6hdux4sjVUhoKEGyBYTyZc9GkrJfFauKbhaMTIutpEbgtrGz0CXjTuV3b%2FUSnHpl2Cd6TrewCXPQE6VMUszAlG05SCR42wbFZSnpKgXgGFlVbOBKGE%2BWibUGMg0DCjW526%2B5eTZDNdUw1N0uqXveoQH4sxRZC0UmLcvUDGTovGNg2vRqVpsJsITKQLSKLyxgfQA8cz1%2Fg%2Ffl1n5aqO6l40wwmAKQ6ns8AQgP1wlhQDmnN2i4QZPHsU%2BtOrwU%2FZEJL3oAGmJup%2F66Rrbu7PJAC%2FUPfZj0XKjV5rUNPYTVSn7Ej2DkRQEYmMvZbku%2F0Tep05Grpqvrz4jsG8hJMYRptkMmcu06drRNz3DEjTYtvJpX0GdNoCzu%2BerfCafM7Jd79h4RE3FdljD4K%2F2NoE92Dm3TV3V9Y0himLEEg8xEaJ2L9eiocGwmUVkNNt6JPdjBKU8OI78Pd9DL5v8%2BY7Kbznf2QQ1ST5rC0EG8HfsSEx%2FjYjb9Cqmz4maPwST4oXFiYqn%2BqnYZuvruD%2Fu3GtowZzvXQ%2BQuLbOeRNKFGpPJQcd8K3w8y39UqPeFXU%2B7iu3wCY%2BPI5psS0dMwf8k7IEw%2FveAxQY6pgG%2BBbwark9xnrKGQZoDZB9Lfhoqjqa5Im6zL4YXzeGkMHcivUzNaSkcVvo1veK%2BU6SSPYEOrTgpykyRh30xVh1F4LVv1WJT2v8k4z0ocDsgWftC0h07saM1yrfWBMZ%2B9uIkyAFARgbkUnH5kIk%2FrqPvxo0NbFgh6bO23FbjiNCpKvTycRqk7%2FFGmya9R0GLIb9k1O36kbfSsCodXn3qmff4T%2Fxotjye&X-Amz-Signature=5617a879c141f063cb3487724723a882a54d6bec38e1eb05edd864711e9c6843&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P3LJ335%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIEwOgXuCPUwimiktgn8jEisgzy6uUll5q6B0oYergpbNAiBApkhB%2BBHZGKQZ%2BztHs15571KOUF3aDTxZdgmjP98CHyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM4OQiuBymUVocJFeKKtwDlSFkckBE%2Fand8YBatmIRGDv5BuGUJi5eVVEcDFYQ6hdux4sjVUhoKEGyBYTyZc9GkrJfFauKbhaMTIutpEbgtrGz0CXjTuV3b%2FUSnHpl2Cd6TrewCXPQE6VMUszAlG05SCR42wbFZSnpKgXgGFlVbOBKGE%2BWibUGMg0DCjW526%2B5eTZDNdUw1N0uqXveoQH4sxRZC0UmLcvUDGTovGNg2vRqVpsJsITKQLSKLyxgfQA8cz1%2Fg%2Ffl1n5aqO6l40wwmAKQ6ns8AQgP1wlhQDmnN2i4QZPHsU%2BtOrwU%2FZEJL3oAGmJup%2F66Rrbu7PJAC%2FUPfZj0XKjV5rUNPYTVSn7Ej2DkRQEYmMvZbku%2F0Tep05Grpqvrz4jsG8hJMYRptkMmcu06drRNz3DEjTYtvJpX0GdNoCzu%2BerfCafM7Jd79h4RE3FdljD4K%2F2NoE92Dm3TV3V9Y0himLEEg8xEaJ2L9eiocGwmUVkNNt6JPdjBKU8OI78Pd9DL5v8%2BY7Kbznf2QQ1ST5rC0EG8HfsSEx%2FjYjb9Cqmz4maPwST4oXFiYqn%2BqnYZuvruD%2Fu3GtowZzvXQ%2BQuLbOeRNKFGpPJQcd8K3w8y39UqPeFXU%2B7iu3wCY%2BPI5psS0dMwf8k7IEw%2FveAxQY6pgG%2BBbwark9xnrKGQZoDZB9Lfhoqjqa5Im6zL4YXzeGkMHcivUzNaSkcVvo1veK%2BU6SSPYEOrTgpykyRh30xVh1F4LVv1WJT2v8k4z0ocDsgWftC0h07saM1yrfWBMZ%2B9uIkyAFARgbkUnH5kIk%2FrqPvxo0NbFgh6bO23FbjiNCpKvTycRqk7%2FFGmya9R0GLIb9k1O36kbfSsCodXn3qmff4T%2Fxotjye&X-Amz-Signature=0002284335c1da34c57134df5005a182342937c1eb53a81f50827c6eb077a354&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P3LJ335%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIEwOgXuCPUwimiktgn8jEisgzy6uUll5q6B0oYergpbNAiBApkhB%2BBHZGKQZ%2BztHs15571KOUF3aDTxZdgmjP98CHyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM4OQiuBymUVocJFeKKtwDlSFkckBE%2Fand8YBatmIRGDv5BuGUJi5eVVEcDFYQ6hdux4sjVUhoKEGyBYTyZc9GkrJfFauKbhaMTIutpEbgtrGz0CXjTuV3b%2FUSnHpl2Cd6TrewCXPQE6VMUszAlG05SCR42wbFZSnpKgXgGFlVbOBKGE%2BWibUGMg0DCjW526%2B5eTZDNdUw1N0uqXveoQH4sxRZC0UmLcvUDGTovGNg2vRqVpsJsITKQLSKLyxgfQA8cz1%2Fg%2Ffl1n5aqO6l40wwmAKQ6ns8AQgP1wlhQDmnN2i4QZPHsU%2BtOrwU%2FZEJL3oAGmJup%2F66Rrbu7PJAC%2FUPfZj0XKjV5rUNPYTVSn7Ej2DkRQEYmMvZbku%2F0Tep05Grpqvrz4jsG8hJMYRptkMmcu06drRNz3DEjTYtvJpX0GdNoCzu%2BerfCafM7Jd79h4RE3FdljD4K%2F2NoE92Dm3TV3V9Y0himLEEg8xEaJ2L9eiocGwmUVkNNt6JPdjBKU8OI78Pd9DL5v8%2BY7Kbznf2QQ1ST5rC0EG8HfsSEx%2FjYjb9Cqmz4maPwST4oXFiYqn%2BqnYZuvruD%2Fu3GtowZzvXQ%2BQuLbOeRNKFGpPJQcd8K3w8y39UqPeFXU%2B7iu3wCY%2BPI5psS0dMwf8k7IEw%2FveAxQY6pgG%2BBbwark9xnrKGQZoDZB9Lfhoqjqa5Im6zL4YXzeGkMHcivUzNaSkcVvo1veK%2BU6SSPYEOrTgpykyRh30xVh1F4LVv1WJT2v8k4z0ocDsgWftC0h07saM1yrfWBMZ%2B9uIkyAFARgbkUnH5kIk%2FrqPvxo0NbFgh6bO23FbjiNCpKvTycRqk7%2FFGmya9R0GLIb9k1O36kbfSsCodXn3qmff4T%2Fxotjye&X-Amz-Signature=89144796db700e3c068ad91202ba9e55d55d6bab5fb1bfca22a4681ec243a018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466764JNA6Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDTwuexmnN0VMfX2eWqaLRDNhZckssMH7gRjLV4NkeBBQIgMEl4iJ%2FjgokKH9wG4yyyrtz81IV%2Byp7O%2FY7HTPelLB0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBVlU%2FQOPfzuOrfmlCrcA1GPkj9rqQ1CJ1REf6FgmoiNE6fJnng9fKImNw3kWncyvhfAxkG5%2BwafeLvsp943J9b9H1pFeZTDU73JWj%2ByVpDh%2BLBL0L69lmhLlbr7aQ4IC19y9Mff3owG%2FfmHmvUWQbmbmIGykOwE52I%2FhejqTeYnSCjxtAwXWC9rrdoA3%2BetmvYDiF6nFDTOiezL98V4tQR4%2B1tmKgrDIn0td8gf4tgr3BFBcj7hKpoJRXY%2BAo2nAOTR7y8FY0%2ButqOBudKM44sN7qzcxzUluX75XUGDQAmvw6s8jxaaCFWAlQOP%2BYWCKoRlXnFhPKsxMCDGKIxU53HRnXmI5G%2Bb9gifuLIMZqbqWTaOrVBXfJbjteFRFFWICjhlh9xi8HnfFTiR9ft%2FcMQekOyRFOfqS483IxuamNMy0lS2MAl7gTbYBjyu6oWtsFieHtf22p7wAeBaUq59ALtpzQ%2BLbafF9UxA8YopmKO71UJrPLST1DiOxQKgCdi7AqVsy01FsvUhvn0uXOmkhY0nCK8fGumwLHv0RjUPbvB3ZjDM%2BFDUMy%2Fc%2BQ8sYdg2xOwC77T3F5pshlTs4qkjZ9rRoju4kd8Ol6Y%2FVxZGSd82Y8CAIWhsBlV2jZtNrypUn%2Fde3aQVCx%2B1D04uMKr4gMUGOqUBESky23YHc1JWmXslTQLxZZdgNPoD3Nfq295hMOQh8OqfidI77w9f%2BsIljuKU9UoUvdXmM%2BCCYXH2SVauX50Rs%2FhP2Q73ftpBREmDDZG9YdplMJ1FkqS%2BhE%2Fdr6XKfotkeQffSAaPIrPFMBc8K1pt2cfuu325uNO%2Fu6yz0znE1H9ox0C%2BbK8AKI8lEwFgn5lHO1E0sHu67jp%2FIvAQY6ASu%2FkvgEPz&X-Amz-Signature=9ecfb8e6773f7c39d0010af2232f51b722acfddadd715eb382ecf6b8aefab5db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU3VZMCC%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICtUlUY8yJ1456bpCIgRCKQUoIbIezxKJQ%2BM7DwjyRYMAiEAocisOkYSgmDPArd3hUFUcM23erT2m09S4tav72siBRAq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDLGhDs%2Bg8rWo8osDKSrcAxjScRo35WTiUCMWQlF%2BEGLXrEazKBymX0fdz%2FEr17EMCN9x28n043BWeEbC1ioWXmviszD3e5Uh4wJJuWro61YisYl2OooXYALlSULwa%2FKKPb8cet769UbYWpyTi%2Bpa9j9l%2B%2FVmejLMNMuU0ewOITTHkTHhHaUiCrtQoE8%2B1cnualdqtOsP8ik394vnIua6uRLsznHnUTx6hrvnhOj1r1%2Biyauimq5m3Ea2A6JNBUb6C1MrGXrlkeVtFHaVo6alAslAbTaenTbjPcOnrSzJc4Vv7dEIv%2B74GJQXkOtUN71m0kOM6NV3hJWZNtHBqeU7njMlJukDMyxNcWKTXRwqY9VOFTZWSIN3YsTQDP3qqCsni28l20mtaywLNMcNesoSYrUMAO9jAExtzgIHKVIaHKouehhl3jwxv7ZpEdmfk3aeVeVZUF9NEXHIETdhOPxwESP5pLnX416%2BBgCENYIC1rF9HLSOLFlhnvZf2MP%2B1vWJND1ed72p7JBbcJg1ILY6lrUGJKAJvJawaqOe1RDVViRezctt3EAcKxmEiLoqmEDk5I6FsVFeFA7XKIbmmli8HwOlagaOJfN1EHERxui1lcIth%2Fb0GeCqZI6EvKnUlQyAzTy%2FQ82%2F8SFRY1EvMNf3gMUGOqUBFZXnSdiVwQCs52TIUKjVtJ7nkeJALIFQ9BPB6puf6%2BKCAHkFPd1FMI%2BhnwRzx%2BEFVk3AmyHokiEQc%2BYQ76%2Fk91%2Bd%2BjZHU9iEz%2BtUagg60zZ4IHQUQt03dmslmE%2BRU7dm22huCwBQN6P8V00QHrdK1N1qoftxxvSDiJak1qfKyrz8ShHtZFVNbEuH7QSn3GiqgXX6d5BtwLvL5bccMj%2BtNcXFkutH&X-Amz-Signature=86c43af42ef1fe4f3cfbf8b4351d5b5f9e374d9ca381c0909bc5cd74e1de4bf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P3LJ335%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIEwOgXuCPUwimiktgn8jEisgzy6uUll5q6B0oYergpbNAiBApkhB%2BBHZGKQZ%2BztHs15571KOUF3aDTxZdgmjP98CHyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM4OQiuBymUVocJFeKKtwDlSFkckBE%2Fand8YBatmIRGDv5BuGUJi5eVVEcDFYQ6hdux4sjVUhoKEGyBYTyZc9GkrJfFauKbhaMTIutpEbgtrGz0CXjTuV3b%2FUSnHpl2Cd6TrewCXPQE6VMUszAlG05SCR42wbFZSnpKgXgGFlVbOBKGE%2BWibUGMg0DCjW526%2B5eTZDNdUw1N0uqXveoQH4sxRZC0UmLcvUDGTovGNg2vRqVpsJsITKQLSKLyxgfQA8cz1%2Fg%2Ffl1n5aqO6l40wwmAKQ6ns8AQgP1wlhQDmnN2i4QZPHsU%2BtOrwU%2FZEJL3oAGmJup%2F66Rrbu7PJAC%2FUPfZj0XKjV5rUNPYTVSn7Ej2DkRQEYmMvZbku%2F0Tep05Grpqvrz4jsG8hJMYRptkMmcu06drRNz3DEjTYtvJpX0GdNoCzu%2BerfCafM7Jd79h4RE3FdljD4K%2F2NoE92Dm3TV3V9Y0himLEEg8xEaJ2L9eiocGwmUVkNNt6JPdjBKU8OI78Pd9DL5v8%2BY7Kbznf2QQ1ST5rC0EG8HfsSEx%2FjYjb9Cqmz4maPwST4oXFiYqn%2BqnYZuvruD%2Fu3GtowZzvXQ%2BQuLbOeRNKFGpPJQcd8K3w8y39UqPeFXU%2B7iu3wCY%2BPI5psS0dMwf8k7IEw%2FveAxQY6pgG%2BBbwark9xnrKGQZoDZB9Lfhoqjqa5Im6zL4YXzeGkMHcivUzNaSkcVvo1veK%2BU6SSPYEOrTgpykyRh30xVh1F4LVv1WJT2v8k4z0ocDsgWftC0h07saM1yrfWBMZ%2B9uIkyAFARgbkUnH5kIk%2FrqPvxo0NbFgh6bO23FbjiNCpKvTycRqk7%2FFGmya9R0GLIb9k1O36kbfSsCodXn3qmff4T%2Fxotjye&X-Amz-Signature=5ef3b570dd9ee9e8f4b085392e66bd6c5f7828903bb7b4d84c84ec9921d60fd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
