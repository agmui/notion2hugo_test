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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZQPEY4F%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T150137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZwYSF1PFQJZ3dsrPhX8fYgkRWfg3yzPJfn2MenFwM%2FAiEAiGK4%2FdwVGAt%2BPTKYEJMLWHrXacf5O3zm0EOejJwSyssqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpTle8nn37%2BDHyUcCrcA01yL3eVRgmCq3QQ5CbCpYb%2BDGfrBpB6mNheHB0hjN0v3liMPl6jgBEnN17Hh5ZIvMM6cEG6lh5TTIaEuqMr%2B6ng2%2FZskqGS43fiymKrXBq0TGxAK2cr91c4KN4rgnQkLfYSHsmIAAoetNLfDiKuIjMRjktABHxmNsY0CZyROaLRjAJb47%2BKtq224JAmuBB1DVm%2Fkj6likFnbTz3m4NLLw3XL2j3DTWv%2FUOT%2B5lj723dthuReJrdySRBNokRb2wCH892wAlz40TjMFfpmdNeqYy225KyhaqHDEVeqHeTtTav00L4b5aQLsWYYrBu5NGXIrtpsZ3MjA2UEnS3XOgpVZ2Ektb3mGb3bz3z9Dan7RgPM2S9vFiRI%2FWxwFyq7EyjH7%2F1SEkFaMXbNrukgMhCXBIaL%2FBugKKsGw%2FrUhY49d2Ip5iv7aj8eyL43pgi%2BiNAUm%2Bz2ez9XLrxMXcSKDYs0bePUTE7CgGY2V%2FSb4t4S0IrRBIywQw4EYHRmM6t6kTuMjqX4wP4EENAEcxvJ8qOTX2eHr6OLn4F%2BhSB%2Bi7V9CCCK2lr5ZA6xTLJrXMefFYD2K1gIF7eyf9%2BdjQ2rfkP%2BltXxnAPejriif%2BGdJfSy53F9WMvUcBm2EAbmj3FMOHjob0GOqUBIbm%2Baq5wmFf7Dhr85iP8%2F6uI8hcnLnyZsVo%2FaYurhNQsvYpKrUrW8Wg0j0PocNrQdQL%2F8zF9dd0kH3LfLPwggBPpqg1vGfoXs9aWH1MVSh%2BF6k%2BJ8HzGULc2YdOVTAlKr48mGGJDor1ObYdnLhIex79mdbQOjpaMYcyYzlzZt2wSHqHmTm1AGU%2BfJEK1MLTD2N0T86FeTaCvtwZ%2BDK1985KNvzcf&X-Amz-Signature=b35d1bdeb2ca8a700e5192f66a7e06256a5d9380c07656589a1417a518d5df17&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZQPEY4F%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T150137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZwYSF1PFQJZ3dsrPhX8fYgkRWfg3yzPJfn2MenFwM%2FAiEAiGK4%2FdwVGAt%2BPTKYEJMLWHrXacf5O3zm0EOejJwSyssqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpTle8nn37%2BDHyUcCrcA01yL3eVRgmCq3QQ5CbCpYb%2BDGfrBpB6mNheHB0hjN0v3liMPl6jgBEnN17Hh5ZIvMM6cEG6lh5TTIaEuqMr%2B6ng2%2FZskqGS43fiymKrXBq0TGxAK2cr91c4KN4rgnQkLfYSHsmIAAoetNLfDiKuIjMRjktABHxmNsY0CZyROaLRjAJb47%2BKtq224JAmuBB1DVm%2Fkj6likFnbTz3m4NLLw3XL2j3DTWv%2FUOT%2B5lj723dthuReJrdySRBNokRb2wCH892wAlz40TjMFfpmdNeqYy225KyhaqHDEVeqHeTtTav00L4b5aQLsWYYrBu5NGXIrtpsZ3MjA2UEnS3XOgpVZ2Ektb3mGb3bz3z9Dan7RgPM2S9vFiRI%2FWxwFyq7EyjH7%2F1SEkFaMXbNrukgMhCXBIaL%2FBugKKsGw%2FrUhY49d2Ip5iv7aj8eyL43pgi%2BiNAUm%2Bz2ez9XLrxMXcSKDYs0bePUTE7CgGY2V%2FSb4t4S0IrRBIywQw4EYHRmM6t6kTuMjqX4wP4EENAEcxvJ8qOTX2eHr6OLn4F%2BhSB%2Bi7V9CCCK2lr5ZA6xTLJrXMefFYD2K1gIF7eyf9%2BdjQ2rfkP%2BltXxnAPejriif%2BGdJfSy53F9WMvUcBm2EAbmj3FMOHjob0GOqUBIbm%2Baq5wmFf7Dhr85iP8%2F6uI8hcnLnyZsVo%2FaYurhNQsvYpKrUrW8Wg0j0PocNrQdQL%2F8zF9dd0kH3LfLPwggBPpqg1vGfoXs9aWH1MVSh%2BF6k%2BJ8HzGULc2YdOVTAlKr48mGGJDor1ObYdnLhIex79mdbQOjpaMYcyYzlzZt2wSHqHmTm1AGU%2BfJEK1MLTD2N0T86FeTaCvtwZ%2BDK1985KNvzcf&X-Amz-Signature=d2dec9452a4af4cb66c45c18ca25edebc9b91c04d8e694b448a54ba21a478c4a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIYVBCBV%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T150140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWJv4GdKSpAHknPNYRTf0sI2JVaqSqXCO4MeVTYBmx%2BAiAzNz8lXOwz0zWGd4iFDSG0%2BYPHmIwecT8UZxKd5gEUdyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWn5%2B85bFBzMbjYywKtwDI4Tv37LFwRKvQ5ilZZ842eSeEcNELDwz32o2oCtKAQJnm4R2ojGD3QntScVB9YEpP%2FR9Wefs229aLE0LwMgrg%2F5o9sf8pxc2yt0rwA5d33%2BOGnaabZ53ZlZHZNbX56mtSbx6ip35wcprGe%2FAJYOa877aC0qXYBhtx2ghuSAhiYpHBYgiXjWhJd%2FCg0SnVFUD6twAR3xUZDF6WecOXS%2FyxzeFkjf%2BC84ECa9ZZdp7WnumVEd7XkqvA%2F%2FrN5B8EB%2BtTNlfFrGyqs8LEtTy5r9E2aob2fUr%2F%2BsDor%2FycG%2BPb%2BUVkP2mfPJ4xUtVBgLKPByXO9CJ%2FI3zFV4STCkslebbqN7pN2w9IxWz2TVie%2FZFYFRmHkDqlNuZxtr8%2FYM1ZDeaKUJuz2c0VrbfE5%2BJHQGsqMYBzXEoOE3vEUaFVILK44Xx9HL3UXod%2BVgoAG113Rv1EDbDq%2FjSZ0WfjJhTvuf4zAYE0qdSUrJ5imURtaMmZqcThIJJyAReCY7evNLxhaHEhppnUCQ442Y%2FEU1G4FlUTHUvGXlkohpNb%2FoUxBgm3zqKgjDMz4gufY0q2f3By1MZYAfeImUVfTVuD75QJ3Da4mjhmrWFo5V9tWQ8O9Myr6RGt1i11Fu2RYdVX00w5uOhvQY6pgGa4tMQzIQmKtjNkMtMjMxU5DzrZstXFtj%2FAf8%2By6%2FVu%2Fw6rQXLWRKX3hevf9Ptu7RUp2kHViFH7gGDEyumBeZRMvb4ORRhEgH5hnaVxecfBRGdJq8QGIrR5tOI14RZABsuli9w94kqi3LcUmQblNHUpXLj8jY0T3bs%2BnEEHvm78I7qptQiNaLwhGeWtfM3K8QoPTQBziwzeEgHd8Mu698BzDvzuwPU&X-Amz-Signature=d9176293146f856fc271b4e10aecb2bbb6d625b64d8af0f0f411304577e8025a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466567O2HER%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T150140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRbS9xFiTUZdyVEvBcTzgTEkbjz0adB2s8oU%2F6lKRQ6AiAEiBzFq2XHVUJoaA3ezwwjI%2FrYFzcMXxpRL4bMmuKdUyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUo7EmO1k77FpLNLFKtwDEkfws3wTpdCS5KpmNEGJCU%2FjHE%2BNURK2IUXmQQWev7y4d%2F3%2Fj0iCn2kGkik45NQxk9W6FdCo5Npgt9WCg9sRQICLy8uKBaGeSr%2F%2FvegH5K4r7I8S89m%2Fhbq%2BimSG%2FVg0QvL7GPoX7JvOTilm1bRln03reHRUzFDwatfVK2LkOEf6fCy3W4fTeRDLPhQ5gvhJGCvI5EMFHTRQAfUgTJJ652zY4SUhhPqb45%2FStgorGW5unWe6WrJhIf8i8tSTCNUw6KpgD9ir2XPnz34QUJsIyLfcAFRWLiPmmqJOkwwuS4SDLnp28WbZ%2BgR6nQ1moeUZdRtEY6%2BEvcoPCvWFr%2BrA6YnD7Mv7LHkIau3RI3F3%2FhODOlnR%2BFbQBVmegMX2FbuBCyVaTzElxLeZoiB8aZMePR7J57CpJVExT4nrCZYkuqGD197kESsKyUbttvGZKEctA1BjJcNH3zOgof6wekbNRW8YIfCyjMCdV3gD1bgi2uWf9LrlLJ3bEIGm%2B5%2Fm3j2Y7v3YOYI6n8T34fvpaRzDDURaZ2bdfsnlo5rM%2F3qEGp0uwGZ3MdFOOxhMyWsD2gV0NsSjZgOvrlnkigX2jTgpOGYQXPwkSTGWMYvgHe0R4zFVsl%2BXr%2FN0fMOz3fAw9uOhvQY6pgHgDE086S3w1xNAFX2JT5rTONwUExuaVUCr9oWcFZK7YefFIPEPTxni9fa8xecEplYBzciyyepSZIkWHZe9PrzEjCLE1SX2FkwYoqpqIWXldiRog5MNeDxERDH%2BXugGkq85XamQW21%2Bhlhcqy29vEOSVGF27H7fdBTc60fo2mBYPOxO7%2Fsktbfl9w%2B4nEs9QQz3eJ%2FQkZs3StSM12lnMh4AMYsd4vKu&X-Amz-Signature=882bb54bd554947c39b55ea4cc9561a61b99683ed55b4ff1ef6e0433a94109d5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZQPEY4F%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T150137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZwYSF1PFQJZ3dsrPhX8fYgkRWfg3yzPJfn2MenFwM%2FAiEAiGK4%2FdwVGAt%2BPTKYEJMLWHrXacf5O3zm0EOejJwSyssqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpTle8nn37%2BDHyUcCrcA01yL3eVRgmCq3QQ5CbCpYb%2BDGfrBpB6mNheHB0hjN0v3liMPl6jgBEnN17Hh5ZIvMM6cEG6lh5TTIaEuqMr%2B6ng2%2FZskqGS43fiymKrXBq0TGxAK2cr91c4KN4rgnQkLfYSHsmIAAoetNLfDiKuIjMRjktABHxmNsY0CZyROaLRjAJb47%2BKtq224JAmuBB1DVm%2Fkj6likFnbTz3m4NLLw3XL2j3DTWv%2FUOT%2B5lj723dthuReJrdySRBNokRb2wCH892wAlz40TjMFfpmdNeqYy225KyhaqHDEVeqHeTtTav00L4b5aQLsWYYrBu5NGXIrtpsZ3MjA2UEnS3XOgpVZ2Ektb3mGb3bz3z9Dan7RgPM2S9vFiRI%2FWxwFyq7EyjH7%2F1SEkFaMXbNrukgMhCXBIaL%2FBugKKsGw%2FrUhY49d2Ip5iv7aj8eyL43pgi%2BiNAUm%2Bz2ez9XLrxMXcSKDYs0bePUTE7CgGY2V%2FSb4t4S0IrRBIywQw4EYHRmM6t6kTuMjqX4wP4EENAEcxvJ8qOTX2eHr6OLn4F%2BhSB%2Bi7V9CCCK2lr5ZA6xTLJrXMefFYD2K1gIF7eyf9%2BdjQ2rfkP%2BltXxnAPejriif%2BGdJfSy53F9WMvUcBm2EAbmj3FMOHjob0GOqUBIbm%2Baq5wmFf7Dhr85iP8%2F6uI8hcnLnyZsVo%2FaYurhNQsvYpKrUrW8Wg0j0PocNrQdQL%2F8zF9dd0kH3LfLPwggBPpqg1vGfoXs9aWH1MVSh%2BF6k%2BJ8HzGULc2YdOVTAlKr48mGGJDor1ObYdnLhIex79mdbQOjpaMYcyYzlzZt2wSHqHmTm1AGU%2BfJEK1MLTD2N0T86FeTaCvtwZ%2BDK1985KNvzcf&X-Amz-Signature=d56186991def2154852664976cec91a2b2e424a098d237c21ca9857650f79082&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
