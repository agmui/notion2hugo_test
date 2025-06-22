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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AJOTL2X%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T140659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIEPwr6PnhnmJCEZdoxbhFBdka%2FC5v5bhVsL23%2FeTy70iAiB07rlyyfjyRRBymErk2wClQVIwKJ7gXEoiiSECQCpaPSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRnz0FuTaPRUmP6LVKtwDLf9JGGpEGlmeVofghIDCsPMTzLbXSs3DEMsfaPix8e59dHl1Yu8Jzn66r%2B5CdIKQrRFG6iaM8M0L97w71Ua9EEgdW4CElesB5ZHXwES6FEuqVxg5xnqzmmt1yqFiNDiIJwlThIN72MwPPOb8os9P0WcS3SgW6qs%2Fr4S5ilM7HHR%2B%2BPGQlzh2OSNqjksEf5pFwpuukQ7%2BQDoJKcaS3pWO1flS6XsF8nTivSHylo%2B69NsXhU7PZ16Klw0zzm%2FqesAhlgbFu9NRypPNV7ZSV3TavtRaPuSd7snxl%2BbO75Kyh8hsB50XH4ehd5qyddsB3f5TaR7x%2FkI2Tce95WenU4pxaMtPHYAo79uT3ZCMXcOdhytrV%2BrWF6kpq%2FFE7bl7GltPSJ4La3rX19g91TTyVQs8OSgYN503%2FAY%2BnsczhpaV6Dv1f8wJ88hBNoeJlHs8mFHNnFFm2l%2BQlinqAOcPgwntH3bADHAwOMuhmoExhrGJSrSCa3k4fFQeY3MHkK%2BJwmnB2zEezSB%2BgcJDaa7q1zM0V%2BZD%2F%2ByjnLddOiOs7LEdX8U%2B15IZXEJZywQ9fbivUP2%2Fy7iwTDj7V644oz7iShl6kPRbRDDiRBDlxR1KrdGmXKTplH65KXt3w1US29owwsffwgY6pgFa2BIl0YXrl6LSwflllowXpbjAiKhcKbvd3XeRNbqpOTGma6napTBskti9JVTGJunamD6aN6IhiMdJKH7h4FehBl%2BxMs22P09Owuw7QmnvRdFxZTUetxHTrtZ%2FsRTeAKla3f32tzHsH1F1M2bkFLv0i2JY7w%2Bto8WWsas%2BFQrJfNcrexrMRzO4foOriuuAX2bgJVA4qxvxuml6kNoieWD26Xv0I1Du&X-Amz-Signature=0cb313222bca1215d02e7243eb20b929b5d1125b3d6f170ecf2ccd69cb835585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AJOTL2X%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T140659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIEPwr6PnhnmJCEZdoxbhFBdka%2FC5v5bhVsL23%2FeTy70iAiB07rlyyfjyRRBymErk2wClQVIwKJ7gXEoiiSECQCpaPSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRnz0FuTaPRUmP6LVKtwDLf9JGGpEGlmeVofghIDCsPMTzLbXSs3DEMsfaPix8e59dHl1Yu8Jzn66r%2B5CdIKQrRFG6iaM8M0L97w71Ua9EEgdW4CElesB5ZHXwES6FEuqVxg5xnqzmmt1yqFiNDiIJwlThIN72MwPPOb8os9P0WcS3SgW6qs%2Fr4S5ilM7HHR%2B%2BPGQlzh2OSNqjksEf5pFwpuukQ7%2BQDoJKcaS3pWO1flS6XsF8nTivSHylo%2B69NsXhU7PZ16Klw0zzm%2FqesAhlgbFu9NRypPNV7ZSV3TavtRaPuSd7snxl%2BbO75Kyh8hsB50XH4ehd5qyddsB3f5TaR7x%2FkI2Tce95WenU4pxaMtPHYAo79uT3ZCMXcOdhytrV%2BrWF6kpq%2FFE7bl7GltPSJ4La3rX19g91TTyVQs8OSgYN503%2FAY%2BnsczhpaV6Dv1f8wJ88hBNoeJlHs8mFHNnFFm2l%2BQlinqAOcPgwntH3bADHAwOMuhmoExhrGJSrSCa3k4fFQeY3MHkK%2BJwmnB2zEezSB%2BgcJDaa7q1zM0V%2BZD%2F%2ByjnLddOiOs7LEdX8U%2B15IZXEJZywQ9fbivUP2%2Fy7iwTDj7V644oz7iShl6kPRbRDDiRBDlxR1KrdGmXKTplH65KXt3w1US29owwsffwgY6pgFa2BIl0YXrl6LSwflllowXpbjAiKhcKbvd3XeRNbqpOTGma6napTBskti9JVTGJunamD6aN6IhiMdJKH7h4FehBl%2BxMs22P09Owuw7QmnvRdFxZTUetxHTrtZ%2FsRTeAKla3f32tzHsH1F1M2bkFLv0i2JY7w%2Bto8WWsas%2BFQrJfNcrexrMRzO4foOriuuAX2bgJVA4qxvxuml6kNoieWD26Xv0I1Du&X-Amz-Signature=e2224aedc2179c62eca837c6e8dccd6a7f5e4d45f972765287cb3a1c479d02bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AJOTL2X%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T140659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIEPwr6PnhnmJCEZdoxbhFBdka%2FC5v5bhVsL23%2FeTy70iAiB07rlyyfjyRRBymErk2wClQVIwKJ7gXEoiiSECQCpaPSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRnz0FuTaPRUmP6LVKtwDLf9JGGpEGlmeVofghIDCsPMTzLbXSs3DEMsfaPix8e59dHl1Yu8Jzn66r%2B5CdIKQrRFG6iaM8M0L97w71Ua9EEgdW4CElesB5ZHXwES6FEuqVxg5xnqzmmt1yqFiNDiIJwlThIN72MwPPOb8os9P0WcS3SgW6qs%2Fr4S5ilM7HHR%2B%2BPGQlzh2OSNqjksEf5pFwpuukQ7%2BQDoJKcaS3pWO1flS6XsF8nTivSHylo%2B69NsXhU7PZ16Klw0zzm%2FqesAhlgbFu9NRypPNV7ZSV3TavtRaPuSd7snxl%2BbO75Kyh8hsB50XH4ehd5qyddsB3f5TaR7x%2FkI2Tce95WenU4pxaMtPHYAo79uT3ZCMXcOdhytrV%2BrWF6kpq%2FFE7bl7GltPSJ4La3rX19g91TTyVQs8OSgYN503%2FAY%2BnsczhpaV6Dv1f8wJ88hBNoeJlHs8mFHNnFFm2l%2BQlinqAOcPgwntH3bADHAwOMuhmoExhrGJSrSCa3k4fFQeY3MHkK%2BJwmnB2zEezSB%2BgcJDaa7q1zM0V%2BZD%2F%2ByjnLddOiOs7LEdX8U%2B15IZXEJZywQ9fbivUP2%2Fy7iwTDj7V644oz7iShl6kPRbRDDiRBDlxR1KrdGmXKTplH65KXt3w1US29owwsffwgY6pgFa2BIl0YXrl6LSwflllowXpbjAiKhcKbvd3XeRNbqpOTGma6napTBskti9JVTGJunamD6aN6IhiMdJKH7h4FehBl%2BxMs22P09Owuw7QmnvRdFxZTUetxHTrtZ%2FsRTeAKla3f32tzHsH1F1M2bkFLv0i2JY7w%2Bto8WWsas%2BFQrJfNcrexrMRzO4foOriuuAX2bgJVA4qxvxuml6kNoieWD26Xv0I1Du&X-Amz-Signature=51ca86ffed30a3ccd6f4889df8f5c5ea57a17d491b6250add326f3fa983b0f8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJDUZXRH%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T140703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDtXC0q%2BiH1Put%2FcuOK0b5CdTm9bPxi1B%2Fpe%2BjNfuecWAIhAIQ31tR4PiQFyb9I8cU5INlbWxULRNxYxYvDi6wngMRfKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaMB9KRsC%2Fa7z9eKAq3APjTZg71482Y5NjLP0gz9cbi47iZSoJqYNQgevvGQbR%2FJgvY1sjmVaGjKXH55zng%2Fa0bZ5u7iJU3G4CtNSIDPc1VXf0fvudF%2FFK7l5b%2FP6wsDCAHy4fjbJuvQIwKwWMOVZJXWgvfW5pL4tR7XRT9WnwASCCMeNQwegPCMUyRZFlxa0LYmRCkkKgocgOSp0VVXs0X1Ni24J7LJvuZ%2Bn%2FjH90tuExX%2BzdepjMq%2BIEgIzFANXuBS3BygWKKsdJjgJCxRnptjsDzwvCuyU8nDBlk7NQ%2Fw4%2BLE9uADDs2pBouwxInK4EGOsQN6tQGiEBxe%2F09irma9bkdFcBAvasgnwRrSbeEXARJBai95LyPgtuk5L%2BE8mydsSW4GsnRcf5kfZwHHq80Cvf5dF7YHFDRu496xIbsRU%2BgONgvQJmUkhr543xOdR5CRA8vbHxl4YSg2Kr7CW0CsXUwD57yy0rjd%2FwVe7WGeV%2BaK3X0I9Uzd2eIu1vT8VTjUGm9wVdoxRoZ2hHShm7RVWTf4UrQSZ%2B%2FT9EmpTV802z8o7xcWqPssMT%2FCrdSMAYz3ri77q7V8Y7em30lROCwFpvLdrItVZ6ub3AnpUonKh1FKSK9mJQFpuyaIsqqn3bHeTdwxmrERpo5jD0yd%2FCBjqkASxqTaGxl%2FTAaOsMU%2BwFbsufpeaQsFFFGkThbb6Vjc8kd064udPw%2F0CMSw7Q7q5h4SR1szOY5%2FEmASlmVDqWTchLg%2BBQCwFfuZyZWOtesmWOKJ73z1F0RP4LCCvL9RhvXy7f6MP7aQrs1Y6TC3Fw8Y2XZQU4hOX1AzsqFKx%2BvFESscjTw1Uuq4J67U5dviKDL2aoZvCsiCBXETi3vihbxyTQjabq&X-Amz-Signature=20fc865fc7eae7b2c5b3d4eee23696e5497af65e02b44b355b4711cf282b9fb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XE5YVBI%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T140704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIHjOvMDDCmNzlwUXRHRk25yMhM6IKJmdPs6g73aQ8wnDAiA88HF2mKuOoT9xbQypYArLEr0S5vYUwZxTchYPnfhOLiqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfZSIQSVWXE8MgwbaKtwDT62BuixpulXv%2FeJJP%2BldisBysWKI4vixydfxo1Gg0wcmrYJw%2B5PNb2GqeZPt7McB28%2BMDO1OW%2B9UuN1cjOPbvGZnv0n%2Fjrlj6O22TbxVKbKpFykhnnpj0f3j8VWIt%2Bq5sSjjb43oVhDgzpJIUdEMeCJoP07KzW%2FYNgkIo7pDrfo8NxTiRbrt08RrwfJ47f7roeRlWQ8fdIQP3nFVp9P2%2F3mN2QY9ypGQb9mFgxtFh%2BlkPcOfv2CW3PV5iYsWz3gqMK%2F9JYdEu0zjIikF9ycB1o9M%2BBLWmBJChxrvpRfVk8SigwouQMabQdjlH9vH7sZHuhC3T7c9VKWj1o7rMrpSDR0Q6cEpsk%2FTR0n0bO1lAB5jPttypXH1fYSMcoXrbWDPEjNqnpxo%2FxOVJSKv125bYlwcjuHfT3VW%2FfHxG8nJjvM9R%2FMV3sJzU%2FLn3RNleyPyZuPYtrnJbn2SHdt9lmNdwzLMB9MGZGO2bBuNHoyFw7bRp2kCo%2FJC3YNxYCb54sxRRl%2BN7QXyl6DRP9LjkWsVpQgpWJyyF%2FWQU4TL3ME0KLAgLPXzZpSUQCNBu9UXSBM7hCCi%2B4S%2ByUh7loM2S4fmyUKddKWcW2WG7Nk82BeFSnx27VDZ5V1v30LMAA8w3PrewgY6pgHR%2Fpt5%2B2eXscE%2FKC%2Fmd973PK3zYEHq24JRYVWOVmMWI2%2B15aFMjdJRMaCqFw8F%2FOAec4iolSITqh40FbudISb0zhyYnF1ljppLE%2FEDaixL%2Fp%2FxuDFsNvy62oUAOldxPHW%2BhIK4lWmoGBBJSV2Zz9fq5nEy2WzZ5tSl53LQpoc%2BAil7sOTX%2F1nnAC5IB9HypPxXD5DpFWwYUv5gNKJ%2BjcULUN0aMLnb&X-Amz-Signature=b8fe07f46e5e93b08e1eafa41f21f03105fbf826783bc6f50768c886e970e6ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AJOTL2X%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T140659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIEPwr6PnhnmJCEZdoxbhFBdka%2FC5v5bhVsL23%2FeTy70iAiB07rlyyfjyRRBymErk2wClQVIwKJ7gXEoiiSECQCpaPSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRnz0FuTaPRUmP6LVKtwDLf9JGGpEGlmeVofghIDCsPMTzLbXSs3DEMsfaPix8e59dHl1Yu8Jzn66r%2B5CdIKQrRFG6iaM8M0L97w71Ua9EEgdW4CElesB5ZHXwES6FEuqVxg5xnqzmmt1yqFiNDiIJwlThIN72MwPPOb8os9P0WcS3SgW6qs%2Fr4S5ilM7HHR%2B%2BPGQlzh2OSNqjksEf5pFwpuukQ7%2BQDoJKcaS3pWO1flS6XsF8nTivSHylo%2B69NsXhU7PZ16Klw0zzm%2FqesAhlgbFu9NRypPNV7ZSV3TavtRaPuSd7snxl%2BbO75Kyh8hsB50XH4ehd5qyddsB3f5TaR7x%2FkI2Tce95WenU4pxaMtPHYAo79uT3ZCMXcOdhytrV%2BrWF6kpq%2FFE7bl7GltPSJ4La3rX19g91TTyVQs8OSgYN503%2FAY%2BnsczhpaV6Dv1f8wJ88hBNoeJlHs8mFHNnFFm2l%2BQlinqAOcPgwntH3bADHAwOMuhmoExhrGJSrSCa3k4fFQeY3MHkK%2BJwmnB2zEezSB%2BgcJDaa7q1zM0V%2BZD%2F%2ByjnLddOiOs7LEdX8U%2B15IZXEJZywQ9fbivUP2%2Fy7iwTDj7V644oz7iShl6kPRbRDDiRBDlxR1KrdGmXKTplH65KXt3w1US29owwsffwgY6pgFa2BIl0YXrl6LSwflllowXpbjAiKhcKbvd3XeRNbqpOTGma6napTBskti9JVTGJunamD6aN6IhiMdJKH7h4FehBl%2BxMs22P09Owuw7QmnvRdFxZTUetxHTrtZ%2FsRTeAKla3f32tzHsH1F1M2bkFLv0i2JY7w%2Bto8WWsas%2BFQrJfNcrexrMRzO4foOriuuAX2bgJVA4qxvxuml6kNoieWD26Xv0I1Du&X-Amz-Signature=5d4a870d2477e3da66f95e09ce5734016c5a7768675ed4070329c082b950858c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
