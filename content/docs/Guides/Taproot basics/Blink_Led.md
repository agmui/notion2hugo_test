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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V43QNHI%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8Hf3rZ50cP4plD1iI5%2FFDlxJckV6OG%2Boi2VAguMqhVAIgV%2BzcsS1fzB8Vm2KhKvCLKyzvauWMpCavkEmPbmSSD8IqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHP98jc7CwyGAOxQCrcA9JLlwMUU71CJ2Ce74J504hgFTEytRudVB%2ByoSlO4dvvephLkldKXG%2Fqpe%2BPkyWn1V9Hrlq%2BNV3%2FkztPoRFiOweEfhUC%2BNm9DyWnwDkeHX%2Fa3q2QSgClkFN16rfApbgD%2Bzold8X%2FQ1BJufSF7mDdVv6cTKZOdFE2xEcZsDdgHZJq8vPZjCskogiRmnsJPA9pvY%2FsKXWjbq1NJWSHnWiNhXlMAIvVAVhASLH6uVT5dem6SvRwjRWPMbtwMs4APHe6QiMWX560CVv%2BymEvFMIuPimN7mBMdndHqN1wjAEYL5MEnGMqim7CLXpWy5kPrAMINihQf0Dewp3nULwZcRvsmgcofb28b%2FUHKtRo8jQZ7k87xi7lxsBVxVdFRdWPmZdI2%2F851WZ2ZkpJftnosl7m4SySU9jOGbfHEWpyManGjuuJedl4RBXmq5DY0e3VutpShKwibT%2BHhS7yf8yclm4DyEws6Y7tRYALpl0X7UCsiVwc60Q7WVOkhkOWQjYJNbQO%2Bv%2FrqpSEluMwLkn9ZhsCLdjo65T7iolF8kzBU8r%2BnSSrut7A2DD2NXKBaNnxerElvbI%2FXQoTGgz05siondZq%2Bt2Dlk%2F6Vu3RJDbMLhnuOYmvqqH7LE6WpkNHB%2F5dMIvZ8NIGOqUBunyyQa%2Ftinat6EpxYFm6UGpoAZ5vo876h2s%2B%2BiibQkeKJJk96boWeMDhdcPmQ3eYBc4anLSqMRYDKz1FeoQtzfF%2BtsPXJZVKBFJT%2BWt9CALwmtB0a6agQwk76awv7oAvPrshTNKodeFdRnvSRGxsG45LPzvSbZcuYiEpPZnDxUUvv3QXGhoqCevqkoyXNAPwRWsSps1lkFbep4sSnE51mFXU0CPQ&X-Amz-Signature=720812bdd80b2cc5775507039c2376d810db9503ca7a7b8ceefb88a24ba771e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XARATKB7%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFyMeyuO3mdhnKki0bNFkRqNK67SKFqZ3XnyqOcoF8a2AiEA8RTvpmpxzjhu09soNYGzLSBxi2W6SpdwboFf3hBKRQMqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPA7tbW%2B0YY9GxkaASrcA5OzvBiUF1XNTPGUUZ4Omn7fOPBspWijRAOHgVFkIkkiAvZhRhoMhnZLfXagwFdaDJ0d6nnBSCiuDct3FldTACa6ujnU%2FuvJYYIe883fQCFjua5KmrDsPbZqiTlCqKGLRuIEQw3vNYMjU9uJ%2F6J53y443OT1RJD0nJOoWcS08Nc%2Ft3PIF%2BTvI25Edk3GQD99cJSkDmIg%2FPLbveynLtVT8JO7UDQr%2F1jCQfFaPKBLtzWoLjV1kQKT%2FNa2jWXJPn9KMsutXa9kq%2FLkxX8NP8GI14JSc4SR9g208n%2BUUi4I0oXA2IrNXDIxJRg%2FvaWhTriJtQOkTVPzaKdGaCqAWuWGCGFqTJNdZR15pC9IgqiLUcICzlOnl3%2Bjezz9rWURfOj%2BrBp%2FEcX39NryzpQrkwqUSJFjWwJhAFRsZLyrVk3eDlEZLHJpo6ZH05IRDAOoRUwCKO8DqjpVt2m6WELoHF49E%2Bfq7O0e9aDJoGQutHiEe65KjsD9OBRNQL%2Fo2lcrIbR3gWKJVIBBLBGrQPvnZK0iv3GjaWBzUoMtTWvqHFNFDRxX%2FPluWjULtL6gMleyeJ%2F3zbe8sJAF5TnYpaPmQr89vdOFX94G3P1NWbgwxn9CgmWJQ1wlVZm1GQRVeqzqMNfW8NIGOqUB7Z2Jv9PgpMGZbg1quDhoqjzrRkpkUrthrxz%2BJQGZvJ1NmOO9edEMJi1U0uG7AzbKPRGbcFXdkxDnrAa%2B1aHtwrsUuDcLX6KhsnBOGsubM%2FTIeb%2BNfqQgSrJ23z81YsAtMcx8Zml8bfdYjTg1sO%2F5m7aDOxC3K2lXK2JcCBW2%2FJHQ9bswo%2FogbUd1YKsBFlYtHHmoeGdwv6rRlcgkt2U3tsqa2gaZ&X-Amz-Signature=8cfcac7de533ad0f43337870040d2a9da27c46603e7823b232b0676a46b6088e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
