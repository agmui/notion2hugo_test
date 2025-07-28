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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y34JIRYH%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCKrjZgyb16eRbfy2A1OowaqxUFty0%2F0mBnvamX7stG3gIgBXKKkbiM%2B5M4Ca7wejdhZXYD7vpTOWGCnI1W%2B5ukkUEqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE4izTDpkdzOi8ABwCrcA1C6e%2BOUOQy3MEhEhfYGih%2FT10TTqImbU%2BbCaMPb7a9jr6NntBG6Ifun7%2BTdUEebf%2FQpy%2Frdzy6mVTeKubkOlFM0gJMV9pnRYbf%2BHaGdfB8G6vgItK2eRHEBba7vuoAnxBmqHEepl2gqSVdrN7g%2F4roiksXECKRU2RQZtJuwDq%2FtpQmDOIWgj%2B2oPoHG1J2OmCJ1RXamNbhUr%2FZxSUcT9zeImD0Yo%2BmwufHdES3fs8s892vVGV56aQls8BQUDpUyN2pVjvbPeXrcz%2BcJN65cJJydv7g7st9kmXUOXrs2IgFcTVmYmG15%2FgndsP4PHqy9GLn4EX9DZ39MWZyWN9Ef7UUBI6hSh7JJlOdQnRdxjhfJuZUZ5cv%2Fz7HHmCnWtB5MKo4RjaWJCWjqxHi1l48N%2BQKivJGWO1AGnC6evHFPj7OuaxvlqaqRvJVnGmXhU1h8%2B8tvzkuugTUS51jSv4dXS0HG46rNSV7xISxDIx8ZTsfJbBvG7af6UxLAfoXJsB%2FwrK5CyszjWCXryxmXI1v5vgRMahXbaPxAbq%2BJTF0XhhJx4Q78zNP%2Fc8T95HGcTZiq2AD3lK3QO7QNy%2BY7QDwWv2j0ukUnJHmK46lzsSw%2B9U8rYc9OuRZw%2FQNO21TmMNG0ncQGOqUB65eAyzU%2FVHLJ3VBr9AfmK3GLaVVurO1mMeJWBaSDGKsfiU55JTtTkTG9O9Ggdg0lCghjPoOhxxNZL9E10bxVMl7vnSyIXz2fK8mBzz%2BcBtGmG6boSJ%2F6lJ8K8sD27WNJ17teg3EA%2BDVdjvezfrFyl1X40OwcPtqZoY8polT8aJWSl11dp%2Frcp5u%2BntKu9rdvsKNYtqvCouISr0P5j7WNm9L5%2FdT2&X-Amz-Signature=94608d52471cd13a7f4fc74542ff91dbf1e82eaf10b36b3f67d27445304d7045&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFH2DWE4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIHIEDxur4FNMJJO%2FkQL9%2Bf1EZwHmfl%2Fll83Iihl90UX%2BAiA1u%2FiuaSiALyfnI5SCp3r3j1LCXJIlr4ag3a%2Bsk8IMviqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9iD8r4%2FWMgQLNbdfKtwDqnb32ZwC0nomrFs4W%2Bokze%2BjjG23kBqMv0Pb%2FBpOGndvyrnPXH1q27vd%2Fy76ClW2auOVnXcrvSesGH7MKWWeIbmrgOD4%2FmPpIgrTL3mfijlhLokcBZnMXmFRSrlvIV%2FbTz%2BYLCk4wBU6Dd9AhoxA0zxxSRSD%2Bt3rsgu7DsCGWwrnJzF3ce7%2B3D9w8pw%2BLISa34j%2BEoOTuFYNa2JhOuxdRJ7QkWK%2Fw7kkatrcR1rvNmSW9Z0uoVAvPnFQWNCAILoJQGXmAK0O7JjTaVrF7LEBkmOHMhdcRSVn6XdKhEhPJ7vslkGQyQpBq9TEUPAspK3%2FKHHttEjkcbzA1I9QCZ6bhCb8GVVknzvkTQ8qAJshAniInhS2n8UqVZXKQ%2Ffb2bRfB8rWHbXOepmo3FLV3HmqKeOPMAOgn8X4K49rXYrn5qlVeh5foY%2BYWr3PnGsZqRCDVCHK0pe%2BqLAr90AuDmLSCCWU7qmG%2B8lZSmFM0ijdLhwHMFSxivOomdo%2BtdsUBMpE%2B89bfJU53VG5g8lLlIUmm6gLloU4JcTp2SXbERsgIIqo34TbENrdAGptGECMagsKvBIxoqujFybvkZRYJG9a0jwha7OHP8q8%2FSs7DtcJJOc2nlD4dLu9DQDHeLgwkbSdxAY6pgGWYeIYoaFbqBbQD7zIjwCMY7hkUGN0ujuDaWbiANCzpV6G1TSizN3DvkteO%2B4LKVvptI%2FUiQ5XRQTEuB2ED%2B7NVRy%2FPPS%2BF6ZD01Sz9cxlHCjJ4%2BKJczI77JbwG8aQC5XZ6wZHAf1rUh8auFyAj9wNyYV9RTifVrHkbVYepRZmEHtin6pd76UPl6VpWj2uA9K95a3rMhksn827Y%2FQRz9UioGqZRGra&X-Amz-Signature=0b4b6d33ad1474a5a11763767cf2ea464b15ab3ae4b4c7067c2e7fcffac869f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
