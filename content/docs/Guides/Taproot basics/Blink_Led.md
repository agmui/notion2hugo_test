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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNCI6GOE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQD1BwV8MUSCq%2FH%2FRNof9f8OAyp2wHnclQOmeKtGkGcSuAIhANYaxbw3wdKVgjLugHk4OWnCnsbnpgKOTEaPEYWOdwGdKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztKAochlnEH6lW%2BRsq3AN7Jrse5CEc6RukFpEgP%2FY243SCSmcw0u9mbky%2FgzXTAw%2BflWsNv08QOy98dolHCRUu6PnnAs8nOVBp69rqGgeG5C5CU9krYV2Yo8IvvOQ6GNd%2BoVDc0kU%2F%2F35yNaCOCMBU73MbEeWdY4E976lKEQoWnh2b9xfxLCHM4IJY3WsgEkWNjVI2%2F5XzPmUVnKMzfEcxoqojhvzxlqD0Ik14AbA475Jx7XlfYvem%2FJ0bdkjVYrJsLOYgQrJ2CSCxxlrWPZ9Y1TzTgWhUi6dTUGy1tVdM%2B7p48hQNbXXqMjzDcgxqLz%2B3V7h2faWspENp6rP9L0pRLiHLBJJabSVENR4tAaZcOIMzThFDqMyiuKL6rh1Rx6Fnk30ycdBGORU15j6%2BqwnEYO4egRcxLU5L6oTGL%2BYCqLUtSIK0NQTHp5mMMhuU5HJBMEDuXPde2BnIo3pISfUC4AK27VXytZqAmx2GpAWxMEarRcoLTBf6qZqf5urFyu%2Bkh%2FPZw3ajzeDNC3KnaR5KaNxwGfGeBOKg58CBqc4MFkxkinoDkvJknup26EttuchxocXIZmJLzUPuwbPV9RRIfz0BSydreeui4dTQxXjLZH8hT%2B5S84m33yNrsWX9wMJLzxHD1NNUn7p9ljCqkIq%2BBjqkAYie4N0%2FsKvx740pdxdWJojK2eq3EkgmLKY0flOnh9eJNJTuakS6RAtycga2Tu3nFcBUObWOLLXmwOSIRwaWD9L36sl%2FgkTvgAkhOED%2Fo66qS1lv3hmPzLNIaP9IzZGCYtIMOApACSQYr4TzvpnuqBrKS2nuEP18lyLMSE6Mgd%2B3SaQKJsM3%2Bx3%2B9knDNEaD8SoTrct%2FQ3C1RUnHpWiBahRcOAtM&X-Amz-Signature=d63b9ae03238c7533278267e9d1242ae401217ae215839863e606cade2fc3dee&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ2LU45Z%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCjkcv7wEqyJqpH53%2B3ARZEwafBpnd2xDux3k7KW1jFewIhAJp2kZk1qSv%2BzxQnoBrG6pl3yPEnX25cSt2XQALZbRRqKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjziDlkHUmLi9QCXsq3APUdVQPI5A5BxfYQfRQpOwv8anF2DdGKDOj8WumLsNxLogX64g8kA%2FCbPIC%2Fp7OplqFeCBmeJATTdcupAJZGV6kwTxoZ0giUxByYZ7dUWVRRL4OzLLm18LBX%2B%2FHTlWfpDCBBkBfhbsrn%2B5z2UqxtFRhYgYX6wY%2Bht%2F5x1rs610d%2Fsfd76Jh%2F6kUEnV8WMTpBpXF4OEmnL8EmX2waCTUv11T7DMq93kSp%2Faqdt5FH5HCvaOeCpTkjTN7crmMMVhGmDf4bvu94v3PL866P%2FlognPmGK3rtWMfq29B4dcXBO4lPqE1YKwTSH5ysEXtyanZUw4EBwXmqJNy2hKw%2FSpMtwH2QkBciP1oab6vya1PfEGsHncMbVJR8zNqrJboRIF%2B8wt4fG82LTlgIErSM8VM%2BR8OtegTxXzSFkbpP0Chwpeu7WKbqCpotNVswEQU%2BEV3FtFrp9CInTfS%2BMJW4oIVJknBo5ydVrAiPO6NvBG7XBQhBxWLp4X6IPyUiy2HlPsZgz9u3bzunSp26%2BeGsvYktrReL1lYt4lZ0lIuoCAzhWGPj7RJwgBl%2BvOO9J4mseqmejWunfpLabLlR%2B3Uqxm2IBvcJBZrsActpmHCYmmwNG%2BjHxiGhV7yHrO%2FiMuN4jCqkIq%2BBjqkAeAQVvlMvGgmPvY7Ee4vlw7%2F7MIEyqFsU4UyBQZ0EuXOxU3%2FxeCOLQJObnSU2Uz8fXy4Fx2%2FIGqoSHMm%2FLzYMGWC89qHNeT91KhyJEuO%2B12HekY3koacPE75E9o1lFdYWZMrtVGwq%2BnzeK3ZbN8iX6XJ0yslByv9p6DLLgtArxi1EDlDj6wS8l29NeqSPbghDSyUZwDplC1jGXHCdCZb7Q6EE9b2&X-Amz-Signature=968e43ac659698c7c06613d7f3b8f9d8e8f6bf628c1d11356be85d4264afb7c0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
