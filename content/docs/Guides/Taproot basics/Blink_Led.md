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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USTF32FE%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClBGqcqngQBlTVWXeCjPpxMMCKDGuwSmt%2F1PDGqs511AiEA1%2BSndRCZtEAue3%2B%2FOZEIT2b%2BvNBMVsDXkKv2wAk30v0q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPbutFAJKWGgA6i4QircA%2FmJ%2BcUj0iChTSveZXd6%2F%2BoKXHJXr9ffzmvVo%2FVw7Qk6qC5GyFvOa0J1AEXT%2FoR1ohIO2p3sr8uIUJjhthauZd1PXhoUs3EtmJIDnnsXIChLmRPoLHo%2F5DgV18%2By0qi3gzqq3bydXPmPkST%2B57Cmi7KUOko6s3U7%2FOIX3ZzMRWk0uraukXfgj2%2FztF4J5%2F0WUjKJkG0M7QhXD83hSItDT8zPGq%2FvRxyJdHgNyWIHQkxYSNxgPE91%2Bs4MAoULFnRGWn%2BBQq3OMJNNVtHhOJyQeIktWWTT1zH7iYsB4IXKZWFJl97jTyDaONGVz2Ahul2thS43z9HCNWr0G21iZeZM9n53UwqO3RLxr8HyK2T22zhu87S5FqshacJztN%2B%2Bk%2FjYZ1hMhQ81QvE%2Bxjo6JTRKjtsrqXDIQqVsFHjGJEskAxBlmYWAn5qlQj75ModN8kc4rT9sJXpCdEr3EA9vGyhqjtjhDaVPLf5Yt50UaWld%2B8%2FfLqtUnkzGPy5pMHhQ7NpjlhY%2B%2BtX4t0KYTfLCSxqXrvoG9BMN8Zdx7oHmi1eY%2BD6v0jMzXr6i0JY6uNUz0bPTsND2brhUux1UZdUOy2HRm5Cmxhotw86ON2xyTZBMqAR6fwmkhWGZCzvCvP2QMOe8ocEGOqUBoivhCFwWg%2BstcDxXGBbz1OEakI0UtlZwfHm4PBpfLkJifhfsOqy3Ys3YOR%2FEIsXfRiGygSYWHxpv9CpBuSEy5zqaVwkwpQKBNvRWBWnBIfdtnybya3e656DJRMgt7VnasqzKAa%2BgOFgH2u5OHvuGZci5MJHe2lEKJCxbMSgnkNZg4eP2otbixHGvRrIWHVrR4Hd3SryGzQbPGSOOIlOV%2F7q%2BeDSb&X-Amz-Signature=9141e809eb26cb889220374c5eaa7d1274ecedfdb452086ce5df8e09d25f6497&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTLXYI7N%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQPb%2BnyFH1BiGchFeMMHGzuF2cxTnqSbQgXNsMwdACRwIgVBvbdRrPjgFqkPTMf1zSOA5gcDX7szp52h7qkGAhjPMq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDB1g312xsvCsHLtyBSrcAwTRfAArzVeXOxLvUno5vzw4yLdgcxrrnMO9AcBGHte3gWyliuildw2UwbBbz%2BMU%2Bz8zv9g9vBPjSeOBfj%2B8ROM77lgAa7BTE7kUPYavoNk%2FzxNgSZjtitX8LUFQ1FCpJU0B1wNYkM94fCDVYUXNFbR33mSraFe7lqGZFbmzJe%2BIe7xEyA1hmbmtCXfOMgJJ1wchFUl6vg09StS1sPxjW36RlyqUDycNxvlpaqNOTxlGgTa25Opb4zl33M2fXFIpqwzhKKUUXUzKDj%2FBKsyS9HKfOyIDEB8kVBMuL568k8fr4SVsBAZXx14bWlpczMzwVpQ5lEB8wQyvkzGiOIa8cE%2FP9xEu5hzk770ltUv7CNYRLBf4FzbTHra%2BhY41tAU9%2FIWpuqkT%2FD7BMqMdaYsFFlyE%2F3fLJguB%2Br2WFukGk%2FoHL1bkg8Sdrfmx7VYWSrTYeUDfU9n3gPQYdiYmWCftir8CL6IfixkLBi09SkSrFCD9nqszWwWtlkCgYsDW1hGqt49R3uk6wF%2Ftoy1AW27ENC351TuvAFhUIR3foBOb8OqvdcPlrHlzZA4IXPnV%2Fu5ve4eBsBIkNXeBFQO%2BeLRM5GsOY84dVvUUsFwE%2FD0DtKL3NwO6RTKT2TbfP%2B3GMNW8ocEGOqUBm%2BvH0JliyY0y1JaDW9EgfBjTh3zJt8sge0QCImAtFB8gLwuxLKLSlCWvYfUvDjCilV9oUY285Fijam3YMlqfycN0HmQnB2XCjrQvqdmoLUVZtrPyAL5qRk4nxr9jFoIVshbmNzNja%2FQlTyZCv4lmcXJ5PDYAKrOlD%2B2SdaGGOIxqmIZYFtldtPJ%2FF3UZFaH3wNMrzjvFrfYnekIfJwUXBrrzDCIn&X-Amz-Signature=17d119bd2294b9a598ba7731e82a2f247a48b8b7579eaa8fb782460b1c99a8b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
