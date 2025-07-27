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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGB7RDOS%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCjVSOAH62OlplcVdtb9ybtPcWxQTztcOISe1NWMird9AIgabjz%2FbtNUzU41mFfH8FoRS%2F9rbb%2FS7fK4RljSTox%2FE0q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDMxx7UWU16Iwi7lb6SrcA0YddcY9LlprYEZxr9XUA%2BNbEWGJvo45qofhKdGIfCUucB0tA9Che%2FQlEfwQq%2BTSpR3SunmUu5cn1ObLHOoS%2BrIV%2FUB%2B34tV2mAL2s%2B48WX3erbu%2BkulPm%2BNrY1vDGvYOjylk3zprZ4q3NF1r9dXbnsJ53Kz5IkfPJCcsgn6gO6k6s9TP26K%2FhC1L7zkoygKTLVw6a0q65wnX2o%2BvXf%2BjzMhmqYcgG5mYT39Do26%2Fay8QZlMHn9LXxNwLQsx96gFrpJFPTQphpbZzlWwlqRUfQF1fxZvgsctvpffFHzarbuYDZ9HbWqQRR5we2n38EEGz8F8rocBpKFkCnLBuz%2B7u0Y8gzPPSLwXN77F668xjOehtU62h1T94bWggopyaEknaDZ2YdCqasP0iNMOlDdwyBRPX2lt%2FBUGyzwLculCccnZDV8L%2BIOat9jJ%2FeWjfYk8PjVLMF%2BiIPnUy10KpG34td%2Fu2bwn9FdyKw7x1%2BRoGEfg1y9qbKt%2Fni1Cwd5RTCUWy2WFZfo%2FAIeaQ5Pr9X4cW1wz%2BjhtqCj8nYsfQNYrGZRVLKUl53LMs2mibEItqZtCu9Lu3esAT7JGhkRoD9EWuas2yGBLut9wxm65gEOirmgTks8a%2BQprgpv6z8XjMI3DlcQGOqUBQh76cPS3yjefb6qMBTe4MczRpen5IbKKgjyZD62q6ULmzjDFhaC0QYuYW2jM5VtnN8CafLTfQtNwZn2Vs0KjpaQYPhWESJNoS%2Bhxt4xe5zFw1iEp%2FcPFb%2F2jNECP5j6XYftQccammhDtYaRqOOb5%2B0VbUXM6OZbSilCxxnw8bLl0SoKUVvg8IzyqSpMYS8iyYkidflr88%2BLEhAhDh8lOsbj7iGN%2B&X-Amz-Signature=45605f2b38b0c4aab532a6037509d25abb4084ebca4bd20b33edb1bf875f5561&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFVPSMAK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCkFn3dQQ1%2FifyxmqTad5s3xYh8j0Q%2FKRWWahZavcPXPAIgX8L2qMmde2xIBRiZ7tluhpJrWIkApW1wP9YFGSLSbNUq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDGwJgLUZIhZS7%2FLh7yrcAxah8e02%2B4C7igZ1UXFPM1xfDuSw8Wj6sBoOjouP4g219z9bCaj6mSdanYbLyMQEGxYvQn%2FxFWtrVG%2FGcq6CX0%2FJ5cBDZb%2FnJSKI%2FL%2Fzmb7Le8ep%2FQY9i8tyBVC5WDFykIqGwh1i8picvXby6kB5vpCW7czV8M3h1A5MV6TnAIs%2BUMo99nNIBkqJGwBM0gtilJpBH3pfO1pwfFsjUuMswWAM5y5dKqflnopiLQ%2F3DjwuEN4VQEuPKAC9Z7opnRLv9EFEg3iXi%2Bt8kTG8yu96f9eRiX9DMXt%2BWgECh7MBLHYtO7WKLjwe4dT9AJwa05%2BakX7GcSZVV2FnaFK4U%2BLdO8TCcU4vcvAk3JA8BauCEAl6AbC07V7asJ4u3%2B2XfXLCy6wIPlYU%2B80gUtlM%2BMvZqwvZmgOZYy2qjcwIKAUgXmrsLt0IQTpxYGnthrHesMZ%2Fyku%2FIaGY9mMXvFSuPFyjn7KoqnQTcR1H7LdINABHRlE1fuQWuLVMD41plfATMVEddXUEh0uwVzkIStm3%2BambMfoEnV%2BwwZO7ipt17zObn8aOmxLiC5Ov0gVUOTEesgszkWTfl%2Bg5stGFfcFRfl948snV%2BUCSMdm6JaKPeVRWoBLUaKAdx6JSJEcV%2FvOwMITDlcQGOqUBFeciH6ccTydgFCJrXwoJfyWZ9348%2BJT23Ck3rODEAm4MevBmzds%2BqNukwMps47DFRV3hjJLORZel67wCYrzL1OFk3xgk1fUbqx0R0auq5gIX4zPG81cSwsTfmW4Y%2FKWH8or1QXoi4Lh7rdqCNMvx93YtFYt1bLi5pD17VCgRk%2BcL0cKO1qB1zMC6yJQe5ADVTHQe03nKaA9sRbfYT3G1UBqxLz7Q&X-Amz-Signature=7ef214ffea2afe7b47a8eb40dac3ad81a6bf31f47dfb5024ab707b3ddca171b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
