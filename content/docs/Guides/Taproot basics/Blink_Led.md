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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GXRHLBK%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T230111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQYhZaGedw7UagMUKiCrPpWk%2FDRHtCES47wS278O0TtAiEAidbFVoFPiHKx6kICyHkmjKgKjoym%2FjGUs7H3bxhJQvUqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMQOnk3y67BZtQthSrcA053F9tB0ifBLtIetj6aWvcoSly0kY%2FSOHGjyaAdhNmqEwHwH49ht9Db9jomsW0ZBXNg10OjBvdJzd6sbOoMMtNq1FcN3CmJDRaJ%2FlL4t4NwBEEEyIWyrQRW3v6EhxErFjcNZPS0KJHO1J5zFyo%2FPk2Z2Tyf1XhFSqCk0s8z2hLA1Eb9YE0gzQ1LFVuJ6DLsW2a9kkcAyPWySPXOC9Zc7JoMTirP%2BLcYWGz1KB4unFSxZOjlkM3NNLF%2B62YR%2FqL2y2ZpIi%2FCTksBLDZebjWtSYb8bWSZkdM612SqNbMxLEKVuxERtMmoL%2FuZMUgrReT2Ma%2B%2BeV6cJI5QuXyQVd0M9pNNdLIu%2BR2zWgWnmlganTtODvo1CJLV8sJ0cTswmRw4vqAUknd8gVplEKDPMrbFCUAAp217XRc87DKmeC%2B8GoHDwIXG0wfuYqyTns3tgEM7DQjJkChGqS6O%2BA3y6VcR0KdyTwCd8Gm2j%2FYTTgXtdpS%2BBrZqyCNi3WfncXpMtm8hsBKRWJItY2nd8Qz%2FILA%2FQbhf3TvnmzG5Q%2FaKgtH%2BeQpzLBb9f5S9WY7TuSZD1xBaLt9YR3LlCTS6v9d4SbpfSAN2LXXFixCBpb%2BQT3P2V%2BviGO1LdGRoOgXorr4%2FMOz977wGOqUBqnVqCxt6HgnfpbZo2ZRN6rv13CIual9oamFiTGu38bO4rq1xOCRZmj8%2BRxdvzw1Rac%2B6JUWe2keAGfo9PmhvdNMShzvkQvXebqLxivjhjXJDJlOVB%2Fx96WvG%2BWNYVIDt7xinQY8Rao9QxaB1%2BdRzkK%2FUOrEAC2lRHxP4u9fO4GPKZAYc2IIFC%2FYjGfAsOKnO29mhouJEDmngwxC20m7giFuqjgYk&X-Amz-Signature=73c5004222b0e8daeebedfcf76d2fa657019e7c6fba29705275e901a234068dc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM5W3JMW%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T230111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA7NcPtXYChzfIm7a2NcjtclkpEURu4iQdXAmWHWsHBgIhALCEx0IsmUDj62WHCa%2Fe9tW0s45pscjBffBJVpuHGAqjKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7EBuDT%2BE7XhNB7%2BUq3AOYnnj5%2FdGjktS%2BWtsQ7n%2F%2BWs2ir9u%2ByiHxYv8ZpkYxs%2FB8GFVGpYcmn%2BTbHYHajZV2aDqXCNHbkacsnTAydKTd26EZY%2FvD81LMfxhggG%2FnjGNBKXZqTRq8aFc%2BajnUp%2B%2BcZ8A0C3visnlbtj4THqTtH1xtbKS9xCQBTMYjQ31prid3UpEC%2B2zuffZzICtgcV3BIWzsmWc8KrckG5FExtD0zPaX0B2e4gNdOE5fTGlSu8L5SovK77LafzpfxyefbswnrpThyc144ewDdY7KIeOLe5Pp3Yfz0bQRxAobCZ0jvT4sRYL%2B0Ewf8i%2F5SIKF4lpAuT1g4h03gbuHIAZo%2BLGJK7HVFdEH%2BgR5tvFeOYFtbZKsfJDeciekW0uOtmhNMyDKaH2qt57QS4apccOrwfHKq8UPa%2Fu0cQ01TPDrmBCjeaPgJ0p57ioaRtd%2Fg%2By%2B78k67DvAuTh3EKmU%2FYLXtPXQac3cfD5jrx%2BQrdBsiLRlWiCVemmG8js7Ud60ZE13MqaCEsUfu1zC8WsEBs81q6kkIs284ofooTE4%2BltyLlh333CWvbiv3hGGd8WbvCV5zEwLncLLYNJUgPfWYrIEUNn%2F2VCNxx08KZG9SJ8qkYrcRRh3Q9ysSx9cuC0ubzD%2B%2Fu%2B8BjqkAaE%2BI09otnvR9RWmKTDoPX1VU5PCcs%2Fc4VDKci3nW6YoE4ONYEIOBEZnlMmS4AZat7wMKW0fymLNzmIMtDjo7a3CK8yPXVU47QlPH6J3%2F7n9wmrk%2B1q2h8zWLrvkdCSQe%2BgOfUT7Hwb0gBflvup7jKE47dBgFyJ90DVt7FI%2Byv30tT3O1gHXz5F3Q08ZV7iHnSW44LcJZJUooe%2F85qynGMGM2NG3&X-Amz-Signature=eac9ec8ef19dc3da72c56e4ae7c58f13b01601ba5725d4d12f2b78ee535ac4a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
