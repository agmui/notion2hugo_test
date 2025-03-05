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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466342ZTF7B%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQUyY7uJP75HAb%2FT3AiPXGuFiIv0ZS%2FI%2Bxp5FawdKbPwIgZftsC6Zr3qD00tAq0VeREn2kTBgznVTJkOMnVpPQwpEq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDA3UHP2IG8qbuDrJuCrcAyDbpA5IyMo%2FR12PhmtpU98Ro38g9NRzBH5W6w7bZHJzd1bjoWlwzMWHtkS7JU2sSmQix8rQYNcTi2Uwe4rVegQaUE7LlfgDbhKKgrIMuIZ86wnGRVpAL64Qzp6%2BKlSPSKPuWE7uQX3gFQ8lLv2qw4DWYSCpqWVYaJWVtz1JJ11zidzOAyEAgLfTAzAnwSUT%2FiPw%2FUFMQ%2BKOlb9GcutAmwV0fra%2FUCZTESi6j%2F8a%2BBfAzNYMx5MXp9xkuOZ1ImYYBXz1j0JrtwQzEI5%2FcqFBuYSNZZUT1lczgdVizQWtvx2IVKtgmP5O6Z7KBVUnhxfJ1Q%2F4nLgdsoa6iAen8ABkoV79uPfBfOjXSu7WH6nrbII606p8Lgv5fipRJLnWJRjOci6rULecLwFaNNr8%2FIKqzjfSDmyvQWEh1EumtzmQd8s4qFLGgP9s5vHGQWstOlj2GrqT%2FEVkDQpkI33bI6f%2FM4YSLQUHpzViE2TpWP9299pWU1TxNLczHZLVv%2B07wbGHeRQOjq4dql0ifRP8kYw453O3KmPHw7GDqR6pyQm8GKSXAsA3MQJdRyxeceI6PUishrupymkTuLqPn78H7LMCrpbese2dnhTeE5juaF8i8Y4AyUiOjmDHlIvVcr4RMO2uoL4GOqUBNh27lEv9yUHtIfIVlbvB7%2F32U5iPo4eX4UYToSviFBRTiLWqCoFiwC9%2BBh%2FTNiUOSwm%2FDhXliuFR3p5xGEqzKYBRyVOwZVo362%2F7yPP38H57xFGMHVWVobVyC6V%2FCB3hWq%2B1Fd4OpaAI3HCAGujwzaq9ntojuKJ9V3HJB8Q3wNiIQFjzW%2BtWnxg5MoGMnfWYZJGZyvQM09XF%2FQ2UGJBTUVf8dkc4&X-Amz-Signature=eb03cab6b1e59604a102bbb43fdb5f7f073015333b2dedc6489b12eb23689c4d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466342ZTF7B%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQUyY7uJP75HAb%2FT3AiPXGuFiIv0ZS%2FI%2Bxp5FawdKbPwIgZftsC6Zr3qD00tAq0VeREn2kTBgznVTJkOMnVpPQwpEq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDA3UHP2IG8qbuDrJuCrcAyDbpA5IyMo%2FR12PhmtpU98Ro38g9NRzBH5W6w7bZHJzd1bjoWlwzMWHtkS7JU2sSmQix8rQYNcTi2Uwe4rVegQaUE7LlfgDbhKKgrIMuIZ86wnGRVpAL64Qzp6%2BKlSPSKPuWE7uQX3gFQ8lLv2qw4DWYSCpqWVYaJWVtz1JJ11zidzOAyEAgLfTAzAnwSUT%2FiPw%2FUFMQ%2BKOlb9GcutAmwV0fra%2FUCZTESi6j%2F8a%2BBfAzNYMx5MXp9xkuOZ1ImYYBXz1j0JrtwQzEI5%2FcqFBuYSNZZUT1lczgdVizQWtvx2IVKtgmP5O6Z7KBVUnhxfJ1Q%2F4nLgdsoa6iAen8ABkoV79uPfBfOjXSu7WH6nrbII606p8Lgv5fipRJLnWJRjOci6rULecLwFaNNr8%2FIKqzjfSDmyvQWEh1EumtzmQd8s4qFLGgP9s5vHGQWstOlj2GrqT%2FEVkDQpkI33bI6f%2FM4YSLQUHpzViE2TpWP9299pWU1TxNLczHZLVv%2B07wbGHeRQOjq4dql0ifRP8kYw453O3KmPHw7GDqR6pyQm8GKSXAsA3MQJdRyxeceI6PUishrupymkTuLqPn78H7LMCrpbese2dnhTeE5juaF8i8Y4AyUiOjmDHlIvVcr4RMO2uoL4GOqUBNh27lEv9yUHtIfIVlbvB7%2F32U5iPo4eX4UYToSviFBRTiLWqCoFiwC9%2BBh%2FTNiUOSwm%2FDhXliuFR3p5xGEqzKYBRyVOwZVo362%2F7yPP38H57xFGMHVWVobVyC6V%2FCB3hWq%2B1Fd4OpaAI3HCAGujwzaq9ntojuKJ9V3HJB8Q3wNiIQFjzW%2BtWnxg5MoGMnfWYZJGZyvQM09XF%2FQ2UGJBTUVf8dkc4&X-Amz-Signature=90deb0efa05a84d36d67ca29820887caf935d5ee8a0bd26745f317b09eb91026&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIAGT6T5%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAEBy1851iumSQ7PER9vczP4p1P2y%2BYRl5PPlfv9S%2F7HAiEAmxE3NIL%2F0iSKJ5H2ReenXdu%2BzPIm909WaBCnHswefwkq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDFM%2FQZt8imgbkluXMyrcA35KlRAvJLpf3iY5MS9cfCiY84wWfFq3bEv1Pu7UcuBGGQvf94TCOCrgg70IpIHpWkeW8Z5y6GEq3MK03sncijxUHZ6m%2FwoDEHZ5HezBRqbWGnfNhbuiObot2Lwoqs%2FzyfOlJXpU2cPLDVGspgIfQ%2Fv4lMGJvXurd5WRar5L5x%2Fnmh9ZxKdIsNN373pV6fRtKLkeQzbJR%2FcoGQx8qzF7u7KPx%2BuO8QXQNnsIqpqw548yq6N26Nlnr6QKSzC6eH2omTjAAhmk4iEtddvwslZ%2FuBtId7uK9WHpUQt%2B%2Ft7lwVL1TVJ4xZXMdBf4BwkK2r7kXxNsVVPn6b2sBJOeiTUMY5HWy0ue5gUpe%2BFjg7tozaXR2ok3UPijcv4F%2Fu%2Bvb%2BdjEhdlf%2FlQgAji0sfUHSFHjGXWLQhkQDWJrd7HQr%2FuLNO1OHnMXTbu0toeGmRwSMxV37wA0ibfmSzmaksDRcTaAEpOx4ggXgJwkJ4HFDd1kv6uxkxgG8qszP3nHGZ5IMMpJPU6UhDVUf6hBgrg62QhlGz53Ggq%2B8d7ngZGyLv%2BGjG%2B8kgQ5mIpf5DRwYpMIQBYzfuOuhqjgTxX47H6tz5yrVuHIZdzW2rRKOLIe9bUhBXaJO2Df8XmArY1HZ7lMJyvoL4GOqUBeDLO2b2bg1e5h3Ddi3CunTuBu8FaO0kyO6QdPsfoTG%2FaDw4eMpaacqoLoyEQurJooHtJjqXcPCunqPWfCV2kd1JyBGn3Ao%2FX1tQJ2UgNDJodZ6DDVBXRbS6OZdeQUh2lo0G8qi%2BbS%2FgZ3y2%2B1klHjjxRcyvmjquuJI6IK4JjBjtdTH9FPzRQcWvoC5iXny3sLWcCz3g31nAzIJW5ffyZc5MxXWiI&X-Amz-Signature=f479007340d5a3370887d47b8d0581bbb602d19f1c2aa44b138a14d1d5fa11f7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRSOYWJ5%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvp6q%2Bl6wdO%2FKBrIwbpC5a8gdpizLGPmSzCHIs3rNyEgIhAKSLNOtStq2EBXfZG0%2B8YknAId0DSYhYuC17pABwup0nKv8DCBIQABoMNjM3NDIzMTgzODA1IgwHCFw7QbbT9PqfT%2BUq3AO3qQV8zSrFPYsU%2Bx%2BLHWSL4Fy85LWgmUAh%2B6JWTimlChP9v%2BJMaumNt2g8cJWl9fKP9qxBWb%2BvWUf0APFnwBASxGqJU%2BctrtH97cuR5P1uMQbq1rRQ6AOj8nNj6ppdf%2FugJQpGEvdob3vi%2B4S%2FAZhFk4xycnt9K901aD4bu0o2oWQoQMp2oyeFhWWW609YbpVLZxkaVH%2B6EdFykZHIZj94841iaRs4ZNLyIS%2B%2F4kUGMbMeiDkRlGzvnt4TQZCLG0NIl1zLLojuBCAHd0mxJRbqf4jIjOntDat5GUfK%2B6SBnC2AWyStAwSD%2FkIZA%2FV%2FZscoC%2FHpzLku5zdsfgLV4ViAbQW49APovaA4UvAh2%2BSbK5CIPEk%2F90iBANwIKgIrKx6%2BODnxEBcvIXLu7ChetpaGZcp627KgALxhseqw2vGgfDzsAG90Fkb3lLX6xB%2FiDKVM3EDfgQdc3gEOvgd4eGl5lnsaH72zzwOXHlPxT90U70VTjNcL4CoqX9GjbCEihqKjcyR5iO6ZSuG2VoLjm6csSHniDzTs6%2BxiBUtdgzK0w3bXRp8qRFsl08j8ApuT96luU5aEayoWDsVKfOljmfOmGe1QsXyAFZQQmvxXC6VBIi%2BuxswjsU4oEB07BDDjrqC%2BBjqkAWhV1aw6%2B7GNd9A4xMmZQgeRXdBm52AlY53UYZZeT2N91gZ8GkgYpxmyiMd5%2Bo3uddyayGW2tnyOk85r7PH0mOivNIoEYTo7nup1o39f0%2FhKbdkNjtBoRovX7b6CvFyFczzuJ%2FyBAZXq6au8yHq79p6u6ODCSU%2Fl2X6b%2F2ZYhG4yTDnLQ5X%2B8yjNifT%2FRvobEfR4MKv90W%2BNFIyRWAXV%2BtVUDp5f&X-Amz-Signature=1d1c515817bd1d6be26348d09aabf51cdea998d8fd5a5947738eaed2a00f91a8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466342ZTF7B%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQUyY7uJP75HAb%2FT3AiPXGuFiIv0ZS%2FI%2Bxp5FawdKbPwIgZftsC6Zr3qD00tAq0VeREn2kTBgznVTJkOMnVpPQwpEq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDA3UHP2IG8qbuDrJuCrcAyDbpA5IyMo%2FR12PhmtpU98Ro38g9NRzBH5W6w7bZHJzd1bjoWlwzMWHtkS7JU2sSmQix8rQYNcTi2Uwe4rVegQaUE7LlfgDbhKKgrIMuIZ86wnGRVpAL64Qzp6%2BKlSPSKPuWE7uQX3gFQ8lLv2qw4DWYSCpqWVYaJWVtz1JJ11zidzOAyEAgLfTAzAnwSUT%2FiPw%2FUFMQ%2BKOlb9GcutAmwV0fra%2FUCZTESi6j%2F8a%2BBfAzNYMx5MXp9xkuOZ1ImYYBXz1j0JrtwQzEI5%2FcqFBuYSNZZUT1lczgdVizQWtvx2IVKtgmP5O6Z7KBVUnhxfJ1Q%2F4nLgdsoa6iAen8ABkoV79uPfBfOjXSu7WH6nrbII606p8Lgv5fipRJLnWJRjOci6rULecLwFaNNr8%2FIKqzjfSDmyvQWEh1EumtzmQd8s4qFLGgP9s5vHGQWstOlj2GrqT%2FEVkDQpkI33bI6f%2FM4YSLQUHpzViE2TpWP9299pWU1TxNLczHZLVv%2B07wbGHeRQOjq4dql0ifRP8kYw453O3KmPHw7GDqR6pyQm8GKSXAsA3MQJdRyxeceI6PUishrupymkTuLqPn78H7LMCrpbese2dnhTeE5juaF8i8Y4AyUiOjmDHlIvVcr4RMO2uoL4GOqUBNh27lEv9yUHtIfIVlbvB7%2F32U5iPo4eX4UYToSviFBRTiLWqCoFiwC9%2BBh%2FTNiUOSwm%2FDhXliuFR3p5xGEqzKYBRyVOwZVo362%2F7yPP38H57xFGMHVWVobVyC6V%2FCB3hWq%2B1Fd4OpaAI3HCAGujwzaq9ntojuKJ9V3HJB8Q3wNiIQFjzW%2BtWnxg5MoGMnfWYZJGZyvQM09XF%2FQ2UGJBTUVf8dkc4&X-Amz-Signature=84356ffe5196b7cbbd87553b4caba20ec213fd97ea9ecb4c67978330524120a1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
