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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDAXZ5MK%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0jea6UpD2uXz6Eqjin4z00vEvfeu40U7%2B%2F%2By67ZDgjAiEA%2B6r%2BC5Saw0t49LYwxor%2B95PU2KOg0BzxoN58LjtQgkcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCCPb%2Be2t6VQnUb0LircA6fG9imQlLuMyY9uchgrP8QcHE6J5mg4ZOaVDXE1c8OR8CP%2B2X1pckhc9kAgENey9Ia0bWjzmhuNJQbYAIpRtiDnooqf7p8a3n8pfMDkimeQnWiMieH2thVvTXFhVOc0AAM8NLT3rK2Pk7Yl5Ycwg9wkrPcZNZANrfmSX9YZEPHH5Bpf703RHrpjnJfJ4ExvYrc59wrwB73uX8myRhovWjT98bHOgPO69K%2FS689V%2BWhbEm0r2PiMfWSe8LgQgt5EjIQykBiUpyXIO5UAR9vXkPjgELKo9JcMZi6nbDQktJHRlODUX6Sv4x3UU66H0IeK3oM%2FXfoBT3LlGL12FqRFx94Be09vk5HeuC%2FneL6MtngOgtJlx0CBwzKPWOgJ7ivfMLjet4a3LreA3LQ0WMGGXh%2B89IfudP6JTxJ0unbKdCFdYWTaAvTiS396ZlZRipTsSyjw7SRumvVvJpkYRSyaRqVDtdQVtOba8KXmGJhJRYdmae44sO7qIbbOCGlMYlp5GMDNng2xV5IM9sA1sQo6J4Wsyg5AcWR8ZWC%2BgygsTWgVeULna1Os%2BT9z2fdq6atFz1lun3EtuqHqRH6gQ3meTUyZvFWSnP2yABP63NP0Cqb9pPn8DQHbaQXKblVxMJb98r0GOqUBnbgalC0dqDvb9Ift%2Bapz8zk%2FtcxkWhHHY%2FcvXubmDllegpQKtaEo8MVWMtNoiYZtJvRJqvaAiptLKNCq61CShNLTkv8HI4E2SjAYjNhTVSswRk20FmFbIkV1uddwHsBvbMBSKxonMSd1S8oC0RO0IU%2F0u%2B9tGBmNs%2FaQqmCb7ZAY2aRSbXUTedYPMcPPeWqUJ3ie16cTZ2iEHZe6Nla%2FJE6Jal%2Fs&X-Amz-Signature=ccecc82035d4de9e1165d72a72683c52a5a17e0ae31690dbabfb128962001d89&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVCRVSE7%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1iTy%2FY7NLpQqydpWKn3UXlXQspvztDLqF6dSgs4w5XAiA9j18%2FBBVvW3cWjJ3d1otPVI6wy0cj6m4SlPkrOaRAuir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM24ARTmXy3mScdMTsKtwDGLiWu4qXq3bDsOV04aM73Yf%2FmGswEy9Ya3NuTF4ZbATqQvYy0V5MDo7rnzxw96xJl7szNxSTAJ5big0GcGRnKvjWOgN3fjccaVz%2F8jBrmXc8J37cWTaMYN4znOJPYO6vr2epDO3NhFn%2BWXcF6kQm1TI2947KUIX%2B1vhdwxE%2FOK6d2EglnNAhhZn1W%2FLLup0hstT5V3gMsnkgYgRR8X75JZ6MfJzNvHZUQvtbNemVRtIe8IcD9NmO35GBHcq68h%2FCLleNnB%2FipwuQKkMg%2FIegC57DoaU%2FJr4ngBMN7AuQMBAGoSFyOJEAg%2FLezOeDPl3tWENHxhPiCn5TFvTzZnlkkbaBg56Mc8BGKRaUjt3OlfigeyFktOvmBVT2Ay%2FErgEJg6Wvl40cXo4WBSQpjRLEZi6fXSGZzbqfeO%2FHFPi8rt9RoGtAuRw0buGomo5GbG4KXoDF6sCICNPZdq2STw15Cro2TSvb9mT0t42fIxyLaPP6fBMc4hA6rqCvhJDGyGEzadZTDv3S1RcUMuzf%2Bie1TU7yJZHiUpl6ikBAP%2FdIDhlxfTv03BfozydrqSW%2B2%2Fcqe0SHO%2FXIWOi1jU9EiIgocwz9piJWhAeNJQat57ixhXjaPIi2NhkKAaJCb%2BcwyfzyvQY6pgEbjkwAf%2BUuAgTp1ZuS0U0RAjcdLJ6Sw5ZW20vL3bQxVm%2FDXoeT27q9%2BT3%2B7kWIAYvUh7QnrkhKHBWdr%2FypogiFNOEj7SgmyrV8cNsiKFXkCnR3MnZKYL%2Fku0IhkX7%2Fb%2Frb%2F2Iwby6fOtRK4Tnpd6qbHz9O5Ib9NStYeM%2BfVqWCXebaOOHRrXNcAIRTFrq7098MERaHnwlhwQTm2r4vDelKbQ2JKL8T&X-Amz-Signature=35f2b309c594ad77dbdab63d2c554fff36658dd0bd88f3dcfb10f3001dad3eb7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
