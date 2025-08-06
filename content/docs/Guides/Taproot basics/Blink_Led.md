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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DUZ44I6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCICRAJlKsAggJKKK5z6FPk%2Fj8yyxZB8UQPFtdbZpl525GAiAPCATdCPi3WoFtCUiEzxmharAhsNXMyY7EryIBffxFfSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMYxWD%2FT%2BQr2q0zBXJKtwDm3CeLJsD%2F7cE2UgIRWLXYE1E%2F%2FDu0yp4sYq4kjZdV8O3P446c30nEQFEVceNn3qu79R0c%2FBIPZbykKmpIcEypjVm3v%2Fa%2FWIQ5QShyBdWGF43Z2LIB8rD8K4eojYYYrMov96cOc0V0RxsKWKM%2FTjHRPI33Y1dv%2B9beBi7JMJHiziSgD45jy9l3fsbWllqSBDGhsjh9nikuDieQD9kE%2Bjj7oGdcHP5duyN1sV9B0tISFk5F09C0R2%2F2cLUFJBuWuzzga4JFTFG2bGjpQl0rs%2B8kY4weJw9rZioew7N3Yo2ok5Ri6XkXZvJwnbKalTmhFFTzUGkbY01s4SfyLUGYoJLSqFggRxDn2T2r1KXVuAIbIuBgH%2B%2Bsu5eFoknK8C9yTIm%2FV%2B3Xh%2BV2J204hiUx06PaqpzazAgZxgO2NS7uY7b%2F3ddnwkk5b7pU2zyj0eP4TaqQSwgxrHxLBys8lDCkk7K2aYxLwd%2F2pErqQRsqY9wbPQaw7Kxz2TYpKvS%2FXv80WS6zP6qFOv%2FB6JKpC1Q2feaIXpuAH%2BV0sD8hrw2LY75VpP1OrJEfzOd5gvWXi9mBDMgwdwUBAxs6BqQ71fYpZbTH7xhzUIuurOJPyr5c5f4xvInEYSfaDeD4dPKmSAwrY7PxAY6pgHisUQOS1z2pMWBrZ74Dp8fgOrcPy3KfFeVW%2BL%2BMtk5iglMjshw%2BflQmqBONTBB9vHMX6vxha3I8%2Bpdq2MkUW%2BmlpPbZyOuDqJ8UeS7HN%2BIGOlWZtUqjPCblo%2BX0ULkKQTj06ixiDHEk44srhUFMwI4CxLTLQ%2BFyxgBG5j6mMIxS6lSwr%2BW3ShWNhyDaqRE54diU4bh9a8PvuHiheCUgjFZvhHyjsm4&X-Amz-Signature=f0526bd6a5b72e7a7317052f947cc62455b24f9064e2db7c0446442a677077d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DEH4VWL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCgMFJL353w8%2FuYlpKKu55tupmllBQ5ZW3ZDlhwhHJ0kwIhAIinTBmqPSUNyuYRrtKwt%2BUnM0FQNdzC8iHw2urcwMtnKv8DCH4QABoMNjM3NDIzMTgzODA1IgzaVQWTgYWPcjO4QHoq3AMO2mN1LCQHwMBTxx%2BQtPglDhB8J4T%2FxFfWjHccO9BsCkXsQ%2BuPuZ7CHQsGUGRQ06Fnhqi9TZ0EvL07Uy7LPVWfNmoDQ4j%2BSPsmEQlI84OZuN9AWZAz9CpdGA%2FcjN11MQyCKEmEvkpYB1sk5x9V79UmrjvfWxqTWscjFDX1GIANCAMCrA7LCs3McY%2B8AUxRgu1hiLj%2Bha1ErkJRaP7TQJlXU49sqw2gc8028TTFSyeQNXD%2B1RhQ%2FEHV72TmejToSxGSJetw%2FkJrjKOuA5i7Uf1dHiotcYbqgK8vhhhSIofMF%2FyuprIYOo0SfppNTkdC5WFLhHsZaVQxqNBeYen7VUxeU2IEbLatWTbx%2B0hMEwz2mSQAXndUxDXv0Ka9RHeuv9ZVhaDPgrYZJTVKR62ErWG2zBMbVs1K79d8FUf0KWD8yapum0hJmnC4LldLqERSaYJB7h9Pyg9Ad4YkXiTb6XYV5KfhSZ67UInL6Rmx3Gclq7dx1vPGlNq%2F%2BNxcu%2FFLrRMLWk5yXmZ4jh5htGqZcMGt8Y0N6n2rYPbO4LWRsWG%2Fo8fNL2auAzyGdba67sACjdFVsiN6wE4nG1%2B2tILTuMR10sv%2FlYSl11HJVOGOz2Ql%2FYpy%2FoQqnPEO2hJXZzDhjs%2FEBjqkAba5JEdvNRMaju6A0JvY8bzGvUnTaURy0ohlOL%2Bz60smVz4QX257xPB%2Fx5PQak2wv1Ra8%2B%2Fz%2BvTngLNhpXI3W2FNY7YDXR9%2F17s0ThEE3bseSBz1T%2B4HYrgNY2W2rRV7ighJ9I9cnvT7Ole%2FSQeOA3gTiZm4OqcYWzgyiFKL6eBfjgceE6E8hY%2FEMb%2FnXQw1VHz4GXrdkoSYWvdKNNqad91fAEeu&X-Amz-Signature=1bb969483979c07fa49c575afdf5f3707660aa44053700a173a5f154818b7605&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
