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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFIBNOZ6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T131643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIHFWHa0edvxZFTBlmBxrJsRoNhXIDYP80ooDS0egnW%2FDAiB0trYm2%2FzSjWQPMsv4xbta5DZhq6Ry32fhYOi%2BmNmtair%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM71XQN6tSgEH2oczSKtwDP%2Fz%2Fs1ZVfcpEUger3DSQeQknx6AuBZ3wxSFrC8p08HpWIwn8Cf2FLPKkfFNjbhfDi66sjTU8dqSqqkQW6WaWQyvnmmenOgawwpQLd2usuDr4RI1UHJp0sA8csMsWlis7%2BMYPgxITMwfYU53sjHk22rGWwbQ90kNoGzju%2Fl1HBhY%2FsG9EqpfyoYmNP5plGOA7ix4Z454sN4Mobfv6s%2BmniRGZExtliGvcf9xY29H9gEaMGErTU4LyFOz44HLXhlFoi9xTasn0hLf1%2BbvMAiTtqai7O9Ez4w4g%2FOnfz1D8HarKQaWGL2tI22jlF0K2iPUvvyF%2BFNl5yPWGMhDx%2F%2BxN%2F%2FOYRhlSBR5TpkcNlYWFl9%2BOwQ97fJpKqhZ3ML3pvLkbRDDkY%2BWFwyeyJUdi8xH198VhJHfY%2BTZSyvxG%2BPNCuCgIrDimkRwYNhQcSx9HPBnH3SCKxrBc5XUWlyLucGG5C1ZLPcTKgfezMR4U0hY9Kd9HATxeX4YM%2BBMjcYiw8IqtffGkKLfJIM8nQ1OZH5aUIrfzDZAiXs81SWJ851XKPkVwAKM%2F1A6ij%2FlicDAAEo2t14QDbl3Zqx4hKnJ8TVd2wcNeZ6Yl99w54B3kwT1y0b2T3cRDAs6XZ8Nfft8wzIj8vQY6pgETOHD2YK%2FKDfE5UOOTtvhiQ4Inozra5J1cUs9mMJ%2FXvJAIDgsvLtAOq1kx55uApnfSut5PIp%2FykqqXqb1AUIt51%2BJpbQWJVUgSPhiPsF4XkDjbOhgfNx7xwLS16AfTT5f5NUIzaaImGQARO1CzFmA3vQNF1%2F8ysvc0bXjj4lS3Qn%2BcHW51uHN00LoQ04tleLnuV0cmrSt%2Fz8WQxoT%2F9PLjaO3Q%2FMW6&X-Amz-Signature=dc9bb089f270b23b61f3c2adf503250e6fefdc71d8ac55b27753c97b404bdc35&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFIBNOZ6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T131643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIHFWHa0edvxZFTBlmBxrJsRoNhXIDYP80ooDS0egnW%2FDAiB0trYm2%2FzSjWQPMsv4xbta5DZhq6Ry32fhYOi%2BmNmtair%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM71XQN6tSgEH2oczSKtwDP%2Fz%2Fs1ZVfcpEUger3DSQeQknx6AuBZ3wxSFrC8p08HpWIwn8Cf2FLPKkfFNjbhfDi66sjTU8dqSqqkQW6WaWQyvnmmenOgawwpQLd2usuDr4RI1UHJp0sA8csMsWlis7%2BMYPgxITMwfYU53sjHk22rGWwbQ90kNoGzju%2Fl1HBhY%2FsG9EqpfyoYmNP5plGOA7ix4Z454sN4Mobfv6s%2BmniRGZExtliGvcf9xY29H9gEaMGErTU4LyFOz44HLXhlFoi9xTasn0hLf1%2BbvMAiTtqai7O9Ez4w4g%2FOnfz1D8HarKQaWGL2tI22jlF0K2iPUvvyF%2BFNl5yPWGMhDx%2F%2BxN%2F%2FOYRhlSBR5TpkcNlYWFl9%2BOwQ97fJpKqhZ3ML3pvLkbRDDkY%2BWFwyeyJUdi8xH198VhJHfY%2BTZSyvxG%2BPNCuCgIrDimkRwYNhQcSx9HPBnH3SCKxrBc5XUWlyLucGG5C1ZLPcTKgfezMR4U0hY9Kd9HATxeX4YM%2BBMjcYiw8IqtffGkKLfJIM8nQ1OZH5aUIrfzDZAiXs81SWJ851XKPkVwAKM%2F1A6ij%2FlicDAAEo2t14QDbl3Zqx4hKnJ8TVd2wcNeZ6Yl99w54B3kwT1y0b2T3cRDAs6XZ8Nfft8wzIj8vQY6pgETOHD2YK%2FKDfE5UOOTtvhiQ4Inozra5J1cUs9mMJ%2FXvJAIDgsvLtAOq1kx55uApnfSut5PIp%2FykqqXqb1AUIt51%2BJpbQWJVUgSPhiPsF4XkDjbOhgfNx7xwLS16AfTT5f5NUIzaaImGQARO1CzFmA3vQNF1%2F8ysvc0bXjj4lS3Qn%2BcHW51uHN00LoQ04tleLnuV0cmrSt%2Fz8WQxoT%2F9PLjaO3Q%2FMW6&X-Amz-Signature=d8b5c210096da94f784d10c152f6d1aad629e75c226fd93c3f3e169c5fb811ad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHWURMP7%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T131646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIGduVOrxA8eOuKxkyCLlDVP0YIdUfnqqpeR%2FLix%2Bjv8%2BAiBMm2OUEfelyqvNPCl%2FLgfYpgG0%2BDKpTJe9swaThP0yTCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMJ7KLzOndANYzJl25KtwDfFKpgtQa3ZuXMy21bZE6CdZx9o2rpK3xmiE%2FjKDiuHs44bbY9%2FbnOUVA0%2BVX0Hfv0J%2BQGqZ5VTXoCUGbGvzJZtMVrSMzVUVSfUHBRGPFvVdqD08%2FI9sAYiCCBLJskPxnIKaCADqlZzjL6Ctar4XgK7f1QMB%2F5oAavNRPsdxaYE7YlkXF%2B0E8h8taN4OxbMlZrVKrvwgx%2BnCppogS5pOVDUMnqv5%2BdzJXncdzNtdf6vjFiDy6et1%2BsknL0gj0IqRPrgIvw4ywmvjtfv37YEKz%2F3blLTCqoSmGNEkMyvtiOMQtkOJ4XDV0tYH7%2BTCpxxoeJz0dARjVkqWDx8VaPR78d1sTg7RJWeu4IZALgNI9Gis9OL0QuSMT3iFkIZ2rBfg%2Fy3rCQ6NuztZkLshOteh09oiHxbrPuC3zzYFHvUyiFDGgN5XPhmWHiTXVAcEN%2Fpd%2FBqSlD2rlZ8ap2R5zZwsjl7HvdV8nsYbcMqxvB6O8n9dIO5eUaPEDJ5w47Fgn8gw9pAL9v611KWoGoOpmfORjTzr3aY3txioH3bWYnasGvZViC%2FTnRVppL58nMhjLkYgsE1SqJ%2BzF7Kxt7KodZnGsB1039f%2F%2FdhG2AELDzOb4z3PTKGfeSGuvVD3pW%2FcwwIj8vQY6pgHhUY8ijA8EXUVUNmnsuht05HgKCM1SH1iZ1Xw3Zb5bYJUFrZNhPUYHpaobQmYMzuBQAUg6txYnkxR0FVZ2gS5uHT4%2FGWgj5S%2BeAC7dpP4CByB8DD6udv4d66ooblFqJ2BxXxvtLBBvGLsK4bdnSvYTe6qzq6tSZer%2F4WLoY915%2Bmz6ovYSZZmSdrQIyiAbYuWonNk%2BUWi0tHFCrN2NvlLDq87AwZ0h&X-Amz-Signature=782bc24bc4e892cb32ef1c10d41d1ad972603ce0e1a8bbd58d0df96aeba05aa0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5EF4RPD%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T131646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIB%2Bl5N1jEsDXAFkjE5k0iho1WY43HRTvm6lhJmyNcCfKAiEAk3sU%2BL36BVeezr4OyOibZ8bp8o9KR1aa6TC0zGGJY18q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOn9q4ROiIiDXiGlfircAwhyK%2F6NQbo6ZxBXos0xDaCRU%2BsNHX6F1wQlxgHrYyCsGPMzobV7obItZh5HvOSTeqZrYz4OVtp8w8Wx6fBH6ZMDTWThrKD3h1gv0C59xeGnGobAAAG2CmLjiNJmyeDysQc72GuxCexDxIxb866G%2FUmg4qLoa3DAfUQJk9thVxDM1tgfl3pvqC6hbe0v3XFWvOaBH2vXkoWMvI3XdkF8vzjBwQs23UGPhHru7fFI%2BwXuPDPhknZY7gXbzgPKP0B0fW5vqfjRrY9xGhPw5NBoU0ee8FIM3Dw945S48pC6iXrUFxAf6D2V%2FzJp5xX6iDsCSkA3aoyM8AyVuWHr%2FEOGUJqMXZtYwxyWVtYTapwpCCVIRgMrXIqWGuVGxqYVTxeewuAkS%2FihwdpoEX3YNqU0aSfdWNtuHAC6BI0bEJTiTbRMfNuYrAkSOk2QS1%2BCr4rG2G87xLSgPyuJ5WBu5rq2M5bOVoVKy0428EOmb4leysdibtQPG8hGUAHr8x8sayYfe%2B4BMu6emV%2FC6Hnpdnh9FwdCHJ0kOvSSiLYiELh5CppH%2Fj%2BM%2B3v7zG7TVlD2bo2Su4jHf5kqFvKNmNIg1gQhA4c%2B%2B3GRqXj980Cg82%2B0jeSOTsAbRYoqpfImAxRxMPeH%2FL0GOqUB7yLD97M9gOnRiPp%2FUnCzF1IlEJCtIyNNxZchVZrsCbtGUwTPae5FRLJL9kuIFIJrlSOTVcHz%2F%2Fs6NZ2R6NIZuttRPEIj%2BOjobQZJwYHoH4fFkgExsBHystWs4xVN5uSLJ1eKZgc5gwyiIBVXRxTo%2BtwylFSGf%2BpmvlPJNBUUjdWpwrD%2FDZJ9u9F5unzlSK2QQnLn8l0gSKuh3kDbrCM4L5Br6xS8&X-Amz-Signature=2cc25c3b3363ad2a17cbef07a4bcae8136c2cd10c63a74f2c86c7d884e704a82&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFIBNOZ6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T131643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIHFWHa0edvxZFTBlmBxrJsRoNhXIDYP80ooDS0egnW%2FDAiB0trYm2%2FzSjWQPMsv4xbta5DZhq6Ry32fhYOi%2BmNmtair%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM71XQN6tSgEH2oczSKtwDP%2Fz%2Fs1ZVfcpEUger3DSQeQknx6AuBZ3wxSFrC8p08HpWIwn8Cf2FLPKkfFNjbhfDi66sjTU8dqSqqkQW6WaWQyvnmmenOgawwpQLd2usuDr4RI1UHJp0sA8csMsWlis7%2BMYPgxITMwfYU53sjHk22rGWwbQ90kNoGzju%2Fl1HBhY%2FsG9EqpfyoYmNP5plGOA7ix4Z454sN4Mobfv6s%2BmniRGZExtliGvcf9xY29H9gEaMGErTU4LyFOz44HLXhlFoi9xTasn0hLf1%2BbvMAiTtqai7O9Ez4w4g%2FOnfz1D8HarKQaWGL2tI22jlF0K2iPUvvyF%2BFNl5yPWGMhDx%2F%2BxN%2F%2FOYRhlSBR5TpkcNlYWFl9%2BOwQ97fJpKqhZ3ML3pvLkbRDDkY%2BWFwyeyJUdi8xH198VhJHfY%2BTZSyvxG%2BPNCuCgIrDimkRwYNhQcSx9HPBnH3SCKxrBc5XUWlyLucGG5C1ZLPcTKgfezMR4U0hY9Kd9HATxeX4YM%2BBMjcYiw8IqtffGkKLfJIM8nQ1OZH5aUIrfzDZAiXs81SWJ851XKPkVwAKM%2F1A6ij%2FlicDAAEo2t14QDbl3Zqx4hKnJ8TVd2wcNeZ6Yl99w54B3kwT1y0b2T3cRDAs6XZ8Nfft8wzIj8vQY6pgETOHD2YK%2FKDfE5UOOTtvhiQ4Inozra5J1cUs9mMJ%2FXvJAIDgsvLtAOq1kx55uApnfSut5PIp%2FykqqXqb1AUIt51%2BJpbQWJVUgSPhiPsF4XkDjbOhgfNx7xwLS16AfTT5f5NUIzaaImGQARO1CzFmA3vQNF1%2F8ysvc0bXjj4lS3Qn%2BcHW51uHN00LoQ04tleLnuV0cmrSt%2Fz8WQxoT%2F9PLjaO3Q%2FMW6&X-Amz-Signature=716315b9d651bcb6011337e203697f90b9cc30c1e57d724b4a40388a1ac49855&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
