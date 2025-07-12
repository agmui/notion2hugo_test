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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVWFVKRL%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T121436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvkMgK5HzRpihmypGY9sKvdWi6jY9rdsEPUH6hUnfklAiEA0ZpI%2F6%2Fz44R%2B3%2BMMnC6GZb4eYzRFGJu32at4RkRU4RoqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApLW7XjlOO8q%2BaaXyrcA%2Fvl8ysTkLg1f28pYHHeu9mn4A4Gu2kpdkYen2vhSL%2BC7BcrIVTlzuLvePE5wYzDs%2BIpQn01rQyZxsiF%2FClXfBpiEfuOE%2BDUUIo%2FmDi3%2BKYORQHqRtqywp%2Bp3kRwUa8zhkwh%2F7Gsy6D1z4GhSWYzAz4gbS9LcKWRWXu7BWysmj315%2BDrWfOIXTjHBKLahvCVxbFRTEN4EpYMGjRxT4Co2kr0IW3wIiHJ%2B0PNaGfEA8dZm27m4RzGnWqpYGUwjHjK192ZDW21Y9ZrZmNzcvzntlNPbB95e5AiE%2B9iin%2Bi9o1it4FpOzDDSsdpHn2WLQp2RjI7qXo5D101EkpefWsYzeGNFiEmUpJGGRyUePrha%2FdDQB%2BJB6WEsGZZeDC64V0S2qpBhBVkRXQ%2BLu%2Fx5cY3vyh5NFwIeWBKbGq%2BEeDMw8EDPMApo2wTYT5vpgDg1RZM4a7IwSlUXqhTs%2Bb4ylzsFc7Rp%2BP5vT4BcTbMLH8sbDRZavHPkMaBb8f5C0l6kqAu0UyGoZ%2BB4P240FmkDBwHSp5weoP5fu2DQFNYfNHZVQJ4F%2FkFLwLVva1vwEPVgtNTHYWJACP93jMXzu4uzs%2FEABb5l9jRfJU1x0tSXSPV%2BV1Jrjw57LuM2Jm96Gq4MPH8yMMGOqUB3JvY%2BLL3IPCmuSKvTNevb7dQcncm0HwfDMKac5iCNPkV4fhCthau1CYFV8VvE%2B8u5FQQxA%2BtEiw0TvmswEyNlbCneK6WeMxJOyLPtf4iau6mvrbuLEIfTv11yI1wZyI%2B4Uwday0BnIqrZQ4Mul%2Fe9FhD7%2F65aBSolefWJQkeOFiuTZdRcuqBJva2a8LtQevqzXpNqBYkeR18FFTGtQV43jnpoADy&X-Amz-Signature=63c0da09e0f4bdb5efddc2281298b331de11cf891f7bdf8c765ea232319fa3b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZKSPSAN%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2PX0G4ylLlNqlRKr%2F4yrIHJQ4sptWnHRjXbWbT7KgDwIhANZk7EAcf5b74mt6gOyxJjd%2B%2Frxvd%2BvhDHQE4Ta9UBozKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUdDd9mNVRNa2aCmQq3AP1HYFX575kbaa%2BZBep%2BlbilubOyC1LBeQeNaX%2F7NTuSFPyBcCOHR%2FeBCc2AecQRwC6SNdz6g8ozbeaXBpW4Ppp%2B2D5w%2BdZtPYq%2BptqfO0f%2FmWNtycmObpIxTAWjIQwR2qEIEdBxu3GKCbrd4cltJleoS%2BIJxdFlrNkjtJRIoRQujsGVZneMF9YSVb%2B0KcdfPT%2BrYgdaYeqUz6SwYA%2BGwQiuyngDcpltu7Jr3O7oYEtdGHxzQESiQV8DZwWATvR3qPRibz3FcWbhFTdYPyQ10%2BAkdF17J4wQIqZsgRmuj1xY18zjjkhhhbtD8H%2BNZ8n5CY9ixCI%2BvyeDr7OpR7aFROYjEiJ6T7F60d9OiRzmnEmXr1iDHCNake8jbDZ5t%2BdrFHbn90oET%2FL3hX4qjfAwkpl%2BXtG8T8YEzf9lIpERMBZuMs0ecM67ddbPJ6VlkfYH%2F18KGTs%2FD8eYzJLehLZoSdpq2ZKDoWdB%2BhcTFtYXSiDBkInwY1jDrqhINumbwKLy1rNQ17X4x2HX3UF%2BbZ7E1WaCR7eGMCNYQJWpIkHH7%2BCt3MGeiKe660TSeOwDT0R5IOgTLuwAxkOH5RAlj0is7gZe%2FGLpyvb4tKEJEjaPhqIhOZbjaH1ySMpceLR2zDK%2FMjDBjqkAbG9BGTphOJAO9GE2PTDmUiaPAHAMkw1ymNhArKlAvkno%2FJmluqJiR23raD1CVOjOPXxq5Oqgz6fMwn3KLsVpQo8vL3l8e4q84mRAA0ATG0oyuoKD1OJWINghRHm%2BLdg8pZg9Tyarr0jl%2BI%2B7YLSVD1U3CWIpH6O9utOmSM1L7WaXfmmKPO8EQ%2F2Oah6Iu8dfLPfDrGjiHfOjyZF7NePMAhTOCOY&X-Amz-Signature=7612440b2be63845926b595d62a919632569dc90142a7c3e7404b81c91dbb8e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
