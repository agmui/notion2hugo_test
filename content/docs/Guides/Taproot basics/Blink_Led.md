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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5UDAJS6%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjrn%2BEwe9IMk%2FHs%2Bne735RP5wSfk1e3kFtt9gYabiF2AiEAjLdNwg574A9MTxDvBIKL7eB27Svhfi%2FzJGpj6xqReCQqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKRfONMkwrYCbpjEFircA%2F5hrmIsyAmzONzMQFC%2B3NA4QN%2FHbGIheYE%2FxrVmAK7Y%2BwBgeV1c0mYhlWngsmZoj%2BLO8l7elKTdxPptOs4N5esKZ4xmHJexd1igxJeNyBYFBLnzVQm1ibSObG3gKgZC6YrnBe%2B8mL1MqBKcd9uuKSSda7CyWmW%2BsFPlwy06a%2FxWLBZ5Kbm0YklufPOSuGW4vEc6AGzqVe1bYhlrUqxEU5kSlBqV9d0nNYZSroVxZWf2be5TT3bFkiQaf5jyFYoog36VgftndMJT11OFsRFOj6tIoFm6qvqZ4gX8%2FUEy51CWIc%2FFiKPsU72QAS6v6%2FcR0Or2Ei0pTUNIAFQlxNdku1rc0lk%2BOW0xGAUx9giHIKiuwsl8kcXaxzMnUVf%2Bem89w0nKt1wwDt9yMnNauc69NUE5Kw6Er1mQFjVI%2FrWwWDWjP9MngU8Mz%2FOcZzlNR6j8iXPCODni9EF7VBbD2xirh%2BmfDL1tH%2BeBNHyVGcq4r4VR202mRDbMTbMeuwQ72t6W%2FCQDDxOAy3A%2BYFC%2Bh0WYM90kCeCCOBtjFgz3lh9XeqCROciXpzdASjhSeAUA29colHNNxx37mqEQTSIgOIYxegJpXkWKwajfPucaUs5yvS0JWfTM1Y5%2B60k7FrrxMKrrucMGOqUBL7wGZw9FC39DLOxAM%2FaqJJhXDYJzJk6mmZ0hSqg9gAY8NgtQLfQuoSkxf9TJhaFaLPAlpIjiKtN1uzFMCM549wF7jhEWuUQWW1sVa5nL%2BbJyUe8AnWk%2FEKyI6eElZkL%2BX8D09zdWVB19qfUOG77%2FGYjW7DpDOd%2FsAQEvQXoT3UwKeKi9ZwQQdEj6Nc84GJVj5TDflZXDlltihiyUkNO9yHAC%2FWyJ&X-Amz-Signature=89960098b47ed5747abc9c324c939222b5c342794d3f9743a360310da7cf770e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGTF5VPZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGeAaKw9N%2Fp4KN0TAb6BwSIB%2FTvvuzwXQ9spbLGMkGXxAiBIUco%2Fp0QuZktXsjjkvu0YF4Ggflb6vyreZE66eAkYKSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFTiJW1C%2FWhHbdwWhKtwDZs3pcnfZnijInc2tJViWm4PAXV4XHGM3RrP8cYHY0nJM0IzhHHixczyKSz%2Fc6oI07ddXbr2jxoWAX7RyQ7%2Bg4PBGmnH%2Ftw97ggGAzkE5uc%2FrVQu8XGHBbrpM2WVJD8Mcbbzmho45ZKiGUzH%2BLUPR98D3BMUPcO152xL2Onw2fouBFTWIVU8GjzWdgQOeUHbgdu157fqAU%2F9PydW2Oed1sHyj0O1WG4otwuzZz4cWgHd54YqdMuQ534dixQwoE74TwLPGIp0SGHh%2FdrCpIYeiy4kTvYeh%2BtAzA1ZHofKvdGkBHcp0MRfclAYEw6RtK1hurcFQ8fFhNoZQFqmzSP7VmKskxh7dxKXV0RnGAAO4JC5Hkzt6y8QsxvqkV630WvuCqXd7KZP4nq5kXTF3CqXbNm8jXKze%2BAsVHkK9GGudUEOKt85QnrF6Oqa97fgnOwr3FWlcwH3ZAsZLrDsgAHgOlS1CoYbXoWdQ%2F3Wn4WL%2FzQPsUvZJl0%2FVX7is5vvvo%2FN8T5yqPZBw1bGyjE8TAeQSk7oL7QT878R429RrRVk9%2B2RR%2Fgc27TAar4Iwj1PrRAEsJMNZDW5dBJdxX7v0t8p5bi3rSEzrTLEgOAEtwv%2FV93e1CiuUdPIY2obM6l0wk%2Bq5wwY6pgFMZlDTlRX7UY8N5OMFzi3Bufu1dL4nE7F3sHmW9JDy5e6DDqh4DXxaK8v0lf5kxnQeUmpX5zUdzWE6t2H4TNSyA70vzaQcUAPJbULimE%2Fb7GjSG9lo8EQy9oDn6b1rLqQbIed7cHwtrbG1PRFcH5C3%2FxWF9u9iI4EcJHUc8KRCcOiDo%2BE7VEV6QKFiewLM4LhRS2g2KKNTmPbGSrOV7pOwnFxeD1rZ&X-Amz-Signature=9bdce8f1f9be53ceeac23b400f12bc3c749d6b953a57709d19bf65866760f368&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
