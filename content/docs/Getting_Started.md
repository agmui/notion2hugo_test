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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIES4PFJ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCwyp%2FvrgpSi78vnYwEOh9iN7TK69lTBrKAGKhh9%2FJSDQIhAKaQ2g6bjihIk%2ByRxaLIsDNnKiDH3PzvJ7BR9W%2BMRJ7qKv8DCHgQABoMNjM3NDIzMTgzODA1Igxt6JlL6SllQ8bu8Lgq3AMxUpUeIzJ6SuODOcqzIULEnUUQBFWGyuU9a2R4pk9G8aNvSecAECvH9E57dJZRmuGibuZHlw%2BzMA0XNbNqWb886wqCjpe1ZStk%2FyYI6n3EjOKhRxT3vOdsRxZ7KC4O%2BoI0c6tngtf97SRQy8JP4RgUDtW0BJ1HnI4xgKDK5MXgHIMTaIxsZwkGIgXRiFS66vKaDEoVUfs%2B3wp8djXZOnaPVulbLtFBP5f2W20V%2Bg3dtqdYXsK3IR2to1avm%2FFeGHbuRzF93OsDPls2%2B%2BumHBz3GakSd5fI19mY4udWza3ViXnKmgEY0ZrG8Lz425p00So6I0Uut%2BNFb1kEVzSBdBFpZ94rAZug0dSAYMWpZ6EZQAhpRdg%2BPzp7pZ%2FeVXZNk%2FRkM5Fn0qHzN7O3CsYQzdUe%2Br39qItCoe6jfydo7tpL08aA%2BB1QrAD9Jpfpr4OCf7NyqTJeHkrB4qVYpgF7%2FgYW%2Ba9%2Br58kvjRAdc%2FtWTpaeM1C9VOc8a1A65B%2FSubhiOnraxpxziv0Mkh5vo0uw%2BTwdKAVcXT9S8JYtYHAZr5Y3H%2F6wY8UChT6zn%2FWPtAurUG0gegnU95%2FeL1ThO%2BWaGCO6Ys19geqyCWLaR9qI0g%2Fo9%2B8Nhk%2FB3WkrlnlGzCFvOu%2BBjqkAZKIjWvKk22K5r6kP3HS0B9YevEu%2Fq7qeuO4LOLRl0miUwmJJC2XuMIMmeui3JSd1rSlJF5qbyAzleWXiYTVtqr7wvUU5YBAfKGnzo79TdvG6tfWeB%2FxZsZXGEfT%2FldqaI%2F6UFLwBGw%2Fu7vgngEtwHiwxTDy0rXAlBKT2ua4qJ7ihaN43%2BAtK87iL%2FSBBF%2FXSVSD1li1kH6epBJG0nYugMFNffAQ&X-Amz-Signature=e5cba1016e81a90440ee01b5eb5d70843815dcc41487750dd468cc8e0827e80d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIES4PFJ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCwyp%2FvrgpSi78vnYwEOh9iN7TK69lTBrKAGKhh9%2FJSDQIhAKaQ2g6bjihIk%2ByRxaLIsDNnKiDH3PzvJ7BR9W%2BMRJ7qKv8DCHgQABoMNjM3NDIzMTgzODA1Igxt6JlL6SllQ8bu8Lgq3AMxUpUeIzJ6SuODOcqzIULEnUUQBFWGyuU9a2R4pk9G8aNvSecAECvH9E57dJZRmuGibuZHlw%2BzMA0XNbNqWb886wqCjpe1ZStk%2FyYI6n3EjOKhRxT3vOdsRxZ7KC4O%2BoI0c6tngtf97SRQy8JP4RgUDtW0BJ1HnI4xgKDK5MXgHIMTaIxsZwkGIgXRiFS66vKaDEoVUfs%2B3wp8djXZOnaPVulbLtFBP5f2W20V%2Bg3dtqdYXsK3IR2to1avm%2FFeGHbuRzF93OsDPls2%2B%2BumHBz3GakSd5fI19mY4udWza3ViXnKmgEY0ZrG8Lz425p00So6I0Uut%2BNFb1kEVzSBdBFpZ94rAZug0dSAYMWpZ6EZQAhpRdg%2BPzp7pZ%2FeVXZNk%2FRkM5Fn0qHzN7O3CsYQzdUe%2Br39qItCoe6jfydo7tpL08aA%2BB1QrAD9Jpfpr4OCf7NyqTJeHkrB4qVYpgF7%2FgYW%2Ba9%2Br58kvjRAdc%2FtWTpaeM1C9VOc8a1A65B%2FSubhiOnraxpxziv0Mkh5vo0uw%2BTwdKAVcXT9S8JYtYHAZr5Y3H%2F6wY8UChT6zn%2FWPtAurUG0gegnU95%2FeL1ThO%2BWaGCO6Ys19geqyCWLaR9qI0g%2Fo9%2B8Nhk%2FB3WkrlnlGzCFvOu%2BBjqkAZKIjWvKk22K5r6kP3HS0B9YevEu%2Fq7qeuO4LOLRl0miUwmJJC2XuMIMmeui3JSd1rSlJF5qbyAzleWXiYTVtqr7wvUU5YBAfKGnzo79TdvG6tfWeB%2FxZsZXGEfT%2FldqaI%2F6UFLwBGw%2Fu7vgngEtwHiwxTDy0rXAlBKT2ua4qJ7ihaN43%2BAtK87iL%2FSBBF%2FXSVSD1li1kH6epBJG0nYugMFNffAQ&X-Amz-Signature=016e787c86d0a02d6ed374162298059623460c0247840890b7b1ccb8d7c35b11&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K3GT5GN%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIG8dbnbt67M4xeHEhm9g%2BhJL2xAwO%2FzjwpUwhD8Ui4jUAiEAx4pacqKCSQyMOFdQhwCos5eUSxBLv226QMQKfSHQo%2BYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDDp4%2F5TfAyB%2B7vG9uircA8CRBwqQcDjm4k4kFy9aP%2BRJcvpyW%2BruXGfchyZpKqxiONv5Qv8JEfC6ohrOI%2FZ8VQSOGgaQJsjC%2F4LzLXcIYejKB%2F5N0XaU%2B%2B6V9NcxiUOzauVBTHkNLIenVicTOvl%2F%2BSZfQxjrPGJOU8GiUmh9XZBuSuv%2BrQrY9TCwJlOW1XalPTe%2BX4o21YBED5ZhH9d3tuftuqhyKakzEXc2Vme5Aiy3gNs7Xjd3NnCjd5bnvR0rv%2BD6bILZnIspg2R8OK1Nt5H%2FLSSHc6tx1BBuk8aj03n%2B%2BQf6eILUskQXZi4NWF%2BYAhyY88psg62mrdWtT1kiF12IoTJiuhyWhCkvC9s7HaNfWHDpyFfuPE8lZHnI03h4XEW8gzDRKMhiwTllid4L83rQvq0hvCyGh2JStBgD5BuxFlscef6CS9yQKG2Q68E1AO38jUi%2FECTFEspWvke4IUGVIgcV5o%2FI3FoqDfpYKw82Z3kTthBCy8BjM6Yv1GTNgcueZpY3r2rQhMeRAOT0TW%2BDV6hXAmXQK%2Fyk5PJUff5VFwzZDa%2FOYvNH5mwJa4rNJbKCxMf4gVLVPVImf7v%2FWpbpWBb06rKzBILFVhuYD5igc%2FP%2BXB3jbcEwx3Z67d5eoblFXSPsMi%2FHOj%2FjMPu7674GOqUB5wqsWyzuxA2vuL%2Fz%2BYiWQ62RzRJKZdzu17capeMl9JsYCmnfNBUiIBbsUz4eCPkaRzfMmouZ4n%2FcHrG5biR%2BmG%2B7tJLVBS%2BrYWsLl40L8zPGfygoW2u%2FSEYqzIzfVC7Sdh3ug1r7KPT5Dso1aQRTX2ve1tXdYuXCE0QdcRJLSHOTEkvRFJT3rLFy1GxTE77FctSksgNHEAX6goLicfknhDbtqL7%2B&X-Amz-Signature=71fecacc7d76b3eadef891c108c30001ab59523c9bdca971a1f6747190dce586&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMVXA5MD%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIB%2BO4UzHUfIl7n2A6C4qFpDZhxXRtBFPGofKXVLwmeq2AiAVdwat1idw9qPLp%2FzwKgv0%2B1zqbCSbNeaBW%2FCjUtJQ9Cr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMWgWXaRZOVQ0g%2FE0oKtwDVObyXCHV7JMQM077KpL2SDUaipGn9xHNkb6%2BinIpqMJy6w%2FGXK9AMG5MQmHFdWUiKu60BQfven5K82nGIdbYaRhZDWEImI0yXWU9U9HOMGUjb6jYywHfGgJZJIoMwX5A%2BLPAe49XToau7YjBqL1oNogkKs5fMyahGOBPvR0UJCeKtSJqjoMmGAJD624fR3EPuU6177bStRWiIH%2B75DBw%2BRXcjcVXQknrYnt64p5Nk624zwoUM8i6HxiPeGSs1oeEmeIJk1SMH0b7R0xuzyqgzgztbmQndrLxIXm9mbyqMb1s7DpFLyNHNK6by3P3BjRCQDifkwDRrxewrUfPZxCeTugDg2%2FzbZl1n9pWTMbd%2BmeotUw5JBWPpvelLsS31Pk%2FbU2HXzBRhfZqe2P7t06uRDLcW86%2FL3%2BgKVrU3v0cygQnRvZQV2QkR1KKyyafCaL%2FnVAvQgVCF8kS%2FRzuEKZD%2FZGZEmUNYhihcVBocglErjL79WApTDKPPtpQMy69KcE6d%2F1DVy6ky6ptIXN9mrQK%2F3CJnA4qecFvG3ExL7%2BLi82u8mNhvli0Hb8n0MBRgk05Oz7zFR6ojh6zY3YDMnab52BMwisohCkaUshmdIJkpr74hV%2B2OyW6HHnUPk8wir3rvgY6pgGrI09OUR%2FBDvEBqXW9oO%2BgVOhl0qEZ%2BkgNsGkpcS6bDj4qJHq9oFTpSpt8R4V3Ucn6PATSF6Eek0rsm%2FXRUBl%2BLIeYWlMuVY3ezaIoBNkk4b%2FcdKN6G9jFHibTz7CO41yOlf1bXTR4olkBgiXbE9KhHomPT665mNbUl0mP7ivAh0tvXt6JQl1p1PmVmTewU2JomNskspKV0JpoyyUF%2B0BLi1t6fA1V&X-Amz-Signature=02593bdba16b7ac18b6b1b2b2f46f4d0bf35bd7267cca5fc3f158df7ee6e005a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIES4PFJ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCwyp%2FvrgpSi78vnYwEOh9iN7TK69lTBrKAGKhh9%2FJSDQIhAKaQ2g6bjihIk%2ByRxaLIsDNnKiDH3PzvJ7BR9W%2BMRJ7qKv8DCHgQABoMNjM3NDIzMTgzODA1Igxt6JlL6SllQ8bu8Lgq3AMxUpUeIzJ6SuODOcqzIULEnUUQBFWGyuU9a2R4pk9G8aNvSecAECvH9E57dJZRmuGibuZHlw%2BzMA0XNbNqWb886wqCjpe1ZStk%2FyYI6n3EjOKhRxT3vOdsRxZ7KC4O%2BoI0c6tngtf97SRQy8JP4RgUDtW0BJ1HnI4xgKDK5MXgHIMTaIxsZwkGIgXRiFS66vKaDEoVUfs%2B3wp8djXZOnaPVulbLtFBP5f2W20V%2Bg3dtqdYXsK3IR2to1avm%2FFeGHbuRzF93OsDPls2%2B%2BumHBz3GakSd5fI19mY4udWza3ViXnKmgEY0ZrG8Lz425p00So6I0Uut%2BNFb1kEVzSBdBFpZ94rAZug0dSAYMWpZ6EZQAhpRdg%2BPzp7pZ%2FeVXZNk%2FRkM5Fn0qHzN7O3CsYQzdUe%2Br39qItCoe6jfydo7tpL08aA%2BB1QrAD9Jpfpr4OCf7NyqTJeHkrB4qVYpgF7%2FgYW%2Ba9%2Br58kvjRAdc%2FtWTpaeM1C9VOc8a1A65B%2FSubhiOnraxpxziv0Mkh5vo0uw%2BTwdKAVcXT9S8JYtYHAZr5Y3H%2F6wY8UChT6zn%2FWPtAurUG0gegnU95%2FeL1ThO%2BWaGCO6Ys19geqyCWLaR9qI0g%2Fo9%2B8Nhk%2FB3WkrlnlGzCFvOu%2BBjqkAZKIjWvKk22K5r6kP3HS0B9YevEu%2Fq7qeuO4LOLRl0miUwmJJC2XuMIMmeui3JSd1rSlJF5qbyAzleWXiYTVtqr7wvUU5YBAfKGnzo79TdvG6tfWeB%2FxZsZXGEfT%2FldqaI%2F6UFLwBGw%2Fu7vgngEtwHiwxTDy0rXAlBKT2ua4qJ7ihaN43%2BAtK87iL%2FSBBF%2FXSVSD1li1kH6epBJG0nYugMFNffAQ&X-Amz-Signature=6aec82d239c5dae95ff774f257ae414440f538d6eb3eb49a0106dc0dd0a7537d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
