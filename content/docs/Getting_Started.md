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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TSABILB%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T110814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1ai6LQVIPch5O7Y%2Bqbsuqs0vcoec%2FAmwfMl%2FHhVDRJAiEAszZESdsV6%2Ftpv3kxBMwMbTGvdrcBA%2B7gkG3Rp0%2BIXRQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOP8HHbai7hBDk%2FgXircAzxsrDmoblFgXim2Sy3Ax7PB9qe%2FuWcsQcHHqxBrbtPj8vZR9UAlfjPFJMcCeRYcNItCQXKC%2FdjQzo3hs45HlYmdJGW1E5IkPyFT%2BlvAYQIjDkJNdRJSJTaW7zY3U9UrpBQHLJSo%2F4tM%2FwK8pHopAcV%2Fb36E%2BfSRnjiasK%2FvJuadG9Lz%2BMaOjcx4uh2ARbP90DTK4y8OMv68ZbGMbW6xQ2u1xQwgEfv%2B17LIdLfzRDGoaj0P2efzFPXAZf0tC8Ymhb%2Bwj%2Brm5d5QFTKLnKHMTBpYdZmODyZ68PBanduT4M%2FhO0g7etmy%2FK8eAVqyvJ2Ylusp0fmOaik5m5IaGHUcuUcweSA2anV8qnlhEpKarhRqJhsDJ6N17Upo8rEq3y6GDjMjx4RXlWPki%2BhMhUUIR4tKVSM4fGVEsmKzg8pVfkrVwBDnFyyCfkOwSPFT%2BgljanARCEnym8KeYDCRt2ycepp40PsxYYUZhCDx7VJfF9PP9O%2Bcg%2FlXnfs9B3pfW9FePTP7eNOuHKmz77fsQfIKxzx0x0gxQdIot8oXF7UPagNw%2FiSfFOZfTdac0Uxp6VCIWZGmb%2B%2B1mOgokpvOM7gPO5pCGvMYLi%2BR3IBZZt8w7AMg%2Fviwf4HkaXWrkfKsMIK3ysIGOqUBmCtgoLMANzoE18IqMZX43bT5FTct%2FQ7fKP4TH2nA2vTyJdp6o3f2aWEycz%2F5mQgBRVdhGlIL94TJscq8n4YmiFKXQMg8cUJkPEE8NnKIrLfsMIe61fwVHivW9OgdhC23l2g3tH%2FQVP39x6h7zVp97ZWH0pRZ8AqYm9fJHSpd9b5muPZgne9%2Bs96PmxQJNoxpRZ75XsKaXvOyHpKGYmTY3DMRub3K&X-Amz-Signature=4764b190ae037e33cf531057c2ace78be20b66e2c631536a5b6d2d6624b0e652&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TSABILB%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T110814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1ai6LQVIPch5O7Y%2Bqbsuqs0vcoec%2FAmwfMl%2FHhVDRJAiEAszZESdsV6%2Ftpv3kxBMwMbTGvdrcBA%2B7gkG3Rp0%2BIXRQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOP8HHbai7hBDk%2FgXircAzxsrDmoblFgXim2Sy3Ax7PB9qe%2FuWcsQcHHqxBrbtPj8vZR9UAlfjPFJMcCeRYcNItCQXKC%2FdjQzo3hs45HlYmdJGW1E5IkPyFT%2BlvAYQIjDkJNdRJSJTaW7zY3U9UrpBQHLJSo%2F4tM%2FwK8pHopAcV%2Fb36E%2BfSRnjiasK%2FvJuadG9Lz%2BMaOjcx4uh2ARbP90DTK4y8OMv68ZbGMbW6xQ2u1xQwgEfv%2B17LIdLfzRDGoaj0P2efzFPXAZf0tC8Ymhb%2Bwj%2Brm5d5QFTKLnKHMTBpYdZmODyZ68PBanduT4M%2FhO0g7etmy%2FK8eAVqyvJ2Ylusp0fmOaik5m5IaGHUcuUcweSA2anV8qnlhEpKarhRqJhsDJ6N17Upo8rEq3y6GDjMjx4RXlWPki%2BhMhUUIR4tKVSM4fGVEsmKzg8pVfkrVwBDnFyyCfkOwSPFT%2BgljanARCEnym8KeYDCRt2ycepp40PsxYYUZhCDx7VJfF9PP9O%2Bcg%2FlXnfs9B3pfW9FePTP7eNOuHKmz77fsQfIKxzx0x0gxQdIot8oXF7UPagNw%2FiSfFOZfTdac0Uxp6VCIWZGmb%2B%2B1mOgokpvOM7gPO5pCGvMYLi%2BR3IBZZt8w7AMg%2Fviwf4HkaXWrkfKsMIK3ysIGOqUBmCtgoLMANzoE18IqMZX43bT5FTct%2FQ7fKP4TH2nA2vTyJdp6o3f2aWEycz%2F5mQgBRVdhGlIL94TJscq8n4YmiFKXQMg8cUJkPEE8NnKIrLfsMIe61fwVHivW9OgdhC23l2g3tH%2FQVP39x6h7zVp97ZWH0pRZ8AqYm9fJHSpd9b5muPZgne9%2Bs96PmxQJNoxpRZ75XsKaXvOyHpKGYmTY3DMRub3K&X-Amz-Signature=96266b89f6b4b381a5f1fffc1fca5ec3b7cbb9ea61d1be0cc2997de4158d0189&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TSABILB%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T110814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1ai6LQVIPch5O7Y%2Bqbsuqs0vcoec%2FAmwfMl%2FHhVDRJAiEAszZESdsV6%2Ftpv3kxBMwMbTGvdrcBA%2B7gkG3Rp0%2BIXRQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOP8HHbai7hBDk%2FgXircAzxsrDmoblFgXim2Sy3Ax7PB9qe%2FuWcsQcHHqxBrbtPj8vZR9UAlfjPFJMcCeRYcNItCQXKC%2FdjQzo3hs45HlYmdJGW1E5IkPyFT%2BlvAYQIjDkJNdRJSJTaW7zY3U9UrpBQHLJSo%2F4tM%2FwK8pHopAcV%2Fb36E%2BfSRnjiasK%2FvJuadG9Lz%2BMaOjcx4uh2ARbP90DTK4y8OMv68ZbGMbW6xQ2u1xQwgEfv%2B17LIdLfzRDGoaj0P2efzFPXAZf0tC8Ymhb%2Bwj%2Brm5d5QFTKLnKHMTBpYdZmODyZ68PBanduT4M%2FhO0g7etmy%2FK8eAVqyvJ2Ylusp0fmOaik5m5IaGHUcuUcweSA2anV8qnlhEpKarhRqJhsDJ6N17Upo8rEq3y6GDjMjx4RXlWPki%2BhMhUUIR4tKVSM4fGVEsmKzg8pVfkrVwBDnFyyCfkOwSPFT%2BgljanARCEnym8KeYDCRt2ycepp40PsxYYUZhCDx7VJfF9PP9O%2Bcg%2FlXnfs9B3pfW9FePTP7eNOuHKmz77fsQfIKxzx0x0gxQdIot8oXF7UPagNw%2FiSfFOZfTdac0Uxp6VCIWZGmb%2B%2B1mOgokpvOM7gPO5pCGvMYLi%2BR3IBZZt8w7AMg%2Fviwf4HkaXWrkfKsMIK3ysIGOqUBmCtgoLMANzoE18IqMZX43bT5FTct%2FQ7fKP4TH2nA2vTyJdp6o3f2aWEycz%2F5mQgBRVdhGlIL94TJscq8n4YmiFKXQMg8cUJkPEE8NnKIrLfsMIe61fwVHivW9OgdhC23l2g3tH%2FQVP39x6h7zVp97ZWH0pRZ8AqYm9fJHSpd9b5muPZgne9%2Bs96PmxQJNoxpRZ75XsKaXvOyHpKGYmTY3DMRub3K&X-Amz-Signature=4b752100b516a1a2759761d90fef239f2176d9dd49cde3d527e06751e57691b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIEGI5OY%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T110816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8VLNTSEDc86CQnsFOdXxaPc5ZJ7lh6t3rfms%2BJeLGBAiAROXMep8O%2FCE9tNxBhdlCs4rinMipzg8g0RC72ijue9iqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaO5Z%2Fa7GdoDfrSquKtwD3sCYhR1uzRGfX1x6pDLxP62nKDJsfK5KHN4DPul5Yu94IVNvct8HnLzrWh8EH%2FJwZxhhXgaEBwoBEPwZHhKZui3Q2hqaV%2F1B37jZ5BSflcsrBJUV9mvBjFqj6DqVaQco0hEprukKEITtGjgT5fej5Yci7vkOtZvf28we216%2FQWPnDO64roEqdb74Aj9bXUSy2c0f9TSSFanOyfu8xHgPehwlWrbEF0JB%2FMkyLIELPqxyG3UODFot8dwW8Us8sDefyS5EBaUDf909lOL26V%2F8ZPSK7%2FTrwzHr0Hpov%2Bl1u2vyNSEdMnyL%2FfU3eNCv%2FaAOJQ8CMb785Vu5FRENJW5L8A%2FrdHurrmoTrkhu1TQqoO6K2%2Bj82Bi7QHBC%2BhTqvx6w08nTaAfr9ANnLjo3zpYq%2Fmmkk9tN%2FKuqIaMIKui65NaD1bp0Q5rJnM6WlOAeCQoPkqeSTwy7INxNOT0hL8dZaHSE2F6uru1ljOokJdZdLUctABR%2F5SN48PcO4wHqu9Hb8KqqP7%2BcS%2FzmC06OLMWIgLeozdQOYeiHVZtC94aUk5k3jVjBbGRIjXmQCe4vaw%2FiLC71oC4BZ0dxGFNU8AV77nppjzgGEXSf%2Fw8SN8Iu59WsUipc6Uqe%2BM3qH4gw9bbKwgY6pgF2ZJdi72FcaF6D6Bq4RKXP3OoqC0amafM9MZrJDJEfvjvH87UhQx%2FyrlyThfoSH%2FSVhb6NwhOTxuGu3q1e4ExItFrU9twTBBXkr7aWFzdMCg3dMzpoiO6QoPWMbgzPH9wocDCx97247Zgu3YYzT37OiaV0UKrptfuOjgumTErTxyCnqyeiUgPYv3loirQzcqDmiHmprRi8U%2B1FwRRT%2BlhOWy7bhxeG&X-Amz-Signature=d1e6f3f868d9db177515aad0c6d588caf9b74fa49c73442f1f0502fff8000083&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLYTGWQG%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T110816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhUe%2FUmxgqz6qwD5HNPX%2FFTT2%2Fw%2FDD1QEoRn3R%2BjIOlAiAFV3PlnbKEg3ayd0eTfKWZpr56tsQCVXoRQvgHBrs4RiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwb%2F0oy%2FDNJ9vF764KtwDFLKojGzcMOtRf6pKRg5CYjFbKaS%2F5necvqCjh2tq2nsyOJDvL9wnuXWv%2Fl4qcGhJDqv5IubJgE5s2dg%2FVMwi%2BeUPqpqtFm4fZJhhzY73NSTnt2v7CFBBSRTpoQabbRcf4Cx6RvreB1qSYGb6xyEozdQKuQePQbCR%2BrEodhabHoTyFcCcSc61fiXTWbhXMHqDHCSB175C6UIKv4Er6u8%2BvQH3yM%2FUCQ8OEN%2BciFuNQUt4UgThKspcJqI%2BXx9%2BBAZ31%2FBw5ZKs%2B8PGGqzwue7aCcM3drQtgKmeWXKy%2Bze%2Bw3SDZ%2BkGLalBMCqIYDCtA%2FHGP2FCuOp1C7TkKJkuor1YGTWZ8ApPNembIEgX6EboMUz2qU2jO0%2BqZ5%2Fzaer%2FDlVLPUvwUcgJaz8k0sZ3PQTnbBs%2FgIoWosxb6EiwDwu2CNp0X%2BpEOOS181q0WPQEjrWFONAep0HsIs38PXbTz6PLHgzjsWviCq1W9a9z5ZBFtEnUL2rhEIRDrB0Wg8Cn4%2FK4Xaep2Cz2I3GOz0AolNLtg1qDCJkCY5OIHStHeHxuq5gTIxvKlvld0iCM1Hi%2B9xzSNn%2FFj6wU9LlEAP%2B8KgMV6zjDo9WElnLM%2BAAM8LhBQz%2BC32IRbNmaIiOFSgQw9rbKwgY6pgG2XzoRBd7d9JfGc33P%2F3PX2EL9VaNVs%2FmBeFNN6CH%2F0rdoRZ5aL3rGYuUuSakpo9So8LtG9HRF2M7DmT%2FKe7bQfhQBJand9PbcOn%2Fqmr2is9vHKD0D%2BhIfKREDgjyxfKJYW50wkx1ApLt%2Bv0xmB7s8LhbkKyvK%2ByfKujzBloJqdFwqK%2BGhI1e%2FsDT8H76UkRkg24ASnKfgEDe2aEp6yFS0bMPR8%2F%2Fp&X-Amz-Signature=514a2537163ac5fe2a735e243cc39f15773173d7e65f1621cf6e9ee32255929a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TSABILB%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T110814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1ai6LQVIPch5O7Y%2Bqbsuqs0vcoec%2FAmwfMl%2FHhVDRJAiEAszZESdsV6%2Ftpv3kxBMwMbTGvdrcBA%2B7gkG3Rp0%2BIXRQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOP8HHbai7hBDk%2FgXircAzxsrDmoblFgXim2Sy3Ax7PB9qe%2FuWcsQcHHqxBrbtPj8vZR9UAlfjPFJMcCeRYcNItCQXKC%2FdjQzo3hs45HlYmdJGW1E5IkPyFT%2BlvAYQIjDkJNdRJSJTaW7zY3U9UrpBQHLJSo%2F4tM%2FwK8pHopAcV%2Fb36E%2BfSRnjiasK%2FvJuadG9Lz%2BMaOjcx4uh2ARbP90DTK4y8OMv68ZbGMbW6xQ2u1xQwgEfv%2B17LIdLfzRDGoaj0P2efzFPXAZf0tC8Ymhb%2Bwj%2Brm5d5QFTKLnKHMTBpYdZmODyZ68PBanduT4M%2FhO0g7etmy%2FK8eAVqyvJ2Ylusp0fmOaik5m5IaGHUcuUcweSA2anV8qnlhEpKarhRqJhsDJ6N17Upo8rEq3y6GDjMjx4RXlWPki%2BhMhUUIR4tKVSM4fGVEsmKzg8pVfkrVwBDnFyyCfkOwSPFT%2BgljanARCEnym8KeYDCRt2ycepp40PsxYYUZhCDx7VJfF9PP9O%2Bcg%2FlXnfs9B3pfW9FePTP7eNOuHKmz77fsQfIKxzx0x0gxQdIot8oXF7UPagNw%2FiSfFOZfTdac0Uxp6VCIWZGmb%2B%2B1mOgokpvOM7gPO5pCGvMYLi%2BR3IBZZt8w7AMg%2Fviwf4HkaXWrkfKsMIK3ysIGOqUBmCtgoLMANzoE18IqMZX43bT5FTct%2FQ7fKP4TH2nA2vTyJdp6o3f2aWEycz%2F5mQgBRVdhGlIL94TJscq8n4YmiFKXQMg8cUJkPEE8NnKIrLfsMIe61fwVHivW9OgdhC23l2g3tH%2FQVP39x6h7zVp97ZWH0pRZ8AqYm9fJHSpd9b5muPZgne9%2Bs96PmxQJNoxpRZ75XsKaXvOyHpKGYmTY3DMRub3K&X-Amz-Signature=9a17c5d653bd9a66981d448a18f17fe5f7861892caf49e0bfb5bc28cb39e632d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
