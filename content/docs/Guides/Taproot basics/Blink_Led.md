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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNNPDQUG%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCjjZp0x9qlAb8W2HjYoqNPL9NwtLx8rD7JSeNRQOpqdgIgd4UHuDdII14xjB%2Bf9MQgAfTCOPdKFYND%2B1bdo%2FbixRgq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDPN3z%2FXCjUTeDNOHhyrcA%2B7hEotIDzVWqcBitjntgRVo%2BGY6MlsDyDQ5iQgUHKztEDQ0lwZixD4on%2Fm0oTlyFnnM%2FwFkuOz3e8JR8wvpUCZCoogptHIt%2FxkuXLTeldYB9Osn924Wkzrb1adHJzo3jC0S7QLIY%2BEye%2FtYZ7ISJnXqXXfVetPlPyJrtlVhpAbXx0k8Advm6duJ85QN3Ijj%2Bxgtz8bj4FX7h52gVY7phOFj%2BKQupXVShjtgL%2FK2krMNLXF2F59TwARVK9nTfs9nVfedns0a8d0UD%2F%2FyomoOoALM2TzHpGAmoaKSwGNVSvOMkb84kIC%2BvfL3G46lnZbsywggfTwomvMMMxPefc6GOv1O%2FnA9qpe6PAhQXHYkGmLz%2FT57USkeYYncnjlhDb%2BvX7VDJCson%2BimQBVASapA6xvnzMRWV4HBOnf0qcUXPcpdN0FaLygTJWFsScTC6q8ZiE9DQyy9SokylzU%2FzD1DyCE6vgCw%2Bu56dAbg37lJD6RgVHcX5bvCfJ2aNR3uy4PgOn9xU7u0BBgT4YpvOUZIukEM6m527wyBfpjoK182Rils7zL6es4z9WfQxl2huVanTSJbogvamnNdxxvHZP7P0um7n5DzB93AZG9PE7OCrTPxQkmVCvEOM%2BKYKyIJMJ7bhL0GOqUBJI8ZjJlBcURe5RoX82kEjAJS31VwMFk9%2BBXKWEtMPLLeYTY2KR5fZkMVqaNf6%2FY6pLsNJHr3ltCcQsbtYi6HDt0UlMAnYaVoZDO2HS%2BwWItQhTxeEP6X82ce7el26UZDe1xpOJJhy07PcGcGrObhG7giAGmBYzyWnYF7k8z2VArQl1gy8H9MarkR58hCetsobaxpJdbsw0Sv11gHIiMY9aNrQzQu&X-Amz-Signature=4c09f25f1cc76463ce4d3e49d9b4e524fcdd8c1fb486a1bafc6ed9ba6286e5bc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VD6CNGR%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIE5P8Jy2qXOw9sutuxXRhD1UU4hjUuJwr56fixZacgJ1AiEA%2FMqCeyzwlIdDYFeox%2BzkijuyKsPsp3VIFtnSeif%2BXGYq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDHiB5SDDweKrJLv9kCrcA2i4cmAOdc%2BDR%2FFF21%2BPNKA8nPbYc4rlCzQNTjJMHKxH75d0Jt%2BxM%2B%2F0FtwckruiQdtVhUgdzrdvO55f8dR5ghPSgpW%2FqKlRo0FEqp%2BfhW56Bf4Jdlu1KDQLZ%2Fi6YaWJka1PNKFaTbJbDiJwaiANaPcb04lXVGNJal1qAS6jF%2FP6usyEHZGPQg3P8r5g%2F3xRqibhmhWjA8W6Z9P9b0F%2FSF4%2FO571zLB5p5OfyhjDHefVDn6OA%2FYsrHdokDRhRBJ%2FuDoYkr8i8ErEKJvRGDdGovK39GE2CY90a8QTqK1TRXS0w%2Fi2ThMApW0naWDijHoTOi%2FjnjblgZizhWUaYDs%2FntlHxCRQ2zDGDDgQE%2B7sRldGzgoKvdCCBOL1n6mzpydoMn2F8R7663uY8xk1aD3zqijqTlgMD2h5vTcaDsFDCNcVku18pIzxSCjtS4BFOdB0aHSQ2zWdb8i%2FiV2PSD8f9n21G5gQp4h0xN7bAH%2FAQmRiXap%2BkW449T%2BRmsjp0az6YefurhXgMsyKSCoxKRU1rvSktopVpYzxty2S6Pq%2FPBTXrsY2C6%2Bcb8ZQ12KDhMwBGUzIF7L2P88%2F4cZ4r5Pn6I4NLAySHt2doX8WX1xC4cuWryoNRmxL%2BVye6M62MKPbhL0GOqUBGTVxcxy8E3wPXvloiETjqKkM0kh8kAUIv3%2BmGuK6pIET3q6bxWzDoWYOUXQ%2FB92ldwa76impLZeUXH8F64hWm%2FYj6bXIUbQj6ue%2FEwWpV7js67FhiTa1BXSDgZItB9ZYdhWCyAPnW60%2FE7tcUd4LYMjCw2EMMJbHRhjNaP0YpT5DJPSBtf3ZCiYaD%2BVyqYvmiUb3LC6Q7wsUeoIntVVQy5P7t1yZ&X-Amz-Signature=06b8466cdb305342063d246f8332cb80bc594fc8a04ff1385b16757a8ae3b381&X-Amz-SignedHeaders=host&x-id=GetObject)

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
