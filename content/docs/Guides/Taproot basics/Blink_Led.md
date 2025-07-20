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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWCQ4MMV%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCjycPJbYGAGgqWyF6ZYFxVOVvySPzlEfVeM8%2BcryUhAiBGhqCjKOdfgMO%2FQ3GbtyvxP3yRVDf%2FLO8RVMmnzdOh7SqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCL2X5SQ52X%2B3A6TTKtwDNQiWj0eB%2FEhJGWUuGwRQmM0reSgWkAZQDS3Hz%2FFSdcoqeTu%2F%2FUZouyd5bhdxABf3VVNl6M20YvjShU%2BfQu5kOtNbyx7GSjJFKrdDZHJR2Kd49fX8puGsz07vP9rfaj8ovYIgtMg%2FwVuSgc7PV5mqiYlQAWX%2FH7Ghhpa3zmYlhvQizxTmYqct3FiYtiWc9D2OKN%2B8IN4NckKfqKUG%2BtVFZw056SumwicSBVoPyBVx6mBXHtr%2BPWu2mqO9oryDmgxX79BZoGpTEsVSB67DOAHBnthQfXYq0wYbM%2FZCQusEplfs2wlTuqeJZkkwrMQY6lVrnWwKvonWdGCUS%2B7nv%2BCCbJg2bavoSu%2BQ%2BAF%2BrfQ1gLGdff%2FMSuCh7vl3m3NLdT42u2ZgItcxcCdk62czCGqeaHzgwAm12i3dRHQEjf3Iloz3LnF%2F%2BCzn0TWrjmtXCbSyyF6zsI3%2FN3x%2FflhmhilPcIVSEZyoPWSeMJe7J8h9Lan%2BPc%2FqV5I8GKglmg8UnpHgZIsIqgnIUjWJm%2B8VI60yYgAYisOghrysU%2BhC6C8PTEtbVdvG5DOw0uGh4o9L9ahmjIH8FbuDFP%2FMI8BUh%2FHeO%2B03yKjdO%2FUmsLB0Xuv%2BYVr8dLRymYgV2bvUMMQwgvn0wwY6pgENNhNb%2B75wQtLv%2F5f7fstbAk%2FC8%2FU48MiY5Zh9SPXP3slWfLzUu4%2B6n%2BsXqAHSNaYnA%2BIMXRtH1WQkPcNI%2Fhk7OswpkY5y1oMdGzc10IkNJTXTtbcCWBY%2B7HYjFEdyg0BDORRJrgOmkkMK9gUsxvgtBvGiW%2Fg7e60Zx2lHhNx1xtQxkK2qReGYp2FXDCWl9rjh1f6V63KHfbCCQGTcP2X%2Fqz0JmlZt&X-Amz-Signature=962454dca73301b3965fec6d095c170beff1204d121b3dd7f9433140d7e14f40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GSDUTJZ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERKwTaXWESzLxL4PmMRsNDU5Q8SfSVqQo1TweGh%2FbebAiEAiIoB5Z%2B7dAkIPLf7G5fRDbg%2B6XZUwKOPssuGmL7NLYcqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2Bg4Cd6f08IK3e56ircAymkXbj6dvP3tJc4hg%2FOI%2BR8OjqyKb2TCG9MavAEWnmm8jPNw%2B3CfKoUHKnxh%2BEUi8h9m1Leuru4YMpVMXX16yzekByYbSYlAKKuBkKdyx9Oxp128JFPLJU9yG4hCjwndRFwVZSw83J3G7Hp1WEoEXeIViWNnfd9TXnx8xtTjM6fSE9Kkl8yatbuQv%2FMnb3ymltETQKsuyaQrJs%2B5mdDF4UPSt6Bj6dDeORfg0XmcDyf%2FLyiz6%2BkxEE02lzQZPaTIgJTmq9fSnxVqjv7n9bXmrZIjkkWIBm8EZ6GMzIxUMzdhZNUSHBdnZMbli9iKFDuiI9eZeyIJRf%2F21pZmdiYXwjT6pQD5j%2B7ougqXw3G0CzOSWuXoYikeE%2FIWDNzK6gGUrOVPdB%2F5rEQpeH1ZGKgF519eaD3v4BHRU0amApKl6bHHT5jxCs2fA7a%2Fy4xCbnC58eGubC9cWEpaNyUg64uQkMXr8aIPIcuclpeWPc3iX85UgzDB4nAtyioFu23zyf6HPCFpB3yzqGMNWNoDStIqdLELDrwoAj0qXA%2BMzz844OnZlgGgAW5bt0dm6%2FumYeKygDsWdn29KKZ5%2F2rPgTh7dtPeQM%2BEJZn7LDYrGMs6vdlcvCplHASXTmfPz48MNH%2F9MMGOqUBpx2osBgG30jHjz1phyWxzfQ1WqiKEcNwYHkGG21DWkKzuQw45EQmtaA0g9zA0N85nliGEvnRIp8dqK3KWRVlp07FkE3i6E3iajbKQ%2FhtEIO%2F1%2FMpWFkFCJ%2F0b%2FSYDRtPFwDXK%2FV4ihw4cMaoCa3NJXoA7XVsSLK%2F6pBGTcgXuSrqTClSoJ82ujyekziTbtj2mggFHSBWzPgKDowprYRJmcwG113F&X-Amz-Signature=b7b07b54cd9d07a81e15d21fd833cfa787bf736781d8e2448fc0241810b118a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
