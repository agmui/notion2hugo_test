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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KK2UTJL%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T132259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFxaFCj3%2BRTpubUucnnJ36Llh2SwqkPB4poz1MlkdnMnAiBEnZA1hGkJGddJJo8NDAtOtQYeW17HUGrPNASP1hBx%2Bir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMDZgGJGbLRjKpS6lyKtwDoyTavQwtP5%2BSiV2SVrYxC%2FkfWdQ4Simes%2F5gmcND0O8d86tF8gKxjDgC6WgO72hiEghY22FREPnTUxGeVK0R68pmtQBd1N8t25waZFk3%2FOEj8s2c4XmNwcsYrDhnWgiUI1cRBACOKYcLBBVkRDWCETQK%2F9hicueCPeWLUWkkzrc7yHyqK4j8bDmmzSyJ5Hps4oTpN%2B1odawh%2B9GLs%2FW0uF%2FKoWr3WSeU%2Fr6v%2BGoCdGyT7cl1cpHq1c%2FApErrkV8P1dmdD36ub6IZOo4lQywQBaAa1hCj%2BslKEgxwPqrZDouXsjFzE2gwGRctMWeNQ%2B6u8kVG08NKDlJsQwRuAtf6anMMekdoPhdjDO9hPVe4vhILl2uzaSs9BoPcSPSZRYXPC%2FG5lvTPExwchtxTUQR%2B3MeY85DeuMlVttw6sRc46ts%2FkXIkiI5zrp8rYNYAwS0JNhDUVwJ1YcY3pIrgo5AuwTlah%2FH4%2BUZF3lzyF4K5hbBRYrYvTlqD2FPnXDJshx0eoVGzqNxwE7crzpxDlF7xzfsWSS7%2FZC26VfpDrDkFZ%2F5mgbXDq5ySLrAEdbh1VvBhGI2KhwjmGS6KaEaAgRDUeX53PNbs44QMxsZFny0EtQShiOBhp9owctXN4qgwyqGSwQY6pgEZAbx81quVdKJx7DC7yJJJLoCSpAonsPil7wX765f%2Bt4SAGAZGucJ9c4Ri0gz33GjrfJG%2B%2B0pW49gtIhxlkAXONjxLXYXY7SDg0vwntQfU2%2FMUrCvZPjEvjUtyXiamSFvPPs7%2Fb1%2Fs8Tm8xtjP3vf9pLuoEjKQb1btdcfG0pi%2BMqd4loJGOa8yAvkTI0C9HE6Yo03GigKzhFnhjLPBZsiPJa6JrDBt&X-Amz-Signature=c5c2723c56ba4aa2e0f8ceaab15de0c2d08108884e5d004e257a5ce8e7858b5c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THTK5TPN%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T132300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC6W8K%2B8rbbP5tu1uvmyC8M8ZGOhwzILX5tdmUOwYghCQIgJxI2lwsbW1Iy4dIwDlt%2FMc0Cc48IoS1A52VtGSDMYwcq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDPvibYL%2B2U3r%2BL2CDircA6lYkfS2Wvt13nu9O7Da79xo3OW4Z18L9oH6TOAy2s%2B6wCxzuqUuLl3HQvlcS8lV9wCTcdzzII0cd2sB0bW2DjAr0o0%2F2Kf%2F6vRl32qGkB0ANIfonC7Hv9DZ1bcMxN7tDJCOpXWIDL8TN8mV42ceY%2BnhzR96%2B6JZ3L8Pi6mpvWPHWt2q6f4UtBPF%2BNpLlA2aI96Gl5iTWesTcpoyuArM9WGWsHPY290nWdRx1%2FA943Ix0XfHECIccU%2F%2BkwxGBV1pOi7k7jKYdaaWwLFP0x5Kfronn0Iu%2BhKzV4a%2BxOzZHx4yrrHBks8AVirrzzJE3D7IIDmp2vGpuK2TMab%2B2U8y9z8AvrIYR%2Fe12KbEF9RwqrdPCZFZcdHhBYXSzTAxhWhQNiLmEz63wlM%2BUgXtmq7j%2B%2B54DlBs5KOdMnuwzy9XV2NE1DEg4iLzvtzVsH9PNAhVftELSa0F4tWEthHT5nzhIHpjsSz23yWzVsz%2BivZzDROVS7Hs6dkp5UcF0HWvQTBJf1MyE0C9ZdZxXOPVengEnC40SmNKvoKR1k6RVQ2aSNJs29MV2hWqAeJ8o8Y%2F0fpoY1%2FoQVDMlU4le8w1wLXVKb%2FQkuGV0gR2PPrYDEPPa6so6S0XVWPwjpl6kEjyMKqhksEGOqUB393j7en38NGKtq23l7AU1uKHgasE1c9a4aeWuVGf%2Fhd2ppMc9ypGRrXgEQN1bA2jc92UGm32K3tijEFQXkYdYJE0iTjxt3VDiAY7I8hXjPGIXeuIsslW4CUktNmSBSI1Kz6eWSfcwiyl%2BHx%2Bbq31j5RTqh4yBDZFfVnam5TZAuverI3iyvByDbfm9tB5n20b%2FSH8zeRGl%2FAtJC4xI0j0xLvu8ayE&X-Amz-Signature=05a51b0db903d61c9ed38f50b889e5aab10b9ba65b4f53b360c823b90f440640&X-Amz-SignedHeaders=host&x-id=GetObject)

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
