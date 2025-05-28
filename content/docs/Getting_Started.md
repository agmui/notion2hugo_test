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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QDXVR52%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T070916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQjNQOWLm712Vxo0C1WwVy9De9WOcxszLsYAYJnAo6VAIgL%2FXrM2H1CBJWJ3o5haFj6Y1bhIas6dYbiM6VxJkCrU4q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDMZF1Gq8xyFTzf8R6yrcA48Qf00to0zVlXhznS0LcIJgFh6TmHLggmBCo%2FICSFTio6KQAXdC%2FUR1j2AKvj5oZeG2pqxAUBno2UW6SBR0qCz6dW3AprRqR8EuZfCucSrJu6Gq1aOSWonAJXKUzU8tjLySOpLX5ykZ6c%2FpyS%2FlYFpEWmRMmLtdvPK94%2F%2FeHEAOf9ArXHQ5k5ITM%2FOsIl4nDMVYRIHfPE1IbP1iSohisdhI%2BDT0uG4jYpbIcvoLQUR6G1bxsEXlKfWVulSZVMPAfy8zRkoWUiHmR6Mi1lQuJASGj96yEirDggE5G7wVc2XOWBHag%2FqMUz9o%2FLsEuD%2FeZrVdrqU5k5nibDkptup%2BEFLslncXrwsVhddg47uZXOyYMFZqNbRvPlPosDBJLweJ2merrz3AJ%2FbilGgi0JE7R%2BLOwmpkLszFSrAFTxHExxyWV2RGBkoBBxRJfG1gjid%2FTCqcNF79N0M%2FGGsXt6KAEH3oPCuZEQblVlHZRJfZAhg8h7u8MV15rp3MHebCYhmn2YBvJCCpw2O%2BM3ueulAD2oBCMcaXKfLqKeN0kWWhiWXsd68OtaaDtKM3w4ksp3DiPt5t%2FBdwnSvrgdHD1DoOswIheCwoY6QCu72Eq2ImtiSOfE5jyHVK%2FtPE%2FpDXMMzE2sEGOqUBHG%2F6EnKxaBF2JMUV7V1eG3GWX63aqLNv9%2FPHKsmS%2BvtSPZ%2FZdJomLSX4%2FfCwupa2Dex9ql9wrTztUrbrI%2Bc9M4Z7vVdOXG61i0Y5NpAWcaA83mzPn%2FG2eFPCxjBylz7DR%2F5UXxLaWBmMU4UvBkGKN%2B7hXCGqwzwYiz6xR8f6P318RwcJK6aLNsi7vhmPXu9q%2FIcpWepZYDyTDOdPn0xBjF1rB%2Fis&X-Amz-Signature=ea2a132a20375d9adcc9561a328a6fd7af0ff94209107c65e1fbec3d469872fd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QDXVR52%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T070916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQjNQOWLm712Vxo0C1WwVy9De9WOcxszLsYAYJnAo6VAIgL%2FXrM2H1CBJWJ3o5haFj6Y1bhIas6dYbiM6VxJkCrU4q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDMZF1Gq8xyFTzf8R6yrcA48Qf00to0zVlXhznS0LcIJgFh6TmHLggmBCo%2FICSFTio6KQAXdC%2FUR1j2AKvj5oZeG2pqxAUBno2UW6SBR0qCz6dW3AprRqR8EuZfCucSrJu6Gq1aOSWonAJXKUzU8tjLySOpLX5ykZ6c%2FpyS%2FlYFpEWmRMmLtdvPK94%2F%2FeHEAOf9ArXHQ5k5ITM%2FOsIl4nDMVYRIHfPE1IbP1iSohisdhI%2BDT0uG4jYpbIcvoLQUR6G1bxsEXlKfWVulSZVMPAfy8zRkoWUiHmR6Mi1lQuJASGj96yEirDggE5G7wVc2XOWBHag%2FqMUz9o%2FLsEuD%2FeZrVdrqU5k5nibDkptup%2BEFLslncXrwsVhddg47uZXOyYMFZqNbRvPlPosDBJLweJ2merrz3AJ%2FbilGgi0JE7R%2BLOwmpkLszFSrAFTxHExxyWV2RGBkoBBxRJfG1gjid%2FTCqcNF79N0M%2FGGsXt6KAEH3oPCuZEQblVlHZRJfZAhg8h7u8MV15rp3MHebCYhmn2YBvJCCpw2O%2BM3ueulAD2oBCMcaXKfLqKeN0kWWhiWXsd68OtaaDtKM3w4ksp3DiPt5t%2FBdwnSvrgdHD1DoOswIheCwoY6QCu72Eq2ImtiSOfE5jyHVK%2FtPE%2FpDXMMzE2sEGOqUBHG%2F6EnKxaBF2JMUV7V1eG3GWX63aqLNv9%2FPHKsmS%2BvtSPZ%2FZdJomLSX4%2FfCwupa2Dex9ql9wrTztUrbrI%2Bc9M4Z7vVdOXG61i0Y5NpAWcaA83mzPn%2FG2eFPCxjBylz7DR%2F5UXxLaWBmMU4UvBkGKN%2B7hXCGqwzwYiz6xR8f6P318RwcJK6aLNsi7vhmPXu9q%2FIcpWepZYDyTDOdPn0xBjF1rB%2Fis&X-Amz-Signature=95503ca15ab62ec634fe3c8528a130985a0f8000c5d25c9523678eb1e41d6afb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QDXVR52%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T070916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQjNQOWLm712Vxo0C1WwVy9De9WOcxszLsYAYJnAo6VAIgL%2FXrM2H1CBJWJ3o5haFj6Y1bhIas6dYbiM6VxJkCrU4q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDMZF1Gq8xyFTzf8R6yrcA48Qf00to0zVlXhznS0LcIJgFh6TmHLggmBCo%2FICSFTio6KQAXdC%2FUR1j2AKvj5oZeG2pqxAUBno2UW6SBR0qCz6dW3AprRqR8EuZfCucSrJu6Gq1aOSWonAJXKUzU8tjLySOpLX5ykZ6c%2FpyS%2FlYFpEWmRMmLtdvPK94%2F%2FeHEAOf9ArXHQ5k5ITM%2FOsIl4nDMVYRIHfPE1IbP1iSohisdhI%2BDT0uG4jYpbIcvoLQUR6G1bxsEXlKfWVulSZVMPAfy8zRkoWUiHmR6Mi1lQuJASGj96yEirDggE5G7wVc2XOWBHag%2FqMUz9o%2FLsEuD%2FeZrVdrqU5k5nibDkptup%2BEFLslncXrwsVhddg47uZXOyYMFZqNbRvPlPosDBJLweJ2merrz3AJ%2FbilGgi0JE7R%2BLOwmpkLszFSrAFTxHExxyWV2RGBkoBBxRJfG1gjid%2FTCqcNF79N0M%2FGGsXt6KAEH3oPCuZEQblVlHZRJfZAhg8h7u8MV15rp3MHebCYhmn2YBvJCCpw2O%2BM3ueulAD2oBCMcaXKfLqKeN0kWWhiWXsd68OtaaDtKM3w4ksp3DiPt5t%2FBdwnSvrgdHD1DoOswIheCwoY6QCu72Eq2ImtiSOfE5jyHVK%2FtPE%2FpDXMMzE2sEGOqUBHG%2F6EnKxaBF2JMUV7V1eG3GWX63aqLNv9%2FPHKsmS%2BvtSPZ%2FZdJomLSX4%2FfCwupa2Dex9ql9wrTztUrbrI%2Bc9M4Z7vVdOXG61i0Y5NpAWcaA83mzPn%2FG2eFPCxjBylz7DR%2F5UXxLaWBmMU4UvBkGKN%2B7hXCGqwzwYiz6xR8f6P318RwcJK6aLNsi7vhmPXu9q%2FIcpWepZYDyTDOdPn0xBjF1rB%2Fis&X-Amz-Signature=8fa2244091f7d4b8a961f186cc4ec64dfc6075bc5d00468112833e695a26fc1e&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y33USH3C%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T070920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbL1krv7DYcdgBDsQojmHHbNRcBvTP24f5zwc8pyhZDAiA18ysAInNgm4MVWHZy5yUfw8O4rvS%2BCp%2BENtGyakSaMir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMZL126v9qcudmE1piKtwDvYDRyoHrR9H0igy1VF1mBDvGiqGMYlD8n9HsaiS15WFaebCtApxSDc20J0ulXfcxlrO7cnBQu2fQBaRLP3oDIv3fWVjVdS%2BIH8jguMeJyt3%2FJ3AplmZ5J%2B8PSOSV%2BHjwTQg0WjA94ZBypaeiNGTxQOYbIhH3vWgG7UsjkIHurYlZihjjHoUb5yacHeiEqTbq8RB1bDTER8PP3RejRahi0tTNW0fUS%2FT%2Fs7Wbm0zh%2FeJXwEPrvWVl5UlSd%2BaW3WhJE9OQ2QJ1LTKN%2BZDLczi3ZOuc47lr4jN4p4bjxGcWrXZiWHiug0SSsLqlT6yBtXm24moVm%2FbnQfHbs9PeRcvlE8%2FjAkLI9zvkmQ3CDpB0dzC%2Bt5e8xjJx2xG0RHUA%2B0tcPEh%2B8P0Cp0sxxQYntbsCDJRq2Pnp09t1fecXWqpGPV1dHZVv2t71lGv5uRGXZjwIgLQjPsEmvEPWfJK0CK7%2F%2FoNzrmWgbgzD%2BTf8UMvT%2FOL0cbmJyU%2Bx0hq62xdx1arBhk8TIoCpx0qPuQv3%2FOVeSLrC0CpyhvkfH%2F2Y6x8hgg2NeJqywtEoVho4EyKoC%2BStrJKiiTfTUMMtOAhqM%2Bwxgn5q%2FmN%2BQys8Aq3H8PJMx%2BcjS7x9Xh%2BpugFEEnMwssPawQY6pgHdWrrpJOj5aI8Pff4tbRQJxEji%2BeoY5GktY6VXljtW4Dp56VBo7FA7YahqYM76IzroTBcJO2u9XjObmYmmq7tzwYHfWuA81RxAqqTXlCbJUxht1iPv4Sb6mbGwOz4Z%2FwogEUuGJ5XJWXjW0H6a1nfVgCGj3BXtILOyMKWbVqqJFltERNeTZvpdJqZh9oslCjMiGf%2F%2FfHmPP0Q4S7qGcA%2FkjmCKvJda&X-Amz-Signature=a7c685004618eb59e8b26f9c04344991cfbc8e143e39932ff333c4f3da319079&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU3QDHSD%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T070920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZLz1NwgNumPapr8CG1fGqGv8fTBpaPv2W9lPkI7%2F64AiEAkIqG5cKleB%2BRYx%2FykltGeDNLv3RJyNIC%2FJyXa73cosgq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDBpPHShQCUWrgFkj%2FircA9LdCTXqur3oZKF%2FXDlqCdbqeRg4NJKEE3Y6%2B05COHB8cK%2B%2FvqN60A2GGGvZdmoDC7Atb%2F0n4XRUVK%2F1hhfXzK1v7w5s5ePuD%2B1VLK95eAR20NAvD%2FoiOLO2vYcG5HM7FT2OQ2qVcF832I%2B968vv%2FM2lmiS1bw92JiguP7DrrxpuI8TxbExuEq2XnCFAaLwhWarscjd8Dpe1dMHBbdf8H9B4CW7o5IlAf91BwMD8W0BzujKCGG%2Fh2P6t4hZtT76ssHMqKiuxKRyt7Xs3BjvIEx8Z6%2Bow97S7wQqsR%2Fl92rv311ZeUwiz%2BeXhBp0tMHzGIqvyYDrcclzw2uPtnXHeVKBGUfyuZZ3v%2Fj0wCnXXniSn9VbgtD3M6AATLtsMe1PhcXB%2Fo6EKSqTPJJ4Ex7Sw4rNrqoxr%2FrREsxBwG8bQw6j31LzPv7KzLcJziRIxHNnHzjnN61wMqbRAnzAOa9Ek1ftcUD2b%2BSWvt2oPh95IUaOTdtpntYw6otK19GUEAesJ334c5JkhaHL998OoZLqefQVhGKmdN%2FXAb%2F%2BCvuY0EZbu2WHorm0n6h8IlLPjnkedfuX3SrJvFet62kClYHtvbKk6UQYEnCF03i74a7dypXeMkFaP6Y2Mv9SRxmxSMNjE2sEGOqUB7Y12nL9tX3HoVwKzx0WJjhURQEo443XpaZHzDeeg%2FL3bCvNqg%2FlTQFpG2vyYyInSF%2FzSASj9sCd0pgcOcfZ3%2FQ8YkzKGfAfz%2BQf9Ad3lb1BjjMdSIBvaesNYnBbKfyTz0HNpU9RDaSA37zYC8RVi241dX%2FejhfrO8TLMRVOttmr%2BhGhRKYy%2BOkczCIStVQOuZM9w7rO2WoIp%2FWBiauY65n1RegP2&X-Amz-Signature=57a294511899c77d1d578fb960db2bf79c073c7e3ef9fd331e273c8f2f175894&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QDXVR52%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T070916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQjNQOWLm712Vxo0C1WwVy9De9WOcxszLsYAYJnAo6VAIgL%2FXrM2H1CBJWJ3o5haFj6Y1bhIas6dYbiM6VxJkCrU4q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDMZF1Gq8xyFTzf8R6yrcA48Qf00to0zVlXhznS0LcIJgFh6TmHLggmBCo%2FICSFTio6KQAXdC%2FUR1j2AKvj5oZeG2pqxAUBno2UW6SBR0qCz6dW3AprRqR8EuZfCucSrJu6Gq1aOSWonAJXKUzU8tjLySOpLX5ykZ6c%2FpyS%2FlYFpEWmRMmLtdvPK94%2F%2FeHEAOf9ArXHQ5k5ITM%2FOsIl4nDMVYRIHfPE1IbP1iSohisdhI%2BDT0uG4jYpbIcvoLQUR6G1bxsEXlKfWVulSZVMPAfy8zRkoWUiHmR6Mi1lQuJASGj96yEirDggE5G7wVc2XOWBHag%2FqMUz9o%2FLsEuD%2FeZrVdrqU5k5nibDkptup%2BEFLslncXrwsVhddg47uZXOyYMFZqNbRvPlPosDBJLweJ2merrz3AJ%2FbilGgi0JE7R%2BLOwmpkLszFSrAFTxHExxyWV2RGBkoBBxRJfG1gjid%2FTCqcNF79N0M%2FGGsXt6KAEH3oPCuZEQblVlHZRJfZAhg8h7u8MV15rp3MHebCYhmn2YBvJCCpw2O%2BM3ueulAD2oBCMcaXKfLqKeN0kWWhiWXsd68OtaaDtKM3w4ksp3DiPt5t%2FBdwnSvrgdHD1DoOswIheCwoY6QCu72Eq2ImtiSOfE5jyHVK%2FtPE%2FpDXMMzE2sEGOqUBHG%2F6EnKxaBF2JMUV7V1eG3GWX63aqLNv9%2FPHKsmS%2BvtSPZ%2FZdJomLSX4%2FfCwupa2Dex9ql9wrTztUrbrI%2Bc9M4Z7vVdOXG61i0Y5NpAWcaA83mzPn%2FG2eFPCxjBylz7DR%2F5UXxLaWBmMU4UvBkGKN%2B7hXCGqwzwYiz6xR8f6P318RwcJK6aLNsi7vhmPXu9q%2FIcpWepZYDyTDOdPn0xBjF1rB%2Fis&X-Amz-Signature=4858013fe229e4c257652ded6755a1ad0d63ae41b48a22d1b26404404db3ece7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
