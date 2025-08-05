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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUTH3O6I%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIEZcVHdV7rJwQGPxNQqlvDXOtxfcuKIbU3%2FnCvj50F6QAiAtNvY2zY59keMuRKY4t7C%2BvAktePbecXD6jjDesL14%2FCr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMCmC9HsAXGnvPlF47KtwD26RqinI8Wej3FFV0LHlWG8eZx5WNqGHYTLWI1OqhO9lBTbVc7LJGoC6rDxu6pNpuWcQgjftI4L3oKK%2BYW1YzxnPk5JaIEuj%2Bbk1PJwEQ3yE9NwVtIOkgL9rJjMDgsQvzSvAC2VzbH6WUWlbsGPuqyLm9rw%2FYRsEqlSht6d3Zic0wcPbd%2F51KV3Vwv8ABggV9E9CRmKPz4W%2B29D3QLKfK4WOzl0ogdoLOQE2mAMGo2hCl%2BV%2Fa1t%2Bn0mCfHCC0YlzZ9CRhSyOVx4%2FWzOPgYfM5yDRDpwJGATt7%2B930R%2BydAxWNTZTkHpqZCj0%2B5JCcNpqWgJYGz%2BSLlptPrwtAU1iVODJHelP%2Foqhcxt9pwV1MgJ6ehSbgTGObS9Mf1qFRrsWNeCn8QwQR%2FvOIUrk5%2FPLg%2BfKmtpmCMNfhOUGLzwbYOdDBiJKyFc4SYJYDuT6wKAt8kSFXHKdZX%2FgfUA7MbynQba4b8pfEIBH3C37nk4dWp1HzucnxzE%2FrBCi37quI5iS%2ByI19RUsecwxtgs%2Bw7HDUvfJHHiXo64hwx%2FjsaEsCVmWIP1f%2BDvEhjSPrhlKhI1pmDGRkUfIn%2FmI5twhmB3htP3s3vS5geNYrulA0HabN3iR9%2BQjnyImm66wYXkQwjPTExAY6pgHHugBleTUU3ibqsX3tETER7YRwGw8rurD67o06iWimkgns8OsTSgnFAvroyN866%2Fc7%2FHTNWp%2FxO%2Ba6d%2B%2B0Wc2ZEBxpAeKPB8ZsgSTTHAQoF7PMl2fKKz%2FHYGXpCGWnwNnXkB4YkKry43rKk0REASDZTVhrsMCv%2FPWgi9Wmc5h8Dt34ZahR%2FwOwLNopiI0fKc3hZGdutghS1n6vwuOS%2BNfAcIfJ1rkG&X-Amz-Signature=500b519d401bfd16ae1d2491a592bce50f68072170f3e00a36bdf6fd14ea3b24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT4XFOLI%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDJQE%2FAymJ%2BSreoHisQutmBZLu6dEW8OJU4Ij0iv8mphQIhAPyUeReKmwECja9FKOaNXC6xrAb1EVXvM1CKgUKJX5MQKv8DCFAQABoMNjM3NDIzMTgzODA1IgxE3XP3oZ12v90q34sq3AMOaN5GNTLOV%2Bwzt9pC%2F%2BpX79L4xCH36t1PfbyPDy0F5cw4eJxAXNQhfb1X%2Betmna8RiBI4Jm4FwUyQqBBY0wKSHMjQFNUv32kT7VAy6Tkc5FEvueSf%2FuLhItHbOohLXHEuAyEcpO6%2FU7QsbA%2B6X5wIac64B%2F5UNqvRuDus3IyuQ1wwUz2r3auZlk2Q3wiTMNAKuz9pQnUzPh%2B6jvi6pMO92W0rwZddlC4i1PfzGKtDmugV1mvAMiQNRHy%2FLaVjIaBQIJ%2F%2BUSNucJNf8baDQl1wEmEPvr5XURgMXhMvQbk6mwdmquUOrd17rXNoneqe8csBQuSVaVkcN0aehb7xTnf9xR9WHL3iB7XmnDIMYHbBGBt8pjApsphx8LGYjQPz%2B68nWwZC1j1Nb1tW1egw0k2oGO2Mbdy%2Br3%2FaywPHgXvz7NS6rwJxkCTY4WV7pyTeYKhZx53gJhbJM6TTxXpUmkLplRp7j6HXyTkjQsg%2BdopaWoIm%2Beide5LXtiZS31mvkPpUq3rUacAtGIfUA5C44sM4nrWU4IlGPWrP%2B8%2FaaLd9h%2Bc8qbPQnb2RnPfWxv9hMmWoDkNoJXIzFzo1Q%2BQ%2FJ1ZJfhs8JGxU51O18vvHdU%2FG3a2CplZkczS61jeVAjCU9MTEBjqkAXadiCTUjroml4rXXaRu1oAAjov03An9ArKHkAwwFoN0cWy268FG9rBJKym9cSY6oFhuOW2JFHi3gQDOzSX9lDvnc9bix8ySDqqefy4VJQh2LhcoDpU2ObetI36sqLoALpBvh2RseLYZNw73b6Of4bX%2FantkodbxIfiIGhZSjR9I1LG7QeYuxUCSn%2BN6CjaYhcqdubW0%2F8tYhwoZJF%2FNuOi%2ByXfS&X-Amz-Signature=d22797df47e00ff3627a3208e1c149cd1278ae3cbd3dd8e66fd10fa350225c5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
