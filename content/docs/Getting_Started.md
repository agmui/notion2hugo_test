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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SFWBWKL%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDZ6BAxPfii2IBIt3O%2FAZ%2FQ5Wslvepdng8B%2FkwMVaNEAiEA5QD4nkrJaidRzHpimZZteGTn1YlcDGcf%2F7fecExKsB0q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDCmIgl2tZAmkp7wXAyrcA2XV2Enu2oAh1%2Bk4xijD0s8SSXvpq6FZq%2BV21BnEobMQTRV0yeJvacs4I6rVL46DwKbCEE0JdFtaKfuibTrl1aCtcILSUR3xbU2qF7v2d6GqJigGsCY%2FP3Y%2BONxUM%2BLZJBVZJDvDl2CeHjVYu2%2Fhto2RUci1jLkXF%2BCcdj7P7D75cPi1YWm2V978Ay%2FYXBPNyB6niVNEVuF%2BpvQoLgeaYf4ZWyjAKBQoH2S%2FvLD0hEdLrZGGT6Errw%2FeNJ4uVeR%2BaUc0jWb4BRM9gKXqtBsOHy1y9PEGxdCRRPSJAF2qHYtrSEsec8EJ4cM6rW5wwQRSQWofjx4bEFa8indZnfmIGRVv%2FIgSkRrUB029FrNrnQgcNWHdwsGRRBJblUCXm6zKkChALD04EmPPKFtWoqB8n58i%2BDIIfrhBjy05WHF6eRIjBclu5Rx8w7vtP2%2FtooLvMdpZ4dUs2wKruNYDVrhDMnM7%2BJ3bKe4gp9kjyyLSNlThpz9n3BP49cpyMfAmgdHb5Pkatg01atfMGgG9I4%2F5mbYNTiZ3ZJrbN%2FkJnFTcGmoAn6NTUw6vtpaGv2D4KNmqrJOvhcKJCErt6eFVUKVxKdWTXxm%2BmwbrDod1CjL7zLdSrGxlPF9RZG%2Bfqk%2F8MNPNv78GOqUBOmEpXLaV3%2Bqs3%2BvAEDgt5DdavLO7l%2BVryD36ZctwY4s8ZdCRd%2B1GzOHC2qbfEZj%2BZMOhrAwUEtYflICtDerxXpxXPbvfnayD8P4vx1fwRzbzoOUbptebNXMBo2llgXHvOqjI2BCpy0CJarZnIcZbpM8RgOM3N9dBrbgaBb0cZNUX%2BzAd6G85fQUqsr9wjCT0%2F1xvRrMAw7kiMPerF2cfUwTkut1X&X-Amz-Signature=05bd3939941e0a6561ab421703fb73d1006ae47187c142d464f35b405a71e5dc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SFWBWKL%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDZ6BAxPfii2IBIt3O%2FAZ%2FQ5Wslvepdng8B%2FkwMVaNEAiEA5QD4nkrJaidRzHpimZZteGTn1YlcDGcf%2F7fecExKsB0q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDCmIgl2tZAmkp7wXAyrcA2XV2Enu2oAh1%2Bk4xijD0s8SSXvpq6FZq%2BV21BnEobMQTRV0yeJvacs4I6rVL46DwKbCEE0JdFtaKfuibTrl1aCtcILSUR3xbU2qF7v2d6GqJigGsCY%2FP3Y%2BONxUM%2BLZJBVZJDvDl2CeHjVYu2%2Fhto2RUci1jLkXF%2BCcdj7P7D75cPi1YWm2V978Ay%2FYXBPNyB6niVNEVuF%2BpvQoLgeaYf4ZWyjAKBQoH2S%2FvLD0hEdLrZGGT6Errw%2FeNJ4uVeR%2BaUc0jWb4BRM9gKXqtBsOHy1y9PEGxdCRRPSJAF2qHYtrSEsec8EJ4cM6rW5wwQRSQWofjx4bEFa8indZnfmIGRVv%2FIgSkRrUB029FrNrnQgcNWHdwsGRRBJblUCXm6zKkChALD04EmPPKFtWoqB8n58i%2BDIIfrhBjy05WHF6eRIjBclu5Rx8w7vtP2%2FtooLvMdpZ4dUs2wKruNYDVrhDMnM7%2BJ3bKe4gp9kjyyLSNlThpz9n3BP49cpyMfAmgdHb5Pkatg01atfMGgG9I4%2F5mbYNTiZ3ZJrbN%2FkJnFTcGmoAn6NTUw6vtpaGv2D4KNmqrJOvhcKJCErt6eFVUKVxKdWTXxm%2BmwbrDod1CjL7zLdSrGxlPF9RZG%2Bfqk%2F8MNPNv78GOqUBOmEpXLaV3%2Bqs3%2BvAEDgt5DdavLO7l%2BVryD36ZctwY4s8ZdCRd%2B1GzOHC2qbfEZj%2BZMOhrAwUEtYflICtDerxXpxXPbvfnayD8P4vx1fwRzbzoOUbptebNXMBo2llgXHvOqjI2BCpy0CJarZnIcZbpM8RgOM3N9dBrbgaBb0cZNUX%2BzAd6G85fQUqsr9wjCT0%2F1xvRrMAw7kiMPerF2cfUwTkut1X&X-Amz-Signature=01a8b451e493117a6b4d37f2562c0e1b458fbd4f25c649695c7a55e4d33f88ad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEY62PLZ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQTrjK%2BwY%2FRu71NPXSCFjkOBFVDDro2dlxCXGQ7bFcPAiEAmTftrOZsIn1iC0JMuPR6pieBtDc55J6%2BNmOkf91SZZ8q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDPqcd4lU%2FCmAd3Ud4ircA06UfD%2BtfH1hKjR1wxEBeN9prUEqMz9zHvQcjjODuCqUS9beyERqgDeiEPs0gTeGbs0JkrK9Bjj7bPT7c9n8sotuVox8glvMJc%2BlvIU5uMVdQpWCmfop6kF8BKx0YovDsO20Zoi720TEgyKSVcqVKXpaLJwMFBnXsdE6KCo%2BH0hmRNnZa7%2BeC1CPfk7E2IyJH5RQpfxz396ygVSA8UidOOUS67aIOWbArm5f9Za%2FUV05gWuxWweJPmCsCfAzv1KYFtF%2BM8VX0412UB9T8DVRnOFmbmZQYkJxPUodaldQFcXmVGdwjhcXPW4UV%2FvWmarx5LgACdnHxUQg3s5rBW4%2ByWtP5KK3Tm%2F%2BgWfIGDGGwmzAMrQ2v%2FQFpn6WTb3P1QWs%2B16VntUsxPzaLtlUd6RPToxeAIZCzVitROXQRIR5etf8QczH2C86VzYfGrnTX4QGjj5LHV5eGHMkld7iVfHmhNabrpQhjSzByNvIzzDVg3KcO9BUiK%2FdTvok%2BiJDiIv8FuM4%2FCkHg0Eoa3D5LF1MdP7ylQdpew6yqiNOUmQ0GoDwKiI%2B4kY6o4mx9tRTksW09U%2B5cPXhlbWuU83xeB0iBgcsmvvee8tZsPHL87y0rh7xdZAHqSEbgha03YdbMNjNv78GOqUByeXzmbeXC9Nc%2FELEhuNKa7iNJCdyr5eN6TtcLQvo1u%2F3Y9e%2F2y%2BJvOKLy5DKwvMfkNpQdMdQFQOkoLiUrGkj3tLaqL1yyU5WP%2B833QPiACm%2FQldh2E%2BgMF1lMpl0unFo5hXK8Xsu3pwP0q1CQ5c%2BVze9v8eSrtFzfpyQQIXotz%2F1PoGKCzQhQxziUGUuNlBI0voZHbn9EaaLR8j4Fvte3on4dPSY&X-Amz-Signature=afec572ec8dd1ce641c809abf9c87eaf85580b8e63679928ce152496fefbb5d8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6V7WILX%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T140805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBUSHl1mSqCOTOYkBeKADOqY2KlGiUuOE8YocMHW%2Bh%2FAIhAIAwbvNNu5UIc%2BTJ9Siifqc5gVJiIGCNufILdSEAEDsgKv8DCBcQABoMNjM3NDIzMTgzODA1IgwT3yL6yH4IB50fV0Mq3AM0MBFEZ8H2sQAcQL5%2BnwnjG7qmb7%2Fla0kZgHO%2BpnR18Ft7s6c9JyRBswjpdpfyiugwhhmLJAQCzmgJ8VNtzAyvHPanXYBFUHhqntZTqL384HMu4BkbbqIG4pUZLzURWbkVJwLdiG%2B560OM3V5meVwwyI4gfnGvV3rrb7gj%2FPbC545RcOCQ40L%2B8APRmc4kjxXBY9QS7a0aw2xQhxXkWHqhJdRkFVR1mQgRT3VwmpCOiaB2movpIi8GIx6SmeuIutjRSG8N0GO7lI9YLZ2y39ItzmBUw5xCs2Av%2FbbC8IEV3MWgZffnepvmxn0mktwZ1KXpB42OXD3mCiDTQPQsdjvVH%2FvTXRDdb3nynVhycg%2F46kBlX0VI4iMASMpli5BUFJyCoh4p6akfksWsvxayJ1uT0vZeekQZUiqBTQ8If4dv3hAG4XbbiTk4GaS73GPhLEC6UwS5FDOCwv5GyYaaMibe8Pqq1hi%2BL17xVlfHUkSzkAG5afza7LQyoBFmzDXIRqayGPfMCxJN1jf%2FhO4BT7PUxMAKFGJhHdlzzbtC%2BcM9ZkR1deBOkJ5%2FrIyTBqIpwe5vJGH4mrutnRj5%2BtBN9Wo0fQ0dAkn34wjeCl%2FjQ2JCSWGGdPkBz6DxMfZp5TDRzb%2B%2FBjqkAYBrKH191uUMmR2JnorheQOgOV7Z%2FNcsVhb5YPKg5%2BmGcbeZgCC3S%2FJvTOfGh8qVRHCYmAwJlKP6HGzxO6%2BDzam3x87lCQtQMDl4W41p15l1MstoRZy0Ji0LyJEc4M6GVdn5vmjywvS2vnKLWFX6peaPW0zsJGkA8X2kS60ABX5iJPT%2Fs%2BWm8uP48N1MyFEM3DB%2F32IOn1YfYjNlvLHBCr5bJD8e&X-Amz-Signature=fbb438ef21b84a165005b7eab57c894b7296a2cec7dd9278fd61e6cbb5f05c32&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SFWBWKL%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDZ6BAxPfii2IBIt3O%2FAZ%2FQ5Wslvepdng8B%2FkwMVaNEAiEA5QD4nkrJaidRzHpimZZteGTn1YlcDGcf%2F7fecExKsB0q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDCmIgl2tZAmkp7wXAyrcA2XV2Enu2oAh1%2Bk4xijD0s8SSXvpq6FZq%2BV21BnEobMQTRV0yeJvacs4I6rVL46DwKbCEE0JdFtaKfuibTrl1aCtcILSUR3xbU2qF7v2d6GqJigGsCY%2FP3Y%2BONxUM%2BLZJBVZJDvDl2CeHjVYu2%2Fhto2RUci1jLkXF%2BCcdj7P7D75cPi1YWm2V978Ay%2FYXBPNyB6niVNEVuF%2BpvQoLgeaYf4ZWyjAKBQoH2S%2FvLD0hEdLrZGGT6Errw%2FeNJ4uVeR%2BaUc0jWb4BRM9gKXqtBsOHy1y9PEGxdCRRPSJAF2qHYtrSEsec8EJ4cM6rW5wwQRSQWofjx4bEFa8indZnfmIGRVv%2FIgSkRrUB029FrNrnQgcNWHdwsGRRBJblUCXm6zKkChALD04EmPPKFtWoqB8n58i%2BDIIfrhBjy05WHF6eRIjBclu5Rx8w7vtP2%2FtooLvMdpZ4dUs2wKruNYDVrhDMnM7%2BJ3bKe4gp9kjyyLSNlThpz9n3BP49cpyMfAmgdHb5Pkatg01atfMGgG9I4%2F5mbYNTiZ3ZJrbN%2FkJnFTcGmoAn6NTUw6vtpaGv2D4KNmqrJOvhcKJCErt6eFVUKVxKdWTXxm%2BmwbrDod1CjL7zLdSrGxlPF9RZG%2Bfqk%2F8MNPNv78GOqUBOmEpXLaV3%2Bqs3%2BvAEDgt5DdavLO7l%2BVryD36ZctwY4s8ZdCRd%2B1GzOHC2qbfEZj%2BZMOhrAwUEtYflICtDerxXpxXPbvfnayD8P4vx1fwRzbzoOUbptebNXMBo2llgXHvOqjI2BCpy0CJarZnIcZbpM8RgOM3N9dBrbgaBb0cZNUX%2BzAd6G85fQUqsr9wjCT0%2F1xvRrMAw7kiMPerF2cfUwTkut1X&X-Amz-Signature=30a8ae07bcb031cc6b8758c186b6c80bb14b92143eb92b0ab9b75aeb04131d56&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
