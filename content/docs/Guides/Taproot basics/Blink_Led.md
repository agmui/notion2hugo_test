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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHONXNHX%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQD%2Bb867RJyNFrWlfzGnCAq1oZ9z%2FGSlhLlILcwOQyH1EgIhAI2y%2F7MCzAF3Uj39SL%2F%2BckcRtygav4AnI10u2OT4zGiIKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSDMAlIgdTO0z2jisq3AOm6fgjY%2BbkyU%2FuB1cxdbfJTRxJo4MRAn0Cfii9y2fQVbwEBMg2W5hIUkFuxPQujAG8i7PEphyqmlNe9F%2F%2F4HYdhXees1rxj4470CJC0RxFH%2BENxXDZBbNqmpZUdIhus7VqezjXc3wEYlitwQkvzzjh7lxaeDsi%2BFTAPOrVrWZR6dd9a%2BRJUZo8U3o48YK%2FrJQcdsM9YgdABQc3JNyvGwB%2F61HUtYrq92I1brHMhO6laZLh1qqbLrYAvVe0zgqQHpXx%2FVtSHKT6IDP66%2Bs4ggMVy0GENApJECKum54vF2g2XDiDYjSrbZByIvqdqyk6jxc%2B02QCwcnCp4NoUOAnOzf4bhEizROMOjnOxAW%2BlzluCOw9cwyRamSadGu9DxqiFzzTlURyILqHAmehXI9NIjnMaIZnKBURj7XCRuvEbUa4HLjJrl5%2FUM6MzcKZ6BCHtUlaWspwMYz1rF1TcWB3FViUZU1RZP%2FuBq4umIEVQ%2FHdlndtmqioPVsOYU365IVTOb4u4sEbSFkb8EGA8jxWldKIkFOZc1G4py4XMnh9WxmUR5BFXYcdoLh9xmjK7xxppvFitDFEzb%2B5o%2FmZzkOMVO7I%2FE1j%2FHmg61xPMureRBC7za93Ys9jBCsUSDBSaTCB6bO%2FBjqkASL1%2FlPOpTZ%2Bfh9zdBfyL9NuBb1%2FdTFU8CSNSTjgZ668FDsZMw86ehR3QZLuCLSOY9Z40iWCgr8PTUg9l8jPOyudRSSYCdfP%2FLGpbP3u45pIT8gWDyVDz0K41dYUGjblyB3T%2FAxzb8Uc980Cadm%2BUPT2AesHSgs9%2FnIwatuXoWLj5l42NlMRLbb6%2FeBrtxMXCWUmvUeqXorub4PxhOMUss%2FbMeRU&X-Amz-Signature=bc22745c597f7bf06d0ab6aded8eee884a6dada80b0f8d784406e7a79b8790f6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5BW5KMF%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCJGYyaJqbAaKyVhjzKA7XZhCoLY0WZJJf5BlV4TUfiBAIhAPK%2BiK4QUFD0Blk6aXOlRgsadwOEXGCFxOpHpgpevLdmKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwr1BQ8XkUl9JhUiVMq3AOzVks7EX6y3Q7MRXP8%2F5eb%2F5vG7WqZ1%2FBWsrLymxE1ifg0mhu1fg0jCNx5ssfK31sPfkjbHISHO4SnLDainv76SnUVvu8RcCPVVSHvZIUgH9BMfOwZWS%2Bvkj3teU8DOOB4ULhqVwm8fdpUsweqBaeW7mfEdaq4UR%2FWtwyBAlhBycBHwjo1xHvWsQNerlm5sTw4V4hoALS9MXFCxrWr%2FX8xXCNP7pzreWI5t8ZfcNjjA7kMs41JhYy3ghx68BP%2Btj0Oz0yEwHO9EjWnundjEbrs4DnuHjt03Aw05cEygr8XPOjE6dsYlVIGJBY6ROO5GJWxfHoIXpAP9z3jys6xk%2F9bWKmJcAfl%2BKZl8U8wJ8j%2FP6tYUF5v8u3tf8RqKYO1Ib2fydNjy%2BBIVrQz0rKjpOOidnBpWNO7ZqAVhqD%2FWqzj2p58xJBnr9gWG6G3X0iiEb34WPo2BjI3EcxCSYKpY%2FnzCVoDnXZsqGEmkFYtsdINhurwy5x36WbQtTx%2BB9silI%2Fln5Ab6mSa64BksBEgEfzpcWjsZj2aYJKfmqNGfHXMHkRQWDe1TGSB1ljNytV91eDOtp4HSUsjdedDSDeJasjrNV9V48pfDMlpNaTNf1OJaR%2B5H8sm1zWGjUa88DCB6bO%2FBjqkAWv1nL%2Fn8LEwrnjtjzg8B10EXXNF8kBFBCF2en1Eg46zO5gRMHoWJ7STT0Tx%2BWYNVklgzlRpoCflAh60RlZHK950niLYlrz7%2FWiUZBWm6XlehEGXcM51j2W87WvErwy9Al9bFlqJGVFHIUXclR22mJpSTpwosGBAQyZ1zReCvQOT87MHaXNWBFzQMuxYgJQ3JmVY3Xz6%2FTdwZCzO1lUwOw0dx936&X-Amz-Signature=1793adfa12842631b6b46a07a640c25478f35c6f4a251ad10fcf8afafe67e0ae&X-Amz-SignedHeaders=host&x-id=GetObject)

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
