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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q4BKOCD%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzU7oD0us%2F507Aa2CSirZWtwNaL49blOIP5XPPX3ODJgIgcXit0ESsovsb9ZlTML63hjkdXjB5Ff8f18C0yR7NjQgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHw4srPHQINH2tk0HCrcAwTgTMBd3udW54t89s%2BDQuvw0So9lG0tJjdJ3MSEtKHP92aWy1Sa8QkO178peOe7M2b8miNQhroh%2FfUlfdo2XJuLxItcrSTdakYpJFxEbrbfjpEJ1d%2F415xpASm%2B1QDQEWZC74L8WBqWqpidjPIL0lFswjDsUxDGjwFHwwVCeM7Nv%2BkWgpF%2F1xSfxgdMF3Ly%2BN0S62Ez5S5RvsJTHl1ixFXOFCn%2BVYOcfhuQBdZupKRHHxvB5lLzDQZUeiGLlRHI9zCXANZBEDh%2FGpwETV6ZxlGw2evA0xkBENvN6BEzlCIMiq4UtsxpL5QHl8U%2F3elZmkhEGPJlmFDW7RNdKVx8FlxaD5kmW0dPQXMp6NRTy6b%2Bi%2FPXqD%2FhBLC8AGkotarYn%2B6%2FWsZyksL2OPVYjynvyzSRgQQcT4FPvCdG0%2Bp9zRTgh1zko9BP%2Ftq7rDH%2BkOdhz%2B1xfRUocMM302UBl83QL5FY6JZEY22mAnq1WDSrbeIPESRBs%2BGeo2Ovxe0l4B8tCKWw6zyAwF3ZdonOuoJqJufB187zyrIUTuLEKP0kC3ejrWVxbzNA4rFmZkO%2BNSJZ8zFffwPhyA%2BaiHbZ8BS5EtEkb4qhVxkq%2FQiREfFoooQ4dySV1UGLa8OxSuyDMMLbl74GOqUBsYolpoD5xB5TxDccce%2FYBcWaWItYX%2Fg01pU%2FlEQITzw%2F1RaoYa2ghhQBGjjoqcnhD87Ghxw912r%2Fssxlb3fw3dm6EUJQcnYWVsp%2BvKQhMfFjJq9JdHev5fEIaKvh90eieh8MIDXeAke3t8Bxg52vvuGXQRo1J0u7a%2F07YkVUZJWCBk3jWjq4y9FMWsNhMfeuKwLvTjWkWCbF3VN2o1DDBS6cF2PG&X-Amz-Signature=9cb321c5d3675d21dcf77542ba849d3e94301fadc449801463df5efcb5e2306b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q4BKOCD%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzU7oD0us%2F507Aa2CSirZWtwNaL49blOIP5XPPX3ODJgIgcXit0ESsovsb9ZlTML63hjkdXjB5Ff8f18C0yR7NjQgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHw4srPHQINH2tk0HCrcAwTgTMBd3udW54t89s%2BDQuvw0So9lG0tJjdJ3MSEtKHP92aWy1Sa8QkO178peOe7M2b8miNQhroh%2FfUlfdo2XJuLxItcrSTdakYpJFxEbrbfjpEJ1d%2F415xpASm%2B1QDQEWZC74L8WBqWqpidjPIL0lFswjDsUxDGjwFHwwVCeM7Nv%2BkWgpF%2F1xSfxgdMF3Ly%2BN0S62Ez5S5RvsJTHl1ixFXOFCn%2BVYOcfhuQBdZupKRHHxvB5lLzDQZUeiGLlRHI9zCXANZBEDh%2FGpwETV6ZxlGw2evA0xkBENvN6BEzlCIMiq4UtsxpL5QHl8U%2F3elZmkhEGPJlmFDW7RNdKVx8FlxaD5kmW0dPQXMp6NRTy6b%2Bi%2FPXqD%2FhBLC8AGkotarYn%2B6%2FWsZyksL2OPVYjynvyzSRgQQcT4FPvCdG0%2Bp9zRTgh1zko9BP%2Ftq7rDH%2BkOdhz%2B1xfRUocMM302UBl83QL5FY6JZEY22mAnq1WDSrbeIPESRBs%2BGeo2Ovxe0l4B8tCKWw6zyAwF3ZdonOuoJqJufB187zyrIUTuLEKP0kC3ejrWVxbzNA4rFmZkO%2BNSJZ8zFffwPhyA%2BaiHbZ8BS5EtEkb4qhVxkq%2FQiREfFoooQ4dySV1UGLa8OxSuyDMMLbl74GOqUBsYolpoD5xB5TxDccce%2FYBcWaWItYX%2Fg01pU%2FlEQITzw%2F1RaoYa2ghhQBGjjoqcnhD87Ghxw912r%2Fssxlb3fw3dm6EUJQcnYWVsp%2BvKQhMfFjJq9JdHev5fEIaKvh90eieh8MIDXeAke3t8Bxg52vvuGXQRo1J0u7a%2F07YkVUZJWCBk3jWjq4y9FMWsNhMfeuKwLvTjWkWCbF3VN2o1DDBS6cF2PG&X-Amz-Signature=6db4c20be924640317d89ee1afbe75ce1edff4cf111b21bdf699b0a05383e8e0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IU7XPZL%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T190203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlfZFJawcVmXe9YgbACjldtrrpJivMgPx0mqYryAAlqQIgLJuRetUV2oF3LNojeUAP5yvuHruS14Zy4OcXJKdqTY8qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQitYcHuNP%2BrWOdPircAwDwR92Zd4EJZmkpork2hgsO2b%2FL1NCiHCSuRAiI3lQ3%2B0FCq88glMXp5R%2BoUwssf%2BNVOBku7%2FXZdlE0fP7R%2Bj5jCGErJc%2Fy%2Fxz53dUy%2Fvz3ptMVZTSjyHYUO1%2FSEATsqi%2BE30jZ4gp%2BkJqwKTirMhB6VR7XksaK96nJkTehhgnqvF%2BrfzcjXGR7YLW%2BLVKx7TXY0B4xgc9xX2LDhhlnPzA6gf%2BXJ7LEBR5xVAXaqk2t5%2BTgZOq6632Fd%2FEcp%2F67USaEUAtrlpNB772XyGOKQd9WJZnYDP0Qx%2Ba6VmMe73%2FI8aLgTI85U59sxWtxC8N0rXoV%2FY2CeQjbL95nLE%2FacGzAjM2pz%2FnTz6a%2FePP2P9JSBU18sxLbkA58YGblbUXW9eCSG%2B4GEvMgCBQzf3je1vVq02%2F1YRapsmxZKs4S0D6kmx6beBwBMTXMPH2zhDf5jCUmjY00xzVnRGmvAVoR%2Blm0ywW0n62k0TIcOIftqC88uNXLoi366%2FQZjUNMkiogxfjWQfja3aWIBawPRDHTRAqkUmWvWSi1D%2BgAooE4JTCsEq5LcNATBD7CDP0sdcYFigyPhKKfWTi2Nbg6ff1ivt0VchzjVyNIj97%2B487HzUy0cFdqIwqEyQqLy8DPMPzbl74GOqUBLZHrkAUVroh58ba6ka4QS94ftxHAliGFNDEHH8Q3O5UjarsL7X5VQZ63FrOK69SzD5O8qqoamwR6O8VGf9c%2FQBSRJVysKyi5OsEpnHCS2iWEXzmGSaic%2FhxHGEB1QrSmGQKrbInKuHO5yq6gZsD4gsduqqXR1PD09%2FWeh%2FMX0jcyHF971GqQDkaK3rfM25rJuUgMFMzLvRd%2FYhK0StFMF8ofWQo%2F&X-Amz-Signature=bd8e090eb266782a599bd53417c92c1d2bc14a3c456357ed8e5ec1b63eaede51&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLFGHDM7%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T190203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEPA8bPJWq%2B3IGcL0rqBtulxQqn%2FhW%2F92q6FGxI9%2BbuAiAZVdq2ehcYuzywIKUrTaTJ4Z0Kx5EyzeFGbsSfyVXIZiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjic9%2Bjpg76JtGUo6KtwDXOQcMPZgv71ld3dEgCBPYUghFml4bmOah8FQgfhm%2BsE2hBccgMkwLJnZ9B4kbQWG9%2Fcb36pYc70mWysyPX7AZXhXwDkmCOf6GBf3cX1TBBL7YQDap%2Fw0q02tHLVUAGj0ewOwlZBA294PcrvqHyydCGdHmxbPndPH%2FZl6q6lv%2Fxqldl9e%2BXxW1fEUFPwujpNgHbSLX1rhKwLWjQ2HkyJmuCJzeaw3bRPOrpGmCFaQ2w2CwGFaVmHEQFBkqMpu4vFIhYuTfhbvat1S8V82Ujct4bPxt4IGbPaMl5UX7BGirswAaBvU46SWCWkkMIMvIxyje3OFMjFTAKGtZwox2Hqe5yYE8j7E%2BWnBt3J8bdO5zOsdbb%2FPuV5sPzlsYPSDzJnRC5Z%2BvAv99KHUDmVeOs1cu4PGVwNLVpTxqmZiyrWk1Ypea%2BUsGLMn5%2FKLoxUqgsA6B3%2FWCowtCX21I0mgm7Kk5PZpBUtWG5vnOqfKRXm2Wvj6BE8s80eXkKzYCITcxu6IZwomY%2BU3ssA31Q2sy5oUvsR1eGlmezzCKamQwUBcXQGex3JSd8wa%2B8M3l1lEB6xSOEhWOxmgnUwRTp55LybTv%2FFUU6jXYWTSAAnpggq13wmGA2HjrMlmN84IARcwiNyXvgY6pgHSqOyXsnAXhjcBmNtsdt0bwifz2pi662YSUaqVq1%2B7tgCl%2BEZkgFsld%2B9aW%2Fz34SdmJ1GOocdEgoLHerXds91do5m2AlPeHngwhzoKPwGon%2F4yUaS29RQvXBXD3u1xLiAtKBrijBdoVRuNuZz8I5khKsrKyMIBnME42vjCwe5nA%2Br%2F%2F22EoXMUYlAqkJzCrz%2FV9ft3TQdr2ex6JwYI%2BhYna7xZ9PPD&X-Amz-Signature=99ef789129c7141b880f1d1fd28f76122a60d817dd7ab22a15efdf73cc19085a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q4BKOCD%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzU7oD0us%2F507Aa2CSirZWtwNaL49blOIP5XPPX3ODJgIgcXit0ESsovsb9ZlTML63hjkdXjB5Ff8f18C0yR7NjQgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHw4srPHQINH2tk0HCrcAwTgTMBd3udW54t89s%2BDQuvw0So9lG0tJjdJ3MSEtKHP92aWy1Sa8QkO178peOe7M2b8miNQhroh%2FfUlfdo2XJuLxItcrSTdakYpJFxEbrbfjpEJ1d%2F415xpASm%2B1QDQEWZC74L8WBqWqpidjPIL0lFswjDsUxDGjwFHwwVCeM7Nv%2BkWgpF%2F1xSfxgdMF3Ly%2BN0S62Ez5S5RvsJTHl1ixFXOFCn%2BVYOcfhuQBdZupKRHHxvB5lLzDQZUeiGLlRHI9zCXANZBEDh%2FGpwETV6ZxlGw2evA0xkBENvN6BEzlCIMiq4UtsxpL5QHl8U%2F3elZmkhEGPJlmFDW7RNdKVx8FlxaD5kmW0dPQXMp6NRTy6b%2Bi%2FPXqD%2FhBLC8AGkotarYn%2B6%2FWsZyksL2OPVYjynvyzSRgQQcT4FPvCdG0%2Bp9zRTgh1zko9BP%2Ftq7rDH%2BkOdhz%2B1xfRUocMM302UBl83QL5FY6JZEY22mAnq1WDSrbeIPESRBs%2BGeo2Ovxe0l4B8tCKWw6zyAwF3ZdonOuoJqJufB187zyrIUTuLEKP0kC3ejrWVxbzNA4rFmZkO%2BNSJZ8zFffwPhyA%2BaiHbZ8BS5EtEkb4qhVxkq%2FQiREfFoooQ4dySV1UGLa8OxSuyDMMLbl74GOqUBsYolpoD5xB5TxDccce%2FYBcWaWItYX%2Fg01pU%2FlEQITzw%2F1RaoYa2ghhQBGjjoqcnhD87Ghxw912r%2Fssxlb3fw3dm6EUJQcnYWVsp%2BvKQhMfFjJq9JdHev5fEIaKvh90eieh8MIDXeAke3t8Bxg52vvuGXQRo1J0u7a%2F07YkVUZJWCBk3jWjq4y9FMWsNhMfeuKwLvTjWkWCbF3VN2o1DDBS6cF2PG&X-Amz-Signature=ad4ec8c977ede7c69df063b7dc742a2fe961b79c034fae3764a3385da5cd8989&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
