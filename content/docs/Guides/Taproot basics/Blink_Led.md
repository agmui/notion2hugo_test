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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5KUVLE4%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T140747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBJEXL4pOPXhJkbpyvYfWM22JHg4tCVd2DjYzfla7b9gAiEApom1PlCrHh7XcDr4thbtST6GceEhoMqf0dOIAzmm8ksqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZ%2Fklx5P8nv%2BS%2B04CrcA90eVVDIVfEKjsZLgnGM8IpsP4Rmqq2YUBXsEkb6wkNEo2OMRTO9BFAmN%2FwywG0XBq%2F0QcUKbVnJ0t1Gg5GaNVUpdoD50JyA001eJiyltpElh6yWL0rpPemYOMQGYFcIU%2Bt6AdMWCfH9rXJYQevEqgLCpgR2qMtpqibW3Avw%2FczQky8g43uVfXirc0RKtShj3i2HYfuLkqt8qxVW%2BoJsKI9rmsse3GCU%2BLTO2EOlDIIw17nQeRHM9G7er0o7QG9HM3aycQdVarhHTQxDEpejZ1dviP0LtPZxtUS800FQwmJZ0Gfx7YFzhJ%2FOGQC%2B4KinEnOU7IdMA6eEx38BCIKxtDd9vND3g2%2FnvCD3OOWoXSSNFj%2FcW1FTNgrfkq9Nd03pTUn%2FrS1wyzBfYYj82PGvDcCJ97Vd4P4lDHSLIwaKoICtORFKVCfiHMOQualv3NWwGG83h%2BBHrdybcPOVfBtmIaXndGq9KpTOqo%2F5QGXbgszVae9fH7W6kfV7MNNPsM4rxFL%2F%2Fuxof6TE40DEoJHPCRJDggz4W29SYh2a%2BHuTIMJg%2B8uFQ8nn88lGCne4QYqY9s%2F4%2F7whWqUq0ggFjCiSZe9ZHlvrdMw3z1ecBBbozC0gVjjxmDdz%2FIHPneT%2BMODZlr4GOqUBC0Or2aY9TJFrARXgc3mpgcBQec0vdeWgInRm%2BcmZ9cUdQ9cvCm6CiVidXVn7HrRY3fqOGP5hxWx%2FoDNkSiXsqfu7qNFe6V1O%2BATMk%2BYOBYqvDY4ZgcPN%2BEP5F0V9VOwtdQKwBEgRTp15o9EnSZVwMTEQ3XK4gxd98qBcuQo3U4I6QSgwd0dKOxEmzyzPkN4AIm%2Ba4TJvD3tv7LF%2Fg6yLlLCyGPs6&X-Amz-Signature=a1762f949900029ca7d284c8d82869b24a640f30e59a9a8cb3c174b6dcc554d5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK367KZL%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T140748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbipssvhwbOmc8edQ5y7L1B%2BKkvLuMe%2BYU2Mgihe6RBQIgWYbOQ3u9Qg7AR1VpgSamMqDzkFUem%2FC%2BlzeRc%2BQDicEqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFd8ylqOXOc67p50BircA2WBnc5GZ3VaUbdSpAGuRv%2Fp7IgFkdfATt3htR8K9yW7LmWW2p7lZsEb7JH7b3WuY5nSp9YSxYHsSnfZcX%2FExWkf%2FeD5JNDJJnx%2B0kTuA%2FlADu09o1VZ6WfzmTjirETarxkbAtC26TTTI6ErACByl0xHqOne6ryMKXjzFPe0n9za6UiY7k7dC0gfGwMuvD7ai1AJ2J1p3EHBpgpqZVPLzLE3ZNLioz015nvqwX9f8rYY8PfA%2FzeyNZxX7eL9m5SKqwRXPTLWD1vAsr7rMLkMnvP2XObov2ZmrzmsJCjaSs9IufO8fvomZA8VkVHnSiZOrmL93GurhgvBdHFT%2BjYzZuHvWyQqCIFOyi0Bvfvh8Ygyko1wLIEeKv%2FxePgvwU1fm6VRSFLSTX3daKBhVG5m77k2sjBbJvean6Ggcoi9POzsxFoGcrIPLjAlBI6Izp2RaBL9S1p%2BPkG84dMwGjgpiN9WxSW2a2Ll%2FiDMgMuiTWLrHhCBBMVRcuOX2sz2Ijk2CkaXvrPOYFUcdtVHHi8k4ekpheLNbtbsfPLi5WXalaIXXPaT7CL4Met%2Bf%2BGWHDzbfxrnQjBQEuTpklOvmxOZVXP3pC9KqxaITfwklPJfNxf%2BjW5UJ3lT13i0eyJBMJralr4GOqUB%2B0okvt5WT6UnW3jEmoUwfi%2BoPOsa6NqN0XlZVL1IBxY1GfwgOBmH1RjSyXybgSXhAGN%2BAbNJGaSL27QZCZRWBQ7HBS6ZWMddTtkvxhx7F8xEhfYZYiiL2Vix%2Bwjko1vQlWrGbRce4BYJluvqVFKN1wytSBeo9MMAiUX41EPbuhruWK6%2BiIy6WZ9CzN1JaEKKIfKUPYl8OBLQy4%2B0FCqf9yu7cXZF&X-Amz-Signature=71d8cc4f76e8ba07816b30e27eb6ca969c1927669f64f7150b753ad7ea1de5b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
