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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7T6GEDQ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhEANBDdWBRAOJOIho6U6Q2vodnCTnbfugTy0aKbolwAiEA9Yk4bcovn4BKiIB9nUJ9mkfuEEjxqTixuyjP2mzY%2BZQq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDO%2B11ZchttegP3MAbircA1vwUqgMb35f32kmNtJOTvSbevCd4GVR8OZh6SIPR1ewkOSDhQwGw7cqqQo7fAFPapfHFs23CTJuy4VsFe816gaSBDbti4EMF3ZXz6GUJAS7rRQLhq6ln4EMb%2FWlbMuv2fZhAyDkn3k5FpWqzqmy2Bh61dUaFTGMTNNNrs6jVR4XcWqgY4Opbba1yZmguVFcdE1%2FpDYmr4YxZiKPvFj8lKFYoZ5N4gUhM4Y8kcGA8naOcEbcG7JBlO76NwYXGHl4nJRoc6YlxdLSc8PjKb5qQswKw6NptNH3Hc2eZpX8AsEBiyEFffsLX4uOSEJj%2B3xlafk6PK3hssvx106Q7lCUkZQNdM8DdLBsLMLailazRqkSTAz%2F%2FXDqoGubuAvOYQyRuAgG0ZnI9DYJpTCsX6MPRoP1X0uTInuigS202tci4F2dxe%2BOTNoAsdFdWDqTRcphsyiIHUNH39nim89SSiuVfXNtdBww7AWiL873KUgWp5EBxAyrjawlWhNq%2FbdLCk0JcgPuqnSNnG%2BjY%2BLiAMeCEg5BDlWiWmDO5pz5Z2q3dIixV%2FbVy5NK%2BYEHwpHWn2rwhmUNJpbu%2B78LAsnAJ34%2BUANvH%2FUlcQcPTID1HqNDvvzIhW6yGt1UiFBtzmRsMPqLuMAGOqUB9R%2FSLxn1PZX6Odc6t5Ic3SQLbAZtULooGkuPU7OtAkRUwIP4KwghQjRMY6HOJl3uXkcx3DsQZNP%2B4ZejDXcWKRPS3G%2Bu%2BroeOFCNjiB6HGvlI%2BFnMynqu8x14k38vg10PlJsyCtyf11t%2BRQ5fPYXKYMmM3Ggn0U6c16ImhdymLRgij0YdINWI9EGgEuYH7bVyiJB%2BRmMSg7YMzRluc2m8IIfi7gt&X-Amz-Signature=59c6c592d2ae96d0e5998817aa1b3423a7f8f3fdb9316c549b9d45227d677359&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y763VNLK%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQKlXV2afJSfY0aEEO1c%2F0bKKe%2Bu2snmn10iPW%2BpQf6QIgOflCwfpwSDPz2R6QL4uBOkou%2FSzlNsBzoQndn26r3wMq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDl4n%2FGbSbPKzXFAEyrcA47nZDt8M%2BrjW8%2FUjH0lSDpOUctVwApyoQCYwMPbLs3v2c5hiz7cbm0u8eq9NyB1IJMjNTrg7xs2Uf0s17%2FEihsy%2FkNI5Qojfk6HQXxAotNA8kEVOJrMOXsuYM5a3%2BBiyVuzVYJsfzDYzD1Um7ls6V9KVnhQv2OFOKU0qtucuPcE5ijGsu09BHaoloPDSYdpj9Tiv5Oc7nKwFfsBBuL9R71XkzTpe4uiQN1DJ3bw40kTP9Egk5sbLNrhDMHYY7u%2FjzJWE1epkCxODwXBm%2FXt7M%2FVx%2BTZ7R4E0ZF5z8cXwDUQIJsDoh2D%2BbRQA4ZP5CiZG07aYO9Yyp7aDScRXi6zM9U2uwqEj%2F%2Fjv8vZr43XWoZJswlJqXoYjoVU%2BRtxE2vpt4a%2FuwJo3n77Y%2BNykntX%2BhrWAM0%2FAmIqrwMkKdwjw%2Fl6l9HsHvMHCTZmsgbP11MjVgEGMNvC%2BEfsFqf%2BJ13TtiyMH0PV5EmxnmVqSBv%2FoH5Ej4bUMlQxdOshIzUGnP%2BPFiVgzSAM16ScAvALGAMoNo5WdeSN1qIxshKrPkOdStfT3vosGSHnM7YsTD7UkYDy%2FvHZM65vE2dRQZRicPmrgAbbnIDgxxkJ4p%2B2UKna%2BQQyGbvhD3aACi6Z0ecoMMeMuMAGOqUBkRBwnf5UMt0KWCrL%2BpnlanKRMqV%2BwYbZmltCtkKWDvyTGm5Oe%2B4hNFiyaXDL0h%2FDaC62UsvUaaT0vj2tvS2O5Z7lxdVolElLJLHHNkhrADveY0JADktEiiYLpjGxj0znFrMLlejFU62G4qjxhD6nyKl7NlPCFyNQpHQUwXwArpiQc4qbL09gDWPnWasB5HgteXYZ2Q%2FJpzt8C6v0y9rv5JnhQxXH&X-Amz-Signature=076ffcff4e506d257469a3056f9415e2a513a9f40643d905d35740690921f648&X-Amz-SignedHeaders=host&x-id=GetObject)

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
