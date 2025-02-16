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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG446FC3%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDRlm4YgA7zPoxBnrFcqafF6UjJNHwJ1s3GGstOvGGaZQIhAPs3cSAAS3E5okCvO%2B6675hjiyI47c5suyHNZnl0Ts1ZKv8DCFcQABoMNjM3NDIzMTgzODA1IgwM6khKXa3AcJtjjrAq3AMi7icV5LqOmCIS0aw3Gub2bYTIAl16wAzwFGd9hU9MmjZoYrP9m1WglCEKilS2A1dyNf2iGzmuRTz4x3u4xzlctoEwsIMy2epmq5GlAfAKm8Bu40zEk8XQvdJAv93lqb622c9ldUZDdqE3pjLavUoSPmREQnKUH61gF%2FXtsoBhVTu5aLsFlyc8i7mtKW6P5uJj8G5XDVlO91WJyI0CmzT00njdD4dHFQvdHNIkA3wEcDj6koWkcgZ%2BrPebxUR8m9VboVNyuoI12oZ96miDB34fFV%2FbCE2tIg7nE91l0qDZ%2FXsR6TZYo2JS6uqNn7XN9HK%2BesLCROnKWf2QkmRecCh4VdNUgy4x%2BNFG7WyjUG6IalkUFWJjd3bdAHSTKdvzPg5PusjNTrM3Wjk%2F9m4hGrtJlVdHGsvunOGp2Ru6jEp1A1B4AJmh3f2RNJbJ7lPsfoye%2BZVLosXdmLgFwS%2F%2BiqT8LfY3kR7xp3F0NxWhaqrrSvpsJfPZQB6N47UwQsJNY3Bux68TpCFN6gBRNZgx9Y5rzR7k9HmZi4jq6ok%2BN99LRA8cbVOYFLm3oGn4xT1LwNC3Uo%2BUBgncYDzosSMTGJRE0vjg2MuJt4gbRaB7c51dQ09fV7Wk1C7xNJOSijDH%2FcW9BjqkAZ5TGIH1X0YbyiuRdQpOlQR0X%2BG62WLHBgNUMpDuo4o%2BsGOmtjlXGbHtcL9RPGo8yzeUxo6deBO088Q9eFc57EGceE6RTbYyZJ3UbyUbaW%2B%2FRNxHkqwoPMN2sFC4frfHl2t6FPBVjm%2Fehff21UmdBl%2BwhyT9Ul8bp8A3TMeL1bPaCoIj26mR09wdJ1orFtveQ1zoQRHLZL90sfuUSzLaYO50tZAx&X-Amz-Signature=24743b29e16bbb19218360ec94bccb659ce825f4287d66da5c23caae3bc46ae4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4BZBHGF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHW4ZOx8hxjD%2BVU%2B2D04Ch9kHtjpnvBM02%2FLwT9PpgVLAiAXq4I8nipKh4Enbu2FLTSFdf4oH0odLIredoMOBtWbOyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMHeag%2F7Eku8VSpD6JKtwD2bK7vdka1M%2BSpH7q31BUBVA1gIqhDNsaLgkT1SPPAl9jLP%2BoPhdcY3VOBWvDe8%2BUC9ILtfgVDhx1XjfGpiAUEUO2vFKLbhasPK02SLTGH40GLHBNSm%2F%2BjBDUQ61Eui0HSkvcqWKA59WV0A85EIxYpcj1k3jbs6vLoovHtHuQ7seVpRI0ik6PuxVGO0DE1TJiA5LSU6l9v45FaoQ0etZnXO3mD4gjgLgRLyFN%2B6yAbr4g1nvDolZTiRC8bKOudbue2IIxDqbybG4Jgnj6YB1DUhmFA%2BWX0pcFn%2FNC3vGM3Fl5ZBc32566onbDuCXFCnzDegoVCuFPZLLVGNvyWQS9Ca5JpSgsNse%2FwL032Apube108TcTijHj%2F2Jhw%2F3aN5rvEIT%2B6znbtlmdsiFnulyNAI1GbpqPUAJWYP%2Fnh%2FVQfXQ2AZ0n4ki34nAzye3eacFnb8Q%2FfRV8UEpLKxtAa9C%2BimD2lSKB23ZzZS3bEKz6B%2FjiXBUqk1tfvC0uT9%2Fo0X5JfufV6Y2vE3Ru4wK9%2Bg4mLYw1N4u%2FMUnjm9cVhNol5xs1QJ0uBoUBfzaGyAEnrxiIH%2Bo%2BdirduqnFWXmjXVwKIns8Va2LbfKfvNP26kKo1ueBoVmTCiDIxu%2FxFhUw6f3FvQY6pgGGfkFilWUNIXHKqmykPFyLDhVTcYOjdmEktutzpWB%2BgZ6KPZBViebX5vB%2FYu44B2VjOj%2F7mbiQjKdY%2Fqus8pEovoPRJn9kxtqiGBvLF%2FZW2DAlyrXRa%2FW%2FhaR4MuRkGcAkq0J8tAKxvXR6Yi0OM1VaBG7Nv4ev%2FGHbObLek66MOEIDeaUYypBlFYmW5HQ1kKX%2FVn0ZUKMbwKSiKzfKJM0qpbuXLjnJ&X-Amz-Signature=15dfab5834476c6da8a9582edefe8eb453a25829f548f49a7f923e906ed929bb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
