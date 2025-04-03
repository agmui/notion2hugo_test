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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIU7MD2A%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T032431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCOHCqGQwmpSYztKoLNJLiNrU8JaNaiGIbIKAmY5wvfNAIhAJCNG%2BAiFbseFBnDZ7de0qgcuW6YpJDhXAJGIEBYqJt7KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwqyb3Fi5BgAss6IJgq3ANTAIfDYp%2F1FtXg8bG8m6KdeWyIBgh%2Bk5ccgNrpZzbyt%2BXtzdvHQNqjv6Q%2Bc6zKyLlg%2Bc9IXNeYKxuBAETVlFtxRt9oD1cw3XfQccBhd0CtfuKtNE6S4BO5K892LVwZYEGDP04jDtgkugtWL3Z2fanif8qoSW%2FIaedCxoD9XyqnT%2FC0vhublMZIbBtwFaR%2F08yTkYz%2Fd0FGkCgj8If0JtbwoYgrYYu1TXIwIdSA5sqX0vxQ%2F%2B60xN%2FPXWjb7dKzGavs3oIEw%2BWjoGz3kcdAhV0sg8lrT5usy6AoqSL7%2B5La%2FlLmesOzLi%2BaIxo0VC2wotq7%2FAWIZnGCGG5xX%2BgBypTp0IimAzp1aF9VpYS24qb1rWWpMmFYLCzp2uOWGh7irV414KgGQO3wKorpgm70hlD%2FUtdOeOYw08jiCHBsGIrpMLj212opS19l5jVQ2WacCudaaFVaHh7emf17czKr4Lqi7kzZm%2Bhy5z%2BiuXA8TqNIvdK5RBF1E6puoNSuKxpcg58enP0H1c7SM9xrO%2Bp51383n7z%2BmYK0bhawKC%2B7N2FoqLreZxTPfUX6qeqfBNbPKdp%2BFdD3fFCogaUjZxt7FCqLwJq%2FV%2BnZBuyHs34Gz7ghuj42MdiTxh5HZfT%2FojCx%2B7e%2FBjqkAVJtxXvBBJJOM2r%2Fp056dfOpJ%2BD9EfEXA9tgGez%2B%2BTu%2B%2BIFoPPPL6%2BpnUTVFGPHNnyb0ykbSctXmkUANDGRjNI%2F%2Bff4pljoxOh3%2FUuOVSsZkHako9xUT4Cal0iJGGthGUlttnwrQXDe6a0dBKu4Aic%2BR8KDFoC9pR%2BSnTNmrDDdX4HFkcr3aD9kP6p7AGY7%2F5uPv%2FDOTTQJcC9hTnXeMTo0xjc6g&X-Amz-Signature=2e7271c3c95dfeaff9ec3d14314e818a81367c6eade0baf829b68dd11aed1f7d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIU7MD2A%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T032431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCOHCqGQwmpSYztKoLNJLiNrU8JaNaiGIbIKAmY5wvfNAIhAJCNG%2BAiFbseFBnDZ7de0qgcuW6YpJDhXAJGIEBYqJt7KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwqyb3Fi5BgAss6IJgq3ANTAIfDYp%2F1FtXg8bG8m6KdeWyIBgh%2Bk5ccgNrpZzbyt%2BXtzdvHQNqjv6Q%2Bc6zKyLlg%2Bc9IXNeYKxuBAETVlFtxRt9oD1cw3XfQccBhd0CtfuKtNE6S4BO5K892LVwZYEGDP04jDtgkugtWL3Z2fanif8qoSW%2FIaedCxoD9XyqnT%2FC0vhublMZIbBtwFaR%2F08yTkYz%2Fd0FGkCgj8If0JtbwoYgrYYu1TXIwIdSA5sqX0vxQ%2F%2B60xN%2FPXWjb7dKzGavs3oIEw%2BWjoGz3kcdAhV0sg8lrT5usy6AoqSL7%2B5La%2FlLmesOzLi%2BaIxo0VC2wotq7%2FAWIZnGCGG5xX%2BgBypTp0IimAzp1aF9VpYS24qb1rWWpMmFYLCzp2uOWGh7irV414KgGQO3wKorpgm70hlD%2FUtdOeOYw08jiCHBsGIrpMLj212opS19l5jVQ2WacCudaaFVaHh7emf17czKr4Lqi7kzZm%2Bhy5z%2BiuXA8TqNIvdK5RBF1E6puoNSuKxpcg58enP0H1c7SM9xrO%2Bp51383n7z%2BmYK0bhawKC%2B7N2FoqLreZxTPfUX6qeqfBNbPKdp%2BFdD3fFCogaUjZxt7FCqLwJq%2FV%2BnZBuyHs34Gz7ghuj42MdiTxh5HZfT%2FojCx%2B7e%2FBjqkAVJtxXvBBJJOM2r%2Fp056dfOpJ%2BD9EfEXA9tgGez%2B%2BTu%2B%2BIFoPPPL6%2BpnUTVFGPHNnyb0ykbSctXmkUANDGRjNI%2F%2Bff4pljoxOh3%2FUuOVSsZkHako9xUT4Cal0iJGGthGUlttnwrQXDe6a0dBKu4Aic%2BR8KDFoC9pR%2BSnTNmrDDdX4HFkcr3aD9kP6p7AGY7%2F5uPv%2FDOTTQJcC9hTnXeMTo0xjc6g&X-Amz-Signature=517b55f612c854c4bc657fd5677b2bc1bdbb24f95275b9ea05f7c7dfe9dc1d12&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVT2L2CV%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T032433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDUuFNJK7%2BSoRTa83YnImR0sSNrwcGtX96hVoRklttywQIhALkaI5%2Be%2BYNNaND1qksNr6S9AoPlknb2zRYH%2BPc9veapKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytQ6r5VBEb%2BkPKJ3Uq3AOnEhVZpPRlQQDv84ugoSnrUn5Uc%2BHIyfnWgUb4r7TWBt2xstI2KJ58e1aEdpPZR%2B3SanzbRgHgmCJzcdUcWzVRnR7NsuVqxhZTLSVaEZ65HRAAzkjEs1fkB6qwH39PuIjZm746zBve0TvKzLQ8Ab6qOeBX1UD0hjeaVM7C5HTiKBzZTQAx3frPbtzWyPi%2FRGff%2BwsoUZ3ALNqfp3gsfJgfN0rL51IhvDRUFiPe84QRh2ZfMun02NdWfsTYZDE1FeDs8DM1lJ%2B%2FaFK98INHAtVOb%2BBsaFq2i%2F43GJV1nq75VGEt2Qai02TvPwv76C6sGsVuq1enlSMU%2BeKDu%2F8DY1%2BwSXuKznyylFNr0u1tm2YOpMN4QPA6K3aosgzlwsTJVLWPkHK4MzO3g0MLQPWHFSZiav1Khzefo%2FdCm9H8NVOlfDXW6ZOYkEvUJJNRBISY1db8nZ3vK8G2r96%2FNAqRLQBbEUqFNru0Nv8ykMuhHxbyg3paY1Jk8vpObTK6%2BLvF1XSXWlfuvrS8C9948UwmSyGPtvb3hQzVGOc4S66%2F91g%2BeUFYhLUDkvrts8WVWH94qOt0tgfNxMj6NPRwJixeco3mwiCUBGXVSXS%2Fj1bUetDr9APVNw7ox4XmOG7aOTDM%2FLe%2FBjqkAZDOQ9MIm74aauXy0CRgx5ZLuilVrYx28g%2B%2F9TgE%2Fqc20iB%2FhzW4Q4qXe3MAN%2BkaPviN6IhaQsq5PADa6st3c9Ra6FCpFIEODbj1IiIROmE%2BDl4CqNXSwR9xMRFtntWdu3Ag1S3G%2F%2B%2BNZxyCcdGn3euiyw2Ns6Hx0Z1YxQpdOIOcBrCFQbvhe4jBBWARYiQj%2FqGUZ7jbxNVhloqMiUSq8W5%2Fstdj&X-Amz-Signature=bd37672ec43a92caddb0034d36a69c1fe8b92651aebd130b678b5151d6d71e13&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664I2E6W2%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T032433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCeN%2F58WPCBcm0n8DzdnnjH7s%2FkiqGJNnmKhrm7M2aXEwIgFhfbKjkvm%2B2X7RmreLToErK6PC7n3Uc8WKQkmI25XakqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6%2F6EexAeg%2FkGh%2ByircA9ph%2F4qk4c9m8E6v1yx1qVmM1TLS7r%2Bd%2BU7l6fxDzXZ8ULN3GYlR8YcSLJlh9vdcY5xrYeFngfe5utDfpUFBYKKZwQs9pC4WFnrVmT5m6i%2Fgo97Q1wSjQXN%2BTPRO6v3zAlwPIrCJoa5qGK9onUXZP5XfkkBlsa0Ob1hGUOtK1eUadCT3jgGWMVy2ypmat1K02AaApVXF2QzYU%2FOrmbApK3%2FJXOAQr3umrty0D5qmlY%2BgZihdr%2FAglr%2Ff3XYz3SPpYGdxSZ3oAnhPSISzurY3jBdbEi7%2FsaNgV%2BagxW5mK%2FiCafXjvGczBRkCmKiK6bvx7CMUxZfDtbxkLPyq9cgh3cK0mUgN4hdFKtn8PUxwU30e2ybtfgtY1kjM1TisJOK65KbqBEFdNAsPbMQZ5TE%2BSVMEJAaExAHdg6Urclsu6Wp4YAD%2FblIviTYHtFwL7GjtKtbvevyyKz%2BplZdfxHGXLjviNXxP341Wm4cvcMAgkosVij8RQZru6RrKyP%2BNwGOqZfNq9XxT6RmvhA9bMrRStFxTkqW4voJ4eLipBFdDkw2Eo4gCvq33VAUDaxxtCib1o4yI9SxhnLmJVFy2hUKZIn3IOqCcAkNnlK5sQO95PT%2BIpMyIMfvgOmUj2cn3MKT8t78GOqUBgJ6rAFvI%2B98CJunUgm6X5AiHBN8kHQHKmkeC5iwK66v8VSH6z5UvHGjwdZNPwjcr1XTg9SpclYDoLb61t0kMVinaOkyRvPGTs361OQHUkJLrXwAp1TainMXDZYUvvPgNoNXBvlAzxW71H4E%2BHo863V84C8wSHhStxYrSWFJoRTA9uBFFd%2FPhd0748vodMwO6TSdvwGm6dP3olXrhLt9d6Bsv50JC&X-Amz-Signature=4bdfcb5dbc7d1d3f7d2c08f232c94c39aa6046c9e80ea5f55d18b8ab0e2ae7c7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIU7MD2A%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T032431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCOHCqGQwmpSYztKoLNJLiNrU8JaNaiGIbIKAmY5wvfNAIhAJCNG%2BAiFbseFBnDZ7de0qgcuW6YpJDhXAJGIEBYqJt7KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwqyb3Fi5BgAss6IJgq3ANTAIfDYp%2F1FtXg8bG8m6KdeWyIBgh%2Bk5ccgNrpZzbyt%2BXtzdvHQNqjv6Q%2Bc6zKyLlg%2Bc9IXNeYKxuBAETVlFtxRt9oD1cw3XfQccBhd0CtfuKtNE6S4BO5K892LVwZYEGDP04jDtgkugtWL3Z2fanif8qoSW%2FIaedCxoD9XyqnT%2FC0vhublMZIbBtwFaR%2F08yTkYz%2Fd0FGkCgj8If0JtbwoYgrYYu1TXIwIdSA5sqX0vxQ%2F%2B60xN%2FPXWjb7dKzGavs3oIEw%2BWjoGz3kcdAhV0sg8lrT5usy6AoqSL7%2B5La%2FlLmesOzLi%2BaIxo0VC2wotq7%2FAWIZnGCGG5xX%2BgBypTp0IimAzp1aF9VpYS24qb1rWWpMmFYLCzp2uOWGh7irV414KgGQO3wKorpgm70hlD%2FUtdOeOYw08jiCHBsGIrpMLj212opS19l5jVQ2WacCudaaFVaHh7emf17czKr4Lqi7kzZm%2Bhy5z%2BiuXA8TqNIvdK5RBF1E6puoNSuKxpcg58enP0H1c7SM9xrO%2Bp51383n7z%2BmYK0bhawKC%2B7N2FoqLreZxTPfUX6qeqfBNbPKdp%2BFdD3fFCogaUjZxt7FCqLwJq%2FV%2BnZBuyHs34Gz7ghuj42MdiTxh5HZfT%2FojCx%2B7e%2FBjqkAVJtxXvBBJJOM2r%2Fp056dfOpJ%2BD9EfEXA9tgGez%2B%2BTu%2B%2BIFoPPPL6%2BpnUTVFGPHNnyb0ykbSctXmkUANDGRjNI%2F%2Bff4pljoxOh3%2FUuOVSsZkHako9xUT4Cal0iJGGthGUlttnwrQXDe6a0dBKu4Aic%2BR8KDFoC9pR%2BSnTNmrDDdX4HFkcr3aD9kP6p7AGY7%2F5uPv%2FDOTTQJcC9hTnXeMTo0xjc6g&X-Amz-Signature=74ed27e511adbc61d8dfac9a65f1f99c60f73c0ed214c389b57f1962e235a81b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
