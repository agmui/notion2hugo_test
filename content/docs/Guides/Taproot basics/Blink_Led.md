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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LISQVYH%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCICEp5bt1AgZdTVFegD%2BRb5Q9lwm3Ekf6MbBzvBqjeHBmAiEAtHyQAlGrZh22g1%2FHjnORHsxF6OlKfG0Ol%2FiiBYS6A44qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNypIaR4tVQ8CZ3QircA40TQCm4Qs%2BMla72jkd8JwNkEHtc5liCffPzE4uA%2Fwnwdj4LG4fq1LHbQtoh1vST6G1aHcl5FQ7CxNof5J9mnpWCscE5J%2FTd467hoX6cqlxAA8t7Hj%2FnYA9cYxDKp3zA4vn5PLXlFIciz6FlNiS%2BLEqC4h8KTUJIFQelwrbw8k9fvCcEYXG0afanlPvmhrzUSpA3KyfBUma5oSrrMEFRnuUewxjKAT7UIhDWsMPX463v%2BjZUduOlrt1ftxH46IIWlrWHaWOka%2Fc7wJmDoQOij9DRh9ZyUdWOgSkYhHnuemL04PQp1csqzpzZf36ZXzapOeTtIJkE9JDmapqSYQbfNmShGKWfIvOlZGRlQbmuz1ZZFq%2FKkxzWrAKTD4MaRi96Wt5W2KYwBf71Cq33sGZm6UzTGr7nG3Yd0%2FSkfOisn2M034%2BccQye4PTrO33SkGkSjzawopz7uQdmsveaHSQy4Bzw6%2FSCe%2FDY%2BDPeuD9Hog7x2cqt7HJAqhLZVldVHL%2BdltLgToBUsP5pO%2Be2ptEt2vMM84VPoG3LZ%2F7ApBljqrK5%2BlfI%2F%2F7SaPaO2XpJyUCoJSrmgq9uLlwNC0MHG%2BBHrK6GHs1EcbKnV2DxSVeCM7JDvfbC1DWT1RTJANPCMMH958MGOqUBzHW%2FKekPGdaXsVmH06TDqqMMYxJ7ilC9VTxakBC6BH0eMGq8IeSfUTyiBfmnGAChYarB9ahjvS4Wms0U2L9FeLOnB8YVHyuPZxkinNW2gRXuFHxFhmtU0Tmpc7%2BtrG9LwSgribtSQ6rlUCEgVy7Ryl1zbdcCag6Vtuvt%2BWiJ7Nbaumvlnw%2BQ71GR0uOleJCRHnwxkzaQe0XLfwk2Tq2fHpOSw7VF&X-Amz-Signature=e6cb76468cd9801c1a6cd89ba73b50c75dfaf90d35925a2cf2578e3c56e93d4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PUNJNLD%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIHQCZ4%2BAQcr5EBHI1PXsboPw326EoVZP5RQkwyb%2FPOtVAiEApL9WD2e6FnmjLmKRDQFDz8SDLMT84FieMnyvykxAg1kqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdtDZHUT79QtJebXircA2Wg325%2F7O%2BlsVMjxlbFaTkHoRMWniFQpbYPV5XsIzgM%2F15SAz8DvP7ngopq5fkXOxzswL9m7Mr9cbnljx%2BnTg4rvI0S6iqpfmnhHqf4Gboj6KMyfkcCWf%2Fss7O12aOc1eKZ%2BpOaa5Aq%2B%2BOyZQdaE2%2FURVIVoNZkKC2JIv1T0DktL5V1t6fGOt4BjDcULaxpL1v03INHeu%2BNn5iBOer3TrSPYGhYKzj3WDF29NpGsQehZGkV2tzMrOoh2LQ2LREEEzmfpVrollgGX2rZsv1GvUFGkdL5fB7G%2FwyKeKPffIj6iSsbgQQgb9FwKTTyikoG2WSjvKECEOGCCxsi%2BjN8vuuv8rwQpFdg%2FtIN%2FyMP3nkXUSSIW50T4fHCAtmn0s39RTm4o4Ayzy6qAGNoYpiQwMdFxYPIBAaEk7ohyePh9iJLJrmQ7qGiywzIbVTv6G1ADH1v85VxDeW6v5WYvKveRD1rXY9RuGVTbSnrqr9IkGH9D5T2%2Bc%2F35j1cMg%2B9NAlwpWcMhFDsI1stmHfkK6Hc08q41s3T7%2B%2F17wZNbsqgMMsBRdD5mC8NP5r%2B6ANKLpjvbDmeJ5wfmpXD0R3NrL9y%2F5O15ZNnregqnOhwh6uKlyFA7IepOl%2B5%2B9J20TdHMPr858MGOqUBWGES2pQ7hoSum4Y%2BqVH3C%2FpJeSAP5cJcPlgZXiFupw%2BIdEdxnEyG4732Gjfmc2zLnwpkjb4jN4BbjQXzp2bVNp2JEwF9yugftxCtxNg6h4FYHpvRCo4FR%2BeBcgkEj4Edq2XHkGFB5bSN%2BR%2BsRxXUwbKteu0R2GWMZtMRxawA2emBAvWj3%2BZdG6Mu%2BVH%2BVNLRcY7%2BJntdow%2BPFMwkVwDGZ6u2pLrk&X-Amz-Signature=391604ab65177614df9bafa3058f411f444654d02bba143f8bbc95650dabdc51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
