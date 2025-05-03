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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4YDEHML%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIF0Q5k3eWSHz9qWGtUdAf4UFC9%2FxrBDSy3QFCMC6lmenAiB21nlyUd89yO4gMOwLtiZDcSy47Q7foK%2Boz7FPoYB3sSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeXDGtAS3mpGG5v0gKtwD9faveJE8wYuKf8ZHRzf8%2BZj5nKn2tVwMBC8o9wn161HEr%2B62H6FynyLm%2FtGNyzqIln1ZdiRL752VeomepJAuvVkDCdrn7txoRu3nr19%2FW2AC64wg0DnAt7cir6j84tBk%2BCLfnX4WCSmuL66hdNUPOlVl%2Fl9dh7EOx0e5INyR%2BPsuebEZdwEHuXA1hAp26HSPyvrQvj4exG6w8ZmpeSRp86ylJ3Xwzx4Gj4Kv0mkuHslYSWcS8qWO3fTCI7%2FOh5%2FPGsnJTAVEn6wSfKGtF%2Fsg3TqqBx32IZD7yYojWJVQunJ2sAjcYsL9n7FVgTTb%2F9%2F7XV3lck%2BXvajHVG%2FFDhbITpYjAkvA9GTuXvk1ZcMh8Usfltn2hgy96ovS69JLXKyi2ktxMCUXNzoN7WpBStwzxm4qw1C4OcaZqbRBoNlGs1CpaGbVjFOMMP6HFoNbX5plsaKzggU2zSBFnH52vBKjklET5imqi4qFmnAlkN2%2BqpenXypZLl4L4mg45ZMzBkrnYw20VylCuKJMiou490wIXpmtI341qeHufQZkHBZvPeCjTpdXlFxSwLE3WM%2Bgt6%2FKEPng6MP0wWARRUfb9sn10%2FuyW%2FIPau0Urkcfmf530pYtsnw%2Bie3RFZ8%2BfNkwqrPawAY6pgFetrbbRM71ejFpIxxk3A3LzJVsPtjRontIqfB0BDIdWLpx1mh%2B4H8lIsh9sJBzNp%2F%2FpQkmZpQloJyY0GPU0WQIuR3wmb8MqSNWKz1Ke5Jy%2B0hbiSNcV6r33lHtdyiNNGEjVVEBfvBs%2FRwYLmPmFWhcRwJ2RSvuvTq4zfrTADMJPeboW25zVbE9HTOqt5y%2FrguXV%2F8RobcxlxZ%2BwYdmGFDTPs%2FdLsPp&X-Amz-Signature=2683fc65af33b0ebdaeb52cdce20a90021a75912c1341d5dce74c9c499c5f9b4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4YDEHML%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIF0Q5k3eWSHz9qWGtUdAf4UFC9%2FxrBDSy3QFCMC6lmenAiB21nlyUd89yO4gMOwLtiZDcSy47Q7foK%2Boz7FPoYB3sSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeXDGtAS3mpGG5v0gKtwD9faveJE8wYuKf8ZHRzf8%2BZj5nKn2tVwMBC8o9wn161HEr%2B62H6FynyLm%2FtGNyzqIln1ZdiRL752VeomepJAuvVkDCdrn7txoRu3nr19%2FW2AC64wg0DnAt7cir6j84tBk%2BCLfnX4WCSmuL66hdNUPOlVl%2Fl9dh7EOx0e5INyR%2BPsuebEZdwEHuXA1hAp26HSPyvrQvj4exG6w8ZmpeSRp86ylJ3Xwzx4Gj4Kv0mkuHslYSWcS8qWO3fTCI7%2FOh5%2FPGsnJTAVEn6wSfKGtF%2Fsg3TqqBx32IZD7yYojWJVQunJ2sAjcYsL9n7FVgTTb%2F9%2F7XV3lck%2BXvajHVG%2FFDhbITpYjAkvA9GTuXvk1ZcMh8Usfltn2hgy96ovS69JLXKyi2ktxMCUXNzoN7WpBStwzxm4qw1C4OcaZqbRBoNlGs1CpaGbVjFOMMP6HFoNbX5plsaKzggU2zSBFnH52vBKjklET5imqi4qFmnAlkN2%2BqpenXypZLl4L4mg45ZMzBkrnYw20VylCuKJMiou490wIXpmtI341qeHufQZkHBZvPeCjTpdXlFxSwLE3WM%2Bgt6%2FKEPng6MP0wWARRUfb9sn10%2FuyW%2FIPau0Urkcfmf530pYtsnw%2Bie3RFZ8%2BfNkwqrPawAY6pgFetrbbRM71ejFpIxxk3A3LzJVsPtjRontIqfB0BDIdWLpx1mh%2B4H8lIsh9sJBzNp%2F%2FpQkmZpQloJyY0GPU0WQIuR3wmb8MqSNWKz1Ke5Jy%2B0hbiSNcV6r33lHtdyiNNGEjVVEBfvBs%2FRwYLmPmFWhcRwJ2RSvuvTq4zfrTADMJPeboW25zVbE9HTOqt5y%2FrguXV%2F8RobcxlxZ%2BwYdmGFDTPs%2FdLsPp&X-Amz-Signature=5c21878aafde4c7b5d6b735c33215541032bfbeb7c1ba9b5965e1b10be70a45e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4YDEHML%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIF0Q5k3eWSHz9qWGtUdAf4UFC9%2FxrBDSy3QFCMC6lmenAiB21nlyUd89yO4gMOwLtiZDcSy47Q7foK%2Boz7FPoYB3sSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeXDGtAS3mpGG5v0gKtwD9faveJE8wYuKf8ZHRzf8%2BZj5nKn2tVwMBC8o9wn161HEr%2B62H6FynyLm%2FtGNyzqIln1ZdiRL752VeomepJAuvVkDCdrn7txoRu3nr19%2FW2AC64wg0DnAt7cir6j84tBk%2BCLfnX4WCSmuL66hdNUPOlVl%2Fl9dh7EOx0e5INyR%2BPsuebEZdwEHuXA1hAp26HSPyvrQvj4exG6w8ZmpeSRp86ylJ3Xwzx4Gj4Kv0mkuHslYSWcS8qWO3fTCI7%2FOh5%2FPGsnJTAVEn6wSfKGtF%2Fsg3TqqBx32IZD7yYojWJVQunJ2sAjcYsL9n7FVgTTb%2F9%2F7XV3lck%2BXvajHVG%2FFDhbITpYjAkvA9GTuXvk1ZcMh8Usfltn2hgy96ovS69JLXKyi2ktxMCUXNzoN7WpBStwzxm4qw1C4OcaZqbRBoNlGs1CpaGbVjFOMMP6HFoNbX5plsaKzggU2zSBFnH52vBKjklET5imqi4qFmnAlkN2%2BqpenXypZLl4L4mg45ZMzBkrnYw20VylCuKJMiou490wIXpmtI341qeHufQZkHBZvPeCjTpdXlFxSwLE3WM%2Bgt6%2FKEPng6MP0wWARRUfb9sn10%2FuyW%2FIPau0Urkcfmf530pYtsnw%2Bie3RFZ8%2BfNkwqrPawAY6pgFetrbbRM71ejFpIxxk3A3LzJVsPtjRontIqfB0BDIdWLpx1mh%2B4H8lIsh9sJBzNp%2F%2FpQkmZpQloJyY0GPU0WQIuR3wmb8MqSNWKz1Ke5Jy%2B0hbiSNcV6r33lHtdyiNNGEjVVEBfvBs%2FRwYLmPmFWhcRwJ2RSvuvTq4zfrTADMJPeboW25zVbE9HTOqt5y%2FrguXV%2F8RobcxlxZ%2BwYdmGFDTPs%2FdLsPp&X-Amz-Signature=988ef912c3391f0055b550e19518301fbd60956ee2bf284ea3bb8b4269267c32&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTWWYCXN%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDW2WF5QumpC%2BDPb3pF%2F8NprJVqrP5ImB2h7RA9UaOyDAIhAOU2QUobvgzUL%2ByMBIvKi28jYM111C6XDmaJ98tUj0wJKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQPlUYTnQkbsgZA7sq3ANOdScrk%2FP2X6COy0pGRXKR52r3dCY4zp9ow2DCQ%2FpfzdNM%2F3I%2BPnI0ZrndjScAZu4y8pKNSmHY6ADA01BmHg1hHNgMrQj7vXmGEBPvHBkNsE58uR5QmshJTMm4L1lq2SHR1JbVPfmKDsmrXtAhGN1Imme3oB%2F8b9GQnCJo3LBoRGQLxwPLi90JcK5XOwirgCAJ1FgUybJbImaJzPgnOEZGKc%2BmOh0ynzIyBwIkf91f%2FXfqk%2FCHv2V%2FIBt1TqTP2uBshV5CrUPLW1XYuLOZ3dFqPUPyDs3EILgES28huwQSJByeoJzQXun5lBPXXws94J%2FbtdS%2FdV0pL637RBVN8eit8ZKX%2BnpEibLPvSpiSn%2F5y1qVylNS%2FsnqKiit8kfcORUfWA7N4jDgwrkR3XHaQA6x2YiKo4BWVXGtN4g%2F%2FO18veXGLYVH09PchyFWNS557bmxNqZXQQMbhNUqGCXozLwuDeLr70K%2F%2Blxla3lmV%2F9QtkowChLcFt0H2qlNNLrRAn%2B4PD17blvfhiuQmweICfzQTJ8xSVdrd82xLLykm8B7qPMfRXzJRajaFD2L00KPXMTWTN0pUyssMorFkbbI2C%2BI9%2BBq8hYm7rsg%2F8BnkK%2B%2FBvQdVEyK6goog8c1ljCns9rABjqkAbnhzEvfXs1Q%2BJkN8%2FkoMhLEebuxO0mdawrBCn3bmV28dnbIm8amb%2Bh5seC%2FGu34RAuhsR%2B6GMZgBC7miAK54e9S9ve9OIJFb1sLsvMEUqgSusb4zVeEHD3tzxiCRJ9BfMf4KpYRjGuPuUSB5cYuYIW9ctjUj%2FsUoGrdcdDtp71K1VnpXgL67qTXwF2sG2nBsmPHZ%2BV3j%2BJrXEcGdlVabKs1lK7N&X-Amz-Signature=ee104c7d63ca6969eb473e5e046d1a12314d1af15c374962a2cf51e7fd891f6b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNA34OLO%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQC2X7IsHLqAuFZPrSPRrXpU5UNgkrc2WAU%2BX4Q9DbzsFQIhAOKwLVgcHbhUnoTpHdHnh9xJifBxwYG%2FfhGNObslTW3uKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZbEDxfXdV3SHjFtoq3ANa1IS4v%2BPnrR%2B%2BbZcy6zOqg%2BrCYeHVrDBTLTIby8vvQ%2BINvDrIIpBKIbPfaL5XqSFr2DP5TcCschh46flN2LyWf7GF%2B7OiSlMlOYVUORVAG%2BqzwQpdCYOKbctWi5W5iMp8XtUOnLddXj8RwWXdg2FycTGuWDhP2LrC2vSc%2FcKW0SU6x5OQz4XqfUHkg1ue5L2qw5IbgJuSQd2Y%2FlbwVM%2FGN%2FVNtVxqc2FXubyVVJVjcVIe465Qg%2ByIepDmyeu2R6oTEcDREScU14Vhg7VOKuey7iTU1WCx1vdsWK7u2zZ3fbcnDzljHQBABphW4M1TK3%2FKGwFmDQaqTygtQJCGMvsywXzdqABHdYKZ5AuGUBm6HroNihipJz1WZ6LX3MDERjtbmbIQT4Uq6WQ8KZpGzDSX5dOVei9cY9Ts9mzRbGQ8g5NLiAw8W5%2FXg8qEmR7VGycdlRv5Hi%2FzDXVax7W%2BLFoxK6hM%2Bg5j9ynxjM%2FLFsI%2Fa5bl1%2FQv8hm4VzUet16cszdQn3dnxJj2IpO9VM8oQ3BdfJy8Ge0b5dIqP%2B%2B%2FskP8shXFgia3BgeXEPP5RbT%2Fgqbf4oa0My2v52Nk25gV85KdkwtWDWdN8abnJ0Z0TodRoSJzQxAS%2FZpll6wXSjCas9rABjqkARv3AERe0FtntopQmaTT4irYvX1CLoAl1bfP3q4cFTn5GckssDrZC5Q892BPS7xXU6vDSXdPIjf12GPbA9kZfwbroHgc6lmbj%2BSqVzG9%2FNoVGYtK%2BE1BS1KIBTKWlVthSD1o1AV3lxmSbDJjtVzBTHBlAbe5AbSd4sbzeGX3OO2LVa9C4lLi1uQgdjQMiQmO5CRW1vS9jmbredskHByYQb19lZ98&X-Amz-Signature=79daeda8407031f6e3313b64f03b9733528da41619cbb30ae8feb78badeafe51&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4YDEHML%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIF0Q5k3eWSHz9qWGtUdAf4UFC9%2FxrBDSy3QFCMC6lmenAiB21nlyUd89yO4gMOwLtiZDcSy47Q7foK%2Boz7FPoYB3sSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeXDGtAS3mpGG5v0gKtwD9faveJE8wYuKf8ZHRzf8%2BZj5nKn2tVwMBC8o9wn161HEr%2B62H6FynyLm%2FtGNyzqIln1ZdiRL752VeomepJAuvVkDCdrn7txoRu3nr19%2FW2AC64wg0DnAt7cir6j84tBk%2BCLfnX4WCSmuL66hdNUPOlVl%2Fl9dh7EOx0e5INyR%2BPsuebEZdwEHuXA1hAp26HSPyvrQvj4exG6w8ZmpeSRp86ylJ3Xwzx4Gj4Kv0mkuHslYSWcS8qWO3fTCI7%2FOh5%2FPGsnJTAVEn6wSfKGtF%2Fsg3TqqBx32IZD7yYojWJVQunJ2sAjcYsL9n7FVgTTb%2F9%2F7XV3lck%2BXvajHVG%2FFDhbITpYjAkvA9GTuXvk1ZcMh8Usfltn2hgy96ovS69JLXKyi2ktxMCUXNzoN7WpBStwzxm4qw1C4OcaZqbRBoNlGs1CpaGbVjFOMMP6HFoNbX5plsaKzggU2zSBFnH52vBKjklET5imqi4qFmnAlkN2%2BqpenXypZLl4L4mg45ZMzBkrnYw20VylCuKJMiou490wIXpmtI341qeHufQZkHBZvPeCjTpdXlFxSwLE3WM%2Bgt6%2FKEPng6MP0wWARRUfb9sn10%2FuyW%2FIPau0Urkcfmf530pYtsnw%2Bie3RFZ8%2BfNkwqrPawAY6pgFetrbbRM71ejFpIxxk3A3LzJVsPtjRontIqfB0BDIdWLpx1mh%2B4H8lIsh9sJBzNp%2F%2FpQkmZpQloJyY0GPU0WQIuR3wmb8MqSNWKz1Ke5Jy%2B0hbiSNcV6r33lHtdyiNNGEjVVEBfvBs%2FRwYLmPmFWhcRwJ2RSvuvTq4zfrTADMJPeboW25zVbE9HTOqt5y%2FrguXV%2F8RobcxlxZ%2BwYdmGFDTPs%2FdLsPp&X-Amz-Signature=3046ac115c323080eb9ffd02b04e2a58cec9375301dada15fd14f4545716b47f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
