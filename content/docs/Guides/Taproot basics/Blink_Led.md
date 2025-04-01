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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GN6TDI2%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIBKarsE4I2Tec6FTA6dD1fwqOSe9XFC29kGueOjjl68LAiAUTYeqNEB89HXeAkBg%2B0pOugbf3CLihjKjtg4dpWvyqiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSF6PCkSse3IN4brrKtwD6%2BqyjpYZcPwOFTlGf%2BaF8BJB2d2Cljj6CX0ZQpn9wF2pzLl76JS6ndiI4PInVBF4W50ZuwLPbkIIgu6jNWIyyBPm%2FCaPFf5OjlN5PACylEeHQ0%2FCrEUYGKZ%2ByMBYBewylh6zxN31i5CFNMeUIB8zo9Tr9GwFVw0zJNx7%2FSbm%2FFk3ACoQV8l%2FzOqQs1yIJ%2F8xJDmzeWXYkNqU1pQerUM5EBWAqJv6lsi0wipNLaJDq18MyJKvDyLWyYJ%2FukAMqOMPqTexOg4CVrxFRPUimZfcfFuf3jCrBj0%2BkHU%2B4AR5pIjIqDjCbWCtfWemNUYfYz73qfuCLSTStW7d7T5Ngku2P1fNqjHWb5FBSPb6HXqoqyD%2FZAGijIVm3X136jq5q10J%2BGm8uYTyjsih53YnPOGanglCKT%2BAxiul3wFtXlEKs01kkOmpL0SujKO8DKe1jYGa%2Bn8wTeaAVvPZcK7b69ALEAsd3YSxros2616o3lFqy%2FhxSoU75wcqh81diLNj2uuRwZhPbPeUTDBDUsfELjqmblV%2FxjAWEPq5Wf%2Bc2aR6U6Xb3%2B8B%2BmKoo07vPQte089f4x8Vvyl%2BbGtjTarcOajJ%2FuBPqOw0KIbHF%2BBG%2F0DgBNvuTWo8mCB4ZWi74o4wh4qtvwY6pgGKetz1U0EetvARI%2BZhuiHAnZPUJHHEhO62KF7jrJo6M7miNX9srFFssPnSMorsenAf2G1QalfoODZ5fJAFQvnfFR0uL5bcy%2BZq2abR56wsoXpe6yi9Oa%2BI1HT9MyIgzLrXcLSP3xLs1WCGdwcQcLSnYmIB0DjbI0v%2FlIXTFKC7ld%2FpupyHvAGD2z8RkA57QzrYDF3Q9UW1NaRaD4DTDoukzJyt7ZPt&X-Amz-Signature=1dd9e39b7513f6d602f3c73773a95c7107d5246b9797c91bd2b13f21eb343315&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QAWYT6M%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIE5Zid%2BJs5APAEgOCjI9v0%2B%2FuS7R6FK63K0Amez5ojM1AiAQeK9lRZrQF0AZlF0GdENgq%2B701s0X53ek6xEMYg5HoyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsSAU267mUs0xQhdsKtwDGPYzM4Z%2BfMQFlBG5kpoHXRO0NFlC1v9Ie84A3l4LqKjLS00%2FkLEVxW7cqPZuornAuzDSk05fpTiQebPmuVCuEribqpHviGXhloziMwH8kiIEUOTy%2FeNWuYtcCNTxCQOHnbURAidJx3%2FQtfg1cVCdZLTSCJV5Oqu3OPymEgoV9KFs9M5%2F7WplV4IyRChi1e5e%2FGaBr1IPRHadpUmgqAVtvF5Crt58AYNZYLPz6iE2ugcXDYT%2BSQmwTfG7CHQ41JzmoyUgmop6nfrQHamzpqJUfLsHoKx%2BwZ6GBGHCmiOeN0fcyjfB8pMEuRCjON82NkW0T%2Fw%2BkgT2vpDYA99DyWtZErL2rZ%2BG1rgALWvCiNrJeKn4P58NBdz2zHCwFvQqwGGyLaXFmiibW0shy0WpMOCihidK2qdtrmETLnFnP9UeNdl5bQQv1k%2FvjGrCHwbH6%2BtOUvpsFfeEuZ%2Fep%2BTsN95uE9PKzjBjnaavarcQGOw%2BA%2FpJlTOW3Xf%2FluPTa1yBLcJJUugpz6NZhed17yetgR3hdHvlhMElYvipjyGEyGs1%2FkCm7VjebI3c5G5m22N%2BkZXfoJIFlwI59tzMSt7VaIhX%2BcifGpVwm0Sncr6U7SC7xTPzJbOZgR3YWaezBsMwgoqtvwY6pgEbg%2FZyLWNqlFVjJY30horTaJsDevz4pv6lJN3nVqQxE8lXWM4uMCBzWVJ5gqyWdZ3RIbyQ3S%2BkDBtRFNTHEQwG1AOShpRhL9qKQ1C2yQ1Atx4y1L4B9sbuWvMtp1fVnvFDt0hOXJKKZt%2B1hKdvi1NvlPUDMAgB%2BsW11Rw38PZDDaPTw2CV21El8Q8D%2BJV3iF7IEDLLy7DCNncBS2BM5YYt3%2BAHqmfZ&X-Amz-Signature=30864af26c991cc141fc10406c7813b55dfea21f3ad122901f9352f9a4b991ae&X-Amz-SignedHeaders=host&x-id=GetObject)

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
