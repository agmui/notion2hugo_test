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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP6NXZXJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCXvLX1ukiAxv5HvhmGFGRRYSqr%2FVfazC34WTTvCQcTfQIhAK8w6kOaHMUxZvWrxNLXX44z3OsXnhA3JjTLr9gxqBs1Kv8DCHEQABoMNjM3NDIzMTgzODA1Igww8lSEpJ88tGDtD44q3ANKcRaroe623Kz1HR5ce8%2BNNukjtIvGpi1PuiiUy2msYkSZFMznz8878EYfCY0jUTxjpI%2FuHdX%2FkN%2B9zlZs6hkOnVqr%2BKjjwQiKz2wWH9kxgRCz%2BIXy14WRx6aJ30BYDYhT7Dcy%2BrXFtBN1sBp5HwfBmcYaL9nTyXHDPRr2i4FKF2FQor386tRusbqmId86wXEel%2BjkH4YO4C1gEUyFM1BxfPaAxUbs9ZwZsjWeWbR79Q1mOnTnfkVV8%2FWP6MVvCYRwRwHMKox7QjaZozv%2FxiGUjtSe0H3%2FrbIqltczZ06wfL%2FICk0%2FRKvExYRuTSGE5oohRBLhxZan3LRpZ%2FbqCp2JtvB5t1XD6BZ7FeM%2FJVYPV0C32bXGsWJtCVzEctgYo%2FmL78cN4CWYP7ejDl7UJk0xzHHR%2B3mk5bKRBPJGkYSz2k8DRAv%2BIZ3PalkB2PV4WgFHLEt%2BlFTA%2BL%2B1%2BfRuw0RWN6h6L2X9qemWEWA%2FPwdYcfRGKzDGRLQKVtUxNsG8%2BnVUCTWOHiDgl7Ao%2BRbGX8slNuQ2FVi73clSlfsaFoh3p9%2B232ighXqvjJvWmuSDud9bgVY0IjB1Nr8LuNSV7%2FrkEhTWqTg%2F4uOZvxf%2BZ2%2BKal45R5srr%2F%2FPbzOGRzDF94DFBjqkAQfPaoGUo5hUCXErDxkiGyTEySuedEdAD5tr930v2n03qzJa9OsdQWrg%2FUq4PsyL7kGmZ6Lhy9r2urYj7LFEBE4cvafmW4seJxjleZ8Fo1VKXs%2F%2FNhf8EqEGuCF8t6ejKgboyf84TmRm9y8Kc5XcyDdT7Bs8qyLtewlDEUXrLTdZlHxdkgQC0WP%2FW8VEMFQCmpSgYDQfK94Pb8XdaSx3wH4JsEfv&X-Amz-Signature=5aca09654fb42dabd9792b570c48024e7a23261e797a1ba69a526de60ba01e42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4Y3B4BI%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDHoMVpn8%2FI7eas4C6LXoST%2FuBmOuXeR1vd5oRGQKgRmQIhAMyjCDJB8WuWOIu9kG4QwhhWiUKClQJ1Q1Bx%2BxVr94TvKv8DCHEQABoMNjM3NDIzMTgzODA1Igz6pS9hNZb7dBuvw7Iq3APlMnusEHAimsKS3tJQn6UlgF5GObyFlJELI7KNETDN68y07yf536Rx%2BMlyatD6NoM4qocSq7mkeFcHj%2FNUip%2FSEZpiuy%2F7g2daonwK0A56fuOHuoRAKfgzkQWjDWxynWGTkRuCYsFOJ7VcPFwp0kpmK13ZvznlVVZB6jpGDPy3B9JQ5h%2BbEsKaivVAchAwsujoudh2u00aa80cPJv4x%2BXqQGiXoJQ3VVZlKCsewJYewEmEEyDEF57tYEkbw0AwJyT02ZV0tqpW3rYc5YUaM26XS197rJs4MkRpbyu8%2FHiy986IJW0CUpd6n09SNVSV4S%2FvU%2F0jcMvE5zsDCNuBToBjrU4CfyhhRTKxkKBJ6Rw69eMLlgxX1b3LZy7miTn3GNECk5ThOcv7t0hviopZGRejVNalL7IF31kM%2FRVvG2DTJ5Tn1EzLxr4D55gz3qoLvkO88u%2FwUPvhRCdOKVVQ2IbJ9Xt8SkyWuumKIwfXwShPVwXYQnHqRcgmCwLEeUSavmIY7vZ793VXYIKSycAx9VXrKouLsWuCbCMU625svfXXJCe8tzHZxrTfiW92BA%2B2JgSlCUKEokqRofb%2F5iYQQr%2F87Xe5IgB2dNN4FLGwH8IAfqJvzJQWjM1g%2Bv%2FdIzDo94DFBjqkASu6CSpiPAaUvwrxSM%2FRbmQiOi0LPlgXryV3ZzGqdPHeYmW%2FnyBmoJzZZCA1f9jOimJYF1Tbmiu9NarO2p7MMB5mCdM%2FOQ7BBAgVOsCJ1i%2FruQ2MuUb3m845K%2BJnuBkCBBKpm1SXvCL2CgoSEJaQFNq0C9tK4BFxhJ4pWcucMJE4Id635UbT2p5WoWzXp1DQpM%2Fj6RRFPP1SqYwvRPEHSNoD6d1S&X-Amz-Signature=68cfdd2ad9178c6ce68497fa2b1e298b1b9b5265e29ab9fb289da3c092978943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
