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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFHLGFKT%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCqWFPN5cu2TDNZ5Dq7lqdAwaX%2BdBcryQzCuPG%2BqpsfLAIgTLI0IdLG9akTtaWUf9sXjtkbja4DIkwS4%2FV%2B1dvO%2FM0q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIQbJ8ihVkunJjVhkircA5mYWVYG2Zct9o05DvzVLse0Df1xeXVmPQz%2Bd4uRCPax6yfIptvRWSp3Y0SqAuOIYZMySS9Mu%2BKWP9NZvTo8Oq5ZFtC3vTb1%2B8LMcEACMrwdYkCyq3GWH2LTqOYh17PiBB%2Be9NPMdt5UfPZUX48Tp58kYMH6vuBPKIl6%2Bjrw4jiCrWXLtw9A0G%2BZqIn2W7%2FvFBlXICQMlFGUnccWBPnjGca9%2FY5dmI9M8XFl2K7Xt8jN9Gmuk76BD5%2Fk7Aq%2FrpnmAFNDsNJCeaoxEiMIJbIrNO1rdYRntjT3iKxmfFhml62sojvc0GPQuvz0I895f%2Fn6B6Rpn23OerXFQExpqtjcwdkSGl%2FYX7d31ORxqS4yI6cRYO%2B6P71Xl0QgmPApqEV%2FpIVoQIVLT%2FXMOsbAb9JqsfgiEnpSpJXnImZhm3Tfg3bqE1QJM%2BjRLvN7waZqat9y0r1k%2BkCdtgzt99b6Q3I6ICMZuEwmkPjTrcgFSjL6e2A9pSfxwgGo38gFewbvbjqctBNRwNQ195q0GvtK%2FnEpAWYRNliYcHj%2FVGdfRmvG4bKBIgQmiJCGdA2Fzq5JixhSE1i6B5cceh%2Bu9rXrgrYAMVSBwigBR96s5WC82A%2FzFqTSoVCoNQG0dxSpsbrRMOfsgb4GOqUBitMxvAHEI6SufABoG8jsg%2FNiNyZX9XEyXGHj7yT1%2FPJuKzqUD7G%2Baa0Hv1%2Fya3CJMe9hz7P4YDFZ%2F4omNgvx8nFxcdLr%2FgkKfr2QZ3jP9uW8HhG5SGH4hEM0XG8hFJKu9n6uvFDd8vz09o10nrw0P%2BsOiRhRDpJ%2BsqSswh8v8oFNGiS1s0HnZCM43m6UuDOLtT8xMOxb6qw%2BSK2etLVieR4nv3nX&X-Amz-Signature=bda05237fd1335e061edf30286540cd865d2100646875838c73f9b0afe5987ca&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2RIR7RY%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIBqUpHqi3W4bMrcbGJwhJ1rX2ty2Z521Y9Ihf93%2FM5OhAiEA3sXMkgO05Y6E57wBZCERqPpKqOdTqpebIFz7wViPX6wq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDF0EPq1DYLGqLRhirCrcA%2F2svU62E%2BIg%2FrFq2S8S%2Fz6qzr%2FuFdgwMy%2FcV9NJX8o8ok86w%2B7KhqQpLk8LC0LHQcAjNJpNJwLCwq6vmgvH%2F9zkyFLt0KxFHh5fWo9JhVhYVvtBppmwnbFSSaRUUh9Ok%2Bt4Yc06tUCwKmGdaGu2vgBGrg5%2Bxbl%2BQ8Pn3UWrJPEK51r8RKJ1kdb8MBUVQVp2crBJ%2Fzsc6e6QMSWd1EiPjsGfSBQbOKSp9t8l4v21X0c9aYEjLHrNqdreLemtGzKyS9SqPIB6cIBrzToNNEq%2F%2BBYJdB8BqziBSGbdfkHCr%2FDogKTywDqSuUJl2zAoy84mn8lTVV91j5TuUbAfjBzDc50chrTf%2FUwhbC%2FQtODGhOJ2D2i12Lj9WmTVM%2BMmelR3wbVS0bVzMmiew36qQcTtk1hV1CrgtdL7K%2BCkJVQCH1jVl8nDKTJ3CwGN2gvUv1lkvrwUQ1lGQs7RYY46uQE5chbHlh6Hnh0S9c63N3JumRnwiwAjcSx5eoQScEdo8NHJGW%2BMtISsgjYfshf7csxx%2FiiqY5udq87cbGCKcNTne0AfcqPavnDWBUvbHMlMA67VMKd1mgJBpHTF%2BmP%2Fghsn06Pt0oxRhOyQE1MqoyBv3A6r6UihmZKimqAKodw7MObtgb4GOqUBAl38oTIQDOT0lFd9MTyK4Oro2MTk80gquLz1ag6m2JQMrl9D%2FtJ7EN%2B20e%2FJakBfoq9QSzBrRFz9qCTxhx0h4H5r80URUTCxaPOSyLcox%2BOm4ZfCcRiJy3oLuVOh8c4z9h%2FggLsrnDB9kWaYHradefkv4HYJseLdnXTNAtHDLZ2VjwngEWuq%2Fb1ieMJtLylV58QekpF9ylOTIgqZ8hxsKyzShkQm&X-Amz-Signature=efee99660440543179072b8408184b9d008dca36c50101de94d8f36e7f3ef43d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
