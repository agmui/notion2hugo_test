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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOAP6TJB%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T121356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCICY1beMzqT1G%2FZZSHCc0pU8IARTKo3RVNUrAmgenjCMwAiBLl6VJsjBK%2BSwDk%2BzBoRCfG%2F4TSw3O2eTXwID08N73pyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMlEGocdmP%2FgsOuFhGKtwDuHq821kUHhUzyHYNrETdWmpOJWymY7%2FYYIR7tdawnkJk2o27iNKJs6lmL7JhJzmLqlp5FPN48hhc5PdiMT7uxa0wnF18D%2Bq6pxn9%2FlcomzAHEwMb34dLhQEofRTEHrgLxXuXkDaED9IScQAqq2apRy8iVmZsam0DvtcFCUdVDQWiK7XQJKGzmmJMa%2FupHGk8paNOkeUcmjSahLZz8DA3USJ%2Fuky3Etf0IxTEXtK3q7UVYLojpt9%2BhhtQFs1nV6HI4uNHIvHRIbQv%2BhDSe3oqp9Qstyrom%2BJzLd2XLFHwL8ILhuqax1KeUIsUGPeSmiLgPW4porfCYjf5bfoS5n31MS%2Fxdk0Q%2FXKSMcKTeMDe7SnNAWMgNb9%2FegyvItySBxhDUuJo9khUedSUE%2FhTJBSfNuzMX2EskRAyeSTibhPjTVD8bLi3BMaeOjzexJK33DD2dPEJs8%2Bh0orpfDLBPX91PiWtxDU64IMFZ1NjczV4NDTooiE77NEyZm3c5bP5DKTCPAFYKyu0nmV0MsbC%2FYmn%2FUl1jAikAja%2BTSMDUVXK%2F8ItvBjxYwmZkrCOK%2Fjq0UOrNYRC%2Fm%2Fpqbf6coKxDt2E%2F%2B3QJov0%2F8ZWuoGvrzcYzTmgeqlFxSseCZxiwAQwt4OIvQY6pgEIvZgx0Mz4ou2v6Wp7pm3IzbVyXN6EUt4m5shHDwo6rX8VsHAHCFS5d9WMDJ2P%2FzBVD%2BeBMsGCVeFNnEohNzaXeK6rQjtIpz3%2BTi08QQeIhylftNxtwHbkB%2BeAzNneDiXNNIDnyE21%2BfnDGyZFKA%2B4QPmQ7A%2Ft4vu1pvORyCIC6CQH4sciruDj5EwLtZmFRYnt8joahcEe6mVNERinEwsamWbrsUp%2F&X-Amz-Signature=a2027f3f2646d0f52e6306babbc10ead5b2d125bf992adb59bfad62fe4515461&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOAP6TJB%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T121356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCICY1beMzqT1G%2FZZSHCc0pU8IARTKo3RVNUrAmgenjCMwAiBLl6VJsjBK%2BSwDk%2BzBoRCfG%2F4TSw3O2eTXwID08N73pyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMlEGocdmP%2FgsOuFhGKtwDuHq821kUHhUzyHYNrETdWmpOJWymY7%2FYYIR7tdawnkJk2o27iNKJs6lmL7JhJzmLqlp5FPN48hhc5PdiMT7uxa0wnF18D%2Bq6pxn9%2FlcomzAHEwMb34dLhQEofRTEHrgLxXuXkDaED9IScQAqq2apRy8iVmZsam0DvtcFCUdVDQWiK7XQJKGzmmJMa%2FupHGk8paNOkeUcmjSahLZz8DA3USJ%2Fuky3Etf0IxTEXtK3q7UVYLojpt9%2BhhtQFs1nV6HI4uNHIvHRIbQv%2BhDSe3oqp9Qstyrom%2BJzLd2XLFHwL8ILhuqax1KeUIsUGPeSmiLgPW4porfCYjf5bfoS5n31MS%2Fxdk0Q%2FXKSMcKTeMDe7SnNAWMgNb9%2FegyvItySBxhDUuJo9khUedSUE%2FhTJBSfNuzMX2EskRAyeSTibhPjTVD8bLi3BMaeOjzexJK33DD2dPEJs8%2Bh0orpfDLBPX91PiWtxDU64IMFZ1NjczV4NDTooiE77NEyZm3c5bP5DKTCPAFYKyu0nmV0MsbC%2FYmn%2FUl1jAikAja%2BTSMDUVXK%2F8ItvBjxYwmZkrCOK%2Fjq0UOrNYRC%2Fm%2Fpqbf6coKxDt2E%2F%2B3QJov0%2F8ZWuoGvrzcYzTmgeqlFxSseCZxiwAQwt4OIvQY6pgEIvZgx0Mz4ou2v6Wp7pm3IzbVyXN6EUt4m5shHDwo6rX8VsHAHCFS5d9WMDJ2P%2FzBVD%2BeBMsGCVeFNnEohNzaXeK6rQjtIpz3%2BTi08QQeIhylftNxtwHbkB%2BeAzNneDiXNNIDnyE21%2BfnDGyZFKA%2B4QPmQ7A%2Ft4vu1pvORyCIC6CQH4sciruDj5EwLtZmFRYnt8joahcEe6mVNERinEwsamWbrsUp%2F&X-Amz-Signature=8d68c35bb8499d86bad372ee25a262536646fd333c300f88ef5df33f9aa914ac&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KFH6SDN%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T121358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCaSznpdCmkytMvlNqG%2BIFD%2Fzm4SOEaQoloaotddXNI4AIgflr9bfFm34hI2s6Ws%2BAP2zSsXzBeK%2B4u0U%2FKwaRpA%2FMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIE%2BfqSmR7uSTKsxRSrcAzEySImQYUa3HpbUp8G0NZVZJ5qhfUO6aMplKj%2BHomgA%2FPqb0JDuG2aROC2nfBPA7HlJK7%2B3nON7ykV%2FNPr%2BqEZMnU2V2kfqv2BMAjW7vqz6IS3lRegqhPp4udwyFo9566ddLCsSe8F%2FdIyp%2FZ0T%2FG5IGzyu%2BX5FcskQ5RMkZFeozY4iVzP5KWUYur6IDfgKB3sWM21HfPT8rJkihk0LW8mnGM7AGGHSX4yppxqIQFM5DIK%2B2prMLXcQkGcajaq2hJqXMLv7ixU9eWWpwr%2BfgfZZA8WYJfZx9T2yezVoZSreWKmzOhDmjkO%2FNQTquAkfA9KADq46NbUOjJ6a5oHAJKQE6Njj4r0mznyJv%2FKdlX%2BOyTrzI0zYfSUYCZ0vytwxYhwtLErBDawJUdPDNJrTRM2QZoMGqMylFB4pF2AnrPnGW0OGjLmvH%2FYFajv7CFaAsVrEMJ2PWYrgcpBZGodOOsfOjjsRWSGSzGHbRHtoVGkfgNjetd0hg9UNlnqWnmfVFX8fkZ6YQ7H6di7Ea0xib3ueHeOZ2qf%2Bt0hJPf9Fmw5diw7DnEqfjCAGgj3nUZHdOvZN6RpP971mYg3u43s26%2FxIzSDRWVqqZ7bBI%2BPhmBknl0OIqzsCYJ%2BHxLQnMM2DiL0GOqUBWeL8aYkkyN3R6WP%2BsGAhDS7Cw88I5MnSJZZ5rqQpiOZOifATjbCXKAUGl20H0ldjt8fMEyn0atJd%2FuKX1O52NQPY5rTjhX6WH2hmTQ1TeJQjuGclMivoQ92mgJDMT8nNrjqlxPKwkw8K%2Bd6%2B17CrOBYCj0FIwykmlWo%2Fv7fUotHBF6QEoTBkI7fs3uXVFFQbiFvX4PYCsvZ8ZbaY6Rf2ojgUuUO7&X-Amz-Signature=78391a5c5dd127be4fb9deb60dcc529abc7f1e87e3c504fce1da736bc4a3e1c8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XO57MZ4%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T121358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDYnmLawwwhU3Vji%2FsolDoVDikNY%2FYnsvJjmi8FkA13fQIhAOJ3AVGA%2B%2FNGbW%2Fax938zHSbw4uNi%2BO58lQlkX9lk3mNKv8DCC0QABoMNjM3NDIzMTgzODA1IgzRPQa9onzb1%2BEKk7oq3AO6brLFcolKCYdjdADxhiNThpVL81IFvkkt9CCGzNaZhPJaDduPZrzXZSKuFO%2BTMJxTsQJ903R7yq9viNbfyGR9miJhsvEC6FakmiSBgTZtqrsbaClvjlA2JTUokJXU%2Bk4BuJH2J6H%2F4gOHClvXPdL3wp8Tqr4jo11wAWTTgtNxRjQqb8mFP4f8OU8eEa1cI5%2B9%2BEyCHwOLLgOCtywYGfMiKuxLMxmVhzH0maKes9xTZkZMTmyt2jQydGagHNRv6V%2BefoWQP0kKSEA1Ar1Venjs%2BkENu7gkq3Xs3A%2FAgDzauDIhSd37%2BBZRBXBAuQFR3TnCEfRUCdRUXctBJLTCq%2Fppy8k0uY00bYmxtOAyOZcle2TJYuoD%2BS%2F16mdxAtOQ5AdNMlWuf0vZ2AXCJql%2Fk4rKpwwpEoZSmoWSjRl7SGbPnfK4agUCJ2SEfNWwY8LOKOz%2BleJnCfc9BmMPBtlqD160xXUOuX%2BVEtib8Epm15%2BywXbgRJ6vam2lTvxLUKk%2BmCQayqiZ%2BJIRjXPipPwmkC8hb92Kok7M2MM6rjzkgfLQZtEd7xR4ptsjqlPyPDNMv0Qb0arWMBb%2Biuep0tgIuf6L%2BqwwwT82UkaJgn4%2BV7G1xtIudirMN1yBRWt0wjCog4i9BjqkAeVJ%2FxTEhI14WJQMsOxIyi%2FwZRFj38T%2B6bRb5AWc%2B7uluF5IYCj6hthTqTvWqw6QYnnSmj%2BYI6nz0XvcdjEeu3GauE5NYV5P4vRP5b%2B8IGLNwtLR2HpxTt8seyZ%2F9BrnA%2FLd6q1k%2BXGxfTSvpmPlkpwteFpgFhgNppyXjd1qlasqBFpjppPKcVTlDBW%2BxyO7H30WRzmCLTumDwP0vTzeAfqfPY7D&X-Amz-Signature=67112967b81d42b03d3aa816fb241c72056cfe5d9d6bf71c5df51bb7762a5704&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOAP6TJB%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T121356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCICY1beMzqT1G%2FZZSHCc0pU8IARTKo3RVNUrAmgenjCMwAiBLl6VJsjBK%2BSwDk%2BzBoRCfG%2F4TSw3O2eTXwID08N73pyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMlEGocdmP%2FgsOuFhGKtwDuHq821kUHhUzyHYNrETdWmpOJWymY7%2FYYIR7tdawnkJk2o27iNKJs6lmL7JhJzmLqlp5FPN48hhc5PdiMT7uxa0wnF18D%2Bq6pxn9%2FlcomzAHEwMb34dLhQEofRTEHrgLxXuXkDaED9IScQAqq2apRy8iVmZsam0DvtcFCUdVDQWiK7XQJKGzmmJMa%2FupHGk8paNOkeUcmjSahLZz8DA3USJ%2Fuky3Etf0IxTEXtK3q7UVYLojpt9%2BhhtQFs1nV6HI4uNHIvHRIbQv%2BhDSe3oqp9Qstyrom%2BJzLd2XLFHwL8ILhuqax1KeUIsUGPeSmiLgPW4porfCYjf5bfoS5n31MS%2Fxdk0Q%2FXKSMcKTeMDe7SnNAWMgNb9%2FegyvItySBxhDUuJo9khUedSUE%2FhTJBSfNuzMX2EskRAyeSTibhPjTVD8bLi3BMaeOjzexJK33DD2dPEJs8%2Bh0orpfDLBPX91PiWtxDU64IMFZ1NjczV4NDTooiE77NEyZm3c5bP5DKTCPAFYKyu0nmV0MsbC%2FYmn%2FUl1jAikAja%2BTSMDUVXK%2F8ItvBjxYwmZkrCOK%2Fjq0UOrNYRC%2Fm%2Fpqbf6coKxDt2E%2F%2B3QJov0%2F8ZWuoGvrzcYzTmgeqlFxSseCZxiwAQwt4OIvQY6pgEIvZgx0Mz4ou2v6Wp7pm3IzbVyXN6EUt4m5shHDwo6rX8VsHAHCFS5d9WMDJ2P%2FzBVD%2BeBMsGCVeFNnEohNzaXeK6rQjtIpz3%2BTi08QQeIhylftNxtwHbkB%2BeAzNneDiXNNIDnyE21%2BfnDGyZFKA%2B4QPmQ7A%2Ft4vu1pvORyCIC6CQH4sciruDj5EwLtZmFRYnt8joahcEe6mVNERinEwsamWbrsUp%2F&X-Amz-Signature=4282ca9c53f7fdd74a33d0bf7e3c48aad32ccaf2002ae7e357afe9a81a4edd41&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
