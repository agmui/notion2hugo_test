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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGBJ2MHX%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIqqPOsa758h8%2FoLeSOz4QwgSZ1cKZ4PvOwo7uqP5L%2FAIgchTEXASdMVVhhDKLyyDlMi1rm1gg0ZlQTzwqZefE3n8q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIX4eGdtaYYBgkgLWircA07sw9IOEz%2BwMHBjuuyME%2FeTJDWxiH2uEMj1st%2FV4PBP2CnRe1mj1Pg0cSv9y5OB1es6niQ93Llr%2BqO3UIkQ%2Fy3%2FbleWVswV8JsD8aNn4Pf26Y81y4tuSZEuFeCM4e27fUDtaqVMBEiPTVK%2BBwNDAQMhRlgFYs4ZgtRfn%2FnpxdQ%2F%2BJzilgG2RJIO2HBiulXZlmdfG23euTQ%2BUXzeweQhzjBsT%2BU7tQwLmOYvgEsDOOGQMDY4hziMNbynyDChBb8gpx13Dt7F22wCOnuwDaVe0imXcnFIVqzBGD1vgWdjQm3JDjBJudg6wdwBkawdcmh3DPvJvpf%2BAYtcFLwsbivB1d9AqPIlB8eYsn8c3yjfvwtaP0bplmta1U7SM1BWaHvIoVZu0dhsiOn%2B5lVbeqAyZFdv3btRDZLvfttc%2Fvg4WzRhVoF2i0AQ%2BGkMmSljmh6nDSea3gweLUCDtK7cDp5qXzDNLGKTJb5k%2BFmkFwi7ZpyebN65JVoJdFvbcVmUGNnpG51Nc%2BkiNdxvrVekIrd3oM1fzq9sf2RPm8oNemckX49w1v0k5D0ZdkNzB9PuOM6VCLM5Z7aQCk9wiV1czlzTaokCd2RvPvPjdTt5zLEgnHOVgq%2BPVxXxeO0%2BOnY%2FMIjwtsQGOqUBRRlvTV1Zc5nE%2BaLlTFg%2BCWhepB%2FX8DIsTch7eGGjqbDVQeg8p4nFgOTlj0H32%2Fnj9zixluf4ABrIGZzz1OEJ9pCLliUCNXsTryZw4CEbXEMPLzDSoql%2BTDeh5H2Xc%2FUY2jEM1JBg3VMgHQeWjCHxe%2FedDsHlICvzXVuazf%2FpceS6XTCy2nUYOd7BqZny4lW7a6%2Bh12JEY%2Frm2OSwvfMESSibXYnU&X-Amz-Signature=747ac8035bac0da32594e2b9efc65b748737851f11581f096f8874863dd51537&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLF65JE2%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICFzZ%2FrAAkU6qWOezIGMqpQm8CEMFYmjs6hNY6jw1ekxAiA92gZpKKBqrsz1bP%2BeHylKlAaUupalfSYKQBn%2F9A4S2yr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMs3wfFniN3%2Faw8gcGKtwDe2u9Xm1pydaXoS9h3MeWgJEfxiuY0Vy1Tjjnxdpemy3YJD8nuMNsstrU2%2B3awRL%2BcJ%2FT9LUwx%2BI08A9C7nBIxME5odErLC9JSpI6b1M7hiYaB9f74x9dCY9S8pY1JnclWlYYW5r1nbapXefjNS8fnW2dUTbOBDh7IOcTiYj64B0BWUb%2F2Ref1YNgfnJGaEu2%2ByNOCcrGtzsvn5lHE0YKptnscEbvyd3buJWHXHRxhlxcyl4FEsIVQLw3V6qui%2F%2Fi0N8x7%2FwL%2BgZGBMUmI9fQbJpXeNh9I22EzTSPDG3S%2BT49c5stGkr5bEm%2FsFw4fGoV2DGMzraxUJU2oLKEaeUJuIjvzZmkY6DrA98IrUNoEbURlFuqlGCZT6vqWvDuvlk1WO6Y2uctHV8StpJgt%2BBUV6GbnbBpj%2FekWNDMVnYklMEwUjcNb%2BnNVDM3kmIK2sWXwI6qYoIxhfbe5hggIlCn8ALf2cRX%2BgqHzgd%2BqjYngpm%2BvKIrZk1P75bfeei8nXpwQxkLF789tPJMswVo1NBuNZgtx1H6xVlHR%2BWPcqoXeF9gAv68mBZGTBZXkdpfLA91dYKIsnQykwO6rAYiDlv1197b5jh9I7%2BzGF%2F1YLvee5PcCj9NEuqNC%2BVLrUAw4%2B%2B2xAY6pgFjiNZhNbKAMai2VWBMsRjdGlHMi5nsr4J1ji%2Fo0t67AqZ7gAzO1bP%2Bnqg9X2XWZQ%2F0uVOVM9BW1xPXMIcHeUB7MTUIXgCzKOYcsv008tJM%2BYSZWnLOefOZiQcMWPtrJdPljlVzEm28kEFJCSgpHG2KefW08keBm74F5Mt4fvWg36lJLq1sRcRBirka8P2dU9AzIhohXeQSaQGLwSFoCyai%2FExGMbEk&X-Amz-Signature=68bc36e325d0673ecd6fa1c4ecbe52b47e685de866585654f30d69d1d0e8c05e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
