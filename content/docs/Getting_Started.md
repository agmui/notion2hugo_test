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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676QJPTW4%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T051211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGrQPN2J5Cbg728Iew6Ltw7Z0%2Fgbpi3aXG69RErnIQYAiEA9viGWSThSt32jmuSjhRQaf8KNo%2FFH%2FQY%2BdP%2BUTY%2FU%2FAqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BSXhtLHdLbnQYPUircA6OshMcpAhZVBkxk2Eo%2FRjO0bsIyPjYKxxHMo1XgNdRIyvzkTDQOMtOrgenrLB%2FtS5j9PVirPHza7SJd6u3c3JwFEB1pkVZz9R9Sdhg18OPYpn1Mob5IEjVP9d%2Fbfv1h8w6puTh%2BhXDOno6EYJuNw5ibin8H28YGQIrMzpTNnq39QETj1xRXRex72bLPTm2GNEJkKRSVhXuGxwwGXfdK1FFQtChaGDfNdWIqNYSH7ShH9rJm9eTXHfmKkJJGCsUMzC9XmBYcWn8mjSpj%2BYKs0tCcK8XQcF2RF5DSYFYIyRTVcpqOTZ8ZVkO4YxKw25qW%2BqQTXDdfdmJPNCZd2514mSC6RzzReORXNnmAbXxXN1SmJ2We%2B3384O1muOtvPU4LrJ98UxOIOQAXfX9ccUQKTZRm2KTucvfbIXE4B5WKUWzPEs%2B0SbYg%2Fq6CFc2ciHyyJ87O%2BBNUR1fg3dFTEvhk%2F9ZJRd%2Fj6NAZ085jyMSV33kSy2L5jXJtz9CGXM%2F%2BVzMdSGnoEYYN6USruuzoKebISQuXV5%2FvVq76WhVuA3tgAIyjRS3Q1HdOtymiNho1JgMQ93gzkYXvZEI6ZlpkQP5aSxVkKFHTXgnOeLOtw%2BkGdRkRJL7EiWU%2Fe3tHU2zFMKvaksMGOqUB6KJ6tdf4xyesxNqKLqkKMD26tyVZOl5lkiRWr7VoZlPCS%2FmsZr97Wtj0vFCA299m%2BA4%2F44Cr1E7sOMfevk0%2F6qEQ2Xh4N%2BdthKOjSVud7No%2BIzC1kQFqKEdeYhxWmsXLqq498CsZ%2FXs1vsQHPHLM6hXzFJP1vDeXbytCgXqxb%2FIPUzY9D%2FBz7ZJGo1esz%2FcyOqgjRCrwYkxVjp6d3W7CCBEOZGeJ&X-Amz-Signature=9f67ddd66a2427db8602f9c6e77bcacff23c58e9fc87e9a6016e96ff6e570c06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676QJPTW4%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T051211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGrQPN2J5Cbg728Iew6Ltw7Z0%2Fgbpi3aXG69RErnIQYAiEA9viGWSThSt32jmuSjhRQaf8KNo%2FFH%2FQY%2BdP%2BUTY%2FU%2FAqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BSXhtLHdLbnQYPUircA6OshMcpAhZVBkxk2Eo%2FRjO0bsIyPjYKxxHMo1XgNdRIyvzkTDQOMtOrgenrLB%2FtS5j9PVirPHza7SJd6u3c3JwFEB1pkVZz9R9Sdhg18OPYpn1Mob5IEjVP9d%2Fbfv1h8w6puTh%2BhXDOno6EYJuNw5ibin8H28YGQIrMzpTNnq39QETj1xRXRex72bLPTm2GNEJkKRSVhXuGxwwGXfdK1FFQtChaGDfNdWIqNYSH7ShH9rJm9eTXHfmKkJJGCsUMzC9XmBYcWn8mjSpj%2BYKs0tCcK8XQcF2RF5DSYFYIyRTVcpqOTZ8ZVkO4YxKw25qW%2BqQTXDdfdmJPNCZd2514mSC6RzzReORXNnmAbXxXN1SmJ2We%2B3384O1muOtvPU4LrJ98UxOIOQAXfX9ccUQKTZRm2KTucvfbIXE4B5WKUWzPEs%2B0SbYg%2Fq6CFc2ciHyyJ87O%2BBNUR1fg3dFTEvhk%2F9ZJRd%2Fj6NAZ085jyMSV33kSy2L5jXJtz9CGXM%2F%2BVzMdSGnoEYYN6USruuzoKebISQuXV5%2FvVq76WhVuA3tgAIyjRS3Q1HdOtymiNho1JgMQ93gzkYXvZEI6ZlpkQP5aSxVkKFHTXgnOeLOtw%2BkGdRkRJL7EiWU%2Fe3tHU2zFMKvaksMGOqUB6KJ6tdf4xyesxNqKLqkKMD26tyVZOl5lkiRWr7VoZlPCS%2FmsZr97Wtj0vFCA299m%2BA4%2F44Cr1E7sOMfevk0%2F6qEQ2Xh4N%2BdthKOjSVud7No%2BIzC1kQFqKEdeYhxWmsXLqq498CsZ%2FXs1vsQHPHLM6hXzFJP1vDeXbytCgXqxb%2FIPUzY9D%2FBz7ZJGo1esz%2FcyOqgjRCrwYkxVjp6d3W7CCBEOZGeJ&X-Amz-Signature=e11821d2c3da616bbd8151a94d24df0827176e20bfcb6a78c4e11e4f1777d675&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676QJPTW4%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T051211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGrQPN2J5Cbg728Iew6Ltw7Z0%2Fgbpi3aXG69RErnIQYAiEA9viGWSThSt32jmuSjhRQaf8KNo%2FFH%2FQY%2BdP%2BUTY%2FU%2FAqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BSXhtLHdLbnQYPUircA6OshMcpAhZVBkxk2Eo%2FRjO0bsIyPjYKxxHMo1XgNdRIyvzkTDQOMtOrgenrLB%2FtS5j9PVirPHza7SJd6u3c3JwFEB1pkVZz9R9Sdhg18OPYpn1Mob5IEjVP9d%2Fbfv1h8w6puTh%2BhXDOno6EYJuNw5ibin8H28YGQIrMzpTNnq39QETj1xRXRex72bLPTm2GNEJkKRSVhXuGxwwGXfdK1FFQtChaGDfNdWIqNYSH7ShH9rJm9eTXHfmKkJJGCsUMzC9XmBYcWn8mjSpj%2BYKs0tCcK8XQcF2RF5DSYFYIyRTVcpqOTZ8ZVkO4YxKw25qW%2BqQTXDdfdmJPNCZd2514mSC6RzzReORXNnmAbXxXN1SmJ2We%2B3384O1muOtvPU4LrJ98UxOIOQAXfX9ccUQKTZRm2KTucvfbIXE4B5WKUWzPEs%2B0SbYg%2Fq6CFc2ciHyyJ87O%2BBNUR1fg3dFTEvhk%2F9ZJRd%2Fj6NAZ085jyMSV33kSy2L5jXJtz9CGXM%2F%2BVzMdSGnoEYYN6USruuzoKebISQuXV5%2FvVq76WhVuA3tgAIyjRS3Q1HdOtymiNho1JgMQ93gzkYXvZEI6ZlpkQP5aSxVkKFHTXgnOeLOtw%2BkGdRkRJL7EiWU%2Fe3tHU2zFMKvaksMGOqUB6KJ6tdf4xyesxNqKLqkKMD26tyVZOl5lkiRWr7VoZlPCS%2FmsZr97Wtj0vFCA299m%2BA4%2F44Cr1E7sOMfevk0%2F6qEQ2Xh4N%2BdthKOjSVud7No%2BIzC1kQFqKEdeYhxWmsXLqq498CsZ%2FXs1vsQHPHLM6hXzFJP1vDeXbytCgXqxb%2FIPUzY9D%2FBz7ZJGo1esz%2FcyOqgjRCrwYkxVjp6d3W7CCBEOZGeJ&X-Amz-Signature=3f4059266c6809ebb5be3211f1cef77041b8ce27946887d76674c4081d04220d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CNYVTYF%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T051213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFstYRjiASFqmz5hZQaIy98wMAwzxA34KRErICetAsYkAiBqPSRIpWb9doOr%2F0G%2FyUU%2BWuxjWMMxWLR8HIluoEwUHyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNOAaalzAWvi78tJcKtwDoWC5a6dBTBSENOipVVupKqmKHNQqsysWLe06Njq2Kl0hYyV3utb2d8J3n84X63inHMU5ITjw1kmCOiT8Q1twRApu0eoxDp7z79On9Z08z3g4qZyMRg3HlwDHZO6umoeVxhcwj7MQVf8IBd9tFcKKmlXmE22jJHT46VZSeKBIGPD5aVbtwnOIhj%2BYCYV7b08R7Tfm0nRzamcAgscKvP%2FZAiyxXlX4hJGACnt8XHjADDMkeVLsTe8fT7p9l4AEwUvTwRGHOvV85I65HPpofLRKx5C3M5jzvEeJPS4LW%2FWsPtMc1%2FP95IU3xN4yyXb0wu2528mlLVwgk4nGqjtYx%2BCj51SXjnGE%2BJ9Wnm8TgRb2tq7QlOpM%2Bv92IueaoBEkJxUy1zpz6LhZQCy7CB7CuliX%2BFuZplNt6GUu8PgOew6DiK%2F%2BXi0pVxgaGssQTEfVozWhznn3LsrjSZB5WNoImJ55rp7B%2BqqqDPL4zf%2F2d5738KDMPDEPvc8JLv80W4PANv0c7ooN3qSu4UXyj%2BvZHBSJbc2hgk4x%2FDrQlpAKHLQov3Gpz9Wd2kcDIrGWDdY708tLVCBwAzfQY3LzvHNTo6pXpbfz%2FapPQq2rqGTiVn5F5UICyagdE2XISuzSO9IwlduSwwY6pgEBwP8NhcfmztyPz2JPK%2B1IMoYlM2B23KtaHXo9N7gZVEJD96ud%2FL%2BWSOqwSsgYrQO5gOt3tQ1EXiZvOJKjejMsbzcFsdFH3b5emqh6WdpVJ6fAX50XvhMDZ2NPkapUoAJQSSQe8vzRZl5EWT%2Ff16KwH1Nds9f6Lj5hf%2Falrwf7C%2FizgPcsK5WaVOmkGjiFi1u2evhnLsRDqBV7dkUb3C7IfbjvDFxd&X-Amz-Signature=37db895efdd4facd66eea7f55892b744b59d567db4f880704d3416daeec7fac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q23FCXZ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T051213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FrYlAs6iJxng9OmpWvDbB7HPsx5aRbNe7SlT9RpRL5AiBETRCVgM%2BMhh6wvqz%2BTrjEn7L1T2Y5LyEnGrJSmLCRyCqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU18j2K%2BS7sKMQcmsKtwDf5tE1no9Dr9OxE4gMNU9L0c6azuu6pxobl9yndQy2i7lTUck%2BFQn%2B4j9ssbe3sIUCtB4Goj2%2FrMKSWxfkpF%2BJCsoF6OLgmA2GLiM9N08CSJBwc31nA89YfMNaQLwc6Ti7cVlToR7KWcc2MlqsyabnVt9%2FeeQZrZ3lurRGgESQmdPjzjvZpGY7ybPnC%2BNdwIkVwxFtoMe5S4TAD4QsO7u19T0WOuT4nvBv5j7C%2Bn7ucN7KlpHWS%2BD1yBx9FkYIjQJ2J0BEAWTiPhEhaY7DiFCBmOUitWbtUMnPSPtGYfP3VhyBmkHyuPDxdU9XUjvmcaPuUdiQFUnqjFAlyRTv7XGzQ2pfG7g%2FWILahsuhT1%2FWjL3Rn%2FIrcl2ko4ZUCeQejRcMZ6p2QCzQq%2Fw36qeHCne2B7m5xZ6fJEW0XkT3GRSD0u1HDbg7bPojAE64utk5wX7R6aLaDn0mme%2F4frWJGeVHVWEHeu0ntzsG43%2Blm6YD8TsN0I0h6e5Km6llK18LP5zcl0soqw7vCa5c9%2B4FJEksS3yKXCgEOiJ62hUgwwYt7%2FFkTqggvqq0MIVBMBlpiA4QlyoSgYq%2FYnWWZJmJ994QL81E3DSXWEPcpLjCxT8rabTEmm0wp6CXT97mHcwtdqSwwY6pgGBHnowcTsrgwMz6qWGUVEq2RbWMYtSsoCHMIEtG2AwoU4nDIK%2F%2FcP%2F4FqqArT2zZSPvYZ7KrAcf%2BNvcZoXz7mI5PzAHrCgBypAaE6NwlrsLrRxPsBT5QU5KaR9891tvIcZtPqGF1ZsojVvvR1pE5YQ2zlZ2%2BsETDQlNCv6n1gWwCTOYm4VBjcFeye79pp1qw2Q4fZWipM5%2Bew7wsfs%2FkPFwEPRDZIa&X-Amz-Signature=3a5e16019f04e74b6010631f44232bb62f1c5f20be6d5313291d3fed10cd1f9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676QJPTW4%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T051211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGrQPN2J5Cbg728Iew6Ltw7Z0%2Fgbpi3aXG69RErnIQYAiEA9viGWSThSt32jmuSjhRQaf8KNo%2FFH%2FQY%2BdP%2BUTY%2FU%2FAqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BSXhtLHdLbnQYPUircA6OshMcpAhZVBkxk2Eo%2FRjO0bsIyPjYKxxHMo1XgNdRIyvzkTDQOMtOrgenrLB%2FtS5j9PVirPHza7SJd6u3c3JwFEB1pkVZz9R9Sdhg18OPYpn1Mob5IEjVP9d%2Fbfv1h8w6puTh%2BhXDOno6EYJuNw5ibin8H28YGQIrMzpTNnq39QETj1xRXRex72bLPTm2GNEJkKRSVhXuGxwwGXfdK1FFQtChaGDfNdWIqNYSH7ShH9rJm9eTXHfmKkJJGCsUMzC9XmBYcWn8mjSpj%2BYKs0tCcK8XQcF2RF5DSYFYIyRTVcpqOTZ8ZVkO4YxKw25qW%2BqQTXDdfdmJPNCZd2514mSC6RzzReORXNnmAbXxXN1SmJ2We%2B3384O1muOtvPU4LrJ98UxOIOQAXfX9ccUQKTZRm2KTucvfbIXE4B5WKUWzPEs%2B0SbYg%2Fq6CFc2ciHyyJ87O%2BBNUR1fg3dFTEvhk%2F9ZJRd%2Fj6NAZ085jyMSV33kSy2L5jXJtz9CGXM%2F%2BVzMdSGnoEYYN6USruuzoKebISQuXV5%2FvVq76WhVuA3tgAIyjRS3Q1HdOtymiNho1JgMQ93gzkYXvZEI6ZlpkQP5aSxVkKFHTXgnOeLOtw%2BkGdRkRJL7EiWU%2Fe3tHU2zFMKvaksMGOqUB6KJ6tdf4xyesxNqKLqkKMD26tyVZOl5lkiRWr7VoZlPCS%2FmsZr97Wtj0vFCA299m%2BA4%2F44Cr1E7sOMfevk0%2F6qEQ2Xh4N%2BdthKOjSVud7No%2BIzC1kQFqKEdeYhxWmsXLqq498CsZ%2FXs1vsQHPHLM6hXzFJP1vDeXbytCgXqxb%2FIPUzY9D%2FBz7ZJGo1esz%2FcyOqgjRCrwYkxVjp6d3W7CCBEOZGeJ&X-Amz-Signature=1c69ba633d19c01f45ee21e4210751133321a98c438ed077d755449c0f11667d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
