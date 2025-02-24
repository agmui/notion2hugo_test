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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUAVQQFY%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQCqhqpv5XSxOutE8acFgjB1dTOJPlFPv%2By9sp6PDUdAIhAImSD6jInhD12eUE9MwfWa4HIxyLgDP0crbFy1weaHZdKv8DCCEQABoMNjM3NDIzMTgzODA1Igw0kK%2FwDuynBffXaE4q3AMX7LW2DUXDLbPsIG54DAOH69Nu8ki0YJrzoHgLASC0iLqQ7jbucvlHs7pXlq80xZ%2FS4XVJkEFadRsn9lvNJTOGok5fiV%2FBNa9MUMWwNTpyJBLKNdI6SepDcrbZFo%2BYZI4RwczyL0Xeh0X%2B%2Bw3JU7FNq6Yf3q%2BgUo%2FWheiSEhmmauezrgDaRCkLBG9e5KOVbptHQ00%2B63boavHDqWx7pgBlbo3x4AVsAal6fj4qsdicLK3OeZ7q3PlQrLQbFgAEI1s0StV3p9eQTrX%2B%2BbTQrRyYeUXJ%2FMvZe%2Bs4YyYj1MKZYMagC78uLe12cWOuMgW9j0PgNHOjwKyuV10uuETTsR2xJ%2FOusLqdBcF2t8h9oyMyQvjB1zhQ7JjBCSJXtK5I6UUi9I1Ra9eOYsKVhCnF1bkAtvdBW9qdzBz%2FiC1S%2FkdZ1tF1BwdNofHQShxBE04sTvV6k%2BT9F3WIUhhqQd8f6P%2FKUDJ9UoP%2BFsdcHefGG09QELAc8uTLK25HdHBZO%2BUc4VFayBLViT3Df5ESDSA7%2BfVo6o6r0%2FFGp5qK6x2BoUF2QU2OdBasfUUFHWtRRDyUZJ%2FkOckzZzK9G5nUSw%2FKRYTdp7TvM9ElqOHfM9QDtrkJw7JYA%2B7Me5vqr23yozDN8O69BjqkAWteaf7phTWk9ecLWMrnsFgvKQTdELo2uHkuvjUtko84APUPz5zIqSHbCuCtwOnDe%2FYeOXaOrgIC0vZlBUHr0xoA4EjJ0%2F7CzOsCrXkrG2DEoTlGjrjzufLZNzAtc6FHVmEmvgZZs7RTsqru21ywzfIhVIKwS1Jl5WZejxHe1RVVrDNb5OFoDRUfh2ZwO%2FR6bCP78jJPY3qADAR7fxUKfLbwyVMC&X-Amz-Signature=34f92c1f709022b9d2fe658a0b850e15415da5901ed9ba71dede5c37d37bc18a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OLI3DUK%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQ24NKerNUCflRBM7lqAruplHX11wIYze2Ub1vvFS6SAiEA99BpW7hCT5z8BzIP0PicY6REn32iOQ6M6%2BQKkrqYiDoq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDBW3Yj6xAko2XevwUyrcA%2BM9SNuGaM976U4m5rczPdzHelOdPyQ3urODp33mpOr6NkiHWU%2F%2FMEUGU2mxkYiochePSDj6RgF61jVdH1Gq0EVAx3%2FmB9g3ztt2qzwktGwfof7IshoXpC2AJVSduSvKN6bB%2Bbmc29xN94FIXMQEzhJEDuCh4%2BYphydVv%2BllNKsAWSPzINNMlK%2BdRSPX1DZLJ3CUsJuOJJExSbaxtYXhLwZpPTZJLJwgbCvR0a%2BOkDflYdAox7J7hXN8KSmWeKeTIjmcA394P6bq56QwP3E0JGj0Abe%2Fx0lNrMAMwZwfzUn6eFdATYEtEyqvkbeqVJ0gsyvoSdCUQ%2BjWrrgB0sJKH%2BQKeSiTfC2KZdqiYX4qFxIo9uHbbTuGYVFcw51WoSmXt1XT3ggq9BoD1VxUO3rMfBRvrhgpPsxTZvGi6BM1Ynwu4wz4tjwXKtgZTCRPJIGyPXO9JAZ2kjNy6%2B7fmd%2BzctlxIdi4VBB6nxhSOPMSzZ8HHDojl7TLa1DuLS%2BGy%2FrFqvmpR5ddnCjAKZUASia6mqFxkqrNMet9yTblaMF1oGasKGSPZHoQVo6wewGuza%2BXHwSgmSUp7KyeN%2Ft861sMvpb20CtpEPIXIbRahCq7mA1gUzNSN%2BfDjSrxPjI6MKvw7r0GOqUBZMBwa7uCc9d5aE1p0TZS61H6CFWdqeapyMBXAjDkFwqYWP09cdryyD4b6srxM0pBjbDZcpbwOcdKrC%2F7KjZOOP3MXuDmWTVyTiRDD3UQFY1wFknWxQUTs1atBUDoFBPE0kpoXWUO5uDRAZWZGMYX0dCc2gPyTdIP7XjJ4%2BPYpQex1j8D1wYSWqTtSYYs25AZ9EjFAqzYwNolXuCuIA9mpY6brHkq&X-Amz-Signature=2691614558e274bccbab821221c8b860df23982cbe326d7eedda9a6e67169176&X-Amz-SignedHeaders=host&x-id=GetObject)

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
