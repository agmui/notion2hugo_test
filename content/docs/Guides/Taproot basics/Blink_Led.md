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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466377AJJGP%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJv2Pru%2BwE7z8EL8a4BtrbzRUnoJmG5Mxj%2B2htB9wWwwIgGz2YV9tTXHJD66XFHroFYMAHTqBNGJQ8kNOUuPnOw1Iq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDHmfwdEej4erEdantircA7K4LJPwYqPm7RN8C7m8Qo1ZSVrYyV4yvuQtkm7OZ%2BhvQRARqHBWzyPvu75%2FfBsisv0tw40%2B5B9cc%2FRsLw6%2B8YHayn0BXM26Oc9eXyFWA9qiXIu1igEEV7ASbLVo0RzQzL1L3OtjAe1z3bWf8FVZnUQHpQitAQ09A03JE5fo%2Fde3LDrrJXbVx8QTmR7tYmLZ%2FTypzU%2FVzrIS7vxNZRJd3mV3hbwPKDuMqlzA83D5bPUyedEL0tiaDKMFb1cE1275xG4dqMNSl%2BsACkWJ7Xs6%2BpeaWt2X13RR2xbukcIPfDT7QA%2Bql204Lkc7eikRXXRiDIre0Z29azl21cEKb5DKuzaMElnLRRM1C4obNRFAv9W%2FZ9q8ynuYH%2BodlEnAmGduUNbg0DWrxxNFr8%2FUVAGTuhphzwuSYnFLHpHWtM%2BNTv2YSvsrIGoi%2BqHOH36nWAb9uhKeT60Abn5E3%2FK2WGVrJzMZCrNArAwGM5vPTSHyLbpcgMaUK75nmqL6oTtFhDyKNaf92ZxmjClWyd8S1eHQDUDCd2mpMGiUTTEu9xhbrh%2FiwiCe3l966U%2Frr6GAK2a0R1MrsrzxiUqJGtKGQ2an9hd%2BhqlamoQcgJLSQ1r4Odrdczy6atleO5KfRNS8MJro7cAGOqUBPFvmS5GVO9QbHhhDsJ0%2B6O9zPsxY%2B79PBwB0XZZEak%2FcJ6zJ85izHDpFxOIKK%2F3cHQ1X%2FLYqg2eNxN%2FZ1b8CnpqToCkBOsYkkacdZd7b6xkYaw%2BZFoA3WkTCiCcXkaUqu4bBTDY3iCTogM8Ecw1FO32knde4PwHAvfsYuL8SrEYa8%2FiVfdgyKMVx4w6YPeot8nrIR7KXCX40LBMuiCNzeNa95cnN&X-Amz-Signature=f3832f459f90245093134313602c0538197d086f6fb3ef9296f07942901ac8fe&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQNXYXIL%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T150921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2DfCXt1C9DJS0lrz6%2BDs4ZT6glDrIspcM97k76ZFdCwIhAMqZqQbhYXghkI9i7mmuhPND1SwtmE91PUu8pFAFL8puKv8DCGAQABoMNjM3NDIzMTgzODA1IgxM26OWcj97LfunHLEq3APKcvsb4xZkps%2FtL0k2SHw%2FmWPuraFSVpXWo2dMNqTdWLF4XX1BJnsE%2FXmYPV3tR77kfAaxfjNN8K2RS2qbT2E8VtgYl209J216JtUUN2KRDG7Q7VyfF7hgk4GNQxAEsWVhhE7h0vjXzdSrbcV7fAAH3J2gsmxESQKYxzo8gr%2FbFVS0ymt%2FqNVR1hu2buAraBnxPmz8Cxf98hl92cr%2B4hNI0t0SeBhU23Hx9wYc4rVJJAsDpVtgvHKCGiRj4rkJvK03Nclnzml076lf0WtoykC2NLLeGbitTIZjab%2F%2BqcbK0zNJqtSmnHC%2FcGRBQPdKtv9G0qQgMRSCsHdHOKO6wiCmb5PS58gO9pR8Ms9VB8kGXznpdscMwopXwSGehSRNn5xbhWB70SKACch%2FMpSybEaHbYGKU4gjDgrudtBVhgas95e4ru%2BN78rv0XbkPVNJWG18eK8Mzq4XtVsnk%2BtOB2GlbXn1Mv8pZXFG0w9rWADUtJNFUBeWVJtVf4X5rsTius4qBnNcBQJFqr%2BzZrXNf44hG8%2B5iuRViXxxr%2FxUvCg5HYa20k%2BXwa1OUd08tsNUPT8mJI2uawi8uaL31FydjM6otjkJkD1jR5Kv1hb5NnGSoDndXLDa2DPwVJ28YzDe5%2B3ABjqkAZiAtMuqe2nr%2Fr9GBXYaLeRrOFJ2tqq5x9VDCszduKI4RzCtNwW%2BHwPuzUUq3yyF0cG3LPHxsnOZ48Yt7scmGuDOWjrE66EnJSzLyIjVWRrIeTi6N1FKAuKBz8gYhb7MItlcRj6FtVS5%2FXiGe4nQM1QlkT79Xjx62qTZ52lArM%2FzyYKfhjN4FuLi6OwxuZwvBNhJinnMz2tyuwy%2BUfjqjaLECBNY&X-Amz-Signature=b9023068593c21509e80a53bf24037d12242a4371607c038e71d406eec45ac15&X-Amz-SignedHeaders=host&x-id=GetObject)

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
