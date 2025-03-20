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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AGIW5X2%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIFHSs%2BVKX%2Bl18ey3obtOSYmoDRUHoYcm3gCXYsmXybahAiEAtAEu9TUexar6I3jHx79QZJn%2FSxEX0ZGmZDlNHeYGa1cqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4qS4dTIhnCC5d%2BjircA6utexEiy1S7Gk8c2FhcO%2FZkgK6B76bIXvi4NbzkdoNfUdTL9vu99CFncCNPNOFqBu2kjPiL2%2B0O8WLlxg1Kwh%2BwlVrXUQyNkreOBhYp%2FrGuQYsggfJvodvPnsgYYHeLXppgxXjJCH5qAdvFVNnVKWpvZXGKHmyVVfVvhi3EVMFmy8F9qu5orqw5je6s7UErHiAqQRzmLq%2F2JgDV6AhV5xN8cv9wwi3Z6myT%2BzEq54BovmR3YyUrCvmEH9s2HGF7iG7pNNWLusLiTNe6QHzsN8iJOxKevTpryb%2FUHzXA0IIkMd9aglAAIyon2JFS8s1rAb8K74gcGjuRX3GNgsvON8YhQM3%2FUqWaQW2PJaV2AoeyjX6CANiyJWF%2Fd%2FccyiMb2Z0GvLEkCPLEmysIWohR5ZniAcoQJpO9yNSk3cVMaaAQG9TzclgvXp9VBRWl4p0Payee%2FyyqkbuLnR4guVzX7xM1oylWSuYiHvqBz2FpspW4fFtEfJ8Acn5X%2FRnWxUv%2BSyO6SztyH%2BWSSNLGk8nGfGyfsL8%2FRwvChDeHtqt0kdKKGbJAz6KGSUczzvGV7eg7M%2FrfL9TJX5CDR6vqzUf1KCOfZmvTGxKcFUn2T4pcZMkPpjB2EO8zhx0u3OscMNen8r4GOqUBjT2r6iWwJ7q8yl3F0UK9b8uVd7%2Fo6EkX7K0SFtwKlmfPhfEa%2BYBvXXr%2BbLkGR7UHspHVLvxfdSh0Efz6s0rHQUB3ul5PlaKkhQlKuHJrkgV6YaV8AbNmqFxwheoARYx3IGThs%2B887%2BlHbXuJImecyp3cBMkqXfxtyjhnyehTHligor9Oziu%2FwZlc5sMrtL7%2BdTX16KgmcOfOAavvLR%2B9NynB8DRi&X-Amz-Signature=a55719b29fdf23f402c3c16ac8b9c551249268d807b1fe9d26f6ab9bd1a84f97&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHXNOHXH%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCfBOgr1l0bTsSIxmeX3ll%2B2vxZXyAr%2BUjZ6%2BN77xkgCwIhAIbQ2wg7rb6Cj9qUdkKwctKfEZvsSbfl3KbLiiMUwx8RKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzF5I53B%2FJcCbVtXwoq3APJTk2%2FU1UMGW5IzPpbbvXbwQlGdCntLw2VN8Wm%2BEVLWAHs7V7Dwxu3om%2BGhkSM%2BwFr0gRBCq6tCieslsIU8aeFgGFW%2B5hGVOdqgwZt8uALbNge%2Ft%2FS6uv6HwAHZjBl77BYL6piUWTYbbjuD4s6ohpEvMl6rEVtKBhTM%2BlWV80LHDz0OlSi6Hq3g0mUe7rgtUhTuyL7Apyb1gsHtQiajNKxvyTMXrImPX2u1%2F5DldRGnhZw2%2FM5tmOpUUazM%2FNqFHCt0VAAVLIJ%2Fi3pDXx%2F%2F7rFZjrLHtcfsBC%2FMI1MQQcZJhCK%2Bk8U0for5DIU23XVPwMk5WMAOp7SiVXSrVaW4l4sIaaNxJrvJXuFIjl%2ByNywWHIiltqBhjncK9PU21A71THplYRS%2Ff6rcbFLFsv3PnYZAlmkB9XD7ZH9bq0zq38yXVHOINiBkBuZcUKDCsZfeMsEHPUFkye9UC%2BOSancEu%2FtoHrvTlF2H3RcmOrYl%2BRj214exicezlcFwIix34aEQyYHTyI2lE0k0rWNOT9EOjQ7F1nPfo6scikDlLoNOzunPwZ4CUbWLPqI%2FaN7sZ%2F4YTjjS73glevVhG9wwnIzYjIST4uFd49EzhJdjM1UJyBsRUjksHMDLkE7U57qyTDkp%2FK%2BBjqkAfXlaC3p18CrPSp4ZyRG4dUq3l5KYV1dTQABVCkTTEeBGAd0E5hDkvHQhFQOw2eNqDaiqARg%2FVyJyqUSmQdTrMjc0ywQHaoFhiZFPckiOtGY0fIwgp%2FpJ7UUzcI8yjIQNsImtonwWBvpgEHdhb3ygk0KD%2FPIwpfoQIh0p1enpHPtwVwwDa8hIfMj00mpFk1DQdrNuXyYz0UEee8%2BKCm%2Fzz3sFgvX&X-Amz-Signature=71c54eff3d257a50c493eb3769d0b50a22afe7db59b93d500279e1e97595cb72&X-Amz-SignedHeaders=host&x-id=GetObject)

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
