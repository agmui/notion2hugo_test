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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665777J4G2%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T180954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtbt0Ac%2FWwaI1u1WkL5F%2FzH4ZkughWml140f1kkDpuWQIhAIA0UY31nnbY8h%2FOwAHtkovMokmiL0lqHz1408rsdyaCKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxtzx656VwFyeSI%2BNkq3AMmxFB88N6u%2FwYQfW7cfyW0HOAcHx2c1LZq%2B5K89FcyXQKyo4gGSeH3a%2BmORTpwlCEOVICFjb02rNFJYJoax1nmjZND6MQv5gDYYvidC%2BjkX0lpD1yDIOSrjNdYMuk%2FUzYN9ArdscnrNoE0Vmxv8OVyFBGBlSkhzUPLjfm90shmOWI9Z0COiJnYmwIGMspM2JkrdJApqpfwBuGkx5ycDdWl6LudWXcdCDK9HH3y%2Bm440pnZJyjC2%2F5YqehDDFWUspPs%2BBsEiSUmC6f0jTLwAOTqd9G3KhENMU7w3v54hzzOFvOu8T2QGnAAKOlB6x3glG9UuDwjRLQEusSBuw7vNhb%2Fdu2ikE%2BKHIG0BrPOY8esMbcguIbO3e4sF2PG9QSy5FLWOybjCqnnuwuyQdFY43Yho6tJ8UF3f%2BCkwkEmnUUkO%2FOiZw0DLJl9UvCBgCsImJNDDhK6tlB0J8eDEbkzN2XOZZA1snyp3aGCA4I6t7%2BoI5sGBpGjaf6YhwgIYx7tlEwe4hqHHupMygJ%2BkzWBtT9uL%2Fbvmoz4FA2XjV13ZSFrGJyl3arA%2F0oAiVlmc9tr6W1WDQHGg5oFDTRtvlZuSmejT%2BBykycnj8nETL%2BLr6iqnsPv6j85qtDtfNab0DDb8%2B68BjqkAV2%2Fj7qWVCabM6Kiceh41fF%2FH%2BTlKkR%2FdEd5RpdFVTaWk2bfoddW7n9d8VMlZAcV7uHG5jz7BLNUGTxASST1JhgTq69t3hsoLmZM86vmjZCUH%2B8I20iJtD9bOJULdmhKVjuf%2BCuq9t5rdAphdsRwbwuUZYEirQ160kcf8ebtKbju%2B5Y4D%2B7nzLLMkQpsrXYTSlA5520OFnsNgC24Ag9J%2FZI5%2Bs26&X-Amz-Signature=c3b76ffc82c820695ce7399c9f6ae6faebaa9a01763638fb002890219613a8e2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665777J4G2%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T180954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtbt0Ac%2FWwaI1u1WkL5F%2FzH4ZkughWml140f1kkDpuWQIhAIA0UY31nnbY8h%2FOwAHtkovMokmiL0lqHz1408rsdyaCKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxtzx656VwFyeSI%2BNkq3AMmxFB88N6u%2FwYQfW7cfyW0HOAcHx2c1LZq%2B5K89FcyXQKyo4gGSeH3a%2BmORTpwlCEOVICFjb02rNFJYJoax1nmjZND6MQv5gDYYvidC%2BjkX0lpD1yDIOSrjNdYMuk%2FUzYN9ArdscnrNoE0Vmxv8OVyFBGBlSkhzUPLjfm90shmOWI9Z0COiJnYmwIGMspM2JkrdJApqpfwBuGkx5ycDdWl6LudWXcdCDK9HH3y%2Bm440pnZJyjC2%2F5YqehDDFWUspPs%2BBsEiSUmC6f0jTLwAOTqd9G3KhENMU7w3v54hzzOFvOu8T2QGnAAKOlB6x3glG9UuDwjRLQEusSBuw7vNhb%2Fdu2ikE%2BKHIG0BrPOY8esMbcguIbO3e4sF2PG9QSy5FLWOybjCqnnuwuyQdFY43Yho6tJ8UF3f%2BCkwkEmnUUkO%2FOiZw0DLJl9UvCBgCsImJNDDhK6tlB0J8eDEbkzN2XOZZA1snyp3aGCA4I6t7%2BoI5sGBpGjaf6YhwgIYx7tlEwe4hqHHupMygJ%2BkzWBtT9uL%2Fbvmoz4FA2XjV13ZSFrGJyl3arA%2F0oAiVlmc9tr6W1WDQHGg5oFDTRtvlZuSmejT%2BBykycnj8nETL%2BLr6iqnsPv6j85qtDtfNab0DDb8%2B68BjqkAV2%2Fj7qWVCabM6Kiceh41fF%2FH%2BTlKkR%2FdEd5RpdFVTaWk2bfoddW7n9d8VMlZAcV7uHG5jz7BLNUGTxASST1JhgTq69t3hsoLmZM86vmjZCUH%2B8I20iJtD9bOJULdmhKVjuf%2BCuq9t5rdAphdsRwbwuUZYEirQ160kcf8ebtKbju%2B5Y4D%2B7nzLLMkQpsrXYTSlA5520OFnsNgC24Ag9J%2FZI5%2Bs26&X-Amz-Signature=79859783f8b5e1ee4df65dd138d7c3d8f59ecb0d14b19bbcf23f2d89cd32a639&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TYEPDBT%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T180958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID11tmwQLBg5KkV3epBgJY5WHMieQiythY66Nn%2BvUlnxAiEAyShKDFrVZPea02xThFa7uuWCaz8KNJJghcsZuJ6%2FHccqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRQqlV1eTZyYZQ%2FryrcA4oFA%2B%2BjxJF6RVStI5kcy2PTCn1W2gC%2B2sjK%2Bw06qkGmPObKqlTIYeovMJiQkSucRhaIUd3OtOTFTrJtggZ9Ja6XrMtzcbE12BaWXYJx628c%2BZJgDaCpxeS95MbTYKFxOO5wSOwg68k1wXRdKBWqv7R7cl%2BjFuj56pqiPaGVOnWsDMikarJm55I92m%2FlqtrSpMwMMXqxwo9ca9U2GVJCmJujzbUZYYwR4OFqofBztUHVVuDjs42lwDIc87ri3e%2BS024hia8w8BaJkMEOBzpc4XYfCuW0FLSRWsNIzCykq%2BAblaTAyrQlerWJa1%2BwQK04Hm6TwfY9%2FltQ0NCY3ScVUUs3kNCcukGRboflD1d%2FHZbLi5IESKauF9jKqPwWCvCc%2Fq8Hrm0fyRREs5G42aRC5J86X3n2KjG8et2G8Us0VVXu6oksRCXIcKTSoRISmNW%2BhDNvq3lQvsGwNWKC%2BlVbYWJUFhgsMaGA%2B1lSQS6INEU0CqH9sRw52eS7UlLv6eRQK1dR9A61pUyhKEMhgP3Ylb9ebN3yAragQAq5%2Fi4kUAf%2FqosgArmAsw4tFyr0VHFnq3m60ImwlhbHNBs%2F6xq2vNzcq4rb%2Blv6JpTqfMcHkJqBzGMdtNWxG9ZsA%2BzzMIT07rwGOqUBFUC440xh5l9XIWYC29OCsLI%2Fz7lyEkzJmVEAl48tBm6RV3QYRHnqXs2HxBg2C408Xqb2ekz1IjET%2FlJkYEOD6K3GmK%2BN4dcsCBzPg%2BdleQGKH8oVSjFI7judM7t5OR%2FwWiX5I%2FNrlE2CDvuroausaGpOqor8k9Xg0QEHCT2oyNr6pg6WvfPhw%2BSE35Hytg415r5h5USVlv6rGSnkI126PwDiwKQg&X-Amz-Signature=f1ccb04a085fafcfc03f1b236e8a400b7c7c78e5c014759d54ab984400b1215e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653AC6P6Z%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T180958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8U0hpfT5vxddr5DuNi%2FM6cAtgQ0ZIzDc7g0RkIIwBoAiEA%2BoeyXbcHWb2aOV6MenHFJGVUF9b5IUH%2F6%2Bfrn5bAyIgqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrQqz%2BPulyAwjj1MircA0L%2B0vsKv9tfbSqzINFf4kGzPjqXPlnxuHxqskCkMaOFgPQrxljhDV9n7bNI7AiZkj%2Fhioppceq1Qc%2FZWNtfAxAzvY4D6036FokdK33OxWQzK%2BYBdBWAfJlsbbownO7enoYbMVyjmG6ij3wMuB4v%2BBws%2FNrWsrz7v6g42n8eZ0jop8aVI21fb4dHgqm16pzyfexdU0bWY9AB%2Fq636aHq7ALUPHudZRJjUxmEZbDu%2Bq%2Flme7AvKTvqBcLzt882RhYOnEKKOnmKXBVC9jPHeBnniqbWid%2FjB6ADNzBxxhp%2B5VNtU5JmNcFl4dViFOHhZMIh%2BSQpVSfY%2FMVdIa12l7qsyFPN4qazORgO%2BWfMxjC9RdV5OiuUVK%2F5061JHD1YE6ytIcw0Iv3mn%2B2Oq7XAqBri4AshBNGZ6shzoEDiXasvy8bimhbcKmaoRYUJT7Xsq46G2ey3GcTq22Fzs0r4mXgcDsc2v3CsE280g6o5gOWwla0A71DwiU6vWSCMD7GuWOGGUm0iRjnxB89vXSbnbrOl5c53hiJi9Ej9%2BU5SVgNv7KZY4STISx%2Bj8dc6KFgtvc%2Bm9iW1HK4vQ7upOawEJZ9rnE9TpafzfHTcPT7ox%2F5zxR4klUL3emXttOACDL5MJb07rwGOqUBa9%2Bzs%2B%2BtfzZbw%2BQ4HDJlXNFF0WX%2B4NR7BFNyUFoDIAeo%2FBsukPmuP4ZUEDRgdUpxpkp%2FTS6TXeS1I3HdP5rVkizGfF%2FKloOWlw4icfARDuMMeDnF5paFhqfxGLaIdMtDU996MkQE1II1925rzQ%2B785UN7ROKKLQgUdcfzHvUOu%2Fy35W98RGddJHs2hhDYEmnNpBDckCoGt0BaCQvqLoO4%2FSkcCIm&X-Amz-Signature=7a773c7c92ef92be4543e00c372252e56241be2fe7042d511bf911f050153a5f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665777J4G2%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T180954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtbt0Ac%2FWwaI1u1WkL5F%2FzH4ZkughWml140f1kkDpuWQIhAIA0UY31nnbY8h%2FOwAHtkovMokmiL0lqHz1408rsdyaCKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxtzx656VwFyeSI%2BNkq3AMmxFB88N6u%2FwYQfW7cfyW0HOAcHx2c1LZq%2B5K89FcyXQKyo4gGSeH3a%2BmORTpwlCEOVICFjb02rNFJYJoax1nmjZND6MQv5gDYYvidC%2BjkX0lpD1yDIOSrjNdYMuk%2FUzYN9ArdscnrNoE0Vmxv8OVyFBGBlSkhzUPLjfm90shmOWI9Z0COiJnYmwIGMspM2JkrdJApqpfwBuGkx5ycDdWl6LudWXcdCDK9HH3y%2Bm440pnZJyjC2%2F5YqehDDFWUspPs%2BBsEiSUmC6f0jTLwAOTqd9G3KhENMU7w3v54hzzOFvOu8T2QGnAAKOlB6x3glG9UuDwjRLQEusSBuw7vNhb%2Fdu2ikE%2BKHIG0BrPOY8esMbcguIbO3e4sF2PG9QSy5FLWOybjCqnnuwuyQdFY43Yho6tJ8UF3f%2BCkwkEmnUUkO%2FOiZw0DLJl9UvCBgCsImJNDDhK6tlB0J8eDEbkzN2XOZZA1snyp3aGCA4I6t7%2BoI5sGBpGjaf6YhwgIYx7tlEwe4hqHHupMygJ%2BkzWBtT9uL%2Fbvmoz4FA2XjV13ZSFrGJyl3arA%2F0oAiVlmc9tr6W1WDQHGg5oFDTRtvlZuSmejT%2BBykycnj8nETL%2BLr6iqnsPv6j85qtDtfNab0DDb8%2B68BjqkAV2%2Fj7qWVCabM6Kiceh41fF%2FH%2BTlKkR%2FdEd5RpdFVTaWk2bfoddW7n9d8VMlZAcV7uHG5jz7BLNUGTxASST1JhgTq69t3hsoLmZM86vmjZCUH%2B8I20iJtD9bOJULdmhKVjuf%2BCuq9t5rdAphdsRwbwuUZYEirQ160kcf8ebtKbju%2B5Y4D%2B7nzLLMkQpsrXYTSlA5520OFnsNgC24Ag9J%2FZI5%2Bs26&X-Amz-Signature=731a584586bf3be7ebcebd108b871a50d314e53f1df08091379da7af1d011644&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
