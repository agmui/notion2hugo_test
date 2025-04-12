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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIM6BB4S%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T090748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIEhRSYfEiJc0ncn0qC%2BjubsEIucajGrrD0sbqecRFZzKAiAgpn9LFQfejIpQDQgKD6cJzWpx7YzgZkWhQLGChUSMTiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf%2Fl3Fbwb9plQ91q9KtwDZv0aVnEn7zk3MnvOcDgHy8GyKo3zgQnJ3Y1ZuvZVt9JYI7PlQyb4MsLkbgFy6q0EWb9TZgd1J%2Bx%2FEtn3%2FYmH3W6%2B5BsnNZIxTJfTNdsE4F7%2BgbIKusmCQXkO%2Fy3fOCPBosxEV%2FG%2FDAyNjfe%2FgF%2BYGTWR36IzMz4u1tG3%2FxzSXMzu3VXHkduX2BiNM6TiB8BPqWFbTynLKkvhy0nV02dfdLOR8C9ykno%2B%2FkboxYoiQMlofFUaEJBopuXfvMfn%2B1fQVE1J6ADkGYZnZ9FEclFGsW78LU1t5upENIRJwDA%2FUIySRFg2BuGePGoBp0EuJagDbSLcBybr4nvUq87vMFhRY0HggQmolhxlrsVbRE1z%2FOS3WV0Oc2TMxIl%2B9zrQx9bUK91D4TNAAOqlSJYyCSMu5BdzMOnj%2BwlcDeRimg8bq4gl8qDAXBjZBCq0B4kMWC6DreG7Rcmzj6%2Bsc7uOh0wprKSaPdP5dgS2Rf5aWItw6a4dr7wzzAxgxJuEO0g28YWf3aqDbJs%2B%2FxtWnIxqNSmNLxy9dzJ8Cfu4MjKPTc18nvCyfXJH6tU87k57duXkFBi6ktdQc1h2hQ45Z1t53OkzheySW%2FKchAy98sRlbn1pBurHe3ShbtjINzVYS8AwnKfovwY6pgF4TulUHx%2FD4v3gFcbzPMEcC50a%2BkvHn5H3Bm0LslGX4eUNOLiGSEKl4mhFnrKccu8zfquVmhXvP4qJSK7ktIM6dXlGDe3eEDNe5tvWvD0PRaaIMJY2CEehqKx6t6LoOdm0kiLprAQvsZmmNvwK%2B%2B2nUi6%2BQW%2F4MyL7S7wrnBlDp69wQg5qZ5J7rS8BVvcVkuvRmZn7WjqG5jc0H%2F6s1nXHuYlJlH1E&X-Amz-Signature=ed6c98babfa9b1c21dde5bd70a411a9aa20a6d887dd1b650740f4a15274e9222&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIM6BB4S%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T090748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIEhRSYfEiJc0ncn0qC%2BjubsEIucajGrrD0sbqecRFZzKAiAgpn9LFQfejIpQDQgKD6cJzWpx7YzgZkWhQLGChUSMTiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf%2Fl3Fbwb9plQ91q9KtwDZv0aVnEn7zk3MnvOcDgHy8GyKo3zgQnJ3Y1ZuvZVt9JYI7PlQyb4MsLkbgFy6q0EWb9TZgd1J%2Bx%2FEtn3%2FYmH3W6%2B5BsnNZIxTJfTNdsE4F7%2BgbIKusmCQXkO%2Fy3fOCPBosxEV%2FG%2FDAyNjfe%2FgF%2BYGTWR36IzMz4u1tG3%2FxzSXMzu3VXHkduX2BiNM6TiB8BPqWFbTynLKkvhy0nV02dfdLOR8C9ykno%2B%2FkboxYoiQMlofFUaEJBopuXfvMfn%2B1fQVE1J6ADkGYZnZ9FEclFGsW78LU1t5upENIRJwDA%2FUIySRFg2BuGePGoBp0EuJagDbSLcBybr4nvUq87vMFhRY0HggQmolhxlrsVbRE1z%2FOS3WV0Oc2TMxIl%2B9zrQx9bUK91D4TNAAOqlSJYyCSMu5BdzMOnj%2BwlcDeRimg8bq4gl8qDAXBjZBCq0B4kMWC6DreG7Rcmzj6%2Bsc7uOh0wprKSaPdP5dgS2Rf5aWItw6a4dr7wzzAxgxJuEO0g28YWf3aqDbJs%2B%2FxtWnIxqNSmNLxy9dzJ8Cfu4MjKPTc18nvCyfXJH6tU87k57duXkFBi6ktdQc1h2hQ45Z1t53OkzheySW%2FKchAy98sRlbn1pBurHe3ShbtjINzVYS8AwnKfovwY6pgF4TulUHx%2FD4v3gFcbzPMEcC50a%2BkvHn5H3Bm0LslGX4eUNOLiGSEKl4mhFnrKccu8zfquVmhXvP4qJSK7ktIM6dXlGDe3eEDNe5tvWvD0PRaaIMJY2CEehqKx6t6LoOdm0kiLprAQvsZmmNvwK%2B%2B2nUi6%2BQW%2F4MyL7S7wrnBlDp69wQg5qZ5J7rS8BVvcVkuvRmZn7WjqG5jc0H%2F6s1nXHuYlJlH1E&X-Amz-Signature=8a71dfee439caeadaa1548f7b13a70b7791163fbbb8d66a1d570bc23da5abe9d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UYMMXOK%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T090751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCY2ENjl32VJugQ4Bxb8tz63Fi48kjyyhMMZ16SUET%2FXQIhAPRj7RkiU8tJJOhC9bp26qxMrHIviINASN%2FZV58dDQ49KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHW1ZXMFICbtMj%2BG4q3APUwtlCZZw1rQUXiV2wpylwloJYB%2BIbL9%2BQoGkx2wer1SQv2ZV0fo5PCO9PTmtDY8zJVyOX8oTQwp%2FWAATrtFI4wmfdSN4UyBU5xR2TwRBDLfjbpOnbNJq2TqgN5cTyCwjGr3mVKDC10Ow8mkK6hs4OP4RPY8eVvjX0QsaAmuQXxC2VWR70zTW3ltEdo8d7YS2uBI%2BvIwkFcqm%2FJOb0bbuCwmfmOZaOipiUWBNBDBvITj3A9Fc73lvXYT9yAqvFtBtcJu7OZzsVhFmNSF4dfuKStss0AiUGfEzFdx0fPFxEdWu7W9bTQ3mJQcQgIR8Mg%2BaYobmCraWKdikDME0ykwK3w8%2BsUpHlwPxYLes67t3NB1I8URUoYlgOFbsAe%2BVjhwfAFwgodQu5hgks02ZfdMPr8tPYvv3up04xrk8twDrgSnFsIIG3PHPiH116tiTqBbexNWjPC2Bpsf2y%2FG0oqQUTU1jW8uhaNoWjXsT6xEx4LL53yKo3YeCuwIGCmiGIpPsd95GrD0lP4uyEbPfJEi%2BN5RIqFjMviu6RVgKj5V7xf8XluOaow1ZJ1%2BTEUak%2Fdly0lU3qhtTnq1lL0E%2Fa03vvcZbvN5J6nTEAhvEl8F7et9U1UVf%2FNb0mw%2FfGlzCGp%2Bi%2FBjqkAby8DJnnN0GqthuFbKf3xwIu8WwVjRePuVXXKfXPI0ZctTju3N%2FznBSMWmQfIBAYoo5xQmJZ3oDNxG9BgB%2BavBET4W8Xp4yJoNPKBSYqHsl2D1Z%2BKzYDvTdhkOb3T7yyqc0oQQ7oUgpOzn742RDg%2BeRZXvMq6fClI6sCsJS1HoULvwIVLIXz%2BIyNwmZsfGJ9DXFPJGDDNqNWkiK1CNkYkInUdL1f&X-Amz-Signature=cba398cdc69e88eaf82f29766edc59fb3662e4fd2ad8b0f761282a209d6a2800&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5B6WBGF%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T090753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIA3Z7t%2Bmu8jHADaI7QPDoInOGobZx%2FApzQdwPfwcs6qHAiEAgauDBZHCsOjvz7wzuPjc1LtvvM5fWfjwg2m9uG%2Fj3%2B8qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPtbMLXXLJsb52Cx%2FSrcA3XqBCFaRFG5t3aIjOsORRVU7izYCqormo5%2B0R%2BHvYmowWd1DADhnRNBS6ic5fKFhTL4iskKsBrDaAAktXpgMxk7QzJ%2B96nTsu01Q%2FyaewTBk3BYh3sgkkQlDMnth%2FSZVomI89IJZNs%2BKUhSXJj7A9MKCHAEj6zUILlUY%2B2Pt38GnJD%2BjoZq8V9qzpzs4tyKKMV2SIudoMJ3xCUm%2ByZ35%2BMRYXRLCgopxoMuNX6gTlrJwqcw10bUjLoP7yEVq56nSadyOXAmIIwMeApbVWGlrp1RL18eSk%2FUuZBwW3ynwu%2BkXaRt%2BOMoZFOIur6X%2FELHZXghG3Bg8TGF6AzZKTLnp64%2FFtkjK3Gi5uHSuQZvQNSMwDlMVsSRO17E5lMwQjBMmH2DCn7%2F5ClOEQZLUmuORJ1UlUZwwGiliqnVv3rTzJDd5i76EOB4CGVppEsgrD1jVEAymdcrM43l%2Fw%2B48L1QfY1mTntE8HtWmwJbjMlnPoeYehFgG46PS1Dp5rI7bUyXBSB2R%2B0yFgig8RZo%2Fvh81dW%2Bt8Z9Z9mfzBZWOd15gldSVY%2F%2FYmrpSnyZMakGjpGLQ59kwX9%2BaOktss2Pg3ch3gXh1XF7TEmkCzCBPKrhUWOgHA1eKxMKUiKsHun2MICn6L8GOqUBUr1jDe7rrANh2OBCpkjwtnoO%2BW5FRcAu9u877E1oMw%2BwXDj2NJgCEPMHgD0ezj8ON3%2BKZPKLMXFgOCEsb9GbIfqBxI8%2B4nkosxqaMGNhqbBa3hT5kLbCSAzi5l%2FKy%2FkNZ21KdxaShGKidFRosaoTAHP5HriQvf061fXggqenaT6UKIsRQ752ycvM8G%2B40Gw5dVji%2BPOFyafAwy8wA7owQ8Hlg5Yg&X-Amz-Signature=9d0c202acca18633148a2d8bd3f82d5fa570dc7887cbbbfe6433c179f9d1084f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIM6BB4S%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T090748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIEhRSYfEiJc0ncn0qC%2BjubsEIucajGrrD0sbqecRFZzKAiAgpn9LFQfejIpQDQgKD6cJzWpx7YzgZkWhQLGChUSMTiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf%2Fl3Fbwb9plQ91q9KtwDZv0aVnEn7zk3MnvOcDgHy8GyKo3zgQnJ3Y1ZuvZVt9JYI7PlQyb4MsLkbgFy6q0EWb9TZgd1J%2Bx%2FEtn3%2FYmH3W6%2B5BsnNZIxTJfTNdsE4F7%2BgbIKusmCQXkO%2Fy3fOCPBosxEV%2FG%2FDAyNjfe%2FgF%2BYGTWR36IzMz4u1tG3%2FxzSXMzu3VXHkduX2BiNM6TiB8BPqWFbTynLKkvhy0nV02dfdLOR8C9ykno%2B%2FkboxYoiQMlofFUaEJBopuXfvMfn%2B1fQVE1J6ADkGYZnZ9FEclFGsW78LU1t5upENIRJwDA%2FUIySRFg2BuGePGoBp0EuJagDbSLcBybr4nvUq87vMFhRY0HggQmolhxlrsVbRE1z%2FOS3WV0Oc2TMxIl%2B9zrQx9bUK91D4TNAAOqlSJYyCSMu5BdzMOnj%2BwlcDeRimg8bq4gl8qDAXBjZBCq0B4kMWC6DreG7Rcmzj6%2Bsc7uOh0wprKSaPdP5dgS2Rf5aWItw6a4dr7wzzAxgxJuEO0g28YWf3aqDbJs%2B%2FxtWnIxqNSmNLxy9dzJ8Cfu4MjKPTc18nvCyfXJH6tU87k57duXkFBi6ktdQc1h2hQ45Z1t53OkzheySW%2FKchAy98sRlbn1pBurHe3ShbtjINzVYS8AwnKfovwY6pgF4TulUHx%2FD4v3gFcbzPMEcC50a%2BkvHn5H3Bm0LslGX4eUNOLiGSEKl4mhFnrKccu8zfquVmhXvP4qJSK7ktIM6dXlGDe3eEDNe5tvWvD0PRaaIMJY2CEehqKx6t6LoOdm0kiLprAQvsZmmNvwK%2B%2B2nUi6%2BQW%2F4MyL7S7wrnBlDp69wQg5qZ5J7rS8BVvcVkuvRmZn7WjqG5jc0H%2F6s1nXHuYlJlH1E&X-Amz-Signature=f2a9675298e3412a1debefded821598e2262e17736aada9e21972e1f2e9cc91c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
