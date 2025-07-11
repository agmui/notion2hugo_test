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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GIBOG2C%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T042641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClJkKvswLGcdfb4rO7E4FDpYxY1qhFWaX650f5ypMrmwIgCEMwoV5jAb%2Bv7aunNnOlX1g1dESs53qw0YOACwN%2BhPcqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYDmpGldElpgCmdHCrcAyi0V3WulpxgckKZ0EVgDbE0Q47cbxu5d9v%2F7tLgO9Xjz93UgPQrNJGQkTVgju3qUpj2YXaRE8fPJO8RmCvlIWsdvoBRvDJM%2BSGHdlLkvRe6Vfb%2Fzf3mEEaPaB1R276JFZHsiVql9gxs3wIHRw8tmGDlSzRXNUrEW6dx%2FgHK5bKVgaQWio%2BXXd3O3oHWBjOugttOrz%2BfHpdmqar39KTC4mnCP8o5EiqKggrLLUVBUbxJI51PqbPsGj7idOaz0v4JQ2ZldPom%2BAQmWRnAA7casiJa4dJiPM052FkoGHW%2BeABab%2BjDMKQUoSqmbtwAkaemsLnk%2B2js2PsuSJFr3VC9bdAqghm557mW0HIbW0ANUk6S6acO0AxkdiYR%2F6k%2BlNGQuFHGDUrqqaaxFJ08kTZsTInNb%2FeVUHoktyM7UjkaJPlpQ3vfkIvFB4w0hziI%2FiyCgpqD77wWhKejPc43gM8DTmrBQti%2FOHTbeixqIZFQOTK9VvxBAUzvRekUMMhLYM5CdggY%2Fk6pHjOGJeE0baszszfXj%2Bwg54zxdUZvFb1WK62qmvdwzfwO0B6vJ%2BrDltqSsYDB0bIGA6l3qOUC3G7KfXDCcYU8Z49Qv8Ni16gRLExnZDoW6FQRPVDuy1VqMM%2F8wcMGOqUBbGtyxvHzM%2BKwhergpQS2rOq5vs6rwz0eWKc3%2BusGZxKDSMhRlJZvVLkEFuOPUgKWy1tLe4nyR4l2eLja1Garqh9rkMRrzznNNAuxttnjWV5Zxqoto01glChb6L7aTMN7POgOQUTlWZGD8837zbiedVAE%2Fs8igd2jcj3HUB3QWgBF6L3AAyc1gKCBfVvtRpk14XDdZfosLfTYgSl8Q7nLQzOonhTv&X-Amz-Signature=46ee2e5c40ed6cb06d0e2cb9eab92027f11e2c85a594d56822a2664b29c8d16f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GIBOG2C%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T042641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClJkKvswLGcdfb4rO7E4FDpYxY1qhFWaX650f5ypMrmwIgCEMwoV5jAb%2Bv7aunNnOlX1g1dESs53qw0YOACwN%2BhPcqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYDmpGldElpgCmdHCrcAyi0V3WulpxgckKZ0EVgDbE0Q47cbxu5d9v%2F7tLgO9Xjz93UgPQrNJGQkTVgju3qUpj2YXaRE8fPJO8RmCvlIWsdvoBRvDJM%2BSGHdlLkvRe6Vfb%2Fzf3mEEaPaB1R276JFZHsiVql9gxs3wIHRw8tmGDlSzRXNUrEW6dx%2FgHK5bKVgaQWio%2BXXd3O3oHWBjOugttOrz%2BfHpdmqar39KTC4mnCP8o5EiqKggrLLUVBUbxJI51PqbPsGj7idOaz0v4JQ2ZldPom%2BAQmWRnAA7casiJa4dJiPM052FkoGHW%2BeABab%2BjDMKQUoSqmbtwAkaemsLnk%2B2js2PsuSJFr3VC9bdAqghm557mW0HIbW0ANUk6S6acO0AxkdiYR%2F6k%2BlNGQuFHGDUrqqaaxFJ08kTZsTInNb%2FeVUHoktyM7UjkaJPlpQ3vfkIvFB4w0hziI%2FiyCgpqD77wWhKejPc43gM8DTmrBQti%2FOHTbeixqIZFQOTK9VvxBAUzvRekUMMhLYM5CdggY%2Fk6pHjOGJeE0baszszfXj%2Bwg54zxdUZvFb1WK62qmvdwzfwO0B6vJ%2BrDltqSsYDB0bIGA6l3qOUC3G7KfXDCcYU8Z49Qv8Ni16gRLExnZDoW6FQRPVDuy1VqMM%2F8wcMGOqUBbGtyxvHzM%2BKwhergpQS2rOq5vs6rwz0eWKc3%2BusGZxKDSMhRlJZvVLkEFuOPUgKWy1tLe4nyR4l2eLja1Garqh9rkMRrzznNNAuxttnjWV5Zxqoto01glChb6L7aTMN7POgOQUTlWZGD8837zbiedVAE%2Fs8igd2jcj3HUB3QWgBF6L3AAyc1gKCBfVvtRpk14XDdZfosLfTYgSl8Q7nLQzOonhTv&X-Amz-Signature=e9c2ad7977d404ea0f0450ce62c7d9ea4a11fec849730f93f2d38a3626c9b11b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GIBOG2C%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T042641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClJkKvswLGcdfb4rO7E4FDpYxY1qhFWaX650f5ypMrmwIgCEMwoV5jAb%2Bv7aunNnOlX1g1dESs53qw0YOACwN%2BhPcqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYDmpGldElpgCmdHCrcAyi0V3WulpxgckKZ0EVgDbE0Q47cbxu5d9v%2F7tLgO9Xjz93UgPQrNJGQkTVgju3qUpj2YXaRE8fPJO8RmCvlIWsdvoBRvDJM%2BSGHdlLkvRe6Vfb%2Fzf3mEEaPaB1R276JFZHsiVql9gxs3wIHRw8tmGDlSzRXNUrEW6dx%2FgHK5bKVgaQWio%2BXXd3O3oHWBjOugttOrz%2BfHpdmqar39KTC4mnCP8o5EiqKggrLLUVBUbxJI51PqbPsGj7idOaz0v4JQ2ZldPom%2BAQmWRnAA7casiJa4dJiPM052FkoGHW%2BeABab%2BjDMKQUoSqmbtwAkaemsLnk%2B2js2PsuSJFr3VC9bdAqghm557mW0HIbW0ANUk6S6acO0AxkdiYR%2F6k%2BlNGQuFHGDUrqqaaxFJ08kTZsTInNb%2FeVUHoktyM7UjkaJPlpQ3vfkIvFB4w0hziI%2FiyCgpqD77wWhKejPc43gM8DTmrBQti%2FOHTbeixqIZFQOTK9VvxBAUzvRekUMMhLYM5CdggY%2Fk6pHjOGJeE0baszszfXj%2Bwg54zxdUZvFb1WK62qmvdwzfwO0B6vJ%2BrDltqSsYDB0bIGA6l3qOUC3G7KfXDCcYU8Z49Qv8Ni16gRLExnZDoW6FQRPVDuy1VqMM%2F8wcMGOqUBbGtyxvHzM%2BKwhergpQS2rOq5vs6rwz0eWKc3%2BusGZxKDSMhRlJZvVLkEFuOPUgKWy1tLe4nyR4l2eLja1Garqh9rkMRrzznNNAuxttnjWV5Zxqoto01glChb6L7aTMN7POgOQUTlWZGD8837zbiedVAE%2Fs8igd2jcj3HUB3QWgBF6L3AAyc1gKCBfVvtRpk14XDdZfosLfTYgSl8Q7nLQzOonhTv&X-Amz-Signature=131fa012dbc8dffecf30c96493fb5ff0f65ea545579a3278ea7b5106f9bc77fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAXYGASU%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T042649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt861qYei06jObuno9vFII%2Bf%2BW%2BE%2Bg9hJYZCh9EORrmwIhAPNJx5JOO8l0mVeW8jBgP%2BY8ZyYc%2F2YQVtxnHQzQl9XdKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySwYPnVziRa%2FL1ohkq3AP2c3nOWlw9G%2F3csBJ5yoDlk7OpiNA2w3HHyAQT4mkbr4Dl32Jcsahza3sTYmLwgfTaQc%2FjfrikF3HXvRzUYAeF99HFonfP%2BYwBJqEqvbDw8P7TcdZ0rNx0zOi6dGo%2FO9nkojLtM50cbr3iYfKfjsdKWNGEjLTlIvZvGnBs5TsKvHXRly57GTZEQ%2FUiTJGuewdv4ltLCwxrtIwkxkV6kGgszrDqOo71KiYjPUO9lMdZkOdLctuqpYp1QQAQCi0bU36zbkP30T%2BfBSkiCZweArljs%2BT%2Btr%2Fsond67c%2Fp%2FKhUVBf1%2BgAJjTHmuif7DIbuKi4Vv1SlZc2OMI0%2FK%2BL5CRe80CsOqIcQyp6Q74WdftXxlQgiFC4ly1KklMj%2FxvHlHhECVpKcc%2FwdCPVbLdsB9rptBCWHvQ5%2FCphfCLyi3jRzu51fJ4H%2B11Y50k8gBdTcu0vImiSqy5qQS9dY4YUMrVc56%2Fyjz99%2FWsDdAs5rkQsdGyie6ObudU3bWOVqMhK%2BKv5zwnePZyMpTKYHkR%2BNlnt3sYpvP%2FY3B8Q2cU%2FegpW29XUjCZW9qVrbe7zV2BKjpviOZd7YCDcZ0DcFRaq8E6YLMc63%2B0hQmRdnczzFRGFDCxyOU%2F%2FXqY7RoT7FsjCr%2FMHDBjqkAQ%2BAaYEfIXGnHEFSBKkKQGvHBLVv6eYckfhPIu6HZzxD3yjhLu9OwwTZBPUWAYRFNcC2moHuh2m76cyM90W9x%2Bo4Dyvoi6N1Y%2Fq538pExILR%2BIm3L0NFaynWABuo9Ntd3HI0YEo1i0BiHy4fg%2FzXyiHLuED2JePj6eDOfIRjEjMWjWLd9wkyzMT2AB7y6HlvrteVyqgV6wYHT0X2gAA8qwd1MFNp&X-Amz-Signature=08723d5818b7c58647b76c001a50f6a9477334bb8f397e63da698e4d46ca782d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JSGYEH5%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T042651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEU0P1ZWx%2FhkzCHzAIbN4AAF%2BByAHwIpVp80CzXcwGBRAiEAjVwaVC%2FPqE4hp181g5QcE61f1%2BlldZnnw%2FwZqC53spoqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2F1sBlOtMjmum%2FLnSrcA1QdZ0pWAehzKzJ7wOj49jvoiqA%2BIkecVTzoOFHyPPOJ7l0e0bObs7mF2B05RskDoOx1S9BUqe1nwa9Zz6ZE%2FmJ7X1APgY4kR7%2BUIbzXGzasUkA8VFogPGx6bErpKlRUzOBFCLjvG9ENDxfR%2Bx76MlOpt2e6IGfuDhkDldg62hcE1YNl8F7Zzdx4sHdAUyu6338hW7ehw7mvPE9nh8T74EaylctLhF4AwErr0gi4eDFrJwNJ2LBrC8ddP01F7Aoe0%2BvoPKYTF5IL8g92%2BA2xDAsyP7Iam4VHu%2FMx3PAeRWUsqD5yaqJtXHFRzO30gHPU8G9Q5SRM6rzSCGUbnFDl0YAYX4SedSeJsV6b4L8oLdwxVU%2BiUQtGGMRwaUjecfMiu9qxkQ9Z3xqwVCS1G7nn58yJniRjhXRNwq0au40l0CyeZOXY103zevznFmHcI2GbmTrB1fnDz10eghlqibceJJlnNfI%2BgvQuc1M4pMjQ0pXBhaei07yotpcPnAArbu2qKVZKNhKRCCOUWu%2F7rq1%2BH1OcSLGv2UYN%2B%2BswZ1JlFWJeKLWxlDaMAXPQ%2FPXajOiQYnFzoxyDTnsNsvULAkzJmMSpSDIwrIvSDmaL3I4kQR0SRBvdzDj7SuWnNl6WMNH8wcMGOqUB%2BqBaP4ALWUnd6lDZqovaqqgg91nGkZYOGTGtxoyBVP8%2FcVb2JFiXAMCYQEbmgmDGviq1XfFVzvPNhmj71EL5AzdSfcjUWCqTEv3Gq4wo5EJPKjM7eWlQEh%2FfGkG8GBhUCgEUnUH%2Bs5GzYHnDT7yWBnjhMuT1mxiVK2bU2neEFE7f1ml5h8MyJreIsJF9llCDcqLL0d230DpywNfFjslkvFsLW9cC&X-Amz-Signature=af6c966a6004765b9c8a6513e3fa2c57550dffefe59028f1c939426a323ad091&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GIBOG2C%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T042641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClJkKvswLGcdfb4rO7E4FDpYxY1qhFWaX650f5ypMrmwIgCEMwoV5jAb%2Bv7aunNnOlX1g1dESs53qw0YOACwN%2BhPcqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYDmpGldElpgCmdHCrcAyi0V3WulpxgckKZ0EVgDbE0Q47cbxu5d9v%2F7tLgO9Xjz93UgPQrNJGQkTVgju3qUpj2YXaRE8fPJO8RmCvlIWsdvoBRvDJM%2BSGHdlLkvRe6Vfb%2Fzf3mEEaPaB1R276JFZHsiVql9gxs3wIHRw8tmGDlSzRXNUrEW6dx%2FgHK5bKVgaQWio%2BXXd3O3oHWBjOugttOrz%2BfHpdmqar39KTC4mnCP8o5EiqKggrLLUVBUbxJI51PqbPsGj7idOaz0v4JQ2ZldPom%2BAQmWRnAA7casiJa4dJiPM052FkoGHW%2BeABab%2BjDMKQUoSqmbtwAkaemsLnk%2B2js2PsuSJFr3VC9bdAqghm557mW0HIbW0ANUk6S6acO0AxkdiYR%2F6k%2BlNGQuFHGDUrqqaaxFJ08kTZsTInNb%2FeVUHoktyM7UjkaJPlpQ3vfkIvFB4w0hziI%2FiyCgpqD77wWhKejPc43gM8DTmrBQti%2FOHTbeixqIZFQOTK9VvxBAUzvRekUMMhLYM5CdggY%2Fk6pHjOGJeE0baszszfXj%2Bwg54zxdUZvFb1WK62qmvdwzfwO0B6vJ%2BrDltqSsYDB0bIGA6l3qOUC3G7KfXDCcYU8Z49Qv8Ni16gRLExnZDoW6FQRPVDuy1VqMM%2F8wcMGOqUBbGtyxvHzM%2BKwhergpQS2rOq5vs6rwz0eWKc3%2BusGZxKDSMhRlJZvVLkEFuOPUgKWy1tLe4nyR4l2eLja1Garqh9rkMRrzznNNAuxttnjWV5Zxqoto01glChb6L7aTMN7POgOQUTlWZGD8837zbiedVAE%2Fs8igd2jcj3HUB3QWgBF6L3AAyc1gKCBfVvtRpk14XDdZfosLfTYgSl8Q7nLQzOonhTv&X-Amz-Signature=ec214a339b94a1bb5e5713be3d8133a2c622626a08fb7aa89498b48f54a0cea1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
