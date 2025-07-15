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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOHAECXE%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIGAbM4urr%2Bvm6Dsa4XkNYHG057pYCSOf8v3CAHV58%2By0AiEAyWic4yMP6T4pbByCNVbk6GtKZvY0PBOK2HhZT9ZVkbQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDAIDi2nxdy2XfJKPdircA13LeO3BAolvhh3ffqI%2B3GxBD7UCJVl%2FEuM%2B4OiGnIPvTbk1qImVvDnomVaaiQRFlM5eUY8Miu73fj2QW6DQG6Tbm9cwAzC%2FEASrjkUHjmBOwMbErL3TQ9tT15UQCYV194MVX3%2FJumrHmirRyoy%2FhVYNxmPpGVWQ0kszYfT8EfPzov8WzQPM6Ke4qZ2wkuH3sAuwsiC2uEPav7YXPjzqcIq2EgeRrUFllYuHguUdn9wTxtJGGTwYWLZjN1aWA4UXcNzJWJDPLhAXWKXXfKbuj9awk07UM20Hvq1kroPz2pHH7UZis8K4I0Zn1AhLwTuC8zDgL42ATaHyZ40SX%2BKGIj6YU%2ByNR%2BROvigS%2Bme2EpHbUOSMdvhtKsjcLYp1gZRI5cgfnXaVRWnJqaHmTgDAY5gPeS4HExXATM8AYol3h8%2B22ojxFmSDi4wlth74ADhuyEqAM%2BPr1DfSmIS2MmwbAAe8UMF4I9Gi2OtgwdTvbcFM5qlWcp12uUz%2BuwgbDZ41H7LfS1zl34kLhS1RRKYDmoTUXBNfB%2BGzgbjh2wyt56vqikIKjsJ4yftqk8O1A7GvqpcLTIv6BSidzXozTjVm3r3tpc4go2kOR3BOGYngWBG8ZEdNYPE4kjSs%2FbxbMIul28MGOqUBOW3BxhGBVcjRRhKrhUCjn1tw%2BQ0sWlxI4REUtxfqH%2FPvfR5f%2Fsp4DXYCEFMX1fuq97DUPcvw%2BDF7j%2BCelZ3WYajKWAgALOiwDZhxVZyk%2Fj9SJSpBdCaNNnFrt8GkjnBS31dsMYFFuNTwUpAFztLLaSBK3VtmlfIYrvboQ3sRjjVdC10yHuI2uN95jehj7SlMgK%2Bb1vdMyOHmzqXHO1sQeKxm9iTZ&X-Amz-Signature=65a1141c4666fc612f79d25b7945a84f6d7adb3c0fcf7e2e3c76f386c4b84c3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOHAECXE%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIGAbM4urr%2Bvm6Dsa4XkNYHG057pYCSOf8v3CAHV58%2By0AiEAyWic4yMP6T4pbByCNVbk6GtKZvY0PBOK2HhZT9ZVkbQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDAIDi2nxdy2XfJKPdircA13LeO3BAolvhh3ffqI%2B3GxBD7UCJVl%2FEuM%2B4OiGnIPvTbk1qImVvDnomVaaiQRFlM5eUY8Miu73fj2QW6DQG6Tbm9cwAzC%2FEASrjkUHjmBOwMbErL3TQ9tT15UQCYV194MVX3%2FJumrHmirRyoy%2FhVYNxmPpGVWQ0kszYfT8EfPzov8WzQPM6Ke4qZ2wkuH3sAuwsiC2uEPav7YXPjzqcIq2EgeRrUFllYuHguUdn9wTxtJGGTwYWLZjN1aWA4UXcNzJWJDPLhAXWKXXfKbuj9awk07UM20Hvq1kroPz2pHH7UZis8K4I0Zn1AhLwTuC8zDgL42ATaHyZ40SX%2BKGIj6YU%2ByNR%2BROvigS%2Bme2EpHbUOSMdvhtKsjcLYp1gZRI5cgfnXaVRWnJqaHmTgDAY5gPeS4HExXATM8AYol3h8%2B22ojxFmSDi4wlth74ADhuyEqAM%2BPr1DfSmIS2MmwbAAe8UMF4I9Gi2OtgwdTvbcFM5qlWcp12uUz%2BuwgbDZ41H7LfS1zl34kLhS1RRKYDmoTUXBNfB%2BGzgbjh2wyt56vqikIKjsJ4yftqk8O1A7GvqpcLTIv6BSidzXozTjVm3r3tpc4go2kOR3BOGYngWBG8ZEdNYPE4kjSs%2FbxbMIul28MGOqUBOW3BxhGBVcjRRhKrhUCjn1tw%2BQ0sWlxI4REUtxfqH%2FPvfR5f%2Fsp4DXYCEFMX1fuq97DUPcvw%2BDF7j%2BCelZ3WYajKWAgALOiwDZhxVZyk%2Fj9SJSpBdCaNNnFrt8GkjnBS31dsMYFFuNTwUpAFztLLaSBK3VtmlfIYrvboQ3sRjjVdC10yHuI2uN95jehj7SlMgK%2Bb1vdMyOHmzqXHO1sQeKxm9iTZ&X-Amz-Signature=102e9dc8a98c2826bdd56baf997b02600acf9d6c9940f0423c246d93023c5429&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOHAECXE%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIGAbM4urr%2Bvm6Dsa4XkNYHG057pYCSOf8v3CAHV58%2By0AiEAyWic4yMP6T4pbByCNVbk6GtKZvY0PBOK2HhZT9ZVkbQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDAIDi2nxdy2XfJKPdircA13LeO3BAolvhh3ffqI%2B3GxBD7UCJVl%2FEuM%2B4OiGnIPvTbk1qImVvDnomVaaiQRFlM5eUY8Miu73fj2QW6DQG6Tbm9cwAzC%2FEASrjkUHjmBOwMbErL3TQ9tT15UQCYV194MVX3%2FJumrHmirRyoy%2FhVYNxmPpGVWQ0kszYfT8EfPzov8WzQPM6Ke4qZ2wkuH3sAuwsiC2uEPav7YXPjzqcIq2EgeRrUFllYuHguUdn9wTxtJGGTwYWLZjN1aWA4UXcNzJWJDPLhAXWKXXfKbuj9awk07UM20Hvq1kroPz2pHH7UZis8K4I0Zn1AhLwTuC8zDgL42ATaHyZ40SX%2BKGIj6YU%2ByNR%2BROvigS%2Bme2EpHbUOSMdvhtKsjcLYp1gZRI5cgfnXaVRWnJqaHmTgDAY5gPeS4HExXATM8AYol3h8%2B22ojxFmSDi4wlth74ADhuyEqAM%2BPr1DfSmIS2MmwbAAe8UMF4I9Gi2OtgwdTvbcFM5qlWcp12uUz%2BuwgbDZ41H7LfS1zl34kLhS1RRKYDmoTUXBNfB%2BGzgbjh2wyt56vqikIKjsJ4yftqk8O1A7GvqpcLTIv6BSidzXozTjVm3r3tpc4go2kOR3BOGYngWBG8ZEdNYPE4kjSs%2FbxbMIul28MGOqUBOW3BxhGBVcjRRhKrhUCjn1tw%2BQ0sWlxI4REUtxfqH%2FPvfR5f%2Fsp4DXYCEFMX1fuq97DUPcvw%2BDF7j%2BCelZ3WYajKWAgALOiwDZhxVZyk%2Fj9SJSpBdCaNNnFrt8GkjnBS31dsMYFFuNTwUpAFztLLaSBK3VtmlfIYrvboQ3sRjjVdC10yHuI2uN95jehj7SlMgK%2Bb1vdMyOHmzqXHO1sQeKxm9iTZ&X-Amz-Signature=f2eae8917aa8192e2a91a609e0de176eb6c8d939890b1cdd8e0dd42fa08bf038&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZB3IVA5%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIAd5ZO0N4w2SkgDR1ZvS3%2Bto%2BCzJw2PSWgZVpcKi31NpAiEApsQ8hX6iEPPIYNRSXOhfaGJkE%2FFcKuG8PcqXl%2F3tVrkq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDNzCFzx0YsM%2BmVohtircAwNOSe73JSRcWhnGp0avMEVtlYdsfp8oEN8ivTWZR9t4EGpTDqDqqzSJ%2BugoTmLMHT9QTSKp9J64JbYp%2FTp5oVCQh%2FMmCRd4UvDjKxH%2BhQaljRV2h0gDj6l1UzZxmvhiSaDMZtmegZskWNvRnqv2rJgr0B%2BVZvAsB9gpqSNfVyJ4BH5vKQR1r0BzSOG2IdJG2%2FwusOkFtXcEficGAGTGCbc%2BxanHwkKZXbXpnCagsqDET2MIKwu5M4DMcQdK6LP5Hl4Fz0MbJxclirkGQ245IPsM1KnwIib%2BvoFOM9eBo0zphXY7s0nQtUTwSvg64qQ56XLaqDSBZeixJ7tEVALZRdUIC1Xw4ASes0uiH0tAdcAnN8izKadLOnKsHXbX%2BfpSoX0v4wn4kzqoDjpyL0ByjTtJEpZt49s%2Bvug0%2BPxkYlko7oXaJL%2FXTolMOvr5O4FGZr9NGs6veXenqQacZ864apOvq%2BdDMcd0WA0gnHXXbLLXlNSEKse%2BnXV%2B13rPVH2psQoPzgUr5J3wsUHYyxraMy%2B6jVaumN6Lof2wv4wFQbTX3TKwP%2BJAvOa93zFelaefabUtpCCmS1eFygo93V6I%2FITQkZ4uWx%2FhMd8sAueBtul6KZk40At5elj%2Fph1tMPqk28MGOqUBoFxsMOkuoPrj3KqMiOwQWPSCVe4puX1AZG3ebDLI1zt0zd1qwdchNg3dd9Xv7aMRKRTSkeBKPw3i2d2lPYgXylQ6%2BFACGx%2BkjyyLVXHwkZpnA2N7LDyd3VYcEZ7Sbn5S6YfF%2FYX1EH5hkixC63NFnve7AQTnQCth%2BHtkulpw69%2FpNH0LaOUDBDmqjfIONE14u9gCcVBo3IEz%2FHte6rDwoAJ5vC2H&X-Amz-Signature=ce8ee5d43188900f470895495d36aa336da41fbc94c77d689ea2b2576b79502b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QXO4VRA%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQC8unWNbsHfQ3S2X1Ijtw4tdYysO9Vz1WP3tJp2E69KJwIgcc2XjtyZpQ4MtLYOcXqbxUdLaQgn9yjp7%2Bmf7XJ8WfIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDGW517JR2ilz1s296ircA9IbDx9a38%2FFkiil9IKMrEO1Ge9JVyzDL%2FNv7eGKfCbviubwo7R96XweMo%2FsS6ph7E62cok9ipky8sLmGvlS1azosDLprIQw8RDvlQNO2tCXBEiYG7JA8dWa2DO5iJl0Z1kYQkyvm3sjF4cQmImCwER%2FnILatNUr6WcfwB63NB3Q08FyNIYe%2BSApkb%2Bn%2BcCrXXICiX6QzBmKoWbXmDR0DgTxUb6ecG%2BrV69fd%2FltcvsbDAYagsxC9FQn03ne9rvm001bcS17Pwu7byyhslFGV3ECInFVw%2BNTEImc2G5JtlBQCyWUdeMaxhEn9t%2F4EVfGp9mKtFZw2nNBqNmCCDzx3QwTOZ4i7QiS5TGx54%2Fe%2FLM0RrRpqQVUsj1dcqPt3P6N7NUdsb3Z1wU08t9u13KiUrs7dNZiZzhkDX024m7vKyu9jH6r9Brmq%2Bmf0djSNInrTz2rHiGcK4uKG8k%2Bwvqohh%2FCAI8Z%2BwuJQuJ6U1myoFC96gt6dZvYcKvbtt5eOmMVDeBnaIWdiwVH%2BxBmSLIK%2FfKvziXW7QL6MmYWbrpI79K5PCz3iCME9ZpGDAMkb0TQHUk7EgqZuhzvrStdglFDKrEUFm2MI0bdn4L5PJ%2F7wmsSDxHDbUPASZXIZ8KSMNuk28MGOqUB8h%2BT4KuaHrJ080DF3RbYWF0%2Bo8syT8Bj6qSuiR%2Fd5ksCoJSULTahDF2iZQYoiR%2BIlzxgEiPeXkUEEf%2FjpV%2FyEhw52GKW47BYNNjOYI3wRvD10AFbAFrDVkTvNEZXdkmxajolSf9VwcBUAcH8nZdGzPcFvaA2N61VB09ztZduGzXulWkZOWAJ6T%2FZlrLs0evK7s6dTa0hYNG4WgjPAiuJ2hheMRLQ&X-Amz-Signature=d033c3f7cb8bf5be0c6dfe9545ff1a02b6a5d3df58bf176f95e791e2f5a90090&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOHAECXE%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIGAbM4urr%2Bvm6Dsa4XkNYHG057pYCSOf8v3CAHV58%2By0AiEAyWic4yMP6T4pbByCNVbk6GtKZvY0PBOK2HhZT9ZVkbQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDAIDi2nxdy2XfJKPdircA13LeO3BAolvhh3ffqI%2B3GxBD7UCJVl%2FEuM%2B4OiGnIPvTbk1qImVvDnomVaaiQRFlM5eUY8Miu73fj2QW6DQG6Tbm9cwAzC%2FEASrjkUHjmBOwMbErL3TQ9tT15UQCYV194MVX3%2FJumrHmirRyoy%2FhVYNxmPpGVWQ0kszYfT8EfPzov8WzQPM6Ke4qZ2wkuH3sAuwsiC2uEPav7YXPjzqcIq2EgeRrUFllYuHguUdn9wTxtJGGTwYWLZjN1aWA4UXcNzJWJDPLhAXWKXXfKbuj9awk07UM20Hvq1kroPz2pHH7UZis8K4I0Zn1AhLwTuC8zDgL42ATaHyZ40SX%2BKGIj6YU%2ByNR%2BROvigS%2Bme2EpHbUOSMdvhtKsjcLYp1gZRI5cgfnXaVRWnJqaHmTgDAY5gPeS4HExXATM8AYol3h8%2B22ojxFmSDi4wlth74ADhuyEqAM%2BPr1DfSmIS2MmwbAAe8UMF4I9Gi2OtgwdTvbcFM5qlWcp12uUz%2BuwgbDZ41H7LfS1zl34kLhS1RRKYDmoTUXBNfB%2BGzgbjh2wyt56vqikIKjsJ4yftqk8O1A7GvqpcLTIv6BSidzXozTjVm3r3tpc4go2kOR3BOGYngWBG8ZEdNYPE4kjSs%2FbxbMIul28MGOqUBOW3BxhGBVcjRRhKrhUCjn1tw%2BQ0sWlxI4REUtxfqH%2FPvfR5f%2Fsp4DXYCEFMX1fuq97DUPcvw%2BDF7j%2BCelZ3WYajKWAgALOiwDZhxVZyk%2Fj9SJSpBdCaNNnFrt8GkjnBS31dsMYFFuNTwUpAFztLLaSBK3VtmlfIYrvboQ3sRjjVdC10yHuI2uN95jehj7SlMgK%2Bb1vdMyOHmzqXHO1sQeKxm9iTZ&X-Amz-Signature=7559b07cdf28cdf095509196a1bc31a1b47833029df12e564971daa6f254f0dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
