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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2CO36C4%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T050704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCkVzj5OzCY63fAdTMATcubU3fKVqKfsfQMu3UtbnJjAiBuXYnE%2FeWZqNMr3gBYKPQeGDQnGhK8eCrs%2Fti2uY6PlSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeDoXionzqRYzhBR9KtwDWp%2F0YgBtSP85%2FaViYpOCvvZBsCCYFlkpc5PKuyiu4ah%2FwByzRobG%2BoqrpiwDrRaBAKcYRvVrxugNCfFudTorVo0VJ9mnxsyZhopzNsQyyLsqH1ug4qDzEf46aOAIRi7I8ZTTq6Ogfz1FohrCf%2FK2Qq%2BlUHYQh7Js9RlAF0V%2BKz83qVOxMm5p0EBKOMrm69LiHa7uvtSUYfT4XKw8KzLb3yYm7V9zx6HPs8Ybc07TfUZEEyaf5R5LZD40yx9tpXqyYmWbqBYDJGj1fWxj58GTaSYK7t9C6q%2FzKOIDBEvLUAtJymbfUVlpL1c0%2BPX%2F6%2FFL5z7Q%2Bztw9fNLlRQ7jbP5gx8CeZFseX2CWL2uV8Qc5Ylwipl4aH%2F9e1CwM0bI2%2F%2FlmKQeVApjIqSnpYfIdgZ7QA4Sce7ZSow%2BKK6%2F47RBRE7ej%2BXasVeizsMNUb%2B1C6jBuOS2ougCEdbxE84di%2BYMrURI5mW4bBy%2B11k8KK7Jw9Snsq8qU1X0iHDOvwqesCfKXfPxLITUiJ%2FvFKGqWMEu3in3t6mS8C32xI7y1iaquSrH4MlRvLAu7gQbgE5%2FLsSZJGECE4qgtYePgyeyuLZMQWdmunsux%2FBVPl6AJsivHx8fKHUM%2FLDaUtJUj9Mwrr%2BgvQY6pgHeY61DN6KrMkSjdnHNQucTHL4qilkBOmQgwiQBwJT0C1%2FJQbLLgCZhTwLy7fHduyV7OCp5EK5qQw64Et3XNEqQy0PMdq28KkoyLuU7GmcWqJDam%2F46kvXLVMiZ4j2JgghUgtvmP6mvN4qhOK3N6%2BB9KxRSLJ0pszyJB0I%2FuujWac60SIOT5YelRq3O5kvSdoiPbp8owcy%2BvW1o44ec%2F4aOcxt9xQtU&X-Amz-Signature=8525cf43ff78d92643b7666580e102d07153e5ab43f39c50791c7c6a99eaeeb7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2CO36C4%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T050704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCkVzj5OzCY63fAdTMATcubU3fKVqKfsfQMu3UtbnJjAiBuXYnE%2FeWZqNMr3gBYKPQeGDQnGhK8eCrs%2Fti2uY6PlSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeDoXionzqRYzhBR9KtwDWp%2F0YgBtSP85%2FaViYpOCvvZBsCCYFlkpc5PKuyiu4ah%2FwByzRobG%2BoqrpiwDrRaBAKcYRvVrxugNCfFudTorVo0VJ9mnxsyZhopzNsQyyLsqH1ug4qDzEf46aOAIRi7I8ZTTq6Ogfz1FohrCf%2FK2Qq%2BlUHYQh7Js9RlAF0V%2BKz83qVOxMm5p0EBKOMrm69LiHa7uvtSUYfT4XKw8KzLb3yYm7V9zx6HPs8Ybc07TfUZEEyaf5R5LZD40yx9tpXqyYmWbqBYDJGj1fWxj58GTaSYK7t9C6q%2FzKOIDBEvLUAtJymbfUVlpL1c0%2BPX%2F6%2FFL5z7Q%2Bztw9fNLlRQ7jbP5gx8CeZFseX2CWL2uV8Qc5Ylwipl4aH%2F9e1CwM0bI2%2F%2FlmKQeVApjIqSnpYfIdgZ7QA4Sce7ZSow%2BKK6%2F47RBRE7ej%2BXasVeizsMNUb%2B1C6jBuOS2ougCEdbxE84di%2BYMrURI5mW4bBy%2B11k8KK7Jw9Snsq8qU1X0iHDOvwqesCfKXfPxLITUiJ%2FvFKGqWMEu3in3t6mS8C32xI7y1iaquSrH4MlRvLAu7gQbgE5%2FLsSZJGECE4qgtYePgyeyuLZMQWdmunsux%2FBVPl6AJsivHx8fKHUM%2FLDaUtJUj9Mwrr%2BgvQY6pgHeY61DN6KrMkSjdnHNQucTHL4qilkBOmQgwiQBwJT0C1%2FJQbLLgCZhTwLy7fHduyV7OCp5EK5qQw64Et3XNEqQy0PMdq28KkoyLuU7GmcWqJDam%2F46kvXLVMiZ4j2JgghUgtvmP6mvN4qhOK3N6%2BB9KxRSLJ0pszyJB0I%2FuujWac60SIOT5YelRq3O5kvSdoiPbp8owcy%2BvW1o44ec%2F4aOcxt9xQtU&X-Amz-Signature=e7016ea4a7c73941fbf64d3b8e5d2872f6b33edc09cdf892ce7c68f9e1bc19ac&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNYEWDYM%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T050706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdLLWuR4YHlZy%2F2N6EK84naCwZVeGYuVH%2B9VpHXp9nFAIgda7hGqUlyDfdQeNrYQIGQIwklGWhEBrIGqp6FEbZbbIqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHU03aNTvS8X75o%2BWSrcA8oXEFSoGBH9eM2JYTwZIwog3ym7BS%2FD6itOLI6He1JdxVVShEZTzWk%2FM5sWUmZViVLmL15l7wmUayk2K%2BQIumUHZWniccYSzaYsMd6DLp%2FF6VaMrZ7f3O%2BIOAVaLGo%2F6Cp2wGZ3int8MvWtr80lnbi%2Fh%2BRQbY91oRj5Ad1xMe6zTVlPuikz0do0laWwIQVRrTYPlO5cFIUlhsIf7%2Bl%2FNNXE06S3ZyYYb076ituhIpHC3IWoHIB3RRv8tj%2FZb99aFsmaik%2FcwNfN%2BMNcxnGyFjN%2B1xfgtt%2BRHxEtyLyuxgT7rXATqEtqUiNjCzEfUY07hh2Qu2SOqXojpWaVg6VtdT7xQL51meWV5LpuWu8KFLHiKpUxRr6pTbK9hQ16cSceIz6cauItgaZWAkpT0dG7WB3kFbxDZtiT6hjZ1gn4KgZlLCIYKXZxrQavydqCROH89d5OxQwLbyuUFwaKEwnEGgDchOqcVDvtwUcv9%2BQqr%2Bg3Rr9w4G5ml3ki8HzxSI6jd8MYSNMk0xlotOHsnEIJPrHDmA4vGLXYG4R28FAeKXkU6OMRTHN1nRNOkUb1wvRCJVbfbs61r3wxJ1Qh3Ddztf7o%2BuzYkDe1vdM3M1Cqik8qjUfpvZBo4KjG3lVuMLG%2FoL0GOqUBWDHKg3TthwXrrWcz1LQsoYxb0pRkVE4rF0VAONgDLJ2L0%2FMsP%2B9FKX9HPV32M9aJqIgbYIoiJ0wxO1DQ7O0lPRU1nj1a9P24cqDDJv8AH7I%2Bdv7xLdzIsEtrhmPvmUgTd6JSMu3rgI3NHA6JZzpqBWJzr0Iv7jy34VsYM5dGC%2BzOL11J3dP%2FTcFW3wCKD6W1Sc6HwUQag%2Fxq5TDL9JzMuhiUHwRl&X-Amz-Signature=8a19f6a94afdf4de0ebdb177004800407234cf1e65cafcac2ef72baa574477fa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PVVW3OI%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T050706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRy1TuKKXI9dWeRrjMKuC6lv8UXGVCtkQx9SmDSHM7KAiEAv1VYXEIkaqa4FFqHEMCr7u05MovbmvodABgZ39irYnAqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsc9oZTBXi3imnhHircA4HZ%2FZw72NaE6HhMVUZoTVChCI1bs9VnrcAd51kVrBNiNMqSS99LnKll%2BCAQG3cOK1oo1hxPKq9AEK1r3rxtva2m5yyCgoz0eHjlH4ompelDQ5vqXQal%2BLYOBycO0IDVRKFOKooebeySFuOUFTv0iVIlIDeSOEABcyqtDP8zQBYz3qRXcqTfTqeRVVicjTFhTAPTyfu0d8gRZb4n2QLHpm7s%2F0vXPAHN3sR3YO1%2FdvA0l75KjiRPM20E0KQ4JHYT1UJ76xaPPXmvhh8vvxD3sKupDG33AI9CQEIJUEY4d87VzzIHNJpD8CN%2F4Zie29p4kKXlOGsooW3bUdStgiPQp4FBXzRSEGtnDq%2FTn4Zw5wek671b1pMEMuuDAwnQfNhAs2jcuLBX%2FkaYxotGnQX55s0H06ygB6V85IbSqXKeqO1ejrtfTrAzpURggdQLrhF3lPNQk3t59AF7fzXLHA5F7S%2BZHD23VVdFxcvVLFsNFCtlcdRSz2Ok8%2FVpFLQliOOjuIWN8f0g72uhwpbHM0nNO%2BD2PCpjGVi81mZPspMEF25lboJQJ9EivzoeuXKgvHCBK9FsfQSqq3CpdmlaUJaddoQEu85i4YLPJ%2F%2BADKSjTZzWn2wikCwoOp5wqAdXMPS%2BoL0GOqUBv2ugU000gFDrbHsGUKK1%2BWcsc46YeV4PPWE2Vn6iiaUbBCdysyll4QptMdYlMlsGUo665N5mpg2DOw5Y5KtRJjHL0HIRLlUpn3ktsI%2F2ggA3QmH1B9HI5WFd9GHaId0zDj7PFP5kvu%2FbdCMAUSpg6AFcL8lMdRNLQ8PQU1KqHQ6%2BtFg0oPjhKyuQOqkuq8EON6wBpmX85IBmazZ7dFLriDYjGM2H&X-Amz-Signature=b06768bfc5a2ff5c94042543b31fcd350dc69785c74fe6ff77dc42fbbed41bbd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2CO36C4%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T050704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCkVzj5OzCY63fAdTMATcubU3fKVqKfsfQMu3UtbnJjAiBuXYnE%2FeWZqNMr3gBYKPQeGDQnGhK8eCrs%2Fti2uY6PlSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeDoXionzqRYzhBR9KtwDWp%2F0YgBtSP85%2FaViYpOCvvZBsCCYFlkpc5PKuyiu4ah%2FwByzRobG%2BoqrpiwDrRaBAKcYRvVrxugNCfFudTorVo0VJ9mnxsyZhopzNsQyyLsqH1ug4qDzEf46aOAIRi7I8ZTTq6Ogfz1FohrCf%2FK2Qq%2BlUHYQh7Js9RlAF0V%2BKz83qVOxMm5p0EBKOMrm69LiHa7uvtSUYfT4XKw8KzLb3yYm7V9zx6HPs8Ybc07TfUZEEyaf5R5LZD40yx9tpXqyYmWbqBYDJGj1fWxj58GTaSYK7t9C6q%2FzKOIDBEvLUAtJymbfUVlpL1c0%2BPX%2F6%2FFL5z7Q%2Bztw9fNLlRQ7jbP5gx8CeZFseX2CWL2uV8Qc5Ylwipl4aH%2F9e1CwM0bI2%2F%2FlmKQeVApjIqSnpYfIdgZ7QA4Sce7ZSow%2BKK6%2F47RBRE7ej%2BXasVeizsMNUb%2B1C6jBuOS2ougCEdbxE84di%2BYMrURI5mW4bBy%2B11k8KK7Jw9Snsq8qU1X0iHDOvwqesCfKXfPxLITUiJ%2FvFKGqWMEu3in3t6mS8C32xI7y1iaquSrH4MlRvLAu7gQbgE5%2FLsSZJGECE4qgtYePgyeyuLZMQWdmunsux%2FBVPl6AJsivHx8fKHUM%2FLDaUtJUj9Mwrr%2BgvQY6pgHeY61DN6KrMkSjdnHNQucTHL4qilkBOmQgwiQBwJT0C1%2FJQbLLgCZhTwLy7fHduyV7OCp5EK5qQw64Et3XNEqQy0PMdq28KkoyLuU7GmcWqJDam%2F46kvXLVMiZ4j2JgghUgtvmP6mvN4qhOK3N6%2BB9KxRSLJ0pszyJB0I%2FuujWac60SIOT5YelRq3O5kvSdoiPbp8owcy%2BvW1o44ec%2F4aOcxt9xQtU&X-Amz-Signature=401827a178e31e82abaa154fe2c0ece4ddcf98bb570e6898e0cdaad08255dfd5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
