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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAO4A6DK%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T121258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsP6GgbifMEeP1huzqFUYt3FDdYvcPXrEzQxn%2FLDURUAiAIYZZg2x6T3qk00rY0ftlNCE0R4EBe7Oa4qnGT62JqzCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMlFduXDzC24%2BEw9zKKtwDhpdcLsD%2BD2za333l9eouE1Hyn968NbB%2Fhp2cdXrZkubBJPdHkgOf4rT9bh0Nmnp7YYc%2BohYn%2Be8YT5wF1StgnNPbwj2LlcL5ZfdduyO6iwc1X4eSqtfEpObcZTIqSIBAUI3rWXK1tBF%2B3jQ0cWqjN5dWQZXERlyPRduauR%2FtI9uvOsH3Xx9thkCpnUl%2Blsj5dCU9lAkdHM6pgsiHcPmJwkZOOnAytU4xYLcO8an807bouavgqB%2BRRKw3dfoQOcs4YGzWcFMfCNFH330Kzva7ihSH0iFOGe81Oc87kJesZ19EGolu%2BOZIevO%2Bo2mbc7FOdc0miYAaXgtGhaeQYv7IjadCaAUzz91%2BADzRPTKHcz0AvfOA4ou7JArWnX%2Bzlu3Gjw07dmPYihml5r1GeDjI7hxxIoy3GnpM4UnikRqu34PqH1taYJyyCmRvD0MCX0ex0sRISJpq16%2BtoFjm4G%2BUAe73cpW6uNweGhItYFYLIRsmuDMcx8Az6u2eI%2Brv6WkiwrRqrvwVgqJgabqRG%2BVj4TJUSPFuvo%2FCq5R0ZzABcoafFFcjyZ8sit4xiU9J2N3sy438HF47%2B47uDAGTN2RmpZsFTnEPAlzFKfAXMIy7isRAdjf%2FoS30uRTJXo4wlYSywAY6pgErrhwrWwHS%2BipHjPBUD7Tu%2F1u%2Fcmb7RSa%2Fh%2FRTC60tifZ3oTSo7y10vUlOHndko36p7RHlgFPFqhxWL%2FGIXmhce%2FnV0rPLs1TV%2BNd8KyueyMuOMzg5Fy2udxtSoshb71e%2FwzwZZ4gfFljtU5cTWZ0XDowu%2FBek1aE5Xr2t5YB%2FVuX3DZ%2FP53iK%2FYYxFFA1%2B8syGcN50usPEHPvrqHhKi5Kh5J0979h&X-Amz-Signature=b1ba478995495c9d8d6907cdd640c394b2cdccc5fdfb72ba8036d8577e056f0e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAO4A6DK%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T121258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsP6GgbifMEeP1huzqFUYt3FDdYvcPXrEzQxn%2FLDURUAiAIYZZg2x6T3qk00rY0ftlNCE0R4EBe7Oa4qnGT62JqzCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMlFduXDzC24%2BEw9zKKtwDhpdcLsD%2BD2za333l9eouE1Hyn968NbB%2Fhp2cdXrZkubBJPdHkgOf4rT9bh0Nmnp7YYc%2BohYn%2Be8YT5wF1StgnNPbwj2LlcL5ZfdduyO6iwc1X4eSqtfEpObcZTIqSIBAUI3rWXK1tBF%2B3jQ0cWqjN5dWQZXERlyPRduauR%2FtI9uvOsH3Xx9thkCpnUl%2Blsj5dCU9lAkdHM6pgsiHcPmJwkZOOnAytU4xYLcO8an807bouavgqB%2BRRKw3dfoQOcs4YGzWcFMfCNFH330Kzva7ihSH0iFOGe81Oc87kJesZ19EGolu%2BOZIevO%2Bo2mbc7FOdc0miYAaXgtGhaeQYv7IjadCaAUzz91%2BADzRPTKHcz0AvfOA4ou7JArWnX%2Bzlu3Gjw07dmPYihml5r1GeDjI7hxxIoy3GnpM4UnikRqu34PqH1taYJyyCmRvD0MCX0ex0sRISJpq16%2BtoFjm4G%2BUAe73cpW6uNweGhItYFYLIRsmuDMcx8Az6u2eI%2Brv6WkiwrRqrvwVgqJgabqRG%2BVj4TJUSPFuvo%2FCq5R0ZzABcoafFFcjyZ8sit4xiU9J2N3sy438HF47%2B47uDAGTN2RmpZsFTnEPAlzFKfAXMIy7isRAdjf%2FoS30uRTJXo4wlYSywAY6pgErrhwrWwHS%2BipHjPBUD7Tu%2F1u%2Fcmb7RSa%2Fh%2FRTC60tifZ3oTSo7y10vUlOHndko36p7RHlgFPFqhxWL%2FGIXmhce%2FnV0rPLs1TV%2BNd8KyueyMuOMzg5Fy2udxtSoshb71e%2FwzwZZ4gfFljtU5cTWZ0XDowu%2FBek1aE5Xr2t5YB%2FVuX3DZ%2FP53iK%2FYYxFFA1%2B8syGcN50usPEHPvrqHhKi5Kh5J0979h&X-Amz-Signature=fed27c67cc367807f388beca5811fa1b095e9aa8175c99f040816643621fc1e6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X2A2UIQ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T121302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfqLd4yNtvk0R%2FZcFEwkyh%2FZZFFZyECKNAnv18amWEnAiEAqCcA0Qe7BXnij1X5aHoWUQy9UFOn3D0Xs3%2BOlZ2cSlgq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDLvZXD5dw1lKSSTMaSrcA%2B17CPdLwimXV0atO508%2BjgHdQShF3h7KdAfQiVDsCdqHgKqxHlf8VUlebfDbcTIVlA6aUZ31bqJ26XQQTdM5ezxGEqUL9%2BoEAuSWLkQG9hFMMlfIlV%2F8oNj%2BUrmhOiIwkKSsaN5OXTP0fcZRGRMMv2WK6DAkehvCfbEFhvXgMaR03%2FmXJUEjkBs7I8FcXm3L2W7%2BSN5NqdCPPL6QQKJtwsQjBn1cHhr6f69oQAKSyiQs7q2s6OATMvC8%2FjT8dYAcUlChL%2FHjCXmXf0%2FDalEpm43TSxlkCG4qo4MhCUglCBMNv8RfT24rMUM6yaQxwLTtMapaCv%2B3AZWX%2FaIyMAuokKKS26eQG7tGU3Wug4fQGOYMDkzWugJ78qzNQ0FQFig16ZW6HdRYZsvAaoBMtOFhOk%2FIjhrgDLhQ83Aysa4ly2VkVjdYDx%2BI5SygGZJU03fE8E4uN3JdWP9Y5p2xDJbWQdXsOUZrHnU3FHb39E7dCoglmNq52KPKhwH4IOz49HWm4Dzt8qZ%2FUg%2Fq9F5HNlPPyPVgdeTJPd3gOKc%2FFSQG%2BOz0cLJ3n%2BkOCQnG%2F35oRKNVFgEfBL1jjqyS3%2F2yzePs%2FUQv2p5SwMl5d9WuQMCdNRATI%2B4EWOs16l3KxnbMPiDssAGOqUBTGkhA1qypidSyTRTjcbgt1l%2B5pG9tj70HVGpIToQeLQtWrwsQaFoM2Gb0PWJG7xfbX1UwAcqwWaF7CcBakXDdVWaAw2Nrz8ZQXaKeHPm1n4jb%2BfN7dFmkazCSXSSbWWvrXM3j7ImOjg9Pld6YiXeVlGGgIXioCxCZeTszW89WnRn5T1fdmvXBSC00zq1qEb0SjbKMn1To0XMlVNhJijdSxCr0odB&X-Amz-Signature=d18364ab0deea905f571a5d1e103a405883708e0aeb834e5cb34a15153c298a2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637JOSVKR%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T121302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTn9Zk9I8cUabe2U8NsNSodF%2FIXuT3rmmd2fA6ud0tzQIgJ948vLTluvYCnWUQrxf4ExT2PTp91gtP2UEMo2dsqs8q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDIt67gGG7eroqjUhySrcA7104p9RJ9fJpKGg4o8tRshes8LFB4K0hrF%2FpIu9YHd50RFiNpSI87HmeB9mCyfI91zWYjtk91JDNywBFMeOvL%2BnQFwWOHGMScXSpwcf9xlqqc%2BZ4VIxBHt6F9n8noSbJpfPgAbIZ%2BcTX6gcyfOpjLAK4dtJhjTqENCurlChgM5yEJRbTBWh0WyMumie8uoPOTG%2Bg9SDz%2F%2BkLsk68%2Fr1OuWkxHX0gs35C3QV1y723ymCKpZ1ndSKRTrE%2FVa7uWMSYmqSaL883PYfh4HKPyc%2FuacqLQox3OB5nloyyh9w0cjQDfMdghoT83oe4oxb1ORFeqK9Yo37oubqt7nmkjQZHrIIKuOxo5wN4le3UWHidMR28%2F6Dt0ZpwKUb946%2FTHD%2BS9seSd%2FJBsLZyP7EHNN3RNhaQBnvnJZJu5nWbaGAEw%2FwczJuW2Zg0v7EHfm698OHpyFM7%2FfMCLwtdYmn74EgBhU6ytrdA95FONuDI411CMRh1GTD%2Bq3PDrMLA0TIo41yVsdy3kWqmSe5aYZOAkzfe8kw4c7no%2F4WzUOYHcv4Qokk2MYpcWTCulHMEV%2FvbqSR5vTEXbbqCTCO8J%2FgdHSnlNovMc8s8F4q%2BRKdyjJtUMgftFjl5yICzxqJRBF%2BMPCDssAGOqUBhUBxXdPZB8kj2SgFziVmfwBuUa8uvv3V2DmUczka6pV96w67ywpSPEFMVPiL5Td3fuMWpJ6fP%2B3%2FkRMQM%2BKuYSPk8F7Ciiad9CpyS%2BeZDYei2ttbqiC96Ft8T%2B%2BXkuyb0AdIIWM5bDn1gWuWOpTbH%2B0RKVDDbsc%2B1zEzB1b2BlyAYKzG3Ik9%2FBlmGMnwAJ%2FK5%2FGZdsgcc2KfiqYdtbA2FWbTfhN0&X-Amz-Signature=117a4680980ea4f5d4b352d273b2efa397de9db3b2822383b74f5216ca6d18e7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAO4A6DK%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T121258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsP6GgbifMEeP1huzqFUYt3FDdYvcPXrEzQxn%2FLDURUAiAIYZZg2x6T3qk00rY0ftlNCE0R4EBe7Oa4qnGT62JqzCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMlFduXDzC24%2BEw9zKKtwDhpdcLsD%2BD2za333l9eouE1Hyn968NbB%2Fhp2cdXrZkubBJPdHkgOf4rT9bh0Nmnp7YYc%2BohYn%2Be8YT5wF1StgnNPbwj2LlcL5ZfdduyO6iwc1X4eSqtfEpObcZTIqSIBAUI3rWXK1tBF%2B3jQ0cWqjN5dWQZXERlyPRduauR%2FtI9uvOsH3Xx9thkCpnUl%2Blsj5dCU9lAkdHM6pgsiHcPmJwkZOOnAytU4xYLcO8an807bouavgqB%2BRRKw3dfoQOcs4YGzWcFMfCNFH330Kzva7ihSH0iFOGe81Oc87kJesZ19EGolu%2BOZIevO%2Bo2mbc7FOdc0miYAaXgtGhaeQYv7IjadCaAUzz91%2BADzRPTKHcz0AvfOA4ou7JArWnX%2Bzlu3Gjw07dmPYihml5r1GeDjI7hxxIoy3GnpM4UnikRqu34PqH1taYJyyCmRvD0MCX0ex0sRISJpq16%2BtoFjm4G%2BUAe73cpW6uNweGhItYFYLIRsmuDMcx8Az6u2eI%2Brv6WkiwrRqrvwVgqJgabqRG%2BVj4TJUSPFuvo%2FCq5R0ZzABcoafFFcjyZ8sit4xiU9J2N3sy438HF47%2B47uDAGTN2RmpZsFTnEPAlzFKfAXMIy7isRAdjf%2FoS30uRTJXo4wlYSywAY6pgErrhwrWwHS%2BipHjPBUD7Tu%2F1u%2Fcmb7RSa%2Fh%2FRTC60tifZ3oTSo7y10vUlOHndko36p7RHlgFPFqhxWL%2FGIXmhce%2FnV0rPLs1TV%2BNd8KyueyMuOMzg5Fy2udxtSoshb71e%2FwzwZZ4gfFljtU5cTWZ0XDowu%2FBek1aE5Xr2t5YB%2FVuX3DZ%2FP53iK%2FYYxFFA1%2B8syGcN50usPEHPvrqHhKi5Kh5J0979h&X-Amz-Signature=bce4c9e8247fb2a90dae635485c5bc648b131995b0ad7d0f60c703b382f83d72&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
