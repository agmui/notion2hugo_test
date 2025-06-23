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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3BVZ24M%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQD8x%2F5DNGHqFWi4v5XkFUqVfrcYD7yEOKc0ubg%2FrAmENAIgZKE5vAm0FNZjC1BP1sM%2F2BCQS8h6EIS1lzW2crpqBEcq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFfaibeCTEhwi1gNRCrcAzrr638iEHumQ7yus1TraO6KhZ45k83HI2xug8kXee%2Fjy0nXa72G%2Foe9OKkZihkjP447KmfkTmoG58rdSJnbcY7GDYkjREn2AEluDX3IV%2Ftw4R6y1ChvvKoNBtwt3yuo8vMRbuy8kqatqxEXjjEEcuZj8LzECWfHFtU4cQkI9FSBGV9lsGx3UPin2HMEQ2iaS58mVmbdXGUHDgYGXuQpNw5cTolS63zS%2BkpPNxvKlwxUE8c6rcKUuCaj4Axkr7%2F188CHxa7CDc9CAEY27aoam62orW1e3tUsfMg9q7vH5FtLp6EgtYjQWXi1YcRFZ1o2rHVG5DdcX%2BivzPBmolrgfm0QEeGqhXhI8fDoriwLOze%2FkQIEozHKT%2FJLxFH7NwlGI1kfAs8MkyELUULrM51aGfnGaHHtTYm%2BqHNjWPfosSQ4H%2FB%2F2%2F0KE%2F%2FVVfkYDk%2FrhBtQWrcoysSOnCjBy8fb1T8LKuH40ryLOgjy%2BoJuQpVmA33MQFn7kephj1VW8iai8c7ql9uxxm9gDrpHRlJQJu3KNoBVOzReYczbSLm7318H94dgXFuNXwHnVsKOoAB0F0tDkBAcMkD7GOSlUVn2O9ER1vdw52URubzbWOFATSQTfXyOj%2Fb%2BzQn%2Bp9tgMPPw48IGOqUBqDbaPobxn1C7HFNPneflg272Z8hHgKTR6Ex6ODwtLMOUd03b3x%2BrKVmIaUfrmEh3fIVieB7BLkf4QUcKrNvWBlx%2Bw6Z4%2Be0l7yNTvZxwsLJ2b8m65JKMUbz1DwDzjmnW8wyN0lyS860zDWnqeMCHqMIwhTjzEeIwVFPc6UqTrJJWQAt9kauOun2RJ5D%2FBWmJdMydUg3aLgvMQ7RjdKo50WsryZCE&X-Amz-Signature=709305b7190247ffab1c9eb7c8e92c5fe8ba7e3bf9c3587911c5d36f7f755fc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3BVZ24M%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQD8x%2F5DNGHqFWi4v5XkFUqVfrcYD7yEOKc0ubg%2FrAmENAIgZKE5vAm0FNZjC1BP1sM%2F2BCQS8h6EIS1lzW2crpqBEcq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFfaibeCTEhwi1gNRCrcAzrr638iEHumQ7yus1TraO6KhZ45k83HI2xug8kXee%2Fjy0nXa72G%2Foe9OKkZihkjP447KmfkTmoG58rdSJnbcY7GDYkjREn2AEluDX3IV%2Ftw4R6y1ChvvKoNBtwt3yuo8vMRbuy8kqatqxEXjjEEcuZj8LzECWfHFtU4cQkI9FSBGV9lsGx3UPin2HMEQ2iaS58mVmbdXGUHDgYGXuQpNw5cTolS63zS%2BkpPNxvKlwxUE8c6rcKUuCaj4Axkr7%2F188CHxa7CDc9CAEY27aoam62orW1e3tUsfMg9q7vH5FtLp6EgtYjQWXi1YcRFZ1o2rHVG5DdcX%2BivzPBmolrgfm0QEeGqhXhI8fDoriwLOze%2FkQIEozHKT%2FJLxFH7NwlGI1kfAs8MkyELUULrM51aGfnGaHHtTYm%2BqHNjWPfosSQ4H%2FB%2F2%2F0KE%2F%2FVVfkYDk%2FrhBtQWrcoysSOnCjBy8fb1T8LKuH40ryLOgjy%2BoJuQpVmA33MQFn7kephj1VW8iai8c7ql9uxxm9gDrpHRlJQJu3KNoBVOzReYczbSLm7318H94dgXFuNXwHnVsKOoAB0F0tDkBAcMkD7GOSlUVn2O9ER1vdw52URubzbWOFATSQTfXyOj%2Fb%2BzQn%2Bp9tgMPPw48IGOqUBqDbaPobxn1C7HFNPneflg272Z8hHgKTR6Ex6ODwtLMOUd03b3x%2BrKVmIaUfrmEh3fIVieB7BLkf4QUcKrNvWBlx%2Bw6Z4%2Be0l7yNTvZxwsLJ2b8m65JKMUbz1DwDzjmnW8wyN0lyS860zDWnqeMCHqMIwhTjzEeIwVFPc6UqTrJJWQAt9kauOun2RJ5D%2FBWmJdMydUg3aLgvMQ7RjdKo50WsryZCE&X-Amz-Signature=3e2da9cc5c153e6c23395cdba2b62ded2555ba33a95f6b55b0a61483c453eda6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3BVZ24M%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQD8x%2F5DNGHqFWi4v5XkFUqVfrcYD7yEOKc0ubg%2FrAmENAIgZKE5vAm0FNZjC1BP1sM%2F2BCQS8h6EIS1lzW2crpqBEcq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFfaibeCTEhwi1gNRCrcAzrr638iEHumQ7yus1TraO6KhZ45k83HI2xug8kXee%2Fjy0nXa72G%2Foe9OKkZihkjP447KmfkTmoG58rdSJnbcY7GDYkjREn2AEluDX3IV%2Ftw4R6y1ChvvKoNBtwt3yuo8vMRbuy8kqatqxEXjjEEcuZj8LzECWfHFtU4cQkI9FSBGV9lsGx3UPin2HMEQ2iaS58mVmbdXGUHDgYGXuQpNw5cTolS63zS%2BkpPNxvKlwxUE8c6rcKUuCaj4Axkr7%2F188CHxa7CDc9CAEY27aoam62orW1e3tUsfMg9q7vH5FtLp6EgtYjQWXi1YcRFZ1o2rHVG5DdcX%2BivzPBmolrgfm0QEeGqhXhI8fDoriwLOze%2FkQIEozHKT%2FJLxFH7NwlGI1kfAs8MkyELUULrM51aGfnGaHHtTYm%2BqHNjWPfosSQ4H%2FB%2F2%2F0KE%2F%2FVVfkYDk%2FrhBtQWrcoysSOnCjBy8fb1T8LKuH40ryLOgjy%2BoJuQpVmA33MQFn7kephj1VW8iai8c7ql9uxxm9gDrpHRlJQJu3KNoBVOzReYczbSLm7318H94dgXFuNXwHnVsKOoAB0F0tDkBAcMkD7GOSlUVn2O9ER1vdw52URubzbWOFATSQTfXyOj%2Fb%2BzQn%2Bp9tgMPPw48IGOqUBqDbaPobxn1C7HFNPneflg272Z8hHgKTR6Ex6ODwtLMOUd03b3x%2BrKVmIaUfrmEh3fIVieB7BLkf4QUcKrNvWBlx%2Bw6Z4%2Be0l7yNTvZxwsLJ2b8m65JKMUbz1DwDzjmnW8wyN0lyS860zDWnqeMCHqMIwhTjzEeIwVFPc6UqTrJJWQAt9kauOun2RJ5D%2FBWmJdMydUg3aLgvMQ7RjdKo50WsryZCE&X-Amz-Signature=abc005b0ab8415e97495d835470441575545f02cffd5f189432d216372be4c01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJ3QA4E%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIFmblYLf0CVT2QVjFu2%2FZQv%2BH4sC5%2FopOAqimXrZWgMYAiEAuybYA9QRSJ2RyoyR3DmW2lnEiYozyAmNnYRrJzovkUcqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ8JuJSBDTK50zlWwCrcA%2B8%2FkWb1fph%2FZQrZFL51XNrgxf3Ff8wBOyseL8u8rMUdM%2FWp5w0lnKmvPFaUKJLPeRI6kFgMdYnD2JAmOmYScdGALwkEKtoQj%2F7FGOfc7a4IuLVN%2BP0Ctn748xmluqJODjwOgj%2FGE94Z6d8WERF8pr7l%2BM9nlReXymNQT0WrvRaSnGAN20sE%2BydcRdFPZFJbEaHPKoEnhQ6zyuchQ3EpJ5QUAphR%2Bacvp93xUXmpl%2Fkqm5hUnprh0DuBLbo6DKaBO96WodHCuXkSjUSjPhVKiRGPG0CCMmy6Z3QzTqKU5ZNur2z158M6ONViUQj87lL0aDV01CSFDPOQHC6clFPVpY3TTuiTPUD2a0zhMIhiDHI2wsF8OPRhkpy2VFW9I8syAT3qQELnSHBDNcXHL5LBNF7ZPevX4VxmzPa5eM%2B8qdT8HsMZxnigJoQvX5DK871kUU6jh80vmr6nqR7ivCxsmJjO0wN34u%2F34l1Q0CtWjup8OzOE28LFtbR3EDvxuQKbLlxWT81UD5bOcRzNFPYK1SdCybZx5jQlwdxaiWpzhubYzf3hYqSCqps3RZvS1faeb36H4GzZ40%2FKvX1pxBdN7o95GSjClUfHlaJOZm30vCmCW4n4ENbS4SHkx3iYMMqv48IGOqUBRLaPHHzr6Rfs0a%2BrBBuGnWki%2FHHkGLGuRymQRjcN0fn8Xh%2F2csOKIbzEt%2Bqb1l%2BsUV9zJdHdxVAH0BC2hYu9b3AwNm54mEYeMe4X7Xlqv5V1tFnGYBd3imtokoppxdziZ6%2B%2B5SsakpVLpwq8OpVVwR3q9ZFEhv9gHhuLok1aviARI1eYe4uQr%2BNoMfrXfbLb%2FsT7BFJWWsKztHpvCdyHC7aRhiPB&X-Amz-Signature=5498b805d1f1920f40249a0c44df104f2e80657370e88450c7a9ccc316b9fdf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SVZUFAQ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDf1woMbeNZAYm3jfcV2sZD70G8%2FXFxGQBjenG4ZRqvAAIhAPl%2BvEj%2BCZ%2FFtLt9Mh11QQ9USTv8pH30M%2FJyJH8EOwxUKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAB%2BcGh%2BEycm2ayZsq3AMyYeoMi%2Bf5mRMZWPweVoh5ajDRXCbSWgiPe0vsGCuVCsYyAW3QuT7QHohmvYotIHDIKd3JoPGpeG4R2d%2Bexz2S2jsHIHBLM7XAUdo9W2%2FXdHSbNSGFgWnhIbpEaB1ukk%2BX3oZ9C%2BTZ8OIDIjWuyYZaWsj%2BJI3%2FYMRkME9RpRyK5J7vwplPxuDxAAulpX10DP7DreIHv6LBAwr0UF4ztf%2BCghtSyErRoWFg8qMVWgwcAwUPO8eJXm9pWiwBPuNdV1ESXJNRr4C6%2B0byyiooIJzl4pZdRG%2FBA85ELNzHB1AUneGRZerYBXFpK%2Fnt65D60zuogmlbBZGYSlHJIvwMYT%2BlCIG7b4hpPEC9cZrS0QZwmkUwT22zazK8y5zUizhdItEyDPXKwhk34%2BnvgyUTcT5dfUiRFptQsyCgIqfrXYquQRE1PlG5gFVGLOcYIt%2BTEJSMWivLjFIol7rykQunBOEfmKdN6tWEaMLkrJXXV06znjiTcKtX%2FaasLnfuMHscgygXDG994S9XbxdKia0rycLxUDgxhwinfo1Tp99nU9obyq0XbWFfMCp8XFZZym6LxOrSUnGSaqoUuIkwymuVWKzb0NatSBlZAfUlinlvws23Jj4errcgpaYQFekh6TClzuPCBjqkAdgkX8CBzqbH4oKPuiUVoffVti2%2BWCrXzB264txciJ5y04yilUDIrMlrjnoDxWyu4AYeF%2Fpxy3qtS%2FhqfrjBN5imGIwpzfhH84yxCSeXkYP7QH%2FHZD7GjaJnpP%2Fact1EbBSsWX326tL0l5F2z5ZaY8fKNKWi%2F%2FUtmGMdD7yeZmpKFian1AFJXi1KET2HhZGRGFJHXXBPLwgEtDKmNWa1C9t2nRMZ&X-Amz-Signature=733bd6108d48a4aaf70806a669eaaba482bae3cf1417052c84a6518087c56045&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3BVZ24M%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQD8x%2F5DNGHqFWi4v5XkFUqVfrcYD7yEOKc0ubg%2FrAmENAIgZKE5vAm0FNZjC1BP1sM%2F2BCQS8h6EIS1lzW2crpqBEcq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFfaibeCTEhwi1gNRCrcAzrr638iEHumQ7yus1TraO6KhZ45k83HI2xug8kXee%2Fjy0nXa72G%2Foe9OKkZihkjP447KmfkTmoG58rdSJnbcY7GDYkjREn2AEluDX3IV%2Ftw4R6y1ChvvKoNBtwt3yuo8vMRbuy8kqatqxEXjjEEcuZj8LzECWfHFtU4cQkI9FSBGV9lsGx3UPin2HMEQ2iaS58mVmbdXGUHDgYGXuQpNw5cTolS63zS%2BkpPNxvKlwxUE8c6rcKUuCaj4Axkr7%2F188CHxa7CDc9CAEY27aoam62orW1e3tUsfMg9q7vH5FtLp6EgtYjQWXi1YcRFZ1o2rHVG5DdcX%2BivzPBmolrgfm0QEeGqhXhI8fDoriwLOze%2FkQIEozHKT%2FJLxFH7NwlGI1kfAs8MkyELUULrM51aGfnGaHHtTYm%2BqHNjWPfosSQ4H%2FB%2F2%2F0KE%2F%2FVVfkYDk%2FrhBtQWrcoysSOnCjBy8fb1T8LKuH40ryLOgjy%2BoJuQpVmA33MQFn7kephj1VW8iai8c7ql9uxxm9gDrpHRlJQJu3KNoBVOzReYczbSLm7318H94dgXFuNXwHnVsKOoAB0F0tDkBAcMkD7GOSlUVn2O9ER1vdw52URubzbWOFATSQTfXyOj%2Fb%2BzQn%2Bp9tgMPPw48IGOqUBqDbaPobxn1C7HFNPneflg272Z8hHgKTR6Ex6ODwtLMOUd03b3x%2BrKVmIaUfrmEh3fIVieB7BLkf4QUcKrNvWBlx%2Bw6Z4%2Be0l7yNTvZxwsLJ2b8m65JKMUbz1DwDzjmnW8wyN0lyS860zDWnqeMCHqMIwhTjzEeIwVFPc6UqTrJJWQAt9kauOun2RJ5D%2FBWmJdMydUg3aLgvMQ7RjdKo50WsryZCE&X-Amz-Signature=1c367bc9f91770cbf977a3b8706c864cfd97316a8697286619791e17d4327938&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
