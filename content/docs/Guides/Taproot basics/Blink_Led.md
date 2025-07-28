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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647GHBBRK%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCID6GEo8phFklMh6tfpH8Jao7ubgj5d68Tizx3Pb9VxOaAiBljH5hpQaHVVwSYJaUWF2WKpcflWXwU4lgLF1FOS%2Bh9yqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPpUEj%2FcJIx0xeTYmKtwDfYCVWadS23OUOT9gz5oVInBVeNGZih%2BPixsLpc9kHxVuyyO5%2BTlf%2FW3MToITQqJjGNYGAs5Qlru1c%2F%2FeFDUfrMkst8NCD786JeWvZuEXsy5ronxogs0AM5DqOers4qpJ2EsG3lEYJ9Fns6eR51D4EQPaPGg8GCXuza8rsF5OXUSxHT5KKWyc%2BVuGpsRmWJ6H0205j3iFweARTueqWOva0qRUyG%2F92%2Fkijcxiy3ABnKjAGIDVkKVMYp9ggQUAMV2TIB51LQ1rBE7bDQun0KRCzhsRbAf4m6bBZuqZBwod4qFzy0hWM7%2F5h9JYrENFOJSg9j3hEthHl%2By7VkwH3v61dNOmr11X5HXExLmhW1WRssLr5EwFAPQ5vf4aB6oRmH7t1%2BpBgHtCs63JN%2BM4ViY8YUkuhU0raNZrOEeTSvzPoI3dw2oyiZ3Ynz32HkpWaNRYQwkj5nNtxaTckJFrjzZE6io6o6zzFPBPfXtiJ3IJ5ufGOD2GxYEIGuEfgCU3AVtqEVJKsr2dFctaOi6YMHNuxPKyvP7Qsu29%2F4wcqIi6ByB5FXHZTh59f5LJoq0CQzmQh2Ykr3mPi3XFSyjK6uv6CACaNBkM%2BT2TmLvqpTFrfwYl%2BAGlEELCASNnsEww%2FOmcxAY6pgEaM6qUyi2BWwVV2GGHNZq7czIST3HbZ5J5hH82WJFseYwnT9Zy55MAgttAMGk1lvCzBfRjp2rL8HtaeY03cDPcO1MFR63SO8gmFozbrEU8bSMvLOXl0luN9VlRQh3S%2FtdA%2BMVgzpvytpoQfadcQB9NJFxAyBqHL3M6%2FddgEwZUIY6fur0ogDB6KHVbf7sxfOgkYj0jmFxHe83jSi8G11vfqe9ZpDO6&X-Amz-Signature=f78072c7382bae0a55b3956dc4224de69d06fff03938c6de130f2d9e6566ce07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGAPELC7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCtEVXaJdQER6MKSzsAGkDRkCrEaDt7Szc4JW1Fe2lh0QIhAKbAj7wjFAmLLpmlW7OCW8ZjdqnbdL38J8pL5UUQlh7fKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1iABHITqmjiG4oCUq3AMQH9hVwSSMEnHwr6CmSqx4YdOmgQwawBKrPmRZwBgTC24ItVAjW9ZWyPG9V6d3ipQ614AmJvI0GI9urr%2BoxaMh7l5fjhu4%2FlHTJaCLt0W3kpkknkO%2BkbOXVwP2edc%2FisnJQmw2%2BCL7BjamwurEQAKV1O2Z5W%2BKKaqlyOt9Qayom0d7xyF5EB44BhPqGPxcCb0I0lYOD6G%2B4VbZPT%2F9zK98TBiZEY0VC0Yf3R6uZuTg7HVqT4UTLxtts7ahRWcQEMlBg0bbq0Tie4RBljI1U1N5oOwREPBFelAEPcr8RRBQbEqk4ZOcq3BftbYu8Ht38kW3p4zG0PFzZ58CnzfaoUWNSIQC9eK8jxQO1pBLoky23HVLvMXCenbrEWsdXcQorujmHn%2FfgqZTNhP8J96LAg3roGYRxgmMGIp3ksL36nn58sPyeUxQuCBhGsQUUf2z9w6mz22rD%2FrjrC3qL1DP7%2BLb8CRBu8YyApKGyI0KxqsDC5634mO6CnUoDzmFrNHKXMwfY1ZrqjAOT3o6YN5vGZfeaiTY%2FXnakxK8bv2pT%2FN5Xd3sQXjzWnkAEA2p0SNTdja%2F4K4Lc06GuxeRRBFnIofco19gfgQVNKUusE0xH%2FhK7yOK6LmhDsdWmmu8%2FTCS65zEBjqkAayMgtGf18AAsqjDcF08%2FHQIo9W6xjIgp3OdFhaVXi01uKxgIm9B%2F9h5UjW50%2FH20qvsMTn6D4b3EMxF%2F4XTQF6poZBd1qRbh%2Fqdj8NKbMkhJN0rcZccCQF%2BS4tZ7mvRZghJmGSGoKpEGDy9knLmi9Cc2fVYjlANf57KeKmtYVIfCC%2FtkMLnaTyV4tKxcMdd8hX6VERY42KKCjX0wWAWelaJKU3a&X-Amz-Signature=014974f679424f8ffa1382886812f96a97f3cf4fd36897460b2ca75c5dca4a0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
