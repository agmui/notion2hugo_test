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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAYBLRT6%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5RVAWJjEu6TdyzKrHpxl7e13%2BImzt7YZwaRtC%2FZxQuAiBUDIWuwzxydf%2FpJNmDGS9oJpFnNq1m0OYNOv%2Bvmw07Fyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMKuu7HkafTaZuIj60KtwDzqnLqJUjJqOlD9otqTZf53BaqA3ipCdme1pHA8yHNBkemcvu7cer6B2aIomMHU6zZ260oVoc3e5lIr7B3xc2uc7dbOjwJckX%2BoCEMYRgdYAQjJO1Tu%2Fh2bBcb%2BUSRM%2FnbqfpUhdQCNQ5H9cunNa1LON2zxUUWZnvPHh1Lo4KRMYhR7MuzQwAPCGY%2B4wvmM%2F9AQdoJsDaiX%2FRQIlnOEYgC0%2FHtT77etojDuwGSuqNEL1rhUYCqW3eLa4YbfEL%2B%2FOl5wH7105iuCGt3z8sH%2BdzXOVE1P8QYNJhlgDCOYvsjyl%2Fl7VDzlneUzwj5F%2FBCGNVnBFuDywgSkYKHaRZcm8OWlH%2F0%2B6%2FXZutqKBfzN5%2FTCURXghfQ%2B9iWhsxmZMR%2FTNitl8y%2FboSmSTpx8TaQnvOmdhe4HvE1mMxBAwP0fImym2oDvFPNazyKa4QwPOJQLhnnEm4JnTK9Y1v4PqRy%2BJKThAG9zY0r158uxcOQFsOf2oE%2B%2BvxENN2SXy5wOsEosqoDWfwoRjpoJfYyyfq8xjSDRpMo3hVcNQOzOcEwOBkReW8SmCx3oNlNQxow0yILB0v1Guq%2FRLTrXcRKoL3riC3WiEC3cPQubrxm6LYTDsXBtRxmi7%2FSX%2FZ6yLjLCUwq5bkwAY6pgGPviHq0WIWc1XqYScegZw3oih6Xrs6ObxdSroaGP%2BS5r5aOkYuBQoEZdJhRpvblyCU7amK0n%2BQF1zNfKEiYbD8UzU1pQyKJI2Y9McA%2FMdwE7u74cI3Ifqp7T4EviP6juAxBr68T1fRSdWFHMpYIOfpWWVu14ccmNTQKfH9uuQcppD3fPVXpVah5pIhAFtfEBKt5KP8L48iPzm3eLtHiXGIsrnPA39x&X-Amz-Signature=c8a7c463065d8566f6969682777dd094b92fdf3034aebe798925b84e569853e2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAYBLRT6%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5RVAWJjEu6TdyzKrHpxl7e13%2BImzt7YZwaRtC%2FZxQuAiBUDIWuwzxydf%2FpJNmDGS9oJpFnNq1m0OYNOv%2Bvmw07Fyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMKuu7HkafTaZuIj60KtwDzqnLqJUjJqOlD9otqTZf53BaqA3ipCdme1pHA8yHNBkemcvu7cer6B2aIomMHU6zZ260oVoc3e5lIr7B3xc2uc7dbOjwJckX%2BoCEMYRgdYAQjJO1Tu%2Fh2bBcb%2BUSRM%2FnbqfpUhdQCNQ5H9cunNa1LON2zxUUWZnvPHh1Lo4KRMYhR7MuzQwAPCGY%2B4wvmM%2F9AQdoJsDaiX%2FRQIlnOEYgC0%2FHtT77etojDuwGSuqNEL1rhUYCqW3eLa4YbfEL%2B%2FOl5wH7105iuCGt3z8sH%2BdzXOVE1P8QYNJhlgDCOYvsjyl%2Fl7VDzlneUzwj5F%2FBCGNVnBFuDywgSkYKHaRZcm8OWlH%2F0%2B6%2FXZutqKBfzN5%2FTCURXghfQ%2B9iWhsxmZMR%2FTNitl8y%2FboSmSTpx8TaQnvOmdhe4HvE1mMxBAwP0fImym2oDvFPNazyKa4QwPOJQLhnnEm4JnTK9Y1v4PqRy%2BJKThAG9zY0r158uxcOQFsOf2oE%2B%2BvxENN2SXy5wOsEosqoDWfwoRjpoJfYyyfq8xjSDRpMo3hVcNQOzOcEwOBkReW8SmCx3oNlNQxow0yILB0v1Guq%2FRLTrXcRKoL3riC3WiEC3cPQubrxm6LYTDsXBtRxmi7%2FSX%2FZ6yLjLCUwq5bkwAY6pgGPviHq0WIWc1XqYScegZw3oih6Xrs6ObxdSroaGP%2BS5r5aOkYuBQoEZdJhRpvblyCU7amK0n%2BQF1zNfKEiYbD8UzU1pQyKJI2Y9McA%2FMdwE7u74cI3Ifqp7T4EviP6juAxBr68T1fRSdWFHMpYIOfpWWVu14ccmNTQKfH9uuQcppD3fPVXpVah5pIhAFtfEBKt5KP8L48iPzm3eLtHiXGIsrnPA39x&X-Amz-Signature=90cd35bb6e3f0214137deb96b70be051284b7b588a60df4a2eb86b343cb31c9e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAYBLRT6%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5RVAWJjEu6TdyzKrHpxl7e13%2BImzt7YZwaRtC%2FZxQuAiBUDIWuwzxydf%2FpJNmDGS9oJpFnNq1m0OYNOv%2Bvmw07Fyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMKuu7HkafTaZuIj60KtwDzqnLqJUjJqOlD9otqTZf53BaqA3ipCdme1pHA8yHNBkemcvu7cer6B2aIomMHU6zZ260oVoc3e5lIr7B3xc2uc7dbOjwJckX%2BoCEMYRgdYAQjJO1Tu%2Fh2bBcb%2BUSRM%2FnbqfpUhdQCNQ5H9cunNa1LON2zxUUWZnvPHh1Lo4KRMYhR7MuzQwAPCGY%2B4wvmM%2F9AQdoJsDaiX%2FRQIlnOEYgC0%2FHtT77etojDuwGSuqNEL1rhUYCqW3eLa4YbfEL%2B%2FOl5wH7105iuCGt3z8sH%2BdzXOVE1P8QYNJhlgDCOYvsjyl%2Fl7VDzlneUzwj5F%2FBCGNVnBFuDywgSkYKHaRZcm8OWlH%2F0%2B6%2FXZutqKBfzN5%2FTCURXghfQ%2B9iWhsxmZMR%2FTNitl8y%2FboSmSTpx8TaQnvOmdhe4HvE1mMxBAwP0fImym2oDvFPNazyKa4QwPOJQLhnnEm4JnTK9Y1v4PqRy%2BJKThAG9zY0r158uxcOQFsOf2oE%2B%2BvxENN2SXy5wOsEosqoDWfwoRjpoJfYyyfq8xjSDRpMo3hVcNQOzOcEwOBkReW8SmCx3oNlNQxow0yILB0v1Guq%2FRLTrXcRKoL3riC3WiEC3cPQubrxm6LYTDsXBtRxmi7%2FSX%2FZ6yLjLCUwq5bkwAY6pgGPviHq0WIWc1XqYScegZw3oih6Xrs6ObxdSroaGP%2BS5r5aOkYuBQoEZdJhRpvblyCU7amK0n%2BQF1zNfKEiYbD8UzU1pQyKJI2Y9McA%2FMdwE7u74cI3Ifqp7T4EviP6juAxBr68T1fRSdWFHMpYIOfpWWVu14ccmNTQKfH9uuQcppD3fPVXpVah5pIhAFtfEBKt5KP8L48iPzm3eLtHiXGIsrnPA39x&X-Amz-Signature=38925cff8c191824ce30e853833c8db84179b131b924a21e9a002c6cd98fd001&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y37JKB7R%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0stJBkWqgjA9xPR6CiLnq2ahOjjqNo5Ggp97bEoX6sAiEAwHe8E7q40ewJtjvHOZ9qzOSuqy%2B2J5SPpA8IKAdGvHMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFhfXVbLlhp31siIVircA9Y4V983%2F%2B55A1gMnxgqphD%2BQtt%2BTiNEfyy6DOIHoAHftcNL7doXpfruRjGBD963iqSn5K0LtfuT1OVnsJGBtDUhAYo2EKw3Kqod%2FwUkI%2BUhD2H62zt6rdmClt6BY3MVG4V2palviSiBMtLLqfsgwML1nowhBtCMEBODJF5LFG%2FTmrSrvkJUUtWLyeutbGx6YA4sUtpUFVVHkLRjUxh7UWDci2Mr73RHtrqJYVNFFd6HgYLztqt4lfSvIEzzyEBNPQ2OPVAJkQeaqzE%2BxjsvbAnjJznwNLt6sV9vrOtzUkaOAfATgHJ8EmYzGqfuRxnlUENKHEoRt9hDsHJ%2BHe5BN3ohAxLBS206sYvEA67P5oeDFJhyc1Tc2XAU8hMPJJxVc%2Bpu74ygA3ghP399yd2W2Qk%2FiE8L3J6jfIrE2iG5tdWKSeOIAKiZV8Qu4r05jVKD79qBYr7BX6KmQpPmD5ewbk659OKJ5TJTO5hm6bGvkeluQm5hbDldgBIYtEHR%2BJrm9hJWrHFdw%2F0HKZIFS6jNzdYcL3bOS8ggOR4Yn6%2BS7a4N2sZi1ozIx0LUZ6GPRDp%2B9hx5svebn7nZzfqzVQRfSwcPmqwl%2BmRB2ZQw6Q0xdIG2uT%2BOROPh8E9r%2BL24ML6V5MAGOqUByuqBxzB4ut59f1i4ZPsEdcme0JEnLXYfImEZ48%2BHZmgUWgfwHebpCZUHG%2FWkZvXQIKyXzFp2eCylNWhzgmGALkyFcCkagBYUlyiEDJZP5egfmIAR2JYOZiNNSXlprK3Eh0mZC01usC7bJL4bNK95oqyWwL8QhaANc1gNnsXyvIg0gqgQU%2BXbGn1J%2BqeITmVDIC5pH0NzGnPt6bhSZxce8OS6CSc3&X-Amz-Signature=5b831fd3a147d60a2b1fc8afcd4ec081c2f0af738ac768d7933deaa25dbe4b65&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA34ZSBK%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXmGdIs9khb4SslATxv1zgn%2FNzWD1441IQ6gbOeVMw4QIhAKNa%2B6NWGrhVTNfyGxDX3w6qaE73aqsBoD2R%2FOunRa0yKv8DCDQQABoMNjM3NDIzMTgzODA1IgyjxVlLWlmabaLaCLEq3AP22YPGU6iAP13SIr7CECdMbQX2e1FcfaLTtmCspEcm47XH%2FZmKjL0jfNIgo1ErhgOiEhobKyKFEyqlhmsKlk0syqtEeN1ZaRfcNNZaFFRJwr78PrkUlij91GXu5bUoEHyNuGxOf%2Bjjm4NDHXP0XCPPgfgxLYfoMlInVZkJsBWy9EAiv%2FFp6HmnuYaOFdkmPStuMA1JfQlOHi2AkFIc7xvLCbglznLzNGuy1ezok%2B%2B381KlMTDxFRqSCA8PNLfuk4%2FozelnpD8X%2BmIwBYGdrpPn9xlqkEhnA3t787mtrn7E84b2Jrh03CKCJKuciyJrdPE1OZAgEA5ShjosIrRyaatG8f18oLXmn7GXVY5QATZ4PslpfPOEcaBEb3bXb%2FDgNbWhQ0GS09Y2PTloQCRNJx6Nv0Mb578E5BFMgPRLQMPA0oDZiGHt1%2B8oGloJxtohyjGCZhNaWWGG0yUkUAzZOV4dDmsV5vxyW6DWSL12VJxtiW9P7AcZyZfUhUQcE2PKOZJq7nugSgpeDdxGaAeOReXWfeZXldYtCq1D99X22gU7ef1sZWWJYFxYUkR7jZI00A2JQkp9IrINu2YxAWQbe2KT6kz8vVCJTSSlXycGM%2BHigh9E4W1LYW7OBMGjsTCPluTABjqkAaTsqeX616YTeMUeJOviZikEl%2FeVy7OXG1ywG68t0fgK3E%2Fvp8BpBe09N2HHrxwjmKrwkQcoYg%2B%2BdNn9im3le99ka1y3UxR6u3Rr2bi%2BAupWhQRcCBSQcdsAo3jtgcayjL4EGLw%2F%2FT85Tq3yOzVf05F5JDEvZobaIqSQHepHTcQS98DSKNIixtXdcR0CeBBoXEmamrP5On00tKuVWaWkS%2FKUlalY&X-Amz-Signature=4095b46df27c341eb144d25455bac711e8fd580e6be9e3832bc3e806618807d9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAYBLRT6%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5RVAWJjEu6TdyzKrHpxl7e13%2BImzt7YZwaRtC%2FZxQuAiBUDIWuwzxydf%2FpJNmDGS9oJpFnNq1m0OYNOv%2Bvmw07Fyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMKuu7HkafTaZuIj60KtwDzqnLqJUjJqOlD9otqTZf53BaqA3ipCdme1pHA8yHNBkemcvu7cer6B2aIomMHU6zZ260oVoc3e5lIr7B3xc2uc7dbOjwJckX%2BoCEMYRgdYAQjJO1Tu%2Fh2bBcb%2BUSRM%2FnbqfpUhdQCNQ5H9cunNa1LON2zxUUWZnvPHh1Lo4KRMYhR7MuzQwAPCGY%2B4wvmM%2F9AQdoJsDaiX%2FRQIlnOEYgC0%2FHtT77etojDuwGSuqNEL1rhUYCqW3eLa4YbfEL%2B%2FOl5wH7105iuCGt3z8sH%2BdzXOVE1P8QYNJhlgDCOYvsjyl%2Fl7VDzlneUzwj5F%2FBCGNVnBFuDywgSkYKHaRZcm8OWlH%2F0%2B6%2FXZutqKBfzN5%2FTCURXghfQ%2B9iWhsxmZMR%2FTNitl8y%2FboSmSTpx8TaQnvOmdhe4HvE1mMxBAwP0fImym2oDvFPNazyKa4QwPOJQLhnnEm4JnTK9Y1v4PqRy%2BJKThAG9zY0r158uxcOQFsOf2oE%2B%2BvxENN2SXy5wOsEosqoDWfwoRjpoJfYyyfq8xjSDRpMo3hVcNQOzOcEwOBkReW8SmCx3oNlNQxow0yILB0v1Guq%2FRLTrXcRKoL3riC3WiEC3cPQubrxm6LYTDsXBtRxmi7%2FSX%2FZ6yLjLCUwq5bkwAY6pgGPviHq0WIWc1XqYScegZw3oih6Xrs6ObxdSroaGP%2BS5r5aOkYuBQoEZdJhRpvblyCU7amK0n%2BQF1zNfKEiYbD8UzU1pQyKJI2Y9McA%2FMdwE7u74cI3Ifqp7T4EviP6juAxBr68T1fRSdWFHMpYIOfpWWVu14ccmNTQKfH9uuQcppD3fPVXpVah5pIhAFtfEBKt5KP8L48iPzm3eLtHiXGIsrnPA39x&X-Amz-Signature=eb7a3dd3eefbf85e8d10198053c6477ce3b791a125cd997d301c12b51f55884a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
