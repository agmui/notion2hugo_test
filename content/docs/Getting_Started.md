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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FHHDRO6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDWHexBf762Mqwhs8o4Qg%2BaSib2cIM2kZET%2B%2F%2BHagRcfAIhAOVFNjQezSvuVw0CQ0fKRyGpZYLUDcyrib7OvX9ZPsNwKv8DCGUQABoMNjM3NDIzMTgzODA1IgzYA%2FSFFxVI%2BHSxT2oq3APb5Ivx9q0ky1ZoD4r%2BYsql4ZvQVXmGSJqyCQ9yym7Ej4fhfeCRB3AAFYu4U%2FXf6T5jHCvzjK4MhLMc0ZcVcPg3e%2BXiQ53gnDEMIaqcikwPiCR53oVVSAyYCLZc7kTk4oJbQX5mJ5Z0m9E0Ulm4VPFRCPra8J%2FpB1Copi5Jg%2BnqtjFJrL5NPeSUVveNTQs8pxrGpiXGAt7rE15ulcf6lkJXN5AiarSDTkFBV%2FgyY0qkAbBuBLUuDy%2FuOwAUvl6VQSmeSYmBN0xZM3QSqei%2FVcNqEDtFvdnoQh4cnfUPagecsQPV9NZ%2FpYy2oTM%2B4r9YqgAW2CwUbFrAC2pbc80lSYfphT46AqqcX5oy2wqVYgBQew8krx7AYlqEu0ZvqHvTeuFAMFnUJNGDLqKrFrva1aQ%2FRa9PXBnBvizoo0vRoAtQ9EKWCkMmw1GSzOgQGuMsKDSBAm5j4U%2Fz2L%2FEhaZlhWYxHlZ8cq1Cw0Wi%2BVSkTjHkaDSAItvYQVDeeo4KorByFiim8aAQnyioeWlx5HvsjC1zYfp7Icx9ulB4uCwryk1eVlZdYMUAQ%2FcdydlBKO%2F%2BG3zBB0q7dmgZb8BQ0Tp9Uwqikhjh3AqrOTN65WrA0VQhRNYe2xI7WK1MYXOUTzD94%2F29BjqkAVpkR99FpW7%2BBqpRQCsQW35wpuuwX%2FlyPJHCob%2FCRkQ80LJ7Tf6XSfTqEBmPUqYLtGjPnaJyvswzeoFjdmmJhOXzeIXLLiJyJEc7fCzgh1MywdtAKcr7Ei4Ns%2BhMf2M%2BARvqpmfvIWnArqAOQ1n2K1OAPitmftTba0tY%2FGT%2BbtFppHXmvx1aQ4G6A6m%2FZZcaXt03jA6EiEqGpBN%2FKuB0zLek0pqW&X-Amz-Signature=6346432f63f92f5d0ccc978b545979b83c006e4c146b0ce73365228cabf40f11&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FHHDRO6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDWHexBf762Mqwhs8o4Qg%2BaSib2cIM2kZET%2B%2F%2BHagRcfAIhAOVFNjQezSvuVw0CQ0fKRyGpZYLUDcyrib7OvX9ZPsNwKv8DCGUQABoMNjM3NDIzMTgzODA1IgzYA%2FSFFxVI%2BHSxT2oq3APb5Ivx9q0ky1ZoD4r%2BYsql4ZvQVXmGSJqyCQ9yym7Ej4fhfeCRB3AAFYu4U%2FXf6T5jHCvzjK4MhLMc0ZcVcPg3e%2BXiQ53gnDEMIaqcikwPiCR53oVVSAyYCLZc7kTk4oJbQX5mJ5Z0m9E0Ulm4VPFRCPra8J%2FpB1Copi5Jg%2BnqtjFJrL5NPeSUVveNTQs8pxrGpiXGAt7rE15ulcf6lkJXN5AiarSDTkFBV%2FgyY0qkAbBuBLUuDy%2FuOwAUvl6VQSmeSYmBN0xZM3QSqei%2FVcNqEDtFvdnoQh4cnfUPagecsQPV9NZ%2FpYy2oTM%2B4r9YqgAW2CwUbFrAC2pbc80lSYfphT46AqqcX5oy2wqVYgBQew8krx7AYlqEu0ZvqHvTeuFAMFnUJNGDLqKrFrva1aQ%2FRa9PXBnBvizoo0vRoAtQ9EKWCkMmw1GSzOgQGuMsKDSBAm5j4U%2Fz2L%2FEhaZlhWYxHlZ8cq1Cw0Wi%2BVSkTjHkaDSAItvYQVDeeo4KorByFiim8aAQnyioeWlx5HvsjC1zYfp7Icx9ulB4uCwryk1eVlZdYMUAQ%2FcdydlBKO%2F%2BG3zBB0q7dmgZb8BQ0Tp9Uwqikhjh3AqrOTN65WrA0VQhRNYe2xI7WK1MYXOUTzD94%2F29BjqkAVpkR99FpW7%2BBqpRQCsQW35wpuuwX%2FlyPJHCob%2FCRkQ80LJ7Tf6XSfTqEBmPUqYLtGjPnaJyvswzeoFjdmmJhOXzeIXLLiJyJEc7fCzgh1MywdtAKcr7Ei4Ns%2BhMf2M%2BARvqpmfvIWnArqAOQ1n2K1OAPitmftTba0tY%2FGT%2BbtFppHXmvx1aQ4G6A6m%2FZZcaXt03jA6EiEqGpBN%2FKuB0zLek0pqW&X-Amz-Signature=cf4a077139230f90d4a9d94ac9816249b72c6a23ce9dfb1ea5f9e6a74e114be0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGO47AEW%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIBoLvskJbBQ%2BEmkm6NQZ5mDmrFXyP9NscatBaQ1KFG5VAiEA8fzDqv1s77DMrgPguf%2BiYlfBXkSEDtjt1pF3UXswmUwq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDMJqqYdVhZZHhOQBvyrcA1oiLVhjFeKpPQGmTFuhlJaO8NW%2BnAvg0OPY%2B5L4dN53mYyDhARPK9juP9Px3YIl3ngygd4WeF4J3hsS%2BG6dnIfHTT39K4prv4BSpH45aqzFSTw3U3rfJIf6ipk714gly7IaAuROXAD9sqC6NHAA%2F6hR%2B%2FUvhu8XzBdhw5wo%2Bttzcn448dH1bBgxHtPz7XPdBPZ8NgeF6fV6VelRUwR9HrtlhykmOMvm%2BcnBxAi2yYAGfJj9V4oJXoDqs5vrwe4P3i87D20zOk9KOY%2FYakSk%2FH1M2g5QV4WDYZ1Mh80evvVskTROKfvFFGgAilK14BtHWqCGZaZCe%2BL2024AlIt54rFae2DFAnpZpV13GMv1J%2Fs96BDV8kTbb31oezbuh2WkmgSs7EfFJrvR6A8mGNUVa%2B1NH2BlaBR%2Ffj3bn9yXaXiKQ4SSomBJZ05zeYMRHtUPIZkdxJTexT3CBWxFspX4SlvPJSwhFhlnfBFFCryHGDiD%2BIfh6y9ZMo0i5kjRkuQW0NkhuDfFiVKnv2xqXifHB2%2BUeAIwi%2FXXvqvxvNA%2Bv3XIMcUd7R5kZ17hOL59bWFfJOFpiq6Vahes9grI8j6uVC4r%2FkfHqNAv1gHvDMBQ4nN%2BaO5HiwMJrKWNb2pGMIDl%2Fb0GOqUBcOxTg1ucO3y3c%2Fi85vJbjbQmO6%2FjTTZcubxDTjRJEZD5sBvqoX5MA4uD6xyOQWRzHmZD3AFfX81f4OGb99Jyddl7DIqho4KvOh8YeRVZfqfeulPG0dNeXvEPkbxT3ENbrZBY%2FPsl8r8KCDAbs%2B1KSWXGQhhVlG4Xkqhu4jrGbmQoHHgEJXPXMAGP%2BewNoiSOr5swSxvSI0wVeDBwZSmZgcAiTdh%2B&X-Amz-Signature=fbd0bf78a3b37f4ad32557e5fd8bf8424a83a244cb6fda0bd8bea01033bce59a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JWG2VFQ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDS8h4ePZ8W%2B8wc0eSudvkef%2F45RZG6951ZMgW7Z9dUIAIhAO3oDIXgbig1OdrwMuxSGAs1AGB8dQniO0hDf%2FBzuC1FKv8DCGUQABoMNjM3NDIzMTgzODA1Igzvi8JsqT2wPNUHkJYq3AOVa0i0y0%2FuAyWe%2FHX6iwxnW92NCMu%2BQbCuVCCt2XIH%2BSYr%2FI6w9e7Lu7VgL3lTeheioVjaOo3qp2a%2FSVcz4e8Y%2B1RNKzIlEMjg%2BOPvaFAkfcUiV0MUkcv3soCvSlYFNSbynXpGKXWu%2F%2B%2FOBF6Ej3Mw98%2B8EXvzEWRWWm%2FK6RcMCAkASz%2Fwe1ot53u1dhLxd%2FkFLC6fxFJPXzRiGnNPzpmzOJ9reOLn8l309GPXkOhGY4KEAHiHjLaZ%2F9cutpfq7jLJIHHcC8ZyYBynwV%2F4sIhh0Rx3jsreJOhXSR%2BIQuwarWY9CEtkVCu4QJyw%2FxZkvSEiAOuxbARcP5iT%2FxHNbxFYtT6oH0quOL%2FCj8d%2FWV3VjTxlitcnN2CAKyO0F3C%2BkM7iM5%2BQE7bj1NXF%2FQaD1RFKNke1Tv97a9l5JugM2DLJkDdXzEIuRmzzX5qlG%2BpNnOi8jlzmXTpllbTcymILyQ4bfavSSLjkF3igvu%2BaqBiJEO%2Fpku37kd7cvngIw8AssX09VT%2FewL3pyG9QqnXweQbFD%2FI%2BMrKeZnpjPX04wSSdUSIcKKFXP6RLJ19DM4vfXtIlAZnkdeEIvKRa78RLNdX%2Fd3dzYJbwgGxuPGn%2BjN0Xs06knFaeQMRKbtje3TDu4%2F29BjqkAUUW%2BB4RBD2OCGXZSwpqXbZLvS1ZEDaDQEn6%2B6wHHqJZ7YRs8JqCrYLnznXqxpJq%2FVo%2F9HSPbV0457uWiR21lvQcL9IaLM3IlWsl03n6B9upTT%2BrBTHDtCBgNtTPrfOlM0DqUzvmsuXZ9P8iPZ3WjeSB9Jidr7fjPOIGIzdh9hteB8MwYU34FKn%2BL2dkYcXA1DbZ2EcWZu5zMur1zWlFLQbsrbuf&X-Amz-Signature=9f3db871d375441244e07ad9fc3c65acb48f06747ab2cb55a5ffb6835ba4c00e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FHHDRO6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDWHexBf762Mqwhs8o4Qg%2BaSib2cIM2kZET%2B%2F%2BHagRcfAIhAOVFNjQezSvuVw0CQ0fKRyGpZYLUDcyrib7OvX9ZPsNwKv8DCGUQABoMNjM3NDIzMTgzODA1IgzYA%2FSFFxVI%2BHSxT2oq3APb5Ivx9q0ky1ZoD4r%2BYsql4ZvQVXmGSJqyCQ9yym7Ej4fhfeCRB3AAFYu4U%2FXf6T5jHCvzjK4MhLMc0ZcVcPg3e%2BXiQ53gnDEMIaqcikwPiCR53oVVSAyYCLZc7kTk4oJbQX5mJ5Z0m9E0Ulm4VPFRCPra8J%2FpB1Copi5Jg%2BnqtjFJrL5NPeSUVveNTQs8pxrGpiXGAt7rE15ulcf6lkJXN5AiarSDTkFBV%2FgyY0qkAbBuBLUuDy%2FuOwAUvl6VQSmeSYmBN0xZM3QSqei%2FVcNqEDtFvdnoQh4cnfUPagecsQPV9NZ%2FpYy2oTM%2B4r9YqgAW2CwUbFrAC2pbc80lSYfphT46AqqcX5oy2wqVYgBQew8krx7AYlqEu0ZvqHvTeuFAMFnUJNGDLqKrFrva1aQ%2FRa9PXBnBvizoo0vRoAtQ9EKWCkMmw1GSzOgQGuMsKDSBAm5j4U%2Fz2L%2FEhaZlhWYxHlZ8cq1Cw0Wi%2BVSkTjHkaDSAItvYQVDeeo4KorByFiim8aAQnyioeWlx5HvsjC1zYfp7Icx9ulB4uCwryk1eVlZdYMUAQ%2FcdydlBKO%2F%2BG3zBB0q7dmgZb8BQ0Tp9Uwqikhjh3AqrOTN65WrA0VQhRNYe2xI7WK1MYXOUTzD94%2F29BjqkAVpkR99FpW7%2BBqpRQCsQW35wpuuwX%2FlyPJHCob%2FCRkQ80LJ7Tf6XSfTqEBmPUqYLtGjPnaJyvswzeoFjdmmJhOXzeIXLLiJyJEc7fCzgh1MywdtAKcr7Ei4Ns%2BhMf2M%2BARvqpmfvIWnArqAOQ1n2K1OAPitmftTba0tY%2FGT%2BbtFppHXmvx1aQ4G6A6m%2FZZcaXt03jA6EiEqGpBN%2FKuB0zLek0pqW&X-Amz-Signature=840d9b85302c7d0aedc221484beb59be63c0f65ac6e95990a55a55853210bf62&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
