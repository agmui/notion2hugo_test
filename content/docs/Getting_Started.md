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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDB5PEYW%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T061213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHJm9LdmyAafx07pDF6joBurtQ2fLws7bEK%2Bs5GPcC%2FAiEA1Fpjh4MaNGq6Z6Ky6TWdL2qAW8RGsvL%2FuO6QuQHibTwq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDMQiq%2FtBGvcCTqu3pircA4lGCTohnitP2StObD5kTzT2tqlraI2mjvfZyh9GjwGuBj%2FadRGagULlFcJmXcoAfDfjChqpsUFoaY9gDpyoiESpGDnffQvhZ0tpfv4vlcfCeLLQF2c%2BSeHTikqVNmeUiOdt8FkD6mqe48yqxQDNZ3t1Qi2wqYKjkW9OvqfOU%2FvmJUvNsALPblOZ5CepbrCZiRhpsYsOQg5Gc90X9%2B4uKxy7bFPY8UmkLvt3mQlFscdF2AjYkoC0fLEz8OMkqD5zsTDTHysUyWK4SJ22kjH6KcXut1%2FVUhcfcnSq9kQIofemDWoHCgpdK%2BBQ4na3jNqD9VX1QGiBEVcmKwUi2yGWLK6m2P8UCnBWci%2B9m9PuBUfC3KAYIqr2jeHmjXY%2FIzKEXFwlWpO2S%2BvF4PqtihXm1%2BxZ810qbg9ZHk%2Fxs%2BAndwIvx%2FfjRlfZwnx%2BwjWmQUyHehSxdurP8VSkURRrk6zw23TmPypuNfPv3%2BWR20JAiKAnWebO3EzwjPs8OOjrQY3%2BNITop7W9kSvHqsCBx0GIXcyZwZSsdVrQQAm6CdOCx4h7fB%2FY5R2sbp1jkN20dZBTCdbuWw4RpGNdOqzY5Xqy3X7nNBCBTHqNXkLO3aWq4hPoeRzFnUalZYZ7Q85YMLzYh8AGOqUBdZ7auN3Kg%2FMmr%2B534sSCtu3JYsw7b9KdV2ZA6prrsm3CF1wLKvVJwtNBtfKq%2BYqd%2FgaLZl3WFJSYVpOy7j4bZAaTt68%2Bf8Don6y%2Fxt5nLVvfVQokyAtVFVWZHTMMdJya3YEKWkK4dS1%2FRaPk6OGXt2LD9jwKMpYCGoo7cWumA0YD79GKiL30euJpMkBBo17OFsAePiIWVy4gn7iVFZVdTdXDhhzJ&X-Amz-Signature=d26696105d0ca3c177f38cf80c4e7567d0f5b0c09bd4529e4c171536c3b94321&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDB5PEYW%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T061213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHJm9LdmyAafx07pDF6joBurtQ2fLws7bEK%2Bs5GPcC%2FAiEA1Fpjh4MaNGq6Z6Ky6TWdL2qAW8RGsvL%2FuO6QuQHibTwq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDMQiq%2FtBGvcCTqu3pircA4lGCTohnitP2StObD5kTzT2tqlraI2mjvfZyh9GjwGuBj%2FadRGagULlFcJmXcoAfDfjChqpsUFoaY9gDpyoiESpGDnffQvhZ0tpfv4vlcfCeLLQF2c%2BSeHTikqVNmeUiOdt8FkD6mqe48yqxQDNZ3t1Qi2wqYKjkW9OvqfOU%2FvmJUvNsALPblOZ5CepbrCZiRhpsYsOQg5Gc90X9%2B4uKxy7bFPY8UmkLvt3mQlFscdF2AjYkoC0fLEz8OMkqD5zsTDTHysUyWK4SJ22kjH6KcXut1%2FVUhcfcnSq9kQIofemDWoHCgpdK%2BBQ4na3jNqD9VX1QGiBEVcmKwUi2yGWLK6m2P8UCnBWci%2B9m9PuBUfC3KAYIqr2jeHmjXY%2FIzKEXFwlWpO2S%2BvF4PqtihXm1%2BxZ810qbg9ZHk%2Fxs%2BAndwIvx%2FfjRlfZwnx%2BwjWmQUyHehSxdurP8VSkURRrk6zw23TmPypuNfPv3%2BWR20JAiKAnWebO3EzwjPs8OOjrQY3%2BNITop7W9kSvHqsCBx0GIXcyZwZSsdVrQQAm6CdOCx4h7fB%2FY5R2sbp1jkN20dZBTCdbuWw4RpGNdOqzY5Xqy3X7nNBCBTHqNXkLO3aWq4hPoeRzFnUalZYZ7Q85YMLzYh8AGOqUBdZ7auN3Kg%2FMmr%2B534sSCtu3JYsw7b9KdV2ZA6prrsm3CF1wLKvVJwtNBtfKq%2BYqd%2FgaLZl3WFJSYVpOy7j4bZAaTt68%2Bf8Don6y%2Fxt5nLVvfVQokyAtVFVWZHTMMdJya3YEKWkK4dS1%2FRaPk6OGXt2LD9jwKMpYCGoo7cWumA0YD79GKiL30euJpMkBBo17OFsAePiIWVy4gn7iVFZVdTdXDhhzJ&X-Amz-Signature=bb3147e5ab10f17d0c70ec8b516923ecfd48ec5c4c6b36c5d5b6df699fb84743&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB5KHU2X%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T061217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSSajugLKeOoyCR9%2Fx%2FBDWYNRsu1aYimuuHqQQqBw%2FiAiBZjPO47%2BeUGFB46GcdmoEhDxG76SRzmY1dycr5UAMfBSr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMK8EIa%2FNcBamPZ9BxKtwDBXHB2Jl7%2BuGkVvS1797r3Y7xQDs3kiyDcwtd1f86NP9uDSUTht0ev9tjmYPBVYCV9JEc%2F1sxScZS%2B3bqsJQZnkXjeYlUfmLnzNXgsADPt47oAOk9o3OHhWxdWQUc2dvmU6n%2Bf6FySORooJj8eYcnlVoe%2F8A9DaXl6%2Fc3WshzzNaZRV38Kg2X9RnOszus4vO2mVjr32AGzdsi%2Bkhycs%2FmfoGZEZYOQDSz1nO3%2BAVLLZowBkGCN%2FyFCNpWOO%2FTPzU6erDWOn4g4T5t8RTr4wqXjUTp4DGK6U8dgT82SsMA4Oorq1ds8otHFac7svuhCo3kyNX%2B1xvSF4nFHzG8W0tTl%2FBaqNFUmQhHUEIBT3xSENGgzi6nkBlcf482JXnkfzV6BaVIxuONg7asnifZE1qmHSc7gTmELvVHlOXPF5h2pEAe9HrszFBtPI9fT3cdHWvuts%2FUfUUzADo3TwgMq8qUQfopczuQORhkM5jZghurkGbSLYGqdmSReWeSwhg2pXVRFmrh9U%2F296fQVidght088gOfYm0qr5h868NySfHLngzO2o54X%2Bo4cXqGbXPkMtvyUYyAy99FQwx%2FjZ2kdcUj0ibUwg2iXZQkPFOHn4xPxUGXsudc6VMMZvGAKzowxsKHwAY6pgFzmxHF5RG8MByW1FcV0Wtwt0sehQ81%2Bo6svDxVIxPgAIlRHIwTjffMHqvPAtouRxyh5Nn5KBVX5YZaGb2iFw2tA7QsSkIhjWbg%2Fvf6vuGkeEyPCCicwLhA8iunfo%2BGUZvb5j98lk2jWVBuh%2FmlwdL7bmgEn0xb4omUpjTZa%2FhA20WvheJtrPV99asOJcHi21RDZzIJkDmwm7H0iZw%2FSSLpkzE2U8mI&X-Amz-Signature=ddf3641540a71b12cbdf679be0b5e4cb126e185089f6d906f87adb75491584e3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3RRJXO5%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T061218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJCFG6rVNF1JxPhX3YXIMeO0iRcbfVrgI6tvWGjqfEAgIgFxdjiVlKm9Bl2W8D%2FrsZ3m%2BaQj6Mhn%2BYrqMZxNxJCkkq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDNqRzp0OORXlyO41MCrcA93bt%2BQhUDwUz%2B4c%2BVS8GHWCK%2Bs970PX%2FopmsSsQX3SJyhRAFYgXJZsTkHXqbLoKvqtPz62V25%2BuVF67pV6JxCwkoJtUWUQTjEUipY9usmCy%2FxHtIzxNcARIwmECMX%2B2W1w%2Ft9jPdiGWiS7Ma425TRXG6fl%2B73AIduSqQXwAH3WAJFUC1YZYdnuJEJk7o4f%2F6Vu9C0PXWqgb7rnN6IyFacAzOSpRWCuYFruZz16vvgnLzHBv4ABTW0uKpauQ3h8NiQacs19nP2SoqyI3RVO05R3QjAQiga5HwMSzOH70y7RnrpxN3g1jh08OvrkBaU5dWt4%2BoM%2B%2FtjU%2BAxJaMmEtGhpAHLX2M647eY0sQFtfpEscCJr2iYYt5dTgPn7XX2Ghi%2BXo%2BWvaTbm%2FiRRoNjJOZ3gNx1ORJGlQOQISLW1KjNBmInXAUOUvlGdj%2FMnWh6fG1mdK2blDoEGjIUv05UowAbttJ6PYVMkHRl1fr2wsFoAF%2Bva01H3lD8S09JkjDaSXSo5Rhh8nL6%2FyLamLhN7vXBf%2FvQZipC59UxtVRqw5qlYhQM6IR8aWUGVHEKk2kSATI8TkGFn2SUfsjtCK5mWZ7lwFttAwgabRJxck4aPuLP%2BTUATZ6gJsc1u68vLUMLTCh8AGOqUBBy7OIYJTY0a0BIqBLEo67BrF4X42i0kJ7VatlkkEIVjlUN8xR%2BTQEut4jnaSbeDCyc4c%2BlC7CRJUetL8GvzDjtfFt%2By1obNMF3cNvzYTpxAVTcGTHXCf1wDH6iLRWL%2FHLFizrU7j2IGUFAJ7RFpdTrpvlV8PfijkGUoZDNbsN7ChgYqRx9JKCK1v7HDJk7Oag%2FrjwksXSmFCgQWJR9LbW6KYgUUq&X-Amz-Signature=63ca36758e1a29ad6bcc762764f35f55fd1f2d44219d62b714f59a3b817839e5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDB5PEYW%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T061213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHJm9LdmyAafx07pDF6joBurtQ2fLws7bEK%2Bs5GPcC%2FAiEA1Fpjh4MaNGq6Z6Ky6TWdL2qAW8RGsvL%2FuO6QuQHibTwq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDMQiq%2FtBGvcCTqu3pircA4lGCTohnitP2StObD5kTzT2tqlraI2mjvfZyh9GjwGuBj%2FadRGagULlFcJmXcoAfDfjChqpsUFoaY9gDpyoiESpGDnffQvhZ0tpfv4vlcfCeLLQF2c%2BSeHTikqVNmeUiOdt8FkD6mqe48yqxQDNZ3t1Qi2wqYKjkW9OvqfOU%2FvmJUvNsALPblOZ5CepbrCZiRhpsYsOQg5Gc90X9%2B4uKxy7bFPY8UmkLvt3mQlFscdF2AjYkoC0fLEz8OMkqD5zsTDTHysUyWK4SJ22kjH6KcXut1%2FVUhcfcnSq9kQIofemDWoHCgpdK%2BBQ4na3jNqD9VX1QGiBEVcmKwUi2yGWLK6m2P8UCnBWci%2B9m9PuBUfC3KAYIqr2jeHmjXY%2FIzKEXFwlWpO2S%2BvF4PqtihXm1%2BxZ810qbg9ZHk%2Fxs%2BAndwIvx%2FfjRlfZwnx%2BwjWmQUyHehSxdurP8VSkURRrk6zw23TmPypuNfPv3%2BWR20JAiKAnWebO3EzwjPs8OOjrQY3%2BNITop7W9kSvHqsCBx0GIXcyZwZSsdVrQQAm6CdOCx4h7fB%2FY5R2sbp1jkN20dZBTCdbuWw4RpGNdOqzY5Xqy3X7nNBCBTHqNXkLO3aWq4hPoeRzFnUalZYZ7Q85YMLzYh8AGOqUBdZ7auN3Kg%2FMmr%2B534sSCtu3JYsw7b9KdV2ZA6prrsm3CF1wLKvVJwtNBtfKq%2BYqd%2FgaLZl3WFJSYVpOy7j4bZAaTt68%2Bf8Don6y%2Fxt5nLVvfVQokyAtVFVWZHTMMdJya3YEKWkK4dS1%2FRaPk6OGXt2LD9jwKMpYCGoo7cWumA0YD79GKiL30euJpMkBBo17OFsAePiIWVy4gn7iVFZVdTdXDhhzJ&X-Amz-Signature=ca2b01ddf5ae2a1dd65fa4a44cb42284996c6729df210761003c1c26e41a2811&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
