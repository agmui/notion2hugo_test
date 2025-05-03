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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HDVXAXY%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIBlkbTXwo2r8NC5jDE4tGpz%2FLnuKYce0RFgrFnWUfavHAiEA9A%2FjzvfE3xNDfC%2FXAtvxE8jafK0eWupMs%2BjiTm9Fx8UqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvfW0Vl9ozM5OrwWSrcA4JYEv5ruAvmY7Y7vox3fqA%2BSrmCIh92EN85bHePqRYoQAUCOqdMoI%2Fm2Tc8I3UPLXVDwNVFErqrCzG1kc7O%2FYnwY4HmvpQK7tzKZjiHSAYEiz%2FUoTs5nRqLfyHTXsdpL4rtpMGMEmudmLFIpWGePVlwcdeiLYsgkUJ4y5nm8kxYAf9QGFHqagQHgUbBwqqiAyGhJQnwzQ6Ov4pqR5JNC%2FYjM%2F1at7MQNTMGw6XZDSoBAPgusAwH5Sd%2FwMyKK%2B46gIf2W1Ku4xwFHiUJt7nSRV4rM9CJEMgCXrStIqFQ5kFQt6I8DMrS3WQmSBFCYfgcsmCqI4BU5tO7eAPQQKB88a9%2FB5N%2Fqp7sa%2F4ajCmmbFfnE4H%2FBC5tDKBWTvcggBclFWKl7SuHGtcHE3qDiK0xG6bX2X8ZkuhtInkjtPaZ%2Bd%2Bm4UnIquajAraVfI6pi%2FtgKz5%2FaN55lVPKLGiu9rTFikBoGkLNm%2FX%2F0rC6v7YfxRYJCVieAWEB56zNZ0HlQHwYyIR98pzyW%2Bh6dNTUAlCBOLXPdeTeXH%2BnlIV7ICw454Wy8QHXt8quQ6poC4%2B0mQ%2FQDwTsW3VDCnxL01DJCLvJn%2B%2F9H2511k87o%2B44Q3C%2BdigWal7clf2ZyOb7CnRhMMWG1sAGOqUB1DBLuWC3VuztWPLqHINvOGL0wzA%2BR9PSMHZ42VDY2hEJAYLwmbzfcGiiu1cVsncFE%2Bs5ZvF6i%2FwKWxCjAdrxiCLM9ixbk%2B63uVpYIHMF3f53ikQiu6pHY8N%2FTLLiNYomlxlJc6e4iYR834XNRv4LWkoHuvhUxIUg8kZdDkCZxjEwpNR0qe6WxxXwQACPPQd4qTuWouM5yRTGFAsGy0Nzem47moPs&X-Amz-Signature=f5f89459c2188419d6eb35be084b98c055f4c499790415f70a52ac89dc9f30e9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3OR64SG%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCJ1AOcZVM4rupXbkGE25ChsZx728jv8b0gUuTSIgtZHgIgG7WDKULHOpm5gTV6%2FcpaCYlewx7HjQzCDxSHWMnojoYqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCaErhKzVs0kwRH3SrcA23iiJ2rs08l5gk2ccwzaYvF3bZi93Lr%2F5gkumxj577S9L5Nz4OFwOd49E%2BcngL0x1HtGI8%2BQH6kzcdPtg3oltY2emU8wMEr02u4tiQ4mzHKrEC%2FHisib1XJ2F7w%2Bwf32rbWt%2FtA3ffODCVOpbAO2VskRM94ydWjtZTSOiH%2BfZcVnvDmaBaX9YGO0mA51QfC%2Fhfz88lIk%2FXQTTuW9nwHn2SjheJEAfRwFU2Iriofz%2BPplwWJxvAiH%2BYn0AddnAp3lwe70bkkp8rk3L5QTLnjyL4tv1EEYnpXKFZfZtjvxIoLxSmeNBvyhmzzcm4gKIVFyRQnjOeWbS3xKWU0SrNTbJhIzjiitxHiUrus3lwk0eDbU5uGPnQKNuG0F2t1BVCRBHT7%2F%2Bo2b%2BLXE0dFXB0zRszZriVZgHmF50%2BuLxoFOmYQmSVdz2PlhjCYPSCGCjOF3gQ9%2FrNTTDMDAmaD8lFv%2FKFOyq4xMlfYG8nkScvcTbu23vlGipcZYYB2syNL2KGnjAV82QbUG7aQwQFfKLcrtFjTFwQn6t3Yyp6RRj%2FV83l9KbxxCd1qQarWVxK35nmGW6NVy%2FB3eHYjsyBIYCQyBllXbeoPdyqwWeyjG1eYqhOpnL6fs1GV0%2BrplnoHMPCG1sAGOqUBurbdGQImocdMxhCi%2FZwbf30jj25saSI4uDZvlBHAvlYkvDgjOZAQh6RW7BxXW7PH%2BEytEvHV%2FXlqf4E8nXw0rx2UZcmWXiu4JN%2FMaWYr5lqt2ZOUPZPHu7eBc7hZ%2BOj0ggYBV1WLzg2pQUCJ39yLiGzvlFUpB8VIGBk6I9V5UEldI9XZehW4K88eI0BXEoXYaeW2JPqTQIwmFRpnebTWougQ77xT&X-Amz-Signature=78384ceb60f9cd195e62b9f38bdb2839a18c5eb3e66b8ca45c6957e565703e97&X-Amz-SignedHeaders=host&x-id=GetObject)

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
