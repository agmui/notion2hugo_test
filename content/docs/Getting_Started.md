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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZRLCF2C%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIBlLj%2FTO591E%2Ff%2FOVQ5O5XmxJurEjndCFetaHQLR4aORAiEA8nG%2FyrAs9LJnYxbnTTgQcTYQ5acn0jizPc8hOnH8MBcqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2rOSuHDxRKgLevcSrcA9avTgQc2Ez%2F%2FgXfwiWVDFL8D%2FvaHNhi4xTp23ADd0GIl%2BYK8KNfw3uo%2BQLGQs%2FE27r%2FoKqsvjBHISQTmwHhTzGfNLyShl5cltemACXtmk%2Bn7RCURM1Na6vufB17UWaX3td7JNvm9P4%2Bz3gQOEtHVvogbh%2FsZhFXfoXUj%2F6cov3iR8myWcSGko4NB2gRejc7Pfad7aQFjuUd5tWCQVxCscY%2B28mHvssTTjO1F2ZMA2ngMc0OIFf%2BjvqEYMxNJNLzFJM1I1rtA3hNUft4PAWqbRsW7yhKYXgB98g83M9Rmp20CEq6lxeUXgBk0x2v%2BEpSl2kncCBQ9jH5AkOPC03FJuPdff2gpyr7NttJzVWKv90upuxnrIa84kEXvMQmmAeFXprtxJ2Ay9d6qNcZvtTo1iqrAjk8LTFJ7CZ0TBN2QW%2FJPZDKsAY5Xxj6wGbQ4m%2BknALLo92Ka4sGDQo2vbg8fQsjpdI4mTDBHwsQSKjKvKo6PSCf0%2BfpSrXkr9mSt1180QdlOs%2F%2F8QUCGLPxF8ozGUXzrYfUjjUGXldMhuEc3RytP6nHHJkvbHrF8r%2FGjCzfGosX2phhRp%2B%2BfIOezMYvUXohQRElVvz3MIr%2BFhhwdqd2kYi%2BFb%2FRE6lJosSvMKXQs78GOqUBMXjbW2x7aNMqwxFxU9k2OcQjo5ezofPWeD6SR6CqkDvsqIpVQqf8a%2FaFBY8Dy2bIILRGtvtusybLu2eSfocySWhpiouc4hP%2FW0CfQgsk3n%2FxG2kprI1%2FnQIZvxIz73Wohe2qf8ZYbUMcYWpoiqP%2F60XHR8iv%2FkHeI8xZG2VKjkghIj3B4R14E%2BZz1x3dnTlIWZnhh8KQ9%2F5R8j3OzijPLSLNJWmr&X-Amz-Signature=28b95498bdef7f9c8a09ebd83040f7f1edbd77c7850072a50541942ecc931bb1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZRLCF2C%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIBlLj%2FTO591E%2Ff%2FOVQ5O5XmxJurEjndCFetaHQLR4aORAiEA8nG%2FyrAs9LJnYxbnTTgQcTYQ5acn0jizPc8hOnH8MBcqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2rOSuHDxRKgLevcSrcA9avTgQc2Ez%2F%2FgXfwiWVDFL8D%2FvaHNhi4xTp23ADd0GIl%2BYK8KNfw3uo%2BQLGQs%2FE27r%2FoKqsvjBHISQTmwHhTzGfNLyShl5cltemACXtmk%2Bn7RCURM1Na6vufB17UWaX3td7JNvm9P4%2Bz3gQOEtHVvogbh%2FsZhFXfoXUj%2F6cov3iR8myWcSGko4NB2gRejc7Pfad7aQFjuUd5tWCQVxCscY%2B28mHvssTTjO1F2ZMA2ngMc0OIFf%2BjvqEYMxNJNLzFJM1I1rtA3hNUft4PAWqbRsW7yhKYXgB98g83M9Rmp20CEq6lxeUXgBk0x2v%2BEpSl2kncCBQ9jH5AkOPC03FJuPdff2gpyr7NttJzVWKv90upuxnrIa84kEXvMQmmAeFXprtxJ2Ay9d6qNcZvtTo1iqrAjk8LTFJ7CZ0TBN2QW%2FJPZDKsAY5Xxj6wGbQ4m%2BknALLo92Ka4sGDQo2vbg8fQsjpdI4mTDBHwsQSKjKvKo6PSCf0%2BfpSrXkr9mSt1180QdlOs%2F%2F8QUCGLPxF8ozGUXzrYfUjjUGXldMhuEc3RytP6nHHJkvbHrF8r%2FGjCzfGosX2phhRp%2B%2BfIOezMYvUXohQRElVvz3MIr%2BFhhwdqd2kYi%2BFb%2FRE6lJosSvMKXQs78GOqUBMXjbW2x7aNMqwxFxU9k2OcQjo5ezofPWeD6SR6CqkDvsqIpVQqf8a%2FaFBY8Dy2bIILRGtvtusybLu2eSfocySWhpiouc4hP%2FW0CfQgsk3n%2FxG2kprI1%2FnQIZvxIz73Wohe2qf8ZYbUMcYWpoiqP%2F60XHR8iv%2FkHeI8xZG2VKjkghIj3B4R14E%2BZz1x3dnTlIWZnhh8KQ9%2F5R8j3OzijPLSLNJWmr&X-Amz-Signature=3f1aeab01978eb7a2f3cab8322331a2f9c4f919013f10d995bafe77be2c2c6c4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VLKNUSH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDQM%2Be6h%2BE5UDZEbO1NtZO95E2O7YLfrrJV1bujH8MK3QIhAPLTpEvW%2B7CegHB5hwPM1ZcBTuumOzzWjNo7KyDClVRQKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQN7Esa25jG6c8aRIq3AOP9AQn5TMHwAwQ4LScl3gZZRoIaRb69oagj%2BxV1WhKQHmGiwgRJhmkYNGakscvg1IQ4LCvwrZketNwjd8%2FlByzApnmYyBiHGaoHARtFJnRj%2BYA8U0HOACEAHEvD4PGU6jlAOvM%2F8RCdMruWHxDeYlTLGhBt%2FoDPglc9S%2B0Ah6y3fnVnSrR8GOyS%2FAcMFkOi19TdaAHab1cuTMAZXjHSqpSi9X%2BOjvbroxzZCb%2FcXdWYM95iUhHSojISWb26M1PudoD9UfzcuCR0rmRtufIiqZR5DPquUtttfa7pSQNeRf2PIoh7yqpExjE3hJluhdaFbph0B4yPvi%2BOof%2BgNcPq4Lzgpga45rYNv15K8mYv7nipWcQx3kLVs58tz8K4LDjUUpxXpdycWChrUH86o6S%2Bz%2FimoVVIo8ebo7Rp3TI%2B%2FH4bN652t3K1%2Bjtl%2Bl6sBznrI9f%2FpcdmOVmdG1t2BGhWM8Q0soOpufmy2BH1Qhu83yHNUD%2B5P8PMGzNtUwuWGyODQl2rxlWmWpxRrDSPVsgTsIo7JdflnswpOl36Wt2SjVcwJYUq6buYo07%2Ba28NCxinzD4mk%2Bax14pnML76Ufb1wprCPI4dGvu0E3LfSLFpzoSxUT016L5bmHNwHY9hjC%2Fz7O%2FBjqkAb%2BTaP6kpYApLCo3W4w8pmiAHBm3w%2FxSl6b7jEN%2Bh%2Bx0jIO2tcvUFPw8XpxBxj5Qjtr8AY%2BIETFrEPvE65VuSXmgO5AGU79%2FjALAnstgDP8aWJ6HPfMXVwhp%2BXQc9Ke9vE0j9lU1GxMIrbS%2ByYAAQyPyeGF7WdVP57T4bVomR9hoT8sI%2FwglIVJXBXV2UiAOoIEMWRIy%2FUEDce6Ljzh7m1D7aCXB&X-Amz-Signature=abb5b873082426cbd52fedb9db1db0f724b24776f930a21e0c0294a9a8ae4d0d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q3JFQMW%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCCVzrGP6ajB8CJh1zyUla1fsKcRMADCwswGyC%2BLD0ddAIgPZQO8Xpc3%2FKvYmkvRp9N0qn1mHhEexPXk9uK8B8CuM0qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRMGJ5onDh9HjI0RSrcA2cc4IdRfe76MMi6dU0c89QGIVPGbGtq7xy4h94%2BVWXW2lFOfCyb8J6R%2BhreeSxd5PwXWBNkFTeGhaHLbIW1%2BdCwa6cLc9LnH5bGW06OyfkcU2Ui7Pj6DGXGQRqiAtsJoOK1ay97kZNaOvTC4n2AStAloNTF8UuP1zFq3a36RqA6MORoHcgm8IFQf0dtloTyG673Jlft%2BVI5nau1KvTmkjF2d%2FK%2B0xOhjGTIyrIqg7ji3BDOdcV8h6qlZzibSpDmOQckO4JsHCLfOwSBt3r4ZV4nGJQ%2FRfYbdE1ZC6BLBrtJz7dg5UG39V%2FZMC7%2B5duwnQh2Ndncoyi8tpQ6JpRVNB%2FWFKTv7Iad8RFTaAtAMOWub9P64%2FoBeEG1pSbDjJq0v2kw2D311D7gsXKO5inqHSXDrvK8%2BrXTlVActfZiAA2P5A2yM6X1ll3%2FnDepWmdNLC5MgzqoCHhUFocePfRebaUoTf6cBkWOENQdNHVK0V6oIbLg6MtWd1jzUIqKJmR65HqXzo6d9mT1d%2F6qfrPps65%2BfRAmJC9zGUlSGnPGIExnW8Beve%2FIPyhDl14XsPKGAnC9EjIWkFTOdnuwCrE7PWxXq3ASEuShISuLer17DHw5eDmftttuQPgqyJ6JMILRs78GOqUBpJgcGIK65ErhyPf5lwL6APRHmQWx%2BRwwWpBQ3qFVtWtssIOmwyRCbo52os6Tr9dBgNIKajHcspSXSNShy3eqYN39FylXsR862mW2OHwnFyEDsLo8dHpeLqOntd2O%2Brnkw0J2xELJQ5PWLd%2FDhGDDINb1SLVJvnBPfuGUy7QkCogm9IOsiMi3f5pFVJOt0JfK9knR5NGrZImBtmAlCK1l5H7Se%2BhI&X-Amz-Signature=743e6612a3c3cdb8485d777461606edc3aa043e356542210775b5724a3e65966&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZRLCF2C%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIBlLj%2FTO591E%2Ff%2FOVQ5O5XmxJurEjndCFetaHQLR4aORAiEA8nG%2FyrAs9LJnYxbnTTgQcTYQ5acn0jizPc8hOnH8MBcqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2rOSuHDxRKgLevcSrcA9avTgQc2Ez%2F%2FgXfwiWVDFL8D%2FvaHNhi4xTp23ADd0GIl%2BYK8KNfw3uo%2BQLGQs%2FE27r%2FoKqsvjBHISQTmwHhTzGfNLyShl5cltemACXtmk%2Bn7RCURM1Na6vufB17UWaX3td7JNvm9P4%2Bz3gQOEtHVvogbh%2FsZhFXfoXUj%2F6cov3iR8myWcSGko4NB2gRejc7Pfad7aQFjuUd5tWCQVxCscY%2B28mHvssTTjO1F2ZMA2ngMc0OIFf%2BjvqEYMxNJNLzFJM1I1rtA3hNUft4PAWqbRsW7yhKYXgB98g83M9Rmp20CEq6lxeUXgBk0x2v%2BEpSl2kncCBQ9jH5AkOPC03FJuPdff2gpyr7NttJzVWKv90upuxnrIa84kEXvMQmmAeFXprtxJ2Ay9d6qNcZvtTo1iqrAjk8LTFJ7CZ0TBN2QW%2FJPZDKsAY5Xxj6wGbQ4m%2BknALLo92Ka4sGDQo2vbg8fQsjpdI4mTDBHwsQSKjKvKo6PSCf0%2BfpSrXkr9mSt1180QdlOs%2F%2F8QUCGLPxF8ozGUXzrYfUjjUGXldMhuEc3RytP6nHHJkvbHrF8r%2FGjCzfGosX2phhRp%2B%2BfIOezMYvUXohQRElVvz3MIr%2BFhhwdqd2kYi%2BFb%2FRE6lJosSvMKXQs78GOqUBMXjbW2x7aNMqwxFxU9k2OcQjo5ezofPWeD6SR6CqkDvsqIpVQqf8a%2FaFBY8Dy2bIILRGtvtusybLu2eSfocySWhpiouc4hP%2FW0CfQgsk3n%2FxG2kprI1%2FnQIZvxIz73Wohe2qf8ZYbUMcYWpoiqP%2F60XHR8iv%2FkHeI8xZG2VKjkghIj3B4R14E%2BZz1x3dnTlIWZnhh8KQ9%2F5R8j3OzijPLSLNJWmr&X-Amz-Signature=2c9c41b484bcc45832b05d5a95028da233c6133cf4f984271ea1a83515945faf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
