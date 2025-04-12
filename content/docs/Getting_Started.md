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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZNGECPM%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T150643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJFMEMCHwfxnXFqwXX0Agit8qyitfmVor78gHBc5Bc7uUEE17wCIAqyAumkht%2FO5HJCt1nHti5rRUhg9iZpDJLWemDM8yVJKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOE%2BwEtn5NMr9jW5wq3AOz995wRSsbsit8ta21Sm%2B1CY6n2w0FNlKxL0fXeQjP50d04WSyhex8kIrFc3TYzbJyWvFc8QK%2Fhkk5b8nJ%2FtervFClZTuzfkti7DctRpwPnhRIGk3sFF36%2FGkWo%2B%2FBdvuFrWgAIpk9AVa3ku807p4EkddlMMOAwXiDV2UDA0TZIBeYYttKBK%2F1BhR%2FRovBYbHICxMrZd8Ffka8sC6dwPEBFemEEIyixiA2aKLv5%2BI%2FfJzwi44x0arWJQOG6qk4CvAsihv%2BfDiZSV1MG%2BGPWn%2Bs2gba3qEPLn4e5PYwyz6Yqi%2FMyKBMNL8hg8pB4eqNWUKmKGKJQFh2eUkTL3%2BtmSDaOPSZOG4sZ4bhUWt%2Fu%2BCB%2BYsSdZMStcugLF1M7doaoKHwRLXgnYUIhQV4oyVgOPFaFDp6RWbrHVs2eUcq3UTVYQk2LR1dOClwqTsY72JKeTxKnsSEyBKe2DUyU08z22%2FOjLI4xQx%2BqJW1cpdLlccSYLAKUFUyBzqO48zAom0Y9Pny4p%2BiC7ujeLOelBZibD8SytIfW62uNmE2EwIE1yP80nZ9v2iVdMmKSf04UPnA%2Bbn%2F%2FzDkq0NPRvx4eao3bpMaDVsh3lXramoUQQF7ac8cBMqCUJjP7gW1MkwWyTDq%2Bum%2FBjqnAcOuijdqd4W2qRpbzbT%2BvqjUm%2BUlue1eKsRnJqpedXK12tBM9IRhO1xupry35RnLoY2qXjeNyL24WvlZo%2BMCokhbQKoeU4N1RSkQeUCkpoDMoXYFHOPUCvgkgL6jXeqLSbRfCg4jEPeFPCxsOm8Z07PWPDRDC5vOK9dVCv2v3ssRVfj9BBsWzTBHWMUE44HHczpsC7QgI%2FUaAzIvI5NoYRJICP%2BdoMss&X-Amz-Signature=5d16317b26d0ae31ad8be5484e4895b299a09b804f7cd0eff5bc3dd292e78610&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZNGECPM%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T150643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJFMEMCHwfxnXFqwXX0Agit8qyitfmVor78gHBc5Bc7uUEE17wCIAqyAumkht%2FO5HJCt1nHti5rRUhg9iZpDJLWemDM8yVJKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOE%2BwEtn5NMr9jW5wq3AOz995wRSsbsit8ta21Sm%2B1CY6n2w0FNlKxL0fXeQjP50d04WSyhex8kIrFc3TYzbJyWvFc8QK%2Fhkk5b8nJ%2FtervFClZTuzfkti7DctRpwPnhRIGk3sFF36%2FGkWo%2B%2FBdvuFrWgAIpk9AVa3ku807p4EkddlMMOAwXiDV2UDA0TZIBeYYttKBK%2F1BhR%2FRovBYbHICxMrZd8Ffka8sC6dwPEBFemEEIyixiA2aKLv5%2BI%2FfJzwi44x0arWJQOG6qk4CvAsihv%2BfDiZSV1MG%2BGPWn%2Bs2gba3qEPLn4e5PYwyz6Yqi%2FMyKBMNL8hg8pB4eqNWUKmKGKJQFh2eUkTL3%2BtmSDaOPSZOG4sZ4bhUWt%2Fu%2BCB%2BYsSdZMStcugLF1M7doaoKHwRLXgnYUIhQV4oyVgOPFaFDp6RWbrHVs2eUcq3UTVYQk2LR1dOClwqTsY72JKeTxKnsSEyBKe2DUyU08z22%2FOjLI4xQx%2BqJW1cpdLlccSYLAKUFUyBzqO48zAom0Y9Pny4p%2BiC7ujeLOelBZibD8SytIfW62uNmE2EwIE1yP80nZ9v2iVdMmKSf04UPnA%2Bbn%2F%2FzDkq0NPRvx4eao3bpMaDVsh3lXramoUQQF7ac8cBMqCUJjP7gW1MkwWyTDq%2Bum%2FBjqnAcOuijdqd4W2qRpbzbT%2BvqjUm%2BUlue1eKsRnJqpedXK12tBM9IRhO1xupry35RnLoY2qXjeNyL24WvlZo%2BMCokhbQKoeU4N1RSkQeUCkpoDMoXYFHOPUCvgkgL6jXeqLSbRfCg4jEPeFPCxsOm8Z07PWPDRDC5vOK9dVCv2v3ssRVfj9BBsWzTBHWMUE44HHczpsC7QgI%2FUaAzIvI5NoYRJICP%2BdoMss&X-Amz-Signature=80637e59143bf8b3e69aad7dfd8fc36e1edb740c88b75f6d3bf12da16834aaea&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXXWIADD%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T150646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIC3%2FEe%2FHKmDwGlty7GxM5rgGRWQ3fSFfnkJJbOjnHa%2BaAiEAkz7NZiItgn4PxLi3gHvwnqXuA5WgRIHIIVLZcXkPInUqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwxca9R41BLqFgxSyrcA9cbXtiUhu3eB7F%2B6NsdhSC%2B2NI6kUT%2BcTAHb972PpPorFhMQftqh%2Fu7Ob0q6fsPxvKEZTMIMYlv56dlfKYs5oIqX8IcRV3XFEIUgOQHEGe4qReumu8tWJb2joKF1%2FncKidmTWEoC6HJBXiIbSRl4ea6Z8woIvAhg4DW3FalM39yciSD%2B7lQU0XuuKARqXb%2Fma09NhjXjpinOyrN7h77agC8wmhw%2BaBR0teTjS1HkN5VKjUzw6ncroKQLcEe9iaxZgABDGOVp4q7O%2BXZ9u1ycpHrr7qNMYO%2BuNd2ljSIf87oQQHiS%2BVGAwTwU6fYzZWQO9cE6PtL9DDqrNxjMuuJ8aJCDWdot7pdYVCRFdTsxU2QJlcvqcuqzt9yRi5uq%2BU7hHG3Tl5KUAbPfkPCsj68FcB%2BRcmtuhcos5Y4mZYHanfSuWLATSuM%2BuqMbW0HQf8MdcPrPHfwcM9bF93BvSyVQtB6rh4lE2EA2jolWgUufzw2YPKcphbmGFzRdpX%2FJd%2Bf7i0mssR7WYrS6QXpx4D39OuRlZ9Z793ME5WU%2FQWzf6JYhUSEEIRuHzMgJENaPoKbyI8JOQBeOB4NRVMozVceBkwK43z%2FfHMWD6%2FaL2HnzoeS1qPbt9d1f%2BGkgPRqMOb66b8GOqUBqRSUOxVdPIMSyL73Wp%2ByLlgx0hP1nqo2VvkYhau2KGAtUQKNwWNkqJ7E5LBDnF5JzmQNhOocGPsAwu5dNL5e7iwGViQe1vSQOqMQHSNTJGzLelG1xRc60b%2FSedx0%2FkCBPNpA6SJsjevwtPWbjX0a%2FUs1GmFyCqr5Is8yqgvCv9wy4tBB7jLpX03H013mzzsxSAelfqBTdlLMNvUw%2FYlqiFF0TpZb&X-Amz-Signature=3f7f8bed16a721bced736b769d586dbe08763ccdc19451691c96f969d43e5b35&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y2JOYQN%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T150646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCh6%2B6qju9apmaQSjyyCgad25LQKxhSYWOA9qIP0arEwgIgP6U%2FRxAATnVd6d9lEQwYg%2B6dknB3SxWEDkjCqLsnVm0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBJetB%2FJJpbC%2BE%2BnSrcAzJVWnpvnVuXumcEV%2FoY6TBYVSkEDZuUwxaAZuznE98sSWvU%2BbvyFRhuIvRs1lSgyhZQ5FCLNgWq%2F3wbLqAB3MGxueG1Z3tPvscguCDIVhHDKH1vo8wgTPRteFOihm0%2FabthVjIp48YETX7AZFwjKkv0VEF%2Fmu%2F8b9ZSypJWMMzH0%2BNeyU4oSghZePRL4oLcVkMB9L%2FyYBJnCNz8Oy2toV3Ic98RX4XbHMExVhHvKBjYyhELpW0HZJGkGymCh3Gdp8579TDsyvNyztyvwHbHNbVzuZ8wj9uwRi6NdqM5D%2Bw4JRLgcANUKuP3TmK0MjquJCjNw4txl%2Bqe%2FeSaajN069dtf80YHybvwfBDz3kHS7JOYwjbDJMEqMwxlJnzK%2Bi823nBckxSUolXIo0chHyWiILGWw3JHf2JkKmAR4RkdW0LHouRrmiMIvOggn484se5%2BAGjrh90JOfpWNvXt%2Fa3GDRSw%2BnsJ5lCcOeq9pXv5RYZWjTJqivx%2BpODD4%2BTQatRSPWbzulyKyLRZjll2Wm4XsTXXNJ9H3FxxmTsaFDt8jaZWwyagslDAO6EIhEstS73%2F8y8SGarReskk2VnLkO4iWCiNftLAbM27QEm0SzFuCf3hTPCAv6PsCoQ7HtgMKH86b8GOqUBeJ2OLO3QGkee5w6zEMPh1deeSQTjACJuXeqLp8OWZH2YhCnuy6x%2FOhXQ5pEldVWOxhqMpvzXmS%2FmZO5mNxs%2BoB85CPws9qnehvM5Pf91WYGnqoOeBc8BFAhR80Xei%2F9mqWntpwacC2XWTqCCPjgXorhyBA6sndI23PPB6Ggy2rqJfYmG5m8nvDy%2FJqJGB2mZXDFddVGU27LLHh7QtN33WKz2wJdJ&X-Amz-Signature=74aef14a69195aae8892a59cb7a0a57b81f3a66edaef5f1bb1ce523baa7e5cad&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZNGECPM%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T150643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJFMEMCHwfxnXFqwXX0Agit8qyitfmVor78gHBc5Bc7uUEE17wCIAqyAumkht%2FO5HJCt1nHti5rRUhg9iZpDJLWemDM8yVJKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOE%2BwEtn5NMr9jW5wq3AOz995wRSsbsit8ta21Sm%2B1CY6n2w0FNlKxL0fXeQjP50d04WSyhex8kIrFc3TYzbJyWvFc8QK%2Fhkk5b8nJ%2FtervFClZTuzfkti7DctRpwPnhRIGk3sFF36%2FGkWo%2B%2FBdvuFrWgAIpk9AVa3ku807p4EkddlMMOAwXiDV2UDA0TZIBeYYttKBK%2F1BhR%2FRovBYbHICxMrZd8Ffka8sC6dwPEBFemEEIyixiA2aKLv5%2BI%2FfJzwi44x0arWJQOG6qk4CvAsihv%2BfDiZSV1MG%2BGPWn%2Bs2gba3qEPLn4e5PYwyz6Yqi%2FMyKBMNL8hg8pB4eqNWUKmKGKJQFh2eUkTL3%2BtmSDaOPSZOG4sZ4bhUWt%2Fu%2BCB%2BYsSdZMStcugLF1M7doaoKHwRLXgnYUIhQV4oyVgOPFaFDp6RWbrHVs2eUcq3UTVYQk2LR1dOClwqTsY72JKeTxKnsSEyBKe2DUyU08z22%2FOjLI4xQx%2BqJW1cpdLlccSYLAKUFUyBzqO48zAom0Y9Pny4p%2BiC7ujeLOelBZibD8SytIfW62uNmE2EwIE1yP80nZ9v2iVdMmKSf04UPnA%2Bbn%2F%2FzDkq0NPRvx4eao3bpMaDVsh3lXramoUQQF7ac8cBMqCUJjP7gW1MkwWyTDq%2Bum%2FBjqnAcOuijdqd4W2qRpbzbT%2BvqjUm%2BUlue1eKsRnJqpedXK12tBM9IRhO1xupry35RnLoY2qXjeNyL24WvlZo%2BMCokhbQKoeU4N1RSkQeUCkpoDMoXYFHOPUCvgkgL6jXeqLSbRfCg4jEPeFPCxsOm8Z07PWPDRDC5vOK9dVCv2v3ssRVfj9BBsWzTBHWMUE44HHczpsC7QgI%2FUaAzIvI5NoYRJICP%2BdoMss&X-Amz-Signature=bf090b69ed5bc802a01c4aaab26dd019535b516979690f0a6ad9e998b0aa5605&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
