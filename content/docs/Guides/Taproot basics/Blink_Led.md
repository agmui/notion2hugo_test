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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXJ2Q4S6%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T161049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGRe6pfPj6NM%2Fl2VFf5HvDy7e0UzAVlmWc7MOi8KdK6wIhALtj4EVTqEF7J4Pt%2Fvua7ULRakLq9mrv9z8sXYBaeqHoKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyckhT2NjYWKr9NMNoq3APLtgqxymguwGq6AS5HVx3UsaXspH5sfjLWk5pBYCoaovzbxmNy1MPX8MWBW8FmekaYroo1oiiN9glGG6jRrG5UAsjVrwK1KCjxAbLlz%2BmYNPy9J6OC6wAlce1%2FV6E2YbXaTuGMFhgVvdghISBHxcdGaM97Vgf9Wwn3Lq2NHSFC1ULqZEQFzztyhnkE30viPyxqr9X1adjXBNHeVWzlZ3Jm9Xz12f%2Fe9AjLhnbRI4dSGelBYpPpNfGomcptNTYIUVipGRM9Rjp9PGoOze65DPvi7%2BDkRX8iMiD70h5kXd7jmVIMyO0lvXh%2BmyoWWiRS7Argi7OL5IuktghUfpbAx%2FrBe91p%2FEegQ8cUArP6Q4oZhWBT13f4dWhbN6lWhqyBrjJjSPF3IpbqaEQP7MXmmgFyYrJXiUJKVaLb8%2BHmn6R4Ul37gWHlXwuW1VO%2Bjt3ZzI5ju%2BNCrMBKbvzmzHNsZhfD0u6DuoE7xeaxz%2BQPrAWRqZc4iRRWKcLRiQpxgIo1bt2NJefIv4fClWEb5qHktUgCfnDRvpU%2BlNPB5oI9ohWw914VmVk6mvtqb0dQM1zRw9mPBZ%2B5iUSW2cpTIppiL5nogyl2L3UW71O22lhNHr2kRpQEY0SpajpZ7ryblTDg8ebBBjqkATARQa0BXlQzLkQ6OrYwHIjwQ2%2Bmv0l7kc7z2SR3PTgCAc%2BNI5SnRXgeRnj82frmSaBaZDgyJNQaufiuXdg0ILal30kgfEmJIYUKOCn0cAqBO45gI%2B58fGIsI0zakjXAhLah1ZxIwkdl%2FwlN2nIS6Fn%2BO5T2VUtX8V7NYgDP99eV19qxoaQ%2BT8mncruVX8z3jQadVtiMLsMOSeH49Ztvf%2BAsVFj4&X-Amz-Signature=a85d23b696d3a3cea6158a2808a8d6b901066b147821672aaa0c1917f6c4f94e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXCZTSWU%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2B0Z%2BV50lV9NPhsKs6UGuxnO581var6mT9hwHVDOqjeAiEAp6WpEF6mCmsqxNpy8t12FD6SD3mfC20loqfR4k83JZoqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHx%2F98qg3UgEeSrmDCrcA%2FZH9Jf14p4n%2Fqf7dkGa0j%2FgKtI3Y6NvDgJ%2Bk6zluJRCxK30X%2FG9RX3qPJ7huNOkau4sY1mUNxVke6sbGKrefhrN9xplrT6uck0a1NZm5bQNcpdDvups6rZVafl1AcC6ClDoOARTKm9%2Bneome13nKutJiUwWTokRCncpDVj8JjassqXRnKIj8s77AcPlckwSCIPZvJb3CzSPbaJ48uUs1T%2BQsGXHpH%2BKRczCFBn%2BhcdB%2BBubQVmLtEkzO4tQGPnelkktTS83nvOGZuo5EJ0sFFk3RIZAg9VOqygYp%2Bx2bCT98zP81QhAR89sb21v8AoFtZeQWiT2uSrxMKEfMScXRDHVxpzHOnVy1WnmBIUlXgwVfgaCcgeOoFwhH42YO8Rz1v7x%2F5pL%2Fd6j%2BryVyrIB7QUn8%2BJVn5xoiU8cp7vcTtIo5GyXLPeaPAfB4L7eGDOZ95aNuL%2FOqrSIkwGdS7SUXU3ZnnDdMFhDUlC1jAniMbqmjQxJd414Q06qUaLa5IyO%2Bdz8aiSNeZUnkMvoQNmNi1loiux7GZ7f%2Bb38tEIV42Pt3MM%2B%2BNlMF0LdTZ57BboZfQkVVCQgjKFnPJAIPRmEsr%2FxJKtaDspJ6e7u%2FZiVOy%2FUJFQR6x8fYyy284JaMMXx5sEGOqUBLlRsu9UR0R%2BInNmlMqBvcmBOhvqugH%2FRAXHjChA3hevIJt3l5nL9COQeDsb4hwXYKug9F71UajAvpD0BwH9EOiku8U0affjtzveL%2F03Iak0XsJTIbVKDrPAymJNg4ORysrNvcutm5mi5VZBADsFrkYKpC2l8AdPd7tsAbrSPNHtc56%2FVNsizrK%2FYGNxwWrJ3BqfEaCKTUYLNsr8m0DvAxeAB5fPx&X-Amz-Signature=638446403692ce89d2f36e21caba7f1507d7f59cdbe712ba40294737d204a862&X-Amz-SignedHeaders=host&x-id=GetObject)

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
