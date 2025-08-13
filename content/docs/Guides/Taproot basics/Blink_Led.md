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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UULMZXC5%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGa39BMOttnIq8H9xsa9geC9JjcvScS4NJ1JLd%2Bc3PNHAiEA05Fy%2FoZuoP%2F1376T6inTYH2LOdwaIGBRxRvlSRPIbHQq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDG82r4j6e5SZ5gsHFyrcAxC6pDIkQk2vpDf8MLv%2BAf0OMtWRiNR8zB6PeZ6kgEdMx1k7sc4FujwVVUGuLyEQudbc7hqRrAYRjn%2B6VfpURT9ZOYEG3AE0lJ%2Bp%2BqXa%2Fw9kAR8pSS5%2F6d9VoozC3szwXxuCFyJ6R6bu3QtFq4veXaxIWpSQm6%2FKVgUNjLy2aS89Hsg287W72RhgO8XTIv5vYvLg2oNfWHQ4xCeLrOZq8ZzumBtJHq5mP8GdegmBsw6qLMgiWls6Q4%2FkHLsJ9ZLy%2Fcb5DQbyk7UKG8QQx2Nm3y4CgBy3pLhdw2n8ezu4guei8ZXKo3dVvjxeR27esWAsz7Gmu6kIyoNww%2FEaZeFc4Ebz3KC141mbGltTxVaDvENGF0M2T%2F4jmf9D1WpuSavzq1PMv%2FTz2AcUsHMKp0cTWMVHP8vJz8tyQMe0K97rICsM5litnvQQFZvCo49N531zZ4r5kluraf5O9r8RBIpXOWe%2BfBU%2BFAGqJ8B2PSJV4j2MOixkw8oyZFOe1ML1fBuxdwi%2FTfE3AR3Yx2KmBebcGQD5qPv0vWKoZBQ%2Bj8BVucWtFh00krywdHp%2Bci1Pj02NzuCiz1pbbZtW4UHUnyp%2BecJJIYcNjTn0vooKGeq%2FS00JSVe0JaH2Hp6PNrfEMK758MQGOqUB8kWpxa%2BnMI4XTiBj1M%2F8eKbKiyYnEeLPdYhXRvrnHnxDEuQ%2Fm7hO8MF8ZTzGBllMZgC9Ua77M7FjfA5%2B2iowwPwntQ%2FYTaAz9boSw%2BIHiboFlNaSm2yNVubAPBRM%2BduL%2Btplw3mZIiytOZDyBWuMC0sROBsYCn64KA3qI%2FlWEj7CgDvvnJi4ig1Aa%2B%2BCjlPlbO%2BRD1BO2urYSFeAvtcn2GBOpV6Z&X-Amz-Signature=ccf24c80a815fbe80706ba9f89d329ee09ceeabdca784d4d6dbabe75feac0edc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNIPUWER%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnADE2iM%2BGyaV9vu92XSPPIC7S7e5lnqrGrGeQLEnT0AiAmqY1W1AP5PWACa1q46cdV%2F0Jxul0LcdSbcamO%2BQmz5Cr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM04%2B%2FC4oCUys30XumKtwDU8TwYOm2CPKbgukKsxOjkTFbYR3CtoU5X%2BgGVb70l98Bw2y9jsf34i%2FVnscl1a2MpIPKpnxfKf4JX74t9Xt2%2BCng9bWySJAOWzHUF8C%2FqSrylUPWoKMitJOwzm0JiTLNbUhtmHEvegXJ6MaGG1cSeRZau3OhYqxdKHh%2BOhHPynOdqvV28bX7vOfm92UKPyT0534r4ZedXOpaZFLEIimGmF5Wqjs%2FyKoAx4Tu99gah%2F8BmeDVVzXV24HUPqFgXRu85UFD%2BTQ6y2qsv%2BGcwYjzeax0JMxhcIfTeroaV0z1NvL2eMtHwPKC3qkwPJLznWA%2FXrVOKNQrWKlvfNPucrfZ68VdRIykMUb5nSXBajgeyS6VO%2F2ari8bc%2FuVibTUguF4SnNbjFP31o%2Fju4Xoim7ZfLqJ9ZG59mcP0uCxKVRl6ACTF4DQpVXKPIp3vlnlrX1YKDMDW5qMpRTYHNWhhxuTANbPQ4BUi%2BDCote7Nn%2FboCHY6Hc0GZJIZiAr9IpYrBjOCW1Z2kXNcqK1jPN75dxrNH2HnL3jUVZdOE9x%2FuzQTmDXGn6DBkhaz0ueaqZy1FSgESKG3NjQtxtNtVUTvAIFVOcArLJyfccm3z8f1D4Cii5siEA9nnQ54NUoKkUwxPjwxAY6pgFK2u5%2Fv%2Fd9eAOPosGVs0c4vzQL5b8d7n5TEz5hluSAAY75sQ9wxhnn3n7FNfnD2IsMxHPKHK12Ld3Ib%2BEx74ipEn6VPuv7U%2FidtryHY0WKZ%2BjzyUs0qfLdd7Qkl%2Fvi5oJoXgEj8Bho3GXba7NJnPrn4bPjXdoHFleJWCRGIsDXXqzi9ge0g0hzM7BMvFdBBQO2JvIwlQbsZOozuXTBj8TH%2Fzqo8HK6&X-Amz-Signature=58b7e18916b22986d44ee83dc3ce976d709783dc32447affa16336765a3ba5d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
