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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA7DCRZ3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCICyGWb6w48%2F2v3Em96XfyYJkCZeWoR1AMgT8k9E2WzQpAiALbn2koYTbAzdojLYBztpChA16F3ABopTHQdFMvih%2BQir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMF5MNmxOW4Bg2ynhlKtwDw9yCznbO4wZFHoGupBXDh1MEYXe8oc7ta3HBjfno6xieBCUwz1immS3ki5taNOKXrTaR13nrwF3v5oY6RinIUJ9gjhGhEGNhv694XyEPAtsObPCW%2BA9HzH045LKmSLMe6YZneoQ9eKKmrYyybKc8%2FFlfKmm1WrueoYvEyqMmFHdwqHAwEbb2m6zH%2FWSW7vseCfbMjRTEIAKadM14XayOnFpxKK99%2BdHCGLJNy6zd5kvtTWgCvHa9AOpQULFaPbjfQoSgPGADPuOiuhAe7en26a430BlwZpwYrn%2BJLG1mx8twzfqNZeoOd2Nxr3TW50t6gkHAnSaXEd%2BUxljP56HgZlM3Qp8mE9FKxJwTK2s1frCYz3En%2BJ2DQUMzlDpzTSzkvPYPsMfe9QC4HJNWtL7GkBYsc69egazuLU7sfDqECvFYt835qxxXrGz0O0%2FyEIGbRho1%2ByDQOeSfwz04i6iwZn26zHS8pJykCF6eooIZQKztAOSEJ7Y%2Be6X8vPh4JmlV%2BaAOJfkkoUuzVOhGwZEtrDrQnRjjtC%2FWYneuEdPihqic9i%2FlR2hmZNy%2B4pDPUu24DQI5sx5%2ByDpu%2Fsl7YB1W4DDlduzE%2FaB7tB9%2F7E0qt0GzIpZQcadI8mTRGnMwusGTxAY6pgFrck45KgqaPQVUkRcn0GJw8cDLCq84n1K9xMbv7kgjc5Pfhl53YX8WR04P8hIqopGnPXY6VIH2tAVPrAOmGTsIWGaN8VtMBDV%2Bxd8IXOPpomrQxrPFDzT6A7yvBPzRg8Yuvx8Y7%2FNOuM0udOVGzMpbdmq%2BElyMhABSGKdlGq7zkms0BbeDXtIwagVwRO5d0VLGsC9%2B0tNGBWZhmnWyzHS5mQrCwejH&X-Amz-Signature=7bb1ade0a1d64811e31836fc416351118ba8378a59fb5f654ad73f07e7e730cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA7DCRZ3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCICyGWb6w48%2F2v3Em96XfyYJkCZeWoR1AMgT8k9E2WzQpAiALbn2koYTbAzdojLYBztpChA16F3ABopTHQdFMvih%2BQir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMF5MNmxOW4Bg2ynhlKtwDw9yCznbO4wZFHoGupBXDh1MEYXe8oc7ta3HBjfno6xieBCUwz1immS3ki5taNOKXrTaR13nrwF3v5oY6RinIUJ9gjhGhEGNhv694XyEPAtsObPCW%2BA9HzH045LKmSLMe6YZneoQ9eKKmrYyybKc8%2FFlfKmm1WrueoYvEyqMmFHdwqHAwEbb2m6zH%2FWSW7vseCfbMjRTEIAKadM14XayOnFpxKK99%2BdHCGLJNy6zd5kvtTWgCvHa9AOpQULFaPbjfQoSgPGADPuOiuhAe7en26a430BlwZpwYrn%2BJLG1mx8twzfqNZeoOd2Nxr3TW50t6gkHAnSaXEd%2BUxljP56HgZlM3Qp8mE9FKxJwTK2s1frCYz3En%2BJ2DQUMzlDpzTSzkvPYPsMfe9QC4HJNWtL7GkBYsc69egazuLU7sfDqECvFYt835qxxXrGz0O0%2FyEIGbRho1%2ByDQOeSfwz04i6iwZn26zHS8pJykCF6eooIZQKztAOSEJ7Y%2Be6X8vPh4JmlV%2BaAOJfkkoUuzVOhGwZEtrDrQnRjjtC%2FWYneuEdPihqic9i%2FlR2hmZNy%2B4pDPUu24DQI5sx5%2ByDpu%2Fsl7YB1W4DDlduzE%2FaB7tB9%2F7E0qt0GzIpZQcadI8mTRGnMwusGTxAY6pgFrck45KgqaPQVUkRcn0GJw8cDLCq84n1K9xMbv7kgjc5Pfhl53YX8WR04P8hIqopGnPXY6VIH2tAVPrAOmGTsIWGaN8VtMBDV%2Bxd8IXOPpomrQxrPFDzT6A7yvBPzRg8Yuvx8Y7%2FNOuM0udOVGzMpbdmq%2BElyMhABSGKdlGq7zkms0BbeDXtIwagVwRO5d0VLGsC9%2B0tNGBWZhmnWyzHS5mQrCwejH&X-Amz-Signature=9af6389768ce13469841089e8354c666afe304301c67744ca00c25570cbca423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA7DCRZ3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCICyGWb6w48%2F2v3Em96XfyYJkCZeWoR1AMgT8k9E2WzQpAiALbn2koYTbAzdojLYBztpChA16F3ABopTHQdFMvih%2BQir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMF5MNmxOW4Bg2ynhlKtwDw9yCznbO4wZFHoGupBXDh1MEYXe8oc7ta3HBjfno6xieBCUwz1immS3ki5taNOKXrTaR13nrwF3v5oY6RinIUJ9gjhGhEGNhv694XyEPAtsObPCW%2BA9HzH045LKmSLMe6YZneoQ9eKKmrYyybKc8%2FFlfKmm1WrueoYvEyqMmFHdwqHAwEbb2m6zH%2FWSW7vseCfbMjRTEIAKadM14XayOnFpxKK99%2BdHCGLJNy6zd5kvtTWgCvHa9AOpQULFaPbjfQoSgPGADPuOiuhAe7en26a430BlwZpwYrn%2BJLG1mx8twzfqNZeoOd2Nxr3TW50t6gkHAnSaXEd%2BUxljP56HgZlM3Qp8mE9FKxJwTK2s1frCYz3En%2BJ2DQUMzlDpzTSzkvPYPsMfe9QC4HJNWtL7GkBYsc69egazuLU7sfDqECvFYt835qxxXrGz0O0%2FyEIGbRho1%2ByDQOeSfwz04i6iwZn26zHS8pJykCF6eooIZQKztAOSEJ7Y%2Be6X8vPh4JmlV%2BaAOJfkkoUuzVOhGwZEtrDrQnRjjtC%2FWYneuEdPihqic9i%2FlR2hmZNy%2B4pDPUu24DQI5sx5%2ByDpu%2Fsl7YB1W4DDlduzE%2FaB7tB9%2F7E0qt0GzIpZQcadI8mTRGnMwusGTxAY6pgFrck45KgqaPQVUkRcn0GJw8cDLCq84n1K9xMbv7kgjc5Pfhl53YX8WR04P8hIqopGnPXY6VIH2tAVPrAOmGTsIWGaN8VtMBDV%2Bxd8IXOPpomrQxrPFDzT6A7yvBPzRg8Yuvx8Y7%2FNOuM0udOVGzMpbdmq%2BElyMhABSGKdlGq7zkms0BbeDXtIwagVwRO5d0VLGsC9%2B0tNGBWZhmnWyzHS5mQrCwejH&X-Amz-Signature=3c66f93b36491931a0903b9e07aeaa622b5d4599b1d3acd74a3858e73bae0aba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OGT3LYS%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCUAbPAhpgQA13flrqJZFHKonRMei4U2z42T1gjLSfl3QIhAKjje9%2FZYA%2FwHh1yjEwC43uylHpo7NcMWwwLPmQHI3qOKv8DCF8QABoMNjM3NDIzMTgzODA1IgwKVvEgLWAkPnEA0pEq3AMpxHf75JuP%2Fgt8BaqE%2BqgJNOxMSd6L0RX5EotCE7%2Bw%2FqYjHAjTgpRhkLWWA0VTO8XMcmaun6KeFJvDkOAdbzp0Nh%2BvEF%2Bpo4aTDKBxVwRrl7xGCqQkUoMNrlVPDFTH%2BuzMWDTmqPHy7SihEJXdxA16c5VDSjwJn26u4mCE9InQlCsSKiqVnNPpDOHY3iAH4RnxBu2IwZZl8WeJKAR%2FaqWvMpKgG%2BXMi9sFENRGy8jx5UpfL0CpBYQkQDJ5ZcuoZiqjLnhz2R4yHd62djfhnzMlH3AXGXqq4nAphqoAmoNLnSgjulGbhWeg3X%2FHLMvFD9CBexO1q66vMgA%2FdmYsQLQfk2OTCjnw4vz1PkG3Hmx%2BA5X3eCD36ffOmGLmPNiEUCXL39s4JTepTDXg5MjOQTbPM%2Bntv33mf1OshipRp6ZDRLwbovBpzDHsdsMlEYISCKtCh3fN9bfIJxGxzAC09SwKDrUmynt5%2BsNlMJRO6JxTp3bUO7VRhHTzagI9h%2B2ewenNYEVNNY7vDTN2OHCpiytLhDS77NBfiIhsTCxjrtQ%2BWgAYLczWHWaHN9BVLM8hacG4rkrXCH7EoCCLm1eM%2FMBoTZzCbe0fNVwcsdpQs2caQwr7djKG%2Fu%2FdL6T1%2FjDywZPEBjqkAe2ifF%2FU2VWi%2FxF4v%2FUQr8ulYScOg5prTE29%2BMNdQMA0YOyLRYaa%2F63rCyR6QqKQA1ecy0u4%2BPMDG3jRy0CtHkJ0j82pjAT%2FyBswHPFeGdy7dZnrz%2FX2dttWBpIMD9d8QaaIqZNh1CMc463Y0kN64bkBH%2Fxv7jnD6E2l5Wc%2Bjlei7dQMUGMp3FjHcE763Ua7sKIjOE%2FnseaL3jbGOMG0PzsmJj4M&X-Amz-Signature=692a7a5d4c02ec2260acb329ead9d167f1fe26e9d55f765867aa09bbfd3ed612&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI76OUNU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIFvocJoTHZ0G0Ar0Q8cHEH21knJrxIw%2FadhnnOeZcrbZAiEAmJhTeCPevw3kC2wDRhhK62Dx5u9fCabZkPOvHN9clc4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDALwUBQS4StLBGrHQCrcA5JJGqWsVb4DGh42kSOpUzT9Bytu1MS6Az0ngO1chOu1NOg%2Bae%2BbwednwIFlbWlbOkwEAGYUygKFlETsV7JAs5YQOwlMF%2FSL3MHoX4JkdzIa3%2F3gOHGEzbgfnjxvbz0WNN6j3IVc5L%2BZB5UjiHm94zLuux5s2RnsIBUZHUxBpIP2sENXjhqkZKUekWH5w89BbPCKZIdc8wJ3p9iqZUsc9To2Ung35J0dxlAwZaQHunGZxgOYHCle6Y832A33kFvyb4Q5XFPTwROnQ94MzkUt3gU0%2BKoW%2B1%2FgFjPRIb7UmhGEYoey04ETT4bLnyfjo7MJ15eOYnCmDievu8p4ZnA4PG11ySPwz5SVOUm05NigwTVFfnmk7pQpebsqnDFGAyYztq3qV5FCu1%2BbtwNEDzWxMVTR%2Fs6Kic2X%2BSL7rOIxQSN%2BXu%2FUtVY83wmBReOTCSDsGTpCrUODr23EaIHPOfUMilIEKqrHDKpvMB%2FjEEayD55AaVQiL2vwyc8TQZtR9ZNYW7tFX%2F76Dal3wvBgzH0E6RtuMoGhZ2ZETvvfzwELNszBjidBVRahEmk2ylOq8l11psjdgM2p90OGYbCfUG5fb2LxrXV8RRboS643Rr6Mkxi91Aj9gQUS9cz%2B4yNgMO%2FBk8QGOqUBJzbW2yeD9RM0f8tXYGnRJP1uDE8JPZNVWrE5Z2%2FO0e4WuYSFxgfY1d15fgZVLKfvA7%2Fvt4qUonMd%2Brei3wkadhSMMRaHZf63mEDEx7woj8yJye%2FdFbk4b0LWYxQWwPhvE7GFiY7ER2yKG7YhZHH91ss%2FiXAI4gQeZXnc1JfA64PK4y6FJptkOo9CCGBU9E%2FNStV3CIJ4%2BW0JRaFiIu7LKBoEB7JE&X-Amz-Signature=a6b09a2109f91ed5add76a6d9fa057a621625b0bfc8af659ecf1e3b6de5475b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA7DCRZ3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCICyGWb6w48%2F2v3Em96XfyYJkCZeWoR1AMgT8k9E2WzQpAiALbn2koYTbAzdojLYBztpChA16F3ABopTHQdFMvih%2BQir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMF5MNmxOW4Bg2ynhlKtwDw9yCznbO4wZFHoGupBXDh1MEYXe8oc7ta3HBjfno6xieBCUwz1immS3ki5taNOKXrTaR13nrwF3v5oY6RinIUJ9gjhGhEGNhv694XyEPAtsObPCW%2BA9HzH045LKmSLMe6YZneoQ9eKKmrYyybKc8%2FFlfKmm1WrueoYvEyqMmFHdwqHAwEbb2m6zH%2FWSW7vseCfbMjRTEIAKadM14XayOnFpxKK99%2BdHCGLJNy6zd5kvtTWgCvHa9AOpQULFaPbjfQoSgPGADPuOiuhAe7en26a430BlwZpwYrn%2BJLG1mx8twzfqNZeoOd2Nxr3TW50t6gkHAnSaXEd%2BUxljP56HgZlM3Qp8mE9FKxJwTK2s1frCYz3En%2BJ2DQUMzlDpzTSzkvPYPsMfe9QC4HJNWtL7GkBYsc69egazuLU7sfDqECvFYt835qxxXrGz0O0%2FyEIGbRho1%2ByDQOeSfwz04i6iwZn26zHS8pJykCF6eooIZQKztAOSEJ7Y%2Be6X8vPh4JmlV%2BaAOJfkkoUuzVOhGwZEtrDrQnRjjtC%2FWYneuEdPihqic9i%2FlR2hmZNy%2B4pDPUu24DQI5sx5%2ByDpu%2Fsl7YB1W4DDlduzE%2FaB7tB9%2F7E0qt0GzIpZQcadI8mTRGnMwusGTxAY6pgFrck45KgqaPQVUkRcn0GJw8cDLCq84n1K9xMbv7kgjc5Pfhl53YX8WR04P8hIqopGnPXY6VIH2tAVPrAOmGTsIWGaN8VtMBDV%2Bxd8IXOPpomrQxrPFDzT6A7yvBPzRg8Yuvx8Y7%2FNOuM0udOVGzMpbdmq%2BElyMhABSGKdlGq7zkms0BbeDXtIwagVwRO5d0VLGsC9%2B0tNGBWZhmnWyzHS5mQrCwejH&X-Amz-Signature=4167cd71eee891a61705dadb76e08b1f7f4705e183544ee2b426f169b113c06b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
