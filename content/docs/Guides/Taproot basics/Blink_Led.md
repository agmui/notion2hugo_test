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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FU5O3NB%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T150948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIHKR6M02tX0Iqk75t8iOB1xUFCi2JOFRRojqcb1n88hPAiBIP4GI1SYJqyWti%2F6mwq%2FRoPL%2B7wl6jt504hen3HIg9Sr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMTbJ62%2F3zmxa9EMudKtwDPlLsTV6yTljxFy5expEhpS%2FuLBtglJIDBQCfUvV6oll7MQY7Ck4E%2F6y6dDMsD34nzSBV9WFnRQGWsakx7gaZAQvKW1dgzRJMGC1Yn3iRg%2BUEA8MQd3o6ePYbOT03NvmaJs7%2FoObeq%2F75hYrWP1ZxmfFTQoNCQwEn1s%2B27qg7YaBD25CHU7980fNybqahT9zH8%2B9yz2D8ylCVLiyJMNTonXL7lAZrDT%2FqPnCA1L9M2uKKGrU8FGu233PM3m6VgUQHWQXIBENdEHHKOy1OqvPtPNp%2BiWoldWbfiP0CombpNZDA7jB%2B7sl%2B11n8HRkvaArMnLrXZv5mHlfWR1h28pdWrXrL5HlzF9zTHPSugOBfnET8s7YQyG4owzW0sWl%2FVP7DH9yQEbMuUJq8SdmxpqYSqnbu7ddFGBSgprIITqDSe2umdWG7GUvAw1P880h%2FUGbU9vPESZK1o%2BppFlTQ8D8kwzgjsGbM3W9DlTMJhaHaN%2FDzXOYVDGqJBGG8LroVMJk6nputD9nUX6NLqVy8h3xFLIvc%2FP6XawRafum%2F3mEO1By6XSQ%2F1LjNLvdr4MdWegNwwEJHnWahxFdq7pIXxLuygOYPLPVBa7MNSF8vu6Ijq5C0kG13M5g95cx99Rowk93qwgY6pgFlEl3S1MBJLsnY3Nr3bZb9d%2BGOzDS3fFpDQGyggxYukAaBz5cF4WSDeHlgWhxIKQOHh8%2F8gzAJxBChs6s%2BKho5JD29GntLtscoPfJw%2FTPrhbcjFn3IglrqaL9w88LOBWVm7vn8M6k4MelWAYzJoyhs8lTqPClsKGnsimbkPJ1StEwh2s4ZnNLBYprOMf4J5Dqv1PNWZ7gHo4ZObyzN3qUlqhEsaYo6&X-Amz-Signature=197b6baf728f088adfbe8b22376327e75b45028e0730e4c86fd76de2e6b92e07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTROBYV6%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T150948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIDP%2BFfjUDKw8%2Fo2AUyxTBGGSGtQToZBiwNho139LEq82AiEAnABglUoZXKg%2FIUmaucUD22NKxOZXh3EQJHLL2xZVJkQq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDEyRZzehwBZrpMunJCrcA97bLBz60cR0L01GDxqBZus1c5EvILfOhaVR7A32Y7960cLpBwBsQdbH%2F9Mmfg5zdDn6UB4bBBfsBE5UYH2NCJQQS4uP6eXsx%2BfCGeAXspWhqphDansqICDSJXGm7RgyhNS8gEZJ78KLKdgRJNbXzXONWMPhuf11OayBnBfi9E%2Fj9MxUfLulu14PzY9JsaWaTFXdPco427OlrXRyJS1R4T844B2ajvZMwRt94wJWOaS9wmTa%2BjLa%2FEHlDcAP%2FowaWvr3Ghr%2FCShNuviEcmdq9K3KlFpnbanUwySQBdnkWzFWNbndwDQLLe0G1lXEXZ1Idt5YwWr3EBFQJ0My6JLQVH5qBz5CFyN%2BZSUFW4aQVre4HSrtqM5ugYT1nuc7lVI6tpKKV8IkGqDqhuIW%2By4W1jSv7%2BdC9YtTNaosbnM4nbYV3xQPjT21zTRPhu%2BcUmJfBr9JP6l1Zt01CawHmqOi9WlcFLrhg988vtyU3ibH5vzaDsBsC%2FhJY3I2QJgveVuCMWcqSs3hFaZKO0Lt013B4YrMXrsi3JqPbwrhuWuRO9jeD83Tz1LqhL4AVRxda1vBORHIvLH%2FOuzN7TAVJKBurED8xvc4xoPITfIxuKmNVJMNDZB57uVKag7ryLotMLbc6sIGOqUB26P2BgINQoVbPqyHjvmcpfkYWi5LA6CezuHw%2F%2Beg7eZzxS4eydIdDJFOqKS1ESiyaYifynz2zK2Pq5mQmMQmxD5xeLsPpe2Mx9A1fPPVC20VbDCQd5zxughpkU7D3whEy3BVlnJkj6JhowOquK%2BLgp64VkvjUn6%2FOc7UKrLnGaHkBCkPkUzg8rViNue2ZgscVPIw2pp%2Fe58kayVeIOIMH%2BfPmdiT&X-Amz-Signature=b2a1ca13ecc4988689affdea1c27a5ab27fc8cd1cb36429859f6d8f4ca85fe62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
