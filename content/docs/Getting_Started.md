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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STL2H42L%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAMKE7UEGR2rCKdm7rSSkljxHN3NSBJkinZkJCCrkN%2BQIgIUYC%2BJnn5PmVXpe0gVpuvJK60hphnprTmgjOVzh0ducqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADLVDkEgdeIac1ZvircA1zwnLHjO7%2B3at5V1YdjRi77C9kVjyP4LqojbuN1qWIca2c%2FpRf8O1GqZhn49Vn4NDaVjHEFIcdsQnTJmYhCaDuelCjgZnpt3y5p3m8tfZQHOV2KmV2%2FKS8%2BK5rKrXbrlVFfuw1DC7GgSx4KZXO2qqXUa6Z1l0PFsgli1pZPoTGRDjmgrkAsVYlvIfYMz5An2qbuFQA5NK9sFJD6e5%2F1bkAv9e3tB3MNKaddGx7ew0c11TAZUtoqGyRkxSYkUbnAOQakh1%2BvdC3njVk5dw4R7sALYuY9HmhuQ9aTtIQL9fUq7Ybwzn7WR41MwMkEraRU199R68i%2B0Oe%2BU96K0AsMDY82ZbZ%2BfnTKkol%2Bt6ZQaiHj%2BHGABypp2nMQVyOxDo28Bh1zmDdmCffQ0zelOwWDYkcxaB%2BMBWEQ%2FbFkUbEvRc2AZ3preofT2HZZVADCwa20Eq6A7Ql9vyUJITn9pO2wmAnz%2Ff3ndiCAxmf3UwnmV63somrDIaB7keRNgWVr7sVjRTIzbbxykR2gRIwU7%2Bd9WBqu8z0zLvyY9lqguF1i3BmoNo%2FCLLYLzYRXSaVvsDGBko0FAs4dk1q2%2ByF1BRNFRTZnwt4OTu00M%2BHm0HjB%2FDBZGVMk9k9Vdw%2Fmbw%2F0MLnT2L0GOqUBwqX7q6JCC3vtuGmZN2kmHonZH6EdC5RNySWf6zTnrDEiToJ0hIrTq%2FYM%2FT0xoqoKG%2Fyy7swJkH5Gfr%2BxiTfc8hoanXK54FiILQh24L8JvCS0eRtzLQSLSqBLE7EQeaLpE8AhqdgMBwyxl83GJCwrIhSHkgQxQb58N84cOLgsFM6Fn3AtWHYAyVdplAqTlzu7tgWBQSLEYlpwabqeOJrWARzBlEmK&X-Amz-Signature=cac3286676222d28b4f2c6e06e1ffecd9daea351aa70ca9b658f5b2364033ad4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STL2H42L%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAMKE7UEGR2rCKdm7rSSkljxHN3NSBJkinZkJCCrkN%2BQIgIUYC%2BJnn5PmVXpe0gVpuvJK60hphnprTmgjOVzh0ducqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADLVDkEgdeIac1ZvircA1zwnLHjO7%2B3at5V1YdjRi77C9kVjyP4LqojbuN1qWIca2c%2FpRf8O1GqZhn49Vn4NDaVjHEFIcdsQnTJmYhCaDuelCjgZnpt3y5p3m8tfZQHOV2KmV2%2FKS8%2BK5rKrXbrlVFfuw1DC7GgSx4KZXO2qqXUa6Z1l0PFsgli1pZPoTGRDjmgrkAsVYlvIfYMz5An2qbuFQA5NK9sFJD6e5%2F1bkAv9e3tB3MNKaddGx7ew0c11TAZUtoqGyRkxSYkUbnAOQakh1%2BvdC3njVk5dw4R7sALYuY9HmhuQ9aTtIQL9fUq7Ybwzn7WR41MwMkEraRU199R68i%2B0Oe%2BU96K0AsMDY82ZbZ%2BfnTKkol%2Bt6ZQaiHj%2BHGABypp2nMQVyOxDo28Bh1zmDdmCffQ0zelOwWDYkcxaB%2BMBWEQ%2FbFkUbEvRc2AZ3preofT2HZZVADCwa20Eq6A7Ql9vyUJITn9pO2wmAnz%2Ff3ndiCAxmf3UwnmV63somrDIaB7keRNgWVr7sVjRTIzbbxykR2gRIwU7%2Bd9WBqu8z0zLvyY9lqguF1i3BmoNo%2FCLLYLzYRXSaVvsDGBko0FAs4dk1q2%2ByF1BRNFRTZnwt4OTu00M%2BHm0HjB%2FDBZGVMk9k9Vdw%2Fmbw%2F0MLnT2L0GOqUBwqX7q6JCC3vtuGmZN2kmHonZH6EdC5RNySWf6zTnrDEiToJ0hIrTq%2FYM%2FT0xoqoKG%2Fyy7swJkH5Gfr%2BxiTfc8hoanXK54FiILQh24L8JvCS0eRtzLQSLSqBLE7EQeaLpE8AhqdgMBwyxl83GJCwrIhSHkgQxQb58N84cOLgsFM6Fn3AtWHYAyVdplAqTlzu7tgWBQSLEYlpwabqeOJrWARzBlEmK&X-Amz-Signature=ac664414c944b06f58ccbd8f994e7df47fd7bf742b2561980942e918ddc62e60&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS3YCABN%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL9O82YnAGSazCP814gzk4zFZWkUZNnSZ6zVRw4Tx9fgIhAJokLEcXYJFrmVjOY5mxeHLhbP2pph5T8LC6nsARYTnEKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzi8Hn76J6d4k1OMkEq3APRjY09U8JKnrpoXuMCmiDtTSptYALFeqoqgzx53FVj6vPeFeZkho5l60yGZZAFyHVrm5YhcV9DVY23Nm%2FhKr39%2FTAnZONv16Pbpp9N%2F6wJcSwhWJLNlXs23cuxu6yjkn6MO%2B6JVW6VUCEffECdrurtvnh8ok2MJttw%2BaV0k%2BTeVv1fwS23fHQxqnK6Sxz6jVH11kKRNc%2B0VuHSITsFa2QrPgz%2FryzUP22f6sKuWZ28sOhDhXiTZ6AP8JnACCejAuZweD2Vu023Dnpc0S1ggmO6KraNI5MmvrAXdjojCuiKzu5z2PZnOYKikNvgTKgCiJxcJqCCNp7fdGTb3vacoqIVneNl2HmsJmOKOe0kGYScpmeV5joDe7WzMtIM4uATPg4dUQNCeA2xvRaUpnt3nhhsa8NPaW8wc5NCUtSbP8iPIC2WXlTmo7uKh%2BjzDaPbAlM%2F%2FU8sJJVtdW99ZrGbUFQP%2Bpy7Mi%2F3WdoJInI1Lp%2B%2BNR8Y77%2BWd%2FFbdfyOMc8jwJYSuwNp%2BirABfO7XxcJBhX1kAwuMZ%2Fh8kLkiMsYQP%2B%2BCI33qwlaWzVaqzMwOCgXlI5mwcXixEO6ihw7hzgGXwH%2BBiT7yQY3sA%2FFoJDQSij6TKpmHwGWYJlakwyeEDCXtti9BjqkAZz%2BLaDEjEWX5aZiO97ZaTvlNNrso4Qlgap3DfmjxSOdP1cSko4FgTNiYr%2BCFVxRhe%2B7T7fzjpcUZlJrSreA09IF0bovgRZtwqcrku8pxeRThpiYOrR3oDGUpZM7XqRvVusjDf%2F70tJGOo7QgR%2BnON62G%2BIBGqPdCGaHkU3bu5ID6A0tVfPk92aZOVGtRbBYuaSD7HFUxezGlop9ulBccKx5Egl1&X-Amz-Signature=20288457876ac6bfc863090b03ecbfb7d02b1ca85e784c451e7ba4827a852672&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNM2LPUL%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMCrKMXzUiJmQUGd0uVZRNsLLlt12WUpp5jfruJaUgEAiEAp1vOnJ7xMEAzP7px0%2Bss3MmplPgd7B7S0Wf9cNTtIdoqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMr1fz3uxCtVsvb0sircA93vo2HL%2FL%2B4UTKCoZEcDzPAG8jzZ2jYdKZzCxFIOnAgl72hntvH8rtTVXgFLlGqBm5DgJ4U52JCk2LDbHlHKsoXXOcMDd1BldTE2HFDgXxuyqjH5KWbOjXE%2F5f6k2v7XH%2FcnAf%2FThazjlcGSNJmKfAl49Oa1bRkHVNjF%2Bg%2Bmesct8IpRss1%2FtJeWtYmW5aHxrJmKE0LymMGyKhYBRD0Vo9Px6LsA5NUPM3kc1lqCAAoZVD9vfHOO5wHsuzp3YNMRv6In1jnzI54UtGZprI%2BO8DbdkMDQrPN9oFa1rTTMD%2FqTxMgPumHa3PBmEz%2FUbhX2AMh7bfhUHUGcdWWAJNmYiroAArjCaEp5uCS8UBZHtDL0lXdUp7ij77D6dYE4dau%2BUDfgTvP50OAcH1qu2mBMmZ%2FXuhwFchdh6fJe5sH34F8LTmjf5Qwmym9D%2Bvufx3gN7NMxuDf8RG2DTwUHMIDYRYMGt2ERcWFnyPl7yI9gI8vNiCsiupPpOwptLzetA0AKv1UlhtpATt%2BbxKPeoYkgdSjkWcPu%2BIMeMYBO0%2F93HICm21CtTeu6TBwVrrEfZHgkEogkSHGh8CcTTXEQyfC1hEPD%2BorSNl2n8TykCymaPjzTI22BEHCY2RZmIOqMNjT2L0GOqUBcoPUc7tFFR0hAyR78YYRIXn%2FRFM1eJtGaZ7Uzydyem2%2F8peTMCJ%2F4PHm1aB6JGoMHehT7%2F7owTPPpwdZ6Zb3xBUxz15IVxIyE7NGZm6gjH0v%2B4xVWwzkg8u6HDgCz419SUXnXdZx19qHnb7r57Idmb9O7DDlgMCzMtV%2Bo6a4FIiLrtGUqz%2BPMG%2BV2tcXXnMi5qaZWXYlS24Zyv8rAwf3MWpHtJ5w&X-Amz-Signature=3de75259174532a36306c61adf0bf7782a7e90e6b9e4a52ed913f616de5ae582&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STL2H42L%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAMKE7UEGR2rCKdm7rSSkljxHN3NSBJkinZkJCCrkN%2BQIgIUYC%2BJnn5PmVXpe0gVpuvJK60hphnprTmgjOVzh0ducqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADLVDkEgdeIac1ZvircA1zwnLHjO7%2B3at5V1YdjRi77C9kVjyP4LqojbuN1qWIca2c%2FpRf8O1GqZhn49Vn4NDaVjHEFIcdsQnTJmYhCaDuelCjgZnpt3y5p3m8tfZQHOV2KmV2%2FKS8%2BK5rKrXbrlVFfuw1DC7GgSx4KZXO2qqXUa6Z1l0PFsgli1pZPoTGRDjmgrkAsVYlvIfYMz5An2qbuFQA5NK9sFJD6e5%2F1bkAv9e3tB3MNKaddGx7ew0c11TAZUtoqGyRkxSYkUbnAOQakh1%2BvdC3njVk5dw4R7sALYuY9HmhuQ9aTtIQL9fUq7Ybwzn7WR41MwMkEraRU199R68i%2B0Oe%2BU96K0AsMDY82ZbZ%2BfnTKkol%2Bt6ZQaiHj%2BHGABypp2nMQVyOxDo28Bh1zmDdmCffQ0zelOwWDYkcxaB%2BMBWEQ%2FbFkUbEvRc2AZ3preofT2HZZVADCwa20Eq6A7Ql9vyUJITn9pO2wmAnz%2Ff3ndiCAxmf3UwnmV63somrDIaB7keRNgWVr7sVjRTIzbbxykR2gRIwU7%2Bd9WBqu8z0zLvyY9lqguF1i3BmoNo%2FCLLYLzYRXSaVvsDGBko0FAs4dk1q2%2ByF1BRNFRTZnwt4OTu00M%2BHm0HjB%2FDBZGVMk9k9Vdw%2Fmbw%2F0MLnT2L0GOqUBwqX7q6JCC3vtuGmZN2kmHonZH6EdC5RNySWf6zTnrDEiToJ0hIrTq%2FYM%2FT0xoqoKG%2Fyy7swJkH5Gfr%2BxiTfc8hoanXK54FiILQh24L8JvCS0eRtzLQSLSqBLE7EQeaLpE8AhqdgMBwyxl83GJCwrIhSHkgQxQb58N84cOLgsFM6Fn3AtWHYAyVdplAqTlzu7tgWBQSLEYlpwabqeOJrWARzBlEmK&X-Amz-Signature=a56092782b14fca03c4cacc66deaff191e7444157712c625c8fefe663e3d9deb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
