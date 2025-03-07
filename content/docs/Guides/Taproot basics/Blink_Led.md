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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZTV3WJJ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T100841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGj5zG5bA9HIRPJR68%2BqXfx2qbmIFvuKd7tlvGMQQzDXAiApETeHZNZ%2FP01%2F2wHVH7d3jp92l%2BCc%2FryYTcomSzj15Sr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMfNhx3NWtxmy8SnbEKtwDbVqQNdnbIqDHZAk8UCrA35zcZbZiQaLXZ%2Fr1bmgNPWzVZNx8TGUnpAeCa60xjNSqC6hUNlY3sjkULHfbDUPn4Sb8znbFkF4J90TTpsjYVv3o0A%2BPUt3LHV9C9OUJ%2Fyra%2BcLsBtb272ekZLV66HvE%2Fbhv4wFLcqyGDsiw6sIkeEz8%2FXH7qd1BrBVb65mJ1WAonE3mnEsJJmY5nGg%2Fhl8xEFlrPK8fIF%2FPrA9UnL0ZPb007XNLzcFobnQChAC2c1nrtrQvVFrFbgOgtbvoxTLKtk1sFlmarxiGcs7MIWtSaT%2FNR%2FPj2YHorsnzNYOU%2BiCt1XZxUgLiUz3NdnSC5SSkf85jmmCV3LBb4JeCEZBWhCF%2FPRSLwZ7JG0r8O1X%2BLtQuwAEBTbiQ0LWOERBaX7ysrr5dXQryPSmeBGxNgbf4gAzfCjt2D3Dx3Gjgjn2EleaVKmUfN%2FqF2uBxiILgdHu%2BxApXD5lq2wdcDM3n%2FWgG8JZ%2B8qBrMZvdy22ySNv3jncP00q4kWpQOkntnSb6J%2BgCKMmwKsoh6ONDSym3JVVrEIaRcsJRpAYhFjoBa9mXZAd3U1pE6NV7qkWYx4qtBA0IbaWrZJFY0soFoEYrxxQ0%2BP7vgonbmCiHbU%2BPwg0wzYervgY6pgHK%2BCSiCQV0ldEvI%2FhuPMhFr2Qqrat7ivDugZc6NltnSLKQJV0Vq69z2pKARLKaWrDXK95qUOXmmYCTZLbzMVW4828XjgTUyQvt9LR7FMMz8fahoNd5bkod5e33QzuVNYgJ%2Fmbr6luRRdoNu7hAK2GqNUYjfJEI%2FCO8GbgNfW3C0SGD4k571ljzejYTd8Q6kqRDcM%2Bo4I1jrpBdj9ElRVGS%2BDX0aMz4&X-Amz-Signature=06a25927a286e7e3221c0d91816fa45ec7e91c78028a097813eb2ce5ee62c433&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ2HANRU%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDS4P3Y%2F%2FnAH9EIxEKvVB%2BMP1Kc4M5nCylE2KrnPUXNPAiEAyjVX%2F5MR5UUdoVDEt3BK05Z9YdTrOak0%2FmA76zPLbxwq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDFRG9WqJpg6oDQvm8CrcA3YrufpNb%2FkCRh79UqrCiGKlkPAH8Tf2kP4AhC2o0VuV%2ByhwzuoA%2Bq%2FgKmRYofX3WKdXJsBRsqXchfNlFZT2Oou6aQ%2Bu29rBpuMEQ8KV%2Ft3o1YMtvDy8D2xdMNgYhOcGNa2IHCz4jU8X95UjbVdR%2F2KaPdOLucjQCTFaPNHe0GZiDabfi3wD7ZbuCGfD97mmfohFJeLqDH3zQXh0O%2F5sTQDCG2PZ5%2FbiTnPeCsogxSzrdiG%2FdqkO2FSVgZY1JnBTerYbOrGqC%2FLC%2FxnCbCQbzUSlYInEOQ8dWojEiwDUMweYgx%2FiP0UbM31PafEEV4H6oJuDGjuKHhHH0e7LNlcAi3kAcKmFlHKn7RGLVF82E5DtdBq7OdlMz1DON%2BdLjGt5IMK7YsqJ84mGUTH6J8KJAHTfPys%2BUQMH5prjncFCPJ2SDi7mnFj0ltKswLPdN%2BfKmPm1rbzH%2FTOzd21B0jNq5A9PXVN44id%2F1vIH0GIR6Sa9BLnoXW0MFMRnnLiXRuCWbIbNn8dGTgiRoqwyviDU%2BSua4kmDWlhu70cXsrLBTAoCiNtplZRdc%2BbjUe9fTKJjqVAbyIf3f%2Bbma3uNtYQbpl96PRfUmywMupLT1RXySBhqU5tMt7un0I%2BPyqfDMJSIq74GOqUBOygNgBHPMn3G%2FSeR%2FpL3HnO6Jjo0W3ZPo5QhUCrWi%2FOptJDhLhPBS5dTifAKvFLoumL7iEx8BQZdlHfFGroGt%2FD3IfW2mxzsQ9KbM6VXx5yKHMgP4BGHIQmpxMABfn%2BvQO%2BQA4loRXPJ5cnJ0WdVXKosTFmOFv7Z8lLnZS%2FMA5Cs9IyledQY5cOsUiWBe50F99FRMK%2FYJ%2BbMEWrHdno1mm%2FSmHWn&X-Amz-Signature=568b9b237b26f72bb0f255cc36526b096b8d8a75c0504a4cf45932ff6d878aef&X-Amz-SignedHeaders=host&x-id=GetObject)

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
