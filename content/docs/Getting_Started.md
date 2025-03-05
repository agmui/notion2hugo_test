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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HTI5VMS%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T200858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsO%2Bxa82%2Fmu6kpZLD2K4qrXrkrMmBhG8LLSFB3g6fF2wIhAJcLX4490TXXAjKpgku2sZkzKHw3jzeW2QxlYe0hzFjCKv8DCBoQABoMNjM3NDIzMTgzODA1IgzNkNSO5g3YWUyaygUq3AMrI%2FeRkA6iHDbCqFukOvtB60As0EsQlFQTC61fhCaxJeFOV%2FGQNIDnht%2BdyuSA2%2FW0XZZRy5kxS9JJnSdbByF%2Fo1lETVoaItTM%2Br3urPPwsW6hip3syHI4ywp7Pwy7PSlYhKjlYkUIV6foLNo4wCXFg7P0LIjxzuSM55HgBKSC41E80hZLHeNq%2BWrvWPmqyxsrz9Wj%2FyGl97IF%2F7g5dAD3SFENExBir8ZmKcf9PiNTMNkIOma%2FXLNHg57Ie1%2F5YDqRk4ZZL9w9prY3XKT%2BF8L4iX%2B01vFqsZlWvyPsAz0SbnitT6aYBML43BHGQZuiRXtmF0zm%2BJ%2FFFCWaigPXk5I3OoVLQeoyHazM101dMNisgXXObRAGpq%2FmPKOMSmFLQxVsjCH17vcGyBaWI5H1GszIrg40mDPZn2Cf5JjwlclW0MCRnJaOXrxC%2Fr4PAWhogMJ68ffkIVcS0svf%2Fo2FZWCpZcjq5lhgEvkuLbqrDVNbmiBVJzjISp3WN3Ca9oRbNBgHnhFSng81Q6qKSFkGunyk%2FF4kwm2CQinX2eEXdlokpfe0LFe6qAhxxzhnDIp2KfxsK9QrKYXhO6vWYdO9uQyk9ggzFjKy24UWPmT9S%2Btb%2FlCQwMtZiS8LD%2B6KtDDwg6K%2BBjqkAXWl4msDiZ1JbIkW9fjFsD52ZRM9Vw0y5ABhj9%2Fac3tBiIyqQkqgccoKiEZPZgsczFodhA1mzNk5evh16UORbndp8vZLJuc4WrwHvwh7VJvDSP8A%2F3Meu3%2BiudgreRYyOt9hhDhTkn%2FOaVarlXs0OS2cmVApflj2vAzg81ljggrHw5%2FZ7rg%2BQErP%2FNB%2FUKkm79Jcs6QGPErC8f3CYiewCkrrc2xh&X-Amz-Signature=8f49136b810f077c2bb79008c56a9959733c1f586d16f2195f1c3cd72e6599da&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HTI5VMS%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T200858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsO%2Bxa82%2Fmu6kpZLD2K4qrXrkrMmBhG8LLSFB3g6fF2wIhAJcLX4490TXXAjKpgku2sZkzKHw3jzeW2QxlYe0hzFjCKv8DCBoQABoMNjM3NDIzMTgzODA1IgzNkNSO5g3YWUyaygUq3AMrI%2FeRkA6iHDbCqFukOvtB60As0EsQlFQTC61fhCaxJeFOV%2FGQNIDnht%2BdyuSA2%2FW0XZZRy5kxS9JJnSdbByF%2Fo1lETVoaItTM%2Br3urPPwsW6hip3syHI4ywp7Pwy7PSlYhKjlYkUIV6foLNo4wCXFg7P0LIjxzuSM55HgBKSC41E80hZLHeNq%2BWrvWPmqyxsrz9Wj%2FyGl97IF%2F7g5dAD3SFENExBir8ZmKcf9PiNTMNkIOma%2FXLNHg57Ie1%2F5YDqRk4ZZL9w9prY3XKT%2BF8L4iX%2B01vFqsZlWvyPsAz0SbnitT6aYBML43BHGQZuiRXtmF0zm%2BJ%2FFFCWaigPXk5I3OoVLQeoyHazM101dMNisgXXObRAGpq%2FmPKOMSmFLQxVsjCH17vcGyBaWI5H1GszIrg40mDPZn2Cf5JjwlclW0MCRnJaOXrxC%2Fr4PAWhogMJ68ffkIVcS0svf%2Fo2FZWCpZcjq5lhgEvkuLbqrDVNbmiBVJzjISp3WN3Ca9oRbNBgHnhFSng81Q6qKSFkGunyk%2FF4kwm2CQinX2eEXdlokpfe0LFe6qAhxxzhnDIp2KfxsK9QrKYXhO6vWYdO9uQyk9ggzFjKy24UWPmT9S%2Btb%2FlCQwMtZiS8LD%2B6KtDDwg6K%2BBjqkAXWl4msDiZ1JbIkW9fjFsD52ZRM9Vw0y5ABhj9%2Fac3tBiIyqQkqgccoKiEZPZgsczFodhA1mzNk5evh16UORbndp8vZLJuc4WrwHvwh7VJvDSP8A%2F3Meu3%2BiudgreRYyOt9hhDhTkn%2FOaVarlXs0OS2cmVApflj2vAzg81ljggrHw5%2FZ7rg%2BQErP%2FNB%2FUKkm79Jcs6QGPErC8f3CYiewCkrrc2xh&X-Amz-Signature=59e46e68611ef63b44ac3980bb7e937f42c23d8452da978f6f8e50a011e32562&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYCVGZ6D%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T200905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb1lYsW6Rh08XC1LsLfoH%2BBawxcq8Nfigl8Gg1UIz53AIhAOHljybifitwkDnTmx1V%2B%2FvAkkSid%2B6aq3ojB0XZwB5sKv8DCBoQABoMNjM3NDIzMTgzODA1IgxTalBRO%2B%2BIh6rplboq3AOFm3rUuM0vSR8uIGKt%2FCjt8HLUo3jIE6e%2B%2FxpEgJstYLK0drsIHGoANTOfZ%2BOWsZFmZ%2FN6qjUACvemdKd5Kn5BtDOvEtL4g1Sy15JDD9etXFT6j6UeIaE07ThRpfypG1qjJms2leFgVsaAxcZ%2F7c30Z8utFnegeMulHESOSdSR4063xBuA%2F6jWii%2B2XgiwjaP%2B3Fq4VzA7Ltqjaosr%2Bwx6EkavXsRv9vK2dfeDn0s75Z%2FTF5usOkCIqn%2FTrbfqJy6%2FV%2BkuYpPe0%2Bs9TOL9xw2NMQ8qHbkjBydY9oxZeuTSyNjYRbNIbits4XRaNRULid4bi%2Fgbr3TP7O8Agb97ZjCsrPupsKu2JdXy16hGkG0EJ2KQtF%2BlSxwjasGVwz%2BNs1eBFRJl%2B4WhXexntsrk%2BZ1S%2Bg0Pn8f7pVbleYUVCrV0yD0gMM3u7r7H1DgKNoZby6MryzvquhP1NYzdd3AS5R2srKoESQfw%2FwXOiITks5m%2F4OxJjJZoW9G%2F2btVVgZB9O0dzkpXfAf9gg6B8zumxOcWKG2inceci7rdbOV%2FAe1UaJ3I5oSOqW5X6SbeHMewCJE6GlwgXu%2FVzqo0FkM%2FepFm%2BbC2fIV4iVDyNn0asAHtjEHRk5ASDPZwmZU%2FgTCBhKK%2BBjqkAXUL%2F7MrdgS5g12%2Fb1t%2BOC1nqBQPTya8R1x5%2BLev0nyxmHOYk6xa49P2BtV%2FRuJb%2BzGjbW8Hos3a1d3YoJ9VgYAAR2URoGnS4Dq0xm1H0o0BLn6Ux8ixzyMt0WH2U%2BJmZql3ECTEkRAEqtncppnRBEmrP9I66OnvDV4hA8PCL0nkk7m3AQiWMFGoI20QinxDOXG4X1d8wpzaNxA%2Bf7B7Is4hY6bW&X-Amz-Signature=6f9af2a59497a2bac47e4d0f09698f48b200c32fc5917c2a16860d5c68ac04f0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPL3UFL2%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T200906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVWqOf%2FAwTG6zmvRzlwqASlthpuKWS6FzeyA5dU%2BumlAIhAMcT18DAi8skckeBFgfL5W3FNaUvEZ06HbMoDWG2vWvYKv8DCBoQABoMNjM3NDIzMTgzODA1IgzoybHRS3ogFQsMqI4q3AMgp%2BxTIUeNi8%2FP4ZMqjYc5mIfTglpu0OvoxrPs%2B4Xtt%2FVOqo7TttTmaUjMvmky4Z1u64HNeZSgBP0Xw35KdC6VlGRe62hmANRfPf6btalVwRgOP4AxyCp%2FMmaj23foUkJ%2FEZn3H9Nh%2BHXO8GsPwFyXKDuGAGKHcnwYaq8QKfU24GNyzZf70d9i9bhGwaE%2BSXqie5PqITIugj%2BovcnelmWhq5cxzinQ7Zifhwf2jy8V9D52QjwagkX78zWq4UXHVI%2FbURiigpKu30kRZk7Buv7pFqBM22fqGN2995fZPWM49jU3Tliub5rf4IGWekLcjcRATw0TQBz3pR%2BHcqi17YoRcOS2rHyKb09KNAfKVvhjiW90u%2BzCR3eC2nAdiwKqUhQ3ndb6od%2BeKi1qj9qbzS6vnevK96owKpSanrSAjvHqtWqrCDasaDi1lsGntwkUjA8jT%2B%2B%2F%2BFp77nq4hDRceffGE9frr%2BiTfcIsOdRBAQM8OBcvDOvs9M4iFZ4XrqHh%2BeBWZzZmwzrNlVbH3FckkEDLcjxSfZgpm%2Bj1FqI3MV3TbPPPn%2BSYbUv0XKbdIDIBV9Zj4QKRoTM%2FwPA%2F62cyYyS14BUipapyVQD4g49XSL5jb6%2BTNrUhBqGcHbxE7zCphKK%2BBjqkAWdg9zVR%2F1lsoFtEfIqUOrZ3y96ApLQEdjQpVmgqqsjcARyktBZJa19ti8bGe%2BevVQ5WQYCjrWqLowt48QHZ33uyPp1%2BvKe873sK22Kd5vUjBaIThGuwOTTNY3xY%2FYfElGfow%2BhxjUEDcinZ7YPmWjMU0H5UcSAVfPmSutnyzwzW05GhD1DssqmncMa01YlI%2Fvnk4ZTjlIdq7Mr8VjB%2BEpTQkxbj&X-Amz-Signature=e4a22dc63a5e9d809340b40bba714018bb9acec283d3520cc475cb2b1813116d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HTI5VMS%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T200858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsO%2Bxa82%2Fmu6kpZLD2K4qrXrkrMmBhG8LLSFB3g6fF2wIhAJcLX4490TXXAjKpgku2sZkzKHw3jzeW2QxlYe0hzFjCKv8DCBoQABoMNjM3NDIzMTgzODA1IgzNkNSO5g3YWUyaygUq3AMrI%2FeRkA6iHDbCqFukOvtB60As0EsQlFQTC61fhCaxJeFOV%2FGQNIDnht%2BdyuSA2%2FW0XZZRy5kxS9JJnSdbByF%2Fo1lETVoaItTM%2Br3urPPwsW6hip3syHI4ywp7Pwy7PSlYhKjlYkUIV6foLNo4wCXFg7P0LIjxzuSM55HgBKSC41E80hZLHeNq%2BWrvWPmqyxsrz9Wj%2FyGl97IF%2F7g5dAD3SFENExBir8ZmKcf9PiNTMNkIOma%2FXLNHg57Ie1%2F5YDqRk4ZZL9w9prY3XKT%2BF8L4iX%2B01vFqsZlWvyPsAz0SbnitT6aYBML43BHGQZuiRXtmF0zm%2BJ%2FFFCWaigPXk5I3OoVLQeoyHazM101dMNisgXXObRAGpq%2FmPKOMSmFLQxVsjCH17vcGyBaWI5H1GszIrg40mDPZn2Cf5JjwlclW0MCRnJaOXrxC%2Fr4PAWhogMJ68ffkIVcS0svf%2Fo2FZWCpZcjq5lhgEvkuLbqrDVNbmiBVJzjISp3WN3Ca9oRbNBgHnhFSng81Q6qKSFkGunyk%2FF4kwm2CQinX2eEXdlokpfe0LFe6qAhxxzhnDIp2KfxsK9QrKYXhO6vWYdO9uQyk9ggzFjKy24UWPmT9S%2Btb%2FlCQwMtZiS8LD%2B6KtDDwg6K%2BBjqkAXWl4msDiZ1JbIkW9fjFsD52ZRM9Vw0y5ABhj9%2Fac3tBiIyqQkqgccoKiEZPZgsczFodhA1mzNk5evh16UORbndp8vZLJuc4WrwHvwh7VJvDSP8A%2F3Meu3%2BiudgreRYyOt9hhDhTkn%2FOaVarlXs0OS2cmVApflj2vAzg81ljggrHw5%2FZ7rg%2BQErP%2FNB%2FUKkm79Jcs6QGPErC8f3CYiewCkrrc2xh&X-Amz-Signature=ccbc6c5326d3fd93af2d47c31f8126408d624698ce0616783df8da055067b6e0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
