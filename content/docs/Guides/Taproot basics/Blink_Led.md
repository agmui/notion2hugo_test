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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W7NX34T%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIAtcPbm1QZroUULEfcXUTkByu1KU%2FuWOQMsp3tN4wvMcAiBQYhKxaVMtl%2BCio%2B%2B5lUEHi291Q6CfGDhLDfU0dsH89Sr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMR0GqJn7HZoXLYdefKtwDbKEg4BsY5%2FQ21rREG2sxaTvO707EsgbMwH5Pb%2B4Xy0gDZ1QRQ6r8DeljAQHN83C3Dxwwrjuz%2FlbEOGcGIcfYKwtCnY6DkFKPwn%2B6nFWNc5DRfdR842CT7cpW3EfnAS5nLsslAbO%2F4yDXaRSmtj8eGnkj0B2UTcaSMtBhj2K07QDzqIKe5MbpRHFFnGtilRzT9Ox4L0RdL%2BnOfRkr%2FK%2BdglUrnHPiFcM2CjK2Dc1Q%2FTBWGQFWhoor%2BdaQ2S1%2BXjmO2kcviHfi57cSOW89qVF%2FC12KRY%2Bo6JzDsThxrr4weGbDFv2GsZ4WztzKOQfiVUmdoshxWa7HpBfcD5wR4tzqz438RPGSVcUhOyRFltP7K5W4fnhuFMcnlLpg21Tf4O5po5IxpyJVYHuwWUu%2Fr8LLr6JbNlJrLXKcBE%2B%2FNUN5YfGZtj49YZaJBB%2FshpDMfO5YUcC9lkHcFZ7w1RBr4M%2B5vzLSInQEiKes0DkYZ4Vo%2FeHnWJ5NCdsCuPKp%2Bpsu1ybOhQSS7F8yc9GA5FnnH%2Fa5IdSacWMfoKa2LnbIZ6Mo3gHCfNhraAx4DTiz6EOQCB0R4JJyPSLVHTEyJvNLJD8z1lTny6j8JtOpRl%2BJjwKvbCehmbZb7xNTO%2Fmwrm0w4J31wgY6pgFrN2UVv1PEIsGTyUrY7VZq%2ByLBPyUqxZ9Bs29RzK1q8k5kc1DwyZSwyK7VKNM%2FdcUeHADDniLkU%2BkULIuCjhRmdWUCZSG1uayTlshBT3Nvk5FUZJK%2FUUshMCG1ybw7v0rFEqB6dXLKDn1UIHkarVNcQPwa8j6YnFg2%2B3jpt%2Bh4qHXYHEU070kH2Y5WJv6TWmFuK9FJmp2JMIRkBzlQZgd3gbvXXIGd&X-Amz-Signature=e0ddad945141f3fa062a0e7cdf978d9efd2533300cc77756238c128c8a15da2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOCUUYZZ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCjL5mXtat1d3mvwRiIa7q88dqVirApUarYHSYwo4BNWwIgBroo0W3XApqdHEw11Cc3c8n%2B8ySSBLJuXM3NjTKizNMq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDNUnDibZjIEIf%2BSOZCrcA8zwPzggsBkt1IekbjexYr8oGV7MglvE%2FwUDn%2FfLoHJWbqoehps%2Fr62nLusMMX%2F5lw5dGHRkx9IEWzmK4PLg4cTGrS%2FB0IGEtrF27SV6x4Id2LLqXB0HkrRsqhR54fLmDIsnvXfNCDad7wO2BILjgTdiwrqDr38Vzt%2B%2BbDL1%2FEt7RK6FXL6QzhRczoHRUGJoFQdGrJwO1%2BSJpdof5hQQZkboCvfuEXHV3A51bVmMbDwKLh6NzlBz%2BhisBWn4ZnQFrQDod%2BKARuAAE1cZncBVo6QZ4KtyJbr60KsNjwzXr1bZoV2yeJTxylfbxf5DbnEqEFGWE4jndHm5B3AaytpzHCSdQ3DHFP%2FnFLWi8WYmSnWEpdfhirMM6qODcB71I61vox0gKzPRhjlAjhKKjIG2dVKx5m56kjYeZWQ01SzdoBDdB%2BMvK57Mz2fFm34lDAuVOJVOvFiR4lLf8prxKkSRglEZ7OL3sEZcYUORPhyWLjesdo51p7Hb3ImcmRz4aW3gA1%2FITm%2FKrmXNaO81HHhHyP657s8vSuzE6uCOxAU1GSZnrab3xyJ6qcidOR6ovFW2cg9CXHXns0ewnL8pGekIs9DUvSKoonutmr8oVolm0S%2BgFHqUTeJDu1fn0B%2FzMKyc9cIGOqUBwno2BYLbOH%2F6Ud15YTGEGorp%2BxpMDkdBlgKkxMnlEfibS0RDdsy00CE7nqWO34VaQjiNbJUNMkx7QT8LG%2BiKwgnSMsQhoWI2PE%2FN1IJazzVhZwoPHuQECD5susVrUQm3XiyeMUz%2B%2FIb02R90j2ZHjcW5sSXhNYjFyDDg8xL4XsxhuKmZlCbV3mzLQXZoJw8Lv5AZCDXnNnjwFgPTJF3CBi%2FLX2ce&X-Amz-Signature=f846650ac6c43d49d328d194c7c819d2aeb29fa12101e338e836fcf111a6d881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
