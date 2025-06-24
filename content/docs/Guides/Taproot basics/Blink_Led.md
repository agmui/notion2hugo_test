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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUFTYZ3K%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T091118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIGHCo3j%2B6UJRWt2LSGxDfceFeIAyDg%2BYLwxG337JSUQ%2FAiAEuPcDmWEpavGAI8hlh%2FiwCIFuoixC%2BOBVR968XjsRlCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMYKPnRQ0pfDNiHssfKtwD2fZu4Pfz%2FR%2FrWL0ohjHOUf0tzwPrsGlMGRVKFgmV7%2BxfpV10iPM0a7JQrGSUFwyChQfB3b9q5SBkjMwW%2BMRu8l0tTdkFC7ortjix1hXbY63CD1zV8J9UGlZd1wONAH1j6LBEY73MHLdCABHLYmIYLwTk5Nt1JZZc05LUP%2BhWAFz6v7CWvZVplyNyWNdNQas88u1YdAiLy7%2FEWvKfyUcIDhFZS24wN1KP6c%2BqQCxSN1tXphjMoaPpMDV1NMmGdsI5xvCT2oJOHwO4nCSSD5N7kskQBePuzdWRo1VwilV1P9JteW03t3x%2FS2G%2FNQ3jWVd1QMBmRarg%2B1VoTSq6RdGulXLxP2Ccu6s5JflyWBJa7GQ4dL%2Bv8nLpYlMGweQyNHwoeu5XTmZp9fqI5n3PUJdDo6x8CTaTlIXFosFV%2BD4fTMugfOoIVglPVaZ4FD7mkNjouRwvBVO5nx7W41pntqnzQwmufqdS9wEemKRHHltp47injVHzFXpkfH60x9WRU5nn8e5DzZe%2FxkjF%2B3a0vJjkZM%2BvB3fo4YNZ9E9EnDmah6iVOY8zjZTtd8m3t1liui0BVsbtmEj5MzCWlvamneAQAVSIerW%2BxgdTcHw5BGixKOTlvnoKiZPuoTJh%2Fa8w4LLpwgY6pgHro0JAV5iUW9Dq0BKBtOffCzekIdQk1m7pZg%2FF55mrGm8ujcXzYJbmlR3YEi%2F0BCMcujmvBwoj5%2BAbLvWAmNh%2Fct0M993UYssS38%2B7Zj1OdnLHAEDCUJQXYT3IVaVQhU8VDTNLlbM1oPmBnL%2FPY5akp1DFo5UVGHsSKfUl9FlHJ2MTA7vnLMdxUS6u377qZ%2BevCJsVuz2s7q%2BMHjV5wKJurfyz8wiM&X-Amz-Signature=c76c71a2540616da26b1c46182214d08a5c675784787ea2519f1d65ef3863cc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUONSRYR%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T091120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCXuoQtPySZAQOfgtnjFi2fS8vfWWIWwTqbOFFgkc4tDgIgQU3XN8gnlvSzOe5a4yTcdbcqe8OdH%2FujtSaNXpnaLRgq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDPu%2FIG7qBjEuYgEHtyrcA6fGhrC1MqJaUpFzi%2F1V8q07HWnueEMe82SAnxsqTep2rjE%2BcBXlogR0XOizAs6jGdpw%2FtWB%2F6ji1e3kwkDp0Fhn0tZKDiHvBAH1FNu%2BsKP51a%2F7Fv%2FqW3tgKI1JpvbGY0f1st7WNaNOBC6SXpeafRtO3ARWWUk8PTMPeC%2FNp4VwWYbjOOHJPpeadJyW48zn3XmMLNJvSaxxfNx1ii2BTIMllywBDlbOmS0ADyyvu54QwWo1UVLfQs8wvLHiFSgjip%2Flzit%2FNuLD0iPK03g6AcKZADKU0CTcGdTQ3k4sMsMWaYQmh8lCIYWGtsEHdYiXaMISY2CEOrbC4zHA9UwcTPm0xw7vPbt1sepMzZPcKGyZRtbsEHsX0NGByo5osnO1WhqxzesYXzdj9RQ8H3ogrqU6JWw6PCuP76sGT2yOs%2F%2F%2BitGuoQ0JOzRyWl9UF0HfUMKDOPnlnm2EnPD6QsJ0BCmSE%2FaniB3Xh1Xw8FhVD23%2FSt4Op4l8570wWclEHLffazmH8PUjz26DZ7XsNKy4ODsGiWbC1%2BWUzDNf3%2B8aGq07OG%2B0GcLBKbTkaso24x9Zw5gpDDei9W0Qx49Xg6Ly3CaxiWvJQ5e7khaeZxAYD9tQLL8OS97oeAcXM9QrMJaz6cIGOqUBTE99mZxDm4djj2w%2FeY3%2FE7lvdRczg56F5VraCp6F73KGKa4uC5F0htX2CEnF5OvXH%2BG59AXtjvQE0EElU%2Ff92GAYwSMHjs%2Fsj0%2BQ1BWQPJre7Z4q9Hwq66yWQr54Gkq1U5C3PnvX25cuMHB0LHpbtgKiVU6%2BBtbG%2FOhqi2e%2B%2FXQUFsFx%2BmJ113zIFI3816XtTYcZ6fUM%2FAJMXUs686dL%2FH11NZe7&X-Amz-Signature=45a010f6246658ff67a4df898f6e092629b211f7478f115ce8397fb7e65b32bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
