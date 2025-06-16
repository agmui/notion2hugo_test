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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFMPGX7%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T200949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIDX1XD1iIs7oUmzogC8Pqd9xyw%2B64%2BLi%2F5dq20mYDuGpAiA9yDDo%2FIeBDRNARVf0yJT%2BR0GK5uae1XQBKJGkIusDLSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMiqYqgT7mQsPuERVgKtwDEO5v8oRJInP7kYQUMQqdqnQD1z11TIvXFjnkV9brWsyQ8mOZvl2hBGw8nQovPayQn1bF%2FVBS%2B2Bz%2FiFi0iKOCepdY00NclsoErZN3U58%2B9qeNb94D6XNMFLHGj51A%2BCYFg81zE1%2FppVGZkJCT0C%2F8whQUeu6Paevf4XQutaQP6A0mmFxYC%2Ff3rDGBX0iteThRQ4cq8OLfT110DDWI%2Bg%2BfKxQpv9cENV99AtemupAe0wXPtifzk7bN4uKrt43pMJwG6ftCZy0O9ZviLa%2BcsNU1aOOIz2rxE2Sg7zxDau51P11Zrmvyop1JILhgnTNyKV2g4H5DJc8ZKh8YqjzzvW84n7vD%2FNM%2BP2pfl7uEFGdxiG3HK6QBAlPBXX6aJZdKy4OzJMnGIh1BwMUTwr7iN06IfrxmW2Q%2BAIsOGu4TUsNo2X1W9e0%2BGSo8brWa73tkyEi1utD6Ycup2JKrVC4pPm76PO0V66rGT4OlBL%2BQp0rQwCy5F8Swpvgc6vmEvNg5afTL0%2Flys%2B1G0v%2FZ4xBWZWyJUQFok437h62sPq12OZxcbhx4MwXPCqZ0MjmPfeZxiaqdHbUfEzodwq6CZOik8V465GXq5s5V%2BkAxmF7hz67yRX%2FIOrVfKdLZn9qK48w0N%2FBwgY6pgFbIc%2FxqH2oYexYYmx7d40BerMy2EDuCvafxyCrAhMs0FoD0fNmyTPjvAeizJIKCWAHofhJ7mq%2Fo6is%2B5q2CFD7uyiPrwv6UbRnDaOQtUoul3MxjKuV8PLSqjOoG5n9Y1F8dClHZn4JARB8mP%2F6rST%2BZK%2FcSGBEAk7nSNhT1b3%2BPV389wVagZHFykMQkngop3JwspxKiVmEqFY8vZkDwZ2fGWunyeFe&X-Amz-Signature=39a00ccf805e44cb61d0bad084f04d720b470c1b3e735dfb55c36f792cd8d19b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFMPGX7%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T200949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIDX1XD1iIs7oUmzogC8Pqd9xyw%2B64%2BLi%2F5dq20mYDuGpAiA9yDDo%2FIeBDRNARVf0yJT%2BR0GK5uae1XQBKJGkIusDLSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMiqYqgT7mQsPuERVgKtwDEO5v8oRJInP7kYQUMQqdqnQD1z11TIvXFjnkV9brWsyQ8mOZvl2hBGw8nQovPayQn1bF%2FVBS%2B2Bz%2FiFi0iKOCepdY00NclsoErZN3U58%2B9qeNb94D6XNMFLHGj51A%2BCYFg81zE1%2FppVGZkJCT0C%2F8whQUeu6Paevf4XQutaQP6A0mmFxYC%2Ff3rDGBX0iteThRQ4cq8OLfT110DDWI%2Bg%2BfKxQpv9cENV99AtemupAe0wXPtifzk7bN4uKrt43pMJwG6ftCZy0O9ZviLa%2BcsNU1aOOIz2rxE2Sg7zxDau51P11Zrmvyop1JILhgnTNyKV2g4H5DJc8ZKh8YqjzzvW84n7vD%2FNM%2BP2pfl7uEFGdxiG3HK6QBAlPBXX6aJZdKy4OzJMnGIh1BwMUTwr7iN06IfrxmW2Q%2BAIsOGu4TUsNo2X1W9e0%2BGSo8brWa73tkyEi1utD6Ycup2JKrVC4pPm76PO0V66rGT4OlBL%2BQp0rQwCy5F8Swpvgc6vmEvNg5afTL0%2Flys%2B1G0v%2FZ4xBWZWyJUQFok437h62sPq12OZxcbhx4MwXPCqZ0MjmPfeZxiaqdHbUfEzodwq6CZOik8V465GXq5s5V%2BkAxmF7hz67yRX%2FIOrVfKdLZn9qK48w0N%2FBwgY6pgFbIc%2FxqH2oYexYYmx7d40BerMy2EDuCvafxyCrAhMs0FoD0fNmyTPjvAeizJIKCWAHofhJ7mq%2Fo6is%2B5q2CFD7uyiPrwv6UbRnDaOQtUoul3MxjKuV8PLSqjOoG5n9Y1F8dClHZn4JARB8mP%2F6rST%2BZK%2FcSGBEAk7nSNhT1b3%2BPV389wVagZHFykMQkngop3JwspxKiVmEqFY8vZkDwZ2fGWunyeFe&X-Amz-Signature=7d50db683996236a304052abb148b9f892309b935904f01da8c1d1d7a32e07fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFMPGX7%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T200949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIDX1XD1iIs7oUmzogC8Pqd9xyw%2B64%2BLi%2F5dq20mYDuGpAiA9yDDo%2FIeBDRNARVf0yJT%2BR0GK5uae1XQBKJGkIusDLSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMiqYqgT7mQsPuERVgKtwDEO5v8oRJInP7kYQUMQqdqnQD1z11TIvXFjnkV9brWsyQ8mOZvl2hBGw8nQovPayQn1bF%2FVBS%2B2Bz%2FiFi0iKOCepdY00NclsoErZN3U58%2B9qeNb94D6XNMFLHGj51A%2BCYFg81zE1%2FppVGZkJCT0C%2F8whQUeu6Paevf4XQutaQP6A0mmFxYC%2Ff3rDGBX0iteThRQ4cq8OLfT110DDWI%2Bg%2BfKxQpv9cENV99AtemupAe0wXPtifzk7bN4uKrt43pMJwG6ftCZy0O9ZviLa%2BcsNU1aOOIz2rxE2Sg7zxDau51P11Zrmvyop1JILhgnTNyKV2g4H5DJc8ZKh8YqjzzvW84n7vD%2FNM%2BP2pfl7uEFGdxiG3HK6QBAlPBXX6aJZdKy4OzJMnGIh1BwMUTwr7iN06IfrxmW2Q%2BAIsOGu4TUsNo2X1W9e0%2BGSo8brWa73tkyEi1utD6Ycup2JKrVC4pPm76PO0V66rGT4OlBL%2BQp0rQwCy5F8Swpvgc6vmEvNg5afTL0%2Flys%2B1G0v%2FZ4xBWZWyJUQFok437h62sPq12OZxcbhx4MwXPCqZ0MjmPfeZxiaqdHbUfEzodwq6CZOik8V465GXq5s5V%2BkAxmF7hz67yRX%2FIOrVfKdLZn9qK48w0N%2FBwgY6pgFbIc%2FxqH2oYexYYmx7d40BerMy2EDuCvafxyCrAhMs0FoD0fNmyTPjvAeizJIKCWAHofhJ7mq%2Fo6is%2B5q2CFD7uyiPrwv6UbRnDaOQtUoul3MxjKuV8PLSqjOoG5n9Y1F8dClHZn4JARB8mP%2F6rST%2BZK%2FcSGBEAk7nSNhT1b3%2BPV389wVagZHFykMQkngop3JwspxKiVmEqFY8vZkDwZ2fGWunyeFe&X-Amz-Signature=7eaf4d17e9e2dd71964d536dac49c843cf09bc76a7fb4ced373f27cdce314988&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYEQMYUP%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQClyOqtEtj3ISs2clDJNWFZ8KIDIlrz%2F8iBsEVn37hy%2BQIgMV8IJj7nPfaYrQs6cp4eVhN1vfc6CYRpvI1CgGK0qBIq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDFiFhhUHIArlEEWxqircA3Cc0fW2O%2BxpgIhkO%2BlbAatFBxiC37lY6tReXgHzTMTY0dc6gpBabuT8stV2zrW6tbTwMntCe0DroRMABuOhAolcU2%2FNUGJ6W32TazEKrNyf6ky8GIbUnegOXRdSnutMKGyPayELqnm6kc5sUjBN1TRRoAMav6nhxohR8MVzuhC6IWm6lm4tXAoRvRfhx2ZK%2BCXfvXR0tWYNxas4sRQknuxMr%2B%2FGFvsT%2F8EU6m98%2BYzquufHyx61nDEQmvhHN3eAL0%2Bf0CiukP%2FPB2Q4J9X44vvScBx1rNoLPS1um1tztqLtuEESvRkfbxiRX1hoXumk4uvr74J%2BHGVJnjK6OSoMnL2ZmOyeK6BI%2Btr7XX4B52khDdxajT5N6kpntWa3C4P%2BnsRcnF2C4jE5vDEPuW76P%2BpPy070mzTbmW%2BPpLfXUxnKxieDumXeDpTrDTabQad0mSnbHvnllTQDDmooxEfpSYhuKkX60Tmy4p3BOkAmnl4bhkcFPQlJmHqgzhaSP%2FfqJCxpoFZyC%2FRXZOozjTVRIYBQm%2FDQgexauQtgeY5plvkMcf6%2F0bqdZnltliI1uAEwc5QgbFUNNK%2BdBZoMqTjoJXcBmJB3tvsPlfUGW9IJ9h7PcnzGRHtz%2FCeBNL%2FfMPnewcIGOqUBOIu0lsJY%2B%2FhJVSpCeQMVQkqep%2B2myOXuoFlqDTK27L%2BaqoTzSDeugwg9j1906HyrWagvsMc%2Fc5gLOrOu6vwkWD7v81%2FtqI14AKJ6sINYLWB7cfr5r%2BdQc%2B9b3xW3YtaxflKm0hMeyH5nde6TvENdiJtQ6Ne%2B7r8RIK3gujVCk7u%2FURbRyUrJUJ%2BHeHqR0E46UtyHKtlagsyJJQTy%2BxKOCs1hU7mg&X-Amz-Signature=ecc657f1788d49e34e04837ae5cb2ebf374a651d5c3848675c2f01f8a00f9771&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6CARKZQ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIE4%2FXY0padmV%2BUMnKgEhLJQzzB6te%2FaVnWxRV%2FcdD3xbAiBQb4zTXKg%2Bq%2Ft1e%2BVyfeAmbRXDBimnb3gJVgp2LoHVHSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMJuxvtT%2F8EOx21YQzKtwD%2B3gxVP0Rq4D9O%2FkHc1gLGsRdqGLZApiEWDwBsDEdFZMsu2bD8lGI7nEzPeEZzRUXL8ooMZvFQUYa79bY2aEEnJyVyCrzNdkrkqz5pp4c99ptGr0DgHOzpP7meShM%2BtMuTVH4NDQAEV0uGUlU7Tlp8931sDLGFhZW6RpQGTi0bsowIT2I57he8lPFxhFzY72lpr9OAQAOzhfF0pDsNbMOm9vXg%2FfYgU2617gYQjvbGG3wv0Ln1PJ8NNMmMR1tpKLZM222nMGM7VbY9ioc8U60KhHbtGQoxVA4qvTTd52Yks2YTm%2BkNnLOHJu%2BVMKtk7DIyAvOJUzf2TTbqX7%2FCWHFqSgvo5ThtMyFxGWQzNAn8k%2BL6HLy1nkNXWs6TOpF%2FzkKpNMz0LB2gp6n7kBekskofCvVBC8W1SW9g5JKo0IlzOemCWojpeEEHTMIMP4SXqlK9gZopYuuykTToKH9NAMzoVXK2xMkhZkAOirBpps2%2BYYdZYoG5sCJHlXlm18NOY0WqJ9E18HEEpyFmc%2FmeEtUKFJUTFdgdhxKVTWEBN2gxVm%2BklnRZ6ZZJGoHTb1TWIrZMiQyJ1NKoel5lsI%2B3%2BOHYPQft1Af5D1L5yX%2FbPtyg1yzovQWN4nEhCaV%2BKkwqN%2FBwgY6pgFfLe74Y5mKZ9pfllV9imTSG4SpTZHC4%2FU3HfTfMp%2FgNcyjM6J1q5%2FH8ZNMqso5j4eZgDElLLIzqXzrKjJVD%2B4O%2BFLDlzL0d4GfC7ErmqfBAYMYJ6VlULen%2FVAGVh1k4ylhNwj0JsZwG2sWjYqsdU7W7x3d0YQPZAXszr08DD%2B9qeB7o9XCADsxZ02jlY4qXhs%2FrWRfr%2FfaLT3im90qziJlESzY26G5&X-Amz-Signature=7d6fbfa0aa56ee62ae4bfa65396703e0793d10d21f66332560f5f43f35cae1d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFMPGX7%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T200949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIDX1XD1iIs7oUmzogC8Pqd9xyw%2B64%2BLi%2F5dq20mYDuGpAiA9yDDo%2FIeBDRNARVf0yJT%2BR0GK5uae1XQBKJGkIusDLSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMiqYqgT7mQsPuERVgKtwDEO5v8oRJInP7kYQUMQqdqnQD1z11TIvXFjnkV9brWsyQ8mOZvl2hBGw8nQovPayQn1bF%2FVBS%2B2Bz%2FiFi0iKOCepdY00NclsoErZN3U58%2B9qeNb94D6XNMFLHGj51A%2BCYFg81zE1%2FppVGZkJCT0C%2F8whQUeu6Paevf4XQutaQP6A0mmFxYC%2Ff3rDGBX0iteThRQ4cq8OLfT110DDWI%2Bg%2BfKxQpv9cENV99AtemupAe0wXPtifzk7bN4uKrt43pMJwG6ftCZy0O9ZviLa%2BcsNU1aOOIz2rxE2Sg7zxDau51P11Zrmvyop1JILhgnTNyKV2g4H5DJc8ZKh8YqjzzvW84n7vD%2FNM%2BP2pfl7uEFGdxiG3HK6QBAlPBXX6aJZdKy4OzJMnGIh1BwMUTwr7iN06IfrxmW2Q%2BAIsOGu4TUsNo2X1W9e0%2BGSo8brWa73tkyEi1utD6Ycup2JKrVC4pPm76PO0V66rGT4OlBL%2BQp0rQwCy5F8Swpvgc6vmEvNg5afTL0%2Flys%2B1G0v%2FZ4xBWZWyJUQFok437h62sPq12OZxcbhx4MwXPCqZ0MjmPfeZxiaqdHbUfEzodwq6CZOik8V465GXq5s5V%2BkAxmF7hz67yRX%2FIOrVfKdLZn9qK48w0N%2FBwgY6pgFbIc%2FxqH2oYexYYmx7d40BerMy2EDuCvafxyCrAhMs0FoD0fNmyTPjvAeizJIKCWAHofhJ7mq%2Fo6is%2B5q2CFD7uyiPrwv6UbRnDaOQtUoul3MxjKuV8PLSqjOoG5n9Y1F8dClHZn4JARB8mP%2F6rST%2BZK%2FcSGBEAk7nSNhT1b3%2BPV389wVagZHFykMQkngop3JwspxKiVmEqFY8vZkDwZ2fGWunyeFe&X-Amz-Signature=11033f49ce0f7f3cc5bf623d04f2b41835b47c7028dd74dcc59cdc8fcbe806b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
