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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTDFUKT3%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T181211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQC3oOver2US5F%2F7nYHYrx1XF0Lc5xqcZokoyErzeATtjwIhAKmxAxZbeQQyiekpY%2BryXISU7pm1lzPdHOlh8%2BhpCR85KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJvQi0iIlzMrfchUQq3AN0qGV5rqtWGe7AqU2PWxC9udoe8lyNya9liNLRMK2nDqIuezkVKJGor97ynudCQZS4golkt3IBQu8pJsXDBuaRB0UJzy8MpDgtMC9fATd9T9jmSQZAAQW8eiIVaGZFlilkAeapPYfihnGr602nHlzRfgPDQSTRlfceSV5%2F06JHJ%2FbYtfnDQWM4noWO80biTXE8mlDsT2VaXsavy0xzd5uqkO%2BCjvXOOYIPXF3O71C9hV0hgKiqE5D%2Bw1XRNYVx9z3qhfr5knn4a6eY2IuIL3JDWlCDacGXCKtYygfLYWYYAtW0pi6ivhRr2YejXXsVvUOgAWv5TSLrQvb4GxHI0S1iN%2BzDBCGy1EMhJxnndozEAcp4icUmGR%2BNwdFXDXfF52%2BG7g4T5KRQRDUqZgzqkzOd9s4D1mIWgLPmQFeTpBgeRE4zn5JYIkeoAonlcGgNVHScfJTe1KJCWptYS8WIoUb9pKDrraxOxqxDo%2Bp%2FuPI8pnJx0fVH0dxGgVervrlI92Esp8ehfx2cJXpc8LCZ5Ba%2FVBjzJuLCsl8ylQxQf4ZMpsa%2Bqn0hxnRMc%2F%2BmxCURmeyeIN45nadY%2BkiP%2F4S5WaqOssmXGgP3DGquKCnOh5J%2FKtP%2B773dMENI5ZX5OjCl6abCBjqkAXu6OCYJW%2BeIuOisVZXyVmEmz5TPQBSXOfBAjHGLY6pBfkILM4uKzMLD4CemvsM8VkqQDvVqZOxoITf2jiVc6t0Bq0tvC3UXXVXl3oLxM2pebJjGXsqJIbPL8A%2Fbd5aV7WJnQwcnrzEU%2B%2F4LBFADez5BhWg4ZCNXiB9XabsBewWucnQXvUZDYMRR3Y6fltROEYfT7tTTtfOZmNl2xumpFbsef3T8&X-Amz-Signature=3641fa2dabe8ceea89d8b494b6386e6e17cedb72900cb107d926ad67f944b009&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTDFUKT3%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T181211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQC3oOver2US5F%2F7nYHYrx1XF0Lc5xqcZokoyErzeATtjwIhAKmxAxZbeQQyiekpY%2BryXISU7pm1lzPdHOlh8%2BhpCR85KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJvQi0iIlzMrfchUQq3AN0qGV5rqtWGe7AqU2PWxC9udoe8lyNya9liNLRMK2nDqIuezkVKJGor97ynudCQZS4golkt3IBQu8pJsXDBuaRB0UJzy8MpDgtMC9fATd9T9jmSQZAAQW8eiIVaGZFlilkAeapPYfihnGr602nHlzRfgPDQSTRlfceSV5%2F06JHJ%2FbYtfnDQWM4noWO80biTXE8mlDsT2VaXsavy0xzd5uqkO%2BCjvXOOYIPXF3O71C9hV0hgKiqE5D%2Bw1XRNYVx9z3qhfr5knn4a6eY2IuIL3JDWlCDacGXCKtYygfLYWYYAtW0pi6ivhRr2YejXXsVvUOgAWv5TSLrQvb4GxHI0S1iN%2BzDBCGy1EMhJxnndozEAcp4icUmGR%2BNwdFXDXfF52%2BG7g4T5KRQRDUqZgzqkzOd9s4D1mIWgLPmQFeTpBgeRE4zn5JYIkeoAonlcGgNVHScfJTe1KJCWptYS8WIoUb9pKDrraxOxqxDo%2Bp%2FuPI8pnJx0fVH0dxGgVervrlI92Esp8ehfx2cJXpc8LCZ5Ba%2FVBjzJuLCsl8ylQxQf4ZMpsa%2Bqn0hxnRMc%2F%2BmxCURmeyeIN45nadY%2BkiP%2F4S5WaqOssmXGgP3DGquKCnOh5J%2FKtP%2B773dMENI5ZX5OjCl6abCBjqkAXu6OCYJW%2BeIuOisVZXyVmEmz5TPQBSXOfBAjHGLY6pBfkILM4uKzMLD4CemvsM8VkqQDvVqZOxoITf2jiVc6t0Bq0tvC3UXXVXl3oLxM2pebJjGXsqJIbPL8A%2Fbd5aV7WJnQwcnrzEU%2B%2F4LBFADez5BhWg4ZCNXiB9XabsBewWucnQXvUZDYMRR3Y6fltROEYfT7tTTtfOZmNl2xumpFbsef3T8&X-Amz-Signature=28ea5485aedac66c3daf7a2f1a090dc1fb9accd18542a7ed6a7faf2e81946eba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTDFUKT3%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T181211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQC3oOver2US5F%2F7nYHYrx1XF0Lc5xqcZokoyErzeATtjwIhAKmxAxZbeQQyiekpY%2BryXISU7pm1lzPdHOlh8%2BhpCR85KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJvQi0iIlzMrfchUQq3AN0qGV5rqtWGe7AqU2PWxC9udoe8lyNya9liNLRMK2nDqIuezkVKJGor97ynudCQZS4golkt3IBQu8pJsXDBuaRB0UJzy8MpDgtMC9fATd9T9jmSQZAAQW8eiIVaGZFlilkAeapPYfihnGr602nHlzRfgPDQSTRlfceSV5%2F06JHJ%2FbYtfnDQWM4noWO80biTXE8mlDsT2VaXsavy0xzd5uqkO%2BCjvXOOYIPXF3O71C9hV0hgKiqE5D%2Bw1XRNYVx9z3qhfr5knn4a6eY2IuIL3JDWlCDacGXCKtYygfLYWYYAtW0pi6ivhRr2YejXXsVvUOgAWv5TSLrQvb4GxHI0S1iN%2BzDBCGy1EMhJxnndozEAcp4icUmGR%2BNwdFXDXfF52%2BG7g4T5KRQRDUqZgzqkzOd9s4D1mIWgLPmQFeTpBgeRE4zn5JYIkeoAonlcGgNVHScfJTe1KJCWptYS8WIoUb9pKDrraxOxqxDo%2Bp%2FuPI8pnJx0fVH0dxGgVervrlI92Esp8ehfx2cJXpc8LCZ5Ba%2FVBjzJuLCsl8ylQxQf4ZMpsa%2Bqn0hxnRMc%2F%2BmxCURmeyeIN45nadY%2BkiP%2F4S5WaqOssmXGgP3DGquKCnOh5J%2FKtP%2B773dMENI5ZX5OjCl6abCBjqkAXu6OCYJW%2BeIuOisVZXyVmEmz5TPQBSXOfBAjHGLY6pBfkILM4uKzMLD4CemvsM8VkqQDvVqZOxoITf2jiVc6t0Bq0tvC3UXXVXl3oLxM2pebJjGXsqJIbPL8A%2Fbd5aV7WJnQwcnrzEU%2B%2F4LBFADez5BhWg4ZCNXiB9XabsBewWucnQXvUZDYMRR3Y6fltROEYfT7tTTtfOZmNl2xumpFbsef3T8&X-Amz-Signature=e62bfc9c18247805f03d8f8a790b760fee04561bb4bd7701fcc9959857e74fcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBVKZYKT%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T181216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDUkPgy2rH0KuULExgvoqvnT9FtdEKsi4WCbRaqGLkBJgIgXTZAoUdZBP3cv9Ptk0hYSzimMPlotBk5h1X9IFpqfhgqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUEbQ7bpeygkhw7LCrcA%2BVvbEAGNu%2FqLtek%2BCkicFv8oVisCkHRERymQfYIAE6MjMagDvOLiz%2BwV2166xAThlvp5XG07ROXR3iW4a%2BwHhVsqHcPTgXu4pm960EDIVy9d0v%2FlrvBQB0paJZ1QQKN%2BvuVpxJNg65%2Bknhqb1nUFPpGVGBF0w3wIROSoa5QoHzT%2BBNMdfwVkIduKWUr1milD7rgQOaLJL1%2BrGJL18CPgyD6nAEggxNcNgPW9XEoBTUJYyTf1fUTv82FchKr%2FKARFt9qOrU94Xw34qtxSJ4BwpRzETEd1EP2Ux7U%2Fr1UCNO5ETbJR3q2rTSj7Y7XcWCJ57m9vrFc8%2F%2BRCrNgcOeUyCGE%2FJEkgR%2BQqdAtWqUt4ZEgTPDtyj2TTSVS%2BGNB%2BRryv5ou60Nyf2mr4CaoqjhKaiKqY38YOYmKPQZHjBGG6yZFHFc1eIkry7L1XCc2VK9ifwJJY2acUHHZz2JaOvM8fgwZoOePz1mXVxP6mxrvIQ%2Fr0rL7RPXEDRtpPUurBBFcJj%2BCWOVl4u8c8RPUaPCyxlQWYWJ6kzbA%2Btx4t4ekbj7gsaxAkjFOyIlZPg7x52q%2Fkhr0Q1D5RzBLJyq79hXtrzHGFMl%2FQrpkeU0Td5Qi%2FwnDicXy1upMp49QuOTUMP7npsIGOqUBxU5czXCz5Joh7plVWNkk8kfndjFD4IjI1hT37yU%2BvW7cfonGGbYWStz7SokSOG6z4%2Ffz6hrzqzzNVs3Tjnp1mp1L52KKAcauyKMmhrJvYwWBQGxIVGAo8vuPU1T8euwcyiPrfIUqPX8woX47v%2BJbLzPifo%2Bb%2F0XLzFItoYP9LCqS5GlmntIIBVAZY5YbOSnwzM%2FP59WfvbT1525N7Ry4HUwzoc4%2F&X-Amz-Signature=2e443c1c763d8e30c643fc1f9c224e4108e65c811e422aaf2eec2f552eb79bf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAVQDJCN%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDF1ktwSC7c1GoKVGYtYHt327UF70Mi0nTNy2zpQeU%2BDQIgGxlAEjuIvWfr6Bok3AU16biGIvjGwS1rXwKr7bHZFCUqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlpUOEC8OWEe0b0ySrcAxWEMi5Y1wcCP7zaZ%2BM9YHNz06ENqtmsfxEXbRAGg9w%2FXrdARpDJEO5NUmodV%2Br4TsNCpJ37DJ4sKhjrjxmwHaPlSNqbj%2FC%2BkBq4PZbCRZ21TOJkUoHJsJHcOpXgwBWS64jrlp6BIxYZ8WOTG4jPa5UcsUKdiuLbeSpmLOlHCh9jhB3nsrnG5sQ%2BnSAJ8B6ufsMdkJHBNBg8B2Jo4l9McIofRkmOyC49HBUq9ryigwD4d%2BJOfMz8wU6f5SABt4UWaz644ANoh5vpDeUe8pFfgKh%2B7QVEnWOT6FDb1Zjrb5p%2F1I55tpl%2BxD2hJpaCuKRZDlYn21h0J5mNht1JGbR%2FCIH%2FtAK11XqTIXdWyJnNUZhEcFzz%2B7jXeoc8ZkckTJ6FOmd0NIDpoBn634xvk15ydjJea0CZMibL79lG2p%2BJqvbQAuBt71N7jrUoAhKJGQzZDrndlAPbE83CizYuE50e%2FWoatDQmS9gCgpEHS9DSHQoxMnDuKdgRyH9R7%2FiiYiYs4%2FUeEIOqEAHyscqQbAlGMeW2K1sYCvQOGMxnzcQSui3bL9SnjSzIKPumwSPC3Bxk5d41TX%2FP6kSJF4xLWKaBQKfvsjJDRxf0m5dAPLSAK8wl4f%2FMArQR5JHJFhFRMMjopsIGOqUBQVYxY7ym2lzCfLKeuC2gvfj7zgkots71u9JEHQ%2BEZ9QQPqlkVY%2FYGDPTPUPgejWW5b4bEu9baXrBSM9S%2B8ygntNkZMn%2BCuPZkrbp2zUQ7aVw3tI5Dw5aGHbgR%2BJEBBKkWozxuaPh%2BCrCpRjy86jatrU9YJyaStBS0fwqn%2Ff6VhSB9KJEymVpLCq97SOwxExdA7Gfsu2QYs1DVbzUxIH3PojSUpsm&X-Amz-Signature=79c05d459c5e2015c6efb3c837d4ac6d0cdbc64d1fd438018d45ccdf2255272a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTDFUKT3%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T181211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQC3oOver2US5F%2F7nYHYrx1XF0Lc5xqcZokoyErzeATtjwIhAKmxAxZbeQQyiekpY%2BryXISU7pm1lzPdHOlh8%2BhpCR85KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJvQi0iIlzMrfchUQq3AN0qGV5rqtWGe7AqU2PWxC9udoe8lyNya9liNLRMK2nDqIuezkVKJGor97ynudCQZS4golkt3IBQu8pJsXDBuaRB0UJzy8MpDgtMC9fATd9T9jmSQZAAQW8eiIVaGZFlilkAeapPYfihnGr602nHlzRfgPDQSTRlfceSV5%2F06JHJ%2FbYtfnDQWM4noWO80biTXE8mlDsT2VaXsavy0xzd5uqkO%2BCjvXOOYIPXF3O71C9hV0hgKiqE5D%2Bw1XRNYVx9z3qhfr5knn4a6eY2IuIL3JDWlCDacGXCKtYygfLYWYYAtW0pi6ivhRr2YejXXsVvUOgAWv5TSLrQvb4GxHI0S1iN%2BzDBCGy1EMhJxnndozEAcp4icUmGR%2BNwdFXDXfF52%2BG7g4T5KRQRDUqZgzqkzOd9s4D1mIWgLPmQFeTpBgeRE4zn5JYIkeoAonlcGgNVHScfJTe1KJCWptYS8WIoUb9pKDrraxOxqxDo%2Bp%2FuPI8pnJx0fVH0dxGgVervrlI92Esp8ehfx2cJXpc8LCZ5Ba%2FVBjzJuLCsl8ylQxQf4ZMpsa%2Bqn0hxnRMc%2F%2BmxCURmeyeIN45nadY%2BkiP%2F4S5WaqOssmXGgP3DGquKCnOh5J%2FKtP%2B773dMENI5ZX5OjCl6abCBjqkAXu6OCYJW%2BeIuOisVZXyVmEmz5TPQBSXOfBAjHGLY6pBfkILM4uKzMLD4CemvsM8VkqQDvVqZOxoITf2jiVc6t0Bq0tvC3UXXVXl3oLxM2pebJjGXsqJIbPL8A%2Fbd5aV7WJnQwcnrzEU%2B%2F4LBFADez5BhWg4ZCNXiB9XabsBewWucnQXvUZDYMRR3Y6fltROEYfT7tTTtfOZmNl2xumpFbsef3T8&X-Amz-Signature=1254d2dda90cbf3e58e37e4a616ea26746b1c6fb2af97b357e80c0bfb79d4a55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
