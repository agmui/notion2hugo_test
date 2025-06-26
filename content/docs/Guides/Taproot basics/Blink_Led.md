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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AZ4346D%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIAVjljQpYdD7OtA4mbXM%2BFpt5%2BhelD1m%2Fe2yrZlgPe7eAiEA%2FRI%2FWC68ie5xRW7pAzOAaKzDqfyDRG%2FzM5Z4ch8UWjIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDMqGYjVoLw64OPuGLyrcA5kNhCXu2FV1aakdA%2FVKKi%2Ba8F6ETURG8pf6MSpaM95zE2jmBDhvnD1xFiIz1uZz8FaT1PkW9K0Swmqpf%2F0htnTZyy9txyWFZqeaqAd4BNzHdxDItOLzP%2BXMMhKN%2BlnwqEc4KkrBnkRHF%2BLvVA1NL%2BJPzJngNVGdaQWm4mg0i98JeqT85b%2BTSi6Wo8mKcUXVSorLiTIiy%2FIFqUj5%2BZGwHuPfKs%2BE6UF0OX6hgJf8iEfhecjJmwsN%2F35qpXq73nstev9JKfdrxPiPX0iFBMtrWMgyoTSrWiP%2B3Xe3BS%2F6ZLGgg8VqFfesmNtZykYC8G%2FYKYgNOcgDUP9Z2O5TM4tffG6%2BxJ6ucfOeAlm%2BF4%2FJI%2F4oNAzBsvr87KKdWPX7W8SMLfMX0YH2csqGGRg3oDYecg9XpQI3AL623EZCfhmJYS%2Fyxb6zqLn%2BOvi4DlVBYwxzocURCoSN%2FfdH%2Big4yYCvyUZrCiGMsdit2K3IP1qTyUfuYmt49sackJb4xtIhjzRBMwvvWkymRffFDXxeWvYA4gaJByObBR2%2FWiiPVg%2BiXeHDYgnKhqTMqn6LXv9Mge2mzLyvcreSJjD9DKL6KmbYcxrR1fMGMMTUUIlukXxOKNj8B2yXiUP4z0fG91ijMNGy88IGOqUB9OXKJfB7ghqwT8d2WBmE0svBUZAPCpHwcDBmlDLuaxr45y3t41NId%2FTvnhUTaDs0ecHIpYzCUWT05ATxdJU%2FlV0Cjn8uKhYyHJ0Uo5UZfjjjK1NyKflgiZWvtRhfIwPnGrYEjWTONF69x%2BRCWS3wSPy0Oi2SMn2M6Rq7SmeW5LlhW3OdhGOB0IwtrCBytp9NOKKloE025w2rOaj%2FqdWcKQKXZg28&X-Amz-Signature=2c8fa5bb91c76872e0965bc67c7ed3d4a71c85ada5492b0c9c30ddd71c77cffe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TBDQMXO%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCICfB0qw%2BqCx8lAePc2aKDgVA8BQ9n6FG4UYK1vpd%2F8pMAiBOTFVje6OI1HyRVL20XdLlkHp5X7wKW05WolyOFWMeSSr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM7p6u7EqPFgqGR0BnKtwD3kRTRs5IKVYWUWbv82q3LQT%2F8aK0QSoNvejAu8rQLKt4w3UMP1mHBTYjqptOPp%2FlOh0NI9qvbRt4lyU7Y4UoHwIVCq2iP8%2BZaJKix423SA3L8dG%2F6O60bhErIs8hlhGnJ%2FouqFpx3UYxAHYCVqM5PxbWNGkudNA9MxO3j6AuO6z5WKTAk5uWsiTwxdq%2BVlgJSvvj5AQJt%2BisIt3j9bX0rgMb4b8sUvSCXbK2%2B3cFdiqaqr3%2BYAiMIviYSbgEmj3oMkIO1D2LOTZtlBEQXr4SVtOLNqEHAEYSydPegS1YO9AlpVeAu9IKRf0Bx9gDCnVJzCwH0bTSUcXmcZRZG%2FEcU7CGAdUrC9jNq7in5UujPAjFQZtzLHV4JTQqzktYfSqWN2KOG%2Bg1SoMcbrGJFxx77o%2BVk9fIi%2Bds%2BjAoFjo%2FmYkHfOOyt25h%2FgMKh%2Fz3ey0xqyxJ4tQBZiqzyTNHsvlOA4k4vC2q%2FnAvwT0QvQQeIxiq9JMrmibL8z7y%2B%2B9g3t7Rrw8VTKRV0h8%2BcdwfzAyOepC9nz5itPdzR%2FJHsTPW6Vo3SCYyswz4NGftAqwKhoyU4JbCqEaA1gtqmJUaDb9My%2F2LWNru1UwLccfKwkhAXgTayJP880k9fTUmis8w4dLzwgY6pgFhSwkxS4m1PV2Dg2HoLPP6fGBMtXWj%2ByatOIQ1EvVSsTvab88OP%2BYeS5URVYs%2B6TrWP0Fr6BvqvEywrUSV0XeRwdJzPUofExgReN5WtARd7WXLZXHSpPo2rw527njwa1ZYpWTSZtLAe0wAGwzCdG5Y4rKUwQIKebx83uSXIf2epQXHvieIPQkdL6Lx2scgpNLMusBIRh%2F115qBEnpqzWldUrkJFQiJ&X-Amz-Signature=de1f1a06c035879bd76d46e4ab52a1d6a16d35d47635b51023b1f09e3750e479&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
