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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSKM76PJ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T170333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIHfcV0AIOYraOhCh4rGosSswZ8A%2BE9Ln%2FtxaAoh9TDQ0AiEAqp7egjXX3fvXFk18EPeBdGa32MuAJaca9QnQJVKTmcAqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6%2B2okVDnWPzbftUSrcAyq2r2q1sOmhxh%2FrxkIBeRUfdz8V7H1lToAT7CiVUF0Ydah06adG1JhO5pOHqK%2BLW4BtypfXGZc3mcTiMmIWmwCADBH3PTPHlGngZME7thG6Y4OFYDkYag4C0Zulr58R14%2FVLdMByqRf%2B9TCE7RgtI1PgYyP2yDoeLaq33IYzLnHa7SzanPJfDNfH3QdhLgHDZWkHgDSVMnxybheoWKk1e%2BkoTR1OcSNvppUoY3MwmzafyGFZTXrVlBSYASitjT270EdpZqNfzIhBRl1rUvhfFT6OHU5ThQvtO%2BqWkQpeR2cw3oztxhmaiCJfzRqMM%2FGr0wo%2B5PnYc6o3dnr8s1XamxQw9cMjYi4xVfCr3RaRpWlzdY%2BZrc5BQ8%2FylJPeM5Pscy5rylkTKZKXRp48ahkNxPVoV%2FNtBmjevl9Oy284P01vRF0mrJtep9FLEhJGq52OakoRbCSY7VB4MKmNtR%2Fjbyn3AxaQFjcR%2BSCn27hk%2FfkBS0bNj8JC7l6iRafog8ISUhrHFseoSHnqbMZ5p69BOxh%2Fo16JNyv1Z%2FPu%2BjOCRmp7qIojHrXEeMwOWhHdqp5uPnFYSSVMNjTLFfdynMWATMwYgRyvZnqdRSrdVgqx6pGXqVPDB8W11mfnbw8MOSp778GOqUBTpjLRvieKSXRhFKkwQ1Hz4yvWSnnVB1KUnJOJqhxY7GWmhMeHY5YGjoNePLE6ZsGxmqe5MdFtldsA0MPaULKplWl0ZsSM%2BEktNaraOoky2mgNAOn6%2BPLIJ4V8j7v4JE2QoKqTYqTPrHSI0TyTChnorj%2FuZ4TVD6ABsn0%2FL7kWZxFDJAtBAL%2BzuovVyrZ757juHG6HYh2GMJ2X8NLQwqU2ytCZx%2FW&X-Amz-Signature=27b1a75026bf739a8db945a60d3d04ad63dad2e332fe36d8ce8058db6b85c223&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMA267EL%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T170337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIDTNuZijcS1pqzTuRJYMA%2B8%2BTExueyhcT8lf1I4X%2B2EOAiA3J0A7Aa1SOdUzuOF7bh58SBzfkorEWaeiYFrB7Yg3%2ByqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBJRjrtoDh3ueOA1jKtwD0NP0KDvg40W9RDv4y0csWlNpX6iTL5QZEXg8k%2FrXsSuluppvkwQeCW9TZgouq%2FMFM3esYYmbN1iGlMeKCwHmJy55YdzodR%2FK5rzQPquwXDLdPAlyI7%2FzjPg2%2BDjmN%2F3vJoq%2BM5NtcKHteU4NG7B73XK%2FyKMadlNArEs4gyk7FGVwvkRbz6GAWpMxgaALotgU2IjrdreBEqKIJXp2wOMH5WNYd4v5vPLitURQpgmVucHh01gWhwB4T%2B41Xg3pq%2F%2FoXi0ZNdquwLCK8rtvn4QbRZ52GFxBU3cidAEvlmRmIqy2b7Kwn0VDrb2lot%2BH38q0pbvu4xIHZV%2B0cB9n6BncEbY0ATCqcADD7N3v6aGxBqHkwL%2Fsg%2B7nfEEeSssvPt3c0d%2BPhhGX%2BIebdYqn1URGMfh3e8oD9H5GMFsulhbcNJSyZt4OmWJBeIGu1iBVcxWZNgX99mLL%2BKCySyHUqvGK6uz5gYiK5V5BIXjkf5krkggroUy9m%2BhkrrrnwNlH1BKrhA%2FdKz9nCV8xZ4XTSCWhin8fNmMpKxJu2IDNR2R7F2VRbP0KHebECpCzGJKbVVTRzBayvNCMXEVR7UAFXMJrr8XQ3ya1oyo5aTiRd8gvoq66N9zmo0IcTZbr%2F7AwhMruvwY6pgG2TIMUX6NJMin%2F9WnDPSP2LIbKL1qjkURD76nV7wUJ74ofn3OddYE%2BWcKe3whLr%2FE0%2FZglyRVPeSySn2jwrAPhrNwTx79f9fuW%2FWz29xuytc9dMk4fGEnbEI5F2EY1DXjUTRXSP3cBV5rGcuy%2FsU5%2B3T1h0wfAQWlg06qHaI3Ljt53%2FWzSRJgj1yCgxFQd7bXdnovePLtMsednCjVrleP4j9r7OXrA&X-Amz-Signature=3f51d29bd742f369726f37fcbee6946bdefd901f55c9e85020a27f25f7bb675e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
