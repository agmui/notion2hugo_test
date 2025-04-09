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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BM2LF2X%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T090918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCPGBfnqeDj%2Fm9xd7ccsmZDDKocLeb3HgxSXgmVevKMDAIhANfELlVcq2rAFFpl0dPIXnFr163gybWLTIFvVa6oUvCIKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylPcw1EDlG4y8Y2aMq3APCO8ZivyYbZMs0ffW%2F%2BFOd3XtYr2xlU2h%2Faf2jVVT9qBpQ4hdRKZpfJjGiFXZfeawL%2BKxF4%2F0oy781eTrnoq%2BaICC31OHRrTqRAv309cU%2Br%2F8SsErg193LyqZ3QCWVHvA5cAelu0zch7JKWDf0oTChI0SVGuF5a4HrZSmN20DRLL8txJAD7B0NDOoZNRsYZWoyx5EkmeV6blTZI%2B%2BK44Oue%2Fo5ZrQ09tEsX%2BHAMURPYdQrcvAOyY4xyUTkNsZkL4EpYjmSwW5SXaA4cQMwNqDXf5LPmhOgwV36muptcrHeyT7A%2BRP1kEuSjkzFZgaiuxtvOpzCCK%2BUoBsjF5Z0EfRqXrG1ua6jhLbM%2FfuVqace9j5cLh7Gns2Dza%2B%2BqJoeSah57TOVtXfjtU7MBa42dsFEubLEL0QJvVCByxPc7UzFMUwj4SxMb9t9UVT15fj8OehoXjT8%2FS2mca94oKEUTeYIbbAQiwK8NgVQqS2BO0T%2Bo0bax%2Fa0SAU58XhQGlKrGYMIkFdCxtYNHvlnQc1M3M74PkEVXIxWKapg1Qq4OUdILBuT2CZSvczaoDTLHbBS3Gr0WjGN%2B0rIE6hUb8KfDvWs8Oq%2FSRpzSgZjamvU7XE5AS9wGi3GmRghCiXtijCh5Ni%2FBjqkAd%2B26xLyYPfndUC464ydH5ume3PW3cnH4OR3cii3YUv%2BPebW%2FOanvM2xY3itOqa27aveEMr7uWR%2B9XY2Vcux9BqC17AGbRSWJHoaFm7tTUb04tEf2ZDBgbBGzbZr%2FhkuKH8qr0WUhSyqjPSHaZLKWB3YEcFUfxpUUqHNeLw0c%2BJf9v5PQWYqgIWtDaHC4i7jjVRrZAUc2vaub4sW%2FKk0jj5aWgAq&X-Amz-Signature=90b27492f966654ca103c8d3797138f89f737960048b9d14775edf92ab490964&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XESPMXIA%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T090918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQC491d8XMpWj6uQj1MW8FoWmvebNJlx4Nmv0RXQkZTpDgIhAJ6S4BAxR4S7mVZwGi4mpqcxgvcjZsSBYTOwALpl1546KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLRsCpSDnSH59xhl0q3APD79fYoE5gi%2BnaRxdc5yvD8QuS6rW0bKNqWiveys%2B8BE7Adbq%2B4IeieZi61mb3grnOAjxI8LAOjLvEl%2FSnvk7C8UdjpaimdQAtcbCUz16DD78ulNNEuAPI9tvSVA0OJX%2Bfj5EZn%2F%2BjGytn9a3iOVMnqIBV9O6gJL0%2FXanEiq10O0F%2B%2F12gH2T837XTCzsBQfFdY7sX237suuxrx2x9%2FlphI3G6rNcBEVVeb3q4b%2FdFg%2FNHGARMrC4wNrCEzyUI%2FkcrSp3xLa6oyZceKMUzqf5wkz6s7tI2j1nAJrOvFuvcr709u%2FWrUinloc2XD3e3t63n%2BXWPYOSHD%2FnO7p5KX16XSa1NXZ%2FfEOrCW8go0ceOsB%2Fj%2FQY9Ga3z4xeM%2F3lPrdmIHDxMIhB89OYERO61YBBV4EXU2PacMTsKV1wfHuc2s%2FOFMuu%2BhzhifIII4MTXZWBy5y85oP%2FA%2B1S2Fpz7lhh3eSHsi8vbFTpj6U0aNrA0ckwP%2FAimu7%2FlTPFGS78dhHG3QDzBHnlDOI57cTZ%2BAxz2DjWHvlIXeHTvMOuLHZir8xA998coD65w2pL7W0pWLmUGun0zmzuVhjN0pUO7NzmYdAkpbdYeQfJBjaOCkaNZ0%2FFcD0zS0jWv7UETujDT5Ni%2FBjqkAT1WUlEyNvAFjWkIC%2B%2BR04gU1Yhllb8J3y06H83WZSH5pWrU8N5dt%2BEc8IVykVTf8NWQfLs8ZGjSdnKNsUvNTC%2BUBjfa5KpnoyKsO3m1yHvBmUwALMxdp%2FRp1hsEf%2BFSbxjwWWQrQUzz0%2B4Sdl2tB1re9VoIlu20PzJqMse69Dyk2tBcdKLapa7XVEBCY6RIHJR3rgDrKqEWi3MdssJmObUB4KXR&X-Amz-Signature=b28a7523f48c70c03e5837da4739c48daf0773e9bf4010663fab5fddd8e4dae1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
