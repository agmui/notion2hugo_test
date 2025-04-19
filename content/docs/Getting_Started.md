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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVDPM47N%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T140240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIFdpBDJo6IapTia0H7gT1A7lt9sEi2onJQrYNox5gjd4AiAjFoYztjDYbgev8FIEsLJabn%2FDODV5A%2FC%2FdgHehRp6CyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIj9PflmIXG%2Fj9e4aKtwDgvgG6A4odlD8CQLy3822v40DcuAs%2B7gVnlEDDyVgVJVECUHd1r3kYEwaAkCP9lrA0BR4cV3bAcGImFQJwQnWIsCKko3ovTMQ6o01kYaH5KX%2F5YnEZuDqeOZxqBot0%2F25r66wkNSEJWHQy2GIRXi683GytKJoM9YBzJAvPm5X2QXBF73dizdDAYQmAJRZSdFs6wb9GnfXfPnr9WRkTZZkd1yk9EQi%2BeEYDMBjqlk4Qhkc%2FfRtj2XPhNqK%2F7tCzx6qxUyXHRxsLcHljj99yKI%2BpOGfbupfnwLx%2FiK88EIox6YW0F7%2BBAwLy9TfuBTW6b9LCNBzwFXnHd5JKs7BjQ9zAc4obXY2tuYHlqt%2BizQHU8grAI0oU8js1%2FhVbUN9ylp4uJCH83z3Wg4zJOyf0jxOWDKOkXjFvZ1CD61LevVl7zFvgnO7GGErpYxKz0HH8dD7kmHdIdR3U%2Be4NrfPDPRRhjeoa4y6rQqVw%2B97Bd%2BUrSj94ApMb5SU8wWpK4%2BFdMCMAMMtbmyya9Ty6qM0BgA3iVZMQeHKJZ7YtVKGO3N3q4kXvgT8zfaU%2F6it2bWymm8oWyItLjZXxhkNUQICewVontPxDKZaeBF8PoJVPAFJhlt7%2FQT64uEzmL%2F69nswmp6OwAY6pgEX5PN6zLUK3r0QMde08TndEh3oQTh5rClmDK07VPbOJqCWPY3ZS522emXNVkm7VgefEd%2BSwkTX5FkdziLQFLMteCOt7nskRVcAphCdz3V3W5p2%2FKlY%2BRk4p0Qxo%2FMOLB9UQFaxNZv2f1KFteOnbUOW%2Fke49pMVQuyxzy1Gzs6jy83WCrRHYeBCPWwX%2B0BvT4d4atSLih4bZ1HZevkwXfS7t0TEBWDR&X-Amz-Signature=146282876406cf42f719e208484502b364e5841a8116d60169c39989bed3fabd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVDPM47N%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T140240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIFdpBDJo6IapTia0H7gT1A7lt9sEi2onJQrYNox5gjd4AiAjFoYztjDYbgev8FIEsLJabn%2FDODV5A%2FC%2FdgHehRp6CyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIj9PflmIXG%2Fj9e4aKtwDgvgG6A4odlD8CQLy3822v40DcuAs%2B7gVnlEDDyVgVJVECUHd1r3kYEwaAkCP9lrA0BR4cV3bAcGImFQJwQnWIsCKko3ovTMQ6o01kYaH5KX%2F5YnEZuDqeOZxqBot0%2F25r66wkNSEJWHQy2GIRXi683GytKJoM9YBzJAvPm5X2QXBF73dizdDAYQmAJRZSdFs6wb9GnfXfPnr9WRkTZZkd1yk9EQi%2BeEYDMBjqlk4Qhkc%2FfRtj2XPhNqK%2F7tCzx6qxUyXHRxsLcHljj99yKI%2BpOGfbupfnwLx%2FiK88EIox6YW0F7%2BBAwLy9TfuBTW6b9LCNBzwFXnHd5JKs7BjQ9zAc4obXY2tuYHlqt%2BizQHU8grAI0oU8js1%2FhVbUN9ylp4uJCH83z3Wg4zJOyf0jxOWDKOkXjFvZ1CD61LevVl7zFvgnO7GGErpYxKz0HH8dD7kmHdIdR3U%2Be4NrfPDPRRhjeoa4y6rQqVw%2B97Bd%2BUrSj94ApMb5SU8wWpK4%2BFdMCMAMMtbmyya9Ty6qM0BgA3iVZMQeHKJZ7YtVKGO3N3q4kXvgT8zfaU%2F6it2bWymm8oWyItLjZXxhkNUQICewVontPxDKZaeBF8PoJVPAFJhlt7%2FQT64uEzmL%2F69nswmp6OwAY6pgEX5PN6zLUK3r0QMde08TndEh3oQTh5rClmDK07VPbOJqCWPY3ZS522emXNVkm7VgefEd%2BSwkTX5FkdziLQFLMteCOt7nskRVcAphCdz3V3W5p2%2FKlY%2BRk4p0Qxo%2FMOLB9UQFaxNZv2f1KFteOnbUOW%2Fke49pMVQuyxzy1Gzs6jy83WCrRHYeBCPWwX%2B0BvT4d4atSLih4bZ1HZevkwXfS7t0TEBWDR&X-Amz-Signature=2bfb0279a75ff67737d30f2ebd0cc975320cd262ee8ce516b57c18f5e58db3c7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4L5O37P%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T140242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCoD1NfeOfqMZPu%2FPyo8ww%2FZ3NXsnixVVuM8mFUh6t8wQIhALoNfxla9HELYubHqreAE1DXvxnnkARK%2FFg2LK%2FCvPhlKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8zinYVVZVSLMsgWgq3ANncfKWeBYIppGdSMjXBfOz41zcXTPxHgd47%2FdHbdU1bR2uikEEjNh7gL9B59%2FFfglfjKrAESVpzWeC9keGsz9%2B%2FS1VXgOzMhK%2BTQXZIsw6QHM5T8Ly3WRW99kQl0sTmGGcNLv3rHKPOGZmTVeXKAAZnsLFjAr7xreMIXBnRptrcX1mbQqSu5Q%2BCob21vH%2BhjK8wyQoNtOlw48kQhTynUwArQMOwW4E0kerUQS1O8WaFaqAIBtKZDRbq0wmjnTc0cMkCOediT2ODUmC3CpTJq433DCx6zb7WuEJ7Pbuhvqr5W4Cn0vYKMGvbvgQC2FstExRm9EDLmeYMA1xxr8eHEwB%2BODVcD9rygV2MnpVBjj%2FfI9g1XSjcQiz46ecNGXCheM%2BdDfTi6aw43PU6UrXTEmub22MUjBPv6Kz62ZXkccoJLlVWQQlzlUrV7u1R6CvM5A9NxW7%2BcW0bJXoAV8LOPYpWSRi9I1PPRAIZggM8tnGAdo5sXoM4p7LrykS8V3q22YSyusTekV4DwClw9aMs3k5aVmrlBymIw6drFrDqgA%2FGHGdOMKyTsPCb%2FFj7PctJ%2B5htO55%2FtJrehb1Rus4UU1fO71rAywSR8RpXoB51U7KW4l%2BUeZLUfyp1XdMrTCrnY7ABjqkAX88N0lNWf6G50UI62dJAioG698ejdfN52QghYagh2GBLQfD4Ke6u9Jq27trAgWBrynpbCRjeRY2DcNt%2FJschhe22LDayViJyPAnX3HlTmjSSX9rcySR8erHI%2B93KjbvbCi8If6Bs5l%2B7H9ZcYixCJshvWrSRG3ETG1UdIBOP20knxkyBxESo26WPf4uihepqpM7KUpaIE0Me75gu7MNtRQX29ND&X-Amz-Signature=bc4f02a97ad44fcb1f45f0a9f63a0d49b86d7225a120fb7119739b154c7616a0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLUKBJMT%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T140242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIHtWWeKA1zQM7i83STLkSBzSb73x3GBzDi2p6jbE06mbAiBJzGhPE79Pya3nn5xj6V3e%2B5VDsOm2brXFkXGu%2BVeJliqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM37nKYgnNoYeIajUzKtwDeR0aK8BbKuhug5X%2FwkTChkCIfW0FhfaTo8gmvnQM8abfX4f47eA%2BWHLADiUqq6vJeMcwgI6PEiT5LV2HEbB%2BPCZ3%2BkMuKEEaSoyTwJzEwQmaT22c%2B8MDw%2Bq%2Fmvom3YdPHRVr%2FytQNq1UD%2B3v30aO0E4Xc7EfJPEgcEW7Q5ob75uKfs9%2B3Zh1jA5nErr7AWKr3kysF3i5IMh02S8Jm%2FOAojjCLD1Rnn2dAyAUEHJ0b0y0QTTy5W6GTU%2BMp8NgzRAeTCeyqQHItth2XRB5BSN4zDpOd2N6wpo8iEq%2FR%2BQNNxmclrCAXkkJyfTO7SyUMLDnx8tjQReZOMEMi0bII9GqcBHPbnWAvG9RMUXA9%2FVMpe22k75oEMYGruQ54%2BtRgeaC92nm7qEc5DuUxrZq32rvfW%2B79CxhjTdL1ZGXxI73ATbqqjAfF8Xy3X%2FE%2Bkg9yJLpHWk%2FcXF7r4cKNPA6psLE3q1yMYrMZH4oyOonoB077mvfW2GgZqgGqiM%2BfqmrlRC%2FkXX0scOT7e%2BwwTW9h39GDD2EQrFHN00ZMOoK8tXQxg3bqbady6GpsOZfwAMbi%2BStrG2uaLTAF6n9lHTFiQXS0f7oD1Z5AK00TmgoBcCsiS%2FuDzOYB1Ae%2Bjze7gMw8saOwAY6pgE32kVVzMK7YKfLpbiqu1fmI0M4Ie%2FU1fJyfGM3S6JoWJB1F71yeT4H8dMX6dWrhpE1at1YNYk3Qve5TP6CiVzxVOyDvTp1U6qDkWBVrUqlTgqsOrocvFOy3aOmzEgvDd3XRYvGjWJP5R3CMO4x7LomZTr3MaVCHYIjqHn2JgmcCkIHED516%2FfvkKIOowOeWHgdTU9Eszyoeo2YmNRqrRGcucZS7gB1&X-Amz-Signature=507667b1b24a0282977f4412be52e45e8f4f8e539d4b439fe44bed21fa09456b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVDPM47N%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T140240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIFdpBDJo6IapTia0H7gT1A7lt9sEi2onJQrYNox5gjd4AiAjFoYztjDYbgev8FIEsLJabn%2FDODV5A%2FC%2FdgHehRp6CyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIj9PflmIXG%2Fj9e4aKtwDgvgG6A4odlD8CQLy3822v40DcuAs%2B7gVnlEDDyVgVJVECUHd1r3kYEwaAkCP9lrA0BR4cV3bAcGImFQJwQnWIsCKko3ovTMQ6o01kYaH5KX%2F5YnEZuDqeOZxqBot0%2F25r66wkNSEJWHQy2GIRXi683GytKJoM9YBzJAvPm5X2QXBF73dizdDAYQmAJRZSdFs6wb9GnfXfPnr9WRkTZZkd1yk9EQi%2BeEYDMBjqlk4Qhkc%2FfRtj2XPhNqK%2F7tCzx6qxUyXHRxsLcHljj99yKI%2BpOGfbupfnwLx%2FiK88EIox6YW0F7%2BBAwLy9TfuBTW6b9LCNBzwFXnHd5JKs7BjQ9zAc4obXY2tuYHlqt%2BizQHU8grAI0oU8js1%2FhVbUN9ylp4uJCH83z3Wg4zJOyf0jxOWDKOkXjFvZ1CD61LevVl7zFvgnO7GGErpYxKz0HH8dD7kmHdIdR3U%2Be4NrfPDPRRhjeoa4y6rQqVw%2B97Bd%2BUrSj94ApMb5SU8wWpK4%2BFdMCMAMMtbmyya9Ty6qM0BgA3iVZMQeHKJZ7YtVKGO3N3q4kXvgT8zfaU%2F6it2bWymm8oWyItLjZXxhkNUQICewVontPxDKZaeBF8PoJVPAFJhlt7%2FQT64uEzmL%2F69nswmp6OwAY6pgEX5PN6zLUK3r0QMde08TndEh3oQTh5rClmDK07VPbOJqCWPY3ZS522emXNVkm7VgefEd%2BSwkTX5FkdziLQFLMteCOt7nskRVcAphCdz3V3W5p2%2FKlY%2BRk4p0Qxo%2FMOLB9UQFaxNZv2f1KFteOnbUOW%2Fke49pMVQuyxzy1Gzs6jy83WCrRHYeBCPWwX%2B0BvT4d4atSLih4bZ1HZevkwXfS7t0TEBWDR&X-Amz-Signature=7b870b431ecf3ee9af04e2c07baa04e0a5f466285f5c52fa3d92089bbe1c85b9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
