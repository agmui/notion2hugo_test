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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EOZPYD5%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T061211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPpW01IBISlKhLgjU0XCDL%2BkGfQ1%2BwJr52i99dleWxZwIgRcwwoq7%2BtQrbG%2Bcsm%2BeHn1qSOeXfxPUbeg2qVe78MtgqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP6XustkiIRhDO8mQyrcA%2FyeG%2BdO%2FemQk7XK17M4gmqfOSlqBKauo6%2FaHz36hXpwlihEczqx5Vt5Y7%2BnCsxPm9oXDWejdvEcYWLZzA155%2FAOAkxiUIHgL7T%2FiyLYvg%2BewD15mHERZkZOuPnnZl0KI4QoFwQZORI3qKvozpzJglz7xQYhoHj0mDSGYyau6B12N71ViDiqqbNQLo7l5piGyP277cz0Mc1m7uOta%2BEEq%2FSAR7kEt%2F4GzKLCiaAg43ZEUDKP3tfkSK0gHy1XZv00Eb0v9Tx1jGmRjHVHJfaYaCwknvZHSzpf%2Bdes2g46KbbV34Qvrh6lSs6ptK2Ilo6e%2FHXo45App3nKDqfy2Zcv2gP3yML6SNJFHtHAoq0SagAR3A3qGGq%2FepOMBR4uJXGKCQgVhoowpRpiJm2bnE%2BrMEEPCIZ1Wdr6piN78xQjSDSN41u4jL1eeCHlOYRHHSJL2JlN%2FfCWS3q8cjHDHtSlNHLpTdXgh0k86q6UmQZljnYpkWw5g6mZJAgu%2F2ZuY8ctto0F7QOWlnrSIvKzun7mozwWu6yQYPCwQ%2BLIfYYt5qq9w%2Bi1Hz66NMOv%2F%2FdVUY6yi9rn5%2F63OgMEf9DEnq7JWtj4XOy74z83sW0Zw4EzPPzzzkzG2cExZmfHvsOnMOrig78GOqUBnr7IcxiKjv0QLA5a0p1jaT14zgKwmvLnyVOGki3IBNehEMUDEUm2ESub%2BcJuFLc1m7RZgtSLzEQyMjTXo06%2B2N43FLHD1dUXvRxqYaLl7PHAeT6OS05C%2B3dUqUBTN75N245qDBZZpRrsPhFqT66aGTkQm82Pb4f%2FIKqL2XbZHqUoWAcrzfa9sGVEm%2Btz%2Bd9Xw8ANAztd6g28zdBZC4l6NEjYarkg&X-Amz-Signature=1b09c93368fa06067e36c7373fffa501f89c7faa1a777a39745ceb5d8be80d9a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EOZPYD5%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T061211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPpW01IBISlKhLgjU0XCDL%2BkGfQ1%2BwJr52i99dleWxZwIgRcwwoq7%2BtQrbG%2Bcsm%2BeHn1qSOeXfxPUbeg2qVe78MtgqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP6XustkiIRhDO8mQyrcA%2FyeG%2BdO%2FemQk7XK17M4gmqfOSlqBKauo6%2FaHz36hXpwlihEczqx5Vt5Y7%2BnCsxPm9oXDWejdvEcYWLZzA155%2FAOAkxiUIHgL7T%2FiyLYvg%2BewD15mHERZkZOuPnnZl0KI4QoFwQZORI3qKvozpzJglz7xQYhoHj0mDSGYyau6B12N71ViDiqqbNQLo7l5piGyP277cz0Mc1m7uOta%2BEEq%2FSAR7kEt%2F4GzKLCiaAg43ZEUDKP3tfkSK0gHy1XZv00Eb0v9Tx1jGmRjHVHJfaYaCwknvZHSzpf%2Bdes2g46KbbV34Qvrh6lSs6ptK2Ilo6e%2FHXo45App3nKDqfy2Zcv2gP3yML6SNJFHtHAoq0SagAR3A3qGGq%2FepOMBR4uJXGKCQgVhoowpRpiJm2bnE%2BrMEEPCIZ1Wdr6piN78xQjSDSN41u4jL1eeCHlOYRHHSJL2JlN%2FfCWS3q8cjHDHtSlNHLpTdXgh0k86q6UmQZljnYpkWw5g6mZJAgu%2F2ZuY8ctto0F7QOWlnrSIvKzun7mozwWu6yQYPCwQ%2BLIfYYt5qq9w%2Bi1Hz66NMOv%2F%2FdVUY6yi9rn5%2F63OgMEf9DEnq7JWtj4XOy74z83sW0Zw4EzPPzzzkzG2cExZmfHvsOnMOrig78GOqUBnr7IcxiKjv0QLA5a0p1jaT14zgKwmvLnyVOGki3IBNehEMUDEUm2ESub%2BcJuFLc1m7RZgtSLzEQyMjTXo06%2B2N43FLHD1dUXvRxqYaLl7PHAeT6OS05C%2B3dUqUBTN75N245qDBZZpRrsPhFqT66aGTkQm82Pb4f%2FIKqL2XbZHqUoWAcrzfa9sGVEm%2Btz%2Bd9Xw8ANAztd6g28zdBZC4l6NEjYarkg&X-Amz-Signature=e505fd4aa2dbdfc6207969cf69082d7d4a7a057e6ac99bfe443a93e3624224a7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLRQOVUQ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T061215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICr19xgbXuQt%2FQfMedAjKCh8588tZI8wuCWUhLOxWQuAAiEA5dfXlMrRDDfExu3aCHK%2BxLP3fsBQsfb1u84Imu5TBDEqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7Ef12eZ6Ipkq52dyrcA3OhSrsiwo4cnWq8Z9huF87ww90ZpEDRL%2Bi%2F0gUcop43tIfopRfR9YPFesScrF%2BT8dY5VuiOC4ndm3tKi2EQrb6h%2Fqow5b2bhhN0ZlkNFxXNwehdjcE5L0gCl7h0lSVtnZdI2FqE7Xk%2F16QWnhgxgIXC9riCB0xtm7B3MXaQoM1AFi5VusCLkQxjId6M6JtxHjdxW5uDhxDIyy0E5jyaSdsWWIkOjeXJZzme2Bpq8Hnf7U0MAbTzllYEHcl9PcX%2FRg77h4aUq7KpGyReoTHQg%2BJZL0SV5e39sXvsBoOjqOg3%2BOyoU%2Bzzb6BfzKAvJUsYmdS4aYoi%2Beex7yMakHitooAMgOPmdfhJs%2BJJHn0ChGrqlmZvPsRuhnW74l4BfSpScg%2FnaNGnwcnj6g4RFi%2FP6nssgKAX2JK2aPCzqqbGUkosLf4UiQusrm5ohjWCqidPvCKQuug17Kh9vP3FR3tKDn%2Fa0TypBtVHMJ5lCCU6P9iYa2X38m%2BZ0oHL9gBMqtOV1ooqTLmwBj18KnE1CAsUP9NnxV17ahTE2ekdl1UWi%2F9xCKuAdW3nx448Gi65iYIKaeRR6%2FedhsyprxYpRY2S8BVxUyMTD%2FPND%2B6KSb2O%2B0YxsSw3tPlryToFdkoQMNzig78GOqUBVvGAxAzK%2BJgnf3rQByA%2Fi0uDawKJCAAHILHsyENU74KBXtq2vLI7ZJFLmiEyrqKiobJrjlNP5WGhss1Fqpz2nXviCSweQ%2F2y%2FPnSv3lbNERkb8emLWOo%2BpIZV8K551d2dJtjR1keeadmULQlnNCD4nI4NbFv7qAXuy6Pf3qyIl8sR%2BVL1VBSKFKgKANbOQULVdy91QEbC6rKVqzGe15LaeTjW5TV&X-Amz-Signature=95b2d757310783bc0786599cf5083e4ac5e4aefc5539595eb329cae68f7f61e6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOQX5O4H%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T061216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRHXXoijen7Xnkwxr4zU09oF1kEEyHspslQAqzftcLBAiEA3qhUSQ%2BtefXGt4wed5ngdALQFRm8DtYCn6t94XZZrU4qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMlqJsDvzodB56n1NircA%2FXmvi03iakWbxCyIpvqfvaFrIoDR7tPeXLx0YAvoqZjVOAV7B5NJXaFpzjC1U8m7M2VYHBDxMQzglJmp5W64D8MvhJXnKkkrMXuDL783bsj%2BEPYlybce7A3F0xGHfhh9LipZReXnIh9ppp%2FrxAjcLpA%2Fnfzv1GMe5mpiaIeeJbEjmzxvTHc6wQKVuf9WAzxts21FPN3f9vEOF%2BFzoAr4%2B9HjFqISbhh3WH%2BlgXMNwE62DcxyObL9jhmr6C3fPv0Ug0S6SO692TDXeUSAHmGQdfqA7dAfNCL%2FlTCCegS2Wqbh4uAZ5MfDQtiFM4de4GU6U1DRbCechan7e9PxhFVUcXI5%2FtZT0PC4%2FE3T89fJvmjRVdrE4%2F9Jjoq2wAuIOcUoBESuZp7G6SNCfeGSI%2BlS64Is13DdTgUSVOkZ3GeAN%2FApnGMPDRnO7ZcsKEi8MVSE8s9vUBsB0HQIif1dN21IRbLrhiGlKhNdRjBJosFH%2BB1NBftHnJ01Vkz1YnNrnZUaak57AIBvIhSY7%2B2uSxzM2ipWXbShrNwISdgRy2EGYQhipIOEQvxpWY2gwLwO4tUOZXyWyPQy3uHAfr7FquNQ1i3Sflo66wkdVnSQp8%2BM7dDAWXnwkux9HW80go4MJbjg78GOqUBYBji4aYbKTNxDvyNYgx8Wwx9fNVEEF7sIXjxKMls%2B35NYzu%2FrskiUTKscahE3CMI%2Busx3Cpt0RmvFhKyfgvEddCFQMIlMdhJLXRZAOnhHUEBiE8d4NRye%2F1nJnZLFqnJBApg094SgwyMXaCGiUES7qv1bOG6LAc9bBMWrNiFuWU4G5UlIdMB5HIkkEIJ%2BHjBVQLH4V5LxxqotcRV5sB1bLgG8dIT&X-Amz-Signature=e67cb994c8eb65d41e888bd31054d6860d7b0a3d9fcb7f93bc71ae3408e64603&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EOZPYD5%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T061211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPpW01IBISlKhLgjU0XCDL%2BkGfQ1%2BwJr52i99dleWxZwIgRcwwoq7%2BtQrbG%2Bcsm%2BeHn1qSOeXfxPUbeg2qVe78MtgqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP6XustkiIRhDO8mQyrcA%2FyeG%2BdO%2FemQk7XK17M4gmqfOSlqBKauo6%2FaHz36hXpwlihEczqx5Vt5Y7%2BnCsxPm9oXDWejdvEcYWLZzA155%2FAOAkxiUIHgL7T%2FiyLYvg%2BewD15mHERZkZOuPnnZl0KI4QoFwQZORI3qKvozpzJglz7xQYhoHj0mDSGYyau6B12N71ViDiqqbNQLo7l5piGyP277cz0Mc1m7uOta%2BEEq%2FSAR7kEt%2F4GzKLCiaAg43ZEUDKP3tfkSK0gHy1XZv00Eb0v9Tx1jGmRjHVHJfaYaCwknvZHSzpf%2Bdes2g46KbbV34Qvrh6lSs6ptK2Ilo6e%2FHXo45App3nKDqfy2Zcv2gP3yML6SNJFHtHAoq0SagAR3A3qGGq%2FepOMBR4uJXGKCQgVhoowpRpiJm2bnE%2BrMEEPCIZ1Wdr6piN78xQjSDSN41u4jL1eeCHlOYRHHSJL2JlN%2FfCWS3q8cjHDHtSlNHLpTdXgh0k86q6UmQZljnYpkWw5g6mZJAgu%2F2ZuY8ctto0F7QOWlnrSIvKzun7mozwWu6yQYPCwQ%2BLIfYYt5qq9w%2Bi1Hz66NMOv%2F%2FdVUY6yi9rn5%2F63OgMEf9DEnq7JWtj4XOy74z83sW0Zw4EzPPzzzkzG2cExZmfHvsOnMOrig78GOqUBnr7IcxiKjv0QLA5a0p1jaT14zgKwmvLnyVOGki3IBNehEMUDEUm2ESub%2BcJuFLc1m7RZgtSLzEQyMjTXo06%2B2N43FLHD1dUXvRxqYaLl7PHAeT6OS05C%2B3dUqUBTN75N245qDBZZpRrsPhFqT66aGTkQm82Pb4f%2FIKqL2XbZHqUoWAcrzfa9sGVEm%2Btz%2Bd9Xw8ANAztd6g28zdBZC4l6NEjYarkg&X-Amz-Signature=6e3e24457c2627dbc586177673d5a03194787c1e2e08b1c40da1e27ab00a7cff&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
