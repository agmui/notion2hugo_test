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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X24VXP3%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuOwyCknHTkT5pALPx1KI8ai96xVlxhGkGBayW3UiXzAIgJJMfdzP6UOA0IwNGalIUAK0KLyors%2FPjnseGViAbVaIqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFo%2FZreiSt%2BnS2htircA32W1XwKn%2B%2F7dU%2BbovyCjidhtOuQJLmCbIPMj8cw7Jo2Y50UkZQmPoSXInG4EVSpeg4KKi0inWA9%2BJm5VOo1lFrkAfUn9MT4CRG2nNbSkli6CKbwhuhfcm9MA3kYy4tOmneoeO7cclwxUuQoAP1FAmcElotB9axoBwnaBopVCgsqByAef5jjB2zB6piKeTvnt2OEaA0eaqCYru6QFHF4Bra5r1pFHqRU0v%2BhKg2UYzVAv%2BMRGhqrnih99ljuc9YdhvJWhUjDlabMYjcv4HCB8pNK%2F%2FMBqNPyu%2FnreRD5GaIemJS168G5sHIoTrwNHWLSLLP7ZaSnrBgCEPZZdyMwlgwx5REn3KRAP%2B9kVthHhBCXX3YckeBcEHaWrARv0XgmxNs1HqfPTtTeYGT9FAd9TdjmonK37CoNzPYeZo2Ksguq5ZowXKAP7sQR2gcjvVLPZhHrABdL6bEMYDCRgiVGNuhYwn%2BnaC4Wg8wo5uKD33tXDrp5TQ9uZDuLBIqIyCh%2BDZ66iJavizq5c6qQwE17%2Fjd6HQBhRJvW8aCHhmnLD3QwvJGfnT2dteFLfViHmQ77liePT%2FNzhr0AeJq%2FP7tKnYP7YyoaePTq1gN7SwrYHL5%2B6SB6ANDLkw1vj8DEMO7P5sEGOqUBJStBNd5gu1xqeCk2weMUiE0xH3OXle4io2%2FjJjKhYbhP0bMoctHsOUn5RdjTG4w2edf3mS8b8JXN1vnUDxUsT7wzsG8kN0ZQKr2a9%2Fmd2TTwFM88sJXrx73f%2FRghLPZQXTFbBSQI2oFtUcupkZ%2Fp7hRO8qtaZpR0Eq6QPfOh8ep5d8VSCc6v93z%2B1q7j4bZu3Xte8ZlWUHENItZgcht5fQgOv13a&X-Amz-Signature=a30f630645c44eec27ef648515f04a7262f1919ceeae9321115db2bcf9e17051&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWWW6TWL%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtQ3I84ua32MFLpIFcLQnOVNICwOk79X6XYWPmL9GRRgIgf35JUTuefL4QiprqOhXdWeEez8vhdkUkHbkHvWfslwAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBoNZnIIfGThKASNCrcA413DM6GY9bK9R5xwASRoPdWhjebrA5Y2ojwdKvaECnsSprD2vJslF%2BtI71v7x1zx3eD7D%2Fv6YOi%2B39%2FL2Pi%2FBdcQYwaTnG6q0gFFFY9eqNYq6n1f5wXLOYGQ3z2Z7HUP1N2d%2BXuGhW4v3ooQ493v67Q%2BD8sk5iX9kFwgM3J1BLT0cmj877HXdZuMHdlbrwK13habfxAINHDPfIReZeXmJscvjv%2B%2FizCPvtNuZvgXd%2F0UQtOfyKBSxIzRrnFI6aYgWtU2R2yEhiEUeDVe6ydrEWTa3pp8RHkVY2b0wS4OCgRHJ60hZS%2FJNBAmfppeeC9VT5wGZI0lZ%2FxxusPYxFJdORsnIUBx4eiXjuWDnmWbKgHPMgy4tMMjca6xuzdi3CEHs7M3kopQRCZjQWajwRw1%2BOaVc1UPTZPJfNtV6xniN0IDbtvLSlL7J%2B5Eil7SHdpvQAUc28vpxwnVr62yxE422FqTKiYzyxO02nB%2BR7PT01eAswUDpbWTc6YfXA1kqXJp1I50%2F8P0ZteZ%2BbtoRb%2BTJeUit7JT0K9rYlZsacdNYepJDpuOaUhVoOidN0jKTIdOKcCGaTWr%2B%2FKjGDsJz6m5fCoV3oqD71vBDXH5FJyQ%2BzGYdXK8rStjXWO1oPXMOXP5sEGOqUB6HLq7SJtiSuHI5IvNBTP6gF9zKyjO0DgGl6EwPxSzjdGoKxcMLq7NuZSHmxUbKXMitLF6bZEzUIkaECfqX34gIJfDdwGXTE4fgOzfVc9%2FK%2Bu6acwxkSQKPlaGPYDIEhfkZk2s9iMnhdyuT7uJH%2FCyjyW6dNIp3b8TY6BW6ogoHziaCkESd%2Bp981NR4f1C4wFJDCClzsFFGedjXIYw21qyD6vYe1d&X-Amz-Signature=609c626374e09a589c943ec41341babc19daf2c8bbbf5f690d5848fac7aeb85a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
