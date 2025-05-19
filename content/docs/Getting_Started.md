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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYRHB4GQ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCePadUyxuXNN66AM8lBx8ojNvud2PvD1L6VgNFuRpKEQIgCts4LWzQwO47hlM9pIByjPPbF14Lx9cRypXhY8SvWaEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHN7OALXgO%2BHRKaZsircA0croWZ4Rb7nveT7FsEXFpzcB84SqIy%2Frdy%2FNCmtFLiTCMsCzBJi19Mx066HqTJJNauXFsvno2m5Yofwp0k%2FBuDfyDpmd%2BC37REF%2FApiFy%2F9i0mjpmIZf%2Blv5LCmj5%2B%2B%2FRqtMhcuQk12fHSWOTM5p142zTZmt6UiyOz%2BeT6ewMZZ6DZgMC2xQzTpVPRWs5Qs7qOM9x30EBzOWzA67j3rxbaS8FVI84DIQpxttU9avPPqfEKtzcRNNjiEyDoDOdMz0i81G5RmcbaBwtFi36LAJ%2BTjD3fTOAv32suqIEj%2Borjj6R0IN5GUM3np2n5eb0NgXJqq3ssCw8T2xFP1g9UwBzOTy5q3a6jl91HBHii18OJJlGvWkZ02f4cdgTCPgCrcmgWxAMpyUSJF7%2FhCofXUiB%2F7605MtPgCptrtDtH1n8ZHHw0iy2ry9cE58uoyPmR%2FCvf22fy3gzwrNfEeWrJnqx7wuxlcosJtp7L05b%2F47L8kOYDrSoW0uYsCS6jCh1xVUDYNm%2BaEqKpW6KSIQ8jC4xBVFEWWBzYT29jckip3Pax%2FGwi0S91G0yExgtXhCMtbVJUvlS3%2BaNu%2FT6MV0%2Bzm1d8r%2F9GriHzsT2G0WMPKKe2d%2FLgTExA15dy0bt%2FKMIzdqsEGOqUBcBaCzAL4dIg%2BsJ9NGDCS2pE6WP05IsuEUzK%2BKpY6hmRJV4JHFeBm%2F3RccSqFu8qQenSj98k4Aj6B4IEwzQ3XWBxfH84y6%2B1lu2F26fb17TbLhbYZWob0CI2PRTlwT38s2QOkQG%2BEGb3Z0R2JqAZ806q4tHooghtOqyE7ReIcIyCEZ2PgEL%2B%2F%2BV7aQd5Mxc6aHBKspYKOtK1w2ieFNfP4kDIIOFG2&X-Amz-Signature=28f018339d5c665f18647b370ad6f52fad0fd0d12f5a04b21ca3f2f750f5baab&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYRHB4GQ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCePadUyxuXNN66AM8lBx8ojNvud2PvD1L6VgNFuRpKEQIgCts4LWzQwO47hlM9pIByjPPbF14Lx9cRypXhY8SvWaEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHN7OALXgO%2BHRKaZsircA0croWZ4Rb7nveT7FsEXFpzcB84SqIy%2Frdy%2FNCmtFLiTCMsCzBJi19Mx066HqTJJNauXFsvno2m5Yofwp0k%2FBuDfyDpmd%2BC37REF%2FApiFy%2F9i0mjpmIZf%2Blv5LCmj5%2B%2B%2FRqtMhcuQk12fHSWOTM5p142zTZmt6UiyOz%2BeT6ewMZZ6DZgMC2xQzTpVPRWs5Qs7qOM9x30EBzOWzA67j3rxbaS8FVI84DIQpxttU9avPPqfEKtzcRNNjiEyDoDOdMz0i81G5RmcbaBwtFi36LAJ%2BTjD3fTOAv32suqIEj%2Borjj6R0IN5GUM3np2n5eb0NgXJqq3ssCw8T2xFP1g9UwBzOTy5q3a6jl91HBHii18OJJlGvWkZ02f4cdgTCPgCrcmgWxAMpyUSJF7%2FhCofXUiB%2F7605MtPgCptrtDtH1n8ZHHw0iy2ry9cE58uoyPmR%2FCvf22fy3gzwrNfEeWrJnqx7wuxlcosJtp7L05b%2F47L8kOYDrSoW0uYsCS6jCh1xVUDYNm%2BaEqKpW6KSIQ8jC4xBVFEWWBzYT29jckip3Pax%2FGwi0S91G0yExgtXhCMtbVJUvlS3%2BaNu%2FT6MV0%2Bzm1d8r%2F9GriHzsT2G0WMPKKe2d%2FLgTExA15dy0bt%2FKMIzdqsEGOqUBcBaCzAL4dIg%2BsJ9NGDCS2pE6WP05IsuEUzK%2BKpY6hmRJV4JHFeBm%2F3RccSqFu8qQenSj98k4Aj6B4IEwzQ3XWBxfH84y6%2B1lu2F26fb17TbLhbYZWob0CI2PRTlwT38s2QOkQG%2BEGb3Z0R2JqAZ806q4tHooghtOqyE7ReIcIyCEZ2PgEL%2B%2F%2BV7aQd5Mxc6aHBKspYKOtK1w2ieFNfP4kDIIOFG2&X-Amz-Signature=62f51f40477b0fb0ffe6d398eefff2080bcbe3e9a8f6a6f0642a8d83f3de1537&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYRHB4GQ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCePadUyxuXNN66AM8lBx8ojNvud2PvD1L6VgNFuRpKEQIgCts4LWzQwO47hlM9pIByjPPbF14Lx9cRypXhY8SvWaEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHN7OALXgO%2BHRKaZsircA0croWZ4Rb7nveT7FsEXFpzcB84SqIy%2Frdy%2FNCmtFLiTCMsCzBJi19Mx066HqTJJNauXFsvno2m5Yofwp0k%2FBuDfyDpmd%2BC37REF%2FApiFy%2F9i0mjpmIZf%2Blv5LCmj5%2B%2B%2FRqtMhcuQk12fHSWOTM5p142zTZmt6UiyOz%2BeT6ewMZZ6DZgMC2xQzTpVPRWs5Qs7qOM9x30EBzOWzA67j3rxbaS8FVI84DIQpxttU9avPPqfEKtzcRNNjiEyDoDOdMz0i81G5RmcbaBwtFi36LAJ%2BTjD3fTOAv32suqIEj%2Borjj6R0IN5GUM3np2n5eb0NgXJqq3ssCw8T2xFP1g9UwBzOTy5q3a6jl91HBHii18OJJlGvWkZ02f4cdgTCPgCrcmgWxAMpyUSJF7%2FhCofXUiB%2F7605MtPgCptrtDtH1n8ZHHw0iy2ry9cE58uoyPmR%2FCvf22fy3gzwrNfEeWrJnqx7wuxlcosJtp7L05b%2F47L8kOYDrSoW0uYsCS6jCh1xVUDYNm%2BaEqKpW6KSIQ8jC4xBVFEWWBzYT29jckip3Pax%2FGwi0S91G0yExgtXhCMtbVJUvlS3%2BaNu%2FT6MV0%2Bzm1d8r%2F9GriHzsT2G0WMPKKe2d%2FLgTExA15dy0bt%2FKMIzdqsEGOqUBcBaCzAL4dIg%2BsJ9NGDCS2pE6WP05IsuEUzK%2BKpY6hmRJV4JHFeBm%2F3RccSqFu8qQenSj98k4Aj6B4IEwzQ3XWBxfH84y6%2B1lu2F26fb17TbLhbYZWob0CI2PRTlwT38s2QOkQG%2BEGb3Z0R2JqAZ806q4tHooghtOqyE7ReIcIyCEZ2PgEL%2B%2F%2BV7aQd5Mxc6aHBKspYKOtK1w2ieFNfP4kDIIOFG2&X-Amz-Signature=98f0f42335108ff4172affeb7030e5f57b236dc7df67eac8d5540c1c30f9f133&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MN6QF2F%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDv0%2BmGuwLeJy5hykS1aq3%2FRDcuNbNi2%2FgwN5CsRsPkiAiEAxA5%2F9d3n8yKjXl0MCZQ57zmQJiqf0NV1X4z8mR1tz5QqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI19ua3HbxKHJqaa0yrcA7v05Tc%2FSlsjar12IXgoYKpC%2BzMAdzeIRZuuAKg71xyTmNVqte7qqdLdJh6OX%2BYZhvTVNSx1Uh%2BCLk1woYprm73c%2BoEVx0PrfQitj2HDXBcllW7LUOVDqmm0G%2B1QV50ZorJYPylGD%2BvvUvuUh79D92%2B7gTj5WG4CPu5tZ5V264oqZy4qIaipESvFhvrLyfV0eIXCYXq%2B2aL94SNkLnwKU9QahdkaZS2rZUSFUbB3pk65HDIkmC%2B4ujvs%2FnBnL%2FrLwO7AnPXzxIMw%2BH01iDOyWCeDkP4AOdbgWbGlMIdU7gPyIhZ7%2Ff0Vu1jQIQbpB63OMkgMj9uz55sNsQgf8iOLyqpu2CNND8qoUsQDWZqzYU3ppOQdnG0EuJLbM4KBrYIuqoFRi6h8rVPwIa%2Fi1YFjqkp7nsxxQjA9Zq%2B7%2BhM7HVjS6agtaFaMfgAFsY1196SBGSzeby%2BRHuGM5L8hOKNmrqxMjyz18UsYLPCWSyGvg4RKHcgWn0QLlx6DloZUSRwNWDYptDkjTrwR4CDEk3Wy1Tv01gt1HO%2BumvlYa9sjip%2BTnzRa4qHe5PymJhHI8NO333MR5tT1YIhCj0C6026NHpxU%2F6TUIUo%2BfPUaf97iOckv6US12536rpRUo1hcMMHdqsEGOqUBFVPAxrSb6wA1USdyWQkY3ke2W%2BTCNY%2BRSQKS%2F3%2FmWgy%2BSih%2Foky7KAyr5PZC%2FdSWqUUZ4NHzotrHqmb21HsZcwrtUNBB72hTmFcaAnWeFn2IfCgHUyzd4vQo6EDK3zt9keNQcSGBMyTAZUf09S0DUfidO%2BHBhjo3GbOabkx9peQuzv4jqEAtMfAC3AK%2Bl2K34Fl8feJu4QmCN7lCQoXKpFz6N3Kc&X-Amz-Signature=37fc937740b55ce7d12aa73da14b1f43f24d33e81de22d1ac1a38796b5f2ce2c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4NM7AHC%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHrTDeujwuWf8VYLxuI8fbV6zmGiaOck4LT0OLm4KY8AiEAtyo5JqzZrwFqBoAWdL64CjHLFx4FTyyoNvNiS%2Fhf8xMqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2BTzoIUat09Gr3%2BircA3XMh3yaPqynCnPzCN6EuOtTumm%2FEbPzmyQcIXtk%2BSmm2%2Bu%2FEWIdsUO2eZ7ybv1tn1FtzcBoxdLfZLxSKa2m%2Bs1mO%2BIvy%2BqjP02uQnzfGUE36yMPmeKtUQu1CatJHfPy4w2osPSFgw2UYTfgZmlK8k7lalnXPOvh79HHXMyRk4ZJTzWRKKV8XynUrTslXIWq%2BH1WGWl27ZBgxl5%2F645CDE5i%2Bb1ljKArubc8gEYCmlzt4qtlc2rjLE17Y6uW8R9LeoSbsxVz288tDsl5ZHzCIakFRSEwgv6Jd2FHFM9%2FkJcLqg7zuVwNXBdvNpyj4PXYYD5fmMeakYcWvaW%2FmveeB0oBag3S02UlKlHOyWVjZv8H7tUQmZcQbutzyw76%2F1NJVus9PSiDxi2SQFgnMOebirc7QC5jALcooqgnQdSKeqm5U6f6v6vWkr4GlZ1LMNdFiexLJdj9FUCGyNTPe19niOHm1qpfT8AUpLoO3%2F5dvLk5jjYFShSFMl8mAFvx3svm08OGwIGs1%2BomBYrudVYANrP3KHJMUtUt6eyDPxMXpuO9jZcx63B%2FonzmNyGt2yJj7%2FKAFCtNJJHJkKe685%2Fjc5ILZsNIVTwzIdUsnpt4WEV8BCyRdGB6s%2BFwd3SxMMHdqsEGOqUBO8QMNXH36Lx%2B6RLTCr1D%2BuHYkh7ni8iInQM1iTVDHu7Uj9ERddOZ4sa%2FJZMnVAUR8ZRnIf6PgK%2FCNllZv6w%2By45NqzrQF29F1q22R8YMFaWqSeOOWXwgDhsQVXYrg7aI7%2F7etuNfKpyheOonf0%2Bp6R%2BB%2FUU4dAC9grunXjyKqs8N2fOuRORX4NM6OIFDhltvDzvKhvlK1Z9NmDE3MaC4lYQdMiJq&X-Amz-Signature=841ddec0111deeedbb2c3e8818ead3c322e858441965decca4104a2493a76dfc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYRHB4GQ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCePadUyxuXNN66AM8lBx8ojNvud2PvD1L6VgNFuRpKEQIgCts4LWzQwO47hlM9pIByjPPbF14Lx9cRypXhY8SvWaEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHN7OALXgO%2BHRKaZsircA0croWZ4Rb7nveT7FsEXFpzcB84SqIy%2Frdy%2FNCmtFLiTCMsCzBJi19Mx066HqTJJNauXFsvno2m5Yofwp0k%2FBuDfyDpmd%2BC37REF%2FApiFy%2F9i0mjpmIZf%2Blv5LCmj5%2B%2B%2FRqtMhcuQk12fHSWOTM5p142zTZmt6UiyOz%2BeT6ewMZZ6DZgMC2xQzTpVPRWs5Qs7qOM9x30EBzOWzA67j3rxbaS8FVI84DIQpxttU9avPPqfEKtzcRNNjiEyDoDOdMz0i81G5RmcbaBwtFi36LAJ%2BTjD3fTOAv32suqIEj%2Borjj6R0IN5GUM3np2n5eb0NgXJqq3ssCw8T2xFP1g9UwBzOTy5q3a6jl91HBHii18OJJlGvWkZ02f4cdgTCPgCrcmgWxAMpyUSJF7%2FhCofXUiB%2F7605MtPgCptrtDtH1n8ZHHw0iy2ry9cE58uoyPmR%2FCvf22fy3gzwrNfEeWrJnqx7wuxlcosJtp7L05b%2F47L8kOYDrSoW0uYsCS6jCh1xVUDYNm%2BaEqKpW6KSIQ8jC4xBVFEWWBzYT29jckip3Pax%2FGwi0S91G0yExgtXhCMtbVJUvlS3%2BaNu%2FT6MV0%2Bzm1d8r%2F9GriHzsT2G0WMPKKe2d%2FLgTExA15dy0bt%2FKMIzdqsEGOqUBcBaCzAL4dIg%2BsJ9NGDCS2pE6WP05IsuEUzK%2BKpY6hmRJV4JHFeBm%2F3RccSqFu8qQenSj98k4Aj6B4IEwzQ3XWBxfH84y6%2B1lu2F26fb17TbLhbYZWob0CI2PRTlwT38s2QOkQG%2BEGb3Z0R2JqAZ806q4tHooghtOqyE7ReIcIyCEZ2PgEL%2B%2F%2BV7aQd5Mxc6aHBKspYKOtK1w2ieFNfP4kDIIOFG2&X-Amz-Signature=00f12aa4603dbee3aa5478b49c8c2c439ab8b27b2fa96a4f2e789f5815a042c6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
