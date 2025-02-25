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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U42NSZ5G%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCOiWykEyOU9wXv1epHzXlPDLhHF7SQJBCysY63ZclBwgIhAKgLtmHOJrWBRlNGpmXxqnz3spaS0x%2FL7GgKmfUd1ljiKv8DCEsQABoMNjM3NDIzMTgzODA1Igz4I%2FZxjb1niD2nuL8q3ANnXXwwB4KtZco%2FqfoNbJ2eD0KsDxWGd1aBINKAhD6RbiH99fCMoM1IAbUrxB2vDfL5opGcXccmOqgl%2FdG2dldCPjJ7bZ4yqAvsKjNkqH%2FNlRU88%2BlO9wsz6BaPSk%2Bwglwjhk%2F4WErTlYM9IjNdMbwM9O5oBc0uTi35Uf1zoePYuCD2o8OXxJo0SaqrDVbLyAr0BWiMzsjkwoZgCRo%2FxRBjpYlx%2BfII2Slnw5roSsVRZPHcm0Tr80AIMxZDCDjCRW%2BIZ0w2QTq2dWC1k6%2BAXfyCwOnmaSE0bgr467hLrgc%2FIontL2IGmr2uHiwOT3yUGeRm3I%2FCEuiPiPGCuqDGxFq2ezvhgmy%2FAk539kZ%2Bauv2J%2BwdmkmPSXPUaMAnLo6DB9R85lCDZXegpXhCSQ9sNPk7qQgdB3uinAYR4xLG7GobhBnPoNE2leeJDWISARRgQN7wNhzVQ%2FAHOhWGmdtHGVPjvHVhSqgWg%2FMcQ2yf8YTRQ2x2gPbA8doq5tozlrlkQtayVkBMLNuqimDALwt145dN1I8C9iZBOOdzoTDkXJei%2BL%2Flp%2FGrUf1IkkPnTiBZP%2BeHt8aIAdHhFI3BZk%2FPZrDx4OiMrx1%2BJCfeVYRjE%2BHY9rUMyfXz5hWlSj45tTCXjfi9BjqkAZW4o%2BB8OqKhFtT3RO44iGTTzY73kYHcnjsRWG8H8psq3SBiP2u42GKBsdbkFsZYOcBVtUzpqQ2o4PPpoi79okylBNDSGZIG1tTfaSqSbbbqCs%2BlF9Okj3agrw1jS7JNuRHxxUA1F7twus7qyx6MJAjo7aGwBIxSzfso2xaTvReBKnJE40AigFSeVcgw6SiGFg5t9v6cDUAXGPK9gF3RpFXU2GvA&X-Amz-Signature=2c5dc3334bb295b57de1b68509a25536445576641c6aa1cf4a0323fa6caa2bcc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XNU72B3%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T181113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDHRb%2FtGfCbRBJGjiBP4DSaG19PgpvKEb4M1O6t%2BCCLLwIhALVMY42oWb0YEPDUTVM0D4lNqVYjq%2ByvnJ2KCtf09RbeKv8DCEsQABoMNjM3NDIzMTgzODA1IgzS214g35rDFeoA%2FbAq3APJHGPxt0Gmythgt54UjNi2%2FIAczC5RodeJmgYrOVv87b9Yqe2aHdnqJ%2B1ddgilblGE79%2BIZBogvkNaIweWlb25yGDtJiKYgPB4GEQ3HbbAYR4DiCbzj8FjDqLb92753CDa0BnCab5J4ftZxHSkXU0LaR0Xex9tJwGmk%2BQQE0yTERsL4y0%2BxVKLEFCCgTIBG%2F4ALdMXr09GWX9hxnu%2BVd4ZQprDe0LywsMYhkVZBwRKMevPiP9xL0IWzrL9KoCFZq9zv8iZCqXshCHDo6Asgt64RkCQWHFeQIDsKSxPwjcEEl%2FuD%2FE5UDiQ70A3Sp%2FNaosHeFF%2FsH81%2F8kHYMh4GljW%2F83peRtCC0qbjnKQMXNBWExPmMrcqH9t0lErRDVeRHpbivwK1JWdlKA1JvgUhz8GUEPOIVttxDgN%2B4c8RK2nfWR%2F8MRrwKfKG%2BVDbfSHrFGnNI3RH5oIcewY33E5KxFAc%2Bni8s1s2sariR1N1e%2FB3o4O8y9eLz%2FQAj1hPvPjigN3ofTI6fCl3WUwhJMfR6X1lh7gfRT3d3kIcGBR5CtLd41%2Fxj1PAnYaXobVPdAbdvrYCki9r2lcfK21YDr8tO0gyxjV5al5%2Bh9HWAc1UcHyq4bE3Q5wJZtsTIwz4jDojPi9BjqkAQ8LpvJX0eJI9GQqGKmh%2FTfBm5UYlYXin73iJnsmfTqjKg71QEz5k8ORB%2BknMoYc9utD99cbW5SeXpiFNYNe5s3jqOZ4YxfvMsfEm97hET%2BLmclpvVJaRehDhwzX0IjXsty%2BjDAGRUg8f9mWCe27NbVEXsfwjXNov4qR2glbc0fN1b87P%2FnpHWLhf%2F4V9k0CLjSN3Af0diQs8WAeKbbdIVS%2Bh6ch&X-Amz-Signature=48dde0846b0525116fbdc8c8fc1bbc681295c8fc0e11f05ebb468a34b5c52984&X-Amz-SignedHeaders=host&x-id=GetObject)

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
