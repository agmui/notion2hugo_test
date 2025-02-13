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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB27QNM3%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDscCgcJdRbMgYRIpKAzr9vcyVJzVi1khpeqlMe7FxeUQIgLKK4IWYSY%2FMN7RG7OA80g71s8weUGKKQmrocKfias4Iq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDCr51%2BY0Sp%2BMeMyaNircA9Xc8PfwCXS0mVc%2BRO8ATy7WS0qJtFTcCL4EE3Qy7umsP4j5YmMwxXFQqI7rMuxQ85QH5Y7JzqHKlUHbMRS4qiPgB7aWSuKJfvXwOIGqi0RjfVzEvKE3nK%2FxlJmgDqqbHQe9i4MU5UnbvLFAY54r0t23h5cJInza6RQHmuxMUL7lLzIry8rZARdcpt9f54bs2dpBEnXMYM0tE4RcKkluEynYGPdk38pP0UIu%2Fo8Dq4hCDcEMVWedzNR%2FVR%2B3SVyQVD8OzTNgiQcP%2FjXF3bheSM5gCHnGOIJr1LxLoKa4%2FJX1lnB9Oe0pnmvXhVvltmcy27wP16REH2%2FJwvMwPuPYh%2BqSmjAta2acKM2ydGU9YENu4NbzgDNNJDrhnCgygARG3FDME%2BG6nwzv5Vs8exYH4l%2Fia0s1Vy3FD63VqhEGD%2FNoUah294hXWYrSaOFpPt7lQuXICT1eR7ur%2BhUvqeBccXOBfIo4ZsJKuKa80IhBF1WO9%2BhCXPiRYe4IM%2FyyflWDfczVxlGkjaBrNIh1KFk1TLxNo521DH1TVEFwmzPJO6uTSwxCgKqhhAeqDaI7IU7vDakcblzQhBkXv%2FFdHWfHp356ORaAOZY33k0T2uO0wjD2mfz2Zh1xZID6v8o%2BMLrmtr0GOqUBdonqjzlT7WPQ8YLlGjiyscfXKWeV5mQ5Ku79zoC7DB%2F2NB1RkDgs5ety%2Be4T9ACEqwDpJ5aw9374ER3rb769tWO9WPJwpvgu5RFGLxRQixyw9cvk8jkR%2BlJh%2FHrjlnmcAE6T9D2doW08p%2F%2BYUlpqTOpLWJRvBS7BmT8lvoYUj6RL%2BvGxL4PkNwmFzkwEGOnVSQtnVu3eyDXxPB%2FGrrncsZWqOdwy&X-Amz-Signature=3c4c3b4f44e01128fa88df08f2f758ee60e1a5781efa094d5c2b459c30628ae0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB27QNM3%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDscCgcJdRbMgYRIpKAzr9vcyVJzVi1khpeqlMe7FxeUQIgLKK4IWYSY%2FMN7RG7OA80g71s8weUGKKQmrocKfias4Iq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDCr51%2BY0Sp%2BMeMyaNircA9Xc8PfwCXS0mVc%2BRO8ATy7WS0qJtFTcCL4EE3Qy7umsP4j5YmMwxXFQqI7rMuxQ85QH5Y7JzqHKlUHbMRS4qiPgB7aWSuKJfvXwOIGqi0RjfVzEvKE3nK%2FxlJmgDqqbHQe9i4MU5UnbvLFAY54r0t23h5cJInza6RQHmuxMUL7lLzIry8rZARdcpt9f54bs2dpBEnXMYM0tE4RcKkluEynYGPdk38pP0UIu%2Fo8Dq4hCDcEMVWedzNR%2FVR%2B3SVyQVD8OzTNgiQcP%2FjXF3bheSM5gCHnGOIJr1LxLoKa4%2FJX1lnB9Oe0pnmvXhVvltmcy27wP16REH2%2FJwvMwPuPYh%2BqSmjAta2acKM2ydGU9YENu4NbzgDNNJDrhnCgygARG3FDME%2BG6nwzv5Vs8exYH4l%2Fia0s1Vy3FD63VqhEGD%2FNoUah294hXWYrSaOFpPt7lQuXICT1eR7ur%2BhUvqeBccXOBfIo4ZsJKuKa80IhBF1WO9%2BhCXPiRYe4IM%2FyyflWDfczVxlGkjaBrNIh1KFk1TLxNo521DH1TVEFwmzPJO6uTSwxCgKqhhAeqDaI7IU7vDakcblzQhBkXv%2FFdHWfHp356ORaAOZY33k0T2uO0wjD2mfz2Zh1xZID6v8o%2BMLrmtr0GOqUBdonqjzlT7WPQ8YLlGjiyscfXKWeV5mQ5Ku79zoC7DB%2F2NB1RkDgs5ety%2Be4T9ACEqwDpJ5aw9374ER3rb769tWO9WPJwpvgu5RFGLxRQixyw9cvk8jkR%2BlJh%2FHrjlnmcAE6T9D2doW08p%2F%2BYUlpqTOpLWJRvBS7BmT8lvoYUj6RL%2BvGxL4PkNwmFzkwEGOnVSQtnVu3eyDXxPB%2FGrrncsZWqOdwy&X-Amz-Signature=39230302b74e039c1d9542124fcc9aa17bb93489b6647d6df90a02f6c48ebde9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z5PXH7A%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T090832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE86CYFrZ%2FJ3P9XgLj4PsrYLhJGr6eAgThgTEhBAp0WCAiEAiuu292H7zNF4nd0tvNFK3Q8BNUOuXO4kOWCLru1cFvIq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDCkamlHs7shPe7mOdyrcA65KyxIUGGUmnKsRtJLW5isW%2F4y%2Ff26CYkjV6yKtEgAQnU9thKRXhAb8qciFN9zzcXss0A4StFQ3J3wMTg1eTYJCFGbPTf6ny3OD%2FTU21xowt8rQN7Srs0A8O6H3OKu1ZuSa1LXgUVcXFMORgGwlX253ABQJQFzXGdoilDJ4hx1aS0Htj6BYJhA2M4%2FRrjOSmiHSEdJ03Ej%2BgHI5CwpxdjtkfSqcPVxnDlq4cUblFZsFLyyhKjGOYapfWEiu%2B2mz%2FC2FIUwQvbrhpRB83dFwM95uvB1zYcQ7VLv%2BsNabxl771fa%2FjoTvrC8O9q28BdrF2tx4RgznLLc9jMTbR86bnZvXor7v0ytuay9ofnm%2FI9s1vUNb%2BGTdHaBymIpYEeq7tW4U0c7ulWPC4unCX5xi0WWPdDGSVT1nIngHGKae60JhnsJCw9u47F7y15sxcp%2FvySkP%2F6nLQ2EbxgRnwH28Xp9Re0MfPAe9HTsq4tBS%2BnNfw1lQJqDfEb2ATJ9zwChkjJyUrDNW1dMHVZAsuMj3879iYO2%2Bu2COkL%2FfoUJLNp3fAxRcbyJI0Y54qldul4dOi%2B1nqJYSlvA9rJh4GV4xH%2F2LMeA%2B8PX1OhFXqsMauVFW1lHpd%2F8X3GOGXnxnMJvntr0GOqUB7fpnUkH9BUz4qg90ghrhdnYIjzb2zO6WqWLGX2iFepIwcrGi9iKi1ngw9J%2FY%2Bo%2BvHzifwwKYyD3tI8wvYR6l1PJkILd%2FyTEFbZHhCoNjw3JGLFnWYVJxvTJBfhXefG08LixQFKJuuvDGUUpHjP%2BNgoK46bY%2FWAP%2B6AksorfHRUtsiw3REWlIeFb3jVL8j7%2BjoSXzMKdEO6KW81%2BQilTP2znZ%2Fvqq&X-Amz-Signature=e889d175021017d8f819af587df251ef87ce1c26e88ac2de1fb4994456f6ac04&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3AJTLUJ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T090832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjq4e%2FQUg58hwJIv6CI0LmZ9iQvraNcRofnttAd4CbyAIgXbH8%2BL9ko0qn0bKR6Ekkbi4niaTptDpra0xZTQhU%2Bbsq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDLNzcao4BLFmyrBlDyrcA09jG9p5cvENuhDKO%2Bm0qM6FQ5mflP%2BqnZA3aczDxTpqweAtmqvrDwy%2BlzCMp3lt6JRtM14%2BdsY2b1ACIzcXGJdQkSt1fqWTpx6rWxPQt80wOQmUxW7Vv6R7%2BV53%2BiggPO2bocGECnPh0RAAFfpTMoX%2BOOwTJMhAKOgcFchSXk5nCWOXxR2E4rs2%2F1mbZ%2BZaUVzHHOuwJ8BLNXZSnGT27m1fnlg9btxLklybwKFUKpfsZZQmJ%2Be76lTnmFU97JiEKkqNZB0aJyxRe6rizFmyhhrnQlRnrKsiJj%2Bxdr%2FN6HwlyWGDlk1vpM8Rdll7y4UMhuCtIBUF7kLqEW7ruE7%2FGKrVSYtofOr4LJw%2BUmaIEifixFsFaZGRjtupltuJ5TIwUYhhiX6JNIFuH0yUxB%2FLPR5UxiNVbT3hXod4OjDNd03UecV%2BB5h1YYzjlvaysVEOEAy3mQMf3PC16plVgG4B2LQeihihBl3F%2BK%2BW6nlEscXSsRgvKHsrg8%2FNAeoC3jkgB232NQRW1m1%2FwTTTNRq%2F2WsrUb1n0XaTG0l1reEXnyRsOBVRywaK16v3miwQ97iWXccZKiuN7sgpABhT%2Bn6xFfhv%2B16DKW3sUJtoAXiFql62uvolNSDht5j1D%2BueMMDmtr0GOqUBVkJ1Ja4%2FzmK6J10Rh31sj5fI1ES0uN2gU8JN39uwjBQvbx4TDIwkUT8jpK4oOTbaBFSG3zgoun5qn3cCoYHi3dO0L8nCSdLe849PLRU3CclrT77uL4ySNrcbQOrPjSlX8RZaj6m1OIrFV%2Bja%2FThUw%2FLlf6R%2BrpZplaFWginP84q4iVkpJtLcFQJ60QukVCCXy3iY3fnalbOPhJ42QuPB%2Fdx3OfBe&X-Amz-Signature=737949a1b49c201208ac2fe0a84d32ebeacab48be5e4403d7ee52dc4454fdc28&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB27QNM3%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDscCgcJdRbMgYRIpKAzr9vcyVJzVi1khpeqlMe7FxeUQIgLKK4IWYSY%2FMN7RG7OA80g71s8weUGKKQmrocKfias4Iq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDCr51%2BY0Sp%2BMeMyaNircA9Xc8PfwCXS0mVc%2BRO8ATy7WS0qJtFTcCL4EE3Qy7umsP4j5YmMwxXFQqI7rMuxQ85QH5Y7JzqHKlUHbMRS4qiPgB7aWSuKJfvXwOIGqi0RjfVzEvKE3nK%2FxlJmgDqqbHQe9i4MU5UnbvLFAY54r0t23h5cJInza6RQHmuxMUL7lLzIry8rZARdcpt9f54bs2dpBEnXMYM0tE4RcKkluEynYGPdk38pP0UIu%2Fo8Dq4hCDcEMVWedzNR%2FVR%2B3SVyQVD8OzTNgiQcP%2FjXF3bheSM5gCHnGOIJr1LxLoKa4%2FJX1lnB9Oe0pnmvXhVvltmcy27wP16REH2%2FJwvMwPuPYh%2BqSmjAta2acKM2ydGU9YENu4NbzgDNNJDrhnCgygARG3FDME%2BG6nwzv5Vs8exYH4l%2Fia0s1Vy3FD63VqhEGD%2FNoUah294hXWYrSaOFpPt7lQuXICT1eR7ur%2BhUvqeBccXOBfIo4ZsJKuKa80IhBF1WO9%2BhCXPiRYe4IM%2FyyflWDfczVxlGkjaBrNIh1KFk1TLxNo521DH1TVEFwmzPJO6uTSwxCgKqhhAeqDaI7IU7vDakcblzQhBkXv%2FFdHWfHp356ORaAOZY33k0T2uO0wjD2mfz2Zh1xZID6v8o%2BMLrmtr0GOqUBdonqjzlT7WPQ8YLlGjiyscfXKWeV5mQ5Ku79zoC7DB%2F2NB1RkDgs5ety%2Be4T9ACEqwDpJ5aw9374ER3rb769tWO9WPJwpvgu5RFGLxRQixyw9cvk8jkR%2BlJh%2FHrjlnmcAE6T9D2doW08p%2F%2BYUlpqTOpLWJRvBS7BmT8lvoYUj6RL%2BvGxL4PkNwmFzkwEGOnVSQtnVu3eyDXxPB%2FGrrncsZWqOdwy&X-Amz-Signature=aa815c6627f0e4d749dbabb643f1f6de137b0d623f58175b0e45e3069fdf0c4e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
