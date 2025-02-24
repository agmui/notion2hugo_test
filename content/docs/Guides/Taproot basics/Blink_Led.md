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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOF2ODS6%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGdpq7UZMZAt%2BLunBVEHlRYT6BEhf26poNY58NGq1I0LAiEA0KxVvupZaRt9pUotSklzC%2FwPpWQgsRZObmJ2d6E0O1oq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFIAQErL2Ghw2e%2FnMSrcA2TwyO4CYTdh7k3Qkzbh7rGES5Dtcb2BbWFSSDgTaPjTzEQGv8xwJ6jlIVprt7HErPbEqcTQDnu%2BkPyDupXLZjmfzTkxJsNhw6ZnV3b0BRvy09aR4yv%2FgOpiFzSqqCWDtj8cPE7pHfzS8OVxgQ4VRJYl4IxUN%2BsPX2lCGnkZryKYQB9BWBrtnzn3eLvuWnQ4sodNzz3m4wXXU0a%2Bxzbuzs%2BAuDIK2j88q%2Fi%2Fly0YJN%2F3dSj1RYFJL1my%2Fmf%2BrBwFBU%2FB17Z9K7hXlQ14d4Y3XeTFUIWjO8T1sLAI4JCd9Lr3SSq8PdX%2BDngYUEdqtZTryhyCtYJYGNIp9bae8JQgpO%2BOWwubId9y%2BJGS8HYYU782CteOuV1qiZIa8eZPO3PskO0lAOUAXGX5%2BK27YzCI4b02%2Fhihry0Ce9lReZkhQSBX0Dbl0z9vaR90rLF54pzNbP4jVV6XV5ONbwIBoetYvAelthullGS7pWguB%2BFRUPNeb2RCLDNSXWhh0r1g3Bv4yMnukl244GTGdUG9MdGMIcVD9lbZyLhgiubG%2FlUz00%2FB7DPhTHLtINbHlmifkWKfk1IrLxg%2FdZHe5Icw06WfBtRPEsDu%2Fe0s8jqdCG%2BmyzYyRl%2FGc4%2BqWJ76Q8p3MIXr8L0GOqUB%2Fs2FMh6lVKUhK42fkDxztFds6JkCt3RYlV6b7Gh5JBGZuE3raYmaAWOVbY8%2FgxauloWvDHB%2B2QAozb4DKCq%2Fma89MAMFd%2BQ5Dz%2F5uPSGDB7n9pbjz%2FMlGKBdTQHRATljyXwxnu9Ei%2Fjc8StdphnGaSNiYhgrFbtLHmuursbK%2BqMzOt81s%2BqlAa2dEsiladkg0T2xg9PxNi5v6%2B%2BBX%2FUbAC8Fk5O9&X-Amz-Signature=ed8e5856923e7af22a052da90e9dffb6b7ddb8116785e67f05dcfb86bab2ea6c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IDDM2NS%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T100914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuvMSW7NJnJ1gjV%2B9%2BQ3wAm7JDDTo437fD3gtu%2FgVV1AIgcuutKf8pIoEMzHzZvLIgtat4ztskiBZIpp11YbIqUxIq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDI4obi3DTLls2N%2FTeircA3zuVz1UMRgf4L9O6XSt0kLzecoC2%2BzPqhhPPhnZeHn5wd1fsNZMFk0ifgKPGhRKYRmd4VC8EP4NcBdNxAyBCBpySgCR9%2FxaJ5bg5slwE6REEOpqYzLyERKgVdglfmz2Cgju9ih2ubq5FBDcTSxlVZoRK%2BME17QwpPeNC5X9KxKejx5ZGjJjQRygDPdReTJqHz0R3W000jsn9MH%2Fj0YRErgeErYVwBBzy9qVIW0GdCr1uoRxYdR%2FEAmnT3OvT257KO77j%2FeQr5Ut7%2BD1LdrhLM4PVLA%2FdCcne1nbKZyeL%2BihRO3S%2FWV%2B3oNWgvIZNK14ZrNH2axa9ZsBWPfyBqeTRT5GHiXbHscb5JSCYxJPd%2FTKSoddSl0AG4AYPNWfmvy3%2FmcYBOVr1m1X7VlVTYlsayKFOBArwHpQ6lcDgmjx5hxXwnQXpYKz6jmF%2FzV5FWUHryiJMah%2B6IdeTniitxEltxsHNhjAoABBn%2F57r952hY8NDiIhvutYBQokcHeVIjcGtE6XkkB%2FlTMEkKB%2FJixRFsSMa1vKq7wSiIHDRXMQC6TXz%2FPwwEMjSP8mb6O%2BDqMqQkQObigvDp1vYXO3uatDZREjTxRcQe4KzsnvOHioHFmDEeO8Jcj76xexlEwnMIvr8L0GOqUBrr0AlSvTmr6o1ENmONeooJfizxXRwMHZ7cCZLZ3OOi1OhIBIDEesy%2FybnXTmTHH3RTBw4cVtH7oCWjTNDLhRMq%2FjAYQdTdOZ%2FlunyqgNCr%2BqGg7ek2xCiT62oqdQhdz723rE11mv3NDQ%2BD6vzaKWmj%2B3bx0NW55El6sPzi3HLPzxED6%2B524lR%2Fe1nYcbojQX6kl4mrk5e5ixSzqNh3gDrN8kfRCT&X-Amz-Signature=d8618e4216590eb63a308dc2901f67340b6400ab763ce3c12d39d68bf4bf0ed5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
