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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXQMI3AB%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T150740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIGWXpNGpncFQWkyBc6OIUXDDm27lxSA%2BDZUCgfI34W%2BQAiA%2FpKucfPgKD519Onc%2FlCqFg%2BVLkfJEz9oyt%2B1WWV7LzSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM1SY6OIWUYfOYDy%2BhKtwDaFg06bi%2BXo5CW04NgixqUCW%2BPkx5wfqMOvuguZFy9lNOmkgZVLgLVPrQ9Z1ESoT7UcexNWcf5Fvopw0%2F%2F4iZu8kuoMLlzYblaYbOtGKgQloh8Kwvx13x%2FjD%2FbXnRF6ucqKXmXNA%2B3JN%2B%2BGOs7xWYDJnstzOBH026DbRAD02%2FUnjF6b9Uei%2FhtlS8ZpJGjhdo3yAfusKJRJ%2FdWDOsyvx0tPLj5419n6%2FBc1%2BRRZC1SY7ZeksB%2BTB4m%2BazEzIw35tsPWBSGkdE69Cl8bS57QdySCfqa69CuLXemri1N%2Bbvi2cDGl6hALur%2FUrV00k2XzOMZMxQGc9bdLvbi3pAT9bDOKnuLtQiq7mDEsUx%2Fj7cY8jDguH3Jb562P1BayjrsZ%2BsU0lDn1e09sLjgaLrZoOxOmeuUzrliEdvZMfrF7Kq5mrGWN2fXJdHBCuoADcuzxYfPo%2FX2WkTljd%2BCdyTDp2Ij4UZpyGMhbS0eOltPcwkL8b1n%2BRkAsmDlO1pEYlcMhifDh89L1zGnaxWli2LAYdV4IslsCf%2F4TL55XJXyQxg4AAzrVAdWTlcOlRg3TpXj7%2BehWuGhT9FGrG%2FEaV9V%2FI0l1IC5K2p%2FyC6kubTKv1cLf68bHp1omamQZZZpxow%2B%2Bm8vQY6pgFraoG8R9eg%2BGYIZYoX90%2F8dHJDcx3OSKrnB1eU%2FAImwoUbX6reRlDYpNiaB0q%2Bjckddpo1NG8AYfOlKTQ2V9Jy95iCBEd1maxeb6lBlRSnRQE5cUOZvKJ2gzBHJEjMKAzwGstMaJeY72%2BRYTdAFqadpTZksNorNlIYFrIZizYDMIqexQgp6HOJ6LcWGk73Ww%2Bud8OWKFwKbRy33OWvYvfIs3N4qIRw&X-Amz-Signature=b0d2c46244cd44f793a1b02ee587c954ffd535efc9f694524f0931f16d9ff5be&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBWIAQ3D%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T150741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDNojJbMf%2Bv9mIi4pZP4Xj23T33hzF7cPpbHw7XiWpARgIhAOVTRdw%2F3mt%2BkwtAWloo%2BBjb7vTFs2MizHXWTXwXEc03Kv8DCC0QABoMNjM3NDIzMTgzODA1IgwOUoNS6tWBK1Rr1XMq3ANqtD7SaaVK2lb1iwC5z9x9grKzMPw%2FA0ZWnuXvT8Xhr7k%2FjMoIlsXxrlFHJFsnt30fA0f%2B9F%2FdJFmcnA99ZqpNBgslLPA%2B4HC5wthiIvcg3KZZvOPDpYd7%2BbgfQPx7uvtaWynJlCS%2BQhlNDaAnCX4wRLeiBFKg0JTCuecnjMkS4dg21neOcwZJDe5OSXTkpRKSOqBNHw8XgxXpFzuUa0y%2FAgtF9roqixUHWYhUrMh5g8lEDP%2BcOGKM7giee%2FldfEcsxS4QMOrAw9oytmsYUOYty4OWCgDReYErYPFkdo25n%2BwX%2Fol%2FJo3eu8DMwKW8nf3OK62q%2BvtmddMmuDzGNVEwjNCuU8mD9nk6fxXJM5EnqAV13d5m9Ihw5rgclOTben4cSdAXQM%2FJkfGrREApNOqlrvGDdsgT2FihyHlwq%2FcGImY6ZdiqJ0t%2BQJhIo67HSXfrcKtBYWLiQSS5HplrDAO3zhAxkLIL0CggF02x1GARjr72H2%2B%2FRdxbwNdXljhmet%2B8P4YWyq9gCxiGmQAYTIHHrRrjVL%2FMA%2BT0YQ6Zi3vLEKErGMATYrHHfRva7J14prjPQsihAubuFfh6h5OBR4rj%2F0%2FzFv0mC%2FpPJg5pUbzH2O0iK2AvLUGqz6DYcDDx6ry9BjqkAUTSzMzUMPHFGdhIQi8TTJX4bf%2B2R90kgph1gHaORwAOKRo9aiDH6oqcVNlDcNSaxHrkTQqm%2B0zkrRBexEYL%2F9Ji0JX6bcs%2BqeF7CGfktlJApZBc5lgOxU5uGTKruGBDvQSHBxFj%2BnTuhsCJYx7KXX4cTqpsRNzauz1Uzt%2Fe0c9cI92EIh81aTqIsv7ufzqxSZVRNDLubWri8kRJAhOBKMM%2BQV%2FQ&X-Amz-Signature=cdb61dd9442510209d51eb37ee067de6710424da0d8bb5b9e18e6197f09e6f26&X-Amz-SignedHeaders=host&x-id=GetObject)

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
