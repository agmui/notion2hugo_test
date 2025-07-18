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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663QWBOSL%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIDhPrKz4tph4RkJFQVDcBo7F4As%2F3NeF7DWc9GdhhMhrAiA7KiotJZpMJspMsmKJGPKOeSMTQNL6t7QbdNGKsrB1HiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIBIDwXEGv%2BV53QQ1KtwDYxyLrbBg1XIT3PEjHBbQnTjpYhFAwjP4%2FLs2ac%2F0i%2BCRkhaWg68cUdPA3ZLUWo%2BkWjlvcbgzLTYwLz5htfrf2Upj5LdfaRPqVARrVKRPult385qNwuRGkmYbswTUlTbVcTRzLxyngnE69%2Bp44NE2if6PUfMjZB3solVQpjtD0c3VrNNIwJQxssZVlMXDHWhzPhnvpnaq3PrSky%2BtTgAGV1PvBU05Zj29ugkQf7BRE5h8cupk%2Fx2K1dVJUct6IpazXDJ7Z1kQABVvyoioA33Gml8fFFeShcRLFZCeSIVl6qf6lDyhExf%2FHWxdoqXd1sGlz2B3ZpLqOWYoMtiBijLzDFZLEXVj5hOAlGLRWYD1%2BHV5TGqsJ9Zexj7s0xGCzxrowPRLiE%2B%2BoIBAFNz%2BG2vWv%2BTPqaOFPZwH1DCh%2BhaUEVgT%2Fj1XiJYzzpAj943KoJFEmcMSnXbwOl4iVn6YWS3xxVriZE%2FSVAuQFKqBRPkSnNdj%2FfSfl0hafvPsakMitLh5ax5atUGeg1T0A9RRTqR3LJbGGJKnKNDZjEV0LAzsQlO0X%2BzpnGH3iJc%2FyPCbop5EbziTa12ReW7C0khNalLURUDbAt4lAaVqFK7wnCeNgiIuO0BdGEfIoowzSQQwlM%2FowwY6pgFh5%2FFvChjx6M9WgyK7PlX4YNsDvUcyCLQqhdvIMErykWkzUO9MiaBVJmKYkX14RS8xM6lVIm2N97Y98jvHn0vNOU9xh4aP2W03P3nfUj7IS0R6XJl8DNVnnKG7%2FpxRt5NoKsS2i0xDXfC4S4bSRnuobdoM25OKLfgiuqtYawDnC6BtqPiAC7PyBZby2n8%2F5D0Wp6m7OBgs9t7NZ97T0MRV19OccNnq&X-Amz-Signature=8d31f8e236d20bb5fdb7f871ae0361a75395285ae459cdca5409e156658ff80c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQKP54F7%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDVNpw4aia8B%2Bkik3FSdvZ%2BtlzF7pC311ybtvyJkWZBXAIgDhlUgbkH3YCFS2McosyMDnwWteS6Es8ya5j4xfiONccqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAD08xDQnj60yWhd4ircA6%2BL3RB4S10TSnL6Cl%2BcF4usDGGhG8%2FiUWedrzpmiu5cxcV6Qt0q3fPCA%2FDgzbEKVk9mTxgTMFLIuzBivBr8gFPL5GrYt6wS2ntsXpcYCj3L2kNTH%2FJ9nJ%2B0G2wq%2FKFFCXaO9w%2FrG2SupB0P2tkSLg%2FlubX8cQ9YVLMv0Z9KnrYEe9u%2F0YMZIsNWk6qQ9kFkeycFvKjY8a158kjrwYpaP6%2FDM4WDDbCD%2B9AF94VGUOUA5C33qVueoG1o%2FYLs2sj1dyNwcwabSIAvC8FvpSlI3ScWvauz4u6mm53UuvbW4yCOwgAVPNpw609YK%2BGseCE%2BcM8m96tFE8G8CLQCPgAxToE5FF8%2Fbk89GM3EHIXtOggP0K%2FmRVKTkqdLyul5swfpwFj2mD7v3QrwiOPB1HPlkHFofmM1xUY0FhYG0IWkS7XHSWXBpwM59LQFRSkzvWvOUud4UKox5pgreYzl%2Btapnh5RYlo%2F9bUeI8yI%2FltndSbZPin%2BQ7GTdvIVwpRPeG%2B7Z0mPp7xd5AYjHgeK8EZPYPtPrqT7yyzw3vD0Qbl6PCa7lP9xUOenhjzpRTw%2BlbmqMuLSnKWqzqOKCiBW1Ir56C86oGrBZG6rlMsZB%2BYr%2FrlaQV0n7UtQ5tf657nHMJnQ6MMGOqUBIZH%2FDeoOeYVPqL5m3%2FJi%2BP%2FK2MkF3TSTPF2ihQSC41Bf30nXOIwKI1X7Bk%2F2a1URcu5mtV%2BLxdbnZxG9yTBV%2FjCT6Fx%2F5OgbDDwmSzSIFKmwbCe7CvSWKRDKQ3ZPo3kTPA9FyW4eyNgc2MtsHk%2Be3nckFyV6t3X%2BkDJ9%2BzsvbvKTU3w7qP7dyGA11I5nhfdBCWux7An0MElOuV9mdUvdNgPDs0XI&X-Amz-Signature=f526823847f5503e4c6651871fdbc8c4c261d5ab2f7063c32786a72e669832b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
