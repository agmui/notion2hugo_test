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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AGJFL7W%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9M5LvqqOW5W13%2F1gcTTvWWzsJQ4t9f6fxP%2F8Kepz8BAiB0RfivkH3eTPhr2YMEKBjGtLp1L63ZPGodiUN2fgVCKCqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQS8mWWW%2BaBkjR1cdKtwDW%2F35si7jAODWFZgipAMdIJMcNFwjnH6fFtWuc7PdM6zopnvpW4lWvuHhiLusiWVeT6try1aPf6cDPEQBos3s4F9c%2BmRV6nx6IN%2B%2F%2FEHLFi%2FYRJAPZUNdPbJlKiIAUnqWRgQ4%2B23d7z3sVWnkef%2FFszViNFtkvVl1GmY6xX76hb1caTc5qRte2kyla1EOqJA4%2F4ay8W8bgfzYDf3m2vhRvbZoslI43LCKz4H8J3tADh%2FbNe90Y6gNuIy8Zy8mx35X%2BNPcmNqY2%2B%2BJkLUzZ3eJPn0YxGKyWZGrj5KPnZWkcAdraygyGSA%2FEgbst6Xrsm47voDmNtdozf4nICVLTY4ymooTuEzvqYo9uo%2F4Qij1z80WHaxOV01x4Hnw%2BUG%2BfPPiL40kKf9jBdji9xvtrPllF0IenD5RDzKUuAtxBXfg%2FXTg%2B8gjVbYAfRuIHsYFPyLeUp%2Bh4yPBAz%2FGYGP1QfD849RFtDn0P6mnejTxq8zZnSgw1sjJ4kU5rZyJHKlrpQCysdYYQ8SDOxXA0WgvQTzzzhnT5Qrr21n48itNNimvmXqafk7CbCkhtZmUAAo4DpQYn%2Fw1DRFi5Ib351OuUb4jCNxwpYNPzrpM0kkJ6yFBigDOlgh71D7U%2B7J3Gm4wtOPxvAY6pgEPr88R2wuSIE5ZmI7j3Byybj%2BWmtztFvgw70MmbC%2FYaEOENLRR%2Bqho4OxVkRJQpFFwCE0Siv56Q4IKGkwPbbc2kfrckk8Cj7Og%2BCiUispMOB1bjXf2Fp6BtK9Ny9cSVUz3%2B38rzxLhgb6E9M1pTMJu7ueyXPv7IADjYD8NcXpbYauwOoGuua4%2Fog1r0tpoRr2o5rcp4o9R5b%2F%2FLkFs43wdyFTMHs%2FD&X-Amz-Signature=99743ca282c44baa19c0e1eefc76202240e7d0e04c98e24b13fcebcf7dff9d96&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AGJFL7W%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9M5LvqqOW5W13%2F1gcTTvWWzsJQ4t9f6fxP%2F8Kepz8BAiB0RfivkH3eTPhr2YMEKBjGtLp1L63ZPGodiUN2fgVCKCqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQS8mWWW%2BaBkjR1cdKtwDW%2F35si7jAODWFZgipAMdIJMcNFwjnH6fFtWuc7PdM6zopnvpW4lWvuHhiLusiWVeT6try1aPf6cDPEQBos3s4F9c%2BmRV6nx6IN%2B%2F%2FEHLFi%2FYRJAPZUNdPbJlKiIAUnqWRgQ4%2B23d7z3sVWnkef%2FFszViNFtkvVl1GmY6xX76hb1caTc5qRte2kyla1EOqJA4%2F4ay8W8bgfzYDf3m2vhRvbZoslI43LCKz4H8J3tADh%2FbNe90Y6gNuIy8Zy8mx35X%2BNPcmNqY2%2B%2BJkLUzZ3eJPn0YxGKyWZGrj5KPnZWkcAdraygyGSA%2FEgbst6Xrsm47voDmNtdozf4nICVLTY4ymooTuEzvqYo9uo%2F4Qij1z80WHaxOV01x4Hnw%2BUG%2BfPPiL40kKf9jBdji9xvtrPllF0IenD5RDzKUuAtxBXfg%2FXTg%2B8gjVbYAfRuIHsYFPyLeUp%2Bh4yPBAz%2FGYGP1QfD849RFtDn0P6mnejTxq8zZnSgw1sjJ4kU5rZyJHKlrpQCysdYYQ8SDOxXA0WgvQTzzzhnT5Qrr21n48itNNimvmXqafk7CbCkhtZmUAAo4DpQYn%2Fw1DRFi5Ib351OuUb4jCNxwpYNPzrpM0kkJ6yFBigDOlgh71D7U%2B7J3Gm4wtOPxvAY6pgEPr88R2wuSIE5ZmI7j3Byybj%2BWmtztFvgw70MmbC%2FYaEOENLRR%2Bqho4OxVkRJQpFFwCE0Siv56Q4IKGkwPbbc2kfrckk8Cj7Og%2BCiUispMOB1bjXf2Fp6BtK9Ny9cSVUz3%2B38rzxLhgb6E9M1pTMJu7ueyXPv7IADjYD8NcXpbYauwOoGuua4%2Fog1r0tpoRr2o5rcp4o9R5b%2F%2FLkFs43wdyFTMHs%2FD&X-Amz-Signature=b60e5260b7cce2c99d0535ddb0a5818206fbc9f6ed67b412079bbce1bc0028da&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFUEXKLU%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMV01L5tsqJeXpJMGcYJnjeNEoVlFckJ37y%2Fe0JmgcOAIhALysfuYjal2xivmkz%2FsJJpAXnmamjFlikArT0JuoDxG3KogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyx1QWTzwMQC0HXIFEq3AP%2FEqcU%2Fo3qQaXvid0SfY3Xv8IBoYJGOzKQHgaurVfBXEj73uUTvXicQR7Tt429ZUyb9tMLbz7iGM7W83oHDgK7HRC2E7picRAzOkjE2CEWVjh1GJIewU%2FyAWbYuxHrWjCtAF59PP0RnObdcDL9WQ3hq%2FX31PkbroQpb1gN3zZMab59jQ5Hys1LZEYSOD%2FrmegSff9tgg5wH1TQrd0gtqjKFAOUWA%2BKTrmZGwJlRr6ZXstw0Cutqt0mBzwz10AlCNvfMaomx%2F%2Bj9cCCUCXH7g3wSHqtNNOzgIP2KVgIQPuK4srWRcSmoBGASphV%2FE7R3m%2BS0cOtX1fVHxRqIixrpBlBMUYvZ%2Fe%2FFxsKdZjJHcdqlmKvhnFxviSywyC7XUALZygz3Oa7a4y9wmnvcWmeDGCgnj3W82AFzTw7J8wJ9KrUp4970%2BUlC5znTUqNODA3WmWyZp068%2Fo%2FwRh6sa4mq%2F4sneRMLCdV0U9liwXHvILIhevXhFB%2FUyw42%2F9W5t5M1O%2FSViVZ2jdFNTLhu5ABFQHWFJ6VJ2SmdWX64pI1ahrTXsl7T5jExq%2FT2blxgfnLNBsjgyVdcKKT%2FyyM6Fc8SOKX1Ng0W6RLZTs1OVHyKi5sGD%2FhYZ77zZ9P7RQVYjCO5PG8BjqkAct%2FYucvnLZGAdnalLOakxTUjDmGkpfyBgAXhecSobJyIpOFZ5sAk1a8w5CGhBrgBXLEn0oXvG4dtgKx1ji4CsdByLCWYu%2BkzSKP4Pgbb%2FXjjl%2F1oNxMrFXvn9QrhiYmX6ZddeJ5kcipAKv%2FiB9oUy3oUvJGEnfsBpM8YQeqku4INhwGI1BgF1hL%2BNrQ%2BPJWrA1wZKDqK8ljkgis5QxBcoDl%2FufI&X-Amz-Signature=066b490d109a6320adf8f983ecc5783bdf7a939e21e8bc0358aab31cc03d349b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZBL5CSK%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxbvhtvFHMJYZZc1UdvtRmIsX5C%2FM65HyYHz0G03%2Bc%2FAIhAJ%2FlmOun0tSnF%2BH03B6QiI9SqiIVn4Nu8cPaZy5Cx6aYKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzxbvzWIXnEZD9c3Iq3AO%2FLcwW1UVv%2FNRdLZFPhsvmyF%2BfPiIYYSVf%2Bnz8eW%2BfVEKMdtO0lDSFrDhlxU9k0zKL5OM0FR8lJ7gw4k%2BmecNRr%2FuzdwQotVebi2Et9NrNHRXDvoK0GcVgji3fo4EvFA2FdQh6JZKydKRO9VkldKu8staNYoIL0Z9JzP8NcFaymgK%2BwIM1mug%2F3%2FFeLENfIIdpuCK6bnwYtxObby7QXFCoApsakiQXQKS5Jiag4EkAY2f2DCSZdp6JPHFVeFpgrs9hg3KBy3nytXT0dXa3E6ybccPK%2B4uO9%2BqXlFCgdDeN90ucHilLV91V5xoJB%2FL8lNjg%2F0mGw5qoUzDkXN9h58q4Jvz10fdSxmlLwr7i6j018LhTQqMGvE0Ynj6qWQSlpa%2FYoGtmIvTQdNxw0GoMmPhpboOe0X%2F0qZ4LsqctDaAz%2BTPcKdMPVsFoIndZYGVrULDrVAszTtoxBBHEEpcGcFCPrva8x4mWS81aw%2BcYx2jEWaa1BUwP8Im2ilMDBBNB3CO6XjOJJE6oWfWgpx6Tcpi3aYWJReoHreCLJR1kWkDZxtanb5MFzkugBJC3SofpSuBp8Cp6N4ir6WJ7yTTqjGRKd2C5pEBI3TtHwhiHpzFynFKPCHgtft0Y%2BCSiSzCc4%2FG8BjqkAcmilCn%2BdnrCSmYrybkW1%2BuFNzQqxq7xAWisXUsk6Pdp%2F750tzPYpvl2HhKe3fyMpe924QWe%2FmvXP3EV%2BLm4MwA0iOZmTcpGnWn0i7B7%2Fe5dq%2BcUcDC5Jo3%2FCV6Csn6%2FwylBUi4nOQ0gByDH9utfRtm1hIehsrB1GNY0iiQHSuDwwr5XpwxHLVArsBNW9PkR9xdcsRIiYwG3EbW%2B6LeGXF5czrxF&X-Amz-Signature=252f445d4c1c61be049cc28ede8a3f70cca65668ea62a7300225f249aa6e0cb4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AGJFL7W%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9M5LvqqOW5W13%2F1gcTTvWWzsJQ4t9f6fxP%2F8Kepz8BAiB0RfivkH3eTPhr2YMEKBjGtLp1L63ZPGodiUN2fgVCKCqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQS8mWWW%2BaBkjR1cdKtwDW%2F35si7jAODWFZgipAMdIJMcNFwjnH6fFtWuc7PdM6zopnvpW4lWvuHhiLusiWVeT6try1aPf6cDPEQBos3s4F9c%2BmRV6nx6IN%2B%2F%2FEHLFi%2FYRJAPZUNdPbJlKiIAUnqWRgQ4%2B23d7z3sVWnkef%2FFszViNFtkvVl1GmY6xX76hb1caTc5qRte2kyla1EOqJA4%2F4ay8W8bgfzYDf3m2vhRvbZoslI43LCKz4H8J3tADh%2FbNe90Y6gNuIy8Zy8mx35X%2BNPcmNqY2%2B%2BJkLUzZ3eJPn0YxGKyWZGrj5KPnZWkcAdraygyGSA%2FEgbst6Xrsm47voDmNtdozf4nICVLTY4ymooTuEzvqYo9uo%2F4Qij1z80WHaxOV01x4Hnw%2BUG%2BfPPiL40kKf9jBdji9xvtrPllF0IenD5RDzKUuAtxBXfg%2FXTg%2B8gjVbYAfRuIHsYFPyLeUp%2Bh4yPBAz%2FGYGP1QfD849RFtDn0P6mnejTxq8zZnSgw1sjJ4kU5rZyJHKlrpQCysdYYQ8SDOxXA0WgvQTzzzhnT5Qrr21n48itNNimvmXqafk7CbCkhtZmUAAo4DpQYn%2Fw1DRFi5Ib351OuUb4jCNxwpYNPzrpM0kkJ6yFBigDOlgh71D7U%2B7J3Gm4wtOPxvAY6pgEPr88R2wuSIE5ZmI7j3Byybj%2BWmtztFvgw70MmbC%2FYaEOENLRR%2Bqho4OxVkRJQpFFwCE0Siv56Q4IKGkwPbbc2kfrckk8Cj7Og%2BCiUispMOB1bjXf2Fp6BtK9Ny9cSVUz3%2B38rzxLhgb6E9M1pTMJu7ueyXPv7IADjYD8NcXpbYauwOoGuua4%2Fog1r0tpoRr2o5rcp4o9R5b%2F%2FLkFs43wdyFTMHs%2FD&X-Amz-Signature=44210e24d83522da92e104421eac348e1c1042fde79e2daa86c5d267a2eb86a0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
