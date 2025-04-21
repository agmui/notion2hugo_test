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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRWXYHNN%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T181115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCwdgHxo0eEFlNPqbWMHh9lUEpImFVFdW52r%2FCBel7hCQIhAKqdtWLfzoRD%2FjUUJZUAHN8v4u%2FmO5blPmGVTEitGRgVKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwE0dbnH8YyDkk9s5Qq3APEeGPj1fowQTpb3jXurt5NS42nsuJB2SjkTPwn46OqwibknpU3oqQOP%2FcMh%2BpeWRoYeWI1hgaxkuRG%2BfaWHBWknc2EMZ%2FoqFEgUYNTQiG%2Bo5CHWZJ2okuo7GZIJ9C%2FUwxpG%2BwHwjQ4qbRPHnhoKVd5k4huG4Iwk0fMEqsOjoZE555aROlnb5yCxOI%2B020KJejbgxtohSjf%2By%2F7muD%2FCKF9gukTcja99YXU58x6SIPOeACHOo7jkZQwjKWsXW0LNgsm4BVP2%2FyeiaKEnVx2Y8rmaWhl4kSZyjlRzCfVqe0RReniVqCkmrt24Zv8wqyt4HVyodc2CGsVzOyAoeHbAXz%2BzhLpvuMshtQrPXsIS8zVJgGFQ5MsfTuxlUME46bMdJ%2BKc%2BwGRQDVYVUr2VuJKNpTGGqmIIsp3iL0zB%2FC1C1H50nqHgttZzTrFcPYH4zmgdGyxa5SkM%2F8QBNU1tmIUftWe9fmsaNiQ4ZmSnqR9G1gY0RUxlYIQD1ewZ6zKFn9mKF8VbF0wTp5FoOKpCRGCpByvTrcDeo9HNf1uKfzbjIltttbDDqpLLvZ9w0OnPSCgkzQCOpe4pKkTrtNap2L8fUkDpPbe%2B7uROBpBYhQaz6rHM%2ByCaJ9hmlD8qDzATCwhZrABjqkAWCKMkD3h19lmGTijWqjj%2F5%2FWsOqhqCE7VhGkT4ggGOE7YnjXNkb3at%2Bf6jEjcMraX%2B1XS2YyBGYLKeuI2M8wAwVwauMeeGdSM8cxoZ9a7jYikxdxcZeKvBffwe7J2kfTYS8n5hdK%2FEnE8plUyUVm2v9UnsIaKurT9KlJD2XmPaNwWvPU1cg67ehTfCIAGeGzPlCvb6wC3T1Ls7ni45Pu%2BFUcp12&X-Amz-Signature=0566e82585cdcea5acf6b635a0168b1305c14e172491d9327a30c419fc452a81&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657OSDTTF%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCrcAh61P3OFaKj2zp9WFgUq%2Bp1yjIHWzvCw5X1rfBCLgIhANKIxo%2FLYBzch77aTKbsq6ss7R6%2FdqHCiuGg7hI0QqR5KogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWvWpQbhz55BZOfSoq3AMVtLk9aWQijAso9lgcU78Z9%2FX%2B8yDPfs7RSCEmsH1rQXRPbcpXR59qNwPEbvq5NLe2aYzKmRiGgKJxChjHjwYctT8xslmsVy%2BevRsoCI4I0xVwfl%2FnG%2FT%2FpQFyk9IdGIi94SsAo8Wq4JfDYONCKP8xWbS%2Bt%2B9m65dvvwfNuAKc3sh%2BLIliYFyKNq08Lb8Lq7v1ofphi24qwNtIwbBNQwAEkRlh6mR0mgy40Rrb6OXHQ83XtGzyrwaW2yuW%2FCkbILMqTOr1ScXjk79KPtl5cu219fS77orUq3g4CUU9onGRgqIKd00FTyRiV5CoUghpfY6jA2HK9DnSSMv4llgGJ6UKvZk%2FfxxozRQdAnuYig9A2tJuAKyJsJnNWwWDXC5f5jI2TFh7AkZWEPUJuGZJ3T1heDJWmfB67%2Bq9JFfNnZ99KhUj9fb2IJ9q%2FnSEjaMEu3aiAb8nWJBkMRR%2FVC2b2wy0Fx75qdFbF41UzkBnAtv2KKNoNlphthFZvipJBNYjEbIVUv7tzLH8PM6YU829fiK%2B6FvR%2BnxfYFH%2Bkqk1H%2F9%2BDsZSmuSDxa%2BH4ovBhwTGb87Xs5nGeyQOHvxvLoH4SWsXLbDMSv%2FMh8KMAn36hDpVIrGBJxjviFDSmKyLjjDBhZrABjqkARdDANwh3n%2BRZMpReEflxVFR%2F%2FA61lnYFGYg44vvwV0IVtT7sneiWKHXHEJq67JuGe04KEJh3RrUHEB%2FIv5wewewoYGO4dW9MFBj0eI55l5SUDp83Z%2FRE5jOEDqkbS3yDGtaj3OK5eObAjzdK9eC9q7tLd1qzXoFzAWLF0n3L62pSKDyht%2F2MXDZgLotD1i2BxTpkBEjRZTIoRb55JVZxw5OLNIi&X-Amz-Signature=1fe218289cd9e452b48748c8e286f4a2bfaa3ac30e8e2cdb5f718059dd9d902e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
