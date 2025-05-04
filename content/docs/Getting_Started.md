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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIRXTVPQ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIBpTWjW4sOBeyvQqp3DGno4Frd9jCfLVcYL5OIty%2F2DAAiEAq6Dnm6NK%2FOqTK7PnPJtH0XoTN3DCG8rMUNH%2FMkxAqV0q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDEpnlp0t%2Fmo2z0o0QCrcA84ilEa3HoZwcmLPF19f5szmKfvbLzb7k0dYc3Pjc%2FN%2BvSFJxDDzuJJZGx08jiwlwrTkWfqgsGAqNuM%2Fstjk33Nl8njZDShUrM47mVvmfeBOyHd5kX3TcjRi5oIo8hWD%2BPIzA4Pw6Nr50ZaQR10ZJtZNNNV7StniZA%2B6dWoBCdYVP2dIE5nOYU%2FdcLG2JflLwwPgmlKQdzrqgwif9SP908rdfWvAR3qqNPI0cE9er5def9FJCwhXpW6wNNLVX7Te54JBUcSsmWV1KADYxqZmbfn1xCifAemXO0zbpNtgwQEo3ox7zYPpqv0PLu3%2B9LRJgAcHV4jyelIscff2YBdlnB6TQw%2Fgkkoes9QOVCjowZf2n1k%2F0wSg12vXT4%2BLlI4kmD%2FHHRw%2BcUSeWge%2B%2BBoehYU4whD5A8Ta24ThP%2BOoSUnwUE83aEcRPylik4dw%2FsxKvjYpWWKpTupd3gmxwd4waNyhUr5O2lCPb0eP%2BjC75CW8VitK3YgQLSOahBk%2BqpxvlGDADkQH9Vca1MicdSZIfp%2FOIixEZL8V%2F4X3AUhMo30GyhqxSOZj25E9rKyXBLw5yzy8ENvI0UQ6BpqXRkwSKh6fjkr1B%2BhkVRLl3WcdV0boQWhE4ZZO3LAYsMr5MOyI3sAGOqUBkbVw3GVEZYLgB%2BsQT2L2o38ASI7bQxaX6DccowjsotSlPxfWXisXhMQnUvN%2B65Vmr4jG75g71Fe3Av%2B6GXsMt6ZRhDpLcFt6psZwGEDw%2Fq0TQj2kVcTxdQdRiIapCkh74I0FfuJ9YWlBavRllZPD2bJb1ijDLVXBTII1PrMeAJRi7bYw0w4q4r8g0TDxx%2BOxjd13gUq4V0dH%2BvXgGe4LaVzeY2yu&X-Amz-Signature=b3999080ef7e806592669dbb5d83451cfcdf63cacc7f2402f1323e6111de8e80&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIRXTVPQ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIBpTWjW4sOBeyvQqp3DGno4Frd9jCfLVcYL5OIty%2F2DAAiEAq6Dnm6NK%2FOqTK7PnPJtH0XoTN3DCG8rMUNH%2FMkxAqV0q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDEpnlp0t%2Fmo2z0o0QCrcA84ilEa3HoZwcmLPF19f5szmKfvbLzb7k0dYc3Pjc%2FN%2BvSFJxDDzuJJZGx08jiwlwrTkWfqgsGAqNuM%2Fstjk33Nl8njZDShUrM47mVvmfeBOyHd5kX3TcjRi5oIo8hWD%2BPIzA4Pw6Nr50ZaQR10ZJtZNNNV7StniZA%2B6dWoBCdYVP2dIE5nOYU%2FdcLG2JflLwwPgmlKQdzrqgwif9SP908rdfWvAR3qqNPI0cE9er5def9FJCwhXpW6wNNLVX7Te54JBUcSsmWV1KADYxqZmbfn1xCifAemXO0zbpNtgwQEo3ox7zYPpqv0PLu3%2B9LRJgAcHV4jyelIscff2YBdlnB6TQw%2Fgkkoes9QOVCjowZf2n1k%2F0wSg12vXT4%2BLlI4kmD%2FHHRw%2BcUSeWge%2B%2BBoehYU4whD5A8Ta24ThP%2BOoSUnwUE83aEcRPylik4dw%2FsxKvjYpWWKpTupd3gmxwd4waNyhUr5O2lCPb0eP%2BjC75CW8VitK3YgQLSOahBk%2BqpxvlGDADkQH9Vca1MicdSZIfp%2FOIixEZL8V%2F4X3AUhMo30GyhqxSOZj25E9rKyXBLw5yzy8ENvI0UQ6BpqXRkwSKh6fjkr1B%2BhkVRLl3WcdV0boQWhE4ZZO3LAYsMr5MOyI3sAGOqUBkbVw3GVEZYLgB%2BsQT2L2o38ASI7bQxaX6DccowjsotSlPxfWXisXhMQnUvN%2B65Vmr4jG75g71Fe3Av%2B6GXsMt6ZRhDpLcFt6psZwGEDw%2Fq0TQj2kVcTxdQdRiIapCkh74I0FfuJ9YWlBavRllZPD2bJb1ijDLVXBTII1PrMeAJRi7bYw0w4q4r8g0TDxx%2BOxjd13gUq4V0dH%2BvXgGe4LaVzeY2yu&X-Amz-Signature=bf5ec35d10b314e2b3bad0c94654bfd93ec84bbd45d7d193f17906398007d70c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIRXTVPQ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIBpTWjW4sOBeyvQqp3DGno4Frd9jCfLVcYL5OIty%2F2DAAiEAq6Dnm6NK%2FOqTK7PnPJtH0XoTN3DCG8rMUNH%2FMkxAqV0q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDEpnlp0t%2Fmo2z0o0QCrcA84ilEa3HoZwcmLPF19f5szmKfvbLzb7k0dYc3Pjc%2FN%2BvSFJxDDzuJJZGx08jiwlwrTkWfqgsGAqNuM%2Fstjk33Nl8njZDShUrM47mVvmfeBOyHd5kX3TcjRi5oIo8hWD%2BPIzA4Pw6Nr50ZaQR10ZJtZNNNV7StniZA%2B6dWoBCdYVP2dIE5nOYU%2FdcLG2JflLwwPgmlKQdzrqgwif9SP908rdfWvAR3qqNPI0cE9er5def9FJCwhXpW6wNNLVX7Te54JBUcSsmWV1KADYxqZmbfn1xCifAemXO0zbpNtgwQEo3ox7zYPpqv0PLu3%2B9LRJgAcHV4jyelIscff2YBdlnB6TQw%2Fgkkoes9QOVCjowZf2n1k%2F0wSg12vXT4%2BLlI4kmD%2FHHRw%2BcUSeWge%2B%2BBoehYU4whD5A8Ta24ThP%2BOoSUnwUE83aEcRPylik4dw%2FsxKvjYpWWKpTupd3gmxwd4waNyhUr5O2lCPb0eP%2BjC75CW8VitK3YgQLSOahBk%2BqpxvlGDADkQH9Vca1MicdSZIfp%2FOIixEZL8V%2F4X3AUhMo30GyhqxSOZj25E9rKyXBLw5yzy8ENvI0UQ6BpqXRkwSKh6fjkr1B%2BhkVRLl3WcdV0boQWhE4ZZO3LAYsMr5MOyI3sAGOqUBkbVw3GVEZYLgB%2BsQT2L2o38ASI7bQxaX6DccowjsotSlPxfWXisXhMQnUvN%2B65Vmr4jG75g71Fe3Av%2B6GXsMt6ZRhDpLcFt6psZwGEDw%2Fq0TQj2kVcTxdQdRiIapCkh74I0FfuJ9YWlBavRllZPD2bJb1ijDLVXBTII1PrMeAJRi7bYw0w4q4r8g0TDxx%2BOxjd13gUq4V0dH%2BvXgGe4LaVzeY2yu&X-Amz-Signature=d950206c1af56dc19c37a97ff248211c63e508ab26928847de3177df1a4d9f3a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYN7DGH2%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIEh8TvZfjEjXOBrWNP7r1wX7hPFuA0gwSYay1aZVoGoGAiEAmZCP7bsyE6ufuZmDksHx0205%2BcisdrP4Y2s9%2F1%2B0tfkq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDCbYzpJPcMDPRtlBNCrcA92urIx3IeGXmF9iTzsUG%2Fsyp0PX0NUIE98Y4eYEBeAm8s5ZN4nwW5fjXcoraqP3QfNvoaoNFe5PlaXQzSY1CznfTDrW9NO%2BvgiFJL52kRjKEbUC82TJIIJST5NO8VpRLtvocGkmPIgXZahYBeezSP8K2BWO49b3Yg%2Fh1QOlr9V%2BW71mcFGehCHrYf6iZxxl5KO2S3SYTWw2Zq%2FZ%2Fla8%2BtCyCb1yni%2BlN2Aeq7wI7W17G5nnKYSSBi5mDG9dyrWEN4yd4X77wFIEDzq0nYFwYkBnV0z%2BDj41mnBT%2B4kRe2pXDnz4cADMOCPL1kT9jJVeN0dBiF5V9FYfk5JnyGM5fhvDjPTRjmuxiGP50LhaW593zqcseubQIM5MDecr68qxVF%2B8f0%2BvXBIPkZgQmvSu7dvK39rDbRu06ys33FxmUDcqWD2IDUBvVitiSIk%2BVomAIOK%2BByYbe5pYYURCS0kKG%2FJcFch00lpiXRtMnmNmhj2gA3bVqUpkoCNKZewpIMQK0d3F%2BVALxkfkvocsc2Y5KGh%2FlN7MczDXnaaBB4%2F1U9B%2B7Ooum0PEWFVmRUrQswOZF2PVfmqgLhFOynocpxT1jDGJO0KSodN0DEgPZw4HlGOfGMsL372hhu%2BPNO7fMIiI3sAGOqUBbLWAXLAtNj0XbcTwxRoCzaXCraUDruesCmBWc7sYZ7Jp5A7DplNUHrYtWRVptPE73MJlUDjTDfMlZePt6wUEstTT7kTJVbscefnQi0yhddRvzFfIsA2Jfhc3c9qnuXKyid5U5iIy%2FrA9bTDaCyNL%2BrcMuAZDhrKU5Q0xjOSJdhH4lGAY8a%2BL4UVhaDnQaq5k3NeUXDL5yHtxvsZrQajPhrDw5T%2BG&X-Amz-Signature=04c5a9695c37810003b8b10fc8ddf3d7603837d9630bc0729ad3b7ef4cc299ba&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635U2QJRY%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCskdf%2Fga5myHCamjuB%2FT7crNOs4136%2Boedd35C5gC5TgIgM%2BCBfxDwcbdpdDvdzXyWO4%2B6HUb4YAbNd970g2xqSgkq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDGpzYwvn%2F1g0YjqDoyrcAwObfNzyu%2F0fKqR2x5UXfHkhhii2eBvCAThVVS39tf8PaDI4OE6d%2BQe9KOUmEXgizpHRoyz04WZEKC6jlC%2FJY4HefrQzmc5FXAhGsDLpQRGzHeRoeXuDHH7tE%2F4KGy%2BK5lo1rxwT8pgStEVwCxU8QNGT81detSEMfbhIwcQ2TquVpSUNUvSWyZVU4qSBz8H7led8aqja8bh0s0eIfQ%2FXg4K7W9pXrR67DNpphrWZVnHuFxEq%2FlGhn%2BZQz%2FZtpm52kFuU92eB81UGQ2Z5qPzuA8vdUNl0TsUdx7a8glbtnesZaU5fgpFlYSvWp56Dtsz%2FK9O%2FMs6SV0%2B5zjUD1TENVDnkPGcBJOV5wfJNwJIx%2B3N2vuFwDiRR0I3w2UTsDWF8XRygX0AefDHoEjlvE9J3AOYdVfhb9Q9tJG4jkJC9UnluXwkycCKRKpdTCmr6Fa8pfg8teLx8PAIHTVmfOTvnlf63xkrTj1adhVn%2FhNyF8BIMFmijcY83jvjNWTkP713U3%2BpngK8PlHEl2QEqQDzka8ZDM%2BvnzOve5E3IS%2FO7ITQCbfo%2BgZLgQkowaXtd8zhmZiuPB7CPFNJD5vgi%2FVY0FkQv55jNc3%2Bd7wsj%2FkKHWqrqLH%2F4gPL6Cvhu3vIqMM6I3sAGOqUBo8M%2FG6fAU3dLGd%2BhZnVB25mj68q0AFDyjKcqZVQGwf8q9OrcfKw6ekwGmi2ScSmDPnCgM7SlbS%2FxVf470QRS9sXS%2FWiV2P%2BUFE3OETlkhDSLwVldCPRlKSS%2F539R3emB1P7VghlDNO9oFM%2BQbj3rhacP21ZMppoK%2Bu2aZRFmENgYqTPGVpU%2B59rIgrT38PA3aVTNK263nKknJ%2Fs%2BOyDoLCbes2Il&X-Amz-Signature=f201440423b5a180aaec51a621348bd295f6a5d33e3889852cdfa1ce5f25fa66&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIRXTVPQ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIBpTWjW4sOBeyvQqp3DGno4Frd9jCfLVcYL5OIty%2F2DAAiEAq6Dnm6NK%2FOqTK7PnPJtH0XoTN3DCG8rMUNH%2FMkxAqV0q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDEpnlp0t%2Fmo2z0o0QCrcA84ilEa3HoZwcmLPF19f5szmKfvbLzb7k0dYc3Pjc%2FN%2BvSFJxDDzuJJZGx08jiwlwrTkWfqgsGAqNuM%2Fstjk33Nl8njZDShUrM47mVvmfeBOyHd5kX3TcjRi5oIo8hWD%2BPIzA4Pw6Nr50ZaQR10ZJtZNNNV7StniZA%2B6dWoBCdYVP2dIE5nOYU%2FdcLG2JflLwwPgmlKQdzrqgwif9SP908rdfWvAR3qqNPI0cE9er5def9FJCwhXpW6wNNLVX7Te54JBUcSsmWV1KADYxqZmbfn1xCifAemXO0zbpNtgwQEo3ox7zYPpqv0PLu3%2B9LRJgAcHV4jyelIscff2YBdlnB6TQw%2Fgkkoes9QOVCjowZf2n1k%2F0wSg12vXT4%2BLlI4kmD%2FHHRw%2BcUSeWge%2B%2BBoehYU4whD5A8Ta24ThP%2BOoSUnwUE83aEcRPylik4dw%2FsxKvjYpWWKpTupd3gmxwd4waNyhUr5O2lCPb0eP%2BjC75CW8VitK3YgQLSOahBk%2BqpxvlGDADkQH9Vca1MicdSZIfp%2FOIixEZL8V%2F4X3AUhMo30GyhqxSOZj25E9rKyXBLw5yzy8ENvI0UQ6BpqXRkwSKh6fjkr1B%2BhkVRLl3WcdV0boQWhE4ZZO3LAYsMr5MOyI3sAGOqUBkbVw3GVEZYLgB%2BsQT2L2o38ASI7bQxaX6DccowjsotSlPxfWXisXhMQnUvN%2B65Vmr4jG75g71Fe3Av%2B6GXsMt6ZRhDpLcFt6psZwGEDw%2Fq0TQj2kVcTxdQdRiIapCkh74I0FfuJ9YWlBavRllZPD2bJb1ijDLVXBTII1PrMeAJRi7bYw0w4q4r8g0TDxx%2BOxjd13gUq4V0dH%2BvXgGe4LaVzeY2yu&X-Amz-Signature=1d6f17568367cce85cdd3a12343b7f9241b6e4350a5ae7c2afb440714f445308&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
