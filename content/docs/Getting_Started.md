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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7C7D46O%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCpGSqYxCV2o%2Br7UdmlshPq3YDs700DbjmpwbBa%2BOu1JwIgFlZxDKx6hxhO1e4WtnZZFlsL%2FPta7XO%2FePf0FNKHb7sqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPv6XJGECQ6qYodfWCrcA6SFBC7eefIDuaUti7SaYBYiq%2Br%2FzBaeWf6u%2BcdG%2B5ipRX5%2BIZToEb4tMAZakD5DHwSb3kGUfe5InVsxbKf4t6TCwBMR5M4LsqhW%2FAYaydfM%2Fw%2B%2BZ95jUqCK9YFy%2BXSGfqzF3cWJSUKjnvhGzJvdEuI8JYzTyOVKBO43YSyQ6k1Zz73URHLjMuwMkalkRxI0wWnTtUhvEMnxRmgtOMs0zzcs0mSWG5FfWOOcB%2BJulAYIZ5OtM9VWbq0yecqdGNNDkgZzC5U7AvMJOFCnssWjnTeh3cN5lwkpH6GGDvoGwI%2BsvrH8um0qMN4yQyjI9wbxmoplj8u5btZTjE0HNMjEHS3SUepZWOz3xYus0KxudcUnVdg6ztInZrMdZiNo%2FToNwvUjmKro6G3jIv2tMaIUK74QQoOuSZ3dHtZSR%2BOvZ6oNLxma50WTpuTC809I9CnA%2BrO3Ozetz0H3mB5xj%2FVp9jrgtxFVFNQSs4oyzdBv4FynTHfJvbG%2Bl%2FDYrxZGiYWD87CGmG52KmxjF048WC2GC36Hg3u4UHLsAHNNrJNF%2FzFumBTmXvlEp0txIRju21ebasMNKJ3dpL2TSIoSxVI1ndpVhvxpQkknG5vCKBtisxrGkM8dLkUVPTdACbaeMJ6kksAGOqUBAU5w5dpMgtSoc8Hb9v0qZa2mw%2BIlD%2Bd46wtLahAWlrhxrrCuXVstyXXmTcne2erkwh6x8KQVKjT2hIxfptC%2BV6Qz738SOG2ruKLakYXp6U5UnWqO5UyvB9rJSo123cbaoZ2yd%2BabxrbEM59jNmAMIFD2E6Jgjyyr5Q9yLGHS7qVl5%2BAssvcTMhUspfH86TL7peZGPcebwG2PpSZ2KEi0hyIRsJWU&X-Amz-Signature=030b9f92d342de368985333fa8298264f4951bc4a6acb6aefb97653901c3119c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7C7D46O%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCpGSqYxCV2o%2Br7UdmlshPq3YDs700DbjmpwbBa%2BOu1JwIgFlZxDKx6hxhO1e4WtnZZFlsL%2FPta7XO%2FePf0FNKHb7sqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPv6XJGECQ6qYodfWCrcA6SFBC7eefIDuaUti7SaYBYiq%2Br%2FzBaeWf6u%2BcdG%2B5ipRX5%2BIZToEb4tMAZakD5DHwSb3kGUfe5InVsxbKf4t6TCwBMR5M4LsqhW%2FAYaydfM%2Fw%2B%2BZ95jUqCK9YFy%2BXSGfqzF3cWJSUKjnvhGzJvdEuI8JYzTyOVKBO43YSyQ6k1Zz73URHLjMuwMkalkRxI0wWnTtUhvEMnxRmgtOMs0zzcs0mSWG5FfWOOcB%2BJulAYIZ5OtM9VWbq0yecqdGNNDkgZzC5U7AvMJOFCnssWjnTeh3cN5lwkpH6GGDvoGwI%2BsvrH8um0qMN4yQyjI9wbxmoplj8u5btZTjE0HNMjEHS3SUepZWOz3xYus0KxudcUnVdg6ztInZrMdZiNo%2FToNwvUjmKro6G3jIv2tMaIUK74QQoOuSZ3dHtZSR%2BOvZ6oNLxma50WTpuTC809I9CnA%2BrO3Ozetz0H3mB5xj%2FVp9jrgtxFVFNQSs4oyzdBv4FynTHfJvbG%2Bl%2FDYrxZGiYWD87CGmG52KmxjF048WC2GC36Hg3u4UHLsAHNNrJNF%2FzFumBTmXvlEp0txIRju21ebasMNKJ3dpL2TSIoSxVI1ndpVhvxpQkknG5vCKBtisxrGkM8dLkUVPTdACbaeMJ6kksAGOqUBAU5w5dpMgtSoc8Hb9v0qZa2mw%2BIlD%2Bd46wtLahAWlrhxrrCuXVstyXXmTcne2erkwh6x8KQVKjT2hIxfptC%2BV6Qz738SOG2ruKLakYXp6U5UnWqO5UyvB9rJSo123cbaoZ2yd%2BabxrbEM59jNmAMIFD2E6Jgjyyr5Q9yLGHS7qVl5%2BAssvcTMhUspfH86TL7peZGPcebwG2PpSZ2KEi0hyIRsJWU&X-Amz-Signature=55aa275a52375b2f94b481f37adeed9a2ff7423fc994ef4b876e2ed2f2462892&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4XSWSJF%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIHBDkr82It4hPvaYRSWTaJ8%2B1vY7hSHTlodyfSgUY8gVAiBmEbh%2F4Xt8SW9UQ4MsxKWTVXtW0Dwe9Eu36itKPjJDsyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUJSHEHulV5fbFdbMKtwD3wlnlE2hPI5mr7BqwJ4A52cvcGQ0NCtvpfdM9Y2kRMb1%2BjY1f1YN5sjiLt0hM2u9GtvyaZOS1gDUqET2sqH1yDW980KyonV6CsKBNWhGsTNPvAZpfRtJBd3%2BLsRfwDvGJxfhTbVVrMfDb8SdHNgvS8uo4Fmwpb0Lc0atFNh21U0l1Gdc6NSlp9Ry98H6at7HWh%2FY0BlL2ETKnH5XnOsThV0G4xoauMqeC1JTgRGRR2%2FoK8cbK4pXj%2FbBDUXex7SM%2FoIeZTANxDQuyge6IlcDDeW1Q0L32uzP2LhTDIE7Dspequxb3S2kKGwc3gCkUCGerI5kTMbcI4xPj7Y1jSTnHu9AvfGa79szWSGIqCqUhMu%2FDCcQ%2FTKXlOkzjDprhHOMG5kggI7sHvj9E2cZf43uaGsMEXMfz0IkW4mHIEJiC9a8FPsi%2F5Oru43EufmQOOkUxO2Nhs2tMY6WpT9ieVdqG59JeXVdCLQKmA67nMKCd9Lj3I4OK%2BM85UN6elS4YciHqL0YexqrDBZs7nUIBdNkj5zf3pZ50cXzzcE8z2c%2Fym3v3kX38e6kwELTopiNOoklsQUem0PTfLETq%2FBBGmRrqQ%2FAfjHcUjP%2B5CCv%2BocezQFpAT3WCwvsED0wxTwwnaSSwAY6pgF5Hn4Dlf5JKCX4mpc%2BCRGAxyu6mvGNmrCw898VFDot9Nu9NGpyoSuhhEeyBFrnCp6bvXXCvWVntFwYHYHz4NfZn18PTtpuPdqqTKYGSZd13jwHJ4E1qf7Gpf2lM4V%2FIXxPQ72%2F3E4C4MQsMnaguCr6zAEbu7eL6oWVtUvLrUMtlGiEAVpuocjPhIXt7Z3u8Xi%2BI15pAy4nV9NMjmjcVxcgOSRI6KX2&X-Amz-Signature=a98dd0a9f7c8836c3075f305915f3e5db84439e66201ebf836b160558e0b0d09&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNPT63VO%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDVtt9TIzro7ar%2FagGWjsUM7mwGvIsu7CIkjTlkw7JXHwIhALIzRM4MRDztsIfo0tNYkT0e1qpox7K1hCwsQvdCgxnwKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTABO0knXVr3TRtogq3APXIxNMGSN8t6IGK5uLWpv%2BuoydaFsldO9FkM6xcU8%2BL4AxHz4DjeOMrw0tBaUp5eA6dD5pBB%2BJFfsNsyvF5mLZmWt6tCSLK%2FCr3SaB3MjkFOAxQeO%2BX14b7Z2qBbW20wdnXZGYVuGvwWKnVlQdHVNYuLjgfqwuZaYDPsYwUp8jmc1elFa9%2FIZMtA6qmdNLZkj4TcC64glnwyzsjr1UyN1hLnkorWV9mrcrYlBiIAsNG1QiuKH0MFP5TS05VX0j%2B0h4%2BeX4WAnMv%2FjPdIBF6ji7%2Fa8HQnM3UzQZ3jbadoA5719hv2uNZLsFYFucuVInxelVnPClQlwbyUw9TvsX%2BTc1L2uLoN4NuKFbTgZj5HvQvqCtPEFNaHl2aAQe0rMw85hIr7YEYxnZGeKlwVq77OySBUkSLs7ZpIlhDSMqpd89uHk5aAxwrAK2CS%2FvwlFO5g0OoYkExXiZ8kQHi7ikTovGgLO%2Fr0n%2FYAa3Q3VRtGpo2XrSdwg9ilrEphTiakJoshAvkg4QODuM5INztWua6zV0NLhipM%2FVPXqZ34zc3rKrciwxFmBjIqqDcsv9iEdFNT4JDy1KekqPaeG7alvtCtlakcfmVkVJZv%2BhCs04rAxiU0W%2BWfvjOOeIqstnWDDio5LABjqkAdt78MCMSc0GeWN%2BccpNG%2Fms8CaIRVkUGDE6xttKppUZzNUolpnxQFhyA3FahrOkT8TpUlHfJkQeFtIQMREDB%2B87ogQDD%2FFS4P07L%2BnuySEILTu1kDREej0ivp1%2Br5mdJonBGJeNYCFBX6kcoCQ6w5%2BWQvlQOG%2BxMxFzqScLlGnIom44dJ4UdFsaac7UYxERN%2Bqjamrf%2Fi5pz%2Fw%2Be1UKMAYpZPCE&X-Amz-Signature=95a34ce861add1374f7b5c81aeb74e841001eca9a62b92c323a0158e351376be&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7C7D46O%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCpGSqYxCV2o%2Br7UdmlshPq3YDs700DbjmpwbBa%2BOu1JwIgFlZxDKx6hxhO1e4WtnZZFlsL%2FPta7XO%2FePf0FNKHb7sqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPv6XJGECQ6qYodfWCrcA6SFBC7eefIDuaUti7SaYBYiq%2Br%2FzBaeWf6u%2BcdG%2B5ipRX5%2BIZToEb4tMAZakD5DHwSb3kGUfe5InVsxbKf4t6TCwBMR5M4LsqhW%2FAYaydfM%2Fw%2B%2BZ95jUqCK9YFy%2BXSGfqzF3cWJSUKjnvhGzJvdEuI8JYzTyOVKBO43YSyQ6k1Zz73URHLjMuwMkalkRxI0wWnTtUhvEMnxRmgtOMs0zzcs0mSWG5FfWOOcB%2BJulAYIZ5OtM9VWbq0yecqdGNNDkgZzC5U7AvMJOFCnssWjnTeh3cN5lwkpH6GGDvoGwI%2BsvrH8um0qMN4yQyjI9wbxmoplj8u5btZTjE0HNMjEHS3SUepZWOz3xYus0KxudcUnVdg6ztInZrMdZiNo%2FToNwvUjmKro6G3jIv2tMaIUK74QQoOuSZ3dHtZSR%2BOvZ6oNLxma50WTpuTC809I9CnA%2BrO3Ozetz0H3mB5xj%2FVp9jrgtxFVFNQSs4oyzdBv4FynTHfJvbG%2Bl%2FDYrxZGiYWD87CGmG52KmxjF048WC2GC36Hg3u4UHLsAHNNrJNF%2FzFumBTmXvlEp0txIRju21ebasMNKJ3dpL2TSIoSxVI1ndpVhvxpQkknG5vCKBtisxrGkM8dLkUVPTdACbaeMJ6kksAGOqUBAU5w5dpMgtSoc8Hb9v0qZa2mw%2BIlD%2Bd46wtLahAWlrhxrrCuXVstyXXmTcne2erkwh6x8KQVKjT2hIxfptC%2BV6Qz738SOG2ruKLakYXp6U5UnWqO5UyvB9rJSo123cbaoZ2yd%2BabxrbEM59jNmAMIFD2E6Jgjyyr5Q9yLGHS7qVl5%2BAssvcTMhUspfH86TL7peZGPcebwG2PpSZ2KEi0hyIRsJWU&X-Amz-Signature=1032a9a9a1e3d5b951f795e69a35bbb496e64cc16ce4f2b51a36dc8194b3823a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
