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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJV55EQD%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCnYAgivYyAqvVobU36RtfS7legrOW8RZjuPnHh0ze9NgIhAPjEmFGty5FTFQ%2BqJXoe0ADrsfv50Plv%2FGx7QyriQsytKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUzXwe6ZciaUSX0KEq3ANBeC%2BJSNHCcdEVbVmhkZrFwxorVsDH1yIxwwtfHFsrfwnlU8F3AbaKre39nSN4fYAA5YCz9MVk2tT9%2FF8prw8t1p%2B2eEGIwZ7luyAZ6kSXPoysCxffIRgcHPV4ARN7SdKgQF4ihPnfJHtqYJAn55vVnUDYvzEieH8KVoavE8Ckt9C4OhJB2I515D6Jnsvd3QNGsCsCqKfACx%2BC8%2BR5ZC5tZt%2BcRsfrTh2OlT3ZuE5WXQMxdohrRRSlNsSw1eeq3jjy6yIIRVmAh36vrWpPSkhAnziYfDiNqhK8okRF%2BZpKCJZXj8Nix5bAcy6puZLYDnP1lAjBr5ng%2FDQUG8La4WBfAuiJ3AdD4vaw50XMzD9UAoJ2wHMaU3ZJw479uorxe2VS%2F62vjyJb247zuzPl0BO7L7kJRU%2FBEtcD20wL1pGuLDBW9Kc6omPInINUEtsbxAiKRB5C7cX%2FYZ1%2FMjr87zzzHr9%2BRLVuovubBFvaRe1QuVN2PwQeI3afz342N7ABFLkSRXyGBKu3HCNL7hyrKUCDBGVeoZgN4AaSIbyMQv1t5zhQfMdfX4Fu9tFeYVjKkaW9qhgVkaGVEImrajBiP1BAcifsCSuS0J06pj%2BTu9TojwwWA0hH09gLwCdcaTDizJDABjqkAdDE%2FFNepnUzOxFAnSS43%2FzvbsA3YBPw7luqXTlThlInYrDvW%2B%2BSiNgcqzP5a9q5F7cX00%2BiYnj9MRKFufWwtDkAcoZLGxcNP0SCrFS%2B52jifMZ3Ay6mImoXPt0wmF5QeFAkJXmnGcSBoTApc81EXAYbfWNvxns6E72BWnLZ7V2i2rAULsgPw2xoGp8TJ%2FFbi3zP75e%2FT%2BKIjYy046%2BFg7usHsWC&X-Amz-Signature=dd38023a205040cfdee6857fb01c5ff95fe9550f63f50e3447cf5123e91ea016&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJV55EQD%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCnYAgivYyAqvVobU36RtfS7legrOW8RZjuPnHh0ze9NgIhAPjEmFGty5FTFQ%2BqJXoe0ADrsfv50Plv%2FGx7QyriQsytKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUzXwe6ZciaUSX0KEq3ANBeC%2BJSNHCcdEVbVmhkZrFwxorVsDH1yIxwwtfHFsrfwnlU8F3AbaKre39nSN4fYAA5YCz9MVk2tT9%2FF8prw8t1p%2B2eEGIwZ7luyAZ6kSXPoysCxffIRgcHPV4ARN7SdKgQF4ihPnfJHtqYJAn55vVnUDYvzEieH8KVoavE8Ckt9C4OhJB2I515D6Jnsvd3QNGsCsCqKfACx%2BC8%2BR5ZC5tZt%2BcRsfrTh2OlT3ZuE5WXQMxdohrRRSlNsSw1eeq3jjy6yIIRVmAh36vrWpPSkhAnziYfDiNqhK8okRF%2BZpKCJZXj8Nix5bAcy6puZLYDnP1lAjBr5ng%2FDQUG8La4WBfAuiJ3AdD4vaw50XMzD9UAoJ2wHMaU3ZJw479uorxe2VS%2F62vjyJb247zuzPl0BO7L7kJRU%2FBEtcD20wL1pGuLDBW9Kc6omPInINUEtsbxAiKRB5C7cX%2FYZ1%2FMjr87zzzHr9%2BRLVuovubBFvaRe1QuVN2PwQeI3afz342N7ABFLkSRXyGBKu3HCNL7hyrKUCDBGVeoZgN4AaSIbyMQv1t5zhQfMdfX4Fu9tFeYVjKkaW9qhgVkaGVEImrajBiP1BAcifsCSuS0J06pj%2BTu9TojwwWA0hH09gLwCdcaTDizJDABjqkAdDE%2FFNepnUzOxFAnSS43%2FzvbsA3YBPw7luqXTlThlInYrDvW%2B%2BSiNgcqzP5a9q5F7cX00%2BiYnj9MRKFufWwtDkAcoZLGxcNP0SCrFS%2B52jifMZ3Ay6mImoXPt0wmF5QeFAkJXmnGcSBoTApc81EXAYbfWNvxns6E72BWnLZ7V2i2rAULsgPw2xoGp8TJ%2FFbi3zP75e%2FT%2BKIjYy046%2BFg7usHsWC&X-Amz-Signature=32bea2511ba377f86e37261b79f27ff56c0e99646154e766e37a63f95b9f3c2d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL4ZXDTQ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIDD8v%2BiimwtTqs2%2BgkHbxZlOpy%2B1IchxdQZ0zydA4VkcAiB%2FV%2BR%2Fd8PMou42B4kXi2KCbbZMqw7ttfP4u7aYnpjcoSqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFkEM3tL0aHTrKXv5KtwD9tj27dZZXU7oN1QSX88cVbGsegpI45MFp0cjiDvOu4VNdGuFagnRZ25o%2BAgbn%2BV4bi3bd200SB2m5%2Fru%2B6s7lkmJURxIkrITERVq2dij4KZO8lPR%2FNu9YLOLoXEp9AcZ67f9ShqJCmoHV3NM9Ak19SiSZRZjg3W7Jqe72jQs0hC8SYf1G6USL0xRb4r3PXG%2BbixJFToPdrhKtNz2RPaCF%2FFoWz95cDr31alC3T7tyNBVuwsC9b%2BuZFoWUUXqMsuiNrd7yavOwxhZaK8ibrlXl2TeDgTSSiuOpfVs6kkO4isRaBnpywYaIoBJqXUG89Oet3t3zW4alqPjykAdcN07uuotMZrFgd3xqcqRaH97v29efPaF9MuVjqVGw4vCsdmFD7z9IaI3StrkVC%2FzgEHwM8vZRW05SAd9UR2Ebgtt6Gvyn%2BLiGel%2FFr3CnbIpk2nX9jyDZKF4cBZsARKZLdSAd65JVdLm67J57jr%2FNc4iGTCkfj4ucgrhsiSmpKGRUzLZCMOCBdHqchxtsCP1GbM%2Bz4CdoYUIh5FHzY%2B%2FCCciqb0SXMWr7NuxCn24ynSIXamm0c7iKLweBORi2trMiF85aahUi6tm7kxIDWzjrfcx8cDbUXQLR%2BodfzILExIw98yQwAY6pgFyU9dL%2B%2FGxneZOA3ni39a8RgSMBowxdsyvs3uspZ%2B1xmGgIoq%2Bo64fQjLCGxNKtuU03hLtFnNi0K5eGGDhClrb0FDjcU%2BTDz6HD1EV7dE%2By3MAY2k3pf6jvQwZ5d4ohBGEkrs%2BtYQ5TmSbj84bSLYu1ulY4oeKbJb8auJkNIDu9YNSuwq0SlFNTbA8DppAmgGFlhitNc8nzs1CVtUHMISlntkPrzpn&X-Amz-Signature=db701ac03cb585b68d33426be080d51de9040a02aeb37380e3b8ce4dd933f33c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIBIXEIS%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCXffSwdvdNk8vO4B1rIHus5%2BQArUjJUzgzaCeLH8lYBQIhAMypeNgWSWlOkZq4MGan9BizGyHGRyXJDX0kW8mj1JKrKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMTFkVx4elf3Lx0RQq3APsSh1p4khoRduRetD%2Blvars16IbDuQXYtgEa181n36NVVKwDTggRKQk2%2BE5qEaVQex6up79iK%2BoSxMUeUhg7T1%2BM%2FiGs%2FRrM%2FhZIOfzveQd3g9QnNg5UU%2F93R0njAfFAPREWXxUmxMhjoGPSoWdwD4Qsa5aeqYOjfcQ%2BiqWZrS0ovo52IIM4U0lJSCpynGefygqpmAmnvQq2HeGavGULGylyDlIVD0T2g74Q7wKMXWCStHQthCsYU5t1iMkyFK6FhNDo2rgE4ic%2BftaJTDPsTzV8nrVK0y6XPN99djhgX8CvRHehSMcRUeuxXqQTfRBw0G4cokGDnmh59sV1vv0rdpRaAV2EcGF2SBrSB6Ikpc5rAlAszavpusi9oyr4mJFnl%2FzuTwBHC1UM6MPrqWbO67wEfjSg%2BSt1kQPDi%2FCr2PKHirIraktGfgLBD6geMz%2FjX0U1k5TOzYk6L%2BJTU3D22r6GLwS6%2BPFoFbXugbKQz7%2BEtJx2PKdmCSHyDbs0Mmc0tToGrjnn9eTtE1lUbu86YHWDrp%2FlQmgdymy8xC%2F%2F1ZpQC2VyETqs1gMEL8KdPIPSMnW7mWMfc0zPxLvzV6rbhPHxb0ISUDOZq7P3XiAso3Sf%2FOx%2FGpawJ92GiIaTC3zJDABjqkASxQQlvx3o%2BPqlRcRe8XbgE0ceSzbvqD%2F51mVrQmZfvFmGPPBFkFEsSacs3UcKfqiW%2BdnOW1MNEH0Yir%2FaMQolcdXr0d%2B0DSdVOb8JHNYT30iVEup%2FcAZYmQWY2nSqdDSIy%2FSI9WUnyjj6ML70%2Bk0WnBvk2wSiYtpOQWYbyKwsjOfhbxitFDOa7kkWZUZVBd3C8ljIX2aaIskwUpwGY5Kdw5jXv8&X-Amz-Signature=ef37c0fa09aef20dc244918404107091ff800442902a6e9c299ad93f81b6ad2d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJV55EQD%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCnYAgivYyAqvVobU36RtfS7legrOW8RZjuPnHh0ze9NgIhAPjEmFGty5FTFQ%2BqJXoe0ADrsfv50Plv%2FGx7QyriQsytKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUzXwe6ZciaUSX0KEq3ANBeC%2BJSNHCcdEVbVmhkZrFwxorVsDH1yIxwwtfHFsrfwnlU8F3AbaKre39nSN4fYAA5YCz9MVk2tT9%2FF8prw8t1p%2B2eEGIwZ7luyAZ6kSXPoysCxffIRgcHPV4ARN7SdKgQF4ihPnfJHtqYJAn55vVnUDYvzEieH8KVoavE8Ckt9C4OhJB2I515D6Jnsvd3QNGsCsCqKfACx%2BC8%2BR5ZC5tZt%2BcRsfrTh2OlT3ZuE5WXQMxdohrRRSlNsSw1eeq3jjy6yIIRVmAh36vrWpPSkhAnziYfDiNqhK8okRF%2BZpKCJZXj8Nix5bAcy6puZLYDnP1lAjBr5ng%2FDQUG8La4WBfAuiJ3AdD4vaw50XMzD9UAoJ2wHMaU3ZJw479uorxe2VS%2F62vjyJb247zuzPl0BO7L7kJRU%2FBEtcD20wL1pGuLDBW9Kc6omPInINUEtsbxAiKRB5C7cX%2FYZ1%2FMjr87zzzHr9%2BRLVuovubBFvaRe1QuVN2PwQeI3afz342N7ABFLkSRXyGBKu3HCNL7hyrKUCDBGVeoZgN4AaSIbyMQv1t5zhQfMdfX4Fu9tFeYVjKkaW9qhgVkaGVEImrajBiP1BAcifsCSuS0J06pj%2BTu9TojwwWA0hH09gLwCdcaTDizJDABjqkAdDE%2FFNepnUzOxFAnSS43%2FzvbsA3YBPw7luqXTlThlInYrDvW%2B%2BSiNgcqzP5a9q5F7cX00%2BiYnj9MRKFufWwtDkAcoZLGxcNP0SCrFS%2B52jifMZ3Ay6mImoXPt0wmF5QeFAkJXmnGcSBoTApc81EXAYbfWNvxns6E72BWnLZ7V2i2rAULsgPw2xoGp8TJ%2FFbi3zP75e%2FT%2BKIjYy046%2BFg7usHsWC&X-Amz-Signature=e3be0c14fb2a42779774f0524f04751aef1d1870ad1397a5eb95fc4ccda1fabc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
