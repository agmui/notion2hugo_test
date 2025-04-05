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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSG7Z4K7%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T131419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg5Jf6pD7tQ4q0y%2BMyQZ8Jj2Gm68E6mn%2FpfddKJn4eZAiEAi%2F7%2Fverv89JDiC3xRBq98MiyS6e3qbMTxtbTg6QQ%2FvIq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDHoMYtTFrPk7gMObGircA9o1MyDIpsA%2B%2BdSRivSm9V9ucaGFsV1oSfl0wvie5z11dea0Vtn12HisdiAMjOB8A1UOGHGYWwKLz6waDyv2D%2BQh4Uh2Q6kFruf2uuFLyFuoNmm0CONIrqiCuECV1UqtVMMm53c6fjn8TQ%2FpklBjN8cCvxgPdcJz1cF11WAq2Sye6oqRnZ93w%2FPhxFOQS1bnma8FdSdHTQkbfK4h0v3g58XgmYpHBCH937OCxTMNFlaQQ2YCcEu7X%2FTw5YSoITp0k%2FenI8qWMy%2BeuC9yoHe1pMZxa68N2TonA9wSmoeQY4XqbYtoF0BC3I%2Bo5XqcZrYavD5o4Xt%2BG4LXiATbGY6DwFVF7Kklgd%2B0XPYRUaz4huI1BRpLhFWTrSSBIDO%2BbAc46t9tLU58dWtLCJiTmg%2B9r1WS0YwvI1j9sn%2BRY06WFEgLnEGDxWc%2FkbkQ1r0GUE5BBfmIJMX9mgiYRMHRVENKP9GfnrkfQtAy1vJ5PeYOzAfW2n2MF0GFV%2FI5TjleR6IP5LbwwA%2FEhCp37Y8kHdGWWMo%2F0F9bzu3JJnbNT2LENlwPfHQJQ7lFYs8dT%2BFKmXLc6zuk6qfFboMn5ORy6tT4B7E%2Fn%2BqcJhAhOK%2FNO8iuePjMcZbac730MBsFYmQtMOjjw78GOqUBxF4rj0Ja49tB7AYh7%2BvVUPPRrTWPnxnd2D6%2FcdmPbMrHG5bua2D8D67BfQXSI0raRCdFRcLQPd1Q%2FaaQETKaqiLSgVEVhNQTArzaq6HM9rMUYLa3ZVm1SXaN0CfsJa8hKDW3VkJSueeWth9r%2FlgWImZ8CMlHoJ1bmY5Bm5MI2gT8Ligt0XpnIGzmDWri0mpFIEqpVSLO519GWRTCIF0dZ39%2F7gjA&X-Amz-Signature=9c8c602ec357fee0953319900d964d34240e425429058569c2a35a0d6a064cd4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSG7Z4K7%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T131419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg5Jf6pD7tQ4q0y%2BMyQZ8Jj2Gm68E6mn%2FpfddKJn4eZAiEAi%2F7%2Fverv89JDiC3xRBq98MiyS6e3qbMTxtbTg6QQ%2FvIq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDHoMYtTFrPk7gMObGircA9o1MyDIpsA%2B%2BdSRivSm9V9ucaGFsV1oSfl0wvie5z11dea0Vtn12HisdiAMjOB8A1UOGHGYWwKLz6waDyv2D%2BQh4Uh2Q6kFruf2uuFLyFuoNmm0CONIrqiCuECV1UqtVMMm53c6fjn8TQ%2FpklBjN8cCvxgPdcJz1cF11WAq2Sye6oqRnZ93w%2FPhxFOQS1bnma8FdSdHTQkbfK4h0v3g58XgmYpHBCH937OCxTMNFlaQQ2YCcEu7X%2FTw5YSoITp0k%2FenI8qWMy%2BeuC9yoHe1pMZxa68N2TonA9wSmoeQY4XqbYtoF0BC3I%2Bo5XqcZrYavD5o4Xt%2BG4LXiATbGY6DwFVF7Kklgd%2B0XPYRUaz4huI1BRpLhFWTrSSBIDO%2BbAc46t9tLU58dWtLCJiTmg%2B9r1WS0YwvI1j9sn%2BRY06WFEgLnEGDxWc%2FkbkQ1r0GUE5BBfmIJMX9mgiYRMHRVENKP9GfnrkfQtAy1vJ5PeYOzAfW2n2MF0GFV%2FI5TjleR6IP5LbwwA%2FEhCp37Y8kHdGWWMo%2F0F9bzu3JJnbNT2LENlwPfHQJQ7lFYs8dT%2BFKmXLc6zuk6qfFboMn5ORy6tT4B7E%2Fn%2BqcJhAhOK%2FNO8iuePjMcZbac730MBsFYmQtMOjjw78GOqUBxF4rj0Ja49tB7AYh7%2BvVUPPRrTWPnxnd2D6%2FcdmPbMrHG5bua2D8D67BfQXSI0raRCdFRcLQPd1Q%2FaaQETKaqiLSgVEVhNQTArzaq6HM9rMUYLa3ZVm1SXaN0CfsJa8hKDW3VkJSueeWth9r%2FlgWImZ8CMlHoJ1bmY5Bm5MI2gT8Ligt0XpnIGzmDWri0mpFIEqpVSLO519GWRTCIF0dZ39%2F7gjA&X-Amz-Signature=f8f3acebe0c14dea10fee731e87eb3a16b611b76cf8fbb0f42e434ba3821a6ed&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2VH32IB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T131424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTNNymwmsJGmim98shDb1Nr6y78sO8nrn47%2BDdxLORVQIgX0pwBRlOvrgFafp8MDxMY5a9OHzNowwAP%2F%2FzH6w82GQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBecxD6DexWoLZeNQCrcA3m4zOy2vjCdbL%2BFs6j7AocrnBe7YQTXvAXYirBzHid39%2FnPVoRFJZZ6e9MmGsKHvImLk0RoKs1Tpr%2BkiIsVJu%2FIVLViSzOQ5R3lca0fU%2Fl0Dt2jiJR3yZY22lHnA5C5q%2BeR%2BJgdw0yZBuYmVycaQ%2Ffkqmgg3hkLkMJGxYoG8R9IK4Xh2sNAE1BCTFUnaoyXdQm4OGP2xRsawJrE3yce1AuZ1JQzjHbW8FLokQkNT4uuR6ekbOmIqKFv1KPInWmOJy1GE1sNGwnpYQx2dbHjlK1Hp3qe1xPHnfwdK24xTzscohum1UVKzbzyD3SSoRubteIuhLcp4E%2FRFvAdF76zhKRN7rVk0Kn2ZUxg66qpDvyk8NgTwKHcV4REk6MViMg0%2B3Gow15O%2Bf92DtC5I77IKhm6NZKJTtLcEj%2FlUDnbwKVvUqOfzToBqwA3DCWKj3Ok1o2qKydzzl2OKXdJyLTyCLodze41HbSp5iTBTrsdvMf7biiKahNfqnqFBL2Yr91W1O1RDbY68cSjZATI%2Bu5J2hKGnjlxssdIR3g0OtUcZQHmbA3nFkS8TVttfFWnCSs1DqR0WLVpt9aoo7992e26GLyOt1tpqdMcaYNJnslsJnEyT3geOjUgJ7Ok9S6OMNPkw78GOqUBxzk4iZnCOT5%2FOIbDVFYDWdRsQ5D%2FrxEcVgBho0Gzh5aFMhZl5xebw0Qhr5fb%2FB%2BYTUEVMDLQwL%2B0Z7GnWK2RpRMfuRgcFrqBGJ07iy4YjlmYa8VCAgF3%2BSnrGihSJIBR2B9%2FyVBlW3A4mqUO2KcgB0XkAUyTWA9IK43nvWi%2FrQBq%2FDzgC4QfAYEFyPwczQWb97qo%2Bd2%2FNTqzU4OKVkOaidebrPgl&X-Amz-Signature=4350606f88acf3b1cb1dd08b78639ce2faf71f352bf23fc62b97bcc41e0f0245&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGD2Q7AV%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T131424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhwmIuVEnXJquuN1X7xrwfouR%2F3%2FnGHxSH4KYaWD9I9AiBNdht8XGXaorECfMIRV0iF5rhvZwe%2BREtAUY%2BvIr%2BjFSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMneHGqMDnGfl%2Ft9EIKtwDo1xwk2xfXxdl6w23%2Fs55kRt1BNO6VFycSNM9ZMgld2SPYzvcJ10lRzAsDzTEj%2FDlA%2BFm%2FDvKI169KPyM88b6psh5Rp%2FwpVU3aqhxI8SFcfF0vwK0EEva%2FUO5ce63OvYRzBGDbIw6GKizft%2BK2iIe5HVjzWYGhyhcrBMANp47EkmA80gvx1HvVC89V%2BaV%2Beqk9En9FrGdjXe9vDvzDxfQVChoatNntGjHJIOnhIf3kTRs%2Brh1mqr30NsEQeOUv9Ur8FdcZzcR68yAK1XVGNj8rMLSfF8ocbvvtg5Zylo6vz34l88v3FItk%2FkHK%2F%2FVkW83fsCdIzJhhTndwEFN4NnM23JCOyNN1huvkaajXVFYLrIhXA%2B7aOBRhNy3Ck6jpKN%2BlSf9UzPQmz6r0TV8lmlMIEQVh2G0cSt7k2T05c%2BnMP7fmx9qfa%2FxTEZabK0N4iWf45dteuktplCUwO7JYKLcB3VkpmB0OPH%2BJ%2FsUWfRP8UkBmNDZu7KCv0bsPye%2FZ7jFuMf0ekWHb0%2B%2BypZdBma2OPDyxkTTCHfqP09zZ2w%2BGeeufS3r2EaXHe%2B50PDPvEmOYzazulxNHtp1i%2BJoVwaO03UKgUgx2MNggvA%2FBxjSJ%2BGUUdI%2BLuIuzKER0CEw9uTDvwY6pgEolEX4GpXDUhychO%2FJJsFtaVZoA15pyo%2FzwcnA5HRt1y%2BBYH%2BvQN1R7tDGKCyzbXnsQbl0xWa%2Fyv1yltE6qJvggdBjQ5RjzodAjzV4NX2y9MiECP4MEy9Ak4v1s9oAa3oqFho988tUr1BOJakqjkF%2BlLJoPoDfiYb4XszrWRWpdLb9eajS1POjwDvTMwxyku6M6jDIBz3mjfLxY4uMvY%2BQ6wq%2BIaYj&X-Amz-Signature=f010b3159866ad30e058454ba5f695361ec5df6b923fe36cc048476c9f5a6b6a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSG7Z4K7%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T131419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg5Jf6pD7tQ4q0y%2BMyQZ8Jj2Gm68E6mn%2FpfddKJn4eZAiEAi%2F7%2Fverv89JDiC3xRBq98MiyS6e3qbMTxtbTg6QQ%2FvIq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDHoMYtTFrPk7gMObGircA9o1MyDIpsA%2B%2BdSRivSm9V9ucaGFsV1oSfl0wvie5z11dea0Vtn12HisdiAMjOB8A1UOGHGYWwKLz6waDyv2D%2BQh4Uh2Q6kFruf2uuFLyFuoNmm0CONIrqiCuECV1UqtVMMm53c6fjn8TQ%2FpklBjN8cCvxgPdcJz1cF11WAq2Sye6oqRnZ93w%2FPhxFOQS1bnma8FdSdHTQkbfK4h0v3g58XgmYpHBCH937OCxTMNFlaQQ2YCcEu7X%2FTw5YSoITp0k%2FenI8qWMy%2BeuC9yoHe1pMZxa68N2TonA9wSmoeQY4XqbYtoF0BC3I%2Bo5XqcZrYavD5o4Xt%2BG4LXiATbGY6DwFVF7Kklgd%2B0XPYRUaz4huI1BRpLhFWTrSSBIDO%2BbAc46t9tLU58dWtLCJiTmg%2B9r1WS0YwvI1j9sn%2BRY06WFEgLnEGDxWc%2FkbkQ1r0GUE5BBfmIJMX9mgiYRMHRVENKP9GfnrkfQtAy1vJ5PeYOzAfW2n2MF0GFV%2FI5TjleR6IP5LbwwA%2FEhCp37Y8kHdGWWMo%2F0F9bzu3JJnbNT2LENlwPfHQJQ7lFYs8dT%2BFKmXLc6zuk6qfFboMn5ORy6tT4B7E%2Fn%2BqcJhAhOK%2FNO8iuePjMcZbac730MBsFYmQtMOjjw78GOqUBxF4rj0Ja49tB7AYh7%2BvVUPPRrTWPnxnd2D6%2FcdmPbMrHG5bua2D8D67BfQXSI0raRCdFRcLQPd1Q%2FaaQETKaqiLSgVEVhNQTArzaq6HM9rMUYLa3ZVm1SXaN0CfsJa8hKDW3VkJSueeWth9r%2FlgWImZ8CMlHoJ1bmY5Bm5MI2gT8Ligt0XpnIGzmDWri0mpFIEqpVSLO519GWRTCIF0dZ39%2F7gjA&X-Amz-Signature=6a4b7e5973c4d6ebe5f1a85579b2b55973e2a488ed2d591a6c53439e80e97ef3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
