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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GYG5INV%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T022805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDQUyujSJkxG3RK81Y9aOj0xX4LshVMPIH7Cjpk9IfDTQIhAI1beCmTDS34jVrEDi3ODdBDtESKaERmf9%2F4XO6qLhFdKv8DCCEQABoMNjM3NDIzMTgzODA1IgxE6zLsGysAGpYl1C8q3AMPS9HzvfK6SIfXvlmaV9JZsF1%2BE%2BHwZy4WmWLq%2FvCJKQIbfyJfcdIqeeiNVSA6b8tzzkHkvwxnlfQvueXzDAJDX06lGJ4tdmvtLQyv1uemnHSEC%2Fw1H654WQzTGtwnGcvi4KKGTpMX6iQHpxJfM01YOD9RaJqq4jPdV1USn9kIQG%2BtIbs%2FP8OMWKLLNP8YCTLCvjma6wR1raIdG97cYFIHyg1aZIcPFDqx58aMXT1zJUpj7PSXE%2Bd6%2BV2sHir%2FsvxjqaXWSS%2FZT%2BWg%2F5n4IgBgc%2FpeVJiqmUW43IifPgiD5ISBMuRnpc%2FKsMW7En%2FaSkfHZz3I1ge0O2aryn%2BnqyaqURWI4iorHKfY7rRoqESfFe1Kb6D7U8984s%2Bl0eawLChyPKfXNNfh%2BkIzQj%2B%2BVCp5PfPRDHR7f%2BRwpQAg8OjmOdCYxslCbK0aR6dF8IdFy3s3wBVdA1W%2BDsqt65fcIF9N9XVZ1qzhNuHdEKWmXY0JqH5qcwJIZRv9SBFwkku%2B8glxotwIq2e9s3SugelFwO5FvoL4PZOO2enDF4N4gmCDSApoIlOdTaZl978disw%2BROTM%2FOCkjVgLwtjf2NpJQQX1uDtVc4fSl%2FSwHqzFnGFNgTr9fLQB5H%2Bit3jvNjDageDABjqkAUBKzF3n7xRFBK0mU03O2Sp%2Fuoravnmt%2Ffl3F2TehugMyr%2FW5Z2UnwGA81o32wSWV9YTbxGKsUEb4a3gck%2FyuFTf9vzYRfTRZKWXrYJHnVTxfQKfN2buEn4eq6Y8NI4MxcJqCo%2FkipvOihtbiyZ%2BLugkNRQgl%2FlBum5IYFnko9CU1YyUZkePd8qalZQf%2FTPMnyuteOLCeBiS4kaqghZkH2%2FayqWm&X-Amz-Signature=d45498aa5658b91c79f32ddb705e301f178746df70e5987b940809ac38d60ad7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GYG5INV%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T022805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDQUyujSJkxG3RK81Y9aOj0xX4LshVMPIH7Cjpk9IfDTQIhAI1beCmTDS34jVrEDi3ODdBDtESKaERmf9%2F4XO6qLhFdKv8DCCEQABoMNjM3NDIzMTgzODA1IgxE6zLsGysAGpYl1C8q3AMPS9HzvfK6SIfXvlmaV9JZsF1%2BE%2BHwZy4WmWLq%2FvCJKQIbfyJfcdIqeeiNVSA6b8tzzkHkvwxnlfQvueXzDAJDX06lGJ4tdmvtLQyv1uemnHSEC%2Fw1H654WQzTGtwnGcvi4KKGTpMX6iQHpxJfM01YOD9RaJqq4jPdV1USn9kIQG%2BtIbs%2FP8OMWKLLNP8YCTLCvjma6wR1raIdG97cYFIHyg1aZIcPFDqx58aMXT1zJUpj7PSXE%2Bd6%2BV2sHir%2FsvxjqaXWSS%2FZT%2BWg%2F5n4IgBgc%2FpeVJiqmUW43IifPgiD5ISBMuRnpc%2FKsMW7En%2FaSkfHZz3I1ge0O2aryn%2BnqyaqURWI4iorHKfY7rRoqESfFe1Kb6D7U8984s%2Bl0eawLChyPKfXNNfh%2BkIzQj%2B%2BVCp5PfPRDHR7f%2BRwpQAg8OjmOdCYxslCbK0aR6dF8IdFy3s3wBVdA1W%2BDsqt65fcIF9N9XVZ1qzhNuHdEKWmXY0JqH5qcwJIZRv9SBFwkku%2B8glxotwIq2e9s3SugelFwO5FvoL4PZOO2enDF4N4gmCDSApoIlOdTaZl978disw%2BROTM%2FOCkjVgLwtjf2NpJQQX1uDtVc4fSl%2FSwHqzFnGFNgTr9fLQB5H%2Bit3jvNjDageDABjqkAUBKzF3n7xRFBK0mU03O2Sp%2Fuoravnmt%2Ffl3F2TehugMyr%2FW5Z2UnwGA81o32wSWV9YTbxGKsUEb4a3gck%2FyuFTf9vzYRfTRZKWXrYJHnVTxfQKfN2buEn4eq6Y8NI4MxcJqCo%2FkipvOihtbiyZ%2BLugkNRQgl%2FlBum5IYFnko9CU1YyUZkePd8qalZQf%2FTPMnyuteOLCeBiS4kaqghZkH2%2FayqWm&X-Amz-Signature=ba1aa9a504c9e84e87570021d077470b8cf24632d3a0c7849e4c32dfedb1ab94&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GYG5INV%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T022805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDQUyujSJkxG3RK81Y9aOj0xX4LshVMPIH7Cjpk9IfDTQIhAI1beCmTDS34jVrEDi3ODdBDtESKaERmf9%2F4XO6qLhFdKv8DCCEQABoMNjM3NDIzMTgzODA1IgxE6zLsGysAGpYl1C8q3AMPS9HzvfK6SIfXvlmaV9JZsF1%2BE%2BHwZy4WmWLq%2FvCJKQIbfyJfcdIqeeiNVSA6b8tzzkHkvwxnlfQvueXzDAJDX06lGJ4tdmvtLQyv1uemnHSEC%2Fw1H654WQzTGtwnGcvi4KKGTpMX6iQHpxJfM01YOD9RaJqq4jPdV1USn9kIQG%2BtIbs%2FP8OMWKLLNP8YCTLCvjma6wR1raIdG97cYFIHyg1aZIcPFDqx58aMXT1zJUpj7PSXE%2Bd6%2BV2sHir%2FsvxjqaXWSS%2FZT%2BWg%2F5n4IgBgc%2FpeVJiqmUW43IifPgiD5ISBMuRnpc%2FKsMW7En%2FaSkfHZz3I1ge0O2aryn%2BnqyaqURWI4iorHKfY7rRoqESfFe1Kb6D7U8984s%2Bl0eawLChyPKfXNNfh%2BkIzQj%2B%2BVCp5PfPRDHR7f%2BRwpQAg8OjmOdCYxslCbK0aR6dF8IdFy3s3wBVdA1W%2BDsqt65fcIF9N9XVZ1qzhNuHdEKWmXY0JqH5qcwJIZRv9SBFwkku%2B8glxotwIq2e9s3SugelFwO5FvoL4PZOO2enDF4N4gmCDSApoIlOdTaZl978disw%2BROTM%2FOCkjVgLwtjf2NpJQQX1uDtVc4fSl%2FSwHqzFnGFNgTr9fLQB5H%2Bit3jvNjDageDABjqkAUBKzF3n7xRFBK0mU03O2Sp%2Fuoravnmt%2Ffl3F2TehugMyr%2FW5Z2UnwGA81o32wSWV9YTbxGKsUEb4a3gck%2FyuFTf9vzYRfTRZKWXrYJHnVTxfQKfN2buEn4eq6Y8NI4MxcJqCo%2FkipvOihtbiyZ%2BLugkNRQgl%2FlBum5IYFnko9CU1YyUZkePd8qalZQf%2FTPMnyuteOLCeBiS4kaqghZkH2%2FayqWm&X-Amz-Signature=cc0ad8cb4a510fb7be5e4fae4bded5a1ccf1aadc67bc212e250918861c6d229f&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDHEBROZ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T022808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCgVl%2FK78FPNVTx3%2B5ujamETjrWyOSBLAF%2BiIYR4jZcpAIgZlKCsHTqkNGvvJ0Q%2FS0r3AnlkWPGG689Nn26UqET71Uq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDHkaDxCMHVxVQZevDCrcA2A1IC7zPzzlLo3Jjv3tlu3UZcjBjhlREISEQmoAtGb%2FAkeWTP885hjGahCrNTTCl3Kaqwf%2Fk%2F3ZmGJHB6QcKQ37TBKl1n2nFRlkWGSizkJoEAk%2FKfKkiW3N3Bb6b2JBkXZYT7hatT8LzHbOjwB%2BsCf6gW9UksouwI31wEtA4asJfFbciO8yPBzwwQL5nEAezDMxgcruIg4goIX%2F8%2Bv%2B3%2FZ%2FuO%2B%2FhqRjiyyEoOkc4JQX2vPOqzONXrFQkPyJC%2BK%2BhgmeP%2F8fI5hHcPuyAbL5XzvCIs5AE8ENxMFJsO0CyiQBYittxRvptNrnftm9gPJ%2BYWbfnMjozolOQkiZs6OoPwGekz8KiErdEHC7uqu1ZHQOaXO8x5SkKi3pzPG%2BdbgncpLJ14T%2B%2BDnLLq5nRMj1ge1TF5n3vGLL5Gl2AdvXOZ2bt4Pf98KOpRco37wwOXDWmxc3MsxfWAKr5VERQTdtvwaFK1UTXPLWbiAdTcdYECOzrmGqhYd%2F9i7MNgW7mgXLeWiOOixsElMAV4H1yzDO4i0aL3hHiXs9IizpFQfMQs7Zyz2wyOaDkv0Y%2BjhXgnIR05B1X4pZosJelatUszEJZYX88u09r7CPp0kroCpYDDVMWMXKASdXuTOVwomNMOus38AGOqUBOmBL7jEpuUSq3rEKcXzYsEKf25%2Bc8zuuqwFmuhW39DRdw6zvwd59qgNj%2BxJ2x67LiYasaYT9bkUjUpyWTdalfYHxRD3LGyAIbPT94XC7fcN91Kg8IJcsbVrbpzwBBQ8ztJcIa0ba7d%2BV4ETzpy60m8J3u6IqGp9gRVyKx1nJ9bIdm1SEM5IgQ%2FsrhYlY5s%2F0PsG4pzd1U7Fyrx9sLarw5VjP4Mxu&X-Amz-Signature=e1db2fe035091be64382d973783d61854949fefb8974959473fd61af2056901c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636HCFZIX%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T022808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCFlxen%2FB%2BpdxsWK52DfQCKV%2FNYwEtoS51DawAsyXvhnwIgdYkhvtHNknl37ZILJCOksUnza214V31zihRccqx3ASkq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDM5gqotBTYZVZTNoxCrcA5Q4zjVBc3nuctthap0DAZzdLZj6rwmdKxBQznrOfiIaykj16neKPZrEqI6Op73%2B15nxOCJMrKhRVBPtgKV5O%2F4Tk%2B4YpJ%2FwY0hXqR1sezquBIo%2BpeEWqh2O3aAxwhPbTv2pxxm0F2gnOSYCaifWchamIsUlD6C3UX%2B8bjoSByGdm0aVLoPRX%2BXyDVoSC8um%2B2fk7FsjxabIx2R5KSRwikue%2Fy1rzxDKr8hpzbKc2Nrh4jOJ%2FMF6nK63tEWjwWizunX8kVTQiURiL62KfPXvjnXRAtPIrSSoV2z8c7eO8AqqQulx266hcPseRL7KLAk48eGJ2ZdIdSrOEd4rg9k0Y43pQpue2Wzc19x8j0x%2FHU%2B9uT7nwta9KFPDMxxAA1stK9RuFSKpfLhi%2BIQjGcSigVi3F5R%2BwYLbVyWKrZxvM1HLtWHu23YwMMWmnwBh9u2q0KFgFsAkZ7NZ3%2Fq1oXlBo26S%2F%2FbK6c0TVlCqAqOP02kMwkvS7HR4dO1Qa9gCwt09ZPp4g0PvwGBXvlaZMkTAQT5ptQewvCkPq6E%2B0hI6XnFPgxSuUmWxKDKnYEoefoiNfxl%2FIHjHjaAQNEbjAgYOIVpJR75RC278FSvyfbYUvR%2BPo%2BGlmqpLghV7W8ZOMMOs38AGOqUBGy1JXD9jpZMtnwu1lDqPJ1Q8dnImfOHKR2vIG8LAop%2FrdjsNdtl2BAQgd%2FNZ8pkTRWKoVLt%2BM7KVD4k3GsmoNc2tTHLVue3Bcme%2FY43lesejG47rhMGea87Mcc%2FBoDm2m0IL5wm54WOG4Jjqz8RK%2BmZZoMZDbjz3XHjPq%2BAi1S2TCBp1NfhHrEpU6bASovKXETj%2F0OUakcZbpqE3UbljVoleoZlH&X-Amz-Signature=7ac9906d589206ffd603c67a300290a3c8d345d898c03126377f7a7a88f1e8ef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GYG5INV%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T022805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDQUyujSJkxG3RK81Y9aOj0xX4LshVMPIH7Cjpk9IfDTQIhAI1beCmTDS34jVrEDi3ODdBDtESKaERmf9%2F4XO6qLhFdKv8DCCEQABoMNjM3NDIzMTgzODA1IgxE6zLsGysAGpYl1C8q3AMPS9HzvfK6SIfXvlmaV9JZsF1%2BE%2BHwZy4WmWLq%2FvCJKQIbfyJfcdIqeeiNVSA6b8tzzkHkvwxnlfQvueXzDAJDX06lGJ4tdmvtLQyv1uemnHSEC%2Fw1H654WQzTGtwnGcvi4KKGTpMX6iQHpxJfM01YOD9RaJqq4jPdV1USn9kIQG%2BtIbs%2FP8OMWKLLNP8YCTLCvjma6wR1raIdG97cYFIHyg1aZIcPFDqx58aMXT1zJUpj7PSXE%2Bd6%2BV2sHir%2FsvxjqaXWSS%2FZT%2BWg%2F5n4IgBgc%2FpeVJiqmUW43IifPgiD5ISBMuRnpc%2FKsMW7En%2FaSkfHZz3I1ge0O2aryn%2BnqyaqURWI4iorHKfY7rRoqESfFe1Kb6D7U8984s%2Bl0eawLChyPKfXNNfh%2BkIzQj%2B%2BVCp5PfPRDHR7f%2BRwpQAg8OjmOdCYxslCbK0aR6dF8IdFy3s3wBVdA1W%2BDsqt65fcIF9N9XVZ1qzhNuHdEKWmXY0JqH5qcwJIZRv9SBFwkku%2B8glxotwIq2e9s3SugelFwO5FvoL4PZOO2enDF4N4gmCDSApoIlOdTaZl978disw%2BROTM%2FOCkjVgLwtjf2NpJQQX1uDtVc4fSl%2FSwHqzFnGFNgTr9fLQB5H%2Bit3jvNjDageDABjqkAUBKzF3n7xRFBK0mU03O2Sp%2Fuoravnmt%2Ffl3F2TehugMyr%2FW5Z2UnwGA81o32wSWV9YTbxGKsUEb4a3gck%2FyuFTf9vzYRfTRZKWXrYJHnVTxfQKfN2buEn4eq6Y8NI4MxcJqCo%2FkipvOihtbiyZ%2BLugkNRQgl%2FlBum5IYFnko9CU1YyUZkePd8qalZQf%2FTPMnyuteOLCeBiS4kaqghZkH2%2FayqWm&X-Amz-Signature=073b0eac44dc253990b639ec8fac859d283728407f51fc40ed89485e9b9afc0c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
