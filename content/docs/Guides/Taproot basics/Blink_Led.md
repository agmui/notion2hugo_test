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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2RLVTOX%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T061115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIBRpA9HWcZQKrnMuog4ENojxlAPkXDdY6UCHDD4JbkacAiBTgh0Tgv2mRtKSNOG0Bjb%2FqCM8KLO0vLPeds4WfgIN8CqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz%2B7F0JnrHozkpHW0KtwDg%2BqZtYFD7EKMhfXni17P0szHnen2lzbbfN0hTaS9%2BYWdM%2FsWaGAhxa%2BnEdvfXW%2BczEe7cEWcAbYq0vW%2FjlvOPKI%2FXYguQ%2B9oOjwjvZjemXVNiGk1%2BTjGZt9Mp3540RSVfPwRLDF99AMgAp4p7qNLZHITrm%2BKL0xiWY365kNY%2FliZT6ara%2FwlxSSNh5P6k%2FrcR6%2F1YG%2F4mwXZ0uuDcIZ19Jo5JN%2B4JSSDGFYnjrOOhsnasAvJsjtNY3rtt5%2Fg%2BWEUFYgeQiP8GGdPYHKx8Krjf6HB8c3eXFA7p4ikqLNUYygNaY0AC9TEBeDnGw1dKG2ikX9v%2BP9%2Fy3QzCNSZX9Ia1gEPMmh%2BcSxGy%2B%2Fn02YgvKN9Z89%2FhIJIcsHgiXhy6X4E2QiMv9ZeqCnUMrcTbInRtnKMuFBXJtMQakveOv7ZesLjHXDDq3Ow3YCMUoJqEPG91QhyshIhj9%2FE0KGanbYKg3q4v%2B4BxrcZ6xdzTscKHHDRFXc4MUFFE%2FO1Gmk58rMZuwBiuCnd8aB2YBPZ1TG3q4%2Bqi8axTPHyVD7HP%2F%2BJ6u8%2FfzkR9nJ%2FmL1nTLujbYTNT37V0LGPBRctqFJ3eA05l0s3%2FNdYZY%2FvWlz5S7yt30TMFDCr0qBso4v%2BBhowrN6AwQY6pgEF6aDDQ9JxN1tzU1AO5FpxNdASky91GHj6ngqBymhZqBDolwEQCtBcH3TtwMXjocO7K%2BL1m%2BxR7eRmsWeftmt%2BcDLoMyqSOTRu%2B1RI3F1PzQD8u%2BD%2BGzxozUPWog8IbPzDyiTlbEI0jlMJgJC%2BAFxMLNcahge7sbdt8E529Ln3ydgytU3eYEvfWl26l7uqqYcKirQSrHK8A8yNAAqmp3gpVe5jaJbq&X-Amz-Signature=9efdfb3a13aabe2ae09802a991d597895acf03f2aa5a46155b78adc954598f58&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLFTXOO7%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T061115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIAWDOYSbOV6KBHW%2BaqVFLsbxgMorGxkZ6YMBJ22Qr5XUAiEAm%2BpG4LdpelSwm9GiRf86ALr3xHx3ICS1H0a7FDfbhCsqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGNr6ptcRHjrLhKpSrcA7ALgemmnh%2F6%2BdgN6BdmlqNH1eSV3VF4vSyhMRjEIdRIFaAkEK6dOfJmzfjiT7aBFDgXhARt9gDCTmOsS0KekMH22yskz%2BY8r7D6dTiHroscVKN1jnkhTuSbcjHdRpsALRePscqVXTpUwljandBoFUulH9TRLXk7%2BNtfRUS6qAwq9wFR4yl0bybIuiXYZ%2BWH4yHqhheWJMwEbDEKh03QeNHqrQQYo1GbhFQk%2FlnhMQFbjlYPI8GjFtFZJeDGHowNDClAuQk34HBujsV3o%2BDEIZKj%2BtsR553%2FBWHZFQd%2F%2BiwE14N9Sn%2F2xP40M%2F4TsmiriYJ7umwvAtAynoMv7ijoEg%2FqV9tAvXhH8yNMCo9ZzCuYjnqN8rPg2sBDYfV%2FZl18zG24jdV4SlMsuYSTQKacKW0roUO69I%2BKhe0v5Dt%2FaG%2BWDFaOPhARzJ1HIZhtn0j%2FlOvkBDKZm48p%2FD2j68u%2B1bijQSMW0XiRd97e9fz4t9%2BotcBd19v%2FOpYzEMrtzFRrGI4DuUaiWr50d7%2Bp9MuqoEurut1EWDSuXVbmdcf1DmdbW4zxbxPFBY%2F7dRTvtovv7hfB%2BnH0WdSpGDdS6zIPVcbprq2hSPEtZTpMUKqLfA3E9lto1wAEAVg3XFV3MKvegMEGOqUBOEyOtvhD34ICFsXyT4cGI%2Bp1Gq8DLMAur01B%2FRrUev30lLZK06E8u258Vyu5fNI02BH7SW6LrAMH34O1Um7KignS7fdweBhVYED8T1OQBPSguEl1UDh76ah15vun7SDSnWQFQS%2FevwoxFPpYwC6LTtmZCzmBVg24Y71ilwku7SnN7UbEX0ON5Goh95%2BUtQjY%2BLuiogvgRc9XcR%2BWCFQK0p4JGou5&X-Amz-Signature=b50149f5845cd59c673818dee294d3f66388d61aeceb73fb75bda7612b496444&X-Amz-SignedHeaders=host&x-id=GetObject)

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
