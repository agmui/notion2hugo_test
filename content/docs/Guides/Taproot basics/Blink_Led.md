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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XLLU7FO%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNRqyBEQOdeFVvG7o6QqLx5HlXNW%2FRVLiS8fQYtHTUhQIgHmzzyo2WuKOX46yeeuaFTXZBNnArM%2B7Vlpf1mksHQqQq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDNgCRQMxxs%2BR1aO4uSrcA%2B6MhpRGKwSrBSAZnq00NCB7HPbgNed3TAPwqwB6O8s5yC2jhJJOwIwjixvntGSotCskwFiPA0ONuM%2FJgw9KcoB0b8%2B8w0BKmQB5VRE2AiI1lM9PboEB4TOPAQkl7LBNhE3r%2FZnC9o%2FhkUG2htdkWJVOFiwKHcW1yGBP5rdk3JH7w7gqNbRE0gtuxYG5c%2BhO7AGVo4v0QjhGqSSEVm6tolEIzVX5qkNiMGCI37OvbPjhJqqGaz9QVR8QzOT13IIoemGCu1B4AuP06hExyeUhx9OEMaMxcQ99fChoDQj8%2FuHQ%2B3t%2F%2BBnlA8A8K%2Fbr0BE%2FU%2BZWmrL%2FLW2fnIJF9Q7vDOryu5hz7Dw7o8iLOZsByngu6sXPfa5Atvy4vrZhU%2B1Xo%2BbQbCiHmLAVGyN9I%2FxZb9yGaqO0C4Oh4Is0x4QW3YtaSZAb9gQ9cDRXXLSNGvGNzjwTlf0XcfYfrWg5eSAXUkpuFWJM%2BjmtkTjGjaX1BC1XAZhh0X2001sm1wTePfNLVk57PCwzfGC%2BkZPEQY744MkJOc6KVZ6nerSvuE9g1itXQH0uEMNcHLn87XeyWf1t3s3F7zssf8hDBy6%2FL57%2FwfVg5UcMMYTpTOChvc7Tk4V6RkNT0HpKroKKbnnyMLrggMAGOqUBZYKaNrsP8%2FepuA%2BNsMS%2BMbpAd0awpxvkoz6wtmzYaP0g8PvhuAOI0T5XAkTakShf%2FFlDAb8WbQ3R5Y4NrGpzrr86eq2bxEoweMoW3Ua0pvNkW6wnkKk1d1B7c31Ui%2BmTAdGM4PCfTSEXEyWG6Ou3vqHvDcvu3mTSrBF6rzq54rXvCs07Bn9jRQQ7RJK06TRxMfTn8iRj9kY6oe0bVehqlBPNqP6g&X-Amz-Signature=df468eaeb08720181349c4a30fb8c6acec2290fbb33c6a74fec79aaec9cd94ab&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677DVIOZW%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUylIjBDgUOvN%2FOriYeLqUAKNM7zAECI6yh73CwKlQ3AiBVSe2U7su2NMysy7ZjeYkWw8iSOIx0iUMN94KT%2F5NVNyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMvttFgxd0rA88feTmKtwDMq1JijYUHCNuYnHvf9oyQwZ4FWTmT7jD8XtoL1RsDRQgE4bKBX8dsJe4Bk%2FkoFfccaosY%2Fw%2BHmai2TAmKePwWiLQcqG0TnE44IGc1lbTim7Dx8wrIU3yiVoOPmgMM29LIwYGvrOmpPah%2FTXR0hp4tNBM7jP79Dt7JUjjZV3JrlRbLbrnB90CjSCoo%2FZwRr%2BRkoEKQt2qg%2FHrZgESH%2BPn%2B9WzhCQO%2FPsHIS%2BToTo0Kui%2FfU78Ri%2F0w5nfVjG9oekUTBKRifXu5UuZITwAsT%2FQebD92BZ250D0vKTkoxOyHTi0Rc0tEjeVrGEGU7%2BecrOTl9Clhi6Lm0YRS7qqWRHKSACIWZCaah9C8WIp5EsG%2FPXbuyuglTtQjpYslISacLeDf37bttaTwt3pnsRXn4Y5hggbSDHIvUua%2Fvc%2BaaT4boantrFolEgmfmF1CGZSpUv%2FbUorxDdnyZZvCP8BB2auU8eRktOOKH8Qtm8qHYqqsfk5gBACV5KDd7vMvAJZXf0f0XmZXrtSPalpron2nBAG21xjrGI%2B5qDg047SpEiDAmnh47eLFQOXiIOs3rSUhG7uOOBoG%2FctFlDn75UZueEAjxgaQkRAhCQeJas%2F8KUjkhS%2FQyEb%2FicuF78bkLww0N%2BAwAY6pgE1rV8%2FxwlZ182M7wibAIvta%2FKdcnaIjBhnF0sYad5bLoodHAAq2ErEX1knIkb%2BMDosotk0lK63u3%2FvNsIePYb5gSGDY5f2fyhedBV5ScKr%2B6MNmBv%2BENMgorEoqCnFB1hgzA%2B9uzwxybTTkp0kdCbgzqERg5wD8usoSwHRFwG4kRfET%2FN329NnPNOy%2B29EiI1lg2YkYl%2BzYoXCzgJMvZcszhgSV22f&X-Amz-Signature=d3e81ca1bc74529aa533ffb2f23b8747274d2952da683ba62db876d30950b023&X-Amz-SignedHeaders=host&x-id=GetObject)

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
