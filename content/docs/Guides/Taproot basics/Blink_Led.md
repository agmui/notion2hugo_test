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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYER6DG3%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXhm%2Fuhbs%2BVHQ8JPjZNXCLJhnuZBXGus6yF%2FMeSr5M9QIhANuY%2FGSVNGlksKqZiMFfhrkBNC8qiYPICKdGKMWt86jaKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSSrlJyE%2F3syMWcQYq3AOmMS%2FMsSIJhmE7lNm575HF1VeWH94gKbzKZSaNmCq3R%2BhJWxCGT52up0KgAuoJCbefqY5jLtS4ggeXFHaNyUKdABpgXLEEv9UCU0gkKomQk6jEgHaD2%2F9yyDSTAyhjoOnRuKvuOF%2BFmWSCNyLGC%2B9k%2BGR4%2FAjRduK4OkounRAaHSxkziCpUM94Z9tYEhL8bt8iWM4mgjtvAQyjzZRrMoLD%2Bbjxryn3CYaJJZ2HbtVEU%2FUNinlUtce%2BaViPodZ%2F3cUptuWKMxK9AeCDsTDi1whYolHnAFXKhwmo7m%2BCmPus28YG5F011u65iqcxJH0A4F8GawRYOEAPPNVnRPYg3mQvbBtSQYprqCoyneOLttrb6T8yxPgMjqh5DiK0J8gxi%2BcoBHEXHpTjTJkJ%2B2%2F%2FIbywDUToqMlmD9PnrUWYAY%2BxiQSpcvHjVBPW%2FFuyxqjuieuTdEvHAVrw6HpMBVYgANGPBzb0ixWjYsRGZ2UOITtiHlr5CpL45e59SzDRMXj%2FwHHqihYUV7wEHWulK9ozRux7Ur2Yp6xNW74jVUuJkNibXS0Lz62fTP%2FsYybGkGIIdZuoxBVvqWeutr%2BPyWTJsWjKDeQZo9OCuYdE4wt1SRKZ%2FLCnp2iHRzCCKqCUQDDEg6O9BjqkAYOh7tZ3dx90WIWOqaFZcsjcevEhtZPLJJfs29UMkdakVJwcsshBzZm43ggFsdJmkkKAAgG6K1PAUzmsbZrnE0OVvVv4pz0Gd6O%2Fi5cDGR5IEMd3mkNa%2BJwumXPl8mfV7TbhdSqgFBHhTWaxZnXG58GcRqHdvIFimJQAH8uDZvvGIjsDX%2FW3WeGAHskkEk9RaeazEwmhG2cNdpNfyd5Sj36GbmkX&X-Amz-Signature=f6204742cd61ae0137712419a13e775df9f93ac5684c6969121683e85a4b1384&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y47KZMYQ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJxjJl%2BKA5I1vdmStUl0f%2FSh9zpbO7W95mq0QAFQQEuAIhAJb%2FWAO%2B1j%2B1R1loHNRLqmBPChfE7z5X6UB0Sh1ZISI5KogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGy3APKJs6WZOXTUIq3AOfm3IaN4yJuB%2Bee6jGhHSkTcAY3KQjxvKrM9B%2FUmF5c4vcoYVbWwL9FlFzkRL1IKo83cHed%2FRCJr%2F%2BZrALsqYzTtYgbQzUMS5Q28Gbx%2Bp5YB9G1AgVUqBzP4bNHpw%2Bb18HVrpxtWdUTVOW6%2BeppJeORHVkzPtL9APgkQGxIl9Xrsu%2FGKi%2BRY3KWsf5ZlGCO8GtPcwL%2FVwJ9nntVSEpMLTOv35fGvlvxPXP8sKo%2Bgu6mgEjMm%2FSJdFZTUo5rr1%2BxLJF6ZytQo4CT%2Brfx9C0XsKj%2Bp5f%2BsTEhdOI00h3chuVVgZ%2B24kp7koJvZaYofvqDchfig49tgLBKrxCWQQvhwJlj%2B7omsurV3qeiel3dEpggpKoeWxBvAzsOyvD9%2BLoQcIkbscg%2FpCMqNP7INgFLiTa0XTo1Rr6k2QCTf%2FEZ9w9zlz%2BeNAzKogLfa5i17i61oGylA3eIbMs8U4QFqzjyWaWoUfGBL2bR6nMTC4W5oYq71ya8KDaHijgj6OkgiWgp%2BVRJzirROxtLVsmVqUPaLl%2FAJHIvfaBGP3zAvMzdW2i3vhfQF0c6TbnzhrDnubFOw%2FuFNuhhYNo%2FcfC09sctEaVsN3Lfq1N4kA5v1SDwxxEjBmSeww53DTz%2FWGgrDDahqO9BjqkAZ7c3GlxaINLuh89Hsu3Q5nl%2FTKblMmHC74hpEuGg94zWRgJYJZDNC83OTRvm0ywdC6yjioZb%2FAZkajoie%2BBOOJY%2FEDG6QRjpEVzQ3d2584193LzsCUuh1gyOC6uv1PI1MhWpZSWWf097LTayYZc3qMsWsPRiaCerb9WDGVvxeJ0s93Fk9pJoiT2sOhPISqr17AJAmnxQwAzEt1wBW98KphLbh42&X-Amz-Signature=216a9a2f035921dac7abb8056b5716c5283ad6cab7a3e54b8c570b26635b5e85&X-Amz-SignedHeaders=host&x-id=GetObject)

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
