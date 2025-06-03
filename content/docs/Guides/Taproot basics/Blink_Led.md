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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FNSSYLZ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T121615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQCbQK7YkvawD4ggLwS0uqMARLr33mTbo8X4j0%2B5tJZhiQIgab2VKHpxlHHDwoQ%2F7d%2BRHTLSqzKcnuGyCQTPiubR8qEq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDOJhleiQF7p%2B3WTUnircA3ZI%2B2oBcihjA407QTFZ5wDGLDag9nlqW4b73ZCNYt8VySXflkIHPSBZ0rMVPDAcW9RkJe180L6FLCsFiFtVZCaWkYSF5nrfaocDzKrGQ9FK8j17u4WzcXovmpkK3d7Q8jK8ucZqxD3Zn85yXo51486uD5rXD4V4MPYLBVzi%2FaYhG%2BIdXLtCHTNzCOLF%2FYNcD5PbHUE6B2QH4w4d5YPkXLQnNqG1hXxlcQ11%2BJvUKIBBJKUerDAP751sntSxCN8Utp%2Ff41ysJsa%2B%2BI%2FbuujItZvVb%2FU%2BGHG%2FvaeQlf0Xx868JVMEfH7H0oKUbgmp2MA3tTTKvJDGAy8yIQnBe2rdmzCSbRI0XVh3n%2F8z%2FYKKqfcKB5HEId7%2FrfiaVS7zbkYqQsF2aINYna5cVtQVcfWm5w9TWyWA94eHYEmhERpfJIbu54Kih7rtaQL5pfRgGX3KBPobKgFO0RicLc3q8OJcu7tAKpB5D4CLOxJnzU3e5B1exq8SxcckI%2BBR6Iux%2BVs42B%2Fhx5tAvc06pKR%2Fh34CYKBzPwpol6iznfcLiHGPwjvpC1QrHplhj8kK43yMEmRMWdZ5shj4pcWE3ut3NjsHGcai7kXYWNRb4t3rVjmQgoT8WASFH6D3rwFji%2BfCMJat%2B8EGOqUBVzoShBSZUQK8Q8AmXqtkq9gBXxTn0FpoDNHHOAvj4eELMmQlWjCON8sDZ%2F1kQB6AeVVyAPNckVdXkAZbtG6dFPTojTEY8VJVXyh%2BIZHDn9yi5Idu8%2F2P%2BhQDq87MSfu0nXh6NYuIDaPsCe%2BY94W%2FXq41OdUrpFc8Jr8cqNVCWzrceZXZoLh3I7r8nXUwFTOOCC%2BHHxg%2BcSSTlmgQquARqDqh7ZZK&X-Amz-Signature=3d71f747937ca5216eef882da75116dc76581479d971036470611c0722ae4e23&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ADHSEQK%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T121618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQD7BsvfnJulmXJIS3GPZh93LyYSKxvO%2Fr4KxUsG9HLCEQIgSqWZQYtjUMsMncDUydhiBOL1c%2BPTojBPaJC8efgtHQkq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDLqSln8Za6IjJ1OK0CrcAzw09UlWRVvM7tX1HgW%2F3hZ0VQGzIOm0e%2B9TQuOtraDLSvVZnAdpYB3m3CDLMArlovXtSI5l79tfxETE9HWSFWtqCyJro3ygkkj8F1%2Fe%2BDL3LDJMSjDZ7ZWKvli%2FyKYQZQHcQEIWI3fG6Nu2mTNE0iB%2FrvZboMCVfGRJMBUhkvcA9Guz3Ed1BcCuGv6SuCRRrvtHvQi33MJbZjbfspWYe5gRylz9iVJbcaLTp%2BFD68a9s%2Fm5VA4YItS82pilsT8werXxOqG2NsLXVoy2y9nbeHLNiPXUIJGeHNXaSARwjJgsnhFmrizHGJ%2FeOPEoSTcGbOqpRnknd%2FlRLdc5iIzmp0fF19lYt8KQ1gg759TtryqR3D%2FE6u3GswFd9sMtfBkA1RfePYZvqwKhWvaKQ7C0ZWGeTcQZjwJH9mYDeepz%2F9Y%2FIqycPaDdmrfdqCCC%2BUBXKy9ukxE%2BMOXPPS5ftCCtzEhF75U37%2FV2T%2FmdcORNfvcQVJBvNc7itKEEkLoGXt6819ZhGl%2FL7p7O2qiPjuebEX1utu1Q2nBsC6EwKrQIlVzO%2BQjeVs5A3xlZChyXMNeLYboqMdiHC4MM0SnBom%2FAWobXERfZizq3l812zV0cbR6Oyp33ei8EY6%2BS3NWpMJ%2Bt%2B8EGOqUBWgydHU%2FzTZmv%2Fb5MUs6pHmOA4sY6INB5cwrXHufHLFSdtgTpbt4hnQtt4Hkxj2lAUcXhiCuV3KkMhtvj9VgqT9zu14TOMrvpTffQ29u7lQTsOl%2FE9BL29tVBHbMViTj%2FNhfR3p%2FGL6FDkZLGnGqOUgbO6BYUsXw0%2FWmi1PRYb6bMXknpTdmDqXTiSb1OJjkBhNHTJbB5sh1ASTbysljagbcuFwXO&X-Amz-Signature=781dd03bd4718783980f3455970247e7aad907235c05e30212fe33311fd59dd8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
