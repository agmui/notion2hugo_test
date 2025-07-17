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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM7MKXI3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQD2cBwDpF26Rb1bLWu72FlMDDXN0T5byYjl0Y9AHOZhOAIhAN4Gh%2B5DNsRp3srVC4LaG%2BB7C7uho4JIA%2FeaLQYPiPL3Kv8DCGwQABoMNjM3NDIzMTgzODA1IgzvUJdfO01LShWVpk8q3AP9xV%2FIpWPHY0Vd0swqfPE%2Bgrq747WmBkclZOmiOur5Obwss5vnrDgMvJE2SHKgas8Q2BNHDFOQiVlAnoJE9tTxYJOgTsFeJzNjklxVvpxxihLNGt7qwMXoV%2F2Cbwo4PtW%2BeAUu8sO6GZcnO%2FvnPcgEgdJ4PPi27XWvAgcyHoat%2B3%2FG6uU%2BuXOfbvrv1XiiD5TESRq6GOrur3Z9PxhXIJlHUA8GxNIPZpthK46MQ4qU9MGHDG%2FYfp9UV8s%2Fb5CGirSRl05aT055hEaTncoigspp5bpa5UzgWRvT7n5gqC1UFmWb7sjQXiZ7BTOVHLDXJ9hcnaRSa3wCDJdWrlUz82tElLqLy4Ay9cG2%2FjN9yqoU54B0HLdDuPEKmDTBwA1vJIOHSM%2FMeOprTWodszc2cjNV6Fu7KbDrypmoWKUATcFUkZhUM%2F4TJ68kmK75cppNff0%2BVgZzqZlqW60EL8YBLLvlVube%2B9zzCUr3QRKNFJv3IO2L7WtwXjIMApHP%2F1zNAxp%2BKGPcimcVawqNcW6T4hvZgoFzoQORuy0%2Br5ss3QOTEOUc7n%2BSBz0gcLMBTUcRRdKu0vFzbyu1b7AquwDaX9Uvpaz0SunRMY6qxBizOeNONFqXDUDqTtZlRjk%2BSTDryOHDBjqkAaNdeO0%2BsosVlsVBhFyKvpH1VwFe5WtWQdgkoyRknGBr9V%2FjIG%2FXR3Wx5ruN5uNcyrccYgx8bJRUiZXYwLS8FIqsGurY%2B2xmKdikuwcxLYP%2BRSL%2Bxl6FA3R2Z%2BKDbo80z9yr%2FVdwg9H8uzKxe21oLotGBxsPiOv4VmnMRnT%2FFblAs7ueI92SJ9hCZODMuPe60uyu%2F4WUIZUok2zq%2FNmceveO3S1I&X-Amz-Signature=495708a1564ecdd8dc1cfb001530818b23fdaaeea2c9a8aa23aa9fdf67cb4677&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM7MKXI3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQD2cBwDpF26Rb1bLWu72FlMDDXN0T5byYjl0Y9AHOZhOAIhAN4Gh%2B5DNsRp3srVC4LaG%2BB7C7uho4JIA%2FeaLQYPiPL3Kv8DCGwQABoMNjM3NDIzMTgzODA1IgzvUJdfO01LShWVpk8q3AP9xV%2FIpWPHY0Vd0swqfPE%2Bgrq747WmBkclZOmiOur5Obwss5vnrDgMvJE2SHKgas8Q2BNHDFOQiVlAnoJE9tTxYJOgTsFeJzNjklxVvpxxihLNGt7qwMXoV%2F2Cbwo4PtW%2BeAUu8sO6GZcnO%2FvnPcgEgdJ4PPi27XWvAgcyHoat%2B3%2FG6uU%2BuXOfbvrv1XiiD5TESRq6GOrur3Z9PxhXIJlHUA8GxNIPZpthK46MQ4qU9MGHDG%2FYfp9UV8s%2Fb5CGirSRl05aT055hEaTncoigspp5bpa5UzgWRvT7n5gqC1UFmWb7sjQXiZ7BTOVHLDXJ9hcnaRSa3wCDJdWrlUz82tElLqLy4Ay9cG2%2FjN9yqoU54B0HLdDuPEKmDTBwA1vJIOHSM%2FMeOprTWodszc2cjNV6Fu7KbDrypmoWKUATcFUkZhUM%2F4TJ68kmK75cppNff0%2BVgZzqZlqW60EL8YBLLvlVube%2B9zzCUr3QRKNFJv3IO2L7WtwXjIMApHP%2F1zNAxp%2BKGPcimcVawqNcW6T4hvZgoFzoQORuy0%2Br5ss3QOTEOUc7n%2BSBz0gcLMBTUcRRdKu0vFzbyu1b7AquwDaX9Uvpaz0SunRMY6qxBizOeNONFqXDUDqTtZlRjk%2BSTDryOHDBjqkAaNdeO0%2BsosVlsVBhFyKvpH1VwFe5WtWQdgkoyRknGBr9V%2FjIG%2FXR3Wx5ruN5uNcyrccYgx8bJRUiZXYwLS8FIqsGurY%2B2xmKdikuwcxLYP%2BRSL%2Bxl6FA3R2Z%2BKDbo80z9yr%2FVdwg9H8uzKxe21oLotGBxsPiOv4VmnMRnT%2FFblAs7ueI92SJ9hCZODMuPe60uyu%2F4WUIZUok2zq%2FNmceveO3S1I&X-Amz-Signature=f15a7d1a5ad905447c90fa731b07792a84af15580e7c149ee478095b35407645&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM7MKXI3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQD2cBwDpF26Rb1bLWu72FlMDDXN0T5byYjl0Y9AHOZhOAIhAN4Gh%2B5DNsRp3srVC4LaG%2BB7C7uho4JIA%2FeaLQYPiPL3Kv8DCGwQABoMNjM3NDIzMTgzODA1IgzvUJdfO01LShWVpk8q3AP9xV%2FIpWPHY0Vd0swqfPE%2Bgrq747WmBkclZOmiOur5Obwss5vnrDgMvJE2SHKgas8Q2BNHDFOQiVlAnoJE9tTxYJOgTsFeJzNjklxVvpxxihLNGt7qwMXoV%2F2Cbwo4PtW%2BeAUu8sO6GZcnO%2FvnPcgEgdJ4PPi27XWvAgcyHoat%2B3%2FG6uU%2BuXOfbvrv1XiiD5TESRq6GOrur3Z9PxhXIJlHUA8GxNIPZpthK46MQ4qU9MGHDG%2FYfp9UV8s%2Fb5CGirSRl05aT055hEaTncoigspp5bpa5UzgWRvT7n5gqC1UFmWb7sjQXiZ7BTOVHLDXJ9hcnaRSa3wCDJdWrlUz82tElLqLy4Ay9cG2%2FjN9yqoU54B0HLdDuPEKmDTBwA1vJIOHSM%2FMeOprTWodszc2cjNV6Fu7KbDrypmoWKUATcFUkZhUM%2F4TJ68kmK75cppNff0%2BVgZzqZlqW60EL8YBLLvlVube%2B9zzCUr3QRKNFJv3IO2L7WtwXjIMApHP%2F1zNAxp%2BKGPcimcVawqNcW6T4hvZgoFzoQORuy0%2Br5ss3QOTEOUc7n%2BSBz0gcLMBTUcRRdKu0vFzbyu1b7AquwDaX9Uvpaz0SunRMY6qxBizOeNONFqXDUDqTtZlRjk%2BSTDryOHDBjqkAaNdeO0%2BsosVlsVBhFyKvpH1VwFe5WtWQdgkoyRknGBr9V%2FjIG%2FXR3Wx5ruN5uNcyrccYgx8bJRUiZXYwLS8FIqsGurY%2B2xmKdikuwcxLYP%2BRSL%2Bxl6FA3R2Z%2BKDbo80z9yr%2FVdwg9H8uzKxe21oLotGBxsPiOv4VmnMRnT%2FFblAs7ueI92SJ9hCZODMuPe60uyu%2F4WUIZUok2zq%2FNmceveO3S1I&X-Amz-Signature=aeed2a4f06f541bfa8d1a0de6b6aaef8f8d62c3bd14895df6e5df500d26ff5b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFPLAJ2X%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIG4Iwt3qhGlkG73nO5u%2FZWF%2Fe%2Bgw%2F25qbqJ3HlUNxx%2F%2FAiEAk%2F%2BFxhF1zMsL%2BNkcrMIuuhbPqQ9rJeh%2BC6BCxIjj2ksq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDEdz4bMEjlTMFUo0WyrcA792fy3lNJCh5mb5rny%2Bk1XZu2P9aaDXw%2FxUClpl6IMaUkSqBYwHYlcScaVhfZthg1jMB7pvAi%2BhDpkEhw5O8amyXit5ji3D4uRAiPCN6b7HqBCgKYqwCC3JW2OJV0%2BozAGBwbvbMUJ%2Bq1JziFXvLsD0Boy8TVPMpibm6elP%2BwSEH9thEJVpbUExCuSFVCbrjUbpTSW7YTrnnzrzSpcgdkjJMC57kXpcqV8v41VgePic4%2BbpiIqjias%2B6Mc4nrzct%2FmjiAg%2FDQ6%2BEO2Xi%2BWGFy42TInnvUCtnEzWmo4kIZbEAESGS7osWpc4FFWr3RbcXFH0n5G5RRX0gxwUDuIW6ur4OZEl%2FCnNAckD3wg%2BPMQPcPCwuFM%2FJGhObA2Qg3vzBTZMXbZ0qHlTGYnkMCeSg%2BzLyFYBI1ONwX40BiLleY6h9IUHBRxUY0CihgQPeUaCdrlhI35XRyrU1RVvQcFuWLumEZ0dBYMU%2FMYBO7Wkvx47JOBvGYv2nYh%2Fyx9xjX2PvOtVcc1GrDeG8q02CmDNEirQ8auiAB1EDuzpkWUfe2AOd5THBClt6vB8S4NRWo83d41lY%2F8nsVxM8XtzbDDPTT9s8u0UQnMbKdTo5vaEBsAoqDQV6kYF4llkK0gFMLTI4cMGOqUB4f2kK0ADslQeNnvuQuq2KQbaINM9akIXBJIb11Gp%2FGiy1GBZY4MK1s5DrtHe%2Frd9BJEimRs%2FJRppl8V0L193yDLZyqHaK0fEfe6gg2XTg1qV7ZIuVbBd8hFYL2efC2qG289btPLVZSnraYDCxWzfXfoHykPPkn8TKgHvkVLt77juSe6J4yM6E0Bo3KPpE3UqWtTcWWA%2B1Glm%2FMxxDjWWl7PUKUN1&X-Amz-Signature=a6cb587bc6e8cb5cc3d9681bce7ffdffc997427afd310ce20f3678590ea96c8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB4R3OCE%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIF8xyaQWc6Eu6hhGEV46tDhXsqjiL821WYC4WsabnnmrAiAzwDjGPncs8hzo1tvaAuuATkI0QABtVgIkyqKoFIB6Mir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMtHq6ciIutfi%2BPtdTKtwDLh3S1vn%2B%2F2XYSbTiAT4fUte%2BbypwTxXB02QGBlP7phyfta5QfpSbyZ%2BTOQW4QABd%2B%2BJmPxY6KduUfAZl5V71MWAce1yedFA37U0Hese6UMPOMteB2cxUq2kmBiVgyDUnJQGJO1WBy6cE6KhlUge3TccP3e5foiNR1N8oCLE96Oa4CqJEQJHT3MVUX4fNk6U8cZQsvn3dcIVfihHyWrL%2B8BEu9eo9mIU0mcJql%2BrFG3nsmr1VwGuPKqWK7zp%2Fc9Y27JG6eIFOoSJeLiERvg0M3wo4xs4%2Fnv6alUYjBeX7HFj%2B2558zks%2F7sdfOQ9Lgp0KBdRDSgkkQdce1c3NP8lVfBxt5tLBZZvM6n07APGrS6vdtVWSSLfuxelIYwBfbj%2Bqwx1bfsxwQgAxbphjqJ2aegvc7gugEEpEi%2BeqJ2YycYcTSTs2wED11KnKw6589tMPVsV5NHedYzOg9B3Gs0hZQpHaZhaeDiFw1ZcUm4l0S8W3AxnvK1Wkgp9PrD9UL5fcHuJWaUSKIHby%2F%2FmoiGW18AqWyi%2F%2BLlaAnQPgQxcCVYmKuzzoYw%2FdLTQsoqUwD0EHSkavaKCaHnwTBL7phQBfCKIaaa9gA%2FL%2B7vAi6gU2bIm5tc4d6sbllsheJDIwtcjhwwY6pgFboFfPwqUyqUbz8SMXk4mwJMX1LvNcdgDlt3QZauANYvwtI3NLwQ2fJBmgLMoWue9z%2BrQnmJquodSP8PqJH6tFZQNngbd8I%2FdMjEj%2B4L3bvvhXjmfg3rP8wzldN7VEh5yzCoVoj8NqJlHkaLLgrp3FDtfcaQpY2oVuvnodF35GR0ZzUtDlLDkBN6Ph3heGmbBhoWoGlAk%2Fu7meuF%2BKDgOTHx7nOEG3&X-Amz-Signature=28b9590512005c35d7c5f4f0731cb4e5785f59be65a1c3c1637b9fc9c4988b0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM7MKXI3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQD2cBwDpF26Rb1bLWu72FlMDDXN0T5byYjl0Y9AHOZhOAIhAN4Gh%2B5DNsRp3srVC4LaG%2BB7C7uho4JIA%2FeaLQYPiPL3Kv8DCGwQABoMNjM3NDIzMTgzODA1IgzvUJdfO01LShWVpk8q3AP9xV%2FIpWPHY0Vd0swqfPE%2Bgrq747WmBkclZOmiOur5Obwss5vnrDgMvJE2SHKgas8Q2BNHDFOQiVlAnoJE9tTxYJOgTsFeJzNjklxVvpxxihLNGt7qwMXoV%2F2Cbwo4PtW%2BeAUu8sO6GZcnO%2FvnPcgEgdJ4PPi27XWvAgcyHoat%2B3%2FG6uU%2BuXOfbvrv1XiiD5TESRq6GOrur3Z9PxhXIJlHUA8GxNIPZpthK46MQ4qU9MGHDG%2FYfp9UV8s%2Fb5CGirSRl05aT055hEaTncoigspp5bpa5UzgWRvT7n5gqC1UFmWb7sjQXiZ7BTOVHLDXJ9hcnaRSa3wCDJdWrlUz82tElLqLy4Ay9cG2%2FjN9yqoU54B0HLdDuPEKmDTBwA1vJIOHSM%2FMeOprTWodszc2cjNV6Fu7KbDrypmoWKUATcFUkZhUM%2F4TJ68kmK75cppNff0%2BVgZzqZlqW60EL8YBLLvlVube%2B9zzCUr3QRKNFJv3IO2L7WtwXjIMApHP%2F1zNAxp%2BKGPcimcVawqNcW6T4hvZgoFzoQORuy0%2Br5ss3QOTEOUc7n%2BSBz0gcLMBTUcRRdKu0vFzbyu1b7AquwDaX9Uvpaz0SunRMY6qxBizOeNONFqXDUDqTtZlRjk%2BSTDryOHDBjqkAaNdeO0%2BsosVlsVBhFyKvpH1VwFe5WtWQdgkoyRknGBr9V%2FjIG%2FXR3Wx5ruN5uNcyrccYgx8bJRUiZXYwLS8FIqsGurY%2B2xmKdikuwcxLYP%2BRSL%2Bxl6FA3R2Z%2BKDbo80z9yr%2FVdwg9H8uzKxe21oLotGBxsPiOv4VmnMRnT%2FFblAs7ueI92SJ9hCZODMuPe60uyu%2F4WUIZUok2zq%2FNmceveO3S1I&X-Amz-Signature=a75c7fff7d88879ec476311e3a0e557dc10596170f881296615539cdf1c81ab8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
