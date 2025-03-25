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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUL5D6JO%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9BGGEtMVHjXXXjQRSvB%2BsZUg0FAhjq8xuEXcV9GaddwIgbkGvIWj6EcprrZCTqjlD8o1gL8HYPrJR8VgQa56t7kIq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDDwu0TC%2FBjYwbXgMHyrcAy4X8rg6hYxzU%2BZDK0s89uTIl29%2BLt8rmTYjLMOX7W%2FOVi7o7sGR7e9%2B3ZyCrvFuwr%2Fxd94pubdazbFbmi9DDwRTXFDu83i22SYblp8v%2BBa2wz6u7EiDkJh%2FKPjW42Iy1j9rVRyV8eE2V5XFQn7GUU9jnQko1FqFhfjL3dJCz%2BQzswdq4YS0durM2Ba9%2F8b5maJNcUEv2LyiZzdoSruQ4%2F3s%2FF1ZrFAqOjWAGRIxyOuvWAAUpRmW4A2p9H%2BlAoXeK5eDptVuw3dSiTYy%2FLDBQxU1glL1xjhdraUVGagUY8jqmoyNVCWfXJKUHUkRC5%2Bxo%2FPWZaBr38L6m7J86UOu8mdUI3BHjPJn%2Bzz6TJxPpH7vP06RO0iC5FLqbMK1woCAII4izNg5d%2FSLSmTIDF8fDkD7Fb08S8N6sNh%2B3Vrj1l3fuHOCAfvjPamwmEofqnDFGdwI7DfUnlvPQJ%2F4xhMYVi%2BZ07BGntAl2F9GIThMbeYR7mRIeQ%2FX7%2FpHrINx3x8lCed3YLa9arCAo52w7ezQ1dhDqZDypzOpsNTks1j75NnjL2tFigMT7wD15NoAmocijQJHPSskcHr2EA18zfEx2e20%2B5vXLEMxKkVKaGyDLT1Qi6reWnzS7fRq4vGMMIOki78GOqUBPSKucSEiFpFm%2FZP%2BiTcuS8X2vifdRvlKikydycs02RT3uQiT2dXul8SN%2F%2FTrX%2FBALNStfrYFV5Ct1Tu9dLu7oAEJuivpAOYBsnEtsGebtsZtv9bc3Wlg5jNEsD2SnQC0OxY3iF3rrRpozHX7kM0aiikHe1KQcUDaBo%2F2Q%2BDNOd43LBynp48q%2B2FId6eBQJ2WtDKs%2F53vXmV5Ar1JU77c%2FJE%2Bj9fN&X-Amz-Signature=ab5de18a1b5c4a911dbc199ec45ccb4a8901c7beeb92f6861baf6c2099e49565&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUXUZFZV%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaEplNCYqsX%2FJIYxMRrM6j6rrLv1W3%2FRhTMYYEWsVDMQIgSJlxYBYUOiUJwlTDtUwSN1M3NWWrjO3F1zeXZTea0CEq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDELJDuDbgQgfiUI31CrcAwUYfhs0nRAMOrY0pu1EwrBJoTveYbkCTedI18tGMejth7Y%2B5UK6TIC6LEt8XHdh6HoUrEdxWt%2Fx6x%2B%2B%2Fr0hkzUp4T5jwOf3dA1kLKE4S2FrDmPggrFjT5aO3FRvOBvnREgG9ZHLI6HKNwFhqqyulfaddtXUeAnL4MEnFTQK283lwX31WVNBeKuxjT%2Bp6NFH0tfiwcpXd4v1XBR49vFPcOwjR9m5tGoWp2y6%2FFaCpMPuPjfLtWNAHmER4OzdNWxzQVdCDrTEMk6OfdSbF28paQ3TrlnU4nOvkhOgEsmGiIeTaOot57%2F11rntunRYiVYuWUHZEcYvJvcj6i6Ipu2L%2Bshy49L816lQ9xRgFUkExn%2BvzfUMVD%2F4duZfYI94apSc2K41KrGxCqT5%2F%2B2JSFndUSVzL9Xbo62ecGUJulxv5TMgVx3ilBQNFTdZQIuUEK7hk7Llf%2FaYcM%2Bkh8GZukXEYE9GbFJNjwaLjnIx0jSgsIYmA%2Fy%2FVdwfJfaOZ3bT6zL72fWQLqelOrkwUimHAD5%2FThHZA63e2HnBwvNXWNr%2Bt6ssgVr0n91si8%2BTQ0q1lFswGBCF4SBhy5tyZX%2BFbWPOCWYAdk38r173iHmjSKYhQlDzhx%2BdSUFaJgQ%2B3Vl3MJTEi78GOqUBfz78mqnIKWBugNGkpTjl0gEGdPu5SPqh1b8WySIaBjUZQtj6tNv5QczfM1LIgrgNaN4rI5Gl8dl96TZtK02VvHFBauI708OqiMZCS7TOwEaj4nJBHTcTwEpsIscPSc8mPkAI7bGeN59epZPx5sw1cIQV7TEGCrDVcYKeMNOzDzm%2Fb1wgrVe1zOaxD1FptYtEPE8FJboHNlQMmKayJ2uNOi1CUUQH&X-Amz-Signature=6477e7d0bd96543d64ed4d71d778f879876ab6d311ada9965c2cbb706259b60f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
