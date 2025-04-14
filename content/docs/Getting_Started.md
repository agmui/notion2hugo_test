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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SN2C4DL%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T022351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAeLXGmIN87VDfqu4wOb6ych4EcyPZuzgZnqRn24Qi8wIgTIeZG3u%2F7c3aPUraKeW823UdDzEm2PVTaD3ByXAFaUMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaTy0lcJ5OK4J10xCrcAzqX2ClBiRURbdW13G2siQpriBIbyM4WL%2FcD%2Fy%2BmYbMGhcMMFlbPFJWXjY23CQ5GOZNSkYQ%2BuK%2FLEmdHdu6G3WpT2wZH2MBQG24RdeTAVIDq%2B1vWFxAfuBIJLV6vtgK7t7nDkTZ2ltYP%2FBHECeJFjzzyPO0PBrew%2FuZsiwA3zLZ0A8lW5gZpcaGjhXUSICULvZkR4muZl6TR3PCq1b6aZMEfxFL8DFSp7eFqOPhtJu657j4v9GYu6IMij63htiBq6nsJi3PrdPNEd74DHQL6vNOLiaQuwduq6s0hXObdye3RRXbQFP6aOOPm1T3WJsHcuCMjcI7R0qQ%2FrqSRWTWi8vPFh7kEbNmAl3L1U8ojDd11rMBCp6b7BAA5kgywORM20Y7fHCRnNoR4B2flgHu%2FUEZMidLVnLD5poxHx0dh9TYQDWeKyEBYsouMFaavGh%2FNc%2FnWjHbGCAnOrHjKbeN3vnsUMLslQ8iQ4fFuXz4D55YVzTSLJpacOjq6gP9qIMlRfP%2F5%2B0btkhuZnyMka0R2DVlbXx9Ctmux%2FpQK9%2B8bYXmzLAjDA144rMG%2FxWFiybI4uDbU0jPt7NJSifyTK4QKYz8Ti9SC5bEApIFZiX1W5EYZF8hKPvtAgILcQB7IML648b8GOqUBjWvsnepSvUr%2BXxN4%2Fz8VYxJTGlR4Rfb2ZGqvveWwdFbgq5Ggisr%2Fk8xGUsOF4eHbmHSgZP1KnIl7RJR1VbLGFsSIYHap0tP7GgfLRyJxtbLA9CzjQsvPkpYe4451CtH%2BF4qRqEx9%2BUbCg6%2B%2FLMNhwQ%2F2iUO0nOO1mghOsV8ms%2BkCLUI5PVX6FfpQoP0boTfHo%2FGWw2NxoFOjh7lPKPHoP59U5qWU&X-Amz-Signature=7b7348ee5d06e9750aa4612c609195bebb4320140273ec4a295cf09ddc8f4afa&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SN2C4DL%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T022351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAeLXGmIN87VDfqu4wOb6ych4EcyPZuzgZnqRn24Qi8wIgTIeZG3u%2F7c3aPUraKeW823UdDzEm2PVTaD3ByXAFaUMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaTy0lcJ5OK4J10xCrcAzqX2ClBiRURbdW13G2siQpriBIbyM4WL%2FcD%2Fy%2BmYbMGhcMMFlbPFJWXjY23CQ5GOZNSkYQ%2BuK%2FLEmdHdu6G3WpT2wZH2MBQG24RdeTAVIDq%2B1vWFxAfuBIJLV6vtgK7t7nDkTZ2ltYP%2FBHECeJFjzzyPO0PBrew%2FuZsiwA3zLZ0A8lW5gZpcaGjhXUSICULvZkR4muZl6TR3PCq1b6aZMEfxFL8DFSp7eFqOPhtJu657j4v9GYu6IMij63htiBq6nsJi3PrdPNEd74DHQL6vNOLiaQuwduq6s0hXObdye3RRXbQFP6aOOPm1T3WJsHcuCMjcI7R0qQ%2FrqSRWTWi8vPFh7kEbNmAl3L1U8ojDd11rMBCp6b7BAA5kgywORM20Y7fHCRnNoR4B2flgHu%2FUEZMidLVnLD5poxHx0dh9TYQDWeKyEBYsouMFaavGh%2FNc%2FnWjHbGCAnOrHjKbeN3vnsUMLslQ8iQ4fFuXz4D55YVzTSLJpacOjq6gP9qIMlRfP%2F5%2B0btkhuZnyMka0R2DVlbXx9Ctmux%2FpQK9%2B8bYXmzLAjDA144rMG%2FxWFiybI4uDbU0jPt7NJSifyTK4QKYz8Ti9SC5bEApIFZiX1W5EYZF8hKPvtAgILcQB7IML648b8GOqUBjWvsnepSvUr%2BXxN4%2Fz8VYxJTGlR4Rfb2ZGqvveWwdFbgq5Ggisr%2Fk8xGUsOF4eHbmHSgZP1KnIl7RJR1VbLGFsSIYHap0tP7GgfLRyJxtbLA9CzjQsvPkpYe4451CtH%2BF4qRqEx9%2BUbCg6%2B%2FLMNhwQ%2F2iUO0nOO1mghOsV8ms%2BkCLUI5PVX6FfpQoP0boTfHo%2FGWw2NxoFOjh7lPKPHoP59U5qWU&X-Amz-Signature=50d6664127a4317d4c30cc649965e08ec4984f2b18c7462fe563ceacbd910d91&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJXS77KE%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T022355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5FH6vspNpP%2FWaX2oLYRrP2yw6n41sgcsa9L3uGvTAFAiAi3V9IqqF5QJIWzAVoWQMZYaswX4%2BzycCLxxeKl4wyQyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV3yeUusZzxdj%2BIrEKtwDF%2FhQnfLXviUkKkKzTh3zLsffpPr5qT4JuhG4HFnOHy7J3zCcY6ESvNP833abDC82IzcVGyxHlJLv5A%2Bp3gbZn4aIZoCljij46wFg0KnT%2FKvff369PRnYQ8K5Agrn3ytUDUziHnRJEAYdv%2FqFfGOG4mYzAuHLAMBG61x%2BfODUZoMu%2B%2F7gnoyHQoS6g%2Bdcst2ra6WF%2BcYhDMWga3jJEwx9OLoC9G9HtR0c7ASdOQ6WiOf0odHADh1HNtm2aCdn75nYprEXEBxEhgOpOfvhwKgD2plz87b3GFqin3SQhEZApop2LyDzcxJskM1Q53KXnubiz49MQ2fME166kBIrRIY5vUlwrNcAzW5i61dUAh1WvqFr9T0VDj74xUjZAYYs7KCZIRar%2B9e7bYnO40dbr36%2Fg%2FrtmDvN1iwMzSEKKgrCopX6EmpqImVN0Lg6zcZnSVzftiOwC9NjF7XUQxQbSYzvd%2Fvgr%2F5dTetAahoupQ0zyCTH3v7X9GqIUY6BswDRUqSxeKWLzKsqtflYELSCVXhQCPdAYiigop47xutoojB7iEvCFjXM8E1Uawp7TNCmFeAbx5y1vd4kZoMBS1grIA4jMYL7Y9SXw6fafPrtvgs6ixSAh4HNqQhRiXM2NGQwv7jxvwY6pgESrmRQBr%2F%2FAVjsjVREJMy%2BBSmwSyRcV9XrWIKQKpyuNUfZsczQ2v%2BSHPNyFu%2FQ%2Fmfq6OXWf6DkHH02comZQ3ALTyU4GGQj8Cy1rW7Lsvr5RxbBbulh7MP7%2Fzh71fzOKfeOiJ9FlBmaDtdOXvPUHlXh7UYY2FstesDLQFGNOxzik20YoBybDnTUyFOQYCpPgtAYy0Lmec%2F8J7VLn7X1fe9glGADDPAJ&X-Amz-Signature=23b21ed54bbc8e925f7999dac11a00d1527d71a3e1e355a18e392dc5a5f61526&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE37LEYS%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T022355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGrC1Bhh6x2Eju%2BtwmpwkvtgJFOpacN8qKsSu3BoYRKAiEAsArWMFP%2FjiRtQkEHzXtBjACZgRBS%2F8VheDksvAQ7biAqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLa1aIxOtraHbYNdOircA8jtKONWVTNT9X3cE5lXQil1%2FhJjFFl8spyeHCld%2FF6lRHpl3pAiT0RI7lEwvqK%2FBpuB7ehB1sc34Uy7tqFQ9otuVfcEM4h1hmMqGV1YiVz0IXxAVNE1twkYjwZZjNyRPWGmBKk5BjYONT4w2mvfpiWnjqfTNsVA7%2FaPMp%2BNKr94pS2zgDvxASr%2BKhnKKfELF0ha8z%2FF2W6G%2FvAERvs5Tr5ZECmgWHcZL7kYhEHb8LOtr6l2McPfqtP4Wrvkxpwi%2BWSjFch%2FfAhjQhDaEbuOhJ2nfGKPhUo3pD80zoh%2FNyEQe%2FvCb6gKJxM7Td%2FClCQBZX1aKGy7wsLHMdV4s4%2Bnqj%2B9%2BkrhQGsKoTRpg5WVcvMQDCDtYKP42DthWbZRSUpxhdoLH8Verv2ixbu%2B6Fw8AUPwAgzG7uSWmOWFHMfAmQuaJElcGtuGZHUPxhtxpLjGOeVW%2BINoNsPu9e4moenUyzX%2BruYEOt0SO9SDBLHlPfTOt%2FjIOceP%2F%2Fz8l9eqFCVZIAifD7WOjQ%2BWfI4gLDPFLBIXZTS1rUoI%2BaV239T58iLnpFKLdVvzgNQjLbFj5dstXwmPL6oHUrfBEr7X4d9uwCKCfEqiEPBdaeUUIbW64y0lnm%2BHCMrL9jHcFBuBMPe48b8GOqUBZO5xSviB6nuXwa0LIVu0r3GrU%2BcOwFiuxhMEtw9O7RCF7PobYzYHtQeIiuWemuWz%2BMea0AQnmddq3wqbs3jcw7HWvK4M8nrc1ZmfaY83djTcX8%2F868jZPQw4rERSUEUHAIOXHh5A%2B47dV3IR3kDB2qgdOQbFY9F3wdREVVahgr8XSL%2BS2vuO0X6GIgiqhsbER%2Bpb6NIo4U%2BbvDhfIzaA4Ro2n8OX&X-Amz-Signature=d15cfef1c0af6cffdd5d500ed0ef9064e35c82ee8611058c042c5c64016ed42c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SN2C4DL%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T022351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAeLXGmIN87VDfqu4wOb6ych4EcyPZuzgZnqRn24Qi8wIgTIeZG3u%2F7c3aPUraKeW823UdDzEm2PVTaD3ByXAFaUMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaTy0lcJ5OK4J10xCrcAzqX2ClBiRURbdW13G2siQpriBIbyM4WL%2FcD%2Fy%2BmYbMGhcMMFlbPFJWXjY23CQ5GOZNSkYQ%2BuK%2FLEmdHdu6G3WpT2wZH2MBQG24RdeTAVIDq%2B1vWFxAfuBIJLV6vtgK7t7nDkTZ2ltYP%2FBHECeJFjzzyPO0PBrew%2FuZsiwA3zLZ0A8lW5gZpcaGjhXUSICULvZkR4muZl6TR3PCq1b6aZMEfxFL8DFSp7eFqOPhtJu657j4v9GYu6IMij63htiBq6nsJi3PrdPNEd74DHQL6vNOLiaQuwduq6s0hXObdye3RRXbQFP6aOOPm1T3WJsHcuCMjcI7R0qQ%2FrqSRWTWi8vPFh7kEbNmAl3L1U8ojDd11rMBCp6b7BAA5kgywORM20Y7fHCRnNoR4B2flgHu%2FUEZMidLVnLD5poxHx0dh9TYQDWeKyEBYsouMFaavGh%2FNc%2FnWjHbGCAnOrHjKbeN3vnsUMLslQ8iQ4fFuXz4D55YVzTSLJpacOjq6gP9qIMlRfP%2F5%2B0btkhuZnyMka0R2DVlbXx9Ctmux%2FpQK9%2B8bYXmzLAjDA144rMG%2FxWFiybI4uDbU0jPt7NJSifyTK4QKYz8Ti9SC5bEApIFZiX1W5EYZF8hKPvtAgILcQB7IML648b8GOqUBjWvsnepSvUr%2BXxN4%2Fz8VYxJTGlR4Rfb2ZGqvveWwdFbgq5Ggisr%2Fk8xGUsOF4eHbmHSgZP1KnIl7RJR1VbLGFsSIYHap0tP7GgfLRyJxtbLA9CzjQsvPkpYe4451CtH%2BF4qRqEx9%2BUbCg6%2B%2FLMNhwQ%2F2iUO0nOO1mghOsV8ms%2BkCLUI5PVX6FfpQoP0boTfHo%2FGWw2NxoFOjh7lPKPHoP59U5qWU&X-Amz-Signature=a3ea3a96ec04bfb987db0d8c74d17dd7f52fe8e42583910146f43496cc4faef4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
