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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI5R7CIO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIBzMIenA4n%2F064Zm8zNw3YgUYWfsPEBVn%2Ba0CBZxAJP8AiEAq%2BXPA7%2BJIC1x2eu0BGGUlXy0fIvSF7UmOs6sQiLYhWQq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDDmjt3uzP%2FFEHPD50SrcA5Qr%2BUazoIbKbYJWyaKlpq0hHhy4k9QhquYJrNZeaPgu2n4jbcHJr1Bo6VfSZ7QEYN8zXppNofmc5x%2BzKbEzHLj5qPsJhyF64RkD5sCyyoNXAYtg2iHtMtNyD%2Fao6yZiqCH5zYA6sH6G93o4WIF2baD6DtrwVgP%2FFBF3gWamU83nJBsdhRE4HuJoc1M93yBydOf%2FAvZF1gZESLhJ%2FPbEef3oZyycTZjr4hvNixTc1nj%2BLWR8lvcZ2TWHu3Y%2BPXo%2F25YRjs7JeA%2FCSlSXILIOQV6%2BdmHjdiZW%2B4086D%2FKn2MNRe%2BnBQtZ8gootuIAV8ugEW9ZxxmFFLQ4JzotSm5VL3VH31xv9HJrjSzfl33dhgSEOMbBAtb0HVbzgT2ZG%2BgziejzK%2BRUszpCyDim4v5pgQMojRjXRYpErbEQrrE9Eqc3YCjNdOpFSusSmBqVzO2egjvokz%2FC1cEOuwZirxr20YdUAPdz6sZgrJUchVNC7zH9PsN9zDr5ajN%2F1ll2g%2FLUwVCsi2G00tdcjGST%2BcMkIeWLtWwCdFKRo0MhISL17BYonyxPtF9LM%2BSrDXSqpNaFCglV84zEEg9ljuJdyWLeI3%2FU6Ygq5xMjppjSpY%2B8iAZCZg17WFspBUSgAhm8MO3zxMQGOqUBV%2BWVyVxDq5sEk%2FyeqkToDOQArP2prkWZdZsK6rhijDY2WSEKetIJit%2FpgehsNJL6b73I5Cjw7E7fnUZdMZln7UeZZ8YDQAvDNyG50NzgsO7Q%2B6iAKZiSR0A6RHDgMmtnZBd42VFfcSFHsTID%2Bz8W5%2BC7Tb2aLFmBYDDgKjRTo99gew1sY4L5J6%2B62%2Bcwg0ZPo3Q3jY9v0ZKnD3pIWRWALesRnwM7&X-Amz-Signature=12f44541e61e7ef6a29d04f55d90a6ab86fcafbc25e051f6570f878fd9453a6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNLFNA7B%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIH4PeUz%2F9DPQeDvzowcV3dUPB19ptB8Fl5gmw5bXDapFAiAkXEaI84Wf8xh5i6Pw%2BTh3mSjcOCL0XovqfLIKfsNoLyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIM8M3hzkAVVf%2BzYsepKtwD3TDcrsLY8i%2BlS5042AxgnZzwnUMXAfI6w5RAr2sK%2F3g6wQvB6uBJsddRNgiPyI45uGbWPiwzpgsZtzKlKGC7XI7%2FwdmiyyRLOnVjezAe1zP74G0HQ%2FXMeX9IQ6eU%2BgzypqADJZw%2BadmaMXayAEi%2Fej3UFzsU7pHbacyYGmpeSOcnyPzM6IsssNA16e0PAqQiRaxisY05UuWWwo0e57k%2F%2Brd0bVXEJn0s39ppGmKCJ%2BzzNlYwEdzO4SQM7MRgY1T4I19z11YL6yVI3t51nOuRzJ477Ue%2Bif4htc6aYrenFvsOhISjnGxUHSu9To7Z9ff4J25Q2UIq9x0zNT%2FvICRAlOQ%2FtnTstBa6kLmchPOSjELpTooPRXdvDNIiVH8eFLSY56WEOe4AXSRur3W8Ir23rIKrZ5d5Nh2MM%2FF7WFuxKTivb6bCfhAkQD%2Bk5QCs7g%2FvTpTwzNmtntHXr0HlNfJzsKjeypJ00iVmvqGu687hbAgYp9GYSfG7MQNKGUVuzAbMvS8wJ0aj%2Fx5RGzoxyMCAyM8NqdQTiMAEEoA1bX4AnHZv%2BhU%2FXXlqMjwPXG5hO%2FwJApJCNL3lm%2FmzmozAIUjaY%2B9ic9%2BK5apsKBLb3UQ686okxVflgkFR%2FSayx%2BUwn%2FTExAY6pgFS7HxIow1on1AYVeos1hK4boMhxjz8jYJ8j%2FJQc%2BzoN5%2BGtB%2Bru%2BEZ4TZpomlFV8r9lxqN3NbGgebSe4R2cts2ROh9mvqSDB9uYQlS7Y12RgeDusjVbduxOKLKRVRxfRyCMEhXEgnfccMtBcioSKX%2F4p0K%2F%2FIEGBZPVzctFcT20VUMqpVhida2H8EenG1hqWIhEhU8W2IC7MWrtWgcvYREUy3TJf5S&X-Amz-Signature=a9aaa40a8ce1c42c1f1b3f45d61e824aeb18cc01958bb58fee1d9e5cbd9faee4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
