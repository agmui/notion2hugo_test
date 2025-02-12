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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD4JJCQX%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T210644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOFjuLbubnC3z6pLZei196ZzpW2ioeT5ixPJt46w4g%2FAiAlHndbxEeSP8moBB0KSrlZTWz6nOMaIS%2BmIsggGxP6ECqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUBcyD2wEx1PPdGMOKtwDZQXOzxvBo5BzYrFkGucwnro8bZsRKlMSeOGQY1zPZnuBmmkQMKHUmAcXUk%2F4gHT6Kb2v0auhzgUin0%2BQPLIlG0l9TDzh1RurIw%2B4Jxp9V%2BoTukXGxGvsi%2FZMyPvaueIBUayou1XASa7brDSr6q2xCFGg%2BtG12%2BJ7xtnGXxStdS7fS8G0D4%2B8sXPiLbjdrR2W2BR6otDrDeb1Ahsy%2ByfqvU8GLSt%2FQmr98Px4ufd%2FfHyGTeNdACRShsJQG6adYAafSkOIu6%2BzdSwJVwjt7J2XWnfDsmHeDKXhR6BjiPNj5tOrcb3oRLfzelTPp%2F8FlekcQriCKdGK1%2BZo09ULCDuFc9ivSDclNhMV85v39smbAEtbQ0ZG1OAVeU1a0eml6ljbKVcgbuIxTZuXj1BQyav4VuJ%2FqxAFCgnugpelKhBRbeWz8Ic1Ft%2FimtDk0Z1%2FFG65KUbb5WgsM84orbZeUedKiObwoDVogEoez4zuXKD%2FHmXye7ZTCHPDvrEN70reSm3xvBa7Ps6jcYNs1LLbqYhZqa6z185e0ngKzZb6Xbmuw9J9AR1TIieN6Oit%2Fjjzu4Tim5NE08AVk8AcknE60kEwqGoxTXxkaXesynmC6XBaC4sG1olZa3aoge%2BBnDMwiY20vQY6pgET86nEZILJ8oimIsMiNZqrsJPIU%2BNv3eJmmWukO05Q17xfNUhBoLbm7cSJ0rG0Om6JBWBiGoojD1YvX7lvfl0%2FJ1tpLznAyVxNy8S%2FM%2Fyse%2BgwtKHmm41HfxyYKLMmCkmB8gUQ2vGTJ2L0cKa%2BBGOMaopgVtCJ4kJpC6liIXziNeGepPzgmwDdEdFwFYs%2BQCWWxcLUWhxD8cP0laZ9WV0i9Yl9kWOv&X-Amz-Signature=c968bb9422e3106613cc8566a0b7ac12a396139abf1d84970c4444b1183bbdfe&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EIT6J3A%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T210644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCs8EUd68InbET9pv%2BK2UcQ0o4ZsfODQXNiGf1VXlTxWQIgc9wrPqaDqMEEhwILTyQYeGCVh6km2yAEXgYyELMMvGkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOtFplPVVLlExOazSrcA0oVDqjwudHa9JeypI%2FTJeWA3GvnwFwqrmf8H0pGhlLo7vyfycrPDwGuhUeLrQ3jq8ORaPjb2%2BZNXizLVGcOlfISCHvV6U7qENoEZdTSs4PzFqAV0TxDF2%2Fv5RrBkyowxqctczl2W%2BUqsf4ogEjB0pTK6L9m1NvbeuDlyKDtnxNr%2F63uLUURSzbiGKF8dfznJhbyN%2F%2BQeGplz6h86A%2BV1j%2FNbt%2FwOrYWZ8yXHpaCzWqAA%2BRc3Runzl3LUNh6uruqPloVwmswjAmWtBgUZ6kBKb0RUKcz0dJzoB%2FOmuQy%2F0EdRsfbmq%2BaKwkOa%2FJ%2Be9V4vPtW7%2Fdb7SxV4mFUnZjHNkb0KkVaI92Qs%2BA%2Fz1fdzhzLm255bG45%2Bs22OIbVujW9JvMERD8Fu0DcIMOPKnhPxnfQK70ZSTb7%2B9ldG%2BAIme1QmHmGST%2B8806aXfxL4yIy6f4VrtGumyT3522FW8CPJnwqhDDDGQbSLUztG5xmqrOirLc1oItf8tivq1O3tgPJpewNFpft1apjSJvjZmVegmq5WrkE9IapCpV4HdmH4pbPGMQx%2FWJ2ZcxRQAYaHCw95tcMVhUc4Yy3WBDHVb1GCOgLF2f9JGWVzZrUlMjsqz9gok0FMH9CApEOJFYuMJeNtL0GOqUBGdA3jXtbGLLxcYVkqMnHWd7%2BCfnvHQK8l7ZAbLvaUscQBGB9Pzc0uZ3%2BKjXwuudySO0JVm6DqIyXW8CeTDkSoCSWUN%2Bt2OGHac%2FAXZrCLPZ0XB1jEET9OnyW30lWUpgt79nauEZBtcn7fW95UiT8VjY0iw%2Fgi0JGe8hH1Rv2R0mBpwc3%2FN%2FzobatQSou4S9jm0PF7PzSxsCcwSUpIR3X%2FpMywHLM&X-Amz-Signature=60b8a6c808273f192406e40c7c49e4162946afeb08e2c4488c56a043fd13f347&X-Amz-SignedHeaders=host&x-id=GetObject)

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
