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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4DOY2TE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCKxxluP145MumsiQCc1UI8xcf7T%2FP2FVOS0uCIyS0ZsQIhAIfj3m%2BXyMXiGbLFXLIMqajqIlMHNYG8719kLB%2FYIe1qKv8DCDcQABoMNjM3NDIzMTgzODA1IgzXItLte1CRYd4IvRUq3APc%2FgpLGYyFS11IotGAegx%2F%2B6uUjvfUda6TcCLdEhwRDMccmETZZRdtDyD1EPFgyDNCDRj8UQdyUjtmuIWLS8G84%2BZiGFVrdxKqGL3ejsr3PZNug19LQmofHNoaskmr2dutCTS8c9bgEPOMF2abbtf7QZQGBKl54pucXrJkKWK6oI71LuepPrAdbahHdY7pssWwSTL4Pv9Laem61R%2BXLA7WPCizcVl631L8B5gzbqr0I8o1AQiv4z0I0Wxt6pekYkUci8vczcOAOZrNR4Q4yrVHTZgQTgsXd57STERRXn38NeaCUHw7G69MtOYZ02AQj%2Fs%2BQUAdQDrmCoWGqVapLfK%2BsR8z1dh7HA1tdwpDlu%2F9phpsQZgIHs%2Fmo%2BvyCejzfa6cSCuUFvE38G%2BgTGHN7javNUTWgRyCTFM4Xz%2FOO7u1KroYsqYMdECjSqsFECSCSvPhwZhiYIMGruijnXkuM%2BXbyZkuon6l00eSgsMOqKJB1nC6cQIpakdPuggNEAYBGHFUfujjSg%2BHY%2Fs9v9qtuz%2FQQbLGMTDXEqYboUmIQ48P5yjr3cX%2BH15JPmOZmJaGC3VEkera9yt9v1eRsYEyuhaznl8CWqOC3x2Pm6MXYqRY8Wyy6YAkFsHCCNPvXTCR%2BNXDBjqkAdjVhFzfxvlMcaGlA5Xs21BulZ%2FSsOINiukr%2FR6MqRJSQfwLMj%2BqYO8aRZ0PXgNLGg6zWhKdYZjk1KWS9cgvqMT8u0qW6bVWapXwOotVw1oJMMKcsonxso1Nja3Zybp%2Bk%2FioyGsPagVj9TV%2Bogfaybc%2BO11KI6CnYVHrWo%2FlX1aIjmarp1C2B%2FTP2glWKOYJS7zzOJ0HIUWmBsnKnI0hsXlJTl38&X-Amz-Signature=fcefc2b52375a5a665a7a78f4fa50f5d046e705fe59effd14baedaa3bb7209fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4DOY2TE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCKxxluP145MumsiQCc1UI8xcf7T%2FP2FVOS0uCIyS0ZsQIhAIfj3m%2BXyMXiGbLFXLIMqajqIlMHNYG8719kLB%2FYIe1qKv8DCDcQABoMNjM3NDIzMTgzODA1IgzXItLte1CRYd4IvRUq3APc%2FgpLGYyFS11IotGAegx%2F%2B6uUjvfUda6TcCLdEhwRDMccmETZZRdtDyD1EPFgyDNCDRj8UQdyUjtmuIWLS8G84%2BZiGFVrdxKqGL3ejsr3PZNug19LQmofHNoaskmr2dutCTS8c9bgEPOMF2abbtf7QZQGBKl54pucXrJkKWK6oI71LuepPrAdbahHdY7pssWwSTL4Pv9Laem61R%2BXLA7WPCizcVl631L8B5gzbqr0I8o1AQiv4z0I0Wxt6pekYkUci8vczcOAOZrNR4Q4yrVHTZgQTgsXd57STERRXn38NeaCUHw7G69MtOYZ02AQj%2Fs%2BQUAdQDrmCoWGqVapLfK%2BsR8z1dh7HA1tdwpDlu%2F9phpsQZgIHs%2Fmo%2BvyCejzfa6cSCuUFvE38G%2BgTGHN7javNUTWgRyCTFM4Xz%2FOO7u1KroYsqYMdECjSqsFECSCSvPhwZhiYIMGruijnXkuM%2BXbyZkuon6l00eSgsMOqKJB1nC6cQIpakdPuggNEAYBGHFUfujjSg%2BHY%2Fs9v9qtuz%2FQQbLGMTDXEqYboUmIQ48P5yjr3cX%2BH15JPmOZmJaGC3VEkera9yt9v1eRsYEyuhaznl8CWqOC3x2Pm6MXYqRY8Wyy6YAkFsHCCNPvXTCR%2BNXDBjqkAdjVhFzfxvlMcaGlA5Xs21BulZ%2FSsOINiukr%2FR6MqRJSQfwLMj%2BqYO8aRZ0PXgNLGg6zWhKdYZjk1KWS9cgvqMT8u0qW6bVWapXwOotVw1oJMMKcsonxso1Nja3Zybp%2Bk%2FioyGsPagVj9TV%2Bogfaybc%2BO11KI6CnYVHrWo%2FlX1aIjmarp1C2B%2FTP2glWKOYJS7zzOJ0HIUWmBsnKnI0hsXlJTl38&X-Amz-Signature=abdc251fdef146398c85378cc74d253c716db159beec88489007666e929b0d37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4DOY2TE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCKxxluP145MumsiQCc1UI8xcf7T%2FP2FVOS0uCIyS0ZsQIhAIfj3m%2BXyMXiGbLFXLIMqajqIlMHNYG8719kLB%2FYIe1qKv8DCDcQABoMNjM3NDIzMTgzODA1IgzXItLte1CRYd4IvRUq3APc%2FgpLGYyFS11IotGAegx%2F%2B6uUjvfUda6TcCLdEhwRDMccmETZZRdtDyD1EPFgyDNCDRj8UQdyUjtmuIWLS8G84%2BZiGFVrdxKqGL3ejsr3PZNug19LQmofHNoaskmr2dutCTS8c9bgEPOMF2abbtf7QZQGBKl54pucXrJkKWK6oI71LuepPrAdbahHdY7pssWwSTL4Pv9Laem61R%2BXLA7WPCizcVl631L8B5gzbqr0I8o1AQiv4z0I0Wxt6pekYkUci8vczcOAOZrNR4Q4yrVHTZgQTgsXd57STERRXn38NeaCUHw7G69MtOYZ02AQj%2Fs%2BQUAdQDrmCoWGqVapLfK%2BsR8z1dh7HA1tdwpDlu%2F9phpsQZgIHs%2Fmo%2BvyCejzfa6cSCuUFvE38G%2BgTGHN7javNUTWgRyCTFM4Xz%2FOO7u1KroYsqYMdECjSqsFECSCSvPhwZhiYIMGruijnXkuM%2BXbyZkuon6l00eSgsMOqKJB1nC6cQIpakdPuggNEAYBGHFUfujjSg%2BHY%2Fs9v9qtuz%2FQQbLGMTDXEqYboUmIQ48P5yjr3cX%2BH15JPmOZmJaGC3VEkera9yt9v1eRsYEyuhaznl8CWqOC3x2Pm6MXYqRY8Wyy6YAkFsHCCNPvXTCR%2BNXDBjqkAdjVhFzfxvlMcaGlA5Xs21BulZ%2FSsOINiukr%2FR6MqRJSQfwLMj%2BqYO8aRZ0PXgNLGg6zWhKdYZjk1KWS9cgvqMT8u0qW6bVWapXwOotVw1oJMMKcsonxso1Nja3Zybp%2Bk%2FioyGsPagVj9TV%2Bogfaybc%2BO11KI6CnYVHrWo%2FlX1aIjmarp1C2B%2FTP2glWKOYJS7zzOJ0HIUWmBsnKnI0hsXlJTl38&X-Amz-Signature=40ed274db2670b61b9319521422d4f1fe20d537a829e3d2508419c665c6dd2dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOOTMP5O%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAj1SlFJBfcCC5f63jjfV4ccGYm%2FaEshB6WOjlwfLmciAiB8qBEOt4hbbgAM39SzvXXfhjyTTaiYuCxffZFoKMupUir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMpI3xjqvgemUwSo9BKtwDWgZ%2Fg3poOagTMEZb9AlzJjb1C1mMfpaX881FoOhiKg%2FHbV86yoF8oRUPeXZKzUmV5761P8U6CuJrcMQSFqpBRezyl0EU85dcbShvi43jq0jgHJknPINJVX7am3QXmPkX1YgbW0xew8M05JTG0y2b1mBbdsk%2FsEnCJDsyDom5yq%2BXlsfwrAc2XlKw4IheAf%2B0IPhO5BwCMEXaePLvVBSY49En8oWJYO%2B5p4Nwk%2B9B8mCSm60HY3EeD8284oYxxTP8iUSARgNd0pN1TdIE7eMCL1%2F6f8f7xDFgaggf5IJ2M8MGLWoPfWVYhcJd2gGEgm0qkbRudZie31FnGg7CfRvqWRoMiwBb4ct5hzgEa%2BkiPD08ZkgtGMH%2BKn0e79dK5H%2F2Ygs%2BIL7Evv75AASf7Mm3ruungt31uxaL7Y5bAvNNoHZXQfMcQtIQ6%2BaClxSZdLCYBsPlkbXxb%2FWNOQOj5D%2BV2OSDBzKycSkC9aVRHownd7wzO8a%2FC72NOd00Ct2F72zSFJd2tS%2B7iYlhEQuNB2NT%2B4bOAD8BtsOGKjnchzATA5iiCu6262kIy4I1ujQXEuSwxktTw2cuR6Fk3qTcDsSrt%2BKXfmCfByxy9%2Bd18uHQBaQuBvipCKrcHffupeowtvfVwwY6pgGcy%2F9ES3UMCfn66Jk9MQWVp5yCwyomPYUi3cGNeivVTac%2Fwa6C%2FqCl2M3QeWmkkZjjZO2RB2b0a1ylXO4hb9tvhrjMKT%2FSqbG9hp7al0gFP2B79ywvpJpmloxCB%2Fx4dywh3R2%2FXxNMapyZY6PpNJQSC4G0fwxUUdYEtR7X7FDR3zr1nV4xn9OuQBmvaD3hXaauM4xVDsMkafARjLA6vOM%2FXOLJgnKn&X-Amz-Signature=0fd6b11cee79e702252d13bb4563027b1f1b1f144c61d2042cbdc6b10dc51c4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSB7ZICS%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCP%2B9j9zPhrX8bVbIiJhpnwXYRqW1OiCoYTgGWfV7g8UgIhAKbAPCtXNVyeaY18mLJ7ym8xR3Mym%2Fj2nJyAqOG5IYbUKv8DCDcQABoMNjM3NDIzMTgzODA1IgxWgs7tUp5VPdqc%2FK4q3APv4U0%2BZ0iz6ExfCpSMPsdyQE%2FSi91%2BelKj0yvewNFwP5Yd4AWH9LMJWalijNAYSEWFC430Hny7NKmbzYS2vSkuTg%2Fg9gKABIKX62IjCpfgNoEAiJcBsnNqYxztTm0tCCCqDE%2BG3EtTwaseQuMMNHWTPOfurT0KkiLKw3nrYY1pfxUzUrpRL69pnfX8yZUU9dFE4uu7UcO7jA65IYzr3sRA6IjQ66mR2vFSpk0F3PqkCnjaLAlNypSWmvXmlgfPJNGdECJHdeRSXxT8ejw9llS7vTax9uT3VPSL9iJUnUWclfIqf4W%2BkdFg64bJFHmGBeG%2FNKSJr%2BBtPSx7SQ8PeZWyGhsTT7jQU4xQTx%2BLarsh6hBGGlrCV7Yny19Qc7eJ8ZOPGM4I42nFmCxIKqKd1ytFRhqhJFMtxVRnoY5ImPfuD4sCWel2h%2BNUYlNXFb592%2F2jJPgI93cXjQKey8pPEu15MWkAsCANuJ28ROWcY8D8PfhRM2tno1sr9vXNDGYu9FABVni0JwH8iUCDThi6eKIdi%2BhMxzdeGTPJOQGvzX1oeYw2nVLIfc96hJESCG3mVQuwpd6bTYt9C3hqg5FF1%2B9c9yVqJzL5bDigZmoo4i8jVnYKippQpT%2B8EeAv%2BjDn99XDBjqkAQ3Irzrw%2FE%2BATz5462vY3lBke%2FkrKIr3ySOVCjzLnBRAC3O0%2F5ZNgXaYMd3tph6%2B1q21Tq2ou5iZPziSnQpyuy%2FDCGc7sAwFuxUV0Tv3zmJJlOOA51kUiIOwZiXCJPbZDzLorv301Jv95flUZZoeXyKIpp7lBkl8WLpDBQHEtXXQvguNg7xAoWebCRIeNQSojMAKKtRB4%2Fb1wvoXpBsNamK0Asbn&X-Amz-Signature=0a6e1149d9cb7597f83c9b6b193f435d7b2b1339fb8840cd933007f1bcbc7c62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4DOY2TE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCKxxluP145MumsiQCc1UI8xcf7T%2FP2FVOS0uCIyS0ZsQIhAIfj3m%2BXyMXiGbLFXLIMqajqIlMHNYG8719kLB%2FYIe1qKv8DCDcQABoMNjM3NDIzMTgzODA1IgzXItLte1CRYd4IvRUq3APc%2FgpLGYyFS11IotGAegx%2F%2B6uUjvfUda6TcCLdEhwRDMccmETZZRdtDyD1EPFgyDNCDRj8UQdyUjtmuIWLS8G84%2BZiGFVrdxKqGL3ejsr3PZNug19LQmofHNoaskmr2dutCTS8c9bgEPOMF2abbtf7QZQGBKl54pucXrJkKWK6oI71LuepPrAdbahHdY7pssWwSTL4Pv9Laem61R%2BXLA7WPCizcVl631L8B5gzbqr0I8o1AQiv4z0I0Wxt6pekYkUci8vczcOAOZrNR4Q4yrVHTZgQTgsXd57STERRXn38NeaCUHw7G69MtOYZ02AQj%2Fs%2BQUAdQDrmCoWGqVapLfK%2BsR8z1dh7HA1tdwpDlu%2F9phpsQZgIHs%2Fmo%2BvyCejzfa6cSCuUFvE38G%2BgTGHN7javNUTWgRyCTFM4Xz%2FOO7u1KroYsqYMdECjSqsFECSCSvPhwZhiYIMGruijnXkuM%2BXbyZkuon6l00eSgsMOqKJB1nC6cQIpakdPuggNEAYBGHFUfujjSg%2BHY%2Fs9v9qtuz%2FQQbLGMTDXEqYboUmIQ48P5yjr3cX%2BH15JPmOZmJaGC3VEkera9yt9v1eRsYEyuhaznl8CWqOC3x2Pm6MXYqRY8Wyy6YAkFsHCCNPvXTCR%2BNXDBjqkAdjVhFzfxvlMcaGlA5Xs21BulZ%2FSsOINiukr%2FR6MqRJSQfwLMj%2BqYO8aRZ0PXgNLGg6zWhKdYZjk1KWS9cgvqMT8u0qW6bVWapXwOotVw1oJMMKcsonxso1Nja3Zybp%2Bk%2FioyGsPagVj9TV%2Bogfaybc%2BO11KI6CnYVHrWo%2FlX1aIjmarp1C2B%2FTP2glWKOYJS7zzOJ0HIUWmBsnKnI0hsXlJTl38&X-Amz-Signature=6dae042ef1523fe84ebd13a3fb47e2bd58f1e38e48422ab0d24a82277ade2a31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
