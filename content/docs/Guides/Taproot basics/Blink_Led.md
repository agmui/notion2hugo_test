---
sys:
  pageId: "dc03b680-5e9e-4779-a140-dd2523ca6202"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:34:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Blink_Led.md"
title: "Blink_Led"
date: "2024-10-06T19:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 123
toc: false
icon: ""
---

> Note: These examples are mainly for the type-c

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6V3H7F5%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIBXsR9GQ4zKEtWJQW0fR%2Fg3DpaUereuK2UaydQUyUvr%2BAiBzJlhd7H0KCOqolH140NKvnMxDym4frSxCSE9E3QgRQCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMulD8ippsEliIBRw%2FKtwDYg6U9Rtqo2dlQIZcnV9puNzXek%2FvWn8qAmu3RqfXA3%2BmcnCg3fBSTiOk65mVqce2CWu2ulJYN2YyNlJASh5mLxggPqsPZh3e3yAZ8i5VivKGmzfWH95CHzRZY4xVlXfI4s2Pu6041LULrm3lLP2kUr4yKAFljJ3Q9r2T9pIDhDAQy5jL%2FRgfneb3bo959M6qEvfi9c4pDApnPdxIOEVZO9xj%2Bh3kkRMq%2FHDx45J0J1bOATphaZZEtk%2B2u5JnGvmT5QinkLgYlnAwBvNkxhxYx2z4J7vVep4IqD%2F2ShxXuLPuaN0FXyFT4YviIqbSPO4LZVeASvtecqdRm5MclR%2BPFcwVeCbbIVrK6T0CaQZh0ilqLJyMSmFGjaEhlEUHDjGZwxbmhwT0UUCx%2B2Ftd4Zi5Wql2kJZW0S3B0TNpdEKqXzhhHL5BoX05vzNsZsKvdursZDnwIMiK56Qsz1co8AxTvdNmhI%2BMxs41OK6m3wpJm3xibHHXV1v%2B5yCTEVkhMtp%2BlsHBW6Ceg0SDe%2Btp0gg90JgzRJlyy%2FALmvRwBgv82y0dD%2Fqz8vge0rEodT2atkyP8bd45qsxrGGsQ%2FWuSnZBD%2FwxWs6jkyXLTKiuv8BNuCT8IByalwMHANv6h8wwaTVwwY6pgHUrkxcwju5XyF7limvnHyq3%2BXrnXoDV9j%2Fbx48WYRmKtFhT0ktnjJyOg0FeMyvDlFo%2B2kGRfWNLuRyvD8pDYG5UNaeWymb8SfXr12Jnyyd3WjRNYF4InwdTUJXTAlna5%2F20prYhF%2FDAh1PrHbeFw%2F%2B%2Bn8tcTbo%2FxTE4QMB%2B61irldZj37S%2B8Mn6QcULmRY9NQg15UCBkylMOuIbICCQow8cFDz1fEQ&X-Amz-Signature=be6c9c8110e736eef9fd03c6ab39718d05b1bef1558953d90efb5b012b5b1bd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QZSWQY6%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIAHIEGP5%2B%2BSWwB%2F7YxVIN1oCBz6bki5eIk1CFBa8kBLoAiEA7Ldk72pe%2FnPuCKuHOaF43hYYY4BA%2Bh4kW6fWUG1Vwq4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDI7U0xfGPzQm%2BFlzYSrcA0B9NiOsyDYjPJ37ubOaVQte%2FPdnFQ%2FdQ%2BhwqarS9frw73ikf51Dmyz9oQUA7JEVgBT%2FFK%2FYAiEQMiZIMUdgg7pRjkrjXW%2FASTUHskxhU00RWR9xKZqQqsn7TYE1MpX21WK7k5N87S8IvyB9o2qogsXmZXBh2tIdWFO2wTljr2NfAvcuEsp2VM%2FZclEFu%2B7zfNsTjT%2FyDIoJdAPLvhVRsIrBg0CepTSSSTGkFYR3D1tzD3n9AUtSyQqb0%2FvwTUU21aUshH7wyOwIjhOUm8D9RhYaQVLgusBeGEU3pFdVRmk7vztBo2cwLDTjK%2FjIJvHv7SErYdZQ%2Ba7vw%2BuAcetSxV0fP6f64riEOZl%2Fokwjqq5uuEUIx%2BGOVLrtrpnUyfPzhSKJNGenl6W0sBq%2BqqvCgIPY%2Bw2FVAZ6gLsYqua3BK%2FoS9zBgDRzdw12o%2BBtL5lCKxuwyErfpB8hRBF1afbgVDQ29qtRDJ%2BeYUGnmqed49LVqhP7sPGZCeLva%2Bd5%2FBs24lZt%2FZ%2F8UbQGgj3Ei1cmKIqmD2myl8JvYHqwJEdHx5M%2BzZFgcS3KGv64Y7UhkKCpvedr7RLaYHdlMDVUmnl7bXNJuYatDH5A3y3R%2BfHXm06YVFab8GKWeu89kUmdMIak1cMGOqUBHt%2BpgGLe6lhPbTTSAXHbCBHTGJUwBJtPtZ2cMoH%2FaVGDf3j2QC3iezgXnGo5U4HU%2FD%2FbjI38eHBvbLN2S4XZM3AQDh0JncHgLVDRwKgZnschn%2FrjI9uwwAam860GIsvH2ZJDtlru7u%2FyKdrDDFLJrlgqzDuZrRND1F3rcdFbRWCOfe9o4Lh3Lrd2wuOntAzPMijnY6F%2Fa7%2FENv2umI4ZhS%2BGn6IK&X-Amz-Signature=1428b4dec4ea60be2d1f8d0c89df74bb421496b2b1a951bfe2774f568e2d3eb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot
```

The drivers object in taproot is king and basically controls all aspects of the type-c.

To get it we call `src::DoNotUse_getDrivers()`.

it says not to use it but what it means is only to use it once.

```cpp
src::Drivers *drivers = src::DoNotUse_getDrivers();     // gets the driver object
```

initialization

```cpp
Board::initialize();     // initialize the whole board
drivers->leds.init();    // initialize the led
```

Turn On LED to red

```cpp
drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
```

Turn Off LED

```cpp
drivers->leds.set(tap::gpio::Leds::Red, false);    // Turn Off LED
```

sleep for 500 ms

```cpp
modm::delay_ms(500);
```

### Code:

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers(); // get the driver object
    
    Board::initialize();     // intalize the whole board
    drivers->leds.init();    // initalize the led
    
    while(true){
        drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
        modm::delay_ms(500);
        drivers->leds.set(tap::gpio::Leds::Red, false);     // Turn On LED
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}
