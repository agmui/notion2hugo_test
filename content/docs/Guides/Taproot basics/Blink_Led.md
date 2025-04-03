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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLR7E4PG%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T110103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDj3HQyNqt3njPFlFVMQZWRs5U%2BtpoMAGUgU4WUbWHUBAIgE%2BRrt86ByLLgmIanAlHR1UFZDKhuF6OP3WnHwzLJdF0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3EgY5tyIp39%2F%2BpbyrcAzlF3zUoXxiOFj%2Bzz6SCRzbNuo%2BxItB8EwrxQidpDBt%2BmXIvtmm88OUdhSNNNL2ZuxLuIET%2Fe%2FoMEdmBzyM4ONM1YnYiAwfTwOX%2FwZ0F5b55yu9LZTbYlJrHufxqSXfQiG59S8YMy95e61%2BEp1OxPphRJFGtCooSbP3SNyQVT8ITijNkQFyF9gzJf2sQZO4YFEHxuJPUHImSrW%2Bkx0wtkaY1PQmjv%2Bh5ldaXVhok7PucjFnnilwHUJDvkOwBkq1TG8h5WyMz8fHZ%2Fw5ovlaZMMxiiGytD6fk0H%2FSP2Chhj7erVvtV5wHvr2YKlGgWySCvD2kJ6EBRMtgdrHvdh%2FJoom3WfJ1PfEKxcYCmD852PGBUfW8NFfXtyXv%2FpKI%2BB8K4s2AVoWGtbIuMDuEatrzFXGdFydck4JguAGB5oVxkKEAmcSeIksiEnQY%2FFPlykyjXXw96gthYmcHd6tvjas8gSEOSe86sWp32WSCH8dwr1xAO4D58m%2BUmeaQVm%2BAIO6PWAx%2Bo428s6w6%2BLvRb0%2B3aUkofirBs0edUm%2BCIPFXNOJsrVLiykjZ60B7PL4plxgU8pLDdHct0qXLY3xyGrk9Lq189W4N%2FwRT1%2Fmjup57b1dRjFVbx7s6aHdzC93QMPDKub8GOqUBUX%2BpyKN0BL%2FwyXrzxYwRL%2BDWRi5VKDnaq%2FgEqUnoTgT2xiVRMZNwzLzXhsPIzr6rnpS8OQnZNZYPBxQzrBar7QhLDY13Gc8XUtHF6XIKA5o68%2F3Fd2JEJKOtkX0psCYK0%2FpndgcxeDWX1fDcEB32mLBiR905zlBHMY1xe6N7yg%2Frd0g6hbQUAZvroT9uOejJmki6YGZfD1reJFfOR4xP6%2BdqlYte&X-Amz-Signature=c11078a5914e39ac5bba303a5429d39cecfca85a3e8fa8cea87cdb74348dd926&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZANLSFY5%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T110103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDL7kcBJiNZEyzhMuc6yQiFCZRKnKEDNZprtOFaCvVaNAIgOUplYLoyRol%2BwG0fJbcaMYJDC2Gr%2Bc9W7AOCT1q1xKQqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDByBs%2Byb90Bc%2B%2FVDIyrcA2u9TAKvsfTwfNq135uoSTJ3HJKHsMurNwIDbU9MtBEhNr1kkp4R5%2BqmxQvP9m6LqMAYnjsc3IQwSdRGNe%2FARdNYH3COntlKmQdploUBu8xtuBa99hPr0145LXbM3p%2B8LxvxATKxc4gCZrlMNrllSBpIUIdRjrhhc%2FiB0k%2BLM4f2DkKiWANjeoazlvXt84SpqePxHOlkaxYWXta6mMcErkRTX2iNy3Fddj%2Bzvvilq0Pzsp%2BrcWFSzUz88XaUOI8jMTFQj3cB0yBqsBTh5XT38izbnTkN7YBiT6UpWOUrOu8m12z0urHJDOslLDpTLKYBsPRdrKWUGUTMCTfJZzG2yzG3JaQKnbVQ3OQBAMSniaUHUQVcBKqZOkkjJjqr%2FjFdO48u9ScuBvD81TGSH4Fw166c9XOF8vW4CXoOsrDLB9pV6Xz%2BwBYZ93ehL1djrgKIsxtqqxTzFSy8Pelxu%2BZqmO65lIBxXg849AorKBqBcdytbvyG4QHqMA9NEUNYBg35VixsXhXQKoKej3kt2dFPfqFSZvhjdq7bPl4qUiALb%2FwP8gPAQVgln20PFAPiVL3KnFBvgeVSMW%2FgNYnM0BG5MV%2FSij02mpONLOtOViqXgzTyFLpx6%2BjyACMmw69ZMO7Kub8GOqUBAxzKL7zVKLIHBAhEBrfcLyO4t9o38rArgNuwgp60JbAxlWjdd%2BLPK6AAPbXRZ4ikmwRxxbIX2j%2FZM8Qk%2FzsfWdfgd1NpO3d9MCT9HZKz6X27biyawEa65ddU3UMUIlMUZny5bMt6cq8WjElJxUt51TlCeBOt2gAYJ02ol%2BJLQPZKckhifpIHjH3h0yDHDnt4gTsOhMZKcTTCRe4YjnVnWpk86h27&X-Amz-Signature=69d9575187c236646d2153f1fe59a52e96e86f24c4e1e521d572772c852d5ffe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
