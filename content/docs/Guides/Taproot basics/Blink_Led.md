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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VV7EKGV%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T004630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICoEC9xJ3EuLwvjuu9H3V7WvpWiMHZUZcQTtCeJFKcCHAiAXiwGXeCQ%2Be3%2FOgOh7gg4jl3VfZQ4OKCdn63DjAVnMtyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMovr5kSZa92D3OnYGKtwDQPD3aa2EtCHUjTzBp4KPd4a7PxkfNJxV2d2aMCUPyx7rdHHsnWRSHYYw9AKdL6G9SM4GFe0%2FDDk1nP%2B9vGf0qTvqKEq6%2Fm4aiY1rrHnpXwQ%2Bsn8z%2Bw9kfIijAnGTqtupef0sjOo75uGzU58CdhiBowKEWTE6d7cXZwGEG1Z61gh9%2Bs15Y%2Fm3ZqsVrHwYDtHkKSp%2F8CGOZHNC%2Beo2EafoFVpCQEG4cRiL%2BeWFX6kOV7g%2F7b8wfKP9OZ0rfwcn%2Ba9eaPO%2BFBlj%2BQUCN3YTBgPa8d%2FHHfUMdGFSVBlMys04GXiKYDe4W3DXL4TAjau5KNWgqveQ34l6uPBJlVhtokFPnL7fkuI5dZMbCCv25tRo3fBHhRea%2BvFgb%2BqKT7STX6SX1AsFJRvfaC1fSSWSEC19D0v3FcbwZlKUmyomMJa0jEi%2FvJc59T%2BS%2BdmjS5Ro3Bcp6xAASNDoQsH5eq4EUVgKzCPEmJJwfQZzy4obIfP3Vs5a5KWDtHQFCiCLlMwwJSIPLKi0ZgqK0J2z26OBO%2Banl0UHbJtJtW9AfsmYV2NW0RdUtONqistIfL8yPtpsrUqkl5Nlq0yj32vtR64kLUKQYw0IbegAmEiQAUqU9x0FkhkZIgcez%2FXPJA7EackwsPSGwwY6pgEMjvfn5CJbVX%2FvdI%2Bvm85OBvje3mXS6gaMohS2%2Fy2EKMj23u9vcmIVX9TD7fGEgCODiDlR6V6rIK6AXZlN%2F1zYbXsepwI4uEa3f52Y5x%2FCTJNq53vV8hHHYMdTWFnt7KzFZrNsMFtUJ1XN2RjGA5wg4TDicGJKT6VcNLpgugMBiv9tMoHfVbI3VYy1sevDm35MlN6mWX3n3paSjS6qYsbrpm9w7Qw2&X-Amz-Signature=a06ae3db2d4d43fa30474210575d67965364b2c8e0a47a40a64599bfd8b2fa29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD6FVJDG%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T004631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBkKTYc0mokuuoN21MUQ38ms2%2FJalGN6EUhYSy58txgOAiEAlPFO%2F0XPk7n%2B944Bxv6%2F2C0%2BcrJibqaXcdKRE6hnvh4qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGI6OJvgqLq8LwZvircAzyy6duivnav%2BismHTNXCh0%2B2MZxMQsxlABJCCifZJHcz2kHY2HUZ0uhd7%2BLbMN5u4GOe8ueh6aEiO44uVqIjonpEVQsQKL3%2BJhjgGlQ%2BI4Je6CMRDbK6n%2B3V5XWllSNdqv3kaeU32lDT0s1PY4xJ%2FeXeeb796yj5BGJWfQpodvbEL7WBD8IqdVj5ON%2BXG73F1ntB5nD8xHtw%2FPbwbFLX4%2B0IiptuCoZ6NIxMCcfa%2BgsfTb6cvQ%2BQYKZmbBdHvF5dq8nuYOMREygPMznJ%2FqMAdGdqlhE8bVQ5amO71lbFZSpmpWvuYFj6Wi92Xm%2BQsCW6%2FuzVc7tNUAV7gNSDyBpxzCg6JqGAYUeNo0P8vRCbCI5vntZiVIYLoWa%2Fy8k2bQzmzRIqghG%2B%2FpMJyyM7cSeqabm5fAmf1QZsISxK5EcvvHXo3E1gc6chpAZWbv2SLKuO2Pxy5hbY2pwiEw1N0BvYCh5VdQ1bQx%2BPz7Bl98Xgzpc%2BMO4HOCU1ReYnyOFx8MF74mENtzA2xy8q6PuCfrhK7J6IRWcHiV270%2FSzFNcjxyGBkunfhc9JyDqLQhv5SnKOqzWF5YA7szxVGla5j9Ly6pjj%2BMvLt2XhpVbitVvlYG8buH0bDNz0S0c%2FltdMOTMhsMGOqUB03bufxKvN3dq%2BrlpvuCn3HCmYL%2BF%2BbhCZ3nV8kiEUuHvTipP60VOZM%2F3zsW4Ui1hHwKzih7TLRRg1hmzS07zFWSbAAyGgD1g55WJpFtAjWzSaLVzY8fgsOGPPKh5yPvNgpqVNRUeu8duUOtBaQ3wKn%2BsJvOxC4whloRv23ML2N03IyWpBk7Eln9cY%2F4uwdwIJ0JNX5eGeizFaBgi9eJfrxBITGW8&X-Amz-Signature=ae16c06092f6408cf6ad808d12b6e1ed2c479dfba749a488c7903de9f889f502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
