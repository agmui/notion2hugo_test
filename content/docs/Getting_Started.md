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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHOEHLIX%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T110054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIExLS5J%2FUtAPLO8l4xhYAdzmGXjRAtJFiIvXo9xJ7kNEAiB0Ig%2BcASCAECZVGxzIZ0KP06gB39TrVq7uGHDqZncWayqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMssyPYyLgQX60CXOqKtwD9Y2UEcfRYz5FlRd75WeLSQAfxGtIb%2Bn1m%2B3JaL5qsA5upHgITi%2BOmEZMd%2BIeADP5P7JVgHMhsIIFDtmFOz4sLBB%2FPHnhVof0nS6ux0OcyVucT7PkwcMF4IEsClnMKYV0D0tN7HYMgdzsXWDoSBOpyioR62V%2BCkM58%2FBYkvt%2BWwfMZ0Y2vIblwCdqpKF68bzWIX3vr6V6cnodRikHGxoskviQDfP%2FRJAPHBwdc14AborN9lbL2Ut2F7ZkMOaALFZ7G0l6DNd2M%2FwfrD4xGzJYKuepal67PPVKNSBZWadYJKMIZUDhyVWaXIuJTEOz6C4L7P1J4fhG5iUH9jjmLdubZGSaZvR43WzJmXUba5%2FgNcDcfzDOFw%2BV%2B%2Fy4EF06noHQURtK47Zp%2B4GDz10R0PSk0dxYzIRv%2FCloRc1BX5UgtoQ8MIpE1Se3AIXN7GVWeUjX9dzVbFzk4wNUvTa8IkfGS4YQQgq8bRUIOAgjrhr6UcR6Iyk2KJotKHlfHmH8HMpeaLBw7jz%2B88900jfZzeaqQH1mz1t2f39MJx4O41vDK7XFtWIX%2BGgoOrzD4fVTbuYMrPQIG9pOF%2B7nkNBg9IEbeWezeoabaooSlQN9N%2FbpfQ7o0peuuKN6buIpTAkw0IOvvwY6pgF6CoPN3EdFZJPqcgjzGdSE9IXqIzF6hCVaAsa2B5%2Fw0TvHwtxtAR4v1TAv6wIAGZf0Gc1wSST9knmfYn3zvTv7KOkoodjGkUG0V3U7Q718Hlh2W9Lxw%2B2OFWv48TczBl1aI35k8mE0laa3UgmDmxn8QFCEoIoDH%2BiJDpwnXY3FDd3dHKQSB%2FSZxEzhJ4qBB1Jo%2FDpBRQYcuaNsBXwIyql6jCo3Cj0I&X-Amz-Signature=ff0eda00ca6afef434d1c99bbc366db1050b3f7abe9dde2902fb1cbc3b93a602&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHOEHLIX%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T110054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIExLS5J%2FUtAPLO8l4xhYAdzmGXjRAtJFiIvXo9xJ7kNEAiB0Ig%2BcASCAECZVGxzIZ0KP06gB39TrVq7uGHDqZncWayqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMssyPYyLgQX60CXOqKtwD9Y2UEcfRYz5FlRd75WeLSQAfxGtIb%2Bn1m%2B3JaL5qsA5upHgITi%2BOmEZMd%2BIeADP5P7JVgHMhsIIFDtmFOz4sLBB%2FPHnhVof0nS6ux0OcyVucT7PkwcMF4IEsClnMKYV0D0tN7HYMgdzsXWDoSBOpyioR62V%2BCkM58%2FBYkvt%2BWwfMZ0Y2vIblwCdqpKF68bzWIX3vr6V6cnodRikHGxoskviQDfP%2FRJAPHBwdc14AborN9lbL2Ut2F7ZkMOaALFZ7G0l6DNd2M%2FwfrD4xGzJYKuepal67PPVKNSBZWadYJKMIZUDhyVWaXIuJTEOz6C4L7P1J4fhG5iUH9jjmLdubZGSaZvR43WzJmXUba5%2FgNcDcfzDOFw%2BV%2B%2Fy4EF06noHQURtK47Zp%2B4GDz10R0PSk0dxYzIRv%2FCloRc1BX5UgtoQ8MIpE1Se3AIXN7GVWeUjX9dzVbFzk4wNUvTa8IkfGS4YQQgq8bRUIOAgjrhr6UcR6Iyk2KJotKHlfHmH8HMpeaLBw7jz%2B88900jfZzeaqQH1mz1t2f39MJx4O41vDK7XFtWIX%2BGgoOrzD4fVTbuYMrPQIG9pOF%2B7nkNBg9IEbeWezeoabaooSlQN9N%2FbpfQ7o0peuuKN6buIpTAkw0IOvvwY6pgF6CoPN3EdFZJPqcgjzGdSE9IXqIzF6hCVaAsa2B5%2Fw0TvHwtxtAR4v1TAv6wIAGZf0Gc1wSST9knmfYn3zvTv7KOkoodjGkUG0V3U7Q718Hlh2W9Lxw%2B2OFWv48TczBl1aI35k8mE0laa3UgmDmxn8QFCEoIoDH%2BiJDpwnXY3FDd3dHKQSB%2FSZxEzhJ4qBB1Jo%2FDpBRQYcuaNsBXwIyql6jCo3Cj0I&X-Amz-Signature=1bbe8275d83c943f224a2392546fe517be579560dea0da6914ab6a5bc9ae1d49&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6BD5P7Z%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T110059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIFMTrb1p%2FppXaq03b%2FvQMBExDGsDqYb8xcuKQoal4QenAiBlLjU%2Ftq7ggVHIjbvCbjtOOK4Nc%2Bw2wEMNraJxeFzdDSqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHlvw%2BEKh5Lv5HKWyKtwDJRAJS%2Bky00sqdtYMkI6z1w%2Bjyb8DDo1bjI5AXevuDvArvEoGovAVyz0I59l94DuPB8tk9mVP%2FVk9LSfRRSbsHuBErBblCsLm0KK8BKUX6KDrXVGewdki4ffKqhbY2DoqXFrR3rmODQQikWQ2%2BfN5fc8GVUtbsjend7EJwcjLlnX%2BvJHYRctkXs12tIOzszU2b4VnHoFOOXskrmQl7JhrvFKLrm4c41oMsVdeifaFBLEpIaiOsMssJgPjqIsTCzwpYfFPpnqv2D47HM8q5hLlLkOnFHFpz3SaKzqfUR4Ih8X0gjDshDSgmVg6RES5o%2FojevXqF3IRfIklNDoAL49cEj2vgI2OrNVjCGjaDHAAbT1kM2SN8KVk%2Fjt3buJeoKBxmiP6DDkXXZTShs1sXoRi6JPBuxaR3WNjtOkmtKmRDp%2Fb1G7UMnKO7dFh4gHByprOVGnWrDZGAAUccFeTm3DaOKmnL1pMzP%2F9ezHaKMV2nF1w9iqSQzGxElZ8T1XiqFd8mCabgfJ2egtNTKpNB65bEiiDJ2aFbNzBRb2J38iSA9hBEpJxT9Of%2B6XhXVDp8dcRQQ8aCZF%2BR0SvXHAPDS1C0WhvrgMsyxvDfoemLJxxpAILTy1HCqQ7v5621dowtoSvvwY6pgEiYVIi3caRJjMO%2F%2Fi7N58Pu6%2F0DSb2eEZxLCrJyo38M9LKGCPNxSF1bfEcEAuCT%2BBiaiD0J9wQsaeliO4rXlT9BH0XRK6VG1AF7dk7tSswV3EyEEx0zVkC1hhZAIOS2uwffnT3%2F0%2FnelIRgnb7sJXBXMpY43Tt%2BXoIlgft5o4k7fanILG7Ibuou6C3h6sU2XlQBxioaltu0pKM6dVEfDnaYE8RKZvC&X-Amz-Signature=6e25362370decd1bf0bd8f13ce7897b9509fc57b1f792d6e4e7e0ee9fbf40580&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FFZ4WVR%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T110059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCyk60GVhQ1uKBLRz%2BvQc3TVPx3JYzeJ1qUvGKeV%2B2HDwIgLtsYfAJuHfs0iQd4paoFh35T9WE2M50LEOpXRn1b0C0qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKy62WKNvTzUQ7hPJircA7uQVkoS85%2FnjB2nE4mHSPVBk9zSm6TLEsTkRLVG8ImUMagCyjYdHwbR5NXribRZI8IM%2BEFmQH8w6BnawDzpfaftfUZG%2FwMllYk18pJm6yK%2BWuotbHERzhAZYvTf%2BY%2B2mM%2BF15RhphdVU6YcJoqhYsCSCP7unE7uqMYV03sr6%2BBKm5ISuNCJSoafGiVB%2Fpuk%2F31kf%2Bbx2MPj0EElqPIFGRvh6ZtDTvgMPhiLpU15G65btQ7BLpcC9SPkBuRDYuVVGbwLHTWT4uhF4AraedWItvTwJEmp2mJcOhc1G4V4MNpL%2Fs3QsVq6zKpYw2th0s9GssdLejkTovXeCinznBZty2WnzCKML2XUh34Y6qruEHmWfPIBkWllX3v3jnfExhWVHsPsMB7Hht8LAwpmQQQ0yv%2FPVB0di1TbwJsOHv%2FypVB%2B%2Fxuf8AcSwIdCMhZnvHsWo8DP2Hj9me0B4fwNodgolwylylPR5Vb1Sy1En8m4%2Bq8DYjLheooQMzHooIC0qBGCU1%2FBhnuIXb1zcfcf%2BNgEbF0oCOHPg48h4FXRzELP%2BDIMg%2Bve3mhhRfcnWPxOwEuFxr%2BOo2Xp4x712CRfdqgLbKYcfnikJ3n0tcwanQ1aTCcoCjNQaF%2Ffno65uO6kMM2Dr78GOqUBRe%2FEBYyV80EGmmDbZBIrY%2B3B4m5aEO4Lil0peOoGpdxj%2F1MrV0GjSuMGtLuVmTsIHuoTBt0ylOOdoDZH%2FsR4iaAxfKPesZA5drCTzJQjL74HL%2FbJGMqm1UTYUMlyjA%2FpgxEbqmCE8ST%2F%2FGT%2BTHVwN%2FbKbLau7syyj75SP9eHPVrBArdM%2FimrEEcsCpfHcSUXZ%2Bb2IFYaoaFZwF1ORKSVRO4vWjhK&X-Amz-Signature=81435fed1beec6494315a00f35953b60417e44f9fec589a0f6bcaff7c2da7c5b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHOEHLIX%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T110054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIExLS5J%2FUtAPLO8l4xhYAdzmGXjRAtJFiIvXo9xJ7kNEAiB0Ig%2BcASCAECZVGxzIZ0KP06gB39TrVq7uGHDqZncWayqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMssyPYyLgQX60CXOqKtwD9Y2UEcfRYz5FlRd75WeLSQAfxGtIb%2Bn1m%2B3JaL5qsA5upHgITi%2BOmEZMd%2BIeADP5P7JVgHMhsIIFDtmFOz4sLBB%2FPHnhVof0nS6ux0OcyVucT7PkwcMF4IEsClnMKYV0D0tN7HYMgdzsXWDoSBOpyioR62V%2BCkM58%2FBYkvt%2BWwfMZ0Y2vIblwCdqpKF68bzWIX3vr6V6cnodRikHGxoskviQDfP%2FRJAPHBwdc14AborN9lbL2Ut2F7ZkMOaALFZ7G0l6DNd2M%2FwfrD4xGzJYKuepal67PPVKNSBZWadYJKMIZUDhyVWaXIuJTEOz6C4L7P1J4fhG5iUH9jjmLdubZGSaZvR43WzJmXUba5%2FgNcDcfzDOFw%2BV%2B%2Fy4EF06noHQURtK47Zp%2B4GDz10R0PSk0dxYzIRv%2FCloRc1BX5UgtoQ8MIpE1Se3AIXN7GVWeUjX9dzVbFzk4wNUvTa8IkfGS4YQQgq8bRUIOAgjrhr6UcR6Iyk2KJotKHlfHmH8HMpeaLBw7jz%2B88900jfZzeaqQH1mz1t2f39MJx4O41vDK7XFtWIX%2BGgoOrzD4fVTbuYMrPQIG9pOF%2B7nkNBg9IEbeWezeoabaooSlQN9N%2FbpfQ7o0peuuKN6buIpTAkw0IOvvwY6pgF6CoPN3EdFZJPqcgjzGdSE9IXqIzF6hCVaAsa2B5%2Fw0TvHwtxtAR4v1TAv6wIAGZf0Gc1wSST9knmfYn3zvTv7KOkoodjGkUG0V3U7Q718Hlh2W9Lxw%2B2OFWv48TczBl1aI35k8mE0laa3UgmDmxn8QFCEoIoDH%2BiJDpwnXY3FDd3dHKQSB%2FSZxEzhJ4qBB1Jo%2FDpBRQYcuaNsBXwIyql6jCo3Cj0I&X-Amz-Signature=b04cdf6565240473d4bb299b6d91b48aaace7136a62458a7075fb2a686ac5e4d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
