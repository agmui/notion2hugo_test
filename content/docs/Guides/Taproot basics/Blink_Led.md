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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTBT7AC2%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T220142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCAToQAG1ODX9i1wKSV7P1LiX2hhgy%2BAk2HXuXRV5%2F2DgIgDagouHLjyrnG0aBUxSuXeR6zUaHsjDiVRVk4aiYJL6UqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGP7c2eQ%2BSMfZRJuSrcAwtke8nejoyF2sVWl0Vmv7fkvK2VZVBDwKW1MuRU1sa27KbOwtlxzSdo7BGAxkSE%2F8w418XEfdCRo%2FGH2ymNuHMQGQJOcAEbCr60%2BWT9siIB6gzGZwFG5P74u0aU6rpWwgr2ZJte1AD2ZLwhS4jdhp68KLImreAE6GT8VURtz6Gl8EXWEPXALDRq9N%2FWmBzFIFuXcCzqYEnJuyttCPcPxHE9DUa%2Fqf%2Fk2mzXtLDqG5kS8vilQedOl9%2FxhqzZ%2Fu9JG16xuOuj%2BXW85DdSYcg7MktK%2BFQM0GTW%2BvbaXeYCJIzN3vXSGGqDKj3OfrxWJGtIE7jP9ZVzZ2ygA2vT3aYo9bMf8fD9%2BRBKemln3Sw2ltG3%2BjAg5XKhOFQDhhD9%2FlDvuVrPSoHJRthMErFoWZEy7qApedF7bg3ygtAL6rKIBj7zVH6hrCVI6%2B5%2BQd%2FBW9arpAWFbp0DqMxUwj86yam58nz28OFWsxO3qk%2FMGwnv0E%2FtjMRSr%2BdB8hNLHCAKPop7pi75XJIfgB5UWznAFN12O02N9eKoo9HbvBYKSfaANnBYI685VPKu8LjJvnKislodWkLK2hkHHyJBbcx8cWKLfMfZU1HMYfTyfO2VedPo%2BNBq7HxjwmAMMrCSBQD%2FMNGYn70GOqUBbdH8XzA7n0OkKi2OLWj9Ww9%2FM6ZforPJrGVyvYjgSTrS%2F35vDD2AHaA%2BW5%2Btuj6xCJ07JcxdQRsvhJTYg0dyjKrLl08nMhaNb5l3zFymlRFNzQgU8RwziJlM8JQgCZwMU1q8bgbJ8%2B58V0lh3QVyslKxXOfDm9GHjYTGDmiNZUdrv%2BmbTxRHgnMKS5iVXO9yFB1yS3ytPBuxLjJK3NtVwRHKjqbO&X-Amz-Signature=caf061dcb5f1b40a59878b8901599330705675c6513ce717f2a758e5811ef00c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQRIW6MR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T220142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIAdgA5L4KH1HwsY8N7tdbCqOzPxUHhSMTfPfIiXVHDLBAiEAzqQxUcqkqUMidSLRoZpF5qeJzxW0urrti062seiaJEIqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOp8CzdkHBdKkvolSyrcA9b5NmK5lB1U2C1RbVI3JBlrXVJL3qvJibGplMX9Tbj7PDee9IhHlhDqPHOqB5%2FaXllHFva6XJJ0xJOjq0bOMcsYRilRADNTIXsr%2FJfTS4ZUZ8yigCyLN40DA1XMYM%2FEW3w8ISnsiuucDObmBT%2FenE8okqCaJCTjx%2BjYb2eIr%2FfBDCro8fghusalNdQUMbhga9zDR2fzZG9J7pIChYcfz1aByewK%2FoEF8xGX4WRCj1r9yv1jOGYGhNiPSdR4JCwu4XE2sAI7QiLrikHan9iBHZ49WiCuJCquBQrpTP4XKlOxJd%2B3yX%2BLuuW4mfwDyEq%2BA2l8kgYd2qe8wenDBCCFQ0syoMZFSytYRbkYYmgONGZbza8BLgc60BGQyYMvy6XWdRqIVN%2BUA7HXPQBUi%2BX96HnPmC400Su%2FkZ4v8x206xj5UJt7%2BDLJMJS1%2F25ymO77EEeqtNtLz4ISNtK9aZ97GeYL9rUc9eDwrPp966Lj3db2c0bGvWCERTzVIiJVac2KjCGhK0q2thXAdWGo7LP%2B3PiY45nYKURFL1qgZOoVLWU3MgXo5Cm0RHO5jlJ1kEdpiDI1rJ4w6UkAoJY7NpbfPwlLGHTfToZoSClg%2Fwgd2RN88sZBPKPqOVd8gIlXMOWYn70GOqUBOvgDBkCOP%2BWA6xKX1b40SdJPwtBAbkZbH4Q61%2FKlN9tzuxVMkTUPNRYqI5djzcuerPsTgQAkNJhkSP6sfKDDGZUkjBRw5n9GklxVPbp2LaiA%2Btyvx0zVav8wJcg4xemJWBk8vfSDiBq6AN3TWVqtLR2f1HycYkBmlkaKfVGaKCLLREjtCjHzsgjM7aOBSoglqCF9N1Z436Is%2BnBSiHcvMnBuPtcn&X-Amz-Signature=fb648659e137a65a5f5e94f2daeff6895924ba756f13c7a088ba966a65af32a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
