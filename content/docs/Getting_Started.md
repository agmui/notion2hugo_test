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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTNUQOII%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T100713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDAPRtHUHRNHWBxwaQUeXe7u3HYOG8GJDwa73UwaWnUDAIgR%2Fr96RLnHf822fLruwTYBROXEjnVIAxXYWrCTMYcI24qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvBb%2FTo4f03RKJpBCrcA0JGmJU98fu0qqJjWQGyUUQKVojHL0CucoA0EF1XuBARNaHL7wvXwQrqSzVZwyqnQlT%2FOPPQh1K4%2BQ7HjwNdRDu8epTipua4giRJUEGT8J%2BiiEhyfxprAG8uDU5PWiPmrkppavXmi2lI2jfsKo6f9LcYFSZEzbMJtXVSLWnPskqMZ10PZNILJ6RrqABz%2BSFgl0Ht9%2BkYpeoXejQ%2FYeWyPCvmtDOwgcAssopiF%2Bybl5v%2FuxoiJy6GbEUWxnBFJ0FL%2B%2BOx1Td78iqtOFD4qpPMxOpwnoVLpJ970M%2BFFQQoao6KV%2FLEh7Hj%2B%2FVwi5i8rb7Znw6hYzhqXvLK%2B8Gy0P%2Bpb0aZ6pQLkZajOFz8uZVvjs1nG8c4Rwlb167vcra5AFTGt8Jk%2BnNPn8l%2BK%2Bo4PslFJR6WwAqf1ojbwDA%2F%2FZYoGhAD75z7gAv1VCZTd2NiRPtyijvNYpL4IK6I%2Buc8ayWmhoatprbMPXay00yeE6ZWKAUSz3KLnuFKf4foCKQ%2BkwQJt9y2fSwYkUfWVSR9L9skXdaqelbYbjZ%2FPNopSQBAdpnt6FlO7RzrZ6XGpGVFGaf2bdyiAiqimfH5zQAgG8497l1pmLSPGvh3K%2B2Eapk2VQDwSwXqfGG1GfVIpja4MPCzi74GOqUB%2FWeLHGH7IfX92XFyKzcGXDvslmQMRO8Httt%2F4lV61IJ050wl730ILiWSiT9A4WU%2FpB7iG0fW%2FTw8a%2F8D82fhKOP%2BsTq9V2b1WjOCzxy09Z%2BnyZ7ol295IxrnlN6WZsKLPiJ5ThT5VYG3Vw9q%2FAE6azRmP%2FUeN9CmYfOd9l3JX1oRvar40yxVgVkfU01ZcmTAIu1diSPeGFBAHBFIPksqc%2BnTfJGe&X-Amz-Signature=33aa4720d2db7ecafcade80b8b68f3b2a967992d36f1520ba9924a47301e81ac&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTNUQOII%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T100713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDAPRtHUHRNHWBxwaQUeXe7u3HYOG8GJDwa73UwaWnUDAIgR%2Fr96RLnHf822fLruwTYBROXEjnVIAxXYWrCTMYcI24qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvBb%2FTo4f03RKJpBCrcA0JGmJU98fu0qqJjWQGyUUQKVojHL0CucoA0EF1XuBARNaHL7wvXwQrqSzVZwyqnQlT%2FOPPQh1K4%2BQ7HjwNdRDu8epTipua4giRJUEGT8J%2BiiEhyfxprAG8uDU5PWiPmrkppavXmi2lI2jfsKo6f9LcYFSZEzbMJtXVSLWnPskqMZ10PZNILJ6RrqABz%2BSFgl0Ht9%2BkYpeoXejQ%2FYeWyPCvmtDOwgcAssopiF%2Bybl5v%2FuxoiJy6GbEUWxnBFJ0FL%2B%2BOx1Td78iqtOFD4qpPMxOpwnoVLpJ970M%2BFFQQoao6KV%2FLEh7Hj%2B%2FVwi5i8rb7Znw6hYzhqXvLK%2B8Gy0P%2Bpb0aZ6pQLkZajOFz8uZVvjs1nG8c4Rwlb167vcra5AFTGt8Jk%2BnNPn8l%2BK%2Bo4PslFJR6WwAqf1ojbwDA%2F%2FZYoGhAD75z7gAv1VCZTd2NiRPtyijvNYpL4IK6I%2Buc8ayWmhoatprbMPXay00yeE6ZWKAUSz3KLnuFKf4foCKQ%2BkwQJt9y2fSwYkUfWVSR9L9skXdaqelbYbjZ%2FPNopSQBAdpnt6FlO7RzrZ6XGpGVFGaf2bdyiAiqimfH5zQAgG8497l1pmLSPGvh3K%2B2Eapk2VQDwSwXqfGG1GfVIpja4MPCzi74GOqUB%2FWeLHGH7IfX92XFyKzcGXDvslmQMRO8Httt%2F4lV61IJ050wl730ILiWSiT9A4WU%2FpB7iG0fW%2FTw8a%2F8D82fhKOP%2BsTq9V2b1WjOCzxy09Z%2BnyZ7ol295IxrnlN6WZsKLPiJ5ThT5VYG3Vw9q%2FAE6azRmP%2FUeN9CmYfOd9l3JX1oRvar40yxVgVkfU01ZcmTAIu1diSPeGFBAHBFIPksqc%2BnTfJGe&X-Amz-Signature=0e64d3adbbfbf0daaf20d3f8f93554a85e6fa2f0f41e9077ef76b63b7cec7550&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UF2X6W4%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T100716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIGnS9MhPdSPoRZZ53Cal2E8i16GIjj%2BCLDeBOtqZvEDQAiAHVGS4nifaA8%2BGzd83ZmDWegd%2FfsOwCnZsEzdci7D%2BASqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM71ztJLaVwd9G%2BpdwKtwDbRPvoCDaU2FI5bSf8uUUzGln42bhFiO1uZupJGEtCpPjrFhHBTLPppOCZx5ZtG8wBsf8TIHYykUwXEHkrf9A%2BMAX8tcDFDa%2BONJntTHo1S8DU9M6tHq7hzCLoFr2BgIqjp95wW7FxD2HLTGT1D06wcsPbKOI6LeL8Aj9SnMk3q5b85UIgfJbMNz03STfLV5AdC9ODqhg6yV%2B1QUKJywlxGvC2O7tljYmFmTKUqY8nkynsZzrtUs0nmlNqq6Jap03UPcR5aOjpCcjOr9jLNI2v1LhyjpFTo2zZeg2V5EHqFL6FwHEkX0Af9lKKQ%2FvhZ6fss98xZaC0cJQqjFqCc2TEIeT%2BtZV4vp93f7Xuv0dUuarHeatrAlanMirFxOfvd3pb7fl73BKhMQ5uRgJGjSusYF4dkViE7B0BlBpri7isD%2FrQti60JOumjTjQcfOKbujPjpmhv4TeFwHN%2BJFsMt9FS9oD234BImkDNCQVo9IXMZ3SF6p%2BQHRyVTzdKVoQNMRHihEep1E%2FgcOrLu8jw3oQKsZlajtLbEpFZL0NqRqCi8CM71jT6e87NXcp99FpcShnVgUqBw85IKcuhBwXZnEtA31fSI%2FYCN2K6MPc5NYItTZQRTU0IgTSIDcYEQwsrGLvgY6pgHz4M0VnXLl4RvKt4B4NXfM%2Bq3V4cJK%2FLBrrIzkD9iCwb3JZ%2FVfo2vIoeFIOOIhKYlUG8enWsp5Gevlh7Y4keO2k9QbfLuLN4%2B1nrMSVJcjHIEZOEy8LrerS6Zxq4QNy%2BQVETFWE1ORa8jgJj5mKe0xneB3vtimSbrPO70USkko2ZE3Tvc%2BdDw1DOMc09UZfUeVpQ1KEkquWXFbMEoiv8nM1OInz8gG&X-Amz-Signature=dda546c5caeef0b260143680f176cdf8149082f6d9f8e45cc3fac8cdb3105fed&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7E3O6DG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T100716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCwEMhGftrs%2FtlfNL5Q%2B0wTMymdhvfzB80mhsev9sXyNgIgF7oCt5F7FJ54a%2FqM8JYP5nWLju2Fs2cPaQlZHBmUBT0qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1Fy%2FeidqpQCRsu7CrcA9dFQItWr9WXjQygKflD5M58Af49K9wmZ9Xs9bUjdU97ZFwB6EFuPCea8Mw2tJ3ZhPyXHIWGdgop3L3kh5MzEgOzj6jvvYlH4GMaBXWg1AMNmieYkWa2ubIBJuS96h6FPY9FJ0KLHDfJknK3SrJFuJ3dzTV%2BzNuCxTrlarQh4QF7XEAKi8mPPGJwM4WGYieRLnKMm%2F0W0mUnpif81VRDa8D59Mn1jr71%2Fq7B7sodUspGvLs1lbMqxcIS33b8hJW1H5WdXOa%2FLyVTFcJZ%2FX6WRkBkbhu60ehFC%2FfsulqCtu7dlNlqp%2FX1yvJ2vNzEO%2Ff9dDd%2BkOLvXhFUVI3Q9T1k4cg8hbNtJUw6zFr%2BFoE23%2BIU6pN06ht8WjO3k6jkgXeXwBPB6CtKs6nVfxwOmlI2SBKyROkS35hj0thDTSjjLDkf7K5Lraxk2l0%2BA7Oj8ExRXMzZnAYEFoYRVmoX92AXcxuuq78%2B%2FYMBLGs9pB1FZq4IpWoy7NwMVHVyjfSqshbTmn5QP70uaxNblZRXFs5jQTzzrasoI1VFSz8fQwnHffLqq%2BMSffMukUUFzoXOv6nvDGNdfMj0tHg2yZ1Jn7HSDrl95UWmr56Qh5KV3EphctHRG7j8P76a6G40uOrCMKS0i74GOqUBLV0mE4LmM%2FQNWJ1w9IW0lrdp%2BNWP5H5GPQsSDekyx787G5UtBJES3KIQ5oTgIT3Xudr%2F%2Fh0eaJnJdN03kX3M3XWFR5U7BMC0S51q1b2lLERJJLCEJcIWlagtqaHXMtJYnAwmyLszQ7Rl%2F%2FfZZZGFgj%2FIIjFrCVxR2B8oCzkE%2F0caFl%2FiL66%2FkjsGyBpDvv%2BCIP79LrUq6RUuH9qDQlWQzVVfxHHY&X-Amz-Signature=08be578461f70868ed4c15790ab00bae91c2b4ecf7847959c58a5f89f09c4b1a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTNUQOII%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T100713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDAPRtHUHRNHWBxwaQUeXe7u3HYOG8GJDwa73UwaWnUDAIgR%2Fr96RLnHf822fLruwTYBROXEjnVIAxXYWrCTMYcI24qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvBb%2FTo4f03RKJpBCrcA0JGmJU98fu0qqJjWQGyUUQKVojHL0CucoA0EF1XuBARNaHL7wvXwQrqSzVZwyqnQlT%2FOPPQh1K4%2BQ7HjwNdRDu8epTipua4giRJUEGT8J%2BiiEhyfxprAG8uDU5PWiPmrkppavXmi2lI2jfsKo6f9LcYFSZEzbMJtXVSLWnPskqMZ10PZNILJ6RrqABz%2BSFgl0Ht9%2BkYpeoXejQ%2FYeWyPCvmtDOwgcAssopiF%2Bybl5v%2FuxoiJy6GbEUWxnBFJ0FL%2B%2BOx1Td78iqtOFD4qpPMxOpwnoVLpJ970M%2BFFQQoao6KV%2FLEh7Hj%2B%2FVwi5i8rb7Znw6hYzhqXvLK%2B8Gy0P%2Bpb0aZ6pQLkZajOFz8uZVvjs1nG8c4Rwlb167vcra5AFTGt8Jk%2BnNPn8l%2BK%2Bo4PslFJR6WwAqf1ojbwDA%2F%2FZYoGhAD75z7gAv1VCZTd2NiRPtyijvNYpL4IK6I%2Buc8ayWmhoatprbMPXay00yeE6ZWKAUSz3KLnuFKf4foCKQ%2BkwQJt9y2fSwYkUfWVSR9L9skXdaqelbYbjZ%2FPNopSQBAdpnt6FlO7RzrZ6XGpGVFGaf2bdyiAiqimfH5zQAgG8497l1pmLSPGvh3K%2B2Eapk2VQDwSwXqfGG1GfVIpja4MPCzi74GOqUB%2FWeLHGH7IfX92XFyKzcGXDvslmQMRO8Httt%2F4lV61IJ050wl730ILiWSiT9A4WU%2FpB7iG0fW%2FTw8a%2F8D82fhKOP%2BsTq9V2b1WjOCzxy09Z%2BnyZ7ol295IxrnlN6WZsKLPiJ5ThT5VYG3Vw9q%2FAE6azRmP%2FUeN9CmYfOd9l3JX1oRvar40yxVgVkfU01ZcmTAIu1diSPeGFBAHBFIPksqc%2BnTfJGe&X-Amz-Signature=161b2422dbc2562b840e4cdd6830fc6522276d462259ee49a9570be13bffb836&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
