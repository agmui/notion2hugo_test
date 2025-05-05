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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W42OUAHW%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T033544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDMu4HwuXb1euT6YUwHqwbMtokq3O6uoKuxPySF3mK6eAIgDNgTmH4csMC1lhxaeEZJ4ziQpRvkv4XTHUJzvYbL1oUq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDLXRWd0H945cL0NV%2FSrcA4JvZUFSA1FoMkOQfaxbg2bSJ9TUMFB1RHNScJecwbU4o5vyuqryd4NKcoKxMEwxN8SBBxwCYQ82Gk1cckKhX8KZ4UOJRFQV6K0LdPXE4gzRSDYPxYlVTrnJwnNJr0rlojx1gQ2UGOryWfPKp1lMWFP%2Bxij8BcOGo13QRiunMo57E%2F5qowGW%2BEfIxBhGX%2FVF9zYkYM5tTw07inhcP15kzfK6iuPxt4YK54R7QCdh89skID9QrACsqbqN0lBYv%2FzoZ6YcKp4P6z4XAJROk2sbio4MMmTrFplBz3baGkiEaXOIxP4IThbo3y4jc6wcxD%2BbgxVkZ7ZQAwr4drRptWdP8cWZR0BN18KXdqCQNyNEMVD8zGIaCvg1ZOtj80h2HBpRBBx6V6qenX14QklzJpDsXPngb1%2F1VxrDPQHK2HlYSroASslWLjzdZyQJIpH%2B38cYr3Nr7Irhlgm%2B1GmUzcEC3AGim5J%2F7sFuyEQMWofzWYoWbdsx0sI%2Br%2BP8u6%2FvQjeDUwxCIAix9Aq%2FQFiFzji9o6Bm%2F0lFSdkFdzMGQDvMfmXNYFn9mlFvZsgHdTC%2FuuGGbT8qKQ9ZDzAwKhVaa2onA1CUxtZBGvlo6XEWynUEKsjHuldo%2BkiR0xTa9MusMKzg4MAGOqUBLNfYB6kfDYx3PNvoZYnDmDYRY6MIbTP7A20qcpbzW9BLrmfp0vilTY7wO25eKBRAxrmI7xRoAyVPnHqkuM5q0EK4ZZTWQP%2B%2B0TNyGDoajCYXX3TTcIk5MpaYBXYINHUx7eFzpIWDNtmjcIsKgSxx7ZLLRVkxNHCJpMq%2FOzYkTfRoW%2FbbQlpD6L0RZTrp6iy96PB1zOsb%2BinVzDhcd01JWv4nHmv9&X-Amz-Signature=6cde3bdc5866304883e9cc017f54fcda5bb8630715ffe062d351a84e059dda25&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W42OUAHW%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T033544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDMu4HwuXb1euT6YUwHqwbMtokq3O6uoKuxPySF3mK6eAIgDNgTmH4csMC1lhxaeEZJ4ziQpRvkv4XTHUJzvYbL1oUq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDLXRWd0H945cL0NV%2FSrcA4JvZUFSA1FoMkOQfaxbg2bSJ9TUMFB1RHNScJecwbU4o5vyuqryd4NKcoKxMEwxN8SBBxwCYQ82Gk1cckKhX8KZ4UOJRFQV6K0LdPXE4gzRSDYPxYlVTrnJwnNJr0rlojx1gQ2UGOryWfPKp1lMWFP%2Bxij8BcOGo13QRiunMo57E%2F5qowGW%2BEfIxBhGX%2FVF9zYkYM5tTw07inhcP15kzfK6iuPxt4YK54R7QCdh89skID9QrACsqbqN0lBYv%2FzoZ6YcKp4P6z4XAJROk2sbio4MMmTrFplBz3baGkiEaXOIxP4IThbo3y4jc6wcxD%2BbgxVkZ7ZQAwr4drRptWdP8cWZR0BN18KXdqCQNyNEMVD8zGIaCvg1ZOtj80h2HBpRBBx6V6qenX14QklzJpDsXPngb1%2F1VxrDPQHK2HlYSroASslWLjzdZyQJIpH%2B38cYr3Nr7Irhlgm%2B1GmUzcEC3AGim5J%2F7sFuyEQMWofzWYoWbdsx0sI%2Br%2BP8u6%2FvQjeDUwxCIAix9Aq%2FQFiFzji9o6Bm%2F0lFSdkFdzMGQDvMfmXNYFn9mlFvZsgHdTC%2FuuGGbT8qKQ9ZDzAwKhVaa2onA1CUxtZBGvlo6XEWynUEKsjHuldo%2BkiR0xTa9MusMKzg4MAGOqUBLNfYB6kfDYx3PNvoZYnDmDYRY6MIbTP7A20qcpbzW9BLrmfp0vilTY7wO25eKBRAxrmI7xRoAyVPnHqkuM5q0EK4ZZTWQP%2B%2B0TNyGDoajCYXX3TTcIk5MpaYBXYINHUx7eFzpIWDNtmjcIsKgSxx7ZLLRVkxNHCJpMq%2FOzYkTfRoW%2FbbQlpD6L0RZTrp6iy96PB1zOsb%2BinVzDhcd01JWv4nHmv9&X-Amz-Signature=52c76ccc82ebc7ee64643431c4cad7d556ff62aac872790584e7e579436253f9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W42OUAHW%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T033544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDMu4HwuXb1euT6YUwHqwbMtokq3O6uoKuxPySF3mK6eAIgDNgTmH4csMC1lhxaeEZJ4ziQpRvkv4XTHUJzvYbL1oUq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDLXRWd0H945cL0NV%2FSrcA4JvZUFSA1FoMkOQfaxbg2bSJ9TUMFB1RHNScJecwbU4o5vyuqryd4NKcoKxMEwxN8SBBxwCYQ82Gk1cckKhX8KZ4UOJRFQV6K0LdPXE4gzRSDYPxYlVTrnJwnNJr0rlojx1gQ2UGOryWfPKp1lMWFP%2Bxij8BcOGo13QRiunMo57E%2F5qowGW%2BEfIxBhGX%2FVF9zYkYM5tTw07inhcP15kzfK6iuPxt4YK54R7QCdh89skID9QrACsqbqN0lBYv%2FzoZ6YcKp4P6z4XAJROk2sbio4MMmTrFplBz3baGkiEaXOIxP4IThbo3y4jc6wcxD%2BbgxVkZ7ZQAwr4drRptWdP8cWZR0BN18KXdqCQNyNEMVD8zGIaCvg1ZOtj80h2HBpRBBx6V6qenX14QklzJpDsXPngb1%2F1VxrDPQHK2HlYSroASslWLjzdZyQJIpH%2B38cYr3Nr7Irhlgm%2B1GmUzcEC3AGim5J%2F7sFuyEQMWofzWYoWbdsx0sI%2Br%2BP8u6%2FvQjeDUwxCIAix9Aq%2FQFiFzji9o6Bm%2F0lFSdkFdzMGQDvMfmXNYFn9mlFvZsgHdTC%2FuuGGbT8qKQ9ZDzAwKhVaa2onA1CUxtZBGvlo6XEWynUEKsjHuldo%2BkiR0xTa9MusMKzg4MAGOqUBLNfYB6kfDYx3PNvoZYnDmDYRY6MIbTP7A20qcpbzW9BLrmfp0vilTY7wO25eKBRAxrmI7xRoAyVPnHqkuM5q0EK4ZZTWQP%2B%2B0TNyGDoajCYXX3TTcIk5MpaYBXYINHUx7eFzpIWDNtmjcIsKgSxx7ZLLRVkxNHCJpMq%2FOzYkTfRoW%2FbbQlpD6L0RZTrp6iy96PB1zOsb%2BinVzDhcd01JWv4nHmv9&X-Amz-Signature=f4605622507f9ca9d933c6b7af32f52f3ef0e6039b50402c2b06d7064c2c70ea&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNNFBW6X%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T033546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIHhWGS4%2BBh12%2BsJDuRo0ssGvInSz7ehPF6k6ADTvFyeyAiEA4GN622cn9Wu4LfLHSTWT5pQ9B58Jqcxti4TC0lCH%2Bd8q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNY%2FYNNL2cYSzV2mPCrcAzXKRwXkVXowpSnHuigmLHe%2FEj%2B25oSmP3b3fKB3lwKln1P5mLYd9QxfYiOOK2ubX9vGeO93Jx1h%2Fmr2QM4U%2BSH%2FpmkL%2BzzzvTE7jSIwL9T0bvi1369J%2BpAA%2FXZruTHXO4WFimZT7HUc62F6AXu%2FLc4HpUONfPwPmuY8pgmKWBOXoYj2atDynn77SFPjP4p9kOhu3NlOOEEVKE59j14%2FyL66k3%2F33KioPowTstjTZD6c2CVdeyDSw555EZs4LRQ1PJl%2B%2BLgWeniRGKB291ALaEgFbc4ookB2azy4n8CMitOv01NPDg5tM8mwVETgOSz2pALaVD7nZlLf6D0ITFIWav719%2FYv9WxfTTQICLFAEYWmlea2nxgdHtSBCqGOXW8AbIDb3aED%2BEeni%2Fk6JdRQgUXM6%2Fu9PoLc25vQb3nhglkYPntxAc9rUp9R4l9b2EwofXf7l6JGHiXG7TYi4TLsnkD9yBe2wbBkxpf2xFcfkhi3HhsoyFT6IyF7dCmlktLdCvR5d46uJZIg2K051ft0AsWVddckSCnwXQHJ7%2BnxFvycf8W%2F68QbZ11EcpkdYe0znJCSV%2BlUlfCDdtz0F2g7K0tbwFQzSQJyuDia2fCnFEwZCwjKrCP4H61n%2BpoPMNrJ4MAGOqUBwu24%2FxBjcXshcqAbrlTbD9lyMBUNKFM7cfsQZ3xFhBEJTVhhJsUwFDEZy29UcY2B3v18NiKe0yP1dgDdghmtiwlefxW3Srkbp4LlA5mvrXCOw%2FGNm%2B9QT1WJ153iUHTDkLMcT1hhOWRaf2MWoPHiCbrNWlA1ZhbZzTxgT1NxJqbGtZloYJTPEziS8Mo6NMM%2BFVsHtxQ70fiX5ZKPXeEoq2GofuZB&X-Amz-Signature=9df555a2838105a22d7b02d7ec9d1556fb4c19638286372d3d67158b97fee832&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5TBHR5L%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T033546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIDrmN1GJkDjFBAnoCis%2F2b0BDJOnGQUkGYERDkr2TiGIAiBm3RaV9GBM26rDQOYgI18GYULze0BKZFJJj5ayfR%2FP7Sr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMpI9qmFLxG8oZyFfzKtwD0I01Vw6VCZzjNc8CBoQOx799%2FccCadcPSPVZYa8EoFqNL1MEkbjcwYgc3Zsd9N9V2oR%2BcXkex8Jj8HbSRzHqX9XVEaVgMN9CdbYcctCD7yL%2FLXBQSf1S%2BRzQX7sx5HpRh7fv1b9ayW6EmjtwMuWvKbzzLptx8HUelVfFKp8Km%2FkiZF39Y%2BcBPYBIIZb006NqaVzqq3SmKZkXVeE%2BW47C4WUiLKRCEYtF4LdBOwY7YO4Gw17FD7Voq7ex0NxC0m9ezZFJJ6T8wY8xVdyvx90u%2Faz8m6uWOZT0CuLJkSqQNORYfwe0WHnEeLau0KR%2FKB%2FGMQVL5Y%2FQX84n1rO1WK6MPRLtflwTVSJqAj7%2FjhmRy%2BIcZTeOfI7lqoCKmM8PCB9IhLfCX7gwNjbOUtP%2FOzMEEBDVkVk8BC5%2BiUz7muRF3wPICCjHhcGCIZcBCC3zbvlo8HqFCMToHYba%2FagDpTjm8Krkx6OeJGU7Tm29TeFbUeA5Z%2BHKrSC5o6yHpPYSJQIu2tpuObkRxgo9Uzsix6UHHJm0qZ55LZ3W%2FQ44zZ0tLcBL%2FnOSMWS4uM1WCGP0JqbUlGb%2FVeUnPa5Jf0l9r4V3S%2FwpKevBGZz9T7sRiT5OGBnGPEPeBu6HZi%2F%2FKdsw3J7gwAY6pgHnSfuKV1WRvzMfXxUVzoWWFCQaKOExnRQu4OwfswbbTYjOrEt7bVCas9%2F%2FFwPTR5wETL4z%2Fx9O9OUHNv%2F4UFQhV6tGU40gqTc1o%2F99%2BjCfdRFbaWAIFIRuvF4tTi0gssgekIQSwY1H9zTzypNgpW%2BwQ8IM6MV1hd9js9HieiM2ZhY8lgwSzk1hh%2FO2x74UNu9nZIWSRRKcLLp4fCRqCmXaACb6wuyk&X-Amz-Signature=ec84dd6001d436e66d01ea3c59684871f0fa2c907d23bd86eec61587e33817ea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W42OUAHW%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T033544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDMu4HwuXb1euT6YUwHqwbMtokq3O6uoKuxPySF3mK6eAIgDNgTmH4csMC1lhxaeEZJ4ziQpRvkv4XTHUJzvYbL1oUq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDLXRWd0H945cL0NV%2FSrcA4JvZUFSA1FoMkOQfaxbg2bSJ9TUMFB1RHNScJecwbU4o5vyuqryd4NKcoKxMEwxN8SBBxwCYQ82Gk1cckKhX8KZ4UOJRFQV6K0LdPXE4gzRSDYPxYlVTrnJwnNJr0rlojx1gQ2UGOryWfPKp1lMWFP%2Bxij8BcOGo13QRiunMo57E%2F5qowGW%2BEfIxBhGX%2FVF9zYkYM5tTw07inhcP15kzfK6iuPxt4YK54R7QCdh89skID9QrACsqbqN0lBYv%2FzoZ6YcKp4P6z4XAJROk2sbio4MMmTrFplBz3baGkiEaXOIxP4IThbo3y4jc6wcxD%2BbgxVkZ7ZQAwr4drRptWdP8cWZR0BN18KXdqCQNyNEMVD8zGIaCvg1ZOtj80h2HBpRBBx6V6qenX14QklzJpDsXPngb1%2F1VxrDPQHK2HlYSroASslWLjzdZyQJIpH%2B38cYr3Nr7Irhlgm%2B1GmUzcEC3AGim5J%2F7sFuyEQMWofzWYoWbdsx0sI%2Br%2BP8u6%2FvQjeDUwxCIAix9Aq%2FQFiFzji9o6Bm%2F0lFSdkFdzMGQDvMfmXNYFn9mlFvZsgHdTC%2FuuGGbT8qKQ9ZDzAwKhVaa2onA1CUxtZBGvlo6XEWynUEKsjHuldo%2BkiR0xTa9MusMKzg4MAGOqUBLNfYB6kfDYx3PNvoZYnDmDYRY6MIbTP7A20qcpbzW9BLrmfp0vilTY7wO25eKBRAxrmI7xRoAyVPnHqkuM5q0EK4ZZTWQP%2B%2B0TNyGDoajCYXX3TTcIk5MpaYBXYINHUx7eFzpIWDNtmjcIsKgSxx7ZLLRVkxNHCJpMq%2FOzYkTfRoW%2FbbQlpD6L0RZTrp6iy96PB1zOsb%2BinVzDhcd01JWv4nHmv9&X-Amz-Signature=d366ca106c1245f0b1b533be564579ab94d866c6e7ab2e8aa8997e842f7b5d51&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
