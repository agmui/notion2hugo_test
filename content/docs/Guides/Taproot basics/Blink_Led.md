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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOAHPZCJ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9efIFEnyaFWjxBjcFxQb4ZNmJufo1FBWaIsAf8Ie10AiEA8JmVXZyc%2BGdVprLN5IGyT%2FJWFgPQEePSx0oB28tZVZ0q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDD8pnEDkJyFgcmG7sircAzy50GE6UGavnS9RlVx1D2CZHB%2BfdpA61eroN1HfMKBnrzMjQWWfqlHmkRoEYM0UbAyxAZf3DfRv5ihbuU9ol82wvMq8H3RscBTNEUwumY1IDOpQkSqClD4%2B4FiKJAgzVPnFomkz91MyDIUFb4Bxyn%2FR5ajtSTuthDiu%2FAd%2FsP0dJ4q7GfXaPTrXwjz%2BQfwiP95LJbVAGVZ5zCvMBQVlunIbC2EUVlU8zIxc4jVTP%2BAz%2FXEoKKyxo4PnTD0vEy%2FhC5BFdnqNMUVw8czpTwElAvUqEf2QeIsLwSSLQ0R%2BTTxjnqKIPY5T2D0c786q%2FAa6cesSkETB7%2BAqkRQ5qvOH%2BO51F%2BlVPyHP3%2BiehwSyDGbfCQ5L0WvE16E9Se8w0GQZfKEvTJsV%2BiY991v%2BUktBjAMXqIBgUiZFFNXgZFPO2Mn6JN4pfIM2I%2FxRHrFcXZ7XVJcfCvwzDN4nebwSECZK6mbGzOcowbcHcUHby2WYJl38VdTqN6XvcCNF7iEBHKmnZn6hcmsrUvoTdfIKY0K5%2BUOTm5Bbf1SimTQhDdMK7kyTVentfIbatEwhpo4hOHAoAikWC3os25m4BF%2BOTGqPrA%2F4Le1oMNstxzUB1bBNQcsUe9efP7EF5dUtnIa2MMLO374GOqUByGMwTN3C6NHQU7eG8C3s%2F%2B2Uwo0vDbBVTyIRdk1PoLCOzdBYPuISnskqL36Do7tcjs9X3TMY7R%2B%2B7j5%2FAmt%2FDvfk2dFfVzI%2FUL%2Bj24tBQE3A0O5UyIGjUSI2A8amGmoACBjAoDVEs2%2BzVLaenWxMGrOXB83N2H2ggsLRz8QDpBRmve8cRPisjEEomPR5Xjq654Fohr6xZ23CLeLokl%2FcF4fV58Xe&X-Amz-Signature=fedeeb01c0db13791ca92948a81dd85556ffdb1cb005523a08a0801aadfee13c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBWUG7RT%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTgcc6NRb6j2DgZ5jW2HhkKM46561MV6naDhB08mcbsAiAo3qN9lAKsPH4zbeFAOu%2B6Hbz2QZSj1H11999gLBIGeSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMmBxE%2FLtrNiXHAHhfKtwDjVM%2FerX0KfsEuyTpMFeRbZwwd3h%2Fze5W8QpHcdUEoBz1tjqu%2B2v%2BiWDD8MbO13VH5jepLcjBW1LaHILlvgGfClqcyHkXvrbLKp%2FWIMv2qBbM7UHxTKg2bSmW9ImuuD9lGBaHvDJ4J4ZgZp4dRLMn8FQg8c3tcodqOB9Obgb4Jth1UZolJxnSrfxvgQwBg3LckVNY9o2OeVdIcNnsZ86hgGGHvW0FRD25Uw1tLiPJIwBOzFZV2SEm9lqlL4T38uCxzd3gaeuz3LRSswe64AT5dlBbC24kpyFV0oFuxKP3pDh8Qu0Dt9vz1yGHco1AKfFNAur90vr99lpf7orZx294eQYPWl%2F8aPha6XzEsk2an3uSnKnMOMMi80pW6Sz1WT52NTJwvucOX3T6%2FNs%2BVB2Aomvxkr0WBw%2FXuoEH%2FIZeQZZQLNeKM0Na61SyM2XBZDBp8%2FX2ciwVLEe%2FfBG7eeTwSyw2ldboMCxJ4iqKx5ao48r5jdyhwOniydoRfTQdFiZ4Zu2MxN5cI%2FYWmq5w7UMWUyqeaClp%2BSyUv8eZXZVvfsJWLkQuBmhH1f0LIFmNsNtCAz3fZ%2BLQrbNhRkaG3kmHGTH%2BPcDHyG5Yd6Z%2F9BRodL4wnop9y5cDOXjvjycwos7fvgY6pgG510hedwttOIlLulbSauqlsGxPzlwCp%2F2SVIWHTzKY4%2Bk%2Fh5zk2kbPnSy1m0OhAOX7HCt4gzPC%2Ff4BjQb8fOZLBbquAl3z58kNRGwkwstpWoNhc2rK03uyK%2FdJ0x4dl7Giv5fl0ETfAV9R6jFcIOx2A8DxicEh33j4q%2BNss%2BCG8ERaLceDNAW6%2BBFrYDy%2FwoUgEHGNp1CAfsc1R58WYm94Th5KAv3F&X-Amz-Signature=5ccfccfab1ed629591f7ed0da118badaed6cbfc789532b8ef666e63a977226e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
