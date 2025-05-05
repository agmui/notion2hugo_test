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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYJYIC7Z%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIE4kCPmWpKHtpJJpkVucgLAyVH9n2PTjEyipOWzwLmTdAiBHKXmGdfBv381%2BtlVsa4swY2q3teD4BmOE%2FjBDXYXPiir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM8SlPYg0uckT6ITkaKtwDrhdA2jgNHP5A1vmv%2BanGE%2FmCDy4Z3q1KI%2Fq9UK%2Bh5vlfS9qFhI2CGSns%2BCQJrnPt2tK9A%2BPYyQieNno%2FiMybx%2Bx38EKFKdKuuruX1NVK4HVm%2B63t0i6aGsxoA%2FENZb6FAXsE9Cg8NdG5SrvI6OZsAL%2FKrUBbofVmTPehjHdrXoUOczW7K8d%2FzwG9ccorD9984cx0T9WdIp0rpcYd3qo5RdSxODp%2B4jYShls7ZZuUkRmNDVcSlu41NE2abADPVzWLWazxlfetGUQ%2F4SdDSPTlodjMOJfJ1o4w8tQPRsKvZyNEmnDCRRL4jMt0HU6WVwmZtl39YmnWGHdDBeC%2FaxBzDLtEzCvNkHgdaa2EZIeVB%2BeYuGvindJqDxEB7lLDjTY1Jez77ZaemEZpNeb8u69XfgGxEcYCPFPb%2F0%2BkqZzTySPj17UqnqfO%2FfsT2RKs9K8%2BxZNF%2FPRDWJgl60CgzUNxxHEvJ10gNfVJd0GrEs%2B%2BsprXz11iIJbc3pTJyBR6fAy1pcXdMCM%2BfiqtwsgDSkXjXI7ZdiCHMfHGnIE53zeuvmb6Pv83pLgRHM%2FPXVVs5tMypVF0nx5kJ0kpSWlIb4CBkBEP1vWgeOSym15g64n8ZyTNbJbLKK6ZqjowKr8w9azfwAY6pgG6OkDuCG3h2eXF7S5yCBcvX%2FN2gHsCyO3pBdT8fgJE5cHAAuN4yk8mgwMXe06sqkpbYFnvku665yGWW7XquL60XJ2TYOFJGJIlhHFe6oFA4IMeVb%2BW3MPHfS3XP98WdqLAM7jKoQ26SCDZHacpLAdh%2BCBrVnWfy8FZQ72I0Ukri7prr3imghOl6bvSMLHmXzRPXGzkAhUObC%2BIUAGSEPV%2FST4OVNh1&X-Amz-Signature=d9575aca9ef964eee99f79a91ed0b601a201840eb42e412fb1b9b4d25454bfbb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYJYIC7Z%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIE4kCPmWpKHtpJJpkVucgLAyVH9n2PTjEyipOWzwLmTdAiBHKXmGdfBv381%2BtlVsa4swY2q3teD4BmOE%2FjBDXYXPiir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM8SlPYg0uckT6ITkaKtwDrhdA2jgNHP5A1vmv%2BanGE%2FmCDy4Z3q1KI%2Fq9UK%2Bh5vlfS9qFhI2CGSns%2BCQJrnPt2tK9A%2BPYyQieNno%2FiMybx%2Bx38EKFKdKuuruX1NVK4HVm%2B63t0i6aGsxoA%2FENZb6FAXsE9Cg8NdG5SrvI6OZsAL%2FKrUBbofVmTPehjHdrXoUOczW7K8d%2FzwG9ccorD9984cx0T9WdIp0rpcYd3qo5RdSxODp%2B4jYShls7ZZuUkRmNDVcSlu41NE2abADPVzWLWazxlfetGUQ%2F4SdDSPTlodjMOJfJ1o4w8tQPRsKvZyNEmnDCRRL4jMt0HU6WVwmZtl39YmnWGHdDBeC%2FaxBzDLtEzCvNkHgdaa2EZIeVB%2BeYuGvindJqDxEB7lLDjTY1Jez77ZaemEZpNeb8u69XfgGxEcYCPFPb%2F0%2BkqZzTySPj17UqnqfO%2FfsT2RKs9K8%2BxZNF%2FPRDWJgl60CgzUNxxHEvJ10gNfVJd0GrEs%2B%2BsprXz11iIJbc3pTJyBR6fAy1pcXdMCM%2BfiqtwsgDSkXjXI7ZdiCHMfHGnIE53zeuvmb6Pv83pLgRHM%2FPXVVs5tMypVF0nx5kJ0kpSWlIb4CBkBEP1vWgeOSym15g64n8ZyTNbJbLKK6ZqjowKr8w9azfwAY6pgG6OkDuCG3h2eXF7S5yCBcvX%2FN2gHsCyO3pBdT8fgJE5cHAAuN4yk8mgwMXe06sqkpbYFnvku665yGWW7XquL60XJ2TYOFJGJIlhHFe6oFA4IMeVb%2BW3MPHfS3XP98WdqLAM7jKoQ26SCDZHacpLAdh%2BCBrVnWfy8FZQ72I0Ukri7prr3imghOl6bvSMLHmXzRPXGzkAhUObC%2BIUAGSEPV%2FST4OVNh1&X-Amz-Signature=0e98a3d1f74ac7ed6a20b1fa10367fdd07c3de117428cc236ee7fdd595eee027&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYJYIC7Z%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIE4kCPmWpKHtpJJpkVucgLAyVH9n2PTjEyipOWzwLmTdAiBHKXmGdfBv381%2BtlVsa4swY2q3teD4BmOE%2FjBDXYXPiir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM8SlPYg0uckT6ITkaKtwDrhdA2jgNHP5A1vmv%2BanGE%2FmCDy4Z3q1KI%2Fq9UK%2Bh5vlfS9qFhI2CGSns%2BCQJrnPt2tK9A%2BPYyQieNno%2FiMybx%2Bx38EKFKdKuuruX1NVK4HVm%2B63t0i6aGsxoA%2FENZb6FAXsE9Cg8NdG5SrvI6OZsAL%2FKrUBbofVmTPehjHdrXoUOczW7K8d%2FzwG9ccorD9984cx0T9WdIp0rpcYd3qo5RdSxODp%2B4jYShls7ZZuUkRmNDVcSlu41NE2abADPVzWLWazxlfetGUQ%2F4SdDSPTlodjMOJfJ1o4w8tQPRsKvZyNEmnDCRRL4jMt0HU6WVwmZtl39YmnWGHdDBeC%2FaxBzDLtEzCvNkHgdaa2EZIeVB%2BeYuGvindJqDxEB7lLDjTY1Jez77ZaemEZpNeb8u69XfgGxEcYCPFPb%2F0%2BkqZzTySPj17UqnqfO%2FfsT2RKs9K8%2BxZNF%2FPRDWJgl60CgzUNxxHEvJ10gNfVJd0GrEs%2B%2BsprXz11iIJbc3pTJyBR6fAy1pcXdMCM%2BfiqtwsgDSkXjXI7ZdiCHMfHGnIE53zeuvmb6Pv83pLgRHM%2FPXVVs5tMypVF0nx5kJ0kpSWlIb4CBkBEP1vWgeOSym15g64n8ZyTNbJbLKK6ZqjowKr8w9azfwAY6pgG6OkDuCG3h2eXF7S5yCBcvX%2FN2gHsCyO3pBdT8fgJE5cHAAuN4yk8mgwMXe06sqkpbYFnvku665yGWW7XquL60XJ2TYOFJGJIlhHFe6oFA4IMeVb%2BW3MPHfS3XP98WdqLAM7jKoQ26SCDZHacpLAdh%2BCBrVnWfy8FZQ72I0Ukri7prr3imghOl6bvSMLHmXzRPXGzkAhUObC%2BIUAGSEPV%2FST4OVNh1&X-Amz-Signature=b153cde357f20896f2761329d301e8a6743ac428e7c01d64fecf508887738e2a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7WSPJJC%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDuQJGoYKsIL%2BAGVT%2Fn9JnIGifhGw06prYyfey18itO2wIgGr2fdyN290l7n8IhGRqLiVo9JtDSSZKdl0raRfDEtm0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFMppoAvO6oupoFskyrcA0%2F7v%2FnmD5XFPxjbEjotCeAIVjH%2FsyDAhe4YvEJgVlM2HVXnC%2FFlNC8zvdSPtN6zT3zx%2BT02gO98tPyzh2563fHOB%2Bxwf03C87YilA%2FN2Gp%2F8rFRH5Fx%2FOBC2tKsUB10PD4WLwH2Cbe7GBfZ1nWWpkqClaUSnc9wYYPfDQ1xPfLqTHNokgVA8wLbIdNfabI%2FgjuGQtEVgs%2BtBYI6mv%2BNvoz6d0HjsCZieCvJQ9LR6CfPKDoYhKBu7%2F9zuch8%2FJ%2FPHoTgiSHYQr5%2BvuMHPa3PYxlBDWxlLROG8JPswemvqR1NFL2HyuYK72winsx4v638PlJQHUmwKcW2CiNoXILWlGGa%2BgtCVLsdvxDiNZ8f1H%2B81Ravc8g4Kv4TjVKPxbFFL7OYVXl7gjSLOYHdTtn615NGwby3mXu%2FEHGqTlZYhvsN3mnUURSQtrc3M3THduWaMK72Je2hgdiL2tLqqamoXclpUenwFNbCxxG%2Bub2q5WF4nQuUaOZioXK5HRjAQVnwZQi0ioNdIzrtrtUfHPzoC4hApVEm2AyLXxglaoZfyYBSsSlVGtEGUQwO5JOWQSBEBB02Ai9dUjOKWTlMSH7ziuzuBZJ1JtZvyyMvAgIyj0XGasgVGC%2FnPywBFigHMN2s38AGOqUBFv8KlXG8dFLthy92CxMp2b8fT4%2BV%2F3G5vTktpM2jwm1rULB255byot72HHYMF1ePomgpxsFBAkDH3fqSL3i4Rbd8rvtnPph2gmKrS6HFpZbON%2Bp2haQ4nLQHZO8yhEd041fVfx0FKGSKnTV9E9v7am5rQYDnl1eiUILZIYgTumJKXIPMRHTBdD%2B8CAJf%2FLUHvGQw4cp6imCDGEK11K3tUEboIw1d&X-Amz-Signature=f5647ae9894e52e45cf6b5316349f4ef32a539fbcc52ce4d57015281625b533c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AAUN3XN%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIGeDLwU3W47TVy5jHOSR3h2kQLXdDJcDlZZMckPzEP6JAiAadnQENMFMU6Oke6ZeuIWNe2tKw3epYwIih1RlYglRPSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMUEt%2Fa7%2BOz49W6NNvKtwDyxvBieiT7KqKzlyG89Hv5InrPYi87hZoKJ8eFz3vJaDtFnoy%2FWhrgIYQ0jsOjI42QrqngJ2TGRtTge0TM1mMp%2B8y3L8zpN3IPNi%2BLNthh%2BgGFXlwm6Kqo2wGt4Xhl9w2EGUgaZAqwQbmL%2FEdKJHiwhwar%2BtW37K9iWV%2BWNWR%2BEw4F%2BpAOYbroWcWELbRGmJLhlevPRL0FdR%2B90SQSNjttmyAgIBV%2Fcs%2B%2B9uzHnx2Ak6zYTcG8EFTVySBtpQOuOh6WFWMfFXNl0ZhKmkxVONAnAx%2BMUzLVThM5Uel6S0wzDWYWnsc8Rf%2B1fKXr4csdmPqqXil2zHccNrrFGaOx2U1hnrQqm644GvV4VTtZB%2B1iSHj1ZKOL0LUP1X6t7w37M5LqfvOg2JoZ2Lv%2FsdOKXPEg2ndNlkTgSq7K7HTzA%2FSMahGSJUGPoP9INysPIQPp1TiztJGDyiW7IjQlC74bEDDChx63Dzg6rB65nRO8CICCUnTENCt7J6fGIHbzh8bPafiFHIPoGCN%2B6RK87NAcGabXBHjN8%2BxF6hURmcO8liOdVzUsoIPhHADNnoZzPSci4plL9oVLHi78MH%2B7k6llChxdg0mq1Inpe6ZZnIvSVLwrvYyce8O3hCyI2dScoEws6zfwAY6pgGKrEq33DuhqYC%2F76jBxY377%2FjOJIbcE63VavoJGJMP9NemUHponmDjV0V79VVocAaPzeG%2BzCT6zK5gMq%2BIguMhMYCCLsXcjD%2FPeMe9rjBWOV37LI7TsqR7FhZgzxIm99XTsS5Dwathvj9DmEyy%2FMe950j%2FsWHvFOe7qwRdCgQ4QWP83NFve%2B9Q7DqcP3ffPAQSGrgC%2BHA1IdSBcKkueK6Zt6OhzzwP&X-Amz-Signature=22cb41b11003788ab1c1d007a5dd066547d18d03dbc29d1c55734380558f93e9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYJYIC7Z%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIE4kCPmWpKHtpJJpkVucgLAyVH9n2PTjEyipOWzwLmTdAiBHKXmGdfBv381%2BtlVsa4swY2q3teD4BmOE%2FjBDXYXPiir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM8SlPYg0uckT6ITkaKtwDrhdA2jgNHP5A1vmv%2BanGE%2FmCDy4Z3q1KI%2Fq9UK%2Bh5vlfS9qFhI2CGSns%2BCQJrnPt2tK9A%2BPYyQieNno%2FiMybx%2Bx38EKFKdKuuruX1NVK4HVm%2B63t0i6aGsxoA%2FENZb6FAXsE9Cg8NdG5SrvI6OZsAL%2FKrUBbofVmTPehjHdrXoUOczW7K8d%2FzwG9ccorD9984cx0T9WdIp0rpcYd3qo5RdSxODp%2B4jYShls7ZZuUkRmNDVcSlu41NE2abADPVzWLWazxlfetGUQ%2F4SdDSPTlodjMOJfJ1o4w8tQPRsKvZyNEmnDCRRL4jMt0HU6WVwmZtl39YmnWGHdDBeC%2FaxBzDLtEzCvNkHgdaa2EZIeVB%2BeYuGvindJqDxEB7lLDjTY1Jez77ZaemEZpNeb8u69XfgGxEcYCPFPb%2F0%2BkqZzTySPj17UqnqfO%2FfsT2RKs9K8%2BxZNF%2FPRDWJgl60CgzUNxxHEvJ10gNfVJd0GrEs%2B%2BsprXz11iIJbc3pTJyBR6fAy1pcXdMCM%2BfiqtwsgDSkXjXI7ZdiCHMfHGnIE53zeuvmb6Pv83pLgRHM%2FPXVVs5tMypVF0nx5kJ0kpSWlIb4CBkBEP1vWgeOSym15g64n8ZyTNbJbLKK6ZqjowKr8w9azfwAY6pgG6OkDuCG3h2eXF7S5yCBcvX%2FN2gHsCyO3pBdT8fgJE5cHAAuN4yk8mgwMXe06sqkpbYFnvku665yGWW7XquL60XJ2TYOFJGJIlhHFe6oFA4IMeVb%2BW3MPHfS3XP98WdqLAM7jKoQ26SCDZHacpLAdh%2BCBrVnWfy8FZQ72I0Ukri7prr3imghOl6bvSMLHmXzRPXGzkAhUObC%2BIUAGSEPV%2FST4OVNh1&X-Amz-Signature=0292869ddcc24ef64a62bad73ad6b27a78eeeb09c8472a655868a9fc93755af0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
