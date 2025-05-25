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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y7KCY4Y%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCcdR0OHfxUpBeJfWH%2FO9t4JLqYjq0RwfD%2BUKMopg%2F06AIgX%2F%2BaX0FsA6uUs11rx4pHZQey45bLZmly3IcXLEPPJfQq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDIllS7eQ3UiN%2FoNTkCrcA6b5lp0eqRqIYvrE3VTGvnDvBosWEoMMh3cCOy1oNECIfEV1QJU0XW73aL5Zlr%2BlxcUz%2FuEoyUuonnGtGhrDjnTVTD6qVv4d%2F1mN1pMLbIQy8j8xxl2qNk0JtuVoxyjcmOhlFk0YF03nTSmYOYKliEjFl8NkZJrb9TNJnpimItQQFnsPEYyaQyuMHzHopE6sHHLxnMpNn2D0BqVl0OTqjByJGpJ6ilwqu%2F%2BQX90L%2F5J1HuxbTWErCNYlUb43LA8lgMXLSQ81tn8moua3evDSI3ctQmGwHjwz%2FmJ%2BNVfTFM7Ew0n%2FGw8dX%2BmfLu2EQuGXe5oYDT6UcTmWG1mC%2FA9ltNCqwuVoGs6XZ7D1HwfbXZ%2BJIJYmKIaulSctpA0GcR2y1YVnlnpI3vLWlPQzJGSlsgsyENJ1OqnXcWd1FkGR6mJX%2Blkguq%2BFxndEgBLZILYH3%2B6Y%2F5R18pFAxYT3HWtitybrE4ZeZv6kC31Rcmi%2B7JhHIba5re9rb0bBylNv6fY8ug1lHcNGgJxagiTVblEJjTCamX8gQyltRIiJ1hWMKkVFjcTI5ZSeaXza2utBfzAmk7G0QpXD46m1SGGqmi97y%2Fy5bLV4XAJY%2FC34pN8zvWSplh%2FrbHgPxnAlREKSMPe5ysEGOqUBqZB8ik1wEXb5O%2FAwcSm1XzLIxENe%2Fz2rpbJoYErTvo%2BPODM9s1waK3vbYjQjw3yYJX8aCOzfvduyIPf3pN7O%2BpxstZ4t54wknebPEYJat3Y7ysRkkZ9dRrkaw3x5af4Xw03AZDqSspVe9eI3Aa7lCqd4y8kfVWE7AvO8WV5V940zq%2BH2f4WINTSGV0bc15kEQ56yddxWZcxpRvEjOyF09R9imJMi&X-Amz-Signature=1b36e07bf7e5a9689bc8378dba0f831c59501082acb6d0e5eea7fec6f61e41b7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y7KCY4Y%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCcdR0OHfxUpBeJfWH%2FO9t4JLqYjq0RwfD%2BUKMopg%2F06AIgX%2F%2BaX0FsA6uUs11rx4pHZQey45bLZmly3IcXLEPPJfQq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDIllS7eQ3UiN%2FoNTkCrcA6b5lp0eqRqIYvrE3VTGvnDvBosWEoMMh3cCOy1oNECIfEV1QJU0XW73aL5Zlr%2BlxcUz%2FuEoyUuonnGtGhrDjnTVTD6qVv4d%2F1mN1pMLbIQy8j8xxl2qNk0JtuVoxyjcmOhlFk0YF03nTSmYOYKliEjFl8NkZJrb9TNJnpimItQQFnsPEYyaQyuMHzHopE6sHHLxnMpNn2D0BqVl0OTqjByJGpJ6ilwqu%2F%2BQX90L%2F5J1HuxbTWErCNYlUb43LA8lgMXLSQ81tn8moua3evDSI3ctQmGwHjwz%2FmJ%2BNVfTFM7Ew0n%2FGw8dX%2BmfLu2EQuGXe5oYDT6UcTmWG1mC%2FA9ltNCqwuVoGs6XZ7D1HwfbXZ%2BJIJYmKIaulSctpA0GcR2y1YVnlnpI3vLWlPQzJGSlsgsyENJ1OqnXcWd1FkGR6mJX%2Blkguq%2BFxndEgBLZILYH3%2B6Y%2F5R18pFAxYT3HWtitybrE4ZeZv6kC31Rcmi%2B7JhHIba5re9rb0bBylNv6fY8ug1lHcNGgJxagiTVblEJjTCamX8gQyltRIiJ1hWMKkVFjcTI5ZSeaXza2utBfzAmk7G0QpXD46m1SGGqmi97y%2Fy5bLV4XAJY%2FC34pN8zvWSplh%2FrbHgPxnAlREKSMPe5ysEGOqUBqZB8ik1wEXb5O%2FAwcSm1XzLIxENe%2Fz2rpbJoYErTvo%2BPODM9s1waK3vbYjQjw3yYJX8aCOzfvduyIPf3pN7O%2BpxstZ4t54wknebPEYJat3Y7ysRkkZ9dRrkaw3x5af4Xw03AZDqSspVe9eI3Aa7lCqd4y8kfVWE7AvO8WV5V940zq%2BH2f4WINTSGV0bc15kEQ56yddxWZcxpRvEjOyF09R9imJMi&X-Amz-Signature=8de045607903997dde44a95273704bbe4d3001cbd67cd4c037b8433150f39500&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y7KCY4Y%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCcdR0OHfxUpBeJfWH%2FO9t4JLqYjq0RwfD%2BUKMopg%2F06AIgX%2F%2BaX0FsA6uUs11rx4pHZQey45bLZmly3IcXLEPPJfQq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDIllS7eQ3UiN%2FoNTkCrcA6b5lp0eqRqIYvrE3VTGvnDvBosWEoMMh3cCOy1oNECIfEV1QJU0XW73aL5Zlr%2BlxcUz%2FuEoyUuonnGtGhrDjnTVTD6qVv4d%2F1mN1pMLbIQy8j8xxl2qNk0JtuVoxyjcmOhlFk0YF03nTSmYOYKliEjFl8NkZJrb9TNJnpimItQQFnsPEYyaQyuMHzHopE6sHHLxnMpNn2D0BqVl0OTqjByJGpJ6ilwqu%2F%2BQX90L%2F5J1HuxbTWErCNYlUb43LA8lgMXLSQ81tn8moua3evDSI3ctQmGwHjwz%2FmJ%2BNVfTFM7Ew0n%2FGw8dX%2BmfLu2EQuGXe5oYDT6UcTmWG1mC%2FA9ltNCqwuVoGs6XZ7D1HwfbXZ%2BJIJYmKIaulSctpA0GcR2y1YVnlnpI3vLWlPQzJGSlsgsyENJ1OqnXcWd1FkGR6mJX%2Blkguq%2BFxndEgBLZILYH3%2B6Y%2F5R18pFAxYT3HWtitybrE4ZeZv6kC31Rcmi%2B7JhHIba5re9rb0bBylNv6fY8ug1lHcNGgJxagiTVblEJjTCamX8gQyltRIiJ1hWMKkVFjcTI5ZSeaXza2utBfzAmk7G0QpXD46m1SGGqmi97y%2Fy5bLV4XAJY%2FC34pN8zvWSplh%2FrbHgPxnAlREKSMPe5ysEGOqUBqZB8ik1wEXb5O%2FAwcSm1XzLIxENe%2Fz2rpbJoYErTvo%2BPODM9s1waK3vbYjQjw3yYJX8aCOzfvduyIPf3pN7O%2BpxstZ4t54wknebPEYJat3Y7ysRkkZ9dRrkaw3x5af4Xw03AZDqSspVe9eI3Aa7lCqd4y8kfVWE7AvO8WV5V940zq%2BH2f4WINTSGV0bc15kEQ56yddxWZcxpRvEjOyF09R9imJMi&X-Amz-Signature=632d126e6c117797f810a3e80d0e97a1f0f6a1d7a904230a9fbb2bcdc272f07e&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKUQO62V%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIBdUEH6b%2BayGDAUcdRBvvkCP7tgAg6SYZvCorjYweeeZAiEAiJ3LAi0%2F0ASjdpS3Aj3EnCjNnkx8W7g0xjLGfS48alMq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDMjEC630QyvQWTujfircA8iDYUTLABxvvLTXqZenqpiJ7XxUDjBCg8Xan4FnYUSghzCMd2utJ2yr2lPU10wiT4ehGB6SVFJRAtBb7D3uDzAYJ%2FXAJYFVe6LgR9zGGNDSoQW4lB%2FUoGzITHvKvxjlA0vtlmqu2cwEtMt9csvsK2h6QErzqxPAwXE%2FP8fi7ML3LlB1QsilJ0DcSm%2Bed5TArjdWkotiLPLxlz7%2BNBoGUCvm3MFNStitEylt7Lmdg7XwT%2Furc6j%2ByWSEUo2k80yc9673ynbVRsQdGMsCATmjvbqtrOWiNgBL05EvlriK%2ByGuH4eYM63B10v2IPHUPa9nD1oxCFTc%2FCNhe4BvsXpWYgNzhFzUf3GJ4ey7DLkpI6a4SitQgDNec2o6y44Soozn8egPsU7f2eDKi0aNp9lHmproF2Ivna2faJmZ97Iya4v%2BWTNzvip7xmTHiCZoBl%2FKIUfLLJMsMqLskC9DeZkPQC2%2F08AcTz%2BXBJlxpRi%2F6DBBV%2BSz6Q%2Fwba4pWPiZw6ttXQ6w43iwvC2hS4xosiXqHR8ihA%2FcHAKWR7Yxtrzkzx%2BsWJIEPi70W9Z%2FFelpnbDcg4A77ipLEqTPS0Rqiqav35o1iNoajxshjLKD7Bj2TTGgF4DVWh%2FyIOH7ya7iMKi5ysEGOqUBPwpLei%2F36kcS6ewSswhKudPhz8wJ7E1WlAjPOUB8cFPdbg2CWca%2BHrvt0TKU%2BXz5nL8kIVFsbyRG0pL4nTcYO9UhTQGl49UqBfqhhaoN7Mmg%2Fj4MRm9Q4mvo22r5i3PpbEEhoH64TzxvQy15dMdAH5YoArNG76f6SEraqjMKz7gG03WT1tTPuXRoyzdFqTn3fau5dAGcBfVewVhUYsDdza6%2FVSBa&X-Amz-Signature=19b2f5b1dcf9e5cbf173ffdaa38e462b83add5b2174c4bacf11ab7cd9cdeeb97&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UIB7WOB%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T050822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIAUNhtM19ptNwslq2osQpPDNZrMTJM%2Bxr%2Fh0Pgxj3IVFAiBiJUI9r4I9t3qu8qd8ysyXpIaDB21BD7o7fsmBR4ZGcir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMfR5AVaUFB789W2t%2FKtwDgXJFNmTgkyAwfqrf4DwuaytHC21CuK8PTmYNNfdSEEhjLWAbXBa5etS2tMoaxauCSy1rYwE%2BuFz2qMIm84E8OP1qBrIxFD43%2FkIJQlC4EhO74G6ZxQjuIFp3dbBf%2BDmqrta4cb9%2FeJGt22t3GhWpKtF6ve%2FBahhFX4YByAX06uH0xz%2F5os8sDdtdDBa%2B30L3Ww%2Fix6AOFmZt0mwtCbCBkKZS6nMEedZ7hcph2nsy0l6T4e1dW17N1DAFG6tDjxnSQ4jns7zt6oisG1xH0iHU8P%2BNbwoRo5%2FHR0WjdP984RVSP%2F976DHkXFyvcO5gyP1rgqZk58Bmp6sl5DECTLyahZ2iG6F5Ytg%2Br8Auo19j%2F%2FPlnumNlXirhHsYW4Jx%2FwCt1Ucdi%2FD9ccsfZATLF5zkKSwjHvoaS9f3D4U2jWeSAbjXDI%2BJesLHw6c2uyvhG%2BQw32j4bcKUHf7nxlPMwS1x8d4lAD7CB5p3HOapp9LcpyD%2FFu2q9vE%2FjaKIj0kWV%2FyhHlG0NTyQx1ONGf4dDrIUZUNK%2Frtm2L96XKr9WKgl%2BfkbmawT%2FpFE83mS2XoyoSCzSeFCP7HjhErJMzdCckTYQShOjnaRAQJDOHOiEGNcitM%2BUzVIG%2BpO9xo9u9YwjbnKwQY6pgGFLkVBYMkGBe2mhftjOtQnGkn0vuask51O%2F56WzsZ70lMSjOOvr3%2FXh98WgNjGFSfkmNMkOiulSEFqNwhdi16oNCrlXSQf7hv0aRHvnzglcZNLAyFFKLPeZgkfQ%2BuIFjRmPD3ha25vPKqt8s9vNI40yKapn9alPHp5o2mKjUZ%2BEIEfVrHLyuG%2Bx%2FYjkmGIb%2FSSXhmmIdsqoHw5I%2BGVz0hlF1ggHl8j&X-Amz-Signature=75ab637ab7206a7f2e34f529b4faaee6bccd389e1c8ee309d421ffc16d7b84a8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y7KCY4Y%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCcdR0OHfxUpBeJfWH%2FO9t4JLqYjq0RwfD%2BUKMopg%2F06AIgX%2F%2BaX0FsA6uUs11rx4pHZQey45bLZmly3IcXLEPPJfQq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDIllS7eQ3UiN%2FoNTkCrcA6b5lp0eqRqIYvrE3VTGvnDvBosWEoMMh3cCOy1oNECIfEV1QJU0XW73aL5Zlr%2BlxcUz%2FuEoyUuonnGtGhrDjnTVTD6qVv4d%2F1mN1pMLbIQy8j8xxl2qNk0JtuVoxyjcmOhlFk0YF03nTSmYOYKliEjFl8NkZJrb9TNJnpimItQQFnsPEYyaQyuMHzHopE6sHHLxnMpNn2D0BqVl0OTqjByJGpJ6ilwqu%2F%2BQX90L%2F5J1HuxbTWErCNYlUb43LA8lgMXLSQ81tn8moua3evDSI3ctQmGwHjwz%2FmJ%2BNVfTFM7Ew0n%2FGw8dX%2BmfLu2EQuGXe5oYDT6UcTmWG1mC%2FA9ltNCqwuVoGs6XZ7D1HwfbXZ%2BJIJYmKIaulSctpA0GcR2y1YVnlnpI3vLWlPQzJGSlsgsyENJ1OqnXcWd1FkGR6mJX%2Blkguq%2BFxndEgBLZILYH3%2B6Y%2F5R18pFAxYT3HWtitybrE4ZeZv6kC31Rcmi%2B7JhHIba5re9rb0bBylNv6fY8ug1lHcNGgJxagiTVblEJjTCamX8gQyltRIiJ1hWMKkVFjcTI5ZSeaXza2utBfzAmk7G0QpXD46m1SGGqmi97y%2Fy5bLV4XAJY%2FC34pN8zvWSplh%2FrbHgPxnAlREKSMPe5ysEGOqUBqZB8ik1wEXb5O%2FAwcSm1XzLIxENe%2Fz2rpbJoYErTvo%2BPODM9s1waK3vbYjQjw3yYJX8aCOzfvduyIPf3pN7O%2BpxstZ4t54wknebPEYJat3Y7ysRkkZ9dRrkaw3x5af4Xw03AZDqSspVe9eI3Aa7lCqd4y8kfVWE7AvO8WV5V940zq%2BH2f4WINTSGV0bc15kEQ56yddxWZcxpRvEjOyF09R9imJMi&X-Amz-Signature=ec41f2355cfe6275fbf3bdd52a8d9f2b20bdb93a44da7484398dbcd044ad0590&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
