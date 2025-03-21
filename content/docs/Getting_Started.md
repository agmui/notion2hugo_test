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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJBWINFM%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T181042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIEut54%2F1XH6L3NobwNCXe4BBpxfQsXnBt6xbXjGaDYY3AiEAlFnk2dyuRurXS3BZ7qJvn5Obx6tcH%2B0Tx1DnFf4Gw%2FgqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkCpR54RWFm69yZxyrcAxfC4%2FjHlLTyQOZgRGk2zeBKcqn%2FLLT93gmRymW4F1JSK0vAg9mGw7ngzbnfGlqZWGjh6aZQxzqourOKh0d%2BssmoxgNfpW94WqcF4TLOgAunCdd%2BmR9rdoej1ENfp9%2BPBR1otL35fmh3JAp44C%2Buv6B%2BN3VgBTIzrwVbfY5iiEfIJI%2BNKImJuHuHx9ZOt5v7RLCWP7945dt02TKMvUMc892C0ZGaAQSFngdSODQUIb8lA9rxqbCqQkmJT%2FQQ%2BXIIbxQB1Zvz1IcL%2Fxm84J0u%2B8kMwas04DyeHhbDa%2Fn1ag9tNMpjHa4DHBslcxcXACWzWP12qu7xcYBOrMo4d%2FDZ5IAIW%2FhYcLMSyr7V6BBIunn9WVPgf6oi1baXzckiUoTK8N9fZQwC1IbVgMectxXe2lAdkQYRkZKE0oh46JOvtJySrc%2BkhVTbXSVkP8yI07l%2BKhEQ%2FPrZKY9ow%2FhoMuUN%2F5Ndrr9cgqlb5zMfWUOCxZ56FpRIXC3c7C2yaKoySiGJAIqwYq5zfcX54DtluRAiTKl2T%2BYt30fb7EvbDQR75g2dM9YziOmJRjaio74OSZIHfH80hQvCvAZBjr%2BVKkswHGH3gaMY5KxZ4%2FDut%2F5fwkXvc2zR3OuPvjXRXn9eMKW79r4GOqUBjfNTO1NvjDzyfynLb%2BhmozyxkLV9V3vZZrbO3CfygWMVWmV4TGwJbbRFrrDEKoMX9HA6oXYj7Vbb1AJHxK6Q2GmBGwOeVTJDyA486mJFfOzUq1%2F52M%2FOh5LTdo4s2xXE7t%2BWCUXYAMKjWi6Fr9PKBc5eNIxcRaRBeC4ENmA%2B5wdwFVRisroDn8aUnDeu89lA3MF0l5sveRIxJ4wdYS0UX9QM%2BXbq&X-Amz-Signature=bc36daebc9566939f290191eb34efcc227263813dfee2a401fb22d5c8da60a80&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJBWINFM%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T181042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIEut54%2F1XH6L3NobwNCXe4BBpxfQsXnBt6xbXjGaDYY3AiEAlFnk2dyuRurXS3BZ7qJvn5Obx6tcH%2B0Tx1DnFf4Gw%2FgqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkCpR54RWFm69yZxyrcAxfC4%2FjHlLTyQOZgRGk2zeBKcqn%2FLLT93gmRymW4F1JSK0vAg9mGw7ngzbnfGlqZWGjh6aZQxzqourOKh0d%2BssmoxgNfpW94WqcF4TLOgAunCdd%2BmR9rdoej1ENfp9%2BPBR1otL35fmh3JAp44C%2Buv6B%2BN3VgBTIzrwVbfY5iiEfIJI%2BNKImJuHuHx9ZOt5v7RLCWP7945dt02TKMvUMc892C0ZGaAQSFngdSODQUIb8lA9rxqbCqQkmJT%2FQQ%2BXIIbxQB1Zvz1IcL%2Fxm84J0u%2B8kMwas04DyeHhbDa%2Fn1ag9tNMpjHa4DHBslcxcXACWzWP12qu7xcYBOrMo4d%2FDZ5IAIW%2FhYcLMSyr7V6BBIunn9WVPgf6oi1baXzckiUoTK8N9fZQwC1IbVgMectxXe2lAdkQYRkZKE0oh46JOvtJySrc%2BkhVTbXSVkP8yI07l%2BKhEQ%2FPrZKY9ow%2FhoMuUN%2F5Ndrr9cgqlb5zMfWUOCxZ56FpRIXC3c7C2yaKoySiGJAIqwYq5zfcX54DtluRAiTKl2T%2BYt30fb7EvbDQR75g2dM9YziOmJRjaio74OSZIHfH80hQvCvAZBjr%2BVKkswHGH3gaMY5KxZ4%2FDut%2F5fwkXvc2zR3OuPvjXRXn9eMKW79r4GOqUBjfNTO1NvjDzyfynLb%2BhmozyxkLV9V3vZZrbO3CfygWMVWmV4TGwJbbRFrrDEKoMX9HA6oXYj7Vbb1AJHxK6Q2GmBGwOeVTJDyA486mJFfOzUq1%2F52M%2FOh5LTdo4s2xXE7t%2BWCUXYAMKjWi6Fr9PKBc5eNIxcRaRBeC4ENmA%2B5wdwFVRisroDn8aUnDeu89lA3MF0l5sveRIxJ4wdYS0UX9QM%2BXbq&X-Amz-Signature=1a70b821397be3a9ab2966ea20a0dfce9a943c3e97e8cd03db8440887c1649cb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUBDVLLU%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T181042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCxStDCUkyrzPJlqzaDIx6gYay3hXz0kbS0Wxw5x9Z2ngIhAJ%2FCW8%2FWh9cwkbX%2BtyYV6KFzBy9%2BR1KZSAtPV%2F86EghbKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZuPipBE50%2Bm2zvwIq3APFqPqLzTpHugVUZOUhPLjnoQXZrhHr875RtR3m4qiImQ8y3MiS4wSfLcDj7JI6glCH6ef6fmPmXBFp%2FwWwfl8WlYNr%2BdyFlDwO5nFPCcMuORywCC%2FzwDx0jrW0%2F59tDzuZ60Ul0jozdFVZBmbOciZSd94sgqJI1aesS5ufipl2WSe3i7h7UJ9OVbXb%2F7dGMP9BQIGNtKwtGntLMm%2BDP6TpQ1TNomu6mtMFMfrkmB76n2Ck3jzM0J7A6eX8Rzr6bT0PnpraRGDoxzkGl1doifaGshEhFyUMcx6h%2Fh3V3j5Wql%2BVI1iEwt3TPENkD4kkb9dArN6VRaQIy5oy12zUlE%2FlDe0OmiwdH05qQlg3YTBpXWulFsXBztekAPCGzugPslbvsfw%2BIhNZ45v%2BxJvOy%2Bj7izwmaBly4cF95jI9fQK0qxby8hDGKBtD%2BcIkouNOmJ4jwFu3Q2GQmf3aOZeHComg6t9ITdKBJL2rwgqNl1WwUU8HIXo7b3IkiQAXZu%2FRs6ATArWhlBFYaNgQqnl5fLe8J5aUfyKxKTTsqpyxl4qQfa0mriGULotO40iHDDq5kAAeQPt%2FnodB5bTmdFTr2gD9YN%2FKSAwj2aUtz11OTlgy4RHmgVa3H7bPhKC0PTDWuva%2BBjqkAU%2FpCcKJZl0F%2Bnw9t%2BXPcaWelfSwbs4TasQzw3YLlcy%2Fx2U1fubJs5FbTcWCNjGUNjhQlWilJilqQj5kBYbd9iMdEvvGOUgdPt5s1zJXrhfIJuEA6YWc2I8APxGGK42ZBuo7EndK%2F109YFkHXP9Cr8Z9XMimVyNv0GMiuKO8cY3Fz557PS4%2FYn02aej7a6sGijMLnO0lUBpFMXrsF9EpfhLT1KfZ&X-Amz-Signature=d0fb15dde5f23e1dc0261d740ad28bc57beddf20a3f647092a9dc7573272666c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVJA3HDZ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T181043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCWuhkfz4mCjz%2B8F%2BaXvGJ8ELIwrARxZRIiDsdLNSfTugIhAKmtwgx7bsXNibWw3UOY0hm5mdkJBU0YbyK7z54%2BpR%2FqKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLV5%2FZ6bwi2WKNvgUq3AOw26%2FN8M%2FLCd29bEMbrSQw9js9lS20gV0mf5YrTvjHCABzrQH%2F0CR8DYzVLsWcAmcUoeFwbW1i9F5cngwnETj8K%2Fn28CE6mW29avmEE5f1hI6%2BxS8Ils7%2B%2BbWfOackhsbvRZ%2BToJ7fFEamFmTCWCqqJSF6aF7z%2FWX%2FDi1znrqZ6HlzhbZPIOswF5aXWJAGr%2FzYG5dIORaGoqmfI6%2F3anzL%2BkV9EzxQcrI4RFNp%2BWBlzqjtiwnmRDb00KD6m2tfZAsoJ7rYqPvkpweiE%2FCs7RJApAAoq%2FuTMA9t3Sfu2TFWm%2BINOWGTwbwDkZgH%2BxeklANq542Io3f19fy7i7jFju1IeVUxeJutIi6ACs2Dqg6W6Gc95AMsv8CAT7QWWdcG31J2%2FsDEYpvboN6msIBDJxcdSFFUZR9ABRdEowCa3FdqxbL8%2FiA2wyKJl1WKLjfNh%2F2m43m5nWR4ux1UYxmTju1R6480S%2F99PLnBmJIWgf%2FoIThYgyacFicbsATunMFoBlZ1n9s2Vm4VZdTPo98QbjYj62fW%2FF4JJPA2GViAf1Z3FYP0eGRsj0uBeqqS%2BokSqp%2BA9aeOcSO%2BqQMNmgse3Gs2%2FtiiI6gB6NAdVELOTgA9COjjhYZ7gMFfvnUhhTCJu%2Fa%2BBjqkAWTA2XxCWDEUyHY9F3c%2BqgDyim7z4jmsw2Er4skYQIQcifuUejGtASlSlNfwoyCPzJE5dixPDL2ZlfcFpPdLr2PWEaxksE90n1kyUEabDGlEiJLayfmEfWRsA8%2BRK2S6ECK7UaJaHSc2UlGzqsZh7n6D21wMh4onv%2Fg2lHMsseIYnrILGySfJ%2FejlcPRGzWG3zKRh9D8JAYTUUVmR1Ud5XSadlP%2B&X-Amz-Signature=38228d6c0b09d3d9b1664c333b281a986d98f94c7e2a3be6c7b7331eb3d8d5a1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJBWINFM%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T181042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIEut54%2F1XH6L3NobwNCXe4BBpxfQsXnBt6xbXjGaDYY3AiEAlFnk2dyuRurXS3BZ7qJvn5Obx6tcH%2B0Tx1DnFf4Gw%2FgqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkCpR54RWFm69yZxyrcAxfC4%2FjHlLTyQOZgRGk2zeBKcqn%2FLLT93gmRymW4F1JSK0vAg9mGw7ngzbnfGlqZWGjh6aZQxzqourOKh0d%2BssmoxgNfpW94WqcF4TLOgAunCdd%2BmR9rdoej1ENfp9%2BPBR1otL35fmh3JAp44C%2Buv6B%2BN3VgBTIzrwVbfY5iiEfIJI%2BNKImJuHuHx9ZOt5v7RLCWP7945dt02TKMvUMc892C0ZGaAQSFngdSODQUIb8lA9rxqbCqQkmJT%2FQQ%2BXIIbxQB1Zvz1IcL%2Fxm84J0u%2B8kMwas04DyeHhbDa%2Fn1ag9tNMpjHa4DHBslcxcXACWzWP12qu7xcYBOrMo4d%2FDZ5IAIW%2FhYcLMSyr7V6BBIunn9WVPgf6oi1baXzckiUoTK8N9fZQwC1IbVgMectxXe2lAdkQYRkZKE0oh46JOvtJySrc%2BkhVTbXSVkP8yI07l%2BKhEQ%2FPrZKY9ow%2FhoMuUN%2F5Ndrr9cgqlb5zMfWUOCxZ56FpRIXC3c7C2yaKoySiGJAIqwYq5zfcX54DtluRAiTKl2T%2BYt30fb7EvbDQR75g2dM9YziOmJRjaio74OSZIHfH80hQvCvAZBjr%2BVKkswHGH3gaMY5KxZ4%2FDut%2F5fwkXvc2zR3OuPvjXRXn9eMKW79r4GOqUBjfNTO1NvjDzyfynLb%2BhmozyxkLV9V3vZZrbO3CfygWMVWmV4TGwJbbRFrrDEKoMX9HA6oXYj7Vbb1AJHxK6Q2GmBGwOeVTJDyA486mJFfOzUq1%2F52M%2FOh5LTdo4s2xXE7t%2BWCUXYAMKjWi6Fr9PKBc5eNIxcRaRBeC4ENmA%2B5wdwFVRisroDn8aUnDeu89lA3MF0l5sveRIxJ4wdYS0UX9QM%2BXbq&X-Amz-Signature=9f59981d6d710101a837efdee9653ce5fec502df64f33d7323be5d30f57a7c45&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
