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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655TMLMVT%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBj669suPVCToH5hcEhTEMjQlaXCNEe8YjpYJcAedYa%2BAiEA4AquC5Iq0WACSeMwWxhoXCer47HzHi%2Fq%2FRFfCbe955gqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcC06cW55E39kV9bircAyUB5U7L%2F4QtpOHl14WEw95uhf0D3D8I4m4dCCMCxxJuCHs53L%2Ftv%2B8q13OiasYSiSsOTsB7x0DcNOPXt6X2yYGq6YI0sLXYMKdS%2BLkyXrFZ5eDFQl7q8fFClf08V3hmJuwwa2%2FFL%2BFyKTmeRcPZT2qj3pwHeRoE5xmVszNKbpGusQOofKec6IAX%2BuvgblnpClzVkA0IzE2NcRTL2cNCUFxs%2F3l0xTRsS8MU3Q8GyssmRT7s29ECVA8VJq0ZLy%2BnUAKpvlFzavxekOVwJZPdkkRPkiM1h9ah%2FW9zar9COb1ao0R%2Br01COYHY6Vkouk27ZrHeL5zafcEkn%2FXYVdo%2F%2ByJeb0b8qSlcBaPlY5eEDAmBmDmFCje4jaQ5mdy3vdi5REDMFhMviFGW%2F%2B4rzQHvubJgjT6EsvPKFFyLCmTL5ZyZMD0bT%2FutCbJbI19UOPwaRWKzC9aYnilCLov1X%2FitAwOHmWFFJ9if4YUuDkbzldx8LTvaiBl%2BhEkVTutZ4Z%2F0Ebwg4CzCjDMep2YuCIwMMoWpNDG6hVK2m8Ed03t53wU0442kgLYOXVpSybfaqnWVHg34Ian8axgLnE3AMAkzfhMPv8DRUmhxGYHLVadGTs2kD44w6nbjDusUk9sxMNr35cQGOqUBLcWvLYER0ADiXLq1y4oxXrQIeVblyq6bwBAtNaSDpP8lwLabqtNSGfnx1BTVtYPltdW%2B1dbsUzYOtCrIwUURI87QPq486ggglQBDETsUL3XI7cOxFl7xzWqKteu3Pnxe2S4XQJAzERF%2Bg%2FvJcZv9125zTR7vJU0E2Ppoua6K3QDlv1aBcCphlgIRlmYONwWeMQRl5tNX3vDiyOlZBpSfluapZsDg&X-Amz-Signature=44d6d9260de8107c80b1ae3d91d7ed448c99f491507743e37b6c2a0867dbd0c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655TMLMVT%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBj669suPVCToH5hcEhTEMjQlaXCNEe8YjpYJcAedYa%2BAiEA4AquC5Iq0WACSeMwWxhoXCer47HzHi%2Fq%2FRFfCbe955gqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcC06cW55E39kV9bircAyUB5U7L%2F4QtpOHl14WEw95uhf0D3D8I4m4dCCMCxxJuCHs53L%2Ftv%2B8q13OiasYSiSsOTsB7x0DcNOPXt6X2yYGq6YI0sLXYMKdS%2BLkyXrFZ5eDFQl7q8fFClf08V3hmJuwwa2%2FFL%2BFyKTmeRcPZT2qj3pwHeRoE5xmVszNKbpGusQOofKec6IAX%2BuvgblnpClzVkA0IzE2NcRTL2cNCUFxs%2F3l0xTRsS8MU3Q8GyssmRT7s29ECVA8VJq0ZLy%2BnUAKpvlFzavxekOVwJZPdkkRPkiM1h9ah%2FW9zar9COb1ao0R%2Br01COYHY6Vkouk27ZrHeL5zafcEkn%2FXYVdo%2F%2ByJeb0b8qSlcBaPlY5eEDAmBmDmFCje4jaQ5mdy3vdi5REDMFhMviFGW%2F%2B4rzQHvubJgjT6EsvPKFFyLCmTL5ZyZMD0bT%2FutCbJbI19UOPwaRWKzC9aYnilCLov1X%2FitAwOHmWFFJ9if4YUuDkbzldx8LTvaiBl%2BhEkVTutZ4Z%2F0Ebwg4CzCjDMep2YuCIwMMoWpNDG6hVK2m8Ed03t53wU0442kgLYOXVpSybfaqnWVHg34Ian8axgLnE3AMAkzfhMPv8DRUmhxGYHLVadGTs2kD44w6nbjDusUk9sxMNr35cQGOqUBLcWvLYER0ADiXLq1y4oxXrQIeVblyq6bwBAtNaSDpP8lwLabqtNSGfnx1BTVtYPltdW%2B1dbsUzYOtCrIwUURI87QPq486ggglQBDETsUL3XI7cOxFl7xzWqKteu3Pnxe2S4XQJAzERF%2Bg%2FvJcZv9125zTR7vJU0E2Ppoua6K3QDlv1aBcCphlgIRlmYONwWeMQRl5tNX3vDiyOlZBpSfluapZsDg&X-Amz-Signature=65c280a32737de73bf34158599949f3fca2cccc35d46396ca36c5ee101b341f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655TMLMVT%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBj669suPVCToH5hcEhTEMjQlaXCNEe8YjpYJcAedYa%2BAiEA4AquC5Iq0WACSeMwWxhoXCer47HzHi%2Fq%2FRFfCbe955gqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcC06cW55E39kV9bircAyUB5U7L%2F4QtpOHl14WEw95uhf0D3D8I4m4dCCMCxxJuCHs53L%2Ftv%2B8q13OiasYSiSsOTsB7x0DcNOPXt6X2yYGq6YI0sLXYMKdS%2BLkyXrFZ5eDFQl7q8fFClf08V3hmJuwwa2%2FFL%2BFyKTmeRcPZT2qj3pwHeRoE5xmVszNKbpGusQOofKec6IAX%2BuvgblnpClzVkA0IzE2NcRTL2cNCUFxs%2F3l0xTRsS8MU3Q8GyssmRT7s29ECVA8VJq0ZLy%2BnUAKpvlFzavxekOVwJZPdkkRPkiM1h9ah%2FW9zar9COb1ao0R%2Br01COYHY6Vkouk27ZrHeL5zafcEkn%2FXYVdo%2F%2ByJeb0b8qSlcBaPlY5eEDAmBmDmFCje4jaQ5mdy3vdi5REDMFhMviFGW%2F%2B4rzQHvubJgjT6EsvPKFFyLCmTL5ZyZMD0bT%2FutCbJbI19UOPwaRWKzC9aYnilCLov1X%2FitAwOHmWFFJ9if4YUuDkbzldx8LTvaiBl%2BhEkVTutZ4Z%2F0Ebwg4CzCjDMep2YuCIwMMoWpNDG6hVK2m8Ed03t53wU0442kgLYOXVpSybfaqnWVHg34Ian8axgLnE3AMAkzfhMPv8DRUmhxGYHLVadGTs2kD44w6nbjDusUk9sxMNr35cQGOqUBLcWvLYER0ADiXLq1y4oxXrQIeVblyq6bwBAtNaSDpP8lwLabqtNSGfnx1BTVtYPltdW%2B1dbsUzYOtCrIwUURI87QPq486ggglQBDETsUL3XI7cOxFl7xzWqKteu3Pnxe2S4XQJAzERF%2Bg%2FvJcZv9125zTR7vJU0E2Ppoua6K3QDlv1aBcCphlgIRlmYONwWeMQRl5tNX3vDiyOlZBpSfluapZsDg&X-Amz-Signature=baffac38d0ec6626f2d8302bbecb09d3bd0597b14a5b22f40350bf5c39a3b464&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4M3N2V7%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHksKrvHhJyENVGHZtcUi3h7iZeNhvyzbewXfWjCrG4AiBFK05ZyaAmrYQVirLftgbb8QTviv94JyrFgc%2ByPEaWTiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZJu5eQIaBO4RrraSKtwDsCbf8D2FeuZLS64mOYOnHhdqNwQPh0XFah%2BOIq5N%2FGGQ0%2FPYAZT7xcYC6kdYutj6jvV%2FdXUzoe%2B5zm96TzBK%2FvkDyJffcOFo7DwCYsrSpC0JYvcTFn19ARXMyP4O8HbssaSj5JXvyjC%2B%2BgB2T6tgGL6AiZksVyO1ES%2FJBGaMXwlTZmlgsmbUXLCZ1DGae3XPb%2Bt33AEoKXoktMItLFu6EjOJIwmuEGe%2FPDf729ZXYZoCTe6CXIutUqCKfV9T6u8Hg8fI9h%2FQFCB1hfV%2BMQZV3PJeSBfPZ%2Blw1yskTbXhqiHEU8h5aJLaQSBt%2BXm8SPnOlgpKNdPevtPDYzCbk9bf0carPQh%2FA5D5ThL9ktuf%2FYZOJNjGg6KL%2FTBPbRr6JbzGUUAt7j5MuG6zhGtCAQgwSR%2BhRWVkh9u7311RZugcB%2FqGHCPI9nPVLjuEU%2Fdq0KQ6tWiRqcrOg4AxLah1fclxzMDjONxjP6uo05Lkk95b2czmGhkMqu0LxuZJCStbEaCmDic7bJHIXR40gQNEFKsyFQ6dgQcX1SJU0DbSxg9%2FmPkYKX9%2Fc8430kEm%2F43EgOewalZQ8LVzCPMYWsoUbT70w%2F%2BljgYIOk6MBXNM%2BJHaYTv4M0nfzN6smsCM%2FOUw9PflxAY6pgFNc9DOLsUV0poXONyEZE2I1PHS3nAnrVbGCBZbH%2BXQ0Yyq%2FAGNf5erNhXFp%2FItVCKtcWBdV08mHUrlRHWWlipDVmIBHfXb6ad6NBzl5q8A%2FFQi8ROSnnWQsNR%2BC1Scyn%2FBxjQxesgH8aJKLWgtcDhoWVXZ1MZ7C2M5KOwzkIuKDo2PxlChF5iKiJgre8PeYXqEijTEZbuNxBeITKtZph5%2FBUeSOUW6&X-Amz-Signature=c968b25cd10fe4d440184178af93c4ba3d6eec2c9cca6d758b974a5904198fec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WNVHL4W%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWU1G0pAMfa62QMbh3iAfIkGPukvrFw191SQfuy4RT2gIhAKTUZopcd3qcGBWP6PG2OpDCvMMqcCE0lGllfvN8I1gdKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdRZ0%2BinY6lVKw2Ngq3AM90lJWiaU642ZdReiNEgTmngCLULzHWQSiCZU0bnUfh%2B9lndYYuMCrwTYdg%2F%2B2PVyaGe1uPbM8Z02Nhf01H0p9%2Bdp8kWWMeKY4NL5qHjt%2BLqiPfXlL0SSCk3Bi5fQhs5tVo3Q3%2FIp93onUVNxKsT8R%2FLlkThh4AUaOW9uu5mCF4vrLxoRGI%2BYA7fWTW%2BaXMHqLp4mBNoU0G3C38KSB0piWzbwgSgiFt7koafV4%2F%2FW4Ul0USYKqgClKCyVhcEisVy1Yqb9xwrIRbzphwSMiEJ2Hj2cRR7hUJh4BJ38klMFDA%2B38KDUA5pHCEs2%2FqkCIkC3dOxLzmcCXWLRwCEuoNhgu1poV0%2B8Oor%2Bk8korzTqZHhJkayn8kgL7FNdIhooIqw6x1l%2Bq7j5zcMAa7cdb3cJ2lHTf1en7LPyqcvFXd7x2gnXCSnEz6vzAALn7r87QU25i9%2BfHyjkZZZtVs1FNYARYsWdD7BKnrx1H%2F68wjPUxjEXMLFT4QRI6U8xf6kuhDN87jqFyj7gYgiGDUAEPLKhGsyIFgiv0xnbhC36LgWG1RQeKoKLTHINLvwJ9KFQsrRCuyzaf8dJ1%2Bn1TZLwmYUxDp8vgCHnt3F1UcsWoVITDV7mgAFz0OEY0mttqwDCS%2BOXEBjqkAettkKmmTYUbKaeAl3QYM5piqf9j4bGYXpBOs1FrVA2%2FRt0LSFwlmrXdOIsCN8l6L2euRiUGF7qlnK%2BnoD2zWt4ntp%2F9nW3W%2BdrNAsA7Uh8PzfVYdUnw2P8G%2B8W06LVluR%2FbMQkaoBITCoA7qffZPvflLq3zcAgTMMgyZIyoAGVQhMA0taowwvCwNJPFYJ3NDT8xTr67Ln2%2FbvpTanrBqIMqykEY&X-Amz-Signature=41457af8044365a085385ce584bdced2ee0ba428175ed9c598c121557007a4f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655TMLMVT%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBj669suPVCToH5hcEhTEMjQlaXCNEe8YjpYJcAedYa%2BAiEA4AquC5Iq0WACSeMwWxhoXCer47HzHi%2Fq%2FRFfCbe955gqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcC06cW55E39kV9bircAyUB5U7L%2F4QtpOHl14WEw95uhf0D3D8I4m4dCCMCxxJuCHs53L%2Ftv%2B8q13OiasYSiSsOTsB7x0DcNOPXt6X2yYGq6YI0sLXYMKdS%2BLkyXrFZ5eDFQl7q8fFClf08V3hmJuwwa2%2FFL%2BFyKTmeRcPZT2qj3pwHeRoE5xmVszNKbpGusQOofKec6IAX%2BuvgblnpClzVkA0IzE2NcRTL2cNCUFxs%2F3l0xTRsS8MU3Q8GyssmRT7s29ECVA8VJq0ZLy%2BnUAKpvlFzavxekOVwJZPdkkRPkiM1h9ah%2FW9zar9COb1ao0R%2Br01COYHY6Vkouk27ZrHeL5zafcEkn%2FXYVdo%2F%2ByJeb0b8qSlcBaPlY5eEDAmBmDmFCje4jaQ5mdy3vdi5REDMFhMviFGW%2F%2B4rzQHvubJgjT6EsvPKFFyLCmTL5ZyZMD0bT%2FutCbJbI19UOPwaRWKzC9aYnilCLov1X%2FitAwOHmWFFJ9if4YUuDkbzldx8LTvaiBl%2BhEkVTutZ4Z%2F0Ebwg4CzCjDMep2YuCIwMMoWpNDG6hVK2m8Ed03t53wU0442kgLYOXVpSybfaqnWVHg34Ian8axgLnE3AMAkzfhMPv8DRUmhxGYHLVadGTs2kD44w6nbjDusUk9sxMNr35cQGOqUBLcWvLYER0ADiXLq1y4oxXrQIeVblyq6bwBAtNaSDpP8lwLabqtNSGfnx1BTVtYPltdW%2B1dbsUzYOtCrIwUURI87QPq486ggglQBDETsUL3XI7cOxFl7xzWqKteu3Pnxe2S4XQJAzERF%2Bg%2FvJcZv9125zTR7vJU0E2Ppoua6K3QDlv1aBcCphlgIRlmYONwWeMQRl5tNX3vDiyOlZBpSfluapZsDg&X-Amz-Signature=bd81a768f0406c6aaf654caf65040efd8df53034bb114f83ed8cdccb79edc7a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
