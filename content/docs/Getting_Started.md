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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLC24A4P%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDlhWilLJJUYXgFh4x0sKBuUR4rAOkT3HQVp4kbriFycgIgIq0puQaqpIXMPnv01qtYS8t1D8L9r0KXCwo2zsZhTiQqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLjUfr68AJL4hYNnircA%2BD%2FquzfiNBtxqrii%2BN9uPaeoIdrpE32E7bX4RWfPZJSUtJ7DfY9u4BMUjF1SkJBiAnR7jqWAFz6620TRgxtkgAZRGn2n18VKqhisruM%2Fraj3NYNlxCaPwZfk8mj5EPmAvrlEXp%2Fkb4OgsCO0GFNqHEM9vE82%2BaYvv2eEnZMO83i0pnOt4SYAmtYsqZN05fxmA%2FQ5DeiXGZsmvmwFfN4U8upJwx6hBkIIU9zT2f24HTC9yPhSJ40n0XYwKj7QeRt74ZgvwlSDJ2HZn7FecD%2B6vcc4c2HThDuUYCQMdzO04TyHWNIINcjcEH85ukWmWM2l38MJYbwlzZrrbVuNSnJfRsdJ7p9YfVzRw6MZvp5LdZ%2FzLFozC5BjVNC7eXgeP7bO8DFV1aUqlDrmWS2KQSgfyFcidiZhl%2FjHZFcNBbb2%2FYPvDJjb30w1j455mk%2FpwYnhMnD4BeJNmvcXA7zBfGTOaownhz6iR%2Bu9NjMSM9xVULu6b3Ep3rUIMtxmT12EBpYNv%2BLOiLEodnuRur6OfqIdBBMaLrwAf5kf6MEkDg9vAD497MOSn1y5UtV25FO3tBEpIYDVwNfCvOuCeRjsbZlNBjIhU%2FlCFNHupFOi%2FbmmmpsNk%2BR6FlNuUceF0j7MJChg8EGOqUBDD34dnIowESalUVy4pAtDU4JMUSj9VrOnvG2pj0dUmU4jaa1WgFTVdggGOZLOuvQtbqoFmN8AKtv9sz0OiJKIdRXHSmeauzvQlLJ65cojKPv5HmMsRb9IpCQwOR%2FnsKOXwBgFeVHhctPF%2BPwjQg4g1CeB4FzbixGclHabdYnVutqscW47v2b5qqJ5R6Rud6yDVKBEIQD4G6cJ5TBqpf3HrfUxYKZ&X-Amz-Signature=e010ebd6659edaf17c77033c60e84f217fb06c41b402ade5be337af06b8df8fe&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLC24A4P%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDlhWilLJJUYXgFh4x0sKBuUR4rAOkT3HQVp4kbriFycgIgIq0puQaqpIXMPnv01qtYS8t1D8L9r0KXCwo2zsZhTiQqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLjUfr68AJL4hYNnircA%2BD%2FquzfiNBtxqrii%2BN9uPaeoIdrpE32E7bX4RWfPZJSUtJ7DfY9u4BMUjF1SkJBiAnR7jqWAFz6620TRgxtkgAZRGn2n18VKqhisruM%2Fraj3NYNlxCaPwZfk8mj5EPmAvrlEXp%2Fkb4OgsCO0GFNqHEM9vE82%2BaYvv2eEnZMO83i0pnOt4SYAmtYsqZN05fxmA%2FQ5DeiXGZsmvmwFfN4U8upJwx6hBkIIU9zT2f24HTC9yPhSJ40n0XYwKj7QeRt74ZgvwlSDJ2HZn7FecD%2B6vcc4c2HThDuUYCQMdzO04TyHWNIINcjcEH85ukWmWM2l38MJYbwlzZrrbVuNSnJfRsdJ7p9YfVzRw6MZvp5LdZ%2FzLFozC5BjVNC7eXgeP7bO8DFV1aUqlDrmWS2KQSgfyFcidiZhl%2FjHZFcNBbb2%2FYPvDJjb30w1j455mk%2FpwYnhMnD4BeJNmvcXA7zBfGTOaownhz6iR%2Bu9NjMSM9xVULu6b3Ep3rUIMtxmT12EBpYNv%2BLOiLEodnuRur6OfqIdBBMaLrwAf5kf6MEkDg9vAD497MOSn1y5UtV25FO3tBEpIYDVwNfCvOuCeRjsbZlNBjIhU%2FlCFNHupFOi%2FbmmmpsNk%2BR6FlNuUceF0j7MJChg8EGOqUBDD34dnIowESalUVy4pAtDU4JMUSj9VrOnvG2pj0dUmU4jaa1WgFTVdggGOZLOuvQtbqoFmN8AKtv9sz0OiJKIdRXHSmeauzvQlLJ65cojKPv5HmMsRb9IpCQwOR%2FnsKOXwBgFeVHhctPF%2BPwjQg4g1CeB4FzbixGclHabdYnVutqscW47v2b5qqJ5R6Rud6yDVKBEIQD4G6cJ5TBqpf3HrfUxYKZ&X-Amz-Signature=de4b69b7bf5783f92f50872c8effc664dfe7a17d265916717d8c22fa2d868d44&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLC24A4P%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDlhWilLJJUYXgFh4x0sKBuUR4rAOkT3HQVp4kbriFycgIgIq0puQaqpIXMPnv01qtYS8t1D8L9r0KXCwo2zsZhTiQqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLjUfr68AJL4hYNnircA%2BD%2FquzfiNBtxqrii%2BN9uPaeoIdrpE32E7bX4RWfPZJSUtJ7DfY9u4BMUjF1SkJBiAnR7jqWAFz6620TRgxtkgAZRGn2n18VKqhisruM%2Fraj3NYNlxCaPwZfk8mj5EPmAvrlEXp%2Fkb4OgsCO0GFNqHEM9vE82%2BaYvv2eEnZMO83i0pnOt4SYAmtYsqZN05fxmA%2FQ5DeiXGZsmvmwFfN4U8upJwx6hBkIIU9zT2f24HTC9yPhSJ40n0XYwKj7QeRt74ZgvwlSDJ2HZn7FecD%2B6vcc4c2HThDuUYCQMdzO04TyHWNIINcjcEH85ukWmWM2l38MJYbwlzZrrbVuNSnJfRsdJ7p9YfVzRw6MZvp5LdZ%2FzLFozC5BjVNC7eXgeP7bO8DFV1aUqlDrmWS2KQSgfyFcidiZhl%2FjHZFcNBbb2%2FYPvDJjb30w1j455mk%2FpwYnhMnD4BeJNmvcXA7zBfGTOaownhz6iR%2Bu9NjMSM9xVULu6b3Ep3rUIMtxmT12EBpYNv%2BLOiLEodnuRur6OfqIdBBMaLrwAf5kf6MEkDg9vAD497MOSn1y5UtV25FO3tBEpIYDVwNfCvOuCeRjsbZlNBjIhU%2FlCFNHupFOi%2FbmmmpsNk%2BR6FlNuUceF0j7MJChg8EGOqUBDD34dnIowESalUVy4pAtDU4JMUSj9VrOnvG2pj0dUmU4jaa1WgFTVdggGOZLOuvQtbqoFmN8AKtv9sz0OiJKIdRXHSmeauzvQlLJ65cojKPv5HmMsRb9IpCQwOR%2FnsKOXwBgFeVHhctPF%2BPwjQg4g1CeB4FzbixGclHabdYnVutqscW47v2b5qqJ5R6Rud6yDVKBEIQD4G6cJ5TBqpf3HrfUxYKZ&X-Amz-Signature=cd8ba9aec22f7d08929506fc0062d74e2902f587832208ab4a44940b43be650c&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT6LO6GN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T200820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCIGJVfwkBvfFkh7Id%2B8%2BEJ5CCSr9w6avwQssu5SfGbXQIgaOzr3ZBNOy9PWO5vMpM9FsxQTXibIteUpeuLRiH5rpoqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGnR8CvZ5dK7sH50GircA6QH3sYtyig75H8J1yEziqOXgCJIR3nfFbtvh5wagWPigshYTpyBn8BBFk9aHORD6uD0sKtSrqnVWdEsRQKEyAz40JhjeUyjZi7PdPs%2BUQnnbUVvWMKyYtGSTm8OrgezEJPopxZapgu03EkriZQ9gh3ZrI32bcITNe95zKjirW%2Bidjs2JNu%2FUtpD4yxYQUyByjl9mDzxJ%2F7riVbaLtag4Dw%2FB03%2B4y5tKsanOSpSG%2FBjiMLYT6R%2FFGftAkudWIhbYZ4z1NlbrfJ5352p%2FsEaDweWleUR5ugs%2FiSB0%2BNogwGtMqk07zbtMSLapU5aCsFRKvKiBm7baW5%2BBqzgXkc1HLbvY6zRJBGra6%2BEWif6ApmnJfUtTx8Cmrk03g4NWZ%2BXo%2FOpbFTp%2FPOeTZnEpZSmj9QM6fV38VqZWyOFlDec341yN73HsaWxmP%2FrvWyhSxAsKrSBvbt2bgyPauJh4lVhzuFPGNC7ctlsJ0Rb%2BOJg5o0%2BzLp8dAzkqONuFm2wcp60TU4Sa6oAPuCoTyT3E1O3Z3VxLj3JJpXsYfYElRXC7vXsrXQsDF96V9icELLjcnWjLT1IE7BrZjmzNyKtN29CwlqrV6osFSWYnn7Jqr9WG%2F%2Ft1Y2LOCbJVZgoayNRMJGhg8EGOqUB3pbpXgWpdynD%2FFrO5ZoMHHliWGCh5a%2BzyuWK835aKx5VOyQY5e3jTQFF1Yhz4v%2BcmiWYvxUNdGS%2BVhS9i5DWis%2Fte6B3RqJhCfS9MfDeO%2BHXBthtFCQL5XuyGb0la2VoZEfcjXEXb6F%2Bibs7dFVZ5QHEhf8KHtYleFePDjQWLY7fQg3ckbdIG2gX1o%2BZy%2Fb4BPMzn3iL0VFZECSdkDuMT7tWUzGr&X-Amz-Signature=88367b4b6137ee2da694296daa8a0627ff35139ccf638737bf72278883bf8ea7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPE4II2H%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T200822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIGdGo43hXjqD74pDWyOTZydk6zJuNRKeh6QiQg4ff8tUAiBMX561afqZuYtwLxNOGQypP%2BnPt%2Ff2YbLOWpgE8gwYPSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMupqmYVdVi1CrhL9rKtwDJsKnBWwPrKelYmRTACh0FOJ94sIgVImBwHwUZfGP2JuYDsN2zcwGy0uW89mv7F2hQQmkPz1P7sKQM5RtNMdvsU7nrG3Mdl%2F%2BLzQk%2FHkHFNrve0C%2BHsDkMSouykDxihq%2Fxlg6%2ByRIjOp%2BUM5CJbQCzDPwv%2FYi0IJPnPPiMQaqIVI91qYvp5wUCWd1xE5s258THatjIjho7ALPUNdGqo2iZrGW3Do6i%2FxfyHA3LGZNObGluYXnJFOQjizhK%2BylsFr3QLYzpkuj1g4KmIQlo1d2TXd6jMAdSLAyaav0fNr%2FgN14eK3GF7Wox1DHDMw8%2FKBW6aCRysNTenP3PO2unXnwS%2Fr300NKdDC1M8aeWIA9mUwjcmr3aqgMwu%2BVp91JL8nbNQvttySxgLlyTNdiE9KB7CLqqVIWzLwLUvr3OoY7rqWMmce6KlQnSYnATTvgUCVO8RB9fz8xGZMvLkG7Y0jHgYg%2BwMHmzbqCpNN6g0fUAZEmgxQLYYIdo18MscD%2FEyyEOkvsGCK5B0t4eEIentBpsBPqek%2FzNvX%2BQo1CvFtLoxtRnO7GY%2F6Z5JfPrCLSEWacAkcuG8%2BTzxIDTimPsqSIZ9vCmhgEC2riKBUVkik1kEG9OH7qO8ncJI9Sr3QwpaGDwQY6pgEXAv6%2Fiw0ijW9hbgAVQaO9YPUYlaQqYLo3Ccj5IkvzsF3HCdi96h3i36LGJSsIM%2Bbg6lo1%2FB3cWejdzneIXWSjNgSAWPqZ0aCxxocqqYh3qWLbFzG1YtQG%2FIe4mAX%2FKLyn%2Fll8Npo2U6cIjS1Hxcm2Wj42k9gt8f3qopnaHj8yIztIMQLT3WgHCsP4USnxhsuLK7%2Bx2FrhWPGy%2B3qseDA96VEmD0Ls&X-Amz-Signature=cb17e314eeb9678c81de615e0b1601d70fef18706b585382733c47aed286292e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLC24A4P%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDlhWilLJJUYXgFh4x0sKBuUR4rAOkT3HQVp4kbriFycgIgIq0puQaqpIXMPnv01qtYS8t1D8L9r0KXCwo2zsZhTiQqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLjUfr68AJL4hYNnircA%2BD%2FquzfiNBtxqrii%2BN9uPaeoIdrpE32E7bX4RWfPZJSUtJ7DfY9u4BMUjF1SkJBiAnR7jqWAFz6620TRgxtkgAZRGn2n18VKqhisruM%2Fraj3NYNlxCaPwZfk8mj5EPmAvrlEXp%2Fkb4OgsCO0GFNqHEM9vE82%2BaYvv2eEnZMO83i0pnOt4SYAmtYsqZN05fxmA%2FQ5DeiXGZsmvmwFfN4U8upJwx6hBkIIU9zT2f24HTC9yPhSJ40n0XYwKj7QeRt74ZgvwlSDJ2HZn7FecD%2B6vcc4c2HThDuUYCQMdzO04TyHWNIINcjcEH85ukWmWM2l38MJYbwlzZrrbVuNSnJfRsdJ7p9YfVzRw6MZvp5LdZ%2FzLFozC5BjVNC7eXgeP7bO8DFV1aUqlDrmWS2KQSgfyFcidiZhl%2FjHZFcNBbb2%2FYPvDJjb30w1j455mk%2FpwYnhMnD4BeJNmvcXA7zBfGTOaownhz6iR%2Bu9NjMSM9xVULu6b3Ep3rUIMtxmT12EBpYNv%2BLOiLEodnuRur6OfqIdBBMaLrwAf5kf6MEkDg9vAD497MOSn1y5UtV25FO3tBEpIYDVwNfCvOuCeRjsbZlNBjIhU%2FlCFNHupFOi%2FbmmmpsNk%2BR6FlNuUceF0j7MJChg8EGOqUBDD34dnIowESalUVy4pAtDU4JMUSj9VrOnvG2pj0dUmU4jaa1WgFTVdggGOZLOuvQtbqoFmN8AKtv9sz0OiJKIdRXHSmeauzvQlLJ65cojKPv5HmMsRb9IpCQwOR%2FnsKOXwBgFeVHhctPF%2BPwjQg4g1CeB4FzbixGclHabdYnVutqscW47v2b5qqJ5R6Rud6yDVKBEIQD4G6cJ5TBqpf3HrfUxYKZ&X-Amz-Signature=a9ec38aa38e2be98bd257f85e5873153bde6c14bb5a7b4b6b7f10359ad8f1d8a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
