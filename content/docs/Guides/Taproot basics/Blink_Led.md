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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7K7E6DZ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZYhRXR7S%2BoI2w2FnLT0mJrHTGCNvu4oZR7DK6rNf1VAiEA3daV8XCB7E2ovifM73yaKRu3ncOUP8oJJFuZiUirKpkqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcL0zfNg4CxJTAA4SrcA8VrMx588R2t5GyREvoEdYcws4icNSjWrAs%2B%2F5ZBbzrhQi63pV7tmL0viO3MlSyUSx1bBf%2BOog%2BGcHnf7ptTm7dI8n6hFsiF6DLu3Ae6yiaNlx7abw%2FqVByGOUFMX9LOXNK5aBW5KVpyIAYVnP%2BfF6oArDp%2FbOxJNhFxeeQpN5ek2GqZYUaz8K5hges9xzfI%2FQn7xlNpU7Vtk6ttCR5RQd3bH1pBwl%2B9lBsE6kdFsJB82%2F0DkwQ2VeFrDL0K%2BNo%2FuDefrX55rw7lZtr%2B1RayF5r6%2ByUqJWo2B%2ByW2WZYfpGufe6sljiYJDB36M0oJYVoAtIn27n2DcWREagL38IIG4lpAbs8PP%2FZ4CTWPW6TGhOLwLchME51JKnDKurzRv7erIFqp1jy0qZQhMP%2Bc5mHVpkEUFJa%2B8BcGOM7tKhZ6g3ZeXDXCUH8y41ot7jQwlVwIKmBwvLAVen2uVVlceQXnpVoNSk%2FEvBKXzduvhvSDZXJzds10ZuQiDkHw8GAWgKkrAYJETqJUD7BoUc1Dv1zXLClei16rMXK8r%2FrZQeMOsuuC7hOHQeUzSK180TQKBPEgVy3vcrH9er77IBtKCiWuvtZlZ%2BnVUmN0vHv9Nb6vESajFujovBH2yYOQqPzMNHOur8GOqUBEj3WZ55wuCty%2F2J%2FvFPl6ycxq%2FklPYSdKTPJinWCrjAaA%2F8eykTNiBOvEzSv5ZVoxsgNpmsD%2BgVeRJ9U8QEfaHSPFmPqAt7nlj7Q8hAE3aGqnzU2e9PVsGvE74N9cjSA8k0EEuMMhIoKI0lv8yntDDFsULOH1UCJrOZnyb1D3ho925ocVboclrUKho3ZOCNu5n5VGfwopdOStyk8ikOol15wnd3R&X-Amz-Signature=0c53e0988c6e1b104296c3ca244face6e9c3a3328604220faf5f764ad66330f6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOALCVUE%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Frt0oUofWECXtNaSeI2b%2BxuMY%2Fy5oyr7B8e1PqFphmwIhAMuRus%2B%2B2f2WM0IwC0j5keqRVZNpD%2FAzlZkCX73G9Z5BKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySGVGAPw04Ys4MEv8q3APA8t5AkPjuIewCb0qiOXJMGzhui5jKhe%2FiyuF9ppq9e97ScmqyGVE0qvfoD264tMcBH6EUSkNk%2B9iFAuDuug3cqxh3WOeGgRZ%2B%2BGLzvykpEm%2BGlaCkbotXM%2FDoqrRdvDdnlR1%2FzF7YGcRWyT6OnipyvTzcKPcKrs4Tzv6G98zlyisuTBVKz660ysNxFhi97dOrRp3OIK69%2F%2BWwSSVDyUZee7Hv2dRqK77f0lA8PkyNDjNsj3gzgAnVh6LjVPwG3Ls4qZ4m%2BFu9AtpN3yE7JdbDHeullAOAcWJoieqq68%2BPg7vYYbN5P99hqSVotVtP9D%2FM6tXINc4wlYhC9utWaLPuc1AXQ0WpYlgXSVzNP%2BXDScrLaTYg0HcsU1%2BGo5MJ%2FK6gKbbWEXeBL14wog2ZXZxm%2FAGNwjZTbeP%2F30FMZuIctAmGTbVmAXEAFV%2FMb%2BLM6r0VkRfhyMm8Jp6BughAkXeWmN4adMpjZNxFEksIBtNB9Anp5Uz6QmaVK6ycGSJgYqSKKIZpYrwuAcX8NIzIYJsC%2FMHY0cniBlxA2vFR2B2sQQNXvn%2FIddT0CC67jK4%2Fjmb%2BkZ8afoTIfs4ZWrIuKGSaqIrV9ni8Ks4Eyd99TXvZFP4VikooqW4hFF1XLjDMz7q%2FBjqkAa67TpFoIMuxn9aSPAmqAlkyuouX46Zs47txVOaFTk9aFSBLLk4UR7vAyjoyL77et9RKx93%2BGpRveNHvoat%2BKfjj2XQ3FRziChfD39%2Fsz2xHyzuD8fOYrT9I9kjsG5N88hDN2FKoBlji%2F1yGe7p7gAGgaVIDuADImD3cRhZqoV7gyw5VNrTujaQPVHDyWFxJ3hZQ7AM7IqEAKt4HM2vU6LSkhVIM&X-Amz-Signature=49df521f4965214ea5070019c49d9b46115b4f15aca8bdc05fa01deda7c7e9f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
