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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAF4BWVZ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T003657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGcJKqXVY%2Fi4rLwSgOnlEGsAWzHBxwjCU6LagFq6v8PgIhAPeaOh2TlMNotNCIWhRnATz5gwDhHVQ2hpmkbmnMtpM3KogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwojPQZk76K%2FuZJJEsq3AOCsqHcHmz4MoNOEhvcMqJ5yXDtkb5yruWgULQmIRd0E6OPwJBME%2BiCdt6O65aAMcmwhYiVdpTfU0v7agOffaJc6QMwbx3pwtumPGuYV5G3UsK8FqbVpM9dnCyTaFB5IZ3wWc88TPpRdF42jp%2F%2Bnn7r3iegulE3LBPVDl6rBTi64TjLhjhyPf%2F6baJl35zKmGvGfD68lpGMdvctppgL0N3pc4uDiogFgebetIpVC0TGpWoxDopZ6D%2Btb3qI1AASuLrWh10NlxL%2FJxlFY9a8ILWKUB2LZUPM5Z8suQHzM%2FkMmvfsMhEm8YfK%2BSOx4XJmw9ejRCwG%2BW%2FvsdPUniU4OlZcwaVGGfoWMw0vIZ5DucrHWBf%2Fztc75PXfOkgH%2FZ1fkQnO9YrUWEVzm4C2abqkq4Ilhbh%2BhdBhtvufz1leaPqAhBD%2BNIkPPtLI21I3B1EcaZAgGWGvMfe90FW0N%2BllTxB%2BX2JksCE%2BZQdDdK4N2%2BaNlLAWlFJTNlowJfmWt9e77Q6GwiAJMZqKL30Pgbe5kJBIaR5iNbScAVZRhrPxRcYe4WyDxqpL7by7qZMEc%2F8LmBeU72IRAaoIBcCznuypqVBOLtXIvUxrucA%2Fvr2gTULnue7vKrGX1iq%2FeyCqvDCQjdO%2BBjqkASkSTJtd4vkvkp9hJ1nz7Dp7sfOsi2US%2Fvy4quz0IMZS%2BFE0ic%2Bf7TI2pNGtDe5CCbMugRzlowc5tLkArjgwFU4F7NaJzh%2FvQcdO2S8pETye%2BgSrnpF%2BuYT6bKZL4jLvmsHN%2F4tmoW4nVaZ%2FuSu3v1h7L8qSwA0jkp5yqlTw%2Bt%2Big6ZhWgHbrIzanY7KF0ZCsqPeSdHvhsH90BnEHg8Mhx4mjS%2Fw&X-Amz-Signature=9f9696416c80456bb4aa04217580ba044aa0108ed80c297bea7b004185d0d159&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAF4BWVZ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T003657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGcJKqXVY%2Fi4rLwSgOnlEGsAWzHBxwjCU6LagFq6v8PgIhAPeaOh2TlMNotNCIWhRnATz5gwDhHVQ2hpmkbmnMtpM3KogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwojPQZk76K%2FuZJJEsq3AOCsqHcHmz4MoNOEhvcMqJ5yXDtkb5yruWgULQmIRd0E6OPwJBME%2BiCdt6O65aAMcmwhYiVdpTfU0v7agOffaJc6QMwbx3pwtumPGuYV5G3UsK8FqbVpM9dnCyTaFB5IZ3wWc88TPpRdF42jp%2F%2Bnn7r3iegulE3LBPVDl6rBTi64TjLhjhyPf%2F6baJl35zKmGvGfD68lpGMdvctppgL0N3pc4uDiogFgebetIpVC0TGpWoxDopZ6D%2Btb3qI1AASuLrWh10NlxL%2FJxlFY9a8ILWKUB2LZUPM5Z8suQHzM%2FkMmvfsMhEm8YfK%2BSOx4XJmw9ejRCwG%2BW%2FvsdPUniU4OlZcwaVGGfoWMw0vIZ5DucrHWBf%2Fztc75PXfOkgH%2FZ1fkQnO9YrUWEVzm4C2abqkq4Ilhbh%2BhdBhtvufz1leaPqAhBD%2BNIkPPtLI21I3B1EcaZAgGWGvMfe90FW0N%2BllTxB%2BX2JksCE%2BZQdDdK4N2%2BaNlLAWlFJTNlowJfmWt9e77Q6GwiAJMZqKL30Pgbe5kJBIaR5iNbScAVZRhrPxRcYe4WyDxqpL7by7qZMEc%2F8LmBeU72IRAaoIBcCznuypqVBOLtXIvUxrucA%2Fvr2gTULnue7vKrGX1iq%2FeyCqvDCQjdO%2BBjqkASkSTJtd4vkvkp9hJ1nz7Dp7sfOsi2US%2Fvy4quz0IMZS%2BFE0ic%2Bf7TI2pNGtDe5CCbMugRzlowc5tLkArjgwFU4F7NaJzh%2FvQcdO2S8pETye%2BgSrnpF%2BuYT6bKZL4jLvmsHN%2F4tmoW4nVaZ%2FuSu3v1h7L8qSwA0jkp5yqlTw%2Bt%2Big6ZhWgHbrIzanY7KF0ZCsqPeSdHvhsH90BnEHg8Mhx4mjS%2Fw&X-Amz-Signature=1cf3a64d536e847892f95f818b9d5840a8d0338a63704273437ef261a40f26b9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZLC4J5D%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T003700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCR6u0xnOAVyFQrlqPE9A8ZsPOJ2uNrNEfo7CNXHue%2FBgIhAJU2BXy8VSMM1sP2wxImDEYqBFyY72jKSwu2S0Ll7VwoKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzf2VU8G31ugMVGJ%2FUq3AOPz1KY8ibzQA6FpdgavsaXF84UQ%2FFVlnkWim4gVxFMvoFY6heYepM1FKM5nl898hyQiMTFCnExBEN2ZLOs%2FNxUuAJFgqsnthEh8NkKX%2BcXGI1VQhlIKoQymtHYbpAsya1Otsj4kWW%2Ft2su65jg8XRiLZqAVDkgZEHB3rYgm1212%2Bu%2B6oqaVCsjN81c5kjwTxPQGfMsRJZTkrh44aPkAwqRw6PmAQdQe8a7i3sHds1HvAfVpceEFDd5cv3QLmzCJ0g9b6k5ujFAHWoG7KD2JO%2FQ0sCJ%2BZaT6mDsZJOkK71isHfJxTee9WOz1KO%2FYxyfMjkg25XAZGfahxSc8e8yOrZPg%2FAMHtyE0%2Fl7tEpiY5JShRH%2Bx52cQgeya5rTI8E8oo0hoMARIK%2FjAc4MEqSuh4wywDpAmZl0NRnH397PHpg9pZBIunBDZ6mw0IQgn9FQtAjkp%2B%2FG38BBiouzkBPxOkqLgBIH0oX3x%2BqEw9%2BBBfXScVRnY1YLMnPgYhFktpr4R8VfO9DaJXLIsVIkBqMz7mjyC8MIA7yH5mgai8X%2FxbSnBHaVvpUIVJNlTv8srKxYtEpxZVcGMNmDuwKegZ7vuvcJrf2ybrX4ZRCupHxM%2BxOFtiTdg8MKpBGBkUw3yTDyjNO%2BBjqkATrdPgClc9%2Ftu3sWjz6MuSlQeZ%2BH3xo0KwkFrQiFaI7hAteaHp2EKJSFipAp%2B0c4mQdXJeZlwlDqtB3uBFpRTv4zgHoNY9BebB9dgI4CY3%2BRBcTCyL1tCXqS49x%2Bq2C0IX2OaHTPyGixj6PQBp4P%2Fhr7s9qu6Qrw8xYYyohBHlezAV4E2XsWd9CxafmiZCjiF8qaiQo7iGNpEJ2QZOCDhi0K1x%2Fv&X-Amz-Signature=e49ae5daea4b4a77a6af3c4b674c8c019ca9df654f083c05697897be26ed49a6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMNX5H2D%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T003701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbmE9LxX3phGaB6J4uMQDt4IXDMw%2BznR4ru6ddoDf6sAiEApMSLduq69Rdx7DG%2Bdn4ZfffBorEt3ID8gER2TlezQ3EqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDkzmZUcnjG%2BmEwj0ircAxZ0ogLcNSa5j4ivI3X11BVEgTOlVLt8dmkAZIU1JQsLvqKhgoUhVK74K5Q0uqij8tO2cHKvtV1qI%2Bk63HgJmh3EbP4tKMap%2BZ%2B%2FO2VWPSm4wQYM4ycPtnxshni%2Fk4tlK0C6mxyBmW63dd1LtuGt3EhP6stjDrTr86H2m2w%2BCM46igZLPn%2F0ZhRdGzGp5BEGwV8dj9wcbjXS6O20%2BfwO12AxODAwGzC%2BSlE3gAbt9ipdg1ilZJQtK9ll8aanmGHZhfYq1fG%2BPrEZJdWge1%2Bil38XduTnsXblb8ubKztjCjU9zWz9FfZ4oyGuvuH19ErpoRsHQBFY0mEXCv4dTwrci6%2FEHjRhmybBlk3bhwhp4Xi08fQn8rVuGdOxmvQhUMdpsehBWIywQ6FO7Tpq6vS%2FH8bRy%2BBftIuQ%2BjOqzXLJx7NS6EKDSiz%2FI0bSESXObOlROYt1zHgpF6xLcYCPNmCVvb1GGTrt4i9jJALRr3yyVi0kbFj0boTNvaHO1Ielfz9YpaiXO3v80hkaxi%2BXG4lnvK5HI7ngHzODGNFlAMcyYUFoe2n8bYQJjshtAgjyShE1mfUXFlth1UOe4tAj0Dweswsp8BNmjrG4Pn16tSjs5z%2FqfYsfwjRk81tz6fRyMJCN074GOqUBqkjMAGgUORSz96S%2FHsUtmc%2BYjFYaMH1WdWNTicCmn40cewd3VpQhQxaVCTIWMrjv88fXNqM0u2X30R6jLCDLGf3VhKFunKjj65OxWRyVHEDZMBZmyC98%2F6oJ%2BZvccBIrqsNkoRS224kGQASZYNjCjXG1eZKJlZRzDHCTD37o8S9yQt4Uv2Dx7ReYa5xc3EgfBTgu9QktDWgMMs6NrY5OQ8AZxzaT&X-Amz-Signature=092bbf6707758d6ba9444bcafc516c93f243fe3cf97008ae710916fd6587b7c8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAF4BWVZ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T003657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGcJKqXVY%2Fi4rLwSgOnlEGsAWzHBxwjCU6LagFq6v8PgIhAPeaOh2TlMNotNCIWhRnATz5gwDhHVQ2hpmkbmnMtpM3KogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwojPQZk76K%2FuZJJEsq3AOCsqHcHmz4MoNOEhvcMqJ5yXDtkb5yruWgULQmIRd0E6OPwJBME%2BiCdt6O65aAMcmwhYiVdpTfU0v7agOffaJc6QMwbx3pwtumPGuYV5G3UsK8FqbVpM9dnCyTaFB5IZ3wWc88TPpRdF42jp%2F%2Bnn7r3iegulE3LBPVDl6rBTi64TjLhjhyPf%2F6baJl35zKmGvGfD68lpGMdvctppgL0N3pc4uDiogFgebetIpVC0TGpWoxDopZ6D%2Btb3qI1AASuLrWh10NlxL%2FJxlFY9a8ILWKUB2LZUPM5Z8suQHzM%2FkMmvfsMhEm8YfK%2BSOx4XJmw9ejRCwG%2BW%2FvsdPUniU4OlZcwaVGGfoWMw0vIZ5DucrHWBf%2Fztc75PXfOkgH%2FZ1fkQnO9YrUWEVzm4C2abqkq4Ilhbh%2BhdBhtvufz1leaPqAhBD%2BNIkPPtLI21I3B1EcaZAgGWGvMfe90FW0N%2BllTxB%2BX2JksCE%2BZQdDdK4N2%2BaNlLAWlFJTNlowJfmWt9e77Q6GwiAJMZqKL30Pgbe5kJBIaR5iNbScAVZRhrPxRcYe4WyDxqpL7by7qZMEc%2F8LmBeU72IRAaoIBcCznuypqVBOLtXIvUxrucA%2Fvr2gTULnue7vKrGX1iq%2FeyCqvDCQjdO%2BBjqkASkSTJtd4vkvkp9hJ1nz7Dp7sfOsi2US%2Fvy4quz0IMZS%2BFE0ic%2Bf7TI2pNGtDe5CCbMugRzlowc5tLkArjgwFU4F7NaJzh%2FvQcdO2S8pETye%2BgSrnpF%2BuYT6bKZL4jLvmsHN%2F4tmoW4nVaZ%2FuSu3v1h7L8qSwA0jkp5yqlTw%2Bt%2Big6ZhWgHbrIzanY7KF0ZCsqPeSdHvhsH90BnEHg8Mhx4mjS%2Fw&X-Amz-Signature=1ba8938bfbd59836e7137946491827ac487577fab227d8488ed76c41326a266c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
