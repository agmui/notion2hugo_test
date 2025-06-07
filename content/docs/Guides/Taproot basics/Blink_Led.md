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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYHQALII%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T033659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKYb7%2Fl4P%2BT4wqMx%2FNCBXl%2FyKS6XDT5jaIFqunEtpDHAiEA4440VJ8ep%2FHBEOZSZ69N%2BxReK7VgF0McG5NjoDkrIX0q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDGvO2O%2BITF7Rti2%2FxSrcA0D%2FmxK6atFttW2%2BcskbgQ6TjmQZ%2BzjDnzNSFx6NsbFL0XjNdI3ZtZ1gBU8WRq2hCrBIPm7HBMU39Tgwdrn7c7N3w%2BTfnVtVl6hYMisxuV5WdDoMzPJTgnUX91Mbw9vhm%2F2zADMBwNIXBR%2FAPFJbt5lty9eIN6fG6fDLHLF0wzPV8upTb88TLGDAkKk5gtUn%2FO1QrTfbJFJGc3hU0MdQa8DFjSJODZg9dAGVAuWEc7xs%2BFG8%2B63yENUGMY0XtZTzSbVwBZ0GvgNYyiaOCIvUot%2F3eBCNL9Rq6NFR2aUmmS%2B7J8E5Skq%2FZRF8le1CrkkXoGjY87qLsDKd7HJ7hoZawYy%2F2S9%2BdNQUzaqDJHCLRmanVBI1XxS6UxfMs8xm93mGamJOCLriIb0qHKqE9jH7PtP79corxtqC4b0Nsk%2BBgdQnaWK%2FHizL%2BT2MdUnfWbTETUCzAAJM3TKmmYMaRbCVL4fc0qXIgoxaDysQdsskOMB%2FG8P3lsw22u%2FDT1ZZpwb%2BXGMS8th5Gjel4R48xPM4HyLuvy6AfGKD0%2BadgZS7ydIhxcRnmOIOJXlJHL0RI4tF9nMglwR2g%2F%2FbhX8HjR4%2BymRwv%2B%2B%2Fcg7TJVeKp2e4%2Bc7IsUSu5Dx6mB2ZllCKMMLAjsIGOqUBkyXCiWtKFDW4iqqHEaSd%2FgdQBBIscme2HIczvXY79MbPkcQl6ZFuAY6CuuY9yvhfHyoSxCH%2FPSdDR1XAs9uaFllDD6MFWH8QyxivaXcCYqjhDl4QNC18djTNmbu3ZzUZf2IraYPOKNbld%2Ftlmzsx4rvhQ1FqYs12UjO7ag0WqEJx7K4ml83ObPLx%2B%2FTShwqD0Xzu6P9sLZ256oNEz%2FM8NZQBMl1j&X-Amz-Signature=7bac7932c3af335dde80d873cfd28e13ef491d1db89fbc7af869e3c9e5d23a78&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y2FMWUP%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T033659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAZlMgxWZdD5bIzrtjrxzWJJvfdSGjlp%2FnC6t7s8DsRAiBgOWul6shKfdJqAgztJjKk4B2JGHeFxBTQJ765AYHMJyr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMp2H5oPge%2FB2PHhzuKtwDrtVlkvNIwA3mCjFPb%2F3S9Ts6MShG51mUKTvQBYP2aci6SFM9dcLRSlw5%2FXezqCNVgEVJUgZPyhspVg3AQafjyNrgzbxDdBL6SzpJ2RP2hP60DwMTSGnT5NWlU%2BKqVrGPR1Og%2F%2FUXWEk8ISC5jq3H2gH8KjyYZJDzo7wAOS%2Bq8SnYCMDnQ36ZVkO3OVPjy%2FooKyUk%2Fhwt2D9BV%2B1EsJbyKnyhqxhW3MGSfF%2FoyXYDQGoCSvnaZfjo0u1NNmUCgGuVY5r0Y53CuQmKBe%2BsXP%2Fu48e45YGDyseGcJzfuO0RL%2FfmdNPxgr%2BUGBz8VG90HDGaJRETgJ8feuTGYyfl0nxr1FyEUWyYCtE%2FbeKnamzgYugSlF4bErALq9XcJSYa9vYqIXGTmorxCkCCUpkHTzgOQkVQWmbCiA5RYFD3qJW%2F%2FffhacuZFJLEE9vuFSa5bXZ4gbSlUeqE4EVOSeVMMKqVm8%2BcwUvgy%2BqNPxKg7%2FWmFLMtD3SgnSpcp3I9dTXVNXwrlf1wzVivTRps9mYfm87yvlv7FYtNLQKDnOgPHn9%2F7S1%2FCGvgi4X%2BqdrrynAvv8D4eO9RHqcGi11IC6ksfnePBkFQJLqs4q%2FDSRiK5gJ7xsYA7GlahM1cI6pxeogw1sCOwgY6pgFelN3%2Fu9kKilfOKvTsAsS86E4SKMLK6vlb7JdZZqgm9bLKbHYoxiGIX%2FDIe%2BrvYPKY83mkSv%2Bl%2Ftf2r2lWcITQBh4oF5sSypFb8FNL%2F81i90614LBrpsl%2FK6wzINva2nPgC7qhQe0Ozm5qVQZ9VdiNJTNrulLAQjh0BWIjKvi2IDB3%2BEEzSgVnXTptV7ki2W81AL8%2BIc0TWOcCi7VYnrxAT1lB4zwv&X-Amz-Signature=d2ee429f1c0cbfcd178f86feccf6624c45cf29e29930246ba69e65ab2e042ded&X-Amz-SignedHeaders=host&x-id=GetObject)

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
