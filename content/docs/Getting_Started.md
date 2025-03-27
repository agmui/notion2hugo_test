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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PQDBKEN%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T131836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPo4AX32%2B1VUXKLYeYENTiwrqk3%2FzSv4eprNoqFKV2TgIgYMzheeyUQxhRbqFVGS%2F%2BTOEBmlgXGiwvBGSLn3sp1BEq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDNLg8NS1TegQKP2G3SrcA5N%2BzRBoMPSNTCSXtK9mtv6DvG7jp3UcnrvXHpM%2BySQ4q8qAXJa%2FdhwAhuUSOQYXQ7PT6uPi3%2FXz%2B6pkHnuSXzbN6Z2yauEaXsyZovczkv7VmvTEaQI9GEFaclYJnMdg0w8VghV4xZy6BJ%2FLG7rcnLSJKCH8QBXEzmsIKbdBr0mxpQJ5Oz57Ty3aD0%2FyY%2Be%2Bm5tlv2T3WjHw9L4r61Yehm4zW4bkaIzUamaxof0XvxDUbBgwrD08Zv38glzlCTAFrOY3BDJ3zZy2GGJFLoPVzwHeAdZALI2FoWOHTsJKXPhTp1mxTU9AqjVUR7N93grpY3N7pxeqqSihXU2QZRl%2BOAmWAPiu%2BOK2rcBLkYU%2B%2F0b1WIuOIOgOllM4wJ012sbFKLMZ472bWlbRB0A8y3K%2FY9ei4dMDege5yrDqBF61Wv74%2FtngTcYsK0rb3l85MIx%2BScmfkFlHUJWfHxg7jDjqU5qegFGCVbj9S9TUctdo62QwZ5o00UFygaSqlylutgmZ13tXTkRqk2rr0QTNV6IwL0FRKlm%2BOYeoJ0stBuzAmm6DUpBRbTnMwOGEShbERn0cT4jbRhVL5%2BguYruSKmqhDRfl8QQjRW2VUGWz6MJeKR3QFusKQmov6cGwOrxfMICUlb8GOqUBJ0Hj%2FhtkvwkyH5hOiik9H5mbn2jUW%2BYrv96mbZKLYWdKaY3nS8wLMQFBW4l3gEolWW6KxkzU0Vh0pBdPZ590M28zwxOOJJFe0%2BOS7g3C%2BDpAxv0%2FpZKrLGsQdswCynqQ9aityKG9J1x2k6QiwtCvdKmStL8qnYs5QMOOH3YsqMAKV3aCFV%2FbYQyICoZQHAPdehg4tsUjXO7p0m1WLn%2BVDOYyY%2BS9&X-Amz-Signature=8d05bfa09d32d9c5b96809c9eb3ae545a50d6a8eec4d272c03266bb0c0a0a7f6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PQDBKEN%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T131836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPo4AX32%2B1VUXKLYeYENTiwrqk3%2FzSv4eprNoqFKV2TgIgYMzheeyUQxhRbqFVGS%2F%2BTOEBmlgXGiwvBGSLn3sp1BEq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDNLg8NS1TegQKP2G3SrcA5N%2BzRBoMPSNTCSXtK9mtv6DvG7jp3UcnrvXHpM%2BySQ4q8qAXJa%2FdhwAhuUSOQYXQ7PT6uPi3%2FXz%2B6pkHnuSXzbN6Z2yauEaXsyZovczkv7VmvTEaQI9GEFaclYJnMdg0w8VghV4xZy6BJ%2FLG7rcnLSJKCH8QBXEzmsIKbdBr0mxpQJ5Oz57Ty3aD0%2FyY%2Be%2Bm5tlv2T3WjHw9L4r61Yehm4zW4bkaIzUamaxof0XvxDUbBgwrD08Zv38glzlCTAFrOY3BDJ3zZy2GGJFLoPVzwHeAdZALI2FoWOHTsJKXPhTp1mxTU9AqjVUR7N93grpY3N7pxeqqSihXU2QZRl%2BOAmWAPiu%2BOK2rcBLkYU%2B%2F0b1WIuOIOgOllM4wJ012sbFKLMZ472bWlbRB0A8y3K%2FY9ei4dMDege5yrDqBF61Wv74%2FtngTcYsK0rb3l85MIx%2BScmfkFlHUJWfHxg7jDjqU5qegFGCVbj9S9TUctdo62QwZ5o00UFygaSqlylutgmZ13tXTkRqk2rr0QTNV6IwL0FRKlm%2BOYeoJ0stBuzAmm6DUpBRbTnMwOGEShbERn0cT4jbRhVL5%2BguYruSKmqhDRfl8QQjRW2VUGWz6MJeKR3QFusKQmov6cGwOrxfMICUlb8GOqUBJ0Hj%2FhtkvwkyH5hOiik9H5mbn2jUW%2BYrv96mbZKLYWdKaY3nS8wLMQFBW4l3gEolWW6KxkzU0Vh0pBdPZ590M28zwxOOJJFe0%2BOS7g3C%2BDpAxv0%2FpZKrLGsQdswCynqQ9aityKG9J1x2k6QiwtCvdKmStL8qnYs5QMOOH3YsqMAKV3aCFV%2FbYQyICoZQHAPdehg4tsUjXO7p0m1WLn%2BVDOYyY%2BS9&X-Amz-Signature=5a1ad396ff905870eeb77a1c35e20b501146fa0514c12fb00a4741b25d383253&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTGXSYTD%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T131838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH0hpFSklE7rlKPgzVQauUCHuGJTxiwnmVtwgjsWcrOgIhAJ2JwL0KHFtzCG94uqNbhPjMb5QcDruUJACeGmgO41EnKv8DCEYQABoMNjM3NDIzMTgzODA1Igz%2FrFWArOzGy%2Bz03%2Foq3AMLjqzuIqE3vx%2FiMKLFal%2B%2BbWMEnXwDoK0ahGUaHMt6fwzC1MU7eMrNszKdtIQZ4tVPD7%2B0m4SN9Sjv3GHqtNe9s3X26Wdn1K%2FfNPp%2BGZ%2FivOicFsF87R80UokPCicyDjlaK079XT9qWrx0lCoALQvxffcDbC2SatOrO%2FBOFcOSgq4auFD63OuZf8YnDfUWGac9U8UACHEuQoBhuUctmpuxM2lH6bvNtetLo0t9JEhGqXm3EguFw7dQSKV1qgwRUX9oabr0EdL2k98Eok8mO2crKBIWm%2BmXhtq1WONK4BxZO8dYS9UgueSFLUmezuudbJFzpDPXUUywCOU%2BCOthHkZTeluoN6IwbIYnSoNLNw%2F8Ls6L%2FTId4ADbZXhdrF8eevzbJzI%2FCg0dYNDP%2FfdNOQMpljOrWtcPpqw39xhzPW1D8gWc%2BYeQYodcdCsdYZjtkq5UeAkkiR9pmwyfkCjzVaQDd3Y0Jrr%2FDMeWd%2BwIuqyzryrz%2BUqYyojfq3H5UdMTQmtiJmr2yly1fIGRgBvMitXNAuz1H%2FCOsnSmnNU8uHOy%2BucFI5SshEEnAyf4ZEIepxRv1tbddHbKVgfeYmR%2BqZCcJxAwDCtM%2BGQzGAfaRacS9lokVbSqFUJWzUGgsDCplJW%2FBjqkAVugmX0y4vW1QvVNOMppCZN%2FoWqlGjEakji0UgOheYcLoJdK%2BUlHVQyEsP64PeFUVxbBrslqPMw9Z5ug%2Bymwsl%2Fm1T%2BwcutoO21xTLeflIW42khKBaC%2B9fn3%2F1f%2BCdDYLIRp%2BWJGzdizpJ7gyddvmWdSyYx1MXfC5rCvVz7o9idSpXeZYq6UDzxpwpiQBgGPMOoMHBa5TEyn%2Bokvdme%2BGZ7oFCs4&X-Amz-Signature=430649244ab3999ba07d0f56e4e4298aa636a08a4dd9146c8caff5b7cb393b63&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7OSJ5NB%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T131838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvQSY2zxGnyGGxbTo9gsRW1Jn6W87Wr%2BXIXQb54kLT8AiEAsl%2Be14Z0rd6L1e2i%2BbUmW%2F0H0%2BZ1FuZl3iKLis7bWl8q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDKmyekpR0fr6JfDOzCrcAzktAiNLhuHwOt6ZRVDCm%2FrjbJfRKGQSAAUZRr8QRzCXqzcGohX256iCCehftNmwK0HVchRXGsfDQAtJTu2jzSXW1oqPN0UiE%2B2Uk9ZLzxrvgR6kQaF6P64URMmKmu2pbTMaW62zFsH9%2BvfGf5Qj1TZj%2BFxzl75X58ukI7lET3a8cwjvQM2VSWMNuZmF6PTY%2BmRS4Plj3YyQ%2FJZgxx0ksVFUz0rGwTJQSfDcnvgyZfFcet2UzR5QqWufbJLmlLPcaQ0fHgaXo5agGcUdewYkjSRCqfb6hO1xBR1%2BqnsquLa6lQg7rLZAtedn96R9aLPVK9w9Vjhf3LokTCNqvhufPUkiBAL%2BUh%2F4UP%2BAwud9b3x%2BzyWRLBm3SRFQReCWNk%2F9H1dyS5OoBako9stXkQRRH7yK3%2BwiFLmtA4EwWZemS%2BswAXA0mkk71BQnXYDvKlZkfGnJNOGT86WdVFIfC3BOStLvCe%2Fdj0mCuCt%2BnVB0vPwMmZ0nBpGrkkem7dBAIjxe5UqbKVS8mJuJojcg%2B5UAmPK2KOiZn1pAybcVR578rAd9HQMq1KGoR8C8hYyPJTKsMF5elSm4I%2BTRVorLw%2BWQZ7%2BqIuqa2wUMPOdTGOGd1gz9nKsXyfNCC2pUpqHpMKqUlb8GOqUBuCTSVpUfVTmHetFx%2ByVW6Aqj6zQLjpi9DSGSfmBN%2BaeOC0iMM8MuDoTg5N5wo6Jh8%2FV3C%2FDN7zLj4380XNqYIrAgETUBR6OCZUOndpwIa1F08LS97GYz%2FSlu7aB8%2Bjo%2Fi9bDRu6yBn0TV81atqiFlYNXD6jP0Aci%2BpWJ%2Fdj1XQf2ceW%2Be1FKNe9sUCt5Ah6L%2BfQYmSSmKnZPwb%2BAClazMlgMlS%2FJ&X-Amz-Signature=fcd4a085238da9ddd3e4b4504e68d92f7eeb3dcab27c43b50d695f6170e7882c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PQDBKEN%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T131836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPo4AX32%2B1VUXKLYeYENTiwrqk3%2FzSv4eprNoqFKV2TgIgYMzheeyUQxhRbqFVGS%2F%2BTOEBmlgXGiwvBGSLn3sp1BEq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDNLg8NS1TegQKP2G3SrcA5N%2BzRBoMPSNTCSXtK9mtv6DvG7jp3UcnrvXHpM%2BySQ4q8qAXJa%2FdhwAhuUSOQYXQ7PT6uPi3%2FXz%2B6pkHnuSXzbN6Z2yauEaXsyZovczkv7VmvTEaQI9GEFaclYJnMdg0w8VghV4xZy6BJ%2FLG7rcnLSJKCH8QBXEzmsIKbdBr0mxpQJ5Oz57Ty3aD0%2FyY%2Be%2Bm5tlv2T3WjHw9L4r61Yehm4zW4bkaIzUamaxof0XvxDUbBgwrD08Zv38glzlCTAFrOY3BDJ3zZy2GGJFLoPVzwHeAdZALI2FoWOHTsJKXPhTp1mxTU9AqjVUR7N93grpY3N7pxeqqSihXU2QZRl%2BOAmWAPiu%2BOK2rcBLkYU%2B%2F0b1WIuOIOgOllM4wJ012sbFKLMZ472bWlbRB0A8y3K%2FY9ei4dMDege5yrDqBF61Wv74%2FtngTcYsK0rb3l85MIx%2BScmfkFlHUJWfHxg7jDjqU5qegFGCVbj9S9TUctdo62QwZ5o00UFygaSqlylutgmZ13tXTkRqk2rr0QTNV6IwL0FRKlm%2BOYeoJ0stBuzAmm6DUpBRbTnMwOGEShbERn0cT4jbRhVL5%2BguYruSKmqhDRfl8QQjRW2VUGWz6MJeKR3QFusKQmov6cGwOrxfMICUlb8GOqUBJ0Hj%2FhtkvwkyH5hOiik9H5mbn2jUW%2BYrv96mbZKLYWdKaY3nS8wLMQFBW4l3gEolWW6KxkzU0Vh0pBdPZ590M28zwxOOJJFe0%2BOS7g3C%2BDpAxv0%2FpZKrLGsQdswCynqQ9aityKG9J1x2k6QiwtCvdKmStL8qnYs5QMOOH3YsqMAKV3aCFV%2FbYQyICoZQHAPdehg4tsUjXO7p0m1WLn%2BVDOYyY%2BS9&X-Amz-Signature=9944f36d75eecbdc0823f1203fc20bc3c6887f84421e37c5626d13418b9befe0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
