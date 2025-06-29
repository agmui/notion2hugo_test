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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BABGV3V%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T004930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICd6GfXUJFKfGtv8II274zpaQAB%2Bfuq%2FO2%2Fz1pNiE1tbAiEAzY%2F8fADoHD5%2BFW7hvSsnKBWoY3gdAmZG59J3UcnROVgqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFW74Gbchr4S5aHzircA6HUktNAPRwN7r8%2BTT7mdfCzJStNSs3122l73%2F3mbkL1pehAqQcLcjtaDvcNV9zGdWvGhkudbJ%2FZFVB26%2FhFdXwdDWhtDXZ9Dk3vLnyjnoj72FZbBAzYQqJM3LmSVFd8HGOoMICp%2BOGX5lnt3EH5jwZ5tC%2FYPnUadK5jt%2F8ZpraecqyavXuOeyGDYqgOpsjBbn5uMcbZZNeIj4%2BMk6CKdfA7%2F0K7xNXhLPyV0WYrU3MMp3LxSyUTKcJPwRPTcppuCmJ6tWoG4p11AgtxC07imsN1d0pBIsJ8OIVUDNYv6jBJfG0PQg7%2F4H%2FHwqNe9QJTnTzBDn%2FShyaTaHJDfzwXJilt7VM%2FCjkVIFSW8MzpLod0azWRFEx33UWpnZjHBsocB6Vhb6iXD9qAsgNr9YSLMWmYHKokswBFuBdw2HP%2BJxu%2BAuLrex%2FKKjud83HxvoBXIEP4M3vmXxuTeYzhGZTHul3u5I2k8aQzBXnoPi9eKYjKLASbpOVsnoMj8p4bFy8wJZw2a%2BfzyhmD%2FPcYl2FDfzMfcYdu2UVTF5qFtHKMoJhoxkJQaFfXSMHOGmnQp8sqbF%2B8qHYq%2FWNz29nRoYxhgjftxbZHPgAp8EwfTigil9ZlqUFA4QiHoSx1GxVKMOaSgsMGOqUB2TyX1uTKcuAIwm34%2BOfAIbtze7tA3ZyYf6tXqjcV3x8YwJiTptSO9rzbGRrrulVUKLVLReydlPLYiZXqoyANNjaFv6IClCKigMYfUOYwh%2BjIn8MjIW1EKtYq0OUqPeNzYuwIvGMeMR%2FE7AoJALx1S2ex9C8T5Cccplbe1eHJrJjIXSQb%2BY%2Flqy9CnwSQA35SOdk7BoDL3UJR6wbrT%2BCZOwfMH8Id&X-Amz-Signature=64926218a2b1e7209cb6c169dff8264ce877c5a594aed0d2ea0e4261d9ba3420&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEL254HA%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T004930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFvxF0MQqQTX%2BY3haUNJ9Ru0lX4u9lGayf%2BMpXRXkpjAiEA0Yq2CGhj7%2FZco5ezwL2z57Gg4S2ZQlSE5eKS%2BQQd6r8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCejM7HsaZRNHQv38yrcA6kbQswhNrlByLFDAdD10VzAh0mbnbR3pvBC13wAGJeLk5tKkBuKv7Wthq0UTz4%2FrMeEhKpSsi8FYkdnYhBXyL7N47JVNAJKc8L7BCpEE7XycCvm7okzEjLHC%2Bq8Fmifnq4Fvxkyoi2jv6mM6n0PNAlAt2%2FxbGrzTflG0zP6ugsvFiD%2FB2Vazm%2BJEA9FtQm599kp0XVEx7m540YCcK34sHmgngTA4DgtC3zkvEPvE3NmoN86prKIi%2ByBTN6854SyRRq7oEcf2TbBEx9sJO820TVcmasLufYgAF8%2F3o6EmlTOMNUCfjUbVvLjHLItHvGclNU%2Fl7Ly%2BjvkXCv3gtkbMEHkpF8XtiuEKsbNHn5GlGq4lrUKn8iC3NbzZTvJoocLJ0ngc65cZLny9Hr2HqjWJOY%2F4PL3Rjea7OwT0NJC2TcW3H1VppXwOWs%2BK0AvvxCTbmvtgdix67%2BA3O9gaz9YF1QISh8FSiq79bqHcemWUNNIYhLQHJj46JzfZcd4yWr9gejBcxw7MpSMqrOamAfE58%2Bfwu0BFo6o2dRdc8so3l85%2Ff5y1CW%2F1xYJbgYXj%2Byu6LE690vnsKhSFnfdA8Pm01wtmLQkfkjINIR4evdNahfFOAaqP4kvt2t1FcKZMJ2VgsMGOqUB9Yo0KcE9IZnAkU1cIum7KDG0mG67JEyAwQltuNncZBxi0i626JPBvVK8ufTmQljFP6fWYIsawCmT4UPNGI2K22apW9AP5JYzuycd1gIs1bacr%2FJNS8m2GzKs8ZDoBVHJLTEqCCBuboTHKY9KjUXTnrhsnhIXUE69c%2Fn2ZD06A9Po6XFd8RTm13hAGqsfjX9VXdtMd9mPbncM6Q9mDSfMeZQpEUjS&X-Amz-Signature=bf1c344f0864164c080ec5368e7d2dc352829aed29e3100ca210cc33bd73b388&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
