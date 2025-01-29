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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TZOUIX2%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T100801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdzO7IcMcnHPu%2BARL8jbuWfBw5ANiVSxreyFd6IPysiAiAQTPpzjU0L9F094Ok1nZ2n0WmxwS8BKWHI7ZF%2BPOIm%2FSqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGsgXJGtedeeWdQRdKtwD3zV3NUpKtN3U3u3b6Zcqy2QqvaomE%2BderR3VNtOoEwnyRTg1UggRM5tV%2FzH294buUQVK5RGqRP6vXGcqsmgvMfqVaHX52N6i8XM7mJB%2FXZ6H50Y8N1wiK11%2Bolf35VdNBwl%2FUrS6%2FBbVaII9EeB%2F5M2%2BwhUwH6WbrhYlGZZi3C8YMjaPZBgHDSJiKbXOG4ZVZjAdy3cSPWeRf8RtPVd%2BifEoxNbn2tq%2FsnA2CqA%2FI9WdxXoExBcOGEZALQldnMVCTs5qtGf4TeIIYLis3llHrNZVgDY7iYhKQr41PzOSx7xqHR7sSKeT0DmRpFLhyIIQH4oLO39a1Fa4syqPf0pjQXzE2AOFOp4O4Q%2B3RPaveL36OGK66vwjwbOti9StajChzrEFhL52CALgepZ3%2BI18pDbP9ZLLMmbGvHcII3ET7%2BmOzt5gvE4NLFp5cVWh3u9qQP7lpVwcPkEIV3lQUpXVBdH6fr7E08lqhJuGGqtKLLTQ%2FiZK%2B81KtovOvUtSoglQeNNb7S7b6ydzf3s93zIksSSF%2BRr42ix8hG63waLAK0VGf47CwgZvdgQay0THj%2BUbalunrnqWKcwAAadvpwviFsLSSxuy4qCj%2B54rl%2FIH7b9RbHSExqcBssPDLlcw8uXnvAY6pgGoIqLcOdUY9av3Kz%2F0KpKBUnK2%2FZr0WvmI4LicJgtAM2pYDDYExgNs9UANU5JV7t7vFkrRDpv%2FDZdUyMqN4dn2umVNnPp4QhE2K7i9vOPPrPKCntqyT4YlJ9cxQ1zp%2B47xMUp9l0NJmgRMvhbX1a23%2B2M4%2B6U%2BJ9NTq7qp1M6aRXG2Toe9gmyXFr5mq3HM8vJeO20uczc9A0YqqffFJoRzSUMj3LZz&X-Amz-Signature=65e5a2a08c11b570ed3794489033e5787b852f6c4fa4ecf712e6e8e24834e03b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZEQARQE%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T100804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7g0yIg%2F135JQHHQSAP0NB8FGDSI2jPZXcAf5wctnxAAiEAhJSMLYZxNKUNK6qjU0tvP8jb7lh2apYlLnrttqgPXHUqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMX%2BB6VJTBxQOOSZwyrcAy6AcpHQwvFOlZg%2FPbWsfriFe7jrszqVbROVv87tqG74K8MRMrtMMuu0a1OfssTlS1mL9buxl9GSXVY2GF02rLuQjBrpAI5PTx6o2aHqDk%2BIsoadQ277YoKrgT48bkJSGrKeItS4rjlXH%2B2I1z5W1rktwvcRWI%2BS9JNHbLY%2FNoyql2QG%2Bt%2FdYg1KI%2FKOCdobv20jupfK73OhFCC81nugMZnrq9etdFwBn%2F1lfJ%2FerKyghzyAdgYsxiGY%2BeQpqjMcrfd58UhxF%2Fj%2BpAQCev%2BcR4Kzg3v6BIGIAAJ%2Fg6D3tsToT7x%2FLUhYE5IGS8upKUGSHLPiDsYbSkB8yk4RyAr2fdhco2Bm19VyEIl34fjs2D71zOzwt221rctEv09YYb77ybunygpn2%2FW7yiZvoMzurJA7ZMBCSGFWbPp7IU0NoM%2Fuj5IzXnae9bl%2BQoEqGV9N%2BXMeVR7pSLPiODmPAFX9g4SSj4pl1cdvcBYQVb%2FcEuWWD3rW%2BpapbRJY2nF2AzZ%2B8kbWseBcZOdSjgr3R%2Fg4hS9lZ2tG%2FjlEMqPzbP6aw6fKalIYKhpFuA9cxl4knf%2BFp%2FYsrQBZaCEcenReez8F4ZbiV3ppZqBTuKIiBjZJDd0Muchw%2BCzjFRHOycY2MLXl57wGOqUB02inJsfn99HvDHZIMGxt31dBOA7gS7tCl4dphK7QTej9Yl3ZJU5uXYhi2bvqOI%2FWyANigcPMox9ZrAxKWLXBM72zF2MgTzEqNX%2BG9Tyq8U19qhrww1fDW5MaijAPI09FX6dfXfTJuDSW0bQMjmMOk7u6ZAl%2Bt3%2FQ8y0HHx6ZaviMEaie0NGmU2PcZuUNQ4h5aTF5j8T%2FONH043YkBohrHwlloW0A&X-Amz-Signature=bcec9440d462f64b88bfd3f9075ac9c9a39376dfa10ef950d1bbc5720bc90373&X-Amz-SignedHeaders=host&x-id=GetObject)

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
