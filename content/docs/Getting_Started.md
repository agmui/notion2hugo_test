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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFVHE3HP%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T170657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDz6yIX%2Bq7iS8c63BkQf4BJMqUE7MQifnnlciai%2BxWj9AiA94EIrnPLEJyQu%2BI1jt8ucWV7HuCzpYj54%2FZoEPcmMXyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSUSCiKZ2PlZAjMyZKtwDC%2FLW%2B6W%2FnWfx%2BU5bU14TGPXfsgcR7P1jGjEfC3Ss0PeSgeDgpMAqb428N%2B7qZcpt9MVeW5r5kamioRnVCKTSN%2BPxylTrHsEFiZNK85krZz3S7pIHE03I78lUWujtZzpEbtpsBSKEl4XQFaLO4sPJAPYHoGHgvUHx6%2FoNl4zKVnxZEsOy0oBRtqGlg9jTFxFvoW%2Frj%2B3pB7nIM6PDO23XfQxCmHQjQqroOumYIwpCu9a960VvKmlKmUBrN3Xl5f0RoBnMzyH%2B%2FN8wBO%2BFNN%2Bh19rdtBLOX7i5jzZ3hNUZopbP7DijGziprMqHcw%2FJptfhOfi9o4eaA83c%2FFEC09Luo%2B662q5h7ietdpGvBYZ77NPXmuX6hor2bIlNEWkf36Ng2AtGduN0K1WC0foaCbJiu7my%2BXX5uiQNufK%2FM6JM1PUXKN%2FovyVvnhj7IU7ypUHZTA9GWSw2nVYRnKcPhYVFanwwlCPySQDbyrNtO4i9t5XjdkeQYzlxV%2BgmwheLKVMKjwP99%2FDz8ndT7RGs1HojqjIT2IwgmNWen%2FxCtfGM3wNbe16JVEGDgAoKL36Q4FpIP7lnVkgOudFpgK9MbHQMTRR3AYXvQ%2FsbZhxa%2F3vOM3daDnbUn%2B3fRbq6CtEwgs6HvgY6pgF2V2epUBGtMSXXLESMjPPiiKwzVRXTklabSk0WvVN152OXE4OwhfIKGztLiUL8j%2BSTb1xYVMlwxOo9AHU05O88cloHk6JpZpxDA3I8ynf8B%2BogAKhBcY%2FPasBdl69gQEIrcoUyIOTU9ffVgY32TRvhwmfPN28CPMOCCpQRYSh6MMR2uzvM8Iil2mOxIkTAzcWKyOS7xV%2BuqJw%2BpJwzzhyHqHkGZDg2&X-Amz-Signature=b0bf6a8f2b2d3ffe84cb5c62b56e6794cdaaaad6fd6249c1a200dcca96dc82bc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFVHE3HP%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T170657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDz6yIX%2Bq7iS8c63BkQf4BJMqUE7MQifnnlciai%2BxWj9AiA94EIrnPLEJyQu%2BI1jt8ucWV7HuCzpYj54%2FZoEPcmMXyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSUSCiKZ2PlZAjMyZKtwDC%2FLW%2B6W%2FnWfx%2BU5bU14TGPXfsgcR7P1jGjEfC3Ss0PeSgeDgpMAqb428N%2B7qZcpt9MVeW5r5kamioRnVCKTSN%2BPxylTrHsEFiZNK85krZz3S7pIHE03I78lUWujtZzpEbtpsBSKEl4XQFaLO4sPJAPYHoGHgvUHx6%2FoNl4zKVnxZEsOy0oBRtqGlg9jTFxFvoW%2Frj%2B3pB7nIM6PDO23XfQxCmHQjQqroOumYIwpCu9a960VvKmlKmUBrN3Xl5f0RoBnMzyH%2B%2FN8wBO%2BFNN%2Bh19rdtBLOX7i5jzZ3hNUZopbP7DijGziprMqHcw%2FJptfhOfi9o4eaA83c%2FFEC09Luo%2B662q5h7ietdpGvBYZ77NPXmuX6hor2bIlNEWkf36Ng2AtGduN0K1WC0foaCbJiu7my%2BXX5uiQNufK%2FM6JM1PUXKN%2FovyVvnhj7IU7ypUHZTA9GWSw2nVYRnKcPhYVFanwwlCPySQDbyrNtO4i9t5XjdkeQYzlxV%2BgmwheLKVMKjwP99%2FDz8ndT7RGs1HojqjIT2IwgmNWen%2FxCtfGM3wNbe16JVEGDgAoKL36Q4FpIP7lnVkgOudFpgK9MbHQMTRR3AYXvQ%2FsbZhxa%2F3vOM3daDnbUn%2B3fRbq6CtEwgs6HvgY6pgF2V2epUBGtMSXXLESMjPPiiKwzVRXTklabSk0WvVN152OXE4OwhfIKGztLiUL8j%2BSTb1xYVMlwxOo9AHU05O88cloHk6JpZpxDA3I8ynf8B%2BogAKhBcY%2FPasBdl69gQEIrcoUyIOTU9ffVgY32TRvhwmfPN28CPMOCCpQRYSh6MMR2uzvM8Iil2mOxIkTAzcWKyOS7xV%2BuqJw%2BpJwzzhyHqHkGZDg2&X-Amz-Signature=be0536a1343bf9e460f548fb35281b9dad9e1b7ef1d19dfd43d4653b84339240&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MUTAPP2%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T170700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGSvhApemEgs%2FunV6XLD2JpWOC2BJCzCa3ApBz6CEjtIAiBUIO2AOqCU9qzuOxjS%2FUZ7yZBxFRFJu8HTvCpCLZBQniqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUN8CSmjP3qPgYXueKtwDu3d44MXoF7oflDYHwqqnsvisD2LnqN4dc%2F2TbmB7k6pHP4VA3%2BxWcKzxJ1a%2BAKyErCFzm6a3FEa7dsZndmLHsSFRxcZBDURTtceC8k8KYz1Kp20UtwDDzFRZPABQPJz74YWzwFcgTS0RO93kl6FyOi5tkK%2Frf6Z9Tg8xNfVxY1IGQ6uU0SxcNAmsSddHZPxyBRul2hrOyC4mvtTHeTPzqAdqT9MgcWPhg8HK%2FRZhOoyTFzeF7ZV3F4fvweL46KrzN4tsIfOSIj%2F3BsJ40UqGUpSbflwwV2s0QsJF8ESV%2Biprlt7dTZaB9sdqgS27xlS1oUpgzoZyuSW8i8kBCr3xGkkX%2FIF8SX1OZTW8nKjSg73B3H60fkWxq0KJ1b%2B12Z5Vlu98bgAOe%2BHh79XB2K6WyOpGs4XJ%2FI%2BTbjkWwzB8Yn3IvzLtzPTey2r4Dp2QcMiTfB9Z6WAvXtYSoubRtwhpb127dSPsK%2BZII%2BpuWFydXB1Fzeu66gVrH43akxTozPNCSR05WWnR91uatsZcvrE5UmbddMPeIW9o80BxF0ccSdqlkyFu8WysEjXvsPgRPkNBnziXP8UAkl6O8Hw33fYKkWgcC3XU43%2FEtae9QgclMmd4vf19DOtq0ESAhHIw%2Fc2HvgY6pgG7UmaOYhktBOyLWrORv%2Bw7KIHYMUOhg%2Bb6SMB889pHqy1jMBhn7ZsCZzhPgr4NDOidL9swPog0DqstouFFgMUkmxhqxM61%2FLHDFJCpC0bbPRkreKlJHOWO4MyAgrf9%2FxWcGGvYEVhW8lcCDutBrfdQMr3Ey0alaIAT%2BwWn92oL5uRKyLcUX3owf2aPuE7Ubzd7a0BnxPCvB2aeVR1iS0TW5pMBFbrR&X-Amz-Signature=075cde1d83fdf441bf6cfaee191a0bf86e03ecbfd37c52b836f50d2b9182764f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPXKC5SO%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T170700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDTru24R7bgCxm2PrItnCe0cS4zz6GjwkKUvHh%2FHTry%2BgIhAMtmcZdeaTKk8A4Zm3dnUK8n5qDV03pVSmcur4BVqQv5KogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynIpAjtA8rii8B7Cgq3AO49RybcUVwCFPq5k2t%2BIudVMfsw4iKwqvYBA8hAwO4fabYTyO6xx3lvyObH2Jvy%2F2t74tfMB6tO6DUHNKX1%2BD3AQgkRbd5eCJ7HTTfSLhSBLQJyQx9wyB%2FDV6%2BrPkClw%2BQ6RsjvexAylEaBTi0YFWUYwMiqU1Le3COepH%2FUgxiy8ZT1MkR1mVsKNvu7pCiVsUVJHp5vTgbz5r8KM7PGK2OaOs0uzN6UQKi5zY8Y4zYy2NKBG505fK7MyY0%2BgX%2BRPnvU%2B15LAHfJoFhsaKIMTPbBj%2BxT6wqR4nk6TTZJg6hzM5PtpM9y%2F2d1dBpv0KPxd9gdzImqmrsoz9%2BFTr7bIOlcUhjEbKJv%2BER0unWtwSDSy6dD9HzPq55IoW%2BZdPZfP4Z36wyFxN6NhU9%2FYtr0N%2B1UxismKZZ3%2FMNAh4fOYpI9MUPrBRWfd7O041wyswzD9Ndy23ioZRXgbkDnOC737y1NOY7AbA0r0uvckvK5VOkbMFa3NnNlf1jc%2BcgPAQxp2IantB9HKS8sgxpu9NYiNbn6gvm0iwO63Jhjp0YBFVh7aQSvMbZc91ylMllNI0t6QgQt0TUFgscGQ3ZwTF0DE%2F14Ua%2F8lZDOJWWcmjGXAebUvoBA76QGy7i7L%2FZXDDezYe%2BBjqkAXDKZN30yjSCGpsDl%2BFJZ6J9fHHS9vzzmRC%2BGzrFiAKq3mzTOohCR6BsK66OkcnJgnyu%2BF1hRRFVjm15WhCnum2dp2CxiOwpOfOQhxMyodjbmtEdelesWOsgxYVQQzUkhTO77pN66lQ3r6uwQG9nwCVihST%2BCvUzZx9eVlu5IodsVb0KjILIY%2B98C5jwiBS%2FCYClacwJk9YLonnkbcR%2BreihBUma&X-Amz-Signature=f927302b7ca267cb535d641641a9945a12c8bd609c969759fa24d5752e90cc00&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFVHE3HP%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T170657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDz6yIX%2Bq7iS8c63BkQf4BJMqUE7MQifnnlciai%2BxWj9AiA94EIrnPLEJyQu%2BI1jt8ucWV7HuCzpYj54%2FZoEPcmMXyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSUSCiKZ2PlZAjMyZKtwDC%2FLW%2B6W%2FnWfx%2BU5bU14TGPXfsgcR7P1jGjEfC3Ss0PeSgeDgpMAqb428N%2B7qZcpt9MVeW5r5kamioRnVCKTSN%2BPxylTrHsEFiZNK85krZz3S7pIHE03I78lUWujtZzpEbtpsBSKEl4XQFaLO4sPJAPYHoGHgvUHx6%2FoNl4zKVnxZEsOy0oBRtqGlg9jTFxFvoW%2Frj%2B3pB7nIM6PDO23XfQxCmHQjQqroOumYIwpCu9a960VvKmlKmUBrN3Xl5f0RoBnMzyH%2B%2FN8wBO%2BFNN%2Bh19rdtBLOX7i5jzZ3hNUZopbP7DijGziprMqHcw%2FJptfhOfi9o4eaA83c%2FFEC09Luo%2B662q5h7ietdpGvBYZ77NPXmuX6hor2bIlNEWkf36Ng2AtGduN0K1WC0foaCbJiu7my%2BXX5uiQNufK%2FM6JM1PUXKN%2FovyVvnhj7IU7ypUHZTA9GWSw2nVYRnKcPhYVFanwwlCPySQDbyrNtO4i9t5XjdkeQYzlxV%2BgmwheLKVMKjwP99%2FDz8ndT7RGs1HojqjIT2IwgmNWen%2FxCtfGM3wNbe16JVEGDgAoKL36Q4FpIP7lnVkgOudFpgK9MbHQMTRR3AYXvQ%2FsbZhxa%2F3vOM3daDnbUn%2B3fRbq6CtEwgs6HvgY6pgF2V2epUBGtMSXXLESMjPPiiKwzVRXTklabSk0WvVN152OXE4OwhfIKGztLiUL8j%2BSTb1xYVMlwxOo9AHU05O88cloHk6JpZpxDA3I8ynf8B%2BogAKhBcY%2FPasBdl69gQEIrcoUyIOTU9ffVgY32TRvhwmfPN28CPMOCCpQRYSh6MMR2uzvM8Iil2mOxIkTAzcWKyOS7xV%2BuqJw%2BpJwzzhyHqHkGZDg2&X-Amz-Signature=a980ed00da6eb53414491620430e9abad4c6da1c2a9c01b231a87cb90b3dcc86&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
