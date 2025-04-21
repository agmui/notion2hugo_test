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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE4CBKRR%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQC3nWh6OfgLwBZCzJwBz7WhIQIPS%2Fu%2B4OcDv02DXej7AQIgJ1UPZP5j%2BNSUC2dYiods4cPy1sq17G374K9xoQTlc5oqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVLcWqjaNgpmNC9RircAxb%2FM4LqZPUVRnc5UnRCdNV%2B%2FlevDVe%2Bx8c%2FeupzYilvnFgWoObcMwWzB%2B69ld%2BQjaPgEAIh1hS21RjknMd0%2FjYK3muxDWu0p13mDS8m%2Fh%2F1w%2BC9mCjQBnutkYhhxAMCNiDmVU86K2SxSnwdnvhT4Sfyf7QoXfo3x2C%2BHLlrf3YSYMlMEAjSTWgUt9GBEb5QoStS4SbgdsubLNA7PRDHod6zdQS%2BFVHAxaSB0hfZd0GEYykgjpalHHKXfpBbV5fifJXvTrHrwlgTCbHrc7D5OfEM1tbAn20OyEyHvj1pca95GRaVNnfKly9KSKl2Xj6ikR1u%2BK9Rq4zXjZY5w0oboLnT2ZZRgVENBhq5ITuGMjn9xFMB9lseWgcZfXsT%2BOEK15iqPnPy8UiOh7Ot76vBDTFXVL%2F5pnHBVaLZsUHaW4ZeMAcsqTCijFLqAODdLPCWQOH985BlHsrGRAFKyResa8XDk57ooS24HLQVtcB43BOGUb30Wwd%2F3rQVViOuGgXGSDqb%2FKvc7ReHE7Gd4oPTfMg0XCihD2kFddfJqMTFxmghFK9AzvDFeWbKXdYSNG54Ob3dn2drO0v8vwGZ9hC9DnNU2nfsIf81nI%2Bq8k%2F91QLQureY%2F%2FNt5OgWJLPJMPa5mcAGOqUB%2BcuaKjnTFuN5obqC9js29hURGISb8sGhoy9akbXgwRvhuMLGCqc84VAbb6ZD08uZIPdx7JB1oeSZR6dKW9tq8CEfa7rc%2BPj2EVorz8pACwXbzy3931yPO%2FgxW2OHLf3OiDOj66cOljbBpAGq4%2B2B%2FgCkJuoUTUlUaLvC2WGS5QyZtlf0D0qEUkXprzYU3I1Rmp1UQj%2BcZXKyS69AGp6XPM4kgTEp&X-Amz-Signature=c16b465abb1a8cad9db6ae5ac047c1fa41d1dd51965d87cc785fb63d733eafba&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE4CBKRR%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQC3nWh6OfgLwBZCzJwBz7WhIQIPS%2Fu%2B4OcDv02DXej7AQIgJ1UPZP5j%2BNSUC2dYiods4cPy1sq17G374K9xoQTlc5oqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVLcWqjaNgpmNC9RircAxb%2FM4LqZPUVRnc5UnRCdNV%2B%2FlevDVe%2Bx8c%2FeupzYilvnFgWoObcMwWzB%2B69ld%2BQjaPgEAIh1hS21RjknMd0%2FjYK3muxDWu0p13mDS8m%2Fh%2F1w%2BC9mCjQBnutkYhhxAMCNiDmVU86K2SxSnwdnvhT4Sfyf7QoXfo3x2C%2BHLlrf3YSYMlMEAjSTWgUt9GBEb5QoStS4SbgdsubLNA7PRDHod6zdQS%2BFVHAxaSB0hfZd0GEYykgjpalHHKXfpBbV5fifJXvTrHrwlgTCbHrc7D5OfEM1tbAn20OyEyHvj1pca95GRaVNnfKly9KSKl2Xj6ikR1u%2BK9Rq4zXjZY5w0oboLnT2ZZRgVENBhq5ITuGMjn9xFMB9lseWgcZfXsT%2BOEK15iqPnPy8UiOh7Ot76vBDTFXVL%2F5pnHBVaLZsUHaW4ZeMAcsqTCijFLqAODdLPCWQOH985BlHsrGRAFKyResa8XDk57ooS24HLQVtcB43BOGUb30Wwd%2F3rQVViOuGgXGSDqb%2FKvc7ReHE7Gd4oPTfMg0XCihD2kFddfJqMTFxmghFK9AzvDFeWbKXdYSNG54Ob3dn2drO0v8vwGZ9hC9DnNU2nfsIf81nI%2Bq8k%2F91QLQureY%2F%2FNt5OgWJLPJMPa5mcAGOqUB%2BcuaKjnTFuN5obqC9js29hURGISb8sGhoy9akbXgwRvhuMLGCqc84VAbb6ZD08uZIPdx7JB1oeSZR6dKW9tq8CEfa7rc%2BPj2EVorz8pACwXbzy3931yPO%2FgxW2OHLf3OiDOj66cOljbBpAGq4%2B2B%2FgCkJuoUTUlUaLvC2WGS5QyZtlf0D0qEUkXprzYU3I1Rmp1UQj%2BcZXKyS69AGp6XPM4kgTEp&X-Amz-Signature=37ad30bee6d53cafb3d302cc5b264b9e09600ac7e9078a7d67f99e6d6eb5e50e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654RNWKFQ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDq62BcCbaKGJdwbwHZ%2BwqIQOKQZ357OkAn73AQuGjA0wIgb7WraW%2F4NPc8DxzPmHYp4QKwlxRel5RQiuLn8Xh5AMEqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGvR%2BqXaUuRTUnFySrcAxwQCWfzY6KGpvWL3IrmsA%2F2lAjw7jA2ohK80Ux7He%2F%2Fx13QPljxbUjVeGVKxpWrBGFT8kiXdqNKl%2BATuCXoAbDY2wCEb8y4jFDsDkNnFCRedGiOfMC4D4DrPj9JyWCEIFE2DqByfzXycu6VJLL3DIxQSOJJgXHs9UbzcGxezW5nshT3uyYQyngMJvekBjJ3emDrRXzRaaji9o29gvNyYwGqRmmcTwpTxaDb4uIhsX01KcEYXD3H8%2FZVSm8KZrDEPa2IGnol8C1z5BfUKuAl4xV1Gf6JGb6wWl5g8kapJWsDn2NIpum3XdpehncZqZUuCd8387U0jM0T9KWzNxkiWh9SsQHeSlYTRN17B0Ym34W0UWVpKE6leOZc%2FZSjoETPtCws%2B6A5WQe9pgVI%2BVghEld8FwPR2kz1ULTfKNJhjz%2F6ySvhXaEd7TWxh2cGDMcY%2BCHLRN%2FG6KtMgRrOE8z033NSzySdO5d%2FWS66lDxi9tluN0pScc8rDD%2BkKTcwuLJEZ5Cg2uFYNocbwpVg7NaV6rgvSq5WkoE1fXpPxfSDNdJ3wSvQPkXTXBuSP4Vvz%2FWClsUfJQPfMs9BgVZK3SD%2FM5wU3eo%2FN6bHxZBDtfiAAdBtlaP5dkiDeqKyQSIlMOC5mcAGOqUBhLAu1%2BgTu6bZk%2BTzL9KO2A3%2BoJ6i7NV43B3dFCPtcwtqbqjkmIDofHsjvJqh8hEuVlfwJlNOLz7iAtTS4wYPkmZ5U9EAvHedvXQbCeNi65JYxnA%2FSG6qQ0mRqCgqFollBkemp%2FBx1v7G2h1Lbaa3jx3AJBuf0MJwzHomly0l5HNXwNF82KALfLq7yk%2FV37VGf%2B0YlAnYjH3ya8xREKSyrSuulG6u&X-Amz-Signature=d90183b4cf74496476c5f6259c60708b8b5e255a6bc92eb4194fa671f4fc786f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC5OIQMW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIAgypT67HEB7xabNwqClpT0Flj%2FiOZaquvGMJBSf2vyfAiBwBbDV7wDKgY%2F%2BO3R7jAl42L%2BqbVgiYhpFunG0sHQKuyqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM59dj7pNOpvIX33MLKtwDbh7gDJffxQz7b%2FkZvtUYSSqGAAwdpqnr2BSk8R2VhuKT534Ambe7zjvmrt8%2B%2BV0odP3Cz5%2BuJGOVL7Y8uEAxvJImIvxvfc9FqK9qeulcCnl%2BCSRaRfK3oBb%2B%2BHauka1skznnrRNhyj5R3rNr3Z2d9QV7VROyBv9i0eclT%2BPPsp%2B6QFoJ0q24piXbVWUSSx8rrw%2FQX%2BP7rB29raH9mk5l4FCd4oPvb9PiItPbOyEJuYZhGIG1Mm5VoxdVU65BRetSw51Mrj4OOllUNC%2FUKaV1nm75kixq8kVF3bvo5NflU8%2FQnKmnumzGGovq9Up195iqFMEYDPn7hkr00vX5oqY3%2FlDB1v2WVrlKozhgeSq0xqEENW7eDInE7DvrVO6wTSnkRYWMLYjrJCZPTrKWoyXJNMMlAZ9iwHNo%2BG1BfrtSFbvqi31GBpPaZOYIDqsW2eX%2B9KQ9RlbRWRf9hN9tFV6oTGSca6PeICieeRdfv%2FEipEhSGjgRFY2cvcxKOd1JtyY3ZWP2K%2FBpwq9%2F%2BbM2SlfnKEGVXfP4R1cJlaPjViMONLPwHw3g86%2F%2FzQPGGYdEh8aUhxCmhJCnDg6rAmfr1BHaasYsgIWasnXsFcBfnoCOxr%2FpaJn70n%2BghUTZpSAwv7mZwAY6pgHMo4C68371nBr%2B1SzdNiVdSd7mVotqTdgZXzm%2BO6GE7WrK00ZlXMy5wTMiLzKrSHQyVWscZ7w5k5yq18vXXBWDu3wSICeWVprP9ZS9QMTcy4mm79QfsNrXDNxRYD5P9mhy8L5KXGLKVSwO5TvVLGOBNr8o6q12ZyaSMvFfbzT1ZvEd%2BovnJkyBfZnjFFapV%2BoGjfjL3acF9lgErG8xFg8IPibxi2vk&X-Amz-Signature=be8fc457319fcfd2c334a9c5bad5ed71a047ba64a555e8f8fdc9bd4beaca6329&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE4CBKRR%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQC3nWh6OfgLwBZCzJwBz7WhIQIPS%2Fu%2B4OcDv02DXej7AQIgJ1UPZP5j%2BNSUC2dYiods4cPy1sq17G374K9xoQTlc5oqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVLcWqjaNgpmNC9RircAxb%2FM4LqZPUVRnc5UnRCdNV%2B%2FlevDVe%2Bx8c%2FeupzYilvnFgWoObcMwWzB%2B69ld%2BQjaPgEAIh1hS21RjknMd0%2FjYK3muxDWu0p13mDS8m%2Fh%2F1w%2BC9mCjQBnutkYhhxAMCNiDmVU86K2SxSnwdnvhT4Sfyf7QoXfo3x2C%2BHLlrf3YSYMlMEAjSTWgUt9GBEb5QoStS4SbgdsubLNA7PRDHod6zdQS%2BFVHAxaSB0hfZd0GEYykgjpalHHKXfpBbV5fifJXvTrHrwlgTCbHrc7D5OfEM1tbAn20OyEyHvj1pca95GRaVNnfKly9KSKl2Xj6ikR1u%2BK9Rq4zXjZY5w0oboLnT2ZZRgVENBhq5ITuGMjn9xFMB9lseWgcZfXsT%2BOEK15iqPnPy8UiOh7Ot76vBDTFXVL%2F5pnHBVaLZsUHaW4ZeMAcsqTCijFLqAODdLPCWQOH985BlHsrGRAFKyResa8XDk57ooS24HLQVtcB43BOGUb30Wwd%2F3rQVViOuGgXGSDqb%2FKvc7ReHE7Gd4oPTfMg0XCihD2kFddfJqMTFxmghFK9AzvDFeWbKXdYSNG54Ob3dn2drO0v8vwGZ9hC9DnNU2nfsIf81nI%2Bq8k%2F91QLQureY%2F%2FNt5OgWJLPJMPa5mcAGOqUB%2BcuaKjnTFuN5obqC9js29hURGISb8sGhoy9akbXgwRvhuMLGCqc84VAbb6ZD08uZIPdx7JB1oeSZR6dKW9tq8CEfa7rc%2BPj2EVorz8pACwXbzy3931yPO%2FgxW2OHLf3OiDOj66cOljbBpAGq4%2B2B%2FgCkJuoUTUlUaLvC2WGS5QyZtlf0D0qEUkXprzYU3I1Rmp1UQj%2BcZXKyS69AGp6XPM4kgTEp&X-Amz-Signature=12bcf3a2c87442a21330b807dcf668d9999810707b611646a4a2bb8b59468104&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
