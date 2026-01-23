---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XFXXZYK%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDjs%2BYfy9rWoD58t9JqtjvzxU47yV0jAwLVYAHcc2pwiQIgGqxF4H6zJ2qfeMQG2BFIq3LI2ohgkrtxxrvaL9Edi%2FMqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJE2FJZ58R75Qe3hXCrcA0MI%2F4kXBJ6rOTMWVXc7p08IO%2Bvri6mLXF%2B0oIN1leGLrAYE7SUyaVWmxRPJ%2Bdm1L8pxBS6S2tHkY6p1CQRKUExMee7LJ0P%2BypLXYnpq7yBQ3A%2F5DCoLhF4BIyTrtKQYAd6cv2H9ffk%2Fe8PPfmBWE%2FGHb5VkBXrOeHA6eRVdQXxjk3YWEOJQxFlemUzJ0ZMe%2F71LemsFpLkt6JkDQEkEebO17zGfUYqY6FumKRTM9wshLbEu1pE%2F2nZe8qyQgH3ZxMehY%2BvEnMfgakxHeq2cYi1iP9HMQLAA9W9RY%2BG%2BAzvbT72TvInm3pHBn6I6P%2Fp9SEpyS73fw17LCPptZUgtjr8kPDYpOutKX%2BEcgqYtB7EWLZubs%2FSAiTGaKGuDkyzO7EFvayjgW006yqj8512zKlIqrsnll7WXIh%2Bcb1Ph9iEjF54CUT19U6oVSqK%2F3q9OCHP5RvR8urKEulSVdDaxd7HFhOZ90v5ZqhZzEwnLoTUI551dZ3axZLRoF1ajyA%2F64of%2FniG0mXEJNdyRoIqKZ7YfNuRIlpFNqgWpJFfk4z9rmrOvcTsVLOLP2qPGrGS6q4WcN9Y26l2z33Tw%2Fn9tAO4604rrfULhbBaZVmzIMzS9TzMuLhKX8Q1Aiz3%2FMOCKy8sGOqUB%2FC3rtTdkycHd%2FwtorLKLvsVVUzYLTSy641rmLCwJDjEPmlAaTTjJBih7y4iwktbFNhNCtYQxILqmV1N3Fysd%2BzuvBGt2zxNvzX70AEOTwgcgvmT3DCFOxxZPV6tOib0xi%2BQe5CyPaA9lGygvrRgUf%2BPNBYEQXpIfumIuWXAvSBXYYUYQcVNNR56S%2B8d3LE8S0D%2BIlgFvRMcMQHk9GzztNjY%2BAM1R&X-Amz-Signature=bd3070827459c992782c039ad5db1842a47801929953f1d49a647010c0816768&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XFXXZYK%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDjs%2BYfy9rWoD58t9JqtjvzxU47yV0jAwLVYAHcc2pwiQIgGqxF4H6zJ2qfeMQG2BFIq3LI2ohgkrtxxrvaL9Edi%2FMqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJE2FJZ58R75Qe3hXCrcA0MI%2F4kXBJ6rOTMWVXc7p08IO%2Bvri6mLXF%2B0oIN1leGLrAYE7SUyaVWmxRPJ%2Bdm1L8pxBS6S2tHkY6p1CQRKUExMee7LJ0P%2BypLXYnpq7yBQ3A%2F5DCoLhF4BIyTrtKQYAd6cv2H9ffk%2Fe8PPfmBWE%2FGHb5VkBXrOeHA6eRVdQXxjk3YWEOJQxFlemUzJ0ZMe%2F71LemsFpLkt6JkDQEkEebO17zGfUYqY6FumKRTM9wshLbEu1pE%2F2nZe8qyQgH3ZxMehY%2BvEnMfgakxHeq2cYi1iP9HMQLAA9W9RY%2BG%2BAzvbT72TvInm3pHBn6I6P%2Fp9SEpyS73fw17LCPptZUgtjr8kPDYpOutKX%2BEcgqYtB7EWLZubs%2FSAiTGaKGuDkyzO7EFvayjgW006yqj8512zKlIqrsnll7WXIh%2Bcb1Ph9iEjF54CUT19U6oVSqK%2F3q9OCHP5RvR8urKEulSVdDaxd7HFhOZ90v5ZqhZzEwnLoTUI551dZ3axZLRoF1ajyA%2F64of%2FniG0mXEJNdyRoIqKZ7YfNuRIlpFNqgWpJFfk4z9rmrOvcTsVLOLP2qPGrGS6q4WcN9Y26l2z33Tw%2Fn9tAO4604rrfULhbBaZVmzIMzS9TzMuLhKX8Q1Aiz3%2FMOCKy8sGOqUB%2FC3rtTdkycHd%2FwtorLKLvsVVUzYLTSy641rmLCwJDjEPmlAaTTjJBih7y4iwktbFNhNCtYQxILqmV1N3Fysd%2BzuvBGt2zxNvzX70AEOTwgcgvmT3DCFOxxZPV6tOib0xi%2BQe5CyPaA9lGygvrRgUf%2BPNBYEQXpIfumIuWXAvSBXYYUYQcVNNR56S%2B8d3LE8S0D%2BIlgFvRMcMQHk9GzztNjY%2BAM1R&X-Amz-Signature=7d7332bea3ab09c94ceea0dcdbda80f1c2d3a4a625c7656efa08725b6919ac11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XFXXZYK%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDjs%2BYfy9rWoD58t9JqtjvzxU47yV0jAwLVYAHcc2pwiQIgGqxF4H6zJ2qfeMQG2BFIq3LI2ohgkrtxxrvaL9Edi%2FMqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJE2FJZ58R75Qe3hXCrcA0MI%2F4kXBJ6rOTMWVXc7p08IO%2Bvri6mLXF%2B0oIN1leGLrAYE7SUyaVWmxRPJ%2Bdm1L8pxBS6S2tHkY6p1CQRKUExMee7LJ0P%2BypLXYnpq7yBQ3A%2F5DCoLhF4BIyTrtKQYAd6cv2H9ffk%2Fe8PPfmBWE%2FGHb5VkBXrOeHA6eRVdQXxjk3YWEOJQxFlemUzJ0ZMe%2F71LemsFpLkt6JkDQEkEebO17zGfUYqY6FumKRTM9wshLbEu1pE%2F2nZe8qyQgH3ZxMehY%2BvEnMfgakxHeq2cYi1iP9HMQLAA9W9RY%2BG%2BAzvbT72TvInm3pHBn6I6P%2Fp9SEpyS73fw17LCPptZUgtjr8kPDYpOutKX%2BEcgqYtB7EWLZubs%2FSAiTGaKGuDkyzO7EFvayjgW006yqj8512zKlIqrsnll7WXIh%2Bcb1Ph9iEjF54CUT19U6oVSqK%2F3q9OCHP5RvR8urKEulSVdDaxd7HFhOZ90v5ZqhZzEwnLoTUI551dZ3axZLRoF1ajyA%2F64of%2FniG0mXEJNdyRoIqKZ7YfNuRIlpFNqgWpJFfk4z9rmrOvcTsVLOLP2qPGrGS6q4WcN9Y26l2z33Tw%2Fn9tAO4604rrfULhbBaZVmzIMzS9TzMuLhKX8Q1Aiz3%2FMOCKy8sGOqUB%2FC3rtTdkycHd%2FwtorLKLvsVVUzYLTSy641rmLCwJDjEPmlAaTTjJBih7y4iwktbFNhNCtYQxILqmV1N3Fysd%2BzuvBGt2zxNvzX70AEOTwgcgvmT3DCFOxxZPV6tOib0xi%2BQe5CyPaA9lGygvrRgUf%2BPNBYEQXpIfumIuWXAvSBXYYUYQcVNNR56S%2B8d3LE8S0D%2BIlgFvRMcMQHk9GzztNjY%2BAM1R&X-Amz-Signature=0578a175716df85cdb1d89750517a08e9dca5700b550e06867bef50d1c53e45a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWMPCHNO%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCi4qK97YkBYxCsH01AZnRPwNb00XUs74CaKRZZLmVhOQIhAMpuVusIGfirEbqEOxF5skVeXE2giLIfmpJRGCvlIXzqKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FzLegcqf9sHlNfZUq3AOJ217h0p3AojydmjgED9p1g6LUdfRcfOO0ohlsV3Ct4uQD%2BPulYOWHnfdpFe7mbU2hldatqTSg251wEZHAK6S6wgitDvXqNsb6y4rZ3knBcQX7pTS9NoKNPHvh7mYRqAOysFeQOpac5oGds5uRtBGXsrSf0x%2BZJnf5sT8lpGHhBjdN5Sig9n9j2N1obBq1UNM2TyXcRn%2FK1xr28uMhC60JUBQrdndyrLPZZP3ICDXDLot7E8WXkcSX2wZwzso%2FSXxpcX%2F%2BKvr7eIQ4eCFIY%2B5PQvLbGaQvT2lwsscLjz9M9jTpf1hyhvyF%2FUSkphbshq2jqT6OyjBYVjDq1%2BEq3bCoa7AZMppU1cNQgrwuXnKwoH2ogp%2BzADkPHA%2Fxi%2BFSa5%2BsNyMC6txB2BDkODWOm0ETA3f68ofrGLyj6mOjSjBVSBIQTI76JmuNdk291nKequlvnUzsGf6c5Uh1nUk1%2B3QRv3fbVaXNVopMEbwKh2D0e%2FVXAFAIdLB0VJxSj4vqSgtx%2BEOMJ8GAkmdJgXmMs3pRD4rnNPLW%2BVcrVbjEUdkrpKRHO5IAzv9%2FoFoUdBWnxIwxvyqdROikFbTv0y%2BCZZhaGdCEfEyKZiwDsLZo%2BR4hIKWdxrDTvMus6AHprzC1i8vLBjqkAViOMzF8JYOlHO%2Fd4oNtUDdEUEgavS2LEamKraQaSP08Ohb4KJeZvJRgXMZZm3MOz5VrOagSuKzAtlSCJlx6DtUtgqelr2NrDfLVp2YWJX4rVUnkdf5%2BHRmMcDudumei557L5ScAoT6PSpMGqJvpKgBB1zDAfIyGDenaquv%2FklMZBneTdJ%2FyLJLgcxEyTjpYA%2FVFcT4KBf0DfYBYEVE%2FLAuofAUg&X-Amz-Signature=13e7afbe84d9e22928dce494607f117fbfe7f75609923c3072eaa563e176d650&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI3QBUE2%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIDvV%2FTG25AKvLlysZr2UNHstKje1YtwEsKMDXQgA%2Fm0NAiBFppiC2l12KqSePHpx7KfVb3NYPxHcd0orFHlnhcy6PiqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQwOdRBkiXTPYC6hOKtwDMSnRWtn1bga2z83AeyEpqxCGynr%2Bd81bxgE4vryhS8l9jqmWSd4hNhx3pYprMhjb5050bsXP1%2BvxbAzXBlaHeEauhVIkECGiDGug6yoPAjEa8eLUixIgW4Ut8vnJ2c3l%2FbzW0PVZm%2BbxT1R%2BZC8Jq1CUbWfOkwEjvD5Anoz1bDhN%2FlN5N4SwdwZtyEof9hmy6zytF21V0fZjnDsHJP95ip6Vzt8MIABYmaqreEysWJqTc2BAlpgHGhXKXtT7Z7I%2FVIk5mX75XizFr7wECKg%2Ft7fTsANt0kzn6EaIfxPnwGzsAMbd0O9Dx%2FX8mAPOAkBRIM8lVBc56mC3U1wFgLzwZdka%2BS6dri8ZncHnYv%2BQcZhtF%2F3T7CHpQr1X5OFx1q99UFCHj28EoshZ7xa1GLZsi%2FklZWZe2GMNHcDKjS8YFFWBs0YH4NjoE3tW6R4vvevYey06cv6E1F%2FuSD43VeaiLTTKjf5Lsd8yLZJWewYm9HDHaguGRlZWVFFsH16CYayAxvvgC2jUuqAguBg5kR3WAbfydZLxGnJQMNwZ%2BNj1eMMR6OCkgOLUL%2FOOM6ET%2FcS81L2FJMIMaNzZ2awQIFGit9AJWcjYFjcoVYbnckRN%2BA1OfjNtCJ%2FjtzWsHmcwnorLywY6pgH1xvBxM99iLk1JjeFc%2BdTyf7xjnbq5Mbcsh6nPeEVGMsILT1UMrBKwEHvNQWTuuBuMO2QjzWOlZ22O30WWA7a30BHbjGU8dVbyb3mVPVCVD7FRZ817dNSyVh0OM4SeWb1s4EMxco2t9LZcZaWELrO7lhYCXp7gRe%2FmG%2Bvdxi00q9DMo5%2BZcAPy0QByUGadfbM7%2FQBiqcSDoqLOspTLWbahiv2xpxOf&X-Amz-Signature=20d7a27959c427a792c58de9339a30bb2201c64f0e5eea3b79ccd04be300f7f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XFXXZYK%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDjs%2BYfy9rWoD58t9JqtjvzxU47yV0jAwLVYAHcc2pwiQIgGqxF4H6zJ2qfeMQG2BFIq3LI2ohgkrtxxrvaL9Edi%2FMqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJE2FJZ58R75Qe3hXCrcA0MI%2F4kXBJ6rOTMWVXc7p08IO%2Bvri6mLXF%2B0oIN1leGLrAYE7SUyaVWmxRPJ%2Bdm1L8pxBS6S2tHkY6p1CQRKUExMee7LJ0P%2BypLXYnpq7yBQ3A%2F5DCoLhF4BIyTrtKQYAd6cv2H9ffk%2Fe8PPfmBWE%2FGHb5VkBXrOeHA6eRVdQXxjk3YWEOJQxFlemUzJ0ZMe%2F71LemsFpLkt6JkDQEkEebO17zGfUYqY6FumKRTM9wshLbEu1pE%2F2nZe8qyQgH3ZxMehY%2BvEnMfgakxHeq2cYi1iP9HMQLAA9W9RY%2BG%2BAzvbT72TvInm3pHBn6I6P%2Fp9SEpyS73fw17LCPptZUgtjr8kPDYpOutKX%2BEcgqYtB7EWLZubs%2FSAiTGaKGuDkyzO7EFvayjgW006yqj8512zKlIqrsnll7WXIh%2Bcb1Ph9iEjF54CUT19U6oVSqK%2F3q9OCHP5RvR8urKEulSVdDaxd7HFhOZ90v5ZqhZzEwnLoTUI551dZ3axZLRoF1ajyA%2F64of%2FniG0mXEJNdyRoIqKZ7YfNuRIlpFNqgWpJFfk4z9rmrOvcTsVLOLP2qPGrGS6q4WcN9Y26l2z33Tw%2Fn9tAO4604rrfULhbBaZVmzIMzS9TzMuLhKX8Q1Aiz3%2FMOCKy8sGOqUB%2FC3rtTdkycHd%2FwtorLKLvsVVUzYLTSy641rmLCwJDjEPmlAaTTjJBih7y4iwktbFNhNCtYQxILqmV1N3Fysd%2BzuvBGt2zxNvzX70AEOTwgcgvmT3DCFOxxZPV6tOib0xi%2BQe5CyPaA9lGygvrRgUf%2BPNBYEQXpIfumIuWXAvSBXYYUYQcVNNR56S%2B8d3LE8S0D%2BIlgFvRMcMQHk9GzztNjY%2BAM1R&X-Amz-Signature=aa26168347b23358ef6841650d8f0299ca2e21ac041156b42f093cb4fc3b0279&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
