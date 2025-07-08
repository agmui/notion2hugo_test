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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC7JZS7J%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T110841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4kSe2e2CbXqxwBcfH08Gua8up2ES1VGr8%2FVx7b1AIAAiEA%2BuOHJ8dgHszTb1OMqb4HCkBtDpIswa8esl25ONIyN6cqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQMWstztSYwTkKBJSrcA0YKu4qtIKWpCGR2SPD0veTpz1TWxVx%2BmMKjlB5cEPZ0F0IonbogWagyd3G0GQSlQIRxeUhcbVb7yaxkhuP6c3fqcWuye9cQoF5xVTYhmJKqcRheGEA0CA0IHV7S1VqZ6vm711HoHlvv7LyEWXrb8rJQXrieYj5sVH96mCxO9NUUOkNuaRfMLTFaiCEeBcMzId0MG3vLLyh6xJe4zuAU9nZZbwCp%2FzNSZ3w0O5b37gmTCkabwFfmePwIsqrOZlYzo7c4jEatOlXTZxGvWG8aA4d2gqq9kLBQHk5d2cEh32lyRV3TB6m4x6WOly2vY5pzTHg%2BsCTL1pqKI9T5bb8w6vmkklXi6Yj1nlrfq6VLQf3tpaNk5hvvv0tJWU0yag8MPykD0gtTz2RHxp3ohHvqypCYTdD1ME8BEHlbRphW%2FTd%2FvG2KTBuWAdbimMEttqlKr%2FCf%2FW6q7GQU4Sf7lZoZgBqH9%2F9hdbCFuEgvJ0MFFWqc1lidkskEQsI9VpiBzKm8xajKiWiSPouN1A1MRJot3SSMGadVJ4lgCHrvrf8FRx24jVTTukphy7eVtyhj0rYX498nKsATXIh%2F5cUrp5iSBjKO%2FaLvQzElVkdX1shB4gss7PcJqluLoUL%2FMCQNMLLIs8MGOqUB6FxNsKL%2BLr48vPxVahrkdLCBziJe12rls6mV2xGn3GM%2FjMFbhUuMSCDxKQkKCpEJUqAQbhIeg9P8PQUXwEKxekRyeR0TcYvS4s3Ta4JX1%2BXog400CrnvpDIjAf7ZXXRdDMwEKZ%2FyY6p8G2ovkTDefvUb4tiz8tvdKgnWXDqbCitelLbkLVapsgZst8GMcll%2FGwuXa6e2ShaTth6mvI3Y9KEtNPj3&X-Amz-Signature=0909cb93af907951160dec876e1b9f924772b61c5eba2daf072f6b957f94dc21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC7JZS7J%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T110841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4kSe2e2CbXqxwBcfH08Gua8up2ES1VGr8%2FVx7b1AIAAiEA%2BuOHJ8dgHszTb1OMqb4HCkBtDpIswa8esl25ONIyN6cqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQMWstztSYwTkKBJSrcA0YKu4qtIKWpCGR2SPD0veTpz1TWxVx%2BmMKjlB5cEPZ0F0IonbogWagyd3G0GQSlQIRxeUhcbVb7yaxkhuP6c3fqcWuye9cQoF5xVTYhmJKqcRheGEA0CA0IHV7S1VqZ6vm711HoHlvv7LyEWXrb8rJQXrieYj5sVH96mCxO9NUUOkNuaRfMLTFaiCEeBcMzId0MG3vLLyh6xJe4zuAU9nZZbwCp%2FzNSZ3w0O5b37gmTCkabwFfmePwIsqrOZlYzo7c4jEatOlXTZxGvWG8aA4d2gqq9kLBQHk5d2cEh32lyRV3TB6m4x6WOly2vY5pzTHg%2BsCTL1pqKI9T5bb8w6vmkklXi6Yj1nlrfq6VLQf3tpaNk5hvvv0tJWU0yag8MPykD0gtTz2RHxp3ohHvqypCYTdD1ME8BEHlbRphW%2FTd%2FvG2KTBuWAdbimMEttqlKr%2FCf%2FW6q7GQU4Sf7lZoZgBqH9%2F9hdbCFuEgvJ0MFFWqc1lidkskEQsI9VpiBzKm8xajKiWiSPouN1A1MRJot3SSMGadVJ4lgCHrvrf8FRx24jVTTukphy7eVtyhj0rYX498nKsATXIh%2F5cUrp5iSBjKO%2FaLvQzElVkdX1shB4gss7PcJqluLoUL%2FMCQNMLLIs8MGOqUB6FxNsKL%2BLr48vPxVahrkdLCBziJe12rls6mV2xGn3GM%2FjMFbhUuMSCDxKQkKCpEJUqAQbhIeg9P8PQUXwEKxekRyeR0TcYvS4s3Ta4JX1%2BXog400CrnvpDIjAf7ZXXRdDMwEKZ%2FyY6p8G2ovkTDefvUb4tiz8tvdKgnWXDqbCitelLbkLVapsgZst8GMcll%2FGwuXa6e2ShaTth6mvI3Y9KEtNPj3&X-Amz-Signature=495f764b6699afa282adfbd7f7373ddfeb4050a86a38727961ee09881f17239f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC7JZS7J%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T110841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4kSe2e2CbXqxwBcfH08Gua8up2ES1VGr8%2FVx7b1AIAAiEA%2BuOHJ8dgHszTb1OMqb4HCkBtDpIswa8esl25ONIyN6cqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQMWstztSYwTkKBJSrcA0YKu4qtIKWpCGR2SPD0veTpz1TWxVx%2BmMKjlB5cEPZ0F0IonbogWagyd3G0GQSlQIRxeUhcbVb7yaxkhuP6c3fqcWuye9cQoF5xVTYhmJKqcRheGEA0CA0IHV7S1VqZ6vm711HoHlvv7LyEWXrb8rJQXrieYj5sVH96mCxO9NUUOkNuaRfMLTFaiCEeBcMzId0MG3vLLyh6xJe4zuAU9nZZbwCp%2FzNSZ3w0O5b37gmTCkabwFfmePwIsqrOZlYzo7c4jEatOlXTZxGvWG8aA4d2gqq9kLBQHk5d2cEh32lyRV3TB6m4x6WOly2vY5pzTHg%2BsCTL1pqKI9T5bb8w6vmkklXi6Yj1nlrfq6VLQf3tpaNk5hvvv0tJWU0yag8MPykD0gtTz2RHxp3ohHvqypCYTdD1ME8BEHlbRphW%2FTd%2FvG2KTBuWAdbimMEttqlKr%2FCf%2FW6q7GQU4Sf7lZoZgBqH9%2F9hdbCFuEgvJ0MFFWqc1lidkskEQsI9VpiBzKm8xajKiWiSPouN1A1MRJot3SSMGadVJ4lgCHrvrf8FRx24jVTTukphy7eVtyhj0rYX498nKsATXIh%2F5cUrp5iSBjKO%2FaLvQzElVkdX1shB4gss7PcJqluLoUL%2FMCQNMLLIs8MGOqUB6FxNsKL%2BLr48vPxVahrkdLCBziJe12rls6mV2xGn3GM%2FjMFbhUuMSCDxKQkKCpEJUqAQbhIeg9P8PQUXwEKxekRyeR0TcYvS4s3Ta4JX1%2BXog400CrnvpDIjAf7ZXXRdDMwEKZ%2FyY6p8G2ovkTDefvUb4tiz8tvdKgnWXDqbCitelLbkLVapsgZst8GMcll%2FGwuXa6e2ShaTth6mvI3Y9KEtNPj3&X-Amz-Signature=07b054b4dfb45f0b49d72870d0eca739275df2701c61b48ea976b845e41946aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPGWXQYD%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T110842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpN2W%2FiQMjRKb0TB%2BpJQw6W3EIT72JkzdAdOiuePaY6AiEAycF21UvUNy%2BU5YLt459vUTYZ%2FU8TMnDk0hMtJfRaoWwqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrCOiJX4Rm%2FQtrbhircAzoM2IHEcGEtpsiexkzmDYnkbEBHDwMthqKpM4hBo7D4zFeU1O4Xe%2Fc9e8SokxVoyr3ydn6K6PbV9rKe1vX%2BZc4HXqKNa00i5EH5zAxW%2FLV0snlhiDzLwboCptkwCIcBFpnyVmSGdPk27Y77ofLnsSmh4GRlAq3aSaORq0ENf6kHkXJoVTthmwJiMS4nSLcd88kJfgr2Rjl0xEclqp7xGh8ZDil4dvPuh2bPMRxNQInghGBWF9ITQF16ERCn8yUyDOtae%2FG4eoDcfcy3Avwgx7nLYWdoFboFDyTUXEQwHKijlRptRR%2B2HSpmnbsP1Zjfkk4J5auNb6Zx%2F0gJGImrOM%2FyPCQWbObt4ht%2FvaVes%2BYX3VPCWFq3ovZsFwdILzOu3iI2aQ5my7gcbErBvRm9NKgDeTZ9JKTr5hXs0YTsjmB6K5%2F9JBCafgVeFgsPeDomftIHCg97SehPrkZYC9%2FmvS%2BbjYxwu5c2rrVfUOUnnubGJLW%2FatPKXKUNbiQxxZi0o1yTms1eL%2F%2B3DIzTbdBRWso9nXiwlq8Mc%2BzKWVBI89zskq0V8rAgonbwWzliiiLPcE2LbUBeZMutATlvaLk4g2MC%2BMji0C%2BvZenSc56yr47i27SzwwKL8nvPJFb9ML%2FIs8MGOqUBu%2BMXHr0piXUYvdGisgZy5w8FszmVFt8jsWmIwK0%2Bq%2B8xiqHTZVDoAcTQpwRfDPc5j2rkjIzuoZX6IfI99SzyElBRbiDn2orofaciUSwKJynXSejja%2BKTm1ulEYNDUUUr7asEfDYQU9vAhhTNioyCB4Wu51GzVSK0as2yWUDE%2FfEfLqHGsYtjEvvfe68YsAjJEvQmp%2BC%2BQEBSIqUdhV7EKIKmm42D&X-Amz-Signature=9e32016fde957cbd2fa305cac698b4ca8e3001c8f3fd4a60017ac0561b125079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z2HVMET%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGByvkan0R1hq1RYR15LyZDQiTA003Ij%2BeIDIoFJaHBxAiEA6tsl6l7d%2FZrnSENgBCFQCC6jxkxgVKyhKWxu0Zp8ko8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzCVTbdeNfCyJ8akyrcAxPd%2FbUxSirbTAuSYb2nw6tClU%2BLLLknGKmrPxv3ABPFak%2Bkcmb%2FPV0GBAtHEjDJwTA%2F0SNpNC5WIhH6rsbiYJ87aSHYXUf55Bbrq3iMStJgeP%2Bq3ZOZ2bLW5DWFo8rWyh6uFYy2u4OSqlGuNFxAdu88%2F6sSkjIDLfVthKIu3gByZhxhesooLKGY6XzjGFQKf9B8hjl19kPOxYxbuo93qPkqbhB0dSq8WzK8TlH%2BWDt27Tl502i5bkoj8VABHu3YwUENKQY0xjRtFf8CmiJGuL6KBfTfP7rPQv%2BP1hW0Vqwn7T4RTTO%2FQIFx8MAtMFDtJY044yN5CxCthXWH3GuHgKwlrp253FP%2Fq%2FHmYXytZcqrCD9D10jbF99PZ6%2Bj1HGY1ESYGvBlxY2GSZwhp9Hd%2BMmMhntgciK8%2F5%2Bphkh8a2hWDazPM2xudTXdp9Xyo6dnr%2B5xQ1G%2BK1oIYEDFEnCu1F13J1mUf%2BMX8gxIwpQzqY6fFK6XUMKwW%2FMHnSDFax51J6BKNLJq1UR%2FOEhMbXe%2FvdB%2FdtbWI0dXlDjwUqjzvmaF4Y2v1OG%2BTj82jkJrbKQSPdAc1yjFUGcMMRGf5RH%2BRW%2BIRc4uzrg7qozETDLOwo9RvXIHdObHBLHMfutcMP3Hs8MGOqUBFXazUuC4byrIamsx9yK6P%2BZdvJLGJH8DvqW6uNJM7jDyh0n8MM1DzVl74dARTItGT38JIs2EK9tPI7RJ%2FO7aJFkgvy2fXmfdErrVil6aaq7RfNXueAzNggdzta4HTvBkCNbfwCWVnVpht6%2BoguyE261lwSxXYck62pQFugNTkTQKjxpKzm2MydNE3CkAIB137OcX5kd7sEk60utif8ZoKrg9xHS0&X-Amz-Signature=904fcfcec673b27de3e4da62201566aa65ba744e6d6e0c542fa01952b3f3e4b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC7JZS7J%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T110841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4kSe2e2CbXqxwBcfH08Gua8up2ES1VGr8%2FVx7b1AIAAiEA%2BuOHJ8dgHszTb1OMqb4HCkBtDpIswa8esl25ONIyN6cqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQMWstztSYwTkKBJSrcA0YKu4qtIKWpCGR2SPD0veTpz1TWxVx%2BmMKjlB5cEPZ0F0IonbogWagyd3G0GQSlQIRxeUhcbVb7yaxkhuP6c3fqcWuye9cQoF5xVTYhmJKqcRheGEA0CA0IHV7S1VqZ6vm711HoHlvv7LyEWXrb8rJQXrieYj5sVH96mCxO9NUUOkNuaRfMLTFaiCEeBcMzId0MG3vLLyh6xJe4zuAU9nZZbwCp%2FzNSZ3w0O5b37gmTCkabwFfmePwIsqrOZlYzo7c4jEatOlXTZxGvWG8aA4d2gqq9kLBQHk5d2cEh32lyRV3TB6m4x6WOly2vY5pzTHg%2BsCTL1pqKI9T5bb8w6vmkklXi6Yj1nlrfq6VLQf3tpaNk5hvvv0tJWU0yag8MPykD0gtTz2RHxp3ohHvqypCYTdD1ME8BEHlbRphW%2FTd%2FvG2KTBuWAdbimMEttqlKr%2FCf%2FW6q7GQU4Sf7lZoZgBqH9%2F9hdbCFuEgvJ0MFFWqc1lidkskEQsI9VpiBzKm8xajKiWiSPouN1A1MRJot3SSMGadVJ4lgCHrvrf8FRx24jVTTukphy7eVtyhj0rYX498nKsATXIh%2F5cUrp5iSBjKO%2FaLvQzElVkdX1shB4gss7PcJqluLoUL%2FMCQNMLLIs8MGOqUB6FxNsKL%2BLr48vPxVahrkdLCBziJe12rls6mV2xGn3GM%2FjMFbhUuMSCDxKQkKCpEJUqAQbhIeg9P8PQUXwEKxekRyeR0TcYvS4s3Ta4JX1%2BXog400CrnvpDIjAf7ZXXRdDMwEKZ%2FyY6p8G2ovkTDefvUb4tiz8tvdKgnWXDqbCitelLbkLVapsgZst8GMcll%2FGwuXa6e2ShaTth6mvI3Y9KEtNPj3&X-Amz-Signature=854a9ea935ada4b09027c67c134b53429fd8e49e5723f57b238d849481543006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
