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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653HYTVOD%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T031839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3w6ZYFeF3PoXJmKxF%2BLyb3KO5uBP38cT%2Fq32jtLejIAiEA4dMqVxvEoERQzh2HS9LI4TvLRNb60pBmt0X7rsF5JT0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDDwgI%2B7rTkGd62i5%2FCrcAy1Hb3yoAcs%2F3bOPPKQS5N2jPScRWnkZ6Y9QZmZy%2BewzT%2FNFQeB2avapLUclVqn2YWGypRo9MP3LOA5ObGY7%2FDgDIKS7kFdHNjWXCPx%2FtX5aqf%2BdKpUSaUmh%2Fe5wcqSOyspTn%2BzrKCXnK8kEb82nbNOe3WUE6cZyyHht7rLFy%2B6LjD8jT58Mgunsl0KPbi0Qc4q%2FDKgdZzS4to%2BjUcl1j7lG%2B1I7mTeAwrngrgfIj8ecIsn8l5MOLzb%2FltVA0FzJbO1PKhgJJRJY4cqpGwRsej4lPaML4%2BvCyjLw7yROq6DCRTQRQhYURZTac3sFiSN9bTMtOiOLhNTWDSY0nq3cZisDV7sOPrpS4NH7da7qSaOqVXfcLHxqVhwobOod%2B9XnRdFayYiNghN9yItdypRIs0%2Bja%2FHefuWew5wro0l1Y6x7XUnWnjkbaAQpsMBPQU37Z%2BtZ8ByXEVWCcoU0v2tHsNCvuFH69eXGW0SUpM3YuoKfTXpAlf%2Bl8NMzX4%2BrEyXzIgBNx%2FsH9UPrt93oH89tpi1RdigubsFTC1dWiXl4SrRaPs3TvZ1IBaqyRKUfA5JxasKXgBe3AsrH1uh8BUcphsN2%2FGkQDSuzfntvXnXv4qWyzGB9gY153mz0RH2pMNKVpL4GOqUB4rNT%2BYnoO835HfDBmYzSm9%2F%2B1gmK%2BVClUHvm54C8lJWS6NXkFKSaRL7%2BDhKaOsZhVKh%2F88o4hRwRq97s%2BUXKmMJEQx3B3RAvopVT9%2BaR0EcyBWGKwilCBP%2Fwle1%2FR5jSCuJcTODq6iimxNQiokEbu4D3hOJUgzdVtnX3IgcFiMUYt7geMDjjqXPpnt9J0j79%2BZsIbg8AnGpGZranuH64HnsJ%2FHuC&X-Amz-Signature=28a36548c2257381b844025494d9eadfa466053383f217b7e402706f7e25faf1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653HYTVOD%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T031839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3w6ZYFeF3PoXJmKxF%2BLyb3KO5uBP38cT%2Fq32jtLejIAiEA4dMqVxvEoERQzh2HS9LI4TvLRNb60pBmt0X7rsF5JT0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDDwgI%2B7rTkGd62i5%2FCrcAy1Hb3yoAcs%2F3bOPPKQS5N2jPScRWnkZ6Y9QZmZy%2BewzT%2FNFQeB2avapLUclVqn2YWGypRo9MP3LOA5ObGY7%2FDgDIKS7kFdHNjWXCPx%2FtX5aqf%2BdKpUSaUmh%2Fe5wcqSOyspTn%2BzrKCXnK8kEb82nbNOe3WUE6cZyyHht7rLFy%2B6LjD8jT58Mgunsl0KPbi0Qc4q%2FDKgdZzS4to%2BjUcl1j7lG%2B1I7mTeAwrngrgfIj8ecIsn8l5MOLzb%2FltVA0FzJbO1PKhgJJRJY4cqpGwRsej4lPaML4%2BvCyjLw7yROq6DCRTQRQhYURZTac3sFiSN9bTMtOiOLhNTWDSY0nq3cZisDV7sOPrpS4NH7da7qSaOqVXfcLHxqVhwobOod%2B9XnRdFayYiNghN9yItdypRIs0%2Bja%2FHefuWew5wro0l1Y6x7XUnWnjkbaAQpsMBPQU37Z%2BtZ8ByXEVWCcoU0v2tHsNCvuFH69eXGW0SUpM3YuoKfTXpAlf%2Bl8NMzX4%2BrEyXzIgBNx%2FsH9UPrt93oH89tpi1RdigubsFTC1dWiXl4SrRaPs3TvZ1IBaqyRKUfA5JxasKXgBe3AsrH1uh8BUcphsN2%2FGkQDSuzfntvXnXv4qWyzGB9gY153mz0RH2pMNKVpL4GOqUB4rNT%2BYnoO835HfDBmYzSm9%2F%2B1gmK%2BVClUHvm54C8lJWS6NXkFKSaRL7%2BDhKaOsZhVKh%2F88o4hRwRq97s%2BUXKmMJEQx3B3RAvopVT9%2BaR0EcyBWGKwilCBP%2Fwle1%2FR5jSCuJcTODq6iimxNQiokEbu4D3hOJUgzdVtnX3IgcFiMUYt7geMDjjqXPpnt9J0j79%2BZsIbg8AnGpGZranuH64HnsJ%2FHuC&X-Amz-Signature=fe16cee7e4ebc7c9b6543fc70e62fb4c8dd928c96032644dd6d536f3b8c405ae&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UWVCUMV%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T031842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqntcssz4YYm9mgTbMjT7hd9Pxn3C03pjtYBFdciqsSAIgdnPqfoF%2BbdniXqOuUUN7L1cn8VsTyBUFQ0oA9MOw13Uq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDM%2B4mIARL530UtOTWCrcAwFjCmVo1YoPkm9aop%2FRVBATivHJar%2FfiP0U95llb8D4GxFiROjHnM5BvewDjGPmNythO5HajrULdeZTO%2B%2FnzVDG4ohYQCcPPz0EL2doOwuZ9mnmy%2BSiF6Zjo3kA9xx7tXAQnUwAH8W46Cr15pPxfp9XpKXvXilLC8ujpV4ZyunWK7ne9J1T%2FXorNn2yVMblMC8xhQWPyoq7qaT8eI5QlkyQGGfk7HH4kgJ00rbhcLWezc28xF5wthxOoppuBAjOfnssB8Ug0fp6cRqABemXP0YvtJ33Ui2yFaalC0ueQDfYZC%2FqG19nUVkLvAhYj1UolatLGVbd2EfdxLqRsiN8UcuGHmbrHIqYeBlimJOcQdI0V6zVEWhT%2BH%2B%2B3XzGgYLZTw%2Fo8KbBDtxR6GatrHM1h65iHat2w9XC%2Fa8EGD9LhEqU%2Fkh53aS4s8LFNYwrjNOoxXqYw7bnJI8MSECG6qlhXLOUb0S46f%2FcwW4egqLOUbGaisEWutl7I8kRuXJA%2F8DhgojXpSCedUlwNVd8dXCw97u5MZj19LfdhgNM%2FWMDXPJdSX1maDOwCuUvqqiwuhMHBPZ0apChbuy6RKP6ntMNK3gwgvymrZrR04FV9p2wSlXq5wf7YA6%2F3j9ud71CMMSVpL4GOqUBXbwLZsJNsE%2B7TA9w8njAWwUZDVKbfRlio0DA%2BZQIq8qPyFG6pZUfY5x1RFvWFu2P8Ta6TE15LzpvW2FFlzgWIdfBHEXFnIE14bnqMuk3hjErwMCEatK79kNRq2xFG%2Ftifq7iozuL9WgOPd4clFsph8fZzRW4HmGB0REDdnIMu15o%2F6GZ2RcarMInwhxQozKLEvmqfdJf%2B33JlCGyjApwhh4D0AOR&X-Amz-Signature=7dc644ba31f535b635f545fb91bfc0ebf1329fc20f4defb32fce697c854a6be7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOFTCH5X%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T031843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfmj7BWMEnBflqvxdUpXomLER0oWdQsIY%2BRwe5qfFOuwIgGyWhyecGtx9eEWqdfVGRjkt%2BKXep5aKmAdzlx4uv2EQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDHqEaHlj451vBbo5sCrcAxL9uKbOF76ki5ExnCzl%2BJ%2FKTpwKa5LImNn7DoTl6G%2B4lceArYBSDo0XCaK%2FvCYjRzleYzjzUs47Eyg%2BjMvJZYoODKuG%2F8bR1bkhQvXzATC74wg0QMy83EFheq8QLgD8fW81Hg5aPRLIOeEqAQpvX%2BXnW3MoFTmir2oLPHlLO%2FiZ1aZQx3N03r0Qf3OReMOL94e99hbJwfnRjwrHTPb6MGz3XQWY2D%2BeiuAanbnWpBGrD0vlgvzQzLTANz0wl%2BL4PDYyBxkawJbV6b2z9sLLuKnFH6D1GjOwWPbSKid%2BqkGfHArmwJz33HyZcgqsNeXrkJZ2BsOlcDiWsLrLh%2FW%2BYdpOmDV6HQ1PFpfcRwFhngBbsHN%2BrBjAPNkK4p5QVgzbgs0WjxkdTqV6v50xLM7kZB1L4KjAqFtgE3BbhM%2B%2BcijFiPGlqIudI0lXq7PCgDMqNVHgGXt4xasnsvXWvrBe5h8GGzGPGhDvb1%2FvqhdZQ3LlpeUIxBEPgd39bvhRaI1qs6lqQPvjy%2F1QNQe9myTMWAnMtZUgsVhZdsNipu8eL%2B40yXkix1q%2F3xHc4po82aKDRUx8V6N6kJQJGW9dFbvl2YCKguhNRfC05MWTLWFEUirMsOlUCprawo%2F%2BNQoYMMOVpL4GOqUBPn2Oh4OE%2FlpXuyIbxY75%2FFrMagvLQ7Nbbc34lrJLbwVHjWfB6Vv%2BnrslmEfQK7SIHgs3D3dHdQzPPS9sL2wW2VCeLZkmQIeT71v6FgkwbQXx1%2BcMDrY6GxUhCcN8hnZjLq1T59tZ4iI2dXKZiBXBFSiigF6ztK1pH3eM4EW9KtGbYl1Ol%2F30wZ7TH1Ao6oYuXQ9TsNSkSbcnlA%2F7zehk1SOw1Sxy&X-Amz-Signature=6b56e809e42450389dc716f2f80fef5d92eaaa0d2ad6c9fdfa9810556c9d82df&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653HYTVOD%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T031839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3w6ZYFeF3PoXJmKxF%2BLyb3KO5uBP38cT%2Fq32jtLejIAiEA4dMqVxvEoERQzh2HS9LI4TvLRNb60pBmt0X7rsF5JT0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDDwgI%2B7rTkGd62i5%2FCrcAy1Hb3yoAcs%2F3bOPPKQS5N2jPScRWnkZ6Y9QZmZy%2BewzT%2FNFQeB2avapLUclVqn2YWGypRo9MP3LOA5ObGY7%2FDgDIKS7kFdHNjWXCPx%2FtX5aqf%2BdKpUSaUmh%2Fe5wcqSOyspTn%2BzrKCXnK8kEb82nbNOe3WUE6cZyyHht7rLFy%2B6LjD8jT58Mgunsl0KPbi0Qc4q%2FDKgdZzS4to%2BjUcl1j7lG%2B1I7mTeAwrngrgfIj8ecIsn8l5MOLzb%2FltVA0FzJbO1PKhgJJRJY4cqpGwRsej4lPaML4%2BvCyjLw7yROq6DCRTQRQhYURZTac3sFiSN9bTMtOiOLhNTWDSY0nq3cZisDV7sOPrpS4NH7da7qSaOqVXfcLHxqVhwobOod%2B9XnRdFayYiNghN9yItdypRIs0%2Bja%2FHefuWew5wro0l1Y6x7XUnWnjkbaAQpsMBPQU37Z%2BtZ8ByXEVWCcoU0v2tHsNCvuFH69eXGW0SUpM3YuoKfTXpAlf%2Bl8NMzX4%2BrEyXzIgBNx%2FsH9UPrt93oH89tpi1RdigubsFTC1dWiXl4SrRaPs3TvZ1IBaqyRKUfA5JxasKXgBe3AsrH1uh8BUcphsN2%2FGkQDSuzfntvXnXv4qWyzGB9gY153mz0RH2pMNKVpL4GOqUB4rNT%2BYnoO835HfDBmYzSm9%2F%2B1gmK%2BVClUHvm54C8lJWS6NXkFKSaRL7%2BDhKaOsZhVKh%2F88o4hRwRq97s%2BUXKmMJEQx3B3RAvopVT9%2BaR0EcyBWGKwilCBP%2Fwle1%2FR5jSCuJcTODq6iimxNQiokEbu4D3hOJUgzdVtnX3IgcFiMUYt7geMDjjqXPpnt9J0j79%2BZsIbg8AnGpGZranuH64HnsJ%2FHuC&X-Amz-Signature=0227284a9c4558468a856c911fe0f6971755a86d6b113afc75b07e8f04777c6a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
