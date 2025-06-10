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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL5WMI24%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T140910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxZZ6WBGqMsuALljXIQwJ8vWiw1uOTQWuCOvU5pjlRoAiB%2BSs6JetfMDamtsWab3NWxaJ3qwJULb1LL3nmwz1z5bCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCSlt709RdlalNzW0KtwDBXAKfhwqMYTaP5sDRW9sEQ5Exrt1c5nswwA7F9Vq%2FHo5WLKl7DTGFM1%2FfPC89TwIKCw4m7ptvUpiUW087Tbom2b6WEzSwPq3n6g2ZsWM7iwevhUHBFNFTrK5Xk2rj%2F2h2Jot%2BMoKUwvlhgiSBIbQMVjFgVLdumkZVUUVt8o%2BDo3KV7tpeVYurV02XU926tI55e9%2FQIY1kX7xfl2W%2FWRRSsE2F54BwTOT1nGskLUUvUgrfW%2FwreuBAnw6E9oy4zVreFMpBtFcZgqDNouOM1%2FI6%2FqU6qNR3zGS1e0exavqcn2QlO3uo4Ik0icwV%2F%2FxXdnKIJqebFeqaptUa9ktJUwUKa3Jz506RNDE2qFmGOyvy%2BL86Sngiuj%2FOkOw9TgMVOwlAQdpqHT57UvKvcJpqd6YOXl6br4d2C1AUMc%2BQ3JH9rZGeo2XxluqmXw9aPlEphYRIOgoRbPDtCrppa%2FMSpjkKH%2Bd3GjbGPxjp%2BEYLCaZWsZJkYF0TZOPB00rwNe%2BHGubCHdjVcRPeG1THh1jOJBU2%2FCiNCDxM8Izx41l2C6CudJsTf9t37RnsPeIUy%2BTnAsZA%2BKia3WIuGHmYETzrJCRMrs9g1YlZE5YvDtt35fogW8kIBeWQwp9W6nDYXsw776gwgY6pgFhrdLLmx3aMvfkUIAa%2FjY869vNML4O93Q4c5UG54sbpBLDZNfopt6yiYCbfZpQk2BNBf3BdcX0gsrsnikJvCKC5h3kXNF9Oi6ramWsgLnyDmN7K4AegLtUWnzed46XsjXpIinHT1C0dglpRrHNwUZaMsgerimUuONrBXjWqib%2Fpodt3rzk7jnI4pzON8SQ109H61ZMSaBWSxhZYuNxXFqtWBRx6Oz1&X-Amz-Signature=ba4bcec633ca545ddfd9c41a43ab010dad1a1bc4dcb71475eb4c4e6cc7fadb4e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI4M65AM%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9hoP9OY4KEAxEkgL5D9K5g4lDM35x%2FzSMDYlL6gLVZwIgfB1coAfDEjceasgYYZFqNfh1A%2FDunpIYd%2B8kTtiMtHMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrLWnQGTSSGFqoybircA1tyiWZRFTb61lqxw%2FDXAq9Esz0fkdzxqAdNw3O2ORpguFujiXoSGD2Wv3Bn%2BMT2Ai7LmqZKpdicDWqqLojsmr9WzDb7ayAqe4JDeb8IZ4UMcWkQ4S9EE2ysQU%2Bkz9v8gun0XKqKAceuURJyit6xObL4DBWhiIuwBhFcf1DXco36gMxqQqDg%2FdTXeRzPIFEwWT7q9qP%2FucwcJv77z18321FfyiQeY%2BK%2Bom8XyrOwOpINg%2BzXORBRW0STYaFgEdZe%2B36GN0JFcXuxK6WT9MB1eQ3td0zqzp6wIaLmVqdWE51MOgFg5qiShdGAK3QaTAyOkR1asBNIg4gF9HY3D31ntQeZ4vwgFcgBEqDCm5VTX3487wksY6EcAZP%2BrLEWDa9caPPGLRzoAu4S2giudo4fCyCwVSOj4EgYuJz%2Bek1j50EcrorgXSlv0vleAOtQCuGxrKfMqLnaTgSR9J9zwsZrFI9%2F2O3gYdrb3u4cSZydhH4VS8t7u1sqwBwvWnAwBy%2Fqi%2FXpF8CVOxhqT1MBTS9GBUSP4ci3AFH4rlASM5x4I72QhXaBClcKkhRDA2IEc1kqnAOf7rojLx3TRunF7zy%2Bnu84YXIcbopMixCIUOdKCKWOCpRAUXr70an2C4y9ML2%2BoMIGOqUBIcTmF48OoRuJg4LDIC02SXYYBccaUPVedk9FJ20gRENHvj%2BE7OaKjqkg2KQdM3SNhVGpQTWUQReHlQPAWMMf%2FMfnCSD07HRPRKXiEaj9JBahCxJVMyCz8GvLhzLBPD6tF2Tw9rvXtpe8qwWJE8L5jeB%2BgSqvi1IAwPlZoajIub0J6y1d4z9nOlE4tUDc6lSa8kV6se8Aze5nJSSW740GpGfAMWT7&X-Amz-Signature=15f681df913eb6c32fd3c9c134a33c131135dc607b26b16460f1e307ad4efe21&X-Amz-SignedHeaders=host&x-id=GetObject)

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
