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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LHCX356%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDL6VOwg4ilH5xVM%2Bl2PDM5Z%2BnCdIDu8%2FrKNsVqZNzzlQIhALCvMCAS9MoNHoG99iAXiL8TyeD8Dpr0ApJef1%2BXRzDjKv8DCB4QABoMNjM3NDIzMTgzODA1Igx8wFSlRv9sVez8sWEq3ANNaG5Pkfq7FBoAzokDvJeEBTdz36e5MS3et8CDBmS4uycvF9vgUgClYsZ8Zc%2Bd8c69b1clgMPvyRc%2BOrXNiwQwRvLKN921qaNKQURB%2BjVKPNTeFhxt%2B5lDm4T0jI%2Fz9DeJRt5W%2BJp1BeRpq73HirPK7SkcmvLmFbIIjbHWfkvVXWc1Maot7gJo7zxuClqizTDVKDFeoVw7ES1%2FR56Mtpt51OU2sgF0xHW3tS0ffdRT9ByR6bjeRH%2Bq26JUmToSZvd5SYukdYg3rUANodRrRbrckobb62AnIIalBboTCcnQuUPAN1H6EUzIqiq0UMQKK73ZtWSG58vJW7Pi5VNnsiUEAFL5TWLBOYQZ7JD9GLIvMFHRLjtM8HTrM2vl%2B1MrsPDbztrEtZRWHG9ATweBR6aZeebez%2B1Ndfd%2BJ2aAQ03dufc3Pg8taFGg4x8ORyj9tq%2F4NumBlO%2BMt3t61q%2BHk5EdIl%2FGehOsv4rkl3F1Y4gNjSAC7IusNCs%2FS%2BShmWVQgMv3ESnQldpx4Z95l8wTO4nqlKtzcsbodV8C5AvEp%2BOHmfrhd6QpUHED2mKJCSBVJcVkXEVQ2z1ESi3VKb%2BpD4bNlKVBDIPa7eWSloRKfKNHt3j01ZsVS2fNrza2nDCzrN%2FABjqkAXwgbbsNjmYsnJUScPRjykuMvnEqKn4uzGv5D2IKqAaNJNmzt6jyMgIC5PWfU3evP0Ycraj%2BymF47mUcbKYY6pS08xlx1R5FqX5pc1eCgZe%2B9ymw80AtfQMCFyVVdjDOV8rCvJNQ8Q5%2FlunOHCEcg1uUJrRCom%2FTYjGP7j5bL%2ByZbMG5gZ9PSuGHXtO94yB%2BPEc%2FXst9W4g%2FGVTz59WXmbJPbKFy&X-Amz-Signature=c0556081680531a69b30494aeafa98ef632305ffec72baff3f33bb28a84601d5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LHCX356%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDL6VOwg4ilH5xVM%2Bl2PDM5Z%2BnCdIDu8%2FrKNsVqZNzzlQIhALCvMCAS9MoNHoG99iAXiL8TyeD8Dpr0ApJef1%2BXRzDjKv8DCB4QABoMNjM3NDIzMTgzODA1Igx8wFSlRv9sVez8sWEq3ANNaG5Pkfq7FBoAzokDvJeEBTdz36e5MS3et8CDBmS4uycvF9vgUgClYsZ8Zc%2Bd8c69b1clgMPvyRc%2BOrXNiwQwRvLKN921qaNKQURB%2BjVKPNTeFhxt%2B5lDm4T0jI%2Fz9DeJRt5W%2BJp1BeRpq73HirPK7SkcmvLmFbIIjbHWfkvVXWc1Maot7gJo7zxuClqizTDVKDFeoVw7ES1%2FR56Mtpt51OU2sgF0xHW3tS0ffdRT9ByR6bjeRH%2Bq26JUmToSZvd5SYukdYg3rUANodRrRbrckobb62AnIIalBboTCcnQuUPAN1H6EUzIqiq0UMQKK73ZtWSG58vJW7Pi5VNnsiUEAFL5TWLBOYQZ7JD9GLIvMFHRLjtM8HTrM2vl%2B1MrsPDbztrEtZRWHG9ATweBR6aZeebez%2B1Ndfd%2BJ2aAQ03dufc3Pg8taFGg4x8ORyj9tq%2F4NumBlO%2BMt3t61q%2BHk5EdIl%2FGehOsv4rkl3F1Y4gNjSAC7IusNCs%2FS%2BShmWVQgMv3ESnQldpx4Z95l8wTO4nqlKtzcsbodV8C5AvEp%2BOHmfrhd6QpUHED2mKJCSBVJcVkXEVQ2z1ESi3VKb%2BpD4bNlKVBDIPa7eWSloRKfKNHt3j01ZsVS2fNrza2nDCzrN%2FABjqkAXwgbbsNjmYsnJUScPRjykuMvnEqKn4uzGv5D2IKqAaNJNmzt6jyMgIC5PWfU3evP0Ycraj%2BymF47mUcbKYY6pS08xlx1R5FqX5pc1eCgZe%2B9ymw80AtfQMCFyVVdjDOV8rCvJNQ8Q5%2FlunOHCEcg1uUJrRCom%2FTYjGP7j5bL%2ByZbMG5gZ9PSuGHXtO94yB%2BPEc%2FXst9W4g%2FGVTz59WXmbJPbKFy&X-Amz-Signature=7fd2b0d0481be684747d0984ddd40fc79dbcc4c760ad77b15ff228f465577494&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LHCX356%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDL6VOwg4ilH5xVM%2Bl2PDM5Z%2BnCdIDu8%2FrKNsVqZNzzlQIhALCvMCAS9MoNHoG99iAXiL8TyeD8Dpr0ApJef1%2BXRzDjKv8DCB4QABoMNjM3NDIzMTgzODA1Igx8wFSlRv9sVez8sWEq3ANNaG5Pkfq7FBoAzokDvJeEBTdz36e5MS3et8CDBmS4uycvF9vgUgClYsZ8Zc%2Bd8c69b1clgMPvyRc%2BOrXNiwQwRvLKN921qaNKQURB%2BjVKPNTeFhxt%2B5lDm4T0jI%2Fz9DeJRt5W%2BJp1BeRpq73HirPK7SkcmvLmFbIIjbHWfkvVXWc1Maot7gJo7zxuClqizTDVKDFeoVw7ES1%2FR56Mtpt51OU2sgF0xHW3tS0ffdRT9ByR6bjeRH%2Bq26JUmToSZvd5SYukdYg3rUANodRrRbrckobb62AnIIalBboTCcnQuUPAN1H6EUzIqiq0UMQKK73ZtWSG58vJW7Pi5VNnsiUEAFL5TWLBOYQZ7JD9GLIvMFHRLjtM8HTrM2vl%2B1MrsPDbztrEtZRWHG9ATweBR6aZeebez%2B1Ndfd%2BJ2aAQ03dufc3Pg8taFGg4x8ORyj9tq%2F4NumBlO%2BMt3t61q%2BHk5EdIl%2FGehOsv4rkl3F1Y4gNjSAC7IusNCs%2FS%2BShmWVQgMv3ESnQldpx4Z95l8wTO4nqlKtzcsbodV8C5AvEp%2BOHmfrhd6QpUHED2mKJCSBVJcVkXEVQ2z1ESi3VKb%2BpD4bNlKVBDIPa7eWSloRKfKNHt3j01ZsVS2fNrza2nDCzrN%2FABjqkAXwgbbsNjmYsnJUScPRjykuMvnEqKn4uzGv5D2IKqAaNJNmzt6jyMgIC5PWfU3evP0Ycraj%2BymF47mUcbKYY6pS08xlx1R5FqX5pc1eCgZe%2B9ymw80AtfQMCFyVVdjDOV8rCvJNQ8Q5%2FlunOHCEcg1uUJrRCom%2FTYjGP7j5bL%2ByZbMG5gZ9PSuGHXtO94yB%2BPEc%2FXst9W4g%2FGVTz59WXmbJPbKFy&X-Amz-Signature=539b2a1f15712168524bbabfc8dd176498079e0f5e7792309f2ed30bcde05eac&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFUKYVEM%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCO7xlfpajJQQ20A%2BubOfcptJY7ZFAGS%2BI640lW3JM%2FBQIhAP2TtDXiVyJhCEJVOtPnyhXOXR5K7BCBqtkwXepOoA6oKv8DCB4QABoMNjM3NDIzMTgzODA1Igyt7ZcHJM3uUfJGqQ4q3ANr57%2B7hnHL1TsOcrMKmbgGD7vndAfyvJK4nTHTHI8xjaOqniifpf3C0SxsjNFhWMpQtevIBZWgNmA8fZnvV7Yj%2B01FkQg9uX5F7lN9abQUPmDT8XIVCIkZ7tVIuR87fvv7ohc2d553u222q0a1cJ%2FzxTRc7O8RkwjsHG9yywLh3bj1hYHhapMaPIBdppS9cj6n%2B754hRz0XrRjULu3EMhSgqiWQ27aDZRjBNWlNM0g9wZMBEScldCGoSI%2BDCz%2FjM%2FjdMJBVkkmFMjPuCTuYT%2BVPX51DOHgcxnYXRjUhmUVMiJ6DQhcSDiIqJQNmz7qkhGauzo9iHrr1714%2FnMYTNWPnCLctVC7z%2FLdsvkhM0CmtmoJxgyvkHDVsJ2i6xA4XK%2BAGdIvPYEAZ3HHEluZ5vdU4VQPdsPSTobC%2BoIx3vYCrTvEZPMTo4GW9oojVT9iFoXbimCXZzjPzyTFgmhqIjWkYffhL4%2BUX5BWlWmnRSRefjtAUDhmQo0BGT1ZFPyY5Kr606GxGS0dBc57jCHJfFozyNy1kiISolBtENpQQM1jsX%2B6sHuDYQZII4TVY3SI8q8QzyIcUq4ght5iATKFGb1lNKriHm5ddlzEqJ%2BMBlyJLGJk5qI2gX964tobPjD0rN%2FABjqkAco4ne5LKJi7wexGAW6ppOyo%2FqlT1kSM7ZHIZ4sbaWvnSrYq3yC4R%2BCkj9PkwtQuB7DiE%2BA6kmk5e%2BHu35vA9X4vNj7wNyq7w0revJfFlHZ5%2B5Um9kHVUIYbqHxnp8rFrj%2B7w6PJ4rcfsgFxooWFjCTC40tARE%2F5dEITKlw2RiLgkjtu%2BGiTrQt0ZjWl8XB3369r5xUd47ghYf3tsnPGntojGuj%2B&X-Amz-Signature=7ab98f53d5cb792cb500ea88a6b0288a566dc98b7acdcc1aa59a4b0277212066&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN2JMOHJ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIFbFiupJtlyFkptmq6V%2ByIGzqq%2FAsjnFTD7WYmNX51FNAiBCXouU3yxlFYRsb8gIM8E6quyF9g%2FYQksCvnC5A%2F1l%2Bir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMFT8zcZ5xsdd6sNOJKtwDMocBzmGP4habEGw9rgT%2FAhzVyndnz1IRF45Cjx9sML4xe8tSK5dvU1uRNM1FZcQq%2B9EUkGZQ%2BBzx97HTIhxYrXBrTziGFc9Deat4oRtvqkO1u1%2FRJnou86AopFW4gitR17Yc1A%2Bh11PeOLmE6V25OlI1OPMXUTeik2JXbmlZ8DE%2FCHyD0gkIjeOkKLGJL4ybfZtKCwLYkLw1Bm5OfJV67gdc62uVBGqxqEmOLrP53I5XCaT7SpsbLcj3iGo7n1eVo8QkF6ugDwTNfBRPkY9GZ7YYBe679%2B4Ynjp9gfmYXHl5hXlLl%2BXMS7f3n5cuemRNE8%2Fa0TVySuHWYNY8ln4YFLiIB68QQVf6n%2BfMxnq%2BZc6FO%2FRDbL%2FT9vr7Ph7iqfXLXNMtHdp9N%2FO7c6LsReg23Z%2BGXHafZk32Yw5nVYNDYLi22WcYfyzKdXOstEwakFlaZ7irzB7OuV2y67eYsmP1lQqtyVfrjFp6VRGOEAs0p2UT0OGnM5cSRi0tPSEse1ysryhNHRb10p6b4ORCBo%2FE2Pxuw8RfVgd5CA5aS6w%2FvYqiuL5SUbEkIj%2BhQW2uFwq%2B9Dpqatg9%2BexlQLdcWVdf9uhQRNp0QtMr553pFOC93NYKmz1vVDe2Tjlphfkww6zfwAY6pgEQJTHDjQSZXlqgDjwfJ3DH4BIiwMPbobw8C6LMlzv%2BdtA%2Fwr50B%2B6Ucjxe2kvWzG2NcyCOhVq8DkBKsWeoLHMNVGQBaBQ3GWNwGlVHbiEVe8BoDDm6%2FudJF%2F2ItEJJ66ZS%2Fuua2Bza7Bc6uG7F8zOdPCGShThGXSPEqTTIRBVXxl9tgoPJDcI9YqcJ2j6zFat1gxWm43NVJe6%2Bp3U02DvYKVcyYjwj&X-Amz-Signature=036c192a2c3873da526c8e0e6f03d7c1a1a7a3e4fd78a379771088dbecb7c1ed&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LHCX356%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDL6VOwg4ilH5xVM%2Bl2PDM5Z%2BnCdIDu8%2FrKNsVqZNzzlQIhALCvMCAS9MoNHoG99iAXiL8TyeD8Dpr0ApJef1%2BXRzDjKv8DCB4QABoMNjM3NDIzMTgzODA1Igx8wFSlRv9sVez8sWEq3ANNaG5Pkfq7FBoAzokDvJeEBTdz36e5MS3et8CDBmS4uycvF9vgUgClYsZ8Zc%2Bd8c69b1clgMPvyRc%2BOrXNiwQwRvLKN921qaNKQURB%2BjVKPNTeFhxt%2B5lDm4T0jI%2Fz9DeJRt5W%2BJp1BeRpq73HirPK7SkcmvLmFbIIjbHWfkvVXWc1Maot7gJo7zxuClqizTDVKDFeoVw7ES1%2FR56Mtpt51OU2sgF0xHW3tS0ffdRT9ByR6bjeRH%2Bq26JUmToSZvd5SYukdYg3rUANodRrRbrckobb62AnIIalBboTCcnQuUPAN1H6EUzIqiq0UMQKK73ZtWSG58vJW7Pi5VNnsiUEAFL5TWLBOYQZ7JD9GLIvMFHRLjtM8HTrM2vl%2B1MrsPDbztrEtZRWHG9ATweBR6aZeebez%2B1Ndfd%2BJ2aAQ03dufc3Pg8taFGg4x8ORyj9tq%2F4NumBlO%2BMt3t61q%2BHk5EdIl%2FGehOsv4rkl3F1Y4gNjSAC7IusNCs%2FS%2BShmWVQgMv3ESnQldpx4Z95l8wTO4nqlKtzcsbodV8C5AvEp%2BOHmfrhd6QpUHED2mKJCSBVJcVkXEVQ2z1ESi3VKb%2BpD4bNlKVBDIPa7eWSloRKfKNHt3j01ZsVS2fNrza2nDCzrN%2FABjqkAXwgbbsNjmYsnJUScPRjykuMvnEqKn4uzGv5D2IKqAaNJNmzt6jyMgIC5PWfU3evP0Ycraj%2BymF47mUcbKYY6pS08xlx1R5FqX5pc1eCgZe%2B9ymw80AtfQMCFyVVdjDOV8rCvJNQ8Q5%2FlunOHCEcg1uUJrRCom%2FTYjGP7j5bL%2ByZbMG5gZ9PSuGHXtO94yB%2BPEc%2FXst9W4g%2FGVTz59WXmbJPbKFy&X-Amz-Signature=9d328cde4e8ee393f87b10f2eee929a72df605055e956e8e7a6ee33ff58fc61a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
