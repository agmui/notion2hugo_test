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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2MVH35M%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl3lwY2ceCkELuqMGtGoTpJq8b6M8cz0RmIAptYo5ZYQIgLgcKh8oL8mbO6sfndl7Z6SMatscBKe00G4QjaTpaRtEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDEBTlivjhoG7xLMGryrcA7GsMGiJL41BFsoE%2FgeTNQOqz05MrsHu129xaXLePVp5OCSrPJhOi227I%2Bq2ZIdH5wA%2BWAsUKR0T7CdoYSeuCQkLlgtkMAUoF4PKEraShTlzK5jLa19A9hrkmMGnaWNwDhJmXVmQP2gmOLYHHghOHtF9sI21%2Fe5KcuJ1ChJyu4tldJKl4iwGY45ZLrv2Wo651fWG0TFhYNVSu37RZwJN4fcB0pkUpPzgXPLZthrLXmnjU5MpYb5V0ukOVkfq8Trf%2BfuVj4Qr76KnygpQlmn6qD34Kfg3SgpDxrAzWi4NvTuzWnRn9c2qOhvMf%2BYYLAu%2FmcgpHFyqFo5eNrSqexJAdOD9jdg%2BG44xeEgX0jA1Dh3%2FBPloDwz9UV3%2BATJvV03EvG1xus8E7fNVh4raG33EF161P9ePWuH%2FgvHOf0CErsg4ZjM3XydjtUqorJTrhVs1%2FFxHwuUlHL5JeAcRK%2BbcIkrRKn08YwM8a0hVulJnd3%2BZlIdxD6Dsnkk9FuqQPlRT6YwEIQJ0XQXKObj9i4cNlwFjm6Ut%2FL85tmiYXAuZr0TaRhG9OBG%2BYsDummXMJDhfFN4IvYtnc4cQY91Y6ySz6mns0F3W6KO7uXZgqGerNzzTHherlY6anQlgWioJMMuvmL8GOqUBJlJF8UGwPiLH2XYXRjI63N6qTi2mi%2FWTlrRV9FVQGH8QnwwUedup8xzTsffv%2By1WcZhf9b31qoAkvNrerxvRhgdhHOIAx7tlZhhhwRHPVCHGJZkPu73Yr3T4lHHeZsd1bEqIT9fWOcgj8QZ81dfxl5NxZMiqhb7Xyqq2uAkI%2B85wyAo5h2acgvohCqP0x2DXrym25iq8RlgyVMQEmvizLDgk9UJa&X-Amz-Signature=c7cd89e0b8400b3ee376f69cd1bd1ad6fa770a5cebafe5cf61006e765bccd60b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2MVH35M%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl3lwY2ceCkELuqMGtGoTpJq8b6M8cz0RmIAptYo5ZYQIgLgcKh8oL8mbO6sfndl7Z6SMatscBKe00G4QjaTpaRtEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDEBTlivjhoG7xLMGryrcA7GsMGiJL41BFsoE%2FgeTNQOqz05MrsHu129xaXLePVp5OCSrPJhOi227I%2Bq2ZIdH5wA%2BWAsUKR0T7CdoYSeuCQkLlgtkMAUoF4PKEraShTlzK5jLa19A9hrkmMGnaWNwDhJmXVmQP2gmOLYHHghOHtF9sI21%2Fe5KcuJ1ChJyu4tldJKl4iwGY45ZLrv2Wo651fWG0TFhYNVSu37RZwJN4fcB0pkUpPzgXPLZthrLXmnjU5MpYb5V0ukOVkfq8Trf%2BfuVj4Qr76KnygpQlmn6qD34Kfg3SgpDxrAzWi4NvTuzWnRn9c2qOhvMf%2BYYLAu%2FmcgpHFyqFo5eNrSqexJAdOD9jdg%2BG44xeEgX0jA1Dh3%2FBPloDwz9UV3%2BATJvV03EvG1xus8E7fNVh4raG33EF161P9ePWuH%2FgvHOf0CErsg4ZjM3XydjtUqorJTrhVs1%2FFxHwuUlHL5JeAcRK%2BbcIkrRKn08YwM8a0hVulJnd3%2BZlIdxD6Dsnkk9FuqQPlRT6YwEIQJ0XQXKObj9i4cNlwFjm6Ut%2FL85tmiYXAuZr0TaRhG9OBG%2BYsDummXMJDhfFN4IvYtnc4cQY91Y6ySz6mns0F3W6KO7uXZgqGerNzzTHherlY6anQlgWioJMMuvmL8GOqUBJlJF8UGwPiLH2XYXRjI63N6qTi2mi%2FWTlrRV9FVQGH8QnwwUedup8xzTsffv%2By1WcZhf9b31qoAkvNrerxvRhgdhHOIAx7tlZhhhwRHPVCHGJZkPu73Yr3T4lHHeZsd1bEqIT9fWOcgj8QZ81dfxl5NxZMiqhb7Xyqq2uAkI%2B85wyAo5h2acgvohCqP0x2DXrym25iq8RlgyVMQEmvizLDgk9UJa&X-Amz-Signature=1fb9e824e11ec8b9cab5af7fe8316e521548b3f1b14c1caeff818061e8d8c206&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647WQAQGF%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T041000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPsVYb%2BOTwYQhlz9XVv%2F1WilcsyxukskkZwUlXnhP%2BIwIgNLiJuCiL%2FQRgZeFk%2BKQ5jJeDdm6cocbSb%2Ba2leXXhoIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDHcg9vesXooIclKNQircA6QOp9457JCCeqM5Y1gYavmJHbPMF0xnDaGjPnrpbBxIjcHQFqOYywu%2FzIxBuaLo9QtD7UD8OMuzdGwbhSH7PCxMeIXNcKQuB7FEs8Song%2BoVJ0wfxysqKVEcbnHcu5vXdgH45LJkBibQeKIJiRTvzy3QdCaKnB7fpo7GvBHTBYWQ0uNg1sUrZ2cCgGomDDpczGXKwhYNz9EkfYg5ZrzWk6a0T9enR0GyxzUi6G3K2F5DIO19HXuh3VnOtB2ED6wNmXQRRF%2Fg4ZfmZZ7ySXSkW6TqUYcGbtReDOVQ9b4iJsga0SY%2BoIGYCuT%2BHLskjMOmP2TyYKOaOBosDtoKafXIGkgpWbYlQif2wcxw4YlZAo3YXjciTVhQzdx%2BwkqWNydGiTdE6DZz%2BY%2F56eA3J2Uz3loOcSAu3JSAKqKdBoS5mksJTtBFn0Kk8TG8YyCihAHlyjr%2FxnkA5Lr8tbwYF0SCeZHJdRCZ%2BU65afcgV1mVrnLkwpmR%2FtcCSlUHhRQeLCYdtt%2BQg0Ta8lcC0gA3BJ9gF6Uo71nd9ov988jeOPq90r2XgpyFsJeHLFxZ%2FSen5VvpcV3gxU2tFjwoTUbauDG68IfnkOYS1CIMttGJaw3IQf42cXf3DkxCHDG35EOMKOwmL8GOqUBXjDfP9NJWUAkE07wqvYdZkkCfwgo9PaiNtaA7fhZKRRUgWk%2F47lgHyZ1gdql7Ra6liGwHHCdu2BfBn%2BzkTZTutycP0OKHuMhxUZJohyfXZ2is2yrxBWP6%2BW0JoxD8nQKyEUl%2Bmic2Shcxo1ElyzkArEEiZkuROb3ECvgvK35YGZlDm3RHMhlgw3XiyTU6GPUwbUFwuHre%2FhjktTGBbVMaqKQ9tSz&X-Amz-Signature=8b71413d8a75e86bce76df1c045762207647b3cf129926e4398cf5d14d33718e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN5CIEGE%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T041000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNejDH0OUen4FprgONk9mnyyjEcTlJLLJdNnGqKHfXGAiEA4geknCtNM6cv7khe8MpsNMRzInfowpuI5hFHqoQGT%2B4q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDMfAUbTao22R65UH0ircA8qBYBdUcv%2F0HmYF8NtRkOOWIbXw8Q6Fk5MFkcIyvvxhVQj7A%2BWOrr%2BDRZkMEUkBIIECRs%2FT3PgpcRGXYX3sw6smkM7lsRLxaDzNWEI8ZKgT8hZ9Q4OQAgl39Ry4fgipBjPh059zfCQi%2F5EJ3%2FmKQ%2FSfXP71DdJIE9z8cUFPHQPsHs9fMh%2BiU75C9AJapQRBt%2F9G2%2FxxPMCG5Vf7YWLgLWQtM18zA4my7XWiSvrPUuw%2F1joCyPHWZ6F3SK6k3Xt50T4lanSegPouGzQyG5G5y7fW%2FNE2yazAE%2BI3Q6U98dHF8Yz979MbqNE39UfmhPbo9X1yYVDk8Lz%2F6C%2BZPzHoM0Zsolm8aa1X%2FUA9CTO1vpfdnLJoFmPAre04H%2Fqww1g76cnPpdlgs0NGCzQkOKWjBY0sdqcC2%2Bp7TWvn1Q%2FFZbZt50NatkCA8IzlIUleo6TmigseiPaeFJzJ9PLanX9iVl%2FWrkb4WSPabG%2FFtF5nb3K%2BmlJySmUok%2FiewTIeg1nfjgDVz8YwCR7B%2F6Ig3O%2B25zQ6eUIsQ6251iSn3jCpbhvY7r1bJCKp6S2wKpSTJ1rB8mIkUJtA50%2BRLZk%2FDdiFKw3hqv%2FcPwF0yj0%2FFM8kh0z%2BIA4Q%2BhL6RKFlw81ZMPevmL8GOqUBW0%2BVkrF0V1tcVWh3c3zBd48T1EOp7wI8fAUyJBPtmgetUcqzDk%2F26QeMu1Svil%2BlG8Nsl12gVE8q5WI%2BUYoBDxfdsgcDOsWAsI7nMUnIx78LhOy7IbTMT7AUbVMfKPRe%2BbZH2dwXkEVRVTo9r4XRJZZQbHDBhGb4Zp01Hy6MKyy%2B9UFHhcxcWoXwpGY%2B38ToJcyH9F55pZXts3B0KnW8BVop3h%2Fq&X-Amz-Signature=49132197dc24a3ecc4ca31402f0516e35b84db94c01c995d8c38ddf4bbb8bf5d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2MVH35M%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl3lwY2ceCkELuqMGtGoTpJq8b6M8cz0RmIAptYo5ZYQIgLgcKh8oL8mbO6sfndl7Z6SMatscBKe00G4QjaTpaRtEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDEBTlivjhoG7xLMGryrcA7GsMGiJL41BFsoE%2FgeTNQOqz05MrsHu129xaXLePVp5OCSrPJhOi227I%2Bq2ZIdH5wA%2BWAsUKR0T7CdoYSeuCQkLlgtkMAUoF4PKEraShTlzK5jLa19A9hrkmMGnaWNwDhJmXVmQP2gmOLYHHghOHtF9sI21%2Fe5KcuJ1ChJyu4tldJKl4iwGY45ZLrv2Wo651fWG0TFhYNVSu37RZwJN4fcB0pkUpPzgXPLZthrLXmnjU5MpYb5V0ukOVkfq8Trf%2BfuVj4Qr76KnygpQlmn6qD34Kfg3SgpDxrAzWi4NvTuzWnRn9c2qOhvMf%2BYYLAu%2FmcgpHFyqFo5eNrSqexJAdOD9jdg%2BG44xeEgX0jA1Dh3%2FBPloDwz9UV3%2BATJvV03EvG1xus8E7fNVh4raG33EF161P9ePWuH%2FgvHOf0CErsg4ZjM3XydjtUqorJTrhVs1%2FFxHwuUlHL5JeAcRK%2BbcIkrRKn08YwM8a0hVulJnd3%2BZlIdxD6Dsnkk9FuqQPlRT6YwEIQJ0XQXKObj9i4cNlwFjm6Ut%2FL85tmiYXAuZr0TaRhG9OBG%2BYsDummXMJDhfFN4IvYtnc4cQY91Y6ySz6mns0F3W6KO7uXZgqGerNzzTHherlY6anQlgWioJMMuvmL8GOqUBJlJF8UGwPiLH2XYXRjI63N6qTi2mi%2FWTlrRV9FVQGH8QnwwUedup8xzTsffv%2By1WcZhf9b31qoAkvNrerxvRhgdhHOIAx7tlZhhhwRHPVCHGJZkPu73Yr3T4lHHeZsd1bEqIT9fWOcgj8QZ81dfxl5NxZMiqhb7Xyqq2uAkI%2B85wyAo5h2acgvohCqP0x2DXrym25iq8RlgyVMQEmvizLDgk9UJa&X-Amz-Signature=95c0ad35d295288e7509ee9f650bb7ec92b70b08ded704a8a79666ff774ca9c2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
