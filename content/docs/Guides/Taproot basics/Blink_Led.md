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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQQVACS2%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIC5QYdslkDj35mKXJzZ14aYPzPIiIU3a%2BnSZv0o3vHqNAiEAtQoVUFdlZviEWfp%2Bs59ZvjJZQ0HQHF%2BCO%2FXpc2JXeL4qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpIl2s%2BO5LJWrdi0yrcA4t2G50R9c%2F%2BfyVtoRSqBxGJpaW3Pw0FemopoT5lvqZdF3lUh3uYWfUQiFWB0HpSmOvZ0QMI8zZLqsJxpIdfNpdYIqPOY8Z%2FibWawB65qDUTic9IsBdcYqyQNWcktWpnE6xAG%2BcMja6r%2B6Cj1z2HH7RD2O81tNLuQfX8wSmQaLtsYd4XoiZVLmoKDr%2F2dAcv21kwUvqrQ7uoF%2FX8yHZcQeS%2BomrSKplAA1HWXmcQqdhvmb6tOR6Zor9kYrSk0kNu21DEnaV8sVEMgmxNWEXDDG%2BTmXbTdjgm18A3hP5XydR3NNSgo9pFZdrh0Q5Rgm%2Fu5DPTWJSo5ai6WmCAaZ92%2FGDZtA5Dv2lfdzospVHfRe9a%2ByPoK17XXuz2ZZza5MxomXv7cFRlOwNs%2BviXCl%2Bib5nSxrOstMtKutbbhwGqhcyAZyVUNMn8QWRQtK06AhSL8gPTxWD1j7%2Bh3eDD3Buglxol1iUu%2F6sLJwnjHy6%2B1%2BwHMo4RrqjPH8idTsn4f5lCMKOlZ1cmdsQJGdfWNgQmFvh7eg1o%2Bw4VD1xoBxjv7UbqFL0Ba54nsQsrO7Quj71A1MOLgO5VE0lQjWM%2FDlKa35RjaWdrRYTDMNUX97zcz%2FRwet1gbkzFab1tHIrwMJaNsb8GOqUB%2BdrNvI3CcQDFCxrv9HIAFSufwkqNbPXbA7sRePArV7aJFU9yx8Dy3GKCSd4VCYYn0dDmF%2B3rwBA6EUDRGMWPeD8hZ5RQK97Lgru9LdrRMq0YXsAu%2FUqvA53SOE9kra3irGiq7hM3mseQNhc3i%2BMzmMYI918EyVNpleA2pDpKsI1EnIxVSEA1bU6L0rxqy29pH1h35Rn%2B%2FyCWiWNRi3m23KL9Ngl2&X-Amz-Signature=1e2ece14929a218e6ff178fe5c5cde996233b162ded130450843661f6f58393b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLP2IREC%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIEPPA08vUhZ3EDPIxLChmKV1T%2FHuKhPrnnQmceCaQGz9AiB0%2Bf1CIYmyA97XKCEpryL6oLRbLyWp5aO%2BzXWBAPn4TSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9%2BNZSFNhnjC%2Bn3X1KtwDBMrNd6RKMeYBjPPTWIGxMXhZXOFoFoUjGBKfN4mhPK%2BMY72sFUjUfEu3Y6KF7YSYEtcvafHcyFts0lL%2BrCk8GtS9PX3u7H%2BPNEh7AW%2B8eIt4V4RDunFpvUX6xBPBh9nJ0SxHWkr17Z0joU8WIGHHebyUSSUaZE%2FTxpIUvd1WY0fGQNnclTITAdWMnawrh0N6dABkS1Rj66y%2F7W0lfqXOyntMr4BQurtkRgEptemA8Pz8ZBQsU0QWWa6qajlHSqqSYOUlxhgEfKuAR2%2B%2FpKMmUON3Ar0tqQ14RkmjsP3t3Cjxf4bvd2qD7PyPC1uoG15muwpcGWyxXxr7NkBPvPFIGhZmRHVX9t1%2BVFLv6yHUfv2CcCpY4gYjgzanQu1M%2BuF3uf6T77R11SO2N9m5bMzcAO6hbMKteaKDE6nQAwaWxB%2BVFtmygHJyNLky497rxT8G0FMLa%2FKRnJnBVaFt%2BH2AShWaRVUdjKp3SwEPFgDw9YjUWbv0kpD3SlfdHXozDJHFF1eo6HeXs29%2BObAGd4OLmazNKEyF%2BfnIHZY427cbrkk8NK8Ss2zvR4WBBBYHmXfzwNlY32OaUkJNmI27SWJfeDmFPiRnY46QfSerlDELXM8i3OOhUuekg4gJ10swyY2xvwY6pgFEwfoNewg7SHnhYYBB6Vj6NtKE43caBfazlBsdxLbqenWnotcgeLq3tyS8kY3l6lVe%2Bq%2F1%2FFl6I3neFyPIC3BEScTIl1HElgHVe%2Bb%2BSSx8V4KaKxrfvt4Yr0ZSOnLLMgT2Pue1I2C2uSSuNry9unHocrwyP0WNJviHAKbAaUHqUr8sVQ4kFVLOuUfPa8uNQkRXju3Ma1ok3kg2ift%2Fb8FmzGQgh0aW&X-Amz-Signature=c23531748c1d44fc717982d2902d521624e2193f7e3dacf4994bf2dd9e111adb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
