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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPMZX2Z4%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T090806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA59rEHW3%2FOQICXyIYKoUk70pOyptVkUy3BVw%2BorHafgAiEAgGMrBADhYrpCIYFp8jncTBgeinqRUncSwAI9RvN3hHUqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE37RFnJUtGZZpoxFyrcA%2BDMTBlAlGy3AHmLWzFVEbFZ4O4mYFFWQbQmHZN9p%2FxR8xDEqL8jatqe0DW5TDdr2A8utZMnNNajv3wWbQT247ULtkM9LBFhBZnyUQTglAfMOxqjqStTU2gKT6muWqAtBbyNaB9FfXe0zeGVEl0I9a%2BS76VxAxxnLl2m7s074CK5U4a9bSVqzVVsCtC%2Beqo2rZe0pV7fAJ5rFZZtQUspwGimtah8atiaM32ErP7DfYEuFmsN4YWIIYh5%2BLmBGhAizCtxOApaPwHMGxXJEEqJSMqXi1Ph80lF%2F%2BOIQq8sD76TZ%2FAMVo1Yhkp8h5aAxurZqr2hUM53JIjgx89TfU3upi4pyrru6vNh2mpGCCvnQN%2B%2F6vfhBeVJsxGKJt37z5FA%2BPaUbcVRVfUduIwYuFtdvZ%2F1nNm8cQX4uPVe08d8Djyik5tVSoA149cz2S%2FP67v9FxJdH27m1Cdogb6G2pfrGx0oFeJo9SRHzFQQOX1dzDPQv0UiS3M9fGBV5l7W9ScdHzyv%2B3RvOqfLXqiL%2BGoLZESHjnJ%2FUYvuJpkUt4KOP9DOUr80sZCbsb7pDGlskMOdspmXcJp1hzhxNreDfvPC%2FTwL5a7KOumxyAQ%2FsjOKI5%2F0Pq0RAezu1QfrOpb%2FMLuAhMMGOqUBgwAtDbCTD4WRXn9IEhFGNM0%2BwqSUdTmlwTC4tEOocgHt2BBKyg%2BQycLPigMJydEBnDx2o%2B8MJ0vMeUkBK22CNZOPZVthiDI3SSRq7kQ4p4Q0Ow2U%2BT0%2BsBYpcUwHVpdMjwrQK8nsTNA1rtMrQWeW0dHoXuRCcKKb28Y0qPjTny51PYu%2FCAQquhGmMpJ4R%2BbGHPZxc9t2d6z%2BCMb5quXFS8IfVrPy&X-Amz-Signature=6332c56e51c75f884e543181b8f18a3a2d7564f2ef685d7beb41753be6c47d9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2T7ACAE%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T090807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOqhYfcWwREO7384mDkjmQksSXUlRdgb7NFJle2my7%2BwIhAP3c2Kz%2BTCspAgyYd%2FBNrGp5ovWzlbxCUUWJJDoHFgZMKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2VcKBr%2F4fqfoo2nUq3ANGkO8R9yS5cj9KVIejzK%2BdorbM5rilKdMkw6UjogI3M8N35bFhPWmQ7VOJSFGVll6lSmH9C898H6JHtp9twwGPCBTHqg7Pp%2FD9bdUZYR8vTCXFonXafhS%2FxPW5AtOmsmxHFLhRUgTl9y3msV7psEL1xIXGHPoMcEUUqLv7NTBy9u0df2EmQ0drGNMG2Aa17ZpAX04oScVRnSSNsOoIRaIsoQ8GUSnEkiFrOeXzuB7akwFnM1qVdGVBABMkHQLeRkaRMud5F0EL6UDsyjmDsRbc9qpPQ63zlPEmFN%2FEe9l2bqvAyuR48LuG%2BlLsU9O0mct1jqcQrbtXwCXWgOliQNIaj7YgpyMektOfARLp7yV7uOxA0KCEK1QI5d%2Back1O6DTVbTczldeFiGRGXs4DOarc6gbck3MiOFrIPcQT6DZmqbGET9mcpQ7eOTjULjmP8UDfQfC9hPGq4%2F%2B%2FLua7fns%2Fxp6Z%2FOLFbsWfSXvFulBwe3DlrpqFv3fAmNWH%2FEcJguu14nLgw7DnosovuBZF5mWxuMdZwicWqHkwp24cg3AORAW1hPE3vUMcWq983f1aWtE2RbamItgHRTl7BEm3KbALyoHouUBFbspeXMCM03zITVZAhORTGDBAAeRQATDKgITDBjqkAQCGPdIfSolw8pRi4IEEPAVakvxEcMIqrXw9OyQrdNbYEBSRoVaYLhStiuDrrlwFdIl1yhsA7q38HRciLgwYeA8%2FggrL3UEHAmdHxzTZgKtxmTnwQ86%2BwkLwrTRfotVV7%2FtMlGXQJot770CAeviY7tpkMvFBY3ccMTY1rnIH0klT5qg3MoSn9lkK2y9bTELxKO7WV2GLHqUrBGNC2%2FPjyVJKXuWI&X-Amz-Signature=68d8f3188eba0159efd171d8600adbe5d1bbf194bb6398a6d9a67acfa8886775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
