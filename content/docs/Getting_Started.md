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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634EMEQFM%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfhZUuDSVwpN%2FDr%2FcLUXqW1Wqq%2Ft2Ecpzw6SOIke5f%2FAiEAxaep8iicHS5BsdSHpTV5PIRc9q8Tfr0jYTdoRAacNs0qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMYyxkMZPm17ferCMCrcAzaqiKelC22upr0Mgihs18LaV37vi2pyf4EmUpXZE4UGy1EFGXdRKZWVfcYPsc5EL4l%2Bm2W8ddJwS5JbWnp72b31iu1Es%2FXLDrJ0niX7hkwAdfXuHyo%2FMZ5gy753qNmw7i4TNMC5KLbpVy4FW4eXWuXwWcQxsoggGNrVAx2hkneUfQldhqBaNBOf8xJ3yceiYCyGmQ%2FNl%2BQilJbffOw5WIQhUwpPklgXd8qlnWkPEsYJIx4jJxGmsYohdSM2ohIA%2FfQiapD23U%2FT2C1tFzda3GpHI5Iuv7L%2F05M3CnLqq7N%2BGHmIIR%2BhcBMrFzCfSBRLItmrWmMFMoNVku6yLjQe%2FdXB6UdklbwNi2L2gFdxmcuWZ70grv9%2FvC5nYwPO5FAP5xczVT77t9p1h%2BsicovkGbNkJR12Sh9XgdxozzUv%2B9wmPWrxMpq6uNNPYkvI5fJfolKb3v5n3P9lsl18k7ioK94BDoMAPUUJY3YibrUACOiAVmR6KFIfqbnlhnd%2FQCswLDRcvQDfJadZRgKen4zIVXH%2BalrUfAWPziEf7%2BVU096iHc%2FvAq5sWJyxqWo%2F%2BsmpNNd6sxq3ADNioh3VfZUFcbj5IzApM7l4%2FFcsSZ0XexeNOE6gl7TmFRUDJywAMM7Ih84GOqUBUfdGoYaZTsmi0ZYwem5sYBMCakGYsVtTFmZ%2Bf7gp6SksP2MSyV9MzLmQrOWg3D9VR6PyOukE798oZZVdEabgU6XzACLo8wYM27903roP4fAFGnNfPNThNORcARrC3qZxlGgydbSoqaDVfcVyKED23CDtWw5hNkIWcx8wldOlf%2FJnORQAwjOXqA7Ym49v%2BtuZANO01re1r%2BiRVTdApSU3I9XemFvT&X-Amz-Signature=ff4243982eb03306bdf6891f20dba2c66089c7994b1277d78faf2e357e9f0308&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634EMEQFM%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfhZUuDSVwpN%2FDr%2FcLUXqW1Wqq%2Ft2Ecpzw6SOIke5f%2FAiEAxaep8iicHS5BsdSHpTV5PIRc9q8Tfr0jYTdoRAacNs0qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMYyxkMZPm17ferCMCrcAzaqiKelC22upr0Mgihs18LaV37vi2pyf4EmUpXZE4UGy1EFGXdRKZWVfcYPsc5EL4l%2Bm2W8ddJwS5JbWnp72b31iu1Es%2FXLDrJ0niX7hkwAdfXuHyo%2FMZ5gy753qNmw7i4TNMC5KLbpVy4FW4eXWuXwWcQxsoggGNrVAx2hkneUfQldhqBaNBOf8xJ3yceiYCyGmQ%2FNl%2BQilJbffOw5WIQhUwpPklgXd8qlnWkPEsYJIx4jJxGmsYohdSM2ohIA%2FfQiapD23U%2FT2C1tFzda3GpHI5Iuv7L%2F05M3CnLqq7N%2BGHmIIR%2BhcBMrFzCfSBRLItmrWmMFMoNVku6yLjQe%2FdXB6UdklbwNi2L2gFdxmcuWZ70grv9%2FvC5nYwPO5FAP5xczVT77t9p1h%2BsicovkGbNkJR12Sh9XgdxozzUv%2B9wmPWrxMpq6uNNPYkvI5fJfolKb3v5n3P9lsl18k7ioK94BDoMAPUUJY3YibrUACOiAVmR6KFIfqbnlhnd%2FQCswLDRcvQDfJadZRgKen4zIVXH%2BalrUfAWPziEf7%2BVU096iHc%2FvAq5sWJyxqWo%2F%2BsmpNNd6sxq3ADNioh3VfZUFcbj5IzApM7l4%2FFcsSZ0XexeNOE6gl7TmFRUDJywAMM7Ih84GOqUBUfdGoYaZTsmi0ZYwem5sYBMCakGYsVtTFmZ%2Bf7gp6SksP2MSyV9MzLmQrOWg3D9VR6PyOukE798oZZVdEabgU6XzACLo8wYM27903roP4fAFGnNfPNThNORcARrC3qZxlGgydbSoqaDVfcVyKED23CDtWw5hNkIWcx8wldOlf%2FJnORQAwjOXqA7Ym49v%2BtuZANO01re1r%2BiRVTdApSU3I9XemFvT&X-Amz-Signature=0874243f71e43369d2e77a9d3ecf9c7d1bcf00a6b0c882f5e2e682f4939caf0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634EMEQFM%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfhZUuDSVwpN%2FDr%2FcLUXqW1Wqq%2Ft2Ecpzw6SOIke5f%2FAiEAxaep8iicHS5BsdSHpTV5PIRc9q8Tfr0jYTdoRAacNs0qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMYyxkMZPm17ferCMCrcAzaqiKelC22upr0Mgihs18LaV37vi2pyf4EmUpXZE4UGy1EFGXdRKZWVfcYPsc5EL4l%2Bm2W8ddJwS5JbWnp72b31iu1Es%2FXLDrJ0niX7hkwAdfXuHyo%2FMZ5gy753qNmw7i4TNMC5KLbpVy4FW4eXWuXwWcQxsoggGNrVAx2hkneUfQldhqBaNBOf8xJ3yceiYCyGmQ%2FNl%2BQilJbffOw5WIQhUwpPklgXd8qlnWkPEsYJIx4jJxGmsYohdSM2ohIA%2FfQiapD23U%2FT2C1tFzda3GpHI5Iuv7L%2F05M3CnLqq7N%2BGHmIIR%2BhcBMrFzCfSBRLItmrWmMFMoNVku6yLjQe%2FdXB6UdklbwNi2L2gFdxmcuWZ70grv9%2FvC5nYwPO5FAP5xczVT77t9p1h%2BsicovkGbNkJR12Sh9XgdxozzUv%2B9wmPWrxMpq6uNNPYkvI5fJfolKb3v5n3P9lsl18k7ioK94BDoMAPUUJY3YibrUACOiAVmR6KFIfqbnlhnd%2FQCswLDRcvQDfJadZRgKen4zIVXH%2BalrUfAWPziEf7%2BVU096iHc%2FvAq5sWJyxqWo%2F%2BsmpNNd6sxq3ADNioh3VfZUFcbj5IzApM7l4%2FFcsSZ0XexeNOE6gl7TmFRUDJywAMM7Ih84GOqUBUfdGoYaZTsmi0ZYwem5sYBMCakGYsVtTFmZ%2Bf7gp6SksP2MSyV9MzLmQrOWg3D9VR6PyOukE798oZZVdEabgU6XzACLo8wYM27903roP4fAFGnNfPNThNORcARrC3qZxlGgydbSoqaDVfcVyKED23CDtWw5hNkIWcx8wldOlf%2FJnORQAwjOXqA7Ym49v%2BtuZANO01re1r%2BiRVTdApSU3I9XemFvT&X-Amz-Signature=d0477e388e3fd7def1fb6b593c556b00b43aca7b32273d1c3aabb50a68d1e30f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUSVGQK7%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB6EKnNkv7cV%2FR5yBtgj6wRnh9VVgaY0%2BjLg3SxctAFwIgYAigWTEjqO9jURBIc7Pc7PiElipHktaklOa4Pz84418qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYMFjrKu87QRRbK%2BircA9BCMTABIMc2RwCgiT8ecqYzNykXmrerMns444561U%2F6Yb9ce3nnIDx%2BIs%2Bxj98L2U3nVKKddE6oSG4dLnPz8p92%2BbprF5LUl5Xi9WEpZ2w6Kvoko5UxZqxJ1Fv3j9X4T8BOzohDtCh5TM5H4wJ8cD0uFMYVeIhOHq3siBYUcp4nfK1TQj9AnwJ1Ao0fpiMhxQVLdUSpmsVNRweYF8PbrG8TAe9qVb4S1cDjv6MzHQO2ijDDrelFLVG0QkTfv0gMn9sDRCw6f41jDt8f4DvqyBeZm3jULWhuBJcfBT9nJgvgI%2FeJmY2PxjVLfSAjBNBctUWIff1zJTgvozBIXlA%2BmWaR0jp964fE%2B973qqpF8WtasH5Vx%2FqlNGGptv0U%2BSUt%2BV8wP%2B76cvUZfzfFSoN51BH%2BiZK19a7exYRhTl4v1aa5kSSIJWSttKzlr0rg1YO26XUDwYjWpz6Q6CSU6X%2F1n%2BAwhvyIqIQUd7y9VZRqjqr8le0ZwDlkhuLicVHndWiKtD6pE3lPyH%2Bj5SM7Q%2FRxKPlCkUMVnayBSIz4fACIJz1hlYtYIg53guQikAP2imGSF0j7trAUWP%2BM8OKeb7zLngUTytq3yrWkwvCkCCn71%2Bs2tgInVsTbatVX%2BW9UMK3Jh84GOqUBYp%2FQQq%2BVnp3gCKMZxska58u25Xpnru8wBnu%2F5YnJJep%2BvJRvEbXJ%2FgnTIoCTB9je30Ap9Aon%2Fqgbl5%2F8jo4unRMsfvDvGJtOWwbKYA%2FsQvIn%2BieTWW6cXxJrqkYBsSdAa22q0NJUwWjrM2eALDa3uhLgRiaEck3lW9rnRlgB%2Ff%2FBwFeqOWvsTu8CgfP6osFvEwm7MJ%2B%2F%2BBb2GQTjtFeIeY%2B01uPz&X-Amz-Signature=469d16efaa674a004fce1b5a5766461bbb12c6f9608cb0fb0e341ea849dbcde1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGRORU26%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDp07b%2BMvXFxrfM4TPEoaoqljahcu5WePiiVr9Usu4YIAIgNwrhmRlzr0InKd3URFumOzc3XJ02JADHW3MV9%2Fgw5iMqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHo9Cqg6006BWzChQSrcAwSeRQkpdyN7X6B3Ve5Wv%2BGtic4jQ58Z7hkksKUfxlaX0gSTaEcYC1vwvyIXFyThoEsNla7%2FhEFzWR630T04L5qepYbWYoMK%2F4LEtVG2KWMReq4h0dcC%2FonYfWbkfK0WrpYFu32yFnz4z%2B2FSQDfG5zTNJMXuo9GS%2FxB2rrED4%2Fl2Y1WDg4ys7MiERgjQeu6B%2Fr7mVXQqX0rdMKAH5UOfg9GCht8HiRN3Ub7YDp8Q1tuxcsEagWMUUT5iEmEiVfs59b0PfH13SA8xW11%2F1odo9Pq6V1F3H2Q91qlluXGElQ9hvuVeAYYHsesAwTPTQuaa2NHaGHUVMzJhwqIJvd5eJ9c%2FQKPyPsSwi4K0OZcTD%2FwmRpwQIrsT6z22RqPEP1OrOpDV1bL7KezGCfL4FeKK89Emu5YCshs0EIteaziAUEdZSSTuSnP%2FQ3n8GKg4OZ7gQmPEBT9uKwZBkKQfqqqhkRMD2B8rV1w699p7pH4VvjWZhpDYPf9jP81xbch9X%2F%2F78ACcFtXwy19eCdRSR%2BCsBQtpQJ7TsaEUlzyENzyOdkULf1Wnt6K3uScBLnLZb1DgWKLhNasoL9mGL%2F0EznGCsUl22L%2FXEu%2BewRdVGYq2392yxKZjrxwH3wAbf2ZMKPIh84GOqUBRMoLg2nyAC3CmZkOu5bKwz4kac8F82x6AEgvaQHMF2WD1f4yZ5XnbiYIx1z3lsmwB8SmuvoETtm%2FXpo630sS14q%2Fw%2Bbpn%2FH7hf9rw%2BkW8ELYS16JnZXIzunCDP8dJa0TvHd39lnL5snd5cLtrInKe3cezVxgICBBTgYZ39GUCXYQSy%2F6mPR62s6vNxSz7C6CSKatWyTvVH%2FhteLnmNfdcOBSKg30&X-Amz-Signature=418eb02ff52628d79c743a725df6a6bf023de08ed0b6370a0df4125f71f58d84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634EMEQFM%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfhZUuDSVwpN%2FDr%2FcLUXqW1Wqq%2Ft2Ecpzw6SOIke5f%2FAiEAxaep8iicHS5BsdSHpTV5PIRc9q8Tfr0jYTdoRAacNs0qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMYyxkMZPm17ferCMCrcAzaqiKelC22upr0Mgihs18LaV37vi2pyf4EmUpXZE4UGy1EFGXdRKZWVfcYPsc5EL4l%2Bm2W8ddJwS5JbWnp72b31iu1Es%2FXLDrJ0niX7hkwAdfXuHyo%2FMZ5gy753qNmw7i4TNMC5KLbpVy4FW4eXWuXwWcQxsoggGNrVAx2hkneUfQldhqBaNBOf8xJ3yceiYCyGmQ%2FNl%2BQilJbffOw5WIQhUwpPklgXd8qlnWkPEsYJIx4jJxGmsYohdSM2ohIA%2FfQiapD23U%2FT2C1tFzda3GpHI5Iuv7L%2F05M3CnLqq7N%2BGHmIIR%2BhcBMrFzCfSBRLItmrWmMFMoNVku6yLjQe%2FdXB6UdklbwNi2L2gFdxmcuWZ70grv9%2FvC5nYwPO5FAP5xczVT77t9p1h%2BsicovkGbNkJR12Sh9XgdxozzUv%2B9wmPWrxMpq6uNNPYkvI5fJfolKb3v5n3P9lsl18k7ioK94BDoMAPUUJY3YibrUACOiAVmR6KFIfqbnlhnd%2FQCswLDRcvQDfJadZRgKen4zIVXH%2BalrUfAWPziEf7%2BVU096iHc%2FvAq5sWJyxqWo%2F%2BsmpNNd6sxq3ADNioh3VfZUFcbj5IzApM7l4%2FFcsSZ0XexeNOE6gl7TmFRUDJywAMM7Ih84GOqUBUfdGoYaZTsmi0ZYwem5sYBMCakGYsVtTFmZ%2Bf7gp6SksP2MSyV9MzLmQrOWg3D9VR6PyOukE798oZZVdEabgU6XzACLo8wYM27903roP4fAFGnNfPNThNORcARrC3qZxlGgydbSoqaDVfcVyKED23CDtWw5hNkIWcx8wldOlf%2FJnORQAwjOXqA7Ym49v%2BtuZANO01re1r%2BiRVTdApSU3I9XemFvT&X-Amz-Signature=71018230cbdce4100eeb4148ca0f608551f8b0d8e650267b18aa5eee7751861b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
