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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T3ILVYH%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCQW2LFCLen92g9T0tbDI2co4P57nOeaDYKJC%2FwG35IEwIhAPfO9939j2ACnRSY5%2BlnlseNR%2FFJdb1PaM5TyDXZL2R2Kv8DCGYQABoMNjM3NDIzMTgzODA1IgzNpxgSGx%2ByOQxIw%2FMq3APIXZKHpDmf%2FXR7ZY4qtEEMSj6G4wdx0r6dZqpt%2FnCh0T0mZEpXTuisVkLJ1zwOTXxTydC8%2FIxYPolZw4hQGJTRji2NUh8%2Fe9DbL4VV0hPZ%2Fllrr0Pz76ILzmItZJ4gyI89ssqpDPf0qM8AtTHuwKNCP6SoZimI2CAmK6mqcTMKVHdQ%2BEw4VrZ96F%2F9U690Ewkuwh5f6xZOjYA9Us8kdd2QMdWB8jD62%2FnHzl65okJc3tSoW3L%2FTLugZUWmi4KddjOkD%2BRB2jRa7X3LUW6kLyXF7CUKKNJvJzYkGT%2BNBBEXUPzLsHpoGfHKk%2B9RV%2FsodfxLjhsl78%2Fb7jtxaP9eUiCN4fGgLpBlEG1nnabD2mf%2B0OZxNjFYmQ8o1PFNKl5UiVPmXgL4F8037ERvGqxCa7ajd%2F%2FaSZCrMquAiYX4vLhtLHQLZQ%2BpQSSjWLu2djXmoGJlNTBRHSUiC9X%2BSZ9LiPlNVrB5X4H4tqnzQ0hWU6YYxFEgSZZxEliBK9ZFcUvtrxxCTQGLXb9URV%2BFKW4SIWExvuQA0fqwcO5jjabhjaQPNiMefoTwppjnG537RxiPqMrVDKNv%2FlsV3pceNOeL3Q0dWrmPHahC7v3Ic694Y%2FiuI%2F0dM8AenoLXJe1xcjDMsOe%2BBjqkASy5yyHIjUkG2dntaZ%2FMqVASNqzhDo%2BikE1n6C15L0ozXOxHdja9jvz5fThnnxeUf3Ci9T78cJVwfM%2BhEDcKxv8zM9DK45eQMUHNL%2FRZJhLmQ6u1G70byTxWXf1dSJrTWNjWhXKx9tE45wXAamdKGcvRJd3kAxPoJFZhGy%2F8V5jv0SYtjae8apXgEMBLdg%2BIPRRxQaNf3%2FRbsqhRN1MXfeNUDaO2&X-Amz-Signature=e17bdef3a982f35e89b32ac5240a8f5a8a0c524cf2a8e61b97dd7d68848f4873&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T3ILVYH%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCQW2LFCLen92g9T0tbDI2co4P57nOeaDYKJC%2FwG35IEwIhAPfO9939j2ACnRSY5%2BlnlseNR%2FFJdb1PaM5TyDXZL2R2Kv8DCGYQABoMNjM3NDIzMTgzODA1IgzNpxgSGx%2ByOQxIw%2FMq3APIXZKHpDmf%2FXR7ZY4qtEEMSj6G4wdx0r6dZqpt%2FnCh0T0mZEpXTuisVkLJ1zwOTXxTydC8%2FIxYPolZw4hQGJTRji2NUh8%2Fe9DbL4VV0hPZ%2Fllrr0Pz76ILzmItZJ4gyI89ssqpDPf0qM8AtTHuwKNCP6SoZimI2CAmK6mqcTMKVHdQ%2BEw4VrZ96F%2F9U690Ewkuwh5f6xZOjYA9Us8kdd2QMdWB8jD62%2FnHzl65okJc3tSoW3L%2FTLugZUWmi4KddjOkD%2BRB2jRa7X3LUW6kLyXF7CUKKNJvJzYkGT%2BNBBEXUPzLsHpoGfHKk%2B9RV%2FsodfxLjhsl78%2Fb7jtxaP9eUiCN4fGgLpBlEG1nnabD2mf%2B0OZxNjFYmQ8o1PFNKl5UiVPmXgL4F8037ERvGqxCa7ajd%2F%2FaSZCrMquAiYX4vLhtLHQLZQ%2BpQSSjWLu2djXmoGJlNTBRHSUiC9X%2BSZ9LiPlNVrB5X4H4tqnzQ0hWU6YYxFEgSZZxEliBK9ZFcUvtrxxCTQGLXb9URV%2BFKW4SIWExvuQA0fqwcO5jjabhjaQPNiMefoTwppjnG537RxiPqMrVDKNv%2FlsV3pceNOeL3Q0dWrmPHahC7v3Ic694Y%2FiuI%2F0dM8AenoLXJe1xcjDMsOe%2BBjqkASy5yyHIjUkG2dntaZ%2FMqVASNqzhDo%2BikE1n6C15L0ozXOxHdja9jvz5fThnnxeUf3Ci9T78cJVwfM%2BhEDcKxv8zM9DK45eQMUHNL%2FRZJhLmQ6u1G70byTxWXf1dSJrTWNjWhXKx9tE45wXAamdKGcvRJd3kAxPoJFZhGy%2F8V5jv0SYtjae8apXgEMBLdg%2BIPRRxQaNf3%2FRbsqhRN1MXfeNUDaO2&X-Amz-Signature=2df03041e4591aa2351799362140db7fea5a5a98b62c54be08579f3ea6ade9fb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNEZQ5RV%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T003811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCJ47A3bpls0E1HPu5js8w39PmlB1k886%2BcNluqKn7oSgIhAMOkxLX4tOY7ixlVIGIGLGwudCwUtIeHsHEcBW2UMU%2B8Kv8DCGYQABoMNjM3NDIzMTgzODA1Igy8RzFBAK57hU2FibYq3AOM3AtMF3U2rGD4jWnDurIbefS0ROD71OdAcOPa7PIQGczJ9Y6FHtaRxeNu21M5LkpYpCyFIufa0gJfizAE8YLotrLCKj2hNfvvM3jCb4HUmE39o%2FfLOSeDpdZ9c3RElq8l%2F7edTADw3%2FNJvm1qLg%2B6%2FwJTCypEQqrTXVVqBi4CwUld7H%2FYSCmKkGz0oWM9qTLtYNCnpwti1W71zm%2Fn5ghCEZDtGKwqpzhZxIMAAtWkkHBZJEspBcJe2itM7z8QDT3GlffWwpj5%2F9xVGY1afmAx8KxdO6aImNApRUIdYJoiNaYDspSdXn4vj9sK4RHcGJJFrPQXTd33Sj0Bcq%2FZPtnqsVGS30P3biwKP2m7lEKheeqycvmxma0SLk4WTdywxAcR7OArGSwbKIlrg%2FFmCEJNl9TUp4zvO412yYMdmTuZ%2FrIUWUVCwu1PP5IB58ZRFiemdrYDAy41GUs9zZK%2FmWXJOuyr4%2BSVZ5RLxc35YYqXD%2F91%2BaAv1n5YNL4oaF%2BliiM%2FBJItsZfDvybOpoZ1SBaPs7u%2Faw7Dm0zyYFcs8pBlCSc667MN8PSdO9jFS6NUFk9MrUnQgD36cTfvMA9vE60e3LZ%2B0%2B%2FdJmuMcClsniiyO9UeyV0xvqW%2BzTtzTjDXsOe%2BBjqkAYQjqTdYPtLSdb0zFrt%2FDQcYprgVM6Jg7X1lypKxMyff446%2BpZ6nmZGfc%2BX8po%2FrTVRwxOGFuVQXyPzo07SS6z03Vi1c6dZQaR3uySQGL6u4k9r9IdcR6roiAEEIjYml0meN5FVfVGH3WHZWVvtTnge%2BFRea6YNjnXAFQ%2FwkocFFVFcDpvV4XoWgho6nvnXwAXwgg1Q7Fytq4Y0%2BcUyek6rTA16k&X-Amz-Signature=fe69a6272ff689224330dbe3d7fc13537be7fbe50a52b4354d413df4c25e76ac&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST4FJ3SX%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T003811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIH05aNerRXw7qpZ5ALcdZdSPe%2FXutuKZrG7ngyyPMJ9IAiAovcPpXOfX%2FtK3hbEEVPw3PyzruG%2FAPnwPgTyJYeOQDSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMVA8jKDdY7MbVcdTVKtwDWLOjEzWBEK3PtEeYW69TqbU9Mre%2ByuUBU%2FdqAv4Ev6FdJmN0qGhsAxoYjb083blAzwRbTT%2FTPEIIStAhwL1WKk2oWrUgmB7rN9ZfqKQrkABbEY9PvpHZvAY4F2gqzMEUwq6EN2I9zuVLYezpEyu3BhlhErpMLA9%2BjZtbxXQhrK3ZNdfVyyE%2FWhp09Rt4SrTITSFcy0vCwa1e4NMlMPIlT%2B55JcZaIcMQlcXlqVRbrN7c8UqDRat79yy1x2Qb6GftKIFtF%2FBUzuQQ34GOcjRkgXejmwCK07GL%2BG89DCBSjz8Gn9FtJsRO2VS1EKBQ62UY4MocauJOxfAH7bDq4Gjc7oymHYLusBS3eY1PSUnRVpfxIfAI2boOEf1RXGoWnhmGrlhXzvdovKxO%2FBvTdpAVFTwL5Ac%2FSRnUHecFm2WF8UQeexA3xwLhP9OSy0q5zoVJm5PKH0ZSR%2Bv48wIV9V8RwvTHUy9rTkxl6JZJPkvmLSU%2BSuvN%2BqyVqnF420wK%2B8ljIAjl55nMAGbwZe8ssqRuhP5LvcSjk4lZouLBLwzUo3uDty3ulXraH8J21i%2BAtQMbl28GzAWv2DRLWFWMERb1uHf0U12Pk6OeunAdDUjKB33olNhPEtZREE3ksAIw1rDnvgY6pgEHm4m8TO0PSTg9wuQeLitCjKvQy6gav2OmkuxWwPbW7jKYTt53GGifwXf%2FT0MQ%2BoGMg0pKoKrklE81OXQNMFKVDd3%2BPfNI2R7AmHRWJDrMsH9X5evxLb%2FfsC6H14k0cBa%2FOFIFtncMwhQz33ceFbaodO0BJxnQeqxANTHgZL0mbQpDKN0KV9zTZ%2Bd%2FuWKKoK10lUAb0ry4J3k1h%2BnOyXiQb2J%2BNROH&X-Amz-Signature=d7df14e984b7a0b3dd5172a3019d52d2bcbd7d6f2ab802bd52b3473389c2deba&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T3ILVYH%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCQW2LFCLen92g9T0tbDI2co4P57nOeaDYKJC%2FwG35IEwIhAPfO9939j2ACnRSY5%2BlnlseNR%2FFJdb1PaM5TyDXZL2R2Kv8DCGYQABoMNjM3NDIzMTgzODA1IgzNpxgSGx%2ByOQxIw%2FMq3APIXZKHpDmf%2FXR7ZY4qtEEMSj6G4wdx0r6dZqpt%2FnCh0T0mZEpXTuisVkLJ1zwOTXxTydC8%2FIxYPolZw4hQGJTRji2NUh8%2Fe9DbL4VV0hPZ%2Fllrr0Pz76ILzmItZJ4gyI89ssqpDPf0qM8AtTHuwKNCP6SoZimI2CAmK6mqcTMKVHdQ%2BEw4VrZ96F%2F9U690Ewkuwh5f6xZOjYA9Us8kdd2QMdWB8jD62%2FnHzl65okJc3tSoW3L%2FTLugZUWmi4KddjOkD%2BRB2jRa7X3LUW6kLyXF7CUKKNJvJzYkGT%2BNBBEXUPzLsHpoGfHKk%2B9RV%2FsodfxLjhsl78%2Fb7jtxaP9eUiCN4fGgLpBlEG1nnabD2mf%2B0OZxNjFYmQ8o1PFNKl5UiVPmXgL4F8037ERvGqxCa7ajd%2F%2FaSZCrMquAiYX4vLhtLHQLZQ%2BpQSSjWLu2djXmoGJlNTBRHSUiC9X%2BSZ9LiPlNVrB5X4H4tqnzQ0hWU6YYxFEgSZZxEliBK9ZFcUvtrxxCTQGLXb9URV%2BFKW4SIWExvuQA0fqwcO5jjabhjaQPNiMefoTwppjnG537RxiPqMrVDKNv%2FlsV3pceNOeL3Q0dWrmPHahC7v3Ic694Y%2FiuI%2F0dM8AenoLXJe1xcjDMsOe%2BBjqkASy5yyHIjUkG2dntaZ%2FMqVASNqzhDo%2BikE1n6C15L0ozXOxHdja9jvz5fThnnxeUf3Ci9T78cJVwfM%2BhEDcKxv8zM9DK45eQMUHNL%2FRZJhLmQ6u1G70byTxWXf1dSJrTWNjWhXKx9tE45wXAamdKGcvRJd3kAxPoJFZhGy%2F8V5jv0SYtjae8apXgEMBLdg%2BIPRRxQaNf3%2FRbsqhRN1MXfeNUDaO2&X-Amz-Signature=803182ecf3a27e54bb32d01cb3a0555099c4d89a224956869b7342c1d90a88b7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
