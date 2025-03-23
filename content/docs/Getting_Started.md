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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJYCB6CD%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T180935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2h8UgSukFT9jPfFrJ2h5jG%2FKaM%2FeEZAltcFDR7%2Ba2YAiEAlKYGFyxyIx%2Bsf%2FafqPf%2BBI8tDtgrplEUX%2BIRR47SXVgqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAO50weKNqHd%2FEDM3SrcAzf21UzKfPpb33TmsFyWHcN3Xqg1fac0ZFuCT9mdoZqulTBzKsnBtpymBm%2Bklnwtp6irzW0%2FLl92FCMTPBekPTXvP%2Fo9zRffduABrjx1quWDhGQicNdhW4OK2hYncLVTWdIHa%2FdYFNKqmNfHmr07eYArnRcSVog6iRAt1giwA8UwzulCYrnawPcYrn45f3gbrUOIA20dy6t8AwHDcDzgmkovxa7Wgnm0n9URY%2BayxVm3mrhTZ81Cj7XInYFR5v2rep0pmopuDsTlK8LjTRcD3KJ%2Bfi6jI0VatVSqMSLRQswdh2GOgztmh7UOg9DeXI1RqssJ%2BeXD0K%2BoO%2BsM9PyWScbUMHyFjCNXM2z2g05fACkH%2FbfLPXsqoEARP1pKQQw8lA5xkIlad7%2FkTaL7hnrGacvZ%2FY0x7vJrreyRY5edeYAGZTOR3JHePT4fXXxTl2gCXxRchvQzEuRE30u%2BFs5Zk8H43GFB81QNmc64Quo1Fpgjd%2FRSoEQK4St4pQgcWfB8q965uEYRMYjiBxCaYQPGMTKty4%2B1aikzXsES0%2F%2FfircNfAK68Ke0R1GBaobOzQEup5fBWUU63hxirdbGKQ7Z3ibkfTCtpCRu36%2FZDHUqSyTK5%2BMrsVEqc2MBVw7MMLrugL8GOqUBgvQCh7z9MdHvgmdRbDp7W63m53dktDoWMQDoBxcmAjtnqIKkEcFWyVO2%2FLHnrOpqFJayYnozxVHt57UVrtqr4SwEeTrZbD48oOJCYw3eNX0KBiovQlvrS9%2BvOTIImBcxxh6UriFD3peE9JHodvBaepPmZeH3kDi8WLf19olEjCBRYaVV6CxZ7IJTWSC1rAKt0E9HK0ttS5CMj4gSK2aHn5G4h06L&X-Amz-Signature=13445c360089552d2dffe68a5a5ea5184ecec8a0a7e09bb696d5ab050b1bb3e2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJYCB6CD%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T180935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2h8UgSukFT9jPfFrJ2h5jG%2FKaM%2FeEZAltcFDR7%2Ba2YAiEAlKYGFyxyIx%2Bsf%2FafqPf%2BBI8tDtgrplEUX%2BIRR47SXVgqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAO50weKNqHd%2FEDM3SrcAzf21UzKfPpb33TmsFyWHcN3Xqg1fac0ZFuCT9mdoZqulTBzKsnBtpymBm%2Bklnwtp6irzW0%2FLl92FCMTPBekPTXvP%2Fo9zRffduABrjx1quWDhGQicNdhW4OK2hYncLVTWdIHa%2FdYFNKqmNfHmr07eYArnRcSVog6iRAt1giwA8UwzulCYrnawPcYrn45f3gbrUOIA20dy6t8AwHDcDzgmkovxa7Wgnm0n9URY%2BayxVm3mrhTZ81Cj7XInYFR5v2rep0pmopuDsTlK8LjTRcD3KJ%2Bfi6jI0VatVSqMSLRQswdh2GOgztmh7UOg9DeXI1RqssJ%2BeXD0K%2BoO%2BsM9PyWScbUMHyFjCNXM2z2g05fACkH%2FbfLPXsqoEARP1pKQQw8lA5xkIlad7%2FkTaL7hnrGacvZ%2FY0x7vJrreyRY5edeYAGZTOR3JHePT4fXXxTl2gCXxRchvQzEuRE30u%2BFs5Zk8H43GFB81QNmc64Quo1Fpgjd%2FRSoEQK4St4pQgcWfB8q965uEYRMYjiBxCaYQPGMTKty4%2B1aikzXsES0%2F%2FfircNfAK68Ke0R1GBaobOzQEup5fBWUU63hxirdbGKQ7Z3ibkfTCtpCRu36%2FZDHUqSyTK5%2BMrsVEqc2MBVw7MMLrugL8GOqUBgvQCh7z9MdHvgmdRbDp7W63m53dktDoWMQDoBxcmAjtnqIKkEcFWyVO2%2FLHnrOpqFJayYnozxVHt57UVrtqr4SwEeTrZbD48oOJCYw3eNX0KBiovQlvrS9%2BvOTIImBcxxh6UriFD3peE9JHodvBaepPmZeH3kDi8WLf19olEjCBRYaVV6CxZ7IJTWSC1rAKt0E9HK0ttS5CMj4gSK2aHn5G4h06L&X-Amz-Signature=acffd1b609e4037d4dd6601edea4d02dba9529e764ec2cc73cbc2b955bfb2a0e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUNJRAML%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T180941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqMBVrxPjynUOB%2FGbrfnL4VD9sieuW8K2mf7Uw7aJ8KwIgFxJR%2FLsZjrADBrTn%2BAOJSe1RMnkuVlDO0xj024wRF8YqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2Fw5Md2Dsvr6UFCWyrcA5OkRU7uBOsCLzBC7uAzB5ERG2uuvUAF1yh%2FmXfmMAPSV4sIh%2F1EVBdwPUod2d52Uxx9W74iAmYVv0G%2F9e2NCDw9GMTYh%2BnI5QihhdGwsRyznICa1Ma%2FuekrAx35gKz%2Bq41keezGDZUbqnanmVnzLR%2FoCMd3XBsng041SgXShxohrzZU83L8mgFdJXE9dvvoZlv4evlroku15YGC2hoGTcww1g%2BRKwkbjz40Fl%2FYzvtqlCctp9ADTAN16p9IvfRbsq%2BAeHyDCr1yU2pjHR2BJtPxWci%2BqdOrc7mbFn%2FT%2Fj5bv6kgJZJaoAb0vwuyYQWyYcFT8Bfu6em3Q7eqs%2BEW2P%2Fkckf00yNNXO7hrRVYhg1HuXdzdHOA9i3B6MecWzXNjdNZrNtokijoFCHUV1jNBIq8wE4tx%2Fm9F7v91obHvnJBAu%2FgpWbrqiZjp6CaYk3rJMP3JRMJfk7JFDJCuWIUEzSXjcoAp5i0Sc%2B1a6dOH%2B7x2ZXgKl5KUeqJGfFYOlxp69o7fZr82NKIaY5%2ByvMGDXCasM3rP6OiSMkiNbfi%2F39sYMxdGS1dCWZtSQBoRD2CPePsAg8Nrxuo%2FhIdT6n6r9k6FQbXcdCMrfUsLhJ7X1E9htV8eES3W5nA%2BpBcMIXsgL8GOqUBolmfT5%2FZ%2B81pPz8DqySYd78q1Q8sQGCdZL7z3PvKqj4VI%2BglemlpJyT4Epdq2l9w2nbYYrrkKo5zscRsqoqBHgDmXbIlXu80CGl1T8Ob9JwXh1IPpYojE4qAZO%2FOzh9wd7rdH0wawfs%2F2RzZrGITTQELicfAz%2Bc6i4YJuUeTptoacL6Bs89vdKj5W3fUmqyqifB4x14FkOB3ytZAtI%2FmJkbZ0XbF&X-Amz-Signature=acadcc0699b308c4ba4cd967b51ed07d4fa8c368c68af73a6680c69d8e89d554&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674Z4LES3%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T180941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqewPkBn6uEElst0NtoAq1DnLiLwegFVulW9MQrcSZogIhAIVddxWGPgaDBXNOD%2Fy2frHvmAEUrqken4MTQPjM024BKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlU7dYgeMv%2BeD5i5Yq3ANZsqcAFBX6tcGddSCkNwbtNAAWbx8OkL9on9SaxHjvrZ7y8cW%2F0bDMjz%2FEA%2Fw4OyOsGxAaw72LR5ilzg04QCIRfbrrzw4Tchfvfgh1dvQaqshZe3aZr9RPFJ9R6wfA9krTV5k2%2BEDN3AVyIGt%2BGnHFJeNvksQ%2Fg2TQnAb%2FIOLwihwWK0840BwmrMMDYTY8RarJI%2BYhLQ%2BUMunDwY97GN81NLjQC%2FdjMdjaJnTyt3yX3CrQiMQwHyyQca4wUlOq1lLyJvZ49RHYQEbEKWH7Lf09GJf289PIklq3PuURh3RAjq42QWZXZn1XnGqFXgqSFHbunK6%2FHpBHqRgFTYTo%2FSHBFNWIjY%2BStXwhpMfh%2BZLKCLQnfEe9rl%2Bb%2BE8dk13UDXdIxzZMmx5X4J%2FUtuyUZgGwTbvrAXye7YqkZUuhu2%2BZUuxPDsj7pDjl2NYRHsLrNVwqg5xrCOS91vtaFfZnQtwQ55LDXHz363BcjoLKq01xWaQJdsk0bmAzBYDZJkRNHNI7EMD7NqCrrHzTX5vuGhWTmKZd1R8zHWB%2BzjSOqxHGshHKVRgt%2F0%2F8%2FJAfMslAKWy6BAtDdRPTT6LN7UOvOyhSzF5tt37keZ3BjadEtdtJsLQfR1E6AOcBb1ChhDDv7YC%2FBjqkAbSOKSTJ%2FpahPeiQfrEUisg%2BNTAB3uGz1GlqBgsPGGqRSCTUhWb3Fo0wum%2FlPbgaJ7B8YtoI3jCTTUuKeOPn%2F96dU9TcNLFB1ueysc8JvD3Eec%2BydIWo3XbjDuo3GM0ROZkrvpe0SEa%2FNc8dk0j4OQW%2BJ2vB085d9j2o9K7KDHHw6zFzWR6FaG3I6Q2ljoD1F%2FaW9cXchzQXt1kekK0DyUPGXjj1&X-Amz-Signature=2284ce757672fc9dbce9fe8f5b884ef37b989674c6c2c33f766599055c63f89c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJYCB6CD%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T180935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2h8UgSukFT9jPfFrJ2h5jG%2FKaM%2FeEZAltcFDR7%2Ba2YAiEAlKYGFyxyIx%2Bsf%2FafqPf%2BBI8tDtgrplEUX%2BIRR47SXVgqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAO50weKNqHd%2FEDM3SrcAzf21UzKfPpb33TmsFyWHcN3Xqg1fac0ZFuCT9mdoZqulTBzKsnBtpymBm%2Bklnwtp6irzW0%2FLl92FCMTPBekPTXvP%2Fo9zRffduABrjx1quWDhGQicNdhW4OK2hYncLVTWdIHa%2FdYFNKqmNfHmr07eYArnRcSVog6iRAt1giwA8UwzulCYrnawPcYrn45f3gbrUOIA20dy6t8AwHDcDzgmkovxa7Wgnm0n9URY%2BayxVm3mrhTZ81Cj7XInYFR5v2rep0pmopuDsTlK8LjTRcD3KJ%2Bfi6jI0VatVSqMSLRQswdh2GOgztmh7UOg9DeXI1RqssJ%2BeXD0K%2BoO%2BsM9PyWScbUMHyFjCNXM2z2g05fACkH%2FbfLPXsqoEARP1pKQQw8lA5xkIlad7%2FkTaL7hnrGacvZ%2FY0x7vJrreyRY5edeYAGZTOR3JHePT4fXXxTl2gCXxRchvQzEuRE30u%2BFs5Zk8H43GFB81QNmc64Quo1Fpgjd%2FRSoEQK4St4pQgcWfB8q965uEYRMYjiBxCaYQPGMTKty4%2B1aikzXsES0%2F%2FfircNfAK68Ke0R1GBaobOzQEup5fBWUU63hxirdbGKQ7Z3ibkfTCtpCRu36%2FZDHUqSyTK5%2BMrsVEqc2MBVw7MMLrugL8GOqUBgvQCh7z9MdHvgmdRbDp7W63m53dktDoWMQDoBxcmAjtnqIKkEcFWyVO2%2FLHnrOpqFJayYnozxVHt57UVrtqr4SwEeTrZbD48oOJCYw3eNX0KBiovQlvrS9%2BvOTIImBcxxh6UriFD3peE9JHodvBaepPmZeH3kDi8WLf19olEjCBRYaVV6CxZ7IJTWSC1rAKt0E9HK0ttS5CMj4gSK2aHn5G4h06L&X-Amz-Signature=24d183af92af6cd44e8bf744d618489e91369eb3349519ffea7218db927fc857&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
