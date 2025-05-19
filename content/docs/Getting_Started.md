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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4RT45US%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T041720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQXlrrNZf%2ByPtw0KiQAOSW83CN7dHuSO%2FC64pjijyGfAiAInqRPZjwsVX0F0%2BQ1HI1t5DT%2BOvzm%2BoQf7vgl2CFQCyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMieh8UzucoKzVNPozKtwD0OQRREh9LVCYS1fqCBeLUFOR3%2F1s30XRmcDnXTTVLuZ0X26ia18KtSEEQVDi2L3Z092oxUI3AouwxcMxlnCTWzxj4bPrnHRvuZmaRRlIkrZqOJXwtp2FYyUlk5MPBryQohT58w5mh6uUfDhxCeYjJmvnnVn2orJRjg%2B57oaYP1sdUE8%2BNrqcRMJAeGUPpTvq7h%2BXQ9F9z3nCL0exIJWO5HyGYsgVA%2FGNX8nPgumbOeAmPB0agdATcV0u923MwjryfBj24kQGHNSDNJ2m77p71R7luNAxot2oLL%2BiJa5Kx1BCX36FSzy6p3Ji3nh3NOmoWs6rMb4sxsY8B%2BdYfnX%2FhwEFsj9qQHtq5nRsUmHvxRcuV20gXbId8gbskrIKGdStUnrKB2fRUVkFo5bINlCd5UJMdiOQuhFZDSdodXFOKalhzrvbsdda%2Bt0ga%2FtdQoEVhyFAghvA5XAg4idhS2Muvb4qlfdUQKY%2FLmNCvJQd8M2ugaQfecnMPS1G2K8VahDLPgigD%2BdlRIzgQniibPlvoJgY1uOvaPVcm4vzmXkfsLFl3N6OcxsXGirHNCqNtUs3HJd7UaaaYB4QBfF329n15slOJPbCI6fA2g1LYaQCnjYQ4I37gW%2F6yqptvvMw2dyqwQY6pgGxdMZ%2BUqKcPCiKcl2hlgij7VsqaKOMC7qedek7BovX5RU4SnBR5YJ0GM%2FX%2FV3XsNapldNZ2u8qTsZ1uJI6G2pS4fo5FRqAy9e8kpYpMU0zLIU9SlYEYKjqB9JbIwid1Uor7PvJvdsA5e%2FG5e5gZd6Yz%2Ben1Sr7lExKOq2QQlGIpJIyG5u75TGg1f6xlELXsZOH2NmAbeLhp7E8SrmCYIteFAwo5E0S&X-Amz-Signature=35c1e9bcb38b884c44b2fba4e1a9326263845164ee390f25cffd83b9f6c905ac&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4RT45US%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T041720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQXlrrNZf%2ByPtw0KiQAOSW83CN7dHuSO%2FC64pjijyGfAiAInqRPZjwsVX0F0%2BQ1HI1t5DT%2BOvzm%2BoQf7vgl2CFQCyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMieh8UzucoKzVNPozKtwD0OQRREh9LVCYS1fqCBeLUFOR3%2F1s30XRmcDnXTTVLuZ0X26ia18KtSEEQVDi2L3Z092oxUI3AouwxcMxlnCTWzxj4bPrnHRvuZmaRRlIkrZqOJXwtp2FYyUlk5MPBryQohT58w5mh6uUfDhxCeYjJmvnnVn2orJRjg%2B57oaYP1sdUE8%2BNrqcRMJAeGUPpTvq7h%2BXQ9F9z3nCL0exIJWO5HyGYsgVA%2FGNX8nPgumbOeAmPB0agdATcV0u923MwjryfBj24kQGHNSDNJ2m77p71R7luNAxot2oLL%2BiJa5Kx1BCX36FSzy6p3Ji3nh3NOmoWs6rMb4sxsY8B%2BdYfnX%2FhwEFsj9qQHtq5nRsUmHvxRcuV20gXbId8gbskrIKGdStUnrKB2fRUVkFo5bINlCd5UJMdiOQuhFZDSdodXFOKalhzrvbsdda%2Bt0ga%2FtdQoEVhyFAghvA5XAg4idhS2Muvb4qlfdUQKY%2FLmNCvJQd8M2ugaQfecnMPS1G2K8VahDLPgigD%2BdlRIzgQniibPlvoJgY1uOvaPVcm4vzmXkfsLFl3N6OcxsXGirHNCqNtUs3HJd7UaaaYB4QBfF329n15slOJPbCI6fA2g1LYaQCnjYQ4I37gW%2F6yqptvvMw2dyqwQY6pgGxdMZ%2BUqKcPCiKcl2hlgij7VsqaKOMC7qedek7BovX5RU4SnBR5YJ0GM%2FX%2FV3XsNapldNZ2u8qTsZ1uJI6G2pS4fo5FRqAy9e8kpYpMU0zLIU9SlYEYKjqB9JbIwid1Uor7PvJvdsA5e%2FG5e5gZd6Yz%2Ben1Sr7lExKOq2QQlGIpJIyG5u75TGg1f6xlELXsZOH2NmAbeLhp7E8SrmCYIteFAwo5E0S&X-Amz-Signature=11fc0895c6af5a496eba53cd6c3f63e7a5123544066527144163d43bc2e55c53&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4RT45US%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T041720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQXlrrNZf%2ByPtw0KiQAOSW83CN7dHuSO%2FC64pjijyGfAiAInqRPZjwsVX0F0%2BQ1HI1t5DT%2BOvzm%2BoQf7vgl2CFQCyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMieh8UzucoKzVNPozKtwD0OQRREh9LVCYS1fqCBeLUFOR3%2F1s30XRmcDnXTTVLuZ0X26ia18KtSEEQVDi2L3Z092oxUI3AouwxcMxlnCTWzxj4bPrnHRvuZmaRRlIkrZqOJXwtp2FYyUlk5MPBryQohT58w5mh6uUfDhxCeYjJmvnnVn2orJRjg%2B57oaYP1sdUE8%2BNrqcRMJAeGUPpTvq7h%2BXQ9F9z3nCL0exIJWO5HyGYsgVA%2FGNX8nPgumbOeAmPB0agdATcV0u923MwjryfBj24kQGHNSDNJ2m77p71R7luNAxot2oLL%2BiJa5Kx1BCX36FSzy6p3Ji3nh3NOmoWs6rMb4sxsY8B%2BdYfnX%2FhwEFsj9qQHtq5nRsUmHvxRcuV20gXbId8gbskrIKGdStUnrKB2fRUVkFo5bINlCd5UJMdiOQuhFZDSdodXFOKalhzrvbsdda%2Bt0ga%2FtdQoEVhyFAghvA5XAg4idhS2Muvb4qlfdUQKY%2FLmNCvJQd8M2ugaQfecnMPS1G2K8VahDLPgigD%2BdlRIzgQniibPlvoJgY1uOvaPVcm4vzmXkfsLFl3N6OcxsXGirHNCqNtUs3HJd7UaaaYB4QBfF329n15slOJPbCI6fA2g1LYaQCnjYQ4I37gW%2F6yqptvvMw2dyqwQY6pgGxdMZ%2BUqKcPCiKcl2hlgij7VsqaKOMC7qedek7BovX5RU4SnBR5YJ0GM%2FX%2FV3XsNapldNZ2u8qTsZ1uJI6G2pS4fo5FRqAy9e8kpYpMU0zLIU9SlYEYKjqB9JbIwid1Uor7PvJvdsA5e%2FG5e5gZd6Yz%2Ben1Sr7lExKOq2QQlGIpJIyG5u75TGg1f6xlELXsZOH2NmAbeLhp7E8SrmCYIteFAwo5E0S&X-Amz-Signature=5cf10fed12a57104a261e7b53132a37b05adeb2a53d5d4d2a15e514e81b8e88f&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623XM3LVF%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T041723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGjxlI0r4Sy7irKFsfQkJXiMcaXGZrOtaVDjxJiNvgOpAiBgGz1Kou3rsjoWJZBdZb4oxQJUbxjwvNBCKplfGBU%2FeCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs2Oh1Za07oo6VG0NKtwDP3PnNGKuvpI1jTBKYYnKaz9tBdpYOvAzRgY4l%2BPafCIDLNIVzUutwhXe6nuzJd8IMvdRdis15Frp3hdcViehi0Df%2B4eelGDQO%2FAYBvTWNK3ywBkoKvwfIgxCqoi%2BxVMA%2B1WMS4ViTjicZCcYCULYcDjjHfYK7OdjJwfZM%2FsbzvB12d9wbf%2BtS3zV%2Bos6s4tpbgClJHeXothiplG%2FEwlNg%2BnT0EXOWE7Ep0PD%2BvH1Bqj2OtFWsASJ7aw3%2BFv%2BMF1LUuoYtqlEy21phtgM3bQW1VgfWnVTGZLMdU3FZKsG%2FRL5AIl%2Bgdziowf0yyiCFY3XT%2F1DHraDzG4YcMkL%2Fu%2BmEagD9v7dRmnG7dEosXiU1myPaDWohClMrSalbbV4L2r8TTBiQlcxTUTDlk5iGQNfA7Xni9qlbsuvSa9Dzfk%2Bbo9iVEhrssCQk2catYZnLaftHcG7gIQfsrWwxuNveWegyxVrZQzck9WoEVXQ5PzJvZwUwF0zCkrARVWIM8%2FUuo8GhV3bV7aTFOdg9GGgole1s4i5kXkPQ9gaj09EJ8Y4d31pq4QlkoEkHqPQ5EYMS9aDAaKyhkhUOJn5%2BYnS5zIO1EZugNZZ878mknbxWK9miXGgX%2B5ZZp2pEBrEz8Uwud2qwQY6pgET1xoQUXM1c75tAVbEzNgPJks3JWZsCAMtI5o8tC2r0bVVyzZ4pbwJbuG5aiQ6VVrNkkAHgZ0HllscBX7F0%2FKcWYJAgcBiC6vAFZV23hMHvf%2BB41SHNlc6fLU7PworrH2MpMtk87WQ9uLjSN9EWRnsLfS5ap4mgtfLrPBw8WdtPT5JsOm3d%2Fjy63OWK4hxpC%2FXYMuTiPieZx24yxP93fP543RrJEw3&X-Amz-Signature=b377557a763ee3edb0e5c87b1b60391c75817abcebfde56bcc047f785a2370e8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XIIEGVI%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T041723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXoSI1DLLEdYIyaqL%2FqkeyKZPZk%2BQigQd%2FkLFv%2BPXBNgIhAPq31G3Cl1ix4lD5sOrub9saqUFU%2BoIOU5y9LzwD0aXhKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyvQ9qL8My3bGnugkq3AMBYQsBFcE%2B2vtPTbozW6TfgzFyMRoOG8n%2Fr24CAdcEa9I9IBXOWV4%2FXhVZgYmSZ%2BOIUzzvJVvBfORLKz48PocWbLhQW0VQmfnpPK%2FYHkAbyD7JS6PMDt9Rh%2BXDw5XVye2LGEy3vf5vYuS%2Bc6fDlCFigLO3TM57BVcPFp%2F7gLnS0XuFgYKJnvx%2BRbbpBLjKX3a%2FoQDKH4KJk7Cw4NXcE%2FrO4UmeDjWgdzCzjS6eJ8yTmzae%2BombXZrnyJKgAM7GlIgmL0En8O%2FJ82c8bd3tMF1XLNJ6uZr9e%2FdhiHEClxgoHbHIRLlkUPy2LYF52PD51VLkwdCJx8ZNEbsUrhDptHouS%2FGfjHGtqSgr8OGyS%2BA2KeT9cQlaM%2FG4g5w9qPgIKuYH99pZy%2FFJ2AblNadUShhrzUUlcXg09fLXoEki8mYYxC6iIJ6l9Q9s3XSfxwu%2BMK7ADpRN9rKzoG6OI7fC2gxKC3NCbNmhApkiTva0ruV13ja2%2BA7bLDkbsUIXn7VURaSx5kEy7pXX5ImNKH2XxOcTTlftj0G9fkpK1D11CqxdLXQMrvjn85ugSgz1LIpPsgUk8h0Fq%2F6Pf%2Bjjnx2IZpb%2FYL4ilxQ8YIgfZJgHcDrqHO4M3TxmHCTO7vzObTC63KrBBjqkASJ6IK4bfTzO2WP6Xh8kHG8Cn6YVycsfelfmAec2sMi%2FbOmEmJPw3sER8Z6eppDQAv8VFEYeOFuvGXw2oxLrxMgu26dAJE0Rfg00gVX8S%2BkPjpcnVCoCfI0OHCogmMBdEcZfQN47UZrbcQC50p%2BfGNFWsRf8XNZ5H8F0RMvbTPOdgg%2BtIVfk4JhAGVEiWLKU6ngRSu3vyXlBa7V4zLPVJdyuRjH0&X-Amz-Signature=baac3c0ef5f028365363a6731684490612775b684be93e9dde56bb7082458ff6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4RT45US%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T041720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQXlrrNZf%2ByPtw0KiQAOSW83CN7dHuSO%2FC64pjijyGfAiAInqRPZjwsVX0F0%2BQ1HI1t5DT%2BOvzm%2BoQf7vgl2CFQCyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMieh8UzucoKzVNPozKtwD0OQRREh9LVCYS1fqCBeLUFOR3%2F1s30XRmcDnXTTVLuZ0X26ia18KtSEEQVDi2L3Z092oxUI3AouwxcMxlnCTWzxj4bPrnHRvuZmaRRlIkrZqOJXwtp2FYyUlk5MPBryQohT58w5mh6uUfDhxCeYjJmvnnVn2orJRjg%2B57oaYP1sdUE8%2BNrqcRMJAeGUPpTvq7h%2BXQ9F9z3nCL0exIJWO5HyGYsgVA%2FGNX8nPgumbOeAmPB0agdATcV0u923MwjryfBj24kQGHNSDNJ2m77p71R7luNAxot2oLL%2BiJa5Kx1BCX36FSzy6p3Ji3nh3NOmoWs6rMb4sxsY8B%2BdYfnX%2FhwEFsj9qQHtq5nRsUmHvxRcuV20gXbId8gbskrIKGdStUnrKB2fRUVkFo5bINlCd5UJMdiOQuhFZDSdodXFOKalhzrvbsdda%2Bt0ga%2FtdQoEVhyFAghvA5XAg4idhS2Muvb4qlfdUQKY%2FLmNCvJQd8M2ugaQfecnMPS1G2K8VahDLPgigD%2BdlRIzgQniibPlvoJgY1uOvaPVcm4vzmXkfsLFl3N6OcxsXGirHNCqNtUs3HJd7UaaaYB4QBfF329n15slOJPbCI6fA2g1LYaQCnjYQ4I37gW%2F6yqptvvMw2dyqwQY6pgGxdMZ%2BUqKcPCiKcl2hlgij7VsqaKOMC7qedek7BovX5RU4SnBR5YJ0GM%2FX%2FV3XsNapldNZ2u8qTsZ1uJI6G2pS4fo5FRqAy9e8kpYpMU0zLIU9SlYEYKjqB9JbIwid1Uor7PvJvdsA5e%2FG5e5gZd6Yz%2Ben1Sr7lExKOq2QQlGIpJIyG5u75TGg1f6xlELXsZOH2NmAbeLhp7E8SrmCYIteFAwo5E0S&X-Amz-Signature=081e02be337b7678c4fd7101785e19c305c3968eb14a0e7871cd729a6e8183b9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
