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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCCADFL%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICm8Amm6gZlg%2BRxHloFrHf30clOHmdSAzNOt49qsGA5eAiB3GbtgznNl%2F7uw%2F8eyHDy5o68elym%2BRiHsJdccl%2FAhXir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMJOxSVhRgHdLFGfTrKtwD8EOB8iu0WZEQLiuiaZ5n8rZdF0QawMBP5LdbrPIIQSob8DE5xd%2FPjX%2FMOvtS0bXgjhuKAqJsnA%2FISudjkeYwDg4urxuXaFpiKiv6fMgz7Qk1OjiziELigTJg51DlksQR3nDsqU7JqomvC9oXQfGo7nUyWKswE6hrkqoHv46b14tH%2BSjOJNJpXV4W2Kyd8co350m0KK5uFlVgtpMEsb9bVKCME2jt7qGKv7F7rzNd83sLibRWqqtjr86HC6HNKtCO0iks7iZFjQXSZpU5K5JgJTfVET7VC5bnAWCPULMzmsyhn1c6w22PZ2%2BzDopi6aNtUYV4tyAnYhuyDWFmfkLpgyaIlpcOQvczzST1bjl%2BpYMxdrG5UtCBYTNcUjOTkk%2BWTlSn0az%2Fqktf%2B2dBJSukI12seEU99HcuX2Ajxvriwa0g0HOXX%2FH9IFK05QY8seLbXNojPAgvbPHx6eb3NhUchOqe%2FX4wa9YVIsxDRHorYHmAqAO4XXYweGdYxDpqvpLaykeEP2YlBb3fhjY%2FnBrQwWnWhNjouPEeh%2BV5ctRxEnKoV%2FhtcmK6YlL6TZTvZS8REoiPC7zNwfaWFjs8ipAbQf2ASy4X45Atd6ujX%2Fu2IcGTWgS5ImluMrEYOS8wx4%2BgwQY6pgFxJ7QteyvlM6QKlSd2lIZyGCtlum%2FgOZX8QN6Gu2PNdvSvif%2FqORP%2BDC4rYLUFr%2BwiFpuI4rfF1wHqcmi9mbWzryoOyOwoxEdLZ7djvmqt8iHZmUjx%2FMNr0JVIWWqLIuAFt60FtHcHIlfYBpzI8q%2Bkst9n6Wl8VIL8JKLhOWRBWolgL6js1Nk1svS2qNJGQgYsWkbOf6G0newk3mZiFzvw9ipHQCA6&X-Amz-Signature=0a017f476186325fece808b103f5c39d694c89cf774391000741e57109cf158c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653CHGT2T%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJcm9FT%2FomFa4oxtNfpUmwtsGVBtRA1lyE6QoagBWxCAIgfraWZtvw0u8tiJviSZuFjuHR9b0WY5HOZlL%2F2mbq9Mkq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDN5cYoKH3xtOSp%2B5USrcA9p4jWXOtICUUASqd9sNeVMh4kT7r1RMqda8imR9j70ugK3BjAXg0WVlF3KHJ%2BvvEEOeASe6MOSNcvTcyfX8pT7kxiFvGWiMV62zw6PppPcyGFHSIop8MZ%2FzCr2jHr5cz4McdS0v8ln21EJa5k5%2Bz%2F1baZf%2F7Xhuo2J9xP4Tobwhn%2BsdqKUFXrHmg4H7rWxDU48GLUFEiz%2FCIdrf9grb1e3Wv5hyUgan5LfxXesGiH%2Fp%2BzAZO11DhuXsB0THdILmLQM0tQyPSF61VLSqwkmR6JDx2RPhCKEGmIHVlbL9kEKcJSgK9ufkSLHASmwYl%2B%2BrWl%2BorU64zUPLm02%2Fots6k0X%2B5ef%2FWdTIcX9hEQ%2BwN5hZWFB553I%2BLVAPAPxbgDNo0y%2FnL1lZrfGC1jY1ioGFCrkjqIAVKraiWArW%2Bh55LfzXI2XXBGG2jVKpBgg9N3my%2BCm4UHqK6ZXBCgPCsgon19giPQEXZDUrYrh8liWA847Av%2FsTzMVtPtGSvOe7sxb0dyldEyT9V1jUzJLflh4Nl1aRg5VAXi1%2FpKilQL7G5alsX3VzzYxIKHEhR6lPFyFIom2U%2F407E%2FJlM%2FGTxtSo6dz%2FEXpo9TT1c%2BqubCWaoXQSTnoewkf8%2FIY7AzLSMMqQoMEGOqUB9mqUZiGFQO5UpkP7l05ArPfLIZp2TA0QxfCCQZPsTKfQXub1UkXzY4Ut%2FcE90Z4yal99WGepAX3p1jFpcsjX4xodpopFArMfz0smHJsa83EcNl2xxMlY4kTSZd%2BGVwCR9cPKUgVgM3xV0el9ejg4RIlgYi4bQd6A5XBmiKqwUcPByov5Fjqeu8KSSbYxbz5MB%2FHUIE%2F7nFxOPpRhj3IY6xH%2BDg4a&X-Amz-Signature=32b0538718936787498d79cf7b42758150e5e6b38ecdc99f4bb6fd9bc9b855b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
