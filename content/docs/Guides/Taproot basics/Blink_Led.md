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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXS5V5RC%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDkHH4RleA8DZPd5QiiwJCXqFIaWK%2FvLs4QD2h9ZKWXvAIhANYCD0Oz5NYdyb98STPtoHEKKHov1ojJbEQUBUMMpN0bKv8DCCAQABoMNjM3NDIzMTgzODA1IgzH3KOKwaYss80AT2Iq3AOXlnjOzBKgUbj8wh9y3N9vbQbA2dJZJt%2BxFbvRtmgeEkZUPnvC4ua9sTs6FnN%2Br12ct%2FtzgUijQlvn2eT2Bp%2FZpj4QqTYoO8m58yGsslIS%2BWjZryQps8i8mMd7Ajjlw%2Bs7CNkvTZEvXdEZ6GRIEb2vGMRxHSoE9Gs4D6PUf13kIMt77SBvNNFNC8HIRDVIq2vszByGArHqHVYnHrOyRORETZI1bb%2FwhShL3xl6zPLUoLKSsR6o%2BVzNrtRRNr1hc4Dk9LedmuIS5cCCMLzx1Xfivt283xWosQHwifenpt5y9iVPAd%2BogkNzQdTCcRuFgSEiW8mNDn8AOOAfHngz6yizyNvtPpLtzM%2FfOrHNcf3MlkCwxLxTrOcU3wSMbZ1T5OKjJsqI3HYr%2BklAT9O8KghtS2%2BvYiP1Rz70WKS80a8HrPSLmm3jlHCSOd5PTq8Ug4C3YGF0Ug6KNE03p79e10ttRHLAqzGSFAHVj8I7VqbPOmBBcHGfiUKWgqkXTzYWCTeShzUMvPyjuGtUeA4cWrSWfSMY3OQ%2F38AqD%2FMfunHdw1GSk6RExXq8ggb3q9UZbnMRNiQa2Zr%2F66BjV2kDasy1OdPvl2FEctexfKEW2hadZ%2BZXnFi%2Bl4%2FHhh0kQTDGuavHBjqkAbKGLOedBAtq0OopfXfqrUnKJdotBLGhlXD7sCUnELauhSeVYjaLtrZ1s2KemkUltV5mdovH6Rb7CxnNUPs0LHoa8NcdQEk5VOWpEhQH7BJzMM8Dj3f8Te5UbkOxD04vrJuN%2BNpCIrVqiStZFXYxi0YC6%2FN44Mfje24XA4M0L9WoMkhd3WWulz0D4UdSQJ8soUsGv5LcRbcw2m5JKvESNNNnl7b1&X-Amz-Signature=625a84315882cce1e89447a62ea0d19bc7e1f78b26fbfe6975202cbb27e7d6a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGXUNVLP%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIGP89WRzLas8ylx3OMfiZeP8YDQ%2BZy%2BO473bQWvOPMRfAiA4WX%2FdlnqfVHuaSn%2FwcjYU9H3OGuUMcRc715%2FpuusLXyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM9oWL%2FvSANqLP6tQWKtwDFcPwCflo8VJVCmPrkibQVK5bFIKk1Htn51I8u0zBObEIR4fUDFnKpCh452B7hKwitKvNj70asUyhLQ84NexQ2XztZ08%2FDc1EARAvlB3AaN%2BWNBjfADy4QpRLiJA%2FGWUJZKJYeTbRXGceK4Pk9vUDKNo4SYfEvnUdKwEYQ0Gz0R9A6j%2B4hAZnB87Tkz0j7Uy5rY5kEX4sPaqFD%2FR1d10z2vZI4OwerNrndBDTO5BflWfIHoYNC9xZ0AFCg8VJtFMp1zWx0Jijig2251ZYBTtFKcpgLSseNGvCw28Sxm0Y4SpPI3U0z7Ui4N8KrXoYk80F5Vzg2YRoEFobmorV0LOpzf%2FYE%2B5s5ReBMxiVywvn7HKVDiFxls08OFWgT3DYBDJtYDymyNHLPBsQbkuuAfvYVNfDGZfK5jrIE%2BnQj5GahsVnb5pQdRUFLQBsI9pobDGt3w2l4Am9hlpw%2BluVM1dc0ztyjZytSFBYZG11cIVPRfX9v7s9A5%2FHrCDSgr%2FZEhdZOHm1OJzstnGxfm5vjgM0lG6HWZeikPOkjPrYl%2FH2TnUaehyrOAS5f4oKaCnQELOCilM1FRBco0DmPzQzJAS0pDua3kY9PurllOKNa4jdlPHK3ppwiBBMUNii4vgwuLirxwY6pgFWhl1ijVwGH3%2B6FX%2FhBs9AXQ0ivU%2FGH23m01suwMkmH8Tskjgt4St1B9dt36RM7y%2FZnFwoG5p%2FhKK98wsQDIp5l1XKhEBr5e0wz4fgwJY8kHsTkSkhWx%2FfB0icn%2BGJ2OfnV30CjM3%2F4fnwUbkbHDMHge5CNLjBGjcmWr2%2BNh9PmUMBkjWV1l1nS2Ber433CumWn3xbOxesDqS7spmdc1QnoG3127n%2F&X-Amz-Signature=a434c176f0bca38a74861687d843e85d5deea39f03e926db7205f392cfbae77e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
