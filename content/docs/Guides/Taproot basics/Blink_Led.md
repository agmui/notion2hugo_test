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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHCIMXET%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCYDBX9E%2FJ7Qv3ETj74ZEfXYWzqF4MW6C6PWg8ePEpU%2FgIhAOD5SobR9w3IV7VZki%2FnxId82RsFdU741HXsIIyjtO3jKv8DCGUQABoMNjM3NDIzMTgzODA1IgziBa60ShYK8yprDtAq3ANQMQcosMjL8AmFqDeTM6qv88wi4Jrgpzdr%2Fi6XT5GXOxi59mjRe3jRvp1BC2YyHlDzNBNIs2opxGrKeVT6Einl4aw9gk8VEmfMjsX3XR5s%2BoFvO%2F6w5eIPkyfcqVbrDu%2BRWWOvKH3vuw0323n%2FRikhILhuYje3xEOs8wt1tAa4dbuY6IJ34ifkp%2FhtGG5uha8BMphxt2vWKOyotkZT8Bt2BT6Ga6aI8oxu6ev5gYbkpU6BE0X52FWtkFAfXdKFXYQQNwG%2FHWwkmdXsuVRy5yqz5ctQq29BNcmLkd7zIZpFjOQA0CT02n8sYGQ2tLo56LG86%2BMKAsiawgOD%2FrMp6DmAuzoZ4g%2BxwSE16KCGkZ9HggN0%2BxikZHcYLC9ZQVbWSEMbaDZsau0qD0KFIRVMGK3T7ZF993n8KADffMGFAQmdgDKJU3kcfmWvQLzjDl0mxeUeJqLXP0qygZHhy9e5Sb%2B4PU9gjsbFmSonc17nADW7OI2o05CkudWoPsWnOQp%2BZ75qPur4b2xOS%2BTPLFAFfL5hrzkNSvW8pSNX1fkgIB2USv9Gy7yVOd%2BuC71EAnG31%2FophuMbhIfkN8jKPFXUV%2F30Rllx%2B1Js%2FHAG9OCxBiEKB5hvHtrHZxc%2BAnNbKzDW2JTEBjqkATGvKXF7g26XW2Dq%2BnBgKyeCP0XxNL1V0%2Fap67mPLq4NVbXKlwFYmdOP8ChfgG5dDIbAOKuDnNxYCFbDrR72hB72X494c2iHU4evdNE8Z7cSY7%2BJ%2BN5UzKlOI055CbI%2F0G9bFAEUIyVvzVAmae1TdzqQST12Yzp1d15WZAXv7Rp3OQgQsIOUa5lYonQAJHN6d%2BHYXn7gBZ%2BRvFc4BPsuVR9ttRvH&X-Amz-Signature=e830071aa4ca6dc35b5727e3072d8e88ac344807c3cff605862cf0b37039a954&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WZJW4SE%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDA2dg03i9z63rpYG%2BBwcda2a5XGp52b7CGGH5OFy8AMQIhAJmNMyqo8VtBHGo6SxMELmvMIhFOp8hvoZaNAEanw0Q7Kv8DCGUQABoMNjM3NDIzMTgzODA1Igyy2aOIlWgKNRLb2ucq3AMNUlr8BToDZZO%2BxGiwU6jvAozJs%2FaArJjy%2BlRtdDmOb4mBieQ7pk3bIk7MpX7xyNlvCnF2so35qi4HrBrxdjhvHrDEXOaYhcdw1L0Xb313XBNf5qIY1GmmE6aKnTXIu9rGIbkPxalkHRSCjo%2BqHh6EKECDV0TBQAGKFw%2BrJVx9xgtXf%2BvOUdOq7CV6OvzyM2QhHgnc35nJMCjCH%2FStsxl3YPPJAGTAzi50LxZCdaku3aqCSRthx%2Fcvv0IY1TeXj2I56ySVEreLuEFNCFfCoYRTmFCIifNMjuYkpUdhPJP17oPlUrlWJNvNbaO4E120KYZ5xMg4Jg6hpRqnQViGxBVr8WPQmFBBDm1UcIRGy0HQ74Fbb4qkDATe%2BHlfSgiR3STCkRY5Fe4I7I0Mgka3mBL1s0fbRvvqHxmZaHa8qrmJDl%2FDf8ms%2BB%2BxqREknhlJSfNuKJSAB7lXksxR2DntQh5XwU836Y5Mu%2BGvsmqXZPIqAA9nWhTBjKzhLiMlSYMBT58KfcKlFy4byvBUYs5w6YgEMxrtbyXxc1QO0EQFlU2Vv%2BNZpC0fo188iHEcywEzEFiSPaT%2BbVFHSSyuUekPzgN2k8Y92Os5Ztg9cY7dKQqAV8Usxw%2Fb991OQ6wIYjCc2ZTEBjqkAZQU1KwQ7SGdVigZY5KCtStp%2BRFJxswNi0ALvMG76CuGcG725G6ndAp3zSofke9ohBo%2BT3pxHV34IO0UjJ2DNhJH5PNCcRStyD9oHsSozrTWXq3wP8b6flfTtxDZum0nvlyjsG8daas5O1dPrcijYCbwZSgvhn3ZNQ%2BxIhrzJV4NG71wwce%2FXXUu9cz3QPVupyGD1mck0AmEc3%2B1W6pkvGh0RKTn&X-Amz-Signature=c45bde68ba186a85189e4e333c1adfd9d335eacfe41060ddae4a03a17b1eb62c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
