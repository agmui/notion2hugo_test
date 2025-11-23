---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCRA5L75%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQC%2F%2BnEfdmjVGwOHogFKYq9rEiJg1ruwDbEVDRd0zr0eXwIhAMfiXQ5RTJj3vdaU%2BLi16Hpmeame%2BGpgPtl%2FbmG9cNSEKv8DCDIQABoMNjM3NDIzMTgzODA1Igx5xE7OmH2zDcVIGdYq3AMmU8R%2BWCIZ1hTfPfMfazEjdk5Y2%2FMLUSLeEcUddsKMqOVSmkABBnwIxRueaof99qjrW64fTrgsumADKsTyic7KKNpyLiYgVf4DshtrXi0yIsYYcMvxDPOYFld0wSxlI8j%2BlJeJ8%2FxjtAxXne4yNyzRlEcdLGLLmIP8OuNe1txr32tYjuLIomUH4%2FS7sI31hgFogTFt2KzyDrvWxTxPTcNC9qQ8%2BUCl2fenvCFlcnut%2Bzh%2ByPQxEb%2F3%2BIxl5u4Ju2ljy%2F%2Fvxec6x40eeX72Q4GFzXVSBAGpmI8E4eSY%2FVIJnYXtI%2F7taA%2BgVIU4fiuyamWy7IHXHx9%2BgnPTmJUzMCX0KBCP30c22jeYEVsvWM8StGEkXvwmJRHbMyR8DkV9ZSgFcQgPTguKMyDl1UEmmx8eH2UrGNsMElbad1tE5mGMUTPhhDADaIzs1LV36rivc%2Bs%2F1dVc28xr8hS5eOe4WFp0LMM%2Beyu3Ca88TO3fb1fdep8ivudwplXQRwuCQAAsZTaYrXo7szgji%2BpW4o7ryXwLmylkwu4UyLAUcvUfhyeIh2MTwEEMUG9XLn%2BYA8%2FX7SWIGmRtVfMlZsAf%2BbOj%2FbW1dlrCaydf3hrmB2KsGVBdkFBLoWLgNvZh9jZUJzCysInJBjqkAfC77r5aE9BK5GyNZbHIGfGRG0rssc0APktkHXosEh9TUfx7O1obnJ7rxCbxUcx6yV5dSmw19rbEpABSARefRcZaAOHlKEjSttsTLTuUx0VlEP16cMhzYJabSyacHAg7u6c%2BgeBWqUyMVmRmC5HtP90LDIxy%2Be9AC14iW01ckSSXRANNodUIfi53U4Fv7ecAo%2BIorJU5kl%2Bam4lpujx8%2BYF9rMOj&X-Amz-Signature=292e57aa5b6388b9b231019eae2de0a0844f8b6a6d581ca9e03375afb7825e2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCRA5L75%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQC%2F%2BnEfdmjVGwOHogFKYq9rEiJg1ruwDbEVDRd0zr0eXwIhAMfiXQ5RTJj3vdaU%2BLi16Hpmeame%2BGpgPtl%2FbmG9cNSEKv8DCDIQABoMNjM3NDIzMTgzODA1Igx5xE7OmH2zDcVIGdYq3AMmU8R%2BWCIZ1hTfPfMfazEjdk5Y2%2FMLUSLeEcUddsKMqOVSmkABBnwIxRueaof99qjrW64fTrgsumADKsTyic7KKNpyLiYgVf4DshtrXi0yIsYYcMvxDPOYFld0wSxlI8j%2BlJeJ8%2FxjtAxXne4yNyzRlEcdLGLLmIP8OuNe1txr32tYjuLIomUH4%2FS7sI31hgFogTFt2KzyDrvWxTxPTcNC9qQ8%2BUCl2fenvCFlcnut%2Bzh%2ByPQxEb%2F3%2BIxl5u4Ju2ljy%2F%2Fvxec6x40eeX72Q4GFzXVSBAGpmI8E4eSY%2FVIJnYXtI%2F7taA%2BgVIU4fiuyamWy7IHXHx9%2BgnPTmJUzMCX0KBCP30c22jeYEVsvWM8StGEkXvwmJRHbMyR8DkV9ZSgFcQgPTguKMyDl1UEmmx8eH2UrGNsMElbad1tE5mGMUTPhhDADaIzs1LV36rivc%2Bs%2F1dVc28xr8hS5eOe4WFp0LMM%2Beyu3Ca88TO3fb1fdep8ivudwplXQRwuCQAAsZTaYrXo7szgji%2BpW4o7ryXwLmylkwu4UyLAUcvUfhyeIh2MTwEEMUG9XLn%2BYA8%2FX7SWIGmRtVfMlZsAf%2BbOj%2FbW1dlrCaydf3hrmB2KsGVBdkFBLoWLgNvZh9jZUJzCysInJBjqkAfC77r5aE9BK5GyNZbHIGfGRG0rssc0APktkHXosEh9TUfx7O1obnJ7rxCbxUcx6yV5dSmw19rbEpABSARefRcZaAOHlKEjSttsTLTuUx0VlEP16cMhzYJabSyacHAg7u6c%2BgeBWqUyMVmRmC5HtP90LDIxy%2Be9AC14iW01ckSSXRANNodUIfi53U4Fv7ecAo%2BIorJU5kl%2Bam4lpujx8%2BYF9rMOj&X-Amz-Signature=90c1cd78adc78eb8633021e1b7be9813111a15d7f47a65d0c4c352780babb7d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCRA5L75%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQC%2F%2BnEfdmjVGwOHogFKYq9rEiJg1ruwDbEVDRd0zr0eXwIhAMfiXQ5RTJj3vdaU%2BLi16Hpmeame%2BGpgPtl%2FbmG9cNSEKv8DCDIQABoMNjM3NDIzMTgzODA1Igx5xE7OmH2zDcVIGdYq3AMmU8R%2BWCIZ1hTfPfMfazEjdk5Y2%2FMLUSLeEcUddsKMqOVSmkABBnwIxRueaof99qjrW64fTrgsumADKsTyic7KKNpyLiYgVf4DshtrXi0yIsYYcMvxDPOYFld0wSxlI8j%2BlJeJ8%2FxjtAxXne4yNyzRlEcdLGLLmIP8OuNe1txr32tYjuLIomUH4%2FS7sI31hgFogTFt2KzyDrvWxTxPTcNC9qQ8%2BUCl2fenvCFlcnut%2Bzh%2ByPQxEb%2F3%2BIxl5u4Ju2ljy%2F%2Fvxec6x40eeX72Q4GFzXVSBAGpmI8E4eSY%2FVIJnYXtI%2F7taA%2BgVIU4fiuyamWy7IHXHx9%2BgnPTmJUzMCX0KBCP30c22jeYEVsvWM8StGEkXvwmJRHbMyR8DkV9ZSgFcQgPTguKMyDl1UEmmx8eH2UrGNsMElbad1tE5mGMUTPhhDADaIzs1LV36rivc%2Bs%2F1dVc28xr8hS5eOe4WFp0LMM%2Beyu3Ca88TO3fb1fdep8ivudwplXQRwuCQAAsZTaYrXo7szgji%2BpW4o7ryXwLmylkwu4UyLAUcvUfhyeIh2MTwEEMUG9XLn%2BYA8%2FX7SWIGmRtVfMlZsAf%2BbOj%2FbW1dlrCaydf3hrmB2KsGVBdkFBLoWLgNvZh9jZUJzCysInJBjqkAfC77r5aE9BK5GyNZbHIGfGRG0rssc0APktkHXosEh9TUfx7O1obnJ7rxCbxUcx6yV5dSmw19rbEpABSARefRcZaAOHlKEjSttsTLTuUx0VlEP16cMhzYJabSyacHAg7u6c%2BgeBWqUyMVmRmC5HtP90LDIxy%2Be9AC14iW01ckSSXRANNodUIfi53U4Fv7ecAo%2BIorJU5kl%2Bam4lpujx8%2BYF9rMOj&X-Amz-Signature=98ade4cbabb3b6bb28b5764e7ce3c9eb082a9cd6b799ba57f7a06481a7900ed1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEHQ3TT2%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCICdeyHu76NvxltScesg%2B0kWCqIE1OOOEO4gNe%2FNgAWDYAiEAjZCBO3Tj4Swkq8USZSH6QezV3Als7V8CmIrnnw79V8gq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKC5GaRtJvZB%2FE%2BGOircA6cSKjWbVnNSTr6bMzOLWTUJ51wdkpEOG2Dq%2Fzup00Pd65s5TAnhKXoNdi%2FwZa%2BasVYko1o5uR1gRoGmHGNdzvu9VrKhwjSv0LHSG48IxMORMHdFNzJA7xfvIIk3L%2FgZlPQ%2FJPRaaWoOlX6RDT2%2Fmb3dV2Ptg0%2F8S4%2FOE%2FkFzUuhM%2BOAEb1U4jndk2FyNpHf1MD14iScgvyvQbagKN8csGbBzy0iv1I3Y%2BQyFym0H6gRh1qAfNnc5kK1XaRpdo6lqPriQuiZzo0CyibO1QfaHW0L7rxNSy87u4elvCSQMpkPJ9rUBSQHYJZCEyWb0L6Q%2F%2BU5BZF6z6tit17UdJdqO%2F56FSEav5iOmUlnaSE%2BeITsODNGsYTeVyqcjEtOOCQ5MLPW9YeqHs3FZ%2BAiBkkH%2FYmHXGurVMn6JAznIo2DGNbzrSGqXPozpRRIoqzNOZ8qe2pQwSTeZjEokC8%2BFIbMCsbcCR6CRvTllmt7SP9kZ9vt262a9mvpEqQKyLW75tvUBetn9rSKcflEvIJtmtxStnwTrAXG%2FxDat2EUXwstLCVN6V48gMgfT2Zu%2BIMCCulFckbzs3qRDD1r7YMxDIPN9TE47YJ0v7MdI7O23JMl43gFQDbGpIFWGcSRHUwPMI%2BxickGOqUBR9RQnAUgA7mL0LxFjpNdqD7LjntsDpmQvVItTLk4WPa7wQvDHBky8X1voc2GLdH%2B9jTTVbhnkr2zE40mqi0kJofdSLZ%2F%2FKU9e3RD12SQ%2BzTMm%2FxKruBbYkJNJ%2BcXsnv2Of2NiALGlImzo9i4Sp5dAezFSTVQuIBCuiU2IGPZHgcSIPWP0ofS0TZtjLehGYvbxqYOftHE03O%2FcRyQc%2BOzet6xMbWJ&X-Amz-Signature=d99634c5e2c22de1ea1a752238ab56db887ec44890ca2d143b8a81a573c1c3fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AAMTF7W%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIFSfCXIqnZYekOPeOh0xXapZMXo3KBvRqNCZa8Ik8cTIAiAV30HeKP4%2B45FAOkltwfAhHfdICHJb4jZ2CchpHHZZCSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM3ozrEj8mLhTPG2dPKtwDgpVKqSOyffFVY51HE6%2Fz4eDjKcy%2FVxSpQEvcjVSwKlixcetYRrMoq7%2Fd8DjZbKbDfIDI1boOSuXqJDkytIS3HHDlV0CrX4cU6%2FrgKkSZLMghjqGzwnIZCU9%2BUfIErVz1xC5mPGnDXH%2BWuj1TAs0zk9kDAH34FcEqgN%2FbPBcSoTIdWsIaJbKNhl%2FbLZ0YSqvUpbdDXq4tz7jP1SNV1PTzVkV4L3CDI8TM%2FeCnYWBTEJwP3ghttaKd372wNqL7hv1ubFqcQs0NndhAWjV6iq2Y%2FyYSsybJMYEpVrhilf32IDhRh47RxKuraOPXkG2COj7xhrppRPmSCS6y8ABvwHfKwMkh%2Fyh5gFrfPeEjYXDIvQQTlK%2Fnb%2BeAuR7cJmHhXIS1keMyOT6G%2Br4HdZKoGwIrmCmNxEnk0eLV7Uy3yPgJPlzAMYxZ1I023HALJPrSxz3pSPl1ycMxX4OQx%2FLfLUnRehQEZamo4wm1wZ3U96ZhvYHTAkoDQFYzbwAUPT4Nf8Ycx1%2FtWVCW%2BzDSvSma7Wd0rjWkTFzg7TaEeDBkjkU0TJOhOUJOmE%2B93XeO7MI9sQphIiwDAZ689fAUqXo2vOgCw6Lx1t6OkteMTbjVKSiesjeRKZNc1xjesvxzyYMw%2FbCJyQY6pgGU2X%2FDxVki8I5R9wi0YyRa5AwH1Mbli7Tow2alraPkSRqpJw1YeT4EpWOJfxfHKmyuu7IG%2BNhG2NtJgVatbiGpa94VqB0XjTKeB%2FUAXsezYu9nZ2qX%2BAdpLG5t2hzwHC7yY8ExnExM%2B2vsVPh9FfcmTw9lgKXl%2FHH49lqoJakzRoHc5%2FA9cNlUQriUDCP4HAMBggi77t3xRY0OH33n%2BuGZc9adKiR%2F&X-Amz-Signature=6e5c1e76a907eb566b650bc7887025095d4a44de25bd2c615ac352f4d6ad0d4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCRA5L75%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQC%2F%2BnEfdmjVGwOHogFKYq9rEiJg1ruwDbEVDRd0zr0eXwIhAMfiXQ5RTJj3vdaU%2BLi16Hpmeame%2BGpgPtl%2FbmG9cNSEKv8DCDIQABoMNjM3NDIzMTgzODA1Igx5xE7OmH2zDcVIGdYq3AMmU8R%2BWCIZ1hTfPfMfazEjdk5Y2%2FMLUSLeEcUddsKMqOVSmkABBnwIxRueaof99qjrW64fTrgsumADKsTyic7KKNpyLiYgVf4DshtrXi0yIsYYcMvxDPOYFld0wSxlI8j%2BlJeJ8%2FxjtAxXne4yNyzRlEcdLGLLmIP8OuNe1txr32tYjuLIomUH4%2FS7sI31hgFogTFt2KzyDrvWxTxPTcNC9qQ8%2BUCl2fenvCFlcnut%2Bzh%2ByPQxEb%2F3%2BIxl5u4Ju2ljy%2F%2Fvxec6x40eeX72Q4GFzXVSBAGpmI8E4eSY%2FVIJnYXtI%2F7taA%2BgVIU4fiuyamWy7IHXHx9%2BgnPTmJUzMCX0KBCP30c22jeYEVsvWM8StGEkXvwmJRHbMyR8DkV9ZSgFcQgPTguKMyDl1UEmmx8eH2UrGNsMElbad1tE5mGMUTPhhDADaIzs1LV36rivc%2Bs%2F1dVc28xr8hS5eOe4WFp0LMM%2Beyu3Ca88TO3fb1fdep8ivudwplXQRwuCQAAsZTaYrXo7szgji%2BpW4o7ryXwLmylkwu4UyLAUcvUfhyeIh2MTwEEMUG9XLn%2BYA8%2FX7SWIGmRtVfMlZsAf%2BbOj%2FbW1dlrCaydf3hrmB2KsGVBdkFBLoWLgNvZh9jZUJzCysInJBjqkAfC77r5aE9BK5GyNZbHIGfGRG0rssc0APktkHXosEh9TUfx7O1obnJ7rxCbxUcx6yV5dSmw19rbEpABSARefRcZaAOHlKEjSttsTLTuUx0VlEP16cMhzYJabSyacHAg7u6c%2BgeBWqUyMVmRmC5HtP90LDIxy%2Be9AC14iW01ckSSXRANNodUIfi53U4Fv7ecAo%2BIorJU5kl%2Bam4lpujx8%2BYF9rMOj&X-Amz-Signature=86aeb73304fd38167518233f81710b5107d611efdb04d5c95975eef2663ebeb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
