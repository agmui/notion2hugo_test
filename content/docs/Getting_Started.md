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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2I7OXBH%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T091027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHiLoP1Df%2F3V4VhN6YDO29VSPRa08N0qseBv4qJ6P2ESAiBX9WaoBgtieHfKo1mo%2BdXr3QtRJcsA4Z%2FYYvYF7sPDqSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbJXR2gyRXk9L5vTMKtwDv10f%2FTZ1PiIzWyM%2B9Z1sfXeQxMloy5X2mY0QsgZiNQwGCZEPRj9GQ2in8FVWoIodcvDV%2FoKMnYskqq6cuK74MvtPlwAOXJWktHlVjBrfb11SYN%2FM5ftjRhPQRIMVboET%2BvHvt7sz28EaYIiElxcSW%2BT1fHogS7IEUyFHu0o7m1iekXCLq0JsuMUyyyaToIWP1XWKaB9h6dr8qGHkPdncGhR8Nb8z2WmRgv3%2Fqv80k6m5wBoLz7nJD8%2BcL%2FHCwi%2BgTJFmLG76FA%2FcKQ9uDZ8DDaIocc6RHR1WVF7xYInZdxaYpn%2FvwNFxWRjWX6OLzq92Gz1q6Gg7kghNZhWxlx5lbmiQfR%2FfUAv1jkDkHuD%2B3yiPYxyllnQfKeo%2Fcr60%2FB3h51tPJjgp5yES7HHtSZxl5VeEjAzN4O%2BWGCn%2FfhP6zs8jPtymvAfuvCkH%2Bbf5OLxfzI741Z1eY0JKb9pMTsdCGk%2BY%2F6ohwQ5c%2F9WjEILz3GbdSDgrvYmKItgD0Xd9npoxcVHrST74ql%2Fl%2F2kJmcPiTU6t6UGT2cv0vHlKTXM1mUpC%2B4gS%2FCUwOT3Ab0MROrkz%2B8daxroFWsEV180QEKmnhN9A1pbxHRfqGKdK%2BMxJEnxOIQbkX3Wyy5nGOqowq9GrwQY6pgHPzQXddEcoLbIfTmSNAVcB4t%2BLtKogEDZyE976Ow%2FGG4Iz0c4V6S%2BqhKRMW42oOhGtDno7iqQkSz8ddN%2BNwc3%2BvMY%2B4hQfYQniKsiSg8c8nt2TbzLNQMwvl8a3kU4rL49f4QV%2BQeMYo%2F9muq32U1%2B6ASUtqJlZmiU5tfV30u87NX0%2FhpBaXqvLoFxztHhLzLw6JDpAxdXIJCAC8q4W9yNMgCmEaasE&X-Amz-Signature=fe17e89fe4c2027fbefe70ddae58c5735f538bea2a51c9a9e18b0022798ad253&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2I7OXBH%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T091027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHiLoP1Df%2F3V4VhN6YDO29VSPRa08N0qseBv4qJ6P2ESAiBX9WaoBgtieHfKo1mo%2BdXr3QtRJcsA4Z%2FYYvYF7sPDqSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbJXR2gyRXk9L5vTMKtwDv10f%2FTZ1PiIzWyM%2B9Z1sfXeQxMloy5X2mY0QsgZiNQwGCZEPRj9GQ2in8FVWoIodcvDV%2FoKMnYskqq6cuK74MvtPlwAOXJWktHlVjBrfb11SYN%2FM5ftjRhPQRIMVboET%2BvHvt7sz28EaYIiElxcSW%2BT1fHogS7IEUyFHu0o7m1iekXCLq0JsuMUyyyaToIWP1XWKaB9h6dr8qGHkPdncGhR8Nb8z2WmRgv3%2Fqv80k6m5wBoLz7nJD8%2BcL%2FHCwi%2BgTJFmLG76FA%2FcKQ9uDZ8DDaIocc6RHR1WVF7xYInZdxaYpn%2FvwNFxWRjWX6OLzq92Gz1q6Gg7kghNZhWxlx5lbmiQfR%2FfUAv1jkDkHuD%2B3yiPYxyllnQfKeo%2Fcr60%2FB3h51tPJjgp5yES7HHtSZxl5VeEjAzN4O%2BWGCn%2FfhP6zs8jPtymvAfuvCkH%2Bbf5OLxfzI741Z1eY0JKb9pMTsdCGk%2BY%2F6ohwQ5c%2F9WjEILz3GbdSDgrvYmKItgD0Xd9npoxcVHrST74ql%2Fl%2F2kJmcPiTU6t6UGT2cv0vHlKTXM1mUpC%2B4gS%2FCUwOT3Ab0MROrkz%2B8daxroFWsEV180QEKmnhN9A1pbxHRfqGKdK%2BMxJEnxOIQbkX3Wyy5nGOqowq9GrwQY6pgHPzQXddEcoLbIfTmSNAVcB4t%2BLtKogEDZyE976Ow%2FGG4Iz0c4V6S%2BqhKRMW42oOhGtDno7iqQkSz8ddN%2BNwc3%2BvMY%2B4hQfYQniKsiSg8c8nt2TbzLNQMwvl8a3kU4rL49f4QV%2BQeMYo%2F9muq32U1%2B6ASUtqJlZmiU5tfV30u87NX0%2FhpBaXqvLoFxztHhLzLw6JDpAxdXIJCAC8q4W9yNMgCmEaasE&X-Amz-Signature=097685be8cc69486ea187f8e97be52dacc28bde3aa93edb0c5a2f3cbf725dcfc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2I7OXBH%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T091027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHiLoP1Df%2F3V4VhN6YDO29VSPRa08N0qseBv4qJ6P2ESAiBX9WaoBgtieHfKo1mo%2BdXr3QtRJcsA4Z%2FYYvYF7sPDqSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbJXR2gyRXk9L5vTMKtwDv10f%2FTZ1PiIzWyM%2B9Z1sfXeQxMloy5X2mY0QsgZiNQwGCZEPRj9GQ2in8FVWoIodcvDV%2FoKMnYskqq6cuK74MvtPlwAOXJWktHlVjBrfb11SYN%2FM5ftjRhPQRIMVboET%2BvHvt7sz28EaYIiElxcSW%2BT1fHogS7IEUyFHu0o7m1iekXCLq0JsuMUyyyaToIWP1XWKaB9h6dr8qGHkPdncGhR8Nb8z2WmRgv3%2Fqv80k6m5wBoLz7nJD8%2BcL%2FHCwi%2BgTJFmLG76FA%2FcKQ9uDZ8DDaIocc6RHR1WVF7xYInZdxaYpn%2FvwNFxWRjWX6OLzq92Gz1q6Gg7kghNZhWxlx5lbmiQfR%2FfUAv1jkDkHuD%2B3yiPYxyllnQfKeo%2Fcr60%2FB3h51tPJjgp5yES7HHtSZxl5VeEjAzN4O%2BWGCn%2FfhP6zs8jPtymvAfuvCkH%2Bbf5OLxfzI741Z1eY0JKb9pMTsdCGk%2BY%2F6ohwQ5c%2F9WjEILz3GbdSDgrvYmKItgD0Xd9npoxcVHrST74ql%2Fl%2F2kJmcPiTU6t6UGT2cv0vHlKTXM1mUpC%2B4gS%2FCUwOT3Ab0MROrkz%2B8daxroFWsEV180QEKmnhN9A1pbxHRfqGKdK%2BMxJEnxOIQbkX3Wyy5nGOqowq9GrwQY6pgHPzQXddEcoLbIfTmSNAVcB4t%2BLtKogEDZyE976Ow%2FGG4Iz0c4V6S%2BqhKRMW42oOhGtDno7iqQkSz8ddN%2BNwc3%2BvMY%2B4hQfYQniKsiSg8c8nt2TbzLNQMwvl8a3kU4rL49f4QV%2BQeMYo%2F9muq32U1%2B6ASUtqJlZmiU5tfV30u87NX0%2FhpBaXqvLoFxztHhLzLw6JDpAxdXIJCAC8q4W9yNMgCmEaasE&X-Amz-Signature=961d520982763550fbe5ef6ff8e5651314d0086fa0de918372646fc98cccb293&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVIJZD5E%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T091031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrSfmXD0o8tsmrU%2BWSIpkjelR0rbUMs30pBFzeJlTO1gIgcO9mXPvTeaiI57rcrKlKNP1fvnIBc9ILWM2C0Y6w3dUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSWIF4aHMci1IdYxSrcA5mi6s26X11vpeQPVe4d50LfcxFJhoXh7e42kMrcDKaYd5EmSDBPU0sGD3JTgZtHorUxMpWvuIsN1Yz6lzQTNTr0ETqNLG9kEGe%2BUPJZlLs7%2B7sESW3DFhFnx8%2BB5AGggNLFwv74SrxAuVJJOrffVcqE3ywPy5wEI9Ih9xOapEp%2BkhQBImi9wcz4dIQwdP4eWa%2B8Zzyak1NFQpUBV7V8aiNtoy6kMOQvt85zM%2BueJCPYCYKqRFNUK%2F3vZyW6FY%2BMkqgwtJnwtR4Wm3OckjmYkpdyLNHk%2FNNHWXPHg%2FWAeK63Gop3NEzfljEWbQFCPMiXLnyXmDqoBAOM%2FKWLeEGRubmouhetScN2AMN%2B2A%2BrpLpVkG%2FrqHkKTK33n7Vw9plWKrznC8r2b%2FjorUfBFwbW0qTteijei9IiIVoDOmlHiGPOEPQhhoeiuvmDls7e2Ohv33Vl3dyTjszNwS8B8r6WiDLecopkTF%2FptN%2BX4gWa%2FsbDlwWkMGjudEvPB3QPOVU7YfAN2Dlx0NkyUoCsR%2BFVjY6Y%2F%2FlB6pH2Obq2b%2BODVFF9bktY%2Bs30PD9as0ZebCqbOSzgTcERWgwhYbUZmRVVbqvSadaSJ3hxBrSuYjvzIwsVLWJJvz3kk9EC0yzEMJnRq8EGOqUBo5JHxtp1WXwrTaEz32c7SZU8ri0mH2ncNAXbcxO3FUW5Lvl7t2wQfJxr42WjrCJFi%2FPhJ%2BC5UGoTB4gKYqgFsF4QrDNag%2FEZ%2BMixZnVQ4Wk9t2LuJ19lUyXI94cxnjVCCbvdyIQRVvpkBN1zQcSTVRJAZeJuN7ChIH6ZOidLwSz4txsiquGMbJD2XXISwMPfZcD0paNI2YRLFlzTQ1FTQbypxjOO&X-Amz-Signature=744957804df7efb98f061b0a0c8cb743ca16fcadbcf87cec9a9e33d5c3e33cc9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UYEKY3K%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T091031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeyyvrN62mDtw6%2BhDXXIqM%2F0kVYEmbwsu2Tgy%2FE3WLwgIhAO%2FzvYaMmGH5mp39VyQQ6SylsaJzerMrii%2B%2B%2BkGUvuiDKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7hzlXZsVWNtxlsoIq3APOZeJtFMwxZmM8aRCGcXxiG%2FAs8yj67VLnmU4294heBNyH2gnOMhK06sZ6Ui7rZ83vduAirFwC%2FNP9PrjAnlzTl1j2BFTx0gMvtA0cDQK55ZOGxmyuS7%2BWvJ2Su1A%2Fwh12iY15KRF%2Bt0Bm953Xa%2F9g6Pktk1KT7YW7zU8UJYAJL3vEn4d913lqVsEcjlW4YdlTOA2vhWdZaMt3C0Jh60uYNyuGlSV%2BK%2Fhx9qc0T1CRCcHgUYxrcfSSPuT0qCylAIY52RGJUh6YalhYYQujxvnRLS4qBl4mvrIK4COxYAbMV5%2FykRFu20SriTfP1Zf1BoNIFGktD87zDjqQPlYgjptVppDGumCa0VIt%2BeauXto8hTZUE90vRGDQU4BAty%2B50SzgTMNG5vwdc5BgRuOKpF0owh3eLoQh%2BqzAPmNoIBPdQeC78W4Ac0GMWQ5hjYa1sqbt9Axo8jlLnrSE1EKcf7E2JUc6DQXvEv14LFthKEzVUgrvauXVZ92ls1jYobHOYg%2BY%2BO%2ByVZqCAxEjiQJmxcumxyoZoGXCS56YrEwK1ee9UMM8YIVCCFWqTrCDrYfyEKR73jCYIIxfAbiq6jkqu6q2Xa2%2BUeyhPMFdfuBBCuG1QFJ%2B%2Fbj9iLMpLj4ElDCM0avBBjqkAWjuhSa%2FysGLqrdgEk0wfCmQgPIXtsTDg7y7kiXPa9inQSzd3vBTCe67bLq1PMD99NFDxenQCrOnMqVXi2U4WIvN8gWUc3H%2FcvKtkZgcTqtxgHI%2FDD3KH7zsCBmywNmquJlXjAC%2BYg8bs0Q7%2B1jIZXZaKsyNlwI6hi434%2BZWTs7XmNB%2FgCnHSwoABU1DVkYIZk2Jhmt4u%2FXzF0ymAnTT21ipTYJp&X-Amz-Signature=5bc70be02dbdff434b8737b2a7ecb4922284ffdf1d0541a3d9ffaf1a790f0a01&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2I7OXBH%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T091027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHiLoP1Df%2F3V4VhN6YDO29VSPRa08N0qseBv4qJ6P2ESAiBX9WaoBgtieHfKo1mo%2BdXr3QtRJcsA4Z%2FYYvYF7sPDqSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbJXR2gyRXk9L5vTMKtwDv10f%2FTZ1PiIzWyM%2B9Z1sfXeQxMloy5X2mY0QsgZiNQwGCZEPRj9GQ2in8FVWoIodcvDV%2FoKMnYskqq6cuK74MvtPlwAOXJWktHlVjBrfb11SYN%2FM5ftjRhPQRIMVboET%2BvHvt7sz28EaYIiElxcSW%2BT1fHogS7IEUyFHu0o7m1iekXCLq0JsuMUyyyaToIWP1XWKaB9h6dr8qGHkPdncGhR8Nb8z2WmRgv3%2Fqv80k6m5wBoLz7nJD8%2BcL%2FHCwi%2BgTJFmLG76FA%2FcKQ9uDZ8DDaIocc6RHR1WVF7xYInZdxaYpn%2FvwNFxWRjWX6OLzq92Gz1q6Gg7kghNZhWxlx5lbmiQfR%2FfUAv1jkDkHuD%2B3yiPYxyllnQfKeo%2Fcr60%2FB3h51tPJjgp5yES7HHtSZxl5VeEjAzN4O%2BWGCn%2FfhP6zs8jPtymvAfuvCkH%2Bbf5OLxfzI741Z1eY0JKb9pMTsdCGk%2BY%2F6ohwQ5c%2F9WjEILz3GbdSDgrvYmKItgD0Xd9npoxcVHrST74ql%2Fl%2F2kJmcPiTU6t6UGT2cv0vHlKTXM1mUpC%2B4gS%2FCUwOT3Ab0MROrkz%2B8daxroFWsEV180QEKmnhN9A1pbxHRfqGKdK%2BMxJEnxOIQbkX3Wyy5nGOqowq9GrwQY6pgHPzQXddEcoLbIfTmSNAVcB4t%2BLtKogEDZyE976Ow%2FGG4Iz0c4V6S%2BqhKRMW42oOhGtDno7iqQkSz8ddN%2BNwc3%2BvMY%2B4hQfYQniKsiSg8c8nt2TbzLNQMwvl8a3kU4rL49f4QV%2BQeMYo%2F9muq32U1%2B6ASUtqJlZmiU5tfV30u87NX0%2FhpBaXqvLoFxztHhLzLw6JDpAxdXIJCAC8q4W9yNMgCmEaasE&X-Amz-Signature=b3ac48222d8fb5f95c0c3ffe117e99d87b2fda8825ebf0dbb137fc7f001b182d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
