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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662EAVJT6%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQClI3OMYJn%2B%2FMDZ2DsUcNBZUMKYbHuOTblH7mkHSrxPWAIgVbN8UDTnAIyHkI%2BdbfoGhhutWybs1jlGu7sF2YkG5KoqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAGeDG4mljlAGBPUircA1LKRx%2BP%2BqS5bIYow%2FLGAKHNyylE8eokjSgsD7vospl7q4OoyMoXZDSgLfxLdg%2FN6zIo%2ByupQhiWDHEED%2BMwYIVFBFLufMQYNZMJBr59ezJGjH9bKLAzZeYqYE08kiQ%2F0zg2%2F8UDS%2BXBqyp5a%2BUCiBBNZ0SMAbacjnSdqt1tS6o%2FV2gnVv3GNhuQRmmXCbgaFwYYKs%2F4wUgnGmwWvlXZJB3ytSJ2uOCJshjfhYvxVV9ItQ32BqG4AzGH1WUKwLYwYnJECLOq7opqGJRapcHkcVbzkp%2Bumurdc4jitKA5Me3KU6AmiPxfPTdXEIMZ1pnK7KrH0QNWtv6Qfx4Omu69pIrzicb34x6Wof81OuRJEL0irTB9yOJY3o%2B0RSCqs6cTP5vMy2cyRsYUk2Zia0Et2UBp1RC1iEiKFl3%2F%2BnoyJvun02650QMXE1FaU8Z4VM0Vphy6TPtiGTj5IhgRz%2BLApvEvwbda7Ofle8YjyXdlZU1j5Bexnd%2FsgDvDLDR21qdMBnwsMa4GpdIPg97n54XYvm1wB5x6G1ZxwPKKTmz0T0nQpLrFfBsWb3%2BEQ%2FyZ2Z3eq1cL9wHwptkt4In6AJ8vl%2FrVvq8ofsFr%2FL4%2FHEMlRe0%2FSdG1etOC3QoTY%2BLGML%2F24r8GOqUBuY7ISrjfWx7562P1W1V1W5e55qRjxEDOrNAAW499sufC%2FJlubviaIihAY1nIW3LwzuhSEjfI58zq0TsHHxzLQEIsuM16YL48iF7tzp3EU0Gt2NObYq18E5nVfmomAGAoqVJ%2BHQIENYTnegP%2FPPeK8hhUc474X5PVdGgZqOHyJ1hLLd%2B%2FDpsvv2jJDyYH%2FFHJGPTvc2lZ2F1%2BXpwyIzDwcEk2kPeL&X-Amz-Signature=18fe7066dd1ded9a29d6fef891a08c3e1c2b869f09a31947edf3756e818e6f6b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662EAVJT6%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQClI3OMYJn%2B%2FMDZ2DsUcNBZUMKYbHuOTblH7mkHSrxPWAIgVbN8UDTnAIyHkI%2BdbfoGhhutWybs1jlGu7sF2YkG5KoqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAGeDG4mljlAGBPUircA1LKRx%2BP%2BqS5bIYow%2FLGAKHNyylE8eokjSgsD7vospl7q4OoyMoXZDSgLfxLdg%2FN6zIo%2ByupQhiWDHEED%2BMwYIVFBFLufMQYNZMJBr59ezJGjH9bKLAzZeYqYE08kiQ%2F0zg2%2F8UDS%2BXBqyp5a%2BUCiBBNZ0SMAbacjnSdqt1tS6o%2FV2gnVv3GNhuQRmmXCbgaFwYYKs%2F4wUgnGmwWvlXZJB3ytSJ2uOCJshjfhYvxVV9ItQ32BqG4AzGH1WUKwLYwYnJECLOq7opqGJRapcHkcVbzkp%2Bumurdc4jitKA5Me3KU6AmiPxfPTdXEIMZ1pnK7KrH0QNWtv6Qfx4Omu69pIrzicb34x6Wof81OuRJEL0irTB9yOJY3o%2B0RSCqs6cTP5vMy2cyRsYUk2Zia0Et2UBp1RC1iEiKFl3%2F%2BnoyJvun02650QMXE1FaU8Z4VM0Vphy6TPtiGTj5IhgRz%2BLApvEvwbda7Ofle8YjyXdlZU1j5Bexnd%2FsgDvDLDR21qdMBnwsMa4GpdIPg97n54XYvm1wB5x6G1ZxwPKKTmz0T0nQpLrFfBsWb3%2BEQ%2FyZ2Z3eq1cL9wHwptkt4In6AJ8vl%2FrVvq8ofsFr%2FL4%2FHEMlRe0%2FSdG1etOC3QoTY%2BLGML%2F24r8GOqUBuY7ISrjfWx7562P1W1V1W5e55qRjxEDOrNAAW499sufC%2FJlubviaIihAY1nIW3LwzuhSEjfI58zq0TsHHxzLQEIsuM16YL48iF7tzp3EU0Gt2NObYq18E5nVfmomAGAoqVJ%2BHQIENYTnegP%2FPPeK8hhUc474X5PVdGgZqOHyJ1hLLd%2B%2FDpsvv2jJDyYH%2FFHJGPTvc2lZ2F1%2BXpwyIzDwcEk2kPeL&X-Amz-Signature=c9c71177202512d2a5d7f740ff450f1c4f04827b08c2dabbf35f6a8ed580248e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCSWKMIN%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIEsc5wd9C6vxym5d40moffrHKSuJwcvwMp8UfvU5x2l7AiA6979uiEZm8UBuDH83EdbcjT4%2FeoOVh3OIDIbJM%2FBoHiqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf6ne5i3Kqk%2BZTTn7KtwDmL68ojdtQ7wzTuLzACBxBZoqi0t1gWeKXyGhIeThsvjZK%2FMuwO0%2B8Dm8Z35G8CJHWPtABx05dc1DV8NCfR6%2Fea2vhbFhNFSqHAxzO9GlEpBxIbLs1MRdLcS3g5yJpTtbGFHrgxsUap9RdjgE63SA2PcDc1mKMLZUVGZHBEbQfPBbksAfXpdzyn%2BAlWDJm8lRV3eiPwFFKoUJcmO8q0KxOJztDH53pGzQtxlHRe9ozm41sAgZgFx9r0H9RNjaWamSpMF9SKp5idq8BqLw6Xg4jUdCiS11xROZvCqge5R8sN1gPl6SfDVQ2hjH9ys%2FdB6KEy5lPsuqt%2Fic0%2F2fStQMxJjLwzYiXiD%2BqORmVu0CNp82e%2BP24FBQVW9lMRTlSIaVGlP52ljyI6jLMfW8OWy4im2dSC39iGmYioX%2Fmfc3bgplyGe5qZyIwa1RhCgJ6421IdQoaqLWB8QZtxPtz%2Bkp%2FbNYxxUXtazzEO3tfy8GCToA4ksZDcgtpweZRMwZltIYGIwjbJLSoYsA6ckMPAb9Qp1iu5iwi8WW2ImEVoG0%2BPdfSlpsx8aSSQLz2mcvr%2FkrCg1LWrH9zlRf%2Brklcns3x3GvgA%2Bwuzhgveb3FhwSOtV3jQPXx57BhEIX7OQw6fbivwY6pgFpGGUaPIWlrWBxcGPJhujlBv1Il6QEeQaSw9G6v3Tih8egYrsW%2FfZBp1GpSD1clGqWI7juYWJHgVFBjQKzG2sD0irpnE15i9WUq4l14otoKhcytaxfSpZnOMjikbovmkfLN5TXPYO%2FhCgKWreYur17qBD0jSySF%2BW%2Bu6GQNWZ4IEpsdDYt6Ju0GSqauvYxHaZQhRKMUJPwUkuEaY7kmShh%2BZTRc56c&X-Amz-Signature=c94b1ef24de4bd81cfe4113e24cc91d15746419e482776e72c72089bdff9077d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QMXBEEC%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDqfCciRSPa5eIcAV6lV%2FtoXIYlAoFQWAAqrvJRMpVFYAIhAO5PAAcpwPWE9yscVtUZKJam7bACUxTC1GPmdL7QDKnnKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igya9Jxeh0gXBwY15Lgq3ANsRCwPyyekb%2F9prG%2B1dZOucxbxCkOOk8sGVpuJaEPgidL5eGnlEXXwXVWGpICVS%2BwqDOZ1ptCZA2X7wuV6mNP9ptAhF%2BsxPf4RrgCE3n6e5RP83XX0yKGtBfxZlIL9fgeJaIy%2B3UgGGmUM1K7xydyPzOZPVV2C3TIrtFReA9k%2Ff4GfiRYYS9TozrkMGMhFa2D4l9dlLC5U0l1YO%2BOITxySk5%2BBMbnRMxWxcrLdBC%2B6%2BkOH7NQHgVcm9bNfodOCYaD5AP1%2FCCSk6viJpNjEjEHld71vjf6RScXZ0l1aqqhRLyZNYaTk2wD2Jh06MZcVxP5cUREL%2BOW71RQP8jBOH8ED5thkmmBuckyZ73bcNwLSsVs2A3Ua%2FtrwHkCHVnyaG8bzPadAfsvqEhHAGMV5eN9mviYEMSjzK0BlJaQJ7HX2RCrVNkpZeipe%2B1APV18quhbZggGfW%2FZ4SbhXh8CV6njVjurSN6DFlhmnNcb2bzvepXJPq4hOhENTIAFk4HkDUTtAiNM4%2FFGVlUc17tu%2FAgWBatwgJmoSGR26qaYttDyJNk8c9EMBLqcThH0GxLPz%2FibSS8RAffLaKk2zEM85HLlq%2ByT6SKT%2FGxiEKOnK4c3v3X58jnF8DbsIXvnZDDC79uK%2FBjqkAZfV%2FHP%2FwATMfvpaAhR%2BMMrY%2BtZeL3LCs9SNairSVlbL9bL6WZvU0jBb73kI5PtTM5H8%2FyH0PyNjD1tFUnN5Og4rG1%2BgxIBI%2BB00TS0It5Pf7HXhNpkxfBCIpJOZPEiz9qxPGAswjarwxWfpT9qyvlEqTTmYvItclvmGfbnhJySqfc5sh7QJzQbqK%2B7yTdipwMy2APpSNRF9i5HQFW7SUqC%2FrHd4&X-Amz-Signature=0aa017d5bbe79e020683aeb90e75e3572d11eabe1ca54a14edea07a5f7a2e568&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662EAVJT6%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQClI3OMYJn%2B%2FMDZ2DsUcNBZUMKYbHuOTblH7mkHSrxPWAIgVbN8UDTnAIyHkI%2BdbfoGhhutWybs1jlGu7sF2YkG5KoqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAGeDG4mljlAGBPUircA1LKRx%2BP%2BqS5bIYow%2FLGAKHNyylE8eokjSgsD7vospl7q4OoyMoXZDSgLfxLdg%2FN6zIo%2ByupQhiWDHEED%2BMwYIVFBFLufMQYNZMJBr59ezJGjH9bKLAzZeYqYE08kiQ%2F0zg2%2F8UDS%2BXBqyp5a%2BUCiBBNZ0SMAbacjnSdqt1tS6o%2FV2gnVv3GNhuQRmmXCbgaFwYYKs%2F4wUgnGmwWvlXZJB3ytSJ2uOCJshjfhYvxVV9ItQ32BqG4AzGH1WUKwLYwYnJECLOq7opqGJRapcHkcVbzkp%2Bumurdc4jitKA5Me3KU6AmiPxfPTdXEIMZ1pnK7KrH0QNWtv6Qfx4Omu69pIrzicb34x6Wof81OuRJEL0irTB9yOJY3o%2B0RSCqs6cTP5vMy2cyRsYUk2Zia0Et2UBp1RC1iEiKFl3%2F%2BnoyJvun02650QMXE1FaU8Z4VM0Vphy6TPtiGTj5IhgRz%2BLApvEvwbda7Ofle8YjyXdlZU1j5Bexnd%2FsgDvDLDR21qdMBnwsMa4GpdIPg97n54XYvm1wB5x6G1ZxwPKKTmz0T0nQpLrFfBsWb3%2BEQ%2FyZ2Z3eq1cL9wHwptkt4In6AJ8vl%2FrVvq8ofsFr%2FL4%2FHEMlRe0%2FSdG1etOC3QoTY%2BLGML%2F24r8GOqUBuY7ISrjfWx7562P1W1V1W5e55qRjxEDOrNAAW499sufC%2FJlubviaIihAY1nIW3LwzuhSEjfI58zq0TsHHxzLQEIsuM16YL48iF7tzp3EU0Gt2NObYq18E5nVfmomAGAoqVJ%2BHQIENYTnegP%2FPPeK8hhUc474X5PVdGgZqOHyJ1hLLd%2B%2FDpsvv2jJDyYH%2FFHJGPTvc2lZ2F1%2BXpwyIzDwcEk2kPeL&X-Amz-Signature=15031f15085b15b0abde78f3752ead7302f29ff87e4c9474d4bd78d83d019cd3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
