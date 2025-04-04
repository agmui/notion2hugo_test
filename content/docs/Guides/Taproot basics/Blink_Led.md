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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXRWMLBJ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXtNE0e0rUHTRP3IxfrXGSrwd%2B2mw1yaoag5bm3nVTZQIgMRaQCBr2Ba%2BSIDW6M808DkhFZX%2BT2Lmg%2BHt9R0Ldpx0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDF0zaCCGWWv6Lb4OeyrcA3kunmBbaAtlIGh%2FWMz6fv3RY0V06qszgIVtlEqapXkmwQBvHgA4f8uH4UFk%2FsViwuC9vg2FMODT%2F7PDNf66YwXc%2FzuTuc8Sun7tvtzn0ER9JOQJNPwc1LTktbI5m7PDDJrKU6nRumxmQOb8X7EAT1cRlv8TFtx2VREsse%2FidxxfqV1cPQlzImos3rNXOUdPACVLZVyzzH1GoACJxVvgPiC56NFRJBZk%2FU%2B%2FCR7bTpX9F4ZZRGBMpNDz5S7uy5CmXk9fhPRlJIFLmaP58sH3MUoinwtP3BBl8l1UkPSxf0ELQrYsV4U2zqQpx3VGMo4qr8m%2Bme1hCme4DUBcZNN6b%2B4rg40W7NzkmDzDNW1PHSS4jGF2Kx%2BhMJ4doiPjmT0PD0EbjmPvNfW3yG7pe%2BNRsoHMV%2FPTOu1uf3CIPkYKkf6vLhkmcwV98gMZkFmq5EO8A%2FGfYJObHxhrGHU9na5TdmVlQoowzB%2FFr3P5a8tEouGm2%2BT07qroX5r2DY0piGa5BqY31RttU%2FUgtrUx%2F0wfZEorD7DuhvNkz8eG3sLbOdyMH1MlMp0j%2FP3ewFV5q5fQuqHxPhQCxCVkYIytzGt4b4ztQflrRMgMl4t6NHhY4xlpM6UwYQit8YL2T55IMOWIwb8GOqUBkHDpXUm3fhDDK92m5KuvrNfOqc40biI2aqsQITjhbuUqcy5jvp%2BFFtMyRGOyumOmVYhqOxmlcaZHj8oIjsCPikFLizCtuA0BGycPADY4usgw%2BTfgfABbzncPvB53F4O24RV5wMtasDIhVkaTadmm7LGsQKliqj%2FB7opee%2FBlWClqU9aUlg2zeRTlF5daxaI4y38f7q4ZBrfQ5doG22482qhxPplz&X-Amz-Signature=de2010e91331dea50f0116d5ec1bca58d6f44d28cdb2a79df45415d302f03059&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEXBIUZK%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAinCRfs3hPIg%2FjxzazJ2Elmk8C6vCBoMgAOGlnf8luRAiEAqzsNXsc2%2FIvAB7hZLxczFrXUZtkH1ifnMJ53A9qu424q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDCNVnadEbesay9IoyircA1%2Byv5rOG3DDbrqxlRTgVUTWZDH%2FhOXWQxnvelLtxnyY0f4z4Sk6y8S6QrN7PvxKuzGh7cJJLSBd1skYZ2uxyT3GhzjsPlEFpzo0LkHx1nlE0i8XT11kyjNWJWnY6ciUYqrKVpLFIclpMGj68%2FBYex1WgmHGIueZoCxYZtZ9ZI0XF5OiehCzCs9KhLDcISfXwfyqKj7E1PRgXlVeUell6ywW7XOfjhWS80Gr9UKxcksO1xkz5LYzIBWGhKc9uIPTRL3WgChHNKADT%2FYe3D0iVd%2BZWqvNogJPSANJ6WXZCG4Pon0i%2Bl%2FPwNVVmq34VhsjKn7oG%2FFedGitkEOlkwL7%2F1aLwSG1CVjezN1U%2FBCdavxSTzRFcOVyXKkfJnGN1sarK28uLO6qgJdF1gLC2L1muzRPgpzqiNbK1K9sm4VxAhn2Draq1D4CO%2BdpREFYMORmIhKg%2Fcl7UDR9alrF2XiLFNFYrwgIPTbMEKWCXctI7QPd27Q5Z%2FQDck7bQu42DNyrDj4CSC0PPuV6x5h%2BnEYrnzu%2F6VCLpeE8MCl4ExomNvNJWZ0CsOoQpNCu9C4MN4gqdgCdk%2Bp6SyRh%2BNsLjfPGpklLhBAapg%2BUoBElKsNcpGuYyrGsnL9KG%2FLZ%2FEpgMMWIwb8GOqUB%2BZDpCREN%2FjTK0uhk9tYM4b%2BPoh2TlTYxZqX1i7LQMkZoKuc3ColDyJMFsWgLhwkxZzNp%2B2IXErAxJnYemlcC7z3r5ljfNruhhftXEWjZlC9%2Fovsiy%2FVFgTnupLuMsxvNesuOBr9eDxqNG19O5E17ibLspKLxA0lgQcDbJwTyKfZMs9kNsGFq%2BF0v6S9RCyeMEqWj8InmiaHcc3JT5RZ7evtOio7b&X-Amz-Signature=17feac1580e9564033305fae2da8eef5782ce0a6cfc1c88e9f7d31182a5d8b3c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
