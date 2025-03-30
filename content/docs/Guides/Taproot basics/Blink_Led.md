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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G4IWEI6%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T200803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIB%2FF%2BbE%2BRVqP5y48asvV2BhkNUn%2B25Q%2FDD8jjSQK%2BwFSAiAtpBr60geqWpeigHrpoorKMwyZRBtOupipUugfVt373CqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML78IP6huWrlO%2F%2BzPKtwD6ukwcdbB%2BBPcY5XzrzH6OPuxz%2FIb7J%2F29ut6oqGsnDFpugNvIVIjhvxe8NbzpgmlrlzIehalcV3%2FW2iUzWKVZcZQQ8tPLozG5CmaO%2BeyVE5%2FfIxvWJ8cCRtbEhAEIKEzkhIWzUIAioK12bnQKiEAiZuk776HY2S%2F%2F2KvDidu4UHtrNPBVsxUfeCrEDDdggRzRrbSVQsNrCKg8HyqjerBSNOGEY1LIWBvfhkC0EHcxh0lTcl86epQ2XrcWv6E1cs%2B3BvfZnzno3PYVS3sYyNZL6WVx36YaenP6JrOeqHi%2BirTOzx7VEu%2B0iJsNho4zjIBeWgta7vGDlPnfeL3pNnXQ2VHD%2Bbb9PrpVCpU588K3EvJb7obWGFkl4KBahsy6gx5ssEq3GEDpEBK5qjV3VI0%2B%2FHhAd%2BW7U5LmsYTePtlWO9TBH%2Bh775124zrHMWXT39ukQww3Q99jBIKWTzMD9YJvLsG6NfnlCZBpn%2BDg6NiEzEMrbYy7CmPOET2oVcuQ9RSOUBXyPtfB8jTb1XUbI3v2lfQapOFrR63DyjZJkz9idYDG27LraTQxtXKTlvRs27EMcMbyDc%2FkdKYicIqp2uhDIifLZLkuYDd6vYdo4ujF71S43W%2BA3UuLMdKAHgwgramvwY6pgG7L%2Fe%2BxNsClVKnwkdcn%2Fe1iIXjKAmfIRM%2BnN06uDEyCKFG9TnujYnF%2FE7nw3yxWTLjKersg904VNOkniipzOtbXpyO0pDtOjvafvlmefjsUSgJcPtEThfQJVi8l4zOsHH%2FCr7k2df7q8h3uzLLNKJDKbGu%2FlTuOhPgENkTKQvi95ePvSVsdl4YNkQCxPk7%2BlwMf2ROIZwDVLPTKjHBGaPfnvNNmt5P&X-Amz-Signature=d45bcc3afdca091c685b33deea54cd691fa3bc6cc2390c2a0d95301ca993f978&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z476VFPA%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T200804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCagXP4v8NUX5mBQsoKOhUUk80pkO0r%2FJgyAS94Hk8NkQIgQjyxdVVhte4irmnYM7mUZa9prYwU0mXgXHJxmtpCpxwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM77exXNTBH9GI%2F7eSrcA0HQbYBFhLMKALT4qBqFDVpn3om0S1UV6Efw9VyhKvaDu23QmUEkRbzWlrHJbDAgQlMjELLSKwRcY3zJNz6Grn23QMKYmJ7s0YlpNprh2f86gjXvEu4LHNu5opeOL3gbAPQ2WwmmDa9u3ldaMlzEFyiFkNQEWQoyxkpxQ%2BloFpzNTfuYly6FRG3D%2B6VZ%2FOcZWnMujQbqB7ytM79sApYip2kJD%2FIBesP%2BARjkAhjf2G97hin3%2FQaCUgOYX0XA6wbTOsqXZtvIA8JrqIbjLpLnWl06Gg29JVjGH29JI6gX7Y%2BMC3udHPCTVYp0Xl1jt2y5QgNKfKllHAP8V9jxJwpobsm0E50XpZHX5biKJGus8BHY3JfgExwgX15tZ7hCi5Es5xPI9gHjkCfhNCNcmK%2BhBM766Yd%2FVjYEBOtio%2Bc7H2a1xThxaY9GQD9AsVo%2FEqboRMNeRiUHRNtyT3w9INsB3NepEADu30mPqzzv6mejHG0rCBC9Zo%2FGecpLCH18lPl4Lx5ZimYGqh4bMi8bPeXXFXmNjrxL6vpDcKz%2BWT%2B1Fe5O7vrfDH4tSGNO8kEs4U51zuiaHIaPagHLFcepZyTQxz2BgguYCCMDCHLCedN0nSB1vhXIT0ch%2BYFtx0VBMLe2pr8GOqUBJ3XlDlMlL%2BEbXLSHK6uZ9vmW6o24ExySkY%2BlGspYTvnPs5uujDEMacTd4KW9mSexzgwVu2LJ3C2ktABBQCjfNfQQvk4oKL0GkFIv29W18OD3Nik1c9ZSkVhL7Yl5uuEPNPSXdLaNiivupZsIK98YW5gPxTRb740OhuLSqD1w0paExcjyZPollI25wPnl6ACyVznQCFRDS0UhiusGDBW5Gj92Sz8L&X-Amz-Signature=380721aa02268e1b80ff6be41b5aff19a6ac8621473981babe0c36f67e82e518&X-Amz-SignedHeaders=host&x-id=GetObject)

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
