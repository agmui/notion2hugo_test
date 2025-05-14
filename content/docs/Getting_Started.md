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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMLJICTL%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIA0t7U3B7q7vQVI5IkjSCqZ7YqbyyUts%2Fj1rsBFi3M3fAiEA9x6DoPm2rTqU6LDZobWqotVYVLHoq9c2w8%2FteYURcuUq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDDS6Jn%2ByGLRCtUVvRyrcA%2FC36hvFfs6fccswp3Kar8%2BXtuEm%2BSGsL2n9d%2B39FfD4dmfJgmYfiyuu9T8hIaX82NJZwUX1bye6HFrfK8oKGP8wZpdWyA2FvFBSCZnIuYal3r1y%2F0uWP2JbFhju2QpPOKWlWkd2bcCvzTqrKoxe8N%2BpYL2Yo7WNMbY%2Fpc7hsm%2FqPqdYCrsy4%2FOxq0Qd%2Bjbqlk2ianCh3RBqqe9KBUQciolTfmfJpGGhj1%2FubiIVaOsBUcADOVtD9FiPOa1VDxuKxXyVGUQLo22Qk1Q8JT4LQGEDX3xUbnQOWJmAn2EjfNKHjugDYPKpMWtrrGMcnRLS2WKc7JSBU0mJqh0jp%2B6pDtT%2FraDfM2RGqRejwuMqjogpUx2vr%2Bn71t9UwInEqhs3Fv3P%2Fuy7bh6O9fvMgqmZrVWdH%2FcqP1P7hNRG7GSpgZsKmtmz2fDQRVpbToEgm4WMo72iAsJ2PdgPNWN2EmMTqNbva%2Fge9sjPcP0svH5QWDJs%2B0Mw3jaqmZNU9a3yoVMeqaodRYaXU0IE5bFp0Q0jmTNiUbN%2BuXURvPJACq1tiapWUk20rVSYh1%2BrSHuc%2BWnCcdZ6Vsxtr2sWFcT%2Fwdo10BJcw0kg7D%2FWF5vJMs3%2BlJeYqVTI6%2FNT4jn67hl7MPK4kcEGOqUBN%2Faj6ZCPCC8xunvlI6c3uD3ama64zeCdaG3SqK9HJ1FiO943v%2Bm6kZsgaV8VLsPbUQodrewVlKIy0BwcPdptQZN8QoOy2KFxzNYG2P4dUiTJ8kICzUb4abAAudWa8kDDPVldMrwbHKzunWN68%2BtJOAehoCpLdyKzX%2BhX5qoCpcLN5MyrWI1mXIIM%2Fs5D0sg3FhKqcU8NZtgi9Sgur0YsNz8XiPrY&X-Amz-Signature=199832050105febf8bc7209d40276ee12417f52495ceb0bb3cc274b61d0502f9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMLJICTL%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIA0t7U3B7q7vQVI5IkjSCqZ7YqbyyUts%2Fj1rsBFi3M3fAiEA9x6DoPm2rTqU6LDZobWqotVYVLHoq9c2w8%2FteYURcuUq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDDS6Jn%2ByGLRCtUVvRyrcA%2FC36hvFfs6fccswp3Kar8%2BXtuEm%2BSGsL2n9d%2B39FfD4dmfJgmYfiyuu9T8hIaX82NJZwUX1bye6HFrfK8oKGP8wZpdWyA2FvFBSCZnIuYal3r1y%2F0uWP2JbFhju2QpPOKWlWkd2bcCvzTqrKoxe8N%2BpYL2Yo7WNMbY%2Fpc7hsm%2FqPqdYCrsy4%2FOxq0Qd%2Bjbqlk2ianCh3RBqqe9KBUQciolTfmfJpGGhj1%2FubiIVaOsBUcADOVtD9FiPOa1VDxuKxXyVGUQLo22Qk1Q8JT4LQGEDX3xUbnQOWJmAn2EjfNKHjugDYPKpMWtrrGMcnRLS2WKc7JSBU0mJqh0jp%2B6pDtT%2FraDfM2RGqRejwuMqjogpUx2vr%2Bn71t9UwInEqhs3Fv3P%2Fuy7bh6O9fvMgqmZrVWdH%2FcqP1P7hNRG7GSpgZsKmtmz2fDQRVpbToEgm4WMo72iAsJ2PdgPNWN2EmMTqNbva%2Fge9sjPcP0svH5QWDJs%2B0Mw3jaqmZNU9a3yoVMeqaodRYaXU0IE5bFp0Q0jmTNiUbN%2BuXURvPJACq1tiapWUk20rVSYh1%2BrSHuc%2BWnCcdZ6Vsxtr2sWFcT%2Fwdo10BJcw0kg7D%2FWF5vJMs3%2BlJeYqVTI6%2FNT4jn67hl7MPK4kcEGOqUBN%2Faj6ZCPCC8xunvlI6c3uD3ama64zeCdaG3SqK9HJ1FiO943v%2Bm6kZsgaV8VLsPbUQodrewVlKIy0BwcPdptQZN8QoOy2KFxzNYG2P4dUiTJ8kICzUb4abAAudWa8kDDPVldMrwbHKzunWN68%2BtJOAehoCpLdyKzX%2BhX5qoCpcLN5MyrWI1mXIIM%2Fs5D0sg3FhKqcU8NZtgi9Sgur0YsNz8XiPrY&X-Amz-Signature=db151edf4d01493360d02cbcdd95841c74ebae4c74012c31d94b7cad5b90f913&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMLJICTL%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIA0t7U3B7q7vQVI5IkjSCqZ7YqbyyUts%2Fj1rsBFi3M3fAiEA9x6DoPm2rTqU6LDZobWqotVYVLHoq9c2w8%2FteYURcuUq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDDS6Jn%2ByGLRCtUVvRyrcA%2FC36hvFfs6fccswp3Kar8%2BXtuEm%2BSGsL2n9d%2B39FfD4dmfJgmYfiyuu9T8hIaX82NJZwUX1bye6HFrfK8oKGP8wZpdWyA2FvFBSCZnIuYal3r1y%2F0uWP2JbFhju2QpPOKWlWkd2bcCvzTqrKoxe8N%2BpYL2Yo7WNMbY%2Fpc7hsm%2FqPqdYCrsy4%2FOxq0Qd%2Bjbqlk2ianCh3RBqqe9KBUQciolTfmfJpGGhj1%2FubiIVaOsBUcADOVtD9FiPOa1VDxuKxXyVGUQLo22Qk1Q8JT4LQGEDX3xUbnQOWJmAn2EjfNKHjugDYPKpMWtrrGMcnRLS2WKc7JSBU0mJqh0jp%2B6pDtT%2FraDfM2RGqRejwuMqjogpUx2vr%2Bn71t9UwInEqhs3Fv3P%2Fuy7bh6O9fvMgqmZrVWdH%2FcqP1P7hNRG7GSpgZsKmtmz2fDQRVpbToEgm4WMo72iAsJ2PdgPNWN2EmMTqNbva%2Fge9sjPcP0svH5QWDJs%2B0Mw3jaqmZNU9a3yoVMeqaodRYaXU0IE5bFp0Q0jmTNiUbN%2BuXURvPJACq1tiapWUk20rVSYh1%2BrSHuc%2BWnCcdZ6Vsxtr2sWFcT%2Fwdo10BJcw0kg7D%2FWF5vJMs3%2BlJeYqVTI6%2FNT4jn67hl7MPK4kcEGOqUBN%2Faj6ZCPCC8xunvlI6c3uD3ama64zeCdaG3SqK9HJ1FiO943v%2Bm6kZsgaV8VLsPbUQodrewVlKIy0BwcPdptQZN8QoOy2KFxzNYG2P4dUiTJ8kICzUb4abAAudWa8kDDPVldMrwbHKzunWN68%2BtJOAehoCpLdyKzX%2BhX5qoCpcLN5MyrWI1mXIIM%2Fs5D0sg3FhKqcU8NZtgi9Sgur0YsNz8XiPrY&X-Amz-Signature=adbaa9c64b60658790fc3b0e7293ea626b748b5dc262b7e0394a2973153f5620&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHMR2H3R%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQD%2FFvRCqmqyRJxyhC3mmbjcDPXLCDimOuPmV%2FpfKi6%2B9AIhALJzotP9yXP4F12b9R5cW6VwE7ySeUN81tL5Fl2GCZ5TKv8DCBIQABoMNjM3NDIzMTgzODA1IgwdgEbpz5A5rym%2FO0kq3AOEUej2wSs9OuYNafMYqo4pyFxtyQl1t0NblS0sbRN%2BMhT2qG5v8tugEw4J1a74Jzt4XHpwhoN8jG0v8jGOBR4H5BMa%2Fe%2FaoLF%2FP%2FbI6MiX6NCVA8MBb8Zudld61nMFGnq9iP7ueqGK5e9%2B63EDuYRtk8sD4FWoGkJmMvU4oIW5%2FF2QZTsdF5Fz9AcpdRihZbJ%2B8i6Nc%2BhauwNEzIxaWoZOHTW3oif9w7bIMlVg5x0FeOoCZU6vlh5kJMRkKKjG8pLK8XbfsqaC%2FY0Ah6FEFK6MEuI3npqtwjZQYIlOV0mUztXxQxN5bKbT5t7lBEkx1D5jMkO3TW1TIvY1AZ52lwBjppEcC%2FWfAmvIfWheHEanClivLSAGXwQfOKyGzdj6y5Lpm%2FKIgmqaEu35ND430MMbVn%2BXM68ax8aNmydDAUBeleXixp2rDFT5a9mReRoiBgHgxNkuC6fKplXApsG0KhzEMkKPA6iDF4BdO1MfhA7sf2jjhoyAsZjZJq%2B3YpHfJa%2FlcNeg%2BM92ub%2FMwWIGk4vl3as2AvJOFjCu3DJermqisP9x9TDs7eDsaHwBHKBVl%2BxBYnh8RoSRe%2BAQOKBN0ZDQjNGaMGnW1byyKNyuNJA8juke5sZ5KHWPrtSjSzCsuJHBBjqkATVCfPLaxI41ibMn9So9K1%2F9O3b5CWkz74HVF%2Bk23%2BIK7DjjLo5KEYaih0VLOe4I1LnTSv4xdg2xn0DEmGR61Z6j9R0Ge%2FbnMXbE71SGQgMGTJ6ecMKx07mypg4TU%2BQtF8e4h5g2ydWIAsRWe%2BTVxq9i1S9KyinAzlVmJjvVv2aoTJdtHxGsnCM3imMpRR0SOo%2BkqHWRKKK8ynfFG6YTsmJPl5KD&X-Amz-Signature=5ae0e621ff93fce912742d76211c5a9e10ba93105f170189d32dc180babdccfc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWLRVL77%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T090930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIB4tXr3HcZzHrDjdEAD1ScW1%2BRN6qQFFRnoGLytwc%2FlsAiEA%2Bp4WzWK4ID8KDnVcSdF7T%2BspH948EJQiXCKTTxX7O%2BEq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDB01KBu2kercaBTxKCrcAw0QdkKxkvQ6IrPiojn3xY9vxvD7a1%2FzpVCVyGCZWrpQLuVoq34KThaZnJPiEH9OHXd5HNMCxn%2B2%2B1%2FOxTdr1Hnjz7iceHqxd1e3a2gbS8atF1uxEHtwQeIcs0J4TjMPqzDtuQpQs%2F%2BSYa05f%2FhFigq%2FAj0U4uTPfFyD7T4ykqmedsxlaAgIoy94%2Bjf6KUbSUdD8jqcouEjmkEehmhtv7LAcm%2FU3CTMhxu9vp1ODNXAUl7Gj88y%2FiWiUxXYltNcE44jUzuIxsRRaoM4m8L9HOd5m9iuhkaeQtSfDZgZUYeCNUBM93KS%2FnwEfdKLTn4fhUiILBFB5OpOz8FRLKV3hHF3Lm5MWWFS2SQdk8xw3l13vJ9r1CDwSOu49rGJO%2FyJTiiL6KAI50TXF2YMNHkBHK%2BB4Uqg7zo%2BpaQpv3ordC8fa9PowOeSIxcGGxccsKstvQqyHKPquza%2FzR7QOreXR%2BgPdjimhrwKkdrLnPTM9Y9bBpmRR0WEjkNRG2OUBApEkDy6INOKRjQggqmYgQ98V%2BxU0kFjhWr6qakoF%2FtxQ9FbJHoIFubmM1kcXTNAsfVzej1eV1Q%2Bt44F7eB6x19EzeOEH%2FJXvHGqEQnHSjtfD3%2FMSmbEsu7dlURfS5iFjMIi5kcEGOqUBfhyIR6GIVx%2B%2FnxoyOnVTLp15Bw0z8ypPy9pzEMTwVjg2V%2BaIuTAMwK9rgLbVOUE5fxJUoCiLBZ8hrZ1sWoVmJMR5EaFfETZKeXaWzgp%2FcZg21R4UnyFZO2TF0a89RDNOzgtcM8WTLuSmW4WcKlI9KOqvaa%2FuTYtzRJWrWNE6wX1V2sVZ0UEOVk%2BEVrwd126PmxNoOrmyA8Mhk03ixzMwxPiFnTfi&X-Amz-Signature=97e2e674f80bac8c9fca015ddbb8e4ab6179b4bec6e649550f74cb2fb9f2900c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMLJICTL%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIA0t7U3B7q7vQVI5IkjSCqZ7YqbyyUts%2Fj1rsBFi3M3fAiEA9x6DoPm2rTqU6LDZobWqotVYVLHoq9c2w8%2FteYURcuUq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDDS6Jn%2ByGLRCtUVvRyrcA%2FC36hvFfs6fccswp3Kar8%2BXtuEm%2BSGsL2n9d%2B39FfD4dmfJgmYfiyuu9T8hIaX82NJZwUX1bye6HFrfK8oKGP8wZpdWyA2FvFBSCZnIuYal3r1y%2F0uWP2JbFhju2QpPOKWlWkd2bcCvzTqrKoxe8N%2BpYL2Yo7WNMbY%2Fpc7hsm%2FqPqdYCrsy4%2FOxq0Qd%2Bjbqlk2ianCh3RBqqe9KBUQciolTfmfJpGGhj1%2FubiIVaOsBUcADOVtD9FiPOa1VDxuKxXyVGUQLo22Qk1Q8JT4LQGEDX3xUbnQOWJmAn2EjfNKHjugDYPKpMWtrrGMcnRLS2WKc7JSBU0mJqh0jp%2B6pDtT%2FraDfM2RGqRejwuMqjogpUx2vr%2Bn71t9UwInEqhs3Fv3P%2Fuy7bh6O9fvMgqmZrVWdH%2FcqP1P7hNRG7GSpgZsKmtmz2fDQRVpbToEgm4WMo72iAsJ2PdgPNWN2EmMTqNbva%2Fge9sjPcP0svH5QWDJs%2B0Mw3jaqmZNU9a3yoVMeqaodRYaXU0IE5bFp0Q0jmTNiUbN%2BuXURvPJACq1tiapWUk20rVSYh1%2BrSHuc%2BWnCcdZ6Vsxtr2sWFcT%2Fwdo10BJcw0kg7D%2FWF5vJMs3%2BlJeYqVTI6%2FNT4jn67hl7MPK4kcEGOqUBN%2Faj6ZCPCC8xunvlI6c3uD3ama64zeCdaG3SqK9HJ1FiO943v%2Bm6kZsgaV8VLsPbUQodrewVlKIy0BwcPdptQZN8QoOy2KFxzNYG2P4dUiTJ8kICzUb4abAAudWa8kDDPVldMrwbHKzunWN68%2BtJOAehoCpLdyKzX%2BhX5qoCpcLN5MyrWI1mXIIM%2Fs5D0sg3FhKqcU8NZtgi9Sgur0YsNz8XiPrY&X-Amz-Signature=935f90b0ef6ccaf80e50d9b1eb99bc9942b93a50362399d67a84d032569c53f0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
