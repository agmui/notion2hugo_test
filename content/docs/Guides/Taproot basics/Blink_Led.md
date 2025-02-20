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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP56L75A%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0HIOcOgmZD2A8ZtrShgyprN2v0RmYhjU9rtjRVcLmsgIhAJunispudhYmxYfzMXy9mygUR0Eko2F4cIkRCrVtTIrcKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhLc%2B7HJcO1Ts1KMEq3APHpQcSjc62%2BeLEXf%2FeH%2Fbso3iUT%2BritszElrqN2gQLwaXbI%2FGN3bcK%2BE2zBDPLjUwajSr42Gp2gkfxvUF9pkH1R6zS%2F5IMfa0Ton1pctEAWsmrs1Mloqz42gluVK%2B9DFwuRUa%2BcZ3lR0EDGxLvjf6Gufj69YY3M2CV6cVHPgBCYQ5xJtvNA3OMcJTv7mlKAs8iFEDyCRm8I23VMmPHuE3ZSvHOHd183j83eIrzmJ6Z3DGmUSlupPmGg7Hd79xEeuPaxaQ%2Bv3upkF6oYdDVHhqvksXKeVW9NV0cjyjji%2BQtsKCfdLPb8r7DHFLQXMPlXhB71obIsiHjELBjTdHbNgrAVISKtzSaD13n9R6TlKT%2FJsKxm%2FY5loRDA6XjK5ouQvse2fT5PT%2Fz%2B%2BoW3vDNNeWu%2FM7YGFqz%2Fd1WDFItveQjM%2Fop5sErnNuTY3DjU88lDo3XCP89iE7QDTOu7xfpc1ijhVHx0KdvABSu1hAaNbYoXXJNq8Um1qQy3eHmQrFwIGa%2B9eEbhXL8oNe4Zh%2Bq%2Fj2FVin5J3yJMtlkQymFkWvHydpE68wDwVZ2bLO26uieBc7m64JWIpJwLTrbSLjPfzoTI5Vyk0%2BndF56s5RWfWUbRUxGQkZ479wzdnYo3TC52Nu9BjqkAUaugZb%2FACpLq6Yl4ywAwF%2FX20W5IS79JtEatHsr03C3O01JBaBYT76Mi2sufCpT4sVmzmdDum5Vqz6O4z3gktfkta4ll0RA2gz6UgpGnGkh%2BUXT%2FPorTA0YEtHzx%2BrnquIkTIric28UPIw0WRS2YFhaFSsu4zOaHivHi8%2FkDwwLtMXc2F7rEgMeBZF29e1CDTx%2FexVfs9aBlsgHZDepa7LnYboY&X-Amz-Signature=180363a2d06729c7a33c7d70e21f09130852b14bdc9eb55934112f49be4641ec&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDSNB3N%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdlsEPttkA%2FpVDNjzdy2qsrWf16neLfVM8LhSGDq9WqAiEA%2BZr9o5%2B94v1%2FAeSZHXboy88Kx%2FldhQXo1%2F9%2FBopg6eYqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDlYEQp2zDD%2BXEdESCrcA69pwI%2B4Ibo5D7IYS9CmkCffkSgXS0THe7d6adziGm0V6swpqd1CxCyUQyGMaQPipOZOrpr9u%2FzFO%2Foz7yGmtKe09Cfewkq3CU8%2BdyZ18v3c5x0lNQ%2Bfmv0fFTlpoOpHD7jHRxmr9mKXQX1CGLfwfHDqf5oOYPCKYM3cbdEpbUAu71gyqPi5ALuPey60vA4246q73l%2BHh9Q1jQx4b%2FyaOaDAXV%2BNu1Z%2Fk6Jg4N4CsznHL%2FtmLWU7N2%2BQevqXbO6iY7sjifZ0%2F%2BmpsTc7keh%2FqRE47XACqGV59bgCVgyCQHHCSbBZNNCKUSpEbO3tMt5vdpiWlcUha7xyYCC8ueOsZHKYw0Kk8LY5uGZvi2Qa2qQMHBC5MfX96FGWnMIWc9h8Ab9v06Oh9QPuNQV0HkTe7IE2sqC4ByUiI%2BjS5WKfkN%2BA%2BYgtwzl4lGmcJNTVdf%2BK3xmj8%2FmZ2uc7LNAGhePKHKkoaC9DbYM3xrZrFX6wJhTglFnN3ywBu5bnFJhPrOoOkAk84PlHK%2BN1tbUMSQgc1Owa8Lpope9w61ieCNjS1z6a8wgQOLNH5iMNzRk820%2FKG8XENg6GPLEqbaET7%2Fv5btUeju5j9WCGk2L9D8O6o3yT51WljC1is8%2BMKitrMIT1270GOqUBXIw%2F4rlEbh1s4YFlH%2F9PWPvOyC5%2FBrNsKpk0L3hJoHryv93xFcpH0YKBCY9R9yNHWmvSfGXOzJ8j9Xn3aFb0DSs%2BzFTFhswy4PphyRgsQT2wFLuYtjIiTfeFP79CQNX3ETdTWAm8PZfE8dVI%2Fj69Gl2DcQXR%2BP509PDhvSCSwT8EmG5lvahGZ8ISFqb8fxcgp%2BnLUq3vvhYn5xdCKJcZ62Zti1IG&X-Amz-Signature=57d67b430eb6371c0455bebdd4345e6ba2e8a32eb209e44b0210d8117cd37a6c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
