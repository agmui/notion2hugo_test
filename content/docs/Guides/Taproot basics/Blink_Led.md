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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466545U7JVH%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQC1YCF3c8PXl7HeC9MJO5On%2B7L6upNG%2Fyg5qtaOteLrfgIhAOyhVgxhFeki6u7P7zXHXmw90WRaw2uPudIlkCxQB92cKv8DCFMQABoMNjM3NDIzMTgzODA1Igw3%2BM3cSwevH%2FNOm4gq3APTi2eAH0xriAJ4vDHjB39KQ8FMkuIq54iP%2Bo4e3g2LtQYg9z7EOAx6iwrv9MQrImwris%2FFlO3M3pS1H0PLfJ0VIbzQb4LV3SEcpGZNpcTZn%2BxFDrhaOZL7RtjWF7qnnI5dNOV6u5Vio0tCBQnQaWUNIvuYpjvlnVnZmaItBKbg1wXIXRwIHwvHjEJJku%2B%2FXXWVtiiKdlS77XXNgp02OPToeNYWAUF3IVwyyPObKpGI1YqbbAVj44BENgU0P0hiZ3ttbw3oc%2F7uMRy4RYrJEe%2F5c7f0%2FISLvrOvWPKx0zEtlj2aA%2FT4vSheO656tudkzpQxDaUCfhv2XhLpEx%2Bvj9k%2BRIINw5s%2ByUKz%2Bf8LrfAjqSTPtFSdDlzeiysf4MwO90gAgpxbi1ViGDJRiIweSV0czyzfXpRX9RK55fowPwo8ACQRD%2BWDIcBOv%2F%2BksN8WspuGBJETmmmXBRkiuvJd5BbaI%2FidNefV29hodO9VU%2FBOOGwf9Glt1eH1OTSzzZyElZz5woIFJOvoGS1fdLgsSxBWW5osEEIHReVd1choYAyvuBYDeT6ghxcjxjNR5B4HzV7lXMJ7B28%2B%2BTTodo6io5JdpeAnwzqCERFzsgZU8nSsw6Yzkn2Z%2FQD43hdt5zD%2B9JDEBjqkAUuzqexspZ6H%2BI1%2Bp%2B2HznAUi%2FGHBEJ%2FMrfqFuvUn%2F9o9%2FXDZ5D5RcZobSrD2NXyB%2F4vZhwZafufluJrgP1mVpqRDx1rt6mGr1oxzDmbolJvNKJZgGMzeGP2IFirsg%2FHWI0mA7QYwsy1G7dlJVKeRGGc%2FJPQ8BlwvBEI686A0PzcKosYxD02kxLB7qOkehSkJ9iOnnJen7DHDtIIzN%2FiZRQ4GMpq&X-Amz-Signature=f1d7db0bd31cc40c62567290b6ff3ee033bf3ec715c2c71cfb191ebb0940e573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWRZ7JMS%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIE5wLEGp8F26yP6JK7yrwlqOlYSpAw4uuW1KzY4bTXFHAiBG9bLecbvPa2J8KYlMCvbTRNxcW5%2FQx7bhSE%2BKbJELeCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMrQwGH3oHxdg2UCu1KtwDlmwikzhDtO9Ht6ptPxlQS5VsZMZTWgCO3uES%2FykupYhCW%2FxTEGe%2BZJzGUcbIE%2BrL8umbwbbFKoiHsO%2FcmjNscBUOIFMCzjgU1tAhFXk8iNgIjGPfmS7EkSNLagl7HBna%2BQ764b2nPsImyI2CIMZyF3bfvF5L4Lz9FVJgDORu1C%2BluT0JjW74r%2B5xAAUzI%2FR24n9twYOUapZ3wzZX9vJX5A5ZJwZR7Lgccu5%2FBIGwyHEJx9mTA62k2R5X7HDMUPAUIxkw7CDzF0p7MsqdlAqvkgorM5dluU9aC4r8t5Vbqj4sVd0pm2DyaCpANtF5SIk4kYWO1hTiM4l2fFXl1%2B5kin06rVNX1SaXk81IWFByX6W%2B8%2BYXNVeHSwVNwhEQbQGUAk345XYsZM%2Fuc5y4TQh32Z7wuPtBWQMz00720DQc7VAVdiEjBvBc1yZjP53q9aEvFFXqFDqgxSRszW8LqMIjxQj50ypGx71%2BI9ewdgcMrl0JJNVM5akLCzuzuIjSAp8k4HvDwzAYoz1jpxTQkYtY2BsfCBJnsfAwxop7LEQ7o69ZJ5LGC93o%2BnWwbLJmSC9O8n5OpviAc6hqlfia2jC3MDOYOLs1zAPLA6H%2BrzN9jdjsvuW12x4hWipJSSUwv%2B6QxAY6pgF5XVHnZwH3huWKTWXD3bY57r2%2BWFKthJf69v2w6gb1xrJIZgAul6d2xNlwDWU8%2BNmSDHDw3QBuWAwjB7MGwmFlW2l0ERwy7z%2FzxeRCywVsV5CC7vvJvVlm8AW1t6gYezq8q87i3OAP5H1s1GrOYQqLjlbnnGa21NlV29UKWByaOPwinvZkIrPFJnewzX%2BD%2BkbFyFHe8ksEDHZOsuAZS1jF3w9mb9FQ&X-Amz-Signature=4e56d85f7b28c30803600e3c11c31662003051cb4432dad3888d482108e9d0b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
