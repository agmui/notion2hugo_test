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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM2XIP6Z%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T121538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQChyRSp%2F2Fun5etF5Ok63Q%2F%2Fj98lWJN6rvbYW%2BAdnd45QIhAMQ0pUrz9ugWUg4S4jb%2BswbgLiYS%2B%2F2pfn8Txf2tvog7KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6daAgAw7KtE%2FD4lMq3AOON0zZMOy7jhROP4fnHR0t1cPPqSA1z4B2YFLBuliQUiPG%2FRf0kLsk%2FJcqMzBWCszYyM2pPV6Uzel8zQL%2BJiJMUwsB6Q%2B1wTqtkmiKVYGRDv78uYz42GW8p7yaktdAcmcgEbkNUq49%2F9KuJq1cnM%2Bce2l7NHCDSWP7mEwfNs8gt5RSPg8%2Fn0QvYJUDSaqotGaKX0bxhgKHBJUhENJKKd%2FpnX0kTYNY3uQDoPtvD54vidxvJ7T8MpVxZ3930oKf4dBNyPc2gZ56HTh2wngsxmobOJFBShB0hZbFT3T3vh1XcQsQrIWZiFRvWOWeth3o6m2VK9aqQ8xqLs%2FjHsq7VcerlM%2BrSWjEdohGl9H4VvdCADz9qKJ7KjGT8XEDD%2BIv0vq1iYjQEao7NQrTEFUpi1KEaDzXH8OZdzVRSMmbm%2FlcTybJisWp%2F1SRltY%2Ff2sOtX2hkDJJQo4U1fNnska0MB0UcMpxMTaQ%2FRsFiS2%2Bb7rK2q1qy0LTC7ReZdoi4vkPJjwpay2FpzzxNvbzut7HDkYxuvJZvBrNeZ4OyZXWKagFXQNT%2Be04GEW%2Fc7VmsEXggILTEGz%2FvJPluPgglq0IzTH7%2BCc1a7DJFLIXzeUakAsesdoRrlaVezL%2FdBDd0zDHhavCBjqkAVDh8sU5SQsdQnLnhiR%2F%2BAuxfg2agn0CJlHs020NN6rNh7NXylnPmsm3QcRqReLDjJg3dQkXzhiKSNGKsbN75iEYehpq5lUIPTpZTKi3SJp2XUIJX4kCE45YilXhlf9sWsfALAHyW4rBnBMpXI8c4EpQouNLYhxOr%2BewfJ%2FQ39GLaw0wh3D8p1UDxFPXmi5rO%2BNaAZuUEFGf%2FDmrpB2lswtFJhYw&X-Amz-Signature=1145b48e72a3690eea0da664ead0f4245adf66c9e8ec4e945d4b1feac1e42e95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM2XIP6Z%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T121538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQChyRSp%2F2Fun5etF5Ok63Q%2F%2Fj98lWJN6rvbYW%2BAdnd45QIhAMQ0pUrz9ugWUg4S4jb%2BswbgLiYS%2B%2F2pfn8Txf2tvog7KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6daAgAw7KtE%2FD4lMq3AOON0zZMOy7jhROP4fnHR0t1cPPqSA1z4B2YFLBuliQUiPG%2FRf0kLsk%2FJcqMzBWCszYyM2pPV6Uzel8zQL%2BJiJMUwsB6Q%2B1wTqtkmiKVYGRDv78uYz42GW8p7yaktdAcmcgEbkNUq49%2F9KuJq1cnM%2Bce2l7NHCDSWP7mEwfNs8gt5RSPg8%2Fn0QvYJUDSaqotGaKX0bxhgKHBJUhENJKKd%2FpnX0kTYNY3uQDoPtvD54vidxvJ7T8MpVxZ3930oKf4dBNyPc2gZ56HTh2wngsxmobOJFBShB0hZbFT3T3vh1XcQsQrIWZiFRvWOWeth3o6m2VK9aqQ8xqLs%2FjHsq7VcerlM%2BrSWjEdohGl9H4VvdCADz9qKJ7KjGT8XEDD%2BIv0vq1iYjQEao7NQrTEFUpi1KEaDzXH8OZdzVRSMmbm%2FlcTybJisWp%2F1SRltY%2Ff2sOtX2hkDJJQo4U1fNnska0MB0UcMpxMTaQ%2FRsFiS2%2Bb7rK2q1qy0LTC7ReZdoi4vkPJjwpay2FpzzxNvbzut7HDkYxuvJZvBrNeZ4OyZXWKagFXQNT%2Be04GEW%2Fc7VmsEXggILTEGz%2FvJPluPgglq0IzTH7%2BCc1a7DJFLIXzeUakAsesdoRrlaVezL%2FdBDd0zDHhavCBjqkAVDh8sU5SQsdQnLnhiR%2F%2BAuxfg2agn0CJlHs020NN6rNh7NXylnPmsm3QcRqReLDjJg3dQkXzhiKSNGKsbN75iEYehpq5lUIPTpZTKi3SJp2XUIJX4kCE45YilXhlf9sWsfALAHyW4rBnBMpXI8c4EpQouNLYhxOr%2BewfJ%2FQ39GLaw0wh3D8p1UDxFPXmi5rO%2BNaAZuUEFGf%2FDmrpB2lswtFJhYw&X-Amz-Signature=f331213d7af08beaa8ee939e2a8b75f1fd7199afae5aa2233521afef954fbe70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM2XIP6Z%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T121538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQChyRSp%2F2Fun5etF5Ok63Q%2F%2Fj98lWJN6rvbYW%2BAdnd45QIhAMQ0pUrz9ugWUg4S4jb%2BswbgLiYS%2B%2F2pfn8Txf2tvog7KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6daAgAw7KtE%2FD4lMq3AOON0zZMOy7jhROP4fnHR0t1cPPqSA1z4B2YFLBuliQUiPG%2FRf0kLsk%2FJcqMzBWCszYyM2pPV6Uzel8zQL%2BJiJMUwsB6Q%2B1wTqtkmiKVYGRDv78uYz42GW8p7yaktdAcmcgEbkNUq49%2F9KuJq1cnM%2Bce2l7NHCDSWP7mEwfNs8gt5RSPg8%2Fn0QvYJUDSaqotGaKX0bxhgKHBJUhENJKKd%2FpnX0kTYNY3uQDoPtvD54vidxvJ7T8MpVxZ3930oKf4dBNyPc2gZ56HTh2wngsxmobOJFBShB0hZbFT3T3vh1XcQsQrIWZiFRvWOWeth3o6m2VK9aqQ8xqLs%2FjHsq7VcerlM%2BrSWjEdohGl9H4VvdCADz9qKJ7KjGT8XEDD%2BIv0vq1iYjQEao7NQrTEFUpi1KEaDzXH8OZdzVRSMmbm%2FlcTybJisWp%2F1SRltY%2Ff2sOtX2hkDJJQo4U1fNnska0MB0UcMpxMTaQ%2FRsFiS2%2Bb7rK2q1qy0LTC7ReZdoi4vkPJjwpay2FpzzxNvbzut7HDkYxuvJZvBrNeZ4OyZXWKagFXQNT%2Be04GEW%2Fc7VmsEXggILTEGz%2FvJPluPgglq0IzTH7%2BCc1a7DJFLIXzeUakAsesdoRrlaVezL%2FdBDd0zDHhavCBjqkAVDh8sU5SQsdQnLnhiR%2F%2BAuxfg2agn0CJlHs020NN6rNh7NXylnPmsm3QcRqReLDjJg3dQkXzhiKSNGKsbN75iEYehpq5lUIPTpZTKi3SJp2XUIJX4kCE45YilXhlf9sWsfALAHyW4rBnBMpXI8c4EpQouNLYhxOr%2BewfJ%2FQ39GLaw0wh3D8p1UDxFPXmi5rO%2BNaAZuUEFGf%2FDmrpB2lswtFJhYw&X-Amz-Signature=041a176b009d5480ee9cfc9e12365f615838a5b7c39a9036bed9a2fd67377ef7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T66KHVE4%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T121545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBFRaTUWW6a%2FGyZC4rMMrcw8oKixyJRkm08DOr4aJ%2ByHAiA0IuAG1m778q3QS9I0i7k0OmMXyAKtp2TdrCa1yE5GTCqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOSp4gSLiqWLhhGKTKtwDE%2F4xOYJgbxLfR1jMUcEqOLfgjx8zFRPD9inHkDed8Km%2BZzUCAn%2FzdQ7jAAfWWgzso%2B2LcFH9B5mfYk7CBX2yUzSOtA%2BDmM6xZor9aswCe4ClUojAtf1rxXm10Vh5LdBOO0XYuPYV1tSZMvmZg5bJfuu%2FijX%2Bh%2BbjkNHjm%2FzarO3mLHvt6uQYW0bc3evYlfU7DlvYbJtlTGvX221SITpyFR1JdpitvjnX7r58N0zVec2B6powOm5dxmvbenlTWyFbyoaizDAOhEPjA4hulxNw7asbdSCG539QYM3z2z%2BS61ph90EparJaOe%2F2qjL76vKsuvXeuA381kOYyirZgFcXWNOXzY7ZExpWzH4aHnoWOKWeMboay66XAiBMroQVTu78vq4q5D4eNEUAiKM2YZ0VIZf66rTTnEjIHOKSJZPaen4ZE6kZkUbd04TECbgrJs02BIauDOUBB7e%2BfscCIDU6oZ5wyEljLrV9wdAcexo6Doorz2oovYQB9eAVqXkIKiNLKrYScE%2FJXEEnGyZsK0gCZFxdXA9175%2BsvkjZuVP1h5qU37JrVsAr%2BJ1bJSW9EFlPnYMFe%2FIQUPY9ECDT3uRinZjgMWATi7mwkQYWm6W8qmndLY5ztw167R%2FpwdYwn7WqwgY6pgFDTwcnprPJ%2F3a%2Ban59xNO1ekb6o0hEKU7UuehDV0SZvVpGc7XPwWUUeBmzhWY21IUSQ5uXAJ1kEPHImEmEIeaM8ztplGVxL76bRf1dI1XKG5dT8wlJMsg3AvmUzTKObEAXOPXUsg4UAGKEY3Q68AiP%2BucPZMyWvLS14GVWGBCYfck23SBN4Mc%2BRGgolbBw7cnk9lDmvDsKg68ZTmJPG%2F7L6%2F6sQ%2FLr&X-Amz-Signature=f71bde6ca6978a4f041e0bda51dac77c5e8742d27564e8e21ebb12ba34c0c618&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BAJN4JE%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T121545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIF2XvS2%2BleiNmFf1hU41F8NDdNRwbTgusOw5X5sEwmhVAiBI2d48pMIaRglVXeUymj08h%2BmEe33zzx2jbT%2FuYricuyqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOHMEITFgcL6HJvEPKtwDZQKuh6gj6xAVY1Smi%2FMtWdubB2ObbA3YRHpwhc6lxU%2FcbB3Rlj7uHapAhfPQd4GyOmOKKcB3E7vnn7qvFm90xjWYy1gFhEfymmxgQlsfIFruDl59njHw0ymlcyLPHWHEKrZTSR8yasSo6M4IrnQYsZxwx1l3IbtAmCylNY%2FTqeg6s2%2BXdqLiM0YSOrnd0G2aAmH9Xpx28rwqa6xqJwBmQaQ4udNMLFBYhybWL7hvBR%2BUmLZShWpv2PcrdOE0rKqZzBCwASKeSZfkCNEdl0WxE5UM8sTGv%2B%2BaxrijHvelYHBCs%2FrUMcUK0bQRr64tCVKuT0PFa%2Bz%2BoTSMyJHYcpG303YpBl92J93paWAd3cIFz7ZxNRd%2BZn9Kt0k3L%2BX8FwSZpBGNLQpt411GFa4knpEmPPWRT38cdPTrSobEtC%2BZl9mVNtPibt7RbpUqrwtpQ3Zw3maeXJOldq%2Br73egQGx4as0qtIa2kHss4Jj9N7e%2BylxRrMEKwJQ1FQuloJd6E46CTqd%2BPFmIO%2Baa6d2Z0qC2vUH%2FgvpmghoSIatjUy7A7SmkiUEgsDCG8K%2F7Y%2B9%2FWfId9TooEvnJjbSkinBDDSIQWECUCu9VLYG4adr1z%2BsgcQcola2AAjZuZS1v0X0w8aCqwgY6pgGul1IX1U21ZjZoV%2FZg%2Bx7ffqsQZjOrcf1B0EWvEqpzkgrfdsfmXEsZFEPUd6vvdxM32Gqd2XhV9IpT47v8TEafubKEFQhoYADhYy21blVyBdwoFQY53V1E7aKLwyFdkEQY6cIDsUu4RGF2sAakFuTeYsURYebhbhxd23VqjcXzh21x3%2FskoE0jQNHy9KUGkIpMMUshNx5SdR9ZkohC%2BATHHn%2F2F1SA&X-Amz-Signature=5c80d43a914a9ba73dc26d455d8de37e3930b13cb6d47e1aa5c2ed9f3aea0b40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM2XIP6Z%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T121538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQChyRSp%2F2Fun5etF5Ok63Q%2F%2Fj98lWJN6rvbYW%2BAdnd45QIhAMQ0pUrz9ugWUg4S4jb%2BswbgLiYS%2B%2F2pfn8Txf2tvog7KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6daAgAw7KtE%2FD4lMq3AOON0zZMOy7jhROP4fnHR0t1cPPqSA1z4B2YFLBuliQUiPG%2FRf0kLsk%2FJcqMzBWCszYyM2pPV6Uzel8zQL%2BJiJMUwsB6Q%2B1wTqtkmiKVYGRDv78uYz42GW8p7yaktdAcmcgEbkNUq49%2F9KuJq1cnM%2Bce2l7NHCDSWP7mEwfNs8gt5RSPg8%2Fn0QvYJUDSaqotGaKX0bxhgKHBJUhENJKKd%2FpnX0kTYNY3uQDoPtvD54vidxvJ7T8MpVxZ3930oKf4dBNyPc2gZ56HTh2wngsxmobOJFBShB0hZbFT3T3vh1XcQsQrIWZiFRvWOWeth3o6m2VK9aqQ8xqLs%2FjHsq7VcerlM%2BrSWjEdohGl9H4VvdCADz9qKJ7KjGT8XEDD%2BIv0vq1iYjQEao7NQrTEFUpi1KEaDzXH8OZdzVRSMmbm%2FlcTybJisWp%2F1SRltY%2Ff2sOtX2hkDJJQo4U1fNnska0MB0UcMpxMTaQ%2FRsFiS2%2Bb7rK2q1qy0LTC7ReZdoi4vkPJjwpay2FpzzxNvbzut7HDkYxuvJZvBrNeZ4OyZXWKagFXQNT%2Be04GEW%2Fc7VmsEXggILTEGz%2FvJPluPgglq0IzTH7%2BCc1a7DJFLIXzeUakAsesdoRrlaVezL%2FdBDd0zDHhavCBjqkAVDh8sU5SQsdQnLnhiR%2F%2BAuxfg2agn0CJlHs020NN6rNh7NXylnPmsm3QcRqReLDjJg3dQkXzhiKSNGKsbN75iEYehpq5lUIPTpZTKi3SJp2XUIJX4kCE45YilXhlf9sWsfALAHyW4rBnBMpXI8c4EpQouNLYhxOr%2BewfJ%2FQ39GLaw0wh3D8p1UDxFPXmi5rO%2BNaAZuUEFGf%2FDmrpB2lswtFJhYw&X-Amz-Signature=04fadfe8dd432590c4330011755accee99c528b47f7660103993f302ee19e59f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
