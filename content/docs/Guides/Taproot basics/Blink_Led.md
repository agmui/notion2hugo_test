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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KS4NDC2%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T100933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCGHNXg%2F5ZslQTNtybStHog5ojx7cUKk0wRBT%2BOq9NqfAIhAN1SbSFCFtiKirrTKOwR7p0IUEisVOdTY9mjHFaynvOIKv8DCBMQABoMNjM3NDIzMTgzODA1IgyZi3Fe%2BiRQju4vmBwq3AOyz9XZPbpjQRR6DQPGLmbTlOfG3cHC%2Fn4K4ffPDyAop69%2FnlQsJjB6YMFKdsx16G%2FP237nrVwkrbvgbfFzidFA03MI%2BCYu8OYg9iBnDDHx3xNy6ssiBzjz%2FcZLGaqAMhZQ5Vfcjzm3%2Fr247%2FccI27%2FBEbgVNSb8wEw%2B4pRhdt3E6l3WDKYNrB7a1CMGr3%2FPMJ46KcR3%2Bj3et1e9NaKILhooTSoAxz9wFxOmJs96hdit%2FULsHh0tIokHCQmYem8YtijJrtjO9AfLiUPYiUOThJYDGVPVmFY%2F618KLNq%2BN%2FH9UYHvOLJ3ov8g%2BD2bUCW3tycPO7AFnkj1kek%2FKOngRlqmiR2YR%2FAuwoHMq9iDqJ37aPkwB6Qf%2B8VCm%2BGwAMcLaZgl1YmLKxa1lqSS%2BSWAzNsu1W2rnLZaPowB529LwAK0torvTPzqxF%2BSvTvqmXAnbipfd0CqSMeg5HiKgEFk1WbGseE01KL%2BXY3BrQjAvZHdFFqdNNbHQvAbRoBGUk07ZxcEdQunRJWVMQ39zpTRgC410K%2FN1rodiZarX32996KcPpKsRmZcTWWKvdnzHuoG2SrD%2BDfC0nc%2B82LL1suNbH5QfCBkuaydR5G%2FDWuPLyGCmAM7ZgOz1pxUPkitDCw05HBBjqkAcfSI8xm2gv1UdiFKw5LYC69HpT79oQ0UbBzz0uk4c%2BEDiS8PSuXLV8Pg73%2BgIL4VF6o42n1hbXf8EPfZ%2BThSsTaHa2hm8smMtFt6Odschg%2Bxih8zuQDH2XcRKs%2FX6Idd8Pdb3OZRnTsZKRdJxsNOzh6hfE%2Bafym1pCYXrimQDlO%2Fs2Tvc1RWr7veDX27EXAzEHYTWDRiR38RZbF2TinKKU4k6oM&X-Amz-Signature=457c75fa934d99bf999d124d21d2131453785948de17608187bc5344716e058d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DVMLIOR%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T100934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIA4XmRo%2BW7AhbPi62u62hcX%2Fl9bC1QZ1fR969smPl5%2BfAiEA%2Bb19HHhGm91Scl4a6aUwOfLZNdsAA%2F8SyzeQBuVYx8cq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDN%2FY2mXrOuxfJlEQgircA9Whn4vkYMNJP3kuIS5NlsWPXgbO3C6Q6RD8uHboXakdLQz85xIplIGkhufBRM0aI8%2FW2nqondqCKzpWytSzHWM6OKprdQSYLIIRdN6oid0PHem7NTLwrTtZ9vGlXTKhWwSVjuMTqr6jgNkWjv%2FRQxgl2JNeoJljqOzJDhAF8CErf1DfGK%2FcQPRyFuBtVgcO8WQZz4cRTkUILjZsPK6bUwWBV4l0FN9q8D4kuoAepPqma%2BK%2FT8jbjjYo8PokM9bWxxzlDAV9FxQx8dl51ygSYmN389CJ6YFv0X0ZqqBJG6tyB3kb4rUs%2BQdidfrOT3Tli%2BE53EC9m0bFWmUFnygIKy%2Fk5dbYAhCqotjzRn7Yako%2FeA8gUfi4wmUi%2BcWN8MSTJsf74g%2BZOkUvepCShQJNmvx46XPaNrt8Do1uxvV5x7Lo9QmFkFSpa%2FRAm%2BkDRRy3tqbJKGoV8xHN7wim2Qhpi44giHD%2FUA8xonN7G1Lf3zB0zASgOGa4QCjuSbQwdzDiZrZtBzk004L2mKQHBtY4G2mnAWu7oQimfMr3vmU%2FZ6ARv1lksnB47NaEfqSptvEmPOXiCzUr43lGYJ%2FhmqFT6BgTBAJYGyxbTfmmbaC%2BzJbkKRVoczlghr5tdijGMMDTkcEGOqUBD7v5U8m5x8LzRV7SA7ACgh5O1%2F2kBVDh5QDeY3igzI6L%2BtQC%2BlPB8CK8Cd44EtPdYaW91CjcNCE5kxiV7LebRXWQwt%2F2RvZ9DX9YcIIIo6AD3q2Jtg9NdwYtMSMHcxnaoFRSyRa4fiRZBxZD2PbJXd3HwlRVKPvVknxF8L713hKYgeLU%2FWQ%2FRc1Dwx36u8KgttzlEGMTrvfoCSCKSy4jt7eZqfyQ&X-Amz-Signature=b0fdcc2da4fab0bb8147052da865c23547dd05466bbb325589a20f8b9685de8c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
