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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633AKDVJF%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDImi8Y2BwolFNXZaxlM%2FyEasFE97WKybrpGM9FsSiblAIgDcaDo%2FLq6MJN%2FgK%2BYBcYih9VW3S7ONL8l%2FrgLLPEQ%2F4q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDGhvSxfBWTbMIxWD6ircA%2FWnzqnvEPT%2FQSwiBIXfPHwXymoVja%2FVIzYSdmzLN%2FKiLDs9CQB5uUQlpXJNPaEveWv2DwBvpw1cuN5GyUmcsnrtigfUmK3JOWdWokscUkZq5IeF22Bz%2BM6lqA6ms8qnkM7VNFKQoKfb8vKbUFOaei%2BxMXFJUlYygwa9DF1NyA6LaNHZu9U%2F%2Fuf%2Fs%2B%2BqVCwERAinW4o0OrV8jD3OX8%2BBTDpxslvYfOfa%2FtIVseykMEQrYYHf5dInWcxv8%2FQ9FyJOViTqPKCW7fYLSpDBNFJ7xZYEzeRbotLHuhqab0tvosJD1fjFDK31h2b12ysKh0UTxGBcjWT9YM0QX%2BpDv7KI45y41hlErYYmloj%2FQVOUdHrtzyWDsamYxfxmTBUk%2Bf5a%2Fd5lvKPFJ0NwtJ566H1Y4iQzn7JwgeGiAKzGi3so15aoazwuFunKEWQ8pDgaG67OLMaqeULg1XwjiUU6ebR6CMeylNuBOTT9m7n2mSOBeBBsUSBfPC4T2A2MGU85ZfxFH7k16cPUWuoPGJv9q295W1n5TzlklS%2B5l2jPTpbawH5AyT5lDM9hqh1T%2Fih9C9gdtGQUzCJsOv383JEz0fGq4cqaVq%2F5HdnpuXJYwtYId3U9gcS6IhZ0jFwODl7cMM3xpcEGOqUBs06bgPm4zdiX6K1%2BNLX0%2F9se%2BwRY3crOYq%2FmfLB27vYkXBQVhcSfouUiRnGVvLNtCVpdYTndZg1QA32VyC8%2B7pJhZdpzqHWqu5k5Cls5C1fITEWvgDIXEb8LsYiw31TYbXlKhn%2FKbWdcQpsxpGaSB4K3qEsb9b%2BrFEUpD4MPbpDwQs5GZIAaZTxrfQ37y21pKIJkk6iVVtKyTB4idzHHOy%2FuVTyW&X-Amz-Signature=03c435d7aa912cbe322e36e0ac22831ea394290330d1f852976bca59360489bc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633AKDVJF%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDImi8Y2BwolFNXZaxlM%2FyEasFE97WKybrpGM9FsSiblAIgDcaDo%2FLq6MJN%2FgK%2BYBcYih9VW3S7ONL8l%2FrgLLPEQ%2F4q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDGhvSxfBWTbMIxWD6ircA%2FWnzqnvEPT%2FQSwiBIXfPHwXymoVja%2FVIzYSdmzLN%2FKiLDs9CQB5uUQlpXJNPaEveWv2DwBvpw1cuN5GyUmcsnrtigfUmK3JOWdWokscUkZq5IeF22Bz%2BM6lqA6ms8qnkM7VNFKQoKfb8vKbUFOaei%2BxMXFJUlYygwa9DF1NyA6LaNHZu9U%2F%2Fuf%2Fs%2B%2BqVCwERAinW4o0OrV8jD3OX8%2BBTDpxslvYfOfa%2FtIVseykMEQrYYHf5dInWcxv8%2FQ9FyJOViTqPKCW7fYLSpDBNFJ7xZYEzeRbotLHuhqab0tvosJD1fjFDK31h2b12ysKh0UTxGBcjWT9YM0QX%2BpDv7KI45y41hlErYYmloj%2FQVOUdHrtzyWDsamYxfxmTBUk%2Bf5a%2Fd5lvKPFJ0NwtJ566H1Y4iQzn7JwgeGiAKzGi3so15aoazwuFunKEWQ8pDgaG67OLMaqeULg1XwjiUU6ebR6CMeylNuBOTT9m7n2mSOBeBBsUSBfPC4T2A2MGU85ZfxFH7k16cPUWuoPGJv9q295W1n5TzlklS%2B5l2jPTpbawH5AyT5lDM9hqh1T%2Fih9C9gdtGQUzCJsOv383JEz0fGq4cqaVq%2F5HdnpuXJYwtYId3U9gcS6IhZ0jFwODl7cMM3xpcEGOqUBs06bgPm4zdiX6K1%2BNLX0%2F9se%2BwRY3crOYq%2FmfLB27vYkXBQVhcSfouUiRnGVvLNtCVpdYTndZg1QA32VyC8%2B7pJhZdpzqHWqu5k5Cls5C1fITEWvgDIXEb8LsYiw31TYbXlKhn%2FKbWdcQpsxpGaSB4K3qEsb9b%2BrFEUpD4MPbpDwQs5GZIAaZTxrfQ37y21pKIJkk6iVVtKyTB4idzHHOy%2FuVTyW&X-Amz-Signature=6a9a14fe0d87b7a64e12e003f7bcc403ff8ffd666d8d2881799cb942822eea64&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633AKDVJF%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDImi8Y2BwolFNXZaxlM%2FyEasFE97WKybrpGM9FsSiblAIgDcaDo%2FLq6MJN%2FgK%2BYBcYih9VW3S7ONL8l%2FrgLLPEQ%2F4q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDGhvSxfBWTbMIxWD6ircA%2FWnzqnvEPT%2FQSwiBIXfPHwXymoVja%2FVIzYSdmzLN%2FKiLDs9CQB5uUQlpXJNPaEveWv2DwBvpw1cuN5GyUmcsnrtigfUmK3JOWdWokscUkZq5IeF22Bz%2BM6lqA6ms8qnkM7VNFKQoKfb8vKbUFOaei%2BxMXFJUlYygwa9DF1NyA6LaNHZu9U%2F%2Fuf%2Fs%2B%2BqVCwERAinW4o0OrV8jD3OX8%2BBTDpxslvYfOfa%2FtIVseykMEQrYYHf5dInWcxv8%2FQ9FyJOViTqPKCW7fYLSpDBNFJ7xZYEzeRbotLHuhqab0tvosJD1fjFDK31h2b12ysKh0UTxGBcjWT9YM0QX%2BpDv7KI45y41hlErYYmloj%2FQVOUdHrtzyWDsamYxfxmTBUk%2Bf5a%2Fd5lvKPFJ0NwtJ566H1Y4iQzn7JwgeGiAKzGi3so15aoazwuFunKEWQ8pDgaG67OLMaqeULg1XwjiUU6ebR6CMeylNuBOTT9m7n2mSOBeBBsUSBfPC4T2A2MGU85ZfxFH7k16cPUWuoPGJv9q295W1n5TzlklS%2B5l2jPTpbawH5AyT5lDM9hqh1T%2Fih9C9gdtGQUzCJsOv383JEz0fGq4cqaVq%2F5HdnpuXJYwtYId3U9gcS6IhZ0jFwODl7cMM3xpcEGOqUBs06bgPm4zdiX6K1%2BNLX0%2F9se%2BwRY3crOYq%2FmfLB27vYkXBQVhcSfouUiRnGVvLNtCVpdYTndZg1QA32VyC8%2B7pJhZdpzqHWqu5k5Cls5C1fITEWvgDIXEb8LsYiw31TYbXlKhn%2FKbWdcQpsxpGaSB4K3qEsb9b%2BrFEUpD4MPbpDwQs5GZIAaZTxrfQ37y21pKIJkk6iVVtKyTB4idzHHOy%2FuVTyW&X-Amz-Signature=12b0981b1f9aefcc1450bfa1b9a8a616659ab1432eed4931608e4164521f534c&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652QISXPC%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7KKw6dWW0MRWjJGYqQduMRQxRYVoBck6TPnExsa20ZgIgEafI10KWic30XaRvHpxuiDBM7I9VBBV%2FeTHuooA4CDkq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDIQONT96Ub3J5B1McCrcA05eQkplq2LEqwFcf3APu4%2FFlrsBLzbfEsT%2BL40U71WIdMGwquYzVn0H0gJXEG6ggvTJJ%2BfAVP27WNasMo%2FDBpGg7fR4Qd24GNt%2BLODybW6ChB%2FHgX43jz0uUrBwOkwRdXK7nt6sG2oxiBMArUinJV0Q2Wnbnvx1TcYl4583V%2Bs62QAM5syu3pEp%2Ftbencq%2Fuz4oxndXI5BUmcnrjdEKa45VjdG7WY7eUWZzrYKD577RdaopLJT6mtqZsiIl6jTOSj39FB%2FHQIcYhon03aqC4H9Pi%2FQ14VQIlfN5re6AomETsHkC%2F27rcHcDC8ZImyZNhJlbdC%2BW5EHSfxzCAgnRBhMtmWvc%2F1ja%2Fn314RHz%2FGJHHds3d%2FINylij30a%2BSM6n7lQzj62ai5xAWIUPbiZGH6NpJqQN8%2Fgbi0i3loTgQ6uuxhdTVIuytmnf%2FLFAaHf9B0hyRJIdGO2t%2B3%2B94aDTXoaycDgfMl4o7aajZHohlAyJ%2F%2FD8XSJssopkmx2GRNFZTGE%2BC1LXzDQ0Fqh0rdwHdq1BjuitS9x8pTmGI3W4Qm%2FLtzlNgLtFx%2By5iFSUdqRWpDpjW3p6nbZ0w%2BVbOUcXGHAmopuo%2BynNAcS5bk3s5akudomfAHhx3rMvDLx4MNDXpMEGOqUBUYMzi1ZnsU9B%2BHe1blgxOJON7apJlpTTWdc34AENAKyEImkacPxH9XUrXlCtiwdgqGEDR6OcqGuPJh0niubpgY2iVRg2LmIvMtnQ%2BEsq9Hl3pZhG2PqJeYLlZ7FMA7Yuzo0FoCPHgWSz6tPbo%2FK7I4YohAfyU9ri4FgLjzgSWqOJR7GXpDyYkU2nvibSFYkQTKKbTugB3278fgkyQIaN%2Fuuf%2BbvF&X-Amz-Signature=e5e2c5cce08bca903217d6a0ba8be79d0b12a098a4bb0afba6487484c2ad3d98&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T5YOO72%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgRQ3n59%2BkLeDmuIqIKwtydTX1ZRJ%2FH%2Fqfh2JBSLs0%2FAiEAr%2FI3lzQcco%2F%2FMCUIXfrLcds572TZsgoCoP%2FWwJ77Uk8q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDHJRhon%2FEGORW%2BQpXCrcA90%2BxEo0vJm1EZtsLlBI9xCQ4G3DPuMretOiA3dNxHrf70OodJxlo28uLQgmXOWhcT7EC6l7lNqPrdUZGv3KPWywTwXJjUQzgoYDdJcHy8xFKcR7OOQvUhZJrwOn%2BBFg8qbvI18jGSy6T1a3QRjtHb0ORET2PEK781sy329p1zReqoHE87BTysbI3YX36Pq31DR27FIWZZlAm3o2x3mBjyTIkTkNuJ27XQaP7sLnbDGdLd93zT3%2FyemvQqIF42I1vWU1f16iYfkg2GgmM%2Bxut3fmClARxfCEeQ60uCD2yhvhUgmYrCByIBu20kk9fyPWsRSWpNkkaZx82kVlSeTz2LlZuUr%2Fx4UYl5niDherA%2Bd%2Bwt3K6WbaQ32fuKXu861EOg9r4n7b7dRhuCKo2jmG%2FDF%2FGjA5d80%2BuZ8KSym4TzSPUJteqJSbeOSmZsCjpFCVCO6JuMSdXCrkuQv20KPDyW2StmyXF2rOECssJzJm%2BEPsu4qQTcNkhHsNvf3z005jDVTQ4p%2FGPlw3pnkaGIRm6Qa9mo7f7QyJ%2FpQza8NxEBPH7EzbTznmJjAsR8Wq8%2F144zW8eK6QOXBgEIDUDDkG5HFcj82kbHkeEJq6L1VhrIUO2yGEsHrjMvuEW8eTMN3XpMEGOqUBcqzUO6Pwt3xl%2F6H8Iha8f8c7ioD41w7GFWJjynW%2BFxDXF12pZApKquhfxOrjhQq0pU2TTSK7MBqP7CPcY9nNdTcOxJbK2azFeoQ7Lklq36cAJUdrEEOM2XL5cKukhnOwfn1xZy8OsT749FUyChwgvfBpyIsmZBkH%2BedE%2FXdTHYICJgnFBC7KNR52bRzbND0bqqXPRbGmPDHappE2n3%2FUkFRIWkSc&X-Amz-Signature=570bb3bf540eb68eb1de79f259362f8946fff27e418146714e861abc98854a3f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633AKDVJF%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDImi8Y2BwolFNXZaxlM%2FyEasFE97WKybrpGM9FsSiblAIgDcaDo%2FLq6MJN%2FgK%2BYBcYih9VW3S7ONL8l%2FrgLLPEQ%2F4q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDGhvSxfBWTbMIxWD6ircA%2FWnzqnvEPT%2FQSwiBIXfPHwXymoVja%2FVIzYSdmzLN%2FKiLDs9CQB5uUQlpXJNPaEveWv2DwBvpw1cuN5GyUmcsnrtigfUmK3JOWdWokscUkZq5IeF22Bz%2BM6lqA6ms8qnkM7VNFKQoKfb8vKbUFOaei%2BxMXFJUlYygwa9DF1NyA6LaNHZu9U%2F%2Fuf%2Fs%2B%2BqVCwERAinW4o0OrV8jD3OX8%2BBTDpxslvYfOfa%2FtIVseykMEQrYYHf5dInWcxv8%2FQ9FyJOViTqPKCW7fYLSpDBNFJ7xZYEzeRbotLHuhqab0tvosJD1fjFDK31h2b12ysKh0UTxGBcjWT9YM0QX%2BpDv7KI45y41hlErYYmloj%2FQVOUdHrtzyWDsamYxfxmTBUk%2Bf5a%2Fd5lvKPFJ0NwtJ566H1Y4iQzn7JwgeGiAKzGi3so15aoazwuFunKEWQ8pDgaG67OLMaqeULg1XwjiUU6ebR6CMeylNuBOTT9m7n2mSOBeBBsUSBfPC4T2A2MGU85ZfxFH7k16cPUWuoPGJv9q295W1n5TzlklS%2B5l2jPTpbawH5AyT5lDM9hqh1T%2Fih9C9gdtGQUzCJsOv383JEz0fGq4cqaVq%2F5HdnpuXJYwtYId3U9gcS6IhZ0jFwODl7cMM3xpcEGOqUBs06bgPm4zdiX6K1%2BNLX0%2F9se%2BwRY3crOYq%2FmfLB27vYkXBQVhcSfouUiRnGVvLNtCVpdYTndZg1QA32VyC8%2B7pJhZdpzqHWqu5k5Cls5C1fITEWvgDIXEb8LsYiw31TYbXlKhn%2FKbWdcQpsxpGaSB4K3qEsb9b%2BrFEUpD4MPbpDwQs5GZIAaZTxrfQ37y21pKIJkk6iVVtKyTB4idzHHOy%2FuVTyW&X-Amz-Signature=62249366c819cc0d4893ecfbf4d2b4246b5c020c7ea59c77ab37317b0e8ba1d9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
