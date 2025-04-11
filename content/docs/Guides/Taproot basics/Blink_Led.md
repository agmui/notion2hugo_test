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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2KNUEWZ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T090859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCICBFIINt5iVMm%2BV3jt4rSZ%2By6jXUFpNVUxZxxUdyhagsAiB%2BJPAcwrVehtN1ed%2BfXGrbBXKDffZ2kTlVfLIhzqYm2CqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEgv0g6Th0HaZtQGwKtwD2DSMcoj2YjRh4HsdAUIPmdeeRLXDhg2a8TaxyNMET9gOcoqMZhBlSWdnMWQyEBRyivNyaMkH0KM0Y%2BVD8a9qa8tn4kWj3fmjoDHYQTd9LKid%2BAEO04OmjdQb%2F5%2BO3XqK0erwJs4Hwpi1AFn9QNiizY85aINQhllrXMNxyS%2Fe5RGo4BeTyjkfhPWPuyU5hg22XscRDbL6jlEkbbF1RM7uJKL%2FxN185Nhc4KGnf4cRbE4w7hDvzYWNAVwXrdoVaNe4OwlfjBkUh2l7VOGrMdhHnyGS2L6TNvhTg4Io9W64cZVeYgmRi3OfWIceuWNngRLrog2q1psUGcNf99Ki0yRJWqFsBZisfLTuPq%2BoPe5hhx5TAsZ5lZ2oOBii3SXEnsTxGGAUwm8xldbw10AFTxpGUzy%2BqjA3JqMOcdDGUxeOWOgPByhOdYMf%2Bwy%2BO9oz6R9QfJPXs%2FcthGe4pX1WL4XFtxdGVem7Diwkv%2F8JbbiGTVMiezyrYSYd4wjm5oaGqaEtAZlG6xpFER%2BBSHpYhGun3OxstF3bfVPPO%2BYrL3lvQ6f0wYWDCOE47bpCyhro3WjdV808r04t281TUXlCdo%2FvmP10eO0pveYNTpH5QSHRk%2FtKOeExjVYqSj0PasUw4bLjvwY6pgHkp202xGoBhuIGz1NafryqHt7udWqYFEigg1u93LtoTvcFufjKOF%2Bw82Vc%2BtJ9%2BIbrelakEjXvvbDUYRbVYqOkdKfbmx%2BPsX7qbnj9uGh47gQfoJAvHZAeDij4i%2B4vz8islXgj3LgiSKTOBAmskTO3xF841gCwy2dUS46oJLDKQKvcfMyhi5EXU8Ar2cCPCWXdgfwN0Jx54VEaBg63yyFYBvGPyNhZ&X-Amz-Signature=cd79534bd69eb4db415bcf3c5a7fa230150363960736e200c5e00ab9820b6a7e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R56A35R3%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T090859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIHfhE0Y6n66BuB9rRuLVSMf2baI1HztoPoQNfaefs8b3AiA3hJTCwogP3dGNLZACfBLrQexlVaMfimEyIayyRjK4GiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMENPgzevmQRYErrpfKtwDe9wjoXkv0V0QQWZecc6ydsFP9Ef%2F28C1wV3ZPxjmtI040t59FTySB4EgQ6%2Bi7AsCw8BkOL3nUvGGgfcrkZNoAAVJyRd7sSrbh%2FxnTXNFCDYrFxxn8j29YawZVDxigUCFqBX36G8sh6VQcfju1yLb9Zmyzj0KfZTLdKYYKHKM8sptM%2FlVQ5M05yrqS97zwveR2ielXq5eecHmodk2y%2FgWEEK4tCEn7oIXA7zMyv77kUAHEVwEisjV%2BOh0CrrWpxNeXV34mWR%2B6D96EC3j2owncqx1DtZaLvO%2F028bgNl8X3PWNH6XZbQrrzaXEzxk454IW1d7f96NvJZ2FpXhWY5fPoPn6eqKHzfxVgYxUeUqQXa%2BP%2FCkCXtrjrBYi8xjcnDuJXUgINd9jPUJwQqTyvSt%2FvyfsHaklbs083chA3OR4ZV15mZxjcz1cv6XZtafI1VhRU5aiZztBhMX9tHGXjLqJp1nvnaQ%2FUHlakcJoExuDiInGH0Oj9qaMA9T2X8ZBWxXB1YDhUfsy0pbfj7xh4%2FITL4B6l9Hxdjx3FjoViCnsQYvo5aQ63FomRhrOpegq58YPIgJlrPTEvvLMB2GIESKCThKrk2tgmcNpyBzaaiDhy93D3hBMN3DSWke6cIw2rLjvwY6pgHSWxacaVQ6przNlMUL%2FL2Qapf6mta17RQgN%2BkGkoMPAFrjF3auEhdO%2BtEzEZjI%2F7og8ujy2Ds1hdL9K8P23nU%2B4QmsW%2FsKQKA3OKWsTXomX4w9u%2B79FMvlPkmjcAqcb7NKmrA0ot9x0hKG2GFfRr6hj0Pl1UE4LmAyRztP36Pd0G8Xf3eH1zOFL%2FedYwzlG6iuAPLlSp3Q7OD5JFFiPUfMsMd8G8YO&X-Amz-Signature=bd64e8182804accb7cdcbeedf1cc26b1ae3b0789a658ad62c74d9935333e23c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
