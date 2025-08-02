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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NMCD4AC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzwrUXaca9QRH5TIzlG0INseqh7qfhN4pSkN1u36ESvgIgM4Siqw3mCpFF0osiynTiV5leGjrpI8vZ8WDxpYuAe44q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDBTJCHrSd9%2Ft0VUS1yrcA8uJvtTrS4acVJZ9w4YAiwSXY511DonkcTO3QiI3EiLoEft6qzHafirNCqIpANKoRjK%2B1IW8h2aPXEQD8qJS7JSsyyzeK99ynKIRLV%2F%2Fjj1PqXDEk4TiJD3EHSjCrjo5HBypJmwCAO4kEAbzqAnTEvXbMEl4o5hByWbYanoxaJ3FhAcysJFOvIzcSdovUWbt6g%2Bdw0o2mIQ4FXoyQL4K%2Fi%2FlbgMziU2hrnvpmnFs8kavVXLIRPxrkzgyzWDpcJ82vQlm3al9oWY3LWeaTYOjXykJriOVgOTZDZ7ZPLcP4jHS1nPOMzFqOO789jNYCDteDhm27sqLzxFWW4c0%2BvbcHWtgfiD5BdB5Mi9MSg%2BOBpYLJXJEAbxo7N3meEVGjAkoXUIluyoAPMxZbKp365R7A%2Blg1SyWQwX4%2BaH%2Fr7y9CvlVVDrXrStx4qnsvp48YpaEuAShwEabPZ8s6LzKi47jl31ELlLvQ4XZA2jB7WD4KGOAisZyS%2FCZVolUohy6sT5WVtRuo%2FfOy8t72x1ex57Ys188lD3F%2BIj4sVNtekLToS5OT8Wijl3mOvzPp1CXpQT3thagCbo0mDG5L2kXD%2BWBdUZMQCVs68Ucy4vfSPGWG33%2F%2B0PvebS9ce8YnVzfMNmLuMQGOqUBlSwBtxVTYN%2BABCdz4xGzH1BNeIctLZg6lqDvHwEPu4RihLyj%2FfH8uij4urpbOJIK1uptobWNeA6%2BB4m%2FNgKTKUk3vFdL8fgQpHaoTuK784V4XcrjolmJHtpCsqpGrCqyprtjZGiDgOIa%2Bv%2BO1ld1YX98sED8b1oGFqjban%2FhCrVfJYN4ZAzisfuiabjFZDBg6AXChyEMiSyILViklR4A20M%2BT9i7&X-Amz-Signature=a5171cfc2c5535ccfa57bc845f28190a47916568e5e29fa34a952c08e7a4564e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT2SDFBB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3IY52EER2KJB3d7FlbhM4knQ8284khHYyuJ4%2BVDjMswIhAMI54P1FrOLnnMuWcDDWZF3m1uuiL8DmgGvQaqswCpjzKv8DCBYQABoMNjM3NDIzMTgzODA1IgxM7CGCNbIjnbMGeK4q3AN4etqBluhCf%2FdeXxF2SwQtEc6vYs6AvbssQIV3vCqkZzLtLDZCP1VdKFV%2FEnkeKlgKdilEwFsQXxzKyPP%2B6d298zPwj%2FuM14VGx1dDqEYvRP7VTEpOKMqhm6ggF%2BPY8Agc4HmQ9RvvlUMurzpNa4w5%2BF%2B8xg7OJkFeDLTBB7%2BBhSQ1PcMgz%2BR7hUH5U5HvfCD1IyFV4OfLsmbO4iShUTAFSWGY51OhPB7Z9C6Gmsc2aJAyVBFNaNwP10cvjZ627EqmkaXwEUdrQUeWwbNMVdw6css0CoLEZUH1V%2FmMHxiztsSHxUhYFNsSiFUv89MVC1bMSuB9islet7aVp3k6jOAxlpgnbb69ZJlFMlDyC2un1VWwY8gZ9En6SNVLS20oYG3z84fyykwoiyq85VYY%2BsDl%2B9H7yvGQBqOXv7IqO7sFQ%2BadeB0xX2Fs%2ButF54NMX3%2BeyMaQwwujXV%2FEmnKDYTh%2BltEFYTVUa8thzE2UNOnHm5QLhfILQuP2FkvfU9%2BwjQvd5Em7PlsRZ122suFZYE43tNCqGNDf1nI61yIeGXM5mZYG9d8k2Yync6xUnIBI14RLrW%2F6hXvdWajqVOTig6sNdCn6YNOT8v3RIaQQleXwoAR8IsTsI6rITbieczDMjrjEBjqkAY8IKgiOTKf64Le%2FP%2B62Fw2DWEoul%2FbWBER5o67IeF2xm01TUA5l95Dxz6FPgwYzkmQj%2BMZeaQpeKnVplDm%2FVveSTelU1gyDLEvjN2kv8sVYj6HSrj5BmJTn9jthco1Kdp9UuDYpwkwAAaGgrksWT0U8e3TVuF85RAJXlTum%2BLXvBdwjQ9dnennLPn0Dt0IHGjSyEK4xsj0TxEW9wV79fWOuk0F4&X-Amz-Signature=efaf3492d6214694166c490323c882da0d34c825b5483329341d6ba1a993272e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
