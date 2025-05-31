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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U2DFNGR%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmRe2yBewAGbsTnfp5ExxJTKMu3%2FOBKvSqZ3wz%2FiiD2QIhAKzAYTUUHvxyPdPywMKZ6ooSoC5vZGo%2FVTAeTpPdD3QeKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfU4HwexwPdJ0FWBEq3APhDLH327XKkHPuhtC4Eg0vAk8QPZVReSaOXfykGs9KtJ%2FJ00XL10vS2TDa5yJAGqEQEpVZghk50mj%2Fe8DHIEw3r6iB5Oq0rYnB2ZdjcUOnpeMe3tb1H8MMorcczXU0%2Brxykipp%2FEZkxqm9ZYq3XETT5Yjv7kjakkzlj5s6oBc2Z%2FIIc98e7fgICq8GVtmeNRRlFY1URNYPJl1%2B%2FSQ2sEPsuY%2BAZUkEYHrNrsIDcqbyqTQ332LkSfAbGTDX%2FsHam381S5rnIiUn8xVJA63sBakmdIpDgTvz303IXCzoFdZ3wFRGP9b9hZn0aV84jnjix1%2B7LheFVxpMnH3Achx0PRE1c9yE9KQIo6QgjkKOFPIcE%2FJGOo9jst6iyC%2F4yCr24ogh8RAOBsf6%2FoEuMMzSfmk8bqZ2tGZVdDrmfAuvMtJolmBR1nw1z%2FK6j6evUwnzG%2FbEJeNxQSjXwS2twJveNO6i62fAmcL9Vm%2FrSd2nkzO7armuNqaXBYiTyhAAE8muhfZzwdpRoz41jMHIlmWeYEl7PlM9t%2FnBo5BhreUJDkjbcsP2vElNk%2BisXAoFEEcIaGEuxsGm5K2mhMZ6h%2BCjikUJ23XXc4WTLTJMGsUERJgqZDRDKZ89NZ29ONFQAjDCs%2BrBBjqkAS7upXYoI9TNUnnsR0atrygMysBzTEvoZrG9%2FdZ6CLc%2F4pq4cWlnmgYB%2F%2FA0gp289RuHFwstXMTKmfaL0dHlDRqDVjySGnfabwnkiQVvTNArC6nlKp31dbzbjItjdsWmW3moSl%2BFobgO0IY8yFcU0N9EbxDhD2W%2FoMDbSjFZSFEF3EOPVY51%2FQPftuMmILjV1U2eT2dfzGWLNQrGhI%2FQyRy%2FTFLr&X-Amz-Signature=b25fe9701b45eaeb0910b14c6ea2798a502d8c9206cd4e37dcae75c04f240888&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXLZBG62%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDe2Fhce9xi2%2BkvndrbuzIzQsMpwaSKXjZi7XCQe%2FvQvwIgc8ECSo9IytP8lTNPzw2%2FRBbph3YBqXHcanZdsk9v7JoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0qT5GVpoBSV0TYeCrcA9dmggY2UnBMaycuoLarbLUstUjFecDv6LoWofMFdMXRw106yVVaRfACNPFmP8Nri6%2F7dLab3HuUFKck9XEuvy4wgzbJ8e0Pldp4nLhaS0EWSr7WlS2jVQ5LxRraH8dr0zslG%2Fop4j2aZFq1e1fBYgixH0sKdHjkv7Da8T9Q66JBCcnVkvpfg%2FjZPDGxCmKBZCwV5bmmenPJKlYm6w0%2BfjgpMrUicul0FiGnsXsHYFmMNnxckfY5bwZCU6ak5G2EG0F40lyvm78O1%2BadgtnBlW0oKOA4VB9B5dFtYmKBMY4AFVsAbMvpxQtJeI%2FBS2piZbBcJAEVKe8W0dbEsFtVSn1wk8STpLZowx%2FQ9m%2FB8lD3D9S%2Bm1GMReJRGA9M4q1vVN6EmVW9zJv5N%2F9G1xNsZ15y6jCXuM%2FZdxfnfOGepBti6yeaUL3XaOnyL3D0Au42q862C1zUOu1UoXqFpsceXBPXjaJgKUAoVuCM4sI%2B8t3J2D9%2FG3MbkcQaT7ZoiDDGA3zAnh%2BPGZe5j6ZYvrBfsdV53iji%2BXLuZGSxyglU6zWBdS2ffoyQImEGAVCdL3LvCAKBCFC6jUwZRxvI5CAkxERO9OaAVcw4K8ch4he4m2XD8HOgojEPrIKJuA25MIy06sEGOqUBoPN68UKBRMZJFrb3X6zkFFht3RHRVfTuZtUK6xAK7qM1JCz8zthIamVmLr8AbZDrv97K%2BgxSJrZGxB%2F6WrCSepGvGnWrBGpzrViWx6g19mfKxG0Zk1hDuWAixkg0IWMbbZEOS6UukBf97Mp1PSIlfgqbtHq0%2FKGdnDns9iTRbk2bdth9TotwDkdY5Q3%2BoRuqwUDVqbkAVocZfG3Ytrc0g34QApu6&X-Amz-Signature=df1b32dbb0804b0a3ce7401418facae4020cd96b952d9611eb1f319efe907a01&X-Amz-SignedHeaders=host&x-id=GetObject)

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
