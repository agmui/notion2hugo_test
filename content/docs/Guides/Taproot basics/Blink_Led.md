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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOHEDG3O%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T181114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX0c9CdKgP34vmnUcKc%2F8%2FKuBYiYsAYwyV7oo9iief7wIgCkzETVMKGW9kZ9RQdxgyoxSHH9GAnzdHNvqEaIxWR%2Fkq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDKg%2BGKwl%2FDSz8A3KOCrcAxzVgdGXtQnMgcyvmI6wQI5VtUq3Fh%2BOCAVehSMszcNyBQ39fDYTvnc%2F4QzFD5KKffZkUv4HKP97CUMDINNPvKK7PTMl1MTyxfosVhLexRdBioJ42UPwKd%2Ftu0QJf9piOf6KLv2ovULAUxOvE1Hn3Pgs79oQdS0opVk6nmT4c%2BONNYqUgnsvBp6q7SfD7TLgoBg8E9uSt4VOON0TkMMvj0dKNHvGFzHAyLjThBcgujdHBGBwwx7yA3BX1NBU8iSZxvq4fKvoQIkct8mtrBKQxJvrgZToHVLvfnCxjs7aZd9YQInAkECD8aERpByeIjjm0A2gFujbJDXvLvPa%2FlNM5D9%2FYTejn2MfgngwKvkzG4TjG2IL19zNRO%2FNY6QRy%2BqfO43qIRv4bjHfe7yl%2BA7nCJklHn3cCWuvmYJwENgo2uYcm%2F6WTumojdPtIMoF%2BywuzXAvBj0jRRXEBsJr8aZFL3KeHKd0kA%2BekNWUyPije%2FFpF%2FjkjAlYtpKohOynGwn%2F5KVAEXlTE5EOD0yhu%2FyyKM5KQxAwq3sctQQpbkFgP3nYwy1PNmdlHgjddGhf27DNo5ItVMzj%2FDySHArqBJmPvzvsTllQ47t8VLCGszdmQilwP9o4GGwQtqOfrq9tMIjEi78GOqUB1phJBaq8aD%2FfxaMni8Tl7%2BJ8XYKBx8e8KOw6zlGb997NAT86%2F05ScKU%2F8zXtGNXRbUvDtz%2Bs7NJOg2%2BHJa2NByNLrwuooKJ12Zjb8W0cN5oVloRSVhPXbNRzDo3u6J2UjlVVwZYZpY%2BO3Oico3VB8NYKdMIIY0uC1LCCWm3RIaMo86PPR8tbYt50gC000wbKe9Ul4%2B3ptYwLBWLtjw8uhqLVMncz&X-Amz-Signature=c42b97cc8e916b2fe63b20c35fe2561dbc20845bdd2b1998e077b42b252806c1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4GY5F5Q%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVHdwpClzo%2B8f%2FYqlmJGwYi3Dd41fdBLVjxXwqAuaI%2FAiEAwGGdq%2FUYmfmJyeoMhYSUxM5iPM8KvopsFIRcnfm1%2FuAq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDHCtMc0%2FlaPsie2QcSrcAy0LftfH1ZzOQmUKfljtRQv1wBIHoz%2FZVYcz%2B9PT2gKWu57JxZgYHkiqoUDAJB%2B261RBecl6guqfH3X%2B4FGPC962iKWcTo3PD8QvCuzU%2BFZklov3Fxwa38BBnLOvDywasW9zeH7RCwS3k8r635kvibQ3pCKVEbXJZfgOrTZIR1MbJiR6oOjub0DRrf%2FRDMFQYCKh5cUnc8bqewCC01Fof1xtCvqePUN9wlGTISKJ1aFCyNYHrI2ktod6Y1HcDmCoRXuqqHXckG9pQoGQBfenp7v%2BDTq9OD%2BKygRyCLnOw5x%2Ffn3ELBZNtOsViey7G4fNM0YMgAgeYCMCIyBoXI2IDt6hSLXulv%2BrCcc1H1ZOeCUBc%2BmCOzDR9ZaOYhLhq4Su42wrTzCAMMD4O8VwkDOV66GhMhn%2F8oAttzMpyP7EG6qSr%2B%2B8IBnMpklorlykL3wQBJ%2B83hyNsez5FVnwBtHKsu9GBmwGDBvbDbrGTYd%2BkfwX7LrDEugjNriSWfGWKg9AXsHKC2o%2F%2B9erM3wN6CJ06DlrWdMgH%2BOWuH%2FOfrFRsOre%2F%2BljhuGSRTKGc%2Fv7yqkSDcOM1dRdr9HXmD%2FYA%2BCThHHyo%2F5qLcKeKVOR6dq6SkCsj5ZLpa%2F1mRvbUgBuMJzFi78GOqUBPV1MUGbEUyGVXrXA0mS3EKtQNm4R7nmUu%2FxnLCMPTuIkFFpVsN98GGus8WApuHKAlL9ZVql5QjuaxTCbC9xaYiHE1wEgPMyYJlr%2FSH56VFb1UNzZn4OAX9F4W6%2B7IlzNG2wB61b9QeaH09vyFsHT9uQmr5Mle4KpT%2BXRroiG%2FiKQD7xjsYmosVEle%2FZwy7NTUpGtEUOZLbsZdwlKijJn5Ve7kOEB&X-Amz-Signature=116b7425cf5c0a3c088a4c8c32f325d6db7098fe34a4f38dbb1431f4a59f11bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
