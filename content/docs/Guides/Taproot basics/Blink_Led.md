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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT5Q5CCN%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T003632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFTYdmKGnUIC2140gpgq39c5yxseDg94Oyt8tuGjmQqAiAFzWoB6SYRQWGBMnD6QjiaxKOEkFoPGxMNHShjCwjcfSqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa8LGe9wTFqS7iy2JKtwDehp5z27b8rTAdP3YczWtVgP%2B%2BxrEbdiN%2Bom0qu7Xz9Ri%2F3ApIzuX4M%2BX%2BSvoh%2Bmnc4qtQdPFqjbGlbBXip8gXwQsEWPPX1S%2BwSgy2I1WfT9YlPN79DmHbZUZT6SLgug2Z8WC95F6FyAQQFqadGpvyNEDPhEmrqPtcxG72C1l2ZytSHFzXzM0tfGkR3qTlWTkQZYDiflr%2FHoW%2Bql2fnd2kDp4TjEQJGPWyAZZRxzS80R9UXRlpanQJBjEjm%2B%2FnSJaWmdCxjMhfi8fq%2BolKbQyTkvK8lRRuW3%2BuALuAmIpSgryVhvacFNLqgkaVnRqpK0SXZlnC%2FGLvssj96IZRtqUBRG3SU3iFtsRkZqZpprPILYmtgwFP3p0T1KhVOm6WbCC7GR%2BbROBtwyoehXxUfiXPQMct0bn2fGhpNF1jNm2jBSAsEKJjQ3%2FOmTaAX4jPZ9EbgA2j4A5sSo3dDVvOHdKIDL6cDP%2BqRc8TRb5ApqxI6QzYLFHFT2xImrBvaxez5qaqS5OVgV%2FMfm3rBXpqytaU%2B0uT7PMmeTBn88k8L8O51u%2FKIjO7SwJhHKYILA%2FuqNfoOZat6ZQRlTCWlSAfxheWpj1ikqnwyhZc2IebPymxe0xVup%2BlwW9tFoyFNQw74PfvQY6pgGfW%2BXBBHCu1HsJSMjJzmk1n7OnHBJf%2Fo0sOu1Bfq924PoW3YTtOHvwauZViIFHEBxy8i3Ifo28qDshmZu4Ktl9grJ05I3jkmv0IEdHezK6EmqpyEAFiRp%2Fc3zdT4JYDwRSr19P289nymsjIilkPr9QTRpJWXoMROVKyvOab8BZYNyZkunC0ONY2xzS24by0Xzwew2ZqMtxGMmhVFzRq9mhKi3AyN1T&X-Amz-Signature=582230563eef2149161307fc5b82d353418931367fb01ac65476e311a9b1fe71&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFK5TMPS%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T003633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8r%2FRH1oShxHdT7TbJ4pZtJK6t27ZXhwf0LINqYaIG9AiEAgW%2BIQS7HcIVgK%2FZe%2BMDCyN5SwAhFJR%2FptdzUN5AqrLoqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGwpbYoy9yCnIKyaSCrcA949arNiocQ6zdeKBu%2FjK1CNGgcdxn%2FZuw2Mf%2FtSwXAm%2FQ7Dq0JJowaGSN0dgLcAk5tbW4IiKeTxFAnLFDVKHa8RnW4x1dg0Edve0hNi8QEgrx87JDaRtL6D5qvM3JAA2eYAlpehcjX4upnSKNqdVdE1pMrPhQ5%2BSuR50%2Fqy3x8vIxTkBal2H5N%2FrDwNTtE9f2zae9yET9eiQjJVqKKpifeNkQREvwpFX2DtHR1uLNTnVtZ8OpWFd6nd6TbIeAAGEclggFmXHQvIpoTp5E4ZjGtAMVaFYy7wcNjRIgcXrwg3k%2FwXDAtznFOrolU9wBdGR8dFktKVIEgKKSZ9xfGmBKkX%2F0YobG0uE7k9nwFjk60XHRHC1btUDFNSaZdwGL0YOnHcN1Jm5ilb6ulrqfXNeFS1vgrKziuZjQ%2FvICFM69IO16avrmMyVWSYuSpeNJCU3pHx2qAuipTJ9kC8J43bu2hvyGa0w5TXZNbJVEML2%2Bm2ZsEErfKCUzC%2FbEwcCi9PKs7cVgFYwrHON1GNrX5o9TYcmkGsunIQ9izIUFsLdrb7RXZ0xMH%2B44xBOinMelCqgUotiwvqejwp%2Fz5y%2BC7x8HsZG3F4q4aNu44sGWArb6Mxm9hH7%2FxhoqcHDAy7ML2E370GOqUB1x%2BlMSn1mlCwnuS75MgFi8iINqhpoYPM2wzU3btW42W4eFs3sEj8VZOoEAe0bya4J0vhnRry%2BEpu0HeUadX3tY0N6iH9HxlmZmMfG7GU5Al6c%2BDuyvA5XETYjhfA32pzc9njfgMrVjd4ngn1aHo18vH8Nuz%2Behw1jI%2B3L77G%2BGM73X6WvaiYFOc64XpCNmy9qsqlaMXVrkSOyj3mvmrt2eIjFnO5&X-Amz-Signature=5cec1defecfd28bb2e87413db2a3f410307b74ffe2a837f661174cfc3a99e364&X-Amz-SignedHeaders=host&x-id=GetObject)

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
