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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW6H76D3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T170154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQOwTc65I9SPQgblKZkX7c4gqSdN8ESzSePrSWMKNIPwIhAJRJ%2FjxEEsZlb3q3tgJT8C0uOP0t1XWhMruhWBYcEDuJKv8DCDEQABoMNjM3NDIzMTgzODA1IgwU3mWvbtMR2FLXQfIq3AOdtU1Bgjz0kGGGDUNRJGrXkKXvDsCrAU7KlP%2F3flukw4C7LdizfnFuSPcqc0rjFSK77LX8Ogr3rFbaYoKRP0YiS%2BrooabcmGi6C7E%2BLOtvxCiMIJiWgYTwrb6Jkt5xUMUasxyUqeGneSWVWz44xJfvBTTQTEEiDjTvXdngyVz62XAR2xr2N7QiZSGWMLxWUFQZDU2csXCAbWzkyaRsHGSH6W7v7x7zs4OYgBaXZhRJ%2BejPEr6VQsvIAtyRyVEFDuVdKfoxBnBsznxLxSqmavJvGWTbLNb6KvvdbYktTns7onvMb6Z5ZKN%2FqOffEp0g%2FFR%2F2pR8AYLDraIpC1LqjmebR4M1xXSZdrcZiAHl5Z%2F38FayTalTW%2Beq8t%2B7r2V1y2OLjo8ws1GyIS04TmiW%2B2gY1tuPHrxA0bXucsimUEUxpQvMcWC2noM24EI9niLQrkTyhnZ5%2Fh701BkXuYjWhdUpheH1BmgQy73K3mVcZoxa2lBkALEuaBmzhjZq8mytM5HpgGEhOdmGiXukCCdDDtEOXiEdkuggiNCIs2loDojXbYKZ5wvLX4zZHe0dpolX9Jv1zg0rOx72mOPhuMiRrdJJmgF4mJLc%2Bx8ZWcDyaHLQQCWurpSowXiC5pRcvzDb3tu%2BBjqkAalSCACwROFDrUv4zEBKfaNcDpyIO9%2BgOjimWqD3AXTUfVEY8BBRjtjh0HkHfx4l9sqdO7tPGmeL2dL4ZDOjjALqIsTdvoOVL3lvPyDJkaZTr23SKtY3etlSqE8gAkewZpZLPYBK%2FQRKnaeU3JAyR%2FUpas5t0FOC7mZR3YFsONeIgTjjKKIAkL%2Fpktx7QN%2BB1uQq32mVFWK1PrFCaIy0y2OAc8yQ&X-Amz-Signature=f329adcb3ea683038a6159b160961eb2a53e4c200196cbf7e1a0111956bc3e04&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2X7O4A2%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T170154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpI0UoNKyp5%2B94Fykq1geAw5MR1nQmqmx58GVptSmWUAIhAOvFN9lORBT4NzLweR1W3AAH1uM%2F6GL6atathVgm1CInKv8DCDEQABoMNjM3NDIzMTgzODA1Igwd%2FpbD5o1kufUBT0gq3ANCNWm1hQq6fE4J%2F0a1oXb89oxj99JUR9VU3JXE3aciv4dQetKJXCM0aRJAHvLBcwglEfCZrwV31AYxjr52HDFxR6TEzu1coEPX2W6OZCW0ZCZmTihRso1vFfcqma6R6HpLpArPDnwb6lD75SbCySOkpY7o5ok6oPHhKvCnOZq2Fl1PV%2FuPIICvJLyT%2BHCrn49NciNfRu%2BTDcjXjbH6tho9rlXxcc%2BE8LqkPl1cyuYLiwZgYzrE%2FCGlF2ja%2FNeM6rONl4MFMYPlLTCP1QaBgXejBTS8iL1ORswOzaGZouyKRsaEPmlTsGmPlkB3n9BYWTfVzkDXCR4Hwz8dUasxECt28fcFtgGiAS%2FmgEk4ssDHWNkl%2BPie%2FSIVn4P%2F8KsQT0Y3adT6C63ijx4xTLu1zc7Yb218pp7LOcCOXr0I%2B5kJ7j8%2FT%2FbZ5dF7asQCyHQQy2aQ%2Bs5mMNW9H1rqpaya8nCwXGQKtxj2%2FO7SeyfqxyNqKKQrbG0nBK07Mby8mTasGVTBX1A7ACK43KPc03O9Xbu9GACxNzEp4xpOQkBPGFrUpoonkYKdp%2Bwfxl5jcYU7at8l1Z8BGPgd0gLKtVqMeIykVwz3A4IA1GOHcwkg0SikWcSHJW05IDbuZkTAEDDx3tu%2BBjqkAfrYn6IWDg92W1tpGd84rG2k2zZjxHlwqussbOCSZynbi34aMJ7i%2BEsomDKktuhI%2BtR71m%2F1kKO1gIwDIa8LJ4NkLUSA3eeFOSas1X1CxIi5eC5r%2FBidFMhChkG0No%2BcmPKEsqGxhU%2FeMbYyc5zpuBkbOiMgGpnYufTOuB0KIG61ERodf9MsfDLyEW0B992XkgAIWdOTdOOkFtQNLp7YIuRktaUX&X-Amz-Signature=ed59505cce0917d2c6ebcc1ff91ad8c962a835312b60e2a3e6e06a2d8cb20beb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
