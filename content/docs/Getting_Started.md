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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T53KTDVF%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T220329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICS04de6a2CIDEzWZAXw5clUUOs6awy1UlYP%2BzWrFg5dAiEAlMollVTeO94VfJyTt595%2Bqa0npRDs0mwDwBsZqFsfbAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDK1khUMMpoLpDXpf0SrcA3Lu0JFxYbhkCcbjErUnil4MhS4Sd%2BkVUtNJomxoA2I2eFqz%2B0N5cbLH3yicXwc%2FgXF67MvfiY46IlLcfpYRP6szpg1uoL8uBPTfq3rzLIZ1752mUVJsLtNjFOC4cAX9lR%2BBZAtqyKsqH58SgJZIRGvz6kwSEuX7kXzlKJvihQtWiE9BD6%2BjJODGSlplYKbDMYaST%2BabluQUyXzAlJhu4Xwp2fFJujNrVhJ3F6STpyAG7GE%2F31qB9JpdFjYU6s6ho2v5mXV0aZm9kSDOHjZW0ugv%2BqxUMWnhTm22rUrnUDlTSsXFc7BoLuGI5yr1Yo6KjqYirxX9k9vZAJ7637h0papIz3aAsNDBfkQRs257%2BMB7rC%2FVGd6unvmQGmCfekZeKMVJruSL%2BXEAxaGjNWT6Tq%2FnUb5qiqLVx7h4G2QrJxRRrm2w82%2Bx14y8k0IkLE%2Bv2b6vwUxDZgTWQ7Exq%2FDORjo52QCZJTyck2wGxFlEFYrN4DdfJh%2BohneNHedqjSq1Cx4J2T3ufLvk7kopsOrmROpLZ7lc72L7X0LtMD8YGe7ylcNeSEUEExVEGnfYiabNYdQcLMUEqwl%2FdK2LUUwgdPo0ey4pl4LCe6Muom%2FuTQvK5bhPsyanfc73WN1KMK3gt74GOqUBKQ9rxx6YdopJOke9upAwzX9HUGv8iPxhQa5CxxYMAnEebG8tPTKm56Ji3CZJtuEIENCjopOnZdXbTZFCG0TFoNrEm0F6Gj6Grq1NrQe9Tni2dQSKqtJqauo1IEadaV%2B3ZAYCar043u8Lkd%2FGQLxj2KvYGAXxinkf0WVSULYZxlP7x%2BB3hcdbFC3lItJfY01wGBLxMeaja8P8QcCFB71tJsa0nUo7&X-Amz-Signature=5419719c9923030b8961d86b8a73af08298e18efc55cd3fea4ecabea5b005a0b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T53KTDVF%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T220329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICS04de6a2CIDEzWZAXw5clUUOs6awy1UlYP%2BzWrFg5dAiEAlMollVTeO94VfJyTt595%2Bqa0npRDs0mwDwBsZqFsfbAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDK1khUMMpoLpDXpf0SrcA3Lu0JFxYbhkCcbjErUnil4MhS4Sd%2BkVUtNJomxoA2I2eFqz%2B0N5cbLH3yicXwc%2FgXF67MvfiY46IlLcfpYRP6szpg1uoL8uBPTfq3rzLIZ1752mUVJsLtNjFOC4cAX9lR%2BBZAtqyKsqH58SgJZIRGvz6kwSEuX7kXzlKJvihQtWiE9BD6%2BjJODGSlplYKbDMYaST%2BabluQUyXzAlJhu4Xwp2fFJujNrVhJ3F6STpyAG7GE%2F31qB9JpdFjYU6s6ho2v5mXV0aZm9kSDOHjZW0ugv%2BqxUMWnhTm22rUrnUDlTSsXFc7BoLuGI5yr1Yo6KjqYirxX9k9vZAJ7637h0papIz3aAsNDBfkQRs257%2BMB7rC%2FVGd6unvmQGmCfekZeKMVJruSL%2BXEAxaGjNWT6Tq%2FnUb5qiqLVx7h4G2QrJxRRrm2w82%2Bx14y8k0IkLE%2Bv2b6vwUxDZgTWQ7Exq%2FDORjo52QCZJTyck2wGxFlEFYrN4DdfJh%2BohneNHedqjSq1Cx4J2T3ufLvk7kopsOrmROpLZ7lc72L7X0LtMD8YGe7ylcNeSEUEExVEGnfYiabNYdQcLMUEqwl%2FdK2LUUwgdPo0ey4pl4LCe6Muom%2FuTQvK5bhPsyanfc73WN1KMK3gt74GOqUBKQ9rxx6YdopJOke9upAwzX9HUGv8iPxhQa5CxxYMAnEebG8tPTKm56Ji3CZJtuEIENCjopOnZdXbTZFCG0TFoNrEm0F6Gj6Grq1NrQe9Tni2dQSKqtJqauo1IEadaV%2B3ZAYCar043u8Lkd%2FGQLxj2KvYGAXxinkf0WVSULYZxlP7x%2BB3hcdbFC3lItJfY01wGBLxMeaja8P8QcCFB71tJsa0nUo7&X-Amz-Signature=55fbe8e7a283d817adfa4ae6d75a987afa99a8635f6dc1121bdaa5a4049ee521&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LAEQBL5%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T220333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQC3yqgdt7pkyPCwMFsDSuGNP6DnDxlidcWFaMTJ%2BJy8XAIhAOPbd16G8ryzNqDg4omWTQFdFLAM4mI2q8D3UI7EV6e7Kv8DCH0QABoMNjM3NDIzMTgzODA1Igzxp1lT8FZy9XW6BIYq3AM0RphkLfBLZOUiTYnNn0nIHapSnEhQlHlcLf0QbtQctkLiZQ%2BoOXh3J0kg6nuZq%2BpQ1RyzG6OA3miGPnyu42MZK63l25L4SwyEFwoJz5gsLX8hYLlI9HFXl5Wc6cU6fO65QRKmi%2FW2GVZ19YeQ3qnUFqnpW4shCz0Wd9Gx1O7S4b7Lhg0v7AnDpRkIqDyq%2F590yBN8BJsd8jaOhxsoitMD3ctz24p6tgFbW8pJVnTRJfA23VTZ5fe1KcBRL7b8nmFrHIYIa27IaOxN3nxCDpAVj8yAueHPeBSlPTEvO8M9jmeQHq8naxN8iaIh8PRSPBScZPeSLcJaryTBfv52BQTymZvF0Gvgs08rCwtxWALzNH6qaqUa3VXFmthAzf8ARJ9dYql7Rgn4WjPBkFpAFeeZ5nwaOq1uOfzwYAsEjPM0Bl2cRwzg3h6%2BRuZOGAy9ny04erg4rvnUugONzTaOKweAVyr%2BXgF5O3INCFmiOVI%2Bof9tOWgEfJSY8mSsxoJkzjYL%2BQhSLwNd6Ye4LOWZK%2BQ8%2F6%2BSTzaANatbLxibO3IQefTqAjjArmdaiqV7zHJ8H5k0oIVPdOP6Xta8Qwu4ohDkcJR237pW%2FPS%2FjjJvynCG6C12aTJ4FQQnKnkoEjDb4Le%2BBjqkAY6HDvOP32oVIRiTW4xQl0CeD1IfXc47v6hUmTUhEYa%2B3GKsADQ9nZW171dTUp89D5T5HWFBUNcW7ka1fjILRu%2F4KgnBxTwZ1ohT0OU95%2B3pdz0GzIBtYYvT5ABhrvij46zGE0uw7zNw505iAVSPwxhmVDSo7sJOQnNL4txKC3P9rwEGx%2F7RA0VKj219UKHmdjlIHZD1kZrDU%2FYAap2jJPcjPXDM&X-Amz-Signature=acd031070918b5be4e5174d6741edb4eaa096e0233ec019a3e0541b52dea18a9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TJMEFSZ%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T220333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIERXEDwt%2Bj0IktxBYdo%2FgJvbaHYMUOToMlk7uCEvBV0tAiAHOpsqL6XDitLuDupGYlIjcU9xly%2BS4bXn%2BdlZDaFkICr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM%2FmbwPoe75UlDeWr3KtwDYEtiBaIuBL%2Br53adHdq9Lt6cJuSF5Fqbgo039rF6TxQVOS7r1rT16n1iNoPc9B8ijcC1wCYTx%2BytNxzq5bdbVXV6EliDBpg%2F57rx%2F328uoCB0LunH7HrWIWdD4C%2Ba2D3U5CY1zq1aQ8gqBs%2FOO5OE6sr5saK%2B2WqFh42kh5%2BhAhrZlqnhUtUSE918bJ2Ak9wD5crtmQmJhWdM7kyCceLSrWyJWGLAG7pL7Idrh8u118oWLYvEQhYN2cG5ls4gc3w0FgcQXcDt268U20Dh1ixNuwZBLxO88lrU5wXE16vayL4BVtFzkeHNDP%2F6%2Bj2CRIoVMMEsjTELT9c0yr3jH3jo9knk2H9pLHZv2KTuqSMkTUQ0onD9MCzeBteRwcmkDrtPHJUZBzHyUtL6UPvWwI0%2B68fvtuSzDd6pulnZaMpebjIi%2Bkioo8lcbYF08AnMbZyaQRQkzZwVn%2FnHwskULeImi1XtFkMKcvfv17jEC0MQjIrnUvU%2BMhwRN%2FJrAN13ztw%2BOt%2FhXqHKUFhWLKlb8d9ERVCrdnLEcfqkZRe%2FW0BYVrkFtR9QlR4Q7QVo7i3aO21mXx5QgZOlJGHPhcIVwsX971MX1f41%2BD9nX0C%2BNGWeCHYxq3JQkjDeGPKj9wwyuC3vgY6pgH4BCA3KOXptHvSikoNGsLIeoZ3oMh5mXzZnRLxVawl4aHkaPvEMt214gjYfqwaw7ZtJ5%2BroOICs6qcWTSR60W9bS7eso%2B2lF0874MOgZy2XIA7eGabYSqYYv%2FedN9bkXV%2FbLWDXPaqzOme2g%2BYQ7lS3cUWEMG%2B78EAO%2BO1%2FlDhvsgE%2FmQZl36JgLSCwLLlAy1r3OX6k16fXhTLY4anVvSyXIhUa0Ay&X-Amz-Signature=926d1688507f6c5d65cecd83b40b11b11495caee67a5f0d8e6458e130d820564&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T53KTDVF%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T220329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICS04de6a2CIDEzWZAXw5clUUOs6awy1UlYP%2BzWrFg5dAiEAlMollVTeO94VfJyTt595%2Bqa0npRDs0mwDwBsZqFsfbAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDK1khUMMpoLpDXpf0SrcA3Lu0JFxYbhkCcbjErUnil4MhS4Sd%2BkVUtNJomxoA2I2eFqz%2B0N5cbLH3yicXwc%2FgXF67MvfiY46IlLcfpYRP6szpg1uoL8uBPTfq3rzLIZ1752mUVJsLtNjFOC4cAX9lR%2BBZAtqyKsqH58SgJZIRGvz6kwSEuX7kXzlKJvihQtWiE9BD6%2BjJODGSlplYKbDMYaST%2BabluQUyXzAlJhu4Xwp2fFJujNrVhJ3F6STpyAG7GE%2F31qB9JpdFjYU6s6ho2v5mXV0aZm9kSDOHjZW0ugv%2BqxUMWnhTm22rUrnUDlTSsXFc7BoLuGI5yr1Yo6KjqYirxX9k9vZAJ7637h0papIz3aAsNDBfkQRs257%2BMB7rC%2FVGd6unvmQGmCfekZeKMVJruSL%2BXEAxaGjNWT6Tq%2FnUb5qiqLVx7h4G2QrJxRRrm2w82%2Bx14y8k0IkLE%2Bv2b6vwUxDZgTWQ7Exq%2FDORjo52QCZJTyck2wGxFlEFYrN4DdfJh%2BohneNHedqjSq1Cx4J2T3ufLvk7kopsOrmROpLZ7lc72L7X0LtMD8YGe7ylcNeSEUEExVEGnfYiabNYdQcLMUEqwl%2FdK2LUUwgdPo0ey4pl4LCe6Muom%2FuTQvK5bhPsyanfc73WN1KMK3gt74GOqUBKQ9rxx6YdopJOke9upAwzX9HUGv8iPxhQa5CxxYMAnEebG8tPTKm56Ji3CZJtuEIENCjopOnZdXbTZFCG0TFoNrEm0F6Gj6Grq1NrQe9Tni2dQSKqtJqauo1IEadaV%2B3ZAYCar043u8Lkd%2FGQLxj2KvYGAXxinkf0WVSULYZxlP7x%2BB3hcdbFC3lItJfY01wGBLxMeaja8P8QcCFB71tJsa0nUo7&X-Amz-Signature=dcf7519b45978063d70ef192591d4461fa31ac19459327243ae923bb53c8feec&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
