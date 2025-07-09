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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BWXWZRG%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T034614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUYTsG0s5S4I3Km3Kt72G1q1LJgHoHcjIMPAuQm0pecwIhAJSWJBKoJVwO4pOVeFxmpCUaGvKt4Cv1g3mgQqZUsrB7KogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxpmw%2BtHNoV%2FwR6Hm8q3APjSFP8dqV5%2FKF1tT0eof32ZBSyZdhP9gcOJbLogwbUVTyGMfDW2WRH4QOyWek62r%2FhpQ%2FblDpNZXKtVm7C7zjC9FtcCqDBHCWyl0%2F%2FwcUVdl%2Bl3zYvfOVyQZCfckWvWh%2Bg1Zvw2%2Fe42A%2FSbNtLeHFQ3hu5xYn4foMPBqPHOAfSEQvwTlo1D4FCpQmIl9Y4%2FSZQdxUNsNLvxJeF1C7jlaKmD0itcHlXgmp%2Fjei1g95R6QEIIYflGPkH258Gh3TWOut2wZWlc6yV3NsGz44srtshih0aqR5zYxpYzMs42twWH5HHP4V%2BFXSCOoxpmcnR80PmubMTB7FG4JapXuH%2B7mhz2pevWxpzVV3DyR4wuEQo1QHOw49cr%2FUvlCeH0qfdpWWQJEi9F0itP2842Y5Sl4BFNlXekd36kg9iZiX5kuLcf1wL%2BM7oGZ97Hn67RB6qdm7Iym8H2PkQfmqybie7Xx3RYvn%2BUjbeDWqpp3CCsm8A1oFJfUGdq6coDfq0jpTyZ0tyLxWHCGPYQRzAmM%2FpvpEfKtH5GWYre2Vsyvgd%2Fjm91aDzD27ZImakCmPqcy4cxrmNJy2HlLvUeQLLW7IpLpocPL%2FgFZAyJKAqnsuy0qqrh1OxCM4vdD20qZrp7DCwyrfDBjqkAXHPNZX16fyltMXpPcTy%2FKMHYY87isLSHSP%2BWDWcQztHOh%2BD5p61qqrOzxCckkJ5O92tMnJ5y9%2B6hXI4%2BWB6om7XmvmATJvzxLpWOAS8o14QrltBflnU0YMt0jeoxwrV%2FpDVTF80HkYp5AilwAFGt8rzLe2Vjk%2B1Hm8P%2BA1CS7mpaXSAOTTXDq%2BSm38nC55WdO1D9aDQ7yzCYjcRWN8nK5GuXsUg&X-Amz-Signature=09ef873c7e9506abaa07fdd209565bb42b1ec23b3dad92abc74b30012dc72ba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LJAJJ77%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T034614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmzLnWYUE5mmB2Oc7tMYHoQL1H4jiWMRazZd0dlRoEdAIhAOV%2BdQtL1aC5rLimF5IzyHG5imRWKUPsFfbfWtQ0EP8NKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOJjKjZYCQWXPZB38q3APgqlfTKZGoO6h9LY6bnP7DQ660fARHJVOsHA5CPK0u28NeaRAEeFNjJai7NdyiPCF6YTZy79Ta%2FLoKqWmKCdof7pcc0t%2FjvRrRSfykAacqFLdSx3LqMiJ7J7Sc3KDTyEwS%2Fg3%2FGvH1rMG8ljiTO%2Fd7FJgttd8yoiOvKktdp%2BATqY6agHuPH%2Fe0FfePz45a5QZJTa5r8hQh3%2BRGJyu5023Oj3tgm3%2BQnH3foxntBRbBhsEzPftESl4VNE02iNuxCdwVdvVLh8k4jMThMy%2BGifR2PMRAMNduy0eN%2FKWXuLvls34QpG%2FR1Vpj1LlI9zzvemCVaq2uDiHNNF1yw4sTYNXafuG73lETt70V2ZyMBjZ5n%2B9OjRyddpT6ePJpRJiTCgOo4z15pwWnoFiYTuE8bwZJkrfJsq5YSdGWoiJHtSBwlbG0bNBcuoG%2B4gpG4HyBB4M8dxzLQBsJ70zkF%2BB1a%2FJPnda8OlarSTfClv7ycC%2BLSqYUVXlZ%2FA9n8HzgXim50WsnOnfIVpkdK89dTKcAp6E6cH3z2hcn53MDmEWwYzspcACzE9i%2B%2BnmVuBoRmE5EzlWFjsedjmIZDQnElnEo9UyPGeuj6EYy34uCl%2F6uIt7xh14F8guBJaiUBw%2B3%2FTDLyrfDBjqkAUnzOsLDHPzvJ0ddJvfzpP213mSeZYXNCVgE21ecSrw2shd2nnKGcyznVQzIfnGjwvUzNO6aBPG0D9D78Yn9nl10WyjmdTlSQgXbwR34ocqbBG%2FsmDgR4nXSkS8%2FhUAszPj7hoJK11gMjtS%2B98ZPeTtU07YaEsTygFSbCG6tMJfV7g3Vo5LVj4Z8%2FkC6Cgda2Tm25eivgND3M%2FiFWhzU7uqfEEoy&X-Amz-Signature=fc23463c6112b4c031ecf9fc669b709e27fec671c7368283b1bac04441a145c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
