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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK5EXMK6%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T150843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDfjazXshIw5JCFVteUY%2F2UQq02zE6OnXKb2n75L9lW8AIhAN3ArcnKbUPwhKXUNSrdm%2BMBVE3vueblmhDC8aLUO0X9Kv8DCEcQABoMNjM3NDIzMTgzODA1IgwP0%2FSIMniFd3V%2Be04q3AMkJ7HQoBf3XHDu1AWG5EtygmE4wUMoLCZ6oO3lC7nY7xBwn3owZoMgUYWbBoLE0wrNSeTX3Tnz9VJdfOXBvsoYp7nLQSENHgoxrDwyDKZxOvFwLIV%2BdQPPdSUo5s3BdNMTeAW402yYoBLfj5%2FiPnJjcXIendTCObVofszheuiQWgOkB9oCjR43sxBVzHIn%2F6AIBNR%2BQpUV2FFSaS9xWumUyeyPvzI8GADYqG0GsWIgGXG0PVwLyTz%2FlHuwGGAEe79%2B%2FxAWYx4WMRCQSkjCs9lKPg%2FodAnM%2BYnXexy%2B3uNmA91kzb6I6SemABHyfSjp67KjwJV%2F6661WO82T73qIRVCLM0QdU87NZjlncZLAHVYjAvWIFpaS%2BAojB9RoZJGnz5MZC9fNc2X%2Bcwp4OacadkDu4kC9eMUnfP3xGYvWa1BpQKre%2Bu%2BoIi5JkiuXqjLymhuZuBhxPqDEmaglzMnn1vUYlrD7cDQKSfSJy8pH3cw4kZ3MqkrX9dYJVpBi81UwOB9r76RtdCn8VkihPqSy5cRVrbg7XqEwfmQ%2FCE9FMVuzs4uIP7%2B4bihZmTUfzbeI55DXYAZJGLn51h0vIHrNwGyJ9WgopmTIMPPz1MxUOWR2WY9x%2BqcmNjezaYHaDCR5tHBBjqkAcYZNLhuqITQg8svbG15FDUOzFUBq8LGfnV%2Bqid%2Bxb2H4eycYMa2TVRBsT%2BcXLbdukbJO7lUKCcmkixiYrpwFvd9b%2F5T7NQgOxr4zSEJ8P6d57TPA%2BLT4DmwfJrC5b4lmCz2dMuYMaE%2FRDJNGW4JYHeemsut9P8pDOcNQSEdi6csXAfdVWKKJdE2Qg9xWNzjaxDgpJoVoyEggWciXfERzoarpz3l&X-Amz-Signature=474bbf5064850e496bcaab7f4f2e2341af5a2001098666f4163180a436d3ad0a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK5EXMK6%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T150843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDfjazXshIw5JCFVteUY%2F2UQq02zE6OnXKb2n75L9lW8AIhAN3ArcnKbUPwhKXUNSrdm%2BMBVE3vueblmhDC8aLUO0X9Kv8DCEcQABoMNjM3NDIzMTgzODA1IgwP0%2FSIMniFd3V%2Be04q3AMkJ7HQoBf3XHDu1AWG5EtygmE4wUMoLCZ6oO3lC7nY7xBwn3owZoMgUYWbBoLE0wrNSeTX3Tnz9VJdfOXBvsoYp7nLQSENHgoxrDwyDKZxOvFwLIV%2BdQPPdSUo5s3BdNMTeAW402yYoBLfj5%2FiPnJjcXIendTCObVofszheuiQWgOkB9oCjR43sxBVzHIn%2F6AIBNR%2BQpUV2FFSaS9xWumUyeyPvzI8GADYqG0GsWIgGXG0PVwLyTz%2FlHuwGGAEe79%2B%2FxAWYx4WMRCQSkjCs9lKPg%2FodAnM%2BYnXexy%2B3uNmA91kzb6I6SemABHyfSjp67KjwJV%2F6661WO82T73qIRVCLM0QdU87NZjlncZLAHVYjAvWIFpaS%2BAojB9RoZJGnz5MZC9fNc2X%2Bcwp4OacadkDu4kC9eMUnfP3xGYvWa1BpQKre%2Bu%2BoIi5JkiuXqjLymhuZuBhxPqDEmaglzMnn1vUYlrD7cDQKSfSJy8pH3cw4kZ3MqkrX9dYJVpBi81UwOB9r76RtdCn8VkihPqSy5cRVrbg7XqEwfmQ%2FCE9FMVuzs4uIP7%2B4bihZmTUfzbeI55DXYAZJGLn51h0vIHrNwGyJ9WgopmTIMPPz1MxUOWR2WY9x%2BqcmNjezaYHaDCR5tHBBjqkAcYZNLhuqITQg8svbG15FDUOzFUBq8LGfnV%2Bqid%2Bxb2H4eycYMa2TVRBsT%2BcXLbdukbJO7lUKCcmkixiYrpwFvd9b%2F5T7NQgOxr4zSEJ8P6d57TPA%2BLT4DmwfJrC5b4lmCz2dMuYMaE%2FRDJNGW4JYHeemsut9P8pDOcNQSEdi6csXAfdVWKKJdE2Qg9xWNzjaxDgpJoVoyEggWciXfERzoarpz3l&X-Amz-Signature=3854953b603a08d64ef6ec5151836e2ab6c1bfc0f27478e7f0a2c645bcbc4bfa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK5EXMK6%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T150843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDfjazXshIw5JCFVteUY%2F2UQq02zE6OnXKb2n75L9lW8AIhAN3ArcnKbUPwhKXUNSrdm%2BMBVE3vueblmhDC8aLUO0X9Kv8DCEcQABoMNjM3NDIzMTgzODA1IgwP0%2FSIMniFd3V%2Be04q3AMkJ7HQoBf3XHDu1AWG5EtygmE4wUMoLCZ6oO3lC7nY7xBwn3owZoMgUYWbBoLE0wrNSeTX3Tnz9VJdfOXBvsoYp7nLQSENHgoxrDwyDKZxOvFwLIV%2BdQPPdSUo5s3BdNMTeAW402yYoBLfj5%2FiPnJjcXIendTCObVofszheuiQWgOkB9oCjR43sxBVzHIn%2F6AIBNR%2BQpUV2FFSaS9xWumUyeyPvzI8GADYqG0GsWIgGXG0PVwLyTz%2FlHuwGGAEe79%2B%2FxAWYx4WMRCQSkjCs9lKPg%2FodAnM%2BYnXexy%2B3uNmA91kzb6I6SemABHyfSjp67KjwJV%2F6661WO82T73qIRVCLM0QdU87NZjlncZLAHVYjAvWIFpaS%2BAojB9RoZJGnz5MZC9fNc2X%2Bcwp4OacadkDu4kC9eMUnfP3xGYvWa1BpQKre%2Bu%2BoIi5JkiuXqjLymhuZuBhxPqDEmaglzMnn1vUYlrD7cDQKSfSJy8pH3cw4kZ3MqkrX9dYJVpBi81UwOB9r76RtdCn8VkihPqSy5cRVrbg7XqEwfmQ%2FCE9FMVuzs4uIP7%2B4bihZmTUfzbeI55DXYAZJGLn51h0vIHrNwGyJ9WgopmTIMPPz1MxUOWR2WY9x%2BqcmNjezaYHaDCR5tHBBjqkAcYZNLhuqITQg8svbG15FDUOzFUBq8LGfnV%2Bqid%2Bxb2H4eycYMa2TVRBsT%2BcXLbdukbJO7lUKCcmkixiYrpwFvd9b%2F5T7NQgOxr4zSEJ8P6d57TPA%2BLT4DmwfJrC5b4lmCz2dMuYMaE%2FRDJNGW4JYHeemsut9P8pDOcNQSEdi6csXAfdVWKKJdE2Qg9xWNzjaxDgpJoVoyEggWciXfERzoarpz3l&X-Amz-Signature=25af8fdae46b49c885e0281aa6e04296c3e82ad6ff3739d64ebe5e95f2d20b92&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDDVG6Z5%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T150846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIH4HSnFHlHqFHAWdrz7%2FRMxcT7uTf0paTCwxCJ7m9uLIAiEA8bCxvdzPvxLZdWcgKsztPSdLRBYtSgFqYXYXfD5aie0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDPtJ%2Bh3Vh3J%2Fc6ODVyrcA66Cl7eYOlXTsARH3Lu72dMvyfh1eH%2FHSD1H%2F1GMp34PkqAethDO9Md5M6PsHrJxG5pGV8KNYhVk9HL%2BEQMcdbR1x6yDCWZE4cfH6pDvjrLOnUGo3jM4%2BOWPnvxGgbDrvhtL1ZMsjIBAzalkpgYCL%2FzNS%2FlepASBR0bmSYTRkldES%2B1GqNFVtuSIuq7KTdbrfY0sE%2F4zr3cd0dVqjUaoI2fzXH%2FVKPcIDPE4nRIxudk%2Fe6g7oThhHW14n92dmrjdro6HyKlCWFpM4wyZ6W7yblRQvyBOgUP66JuufNF%2BVBBaS0RMCcw1RiALfqjd%2FHbGXM43rmWFf%2FTlxtI0aERBQ4pl80AoQhU879HN3ilGH6BOzgp9crjVZdAwHGulmjvRfRN6rK3CQGQgpDZMkOYK6iFFuUTsVyDw4Z%2Fmlbd5JjVBP44bZ2%2BSCtGvlUrLelMF2vGLiQibaFIMyD68LjeSLyBEKMKxWxaKoP3PCUY%2B4Y0SV5hINl54XSv8bCdikMFhcphIvnbLBuFQ9r6DfEwl%2FL1idYdm%2B8RCa0N8HzTuoysCCOXXlI5yO9kNXhseeqv97tFq6ujMji6Mwu%2FhE35zyrzYOe0rhDyfoi4FvDTrbV5O96acxg1SRIJtTuToMPPl0cEGOqUBM0CeAhymdBpCZif3ct%2F3jtJV2aFdoFXVjbFpWpfrvVTLGTOaBWKnYFs9RmviQ2M0FHFT1IB9DDzGkCUEijaIyw%2BEHoIdf%2FThW6dtyPoamMldXU3COtIep4qQvLS9%2BGCv%2F2YSd4dzvdQSTkkZop%2FX1wik95gbta%2FhlRXJ%2BMoGTqbnc1P0lcEmn8DI4Yo2%2FlCEwqaaIOynGuqx1uyjf%2BzC%2FTdcb%2F1i&X-Amz-Signature=58027682a7d1feea3806853aca8a2a344636dabc814d2e7fe9d6b9651a9b2aac&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSANIOU3%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFxcYAOdtt8AG3cLhpkL6bREVJ9JjuYbTHM6fcsf0d8pAiEA4Glmj4jHaHzdlg9de9pL9jyDxGratYIT5FsTruLSwIsq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDCCChl3mW%2BV6sLwJoircAyBSJogCUz995jvhJlGCEq1u%2BI5%2BRXD4uM2pzGDnlhRDW6jQJC%2BJeUtwJ4KqZsA8DbJX13KGEbTO6cPM5%2BZv1HStbEj1I9rLrg%2Bo9kV%2FU6hYTJ7OH4T26oK6ZYQInESE6F804E%2FYOv8ENxLmNQ1imasQGZLnp6I5Pcw%2F3L079%2BxD1PGSHVM%2BDwTdEhhasJ4haB2PlQUvBvxazZjBnKNXMvnjmQvr7qQ1mRqZDCGcVsksqTKOKDce2Ni0u8dyUGZVGBbQGC8BHna0E0xNAi%2FxwfXHISbmklYe0tqlTABXsvFi1Qxc9zT0%2BriHtRXEMrNf8jxyU9%2FSUXTejVfqIsjgJw5CAV2m5c8ePN7znrV1203LNU8NxAge3RmniU8nHxCOzV2YHNn%2FYWEefyYKLkm9F9CH%2BnegYxRVX3r0l%2FB67%2BEbulVmV2O04XcEQNKVcVrAyjf3qQrHnVlpESZ%2FMPYRl45bgpp24aBkI%2BP8uOScalexarxPtnbAzzJB8R%2FVihsKG7ECsRM6JPbVAkEXKDzNerQJW06wyP9cCI9DFSWZ6oOdDne4Kg0sK6%2FASGaO9qvIFqkHiUIZlvq2pXGyzPzgXPZHTiOo6NJqa1t91WyLPDljTtMG0T6%2F2sVRwHtPMMLm0cEGOqUBAon4iKAvdp6XTJ6k8ZtuYG6x6V%2Fmp%2B4XVEAsmuYPHeBQu5GiVMP5eQt%2FEpOacD0wmFXPk17TP%2Ffe3XiQ0YjslvjUQBMZ6tMeAENk%2BHU1klQ9opN419bOBMlKPIbm7%2FXSjxTi%2FrRwWnDEc3FLrNLFYBqsJ3sEBkmTHTdDYfRqos9dhhsgAX0fgi%2FLFhxnODcMoSqIA4UZHcRpucRZp6vUl0vjj9QW&X-Amz-Signature=449734ad6b30110872e97718d7d7983d179345fd547b963c12194dc65838a402&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK5EXMK6%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T150843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDfjazXshIw5JCFVteUY%2F2UQq02zE6OnXKb2n75L9lW8AIhAN3ArcnKbUPwhKXUNSrdm%2BMBVE3vueblmhDC8aLUO0X9Kv8DCEcQABoMNjM3NDIzMTgzODA1IgwP0%2FSIMniFd3V%2Be04q3AMkJ7HQoBf3XHDu1AWG5EtygmE4wUMoLCZ6oO3lC7nY7xBwn3owZoMgUYWbBoLE0wrNSeTX3Tnz9VJdfOXBvsoYp7nLQSENHgoxrDwyDKZxOvFwLIV%2BdQPPdSUo5s3BdNMTeAW402yYoBLfj5%2FiPnJjcXIendTCObVofszheuiQWgOkB9oCjR43sxBVzHIn%2F6AIBNR%2BQpUV2FFSaS9xWumUyeyPvzI8GADYqG0GsWIgGXG0PVwLyTz%2FlHuwGGAEe79%2B%2FxAWYx4WMRCQSkjCs9lKPg%2FodAnM%2BYnXexy%2B3uNmA91kzb6I6SemABHyfSjp67KjwJV%2F6661WO82T73qIRVCLM0QdU87NZjlncZLAHVYjAvWIFpaS%2BAojB9RoZJGnz5MZC9fNc2X%2Bcwp4OacadkDu4kC9eMUnfP3xGYvWa1BpQKre%2Bu%2BoIi5JkiuXqjLymhuZuBhxPqDEmaglzMnn1vUYlrD7cDQKSfSJy8pH3cw4kZ3MqkrX9dYJVpBi81UwOB9r76RtdCn8VkihPqSy5cRVrbg7XqEwfmQ%2FCE9FMVuzs4uIP7%2B4bihZmTUfzbeI55DXYAZJGLn51h0vIHrNwGyJ9WgopmTIMPPz1MxUOWR2WY9x%2BqcmNjezaYHaDCR5tHBBjqkAcYZNLhuqITQg8svbG15FDUOzFUBq8LGfnV%2Bqid%2Bxb2H4eycYMa2TVRBsT%2BcXLbdukbJO7lUKCcmkixiYrpwFvd9b%2F5T7NQgOxr4zSEJ8P6d57TPA%2BLT4DmwfJrC5b4lmCz2dMuYMaE%2FRDJNGW4JYHeemsut9P8pDOcNQSEdi6csXAfdVWKKJdE2Qg9xWNzjaxDgpJoVoyEggWciXfERzoarpz3l&X-Amz-Signature=d9a24bdb634eb755698879bb81000163b9fe52bc967c8e03ccc33d90dd7dc5c4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
