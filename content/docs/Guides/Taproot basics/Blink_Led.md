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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDIVDSST%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCIWpPhswUJ8kG5prV1Uef%2B2kdFFGB%2FTKog7sxVwS1LiAIhAOrGw5UtZFrXfqTCfKHPFibk5wTO3WmEF6PaGgW4erGOKv8DCCAQABoMNjM3NDIzMTgzODA1IgzqMfWvSSNtPlGnmgcq3ANqZOnGntHECbp8gcLqC5i%2BsleR8Ukh%2FfsXwUJe%2FUNRR6GxWT%2B0nMPpaziq5WNYhnYxDty4z3TalkfnPkAWGPJ8ekGBY4z0YsSoRqizjV%2FKgC7Xf1RRGHP6X4lkQF9pLNIkqZvaTT4w17OvcO%2F0A1GrVDNq6i3A5vc1jjJZFEsqir9yMYaS9H%2BCmTqXHiIxh%2FklbplQi%2BR1jauF0mgLoA26Ei0djGJERlF%2Bb32ICEAmCF%2BtKdRXfsy1q4LblQKa0wz%2FiOhQzMP9jO6P%2Bd2rz87UCe8PldathVh3H0ySkyGSVIEcFgGwsLic6yL1OWDJmC4J21QRev8xa5owt0IZonjqzEtwH4Xn9%2FOiLtDy%2B6s%2BFg6jH9BS3%2BPhEFXLzIcBHuzPENqzfGhWue7N4PaOKmtqHXGlgOT7liaJ%2Bg1s8WdqIJDEEAgQ3iCDpp8mQKTXsd5PHZ%2Bnc9z3UzSvj%2BDAjDs7%2FbWMcVBAr2r6GWIEq%2FwIZJ1xbBmXRvFJ%2BoNGw6djViyzyXmXgokoSwOseqFLiw5BoP5sopRy%2BFFhgR1y6feyLcrxe%2F4yLafTKKJMc9O01C%2FxX%2F4hy%2F7vplOaNR2yqGeS4CxI6NtHraMC1TWt5NyWgDe9SlIeKaxnUbc%2BoDDT%2BpTIBjqkAaAuuuzH1hv%2BgSAIGqi54gbpdVddAppoR3w2e4yVLXijubt9UiQAfAfF5c1cQJEypoQzubGj3A8Bayz7xWhhz%2BES2aBa4oD6%2F8vY2lBypTGxhIlIEnwaIHSwUHrBC0aSE546kk0OeRRIYs7fIaEWg6j2r1%2FweaKPY8BHXUo3p1YpE3Bu8GhmVYvRaWeCeWtDeLWyA%2FnntQsGTd16JB1Gt6TkV6he&X-Amz-Signature=acce8883b42efdd45895e912212a45f501fa0bef1e5623e8b9af65cf905d3147&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5YBCN72%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIHqN0OfuaF9%2B1dEpSevFTdSaZ%2BJs9n%2BYe9W5D0d9seOjAiEAjcl9F%2FpE7oXYaC6k7W1v1md8A6HIqYqzgWYL4O9u7AEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDPjnTH2EoVr9hrb7ESrcA%2FUuwgFAbkaZS1OEr9pgK1YCbrgGVh1%2BnipGxtPbksLLt5VSekrOL4OSMkhKpjx2BhW0QjvU4eYodIXjzC4YeHMpqN%2Bj6gpVXbJs922%2FjIVZLDmOIHog0AP8Vzc%2BVLQakIXKSvuUuVnPC1D3IfCuPy9mdTFASOv1o9B5vqjk8mQgw2RlcoKI52FEn5IoKR7X7DB%2BN21d6Lczj8TSdPOaL2ezlEXpxEsgEDkLusx6TmaXJRFzIWgGUCGNHoC4ZbN%2BPfoAe4LEUiX%2Bpw%2Bd0AWKWeL0df6tmH9C0vdtXeuYkXtWvyc3GFjWmXdPsp3zcrBuCPcI18W5zpMcZV4cdDHBo4jWHtox2J5OCtQ3cRhOb8moDcOZDSi2cjiMyLBVgLEf4p%2FlVU%2F5LF%2BEUpDDcCufnB8ZTiqEEkDAw%2BJh2UyTmg4wDUzMKFHuNTETCnLnh9VdKjhAfJsv2Yve7CVEcV9yYiHI3HSiu4UqiDOcK7nwHyOJHWPEg%2FY17iiifRHG%2ByU23lxUGFPgaw3wQi%2FNurgESUyGstJ6hl2oOaHoBhFVwg6bgaw7wIfFqilytKVD1xKJgaaDidnJNxP9kIrYLWBT614umiRkliHPRPwm7L46X%2FZ2JpWXJQudfMV22PNRMIT7lMgGOqUBfvLsqXhXToXYszkY109UZt1pSI64pRazfzzVNfHv2DJt4b0bu%2FQO7x4SS4TNk7lLIklO2kG41XV0f%2FkihnfhF2zTHTJc4E6EOMDhct1dnSft%2B0CQh245A3k%2FLVeYFYgw16SrUtbagpNS4sL2fLqYrKG9qsnVJ%2BmvenntD6nhmC4T6OFWKgWy21jqKIMyy1SDsyAY4DkgDrbPbkZr%2B1O3oxf4EG4p&X-Amz-Signature=834a71b86b7b30ab92d059569f73097ec0c411d7576264923397e6688d3214e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
