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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPNYAAON%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEypE5wIeSrd26VG%2BIebcibEK1mG3DOXHpbXH6UTjjAaAiAfNXepmh2PncIm%2BLAf2Cra1uQZqTk%2FMmUc3Q5gOLWpmSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiYQOx1ldalpq3w2ZKtwD3VE5yZxR2UbvaHHc2%2BiqZCxVHSm1ElhmmO0gGsh3haQ3W2WrYi1Hz%2Bh7WGZhJbe3CSBNVdHn39UPP520TqJZES%2FShb1Trkxjx2OyAzeneRcmu1yucRMvR5mkzuyV58sYCZC%2FaZjIyGyuNnc5O5%2FolMY%2Fc69wjvsh9ssyrV75LOihmv%2FKuAVt1fFsUyEvYm5fsNJFumY%2F%2BtNKiZAt8Kft0wRp24lcsPFKjtIsenznZrx7GHR48Ne7pfIa2KnDQjKDWE8yhQvgq6nRDJGzS7I3KxrccFUsum9faxZH9e4ksuLaT8ct1w%2FXtP8PUU6RU0cT8286aEYG6QxS6yLXOy4Bhur3CLTNl2Zz%2Brf%2BQMgw4hEmMa8KUTLvybO8W1cc%2FH%2F2qV6jOUf9M9bcnqFyBkA5aMVDgig7bcwQgGHJnn9BHfWhcva%2BsoHUtWylV7PQVr1bmBNm%2B2aijrcb1V7uioPT6sE67uWx6eB%2FplR8RocRpNd8JumGoYrl4hfGV00LH%2FIDxgZlYSoTLbJDWlx7PNqrgS7b%2B36m2Wf%2B43V2Cb%2BfVGpgAOqwc7rbLM7HjWEXxELCndVfR5W0cIi6rvFf59FmNqP6FsnY2crdLVNex5%2F9DM6cSM13yIki4n7LckUw3LOpvQY6pgHqSc%2FnhYPoWkBmFaB3hxtnMmDimmjxetcACNfJLw8jyAmhdzMEsD36WEm5u8QoUU4E7ds3DrUg1EahtZ%2FfexU2LTni08ai3SmKTEpBzHkWtZjKLhIQfGM5oWKu%2Ff7QpglpLNZlhK5UBpBLCn9xJ3VAffzhfHKZJeE%2B4BcCPM3HrdaAKBw%2BnB2zqaP6DpDTL13zITQJtNC0Jn5bvHd0UiEZ81ttNe5g&X-Amz-Signature=d0d2b98f92ddbd4fae94decb80f88ad5d6a9cbd43f57d002a426baa30683b721&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RI7OT6P%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDxf6DlnR7X%2B79WZtptXDfr2o75cWKGZ2K0Ld%2FkVDnEAiBvVZpZP8fU%2BGMoezqqmCzqaYJcp8Yf0RffCWqpeiJZPSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr%2Ft%2FQB8vSLQI4oOrKtwDJaBf6jLj9Ajzq7hUeK%2FdqrGZjrWpJdEM2DMmYqHhoySU1otlLJikPXELBT%2FhjESJUulXUAy4kpiTfIocB8xDhE2k0s8Yz5GOUV%2Ffz0Uoq%2FDCOMcjtOcYrHGsBjNK8zKidGuoC%2FHXtm9%2BMkxOobDgi8GSHuib6557sUIS6iRo1MfSwc%2FyXqVqYI3ztzPEgh8ECqzsw0ExUvJMtxyBqZdXMFnM7djf4pzS6TuEKsZcnZw9fqrzA93n0PJ9pnZVTZ8ecGfRY8IXyLNZCHsLJacvKhBGzXVbBTYqUgU5f%2BCKJSsQgmMF%2Fe7ZJgLDeN%2FSygsO8lxXLiPzLdh7cLGfJZENcS9bNvGYU2kt4fXj28XU4Hb7usGNi%2FEdg7ij0yVBB43Ra3VIM4GqvMunDQh%2FQN4j8hwbV1hiKa1pPOpmfxZZD16VgZgBLFGNh6USaFp3tzfxEq2ffSGXB%2FSO3jy97RLV9yj3XaZfKYXxC9qu1SiMzTF6tae3q366kD4Uw9oDNVGxAIbnzl6eMsgqI9SOS8Hf9sqAMaL6S4UDtvZcqSkxli5cgBsXtWHIXjXnirGnKUFVDzwjlr0x3yaFF9Znf6EvtmGyCdzN8Ua6vJ%2BmalZ1aoIq%2B7uk5R5%2BSk38VWowlLOpvQY6pgGTlcQrlvhI3eEZI%2Ba1RwGKbT3hU1MDBp1e2fzIKlnC%2BuFplFQAY%2FQXLqWOtBHlJL7TkKS3ak6SfMb9zUDKFYQJe5gp2XrICBuNHpz1ankd37TlJIyMzuiUWU95PqXhQ44PHRg%2F36xDEi1nM0xnjt4ZAg5XbRVkyDrPWVqQhc%2FmF9%2FhL5x9lMtdhP7tsAmgdzFchq530fk1yFBD8Yc3TrSvIAykXzEj&X-Amz-Signature=2263718f1e793db4bd3aa69872df531ad153cebf73e951f291740980c0afc78e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
