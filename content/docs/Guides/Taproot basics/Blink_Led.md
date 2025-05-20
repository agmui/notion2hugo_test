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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ4WV5QD%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T033553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEGgQMfcwqFrueEpJbLvWiPe1VAA5P%2FWRjeGYU2SfEQwIhAP0tOzRQ%2BOfbwT%2BZ824aUlycQjm%2B85F4xjRyMB%2BolxxJKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9OiHXqc46sBaxerQq3AN2mWiAyoHrP3wqghkhNvx1GEM3hNxSjmS6tXhklSBaD37%2BXGcibDVUsG2%2F2U07BLur26HoUsf3tgmv4mdtuec8R1GmcldJNfqp1gzOt1gFrm2wIjpLAJlEwrJThmiurTR5c000D5QOLsu45uIXj8qt3WD%2BmXQpbxJA9Tj3s3MSzWXTKfdG29xwX1HA2gfdJMTaNLffZ1Tk6haKF2ZMBJYteZbKdI8g71OLbKTm0lbYCwylf7KwOgusDdXXyQrp2DBuvM5FaS5f0CapkyL%2BZVTO6kxDB%2BRN29LuV72jrpL5I9WsXJoF299dtXA5FeXjdu9G%2F3KkPscvnkEm7bSd5ga75gc%2BYxJx7fH3cEM1AN4%2FdYWQf43%2F7nz7UJ7TG33eA%2BtiIkTMkvyWdRKm9%2BdcGx4wsmaLGx1hG8%2F64HBjbBrHUosMeygdWWwP43vWWJXzlg0j15tSg61yTBCSnnn1sytz7yEJ0Z7yZtlCFNRrKqkbQnT5p8bLkH2vIeUJs6E853aQXg4%2BSAjD%2Fgo27PQub%2FlnX%2BJF7eOgLmED%2FZRSOBe%2FkNVlYMbGgWn4LhcTd1zF1yVMTxTTPlyhUj%2FUBkafW5ibgNo12XWtniwTfp7DzeIwsyyCwFlcRu6f%2FTm1LDC%2F4q%2FBBjqkAa%2BxNHW2sdQADzC49PoNEZD0YXIBjM4g9sf490GZHCm%2BGd3rUHmNA6b%2B3SRyv5yBBG5VuXWBimBBT%2F0HUAPoYp%2BfPTaJsmAfgcTqQLGVvWTNm%2BU8%2Fd997OdtrTl4s%2Fg2CUlOrXsSAAXbVcIvAPJrBk0iERMsgBHq4ybBbQc4Jnxm90uULUDot6JEsfV02UK4Q7n7LUvvYEuh58HiwLwxHta9Hc3F&X-Amz-Signature=48ea38edcf6028bfdf876bd90596d024a0a1db58ddee4be59235477e456ef587&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4L2ENWI%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T033553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6K5nQnj3ajWkuW591kkFbXbAZ%2FOdJDtq2mSLKucflcAiEArnXzD3kh%2BmPS43asZBc6saISA3TAPz65dnLo5URVFb4qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI9O5QSabnogdEdy5yrcA5GJcrRUz2NIxsfpTXimgUY0VxcpkfPaLgVFLUROePnITERWmC3wEVO5RaWe5ttwI6%2Bmad14QXcpJPKul59Id8I10zPnQ%2FJd51Fc1gjIy5dsrQoxDSobN6arp6fPU5AsEJ8YUMDbUb3gQFZ4ulMXDUQVBfZhNS6EA4Fhm90hojVF0UAQKpnTW4nIRyWpfoa2SV62UMHlS4nvuc2FJoVRd83esAufgER%2F2ORsvvHhTnNGlamXM38aAqgJU8bMRTLez990s1xB0OQrhq2izc3iHehTg3f3s0Ca1BIQ1ByR706Zf2Fn6Ct3uhWtOzq4WUPxGopHoMFVrCtAIJNhl3NsEtEnGEymDucC4BvHhISMLhUihifXuqtMxaFghSun1hVVCC8CKLnX0oFKUUKALctdix35LpZXa%2FloTKyPh6dP27U4ffkXSSIe2whZ6FvMFtxBf94WbXUUxeOE9vNSk1vqMxyDJrhTyYq7iAKFNb%2BQ3cLJZybJGKH%2FvEHyH%2FUI%2FQgBB3S%2BvcKS7H5CELtzDFuKuzTyp1vBBqK4iwMB%2BhnTQC48RGJPrwLzp%2FbHDTeF4IyUNLS4vJ4oJSUlE1jHEWtYwOE43zb8MGQ%2By48r3YlpabQugamLMIaJIZcg%2BRE8MN7jr8EGOqUBM6qCui4HQwKBHtomSEiF8psmdC6EP7lKliZh0fTiI3xVutru45zHEDYZrlMoFGreg096mEjyNRDdr1t1aOvr84HVOKUGNXUwGR5SmYekrlO72BWLhKh04kKXKcR2xZeSLONuEY8vCiKvrcqqMRhkcLj1EoiVibgm3VX6Yaa60WQkwwBKMjcep4VIxltBQlavsGl7uvmz2%2FY88lepLBVjwDuIXnT3&X-Amz-Signature=19f433a02f8a4e93bc1ddff81c9000dee14b10265ad16b9211cacb77ce1cef92&X-Amz-SignedHeaders=host&x-id=GetObject)

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
