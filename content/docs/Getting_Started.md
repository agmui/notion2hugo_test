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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PD7NGP3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDwj82u4BybQ4%2BC3vzSN%2FLUaoeozLoR%2FUOriqUt87HRaQIhAKWDuxxRqba3W6ZXmAfk8mlvDi1%2B6i967IYsAQPGrq%2FRKv8DCHcQABoMNjM3NDIzMTgzODA1IgxlxSk7dVPx5hrWY6kq3AMnY6bNyWtnhUV3NsUurnWTuMpdsIhZMjm8aFtPvu%2FnG5YEbt4LHk065CbVBkY%2BYc2BlinRp%2F5yYAMkFDkbi2mLap4npc17M7VQFhQnVECQQqPsQlvKkU53rfQPZb7R6qwnq%2Fj0vo2lWLJuUW5p80GMvZINijYgVwAaDsy7utgm4TIPTwntzhbqKlGBq9VKEV4EAQwHVB3Fv3qzJ1fh3EIZ9zER4qdgWt0zGfPs23l14fhbFMv%2FnlviPoZ3Pf7cGXZJCd%2BDK5ReoexunLy99IZ7KnrOgN7TQVcbHF4d4Mvmdk60TrE%2FoS2hgb7CASPVEqUim4AOdQOekUVmZfMSjjLLUkeHZTYdFh5mGplu6%2F%2BeuOyk7qHor4vQOdoPnLcJdEqCRb5DBONXRqrS89WshngelWGTfG7imKdjgsrkbM9%2FSVCeONQTGX2faLdtYi%2BBgnEwhQAatvLSiPukvGBbE6o63SjeSaj707Bmak5zET8PeotmHlNK6fw7dN6zPoHJep6Pb7e6VhJLUuVg37l%2FWlnQ5Pt0uIxZsC1%2Fvbvm4stQlsCToUcem%2FR4Wby79ql11CCTFv8rbWqGy7gkJPsnF5m%2BBkiSulACV3FR%2FlbYeKVzKM1zeocLe2EvRuYPNjC%2BnYLFBjqkAf5tTJT1xIaKLecjPx6709WkaB8%2ByRgL8xTCNpMmcDvZBi6xU3cJ80%2FuI6SOV6I22xxYoiEgw9e3X5eVFdFRRYE5tQVJIAN3FCuE2NL5bDGxr9qrAO9Rx5g3ZdPDkFEBlKqbFcEfH2JkQ%2Bm53SthFNgs09y5gkbJfwRIA9SJtdxOh%2B%2FDX7ZzcYRD5NK568GA6DLBMhdLakrOX9sUKXBwH8thQFhC&X-Amz-Signature=aa71e1c890b5136b020437ac9d6f0f3f27f552d74e6b5ffc15288a7e4c083370&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PD7NGP3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDwj82u4BybQ4%2BC3vzSN%2FLUaoeozLoR%2FUOriqUt87HRaQIhAKWDuxxRqba3W6ZXmAfk8mlvDi1%2B6i967IYsAQPGrq%2FRKv8DCHcQABoMNjM3NDIzMTgzODA1IgxlxSk7dVPx5hrWY6kq3AMnY6bNyWtnhUV3NsUurnWTuMpdsIhZMjm8aFtPvu%2FnG5YEbt4LHk065CbVBkY%2BYc2BlinRp%2F5yYAMkFDkbi2mLap4npc17M7VQFhQnVECQQqPsQlvKkU53rfQPZb7R6qwnq%2Fj0vo2lWLJuUW5p80GMvZINijYgVwAaDsy7utgm4TIPTwntzhbqKlGBq9VKEV4EAQwHVB3Fv3qzJ1fh3EIZ9zER4qdgWt0zGfPs23l14fhbFMv%2FnlviPoZ3Pf7cGXZJCd%2BDK5ReoexunLy99IZ7KnrOgN7TQVcbHF4d4Mvmdk60TrE%2FoS2hgb7CASPVEqUim4AOdQOekUVmZfMSjjLLUkeHZTYdFh5mGplu6%2F%2BeuOyk7qHor4vQOdoPnLcJdEqCRb5DBONXRqrS89WshngelWGTfG7imKdjgsrkbM9%2FSVCeONQTGX2faLdtYi%2BBgnEwhQAatvLSiPukvGBbE6o63SjeSaj707Bmak5zET8PeotmHlNK6fw7dN6zPoHJep6Pb7e6VhJLUuVg37l%2FWlnQ5Pt0uIxZsC1%2Fvbvm4stQlsCToUcem%2FR4Wby79ql11CCTFv8rbWqGy7gkJPsnF5m%2BBkiSulACV3FR%2FlbYeKVzKM1zeocLe2EvRuYPNjC%2BnYLFBjqkAf5tTJT1xIaKLecjPx6709WkaB8%2ByRgL8xTCNpMmcDvZBi6xU3cJ80%2FuI6SOV6I22xxYoiEgw9e3X5eVFdFRRYE5tQVJIAN3FCuE2NL5bDGxr9qrAO9Rx5g3ZdPDkFEBlKqbFcEfH2JkQ%2Bm53SthFNgs09y5gkbJfwRIA9SJtdxOh%2B%2FDX7ZzcYRD5NK568GA6DLBMhdLakrOX9sUKXBwH8thQFhC&X-Amz-Signature=5db08288a542c095753403a474a92e4b0f1de4a47e26f11b679b345e63b05b6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PD7NGP3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDwj82u4BybQ4%2BC3vzSN%2FLUaoeozLoR%2FUOriqUt87HRaQIhAKWDuxxRqba3W6ZXmAfk8mlvDi1%2B6i967IYsAQPGrq%2FRKv8DCHcQABoMNjM3NDIzMTgzODA1IgxlxSk7dVPx5hrWY6kq3AMnY6bNyWtnhUV3NsUurnWTuMpdsIhZMjm8aFtPvu%2FnG5YEbt4LHk065CbVBkY%2BYc2BlinRp%2F5yYAMkFDkbi2mLap4npc17M7VQFhQnVECQQqPsQlvKkU53rfQPZb7R6qwnq%2Fj0vo2lWLJuUW5p80GMvZINijYgVwAaDsy7utgm4TIPTwntzhbqKlGBq9VKEV4EAQwHVB3Fv3qzJ1fh3EIZ9zER4qdgWt0zGfPs23l14fhbFMv%2FnlviPoZ3Pf7cGXZJCd%2BDK5ReoexunLy99IZ7KnrOgN7TQVcbHF4d4Mvmdk60TrE%2FoS2hgb7CASPVEqUim4AOdQOekUVmZfMSjjLLUkeHZTYdFh5mGplu6%2F%2BeuOyk7qHor4vQOdoPnLcJdEqCRb5DBONXRqrS89WshngelWGTfG7imKdjgsrkbM9%2FSVCeONQTGX2faLdtYi%2BBgnEwhQAatvLSiPukvGBbE6o63SjeSaj707Bmak5zET8PeotmHlNK6fw7dN6zPoHJep6Pb7e6VhJLUuVg37l%2FWlnQ5Pt0uIxZsC1%2Fvbvm4stQlsCToUcem%2FR4Wby79ql11CCTFv8rbWqGy7gkJPsnF5m%2BBkiSulACV3FR%2FlbYeKVzKM1zeocLe2EvRuYPNjC%2BnYLFBjqkAf5tTJT1xIaKLecjPx6709WkaB8%2ByRgL8xTCNpMmcDvZBi6xU3cJ80%2FuI6SOV6I22xxYoiEgw9e3X5eVFdFRRYE5tQVJIAN3FCuE2NL5bDGxr9qrAO9Rx5g3ZdPDkFEBlKqbFcEfH2JkQ%2Bm53SthFNgs09y5gkbJfwRIA9SJtdxOh%2B%2FDX7ZzcYRD5NK568GA6DLBMhdLakrOX9sUKXBwH8thQFhC&X-Amz-Signature=afda04c81e4e5e6ef388f815c4311f9494482965a2e5f1039f16489d46710458&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S2D2NE7%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDZKroUOKrTLFOgFPi1jxZhZGPIGa03Y8bRATcJvuBHVAIhALi2cO8FGn3qsXjJVEa%2BhWcXFvcv9kOGYkAmmwCLl83KKv8DCHcQABoMNjM3NDIzMTgzODA1Igz2opXh3lVdE5gcALgq3AM5%2BmL0vyLjFgCXEwRb9dCG8PEyZOqgfkLhIUuzbCWyAElIDJfFM7mFGkCdikVzGmkrHv9wPGeNHVbvg16l%2Be9W8Ts1lY6TK9vXOrxHiP9zY4D3yHv5ncDZFFul7x9NEvXCwB%2F%2FIb6SI%2BtLOIJ3Jd0YP23rQJXEO9I744qUM%2FDNONL%2F5DE161JRdS9k4pOyzmQk6NZG7kJWuuJ%2BTw7zanx81eKIJ36bEuokQSPxPrjJhzF8mWeVKZTVcNzYrtkfwSA4hMfEGFNFS58sUThh4MkqrnUEdcOHozg4OIYk%2FCXuaWrIoyFdVmFsxsn%2FI0y5a4l1pYbN4J85aZC15YFvIVYxuOxyPuy14ZxJxw%2F8joxAkG2k2gREFAd%2B2S14acNNvb8Aj0r2dHyQszEibBpgmdqI5hICowr3tuM5aqAq8E2giumdYc73MckgzEAKOo5trfI5ec%2BqWf%2F8E7nSi9MouCR92w7isHpaMPWyD%2Bay5D6NojwkWnlb8a8%2B5Plyibcj8CEjN20x4M18YmFc2KnEWvUqY%2BhxnSKu7FhCWUu0WXrw8FQHjameTqIloqHVExN0Q8zg8jbho4ke8pTL7E8UuvEpQ%2Bqm9NYccU5fJCLQAqEyh%2BlqnX5WijqQfnbGcTCUmILFBjqkARTEYpMQ5mvIoMoujTOXKGz9cAdEy28%2Fh7368Hfr4Oe3yTp%2BCKJz9puyoF3twvPC8VP%2BmLu1zTVgvPaMQ3ywAorAK2P%2ByWnZGTZrrH0J%2FdN8EdzAanre7q3dbtcxwNSm%2B07zzXV3R8mSyV3%2BhcneCzvxjn7C5y5%2FiKIwvPHfP21eR%2Fj8%2FkY5V1twkbivI8wOAaicAv9xgKWAcljO41aq0TTzosgs&X-Amz-Signature=51414f6155b6558fddfa06d4324c694e751b50b5bc000690dad8a4298731fc80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXGOHIXC%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCICPJM%2FghpA3iJ4g%2BVBJEEVL9GF9EXpF9KvOpX1TafiDwAiEAipatNPt%2FXUWXbmYT2YX5W2U5bMrWFDcziEJTX1s%2FwZEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDNhmBllIY%2BJ7F3XdfyrcAxq74q8CeOjZczCYfF7jkOZJmnkdbf%2BEWRF9Fxx%2BJ084%2B1P63LGvUTsqWArYTKHu%2BHwaFXA%2FVN0cfM%2BMDTuNzNMr0vpV7SKQgO9m60aL4mS1AGlZncHBnWEnYfOeMCGDab%2F8VU9dA85aysGkkeR7uYvYB9r7fAjrT6oZuqvttkWCPJCJ9Uz9o2mR85tXxBrYRWtK%2BrYAO%2BLQPyQIVXAV4SusDy2B1oBupp7tXXGgdgwOk1DmymDOeB%2FeGtlhEUDCs1Qs%2B%2FM5k%2BYowHwg7L7A4a6uxtAWujelrHqGJSjkPU%2F433HG3CbjyMujYes8tZkbOZYsHgOjtV9UXbKPE5jEqYFnlDwlB8RGRFHKk8XMjRGd7hYWD4YExBLRvpQPjBybm9xjkW6iJ72%2BGB6MV3rIDD7Lr274sfKH7hmvbcPcrKNG5cA6RwPi4%2BwqO07fIV9O60g07GK2BkuYcB2F5fGP1ha4dCHbOgO5giQ5QEPp0UDBXRpcNR%2BKba4g0TQXdanqLajYnT5C1xjqA5dHukEPIR0MwanuEBGeDSOQCFfOonMPaW61NbxuKfcpiK%2FyOOkTTTls9EYTAk62KSVMCFWmxq90ethyaMAGELbDMiAJ6q%2BCe%2Fohz6DcA68B5QORMMiagsUGOqUBP10lmiOycWGKGyuuO46DNEA6sDkNat5WMhrXfkCa1In5T4BzweIX6PYK0icQ%2B0z%2FHxd%2FLSfsZ66rfueAkGKox6WBnAghIo135mri0fi%2FqPbjMOGeKspeVJkFnhghXVPHFgERsaHAMKKtEEcP55IsIAKjVaLdwgBPOgwNvjYIrwjxIgWszlI8Fpt%2BUwqPWxS0e4Ti98tK0Zcfw%2Boz1k7kWZLFjZwH&X-Amz-Signature=97771d77d21a675ea1282708a4dae9a05f376c71889eae13aad7475945eb2e5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PD7NGP3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDwj82u4BybQ4%2BC3vzSN%2FLUaoeozLoR%2FUOriqUt87HRaQIhAKWDuxxRqba3W6ZXmAfk8mlvDi1%2B6i967IYsAQPGrq%2FRKv8DCHcQABoMNjM3NDIzMTgzODA1IgxlxSk7dVPx5hrWY6kq3AMnY6bNyWtnhUV3NsUurnWTuMpdsIhZMjm8aFtPvu%2FnG5YEbt4LHk065CbVBkY%2BYc2BlinRp%2F5yYAMkFDkbi2mLap4npc17M7VQFhQnVECQQqPsQlvKkU53rfQPZb7R6qwnq%2Fj0vo2lWLJuUW5p80GMvZINijYgVwAaDsy7utgm4TIPTwntzhbqKlGBq9VKEV4EAQwHVB3Fv3qzJ1fh3EIZ9zER4qdgWt0zGfPs23l14fhbFMv%2FnlviPoZ3Pf7cGXZJCd%2BDK5ReoexunLy99IZ7KnrOgN7TQVcbHF4d4Mvmdk60TrE%2FoS2hgb7CASPVEqUim4AOdQOekUVmZfMSjjLLUkeHZTYdFh5mGplu6%2F%2BeuOyk7qHor4vQOdoPnLcJdEqCRb5DBONXRqrS89WshngelWGTfG7imKdjgsrkbM9%2FSVCeONQTGX2faLdtYi%2BBgnEwhQAatvLSiPukvGBbE6o63SjeSaj707Bmak5zET8PeotmHlNK6fw7dN6zPoHJep6Pb7e6VhJLUuVg37l%2FWlnQ5Pt0uIxZsC1%2Fvbvm4stQlsCToUcem%2FR4Wby79ql11CCTFv8rbWqGy7gkJPsnF5m%2BBkiSulACV3FR%2FlbYeKVzKM1zeocLe2EvRuYPNjC%2BnYLFBjqkAf5tTJT1xIaKLecjPx6709WkaB8%2ByRgL8xTCNpMmcDvZBi6xU3cJ80%2FuI6SOV6I22xxYoiEgw9e3X5eVFdFRRYE5tQVJIAN3FCuE2NL5bDGxr9qrAO9Rx5g3ZdPDkFEBlKqbFcEfH2JkQ%2Bm53SthFNgs09y5gkbJfwRIA9SJtdxOh%2B%2FDX7ZzcYRD5NK568GA6DLBMhdLakrOX9sUKXBwH8thQFhC&X-Amz-Signature=be98d8abb0d90b1368c7611364dc3b238d786093e01e0bac846bccb046c965e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
