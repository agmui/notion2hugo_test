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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UJPTFKS%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7YLP3r6GrxmuYZoqpw5qVR3996URq2xrJk%2Be21xlHRAiBEOFoiBy6y8KbokVVi%2FeqSBjilN784yjh%2B7s4SQi4CSSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuIfeJGEPgXlLKBcdKtwDZCNEfsd%2Fr%2BOhn5s5CkCM2Yv3Lda22NOuJOJ1GjDfh5XpR6w%2BkgJOp%2Bn9Tx6efc%2BBgTfJb43R2W2nIQWd5Gb5ZdNbl1%2FxORRDddxEAvskh%2FnshgXAfGq%2BWl6VH%2B9dIAIFMkl74iL%2BCfAxVNvOVUpc%2Bssz6GKPsAtfGr8482X9U3PAMGwc3Sgd7oV2vIpO0aLzctg1JcrsWny8ALq8PhHOp6N2LOPF36LC7S4%2FZhFbqAdpzPprtdjDTe2CKUy0LEMeAJPR0ONJpHv7%2FvC0qGzzi5F9ThyR9XJExZdOBM8pWcavp6gG1lWgPzgJk2pFa6MnnLf5%2FS1uRmF3SaxSl5sVpuVFRAE9uuJmjBaWOGoLXHy8qzSdMEKKy6TPRl0OHeMizwCiiSenc5fZx%2B9eD%2F0j9GVAR1mC1PQZNSaO7KQQveULQMMTHuTkgT8YwkPblstZZ1FwfAx4GMs0isGNIOtiOw3spkOkt%2B5b5nPf5uo7PLiyDvW%2FMcAaWVlGCD0%2B57SAjRGA18IzILYmwbmj%2Bx8dgY8CvK7qEzQvvrtlcTiMN8nUaztvw0oL%2BL0hTyysBMxC6JI6ejPsXCQ1010KmmeCxJaHDtI9ol%2BFctTwQSfrSo4Ei85IWpmt9h8WO%2FYwg7qdvgY6pgFWElxb6%2BCDfKf20O8aB1e6Xyrh%2BsU529Yw3gI6EWvbPypTq7fMnF22e9zJ%2FQMlajLKkwARikElTE2JHsOdg2oUWAY9gMip1FTcDrvA576HL8c%2FVP71yxXQ6VXhIDr%2FehUM7Oz%2FssCMFQ2X9O9oDElo0cvK3b6NrRp6lLEvEGcVty5jzlsIuAwk0jRC1XKodfDxo5jxymzI2Yy%2BL1unzXyB2xWhylLU&X-Amz-Signature=4365468a6f1974243fc036362be164930da2d346615153ca8eebef1914e27ad5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDPM3CGR%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmDKpP71QX2QabF%2FqmuYbRfpFn6nZB4FLh1c4Q2xfs5AiEA3dQ9lgxilPBxw%2BpIxLenwP7ZoRxgm6UuPnVyYCjUXJwqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOa9mvUebawnKMPg7ircA4RaIFbQpUmFM4CFKHYz7Pb63pnmMzwYS2npk4TyWRJKaWBuKg9fTnjDj%2BkNiWAwoAGX%2BDh85UvSRjSIjiYoeP7RslmFE1mhImgCbf94R18%2BnQkTYDD94cZphIpvTP1lgfwXp6xWP3HImyzZKgXmhodIt9t6THA%2BjHEAYiAswg8GXeuKsFsmCebNSZc1VWPUxZNLj2cRJqs9MAu8qhrCja7eIkFwgkPut1RR1RcN6lcOge2KxURIKmlWR0RdQzIqiy%2BoWlyo0gby3w%2FHzca%2FLnIiiQrWyVKIdOUK8YRq%2BwDawEpcxrVZGZ6983O6y%2F8nIEd0PWm%2FM%2F%2BO87abnWDL2yKaPjvCr2NrjMoZE0uqo4ZJ56kwxtYSXY9%2Fdt1tv45ladvRV4TXm1Lm%2BiYnGmv9w7DuQXV1LrczTe%2B3LAHwHLsprdRhjuIEIAplSYH%2F5nljN6vR5OArO2wWrrfFY5GLJYpdGit61RaVBE241qzBMjt90xdln8fan1NMA9DWHxl2d7fGgScj5GMl2D7N92hV8hK1f80w0qYigWDPhlH1ZCVUbcQqWxN8alHJEEbxt5DSAueLqpZgKTSs%2BpD8g4dADR9fbZwFKq89pWrh7IMSezNmduYGBBSgBt3wKWS6MJS6nb4GOqUBMx5YKo%2B7Lxjv%2FxNZWnZOytxzQmbNC02HN825Bw64U8UUzO9gAEXehVSMJpLKuNWpK4qhOz3rEskRFmxMqN0aDlXKR17OyYRBkpMqJBADP8QPkjoOF5l0lhVNf19G9ct0Dq6s2FpncUt399oEtkwrMJqOZ2YhpTfYSL2bzBZPLZ1JGXhDDGtikLz1w0lBEMCs6eQ7Sx5osm%2FHDKxVghsTScTvVA4%2B&X-Amz-Signature=780bbe884bc11ff2bfef0f661ee0629b1be2556c181255f2c5439eea53ed68fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
