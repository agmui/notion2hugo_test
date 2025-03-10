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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSMGP22L%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T070804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDN3cpPgldhq63E4z1dnvQNBSp%2FdBFZ7px9BllcRf4zvgIgc8n1ulAct%2BfSR%2BejD7bBD7Kt3nr%2BgBXseQguQRZ8R9sqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOICFYxVX4YOypc3CCrcA7fUJsc0J6pSMxKacTMSwGByOlTMmw7QiCr84gTiAUeKtS3XRPQ8Q8Du1PtNQXWuAjrDVwCT0sIAkOEt0aGv6RH%2BqC54h5Z%2BS1UWTYsN6q1GERYhCxXAtIalfySB2iUJf0c%2BT4%2BfMWvsIYe%2BgeTBML3n1huqixj3jTJpl%2F0oYLcCDKhIyCbQJ0um1SBVSv08uk5qv28ZkyuD6vjLwLASeHg5pProuyAS7knVGwatOHIl6iiCvtfpioC6lKLfBec4gOtA4fiQ4isXlvmuYVmD68o%2Fn58LrpAOr9mWzcdrDJq8Cdio8uZNKbpJYLsKrFdXgjnvAUQUyQvyxbfFHyI28AONjEtyfD9jxRPYWCFfhXy3p8WYdU3FGTNbprhaEQRPeQJqhzn1d9267GjxhvZ66I78mP3qrFGa67s9uB0J5uzFF2pM8pAV5w6HlTkVxzU5l4A9E1SKenDt8PZbnQ9XemSj985IqE3H0tSv6HO1GhH3wjwk5aa87S%2F2qnWIyLm4NT%2F8E%2BrQY5LqbTZv2L2AQaZeF6S4YjHeyMH6FtNqj%2FxyUTV6NpSt%2FSZXK%2FkcW4FtuDxbThrSL0Ke6rtUEDJBJNUyEpth8nONsUoF0btRtauUP5DPVDvXwTI7qLhwMPiJur4GOqUBoFZ0oHjViDrUsHCjS6af6y2XDbYwO%2Bnxmm6cy4oFSLeEbJ6xzKeU248VdV8pieiHxnUdsxfwdWgMV4W3JelGksFpx7yMHeXB2TI6eQkrsHSjUF%2BwZS3IVDArlVYQ36ZeRCdgVnGNLe5ytvTGIa8uJz5c6dKbZyE8Z7x2bzHKQ8aYwtoE3EtAoBpLTapFTS5%2FNPiWF0onKz63jTr344AS8gWK%2Bsea&X-Amz-Signature=7d8e6787eb5b34d28510032089c64155203a7ae4947d96321e8ead5d242a9cff&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSMGP22L%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T070804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDN3cpPgldhq63E4z1dnvQNBSp%2FdBFZ7px9BllcRf4zvgIgc8n1ulAct%2BfSR%2BejD7bBD7Kt3nr%2BgBXseQguQRZ8R9sqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOICFYxVX4YOypc3CCrcA7fUJsc0J6pSMxKacTMSwGByOlTMmw7QiCr84gTiAUeKtS3XRPQ8Q8Du1PtNQXWuAjrDVwCT0sIAkOEt0aGv6RH%2BqC54h5Z%2BS1UWTYsN6q1GERYhCxXAtIalfySB2iUJf0c%2BT4%2BfMWvsIYe%2BgeTBML3n1huqixj3jTJpl%2F0oYLcCDKhIyCbQJ0um1SBVSv08uk5qv28ZkyuD6vjLwLASeHg5pProuyAS7knVGwatOHIl6iiCvtfpioC6lKLfBec4gOtA4fiQ4isXlvmuYVmD68o%2Fn58LrpAOr9mWzcdrDJq8Cdio8uZNKbpJYLsKrFdXgjnvAUQUyQvyxbfFHyI28AONjEtyfD9jxRPYWCFfhXy3p8WYdU3FGTNbprhaEQRPeQJqhzn1d9267GjxhvZ66I78mP3qrFGa67s9uB0J5uzFF2pM8pAV5w6HlTkVxzU5l4A9E1SKenDt8PZbnQ9XemSj985IqE3H0tSv6HO1GhH3wjwk5aa87S%2F2qnWIyLm4NT%2F8E%2BrQY5LqbTZv2L2AQaZeF6S4YjHeyMH6FtNqj%2FxyUTV6NpSt%2FSZXK%2FkcW4FtuDxbThrSL0Ke6rtUEDJBJNUyEpth8nONsUoF0btRtauUP5DPVDvXwTI7qLhwMPiJur4GOqUBoFZ0oHjViDrUsHCjS6af6y2XDbYwO%2Bnxmm6cy4oFSLeEbJ6xzKeU248VdV8pieiHxnUdsxfwdWgMV4W3JelGksFpx7yMHeXB2TI6eQkrsHSjUF%2BwZS3IVDArlVYQ36ZeRCdgVnGNLe5ytvTGIa8uJz5c6dKbZyE8Z7x2bzHKQ8aYwtoE3EtAoBpLTapFTS5%2FNPiWF0onKz63jTr344AS8gWK%2Bsea&X-Amz-Signature=68519a98db3486d2362820268b99d010f1e835f5d4b9df1224ba445bb6820181&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FU4HPLT%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T070808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIElJPWh%2Bu79sm2g%2Bcd6%2FkF0Sb841EdeUtvw%2FrUDDDp%2FFAiAF4MH4yfapUUC%2BGG4UHejw%2FgS0%2FoZjfHwa8PsozbuifSqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCNgr7aDtwD0V64fPKtwDLIaGAFCAQHGuh8yRHsIVUE9UgOvX3UoyWtMH%2FB2TmyyR6b1zY82DK1pd5YZ5vXXP%2BwguMF0qvLyArpA8RGKBKkjfH3SEf4r2m%2FGg3rVd8AS5ziUqP9fTujNgjYuLSZxZig%2Fyx%2Bl%2BVVBfVkkkD2UokRHNqEIEiEFnBBJKxACrtFuxS28tZeMGYqao1AX8EFGKLHEZhHgT1q54GYj5s1foR1FI5%2Bgt681LvP09gGnOPekBgIJ3cZUrJwoJMAfk091GMie2vj3N%2FNslDj8uFxhzIl%2FqO%2BQkinfi6gDskU7M0OghJJbiHKAl%2F4HNWwZSLXcbOChWn%2F7wc7dleMRBAccMmXcTQBlMdUU0ZeFBWvAYwHIiABbj8jIZKyVX8sLc%2BTscOCqgBbXQCm02TYhxK3Asao1%2BG2VNreripph5szOx2CqPSA2aQUqZph7XkfJhXcJ13XAd0puTCpSIXfENhjWKN780ML3I5dx5dllY5lAHyYWqlcLUb1D8bAlZ0jxdJJUmiHE7rTw5RVovbsAIlpPaQOZH5GyYalC%2F0nQSwvzawkt0KGZ7C1u5FBj3Mbb6mDUJeuCjDf%2FzhYaFH%2FoOyBZZyHu0qxGfb7ms1Fug5mPGtMdXHc7Y%2FissOZ%2Bb8Pkw4om6vgY6pgHdBvPQMJ2BmOdBHpUSQPym71vXfZbQrilkXt7PSAdgrJEC2i4NqzRB12JYmdX3Gkf%2Bs62wI%2FGS1qvS6DbRMyla5fAaET4vJe7A3V9%2FsN%2FRNe1RCEUtvfPImaSZL1hrsjsWBQfVPEnmqPIvsImf72QMOB4wzbuR0CN8m6qwhRwjC7%2BXiNfuG91j7LLGkX81r4idf%2FNEUVRIf%2B3tQUA4Kh0nTugtXzXy&X-Amz-Signature=a21d562491a01888f58bbf46f384be8eec9a7627ee6dba87e2542c1aec14d594&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QGKEB7T%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T070809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIHZUH71TxBmiqxbZh2KBpCOBF%2FvU%2BTT7KbmxryWQH%2BD7AiApqCWKkJdRlfWNqJWL%2FGbsHgvjIjLzOcp47VWMTj%2FSCiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBc1NROjxGEb%2FD8WOKtwDgWd31H9YKIFQPboR7qz8nVCax1Uh3yQSgAUgYcweosk2DmfT5cgDYgkt4TLqcO7UiIx2Ju7i3QcYGTBUm8kKyICvroqPFeZ%2FvULqemH1AHtrhhoW29cCWagxy%2B28jOtbnwgyV4qKBka75TFi51oS3Lxfel0To9dbWGEepuzahEYKwqyaZRRoXm8Pi2SId%2FVJxkV7ljiKULp4c6Xb9mrNUy2WKDS0LI5HyAGK4gG%2FgWxOLNQhzQGhklIJ55277EbTQK5w%2B%2FX1aJFufXPn9h1suTO3mCHX%2F2%2B%2B3ZbeoEUpJASy6uAwQfJ4BrKUx6Fo%2FjmN8UY2fvmnL74A9qDqDd%2BQuyBpKiC9wRG8BOoi1V7AUKyZyQGRuzx0S%2BVTYimtUgZscZGPbo2ZSFOtTsy1ipUlhKIcKpQBO0PuJYaL5LQnLLpk8jvbiRzDYWyB4zeYZLj66udx6B%2FE5SNb1wbXce%2BbZOeTjhcRDbBkwwvyMze1T7yY9kMfE%2Fhfp%2F4TiTDW2Brp6N5m3t9LtcNEY9m6TMG%2B2S6Iqn%2Fbb6SolrU2bgvNoAUqrOC5Gkoc1Jjcc6%2BVuSOMCsEyJ3CSGR79q0o%2BVxnJbRRQbnWB%2BHnNWRdPPIZRrdHlzHMESMZX4v%2FJingwqom6vgY6pgH8141FPXjg%2BKHHEpRwxNvFspZ%2ByYJ2GszIJsDKs4Qdzo19T3R6T1OmDLGEDng8psgtEyBT%2FuWC6vCMwzGOx3vwDybnPBj%2F6NYyxBI7rNVQYyRtJxFUAoCphKmrxft%2BgShNKSDYOfqZIZJtwHQz4C9aCGb2%2FDD7Sfc9bg29Eaik0D%2BZXtMH32bAtdo%2FuxUn80jl%2Fv9NP13uv6uP9SznZNqIi4C254IQ&X-Amz-Signature=34b80cef1795f8ce93d4075c5946f837a4371af55e9c7b68323b89a946f3f292&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSMGP22L%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T070804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDN3cpPgldhq63E4z1dnvQNBSp%2FdBFZ7px9BllcRf4zvgIgc8n1ulAct%2BfSR%2BejD7bBD7Kt3nr%2BgBXseQguQRZ8R9sqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOICFYxVX4YOypc3CCrcA7fUJsc0J6pSMxKacTMSwGByOlTMmw7QiCr84gTiAUeKtS3XRPQ8Q8Du1PtNQXWuAjrDVwCT0sIAkOEt0aGv6RH%2BqC54h5Z%2BS1UWTYsN6q1GERYhCxXAtIalfySB2iUJf0c%2BT4%2BfMWvsIYe%2BgeTBML3n1huqixj3jTJpl%2F0oYLcCDKhIyCbQJ0um1SBVSv08uk5qv28ZkyuD6vjLwLASeHg5pProuyAS7knVGwatOHIl6iiCvtfpioC6lKLfBec4gOtA4fiQ4isXlvmuYVmD68o%2Fn58LrpAOr9mWzcdrDJq8Cdio8uZNKbpJYLsKrFdXgjnvAUQUyQvyxbfFHyI28AONjEtyfD9jxRPYWCFfhXy3p8WYdU3FGTNbprhaEQRPeQJqhzn1d9267GjxhvZ66I78mP3qrFGa67s9uB0J5uzFF2pM8pAV5w6HlTkVxzU5l4A9E1SKenDt8PZbnQ9XemSj985IqE3H0tSv6HO1GhH3wjwk5aa87S%2F2qnWIyLm4NT%2F8E%2BrQY5LqbTZv2L2AQaZeF6S4YjHeyMH6FtNqj%2FxyUTV6NpSt%2FSZXK%2FkcW4FtuDxbThrSL0Ke6rtUEDJBJNUyEpth8nONsUoF0btRtauUP5DPVDvXwTI7qLhwMPiJur4GOqUBoFZ0oHjViDrUsHCjS6af6y2XDbYwO%2Bnxmm6cy4oFSLeEbJ6xzKeU248VdV8pieiHxnUdsxfwdWgMV4W3JelGksFpx7yMHeXB2TI6eQkrsHSjUF%2BwZS3IVDArlVYQ36ZeRCdgVnGNLe5ytvTGIa8uJz5c6dKbZyE8Z7x2bzHKQ8aYwtoE3EtAoBpLTapFTS5%2FNPiWF0onKz63jTr344AS8gWK%2Bsea&X-Amz-Signature=1747c29f515d74f351e62260e1e3cfb692b1f0f3c4408594fe08283335d7217f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
