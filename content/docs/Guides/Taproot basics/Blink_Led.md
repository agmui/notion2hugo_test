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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEX3WQDO%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjHGCzO4JQav2ilSHmJSf4Qyr%2BY0TPt7YO7cRsi%2FOTEwIhANTOHZ5rEAryu8YRDxmP1Kz%2BtHTKn0ok6zr2PAug1vjfKv8DCHcQABoMNjM3NDIzMTgzODA1IgyI0u%2Fpl2ezZwkwb3Qq3AOVBQMHKclFU%2B%2BSWVHPpwCLgMeOfkhCZ3q93iA2V2zEAeTO51D%2B%2FKpp9rn7h3ERkdQZfnpzJIPVY3GSvrDajxNM3%2FXBck1XyJooojcWb%2FGKziaFnWZzOTIEtq2xHI0TzNGaI5ZYekHdLIrbPFeHxpoAx%2FxiCjRRa1BT40c%2BKGXRIziQCg3AruswcBxIS7iBoOscN3SH%2BUtGgAHtQqhS6eD0MH9m0piJCMKqXlGSPN8y%2BxcWZo3uJMHVgBTQcehknhilyMg0DAzAvOVhmo%2BzYisPjBEKdai%2F2mbZQu%2F20BHfk9TB6VmaNaRvXC6CPQze4E7JBNI8Az58fHzfLG9YTs5JSpGiyWIIw4R5mkH3kO2XAF2T0q%2BfHVFFt76gvY3dt%2F1HR6U%2BZCwzNh36W9XprVkuPvI%2BHRvNYSqxDBql0%2Bg%2F%2Fx8Gf5S4ykrth7HgQRNBL8e%2F8NNpVOeLSYk5n6qTWzyuuFfEWnzNgd0zcWPOB5PKRsRTrVo5oMtzh%2F6E%2BP5V3itkSWVyELSp6%2BO03gDIIdRXTCtZZt83z8DMi4oZT3Ls%2BqrRPy3avTGJYGC%2F2r2Q2HP1NnXSB8dUaON50YpKfnBzhCJPhjQFwpZONAxr9WLFv9E9t4YT2rjudNo1nTC9gZHCBjqkATr5DZ6ZHikW47uAq85DrPozfG0jcXEdbwlr3wk%2Bc%2F4kXn9BBU2pcsRBdEUuIuZ7%2Fw49IkkzXAqBBhXW7wrZBYrda3Ku06nFRuGOscJheSWscrQVr8nyyAoPjpdNvm4bwfCBDeR8rHWbnd2cqRyf8Lvwi3Vl5uuzdI8B4NZTYVNF4VKQVryuONvmcsHDnqGVv0dluOkKIqjPMfqqacKaxymUqVIu&X-Amz-Signature=f8076cabf791bc56c46abebad1b78e1ce12c6e1bf4c05fdfa0c9add73590f761&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIMNKC5N%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBXd8O2Ld69wXT2ltwnqwSyWkgtHeCid9551vxFZOoVOAiEA2CQrHWjtlidC8KNkpstquItIAayzHk9pP9VSzcs8Hiwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLRgoWAM%2BUbl%2FRe56ircAzffeZhFORHERADE8Neyn3e6tacOXS995EvrVGxHyQY9%2BM5DW2pDZtVTvYpMaSC44znIEPLSWyQAnmMv7Gow2KmN08ZPBq%2FxfxzZo1OG%2FKteNMd8%2BNl4pagmTF%2Bvhl2ijEIr6tmXno9MY9ZsUNKaeQx8XcWZUG%2FiCf5Vx44pO5oOq0jTzARQ%2F6V4%2BoGvnZLPKYb9F3rzrwOg6ckSvBbAnjuNgwu39zcpDWOMa%2Bq8NfwZWTNZiqyQhO0Rk%2FSd%2BrwxeFQ2kxeV0HAsGhiMhJiNo85h5JytD6FjieoNA%2FRrpFXsVrHAizxi773f8jZIokX2ogTtgmBX%2BvjRWytHwSph9u%2Fvwvr7OFPp%2BT65b5DrRDIG0wI1lLIsBnRyFd4Qa1QwDY4Y4iTvCWSSftp6vLbUYh2hPMuAi2pdksNo0o6bocOl%2BExXA2B%2B2xegx7hXimhYCjuljX6SJH%2FkPl2OCnr5s34pqqJYXhqJqyMqC7jgyg4p2jCeypj%2F3IYUFZEahc19S%2BkjsJC0fjcgSDRkmkXu9Zj%2Fscn7TJkaHBwYaZ3vMyC1EWUyliKp7qvPDjiNnjzpCQX6mu6HtshNajSjC0yINm7B%2FlvXqx6YxTtKPL0hdHZSiZHffgs8UWlezYmKMJaBkcIGOqUBv1VcEjCQOUZAEqOP8DFtlfj7ftMyaBoCoivZOfFOV1rrAqSgK8H29CdvZNjRl4IMwZ8R52rItBOUNlaAZTc16y6kBJsvGLMl%2FSKcSDtNDqiEWjA0zRUxZL0kkHrwbBKNNiIpidf%2FKlRcyFj%2BX%2FFrQu7AMCoD0AbEEELjtODNbZMl5IO0MSj9X0u2cycS5pg%2BHK8hyI7E6uTE%2FWdE3GYMSNSDumKt&X-Amz-Signature=8e3f8971b65dcdff4549fb9f40984f0d3a5d1108a691cacbec36ba3fb11e2d17&X-Amz-SignedHeaders=host&x-id=GetObject)

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
