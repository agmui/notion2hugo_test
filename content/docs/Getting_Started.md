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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBRKJSC3%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T061255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnq2gEJqHeqH7AGBZ93X8v2IB6CJL3Ug57aW8zopjKuAiEAqkcPnSqHa%2F%2FHiT%2FYjCxNg%2F6QtRtUWn3LAyDPaWbDnFkqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7OPP1G5gsmRi3KMyrcA9Mc966qysqStA0cO5r5D2WTUpCEug43F0kF39f2k2nWQtX4jbZ0WYliAHMwYXIyGRZJhshjDUov%2BqRCziS0NcI2%2BHwgtwOH6Ml5CB%2FcJUg%2Fh4ggr19%2Bjq%2Fr1RR%2FR1ggnt0SsAo2FzNxmAN2PrgW1gRrFhN7aoBwsLvy%2B20haL20NbV2KBe5Yj6BiR%2BGNgF5QBuaahxfB6Pmhit6yAxWwj%2Bq2aW8fZ9z5MBNQbzM%2FiM6o%2FIbJcb%2FNiALnQO1SNN%2FViEP7W0wlIR0y3tuwbd8Cbmh2W6JTZgMUwxLrvgiP1lJ%2FzMZjjF0MLWF%2FY%2BBbjcMGNRUTmP1Ekz2yeOsRRfHeZb7jxBUcCuTmJ%2BOufuSKshJQs1s2lZFI%2FsEB2n69gxlVRXVJgyb4l1rCEMaG3jvbSV73vrr6JbFwNgTpxGxjx8vyfdpXLsRDrEGh4RZuwaMP0Hgb6Wk1qDCv56Q3HacjIiuss38K5WcUqML4xY0ioHwfX%2BM8JGSLkd1H5VEkY0bisSW2qaPveSX%2FHI2yNBLkwjN85iJPfd0jEKwUFI1%2FykDl%2Fn92AJjgv8Fu9mz73b9KnXo63jgUUfC%2F5TqPgivUE9pk6TvWCB%2FZCJGz5weo4%2BjQonIx2%2BmZ0kobZ3MMPPRwcAGOqUBWFkf0S0V%2FLy%2FAd9elgmpSaUYujOqkV2LgeLpbxNRSUaLgm6lVrdkG0mrk756MZcTMcs2o%2FqcLi3ep4%2BeGDd0kD5U5p2YZzqzPf2WcBWhLjlxGJ%2BGmf5nZEWKdo5x9dCoCzek%2FVzX2t4ihX3PqQr%2BjOKoPe4XM%2BGC7YlcOZXq%2BqNxQftYTE%2BsyqvpZNAbqjdwtzWpsLHShvFP8LOisj7L26jnhxbm&X-Amz-Signature=4b060992006b2a4c8e48af91f2a40508aafaa5f6652f7d1eed89989538e0bdfc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBRKJSC3%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T061255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnq2gEJqHeqH7AGBZ93X8v2IB6CJL3Ug57aW8zopjKuAiEAqkcPnSqHa%2F%2FHiT%2FYjCxNg%2F6QtRtUWn3LAyDPaWbDnFkqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7OPP1G5gsmRi3KMyrcA9Mc966qysqStA0cO5r5D2WTUpCEug43F0kF39f2k2nWQtX4jbZ0WYliAHMwYXIyGRZJhshjDUov%2BqRCziS0NcI2%2BHwgtwOH6Ml5CB%2FcJUg%2Fh4ggr19%2Bjq%2Fr1RR%2FR1ggnt0SsAo2FzNxmAN2PrgW1gRrFhN7aoBwsLvy%2B20haL20NbV2KBe5Yj6BiR%2BGNgF5QBuaahxfB6Pmhit6yAxWwj%2Bq2aW8fZ9z5MBNQbzM%2FiM6o%2FIbJcb%2FNiALnQO1SNN%2FViEP7W0wlIR0y3tuwbd8Cbmh2W6JTZgMUwxLrvgiP1lJ%2FzMZjjF0MLWF%2FY%2BBbjcMGNRUTmP1Ekz2yeOsRRfHeZb7jxBUcCuTmJ%2BOufuSKshJQs1s2lZFI%2FsEB2n69gxlVRXVJgyb4l1rCEMaG3jvbSV73vrr6JbFwNgTpxGxjx8vyfdpXLsRDrEGh4RZuwaMP0Hgb6Wk1qDCv56Q3HacjIiuss38K5WcUqML4xY0ioHwfX%2BM8JGSLkd1H5VEkY0bisSW2qaPveSX%2FHI2yNBLkwjN85iJPfd0jEKwUFI1%2FykDl%2Fn92AJjgv8Fu9mz73b9KnXo63jgUUfC%2F5TqPgivUE9pk6TvWCB%2FZCJGz5weo4%2BjQonIx2%2BmZ0kobZ3MMPPRwcAGOqUBWFkf0S0V%2FLy%2FAd9elgmpSaUYujOqkV2LgeLpbxNRSUaLgm6lVrdkG0mrk756MZcTMcs2o%2FqcLi3ep4%2BeGDd0kD5U5p2YZzqzPf2WcBWhLjlxGJ%2BGmf5nZEWKdo5x9dCoCzek%2FVzX2t4ihX3PqQr%2BjOKoPe4XM%2BGC7YlcOZXq%2BqNxQftYTE%2BsyqvpZNAbqjdwtzWpsLHShvFP8LOisj7L26jnhxbm&X-Amz-Signature=8042862b397fa4e68234f3abd78e80b4a8a0cd014db8243849bd8c07120e85a3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQLKRQRR%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzF0pbCJm1zT3LaAaHVjMu8Q7l9%2BI041NktOedauuOnAIgN0FJMHrBuRSx3paEduDsLooEjykPWb1b0a76rP9ISs4qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1%2FbYsqUIU74HNdYyrcA%2FYIeTvSXKQ5OZc8n6tNxQZWadZhjzpbEnZvc%2BHJq5qJfKUAC%2BD6stG1T1EVMazSzcKBsJdKZxsvdA2JdzIxxxDfBgPMK7wgLsQ%2FpLI1JsXO5DesznxRW1UNhRAjMsEQ19sbOHEzQUP4UpRmuiGlDBVcgqJhoDoFC51FZqodXp0rO5XHFc5jek5Be4aN%2BW29Hc08eSNzYUFoEnfFfnk8ZCbnNacMB%2BTV9cUPVQgv5quwtwj8SrKi2qvSselTqFcGg2qI05o47yEcicecDvxjl80%2FBTU9gOUCihL3m56mtSRY4UH%2B4lFkkj0fhlzC76ZtDT9OALjGWxsng0TnTdDBeyMZB88tJn5LW%2BTx%2BbdEZ8tBu%2FVRP%2BQWvpxebL4W9WkO7b38Yx1ixvFLxL8b%2Fhc6BFdHI1%2B8vRAjeQM%2Bh0fOKa6Lti0cUxh1QKfyjyEMZk9EVZ9JbusqNf0A%2Fh3l1vCNiQjoKzOV%2BQ3iL5J6IkGtpy2oV%2F%2FhygleFC%2Fbnl7kbyXtG892YBQi75%2BPjuYrLB%2BvYVITS6TRbykfUDXuX0Sl9KcTn%2FKamjN3NwERsgdquXIJUgnPlmwNSFDfcLcmgwcZdvJRIH5vu1sDF6h29gcPwNH0zurxJVIAwLS4f3saMOnRwcAGOqUBz6faxwzbBmf1YtL21KhwqBVfK3ct%2Ft5LznyhgpPDvLRRruTTAl%2FFkx5vF4u5XBRfoMkQsyBsBixelj63NrLAIVF0VvsCjEIibkjl2OV56YWYXuHvkOYhpR%2B4C557yBCTblBH7rsOCIYdU8ILxKNU0WeYPq6d1rmLK4Ni6%2FF6vUFc1LN%2Fo1sIlgFYkgx%2F%2FHDcPs3GAWtyjdq2%2Fx%2BMvc8ArmYMNy3F&X-Amz-Signature=d7907b512ba33a61026aee263ddc96f6f4862a4a08758a744ee8aa7e0e7cc1bb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFG7YF2Z%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrGZd7oJzirx%2Fi5I6CkOoU87UWH%2FK%2FfK2E5KpWAuS4QwIgBbMQGGgAaLqyeIA2HlAFKo1RXP8p0usvhqeJH0KP5IMqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqDtdTCWR2GK3jsAircA1eV93Yc7CrQI1GSfOFHbhiAyL9SN8UH5ABhGvSgWgubX1O%2FrkxNqbrspRHvbkxcnI22yWpLjoZbkHXQYtyOyz6KeWAxv3QCMJPwDLhPK%2BI8P6TVrrN3LzVHzMtAI79lgTDZdXRcL4WzCyxC7qBnNF5JhHrI2XPBRGzhsnDX47iL6KF6xy%2BCZb1uzoHWz9g6DXykC2RuzkuCnAzoJHwWZStGjzcsdmseyuHUpJ00ohVHcexiIxhizX%2BBljnwBkZqmEeQKoKvwwADAG5BYwBG68LfGnvdlynezaUtLMJsoBLZeHwMHZT9vSke9NTbiHTL5xpY%2FZO9Eh4KkKUvjb2qsJbcIVQvDCFsyoNGKM3RJdZjajWs3XxHXy3k6IPkniY8ZINXMvn8f3IEAZN%2BuzgOUvJ9lI1s38AlNUPpwehbVG23dgOP19zaNGFtQ2M34Ajyb2htzQ1gVIYI8fxhrwhjEZduoQETfXh1xhRT3h5oZhW6kGaBZbg6ojvcyW%2FqrDYRkK3%2BqCcbQkZn7h6DwOdbszG1Rd0QF%2By6%2F2a%2BdJz1pLO3DujlmG0%2Fu5j9jecqb%2F0C%2B2r7AvOVRIt14cOglUtuHmsNJb5BNzOhBw8U8p28zSRzxwQjjIjDxTrDzmA6MPLRwcAGOqUBPABi7RSYl3uzUuXfoeuqaf49PYR%2BY3qHyeDPxaq%2BbkvmGy5uvKDWH2UBCVrfP2gHO85GawapcMsNd78PRMfxYvkDywG0qMtApFGVWub247C8A%2F7OQm0HzhUj13Y45mGilic%2BdbWRIQPl%2BSLDIt5pwvGZ%2B7CpqX7%2BtbK2%2FP8gtXt8SXDaOldFHGp0dSnsy4i5GWNOgl%2BkvQEFUOY5DnWy3cusxGxV&X-Amz-Signature=26328e342304ac60f68cf4a67b8a2d09d8ead3c0c9e570fbf035e60e56896e79&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBRKJSC3%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T061255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnq2gEJqHeqH7AGBZ93X8v2IB6CJL3Ug57aW8zopjKuAiEAqkcPnSqHa%2F%2FHiT%2FYjCxNg%2F6QtRtUWn3LAyDPaWbDnFkqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7OPP1G5gsmRi3KMyrcA9Mc966qysqStA0cO5r5D2WTUpCEug43F0kF39f2k2nWQtX4jbZ0WYliAHMwYXIyGRZJhshjDUov%2BqRCziS0NcI2%2BHwgtwOH6Ml5CB%2FcJUg%2Fh4ggr19%2Bjq%2Fr1RR%2FR1ggnt0SsAo2FzNxmAN2PrgW1gRrFhN7aoBwsLvy%2B20haL20NbV2KBe5Yj6BiR%2BGNgF5QBuaahxfB6Pmhit6yAxWwj%2Bq2aW8fZ9z5MBNQbzM%2FiM6o%2FIbJcb%2FNiALnQO1SNN%2FViEP7W0wlIR0y3tuwbd8Cbmh2W6JTZgMUwxLrvgiP1lJ%2FzMZjjF0MLWF%2FY%2BBbjcMGNRUTmP1Ekz2yeOsRRfHeZb7jxBUcCuTmJ%2BOufuSKshJQs1s2lZFI%2FsEB2n69gxlVRXVJgyb4l1rCEMaG3jvbSV73vrr6JbFwNgTpxGxjx8vyfdpXLsRDrEGh4RZuwaMP0Hgb6Wk1qDCv56Q3HacjIiuss38K5WcUqML4xY0ioHwfX%2BM8JGSLkd1H5VEkY0bisSW2qaPveSX%2FHI2yNBLkwjN85iJPfd0jEKwUFI1%2FykDl%2Fn92AJjgv8Fu9mz73b9KnXo63jgUUfC%2F5TqPgivUE9pk6TvWCB%2FZCJGz5weo4%2BjQonIx2%2BmZ0kobZ3MMPPRwcAGOqUBWFkf0S0V%2FLy%2FAd9elgmpSaUYujOqkV2LgeLpbxNRSUaLgm6lVrdkG0mrk756MZcTMcs2o%2FqcLi3ep4%2BeGDd0kD5U5p2YZzqzPf2WcBWhLjlxGJ%2BGmf5nZEWKdo5x9dCoCzek%2FVzX2t4ihX3PqQr%2BjOKoPe4XM%2BGC7YlcOZXq%2BqNxQftYTE%2BsyqvpZNAbqjdwtzWpsLHShvFP8LOisj7L26jnhxbm&X-Amz-Signature=8e34b6a234fd83b285b736ca8d89d15bb8f1335e2edaecc8ff313c23cb3a3b28&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
