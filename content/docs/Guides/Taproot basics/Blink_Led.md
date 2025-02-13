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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R44QD2B7%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjMHb81KdMbcoLt3QahB3X%2BnzmMLTHkG8zAW5zYtz9mQIhAO2U8nWD55MD61y%2Fmq2e1AM%2F2dwjJPAYIUk1EoBzT7ulKv8DCBsQABoMNjM3NDIzMTgzODA1IgwRAul0WeINodpoeSkq3AP4r62x%2B%2BbNEoyJIpeLSEGlwxH9Kw4sEoeq%2Bh4TNHt%2BH90ZX7%2FIo5EoxCr9N5iryqwCGFoa3CYdZQGUXGcS7RZ5sV8wDLA0YOTS6j3tMIiz1E2qVApSnpKvIl1P1J6OHAEixdl7EUJButZ%2B2fps8ntZs0uBz%2BQUGGdgSeeNcmFg0D%2FnjI1%2F%2B3GKTmdSlzGMC9PgKxUT%2BTJJFAjin%2FRomTEaY%2BTwnLULR5UizAlodkl0MQKhEy9lZJVAF3tfo%2BAC%2BwYRfZ%2FJovQIcSBRt4RGzqx4CT1sjyUMR1cPSS7T28NGTtoZaU5F8MsgYjZMQLOXZUFgRUeP3FFBo4gWd8faOFw9Ra%2B4CPNsLVfEsC%2FbaMe0vvu1cl7sD9rOgZbmsZ3Unc622bHIuZ42wWXKSyQ7lruSpfEM4nR6jI8eVSaTtGncpxA3DHPpxtZJQ%2BPN0Iwwao8uDrxdiw%2BKicPLzmiRC%2FYxPnHzGsqdWnghGR0%2Bgr9ro5cgaQX61qUBYiemPb1klMWICXX1kNR7LxYaqk6emdoEGWtsOicDatorQv529zzQftNk874z4hUWbkGQb4e4a1xhwL%2FregFrr8ifTqWQkcyIP3W3hBEYAlofFn6pJWLv4oES75wpuKCUmSJJpTCk37i9BjqkAYIC3J4KPUFYFwgLR4VJdivoq516p2%2BIY2XBKHvWsW3utfgSX8fO5CUqWqx7HDZjKYvz9InNsYg2%2FqmJRASxk8F8juJP6bFWYzd5D7TirAWaAroy4gbtKDyA%2BB5%2BZKy27DiNnVLJwLM642mrmTKoFlDMIpl%2FaZrgfv69IOz5tRyyjeYf4HX7r2uO1oc4S%2BBsj2FMPK2tpKyslG4LKJU%2B6cO2C5z5&X-Amz-Signature=5f243f81702d5ed3915f3dd65e77b6640d270b5eda2cba6687abdec7066fdd27&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UFBKXVW%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWnxvrrttoTI0t52%2FPEJi5Wl0Mj9DHxNE%2BQTeqzqwJ3AiEAjsKg7wcOS7eVUXgj3O3ICj7LBD73%2FOqmO0SC7kEDGNoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDNmIsFkzQtHLKVgpSCrcA9nvMfcMJImUx1gh10xKLwUdGkLVci3s1IhTntdebE%2Bje1QgLg9cauhLAh8kftv11CVEoTbpexUItg7rhLW6iiKspvd%2Bc6dmqZG93SKgPQRJb4DnXJTJHGl4aWbb76S0ENGjzlcxCzW1EEk8EF5OeJ0YTiagTz6glx1lNOsF2JrkxLAOMStrgrsklk1dEcGfwKb04rDxgpX0NH2JUXBnsS0ZRUSmhjQCdY6UveaWE8hzn6QOp1fFJnC1%2Bx%2BQ1kdNrGd1pc6osVTY1BRryl4IS8O5inNb3QFk%2BCXfMhrmvwG341lv8Pbt6txwWRZ%2FjdTC1lS9uaGu4yfuu737nawair1LPhvUfnjjBHpk0VlJGKi%2FPlqkRf1XQPKB%2FDUIq1koUpQ1OlPZEEKLPMXoyLLVAFdf%2FkWYQL6kIqjbdkqZPCQ1I0CTozlNK97Je9KvtoZK9wL%2BSw1ybEcgeFeNXhLZISG%2F8fP6b%2BN0Q2N9R7qcz5eUSNaMQLiXRCJkT2x194JAmyUH4B40CLjtksowbfw%2Fki4VavNXr78iUT%2B1lQBioP4pLpKPuq6YAQFAU5fr8B797diEReJX%2BkfuwnqK55WDDYaoi%2BHPWz4B3WvraZL%2Ba8Ke17VTQpQnlXGNC7GcMJ3fuL0GOqUBPgK28z7bcjs4lo8xdYtg6erdNk%2BNO9Bu6%2Fw29Cdt8596PCf3fQmcKsMFXznx8CuzCjiGSlcdpKqnYo%2FzjbbiC4rN2lLzcm9IH5BDCUExjQwQcJVQU6CqzkttMeXxHM1dlimeS2rMnnavBmLm9XSQ188wA40vi8OAQoUPn9DWf74pO39CGwsPnxKP%2Bt3lEbT%2BBZPwdE665k99wILNpvSXHN3tXxnc&X-Amz-Signature=99c602be57ef45129b24153fefe4795fb1c54f9ffb89d49d86e61e62060236cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
