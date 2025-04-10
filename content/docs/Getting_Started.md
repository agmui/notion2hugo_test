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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMTCKX4X%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIHHb6438zakKYOgChn%2B0Z4fkg3mdwT3NFGfoOgTsRm18AiEA%2Bg%2FgA7K7WZPrLuQfYCZeuWvdnQhcD2BaC429WmhrTEoqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2FqWlvQwLkS7yLPzyrcAzQLpxcdg0PgHNVJY69oz01kgpdTxGAUQyRWYMH2g4JYyyJAcRtCUQdsts8kkvUOWBN%2Bh3TPDpbd%2BAarMcyvU%2BcBlRZOKocr63aqAlmOcgUwlmFKKYgq7%2BWQQOhg1j9vYhqcs64BlYXHY0VFkiJkP1OvQ7vd%2FyvNv6BCKk8SppicBJLG5okxuZtWj9N0Zp2tM6hry7x4nce8HeE9OtsqlkFHOGioJ3AmDbb3%2BC1a2KrkUWpp56ddeG44EoUhTAirmk%2FiT88gM%2BAZ4zkaL2%2BaBtMBCE4AqlQJBJYHvGMShzpdF5eFEqNcNkxp9yxuwdkhDVpFYU8QjiTDXYDkKAGbMzj6CkjPbgSX5Ff4q%2FhloEqS7ZPUJazUv7OqJJ%2FRFGaEf4wTLxipx3ANi40nsrEuzDtPBn%2BkaAOiAXbU3%2BXlelCr15W7ooG7P0wRwWMIMrRouP7GTRNhW8pz%2F8CUdBSM%2BVC%2FaqU4PKCrG9%2Fvq2EgWPnSW3f%2BAE9oZsmKtv1NPgpIrSerUjFAPsy5c5GskhWGTbdVEHDgqjEylpEjJuMdzyxY3ZEwyjM8HW2A3OBNq2x0FQOFFsxs7ToM1lPIAh99ODWVz7MLhYtPagUIf%2BHcz25ClQWhgem59RFH%2Ftd5MPmQ4b8GOqUB1KtAjctHHD0ZVF3almcogTQ6KTpC79hQhB8%2FOFsdO%2FDioONRLIRpKfY5t8sfaYL99cZXjDlpa9XhteStZSbvCZuL89JGgImXr1gCC6z41VCvjRKHPLrbqA2dLyQgUPecebKmWvK88ncv9hTlhT4jXD6kKa9wQl%2FVH6CAwKGpHPYeXw8SSpZ3B7Fm1Cvdm1Ze5J63%2B%2B4MRB1u8ngcZSrr40DDEsCA&X-Amz-Signature=4ac60178236570063ac6ed794e3dfeed5e4c0f1682b72e317e5f0df8c239f096&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMTCKX4X%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIHHb6438zakKYOgChn%2B0Z4fkg3mdwT3NFGfoOgTsRm18AiEA%2Bg%2FgA7K7WZPrLuQfYCZeuWvdnQhcD2BaC429WmhrTEoqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2FqWlvQwLkS7yLPzyrcAzQLpxcdg0PgHNVJY69oz01kgpdTxGAUQyRWYMH2g4JYyyJAcRtCUQdsts8kkvUOWBN%2Bh3TPDpbd%2BAarMcyvU%2BcBlRZOKocr63aqAlmOcgUwlmFKKYgq7%2BWQQOhg1j9vYhqcs64BlYXHY0VFkiJkP1OvQ7vd%2FyvNv6BCKk8SppicBJLG5okxuZtWj9N0Zp2tM6hry7x4nce8HeE9OtsqlkFHOGioJ3AmDbb3%2BC1a2KrkUWpp56ddeG44EoUhTAirmk%2FiT88gM%2BAZ4zkaL2%2BaBtMBCE4AqlQJBJYHvGMShzpdF5eFEqNcNkxp9yxuwdkhDVpFYU8QjiTDXYDkKAGbMzj6CkjPbgSX5Ff4q%2FhloEqS7ZPUJazUv7OqJJ%2FRFGaEf4wTLxipx3ANi40nsrEuzDtPBn%2BkaAOiAXbU3%2BXlelCr15W7ooG7P0wRwWMIMrRouP7GTRNhW8pz%2F8CUdBSM%2BVC%2FaqU4PKCrG9%2Fvq2EgWPnSW3f%2BAE9oZsmKtv1NPgpIrSerUjFAPsy5c5GskhWGTbdVEHDgqjEylpEjJuMdzyxY3ZEwyjM8HW2A3OBNq2x0FQOFFsxs7ToM1lPIAh99ODWVz7MLhYtPagUIf%2BHcz25ClQWhgem59RFH%2Ftd5MPmQ4b8GOqUB1KtAjctHHD0ZVF3almcogTQ6KTpC79hQhB8%2FOFsdO%2FDioONRLIRpKfY5t8sfaYL99cZXjDlpa9XhteStZSbvCZuL89JGgImXr1gCC6z41VCvjRKHPLrbqA2dLyQgUPecebKmWvK88ncv9hTlhT4jXD6kKa9wQl%2FVH6CAwKGpHPYeXw8SSpZ3B7Fm1Cvdm1Ze5J63%2B%2B4MRB1u8ngcZSrr40DDEsCA&X-Amz-Signature=fe84e1a8d3b9d55b8781fc033b315f117bda1371b9d04f6ddc7d41fd79e05392&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625LI7OTQ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIEtQtTv2dxwoCjSd%2B5wXeSXNATCkLat61ETx%2B1vyZhOuAiEAyfhW%2Fs1jjL7JypnOTXK29yevxLXhkjqLksQP%2FwKRZkAqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJy3XzeEBYagZwxOhCrcAyAF0dfEVB56ShKPB2hiCcNEFovIhpPIWtjOPdd54jp8lhNo3ylowmdwOIhNfgPXUYgYjneEILN5E0i4HbrLNhgqz5pGDVx2XZIAjaSX0EJezPXAAI6pmvpCDPbqB2kL2svFRCuZjpoAm4cVkyRdqG4vRKESRlkE9ZadMshQ5nQiD7vLWnzyD6vyvjtq56PdyxcKDDLAhfZ91VcAHqWZs2Cxjs8bTieD01VuJzjsTe9mhRXyuxZFAsv2u5jCOJBBP%2BLowMbEYbCpkvVhWIeKZoYWguRV3aHDNS4WrC2cbBtB1PfH8C0LJQUjL6rcn7iDXEwPBbsfypVTsIf2j6TYiBHHZ80o%2F6iNLJVh5uoCpJLdvKmKkExzvIC7jB3KK76muuOaUIOHROdyouCgeSpd91Fme0D7vapgvrPT63CsjuT81mJsI1CGTKv41uhDOg0UtJQRUfh%2F6jsDg%2F%2FjXCoeOHzmKbLi18vzImq0QXuRZRzURJL3P8vTIaXaQKeE%2FqImLmyugaHwXNHqhMCTgpkYrf73qRehxFs1wD%2BuYtsu1xQLEbEniJsdmIf8Cpt%2Bg%2BHAnBewjfdPrnrzHCTNdPurWbVdf5yA5abHHEtxsGJYpqOXISFcWShoAi1TfYNMMJ%2BR4b8GOqUBzTICSIX%2FyTG818dXD7qV9aAMexp0VXQhuW7fj%2FkvVxX5l%2Bk8dl3J20LBHv11bZeM3Nj1jvhnUk5g9gE%2FP3aJ9yiZVjHqqRPLUdmJ6%2BDntmbpWzSd9y8jDqmfDB5nNo9UfOiaVWZK8p%2Bgrba4daFQEHmyPZmI6Iayt5znwLtmwow6ZbudmUerC%2FFkZbSnBTfmiWWKMGydSfa4d6o8GwKZX8SkZ%2BXR&X-Amz-Signature=23d10e0a601e030677d4e021e09267134220900f584535b4b0b54020d8f5a0e4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FQDNPNP%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCwS%2B8tNwo2H4NJEsJbyWjeEUOzp9AbWgzuvWK1lmp1bgIhAI9WCVfMo%2FKPaKFOE%2Foc9aHQGHaxJlh4iGFPy5P8aendKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5lEbspU%2Bx4JdxlvUq3ANm2YstnWZ3MkxPqqMpovG1zwKuiExFchJY%2FyFtSvj35VwWibgBJe32HkwiwubUUrsmaw6ireeRBQjmRHDhwIB639UEu9m9FDdljw3ooHp0TaEWuxCR6yIIsGS2D7i8FVGZhvIlZR552GAXLqjYaz9Y3o6MDfEqSJPZWw7W0cDQkUWBzXpU6Xfv79%2FbXZKyj1k5T6jFu28hvLs91fw8NcGctnI4PNuBAd%2Fe8gCNa7hutR5mr3TLPoBxnZ%2BOH23DbcEOCs7rdzkssKJzepccUC38Ta6JTjttBc8nw08KYqHUUswu4W2ke%2B2EGJqxH0Vwavk5OgQQFv4O7Nxzoj4HbKmncVWiGo%2FwD4VuRdmNmRg2IY5BYSRLaNaje1lZI%2BFjFUJDdJsbU96HMJ24by58pOpq0B3t9mdEGoIq6G%2F9bGWuRc8K1R4x8DE%2FPoAh4Etmp0ElWoJXd4qWjh6lwO35XpN3ZdB78WthrHI8EpwLENBTCBPRVaTFCbTd1BCiXAMArDCjUj%2FVkYEwo3zBzy6yL%2FyNLtS3ixhBE6y1SWyreBSv8eeaT6gltzoovQkQlJeAOn6ANPTz2zbnzQWtY%2FY2h%2BZdOlTfLjrYm5QoaHVBPDamJDlhc4hFtaaAWuGgeTCBkeG%2FBjqkAdzqwM7PeDMKu0susYuD%2FEAKvAqf4qHrEniKboZeqf%2FyFovZ3Nli57cx22ZL1%2Be9T0eMt2g2sT21U6Nb9okEWEaXfMggb7VYEPhGllx3HsbhnGKDRMjAmYIlABjNaF9UrOk%2FLJW4qY8eLMP4wgv6KHC62tJvV5dtLsvS9%2BiLvemURq3Jfqf21sGnaayN%2BV5hJphYIyor0TcYkU2SDPATBvO%2FEeVW&X-Amz-Signature=89446881de0df9e2a169fbe91e15f87f542761d96c04bc1e81d4811a5f46d72f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMTCKX4X%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIHHb6438zakKYOgChn%2B0Z4fkg3mdwT3NFGfoOgTsRm18AiEA%2Bg%2FgA7K7WZPrLuQfYCZeuWvdnQhcD2BaC429WmhrTEoqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2FqWlvQwLkS7yLPzyrcAzQLpxcdg0PgHNVJY69oz01kgpdTxGAUQyRWYMH2g4JYyyJAcRtCUQdsts8kkvUOWBN%2Bh3TPDpbd%2BAarMcyvU%2BcBlRZOKocr63aqAlmOcgUwlmFKKYgq7%2BWQQOhg1j9vYhqcs64BlYXHY0VFkiJkP1OvQ7vd%2FyvNv6BCKk8SppicBJLG5okxuZtWj9N0Zp2tM6hry7x4nce8HeE9OtsqlkFHOGioJ3AmDbb3%2BC1a2KrkUWpp56ddeG44EoUhTAirmk%2FiT88gM%2BAZ4zkaL2%2BaBtMBCE4AqlQJBJYHvGMShzpdF5eFEqNcNkxp9yxuwdkhDVpFYU8QjiTDXYDkKAGbMzj6CkjPbgSX5Ff4q%2FhloEqS7ZPUJazUv7OqJJ%2FRFGaEf4wTLxipx3ANi40nsrEuzDtPBn%2BkaAOiAXbU3%2BXlelCr15W7ooG7P0wRwWMIMrRouP7GTRNhW8pz%2F8CUdBSM%2BVC%2FaqU4PKCrG9%2Fvq2EgWPnSW3f%2BAE9oZsmKtv1NPgpIrSerUjFAPsy5c5GskhWGTbdVEHDgqjEylpEjJuMdzyxY3ZEwyjM8HW2A3OBNq2x0FQOFFsxs7ToM1lPIAh99ODWVz7MLhYtPagUIf%2BHcz25ClQWhgem59RFH%2Ftd5MPmQ4b8GOqUB1KtAjctHHD0ZVF3almcogTQ6KTpC79hQhB8%2FOFsdO%2FDioONRLIRpKfY5t8sfaYL99cZXjDlpa9XhteStZSbvCZuL89JGgImXr1gCC6z41VCvjRKHPLrbqA2dLyQgUPecebKmWvK88ncv9hTlhT4jXD6kKa9wQl%2FVH6CAwKGpHPYeXw8SSpZ3B7Fm1Cvdm1Ze5J63%2B%2B4MRB1u8ngcZSrr40DDEsCA&X-Amz-Signature=728e5a552717dff3f5c881cb0d75b1ee0eb0f2561f6ef1f00358641484b5b18d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
