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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXVCXROU%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo05MXdyVse0W2J9zwiXmwEi%2B4ahyG0FGw4P%2Fxd6Si5AIgAOoouRAi31Q8hyRKn0Ws878tkpyGPFNXhp6eJh2GpO0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDSNkFwGWEJOyRaexircAzAV1qG2EyfL6bcaRN%2FBcnmvBBowLzryKgprW7hD8Kk0BD9yTr2QMqjoxn5JtDXUWWVigaLdGxusH2bl2M16K%2F8KFmIMrEyx7EPwlVB2luPXg5rVmtqNuhzJ0MHdz1MiQMIyGwHZzG%2FSOiM74bFfOzxtpWenK%2F5JmeTn2bI92u9DwFv3%2FD6FqOEokUaFtcmeowmyuLwLItAnXqWqxFKLTt0G4aUXu1HKigIZhienKs8ZUt9tlIuPwrZajg4zzWAEXhk4ATTe6q5Xy3k4yqbXiY67N0MMQvOn9L4vDWNMX9nbd09SSbQAvYenNJKxIlZy2YQGHv8uDler4GpmoHtOhzMP0qvvhlZNd5qJfXwnLHv%2BkDuRk%2BLWAEuRTm1gMYXE3gHSKPO2z77RuNB2or%2FHzl86JL8vu17TUveFYELdesMtG0Sn4U3J%2BUc9AnhitjA%2BcsbioAfCOaRM9VTFHfsKR8ikr5G3MjLk%2FkxASrbFlVIwWV6Yu2l0r8wTYsadYiXG1KuaMmFATiaR6lZaBFfuEqvTHl4Cv7Ifl6t8PtNVY%2Flue6qJI82o9HsbPiTc6N0KbTAPtiekKWFA3ltYLbcWzbyfVLwZ6aE%2FRxuiZ8H%2Bw%2Fj7Z2t5ABDWzYpFg3goMOHoqcQGOqUB34pW%2BofS8s79VYNskca6IJimkHwJls75arWMNW5%2BVgdr9uNy2YtYZ4cIUAtbLRp1AMEAMEnY%2F2RXdv87kVm8AJ3IjI9tspllwSItCGrNc4Ht1wO%2BdYp3Ae05xOlgdHiF3m15kXsyNOHIhu4dt5Ax9GMtJ%2Bq3zf6OjPPt7mX8CM1ZfMp91M1WUXEUkIOwIOy6ZV3GWvHp%2BQTwKkD%2ByvT1Lzn%2Bdcu1&X-Amz-Signature=f3516d9128293443ff0b403847d2495940f865ff01de0184bea2d4ab446d6bdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4EUZ2MQ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6Lraa27qImq2ZwF7eJRzUQH1kqlmcETP%2F7%2F9fThcHGAIhAJZLoxpWJZM0XaXqTXNkqYvADTlB5ExaDOoWG5Qv9aHyKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdXgfx559Hl5th6k0q3AOXzWvlpO7efg1xUOiVT8uto1AMRZa0ojdtIN%2B6887233EmmfZKJQzdJVGI2Jph%2Be9Fgw7kqtZ5dcUvsb4MNLQaPJHnwr1VU8aNtjM53asUIdEJ2tb0IgnPfrtS93d5Rno63X2LwoAvhP%2BlLkDw59hrOkqv4XPxzuN1wEZXHTF4kA3NNnjf9Fk5E7DLJXWWlZp00HVk8eMCvNFDrbhG%2FjtUjeB%2BhxPtmMTgPBIAm9zJX%2FEDF13rbGVIX6Yv7CrRfLLSBntI7j2yZ1NcVcbp6M71ftbY%2FKtE%2FDOBmg0WpB%2FZ4nTCKC4bxqETDHCb1qjRzzJb66605u6y39o%2BmYsuofTZIPby1cdPVT%2FD6dwafjdxO9FVSR8Y7HIAV80b2YqLY04gbkmUWaBrOtSQN1m2J%2Btp6nNaAW7yzPSDyuan1tIWk4Wx0WhhVhXhe8aqjVLcQhCpLn7JLrVYlptUnKCe4mBi0Bv7YSdJSzt67gmqKOLn0R7jmBkk%2BE693W2YMXQKDeswnLED%2Bx1ro90xHaV%2B69Cut9ImIZ5i8buZ6ZF2cwA%2FZb%2F7TcecE6Ty7PEme2lduKrDMLxf%2FnqUFXnAd4ohKkRIz5xr6aa7HYlGf6BxZ3yrHqRk9z%2Fxa01bamsSpTCH6anEBjqkAZIlBfb4LRAt2DM0HMRfYyK6BWTDpz2Fsd6PspHWHU%2FZbiSPee80ONxoDDzb6AACo8vgqsTZbQsulu4uLDN8fFX05vtcVrlwifjR3X6gt8vlxNlYNzJrgW2aRlc1MOkmq2ZffYX8K4LokIeHucJ4ukp2nUcpRms%2FRZIg1Qx3m0C1QD6kveuahsOgaBSUuwU8HnMz9jJ0Dm3yuxlFuVXOTCnp8KLY&X-Amz-Signature=21e2328a47e1defc890fc2b77fc0a74608b77101ad5c049962dfabdab8d30ddf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
