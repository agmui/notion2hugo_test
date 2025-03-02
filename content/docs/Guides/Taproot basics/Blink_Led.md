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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE3DFIPU%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T080924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICxEucasZy8ky3a6GskvbK1%2F5TiH6LypnmEbffrKlr2tAiEA6qW85KEBScPF8z0FmXwOu5%2FmRb4gPeUWnxHHrmbVWswqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqEoFwD2FirdJcYOyrcA6SI%2Fr2yCkTZAveuvbU%2F6F0uLw8qGivwOzGRSSge92F6QWuQOWE1rLH2UZMrz1V38H%2Bsdt%2BSJNYjUSNlRcgWZzdUhxAqWa3AEFar7TwbQIzbQ%2F9WKYuF7W%2BivX53lCSjlxNoYyZcGWPDtT81f%2FXz2xJuvJH%2B8i6VyK0sTBzzTh6YoX4YsfvlmdHHMGLfq74tOSIMSNyt6iqoDFa2GMu7ZMl37R6dX5PwecxPPQdbfKG7VCscbIwWgS9kxnxvVXhncXthyXLqKUoNPph4kf5nNljQjmLFkZzEfB24F14dZQL3UAKelab0Czdz07jwoUmHDiBFTBqqz%2BxlKLwe1D2SpPOm7LP%2F17w8fYB5b5%2B%2BW%2Bk6tKKdlVUUfHElyKUpF8rEaBBtkcqVyI65AXZ7s4foKL0Gk7hkBI9vpDYu4N%2FQpJnhsjOa2EPo9W8ScXTzxD62Ktzc0ricseDCwj2CmQNtupfyvqTQeCQdibm5JRJ%2BV5wahIv3UkmayGUQfkVYLfU5sTwoZoevKWba4t%2BFR8%2FFM2Pe5JFmx%2Bi10g0D9%2BHSTlePrCqA%2BHXilwfBCDIr4PqlRsR5vaDgoKgWgW3hrG916zH1hIumYodXJtybglut6btELlCWqza2TNgXGb6dMN7Xj74GOqUBSUG5%2BG1%2BTuzddo9XatCs%2FUvHtzN6afmsNKYOmXOuuascISU5%2BF2Ep303P9U08O278p30YOfCl7rvcWqGF%2BO5GxpVAv2DkyorzKsRzb2mMW8StmNAFU8BefBXoNz%2BfVXaetZMBTx9fE3w8qVKf2jpuWvXCYeHTN7IjpFd%2FrQH0NcjSBR6mTOdXBcVlbqhSmfjYZJu2AeQi4%2BPhmfB%2FmHW%2BrHYEUFW&X-Amz-Signature=1690239a83745bd86539bdd4d7885d7b4942d61156762320f8e82e8111df0acd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOSDLUIO%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T080924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDEKQvqAHEB9r9oOynjwmL%2FAZ7QhZ97FEc4x9oO%2Fq2KqQIgUwrbrtJq2%2BI2bWg7HvB%2B0bsVMglNFifD0wOLsxsD0iMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9FQ3wP1TYGc7H%2FMircA03l2Uw8NisPMzcv2v9pOnCnOxnn6zkNPqSB34LHUVOtxksR74rpifDgaf%2BY53CsolpJFf86M5A4YkMQOtrtXeYMH0MjRZOOnUE4M0DiVry8uAuebqDsXS1sE98Pb76XXUUEJ4Nkb4ixIsVT7v9hEXcwiqrPyhDpkYdS569kR3oIaMyenbRwdk2XDpK3I5ONBgZHo1AcxUQdUenAub%2BpnjYDHRzof0ZKae0NaCUySVANt2LpXRxaPnr06HRQYZov2d85WdGEgBCLKfOKBcbyraTX%2B4KJ%2BWs6NPdNURxywj6cGdXlYPyQBc8aGuW0fVPCXLAWlqEgmUyPCwxAtg9JQRg4F3hmb0YwiMZsLo2cpjFwsrD01uAUulyGxHwwyJefN4JtlBYtaYaRB4O3pbC2UoZft6CxLsnTm86em0dwqakgQJenvJk0GE1282egjERJq5uF776XHyz1sDTuE%2FhGW%2BGoHhQhKaT%2BCyto6Uvup%2B5D3ZuYw4fL9C5jvpPt%2F3sRQGNOu5QFfrBF1o8slgk%2BojGbRBU95OitNY8s7I4MK9lTdCJCjE%2B%2FNEA0htAq%2BR3LAdUlE2ebbSJRg%2FnlxVTj4dmsTy%2B439wdKCkeimhkbwljXYqSFl%2BWZRsakCCQMMDXj74GOqUBdut9rT3m9AKI8GljqaKMnH3erj7%2BXUcRdMAXnOvLa5gPhLX3xbdTwmoI1AefvowWUbM%2Bq16PUBXS3gh8fpysHvlxNZWRwv118Pv%2FCmt9c4evBrnuMZmX8tjZdBxTwEDgZc6s9tf8FKvqeo5qfHhV%2Fb749MdeqOMJ8qtg7mpjTo7vnbh6SFcINgYy14EvZR3v2Zar%2B0%2B98kVj%2FhGxbS%2BP7rp3Pgto&X-Amz-Signature=13a56c677ee0673c49d415a211c31a1b1dd4a935d2c65145e1f3d6258752d0c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
