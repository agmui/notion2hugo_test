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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BEKSKRE%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T110842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIHlcXxeLdNdzxG%2F2HNCClO51oMCJ90MVKar4FYcuYDq9AiARGcTbOsP4kmS3%2F2qCFUP3LKv4S1GeZvCFM22QVOMnUSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMc5kF6dGXAhub3n84KtwDF8qHUmBLLxf6bLqAQEbRlLyc%2Bpu3A%2B2AajJQRbXLTuxIx%2FXAR%2BXvtCBNehMjIKQrA6sqEHF%2B6doess5oCNVJf%2FhUhWqN5DQ4V6kPTLUfjrp8hnsYudxA%2BJdg5A7G2DTa1m7gvP9OEng2hsALCN3wgl7f9P%2B%2FsVXywheleAdkyFJe%2B5tFVCGyij7R0eGzBaK1lZfRgN2AGYFE50x8ChDpvthA4ptQL12U9uR%2FSEgAkaWBiz8%2BgQivKqRIO0oSzc1t6XdizB1IzGnvQvAVyETZg3xgI%2BqydBevuERXPfR4DDX%2FZH4msJlEFxH2PnMd0qJhtrl3KMGoRd%2BsV8j2ReXNTPfJmFFYgAqi4GLqL9uIYDuUC5eNxDuId7K360kKStxpU0IlTIfEQJMki7bzNxlKPaA1IpPhMUafo47XWMW4goEq8J7%2FQMvNRL%2F0LWUzhzfTw3HuXCAWYxfnedQSoW%2FTs7HqstDb6A3MQG2%2FNJLn4I0ByiT3NTeaytEfb1V2udPWplmhSC8o949gQK4%2FoniTuXxK3WlFdbjdjoDAKtTeDhHjp0mxeHYLYlSIn0vObp6U53sfjkUDmW0g%2BCdMiA73%2FspkYrEoFImGwWsMWJbdvchj%2FlU43qUg1TKvJ8Ewx9nYwwY6pgFOwHe4t8zn6tdZrNqYtBh%2BXhpS7IDVvUu3RCjqrMV4ZfXTOJ7l4tTH35T7Vk9kZP6t3RYGP5YBO%2B1C5bqW3wk7Ke%2F8ZaOWdugAJiDWpzwXwDuko2yFoFO9NUwjcXVsyJwqRxRNe3dx6boE9KoaHFdgj1LUACJSHrXuOksIt2gsYLHrNWdmsVAcA0zzhwS5dK%2FmOv5y0O2lA1x0pFi84%2Ft8zXXPA869&X-Amz-Signature=9d594996ca2b7d8bf302f9a6e49bc3783ba9ec4040d794c80f345d7b9a342818&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTGIUXYO%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T110842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCICGhNwae4f0ctJTD5STTPRJm%2FHnO4oGiAvTPOOaVmY4OAiALWu%2BYNGCHgy%2FSQSHMAaaep4PooEJ1u68iNeDodyfp8yr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM6VAxzWs9dG4PMdtKKtwDKNTbFtI6HpTuHAtFG3nER6dHyQBp82E8jzgS2IGwDiHGgCwvYU%2BIQi7TeMjGDh5SgSzIC89NZF9Qozw1HpC4ODT1bEfog7eVC%2BiRVEIEmQ40K39DwYlI2ATZEBPq34yu1i2rCpS5jfSM4HTSX81ODxsZgBjPjc8OBwbskdFPJFl0e65e2RN5k4UkViD84o1dnzW6L5wmzCnUKrh%2FzX5LumLpWe12ZfJBUt%2F382G%2Bp582V4HsMqeRTYFEucrD%2F6xLF3XkUIuV8GZEvJGATx3zCFTevBsBhV6ytYWt45dR9lo5e6YA%2FXlDWIcNlhGuIO24bkLs9uHpLbtgyxUE870bkUFqJ799Lhch1bprtM991i61YQZGYgjEaaxZKBIQP8YJoAiNKm8J4zxR3W%2B0HBx0AK5Zr7qZ5EVXzXDvKGxQGFJrZLxR0ZG97yb4OThIBr41Z9fUv7n0UtJGAiqabODtwG59v%2BJUaslkwT3cyyBL8rTrTffpmqOdvGDpaiSn44yGHQ%2FX2tts8SEXLaaVlp7svrSVM2G%2BbqNqZ9%2BDpSWdc2qMgtMKT394414JPzGZxIGyDanPK0DZOQ9MvL63LvGk3Jm7j1hMsMm3Dm%2FGeC7101KGeL%2FIxsbxGsGk7nAwvNnYwwY6pgEIPGvGKbVjJM6O7AN2kolgvz4JPWxWU8%2BkXFZEtt%2FrXmvTJZZF47Ux%2FJsaTLSWeRNbFZ673rF%2BFB6xwdmTmV5lqSyLo2l3L0fQHv0yL%2BjWnDgRt7ZSsaNSb%2Bpubr%2FTMHpfd8eBDHTTItMjqE42rrXCNHGmY0%2BV57PkOl93ciN%2FQFx1gzvBdbnWIUBHDJsbd%2FlnGY9NH6Xlz1HFA8wy4Fz%2FJ65wFpUm&X-Amz-Signature=9702b21534e057a9404da756ed383971b27d63d8f2c84d8290f9df18b250d3dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
