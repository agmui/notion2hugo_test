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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3SRDIH4%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T161041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQD9WjmyY7vbR%2FEI6lX9oR9OHARIRXDYhN0ZnYVxA13uswIgbD0KbZ1Y3CrV7buAUhH0qMvap6LZ1K%2BwGxcFqlJCSVMqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPeY%2F5wPGtaYnRRQICrcA5ywYSC5D5jFQt%2BRntuan3zmNtCDF56Gj9Np2D3xvJdxzKV8m4Z6ZZdM%2B6bZ53Ol%2FoJ0nCkdB%2FSzCTK55TPr2MVuhVLALg6I5NuB4Lss2i5zsW%2FtE47Xi60GdjfFMdNDCVzoT2b1dJsjyyA%2Bhr3mlihPczNeavf75gn3oCjA1rdB2tGWgoeS4POxQQkxS8ph%2FUI6Qm%2FRv8Ob8iWZ0gdRnFC3c54W7Estu7bmGSTpEEV0xkFy8mxdynYs%2Bs77x2SG%2FmKzMIG1ZemlY3hFL2GhbnpfIiIPBA0zH0LEOfCw6wUZBBkv5fAMENSs5SbX5268eUZgFVO0Q1kfgo8MDVCqE17p9%2FSILi7OOARn%2BnDP8W4wV4vhJ9fiYgAmYwgbAIoE9YGlAvuoCocjdna9MZf%2BBjNvDzgvVDUctvSrhEOvPSM2y26MnBgic6LzsyIqdS1GOma2%2Fgx4JPOZPMgDYExVFrnuj1AEPYINKZD5ub4%2FIFn1ovFbwiRZsYSpghae37OWBIyQN7lANeueItz4lSFBc02M%2B6TNemukfTwmjrs9fE%2FKFlWPbaH2e2mb4jU0%2B8hgFo9baGmnMLbLIM7RWUCBhemW3WWfZCIw71Bl6UuQ5DG%2Fti7qJkMDjbBeDqb0MPWHpMAGOqUBIH%2FUsuzsVOxIQlmtPNtzA2sPhyiwc70hiQKeaAZB46Vl3icpIMCfFS3pndCmDi9PVU84wr0lgrwKiE7Ee4oWd9Q%2BJSRJH75AtvS2aMutWJJJ9tftm6pndAPZSXq8vrgYJ6EOyIt8T7cBa9cqV0sCYkW4zsFY1TcbUGEQJsbdG9%2FbzH8lEiu8kGJp%2FRQfgbQmQZyisS1eiYmn4qL4jBUVyr%2BjjAEM&X-Amz-Signature=8f8b08a446b760629fd586677310f8b75b31cb7670d8950b11e96fc71d8d0719&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ26Q4F3%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T161042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIBUXvgPXF14uBtclAS7bywGUdpULDgLHdXeZuOc4li0DAiACrYlUVs9WHqN24eyEaEcwm2TNhLUsEGUyNBWcX5tV1SqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZWhcaMLBYrE%2BuoCSKtwDxVXgyhl48wbw5m6XCQWbO6SJj%2BuU2XwSd7autz33nhZn%2BU6dK2agsq52jdV3GhVk%2BVAGxaDe6ztMaofBg8F18QnNf54Q6cMdQ0tkFmV0JrcgO2LT7Ii3Bmc3p4sEK%2Bj3AZlPwcdERNDSZsvd7MqEprfgN0eQhKwW53RQN0qG%2F0IprpI4lYPE51BGO8%2BG4XRXFgOz%2FEpCbd3bZjwm5v3nMARpVH2S9%2FlS8dU0MNePeHOvGlSwrwkPV3MKL5k7IswMg172QFQTgSOz2c7b20gqW1yQBb9decP%2FGKnT0lA83MiyLHFerbqfBGxoE0RCV%2FIBWN5WGgaAlmjnXqRSt%2BW0EM87acmaGpmMDaJ5srSKQqP0Ftge5sziP9RErgACaVptxVGE1NqBvJFiXCABJu3c5MCesg8%2BAD5vKH5nRzUqqwDc%2FME3wuOE21jdf3VuT9HjtfqzyEba4mzOrifPbitn5chHHCuYjCwlw0qbcZJ2APtJhgF65sb9bnusIanAIFrV7vO97%2FSea753P5ksbeP2oRf8%2BSJNvC1Edk1OckwukqanbZ9HnJPMaL5t8ThMuOaMZQaSqpy9gRGEfhjWDrIkMalc1BGqdnr7CWrJBVfXelHBzKg%2Bye7QcnX1GqIw0YikwAY6pgGahHvuGkJPUJWdggq5QMF%2Bero%2FSAQfW5wxkWZ%2BDU2yYAFL%2FUEnPyiP6Ks5xjxronCIiv%2FEKZ4UhN9LG%2BmZLJHpOpIac2zgWB8WGvG0H6Gd%2FC2dRX1hJSEk53vg4%2BRK%2BmRpRtbzjNbqN055YaGxf4n7%2Fz8Y1PiqNt6qo7ML3ej3hajuKZx7P7ERFACfvyt1M1tGS%2B%2BPEvN4kCW3h1I6tEO5HiZatCuh&X-Amz-Signature=8c4331eed6a4f81595b2093b32c2af0742aeaf8fdc85f642e7218581c9409df6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
