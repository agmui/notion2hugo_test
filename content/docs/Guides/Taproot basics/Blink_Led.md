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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZSPGIAA%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIFN9nY3N1e1my3KvFjXSWVrQO%2FLDSDw%2FzDPhN24Rtv0ZAiAKJT86lWP3HRCp4lTOCuMIUld%2FgjUFbCVIUocKEuYExCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMWbZVUAhE0ksJqIUiKtwDHXLABj1XEiH9Dcl8tCbxbeHFb747Rmp0Y9m1fZmVPDllAKulmEtBH9lVuuV4y58zxeEvOsind%2F%2F4WuU3DuFVhqX80DNlgpwGTzdtvkZdblqJzn3nEH9ls2uqBJCz7ASW6LQ0C9JY8fCA8PJnUtFIpDYJ9bLnddt4qRyb5GJzprcOp2%2Fck4zGmKVI%2BADWmSmjaZ1PYoPTMwgFqsx1%2BcLUgmTIGy28cn66vbr4MHgERNQJvTfWyA2Wigp96avP%2FMAi5v%2BXEAi5SJaVU8J0A9cvfe%2FrxDCZfvImztL6D597Vk5IozT%2Faf3BnSqP6kTkSvYFfJjlBYhp5FxZuJpIfqj5tMLgklXMm0H7S14HucILHQ9%2BDCCZQmnJMedlERff9Ye0ahN8ZUfiu9kf6MfSswoKUS5f0TFE9eDueiU6PvnBsZaa%2B4NALmVeVgllQjL7IiguNhL7YQ425bHp12gCBxO3Iq%2B5ItWp19wCPqd8ZmVDCax1p8S9TSWNZaES%2BCHJuiyIGId8u9z5%2F4mpOE9lMORnaGcoImrPXrjociJGsSaqrJ%2BQVLrO1DxMNV%2BVvZC0AY%2ByL4FmIK6Soliq3fehVXV5RkrvDLEgQ9Mu6w9OPhMtLzQOB7UKw87LBfN%2FoewwleulwwY6pgGn8BhsgASNJWa5kj4RfgwEIgeQWkU77VN35WO5wBY9IEY9dLVo%2BBV%2FAAFlLTmESUVf3a3vDNkSR6%2Ftyiz1LqBv6Bx9rncZTXxTduGdirNCLrWGtfLr7NyKB50XbYQFjsAOmtqbJDWT1py%2FG%2Bg73Aq39sDp3o3GrzSP45NJyVQlQSRKw3PEyZSUfbd2SpBxW4noWrWRHHEKjUokc%2BjurUV8a8labngB&X-Amz-Signature=36493e2feb41c5071416dab90e4f44445e6704be2e4ac1ec0334c476599e55cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC5AD2UH%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIEtxDjscU6XVjl4oD0HbJgUOV%2BaH7qpyGNmmBxHUDHfBAiAfkZPSJhsRxcRIUIgBJV%2FsVr9uJ03HB94viaGt3Cf4cSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMqxK%2B8M8DGbrMtAjUKtwDxY9DuBevcIEAzdgmrUcpYpf6ZcQa%2BLq1gJ8%2FNdv4y%2B%2BQSLY8tVb58f5l0hXI7ltZDy1LZsNOoct1xLz%2Fyqbr1mILr%2FaeXVyjzV302vQ69xwFhEPqItS%2Fywj3JsoXyGmE5%2FzR7D7jSYb8fCugtbCcrhJVaGdQpUDDW3WdT652bGA0uejb5HRB6cotALjxBGtgE5FP%2F8fB8m9Xw%2BtejLwk2%2FDWqGsPSg49xdz6lQuMxGPLqhAdc54U36BjUpyX1kw0xGbGvgNLsCEMOxaLNVTPXqhAtJ5AiODTd5nIlH1fpgRrPe2ewQpu0%2FAOn8rvZ%2B%2BRQJysLjT0d8xtA1%2BahL5Ctb12EF71N%2BuP0liUNUhb7EUaw%2FoIU05FZRc6sVL7U0A8ncd%2Bh8CQm6GI5BA5Y4LwY6Blu2QvM189x%2FSOuI8IEnhsFwQLw9WE85IUnt8l8o6NqyVmPyrzYvCy7D5xKgzSdHAFXQ97ERsMQ2t0NuKxvXDN3jAdbuIYdA4JPPmLp8GnADJKUtGvFIQktkS9OTl%2BnK85H48uExS30L9SIhhyhtNjQ2hle2q5iB%2BxgQgZxZ8fCRxDcX0H3Q41E5Z1Hz1vFQ64TdmF7F2o%2FNGzUyO0wBhX4YnIxUbSEAskmJUwqNylwwY6pgEmfPS7FRwcKQK%2FEs5qTHFKAJpDVptGqNcMKOJS3dalMqRYT0agm1oXzngia7Kksnsuna2ebIWlXB426J9T%2B69NU9wCRCvctigZu%2BD4gAQrJVcZsyzCXhsurIRDYM%2BQxI1cq1A6ToPVrFPRtyz0FiCjwI5C7mKVLlgF5RC%2BUmxm4B7n4xcWcuE4wnP0gRFMCk%2FFT4k6PPGpcPn72Z%2FX2yQcJpCFMvjT&X-Amz-Signature=e632f012fc6ac05aedf7cac6d80195df9dcefcc641ef5d8d43c64d14591bd6d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
