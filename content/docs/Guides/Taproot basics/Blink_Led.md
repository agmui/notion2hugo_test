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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG76U5QQ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIBuAJmxEje9Ga9tGdyYaAGhsBOf91JhjBsL9fIQeVN9oAiAUt%2F9GIcT4mXso8aP9IPOhaHngYb5PN7EGpfeiw4TxNyr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMaNWkxhuWuKPbDDROKtwDB0suZuf2zp64rbd2NxF4YFedSzv4lzszlVGJzKvhihExXMejOfshZuFZHNf7B163sul7TcaJ%2BV40oOUC1GE1jFwSidBg2tX%2B9iy169mfdY5C%2FAxdB8Liq5pD%2BvJWhhHwrmEWG0y601kBBpVqL%2FYbvK%2BwVSgtQnfgk20k5NPhddrLLemJ%2FPCoKgcO59JpHVtfW9OAfOofSH4cVlVi53m62WNI7GhdXKX8IfElm%2Ba9QDyfxdnk3ZaPjI1veqG9s8UFah4bcmi6T4WR2C8uo6Fx24s1ICjs1b%2ByN7n3NxcpXLkf9Tx84yRrISPmBkC%2F6oJv2aKb%2FE5S11QZtJgcsxxVgfE44TVGjEAfKTpfeRMK94gSFETguycCiA5H5ZruiVTFZqVp8GsbVOuirRiRCtVDoDaWITTwTfSYzz%2FFSYk%2Bvpy2EfU%2Bg0BqJt44ihAh%2Bt%2Bo17l%2BeU9dq5fPiVlcSOQduym6bMDtspJrmI%2FQEcCARKO3t2xyQDX30HoE4GO6WFHPI6X4GperZeyMVipyVbOJjgL8XC1gvqc7TawzO77dtQKrx4BMiDh%2BWQ54KRwrYuephN16P8JpxUiomLdgC2iNSDYuDHCalTtqXKnlbrdA5PEsJLWrDoh%2BMsDKZ%2Bkwn5uVvQY6pgG7GgXqNNoa2p%2FDbWGLxKjuyrxdJxwl3QfS4dh0JNBjcLRB3U3J5zSVHuEjHeXO1%2FLgVflT1zxfNpPOgloldn7Z59wBcrQeS7h51nX1NxO6lhhb%2BnnV%2FTMoXxJ9j%2FC8OFNAcIIj8959Wgn3oV1iZ6GWBdL9Ym6qWHkLhhqEKrQrR7dIgz3b9cr9VY%2BQx5v7ikagCnpg0mLeupQ38cVFrA%2FLVjudjcZD&X-Amz-Signature=956bb6ceeb1104aecc3559b87a25bdad5168af43a9ae45d29057c76e06e0f736&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZC5PQAS%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCl8vuQKzh9WLIIEwPPyZiYrYdAPvuTNuIykZ7q7CXmfAIgATIWDi1WDXyHS%2BqSZotqt6Wz4uHHQC3HleqirS%2FMpecq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDN0PNuSsGMLvsZyadCrcA4ynUzdPC2MFzwbGSksmZZDgyCXgID4n%2FM7mFkrO%2BmOC9d27zMn9BbJj0dUEbC7r5CSddF%2FNwXfB0NjRbf2WoifRHQfbG8oJQQfuarqZr6Wr7huZPuyn6kjbBEs12zzB1p3Q%2FPyXU2qihVpRMVXvNjHD8TR%2BWY%2FouCbLdtuhTMOedGKpDhzX0RsYlAX5XErIh5I3hrmo6R7DDzUCnx1uQ1msRDNhfkHx6%2BDcDnMUcfIHOylEpMqsKFpWNvF7PWrhNf3mDtu8NkDYBEuj3bTDH0nAwkJkELdhbTZ2FnbBvoN6maw8gPf6siyB5s7IIQeSqV7pBGuA43mkSMEgTJnSTKg3NTYG5MkeEIreJcxrozZv8ZUxYxuGK3HpdLHU7csqQJj7ZvCeSYKFP5vIttUVRVduTYpIvsQVQKbKrrApxXfIt%2FtD0BzLd5ngxRndOdHKkbmhm4s999%2BQShA6msGlhzl15OBP3yTYlCgj%2Bgz6JXfuDElp1beBeRxnJ4ylhZuJdhu6S7sk2DtY8DGo6Mov%2BQ5E256tPxLnhD7iAe2lGgwD%2BAA1%2Bre2d3sEBr%2B5cJ0hsfgkOg2lo1IS3xp%2BQh2yihEcCSM9IPOt%2BCkzNqiIYHkhxDDplqCzIemhPCA1MOablb0GOqUBSTFTMPg04ViXBN9EmX0sLvas944cTjJAts9Ywp953A0aB%2FC0OvxQ5qzW%2FKsSmfd5VTdpKwS1Ry3LW7pw80tq7rmeyOpLX1nJVsJlftnkG%2Beg%2BAy6T0Rysh2w2XDz84nXsJN054f20RzSJKpokR6raA5TLLXhYhNsTiiDtjI30fThhubnDvryJBX64sVt%2BRJToIDgi%2Fm1VJ291IzGFkeCVZ8N4Pw8&X-Amz-Signature=2cf0298e9e603b809648afde5a79b872a16b8427544ba2b320ace0ee50330994&X-Amz-SignedHeaders=host&x-id=GetObject)

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
