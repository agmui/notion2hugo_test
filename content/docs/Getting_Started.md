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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AVAHP3B%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANktHrbM47ohsGyEqwTK5%2Bp8r5b4NCoq7AJipe3ndMCAiEA4stbwB2LT4eZsupp6eBgAJIp8uChhCU2GenprfBOgYQqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4fF0TgBiM3azSWtyrcA6gPAo1t62hB%2B8AQvM6k9OroCw%2B5AvkCr9yyupu9NTREkMot%2BipPeoU7YXfcD7IAe%2F1il%2F4goG7XtSrf5VUIuLaYOHeHr4XDni4t1D8LJT1iXNcC4axLFbz4ga2zWJcNJ1rj%2BWLMqJT9X1TfAB1zuHH7YQ6JpGR6xczgaUVZLn1YRiFmmV1HnOjTg83AjgL1qhMtpDkr7oVI2ENrXGvojmsGnyW22CaoGggALvQLoKncAhfzHTx8TQNNdZXRtQhXgOu4MVejS%2F2%2FntjKBU3ieqydUrAjvMbsds4%2BsAQDqQbT7LseQfLA0sbKUhD4639If2iPyamEUS1qfurnNTxoowghYnxtmNwVuyDMsuBys1c4cQKVpvEQkaTB3oDjPCceEZnSJDN1PXJE6LS44wFAho8eylXoRcpc4s4qwjtWdHLf0aM0rHlDPYOa9w4VVjIeT%2FoqLskMot%2BnN1OXv8El3xSigNCzU3pd07xT8hvmxIMWclkfGQ8e5AnarNiGdJwO0%2Fy374fxJXh3hCE6vny%2FAbIuWuWQ1q3mtMhqwfZEzjWISdTBvLC8vARUyieFFQxrykoY%2FQmtQzgFd2B5dNBVhXLH%2FzQ9bEhdw08iy63YR5JVnhgVUvxzuXA0rtGDMJatjcoGOqUBvkZDyNYUevOgGWMPraoaeYiuyaiDTfMHV82ibg7R5EeHR69kZ6fhBD1%2BZzdgBq3oxR8AWeTittq%2BV4ElH4%2BgMuwS1ncw3WpJ4BHUswl5UnKt79PXpbEWb1A%2B3czExSWyx80uupsIuDCqbq%2BZyfiFpS8wt94i8QKSKqhsi6bafrvuXz%2BnLwixuEqp16bvN31kkaSnMM6sg1F%2FKnGzESUGz0JhA33V&X-Amz-Signature=5e15a9b3057ab2ffc59aa604c86539a6d334aa405a5aa6efddd8cfba185da807&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AVAHP3B%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANktHrbM47ohsGyEqwTK5%2Bp8r5b4NCoq7AJipe3ndMCAiEA4stbwB2LT4eZsupp6eBgAJIp8uChhCU2GenprfBOgYQqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4fF0TgBiM3azSWtyrcA6gPAo1t62hB%2B8AQvM6k9OroCw%2B5AvkCr9yyupu9NTREkMot%2BipPeoU7YXfcD7IAe%2F1il%2F4goG7XtSrf5VUIuLaYOHeHr4XDni4t1D8LJT1iXNcC4axLFbz4ga2zWJcNJ1rj%2BWLMqJT9X1TfAB1zuHH7YQ6JpGR6xczgaUVZLn1YRiFmmV1HnOjTg83AjgL1qhMtpDkr7oVI2ENrXGvojmsGnyW22CaoGggALvQLoKncAhfzHTx8TQNNdZXRtQhXgOu4MVejS%2F2%2FntjKBU3ieqydUrAjvMbsds4%2BsAQDqQbT7LseQfLA0sbKUhD4639If2iPyamEUS1qfurnNTxoowghYnxtmNwVuyDMsuBys1c4cQKVpvEQkaTB3oDjPCceEZnSJDN1PXJE6LS44wFAho8eylXoRcpc4s4qwjtWdHLf0aM0rHlDPYOa9w4VVjIeT%2FoqLskMot%2BnN1OXv8El3xSigNCzU3pd07xT8hvmxIMWclkfGQ8e5AnarNiGdJwO0%2Fy374fxJXh3hCE6vny%2FAbIuWuWQ1q3mtMhqwfZEzjWISdTBvLC8vARUyieFFQxrykoY%2FQmtQzgFd2B5dNBVhXLH%2FzQ9bEhdw08iy63YR5JVnhgVUvxzuXA0rtGDMJatjcoGOqUBvkZDyNYUevOgGWMPraoaeYiuyaiDTfMHV82ibg7R5EeHR69kZ6fhBD1%2BZzdgBq3oxR8AWeTittq%2BV4ElH4%2BgMuwS1ncw3WpJ4BHUswl5UnKt79PXpbEWb1A%2B3czExSWyx80uupsIuDCqbq%2BZyfiFpS8wt94i8QKSKqhsi6bafrvuXz%2BnLwixuEqp16bvN31kkaSnMM6sg1F%2FKnGzESUGz0JhA33V&X-Amz-Signature=6b828572432d6b5838552bd206cc20773c6bee49e2933e2a6bfb47ee9e1dc7f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AVAHP3B%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANktHrbM47ohsGyEqwTK5%2Bp8r5b4NCoq7AJipe3ndMCAiEA4stbwB2LT4eZsupp6eBgAJIp8uChhCU2GenprfBOgYQqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4fF0TgBiM3azSWtyrcA6gPAo1t62hB%2B8AQvM6k9OroCw%2B5AvkCr9yyupu9NTREkMot%2BipPeoU7YXfcD7IAe%2F1il%2F4goG7XtSrf5VUIuLaYOHeHr4XDni4t1D8LJT1iXNcC4axLFbz4ga2zWJcNJ1rj%2BWLMqJT9X1TfAB1zuHH7YQ6JpGR6xczgaUVZLn1YRiFmmV1HnOjTg83AjgL1qhMtpDkr7oVI2ENrXGvojmsGnyW22CaoGggALvQLoKncAhfzHTx8TQNNdZXRtQhXgOu4MVejS%2F2%2FntjKBU3ieqydUrAjvMbsds4%2BsAQDqQbT7LseQfLA0sbKUhD4639If2iPyamEUS1qfurnNTxoowghYnxtmNwVuyDMsuBys1c4cQKVpvEQkaTB3oDjPCceEZnSJDN1PXJE6LS44wFAho8eylXoRcpc4s4qwjtWdHLf0aM0rHlDPYOa9w4VVjIeT%2FoqLskMot%2BnN1OXv8El3xSigNCzU3pd07xT8hvmxIMWclkfGQ8e5AnarNiGdJwO0%2Fy374fxJXh3hCE6vny%2FAbIuWuWQ1q3mtMhqwfZEzjWISdTBvLC8vARUyieFFQxrykoY%2FQmtQzgFd2B5dNBVhXLH%2FzQ9bEhdw08iy63YR5JVnhgVUvxzuXA0rtGDMJatjcoGOqUBvkZDyNYUevOgGWMPraoaeYiuyaiDTfMHV82ibg7R5EeHR69kZ6fhBD1%2BZzdgBq3oxR8AWeTittq%2BV4ElH4%2BgMuwS1ncw3WpJ4BHUswl5UnKt79PXpbEWb1A%2B3czExSWyx80uupsIuDCqbq%2BZyfiFpS8wt94i8QKSKqhsi6bafrvuXz%2BnLwixuEqp16bvN31kkaSnMM6sg1F%2FKnGzESUGz0JhA33V&X-Amz-Signature=c2380f167a170f6d76352bc1648a3b5fc831aaa72535c6d35d53dd1dacea941a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SZF34YB%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHI9rS61b3e1tQd9ECHkst2IDddRUDI9A%2BQ5l6ouy14KAiBur0RufBe0IaZbDxHTmyUfbpa3WeRFvtRM1Pk8MDmgeCqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCPUCPkoiVqbBc1V9KtwDK8RNUq1K%2BR8SycSYfhr3Z%2Fg9tvy1HytiK6Rv1X8CxZhpZQSHSXHHSoBP8GOKkpBjxtg6Spv3CFDNynZ2HXvBi8lmkUWJNlRu%2FR%2FBbFL5RqJn%2FffzNrLegqi5L%2BB3NjFpP5LQKs7DCixixiCGTGLtXjA0UR9NIhrGUOwVDnx%2Bj32S2Rn5GUkB3Q9yMJQtgSgvUfhEobGL3FKpgdDBSPVp1jqMYXkQ5biTs%2B8rgVVZPpezrvBjZ%2B8OcQ%2FXo%2BThh816bwxz2z9SVk9tzJvVxaFvsB1mSVos4puNmrNRd2RsAM7RpLj8bUD54MGxgg0HYmfOHZH4XesC3u3dM6fhuGpu1rL347ffKckd6rbC14CuQuBO2DD2QOx9QDHXTlMiTB1cI5C2XofEmeCO4gzHwgx04Bd0aA85T8ifzGIKhiNShNu8O%2FPwLFfUFdnZIYNYV%2BGOjdWtWOkqru5PcBmFYPb9ByChuD7y%2BoJRwIxiHrCMsb0yjm95xRDcgxzXpQ2FB0QXrS7mXu79Eh9Fq%2FHumTLs%2BofVW%2BHl0PTwTDfGpxywagQihz022ZdX6Z4WZ24uo223T4XIXFs%2BqYFy6J3NOWhTdbS7Dobzf8P0V3HFi6q0ywBFtlgMHJnvpxSO0O8w1K2NygY6pgEd5cHQIa5brv5Kr1IwHuHkv9jKbeEqd0eM7rqysxHeox5q8XhhLvyynWYs7RgsLPvDZQmWClgwWGnqhcz03weihS3rSjeT3Em2EQCMeS9Knmi8KgbDSX2wONkwEkkB9jQr2l0PTSS8juyibkXr1CV1g1ezwJcPfRMS1UGJVMjTxWIwQVxO9O9x93y1NTUQYBEBef99uQyGdz1aDMGeBcEA4cC5m0R%2B&X-Amz-Signature=36f8d847af1cea7c37cd7c2b1f2cf83d161f6ee227655f61bfa93e1cee02e5c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEAY4NG2%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BX5KtxOIeguh4HgCkYVO4KZ245CuczQs1biTy4Uo59AiEA8V5ky%2Fmtv%2FftHgbGL8%2B8ZDaIvrtls5q%2FwzPFAqU2sGEqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyvaFkE8q5rDSKiiCrcAy4x%2FgcqOPcKggnJQmExJ8AkZN95PAsA9mXu1OSBVJ%2F8PPJtTZKu%2BiF3AWhPc%2BcP6hQr8wWQ0Cu4rLm66ZAXozmAByslDqeycsu1Ial7FkGXCg6QpaA8om7vJmv24ewvKEYgwTd7H8bCQuLSzO1iNC13vElQ3g7mVwMnwmZOQxfnIxOSUG7sETDAEuZPmS%2F4KprrOhWzhUYKEtFXKNfQKzMo%2FUGP0xIXoyIEmXSq8sFt%2FugB8M%2BLUCJe%2BJXDgl8t%2Fhr9pF1G%2BQhnA%2BpA7ACezs%2FZNKriBQDmaOoe1TXALYhG9MOvKeEWgFnyGBV%2BtcUEH7l9J1ZT2mGGZSxg%2BqnchrNhBtFFA8Aj2Xvf3wLv1OLjLZsOiuYnVlW1Udgk4PN9x1TJKzHkP2juQbPob%2FjwVNh1JrTVeM0ZcgjboNkrxT24JFD8lpJXMiLIw7AiZOiBQ9bSgxpa5ECIF8iJiPoKPZooWFY06MY3HkmXTLNPzCqQ%2F%2Fnu5H7kjY%2B9X56TA%2Bnk1TuML1jBXcp2p0vximl2hTp52wk8Z2zbdBd8mFnWZMOfvi%2FfKckIwMWKBl%2FzGWDhm1Ris7q3HjpT2B%2BZLZacJVa4fATeLs0LgOxli2XmPRK6gZOatygZbO0l6iJQMP%2BsjcoGOqUBBdNXAxHiABLX6%2FZvjfUq6hu%2FhKYt6cYQqK17asLU4UCD6Kz8CGBw4acuOMOoXftOX82rP3JAMsGeNaVJlJR6xrAuWawDz%2BpYsW75zUHK42jn9Q6p6qpyMHGF31b6Z%2BDPkivTutYXfwrj6C9IsIL2UGkeBtDUi7FHAO8CJ1NJZNn04C99%2FMZ1MmqXv1hu1eLzp7QHkTTSYuiCSRhe7%2BjXaVSauh6W&X-Amz-Signature=31fee19ed930685e5d29998497eb43827331208afedd46e51ba0fa15ddfdbd99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AVAHP3B%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANktHrbM47ohsGyEqwTK5%2Bp8r5b4NCoq7AJipe3ndMCAiEA4stbwB2LT4eZsupp6eBgAJIp8uChhCU2GenprfBOgYQqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4fF0TgBiM3azSWtyrcA6gPAo1t62hB%2B8AQvM6k9OroCw%2B5AvkCr9yyupu9NTREkMot%2BipPeoU7YXfcD7IAe%2F1il%2F4goG7XtSrf5VUIuLaYOHeHr4XDni4t1D8LJT1iXNcC4axLFbz4ga2zWJcNJ1rj%2BWLMqJT9X1TfAB1zuHH7YQ6JpGR6xczgaUVZLn1YRiFmmV1HnOjTg83AjgL1qhMtpDkr7oVI2ENrXGvojmsGnyW22CaoGggALvQLoKncAhfzHTx8TQNNdZXRtQhXgOu4MVejS%2F2%2FntjKBU3ieqydUrAjvMbsds4%2BsAQDqQbT7LseQfLA0sbKUhD4639If2iPyamEUS1qfurnNTxoowghYnxtmNwVuyDMsuBys1c4cQKVpvEQkaTB3oDjPCceEZnSJDN1PXJE6LS44wFAho8eylXoRcpc4s4qwjtWdHLf0aM0rHlDPYOa9w4VVjIeT%2FoqLskMot%2BnN1OXv8El3xSigNCzU3pd07xT8hvmxIMWclkfGQ8e5AnarNiGdJwO0%2Fy374fxJXh3hCE6vny%2FAbIuWuWQ1q3mtMhqwfZEzjWISdTBvLC8vARUyieFFQxrykoY%2FQmtQzgFd2B5dNBVhXLH%2FzQ9bEhdw08iy63YR5JVnhgVUvxzuXA0rtGDMJatjcoGOqUBvkZDyNYUevOgGWMPraoaeYiuyaiDTfMHV82ibg7R5EeHR69kZ6fhBD1%2BZzdgBq3oxR8AWeTittq%2BV4ElH4%2BgMuwS1ncw3WpJ4BHUswl5UnKt79PXpbEWb1A%2B3czExSWyx80uupsIuDCqbq%2BZyfiFpS8wt94i8QKSKqhsi6bafrvuXz%2BnLwixuEqp16bvN31kkaSnMM6sg1F%2FKnGzESUGz0JhA33V&X-Amz-Signature=54114a7b35fb4095f4dec7a2cbff9280fe81fd06dc45a938069a9fb224c680ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
