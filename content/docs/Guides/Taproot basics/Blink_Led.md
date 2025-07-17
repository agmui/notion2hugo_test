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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VOLJOEJ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T121703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCkCw2QOBLPsCSVDHPshzGh8Eduvmy9iMyU78iBoxLwUgIhAKGrnCCmvL4XgBRq2NiZnH4yPMAg6xJw3evfArgya9gMKv8DCHUQABoMNjM3NDIzMTgzODA1Igw6lRGBcPgGRL6xQ0oq3AMRV3RxW77oK6t67wWSL%2B9%2BRoXNd4z00XzDSoN%2BxglFTGXgrUeFuXQ%2BQP4va74m%2FarXcIp%2FLvigF1%2BwN2fr3hdlSGLjWO5XKRSjkWjKzNzOIQlUfs%2BVJfFiz3ZP%2FrPPoqw1z5bQuxNP9DJ1HRYiI1pPpKX427%2BwRvdW796j0bXmrQ%2Bi03UP%2F3NuQN9eMiI77xsXwmgRSdfim0hF6ImrKmXbiLzUBwvrG4AJux7AROocqkWWgA%2BSyBTRP8E1AIbTmttZidj2sl2nzPghA99YnuGHvSJyWUzfhbF3zoBg0W1%2B2cmFqVMXF0JWNh017GuaMbZz8ulfi2SXJZosN6RjaPheKdxuOTIrJ3ruMehST0qlOMr%2FGzzKAWtZeI2zzYDHDXaCDbtVEz0ZuODlVhLwVyXDRd3ifiGmwjNV%2F%2BYq1%2FL5d3FALrtPLGtzk7aaGXC6b3VfK6cGI%2Bnb9oLu6QIsz62K1sU0y6m9B98KlufvUDZVY3kwUpNNT67GlUnsZOmx4%2FTzTsGJ%2F1CgXaaTh5U31%2F76i6InGuGdCITkd80j4pOI3WX1rnGK%2FRIMa843TDHP%2BatwgTR7EfWheLsUPql7de8Pe%2BOGWsGUKo%2BuYe87as5cNAYkRRfj%2FQETbl4JrTC3vOPDBjqkAQe%2BSgTQbD80WrJNXXX8IZNFVYVlayQw2F%2FK4kc%2FF2v%2FYCFoCBFip6oc8Vso4i%2FGKTRQc42Br8URqpDH%2FQEZpLoN56jEMQybPnLFp9eyoYAqajeOzXZ0%2BIo10R20YUOUeMPGIRlP2P%2FJ2gMaRt6J%2Bu3DC30Zj9EeJAk8cgi5OyZg1G6wXvpyFHqbOgSdLBX8%2FuyokB7oDULs%2F1V5ZVNK5sxhA21J&X-Amz-Signature=9465de197f9571de5e881b2f93920873eee4fb95fb6a8f7efcd0af5a49a296f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL7TKOYF%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T121705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQC0oKdDZEVjY2dRhdu9nxCnDpsrDqMnCZ%2B8acGW4YWNXAIgY%2B0vnUiLrmkEKsb5oNdHdBXOax0nY5DhssK2pALine8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDBUxdhlGG6ObLz%2F20CrcA88akCBqOMuWmmqPKOdLCWflyeUGQRkWnTF%2F3d5Q3PpNPCGrYrTBXwtVWe5MkBtXuJj2AJPQl6yO1HNoYsuOmrVYQHtc5YkY6KPyc5B6DY06%2FMy8HwmiavISigGrJqsC3HBefxRBW10ilPraCRP1U79TDstm3gEfvQL2eStXEJk74NCX6xpSl09t9yDxZgIWuCAqMDP8AML2r33c9hFem0ffoQuM9yVLsnMll9GPV8uTsNHzqsxoMRQjIY%2BnI%2F1KXSv%2BlkE8krddf4ne2MzwE3u45%2FhbD01DGOJ3i%2By7MXOvJ%2BeQbiuIUAwlBsf%2Fms9qUnxLt1QXF9c0xwGrUhG25HfF%2F9X0BnaY0kzsvZLwfe1ByatFhgxZX%2FBlbbTeYgPjRgeRqhfTPTun2HY314Sqc61FiPDUymzLUVBRI6%2FTIUR1AGaQ%2FAJDt7RAxFg7uu99qQ%2FZDGHdvkYxPzIDSaUvl7o9ZCcUvvZXyEjuSraZx1UCQ0w81CR%2BoZLGkkFL2xieb2%2BUy%2FFkRH%2FjanRUlbN61ihAapNtrpjCIaWJL9SKs0V79bbv6Q7BH8iDo3iloVESYAGoh2IvZa%2BHUq1%2Fv2MeYrOGgALPFVUb4WW6%2Fe89pQfdR2N9oIbPZozjuOzEMNm848MGOqUBc2B3jwCDomDlb5eo032ZLd6tEQrUr%2F6HYfgRQoDJUDn%2FZ9yC5O0KB%2F7ZYzUOJRTaOurw6Gcf36qq%2BoqVBjSRyq7O4OHWSpnqaQv8qLsOxfeyHOLszQ3cS%2FcdyZLLL796Pxfr%2FW02FPqUzebHZjoKg18XDHGjMIKi5XmcjEvWMdmiKp3XNG4vSltsJSZn6grILE3LGQjuVJNzuIrtyXwSlPAG0Xt9&X-Amz-Signature=4dc25819a2b18ca315f798a1ffcea315a3ac5798b8cb290d49093389c8d167f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
