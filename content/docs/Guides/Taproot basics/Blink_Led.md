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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSX4DOVR%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCuqyukkYDlutJej%2BZfsLGPVsmaV6RRlP9LGPWNWT1o%2FgIhAJ370cU%2BPRzM0oFHB3uXkuzit8%2FHxXbOJ2Kv%2FgjhePF%2BKv8DCGEQABoMNjM3NDIzMTgzODA1IgzkNH1Fle523Xw90Z0q3APsAkQ6C3VXpA0gp22e9exERTsAEdSasGYHBbkUyrG215cvWPNtNl0e8pR6T9axkHc5BQaZmjttzS6%2F5RN9y%2F6uFdpcAPUHVo3CDAQHP2mtLiXblNZG3QEKy1U2PYLGxSw6kQz8PIQKyhOUTn6w4qPvozRTZRvl%2FNOQuU3ABff4ACPpZCtU9kAQ4BBrZ%2Bfmd0yLtNwTbuedCl%2BDCV48w1E8JQBZGeB7NMlcUxmeEm1fyBQrrfCiaMEBjbjpQccmHCpIviWV3PYmTY7%2BIbLuOPXZmIlIWZZ7apI3YSKTvAJkqV3BUMLBcFuq8G3D3IEc0al4Jtta7uh0cDmtCZBOFY2pp8ux9qTPFOM4OT3zh94D%2FKk1%2BFnUVEuWh8SG6RriPESQKKYaYIIPUuHJLsoSKpE5EqWQ8C6Sx2TQTFecbkDucfspHQIB6DbcOMaKxzymu0VqCqNxVf5FrC5HbsQ558Icka4GfuQpdT9c3iR3c22raUuHIDhlSjCmDHaupRIsV3YTB6XjqNTwxpHeQFp0tijA5ze4BFlCxgSP3fRBxneJFXzTb6Fqsh4xl8faCdIsNS9hwkV6FJ0Isn87cvii6Kq31TJ%2FIp7XD2BOQrLzkQPWy9ng%2BX1t38Wr5%2FkTtTC8tP3EBjqkAafxEG1NRZB1Qg3S0ZfpNwT119W11x1jD2EAX4e0ExhQriDiYxpmmnAkorfBFRDp7WQTjmfhYZPkCUDXHkzP6P1bvwPwdXVjzJvI31ytuwc%2BJzxOXtv9Xsfq3ydmY6sBcGHgjZvq63GrrSi7xp%2BmzY02YFe64Am9%2FdOmgDRld8dFyFBVxkOahEEgMOObZS9CD9tnI%2Ffoy6XdFfsETrGibRpwGyYw&X-Amz-Signature=a5e72f815b3be028787140e6bbe2f7d3492c3bcf388306eb272745a441da2945&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWOLHOAF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIBk9n9gE5P9m33QuT4bRsBbLxRmIIu0%2B9qpT6SAz67DhAiEA3Wulxe%2BSgOUxMExJmlSO%2BQ0T4NOzS34m2AgW3yvY4eUq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDNkOMM5wq2Rc7ub8HircA64HDHtIiXhIIwt9dpIy7qRm%2BQz4M9FOqv0b%2FTuB4TReJGdob%2FC3zuQjsdjED7UMNKi%2BwNgVVbVIEV%2F%2F43AukcLQMH3nOcT9%2FgDjYwZKJPFAZw3xe6DkCGzHANEllgOE8mKoUNgnqkBROTVzKygI79t2wCzPe6HJg7NnN99eWBYH2Nxr0e1apLN6%2BvBk3gymDcsm6a3y5bELNAgos%2FrTu7mbGaKPJiKG%2BFrc10ci9ejy23%2FgAS6H5o53EjASQhDZ4zh%2BWflleY6zxm3iUfu%2BNiy%2FFjqKH8ONoAtuugvXwWqPrdguQ1Dn4zpGRdK%2BKyNMEKR2CW7I22A6C2Gr1Btocq8WqPBS0QsUNqp9hEe%2FhnuKh%2Ful0ht1fPQaEiuJnbcop7xBx%2FpiHsnP9WXWcmdVM1O3iVbrsGFhQCElf%2F43ztcWpTYRtFO0N0hayFqmsAQXcBY2GjCZ4ceYj0s04UvPbTBlAafwDRGpxf%2BPGp9ltokdO5PlH8W4jp5Y9WxZrvKYgFmKCmHyXh6DndWMIrt6ZDOfJDAC8iP8tr8D6lPY7HNJE7crksUJ5pe7tOIJV9%2Flvbnq9h%2FFVGzJHmJ60Cg6%2FdvsAR40cwBflyQdq1B%2BqhU%2BrVWaF9BRlRuL09lBMMa0%2FcQGOqUBMJDiO7IX%2F3j9pG8uIYpURZCiz7x9320pM1ncl4LWi1Sch0c5rHOviI6yuHeyc25PQmLqPs5uGa2iShldJHImimE9cfwzngOL4Alzh5SIKjTtJN2o8fbJaDryq64lbFkHrGN5iloz38hk%2Fnzlx%2FirfHGubOYVp84ojlxIdYMSEQYKjfmux0B7E%2BVmdV%2BtFurp3e8EtbchWSYBI8nCfJHSfSg8yZ69&X-Amz-Signature=86fa9bb5f5b59c85577fa4ee3cb983f6ca4ff888842d37209cc9a5c3a8822e77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
