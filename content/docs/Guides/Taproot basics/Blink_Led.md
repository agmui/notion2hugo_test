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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJJXJKPK%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T131554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIGaSZw7Weh40PC3BXvL5UhvMDW4guXYeD%2B3STqOgGkzGAiAyKvY0CmzWis6CeMl3FAyOVwx9qOdKneZ5SUbUUN%2FzjSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKPmUnRBmdKQhdV5%2BKtwDO2nb5%2BWj%2B%2BQeZh%2F6Q9NQErFH%2BGeaxN6Z%2Fb4GJ70uXqMaTjqEyrzkTLhf6tBDubHl1pVUcHDY0%2BIbLSaT7f1Cyw%2FBgon6fXYsTrpZjIC%2FVmYm8RabwvPMvugvzAQzjEgTschEfoZDa9BJtv1TEz%2BsUvP4n6NyFzl%2Be%2Fr3gesqaNU%2FRgVBO6NxBDbQ6bWMCwNBcxLwLTw7Aoaz1B7IW%2BilhycEYOuAh5h9c1H0v%2BDYlk1KAQldrB5IcySRsH5m5i01GjyXp32kJXdupIqtAzcdTjD5jL%2Bs2ug0lVLQ6bDIh%2F189BSR7qvxAxWHXLnRUDfW8CaSkaPnEsYoxUIdKqOMXfVGYb%2FBjxWU%2BqWWsYSuraR6rX7pb6VWYfmMobbxVxfWcjr1TyMXOqqRS4UfBxFkvS97rygBScBymEAugCNX7JnUh8tLfq206ikjp8wuOIgIGbpEODEPf5nRz70NJg1GFv8pUVWCDDu3vWClHZ8DhmWi9kusBeSLYvMDx3lDbItex3UvQouzShn4OIYW1RIqSkKPohXw6OZcSDEMBzrjIgs6bAKG3k08te56FDb9RAM8b%2Bm9R1V38uVsP0C0zmTPWdycwPu3yjWuucDLihB6MxBEjR3WCEODjqOTsYMw6tCGvgY6pgEykSUtVbUEhnQJzNg%2FBANk%2BH6cJUqb0kqlX6XI8agOfG0MVrDyxgFIwLWeT64X7JFREKtFZt%2Fqqg3pWy7fJghqiMhDkVZRfwdXZsg4yBZgUXuWvgy%2FdVdEcm52Y%2FzUSE%2Bp9G1mh%2Fz3POBT1YYY2zxhuMv8XasaR1E6Nza%2FvBtFDPs2ljswtYcS0abWeg8LHF4vOdoclufYHbdRdf56pkPhB6LLkrBh&X-Amz-Signature=1881a745a86b325fef46847c73fd443ef457b89e824e85d6a3b1e8cfe22f7484&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466266QXLBZ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T131557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIES54LJNFVZOhFoE8P34KyRiPZo80KmOJf1zV6VEpD8%2BAiB414s1V97qKIEqHT4hDyY2K7n2tyANRCEGFnCCDBOEmyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDnjMS1xlH%2BEsMYA1KtwDzakZWs1sukaRWWQSnZd%2F71284M1Y11JetTI5oV%2Bx21UGm%2BPjo7UE6%2B204IzNWHj2GeQ4KyAINayu4dMy00l94SPFCBtAH25FpoArO%2Bwzjah5i%2BCwgFoQAdf62Lmn8ZvOkwd50MTKOG8HHGWCBB2g6Vi%2Fpchkn7vaS8Nj%2B4AfJ1fxuRbnt2niDjS1XRfALybq7rdskLeKBKucLq6PCrtxQa5Prc2xMdX%2FM7%2FfZkPQR3RTVE5KyHoxDH%2FyaqnFvZZ6vh%2Ff37KVhzP6ZAb%2BKmUFbYgpN%2Fg6HCsfED7QlqRsfJ0xUNffNgVxMaY0QiYAWCuNQ%2BirWOEe0ZYomHaEIf7oci2f9PnVJ2FjEWDfQ1c0kGkoVO8gNFJIWm7K8C7vGfBaMVkrGj9GewyBOprbhS5l5YdvJFMxUlChr1NVzNNcvkb3DsA8BsQOzgfdHFNAKbzChzLkVFgCmX6pGpK%2BQ4aVhhPUS5HgFuD1053ajTOSkyXmTQW8W4sr8%2FGSxnjOPUp6IzJED7d18QyVvrlpe3uRqiwuC%2F9K8yQC6ofYdkCFhNi5OxEKnKvcIeA5ukZicCzB8uj1FrY%2FzPxZEGo1X4T9MnwVJ%2FZMlkgkGNodlcmnZnGfEyTKw23cRv0nrnIwmNCGvgY6pgEVqh%2B1JWxMwkNW1uz0niqKtTXhBWxgJkbCywu3hPDhW7WCqOGZGj2gkkqGVn84yUtprvHXtG8q7q9VB1azPGP41vnMjg75k%2B71sk1VZsCLcc58GlbV4NQt%2FILBRPHjWggiUk32fYPX5vko2kBoKUAVgGYdP%2FUTpo36B37VL7yH79wrf0Kj2DqWng6ZQhX1TYeRc0lgtkTU9i0nCT13LMQX%2BYouoaPE&X-Amz-Signature=df8ffc936e5f2fbb3603977ad230a5ddb2b4462d73242dae9bd5ee004dffa572&X-Amz-SignedHeaders=host&x-id=GetObject)

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
