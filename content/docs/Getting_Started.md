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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLICTLFC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIAF%2B8%2FuFuEsjnq3BKaubG%2BJqL7FsMfoTdcO%2BmLd2f9CVAiEA%2FDGjM8kWkAhvFfKqGB0AW4fJD0%2BnDYInNnsn02wwT0UqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMt%2B%2FcZG9LHOMryxRSrcA0q%2FUHmdGqIfXE6ZG5N4%2BxpZ7VCjWEqzcj8pxIG418NiGuc9dAbwnaQs4Pc1cXpecGIfViQzcQ0Kf4Vkf5mdhTy5y4DJngelR6WTooJ5WkXuTN4MoDCGKCc2yP6JuTuJaEQWeayFmFE0aN2CuH9ys1ACwyNE5F8p51uOjfsn7%2FB0f5vZNfxPmPVijA0A3S6WltkJrk4pIMxGfd2ezbw%2BgSr2aS8wvaSjXDJlskbOQLkY1VLMWgN4DDyO%2FYKDtiNouUq4zY%2BOEldnJoBh5zSr8fp60%2B0fIHPIcsRidVX5NANDzkGYfAgSUvmYx1YakbGirvI2Ldr%2FjbbSGBfVcpHgB8XK2oMrMtUR4CF5ZZUoOn%2B8RrgbLojpgY70IkY2P5EvqCcWHK3toFaE6ImzsBfS3gMNAXxMsdJHMYi%2BQXBBn1xX7kWmcJIHESEX7eGWywEvpGV9lDDCcfkidtNKmrH4lT5Wv%2B4GicG3TzcMZ84SqfxfsgZ%2BeAp2r2ZeTRdUNrn4cvlDXdE6vh3dSqyL%2BGrBK%2F4JW1htS0WhZlCR2fDvyiRqGkulDARJWjClJmJC1Ucs65gPus%2F7zQzUFL18V%2FD%2FbLO1kjhZXWqf%2FqbUv4jP93aiMc3B1H5Fm7NGw0QaMJjGnMQGOqUBjqTeJtMy204xYA3xgGvvMakJUAk4cOf2bkqTGrJuJj3UfV9gerM%2B5EcFNQ0Oz01Ia11cvbjrR%2BSFV3gVaFbgElEUQagOqjLRZU6bBKPjMFnzF93nd23nmUJcG9Rg9CWzYhevQbXPLaJavtfawOMf7OlYbcKaEOG9RuU56ABSabaHXZ%2FOBY2cmJ1KLaTv%2BkRwS5YcH20Jg8nyjwzx3H3AP5MlSF%2B3&X-Amz-Signature=fd11099100a94c27d58bb1e7484a377be67fc82416ca6dc3a662c8e8ac428fc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLICTLFC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIAF%2B8%2FuFuEsjnq3BKaubG%2BJqL7FsMfoTdcO%2BmLd2f9CVAiEA%2FDGjM8kWkAhvFfKqGB0AW4fJD0%2BnDYInNnsn02wwT0UqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMt%2B%2FcZG9LHOMryxRSrcA0q%2FUHmdGqIfXE6ZG5N4%2BxpZ7VCjWEqzcj8pxIG418NiGuc9dAbwnaQs4Pc1cXpecGIfViQzcQ0Kf4Vkf5mdhTy5y4DJngelR6WTooJ5WkXuTN4MoDCGKCc2yP6JuTuJaEQWeayFmFE0aN2CuH9ys1ACwyNE5F8p51uOjfsn7%2FB0f5vZNfxPmPVijA0A3S6WltkJrk4pIMxGfd2ezbw%2BgSr2aS8wvaSjXDJlskbOQLkY1VLMWgN4DDyO%2FYKDtiNouUq4zY%2BOEldnJoBh5zSr8fp60%2B0fIHPIcsRidVX5NANDzkGYfAgSUvmYx1YakbGirvI2Ldr%2FjbbSGBfVcpHgB8XK2oMrMtUR4CF5ZZUoOn%2B8RrgbLojpgY70IkY2P5EvqCcWHK3toFaE6ImzsBfS3gMNAXxMsdJHMYi%2BQXBBn1xX7kWmcJIHESEX7eGWywEvpGV9lDDCcfkidtNKmrH4lT5Wv%2B4GicG3TzcMZ84SqfxfsgZ%2BeAp2r2ZeTRdUNrn4cvlDXdE6vh3dSqyL%2BGrBK%2F4JW1htS0WhZlCR2fDvyiRqGkulDARJWjClJmJC1Ucs65gPus%2F7zQzUFL18V%2FD%2FbLO1kjhZXWqf%2FqbUv4jP93aiMc3B1H5Fm7NGw0QaMJjGnMQGOqUBjqTeJtMy204xYA3xgGvvMakJUAk4cOf2bkqTGrJuJj3UfV9gerM%2B5EcFNQ0Oz01Ia11cvbjrR%2BSFV3gVaFbgElEUQagOqjLRZU6bBKPjMFnzF93nd23nmUJcG9Rg9CWzYhevQbXPLaJavtfawOMf7OlYbcKaEOG9RuU56ABSabaHXZ%2FOBY2cmJ1KLaTv%2BkRwS5YcH20Jg8nyjwzx3H3AP5MlSF%2B3&X-Amz-Signature=51b9bf44c872f893cbc4733835f6624d90c96ca7dc780faeff5352cb3140cd8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLICTLFC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIAF%2B8%2FuFuEsjnq3BKaubG%2BJqL7FsMfoTdcO%2BmLd2f9CVAiEA%2FDGjM8kWkAhvFfKqGB0AW4fJD0%2BnDYInNnsn02wwT0UqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMt%2B%2FcZG9LHOMryxRSrcA0q%2FUHmdGqIfXE6ZG5N4%2BxpZ7VCjWEqzcj8pxIG418NiGuc9dAbwnaQs4Pc1cXpecGIfViQzcQ0Kf4Vkf5mdhTy5y4DJngelR6WTooJ5WkXuTN4MoDCGKCc2yP6JuTuJaEQWeayFmFE0aN2CuH9ys1ACwyNE5F8p51uOjfsn7%2FB0f5vZNfxPmPVijA0A3S6WltkJrk4pIMxGfd2ezbw%2BgSr2aS8wvaSjXDJlskbOQLkY1VLMWgN4DDyO%2FYKDtiNouUq4zY%2BOEldnJoBh5zSr8fp60%2B0fIHPIcsRidVX5NANDzkGYfAgSUvmYx1YakbGirvI2Ldr%2FjbbSGBfVcpHgB8XK2oMrMtUR4CF5ZZUoOn%2B8RrgbLojpgY70IkY2P5EvqCcWHK3toFaE6ImzsBfS3gMNAXxMsdJHMYi%2BQXBBn1xX7kWmcJIHESEX7eGWywEvpGV9lDDCcfkidtNKmrH4lT5Wv%2B4GicG3TzcMZ84SqfxfsgZ%2BeAp2r2ZeTRdUNrn4cvlDXdE6vh3dSqyL%2BGrBK%2F4JW1htS0WhZlCR2fDvyiRqGkulDARJWjClJmJC1Ucs65gPus%2F7zQzUFL18V%2FD%2FbLO1kjhZXWqf%2FqbUv4jP93aiMc3B1H5Fm7NGw0QaMJjGnMQGOqUBjqTeJtMy204xYA3xgGvvMakJUAk4cOf2bkqTGrJuJj3UfV9gerM%2B5EcFNQ0Oz01Ia11cvbjrR%2BSFV3gVaFbgElEUQagOqjLRZU6bBKPjMFnzF93nd23nmUJcG9Rg9CWzYhevQbXPLaJavtfawOMf7OlYbcKaEOG9RuU56ABSabaHXZ%2FOBY2cmJ1KLaTv%2BkRwS5YcH20Jg8nyjwzx3H3AP5MlSF%2B3&X-Amz-Signature=4e6e94f850acd8db67c4664c8a70203d413147406bf2405cedfedab90a26d9ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJKYRESA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIH6HbHxWdTo%2BlTHaIUad2PPD6%2BzwLuBlToMRB%2Fv%2BkSDxAiBii3SQ54MElmwh8%2BUqZegzJo1peJ8AX%2FJ%2BIGhlUqY2AiqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaGvJGtkENuoLUAQAKtwDSHu0IyEZswed4X8qpIlJzQyIYqEvvmfgi7wRerxADlctGPUMwxzST0Il9vmHrmoTEOvHsXaWjO%2FxlwVPn8cdklGMGYnw%2B42PBAeWsu3AYU6iF%2BFvTMhshuGn%2BNa%2F1EZvfH%2FaLuIAJpS%2FMzIos1pvtVVYTlGb1wC7maNx5jVHD6%2FtkFZrxrTW%2F%2BnaepGemwTjNsqt%2Fiv3tRTXtArK63PQ%2FvMc4GehxU625LXQhzo4VokCv3j8bmWK%2FZ4Y1BCxYIIl8pWg0A1sVmY8egeklc03YvlCnNzElsUT%2FSAbMLDMbFlMaV7bt5Ms3wJvFAbmlpH%2F3W1GNiIiE2oycBVtZKDmwfeELY0eGjIWo79dh%2FsF5hVQBMLnC2N3QDEgLlnjfT5pEvXGWwswWtQX7ulMTJ8qq6dBh%2Fp%2Bo6NuP3QFmrQEWNd3yezOX7v4fcG07xkii7uFfmGumqt3f6okbReRnIrjHjhBEUDT%2F7E9tQeWzaxmJsT6bp4lBL1e8uMNC%2FLyLYNRcIWXmNoSbPB%2F%2BFwyYukErBvXPzlLQB6IkRZiHU%2BuZzd3XGzrTcFt2XKVa6qE6cuH7xfrf%2F8xUf7dU%2FYIjevahKOJ3SBvY9CIv93AFOz%2FQz%2FbzmkdqDSkJ6E0rqcwycacxAY6pgF1WRkmX0ct5Fs%2Fu%2FoKViTnl56uzCvnPWEDf6G5MBU96RNcVgJusugn8LnT61o23gRQ8WJZjB%2Bdk1MuRTHg92CSojaAhavICMHuXfeA7IUfru37da5dEOxVOKGF45WX18GgQumzXo7W04DfkLrQRVwTyjwZEvMF13lllRueP1X4uEnZ0viFqTe%2BOxIukzv7DWQDJx26dcElO6cPdgHZynANaLsbuuAj&X-Amz-Signature=8adf2319e3f17abd6d3a89f407ba6af6e5170ffe6073859a4fa04d03a681a9fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MQB6ZE3%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIAQz8zBIx%2Bf%2FEGvr99xP7ADQHTJvqBTrYe%2BZlKlbhQ3iAiEAn7RnyGlvG9wOvQ1%2BmdEwa3BYhf232%2BZb351qWAJ9a78qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKLGU08PebBgwK1UKircA9mJCOPWrUjWEBAeJ6UE5YjJT%2B1oSMp3FmPq9nNB2Ew2kUEPYZzuHojccGJhzFfbdoIEFn%2BSJu3yMZ8Wtqa8aua%2BwFbEa%2FhdeOrpCM4rWZwyGtQHrF3ryt4cMOHTcdiqvwy8fAD1uWwRQ2u27Xgok9X4Tb6dzCyZ3UeKFYwYDFvr6gZRQ8SMSFWkPTQKQFJxmRgTvBy0Z9yDBo8ZDdxlWeDsd1WN1rLi%2F53pOyeDV8mYiGE2jcMf2MkzcpTZt%2BzRX3GoIa1rAL%2BZoajqixCCQ%2BiJNsTQ0sCjwSSQfAwWls%2BSd24r96D6oPueD06%2FsO202KYyuKZUMsGGblmBbrZgGrzTIsPYoVE2YCmOS7L%2BDnaQvvUM0e2QGJthsQHJtZ6Ic0Zj5t1an7YclxkIM4SgfrRQ8GLYcMdppohwEGDxrrTO8ko%2FZdVMvZ0kiO%2FEYZ4Ypnx%2BbrHAIbYl%2Bw8EygO%2FSKqEpW9ZTgHyNxu1PJZOvBJxbarmPOJ%2BCoNdj%2BaxVt93helItV1jMZZf5tHIFUT7TibV0PVOMaIFYy8v1XJU6TKZR4Z0BCeBAagNx23HWIL%2Bo8FvxFHEqJB6A6P8aGcEEvw6Zwf2%2BU5uDORq14NdNSTpTug7kMDz6CaVPfF6ML7GnMQGOqUBdGKukDMvseALdyK7JtWaJgjTal9N08Oqb2s7sD60r3mr4oa5RKyUQD6lCNVDa9oOGbWu1cGET84K%2FDgYahPillGNvtbIW0SlkUrGOEYUVj8vIgXy2MV8aeM5oIicluTZ1Ntj04URDwxm9BJp8pZ44QoO8TsizWBklzTyzzQt4znF4Tspmealo9mzNsb4TeFqQRnP22UsBdC9yPd4C%2B9VQeilgT9C&X-Amz-Signature=74b5636e0474bcbac452a49d834b90cd58cb29e4a474219c79d97a782714df20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLICTLFC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIAF%2B8%2FuFuEsjnq3BKaubG%2BJqL7FsMfoTdcO%2BmLd2f9CVAiEA%2FDGjM8kWkAhvFfKqGB0AW4fJD0%2BnDYInNnsn02wwT0UqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMt%2B%2FcZG9LHOMryxRSrcA0q%2FUHmdGqIfXE6ZG5N4%2BxpZ7VCjWEqzcj8pxIG418NiGuc9dAbwnaQs4Pc1cXpecGIfViQzcQ0Kf4Vkf5mdhTy5y4DJngelR6WTooJ5WkXuTN4MoDCGKCc2yP6JuTuJaEQWeayFmFE0aN2CuH9ys1ACwyNE5F8p51uOjfsn7%2FB0f5vZNfxPmPVijA0A3S6WltkJrk4pIMxGfd2ezbw%2BgSr2aS8wvaSjXDJlskbOQLkY1VLMWgN4DDyO%2FYKDtiNouUq4zY%2BOEldnJoBh5zSr8fp60%2B0fIHPIcsRidVX5NANDzkGYfAgSUvmYx1YakbGirvI2Ldr%2FjbbSGBfVcpHgB8XK2oMrMtUR4CF5ZZUoOn%2B8RrgbLojpgY70IkY2P5EvqCcWHK3toFaE6ImzsBfS3gMNAXxMsdJHMYi%2BQXBBn1xX7kWmcJIHESEX7eGWywEvpGV9lDDCcfkidtNKmrH4lT5Wv%2B4GicG3TzcMZ84SqfxfsgZ%2BeAp2r2ZeTRdUNrn4cvlDXdE6vh3dSqyL%2BGrBK%2F4JW1htS0WhZlCR2fDvyiRqGkulDARJWjClJmJC1Ucs65gPus%2F7zQzUFL18V%2FD%2FbLO1kjhZXWqf%2FqbUv4jP93aiMc3B1H5Fm7NGw0QaMJjGnMQGOqUBjqTeJtMy204xYA3xgGvvMakJUAk4cOf2bkqTGrJuJj3UfV9gerM%2B5EcFNQ0Oz01Ia11cvbjrR%2BSFV3gVaFbgElEUQagOqjLRZU6bBKPjMFnzF93nd23nmUJcG9Rg9CWzYhevQbXPLaJavtfawOMf7OlYbcKaEOG9RuU56ABSabaHXZ%2FOBY2cmJ1KLaTv%2BkRwS5YcH20Jg8nyjwzx3H3AP5MlSF%2B3&X-Amz-Signature=dffd688a16c5b9a0c0693079879f3c733cb3c310dd7453d8544ddecaf54ea309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
