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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AJESSGU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQD4m5jteYLavCn6Aj0wp7z3vqpPyM8rP8zd1mnLajDg8wIgEgAZ2Qhb56GBSkLow8g5RB0ZitjV9i2BWuOql5a0moYq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOpc7GjkFlAO5PvCTSrcA6%2B3BMHeV8SC4oFGyrfgOFrtcPpXUj1Q7Zttcp2Qgot0LYCo6Ik%2FNLWhma4b04xEC3jSOM%2BlgiE6kKG3MIbtakqH4azFAeQubYLfdbCLpal%2FyM6UbB6ntJtlzPdh%2Fybio7qe6Vb3s2Sldg1CCL5ST6NCrRr0rjAuAjt80W4HhxBQNguP91IURNDKD56gVP9koA8b7WfnquVx7%2FgwJilwLL1db6yGYXpjG%2FCM5SiR8NAA8hdc3SVGuE%2FGfqD5582OSHt0zWb0lpVZhA%2BaZx0GXt8JO%2FViSNGyXLTXVBKWDYsBG2ZTbL4HKpdUvHWygc%2BMh1rDwX9m6BMRmGfubyjB57j7pdpph6kdpBOEFUHTkrlQxUyTO499cmUXyxkDTZ%2Ft4I%2BiMrqX9mPVhzet9eWcfsUnf9LueIRe%2BtlKsrh%2FtYzeoLb%2FBgNxamHIJ%2BFkPXgUqGvyPLlM4Ucn6R04SCGAVQWTcuPBNLksbv2nJmiTd5TYt%2BNVo5NXGkPlymN2soEKuV8pUjw%2BY3tSnXEf85gBHCcyuJyd7GhmjsaOnmO8O40Vp4JH5k9rnSx%2BrvPBsbpK2B%2F0WNV4jZgYLROujxLSvL59zT7tEKuGF10Q11u25f%2BYNkawb4OM%2BU6jXsafMKSvwcIGOqUBtN1zX7xYXJ6X9m2Xo89mhn8On8gPbgVFx5zrSXh9dAwhrdi9HuMUnw0TnxzQWC33ksgSlP6OeOnD1Lqb%2BIpnD%2F5%2B7TPUXllCwwA6zrnoG0Z7vjDN3OPhdOLFLIsDn2nnXVJpmcH59ZeICPBNex59OxioFCQ0465eXtkT1DzSHQ8wD721GtWe2QDbi%2Fudn%2B%2B3gNswEhW5xgU%2BxeD3vwrxllTyVwAR&X-Amz-Signature=e58ddf695aae15f6a1f59fc0a2a00b252830b6ab1167910525e886b390e6ca2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ARHVJDB%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIAUtOPdC2EjYZUyI%2B7gzai4Gqflm6dQlMePLkRO5F49KAiBOqFHrR8idbw9%2B6yKFu3Bi8MaTKPmTpAtkRjMJT%2B2qIyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMdIQ5%2B41dinVj4eruKtwDGT%2ByGQ0xCHbf0OnZEmTKb8muEzyWA2qYBklNUvEKnumkLm3KljA2gqljcMQA53B%2B61JHL5ukUu87CoS5sQc6Yt3%2BxGFvvnrhvW9GsSnJErOuVqBIg8pZellC6kPOMkqm5A4jS%2FWKl%2BTGTtg04DU2%2FPThJUjQtB0wzdG%2FlfNa3GjCzANj62MkPC9X%2BCuQiI9wULQMm4evxzB4FVb6LhEJgXxpSx30%2BKxxbaG7%2F7BG0jRvYSXQueyYFsKjcKNMFfCHXFkxRd3CnXCgFyNpSYkpGrO4NT9JqTFdhQ9rkClF4YktiqLb6ouwWHR4%2Bt6%2FOHFNmL0w%2BdsyqsYfG%2FyMuIcqoaXG4sE9ScA0RFvM4xFjNqWgRVt1LtNN4Gbe2CXNgzrI8JEhc2y8wiEXsIO8V5OnQRox7Od%2BPtHbIpTCQ4J6%2Fzin2j79H%2BZQMVVIXUp7XbCZk%2FZo5WNfEAoP5SepIg%2FhNmRmidrt1kOVLaL%2B3%2BremmPyO%2F7GXKCj87b2W0hMti9oCyiOuuGGQbuSdayD259u25cCuGMXu%2BJENX5lh%2B2l0crt5nEoLOQjn5TSlh8XoCWqn4L0GJjbRcQ%2FKdEqjUgXSlrFJnD8pnL9kJR%2FeHMBLUDGEaYFvwnMQ7ke3Low56%2FBwgY6pgG%2FpzORfhOPU1Y5zCwF2ZC7judEPD3Ebs8HjbU%2BxmxfI%2FMb5EK1NkEN%2B5%2FYcGSMk6G3E9W2SOaWrXIYVZO%2FFPp9NHs%2FkZxtdydFksAfLcZ2y7TbU2fM4DpTxleMihT2uJJb40Tdv4gJdpJTOzo9%2Fx4jS4V36FFF62DxkXTjigj44jM9ySU6cbyYiaQCMNIaxbFtdU63KBSA1JYKRqagFNnlo%2FZChUgs&X-Amz-Signature=cb79b68821903381b43e914fb6e6f40bf5328ea151ce68865ee56643d3eec87f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
