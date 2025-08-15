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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4ZA2RON%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIGWTSwnxZlE2Idppx7oyHVLSjHZsR1Fhhbj%2BN0r6zQ24AiAuNIhfX9do1ng%2Ffw10V%2FbwqLy9LrZoX8fx4OkVUBoeAir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMbeMH8PtA3iprLLyHKtwDPfKp9VrY8k4Pwlhbh3qRH7X1MRPBXWTfghqTohdh6nJ%2B1v6L407W%2BlYFLhcJp2zQRC1Z2b4mi0hSYji7rWXiw%2FUHLmRVb%2FeWhiM0ED1vPaH50HXAiPD6Y9geqXCIg3T%2F10zSuwt6rYbUmoGHbBJZ85XSvo0leG7KHosSID7k7t9jnGGuI%2F4GVyOmkZ8VwNrUBeIkonnRwOkqur%2B1p2YsQtCWUuL6t%2BrFvwxbwcheNtmvSsS1Uy2Zk8sD2zOVRakt7UqmkPiUwPlPvRWkJ2tAVW8vdQAJfRM9u23%2BiWHV9pVKw%2B1yMu7g9QcUwrVNlIDOIGhHc5X%2B5F5PNO69MVdlPujUdlJsPS15XKW2WyUnh0UWYIAy5keyqf1UlO%2F1SsY1865Wx6DC5ewr2nJgcVH9LagP1Vl8p8QOeT0EY9WKO5oFDOvz2HXvII7KvR3ZUTwyGiYA0sDvKSJnm%2FgDTajFkmWb97HbWSOrGhcBMk0R8HFB6rUEVK7uwxrt1qP%2FwrYnpb60U7BZuKVZGN0v7LoyIptOGyhIOmV%2BXDA1c%2FUts2bjlz1iiYEHU%2BjIneTAHrik8zkHhAmRdiICBgO7HTfmpg66HMBRse4yA5bOST78fmtXMF7GeGXxuz2ivKMwuLT9xAY6pgEuspk8rj9KHczABG1tWd0vJ29uWkMtH7Qsks9y5MphB22ZEz9s1TAnle2aDmv9hrqKZCilxwhmxhPHwX7OVwl150%2BhKkM%2FNjyBNSszgackRF3Nl9MISKZ3lmwyB4yI7RWD%2FqhvUF0AcJvM%2Bc7v4J3Z4Sn2R5JYLFnmOB7rJszknRzk%2BMJMYb%2BXytmCr3UNeOKKJkjXxGdRchBOvwIxsPNYymcSqz1r&X-Amz-Signature=cadf6ef7cfc88e21cb2aceb3b836f6619222e92209cfd6c023a6211e0aa81110&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4ZA2RON%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIGWTSwnxZlE2Idppx7oyHVLSjHZsR1Fhhbj%2BN0r6zQ24AiAuNIhfX9do1ng%2Ffw10V%2FbwqLy9LrZoX8fx4OkVUBoeAir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMbeMH8PtA3iprLLyHKtwDPfKp9VrY8k4Pwlhbh3qRH7X1MRPBXWTfghqTohdh6nJ%2B1v6L407W%2BlYFLhcJp2zQRC1Z2b4mi0hSYji7rWXiw%2FUHLmRVb%2FeWhiM0ED1vPaH50HXAiPD6Y9geqXCIg3T%2F10zSuwt6rYbUmoGHbBJZ85XSvo0leG7KHosSID7k7t9jnGGuI%2F4GVyOmkZ8VwNrUBeIkonnRwOkqur%2B1p2YsQtCWUuL6t%2BrFvwxbwcheNtmvSsS1Uy2Zk8sD2zOVRakt7UqmkPiUwPlPvRWkJ2tAVW8vdQAJfRM9u23%2BiWHV9pVKw%2B1yMu7g9QcUwrVNlIDOIGhHc5X%2B5F5PNO69MVdlPujUdlJsPS15XKW2WyUnh0UWYIAy5keyqf1UlO%2F1SsY1865Wx6DC5ewr2nJgcVH9LagP1Vl8p8QOeT0EY9WKO5oFDOvz2HXvII7KvR3ZUTwyGiYA0sDvKSJnm%2FgDTajFkmWb97HbWSOrGhcBMk0R8HFB6rUEVK7uwxrt1qP%2FwrYnpb60U7BZuKVZGN0v7LoyIptOGyhIOmV%2BXDA1c%2FUts2bjlz1iiYEHU%2BjIneTAHrik8zkHhAmRdiICBgO7HTfmpg66HMBRse4yA5bOST78fmtXMF7GeGXxuz2ivKMwuLT9xAY6pgEuspk8rj9KHczABG1tWd0vJ29uWkMtH7Qsks9y5MphB22ZEz9s1TAnle2aDmv9hrqKZCilxwhmxhPHwX7OVwl150%2BhKkM%2FNjyBNSszgackRF3Nl9MISKZ3lmwyB4yI7RWD%2FqhvUF0AcJvM%2Bc7v4J3Z4Sn2R5JYLFnmOB7rJszknRzk%2BMJMYb%2BXytmCr3UNeOKKJkjXxGdRchBOvwIxsPNYymcSqz1r&X-Amz-Signature=a833752bb742364c6c040768f03618b4d20f2c9461bc420c5221f76011d45925&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4ZA2RON%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIGWTSwnxZlE2Idppx7oyHVLSjHZsR1Fhhbj%2BN0r6zQ24AiAuNIhfX9do1ng%2Ffw10V%2FbwqLy9LrZoX8fx4OkVUBoeAir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMbeMH8PtA3iprLLyHKtwDPfKp9VrY8k4Pwlhbh3qRH7X1MRPBXWTfghqTohdh6nJ%2B1v6L407W%2BlYFLhcJp2zQRC1Z2b4mi0hSYji7rWXiw%2FUHLmRVb%2FeWhiM0ED1vPaH50HXAiPD6Y9geqXCIg3T%2F10zSuwt6rYbUmoGHbBJZ85XSvo0leG7KHosSID7k7t9jnGGuI%2F4GVyOmkZ8VwNrUBeIkonnRwOkqur%2B1p2YsQtCWUuL6t%2BrFvwxbwcheNtmvSsS1Uy2Zk8sD2zOVRakt7UqmkPiUwPlPvRWkJ2tAVW8vdQAJfRM9u23%2BiWHV9pVKw%2B1yMu7g9QcUwrVNlIDOIGhHc5X%2B5F5PNO69MVdlPujUdlJsPS15XKW2WyUnh0UWYIAy5keyqf1UlO%2F1SsY1865Wx6DC5ewr2nJgcVH9LagP1Vl8p8QOeT0EY9WKO5oFDOvz2HXvII7KvR3ZUTwyGiYA0sDvKSJnm%2FgDTajFkmWb97HbWSOrGhcBMk0R8HFB6rUEVK7uwxrt1qP%2FwrYnpb60U7BZuKVZGN0v7LoyIptOGyhIOmV%2BXDA1c%2FUts2bjlz1iiYEHU%2BjIneTAHrik8zkHhAmRdiICBgO7HTfmpg66HMBRse4yA5bOST78fmtXMF7GeGXxuz2ivKMwuLT9xAY6pgEuspk8rj9KHczABG1tWd0vJ29uWkMtH7Qsks9y5MphB22ZEz9s1TAnle2aDmv9hrqKZCilxwhmxhPHwX7OVwl150%2BhKkM%2FNjyBNSszgackRF3Nl9MISKZ3lmwyB4yI7RWD%2FqhvUF0AcJvM%2Bc7v4J3Z4Sn2R5JYLFnmOB7rJszknRzk%2BMJMYb%2BXytmCr3UNeOKKJkjXxGdRchBOvwIxsPNYymcSqz1r&X-Amz-Signature=79ad5e433525a2d65727c604391dbf74b0f47d5fb7cba6a326c3159eb9850bb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHDJHTV5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDwQRE1e6pWopNPKhRyHeSbbWUb5g5PoTKJJbwleoGuZgIgV1ThpNi4ujde8W08jWqWT3sH54qJ%2F0Fp4uZCQGm7Sscq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDF5LWQZmEVAFX7WOHSrcA0V9aBYLz9vSxJqs8d%2BMy6uId3X5qvCOzWu7eqvePxgWyPGIi8NJ5MBziu2bTjQJZFJx3hums4qT86KYuZ9%2FVl0BEoK9d3PIo1giwSdRVVTYq5b9Aoi6aqek2Rx%2F2OEsI21IFXM4pcL0g74FQyPL2BV0zAP9593BTIDZs%2FqSmsF%2Bxss3FrglQ%2FTA17Lz7iu5NX5XpfBHJyWavfiAkQNp3cMkxLBO6GQCxMoqsXO5bpRl5EdRAt%2F53G15NTyjxd2hFtY9ID9GTpD0MUu3UZHNiKUB2IufBIXGWHGi3nFuHaDGkeNhlTVJC6%2FHSY4CVtAQoL5OSNpB%2B4E3OBImAOIwqXc9mBfDaBBjY7MirLgLJ%2BtzONVsfQ4Tq38InJr9mlgEgrXlJJz9Rzpte7U3ob8uAGj%2B36BeP99KivounogJRUTdkrZKUeLVyVsX7pvhhu84brFHe0vXJphWVgT9gNDxbURKb6EtQzBqztxGuCEqwqhvmKfsRZmY6Ax58p5Bwib%2Fb%2Fl5PkQnEeKEr2%2BWXSXHCaL040LiTFT5ezaQQAUm1%2B2G61jnE2NNRSGyqF%2Be2anhsjFlmlp3fhzXEDe6qO4NLpYY6grFhhM3hghH%2F%2B59Pb70sas744zPacGV4EZYMIa1%2FcQGOqUBmf8sCoGlrf66ztaGgBfZ3JFGnKp0h83iocWf1KFYgHVOYXNnRkeUWLaYnCAm3ZK3Dt%2BLhTyAVXigvXq0vGgeuGhxRUMH3sv8g%2FoPGwoZHQU5gguQewklWqFftXNAFljtjih93%2B1FQGAYP6%2F8owC8hNHglPPrnuf%2BNl9sG7hKOou7GqtWfEbCZ3zzcn%2FVoSsRCFg8Evp6%2BAXw%2FaHYltlZlkIzIacp&X-Amz-Signature=1553e78e618407707c4a68991af0e9f035c1ca0db65a75c716aa2ed9a7b1b604&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OI6MVP2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDR3UjJGy24tZcjUhHO2bKnMyYsNUNqRfmv207JeIuePQIgYeqmrwmOOonUFItwVuCCIzQsics0ffUlhO66ZxxHuIsq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDF2GZfiwY3dMmCKkRSrcA7bZJVSs1db%2B9f4PeMeWumWFkMTbnOIA1zkNDofULD0cucfG8AQklXcyzBlk%2FkcvaOxzNKQkS2W%2FFAqIZ%2BV398drmZ5%2BzLiwtDO96y1lafJOMv5EJw4T7Ds6iSTs6T%2F4dT72c4T%2Fdr9f6uM1C7E1i8OzB9dvNTkaS8yNNMI9ru8YFav6BIT6GEnFufpH3LSz4VCy%2B1h4H4pYVzL0tk32TpEuUoBR5v8iJkJwu7uN8uif5%2FQX7L8tpX0FlzAcUX72NATJbCvF8TYDfXlRVG9C6BLcY9sFVph8LDd1GKgpmV2VPPsbJUiLc2gMq8ULI9%2BD0irbElxBPNF1o7rSfkrd4n4waVpY1%2B4MqruYCZvj41rAGAVaAeFVCrHmwb4MXNxBcRycn9TsF3zcuwSdoyUfi5qkbfn%2BLXCnXyATxiwKK27ytNOwoImrOVDsNrZTamEqxGgDpg4Vhyfu9zLmX0%2FHt5CjgH1yyZUvEBEbMLgfTa%2FsloLtR7OE%2B0%2FfS4K0opkM5ADSK06YYCGcoxqUYeN%2BDURabG4zCT7JH3WgYuI2W5tfjYHJBU3gsBQXCWWBEsRouRGJ8jSgi3CZLHWkZLl05hk1Arb%2FCEw%2BmQwK9gkcI7voDmAeoZ0O59Lr3qfGMNC1%2FcQGOqUBhr9oV627jLxsSQMjhy81seyGM%2BgCTyFXzDc%2FqLkbGfsI47RL1lT1EvEVQ4xvrrf3l0KQplhVL1hfIH4i79Rve9CuMz3iFAbV77abHO21ATYhnzi0zswJAgdbUIxTbJ%2BXMophe9NgQiwadr44kPZ52dm6AN%2F3Pwt5ds3vc7fF8HSj7OOniZfqFnWqw7PdHwPQiyhrWwGMwLC51BPx%2FU%2BgNi%2BmmNtf&X-Amz-Signature=d3cfcd76b6c358f449d37be5d975ddc5222ebf4bf035aee81ecba72ab7597ef2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4ZA2RON%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIGWTSwnxZlE2Idppx7oyHVLSjHZsR1Fhhbj%2BN0r6zQ24AiAuNIhfX9do1ng%2Ffw10V%2FbwqLy9LrZoX8fx4OkVUBoeAir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMbeMH8PtA3iprLLyHKtwDPfKp9VrY8k4Pwlhbh3qRH7X1MRPBXWTfghqTohdh6nJ%2B1v6L407W%2BlYFLhcJp2zQRC1Z2b4mi0hSYji7rWXiw%2FUHLmRVb%2FeWhiM0ED1vPaH50HXAiPD6Y9geqXCIg3T%2F10zSuwt6rYbUmoGHbBJZ85XSvo0leG7KHosSID7k7t9jnGGuI%2F4GVyOmkZ8VwNrUBeIkonnRwOkqur%2B1p2YsQtCWUuL6t%2BrFvwxbwcheNtmvSsS1Uy2Zk8sD2zOVRakt7UqmkPiUwPlPvRWkJ2tAVW8vdQAJfRM9u23%2BiWHV9pVKw%2B1yMu7g9QcUwrVNlIDOIGhHc5X%2B5F5PNO69MVdlPujUdlJsPS15XKW2WyUnh0UWYIAy5keyqf1UlO%2F1SsY1865Wx6DC5ewr2nJgcVH9LagP1Vl8p8QOeT0EY9WKO5oFDOvz2HXvII7KvR3ZUTwyGiYA0sDvKSJnm%2FgDTajFkmWb97HbWSOrGhcBMk0R8HFB6rUEVK7uwxrt1qP%2FwrYnpb60U7BZuKVZGN0v7LoyIptOGyhIOmV%2BXDA1c%2FUts2bjlz1iiYEHU%2BjIneTAHrik8zkHhAmRdiICBgO7HTfmpg66HMBRse4yA5bOST78fmtXMF7GeGXxuz2ivKMwuLT9xAY6pgEuspk8rj9KHczABG1tWd0vJ29uWkMtH7Qsks9y5MphB22ZEz9s1TAnle2aDmv9hrqKZCilxwhmxhPHwX7OVwl150%2BhKkM%2FNjyBNSszgackRF3Nl9MISKZ3lmwyB4yI7RWD%2FqhvUF0AcJvM%2Bc7v4J3Z4Sn2R5JYLFnmOB7rJszknRzk%2BMJMYb%2BXytmCr3UNeOKKJkjXxGdRchBOvwIxsPNYymcSqz1r&X-Amz-Signature=071dfcab38e0cd337ef4638017d2a339d13a8c19798877c2c1e906a067ddf962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
