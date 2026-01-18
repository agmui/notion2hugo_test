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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQUIEBVB%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt4Fo8Cx5Iyihml3NKuvafz3ochJpuFR1mJCcRDuP5%2FgIgRUlBH1DBBvZjOXzcqOQuZJiZ2FytAR44UX%2FReOtvBKQq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDC5%2BB7H9COkkeisDbyrcA%2BHsarsGrJg0690lqomVcV%2FhYZ2lccIZf348pwdocyFvIpXO6jiMYpQv%2F7atElXGM9dKu58Ek1AhUxBKX8cttB4emWwJTmZI9NOZL7%2FhvAkDnuF6bklnaTfv71B6n1WRaoJQE4fBbcNFfhQcdV74oG2tlmnuPeD4QUVH4bGCQYGknEp1p8y7zsq5Wyd6l3eZeWfTaVczrri5PoKc9xcOqgjScxskuoPBKSmCBQHaA%2BO0POL6%2BsRTVOYa5TPjrHCDdf25KsGt%2BRGGTyC8RfXRnx2123xGvMk5XrkEewhWGsYKht5O90ErhxU2K2uu4BlFSyCPFEd6rX%2B3qFq0RdBTY0jK7dPubBzEBlzmIihuVT4QCOKFJE9VhUDE%2F1feaWidg1TWiLyrPnSmwEKJNnCskmct9H06NHpfGYAoXOuNEI9GtfvCt7fM4Mf8SEO8ONE0xWJVohfWdsWXnrXzwQUg6c5tHhSnEDDDKSkly9EEOA32HRWGMPzI8Ol%2FNhe2G6MLuX2XqXNITFZ2%2FGApfkK5FIj4%2B8KWGUILMinuTN0W5GigKDX44sWWDEXJROh%2F484TzDUEFm%2FSBP%2BUb81WqRyGsH%2BDV5%2BwF%2BNpRQvzMmZ0L%2B9QrAfdRFjGYeW3Os4qMKSdsMsGOqUBpRr8yzy2cfgb7hr7O5uByojhwaA8YTaBP3%2Bi5iP%2Bl%2Fospl7gH6%2FDjS5mdlLfQW%2FAvI7hXNHrSdhKurGVvO%2B%2FbbuXfIHAPqHn5PcMqLEmjK2OEH13Aqxudvqx%2BHOoLY5SRlzbXAnhkMEoVwMOidLFi2fFLT38fBuJSCpIfc70VMBIHLIenw16WNbqtrVFpnrv19x%2FXzSVlqhZj9zygfbsAj4tQeEO&X-Amz-Signature=a48d914d0fed05b09eb6f379d822c4ac02262a2a5c42519304c1d0fb697862df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZBONQM4%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqJ64hIM7s8Xo5fNpLSDUOwxiJquRdBTzC7o5LvAYrXwIgUfHTVzyrzk7NfbjJjzxHLvM4d513Akg%2BxUgS9cuGCZMq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBgb3eLsGGAtr13VAyrcA2jOGcgP1eTFjWyjtcOsD4dq1TsVDb1B%2B%2Bk%2Fe90FWm49MWaGZ%2BCmTqS4rWrMJ9gcojbXNM41cS6KFGahuda%2BHUJfPzUv%2BdtiqDgJ4ifFwl5C4jFWkMOGthCd4lFb0MWEtltD8ajNHL%2FZteQbDltRG4wizBOqFYefrUgf8acO8DaRfcgrZ%2FuQ99QMqGT4mByWN2hfOsxWBZ9gFaAAV24FNie67AF6XOpC88u25PxVftmWKwbHDRXJSIgPO1wTihtNgqhAHezrtnJrgbbWklbpQLCAbQi36ppxvucif7Ce9RWj4lCeF8D6oIpAtEmuf%2B%2FoDJJGptp%2FDWLW8rskqlqE6TxKuPuo6To3RSTRXjmgn4PIRqsACDTWbbNO7lKuM%2FmylFXWyT1oD3Xy%2BSmGt4wnQCTh39Nno%2FxvjncN8RYM%2BF4pmlJyG4CfoCujXS1nhg%2Fr5Ru4IaHElHE0KUrLf5vB0RysfksyMBo16omavycw%2FdRr19YNKrLv3uOz2otsuHxs9NmFqfjKmLL1g%2BMV3ts4%2B2nqLo%2FaJczg5IReMY8zkYZDe%2BxvBRhrMFtkgJvXzf8ewJe4FtUsiah2ufsdXgJ2HklqoUxOJY8QbvqkpNg1kgfGOgL0AB013xNtpqedMPKcsMsGOqUB3h%2BtqKImEfYjB4N6%2FLcBL8Euml1SEsKDnvTkTjW22CsdJRyqVyMaN25%2FDHRn4DlepNhDtpa13Ce5g4IcmvtvdK2DxQhmXYxHfK5VN0a93nGa8V%2FSRM4C9rz5RkHR6oG6dPy9IUbarIiQubIQF5DtXuzlHd6Uqv%2BaHndTHVySACPXaYNKqjmYLotM1l3XpV4DHP9SlKAjyl1XAtKN60MmWmLTiVcC&X-Amz-Signature=a10c97d2c991b3f0109777e145b1371173c75a11334929a3212cfcbfd6c9f7bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
