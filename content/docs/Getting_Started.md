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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF265FAC%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkfnPdMeWPRFlLnefKrkF%2Bf8jTWS0X9v%2FuSJh2BX65OwIhALRAAkdMXvqkJo9hAiwBqBSN6tcPVPhq6Tfo7JN90WXxKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyid3nWMnGIvM86tUIq3AMcA28eqKvTJRywQSzz8oLqBlG9JYFJTKk0uWxiK%2BNOhpIgEEjU98uFlAIEon9vM%2F1izLdQfre0UP7TRZYY3w5VpX1SAoadi5%2F8BiPQCDzXqoekJvN%2B8qx3RT%2BEsDertUFCqp%2FcvU4RXxj6sCVAW3hucM1GQCAKbZT2DJVwsHT8fHvMRgoJwTEqSCDHR8XLa%2FtJ%2F5hX9SzFLWVYaN78vsKsd0t29BO%2F9WPN3qcoSXTJGyv%2FS8xqfqwbGRI4fNvzyoVfinWKHSmCxK0hSKC9ZLaemMU2mQa2CAKtvkkANMDEaMWsE1FSL5YlMCDCZwxhf7Jvfg%2BldLVW0uBo9oLP114aRuQiKr8r4OuvJOC2mqU6e5tTwjQO0S5WjSEhgIYJ1iqZcAZlwlAp0u%2FEAbByQTEDIeHHQlUJEvpTyVKIm6maoT8BlEF9qywDQ2vyULSCKMiAv5E%2BKpCZK6h97XH201tW1MjPe5TxZkiNMIxiL20K4e3ca1bXquhhgygMy0faZjM2wCk%2BKsKlt%2BeNO%2BbyGsKL6%2Bdn9J%2BlmvJVNsR%2FpuNKm4jUlcM%2F3Iah08EH%2Ba590kt8HHu5sGfUIk4AtCHVJgxuSk49Sts0WGDhEnS14gKiOiPqP7I3Ggm3DrMhkTDgyJHDBjqkASTM8gKia%2FNVp%2BJUg7EV%2FI4HGfW0aByL7qIL6Zekq4LHlqwRjXUdwCnXMoAYjr5dW8s7bHYmy5GhPIGyN1s2Cst1w2W5KPCqt2s1eC4k%2BT6xAnoNsyafdSCKjTghMFI58aTSu7LIpuAJqiO4zCdHpF46cBT5fkfVnUUyhmZ6B1869tVVWwqD3UF4yiNOd2Pw%2B6g8sW%2Bi0GdqCZiGDTmRYSJ2jyUT&X-Amz-Signature=ad4f67cb7dc638c7563f921d05a1be29e3a7c7b96ae1c6c31051a918033f7053&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF265FAC%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkfnPdMeWPRFlLnefKrkF%2Bf8jTWS0X9v%2FuSJh2BX65OwIhALRAAkdMXvqkJo9hAiwBqBSN6tcPVPhq6Tfo7JN90WXxKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyid3nWMnGIvM86tUIq3AMcA28eqKvTJRywQSzz8oLqBlG9JYFJTKk0uWxiK%2BNOhpIgEEjU98uFlAIEon9vM%2F1izLdQfre0UP7TRZYY3w5VpX1SAoadi5%2F8BiPQCDzXqoekJvN%2B8qx3RT%2BEsDertUFCqp%2FcvU4RXxj6sCVAW3hucM1GQCAKbZT2DJVwsHT8fHvMRgoJwTEqSCDHR8XLa%2FtJ%2F5hX9SzFLWVYaN78vsKsd0t29BO%2F9WPN3qcoSXTJGyv%2FS8xqfqwbGRI4fNvzyoVfinWKHSmCxK0hSKC9ZLaemMU2mQa2CAKtvkkANMDEaMWsE1FSL5YlMCDCZwxhf7Jvfg%2BldLVW0uBo9oLP114aRuQiKr8r4OuvJOC2mqU6e5tTwjQO0S5WjSEhgIYJ1iqZcAZlwlAp0u%2FEAbByQTEDIeHHQlUJEvpTyVKIm6maoT8BlEF9qywDQ2vyULSCKMiAv5E%2BKpCZK6h97XH201tW1MjPe5TxZkiNMIxiL20K4e3ca1bXquhhgygMy0faZjM2wCk%2BKsKlt%2BeNO%2BbyGsKL6%2Bdn9J%2BlmvJVNsR%2FpuNKm4jUlcM%2F3Iah08EH%2Ba590kt8HHu5sGfUIk4AtCHVJgxuSk49Sts0WGDhEnS14gKiOiPqP7I3Ggm3DrMhkTDgyJHDBjqkASTM8gKia%2FNVp%2BJUg7EV%2FI4HGfW0aByL7qIL6Zekq4LHlqwRjXUdwCnXMoAYjr5dW8s7bHYmy5GhPIGyN1s2Cst1w2W5KPCqt2s1eC4k%2BT6xAnoNsyafdSCKjTghMFI58aTSu7LIpuAJqiO4zCdHpF46cBT5fkfVnUUyhmZ6B1869tVVWwqD3UF4yiNOd2Pw%2B6g8sW%2Bi0GdqCZiGDTmRYSJ2jyUT&X-Amz-Signature=eecb77fcd8d378b4a0dbcd218873ae6e1becc3876d6ac3e0ec4435afefa510f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF265FAC%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkfnPdMeWPRFlLnefKrkF%2Bf8jTWS0X9v%2FuSJh2BX65OwIhALRAAkdMXvqkJo9hAiwBqBSN6tcPVPhq6Tfo7JN90WXxKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyid3nWMnGIvM86tUIq3AMcA28eqKvTJRywQSzz8oLqBlG9JYFJTKk0uWxiK%2BNOhpIgEEjU98uFlAIEon9vM%2F1izLdQfre0UP7TRZYY3w5VpX1SAoadi5%2F8BiPQCDzXqoekJvN%2B8qx3RT%2BEsDertUFCqp%2FcvU4RXxj6sCVAW3hucM1GQCAKbZT2DJVwsHT8fHvMRgoJwTEqSCDHR8XLa%2FtJ%2F5hX9SzFLWVYaN78vsKsd0t29BO%2F9WPN3qcoSXTJGyv%2FS8xqfqwbGRI4fNvzyoVfinWKHSmCxK0hSKC9ZLaemMU2mQa2CAKtvkkANMDEaMWsE1FSL5YlMCDCZwxhf7Jvfg%2BldLVW0uBo9oLP114aRuQiKr8r4OuvJOC2mqU6e5tTwjQO0S5WjSEhgIYJ1iqZcAZlwlAp0u%2FEAbByQTEDIeHHQlUJEvpTyVKIm6maoT8BlEF9qywDQ2vyULSCKMiAv5E%2BKpCZK6h97XH201tW1MjPe5TxZkiNMIxiL20K4e3ca1bXquhhgygMy0faZjM2wCk%2BKsKlt%2BeNO%2BbyGsKL6%2Bdn9J%2BlmvJVNsR%2FpuNKm4jUlcM%2F3Iah08EH%2Ba590kt8HHu5sGfUIk4AtCHVJgxuSk49Sts0WGDhEnS14gKiOiPqP7I3Ggm3DrMhkTDgyJHDBjqkASTM8gKia%2FNVp%2BJUg7EV%2FI4HGfW0aByL7qIL6Zekq4LHlqwRjXUdwCnXMoAYjr5dW8s7bHYmy5GhPIGyN1s2Cst1w2W5KPCqt2s1eC4k%2BT6xAnoNsyafdSCKjTghMFI58aTSu7LIpuAJqiO4zCdHpF46cBT5fkfVnUUyhmZ6B1869tVVWwqD3UF4yiNOd2Pw%2B6g8sW%2Bi0GdqCZiGDTmRYSJ2jyUT&X-Amz-Signature=4f12b8b517f5e7e2955213776933d806493321a6f10e367d1f6d3205248ea26e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMNWREOI%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvrvn7lXe1fdJSQWM%2Bxuvjc3y8ByJ%2BL25LNgqlVKDINwIhAIFvof95GzsOS6DDjsS%2FCbGXDVgtXLpS0Wx0lRqdJTLUKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6fT%2FpnAzTGC5DXRMq3AOKylFijZneObgUgv8VZWnnFcgoRO6gOv6wCqNb0OpcGAq7WtczbyCelltN15dWAZi4i3UKdMX0MCWX5fUrPQyvgH8Xuc%2F5YfsYi%2FCl745EBMyrAGqOCAhHGyq2GwCCRUm3pi2DRz4uKxt4kmvhvFApVNS%2FTjn9S2A%2B8fQHrBbiFLZbozFq%2F42Fv%2BGkpsqEi7N4yHV6Qka7dyhvyJGyLBjWdMsXlCRtQA0Qm1PCOS38OMTjS%2B%2FXjZFLMlqBlVPIVk2rVN1bLeNH6MY9CN9xxeqFT07TKaGpjP5bFzrVtIfoHeaxgTGqViFeLu%2Bca3oNiVgkyRqrPjVARCGPIlZ%2B6YPn8gjam23bEACXBwFAGmEQAolW8REmw%2FXa1q1hzZJUUl9yWHHdDhLgnvT7RW90zZR59E8YS7%2BaQ7l%2F3tidswLTjEF0s0N2yH%2BqcWNuFPgFzXq5JArmxtdlGp9aFBtnQflBmco4PbQ65IoWWUuafvlPEpXw21cpL8I4XZnPbVw8VllUkKiBsefmhPMEalicg%2BaNKa22U5Pe1bZhkBNnF5JIhtvnhMgIjKTMQM3ObT15neZ2rE2RvUrLNuxr3q9vg2H4TwmGQSyM%2F%2BH7jybnJ5hfe%2BfYaMpqGWfPIXMq4zCCyJHDBjqkAQFw796lsGGXEWn5jcwkb4y7xbXN1rft08RbbQ1icC3DYZflLkR6QMrICN6PzYaNieQlPnj5awA7x0I615NnC8GoFYMZ5PpC%2FYCN081eJmAeFS9DOTXPZKBpGADWrsjEXU%2Bf60gmU8GFE42rEgLR0AN7jStAG3dUvUG4Xz%2FI2Cq5sKWddDcjYDZjybb81uGD%2FoZmfPSFi%2FlUIPlbSN7tatnYUlby&X-Amz-Signature=cb8ccd2939872f6bb10bbbc137b92845eaf4cc47d32eec870370b725d2536dd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSN3FBMH%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFL3DimHYmIx51oU6oyJ9ISvnJUSl0yaSz91cG334qGgIgBxSevUr7bxaiZpZlOOShfAjW9p7yWp89tcYZ%2FwkzYlkqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhSQbQ%2BbSdcZ1JPYCrcAyFe96B8V4WWYUzA0K%2Flj%2F1pRTuBhsmHF1kjrsk6hf4Ju0qpeN9uqFSvGVCKO51xwm67cMJ2s5qAKskXV55u3KSZ3v6pDm1bYOX1ihvTW%2Bj9wfhOkL8GgYEgfE6vNSH3D4iIPIfupBvnAzSBKQtwlPKLejdTr%2B2fF7Wm3EWNRzOoNsnlX0c7xq%2F%2Bi5KH1ETemBAU%2F92gOxiIPd3D2gy1r%2BQbuRo1byuWYRfOuMdHAM49Llo1Re2V1U0BMtE3PrXkiH1u3eApyvLdkBI7d0uJtcEIAXNlM1PIgBQTMlNIHFx4gbAh8iWs9cz3eEz%2B1%2BFN%2Bo5q4kEvIER6nq7FcdS6wFTYUwcXre%2BONzq248nFRy4O0j7nMf1Y6%2FYzDV2u07w7przXzhwdCWYMtdfh5u4ohgNbDHX19qsPj6zw%2BwkJFuOyYqidykwpsQ4ekTJUEs0JjpWJtgio0Oxe6hd%2BpTB4kOjnZ1kxoZen3wTBQ1Fg8dKJrpiAI8s2YDe9o%2FRkxLt68K%2BByk0vT%2B2e7XhEdmzQKBxvVRfM3jUuvUzSvni5JxN8XpO5XWYJuDsakzdvqpuQOJzh3brBrEVnf0Shy4kQZAhEmBArS5wLlsgfQxlJtsEPb%2F2OvsIB61x8BwpMMJfIkcMGOqUByPBX6BYPULI2xwBfki2y1cm%2BrYxSRwf7ZON5XlW4mM%2FTnVajLlRK5zdkWO%2BeUJ87nZPT%2Bw1csWgpFbt15V56jyRJ4Tu1fd2rKwA0RuWDYgvjRjPDleeJqiQML094guaBsPDIuJ1QhOqArFbBLJnAtF5mDLTJbgm48MAZdkMJ4UWTL6DiKZQYh9c8lKcaWhlQ47UzHbhEkAZD6UW8hhWTHjy6GvDP&X-Amz-Signature=259209b05d5ace5a54c9e0f0de3ad93e44cfcaaf7b98ecfa9b9fdb324559b0b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF265FAC%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkfnPdMeWPRFlLnefKrkF%2Bf8jTWS0X9v%2FuSJh2BX65OwIhALRAAkdMXvqkJo9hAiwBqBSN6tcPVPhq6Tfo7JN90WXxKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyid3nWMnGIvM86tUIq3AMcA28eqKvTJRywQSzz8oLqBlG9JYFJTKk0uWxiK%2BNOhpIgEEjU98uFlAIEon9vM%2F1izLdQfre0UP7TRZYY3w5VpX1SAoadi5%2F8BiPQCDzXqoekJvN%2B8qx3RT%2BEsDertUFCqp%2FcvU4RXxj6sCVAW3hucM1GQCAKbZT2DJVwsHT8fHvMRgoJwTEqSCDHR8XLa%2FtJ%2F5hX9SzFLWVYaN78vsKsd0t29BO%2F9WPN3qcoSXTJGyv%2FS8xqfqwbGRI4fNvzyoVfinWKHSmCxK0hSKC9ZLaemMU2mQa2CAKtvkkANMDEaMWsE1FSL5YlMCDCZwxhf7Jvfg%2BldLVW0uBo9oLP114aRuQiKr8r4OuvJOC2mqU6e5tTwjQO0S5WjSEhgIYJ1iqZcAZlwlAp0u%2FEAbByQTEDIeHHQlUJEvpTyVKIm6maoT8BlEF9qywDQ2vyULSCKMiAv5E%2BKpCZK6h97XH201tW1MjPe5TxZkiNMIxiL20K4e3ca1bXquhhgygMy0faZjM2wCk%2BKsKlt%2BeNO%2BbyGsKL6%2Bdn9J%2BlmvJVNsR%2FpuNKm4jUlcM%2F3Iah08EH%2Ba590kt8HHu5sGfUIk4AtCHVJgxuSk49Sts0WGDhEnS14gKiOiPqP7I3Ggm3DrMhkTDgyJHDBjqkASTM8gKia%2FNVp%2BJUg7EV%2FI4HGfW0aByL7qIL6Zekq4LHlqwRjXUdwCnXMoAYjr5dW8s7bHYmy5GhPIGyN1s2Cst1w2W5KPCqt2s1eC4k%2BT6xAnoNsyafdSCKjTghMFI58aTSu7LIpuAJqiO4zCdHpF46cBT5fkfVnUUyhmZ6B1869tVVWwqD3UF4yiNOd2Pw%2B6g8sW%2Bi0GdqCZiGDTmRYSJ2jyUT&X-Amz-Signature=943b9b10b8a7baa7a765048e4eff839715574f49f739ecfba5aadeea296bb4d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
