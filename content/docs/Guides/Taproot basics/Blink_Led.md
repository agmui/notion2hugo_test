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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZUWGJUM%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDx4PS1HWNFdYKU5PNde3zR1Tw5pr10IZHjiiUiRMPnTAIgOdfxbRbU2j8yM5goPk5f77P1NYPrkJl51%2FBU5V5a2D4q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDIhownf73Ba%2FGsU5mCrcA%2B4%2BIU7w6rOA%2FgntTuyVomroWwKXNWnu%2FtBf4E9p5Xv5a7foqLVm6xvPV8XMMKbYv8d1Lt7ZSqjSf0e7XeiHEesJIzgNHjtUL7pM58VNfPrqGiTM0BFAPi4v%2Fa6KjCIYQHQx221ibyA3qmLPJ3nm9ADnCxpT63Im2NRuX4HtNsGRqSCPgq3HupUFYr6ua4APbwTjQ6Ne7lPtnOJgTcknekK9P9c9TjKsORkqg48LpD6jFdZSKLt4%2F%2FztliU8PUuS3hk%2BeiMcHVCjBSjejisQt74mlR3FKf7WslSBsidhDomqui%2BEGsLURRLz3fBu78Vm23R8LKEnFPKA4xlXiF3EnLEOaoQGTwPmX8P5juTJ8rxn9uaijB2iNAmU1YLdP85wL8YcHv30J%2Fa78HdZTnZ3YkH8751mpMJPA%2B%2FEhmpwjWSyWep7QsrTyhbMraWxHeEwwmxZyriseUk0OPCWfUvKJ%2FVoq0hmBT8cC%2F2yBg5HjowSRXDvpj59UpLAYey9XNphgvZjCgR%2BWD2pYqJF19%2BsxPaD0sWB10Dy6p%2F%2F24AEditub6vURaimRwYjZ%2FFJUxaBrbyH7x4Z6XagCbSxcstcIk44qLK3BA7bkdKjfFHsUAGee9VYnDjEE8123TEKMJakk8EGOqUBGd2%2BePZVmJVy%2FfZmnbtgeNiSsaQfkvKvA0w7Rr7XcP1U%2BM1FUsqhqW7%2BBeYueVRFJLgM7fmJYI65QjzJ4LCLrT1CUBfu0fif%2FFA1E0ebZu981wa80fK0GNSptisUvhLCpVwTZmvwx2iTcqaiBi0M8uQBV0C21mg5M1KkDxWT5xGpg7spp5yr1WpV7ZNKS1scUNpAQTqS2EF8a%2Bqz1gymgzARKwDK&X-Amz-Signature=5e22b5ccfb49d42b6f5fab1c5d433f99373da43c5d66d4e793dfb643bf8f7b72&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKODUGBN%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIFXxug9EvMVppKQ1eqgY%2B1K4hLQoC6a1biCRE3TTiGjPAiB4VxBHQ7YFvchdvmbbcH7O746nchKyYXyjweGcqoHcNir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM1JzNc9IwPpGiUEpZKtwDXtNfN3aSePcVbn9JVkKZx0wU3lArFXPyQmRHWkxKw12KIP4KgO79z6lBuG7v25AnjVtUexlan1tOh2rcd5LJmS1c4v3li2TZ4uZahAYvHY%2BWNUREJS1H5tMQSraYcHp9l676pnlIh%2B%2BC%2BI4pNB2fCzc949f8pF%2Fi4qB0FDyZf84QXbzULyxnlxIYYi%2B1C%2BEiiYY2OvUsBfTgynVU7d9NIGpfM5T9bd0n5XUWzOxptNOXcZX6zdDHwpwMlmuq1l9iAwZco1DLUmicGFDdEmloNr5Lq2DARk0EzTMIkjgIsU7745VQ%2FKrIxsTSDMDlnwa7cqX7gxUCks97Z2uxW9OvHapx5eE%2BrBz4in2Sv%2BEAogSDhjUjEye0l3h7jApQ7sCdGId45n8w0LvK3Na%2BiHxpJvhVNBbAUaZNdFAXQYBy7iAADRIqDTR9DNeUFg8WL5hNl9%2B4XDm%2Fxxka%2B19MOkl3A28TWtrFMrHHb9ftgE92StwZENBb7UN42xtaP2CHFHkbyWpPJ%2BrtCN6LcVqjAWdVc2B4gU969KTDM3Az%2Fa37KF3FolAJgLkXD1TQ4hLNn4vPawUY0lyhSxqrtHPKQ7G6rmSTR2U3sIK2aSjbBtz8Bc2mtTEsz%2FUTInjcUdsw8aOTwQY6pgHBm33Bl8nxtJOYfkQaVJzO8SSkv4DfeQbRyVxjWrsP20UF4raHSNCcCAQPmpG%2BtPpYQnplYJGyPaMNRLDrcxtNjhb1ccEh5KabtC99pKL9%2FklCVChYfxnwt4j7WSUNtdrA51L2kr4yn4z%2Bop5%2Fi2XPHmq1yPo3Pj%2F9uhSUJNS1tEDFCalELeT8GcVXRtiD1ABTeL379Oah8cnZAf9Ecb8MIqURIRGH&X-Amz-Signature=64fa02e5c0f597752bdec4dc06cd3b278b2593d40b607602c2b181bd5f3249d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
