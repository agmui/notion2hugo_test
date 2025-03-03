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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V3TVLSP%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T181016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCltA1ADcF58DDkAOF9D00TT3ym2clyW6MNf5AHBNwA8QIhAP9fOOf9sRMqos4Z%2FuD%2BdNx7I61Ux%2FKj2SxEbmYtkRW9KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FRMDHzOxQwkn9fG0q3AOFuS28r4pARvXJmq5d2bNnWcSEdqmylyAA%2FCAlwg2KcoctxL6vAm%2BsRqIQ5AHdmaQUW0UvjndHp4WiCdGyVk2CxWMGbnQQaXCpXonruX9B%2BFTE6%2F7QgnSmS%2FrnqAzHpcEc%2FwdMM%2BXXp0n9S3s4%2FaCqehNhz8%2Ba%2FR6Btj%2Bf2V9nNPbU%2BqnqgVlcUB9JcPiwVXoTjRomYdnxCkezxiv1WHpcyNu4bUglIg7GDNWIi6uwGnnXzvM%2FcWhD9yYleitQVf9EHKrzdKMhDzzfAcmDJRaWAq6TO4144GQyA1qk7DlR2%2B11lp1OZXRwwxVaiDdYHT1tgxT%2B99w9nK7T0lKwjm%2FkAXoDnzklGPLVryNuEHGKH8QGh2UweVaQf3fmQJSyuG0ylbC0JMrUyl0%2FbTyIlhTmxbRVWSn6TbbVEH8UQtsGkhWSoiefDnw8Luum4g8160kOMweKcHkbrVINXG57q6JrlIj%2Bl0Ym9qdoL8B%2B%2F7l9ZUk2mdupGfVngDrC%2BEvEm%2FvsgH0io%2Byf196kgfy1lvXRfEj4p04ZilthN2rSs74JyryVLmujR4RahWj6JR%2FagdGU5cPjSg9FRyV4xmRResj45yGKO4sfelJjSSg1PjIWsnpy%2BZel%2FQU55H9wjzCn25e%2BBjqkAThqrI7HbVaNRgo5FzTEccjeT2Q7U%2FaOWJCVegb6VV9eZDDbdFoH8UBI6Dyf6KV6vneKMRZKa4N4Z1ioiMcCSVN%2FtAF4kGSm%2FVAmsb34BTQjrf6lufU05KAlY1OlEcraez%2B99GogvAWfbaz8Q8JrZVZJXiiJamA3XFCCCpsK9Vyxu%2Br51Cr829Rpl4mvkY9iRzayzWNjXfywXYqQDrkr4tS2dHvD&X-Amz-Signature=beba9e8d08e007bcd97dd367605fdb0c1f7db60c4ad7c211853f2493b0cb9e53&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V3TVLSP%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T181016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCltA1ADcF58DDkAOF9D00TT3ym2clyW6MNf5AHBNwA8QIhAP9fOOf9sRMqos4Z%2FuD%2BdNx7I61Ux%2FKj2SxEbmYtkRW9KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FRMDHzOxQwkn9fG0q3AOFuS28r4pARvXJmq5d2bNnWcSEdqmylyAA%2FCAlwg2KcoctxL6vAm%2BsRqIQ5AHdmaQUW0UvjndHp4WiCdGyVk2CxWMGbnQQaXCpXonruX9B%2BFTE6%2F7QgnSmS%2FrnqAzHpcEc%2FwdMM%2BXXp0n9S3s4%2FaCqehNhz8%2Ba%2FR6Btj%2Bf2V9nNPbU%2BqnqgVlcUB9JcPiwVXoTjRomYdnxCkezxiv1WHpcyNu4bUglIg7GDNWIi6uwGnnXzvM%2FcWhD9yYleitQVf9EHKrzdKMhDzzfAcmDJRaWAq6TO4144GQyA1qk7DlR2%2B11lp1OZXRwwxVaiDdYHT1tgxT%2B99w9nK7T0lKwjm%2FkAXoDnzklGPLVryNuEHGKH8QGh2UweVaQf3fmQJSyuG0ylbC0JMrUyl0%2FbTyIlhTmxbRVWSn6TbbVEH8UQtsGkhWSoiefDnw8Luum4g8160kOMweKcHkbrVINXG57q6JrlIj%2Bl0Ym9qdoL8B%2B%2F7l9ZUk2mdupGfVngDrC%2BEvEm%2FvsgH0io%2Byf196kgfy1lvXRfEj4p04ZilthN2rSs74JyryVLmujR4RahWj6JR%2FagdGU5cPjSg9FRyV4xmRResj45yGKO4sfelJjSSg1PjIWsnpy%2BZel%2FQU55H9wjzCn25e%2BBjqkAThqrI7HbVaNRgo5FzTEccjeT2Q7U%2FaOWJCVegb6VV9eZDDbdFoH8UBI6Dyf6KV6vneKMRZKa4N4Z1ioiMcCSVN%2FtAF4kGSm%2FVAmsb34BTQjrf6lufU05KAlY1OlEcraez%2B99GogvAWfbaz8Q8JrZVZJXiiJamA3XFCCCpsK9Vyxu%2Br51Cr829Rpl4mvkY9iRzayzWNjXfywXYqQDrkr4tS2dHvD&X-Amz-Signature=8f7b2efc45f27497e1ef2793ed225fc097b438f482d06c7a4b0dc68261d046dd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2CIXU2N%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T181020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm05w%2BCTOgh%2FntKAXp0LV0WeIG%2B%2Buab5msW9hcRwkQ%2FwIgWjXjzdDwuf5sg0a1R9iyUdIfX0ydSYetzXcpZHJMYqwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAM6n1Av%2Bh3cLSj25SrcA1owjccMeMq%2FWAlpyFxcIHTFUY1VR8B1rJ0DnRfE%2Bl3Oj4Zc7EARTnj0JRpxV7on0EEn%2FoGwSKF2lYdNRO%2FmZXL7R1PkXgik3%2Bf7lkS943l231uVFhMNY1VhOQa38h4sU%2BG8pQv%2FfjE6TzAPQbHJLRBsqvioV07MEt%2Bw6CNe7o09kh%2Fus32xfsdHiikTJft6QRG%2BNHnQBYfiZ%2FFkSYysAhZBjJfdi7%2F3ZyQVBoKwiTjY8XDc45prBaMJVGunGEurrx52w0tZMSiDcC0LO%2BDN54WEATpAXHtmRDsMWbTyFuwiUcUlsNl%2FuoMAmqAyKVGtvyrql%2FbMsA%2Bc56G4wxzYhTRc%2B%2FKqEo0cXatGPhSFsjBuuTLGvnluVps%2BC2utdcnkvZR%2F%2BfJhKXg8YAzcp7mUsQuZKmjm%2FuEfVOjXzqf0xdjh8G9JMzhpbfcMTbyDWZ38epGzYCWt6%2FjufloBB%2B2PSmwLiD3%2Bw1kqHgEXXph0yrIYoP8AkEfPQV4k9YVrE4rx7bbiANITCgclVIM%2FEcKId3iWYIiePWk22EY%2BkK7YUIC6%2BNWwtVqlJDwSaAaKEGYV4NN5SqolGlfKgDQqrWAj8hpl36xVhLDPZDRyyNrnft0GMkewl3Culyivd8jCMPvbl74GOqUBul%2FHPBSxeyXLxKfAZqHgPM3NY8AxwxVH%2BBD7%2BJwEgMwzTenI%2BJ%2F3XL2RaOaKwNO%2B3%2FLxdn4MAF%2F3xz02Xm5kD3ZTTQhfS2BtMLXGAwn6KinMNeM08cxveux5voB3RxEYNst2xAfGEI%2Bv99k6SSpgu5wX1x2dj96jgSQt%2BTdiw59RayzL3vFEiDJDsm77Ku2j7z2tB2eiaMxhkuvxKGi2cyGgSQSF&X-Amz-Signature=f4f331bcfe20473d1af2d1cd0897d3a33fd16b45a4f2e9ab5ee0e3d16f205eb8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEZF6ODW%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T181021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAabhj4MgrQb0hoG134%2Bmhx5bX77QJxvyBBMAPAfTELDAiEAykLSSJsd8RXIfLu8U5igV12hkHFPxNvcLHeNMryNeoQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKDfboFJ8XK%2Fg17FSrcA4nPgUTIiNBUOZMYgO6vKSFgYnVyEqZUMWLFgLmOhjm48VdCpo7tUdPRAi4yRUNfUSD2pp14hHGJkr5odwcIZth6v37uXv9Wwua6OnVTPg7io%2FbxFJeMLVg4F40FH17ciUzaovP2gWB1JsyWJz1dfNno7IeL5ODtc5F6TCfAzwrIi7%2F3TNyHwoU43ivBg8lshb6koGxjxVDmRcwQ4mXlVLv300zmVRMVBVpfC938qB7ttKS1S8AnqrQAM0uvI%2BgmSaQWnRigbKo2Gl5vk5lkTB5dlu6DKjYODS8tbnEi5PfIhEnJ%2FyaWYdYV1nkfrty3w8CCLmNuV2dwwHBMgLLynRLVG0s6WVK0X%2FwOtwLDOVKnPQMGvz8c6AqgcpegLBz1fC%2Bvyq1jzGh7IvpVk0847A17MhAIfwJsKFTQUMV8%2BU%2BriTyP7cAYWVyFgGoICIJXm2RSASvv6XJlMg1vaXDtjsqvkSClmOZDlhblLp2v1zRE8U%2FpEp3uyHbgrkNF2ZIzHPMMJo5kxsdYbLScvbvS8MbAYhFkWbHlRjDeDRmxjbs71kdenAxwcwVbF2wXCxXAvaoxZDx3zD9NKz1%2BsyJ1Hzjopd669m9aFsTcjlaPenCu6tZjyXU28%2FpNRWiLMJ7bl74GOqUBrWgQxVy0dQbFrX2gngWEboDymrl9qr%2BOilBSudZTbWuonL0TaIaR%2FO9EPwEf9sUSgvfVmXY%2FFhZKHTvWrPI%2BXoS6YAm9TJnhB09ccXMGIqRP6PD4gNoVsjxwrRukgS76DsMKt%2FyNMTHcAjB2yGJSCw81rH5wi5sxBpWRzAMlO990toTkQTnFrwZVxP8D9dWHDkjOGErg4eQmJ3YGlaNe8jSqjj8J&X-Amz-Signature=87f56fb06f1c4c36d76ceb67a7d81a1a266d0d663429c87991a6c11529fba669&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V3TVLSP%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T181016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCltA1ADcF58DDkAOF9D00TT3ym2clyW6MNf5AHBNwA8QIhAP9fOOf9sRMqos4Z%2FuD%2BdNx7I61Ux%2FKj2SxEbmYtkRW9KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FRMDHzOxQwkn9fG0q3AOFuS28r4pARvXJmq5d2bNnWcSEdqmylyAA%2FCAlwg2KcoctxL6vAm%2BsRqIQ5AHdmaQUW0UvjndHp4WiCdGyVk2CxWMGbnQQaXCpXonruX9B%2BFTE6%2F7QgnSmS%2FrnqAzHpcEc%2FwdMM%2BXXp0n9S3s4%2FaCqehNhz8%2Ba%2FR6Btj%2Bf2V9nNPbU%2BqnqgVlcUB9JcPiwVXoTjRomYdnxCkezxiv1WHpcyNu4bUglIg7GDNWIi6uwGnnXzvM%2FcWhD9yYleitQVf9EHKrzdKMhDzzfAcmDJRaWAq6TO4144GQyA1qk7DlR2%2B11lp1OZXRwwxVaiDdYHT1tgxT%2B99w9nK7T0lKwjm%2FkAXoDnzklGPLVryNuEHGKH8QGh2UweVaQf3fmQJSyuG0ylbC0JMrUyl0%2FbTyIlhTmxbRVWSn6TbbVEH8UQtsGkhWSoiefDnw8Luum4g8160kOMweKcHkbrVINXG57q6JrlIj%2Bl0Ym9qdoL8B%2B%2F7l9ZUk2mdupGfVngDrC%2BEvEm%2FvsgH0io%2Byf196kgfy1lvXRfEj4p04ZilthN2rSs74JyryVLmujR4RahWj6JR%2FagdGU5cPjSg9FRyV4xmRResj45yGKO4sfelJjSSg1PjIWsnpy%2BZel%2FQU55H9wjzCn25e%2BBjqkAThqrI7HbVaNRgo5FzTEccjeT2Q7U%2FaOWJCVegb6VV9eZDDbdFoH8UBI6Dyf6KV6vneKMRZKa4N4Z1ioiMcCSVN%2FtAF4kGSm%2FVAmsb34BTQjrf6lufU05KAlY1OlEcraez%2B99GogvAWfbaz8Q8JrZVZJXiiJamA3XFCCCpsK9Vyxu%2Br51Cr829Rpl4mvkY9iRzayzWNjXfywXYqQDrkr4tS2dHvD&X-Amz-Signature=a6fbfb39b5f2b91675c4d0d9380c57cd3ef9e5dbe7dce32cc1c3b067dbf83c28&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
