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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2QOJCTW%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T033020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB09NXvIb8p1qSooNTkSqICGEbSJeA80jb8FsyzCA1f9AiEA6Yo29qv0hgdBNIZDBmHRBf8LNhltzYrcCPZ8FQmWEFUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDHjjm%2B%2FXa6g72MGdRSrcA%2BcvEQWleQ2EgLRDWSvKJlrxREtbXduKRwEsFsINUujZXos7UcuSxhBm0l4sS%2B2Hmk%2FSK0Jri3TeHUcjCJPbJBPTWyAmvol1kXFh8qGwHDZOc1rAkT%2BZVoOuz2QDXM7sZ%2FK9IrJkx1pjDYsJtse7sew%2FUsJqlHq83tys5oanz2HeZ3dT3ZHWk1uZQXw8PQVgcuFbHQbpxhRqodFKak2vfFZBEsrPiezIAmelHDmyg9vKqAZli85sWw2VligZiRl4lgWO95Lqfpq3J5Un8yFOioJSOfcwr4mk4QfBXoh1CMOVO69i8C7n%2Fng4xunTigUYNGVsxgDBOPeJtnckrcVHKtqTJmNcheJBbsG1H2e%2Ba5n2b8hmpXm%2FEJconlfwimw94u9CQ7n90YSkJF3OMHagsU3Kew55d%2BlsLTrz2lX8S4k3qI7WjzXCNuGT2PPbr6MmI6AAAjKLXsH%2FOBpXtRX4uZe0NM%2B6orY%2BQyKqPLWkaDNKcEZT1vuYIjDajOJ6IdBPOBu74nwvgKEQF3NDUrKHfevLcfCxDgraABDG6vtHGL0Bc7O8F5Y6%2B2yfBAjdeXlJ8fvdkQn4fRcia16bYE3Xu0d9M7XVJiu8BtxKKT2utrtboOHX9fSY64%2FySjfrMIKe978GOqUBu6jl0RDwF%2FJ7buZBaTQ%2FlUGzvR1os7dmzemhpdpEQypPtPSfDeQoQ9HU9qRKshe26Ol5aDw0%2BGaGCAds2Qv4HfpUQ9dMlVr5bGx2RSV1R6fpVi%2B%2FdZZntGVO2bBTOQ%2F6qhiUH%2FF337gIlU7RpU%2Fs3VAE0XXmJoIGvziOwLOx%2BOez4A3kwxY%2BG%2FTW7k4nTLd8190%2B4C1ZotKm%2Ba%2B%2Br%2BAKCcIqxSuy&X-Amz-Signature=fe69c3eb31fc0d5a5d249f80c1af90b30f8b5adc68e9ecf7c444d8f4314caa5a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2QOJCTW%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T033020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB09NXvIb8p1qSooNTkSqICGEbSJeA80jb8FsyzCA1f9AiEA6Yo29qv0hgdBNIZDBmHRBf8LNhltzYrcCPZ8FQmWEFUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDHjjm%2B%2FXa6g72MGdRSrcA%2BcvEQWleQ2EgLRDWSvKJlrxREtbXduKRwEsFsINUujZXos7UcuSxhBm0l4sS%2B2Hmk%2FSK0Jri3TeHUcjCJPbJBPTWyAmvol1kXFh8qGwHDZOc1rAkT%2BZVoOuz2QDXM7sZ%2FK9IrJkx1pjDYsJtse7sew%2FUsJqlHq83tys5oanz2HeZ3dT3ZHWk1uZQXw8PQVgcuFbHQbpxhRqodFKak2vfFZBEsrPiezIAmelHDmyg9vKqAZli85sWw2VligZiRl4lgWO95Lqfpq3J5Un8yFOioJSOfcwr4mk4QfBXoh1CMOVO69i8C7n%2Fng4xunTigUYNGVsxgDBOPeJtnckrcVHKtqTJmNcheJBbsG1H2e%2Ba5n2b8hmpXm%2FEJconlfwimw94u9CQ7n90YSkJF3OMHagsU3Kew55d%2BlsLTrz2lX8S4k3qI7WjzXCNuGT2PPbr6MmI6AAAjKLXsH%2FOBpXtRX4uZe0NM%2B6orY%2BQyKqPLWkaDNKcEZT1vuYIjDajOJ6IdBPOBu74nwvgKEQF3NDUrKHfevLcfCxDgraABDG6vtHGL0Bc7O8F5Y6%2B2yfBAjdeXlJ8fvdkQn4fRcia16bYE3Xu0d9M7XVJiu8BtxKKT2utrtboOHX9fSY64%2FySjfrMIKe978GOqUBu6jl0RDwF%2FJ7buZBaTQ%2FlUGzvR1os7dmzemhpdpEQypPtPSfDeQoQ9HU9qRKshe26Ol5aDw0%2BGaGCAds2Qv4HfpUQ9dMlVr5bGx2RSV1R6fpVi%2B%2FdZZntGVO2bBTOQ%2F6qhiUH%2FF337gIlU7RpU%2Fs3VAE0XXmJoIGvziOwLOx%2BOez4A3kwxY%2BG%2FTW7k4nTLd8190%2B4C1ZotKm%2Ba%2B%2Br%2BAKCcIqxSuy&X-Amz-Signature=056ed5c3516a0d68b521151a7276d9a4df728b5697f67eedf6951308b8173399&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM6WKTOA%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T033024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcxviDChAmd8vZwYGG9xNKcxEz2QHc33GWuhY5CuaHkAiEAu4k6YkmAQ%2BaQn61KgYJ76iVtFoYatEeac23dW%2FLyeBoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDF5HIVD48hqsDT5BTircA2nUcalsMH7YqIn2sHC4EOFMzresp2M%2FhvR9K2CiGSoDOcOTZTRyduA2smG%2Bd%2Bf3XhyIi69nxfkil12fo%2Bb4z7OifL2zHeelmqfFHliBKnKH3qnPuLeG3pRxMSwkXb8Um%2FcSOnC9s1Fe4EljJF7YTrfdbHEGenUSck7rYcv4JLwD3PT5sMJAzI2IfpTRFBH2DwcjrQ6BIAggXZXVskmE7CUga5%2FGOq26JqPOBSrl8ChXIwX%2Fg4ooeSEYma%2B%2By3YYDFSGO18WJIZpGD%2BOnH7qXUn6%2FVqTSKJsdDIt%2BHW6Gi9v7x%2BStDTsCodI9llRNOUKOv%2F0AbMiw6us6InCl%2FL%2BjhqYZPdOTn%2FBj6KktQa%2FoK8PNOouEiuhlyBzBPqrCs6YsoGaD3LKglqEZ3%2BPY2ZoV7hSqWcmQ64q9G5pm9fP6dEmVC%2B0QQBjYiyOLKr1SbHO3VzgCu9la4RMf9VQrzRCfehrO9TPqOzF1J1xk8CrhKN9kHvknl0LXElxq9AP3sfWwqo5sDIE0%2B%2BZOSUk34%2BV%2BCY3sANDlnm%2FcW8JSnAJHFT9f4BNtgvwlcQtfGQxxZrVPRolx8cUuWa2h93YCMzmvTcGqjBsPXGOS5YBuzM6BiGXtu4euXu9I17yoBMOMOie978GOqUBCroinA59NMA05dyHMmsXCHOhMSeI2wX9BK9xIjAYbDUZg60VCm24slM6JahcfmMo5PYcHSXuTjgl7%2BLjOJSl9l0OT8N%2BsySywTC8%2BLnlWOT9g1vfadjuXwn9XRyAGGR1pep4KEA1dnKUwKVU6j85xCnS%2FVgYqNrYotMNVJwz8%2BJJYkyUpZwVz4gW9O%2F%2FDHev1QnRJNddF4tFTebt4hVbd0EN34m1&X-Amz-Signature=1cdce50b3361ee7c2ce7380d0928638541695df669dfd32fc33875d32e86e8fa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7EPSMPH%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T033024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHf0gdiKCzmRKdsGdt4XZUc0PDK1p4Igv%2BBT%2FFGuSwZnAiEAtcXkpSsbRNhdB3%2BKchyehbs67WRQ1dOLs085B4h9ds8q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDLVvAqchcNDEnUTHSyrcA%2F43bht64Uqsmj6rn9G9pHrih7e9RWvjuZqucecWr24LJv3WZOC%2BFD5n0WQavdnlnZ5NpPME%2BUI4BUxX6WWcxIpeEBq%2Fd5nvWnKnMU7HM7nufqnwiDIqQ%2F%2F5UB5aVk6vswlhyhjXyikQTAZ2qpXcMl7zno5i3wMPw%2Fs7TtM9fNWUzuUQRRDb7Nm74hwHSNGp81tMpoav46xwvmtXI2Rc49rkg8c0noipnISPQnG%2BbO3XSyeQeTv5K%2FWhL%2FJKN2Dhu7dXPvBmk2mVJx%2FLxstc9n8lusWTheFD0NsCOtqmIT5mHtBHfLt3gUDtev6bN%2Fw%2BjwMWB57VZgETJOpE39hojqsbh3Geg%2Bb6eBxIla4ixv5MAx3WMcLq6PQ8odI4c%2BJixgscof1eb8Di4jdbWgx1sf%2BWxqZQl9b9CBRZ9kk6E%2BXu72TwVGKjN4VN9i5MwsW3pClRPavS8bM7VDlVCFKeNd0%2FloZuP269EcIaoiSFEli%2F1KiA7pXq6NfjWVg8g6uw7I2AXp2KUI8JAQNuuAd4GDOyID%2Fyu4AIPUuPBwnbhxKERbnKO0zqI9p4wM4SH4tUf8GSZq%2Fm1p6KPtyN%2FmAL%2FXNBLTv40P%2Bize%2FMzUV%2FrNrUi94qumGCz3uM9%2BhPMISe978GOqUBQSxB5JJwrL9%2Brx0MF%2B09C%2B5%2FwcjgCRwcxyziFJOKj0Z1ObZRo0ABbWgpOJa%2FTKWtHXe1ksE7CKvGsB2TqnwoWDc%2BWq1lorsZ7OPBFgrDhStzx0G36MpXo1J%2F1TqlbdSo5bzS2HAxARcQY0NGHRL5tFbMy6C9QtCnJ4zzVo0Xrj5ce8S51HXiSpoehLCAfgKtniokbIF64ZQJEGkqVAIJQktbJLgr&X-Amz-Signature=e0f685ae0cf9ccdc82ecd99658b0694ea2c2de326abdef348447e65851664c8f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2QOJCTW%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T033020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB09NXvIb8p1qSooNTkSqICGEbSJeA80jb8FsyzCA1f9AiEA6Yo29qv0hgdBNIZDBmHRBf8LNhltzYrcCPZ8FQmWEFUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDHjjm%2B%2FXa6g72MGdRSrcA%2BcvEQWleQ2EgLRDWSvKJlrxREtbXduKRwEsFsINUujZXos7UcuSxhBm0l4sS%2B2Hmk%2FSK0Jri3TeHUcjCJPbJBPTWyAmvol1kXFh8qGwHDZOc1rAkT%2BZVoOuz2QDXM7sZ%2FK9IrJkx1pjDYsJtse7sew%2FUsJqlHq83tys5oanz2HeZ3dT3ZHWk1uZQXw8PQVgcuFbHQbpxhRqodFKak2vfFZBEsrPiezIAmelHDmyg9vKqAZli85sWw2VligZiRl4lgWO95Lqfpq3J5Un8yFOioJSOfcwr4mk4QfBXoh1CMOVO69i8C7n%2Fng4xunTigUYNGVsxgDBOPeJtnckrcVHKtqTJmNcheJBbsG1H2e%2Ba5n2b8hmpXm%2FEJconlfwimw94u9CQ7n90YSkJF3OMHagsU3Kew55d%2BlsLTrz2lX8S4k3qI7WjzXCNuGT2PPbr6MmI6AAAjKLXsH%2FOBpXtRX4uZe0NM%2B6orY%2BQyKqPLWkaDNKcEZT1vuYIjDajOJ6IdBPOBu74nwvgKEQF3NDUrKHfevLcfCxDgraABDG6vtHGL0Bc7O8F5Y6%2B2yfBAjdeXlJ8fvdkQn4fRcia16bYE3Xu0d9M7XVJiu8BtxKKT2utrtboOHX9fSY64%2FySjfrMIKe978GOqUBu6jl0RDwF%2FJ7buZBaTQ%2FlUGzvR1os7dmzemhpdpEQypPtPSfDeQoQ9HU9qRKshe26Ol5aDw0%2BGaGCAds2Qv4HfpUQ9dMlVr5bGx2RSV1R6fpVi%2B%2FdZZntGVO2bBTOQ%2F6qhiUH%2FF337gIlU7RpU%2Fs3VAE0XXmJoIGvziOwLOx%2BOez4A3kwxY%2BG%2FTW7k4nTLd8190%2B4C1ZotKm%2Ba%2B%2Br%2BAKCcIqxSuy&X-Amz-Signature=e3941074e18e5b4a0de9414f91c151d734059785df3eaff2b90abaa35ba011a6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
