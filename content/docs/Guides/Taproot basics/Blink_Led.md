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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAJFAN2I%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T210146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGETatq85HplXTo%2Fym%2B3OEXyRmepNaJXGMtB8ylCEpa%2FAiEAzgZOQjOMgxMsG2rq6xZDn5Ttgg8ezhKQHdFSe8h8qGkqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOn%2FLjXYwS9llbYfXircA%2B4cADvtQof%2F4k%2FHG4knCLsXK5rcK%2BYQOJnm3c825RWAO%2BSEBJ7mVoeQu1MZ9M9sqlmbcf32oTfggBbs4D0m9qgFc5kzod2fTxQnkWXWu9iswD6ZXq%2FSGbLm76A%2F%2B9TUt2gQrVwwBC5CttliLTQB6E8eLPC7i3z7A%2Bvko54llbQqclyt8buWCWPENyA%2F3UkcPZn4DQ4aHh57RaDx2hacZqRDUKm0PcOnXXO%2BHe2xgLlR%2BkmlWwtCfPYwdMxYlRBUVFLZLZN0VazNzXkPrj%2BQirWbsJFmaMnkduF5Q%2Bo5jkKXiF8E19TiWM5PQIJbEgzRVaBeaEReI3lBo35SylRqG1%2BtGLhAq0JWTsjWwHCn0Df23UdaB38MkTQGJWfBKS51dwI2zGNsQY1Rm8Rb6ECaDFLyPvd5%2FPwKH6o7y1gIIN4JpxwpM5WDhggIQovUAHE6%2FXiR3xNKAFpQ62qPM%2BmrqXVcfsyRGgN%2FoIr01KywJWlVFX%2BE%2B8wBaPlUxSAfSOMWX511SOBlZoVVNs9pMVuzFk0OgVh5987bSBHtdjoAIHk2562bJ4NvN9FxVPI%2Bz0iGll3fsCxIVtFN1wHMWeb1k4RVwUAmjfGlq0RGF%2FGlxKVwMg%2FvG5h5XIIeOMVcMPaV%2BrwGOqUBHB%2FrHpkht2SZK%2B4WJGrMXhGtSFCmSl7cuTrkjYTrouaDY16fx0rgxnSR8kDJLgmG962UT592mcspbHWtpsQydc818zJ30qpxNnAW3I%2FGn8zoKoidx4qNilRpWrMhh%2FwA9Ixih5QbI4KSQJFA2GAcRT2H4vd74wSuzXdjyEYdxpL0gCVXkpvP3BYNxLgYa2ff4rHBwHJ9Z%2F9thy9HxogFfVt6qE20&X-Amz-Signature=5edb9e17beb41e0e1cd257d3b0095bb2a10ff392889450b8d7caafc89147f4d5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZRBD2HE%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T210146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5lG2ifMj3SkddaqTw3%2FwyjpWVPabpVCQ8SWNhx3RNyAiEAldwpa83CN%2BDxvKWSybnmF2e7h5HcDWEDy%2BEzXxiR8S8qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJaHjq7%2FAme2jjHbCrcA%2BC5ADi0%2Bqpq%2FVeewWfqEQBXRbFYxN7HsN%2F6DvJrznUumujCQ4DtwYwYeVaI9waOMKiKw27Ok1CmEt6rIqPKT0nnOFB4XXr9i0TPAP%2FP%2Bb0IyjBBEefLTF6BtE%2BEPTqjBkgnqiHEzD2aXcP6rOW7T09lNveLWOqWKB3RnSjfjYjgFEkZ4VJ4p4ACFIKy9TSNW0X7qGtVdxhtE8csLJDlaEEDVvRK3EbCnfrdeGWIu2URmf8Ix87eNdab5VFrcxg0MHMUVNeKwHRtzVmuWVWbnhHgZDwajgeuauws4CviWzBrv%2Fz%2BywvdPI15DOb9f%2FtOFjitaK6N5x8Yd4cQsKp6ZQIz%2BNy5CcPNLePDVr0ouogF4Akru9O6nH3LA%2F319hJVyj%2FnWTii9nMkQxCjAJ0f%2BkkObDIUWoDb5oaCuOMloRUFHyrNx8tvnQjwRVERSUo9EFDVClPrqmgV4f3gCEUpcmjBC0JhuWrS5LaHTNuV8iMYKBbP6tMBUVfnybmgL7RHeF8%2BRthhnS%2BYuxMKJ5t%2FVNgbvnNv%2BOYuKOB39KyAtWePH2%2BPZrVwcQ1pYis2GCDOAFTiSsfoSp27Uj6fsedJTZgWoZ%2FeNf45APaBPmYznaCqS4r4obJh3rhB5bJvMImV%2BrwGOqUBB1%2F9SEr8%2BnHWSBCkdOsrCNQloEktk4KPEic7%2FJK8rq3ivujnm9Q9Ovmx%2FSnXGxgrxliPdiHn9D2Wzn3GEcaSf%2BjGoJxcCV52ulD3pRpdHqg%2F9v6HDOqbyuNxANwwWkDO7eiAOblxFpMSlSJ%2FG31vZzl7bXsQiGq%2BIcZ%2F%2Ba9u642JyTildWt5OeDb4T6LS0dxHqB%2FlYH1XGylEJpoGYKGsWMZ4Dqd&X-Amz-Signature=22af54b50c3c7d0a21ce163f5b657ce08532dfbfa37e26fbe2cdab803f244d4c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
