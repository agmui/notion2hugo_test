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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMMMJ2WU%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCzHTGfKNC9yGAz7xMWJwCcDjPSk0lqJ8A2X4rIkBL3fAIgPz3OjIRWVdHVMBVXlEN5le9YKfO8pqwryOWc3vMjBIoq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDKiXAwMtqN%2BLsj9dzyrcA9Wla0sIhIMw9BaNxiFFWuS2TUBiUWjDLeQcfu8yvIlIcfxHNl9dF%2BcltX5k8RqmyZhikxdK2%2B88uqanN1vl36rsvdDFXCOhBGDwgBpkVGFODIXKdk4b63HPwNLELhc13NF5YicxBJ50EFV7K0kX5ShbHagFoDCyn07Vax%2BlZTZO3r6Mr7X3eMO43PZUYxAjRYbTGusy%2BIVprg1lt9ZSr2EXObIBwc4C584OBF7o3aKwK6QA7yDkbVybIhs%2FxGYIxxQ%2BQiu%2FfCd2%2Fouq39qDhqgTVO4q2y9bP40i%2BZziJa8NCrHifJYrnta6S5ZiLRfI3r1kYEAba8KBNRikMAgZPNtci8mOACPfcBNMztsNTHVTuGzvuFtuDtowMIWs7OALYKNypSb6bucapqTUmA3az7%2FvNkXmcuN1qYD9QXrbPZV6ouJwOdXEBT1GNHUDnlHOlVkVlUrbcbllyrAUCYcrRWtqcFqx6ON5OsZyUDCWgPf125TEJPjGco4zu5oaG7P58XrE0tLsMKx%2Fii77YfCHIOO5n5g5e8WEMlS6sD1vcyNtBNn4CkkxIBTKGfpvGMnvPuJjvNWScQcVCXA5F7Clf5vjixlMI5YdrmEKYS2Fd50HWVmDDO0Mqu0sCcwWMPnn3cMGOqUB%2FD3%2Bvulf6i8hCJ0%2Bhc1c0YPE0wV1rYxK%2F42F%2FIcM5J5a5RXGbm%2BVdSvgBPOqObsr%2FL4GhhSB2GDD3DhKQ41sjqttNnxGy3R7G%2FRsFwkuEi0nMfI%2BdCaxMlK2cW21J3L1pZAbK4KVKDXEA%2B%2BHqOSOOO1ghrylEgDD4uZX%2Fhr56t0%2Br%2F8%2BFQCZJyzD8yPy72UOIfu%2BuuhS%2Fm3IsNLuMyo9G3TZf57t&X-Amz-Signature=0de89ded184feb7b98bb9e2dc05bbfdf289500d745ddea011849829e5b94828a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627ZWVQGT%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIEaIyG4S2EXfSFhDYQwnYg4OaotK6MkatJbOP1tSr6RtAiBQUy3R2fEsOeeDtU4P7faMfRUAGL7DIXIi4f9vD%2FaChSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMmRNAT87dwxv3ZJg%2BKtwDHDBmiYZt2gNLkjjT0QeWcXDV%2FCG%2FvEVHy74L%2Bjth6YxazFVrtqJgh9JEI2bNKLmqHpgHlJWilV1Tvs0rOczG9%2BQQklNoVyIJ2o6gcjbDag%2Bu7p029v%2B3uZtWPHfl061gy7Dk6wQJr9CYC%2FavkKpI7%2B6wjyzl4WhOFKOLec4z24lmPmqmKpQMBU73Bo3gCsvPWvnvELyc4v5DE%2FcDa443ODDo8A%2BUmm0TRhZIhb5vUrLEd%2BkjnUsZcLoV8Kk6cVVE%2FYYOWhKj2ph1Omw8yXmtPZO6tF4ie0Pk9AFfX1xo8YZyArD3vmdzAXx6riUJFL5ZZjNafwcO6LXmN6t3t6r0pOtTkdQA2iEGmDyy%2F55f9WZ7hq4GjEBraKpjP4WXROcnODHhQqgZMlb53wWo5R69w4bFlNP2BVaqzJC7TOXwtWiIWAoLyEDBkplz%2Bx%2FlxVPgq8c1u%2FX%2FYpMD6be5rFqGuZ5v7IjlioX422xVlF8b1ZH68d0QGM9TsAMhY0X590iPoRrK72zv84mXbzAU5AuWw8BJhh4ePCQCCNLlokvwwalCouGqYqsp69tFuMLa%2BUBQlU7gTM6KhWGK%2FZs%2FEwcEJIZfFQpB8yh1XwBbJaqgUuGxyb%2F8bY5NAABMQgIw%2F%2BfdwwY6pgEHQCKx75Q%2B%2FueuD%2BIB4ZSlIqcqXoXajnq04l4dG4sidlrXIdud6y9l1l7%2Bh1iBGgUYUYwiqaW2O%2BdmPZllBWejeIIa7PCSfx31ChpnQsDTVjKRrij8AxnWMpbvFLkgSzmkpUbUaB59CEeMnEP5i%2BWyhKPO%2FhG1BjZGjrWDkZ0ORByYbZIgxOfbOqMPyOiVgLWqmZt9rzZlxeuh9fei5zmk5fBlHzsK&X-Amz-Signature=46ed6803099c6743d8a8454be75369dfeba14ed496ae3c0dbbdbc988510d6702&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
