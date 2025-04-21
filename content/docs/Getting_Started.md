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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJQUGAFF%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQD0aeCwYjYjTgvZzF%2BViHophOtyA2Ap6h7bmeFYkl95TQIhAPVCpTnoGlHXL2C26IXiuUdR4jW1UCU%2Bx0Au%2Ftsg%2FZqcKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVZ61TQD4uLtEw%2BJUq3APCGwQIArx9H29HLcAi409OjebPRtdlYCKnXnKMUvVP80D8tgS0AEZnswmRdix3IU01fWdMUWhGiEl1uIO2yeVqM15EeSwLMfd%2FOxFhhPw0egVVxSp8nKbmDh%2BxS01FQOOvRgeTv9CAxahBXMOnSvzakQjn5EVkqndR7d336%2BX7QwYX%2B6mQEr5AeKpjTjnvj%2Bifi7vzvBX55CYo6Fb77VO88RKc1eN1IP%2F19TKDUYJYmZ55VbGLjKXcQ0FhcyPF5G%2F1Y4yX9FPUJGpzwC3XMlVCQrjFUar5Slnn8HpQ0vVo1Rj4Fz5ZwAna1zVdFwI%2FST183DmVTVAuBd650JsV7Cezy6O%2FipRqKAYTRMEZOS0%2BCdRS1rop0ntzg2SJgxU6tsjDrOx3IuOSmeIT8fmbYJo3c2VgwqUAViWJ5i57z34q5sPto6HyRqXGJQdsLBZHdqlYrWXT5RRvVdYjSTM%2FC8uUDH7guoqiJqf0q5Z9gzKyQTl9c%2FyF4QNFDabrwd2EtzZhhw6OxnI8JllltCpgZ%2FvsI2HkCimgwhUMbZrMVA4LXdWRZXCgUAV6FRhpTDUh3%2FRNg%2FLMAUPf7y0PjtpOMAjjISY6DqXYxXCAan%2BIyxSNYr%2FvUdph1FHxUtZU0zDCoZnABjqkAQXyo%2FfiqN9mxlW5TX6Iu9uPPE37svOK%2Br3YlaCxFJsH9b%2FPQwEnrdnVlIn9KujSpC4N3eQ5XB2PT81tOvaGz2Ttd0nBN7N7UMODl9mrlgmEUEAlD2QGyyzllcDnPujK0tpW2OOSS%2FaEGdP9gBDt4iD9jiMo3w576qJHfjXVZdUvWrfCaRmtIsz23tnlp%2FsS9lhK9lYRGIYpjIlUmtvvr%2Fu%2FqyTW&X-Amz-Signature=202123c43701117c8b1cba249655bdfab8d8dc1f3f1959da8be3af67a3d52192&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJQUGAFF%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQD0aeCwYjYjTgvZzF%2BViHophOtyA2Ap6h7bmeFYkl95TQIhAPVCpTnoGlHXL2C26IXiuUdR4jW1UCU%2Bx0Au%2Ftsg%2FZqcKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVZ61TQD4uLtEw%2BJUq3APCGwQIArx9H29HLcAi409OjebPRtdlYCKnXnKMUvVP80D8tgS0AEZnswmRdix3IU01fWdMUWhGiEl1uIO2yeVqM15EeSwLMfd%2FOxFhhPw0egVVxSp8nKbmDh%2BxS01FQOOvRgeTv9CAxahBXMOnSvzakQjn5EVkqndR7d336%2BX7QwYX%2B6mQEr5AeKpjTjnvj%2Bifi7vzvBX55CYo6Fb77VO88RKc1eN1IP%2F19TKDUYJYmZ55VbGLjKXcQ0FhcyPF5G%2F1Y4yX9FPUJGpzwC3XMlVCQrjFUar5Slnn8HpQ0vVo1Rj4Fz5ZwAna1zVdFwI%2FST183DmVTVAuBd650JsV7Cezy6O%2FipRqKAYTRMEZOS0%2BCdRS1rop0ntzg2SJgxU6tsjDrOx3IuOSmeIT8fmbYJo3c2VgwqUAViWJ5i57z34q5sPto6HyRqXGJQdsLBZHdqlYrWXT5RRvVdYjSTM%2FC8uUDH7guoqiJqf0q5Z9gzKyQTl9c%2FyF4QNFDabrwd2EtzZhhw6OxnI8JllltCpgZ%2FvsI2HkCimgwhUMbZrMVA4LXdWRZXCgUAV6FRhpTDUh3%2FRNg%2FLMAUPf7y0PjtpOMAjjISY6DqXYxXCAan%2BIyxSNYr%2FvUdph1FHxUtZU0zDCoZnABjqkAQXyo%2FfiqN9mxlW5TX6Iu9uPPE37svOK%2Br3YlaCxFJsH9b%2FPQwEnrdnVlIn9KujSpC4N3eQ5XB2PT81tOvaGz2Ttd0nBN7N7UMODl9mrlgmEUEAlD2QGyyzllcDnPujK0tpW2OOSS%2FaEGdP9gBDt4iD9jiMo3w576qJHfjXVZdUvWrfCaRmtIsz23tnlp%2FsS9lhK9lYRGIYpjIlUmtvvr%2Fu%2FqyTW&X-Amz-Signature=79a2cfc0f2944719e1b82cab9018db10e187358c774310fe9cd93775b8cb1fd4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z63OE4IO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCvKnRnjWg0%2BX7d2d5cogFSzWCD0UoMUkFs9pKVlA4SCAIgCV314vYwDyL3mdx6cBnIdf6m5e9gvn0J5Lem56rJZPkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKgTA9%2BflSu5xEEUgSrcAxZ0jfDm7ES8%2BQugOYP3yjdqunfo%2FBw2EZ%2F0jBV%2FqVX%2BEQbJdr9gDoEG3opq8aegCKK2FVkIXozE2nCFcC1K4kYANrYvG%2Fjt2zaulqP1%2Fycn4UQ2ckFriRWr2TGGVpCHXEgbVuLVRn%2BufeevwP1oBr8b%2BUOd%2FDc6JyBqtgojGmDztQfP5YSQVteyy7y8swhzSDlvnnPHk8Mca22KXPb%2B82gjAd%2FgUUKYlZBiUB23hn59yTglb6MAUJnlArIiAhZQbqClU6AtE05YovWU68nrW4a%2FTrVTPw7yuocPlnoNsFnw%2FSlu5rn29ErLv4INzakSoJC7SK7c4VH0D0vE4TCT2%2BDijtmQ%2BnkNkLfXmyk3HVgzXwTBwAtyyebwZq5ogP6BohcLobSK6lvKjHjyyuRh4uHVqMhPaqBGbr71b2UZI%2BrTPWDbvMnUR0SKj45rDoLkVRH9vc4v6JoJihloMONySJl2wlFRJqhCNdLHlDgh9d2S55NiA3rDnDBf8ZQEVREw8zFBUghQHMN3QR9uuViaWh4upRqOhnMyY7fAtn6EGTZwFwEDzxx%2BVEp1LR2UY23xLPmJYwyK0pCe8eC3dQQfgw2Mjfo0hoaJWK%2FbBre7EwmdsZcR6%2BgpV2pBg1FyMIaHmcAGOqUBhaf%2BJrO6%2B9W0HJFgxFBtRM4F%2BUEQp%2BUW6iMf11GRwUoTEeuUGHXy9UTVFfhyD%2B1pgfkzntMFdCQ956Yyas3YCfrP%2FYnkGaJtTgx0xvjb9XdYn%2Flav89RW56BKPBWb5W%2FMix835Tv3iAwxnrNFY9gmX%2Bsox7eOn%2BnpKQdqncUZzjUIPF9kkutcqG65%2FAawptuq1V3aFVeJFyCr%2FbViMhXaQiibyCZ&X-Amz-Signature=6fbdc16976f6b16bf25db01b16f406861d63ebd4c3ef46c755cfb9ee0ca46d86&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WICEB6RL%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDlcdBWFZ%2FOOT8IYYDbSd2f5W3ydKy7HQXjv7%2FDoRdF1wIhAKymi%2FarSiMCdUcxVdXaUWF6U3QFGBoETexFFVtCH3f8KogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHRD8vK05gNHSovVkq3APMvWyKnvt4FTPtGma8ZcaULnUGrJBiCrwVpWcbjz0KvDu8Ve2kSals5fky2VPBo%2F0lxL7aICWHXUKiTMQBv8%2FaEi3LvqdkWpFT0B34dCsRI4y09wo%2BFAZz5cbIIQh3W%2BuL70eqnVhK2CdTBVTmWzkNo1ZWkQii7qBAWVUd3DGiQ1smFV%2BoOCzDpmZ7uM1HWfJ%2Fkk61u2aoihD14EQ5%2Fy37ERbpfBjKuHBZMIwx757XS3lcvix%2Fu846iaz61YE%2FpnTk9ZeSH6NfHKx282o6kD4fmnR080u9L8pJ5wu2kaEg%2BZ99RYm7nHYyjKhvic79UOmjhYRAgS4sqSPDHPRB4%2FtSPrnrsMTworiftBU7iFV7YHptTlAiBy7a9nkKZjFyD4bYVMeowdyHlC81EC5trhs53eiscORJsbAXW4GmjyjrhADzir3df%2Bt%2F%2FhFMhtP7PXIMbDK7dxpcw0J8n7JuvYelCyXP7nTCV7wcVdbJSbvD2Sg3CWnvKUZCCXOmCKFT7X%2B%2Bs6s5ICqj3DQwPpTJys4vIxencBa0Ud%2B6qtdGfFRD8j6EuP5PrPyQ%2FIkDXCwwDFRI7fpQlpS%2FR%2FdJsFr3Dhbj261DRvY4wRYVnkNrJO%2FTUhjBLEIxkvS2I%2B7SpjCYoZnABjqkAefkm%2B3R%2BK3YSyEbo0yY2uNgn6l6xokVRFh%2BEAQmyIXdfRUK712CRhhJzO724pN7nf5%2F%2BYpdE1aA3nM3pS7n5s%2FtGqvi5VAiP8kZDkQVwfkqoj0x2OnMa8sxsTEvckdmpfymF2CSpr5Tfppvl8dVC6Zs%2F1fQ5Wy4MdwrwRdSNPx0%2FoZk80r8iDeHk8hCsTtx8sQINRIsNmdfFJrFR4fj5ojRodZe&X-Amz-Signature=677a1933c71b3df7ef217412e23a8b6140cb838621c5d3930350fc174c132c4a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJQUGAFF%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQD0aeCwYjYjTgvZzF%2BViHophOtyA2Ap6h7bmeFYkl95TQIhAPVCpTnoGlHXL2C26IXiuUdR4jW1UCU%2Bx0Au%2Ftsg%2FZqcKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVZ61TQD4uLtEw%2BJUq3APCGwQIArx9H29HLcAi409OjebPRtdlYCKnXnKMUvVP80D8tgS0AEZnswmRdix3IU01fWdMUWhGiEl1uIO2yeVqM15EeSwLMfd%2FOxFhhPw0egVVxSp8nKbmDh%2BxS01FQOOvRgeTv9CAxahBXMOnSvzakQjn5EVkqndR7d336%2BX7QwYX%2B6mQEr5AeKpjTjnvj%2Bifi7vzvBX55CYo6Fb77VO88RKc1eN1IP%2F19TKDUYJYmZ55VbGLjKXcQ0FhcyPF5G%2F1Y4yX9FPUJGpzwC3XMlVCQrjFUar5Slnn8HpQ0vVo1Rj4Fz5ZwAna1zVdFwI%2FST183DmVTVAuBd650JsV7Cezy6O%2FipRqKAYTRMEZOS0%2BCdRS1rop0ntzg2SJgxU6tsjDrOx3IuOSmeIT8fmbYJo3c2VgwqUAViWJ5i57z34q5sPto6HyRqXGJQdsLBZHdqlYrWXT5RRvVdYjSTM%2FC8uUDH7guoqiJqf0q5Z9gzKyQTl9c%2FyF4QNFDabrwd2EtzZhhw6OxnI8JllltCpgZ%2FvsI2HkCimgwhUMbZrMVA4LXdWRZXCgUAV6FRhpTDUh3%2FRNg%2FLMAUPf7y0PjtpOMAjjISY6DqXYxXCAan%2BIyxSNYr%2FvUdph1FHxUtZU0zDCoZnABjqkAQXyo%2FfiqN9mxlW5TX6Iu9uPPE37svOK%2Br3YlaCxFJsH9b%2FPQwEnrdnVlIn9KujSpC4N3eQ5XB2PT81tOvaGz2Ttd0nBN7N7UMODl9mrlgmEUEAlD2QGyyzllcDnPujK0tpW2OOSS%2FaEGdP9gBDt4iD9jiMo3w576qJHfjXVZdUvWrfCaRmtIsz23tnlp%2FsS9lhK9lYRGIYpjIlUmtvvr%2Fu%2FqyTW&X-Amz-Signature=c11ee0299bf0c8432fe012f67a5b19353fd5b5c8997164c288e63003849a7c06&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
