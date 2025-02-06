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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ5LM7QY%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIHgybKll4mSJsJn38DLMN%2F3a6JZj9SA5DxBWEfwaPV7pAiEAqLujlUtbX6O8L%2BULa%2F7NANzIiX6spt8fxPcK67hL4Sgq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOSMS9M%2FLog6J0CYXSrcA7tNMQ%2FY59e5St3dB63BOpYOg%2Bw5Oya7szkP3WWRwlfq2UmuQRtqZ12A%2FYCx%2FpDEltG6pHPXtqWpGtNhUZWEoSdbjxbvtFQw6lxXB8COTmHgv50km0pKJ%2B%2Bida%2FGiR1l52F42VnIXFg5%2FrDaz1sHkmY1%2FbKYnIexBNxmp31ixLXwz4MnBBx30Vm7kjwlpPj0wNPK12YUeL00bbbYsNeTgO5aQwTI9TXFWv0P%2Fz8GZHqoRY0tI%2B4rFDdHPuxx4hyT%2Ba1rPkMlJZpTwxVqvEqEPi12KhNp3y2QgDGFTfDCG6Cjt5RK6%2F7uXREDTkwAD38g6Xdx9b6HfGHb%2FbebU0rctTjyDpQ7jcER%2BFqEwU1GOLQXuEGQvflxjB2BlkGRzGuU3PshH1nnBo%2FbzA2jHlq9EqjjIweFKAZ60DeRSV1sMDC6qjOBmBAPyJXH7%2FBvRiraS2RG0ZboGoMejUCxFlBvS8hJwenDx%2FYeqGz2xF6QdPRCC2hxskGxV2QyLiSkVFuiw64NS8lDbTtSBTs8RZcoixQvpMOCukko1%2B7FXa%2FE8oin5bfIJe3VgEa3pz8ID2NwLxYJAWOsdsMqzIKOM3%2BqzA1JMnw%2BLEfCb%2BWma%2FqcujcwkiaGwnOH3ZGWbnbjMMTukb0GOqUBnzccj5FDkRMq%2BVzzbGQhQo86gGag4bAEzyCdNeyvpjhYQqwm1Wnw5Fbq06HBrlS8s9ieKW4KYjFgnGXOlUsfBA5wtUWQTTVGg7S5SQ5gYfAXcbaiD5hm10yYjMm1p9kK0vL%2BSpu01W0hnNW6Lt%2BAIAGk8TUDyVItRIy2daPv1eI9%2FamvpBB%2FjIM%2BZueQH55zwas%2BnDhcNgzLT0p%2B684V%2FJL%2ByY4B&X-Amz-Signature=ca606f31cce1f88654c9b3a5316fc9c82282f92b7880a485620d04f6a7421d64&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL4CCV7Y%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDOTOTwIxzxhrPU91T3AnyftS2FLYLFKHvjR6IAzFXEHgIgOCT7MHOIsWH3DImehISPkW0KF9EXFuuwiW%2FiXEzLndkq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJdkfAKh%2Fko7bb%2FRPCrcAw0WcarhPxnzLoQQGV4ZWqtJHXtUS9TH8Lh%2FerqqF12mhzBs8rK96NohTY38xrXdcZ6uQ6cmLf4qx4TEFDDTzUNlcMShbV0DUijPSFVlU0eQsWeH0kDbyboI%2B2InxXVvPnzXWUeiX04%2Fx9EfsaJB6tY8xnyyG8i59pPk2RA%2FgCSLKq7xrOOWlqdgTV2iyBdVtBe%2BJ7lokT7dzMbZFaNogQGuzeO0m%2FJlKQUaNTznvSYac1%2BeDIaSJdDwb660YNzjMmK8%2BKIPn4vvp3oP%2FeNawcY1NFvAnneO%2BI4%2FYDBYW4s%2BJiwhTJVAY%2Bw1kkz7QTUfS9TgoHXVp6YdHWQM26VO4UJlp9Uh0mymL1BCJ9NTCkaxjeygtlSc%2BIsC%2B789AQSCv8FEV46%2FR2ohrrbyV1iTYU34xgYeHYt77vYFUc%2F4tcAbV2CCv3cLsusGbcSaSABnxZNaw%2BLs6vbvnXcijj5dLU1a9gEusbFy8Wox8m4Hr%2F8g5xBApTEXnN9j%2BBi6SUXgvgKBqGncsgo%2BWReEiAT5di3xeXpHTM%2BtihvAdjSEBL5AfSlXVTJVO9q%2BfTrdjif%2FyIp84fMkHpbEFFjzhwYw26%2FdA7o%2BsoQOz5UhlRoYC3zONv676PrYzSQy7qZYMJjtkb0GOqUBko5J5suUp7sDS6VO8F8%2B3P%2BULFB3ZxDwu%2FSGQW8A%2F0VLtrllRKo146WcQKBX3ygMaLOIvAPrw2MDoW2UWC0HrCfSzWmrbGwUz3991e9b%2FTmuoycm9uu3qquC6KCUpqQoZcFrERSwYFKsl1wOGLRbXGPg29HNS4a14F3BzA7zXpSGJdqtRQJOyRIUl3fVnWRryyAIBoO5X4V8OqdaAGCwMYHEQb3q&X-Amz-Signature=aae739b1b601f5a06428c45038e2d0c42e1231cc847bd21de3b0d4bf66d53891&X-Amz-SignedHeaders=host&x-id=GetObject)

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
