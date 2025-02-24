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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUYRXA2Q%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEoSJ8asc9QGYXIZFE9HCX%2FfkFjjuyH4%2FIiGArJ6cb5gIhAIEz%2FNu%2BLvj%2BZUzn5dTP01AbanUxznnZBBudH3R50jaiKv8DCC4QABoMNjM3NDIzMTgzODA1IgyVsNOmbjMlrIC%2BCDYq3AMlUjYGRqXmRIy1zLs%2B5CmEr%2BL7aEixqpln3tz10%2FJmv2XEPFLo3J6T71NxGYBxxYRn1%2B4fOaetIgNkzZ5R1sjxsfSWcbECxLCOttXMYSstcwY4DsntYyrTV69A5iteMPFQfrytcS7%2B72lOkuZtlrkRF9Pf1GjiNE%2FCf2zrTPnk9bjVdnX2pCIy4qbw%2F30ex3v0T6Q9UJIOn1hRx5xIywW3GxeetKxNocNMCHIxluQc%2Fd134IAnRJlzOM%2BEBkzgijq%2Fv2BdKHGyLvNORk%2BochfY1It4VtF0euCjj026buSpj62vLJm4u7e9iRrHs5yej76NxLvULvLNA5Z6ZB1yt%2BRAACaRAM0IRUO9otwf9XGQ6uCcZahnYo3V5MUXq%2B09ZTpL4sP%2BVY1rE%2BpUl9g4e%2BePW5jlSGY36bb1gNkqOSk3tQC4aX%2FlKH2UZ%2Fo2sX8SuV9whwl02dGx6ia938BtUuhNpr9OdCcXL0w06ZWj%2BMBFlSw8ftddjIhO8Q6dQ5wVdUurpk%2ByQTFD8BIIHKVORA760Bga%2Fakp0guoRZZPRwvZmJ3mlc9hfyfDtUJT9j0mZOb%2BFFdDvo1j5nLe6JCNSAOcLmVrjkcmPyWkj%2F8DKDVmWFRh%2Bk%2Fr%2FWGOMLx9MTCh1vG9BjqkAeB6vDdeMr6gW0tQ3lOeLsgIkJ3X6C932eoyKIWL5jCIs01C7eztXn74DqK93%2BOyDeKHYkQM98ErhDE0pK4YIY36InPW8XsejjYZ1XTcisTQFktZuSI7LiCIoHotEsFHGVM%2BBro4ShIMGRZ0B9n%2FZSqyT2oII%2BYOADikyiqDpkJTgCXotBOMjiBrFlGKoM8Ar3GGyTdMmmeQi0sId8gNxq%2FAjpAK&X-Amz-Signature=afaeca742bfc7db07831501ab72bc50d9746598b7655f15d9c755c68118e21ac&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWAOGYNR%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHv%2Bt68ZSD90Gg1Zuc7bJ2qeK%2FIICphGCujFT%2FEiTCYCAiEAqw9Kf56BTQdzVxYrhOcQKrRDgVWANkF802nrDGdS7w4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDFFFbyH5wGlTRG4ecCrcA5jcs2WmciKMi2lIx5liP5AUiwb%2FOPLc9p1SDq%2BnJIcHAT34ffUuz75rPMqHJZwmgg1f9AzwNk1POa5HxT%2Bnv5gvUSKuuybQBqFAg%2F%2BXoy4QgjDfoSxQaqKNtddW0o5J5prA3lAUPiU%2BGvpREvedodL0Pnx5j8ms0gqBYLSMAoQKfO%2FBT2eTMrbekBe7DPvTTibEX93JISVPgApCsMsVGj2lJNfnIapPsVDMx7Mac%2F24JikBnmu17S%2FAd8G7lqCD4h5Wk7qeoQ4%2FcjlDrBm2A1h6l7%2FPMigR%2FnU9zwco9L4gJiVpiaJ4MalLn24%2BTBSp15UB8nvwrl9K1W4wGhNeNu4smmyVAhDN65CEjDhpV%2F0iNJLtQuli%2FX2VkrWPQQmPRgz1ios%2FmEmUexwCDK7IqhFag%2FTFwNaZaHpUKCQy%2B93DwO7hXHAv%2Bm6vGEFMyVsIWchmyMRety73kkIimZgW%2FEkJveFgBrd5N4kY7lh56dvIIL7tjsE1HRGkQm%2BvJs2cPetzXdoZXhxGZMboqDL2n6x5YdtGhVzHz50BaEwYRFhsqTM0oSr%2BJr1r1o6PDWPDoCifZAPqaZjYLki%2Fv3eCTUhqYzvdQfoN%2FBMrMOkdze9wG8A2gyWqpCh7IpgSMLDW8b0GOqUBNApC4WRNPuXHHGhZI7ADNO90vSwQhWtTzmOZY2qgjwE%2F0ox9nfQ4f1QGZtqOp3KGBegtKO9ju7Et2uaZXTbzQFPX8QXn4yWRoZsk0OVEjGDsR4YHjhezay5SY3ztoCtD45roReTWUAFb%2BUaWZGxqABZEs1wHuZd0cmsfmBPXYdOQb5Klu3P3J6SolbiJwxoImSrSB5lTXFAacKk5bK2IOO3gw2ka&X-Amz-Signature=01acafd881fe35109cc250af7eb88ef70b8c0d9d7413952044d5fa51e91d7169&X-Amz-SignedHeaders=host&x-id=GetObject)

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
