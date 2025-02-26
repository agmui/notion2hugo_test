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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626FCL3YK%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T110702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDgrIYLRtVqtru73BBu5PEXG7bJwqZlHHFN5wsVAAymrAiEAywKbi236aSjkSW5cnWolB6vEanKyQZ2bwunT3BqyP7Mq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPnVkt1aSh5G7WPAQCrcA1Lg0A0Zkr3t9ECqWRr8iRrF27JYOVFsUDcqclI9prFQfM0XRqv6M5RA17sa99x35EwT01mSDgUIMGCxhuZm4Vf3vy9v%2BJblNltHzIEHJjGZh9lgJnEYSWiYuHxqYo%2FkIBJcvEyMCbL5zSg%2FIKU0Qcp7Re7G1%2B%2F%2BtpgJ2smLiQhsteX%2F6LCcp6P34ge7zt%2BgkTbZ9AdnB6wARt2s%2B2X3nmJ8NuJpbA%2FI2RgJqtN3EW7Ggx0MqszGM2yQZty69BoswVZ8v0%2BtIuqvILqqjlLDmPFVIF%2BohicOQd0PHnSPxyGflFdHQrpHHKuXwKCuTOW0AXyOz7rMS1Zr%2BQtAzeowvyJccLdrclEMmvGdctDBdMd%2BfQDLmh9PQrtachsbAWXzNRVy0VoKAmnMLO%2BGt%2BPf%2FVRuM9AJWJHsYXojbh3eftmNY7RwCrIPvG4bp2lAUfRUzuI4pqC3XolDfeNWlRsDbFO%2FPKmibQb2m1089ul8Dd8VT88cRHCW6vHHbiVRk3ioYlfWLMBTnk1BHi%2BHHjLPwJTBmIQiLQJpF58H0bikEddinn9YdeN5bTIesCUcJCWyR%2FYKqVw7vzGND8KroB7Wrv5lfNb%2ButrI63EJ%2BX%2FqNjWYn70suCKNZvbWvwD2MNy%2F%2B70GOqUBhIVFVNxmdeRQi%2Bn%2B1kiVP1POX3Dlf%2FNAtmh%2BWfuq4jk8aKin%2FO6FFityLWRCy2e%2FSA5rsSl8AFUJ2VmN48k7zLm80UHftxuSVwo0FgI6gQ6k42glibKAypb9kqsmNIsbcWIHmxCiEvCgUDVS7Xu4g8%2B%2F6lkZFMkV%2BfhJ5umcs6BjMDHBS6YiwDqUoFs2LEAcIxLU0989vzEtnhePg%2BKWXs0rvhnR&X-Amz-Signature=bfed10affb63101688661122830d479b79fce1bac6ee2a72b007b040d6447844&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626FCL3YK%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T110702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDgrIYLRtVqtru73BBu5PEXG7bJwqZlHHFN5wsVAAymrAiEAywKbi236aSjkSW5cnWolB6vEanKyQZ2bwunT3BqyP7Mq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPnVkt1aSh5G7WPAQCrcA1Lg0A0Zkr3t9ECqWRr8iRrF27JYOVFsUDcqclI9prFQfM0XRqv6M5RA17sa99x35EwT01mSDgUIMGCxhuZm4Vf3vy9v%2BJblNltHzIEHJjGZh9lgJnEYSWiYuHxqYo%2FkIBJcvEyMCbL5zSg%2FIKU0Qcp7Re7G1%2B%2F%2BtpgJ2smLiQhsteX%2F6LCcp6P34ge7zt%2BgkTbZ9AdnB6wARt2s%2B2X3nmJ8NuJpbA%2FI2RgJqtN3EW7Ggx0MqszGM2yQZty69BoswVZ8v0%2BtIuqvILqqjlLDmPFVIF%2BohicOQd0PHnSPxyGflFdHQrpHHKuXwKCuTOW0AXyOz7rMS1Zr%2BQtAzeowvyJccLdrclEMmvGdctDBdMd%2BfQDLmh9PQrtachsbAWXzNRVy0VoKAmnMLO%2BGt%2BPf%2FVRuM9AJWJHsYXojbh3eftmNY7RwCrIPvG4bp2lAUfRUzuI4pqC3XolDfeNWlRsDbFO%2FPKmibQb2m1089ul8Dd8VT88cRHCW6vHHbiVRk3ioYlfWLMBTnk1BHi%2BHHjLPwJTBmIQiLQJpF58H0bikEddinn9YdeN5bTIesCUcJCWyR%2FYKqVw7vzGND8KroB7Wrv5lfNb%2ButrI63EJ%2BX%2FqNjWYn70suCKNZvbWvwD2MNy%2F%2B70GOqUBhIVFVNxmdeRQi%2Bn%2B1kiVP1POX3Dlf%2FNAtmh%2BWfuq4jk8aKin%2FO6FFityLWRCy2e%2FSA5rsSl8AFUJ2VmN48k7zLm80UHftxuSVwo0FgI6gQ6k42glibKAypb9kqsmNIsbcWIHmxCiEvCgUDVS7Xu4g8%2B%2F6lkZFMkV%2BfhJ5umcs6BjMDHBS6YiwDqUoFs2LEAcIxLU0989vzEtnhePg%2BKWXs0rvhnR&X-Amz-Signature=1a5292416fbaf2eed927f6b546f2c838431d15f712e8f3126e8f2cb921d4637a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL6UUB5I%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T110704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDqhY%2FiTSnyGrjPPV2%2Bpv4H6GUCfIaioDHnxykzvXEszAiEAo0SiOf4ZmbG2VpLMB5h%2Foa3nV9GCJ%2BeKdq17HcW1OQwq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDFgUFEi7pdrgdrvFeSrcAwq47H5cG1lRMmqVUNIfUjFRned41a2dqg%2B66FcaUVmxoTa3pK2rafWKJO2NYVlHlx4%2B6RiWv6F1emKomXAHBpyJ21qXT25iALFVkO1O8bi5iseks%2Bx8ZUuPJB3HR4oJ9O1TcmltGIemHdVyfSg1HQMfS5pj33Pxa6ggwEyZCXcskJJwANP%2F0u%2FbGhu4EdP1iRIisxockzutI4g9RyBuLwSTkkrJmj%2FuMXk2d7gt0hrn0D4XUaOUVQuA85cwDVg0w7xRWHH%2Bws%2Bf9EiAgybfZKBIKeefw%2Bw%2BR1HWGREScua7etDHZwGmUonk6DQK%2FwTKv05eAYw4JY5dnltb%2FpiFmpXsY%2BjrFKP4VsHl55EIoMJOytg5GQf%2FV8jIg4XS23C6g5phP49p5RCHgESO2F4Wt9oAw6QuIsxEJ0KNY9sarXTR5KH1ML08154XO2G1TZcn1u2oAtULHcyzQ%2FoMsvJGAlxCpgEAnZF%2BVuwTMVmDGv0erp2%2BN2LRGx1Mv0ls2BZJrt6S1MIf3EomEORLuJGwLgmnSj5A93a2G59%2BVspPwtc7zhqsayLvcYwgy7KJznPlP9KbsvSMZRJZnUHOuFAA50ElnRBdStvRvv9PhSiOyN%2BPgZPlVBMyk5gPi6z3MLe%2B%2B70GOqUBsb5q8Pe6s6jRBOPmrYWzlT1rRgKhzeaJ3lJEOd6yAjWc9MLGVC2qj9rS5dIGIQRMHc7wrtmiWwCmfG4%2BBkNF2cK85jwVwU%2B7TexPx%2FMQfgcJiffUILUn6F32cC0%2BtX4EjNyRsfnOw%2FjL%2BBw5Xy5wrYx%2FfrslhoOKLWUpm4YfYGyhNhNU6Rvz9ulMHQZtpcJ0AMWl0DnL0xJdjaLt53J%2BegNGaYcE&X-Amz-Signature=228262a9cf8a42acc626a793e571c007c6387c171cc424292e68dbba27381c94&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625W4IGC2%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T110704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQD1a78zVIj1%2BINiKjggBVwJt6ZCbsPHBPckW3wZ1rSVcgIgUb5bkrsspC3GXXOOi%2FQtbZak1F9oNBViei1Q8J%2BGiqYq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDBUjmHxAhRZWQCwGFSrcA40y4JMv2G1FqnidNSAUUBsOLNFa1yDZJGtUpESv19nxKNuym1Jdj32nJHd1T5t%2FFYRL%2FRSTgdEGX1aSV9B4%2Bx8TNb%2FThaQlfJI78MFu6Vqabf65iL4SUUAhon9%2FLBymZTfTUCa6ul%2FhR1IdoX%2ByiFvwNWfNV8RWS1J7VyqXwErSIWo7%2BA4wenb88tPh%2BMnGgyPw%2FVH9%2BjOWkHE4e4HcVWyBIpW%2BGeW0dXsLWSUohWNK3QIGQ%2FjRcoZGxD2UkSUxjsMTVXcAHQWMbJuyE%2BvYWx8%2BSdLYdR4V5zMJ%2FU1Vi6BYZ%2BWZK29ehXvtIH2giucnG6ILpZ4S4Ww0GspWx1VDETwuRpWKrWadtUSIut0VH6gHhgM5revUETN71y2QA5sU%2B%2B9v2MtjSt6q7UeD6SJAQWtOu%2Fru8RFe9aNPWobfvhFP1JSBU%2BJHfY48s35kH0K29uXvLD73l10EQAIZry%2FQbNm4RVJv4qI5HFDvGC4NAYZlIYMQauNkKlu7rVbVwtP6a8IjkuZpcel%2BAd8jflqsSakGtbk833YFyeVozNr4Hym%2B9WCmGVxwvyACSqOhg2dp9s8ASOTle%2F84v1pSVIGNOCvryO42fD3lOBQwjfHEPB%2BvESJY8m1ZPQFf%2B1VbMP6%2F%2B70GOqUB%2BRE%2B6jvblzzbZhT9Jn6LP887AOojN6hI7B3UXFY3JpiSZRt2aa%2FwrshHShIQ0gq0S4jn8lXxZSjyM3R0HwgvtQJopMGvtHLT%2BDFKKnAkGLyiKJcPOlInaFjGtIuPbxfMmlTueGautP0wPKDghV5xiTl%2FMcm8KwLo1FgoS6XqWC%2F4O9nwUIWvrTjOYhdP%2BKzDnxPpfNsCxtJfYO6eWMIk6hhOM%2BMK&X-Amz-Signature=d1ace49d1bd7da4ae3bb57dfaf052a5c49676249b528876aee11e96f3ffc94a9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626FCL3YK%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T110702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDgrIYLRtVqtru73BBu5PEXG7bJwqZlHHFN5wsVAAymrAiEAywKbi236aSjkSW5cnWolB6vEanKyQZ2bwunT3BqyP7Mq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPnVkt1aSh5G7WPAQCrcA1Lg0A0Zkr3t9ECqWRr8iRrF27JYOVFsUDcqclI9prFQfM0XRqv6M5RA17sa99x35EwT01mSDgUIMGCxhuZm4Vf3vy9v%2BJblNltHzIEHJjGZh9lgJnEYSWiYuHxqYo%2FkIBJcvEyMCbL5zSg%2FIKU0Qcp7Re7G1%2B%2F%2BtpgJ2smLiQhsteX%2F6LCcp6P34ge7zt%2BgkTbZ9AdnB6wARt2s%2B2X3nmJ8NuJpbA%2FI2RgJqtN3EW7Ggx0MqszGM2yQZty69BoswVZ8v0%2BtIuqvILqqjlLDmPFVIF%2BohicOQd0PHnSPxyGflFdHQrpHHKuXwKCuTOW0AXyOz7rMS1Zr%2BQtAzeowvyJccLdrclEMmvGdctDBdMd%2BfQDLmh9PQrtachsbAWXzNRVy0VoKAmnMLO%2BGt%2BPf%2FVRuM9AJWJHsYXojbh3eftmNY7RwCrIPvG4bp2lAUfRUzuI4pqC3XolDfeNWlRsDbFO%2FPKmibQb2m1089ul8Dd8VT88cRHCW6vHHbiVRk3ioYlfWLMBTnk1BHi%2BHHjLPwJTBmIQiLQJpF58H0bikEddinn9YdeN5bTIesCUcJCWyR%2FYKqVw7vzGND8KroB7Wrv5lfNb%2ButrI63EJ%2BX%2FqNjWYn70suCKNZvbWvwD2MNy%2F%2B70GOqUBhIVFVNxmdeRQi%2Bn%2B1kiVP1POX3Dlf%2FNAtmh%2BWfuq4jk8aKin%2FO6FFityLWRCy2e%2FSA5rsSl8AFUJ2VmN48k7zLm80UHftxuSVwo0FgI6gQ6k42glibKAypb9kqsmNIsbcWIHmxCiEvCgUDVS7Xu4g8%2B%2F6lkZFMkV%2BfhJ5umcs6BjMDHBS6YiwDqUoFs2LEAcIxLU0989vzEtnhePg%2BKWXs0rvhnR&X-Amz-Signature=d8cce12db8715af309ae0ddeb3546657fcc480e77f049af81106bf8410209cb7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
