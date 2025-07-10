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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PS5HDHW%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T171139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpegv5wIQjrbDnBVsV9ZG2vgf1qbQzO0xzS%2Bqt03Mx4AiB3wuNX28pRJsrQNeoEqLX9ld47HLIcyxjIGtZcyQsswSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx0tzgVkQeD4Y%2F5e6KtwDzKAd6d5Ypb1qn6IBbr4uyF8JFnePXzUZCsrG%2FLndw9Y9x2dDfvj0y8LNbkJLyHC9mkB%2BUykdSakTA8d4ZUutwWyh97JLCwRCgLkN6x9xP8zQy01dDzlKgxQy%2BpHRpZWIO3%2BohHMw7w7awyiMb2%2FfRXzEpNpYfTMMqWLbPGEYXaA0YD5pFFUj49oh8fPXzk1jJ5HQUrWo2%2FRjcWuG74K%2FZYgD5upgbbhx%2Ba3jDR4l7TxyjqtWYUWQA5iIoLwC0uiRJZIERSmnTZLzPzMEwB6vyMv90XnWLRO5KeaI%2FWiQNnygfESzx8E5D%2Fe%2F2oF6CKvnmgllQODwGLZXXDk%2BxL7XTIIshgWnaAvhvVRWzgl3dN101icCtc0%2F1EKsVryoVbXy4Em20WqJ6%2FiC2mRjCO%2Fxh%2BOj6RmTWVkmhXmgMck4K0WbE6aEgguanFtu8MY%2BOE6rtN%2B4vkzjGQB2b2lSSauVjdN37hN0jsg7k5O6wljzEDNn1YHeve4Q2YCPBkIPdTonULYslDeRL%2BhgC4pqyUSAh74N8yO%2BiAEpfn9V2WHTI3tzWK30DjVS2W4L97M033uhMxadcxQGEjQNKG%2B1c6%2FtGJf5OkDTrFK6N4o6aHgG9F9MmYlXHBFrGMOPE3ow%2BdC%2FwwY6pgFN73E5XhZxaFVfy%2Bdugb3fjISfo5U2Fw10t7bFFzJTYC2iuU1W7uGxVNLsnlPKWZsTM%2FHVD5h5GIjZKQ6vK1izF8aMjUTEyhMGA1%2FtZnvi5sXd6S%2FEpPqB0N0%2FoGQsVSpJifsctwtA3203%2FrEV94iwGTiuLmiQw6Cn8OjvOpi730OHZRd1mPmaSD8N3k6iygcMQitHKTpLb6NcLqLSvTzzsUDRrIto&X-Amz-Signature=a704fda11e2f94834fa24c5703d2e30ef2bebaf63b714d82c5ffd5a79f9b417b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UICZF3LM%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T171140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5O2vpWxcrZlcXHdwfPA3TJLcYui7WIZHA0irI7SVkngIhAOTS0PUSPS%2FaN7ZgiO%2FZOSHNoxehEnl2RnDQ8MDl6GoXKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsXIwJcbLM9uUmbowq3AMiyP77qbGmnhicD5bm0zSkxGLcR89xuY1oBp9VsbpqVewl8kj2rhtF9S8%2FBGXWVNEkoby9sdDhUBbsixggQyk6kuz9VMiEZHh8qXV5GrF6Z9ogF3vg51V7gm3FN6e6SjwQqzC%2F1JvMV1IyrKTT33DyJSrnRbukfYqmPk3HS8s8MRxH1UEinpDE1bxkcsyb5DJ2wxMxnSTYZN8RYKBhZJJ1lnK6mUgBlalgH1VPevqp%2Fb9nAuu8Y%2FUgfS%2FCNFoFe8yZSSMO6R2YiYWlJ0arSseWFA7QsosLSAloDYFp06QP%2BWisXL0I2jVeyI5CeW9nbWObYrzv%2FMOOcO24EMBa5sL8AVsEEv1qwYCucMCbxsfaUy0JX4Ar%2Fa0IuqwjcEYLpvARNaQJU2RfPnJkISVojUOxN09HCv4ji%2Bh%2FA436ZkPsvC4855cjwbMCODRvud%2F%2BY6FnD1Bd2FLNNCB9p7%2BX%2FgsEMqE3%2Ffl2UnQw538ZzlcraAFZPymwqrtEriOmipC74BpV1pAQr%2FQl4l%2Fi9zlyYV2VMI4jvYF38u44B0YC2U%2BG%2Fy7NnSrmjo3St4mLf210lPxgAtfEyPTRx0BzyL0kbKsUBbXKnB16adiPbzjiKhZjVUCNYwB8VRZCSx%2FrMjCn0b%2FDBjqkARvaL1FLm%2BPHBki%2B5pVCXH77LGeghDJcd1ksYPqe7MwxGU9eT5BSE0NIZFnEnA9QCGb7w3XY8pBU%2B2nE6XksE%2FujKawkN8Y0cvpt6Js6oC%2FhwrNjOE6kI7jY6cjCHSTiyLuhDsGCG54yo285%2BgXtVmCuQyZIMTWMMvfpw%2Brydk7hciLse3MeSP%2BCHfl%2FoTALe7ja4hqVFjTvTbMm838SzenW6OE1&X-Amz-Signature=c9fb14d3cbef89f6b87a8a1f012588b0b13c6db0395924a0257b1e15e0a4fb28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
