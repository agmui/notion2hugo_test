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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USLAFA3E%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T004813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQC4npj0had%2Fk4atdq0MjIS%2FiwTH%2FWu%2BVQDYURZYZa%2BdfwIgbJw%2BXJKXagupGxYSfwlF6xJgeckdtGxNd9AX18BIIVsq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDLpCtY3iSJW7VL4M4CrcA6glj3cZDzxgb%2FxmKdr4AfFU64JSY1L%2F9jWv%2BTla9IE7SJ6MXUKXtGslifyL70y5ZUp52wtHMKOFHb7X6aaOeFtFsKHA39nHvwwPooFJdWendice9zakOr3Nj8MQVreFvYewtOAxH%2BjEXeqYTnKJFymWNGlnFmVX%2FoVuUk6auAjuaCcYrVq2ylUxKC2AgCG0p1sRASpwczFp%2FdO8gliaJjdPi%2BtLgdYttoHY0Caol6JQyJnkxWLAN69k3MRkNA6AAjIPmh1Id3yyeQijpz9UE%2BdgsArUdFECtXK0v82eXHuCeoDXFQefrTkimBNiJkYr6LO8Uk5sINqcICcPcCkq%2B1UN2O4x2udtdzS6itg2qe4uPQVqupyW4ROxIkWA3nEHTyR96jw4h06XDCKE%2FIFqdpe%2B4k5oSYehnKiD61c1UfJt9CYujA17oVcsOXN7QPfxp1oLZmx7cvHeV6jqU%2FC78o5fz9SNe86EOdlbkpBz6RJ51E0XDjJ5F9P%2BccM6zmZOXEFE98i0W77xfbraM%2FjnQ7FN%2BGmpmAcGYhm6y1KBGmE2daxGQV9XkjzjhK7qWwahoDDnZ1lgwFMyEMj7fSLFlf%2BkLlU%2FGja7rzdpzkxfsG5NTy9ga1QBIR1cTTEKMJuiuMIGOqUBjCuxUUmPyyGijLMlOLmrJLT2VDiGkUFXrezl2nronltURaHY8YdWPTXQ%2FdEH13An8z%2FZvpTG0%2BPL%2F8RTFWQYcK9oaQleQZCtUZ92%2BtAvkOfgMFP5VoANr4bZ%2BJie2knF3UI3yVZdJGlYoCrzM2QkrWvTJ5esjM0FIkRn9%2FVtGbz2zOpGvek1zdLNPj2dO1CsU63rPD8U%2F0LDAMfIa%2F6z7%2Fw3PXYC&X-Amz-Signature=36d75edf00031c76f331606e7c95fb3dff7f7c546c69007e1f7bf1734c069019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USLAFA3E%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T004813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQC4npj0had%2Fk4atdq0MjIS%2FiwTH%2FWu%2BVQDYURZYZa%2BdfwIgbJw%2BXJKXagupGxYSfwlF6xJgeckdtGxNd9AX18BIIVsq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDLpCtY3iSJW7VL4M4CrcA6glj3cZDzxgb%2FxmKdr4AfFU64JSY1L%2F9jWv%2BTla9IE7SJ6MXUKXtGslifyL70y5ZUp52wtHMKOFHb7X6aaOeFtFsKHA39nHvwwPooFJdWendice9zakOr3Nj8MQVreFvYewtOAxH%2BjEXeqYTnKJFymWNGlnFmVX%2FoVuUk6auAjuaCcYrVq2ylUxKC2AgCG0p1sRASpwczFp%2FdO8gliaJjdPi%2BtLgdYttoHY0Caol6JQyJnkxWLAN69k3MRkNA6AAjIPmh1Id3yyeQijpz9UE%2BdgsArUdFECtXK0v82eXHuCeoDXFQefrTkimBNiJkYr6LO8Uk5sINqcICcPcCkq%2B1UN2O4x2udtdzS6itg2qe4uPQVqupyW4ROxIkWA3nEHTyR96jw4h06XDCKE%2FIFqdpe%2B4k5oSYehnKiD61c1UfJt9CYujA17oVcsOXN7QPfxp1oLZmx7cvHeV6jqU%2FC78o5fz9SNe86EOdlbkpBz6RJ51E0XDjJ5F9P%2BccM6zmZOXEFE98i0W77xfbraM%2FjnQ7FN%2BGmpmAcGYhm6y1KBGmE2daxGQV9XkjzjhK7qWwahoDDnZ1lgwFMyEMj7fSLFlf%2BkLlU%2FGja7rzdpzkxfsG5NTy9ga1QBIR1cTTEKMJuiuMIGOqUBjCuxUUmPyyGijLMlOLmrJLT2VDiGkUFXrezl2nronltURaHY8YdWPTXQ%2FdEH13An8z%2FZvpTG0%2BPL%2F8RTFWQYcK9oaQleQZCtUZ92%2BtAvkOfgMFP5VoANr4bZ%2BJie2knF3UI3yVZdJGlYoCrzM2QkrWvTJ5esjM0FIkRn9%2FVtGbz2zOpGvek1zdLNPj2dO1CsU63rPD8U%2F0LDAMfIa%2F6z7%2Fw3PXYC&X-Amz-Signature=40f0257597c3a409f825d720eeabdd4203376af25022ac1e3ac4994b74131f86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USLAFA3E%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T004813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQC4npj0had%2Fk4atdq0MjIS%2FiwTH%2FWu%2BVQDYURZYZa%2BdfwIgbJw%2BXJKXagupGxYSfwlF6xJgeckdtGxNd9AX18BIIVsq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDLpCtY3iSJW7VL4M4CrcA6glj3cZDzxgb%2FxmKdr4AfFU64JSY1L%2F9jWv%2BTla9IE7SJ6MXUKXtGslifyL70y5ZUp52wtHMKOFHb7X6aaOeFtFsKHA39nHvwwPooFJdWendice9zakOr3Nj8MQVreFvYewtOAxH%2BjEXeqYTnKJFymWNGlnFmVX%2FoVuUk6auAjuaCcYrVq2ylUxKC2AgCG0p1sRASpwczFp%2FdO8gliaJjdPi%2BtLgdYttoHY0Caol6JQyJnkxWLAN69k3MRkNA6AAjIPmh1Id3yyeQijpz9UE%2BdgsArUdFECtXK0v82eXHuCeoDXFQefrTkimBNiJkYr6LO8Uk5sINqcICcPcCkq%2B1UN2O4x2udtdzS6itg2qe4uPQVqupyW4ROxIkWA3nEHTyR96jw4h06XDCKE%2FIFqdpe%2B4k5oSYehnKiD61c1UfJt9CYujA17oVcsOXN7QPfxp1oLZmx7cvHeV6jqU%2FC78o5fz9SNe86EOdlbkpBz6RJ51E0XDjJ5F9P%2BccM6zmZOXEFE98i0W77xfbraM%2FjnQ7FN%2BGmpmAcGYhm6y1KBGmE2daxGQV9XkjzjhK7qWwahoDDnZ1lgwFMyEMj7fSLFlf%2BkLlU%2FGja7rzdpzkxfsG5NTy9ga1QBIR1cTTEKMJuiuMIGOqUBjCuxUUmPyyGijLMlOLmrJLT2VDiGkUFXrezl2nronltURaHY8YdWPTXQ%2FdEH13An8z%2FZvpTG0%2BPL%2F8RTFWQYcK9oaQleQZCtUZ92%2BtAvkOfgMFP5VoANr4bZ%2BJie2knF3UI3yVZdJGlYoCrzM2QkrWvTJ5esjM0FIkRn9%2FVtGbz2zOpGvek1zdLNPj2dO1CsU63rPD8U%2F0LDAMfIa%2F6z7%2Fw3PXYC&X-Amz-Signature=e7dcf976c2daa820b007625791f1e8b3f72497a24b33240f36916ef8b4a6bd90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NW6KAE5%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T004820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQD3N9P9o4zeHxqLKYPld73ZO9KWLltTkmaqBMTfeD4REQIgHkUqpCvobDhPnTQA6GGGqQTmAK0tnDj3bWE0LmEICbsq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDJV%2BdthviWlXKBD3JSrcA%2FsBbBOgiLUVE5X%2FjqpllzbYT7zvKJywFZtk93iqrWDeQ%2FF0GqqIR10j6cyCvGDuISFITHQ0HAHZ136QSrXHh5aFRqffVBuG2CNy5T1MNqTWDIAGKCu4StYkIj5MYtaeDiLvR0sZHPVebfAge9eyf7U%2BowQHp%2F6vSuChMYmHgtL7woFkQh3sqbFdsy%2BStaHcGmwu8bPIAAlMNSW2ytIOSAx2xl%2FW19qW3ZwzF3iXYnfVtlvssCg3xYgf8mwFnQA2r1khZo083c9bucwTd%2FHZY74l6Z5kGD1YOKVhvGwR1eoiW34XYcBUsMk0LtO4%2Fh8zNvRDjfS%2F0ay3yXvPx6s0LDvOlkcYCS%2FIfdFKWfnFY3dvkU73IC9b1VbDPgDpEYa9BY4nGeVS4%2F3dfYvRbbHpHELLfs%2F08x5Er5djwJLwxeuQqkqnvOUrvPbwFEivS%2BNXatAFJgK0dS01FWzHhq%2B6Z%2Bceho8aMIThjzWYowULVGqSo9Cdva5Htm%2FBvn2qJngOXtK4AHbwyJbFktgmsji9%2BtjOGkCLp%2Bi8WSaLH4kEHNLu7x4zcJVUH5xXFZPeeYIC0yHhIpGFO2j%2BziyDwdiwlsvW7DKgHcNDkw4rqZ2%2FrbzsEn0b7%2FuCs9yc7KWeMJqiuMIGOqUBjK2lXy2RGwsLgkUoSQVEh53BqmPCWced83uTn%2BQ3BuikpPYardHZPnXD%2BQfG6Xs320ntprSr%2Bto1q8NCTlQCMyVHpOPLJ9u7Eo3zZUkTT0j0Sp65MPiYYQZCNPh20cA3iyENWSOdR%2BNM5H5DAC1NR9KchRVYUOMmYntJD6zJLUB6gdoYkh2Dpep50AOXGVEgjOtX%2FwOQfb10eDGUFRrfcajX7smo&X-Amz-Signature=d99cbd724d1f6d3a4ecb1e101d5e28cf3e3dfba0a1428c958518fc57470f2826&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FKOHZQP%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T004820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCLQUpEcyJDDv7z1u6xpSPOghZn1rRA411X0yhAj%2FUUvwIhAIz1j5cGkxlnSEK7I9ET1F%2FHZxIvhoa3feaeEapWjrg2Kv8DCDkQABoMNjM3NDIzMTgzODA1IgxeO2FWF7JuTlemqZ4q3AM0YsMS8U7yJdR86q%2FTE1u37k7gi8p19DudyFHI4mTlp9oWpQ4w2UZ%2Bjt0fYYwPoosVb2BVulQtmx53hJkO5BqhygrGXou8ryg1XautnvjK64dRWoKUj94K%2BcHlP7RJ7zmOi0YbzpKHFDuEp97wOCsygAvQ8f8cqY25p9nMrBwEbxrJyBYcc3KDfhzxkThmp8epifIXPFgbxvqImO1RadKHwSpAJmMMZ3xp4xoIZnyhXOKDLYkMip%2B8nRKSH4N80Q6vptXRtebAnm4Gl0I8LOlcVvtLRgBy47v5UZeC69Uw%2Byw0iqLs8gNu8AOa15KV23ANm0DLa6i0UbRoAhE744H0bgYsSv9cgwxxkW02KDEyjnniNs6OTMhG5SKW5hC4fbrTD3C582TJ%2FWkx5OC8W7QOWV%2FMBNJ1DD5t2wTRBEggDxy%2FhzrWQjLMupGw4vhqP4Gcv0BU0syaChs44JlqXvKb1D%2BeZfbK3NkBBG6hMbhufdEy5blIw9N%2BRJKShEcD1TKyc4GSU0Slv66uboiQlBlhn9hjGQ9sEOMNwysgdXD0fgVEKzNs7l%2Fd7thtOTP40pQHdjQImbN4jYASsVsmrvCWm0zhbSCSEtDxkPmVWahrXtd2Z1TSHitoLAm6ljCborjCBjqkAQwD80xy7%2FuBIjcfPzhrY5pwaRUwEbVS8SI%2F34zxsYx4v7f%2BXjtFJFUwhiQwJuO1PBaOGb2m86kePpo3HIGdtOkeNWp6W%2Beo5Morc72%2Fah9V5Cr%2BE712ukkwJ%2BPi7KY5QcMinC3WByui3sYxf75wA4wpIWPHt9Fzx5TJrqmBu6mfi1BPY7%2BPadFIt6bfFglUBHHbpm%2B6Ns7KBqf8fqtFxgZDTjgh&X-Amz-Signature=ccb4c565ba9e251e90f5084b0594ca98845e4f3ad00159cd7755b642b997818e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USLAFA3E%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T004813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQC4npj0had%2Fk4atdq0MjIS%2FiwTH%2FWu%2BVQDYURZYZa%2BdfwIgbJw%2BXJKXagupGxYSfwlF6xJgeckdtGxNd9AX18BIIVsq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDLpCtY3iSJW7VL4M4CrcA6glj3cZDzxgb%2FxmKdr4AfFU64JSY1L%2F9jWv%2BTla9IE7SJ6MXUKXtGslifyL70y5ZUp52wtHMKOFHb7X6aaOeFtFsKHA39nHvwwPooFJdWendice9zakOr3Nj8MQVreFvYewtOAxH%2BjEXeqYTnKJFymWNGlnFmVX%2FoVuUk6auAjuaCcYrVq2ylUxKC2AgCG0p1sRASpwczFp%2FdO8gliaJjdPi%2BtLgdYttoHY0Caol6JQyJnkxWLAN69k3MRkNA6AAjIPmh1Id3yyeQijpz9UE%2BdgsArUdFECtXK0v82eXHuCeoDXFQefrTkimBNiJkYr6LO8Uk5sINqcICcPcCkq%2B1UN2O4x2udtdzS6itg2qe4uPQVqupyW4ROxIkWA3nEHTyR96jw4h06XDCKE%2FIFqdpe%2B4k5oSYehnKiD61c1UfJt9CYujA17oVcsOXN7QPfxp1oLZmx7cvHeV6jqU%2FC78o5fz9SNe86EOdlbkpBz6RJ51E0XDjJ5F9P%2BccM6zmZOXEFE98i0W77xfbraM%2FjnQ7FN%2BGmpmAcGYhm6y1KBGmE2daxGQV9XkjzjhK7qWwahoDDnZ1lgwFMyEMj7fSLFlf%2BkLlU%2FGja7rzdpzkxfsG5NTy9ga1QBIR1cTTEKMJuiuMIGOqUBjCuxUUmPyyGijLMlOLmrJLT2VDiGkUFXrezl2nronltURaHY8YdWPTXQ%2FdEH13An8z%2FZvpTG0%2BPL%2F8RTFWQYcK9oaQleQZCtUZ92%2BtAvkOfgMFP5VoANr4bZ%2BJie2knF3UI3yVZdJGlYoCrzM2QkrWvTJ5esjM0FIkRn9%2FVtGbz2zOpGvek1zdLNPj2dO1CsU63rPD8U%2F0LDAMfIa%2F6z7%2Fw3PXYC&X-Amz-Signature=572c774f0cc78f3c9ca82830cb2e9c21d7d66496525df233b7ba8594093c31d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
