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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZXTDWQO%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCICjGSiJZqPGAI0AGkQt%2F0He9Ue2SufmOwcA0GxITK6UJAiEA72EfmhurJvVc0mT45Su8J5qgiq3JhgCoi6YMqfPwOJMq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDPmFAneWljPcfGyrySrcAwxP5OuG6esa0kZKMqWHaTbOcqniuo9seQpM4FMtX9HdrLXEv7KwBQnozZelIsUzyrJ%2FbBKCBeGd8KH%2BE0QcxpzK0Lgjb3RcIbG88Ksy5KROeeonLZf6IoegUAXjftKaIUOrL%2BgeU4xE85o7B4lKeVpYMFGCd3XxyH0Fa6MOn9OK4UUysrD7Gy4lAADJXaQrQcy3NZwOEGuHrgYBE%2FaebGRrJjcilxb1b%2B3huBzA5SJ0lM8J6yEwChR0BcdgWXy9u0dXfAqjlodtkXR0XqpBZE4owlJH9e8w1g0wZ9541XGSVBAPN2T368aHdA7%2BFlkoNc5pi6Gg%2FI%2BfOB5KIfNZ9UyYXWf35nkqXi8R3cZdA%2BDzrBzTpknBTSp8LvZ1k4KvbYq8xXCT8OeyYchZP8aW3EAkIq1tmDo1NkCEh6Wv5bDXu141Pa7E7bwOt9sMbFlSHPiic5ZYF2dNP6IFoTwAxneNtqSTWkNDCcEM%2FcGshGkUP8HhKLvabCbBK1GOcjhHs8b6eoc%2BVbKlqQvaCKiCVxa1xL9g0CZjGm4pZZXP1RLswWs0%2B76yWw6MPbKW6S5xP3hRZ4IXAx0vAQpTGULJd8NeIlMNb7%2FBUnTLVVTMBPQs%2BuHDNWDp77%2BV7biuMP%2BLjb0GOqUB%2BKZkXmi3VGDaXG5sNMKYphIno8WKBaVu46TqCO5dStbTogj%2BJSr8yBWOh1Hic1X%2B3SRIYxvA61vHA1jFDo3BgWOyfgKMYYb1%2F5RKGDOPBRJzmp5jyfMMWlRqpWJVMlqbDXKpnqxmA2kbZM3rsuW6dfKKXJzsu29aLKGpdYaDNmL7gLIrPHOvxqzYOKwvVGPfreLfQ5BHEMl%2B8OJhPDI0CFZK%2B3xc&X-Amz-Signature=9476444f3f270ba78732afdb9f22fbfa1a2e5f3a5dec604767960dc569396561&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQJSOI5T%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDBwa0iEcKf7hmZuF0xnQtz6%2FzkKLaIxp2BAQI1SDr7ggIgOBvziO6eujFmjhiXq5ryQxH2qLmsocvqKLIr5Y4%2Btqkq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDC%2FVSHoFAu8BZ8f2MircAx1HFU%2BpaVBmV4eZ2bW%2F4aahJ6zm8RplCeT7v3UYYYix0Tj94Nnr6xwXRvM3jTt4rfMUhLH6jMj2DWmtH4sbXl%2Bg%2BEAkut%2FjMd2BOZC3Rcc%2BUe95os2bBXhJGh9FrQO%2BdHaxH6lS8oPJU2n%2BKSJO8fhbZcLS3DquB%2FK3HjaxRNXyM6oKKKf4Ru2oPjEmUpiCnETRT0%2B4qOBAnxo33QuILayQLRAJZhz71IFM%2FIXpnnOZ3qirA%2FcREkwDiR06HXbElUp9eg%2FwzcoC0Yqngj08wVYdkWDF69NA1tUM4OG9n%2BvH06h%2F66qUQbruaFBSeYzUgUHZGm9xyyQmu8oa%2FPZPX9Lnx4Sj2450g%2FuC%2BiMOlsjVcVwosEIZCOdf%2BbLtQ9GzyGUpblDGfIPsaYXnNx5RXbvrMCKtOilGUTPwrvRG0HoiZj1jODS03FEkefwfZC5YnZI%2BjKj68PBF8Y6vsLvszu0QCOnHo%2BBwu8oPHUhxph5Quc00H1RxtbXT8WuWuq4WBeLXofRfsjJrgc1HM0%2BkyfCq1bHh038Dsu0DN46zQmH7jJwmtG8pQT%2BrfndYut7Yrm4ZA2F2ko8HHqBdVc%2F5XiOBls3qucqoh%2FPM6H2tMaH6dGTQFRxHy%2B9lR9awMK6Njb0GOqUBqUfYEprJxnJxrUd8yMrh6WeABuk9vqoSbBsZMiCxXV%2Fc5c%2FlcR5o%2BnlurdbdsQiMRRSi4yYkHYQq0YRDm7uiIEZKKGvTn%2BXV%2B7jMd8JdAOkIqbfQfd8ZZu7zqW4hiaXf%2F6fGqFk8Jx0L25l7LNEE1C2q36fEJKOlQL4%2BCLCZvzH%2BSv6CW0UPfvi2TP0wrAtobC9Z%2FZtkMrnKXK5tUwMcRCOuM9ZZ&X-Amz-Signature=2f63666947640d136b7a62c16c853cde34d4f3b66fcd5f9e89f1b3c60deebccd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
