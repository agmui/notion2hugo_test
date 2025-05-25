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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CZVSLK5%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T004611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIDI%2F%2BRW0r7kFJFg2qve5kMqxqQkSXspK%2BB5UM80BbdQHAiEA13eF0QFY0%2FRIj7D4%2Fv2h6nI6in4WfIFeN7NSd1cIr9Iq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKDq28B%2FmsEFXqKfTSrcA5F3JZNrxAVzzG%2FB2k%2BH893ZYRkjD%2FsK3RU7qbRUY0UjVfi3f44cGSmGz8Gu%2BUaQ1qRdEl4dvmGtOxddqueJHNNg3%2BRkGniwslZ2ynXPnKbCnYe8EBc9Kw6pFO5X8B2yiuMiusZcnN59a0zw3jAvxVq4U%2FjquSzCVvjtpVB6frG7dUKRfQW9xK2I0A2b7Qq1ogZdeIvwzM0TfpBM%2BGKWzKiiE6tacp%2BXCuoHEpx45CZ4YCyaM4bLGTEEVGR2An2Z11vSvaLB99q44K5yTnAFY7fbmv7Ygzz%2FTT3R7JTqLaa7zIpnduR5bTtueU1Vcz0D7TmT4lmo%2Fnr4KTyTrix9ET3g%2B2IhVgaLFkGv76Rb6tYa7U%2Bwz%2FReojEFlWdmzWOhr7by5t5DfWu%2FlycYOLMQ6Hg64LJqxLdBcTtClQAbiNZkvpCQ4MqHZaRLj%2Fshx5CvojO7CGaG%2FS8rj3T74euuZbpABmfFe%2F5FHudtrHKnFwMGzenK38c86s89AabzkopMNMkh8N%2B3ttng9yhcpheonzq0MblJyTbDsQNFBoYR0EgxEBIsg%2FHMQSu49zFSrGGbDxwmnpms25IUfK7KBLCt5Sp%2BdQq5l2wdyDYttL6aNqxq%2BzKGDe1v5EooukI0MIzMycEGOqUBdN80KAHl3aJ2j2FPZfSCbS7BXNAQDfDwHJsMiNsuIUzcf9ot5COgY6X9jPEx53RDWcpm9TiNVtRfe0rOxysq2O%2Fg4sdDFCNbXtz8FQlxR8rmDWC9NaIOtRGTcS9YTopYBwjK8hNyU7eANCVykbLVjofxO5bzQOr1aPbUhMKOjLfQ1Hty95DhankX5vk1IUfMjqPhKaRMPXDwHwImnE%2FhoAzf%2F1MW&X-Amz-Signature=f7da37794af5579906ed51bbaaa037ef8acc45d031077e611bda8da3db6fe21c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CZVSLK5%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T004611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIDI%2F%2BRW0r7kFJFg2qve5kMqxqQkSXspK%2BB5UM80BbdQHAiEA13eF0QFY0%2FRIj7D4%2Fv2h6nI6in4WfIFeN7NSd1cIr9Iq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKDq28B%2FmsEFXqKfTSrcA5F3JZNrxAVzzG%2FB2k%2BH893ZYRkjD%2FsK3RU7qbRUY0UjVfi3f44cGSmGz8Gu%2BUaQ1qRdEl4dvmGtOxddqueJHNNg3%2BRkGniwslZ2ynXPnKbCnYe8EBc9Kw6pFO5X8B2yiuMiusZcnN59a0zw3jAvxVq4U%2FjquSzCVvjtpVB6frG7dUKRfQW9xK2I0A2b7Qq1ogZdeIvwzM0TfpBM%2BGKWzKiiE6tacp%2BXCuoHEpx45CZ4YCyaM4bLGTEEVGR2An2Z11vSvaLB99q44K5yTnAFY7fbmv7Ygzz%2FTT3R7JTqLaa7zIpnduR5bTtueU1Vcz0D7TmT4lmo%2Fnr4KTyTrix9ET3g%2B2IhVgaLFkGv76Rb6tYa7U%2Bwz%2FReojEFlWdmzWOhr7by5t5DfWu%2FlycYOLMQ6Hg64LJqxLdBcTtClQAbiNZkvpCQ4MqHZaRLj%2Fshx5CvojO7CGaG%2FS8rj3T74euuZbpABmfFe%2F5FHudtrHKnFwMGzenK38c86s89AabzkopMNMkh8N%2B3ttng9yhcpheonzq0MblJyTbDsQNFBoYR0EgxEBIsg%2FHMQSu49zFSrGGbDxwmnpms25IUfK7KBLCt5Sp%2BdQq5l2wdyDYttL6aNqxq%2BzKGDe1v5EooukI0MIzMycEGOqUBdN80KAHl3aJ2j2FPZfSCbS7BXNAQDfDwHJsMiNsuIUzcf9ot5COgY6X9jPEx53RDWcpm9TiNVtRfe0rOxysq2O%2Fg4sdDFCNbXtz8FQlxR8rmDWC9NaIOtRGTcS9YTopYBwjK8hNyU7eANCVykbLVjofxO5bzQOr1aPbUhMKOjLfQ1Hty95DhankX5vk1IUfMjqPhKaRMPXDwHwImnE%2FhoAzf%2F1MW&X-Amz-Signature=912dd9cd0aa6cbadf17d79717df82e3fa11b2c644a863734f5f2196897cf55d7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CZVSLK5%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T004611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIDI%2F%2BRW0r7kFJFg2qve5kMqxqQkSXspK%2BB5UM80BbdQHAiEA13eF0QFY0%2FRIj7D4%2Fv2h6nI6in4WfIFeN7NSd1cIr9Iq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKDq28B%2FmsEFXqKfTSrcA5F3JZNrxAVzzG%2FB2k%2BH893ZYRkjD%2FsK3RU7qbRUY0UjVfi3f44cGSmGz8Gu%2BUaQ1qRdEl4dvmGtOxddqueJHNNg3%2BRkGniwslZ2ynXPnKbCnYe8EBc9Kw6pFO5X8B2yiuMiusZcnN59a0zw3jAvxVq4U%2FjquSzCVvjtpVB6frG7dUKRfQW9xK2I0A2b7Qq1ogZdeIvwzM0TfpBM%2BGKWzKiiE6tacp%2BXCuoHEpx45CZ4YCyaM4bLGTEEVGR2An2Z11vSvaLB99q44K5yTnAFY7fbmv7Ygzz%2FTT3R7JTqLaa7zIpnduR5bTtueU1Vcz0D7TmT4lmo%2Fnr4KTyTrix9ET3g%2B2IhVgaLFkGv76Rb6tYa7U%2Bwz%2FReojEFlWdmzWOhr7by5t5DfWu%2FlycYOLMQ6Hg64LJqxLdBcTtClQAbiNZkvpCQ4MqHZaRLj%2Fshx5CvojO7CGaG%2FS8rj3T74euuZbpABmfFe%2F5FHudtrHKnFwMGzenK38c86s89AabzkopMNMkh8N%2B3ttng9yhcpheonzq0MblJyTbDsQNFBoYR0EgxEBIsg%2FHMQSu49zFSrGGbDxwmnpms25IUfK7KBLCt5Sp%2BdQq5l2wdyDYttL6aNqxq%2BzKGDe1v5EooukI0MIzMycEGOqUBdN80KAHl3aJ2j2FPZfSCbS7BXNAQDfDwHJsMiNsuIUzcf9ot5COgY6X9jPEx53RDWcpm9TiNVtRfe0rOxysq2O%2Fg4sdDFCNbXtz8FQlxR8rmDWC9NaIOtRGTcS9YTopYBwjK8hNyU7eANCVykbLVjofxO5bzQOr1aPbUhMKOjLfQ1Hty95DhankX5vk1IUfMjqPhKaRMPXDwHwImnE%2FhoAzf%2F1MW&X-Amz-Signature=102e9b9796eac5b7202d94949051cdf8a0746b73fb073e3b653e2d487ee9193f&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUCKW5DA%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T004616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGU0LoQqODHqhIZ%2FdJybKIvt%2FhloL%2FlomziY317POFoqAiEAs368lIAVqGofracivUTU21QJoEUE0yM1V4PsJapoo68q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDESYw5VtSBARuqZPzCrcA1%2BCxWigEBJ889IeTpxx2HY4Fskql3YQHkL90GCwRaOB0GLM5030OkfhbWZ8YchRkjVQLO3jii1IBj6RL7hGxn6LEBsetLMy545T%2FH1J6%2FDLqmonxdwjCfalt9OUzn0ZfI%2BxZfQLhATC0juWKiF7c6q6llcAgfOLZnFUYE%2BX7Yw1DifnMNPkzEys%2F3CFe%2Buzq8gOlWL29%2BZ3stu7AbdpzK%2FbyuewA%2FNyJXCtFw1sfzcqcTbR7oN6eX9brhgD6LAjR4Os18lI7Ed7tjqlPAWmBVTJ%2FaowijYr6RkzPxTvCV63hBEighIx4W3EoacWslxBcfDSN17faGXni67XasbYrdlad8kYuacTaF%2B%2FFVzwhxZn129Z6xCe1SmQGEgFyGv%2FRqqlt7g8Of7hez7GHnZdArox%2BSXlFnzg435L4zUATyCQP8AZAqEom8y73GONIk%2BdBgs3eZSIfTYNCvdPU84tim4OGD4ldC03twv3L0FhY1CTxoVdNRCdFZKaHG0lTFIz6GbDm%2FFr6cMhg1v8EgVMBNC%2FYQfslcm9BLdZcVhQcJmrg3y4SoYVddcysj2XhnoQT3CV9rOwq0k88r0hdW63mi3PILkAAtkbuiobTmRrqgHmm6m5%2FR%2FgoWBbHYwqMJfMycEGOqUB%2BR7v7S7blRwDEYIDM4yv1UiTymhpMwO8xntoiXFoPL06fM%2F4YSjHRKW3LZG1UN0oHK9Enl2uAn6VwE%2Fsc%2BURCYG2QyjcaPDzZa%2Fznw1MDiRTTA1Rf4XRbmP%2F7t%2BA%2BkKVCiXo1qPOG%2FHFwcJkY4kgw%2FkTV16F5DqQIu3EjhK2dFD36rJE1rh90jOqXPzv3A1HfRkc%2FrWQf5OyeKNPeSaKhwSTYYqw&X-Amz-Signature=68a098978844bd0785fd73278b8e9c0b1fdc687fb871c19186b55aedcb37237d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTKLPEBS%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T004617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDu1FkPJgFvxmiKs9owsvrxXD5YA3uS%2F6D7aYpt52r8LwIgfi1CHjrXp9AP4Snbd4ipnv1r91A2a3I%2F81BesgxHJWwq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDCJ68wXmE21X%2BbvoGircA5bEUzyXa56szrAVMkMKJLm8cBkLKCpsbxsoaUGjb9ew4cjFblbzYhGlQZzup2kXQClz8LCiIeyrIe9vR8RxOlgsb3EiAnwD%2BJ7N%2FQbXJV%2F%2BTbTtByWKTYa1V91xEc%2F41DulKLgC52hxXNLU1EYcT8dQFBLKTU2g4GYSYJzCVUWgXAizKvd9zuhXrhPrXwJVyWr8rmsckLlBw0IUJLCZqTXJOVN%2BgpncVhY%2BD1WAFGQhoblsnVk4CAzFWfMjOq0fw4AeIC4uGur6G6XxyjzJD4Qro%2FmWDrL1vyEt9gqItNYxz1hw6sKsw%2F9b28J6A1DojBal7d4sdOgziPG81Q%2BuRRH6ftrQcXrrg%2F60Ezgwb%2BSfOySGPyxUqeEYaxO8Rf72nGf8Tai3dpmmsaJc6XyIhZh8Pdt8EFwVvwNjifMJs8XZ7xSp1PR4Q2d3qSTvovPadtTUYGKzDQgWHDy25wLn54kXIF8n9wkRFLuWin6Fy52iyQzI8LDffpeFq9foUgHDgiLjb2tUKGzyvhcsqhAIxkol2FdYvfZdVlb3EzGWydJ8hhEw4nhmDDDdPSLmqjcLaZ0E%2Fp4%2F2OvVZ1ElMA4mXDM9vibVaRt4PmoGsnmCiauKeFo1MIIZG8FNxTkuMKvMycEGOqUBBRQMMepd0IV91wus2yLr%2B18PZnWPImLXepFpQ1ljgZZDqhxqZWqNcxLatWzf4N4LXQ0eRTFfJqaZmfM6v2p%2FPuf8S4WFjzNOrtcUzkEoOuqxevgEVv7E0MrQgnCKFAuoo5cmXb%2F9HoBDtEpTaN40wY982p9%2FjcnTXzbUxDXFQsgEeF1F7NK2%2FpCPhFZKw3piW%2FAIJSY5QN2VNBOlHSDnyj6jYmHr&X-Amz-Signature=3faf1b035ba12843cb254cd77180e5a8e5879d7cc609b4cbfad02b8d521b370b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CZVSLK5%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T004611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIDI%2F%2BRW0r7kFJFg2qve5kMqxqQkSXspK%2BB5UM80BbdQHAiEA13eF0QFY0%2FRIj7D4%2Fv2h6nI6in4WfIFeN7NSd1cIr9Iq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKDq28B%2FmsEFXqKfTSrcA5F3JZNrxAVzzG%2FB2k%2BH893ZYRkjD%2FsK3RU7qbRUY0UjVfi3f44cGSmGz8Gu%2BUaQ1qRdEl4dvmGtOxddqueJHNNg3%2BRkGniwslZ2ynXPnKbCnYe8EBc9Kw6pFO5X8B2yiuMiusZcnN59a0zw3jAvxVq4U%2FjquSzCVvjtpVB6frG7dUKRfQW9xK2I0A2b7Qq1ogZdeIvwzM0TfpBM%2BGKWzKiiE6tacp%2BXCuoHEpx45CZ4YCyaM4bLGTEEVGR2An2Z11vSvaLB99q44K5yTnAFY7fbmv7Ygzz%2FTT3R7JTqLaa7zIpnduR5bTtueU1Vcz0D7TmT4lmo%2Fnr4KTyTrix9ET3g%2B2IhVgaLFkGv76Rb6tYa7U%2Bwz%2FReojEFlWdmzWOhr7by5t5DfWu%2FlycYOLMQ6Hg64LJqxLdBcTtClQAbiNZkvpCQ4MqHZaRLj%2Fshx5CvojO7CGaG%2FS8rj3T74euuZbpABmfFe%2F5FHudtrHKnFwMGzenK38c86s89AabzkopMNMkh8N%2B3ttng9yhcpheonzq0MblJyTbDsQNFBoYR0EgxEBIsg%2FHMQSu49zFSrGGbDxwmnpms25IUfK7KBLCt5Sp%2BdQq5l2wdyDYttL6aNqxq%2BzKGDe1v5EooukI0MIzMycEGOqUBdN80KAHl3aJ2j2FPZfSCbS7BXNAQDfDwHJsMiNsuIUzcf9ot5COgY6X9jPEx53RDWcpm9TiNVtRfe0rOxysq2O%2Fg4sdDFCNbXtz8FQlxR8rmDWC9NaIOtRGTcS9YTopYBwjK8hNyU7eANCVykbLVjofxO5bzQOr1aPbUhMKOjLfQ1Hty95DhankX5vk1IUfMjqPhKaRMPXDwHwImnE%2FhoAzf%2F1MW&X-Amz-Signature=44058caf6b2b88759faad8b3eb9d34bf8e82518b25a4c138c67f8d20bff031a6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
