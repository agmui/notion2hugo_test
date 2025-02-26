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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY6PPQSL%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T170657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCICgZIoFvOAVB82pqLX%2B6rBQuK5%2F2o6VrMbbQHYTSLnzKAiEAqHX7hv9c3kyVHbOtt58Jf%2FX6H4dKTS4I7SqlTYz%2B%2BcIq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDK729tzpW82pR7p6HyrcAwvm%2BvF3EVRiIIhBN7r%2FI89Tm5S8Czzb8bi%2Br5LNcUCtGrOAG%2FZez55a3PtcPk%2FZo9inBGWyGZwulcqX%2BZi55XIj07lGP2rsU5XtypicQk2a7tgPvr7y2%2F179sz7TeUvOzs1O0WwVsKsysId0cB%2B9%2FlgGMqBX0KCJIDZ7270hwncAxq87BAK17Q9wUQwM3xA0XtiYzlk53hfy4ZMs4hQPhKKyuc2%2BwYoPDWZBY94%2BKjK%2F89jz1mIJgduLcbzfO8PLyBVJcR0p%2BBnMSDQY04XfIApZ2ANRFnrDJHv8FzmXOIbRfZSeJSKkBXUlRPnWsNnA7AcL2t3Lw0hyamgfNqvufZZVYehuFbfJDgkO78Aw76ZgquH3FWK7mCIn781al4M%2FmYbaklaaAiPok23NmHh%2BZpY0zLWQV%2F5wsbv7PgV8OB2IVm8m6wdZDA2AkKTtQlJj5CXySXOial4WcqBki%2FNLitDBJ1EyeXHidJEzXkY5kdFnPW3sNY0tR3S5BjUMvZCAYs%2B%2FwPDUopjmzA%2Bh9Epz9oLJ4SXIMHItR9ZLsKuqizaSLlPAEcZShDaCeLY0jsnfhd8JuR8Vjxlju9MYh3xs9ldw9dGUpwKXM4pmKnKSc5mWepCw3QLub42YU%2B9MISI%2FL0GOqUBUQieL1M639fMbM2f7advwarjirjCgCfne8fmnX6YAOrpVz%2F1a79nz0SvcUnHi4BxQ95TR%2F9QQzZ07Xau%2FXFSKN5vgTuQlSoY8c76z9iVMBbcUsw6%2FWqwRvGsXLOXVg99Beg7EuHC%2FkFi239QkC4fJHI%2BqgOIgJhHoSBV5Rud0WwdBlF3IOHtQXidoj9Ue4Mi7CxTROY3H8%2BRiU6rXKA9h9tjYOx%2F&X-Amz-Signature=e45fb9b73d93c7d99f943b62f142a3246180eed1860b98b11828acf0c2860654&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDWR3Q5B%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T170658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQClOMX8mmHkDC744YYgvok042SvoAdB08PRSXwp752ECAIgBwisJCgyDiPJ4PVWk717HjW5J9CpRLIXpX3jIfquM3oq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDAOA1ujOXyxEWe9KTSrcA7mU%2Bmmk%2FSIEZdBN%2FUgeSkiIAyfF4lHHHNJcaskXqXhQB7vQppMMYgJ5hGTFfh1IjlCTlX%2BNM%2FG3hRKIfy%2FjiD8tMlsJ09MKufFbAGnQ0vr7DouuVCJgcwhthyJ5jrd5YwIy5vTQgj9gOrB8sgofXbCflrOIZHpWkrPvCrrOzsHzX7YRFM0ldjN%2B3%2FVGQjc9C6AvAv0oILCG2RNq8GuKBHhGYzI7IrJNs40iFEqiKqOcwYj3haT23cZ5fu81FI8VAHfnpNg8MKXmxeFgh2Wk0gdWEAXHvA65UjZoAOojdPsFHfNgH2Pk1MvqXs61nt16wlTQ5wPy83d1WOupgDhVDVfBLGle4eTr2V5Nep58ra21sEunWvLNZG8127jR40deUQKhIN%2FfFIsjCMWi2QgNLsEgEPIE%2BN%2FkJq96jSaxJMyfx95LcJr0C2Zf751CRdUBdPCN5fOyCbg99YkTvrhROCmy%2BxCeUHPv92d%2BQTLNbqbKD7b6%2FjASx5Zxxuz%2FoqXJXS5u4HhGkiAJUb6ykMHEFzfqaoWrCRfdKu%2BMtMqilt4Xpp0kalwdRDVwMKPmZAa325oQPRK4x0BOwx%2Bq1GMSGqkE35ZcR8XJ3klD2EHS6xg7R0YsSpmqwtWjro30MPuH%2FL0GOqUBW1nW4ccbNi8HaCyWhHE%2Fzhs1XpSNQ9KzFvivph9wJWmLsN3bFTJNzckEn4RJFhCILQxp1oAbyFJIuz7ttszLyErd47cXmvvjWPVtJ80wZW1HoAv4LRq%2BRiNRoARy5nXM%2FPMbdaZHFREYdT9rXCLTXBBRWTyBncXgVQE4bE3V%2BvOz3CYY9lnHaYOxX6bvFIO%2FhPwYZ6a9DjZOZrj9s%2B6AkMirPwKV&X-Amz-Signature=3cdccec79355a964a0b8ce171ecb88b9d24a0831a5ffe9983b65c38c7baa9892&X-Amz-SignedHeaders=host&x-id=GetObject)

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
