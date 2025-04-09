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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DWKVFVJ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFB5e4yrWmakNx8cTOZUwoiyv%2FLOkB%2BeVHRWlGTJsIcdAiAqx9kWoUy%2Boq%2Bq%2FgxqHKy%2Fir4anmhdAsYFOqJeusmTDiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHn8tQu80pinzu6drKtwDj9X8LIqXCcZJMfjq6XnO7f0TbgEkG3HWWe%2Fs%2BqPab74vI3jkuYuGjFaIzPg78Lvvrptq8SgeCdYGnDbYSV7kWq954QsIxo1JIU1eqa6HyrJd3P2xTc6mVK8ERzphiVZAn%2FewywS55zg8gtq%2FVaj5tFNQJig9qQkRuPfXJnrzVnJlYJPtT5PnUetCuqQ8gCUfbx%2FZ81XLCFWz3vmb%2B%2Bf2AGGIDqvT8pA%2Bj4EeuO0zZEBUnETjWA20k9DZV0LcQHsOWa2KDrT1uH54FFp4SMDh6PbLkQQcuUJJwqOB1qJuQN%2Fi6xwpYh66gMSpA6RImRbJx2cHn%2BQE8JESo0oB0333XQ%2BFYQTp7fpt2mODNefWNtG3oLJlo0Q6PMyVkO6YQziVoMYJt9PxjKy8FLY1awnCRCElBM6cRhAxkFRXOVLuaJyjmPUQXibiRHshRXWK4rjug3ojdoyOp5IIskrhhpz6yw4HkT4icOeWclaay6VtSVIUZlmcozg%2FQOAvjZTG8%2Bied1ofLSDI8o6dp7xQey%2FQUUJVq0yTJy2MIqMtNknP8T19T9dVbsn7t0ePXdvN8Yizbj5FbK8GdgIF%2BDHsve%2BuAQlNIuU7%2BmPIUgYtR4jzz8GGggOkIU8adhoAClMwg%2FLXvwY6pgEsiVrJ3ieVzLWS7CVmwakgT3qllyEA3U4D3Z95DT%2BWwyCS2%2Bhf4ULJJkUY4Gyq6ESvN5VTPdR%2FqxN5zCpaZvEHKR6gyoOCC%2BGarGyfuY%2B8qNoSVrVpTc4cnJZFdfZaBhg5LYCRtvTZJbNnvIMo1pJyTdWton0BP5P7GK4jiofhhssC2tA9uRrJEfr0aND1Y%2BjiiQILZQGmunhEcmGrlpDPXC%2F59Qco&X-Amz-Signature=4b02eb1e3993b410368db041a6a2c89c303eb2ce1b15dd27046eb159b4b21d9d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DWKVFVJ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFB5e4yrWmakNx8cTOZUwoiyv%2FLOkB%2BeVHRWlGTJsIcdAiAqx9kWoUy%2Boq%2Bq%2FgxqHKy%2Fir4anmhdAsYFOqJeusmTDiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHn8tQu80pinzu6drKtwDj9X8LIqXCcZJMfjq6XnO7f0TbgEkG3HWWe%2Fs%2BqPab74vI3jkuYuGjFaIzPg78Lvvrptq8SgeCdYGnDbYSV7kWq954QsIxo1JIU1eqa6HyrJd3P2xTc6mVK8ERzphiVZAn%2FewywS55zg8gtq%2FVaj5tFNQJig9qQkRuPfXJnrzVnJlYJPtT5PnUetCuqQ8gCUfbx%2FZ81XLCFWz3vmb%2B%2Bf2AGGIDqvT8pA%2Bj4EeuO0zZEBUnETjWA20k9DZV0LcQHsOWa2KDrT1uH54FFp4SMDh6PbLkQQcuUJJwqOB1qJuQN%2Fi6xwpYh66gMSpA6RImRbJx2cHn%2BQE8JESo0oB0333XQ%2BFYQTp7fpt2mODNefWNtG3oLJlo0Q6PMyVkO6YQziVoMYJt9PxjKy8FLY1awnCRCElBM6cRhAxkFRXOVLuaJyjmPUQXibiRHshRXWK4rjug3ojdoyOp5IIskrhhpz6yw4HkT4icOeWclaay6VtSVIUZlmcozg%2FQOAvjZTG8%2Bied1ofLSDI8o6dp7xQey%2FQUUJVq0yTJy2MIqMtNknP8T19T9dVbsn7t0ePXdvN8Yizbj5FbK8GdgIF%2BDHsve%2BuAQlNIuU7%2BmPIUgYtR4jzz8GGggOkIU8adhoAClMwg%2FLXvwY6pgEsiVrJ3ieVzLWS7CVmwakgT3qllyEA3U4D3Z95DT%2BWwyCS2%2Bhf4ULJJkUY4Gyq6ESvN5VTPdR%2FqxN5zCpaZvEHKR6gyoOCC%2BGarGyfuY%2B8qNoSVrVpTc4cnJZFdfZaBhg5LYCRtvTZJbNnvIMo1pJyTdWton0BP5P7GK4jiofhhssC2tA9uRrJEfr0aND1Y%2BjiiQILZQGmunhEcmGrlpDPXC%2F59Qco&X-Amz-Signature=4d72740d868b0be19d6ee1e4a6c812d8d43d89702c3cf4afe5bb4fa463b7c530&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIYGWRGV%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T050855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCrenBRm3WQGC929rr1YhBxaHlimOj95SXq6POgQtaDLQIhALuWeB9V%2Fz7T1HP5fNseH5BeBf8FYODHIvs4FTqFNbKKKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpfoEuMQfbgmOsUQ4q3ANXtmi46zchINKOoScuKUfIm7fNPunLzGypHMSzMpQoGBxTq3jRLf1kTeggg56zQx4hdmoDT4Y71N6oIwmFT%2Bz%2B5I%2FhnLgRhZbi5aeX1YTzgDWkLfdD%2BTwbJcR8Ie%2FlAD2Dz%2Fwxq2yxX4%2BXQmxzpmnq20JlRZWekLdfTYNV4Hebx6SuG00ccGOvw%2BMTwtRJDCKqLzpV%2Fp4a1T71mJhRFIdhpBa672jBM0mpoGOGD7%2BtcNoZbkUR4SAXYrX26y3FWBWaNIp%2F%2FGHNjVC9MpwwOtQsq6hGIHsVpgoPHB9ZY1fND%2FPdK6CalSJzzQijQBE8vdvbyAnumrOB4Ozf3JKMP3H3KpYKPcC9DNoFENNjcAhyboHqyvh4e3XVGzoH3z7l1JTYR79e6PVMKFc%2BDEJrVog6GGiRiWGddYtZtK4nsorgOPHUSXbh4ztWeIMDPmcl5fbaYqnoRmVEsXXm3LG1bdtUkbmCvoWmcHeudYLzay8fL6xjKn0h4tLAsU5XmncUl2FYoV8%2F8kqDo6JKjQGaLMg%2F3Gsun54CPdcdjy7FEP3JGF9P3R1q5qNP7j8dQQbRJbE3QwD5dL5k5m0j9cr%2FCr8EZcqxMjub9CGhF4ihn85wC5bnTO4QITdvp126UDCL89e%2FBjqkATDkPVtSQ2oBrCbafD3y3dH%2B%2FO2rHmt4TOvRnIwS%2BIh%2F8fZlJzv8d1sIP0vjw4Em8zJO3SyRwL8nE813nblJ1Gyooijto4ARZ8ct6GzScN5iRthbcElJPwLEHzxhzLDBXHR137yoyvhFudo%2FQmg6TSMe7WMwxWSvzIaMfK3uhq7rpR%2BHy%2Fwk6AlvZ%2BQCIcduMpJjWRat4eHcQMaNLTdlqo63xyCt&X-Amz-Signature=4aef29bd286ab4b9999ffee68adab2227a48d245404ad7592cdb295d8f5af926&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466472UMPFC%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T050855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDCKWPUAwWbTW8p54HvYL%2FnRnXUnhCVMd8HGYE%2FDKyl9wIgJhsXTJ1TbUdvK%2BSSztVvHq73kh%2BZDEIGOTu1%2B0jv2UsqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBI4qBGUrAAb0I8NmSrcAzTWj0gqVNPICxkZxpNGZ9MPsQdACRQFTKFSljG7EhfK7VwhKDJBBy83VxOl3URj%2B65%2BMRcANkngY9sIxXWQCfF0YAdFT82J3UbCUrMIrsNTkIMe%2BsN1UHCPC4QgdLbcbXsjK9YvyqlpYuh%2BpFppJvcb5r14NH96Bj5n33mrV334RlkfccHt%2F%2BOhBH%2BW6bsFERASWshrrmf4qeCKF6OxdtRZB%2FFL4k823R%2Fpe6a3ocXmdKOuXJ095XHb1XtFcs2gj7U1x3HtmsyLUDyasyMsN%2Bh5fo1Vh5RJVNQ0fDQ%2BTDiGLCRkx5ajXMLzGUO4hs48NFf8vpFp5KDUp7A49eXAP%2BHwXGRlsryoUdoJGDZcGZjiyPknMx1rLEqoUCwPYr3aVuEGKHnFUrtE07TKoFA2%2BJWbHOo3nFY7gvpKh9lz0v5KRojw1d69AorLTUARiZDQI3TJVjsOK1flra0BCZYP2AtuDNe0tjxexb6kMaIUg8Z8tFFs1OTjvp9GWadrPPJmVRCoxbZaiNckSu8R0ygX%2BIVjedD3Zfyw7maTm%2Bn3ObPFAYCtEtK6jN%2FF3IB9yRuc%2B9ybzXKSwjcJXSjduo0vrAqEwUZEcd6zAJNPnmZ%2B9J3S6KRzrGaxWe6PwTfjMMLz178GOqUBPEf0NKqS1G5KMKl%2FouJZ65z9bCJpiK%2FTdJ4ztaKTOjzAwAyS6Se0nHue7Npwmm0tpV0JYI5JJmbIQOlF1xfYcm%2FBsuKYqPY2FKVHV98mSwoGQCTJiWJlxP2cJeJZ8NDJfKysToF6lTkOIZEn8lqC0SYdgqjxZtDR1qCkMMJiZKtzFLRhPUi8rjZJFiRwpJbg8HrItgerMAuw3NwZVQZToGUXE%2Bzl&X-Amz-Signature=5c310f89ffa733abaed424d3ab82fb0c66ab83ce2da42c38dba2ebaec837e90c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DWKVFVJ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFB5e4yrWmakNx8cTOZUwoiyv%2FLOkB%2BeVHRWlGTJsIcdAiAqx9kWoUy%2Boq%2Bq%2FgxqHKy%2Fir4anmhdAsYFOqJeusmTDiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHn8tQu80pinzu6drKtwDj9X8LIqXCcZJMfjq6XnO7f0TbgEkG3HWWe%2Fs%2BqPab74vI3jkuYuGjFaIzPg78Lvvrptq8SgeCdYGnDbYSV7kWq954QsIxo1JIU1eqa6HyrJd3P2xTc6mVK8ERzphiVZAn%2FewywS55zg8gtq%2FVaj5tFNQJig9qQkRuPfXJnrzVnJlYJPtT5PnUetCuqQ8gCUfbx%2FZ81XLCFWz3vmb%2B%2Bf2AGGIDqvT8pA%2Bj4EeuO0zZEBUnETjWA20k9DZV0LcQHsOWa2KDrT1uH54FFp4SMDh6PbLkQQcuUJJwqOB1qJuQN%2Fi6xwpYh66gMSpA6RImRbJx2cHn%2BQE8JESo0oB0333XQ%2BFYQTp7fpt2mODNefWNtG3oLJlo0Q6PMyVkO6YQziVoMYJt9PxjKy8FLY1awnCRCElBM6cRhAxkFRXOVLuaJyjmPUQXibiRHshRXWK4rjug3ojdoyOp5IIskrhhpz6yw4HkT4icOeWclaay6VtSVIUZlmcozg%2FQOAvjZTG8%2Bied1ofLSDI8o6dp7xQey%2FQUUJVq0yTJy2MIqMtNknP8T19T9dVbsn7t0ePXdvN8Yizbj5FbK8GdgIF%2BDHsve%2BuAQlNIuU7%2BmPIUgYtR4jzz8GGggOkIU8adhoAClMwg%2FLXvwY6pgEsiVrJ3ieVzLWS7CVmwakgT3qllyEA3U4D3Z95DT%2BWwyCS2%2Bhf4ULJJkUY4Gyq6ESvN5VTPdR%2FqxN5zCpaZvEHKR6gyoOCC%2BGarGyfuY%2B8qNoSVrVpTc4cnJZFdfZaBhg5LYCRtvTZJbNnvIMo1pJyTdWton0BP5P7GK4jiofhhssC2tA9uRrJEfr0aND1Y%2BjiiQILZQGmunhEcmGrlpDPXC%2F59Qco&X-Amz-Signature=5b1bb9accf5bb024802b269790218660cf9392e3c3e5c38f6cecab22b1b4ca8e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
