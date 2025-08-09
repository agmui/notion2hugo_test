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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BF747D6%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICix438pqDmC%2F8%2F%2FPQtlUjHCbRzBJ9u7D2h6B%2B%2FlcA9eAiEA%2FbDhl9nEC6y1Y2aE6o%2BtKxPdQGhRMqMbVK%2BljWIOByAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLiGo%2F3e5ZrRzmryICrcAyzOQu3WLE7LuriOO7DxbaXr%2BK34%2Fl2EZRKx%2BgXO9NLMUaFH5479EI50mGKc1ij03b61N7gOncpTPxwt7Dmd1i5NImSpbOAJHIh8O0kA2IFnWjc7rzVFMW1thI%2FaCOr6x7zAal%2BpMgWEwzGKLt8PcVTvE6yRlenMYRoYEQ%2BYrUrwKvGtu8%2FODKz4Bem2gu2QFrL0jWsOJItrlItahsnsV83Yi4gtt0m1n0%2BmPpm5QmDRQrUNPE%2FqZQzk76e06xwmA30j7dSt0OfPtyBtgG1RCuM1JWjnSA7pEexeCZ%2FpjCl6R%2BqM6NfrZZYAF2sGry9khh5eRmS6uZ9TUwFzT1DeoI1lCoxSPA%2FwdZ0waPJirh8zEzYg2nSj3VVs54ppszhKlEIRwAn2NIckCpnhBAZ1StIBwmHVxafWjrsLPmnYZ2zMM8CEK%2FaQLLtUazYeBzUlyyRWyJEJLMC4k50ODHIenYA9JHwrj%2FZTuhriVjrosmMczP9tkplESDW0qO8QaoVfizJ%2B%2BASM4%2B8cBYNcCVEfSkKC0cF3tvR%2ByI6DvL9XbXev1eSbLgfae6jrxOvJJ%2FFlDRv4o59KmhtKPsSz%2FX1hrlVnGuTdCkmDQiPCq5ZchyNabJjzv35j%2FsbTAAoLMMHo3MQGOqUBsy8MIG2siRXb%2ByBZlS1VSISih%2FEqLALmwP%2Bm74rkZStpbAXq%2B8eoOUU2Wq81Tb1UxxtFcnh%2Bhu7NMk7CyYGtcB9Xx2g8l1X%2FJp%2FoQNCyO6XLHCNVVuy83d1e%2FLOayQ%2FP6dOTh9tmgCg17XGCfTqo4TDrEYgqrqT9BbKt187nGziAwdZAGPsZc6KgNCvIw5cFp5oPVpYTlEhEo%2F%2BJ%2FXyn2U1PJA8g&X-Amz-Signature=330166100dc7964aa09bd196d7f8bce38cb7d65f629c87c18cb1f152fb688821&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XAEIJUA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdM3lg619ptb7eu2qFrUk9x%2F72qgoGPWelNRMjfnztTQIhAIM0LLMTt2mGJ6M475BUxeU64QTdgL9bnY8i7mkc8vnPKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy35Omk1Be2KIpSNVYq3APOJsH4EvId5r4wO%2FS4WFhEo11Wj0tdJfUmJfVrERJNfuFeKvceo00Ze3f%2FCBAoAf1K1oda4BLbvpwp%2FDn5BOAp8P8S8R0gFq%2BAaC0MBr2WiI3an9625b58IeIzN2%2F3kf1SJBTwmdsbB8Tc%2BC2NVibT9efH96uuUzprchYYGigNOre5qsqIDLUwzD%2B1UApgUUZYyTz%2B3IaCcMb%2FA4RPy3zctrjC%2BPFeqwmYIBAs0rgEFkc8Mq0rQuyU0IohVpqAVVgLI93ttZLVwfWsQaRCdzwkVsUxlBhJRAprHJJt9gqtIWnIJOHvjOwzqCmOv27HH0X%2BoQuXMcj6u%2B6K4MM2pcfz2D9v%2BYzrXgFyqToWNPp7mX8py%2FhUYkDksgM81zXBRT2kERXOD5fl12XNUzF4GWo6D9Qtx2m9qqObqBcdVR6W9Mjrh71dRVI41NRj5mrUHQQqe4bP7tcMsvDMFlXfVC6zy5HFnyb6efE4IL%2FhO9Qjh%2FHZ4w%2BFehdY4TkjNoqkScup%2BVe9EpFi1UjHTSGDm%2FM3LIz0Udc3KicfERnqTtiVWngpGfEoyFBb1RVodNSbMsPdmUzEkBASnNY%2BgPO9be64VPGJDCUmMZwi4w3doHMH8uoNGFMQefK%2BY6XjgjDM6NzEBjqkAVAk7NQEH1u3eeCjwVBy9dEUeq9Eu3yWdwq0CZ4zAVASCG0JA7OCnIlnOfmgJxAZkWsDgU1VstcVqpjBRaYEQmoUtrLZLyyIQUHYJNl0vLaFPY2wZSmvtMcLkYQQu2t63%2BT5nlyAFLwWrmcy3Cbu3dNPeGnOn8Fr2c2wK5mig018jnGzDlm0z0XWy36vbC%2BgyfUGJzeKQxDktoQEcSYFA2btqUKb&X-Amz-Signature=c43b8ba9a4b8f0669322b1bba701d60a83a2a15b70cc128c3e4f827402b4b5f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
