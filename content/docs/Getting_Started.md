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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSGFMHOW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T022342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAOvnfJC%2BBNvynsQP5qQ06m%2FR4Zw7mlW9pfjhr2ieTPOAiA8r5rHz4S4KXcP%2FJ%2BF%2FX2sklrO6FWizubsRK355ZE%2BNir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMAVm1qpkQQ9ioBPA5KtwDxlEQA5A3Pu26k%2Fz%2FzQcSR0UwMHfdieZPbFi9OFstZNpDGY%2FuMYIA1%2FdsxMiDXKRzWHGzpDjjwWx0UVBErPMTkcP4fRLjL1Sd381OTLfe%2BDVKr0SjOcPlsuOImyYz%2BwmMHl7RYf6xxrECdYOen5ikMlKZ4Bq0tcfbazm%2FkW1uKNzVryV00I1x8eXZYXjuIxksAF207ozf%2FVA6PNhG1gzqf%2B66zh913m9H0n4KfSAOs2O%2B%2B12Wvfm5EGabYkV1Uaoa5Aymkxx%2FaKO4PCaiWfaBsQu1VZUEaSvzTDZn6%2BIF1EnEwighic%2B2TDTgyOtYMOP4NxtHMrqmLlpKWEOHuk1cnI7YFuk2envEwhMMPDLRsRmZd9sbcjWt5Bda2l8ppbynv7Io8hUpBCoCKmz39%2Fp7mleT0LSs0Rfnofj8NiDUoFNtO%2FNbSJVZiJV1s6h%2ByaPd2ORVVWs5JtFv8gssO%2BnytnLl5CeZ3azSV8G%2BZ96w7u2AVBVjc1%2BwUcDEVqwgW%2BfvmqKt2vdHiG6F%2B4mYQltvv%2F9DNI0N9nKfDroP50atloeikIKNCDZ1c0MADDxLG4sa0D%2FhRIiWNn8BWuevFzKtb23EIGbtc8W60hQFSqQH0mnG6Tr7nRT8r2wab%2FAw0dyfwQY6pgENdpQ%2B2g3ouni2rCIzLTiUq6cLtR%2BqMoXHHwesRjZ0WXAFeJYf24W9rANeQ2qYIMUf4%2B%2BxfhOXY68TRCLAtpHVxA2pDhClaWYgh26WV5I7jRoUnaW20%2BD%2BvW%2BoGGwPJMU%2FfjsbWjbf8UNSYNw5UxrC%2FY%2B3bA6ncvHDApotmc%2BKXnzFgBhMvivFDop3KCFvCg93bS%2F%2FQKH8bJP%2Bv7mft7jaRzgswclv&X-Amz-Signature=f0d3ab2dd167392f738c15978971eb12284ae02561e8fe1320c7981186faeced&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSGFMHOW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T022342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAOvnfJC%2BBNvynsQP5qQ06m%2FR4Zw7mlW9pfjhr2ieTPOAiA8r5rHz4S4KXcP%2FJ%2BF%2FX2sklrO6FWizubsRK355ZE%2BNir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMAVm1qpkQQ9ioBPA5KtwDxlEQA5A3Pu26k%2Fz%2FzQcSR0UwMHfdieZPbFi9OFstZNpDGY%2FuMYIA1%2FdsxMiDXKRzWHGzpDjjwWx0UVBErPMTkcP4fRLjL1Sd381OTLfe%2BDVKr0SjOcPlsuOImyYz%2BwmMHl7RYf6xxrECdYOen5ikMlKZ4Bq0tcfbazm%2FkW1uKNzVryV00I1x8eXZYXjuIxksAF207ozf%2FVA6PNhG1gzqf%2B66zh913m9H0n4KfSAOs2O%2B%2B12Wvfm5EGabYkV1Uaoa5Aymkxx%2FaKO4PCaiWfaBsQu1VZUEaSvzTDZn6%2BIF1EnEwighic%2B2TDTgyOtYMOP4NxtHMrqmLlpKWEOHuk1cnI7YFuk2envEwhMMPDLRsRmZd9sbcjWt5Bda2l8ppbynv7Io8hUpBCoCKmz39%2Fp7mleT0LSs0Rfnofj8NiDUoFNtO%2FNbSJVZiJV1s6h%2ByaPd2ORVVWs5JtFv8gssO%2BnytnLl5CeZ3azSV8G%2BZ96w7u2AVBVjc1%2BwUcDEVqwgW%2BfvmqKt2vdHiG6F%2B4mYQltvv%2F9DNI0N9nKfDroP50atloeikIKNCDZ1c0MADDxLG4sa0D%2FhRIiWNn8BWuevFzKtb23EIGbtc8W60hQFSqQH0mnG6Tr7nRT8r2wab%2FAw0dyfwQY6pgENdpQ%2B2g3ouni2rCIzLTiUq6cLtR%2BqMoXHHwesRjZ0WXAFeJYf24W9rANeQ2qYIMUf4%2B%2BxfhOXY68TRCLAtpHVxA2pDhClaWYgh26WV5I7jRoUnaW20%2BD%2BvW%2BoGGwPJMU%2FfjsbWjbf8UNSYNw5UxrC%2FY%2B3bA6ncvHDApotmc%2BKXnzFgBhMvivFDop3KCFvCg93bS%2F%2FQKH8bJP%2Bv7mft7jaRzgswclv&X-Amz-Signature=7a7b4c90c6b4dfe4ed1d694bb36fe814769794c2fe25942219ddcb7fd49c5910&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSGFMHOW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T022342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAOvnfJC%2BBNvynsQP5qQ06m%2FR4Zw7mlW9pfjhr2ieTPOAiA8r5rHz4S4KXcP%2FJ%2BF%2FX2sklrO6FWizubsRK355ZE%2BNir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMAVm1qpkQQ9ioBPA5KtwDxlEQA5A3Pu26k%2Fz%2FzQcSR0UwMHfdieZPbFi9OFstZNpDGY%2FuMYIA1%2FdsxMiDXKRzWHGzpDjjwWx0UVBErPMTkcP4fRLjL1Sd381OTLfe%2BDVKr0SjOcPlsuOImyYz%2BwmMHl7RYf6xxrECdYOen5ikMlKZ4Bq0tcfbazm%2FkW1uKNzVryV00I1x8eXZYXjuIxksAF207ozf%2FVA6PNhG1gzqf%2B66zh913m9H0n4KfSAOs2O%2B%2B12Wvfm5EGabYkV1Uaoa5Aymkxx%2FaKO4PCaiWfaBsQu1VZUEaSvzTDZn6%2BIF1EnEwighic%2B2TDTgyOtYMOP4NxtHMrqmLlpKWEOHuk1cnI7YFuk2envEwhMMPDLRsRmZd9sbcjWt5Bda2l8ppbynv7Io8hUpBCoCKmz39%2Fp7mleT0LSs0Rfnofj8NiDUoFNtO%2FNbSJVZiJV1s6h%2ByaPd2ORVVWs5JtFv8gssO%2BnytnLl5CeZ3azSV8G%2BZ96w7u2AVBVjc1%2BwUcDEVqwgW%2BfvmqKt2vdHiG6F%2B4mYQltvv%2F9DNI0N9nKfDroP50atloeikIKNCDZ1c0MADDxLG4sa0D%2FhRIiWNn8BWuevFzKtb23EIGbtc8W60hQFSqQH0mnG6Tr7nRT8r2wab%2FAw0dyfwQY6pgENdpQ%2B2g3ouni2rCIzLTiUq6cLtR%2BqMoXHHwesRjZ0WXAFeJYf24W9rANeQ2qYIMUf4%2B%2BxfhOXY68TRCLAtpHVxA2pDhClaWYgh26WV5I7jRoUnaW20%2BD%2BvW%2BoGGwPJMU%2FfjsbWjbf8UNSYNw5UxrC%2FY%2B3bA6ncvHDApotmc%2BKXnzFgBhMvivFDop3KCFvCg93bS%2F%2FQKH8bJP%2Bv7mft7jaRzgswclv&X-Amz-Signature=4d4d4d83f7863736b5e4019f8ab64804cb58ca9c29433a858dfeba126e442dab&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OBW4EZW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T022344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2tCEgGdSycXZasr0E%2Fcviek2YchbOQjU9Nh%2B%2FMMhfIAiEAr31Mm4TQV1zaGpYclcWIu3KBo9KSVRDPHPmnNih2K1oq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOgVV1JRuPNfHNIzlCrcA%2FWDb5wBPqp%2BrmKFBAmRoPgCeoeyQmpgZlvq0JTsWWbq3f3K%2BgdnuJwNtFSJ2zZLCCRfua%2BuxC6w1UaK49O7ihPCKWvmBIsxD4eIJdNIJFhafMSX4UFYIehUktVIjCTUF2KhW%2FFq%2B9KYIMmc%2BLaiH2B5JQyjjPipqC9DQ5%2Fns5wTrkP%2B68kaVnRerQGJOKcqzr%2B0OL1605gXCF8l3kLrvWIEt1d3WCyPCyGrDGBAk8Q0c2cfF4RK%2Fk0EHOur%2FNdHIj8GREwwgNv2z%2BI6yKCSVyJRZ4GRDBd6g20%2BzHwHevZh3oWdGur1xB7uULBAU225F7BkGkdZ0566UAyM8H4lfb%2F17AE7fzWnJNrzM0ahrfe2y8tjya1xASx4CQnwJg%2FMD6lYc3DEH7ls3Kn%2BkWp8vTXhujzveIXz%2FazLC9G%2FPMkF2%2Fhkr5O%2Fo5ROenXF2cxnWj6axyKWLzT%2F0migyBU5Vk7S1DcHYe5W26%2FFiNxcF5%2FABUXSw80SQGEoSg1XTxEt1LnWJsBSRRuu3VdsYh41BebMid018n6B8hi%2B4loKI25vYh9YoDavAiTps4ZAP9rfkzXY7VhlGxbEOvGNaAv%2FV7PyDr3GdxkXGbjuftRc9gBltH8l%2FoILQ%2BPXStkgMMfcn8EGOqUBgwjAhn333%2BK%2FxmPOM8je5y1nkK%2B3cVI8z%2FZYUS795DJ0UDmy%2BvW%2Bn3jN4ZxWjZxzjFoAlLplzdCSkHMksfF4W9LGKu6qbWGohPQqIg82H3jz%2Fa%2BLQhFHAbp6Eqi2Ugo6WfeGndny61A%2B5OQ%2FWS3H%2BWtzrdsz7vrqJpUiyEevG%2BLE1SYSNqmJjMq6wxzdbcqv64MLJP51qFOWdyQtjqS1H6N9h8aK&X-Amz-Signature=1dbbddbfda677aa52c67a047930fa94640c0774067bb1c100bc0a18455511e50&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U434ML4R%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T022344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3SKDUw3QVucUiWZvT2dMZQnVNUKxLj1X4cxXUazxSuAiBtpRiVlTWrZgKqRnjHyiU7IRI5uOs8aKHdqyCKKRIO5ir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM6y7yzCPQPl3r4dhwKtwDnFGbL1MO%2FT14Tl15AXEthwHyphFiW33%2BmNP8IazUfOcwXg3ZPJaAtTKjqcaNfp%2Bza7xjfNZ5Tn21siQduOYldbSGzXHlLUpm5yUA29obhDPvIUVZ4YfHj2Ir5BAPtdfDTX3PyHHuXPQtUVlU0Iz%2Fj7xz9spb633%2FfDJRay5BDBvkuA%2BDikkEfHO84D9l%2BcyClGGB0CS3ZA4Q7CXypfFxO3azgAKqkACRYuJY0XhLo4l70E%2FlgApgp8ytU4ustcPKkJQinNWuk%2B0gePF1XsIDa9pfdmGnjE9n6qiyYqfgoIYLcRYEynOw%2FXBxC2h4KyGFi9R9GBitYn%2BGoZtP4tNUggcAtYUvO25Up%2Fle08nt9r1k0r1%2FomfGQ1bk%2B%2FEZms3wrwzV1OSXA9qWqM%2FithYi5k8fop%2BvPrKb%2F6XoMb69SY%2BeSXQvCZQ5UjhktqMrgc9MLywfvMcWAZAYG5h6PzUgwFFh3Xwyss9372vnfr%2Ff1q390KGWjyGLaI3Ms1R6jSMLh78okDhda5HprdidC%2BDOTNnZ7TBeTtH15Ef%2BmN%2Fo%2FmzRFGo3XzztFJRZNiHq1YZ3qcg2QNP7cSuyDj7%2F78hBbr2W6T6SqpwIV0288hR8p9RWMYqE1gp7fk5SkJowktyfwQY6pgH%2B54zBPdVTuNUcar0GH9rm8wxVmP%2BN0I4BjJaJf4Kkt4Ks5gS0JE7%2Bv2DvDlvvtYem7pg8dYj95n1V818KAwS14mKgUlPgMfYTzKf7uPckXjWIENvIC6SwMJYr0cTGA9p99rPw%2B%2BNrlvDI8WnWln8WN%2BjwuLvBzdma7HbRFu7FuJxoXYb7j7zTURgONbbQaVsRSHb5n7U6eRyoeCu1W11AyYR8GOkU&X-Amz-Signature=0c30990a115e1ecd558af0b382d81f52f731324d8471078352eff97e92c666f4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSGFMHOW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T022342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAOvnfJC%2BBNvynsQP5qQ06m%2FR4Zw7mlW9pfjhr2ieTPOAiA8r5rHz4S4KXcP%2FJ%2BF%2FX2sklrO6FWizubsRK355ZE%2BNir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMAVm1qpkQQ9ioBPA5KtwDxlEQA5A3Pu26k%2Fz%2FzQcSR0UwMHfdieZPbFi9OFstZNpDGY%2FuMYIA1%2FdsxMiDXKRzWHGzpDjjwWx0UVBErPMTkcP4fRLjL1Sd381OTLfe%2BDVKr0SjOcPlsuOImyYz%2BwmMHl7RYf6xxrECdYOen5ikMlKZ4Bq0tcfbazm%2FkW1uKNzVryV00I1x8eXZYXjuIxksAF207ozf%2FVA6PNhG1gzqf%2B66zh913m9H0n4KfSAOs2O%2B%2B12Wvfm5EGabYkV1Uaoa5Aymkxx%2FaKO4PCaiWfaBsQu1VZUEaSvzTDZn6%2BIF1EnEwighic%2B2TDTgyOtYMOP4NxtHMrqmLlpKWEOHuk1cnI7YFuk2envEwhMMPDLRsRmZd9sbcjWt5Bda2l8ppbynv7Io8hUpBCoCKmz39%2Fp7mleT0LSs0Rfnofj8NiDUoFNtO%2FNbSJVZiJV1s6h%2ByaPd2ORVVWs5JtFv8gssO%2BnytnLl5CeZ3azSV8G%2BZ96w7u2AVBVjc1%2BwUcDEVqwgW%2BfvmqKt2vdHiG6F%2B4mYQltvv%2F9DNI0N9nKfDroP50atloeikIKNCDZ1c0MADDxLG4sa0D%2FhRIiWNn8BWuevFzKtb23EIGbtc8W60hQFSqQH0mnG6Tr7nRT8r2wab%2FAw0dyfwQY6pgENdpQ%2B2g3ouni2rCIzLTiUq6cLtR%2BqMoXHHwesRjZ0WXAFeJYf24W9rANeQ2qYIMUf4%2B%2BxfhOXY68TRCLAtpHVxA2pDhClaWYgh26WV5I7jRoUnaW20%2BD%2BvW%2BoGGwPJMU%2FfjsbWjbf8UNSYNw5UxrC%2FY%2B3bA6ncvHDApotmc%2BKXnzFgBhMvivFDop3KCFvCg93bS%2F%2FQKH8bJP%2Bv7mft7jaRzgswclv&X-Amz-Signature=3ce90c9265a7646391e0276ec6fa3fe0a4ab21644d979a834169738c0f4815b3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
