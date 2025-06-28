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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W46Y6BPW%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T110135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFG9Gb5p1R6pJjeuPrKI%2BBsS%2F2ANgmk3f5cvzKj4MxuAiBAUZ3%2BqfhmD7p3XhffJdACPf0YrPB%2B0Fxg6nx1PcYdAyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrZ6%2FOQ%2BO0lx48EqjKtwDwsZ%2BxItvYVUS41O9LhhTA%2BEUSi3LQMSDOb2jHIjiHzgQHNH5KlH7Ohz6WNchxNnwdUZtbvpfQAl2sz7Ot8mHz2X5c1d6U029qc7xE%2B476WW3%2BLsjTgJR19JfbXpC7hteeZm8XhwXKW4bGCEjJo%2BRKWqEGWu2WZ2dBi%2BQ0t2lGDpZ%2Bt1ESQDYzvc29CbU3wOMJ0CM9ZLM7Zmfz5PnKw8VDk1YQkUxndeSg9sgYjYPO4liPHL%2BTC24rJaukUaqlCiSjLnMsIGJyR3sNV0ARgcntFtGGXktQ86ozntDbDHzInF1BV9EvGjn0xy5ZNYWv9wnuWxk%2FW7YJkkNAnH2QBlcCuMs3jfNH5m0tmP7tYLx4VzYK0Q3Kq%2BYqM8CwozQRGtqYjSWiAVT6HCeYHfJICGGFg%2F6QSyX0AWLd5%2BJkHPuNMZL4ZULDUdXD607LNr0eeJR8o1ZpzG9enfTR9WlhEKiWf3Ikk8k%2Bs21OcgwVOU88PKlIkkQ26%2F4N6pz9%2Fi2AUAn8JcCf9mexYQAI3CENAWoihWWXHwJcjKkF5U8TQQBy6HQW3jvlLdjjhTHiSurr%2FMbk2Iew1XEdZSqDGv6KCPf%2BN7ddaTYiHp1mdAWRHVxNcCZzh%2Ft5PjJ4r66DWAwr5D%2FwgY6pgFKtEayxeul7RBBWbzhZ0h38FawS1BS6voUlB%2B5H%2Bqu%2BIMaXYigip8tALoUV40UwlWv8PjfrU4i34kHGcCXuDIHHSL7%2BOB%2BKF16VO2Ytlg2%2FIWWPobOzznMaeYwpe%2Fs9zVy4uCjE1KO2bqDdrJMHIftuFZhekRs2JkZtW8uYAcRVnO2PRgfHyLcCLN127zJKdqcMTFlaLZfA6KMxrUO08gYaU5bkJ1m&X-Amz-Signature=4fd286de51d950d4731b2fa13dfe8dc2477cac9eb1d981d333af28cb016ce28f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W46Y6BPW%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T110135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFG9Gb5p1R6pJjeuPrKI%2BBsS%2F2ANgmk3f5cvzKj4MxuAiBAUZ3%2BqfhmD7p3XhffJdACPf0YrPB%2B0Fxg6nx1PcYdAyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrZ6%2FOQ%2BO0lx48EqjKtwDwsZ%2BxItvYVUS41O9LhhTA%2BEUSi3LQMSDOb2jHIjiHzgQHNH5KlH7Ohz6WNchxNnwdUZtbvpfQAl2sz7Ot8mHz2X5c1d6U029qc7xE%2B476WW3%2BLsjTgJR19JfbXpC7hteeZm8XhwXKW4bGCEjJo%2BRKWqEGWu2WZ2dBi%2BQ0t2lGDpZ%2Bt1ESQDYzvc29CbU3wOMJ0CM9ZLM7Zmfz5PnKw8VDk1YQkUxndeSg9sgYjYPO4liPHL%2BTC24rJaukUaqlCiSjLnMsIGJyR3sNV0ARgcntFtGGXktQ86ozntDbDHzInF1BV9EvGjn0xy5ZNYWv9wnuWxk%2FW7YJkkNAnH2QBlcCuMs3jfNH5m0tmP7tYLx4VzYK0Q3Kq%2BYqM8CwozQRGtqYjSWiAVT6HCeYHfJICGGFg%2F6QSyX0AWLd5%2BJkHPuNMZL4ZULDUdXD607LNr0eeJR8o1ZpzG9enfTR9WlhEKiWf3Ikk8k%2Bs21OcgwVOU88PKlIkkQ26%2F4N6pz9%2Fi2AUAn8JcCf9mexYQAI3CENAWoihWWXHwJcjKkF5U8TQQBy6HQW3jvlLdjjhTHiSurr%2FMbk2Iew1XEdZSqDGv6KCPf%2BN7ddaTYiHp1mdAWRHVxNcCZzh%2Ft5PjJ4r66DWAwr5D%2FwgY6pgFKtEayxeul7RBBWbzhZ0h38FawS1BS6voUlB%2B5H%2Bqu%2BIMaXYigip8tALoUV40UwlWv8PjfrU4i34kHGcCXuDIHHSL7%2BOB%2BKF16VO2Ytlg2%2FIWWPobOzznMaeYwpe%2Fs9zVy4uCjE1KO2bqDdrJMHIftuFZhekRs2JkZtW8uYAcRVnO2PRgfHyLcCLN127zJKdqcMTFlaLZfA6KMxrUO08gYaU5bkJ1m&X-Amz-Signature=f036ac79903ca18a678e5cc0abaa67af12e2b8f3e44b199c10c5bd4c4fef789a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W46Y6BPW%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T110135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFG9Gb5p1R6pJjeuPrKI%2BBsS%2F2ANgmk3f5cvzKj4MxuAiBAUZ3%2BqfhmD7p3XhffJdACPf0YrPB%2B0Fxg6nx1PcYdAyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrZ6%2FOQ%2BO0lx48EqjKtwDwsZ%2BxItvYVUS41O9LhhTA%2BEUSi3LQMSDOb2jHIjiHzgQHNH5KlH7Ohz6WNchxNnwdUZtbvpfQAl2sz7Ot8mHz2X5c1d6U029qc7xE%2B476WW3%2BLsjTgJR19JfbXpC7hteeZm8XhwXKW4bGCEjJo%2BRKWqEGWu2WZ2dBi%2BQ0t2lGDpZ%2Bt1ESQDYzvc29CbU3wOMJ0CM9ZLM7Zmfz5PnKw8VDk1YQkUxndeSg9sgYjYPO4liPHL%2BTC24rJaukUaqlCiSjLnMsIGJyR3sNV0ARgcntFtGGXktQ86ozntDbDHzInF1BV9EvGjn0xy5ZNYWv9wnuWxk%2FW7YJkkNAnH2QBlcCuMs3jfNH5m0tmP7tYLx4VzYK0Q3Kq%2BYqM8CwozQRGtqYjSWiAVT6HCeYHfJICGGFg%2F6QSyX0AWLd5%2BJkHPuNMZL4ZULDUdXD607LNr0eeJR8o1ZpzG9enfTR9WlhEKiWf3Ikk8k%2Bs21OcgwVOU88PKlIkkQ26%2F4N6pz9%2Fi2AUAn8JcCf9mexYQAI3CENAWoihWWXHwJcjKkF5U8TQQBy6HQW3jvlLdjjhTHiSurr%2FMbk2Iew1XEdZSqDGv6KCPf%2BN7ddaTYiHp1mdAWRHVxNcCZzh%2Ft5PjJ4r66DWAwr5D%2FwgY6pgFKtEayxeul7RBBWbzhZ0h38FawS1BS6voUlB%2B5H%2Bqu%2BIMaXYigip8tALoUV40UwlWv8PjfrU4i34kHGcCXuDIHHSL7%2BOB%2BKF16VO2Ytlg2%2FIWWPobOzznMaeYwpe%2Fs9zVy4uCjE1KO2bqDdrJMHIftuFZhekRs2JkZtW8uYAcRVnO2PRgfHyLcCLN127zJKdqcMTFlaLZfA6KMxrUO08gYaU5bkJ1m&X-Amz-Signature=40d165316bb34b5895fe50e299d6246a4a9ce8237b1da36e2d1e84b0a927899e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMUK7ATG%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T110137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FHaWwotNuK7RwqMHueLUs1%2FI%2BReWgLOEXe7NqfeUqZAiEArzVAEmDb6NQRWMCUlGVacI7qTNupo6OgoOLng8pLPmQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNK1H0Bk0VH74p8taCrcA29M1urxWjm%2BnHyya6gdwciViAONYg1pdYRdDbSpIjEWS6CslGoGAaz7UiHWEM6GAUHaaj8H1m8Xw7R%2B1g69GsB%2BxQZk9i3yZdoLjbR87mPF8w6wVGNFLrjVtruFRmtg5JCRHnOP%2Fd9wy6JLYVaAy3Y%2FUdW05rt4Nq2YDvAJNC%2BqQmFjIjaBuB%2FbwB1p6tU%2BX%2Fc0BJDN8wz3aR5cBaghdDL%2BsPgyoZkutzwDYGrQHA70EtdnHs73j6067cW4pMmBUuiHuUw2av%2FfeTr6JMwRc6V%2BMMshoiCgtw65cVL2v9bs8Z%2BEAQdcH0ByfST0soN5TahBW%2B7Z7VFIXmTUxy1bc84OSIbqIMtqpn1IkgTx5akvdnqHN2O78xgH4OfWroXT57K8LcL15syrI41Dz1zXiOIas1K%2F%2FC3F%2BmU4OgZmca%2BTYEkcbv4BLwDuwfN4g9eeBcVnwdUEq0bpCzaXaEiBXQz9CTXVM8DUYDZfBtn3vlhzMN4tyHVAb0fu%2FtqvGu8BniyeURblbYyKjpndsiDxPvwxVJCWwmqNfTfgOXm%2BcVDcEEEUuY6Pt3HRuRfJADZDqCJVHeJIFfEKdgF5JUh3tCx0CSSeublAlqv9IBovaiKn0T1AVKNprDk88IKzMK%2BQ%2F8IGOqUBptvElHY3sb6fS2%2FTzMHs9ZlKg%2FIOpaSbEDV%2FQpdoTZv%2FXrVqwyJlKl7IhefdB3qFmuXWusrHLeHUQtbCYKsBHDEJ1A%2FTEaazuE7Fp2Y3E40e50tuRA1qiY1SWEbqZcNmYBlAcUuCJv6hf0h522fB5B18Jz9GvfHG110mKG83Zusnr9X4NStMggmX8e%2BuTssW9eOYXS4iXVZtpyCXF%2FDyOa5R21Ni&X-Amz-Signature=e02e6271f2ecc65a4f87a0401797d7ef5098ea323d8014ef128da9c14aff75ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A3JIIJV%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T110137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICWbEiOYyznjEI1%2F4HeZXdZcQy3d8cIoQ%2BOI7XWDDFflAiB1O3qqQbIMxseeJ1ml4A2DspmVCVbMJwqtXRrq92rG%2FSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYQN2zt%2BHuKZpcdojKtwDY5jNDTfub4parUO3RwS4OU6y67REtpkNkdx0hY7Y9nDMLKhptGDwl3Ssp%2FOZUB7HI6zZVefKtBvww8dgezrty2eO7akCNHBzpfs%2F5rLCO6te%2F%2B32QmH7MUbEkNnN17HA65x%2FZrpya2PlfOLPsyX4MoAepmNgwsuVI33lXM%2B9oL9ok4thmco4dWYwm8QkOFuEsfc%2FJqGpE1P%2B8JU9hkNqF%2BovqthfgXGSGryB70hBkAbdFQUtDQbiaxrJuq6z1PfR3%2FDE67IGzNEVdJMpChkSWt1e20sseHPV8Sn3vKGzIUUlO4e33sfWAb%2FZUQJPiZKkTzWOvoW1jyEuRuwwuRoJAbihsvmALNve1g6t%2BUW3HiXexSPs0EUXMgl4u78V9R2K7nrUrJBaqgH%2F4urtCbx8XVcM5H3KIULS8vKY00HSbTszFmewUCTOKo2FuXDzmqAJPUOenbDIy8BMjtv5zesttur%2BHCE3CEEOPD11%2BwzcO2GzyvmbEOZ5L%2BuWuDNFTfQd7hBpPAWzaJ3vnojVvATfcb77%2F1MZ8kvqrnh1%2FeakHXKPDbjhd1YJFvCCm%2FgF3P9sOx7i%2FIQmSf7XP5AbDgYSWkJ%2FGRjh%2BzN1agWJO77Ul%2Ff25Fy3p9jCMfIlrVUwxZD%2FwgY6pgG%2FNXVKWIvA5SWcxMdJJpXpYdMbKWAEofeLcrI70WDMnIx9zeGK5GyZLWZzt65hZ97ORpu9OIa4LvC36usK%2Bgd1JPIbtbmD5V1OqUWf%2FdUCWdASwxWXVe8X7cttgB9tlILu6o74v%2FLoCl%2B7IBYZ9u8wGVYn1M3UYEOFGheanZjL7CT3mX4ua0oP3zLqzWJab7T9gFkNfwmkGeI55br1lCLQ26EE8hgy&X-Amz-Signature=12ca448ac76e2ad8aba3a91dcee94e6a55bd719ec7783a117b33f2e42eb61fe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W46Y6BPW%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T110135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFG9Gb5p1R6pJjeuPrKI%2BBsS%2F2ANgmk3f5cvzKj4MxuAiBAUZ3%2BqfhmD7p3XhffJdACPf0YrPB%2B0Fxg6nx1PcYdAyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrZ6%2FOQ%2BO0lx48EqjKtwDwsZ%2BxItvYVUS41O9LhhTA%2BEUSi3LQMSDOb2jHIjiHzgQHNH5KlH7Ohz6WNchxNnwdUZtbvpfQAl2sz7Ot8mHz2X5c1d6U029qc7xE%2B476WW3%2BLsjTgJR19JfbXpC7hteeZm8XhwXKW4bGCEjJo%2BRKWqEGWu2WZ2dBi%2BQ0t2lGDpZ%2Bt1ESQDYzvc29CbU3wOMJ0CM9ZLM7Zmfz5PnKw8VDk1YQkUxndeSg9sgYjYPO4liPHL%2BTC24rJaukUaqlCiSjLnMsIGJyR3sNV0ARgcntFtGGXktQ86ozntDbDHzInF1BV9EvGjn0xy5ZNYWv9wnuWxk%2FW7YJkkNAnH2QBlcCuMs3jfNH5m0tmP7tYLx4VzYK0Q3Kq%2BYqM8CwozQRGtqYjSWiAVT6HCeYHfJICGGFg%2F6QSyX0AWLd5%2BJkHPuNMZL4ZULDUdXD607LNr0eeJR8o1ZpzG9enfTR9WlhEKiWf3Ikk8k%2Bs21OcgwVOU88PKlIkkQ26%2F4N6pz9%2Fi2AUAn8JcCf9mexYQAI3CENAWoihWWXHwJcjKkF5U8TQQBy6HQW3jvlLdjjhTHiSurr%2FMbk2Iew1XEdZSqDGv6KCPf%2BN7ddaTYiHp1mdAWRHVxNcCZzh%2Ft5PjJ4r66DWAwr5D%2FwgY6pgFKtEayxeul7RBBWbzhZ0h38FawS1BS6voUlB%2B5H%2Bqu%2BIMaXYigip8tALoUV40UwlWv8PjfrU4i34kHGcCXuDIHHSL7%2BOB%2BKF16VO2Ytlg2%2FIWWPobOzznMaeYwpe%2Fs9zVy4uCjE1KO2bqDdrJMHIftuFZhekRs2JkZtW8uYAcRVnO2PRgfHyLcCLN127zJKdqcMTFlaLZfA6KMxrUO08gYaU5bkJ1m&X-Amz-Signature=4d49ce5bd4c4851c91f1d126fab081fe653eb4682b3b5c93ad04a808f6216f98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
