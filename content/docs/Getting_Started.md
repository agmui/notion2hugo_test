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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQVOJ4YX%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIC%2F40BuspGQoNnAogA70YUto%2BE6sGuuHxnYocqaiHhTFAiB9DPJp9V5ApVbl5P5KtQsAPhuK%2F5qg6rhZtC4ZYXBtmSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMnagBRbqLJOIwg%2F%2FkKtwDByNV0nO3Giw2cTnwlq%2FU89ZAcGgTWITZxZCO9f0ALWe2KhpvY0ikqVgEVAggjUQrJO4KrFf8XwgceL0s05IQaGoqGPtvppNxJ9yoLK%2FnxEGIn33l6Gyu9WbikrkWgP3BdiZJALNxPPD%2FbBZseg7yuu8uadO2MTune7mr6s1IvhtrdSMJ%2FlfrHH9IS%2BS2oQ9ssxKBqFicHLaFcW0acFcB7P5VN6MTxdoY18yIa%2BglpeP5fmsicpwIquRWPQxjvs79M%2Bjs2wT82npqN20KZaFys38F64gggs5D%2FasmtPZHCQ7PcqGhNEav11W5j6e1mj5CokWvFB%2B75rX9WzPSyIXUveOSpTcK7%2BoEH5d11QUC%2F5MAxRdubZLGyKi%2By0Ez9wX2DYgJ3Qd4BD8oNwXAegQUjJJUA8gqOYzRIyfTgHoJGyy0S%2BWujOj0yDS6ruq6IE5O5Q8WiZbV5PEp13xReuRdnaVCnTcEmUujJ7KWjklSO0hEwLKAVgf%2BCy8xzVLljO4Fh0pN5jMluLlNo9C4ncgMgjOxtdo1izRxhsfvnSl5slfZzunrwwnGY0iXTwIsgRV8K%2BNt3EfsJZmlG4va6n5G5mI%2FbJjU2Lkt%2BcpTbdsuEAKbClh5rWlCBgW%2BjXUwo960wgY6pgEsJTTD7rHICfU%2FuZZowjas5gV%2BnX%2BlJ%2Fig5zqZyETbFfiDB02fX6W7Zlvkrlh4YtHMdM2yLXsaqvQsMGybxQ%2B1MjxNpy0Qhtmtqo2M98wlbpP0wQ7brdOfpv1qjAIFmp1Z1wMktx1FEBzlPH4GJlqWk0B80YlT4EZsFJM98duFXQUWjQJQmTgyWaXF%2BYje9kNzc%2BapO%2B6xJCOKzCJzGKlWRz1U22LF&X-Amz-Signature=a32708886d23f2d610e631e9ddbd16dbe39ee35ebe5ebc2a022387464d3cd409&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQVOJ4YX%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIC%2F40BuspGQoNnAogA70YUto%2BE6sGuuHxnYocqaiHhTFAiB9DPJp9V5ApVbl5P5KtQsAPhuK%2F5qg6rhZtC4ZYXBtmSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMnagBRbqLJOIwg%2F%2FkKtwDByNV0nO3Giw2cTnwlq%2FU89ZAcGgTWITZxZCO9f0ALWe2KhpvY0ikqVgEVAggjUQrJO4KrFf8XwgceL0s05IQaGoqGPtvppNxJ9yoLK%2FnxEGIn33l6Gyu9WbikrkWgP3BdiZJALNxPPD%2FbBZseg7yuu8uadO2MTune7mr6s1IvhtrdSMJ%2FlfrHH9IS%2BS2oQ9ssxKBqFicHLaFcW0acFcB7P5VN6MTxdoY18yIa%2BglpeP5fmsicpwIquRWPQxjvs79M%2Bjs2wT82npqN20KZaFys38F64gggs5D%2FasmtPZHCQ7PcqGhNEav11W5j6e1mj5CokWvFB%2B75rX9WzPSyIXUveOSpTcK7%2BoEH5d11QUC%2F5MAxRdubZLGyKi%2By0Ez9wX2DYgJ3Qd4BD8oNwXAegQUjJJUA8gqOYzRIyfTgHoJGyy0S%2BWujOj0yDS6ruq6IE5O5Q8WiZbV5PEp13xReuRdnaVCnTcEmUujJ7KWjklSO0hEwLKAVgf%2BCy8xzVLljO4Fh0pN5jMluLlNo9C4ncgMgjOxtdo1izRxhsfvnSl5slfZzunrwwnGY0iXTwIsgRV8K%2BNt3EfsJZmlG4va6n5G5mI%2FbJjU2Lkt%2BcpTbdsuEAKbClh5rWlCBgW%2BjXUwo960wgY6pgEsJTTD7rHICfU%2FuZZowjas5gV%2BnX%2BlJ%2Fig5zqZyETbFfiDB02fX6W7Zlvkrlh4YtHMdM2yLXsaqvQsMGybxQ%2B1MjxNpy0Qhtmtqo2M98wlbpP0wQ7brdOfpv1qjAIFmp1Z1wMktx1FEBzlPH4GJlqWk0B80YlT4EZsFJM98duFXQUWjQJQmTgyWaXF%2BYje9kNzc%2BapO%2B6xJCOKzCJzGKlWRz1U22LF&X-Amz-Signature=4aa5d34df0a1cf882a347d5366ad3a295ca2aae4b7b651b6890bfc24fa03b8ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQVOJ4YX%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIC%2F40BuspGQoNnAogA70YUto%2BE6sGuuHxnYocqaiHhTFAiB9DPJp9V5ApVbl5P5KtQsAPhuK%2F5qg6rhZtC4ZYXBtmSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMnagBRbqLJOIwg%2F%2FkKtwDByNV0nO3Giw2cTnwlq%2FU89ZAcGgTWITZxZCO9f0ALWe2KhpvY0ikqVgEVAggjUQrJO4KrFf8XwgceL0s05IQaGoqGPtvppNxJ9yoLK%2FnxEGIn33l6Gyu9WbikrkWgP3BdiZJALNxPPD%2FbBZseg7yuu8uadO2MTune7mr6s1IvhtrdSMJ%2FlfrHH9IS%2BS2oQ9ssxKBqFicHLaFcW0acFcB7P5VN6MTxdoY18yIa%2BglpeP5fmsicpwIquRWPQxjvs79M%2Bjs2wT82npqN20KZaFys38F64gggs5D%2FasmtPZHCQ7PcqGhNEav11W5j6e1mj5CokWvFB%2B75rX9WzPSyIXUveOSpTcK7%2BoEH5d11QUC%2F5MAxRdubZLGyKi%2By0Ez9wX2DYgJ3Qd4BD8oNwXAegQUjJJUA8gqOYzRIyfTgHoJGyy0S%2BWujOj0yDS6ruq6IE5O5Q8WiZbV5PEp13xReuRdnaVCnTcEmUujJ7KWjklSO0hEwLKAVgf%2BCy8xzVLljO4Fh0pN5jMluLlNo9C4ncgMgjOxtdo1izRxhsfvnSl5slfZzunrwwnGY0iXTwIsgRV8K%2BNt3EfsJZmlG4va6n5G5mI%2FbJjU2Lkt%2BcpTbdsuEAKbClh5rWlCBgW%2BjXUwo960wgY6pgEsJTTD7rHICfU%2FuZZowjas5gV%2BnX%2BlJ%2Fig5zqZyETbFfiDB02fX6W7Zlvkrlh4YtHMdM2yLXsaqvQsMGybxQ%2B1MjxNpy0Qhtmtqo2M98wlbpP0wQ7brdOfpv1qjAIFmp1Z1wMktx1FEBzlPH4GJlqWk0B80YlT4EZsFJM98duFXQUWjQJQmTgyWaXF%2BYje9kNzc%2BapO%2B6xJCOKzCJzGKlWRz1U22LF&X-Amz-Signature=95eb1423fb68cba23bfbd15d5c89253a43486bf70e16877e6aefafbec5f507eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDI7CTS5%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIFtrHiTpT%2F86UBjLs4WOKsKqVq9vRZHiT3vvDoJhEAkDAiATDcXzExOJOHjZYyfz3ozcy2cixuQi0QPSN97HCBulECr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMhRi3xZsUO18YaGPEKtwDS8S7wFWrX00KAYbIMxJLVTjSp1Dh%2FHCAnpVY4HmRj2V5E4fV4GOmNzaze3KoPbZu6VZIoAnvOIWlRxxVwUX2sR9kt46inFeib9f0ZPV3HUrlgnN3DovVZlxZJy9PRNFV4APm4NduQC3cWniTrsiELaTwiO5nkgiPCSnhR4XvaFF2CcEkoWk4BLs7I%2BYE%2Fl%2FCseIzi%2BFPX9EhYmBtfTtqt5IqATcL3tIqHIIbdt%2FgTjyeeeQOrcwKYhfsz6NyhvHkG72CMCUJK4f8X3KViPxIKHTFhjQWG5K3UzTyXQ8kAuY9e9e30xqTHYcQ58mn5XgHkC9T6oCbgVWDjoq86M60NyJqJpB9DUa%2BWTBxDwuyKEfrwFfjLWc5Bk%2Bt84NAbi5r8HSeeGjbpCOah92r3k17lFnE%2F89YoSDAGQtuyaTr00IUJXdO6EOk%2BExthgzJ7zzZCIKnZB1C4PnhVwP6g0R4w1Fppkhfzp1%2FlCYrow%2FL%2Fp4aVmESZ8DSu9i6WoizQu5kIyuwjywkGinU93%2BVwiPybAnSBMuMhqeFBacMN9z3PycJcqtByHc3gJHhF%2BcMVI%2BmxKh%2BDAjsg9uFUsoojY%2FmzeBQdzCpmRpLUm3DY5WDzpjt9opltjhjyUekvNQw47y0wgY6pgH8vLIO9Gf0YJ4SEuxKtXW8ksTRQqVKnPe4KUjN9TU%2BP%2Fybl6RQ62xDTYaYGKEe6nHzqcjLy3k%2FciDVSTey1CTDzTAND%2FL6GsNLugT1yjbocc%2BOIYE3mNQxNYqZEN3NWOQluI3izMO3EwRUmiOUaUp%2B3nBekPJeggQoeIVQjPuAFFd%2BW4pnL2odaE3Li9pbkIfy3eX3WSKuIk4utYzQC39ZIkINdyc4&X-Amz-Signature=93cd7eb0816523bb67a4f24feb600a661759c47f4a3ee272dbc6213342418cda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TZ7ROCD%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIEn0OnBlkf62X1RKLtggkjJfRWvSE3xM2vAsxXZD934EAiEA0RSi1c0kidFYqTJ8T1UGNSpJfpVrQ9ms1gVwMMiG%2Fc4q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDL1SLIBMIlitdWpF0ircA5kAXV2hRLOgMiw9MO2oD3uG1AbTFHERaH%2Fjx6ZIOjkjh%2BU7INhg0S%2FQIDV6DMaHrgpdA58Kfl0ypPlX4VnRnV4joyg3tNfhCv0ZPhWZWnUYack0uwpOg6cHkWdN9IpS3NTLS9uABDB687PKUjURtGRTJ8tIRN7C%2BI5vMN26TxgNT6Aa%2BtU%2By30MKEDdJmfnFURwK4qVVuDFVUhlzb%2BFWdLch4UpXUurJp6MhQNuzl%2BPg961gZ75zBx%2BBPA88RPRPjGgQQEjQpgTQx0Ej2N7fWBDOkLrWqtRqN9GBLd2ogbTh56bRdIBncZ4p3jykis4DyG%2FGUa2QtkrhMFKNM%2BPhLkjUuS1%2Bwd2eu0J0zh3YD8ztD%2FAPXSLCzYhVCMtoLXEz1m8bK3rMhNVsL9hcOAisCE4B1sh3vGxwtgYdhCJcBr%2FViyyy76CZIMHcFMVLN9HtC3aDo7ELIh9n3xMvfrjWBz%2B3ZYPQuFQ8zd%2FtGSZAY2d1Ua7gTP8OzMz5p0O4gSuMq0dwW6i8mNDZPqYGVZ8UnhNMEzX2p5jP3MRDcZupiYZc57auUq39zOB0XEpBO1kWqjLGAlDseAAZv%2B0PBvgUuDdgkXF4zIvvrPctOfcUeNu7kdf8WwKsznDJnViMLWTtcIGOqUBvQKPkooy%2Fxi%2BEETD8nWTNZPlKCCJ%2BhJAsvp%2F1Jq18SLeH595ey6%2B%2Fa8rMQwDFmksmIL2HcU240xTnyECThiWLwKCEMBtagxGWH67PB2a0MY35i8K0Ny76tOc7ONY9FkOdCMhZ1YcboEHMhYGeKy%2FUgQYDxK3bjiMzp6shQzEvmv%2Ffs9HOPcWgGfEyo488tjbhN68bcTvr%2BWq0943bq4%2B%2BSGJtBcI&X-Amz-Signature=488c7914d4d0f53cd3515c963d1b72e120984dcc2197c4ee7f5d4b747fcc1027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQVOJ4YX%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIC%2F40BuspGQoNnAogA70YUto%2BE6sGuuHxnYocqaiHhTFAiB9DPJp9V5ApVbl5P5KtQsAPhuK%2F5qg6rhZtC4ZYXBtmSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMnagBRbqLJOIwg%2F%2FkKtwDByNV0nO3Giw2cTnwlq%2FU89ZAcGgTWITZxZCO9f0ALWe2KhpvY0ikqVgEVAggjUQrJO4KrFf8XwgceL0s05IQaGoqGPtvppNxJ9yoLK%2FnxEGIn33l6Gyu9WbikrkWgP3BdiZJALNxPPD%2FbBZseg7yuu8uadO2MTune7mr6s1IvhtrdSMJ%2FlfrHH9IS%2BS2oQ9ssxKBqFicHLaFcW0acFcB7P5VN6MTxdoY18yIa%2BglpeP5fmsicpwIquRWPQxjvs79M%2Bjs2wT82npqN20KZaFys38F64gggs5D%2FasmtPZHCQ7PcqGhNEav11W5j6e1mj5CokWvFB%2B75rX9WzPSyIXUveOSpTcK7%2BoEH5d11QUC%2F5MAxRdubZLGyKi%2By0Ez9wX2DYgJ3Qd4BD8oNwXAegQUjJJUA8gqOYzRIyfTgHoJGyy0S%2BWujOj0yDS6ruq6IE5O5Q8WiZbV5PEp13xReuRdnaVCnTcEmUujJ7KWjklSO0hEwLKAVgf%2BCy8xzVLljO4Fh0pN5jMluLlNo9C4ncgMgjOxtdo1izRxhsfvnSl5slfZzunrwwnGY0iXTwIsgRV8K%2BNt3EfsJZmlG4va6n5G5mI%2FbJjU2Lkt%2BcpTbdsuEAKbClh5rWlCBgW%2BjXUwo960wgY6pgEsJTTD7rHICfU%2FuZZowjas5gV%2BnX%2BlJ%2Fig5zqZyETbFfiDB02fX6W7Zlvkrlh4YtHMdM2yLXsaqvQsMGybxQ%2B1MjxNpy0Qhtmtqo2M98wlbpP0wQ7brdOfpv1qjAIFmp1Z1wMktx1FEBzlPH4GJlqWk0B80YlT4EZsFJM98duFXQUWjQJQmTgyWaXF%2BYje9kNzc%2BapO%2B6xJCOKzCJzGKlWRz1U22LF&X-Amz-Signature=41f18b576796839e8be74e6469e47a12863f79537694aba5dc7e19879addfafc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
