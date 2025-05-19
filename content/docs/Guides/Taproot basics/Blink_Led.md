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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQCUMSP5%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpcArU2yuJj%2BE5OAzApaHoqPL00eWrA7TlYtmF2a6OUwIgeg3bcvpvAmC3h%2FsYhJ3TDTaycWbHd5gJV4s1lljauqYqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtZ4sA8XbJMNY1%2F1yrcA4GXoBTDigZHuCmhasY7F1Js435J0ww5OxfsN1aN66NihNPV487RZUc3tvFLQakDCu7G1Wp0dYKOwrsu8mRkJAMyA3cBrlhVQ889zmxnQvL%2BSsAXAE%2B98jlarA5Rtbal4uasVEvfKXue6IbwD%2BnZ2EopVScZkYwwgbmzf0rKbHJvgO8OXYQVIBegqgB1Xw6pvaAN0XDMIg%2F63Ld%2BIMO64qO9LZUGXIiZLnvn2sWZ0pMM%2Bq0dgE5BEhWdbWCSCuGs12iL9DsDTHhFLtXx3oLjX7lsTPc4CvK32ZGHjiEl5g6RNehmtD6aEwQSMR8JXjoUEhg8d3ClZ6DhbH2UtKieuSLmTPpbcfOYqRKqLqGOBIP7QDcBOsi5BYvEj2djPKxmPuI8SM8Uc40pZ3EcccmI9grBVE9DJ7qbplw16e0mSwTUAubRf89FcXJpLU9Ugdz4kEqsTBj9geasr9%2BCLw2K7blVS2Eq17EXkYXEx7Cxcr97tIlLii5WgTmHfQRX6HIPLMyVFVrvaZuej2%2FFfNrYXkkM1iTznHl%2Bh0Lo7xNYHrvO1nyqV2d8gZT0eSk8QwJPmo%2BChehLn43UkuRZdgboLLIj7b6kK7XyO0meetPNk1s%2BLyKYQ0rBKJ%2BPkuK%2BMNDfrsEGOqUBR7ChnvSy1wmPxovmzFL3ivjUk19G%2BUiO7jKXjW9SZmKJjgwEBrPrUp0MNdUdYIAOGkdRj053ZMmOBZVVWfS32r%2B4pXSY%2FLqh7SHq2Q%2B75PVgtcfuAe6QSWetJM%2B97R8ggqSvUKw19NQUMn%2Ff8mpy6EQgcjiCcq%2Bw407Gjo4ZiYLt1dq9pTqCuix%2Bn8p5mG0NaxuMqgewQ7gMUHwX2NsVYWRzPh0H&X-Amz-Signature=de22af2122a83080149a99e3d935af0a772721784bd6e37c4cabcc96a4a53e81&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGXHJYNC%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB39CI5AzTdioIbbtE4t9PLPF1cDq%2BsiPiSRhWbfpyhHAiEA5ouVepBYlH01l%2FJ%2F1SYunvJfniV8U4nh7mj%2BsZ0P7IYqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLz6Zb%2FzpTnofppMyircA4m%2FD%2F3L7nDZeAGBHX6WTIo2yfwexRFhy9dNPEW1SdLZlarp5zo0iLMmvNQlXP81GkB4eDDCCyOi%2FPKm95OgdfDKc3F2LG7E7prBndWOmME%2BsEsWoyKKmWHZq4Vt0aSyqAx3B4Q7Mf9%2BTE6YyY5aKrvaiU6UfUONsZ88r%2BmSpyzaOyBmHTBLJQwRxhoZBvMeP2TWDqx%2BUqu7ZGq4Px3BKG1kZRQS5nwMfAFNDC6IE3u3aUVle996PEjRtglOb3NQZVP5PZ3I1cRxTJgkBYA2ynXaagA8aH6qBS81K7qyo9UGeHGxsGntKHPuUUxt8cgjAIaUNAAhW2DCnRaq8jxSQ5puDxcFgLBJYY1l1CafKI32x1pgZzQzH2K7ijYUsfrzG3posQagjmw5nT2C1ahu%2Fl4XK4dIOOdiwZB6YhKNe00OyB3tBml00xrKW85X0%2FoI6vL7T%2Bnfg1BZxi9vKuKRvtdywu1aZ%2B%2BRuhMPIN0RumLJ0nLpdHs95riLb5h3NKT73MrHortKTSzFDQgGQQBhrVancQKMCZK8iU8K9izlMDxi1IeW2U6njL07Gxc1auVDPvwSB6alrn2gcRak6cVLZ%2BFWWBy9OEdOlroBncqFcmh0NWIT14lDqRcp9E1qMOLfrsEGOqUBDZio%2F%2B9eEbqGNUZSN05k%2BoxEA9gffuPlbh3IALPAMJzBaUeaO5AjhWfpQQhSk0NTmlwInGew8ZwpoUfVAbhjG4YvtK8KyDSWXLLbq%2FF4La9vJgYvZYIY%2Bf7ZUh90wn03qicGZhgMNZ7zyx%2F1yg8q%2Fcb2u1hWkDnf7HhE5USofqjscy2eAKhUmPcOz98YkV2UDyarJLFRSNzmRYyU407zooMIx7FT&X-Amz-Signature=28a692a69b9ffef8f029fb8cd0dee11b9af11671a9d94a22b817a182c8e014d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
