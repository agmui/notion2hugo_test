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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AVHDPOY%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCYT0fmzExmb0Pz4MA%2FDBS%2F92ihHMsv8JsbDn%2FyzqvhLwIhAI7uq3bZTt8UJ%2BZaV5h6CLIhFRitxoD5yrywZGvp4IglKv8DCHoQABoMNjM3NDIzMTgzODA1IgzAAuAmdX3TchE0MCIq3APyZrYNrCdBBeuY3A7VIMabl8OfA2LoA4gQINtokMraoYPkAsZOqJXYK8a%2FjYsp%2F5BpyQWeVzmMK9AriyOemJB1hnTUMdworHg9xQ1npgAeX5yXYAfuZ%2FjBN5rij%2FNJXfbkzwwW1lJcGDzBNFosNB5SKwwimW8VIHx4WeoEDteqhrDIIjUiYgXneiCsSvm1%2Ftp2e4NtOVFW6nYnK4EMkNuWEPy1QGzrMgMfSuh2zqp30DXJKhBPkmQ6rV%2F0Z9wXna3zv2%2B7z%2FbabeKgRQeXiovW8o6Ctpk42IGYh8wua1xO76lz67F7agnprwhvXuM%2BOhTsCzI%2BXA8C60wvVgpY5C6nd1xvVih2qi%2BmTaDOP3kExG6lbMXSfUgukGy2HoEeHOWT4%2FulNwsnHEhVyPznmPR3IgFHeoIUAp4m12T%2FDsCeGcTQtZrkdkf3rXwoDFbQ4lmdFbM6Y08WDp6P7a9DlXJnaeSshRR3qId129pdLhJ1wJjbMXyPxCrOAEyFHqDn0BP%2B6bAcLyYIf7cQthykiXhwEDD0O4GLzIqBGQc5piHiA2WEfLemkakCjGrt6lQO6vL2tCVGYY%2F%2FfOh3PxkDhVmZcUsZ2e5d7%2Bdss%2F%2BlOgncjVhS6rXlc6XhJxcczTDuoNW%2FBjqkAf5ynmNZBDbHpu84q0j4KL66zzK3GqryznLmFl9xfkYJi2YTsdrY2ccmsmwpXo55pBQxQd0n3UszXGyBlSeZfS9%2BWUsZSzSoJPA06g2humXeEcTcBXdmTZsdPVn9GwRJnylPGxwTRszeFN5PgunhzjFkZ92OJ9Vxcet%2FiEfNnXtwBPOBJPVwTxDW3F5O4a86Ib1Q41TCL%2BfFS%2B4a1W%2B7BofYmm%2Fr&X-Amz-Signature=feec1ca7812d48941a6aca6f3b7ccaf5189f5d9433db82cb3197c712e27ae663&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AVHDPOY%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCYT0fmzExmb0Pz4MA%2FDBS%2F92ihHMsv8JsbDn%2FyzqvhLwIhAI7uq3bZTt8UJ%2BZaV5h6CLIhFRitxoD5yrywZGvp4IglKv8DCHoQABoMNjM3NDIzMTgzODA1IgzAAuAmdX3TchE0MCIq3APyZrYNrCdBBeuY3A7VIMabl8OfA2LoA4gQINtokMraoYPkAsZOqJXYK8a%2FjYsp%2F5BpyQWeVzmMK9AriyOemJB1hnTUMdworHg9xQ1npgAeX5yXYAfuZ%2FjBN5rij%2FNJXfbkzwwW1lJcGDzBNFosNB5SKwwimW8VIHx4WeoEDteqhrDIIjUiYgXneiCsSvm1%2Ftp2e4NtOVFW6nYnK4EMkNuWEPy1QGzrMgMfSuh2zqp30DXJKhBPkmQ6rV%2F0Z9wXna3zv2%2B7z%2FbabeKgRQeXiovW8o6Ctpk42IGYh8wua1xO76lz67F7agnprwhvXuM%2BOhTsCzI%2BXA8C60wvVgpY5C6nd1xvVih2qi%2BmTaDOP3kExG6lbMXSfUgukGy2HoEeHOWT4%2FulNwsnHEhVyPznmPR3IgFHeoIUAp4m12T%2FDsCeGcTQtZrkdkf3rXwoDFbQ4lmdFbM6Y08WDp6P7a9DlXJnaeSshRR3qId129pdLhJ1wJjbMXyPxCrOAEyFHqDn0BP%2B6bAcLyYIf7cQthykiXhwEDD0O4GLzIqBGQc5piHiA2WEfLemkakCjGrt6lQO6vL2tCVGYY%2F%2FfOh3PxkDhVmZcUsZ2e5d7%2Bdss%2F%2BlOgncjVhS6rXlc6XhJxcczTDuoNW%2FBjqkAf5ynmNZBDbHpu84q0j4KL66zzK3GqryznLmFl9xfkYJi2YTsdrY2ccmsmwpXo55pBQxQd0n3UszXGyBlSeZfS9%2BWUsZSzSoJPA06g2humXeEcTcBXdmTZsdPVn9GwRJnylPGxwTRszeFN5PgunhzjFkZ92OJ9Vxcet%2FiEfNnXtwBPOBJPVwTxDW3F5O4a86Ib1Q41TCL%2BfFS%2B4a1W%2B7BofYmm%2Fr&X-Amz-Signature=40133e2a4e391324cb10a0575e89512ffbe108399f16827068be238f0b1f4ab2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TCBSVBR%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCICGtnG7Hd7fvLERU1qpvhxmMtpemypIsZF7JkEQ0evyQAiB2DK7Me2%2BV6%2F7YnWIhIql8g%2FEEcMxRiQruBDfMhLD%2Fjyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMOQRcOPglqx02r%2Bw1KtwDU93EfjpaC4RliGRrXo3RDgN%2Ff3FU3svpU6r75J5m%2BqMcQ4jQIQ%2BNZD79HnCH0naTm5lD6211JIR%2BG5RwtP38VyWMsupaj04CbzUTAFLG45gFgQs29WbzwydYVd%2Fbodrq0M25WXev93lMilDV5eEF1dXa06QbTS34wrixW3PUukADmu5sH%2FGOqnza6Zez%2BcHGzN6uChKVOZQcEIXwg%2B0%2FUACcJcXue2eEVMrRQy0S%2Bcg%2BLRG2U9j0HpRnTsCJb9k3UdLFpZzQkRljj6HBvZP%2BZCa5CPw7Con7mbHxy4bO4y%2FwQqNAtIiBPeKN3KghN%2F56WHkIYUoME8Jy%2FsPn%2B1JNHJwmQnpN0dRlnpkzI2Hc1ycPs7yeDjbNF0FHpwXRwDuTlurOoGLeTofvFZWW3kvOIQ7uSQ%2BAdQi8vjnAZU8hf0jEwHCvtg0%2B5rBWJ9APCUIIx3Nl%2BruKFcm2t7PTsxuBXfDXpO7GOw4pyjPdzUYCkEFKa18WPkFzooSpqnXOLY7j8qvKgzY5ldONnv9%2F90zfR4rfHd7CW7YhKjJ5rVkR4Csap7OAUofCL01bgBcJrzLAmvHEn9ir9asrHQ4onl41ryhlikOSyI2pPbguH%2BFXnED1sshWHQLrP12isdkwqKLVvwY6pgG4orIiYWVJ0JZGp26CTUd4eRJxRAJxpJ3BdIMjs4uX80uo9uIooAQcxmVqdZ1snwE5A4BJ2%2BbhwQVK2HyCHliB8AEaJ1LHvb%2FPdqVKSGtoKUmFAOH19C0V64gg1K4McFWursgnN9OGUzF%2BjTbVshZRdj%2FjK%2FGtc5Ck%2BQpYKWAtgY9%2BmopugLPORQ51tt06vQnpkeStw9FuFno4KitzIjEyW8Jz%2F5oM&X-Amz-Signature=efe5d227855360a0461215437463ecf51ca949efab23f1d32277a90aa4b2618b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MGLJ5GU%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIHIZLVD8zPMrvIzO2lF4X6xivsxFmq2V0KhG3tD94FSfAiEAlWZ9FWX6RhLfdKogz6YIUNpaR%2FzAXbSQuuT2jboyOPMq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMMOe4GGeOSuAIZqBircA%2BseqVnIOAgeEblGmgJ728s7Hzbk7QwWfBUWUBD0DJRDqOutTVtPOvZTnzO6WKDyN8togKLt%2F6E7OFKgj5csrFhHhFAXGpv9fzWVIOBNUfkH%2B6lHBs2qUPEgkNfmMoWL6e3gkTKp3F%2F17KwOrEuZ%2BC9WD3pHqnZHcqdjZfcA39U%2B%2FhPVY60QklCy4nf0iz5DgmooHEBvjml%2F6Ey4oVKSquIRDDcAtECL5kp%2Fd7YwuL6he%2FyfJXAU90LuK4Cjz1h14SrV4im77PT7KtF2z7P0BgOBzzfKnOrDRXAODCdbj1Q1DxoKiYQTawwROr0T13O7aWWf0D8vGiPR%2FMfuyypmcUUKrlfYPSYcE%2F%2FoYRj%2F2gYYE1q7OW7nl1qMz5H61b0GKaPVHueuRLE72C3njG8my1nRUCgXcpGRSTP6%2Bd0D9iKJO1XohN2D23%2BAGMKsCMtkt4rPNBdrFFhk%2F0carnGBYCuLaC1u11BMRXOTCg%2B3yGoo626bfgoNucN8xeXHXwhb5bHLevb8rvku%2FzvMkCHF%2B8UnWacgkiVi8G99us6Rlh5hQqhLIeq9dXImlvXNn7QmWfOqnV8IDa6VpAiUetWYNFC%2FUaw8URQe%2B%2BTZhIssjGMKIBbyAPjNm9h7cqclMMmh1b8GOqUBF6l0mJk1JoetMrBNSUc5l4Va0Sq11CGBrHzExxGfKnnqyqi3hv0lqxWYptPk70QE6ZpbZbJv1%2FBF2FokL%2BhEUrsY%2B9w1wMVXsJignrZmRjy1qQQgb%2F990qpI8SCWstmGR00KhYy3gIPPInyDoof%2BRxnhe0xRs%2Fk71hILB2229KxNeGTfBujxEuoh5eKsz5PQpKAxk7BqIZw%2BaAFFHU5B9qzOn3AX&X-Amz-Signature=65b11303b95c1a71b8c9bf013a6dc858ef523bc8acc0e68c9bf4735eebfa18f4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AVHDPOY%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCYT0fmzExmb0Pz4MA%2FDBS%2F92ihHMsv8JsbDn%2FyzqvhLwIhAI7uq3bZTt8UJ%2BZaV5h6CLIhFRitxoD5yrywZGvp4IglKv8DCHoQABoMNjM3NDIzMTgzODA1IgzAAuAmdX3TchE0MCIq3APyZrYNrCdBBeuY3A7VIMabl8OfA2LoA4gQINtokMraoYPkAsZOqJXYK8a%2FjYsp%2F5BpyQWeVzmMK9AriyOemJB1hnTUMdworHg9xQ1npgAeX5yXYAfuZ%2FjBN5rij%2FNJXfbkzwwW1lJcGDzBNFosNB5SKwwimW8VIHx4WeoEDteqhrDIIjUiYgXneiCsSvm1%2Ftp2e4NtOVFW6nYnK4EMkNuWEPy1QGzrMgMfSuh2zqp30DXJKhBPkmQ6rV%2F0Z9wXna3zv2%2B7z%2FbabeKgRQeXiovW8o6Ctpk42IGYh8wua1xO76lz67F7agnprwhvXuM%2BOhTsCzI%2BXA8C60wvVgpY5C6nd1xvVih2qi%2BmTaDOP3kExG6lbMXSfUgukGy2HoEeHOWT4%2FulNwsnHEhVyPznmPR3IgFHeoIUAp4m12T%2FDsCeGcTQtZrkdkf3rXwoDFbQ4lmdFbM6Y08WDp6P7a9DlXJnaeSshRR3qId129pdLhJ1wJjbMXyPxCrOAEyFHqDn0BP%2B6bAcLyYIf7cQthykiXhwEDD0O4GLzIqBGQc5piHiA2WEfLemkakCjGrt6lQO6vL2tCVGYY%2F%2FfOh3PxkDhVmZcUsZ2e5d7%2Bdss%2F%2BlOgncjVhS6rXlc6XhJxcczTDuoNW%2FBjqkAf5ynmNZBDbHpu84q0j4KL66zzK3GqryznLmFl9xfkYJi2YTsdrY2ccmsmwpXo55pBQxQd0n3UszXGyBlSeZfS9%2BWUsZSzSoJPA06g2humXeEcTcBXdmTZsdPVn9GwRJnylPGxwTRszeFN5PgunhzjFkZ92OJ9Vxcet%2FiEfNnXtwBPOBJPVwTxDW3F5O4a86Ib1Q41TCL%2BfFS%2B4a1W%2B7BofYmm%2Fr&X-Amz-Signature=a7edf5336a99d2b224351f4f892f3d5a3e32cc0a06bc5c72d8feb8fbf0ed63b6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
