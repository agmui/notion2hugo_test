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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6WZR3F6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCbXCw5rcfpYeYT2eTyGD%2BVNPUpjP2YslVsE6UFEVN%2BEgIgAn6Wfl7G1JSFzEBcfDfoi3bCMSWiUV1VgjKq5lmbCX4q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDN6zIKw50vMA9lE6eircA%2FYs2FEyu6A8FBiMpYvl8dJ9NvxC7gjw47%2FJdWV5Jpz0g0Mowfmkmh4Uu8wdAUwcSiksShDQ6InhUez%2BtX7ycmzfmfiqc3tZeXGplbwypZZyq9OTF7aZ%2FutG9124sp9iSYHaQDIDTZwk61ZBhaIrMWOxXP88s0XbQum83AvLTVHqDFBUYxNt6hyAeHIaNlPJAt6PYaB%2BoGQxo3N04dxianAZ3fZOmdExhnybAjPjV9thEa7J8Kyax0osn9oA92AI%2Fqk3OT0hHeUqQhmQr2cddLjkRngXTJ3dUwknfPlPhrbUF9syRXegYiyDjBkNerrFiqz2k8iiXk%2BQpbv3DlL9bHOgcT6nb4LwtNakiGxjJD%2FJxocOgANK0JJk2cT3EX5H0zDpRQVAs4%2Bw2jF6J4D4vTKYsCOrQtC%2Bq0uTgZSeRbh3IazUiW8tMAYy3IpG4Kn9i68vNyDFj4pItou7Dv%2Fu7y%2B8fsng760Fbr%2FpVnHiS%2FxB48FV2MeYuHaesgw0ag%2FbZuntuBvT2aFXJ%2B0AW8Wm8fG1GkH%2F71Ix97Luwp9Mdi9xqp4dZA6cwDKhXWPVr3Cq%2B7TpiSZWEe9F20CcxDTQLwcsyPw982fnsKHh8orIqljYPmbGNqAaHLCS4Y8jMNONwcQGOqUB18Div9rAyzwdBRcU5QV4WJ4w%2Fz%2FlZkjWC6iSrZRen9yy324ucAj2cCMjI5KltXH9W0sQLYVMOg8ej1NmnJFfrSF5PzXpqkCz0t2GwKBXuNNixDM1zeURAXC3p2k4NLYtVrC53%2Bux2evNXkVqtm6j9VSiqOuCmFXOuopoRrKXq5BhU2g1xYvOMrEh3ChNQSdwf9LPRVfSudTkIebxXuGEIKuvOBcW&X-Amz-Signature=081eb374d70e01920c15ec5788468229f1608acc97acb34c243bb721e8f28453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6WZR3F6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCbXCw5rcfpYeYT2eTyGD%2BVNPUpjP2YslVsE6UFEVN%2BEgIgAn6Wfl7G1JSFzEBcfDfoi3bCMSWiUV1VgjKq5lmbCX4q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDN6zIKw50vMA9lE6eircA%2FYs2FEyu6A8FBiMpYvl8dJ9NvxC7gjw47%2FJdWV5Jpz0g0Mowfmkmh4Uu8wdAUwcSiksShDQ6InhUez%2BtX7ycmzfmfiqc3tZeXGplbwypZZyq9OTF7aZ%2FutG9124sp9iSYHaQDIDTZwk61ZBhaIrMWOxXP88s0XbQum83AvLTVHqDFBUYxNt6hyAeHIaNlPJAt6PYaB%2BoGQxo3N04dxianAZ3fZOmdExhnybAjPjV9thEa7J8Kyax0osn9oA92AI%2Fqk3OT0hHeUqQhmQr2cddLjkRngXTJ3dUwknfPlPhrbUF9syRXegYiyDjBkNerrFiqz2k8iiXk%2BQpbv3DlL9bHOgcT6nb4LwtNakiGxjJD%2FJxocOgANK0JJk2cT3EX5H0zDpRQVAs4%2Bw2jF6J4D4vTKYsCOrQtC%2Bq0uTgZSeRbh3IazUiW8tMAYy3IpG4Kn9i68vNyDFj4pItou7Dv%2Fu7y%2B8fsng760Fbr%2FpVnHiS%2FxB48FV2MeYuHaesgw0ag%2FbZuntuBvT2aFXJ%2B0AW8Wm8fG1GkH%2F71Ix97Luwp9Mdi9xqp4dZA6cwDKhXWPVr3Cq%2B7TpiSZWEe9F20CcxDTQLwcsyPw982fnsKHh8orIqljYPmbGNqAaHLCS4Y8jMNONwcQGOqUB18Div9rAyzwdBRcU5QV4WJ4w%2Fz%2FlZkjWC6iSrZRen9yy324ucAj2cCMjI5KltXH9W0sQLYVMOg8ej1NmnJFfrSF5PzXpqkCz0t2GwKBXuNNixDM1zeURAXC3p2k4NLYtVrC53%2Bux2evNXkVqtm6j9VSiqOuCmFXOuopoRrKXq5BhU2g1xYvOMrEh3ChNQSdwf9LPRVfSudTkIebxXuGEIKuvOBcW&X-Amz-Signature=a30e3695ad4a276515b0f3df59908786cb458ed15bb7b2b0c418247214d4d9b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6WZR3F6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCbXCw5rcfpYeYT2eTyGD%2BVNPUpjP2YslVsE6UFEVN%2BEgIgAn6Wfl7G1JSFzEBcfDfoi3bCMSWiUV1VgjKq5lmbCX4q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDN6zIKw50vMA9lE6eircA%2FYs2FEyu6A8FBiMpYvl8dJ9NvxC7gjw47%2FJdWV5Jpz0g0Mowfmkmh4Uu8wdAUwcSiksShDQ6InhUez%2BtX7ycmzfmfiqc3tZeXGplbwypZZyq9OTF7aZ%2FutG9124sp9iSYHaQDIDTZwk61ZBhaIrMWOxXP88s0XbQum83AvLTVHqDFBUYxNt6hyAeHIaNlPJAt6PYaB%2BoGQxo3N04dxianAZ3fZOmdExhnybAjPjV9thEa7J8Kyax0osn9oA92AI%2Fqk3OT0hHeUqQhmQr2cddLjkRngXTJ3dUwknfPlPhrbUF9syRXegYiyDjBkNerrFiqz2k8iiXk%2BQpbv3DlL9bHOgcT6nb4LwtNakiGxjJD%2FJxocOgANK0JJk2cT3EX5H0zDpRQVAs4%2Bw2jF6J4D4vTKYsCOrQtC%2Bq0uTgZSeRbh3IazUiW8tMAYy3IpG4Kn9i68vNyDFj4pItou7Dv%2Fu7y%2B8fsng760Fbr%2FpVnHiS%2FxB48FV2MeYuHaesgw0ag%2FbZuntuBvT2aFXJ%2B0AW8Wm8fG1GkH%2F71Ix97Luwp9Mdi9xqp4dZA6cwDKhXWPVr3Cq%2B7TpiSZWEe9F20CcxDTQLwcsyPw982fnsKHh8orIqljYPmbGNqAaHLCS4Y8jMNONwcQGOqUB18Div9rAyzwdBRcU5QV4WJ4w%2Fz%2FlZkjWC6iSrZRen9yy324ucAj2cCMjI5KltXH9W0sQLYVMOg8ej1NmnJFfrSF5PzXpqkCz0t2GwKBXuNNixDM1zeURAXC3p2k4NLYtVrC53%2Bux2evNXkVqtm6j9VSiqOuCmFXOuopoRrKXq5BhU2g1xYvOMrEh3ChNQSdwf9LPRVfSudTkIebxXuGEIKuvOBcW&X-Amz-Signature=4eb93f259425825fea576b28cb1aed53b4160eeeb8abd5265ae2c15d453a3d04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLQ5BPNJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCICs2CzkyKtYtfaMI5Hf4kp8zON4zJ2UUiBqJekgDwY6NAiBahQVnFuN0AtEDQz89fHe9pNndSyLoM8vrfWlVzZ5kSSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMV8VmYV6d9wgclSaRKtwDDxQFEx9NkYzqj1Ul2yj551lJcL%2F%2FekEATplrVSD65LlqimC1xKLUwytsQJEo%2BS%2BF6lAfWw84kNfgdF5h875bBuudP%2FMzL4se%2FVc3RzdM3Tii%2BYVo%2BI4Rnc%2BKK4Upgm81JEcg%2Fc6gZuIzeMHS3YIIqXv2fyQQWZ3A%2Bkrmj4FCq9cmVS6vEyW459x1N%2FgMJfN%2FZpieZKBp%2FLwRiSgzTCYWRYtDjKWdVqv3RMRxWYgFJLBqho%2F9nS07KJLqtz%2BHbLMXShGoD5SeQXQXmQMXB7y7j%2FWu2D88oAmPFP890a8toGJsdhppqgPAQILeiSesldA2qK%2FT14ggRV9R6cclNOaVWhpCKPVruxQOVxCgAtTMbYpjWCyK4SiogJqzxg2pDsCCQbmsEwWm8T3Gc4ObLUrCUri5Q1iRqQa3md6oJmxY2%2FaUNjfxym2u96XRsp7SDGyGLz2XQFYaBwmtY4o9LuAGczj3G3yjnRqpFtrV32v4nJON7u3riuP1KTasmZah2vgc5GXwkr2XjG2BRylz9EKBZja%2Fq%2BuCXf5aOx43UyIzLQ%2FDeEFa2%2FI%2BRmVv3XYrJmRT5uqmAbV%2BRJBeJRAk48MvlheKMw5%2FBUh2lTiS%2FoqyNab3XH1o9PlUcVlXooMwpo3BxAY6pgEkTBdwQkhHMQOwXcpiLPu8CJ5MGADvVWx%2F9rrCdT5TBkKCs85t6XMt290ho6nmguThd1uZg1y8anXatzqNd%2Fa1ijjhJpId7hZCt4wDsXRtu%2FOZ44SrwpR%2BjQqYewfciT436ACQjxtf2q26hgWiliY4aNHdlZRvf5k8K8Z33WCu0uB4CHYDB1NhEnC%2Fs9WqoWDGJ%2Bl3llljxtvjvpPkps0WZ5vRjv0m&X-Amz-Signature=e1365411fb69e842bbe521292aaefe940d0ca0ccea67a6138515c394085d3f07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7JAFY7L%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQC%2F1Mclg80uYVctmofkIRCmYy0TG0rVFhAy3LKrIRetRgIhAMbQMOEuK%2BDY%2Fun5xEdp%2FkFlLOCwCgjTyeMxw%2FVgc7FLKv8DCD8QABoMNjM3NDIzMTgzODA1Igy6ywS1RqsI6fB9pygq3AMHwt2hruCSJubE5DQE2JM9anpWcCHSRgneC857j2CUzS2zpUEciT4kfwvOP3zNhY92Ms9re5DV3i3qtt2wPPFmL7Sfrccq8Cs4fZWmP6KqZS5N%2BtkRK0HMybh7lTnTCok4wHl%2Fv%2FBzgWF8u0Q6NggFqIkEmTiK9uOaNgBoRc8LZ6%2F6Ay06rzaLFmiVg2IcffaVaQGfAD67%2F%2BiWqpBKAb5kM0kS%2FnmDKhgAxpPZOA70mE1y6pQpdVQhgYjhpxpaOR98i3KxrgaYLNMRfSEfRwHorZM00XCOf6MztliyE276ItJo%2B9WSjtwkHj83i7v4ga9aqGDxrqz2aE2WmICgKPLSyAvt6K6OQ8LlglOPk2kYMWL2olUBeufXbpHob0UTz7vRiTtk4s2Yct2tZow05EFJn%2FZovZVlyUSEcmYfyaKxZoLcEgKy05Usg2duRdSMEpv83ZQ3L%2FI2KnRqD7GANZ%2BgTpe7HUqCPkf%2B4APcwU3QrZiV%2BGwD153T7tqWZkVg82TeZBuNRnkT4ZDIAuIzuIR3Gi5PxhmdOqpsr68fnKJM0aKHQ%2FxFWdwiJCRuLqf2J7u7Clwk2SC96gGfJjHg3aJGnwJfmdlZtu1EUyrZ8KCONw3fn66ZnpfrJ5C%2FdjDdjcHEBjqkAVrfYtP%2FmCUuROq6NoKXyuoA3hpCX3dP%2F1VJHnUSEtd6n8UMjuLFWtv58IZ4B6juXgM2xZ0SrBG7l%2B2%2BfaW1DygFWmCexmDrJqfnmSlj7y3ee5aquRA9ncx7znymN%2FdwReE9K8riBmjV58IgX8saPqLrBI6DDHSv2l4nh9%2F%2BI86Xt1LgFEapE%2BAhsl62uQNVWqQeaMjEEdiiJPB58NttRDF5OJE1&X-Amz-Signature=9ecbd62e9d313e42ab7cacf93c34d420589740bf300d7969c10a5f09e43b70c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6WZR3F6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCbXCw5rcfpYeYT2eTyGD%2BVNPUpjP2YslVsE6UFEVN%2BEgIgAn6Wfl7G1JSFzEBcfDfoi3bCMSWiUV1VgjKq5lmbCX4q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDN6zIKw50vMA9lE6eircA%2FYs2FEyu6A8FBiMpYvl8dJ9NvxC7gjw47%2FJdWV5Jpz0g0Mowfmkmh4Uu8wdAUwcSiksShDQ6InhUez%2BtX7ycmzfmfiqc3tZeXGplbwypZZyq9OTF7aZ%2FutG9124sp9iSYHaQDIDTZwk61ZBhaIrMWOxXP88s0XbQum83AvLTVHqDFBUYxNt6hyAeHIaNlPJAt6PYaB%2BoGQxo3N04dxianAZ3fZOmdExhnybAjPjV9thEa7J8Kyax0osn9oA92AI%2Fqk3OT0hHeUqQhmQr2cddLjkRngXTJ3dUwknfPlPhrbUF9syRXegYiyDjBkNerrFiqz2k8iiXk%2BQpbv3DlL9bHOgcT6nb4LwtNakiGxjJD%2FJxocOgANK0JJk2cT3EX5H0zDpRQVAs4%2Bw2jF6J4D4vTKYsCOrQtC%2Bq0uTgZSeRbh3IazUiW8tMAYy3IpG4Kn9i68vNyDFj4pItou7Dv%2Fu7y%2B8fsng760Fbr%2FpVnHiS%2FxB48FV2MeYuHaesgw0ag%2FbZuntuBvT2aFXJ%2B0AW8Wm8fG1GkH%2F71Ix97Luwp9Mdi9xqp4dZA6cwDKhXWPVr3Cq%2B7TpiSZWEe9F20CcxDTQLwcsyPw982fnsKHh8orIqljYPmbGNqAaHLCS4Y8jMNONwcQGOqUB18Div9rAyzwdBRcU5QV4WJ4w%2Fz%2FlZkjWC6iSrZRen9yy324ucAj2cCMjI5KltXH9W0sQLYVMOg8ej1NmnJFfrSF5PzXpqkCz0t2GwKBXuNNixDM1zeURAXC3p2k4NLYtVrC53%2Bux2evNXkVqtm6j9VSiqOuCmFXOuopoRrKXq5BhU2g1xYvOMrEh3ChNQSdwf9LPRVfSudTkIebxXuGEIKuvOBcW&X-Amz-Signature=b3f16a52b477b7da61a5098a68ca441a932408b380f79938155801a2522e8f59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
