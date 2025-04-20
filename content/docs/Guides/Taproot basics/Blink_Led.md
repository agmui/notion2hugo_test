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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUE2VYLK%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T100752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQD7uQ4ZEjkmbe2SMo8Ito4VHeIBjbCPAqF6Bvl9C5fS%2BgIgGJ0pRJKNwz%2BcNk1yRU3z2QThApJGpYnq8EBujguW6eEqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQF0fPyWo6jm29WVSrcAwS9Ci%2FFlEKK2EoVYtIwSzNAxNFy4Pt99OYGMIZNasOErDw8%2Fy5NPbyaXDeXk6SgpV0ySBUWhjWGgg9b0%2Bu36v4diZCFh%2B%2BYS5h6fslePoluweTJHwSlk4wdz2cfjIczP66c9B6UahROClfvITx%2F%2B5fI7C7Fci7T2i4ZZCH0zkwfWM7JWWC3LYav57tml5myUjIh4MLjD8FI0s83s3yd%2FeSAtg9an%2F6%2FlLz1O4v6dZL5eJy70LVfu8vdhcixtM7cH2B6J0IzFQllQMXFQRtxpXu9cK%2BeNMtSitCQiLJILirFUn9GlhBi9rnbB9GMQ5EoIo%2F5Jws9so9wS5RuWYjTqXS2GaLcwl2Q7lssHKrvuebNlvzwfjyLmQazuVBePmvA99XXAQABtOSxAuy%2BCNzpYW8TpLPBupY3ocvvIN8FX2hQPQZwrEm8wkxP39sdBxvrabv1PPnm73xWq50jxied7aeJZvMZdgK2QImuPePZ05yfjXXbi4HSofl2P8OBPJAnReh6XqyB2mhfMRm8rx%2Bggu46G1Tlv1%2BWIR5tEXexe6DTfSMWmIPZOCNkhf7ni0ZpBRtjndDH%2F4HDKzQoKW5F53jqjuII9mbo4EFBeOukGJcAWfzYosP9gMRGsOJyMNikksAGOqUBwtppoEhlji0mdNnONEaMX6b7zD7mbMeDJG66tQByvdC1Wocu2EOOmI6SlEyCIvI83iHLjHp%2By3wv9jEp%2B2KgEgp1DSHGmQwH6UcATsa9G0H1oh9iv2QbXwgYyM50p7yzduL4yikgqXcar953OC9ywCmqKGFhSqCno5gUu3lrmR05IYEemM16bCr3WWlhEjMIPpMoe8ENm2AKtnkqOrvdI7yIchQ1&X-Amz-Signature=2abe67781b78c8d5cadc5cef2f7b0fb16115c1e5045d8223e3236098b4200352&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOXBXLCO%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T100752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIHmSCEPq8C89IWa8jefqviin8Rza%2FPOOFrpdqFV2RPduAiAWO%2BlohQDBTRDDo0w84SHVklnRNOg0cygkRxepia4l0yqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjLwyKkvmPA8G%2BjjfKtwDTKujQVKhbWHOh76yrF0jcQS6qEvyRdcwAxR1h9JUlvDxiZQ%2Ftj9dO3kLfOqc48LhIG7SDHRX7MQ50lTda6f%2BpgcszKEoI9s0n6oiaNVLa5r9AxTy56W%2B7HWOP85Ddc0PGn6bmRt%2B%2BJ1u4GeOmjHX5QrUYWVi6pvp5eamVmy5q2nz2c%2FitcQu3ASYDlYFVKWLX17nOm60EwNEyup54UOoidMzwoC4ie7Bk%2B%2B0UTCLlWRFgFzRdP9LrDXlBx9ZaWBkIv57V4A1MtySbA6RTxQqbtaFblpJxXfY59JNbCTtert0EtusUiaWlhx0ytEIaRw48XmLtpJVzTH1KNGyMKF1JAdOcUhF6OJ9zOExdfDoWFhSKio5hlYG5uiWPkCgV6bZz18aAuxCa7FBE5AaT4nNXFdUBubzYH4kq8rYXfd3YGuIU5CL8UsuyWO0qoqDzq%2BLETZ4m1E8Gjon8Hpdd47PoQCI%2FKFZOGHuoChza3Es96z6xkq2P1NbAmk%2Fe%2FQc8O9Odgfj9gyiYOcomoBUIfDYTv7G75z5BAxubAmGPA6g2vq3qSaUrMEpnb8gS3Hvf%2BE586OYOM%2BLAFo%2BfZwKmYKg05MEaCZpR8S2WbYqaPXwOFY60jD5y5sL4GDyweMwgqSSwAY6pgHb3TNAQ%2FSvxyJpBi8W0nq4NdDurSxi6Yv4NVJyhjew5ik67ec3o0gJsWI3LoxWeyfSDGZ1hXRkpcJvZ%2FVQE2NjnsqLe%2BiRxJ3dkaVgFMnSjyShJ01hmxmaZxEtaA9OGVyx79zsCSNJdnxXIFCclJi5rJxPNE%2B8XzLEdsPGFKFB3ZEmjuwDy%2Bc9pV%2FQgpXCDmvZ%2BYoUj3GRNclXIwWR9UGBMrWJlNT4&X-Amz-Signature=73e3d324a1662dc1da275306e27011ee4a209b875c1866fcd09233263b2338ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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
