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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W6URB33%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T190136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQQkElEll%2F7CU09g1rgTqJ2DukaEsDpnnJ8k8RZt5CjwIgUuFn7LHIKaVObW7iC8hubyUNDZIyQal6zPnmQSe9hngq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAIK8WlzccQKck32JircAy5nPT3fXKSZ1t9TexRdqvOTJwebktzF5AK%2FME9Pmz7XTj71iDcJsuozxFzPAIipz46vFZdEXLfm%2FO2DmStNqPsIGuJaNiaweCIRaXWn%2FVbApf6EweGX8wzh6%2FjZNFb%2FM5HZ21QOPtgqIqjx5MOx2BSgSSaKByfxAUVRtd8EalaSIcQUr4FyV9vKyxzUF%2BlNcuacg9p%2BdaV7sTL0WekP5OC0w14F8RPg0yPTjAZDQffU4L1O23nhQ5Tu0BA1aU3ed0HxPkTwhRca1QXn12MOPmC9iMc%2FUMWL8f%2BNu5eeO6STOiATs4Zp8Y0jjouxdQpGFrtSinDJ1XoY9XMsz903p6z%2FaO%2Bxi7aGfbu3n7wjjoXlnw7%2FAYMEaoYj03S7o5eevHavAc%2BWoih4kcwleYvXbRNDHefsVLLu2%2FiK2cuaZoM8FkL1WYP4PWOy9GO1BYOCjfe2iqHTKaRdbK9h1jGZUazPaJ%2BP3vxgRahWvOSGX67DzcPsUgZmNhWFQVeEUYIKmtQHncAl9tr%2FuAT7589mUhEeCZNS%2BwNgFHOWK0y65l1DhU%2BdkcDD8zA0wCBX5yl4JdqYCA%2BJdDkwcxUFpInPn2UzcWKZ4KpPEtnfKdeindufjbVM2xADNC2r8cq%2BMPf3%2F78GOqUBxTmBxJj2LImU2ddisBx0OZKCwhhdrr2q5vFv%2FKsK1YF%2F5chTEGNuowdMlel8RIzYEJQHQAlEHlIdI%2Fjry2caGr7VkFi93Iz6xGGvTW6oM3HdHKvKRv278tmlQRlgpMo1zgAcx9wK6jA8rQei2iEH1KHwAwUgA6l6es%2BKiWo622oGw7PMRxaLAOd6VysYNV2ikfXCHU1H8hwpsTVGzs107AXBlZGX&X-Amz-Signature=b0ae04baad57227a8ea63baa58cdb5e23d86fc6207d43316784fbb695051bc21&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W6URB33%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T190136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQQkElEll%2F7CU09g1rgTqJ2DukaEsDpnnJ8k8RZt5CjwIgUuFn7LHIKaVObW7iC8hubyUNDZIyQal6zPnmQSe9hngq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAIK8WlzccQKck32JircAy5nPT3fXKSZ1t9TexRdqvOTJwebktzF5AK%2FME9Pmz7XTj71iDcJsuozxFzPAIipz46vFZdEXLfm%2FO2DmStNqPsIGuJaNiaweCIRaXWn%2FVbApf6EweGX8wzh6%2FjZNFb%2FM5HZ21QOPtgqIqjx5MOx2BSgSSaKByfxAUVRtd8EalaSIcQUr4FyV9vKyxzUF%2BlNcuacg9p%2BdaV7sTL0WekP5OC0w14F8RPg0yPTjAZDQffU4L1O23nhQ5Tu0BA1aU3ed0HxPkTwhRca1QXn12MOPmC9iMc%2FUMWL8f%2BNu5eeO6STOiATs4Zp8Y0jjouxdQpGFrtSinDJ1XoY9XMsz903p6z%2FaO%2Bxi7aGfbu3n7wjjoXlnw7%2FAYMEaoYj03S7o5eevHavAc%2BWoih4kcwleYvXbRNDHefsVLLu2%2FiK2cuaZoM8FkL1WYP4PWOy9GO1BYOCjfe2iqHTKaRdbK9h1jGZUazPaJ%2BP3vxgRahWvOSGX67DzcPsUgZmNhWFQVeEUYIKmtQHncAl9tr%2FuAT7589mUhEeCZNS%2BwNgFHOWK0y65l1DhU%2BdkcDD8zA0wCBX5yl4JdqYCA%2BJdDkwcxUFpInPn2UzcWKZ4KpPEtnfKdeindufjbVM2xADNC2r8cq%2BMPf3%2F78GOqUBxTmBxJj2LImU2ddisBx0OZKCwhhdrr2q5vFv%2FKsK1YF%2F5chTEGNuowdMlel8RIzYEJQHQAlEHlIdI%2Fjry2caGr7VkFi93Iz6xGGvTW6oM3HdHKvKRv278tmlQRlgpMo1zgAcx9wK6jA8rQei2iEH1KHwAwUgA6l6es%2BKiWo622oGw7PMRxaLAOd6VysYNV2ikfXCHU1H8hwpsTVGzs107AXBlZGX&X-Amz-Signature=e20a2faf267b27c7ddf3631fbb5796ffb46d605af0c51b34088b4991f7519f19&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIB5CCTC%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T190137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMzgoCWfqLGVRaA1qkFBeUaXQehh6Dk%2BMezu1Veqw%2F9gIgBeENhzd4u1PKkUAiNZfsTKLVJDB0f%2BdpeWGLZWi9Rjkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDL2N%2FGw%2FvThgeJHBbSrcA11DRIIG9gA42SaLxvJOXJP2DK9LAyATWvExdIUc0mHz5n%2F1cUHScoo5WQ34nyYMCLlVPnaP2U13uRRgVB5WSfm7wQ4lHa5iQo4oYiUTn%2BMl0hn2BX8txVUxsq87dgfc6Pgd7e4w6Y6dACsBeeOP4uBrCpaK%2B0gAyK4M6OCc4tGqFl0CCBg2LjWf7ZS7j%2Fmuz5KpTrI7B%2FHyGiWJjUptylsUgic%2F5ChRmqEswhLOgrJ9eAKp8uGYkE6u4EGSRnYszf7C%2FQwEa8jre1VIexMTkMiTQ9PfPpwWKdm5bUbUbyjB6grtK%2FjGgrHUMn4skWZtujU7YypcQv1TUyC1icvKgEOi%2BFXFrYCDEzjChPfYpRIaUAAWe%2FTWKmNZc7FntwH9CZDz5NaMiY5HJsVcJyjEq4cA4pTFP3zzqFmKtA9fux0RAu9jaN0urvNya57Dt9%2BUe6YkGfxisXrMXwdaz5jm8hspIpxdsDZYHXPmslkTHSLBO0Fb4k0E%2BnlCx2xsUyLF8NFwVkr7oxvH9ovgPfFXoPUuN%2BSJz77T3F8lTY7Hyv9C6rdbTab836EFdpOP%2B8WGQIQSusDVECDqXs9G4JtQJnmyfnki%2Fur33WK%2BgQymOHp%2FkKL46t2Ncjpo1WtMMLb3%2F78GOqUBzCcXrtHA43jqDCpJfeUhiu3a1eXufphDL%2BpG1qxSX9r%2BuAXIqi%2BEfPqHjuCQsBcpSp6SP4MX5jF1h%2FBZ6K4fd60GdrpBtXY67grv8hh%2FIH24AM1tnUy2dO5xeOh6XhTnmZqbO9nE9d7fmSZAR7XHOBRQSKGVbUpQMCCOYLPdm1STEH2j3%2BFqBfeNNO5nTGD1Og4U2WRJstEJOH4CO0wBzby4J7LU&X-Amz-Signature=884b34559a939cbab26c4ea3e9156f94b520105ef057a6f59ac74df1eb01b9f2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOOTDA5G%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T190137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfewVkCEQUi1vOSFfmya5S906FQRUuSsY3VvwRPG2DCgIgCzjcM8PHT0okF2Pwuax6JbxwyKcOjTkIaP%2BDcKnLY3Mq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDKnRe6FIAyAkwp6WCyrcA3oOhWUbEgxaSW8tNYeR3szrQKIztVo9rqd2RrcxbBQpv03i793ZuOUfQSVlUG9rwVUJUwAYJcqsvLFFNOpFexHYz5e%2BPJf2qL6MemrL4LW1nhM5bEzvBlmU387%2FuCWcMPm%2BGum%2F0CuyMpKdGQxFumiqkIArj9gidL8RnZUwz5if3lyZhH3%2B10p9wcvTpji7pEqix9CDw0M7%2BdTQqPCtxqvdF00avJo3LNnV70eI3eHO6WnrzlSGxCZELmU2DoRmuAAoQe5q%2FpbinR%2BhbdSgj%2FrJrlkNhhSmZdKCE%2FmL0vtY%2B41xw3%2Bsg5AEb4WLyPnxKJ%2FsF4DPkxKasmSn5w0AHinWsRuHjQRHen5FODmOPLrPVdsv7yZDW07GFn4RDB7D%2BHpkPojcD75XosgRnd5HKB3ov9BdGCwWAdgLFgraXxLWHGiFXx%2FZH8Sa6FVSuB6PUb8raqg2nUtwZ5Hf71YDLvJHwtWvNUQUcfGExTLysiPQnegVhHQOYeIuQLnVv9qQVvzjTbNK7Sfa%2B05snjzQmMYeCAO4%2ButFojKp0ahOwOIrEq8zD%2FbhV1%2BF6VPWArFTAaPRzmkQfgPdFaI0MdiPrRXSkK4JHte8DZqUUnzgCrwvpMRcPoX6reM9FAgGMKP3%2F78GOqUB1%2Fi89E5Ud2GnnD2o6eMvtD8BfXece4FM0ITBQWI4DKZRzjyJJwJLb3tA8b1im8jYa1aO3n9f4jzd73a32RBpNzR56uas2nGrtkUqYbJSs0W%2BL%2FE4DTGd%2BvO5FHbcarxYi%2FlYeSLmggSjhgjKNdv4aYDyFRbHFt0C3E5mQb4mJaJM8oJi8OEZevc%2Fhx6W5z5h%2BwRQi3iSXOD4cITcP82qOcw6bzzc&X-Amz-Signature=98bdd5ee461486bef493dddd0aee3733d6936e87a755faa62023c182d936862d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W6URB33%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T190136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQQkElEll%2F7CU09g1rgTqJ2DukaEsDpnnJ8k8RZt5CjwIgUuFn7LHIKaVObW7iC8hubyUNDZIyQal6zPnmQSe9hngq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAIK8WlzccQKck32JircAy5nPT3fXKSZ1t9TexRdqvOTJwebktzF5AK%2FME9Pmz7XTj71iDcJsuozxFzPAIipz46vFZdEXLfm%2FO2DmStNqPsIGuJaNiaweCIRaXWn%2FVbApf6EweGX8wzh6%2FjZNFb%2FM5HZ21QOPtgqIqjx5MOx2BSgSSaKByfxAUVRtd8EalaSIcQUr4FyV9vKyxzUF%2BlNcuacg9p%2BdaV7sTL0WekP5OC0w14F8RPg0yPTjAZDQffU4L1O23nhQ5Tu0BA1aU3ed0HxPkTwhRca1QXn12MOPmC9iMc%2FUMWL8f%2BNu5eeO6STOiATs4Zp8Y0jjouxdQpGFrtSinDJ1XoY9XMsz903p6z%2FaO%2Bxi7aGfbu3n7wjjoXlnw7%2FAYMEaoYj03S7o5eevHavAc%2BWoih4kcwleYvXbRNDHefsVLLu2%2FiK2cuaZoM8FkL1WYP4PWOy9GO1BYOCjfe2iqHTKaRdbK9h1jGZUazPaJ%2BP3vxgRahWvOSGX67DzcPsUgZmNhWFQVeEUYIKmtQHncAl9tr%2FuAT7589mUhEeCZNS%2BwNgFHOWK0y65l1DhU%2BdkcDD8zA0wCBX5yl4JdqYCA%2BJdDkwcxUFpInPn2UzcWKZ4KpPEtnfKdeindufjbVM2xADNC2r8cq%2BMPf3%2F78GOqUBxTmBxJj2LImU2ddisBx0OZKCwhhdrr2q5vFv%2FKsK1YF%2F5chTEGNuowdMlel8RIzYEJQHQAlEHlIdI%2Fjry2caGr7VkFi93Iz6xGGvTW6oM3HdHKvKRv278tmlQRlgpMo1zgAcx9wK6jA8rQei2iEH1KHwAwUgA6l6es%2BKiWo622oGw7PMRxaLAOd6VysYNV2ikfXCHU1H8hwpsTVGzs107AXBlZGX&X-Amz-Signature=1ca2945f69fa2695485135ecf5900c6060c61d5b99f22ce15a084d82b599a07a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
