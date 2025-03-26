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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZM2ZWYY%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T181119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYzSVQrjfTNh126R%2FWcnuHEPf5mhK9xb2CD5oHnHlZuAiBVSspRNw%2BNtqVP3eL53zirXmiG%2FNZWgbGp4ametE3SZyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMMbZkR3KGWl8%2FFI0eKtwDMWhq9DFcSougIM5WZHMTiFK6G1BTiPJqcaw%2B8447pjoMeAHPXGFK8hGAkWFy67%2Ftd65DWUP0d6zW81rWzo%2FknzFRzp5KSdkVWER1cNI3n91gT0tynbCStRT9tuW%2FZCGFfdaQ0COmked6ZxlgSv0TOKEyjhJyDCIRuHPUxLtTW0Ons1Qb9kYnzl0rAsQt5zznF5XIPETsdw5%2B1KDOH9GpvTJGmqKGId2V5suQBfhqhqbFzjy7jL%2FpLLbGV0wuWrwm%2Bw3G0zJYlvCB7z0nHFGBjZgOV%2FM69e1V85sI0yr8OebCYIcxgKiwlFZjB7SsWiHX%2FSbZA6OJ%2BcCMRPecTkYQoX3kep8OlfDTA5PHZ9HWMQkBdSZbp7XP%2F5zm%2BTSZMQd%2FInyYO0lxYarfzpEVO4ehlsHkWHJe7BkP2TX38Vj9pDC%2FQUJOnzqkj%2FjzPbHciieGkVEj9fU9ff9MCUCipwYYMasj5j9fJ6Bi4W8s6zhgiG89AgBrl4Dg5od%2BotZBChEU9lfKqAp1kLVRUM%2F8EfCgQDQ0o2v%2FoatTH82dzruEodI9oeXCBU%2F1X%2BVv7VUKtviTTUe8HbtQ7LlbzCPDgjoqZ8gvsy%2BqDF8HDeetY%2Fil7N1PoL7WJUxx1B4osrwwy%2FaQvwY6pgHgkGX0zyroczo%2FOuavPwl1j63FlpePmrnItLsRZP%2BlXU7QZb1WhrN6XTXjl%2BDaCZRIQu4E7te7JoYmoWc1Tm%2B9VDdhyzkmC5nLtUKe3SJdNV2cdLXYXaXIt3dpEs8UVImt%2BuGPHx2BSU532cdp%2BT98v9BP%2B83yeVkdmz5KKr%2BsKjbRZTYolmEd3vZ3s7lFFmNc%2B%2FxiveCUoK%2Bla4bsvdGfhhBpRX2E&X-Amz-Signature=a4961e975a2ec55b7ec9dc983b1ba23a387a957e8366cd4ef5e7e3c0b78908d2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7G3H64R%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T181119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClErJaP8x%2BCDZMfO6P%2Bfp6AT%2F7L3eWyFZXH9gwefhYFAIgEl1xUZ7SfjYat8irsBg%2FAKhksX7tM5Yn80Q053oplSwq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDA0pmIsADEpE5NTKEircA5t9DPc5Yid3tOv6tr4il6lVmxitZcloSGTw6Ruth%2FQ%2FjQKQYsJ7DXifTDDDKH3F1ZjHfb5bfy3ut3bHVBAhELb3msDswdn7aZqdkubBpbtWCoUNCth3DCk33JcBrrab0HucXxooKjmV8s3%2FOSOKN6aMwfdmh0%2Fgm%2B3AKkmpuUu8LuxFMwjpTo5qxYUfXkaftpz5d6zaJXXOMxqDGk0bW3PIE0Cjzu9tJYbU6jK1KnFnf4dsRJJR9f4u%2F9nM9mTunzYz9RN1Uilmu8dxKd1WjfjPtKRDCxrpfFjISYwPXoImdYHWz6THG0v1cmat3f5Af8REy7%2FfA9YmTFSITJoDYDHVpqM3%2BNDYq45cGlwZAjWVGerwW1hgdA6eFk%2BJJgEod%2F3R1MyiQX%2B97qVM%2BcM3bUfd%2BzjDOZYmPai0ZoIkcdKcnfkv1WQTiyGuD3ImFtwuwRa%2Fu6gEPNVw8cLZHvAdVr%2BsJcq1ndVV0QVYtehN%2Bh3GyxLeoIDT9bL0qVUBp5buQ%2FZnLKZmk7cRTcLpf1t9S7gqlgK2f6e4zjfB068nPEUBkOxptxsJb0ovRAnW%2FoW8MHPvbpsuiy72qzkNYlltNbizM6j5vPkw7dnTZDLINIp%2FtZDik%2F3B4BgP%2BULNMMT3kL8GOqUBZ7j5%2F2VkGooOByFAI2WHjAxrECFPgyC0HTWu9Aw98%2BRH1MWDsFO4sNeDDjHhjWgmNZUOxiwHcGg%2Bn1vfKeQJbNPuVq1y6z1zM5Pl0aAPePT1Km4KmpOwyV1BsMZ5lb5Gyb%2BxW6MGHrVJGkGi7T820KcTWkq5A4qaZP7iKwE8ptdrxklr9Rh%2BaYs%2F9mNqp5bb0p6Ixx7zmf1anrcrc29myTd54xmJ&X-Amz-Signature=2595363579e49a41f25556df3a76370afe6ce75d0af372866bf2a3b42901be7b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
