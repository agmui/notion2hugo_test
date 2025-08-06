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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QZTAFT6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCmXpy%2FVwAea%2Bqc0%2F6EPmg9lUpMzRcbKXkOcmaWbST57wIhAL4zIzqW73OhCC1ZVC7Rzq2L1JC2I9vhfnv2TYP2CZidKv8DCG4QABoMNjM3NDIzMTgzODA1Igzn%2BUeIAJ5hxwGBSSEq3ANCyp%2BokiF4lzU1Qwi57W4OIg3HZAi3MewNQxGgoaickv7rVZJDgy3bSg4tGaKgnbORyTV5%2B7UcEkwok6wqWsZzI0WYnnPzYQywhuJo71bWaIVwfFlIU1iLJmzUOq7SQFp2OTK9Jg6egrSwcy2sTNdNXeoXz8PwurxUHq8dC%2B7McloFzCPLHLRZ2RXZxjc8OxedGjFkfYXcaUwB%2FAC6jGfTr2O470MMX%2FydubNnSSlodF9WKzKIm1LcF5U8Rgiy6MJybEgL23XvDxHsITbpFRnMcAOJuSnjib2Is7y4Rg131kKtwproSmmFeI4gOohqr4ts%2Blz4LjHICp55eq1PAv70lIVSEZ3WW23Vb9JiNlwlPyMGJJusKckTnlg5sSz46Exv4qPX%2BLITU0LYuaf3Br1yzapEeildrDpItn8a8Q20JN2ncM1AcAnsb%2BdD4SYbB%2BkV0jt07YZlyWx1vAru3KU4lqimRuhBUdpYBRgw6JHx2eOI58YnB7duXms3HR9TttkFaQhk0bw2fuR6DuP1aBAl8yKSIWbRhX5LFARdPqwy3kwbFRmHsS4L4vi%2B%2BPI8AdKgqZevnJeQOEd9PEXxuwk%2B%2Bw22JJCgvptuTUtFWO3a6kifv5rXo8FZPuNkKDCdy8vEBjqkAToUR9fxr6onGz2WQiJlCiKjDADe55FCCEBYEpdapYLmBABWWuEOv8fjimvp3hGochfu3BV57ESRdvOTBZzYqHDP4geKxJtzjtJzD0mEGRO%2Bm5JysXp8OZtXK7BONmSxXvhsYYuOQHL6qIQtDaWUK7zBmYwnyJT6X3lmVV2420G8%2F%2BL7eBXYRjC2lPVTZfLTTxYHz2miIzejeX%2FJypf2sp9tnQLi&X-Amz-Signature=aaa1f5442b95a5ae3ffc71f640edfe2d7a2959210500bb224a80cd01bce7dcf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H3BRL67%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCICIkSSmlHwEIJfrh1MY6Rffenoi7JNVOHIll3qZ5bsVMAiEAq%2BdXYV2I6cC0K6%2BCMZYe7yXBSbX%2FcVWxzdIV9A44K%2BQq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDODp3dZBQr9jKYHwGSrcA%2B23cJGxk7AcQCf5%2FnlRkZ2skN55ZUHls%2B4TtgM8Hs%2FbckrwRsJDtkypxDbZJcQ0c0nlq3go2ffyeCDdOVXshdiLEJle0FNUKMOzs5NsSK7cnhn0NUn41HcfOaPjS2BqmeXaZ5ffEYIIikW67SnHGu0lNw8EvOMmExkWUPQkuWPTEgXpBSGg8ZQBmx7vr49SUvvabb1zmsFUy4mGQihD5BIpql0TfjKV1nBAkNG6pnFTJFe12PLSRrEFiD1bdHPGH%2FByhjJbO70vpJo6SQUHgmVTC%2FtrWxNCASUOlAiWfptj47MbVkp%2BAe7nUgpuwglNN8s9VcV7Gij7wmn42uhGZSJny%2F8WNDP6iVFalPynbO3D4Y%2BjIlIiVpiKK4Siz%2FCtfrka87%2FhlNzdKEZbK%2BEzAMYtVFB7%2F2EunnKaNxpwk%2BKJGcZtmGTMM6LsVFfCUaEC8n2BEPe5j%2B1Hhte%2FSLbnEzPS0xktbSDb3G6vUWeZikNGhwB30c6%2BkT8SmwCzJqfsUM%2FDClK%2FNFwn5zzzhYC%2BSxtE8mdVPyNhiQ9yMtaxY67N2k4knifqlhEfvsmaO8rGlISlpxQlCJDJ%2B1xyS06raL9I9N%2BC23xcaZxXLyZuZ0H4GXyo%2BR5vq0nI1NxNMKnLy8QGOqUBz0FGSsjcxl5KBlt%2BKuR%2F18PWg4VlizmiXFf6KFnXS5DCg84Wsm4APn2gHtTG8Pfvw8pcJjlMFDWt5qJdObakjy7ckGXImDHcsA%2BxYjesmJkcfkNmPReqyTd4q6bK5onaJa3kRxW9RwVTPb8suTsuDMZyPpWHqyZaTG5s9ZxTw6b5hS%2BcJ1TX7w04pWSJps1mOKoc1wvNUSZqs4gI9EI8wQ1%2Fw1%2Fp&X-Amz-Signature=00edd606fcdbcbc20abf5c38a8a959d55c5d6cac953ae386450d53b78e428530&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
