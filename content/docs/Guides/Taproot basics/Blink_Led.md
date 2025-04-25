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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6TAYKBJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBVNawZgg8tipSapmq0D4h84%2BlVfZIMk2AWws3GDOHA2AiA6bvaxiZN9Xu%2FHPLy9tnd5zEEi8nIflWVWhdgytPVWLSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMrPFIsv2RVFXZ8dQbKtwDxnmdUJEgMaaiJr1MYMLCq5D8t6XlQvdJOyPw13dc1GwiCVj9p2bhsrobMw9w2cSAXShKGo3Eg9o%2FEFrAQiggNiRAY3bPZUDg%2Ff1jTlzgJQ%2BxOwFsppjGlopfhNI0g6awydqN%2BhKuCN3G05Dt2M9BWUP4kzuHS74x4MY79Cej4QAqQxpJ2y3vd%2Bq1TjLdPTbcdn0GaaY3mT8D1DIyo3LBT1%2BgHyrqsnOTslsb3s5x9tqwqILFY0ihUiwc32McCgD9Bk9t65%2BZURBO%2FU0zC0PkQs8HidDhpMno%2F6AiUgpjCoFX10GFzVl5m6TgP4tX%2B3Q8op%2BgJUfjmgdQKYEe%2FddcNRh0pWqYCmRrrb6Hx3MLjXzFMyONM95I6B7bWjTHegqpJm5UoTj4C0EJD%2FqpcGXRiKpopy4J7LTmmb0oQlj03gGVxN1BdDhForg7TzBLaByFxwRa2pr1AsosoQ1F7k5JlruGmNgpzXABoMTvfJa8gv0zIdTiw677wf1cVJaYjqBJMJC8bH%2F72NPtiNg4uTnNoxx5X%2BUbabQ8cxa%2BjvZvSHowkGiV21GX849U2GEtHOFpLeuqrbizrRQV7gKS3NLljvN2nsibGY9WLeeQqUmGMZuSpcaOSngEcTZJvG8wsMitwAY6pgFV1I9etf2ReXfub%2BzPVIiZYyW46CQI82N3JqYdjc5d0a1axXBPMC8vxwwf3bIC8ouHd9ZK2XBLKEOFLYMV63ofL%2BUW44efG60qQHBzSTBjtmodQKFtUcoprFn65RO9CAxrkDGDpa28UNfF5ge6MuRGN0AieKkJIZA96p%2BXJMO3AGh9VldMSwR90NZHtVOqt20bRh8zzd2Op1v1eK3bOGO7D8GLLS4p&X-Amz-Signature=cebd947f0fe6b6af43dea96a883a03e48df50ae0ec9eec2416dc9fff5ec164bb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VARJUZNM%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt8nc9a4eGr8hbHMB5F%2BmSA52Tt5JvZ%2BJHu3IfjVSLYwIhAKG2YVBpUijH0YKEuSXLhSwF8cX%2Bzs%2Bd%2B%2FaCPY8O8uLLKv8DCCwQABoMNjM3NDIzMTgzODA1IgwfozXjCpXtHr82NiEq3ANWMnExNL9qfckxjqsTRzNUB7Rn3pf4TgOKyxVIKttTeLzVFLlp6Z4Zkpt9o04bSwSY9%2BWs4G%2B2xrjtc619sHUezMh5047squ7cJKXPV6%2Br2cBH0LDA3tm6ML0PMR0Aamw9KiXPNnOyjGV44JRyb05DXAzDgKRj%2BciDjs%2BVjkmDvbS4SM0JFrzF53dz8guEJFj%2B7zDvikQ6rI59x9AvjZtF8VG2QcNzpd4CuHkLxNnWPrUJ2fKXkJ5jjXzbIXCcKMtyBOaFy%2FlaDEAeiUO%2Bn%2F%2FG8TKXRVtZDOHTvus6URb%2FcG3RGgy%2Fnpqwyv%2BSSJnHy86hFvRrAc1540%2F15ndh359wGRNftMtahIDgp4IBewWrE2J8Z17Gu7ZueaqaG7MlvlaI1pW2zM5kmysD%2Fg3ikUPcz9XDFl2lFB2A1ioGrTmFtqMCWhMgabDXwPaP7cQGr2O%2BQO3Nxh9OsGda76yPsvN8wb0e8NOabKWW%2BNJDGK0MAbtRrU%2FXB4%2Fpw9AioeBNgYlMGbQNMtDB%2FdjLsnFxY4v%2BtujRPRHR1Z2ltxwHp7gtqtIjeHYbkstI1OmQppDYpdAi0m5340P1Rm5J0%2Bpm9HDOLT8xeQHvd0yg6cBsz5%2FXvS08yQT3NGAWT0Ie3TDRyK3ABjqkAb5H7eQNdBOpLiGCXVqTgPdukOLAPypO%2FeDcVio4Q7LADYDcHVzUlEgXgcDMCndXFLr4OixPa69FkYAsq46Q%2B8rJnShz0S6Ag%2BOjBIE1l5W4ELza2hXqMq6afeBJUDxRO3g%2BudkewKMJjmAb8IcH9Yfeix6%2B6LBpltsPDwPZ9KKpUlbQIe7%2BEKjOl3fxeA7RNyskdGzRPxhw2wg7%2BUgOm5FYqVY6&X-Amz-Signature=4d1a83894b0e207d3da7a195aaa29f923e8a490cae56daef0f7b3b99405b1a7c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
