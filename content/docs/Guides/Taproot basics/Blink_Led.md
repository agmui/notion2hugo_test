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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466663IPVQ4%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIBDTKUzSDxjSIfgvN1EmllSry7dOHP9Jl%2BNbMgxh6ohtAiAiIMOngeXcq%2BLDyedo8mNP0DHkVTCj6U0fk9M50jaB9SqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9N5jIC2ueFXRvLhuKtwDY6J7SkvUsu94E%2FWCK4NpQKVCUTTvz2rYlowzCkUcBa8nDZlYg3knYVFU4135N5UbzvUaFzwoW6Z6DoV4VRd%2FlrfGPZzFF2qiYpyTbnWZO4Xj%2BvFV%2FaHLgvPpSQXNwWiJybhMdHli7LGbnCiGx23IV%2F9TS1LG8F6Vnu%2Bn4hYEkBQJSdzYJzQSnMWSYI2ksnUVFjTApjOIpmDcjcf67v0kAMHPvtEzGJbK%2BPquPX9NBv6C58jMXcYURZh56wYmByHa8WA2ayfPMeJNjx2iEI%2B8N37jO2VmdK7rr4Wo5%2ByCMAx1jVnAktKDQBGz%2BeoanOkWaFcxM2yHnxL967blzH3JTvK8jXF0G3BuzW6epyAYD9dUenD9V64OrGnlU74zWttYh8tRLE3Epvmux3lvLfqMRS28HXZK2LJ8rC3LPbX0%2BJBi5YsyUQzDAcQFxmApzV3Y97zk5OFUpw%2FYT3ErA3%2FuxextOcV%2FpV3mmSzHEOSiy42fQFscIYq35ddPQwkAQJ4TuFl%2F%2FHbv2fUN62g5aajuGE5rrURwNN3gdlHOY5tk%2FNBqBskjzddMttWCT30bPznDsrcPO9Umb9hNpY2XgHNrmjmYYKg6Vv%2B8ArK80fo6PN9Mtodk3Wp7ebNSJpUw6ZCswgY6pgHQYLhfmHJvr0nBC01%2BdRP4Pn8qDiL7IJPORV0%2FcmAnN1Ru3MiHAK6TmzkWk8fQzWxiHZVwiMGQE3u0OroXgxv1bqHxOqgG2%2BiciiQg69YfnttJK6zPg3a8essONRcboXDg4a%2B7TxXOSlnyuh9Y7mlRo2K%2F08sIdiXsGFTBMZycF1fdpqDXh8BbE5X7or0CI5eJc%2BqI7PvkEzKsOHjjvRbGVhbw0yBN&X-Amz-Signature=b9801d20733db0f815329c76abd2445651a471c3f267ff27d78e3b7ad29075f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQKZ3O7T%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T170839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDgYUcAH7XdjBuXW4px3zzf3DLvw8jUlEqG3svPJTetcQIhANn7wd4EtRrIbNE1N8U1PZn6WfmDmWmCdT0FVLipEPobKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyI6oTIvqvXQXQ%2BtGIq3AMC3HIBpAgDEG2PN1ix5Bfqf8No4%2F6DPR%2BDvFYEuqxXlVhAvFt8xloKX4emGlvoArbUu4MRp%2Fjht%2FCeltvRMCkzYSzspzqqLqowM%2BGctSfPvo5awaz2mqi5q0uOmqfMZQ%2FtqzFJfQ83UrZ7veF%2B4rhM%2FWKmV%2BRKEQAK7AMffCEJ2a8AUsVBBiju6DIJae6cwJWMX33GYYjT%2FPk8kDU7MI31fszx%2FnZBbWgLQWdOa6r6rgCLC%2FTvJzAulWevVDWXfDAESqjIllgjg3oCqTwfa87OONSQZoLvWd2iMqygCH%2FpmdGw7KEMR8kURhHoe8izcEbtcPxUym17D%2BN0S3%2BI0ZogEQVq426kz3ZQqaBfqw0egeNx%2BkSNBpuHuqHw3M8kHe8DV4X5bZxEge6AcTOM0rz%2Bm4ZXrLZ8LX3drvy0Hi%2B4pe0A%2FKPpJUJhBnbQXBFD2fT4ZcZmFkNqcF%2BVNMy5V3fBxHJZt9f6pl9rmJ19c6VdNnv17ayDJD4YwcT4DZuq6jla6NPITnqAOpotD3QDcBx3DhnOi6mAg%2BaFMNzHWds89t5HSm9EsGKqAPbVvyJLwuGbvMz28S5Ltu2CxzfVP%2B5l%2BR3fErjt%2F2mg%2Bp1t%2Bxc00erdNaZwHKcUF2%2B%2FyjDoj6zCBjqkAYQDEP0rajm1ba%2FVglfOxLTL2n5tHX%2BoohYRfYrYZWlSOoFkCdbuxtLLL2R958QPltC%2BOEbuf23nXPcIS5oFBTzorcjafC%2BSZc4dcze4qSbzlAypsMONMbAxzoiX2MLX51C4OwUFa2VucQEXC5shXwkaMC7o9XFSR53OY0yvDtOf0okYDArZFiE5Lm3bUhvA2comgMlBHENQqtdm%2FUVDgxaOiWa2&X-Amz-Signature=b261837f846a2e29228cc63371c552de785cfa43f24695fb592d8b3c83dcc3cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
