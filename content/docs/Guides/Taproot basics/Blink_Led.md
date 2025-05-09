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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEO72HH2%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICoeJe0hDljfzZk6vic78HwZRZa2JL2u4zy5Ld03SJKZAiB4OV%2BkKNSvIyqxB3QVJEepScjTMNGYRLOTvtEdAImjBCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmG3hfhPnPSgVx5rZKtwD6VqVMlFJDyQLfmMjV83HcjFFQnptBYJtNKNTz7isky9FV1kwqutixxbTkqziwDKhXt7UEQBxmEfiEv0Cg601ENWDGWSGe19f6JoUu1edwvW06dktJuF%2FXa2giBzI%2FxGNS0pTMtoY3VHNv6Y%2BHUjDBc6mulzN80E7G7N6rz6pEgQPYRcDtZCdq%2F5VlRyQEae5b8qtzuAz7H%2FIAB%2BF3S1wNKadOF0e6y5OBosrbvAN3HhU2Vi%2FDokAvSf0ijSKG1VmYjub%2FCz1DJJOLOzc2g8AFvAUxAAy6ZL2WB9N%2Fa03bQfQDjhRxtOilr37C302iOyhJjZMnvr8xzkuKSNWsmofLhjw4xs09skQn6rP7iy9bbsP1m9dafGGUYEg42qDyUA1snuh9%2BTBwcD%2B%2B4IoTDfE0qy2nIPFUDCftCAmpVgy%2BEuLDyaJvtA5u07PxNOWpRphpm70LE6xD3Ut%2FbeYxjKjWdu68RF89lEziJXsHAhI6PdspiXvAVBtLTD1xsRmX5D0kZdjG7a%2BrjDItwEtiaMsi9QNLzwzkq3R6aYjo0ONNeIxGoR%2BmXLYw6VNSAmBZ6MQ%2B0G73jVYgr1L2HZAbrqFL6Qc%2B317qRAuYssVzGNX%2FjaUMVLFPa9MNSdO8lYwvdX3wAY6pgHxpg58bgsm9knp3y5rRTTvCIJKbl8zyXv51ykIe1yprC8jm%2FmaTRP4bsNYPFsbplcqBSsA6%2FIULjccKV8cjoBtw9srolcZOdMTIxMZtHE4J96FYWWI33ZxwPSlS2RN%2BYHibRCG1zF5fhbFnkMkCoCrPYZdMuLRDhhsoSZ%2FO7udiiV5ewy25G7gX0HnmS%2FPLQgrBWPKrm%2BuFfw%2BdivktyJeZ7fUJm%2BN&X-Amz-Signature=b6415e35416f5b37510b6c191873ee7a6cbb904bfaf52587999fece77ba9ce13&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH6LOEEI%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjvhfwNVPuxuyXhGO2E83rliFYX0GxhCzY5nDeza06JQIhAIMpdl8gBghcgbvI1FkNu%2F7%2By0vSui9eZJeKePLwY9VxKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrJF1pamoBgEDuAvcq3ANO66Jo4bCShZBXfwJFRIusuSnody7wMJ%2B3nYju7IMGAZUCMqLkkdHkHxQ4UU9K000vX5k1Yfb9DseOce2diduEAzlrkH1IOp738uyNeQXhHE5pLpFqrUuTrhzaeu0O8LXxt8c77W2MNhWWnIDKpJI%2FwwDwPandXZkB6VW4j%2B9KMXIso2MNcSmtj9EIJuXILkm37cuS3z%2B0aDIgGbaiiRcDvlZzJYJL0lvsx3ljU8rRWYP03x0mUIn7zgd9aSX2ozsyQsETCTzeIp4i52Da3TLsWlfORWCQNX4cHkBdeULIKA6CxZqzF%2B1AwqQOZ%2FW46U%2Fygfzs4BNryYlty1DP9ZOnuLW0cbkx6pEUv8wdmUa1DWBQBfY5NnxKyy04d3sjT2M4RGoJ3zrJ43Aajfpd1zQSZcVFk%2BEIXLVu6C4OrIRjiB%2F3x00%2BTYDPOXegVE5QZY1V07pjLsJkbPoizrDUlhhG49%2BNSR1r9%2FtXmMZnYCskQyIRCCKajtPbWAhqVsDV6xGLhUxIn3bzWTamc3IdAiqX91lv65%2B9tF%2FYTX3akOeTuYXQvco8yXsF30wgpQVpi3dwrLDMincaoWYy4boUUGIzhBait%2BpcyoMKLmlfoxOlHjFAdEx9TcAe5A1s6TCx1ffABjqkAe9cTVDZy7DRcc5omeT07Iq66mpOqJJFv8NlShbsz22ypZ3NYZGHAXzNGc7AnAOWKqh2Qi%2F1JiksfGWA59HoiCgKgPAFHeKseSVhRVRYR0YrGmXtG0LCCW%2FuYU2i%2FuU0dfEUIT1QP1TlCjd0Bxh4no%2FSzTkR1kBtFFNR4KVg%2FctNDIHGpE%2BpVqGQFuTY0e7fC8CTkxX0fOfjvBBxBbQPdM3bs1FB&X-Amz-Signature=25a50023aceea493592d5dffdb0dd204dcf480cd851ce41a0247c58afe2ef275&X-Amz-SignedHeaders=host&x-id=GetObject)

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
