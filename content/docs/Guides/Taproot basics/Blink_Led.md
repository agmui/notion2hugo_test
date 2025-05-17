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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXPW35F4%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T090803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDczO3rjjvTrs8xSqnmDrq3PT%2FTbYR1khnoR3Dc1Q8eTAiBL%2BQ7jvbEhMBVhwF%2BWFw10tWAf%2B3dtsr5lr6XPzbjVlyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM5KqHFptYFxoTTU%2FoKtwDapwusFwcnEpTBHmZLzDIMuxEU5LoejobJxswowCQ7DW6vdSnth1%2BbADfgY2a3uzqrKAKQkYW%2FpP%2FRquDDfednmWus8uIo5oSSERESXExMmjlwE85b%2BRs8uGgGRqTu5XJ2yr2rPgR8H8DN0P49tre337RezuEJqFxrsQra5f05KGkoWXsOYl36DHzaE4JVg1S3FzDGUqpL38wfDj6CbcEEhml2yU9xBExh2R2mmic0d3mcealcO%2FKmMLfwP%2FNnXApV6cBjZmzwop7lCJOMtfNDssyH8Za%2BdnoDdfxh6xTAlylKW1IUg3Uzk1v7xEuPJFTFhFULXDhta0a1hv4l0o8%2BEuKUALDnAjm7226OnLW0gF3LKFAaJJ5XAf%2BCTrVI7JVVCCizMDfCbGySVq5u%2FP7N8RngMNi7JQ3mwAhnc1%2Bsf7IVmvK5h8rUGcCtbi58vBgz3Y9btrewna6zmghpZChP8vWJC6ayVlc5Uz4vnvutjGZ0hT1i5azEycxWADwivcnKlvvBC9iqXyFOgqpAnUAEwCIC57Zjr6oavHshPgLlCYlXnZGPAEVd4tLMDFXnUIeCfg8K0MpTzbwn5rwlwwBg%2F8OSWbRz%2BgA6%2F4w9lgm580aCblLSDshr02Nc84wjOGgwQY6pgFxnPEs1ZXFIElloMykSPXe2s1pui1sM4Nhxn7fnTj5IAtt%2FHSWkpWic8oqcPEDMHJh9UqJ9WDaOTcGYds6MZghIRQCvWzN1ZXkBXeGQmDU3jwAcC0gQolBLWpNjF5%2BAXnwM97DK8ffQQ126y9uLgBdIKFLUWULnnYAL79SwBWDjXSuLje9tI2apoewYuw%2B7n5KjFnoGzEHbkceiyDjvlycdqmSxc%2BP&X-Amz-Signature=fadf2df816b1630ab757d1c54b48bef050b545c361daf1fdf46a48d003ea54ca&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NPZ7G7S%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T090803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjRPEC5WPzr%2FLx5gZuQ8Fcd98K1uPI%2Fr1GNB97%2Bu6%2B7wIhALwn11FlqwSb6Zq3xXtJ%2FsFV1aHzDp6lwIIG2dxz%2BcuFKv8DCFgQABoMNjM3NDIzMTgzODA1IgzP2pk6xvHAE1WgEYwq3AO%2FrEwJpO%2B%2FmtH8moXoAiifCc3hzLselJh6LFW7fatRlqLEAXN6SFAZK1F3lV4sifdHsYBcR9qjqCIVHkFe3k4edvKGYwmRV7iblFhWCZJCeSW5ARUQR3Cgy558dSzzF4Pt%2BuFydneLGDv%2B6oO11nEH9XOP1%2FCL7eC%2FGv4HOuF2rDsXjIdpKXZfHiLfutUTZupFTzbkDLJGQL6qmsrWHZH5a4volEGYxV7VjbRtP07Wvv0IWtjM1FX%2FDbOFyXwogHlUGw%2F%2FfZfvZ1G4GPldQr8AOe0%2FMbHFiE0FUlX%2F0awLZqw7WFubqrQsCRxKKJhAw5nCDm6b16qyGoDim5SApscb4Pq7iVNFcMls1vQyb8W55CqxhBg%2F8MOgDAeZ521ypnNCbvUL0oEMvtcalSAVLu293%2BKl8Cd89DC8Bc%2BxSC6tEXETe3KnLRupPjmavnMWKO%2BdweKy3gQtgYKv1Nhm1vWQFnQjasJ6UBtX%2FVSRU%2FWXTYKGWCpEd6bF4V%2FHEf4z96iDxNAu1pjHFgqQaKezuzP1KnHBFIjN3h9NiKgsMZ9uxBh4V0WZHNcRUuIbdA93wTF1LjJZbhmIks37HaA5keuNFWDxlgbGAWlRUn2jxrbh%2Fv%2B6VkA%2FpxKu47YdJDDF4KDBBjqkAX4J3MTeTB%2B6cgUZ%2FchFsZrHQ4bqsJGsbbpa9DxAQyF3e2z%2FWHPuRJfqX9C4mNCbx7FqS91eIEhhXAVeaCPFz%2FAG%2B18KHniDO2pnn2Aszx4gAcGsYJbkALxbAnlSxhJvDHVwgvC%2FLtwZESmhf2K6f6O%2BAkJZNOJOBsyHO9WmdvS5fAR%2FYV1A6K7SLxGAmozQeClr16mYAJ0o0L7XzdzaNeCXxXYr&X-Amz-Signature=3cf12b24bb577d1d458b89b7e0fa9f5440f2e8e561d0abf5a91636d0193c5991&X-Amz-SignedHeaders=host&x-id=GetObject)

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
