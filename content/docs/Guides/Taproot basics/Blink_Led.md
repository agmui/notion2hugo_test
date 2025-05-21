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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMOS5HLN%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIHwQfQIVkIZN%2FBpstKVhasBQ1KGEcEGzDNPRzsPexm3uAiEAlksekxEFJy8iQL0GbXiZoVYqWmrMtDX0WHSozGBlvXIqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA21tw3WFURQB96payrcA%2F%2FViR%2FyT0yAIagrybfDpuBvLVL9XoltmN39jNH%2FzllSWrI36Mw4JjZBIOrXsPXZ3cSf5XL5%2Bx27j0b8NyvgokTl9B4ZmB3sBS6U4p%2B7aNy0zIfMFE4NgCGIFpiyzVpkqAQM477oN7KYA5h4yH35J%2BECega1jmA2%2FsOgx65d4yRW%2Fe%2BCWOGAUx9IdLHEPMHHGGUAXHdRBDBYxU8uytqz4vJranAyQq4TAMduE97Q1j8g8OrdyrXl6UYLEqj6Ga%2B3yWFvBuHwHUMF9ZAtbiJUdbgvaQF8Rbnh380KP7jOWYe2hrPGwpFkaILjwnWO0wwPvmbmZb0f%2B%2BH9BrZlR72xqdvFxWUkuK%2FrGQyZhPHHlSPp0jRPwkUmtsPShQHdXs98rXXEolyGealRLO1M30coXplEsihDPPR8%2F%2BzB9%2FYEckdwec0ZOj2y%2F5kWZYVYhu3QoozVC74ufnT4ONy4Ro84qXZ0YX5JfcJ1Sn%2BZxQYIq5gvsxh4uoohXX6wGeEZd%2FVNj%2BZKPdXEG8PHAcCDkwNuAOmu5ojZ6vaDdQyLxkTGlqUb0M4DFu%2FLk49bdR%2BEVQTBccYyh4xidbRrmyKSQ1GDVV8jomKQB8banajkZbxWsd9De3hXwbaq55ly9WBKMJXutsEGOqUBMxwyLxZQBDeTh0gtu3zpuket5sJC8%2Fvtn2aIo2qfG8oP15N%2F9p%2Bx3ygG5S38O3DQgcPDghEKEkZIy9pPZhu5MeGL1W0WwDqHSfeSoaTjGrMOQlsMe%2BISBlf4%2BcXRvA%2BQa%2FFdD%2BRNhudiNF3ZXHAg%2Bn%2FaPy8S37lZvwxXZ67RdPRAIpB%2FxPDBasKab2INpydQ8wmWzhSwwwM9bUTHyjHFW4pKG%2FoQ&X-Amz-Signature=e0ecbdcbfe1295fe52398182caa9633f28674da4ffa0bb4a3c0cb8d5597ba854&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VITRXNB%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T140901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIA%2B%2F98nyQnnWMvILJ6ws6uYn3k7WEfwMRLdmpEXnzC0qAiAqdj209J00icrTsn7RKksjN8nPtJ8WSthBeicISJNGTSqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8Lr5aBn5oI23avjUKtwDFA2QZ9l9wgLrrHOvsBVekqPS3Z8V45%2BGQy74z%2F1Kp7IyRrCDba4UXFlxBE6BGJJc11IGzG1WM7ysx%2BmDEe%2B3%2BMI1iUH%2BYPXRnGqL%2Bf4M0ffprwcV1PQSXHgweOuUN6tz6Qf%2BN0zAuNUXR2BcuITdIbGtwV5LTz%2FttyudUb%2FBVpxzw%2BBSdZLalmtz6YGa5zgcqfxHTleArYjDGSerkq5KsYSYfaV0pzZcJNB%2FjzRQN7fEyZVlrmP5Gf5YRWILLtWcPMg13hDKvEWmPGHngtjETLETaWJZiW%2Br9vMtDg%2B%2FqBGgjZll6QNpAz57tG5flhiEekxVUiMPXH%2FgrvUB6t7%2F%2BALdUjHm2b%2BS07IzF3iNeP5GTpAQziSjpkGBhz3XNVHJzhARlXboLIIbhyQq%2Fz8dvifp53yJIt12GaZ4zjDDnz9MLWo%2B3V7OB89GqVZIYkPFPUnhio1stOPaPme5M4F7eXw9lAygZXODnkSyqbTxBvtudJsxGbo8vBXm6c81UVwm1vBOOGphLrTWKSfQrvoXFjoQGbLDKySEp2VuoP2B4w9J%2BE%2BfhPVcUo7Auhq2%2F8W8wpf3052MoRDEkKU59jwzqlpzDky5RHmSEhxFHpT%2BU57KF%2FB%2FTp0fx%2F3zsCowpu62wQY6pgFECi%2BeNlFqqB2AiwTJht4zyMsaGNcC9SFkgARyu0oDvjVjTgGhXIPLadaeJxiXkNpkDJwf0AZEH%2BYJgFwm7kUeQKfWKU1kK02o5AQZR38uzlLAyv8haoDvUY8o423nsdWfoJxpPCYjTgU5yC8KYjRUI30Il2o7JCaH%2BKfxHqnq1azjQA73Tz7%2BgWID2N2fmnF7LDwwUBiM%2B4blUVF8tLqVtKENt9%2Bu&X-Amz-Signature=b6945c86ed5105639a109c0db41b14ea62f3ea361daff680b029c5d848b65447&X-Amz-SignedHeaders=host&x-id=GetObject)

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
