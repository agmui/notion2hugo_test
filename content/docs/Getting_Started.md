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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGCPBBSV%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdelEI6E46Hxag5oXFi5QBI7kYO7d94gbXsg74bLA6YAiEAlk2HWXrMTuw74QJNQisz%2F51%2B29Y8XR5QF%2FHdv9ekjLAqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI25aBUWf8ayFObjEircA2YOmTo4BJLvIz7JY6y%2BgT8%2FoDOzWoAatbBTFX%2FIw41Ciz3fqtryS3IYnJW6qLYpC%2FGwSYXJ3q9hgnO2y%2F4%2FeA16qjtW9hx9QAm%2FdeIsUzG5GhobZVWDeM21qtpEeQh9%2F5cTbwn%2BayE853CJX98WZuw%2F8jTxBdsJ8AFMM6l2bYBhiGKexL3YsGRpKdoEMG9de1OOSYsQ%2BgXht4PPKpAFxWDCmH9Y0fwLjVx40hFHUn8Y5%2FRF%2BI9XlSY%2FQaeSigzzAZTkxsC03FTXHa0h%2FsgU%2FfPlUEEsNlNxoHMD4U7EmvS93E06CgTrek0vsAYPaiWO36edcetY0v%2BNscMSCEes3FHksRu9WMlAiM9aFQG2hLxfirlf1CFe5ugs4fAMINY8vir1wQtYaUyL2qaVaOmT4RFNrilGWB43ca5qQL80lpLH%2FwxfrQTiuX4qh9t5JXmZkwS8tgjF8coiolJjVfoATfzA5aJeeKGZOhFVYa5NF8zZrpdIXgyVwi%2BKuzsbX27thf2vSwlV%2BZV1EYeQHeC6kTe35Sy2zep1DrOkA%2FV5VYVfZE%2F7leLQrQRInFSOl1ot4v%2B57llKUpbvlwtnKrr2sjmK54rU7s33ZwYVbxUsxVeUbVL%2FgpICCzkn6QoyMLSEvL8GOqUBQSa2fpoKcpL9sy0Vi3OwfUF%2FxpsKMVvgPtAiW2sVcdfgdRREwJVeJWLBA9l3me31PRaha7AQuyenyk4hnU9I4CqEyjc%2F2XECf%2F8kyTjl9yVEV8uUnGowAdpSWuGYg4X34KzZ0omavFVXDsA9jZWVRo0v1UHtEr0UmRCmYnxkMKTavLqOH9czp%2BAwZ%2BzdNDpT5pHN0uzYwSHOPBn78fK8JtLU7zH7&X-Amz-Signature=9b2bd281f25a5b1eb617fdfae775674306ec159957b998db2986084ccb751fee&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGCPBBSV%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdelEI6E46Hxag5oXFi5QBI7kYO7d94gbXsg74bLA6YAiEAlk2HWXrMTuw74QJNQisz%2F51%2B29Y8XR5QF%2FHdv9ekjLAqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI25aBUWf8ayFObjEircA2YOmTo4BJLvIz7JY6y%2BgT8%2FoDOzWoAatbBTFX%2FIw41Ciz3fqtryS3IYnJW6qLYpC%2FGwSYXJ3q9hgnO2y%2F4%2FeA16qjtW9hx9QAm%2FdeIsUzG5GhobZVWDeM21qtpEeQh9%2F5cTbwn%2BayE853CJX98WZuw%2F8jTxBdsJ8AFMM6l2bYBhiGKexL3YsGRpKdoEMG9de1OOSYsQ%2BgXht4PPKpAFxWDCmH9Y0fwLjVx40hFHUn8Y5%2FRF%2BI9XlSY%2FQaeSigzzAZTkxsC03FTXHa0h%2FsgU%2FfPlUEEsNlNxoHMD4U7EmvS93E06CgTrek0vsAYPaiWO36edcetY0v%2BNscMSCEes3FHksRu9WMlAiM9aFQG2hLxfirlf1CFe5ugs4fAMINY8vir1wQtYaUyL2qaVaOmT4RFNrilGWB43ca5qQL80lpLH%2FwxfrQTiuX4qh9t5JXmZkwS8tgjF8coiolJjVfoATfzA5aJeeKGZOhFVYa5NF8zZrpdIXgyVwi%2BKuzsbX27thf2vSwlV%2BZV1EYeQHeC6kTe35Sy2zep1DrOkA%2FV5VYVfZE%2F7leLQrQRInFSOl1ot4v%2B57llKUpbvlwtnKrr2sjmK54rU7s33ZwYVbxUsxVeUbVL%2FgpICCzkn6QoyMLSEvL8GOqUBQSa2fpoKcpL9sy0Vi3OwfUF%2FxpsKMVvgPtAiW2sVcdfgdRREwJVeJWLBA9l3me31PRaha7AQuyenyk4hnU9I4CqEyjc%2F2XECf%2F8kyTjl9yVEV8uUnGowAdpSWuGYg4X34KzZ0omavFVXDsA9jZWVRo0v1UHtEr0UmRCmYnxkMKTavLqOH9czp%2BAwZ%2BzdNDpT5pHN0uzYwSHOPBn78fK8JtLU7zH7&X-Amz-Signature=dad635c51a788fec166f27fe48737ccc7212d5a82bdacda3a9a6545bfb66f7e8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOSEDMF7%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T220714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkJGIybJQKRZANo6ybGPSZJdp%2FqNZErgRnSQhWbBEtJAiEAk%2F14c5GSxu4TRtTgN4JFC5TD1KtlDGa0h8JkArEL6VcqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG200Gn84jdcYlglwircAy%2BpHmJxpIw3602OY%2F3nDSBNYI5Ch%2FRgXnQCtRW%2BBei8kt9NF3IvzhOcwmaon53sQUp7ijQFAs4f5vDl34BB3VRVZ4Mn335johfGNIU10%2FEKGR9kRYbHmbvRurdMh83W%2Bg5luwI8Gs%2Buv7D%2FOIwprKqEueUtga6K2pi7e2TsbY0pBt%2BgQJf9nJUsyRwmVKL6rWroiRSY29ktjvnhIOpI5jhkH5fJXv1haOVnjq9KcIi6hrBOLCfDNbh2vV0u%2FpvEtaXHB1PJAXzqE3VQGHzN1%2BFJWs5emzhD882FlCd0uQcoD26bmO9LybmbEbfhGtrUgX4ujwi60o%2B5CUKwInTnlnhCuIJSodyjdmf238LaHMSGdVUQkuhm2k98ZQj9LZVCL5%2FhHNbnNZJxeT9lxjtx8fj62Fkd8WEKjIekTUDWUCJcQyucIFazi%2FFnvqyHDsPCdSZ1ofwm%2BjWZ7Jzj9%2BOk9rnvpCMm2UkvrJFxs%2FzQA0Xy9uLyrrYj0jHVKzjKpLa3Qb3utK3Jqs%2Fiut9poT1iawwUT05%2B7LaiVGnOXeg6Kr%2BHHKm%2FQtXDSOhbwdPQ10g%2FZdm3de9gua%2FVihGStGLZKaCs%2FihO7D31ZW0fbEXVIxAcm0aW3LdqBQgauDXQMLKFvL8GOqUBPl8LoxZEjZ3qD8r7lfpjnzi8WlqJwP9RL5g3FNZZvCccTaYMHrYYMeTZNv%2FhghnXs1RX6KQOJb9A2O%2FMvUdJqNnqyEGFCbN7D6rz00q7QdfqaYDniLuTu6EGa9DjpqE7K2k8%2FfUuOt51dHcC5nPY0Z8U0uPoYY5LU%2BTpYAHtI1tXJgAWv76HGhF7KxzTeqsTUMG%2BKdfLyHs0mCY7UjWza%2Bb9OOxF&X-Amz-Signature=3bdaac1c6acfef09434eb7b2ac09f94cac7106ef97877a4f53ce531f4f35035a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662NBASOF%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T220714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEku0xF1HjMKXi6K4sL2Idzb%2BfOxnLDdyP3LgMZAPjXSAiAvmIQwCeCMU07wi5sUHj96JYMbtVyUo20y1lvex07AbCqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmI677Q1KFrZksVhrKtwD%2BxqeNi2RzkONITkA2Rv4AMG1AjBJMoa1uMey7j4Nd%2FHvUzS8rWR7BMBYJlgHE1Lh0K1X7ZwJwTu2sLkMUbVWvp0BAhA%2BKdcg9pPrJNMequGvD5j41iIbW1wHXVluL88cjVvmhSgnaI04ZeLvwtyLqIj6WIVVfRA27XYCEFQNh0tGafPFQZy92RL6sYwl4mTs1Z8Btzwaz5hUfb6s5q8s%2BDALXdlsYqtYe0Cpn0AhHWufQkiLV5f%2F7AOZFHPGpaZ6Y9Z3kqHaLzikazCKsiW48G4koSpImfWeSyjjv4Sh1mtuveP2EWooBJxqSo1efv9jcvj%2FGJLPkpEL%2FuaR2xsO7sj%2FWuuUQKdmI05VqRVy4AAeGCkWdVPK34%2BJhcFi0dekRVwgAbkLEgnvYDm5sM6ypbt8xYFonCRQwrztWT29EH%2BAKipsnvH5ilyKWP%2FaY4mwqEFCM2rrO9%2FlLzUn9oFM4A8vYceWDWzrl5k0WAH1PUXfmHry%2BDP4NdJdFMfj%2F5YTTLzlawDmqa6qTCe%2BpOb17KloVw8s1h1g4q%2F88WyewUEvq969WNwcEjRxtb60d2VGVrPv2PJXgUvKSg%2BWNXaBAmuaRrYSnDNil3rSuDQx8kJUN9x2i8YZFys0Sb4wroS8vwY6pgGxL6LW%2B7yVjbm46N2E3%2Boirak2dnoqntvrQUm9nezCRxfdKHv56qgDFP1thD8gVjMhiJdsVxq56AwYe1r6%2FPckxddBgzMMegIiLvHxGV%2B4J9lydq76n9BubWE30lWLawlYx4vFlKn%2FxvR9k3sxA0yi4KNDYPK0eEHNgx4k62KFJHn%2Fppl9jf6ia%2FKxSyD7vugDPf57tpR9Fb6jLcAb63VOq%2Fc00%2BvV&X-Amz-Signature=327a3bac3fdfa235e519a574d8c2bdc8277be836b9b8b5ac1876c8dae4b576a6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGCPBBSV%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdelEI6E46Hxag5oXFi5QBI7kYO7d94gbXsg74bLA6YAiEAlk2HWXrMTuw74QJNQisz%2F51%2B29Y8XR5QF%2FHdv9ekjLAqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI25aBUWf8ayFObjEircA2YOmTo4BJLvIz7JY6y%2BgT8%2FoDOzWoAatbBTFX%2FIw41Ciz3fqtryS3IYnJW6qLYpC%2FGwSYXJ3q9hgnO2y%2F4%2FeA16qjtW9hx9QAm%2FdeIsUzG5GhobZVWDeM21qtpEeQh9%2F5cTbwn%2BayE853CJX98WZuw%2F8jTxBdsJ8AFMM6l2bYBhiGKexL3YsGRpKdoEMG9de1OOSYsQ%2BgXht4PPKpAFxWDCmH9Y0fwLjVx40hFHUn8Y5%2FRF%2BI9XlSY%2FQaeSigzzAZTkxsC03FTXHa0h%2FsgU%2FfPlUEEsNlNxoHMD4U7EmvS93E06CgTrek0vsAYPaiWO36edcetY0v%2BNscMSCEes3FHksRu9WMlAiM9aFQG2hLxfirlf1CFe5ugs4fAMINY8vir1wQtYaUyL2qaVaOmT4RFNrilGWB43ca5qQL80lpLH%2FwxfrQTiuX4qh9t5JXmZkwS8tgjF8coiolJjVfoATfzA5aJeeKGZOhFVYa5NF8zZrpdIXgyVwi%2BKuzsbX27thf2vSwlV%2BZV1EYeQHeC6kTe35Sy2zep1DrOkA%2FV5VYVfZE%2F7leLQrQRInFSOl1ot4v%2B57llKUpbvlwtnKrr2sjmK54rU7s33ZwYVbxUsxVeUbVL%2FgpICCzkn6QoyMLSEvL8GOqUBQSa2fpoKcpL9sy0Vi3OwfUF%2FxpsKMVvgPtAiW2sVcdfgdRREwJVeJWLBA9l3me31PRaha7AQuyenyk4hnU9I4CqEyjc%2F2XECf%2F8kyTjl9yVEV8uUnGowAdpSWuGYg4X34KzZ0omavFVXDsA9jZWVRo0v1UHtEr0UmRCmYnxkMKTavLqOH9czp%2BAwZ%2BzdNDpT5pHN0uzYwSHOPBn78fK8JtLU7zH7&X-Amz-Signature=af0b76063f41ed22b37e4d876c45e3690ad0f6af43099d5ac9837f84dbe7676c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
