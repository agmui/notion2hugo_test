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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV554JY5%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T150353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9ts3YMdUFstmQlE4QTHWoJ7S%2BPhUE5KYVTK3c06sQhQIhAMFzS9n3%2FWyYacXNUnanWI0TZGn0g6BprjFXAqR2fkyUKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrunOzNSKGSgGFKPIq3AMoAgC2OXhwMg4SuL%2BNPVtOrkO0iZtvJUp8575NTc%2BxC2%2Fm6nqQBhbrN7l3erwmzrpSrb8H%2BVFVavKKFqLNb0UQjNBnaVCKAlkK4eJ4UxJbz5pMg8ZTS1MEhSCEYFJDjSBhONgGz5wskwXSoK5f%2BLclYzzUzYBxl%2BlE1J5GJxmkYiQ5s6D3381StlU0OlNrnyJxwtvoHYhROK%2B5jX9CaezL6V4GFZ8QIkov7k%2B1q0bzHRXL6S1D0fDRgTY0jEESs3zKz0ADaWqhEn17IduUo%2Fy0O%2FjUThf0REO2n3KSqDvD%2FF3rw0BeOIM09uavP%2FNjZki8aGMlVGVe2tL%2F5ierwHwsZibYplCIIB26bf7Zt6IXvVxCrwkBBUFZWMPUU2%2B6y9d4qiCwH46pkf7LD9mtP%2F1M9DCZTPT5EjQmZjT9x5eIrTE5Yunr1WZiccoItkc%2FWWnW3v%2F6erQ11FskEJz97TX%2BKJDd9HxbNLq74VVQCcRAJleUZIl0kHHieLtr0YYW5fbYxxeNVZ5Bi6vEKQkWuy6fMUA7KBLdUsxtM5%2FdEdMDzeFNLtkSYnxy1RDIQq4nvg9uI%2FLWXP7o6qPPZVY1XXacy3LQepSWX6t1%2Bp%2FlQFSjNOkolR8T1sr%2FjlBd2TDXwf28BjqkAVOxAs755l%2FrL2I%2B4bnEUpi6Jf2XIqDrXNjcYGtgUmZ9ZkB%2BR9TsCCdC9AFz5v%2BhPem4ZmrCLVrjKnsm1mM%2FgJLhlHIhKxPv2i1%2BNDsFjtKjj2UY5EuwvurqGF37wNspmXy0AAVwkCvAl6TvzRmCZ2M9B9VnrScnuthkBewORpuekofsHlblBi%2BwVWecr1yhgRSWVyFJru0n9sekQh0MmIcZlVHs&X-Amz-Signature=e90c7701470032e9f4a1c63684fbe7da15689fbeb2b3d111075dfbf3dbdfa2d1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GAB6GTQ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T150353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0xvOAdAhskr0ks7iAXNfLpAuoWIT7%2FX52fhJsj0CwFAiBr9uJuNJLPUzO0FP58XmGrPHDYI3qhqN2MnLmq8UBYXiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT6iTJglmD4uGA3ElKtwDnaG5PUJF%2BNRYnzrDEQcajo3qeaQO6Hv%2FqQw5XNQ1A4CwWYigkXcSAeso4oMYdIbcnlHxEMEd7chBeZwwiTrDUZ%2FQbCrFmjEDeUwm0ue22SYkfYaaU8EZQEifOaNkDHitSqnWJAVbZ1plfmW8YGmpNNT0P%2BG4KF0AvRSSzM%2FQ5R7E0xsgctffF71uGVNl3kTyc5p%2FD07%2Fkts4ZXZ1OuVXKQ9t5w81HreMuYiXeosmVIxPflK4AX%2FCfwuxlvmishiPqNKiXGtGiuP%2FJJ6OTeTzN4weJIJCzkNqLBLUBBkd6UMvz5%2BpYQ9ZkfQjrHPHWq0nPbqhXd%2BHPli6MCojLcbo%2ByE3OcDm4VEz5GkMS%2FX88Bg%2FJQRBbc4Ve04KvdRtFh54VIsK9F4csdtdCZwubJOa7qs9OBx1WUpQTQUbiYZ%2FhHJBbsDXhWmWZZZ3MQcz%2BbjKqGDD99hFwOvs8ohcb%2Fn%2FBZXsEI3rLBB3IFQ%2FxT9ipSuQcPpy4DOA0Hq39pPbIpk2KgHpJWS60EBUa0jMgFzkUE4IiA2rKuKQYxqtpOB03xR4Ezq9WFs8hMnDT0HYJaqd1yrGjUyzC0NYfrPly%2By%2BxZDquh00EJxy4PIhkLxkbDq5jtcY%2B7ybWarUSKgw%2B7r9vAY6pgEs40FDPQ%2BI5zrWdbvu5E1WqidBWbOSE5gpLZ70LZm7krRybf5j14Zar5D0QA5xZzjjqMaMzajTTJYIb%2FOQ6%2BAVqoWIxKOU%2FOe1HI97eqpUH%2BFs534WGiE2QRQtkK5wjDuu1mGMkpJKSJVPRccgGUkghYRjKnahLV5OYNl9mS4yDfrYDN%2Fo9V59cxVDVkRGlZCkwLX54znX6bk1N6MwLB0LDSyponGU&X-Amz-Signature=763dd4ac0c3c26f370a13496df642c6d5f1b1e197b0397ef40635a5178876832&X-Amz-SignedHeaders=host&x-id=GetObject)

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
