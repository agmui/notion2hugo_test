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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ITQLTJB%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T131951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDMnYs5sSOmjcxBFkPUxIi6lNxyD5OshR16uf6Yq3QRxQIgWzcRAscbjOu2kKhdoNEqsoZVD8OoM7H6pbYWms2xaK0qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCNpbmFIVuD%2Furb9SrcAyQ78J6WbOu3RiRIKNNaR1K6XRnKakQD8ULuiVTEdS6WEEsz2wrhzWNnD0lAXmDRpVJMzQHmRMHVHoriMEXB9mQjjvh1fKLHEUZ0YEJYxqqnhqtCV1Uj8qdFuL9qdY1rBtFVAavTXjnHSSGhyDDUQHn4mebfEIeVLegIQxB5MlnHt6pyieX%2FmsZE0R611npRQE25iYfvaNBCJqaoGyEZ%2BUftct6mv89Coi30OLJRo0RZdM3CpQdxoFd8TRe4u2rZe1cpue2SoNgnWr48ECUQUDM%2B6Np9nZIhUntCYjJXXhRwA%2BC20ZH3IIO47WkFDDJp7mK9vKrcoj0l5lnlKdgWs8AmuKu7KzddiM81C2lkZim9WRsCn2aGw4XJvHzk6QdAF3FRPjmJLgGKhvjFoUbZfwEKP%2F%2Ffcer%2BK6Rrg9bXDpHj%2FLdSYHQwQ9xIstEpracXqYjwK3qIjU7uAUSv8iblbFTbW5mM3KkHLi0O6tyyL3jzQ%2Biz3BpwvQGSKM47MdWDcHBrRjrRBaNHMsypssC9dTtaJ6f2SWuf3GZfgMUXbbgYPMeR6SAcVfjhFVGgCV%2FzjkBEUn7Lx3U9SPG%2BkUKhx2yJiWGU0SwuLOLEJijJkavJzgFV1fEm3sfsPXYJMJ3gtL8GOqUBsdsPzNQH8iLo%2F5vQwdOry78iF0wmrmy8tVTUKN744zOYbF7i5zCWMk9KutS4xvr%2B3aF0Ixk9wlG07xMp68Ro1lxD%2BrL%2B%2BWr4GQUkeMqA4EyoGmRBmLZiw6fsyfwMRo7iKXd52%2FpT1Xu%2Fp3%2F%2FUt%2FONspoOK4wrLLWnZydWtOy%2FM9OmsaauQup1oKm%2Bl%2BnJhjJTOvNo1O7UfaPAbMXajv9yV043P3E&X-Amz-Signature=67e98d07dd051dc0fe7f35b9bef4342bc832441f07d8e350e43289d64c28cd90&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ITQLTJB%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T131951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDMnYs5sSOmjcxBFkPUxIi6lNxyD5OshR16uf6Yq3QRxQIgWzcRAscbjOu2kKhdoNEqsoZVD8OoM7H6pbYWms2xaK0qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCNpbmFIVuD%2Furb9SrcAyQ78J6WbOu3RiRIKNNaR1K6XRnKakQD8ULuiVTEdS6WEEsz2wrhzWNnD0lAXmDRpVJMzQHmRMHVHoriMEXB9mQjjvh1fKLHEUZ0YEJYxqqnhqtCV1Uj8qdFuL9qdY1rBtFVAavTXjnHSSGhyDDUQHn4mebfEIeVLegIQxB5MlnHt6pyieX%2FmsZE0R611npRQE25iYfvaNBCJqaoGyEZ%2BUftct6mv89Coi30OLJRo0RZdM3CpQdxoFd8TRe4u2rZe1cpue2SoNgnWr48ECUQUDM%2B6Np9nZIhUntCYjJXXhRwA%2BC20ZH3IIO47WkFDDJp7mK9vKrcoj0l5lnlKdgWs8AmuKu7KzddiM81C2lkZim9WRsCn2aGw4XJvHzk6QdAF3FRPjmJLgGKhvjFoUbZfwEKP%2F%2Ffcer%2BK6Rrg9bXDpHj%2FLdSYHQwQ9xIstEpracXqYjwK3qIjU7uAUSv8iblbFTbW5mM3KkHLi0O6tyyL3jzQ%2Biz3BpwvQGSKM47MdWDcHBrRjrRBaNHMsypssC9dTtaJ6f2SWuf3GZfgMUXbbgYPMeR6SAcVfjhFVGgCV%2FzjkBEUn7Lx3U9SPG%2BkUKhx2yJiWGU0SwuLOLEJijJkavJzgFV1fEm3sfsPXYJMJ3gtL8GOqUBsdsPzNQH8iLo%2F5vQwdOry78iF0wmrmy8tVTUKN744zOYbF7i5zCWMk9KutS4xvr%2B3aF0Ixk9wlG07xMp68Ro1lxD%2BrL%2B%2BWr4GQUkeMqA4EyoGmRBmLZiw6fsyfwMRo7iKXd52%2FpT1Xu%2Fp3%2F%2FUt%2FONspoOK4wrLLWnZydWtOy%2FM9OmsaauQup1oKm%2Bl%2BnJhjJTOvNo1O7UfaPAbMXajv9yV043P3E&X-Amz-Signature=980255e93b7ab43c1699f74a93b1cd81b3876cbb6e2b5d76e9a3f57d22732be5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KHOQKNF%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T131954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCICzCdKBWV1oyY2%2Fno9wg3nYKmfSrkF6Ktak2O%2FUdMoJhAiBDOnsI2j71TZ%2F00Mu1hl4QuKTvYO0R1gNf%2FTnmMCaVYyqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRqlqiUFDJC9gqICrKtwDhcyeRZuaEAGo%2By1u9%2FjK1KaUxo%2BV5Ude%2BWHFVA0ilER6Y77xUL4em%2BNzBV1taJ4Hbu34r1sb41KQmheE4nQveYsFDv2TtvmidCJ0lwUk5Bh25z9YL2XxYejZ585DBk8lZ3BR50lvQKuyx4uZxQx0aMAFB5yOg8lE85xadH%2F7X9ECU%2BEmPR%2F4UGjwIMav%2Fk4MuS5W%2FE3jI8R5k9xcoxW%2FGG7CSalopnjJ%2BP%2FafkM56eEYDYba2UhkKjX6p2Qeg1JB4Yjniocv%2BivWI%2F575DsUEsNVzO2jifRG5TZ3ewAC4azV6WWIVzi6KxwmfF0bb7zDJEwuHHYILsEgEwUhl5O%2BkYdpbzvNlW9f%2B8zuKOp%2FCqM8t4l4iAG9LycFQiLR5x%2FWnSL21SGSzQiKZSiTAHqpVRa6X%2FQ5VQkD3eyk88ONGS3PgnO0e8nJm7DD7L64kkcS24fyKvc71wcnr5BCiTsA7Hn9tpwpFnPPkwJ67A%2FlYWCwpw%2BAaN%2BrJioy7hPPpwv2HrPvvV0hDuauAf0YPMOV8M0ALV1qDdRWklS1pEfMFRmZDSah%2BBFReAROZiN8Ck7kK2cG08vpxwNEo5ekb%2FaoKaIzYtcC4pAZeiwA0Hvr0n9O7ZVYv%2FzwlOoslNcw1%2BC0vwY6pgGJ9cPl8KOREQKKZeAH65ZXRotn2X6UvwU0bkF4HrlFlWarCGZc5cHfAxaruX8QsMPr1uyBVfgily7cG2AJJxJAe4X033WJ2ttdMhQ6bD4kFZDoGN13UiSBbEOH%2Bb%2FQPflLF7kIWkp9Uz8tNno4D1w%2Bdxl5B8hllYreHIEJNb%2FUwPiST6ga6GUilbyje28bW6W7jjACrzhlnsYK6xIGuFleh5DG%2FiHn&X-Amz-Signature=632545d63919144d2b375970a438a25bbde9da07c4eaa54ce519b5d9e456eb31&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV7NCDPD%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T131954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCisnlYDkXZUd99Qts8f51MCc3il4tkuUkqiku0LhlqEwIgNf4hPaqkEZHUZimFWGMJQeBdqXNz%2BFKkYDOnV%2BOCiOYqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEM9Gjit4bEiakrNircA%2FiWmICIqvcVszUucWV8OFJDLMKO%2B2nB%2FYUB7dDWERzd8RiH5M8qF3eirtgh8%2B8kTO%2BJxFKBqh%2BfyTAtwVnTPaWtwyyb4y4RsO%2FxMbCUuBDgrvVS9u4y4REjcdXScUT2Wq%2B1JuuzkBBPgELA4C7v73WFWE4N3kfxlBsY5pFRf6qCoVgxfrZzHHQpVHwpjxTj4VsWuktocVW58pHYYjNvXo1dpJCuqkjgKMrso1ejrvuTPILBzTNHYPhAaRE4N%2FIUlPw2hbpydlWcuwSWQT9p5HAc7iMiz3bik3XaHo%2FUnOnLtGjuli2yqDI3dtNbsA5zXiHAeL3iyNjPZJVKZGfx91vrheOBOq2y0A2kdb6qzwso1su6b3ufbAxbCRqaoydzSyyybMKFhPdiYIlyIPfNT2qvOr1HBOL2BF9A7FC%2Bi5qLxqqfkQ4YE8qTKWGmDptQ5OcXp%2BiygXOA%2F6Byi3ynMSKeojg%2FSw41aRNKvPonw8cjIiU53OizSu2ggipb4doAsN8y7xVMNSbbhfmEuGBli9YHCpS82eShbfiKkRyo1WwJxv6RRDFpmkyYN0SVDAeG1soZCxXthpv3KgW1wG5PK32d8R7j9D%2Bp%2FRVmvEqZgKOArMd35xtBbyo3OnS0MNXgtL8GOqUB7KIZWiBdvTm4pjoGXtUnlDTNkf4yY4LnK%2FCpZYbWrr3NBYeyi2xcfGEwwOQHzcNxi0KDbbF9gWT7Gh1xv6v8QexYylUcoHrq7Bl91KoLJuFICagyXRODYBVQEc6Pg6p7VUSWd1KuEPl3Q5DpUMwux0dZ%2BzigLOIKiSYo5qwW60JF2pjDAXa%2BmP3TkOM5%2BpRYLRqf5gVpy5VIWj97afGfu56lC90k&X-Amz-Signature=baedac7715b7eb9b36331928a3bf456450180fc64f817adc15262668b2ed3725&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ITQLTJB%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T131951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDMnYs5sSOmjcxBFkPUxIi6lNxyD5OshR16uf6Yq3QRxQIgWzcRAscbjOu2kKhdoNEqsoZVD8OoM7H6pbYWms2xaK0qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCNpbmFIVuD%2Furb9SrcAyQ78J6WbOu3RiRIKNNaR1K6XRnKakQD8ULuiVTEdS6WEEsz2wrhzWNnD0lAXmDRpVJMzQHmRMHVHoriMEXB9mQjjvh1fKLHEUZ0YEJYxqqnhqtCV1Uj8qdFuL9qdY1rBtFVAavTXjnHSSGhyDDUQHn4mebfEIeVLegIQxB5MlnHt6pyieX%2FmsZE0R611npRQE25iYfvaNBCJqaoGyEZ%2BUftct6mv89Coi30OLJRo0RZdM3CpQdxoFd8TRe4u2rZe1cpue2SoNgnWr48ECUQUDM%2B6Np9nZIhUntCYjJXXhRwA%2BC20ZH3IIO47WkFDDJp7mK9vKrcoj0l5lnlKdgWs8AmuKu7KzddiM81C2lkZim9WRsCn2aGw4XJvHzk6QdAF3FRPjmJLgGKhvjFoUbZfwEKP%2F%2Ffcer%2BK6Rrg9bXDpHj%2FLdSYHQwQ9xIstEpracXqYjwK3qIjU7uAUSv8iblbFTbW5mM3KkHLi0O6tyyL3jzQ%2Biz3BpwvQGSKM47MdWDcHBrRjrRBaNHMsypssC9dTtaJ6f2SWuf3GZfgMUXbbgYPMeR6SAcVfjhFVGgCV%2FzjkBEUn7Lx3U9SPG%2BkUKhx2yJiWGU0SwuLOLEJijJkavJzgFV1fEm3sfsPXYJMJ3gtL8GOqUBsdsPzNQH8iLo%2F5vQwdOry78iF0wmrmy8tVTUKN744zOYbF7i5zCWMk9KutS4xvr%2B3aF0Ixk9wlG07xMp68Ro1lxD%2BrL%2B%2BWr4GQUkeMqA4EyoGmRBmLZiw6fsyfwMRo7iKXd52%2FpT1Xu%2Fp3%2F%2FUt%2FONspoOK4wrLLWnZydWtOy%2FM9OmsaauQup1oKm%2Bl%2BnJhjJTOvNo1O7UfaPAbMXajv9yV043P3E&X-Amz-Signature=cf3ca25b721ba97afccefba13326c72c007e7285a7440c5657b1a2a1d48d1120&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
