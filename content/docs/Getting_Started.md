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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLEYYTGE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T021957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD3R%2FGVnhA%2BQCeu4vo4u%2BcV0tcyeAoonP8xxPi55R2XIAIhANX6jTFmOheOaNOnKskt0cTAWy8%2Fo%2BujtV7do9ihHaxkKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzALcYcA7YK7y00BWcq3AOHsCTSNgF0GoaCPIMPTCQL3wvEDQfvOWPtvg4WymJ5suWshUemK6aj9Vg%2FBwsZA95B7Pr3PHJGeQKZApvOOvEX2gRybtbK%2FLvvzccLrr28W%2FtHPbTqmttKsbjj2D8WPM6BEY3I5Tj8F%2BsNkJR2NDqPWStgtfK9R8dXNpcSWaCTmuTizfNvU5AcRGLZz%2BjVh3N8qORtmvkiS9pW0xLiB%2BwNQDEPCz8T43gAWCgXJK7ISCd8tVU7jrYfNdjsrqif8k6pmrG9K2u9bAzSsARg4hKTDNuFDB4%2FxCJPsb9jItdUqPcHrefpfG5qWMRP%2BSQXBPFe3EThfU9by789oEsaWeJYLJ2UT95hGsKrfsy0FwPzz1QerAioX4OtAy7miugwqJ%2FPYaqIu%2BIhWZisNYUBzlXyDFUtmtCQ3l21lff2zmfhVTCqLbn1wQr4XgUtqqp2tldUAkzT6n9lvebgrSZvU5DAeqiGg68QY7wUbZKgQuKZNOsG8F24d2S%2Fv96OplUTNKmXAzLbIRYT6GSnNmgCeBrGyfhGo%2FrCRJIcbaPD2RaQRsvkv3PmFCdyL52zZaKmp1x22xJPDaM6TGvtVCZIo%2BomTBzyB48TmYS%2FaIyRhxRmXypb4lXwIVjQUz3bDTCf3uG%2FBjqkAdnA%2F2Yh5%2FLNwQnwbRaHOwH%2B8FeSzu5uOraVSGOOZt5EKHmvVpRamQwPJVg7huItKwMXHuDlby%2Fsfb2fAZoYg%2FhPJnTMsM81h8IPgHJq3%2FG9mdb7TDVEkjaReyzpFpluY6p2v1O1D%2FV%2BHhVPb52A4L4HkOaL7idttnBrfgzOomJiXbz3SwyvMB3Q67orr2PkIFy8Qr2dsCky15JghDFduw%2BZWMzs&X-Amz-Signature=c05361db621b42a0e0ab6a2903399f1c42da24e953ed39206cfcd5d73a37aaeb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLEYYTGE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T021957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD3R%2FGVnhA%2BQCeu4vo4u%2BcV0tcyeAoonP8xxPi55R2XIAIhANX6jTFmOheOaNOnKskt0cTAWy8%2Fo%2BujtV7do9ihHaxkKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzALcYcA7YK7y00BWcq3AOHsCTSNgF0GoaCPIMPTCQL3wvEDQfvOWPtvg4WymJ5suWshUemK6aj9Vg%2FBwsZA95B7Pr3PHJGeQKZApvOOvEX2gRybtbK%2FLvvzccLrr28W%2FtHPbTqmttKsbjj2D8WPM6BEY3I5Tj8F%2BsNkJR2NDqPWStgtfK9R8dXNpcSWaCTmuTizfNvU5AcRGLZz%2BjVh3N8qORtmvkiS9pW0xLiB%2BwNQDEPCz8T43gAWCgXJK7ISCd8tVU7jrYfNdjsrqif8k6pmrG9K2u9bAzSsARg4hKTDNuFDB4%2FxCJPsb9jItdUqPcHrefpfG5qWMRP%2BSQXBPFe3EThfU9by789oEsaWeJYLJ2UT95hGsKrfsy0FwPzz1QerAioX4OtAy7miugwqJ%2FPYaqIu%2BIhWZisNYUBzlXyDFUtmtCQ3l21lff2zmfhVTCqLbn1wQr4XgUtqqp2tldUAkzT6n9lvebgrSZvU5DAeqiGg68QY7wUbZKgQuKZNOsG8F24d2S%2Fv96OplUTNKmXAzLbIRYT6GSnNmgCeBrGyfhGo%2FrCRJIcbaPD2RaQRsvkv3PmFCdyL52zZaKmp1x22xJPDaM6TGvtVCZIo%2BomTBzyB48TmYS%2FaIyRhxRmXypb4lXwIVjQUz3bDTCf3uG%2FBjqkAdnA%2F2Yh5%2FLNwQnwbRaHOwH%2B8FeSzu5uOraVSGOOZt5EKHmvVpRamQwPJVg7huItKwMXHuDlby%2Fsfb2fAZoYg%2FhPJnTMsM81h8IPgHJq3%2FG9mdb7TDVEkjaReyzpFpluY6p2v1O1D%2FV%2BHhVPb52A4L4HkOaL7idttnBrfgzOomJiXbz3SwyvMB3Q67orr2PkIFy8Qr2dsCky15JghDFduw%2BZWMzs&X-Amz-Signature=5780a28c1e385442ad4bcd2084775209e2aed8210d7243237aded0b1c72d2623&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VHRM523%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T022001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCrhqFq4zL8mYWCNPwWKnrSWt70NjI931BkDwB%2BrnCl%2FwIgEU4qfh5iL%2BMPS2hAntJXnj5x5%2BAZxE47DI%2FAhroTUgIqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHE0nCO3VIYQlpJXSircA%2Byd8qt6JLBbr1xflaML1Am8aR3UD7iAP6Ju2hiMB1OCUIPhrN8mSGrHpY9ddhJBvrnxg1iH7Qb9mb5uh%2B0fjiPt2gvauTLAfL4SFTkYVSGW%2F4dnZowNpbuhgvh0LvFFt8Iwr48JhB5YWjtQ6NIV%2Bdf%2BfTlp7Q5nCPdFNKes9BmeIPMKmabqrXUz7GGmhvo2Sj4h4Wn3MFwexHbXLqTwtRXN%2BtZKhE%2B7BKGXMcS6kbcAxrlaEQkob4GcVLLCpmAKIIv%2FEUr9x2ovGRUZmFWUxNzcS2K%2FBOp9fqXgM%2FUas5rlP5XnbJG3i4FSt91ZvuPVPFhMfe21zjPGxIr0JEuj0gd3MJs6MQaO8HNuOa4oO4p%2B4uDdQXfIizbuAKcObcgHvgdTJt9NCP%2FPQVHQsgyW23RZBN47tBIPf8EmmzVg4AiU1TiWX2ynw2v4crCMuUGFcgXfwNwDut2CSIdz7cAQFJxFZ%2Bm%2BI%2Fg8%2FWl3frgjWB8XJE86S5FDe1OWzmOT%2BWccUuoVtmetd1K6izCyTFBZ5SGcpbiqQNH%2B%2FO%2BUygFAeMvCYL%2BSAv%2BS9zpYFHj7ooeXMzOeZZvpc9Q4XM6H4RjAt7RBw09%2F%2FMaCr1WHtqO0o7ZSdiZvxCp1F9lgT7aRMJHe4b8GOqUBbbzo4r0ApKyi5eRXzx%2F9UYHKDKYrAiU1%2FfOunU4v43UJQR0YJ%2B1k6vAeT67ALeo5%2FetqY1lLIsH05F%2Fua6HHitvf3ozHGk5A1gvGFylm5SE38duRFCcKGsM5i2CBJXdkhqjmPC%2F81j%2BE%2FbtscaWTFslbX%2B9DVxFrTlN5UU7ZfHeXr3z75S62rSlzqZdJI6NU1v%2B%2Fo5Ik6a4%2B6r0n%2FPLXwF2Q2Svu&X-Amz-Signature=b00c9346210c600ae4e22d8ecfe1f754930cc93cfed749e5fa366436fb8e4f08&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RL32LPL%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T022002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDqnOGSDGetGLQ1KFflZVw1ZVih6o6ek0e1vWYAtQdkIwIgOJgZMnZzpCHvdlNQoqjNu6k2d8XQouoWsiUv2ILrZaUqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVx2YAsyRWhWvpqGyrcA7rPh4hcqwFSxel3igMvjJfy7nirepigcUY3Ysd1gm7A5%2B%2Fl4EWk74tfo1hJXK%2Fc8lETl77F0WQLHGGLV%2FTCMPHWVlYSMV9abL12gSg3%2Bzvkmc%2BWPIp2TTmoOCrGeN9o88vSef5E%2F4tV%2FOy2K8nfmMJqWfyhoSq5c%2F2Qbo9jzIjo3HUkOF2aUIny0HzoHqTKQk7P%2Fyx%2BK0eqPqDpcbZubT1hnKJTURLTV2T6voSZpzJxWnnM4GY8QiLhc0cILRVOFusZKqfkFA%2FpHw9lVM6dA3wTtjXImGfzmj1Yoi0pMpQfRObDZ7B%2F6U4ytvVEWHd9knee43GM9n7DEVus8NhzEhFUQV%2BCUIH2ktr9NrOzU8ECnH%2Faq%2B2AMg2IhKDLLP10Voz2pvwt6qw6LUUhAJuSUKomlwUY4EnOFEr7TdAZS77LqNgl0Z9I2JkSkNgFNLkKhfnHPs8LkDQx9Ant7ajzBqgDrxNgykf98pgCNoIfBgSDlN2kICNip26H9xxJqn5UznB2DJZNK3ozlkbJYrFKEUUAsdg53R8o6BW3wR7b2dNh1KMmhILGCBuziqBGwobyZkCHW4yyvZiO9LCP12y1w9AoOanR9GBQ5NnUJnuv4HR%2FIws%2BW3ulbyjEntkkMOr34b8GOqUBT56B%2BfAuPf6B3Tm%2FButsGPgvN9g%2B5tNOGzK0%2B0D585EAzgDgpPlxOq%2FnmVmgv2g60fFmRmiY2Bz%2FLr9KAET0C4RymeFRt%2BrChma9HrtMsQ%2B7J0X%2BmsU15suurhedcn5HlhFBrZbvqWVDuvLXA%2BjsPPk9aSZl0rmevLheSkaLAFsIdXMq0CpBXzJU6xtQXF1jLPSiENTUoXmcZuUEfqW%2BrhRWvYXm&X-Amz-Signature=fab6d24985ea67d59c6fd62ebafe207b0405b4e727daed721c79389b4d90867b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLEYYTGE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T021957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD3R%2FGVnhA%2BQCeu4vo4u%2BcV0tcyeAoonP8xxPi55R2XIAIhANX6jTFmOheOaNOnKskt0cTAWy8%2Fo%2BujtV7do9ihHaxkKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzALcYcA7YK7y00BWcq3AOHsCTSNgF0GoaCPIMPTCQL3wvEDQfvOWPtvg4WymJ5suWshUemK6aj9Vg%2FBwsZA95B7Pr3PHJGeQKZApvOOvEX2gRybtbK%2FLvvzccLrr28W%2FtHPbTqmttKsbjj2D8WPM6BEY3I5Tj8F%2BsNkJR2NDqPWStgtfK9R8dXNpcSWaCTmuTizfNvU5AcRGLZz%2BjVh3N8qORtmvkiS9pW0xLiB%2BwNQDEPCz8T43gAWCgXJK7ISCd8tVU7jrYfNdjsrqif8k6pmrG9K2u9bAzSsARg4hKTDNuFDB4%2FxCJPsb9jItdUqPcHrefpfG5qWMRP%2BSQXBPFe3EThfU9by789oEsaWeJYLJ2UT95hGsKrfsy0FwPzz1QerAioX4OtAy7miugwqJ%2FPYaqIu%2BIhWZisNYUBzlXyDFUtmtCQ3l21lff2zmfhVTCqLbn1wQr4XgUtqqp2tldUAkzT6n9lvebgrSZvU5DAeqiGg68QY7wUbZKgQuKZNOsG8F24d2S%2Fv96OplUTNKmXAzLbIRYT6GSnNmgCeBrGyfhGo%2FrCRJIcbaPD2RaQRsvkv3PmFCdyL52zZaKmp1x22xJPDaM6TGvtVCZIo%2BomTBzyB48TmYS%2FaIyRhxRmXypb4lXwIVjQUz3bDTCf3uG%2FBjqkAdnA%2F2Yh5%2FLNwQnwbRaHOwH%2B8FeSzu5uOraVSGOOZt5EKHmvVpRamQwPJVg7huItKwMXHuDlby%2Fsfb2fAZoYg%2FhPJnTMsM81h8IPgHJq3%2FG9mdb7TDVEkjaReyzpFpluY6p2v1O1D%2FV%2BHhVPb52A4L4HkOaL7idttnBrfgzOomJiXbz3SwyvMB3Q67orr2PkIFy8Qr2dsCky15JghDFduw%2BZWMzs&X-Amz-Signature=53bb46615d5411982686eaa389eb656db41cc8b294a45bfbdc6049b564eb2483&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
