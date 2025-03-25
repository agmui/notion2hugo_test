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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBTXKIXJ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDiaxL2ZiUaAjkHAQTVU9eA%2F%2B1EDAQsA1Nhn6RsySKsSAiEAjTysnt4a2rcTpqIynxUYrXJp5W979nXYfnpAYTDqJe0q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDLy0wLtN3BCN1dM0FircAwAt6S8QrIOMOthAwRN0CeSfzjdsfK9z3a3oO%2FIB8g%2FHGxizFhmRL7EUVFTW1hb9v%2BVzfY1s%2BSwfZw1l7ey465CXnFGSM8RFUmrttV88CcLWG2j2BIUCzTZXJDoIreoRFXFZTYLAA%2FVjvfXC%2FGMnPunBSzrXvtTxe0PV5oNLsyN%2FkE%2BqLUkK1FpbUY4ybnD09c9ynjLRVR2P0ZK2IErMxL9w6wA9aNL99UL7xkUArzdAPuO0biLlMe6h4cf8vwXdiz93d8xIyDN3DAC9zbL0mprabPfAk2t2qb54%2Bqk0PyPlOSozx4PTygh0Hm9dvxLF6xFH%2BK2f2dSiaG8OVno9%2FZ8y8eqIhv235OQqiLQlrsRc16UI1vig%2F4PWgi9jArPuJyQnnFPBzI6UwVFlwNhLhHCtfzOqPNeXIfeJeYoeC4z39ZNraPNXCUJp9LhuYIPND0u9oaZskI1O3yqN3YKIZQUeSH57kXV5o3xAwnxaQ6pzbqCm0k8%2FeU8Vz6VR4mxHdgPo9xQfWX6KB3R2Q5r4Tn01020xMxIgn1%2FRDi%2FEPAI%2F9W8g8RiSJV3HsfnbPdkLC5otPWJBHOeuz74sQI4yU4LaI0UO%2FPjyHVyM9g30keN0TPWYL1xjp1lgS%2Fk2MPjsib8GOqUBbCrmA%2BX8mVP7wl8D%2FeOYBTvbNd5S704jHaMBFWjXsYVyXknajIfsKvUbYGm1ablZDxOHxCjj7ramndcljbPaCqirt%2Bq99GfLqcwsrRSymmctkcwVYkZvx1U6%2BjevJFCzF0yp%2FeQsFnOCyMq6QtJ4EgYc8aB%2B9dX00FmRYCv8XMCFyZ%2BGKiJcuHFg%2FPo25GYDKrhzl%2Ff8Gj3hBeMTOZtU%2FxMK3YFw&X-Amz-Signature=e7763edea8f8e12a563af52f7d81cd4491fcbd2a04e1d84bb5bec1bc6f3f4f9b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRNBTV4U%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T100903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl%2FOMkjNkPYoWYCfKpduWkD6Re7fY7h%2BEgCLEE%2FWd98QIhALsJBTO27Mb2zn4E6NM130ALtrsXuLEcH8TbxGnsr1vTKv8DCBIQABoMNjM3NDIzMTgzODA1IgxfzTEP3pHnyZz2eLQq3APinqhO0EEp%2Bh1YrL22yz83JgJZJE0B8tBWCnAc7mOwxLXQf%2B177tOFyh57KG6yiC1j%2FsDl7S6Qw5veMr3XigVohFxV4uSdCqe8HYi1FBaQoph03o4jVewkWlU2WE82uoXYzZnTO6KISCalHfpwdDBoKEAgAjNcjkXw46A3UaBAvRmdu9Ry44W%2FWUd2CiMQQl%2B3ZGJp2QWVR9UVCi98wpqnlusnCwfC2QGDCL%2BbIYrRqOqgbUKA552%2FP2z%2BSdScfahrbpCO7Fm%2BzY6QbqWrDNB7MxOWJvtlF7DDDDsmPVTQeRqpSZ%2B5lcJEPJxPO1I2bN%2B0kcGeX2GxGqGKb%2FTmYTb5YIBftBEgs5tKjjC5%2FJaWoIssAofa%2B3uBTdwMw2CcyCTYlbcLUMiFqpqlqurhqc2v6wX72uOllLDyq549qqPbUBtO9TeWzM3MgyS8xsXwXmteDznmTKaQ233BVGkvrqazZuqeYMaBVinAqBpcBroM35g5eu7E4ozOlF5mThHoYGKfg7rsYS8IR2Q4Noh4xS771eHwd610BboeFrZMFN1E3%2F24zUt%2B3e1KSKZZLbMecYP6Uh6fy%2BbqXlHPNcAYGfuxf5qxRx06Df73pCOD%2BAi5wmwvFWpJ1VGN8En1yTCT7Ym%2FBjqkARngtgkpYaBXC3l2al8L96OHbLJWwS9yuCMBwCuolbKdpMEUe%2BOK8bicrz1SVumykU5Vf4mb4VeUg4wwE5EUD%2FsdF6xcPmu88Bi9w2tFtpOu1DRPkbx4DGMxRb0YqQ7ol8HmvS8IJGv4V5jRlrCNYG1cuh0q9815eQMqH9k9Y%2FazpBCzYJWleFLKdp%2Byp1v%2BJmikYHDIROpZIrQ6UIuVmZb7nlVa&X-Amz-Signature=732ffc63e7436a36cebfd327f234f6757768b7d3e09c41d605dde045481e8024&X-Amz-SignedHeaders=host&x-id=GetObject)

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
