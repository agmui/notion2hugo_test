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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSDGNC3E%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T003917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2oL5pZvN%2FfLeN8XHWvovd0Eb7278BejkKuPZXO5hg%2BAiBkk8snvkDxx%2FoHVtxbhn2WiIvkuJZgGAvmioBpL1o9YCr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMFlk%2BVsQP%2Fkknzl%2FqKtwDyKUi%2BDVXCgGqbSmMUPUYMBem%2BweN7Di04WCAX383%2FjWTosUMEh3CYfgPa8Z%2FPlQfurgyQpEKjnch7nCRUwanYOQhHmNQEfXcVZ2Ud1h%2F88Vuc6El61ntmB9%2FZHCubcanHsVbBfkOq3XgpCHmtcP8ZkIi89mE5adUCMCbxQ8MvTXk0IVj3rvJDD1WMYvy8FHMq9eN6buxDeZxPu7DQzIfs0G5Vcm5XecAOzskO%2BFQgpR8jDBLWzY6lkc4%2BsFRDqL8fCniU7DrMg38JWfUayX8v2ijF08a2LBqw8964HZgUGAq1cb%2B8OFaPdYc1rlI0vK8MYQ%2FOq1qeMnElj%2Bp7wl1zz0eADpIb62rAGZi2kjsw7o7mJQKgSOZB3IyvswL%2B0UmnxYbfncWnqX95IOea5JlDzHkOUBDy1twVIwKUecPZmhe9dXXvDL4ce5yKOb6vc2HKr5MFIC0NwVnEmG7bsGAhB9M7gTVp74hO1MMTKjR5gvp6ttz2tirkcO09T%2FfJw64U4Gonf9%2BliT3XvPvzExy7SFr72CTf0f3NrC87i65VB9U%2FLvLmmwEIHaUq4pNomJtjww2qK0To5ePsq3XSX8zhE%2BeqyYtMmO6%2FOh1%2FX6Bg8ur5eHmf5Z%2BlcbKegEwsJOBwAY6pgE5sDS6gRM3WJW2f7SPJZDazbIBkigPrtCy%2BWo7D0oibElUYNvmBgPkySeQX%2BoVpTvruZcC9lL%2B5luJwCNbF2EQBB7A2b0gMq3UHAIOjY7xFtOMbqU6WxZXlFPvshcytKhvgj3x2%2BhhYbq12Hl4Nk4Q8vRKJn4H2ioLq%2FsBFHZHp0hFyu4fyuM%2FaEhwHE7DE5VY7MyfHDWkeUWVsZIoeGEFvH4YbACp&X-Amz-Signature=57e6757df4aaf1b89f5f6550241d96b8d69eac6af3d2233d6e267107605bea51&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSDGNC3E%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T003917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2oL5pZvN%2FfLeN8XHWvovd0Eb7278BejkKuPZXO5hg%2BAiBkk8snvkDxx%2FoHVtxbhn2WiIvkuJZgGAvmioBpL1o9YCr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMFlk%2BVsQP%2Fkknzl%2FqKtwDyKUi%2BDVXCgGqbSmMUPUYMBem%2BweN7Di04WCAX383%2FjWTosUMEh3CYfgPa8Z%2FPlQfurgyQpEKjnch7nCRUwanYOQhHmNQEfXcVZ2Ud1h%2F88Vuc6El61ntmB9%2FZHCubcanHsVbBfkOq3XgpCHmtcP8ZkIi89mE5adUCMCbxQ8MvTXk0IVj3rvJDD1WMYvy8FHMq9eN6buxDeZxPu7DQzIfs0G5Vcm5XecAOzskO%2BFQgpR8jDBLWzY6lkc4%2BsFRDqL8fCniU7DrMg38JWfUayX8v2ijF08a2LBqw8964HZgUGAq1cb%2B8OFaPdYc1rlI0vK8MYQ%2FOq1qeMnElj%2Bp7wl1zz0eADpIb62rAGZi2kjsw7o7mJQKgSOZB3IyvswL%2B0UmnxYbfncWnqX95IOea5JlDzHkOUBDy1twVIwKUecPZmhe9dXXvDL4ce5yKOb6vc2HKr5MFIC0NwVnEmG7bsGAhB9M7gTVp74hO1MMTKjR5gvp6ttz2tirkcO09T%2FfJw64U4Gonf9%2BliT3XvPvzExy7SFr72CTf0f3NrC87i65VB9U%2FLvLmmwEIHaUq4pNomJtjww2qK0To5ePsq3XSX8zhE%2BeqyYtMmO6%2FOh1%2FX6Bg8ur5eHmf5Z%2BlcbKegEwsJOBwAY6pgE5sDS6gRM3WJW2f7SPJZDazbIBkigPrtCy%2BWo7D0oibElUYNvmBgPkySeQX%2BoVpTvruZcC9lL%2B5luJwCNbF2EQBB7A2b0gMq3UHAIOjY7xFtOMbqU6WxZXlFPvshcytKhvgj3x2%2BhhYbq12Hl4Nk4Q8vRKJn4H2ioLq%2FsBFHZHp0hFyu4fyuM%2FaEhwHE7DE5VY7MyfHDWkeUWVsZIoeGEFvH4YbACp&X-Amz-Signature=eac677b383f0a513b9b4c0f2b08a07cece78d95504bf826c20e7d59820e059e3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ6WBKD5%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T003919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC27M4MMZtoYSgcJZ0ULXNg7hLajKPC%2FyDKdGIgusgAdwIgUa1zJ5x3RtzZDDhbXgKvr7CVDfi%2FLp7BGlDcmcOtaFEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDBI%2BT63iS9f8VxsZxyrcA53jKDXRR7bVBMuK0QKU7fzCHuslnurDvTC3PlIYP6cB1bm6YnDPohwOHCWb80PFCPtcKXXetXJQZ1II9Dn978QYGoUjhPrJtpI1P4CJGlAHMa53tGxeAZrEiYE4zrH8EFxnkf%2FyMYGDWL2Pc6IHySfQibyYtbFvzvrEKxTr6SFXC7JnvjDEkoCyXG3IF%2BSeCLLQRmpaceuoLhBafPgTVK25yPl3tMRwvObEQi5LxzXHMu9h6qmbAwKveL3A1mYXoYgsZrlnLWXSYBoORUDqcJBm9Sn5jn1YFKIglaECgfGVco3rAPCXB8%2BwBkl1qI932%2F5ise5Z5QrTTGPr63cWJueZ8u55Hk6W2tPu9I%2FEU4ZMOab2RJV1%2FDutBJqnEFwrgH9CN4S58ctYA6W5UHnQpwg6BOwPs85Dw8mqHeWOC5oG0%2FzH3wlSIk4nM84y2CVMeLM1kv3LJhWVBRy2Ff%2BS5KcaPYuUu%2BCMT2KtqnkafB2v6fSzamZN7Vwrk8evQRuqqBQ0TXZG8M8YtxO5rPIZdKKzBWtoRtI3ze3Twt2DAdo9tAGTfdlQJFtWcVXMfUXjgl1zYDyJJj%2B%2FAs4lusXWdUmNbur7AQm6zFngNubIBZPvNfSJnkbq32wIrtPiMIaTgcAGOqUBCWeQac5hV%2FEJSrnSMLkyhFG8t6uQiYHTKi892IlOpQR6O2%2FhFSmjYUmcgsWpjdK3dQe6BlwUKQUtE8p19Lop3veVX%2B6Hylw6G7nsCWSeZZgwBYX4x444VVYsRhEmREABTm3tSCf1pimgs788T6YHWyenwTBaQ75aGfh%2FMXAL4NH34%2FKkD1x02Ywbw17zIrQsa3hkw4R%2Bm3K7698PLaKtHQTzY55p&X-Amz-Signature=06e8e54d66db7dfa265eabd81d7d3e138740f9278c07449b8c8a911fbd4889e2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAA53M3Y%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T003920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxBBWpb53rA9EKJADAUgcSXMjCDfQALav97qpdWtrcnQIgca%2FG7yLA%2BkaiUaZIrr9yDnh8a5VGodC%2FNuXPA1LzoI4q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDFo%2BsJFGEWMXaXV87CrcA78%2FRTddZN6YsWFhdO1zGG5o2Q56tTCPJ0cdsFbI52HGbRX%2BMIlNdJUlPv0O9PaYjNeqDYa%2FWdQgx%2BYUFTmgFGFWeJL9yB2pTRSizSs3KcnUgj4pvGaUN9bGLbad9zH8dZTqjzs9DWdKdhh5tkDyds3DvxcA7vBLLvZEH4aTiYEbX%2FUPK1Z6MIgzZFqyorMJsKQD53WgXF1U%2FoTpfjN78Nnj2ZjdI14uOvLg2%2BLVNaHtgK%2BcCUCE5hHii9sLIv0RICN9boM4jDG6rhKfWuFO0Xl7YMFbOxrXrMS6bm0ACP5TEbVw489NRvMiPQ8olMu24Z09g9SsA2iWcDqavD1V4hEh68PyEN7red00wxwnDUZMu3rW%2FoGW%2FiC%2BL1Mn2L5V1kxrB6AdhuuIUNP2Dgxxsgvt5XhJjZGxV1ysNRmCTgeBOuNEeiKUnMEmo%2BDR2WY5h2ErJbRTeCHGC0pWDBy%2FGKKVMGsN3exhH%2ByaChNNRuwhHxFS70mRk6PAFbwD7deQyO9PN3mgvaP3FU%2FAbysKeOieTI4yRxyajKB911YzjcZp4QtkUPAuyDbnv3qt7yfx%2FGTneKw5Ot5gu71CXhwpHmvISv1Cmel8qbJ0NpzLEuEFG9IBMlDTy%2Fdyd0QEMIiSgcAGOqUBgE1FXyI36XwVbJWEOaDwDQgtWp%2B1WoaU%2FoTvzyVMqGkZYOxceDzgPUn466pork8FCvbKZaDWFeb1Dx0Z0bfWqUJKe05I8pBm%2Fg8htwoJM9dM2eWE31wDVz9h%2FmPZ%2BberrEKVFVxaWybnYrL6aUiPOCdfoyrVFWZBbalatkPfRdAwcgKE80yH8K1wybS5UET5H3Zv3Ou6B5TfGGW312Vh8RzmCfRq&X-Amz-Signature=fba4e0bb5dfd1c5a136ba913496e5035562ac7a9bfeefcdbddae6edd65203f1d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSDGNC3E%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T003917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2oL5pZvN%2FfLeN8XHWvovd0Eb7278BejkKuPZXO5hg%2BAiBkk8snvkDxx%2FoHVtxbhn2WiIvkuJZgGAvmioBpL1o9YCr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMFlk%2BVsQP%2Fkknzl%2FqKtwDyKUi%2BDVXCgGqbSmMUPUYMBem%2BweN7Di04WCAX383%2FjWTosUMEh3CYfgPa8Z%2FPlQfurgyQpEKjnch7nCRUwanYOQhHmNQEfXcVZ2Ud1h%2F88Vuc6El61ntmB9%2FZHCubcanHsVbBfkOq3XgpCHmtcP8ZkIi89mE5adUCMCbxQ8MvTXk0IVj3rvJDD1WMYvy8FHMq9eN6buxDeZxPu7DQzIfs0G5Vcm5XecAOzskO%2BFQgpR8jDBLWzY6lkc4%2BsFRDqL8fCniU7DrMg38JWfUayX8v2ijF08a2LBqw8964HZgUGAq1cb%2B8OFaPdYc1rlI0vK8MYQ%2FOq1qeMnElj%2Bp7wl1zz0eADpIb62rAGZi2kjsw7o7mJQKgSOZB3IyvswL%2B0UmnxYbfncWnqX95IOea5JlDzHkOUBDy1twVIwKUecPZmhe9dXXvDL4ce5yKOb6vc2HKr5MFIC0NwVnEmG7bsGAhB9M7gTVp74hO1MMTKjR5gvp6ttz2tirkcO09T%2FfJw64U4Gonf9%2BliT3XvPvzExy7SFr72CTf0f3NrC87i65VB9U%2FLvLmmwEIHaUq4pNomJtjww2qK0To5ePsq3XSX8zhE%2BeqyYtMmO6%2FOh1%2FX6Bg8ur5eHmf5Z%2BlcbKegEwsJOBwAY6pgE5sDS6gRM3WJW2f7SPJZDazbIBkigPrtCy%2BWo7D0oibElUYNvmBgPkySeQX%2BoVpTvruZcC9lL%2B5luJwCNbF2EQBB7A2b0gMq3UHAIOjY7xFtOMbqU6WxZXlFPvshcytKhvgj3x2%2BhhYbq12Hl4Nk4Q8vRKJn4H2ioLq%2FsBFHZHp0hFyu4fyuM%2FaEhwHE7DE5VY7MyfHDWkeUWVsZIoeGEFvH4YbACp&X-Amz-Signature=fb102f526329339a6878c36eb85ec62b770070e0b1a41f12f770aab5f3865d07&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
