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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4LO37IL%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYAku5usHgitdgsfxDpJ1ckhOBc2veVD4q8REb4zt8SAiBUoByQepKTD66OIHQGmgDebHvF7cpf%2FDQuU4k90yYvaSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWLzG3jIvPOENi09cKtwDzzhbRHZzCxqoqQQYnlKkrF6WV1FKm3WyBplk65wfq%2FnTcyMBedqfWDIkzAyLBNuHr9aopwhbKRLn01RUhEzDYpmA%2FGCtcHeBjDYzQoighy%2BoeNuANGyY21xhiuQZheTznyN%2B3LHckf4TxqUqBYPw0VwHTr4H97Trqe%2FRkNM6wTH9YcZr1D4c27FJB8um9%2Fa2oJcsSbKcqhOrlyKCe3OHORDW%2F1kfWrxF81oMwrAHRWZaNCcRTneloon7QCMy5d3hdyndyKkpiw6UXWOo6Zjp69r9AcErqBuoXQ9gtniCwISdl9eYvzyXEVcK3TqFBjFT%2BQEGpR3sI8PYP%2FI0TA6Z7YPBpg6el8ghEmD%2Bs1a8ddabJXCcIhVMHGjt5dxT6rdKn6VNZBVSB%2Bjv%2BXWUQfdN6e2tqHFsE9AYMFLFueHhjuzPruW6wbpFPzL8ygUmWvKs4pJl2MRSg1YNHbA2Fakfq2nIJKNvsf%2F29cnmLha4AYp4mPND21sXmT3VEjoF5JQ4hG3FUGk5i%2F99oIr3%2FBEzcRmkBXOGyzABrZbhKIQY9a06%2Fipc6zP%2FqmKO1gc3PX6aa76xlj65KpnqOO%2BSheUBo5x6j1NFuSJi2psIr%2Bu58SYyc%2ByPV0hWmdLcCX8w%2FeGXwgY6pgFBwmquYidLEwK7L%2FKfmaZ%2BoP5X3Wpf8i7KF%2BCuhRj3Ole7No0OH8KUn%2BNh4b4dOfvVpPM0mt38RjGTuIBFdJSssPim4HGh4hZKdwPk70fEfXtCD%2BMFwVXRTWovw4uaYkAPMNWT27rkNT9dIR0HES6Jy7H6AUCccs%2BMhtb5PA6I%2FhMUZZjOKIvzcpxqmeXhNO10jNnN4Ay4gwQlJUkdwVFvn0KFMN%2Fr&X-Amz-Signature=7b981154e0e06fecc31d9fccd04fdc501c4b85b7480ec6fe9ad1b57b5e30288c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4LO37IL%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYAku5usHgitdgsfxDpJ1ckhOBc2veVD4q8REb4zt8SAiBUoByQepKTD66OIHQGmgDebHvF7cpf%2FDQuU4k90yYvaSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWLzG3jIvPOENi09cKtwDzzhbRHZzCxqoqQQYnlKkrF6WV1FKm3WyBplk65wfq%2FnTcyMBedqfWDIkzAyLBNuHr9aopwhbKRLn01RUhEzDYpmA%2FGCtcHeBjDYzQoighy%2BoeNuANGyY21xhiuQZheTznyN%2B3LHckf4TxqUqBYPw0VwHTr4H97Trqe%2FRkNM6wTH9YcZr1D4c27FJB8um9%2Fa2oJcsSbKcqhOrlyKCe3OHORDW%2F1kfWrxF81oMwrAHRWZaNCcRTneloon7QCMy5d3hdyndyKkpiw6UXWOo6Zjp69r9AcErqBuoXQ9gtniCwISdl9eYvzyXEVcK3TqFBjFT%2BQEGpR3sI8PYP%2FI0TA6Z7YPBpg6el8ghEmD%2Bs1a8ddabJXCcIhVMHGjt5dxT6rdKn6VNZBVSB%2Bjv%2BXWUQfdN6e2tqHFsE9AYMFLFueHhjuzPruW6wbpFPzL8ygUmWvKs4pJl2MRSg1YNHbA2Fakfq2nIJKNvsf%2F29cnmLha4AYp4mPND21sXmT3VEjoF5JQ4hG3FUGk5i%2F99oIr3%2FBEzcRmkBXOGyzABrZbhKIQY9a06%2Fipc6zP%2FqmKO1gc3PX6aa76xlj65KpnqOO%2BSheUBo5x6j1NFuSJi2psIr%2Bu58SYyc%2ByPV0hWmdLcCX8w%2FeGXwgY6pgFBwmquYidLEwK7L%2FKfmaZ%2BoP5X3Wpf8i7KF%2BCuhRj3Ole7No0OH8KUn%2BNh4b4dOfvVpPM0mt38RjGTuIBFdJSssPim4HGh4hZKdwPk70fEfXtCD%2BMFwVXRTWovw4uaYkAPMNWT27rkNT9dIR0HES6Jy7H6AUCccs%2BMhtb5PA6I%2FhMUZZjOKIvzcpxqmeXhNO10jNnN4Ay4gwQlJUkdwVFvn0KFMN%2Fr&X-Amz-Signature=e433f6754a7b76d064454b1d5fef70a4364e87d21819b0b7bca08bbf61509d89&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4LO37IL%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYAku5usHgitdgsfxDpJ1ckhOBc2veVD4q8REb4zt8SAiBUoByQepKTD66OIHQGmgDebHvF7cpf%2FDQuU4k90yYvaSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWLzG3jIvPOENi09cKtwDzzhbRHZzCxqoqQQYnlKkrF6WV1FKm3WyBplk65wfq%2FnTcyMBedqfWDIkzAyLBNuHr9aopwhbKRLn01RUhEzDYpmA%2FGCtcHeBjDYzQoighy%2BoeNuANGyY21xhiuQZheTznyN%2B3LHckf4TxqUqBYPw0VwHTr4H97Trqe%2FRkNM6wTH9YcZr1D4c27FJB8um9%2Fa2oJcsSbKcqhOrlyKCe3OHORDW%2F1kfWrxF81oMwrAHRWZaNCcRTneloon7QCMy5d3hdyndyKkpiw6UXWOo6Zjp69r9AcErqBuoXQ9gtniCwISdl9eYvzyXEVcK3TqFBjFT%2BQEGpR3sI8PYP%2FI0TA6Z7YPBpg6el8ghEmD%2Bs1a8ddabJXCcIhVMHGjt5dxT6rdKn6VNZBVSB%2Bjv%2BXWUQfdN6e2tqHFsE9AYMFLFueHhjuzPruW6wbpFPzL8ygUmWvKs4pJl2MRSg1YNHbA2Fakfq2nIJKNvsf%2F29cnmLha4AYp4mPND21sXmT3VEjoF5JQ4hG3FUGk5i%2F99oIr3%2FBEzcRmkBXOGyzABrZbhKIQY9a06%2Fipc6zP%2FqmKO1gc3PX6aa76xlj65KpnqOO%2BSheUBo5x6j1NFuSJi2psIr%2Bu58SYyc%2ByPV0hWmdLcCX8w%2FeGXwgY6pgFBwmquYidLEwK7L%2FKfmaZ%2BoP5X3Wpf8i7KF%2BCuhRj3Ole7No0OH8KUn%2BNh4b4dOfvVpPM0mt38RjGTuIBFdJSssPim4HGh4hZKdwPk70fEfXtCD%2BMFwVXRTWovw4uaYkAPMNWT27rkNT9dIR0HES6Jy7H6AUCccs%2BMhtb5PA6I%2FhMUZZjOKIvzcpxqmeXhNO10jNnN4Ay4gwQlJUkdwVFvn0KFMN%2Fr&X-Amz-Signature=ab38a60ee3d7542806c048de7606cb66165226ef3531e290e7e6876864b59e47&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XQ6TZ6D%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx07vr0GR2Qb1m3eyBiGUmxknbKdF5%2BFQOd8JkVRsdjAIgaZnmO3jWssZyhuQAQIEe1zU04%2B%2BIjzqfW5uK9B86zbcqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfbLLWJ41GaP0DYpyrcA7XnB96%2FAhuaMnu5H%2Bnqa3TZ4fltgqNLUKUQ3MLU2mm%2B8%2FwGYo3H14Uz6MaNdsg4IimSb%2F95FL%2FR2x%2Bj%2B5Hh3jn8Hbs9WUAzm9%2ByPLKO9Kp9GxPww7g4XqRaVoOoN%2B9Oj7XIUbjJnk%2FRAQU1CqwQ%2Bdicf4iwOfRnU5HRzaGRiBbkne65yU%2FmCNrmxgKARjD3zcrvDamPn4jvMjR%2BCtf9myCfVvLxRSGxL7IluVzDhD7hwa7DsPJSnFTXiI19j0h%2FuRYZWJs4MJmu%2BIAATMEeNOOxPT5ODVhl2JzuXVFow1z8KAPQrRZGWhkhEl0q4R10GlP%2B8nwyv1PMA21crft2MD8YGhFa464e%2FgpRBU9PA0Dvj218SBZ%2BYYvU4kp4OcNzWRJwa7OJFkpP9PgWZUR4H3eUohBw5J3tT6wr%2F73N937zRJIRhp%2BhzppnUVdvZXxTYugtP8dDfSz8y3%2BeLbIMQ8z4tTUtJmo3L4atgLWgj5%2B7ZN1QavQaM2Wr3Jb8OijQ0DotLZjT0IbEVkzqojuElbymGDWrFkW2vMnPcZOcPFWw1qYAtHUjswdqy0ElurFr4UkzDg8Oheh70NJ9wmflpfcLxFIyAbzvDtDstzLMZy12ybpt06TijE6GPdMqMJLil8IGOqUBxBr6zVQEjsiiR0kOAnQhnZCijro14iUzeoYzwnjiWsp7ipAVtdi%2FvrLFt%2BPBSorYX9rDMuESx2laA1qkRMY8FrO9mpoerEcLa7DIR0gw9VgH04Ie181PXOq8BMwPS0pgq%2FfcjfC1ZngygwyedKTTxEP028DoqgA3z8k85jHCaw1%2FQ%2FIBzHYMRxjhZMjyAT5%2Bs9yS3iKNDt%2F9%2FKiOfeZgZjGrrNlc&X-Amz-Signature=9e89362390a63e2c33b8ec4c0b68c9bc0ca565894a46d137726513865b8cb2ad&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XW7BQMY%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmHUY8LD6BzTtVeVwJn9vH83g3NPatmUpqfdEB5vyU8AiEA%2FSAhjVptD87WKdozaWz8hYhom2zAeTIsTBg1Zt2k09sqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJBq2w1fPY7JMx08nyrcA3Nr9vX1rdTi%2FMO4UiSactujkOOYjQ8bGWXolN5dNEP6%2BcfABYl32oivM65Y7mk9MmdfEbI4lmnq28I1Wm0amaQYnJUo1odlhm%2FGXqNDXw3ocx06aeCnscVFUQQs1mQX6oa9H%2BjyJkzhvCPITUXwfpBZfwOwrxjIBWhzdp7KGeAjobQKCQq3YQAPX8IkSOQUIOEo6m7mjL5o24x575SDuVUhH6VK81jEJ98rYczsUNR45g5FeTjvuSM2jlCEZ8HtREg4MIkRxel2LqFF%2FSb5XzQaddcKQwAhvghuBHcQ42TLpeiN1LbRBzUBHAE4oVVD7hs6FB7LGs45jVnTXK1W0cwOIL1OlyrkLZeUKfqgHGPJuGh3w%2FQ3iFCAyo1Q52HPpaxFw7plxYOl9PTtlcy3H6ytVavN6eyykRNKfthjRxHLpIG3IeNz2R2nXvVwjw%2FYRdT7OeITB4eSa8N6UB07KansaZFkXkB%2Biqq2yfDox8%2FvAmiHca2bKfFUsxrh9CkkY5zTpRrn890jteqJ%2Bibluhf%2FgR%2Fpig%2FxxyC1FkJiX1q9ArRJ4LVZTI8Mk%2FbqgoRUegVl3wlFZHygSmBoFxEh8hjMd3cjg3L0TJg0a2I8Up%2FcQ2FWN5CJ7QyR59JMMJXil8IGOqUBmvNHym%2F7R%2BwxNCmJta6CtFa%2FZ2ab9Ql1g1IKhBc6DfphwDSoqPuMA2%2B%2B7dAnFX70MCBWGW%2F0n%2BC%2Fizw%2BvnFx3Sl6RFcBWMEH8GKTXJaPJ9DfYBEgwbfozQIFLfjSBK8UF%2BlFYQ8eZBK%2Fp9G8orB6XadJoHEao5uqInue%2Bc38apxe783f1Oo%2FSjgtVGwzKs%2BeMAtPJFoM32Jz19JJlSZE6103%2BBnB&X-Amz-Signature=c89d6d3872364363f81d366607dc85f2926efad68d5f63f078cffe60d016b199&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4LO37IL%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYAku5usHgitdgsfxDpJ1ckhOBc2veVD4q8REb4zt8SAiBUoByQepKTD66OIHQGmgDebHvF7cpf%2FDQuU4k90yYvaSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWLzG3jIvPOENi09cKtwDzzhbRHZzCxqoqQQYnlKkrF6WV1FKm3WyBplk65wfq%2FnTcyMBedqfWDIkzAyLBNuHr9aopwhbKRLn01RUhEzDYpmA%2FGCtcHeBjDYzQoighy%2BoeNuANGyY21xhiuQZheTznyN%2B3LHckf4TxqUqBYPw0VwHTr4H97Trqe%2FRkNM6wTH9YcZr1D4c27FJB8um9%2Fa2oJcsSbKcqhOrlyKCe3OHORDW%2F1kfWrxF81oMwrAHRWZaNCcRTneloon7QCMy5d3hdyndyKkpiw6UXWOo6Zjp69r9AcErqBuoXQ9gtniCwISdl9eYvzyXEVcK3TqFBjFT%2BQEGpR3sI8PYP%2FI0TA6Z7YPBpg6el8ghEmD%2Bs1a8ddabJXCcIhVMHGjt5dxT6rdKn6VNZBVSB%2Bjv%2BXWUQfdN6e2tqHFsE9AYMFLFueHhjuzPruW6wbpFPzL8ygUmWvKs4pJl2MRSg1YNHbA2Fakfq2nIJKNvsf%2F29cnmLha4AYp4mPND21sXmT3VEjoF5JQ4hG3FUGk5i%2F99oIr3%2FBEzcRmkBXOGyzABrZbhKIQY9a06%2Fipc6zP%2FqmKO1gc3PX6aa76xlj65KpnqOO%2BSheUBo5x6j1NFuSJi2psIr%2Bu58SYyc%2ByPV0hWmdLcCX8w%2FeGXwgY6pgFBwmquYidLEwK7L%2FKfmaZ%2BoP5X3Wpf8i7KF%2BCuhRj3Ole7No0OH8KUn%2BNh4b4dOfvVpPM0mt38RjGTuIBFdJSssPim4HGh4hZKdwPk70fEfXtCD%2BMFwVXRTWovw4uaYkAPMNWT27rkNT9dIR0HES6Jy7H6AUCccs%2BMhtb5PA6I%2FhMUZZjOKIvzcpxqmeXhNO10jNnN4Ay4gwQlJUkdwVFvn0KFMN%2Fr&X-Amz-Signature=28a2169fbc2dc977f34832b8f9fb0f8a2d7b503498a3b691539a4d6d36a1025c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
