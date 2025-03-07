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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2MCTGIR%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T160931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIE6HkFOOrJeUmxOBv2wx4zJdTqUiuUAf%2Bhir19rBuer1AiBjhcfKppSJzUh%2FOmTcmcohG3mbFmYo8txRy87cdJHWwyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMW%2BH4QSSZB52H29tVKtwDry7FT%2FX7PWcZNIG0BqH5iqCMvSiS5DZbB21IKyDrlJgELSxUWD12dmUp8jJphubNbBnLujeDKuoo4tV%2FxxCfH0JFXgMjjQ76K4ByjjUk0tZfc8Rpww3Ct%2FvAzAQq5mOb6GbG2ZHSemOIfk5Xj61TS1FWJsnZf1WFfy7TpX1JQ6YYwORq6ZKI18krWTpGeb7RauLBEY5wJg6RB1crMXgdNxzHSGm0d%2F9tc22lIK7VsbllyW%2Fgwm%2BfOQjs4HJWKg72wOZssH3s5tf7vB6wgTCVEZCpXM6zCEVFh4f42n1w1Xsn%2BzaPAQWRNvpOrxjDj3CF77PCrqvM5CmCOCuzuLmzj7M%2Fs%2ByiAd4g72%2Fh9ZZq7hNNcOPmouZXyFL7J34gBJ8J5S6TxywZr68VfgnjY6Xdnr02eH220dj9iGgVvxbFipnE3c13wus8LFLR5YXvmnYuu90rkYs2ti5bj7J69qzi3LD4WDYjK8EkN8nblp%2BTJ5EMe42UmIo9MYDmmNb7KwvvLc1sgbhivK37tfWG3kTRvBvyc1tL7uCNOG9cdIldgOwPv8yQKmv8grvya5NMl1%2BAIyK0svTOYM5z9qJw7Vro7mELox6JfFs06X1lSDUsLzMQTtxZitwrsZAX0Y4w2Z%2BsvgY6pgFW8t33d%2BBVD0lPwMPiCEOY9Ro2yW8EcQl3ztCs6qEZGq6sm2nxPCiZZqD5PfzMnVzy1PGMJX%2FnaGtHqPlGCGDBkaoTPE7yRK90P4O3oO95gHqp%2Bakw1Zuy19p1y7v1tgPj%2Fsy%2BrW%2FA6RQkjr3xYqUlePhs8YHS0sobBUuyMDuOkoe1F%2Brg6gyxomymoE1sSq%2BS24VYuubAIRXGfYrPVXAHkg9bYuX%2F&X-Amz-Signature=8bbf3b2415ec6a766059a440a6dd6016d75e03d33be50fb10f207a84a0ccf69f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LMRQZSZ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T160931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIBLRRwvZjuOUSwU0jZ2cTBcJS%2BRRX0gmDdehfohn9r0JAiBGrYi2hMwlnaQYNDV%2BBnJMVMZhzVKoQOR3DaOdRGW91yr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMpadiu6nzUOPIElfrKtwDyrGWG3zviq7J5%2BDsphuqs01o2o%2BuF7lFOLzv3T%2BXBQc9HqCqo7WKlj5zsABvuMf6jGp6U7lUnKOpK8NJh9EG7qJs7Eic1wyNmikuGVxoWMCz45ty%2BqUHBrk%2BJtIzmsrjfLLuvMfcz3ARW9NS6VN5B6xqrRnbJOrJT5CxpLtq04B3N0ieftlT74QNzrdknqVMqFNPuarhmlcixlIphLwzG6r%2FkPwXGCfq7%2FoEEKDkFhCTZ79k9qQyvWIG3ebpfnFY1XSnrGeWUqYB7LD%2BsJmgCpmGrIcs0n8n8Xwllbt4BwXkuBDRa2qTDM6WA0pgBnowbMp4XdOcJnzcB1olLkADZlbY4DJJ0fSPvkha%2FtM3nSLeeuCOcZby06N4q9%2BIv%2F%2BnVphQW8imcGAyFKsS3lccXBjL%2BiLF%2B0B%2BvemUwOuOyCdQJ46fVVlfnoea1bf5mKQ%2BVhII2OExNBc9IGjOZz8tz3HD65P4sczVd%2BZqwA4yUif6BQfivkxazVlSdnyerKQk0I6zetQ0Irl3IZJmIYUCKW0UbJhoKHDEQjJB3TvcswejAnhrxmLTL0EmPUtD%2FKsT2fXOAiQ3Wotj4yDyZtzKbt102%2FSRLFXK%2F4UY7O0M2PjzTaj2dLUg3xCtZZcwx5%2BsvgY6pgEF8nMLKbijnVHvussyb1%2FZxAbXX7EHYPshG5Z5cq2o9R8u2aKXcf3Z6fbJpZwlubpoLxDOaSTlQXu%2BVXCYeYlG%2BGZWwVuhmfuZdWt0ppsS5ybMsqjkPFe48nbxAV9N9mvyba7wVDoFAuqs9TpI1dkE1rpsFLVFK1Ojq%2F%2BuwspZGQMOVsbk2D%2FoLtC4RYGE2jtDLjW%2FMQBWGRRgq4UluDDSk1B%2FWUGU&X-Amz-Signature=ace8a0b092b4b1f9ccae1659c4fa52848c44231598efa463b1a424c8bb02cba4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
