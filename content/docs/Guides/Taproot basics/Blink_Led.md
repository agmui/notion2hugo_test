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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDIJSKWI%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T020903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIGdvZ%2BNqVS%2B8nhYu84jID1NOHbQY4Ljy1qhksTFfLb9GAiEAtui8P8EHizB4kb%2Bz%2FTCujBtDDEirHvqJiPBgCK9NF%2Bcq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDPRjMFp3Zv3rdezSwCrcA2CrwSohwNpk233hGY6BmEU%2Fc%2BwmwNJd8%2BEqnBhM9dMmWPFQP3VqDaVS3jkF1D7jOCa%2BrmOy%2B2FjY311EL3hANOav2sH8oVsBBAnpyku3lbBf16r%2Fwps13Dmn4sMVWmXn%2BbwJYP8JJBZ4qts%2BlGSh5aitnyBxBW2Gc8NRL%2ByuksHLnRTjE78pBF49IelPnv5GF1syP9FboVOG%2F0ZYdUnN86c6Ne8T20%2BfBSCd4Xn5URobsHSLYt43YX%2FkttiUOWP8u8fp4cpTuicuAp8n40Sq6BJzukvvG6tgqsyKnhC5DSCG6w7Aiq%2BPZ3hyX7XTg1S%2BEJ9FDf1eHOXyyQCGsg9RSpZzkSNkcXlVghkW%2F7%2FSb1ao8haNNUyhT%2BA%2B6kpCDP5z1zt%2F0NLuCvMaPJpdK0RPFiNiFc0zcl0FVovNWLOiGJ8RToYlRijLqjsP%2FRvelRZl4fkmQ%2FsBDHWxGdUViQNPOeCWrNTl807x5W8b277J1b8GkUtPXRJyN39dAz6ZIFA%2Bg6iQHxaVZ7vyytPYayhW%2B9aGTg8F8oMtUYk9vHrhSqnQpkrErqlLM5YOATNUIh4QYWqzIV2gZETTXJnS8WZoLhTBuAcC8szHYw7IxFMnHgL%2FPYyD8IvstWqx304MIuclb0GOqUBT2EoT6QjHvhxKi2A4%2FqBd9ZA%2B3Y4CVoeh%2F64mgEsv%2FJcJIPIa3ray2rrmKsJBeSCC2IsRUtyxhSnjMCYlWcq%2Fqsa%2FkQfir5f9UDLY1QuYzMqb9vx9ygY45kpb5WzyPHbp0tN3RayGrxaVJan4ckqhg0DQSMLvNDnDfVBZ1ipfrJ0VVj2mYc7uG1cafaHiBDfktIvpqv7MO5EhXwqEzHxYfFsE4et&X-Amz-Signature=73f640bb2659dc0cd4590070a599118c4ea643677d98d6e1b2b63e412bded9cd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBPJN6CB%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T020903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCmxTxGElVLdvPPQJwYijUmG%2BOu0gITvOeLNzJZMLhJxAIgJYrdfTI3weu4QBVTLMK4fTnL3iBsFVKhs5JnC9HzpGcq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDO0raQ42MGtFI49XiircAxA0tNIK8I9HS%2FFEiMlz0NRqROj5T9lGLLrlY%2BsuFbaRqkZ4BbjV9EwdEzetfYCWp20TZ2w1q7WCfK%2BGCR2S0z9GTdhVwq4RJxARTID96meK9YxiCrnirxVOnkHa0HhD5UyTPvqAQRCIBxbG%2FFWTakt7OXhRleR0CPLtbjYvvKdGcoL%2BUEPEJzL2EQXZyo2bd%2FZ5vPGFB4Jm6QfKPtLRsAyG6Y6Hx1ZDgrt4nv0TgbznkKHXw6ngGOCZypNqC%2BZkJS473IaMHF8pDEPDlNy0enTh9R8awtofOdXhu8%2FMb7PfToIwxh5%2BS1W3JrGqC51ZAH0msjhT9FWygmnKjiQW%2FcDlOZZqQt7O1KwzqJSsXE0nBhbO9ZrVa31IcI9eCkOzPj%2BVqKHl4HFNuH0NplKJ0cYTDfZqrFBXUiOoA%2Fn21BeG3nvkolGjIfg0aN2b5%2BShFHQWV9Dz8%2BmtiUA0xLd5KZ1AEKTkl%2FH7lexxdnn2F6jjf25uhtb2sncjGo4g6tKsnAQMPCbUC%2FY0LXW3Z5f9UaUMQSYbAymqlgVN4XuoyUwb%2F7K2XCc%2FnHdcy26hA0BDhGh53rVGvSPUgbEE9iUvjXHEzky%2F8MpuoJIRvyjfjmcNi0sTULis7u9%2FwttSMPWblb0GOqUBaVQbuX9LmL5yeUxzInN%2BZXWLF9b6uDP2kctaibH8SOAt7abgjpLUwmnPDNXWRNF%2F97fw1lSgGfbXOs4bwJtV45YDmTs1fRRsOnrG6VsbfS47s1bWMCBpAlRnOStVEG1SXBUqGdP8YbXQ6IWkTKFMMjG5pXijPvbgHIWVbfJi9c6vD8pEc%2BnNXLyFdTIvtktwdEX2xvh81Hek23pfqO%2FGskm2NT0%2B&X-Amz-Signature=d1f8674981aebd8c88fd4afe7248bcd7671f131a82dea0c0cac0e375f72d88a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
