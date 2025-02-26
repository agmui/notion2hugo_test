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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQHG6YKM%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T160941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDUILBCWdtpFfLUCGkizkr6O9soqd2UBV1on0DTE6va0gIhANDP6H5mauC3bh8Q%2F8O6PsV%2BSs5itfxIgNBXhIuHxA7PKv8DCF0QABoMNjM3NDIzMTgzODA1IgwG13RR9emhCDAhqwYq3APOzQj6NRarAlQjut4BJwzVUdjsPwEAUKGQkn7p%2BS%2Ftz0BD4tUMQjY556wLN9tCJMUQz26Z%2BIzqS5MgcHSNEdSAry9te%2FHsMxTrwUOqS7SypZ5q0MtUCBrKBAZQbTELTtzZPKdQbYL%2BCgm5RkuDN9lnZ1rIKqlDtWRB6grJbEgQmixY7whoQcsjJ%2BVKD7NuCe%2Fmz8zbfgv2eLEeB8d%2BzoMFgkgmYEcwchXSDKpRbX%2BWa4ahcZNN30rEOWPURQ3HERE99uSA0YJSlYkDgaWdReGqJNs74tIkddH3vltZE%2F4tjEre5yLJtQ62Nu6yBrfe9AU1gxo1sZJBZj0%2BDYJ9TzeNSzGG9EKFEtAmT7evTRVRNP068h5wjGPzRVBZG1yAJWiEMo3HUjsGR5ALIMM0YQ2G5zJFGtvIhYb0w7atepT4Z8jIqg5QlsdrubErT1Ibj2GieW5Ie0AwjyVFk%2F9%2Fd0eSOpD2a04wiGssWWtxMG7ZmW1Mu1GKeIJa6yCA7zGbpRUC6%2FVSX2K1tHNJSOhdBCUT%2BqYKRddL%2BfGaXagHKKg0MV8Pti%2BzAKCkPdxBA81v6LD%2Fj%2B9bORExJSw0FwwG7eDQ0ZsyasgfYDToDKyJDY0NjTHNOxytt4gH8t9gHzD7h%2Fy9BjqkAbgyeQ132ghNT9WhmXUWz3ECue%2FqmaHPDVJg7pcq6h9QUenQknxN%2BB1XUU2uCHUUtxfsKwx6x%2Bvs4hVjNhJTBPGQeE0sMm5pcy6bFDHR6pgt51o%2BAmgaISSFOj%2B6qC%2FHyVg5f%2BwirdjXoaxfoGvPnlwp1%2FSPMqboSZWnvdArPVIzvQ88jOMzIBgouE5fdeV9GGiRaLcwT5xvO2Y7QJ7xEPdAi9KQ&X-Amz-Signature=5804bf47707c639eca1f4332633c118745f85e120f53c755efeb7c0d50b61794&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQHG6YKM%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T160941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDUILBCWdtpFfLUCGkizkr6O9soqd2UBV1on0DTE6va0gIhANDP6H5mauC3bh8Q%2F8O6PsV%2BSs5itfxIgNBXhIuHxA7PKv8DCF0QABoMNjM3NDIzMTgzODA1IgwG13RR9emhCDAhqwYq3APOzQj6NRarAlQjut4BJwzVUdjsPwEAUKGQkn7p%2BS%2Ftz0BD4tUMQjY556wLN9tCJMUQz26Z%2BIzqS5MgcHSNEdSAry9te%2FHsMxTrwUOqS7SypZ5q0MtUCBrKBAZQbTELTtzZPKdQbYL%2BCgm5RkuDN9lnZ1rIKqlDtWRB6grJbEgQmixY7whoQcsjJ%2BVKD7NuCe%2Fmz8zbfgv2eLEeB8d%2BzoMFgkgmYEcwchXSDKpRbX%2BWa4ahcZNN30rEOWPURQ3HERE99uSA0YJSlYkDgaWdReGqJNs74tIkddH3vltZE%2F4tjEre5yLJtQ62Nu6yBrfe9AU1gxo1sZJBZj0%2BDYJ9TzeNSzGG9EKFEtAmT7evTRVRNP068h5wjGPzRVBZG1yAJWiEMo3HUjsGR5ALIMM0YQ2G5zJFGtvIhYb0w7atepT4Z8jIqg5QlsdrubErT1Ibj2GieW5Ie0AwjyVFk%2F9%2Fd0eSOpD2a04wiGssWWtxMG7ZmW1Mu1GKeIJa6yCA7zGbpRUC6%2FVSX2K1tHNJSOhdBCUT%2BqYKRddL%2BfGaXagHKKg0MV8Pti%2BzAKCkPdxBA81v6LD%2Fj%2B9bORExJSw0FwwG7eDQ0ZsyasgfYDToDKyJDY0NjTHNOxytt4gH8t9gHzD7h%2Fy9BjqkAbgyeQ132ghNT9WhmXUWz3ECue%2FqmaHPDVJg7pcq6h9QUenQknxN%2BB1XUU2uCHUUtxfsKwx6x%2Bvs4hVjNhJTBPGQeE0sMm5pcy6bFDHR6pgt51o%2BAmgaISSFOj%2B6qC%2FHyVg5f%2BwirdjXoaxfoGvPnlwp1%2FSPMqboSZWnvdArPVIzvQ88jOMzIBgouE5fdeV9GGiRaLcwT5xvO2Y7QJ7xEPdAi9KQ&X-Amz-Signature=38b97506796aaf2990e6983e486eb71160ebd6cda3dff538af0c6197b66afef0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VELHTZ7S%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T160944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIHH2AhCyno3J1qJi8WYqEgb%2BJ%2FVFcDEeXAYKyGldE4A9AiAQeVOa4gJklPTsVCYQNNZ18O0jWtgWwot1M%2BfMo8cyCir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMa%2F0wbJ8WUv6oYoLaKtwDfLJheGwT4NCoJsEC07A%2B7%2B33Dpj0kYW4bBTkfSuKGo28A4nIaE4rQr90SIGuBI5GZrkUGzH9ogODjcDn8E2jscFZMddtE2C1%2BMZIkQR5mYKaSn4WOl%2Bbm7tv1MRBUdPtpfEHSMHuD7bxibjXNS%2FCzoKTT8EX9N9EVgcHOW6C8sFQhkjdtVLgKeBF1KxSJCPA71L06rROHVma6EHY2J9MJ6YJ3LfRE%2FH9QNnXGnvHJ7iSUU%2F%2B8MoeHlgMeyNdX1h%2BIZ%2BGSvrE55ZvNSeMdRNLaXCF%2BfZDtxPxAHphs9%2BTbaB9pY0Azvof40IoHVi%2Flh%2FuPLtGQK2SCvcy0MmJbBHNOofm1IBo2CkYfivxwuAaCTtnDqO6pkuBh4hW8pP2z5yKYTDb0SWeFECjcZZRjuNzO9BqaJxmE2YkXJrBt37lQO7aIyOvxUiG%2BdXHPitwI%2BNuXucKV8b2k3P%2FnlsIdwnQzGpmb6XMe4xLpi0tuGnKurypJdm4cbEPGx9ixtMMS05z2v4yCM59qiIEBjiqGmqPDFijTvCOL4o7xgy9BIVyv7VuwOAWdDmdAroRTUb4f9Ghxqw%2FeN%2BI6%2FXBSYOTngaFrWHAbgKHyo6LDrdSyOLX1GRJHbmo7DvBriBtKacwnYj8vQY6pgGBMlXAi%2FJChPe4WXOEgA9r7jC8pUohaFDg1fU0M4Yb4%2BMxN01gyqz6hTr3WEByP%2BS%2BXmu0WO49WbBrUNbrrpU%2BecKQRmHilTb9Ly6vgxWkag6ohk0RNeQS0jmSouZLsd%2FAk%2FA7G%2FEDz6wGNIPck%2BFPwRDenMfVP7Yw1rPmnvZsbEZRVukJr0M%2FGm7ACuVlUJQZC5c%2Bbtn1nWC5hpAYV%2BBmH%2FQEB4wV&X-Amz-Signature=abbd2dea243afe13b0b31f6e71e1a137c66769d31d184f303375b90bf986c5e6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGHIFVUR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T160945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQC4vCkGDZOKINPtWOvyHS7B9iOtzc6euhgd86DWr7wwmQIhAKonhGdYyV6EroDlZYnULLtAO9fTHF4Z2M%2FdQkCfguaGKv8DCF0QABoMNjM3NDIzMTgzODA1Igx3lcNMIJy7SRoBSNAq3AMtf2G0k1EsnsTfRFoaqhAdWovLc13185iVUyio%2B0%2BbNnnbRDGc%2FaQy7tx63rRxYzP1epfoosa9KtfV0XzXWjRdAUhmT1q5T7U9HX2hexzuF4eNg7wub%2Fwww9%2FXjvsXFD7oudijr1cCv0UJuV%2FEbLW1cWt8r8x3uCf2e2tKCemGy3XS70P3RK%2FWHEmJOSk%2BRnbrrAvXD1o7h%2BKfLb4Lkzh7EB0pPrkFALMZTZ7G72WK2oX6wKwfMEdcqhDbj4KUl%2FA7wiFH7DQtAZIxOxUxtACsl39YMTBM0xu%2FWNrTHi2GwcXhCKhbSwmmTQijcYIaBVJA30PrbkjE%2B857Cd4QrCKNhj0EHNSeia0%2Fmt%2FU7CkDZ1ADvPf%2FXC7SNc77n7nuBeTacD2jOt535tAwFu2wKWpEzwUOoY2QVI7vtL%2BGrGP4yJVyt4V3czBYEFipMRv8XjdqAkGWTBRAvTQZ%2F0%2FNUSAc9qa40A%2FH4hj95uburEezxwGjBzyJpqNznIdjOOXhDjCByT8pOJ4nK5dLomqhMAAi5DZwYVGG29dhQTXHxJN5ubwfj%2Bq7KiehXAimD5s6M%2F9FG5gzbXaBqFz5Si4Tcr%2Be%2FVsSAybUbImoIg5sTLmJiG1Z4kHEjseAtU%2BoYzDKiPy9BjqkAXUmhFljfW9SA4B%2Bqbw%2BmTywXie1fsX2KboYFhj7kdsVciRY%2ByMBjYwXJg8A1giTl2dCJUduUsXxtMoQ0%2FUAerq7fYSjxuZ2r43b5gWs3Da9Sip3IDgc1tYb8CTZdXoiauuI4kX8oj0TV3TUP3BR9YC8zL%2BDAC2%2B6ldFbpkeJWaJd9Ff8kFQHfeMpudjPbXnp7Ibjx3BmxJipTVlkZEJbTEtWdCT&X-Amz-Signature=37b4212057f0684dba8f2b86330839b78bfb059cb5cc93247e539f6c92f061ac&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQHG6YKM%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T160941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDUILBCWdtpFfLUCGkizkr6O9soqd2UBV1on0DTE6va0gIhANDP6H5mauC3bh8Q%2F8O6PsV%2BSs5itfxIgNBXhIuHxA7PKv8DCF0QABoMNjM3NDIzMTgzODA1IgwG13RR9emhCDAhqwYq3APOzQj6NRarAlQjut4BJwzVUdjsPwEAUKGQkn7p%2BS%2Ftz0BD4tUMQjY556wLN9tCJMUQz26Z%2BIzqS5MgcHSNEdSAry9te%2FHsMxTrwUOqS7SypZ5q0MtUCBrKBAZQbTELTtzZPKdQbYL%2BCgm5RkuDN9lnZ1rIKqlDtWRB6grJbEgQmixY7whoQcsjJ%2BVKD7NuCe%2Fmz8zbfgv2eLEeB8d%2BzoMFgkgmYEcwchXSDKpRbX%2BWa4ahcZNN30rEOWPURQ3HERE99uSA0YJSlYkDgaWdReGqJNs74tIkddH3vltZE%2F4tjEre5yLJtQ62Nu6yBrfe9AU1gxo1sZJBZj0%2BDYJ9TzeNSzGG9EKFEtAmT7evTRVRNP068h5wjGPzRVBZG1yAJWiEMo3HUjsGR5ALIMM0YQ2G5zJFGtvIhYb0w7atepT4Z8jIqg5QlsdrubErT1Ibj2GieW5Ie0AwjyVFk%2F9%2Fd0eSOpD2a04wiGssWWtxMG7ZmW1Mu1GKeIJa6yCA7zGbpRUC6%2FVSX2K1tHNJSOhdBCUT%2BqYKRddL%2BfGaXagHKKg0MV8Pti%2BzAKCkPdxBA81v6LD%2Fj%2B9bORExJSw0FwwG7eDQ0ZsyasgfYDToDKyJDY0NjTHNOxytt4gH8t9gHzD7h%2Fy9BjqkAbgyeQ132ghNT9WhmXUWz3ECue%2FqmaHPDVJg7pcq6h9QUenQknxN%2BB1XUU2uCHUUtxfsKwx6x%2Bvs4hVjNhJTBPGQeE0sMm5pcy6bFDHR6pgt51o%2BAmgaISSFOj%2B6qC%2FHyVg5f%2BwirdjXoaxfoGvPnlwp1%2FSPMqboSZWnvdArPVIzvQ88jOMzIBgouE5fdeV9GGiRaLcwT5xvO2Y7QJ7xEPdAi9KQ&X-Amz-Signature=a24988f9738e8798081f27ec14d4bc7623020f4408f22b50a57b2e5a7ad06cc0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
