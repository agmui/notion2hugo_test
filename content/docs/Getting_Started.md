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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EJDHTK3%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T091026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUdifF9nBSzbBwXeinQaWAuuefkXYCj9GI2%2BYMZINzJAiA7kXZZtw3Oqzl0TTP7Hsflws5hFvn95qp77F4plViStSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDri1jrlUj9YQ9FabKtwDqcWL6v%2B4wLJi1i4b%2BDek6qq6YSqiIPKECJDTUteaICPJnv7fYN9dGNBJq4EH91sv%2B55BIFYeIyfvE%2Buw%2Br%2FR2%2BDSnZeDF80BNPFq8139yxqdrqTU%2BdhsE0dIGO622sUPl6vy4fHz%2B1g8HLOfMkzS8tO7sxDRBGNEA34a5R%2F8yLtw%2FEKTW%2FI3uzwvzBSA9BokHuwm4kltt4wWXNgIgfQip%2BGo5yUY1FlK0XztImPu%2Fr%2BMzRUNQZeV1zK%2FDfoUlBXWWlVQxE4TOn712WT6RDl2C4Sjjrh9jYhDY0XWKlHuQOncG1AqBeKrR6JtQgyOijNVTV2h5WdPLHw4yFJs0x88FDDbTeFh5d5wBFo31lnxK2JILcR5M3ISsFj9ZREK%2FQGoOy9mWJE6jfaVNB8JqYgr%2BkOsTjQBVH54uh9ZtAy6Dq5g4e%2BpkY1lw5uDS62gelYHa7YXxvj%2FXmxBGT5kd2Qt4yP9v6yH6fRWrq0RPPlQ9p0pGq6l7jJYDUXGN%2B3907I%2FQ7JTn1Jhy8NiJHwy6TymdDPDTaffZmAXbalT5oJqiUEgh2HsfDXRM%2BxkdnIG5Cmt4uEYEZ%2BcPePuwFDCu%2Fz2KM17%2B%2BFdVxZ4JYWXHgKAsg0crF%2FZlGNmpsAkyMMwzt%2BfwgY6pgFXuCXOkGTYaUBTvzvPxyucwSVDdTY9DiVSAcTMhKAYuy3rLgV9DgyKH2T0rb%2BaOP89u57yBsFR9brtNQjU4opsDvjLelU16dfXWptWTpbZtuHQPpgktmM%2BcAHPBt5R%2Bgk5LbsGzupiL4w1n%2BlxixlgMH9hQH7Af9JXemoyP9E6Wo%2B36qsr5M%2BO7kK28BAtGvdmeUkXAY%2FK2DAAdaAJjEUgBC7%2FLiog&X-Amz-Signature=ea83bc2ab5a5268de43b64f0ed6b84c047996522574e7d5bec21468ccd0fa44b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EJDHTK3%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T091026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUdifF9nBSzbBwXeinQaWAuuefkXYCj9GI2%2BYMZINzJAiA7kXZZtw3Oqzl0TTP7Hsflws5hFvn95qp77F4plViStSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDri1jrlUj9YQ9FabKtwDqcWL6v%2B4wLJi1i4b%2BDek6qq6YSqiIPKECJDTUteaICPJnv7fYN9dGNBJq4EH91sv%2B55BIFYeIyfvE%2Buw%2Br%2FR2%2BDSnZeDF80BNPFq8139yxqdrqTU%2BdhsE0dIGO622sUPl6vy4fHz%2B1g8HLOfMkzS8tO7sxDRBGNEA34a5R%2F8yLtw%2FEKTW%2FI3uzwvzBSA9BokHuwm4kltt4wWXNgIgfQip%2BGo5yUY1FlK0XztImPu%2Fr%2BMzRUNQZeV1zK%2FDfoUlBXWWlVQxE4TOn712WT6RDl2C4Sjjrh9jYhDY0XWKlHuQOncG1AqBeKrR6JtQgyOijNVTV2h5WdPLHw4yFJs0x88FDDbTeFh5d5wBFo31lnxK2JILcR5M3ISsFj9ZREK%2FQGoOy9mWJE6jfaVNB8JqYgr%2BkOsTjQBVH54uh9ZtAy6Dq5g4e%2BpkY1lw5uDS62gelYHa7YXxvj%2FXmxBGT5kd2Qt4yP9v6yH6fRWrq0RPPlQ9p0pGq6l7jJYDUXGN%2B3907I%2FQ7JTn1Jhy8NiJHwy6TymdDPDTaffZmAXbalT5oJqiUEgh2HsfDXRM%2BxkdnIG5Cmt4uEYEZ%2BcPePuwFDCu%2Fz2KM17%2B%2BFdVxZ4JYWXHgKAsg0crF%2FZlGNmpsAkyMMwzt%2BfwgY6pgFXuCXOkGTYaUBTvzvPxyucwSVDdTY9DiVSAcTMhKAYuy3rLgV9DgyKH2T0rb%2BaOP89u57yBsFR9brtNQjU4opsDvjLelU16dfXWptWTpbZtuHQPpgktmM%2BcAHPBt5R%2Bgk5LbsGzupiL4w1n%2BlxixlgMH9hQH7Af9JXemoyP9E6Wo%2B36qsr5M%2BO7kK28BAtGvdmeUkXAY%2FK2DAAdaAJjEUgBC7%2FLiog&X-Amz-Signature=98c761a2196125e33274a6d8ec434932a55bdad8f5785e4b2f93252b684dc803&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EJDHTK3%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T091026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUdifF9nBSzbBwXeinQaWAuuefkXYCj9GI2%2BYMZINzJAiA7kXZZtw3Oqzl0TTP7Hsflws5hFvn95qp77F4plViStSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDri1jrlUj9YQ9FabKtwDqcWL6v%2B4wLJi1i4b%2BDek6qq6YSqiIPKECJDTUteaICPJnv7fYN9dGNBJq4EH91sv%2B55BIFYeIyfvE%2Buw%2Br%2FR2%2BDSnZeDF80BNPFq8139yxqdrqTU%2BdhsE0dIGO622sUPl6vy4fHz%2B1g8HLOfMkzS8tO7sxDRBGNEA34a5R%2F8yLtw%2FEKTW%2FI3uzwvzBSA9BokHuwm4kltt4wWXNgIgfQip%2BGo5yUY1FlK0XztImPu%2Fr%2BMzRUNQZeV1zK%2FDfoUlBXWWlVQxE4TOn712WT6RDl2C4Sjjrh9jYhDY0XWKlHuQOncG1AqBeKrR6JtQgyOijNVTV2h5WdPLHw4yFJs0x88FDDbTeFh5d5wBFo31lnxK2JILcR5M3ISsFj9ZREK%2FQGoOy9mWJE6jfaVNB8JqYgr%2BkOsTjQBVH54uh9ZtAy6Dq5g4e%2BpkY1lw5uDS62gelYHa7YXxvj%2FXmxBGT5kd2Qt4yP9v6yH6fRWrq0RPPlQ9p0pGq6l7jJYDUXGN%2B3907I%2FQ7JTn1Jhy8NiJHwy6TymdDPDTaffZmAXbalT5oJqiUEgh2HsfDXRM%2BxkdnIG5Cmt4uEYEZ%2BcPePuwFDCu%2Fz2KM17%2B%2BFdVxZ4JYWXHgKAsg0crF%2FZlGNmpsAkyMMwzt%2BfwgY6pgFXuCXOkGTYaUBTvzvPxyucwSVDdTY9DiVSAcTMhKAYuy3rLgV9DgyKH2T0rb%2BaOP89u57yBsFR9brtNQjU4opsDvjLelU16dfXWptWTpbZtuHQPpgktmM%2BcAHPBt5R%2Bgk5LbsGzupiL4w1n%2BlxixlgMH9hQH7Af9JXemoyP9E6Wo%2B36qsr5M%2BO7kK28BAtGvdmeUkXAY%2FK2DAAdaAJjEUgBC7%2FLiog&X-Amz-Signature=67e3929ec4955913d21e43f05ceb6920cd9f2b230343e2a077d5513f87c3b31b&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AXOMDUN%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T091028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1z3n%2FVZQ%2FE1SP%2F3k6jKuXGxa%2BMYyPsVK0TA00Vxz4BAIhAJ666YVScKo4NfQA3mzKzwUIsQc%2B%2BCuLVB3Y79eBnnlyKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwASb17%2Bswjdq1onAwq3APr6w24IBL6UBruKiOab%2BbyllAS26f6A%2F4MZlfdEiGi3ESiIofoCHFn4wE1aaPxhE0DbkMPzfPvLsJtgm%2BaRejPk3ZQw0i9VrxQ1w%2F7yG3zWwIdzEma78pwNJBvY28JDrwtCpz6a3vWdkw0Zmw%2BkS%2Bhel7k2fUbO5Q50DZgJoukw0Bo%2B7%2Fh59y08yBBtXqqlbAPvuY6F4yqfNktR6I8SHiaBic55GfKHHp93J9CyfnNXupI8imAgEco8xSq94C%2B9v4LyPl5o2Xa8GlX5%2BhvCyXreltAOMg8JjN6i1BvEmOSlqy1NPlBldJ9S%2Bnvre5OP%2FT76%2Fqp2Gl%2Biby5oULdVEFQ%2BMb0IcLfAidka0JfIi172sZS4NhIiQLwwXD9mYln1tFWd%2BRg4B1%2B10be%2FeLcEw4CuC51O1iAREmD2kTv0%2B6h6puhDmsjXiTGJ5WxQqJANtj2P9dc4MsqfMrk8QGT0KajrSaU0W5RimDELkc7GWsHYBu01j0UevaaunT2gM0zRN1KFm%2FeMjYK%2BVun%2F2Fr7RQS6nVCQNCtgLYtGe9Qglt0k5%2Btj9o5H51xGevpOhdOqIHg%2Fj0cCr%2BtUMbuqhuT01Yr%2BWfyCAbX430Zas6M8GgxadCzFXlp9dzlV6hudjD93p%2FCBjqkASXgzbIUro5abKGRM1rPakwl5ZFateFBPOrJxT0Mm9rgcjBytoI5ylargTeSTIxpcm3lcdxdoRvOYbch1gu3ttSPgftqU%2FkzW3Ji5De5%2FUKA8jFG6j%2B6OyDhtbWBIUKcBlcNllLFCTKYh60XPzXNSE%2FLBxjLCNkLHiZZgn47241guirHavQEybTJbiy%2BKvu%2FkjWjeHQsQfJANzKSnNPOY1Fndzm0&X-Amz-Signature=b3813b90e87a272c3551461db26a82ef93defb986b150fdcd47250a4254d0593&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5HI2URN%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T091029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwL%2Fyl7uGwFQ2ve8QbXm9RpaGXimLSs8ws26TjQvNOhAiEAll%2FUeQ6k4OAbqDPsxz3XhYB76bP9PNnQEBY0VHXOINIqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2mbV2fe3rLSamC%2BircA7y2T9R1ImVp9s8JgFlOhNzHzh1NYh5PRDG6MHC9GbrzCpYE10Mf7s%2B%2B4qs6NTlwVeKgEryYadLt0FWt4N6sWmiIuF8uOlWoWtfz3JWq62pA4y27VUIi2PQSUPS1cJHKVgx3fnNWZ5zOu4OcBM6uaDWNRbfHM7ap5qIpMe%2FVAtQbgXTOuGfkYgBaD9h2Z%2F7ZzjX9LFYgeBELuaCV4ZztSQ4kSqg3un2x9qfXxM121k1dXIbFtXpwcx0zlhTecZSazzGr%2FBnymxJ88pk9lKEXxUhyfN6SP2gEtlKkJ%2BRU1XiOodi517wKsnVwInSIp6xAaX10m%2BoWdJ3FAmlpDUTS78th5Gx8iVRlD9YGpgAo%2B5Kl3lpKZzVpEkmBiuhbCJL60nZtYY5a8bxqnYBY%2F2d7Xa5pzIMkin0yxUWRmcT3yd2jd5%2BnTodN90mtuiVTmTaEPTeWiLCRK3aFogptEbwx275v3WYkxuxkvtrvPG4r6hpfVkCB0gHbRRNv5rQ%2Fg34kJ3DtWiUoegu0%2BdswV%2FaAGX1ER37umojsPzH2vmhY4WFeL%2ByOEhdyrlqVmbEP4iAKs%2B5NbtXEFei9XVDCS216Q0ubCR7C5oiao91dNBj%2Fs5C8CMCGO7CWRc3X%2BfHIMITgn8IGOqUBeIpNdw1q3dkbvyQathX1%2B2mToWRX1w%2FaCT0NbTxKB0ik%2BMLGN1eyaYWDLqdXbWy%2BhcYqzPKbrG69M092Ud%2FSoflMSRblfUKF13h50JXQsiNQdhkU0gKYR%2FDZsXNuAe1YSa1DD%2Fr9Fp78VjWJ6M8hMOHY64ahgkmonKu717SqJ1DwAP3KNa976%2FagtgjetBwYxxMlLmbZvVOSw4Jtiqcz55G%2BxyEP&X-Amz-Signature=d2911aee857c87be752d9aaf07538a53777a6dae91c9feb2c5ef51db100d6868&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EJDHTK3%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T091026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUdifF9nBSzbBwXeinQaWAuuefkXYCj9GI2%2BYMZINzJAiA7kXZZtw3Oqzl0TTP7Hsflws5hFvn95qp77F4plViStSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDri1jrlUj9YQ9FabKtwDqcWL6v%2B4wLJi1i4b%2BDek6qq6YSqiIPKECJDTUteaICPJnv7fYN9dGNBJq4EH91sv%2B55BIFYeIyfvE%2Buw%2Br%2FR2%2BDSnZeDF80BNPFq8139yxqdrqTU%2BdhsE0dIGO622sUPl6vy4fHz%2B1g8HLOfMkzS8tO7sxDRBGNEA34a5R%2F8yLtw%2FEKTW%2FI3uzwvzBSA9BokHuwm4kltt4wWXNgIgfQip%2BGo5yUY1FlK0XztImPu%2Fr%2BMzRUNQZeV1zK%2FDfoUlBXWWlVQxE4TOn712WT6RDl2C4Sjjrh9jYhDY0XWKlHuQOncG1AqBeKrR6JtQgyOijNVTV2h5WdPLHw4yFJs0x88FDDbTeFh5d5wBFo31lnxK2JILcR5M3ISsFj9ZREK%2FQGoOy9mWJE6jfaVNB8JqYgr%2BkOsTjQBVH54uh9ZtAy6Dq5g4e%2BpkY1lw5uDS62gelYHa7YXxvj%2FXmxBGT5kd2Qt4yP9v6yH6fRWrq0RPPlQ9p0pGq6l7jJYDUXGN%2B3907I%2FQ7JTn1Jhy8NiJHwy6TymdDPDTaffZmAXbalT5oJqiUEgh2HsfDXRM%2BxkdnIG5Cmt4uEYEZ%2BcPePuwFDCu%2Fz2KM17%2B%2BFdVxZ4JYWXHgKAsg0crF%2FZlGNmpsAkyMMwzt%2BfwgY6pgFXuCXOkGTYaUBTvzvPxyucwSVDdTY9DiVSAcTMhKAYuy3rLgV9DgyKH2T0rb%2BaOP89u57yBsFR9brtNQjU4opsDvjLelU16dfXWptWTpbZtuHQPpgktmM%2BcAHPBt5R%2Bgk5LbsGzupiL4w1n%2BlxixlgMH9hQH7Af9JXemoyP9E6Wo%2B36qsr5M%2BO7kK28BAtGvdmeUkXAY%2FK2DAAdaAJjEUgBC7%2FLiog&X-Amz-Signature=5ddd877dabce321f35dcd40d8a93c00eff4ba1fdf904065aa3ff0094557a0e2e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
