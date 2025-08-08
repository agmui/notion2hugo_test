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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHQOH4QH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCkRofiM%2F0G4gy68DmSIng9Jn3roJ5lULANWNt9A%2BtSxwIgO987zR9WDEQcN6%2FPMiXgq6PM0VETPk7e0NV1Y4WnuQAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENFh2NOF4d0zYH8yircA8dlTfGStQHViKKqJGJd%2FR3iuIJMP4NGWE46zpRNNOn%2Fz%2B3p6xK0AACQRG886TsQ8T63fMHTErqSh7Bf1Y3IBIOen2tiy6JqWsaHFB6VaXSl8OYNG%2BH5NskKkaodmlEHMpxAn9Kc8yaVBBvA0IEkLN0xk7oav0ATLE2H%2B0FXgedPoMNjUiRGDIHAGpEu%2BtrDxl5oFslQOsLR%2B%2F%2FJ4w10StntNnbkCOOcH3Gsl0X4Y8QHXwK6tmIVT5mkhxB3FAUe19qjC1%2BR32Pivy8AGXtUVaQcs%2B733kOB9p1AdpsgX%2BYk7RYVYFBlqtjy8C5SSPfcTZFLvjYTqhESDC9Yfxq1TOPq01Y2affmDEil6iYPUYhcxyOnuga14AaCl7Pu0MQkB2jf6hrnpGlhJjjtP36I3jPXolKrtYtO%2B7CuZGsLfEQdJLpTeIoReCicBn0BkOPDaOdgFqK5mhXYpfnmZbNSvj8eBhWj%2Bjs0vAgliN4EXpeSywprUusEa6m1w%2FVdwcC1z4lFdOBXwqxi1IaK0sWTtYDhQaT8VDqNeYbDCFmWH1vIBtiPLo3B3JIBuw0BG5LuklNgbJRYmRtD%2BTiJc3BnkHzC6AvoNY2XN8X21muLAqRVxBtZ%2BpJo9aDJNZPjMNXb18QGOqUBSbyyjiUh9Uf%2FdOAIHjs862k8dO3eeStCIowvnd0wyqN08RcBnPM5%2FY0J5gbBxrtNVpc%2BNlZLjtE%2FT48AVZEXuiWfjNbDfvgsAqUHmTqH4iu3rUjIJOuOq%2FXEnMxEUCylQk6iKttMDZxx8oN0cRdWQxW8DG5ttiYjOtvcjkj8x1SqcrSoNArS530Xe%2F774noBY5fZt%2Fk4%2FvT9Qz%2BpC4%2F9JPw%2B4dgS&X-Amz-Signature=1f073a62019a4e6558cd27572fa1a6f00999c63d842e4039b4b25a408054892a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHQOH4QH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCkRofiM%2F0G4gy68DmSIng9Jn3roJ5lULANWNt9A%2BtSxwIgO987zR9WDEQcN6%2FPMiXgq6PM0VETPk7e0NV1Y4WnuQAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENFh2NOF4d0zYH8yircA8dlTfGStQHViKKqJGJd%2FR3iuIJMP4NGWE46zpRNNOn%2Fz%2B3p6xK0AACQRG886TsQ8T63fMHTErqSh7Bf1Y3IBIOen2tiy6JqWsaHFB6VaXSl8OYNG%2BH5NskKkaodmlEHMpxAn9Kc8yaVBBvA0IEkLN0xk7oav0ATLE2H%2B0FXgedPoMNjUiRGDIHAGpEu%2BtrDxl5oFslQOsLR%2B%2F%2FJ4w10StntNnbkCOOcH3Gsl0X4Y8QHXwK6tmIVT5mkhxB3FAUe19qjC1%2BR32Pivy8AGXtUVaQcs%2B733kOB9p1AdpsgX%2BYk7RYVYFBlqtjy8C5SSPfcTZFLvjYTqhESDC9Yfxq1TOPq01Y2affmDEil6iYPUYhcxyOnuga14AaCl7Pu0MQkB2jf6hrnpGlhJjjtP36I3jPXolKrtYtO%2B7CuZGsLfEQdJLpTeIoReCicBn0BkOPDaOdgFqK5mhXYpfnmZbNSvj8eBhWj%2Bjs0vAgliN4EXpeSywprUusEa6m1w%2FVdwcC1z4lFdOBXwqxi1IaK0sWTtYDhQaT8VDqNeYbDCFmWH1vIBtiPLo3B3JIBuw0BG5LuklNgbJRYmRtD%2BTiJc3BnkHzC6AvoNY2XN8X21muLAqRVxBtZ%2BpJo9aDJNZPjMNXb18QGOqUBSbyyjiUh9Uf%2FdOAIHjs862k8dO3eeStCIowvnd0wyqN08RcBnPM5%2FY0J5gbBxrtNVpc%2BNlZLjtE%2FT48AVZEXuiWfjNbDfvgsAqUHmTqH4iu3rUjIJOuOq%2FXEnMxEUCylQk6iKttMDZxx8oN0cRdWQxW8DG5ttiYjOtvcjkj8x1SqcrSoNArS530Xe%2F774noBY5fZt%2Fk4%2FvT9Qz%2BpC4%2F9JPw%2B4dgS&X-Amz-Signature=061966b83f2672fe451362cfe2c69f7bd4a59496684acdb10b5a853ede8e7b20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHQOH4QH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCkRofiM%2F0G4gy68DmSIng9Jn3roJ5lULANWNt9A%2BtSxwIgO987zR9WDEQcN6%2FPMiXgq6PM0VETPk7e0NV1Y4WnuQAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENFh2NOF4d0zYH8yircA8dlTfGStQHViKKqJGJd%2FR3iuIJMP4NGWE46zpRNNOn%2Fz%2B3p6xK0AACQRG886TsQ8T63fMHTErqSh7Bf1Y3IBIOen2tiy6JqWsaHFB6VaXSl8OYNG%2BH5NskKkaodmlEHMpxAn9Kc8yaVBBvA0IEkLN0xk7oav0ATLE2H%2B0FXgedPoMNjUiRGDIHAGpEu%2BtrDxl5oFslQOsLR%2B%2F%2FJ4w10StntNnbkCOOcH3Gsl0X4Y8QHXwK6tmIVT5mkhxB3FAUe19qjC1%2BR32Pivy8AGXtUVaQcs%2B733kOB9p1AdpsgX%2BYk7RYVYFBlqtjy8C5SSPfcTZFLvjYTqhESDC9Yfxq1TOPq01Y2affmDEil6iYPUYhcxyOnuga14AaCl7Pu0MQkB2jf6hrnpGlhJjjtP36I3jPXolKrtYtO%2B7CuZGsLfEQdJLpTeIoReCicBn0BkOPDaOdgFqK5mhXYpfnmZbNSvj8eBhWj%2Bjs0vAgliN4EXpeSywprUusEa6m1w%2FVdwcC1z4lFdOBXwqxi1IaK0sWTtYDhQaT8VDqNeYbDCFmWH1vIBtiPLo3B3JIBuw0BG5LuklNgbJRYmRtD%2BTiJc3BnkHzC6AvoNY2XN8X21muLAqRVxBtZ%2BpJo9aDJNZPjMNXb18QGOqUBSbyyjiUh9Uf%2FdOAIHjs862k8dO3eeStCIowvnd0wyqN08RcBnPM5%2FY0J5gbBxrtNVpc%2BNlZLjtE%2FT48AVZEXuiWfjNbDfvgsAqUHmTqH4iu3rUjIJOuOq%2FXEnMxEUCylQk6iKttMDZxx8oN0cRdWQxW8DG5ttiYjOtvcjkj8x1SqcrSoNArS530Xe%2F774noBY5fZt%2Fk4%2FvT9Qz%2BpC4%2F9JPw%2B4dgS&X-Amz-Signature=b04f005daaaddfad7f80dcd9cf12dee2f494634ae4e17e45d0885d8d3c49d23b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X62QNZD7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDZBtOI1KCm8%2BKUGBDcXshTsRf0jF5lLprXsviSzmTCKQIhAIstzVmXODhBU2uz8ZXDiLgkn4Cv7f9KP0cqmMJOw2YdKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwXIuGiSQ7qC3uIFYq3AOemQ4yd6njbm1Wq63%2Bu8V2UbFkeVbfIqVO3HZoYBXrG4yttXuxrIYpcv4lF6UZSGNufUARqS3BfcFsqwHxzRDSNV5A%2FctOg%2FPvot08i7wcaz2J77JrnMVoqadMLO%2FmPhaAeuf6iu23RnahBcTY02riMV7PwjBSQMp88OXQILcucY0e9%2FuIWxk4Xblh1dN4pyMJv1XWkvGvEtRVBez6jLVcMvyMfZfiYUOI5RJK2AVAaHVVR6nGwxCe%2B4ULK9NjhdaLFCmi32hQLKj%2BsRZTY08mJb6BRGY95fHeXt7FKv3ovfhfGjvuCAhrr1NteG8w0AbZMmIgp6%2Bgo64vsTDdMCetTgMLvIeBN5Lc1Qw5zLLvo1pTcaT1Vjr6rIH5UQTEEnvvTIhMyFbX0alYZGbrTT7KzCWp0FsrGbAG6zGWXmIudr0DnOVOESrMAqIm9aLqhb%2BI6oQhkF9OcO36DgpZckwb%2Bdsp6%2BzV%2Fuk4yW4wVuzSCmymoLN5Rj%2BfSna0g9xa04%2FwFauClhojFHz8h8vCi941pZ0QOcZ5czIcQrXfZuzlZlQwFpMoLqyxHADARVRmmJe1z7xF7GZ%2BQgHwJDpGocIpj0nLL6DlbPF51nmfA%2BpfnypBC24uFJNFhLCmcTD32tfEBjqkAaUg067qtJwJXwyA70AN5IgYcucEmu5hG0baevwYzYuQxYsaDdyoKhdRb8l3loWoXgkeuq6h5v1VeDjgWQvzVxRgpw0naXslKzZxVm1osIG78VcUOGItx0wGSFEHMGiKGH5AoPssKFlbCdp4QrBRrpEJzN8N%2FA%2FYzZ3oThY4YKYX%2FYWyzsfCnp8E6qocENPtv3c0DmBF29excP0UMLD7ozl7t8tL&X-Amz-Signature=1d0ae46af3c1a645c8a1e76539f741fea0f6c988d1444ee104983b6664b0fc63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635JJNZGH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIHm%2BUHbKnDwtnBWrrox11AGcLZnB%2FlbJFWm%2Fkf9jwSYsAiBffT4qOcWgnZw2ACpvBIdefE5pirtj%2FldAAp4pA59AaSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCFmjtPzVgzG%2FUOMvKtwDwxFYC9IhkkwOtO5I4RPDvVFPMgT%2BbvW45yBCyBCllhclpf4CJILiwr3AcaCxGxYf%2BExRQBlU6WUyS02hn08MfYrqdcTt3CVBW1R3QJfvvSTPSP4lBTLr3HnAJwrwO7R%2F1xiiH5QZ4UnFNsRNrJt8yGkZG%2Fbrw7teMTlDdBMM1cUb9jtTjUXVKiQFo3sHwktHiPpv%2B06%2BS%2BIclSnqk5W%2Fbvuc1qdtxILVCs3gip1d8ABkHjMRN445jm8pg6w6S1IYXO21CSHSXcEsz3Cgy3tsgiq21lrHdkU0h9Aw9%2BIzwFCuJgsZ2Rra%2BKkvHAxgJh4hsQVHdgujpu3rzYYC1Afeh%2BQuYZ5u7OV2W3ndd94SEngyzJPFSijKzgWc3xAF%2FqtlzyP0e3yErTYEuX%2BHSAY7XoM9%2FZ3ge2ho9BgxDl5N2V0fy9Y6lSSxcwX25x3Nc71zPzu3jiMhzNlxaDLLui3DZFhlweM%2Bpg6ZtppQ1hun%2B2fb5FbldieunVWU%2Fcx99FHWpZ3mHruO%2FxBSikgjgNvdwium8nwahuFWB1129GuIdNvCbLLJFizsh%2BPz2PGF6wR0EIdoDIJoog8dG8IdrnTurVvLJD2A4b5yNS9GXu4SvaTfIN%2Fb6wqpUogHG%2BMwi9vXxAY6pgFFZENR5p67zB1WpDr1Tg1ndLy4oP9qQS1SxU6B26zz62oFomUTK0h9SlzahBE9ogKMxOOjETjYluTWvPzqWsD9hB8E2FjGkCUQQ3pob5ozpVZcZPi8yXrSo90NHs1mCzfkz2O%2BSnutH638iqsNXJ%2FEhRDpeb1RVOgUiVbADxTJEZ%2BBdYg%2FQm7H%2B7BM1ClkSkLvSgj064S9M7TFQdXVLgX6DrPDdopc&X-Amz-Signature=afd5167b39c4ab85166d5f7fdd0efe0e1cf51b77852053b5591f6295c2bd2f61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHQOH4QH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCkRofiM%2F0G4gy68DmSIng9Jn3roJ5lULANWNt9A%2BtSxwIgO987zR9WDEQcN6%2FPMiXgq6PM0VETPk7e0NV1Y4WnuQAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENFh2NOF4d0zYH8yircA8dlTfGStQHViKKqJGJd%2FR3iuIJMP4NGWE46zpRNNOn%2Fz%2B3p6xK0AACQRG886TsQ8T63fMHTErqSh7Bf1Y3IBIOen2tiy6JqWsaHFB6VaXSl8OYNG%2BH5NskKkaodmlEHMpxAn9Kc8yaVBBvA0IEkLN0xk7oav0ATLE2H%2B0FXgedPoMNjUiRGDIHAGpEu%2BtrDxl5oFslQOsLR%2B%2F%2FJ4w10StntNnbkCOOcH3Gsl0X4Y8QHXwK6tmIVT5mkhxB3FAUe19qjC1%2BR32Pivy8AGXtUVaQcs%2B733kOB9p1AdpsgX%2BYk7RYVYFBlqtjy8C5SSPfcTZFLvjYTqhESDC9Yfxq1TOPq01Y2affmDEil6iYPUYhcxyOnuga14AaCl7Pu0MQkB2jf6hrnpGlhJjjtP36I3jPXolKrtYtO%2B7CuZGsLfEQdJLpTeIoReCicBn0BkOPDaOdgFqK5mhXYpfnmZbNSvj8eBhWj%2Bjs0vAgliN4EXpeSywprUusEa6m1w%2FVdwcC1z4lFdOBXwqxi1IaK0sWTtYDhQaT8VDqNeYbDCFmWH1vIBtiPLo3B3JIBuw0BG5LuklNgbJRYmRtD%2BTiJc3BnkHzC6AvoNY2XN8X21muLAqRVxBtZ%2BpJo9aDJNZPjMNXb18QGOqUBSbyyjiUh9Uf%2FdOAIHjs862k8dO3eeStCIowvnd0wyqN08RcBnPM5%2FY0J5gbBxrtNVpc%2BNlZLjtE%2FT48AVZEXuiWfjNbDfvgsAqUHmTqH4iu3rUjIJOuOq%2FXEnMxEUCylQk6iKttMDZxx8oN0cRdWQxW8DG5ttiYjOtvcjkj8x1SqcrSoNArS530Xe%2F774noBY5fZt%2Fk4%2FvT9Qz%2BpC4%2F9JPw%2B4dgS&X-Amz-Signature=6bc8a0733992c494cf917845a317d21ffef2ee35851962c2266ad233bc160d21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
