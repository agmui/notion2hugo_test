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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6NFGQ2H%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T132133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIFxz0Qa%2FEGIeYm1WPONFjvjuQWUHNvr7UHevGZxfWjdFAiEAwWfL2xsq9WBL%2FtwyB3RwhVKi3qjBLlejhyBxK9grGLkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPn3%2F%2BJz9qbZ%2B%2BGKuSrcA0STgU2dxZcq%2BWKEZmA9KD0DgpoYT1AiTg%2BqcuH7YPQ%2FLC3y7H4X77GUYYZ7czmH3yfGgK26lf1jJGZ3KUYw5jON%2BdgGjFrBSoBGFrPkiCETSwkVxMv25cKOCFiN23DMwFj%2Fs5LXoWbYwkFbfGtT2NOMAUkOY%2BSyTUXtwv05gzABVg4X1GuVtnTnfQbiqSJV7eTT3YaMnbQeFGdGnrocbyz95L89GyZoaQmEYamHB%2B%2FhDXWy99AgBBxlSqRNvspd31%2BSWAlq4CJYeEcHq96OE%2BYgI512%2FJzxUr4ZkD%2BmRj7pzI8uLWUwLjPPKBO13Bze7dWvuAEdUJ3GcbxLlTksBRiqmO0No51CAnVS%2F2dY4JOzbBeou4QIHAbnwrNquX7ZvzBVQL0ofJG%2FnRoJ5FmlkfpcMzQYdC1qhnSOkSFoGvQdtOmxFqNSUNy7mW%2F%2Bbyqa4dPMe9Wc1aGtZtj1OyooOc%2FQQ8VWWTWRs21gvS2lJ9wl80ozdYokba4GSGcvoHFmutSBiJ1fPTdHOLZMpIILjbGuKYx%2BS7P2wWLNvkwf4xZLb0c%2BOqZPz2Am6ODHosH1sYf%2FTrzgfBc6pqIp49%2FTUGj2uPk4Ztwcow8Psb4o61dKR0e2p9uCvjMdaUx8MOm5l8EGOqUBv89KWKDgvXHk6T1drUVs%2BFhNfqqEDuqY1nMTeEvTaI1MYmExCy9CyFxGF6xx9bASz%2F2z%2BTPB9HsymOXSEg0j%2Fdjt14G3IxUPPAU3YGnbvfJvCW1Zjj%2F2%2B9PMup9HjHQw%2B%2BuzV%2Bs8hl4yCT1bKCEChgbrnBQmumUutnRjM2PL1gWo651ezwvQA1WE6khqpLqwLPVyfD3mjiX7a2lm3%2B9pQ%2FJuxCNl&X-Amz-Signature=561931bf257f1c286597a5f96dba3296b55a7141cfe5dfedeef59c6122bcd0d6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XU5K67M%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T132133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDz%2F4pHK5zKFwXREU8%2B4rD6%2ByI4dk1DOxExWDNTYZN1eAIhAK5XIBqWN3eiQo8g%2FgTwYPbf8wad7Et65YkyMxokzvqpKv8DCC0QABoMNjM3NDIzMTgzODA1Igw8QdFavbsgyBZtjWkq3AM5YXGAQckeV6EKz0VZOMtxOEWFsKR73RyW9k%2BfSJTmYfaxrgihg5CqlQN18mSb0a%2FjgHGKLkhV2v4vKZXjb0v2tRT%2Bm6HpOiKeUdyAa5BeXndIO2r8F7JOXoxWEu2i9KsM3CnnwNj0WXjFbMLp4PNWsDki%2Fdx00MoptF8jngTM5DAy2fGNEWaLv4B4%2FTBgmu3vKUOuFOhChYgf2tHY1tCBcOakKoeOel9Ehq6SUZA2J%2BPrK23q0y3ZQSV4a9ocKSrJhsZ1uvVI0Z4WY1aTkVj8IXhJOPVkc%2BUpB76wyFcV9OWXIGSP%2BJSE23uG9QjiuTGEAu74r%2Bw%2FwcDF5IpySLt2BQ2DglzSnqwwCxLBoyQSBSFC0mSiDXseN7%2B9pgTm406n9qh9ngikcmgMNSmPWahKe4br4tJnmJLgTC75lwPrsJ9W0NnthhAKve9j9f1FhhZWy405b8N8%2B%2F1qtyi94ZNKH49JPa%2B2jy0LLYa2qPKVLpYuGjI2N8GyDd8w7OLxkGHKhXG7inrbDVq%2BwgJxX6yMdmv7Ls0gFL0gk%2FxXCsra3JzGvMC30Y2dTpr5O5IiQk6R1sc%2BFB9AI5z1LEvuQkZFdQP%2FrRXLsNgqCSB0ty%2FILCJTVx4uChZ5HeJHujDUuZfBBjqkAfF23Y91DXyTs3ZKye2CpbiZT2DpQo%2BDYSzBAQ0SwNLEHi8EFTx2qOq0%2BrlcyWLQ50DQq%2BevB2TbYA36H1WsyEhclcTHb%2BKQkgACEaBXv7eLDQuy13QFlLWQH3GOsFlYWUqT%2Fzw4D9qfZUvMXbVTtM0MEu5PlQWIIuPefQOLvgcKtF%2FeZB9kDTtuos4fSRKt9z%2BobA6Ag856d1KjsQoll7HllwH4&X-Amz-Signature=013323ff633f2527ff5a63f5368b1aec2f212795d8d653eea44d52f6e6d5fc05&X-Amz-SignedHeaders=host&x-id=GetObject)

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
