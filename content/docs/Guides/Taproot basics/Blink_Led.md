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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q36B6O3Y%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIExTKS7qmgK4XYDa5wh8CM7CPXBgBULNPkQ%2Bg7sAFvxlAiEAnKB0xNGjUnx2owiiFHp2%2FyGRNKLDx2gxpe%2FNG4uO%2BwYq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDGbTnhYKIffpWyAP5ircAy9gx5wlABoVGOsxR8nLnRMLnGn6DYnRTH%2F9ciLREGvTQeitU5wqHWAX%2BWywqAx3daT3hP3v%2F4y6IUvx4SW3oAXeLM6nutRFmg9HTBIBNVxFOPnUZdxyMnR6Dl3CU%2BtQcxIQd0PHPCZfvsaGoj2ZCwpG5%2BOPgxGJDMhV5pFUKzoqsi%2FrNVdqjUtn%2FA4TR2sXMPrJwbGred%2FeM8tHlwYZbPLEFykb9PrRaVOhSIPSirwl0WuWHiiSO8mmgZbnPbIvRwW6vzwKRNV8hxnr9VHDOdiV%2FxxLfLxlQHcT5H%2FMY%2BeTkBJ18ipuruSoCi4VngurIyMv%2ByUBcju8PHXcpYSBGY%2FO7SMcQTCNUmQhwRQ9uwb60zM4tQEx7unYcnGgnvg1xUNVyNgmBfFWtjeDqmHWJy0zHMOW4AxhVRNmDwTwLsLhUXfYONkewMsDXo36V5v1yB5V6OwoSzC7ri1mH7jtM4E0256rIEh%2FTYaQdbPhPzp7Pk3bSMx2LrPjA4cQiiJ9uGD9hsa5y1Izx8IUaZSW0uYr2xTDnpsPE5EA4jSt8v1%2BQDX0usBkKaBS7uvCwl9O%2FQ%2B7wExB84W0qeywA47Vb0Q4ehhv2QXZwi76F7yDUIyXekK7dxFeINNxIr2SMM%2Bblb0GOqUBmBDe7nhDgImD%2F09Aj6Jq%2Bu4dxYFVPBCwgpMo64A9DuyggDtLhUbIsTmcMq1H9ij%2B1EPpjTENorfjzbwmRyBSjCwUB8XTmksfPbNO5kV%2FPxsrqdrrVK68XolN81CjGq01i6SuJZmTqVdnv3dzN23W0EU%2BIoLtFYBDoX%2FmacQ2FHAWes6c%2BL270SqLNdSPtRpRS59rm815EIEPiNhD14gtkklK8VkG&X-Amz-Signature=cdfc25a819434b837d3f8e6f6fc835c3d0ebdfe763801221a4ce2e793be7f6c8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU37L7FG%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIHNp5Qt6st1PbgD3pms7LOvleCjL3WBQBVIf2lniRPQUAiAPopJBl7o7cpFVr9iTj6XeYvEZDR%2BkfpA2SG7i1PEFJSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMx%2BacJHustwLICatWKtwDgs5Vp0LUwPp21nALhT5iKSivyoAqL5c8p%2F1Qu3GA0yAZWAIYkYyYxN2pczvEdQZKdKRWN4J4wMSoMj9VSO%2BEznlDgrLtz%2Fni3Oic79040SdswIgT1Y1qswiv2vL9dypRf0I6eY0KUrdnZCsXjPaSv%2FPeBBMB%2FT38Vgnqmwp4CiUio9TQnTI0PrBgai%2B7A2hAdN%2BHlTNrhvEm5%2F%2BiasWulrH8L4vU0YaP0%2FBGsRTlWkRZW1H6omsiGuX2s0L1%2FxrJAOaAibiiUghjRJ4V0UVPRiclFNQoskLjYYtNe1Tkt%2F5Bfh2o80zAL4d05yDo8nHAHVdbHqTVKvEsMKq7xzDBvlvOz7uKMoT7UPHi8c4hdenKWXGSih0so5jfVze1WPj4ucaJK1k8j6pSu77VGTx8Kpa2gTYn4ti7KuNnAmmifsaQbROrY888BWo%2BsVBVxncZVPAtEnlwG89suud4KfC6QvTkjWY0atNFZnj%2FHWLrZC9QO36RV5vRaGk9YmaGOM5%2FsSJcXDJB5wMEuQp7mHnL2La9U8uVLOPW5PO%2B51k3emUfgBMmKBxAO20x9OBMOEJ26Ae4JETwH70uEXi1u13xpskC5YxDhKUVBIm%2FTxf0aCcq3YhjiavG%2FITnnaQwy5uVvQY6pgEH5CgqN4wttXKUdyJotqh8PTjJTmCvkvGm7XuA4J%2BS5U1j9quQVniLTeZVszTozwv06bVE6M7M5t9F6KgGADDj8%2B2tDUSvff1XAMRLqILX5vCcDxDoUwvP3jTMe%2FsauxdR4H%2Bq5HOj9%2FxA2EGsFRQ26mRiQvwil%2F6FSy32gypmNVv16LM2nuwI6Ge0fXIJpolkTIKp2VQgmm1FqVuDdQnd9YN4AsTK&X-Amz-Signature=529726397bd2ae42ae7d7d1578a3a74e2cf44e7580a288d00d33e99ec1fd6602&X-Amz-SignedHeaders=host&x-id=GetObject)

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
