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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ADS2YL3%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG64Hah4v%2BUSL1j4RmviU9N4BvUfP5Dci7w5zgy0ddQYAiEAgGPqY1NZNmaCwZ2PuPBebPKlxl5gEBBJn95%2BMz6YjOoq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDOiotKJgFz44BGdkkyrcA2xjHfo1FQpSuL%2BmJWXWIXYUfT3pohpxbPUkFQadlG3opCNXoQ1IFfo%2BwF%2BghuDFcVSCq7b43aTRfXe%2Fow6dbAvsgZbV7Wrn2eWoFKQR0uU6U6uhyNYyaXESPnzjZPcb46H4AVuirSL6CBKuiu%2Ba%2BZioVg2zw0qm9o861nehlwJY8tJzBII4Tqq0Wle8zMIVsndE9Qc3cMFC6tO14s0AsOfhCrBW3EGv7lY5pSBulLxYLia7Ej6Bu1d9ATCk3akdoZZ7PWXbeUhsKArUhe6OWD%2B94MvONGQabyiCJNb6CDPgohmYMyTObTr6o%2FC8KAF8cd47f%2FbneSp3vtW0dVZtk84LD5XGwlDJj32ljsdHKgjA71IoNq%2BeV1nPpKhpxUD9m00KPeIEhLUcS5VeoPy7E8cm6CMEzQVqEWa13xAooPe6Lkq%2F2ISWQosO9BdnGaJw89pGcz4BlhYP63tR%2BLBzkCfA%2FrIFiJnNOdT2wBCuOHbmyLE8KE1YV6ZJOZkNPjlK4D3Xi8QY9tKAVfMyhy0Zn2OJKHmWaLaDWmW7wwoXQNp5AHNu1tvd32zuNlmbWurqrAWBLDacn7FInAGfRqGgCEPtZwkGHtS3VLmA3Hyo0%2BvpHKt9ryXyNs%2FDvKyLMKztm8EGOqUBuaG%2BhyHAldO4pj4knePTvyDKH3BbmYlfVx6vf4WhvnIqSZ%2BcD5xChuMpYKPfqr3GLc0qV2kfLIW2tu8mBKXOZiSzmAmv7Oa0sdnjhnyvGMmn4h%2BZnuWWW7MnHCFuVrM3x%2FHBEjfFor%2FGbvGAIUnaiqcEQwJTZy5o73lRfRQGQbtLERnuhcUZbk0mCmN03e8otYuNrfasA4hbX5dVRQR01A5bb2%2F0&X-Amz-Signature=53101db7b50218ded99349dfd83e1d17946ce58baa3b3eb3b5b05f5e54987a38&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ADS2YL3%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG64Hah4v%2BUSL1j4RmviU9N4BvUfP5Dci7w5zgy0ddQYAiEAgGPqY1NZNmaCwZ2PuPBebPKlxl5gEBBJn95%2BMz6YjOoq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDOiotKJgFz44BGdkkyrcA2xjHfo1FQpSuL%2BmJWXWIXYUfT3pohpxbPUkFQadlG3opCNXoQ1IFfo%2BwF%2BghuDFcVSCq7b43aTRfXe%2Fow6dbAvsgZbV7Wrn2eWoFKQR0uU6U6uhyNYyaXESPnzjZPcb46H4AVuirSL6CBKuiu%2Ba%2BZioVg2zw0qm9o861nehlwJY8tJzBII4Tqq0Wle8zMIVsndE9Qc3cMFC6tO14s0AsOfhCrBW3EGv7lY5pSBulLxYLia7Ej6Bu1d9ATCk3akdoZZ7PWXbeUhsKArUhe6OWD%2B94MvONGQabyiCJNb6CDPgohmYMyTObTr6o%2FC8KAF8cd47f%2FbneSp3vtW0dVZtk84LD5XGwlDJj32ljsdHKgjA71IoNq%2BeV1nPpKhpxUD9m00KPeIEhLUcS5VeoPy7E8cm6CMEzQVqEWa13xAooPe6Lkq%2F2ISWQosO9BdnGaJw89pGcz4BlhYP63tR%2BLBzkCfA%2FrIFiJnNOdT2wBCuOHbmyLE8KE1YV6ZJOZkNPjlK4D3Xi8QY9tKAVfMyhy0Zn2OJKHmWaLaDWmW7wwoXQNp5AHNu1tvd32zuNlmbWurqrAWBLDacn7FInAGfRqGgCEPtZwkGHtS3VLmA3Hyo0%2BvpHKt9ryXyNs%2FDvKyLMKztm8EGOqUBuaG%2BhyHAldO4pj4knePTvyDKH3BbmYlfVx6vf4WhvnIqSZ%2BcD5xChuMpYKPfqr3GLc0qV2kfLIW2tu8mBKXOZiSzmAmv7Oa0sdnjhnyvGMmn4h%2BZnuWWW7MnHCFuVrM3x%2FHBEjfFor%2FGbvGAIUnaiqcEQwJTZy5o73lRfRQGQbtLERnuhcUZbk0mCmN03e8otYuNrfasA4hbX5dVRQR01A5bb2%2F0&X-Amz-Signature=67c9369048544fdc2bd2915a52616020023a16044bc09f2895c5bb253a5b0347&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ADS2YL3%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG64Hah4v%2BUSL1j4RmviU9N4BvUfP5Dci7w5zgy0ddQYAiEAgGPqY1NZNmaCwZ2PuPBebPKlxl5gEBBJn95%2BMz6YjOoq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDOiotKJgFz44BGdkkyrcA2xjHfo1FQpSuL%2BmJWXWIXYUfT3pohpxbPUkFQadlG3opCNXoQ1IFfo%2BwF%2BghuDFcVSCq7b43aTRfXe%2Fow6dbAvsgZbV7Wrn2eWoFKQR0uU6U6uhyNYyaXESPnzjZPcb46H4AVuirSL6CBKuiu%2Ba%2BZioVg2zw0qm9o861nehlwJY8tJzBII4Tqq0Wle8zMIVsndE9Qc3cMFC6tO14s0AsOfhCrBW3EGv7lY5pSBulLxYLia7Ej6Bu1d9ATCk3akdoZZ7PWXbeUhsKArUhe6OWD%2B94MvONGQabyiCJNb6CDPgohmYMyTObTr6o%2FC8KAF8cd47f%2FbneSp3vtW0dVZtk84LD5XGwlDJj32ljsdHKgjA71IoNq%2BeV1nPpKhpxUD9m00KPeIEhLUcS5VeoPy7E8cm6CMEzQVqEWa13xAooPe6Lkq%2F2ISWQosO9BdnGaJw89pGcz4BlhYP63tR%2BLBzkCfA%2FrIFiJnNOdT2wBCuOHbmyLE8KE1YV6ZJOZkNPjlK4D3Xi8QY9tKAVfMyhy0Zn2OJKHmWaLaDWmW7wwoXQNp5AHNu1tvd32zuNlmbWurqrAWBLDacn7FInAGfRqGgCEPtZwkGHtS3VLmA3Hyo0%2BvpHKt9ryXyNs%2FDvKyLMKztm8EGOqUBuaG%2BhyHAldO4pj4knePTvyDKH3BbmYlfVx6vf4WhvnIqSZ%2BcD5xChuMpYKPfqr3GLc0qV2kfLIW2tu8mBKXOZiSzmAmv7Oa0sdnjhnyvGMmn4h%2BZnuWWW7MnHCFuVrM3x%2FHBEjfFor%2FGbvGAIUnaiqcEQwJTZy5o73lRfRQGQbtLERnuhcUZbk0mCmN03e8otYuNrfasA4hbX5dVRQR01A5bb2%2F0&X-Amz-Signature=8c43d0c9489755ef318729be89b1d497b5842fbd9f6fee5fad52acb2f42ac5a4&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJBEPABK%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNGzoglfb0xivpRg6Bk7JqJPrRK9XaHU0G6%2FlQDYeSoQIhAN7W2Fw%2BahSr5LwlvkBY4JZrCI8gm6PMwtwo715KDx2DKv8DCEIQABoMNjM3NDIzMTgzODA1Igxw9ymYstM4zbGQUjUq3APZ0Ngl38y6GPoH6hrwpf3ga5xDlBz%2BN%2B%2FH8MyjYC5U6f53j05vc50uEv58mscB4L64LwvI1iKCm%2By6XEhDk2RaMYozaPaiYBt6N4%2FCQHf%2BHnyzY9hHWMg6hFmCVNn8jsEN1EGJGcXd8qA90moLqbrRZR3GNpndR9T90P%2Bu96G7vVCgojzhgLoUMelJlcnlwhv%2Fdu1ZCh%2BjpYtsAbsN%2Fi6IK5Zo4o0jMrlUwqxikzm5D0XvhICjsydbpDk3KbsQLe5xNVp4%2FX3didDJQs0pozRqpggwLhJCcYUSvajfQliqt%2BYjs%2FVjh5pxRVaRB3bsGTgXvlJUxZDZ5Mwz%2BO03KqPQdaJLm5epzI0ZyoaeAGy0RcFo8C8ZufeGSbyHNGu5KdgC1p9X4E%2B1zNqMR1xJzRKnjK4eFZ%2FLoTtmepW6Bf8c6JAA81ROGttaSydpBUL%2F4iAP2t9wVoWKKxeuMnciCQWIL97wwovVNWDxnCqx7TVGEZai9Ln7snRM9lBuz3FojZpShoW9k%2FcnZy5ePEhqodvZf1RpWve6scPOmHx7GWLCn8K%2B7m%2FrCVSn%2FKoJ34zN60BevXJ0oxmooNoGylaPoQZeTNGVJFk0yBew9Ma9%2FQnZpTrw9sWB0QshkhsfeTCZ7pvBBjqkAQ6Oiho9FmLX835uskuBcveQSXogMkXqDFfZD7%2B6uaQJXb6NlysNnRTINJZJfVLEJGxTnl3INqH3j3VF3DROMri3DhT0WPDhJk3VbpgFjidgozTDBrCmsTRaYy3n1AfVK%2BmRhc3MC3CildvXEn9Ysj8XwsrtSlyX11EIgiNoM7JJaQcRVtTBU3nvq9lbaPi9SqHxgEBIEukBGxZhtnl1j1pPMTtm&X-Amz-Signature=044b62be2a7037e293c92387593187e793cb59bba585c757708dcffb48b05d7f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JOZB6KC%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH2Luv0W1%2F%2BwIvsLfIBP5D4Pxz4avXLohlW0ePzIsgUAIgZCWHwdbnc%2Fu1MA%2FiZDe63Keyw5X6FQGSYmrWK5jveNoq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDNHDtHsltD6NWkDEECrcA2m4a2MSJiBHbDnmahzD8iN72gU0GujqNj3AK6vIoF5DGtjwbaqOpE9M3JZw9aisYCQ8nTd2ELCQDrPBp6i5%2BP8IB75OpIj5PbeASUaQm7vQb%2BkLQ%2FnrT9T%2BXgwzXfijU3ySlY2DjqAIhb90g1dfbIJ8mlZL2MOKVP12QbFy9og8s6vpkdlHNOamDEgPSdG9dtdYGZzkLJ5c1TmqghF9olSNzkOHMLOyFqijwHlWtZK166EU7xIJxTkftTtI0tqtlVSYFFn%2FUOaNkF5JzGu2iaRs1PmSbyjVSiHPqo9f3orVYC%2BpLiycppsMABh8%2F4gUPIu8%2F%2BU3UDOanqdlXBm1HusjyjDGoWVEYr3d7ogFxK7XLgYt0gSK5qn4raQnrwCUCZ%2Boq6K6WMPYNk9UEYovgaC9DRFRTirV%2FLFbi61%2BTjKJhkgw12OvirYf%2FF%2FxA%2Bzb7YEBYykcI%2BwcNqM%2FUhJ1grtd2sYFhtTP2XssiboB%2BJQWS0F57BL4qDQAk558E%2B0cXC8vq1gHHFI6w%2BzCySnNY3A2dHBVQBexwDXPQR6sco7fHi09ouPPwnEI8z5WNj7%2FZbV57F0hu31IUvXnBqHhbpH%2BWiC5aJmlxkiuhWZVsXtC7EGbE2lZKeunf0iBMJ3um8EGOqUB4GVbR2KoSWUKwMLrIVtln4x600YqQ8jy3jObe7UsmfT%2B2zd1mHL0JCnCp3QBa8Sc0azjI37JXyfVBTxXHZNXjpCyygtUyyg2nVpYWrTqe56x3Ow%2Btg8W%2BatPrYRtmN5GXEO43LI1SyfY0o70lYKT1K5M43cXjSWc6j6fJaYjFdKpLCTgOfclmuxWMQZ%2FrsIVFvPVJVR1RLxkSDMU2fm0LQ3Rz%2BC9&X-Amz-Signature=a818fa3b82afbd0d5ba9b900090cb42f54db272ffa2a908fb18df72057a6753e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ADS2YL3%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG64Hah4v%2BUSL1j4RmviU9N4BvUfP5Dci7w5zgy0ddQYAiEAgGPqY1NZNmaCwZ2PuPBebPKlxl5gEBBJn95%2BMz6YjOoq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDOiotKJgFz44BGdkkyrcA2xjHfo1FQpSuL%2BmJWXWIXYUfT3pohpxbPUkFQadlG3opCNXoQ1IFfo%2BwF%2BghuDFcVSCq7b43aTRfXe%2Fow6dbAvsgZbV7Wrn2eWoFKQR0uU6U6uhyNYyaXESPnzjZPcb46H4AVuirSL6CBKuiu%2Ba%2BZioVg2zw0qm9o861nehlwJY8tJzBII4Tqq0Wle8zMIVsndE9Qc3cMFC6tO14s0AsOfhCrBW3EGv7lY5pSBulLxYLia7Ej6Bu1d9ATCk3akdoZZ7PWXbeUhsKArUhe6OWD%2B94MvONGQabyiCJNb6CDPgohmYMyTObTr6o%2FC8KAF8cd47f%2FbneSp3vtW0dVZtk84LD5XGwlDJj32ljsdHKgjA71IoNq%2BeV1nPpKhpxUD9m00KPeIEhLUcS5VeoPy7E8cm6CMEzQVqEWa13xAooPe6Lkq%2F2ISWQosO9BdnGaJw89pGcz4BlhYP63tR%2BLBzkCfA%2FrIFiJnNOdT2wBCuOHbmyLE8KE1YV6ZJOZkNPjlK4D3Xi8QY9tKAVfMyhy0Zn2OJKHmWaLaDWmW7wwoXQNp5AHNu1tvd32zuNlmbWurqrAWBLDacn7FInAGfRqGgCEPtZwkGHtS3VLmA3Hyo0%2BvpHKt9ryXyNs%2FDvKyLMKztm8EGOqUBuaG%2BhyHAldO4pj4knePTvyDKH3BbmYlfVx6vf4WhvnIqSZ%2BcD5xChuMpYKPfqr3GLc0qV2kfLIW2tu8mBKXOZiSzmAmv7Oa0sdnjhnyvGMmn4h%2BZnuWWW7MnHCFuVrM3x%2FHBEjfFor%2FGbvGAIUnaiqcEQwJTZy5o73lRfRQGQbtLERnuhcUZbk0mCmN03e8otYuNrfasA4hbX5dVRQR01A5bb2%2F0&X-Amz-Signature=334e128c4ae4e79dc67de8ab77f5a0cee459dd555e4e11819042128ba98b52c5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
