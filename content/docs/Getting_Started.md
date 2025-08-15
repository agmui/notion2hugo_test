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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRDS7COV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIACMlB32u2OrRc0A8yZtfEJUvMwYn9%2F9ESuzMCZuhPrGAiEAk2heL7%2BW0M4b8F4enF2hmo7TZSHrJr0NAnEERDJOLBQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHK8MyisBcjo7Wa%2F7CrcA9HVTsRcyXsaSqlnNDpcOiSacOzavRuCgeLQq0t38vzloqvtL5UPg1cdenX%2BRWSnsmnoDHPr5rTKK4MR9ZIE8BabXWL3H5T6NK5KBTQATDfwtoDpsW5hzMVV0Z4R7xF%2BpTFasH5PC6ahGt0uiF612sPK9HJnQ7%2FkKiliwm7Fpx12fskStpPhOfht%2B7RMibDTPIQgkwh9909DU32MMahZh4qtYYUMsJgqje7ACw%2Bm4uyOrwfScdqnqM3vyUK4NhbKKZk1e9FHbdMcIsEFb0ebLrBVgOGjsnEAlgKZZpQZoRI4ViSZmqTXp66XCM0AqOu%2FtzdnnwJE8qXqvHHuX2hwstE8lj2Bz9DHtzxm0ntQZowvvHcVmbD6ogsgISAu%2F3XUSw%2Fi9p75A6wWoCVcHhHxgV87SC%2B47z%2BBuqSMH8g59s34DtnGTUwO2fNVrZ3qxiwnmq1G2euMEpndHU1Ke9WAgSt5AIxrJw%2BrOUIzbTFDXy8FMWWxWD3%2Bk06OIuCI%2BgSgeNdia2rzBiFplVTnmMTg5G7IokC17FvzdMvV8bV%2FXtk%2FdQVoa%2FUOyoqaNfAbabivDJg3%2B0SwF9vAk7uYvIIGCtSfCZxhM2izixUfACA%2F%2FvUm7jCIWF8TI5dPh10lMICj%2BsQGOqUBKRK%2F14YXiZxebGubfS5AG6MYOQPTBTyQFiR4s7MLhC3AwCoFOM3Ft3fcXfRzyL%2FBSBwz9WNTweA6qJ0qhjXVY10wK6%2FJXSD1SEu7vCJD9stAPDIO%2Fih54kVKynyxB2F0pFM205Rr41BKUeLggJpPmSUnGOhdUjK2jBzAJYwReHdE7A%2Flr6vRcP%2B%2BYj7N8hHlGsrObd6BOe4ZDccEUcMWaFNKlVbV&X-Amz-Signature=a87653bc8ffa972d2aaba0284b76255d058493fca060a14290aeb5a54ea682c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRDS7COV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIACMlB32u2OrRc0A8yZtfEJUvMwYn9%2F9ESuzMCZuhPrGAiEAk2heL7%2BW0M4b8F4enF2hmo7TZSHrJr0NAnEERDJOLBQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHK8MyisBcjo7Wa%2F7CrcA9HVTsRcyXsaSqlnNDpcOiSacOzavRuCgeLQq0t38vzloqvtL5UPg1cdenX%2BRWSnsmnoDHPr5rTKK4MR9ZIE8BabXWL3H5T6NK5KBTQATDfwtoDpsW5hzMVV0Z4R7xF%2BpTFasH5PC6ahGt0uiF612sPK9HJnQ7%2FkKiliwm7Fpx12fskStpPhOfht%2B7RMibDTPIQgkwh9909DU32MMahZh4qtYYUMsJgqje7ACw%2Bm4uyOrwfScdqnqM3vyUK4NhbKKZk1e9FHbdMcIsEFb0ebLrBVgOGjsnEAlgKZZpQZoRI4ViSZmqTXp66XCM0AqOu%2FtzdnnwJE8qXqvHHuX2hwstE8lj2Bz9DHtzxm0ntQZowvvHcVmbD6ogsgISAu%2F3XUSw%2Fi9p75A6wWoCVcHhHxgV87SC%2B47z%2BBuqSMH8g59s34DtnGTUwO2fNVrZ3qxiwnmq1G2euMEpndHU1Ke9WAgSt5AIxrJw%2BrOUIzbTFDXy8FMWWxWD3%2Bk06OIuCI%2BgSgeNdia2rzBiFplVTnmMTg5G7IokC17FvzdMvV8bV%2FXtk%2FdQVoa%2FUOyoqaNfAbabivDJg3%2B0SwF9vAk7uYvIIGCtSfCZxhM2izixUfACA%2F%2FvUm7jCIWF8TI5dPh10lMICj%2BsQGOqUBKRK%2F14YXiZxebGubfS5AG6MYOQPTBTyQFiR4s7MLhC3AwCoFOM3Ft3fcXfRzyL%2FBSBwz9WNTweA6qJ0qhjXVY10wK6%2FJXSD1SEu7vCJD9stAPDIO%2Fih54kVKynyxB2F0pFM205Rr41BKUeLggJpPmSUnGOhdUjK2jBzAJYwReHdE7A%2Flr6vRcP%2B%2BYj7N8hHlGsrObd6BOe4ZDccEUcMWaFNKlVbV&X-Amz-Signature=059345415991dafa8917f537bd512a04e42475fd7392f764afe4310d896ccf9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRDS7COV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIACMlB32u2OrRc0A8yZtfEJUvMwYn9%2F9ESuzMCZuhPrGAiEAk2heL7%2BW0M4b8F4enF2hmo7TZSHrJr0NAnEERDJOLBQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHK8MyisBcjo7Wa%2F7CrcA9HVTsRcyXsaSqlnNDpcOiSacOzavRuCgeLQq0t38vzloqvtL5UPg1cdenX%2BRWSnsmnoDHPr5rTKK4MR9ZIE8BabXWL3H5T6NK5KBTQATDfwtoDpsW5hzMVV0Z4R7xF%2BpTFasH5PC6ahGt0uiF612sPK9HJnQ7%2FkKiliwm7Fpx12fskStpPhOfht%2B7RMibDTPIQgkwh9909DU32MMahZh4qtYYUMsJgqje7ACw%2Bm4uyOrwfScdqnqM3vyUK4NhbKKZk1e9FHbdMcIsEFb0ebLrBVgOGjsnEAlgKZZpQZoRI4ViSZmqTXp66XCM0AqOu%2FtzdnnwJE8qXqvHHuX2hwstE8lj2Bz9DHtzxm0ntQZowvvHcVmbD6ogsgISAu%2F3XUSw%2Fi9p75A6wWoCVcHhHxgV87SC%2B47z%2BBuqSMH8g59s34DtnGTUwO2fNVrZ3qxiwnmq1G2euMEpndHU1Ke9WAgSt5AIxrJw%2BrOUIzbTFDXy8FMWWxWD3%2Bk06OIuCI%2BgSgeNdia2rzBiFplVTnmMTg5G7IokC17FvzdMvV8bV%2FXtk%2FdQVoa%2FUOyoqaNfAbabivDJg3%2B0SwF9vAk7uYvIIGCtSfCZxhM2izixUfACA%2F%2FvUm7jCIWF8TI5dPh10lMICj%2BsQGOqUBKRK%2F14YXiZxebGubfS5AG6MYOQPTBTyQFiR4s7MLhC3AwCoFOM3Ft3fcXfRzyL%2FBSBwz9WNTweA6qJ0qhjXVY10wK6%2FJXSD1SEu7vCJD9stAPDIO%2Fih54kVKynyxB2F0pFM205Rr41BKUeLggJpPmSUnGOhdUjK2jBzAJYwReHdE7A%2Flr6vRcP%2B%2BYj7N8hHlGsrObd6BOe4ZDccEUcMWaFNKlVbV&X-Amz-Signature=411726821f2040925a2b4877d1fa82a8c693bd8e641568e6f6b9b273a9e15ec8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPB7JTX7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICrt%2F3p5byBuJVaOv82STfQe1Saq%2FtAJobxwvL1NlnJXAiB%2FurmnW2hjYhYEN0x8QWdl7wyRMVjBJhRmpMOts%2Fajgir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMIdZAewbLpn8B7xICKtwDJuHWkHxi58rlDHnOpVkjgohHSDqImynZWNaWeBt%2BjD0nGLAOReBa2Af24d9pCuf1TSqlYvqE6krQic6i%2F8tMOUoLVFaSPmphkx0F1Ewm7HXO2GSL3lr0uDCeoWH3fVJOSTRSQALI6Kd9Khf8haQpcD4lf5HBYepEEh%2BPRHg8%2Bgeeneh8wimJFtJ4qc7E2VjdmUfW5u5%2FSXtrIHnwbC5%2FjQhWQzwSThSn7cI4EgIzp5Qser1TmMOwNtSqJmbpIyswCHDuMjIUQnlcrIz71nWjUJtIr4MscRVfb7LYbkXJXAixcDiK3PYn4xQ7jc2Y29RfEAXD26BKAsUTecRvKER7Yzw3KLS9XRb%2B9xe1c9p7%2FXei1JMjwWd%2F6gi9Cdm6qKi6RmXH2rsKlT0LCD03vZymqGtlLhuc1uvz1a%2BtvVXrm6IzkMBtxTKX2UdufSyXQzc4eQ4FMIsYQ1fb3CZwMj4iFbxeCEeJNFABITslrOHCxRdYqh1ivUuLAUWGbzIchcqsvG5Z49NC9m%2FSipEc5sPFbdEs3bw31LRAlk0XVsEm3GYgKTU0MnAOHZLPUujtEHm%2FFdMV%2B5P1PYXOy4ZECgDIiMZQ%2FlLRbizGG0%2FjIiqH%2FDfu4BIezpWHOr0CGnEw5aP6xAY6pgHZfOS4Ba1ltsnir1rXkXBLWzvN491huVqTz1xZZIQdjp7aLahRqohiCwf4YF8hLBUPGVtboK9nBo820ITICeTx77VrVcP%2FG3Gj0hMeSVt2QpVhfVsn2Uyy9xpUcmIqruJ0y4HWxU9rEnQzz0SYj2VYCnCa67fixZENB9g83pNxuc5ja8Flvf0Wqo09pRv8EEWH254g5%2BK5ntjZfeTOqXjsM6mrhCTd&X-Amz-Signature=d2024dee75c7d4ee2bd65de09b99cdc1c3bb24d8b52fca10dbeba2e14ae28a9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KXOP3NK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQC7Xa1c3YL5coRZg8aD1XD0aI1UcS13itc094jWflTIrgIgFxqVyUMLXiCsyuNjtxG%2BtoPwqG7gZ4I2t4F9Cce4kS8q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJDV6DQWyd0M1Wk2SircA6eGR6itZcDcIx9drxWNaJ15ZdCJFQ%2F0cP1IAWv1DUvZPKsEncYBKoYn9GtoYYJZWaQeiiaAWVWwRmW52f3WPWiv98TivPTpScQm%2FlHXXsp5FXvayMhiL%2BOhqWMlQdg7cGZ3fVWcLWNftjNafHmYhbKPbWCrxa%2BHMBtOolKj1zM3kTd%2FX7yQDHTGDe1X4MqbX8tibbYaAs%2Bi%2BGEyFFvO3B%2FAEFaerjxpPIENvb5t9VC%2F1kJUNH5Jwl7ORqwPHPODJj3xfZ99v0G7JX5dgcrC6J8tQmPYEiRX8%2BPQbGXrFGBfvurFAx1T%2FiAAwBBbiKkO2%2FZUt5DKwGcluU7ejmC5njSXm0VssMUAlGN76NocSIFzMG3ij9l5%2BRvdvz7Lib7pNtFzAgnx6hGMgAu8i%2B9OALjQNl7D8NjX0oOLIiVaIkZQlMcWgHZVhHRelu26IgtFwpQCclJO0A5EQyieWD%2Be2vyNqKZ2%2BRhK1sooRufypZ9g9tYBx1dr5JAOmvCaM%2FWiqXrF%2FTGwk%2BW4PaQzJynVg9TydUj70ppoDFysaGOUg0wcOdSMUZxeyJ7nTu2ql8iPefFokmZo7sd4ApFUssfB%2BLV8TkUGqFyNvZRDYX8dTHgkBLQ9b4J2XH81BOcGMPei%2BsQGOqUBwezdfcDBtP6o4RrWFgRXoNTwEQxF2rMbiq6qV0%2FBZly4l%2FiUWrzC%2FjMIqRkUFP55uCaa%2BIIDDYyAYeSEN56%2Bd8eO1DURqLoLV7EeSZ%2B7XpRntVNIJ4lJlHnC73PQEgr%2FaUQiEzKiyUWSSKJf7YsdQPVDgmoOhgYPNX5dhezyYbMus%2FF6isbs9u96XtmgRRmi%2Bs95rxuC%2F19sYMW1%2BP2USwiC1%2Fl%2F&X-Amz-Signature=dfb5a9bf66edc038a18803a4242bc942a2b55daf84d031a2c40b23f69009caf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRDS7COV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIACMlB32u2OrRc0A8yZtfEJUvMwYn9%2F9ESuzMCZuhPrGAiEAk2heL7%2BW0M4b8F4enF2hmo7TZSHrJr0NAnEERDJOLBQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHK8MyisBcjo7Wa%2F7CrcA9HVTsRcyXsaSqlnNDpcOiSacOzavRuCgeLQq0t38vzloqvtL5UPg1cdenX%2BRWSnsmnoDHPr5rTKK4MR9ZIE8BabXWL3H5T6NK5KBTQATDfwtoDpsW5hzMVV0Z4R7xF%2BpTFasH5PC6ahGt0uiF612sPK9HJnQ7%2FkKiliwm7Fpx12fskStpPhOfht%2B7RMibDTPIQgkwh9909DU32MMahZh4qtYYUMsJgqje7ACw%2Bm4uyOrwfScdqnqM3vyUK4NhbKKZk1e9FHbdMcIsEFb0ebLrBVgOGjsnEAlgKZZpQZoRI4ViSZmqTXp66XCM0AqOu%2FtzdnnwJE8qXqvHHuX2hwstE8lj2Bz9DHtzxm0ntQZowvvHcVmbD6ogsgISAu%2F3XUSw%2Fi9p75A6wWoCVcHhHxgV87SC%2B47z%2BBuqSMH8g59s34DtnGTUwO2fNVrZ3qxiwnmq1G2euMEpndHU1Ke9WAgSt5AIxrJw%2BrOUIzbTFDXy8FMWWxWD3%2Bk06OIuCI%2BgSgeNdia2rzBiFplVTnmMTg5G7IokC17FvzdMvV8bV%2FXtk%2FdQVoa%2FUOyoqaNfAbabivDJg3%2B0SwF9vAk7uYvIIGCtSfCZxhM2izixUfACA%2F%2FvUm7jCIWF8TI5dPh10lMICj%2BsQGOqUBKRK%2F14YXiZxebGubfS5AG6MYOQPTBTyQFiR4s7MLhC3AwCoFOM3Ft3fcXfRzyL%2FBSBwz9WNTweA6qJ0qhjXVY10wK6%2FJXSD1SEu7vCJD9stAPDIO%2Fih54kVKynyxB2F0pFM205Rr41BKUeLggJpPmSUnGOhdUjK2jBzAJYwReHdE7A%2Flr6vRcP%2B%2BYj7N8hHlGsrObd6BOe4ZDccEUcMWaFNKlVbV&X-Amz-Signature=0763c473513777289d3add4f9a4e469b1ed1da3eb784a66c825d0b2db9c221bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
