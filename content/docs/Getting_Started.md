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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHQ63TOC%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFQj%2FtOGboUUIAx0A3vpLFjMz2xg8F8J3UGdhu0pqBUAiAVcP%2FozngNIQCw8kA97zl9Qc031XkJbpJOdmGg2piq6iqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuJtSJm2VhHIY5NdeKtwDy6zIv%2F5rAzX6ItPVTNYpleEbztI%2BhdJ5%2BWa%2FXRAVhsH1aM0DH9BBFMBYEcMVUZgvOrcviuJiIq8phFlGlXQdaC%2FPBR8cF7jwHEhW%2FgXTbPGp9MLzuHgV4MknQAuysIdItUB1Mb%2ByU199YGPVqtR79Zu7y0EUUTMKyKdAs3b9QsF6s7RCRD%2BBd4HgfdnOm%2BSgRpzkHKvoktokRvQUo3LpW3qIESjr1dzD3kFi%2F%2B4HHlliD4whQD04FA0q3yzA7g5nYksaTt0YlywLw0CFsNyzJju7SA17QkjfhBlTTo69Y6L%2F8nZP5P8JnfhDUJK3DcFuXR%2BtNHUn2sFw%2B%2FUFM9S4h5GpjFVMF67ReP3vRH3rtZxS7%2BMJa7WRza58mbjmtgW8VcGCrxmCtRiHcZWJAVqQvZAe70cUWPmqFeVgVfxi4uCJ0RHexWsMvwNQ0KLg2wyym8KbmFoA%2Fz6Bdsmh9%2FDcpIgHtMnBm4T2x2aLHPNBzcqW7m1yQCm4%2B1BzZxVLCKy2uALED1KyqHCMb%2B9Q4RUnvVoTUf9j9aavoR8bY%2FCo7GQ8Ape5KOgIMlGAL7e3nwL8KopapONH5tX7ibdd0l3Cioke4b0W6z3XGR4Cad9m0xy5o4OD7xBRm7HitZEwvcGAvQY6pgGsmyDShlhNleUQZWRKmoVCGTMTmiUvS%2BNkUv3YzIffezdogd4FHC4naxDTK%2Fji%2BiE64ZYUiiCRc3I1nayw9n6fthnP9VpWjrvWFtyLjydhTSs1j%2BAXvFVXYVo8fslMk%2FIE36yr9VRbinuVD8utocRm3oOuNcBhdeB2dSw3P59sjXJBhWBcKVro%2BD%2BPvRm8teiRceN4aiqHsiOjwiEWPMSYHuQVAUlQ&X-Amz-Signature=70f33c0e08716d10ca76ee4f7c021372ebdcad3b724484215684662f238aa47a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHQ63TOC%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFQj%2FtOGboUUIAx0A3vpLFjMz2xg8F8J3UGdhu0pqBUAiAVcP%2FozngNIQCw8kA97zl9Qc031XkJbpJOdmGg2piq6iqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuJtSJm2VhHIY5NdeKtwDy6zIv%2F5rAzX6ItPVTNYpleEbztI%2BhdJ5%2BWa%2FXRAVhsH1aM0DH9BBFMBYEcMVUZgvOrcviuJiIq8phFlGlXQdaC%2FPBR8cF7jwHEhW%2FgXTbPGp9MLzuHgV4MknQAuysIdItUB1Mb%2ByU199YGPVqtR79Zu7y0EUUTMKyKdAs3b9QsF6s7RCRD%2BBd4HgfdnOm%2BSgRpzkHKvoktokRvQUo3LpW3qIESjr1dzD3kFi%2F%2B4HHlliD4whQD04FA0q3yzA7g5nYksaTt0YlywLw0CFsNyzJju7SA17QkjfhBlTTo69Y6L%2F8nZP5P8JnfhDUJK3DcFuXR%2BtNHUn2sFw%2B%2FUFM9S4h5GpjFVMF67ReP3vRH3rtZxS7%2BMJa7WRza58mbjmtgW8VcGCrxmCtRiHcZWJAVqQvZAe70cUWPmqFeVgVfxi4uCJ0RHexWsMvwNQ0KLg2wyym8KbmFoA%2Fz6Bdsmh9%2FDcpIgHtMnBm4T2x2aLHPNBzcqW7m1yQCm4%2B1BzZxVLCKy2uALED1KyqHCMb%2B9Q4RUnvVoTUf9j9aavoR8bY%2FCo7GQ8Ape5KOgIMlGAL7e3nwL8KopapONH5tX7ibdd0l3Cioke4b0W6z3XGR4Cad9m0xy5o4OD7xBRm7HitZEwvcGAvQY6pgGsmyDShlhNleUQZWRKmoVCGTMTmiUvS%2BNkUv3YzIffezdogd4FHC4naxDTK%2Fji%2BiE64ZYUiiCRc3I1nayw9n6fthnP9VpWjrvWFtyLjydhTSs1j%2BAXvFVXYVo8fslMk%2FIE36yr9VRbinuVD8utocRm3oOuNcBhdeB2dSw3P59sjXJBhWBcKVro%2BD%2BPvRm8teiRceN4aiqHsiOjwiEWPMSYHuQVAUlQ&X-Amz-Signature=8891de8fb6064833b3af867f71c6d2abde4f2eb5a7e7053d87505f4ef26dc5ff&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622JUXVGH%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMR81wDZMgoKwt%2F%2BsZGEt4CBirpxBNoPQcK7x52q5UoAIhAJdK4czKpQVuHu2R6cqwgMmBnJHYpvLu28CGH0wFTIkEKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxQgsx3unKAMbt9hYq3AOWNWiCnHr2anCTiLL%2FqItGkCkOZ5BGf6AdD2ZrzhDavq2frCrlqyE6Rqp8C%2B7PrKcX4tuEthF%2FctsXlrt2WOqRjRkYwPm7DnZcFOXwKrvH6o6%2ByJAQL8HavanMFsj9GbRvUWfJswF9t%2FT1YJZ8PJpyrrivq%2FdWwpSRygKuO3LC0DENwiUAWI6%2BvBQ5ZX0Cgiu3yFCLkZpR5nXaD1ASIh7oM7MOzQdnZMdNBz9wxKi0xyusj%2BTEtLDGNrfRTFa4i8aMQj7ect2lDCDBIv6IMMOWFQMwfCWlsExT73oPleqQzw7uABopgwkDhHr5HkTxmSx8e3CJ%2FGBrYD5Omt81efvoyCp78FxXIF%2BxccftYf0J8vOMTXMQDk8qAiO%2FHpVwrF8syGHBaeJIZ9m%2F8d9EN73J0eno8u7kA6YwsP4f8o0VPVrKJPaNRCpQQ5D9JlL%2B3v66L7X%2FC3elrpfcJ6M7EMsQ%2BO0vD4BR7aLVqBr9b%2FNiT3DFzUVzQy47OVZsLR92COngX%2BDmUB5LEbPfsGbcmS7%2BjcBTjJtwhZb53oYbBCt2XMB7XNV62ugLehhHW9JdbrSL1S%2BMQVH5TQ6YWmn%2FDbos%2BoOPsyyqso1Q%2Bw3eTkZ36yE%2BGmXVKW9UGXLONjDgwIC9BjqkAR4Kwkm%2BPCJle6H6LD70siviTOLbobSDLyw44kNMrdftNPH2795%2BdPefGdvCroUnofrgfKnn9KJhmv1bUxnGOD7wIDaM1VQ%2FLYXHHHtwslnTzlj2o3GoL%2BdZQB0nBnOargym5rWStlngDIs2tHfFsSQmZfEVT%2Fto88a2NW2jO31QwRXc6v3KuQAsq2%2B%2FXZVicBGATGFWsGGLNig4Yvl4kGoTd9q0&X-Amz-Signature=1b4a52b087a56bd75dc8d0c16cffff3c0563dc10be6eb081d43e4397e3746369&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W25M4TOH%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FoolUs6MR8sQ4HurPjPWpi2AP%2B%2FyU4MSTvSC5zJ1nLAIhAN41RISAmYpYrzEEhRP5XQf1dXG1pFADKKoK4BYU0LcIKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbHkmUhaA3wRIXW2Iq3AN5pQ%2BE9jzxbJDR1%2FvDhhOC9JjbbT70qTrPUSRVI%2B%2FdyGa7jrBWzCPf1g4RfZEKAdlbkV6alk8zGwaOpmGAj5HRBiaC%2BgOeKdtLOUisT%2F5eIR3AFbRlBFMw0yPn2JbE5PjsXxuWDBp6vm8vTmFqXHFmz5G9KyzKgkqR6cRe1pJ4chqzTdZzbEALhcuA77A00F9JnnM0w7Gk33CZueQNT%2BpehtyJdBsOBwLFJcvUzcrb%2F3ur8xVonIthy%2B0JsT7%2FxkPRckGtAczkPWg91ePt8agiAyaY16yzNcSre20vm7IZD0mmnuVedvGzn7QP3OOjbCcD%2BCdZQCmG92TGB55FbQWqVrPxwiSmzldPOtnbqfZM0EH09TaRoR%2BIrhETSBteNIeheij5a%2Ft4mwJF9uPl5Jg2WkXKuYKXV3zniSxYcv5mnDCkT%2FRFEGNxC4dZlXPT0CYL8qHFSEsMYHM7B4ZJ6IF881HtS545mysJaP%2BP18DejnSxoE7s7J%2BYu6uGPzTN6zXsbR%2Fjxw4z3GJR%2B4JdvSgPl7nZKdRjjO89RPq4KaT4g31WWwvfcP%2FnxwEPPgPhynDLF095IAuuzUHCX0wPRht4TFo3hHYcpjxVzPpW3arUO7dc%2Ba5rM%2FaW1%2BLXfDD%2BwIC9BjqkAdI%2BnqbVozpf0IARM4wddO0njCUK94keMMwiUCemIl%2BQ5C6OZIYt2FhI3nTQZByQmJnHr%2BMhFIyT9%2BRHI7%2FnBO1XymSnmys2GqtppqEP4DBEFsWhHh6JQr2CYRXOC%2FxpIgXhE3UUQ1ia6Fnol77%2Fj1q4cyHF3ouNPFFY6%2FtYW5vb21UeV6GpsvTbfOrKb630UOxcIGO%2BOcUt%2BVpZOm92n3p6mbNJ&X-Amz-Signature=f1173aaac4f31e86b11615f1b797ceef062e8c0d06df466623975c5bde7c0937&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHQ63TOC%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFQj%2FtOGboUUIAx0A3vpLFjMz2xg8F8J3UGdhu0pqBUAiAVcP%2FozngNIQCw8kA97zl9Qc031XkJbpJOdmGg2piq6iqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuJtSJm2VhHIY5NdeKtwDy6zIv%2F5rAzX6ItPVTNYpleEbztI%2BhdJ5%2BWa%2FXRAVhsH1aM0DH9BBFMBYEcMVUZgvOrcviuJiIq8phFlGlXQdaC%2FPBR8cF7jwHEhW%2FgXTbPGp9MLzuHgV4MknQAuysIdItUB1Mb%2ByU199YGPVqtR79Zu7y0EUUTMKyKdAs3b9QsF6s7RCRD%2BBd4HgfdnOm%2BSgRpzkHKvoktokRvQUo3LpW3qIESjr1dzD3kFi%2F%2B4HHlliD4whQD04FA0q3yzA7g5nYksaTt0YlywLw0CFsNyzJju7SA17QkjfhBlTTo69Y6L%2F8nZP5P8JnfhDUJK3DcFuXR%2BtNHUn2sFw%2B%2FUFM9S4h5GpjFVMF67ReP3vRH3rtZxS7%2BMJa7WRza58mbjmtgW8VcGCrxmCtRiHcZWJAVqQvZAe70cUWPmqFeVgVfxi4uCJ0RHexWsMvwNQ0KLg2wyym8KbmFoA%2Fz6Bdsmh9%2FDcpIgHtMnBm4T2x2aLHPNBzcqW7m1yQCm4%2B1BzZxVLCKy2uALED1KyqHCMb%2B9Q4RUnvVoTUf9j9aavoR8bY%2FCo7GQ8Ape5KOgIMlGAL7e3nwL8KopapONH5tX7ibdd0l3Cioke4b0W6z3XGR4Cad9m0xy5o4OD7xBRm7HitZEwvcGAvQY6pgGsmyDShlhNleUQZWRKmoVCGTMTmiUvS%2BNkUv3YzIffezdogd4FHC4naxDTK%2Fji%2BiE64ZYUiiCRc3I1nayw9n6fthnP9VpWjrvWFtyLjydhTSs1j%2BAXvFVXYVo8fslMk%2FIE36yr9VRbinuVD8utocRm3oOuNcBhdeB2dSw3P59sjXJBhWBcKVro%2BD%2BPvRm8teiRceN4aiqHsiOjwiEWPMSYHuQVAUlQ&X-Amz-Signature=963a214de9cced27165433437b0664539690f4c5f5e910a9dec451836bdb6790&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
