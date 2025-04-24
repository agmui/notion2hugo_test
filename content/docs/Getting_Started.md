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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5OUESQV%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBN%2BITbV9BjwnhXznXW6QdPg%2BOyKxyjyddnynkTesMBfAiB24sn1OAvyiiZB%2BudZJAuDZ1A9vBe7u7mKSMc%2Be%2FrbMyr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIM0Okn3yg4B4w6z%2BSIKtwDZf4%2BHdWrbRiYqj3N8iQUpL%2BipQeC4OSiRox%2FvJ4hjDSEyOU6b1hyJy4LFRxNvy1JGX27%2BcWxhYNtOW21f9c72aWIJ8g3VzJjJJzpDrP4C1vC5F7QqqiZ7XuMv%2BllZbsGdJ%2FKGDYVMVQi45mZ9UXiZ5JIaauEemmWAEMBlDYPOACe2N5bs14%2B0jWyZ1x2%2FdjPiHwfxNVgno6f4thOu3EgbB99QhBzW8NB32OzzIzxa731SXx9wuzCvveotiK0ENBwTl17REmXtqzi6fchIgxUMbMV2VWB1ZxFAhHco272y1KTb8IfmF4YnhrhSKMa8f3XAIqsd6XePs4UXsHCiqZ7opcWqAREQ9jgncmM5t3Na71YGEtfnbV%2Bm4ZuLTvUMQerfENqXyESgQ2%2BMQ1HFxjFL9Yu%2Bni2QO23rGDLIbLckPhf3rCtJmQS1lvOHgGb9yBeQgMzHF1khPFAamwwY5Mb50zMurR5%2BY3pQuADenXhYHVmcahLop%2BZve9WIv%2BlByrdIGKqW4OeBY5aUwIL8XZf%2B2OxFiC7fdejZBSMlGm6X0IVwMHTvcXumnRmQbQticT6xX5N9Rhr1BkayIk3HwndKDz%2BB2ykxXKAtSDvc2DZtbu7q%2BGV7tewAijic80wl9WpwAY6pgEbzzBqk5q7rzc1F3oIFJQ7n1zc7R22EErapAa%2BZL%2BLbDIDTbeBxTtY3YFhIjYTiduBKU%2FBFprLMvB29Pcta%2BFikGZP7zsGn9epVSzpRwFwoAVxh%2BJdrY5kBFhBmS7ChjHqVLMUA9uFJDEhu1W1FZqTxYoPQGcOri3iDHfIz4Xb%2B%2BzVGaGZhpJxpd841ONkvI00Z2nXzZSu3BtIOPHkKsp%2BKbhkh7a6&X-Amz-Signature=0aca3570201dc4a36f5b4bd21f9605eeaa5ca03cf0c4a0123a8a909a61034f33&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5OUESQV%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBN%2BITbV9BjwnhXznXW6QdPg%2BOyKxyjyddnynkTesMBfAiB24sn1OAvyiiZB%2BudZJAuDZ1A9vBe7u7mKSMc%2Be%2FrbMyr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIM0Okn3yg4B4w6z%2BSIKtwDZf4%2BHdWrbRiYqj3N8iQUpL%2BipQeC4OSiRox%2FvJ4hjDSEyOU6b1hyJy4LFRxNvy1JGX27%2BcWxhYNtOW21f9c72aWIJ8g3VzJjJJzpDrP4C1vC5F7QqqiZ7XuMv%2BllZbsGdJ%2FKGDYVMVQi45mZ9UXiZ5JIaauEemmWAEMBlDYPOACe2N5bs14%2B0jWyZ1x2%2FdjPiHwfxNVgno6f4thOu3EgbB99QhBzW8NB32OzzIzxa731SXx9wuzCvveotiK0ENBwTl17REmXtqzi6fchIgxUMbMV2VWB1ZxFAhHco272y1KTb8IfmF4YnhrhSKMa8f3XAIqsd6XePs4UXsHCiqZ7opcWqAREQ9jgncmM5t3Na71YGEtfnbV%2Bm4ZuLTvUMQerfENqXyESgQ2%2BMQ1HFxjFL9Yu%2Bni2QO23rGDLIbLckPhf3rCtJmQS1lvOHgGb9yBeQgMzHF1khPFAamwwY5Mb50zMurR5%2BY3pQuADenXhYHVmcahLop%2BZve9WIv%2BlByrdIGKqW4OeBY5aUwIL8XZf%2B2OxFiC7fdejZBSMlGm6X0IVwMHTvcXumnRmQbQticT6xX5N9Rhr1BkayIk3HwndKDz%2BB2ykxXKAtSDvc2DZtbu7q%2BGV7tewAijic80wl9WpwAY6pgEbzzBqk5q7rzc1F3oIFJQ7n1zc7R22EErapAa%2BZL%2BLbDIDTbeBxTtY3YFhIjYTiduBKU%2FBFprLMvB29Pcta%2BFikGZP7zsGn9epVSzpRwFwoAVxh%2BJdrY5kBFhBmS7ChjHqVLMUA9uFJDEhu1W1FZqTxYoPQGcOri3iDHfIz4Xb%2B%2BzVGaGZhpJxpd841ONkvI00Z2nXzZSu3BtIOPHkKsp%2BKbhkh7a6&X-Amz-Signature=00c1d47aee68de873572b9660ba694ef987d20b4d8b1e51eab310105c5952a9b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DQDG6VJ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGOiQT4AE8d%2BN2SnYB0j24bq5K%2FAn84chGuJGWo4VvNoAiAs6ieNX4D6UlnRMb1x5bC31M%2FdQ5neICKEkAcYHKMlOCr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMShHztgDuShu1cLJrKtwDNU1OX3WV6nVwL%2BG2s4WcSHQbU0xXXxp8DV%2F5A14i1qMdmwoH9jxwa%2B9%2BzqLfXV%2BeYjOYcTC0EMQ8L42jwvvgDDlAMAD%2FKZ2L2ogFfydkmJ87DOS16P6kflVuqsTS9BqiBmXm6mnKkRaVEPikxiZ7ASGiT5Pmi8DxUYYZoE3j6%2FVJWTCTPTRlV7pfTArfSFmy9A7oMFarjscRVO%2Feqx0gkokOcw%2BeP%2Bq9OZ%2FDbdrrs4RZSXLkHxTZGtZ%2FgrzoJ9JQgqqjsKucfpkqr1O%2BS8iLHQeml7l00IUQW97o0dzNWq87sHeCcldS%2BINie9y%2BokwgHnio%2FbH2ngSUx%2F5r%2Bq28tTskFqVzW1JzscBXMr7C%2FJWlgzaiLZr%2FRhGkbW0EDdweCQbNznOwJBrygS28cYDBHZIvcIuUBmV022wISOjIolEt%2FpZSxVHA6Ggbu%2FoTZtnGIijHljf3jZlLyE9djTAr2vwkdOhmN86ZkKoi9DUW83m%2BBrog%2FAFwsyI132kWSy0seuMHKoDmI64A7W%2F9Qrkk4NDalS%2BuXIADfzku6G0KQ5tXnPN4k2JgEK4MvVhw4ci%2FyNx1MuPJwq6Rl975qQdsV4WdLHrUqkGTeYUDH6Lsdrc9Xm2JwL0OwAfvE44w69WpwAY6pgHzunYa46HRdHzcRxxooRDNzLS%2B2KKt7zlVuPmikzjaJuWOp2Qc%2FQP7Q98IeGorBF6Lw7vHm7xtUm8V13pKolOa9jJ1dVps0%2FTd7ytVltdr%2FcPzq%2FKlTzfkL8SR7lUaG5YRiLKE8H11qXHHqynCFvA2toAdN03%2F6PS%2BKsQEPfeFjw4PLxhj5acijL15Z4548j8z8avW2OyJ4vQOvkZ7Ag3fwkIJUu6s&X-Amz-Signature=d73c8dd5f30d91fb1eb4c46967e3267d63b15a637bcd231b0e83c8ec25211453&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYVJGREF%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWnQEsY8Fo8H3glO5SXZPjHOUqxSQHZUO%2Ba6zuFGHWQAIgSrBzIfWiTjxh2zdbjIPQANy%2FakJladSSHwAb%2F00A1%2BIq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDDF1%2FxjX%2FZDRUaZJ%2BSrcA1MVMcQ34X4rJOCBF7gjMvto%2BqKU5uiQSSbdqYncj19DBawhO3bDgZV44gciD4Q6Rdgj8x26snQYT40bCTiRYi8Y7xov7TvSH8bnEAWeqIm%2B3RIBgIzgsshMNDmnT8EIDgRdm3s4H6ZbrWhMy8lGMUYkfJHgjYmHP5Sy4G%2FdlyLzVhh5c7EEy3h5kOqr9IR51j%2FO983jXY6vJnjeUnT0vatNvxjKL%2FCvAF1rVxhcBbhXI8WwPNCTCPeFF%2F9GHKtN654qUEnALnjJ%2Br3mnzieTpHOqQx9BZ80Az3I1DDh%2BdCmIvt%2BBP2jNOeHV%2FDFy2WVkvaak5hMJKU4MpVa7wvO1cugfh55a3xXHmeUmJgGKMT1KQbCjfyTgQsdKmsfLs%2BlT5nr9yedZ1pgWU3%2B7G92xBY67dyb0j3b9T6968pl1fD5HRbEhWwjFWbRf4PUq2Sc5Zqo5J0WJ8jjz4mzlQOoctbT97G38ImHhR0a8M%2FydLLcta%2FYxl2rR%2B0BYrbDla9HS%2Bp%2FBOZ5c7Cw9w9DM7TIm3MzLleWC2gYia3Uf8BXAixFSea4k8CjGv7R7nFf6kIaLPjd8ncjnhfprIjHtV47mHJTBrpBXarq1hkeB6ThFr46pQfnp8R0NhWDU%2FobMM7VqcAGOqUBe%2BirMdJRGUgwFHWnmebuV5il3xNTuIdQgOxzrdpaHa%2F4U6541b1%2FBWakLC8%2FfU9IoSeJq4SUCpLGZ2W9mrC4hGMYQuIKjRCH5Q4%2BRR8V2SEH8BOo5buxAIwliqCpvvGagTPLFP0BNizeTFR2Txy9lH3036ZZ75iIU0m90P3tynbELTtEPCNMAN2NaJ1FKlh6y3uowFNv4DUU%2Br10I%2FvHPvylsHNl&X-Amz-Signature=3085b8d3d4c0be8de3dae63153710fc35354026809764946364ebb055454f319&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5OUESQV%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBN%2BITbV9BjwnhXznXW6QdPg%2BOyKxyjyddnynkTesMBfAiB24sn1OAvyiiZB%2BudZJAuDZ1A9vBe7u7mKSMc%2Be%2FrbMyr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIM0Okn3yg4B4w6z%2BSIKtwDZf4%2BHdWrbRiYqj3N8iQUpL%2BipQeC4OSiRox%2FvJ4hjDSEyOU6b1hyJy4LFRxNvy1JGX27%2BcWxhYNtOW21f9c72aWIJ8g3VzJjJJzpDrP4C1vC5F7QqqiZ7XuMv%2BllZbsGdJ%2FKGDYVMVQi45mZ9UXiZ5JIaauEemmWAEMBlDYPOACe2N5bs14%2B0jWyZ1x2%2FdjPiHwfxNVgno6f4thOu3EgbB99QhBzW8NB32OzzIzxa731SXx9wuzCvveotiK0ENBwTl17REmXtqzi6fchIgxUMbMV2VWB1ZxFAhHco272y1KTb8IfmF4YnhrhSKMa8f3XAIqsd6XePs4UXsHCiqZ7opcWqAREQ9jgncmM5t3Na71YGEtfnbV%2Bm4ZuLTvUMQerfENqXyESgQ2%2BMQ1HFxjFL9Yu%2Bni2QO23rGDLIbLckPhf3rCtJmQS1lvOHgGb9yBeQgMzHF1khPFAamwwY5Mb50zMurR5%2BY3pQuADenXhYHVmcahLop%2BZve9WIv%2BlByrdIGKqW4OeBY5aUwIL8XZf%2B2OxFiC7fdejZBSMlGm6X0IVwMHTvcXumnRmQbQticT6xX5N9Rhr1BkayIk3HwndKDz%2BB2ykxXKAtSDvc2DZtbu7q%2BGV7tewAijic80wl9WpwAY6pgEbzzBqk5q7rzc1F3oIFJQ7n1zc7R22EErapAa%2BZL%2BLbDIDTbeBxTtY3YFhIjYTiduBKU%2FBFprLMvB29Pcta%2BFikGZP7zsGn9epVSzpRwFwoAVxh%2BJdrY5kBFhBmS7ChjHqVLMUA9uFJDEhu1W1FZqTxYoPQGcOri3iDHfIz4Xb%2B%2BzVGaGZhpJxpd841ONkvI00Z2nXzZSu3BtIOPHkKsp%2BKbhkh7a6&X-Amz-Signature=301bf255955aae50310efc2933873d1312d51a16128b06e6a3e1ae6003a87c2c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
