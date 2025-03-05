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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VITENR2B%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmHkrLtgmKTPK6KkNGfz9zWBzuMd6%2By0m2ed9NyixG5QIgaJoac%2F7yS6XF0p2Kl3lCNSvOfZzT%2FQq%2FlVo6JStnrK4q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDClyhy2DXwCls6YhuyrcA9qb39NLduGjnibSrMydG2mPzcDjlWs8Bio3exIDjoxm9Lrg4Chq5CssAvuQ9BpLMa%2BlmVs3wVkYEWUJR5F%2FOHzatawygUdf7Eu3JUgSD%2BIZxKumQvHpSqjg4O2XT%2FJZf8d5DXRSEwlG8JjcUFKBWxgyUhsDGKq1EuCb645rxo1Rjklika5DGBlkd5xr%2FVxwfSyLgIOPtpUf%2F3%2BghmnJWeBo3Tpt%2FmWtf%2FH3bAQjDIl6007T9aSk3UGTuC8Rk0dfGbPgb2DPF9N%2B%2FWi2wGuQJ4ofGExOB7KSNVtL%2BrOtQabpIxUz2Xj8sxTusZb%2Fcf16QE17idlqmJ%2BscL4aO70MdMVOhGDFo63h7NuTeBMyWGOVTe%2BV038grmhqxr%2BpXr5gyGEchGfzm1TH7hXn%2F4GEVXKcGp1tv7t%2B03mmOmn4B3fV90rh7nV8wox4lxRxu8etRUSKJycnYwJ6xA%2BWCvXRDgQGUSk%2BtyiCNoMC%2BrPth%2FWiPRkjLm5yF3vscHq58YigNg8qmEnKMzYfQI1FiGfWV9oGIpeWbeZ6Mqd5jzDaF%2B0WThBn4UtP%2Fr8aco9%2FAUwxYimZM51UIQsMgTdo2Z8BzvKgv6oGsZr1Wc7VL%2BJ64VXsdtLvdolRJOsEr5T2MPmDor4GOqUBw%2Bo%2B23CFgZCb3CSVnI%2Bnhfk0Lec6R3yaURrElbtr60zCmIv0jyHesbn4yTl1Ix9%2FEk2U6WfTNT4c%2Fx44b99zP%2B%2Bo0S62f%2F03cabJOOmkVO0CnZ94vxzyzAg8efCJfHk7hnV9OV1fuyFzhgs5IULBO6pL0WOis6SiEaJ24Z%2Bo6eUmN55DFyd8HzHHjo50Gb%2Fe%2Bq4zhc03fCr%2BPu%2FFv%2FM8eIHSN3am&X-Amz-Signature=4443aff15ad1c1e9c1cc7c3fced7391d064fd469d2390ac6a0dc40ef272d5648&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VITENR2B%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmHkrLtgmKTPK6KkNGfz9zWBzuMd6%2By0m2ed9NyixG5QIgaJoac%2F7yS6XF0p2Kl3lCNSvOfZzT%2FQq%2FlVo6JStnrK4q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDClyhy2DXwCls6YhuyrcA9qb39NLduGjnibSrMydG2mPzcDjlWs8Bio3exIDjoxm9Lrg4Chq5CssAvuQ9BpLMa%2BlmVs3wVkYEWUJR5F%2FOHzatawygUdf7Eu3JUgSD%2BIZxKumQvHpSqjg4O2XT%2FJZf8d5DXRSEwlG8JjcUFKBWxgyUhsDGKq1EuCb645rxo1Rjklika5DGBlkd5xr%2FVxwfSyLgIOPtpUf%2F3%2BghmnJWeBo3Tpt%2FmWtf%2FH3bAQjDIl6007T9aSk3UGTuC8Rk0dfGbPgb2DPF9N%2B%2FWi2wGuQJ4ofGExOB7KSNVtL%2BrOtQabpIxUz2Xj8sxTusZb%2Fcf16QE17idlqmJ%2BscL4aO70MdMVOhGDFo63h7NuTeBMyWGOVTe%2BV038grmhqxr%2BpXr5gyGEchGfzm1TH7hXn%2F4GEVXKcGp1tv7t%2B03mmOmn4B3fV90rh7nV8wox4lxRxu8etRUSKJycnYwJ6xA%2BWCvXRDgQGUSk%2BtyiCNoMC%2BrPth%2FWiPRkjLm5yF3vscHq58YigNg8qmEnKMzYfQI1FiGfWV9oGIpeWbeZ6Mqd5jzDaF%2B0WThBn4UtP%2Fr8aco9%2FAUwxYimZM51UIQsMgTdo2Z8BzvKgv6oGsZr1Wc7VL%2BJ64VXsdtLvdolRJOsEr5T2MPmDor4GOqUBw%2Bo%2B23CFgZCb3CSVnI%2Bnhfk0Lec6R3yaURrElbtr60zCmIv0jyHesbn4yTl1Ix9%2FEk2U6WfTNT4c%2Fx44b99zP%2B%2Bo0S62f%2F03cabJOOmkVO0CnZ94vxzyzAg8efCJfHk7hnV9OV1fuyFzhgs5IULBO6pL0WOis6SiEaJ24Z%2Bo6eUmN55DFyd8HzHHjo50Gb%2Fe%2Bq4zhc03fCr%2BPu%2FFv%2FM8eIHSN3am&X-Amz-Signature=a9882c9b536b185cbb59dbe1d0f5944365af728711e657e1f7e85305e2985d9d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G43A3D7%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T181114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE37IOEg2hGbsENXVRIiz0U%2FoF0KeazLplihgJ3C%2F6A7AiEAsgH%2BKreR1cy0e%2Fc6x%2Byhruy%2BwhuBtzTh%2BE4bQ8RsKvYq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDHF6WsLnunYffH38gSrcA4xh7J7V7Uf%2BbIEIo1YgQecChc8CfWncYnPNoKsGdl2bpiKwy9PNLgLFJJpa%2Fiqnbs0FyKmnkkRapDn%2FSL58DtCh6Q565%2FpO0paYAGwrvz0b1Gbrzsi5is7noxyyzK8SNIot8mKfxbokQCbiEjP9iotzaKrycfsplWGkcafMUsHuN%2BzJDORqJt1qlKsc04TkxpLnc0rwx4pwAiKum%2FQi%2Frm00yckNSljxizC8U2SY0IAGObLecfoIijTgWv5UC2GTABDfX33fOZnimFsiXRe3TvP53A%2F2xvnqQwX%2BgcYqtQvc2FPVequ8EmOEv%2BukRv5io4GAf8KwzOmk1NucbImqk9kL7Qv97ISV%2BKrfPU4FXfmIlcwTKy8LcOtL1VrGcgdnSRcu2YRlBYheGzWkvoTBBMDRMyVp6eq0vLQUDhmiLvEaAZgbzVeX1KL3GeLt13tfgMtKMYJjjv8Qo5HjkJNourtl7GZfijdiM2k4vZsxvNTg%2FaSluC%2BZP5ybHJMBIjLb2O75NxakH5SdIcyffXI%2BuR6XDqXo7CzpEmpNvTQqVPwksDBimIN5VW2oDJw5x1dbA3ECaZC8LyOEE7kNvU3ZekLSP2Z7jsd0TFF%2BKSQgGtBIAfbNAYTwVoN1AwSMPeDor4GOqUBRRrtajrGPXZcgyWNdQbP6aC9rGdiSC7gvEpRTb%2BSR50iAprAq90ug%2BbM0%2FxPWyYS98sMoAUsgAJej%2By9uL%2BC00psB7j04qicAHoWSw3w05A2CotaEPdTlQLUDOLKaP7fGRCG4JARBQvD94VEhp5zsU%2BPpy9czg5jgPb9yAggN1yJUwa%2B0c8itqEca6crS788b2A9SSkizduE%2B%2BpQl%2FddvQyuTxqi&X-Amz-Signature=6678aa4af23e8dc0118b83d2dba5c7ec59c40241e42aaec82bb9f68a96476f50&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ26M6H5%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T181115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHadf2Sk2hd13e9QqEKQ0NNGrx9cJ90aGZzqx40zbRWqAiEAho6wff%2FxKQbGFWHMzogdfZiAOp%2BUHfba0Njer%2BafxMEq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDI5UBe%2F9WxhmqD9%2FryrcA7dz9YePH6XIpRwd%2BQgALNuHPudWeQ5O9M4lYOMPQboJH3fjT8ZSKAHfVMNnyT1Lt6MilXPBsQzo2SSezvTowwcK1e4byBprTMhVTXxBb2uWbvxoS%2F7PVafbgfCUyaJRJVE7xl%2FRUzg%2F8EzgSpzzzcZ9LMo%2FfR%2FCjCe29Fgwq3cRdfENdwR4QxPVpVRczin%2BItRcPMvgaAS%2BqvznuXe22%2Fk1aWEyvok6IWiC3F1qQRyytNMk9wSuebgDjmEMhwU0f1K%2FkdVecEUyKZnxes0seWJIlhEkmYYezngqqmcis1UC4TungmjoJCydzBszdrq%2BT4hck9AF9MYpdgDQNgvnYT8oS%2FJSPzuQzqAihcT%2F2fMY1vRYvORpW5ZFFsTlJPYcZpT%2B257Sht8C0QQY2RKJzOUpnURxJgeJTo1UZGCv%2FRBfyCBK1rg%2FTvldoqhwFyRy5KzH5GUbQYDPBaTJ%2B2d%2BrzLtDpsAM7gSjlL3KO5bwrgqCy4Qx%2FsVCZFSDvgGh3PfG49c2j%2FAO948GcAaoi0dJLPoGAZBVrs6to016ocTKtz%2F01EYaprf6%2BUKfy4FbRttY5EqKRDMtvFqg6WguOjfWOZqgdKjGydE8c%2FpuvLVH9BFYx%2B%2FiEO%2BGYU%2BZRxdMMWDor4GOqUBB46YDSL4K%2FgwCv%2FHJ70cyAmAs%2BuGujhQYQ1p9U2e4F3lDYdjwR59re%2FyKL2mJpMeeCorxH06G7E3Y1qOfpx%2FqUFP0B6X%2BbD8EKEEhdUYOvfJdZct%2BZ6v52TafDwqaJTlQcyIR69XGFfIl4soiUdc1pOM6PFdXFJlSbvhzws3383eaZF7slgUjVOFjeMCJwbMp3TpcvCIkVss9V1bQZvAj%2FWE0g9L&X-Amz-Signature=f3701a9855bbdd954af642399786ca1b098cb0c5420487d9c343fa188dde62e1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VITENR2B%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmHkrLtgmKTPK6KkNGfz9zWBzuMd6%2By0m2ed9NyixG5QIgaJoac%2F7yS6XF0p2Kl3lCNSvOfZzT%2FQq%2FlVo6JStnrK4q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDClyhy2DXwCls6YhuyrcA9qb39NLduGjnibSrMydG2mPzcDjlWs8Bio3exIDjoxm9Lrg4Chq5CssAvuQ9BpLMa%2BlmVs3wVkYEWUJR5F%2FOHzatawygUdf7Eu3JUgSD%2BIZxKumQvHpSqjg4O2XT%2FJZf8d5DXRSEwlG8JjcUFKBWxgyUhsDGKq1EuCb645rxo1Rjklika5DGBlkd5xr%2FVxwfSyLgIOPtpUf%2F3%2BghmnJWeBo3Tpt%2FmWtf%2FH3bAQjDIl6007T9aSk3UGTuC8Rk0dfGbPgb2DPF9N%2B%2FWi2wGuQJ4ofGExOB7KSNVtL%2BrOtQabpIxUz2Xj8sxTusZb%2Fcf16QE17idlqmJ%2BscL4aO70MdMVOhGDFo63h7NuTeBMyWGOVTe%2BV038grmhqxr%2BpXr5gyGEchGfzm1TH7hXn%2F4GEVXKcGp1tv7t%2B03mmOmn4B3fV90rh7nV8wox4lxRxu8etRUSKJycnYwJ6xA%2BWCvXRDgQGUSk%2BtyiCNoMC%2BrPth%2FWiPRkjLm5yF3vscHq58YigNg8qmEnKMzYfQI1FiGfWV9oGIpeWbeZ6Mqd5jzDaF%2B0WThBn4UtP%2Fr8aco9%2FAUwxYimZM51UIQsMgTdo2Z8BzvKgv6oGsZr1Wc7VL%2BJ64VXsdtLvdolRJOsEr5T2MPmDor4GOqUBw%2Bo%2B23CFgZCb3CSVnI%2Bnhfk0Lec6R3yaURrElbtr60zCmIv0jyHesbn4yTl1Ix9%2FEk2U6WfTNT4c%2Fx44b99zP%2B%2Bo0S62f%2F03cabJOOmkVO0CnZ94vxzyzAg8efCJfHk7hnV9OV1fuyFzhgs5IULBO6pL0WOis6SiEaJ24Z%2Bo6eUmN55DFyd8HzHHjo50Gb%2Fe%2Bq4zhc03fCr%2BPu%2FFv%2FM8eIHSN3am&X-Amz-Signature=cae5e4134a63a1da5a282b7689cdb88120a32ccb5d87848941de54c6bd4ad4dc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
