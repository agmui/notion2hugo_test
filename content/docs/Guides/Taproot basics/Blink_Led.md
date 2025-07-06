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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZVULCPU%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCL9hs5KtxoeCZO5%2B8SQrMKfGtI9Qdkp%2F7XySiRCQ6P8gIhAImJm%2Fh7JnDcUPgqampiK1S7q6wlCStFpLUVMqXjrSEOKv8DCFcQABoMNjM3NDIzMTgzODA1IgyambXLv%2FvfdCq2MWUq3AOX5XwL3L53EW1sLwJF7ZDU0qWEIqXOsQmxCgIQBQjSWRqrNcbPEPkeGcNfsA6bJKkbzRs34Kh3Fx8Ib1epteymZVj010ne3O%2FW0fgRXAGuQzpZLKN64B9kPdpK6KlSxdRU6iY8tbDfxdW5bx241o%2Bx7RZUGd92LJXPxWm82AN5rFEcq8u%2F%2BZcvePUxcwdx0GlIGF1VyN9YJlUuyPQtC%2BqePSlVXW6msD3yA4vX7UkeXEanFdeh%2FQ4kAjKZVaDsyWEmHmP4wBbeUtQyrBy9timW5FMSoxWJckGmB0Enyi%2FOaRoD4tkZZF9fnJdx%2BPQFLzmKl6rmLR72rKXLcHxLOA0ioZM%2Bp8PxGQklDSKNDYrAz%2FhD51j%2Fn4qTtlAhtIvkoz%2Fhpo0xk%2BzcA3Jh4BZcHNOJkph4Mbqucv33%2FdZfOepZCeiIaNrQpoMmwRNqm7M5LurV3dtBvFkcmIdrfWuqaURSm7KN9Y47ehe%2F4Ja8DSxGhVxY%2Fy0bzjlgaWD2t3QCtOx1bOH2ws4gw6VUNKuTidNAT4rbcdcDiCUs%2FoXE0%2FfDG5TJCkU2Edx156RI1yTZUplJWOS8UeVqE8SB2yQAExsSp0EXNQHT2NJQP91PSu1K86OJMGEMnC2jdXA18jDWpKjDBjqkAUYDY7OSepD%2FWiv1Gc7it%2FTMpbVgcppDIgj9AW6l1DW1WbDFPjPZg5uqOMixOr5FTQD8ZWpukcjVLgwMtU2u3C0SXX0KAhuRKy4lzplOj%2FpOLko72Ah1I%2BJkYL5HVsaFm%2BcCmNW3E6HBT8%2F%2BuTMBD9gAGL9mqWJhmgLANgQHLT7eqer7h9iLEUbosMRJ%2B2vF6mV%2FhAPTDtDKjY0ISHEdaGBXgcvb&X-Amz-Signature=979795dca004b41034cc71c4928a9bf4469f59366a3c4438fa3a0fa881c877d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO6ERKEX%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIHDtV9S7c2mry%2F2kysB6p5DZGP1ebpaHl3xLJKwfZX1VAiBdswPu0AdiOffu%2Fds6ebqyUZV2wimyHjx0Xy93yHRXyyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMUUQxshhSEXVQx%2FYdKtwD2d5uqe7q2rIjsz4C%2BplJDOQBCSA9bprCrTbyiW7QPtWlX15e8WLj%2BuWZeO%2FZEv9CgILFZPOjVDQ8HwN9H4xMmlvnj%2FDxvVbocZNYPiV2A4J9hEzT6O0USb5zL%2B1nT6ngC15MfbdIPSitKRmGWQo6w2gXJdp5mHZaBjQE%2F0n8BRiXWd3pcWOM3cgDUW9PZBwWOF8BxWxk2JGrimuBztSU%2F%2F36aiKJS8iT%2BOOEWVax8KP%2Ff92z%2FkhLHlIeKJ5tfCduw4qjtdSb1Bi%2Bh2wDHmkNOGAjJnQcDq2iCiJWM1qWPwTo0UJnJSjGJvFAziQduHLFrJHtqa2IIZ%2BOjQ4wORNUUlo2uPUxbobPmnE1TmaMoqJ8UzKi3f9WzMCUoQvJ6QCeDucTCUk9F3QfSk20YdotqYA4ZGtyAjTavE%2FvTJpAUgIeyXE1hphIDBt0kO34Py9B37%2F4TBkPY6Rg54S765fv69kG69Kpb60vg3s57sVosT30cEUYrumgpOP1KZt5Y4PqszUpdaMDHWijIrgntJpdUiEr%2FDfYESnLxLsBVqNR%2FlZPEfFJxWjuFJQkq7Bqx8ptGRbBVqPQiylZzURwn9lLASptuAxHv6JG1N0FDYgTGNa0EvZ7W7iJ%2BCBhxF0wva2owwY6pgFaqKNDf5%2BZqRXhnqnid3tU0oMiLsQgOiP4Fo3H%2Fa1VeNk1XF5sblkP4xW2VA7M8gAPI9vRKyvLNGBqjDaZ1HLet5tHXzohzOHlHvsEDoqTrGAxm%2F4qXq841Bh5tsAobfISluH6TGyj%2F1cW91pvFQ830azSw8nJGmOlfTvO69RatiX6HrUImQVDSZl4x2Dz%2FkLhP158pa7nQJonBlRAemNdhC2mTnna&X-Amz-Signature=a35da15af744a0803b11e801be4894b5df731ccfffe36d7392d1726435519534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
