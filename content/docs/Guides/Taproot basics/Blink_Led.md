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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672YWBCSF%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T071028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIHprH8Dn0VKelycahg6PV8a%2FjDOu7uJ9RTPq2J5%2FfVy3AiAOHiB6kYaOx9jRpB%2FuviswtKNji31ruGB9%2Bujvk3b25CqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcpsgceNvcXSDIrNbKtwDO3de1zZkVf7UDSvSIYUUoqsWPqGHGa1YUpV%2BYqLmUazSRw6uJVJi%2BTLvfxAq%2FNZv3GZGPUEvVEsWB3nkB5ZM5STs9JMgYePSDjkvu7dATfJItVF6%2B2fQXcaROfGDcc3JCn99XFv9r3i2wu0TDyNjJy0ubBMo069nGLo1ZT9x0nxk3eos4VcV9zI5M%2FjEvFUJf6IolMP9DK8kJprzPs3a4V1A49vrNf4R%2Bx5Wdao8r1qkZS4k%2BCO9EvkcTjCWQ1Fv3Zlaa4GN%2BcT0CXXHcRN7ascFQobECkRz0JLVy%2FU%2Bf0QPOW4X6qc0MAMY4ZQZkPIVH5ch405g1MXmOq7dv8UC%2FE0YnWYVMEksnWYeRfBcHpTz%2BqOr%2BnjpChuNEFGiL5R%2Bh26Q5tNr10rYS8LysLsg1AsavMAxIoLNuToh0KOaHGXLw72iyTUGv%2F8H1i4CC9eOaN43M2sW2gYTOGwWQhHSqmt%2FMRd4lVTyMrB8GT%2BVnyV%2Fm%2Fr0vZGz%2BBxdxMNbeSLHIvncqh95I0x3ZbhkW0CCU57QWq4q9Tju9aMIBfFkYKSKDUU5fW6aK2wOppJDw8%2FUfbx3ui%2B51I7Vo3RVlo3hwulQDajY6p5bjL2PoDPiE9xgBXaBMdr9LX6ITZww1IH6wQY6pgFJJQB2%2Fui1%2BT4RpsJCSC4xJLNIKW3%2FRq5n%2Bx6sZ2FlhWEmIrDYgHRMVieo%2B02jWxWDPpGI2YCtuHnHgwZZS4FIWyIkEjC9wD%2F3GMjsbca82EEb6qyAkfAnRtladSh%2FQh6acQ0pAUrK%2BpujdZ2CIhuhgt3zMqM1b2G11ZyIjPVaBQmfgo59BtJLDQP%2FsAVE80jjW6fpoEXenbcqnqJUSba9%2BGgf1oZM&X-Amz-Signature=7ea75797b3cb83237dbb076b5e390690d31edbfddcdf4728352f216cdc4428cb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLCADOTQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T071029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDrfQWnTWoxsupGGm%2BQHSXqVQXGvkkv4qcf9QpV4BTJDAIhALQ%2BA%2BH8tIaLveBOBfhDi7qFywtscFuFoeKhxd4q4qz2KogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BQqcnZm0E5KETU1sq3APVVPJDaTXL7hpt%2F98QKe5dxI1HRUHm%2FcofkdW%2BHUi%2B5Y3%2FRT8F0MwHhZm0A0W0zOmyAUXoJAPOZbyMtv7ModCDQm68li1cXfYXdDtKXS%2BbmlHwQ3Qi242Ue8hCAMQXfu7RHqMEZ3Iofv38htt%2F3IBvYcAQGmqMOjQiZgVNPj%2FOMYF0gUc9hIrDZ8naZxs66XU95i%2Fm%2BdjL5PlRE9jJq5weZ9yZSMtxQxEMC2l8H1RBnnnhnTKPt3PUUm3ewfKDfmppyjDCY1JH2KZzkUObsjY2n2lvxevPCcrwB4bPVrwoQtzbSx9B3y%2BRr8rKW0HLt6ai5PoXndOkaZt48xDyxhBmvgFySwJv1xpNXbYgYDUofz%2B1TUKRcG%2FrNYb9NndYnU01mILnb7GSvAQ9vDtDyF9ADQW5cvH0hy9d81dpLypO3EOITAVzuGyAwsk9XCgfFkqMgUucHugl2O33jepab9UK9V8Lkdq2Riw1RFk0TQEiQ57Fk8HGYDOdrAhqwwpeLkDb1BL37mUEorPbf%2BQr%2FjCPi5FuMiaaK4Rrd5776IBUIomaQY8nfYICqQBO%2FU9M8pFQuy%2Bo27TV%2Fdti3wabJHlbKNBd38HHoHm6uae2S8Idu6A7B0%2B4QdsRT7r0gjDcgfrBBjqkAfkMvjqKDu0Uyt3WmrmhBmNsl4ML%2FcpzswgKl879YfiyejfSJrCX%2B%2B9VbQBiBsKzkhLHxhLlnaVliA%2Bp1X6QbgYWQ11oPr7YIBPifhT%2FQbpFFZV%2FPuj9Yr0K187kveTWbSnkFwYCCk0RRaAgoYKyCl1lfkT%2B4euf7%2BPfhJ1aZyt%2B%2BgvoV%2FXrDrkh0a2E3Z6bRrot26p6nXaH7hu1fikt7jsOlBRX&X-Amz-Signature=acde0626b16cbd5ab613d9caa70482369f38777e8d929d722bc41a78f5755aa3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
