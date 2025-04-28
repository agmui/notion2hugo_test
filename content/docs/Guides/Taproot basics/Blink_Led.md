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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OBB3GKB%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T200901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBja0GJYHo16Oe2xc92K2YaGkB%2BXqmIuD3RKVgJ4wA52AiBPgysVIv0IOy5O%2FArluDY2jnk94Tmw05LPmWfhgUl5VCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM5K7XiyBsaTdau7dmKtwDrSHCdgqE%2BKClSO%2Bl%2BlnY2wVcRB%2FVZD3VDfTOQwJ5uDnfA0sAtnazn%2FUWlfkalWx8CcQcwEzTOOB19uy8yofCTU1s5eBhxd%2BVg%2F1Hnlq85N9AWqEJOZka8yvcJdERzJqRQgrHLdHJra86upgjIUhjNIFgD87czhNagVXMsdkFru0qKCTCUyIU3u9vAVkFGpVulbNgnGo3lm1WcjpE1ZUQqBvrTR6X4Z5YyQm4YWsuUxU8VsxyU2ap1Smqxsxl5HaBolI675NiKQxl6UdTp6ds2uj6rr9ffqI6%2FC7l3eW%2BCOjUMWtu2LWYfU%2B61XmcRmsdspieURb8svT4r%2Fi%2FA%2BPluyw0pG55H0EzkU74nQu4HZxiPPZHehTYu6NWcld96yOMV25XP71FhRgsc6OKPcb8MO1T9EjUKAUvz4rU6X6uRvpXfTG52G3lRN3ifSOdwexEB0GsGeTk2ZkDkUnIyty7iUv%2FeBBUp1L9LE3TStwdQjqwFQzUeEF23C73SdxCwoLbaNG1BAI9p%2B2h8i8TErMFLmbfGob7apzRK5F1LHSLkf80valEAmBqE9pz9RmHaw9jf45NivokazZCxDkYiu5N61WPlBKSwBrZwSEFmf%2B0E8%2BdVypQrdYxdQpB31gw8be%2FwAY6pgG%2F6F%2B6d62MhWzQtoQaQW3W9wGJR6SSYV1sErnvQ8rgrmtadICagFRDz1VkkxIbl%2FMSS2nxzJdmjXs7J5h%2F%2F7h59sreysWFJDhJUOIftXb1wl%2FeS3GPsCaz4BLnOQ2vIuJnNiZZegBxrOBStB7uQYNDSzW7cjgLN4ELL4vrxp21r3jkVuW4YYYmMnD3fMRBcKJz2rXHTPQRP5RIghBoB2GRlO8H3%2FYS&X-Amz-Signature=4c22bda5907e8c8cb849115e9343dbbd2917fd69148bfc9575a507c2b3c83867&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBJNTFKZ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T200903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmU%2BelXyRVdaLK3XV4rXYIS%2FIwa44HXBawr%2FOWGFLLAAiEA0SMr6l6OdVbSwqme6zzFO2%2F34QnybWszvkkow2wpb5Mq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDI7mh4uFaTTha3YWWSrcA7mtYtpg5wuH6M6bnaeXQCjjIPS41CqlEPDOQi1PP5stIDw9Xjw9Ru7wyNOEDUmnqpmJer9%2BVm%2BSLxrUgbxc5zzHENgvZM%2Bkj0FpIqHT42KlzdX%2Fg0XFOWkSDgShhb3NTfq2HpdghPxVcbvIxUINjeG93NLAc6FW3ZtiWsAMO%2Buy%2BZ20123SvSeBtMOzHDsnZcTQdN4naMvoO0N%2Fn482Ef1ErE6g4y7TepF%2BRSvLvySvMH7x4V7NuhUMVy2I%2FdG3gNFe1aEyjPRoIMOL10cxdOpDnQB9ap9g8g3ENgIEUFg2Gh8JkzKg3LoabC8oOJqk3Gkv8BXt6NzyaGaqOMn4lBhuLroBp4G8skbOb7AmyLVDQOnc5CvcHbZQGYvIPz3jjnw2R2pH%2BlZZLjOrqNOn%2BJF%2FQUKGi2PH3XaWTSnL3azNuHHaQkm9qluhSQp402DE2ebwamWnH9K8CoLL29S1C7SEh71JrJgFPW6%2Fs2njSE8B9QA%2FGGMR8AEuFeZ5c8toq3dhOqBQaXCIbCfrhNOm5zsshv2kBDOv5ZrlR1PdnMi1dypFhJgI82IDkMB7HfGnoewDmDNMvOLOmd7DSLvab3IdmE5247QKvajCl%2BSrKWWDWeBbvcHblUKjbwYgMMy3v8AGOqUBuSLDH%2Fcg5CL31JqSr4PWHS0ILSKdlI4eDaABaDFNz8Fd98vUNqmEggPPeryYLlHxnLbE8w2gJfagMauA%2FgbKG7FFFkbmsVC2WWmdo%2FWMsrDsC5PLJ1AhsZ7HpMoV5UY50KMRmyMAFtkMtv0QyVpvCEYdgJqFn0x2AO7%2B7gXQUEXwPpD7dvEnAec2lliX5GhuY9JKHDAGr4rXO%2F8xhZuyKruaP9eN&X-Amz-Signature=f48c319f20f49dff17588e9e31bdecf84775f17a94064df9a205f16b66904d16&X-Amz-SignedHeaders=host&x-id=GetObject)

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
