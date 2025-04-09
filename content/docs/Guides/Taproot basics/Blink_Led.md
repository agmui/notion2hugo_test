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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3XYIVYQ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T032547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDJKRCtY%2BvyAOU7ExhObpRVi261v%2F6LzzxnDP5r2aR1hQIhAOJQGx%2FXw98k5XpSfdRRr8FmVu0YOf3Dvtdt76YxBUVbKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTZtLu8%2F5hylRooUIq3AO6rNnogTmkSAM7VlGq3e8WAhigKnQvXIcyoiDlXQP1LdddJ4ATC1tWVgb8rtdHyDH8ZQdjC%2BGhwSLBwVoLscOmmFGXXk1B%2FsUzO0WDefApSWbzf4g73%2Fn5ZW%2Bdfi4e4DaDACc9bXBi6pai56EhvqC5ctLjWvhIVFDFVFFlB7cP7Y2EM0zgCmd%2FGOZmWNh5QnJ9e4WRbQXHvrtaSGFeJ4J06Jj7gv5nVycNywQK2WW1P8fMklaSnYzg%2Bn1Cn%2FB%2BNabVLKbTJ731dfQymqsSVo92kCgpO9gXyLSLUvQQcydgBiZwdawOhEvvOMswL1dnqmvGewl4BZjoljioaoCJIT933didtuc7q1EIlmBeyaDOaJMYDA9ZNlyKakLjAdLbnI8uz2ru8aLQFaR%2B3ynNLkwkxwkk8LXEaTSrSBJrUNN42YdUdAcH012bGO%2FrsWcnPeNg7LDu0EHar0BOsaaIyyFMxEqsxnh%2BlIszF6gS3si8UBEEmlawlYpcmUlx%2FmqB8u2Q9goxXSb%2BPWcLNgbyR%2BKk%2F4vCCJFOiq%2FGkPakGlfhs1gRc%2BwhMBsMeM0oULrw5uf9KzwIJt3ql7n2BFMp7Nx%2FWYDRv7uaDXuUIkzRtYkopb7Sp3hLJ0bTmVijiTDLv9e%2FBjqkATHqzl37u9rsMAOIhvWXjMgGdnDw3AoFd9F14gRX2bTCJkyjQBfyPJoR5xM%2BpzMCsxPgtToDFCHIXRnRbR6o6HBgfS%2BYvNErXx1sBqkhNfXXiZVXQM6QWeY4HxAtKyZ%2Ff2uHV%2FpZG66yuZaPiwbkM5Fgqoz4GCKpHGlT2zeUmeRlK%2FKfobqpRomyCddRUFVDI5Q9ZPUBEyC0Y0n6NPb9mYPtfev9&X-Amz-Signature=a43a11503b64497671e87c1b5e24a35336d3cd3f19852ddc9f5cb763c53666a3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B4ICOMH%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T032547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCC2hpYv0PMEKWqa1UYD5p7bzJgN%2FCWnwhKTYneOlG8fwIhALx%2Bo4P%2FBycHRb5G6ROVs5bH9lR8oHQsjJeFmhVhW8KUKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwziocBPD5mEKtbimkq3AMApxyZdO%2FkwupARHyyMLnRBG8Yc6tA8fR%2FX36KNX2tneUUQHgO9wjlrgZmEmN0sZ8j87tlrBKEu71VPwAVsdWFJHbRw9uOijrhb8QuXrEWX5MaSuBBQv4RRJ0HO%2FtLOzjk0L1YZE%2FMXVzjmZyKOaQOYhUVsuAyiyV8B1huEYi%2Bd5mOZSvoMcGe33SSjgnHS1oSNWh9WOB5mBOXuQW0QH32MlLN8u8tzcoP4QM9au5wJ53MmFzJTGMimuaURDa6Ta5dALm0P1Goji7Oab86NNwDCQ%2B5j%2BG9BufdHyABS0qmNaM51REcvyLQNWtkiKacXhypbttFHh4yX7QQSFRMa%2Bv7YV8r0CKTjJi2EnPR0QQs8rj1IsRHtz5SuxmlbehG%2BN07o3L3Uurpu7oPubO5KcbF24eYTSkB%2FXvcztc2%2BfiNfmtIQhtr1bZxCsFDyLs5SzLRiIVoOQ5iHyHnSzgCIHsG%2Btw%2FEInFn81DuQdrbvy21utTAKSWMc%2B6VqaeQrMOpxCc4RFtrdiEJ2QyC3AOsBAxHdYRPUEjNBqa56w6kC%2FsDVd%2FyUlucYluS4vgT1BxRTYnkZ9iTs%2FlYSKmNn1kYy3alV7hegpY5loS1X5QrrVC7MNIhRT9sfAoRABUKTC5v9e%2FBjqkASF3jgjOr0rDJFYvnrbpu3cgyRb4vAILG%2Fxu95KHSGhojR86uHLUZN35I%2BlNMqfOuFMQvL1XL4Uqsjw0qmp75aPwk%2F5yxCMe5WeCiRmNe89%2FL5mcFYcRzXUAyDYQJ%2FYB7uAnsIxEqK4VVr3rui2gnCVaPgYnz7H7Xboiutfi9MAjDjEFM6VlRH%2FZA4mE24viw1QyxRqJM6vinMAMVbXtjYIheAPi&X-Amz-Signature=4172e8154e9f49a6cb375785c94ac592560f43e1de7940237c4a849d52d9ad57&X-Amz-SignedHeaders=host&x-id=GetObject)

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
