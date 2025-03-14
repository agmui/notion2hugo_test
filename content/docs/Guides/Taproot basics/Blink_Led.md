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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKYL53JW%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T181039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH7AiXTejbtf6sS2FMzIL10UhxhNxNq%2Fm%2BGCKpuQ3RGQIgYfobItRKmQkKNdvwkqBdsxQCT97nYQJreLWmWfuXEnYqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGN%2BY9DX5Y33gpg8tircA2Jsdz2gqx%2FF88aIz7rRiMcbsD8cLn58zSst17kEnrCmDvCFAC9giU%2BTFFwnhRONI4R6qyjKaobjlYfmFr%2FnZLENQBoJpj7oahLVyDcxBovxThJiCDABFfxu%2Brg%2BZGW25cdNMZFEIj5gWyOEKrH2gpKT6XVqtFG4V22FfFqn3eAW10rVendyBwuQ7K2oUKcJVdMqHtdg%2F5DQ%2F8aTdiZqvaZxNnvoDBkDt9AJ7fueyvDh7YFKC7bNppsg26jOT6MGpRF7AH7hmvKfESKm0QiE7uYxBndVUtT%2Br02IHK6Pvh0hJZlnKCVL%2FwC4n3DMO2yvmVU%2B13iWL6RxTERCWYV7BomHYNeDss1fJQFtLVRjPAdrIzbksiRo5eMlhSvGxQbocouk7HWx5FbQONYwuOeGhVEE1jH0t%2B7u4eyqG8d658bncXMQUZWGR9HEdQQj%2BBgSKG4K4G7JLR3UzTmRqo43JBA1CjvI88oFub8%2BkhTsWVqU%2BMQtWgenf4a1mygbpqdpsaqFuESbxwNwNw2rr8p8s%2FVechUgQoDOCAErxC4LAyM5sfYQEvcbayv69OAEpztd11MK8o8oa%2FibOYcnZDx4Wk6dlFUwtGtPvFBgVXCylFcoh1cfW6xISsDmfJA7MJHA0b4GOqUB1nv3f8rTRkvajIPQL72848vgqONuQyOfYPq1hmUWyG518dZj0YET%2BHyBixdZpFok6zkuYWnuk4U3HhSTr3LY0rQUA%2FqhSOFoa6mD2rPUV5JztDXrdiplKflCOS5f3LdnxOhi6XzpqXoQSECZKbXTOMVVhcrjJ7%2BlKNZDnJnciwehkVM8x%2Bk8v%2BNLvlFq0ZQ1F7MBzGMH0EtqnhqrV5N6yLMmyMN1&X-Amz-Signature=25ee66e3c5f455ec48c59854e4fc2ff93e215b43b183cd10b629b94031d99a8e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O4ABZP5%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T181040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEeno%2Fr0HDILr2guxscGZONy2P%2Bi61pgQq6qNLPsMbwuAiBwq0XQk2HD0OBKNOaJEicFBdRknnmtfxiR1mS9LgfwaSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUShyDh2n4EqQyGA2KtwDmPbhBtb8zBpyoh2xQ5O8zVA%2F6IXvXLRdfiqGzzbbveJn%2FFSJ1%2BovMrzZFUy7ugl%2FRN%2FbL1h7ilii8ohpPMf%2FXeEqJIw6zjYqUDw7bdGkxcEaGA5%2F%2BpD%2Fk%2F2RrDdC%2FEef9zamh4g2c3TyTuFdOOO0vDjpVBWEYZdyQ5toSjDEYFiAdLW4WJ6BMnyyUFok%2FAKifPYFmtq3Ng%2FFrKhFFzdEsRXpT35P8%2FUBMLH8Y%2Bl%2FuSh%2FelWYPbzSut3t70o734WgxEYJlsjqi2IbpXH8v0ucfgrVaZZ%2FrzWEaL0NiHYKS8QbQcO2iWPjpdHI20nL7hllxafIpulp9LZFn9BmIfZhsOtIGAHtY7CJY6%2Bt2RQELZSRZ3JiP9EqjIpE0coJ%2FekLLrG5wQewK8cslG9nqJFWL0ie7klyJv0ixxvF4rFh6neGn5U5IwBZX%2BxnT8R9Gxo3tMm0GMwPKTLU3wrdlL0Tg9Ar3lQUAMrr09bucg68YUa4Q%2BEuutlGR4O2lxvxiLbvmOQl4uRj8%2BWmXRXAjOQsum37VER%2B0MUijrfXi71weKa%2BhHMUW7kKqTk6xBapwzNyBJr4FJNw3nS3oZsz1lkdt9fWaZKv4WmImD%2FH%2Bt5%2FVsy205DRurw%2F9zUf2XQwocDRvgY6pgEyqu9HUI5%2BEG0oXQRTvlZ01NE9cARkRLrKF%2Bp1%2FBjffkUsYb%2FBg4FTSM6h6IWK5V6A%2B3a6D899lTYwQozuqlH0HWgUqpcIxNkmMjKDxqGyRy1CpZDeCB%2BRAdvP75fLjQFMmB8%2B%2Bwct%2FDxmmQK1UYR%2BbR95IGrlo%2BsOQrprU5MtAPyaqeaP%2FVCXy2CAxyJPdBGPOv4D1FvHnRtTc4rQn4%2BtWKlFIaaS&X-Amz-Signature=25fd87b1dfffddbe2d881c3a567fb37a2ed2f9c9bca7565f9daf236434ee40cd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
