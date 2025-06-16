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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PP5IIVU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T024345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDiXijxuXo0uCWQkjxwcwojtYbqA5au0soikp7GAyt4DQIhAJgtcTpS0IuP59QUXKwPKKIhznubTxhhJBJUAzSDNfRKKv8DCFMQABoMNjM3NDIzMTgzODA1Igw%2FCYRLUm4O74qBQyYq3AOC9UG1Yulq2rfnT%2FLaouQ7In2zMbHBF%2FoaV377JOZ%2BZZHej2sooq%2BaNIKJp5922uyW4cWt9u0z%2BksuLCi0PB4Ri6fnLCezlXiMbnbisJLWtY5v%2BWCSEvlosKPp2LRk9lcC7E%2BugNDnNawphdpwABan4LfPnsGtclJkfYUN53YhNBQ4%2BDGcv45p1%2B%2BGNM97nZUxhJkWnqKpDnSttHZesJng1YfljRoynru8CzBf%2BffB1MuXyjlQLqGYecdw7V0%2FHM4Rq3ERTCm%2Fygk4OJ2NrZblKOlNg9cPiEXyDvjEznKn0fa37kXWLnexYJDjuGhOvmdLprdma1bXL3xONXLiPwNxiNKKAhs2SQlIa3Tt%2BYc14MNp4hlc063Y0J1Hy%2FjnotTLOCXi9cwPN%2BIe38iaEPvl33jcuc%2BUDesQAEPxmgesy0bJ4O4sH%2FpfbpnKFipieGC4QJd46yX8nQQTkni567UrcUZiM0ps5ra6EFJRlBP%2FOoZUyMnkwOkW55A5nBDdkXqkbPrkavH3K9bo78FiCRu51m5Pk%2FUR2erWZNmq3lEzPEYsdN45AOakiXexP%2Fql%2FMsh3du01YtrvK6CzzCvB12j%2BKJJaB%2FAGwMRWz8oKUXKxBplSidHXtWGPE8bDDDe%2Fr3CBjqkAZ6XevPKDbdxXfBCenAXpX%2BHLY7pxpjvOHErBIhr5qOS3SgsEQePS%2Fs1vykZ3YNKY1JjtktCemu6FaoM2atwARGC4PrfPy1%2B1tuROQn380GATEzkhvB6IntAnWuVz%2FEgahoa6ST6tA318RplT4CqxIfynu%2BSETpPEBLToeRGj47%2BpHQFza0rxMtU5jCZafzBELTDdl6IGEIiyWbHIwgdVtIv2ftc&X-Amz-Signature=605115b067bb7801f6ed5d0553537ac6424ae15370aa81b89260353f1b925839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PP5IIVU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T024345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDiXijxuXo0uCWQkjxwcwojtYbqA5au0soikp7GAyt4DQIhAJgtcTpS0IuP59QUXKwPKKIhznubTxhhJBJUAzSDNfRKKv8DCFMQABoMNjM3NDIzMTgzODA1Igw%2FCYRLUm4O74qBQyYq3AOC9UG1Yulq2rfnT%2FLaouQ7In2zMbHBF%2FoaV377JOZ%2BZZHej2sooq%2BaNIKJp5922uyW4cWt9u0z%2BksuLCi0PB4Ri6fnLCezlXiMbnbisJLWtY5v%2BWCSEvlosKPp2LRk9lcC7E%2BugNDnNawphdpwABan4LfPnsGtclJkfYUN53YhNBQ4%2BDGcv45p1%2B%2BGNM97nZUxhJkWnqKpDnSttHZesJng1YfljRoynru8CzBf%2BffB1MuXyjlQLqGYecdw7V0%2FHM4Rq3ERTCm%2Fygk4OJ2NrZblKOlNg9cPiEXyDvjEznKn0fa37kXWLnexYJDjuGhOvmdLprdma1bXL3xONXLiPwNxiNKKAhs2SQlIa3Tt%2BYc14MNp4hlc063Y0J1Hy%2FjnotTLOCXi9cwPN%2BIe38iaEPvl33jcuc%2BUDesQAEPxmgesy0bJ4O4sH%2FpfbpnKFipieGC4QJd46yX8nQQTkni567UrcUZiM0ps5ra6EFJRlBP%2FOoZUyMnkwOkW55A5nBDdkXqkbPrkavH3K9bo78FiCRu51m5Pk%2FUR2erWZNmq3lEzPEYsdN45AOakiXexP%2Fql%2FMsh3du01YtrvK6CzzCvB12j%2BKJJaB%2FAGwMRWz8oKUXKxBplSidHXtWGPE8bDDDe%2Fr3CBjqkAZ6XevPKDbdxXfBCenAXpX%2BHLY7pxpjvOHErBIhr5qOS3SgsEQePS%2Fs1vykZ3YNKY1JjtktCemu6FaoM2atwARGC4PrfPy1%2B1tuROQn380GATEzkhvB6IntAnWuVz%2FEgahoa6ST6tA318RplT4CqxIfynu%2BSETpPEBLToeRGj47%2BpHQFza0rxMtU5jCZafzBELTDdl6IGEIiyWbHIwgdVtIv2ftc&X-Amz-Signature=2441c7e2bb3719f44ed8274bea6d7726a0ccade0a580565a241fa4857778401d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PP5IIVU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T024345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDiXijxuXo0uCWQkjxwcwojtYbqA5au0soikp7GAyt4DQIhAJgtcTpS0IuP59QUXKwPKKIhznubTxhhJBJUAzSDNfRKKv8DCFMQABoMNjM3NDIzMTgzODA1Igw%2FCYRLUm4O74qBQyYq3AOC9UG1Yulq2rfnT%2FLaouQ7In2zMbHBF%2FoaV377JOZ%2BZZHej2sooq%2BaNIKJp5922uyW4cWt9u0z%2BksuLCi0PB4Ri6fnLCezlXiMbnbisJLWtY5v%2BWCSEvlosKPp2LRk9lcC7E%2BugNDnNawphdpwABan4LfPnsGtclJkfYUN53YhNBQ4%2BDGcv45p1%2B%2BGNM97nZUxhJkWnqKpDnSttHZesJng1YfljRoynru8CzBf%2BffB1MuXyjlQLqGYecdw7V0%2FHM4Rq3ERTCm%2Fygk4OJ2NrZblKOlNg9cPiEXyDvjEznKn0fa37kXWLnexYJDjuGhOvmdLprdma1bXL3xONXLiPwNxiNKKAhs2SQlIa3Tt%2BYc14MNp4hlc063Y0J1Hy%2FjnotTLOCXi9cwPN%2BIe38iaEPvl33jcuc%2BUDesQAEPxmgesy0bJ4O4sH%2FpfbpnKFipieGC4QJd46yX8nQQTkni567UrcUZiM0ps5ra6EFJRlBP%2FOoZUyMnkwOkW55A5nBDdkXqkbPrkavH3K9bo78FiCRu51m5Pk%2FUR2erWZNmq3lEzPEYsdN45AOakiXexP%2Fql%2FMsh3du01YtrvK6CzzCvB12j%2BKJJaB%2FAGwMRWz8oKUXKxBplSidHXtWGPE8bDDDe%2Fr3CBjqkAZ6XevPKDbdxXfBCenAXpX%2BHLY7pxpjvOHErBIhr5qOS3SgsEQePS%2Fs1vykZ3YNKY1JjtktCemu6FaoM2atwARGC4PrfPy1%2B1tuROQn380GATEzkhvB6IntAnWuVz%2FEgahoa6ST6tA318RplT4CqxIfynu%2BSETpPEBLToeRGj47%2BpHQFza0rxMtU5jCZafzBELTDdl6IGEIiyWbHIwgdVtIv2ftc&X-Amz-Signature=1aee3ea72468189148458004ea57453188931e32fef99427a67a01d5c71957d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJKKDE37%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T024348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCr07muEDMQPt46ZHp049CTPDhCaN3RILdUYlYMVztL%2FgIgbF6%2BVZdihnbjI%2FNq5n%2ByFvA5LBnOKTEH9ZwNP9xs9r8q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDLypzob2CGmcAfCp%2FSrcA3eEvumeAHMnHy1SqcZNLzSmDGUz5xicRDwh8bQbjoWp%2FZ7BBrjk272qxlTX%2BdQfJLlTHb6N6pQHvsmtgw%2Bg%2BcvSXvj9OUh8uzGyjnYGiJIZ3vKJnvmW%2FwMiLUYJpoEyrIEH6N1igM%2Bpl1UTA%2F5OtiDJqqQtGwlRrR0WNhSJ9neC%2FZlGblBc%2BQbggLYjWiXE2kuy78tRa6RhdOSA%2BzabAQmXQHcdQBpS%2Bni%2B7bZgoUqSVJ5SuhHOw7Y8TdSEyRTzUNAJZAyNOFbvcA1XeY9tSYMQZ9LowGLjYMk2ma2wMJBvvAg9T0fQkjs3G%2B5T%2FxDOlYnVgB6MYX54OLn5OdoX8oMHBkD0mPN1JuMC7OQSXRMz1U2h%2BsC68AQQoK3fWwWJDW%2FDubs0xZ5IcmP%2Bjww%2Fj7K7aBe0j%2BgK4vHRZ3dgtEIX2wlAdCaqB0HCbyBpTTcGq%2FTm04zf5HsiTqf%2Fq9dcwbIwGIqr6S290QYNLVT8YHO31m1bBJUObitSzox1BdrXhYCXE%2BrM%2FO7aLfkUsDgDsH8nN46pKa6h8%2F9jO0JszXkClm7TobmhNo0BmSTQJA0pwniIv4JmWgkAWmrP4nbRHjpp0jPOlx6jARSYIMTzJeZJQT7JvYox%2BqRRnVdQMKL%2BvcIGOqUBh1HMi37cVYHvhtudPcnNADqOeEM4nPd4A57of5V3HGjgW%2FODd7CSnD2b%2Fji64qS6QAvw%2BO%2BWzjGx%2FkoPzYw5rsFvNj8OINZhicAxIzyFCy7lw2fUl5z23bwskN3lOQZ8YuPpG%2FoV5tLnhKTCEm2HdcMXvgbIdwJm8%2FMwRsPDY7u6%2B%2FcKMWCFsQYOMsMfkq2GrlKXkZyo4eRQL9jtIqCUsmwJBPFq&X-Amz-Signature=c672983d4995ccd2bd47bb2ed4bd3cc7504a835a20630a7a6d3e8d1d60e70439&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RSOOHGN%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T024349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEDiM%2BiGaUYt9OPauDLosAs6YImbb35d3isq3HM3N187AiEAzIo%2FSUSOAThkRU6S%2BxjgNGAEnUbqvoixDS175Z9AU6Yq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDE2QY1ByAvelEZx64CrcAxCByJI2xxbag1lt2z8q57vnuUPUzkLCvpoSF4uuIKxeFyn%2FfAAb9CNViFqX%2FnNK1iYTCKksxew4Mh90kOT2wTKt4gKFL7M8zHLlkI%2F%2FTmtTkPLBtXnb6Y%2FT7O2LiMSb%2FspYjtj3VKWl1%2BIXa2wYM4TnoDdv%2FKq4CAFDPrQwVggL9s5cijHqN48dyyaEc6YESafe2Q8Dzp5B2BfOxQdY803tT04bWzttVHvE29PxdHvt66%2F8zDuQr4MrdryJKHpwGvnPAt%2BUl6qbsdIklBOvK9oSvM57JU1CI4KsPrV9IKkFzM7KgEDEHWYwH1iwoQm1Fs2jIggD7FIaqSUB1Dzr0WVlg0xpg6J%2Bof8NxnUjzmX%2Br5PJjKCwetxtuLMq84XhCVslhjsdWc2PmiZo7Vrja4o8wcxBXpBBPYPJEUhKB0%2BLQ112zWh4nPDwEtJn9gB%2BYDslZx%2F%2F7CQe6sNUPqYwGo1QJZ1Fyw4n3h%2F9QuonSfmgkpfoElellC3t3biHYk%2BWlFWbw%2Bge5caRPq098AfaoEX6lbBdBEqwK01Z7M8dwourp2SIi%2Bo%2B1Ta8dPQXAP6gootf%2BhDsYG3Nuz6NPO3MmxgOJyAaeo427tuVMP4Imxn3rN79u9uDwCyoVvraMKD%2FvcIGOqUBnTIBROpBmLxyFdFrLvzToLCdTLPpYKUXJpSVZhhWNHZjKIk8LtDCwkFmQbtqCDKtAsmIPCZXqZprxRj8AiCes3VwkB8JQstULa8SyebqKSVFwDUzQJUF%2BxkozeTlITEyN4yHKSW2LDJcOBKOMxBeXL4xXNXbiNPrCeIaEpuEw9kpQHEHIuAz5pZRPMvNLHFnAGgZyFKWeeznPha0ZU5tCfRjE8sq&X-Amz-Signature=10a7cfaca2615638eb22e3642dc2b498ee9093c15e5283b03efdbf1092a8abf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PP5IIVU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T024345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDiXijxuXo0uCWQkjxwcwojtYbqA5au0soikp7GAyt4DQIhAJgtcTpS0IuP59QUXKwPKKIhznubTxhhJBJUAzSDNfRKKv8DCFMQABoMNjM3NDIzMTgzODA1Igw%2FCYRLUm4O74qBQyYq3AOC9UG1Yulq2rfnT%2FLaouQ7In2zMbHBF%2FoaV377JOZ%2BZZHej2sooq%2BaNIKJp5922uyW4cWt9u0z%2BksuLCi0PB4Ri6fnLCezlXiMbnbisJLWtY5v%2BWCSEvlosKPp2LRk9lcC7E%2BugNDnNawphdpwABan4LfPnsGtclJkfYUN53YhNBQ4%2BDGcv45p1%2B%2BGNM97nZUxhJkWnqKpDnSttHZesJng1YfljRoynru8CzBf%2BffB1MuXyjlQLqGYecdw7V0%2FHM4Rq3ERTCm%2Fygk4OJ2NrZblKOlNg9cPiEXyDvjEznKn0fa37kXWLnexYJDjuGhOvmdLprdma1bXL3xONXLiPwNxiNKKAhs2SQlIa3Tt%2BYc14MNp4hlc063Y0J1Hy%2FjnotTLOCXi9cwPN%2BIe38iaEPvl33jcuc%2BUDesQAEPxmgesy0bJ4O4sH%2FpfbpnKFipieGC4QJd46yX8nQQTkni567UrcUZiM0ps5ra6EFJRlBP%2FOoZUyMnkwOkW55A5nBDdkXqkbPrkavH3K9bo78FiCRu51m5Pk%2FUR2erWZNmq3lEzPEYsdN45AOakiXexP%2Fql%2FMsh3du01YtrvK6CzzCvB12j%2BKJJaB%2FAGwMRWz8oKUXKxBplSidHXtWGPE8bDDDe%2Fr3CBjqkAZ6XevPKDbdxXfBCenAXpX%2BHLY7pxpjvOHErBIhr5qOS3SgsEQePS%2Fs1vykZ3YNKY1JjtktCemu6FaoM2atwARGC4PrfPy1%2B1tuROQn380GATEzkhvB6IntAnWuVz%2FEgahoa6ST6tA318RplT4CqxIfynu%2BSETpPEBLToeRGj47%2BpHQFza0rxMtU5jCZafzBELTDdl6IGEIiyWbHIwgdVtIv2ftc&X-Amz-Signature=bee44c243eea9dea275d95ba2a7245c6c16d4cc39de8670f11058954049aec7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
