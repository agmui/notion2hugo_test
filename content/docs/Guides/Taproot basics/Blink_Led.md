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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF7M4B3X%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEMPIB3xTMW3liuQRONfcpyg8X2wOldig9Ljc603OAgsAiEAyyUShTqog0H5rPWUkwwcN3s0JezAobJ37n2V%2Fwejev8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDNlVbHC9jcmllqvg%2BircA0aOIbn5uQ5YRedTYSBYyIidqSLmjfbasz32UX8EkSPyHDdFKdFDET9udK%2BDMMyOfrqDu2AQCUAQWfwg14NOYEh%2B%2FuRz0hoojmN%2FJq2mTdFXOlFIr%2BLB1XATKV9ZBDnnpfP74YoNyiZZ6phEzwuBupQ6TDhyab1cTuAMgNyZD74BqV3mgQbciSss%2F858H5itWbb1NkYhzON%2F2Um2%2Ft%2FNxmqwF6uIdSKqJ5qmMWoBIr2L7dspyp%2BijuWhDHl%2BsuZIJ4e%2BnO14DNlgMJHNihghl%2Fx1OljHx2s6jFyPzlM7uf%2FsGWmkAqXJW2EOguDnhxUE6eQX6yqBz8VMW%2FDLeBbzrplJIFoy23anHVWLfhL3a2HgHSDVgorYjPywFNJl4mmBPj%2BKbKZ%2F3QDlAA7OvQ1yBNbIcNlRixCDyNzi87ZfUG%2FmeVLkZsAYEWmla0YGBLpYwKqP7l%2Bry08W7JVJQYzZJmFvfiUoaRhUKdD4RudcjKbgirwMKZV2yd3%2BjswOtM6Y56OZv7nZyVaM2zxuqQw3OjYe%2F%2BvPlzZQs0VMN4WPaP4Q2W75WSZRe9lkn5bgfIjxGAdgN5wyGfNllTGbJ2M4ZjbK2i5dxVLeJICaJf04p2FZtGZE5CtcxF2goY49MNnV078GOqUBPfONd1zht9%2FSe5qkLffFfl3DP%2F2hyzVIC%2FpvhjTI6cAhk3Wjq4ywAo%2FIWInNRsklraMf2ujmLXdI2CpO91w1Z0c%2BABy%2BVNgextH9GEaBMFydzh9r9p9A%2BLaPc5FmFihw52087F8i5lPm%2FMHXQirwSs304EltE%2F4C2hgSMnu60vqx3ytTMi3djxoeDcJh5QwHSZ5ObcWFY8AhEP6i2lxyNlN9SPhM&X-Amz-Signature=aab5bfdc665059ff26b800d1a27cc118af5ec997167a10d11fa33f6d3b12df74&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q5TQKM5%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T100911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDl6eBzGioThqn7ryeb%2B7%2BKj0cSQKQT29hF3NbKv0543wIgb65shepgMfnPlBM4u%2BNMOGUJRlNEmTc5z6VW4lq0pwQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHIQI0KkOcTrFDcOdircAwnhy0nmxp5sR1MiGWsPaB%2Btfv3wiXGi4wWRqObA3sWaPaNWtlu3YS8oabQ4MQowdT%2BawCIceilkiYPNKZ1fyK%2FqhymzPoOjlWShJYF%2FlNLX9xVeLEOlWJ1Kn3D8D5bKe6M3beGBsFp3v20daRA9ROIZ92XyMPXKJTwisnIYZy4snL6%2F6SzJUR8LBXilGOdlYrWqOU0v8AeGmMYM6PVTpEj4Q5kpCGBABy0lLKPoGXpTAN6DNxxwGuDyCir579n2KpRPjqlTMeYbQIoLBKsAI5aQXT4nozGbHvJGnM%2FFK%2BYBAH0LF6xHYsm9Ekcocs05dHOyzQMmcuuiPGzL%2BtcSB39jsjJDDkgXTMOTIW4hXr0T1ZnBTA0YEN66UnSQ6%2BIs2999gKnvTitnt1hp4YoMofNiZcPSGRZO%2FMYZNINIhJsRgIsnMd3l7EpL1NCzSYmOQsIB%2BumQM9G6J2HbFUMbTJmITxIHKZZGrCIW1M9GW1rigLo7S3cyT7X3pIdMLF88awpY7DOmG8tRG46S4q0api2DbNvOKVwDvraO6Kx1xKGC0GMMCeK5Z8%2FHEthH5n%2BCO2bobjuH9Nu0QVz707EkCnFNaKbeKqbtTddKnrQ0LprdAs2MBJxg3DdWdY7aML%2FV078GOqUBisQ%2F9AyU4mgobVTp55nWNnrRayocpBK%2BILXpN0XN4GdJqI%2F691mayIFZx9Xr5sTuVdEats86bog%2FLeOvMyOdKR5GubGnvMxBiMTPnTGhamXHQ0Dczi1VuCvfCwYqyP7EYnSykRHA0VSWGwq6wGN0c%2BmRSK3kufks8rgbc%2B%2FysJJKJJecAez0hPeE%2FRscu0jvDsvZATwM4Rc%2BRepZsOEEx0di%2BNTE&X-Amz-Signature=f68443ab1c06d6ff138fb8221d0d1ea55d5ebfa5b6663f4044d50d36674cce0f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
