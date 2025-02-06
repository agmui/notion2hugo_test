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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CQ7EEOZ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T020822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIBGgc1itgFZWKSuGDy22KAJ3ITx4cGd3nIr50HxCbMkUAiEAmSTOdZHBrk3z0Q5LNrzWE0WSTJMvyZm8PtwVI2yDGrkq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDPQ6NzYv4qsb6KeXtSrcA7TZVAYXXqUvDAlaTgWeBY12xrX%2Bj6bpD0lO5JDpzOXgk7aSd13Lya8OI2rIyyW10mzl4PrMwxlnDOVJ0z4Tf04WTuSjz5qerTBZHAwK%2FOFICRmSNkzCCX%2FQyohkm57iAEzTKcB9Qnz6K9%2F5inlRtHZyHutZAaPs5OMjkMurmeNoyyXb9r%2F2kAgoux0fXjQlgrcNM5LXpPxuvmvBJvKVPvocVaCdic%2BVWT2e%2BWbpgGKeNusWmk1V3crGeNVtqzzJZ45TtBcCu10OxcokbqC4lk5Enhxue38GtdEtM%2FTV0ztH2BkltaWiHp7p0kbZHTwIk8pJ6VxOMLgwXk7sOLC5tyub0aqOwcREvFU2nlK76S3r5bkj%2FmcHVmRHBWtmg9vvu9H5yfKm6CwD5ECwfnBAeBNqFK%2F9GD8Thikpu044sJvN6QibCMScftX%2BBjIO4xbc70%2ByetiYpSl%2FCrGyMCNBoFqsR4tCLWwRlcSCu7oby6Di%2BOb95yDDVB%2BaV3VZzwkRk%2BABtm%2BoDOxGi8Qw5%2FPBL2R6qVs8%2FRh1zthDLsHWXJ8GFnRy4OkE63ARJ0YAan5aJS0Gmvt6qU7lb%2FXLK3Uqtz5wEiMjmxHi7DZ2hjNbILe5lmrIAF3V9NAVajgxMLLsj70GOqUBfYLa1xW1toUkK6SmjeDMNryTrdmlunWNlKrvqZAtQH1wbfc4aQUulffA25D8qP1xnISgQf4wVFewCqQcjmQ7LBN9UWmljcSVVup%2FPEMUliPN7%2FXQ2kIyre77mWlr%2FFOuM%2F7jkuzVxVUZjPsWP8%2FvDHjuGVfNFMB90vSw8zD1rdbQC8Cl8QauKs9%2FQ65YV3xGYJIwkj9b2rKUuwGEetafiQxm9nDy&X-Amz-Signature=0c7daaee6dcc9272e4330795a8361f29fec611edb225f99e0e216f0c9f749896&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CQ7EEOZ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T020822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIBGgc1itgFZWKSuGDy22KAJ3ITx4cGd3nIr50HxCbMkUAiEAmSTOdZHBrk3z0Q5LNrzWE0WSTJMvyZm8PtwVI2yDGrkq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDPQ6NzYv4qsb6KeXtSrcA7TZVAYXXqUvDAlaTgWeBY12xrX%2Bj6bpD0lO5JDpzOXgk7aSd13Lya8OI2rIyyW10mzl4PrMwxlnDOVJ0z4Tf04WTuSjz5qerTBZHAwK%2FOFICRmSNkzCCX%2FQyohkm57iAEzTKcB9Qnz6K9%2F5inlRtHZyHutZAaPs5OMjkMurmeNoyyXb9r%2F2kAgoux0fXjQlgrcNM5LXpPxuvmvBJvKVPvocVaCdic%2BVWT2e%2BWbpgGKeNusWmk1V3crGeNVtqzzJZ45TtBcCu10OxcokbqC4lk5Enhxue38GtdEtM%2FTV0ztH2BkltaWiHp7p0kbZHTwIk8pJ6VxOMLgwXk7sOLC5tyub0aqOwcREvFU2nlK76S3r5bkj%2FmcHVmRHBWtmg9vvu9H5yfKm6CwD5ECwfnBAeBNqFK%2F9GD8Thikpu044sJvN6QibCMScftX%2BBjIO4xbc70%2ByetiYpSl%2FCrGyMCNBoFqsR4tCLWwRlcSCu7oby6Di%2BOb95yDDVB%2BaV3VZzwkRk%2BABtm%2BoDOxGi8Qw5%2FPBL2R6qVs8%2FRh1zthDLsHWXJ8GFnRy4OkE63ARJ0YAan5aJS0Gmvt6qU7lb%2FXLK3Uqtz5wEiMjmxHi7DZ2hjNbILe5lmrIAF3V9NAVajgxMLLsj70GOqUBfYLa1xW1toUkK6SmjeDMNryTrdmlunWNlKrvqZAtQH1wbfc4aQUulffA25D8qP1xnISgQf4wVFewCqQcjmQ7LBN9UWmljcSVVup%2FPEMUliPN7%2FXQ2kIyre77mWlr%2FFOuM%2F7jkuzVxVUZjPsWP8%2FvDHjuGVfNFMB90vSw8zD1rdbQC8Cl8QauKs9%2FQ65YV3xGYJIwkj9b2rKUuwGEetafiQxm9nDy&X-Amz-Signature=390e7eef2312485c1a6d3c183923ea55e88be681d2329d9b774d49c32e309965&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHEQWTHF%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T020824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDHXdJ9NnNzdhBtcWM6XmI%2FTb%2FQ1nDerngsILUYODF8twIhAKZNYy8nsPoIIgEanXHRwrx7uGMQ6JH5tK1oF961YoRiKv8DCFEQABoMNjM3NDIzMTgzODA1IgwzmSpYarp7K4GRH8cq3ANtnXE9VINwCKzTxYS9Bmct2ATMetGuIgSn7CvDJnjL8VDV04yVhmwHAVlFh0ozmyInf3Jd3dDmgDHKVZaWXN40f3BuJiLxnQav76ZaDyxw2fWV0dl%2BPg%2Far7vfhjssiF50WhKm0kyLGz%2F%2F2XHXNHfCbAxqSH2qmiRlcehQbuc9czGGAREKFXk800%2BBbJOA%2FDmYsJgk6eSgXp6hWIZuuYBt79ovRdUyazWa8KE3r9WE42WQoEv%2BBUj34zqufk58pUx9ojk7r2EzMdoNKdq5RfAgg0zRedlg3QwvQa%2B6C0f3KqxxaaGGBCa%2BH1A0s03Dqz%2FxSzr6eCdEvpj26aPRfXz0UlOJNjOQIkrjuJdX3sRaMNM%2FbZLoGULksE4u8ycAs6z6Q%2BNoiH3QGeDsYPrbi67v7qxsoUdu9%2F7DKNBiI5WZXJ6Tx8jNHChyEVaXiTG3g7d0%2B5xJ4pNA2o68NG5ygIYQCaFujxKDfumxePD8RIDBMKYY65r71ShiRCPgXa5gMV4%2BYvNm2DjklfWkuGKn8WsQOF01chFT5PnyL0bkhLaV0PELEEIl3v5vV1EdE7aA0bck037ykAIe4PnpvEb0%2Fr6wyHU2IBdeKdQN5MHVsz3UpxyiUusBNP9mJwJX1DCc7Y%2B9BjqkAZgu8UxFm7T%2FfldAy9IsRR5w0RHqEssY%2BiK92FQ7sGUIZS8JZHpGlLjLPxX0Y4asZ3YbPV5pwJJeqHuxg%2Fr3ivErSYGkL4B4B4s23BdObOGvIkXvQy%2FnTR3uRCSykT8Snc7kAiQzMbIC79aQKX%2F34X%2BUY2LF0C9r2DmRgIbSGFeVwxlMiEGr%2B%2F7M8Edn2y4mmTI3LQjF%2BmVJFERcRHhhLIUkoXHl&X-Amz-Signature=8c397bf8974daf8898e32df52afb6ff9122fa92acafe25f04b25533565def5c5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL4WKN46%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T020824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIFyxZtVBKQtmmfst9xPsKGuTsK%2Fpx6XFDqxiKlReUqqrAiEA5fp30ARaVCn1lU%2F4aIEwXecVjhLXYj6I%2BFtUtObMks0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDOv2tRtZTLqelpiFySrcA5WtGMm1G3HL8LFS0GwH4y8sQ9uxuycS5jDkratJYd61YQ0L3CXKx5CWFjidiIlZjB3iYgiuprqg2Aq4BrJFh%2BFcIBpE%2Fi3Ihzm1oVYuQI%2FKQQbxzzLoLChoW6tOVgbTmkWzX%2BDwihDAu6m3POujSQz%2BtxVN%2B0toLvNOSdANP1%2F7qoZyiVCsRmYBMG%2BcfjhWcK5uwLBouvMED4TWNSrwnOBZjV4NuI60JOVSq%2BEZl7axYchhsOYgYR9zIce4kZT8dcElIrnnJUqYqkfKCdoZx4yao44Dg7UKNnmnWHTuBDqvE6hXnVLsJ8PBKBNvsp7ig3LYQyxOfNrqJRSmhbjuJUeBeGYf88CrMwC3M%2BGasDZDNDIumTKtmTH4tc53ySV3vko5vLPJpwviPULUmpJrYA447yJRrtjQItaUNetF9S4kWZ7KQpxNohhTUfuGYOiX9k5TU2Mz2kjFGIYGV6AID8WXG3Fy4bcFSrGWjL9WiG88sZLvaoBdxqMRQQvpsLQ5X5NMmB4mXFUuP8qnnzKDxMgHRcVzL0vAaPFeAjsOu4kx1KF%2FTM4p2WwKN%2Bpk4oTpwlLg7AY3YLLCgnF7LvybhVSAb8O22tuiKW8hPlUOa7ah2LXD4t%2FwYXHjlUVTMO%2Fsj70GOqUBs493LYUaPNh1zPmP1paxxDPMnFJHya0PEJC%2Bc672Qsm7I96aozT1I64WUEV9YFOIaC8sxMrsj%2BEiFWY%2F25XtirEKK15Gj4pSphMtqQW%2BGL0owMqWJejA7P9w3AnacAiP1fixMVF7SZ19dtj3dog2o%2FPJLWj%2Bc4HbdKg8KbHieb7egpH9rqUNnxcIuGP1dOLSulOlBnvO2huikbMCjm2adDKKJQ0i&X-Amz-Signature=efc2dccd7f9e36f2708e1dc06b0043b89adbeb65b548b64e7a0d7700d7415af3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CQ7EEOZ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T020822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIBGgc1itgFZWKSuGDy22KAJ3ITx4cGd3nIr50HxCbMkUAiEAmSTOdZHBrk3z0Q5LNrzWE0WSTJMvyZm8PtwVI2yDGrkq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDPQ6NzYv4qsb6KeXtSrcA7TZVAYXXqUvDAlaTgWeBY12xrX%2Bj6bpD0lO5JDpzOXgk7aSd13Lya8OI2rIyyW10mzl4PrMwxlnDOVJ0z4Tf04WTuSjz5qerTBZHAwK%2FOFICRmSNkzCCX%2FQyohkm57iAEzTKcB9Qnz6K9%2F5inlRtHZyHutZAaPs5OMjkMurmeNoyyXb9r%2F2kAgoux0fXjQlgrcNM5LXpPxuvmvBJvKVPvocVaCdic%2BVWT2e%2BWbpgGKeNusWmk1V3crGeNVtqzzJZ45TtBcCu10OxcokbqC4lk5Enhxue38GtdEtM%2FTV0ztH2BkltaWiHp7p0kbZHTwIk8pJ6VxOMLgwXk7sOLC5tyub0aqOwcREvFU2nlK76S3r5bkj%2FmcHVmRHBWtmg9vvu9H5yfKm6CwD5ECwfnBAeBNqFK%2F9GD8Thikpu044sJvN6QibCMScftX%2BBjIO4xbc70%2ByetiYpSl%2FCrGyMCNBoFqsR4tCLWwRlcSCu7oby6Di%2BOb95yDDVB%2BaV3VZzwkRk%2BABtm%2BoDOxGi8Qw5%2FPBL2R6qVs8%2FRh1zthDLsHWXJ8GFnRy4OkE63ARJ0YAan5aJS0Gmvt6qU7lb%2FXLK3Uqtz5wEiMjmxHi7DZ2hjNbILe5lmrIAF3V9NAVajgxMLLsj70GOqUBfYLa1xW1toUkK6SmjeDMNryTrdmlunWNlKrvqZAtQH1wbfc4aQUulffA25D8qP1xnISgQf4wVFewCqQcjmQ7LBN9UWmljcSVVup%2FPEMUliPN7%2FXQ2kIyre77mWlr%2FFOuM%2F7jkuzVxVUZjPsWP8%2FvDHjuGVfNFMB90vSw8zD1rdbQC8Cl8QauKs9%2FQ65YV3xGYJIwkj9b2rKUuwGEetafiQxm9nDy&X-Amz-Signature=acdf1a063e5caeeb1af2dc08e304c3032b1f140660c107abe7c5fe93212a334a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
