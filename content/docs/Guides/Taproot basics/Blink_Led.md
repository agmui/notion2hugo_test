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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6DCRTHU%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHWfh%2FnyWbHqUCGOjig3z0wcVntnZselZgvRhuigg1crAiAhG0CVtzdixU9d1QYN6aP5yT2YtwXeDx86dhxd7WV20CqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJBXlPffX1Wjd7MF%2FKtwDgxQaaf7q9g25UJaGus0NfU1F5JfGTfAHRx8Fq8uWcRBvYqoILHiXTE8CFwxAy5Sp876Hrk7ec4GS2L53B%2BdPzGsXDdEBn2KjRWCxCLEYtdOU9r2eJ5iFupP7m5G7i0aIHooeCf3Xu3CZx9NSXX%2FCAqNmr3TnwYPTh1OI%2B7Lat%2FI4X23hiFi%2FGfzANHKf%2Bmtsi00VKLIL%2FFmpQCnxwW2lSDfyD%2BfbZqAnljxWao1XcYfJIQ8Lp8O4yYHAxMvcC0t%2Br6cBq8KYfmFJY9gzo1SK4Sf4HnV%2BhQmbmtQSay%2FWSfD5hXhERpKwxkn4T1DGmbkgHlsTRrQJBPHAq0bl%2B0xifSGAN4TBl6ycpYqp4RncmgRc2dIorAsesWvBg3RlRCF5Hw6rmB1JA9%2BcfoUk5O8%2FxVglKVUwyDoNAg%2BUk5O06fqxemvFd9BypzhPCe0AwemueRstd7WckxMdqSZxC%2BFjpEKVHJVdeRlTaNqCZKgCy8o0xEBuljprLBE7rFZMUqWFLnYvN4wiV34d5zbWLdI52hRUvfXQjaK%2Fjn1NXByt4PDTO1mCCgzEOEVVSrzIH%2B%2Fo54rI0LVGLPx3PKGKdwXwRKwR9%2FxmWgEYPoimPt8VaSw%2B320EFP2VbYKuDPAwxrXywwY6pgGZQzSK6Vzzu%2F6wryR9tqFrJaOzuhi3FgA9TvX3ZLzvfT4ZhbkO8WTC8d%2BjqY97VE2ymfHV68FD9eQrFZmgU8q0DmvfqnUUZVpnuSGdrWdypgps3A0Iokdv1DoXX6qN9ifguan2zmOAZJuSDQGeGwzZ%2F9zpMh%2FFee5qW4ABo%2B62DhTgDGN5oLOmeiVF4nqL0UskF8VtdeTW9ZF5aT3QWrbHzM8z7DPQ&X-Amz-Signature=a77484ba6db438617ebf891544432b4ea8b7ac2f83ae569d366c3b1d7c55c8b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LZWJT4P%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZw%2F9eZ9cC9mhmRMqnTAiV4BbdAf33OL%2FJTQ388C%2FiFAiEAp0%2FXNioMk2fWjhz9ojRKlgeFjDrALD%2FKJMm9JgkKyPMqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOn4ICbzF9CRbdNMDCrcA%2B0gPWqwyn52YlYap4iHiHWLplQF91tQadf2HwX0IKZljUsWYSHoiliOswKtmxvCcLwv7QgXxVHlQTplL22OToHSi5s%2FWS8wY4igBlJ5ERzpHWRy4qB8%2BbaCireUt%2BVFxPr9rdNxVx%2F%2FfxL99p0xrL%2BctfKCfUx0n0MDILInmKiTj47FWS3jQyk6UtcRcb0ztnFamGDAcjc5H2sl80qzAS%2BBmnEFu06FEziosGnkobtxw4swknYsyzIwSg8p1G6OYmgoeIi3OlTRcoF0yfUSTXKFWGX1c7Pc6RbR53AuC76I42pHVr%2FHr23K5jm2xSqDUBoB11VWSUoZkMwuTZCRTbvuhSPFaVswPG6j96qL4SeceS1jlXP37L7VOAgaRoVneQlsK4YEME6Co18hDi%2BirQFftbE5UaCR4B7i8gZSoyxEV%2BopaGkc3v8RYDmNhuKIbH8t0RySB8SkGmDhcdVdhJ9oxgVtaQdXyGN44UdytWB469sqDj6Oqcjt1pbapyHTW%2FJHoPUqEDx%2BVgVxwVv2mpqajWzFvORsih%2Fy2trW3pLfFmhtLanh1A3uIfS%2FxD%2BgSRjuECAtaCWtV%2Bx6tiEwhJX4wnEGgzf1cPtDc8tYwPv%2FdgLcq05vqTdXLc4xMMWv8sMGOqUBhVytlPch%2FFQoiKgHb9CLQ1KZrLcICQrfKvtsdlvH658DPxZ%2BozzSYdZqp97uAx9dp0Cpi5wCTdmA%2BnLuksvCJA5mm%2BHa3zdaC4O2HIvmgivjWDtBWNqTs8tNhzZwYD0bGBHUXyAQdRUDtOvIBLkG9%2F4GeFDSUdcsTVlgFPydz4DAKshvGAqlwB7XPFjV5uk%2BZOTPsjtC%2FDS8X59aqHE2cVj0kP%2FY&X-Amz-Signature=13a2d340c7855f6db3035eb54c8cca8c503a77dbd452d67beab88db406790a5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
