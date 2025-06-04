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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SYIXBEO%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T004244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIFHwYZmDC9iN%2Fw0DlpEV1ecEXnoO8YGHGgTsyyRiAK9mAiEA%2FvBqj6rHZwP0aWoPvi6BTXftASiUIO0yF%2BgZlb2pfPEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDKQrmFgBK%2FZQN2EAtircAzMK1amX9%2BK1ZdSE0izqjWsEhZ8PAlx2o%2FSD9BLLyrIeHwmHbyed2WS1hkMMm%2BEqQ8zolVKkldQx8l%2FyY2UfyoDyCL%2BmZFuXmpsDFzAZ%2FEQoYUSgKd7QPl7UlmihED7BqCe%2BhXez8VX0KthbGkSCjAVmdartCRYTazDEtcvfPkbFcsNRlsM4dRMdn8jrWMXWl%2FUelpBBTXIIQM0sYVlYD26cNFF%2FKmafHNCINxA9SB7HGmPMZ%2FxQg6A2%2B7r8rAD%2Be0Yuuyt9HbA48tR74aL1yuoUaJCGFD%2BexgEI7Si3j1ZtqiGPSv4eWfaPPJOpsMrONU1SNN3En8Jafd0pnUQneU4GAuHNTLyUl5Qk9W39kZi7JdDbf6KXpfjdKurJwf1s%2FE5kp1SZphk1IGXUooNmtLH86HfAqo%2FlgrlbowiWtH3BFwPLZNgxIT3OUTIexQtkCoQREm%2FaX6RXbFsrDh4CFgwk3dyuZEqUaLcTOYUinMaMmU32%2FfPUcx0IVVsG%2BxhCwVe%2FV3Dmwg%2F28OCfOjg74GBduZtQ%2BVNGlbApF56NZVa%2BAJs0gZu7s38NdF42fa68HJhYhXm%2BPdgH%2BlLvFEr8nybA5Z6tWPDoVyC5SrRJL8yZjxeZ43tecU6c2EB3MNf3%2FcEGOqUBz8E2lr6epNtlrXvg8CXnqXhW%2Fu1UXA%2F8vDD18As5qUlEZLsptctIsDBbW8nnDh5hLNaxaJ7R6MAxtrafQ3kr%2FsLm1RZzZ5GaCQc8GzuogIwxGG%2FcTtYAQg7CuxY%2Bn1h0Fa3Z4NkMXAVs0ZPnSkQitrppdR8FVuHnO%2Fa7yopGlbOXtbe8rUJiKXcbyF2de6z24ZEWXbOeRc%2BQHnYiQPoPgiJFliGf&X-Amz-Signature=9f5cd8fea83fffe2bc76b716019b3588bd7a85a0866359d599e9f17727e3a73a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS6VWQZC%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T004244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIFrREGp5kkbbZUVLbYyU7Vo9meCNVTfcCY2GEpEi0oYhAiA0GBny%2Benyd9LYBBkvpiUnZPmC%2F4RoumH%2Bc30BI6POYSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM%2FJQCbj9LkDzkNzRFKtwDNmGKumQ5O1M%2F4iT4ZWT6VelluRhRSfgPbzpnqmwWlnDVDHR%2FY1WB3uN%2FKlBLZff7R23LTwwPGt5tVhOsF2liIR8DI3k0JXXu4L5r2Rw8J3FLMYgrTBFUCw3Q5EB%2Bq1sLnnDryzGfDK9alYV2B9TkCeU50l3EixaaSuIMJP5HAYS%2Fll4VC9ylPc080ipvMUmWAWWi8pY4wljD74fb2Garp6QA7jKnnSd7nO5DVs9aSLg1Nt10SRN7csXRtVjvt%2FKc2ftAoOXvIPcM6aDVXp%2FcYJ51%2Fessqg%2Fjo4ztreq7FahlvMVkPsu76ZUu9nHazBO5racm%2FruAcGpuiWqDpizKxdnSPZ5%2Blv50nTTDhMTCNzLoJxstQsAuyzJl9%2BnK7eFD0gcf6lW1pHIrWpQIreaQXaefwTRCFDUsiNqbqlV5NSkujqoMsqUxL5GtfRjOtO1PI5UqjQGXkm0a49DurSE1bhMP4kxJGFJqxR0kQd7an8%2Fr9NLSwEPnZ4%2BVyQ0mgyejveHmzJSHHaZs33tqwpc3LrkqTDhq8nSbFnrW3ygZQzBQdRxHGxHQ0msbzsll6JAwIQ4z6gFelmSC4DOmaCj0cOLChqVpRh30LIS7cQE89SLLnNdI6yAMrY92etUwuvf9wQY6pgE3YegUVrGMv5Cb5gcGXX8M9gbr0nZGXBMd4%2BvL0jB9wgBAL6jL9G9jAPY9LBpV2CRpH2efKOJW4mvkrq%2B9mejcPLgvy0VG5RQj5OQpl4bG99Cb6AuzP4SIMkkrex1emKJFYjGkqkaEQt6Ae7yX30qpdh7ppMuJGiTviIlF8JEfnuyvgqMWY%2BWdQUhVUq%2F21aTIWV0KkMxTr%2BBxE3F%2BzIZ1JjAv7wSt&X-Amz-Signature=63d1a6c405043e9d9f0d63835682a5212b5c2218d7323d7256ddbb5ca136b097&X-Amz-SignedHeaders=host&x-id=GetObject)

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
