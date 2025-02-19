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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5WXGWY5%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T020926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIArtdE5%2FHshKAWnNu7AIQkE4zg%2B9o6p6ZcT2%2F7Oasf3oAiEAptSjR1sb5s2VandVmWhDcGjSeDmheYMFRcoQVFYoFXgqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPB6Fn%2Fg%2F6hcG80rySrcA60vH%2FkC8Jw%2B5Vl%2FzskZx8bbvUy5UMcY15EdYNQmE13j61uAxj63KjGtdvX91qopLK4waLr1%2FT%2F1in25vKNDWju8L2XUxlZDNLtXsrhkFPoLU7qnfbxZG%2BE9rfgEQngxtXaydANaxcrLOkrMPDmmESxDesxdM9evthw%2FfVRbLIE%2FpItepF0XCaiGgA7g7dGTTWrWS5MoWFFSPK5m7GQdivMtlgvKnZrCveApPtsQcjw%2Fz8mfGC1rNfoqjkb%2Bt0Q9NicDEXrNDiowqBcgE0NceZRjSH%2BeERiVFuGKps%2Fii0ff9oaLpHlAYvkDNneW5aBV0gg5Vr7M3t6WDzAKh1WEjJV%2BCM3HA8HRdvoELQ%2FKKCanWvUehnglBc3krBtgLhm25VVJzToo4OwZSJYI6oibaBX1w8%2FjpIGpugrFOHWgrVibptoKx1CkJeAzUeKCUFusQ2PesTBDbanCEprUbo%2BVzt5dndV53LPvQp3WnaZQwFLP4lJ%2FUHRCMFjTVkaPFhXh8ghgj6%2FQtYUwuxPopoBLnfOJKLkyHmHEwqDtjJkhfRRClPnvvNiNKxRmLrnrjbAk8NRHtatR%2FArRT1ypGflkJPiZyRZ4ew2uaeFIcRqOxuJXoEEAIGvw0zJgrOrPMO%2Fo1L0GOqUBHOqk9bA9QGxO%2BCvqqy6PQru%2B4nJk02aRYUjYVkny1vAnqiAqPFqShkbhVlOzycnkYjQ7syl6gaD5QJiqQXWCbX6pRk%2FTiBjgsdlsrus%2BnJ0pkCFWKYrrzP4W9z9YK2jfny8So4%2B1KgxSQEueDFJfIHZ%2B%2F%2BGEWm7mZ12jZ4qR7W3JSE42rD3142KSF07J8gI0eiae4v1dH2qVHHNyclXI%2F%2FrqSrcI&X-Amz-Signature=7eef157967c41e0a681b0f6e6e775635a2e31869ed6506b7988ac4d62a1622bb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F3IJSKW%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T020931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIAmfHhjZI8IOWUhkd6%2BugJhdxsrxaUyC2gdER2aFdeVTAiEA3%2FZB%2BRgjVw2LxDOhRhBLrjK6v%2F8x3NHZ6U9BcLjYqLUqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNtmsCOves%2FAGCD%2BircA8avxYeVot%2FaIJ36of1FwAAp31L2OF%2FcfNRZd6PJjrZW8Q96PE10R4WTnUr28Tw8RddSsNOw9baWmrLTNbgM4g41AmSmulNt6nkSzGRTuN1PFIsRHnDfljFB8TMbH1HtVYfm6JVAxXOG6kb9e67JuUsGIVAy3V%2FRLSr7%2FUgbMgzsYiXO91cl2g7DFys%2Fuf0HTchzI%2BEJ3JcB67aWKxMlC2OqHEgy2UDLMRZGnLL5O%2FyOjQtE7VCw8vnn3dZf%2FX4%2BproHYtknjWcD%2FdolZOsM6pq6RTOGugm4ZhC2Zx6iXVivJA9MDP1k4K5e73fhJwlDmXHLfbYJx1es0v0k6yzvuZbUPOc%2Fu5YTahvgF8mXsyhSTLZs3oAkR%2Fm6DQAaHNxIp15GuGfs%2FegcrpJe8Jruna9gG8GKGAYV3GaMFrD8QcdLeI4PfZUlGqEckPeU0EqHMWn7%2BB8qptr6LEIeB%2B1IPFTlruOo%2Boz%2B7ohPb6jrqDf2UsN2r9geIPanyDWrvKdi4kPtT%2BsfXWhae3at6Yj%2Fc51z8swOqSuV8XpCvGkytwqT5w5OZ%2F6iEvoo5koG%2BaNR21EezTCqXjSlqQSurhXS8hPEUYirC2VOjSld0cOCuYUXzniRevRs7QO8m6EkMMrp1L0GOqUB8emoUvyWJMMaqIPc7osDOIHk%2FnuBRPwHoc0AIe9mo3ru%2F5VZrDxjVQ%2FsOZkixU9%2FxotxdbiCNDxXsu1UcjdbYbsW%2BMMtkc9PRaVK5noHD0FSVAr3DJPcTvM8jtmm%2Fe039auaSu527S5T3tVjjPzMB2oZEtTlLJrGek8lz6JNzgqAP4Fj3vqZklyD5QvfoR6IjEbkt4Jkl8lvTfaKzee8vejX%2BvGB&X-Amz-Signature=b1c45515a9979557642f378c0d3ebdc8c74992f49ad4ed8a8f7f1962a9becb02&X-Amz-SignedHeaders=host&x-id=GetObject)

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
