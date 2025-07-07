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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BSVY4TX%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCiRDgiXa1XjEfoAsqeNgprf4jl%2FHsvgAWmveyzj8EmdwIhAJ6PeNI4001DKBAZ6JYQcLnJ8%2Bo5ZclUGLGdNkJx%2BJbzKv8DCH0QABoMNjM3NDIzMTgzODA1IgxFIPSGa7nj%2Bsc%2FjFgq3AOF5QMy7U2K%2FH16KjXex2kquZ1pnf3OFVdZdX2XZ7Q3PIJ66dbJly0TfRcEM9sxpiyFhcfTKri7rcZh6J7cjooROkXh1uoxIEC8Fbxj%2FvKJkzBE4Vo8pdFUgUhskJwziA30nLqLM4jX%2FB%2BH1R2Ad3LocLP3%2BCMcQRltDc%2FJDTjY2ARACnTW1gg3FP1WAY77i2OC6ZeI1wRsOyZKulV2eFR5CYxH13QGWkmRFBlHkrw0e7u8%2FpqToWKehDncb6FIi222OEIZTnqzXEXXWipTR9FTF9QdlrN4fphqQz75hOLzIclJfA69ZHWNIKZyYX%2B2%2BFpEHYovVW7EFrp4%2FaM%2BYSlvVQPSOm2nBSOEsSmwWwsTIvSiv0yRlOLgszQlpXlVGnA0zlB3wz3DigGjERz2rbVvoV6GsQXNMqnS%2B8BBD3YoR3fUkc%2F2Gi%2F9Q7JrwyIIROkMakvq4iQrz3EhjW4UN2MG8Xwu99x9H0I2O25cA3QVprZsnTmvRShoGvv1rNYv9H0NyImMp8OH48JyUkSd7V6YhrdYgOiSEptkeBvo4R3QvGR08NF1qWMX6C%2F0zwTgDPn0i50pQSI%2F19qYJJ3MwZ%2BPh7w9VPzA%2Bze083VJAJm3pZ40YGx0lPTg%2B3zH2TCavrDDBjqkAVKlk5OWcobK4hsUTUABrZQU7%2BVE0dzMzNBuvWhQL7dMYf1vdsxvW7LmsxhwGryOytYBstP5x6RRR6m6G8v7sUwymDbctsdNsElHKwIiA7GeTYgPibHdGY7dqJ%2F%2BXCWdQT9EFNDlWklQ7i8O%2BsLUirs8Gra%2B0Qg5yPM%2FVxH6bzm9KwliZwPSvox9JdjzO1XOb7rKbFF9AX%2B6%2F32Y9cBn3jDt9Kuq&X-Amz-Signature=5ecf5e175eee21c56e49b69111f598d29bb4c30337981834b4c6d4bcad45186d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BSVY4TX%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCiRDgiXa1XjEfoAsqeNgprf4jl%2FHsvgAWmveyzj8EmdwIhAJ6PeNI4001DKBAZ6JYQcLnJ8%2Bo5ZclUGLGdNkJx%2BJbzKv8DCH0QABoMNjM3NDIzMTgzODA1IgxFIPSGa7nj%2Bsc%2FjFgq3AOF5QMy7U2K%2FH16KjXex2kquZ1pnf3OFVdZdX2XZ7Q3PIJ66dbJly0TfRcEM9sxpiyFhcfTKri7rcZh6J7cjooROkXh1uoxIEC8Fbxj%2FvKJkzBE4Vo8pdFUgUhskJwziA30nLqLM4jX%2FB%2BH1R2Ad3LocLP3%2BCMcQRltDc%2FJDTjY2ARACnTW1gg3FP1WAY77i2OC6ZeI1wRsOyZKulV2eFR5CYxH13QGWkmRFBlHkrw0e7u8%2FpqToWKehDncb6FIi222OEIZTnqzXEXXWipTR9FTF9QdlrN4fphqQz75hOLzIclJfA69ZHWNIKZyYX%2B2%2BFpEHYovVW7EFrp4%2FaM%2BYSlvVQPSOm2nBSOEsSmwWwsTIvSiv0yRlOLgszQlpXlVGnA0zlB3wz3DigGjERz2rbVvoV6GsQXNMqnS%2B8BBD3YoR3fUkc%2F2Gi%2F9Q7JrwyIIROkMakvq4iQrz3EhjW4UN2MG8Xwu99x9H0I2O25cA3QVprZsnTmvRShoGvv1rNYv9H0NyImMp8OH48JyUkSd7V6YhrdYgOiSEptkeBvo4R3QvGR08NF1qWMX6C%2F0zwTgDPn0i50pQSI%2F19qYJJ3MwZ%2BPh7w9VPzA%2Bze083VJAJm3pZ40YGx0lPTg%2B3zH2TCavrDDBjqkAVKlk5OWcobK4hsUTUABrZQU7%2BVE0dzMzNBuvWhQL7dMYf1vdsxvW7LmsxhwGryOytYBstP5x6RRR6m6G8v7sUwymDbctsdNsElHKwIiA7GeTYgPibHdGY7dqJ%2F%2BXCWdQT9EFNDlWklQ7i8O%2BsLUirs8Gra%2B0Qg5yPM%2FVxH6bzm9KwliZwPSvox9JdjzO1XOb7rKbFF9AX%2B6%2F32Y9cBn3jDt9Kuq&X-Amz-Signature=05613f2663caea41d48d4a3caeb645044bc386c940c5de84062b2a56f6a98cdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BSVY4TX%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCiRDgiXa1XjEfoAsqeNgprf4jl%2FHsvgAWmveyzj8EmdwIhAJ6PeNI4001DKBAZ6JYQcLnJ8%2Bo5ZclUGLGdNkJx%2BJbzKv8DCH0QABoMNjM3NDIzMTgzODA1IgxFIPSGa7nj%2Bsc%2FjFgq3AOF5QMy7U2K%2FH16KjXex2kquZ1pnf3OFVdZdX2XZ7Q3PIJ66dbJly0TfRcEM9sxpiyFhcfTKri7rcZh6J7cjooROkXh1uoxIEC8Fbxj%2FvKJkzBE4Vo8pdFUgUhskJwziA30nLqLM4jX%2FB%2BH1R2Ad3LocLP3%2BCMcQRltDc%2FJDTjY2ARACnTW1gg3FP1WAY77i2OC6ZeI1wRsOyZKulV2eFR5CYxH13QGWkmRFBlHkrw0e7u8%2FpqToWKehDncb6FIi222OEIZTnqzXEXXWipTR9FTF9QdlrN4fphqQz75hOLzIclJfA69ZHWNIKZyYX%2B2%2BFpEHYovVW7EFrp4%2FaM%2BYSlvVQPSOm2nBSOEsSmwWwsTIvSiv0yRlOLgszQlpXlVGnA0zlB3wz3DigGjERz2rbVvoV6GsQXNMqnS%2B8BBD3YoR3fUkc%2F2Gi%2F9Q7JrwyIIROkMakvq4iQrz3EhjW4UN2MG8Xwu99x9H0I2O25cA3QVprZsnTmvRShoGvv1rNYv9H0NyImMp8OH48JyUkSd7V6YhrdYgOiSEptkeBvo4R3QvGR08NF1qWMX6C%2F0zwTgDPn0i50pQSI%2F19qYJJ3MwZ%2BPh7w9VPzA%2Bze083VJAJm3pZ40YGx0lPTg%2B3zH2TCavrDDBjqkAVKlk5OWcobK4hsUTUABrZQU7%2BVE0dzMzNBuvWhQL7dMYf1vdsxvW7LmsxhwGryOytYBstP5x6RRR6m6G8v7sUwymDbctsdNsElHKwIiA7GeTYgPibHdGY7dqJ%2F%2BXCWdQT9EFNDlWklQ7i8O%2BsLUirs8Gra%2B0Qg5yPM%2FVxH6bzm9KwliZwPSvox9JdjzO1XOb7rKbFF9AX%2B6%2F32Y9cBn3jDt9Kuq&X-Amz-Signature=953954ac298e7b1a620ef7b8aed8427a9af46e47a78c90b77e62e6765f4534fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLV5AIX4%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCYkOESABjKI%2Bd4xtkfVpaGHCQpQyQunqc%2FreAMj1vt8gIgXG7hWKw1fny%2FiS0w1YI%2B8SaQ3KT6Z%2FlQDd2FyMDyLXMq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDDWxyY2Wj95QDpK8aSrcA7iA5eAhS5p9yq0bkUCF8JTZKjYkSQaDqiTf4%2Bv19GzNfpWTTinj8M6nK4kVH8rlS80kDp7QB8HJWHIlO%2F%2BKWIgGl8Xg2HPxesOD7AURrwvgl%2BjDtvXEv3TlBgNnCClY1bVsXSvV4eDIYp%2B14L5g4be06hxKfHgEfyhApqUE%2F%2B75fCagI0BiFMjaPGkiV4gSfOeTC%2FYHd0ZWiZR2hvifcHooXxsBUo2K650SDcCgELjV%2BFw4qVPi7jEP7ddpT1MmRmUG1J28X%2FXLNbHtU0%2FGmuG7psDFcJiwHDCd7NTtKPnRop2Nc6qj4MZ%2FYQlLBV29j6qlzrzuEnNvSg5OrJ8Mj7cLV%2B5jM%2BEYGqrvtRpqTNE%2BvUtTHTUNxBuftOHhfS1vtXZcsK%2FygacCTnCvHIcgPesImTWiOtI4f7mP8Kqz3aJ0X%2BmXT1RujPdmVUcGDQtTuaonapuw%2BdTi3Z5t8ML1XeDy4osi3LDAfBlEZeC3PNOwm70JdEXD%2FPS8jWR8DuHmgzxkRUxliWEs83nE%2Bc6H60%2FLgcfLJE8cwhurlFGL01syPyS8WGWSTUREyIauuvqc8np6ThHCRf6A6RkIeWbM5XPi11tYeXNc1H5y5yooq9Bmj7ezOuatqneJ3Y%2FVMMG%2BsMMGOqUB1FqQIk7Ejy5zYthVU%2B0G9%2F%2BOYfhY6HFUUNCbUGRZ0%2FEOF3U0%2BnKYYrSrew7fqYIDOWlncYLCqQfyHh5DrnD4lh4dz2HWZpHYlsHmYjf3MCgjk74Y3vy8ybiXpU79KCj3rsR%2BMjiC8Qsh1SbtkCxC2ECwWyYcv4NJZkCZBcr0d%2BT%2B3RV8FHtC38E6OXrtu1DE555CJDoiQ%2BmqPMP3sK1x%2FGYwEL0v&X-Amz-Signature=7e943aee1af8acf0d7a1ee8d4de9af5578907a74c423d9856558bac2322bcaa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V7DOTX5%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T201007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCTQWuGkcDe2Dz7vJj7KirgB%2FUmidzXYFFsiVG2lHajVwIhAO8oEnpovvQgHCldrUthuljuapnIiomCqNfepBz8tGPpKv8DCHwQABoMNjM3NDIzMTgzODA1Igxyf6jvB9fDVO6dWLoq3AOxUIHZFYMGGkGxPZCAq4qEksmPNwWwl6NRBSkDLDa5ckPKSdBX6SM9%2BOrGN9qT1Pq2MzMbmHWfERiDHcOq0LoymD0HPpqgaOGhe42tqnLiUZh4mZ18n8h3n161ZRNKcctpbMuScTs%2F3nfjgnGUgLWCNI2NqKVLaAPCMfoZTAFEIJbaheygNtogEK6WlikfMeH8eSONtE%2Bfjy4XTnnYOzJ83avF4K6ups%2BRZkupNzvZ9DKxztN7uuBk%2BsYhcIhdJv5AQD8v%2Fno9NlbWP9ciBKryXWJ6iqZwQESDTOg8hgcVC2Asavt4owi5iYSmdngDsGK15hXYSnzGYWydkvLbDW850pP%2FWpxwQWVdIuzzfynpsccQPE7kenMi9iKng2wiqNXbKoj8iI4ReYoE%2FPqXatx6xF%2BniivkHNRoVp9eoL5%2BsEIo3apt%2FCXiINLwMdE6OaCeVTI7JDq0Caz5KTo55ZiSpMvP5xgA3c%2FOfJ0iGzNdhDMJcBZ%2FqGuZ3nm%2Fcgpn0NkQHDvDLeOJH%2FCCWOkpK2SLGFnVDoUHpA3O4GN5iVPV2tWAicjxiLhbGpoA6BnQ1BQ0YNJCcZ7PLUFAZ5xUGhyJiFcwtTr7chLeR6wJsv5%2F7zSqit7fN9z96NRwTzDyvbDDBjqkAQQhfFQwmf2vGsR5ez%2F1ys%2BLX2FvhaSu%2F55OnWt955VMa1kt4tj8Q57j58DfPkqRsVBIs%2FsjdvAa0ogr0zhLqOuFqBXNowWRqc9AyoC658nv7K2iFyyl5RUMlRVR2ySj8dLu%2FkyHxOHHthsEmM36z%2B0ff5cwicR9KX4%2BbshMC9xMzrmVqRwb0ixTLkCl4fl7rpcsp3PfCFrmjentfbg3%2BkRbNnoZ&X-Amz-Signature=f6e5bb7829f0a4bde5a3e2b31b454fc90600f7decc914bee499e1e4713599cd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BSVY4TX%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCiRDgiXa1XjEfoAsqeNgprf4jl%2FHsvgAWmveyzj8EmdwIhAJ6PeNI4001DKBAZ6JYQcLnJ8%2Bo5ZclUGLGdNkJx%2BJbzKv8DCH0QABoMNjM3NDIzMTgzODA1IgxFIPSGa7nj%2Bsc%2FjFgq3AOF5QMy7U2K%2FH16KjXex2kquZ1pnf3OFVdZdX2XZ7Q3PIJ66dbJly0TfRcEM9sxpiyFhcfTKri7rcZh6J7cjooROkXh1uoxIEC8Fbxj%2FvKJkzBE4Vo8pdFUgUhskJwziA30nLqLM4jX%2FB%2BH1R2Ad3LocLP3%2BCMcQRltDc%2FJDTjY2ARACnTW1gg3FP1WAY77i2OC6ZeI1wRsOyZKulV2eFR5CYxH13QGWkmRFBlHkrw0e7u8%2FpqToWKehDncb6FIi222OEIZTnqzXEXXWipTR9FTF9QdlrN4fphqQz75hOLzIclJfA69ZHWNIKZyYX%2B2%2BFpEHYovVW7EFrp4%2FaM%2BYSlvVQPSOm2nBSOEsSmwWwsTIvSiv0yRlOLgszQlpXlVGnA0zlB3wz3DigGjERz2rbVvoV6GsQXNMqnS%2B8BBD3YoR3fUkc%2F2Gi%2F9Q7JrwyIIROkMakvq4iQrz3EhjW4UN2MG8Xwu99x9H0I2O25cA3QVprZsnTmvRShoGvv1rNYv9H0NyImMp8OH48JyUkSd7V6YhrdYgOiSEptkeBvo4R3QvGR08NF1qWMX6C%2F0zwTgDPn0i50pQSI%2F19qYJJ3MwZ%2BPh7w9VPzA%2Bze083VJAJm3pZ40YGx0lPTg%2B3zH2TCavrDDBjqkAVKlk5OWcobK4hsUTUABrZQU7%2BVE0dzMzNBuvWhQL7dMYf1vdsxvW7LmsxhwGryOytYBstP5x6RRR6m6G8v7sUwymDbctsdNsElHKwIiA7GeTYgPibHdGY7dqJ%2F%2BXCWdQT9EFNDlWklQ7i8O%2BsLUirs8Gra%2B0Qg5yPM%2FVxH6bzm9KwliZwPSvox9JdjzO1XOb7rKbFF9AX%2B6%2F32Y9cBn3jDt9Kuq&X-Amz-Signature=edf884ddf8e3f22cdb64667fe64f1411b68cb9a8447276ff0696fde58701c239&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
