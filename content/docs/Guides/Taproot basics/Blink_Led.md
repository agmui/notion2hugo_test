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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFVQAYZD%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCUqYbnoSMof8ImANh9x1ItDGpTQu2pot5KxRjThi%2FdWgIhAMIVAWBcUG0AcpjssHRwQGw8bTtlKB2sItwlXXkJaM7LKv8DCBwQABoMNjM3NDIzMTgzODA1IgwvYycA2p5EABJf3fUq3APHRoo39%2Fz%2BW3roB%2B%2F0JyXfkW2W39Sbxbb1IPxCSnC9aaBkOrXTfYyzgHBTnopqcAT4O%2BtbWIcfp%2Fc2r6LZRLWxIKqe%2FzcYEYijN01cseJKLrBAIZOScIHRhqqdqLXaVDswjnMh5XKRw2oyAGCR7vR%2FxRwY7%2FHJYT4pKURP%2FUBp98NuxOR7ENlwQ6qyCGg2%2Bu%2FxFoXDLyqiCqKsghFznFzD0YwKltSCLSaTMlNHuifnBJKtt%2B%2BYEO1tnH3S9hKoJouZ0PZnpTnEx8z4uYB1qq0rcXDsT9VDFrdUFJqTVYCUOhDIycBkuSkB6jtji%2BR4X4mXUgfi%2Fb7tD51amoUB6DV2NQLLJzmMsXaF9yhmjH06w4v03g3DyE%2FxJmr6PF%2B%2FNPpkwKCrarCBqvdimcBXp3NE5R8FSUm5zKlH8zYxQiWy0Vm3fE8CnqhS3w%2BQa%2BKEnG%2FhOEM6R%2F0twbsEYxU%2B5znWhA5U4fxSMUKxSyGBWq76G5AVBm2G9%2FFMojQVPjobkTzGclPkpMpLOQkMXLuXfjekBg%2BvodjlnG%2BNAD6a%2FhFU8a8XrwEvtPvBL9bNWxkx38Fgp3k%2FjKj8JLL0GUQWmh%2B3Ie4s7xWqcwp6tZX8z6ddnh%2BaAw7jj1iAsIK%2BuDCZhv3BBjqkAZ%2BASOk7ULjCC1WTbHAmQ0bEtNt23PPjSD6%2BNxZ43EAH4gi7VpVo%2BQDZpoyWv5BSld%2FItWzOHkxXFd2yS6VltoQApXccQk2eNdnWP6IxAqs0HdUHEKn6Tu2xT60DtP5lb%2FR%2BmiiV70WDYnsfI59htvTtsIFRzhWc8BiwS%2FFOYvperxFL15WU%2F0%2BKkJOVhEZj66g3%2Bphw8hmr6p6VAXUPHlb%2BLVuG&X-Amz-Signature=2e2c2a265f371c544f9d464d4000909228719300c0c9a78d03207b2f85f10cdf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD6ISH5Q%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCCT7sB%2B2cg4YnhIP2h59gb0jAf92R%2FrE33soJ1s0vEgwIhAKLxSMDYRaxKBZxYn3D6Gm2p98dRYKuyWk%2BARVSdtxHrKv8DCBwQABoMNjM3NDIzMTgzODA1Igzu8UgrLhjZVgMpjMEq3AOHHcXoyN%2FLzUL%2FsvIVR%2BtagPLx4sHO4ucgjCoT1Jj8%2B3vH3eQOXbAYiXU6cZ8CIaL5iMhFFcJgUoFBp3%2FjzOxW00oH%2FkFTtgA3lCy64IDv4wDaZwkD4u5DMVsLujNo8%2BwQu6AZFpFPqbfSbfMCe3drv2PJw2iNNE3T%2Buu6Li0fGGKMymMcMCUY25Gfzx3wfGc71y%2BtXKA8QT0sETVNjBtjzqHoaPrLErcnS5ibX%2BmAxwIosvQkz2x%2B6k1Bea3cQrxth7WqDPM0ew8b1j71Sly868hrInt5uwO3GNCzvsy%2FznUuS3Mp6akFfmVkQtSavIy33iZa%2B%2BgigdpROj8FMzZW9KkwNoZ5GBHLHMdrhKHpqCTG8jX3phbON1t2B63aimmktRkYVhCw6QPMnUq4ssLL1eaORmLQs919PuOtFL4o1XfzPWoZHqnfBbyYfGyj0UDSMUayuSfdFgZeX1jyNA1nWUvCuhIW4dMx%2FA29haeTyTDzhXeqGysDHqTHWmoGqcxclWcUgmUADxH%2B5FYKK8SFG6ElEwT4nFPNEL3xz7J9YkEAjCjwESEKkGd%2BIZeRPI2fk1N%2BQ7qHZaxQOBV1IuQDaZUgY837hR%2BWeGQYX4k1VnDLe0BD%2BicZQZxi5DCAhv3BBjqkAViKUySzb6adQ3jbE6GRvP08ubKC3LeRSrocgoGz%2FpCOFA4plKTJ8SJVGdcYLFH%2BrHJtigwKdOFR3DE9KpB2ge7i%2FjOw41c%2Bk8P3NGkjaj6xN7CMRt9lU%2FqbfvyLnyQGmXqArcyccY%2FW%2BJEjpTMOJwYD6tXO6H%2Bv9Lg2B8DG8QQ6vCdJrPzUP051TT3PKnxnN27bEma8pD%2FUc05883MLj55MpBWA&X-Amz-Signature=0c6f0dba613f9dc652ac50e481d520965763801bb01cf25e6ce6cde5d12af92c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
