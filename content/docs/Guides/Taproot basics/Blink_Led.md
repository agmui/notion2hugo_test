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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWJSZVXW%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T091818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCG5ZkF7kCj%2FJpfGRxdTXHIrDXNACOvbrcIllKXf%2BWrYgIhAM2rsIailwsMqKT7AWqKPUIPSsSz%2Fu7iw2mTaGLQ55xlKv8DCEIQABoMNjM3NDIzMTgzODA1IgyEXZMK4UtTjJZPHNgq3AMvV6GOEp4LyR%2BICQA9afN3jMoWoRmyVuPapEej53IaPHTSQ3wayHGBvDFGIvYZMOWc%2FG%2Bko%2BM%2BbPvF%2F9%2BwepjCp3JkIdpwsMFZ%2F6A6ygNzRmvmzmgls007pQeOxfGt7trOpCOBorf1M8ERrjgwpvGryNpl2IyDSJh5azckV53Tn9rCFt%2FSx%2BV9lO5tzkmqyKvNvdcrmyOSedR02qrN0JU5o416vxBniK0PJGg32rwzxT3KOSrS8Oai3MMSotjUDpslpTG6R6MEiWd2LY8lQmQTkqgTJ4jynykGkYqenR%2FjNlAinqq4sZCVoIDYXUN8Rsu%2FR0vpodmrANGmv8TiY8RWLXpG3ktJwt51dT0vowuWMWZcUZl1am1OJWs%2BDHrEr9dh45BhD0EsG%2FmuC1i9WY8pX241V%2BTpLhQTvqSPTIMRObpqoUtyqr9qiFWR8uTr5SycN72ZIn23ClfIuEXSiHLXh8LgKRN%2F0e6AP6Rg1Gv8O6F86ewZdngJfYdzrZtz22L6R5WmB94j%2F6H7LKzH9nro5fiapXU4yRsYqjLQMfd8tmUGTcai%2FJXWO9Jf%2FgAJfHV9YnVnpeEX44nmPZvUa1e9lraMXlGC%2F38yhAbDz0Phq3fqjId9ipU5bZFQzDC4sdjDBjqkAWzjPnzqfCNLDrgb4uM%2B7N2n1VvBJYWHY9VwnkdGrN9IsaMeQvBH1%2FVnH3UGPj4Hh81tL6mHs6PYodk%2FtOLoVaYwOGCOV21b4WqAFmM2RrwMFgIEvM9mevSYIGfNNfboMN7WJLXVX3qUDTMzEm%2Bl96q%2Fvo%2F7Qa4M4TLsHLDxdjGRyS5tsjUFrwhTp7yw9w7d0TARRRTp%2BZUarPKLCnd5TueEB%2B6W&X-Amz-Signature=dff6e6b130a6bd77944fcbc2f83bfe41a40053013000dbfdaaba6f02e99172e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKBAYEIN%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T091818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIBEvcneMLzpay3WK4CubvKLX5jbyS8zkoCdCj66N6CEpAiBXwxE01O%2FgTAsfUx%2BMwkFIRt78pBI8qzG3qAOlC90xPSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMB0dFB%2BmTb6D%2FZKEGKtwDpZWDz0M5MxSfCmX7ZsPh%2BSx34YIw7vodGrUkEeQaP%2FAYBxkW%2B5CCErP7ivchoMFDE2L6dyi6etIr1bHWO%2FXaKQHSlGqvt%2Fu9GGIy8BoCpH2OqzNszu1P7I4mMAdBYwgrsR2H6vhKP0T%2BiDad4brVrtslpZv16C5uQvZ5YfGBd2TsmEdd6rXamfaMgce5uOam17t2uuV8sgXoqsIg1%2FBwomdr8byURCOMz%2F9iWzPbYJlbtR03gLhu3ddHqCAnsonMdKVfE1ioKi3u29%2F%2B0LIMc4fUuxMteYDCz3FJiPBgZGLFtJBBpIepu2svRIXuvL0eK6OzrqO07VgTjWuidFOTpjKZAY0RsebQCEZ4TUlLk7Z9%2FaF%2FZBUSEeuacTv5hK5pavyvxbQUIZF5WO0TKPBQe6XdR4cDOy%2FOhzoovwLOprLuM%2BonKMEi8FvLcOPAkjfC2ofMV3odaec9XU9Xf5ZFik99xZsCafzd1RnKsnLe74SkjYcSV6hQCsgLfsz7kS4h8D8Ewg313Jw%2F%2BsTRraN3sQ99ArYahwlQuh800WFBHMBBJ6c7ganCPVEwuQT8LWbozmNy0SARdfdKTBJOTqHlDjm%2BC%2FbCQMKN7nhiZXuhK4HlqI8a9%2BWqnYRpLIYwrLDYwwY6pgGR2RQYcBXWvEsZKCWfSShSHT3MRTfphXGJ8YsTQKK%2FKjRntODi9HyDo5lfp4Dw%2FxtSKje5njYy3xHnP9QBBmqwbuj9vB%2F0GQGIzCfm2R8gtSYFmVmwZsE9nULZSNq%2FshPOuJTJKgB1EXWDfejWPTl9PMhTdFyNf6sH0CRIoWAuBUVI5MbAybCTy9%2FWPj1Yp9VXUxKhdDeU4VKXShmEwHV4wjV1jk81&X-Amz-Signature=5131273965ce073bde5e5f7b286d0efed5f3ab6158c9e3b6fc42255bed14eeb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
