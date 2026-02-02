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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A3JFPGY%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQD63EKCco%2F66uhUB27Y8lfCsBiZCZF%2FgibEe%2FmmO%2Bor1gIhANDeNGfuB%2F3J31aqevfkk44%2FdEza3DVZHkM39ows1hB5KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2F9Q2rPqncKLHTXGgq3APlJmi4sxEEoyzTTywhxT3xxax0W0m2EVFTtVS%2BJ9oYJyuTygCXlAfZHwDY4xnsW55wh%2F1j1NMvB0QWKNTBPOaVLHWu%2FNJbIP1muHYfHat1j9i%2F%2FDwsBuSpsdddu2hd%2F92WFYmyrYn7AFOfKub7A1VvOnGO80MsQzUIro7W%2BUB7fo0K3Ie%2F0r0h3Mxia63tOblYrLBd0kBU7DeCHce4y09b7eUKk4rn7YNJUEm5Wa0wCTs8Q8gdrMap%2FBafJWM%2BmnTqjvnciAUZG4U619SMYrqwKiza6amBHWjF3SMcQzRjY%2Ba%2BeK2j%2Bi1m%2BiFdgWUd%2BbLjIRlK%2FVffj5WHOAVF3O8A7HWsHoh5OPrX30mrJcYS92fJUOriIGwDx1etI0bWWFF50hccFryjcWcCzsZcYOg70ngvH7j%2BnZZ%2ByfuMAop0C%2Fp9ThwBapTv9UedDd6LPfZ1rNVYIiW1fCtm3kNpLB27z30Z66iOWv4YNfFj4WjdT1SeT8Ga2Evpj%2BUvsXrnkHrWkYKVaNQhMPbFUeoIQ%2Bo2g5yLomeeFRQl00wReOscYIgpONL5QlGTpX20GehtiFn4G4kp%2FyHgL3ivmpPB1HgifqiBRg5ytI3HlGZO5x37fGPwK4HgSpjoLrcfwTDKhoDMBjqkAUPfcbu%2BVVLM%2Fz9BJHpri7ngZgyJlkvIzZwGiF8TxvlFTOsXRnC2933%2F4tidiG7HgKemZZMDgRZrb3h%2BYVD4GMD4L7YnQYZxvanKzNYoH6Ku0Zrt8fgOmPFius8ERRi2svDYFzfayh2GPa9CHZMKOo6G7sJXJTXfuBGeQK9qiTB%2Bz9pD6msoVfxVrxwy3m2OWqudqctSNEdsdwVJ0g59J%2FAK4yxi&X-Amz-Signature=9b44dce12474e315eddca6813b3b430a7f59e60a58f0909c7ac0c27a53d3cbc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVH4LC2U%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDUApRvTWR13qS5gqOsfwqWcVByvG%2BarVXp4td6lfrpuQIga2u3luWtcafDoHu%2Fr4419jk0TzRfy1mJpbxIyLYas6kqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxs3DKnlX2gcIexiCrcA8W%2FxH9o5aEGXBqdkwJYsJxQcqZeOiXOaqdM3kxBZtJgZCZ1OnYOVRwiqg5eq9UbRB%2FmdIVf9DJqRVrUrvBK6otun7XVolgctv51KNjwyI7asRzanwPGjQtTBYBmE26WYsYnnylDjbXg92%2BVpHnT0HUTtzuUcKG%2FCYeIiRiXecWRLgqZISLvlF8plXPixby2Vsya19mrNUQpn5DK7gRRydqkltitKw9CNdaFtIFvT9W7tl%2FRzP7WZZWR%2FRfsDTWvkwxhMN8fKWgCG7Rdj%2FR1y0Z6Unu1m%2BDRfvKnWaoOvY1%2BX1lhfAaJTAyfcny0kwXGbaZNvKn7X21sbZ89Z2olwr9gjC9QKCTHLEqcs613B9mrc92Ytb8LH512tfio2YLO38YQtX94JMhM1uUemxOuVrtU7DDft0XGsmvcCu8oMFKdyGPz2Qkz%2FGtv7SvJfPeka%2FhYoiQf10hJ3vuvUMcDHPPVyAkDStzm5yJHiaBs7sxQSuRGPN%2Bf8mWa5xgbFjfV78AMQSIqJXFZ0OGxcwx2%2F3teHIA5aWvidsi0DBo6jHivLdD3xSPgWiO9aEb%2BkfR%2FWWkbhQDa2owXIGoGQ0fnDtj8jqqMID99V9%2FG5iZE4QAmN8%2BSIduUbl4VsAaoMJaHgMwGOqUBGODCCpkZedBd34lvVHD6NUxUuU%2BrHS%2BCkiEJseMqSPJm5daa%2BXONRBIgTFrqIRkcODvD07fjc7zRIFXYfIbWD3RF3zPve%2FyzEmln2jSpnbABycPPvDfJoZN0IVZvUKqFdC1uT69yYRZyP%2BZIpYwVMVQT5od3wp4ADN1x7SaYfW7J98TQR9qF%2FG0HNOda2P7XkBUjVCkQWPFyry0s5pHRX74jrlai&X-Amz-Signature=485b302f9242432271f79911ab0c88d621688853e7912cad2de874a82d0a8743&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
