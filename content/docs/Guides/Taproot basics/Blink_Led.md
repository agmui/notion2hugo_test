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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HAKCUNJ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9vM965Vxj%2BkoQCVuRAWKUnIcsZ9cid2ifkc9orT0bRAiA1ZpDuGxCiZukAFOxHjjd05qw0UH%2F3dCd2Eliy5sZtlyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMl117%2FcD3XdCfcIu%2BKtwDWD9QXrCx19wODRF1a7aVmenrf9KKUZdvwwNLZFw9SNhuLtVgYNpEOJPa4zY25wE2LFK3QQCqR3oaPe8imQ0S8c7W5ijHqmYNc66%2Bplg7d99C0rKg9NYvBVyGP2BC6yHO8UKyAPJcdGRkgG7mhrvVMnC6YkeekKWExpkms4GnvjjP5NHmAH2CoNFdYIW4tIbEg%2F%2BoIe9%2FumS0SlOsDefOvdjn6XfbZLfO1XD2i2jbCN3UXoQn10yghYoz7VSfzFSTN2lEQSeMMQovT50gb6OagwyLz5fK2p4oPoI7tPZ1IeHsS%2FhV2aRzI3QuPtCDTtQbtgS1ZrH0Cw1WKQteeujAuR8h82AMgHbk7FIn09wTfLohRNsgjZ4hAuHjYnZLGzqs5RFMbc1Hd1P%2FMLwBM05ARpU%2FlSojsZhnj9%2BtxrLf5cSL7UAvgcShbo4eC0gpTgbIUOQCY8bCmCTDhibY1KepQJC5xnNJ4TsHUgT%2BkabTdnqTLWGtUuSv2rRCic02OnLIy85ZA%2Bw3WrrESm021e3K%2BuIUSWMbRfTRBYdY7P9NcmTw8mwL%2Bh7kom0H6ByDCoE6VZSe5CWnlxVXURk%2FfJ5u8rPJSimtLIbk5%2FZY3e1XfqiUw%2B8oWqSfq7Kf4tcwucjFvwY6pgHHA7ByJrHghHs%2BwFKAxt0t6WDQcQ9oBDz3bqsyXk2JZrKXS0T62%2FdYuAjCsyOdkaIgo2b1oFv2xHLZL92dpqIyGeeErm7ESpfJQDu7RPG31vAfz%2FTaU%2B02H8a7P6ghcYwTUQcltA4BfCxztfV2vfFpgiyzcZGu4F52wFAMAKzXa5JsHSmtjAyo%2BeGL9waJEuJvRvigrz6YtW6KboV9a44WsAVJXNdQ&X-Amz-Signature=42da1864a0ac4e3fb5861cbe69c132ca5498ee3342e8487ef9e58577fdcb0670&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RN2Y734%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh0KkHabj22C1PsMTOq1RL9xOMIFAXQkVPaQxWCbroYAIgAXi%2FMcgWhyr4LM4Tn21N0cxGrSSph5kzyssSnyxEJrUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDjyXmKYdPRAht8q%2FircAxPgHVnuz87BzDNz5%2Bzei%2Bnl0pM%2BTQmBwehyOvYFgAqPxDYWL3fEmsBKpLmbzrgxns3LuxvC4UeLpLwMOjvKJ9VnL2pLwr2TuNLXBXgLqSIdt3rI4LoypAiSLeE%2Fn%2BazU3nywqOcMCLBSh%2FSlxY6Tt0YOsDc%2BqdchErr1W%2FH8vodKwHq9cB76Lb6XwhEcILzi8rZSlIAAsqYeYux0DNzC8cGPEVc8K8mHy4oLtT5saK7w9rI24%2BBnAZVye3Huwno2HCOOqVqj7XFV3OEZYmXvVTzbOfFaROtGsQOcR0U%2FZP1bgsmgdTF7H3pvBhUCCNqpT7QqeLMsVu53qANXZHwA1D7lcJ7243IoQIkzjZQy5tujYFbnp%2FkPEjBeS7cV1VdCWHAhqZC1Q58hUe%2F2%2BSaFwMUBL0834hI1ZgB6k1XhchOw%2F8K18TAxVYWeHCoVz1ejR3HIWm5JMGplvvKOGVxSAFcmoOtg%2FVsg4L5V799WIFawzKNOrZw6Lr3BQg9JB978qNf7F6KesibzfieJ7llWnrndztUvif9TFMHuksZE2IyFD1Oa7s7JtiBFejE5m3H1I4JXiNVpZCVV6yEEMLzRnIeAbEfoeC%2B82py4Vn33qQdMp2lUl4TS%2BNH1MM2MI7Ixb8GOqUB9kJlRyFPGPi0sus%2FFpnM6BHOxmBfw1NGm%2FUx%2FkaV2GbG7XrlRXmNPxCUuj0xOw6Uk3u3Kk0iSZhn7S4PToh3TlUNrg3slsSO0sRiN1wr2h9d3vp75NfFzmBg0RAy9mh%2FgzegFTSb2qMYVqOZDm65jCy7vlYTpoihThl6WDyZhIwo9ue52%2FgyCOQtdmM60ZzPwwtPqP%2BgIQzpPHz1yI8eQJDcVgPw&X-Amz-Signature=950572fdf3bedf877c583eb483655714ac370c36b20df1b20f7eeffb853fb51a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
