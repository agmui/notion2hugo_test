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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROMJWICC%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCzvRPQ%2FsAg1MuGjt78r7KR%2F%2BlHE1DXdrDNdqPIdRQMiwIhAM6czT8c560l0CZpE0Uhrml7H0WSG8FS%2FMOgSBF6fq3%2BKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyS5blZ3LEbge8ebG4q3AMMlU0O1QS9CsJqDlaLk8P0k0qLN4yzsveXy%2FsH1%2FPspxfSpcLjzj3sLSNBjDm4Mv%2ByYo4po3Jp71MmNDsSiS5a2lefZrol3Dvh%2F2DJRXlVlK9ZJiPux6DIOz8ZaNhVQqL0lr49F28nzfWPehXTiCM9RCH6r9fqysOkZuNqhgoCGd0OlRIDsxixKGBM8gSyeQCumjGG9ivf1DHNDWlnrCDo34ChLAzxsIhIYDpmVd7eZBagX4cdhseo7TVLP%2BZP%2BsyHbvtlwNvgufBvX08qPbjHHrhYDUQfoeQK70cVGVRe2lGPY%2FlL9TqybDPnvf9EpcENPKYOKShhDy9hAMNi3vlKQ%2F1IIyDHIfefCKYufY1ngfIOgrgNp4tMYvn0N2xQPGhdrIweQGfw2hzpaKn0ZrZhgIlh07P3HrWCvkE87dgVyntCPO4kQfYsqk6LTCVHgn4h%2FBQkMWVgNx7szX0%2B3mAVQKdh%2Fcz4ysnNx%2F5T69v7l9ux1A%2BTstzcykisS274e3Su2S6P%2BSziuPkSABdmYhm387myQi8kl8HYObUAJe7kaMrHLmSplnV4S7j%2B5mldXFfdVZPa%2Bh2ntHPDTddNxwjSizSBVf%2F7XYSUIXOMddCHBRDpkAmEhdEwLN5G9DCp4bzBBjqkAUyo37uDUUiELmWg5N3iqym0dLYRW6zaUvvgde9vkjHvaq8wBFvJug73zOAQu%2Fy6qG67bl9JNUvkbALYEyxOyP9gpPACYkjTHzdhqd5qtDLf1760yes4YRxUk6j3Ldu3qVkOdy0O8yGjZ1FymbokBEtimdTSotaQ2RftfjEvcliS3EBOR%2BsVw0FcCe4SsSaWkagkd%2BARwmeCOp14uMPn8q%2BIXFgt&X-Amz-Signature=7938840ef8544d3da9f910ce8526e251f344cc440b910188abd96327469e9ba4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4YIRDMK%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDLU48eJ8MKHGtpmNjElrjXdOsYEDf%2FTHu%2BP1GENRJxiAiB%2BCsLIn3thUKydpEczvRpKMNbwVJBReVGHqHj1L4zp%2FiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6OOoYTPIqaijpCfBKtwD0fB6vH9xHIBDYz1BlsmD1mOqyiByWoXtuQ6P%2Befj0W87jXS62nZ6Ub0MQcESEPWxfG9qfpfc7kmEusnwiw3wXhh008um0Owvx%2Foz%2BqRjrzG4kkN7KWZRIZbEyylfPxJYARgJEvmFUHP4vnjbwrNDFhdNg4SEQIqR822IHbm%2F2smXChPO%2FxDQGN%2BQUUKV0KgGZJLgxHv%2B3fqMHhCTd%2F5BixDQQbMCwUjuf2BuVi%2F2d8RsKappMM9ZwTJsu0Zm03OA9UHztC8TqN5jEBp3PsbcA6%2FMZe%2FZpKnxb229AvXs8j%2BDsKI8wr5%2FMdLuXwwRgfgtw12RriaSHoNgo7EpBGAXNIUrZgqAPCT4DKYSOND9wdd8w89LmJVO60BtRfFFG34oZJNIZdKCWo1jFrGsbT8oK2alEwje8NmlaovmF3z7%2FcOPV6vtt3NvuaGCTb9tAPTnaK3CNxZbc0fuIteDVjOye8qi1zqxflz%2B0QDhm1Tiv8WQ4N8%2FdbUu7IO1PIYqCd9IX7RM7o5c8RA03dTzIrh7Qcmcq%2F7ag2BSBZMOaFGkkWGF8wjbHzlrAAZ8DnocEMoPpxcD81aev57wW8b%2BV44RDhLeecOqD4OnZpgr6BZbC0uZ2bNg0ugebPHGoqgwheG8wQY6pgHr%2FotAsGx3qP%2FuOoLb0R49TPIOpKAllzKJOroc6sFjE85ivGFt8e8Um5QHdmvgPh7QDg4TC%2FqOmp8eD4Fey7SYpFGfKzBOjmR6PQdXTtaEvZ6EJ7H8cDih7s71BkdndaO2GS%2BFylIHqcjdxXRoNOGtOR2MYd0d4qIOTHuPwzT5lbe4M2gOU5MMVly05ScwpBPgVoo5nJ%2BcrolGTP01YzQIxKRpdQv8&X-Amz-Signature=c3fddab757c31fcfcb75a4f2ba42caf80b957a0098c14ae71fc8bbd567a5d67e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
