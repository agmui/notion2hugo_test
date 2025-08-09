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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGFD3L5R%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkpgersZbGpJ3xgZAYn5JpOWqo82HybTk8yDwek9o4iAiEA0aymFewhM0S6Dw6S6%2FGsYaqQzooWZ3J3X9XlqbqCmmQqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6aZnLzJykTdp%2BCJCrcA%2BNG6X%2BgeKGbN9oIHD79toHhgRTZA9MTLncmPoyJHuCPMFtQtI3nHQCfMJ67pvqUpxpub%2FER%2BrH%2FjU0qCCATr83%2FAOXCL0fXCMyPCW%2BpwpPCzCC0xOBRDaoJjFRlhlvCRt7ErYQScsAqiKwMxUqztCONH5tfi%2BHudORycajjz4v0JZ8p%2BreMbyUlxxiYLRbEfi2meThFrf%2BZ6lCOPNyM6q8cKr%2FiOWmT5zuL1XvHxxIr%2F5aY8MLJqRwkg6APAjHv7xuf%2BNQI5b%2BDp62wUd0QX5cotL7FKtoS1i4DQ1ZKc%2BUC%2F%2F%2FVxEPEl56yjHTjHab9OUZAVF7CD%2BZ5nCC%2FeRkb2vg3MjmQa1B2xd1jrzVqvzcu2OdAbEViOLNXmqjHzUtzB5I3Q838kbiPWF80X%2BQRCXkq4P%2FOVnsSE4hpMybQd0LgFE3Q2Fa0ZIfzU5dMsZctSIR%2BpLyivYXo1WmRDNcykRxCT90MlCXHpp5URoVKt2QhArgUeUmIEnsm5RSVgruHggkGpXkvcRGfYoPIS1BctBSlmjZtG%2FkbZPdCUMToru2RkHSZHXmQur9xOYNvYzkI4dIUHxqxh0Ocwpnp1%2Fvhc1322gfzTKoh6soece2HvXMtMvmxyOdcCtG4tL9bMNPp3MQGOqUBw%2FzW9yanJT8hicLxZXuG2puOF5hjbcFBcIrmsyV4xp7KYDRzedi96VmRRCuSy%2FBBtWA5iUt7WozxTlLYLMVR5oAZzX4VSWVQmQGIWTKUnWp3gMW72Jsv2XyUeI%2BR%2FSzgasSUMlnCs0uurxUD%2BEYrVpeC0Jl5oaPVuppzpivTHrW8olXcS5t5oy3zCFlg6DIkTPTinwVDGuu1LVz8fK1R1d1Y6aSc&X-Amz-Signature=88287ae3dc351d99abebe53b5d8b7a1001abddc8f7c0155230504fa7b11f96fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGFD3L5R%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkpgersZbGpJ3xgZAYn5JpOWqo82HybTk8yDwek9o4iAiEA0aymFewhM0S6Dw6S6%2FGsYaqQzooWZ3J3X9XlqbqCmmQqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6aZnLzJykTdp%2BCJCrcA%2BNG6X%2BgeKGbN9oIHD79toHhgRTZA9MTLncmPoyJHuCPMFtQtI3nHQCfMJ67pvqUpxpub%2FER%2BrH%2FjU0qCCATr83%2FAOXCL0fXCMyPCW%2BpwpPCzCC0xOBRDaoJjFRlhlvCRt7ErYQScsAqiKwMxUqztCONH5tfi%2BHudORycajjz4v0JZ8p%2BreMbyUlxxiYLRbEfi2meThFrf%2BZ6lCOPNyM6q8cKr%2FiOWmT5zuL1XvHxxIr%2F5aY8MLJqRwkg6APAjHv7xuf%2BNQI5b%2BDp62wUd0QX5cotL7FKtoS1i4DQ1ZKc%2BUC%2F%2F%2FVxEPEl56yjHTjHab9OUZAVF7CD%2BZ5nCC%2FeRkb2vg3MjmQa1B2xd1jrzVqvzcu2OdAbEViOLNXmqjHzUtzB5I3Q838kbiPWF80X%2BQRCXkq4P%2FOVnsSE4hpMybQd0LgFE3Q2Fa0ZIfzU5dMsZctSIR%2BpLyivYXo1WmRDNcykRxCT90MlCXHpp5URoVKt2QhArgUeUmIEnsm5RSVgruHggkGpXkvcRGfYoPIS1BctBSlmjZtG%2FkbZPdCUMToru2RkHSZHXmQur9xOYNvYzkI4dIUHxqxh0Ocwpnp1%2Fvhc1322gfzTKoh6soece2HvXMtMvmxyOdcCtG4tL9bMNPp3MQGOqUBw%2FzW9yanJT8hicLxZXuG2puOF5hjbcFBcIrmsyV4xp7KYDRzedi96VmRRCuSy%2FBBtWA5iUt7WozxTlLYLMVR5oAZzX4VSWVQmQGIWTKUnWp3gMW72Jsv2XyUeI%2BR%2FSzgasSUMlnCs0uurxUD%2BEYrVpeC0Jl5oaPVuppzpivTHrW8olXcS5t5oy3zCFlg6DIkTPTinwVDGuu1LVz8fK1R1d1Y6aSc&X-Amz-Signature=af76f17cba30f4cba78aff15c14745d62e1e8f29ee3c883f36e9a759215abaeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGFD3L5R%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkpgersZbGpJ3xgZAYn5JpOWqo82HybTk8yDwek9o4iAiEA0aymFewhM0S6Dw6S6%2FGsYaqQzooWZ3J3X9XlqbqCmmQqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6aZnLzJykTdp%2BCJCrcA%2BNG6X%2BgeKGbN9oIHD79toHhgRTZA9MTLncmPoyJHuCPMFtQtI3nHQCfMJ67pvqUpxpub%2FER%2BrH%2FjU0qCCATr83%2FAOXCL0fXCMyPCW%2BpwpPCzCC0xOBRDaoJjFRlhlvCRt7ErYQScsAqiKwMxUqztCONH5tfi%2BHudORycajjz4v0JZ8p%2BreMbyUlxxiYLRbEfi2meThFrf%2BZ6lCOPNyM6q8cKr%2FiOWmT5zuL1XvHxxIr%2F5aY8MLJqRwkg6APAjHv7xuf%2BNQI5b%2BDp62wUd0QX5cotL7FKtoS1i4DQ1ZKc%2BUC%2F%2F%2FVxEPEl56yjHTjHab9OUZAVF7CD%2BZ5nCC%2FeRkb2vg3MjmQa1B2xd1jrzVqvzcu2OdAbEViOLNXmqjHzUtzB5I3Q838kbiPWF80X%2BQRCXkq4P%2FOVnsSE4hpMybQd0LgFE3Q2Fa0ZIfzU5dMsZctSIR%2BpLyivYXo1WmRDNcykRxCT90MlCXHpp5URoVKt2QhArgUeUmIEnsm5RSVgruHggkGpXkvcRGfYoPIS1BctBSlmjZtG%2FkbZPdCUMToru2RkHSZHXmQur9xOYNvYzkI4dIUHxqxh0Ocwpnp1%2Fvhc1322gfzTKoh6soece2HvXMtMvmxyOdcCtG4tL9bMNPp3MQGOqUBw%2FzW9yanJT8hicLxZXuG2puOF5hjbcFBcIrmsyV4xp7KYDRzedi96VmRRCuSy%2FBBtWA5iUt7WozxTlLYLMVR5oAZzX4VSWVQmQGIWTKUnWp3gMW72Jsv2XyUeI%2BR%2FSzgasSUMlnCs0uurxUD%2BEYrVpeC0Jl5oaPVuppzpivTHrW8olXcS5t5oy3zCFlg6DIkTPTinwVDGuu1LVz8fK1R1d1Y6aSc&X-Amz-Signature=0efb2492092190eb0c4aa5f5f02bae0cff62e5df50f88b28c4df7335611b5584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWXREZM6%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2Fdy5EbQwfoq0tMp4b2pDP0IF07wi5PtHKSYOIAhoI0AiA6SpWb13w6yFmhgyS%2Bn0UrWWkp1V7hfeJIvPb0Ywca%2FiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7P7%2FqW%2BuUicEdFMKKtwDETKEO2GRSKXrqYBEISkVWVBa23MfVC8CoeMv6f7qw%2BCPugtRshnEiDxsvy5mr4TsL7FeardowH2OmRPM1yjaSmtH%2BX48cezvhNLNl3SRN2qf%2BVrHGHJggVr%2BiKdtIElinrFK0LQN6HBXO0H0LbXI7m4qTwWj0E352hvjqO7Ovp75xj6BM06uLJ62owvzSioe4bCu8SA0Kfmf%2FBXpExsuHmuMMgmAVYTKcWnzKgSMLFfZqSTsddfj1KAQjtpbmDXYzCut14Vwb%2FV0I3W13AK9Q8xYIIhqBagJIgLjujr%2B3eT%2BuBe31phvbisDhXJz2srMHoesLYTjfavNq7CuB4xsRSXjVb4leVypP9pm6lZqZeUkhy457E%2FbuEEh7UPr81Q55%2B%2FLp56CKjxFf6cOFTsmaEkax5hCTSepZafnFpiSerTwI9epd%2F19xK77UYyG1Nr4djryK7Wf0m4HHYf%2BHZcPL9qw6ym9XEflenSHhBvj1zZGqulzylrDwu3HPkNqYpm%2Fb14nRYnHZ5Fe6G4tyEiKi63fmWMyjmU8dJ7RMcGty2%2Fw2Oz9pAb6b8%2F9FWIFStWcS7l62Zmmfzv1jgJeve%2B3Pf486%2BJ1HPIE2ckBee07rkoRy6nqIyuOTd8xnugwzOjcxAY6pgEJEMvexFHmQXPIAZ98cVVcr%2FnQVO2zJ1kirZyy8ipvMI%2B4FxCRzwEgm59y6Vc5HjZ8pVCmLiQAOmRaUW42HHiZg%2Bphoxef8RQQLvNJSS%2FZjv0Q45GyF62wLBRmkLS9WZOkTGlBjIf%2Frv1YIQi3gG%2BtXIr8vTaIwvGNjqVrn5s9AIWRpMSUpKb1eqihzYY6D7bDxNXbMKDvCnopDR3GoNtRsIfO4%2B7n&X-Amz-Signature=bd10137a57fb76500bf999a713e0e02b18e11f8fae50e642f13e65344b1a00c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCSOOZIX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXWhqPGyljyd99864Ttn%2F8nfnHQ0H1HAplYgfpIzTWQAiB7D2t%2FxvirIdz2tUb8Yamt0f1K9xygHd5K05y2EkbSFiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYVuNolafm4XDIiNXKtwD5cUC4JYJ%2BRdtInTmC%2FKvdurn12LA%2BCi4VGPltrJx%2FVog8qO%2Fmb4ku8%2Ble%2BBoIETZDcNoBnmkQxl4gSm3Z4IAIjlrfb99xeGeClF0rmFKIfvkqvB6XxO%2FfIJ6O7RGrNupHnoYq2SKXWyyDfzHpAGGBHuZULaUUWbcd7VBaJodM4nP%2F0%2F4hcTrYXiiUw1CxbdqucoXWUJG2eMPOGYPos9jm%2F%2BivGKVDQjCBPFv%2B%2B33%2B5fQOJ%2FLmCbfDfnYgab6iml9QUBx0hIjiTJoPGFIrJnuz4yPAsSyFQpqLsQG6yAIm66hcKGqrCn0nARCS44noHdXZB4jySoSWnlTzBwsfXgb6tnowr7ObX0nuxRua4YCVU5mCp%2FUl4ZLOKpoyLaWukxn1K3fVzkYGQ8NLwq%2B6bFurChXhKkiCbtMsbwiMv6ZoK8tpMWCwpl3aK%2FQVhFUnSXCEWxMzVIF7qlzLThIaAPfr%2BSkx%2FPr%2Bm9P7dd2R8ro3kOiePskUvR3s0UK4HH%2BBJTaz15SHUEB2Hhh9o%2FSWM3VoMIssY3DDtwgVZWHIG5Xt4GGCv9U2ltSLubOQJRehhwOlFlZtuUYA5qKygvBclx9lqTxqGLkXpNe0lZXg%2BdySG5E4gRDXCBcZWKkwmgwtuTcxAY6pgEUzmMw6t1Jm9gVoMHJVMdSY7z0OvwkjDkD8l8Z3hYzu9%2FFOLyI5YPMPRnPCfyGgQgurkLMoFt56zeRkQFFFaowk6FBkqwL3f6zUyFWjpue%2F%2BQ42qW3SuNHGfqNtW698KcfBXH%2BDvOrA38xZzxfLADhY2g7NvzVgygcDN1INlJEd79%2FSq1Fdiipcn26Q7MGcB1WrddgE8mRowwUSw7v9GA0eUE4h4O6&X-Amz-Signature=8d64a2208249e6b13b905cab1648156491fef332d2e0cd866fecd5d01cf2e45c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGFD3L5R%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkpgersZbGpJ3xgZAYn5JpOWqo82HybTk8yDwek9o4iAiEA0aymFewhM0S6Dw6S6%2FGsYaqQzooWZ3J3X9XlqbqCmmQqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6aZnLzJykTdp%2BCJCrcA%2BNG6X%2BgeKGbN9oIHD79toHhgRTZA9MTLncmPoyJHuCPMFtQtI3nHQCfMJ67pvqUpxpub%2FER%2BrH%2FjU0qCCATr83%2FAOXCL0fXCMyPCW%2BpwpPCzCC0xOBRDaoJjFRlhlvCRt7ErYQScsAqiKwMxUqztCONH5tfi%2BHudORycajjz4v0JZ8p%2BreMbyUlxxiYLRbEfi2meThFrf%2BZ6lCOPNyM6q8cKr%2FiOWmT5zuL1XvHxxIr%2F5aY8MLJqRwkg6APAjHv7xuf%2BNQI5b%2BDp62wUd0QX5cotL7FKtoS1i4DQ1ZKc%2BUC%2F%2F%2FVxEPEl56yjHTjHab9OUZAVF7CD%2BZ5nCC%2FeRkb2vg3MjmQa1B2xd1jrzVqvzcu2OdAbEViOLNXmqjHzUtzB5I3Q838kbiPWF80X%2BQRCXkq4P%2FOVnsSE4hpMybQd0LgFE3Q2Fa0ZIfzU5dMsZctSIR%2BpLyivYXo1WmRDNcykRxCT90MlCXHpp5URoVKt2QhArgUeUmIEnsm5RSVgruHggkGpXkvcRGfYoPIS1BctBSlmjZtG%2FkbZPdCUMToru2RkHSZHXmQur9xOYNvYzkI4dIUHxqxh0Ocwpnp1%2Fvhc1322gfzTKoh6soece2HvXMtMvmxyOdcCtG4tL9bMNPp3MQGOqUBw%2FzW9yanJT8hicLxZXuG2puOF5hjbcFBcIrmsyV4xp7KYDRzedi96VmRRCuSy%2FBBtWA5iUt7WozxTlLYLMVR5oAZzX4VSWVQmQGIWTKUnWp3gMW72Jsv2XyUeI%2BR%2FSzgasSUMlnCs0uurxUD%2BEYrVpeC0Jl5oaPVuppzpivTHrW8olXcS5t5oy3zCFlg6DIkTPTinwVDGuu1LVz8fK1R1d1Y6aSc&X-Amz-Signature=b28333aed13163241cb0a378b2f1434b401f965f3cf9bbddbfdc25e31f3d0c51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
