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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4NPDTM6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCxVqujynLXJXgv8AX70XzNV0KF8NXF9MqTAFOqh6VaVAIgRzZKPjlC8YK3fuHqBUVYwklUPT3jX28cNDTuLhL9wmwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDKjX4H6CGDJYCb396SrcA34NfaoRzTUHf%2FjDT7Ln7khaS522jjuDJNj8jd4MJHprw6MM1jK1Uuh8nPuETQlVMhLKHp0JanyZt8jwMBGtE79NsQo32PctuwBbuYaUG6sbXlEVeTn%2FQEH2rPz%2BP0R42vdPF6dAyUm0uM2nJmpT8ugsOnHSciykZj3j3zfPmZ21fXNlteLA59iO0cmorlF4AB74GoUiRCzLYYxe8XVNpy7M%2FGGLNMKvro%2B7LdDbgfRoCZAmSHHRLB0h1q%2BTaWYcjFGVFTjMBverTInmxZUpdb448B3HlGG3LlTUHbUU3mJjn7segplqt9p8ftfEYBtoThsru%2Bb06Bq5C7I6FxrtZAVCBpmudkoFLRfjbBp6GePuiiwT3ptkuTH9L2J9C2BNqFT99ksavBnvN0rxuZbavLKliTNeETXSGvyN0lCdDHGzItk0rrqFvnF9pAi7d12hMw6MO%2FI6NXVFGKIsz1%2B29eGCe5vw7d%2BoBLf6nBkvXq7vDHtMVuZAFj5Kyt8nnxZve6NA27WL9Z0RSD6lA3bX6p3vib6jJiarEGJgj7knTmUdmMjJJAxdI%2ByOrlOylqiEudCLVxMWMijbKOAqN7mJNpduFfZvVdcMRZ7HtBPQadSAjRwX8XKD8FPJwKLGMJOI%2FL0GOqUB07WwOPuhNSkbqen%2BjcSSubsVOjK5%2Bbuc%2FoEt%2FjJyWeJ180Z510bVxR4oJmaiuBecgAF%2BquP8VynfZndYJPMphJoPlw3JNM36cv13BR5r8PEJOSUNLk8QCZ%2BDi7aQQbTpPakjx%2B9A%2BkN%2FwulhfVEqswOU23RScvzCvBQxwqUJtEx2EROzoWRVwBC8i4Yl1T54qgi7DkkBh8DVoOz%2Bxf3IErm2k%2F9z&X-Amz-Signature=5b6dd938a6fb304f9aa137627998b548c83902a7a88a6ebd5f3eea0a3f07d0b6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4NPDTM6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCxVqujynLXJXgv8AX70XzNV0KF8NXF9MqTAFOqh6VaVAIgRzZKPjlC8YK3fuHqBUVYwklUPT3jX28cNDTuLhL9wmwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDKjX4H6CGDJYCb396SrcA34NfaoRzTUHf%2FjDT7Ln7khaS522jjuDJNj8jd4MJHprw6MM1jK1Uuh8nPuETQlVMhLKHp0JanyZt8jwMBGtE79NsQo32PctuwBbuYaUG6sbXlEVeTn%2FQEH2rPz%2BP0R42vdPF6dAyUm0uM2nJmpT8ugsOnHSciykZj3j3zfPmZ21fXNlteLA59iO0cmorlF4AB74GoUiRCzLYYxe8XVNpy7M%2FGGLNMKvro%2B7LdDbgfRoCZAmSHHRLB0h1q%2BTaWYcjFGVFTjMBverTInmxZUpdb448B3HlGG3LlTUHbUU3mJjn7segplqt9p8ftfEYBtoThsru%2Bb06Bq5C7I6FxrtZAVCBpmudkoFLRfjbBp6GePuiiwT3ptkuTH9L2J9C2BNqFT99ksavBnvN0rxuZbavLKliTNeETXSGvyN0lCdDHGzItk0rrqFvnF9pAi7d12hMw6MO%2FI6NXVFGKIsz1%2B29eGCe5vw7d%2BoBLf6nBkvXq7vDHtMVuZAFj5Kyt8nnxZve6NA27WL9Z0RSD6lA3bX6p3vib6jJiarEGJgj7knTmUdmMjJJAxdI%2ByOrlOylqiEudCLVxMWMijbKOAqN7mJNpduFfZvVdcMRZ7HtBPQadSAjRwX8XKD8FPJwKLGMJOI%2FL0GOqUB07WwOPuhNSkbqen%2BjcSSubsVOjK5%2Bbuc%2FoEt%2FjJyWeJ180Z510bVxR4oJmaiuBecgAF%2BquP8VynfZndYJPMphJoPlw3JNM36cv13BR5r8PEJOSUNLk8QCZ%2BDi7aQQbTpPakjx%2B9A%2BkN%2FwulhfVEqswOU23RScvzCvBQxwqUJtEx2EROzoWRVwBC8i4Yl1T54qgi7DkkBh8DVoOz%2Bxf3IErm2k%2F9z&X-Amz-Signature=88b534f637235e98b97727631e852f2a80aa7349863c1f2d677bf9fefc42d134&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQUIUFUN%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDqlq9Is6aH6r34n3OIsbn%2FcYirw0MwG9nbvl%2F%2Bmg2W%2BwIgcxEwIQeqcXwep8icGbGpCSqPJnutNIqNv9CTmuLiaYQq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCObwOTJOv5gAC3DPyrcA7YGzCB9XQOBI0M9D43RiIAKDnt4o5w9KQ%2FpfgTbg83Tivy0jpkbvlB%2FWqurexWUro1qAyAU8hYbCeuANpp1cfdwCZoNNaye9zoH5ofx9rW9Vq2lNfLbZZvww0%2F0fT0ot8%2BU3CrDKvoO6k0bL8WkiAg7Tgo70U0GzhQCImb%2FInX8387aVJ3BJTP2V%2BjtlSsFFq0dbmmUSnxn2r%2Bmpb%2Bpwpgk9iJKesnVl7Ufk%2F6uM7KRRgVNfyqDOaSZxh5ndYx0%2B6CNWVvNMSUKEaqIgf0z388enizQdfy3sKqOY0xt3H9oJoScsZ%2FbBXoT%2FSa%2FOdwQRNZMeGSkBjxQCKY7ZuXhq%2Fimnx%2FaDVENmSzfeMUFMo5IyUwtPSLzxBvJEoMrAd2WfKx7HMtTnBliW7OUf2bUsPAp%2BbWxBa9V%2F6dHFRWSDyDdqBJCxaG3Eo61MVjt410B7Zip3o4OrLaxhi%2Fu72hBU6ODR6RlDrGFkxfaUlRMBxAkLPfUzV2UmDgbSHAPu7O5Cy9M5Mc6NqajjEZDS2hQdOtFHA4%2BnUUaY5uYhn4c1onMRC5dUvYqq06gjjcEzX2vBkqPeSw1cMiRFDN52e%2Bboqwyr8iaJwaw7udsjzYS9XF1%2F74JRxFXN0x5bhJiMNyI%2FL0GOqUBvJFqNtx%2BYvRleWH5zbLNSJOuwkDJZBuIj9YsbDFzS1K9Gbp9KH4AZkossDwOfrWGm7hlZ2dhNTnIn78VB%2Fs3ZAflMx6rIiqUqiLKIKCO7jW8WCX%2BnfUlBEYW6Cdt9xeuvd3h%2Bow%2BFrQs9bC8Seworb3KDMpncrNsw3KuhMcgxcsafZzKpBIUWaDVRLHGwLyiiDdlsDeZYQMc9AIsrPPMRpf80XUb&X-Amz-Signature=3294acacf03ab36f8d0749b125c61d8b79362a1162e28df3174fcf5beaace534&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KBAPJJN%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIF2wz5P%2FRlz%2BS0QBVaP0LtTRWL3rT1QZPpg2SCPooqkkAiEAzOAy2ym7W2Nq27zy9EAcdvp7L9%2FIktmO%2Bx%2FLjhPJNboq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCP0nL681juhQdNkDSrcA6kkiu0SjaGskg8R6XniEtqd1CXDMjIWyNL8ceLmhUstqGUwIikr2DhfLJWffpkyuUZ71zahPRE5ur34L0XIoK0wMqN1F%2BVqG8FuOsiGvsH5%2FCPhjJZ%2BeJqa%2BCCJYjKZb66qkxaTkJ3GwdizOPLTPMAUTMvk4Wv3aXLU1cgadM1OmaOvAKKOn%2BWB8g2TFt9SK2pOBWjratDT7Cu1BGoBFdyYi%2BlBUtGvEQrdj3KvXjGjWI3vPbxFity%2B3hiXFX3miAaRxYtXMdwrv0KTAhKYQhrsyViPmry0Wi4u2bL6QqtDh7a4L1gxoqvy%2F3pIsJE1AJhhkiuOqxgP6TD5tKP%2FzN31I%2FNcd26scvrQ2iC5HkrdwH9EcVq7iS2HCm3cRhQN1PVD2nwjKVKxZcksHV0HBdgpfzUSyf7SMVP86DqfgKiN9CBgeki7dDupraKI6vw5aGPyHcQcNcfZJAGdXjgSfzyl%2FJwXxSjzU2U68LNQI0IUlYUTSb2qR5APUh%2BaGURvNGF9B8ecT6v5rCAqLXaMbjSA7KqfwYRK8zx1urqG%2FwKorLfGwFucWvDFIv5g8jUH5fkuTn8aACEDypXzyaUfJ00i0AfrTD3h9cl%2Bbzt%2FkOR7osg%2Bm5QZJMV9wxNFMNCI%2FL0GOqUB4vPcndBf3%2FEV2tPCNWU%2BmjWcMTurSB9%2FEQneTZ0mVnHs9pCVpWNfdL0ZZUKZwEzJ%2BwE%2BM70uDGUHRNHQosWlDjOLXxITD%2FB9Ty4jxLFHF61X%2BJLyR1OduOU%2BYBZ8c%2FQFp7xnDQJcJbV%2FUGb8MvCU5OZ8VgtyV2%2FRt2%2BLprV37bBALRX5Zdy%2BkZ4o1aoWyQscEyYmbqgiQ1h0bQC%2FT%2BFEnYbB7fZf&X-Amz-Signature=04c0150a665fbfb3523a3afe5084f4d96525ed782080370d988e45d522d4f7a3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4NPDTM6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCxVqujynLXJXgv8AX70XzNV0KF8NXF9MqTAFOqh6VaVAIgRzZKPjlC8YK3fuHqBUVYwklUPT3jX28cNDTuLhL9wmwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDKjX4H6CGDJYCb396SrcA34NfaoRzTUHf%2FjDT7Ln7khaS522jjuDJNj8jd4MJHprw6MM1jK1Uuh8nPuETQlVMhLKHp0JanyZt8jwMBGtE79NsQo32PctuwBbuYaUG6sbXlEVeTn%2FQEH2rPz%2BP0R42vdPF6dAyUm0uM2nJmpT8ugsOnHSciykZj3j3zfPmZ21fXNlteLA59iO0cmorlF4AB74GoUiRCzLYYxe8XVNpy7M%2FGGLNMKvro%2B7LdDbgfRoCZAmSHHRLB0h1q%2BTaWYcjFGVFTjMBverTInmxZUpdb448B3HlGG3LlTUHbUU3mJjn7segplqt9p8ftfEYBtoThsru%2Bb06Bq5C7I6FxrtZAVCBpmudkoFLRfjbBp6GePuiiwT3ptkuTH9L2J9C2BNqFT99ksavBnvN0rxuZbavLKliTNeETXSGvyN0lCdDHGzItk0rrqFvnF9pAi7d12hMw6MO%2FI6NXVFGKIsz1%2B29eGCe5vw7d%2BoBLf6nBkvXq7vDHtMVuZAFj5Kyt8nnxZve6NA27WL9Z0RSD6lA3bX6p3vib6jJiarEGJgj7knTmUdmMjJJAxdI%2ByOrlOylqiEudCLVxMWMijbKOAqN7mJNpduFfZvVdcMRZ7HtBPQadSAjRwX8XKD8FPJwKLGMJOI%2FL0GOqUB07WwOPuhNSkbqen%2BjcSSubsVOjK5%2Bbuc%2FoEt%2FjJyWeJ180Z510bVxR4oJmaiuBecgAF%2BquP8VynfZndYJPMphJoPlw3JNM36cv13BR5r8PEJOSUNLk8QCZ%2BDi7aQQbTpPakjx%2B9A%2BkN%2FwulhfVEqswOU23RScvzCvBQxwqUJtEx2EROzoWRVwBC8i4Yl1T54qgi7DkkBh8DVoOz%2Bxf3IErm2k%2F9z&X-Amz-Signature=d471c85607da9d42dfb335b0dd454623117e030e93a4f29c7f5d2ef4a50eb8c2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
