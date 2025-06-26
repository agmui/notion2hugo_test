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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJGCWYOF%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCrGOeB49e9gC0mDb4M2S%2FEhkEvVQyFoNqvLOifNN%2BOrwIgYbvIssGlda1GOcU7RbBokyAwzlfR5KfpNOWgRYbOCF0q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDPMo3HTHFf1r6Ql%2FZircA2hg4pGfxcG6LiBlpcHgtECsPYDyYfmo47%2BI2LW1c%2B2efKG6rwspgMgTo1qHePr1P21SBtWudqJXk7WzAzaIR8AtwrPMwVaGcdcyYZyjU7tnAimul2lYXOXJFACTgqao1z2Rsh%2Ft5pwAyWkGp3GcRVKp9Om7Mxb9UkmWOifcwQCFdQ12NBD88dLr%2Bo1mIle4Wp7I8aWFlvD9p8msSI1gtcheTDjR58L4qwk7AOKptdVGlWckp42Ztk7qUSmyJFmw9Rlmv8LcDYFd6elpt75e1lzPTr1ET8nbMkPR0O4hKzKPzzTcetrhb1xbeRpSpkRPil6cAlx5aUA7OH4aMsZk2HCSCBn0Z7mWjGISDopTspmpnbYoBUyqC11z%2FCSKV9JYYCdrEqvL8iPqtRTnHuN0PX1vXTQ%2Fy4XnEeQ008RmU8W%2BzMhwRtHxPr6vENro0RULnqghoVScRyKtFF%2FlKU613KS9QU3psewll%2B1trROlQKcaDTAAkm2W8yVhe%2B9n2iwAyEOa57stDwKg5tt8aI%2F14foHERV4sAz%2Fmw8dMDObeZUnqA3IP1PjCKGcNehgk7i8NRr%2BPAhzmH9IQlCyp0OSYKYYKVKShX974MYBGHB%2BGGGW%2BkM5hDpZVjmBcbhFMOPL9sIGOqUBRPW5FSyYrsPI25la7Nm4cQ7LiDlltgdRzGjmJjh9Nz6N42d65CCNcsuIQ4JgdOeuAlk6HSNjw69QQP0aF0q%2B1rzLPltUkzCtzVpXVmqe%2BbPw5xHe0trQ6LtQh2DLJvMVGiUwarKm6m0uzzN3BuGpnN5nvfWfY5F1ItCAoYgRxHJkp7Jo2XkL1FiA8keUXY0vE%2BuubOfFnsKSdZipS0EL8Q8Hcyz0&X-Amz-Signature=00efe7ed9b61a9d51cf2f8523cc9f0f451951d87c927eff221de2caef2ceb1e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJGCWYOF%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCrGOeB49e9gC0mDb4M2S%2FEhkEvVQyFoNqvLOifNN%2BOrwIgYbvIssGlda1GOcU7RbBokyAwzlfR5KfpNOWgRYbOCF0q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDPMo3HTHFf1r6Ql%2FZircA2hg4pGfxcG6LiBlpcHgtECsPYDyYfmo47%2BI2LW1c%2B2efKG6rwspgMgTo1qHePr1P21SBtWudqJXk7WzAzaIR8AtwrPMwVaGcdcyYZyjU7tnAimul2lYXOXJFACTgqao1z2Rsh%2Ft5pwAyWkGp3GcRVKp9Om7Mxb9UkmWOifcwQCFdQ12NBD88dLr%2Bo1mIle4Wp7I8aWFlvD9p8msSI1gtcheTDjR58L4qwk7AOKptdVGlWckp42Ztk7qUSmyJFmw9Rlmv8LcDYFd6elpt75e1lzPTr1ET8nbMkPR0O4hKzKPzzTcetrhb1xbeRpSpkRPil6cAlx5aUA7OH4aMsZk2HCSCBn0Z7mWjGISDopTspmpnbYoBUyqC11z%2FCSKV9JYYCdrEqvL8iPqtRTnHuN0PX1vXTQ%2Fy4XnEeQ008RmU8W%2BzMhwRtHxPr6vENro0RULnqghoVScRyKtFF%2FlKU613KS9QU3psewll%2B1trROlQKcaDTAAkm2W8yVhe%2B9n2iwAyEOa57stDwKg5tt8aI%2F14foHERV4sAz%2Fmw8dMDObeZUnqA3IP1PjCKGcNehgk7i8NRr%2BPAhzmH9IQlCyp0OSYKYYKVKShX974MYBGHB%2BGGGW%2BkM5hDpZVjmBcbhFMOPL9sIGOqUBRPW5FSyYrsPI25la7Nm4cQ7LiDlltgdRzGjmJjh9Nz6N42d65CCNcsuIQ4JgdOeuAlk6HSNjw69QQP0aF0q%2B1rzLPltUkzCtzVpXVmqe%2BbPw5xHe0trQ6LtQh2DLJvMVGiUwarKm6m0uzzN3BuGpnN5nvfWfY5F1ItCAoYgRxHJkp7Jo2XkL1FiA8keUXY0vE%2BuubOfFnsKSdZipS0EL8Q8Hcyz0&X-Amz-Signature=08dc6edd97012a91ea4ba1c3be9af6380d7b1b61281df1e1aa6e6a8fba1b4ed0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJGCWYOF%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCrGOeB49e9gC0mDb4M2S%2FEhkEvVQyFoNqvLOifNN%2BOrwIgYbvIssGlda1GOcU7RbBokyAwzlfR5KfpNOWgRYbOCF0q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDPMo3HTHFf1r6Ql%2FZircA2hg4pGfxcG6LiBlpcHgtECsPYDyYfmo47%2BI2LW1c%2B2efKG6rwspgMgTo1qHePr1P21SBtWudqJXk7WzAzaIR8AtwrPMwVaGcdcyYZyjU7tnAimul2lYXOXJFACTgqao1z2Rsh%2Ft5pwAyWkGp3GcRVKp9Om7Mxb9UkmWOifcwQCFdQ12NBD88dLr%2Bo1mIle4Wp7I8aWFlvD9p8msSI1gtcheTDjR58L4qwk7AOKptdVGlWckp42Ztk7qUSmyJFmw9Rlmv8LcDYFd6elpt75e1lzPTr1ET8nbMkPR0O4hKzKPzzTcetrhb1xbeRpSpkRPil6cAlx5aUA7OH4aMsZk2HCSCBn0Z7mWjGISDopTspmpnbYoBUyqC11z%2FCSKV9JYYCdrEqvL8iPqtRTnHuN0PX1vXTQ%2Fy4XnEeQ008RmU8W%2BzMhwRtHxPr6vENro0RULnqghoVScRyKtFF%2FlKU613KS9QU3psewll%2B1trROlQKcaDTAAkm2W8yVhe%2B9n2iwAyEOa57stDwKg5tt8aI%2F14foHERV4sAz%2Fmw8dMDObeZUnqA3IP1PjCKGcNehgk7i8NRr%2BPAhzmH9IQlCyp0OSYKYYKVKShX974MYBGHB%2BGGGW%2BkM5hDpZVjmBcbhFMOPL9sIGOqUBRPW5FSyYrsPI25la7Nm4cQ7LiDlltgdRzGjmJjh9Nz6N42d65CCNcsuIQ4JgdOeuAlk6HSNjw69QQP0aF0q%2B1rzLPltUkzCtzVpXVmqe%2BbPw5xHe0trQ6LtQh2DLJvMVGiUwarKm6m0uzzN3BuGpnN5nvfWfY5F1ItCAoYgRxHJkp7Jo2XkL1FiA8keUXY0vE%2BuubOfFnsKSdZipS0EL8Q8Hcyz0&X-Amz-Signature=d733ec4461040fd67ba00c07d22f1f2eb7807fc942fab086e21e3cdf98e577f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RWKGLOH%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCjjPirq9KllJ9%2FKAS9cMIOjQvja1QGcASnV6mNvyE4UgIgCesaZbJaOv%2BLfNqSbIjSahvsNrNDybbZDka7bZPINd8q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDBbaGXDpsPuYfbhfOircA9SHQNLSJuZKBzHSBEegBZRcwtCd2aCgFXTTKDzFetXrokOH1Io%2BVgOmjYUNdYwJpUm9MXZKW%2BAisUvRPXw6v7STMpSbWmpgVjH9QI1lRuj%2FMk%2FjtUGh4%2B4WkBSdcYcn3a%2BdiV2sdV0wA5iDl6%2Fk8eWJPvm68E0QHsWEAjps5f7mwJofR8Z%2FrCAOre%2BGNK2dZp8B6HdW%2FI4xcJjA%2F4H5f3RYAmXh3L2SbOUaEIE9WxOzaYMg8UU%2BvElJ0He0%2FEPmyOZJ4zaJbB7nEli21QzMwJ0BsAaHg0X%2FjVgF8LKQ%2FNURYYo9dhOArC%2F%2BV56LpYA%2BfmZ7SFsbArKJyf8MTFtg6hg05R2r6G4Ly5%2BJW6KH3Oqgke7VZCTYuqLYx4Bjb%2FVRm%2BftDDSlq2kzBoy60ERnH3H%2FzWQQiV7dGjD9KSthadnRtlHKTkUfpJlpedlBFqwTjj%2BCOXK3g%2BM5nAe3kzK1bYrSodl1xIHJJGsTwgcehddPfSXkVM6anvneTat1u8D6nzsXKT3sMLFJKErQNEJbOmi1Tn5DqCBF2sXZKvEzzT%2F0tJb4IP44iEssGn3LCYKsz0%2FlQQWkiYcY2qyfL4Z72i8j08rM%2BJtQjkTyNo0sVdh4FRipbnY8kvfDAT3IMOnK9sIGOqUB5D0%2F21v13aB6KZl9bz4sfahPLbS7WBViIp4PAbUlJfjWpdzjHgxxmGHXxFms42Ctcy3N32DMb7czqe2PVl9i%2F0Gug%2FSiJkVtqwb0pSuO4UaN96MlMsbIeDk2HJX2L1sRpB9pMp5N2a%2BGvogB389p63okjv3APlQcE3owpE79HURE0Y%2FPWOi92JGJ4Ds3ru56t2dHHgWU1rLvgHlJVwJOZuBmBJlu&X-Amz-Signature=7207ce5ae8fa43acee909d414cbbe2ae1f873e217312357302ee3293e4beefda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW7FF4WR%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQD7nwtT7fs%2FzWqyg1zTaCHX2YSV0xH043p8mc86teQ2IgIhAMuW%2FnwLyxeVHrJjc5qvJjU37hVhYwkXeerMHSDrEb8cKv8DCGUQABoMNjM3NDIzMTgzODA1IgzfqYoskVrbWmX5d24q3AM4NYgWEGFStp2UL46T%2BL8yEl%2FtZJNsKoVGqDZnrltCW%2Fim9DT10afw%2FHSrEjxwj9CKuk1n5EwLwRiLHyck6X0VtpEbDgxkA%2BEp4ii1QUUL6apcfEJt189%2FePeTgE7B9OBJ7%2BTohbgYj%2FoLLgSm6xXiZnKxLzcXtNoqKpgdk%2B9g36pE7g8Ar1txaHa8H0JRB63kr5ayj3K1gM1JG%2Bww0APJgkH9g2NAyIPGR783lbwzV%2BBEUzO%2BIXT9jbbY%2BULtuznwndyrP6m9PVWdVw2bt8HyXeJ237iHHWmngEPXwyVYxk6S2QGXa5of39KJkBFSAkn5G34%2BhVgiMkntJUzRi%2B6KQrb6Isr5lEmiLTHnoMGc1hFbY63jsyZWAnDh4pH%2B15pCRfmi3p9nFgljR7fgEXZtKrBtt5bRvBG%2Bn%2FJVr28jHjwq5%2BNLnPPqzbBQP69XnQiBfA1dZYadNrKQT4wBPj1znf8XC6kl2i%2FvAwLPtS%2BrzsO1xr2%2FrNf%2Bh1iy9RUTgMVvG7tE3Ab%2BlDbI8nmmCl%2FzS6RAfw5i01XrjdzQmkwr4%2Fc%2FnYIt1cxUo4ox7ZvKEFHxh8feOhrusczLUYIH5720mkl5ZYK2wU8iQP%2BD53bGxdeyLfi5bPMOjhE0ezDVyvbCBjqkAZ2Qei4iOmo%2F6tiW9zxo4i1Kjo%2B5pXJiCz%2FsiD81ajb%2Bn8yLrOZ6sUKirq6vonV33PLLLWeyvtfyQ7SMzms5y6q6bwMiV71kahU55WOOeHPVw4gMVrRUUCCH3Z3zmWr%2BdEsq6SApcmX1aELOQWvMx8b74Rz35yhzo9Cx11RtAnybhbzeqAWYl5%2BcQ%2FahzFkG%2FVzeRUYaf4raopSc6%2F4XCvTSAqE7&X-Amz-Signature=4bce2d9c6918f5f3a528d6dbdcf7b4ea39e7399ef803ade6ba8656f1140e9f18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJGCWYOF%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCrGOeB49e9gC0mDb4M2S%2FEhkEvVQyFoNqvLOifNN%2BOrwIgYbvIssGlda1GOcU7RbBokyAwzlfR5KfpNOWgRYbOCF0q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDPMo3HTHFf1r6Ql%2FZircA2hg4pGfxcG6LiBlpcHgtECsPYDyYfmo47%2BI2LW1c%2B2efKG6rwspgMgTo1qHePr1P21SBtWudqJXk7WzAzaIR8AtwrPMwVaGcdcyYZyjU7tnAimul2lYXOXJFACTgqao1z2Rsh%2Ft5pwAyWkGp3GcRVKp9Om7Mxb9UkmWOifcwQCFdQ12NBD88dLr%2Bo1mIle4Wp7I8aWFlvD9p8msSI1gtcheTDjR58L4qwk7AOKptdVGlWckp42Ztk7qUSmyJFmw9Rlmv8LcDYFd6elpt75e1lzPTr1ET8nbMkPR0O4hKzKPzzTcetrhb1xbeRpSpkRPil6cAlx5aUA7OH4aMsZk2HCSCBn0Z7mWjGISDopTspmpnbYoBUyqC11z%2FCSKV9JYYCdrEqvL8iPqtRTnHuN0PX1vXTQ%2Fy4XnEeQ008RmU8W%2BzMhwRtHxPr6vENro0RULnqghoVScRyKtFF%2FlKU613KS9QU3psewll%2B1trROlQKcaDTAAkm2W8yVhe%2B9n2iwAyEOa57stDwKg5tt8aI%2F14foHERV4sAz%2Fmw8dMDObeZUnqA3IP1PjCKGcNehgk7i8NRr%2BPAhzmH9IQlCyp0OSYKYYKVKShX974MYBGHB%2BGGGW%2BkM5hDpZVjmBcbhFMOPL9sIGOqUBRPW5FSyYrsPI25la7Nm4cQ7LiDlltgdRzGjmJjh9Nz6N42d65CCNcsuIQ4JgdOeuAlk6HSNjw69QQP0aF0q%2B1rzLPltUkzCtzVpXVmqe%2BbPw5xHe0trQ6LtQh2DLJvMVGiUwarKm6m0uzzN3BuGpnN5nvfWfY5F1ItCAoYgRxHJkp7Jo2XkL1FiA8keUXY0vE%2BuubOfFnsKSdZipS0EL8Q8Hcyz0&X-Amz-Signature=3deefea58530b950cc1645fa01f30a9456f9ef5ecd57c7a801f2b5c095a578a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
