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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKVXMYOV%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnF38fgrzEJkWfX1pVbweOKHXu3%2Fa4PgLIjAYBRSwasAiBXoKCMpkzghwu0NIfCkmpWlxsFms0AwCGr%2Fe6yaZz4Syr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM15gD6IU70v1p1e2kKtwDFh0nzRtw%2BNPD5O8ZRaP4qUhtxIUDUpIbVTlfO4C%2FgkxgHSK1tpXy%2FiWDx5oHabLgSKmG6m3dqvn51QADmH8UwcKkFG0MojZElTN5TctNxTTgE69GJPKLU8D53jMW9wmE9TtYsCfv9FGegeYdeC4EBSnS0iM5HHseq1%2BWF3np%2Bb2LJpsqj92%2BtroLlaj3tlXPy0Bxqi%2FI%2FyYnJXYeqx8AYd9Pm8%2FOPUlnDDca60rbcLt4HeA5Sbyz3qVgxZz615D9DAOepQASoRpajP8jBHlpzFwyc8zPFn4gu7HDAPntwfdtP9FliLSrmw5DQqbCB%2FkibxLffqjbTihmveI%2FbBq7v%2BWvyttONXpNSkOmXOCzTQrvxi2XqjmqZJrPsSbYpNcE4VFZV%2BdDiXc4AUsNSRGokE99k8LwBOYw8fSk%2FvO1ZyOHmeOq3e3M22%2BztJ5hqhZuzMyvD%2FCsE7fgGrhh%2B3k%2FrcPwqXJNkWFgM0CvSDQg8%2FPLA8rJfxIk%2BUo7E%2BNQ49VXTmte5TVokutcy3kvm%2FXsb%2FRuho3s8Cru%2BWDYnbVbm04J6wl%2Bb9ZYK9shviXVw9f4J4zu6Lzj2JBZdNW5oVnuyKTUHQu7iRzeqZw5BAz6QeTTSGTSvReKJd3ZVWcw67DjwAY6pgF2ImKJ63g48%2BqRCPj4Y6QAH%2FqeKLsxPTp70XHR7h39j%2BagyjnoVH4xvEUpAc%2F%2BvU8iRhL53dBEFhKK%2ByRfmbIpiXTsbvLphAaBiPUoFdH8twqKx7rjmyBsgRHB%2Fd33MGfsgk2%2Bu0Y9evTnTCi9vuvW2nDdtmHGrqAxOOb3BSMgJYkcnsLl%2BcOdWyzgiv%2BZPiNVGfwpRuqZl5BpMlF9RKj0YvjClSh1&X-Amz-Signature=0732409802f37aaf749d686dbd2de0b1d5f4771682a12ea6f7329de313d03ada&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZT7PFKP%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJChTQmGJCJyc3TOmAOoA3CEiRYb2EpMqnYohODn%2Fp7AiEAjcs2fdZZMnYWw4AVukuXLLV3Sp9qM905MXEvhBdM%2Ficq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDE%2FuWAyXGs4zjzaJVSrcA0%2B7HgWFJVqmjQMBObGy%2BwnE2ZLNGdtJCbJo537QSaBJySlA76rCjeekjqA%2BMEreYUWBL8fB6ixyqOhf2CuDowD5smx7YcmoDgL0s98ffElzR9A4sIm0n0HtMXNIy1jHaCn8qA5aOF%2F54ThCGRB%2FOFEsYLs%2BlqDwbP43mW5qZLR%2BhiL01L6X6M%2BfK3uGT7JgfCXlxvg5SolUSiNSh2HFKgGyFB6ft4s7EZMY8Taws6ysVN3IYCTYBVSuLWAb0UrdqALvH7pn7sFMf8iD1Me6lf8k3jYV9Ep8bIaLLldGoyRSAkyxHqpsbP0ckGW%2BEmRZUPucXKBGBhU6w3Cu8iqMRzyDqYeKFEtmEhLrk0fmfS%2BXHzTcQeUtd2GiAXrFn1gmGmybJV5iA7M1Wr3cHlaJwLx%2FKfR1ND4ebE4z9tlhG36VZCfimTkMZwQyS%2Fb9IG33wihXQ2fJSil23PPOXs2ZJO97CfNYXj%2B%2FcAtoNTAD%2BqfbTamFwOWHKEH1KpspbTzv4V8GITHJhlYAtZAUtrkRV5hWnoNl5WXlM2tED8gtyhLjxlANAz%2BMSwwJfln%2Bdv1DWDUGnrsJ13eSKeWqRQG3zK5B1UW0rpOxoEJqMIvJufwG%2FvjoEw0OvSZKkK%2F1MOKw48AGOqUBWXZdf1YLoIL9R7XHasS346Q4YXTscuJkWI9RJHDFVfxYpLWa5%2Bv9Z2pisbEdPOYgq3DT%2BNhaomRYGc1Z1WNJLTJAidn9hMAEaP1WFUkD2YZ2E%2FWiyqKSm%2F0dcSBealskyJ7Wa9kwr2U%2FQI7xgGozhZlh7EhzRSY0LbFdgm2sPn6AGkJGWKA1%2BHQxVhij8SNlLfqKzrNG14FM0rtqOK49JyExG%2Fef&X-Amz-Signature=abe933d0cfc4e30052a327f5bd27ca3fd2c39dbd01b7fad8f268711ced36cb2e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
