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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROI25ZEL%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T033518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQC%2BvYd8CpClSILkQZrqBZ7I9NI4yCKWYqhtvobqpDYt1QIgU18W8GuvzQ2t%2BIxcko1uoiCut8vJpjMTeFdqEyFa2YoqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOI9Q5%2FXIZTauUP6SrcA1xcIZ930BAuzXWm4%2BqqEI5bUQpeKgAJqUT2Hrp3lyHipWx0CeUnyqom9j32KX3A1gMVywXLQDZlrm6SrvcDPKrHizH1iflRc8eEVhivr8LKvwTsNmhGdj44DAZOe%2FTB0%2FWCWdc0M%2BcYshY4BxQoXEL1%2BSVI%2FKnwwkUQKj9oRO3tZcG0fowhhFRGIYVH6Yg03F5d7iJTzc8rBdK7eC0%2B514j2kLlxLeAlOL9WuU%2F21%2B0FaXFnnPyrUyqjpn3j9Cj3SwlIpFk7m3fuyn%2BCwQnzvxvdeiFjTK83nBoq7%2FQbwTgSBJieFb1fg8YDWtP%2FzGfDwvdPhwUbW035E4SUwxwWyQX2V8TEfc5xUDMkXEm%2FNtsR2swhOTxBv3fnD1bcbt6f1G2bLFedUB2Ddi0ueODRBH4hc6%2FxjLPmvsE9SsOwAdnOpa8%2FvUtpV%2BjqAKz2TBOtNrS9l9COiars2QUaeyliph6JDo5daiHSm%2Bj7tcwWy5tj8AdvXthnT185UbrBB8UX1c1t7234O0X0Oe4NhDBS2Sph34ORtTnysyAw4f6OJrkk9aUb7ZoIL7Q3%2Bp399ONMqX%2FDgagKOZ%2F6I7ZS8fiSNEve2sO01neudchIwBCkh41UX8x62Ql%2BT79DpKAMOPCv8EGOqUBmoEcA0yfHLqj0FiL3iE0SuX6tNRsB94tkwhJliGTxW91eBxyyBYdqIKJO0JwJCIrr8w5hPv04M0KepTqkwdQNjm39vERwSHgA35gfvPXEqYzu6Y840%2B93kNM5hME6EaB7tphpi%2Bo%2BjnGKCaAVRep5XUsI0tTz70%2FlXovPTAHo565MRX7Aj9I518H%2FReIbiMidCDWEhKgvyWfOatjDCq6aCLsgQmb&X-Amz-Signature=0dbbe2d59913e2fe017acc8d9122d98229d57a8a321cec7f104ca9f3b2344920&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AFN4HER%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T033518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCntT4dMIVtntlVfTRuPvDZGfVBamEdf2bIoYgFFTstLAIhAIxQyPCEuI%2BtJHbo3aRyUZdsPY4G6eyKs76p74p%2FxMq3KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4XRYw8YRTpBImvVwq3APXEtnRp9uQ4sOm%2FDlAmJmxYSgh2%2BJplgirz4tp%2BnsqkIRyNFuuErmkEMbMFLkn0FR2kqZbXv2gbmZSVapU%2FjW9upRwBAGC%2B1n%2BMvuA5jkMMu%2BgMZ4oWRvYg7Tsn99gn5u7QNCwxa2jJXTT3WSmx97tlA74lgbOyR%2FG5z%2BgFaoBZ5TP6RYr0kqbnTk8edmDSCwVlmC1CXLz%2F2mplMcyRVmrK3C5kbqSpTID3EHY0x8W4J0MKrxoEvo7vgF66Jzsz3NaMpY2EJZP9jFFjW1kzkB5GBxJ0FLc3jS96NXEkhmZacpT40%2BOWcdcFEM9Zo7vwuiY6TgrXq8LiHcPjKJM62qZvt242bnXsk%2F58n9RzWLe%2FycpozTMtv%2BKCVTVKtrnUMdfMBhctZzWqKYnH0%2B8d9Dvd%2BxmHoKQANHsaTyH%2BZZJ9qY6z7Xrx6flpRf6rO5oxcdraEkRfMj7RMsOGcDgCrnP44Otg0v5wMr13iSLj%2BR4hMNC409rAN0EGAfC39pgd8uysqDCoHWVp6hjxy8uTGd0DMcCus83vQ9kgYD4mU9PikM1iWrAQrAXK9EwuP%2BeJFXVfw1HiAqtWLgliHi7mGfl2E9CUuh6z8TneYCXefa7HKiAgsZzF9giXM1hKDD7wr%2FBBjqkASblQ7jPu3P5rGOWJFf0Rbsidan2R7FN0q3lgVVb5tOqrcFXHBPuzumWOQn02mSxvTVrfePZZ%2B7e9NzXnRJBDdm7pVNtCPqY6eRW886zJjH1ZqR81DWrPNP5NajQ1Xg%2B%2FaMRCLvDkiP%2BQc09%2B%2BayR60FCIq3Cw%2Fg52Tj%2FKGzKyZSNXiFKnjaL%2BXpcx3PgZTr3OCxAtzJ3aVHCUHpXCVwVdu9Nj%2Fw&X-Amz-Signature=e39ddb9bbbff1dcc278205fde2f8fc2bbfe1117355ccf594b60a89ac9d7f40a7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
