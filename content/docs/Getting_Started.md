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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AJULBHB%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T140818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBg24gmlC1CV82DJiQof2%2FvlV2PT4mO7265JswDMlS%2BLAiEA3pBcMGRbgigd5ItxBB9KURrQQrSrefF5MulbMqR7qkIqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAOlQ6scdTjSZP%2BtircAxc0WUPNm3OM9BJpqYI75xB4TzPH4EYSjB2lrEl047jNVcufn2P6oV8%2BqS6CXhvAoTqgQL5oIXAYTmA%2BvwoPSqDHS0LxhFBqHe76TAPwY5wsIWMda6qEMbMtxNUxzWFM%2F7QuGMtyBC60c8zHM3l8QZNmttGCeua58U4PUtNM9I%2BfNY0F1qa0oXavds8PeROuT34PVbO%2B%2Fu2pr7GkJvFRVb3nIanKeyTcBs%2FJNLlYOfciYloJgmSeMdsvsP8Ai0yvi9vWrXs1TnT5gO%2BfSUjKug%2FaoHj%2F8%2FhOYmiBej8zZGtlNSIUpEDvozmL%2FHz9H9l3uaDbLmNgZOxNNNJmsHvwaGsyLSZLMlON1Sfc2%2B0DugbVSDgIIpQWuK7HH%2FzSsiBqPcnLcoEB%2FiJgHh3p%2FLy2CA02T9gwQSI14d7C5AZqDLX4ZetyF4AN1PwqxJvremiCTqqwCQeVVVBbUv9j2q9TLjChC3mcAfZ6%2FAj29K2nG0ii4VtgLWEodnbY5mtHFH325KQXeF898QniBAHzImKTboaqJ6uEFBsXxZB%2B%2BG%2BKWWa9o8HmvGHsgeulaU3Pkh2c%2F2IuVkzoZXFnIik8GKkE0LXmOZ1wX9C8BfzXZMMPDzqgHzu4aOC0qdF2%2ByOnMIaI%2BMAGOqUBHWrOy%2F2aKSO5z5sRUb29tdVJT9F9EqpXywy4ly42GnJ%2FLfv%2B%2BRE4PuNaZiVtzMVjsmPngjf7%2FuE7zWdUVlCDzigXqzU4BR1a6k5Dm5zBqCRBstXQFcHdV7VAg0TZcT%2BeG%2FyJz81xT7P%2BcTRM7KCHJqG3KjxIDpuRGX37x4B%2FumbNUZnJvDYLMkuJkKrzpwQSMlmK8Y%2FdYHe9Kl9y1AME7duyrSYQ&X-Amz-Signature=8960d518a1499b0a4554f0e691997602b5ab3259a91efa0a76b2958f42042378&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AJULBHB%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T140818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBg24gmlC1CV82DJiQof2%2FvlV2PT4mO7265JswDMlS%2BLAiEA3pBcMGRbgigd5ItxBB9KURrQQrSrefF5MulbMqR7qkIqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAOlQ6scdTjSZP%2BtircAxc0WUPNm3OM9BJpqYI75xB4TzPH4EYSjB2lrEl047jNVcufn2P6oV8%2BqS6CXhvAoTqgQL5oIXAYTmA%2BvwoPSqDHS0LxhFBqHe76TAPwY5wsIWMda6qEMbMtxNUxzWFM%2F7QuGMtyBC60c8zHM3l8QZNmttGCeua58U4PUtNM9I%2BfNY0F1qa0oXavds8PeROuT34PVbO%2B%2Fu2pr7GkJvFRVb3nIanKeyTcBs%2FJNLlYOfciYloJgmSeMdsvsP8Ai0yvi9vWrXs1TnT5gO%2BfSUjKug%2FaoHj%2F8%2FhOYmiBej8zZGtlNSIUpEDvozmL%2FHz9H9l3uaDbLmNgZOxNNNJmsHvwaGsyLSZLMlON1Sfc2%2B0DugbVSDgIIpQWuK7HH%2FzSsiBqPcnLcoEB%2FiJgHh3p%2FLy2CA02T9gwQSI14d7C5AZqDLX4ZetyF4AN1PwqxJvremiCTqqwCQeVVVBbUv9j2q9TLjChC3mcAfZ6%2FAj29K2nG0ii4VtgLWEodnbY5mtHFH325KQXeF898QniBAHzImKTboaqJ6uEFBsXxZB%2B%2BG%2BKWWa9o8HmvGHsgeulaU3Pkh2c%2F2IuVkzoZXFnIik8GKkE0LXmOZ1wX9C8BfzXZMMPDzqgHzu4aOC0qdF2%2ByOnMIaI%2BMAGOqUBHWrOy%2F2aKSO5z5sRUb29tdVJT9F9EqpXywy4ly42GnJ%2FLfv%2B%2BRE4PuNaZiVtzMVjsmPngjf7%2FuE7zWdUVlCDzigXqzU4BR1a6k5Dm5zBqCRBstXQFcHdV7VAg0TZcT%2BeG%2FyJz81xT7P%2BcTRM7KCHJqG3KjxIDpuRGX37x4B%2FumbNUZnJvDYLMkuJkKrzpwQSMlmK8Y%2FdYHe9Kl9y1AME7duyrSYQ&X-Amz-Signature=ada98e8262444331813d0b5ae156142d52abb87b0ecd2cf142286d893d034931&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AJULBHB%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T140818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBg24gmlC1CV82DJiQof2%2FvlV2PT4mO7265JswDMlS%2BLAiEA3pBcMGRbgigd5ItxBB9KURrQQrSrefF5MulbMqR7qkIqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAOlQ6scdTjSZP%2BtircAxc0WUPNm3OM9BJpqYI75xB4TzPH4EYSjB2lrEl047jNVcufn2P6oV8%2BqS6CXhvAoTqgQL5oIXAYTmA%2BvwoPSqDHS0LxhFBqHe76TAPwY5wsIWMda6qEMbMtxNUxzWFM%2F7QuGMtyBC60c8zHM3l8QZNmttGCeua58U4PUtNM9I%2BfNY0F1qa0oXavds8PeROuT34PVbO%2B%2Fu2pr7GkJvFRVb3nIanKeyTcBs%2FJNLlYOfciYloJgmSeMdsvsP8Ai0yvi9vWrXs1TnT5gO%2BfSUjKug%2FaoHj%2F8%2FhOYmiBej8zZGtlNSIUpEDvozmL%2FHz9H9l3uaDbLmNgZOxNNNJmsHvwaGsyLSZLMlON1Sfc2%2B0DugbVSDgIIpQWuK7HH%2FzSsiBqPcnLcoEB%2FiJgHh3p%2FLy2CA02T9gwQSI14d7C5AZqDLX4ZetyF4AN1PwqxJvremiCTqqwCQeVVVBbUv9j2q9TLjChC3mcAfZ6%2FAj29K2nG0ii4VtgLWEodnbY5mtHFH325KQXeF898QniBAHzImKTboaqJ6uEFBsXxZB%2B%2BG%2BKWWa9o8HmvGHsgeulaU3Pkh2c%2F2IuVkzoZXFnIik8GKkE0LXmOZ1wX9C8BfzXZMMPDzqgHzu4aOC0qdF2%2ByOnMIaI%2BMAGOqUBHWrOy%2F2aKSO5z5sRUb29tdVJT9F9EqpXywy4ly42GnJ%2FLfv%2B%2BRE4PuNaZiVtzMVjsmPngjf7%2FuE7zWdUVlCDzigXqzU4BR1a6k5Dm5zBqCRBstXQFcHdV7VAg0TZcT%2BeG%2FyJz81xT7P%2BcTRM7KCHJqG3KjxIDpuRGX37x4B%2FumbNUZnJvDYLMkuJkKrzpwQSMlmK8Y%2FdYHe9Kl9y1AME7duyrSYQ&X-Amz-Signature=14ee7bd7c0c3be3feef4d67956652fe2cc60da12161d6017cc6cd5b82025abe6&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNZL35EX%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T140820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5805N6nh6%2BAKmJZZ44aOX3NV9RHTKkTwCdq1yCffrkgIhAJJ5RRXg9x8NYd6ntTPvrDASTRSZYrY8xEqXp%2FXuOwgGKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCINRL5lDayJUdSz8q3ANEOrQ56C8kPkrhO6ZeRaUzi5mLLh89PjccmI1yS5YuZZXozJxI6YD1BGZXcnteKdqO5b1P9lp2dKx9bW1sUpH1nsRri0AIEg5Lv2acfQmUbz%2Fs3U9OR5D5GsRT%2B%2BILdVRB%2FI%2F8CnQOgCbv7oKKXcIIBAMJArquhzOeL1gyPSuM%2Bms0rTDghbj422Bnh0%2FtW1Czg0GKfRZkGwUocKJnT3fZGcWIyM0BySdr3NMLbvQuTTnLXkyy7p7eRVwlBGg2qoVPhdvOZq1DoCt%2Fk8%2B1ACh3n9vE4N6sM94mUfwP7n3yhXsDtSoCOIf2nwEzgLHakLhcj2lUdrZfOW%2FRSA1%2BerY4fLLNAjXK%2B8mEj4FJnlK%2BymPxRBz4kAV%2B64eJ6Bc76yhSg7khaBOB09J6ZBKA5sSCiTy9YzMltru8ccSvdheV0tm9GRsWj0%2BICNTPUX1drF3ut%2FALaK%2FoK2nPe%2BdB3IKJ284rfhXTMd3%2FI47t%2BCKOyZSlVV92fceAbTpm8gPRNUzV6bEcg0bmacBfoiXpQwkvHmR39kcLAdPF4aPD3a63WKmwRW8ckzqlrT6AnLoWwUqEEQPhHadaBbm3R7Q7eaT1hd1cOFVmi8JkkOCyWb3YUvjO5Jls4k6Z3goWvjCwiPjABjqkAbJAO%2B9xj2tEFZeSVj5y5Q8dcqS6RAytht85WZEDx1kozaUUxpYbrRqMdeSu%2BKW4KiUsQKll50g8biQs32pWF9qX%2F92HL%2FFdFx5yg%2BggsoAaoaR5rWyf2qGUd4OywJ3qJ9M%2FDmD5UhG3kE5tWoz0%2BE7aOOYSiSl%2FcVqqkXE8nFzmuERLZakyWb1s%2FG5upy6ofPhbidcjrR2ZT6%2F4Ad%2BRI91JpBYT&X-Amz-Signature=21d234b5a369a844f4e39fbd9ca7d92a8d8dbc2d373da2170309c689ab4f77be&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZHLE6J6%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T140821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzMqJwRf5UnOYnleSnj2uKlM3YFDL%2F451GI45NFElK7AiBUfHYM1%2F%2B6GBxTVGuXlwl5ZzBHfWLSELtFD2KXz8Z6yyqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsPvN%2BejMNUN3bYzdKtwD4jB%2F8Qz4I9IvXYB1miqW1aO1h9q5GooezYVDoNUo8S63AvBKImTX%2BYFJnWEoYwcsRqzbkVgVe4%2FVXjj%2Ft4bSjqEWDHqa8lzESqevYagpU%2BAUAyAEuqMR989lXdbcdDijfK0xWQcPra%2FiHFeSMZ4echdT2Arg0%2BWB8bi%2Fe7N9DEyZA4W0av1b11SqDfb73ojqO6p23xurYuT77gZSm5W9K23qpFZ41u6chyBfHCHg70ZDROUdeGi3WvVLRabnDcwwvvkPtIiR%2BKETONNDASYcgjD7CW2mV%2FdVNITiXi6TCOa4yIx7S85Bcvygqgj%2F7qe%2F0ybFFAfCWzZcKzUOljNqybb5IU7XdMZfj%2Ba95yuABsI1Cz3OwF%2FCM8qNcqVmv6Z4PYE72FEIAtJBb2rzysTz6KctQqPfmFuYh5vlEyHl5jwetgpBruDbzZcuJcPHEUjh6HOHFhDD3Gb3TdBFKjfTGWNLO8F%2B5J7e8uVxeOd121B8i4C%2BU8vMsx%2FPX%2B1gGSq6IX%2Ftdn3NJfW3BM3cbiejK0DrF%2FMkl%2FwxySIqZ5VeflOlp37OcgBbD%2FTcG%2F7%2B6CCHb7mxR8EudAGCVBQbnAe7wcaaCHw1TpLLm%2BkY6FlmMVpE7bKpZozpEkye5MEwyYf4wAY6pgFs0wB%2F6J0dFbrFZBGqwTj4xvE3Cp8bwoH4UZT%2FFI%2Bl5aW9bnoawWiedQUm4M3Ki53o9XmnNXQCtwfoaCmlAiwh0lS4bZSv9wzVhhq4p1qZN9cqMoQbNdqoEGH0V2adXdnbbS1eI0aR3qHidLQurrcNQRR%2BuC9WyBuaYRX7J8JRGPbbwUeMnJ%2BC0rd5OeKw2Lb0q9HuyMfLtqNFsMBruiWyjf3T7%2FBe&X-Amz-Signature=22acbfc9b1695cf29e3cc4d88248ee875e97f207a1529d6d8db39c5af857a285&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AJULBHB%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T140818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBg24gmlC1CV82DJiQof2%2FvlV2PT4mO7265JswDMlS%2BLAiEA3pBcMGRbgigd5ItxBB9KURrQQrSrefF5MulbMqR7qkIqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAOlQ6scdTjSZP%2BtircAxc0WUPNm3OM9BJpqYI75xB4TzPH4EYSjB2lrEl047jNVcufn2P6oV8%2BqS6CXhvAoTqgQL5oIXAYTmA%2BvwoPSqDHS0LxhFBqHe76TAPwY5wsIWMda6qEMbMtxNUxzWFM%2F7QuGMtyBC60c8zHM3l8QZNmttGCeua58U4PUtNM9I%2BfNY0F1qa0oXavds8PeROuT34PVbO%2B%2Fu2pr7GkJvFRVb3nIanKeyTcBs%2FJNLlYOfciYloJgmSeMdsvsP8Ai0yvi9vWrXs1TnT5gO%2BfSUjKug%2FaoHj%2F8%2FhOYmiBej8zZGtlNSIUpEDvozmL%2FHz9H9l3uaDbLmNgZOxNNNJmsHvwaGsyLSZLMlON1Sfc2%2B0DugbVSDgIIpQWuK7HH%2FzSsiBqPcnLcoEB%2FiJgHh3p%2FLy2CA02T9gwQSI14d7C5AZqDLX4ZetyF4AN1PwqxJvremiCTqqwCQeVVVBbUv9j2q9TLjChC3mcAfZ6%2FAj29K2nG0ii4VtgLWEodnbY5mtHFH325KQXeF898QniBAHzImKTboaqJ6uEFBsXxZB%2B%2BG%2BKWWa9o8HmvGHsgeulaU3Pkh2c%2F2IuVkzoZXFnIik8GKkE0LXmOZ1wX9C8BfzXZMMPDzqgHzu4aOC0qdF2%2ByOnMIaI%2BMAGOqUBHWrOy%2F2aKSO5z5sRUb29tdVJT9F9EqpXywy4ly42GnJ%2FLfv%2B%2BRE4PuNaZiVtzMVjsmPngjf7%2FuE7zWdUVlCDzigXqzU4BR1a6k5Dm5zBqCRBstXQFcHdV7VAg0TZcT%2BeG%2FyJz81xT7P%2BcTRM7KCHJqG3KjxIDpuRGX37x4B%2FumbNUZnJvDYLMkuJkKrzpwQSMlmK8Y%2FdYHe9Kl9y1AME7duyrSYQ&X-Amz-Signature=16dab9c1bb4f8273edd8eef83df573223d9328c789c050b0b20b7292812f17dd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
