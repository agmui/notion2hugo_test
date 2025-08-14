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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CYQ27SE%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJR8UmvQhkvH4dgCrCITLGFIJbasRovdQD%2FLDcTBtDIAIgcMUAj1NBJqXIV6shKyZvorhA2iYrv3hp%2BNPlf0YFZDYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDBZ%2B43EwdvfSk5FCAyrcA3jEBSkvTxg%2F6FAH2cy%2BjQuY%2B4zMuzKGNglR6YY7UVKf6XuAuidQfWQOW2OQBYKkLDcI47SPCLV5uAFMfXr%2FjRLiSLMkGYBbz6lkL0wUIgaL32OK2jV9ARF2ba8kHCbwBr%2F9qa8I4nhlySIRJ8hNUH4J2S3b7YKDCDgF5plcvmqmqLLysOjEW4MVxGpx7BW3nWLdnce%2BFbSMC2Ma5hyHY9gxkhxlR9SSGVP6iSi9q44BsHPjgGtLHUMmzpv9G9y03bLXykTJbc7TcTTRSqAQgVETL4toibA%2FxWXxIbtWF8eSn7Dgm5uFJAAstXWEzWSYiqUslb2arBvhljbdUA1ZgqKQy1cUDEH13cWO1VAcbeZYkViPNOyhFBMdvJ5RWR2yTcxuHO2mvXXwIm4X3be8dDV3N80Mn20%2BRNtDgRJKOFFoDf0xSHMybQ%2BRuQe7Hmf9EnLufHfdUpQ03V%2BQgkRmu%2Beuwm3VS6Z%2FfTsv2MSFxDfBEuKTvV%2BGmLVE4GpAdeK7NEIERXvI6kqEZfJ4iAaeGhrHbAcQT3OJ5KAXVhpKXYq96%2Fwt99P61frYM01unRH7KKA4qiaccDUFowsI8S50CXy3Z%2FjfeduQmfa8GJepcCw%2B5BNsMSXde3IrQvLVMI279cQGOqUBgZLsPkYM2un2YUxoU6WEYub5Axlu08vW0C6PtYG35Zhe4sSU5%2BWu5JrZqJ%2F1j4VSYq%2Fs7GyXKA7IMzth4sUACNoteKrXXz5qxR5c0FJmKDd7Shl2O%2BpAPhNYhlVw5a%2B9dliC6h4fl4Kn12IqW2wK9svlxavFUWSXTHC5MAWUIvJYid04Bg5plXj2u8zBT68bEKnHp%2FRiKMw6dSdAsCfELNW2vKkz&X-Amz-Signature=f17de0fca46410a6abf57eecb72f32e13d8dc971337059c34f2b7a3520015b7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CTQ76AV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzxuvqjvyKzOFpXhbq1PZcr985uwG5qe%2BEilDq9B0JMAiEAvOmSaJgaJL2XAiKfpipbJRw1uMqyxQNvWN3nZCPLkMMq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDGFRLA4SCxkXOZlERSrcAwPjjTDEFZ2u7Ro2cUA8UtUT9HcQtFQFJdA%2Bg9epZOipIIIQf3yjpwWKXsQ%2FnMr%2Bb%2F2DfNt0S2Z5hirYtoNF7jYKLaP02dngo2FFx6k0uF0ZN%2FRuACR9ER1fxefFMkzab70v%2FN6VWsQTEHaqN48lL4qbei3SlGtAgFgmN8O1ZPbAU%2F5lB%2BdSCIHYsfZky3ywPCxowFUsAL%2BolGSOoSwelm9ZPI5l7P3YmVxXwCR%2BZUA0oqOJCnVfao202YVky97up4QK0rIQG%2FURXdK7lyYuq7bThRcmK7vZONk8NBkvuCXS9Gw%2FMYurhrUJRHh0JGQ7W1p7bstDU%2FbzJ3PurK2YLnWxr70J8XggZ%2BECN2GwNlRF1OsAk57gkzaNKDvfw7LN5U17qAN4bI8r%2FKPStF8Gw6vSw%2B%2B3DjGhN8Srlu%2F61v%2BBDwLi%2FGKDdI0Z9iciSIs8cUpfJKrjch7hkoN4mxIWeKuR6%2Fj2n%2BvplUJw0KmzA6jpC89axgGDXwAbyhc6VVCPtH9Hpdnqm8BL9LhlZQE86a2XdeY4oIcwVE5JXB4DRtGdSq4rwlW2IKRn%2F2xfXT45oJyyRPrFJdXvsghxryLGF%2BOl5BqjnbU%2FGOdd3eA6RDpOiWyOgSjazYDj%2FPMdMOO69cQGOqUBiZCd6Anmq2UpFrhUVIOItpj66tfG%2FF1yZLfXWboRAQHiZ7e5K%2Bl4fRMtBm9foI6ECDXraTFH3mJfbcNWUV0yST%2B7ZMEofCD8Vxm%2FXPxM1itd0wsWJKLgodNhpDslYEiKOj1fAl2Vs9JEvzk9ZXNPUBUB4S%2B4Px46Xpdj27hlIEt7cL23m9sqScGHaNy6izUfuZ0kli1hT%2B832gKjdruiydO6lgnb&X-Amz-Signature=56e66728a3207b552f2264ffc8967945d760d98ea87308fa526ed7440a5ba2b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
