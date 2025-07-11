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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7QQTXFX%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T024727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaAk6JWfinGypVYWeGHSmJ9XZ5xgYnQQRN6rfSU2WusgIhAJr37Zbx%2FrJHSnbiwMytDoRvEdBs4pLP%2FvX0kMZGA%2BELKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSBLNpJR9opkvEr0Aq3AM%2B1R%2FScQcncr%2F9nGcpIwXbv2U9ng%2B6AUtjSNo02TeYzc1gnQGGarBgW4cvgHUAbhv%2FYrcJsxJuMfvp9HY3jCWTOPHHJ86RxF6dkVN%2BfjnPWW579xvR%2Fyh%2BaYHLwx0gljOnEhuJeVBegXEeRD63j7ERh43tlP2YT3eacpW1VUhS4oDQyj94fiSKM%2F3jCpDeO0%2B1xNGEvqQIxWZyXNDuPUK5D88X3wa12BCap0lyG2G%2BquXaQe8MHFRvrhtIBYwOonGdhsaK1pGcNTjRe4%2FCrh07FQmXYaKx35PSLw9HJFyslb0HNrnQjCNm09S%2BMYUao1%2BO6Eb5xDxHuWxEO0hQ9SMfTePOWz%2B9PzcSQG1Xh2lkkKMGw2vwGkLI9sd5fXnyhJBznl8pCshhvALStnDvjvE7zEWucqWlAuYcHFCEiIKqrDIDA7bG2sGhwOWFJHUBmAgUCYMKkHr46blY0H3cFzYVGKQj9VRFZ5H0vSyRsFxm736O2zYSIwIWAvVgebuR%2BTmGjy49f0uFZR22VFNKm%2Bc4qcre7SbPSjdjd3xWmdbk7zfUjyM%2FS%2B2FwzqZDcSkblt7D3MAGDhBfKwsIq6CH8qxzGhvvn5%2FkTOjPa%2FUdKjZu0ue7%2BQmvngLxwdEfjCE78HDBjqkASNI2AOt%2B42nlhQniCNSjEzI3FHR%2FUBIyuYydlPqZ6DdfcHWcOg7%2BjyjTL22xbsQbTuu8Swd%2BylfqgkIQ3s5F5%2Flg%2BLFrmEwq1wP6ERjzmtPb5GqjIDtGw9X%2FIrqukw539YTRoMXXE6dWCNVKSERYgkZQYVFRlm%2BZqnnVlEMuxmlFxLsyXKXXNjgw5ZFlhXWC93%2Fp3WF%2BmNKoKj3Kknu3FnO5PtY&X-Amz-Signature=29a613b71e5248550b8ff0705491c9562c349c6bc4aba03ccc954cf727f8dbc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGEE3ZIL%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T024728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6%2FR5wu71FslIRqiu2yDc2rlwFQdrpq%2BRWKTWyERCLhAiAJaBlFygBxMUAcdP2D5FSOBROf03VIExNFEhe8RMYXoSqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF0QtCu05RjZsRobQKtwDeJ3arFQR0mE7Uoad2wChuU5rAmyiVMOuV3%2FtyDcng3eFsL0whnb0lk3ePUpEGnb8duoavCieZpUE%2B%2FvAIledpNe1bqy%2BhbUKyLxVuAWcyNH2nshbJho%2B%2FDgQWdHniE4PM7sO30SS7dbK1fhgzgJ8F8wlMEtp8HSHkpyns0VmahJq8lJ7muOhCok6RKZ7QA7VOYFJ9UmzKyYiYGvagSBCI3iWhOYSIoeUDdMzYiCSQOWDWCW6iW8achLTnznPsfXl8s5S%2F%2BN3IE66qwqr%2FN2%2FEgiyEuw3U4JW0ObCrOz9EqnQUp0VHFHpsTSiMfeVModtbv%2BloTdknsSiDvsWnplegfb%2FY0GBnbLSHWgUlpFqfmMPCNUShnLl2Dfe8Cg8ehWbKd55wapsaCrVrBGXBPgGq0bOyF53hosD44zOfkmGJQ8%2BikRYdwuDOfQfETjtYDEaAxgl6819r4ECI7GCX4ksonefhiYTx9iK44LO9oGxgYlJxMiam4L0fGjZTqLvK108Ko1iqyUH540oJQQvJ%2BwE3PDX3uCN%2Fko%2FtyewP58v8jo5DbB3WC%2BusbLPmD0y%2FKkLUSzN8nb8vyFTsvB1R2Ux86kkDJm9IckG9h0apC1xrFkM7VulTJq8y8pH8JEwv%2B3BwwY6pgFDjUusZVRrD%2F4LBwo0%2F5IxtD7s9r3Ivf27rFPrAGARwuaE0nXyjiJE3ehiAHJ7P5XIqxst98h17i37HM0YypsY%2BNPUhNbDPxL%2FBQHcw9WWvj17fu4wUdk7XKV7Yx%2Fg9%2FfG0YLVkMXNKD%2FwCKjiRj83ycpad0lMbTO9EKS1Get1rp422tLt6R4ClFR%2BviKYUe0aBAEUL8Vx2UkonX%2FMjjOw0iOAUU%2BQ&X-Amz-Signature=a9945af291809cda4792080cfa9fdc8f81a780953c48a87ed75c23521e790d0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
