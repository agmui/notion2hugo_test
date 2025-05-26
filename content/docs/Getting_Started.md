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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZX3PEAN%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIA%2FlZPESaFeZgpQ4ylPI58OJd1nEWkxm9xLEeI0AekHwAiEAnvnn3FDb24OQDypfQMRT%2B%2FOCazeuePqzuJu0Ua8vpisq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDMCeEy9oy%2BPqAUm%2B4yrcAxVZT1XlGnoc88mBInAP4H6UHnyPC0IlIgMthxHAdujaj58XxQhSJLAKaKIP%2BRgtNrKfLNMs5Fz3BitFIBuKhy6HoO6lQou3jRsTe9IDYdH41%2FXQ7bmPBQOoqxQpcIaMSeZR6qkVEq06RAUmhnU1boWgayGTl3ev%2Buth8XpH1z0ROoCPeHLDlmcVLUcnCyS6l0KVbe7TI%2FRYqHiNMQxVn6%2BDIhHwv5gV3BCaVvmS5UI4ctkk3qTL4dSwY53qYLB9GZqCC0rQPZpVgc8x40fq0%2BClrN%2B8EcKUxD7qMnUE%2B814JOKrF5XLZugCD4RghmvG%2BawkFDb6fIPzl4QclsLUkXaUIQQTGagnRDb5uXw5203tIdTv858pspuyB83JqmdpCu97lQlmQXptax4nfGKLCWqTFO1%2B4vs7PyZb3ITrKTzKYuhoEvPZeforWSrEOMtj4Il9yZqujX4B79bj8qM9yKp%2BwaRXobjo6Z%2FnFIxqCQUDwAmjDRyupfavEpMDNQgrJZvE1oOYTOhN77VFvLp87%2FAGR5N1v9krxCfJI0OvkG5bUUNJ%2B3ggEiPafXOmf3ZToDBM4wQtzJXEwEgF9oSx9KDmlT29h7dwVgyBPQ0b1wvZMyeqzuLZ7a7BrtDiMIyq0cEGOqUB0%2BlC91T4ojLsFecAGR%2BoNe6ofzgODdc66%2BIU0GVLu5biWVED5sIMUDYATfv0vcwlqhMhVAJ6p0baBUGUKTmB4UcEmOwG5by0LQaJ1R6F4T80TEhjz540s0Vq7MRSozKCo7gMTk7Dl9yeTPmAJgXU5mZ6PPNIY4df%2FaEUTnyKh53M56xrtAEHoP%2Bf9Jc6R759MAGHn0OzoR%2FM35hgQ9bwj78MMiQE&X-Amz-Signature=e0dbe55e51ead57dfa42117042ed39079e1f13e4fd008e0cf7669d01a6defaf0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZX3PEAN%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIA%2FlZPESaFeZgpQ4ylPI58OJd1nEWkxm9xLEeI0AekHwAiEAnvnn3FDb24OQDypfQMRT%2B%2FOCazeuePqzuJu0Ua8vpisq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDMCeEy9oy%2BPqAUm%2B4yrcAxVZT1XlGnoc88mBInAP4H6UHnyPC0IlIgMthxHAdujaj58XxQhSJLAKaKIP%2BRgtNrKfLNMs5Fz3BitFIBuKhy6HoO6lQou3jRsTe9IDYdH41%2FXQ7bmPBQOoqxQpcIaMSeZR6qkVEq06RAUmhnU1boWgayGTl3ev%2Buth8XpH1z0ROoCPeHLDlmcVLUcnCyS6l0KVbe7TI%2FRYqHiNMQxVn6%2BDIhHwv5gV3BCaVvmS5UI4ctkk3qTL4dSwY53qYLB9GZqCC0rQPZpVgc8x40fq0%2BClrN%2B8EcKUxD7qMnUE%2B814JOKrF5XLZugCD4RghmvG%2BawkFDb6fIPzl4QclsLUkXaUIQQTGagnRDb5uXw5203tIdTv858pspuyB83JqmdpCu97lQlmQXptax4nfGKLCWqTFO1%2B4vs7PyZb3ITrKTzKYuhoEvPZeforWSrEOMtj4Il9yZqujX4B79bj8qM9yKp%2BwaRXobjo6Z%2FnFIxqCQUDwAmjDRyupfavEpMDNQgrJZvE1oOYTOhN77VFvLp87%2FAGR5N1v9krxCfJI0OvkG5bUUNJ%2B3ggEiPafXOmf3ZToDBM4wQtzJXEwEgF9oSx9KDmlT29h7dwVgyBPQ0b1wvZMyeqzuLZ7a7BrtDiMIyq0cEGOqUB0%2BlC91T4ojLsFecAGR%2BoNe6ofzgODdc66%2BIU0GVLu5biWVED5sIMUDYATfv0vcwlqhMhVAJ6p0baBUGUKTmB4UcEmOwG5by0LQaJ1R6F4T80TEhjz540s0Vq7MRSozKCo7gMTk7Dl9yeTPmAJgXU5mZ6PPNIY4df%2FaEUTnyKh53M56xrtAEHoP%2Bf9Jc6R759MAGHn0OzoR%2FM35hgQ9bwj78MMiQE&X-Amz-Signature=f10be52bd6178ede658215c571b1a8e325641c1c9ccbdc049d1122dc4af7ac49&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZX3PEAN%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIA%2FlZPESaFeZgpQ4ylPI58OJd1nEWkxm9xLEeI0AekHwAiEAnvnn3FDb24OQDypfQMRT%2B%2FOCazeuePqzuJu0Ua8vpisq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDMCeEy9oy%2BPqAUm%2B4yrcAxVZT1XlGnoc88mBInAP4H6UHnyPC0IlIgMthxHAdujaj58XxQhSJLAKaKIP%2BRgtNrKfLNMs5Fz3BitFIBuKhy6HoO6lQou3jRsTe9IDYdH41%2FXQ7bmPBQOoqxQpcIaMSeZR6qkVEq06RAUmhnU1boWgayGTl3ev%2Buth8XpH1z0ROoCPeHLDlmcVLUcnCyS6l0KVbe7TI%2FRYqHiNMQxVn6%2BDIhHwv5gV3BCaVvmS5UI4ctkk3qTL4dSwY53qYLB9GZqCC0rQPZpVgc8x40fq0%2BClrN%2B8EcKUxD7qMnUE%2B814JOKrF5XLZugCD4RghmvG%2BawkFDb6fIPzl4QclsLUkXaUIQQTGagnRDb5uXw5203tIdTv858pspuyB83JqmdpCu97lQlmQXptax4nfGKLCWqTFO1%2B4vs7PyZb3ITrKTzKYuhoEvPZeforWSrEOMtj4Il9yZqujX4B79bj8qM9yKp%2BwaRXobjo6Z%2FnFIxqCQUDwAmjDRyupfavEpMDNQgrJZvE1oOYTOhN77VFvLp87%2FAGR5N1v9krxCfJI0OvkG5bUUNJ%2B3ggEiPafXOmf3ZToDBM4wQtzJXEwEgF9oSx9KDmlT29h7dwVgyBPQ0b1wvZMyeqzuLZ7a7BrtDiMIyq0cEGOqUB0%2BlC91T4ojLsFecAGR%2BoNe6ofzgODdc66%2BIU0GVLu5biWVED5sIMUDYATfv0vcwlqhMhVAJ6p0baBUGUKTmB4UcEmOwG5by0LQaJ1R6F4T80TEhjz540s0Vq7MRSozKCo7gMTk7Dl9yeTPmAJgXU5mZ6PPNIY4df%2FaEUTnyKh53M56xrtAEHoP%2Bf9Jc6R759MAGHn0OzoR%2FM35hgQ9bwj78MMiQE&X-Amz-Signature=82d9e5009bd01ee8c074ceccf4c2f2f10c393f8db0ef235d487492b9787c7a96&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG6TYKQI%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIEfLSpN%2B6YOj8GvCRzur6kqFkae4Q1NsXjjAkPD59Y1rAiEA6BSyiYlQ0EAMgtZBjDhmhThAzawO%2Fd5NyiON2H7GnPgq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLenbpPRRkxt%2B1vjryrcA7e1lO61sCX0kqr1oO7MtirLlVUGWep0fy9YS%2BId0Ma3IxKbHESUwMczMjYmTt%2FutzH7Zan8RJZJt6zEouBLGSBA8wGCA4GpSRlnr0GEDLtyvuJ7rFwe8ZDJvSLpLjA%2FSrwA6xh4%2F0W3u2No6b%2Bny1kUxnRpqRhTejBK6ex6e32oR8bEbsUfTYzmETo4vt801zuGM9FRIlypqw68aCTSjqpi6c5cPKq%2BDqHmkvgDn%2B5S4e283tHu10gH0ZTNr2Rh%2F4cQPsD6lhPjprnuSttZIYyjfHhVDSzyXKAG%2B2hOCKmA7CZCxL0BMW8DFFe5p%2BkvxfsE5%2BBjNULWlSQJ9SvtnTfsAZ2qLyb0VEsCTtkYviP3zJxZybgROe9oRO08SCzqkgTXSMvDwo744gwGE1nX2VnBIQwWhTEBxsC5bHfizOIl%2BR10D5AtkH6oSt4rMEHYaD%2FNAyRjRroeOhzuyQb%2BAQxen13Lf3Ce92OS64cnVk0UyhvEHlHQ1PueEVixSzrheJT7JFdmyqzGQ50YxPPHZloyqUzK8ksBNlkB%2FRoMAK9wgmh3DE97itMA8sg1i4P2GqNNkQ9Whwxegx0p30Gts4aMEonNUbQ1Dfe63Z90AtjT8oW2uICNKYUx2DYoMIer0cEGOqUBCGrkUecoUKzy4%2FCfSKlkiGLtZlFQnU%2FoRPLJ1BhCRzWVZezvfrp8yTtka8Q3Kt9ssMsMb5gAX%2F67X3ageEkjbwTjGNhS%2FMbirsOFvGBpN1IZ5iJfj%2BsLZLSa2tFJt6ZiRDlTbFw1Nj426o6kK1sZWML0clDX4KxIz0RtF5yxq8x6rjyOq0YfFCBxbO4Wk%2FDoJ%2Bbg1AvyfYvDmWtn1AdvgiMq460t&X-Amz-Signature=59b580b6663a0e691038dd9ae9740d4e80242f5551ebffb7ccd913460e13a8cd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GSRXY53%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIFuAnWI9cH%2Fm3SvxBK%2BJjhznAex69vpqVHwVdIQGw04%2BAiAl7vyOA%2B2Q8mbCBEVygtXQi1csJAa7Oj12drFH9q%2F%2BZSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMivGAjd7RcQeKduS5KtwD6QkunRDk2I2IBICum6zacaTcEF3WcG%2FN2OJOraLBVM1Skmmf0lANsZnTYOubaFIXvha1Lbpjksq3b%2Fjaui6pPhVwU4bp64zCAw5zWpWGR8DFFiLK1BooNPUc%2BXr93CYPDeDJ1QI7GERPe89fQQtQQfkLghPM2hGtUnHBUpYwn0Z0IqA7jfDQF9XjA%2BcgdgRKEJBpNvmr%2BKAwrLj7hSUMA5lDbJRFnFp8u8en5HFk%2BXrz39WNDjGze57Jaz6i3Py4oxvpFyxnVRFUGcQzFYbXlSdnwB1NkciTGJAsqZFMINrK0UBjkFmOBby0P%2BbYYzD6t1uQ%2BFzUFFn69zln8hP2R0IgZQ1f4vfOcmM9CFZWXz0SUqtGdq%2FgYfvt8JSCEVF9CC%2FwIlGsHF35tsqFs3m3vL5aThhGUogu%2FhbeZB8M1b7FXv1T26pUhHsHpdV4rw%2B5FEhGAbfmdoLO5C1M0CrDqjYkr4EmhJfECkoQdoSEHa5JBTqRk%2Bk8BuNii0amjFpuvrYikMrIEQHrtxrSTDJ1nKEuVuRWI%2BRc%2FalUrPp2pcDF1LjfLhms5h4xXCdH0GY2%2FVIV20NrM%2Bc3FiiLfXDGzkkjdcEW36hYG4Jg%2F%2BVKWgQNf4fPcqqi0MEZuQow8qrRwQY6pgH9xLlnq4CirF1AaXjcApdZktvJ7ifGi%2FkdvulLSUnPF6YUSnV3wrzBjEum2zQeM%2B6v%2BjYD9xx1njGnJfoAoSsKDRlM9s58OngDhCFC0escr9c6J0yAYMGVsjifnryopAoYojd0Ta01q6NCU3t0ZiN%2FKOkddjvQbQCf%2BDL4X5TDTy4OBpgI%2BzAkwhfEQloLCNhNIEvi65EOdGcxZY1JDL79c6rxUQ4O&X-Amz-Signature=d1838b4852d30643dd3a2251c2d39ee4dd618d330754496d1d6a8c6a6f54a473&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZX3PEAN%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIA%2FlZPESaFeZgpQ4ylPI58OJd1nEWkxm9xLEeI0AekHwAiEAnvnn3FDb24OQDypfQMRT%2B%2FOCazeuePqzuJu0Ua8vpisq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDMCeEy9oy%2BPqAUm%2B4yrcAxVZT1XlGnoc88mBInAP4H6UHnyPC0IlIgMthxHAdujaj58XxQhSJLAKaKIP%2BRgtNrKfLNMs5Fz3BitFIBuKhy6HoO6lQou3jRsTe9IDYdH41%2FXQ7bmPBQOoqxQpcIaMSeZR6qkVEq06RAUmhnU1boWgayGTl3ev%2Buth8XpH1z0ROoCPeHLDlmcVLUcnCyS6l0KVbe7TI%2FRYqHiNMQxVn6%2BDIhHwv5gV3BCaVvmS5UI4ctkk3qTL4dSwY53qYLB9GZqCC0rQPZpVgc8x40fq0%2BClrN%2B8EcKUxD7qMnUE%2B814JOKrF5XLZugCD4RghmvG%2BawkFDb6fIPzl4QclsLUkXaUIQQTGagnRDb5uXw5203tIdTv858pspuyB83JqmdpCu97lQlmQXptax4nfGKLCWqTFO1%2B4vs7PyZb3ITrKTzKYuhoEvPZeforWSrEOMtj4Il9yZqujX4B79bj8qM9yKp%2BwaRXobjo6Z%2FnFIxqCQUDwAmjDRyupfavEpMDNQgrJZvE1oOYTOhN77VFvLp87%2FAGR5N1v9krxCfJI0OvkG5bUUNJ%2B3ggEiPafXOmf3ZToDBM4wQtzJXEwEgF9oSx9KDmlT29h7dwVgyBPQ0b1wvZMyeqzuLZ7a7BrtDiMIyq0cEGOqUB0%2BlC91T4ojLsFecAGR%2BoNe6ofzgODdc66%2BIU0GVLu5biWVED5sIMUDYATfv0vcwlqhMhVAJ6p0baBUGUKTmB4UcEmOwG5by0LQaJ1R6F4T80TEhjz540s0Vq7MRSozKCo7gMTk7Dl9yeTPmAJgXU5mZ6PPNIY4df%2FaEUTnyKh53M56xrtAEHoP%2Bf9Jc6R759MAGHn0OzoR%2FM35hgQ9bwj78MMiQE&X-Amz-Signature=e327f3377761598bf2273c39c49f0aa3122e94f5a2cb15698791acd9e7f97ff1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
