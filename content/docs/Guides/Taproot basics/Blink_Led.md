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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LQZ3HF3%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T140744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAq%2BQEF3U06tMtXOH4VM7dY23L2xDjFxgWcGHl8G0VMKAiEA%2BbaiV%2BwhqR%2FhmNzHa5hrAVuiO0Na9SYKRBMYnIhar%2FAq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDETfeTPK15Ea8dObFyrcAyS1GuK%2FF0FWi%2FlVrZRl4uKvCD3zC3hv%2BL5EycCheCsuoBVUFortn%2BiSTI7%2FtUPrW4RpE7ev0kQsqPHQWn4krcwHwkX0JbXcAFvglRLDwky3mThr9vnWehr2buGQHg1dH9Jc1tFy0jfbWbOh2ohhu%2BtYyi28R3EMBTSvzPor2cYTrvmycRzOw8VDATLrOMic1YNyQF0gaSndf5ZeJz%2BHqhUh0gpA6U16Bx6WohYxKlhKsHWmUyqW%2BIEhxVI0%2F7LwN7VPnpFmdkNHpJS7l5VmSgCy5xH37UQ1XxBBVPgd%2FWq4BIYc%2F5Eu4OQhIHghEagvhu8D%2Fh6Cu7u1aZeuSQhLLlocO0KCo5FA9JRIWmEUFv3Mext2zCf7WXnJuSXlBvwah0CI7qbYAcGymseMRfcQ%2BXl6nseDLccE3QzBucJahdxoSTdNf2lZtvG0W8O5EnVDQVGIXF4UeYYw1%2F97nxTxeHxHBS0NxLqfAwNAtZLXwGlDz0dBw96T1b2LScAcy4kTahgTqNG8e1bQ2DfePHpZfMz04c7oeQBanit7lBqtl4PQXD47x2mxogcdWnZ%2BLQoiSGxXDzvPbSBWN%2BujBhu1l7MZMrmatqG18ywXf5KQbG6GV%2Fz2oXgiLnj8l7U3MMPQpr4GOqUBDuMMaI%2BiMG1wd5tennq4tH9lnmmW5g%2FhfrpEii7oeBHaABelKNvgZWvXRI7jbh2T%2BSwH9jCX0AH7z5fSa3C6w2mhIp7jH8I%2BxoHU4xLF57r7HsSYvqF4qbYSqdOzT3IG5YIlmDEdcwpgwzhzFHV%2Fy6h%2FRo%2BgNnfi20idy9%2BOk52ZuK09LGhE1QORZOEoCzK0OfFPL28ZlRA6UpPomLF%2FWr505lD%2F&X-Amz-Signature=1d13c53c30ae3cb2acd3bd5582d97bd62fcba1473ed08c2e79e8ea01213b4194&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B6QWFCC%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T140744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdPfWWyulnLfIRZmrCWvWWCB1hyx1znrM1rfAf%2BWqo6AIgA0ii2ftqsnzOjq2gfe0VWD1TrCfKdbZ%2BWbVCzUqscg4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDOFICmhB4hyr%2FH3drSrcAw1iOIPMY9PzU4U5JF42GCio5Nuk7IzIMD88rbW28RHGXR1pzkv7OzgV1ktTdCKiN541Gl4GWoo3zEfupJjFGpzxlmAD3S7EfBwOLChWankv5Af3%2BEb7dohhfc%2FPpqUVCdB8CtvGtAWfRlJHPoYE8O3roff954U%2BpZJc36CvVVrRpmJxWvAYfhfQ4xmILna6KoFB6K4H4C%2FHWvHomxsxpTjhQlYAEEe6zf4EOpNLL0%2Fibt9HpaCAVfwRyjKhN%2BEF%2BRgvuFDKHE7PDCsF4CGGb361XF5ovSZVtog6sdCCwVW0pEisClb%2BVaqwqcLxhBqr7HfPtNHxlnw%2Fo6S4ykoX0Z5Y4Myu20cnTrgLo86XbqCQt432mVxz69KhftGIdSsIaQ%2BBsJ6f%2BkPYDTkyk%2F%2FR3upQD4cFVjSMHv7M4ejHdCPdz4VUi8xnZKk3nHGNjJPsLp8bt2WqZP0mSMNyejfJaU9fvmNYHi2xpW5KlVuDyfyZIVtYXEWNBM57VQaNBlCX8Z89iJn%2FMmehU3EH7%2BPM1bQumEaj%2BxqI9YIGyQdKqYQDcT38NtV6%2B4dKuDOV%2BPr9jjCfVQiAQye5jKaHeUiByU8wxk0YSwIsN9GMVTqdxR0bqSoM7YtMnZeZ7cJBMIjQpr4GOqUBgdps5YPDh%2BXMzBCyfbXucWf4sVxw2ThRaYR1sFMsgZ4mLfNSDS9%2BvgQLCanlI5vrLx3ZTI%2FnWAiA6aVOZsMl9J8TrA8k5fEq85wfA2mP0HtoLJoIBugpiKFKeV4nsI0Alx7TUu69sklCnY5Srv1c5uoDFae2CObuDo6T%2FQsZto7YVpo54hNpBRXP5SkyMtiKoHJ6SUhPzSYR8KKadk2vYLqMzdPD&X-Amz-Signature=5749b2835be03a555afcbd2db52417eb299939c6965fee5081e1e55ee9317e55&X-Amz-SignedHeaders=host&x-id=GetObject)

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
