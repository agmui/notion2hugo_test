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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QISNB5SG%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T110139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC3ujTc%2BqkRGrx5BzooygdUiKiP2Kk%2FLmF5HSbxdWaj4wIgbM0wWMUN0m%2BN5u9K%2FDDoTqyTo1rX8rjb5kzWzc%2B0GbAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDLPMIoLZ45ZcmE8%2FcyrcA5K3WFyvAougG20%2B2z%2FhY7wpoKoPD0pIJNufN6Q6%2BkaQIhTrVtc46K1AiEmumwrSYuu765jd%2F01U04A3%2BDD48uEBn1m4eA%2F3VakA9MqijhcyXp34WfMtepZCqzYthAD%2F%2FQGTi3NVdMAByssUCIUteEhvfWt5GuogfG6Bqz%2BKNMbb834RoDEzCXxW0B4pwcTff5Je1CVUzcOES2LQCXGwZSgIA5AOEuJFhUCQFLqvH0JPJDD4l9AU7IkHRnMNkgwNRBahZ8O9G0t8mkrSauoOTFtCF%2FX3rXzyTrO1C5NtQ%2FVg4S%2Fxqmst%2FKt5yexToRBRucoWFlcugzDFXFGH9Tz2OZ02SQgRhvzI0v7%2By%2BpdupBxaS4NsMkjPbw%2F%2BgIfF2466KhMpWvV9RSZPgRHlUX3rbzMBjhR12up9f5r%2FMEWUJIQf3ppJ48jMqj2bAoNNF3rmHZ%2BgoXFCrKcOzHYycHW52%2FhQjGWUIikuZ0KYra2rQlUN8cDU2wAG2rxVyN9R%2B7E2nQYu6xdnfgk7WL8scQdXGsU14gkVK8Qw1MviBVU4OLI6Hq0tr8VVt2mFv5QtVSexioaZS31IeeTe%2Fn0dbYC0AK7SpiWCuonSCwKPRX%2BG3s3TwYBaFitNHpHQbpwMMv9xb0GOqUB9%2BQmvL2qhSxr3hwx8Ss3dblYOs5iZd%2BwUl0BMp8AsLGhbZVPqaIrpLyG8D3IXDjr5XIiA8bu2MIZGT9so1z0J6vJ4GYPMiz8k7WJAQPQItMsEAK%2BT8kUH3P7%2FBsi8PA3EFpJdctI9TNoz3un%2FPgLDECD4Jw9dp7uEUOKwW7xXZsmVhC9uz46sw1DukGJDh6f12mjeYQ4PrmpN0gR7L68fhXSGYB4&X-Amz-Signature=0ebd943e7ba6f028423640421d27fad478fea99dc3082d45a7856f9eee184d0b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662273RH2Y%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T110139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDGp2%2FlV4smHIpGmpZmu1w1L5GmZkTSXOvEwc64Qv4ADQIhAJEsQQY7Bz1%2F1EzdHylsL0Zs3fnF9GfzTEGLqeyYXfCcKv8DCFcQABoMNjM3NDIzMTgzODA1Igz6%2B4YCwcWrsxsUF3wq3AN1UGnNBupBI1MAEnUmA7GnrONHOrRfU23X4gJHzv9ZWQbHLKlKyS4d57EDaD6Pkusk1Gs0GLuFc45V1Kj3MjkEHWgecmyOmeEDSOudxNdp84zriiL5jNmlZgjf0t6wCIGAEUw01mrU1iVw%2BetRqWjmuwJt1fONLfqE3hgBra1ilBqyGSZYe%2BDRnj8wb8GhSIoW4YNBI9X%2Bv95fNqz0q5vsTSztYFVEm7kfhUEVhPJVqpyVw5m188KwUlSHIN0SHjEDG%2BR9vOjZa9hkTQiF%2Fa5N%2BjRbJXIJeemqVOZ%2Bvg7ha2sV%2FC8rmvYO9Gu%2FXYeSpI%2FgvslYmhPj7Ri6Xdy79h0k%2FieGxEFoX%2F398f8esvg979nc7q3ajbrv%2BTh2IwEJpdC9lSWqAZ0ijj4Uw0RQFe%2Fni4uHYaP6y632Qgj3J2G56pMDoI6uaHPp8ZsMTG23%2BdzTa1DcSDCWA4puJEarlYKxZrBHdC9NZEhwn5cW4nPzZWriE%2FXwGJ%2FUCXwV9Q8gr9wYLwpre3h0cCD6XwOQMlGcS1FGgnRDR7XmQOArNIcN%2BHhj3%2BJbVIzuOkSFW4G%2FfL3VSEDlCsW5bHYcJw0ZZV4r5EDrrdcQOrEt%2Bb3oBzA9URIp6XE84ddb%2FANKVDDh%2FcW9BjqkATI6ZrSfhjquQ1j16qG0xBEQmttMPOqMx12mnybcS4lX0QaiSxbT3OYft0tpcTuqGMl4V9KNTOf8Ny48FgZ2DKwEkgkUgfNh5MzUabYTfyAFCNgziFZQdivoZ%2Fkk3%2Bq%2FKCLmQ0YHN43TQthU5a7h86Ll99PEptgfvz7eLsERX%2B5tEy7CRnQtDJjI1%2FNpj50xMI28yNjvzi8GzELUGxxbFzdpOVFL&X-Amz-Signature=3ea50f58a48f68f1686a4a2fcdef881ff9e047086c6191c04c1a8dda9f2d67d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
