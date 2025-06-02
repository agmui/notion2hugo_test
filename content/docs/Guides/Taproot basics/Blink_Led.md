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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJQMXURY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQC3gikHZZxyVsBy%2FJqFx6TqWKv0LWySeA50qexPxWBVlgIhALnr1QtD8IyOi8CN0b%2B4QhBMUCmE8eJXcrouwyJtOUcqKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLjcZgi%2FGTW%2B8PFpgq3AO7GnICJqX6hplKRodqCdnSQ%2FDTGmnkvJdSOM2fs7oTJD2BEOHLdqPFPXVlkEeLKvIvl1hAP0Z1rO6xukKlc1r%2BQDpb0W%2FMg2jd0MfNvhDVE%2BlJEAJPQDdaB7UZacWhAZZCXOd%2FkwNQgUoIOlBM0K0pT2QzXumDoyqqcaKovMDjcfezdS0FFwFoX%2BDoruIMGfum%2BOnIi75wuKePcBrLKalXp4b5gKKUZPmY5LOtFGR0r%2FgOLzIzK%2BH3fLhwYMVa0pGKJIpTQuA1FaXVDP2IK%2BjOUdN9OcGhSPkCavRWpTkzVtzz087NfdylWT8obgW1BMs%2F%2Fs1Vqgcg5FKO%2BwaQlmZH6pcDkeKIqIY87P9N12tqdsNmu3jDMIgYFKexOIOtjYwurku0YTc8N%2BTBK40K784UY5cHajehxA6MQnel5nDjdD7EOHjFSacc2OMqXMZUVWdOTaL%2B4%2BWKbLC%2FvlhbGkP7Q%2FSpuGH3mYC%2FfqIVJxJLh5T5rLFcPIX5PGTLUaRCpcXAg8OlywQT5KWD4muo1ZxYlI6uLokR71O%2F44iP4viCEHkyapo0YEYurD19rALcGPi%2FzJAfhAdckzVz3%2FPG019IkeHWiAJ%2B4vYriS0CkjfzuUXgXs5XAh7LDZbUYDD8kPXBBjqkAa0Lgf3cdt452F96VR%2Fo1xwClAdNDbg7Kt4B3m%2BOR4xHjdoHIch15LB0q0Wn3oS1PARr50kGhd7f%2FdqvXywW6oUyKtER3vQ6C6CnesOPfxYeCJ9NsTmmoJVRgZ4JOE4khGiaoOFjGo9SgyazFP1drwDcacq50KkjuqCJ%2Fx0gsbZLVUhkeYlN7Xi1hv3kExVHdsW52MApT08bhAVtdKHuHgNwRyOR&X-Amz-Signature=3e12e792fefeb4fbfa2ad3b7e5260f3559611b58ccdfdf6da6dd662f2f486a50&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYVM3NAC%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDhQVmAVmd2isJJeGEZL2YWq%2FzhLjGZWZwvE04gRRRQvwIhAOLSxel9M5WeQjvJXRC1Ini7%2B91ncs3IruB6rKktI5v%2BKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLLOzsj6j%2FcuPUtUkq3ANF0plyN6cy5Hp%2B2TStj%2FiDWijz%2BhS94xSh3KWauNtQK4uTyzSxMXkSJtnhhdT%2BIPxNNSmgbw9XKESqQJGGUxmJRqYRWgyhDv9xjCX4BCPmz%2BhpEkuLXl2KebU0uM3YE5ZmMfgV2ymK%2FCkKcDPIt5tdkxSTA2zmMe%2Fw6WwNyAKlfTQSS26jnSqscj7Re32vxHjMtc9ECLkX04F6eGxJiNKvd1pfE1gO2ql2SOSqAeI4wYuLFMNuYPprJqrjrRS%2FPmbDva49l0%2BF5wuDRPapsqO%2FVkaCNNhQfsw76uV6JaA2wYBIBmutyiYJRA58%2BeQKatREotFfXu5X39MMsZfxfC66n5cZb6QwGwl35RQPEtXmRGHa0cgTF%2FZhjiADyq69XpYMJS9hXlkzrw22aJ53Os%2BFIIoLBuaPHVZF7zwngw2JmGzS12SyrvofraKIapzxitGEbhZYbpJ10dGLLH1qelxHjqZA67KfwUrh3XDcQjxPuSAkXjpV5Y4IpCMudIf8TJDZQbECTnVhmnAd2reVRGHxIOAjZFF6UKWvfDreZQHogjOQDcv1hCB%2FzKLghwOqNzNrklC3N4cG0qVRzcsPCtgea%2Bt0ax0vABXtEMHfBXkRbeZP9sRIzmTm5MZerzDZkPXBBjqkAUX2jziNslP9yD%2BH4IDkwE20gdXZnbmbywPOq3yRuhqZZ%2FfbKPDE0aLxRwqSMExGaFS0VO0M0C%2FLQNDnqoFwLdcJSBrJHZsampmomnubyHicvk%2Ba5VCj%2BdJg46CPjVY8AfekhpbwVGXq%2F3t75nbx90DjgJZuHdb3SnMdW%2FLvEZ6Ev56tOJVOHtGM%2BEIM1936F7gkV9MRqI5%2BfoKvW88J1ZPvRthE&X-Amz-Signature=244707f1af2b4cfbcb093b8dbad659f6b3b8b757c1d942f5bcf35764ddf4126d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
