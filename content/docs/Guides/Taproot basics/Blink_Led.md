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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHG57DXO%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T081238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNFF8px3N2jDQ73jt6WAMXBC%2Fwq%2FRJmH0Vt92p7%2FAA0AiAKtDFTch3f9yc4FbXGJz61leB610DL0wBZ3HT65%2FhrjSqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2Im%2Fd%2B%2F%2B%2BiAsgHeAKtwDZ7C1l2qrpfubE3hUEkYPSVHjPm7pn%2FF3ZCbQmyYQ%2FQSX88uzopPIOw6g3VH4tjs4BUh%2BSY70yBCxRzhIIjPUhQ75Psmaz3cwCv6fq8r1LbqZzhAwkPcFocbZ6iforlMhQ86MDKF2xupvJcYGMPdXHCkJLTw%2B%2BQVDAI47CaeI0OMngHWNahX0V7KFqOCvzT5soRtEbCvLqKyDiMBzyPmpDppypSFKB6Cz0CKZBz5xnmEkAHV%2Fehw1QrJv6302atTtsMxj3%2FyrNuuxsh%2FC98bOS6jtxpytcgoGTeGfuMAc6oNbvAq7M9JrPgU7nX11zWK6mHtkvgAImt%2FF4zL3tVas2ncC%2F3KiVlpXKYJ651O%2Ff9GS%2FwUnSWViNbiJgacw85fuOp%2Fu4sbe0isUm%2F6IpwTL4Ccn7CFfwl29j%2FGvNcPHUVOtDsdoUSQtj3mS5l0jjjY5QNHZIoSE5pXceA7Mc8scPtCWvMMhI0B98ewcVmBZl9UkXt4xl0sNMmy5RQi6voVSrjOZG4e20y%2FJhD1C5dnkYBSZDkjK%2BSUZo6ozdvzqkNwE5QmjBc%2Fr26xBXwCZyU1ETUze1R6F36%2BjPqUD10s7zfiURc%2FhaCSH8s%2BHGb1rGI4stLWNe0EJisPNzRsw8v3fwQY6pgH2lHX4nFrgUC0tPJLz0v2uMYRFjhUyC%2BaTmWf1cCMqOqW5hS7rBXw6mzEAaSNEigSaKlv0YjBb4%2Fi7PwzmaKGtnEGpqUUtpS2FryRnqEf%2B9FPrg4flS9oI97qa0bYeuyNgSmoSD6DV3CNq8E60lSWCBGk%2BDxBmProPMLrlzN0G5Ltuu7tnz151P%2FqBetiTj5ueuUu3Ik0OIOgwllh4qoBM%2FjVtL4cq&X-Amz-Signature=be53d2b871bd630389b0f46d0e93933076f256ea47831ad8dd715d9bfbe8af11&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYFM35EC%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T081238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHT32yCeSPXBzNldWtsmpAuLkDhAeXOvLBT0gZx%2B8AixAiBiSARjzJpyEBrATNmTs5C1Ir%2BmPafAFNDHTHL998b1TyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAHAg%2BqyvXfWajCktKtwDduYsdb9DV9WIprvJwGni4vfjiWFmV5TUrHe3nHdCssWxHi9XUaX%2FBDgJeehxu6xs0T5EDd3FLF4bWdbvCqeoepmdb4X5HGpG7ubbLXVNTUyBsOYNFCeWHItZWtCIznl%2F37%2FCCcpEL%2FuO%2BZ7jq%2BVrhNw%2F5QNiPz4h9GzjSmDzF2gZMe2TVPpoSM5FZSa%2F7nHfEw%2BFMicuiUGDucl0%2FvaF%2BoO7%2BK8vt9qukwpVyYit4NZar%2Bk6KbCkY2BML6Izn9p37XDfoNXSuPIl5cMdD5%2FPwimV%2BG3n4grf6LllqWB78Ol%2FpQSW94aOr%2Bb9Riz1m844oboZYQ45cs%2BAFV0iGhfeo4tatAmymd1oun93klPpkMhTIPXovd4IItf7eV2dTEcAkkJF63y2Gl3HtZclAX5Bv3EMvNSjamlzmiQL9lSoLfZ%2F2UMkVrWCvFzlikdgWLmukIuJA73hF%2FrNIZFLUc%2BnEDN%2BnRncIxil93q%2BHLwPc8p5IDrv1J%2BWxdBzgBsVJ7dV9fvFgcTPUM5ULjWJT5i%2FwcvQmrr%2BqR3r68BanMQALytqXmB5u3HNH2U%2FezxNimx8t7wZZAG9dH2sIyuD6iVpp7gGP4woUpAs0UpOxLLQbfpkJZSd6ausuJ3UiWQwqKfgwQY6pgG6JXhXVqvtxc%2FM3Ktxr8dya8x%2F2cw3Lso8%2BRM7OGoxXxNyzXfIrxv74TXNUpo%2F6%2Fsfz9EsnfRo8mZkn10m77w%2BeEIam%2B7kNdItcKZTFI%2FPa6%2BbKzeznyZxLT7nxTjgr6kHJ5J47ai6Os%2F0HnKrDBDTZr4mdeGHLZE0WKJCwYfEOdfbR3dkVYg%2Bl1sAVGpmrLBbGzd6ZuXVYgkRt3EgDU7%2BfM0kHmN2&X-Amz-Signature=9dff3f87fd261c705ff2614c9f3df9d4b4344b7f2c6ac2d1c6062065e3aed8f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
