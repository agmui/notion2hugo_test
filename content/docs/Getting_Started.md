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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH72OF3Q%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T090657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMTKbMDDOzDknpx4idlolBvRYsJc0Vsu30NMcC9KsQSQIgDRgNibB9YFWzBqs%2BL3rEquVWscAe8jDbsZUgYydlJ7cqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGh96EolYRZ5UDCyICrcAwbVkub0ZbeqGdFaiuZYXm19BWRmsVFolxnHRodM1cm7rt98e71oJgBRhDEyP27KozswE1RNqpAP%2BckvPeL8yEJlRXftUXGIsV%2BYXLkounld6Pl3kHQ5XEdxt7to%2BWPrvOpKNtS0oaB8PxGxFPAASKZI153%2F2OMP3L8vYIq0FPIED2OuwN6foQCj1ou3ekQtYZUbA%2BO8g44Qh%2F9TC63%2FadnJ%2BvZagXAxfL0ilrmy7E9qqQZ5%2FrSyq8as2t6A5pSbIkUmPEZy6T3gVFynNADrFkYosZ7VHTrMErhITS3N2raDRpZgWSm5wCQ50GdHTdv5SJDRKEpYWHXawRk2BRVAzKf1ebedy7gBzca4S4rMr7%2FmmdLgnT596KnCNInJHyCheJbnQTcMMxdu62NJD%2BPCOBoavYbushxaeoc%2BJDxOtKMWW83tOkc6Du0nkGEc2loz%2FD%2Bzd1quy6Q1gnT5PFsHitvDVe2TSWglhGj%2BTBhHGtyk81cBiUpyCk56eKB0nyVzsNINB9mBlLUnP%2Fm4%2FCuLHiWJKdS06UdL940xMB36AmrQoGT0P1cisSuOP%2BHhwRH%2Fq0ew7TEkP8Mhy3sBKhh%2B%2FOjoO0brx8NusNzgsIiV6h7q2B9a%2BFzX465XR6x0MLHH5b0GOqUBzhE2q%2F7B5v78O5xU9u8wtQL%2BqT3ZLBONIMMVxg%2FaYbnMhPNfnh6i54Rnd2e2UA%2B7U2A%2B2qLsBLcWwo6uRGBaHaE01DUpo3ahwuRXYtuSfohT4Mlhgl2yH6U23L%2FHSDXQdiWr0u0eax%2FujZUUXftVl4f8oGr%2F0obnadcjFRZeYscUpZdadv6AKdH5vabYVP3jgKCf35v9Vg4XObwdmGfDnw56%2FdxC&X-Amz-Signature=62c39cf03f9abbd18e5d253decb5b37c5d0c9e0aff772d3c9f65d9549e9ef00a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH72OF3Q%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T090657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMTKbMDDOzDknpx4idlolBvRYsJc0Vsu30NMcC9KsQSQIgDRgNibB9YFWzBqs%2BL3rEquVWscAe8jDbsZUgYydlJ7cqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGh96EolYRZ5UDCyICrcAwbVkub0ZbeqGdFaiuZYXm19BWRmsVFolxnHRodM1cm7rt98e71oJgBRhDEyP27KozswE1RNqpAP%2BckvPeL8yEJlRXftUXGIsV%2BYXLkounld6Pl3kHQ5XEdxt7to%2BWPrvOpKNtS0oaB8PxGxFPAASKZI153%2F2OMP3L8vYIq0FPIED2OuwN6foQCj1ou3ekQtYZUbA%2BO8g44Qh%2F9TC63%2FadnJ%2BvZagXAxfL0ilrmy7E9qqQZ5%2FrSyq8as2t6A5pSbIkUmPEZy6T3gVFynNADrFkYosZ7VHTrMErhITS3N2raDRpZgWSm5wCQ50GdHTdv5SJDRKEpYWHXawRk2BRVAzKf1ebedy7gBzca4S4rMr7%2FmmdLgnT596KnCNInJHyCheJbnQTcMMxdu62NJD%2BPCOBoavYbushxaeoc%2BJDxOtKMWW83tOkc6Du0nkGEc2loz%2FD%2Bzd1quy6Q1gnT5PFsHitvDVe2TSWglhGj%2BTBhHGtyk81cBiUpyCk56eKB0nyVzsNINB9mBlLUnP%2Fm4%2FCuLHiWJKdS06UdL940xMB36AmrQoGT0P1cisSuOP%2BHhwRH%2Fq0ew7TEkP8Mhy3sBKhh%2B%2FOjoO0brx8NusNzgsIiV6h7q2B9a%2BFzX465XR6x0MLHH5b0GOqUBzhE2q%2F7B5v78O5xU9u8wtQL%2BqT3ZLBONIMMVxg%2FaYbnMhPNfnh6i54Rnd2e2UA%2B7U2A%2B2qLsBLcWwo6uRGBaHaE01DUpo3ahwuRXYtuSfohT4Mlhgl2yH6U23L%2FHSDXQdiWr0u0eax%2FujZUUXftVl4f8oGr%2F0obnadcjFRZeYscUpZdadv6AKdH5vabYVP3jgKCf35v9Vg4XObwdmGfDnw56%2FdxC&X-Amz-Signature=8dff34de984efa2caf3885f9a342d4162f56682f0a05ad9461f12da56a2a4567&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IKKDKPP%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T090659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGPUdw1KeWa9Fha2uX1rEE1PWt5q4CyPJofg4fJhMqOAiAm7fBOD9C%2FXvX%2BIgxSYL4wXGZyHTtFck58Xy0AP0rHoiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO%2BDe90WR%2FfruwimMKtwD039QEb%2FCLm1f26MORvEqFRPREBuTVPMVuaIXBusTZlcKqm6GQa0LClsydBB92Dvb%2B%2F7Og2lx%2F63osl5N5vKsXwzOT1DICMyhcVcoxPyYUr0kRN8Cd%2FSlHUR2FOcdxWB%2FYTQu4bXEeYHcEiTa2QMXliJcsYm0GC7Kijf1%2FXALsoXQCROfYO0LRdlMjslofb9TIuaqF5dawDp0b0CncYv3BGaaI3dxLfVoZ67pjQVDOQJ3OQvFfNNYUnN%2FGOigFnKaeu1zlh0JIAsSktsvSW8Vs2XwENAf%2F3lPz7tJsW4VZIKXIfl1AXm8xaD%2F8h0MXdw4Ni54kG925yl1rbJsD73YCg0eHOGnOp%2BSSQx%2FPgpWzJkZwRwwoFi1VI1uPhSluL0KclV9bd5GqTdTut1UpvR%2BJkyYHlsQ2%2BH717OqoliUrpiRFWqlPdUu14f4cNjrZvmVLZDVZkqndDVP1oXsXEmuBmy4j9of8dwMfsc2h57dPk2uCsdarj3Hxtwsa6mitY7E6lw37q9ybm7PMB9HTyO9nfFYbe2j%2FSK3jT%2BY9zqinRnR24fyUQ0Ed46r29%2FUV1yWDZfAmbUn9twxVTrWKDM%2BPBgvKsrud4bF2Z2Z%2FoMz64M%2FXCtbaHBNPp7S9XswksflvQY6pgGLoqBziYTUE2lBRu7lFyjbtz9bnjtxnBXkDvt%2F6y5SqNjDahBkrNE1kY2MmgnKtdO3R0q4Nd6cBqtAu%2FXeDlIRBakAag1UAzJiga0ejJsiw0BtCu3%2BQE0La55SksL%2BgCAtZHCFyYaS2B0mkJ1CW7B6o2TZNS6Ly5V7LyFNZ08RPcmBiag%2FBsR6BZKH0nckVpMFpUtp76rMmzkSDCYRG42IS%2BvWIDsT&X-Amz-Signature=77e7e9b24fd555a1c2221ea2205d44991600077332719bec21ca0c17d66ece0f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG423QJS%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T090700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZZrGmGIJNBXBddxqJUjuHiC5N%2FqPdWH4U91dNK3lYuAIhAIprOeLBB1s70Of%2BlMxpyw7JM4KD%2BrIvIXdJEDlC02FeKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdGV7YLSiJcpuvK8Yq3ANLdaqJnmxY5F8sraLV54xFUScMauSJyTBPoFIgUvZbCmYtBCLl56wEzJ8RYJaCwYqDYjObL7RAGaTgcm7BlHrXTEuqsVAxB5zIjfs3vNVK4PoUno6IssavDRVlwVg61SaU4DUHaQ3SfJsdV9sK2T7dO5qVfh51QrbrsVE0mM8GFuwkGi3bb4biXeIOtzTdd32wNLpUErxyITwHpWQMD1CPhE72imXtHBfJ%2BZtOOMJ9AdjgYslL5Cb67lqAe7AezSEcDVGXXOtvYVEqt9zHe05Yqtt20xgw9i2OfXQsmokaRE2Cipjr6WIEeDiy2yh6vxKZcc1eXdCelnEkI2JAs4HADAewZ2Mkt%2Fjd4juvjGF4k06WDAAghnJBR8T9JksdN3AoYosMGopqozRcNEjBILZFtJuw30YcuOLWt3xfmPI9hfIvsWPj9kLMkzBs5086uD9OXQ0QewxtyfZGlbmgK0db%2BnyyvvaMLeVbT%2BcU4RKIDuUkMslCHoXb8TB34xIyprZruudU1bOwxKS%2B43aTN1ozCS5RQucXAEdwd3SHg9BVDa6B58KnAqgGgr438FztkgvoEDHM1iAi3d0LaCyqFFA834t9H5Fa%2Bs5EOiO%2Fb68s1IFFCBPXyFLe2N1r4TCtyOW9BjqkAb8xJEAKXITTCWXfgzzNge1I3amhtHyKzT7UxuQoSdMl4ZYlTW7vZIwnTb3FkW4%2BAb34fisI5XToVV3vxwRjvhJhtlkw28eLyMVEYJ2HJEoSNXU10SK1JBuDIm6lTxkFi50Tb8RrjKVPpkj00KgFkmWmMP2iCyY5jL0Q4MOXGsmwbZB0sLHMFP29IAB63AJ4My4PDXbqnM%2BBWLeMTaMHEZz6KlgA&X-Amz-Signature=8d0d31ab4811cb0a8e3b0245c8125c5aa02d70dc1ac828b48521dde6824ae163&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH72OF3Q%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T090657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMTKbMDDOzDknpx4idlolBvRYsJc0Vsu30NMcC9KsQSQIgDRgNibB9YFWzBqs%2BL3rEquVWscAe8jDbsZUgYydlJ7cqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGh96EolYRZ5UDCyICrcAwbVkub0ZbeqGdFaiuZYXm19BWRmsVFolxnHRodM1cm7rt98e71oJgBRhDEyP27KozswE1RNqpAP%2BckvPeL8yEJlRXftUXGIsV%2BYXLkounld6Pl3kHQ5XEdxt7to%2BWPrvOpKNtS0oaB8PxGxFPAASKZI153%2F2OMP3L8vYIq0FPIED2OuwN6foQCj1ou3ekQtYZUbA%2BO8g44Qh%2F9TC63%2FadnJ%2BvZagXAxfL0ilrmy7E9qqQZ5%2FrSyq8as2t6A5pSbIkUmPEZy6T3gVFynNADrFkYosZ7VHTrMErhITS3N2raDRpZgWSm5wCQ50GdHTdv5SJDRKEpYWHXawRk2BRVAzKf1ebedy7gBzca4S4rMr7%2FmmdLgnT596KnCNInJHyCheJbnQTcMMxdu62NJD%2BPCOBoavYbushxaeoc%2BJDxOtKMWW83tOkc6Du0nkGEc2loz%2FD%2Bzd1quy6Q1gnT5PFsHitvDVe2TSWglhGj%2BTBhHGtyk81cBiUpyCk56eKB0nyVzsNINB9mBlLUnP%2Fm4%2FCuLHiWJKdS06UdL940xMB36AmrQoGT0P1cisSuOP%2BHhwRH%2Fq0ew7TEkP8Mhy3sBKhh%2B%2FOjoO0brx8NusNzgsIiV6h7q2B9a%2BFzX465XR6x0MLHH5b0GOqUBzhE2q%2F7B5v78O5xU9u8wtQL%2BqT3ZLBONIMMVxg%2FaYbnMhPNfnh6i54Rnd2e2UA%2B7U2A%2B2qLsBLcWwo6uRGBaHaE01DUpo3ahwuRXYtuSfohT4Mlhgl2yH6U23L%2FHSDXQdiWr0u0eax%2FujZUUXftVl4f8oGr%2F0obnadcjFRZeYscUpZdadv6AKdH5vabYVP3jgKCf35v9Vg4XObwdmGfDnw56%2FdxC&X-Amz-Signature=deb9c7b51149542ba54d73e19baf3cc7e3444f5fccbc139313a26a2d5f1a8cef&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
