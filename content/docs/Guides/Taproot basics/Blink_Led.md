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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZBDUCEN%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGbZmz9lxBrpVaXHcFXzY7tz4NRFeaA%2FCY5hNmmVIo1AiEAqyfg4dg5VkzEU7yHyrS6PySEceY8jhUIlMQRDzUN8RwqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAa59TvRi8u2Z1ojlircA%2Fw6CJaDXUT78PBezZAMcycZbKEMQeZyoHAMfNoJlQKUmeumQnfVf4A4SC%2FAjJp6XDJVIki51CPpB51PoFdBfe8hK%2BJJKuLMm9%2BcvqdAMpcZcM14y2n2lxY%2Fhf35Ws9W6IptL0V4jba328UIijiCvwJlEw6iP97a9Z028o2jprAltUAXtqrBsrDCMgTqc8gn5twMKPFazcYMW1ErfojTnpCZq9taJLB%2FKQChocqnImtsyOcw1ul0mt5Se97aFtSmB7Qr8Dar6oVoTZ%2BcrrcMGUlC9sqXjBf71%2BKw%2BFsUrD6Ar9L8g3s%2FqN7WR%2Bzl2u0hi2k35N51LGb7pdypSPBKBSmFrjA3gJPb4rNE89NNfk0ztesdwZxeIL%2B4ec9xdKqoYHW0%2FDtib3T%2FvujpRLi6g4hAvsznbVfwfbfqSZwuogu4mZ5%2Fw6S6wtMrMteF6K%2FG32kspWrzqV%2FfCLoJBSNI8ewpzUIOk4YB6ptvBTFrY4g2QGu39C577BYvdKHYNvq5T7mH6e%2BkCxJdApRlBPrgEFHBWRrl9QMmLvw%2BtK6uGdr%2Bf4wmwmZKTzB6viq%2FBf7bJQ7oGWUGkCYkRPB8FGhtXBYlFbTIerIy430kSVwJXror3Kh3X23hbDiAqMcAMLXUvsMGOqUBLXOYNJmVWbb3CnUOEjRbQBEu5Jj%2BmcAocLni77vdF%2Bff3axmL0AJUs2O0ReXfYf3rVL7fLP8tb0I97y3%2F3XCvjHa4PIRtgXDskrXkhDk7mBqk%2FCiftFxAmas5YftjgGct%2FqDxNqblF2USFyFtGvFsjZ5qAFCboOXXWaIQzDWoTvFJ582Fu%2F2qy4xUPKEkOYoLT%2BglfjWQ9hmGmCd6vqpm8xIJmlx&X-Amz-Signature=f9891b19f1856618d9fdbcef1381bff37e5da96b969595f4ff73f2a5fb004689&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU7QKVZY%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGc1q0dO5gbwHJ8RcmiLHNPtXzmW3UNzqQewPaAmiYAsAiBIW95%2FJMG%2B%2FalTdIUExWou6KpAHDl2FaF8y2F5vcd%2FnSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhXQwjLm5fCyygXZWKtwD0KJy4sQ4sx5cZ1A1QdaIK2h2ZHxWcQ3P8dLM5aL%2BNTYW6oCnj8ebU%2FPf2nd2iABfFDFifCcDYYMbZQkmEQ%2BFkNPn%2FXKSW0Np3bHpzNTSFFquMsjNDT8Kst%2BVA69rGlYyFhsoJyaHpz7vEy%2FegVeJQmhQiYf0QTgj1qyroOl9ndgF1A%2FmZFVEe15yZxQNQa5MKpRKf91iZc1DKywvHLEPvHkcRDtJy0v6Bca%2FLN1KFfR0okkuol4gZ4NeO4%2FmfMbt99cmEXdB2LqDqdR%2F5lt5RX1dUk5I7c%2FCMlO8Mg54nEmw%2B49%2BbJdAb9JRZNlE3dvJpT0ZMDlFGFKKkCAs6eiXmmK%2BAC5gACijrDt%2F5maLfGhWZAe3KPTgwWteqPwy%2B3y5XOnlyMEDvN%2BMM%2FWsFe1HG0dp8bhNPhDC2PR%2FwtGbrwC6bZXVCQf2zga2OQO7rgQNwKCq3PmROcPwFWGpb3UNdNvszl8I7E%2BoYi7rDJwuKF40jp5kVesz7ND45NriFWc7fB5ETWbJVrQ3vaIb9LHfNUHEWj3Y3Gz3XJrKvMDCqPhQS%2F3xhWSqv2A6GcLkSZac8k3F6nSWWxnV0IbbGP3LL%2BOtLJZuu6T4%2BF0u16rseZL9VnYVvlBmHG9ws7kwl9W%2BwwY6pgGLQ9ZAhhjl79DW51EKoVgYx1etWbxb%2BYKXdkoIbUyLCM%2Bf7awYETjUjIy0PMSGSKqAJp%2Fo9s%2F3xZRF3ARnjinNnpgKImYd6sud6YnfD1Kmu2wRD6pjjY%2B5SnEKoluTwGPcDXjCENEkR1%2FSDJ3y6UkQM9RqLB19tX8KNYGAG6u6xQM%2FxUlF7V%2BAsauxgAW38VJb3ojJW7WsSdpse94%2FMb0dfPTiqzrT&X-Amz-Signature=1f18bc057c40bcca7ab6c4664be7c8a74daa4c3f79ab9023d67a8a5818621944&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
