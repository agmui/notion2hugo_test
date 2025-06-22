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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVEUEEOO%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T024828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICpqykeAA8BWyLUbXIOmit10Lrk68fhlKQ%2Bit%2FXBTvZCAiA6W359RvSyLJNVbljdipWws0J1ishyZZymBqHaGyVLfCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuku8oUXeTV%2F3T8isKtwDPLQi0Zxb%2BuyoWIXpx1hI4Tc6m32K8%2FaRyc0OjKRgD7s%2BSSIcBtyQ9ZDDBdmbFBrgXd1g%2B10VCnK0%2BAky2z%2BcH5CUp7pDq6lZy1hKvpmwRRL3fqKX0B1d5IEZIxIRx2hvs%2BkAZUBVLJaMoUlexg28VWaVWLHWMf8aTT0hLA1Eskh%2BYryfIQqw%2F%2BdUw7wXdkgZBrmyGPLWD5ob5K3ozhhI54T8LhbaJ2rZqG0k9YdZv%2Frf42xXSq8ykogt0bDJFSyOJS1PZb3c36iNUa04KhxmrbVUUzwnYHHSJIJXBX3jPU0kC5ENar2an4ZA57ore00Ng8fq2Ct3lvTH5zrR7Tkk3SgSLqNA7hNIIrZg%2BQs9a2kpsjqg%2B6Pmx4o92sQ6u%2FpW1gdepGI3x6Mm3deiWmcJG1FsD9%2FYigtGcjhcMPXeEPVBCJbLVEtL9vYSx9WWiPy%2BGgOPiNFR40PwY7jz%2BKw7LN2oA2rKomuPycvFu5phLCLEz9CoDI76QwKACVVCcvC1dfXEdzBXar8FArv65f8Qu7n7ZSRiGyBuBfrFwxhcvFvYz%2BQZxGU0g8HKHkQaHox5qqXNLdSN%2F6RucRnx6vnIjU6NUM18N99Quz4ml5g9CmG67YGzIx2dISk%2B5OIwgIjdwgY6pgEvAPLhMIykjZpBcGfSAJVoytbdFqb3gDQ5wnKVAtGIDBch4ZNxgMneauRyuUOWx33QLx5g07WIgVzhk0m8OrS%2F6UxlPSsoN%2FlQJO%2FsSmD87aUt%2FO2G5waYmSLpOO%2BxbqSucBln3Kki5HwDevwgcrqiLKi3xwrWv1CHYb%2F2Ix4KqoQu4aotpI9xItl3B9PMU7bxaWa7OkfTEBNV0ZxPuZTSYHuX6ORl&X-Amz-Signature=3047868ab245f6652b297d4a2fe868d723701818d16f5ded7a88542a3d8afd85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFYB5DI4%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T024829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4NpCdLlke5d7grCad2LgNetOZlU5UCVNAHa42dYIO8AiBT74RbECIx5fAKcMHfudtS9L0gIcYVMNDlO5mG9eFeGyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNSPmEYfPbHdjwWjAKtwDJkan6fRU52QOF4mQi%2FmpvSqUoa5%2FJq63q%2B%2BXadupJjzqTaf65CW5UDOdBWvbVs7SNmIF6PHoqNdny5te4YYAmsEduxS4hlVWyjmFjSHJoa%2FpcA5RxgqYT0RgJ2lZqsp%2FoyaDUSrwEajVF5jX90eNGdxzZ%2FQfQ67tw4wkMC%2B758n9agZRSbgueIhqzrY8jZBRIX9ZetDfUE2m%2FdEtQBn4Uh0GqmaYX5MonDj%2FuBCRoQx25FIAZJPRBMlmMhtY06cWBOGR9c9tpQKiUOL7X1hBJonv5dhQrqSyN9WprFcVBiUHq%2B2iB7xJMqHv3ryeWYOkUQHQhAuZprxKoOm1uxXhrPcIGFbXUP8DRxeYzy8fRB%2FxjGI0CcN0tN9sCowRaMRocGkZ5Kolf47J3qLpiE7fPKZV8QpOZoi8BCYVane5Om6JnfhSpuu6V81JyZpqAzPZwcYJDFPgrQ2yboMsAVVDLoqbhPAhKHdUhzCmhc0eA38T%2BTswKik2YGOSmbfOrnQQqJ2NDopwYQFRuwq%2BgksHa%2F95n2dh6%2BMEFUdQqZqCiaXHxXD%2BpaI1GdGamQVl1wnlOvt40Xh%2FoBG3iqDcHy8abFLuGsOMKH0P9hwJl1tlAlfRqLlXT5zCUmzsxNswy4fdwgY6pgF9k%2F8kwUI%2FejwzqNjyB0TOtInMEXN%2Fnu1Fxb0THcPA2SNAygT%2FjG30BXA54l0Aq9Qgi3dB2zNuGapIBfFyD4ytezTl%2B4GrleY7LKCDjj8qiHQ5xiejXFjPD7EFyL0gJJrs0Yfulcz8Awah0xKqAKNjNxW1QNyquKWDUb%2FMRN0wheKxMPyJBhWkyrHKCTeK0n01ByuiUQO1694kYv66jzeYFr05T0c1&X-Amz-Signature=7a1d7d461973f35806854abcd361b81a5dcb7fa6bc96fb5f2d6a0fbab10777fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
