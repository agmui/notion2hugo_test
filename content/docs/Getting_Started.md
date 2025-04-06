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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGTTVJPQ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T080922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1omRooX56KdUtTd2gCRiLB%2FUA%2B6YcQaodnR6NeLaghwIhAMm6KnRxtDBMRhkgTsJAT2proE%2BatrBAn5D%2BCD5ENyYcKv8DCEAQABoMNjM3NDIzMTgzODA1Igzg7kKE5Jy4GakIryMq3AMmFzJeBEhl6BnOGU5cekBpuQ21Finznf088fxp6Tit5WLmL1HtjRxGTl%2Bm%2B9f4qtudPF7hB%2BIRZvMiEkSisxKWXtTlePU47Bm4pMSl5MHLeGjHRsApDA%2BCa2hU9%2FP1W6PJLVy9NZtjII5KNYwptSmJmpBVJVKCJsoZsdKYCg1zArsvDS%2BWzSyVr4WEOVCKq6nTFk0vwc%2F%2BLrYzGw5Y4IK7XsDruEuKnNTp7DpOREWx16DhRSPdjOg24yJYJuTqeAXE9Ay6Z4C8ByRWflfYP7NrcVYICy5E82qVbfKoN%2B7GE56hD3q640PbKCaHulRSxwszUhfGgp41xDZJ%2Bnv1OfrYXFEUKR1Tp%2BotFsbMj1l9hDXnalc85%2FpK4TPx2ltYwzs%2F7Nbo6uhHx%2FsrBKgZS1F%2FgBn4V6oACqW58c1%2BaGVMVllpj7PvmiQNL%2FUq%2FPPOlnwihlmrCghouAIrFijnyOL5QY%2BRQSkZZRFq2kmLAu%2BXCUlvdvdu9T1adCXGNQeBZprynE40U4nZXu2UhRSvh6suJLElztxEQ6VwW9XcRlBI%2FptVDIloFOJ7DTYQDI17X9CZTvONVuMAOgtzqIg1c2n8N9UmGQFm13FETAVCyo%2BicnDBKx6H1kcgOM3lajC3wMi%2FBjqkAd5KbshCt2eUYCOaYet2PEmKiLBiNM3fTFAqETgVZyk7%2F8VnLt7Gf%2FGqzHDSH%2FIajDT68Szs%2B0nJxHdleluChoK8HKsIrU4rKirYx0DTPE1hjxDnXJcMFBoWPYiNu%2BSQADpcoXX8lsf3CVeACq3U9npAcMqXvuhqbXXi6%2BdqkErddh2C4prI4EGHhWrVEapgwv%2BXOomy8eZQKQLxOiWbxg%2BW7y7x&X-Amz-Signature=6b8d674af82dc84735ae366b1e0b7408cd167296914c0015ab796a91c81ccfb3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGTTVJPQ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T080922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1omRooX56KdUtTd2gCRiLB%2FUA%2B6YcQaodnR6NeLaghwIhAMm6KnRxtDBMRhkgTsJAT2proE%2BatrBAn5D%2BCD5ENyYcKv8DCEAQABoMNjM3NDIzMTgzODA1Igzg7kKE5Jy4GakIryMq3AMmFzJeBEhl6BnOGU5cekBpuQ21Finznf088fxp6Tit5WLmL1HtjRxGTl%2Bm%2B9f4qtudPF7hB%2BIRZvMiEkSisxKWXtTlePU47Bm4pMSl5MHLeGjHRsApDA%2BCa2hU9%2FP1W6PJLVy9NZtjII5KNYwptSmJmpBVJVKCJsoZsdKYCg1zArsvDS%2BWzSyVr4WEOVCKq6nTFk0vwc%2F%2BLrYzGw5Y4IK7XsDruEuKnNTp7DpOREWx16DhRSPdjOg24yJYJuTqeAXE9Ay6Z4C8ByRWflfYP7NrcVYICy5E82qVbfKoN%2B7GE56hD3q640PbKCaHulRSxwszUhfGgp41xDZJ%2Bnv1OfrYXFEUKR1Tp%2BotFsbMj1l9hDXnalc85%2FpK4TPx2ltYwzs%2F7Nbo6uhHx%2FsrBKgZS1F%2FgBn4V6oACqW58c1%2BaGVMVllpj7PvmiQNL%2FUq%2FPPOlnwihlmrCghouAIrFijnyOL5QY%2BRQSkZZRFq2kmLAu%2BXCUlvdvdu9T1adCXGNQeBZprynE40U4nZXu2UhRSvh6suJLElztxEQ6VwW9XcRlBI%2FptVDIloFOJ7DTYQDI17X9CZTvONVuMAOgtzqIg1c2n8N9UmGQFm13FETAVCyo%2BicnDBKx6H1kcgOM3lajC3wMi%2FBjqkAd5KbshCt2eUYCOaYet2PEmKiLBiNM3fTFAqETgVZyk7%2F8VnLt7Gf%2FGqzHDSH%2FIajDT68Szs%2B0nJxHdleluChoK8HKsIrU4rKirYx0DTPE1hjxDnXJcMFBoWPYiNu%2BSQADpcoXX8lsf3CVeACq3U9npAcMqXvuhqbXXi6%2BdqkErddh2C4prI4EGHhWrVEapgwv%2BXOomy8eZQKQLxOiWbxg%2BW7y7x&X-Amz-Signature=305cad4f3d12ca25007f178f1bcae1ddd30bc0a1d865cf33fe9875cba65b31b8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHB5LSRF%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T080927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0Mo89PhETjm%2BhRNSoMswnxY4nbg3DF5fctr0Ot9L6RAIgW1oozydbYlmWtMRBfbL%2FjdKVBDvzZzqqe%2BfosMilPfIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDKBT1QukgZRqXe6%2BoyrcA%2BfmnQLqF4F3KdWf%2Ba23hSf6rd7swjlXEYJmMg0wsunfJC32gZprx5Eb5%2BZpukOb3wtcrZrjiDxF2%2FtvdUV7ppWm%2FcRIZpFIDjoNvjr90o9OsWiosK1s6bH9Skm63sjdwEPZrQPEHux2DK5pAGJ8DGWF4Q70BU5C1xmRdqPe5L71A8AQY7rfwHgYwPZyhFHfInN8Z3slDH4fnSBe%2FFlnnls6aG%2Bjj8DSpAlisu3swy%2FPB1OW2FNawGesJKpdjXMYeYc2hDGw6prckgpkBCV3EoMxyHu2HsQfPTb8iHcjasiZDkN2wLc0w5ZmYHPnXCKFApWYWlTy61bClm9Qbud%2BTzLpj96h58jmU8i9X2adeScNCzNeffHGqSMWYV9RdGtMvixRTrjW7GooGtGGx6PnkfHz%2F8MRgWvFqIJrOOKK%2Bmp6BKvtz8FPvxm2fsQ4sZVDFm4OhMn9wRXjaCCsfHFN6%2BiZ0RBEFN%2ByS5AT%2FF46LKxIUdaZtm2A4m%2BBKU4EAcWX%2B3TMob1O6tzdAYvjmdLQm4mvlm9%2Bwo2OrNAxJ3z%2FCYDUJxQOOsD6Bp6XaENZusFGiMfmHLqtI4z6vBl%2BEXaXTnEGTMtslP3ejtRnwWwFL9X2Hcb06IHQ9gbVn11%2BMMnAyL8GOqUBHyfa%2FjHVNl1Pe4YQAYIWQ2qXzP263Gxx0ZGE5YmVu7arc9P0yTnju0P35jcetT9NmNay3WfQY2gt6LCftTJj4fBYq554mVQiDIc1qRyugU57I8u1MuCiMR4aFSbFdyWwWv41PQQvLdEiNzlaC%2BbCcmh5FlqRVQjZHnZRvjZBholdBYJoGkP5VkaHQy2QQIYscx%2FQDY1N0kgKSvCQX5iBzCQb23mN&X-Amz-Signature=1476b91470e1c54bb5678efff48b601ac548593a2e074c58cca90db63c47d283&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466263T4JVF%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T080928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFEixhNHGmuZWANjRCwb4vpLqOkjrohOGgrYSLVSO4qAiAKRrHZI%2Fxes2OfwTCX4LUpxn%2FZYEJglpPywf4yJc9zKyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM%2BZcbaCZGVmTJVZW8KtwDcC3iy24aqt40HiPBt%2BIF5oRrHHFVxqpHU%2FltboZWJ5lNgwp6KItty7wjetWd6MscQoe3LefrraNTKil5s9bm07e9KXSYfh%2FDTLdOWK%2FjZLzJo8%2Fys7GZ%2BEFZM9D040%2FfZIbaSew3I1%2BWjO6tklegwDqY4ZGlkiFhAS6c1aCIpVbJNB4rRBM4Pm44dJjZZd6ByuSe1Oi4X0dYKzUekXxdm6tDmBidLRe8hxESk6e3cRMnDUU9tJbK%2FFxqTz6BFnmlw4ly807X1FYvNSZhsQ081tT04YkIl5TgjyQPzGdVE2WNS6LYjgz%2BsCXpAMiEPK6BE1S%2FekB9POAYuey0VM%2FVi%2Bxfs9b%2FgvSwE8rf2Fn4qU%2BX9aYmb8WC1bgEPCWFYDROgbIuaOO3D23wBGKe%2FtAafpZDVVaaEBOUieg2sHdN812GiObcRyTGpIsYz37R401p%2FZBeUl3NoSKteVLxG%2FDvaNnzdrh5QCzC2Y9oXCDSY5zpaNtwFPLQBfO%2F4hATVETIZb09nkN1G0fIoimChwBYZZ4ImKn4CLUSt%2F74SdGlbvLmPowkl2RHopX392YrRRGE%2BgT%2B%2BTI9sOUppuwWhoACVnnulLJdtCW%2FTdtK76ErZh1X3VR1J4GbAZId%2FJwww8DIvwY6pgH5%2Bum2stwMIrLzVJAm9t4YNxRAG6vHwuurlL7ElOgqOMiInuVQ0PWnm74o7krf461jS%2B5O0FU2Xt%2BX9C%2B6mixMwZrJkCkBsGdxrgIBgCF7aNtz3y2dFExPXrDbj26xER77WwZgJQFwHdw4Yril5LGw%2FE%2Fl9T9XNt1NKUzqw%2FTxSVjsiyaVsWXdM7kVkNxbkUW5za%2BkVySAU7qRuLYkkt%2F0GW4IZjOO&X-Amz-Signature=cdba5f3d0df567000d933474a611cdac65492b7874a5b1a4146b7f057fd3356e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGTTVJPQ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T080922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1omRooX56KdUtTd2gCRiLB%2FUA%2B6YcQaodnR6NeLaghwIhAMm6KnRxtDBMRhkgTsJAT2proE%2BatrBAn5D%2BCD5ENyYcKv8DCEAQABoMNjM3NDIzMTgzODA1Igzg7kKE5Jy4GakIryMq3AMmFzJeBEhl6BnOGU5cekBpuQ21Finznf088fxp6Tit5WLmL1HtjRxGTl%2Bm%2B9f4qtudPF7hB%2BIRZvMiEkSisxKWXtTlePU47Bm4pMSl5MHLeGjHRsApDA%2BCa2hU9%2FP1W6PJLVy9NZtjII5KNYwptSmJmpBVJVKCJsoZsdKYCg1zArsvDS%2BWzSyVr4WEOVCKq6nTFk0vwc%2F%2BLrYzGw5Y4IK7XsDruEuKnNTp7DpOREWx16DhRSPdjOg24yJYJuTqeAXE9Ay6Z4C8ByRWflfYP7NrcVYICy5E82qVbfKoN%2B7GE56hD3q640PbKCaHulRSxwszUhfGgp41xDZJ%2Bnv1OfrYXFEUKR1Tp%2BotFsbMj1l9hDXnalc85%2FpK4TPx2ltYwzs%2F7Nbo6uhHx%2FsrBKgZS1F%2FgBn4V6oACqW58c1%2BaGVMVllpj7PvmiQNL%2FUq%2FPPOlnwihlmrCghouAIrFijnyOL5QY%2BRQSkZZRFq2kmLAu%2BXCUlvdvdu9T1adCXGNQeBZprynE40U4nZXu2UhRSvh6suJLElztxEQ6VwW9XcRlBI%2FptVDIloFOJ7DTYQDI17X9CZTvONVuMAOgtzqIg1c2n8N9UmGQFm13FETAVCyo%2BicnDBKx6H1kcgOM3lajC3wMi%2FBjqkAd5KbshCt2eUYCOaYet2PEmKiLBiNM3fTFAqETgVZyk7%2F8VnLt7Gf%2FGqzHDSH%2FIajDT68Szs%2B0nJxHdleluChoK8HKsIrU4rKirYx0DTPE1hjxDnXJcMFBoWPYiNu%2BSQADpcoXX8lsf3CVeACq3U9npAcMqXvuhqbXXi6%2BdqkErddh2C4prI4EGHhWrVEapgwv%2BXOomy8eZQKQLxOiWbxg%2BW7y7x&X-Amz-Signature=cb3a703c2d0b653da07f4661a2e9ece1253c08e08208fae161a908d8b473728a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
