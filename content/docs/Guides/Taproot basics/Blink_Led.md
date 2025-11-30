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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCP2OUG4%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIE2MkzRex8ajdJJUrkw357XdiN85p95vo1V3HOt1uFfUAiEA0E53iSwakD%2F6NPg%2FQxqrExzAxaVZ6%2BahiTNWN5hoZkAqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHf5l7IwAFtbGBaFMyrcA0UckGVNDiNDjD00tQI%2Bfm69mFPYP5cUXJ9anDorv0LzcZ5nQQydYr%2FzjnScoQq4WK71AOYePwtpURRYW1UqFCzpDRYqKiIPfmFadEu8T%2FmTxJVodyobaxD0M9tNPVNom1N34YfqRhk4g1LXFxnA4ussguWCtorCXyLzZiziyWSsTMEI%2FRJhEoM0n%2FB6k7lUy%2FMPA2GSMN9AdwikDeqgMLRxY%2BJREoCP7z%2BRTZ84Cnq3xVoWCK%2FD5yLZRVfA0m%2F72ZMuICzlaO2mXlv8UL65LRxrW7RjbY2zO%2BjF4u1P3AHvEg3hAU39lG9Uj5Zq2RXbzbpXRHpEf6a6X52SsmR9r%2BGuyDOP6I0wsuFBKtlDBPXSX6lYNcrxdBdccquxK%2F0eXdks11xz3Rql6V1nNtV2ekfhIMwX48rJPr53nNqrObSZvKnUyj%2FJ11zscsf3PU%2FMBC8Y0OJyTpudTuVWhRrEWk6IH5O1VEFCTWHFSrOOHIf8hcV%2F3VK5dYoQ3g%2F5zw7RRPcVRorDjI25c4MhXu7XBLi4t4OHO6BTmloBQeiL%2FKeJkRwcCJq6Qp9Y%2BKJKtUeJjVmSM8RzQa68CRzM6xVTN%2BNu6oFoHeYz6NdEUyCQ3Ww0eFGF9wkOSCn6YqBKMMLOrckGOqUBjh%2FVbKkESQBMJiZw5LO%2BD4kWyFknW8Wby2TOplVLdX7aTLU%2FOgvTdfO2GRGlh6d9Q5sKnMTDuAxO9helcATEH4upTmFBhbdb8WAwxFjRj1PzRP4ryN1S57Xt2hpkidq1mIX2AUGXokkSv2a53myVByDAUhbWem%2Byh1IA0KBJ0f1D9I13uE%2FC7cC12Pv20NX7EAjqEvKFiopUT3WjJyCuQorB3iC9&X-Amz-Signature=fd06112d29f503bfd7ef09362e5dd802a8850aa76b473468c67bfa40dc81565f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4UAR7Q2%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCeDgtxPzhUgDVyBJ69cZQFzqLgwhst%2Bq0CnhRlUJZOywIgcO2jMBWoKXxuY6KFsV2GiWLv2D4gPL3sv5FwMHn8wlAqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKd%2FUnRVRD3QxrLUoyrcA082IXHBMy3W4iLP3r08X4BZRv2bTyV4JfMzqRAP3rBs91gYwQd2oPQvmXE3tPbEv3qmLuKllcaANmB9JXVoW12wVHNXlKqAyW4usUkn0DkE78DZ2vngUebLxs61HNVxF0yD6lktknKX93MKsxahceLEwEeApbXukbh8jaA4rLSIfufTeS86npzM%2Bb6tnIo%2FpTel%2FjK%2B5rF1xmw4JotXvmVbV1TQeBLx3JhbVBg7b5dv5ppkjZTdHeE9RQy7QheSiPpOYhgMu9FjgANkO8h4rYsjtMF9CWegYvObLD0k6yAArV5QJPEnfo8eM9Kv4TQQL%2FhfXObXh71sL%2BZOJ7M3Dv%2FW2MPJAC9LUWO42GTJ%2Fk7HIkcfvowcYNFIs5AI0yvfC%2F5rBjsUf9rEi9XeC3dwXI%2FIBymHX%2BlEuo1aP0IpqHlVeivzISSm4MzJYQctoaYgXbQWT7TdDPMo4gppEvmmJ8flHadWogmqXPXvmTVwKtqldBoQV6Ww94c6GYFgbaTCmMQVLHW%2FnHo8pgk9ky284OgSnSOokFOgll9uoY3H86Tf6jObkPSldLXNhJzmQ7WsV8N8f9enWy3b013b0VbjkZ0wjCbyddvODv7pMOmrDFpOij3Y2zu3wkVhPFwXMNbLrckGOqUBGFBjsNj4WtuMW%2FkPOS%2BgvO0vWVQ8I3kbUrQzthEEqlN%2BBxJok39Dn%2BKXrpnhgxP5O2MW3oAxBW7fhpTMMm8ftDBBiDjLv9dE5pNLgGmgPuY%2BBiW2M%2FoFHtlLB5VSvIvImplJf0H0yWBPq%2FO2QmnsbVXlhEPs2glmpBACUBHaNHftS9AkRfmOWNYeVXr7yLLWP5YiEmryYndFcxAdNYQutZ8n1wiW&X-Amz-Signature=b15324a0738e2fc509da52446f1fd8f6dc8cc70ff8742b0bafe89938c9b5b825&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
