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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNX5JM5K%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIHcyabkPYmRI1oZHhYB%2FO8blgWvrOpBRUWPJEbls2%2FMlAiBW7OCW5SKD2cVz2ob9%2FWKNkpB6P3mkyhgFel3x2FNl6SqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsrlm94evJ7hym74OKtwDxmzSgBH6f9llQgGQlQDNmJ5tM5WNRPO9fgPijLTilMkTDvMaCrDxwmrYkA2XDvDDje58vOfgmWGcePrKgI2FvQvjhPJZEAoIb3%2BlGJQXrpdMJ99QYG23yWCdL2WFEYEH4fH1T3uaHh9Ll5Ks32GuiPVwF3xpxNVRqrtSucs%2B5QHbiTghSrOIEYTCvI%2FtKNu9K8FqNQLxL4DFPUqJqDxVDP0HG0G3p9N%2F3Gj2cdm5IBCWOHLQxecoswzmpHhdOsUuBw3YbdRUcCfzES9g5moG%2FluFmJwTY4OOcR9UVFcE6SiHdhcP9DS4kA2dyJbc8I4c%2BqoubFRf9%2BocqtBB9sGzgNPQ9XG1RMKABMmYODOM7USz%2FJ4wMAncjnv425ojaQ3pwJ5EU6UTQ0g5JXcpOLNDJW%2FR9OKKG0FQ9alYN0Wf6%2BdMtzEPFoy7E12iavdxohs1RaRMRvFXF7u4%2Fn95RsGXP32SPn6Pcts4h8S5VIrZc%2B8D9M0X6ropvfVPuQqTbDxLbkAPm0u3EStdwIYaWRZDo3nqYwaEk7azezmFsAdPM2XAzOxh3FLo1NkN6XFLerHVvk4HEhZUtWs5vkxWhr8gikECpCfMSpiCSjJaVz2k%2F2VJYyc8DAz5yKDgD%2FEw1LfEyAY6pgE7%2B9bUvj%2FvnvROKWg2y%2FDPMAwcECWw4CO%2FLTHPp9CGjfSNOD8tLcSGdThRO%2BgBpqtADCLqZ1agE0aoIgwdelmGPqEHgVXI3y%2BgPuIpcDfvOxtFjl32ncqOg1aFy8DIiYThBb2kX%2BiT6fgA9Re5CZMHDkUFnphN7Ftqyjb%2FXnh%2BnWwVLS9n8CvxS9MNOb27%2FxzXehmA6YaoDPDWUS%2F3TeVnrM3kqRQE&X-Amz-Signature=3a87d76d6fb0d0e6de5b0d5496588f79744c1a2e3296efd0da18c0982f64b598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKFHDEC3%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIHYAaJEc%2F%2F%2F3M4fEPReYpAQamGp3DAqjp1LSyVkQyN0%2FAiEA7%2BTZQ1n%2BUEVy78ubNeJwsQzc6J%2Frky2iXhuJwfbf5VYqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGzAsb%2Blj%2Fsen86J%2FircA5xn%2Bwnpc3ZgOcqTN2C9GKLR9LvstSbjDfp9QeaI9cdk7QYfTlDllcK3olmzxKbdZjeQ%2FU7TfM%2FBHi595fBEfnxgXZkqesGZvfgF25PaXhYnULY7kVsop3E6m7sEYkTUlYkp6dpFTK46hMGReVskQ4HCJ%2BBuRYR1BemjE1eombMpeKCE8X5P2IL%2FNoCLfUaiDBEE%2FFTvgYEgN0NzTlFKWl3ZQB6sPEpZ5%2B0Z6du%2FqZCsJ2I%2FWdWt%2BNlmD8jWTmk4m6AE%2FNHKmqsVs4TBouyTuUsuoQNyFdG%2BlpAV8QxYpulLfK44SIh6NH5yrJnZWZALFhJxyZQasrW0NTVWqScyHHQzht65gyExmcvhSOhuF6IUboWS0nwwXrb929Fghp0CRwvnekyy2dK8YKs8j3egkV%2FgHYyqsfDmhKPh6XpOQKDcgL8uIUq05S40spOubfuu9RkJ3tvP5xfbuooEJp%2BwAZTPTnrIsS7YeV%2BMxHvZ%2FI62eQ%2FPKpk6k4uwSZVqYnuwS1t3ZB9BpCN5gLKz6FKaZHS%2F%2F8KkZgokbOooCBgDD5EOvqcsqSznWjs6%2FRQyMY8N2isE09ZVcM7zEYJR82IUWcZKp4VDH6Er87XhZ62CyHjPSSUy8Ds7apJXuZXfMNe2xMgGOqUBqNjrKJSq3Igze%2BOwiRdeIRvPAHzvKEuLhrstKSIZ6o%2BfFTSNGkSuiHk3cOZBXnmbhATMZSfibZxCK%2FJxp5BaCeDFniEDvgSJN2tKyFmKRdz8PHTX1eHucIGJqhSPwRwJapRAexCFnyoef9ImgQmiIKHs0MfxZ4zgFx1QrSbnVb5XQvFufAjMqJuDtXye3nK1wSeWOKxPJDl7adb58qlwH%2FiGfStZ&X-Amz-Signature=f938b27535a78e5e2cab3743894bba745a820e355b3683491010d39db2aff8f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
