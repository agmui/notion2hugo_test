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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NQBWWZP%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIGFa2dfx4FNozV1%2FqUEL5WJZwwePTdKOTEa2SbONxYvFAiApjLMHErk8wFSotfQU1Z6eVkw4CJvfq3XJugiR0LWXdyr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMqaP77wcuV6JE2I8jKtwDKlg6sFSVxBl124t8S1%2Fl9u46FrEPJ4cSrWgBJ%2FAhlkdTGEZmdFNKK27JsnqNCDBrHvWxxcWMReJkII5RXCNf0p1Op9wHalfUCW2D0uXTfLmbQ0jVl9do21nunx79hjMbtPnMhvDcbbrGf6DNv2FxEsXbwejD1W%2FRPOeIZi8H%2FNgacg2P1Eaf2SOiT%2FRErISdpzUgq2yf%2BBsNpaxfCEFM0jKxGPaO0GiFVUB0KwSk1lsYbD09S4xTKTYUDdxRloXMEFPKlzDx9RX4YUQrf2r8tge6TM7aTIUhEYrL6mspvbpOpV7aguFIyERjEx6NviwY%2B1%2BSqt858hsACdBP3dg5lazLgi%2FFlv3RbmdOIgY9hiUefb7Rj7VOqFVlOWQox0VDlWx7uHph8vGTLRJRjdKCBPABOJ9M3x%2BFkSM24OhibrNbmFia6ETdIpHJIVPDl8wFL2dYF7qRO1ZWs%2F64wf4dKzvolXmkOmYsKnncuspT3ZO4jFkcEJDPwUuFj1sA6Id1dF38fMbI4BweR2%2FUDrmct34sBvyavjPMYjGgGPxKKhTEak9Wr6MG8KA61fkw7s8hgpc8y1nge3FC5VbaSnRnuONE%2FoEJiboVuCRLYg1HC%2FeeBlKsIM5ryIk%2ButYwz%2ByRwQY6pgHsGPytoCsA33Q8J9Yqvs60v%2FyBeYmG2fdWmOiYM8eWMvqYEThaffHuIWHfUhr8LOV7mFvWq7Z6NgI8lWkeYxGyRXd7ikgVm2wkrFpK6IQnCirrt%2FvckAMvEP00inSEXB6vcLu8hUobVH9kbZyn44gnq0ri8t5zPGds3xE%2FsE6Ju1%2FK9HHvPFT7MURaAQ3DZipZr2mdk85vFU0L2hy8b0K9gaAhJUC7&X-Amz-Signature=be36d24296cbaf3e4f74f677ceaf11030939798dc76055dede362b44a1afded9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQPCTB3O%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDGfz78uSmnS4KetER9gniLnqMSEKRXtlYEaJN4DE6%2FNQIhAP4pE9d%2BFMZgCCHoAUIZnnhScMWrVXvt6zi%2FyuD6ppyDKv8DCBQQABoMNjM3NDIzMTgzODA1Igybf0%2FtAB%2BGXmqnBWUq3AMaSJJh2E6JsefadIbLTePvAyq5Drb30JdQa4K1RY8qZRWArAwnoHd1gLC9wHAXM3si74VfbTQIavAPvXDyXBmgi81L5aD90Vu8u574LY3ve6P1lrzbpV%2FnOn8CMh10uYtWkjtGvjqJM3aCUAzydflZj%2BRGUS1XSlOya%2FcviQpnm5F5YoJ3ofSYGQWPIksCxIsCRVbUODSajJ92XuTOs38JG0fS5Eu1Z4Juf6FG4EBfmDeiwwqPiLSaqIeSVg17IBB2Oza7tFWiN2Em83GnTGXmKeJabFGU7Sf0ai9Ac2qBQqwt6ZRwcQaX71ucOTzLK%2FRoZ8NP6CBZFQr%2BnE5%2BRMvwThXIfrzylHnxDbCS8KehoGurW%2FzqxloWNuyCri9LHmulq3WHX07Vf8pFQA828SjnkyNReQAALJAWI5zhTI7xxgJUENwKRxocpfOPQkqPS%2FGfdMdqdFiHymd8Im5UCOk%2FeX5SwFcNFqW4WsOUGJ7CXOkl7woVjTginELD2JpuJkPnE9ESVuW3B5knLOHCpikVTbE15IC9fQJBtGhbtkdB1sqterJ1AEkcds6eNQE1PabkJT%2BHZTQiEhKR3b%2BbUpy6oK%2FtJuqKW9KBRs0cFsGDwoIWKcn0fzVbndcxQjDk7JHBBjqkATXQflw5%2BGTGPXZuiOOp3TDmjCWF%2FriUZVTbeKz8BBYDpojUmoJo2NQ0IqDRJh%2B1Y7RWqPBs5UAwfJ%2B4BIFcSsb6%2FFT2mRpMiOPGNQT8HdwQzr5s4jErb%2F%2Bz00Ten%2FvuWRL1pNVdyQ2DhzYyq9SW0irDpb466jFz0ZA2HtiBdgNucoY1SZMYSUY03GdAfBs12wmwlQBrA3sk4HwajI6yfIMoxfJR&X-Amz-Signature=0c480fdcc31642107bd31f8f71011dfa6bee0dbcf1657c1926df1acf974eaf57&X-Amz-SignedHeaders=host&x-id=GetObject)

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
