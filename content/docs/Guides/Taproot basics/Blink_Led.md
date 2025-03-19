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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625GBZGQZ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBFrgAO3sEnRb0QFJ6WsGjcaW29HpwM4td1CZw9iW1aSAiEA99b7VGh5wUOfA0nRe9uXIZ5Ks02tENaQRiCySzgCMzcq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDAO4ej1NWFUdn%2F9TlCrcA8rjQeIiU6HFdyqmLeynChbPFw3vih8z4qZjh%2Bq7zEydX%2FZ2d38qoTxcwtkhbkNXg%2BpJnYSWFxI5p4bSPl0bOokEyaaMeUhhTKXQaS%2Fm1IVC3cirUX%2Bw2c3oJi63xgDgkbVc4IzQ%2BBjbtOHNsZCbrAfuJYKuv2zt6FMS3IDYSNQmfZdJaP4mFj6zeIcesbVW5yKSiXhPK5clmjk3gSCtLSBJBgreHGzpwY63RsYGM%2BKIneULj6frsQHgvo321homYwI%2FIm7n6f9%2BsfFD8FU3enVrknkgZFqWdl5zXgNve%2BoESorLmoplptsQFX80oOUZdWDi6Q%2BStkfXp4DkgA%2BL4R3cFk5pp5%2BQPXTgTr9CwSwihugSKhnMSiaUqi3slxa5o2eRQXRBc4YSrlFjTMUiiEbctpf%2BxKbjxIUGV5sTXXtXhCFHsftySpdA8HQQjI0mIWoYrVGt08yap7BchupfpvVQxJgipE2Rk93G1jtGzxFsnC47yR%2Bayv5JoLEb0ZikUWjdMP0rFi%2FAOvPSPumBKuYp5dLwebOiz5a4kLsDEzUYwCOb1zJvtOHKv42yEIKg32oR5jEB9E7nySKva4x%2B4vYra7ctRRchSDpLIKbXfUf6Ck7ZjJ6oJYyjtywSMJHZ7L4GOqUB3VQozBCrGPuuagfi7Y4p06cloa4CmUP1uGQkhiqctPIkbIIvClMNMODajqVCRs%2FglTc%2F6p17BaMM6pDlLmtvEPku%2B%2FfFOVci4y3ZqEKxVYzgim7J27jIyWaVOnnH3XVnIJnPDRUn%2BMvsTIILTPD0baN81woMRb0gAWEYFut5NDEQV6frEBUkxODlJZBgMryoPhyfyONRFwtW%2BwHD1tIeZQxbsC5k&X-Amz-Signature=3f67f64d4ad228cb09aa0ca30f3eec083dcec2f01c49dfbc06a26c1849bed13a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KAD3QWO%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDXVu2EfM%2FT2SUSa52OI%2B3KG%2F7H9jCly4k1S%2FIYnolTFQIgTAXKQ9ztcVBqOBc0kx7prYJ%2BqmDnaF9%2BrEXzv6%2FeWDoq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNdU7oNRyQhdsIH8lSrcA8tWK89pYS4O5y4LMz2K7Ni9oQSej4sbGBso0o%2FqVFs7Dt1VtTgBWPdtG0SvaHUgoAmE%2BElr8%2B1aaQr7EP2je2m4pBG3jFuD7%2BkkxstD38QkeVvWofxqxRJFz44Yu88oU%2FRFCIhyy1bloQgPzbTQDNaZ2x5m2jQrU85J4Giq6lTZz8fUqbhSrOO2kDqvdNcYKd1ieg6Bg6pzz24Rcau09%2FQ1vXyuuY%2BNtbI%2FMO4AfGfwo09DQbDt7QjdYZB1tvdgYGhQt218kuqgxTHcNVmSXb%2BwqXvGPG%2BFHEcDZ5qTJRq3n0GnCTTgRWmUWPrvqqqwXKDSR%2Ft2xQ%2BZhqhumwLzlN0nFE34ZcdGxwFg5DF9f%2FiPKslPzZlh4PK0jQ6R5ZJQ65HyBn5VG1Ez2NOwyBrxfNVj9DBwv9ZmsxHCUB0iDGWWDeZcvBe0DkSjFUKKBPI8Cd%2FpLMI22vlfEtFWNv80fsEQaty4gsoBXy6hRuHRNleLLO3rd4DXl2bLOvGcmIeFmcEo0yPTZNwNcU4tD6ADtP3vXpD%2F2%2BRuY4USbpSnGvOA3nZtav4sdWKH048X9tLGX5A7hfUD1kw7EyiE%2BKB0YP4dYIc%2BEz66TZYG%2Bw21XY8zh5gw2blr%2Bv52YAt3MOfY7L4GOqUBaq4tNwHIZ6btEl1RmayEyZNi2PobaGmoBEGOJTI%2BUonRJtfGd1u%2BZv2OjHxVwjXCwE8BJgdYEw433qP1g%2FO4RVWE%2FbhqD7pSqle7P6wlvRKRK95gHDWogwzeV5ysrMuIyPq%2Blq8KakugrbxfcUHsyIQxs1WA6Omdb8pEae4qfJaEcRFKebu24KR58xB1Ki8N4Ph6%2Bhs%2FjsT%2FfXD%2BxgKqIsk5IpFO&X-Amz-Signature=a24492cc02c7d5992125eb63efaf26e32fbbf2560a183f6b5263e3e215476dd2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
