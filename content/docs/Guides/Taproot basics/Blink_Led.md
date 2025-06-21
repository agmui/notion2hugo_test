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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V36PAA3L%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8XU9PHXV3qF9m4KJTjtDMfYfur0LyGv60ZzdP261SzAiAZajnnAHi2l1NnpHbx%2BC9t1h59g1Je12KSk9qoVOGP8CqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnWF09RLWuFqXDrvAKtwDpjlAlq%2BncGasIlW83cSek3Zu%2FV3VNaDuNEkkOx76WFmqtKNkepxEPT5qiMNajvisRw4I9uNzppu0Iw%2FugIutkkFqwgUleeBKG1xOKqvdMJy7EN2nQn9vj3z1Wd3Djr51tWPZaJ%2FvdsBlIcRzpV%2F7F0j2VyM40uccd8R5biDjCLNwGFpXqpupozoz54x1u9UpERjpHgXxW%2FL4%2BheRoJ%2BnQf31Bnz5iX5BztNQhXVthn4CMbpwG9OS%2BK55KFwWXnIuMXwZMBxnLT0Ax8uzE7Sx16khxqZHC%2BNbaQThinSnPNs2IpKocmzLPDmdBRxM443KaNOGwdDCPqYiQh58vU7eX69t7u6dZRj%2FKUGJyP59WRsqypxQUK87Q5x23j0fUtVpLYq0B1Hcg0qEi5%2FHTe5tXmKW%2FuE7WMFq9tyHdmDP9ZPw1c2H5nx9LkW7keqsJFW07DAsHIxXzWTuNo9nnSlGsdljBTQlhvE7A8xtO%2FHqdAkBCnWoxNz1ivi0e7t8pHeteI%2FRt2oZDGsmIsY%2F87mUa7q3E8e84mMGyB4SXAmDdxFi%2FZFv40oxHk1JZztlzpUJjgBHGvku0xrwvLPk%2FZwA6rc76FX12613XXDbMpz8EnYDhvWUxjOjCwGCwDQwgbDYwgY6pgEUZ%2BACnWD4WutlqnM4wds%2FquMrMxl6GAF7reUGgzZKAi3Z3FeTIgRp1tt5vRbwB4ajnFw3gB1u2efqWBp9iYcFI3cdOHaJdgF1x%2BbW5xkDnk%2BE3Ib6Lf909ryheYAQ4RlInXYEoNdSvUI5E4UbV6Hx34ckQRzhOYe4QpnXTpLcaH03R5XvCrsy9gMM%2BLHL4bCusKV3AS216Jd1Jqegh8gon6ZrlY02&X-Amz-Signature=d0c2a97dfaecc63dac9b14629e8f7d1ec08fb70d1f5bdebdfc4a5b4dd5e3f49c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEZMKZS5%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2jfp6Zl%2BQV2kT0fQlN0vXUCqctScevgqpY3Pz8TMUVAiEA8GFPzcCaAMbMj1xLhzgJR6%2FQL7RAGP3f4DUVtE%2FKDp4qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdPAGLhkb%2BLeealcSrcA1NWVoaYuG0eyg1c4Cfwz6t0Gp%2BHwMR78KMM5vVBcTrgEWbtyqTxAOSsJxrn4A2d7J3IhMVLZ%2BKTN0ppS6zsMhy7JEou3PLwJCtKbMyJnpTTwDKlPlO2IcQcVGqnYfbJsfJQ72HBDJhC%2BVPa4nlxiWBDW8D4f28vhOr2Y%2Fb2BHHaTZsQ825Rn6Oo59yt%2BuvSAkGgmg%2FnTgBTgZpBRR1UMw%2B5OICDeaSll95JYSGDdphnW6gwD9CCNkzXFTUXTMuHtQHzN3x65JcCBaTNriK5jkaVDL74Y2P5YULu%2BiU8Yf%2BO4G1%2B0CPGEH%2FuclBi8oTIc8%2BFeUFG9aAe12JKnrrmoSTd7IVHbwZMUpyfdP1neAGp%2BNY6sNkkxszq5UIZgf%2BtlysyZIxcRgne5VgZZe33W6GRjm%2Fz3Ul9aQwbkxGiA86GIJ3%2Bt04c%2F11I2sqzSNq4m3Ouqgl8IbY5eoZFQ%2F4jPoxoLcOGdpimupEwMLknNaJ4irwUKkxJMyU2nPVmR5Eh1xETAIbGhr9L1v7hbAmL4k6Xzy8cNXTuBnbig0mEf2ceWET1xWmFjuqwl2fXAsjPmQeesmUyQxlh9ojiH39TZ7%2BvZ40TjZBxj8GPVDKzxOM3FzuBqtx21oAr%2BSQQMOqv2MIGOqUBpaiRcvO%2Bf9m2IZJGwpE%2FrQmWAiSft0lJ91LvJpn8jd1bK6pAA27XeRP%2FymtG%2FN6FKRSFvtHmjd7Q4H4ujpjt9vvvWdqwjwxZZGC6y5sOeIvwR3vtBm2ryS7HgLcmvNuRQfazX%2BwibIJHxez5eMONXFhy8xzj%2FWesJZmDFpgMQit5dTmPk72Rq3BCBJ4T7nJzoN12Av%2B974pwa6Ki8MXbdzLQCK9b&X-Amz-Signature=318811d18c54bd648a336f33659ad21513a10d99e22804dde3791b43ea8c7e24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
