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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBOIEIYN%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIEcFkqM%2FVM37y09fXFb34w8a91Popq%2FyNR4Qgp8WQtXKAiEAtSEfRb%2FkbPnRvL86ZZtSuDXMNJeOICfw9vn4WMowlMcqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC8DzEYp5RFiAmPFBircA8SI2b30nR%2BeS2aG5uIbJJYmkGH6BxOKB4p6y1M3T0GLRjPlRb5ltn%2F2%2FvjtbXjqkQCNbtZ3TnmYpnWZNTZx58%2BnOoUe4oXJDLfzmNPV7AIc5K3GCRUjz7Z3sHE1FwSqKSyt1hqwqIu1UeMZ44yg%2BZS2x5cxrJ7YEZhf9lMUi1ACU8u%2BbFY0OZfMmKsVtrcsBD08SoacpqNZqKLIgz8qNYFVGAwUbTrswX97EnR3YI8rfCQmS7BTKBuoFILTevh%2BUByQ6xkdppDsc9sqgZ9FiqsF9HQZm4adirwRHctsMdY9wsktlVS7uu4kL3O9FGTqmx9vlk8otkC8FRMOMGAUcYPDpciXEdTbQAzonp%2BhJtCSUpBaHZbjIQjSAHmbeRTW0J%2B4waL%2F3pI3tZCqLEUbwjfxVX7sals8KljhYrx5O4u6Nj6pQpqJAOluMEV2NJbtxRzcLeqb%2BNC2BEFZ4%2FNx%2FZKzttEg4dpwxY8Sts6xcDZRErSWxer50653ifqsrNp9bC%2FOcdDLDxNTBH0aA%2FoKxfXhColuHhAzLvJYC5EOVmY55MuP2dR%2FoUvkJkE815rQ9VaV5TLRGblX%2F5Roi%2F%2B%2FVy7KVI88nWUjVx2q5GHKpg3lrgoGed3KTW63SImmMIyv9MEGOqUBW39lodtcBqHuxjnirRJqe1YEyqlJATRF8ZNOuaYesoRFrBwZSAQrL2BVzIPb0EPNGLZ57mymBiKEbP21UqODhuUmLU62jL2E1HtCvJnBqUC%2FfCJDn3Q2cb2OxD77Z7HjrPlBmSiXt6cKEwhLaQm9BtYsIeDqM1Hj09wS%2BooK6ACFq9XA3hm5jLCWZ1Nqi11RQUQdL%2Bctfxz6Gfkacde%2BAjYCDw1a&X-Amz-Signature=013e365cc79f8ccf630c8aca82d49e57f99e0d004dc8a030efa377f48638dfe0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4OBO75A%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIAUj5UkSHaQdLvlRRWAT%2F%2ByfIiRVxu%2FDHFeUI%2BN0c9zeAiBLBjUl1ZOet%2FZ4ZctT4aU9UbEw9MdTeiBMWaRzYyEIrSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ8Ln41NHPeQLtULPKtwDYL4xMMsl01ghmO6k%2BMKxJaZoRInYL5sr7iF4b4etvfMSSfIry3D2wNvqqdAemUMv7KRaPtYlFHzj1apquNNzWsrYyq1bVHjnhU%2BEx2KIYQFSEMZet3fslDoST0TQLCek14pRAQUIwsftbE5WOxZ2FtdTBeRQX9YTC426w2LLoPq6JBBPBW2L1WSUsv6b%2FZq3UBbegdchCAlZ4VzTpRtuyKqAnKntWAA%2BWkuciDa9v1fh8S0bWBk59IcT5TDSzKUSbW5OfyOR%2B7i6MmH%2FoMcdhA9s3pVAOIJf8%2FMDuyS%2FtnyO2pEYS%2Bl85BQoxDZ7cdh7THB0eLfEN7e7qeWc5UGM8rjvLfAkUUtFcVfhiEGBmGpsdJjWftF%2FP0JGnVG3p0O1Kl3DdXLsuyRBmOuwl2eaY0Zh860b9MAfPVUVscnxBq1UYPxpkOQPbFZrn1eU8bL4jRz62Q5t9VEgp9qBCL6KebmUgh61bHbJ6QnaoN%2FumbOgB5WQwjY6b8xASihmTnq7MXhv8scZy092fFLWWxaCP3ekBGu17J0gc9ZqPc5IhXKWt%2B4H7iAZNbQuZIUe%2FI3lGqlbIckSElKfnDYgabcFEh6ac%2FiydJ206fWM7LEPO5T%2BKY8TJGeywWfLz1Ew2q%2F0wQY6pgEhk0AvXin0M9MKdKBO4i62%2FE1fjCREaZ5F404mQ9SggHiXzr6hY%2F3CRv%2BCW0qzK9xfyjB%2FPzYGy5hWe9cYYJ8AQoRbAD81vS5KxJ0EtrPZr9r4QYYS2gSdjGWbJTTOiDa79%2Fy%2BoQNmaBlxjR8T7mYCt3mqxkoM5D5%2B5eQEKzSPLmNFSnUMGTxpildW0RgY%2B%2Fzw47fsyMO%2BRuQpMrFVU%2FArBXocOQ42&X-Amz-Signature=79636d7c52fe8dc4820097d87e70678062abfe019854139600f20086449a256c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
