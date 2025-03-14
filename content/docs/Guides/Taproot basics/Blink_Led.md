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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4JNHFDZ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgcbrLmYjHz6PSyELgM5H%2BQbNCAkvzk3BNosOwbhRZ%2BQIgJ15qTHK6SMVBAagPEOuLGVGl6EgcKmyVOOWMbQp6PuEqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFSc5BdMk2O9SQmvyCrcA5ilE0Xv4d3voTGCNhFTii8xmLQNj%2FveqQUdE49p0qlslzG5vYjwP1fdp64DQMPr7q9QIljKENtrJdExme0%2BTEL5fkXPwnD05VNRRHS%2FExSNp4IPrC4NLVoD7pMJyuvFbza%2Bv8u4D02%2B5%2Bf4%2BowW7P3JNxqXiy0tzzfhtKAjapLHoyDfFbAKgdT5Y4HJrd8ZcUkRaZEvca2ufNm7Gxii7KnBWgvliaxsCoQzG3id9rWsXVmSe1940unW6bRKZi8mieJ9Ch7zmzttUS16e1xZrB34lmVe9oZA8ShWf4hj2t%2BJWRMMn2nvShq2%2BX6OHwoi9%2BwPXl7JfUcPI091o9%2FnpwRxGPpaIpWAp6YYaMSviQVsjDMlPwTFA5FihWLbI%2FN5czQpN5ubxjK64aoW0dcKvflNidxx1qI2BOM4pohodIjIa66bYrdSfaKh04vNmWtS7qdVUP3VGwC8jzVeNW4BiAJWINe%2FIOhYJGf8CvYMJuo7elVffZcFFsGxsB1XJTQsDGRVj%2BT%2FcqNu%2B2N0C0d0aCIp0SjZrQ5Yl6UUSOk0y0mgQ6Ql9LH4aPpLQGgcy%2B41hOtfriTnOIJFL6Xj1xSSWN%2FqqSmuFeQXZ4RK8xRx3tpcE0eaB416eyvq9GQCMOHMzr4GOqUBD2pyb3cEqbqqmlk6L%2B3hVOxTHaH6ssf1Vq2PgbADSKqzSOHnXO%2F8n9bXfI04Z95WeHO95AKSq%2FufGsiGTo1Dd2ElAGjS4YGjAbUwLYgF5UC8zb6vfGr9py2MgkPAW01zvxVws65YKBE6%2Bwa6R%2FNmR7KpFZk3N3WZRlxda12vCg57j7lW9gP8e3Mzz7sxHByVZ10w0jdjOpw1rggLrxSkSeMVaScS&X-Amz-Signature=12aeb6532ecd8b10a69bfd56ba1d48387f0158626da8846e9f08d4a1f63766e0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR3T4ST2%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbx8N85lxNZAPwrTXuDCG%2BDKT1dBFG%2Fv6Fi0fHb6FOBgIhAID53f75bvG2aXiHDf660SiAgHCuD72YCb3lgbOAyPPuKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOvDSYJC1wXFvaXQAq3ANCcEnljDEuKqyoU%2FK6PCg2K%2FaLO2NbG7nnNBzxEh4b%2BBChMAq%2FM8ET2%2F4fi6vRvr7PMXx6lYtv1CwfhinJm9iqakDztE9ogqeco%2FMjq03yfBxeSvzZbMHVkPKGWvSwvDbu%2Bcw%2FT%2BLXTbjrYFr3efq7Jp7rc6zVf0%2B34IZVUcV84lR0wmORRmvL6gKXHsM0ETkv%2BtuwhkwMkU45jKr%2FNNK3rPOkZ7nLNy%2BTlJCc2lr6cSs2RMeI26who0KrgzmDisLk6aZX89R7F5KkwZsGP89six9kKNdWbPjm2HL8mYb4fikvpB75IxlIJ8KlB9%2Fq%2B9Eti3IMlC7Me89JClxYIU%2By%2FScXT1nzzvTkzVx2WBA6Pf7j1HLeCyNuZSA4ca5r65VPfVCfTlQic0%2FxpQBUetMNdlzt%2F6H6Ioh1YWnGE64pl17tpKfh8QaRmll%2Bmfv5H7%2F%2B4zYy6M51e3aORyeZPaWkFlRhVuqM3pk14%2Bppp5OztQR2DaD2ubo9%2FYAh3QOdYQwFhC5THUV%2F8m%2Bc4YMsrZe4PcK8NPTL2EqQ5Ix7eH%2FhBY2u6FlCy9TUtEgMbdlsfTIeFFmbI4GbudxTs3AoNXT2Pomlje%2B796uoqvNpeHG6ehQTloWOHAnAd9rYqzCSzc6%2BBjqkAbVot7I1IU1gT7vpSF%2FN63%2BpuxDtlReBX7J8ejt8T7yWVKSRJSiwRwxhWB41l9HPoy8jKwFozLZ35TJWnatMHmg9n0kRTwVU4Z38CFRki2h5MwVVPnHiyaLZB0wbie0aNujcB7pwNFypFAyjK4rH54YL3VFAN0mtMdQigBBh4hhsVt1%2F1f2VxT0QhstNCHh8X4Zghclt3%2FsixLa8M8ORg%2B0KjUpY&X-Amz-Signature=2ebd72f8b93fdf1013b717669cc974250876f125fd56efc21425905dc64c442e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
