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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUOSXZPN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIE5zMxHTw39s5UU8cszRojcnGrn2vjq4nGQhC9e%2B9ZebAiEAwSjEkTxCNJeAtgJ53tgjaOrLaIqj18M2MlqrmINW81EqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFvAD7Dvv0GzabgOoyrcAyHZS54XfzH%2BIFvViLWrIYqfqhfrOr9umthXoLDBgsq3k6F0cY42EPkWeVLyhBGkRwEiaOfXvsX8qi6vsWvTZflSmnNUOZPijNnE7DgnSDIRP%2B6vV428Ui5k1O0L2b1ZPLrJ9%2BYxeIKISAlcDGL1ZrML0mzWMjWZXb97T4Uowppx5EE2H0n%2B8ySyu7byVlZc9ok1f0rFNnZvoJbBUnmRbEsyPXEYiB02TV1suqPmZji2YVQjygd5LgHPOCjESs%2FDRQvxD6v7dIAOT8VSLvy9IexMbw6aobhb4sI6V8BUM5tNWJYkAyj9u3BdhblTo%2FGomChUhG90iNmdYRKmMZR%2Bi%2Ftj4EBXCu795VFiituTKAk%2BQQjR7cDH6lX8DC%2FOn7xM1ZLBab0tWFswuM58tWi0hPEw3YPB8xLoWrJLOZSDzuz2w91iDwZnSDOUIhQoAgrGjv4p9mWJCeU4MhEgyBp7hVmLWSQ8YA965CrwGK0D4yn72jfPKFKZlKKfWbHbS8o8256619XbquLt4VSNxRd7bJCFq3jmgDkSyuBuQXpsuZEUVEG%2B%2Fc2%2BGjCSfYoo1sIOQQ5M5dTgujCiSZyPsruNn1Qzy1jPHVarjp5OCQazDXK0JMe6G9Gz1lJikQXbMK6r2sQGOqUBvgpGpqXP7BP9p1Hs3R1OGSbqr3NJoWhFj40AiboNNzZj04Kb0e%2Flm8Fc%2FtUc6mXA26JijvYfA5s8jojWgiJRCrpL2U3lVctYu9hryNVAVwSbSj%2BX0qAvgHs%2FDY%2Bx0oGoDJn7l%2B3FdZTbBZbgV9u3%2Fb%2BX%2Bq22v7PIDoPN7C34B6UaiA1u6qZM95w4T9%2B9bZVm86e3scKQ4c5wLMXxl7LtDtQbQUDK&X-Amz-Signature=f9a07c800dde6893a7fb1eb8e9441f050c3bf26c982754e17d336fdf33fdb8d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUV47DL2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIGmiqxLYRrhi1GBMBWEGHN4GCVUhr0q%2B8aOOLbP14k4YAiEAwIjijR9X%2FhEu7o8CML9SmaXfT2gVibvhozP6G7lc%2BJEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdWpJO6pUZcDK%2Bj%2ByrcA%2FXg4yxrGFowxbTy4s0c9uaWNmVvAvkZNfYoB0WCBbJMiHLRkibeMgW4EMCLWy2Vuiy6COICrZPw4Mzch5LJhV%2BlwG%2FjmRqn6oqYzeMcSiZzv3VbGrKtah63lMEBex9WsAN8ONM7%2FEr%2Fhex1ZLquHK62CPKqurWvmNaNZVMRuUUq3k%2Banm0ojuviiHy5iyh0vPXU%2BpkmVW%2FdN4pdCYKTj8wyuBm%2B%2BZz5fRTwyBz%2B4TdtLsbzzBkPyPRGDwOWyHOZ60NkmqTX6phdCHMNgmCKMGkt6Eku3R7cp55upJEgSd4PbY152E1JX1qgWV7qfxzbFwjb%2FVm3k7Nt3TaQ8KvFZmlqW%2BeE8BQZaZJ19v9638XWczx32BbMVOHTiyJIE678pDZHaHCj92Jpfdu%2BeAgQiOkY%2FAhAKw%2B5jxFMKB0RW8IAFBn9d2KEtoFEAR4lr2Mt6O1EbzPRi7cY9Gc5dQL9tpA41wKc%2BtM5HlXetG3XNs%2BBfhpC4zHAb702KnFezrilXYUADeDMSlIPoYtWhS6xvKqGSmrW4NQSdjVO9cTKgQD7757O6nfqsVIrLPmMgVjrA9FQ9lfsiRHAPnJwnIhFooJBLNAvVLW13dIGm7QBUb8NcX659K4h45f6czdEMIqr2sQGOqUBij4Y%2F4By3EfKF%2BXlVXibZ%2F1j8cWW3RU6xcK9Zgbj4Xm9VyLG5KkSaeg6rPezBwi2XtdAQ1%2BQ7sKvjW%2BILNfusOVIPdou%2F9WGrySEt%2Fan9SfSj44CRNaEOH5jt3NJieNsdwUjL2oKuB4iaLpFzlfXhmWfCCVEa0Vp33J25e7l5QXWUPdv1H246ktnDIUH3eEDmksw8gFNxmaQVa9q1J35PhMpv2Jx&X-Amz-Signature=607f470bc16b53190d0014f8761264dfb636f8ad4c1662a078f2727ab53314b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
