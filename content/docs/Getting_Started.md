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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK3N3TW3%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDequcPcG0kQqdwyl4eN%2BdgQVndYSUwbpTDN24Kg9LFuAIgJtb0q5z10KOisbIDZ8NrdP7uXcIFN4wHRULxE1nxpIMq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDKzuLxTcPpZcUzBROircAwB9kngvzGyLatEW7GX3j8aPtKqlHwwOYDsgM9yMzRv7tMBPU1PAIIqm2dysxVYv%2BXV2pQRW1%2BoOOU5mfFNYQjRlU70d2bFVkPAQg1KoS4izSV45mwH94o6PfyRMjuUFsmPRFi00cesIDUysiRdaGeA961GXoBPGJ3sAHNvSwxuDpS1EZOFrpF4uc%2BEEfNCb%2B9vgTqdQtXxZNjAbWdL1E8cIZQH9Cprhuf43XKdRyW08eM0MiwbLo%2Fdm%2FEyL%2BD1qlRxBLJWb8cs6oVzn8fNd%2BJvSHbugJyvCYSHXZcBIurTBLF7NYItQlfwmQGP8dSrJPkqDhEhYAAaQ2ti5kWSOM2P1cF8d%2BSf98UUOEYXz59CVyvIp2KnYhAqWMupxDIeoatIijPZQyAU%2FzNRrUm8P6EY8rtq%2B60so%2BPHtUOo9A7bSQRnCFa%2BhUon%2FoU75aYKBwAcXv9MyPmq9dS1vlvxc2AzPJgk8nleA4GhD%2BRGzetwSNMbVWFPXoMq0Fwr%2Bt9xlzLMMG3NUETE3tjHgTPI3HgcYudSj%2FQG38Wrdd%2B7mGLxxfZ5DeyOrgLsbEBoeVWgOk05t2p23KT4z%2FKi97BluJ52cbqkoe9MbQOrE01BxkV0CoK9UTVvsVSVuiC7BMPnB%2BMQGOqUBrgHeoKZTJ%2F9F6BfOyowIIBJK0lGMrGXfMdOe%2FSMleKOPmWQ6182Mm5UuDJpQ4vq9u9IFebPiEeSBeCHLYpfYKJIPfOmlcW6AZA%2FGbMcJrC6edK3XxXnWW5EH72LLm8O8xZGDceInSUA41mnIaThZUHvxt4%2F06OtnSr1237o6gSGwdhHwxLrZXbDLlZMDvLHB%2BXy5omo0om6cq8ZiqcTc5milew2q&X-Amz-Signature=cf13b2f83c31724980b0f80b05a35c0e71d15010a507c5899c780eca6fc83726&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK3N3TW3%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDequcPcG0kQqdwyl4eN%2BdgQVndYSUwbpTDN24Kg9LFuAIgJtb0q5z10KOisbIDZ8NrdP7uXcIFN4wHRULxE1nxpIMq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDKzuLxTcPpZcUzBROircAwB9kngvzGyLatEW7GX3j8aPtKqlHwwOYDsgM9yMzRv7tMBPU1PAIIqm2dysxVYv%2BXV2pQRW1%2BoOOU5mfFNYQjRlU70d2bFVkPAQg1KoS4izSV45mwH94o6PfyRMjuUFsmPRFi00cesIDUysiRdaGeA961GXoBPGJ3sAHNvSwxuDpS1EZOFrpF4uc%2BEEfNCb%2B9vgTqdQtXxZNjAbWdL1E8cIZQH9Cprhuf43XKdRyW08eM0MiwbLo%2Fdm%2FEyL%2BD1qlRxBLJWb8cs6oVzn8fNd%2BJvSHbugJyvCYSHXZcBIurTBLF7NYItQlfwmQGP8dSrJPkqDhEhYAAaQ2ti5kWSOM2P1cF8d%2BSf98UUOEYXz59CVyvIp2KnYhAqWMupxDIeoatIijPZQyAU%2FzNRrUm8P6EY8rtq%2B60so%2BPHtUOo9A7bSQRnCFa%2BhUon%2FoU75aYKBwAcXv9MyPmq9dS1vlvxc2AzPJgk8nleA4GhD%2BRGzetwSNMbVWFPXoMq0Fwr%2Bt9xlzLMMG3NUETE3tjHgTPI3HgcYudSj%2FQG38Wrdd%2B7mGLxxfZ5DeyOrgLsbEBoeVWgOk05t2p23KT4z%2FKi97BluJ52cbqkoe9MbQOrE01BxkV0CoK9UTVvsVSVuiC7BMPnB%2BMQGOqUBrgHeoKZTJ%2F9F6BfOyowIIBJK0lGMrGXfMdOe%2FSMleKOPmWQ6182Mm5UuDJpQ4vq9u9IFebPiEeSBeCHLYpfYKJIPfOmlcW6AZA%2FGbMcJrC6edK3XxXnWW5EH72LLm8O8xZGDceInSUA41mnIaThZUHvxt4%2F06OtnSr1237o6gSGwdhHwxLrZXbDLlZMDvLHB%2BXy5omo0om6cq8ZiqcTc5milew2q&X-Amz-Signature=1f68ac9bbe0a97613dd92595d667847ff7b39871894578ca0c61eddedc6ddeec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK3N3TW3%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDequcPcG0kQqdwyl4eN%2BdgQVndYSUwbpTDN24Kg9LFuAIgJtb0q5z10KOisbIDZ8NrdP7uXcIFN4wHRULxE1nxpIMq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDKzuLxTcPpZcUzBROircAwB9kngvzGyLatEW7GX3j8aPtKqlHwwOYDsgM9yMzRv7tMBPU1PAIIqm2dysxVYv%2BXV2pQRW1%2BoOOU5mfFNYQjRlU70d2bFVkPAQg1KoS4izSV45mwH94o6PfyRMjuUFsmPRFi00cesIDUysiRdaGeA961GXoBPGJ3sAHNvSwxuDpS1EZOFrpF4uc%2BEEfNCb%2B9vgTqdQtXxZNjAbWdL1E8cIZQH9Cprhuf43XKdRyW08eM0MiwbLo%2Fdm%2FEyL%2BD1qlRxBLJWb8cs6oVzn8fNd%2BJvSHbugJyvCYSHXZcBIurTBLF7NYItQlfwmQGP8dSrJPkqDhEhYAAaQ2ti5kWSOM2P1cF8d%2BSf98UUOEYXz59CVyvIp2KnYhAqWMupxDIeoatIijPZQyAU%2FzNRrUm8P6EY8rtq%2B60so%2BPHtUOo9A7bSQRnCFa%2BhUon%2FoU75aYKBwAcXv9MyPmq9dS1vlvxc2AzPJgk8nleA4GhD%2BRGzetwSNMbVWFPXoMq0Fwr%2Bt9xlzLMMG3NUETE3tjHgTPI3HgcYudSj%2FQG38Wrdd%2B7mGLxxfZ5DeyOrgLsbEBoeVWgOk05t2p23KT4z%2FKi97BluJ52cbqkoe9MbQOrE01BxkV0CoK9UTVvsVSVuiC7BMPnB%2BMQGOqUBrgHeoKZTJ%2F9F6BfOyowIIBJK0lGMrGXfMdOe%2FSMleKOPmWQ6182Mm5UuDJpQ4vq9u9IFebPiEeSBeCHLYpfYKJIPfOmlcW6AZA%2FGbMcJrC6edK3XxXnWW5EH72LLm8O8xZGDceInSUA41mnIaThZUHvxt4%2F06OtnSr1237o6gSGwdhHwxLrZXbDLlZMDvLHB%2BXy5omo0om6cq8ZiqcTc5milew2q&X-Amz-Signature=b8bc43f17fb9a7b742891fa153aa9c797deceacc8933b9bca76707c1af84c349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJLDZCCH%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIHpNb4rPMQ9QapvzgLFn2Sz918Ui%2FYwJiIBrOQk5C3B2AiEA7KuutX%2F2b5qsYHyKfNsdeyy3%2F%2FrkorTts5wSWNSnkxAq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDGlZVL0h31exAIST4yrcA7MhwAna2mjNNhr2JHmdNVPooHEOTdQnaemItCCDrUJ%2BlEptImMySrct565hwwTmYIV2G%2FKckeeR4EO9yKSgi5duoAr8Qp8izQKS%2F42RXo9m%2BE3QdqdD%2FU%2B1qh94fHlfJ3DFhoJj%2BuXgQPFBrUQKuWW2gs16glHV3gmrM%2FASeViXkMGYSQzVOIui1FljVCbfGmOtwrq%2B5kR2B3zrn4dYmalgMIQZaguOmkpUYPLRTF2Co8L6aMioEyJfFTKM%2BAAZgDN9Vn2YBnB8hJOufyxUO2QBc6U2raMU0eFj%2F8asc%2Fvll0sCKT1HAErPEnmsYuBh7ijxvKb02puRHnH2qy4H%2FK%2FMKq%2BSw9FWLj26ZT%2BicQeoz6P3iLnkAIIr67IaXgKf1U61oU1E0KaxsKFOSD3k6NFWZSp%2Fs5ZM4qGwgkZFhV2rQJBvcXco9n%2FthDhkwRAKV43uuJKy%2F5KtCqQkw%2BPRbbrjWLnTPX94jQZ2LeL2xgq6uWSZcPJAiiVkD0L%2F57sWz38aXP2hnwp49ZMgD7fx16%2FuI6K%2Fr8BdlUpak60plDl37Eca8VXLPJ0Rr%2F527xvg7B0sQe0NlT9%2F7rAmz%2BTpW7ydKPg3%2FU1WiRLKubq0VELNjxgJ0xwHQK4sVgRQMOrC%2BMQGOqUB9hdsGogTRZqfBP87T7J9wo%2ByH7gPR3nbTKUsTqnH4rWkU%2BAQo1imPkYYHoMjl05J30YnWw1NZO2wmMzvhaO2hhJm1uGcj%2BJuB5r%2Br8vcEZDo1jmw0ixBYa%2Bfwegg1650VC8rDWtUn%2BWDZoWLYEMD7QIwN4C%2FBz27W1KgKl3DQBhR74ri5mMkXsLwpvIpRcfpE2lGGl4KbJpj%2B6rNADSGi%2F9L7bIr&X-Amz-Signature=180b00ddd3ee61f59cbe930e5919d5a2c59bec61c48b70e37105bf7bade6d4fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFG7AKOG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIG7CF4vD43Ia%2Bh2jkXEICEyBtGuQM7xMI%2B6uFsIMfm8wAiBUXGgZRnlB7hqhhG9eCUdwphns%2BDPOZAKZiVICZ8pmqir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMgUROeFjE4vsZ2PwOKtwD6qrgIPfMk7VC89E9GpLvREGaGM5nN3HTOoD0tyVpwHWulb0doEjOWTp73fCKgPUDLBNmO9l%2BpxVzViAWhCuMtZx3GiKv%2FgPM%2BfYAxQnIFHxLYk4jU2R9zAT%2B8FUleW1N68JEP%2BY1RzimH7SQR6wj5%2FPg%2Bi5iJkBW4sqU6EWi4XeIZa2hQVzguUMiWBzhbwh%2FGA91BgQLlC%2BiPv1ixWmKZ9NSBAPoZihH28hSZPPOqh79iYjVEXW7r4TvcbPB7dg0fe16ZQByrYx3YEkZUYfB1FDBmT3tyxlNtbidaH3RqTf6QtKeacW8bMkroZ%2BNkqyISeuxOSW1pXyWJqjdmwuwbGAXjZLwM%2F4dItydlIHIbUC%2BYeynf8qPTMphM4k7d1RHJjwagDKW9IayJMKbv%2FLvxgoAiArNQaeP1GVH3RXi1zO4NpF5o0iR6l13qclTUeQxHjLrN7rBs3EVb5%2FfJ5Mr%2B3kcAvZqeDnbZKQK7EzfLkl2css%2BGEI6sMlVRW5CdLIYY%2FuId1Z%2FPlVBEBVOkOj9BAYeFYjn5G%2BYKeCw4BK4mOjXFuvepfl3l1C7ewpzCTLO0cQpk7n41j15Wiw0KHPlItQbwWqPB3ePn%2Bhe671ncztvJsDzKsGcf2vMB9gwrsL4xAY6pgGHuqtuV5aj%2BNnd%2FvKnyFYNuFkTBzO%2BqG2S6aytQINNeG22sTTb1cIPCJ9vlvUEZKsDPGlw7L06gbQY2baa%2Fz%2FuIH7dqgCLBllZ7%2FYMlu%2Bj0CjeF9g5e28eV69RhGjxN6xYrvVWMTlOI%2BUOo1H7I%2Ft1%2F7sl8%2B%2Bhqowqvcc%2FQIPuyFt11ns2oJnZWhC8pAZp2MSXeFkwhjQ5nytGTjw1lNRDesw4IKxj&X-Amz-Signature=84f37661b8a5d8e6c83794692cb1dacd3ccdc2ff4abd1f6f7824db73f35544c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK3N3TW3%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDequcPcG0kQqdwyl4eN%2BdgQVndYSUwbpTDN24Kg9LFuAIgJtb0q5z10KOisbIDZ8NrdP7uXcIFN4wHRULxE1nxpIMq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDKzuLxTcPpZcUzBROircAwB9kngvzGyLatEW7GX3j8aPtKqlHwwOYDsgM9yMzRv7tMBPU1PAIIqm2dysxVYv%2BXV2pQRW1%2BoOOU5mfFNYQjRlU70d2bFVkPAQg1KoS4izSV45mwH94o6PfyRMjuUFsmPRFi00cesIDUysiRdaGeA961GXoBPGJ3sAHNvSwxuDpS1EZOFrpF4uc%2BEEfNCb%2B9vgTqdQtXxZNjAbWdL1E8cIZQH9Cprhuf43XKdRyW08eM0MiwbLo%2Fdm%2FEyL%2BD1qlRxBLJWb8cs6oVzn8fNd%2BJvSHbugJyvCYSHXZcBIurTBLF7NYItQlfwmQGP8dSrJPkqDhEhYAAaQ2ti5kWSOM2P1cF8d%2BSf98UUOEYXz59CVyvIp2KnYhAqWMupxDIeoatIijPZQyAU%2FzNRrUm8P6EY8rtq%2B60so%2BPHtUOo9A7bSQRnCFa%2BhUon%2FoU75aYKBwAcXv9MyPmq9dS1vlvxc2AzPJgk8nleA4GhD%2BRGzetwSNMbVWFPXoMq0Fwr%2Bt9xlzLMMG3NUETE3tjHgTPI3HgcYudSj%2FQG38Wrdd%2B7mGLxxfZ5DeyOrgLsbEBoeVWgOk05t2p23KT4z%2FKi97BluJ52cbqkoe9MbQOrE01BxkV0CoK9UTVvsVSVuiC7BMPnB%2BMQGOqUBrgHeoKZTJ%2F9F6BfOyowIIBJK0lGMrGXfMdOe%2FSMleKOPmWQ6182Mm5UuDJpQ4vq9u9IFebPiEeSBeCHLYpfYKJIPfOmlcW6AZA%2FGbMcJrC6edK3XxXnWW5EH72LLm8O8xZGDceInSUA41mnIaThZUHvxt4%2F06OtnSr1237o6gSGwdhHwxLrZXbDLlZMDvLHB%2BXy5omo0om6cq8ZiqcTc5milew2q&X-Amz-Signature=47f93662f2fa75e613a3d9621627f2ff56d278aff20cd413d4a32a30b37f3c98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
