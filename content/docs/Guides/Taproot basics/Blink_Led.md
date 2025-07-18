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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6CMRXTA%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC5m6BnJzLXidz6bc75kbtxveCyt13qLBcO6TZw0S7lPAIhAJkelHs23oodBzOVwIahSHKwMFKllL4BRaHNJuukIQGEKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUjrKq1XVD28uFo%2Fwq3AMF8V0CA%2FpouvYUFvD01nS49cfwE6TVopYHGXms9MKnocCiwoDuNp7Af%2B1eqv6oG44SPv%2FjVqzBHmJ3CBOd58zTpYhO1KNNOn8QOdJL6UG2tKeV%2BG21CDjrPd8UJajBf0BpapuTOODv2ir%2F2uL828hYWWdzrEKqnaw1xMB%2B1dKr7ebDKgjGxFG%2Bg%2BITyRlt%2B582rYcMkPH9RRvKGk5RRx4qd3roc379yYoT%2BZ%2B5CUGZ8%2FuHmNE8Kgm8GZDfsBlwuzo5HcV3AqblOzwBr4L8AgstfJP75QPJR21n981q5hvrWErwPBQIfLPxOZQjlU%2FG60DYXYtUQPQdWzESERDIomSRFu1yOYj%2FrxObZqHsZBRMmSB0FOLU0tzQ%2BuGNBmhTJTBv7HaU5gNYcW2u7ZlyosOhHGiNiSz1Poc3O9AkvKMPNTvE7hnWSUXIfeSmTYgVwS6haH%2BBwGbwztOQmeP8dvqLfQpW4Sm43HbrEpEggvpAcD5pW4Q8ed9OHTVvfiMJVLjCp5Eh9m56R86DqUiij%2Bi7TnZTOus0JKZ63rpt1ZkUHhCweOIwCVd6YS53TSSLhGv3obO0fxqb6kws1vtli03gFe5FgsvlLLJZaJK%2Bp2d%2F4%2BN4dXhLCH0QbMe5QTDFz%2BjDBjqkATxuR%2FpB230It5%2F3A3q6JAmfNU2b9atPFl7gbAJhDHpg945sLZQ23owQhEel9Z0PUXwEyxoWaoQgT8BbKeMjeUXtD2Vcm4S9bG6%2B4AZLxA2rc0Y%2B%2FMvzg6WdJlK0G%2F0GYUCut8uIVZLqni0Oml2nTzsNbLmm%2FvuY5Rn9SxshWIbH6UorFuFgba3mIf8hj8ZHfFlAB9KvmIkLEOkAksJHSfe%2FdHMF&X-Amz-Signature=4263619b97e0ebc3db9cedccda84631e90f6cc9f1883608fe7eb93dd546bfb27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYVE2IFY%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIG1QQFtPG20thbQA1xWi1rjdBDPMUq1D8P8s8wZumsJIAiEA%2F5CbRdSr4bI0Jysekx0fujD%2BonsjtYRThzvv0OhaKUYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTDXR2PsZww%2B4YApSrcA6iAyCVeoCbiJpuvOxBkAw78MHmzmM2u4Bl5eSoe%2FG951rrzBgMg3oYOZciwfFqCzecIGVxdGFb4DNkHxWk2vNaAkP000gCq9Nunyao5UkOy6cQ4msJnVG5lc7TAYRZdQH7Q%2BeHpAqZ505tom4EUoCVgh1naLcbZFW0UFKBymdgd%2F9o7xpPDAeo%2Bw62D2hbIzwOQSADFBH1%2Fqy1PE9lwglE8eEHtgVmZl%2Fzh4%2F%2F8D4ft9VmDNGFFy%2B00y0KS1w9aQTO28htiU6%2F8VwDb7vi8LhgOZ7%2F7bRDG9gGkZ5ULj14CEPQdGnHA8Fbpa7%2BsMgNEb3tnMjaZTb91H7L4WHAm6TXCArxxvnbblXSrveum2%2BdbjdB3k9yvTBCxVlJ4J%2FSGhGqPxvGvgPHu0sfmi8SjqDy4%2FJZpodhnfrpAI%2FrkRN7RED23abHpWbjfzqKB5z%2FPkJvCfZmv6x8x7VfSQ8WRywnQl68%2FJ8jgfEmqRkBGvx82vKo1ptNrIUek8xLG1pEPzVrseejyJxaJwfnwZpVicI7wBhoCrIOO0NpdMLlmt%2F7mXWy%2BHAqeSI65HD94hRg0gdGt2bynM7S6yzR7OhvyJKkyRtWnTAAQpnqtVYGBhH2HFJmanbOhGIRHDJECMM3P6MMGOqUBaYApo2iYOuOB6%2Borf0xHG36btbAFZEb3krsT6OHQSV%2Bfwes2yEWeFNCZQdCSOaON3b1z16tFHCvwlvdEN6nYwiqLwGyH0WP678VWs%2F9bi4U9LzSgzL6mtp6CqsEWdAw9%2B4AHDoWUuDE%2B91VTGsPaPf3fAg%2FxrFu52P1ndboXc%2B%2BZCWG73W9uxqRbQFVjZ7QX2bpx5xj8QsKFZUfvUiwq5owflvTA&X-Amz-Signature=5cb97b447f16a6576182ec6d122076612bf65f14fe7cfc1c894e9cbb4db4e0eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
