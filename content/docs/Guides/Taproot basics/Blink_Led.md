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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZY4QZI2%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIC0Dg4Z%2BctfpnwvHkqwnMoHAZCbITpFGocG7P1WdbY3vAiEAq9WcNFjaKx5OPkoanWD2l4T7m5VO19WEmV1zI52dTOAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDpy99E2kj%2FnxbFlircA7AA3suLV5FpIKC97iEvZEDa3jaSRyH8khbZecuBdG401wHwHQEobZ3n4JAhyAr7R12HxrqtGWB%2F7ewBgfSTfNJ3rTOWX5bDSpFrweygM%2BigZ6bnmFB%2BDBdlGRN3SfB0TlWD3gnkgSDPYFCJ4TbXVVr1IEPAvFJDqFxg%2Fpub2676J9RmnRlcLmu1HU1qFqUxKjtsw8CmQgbfkGj7b7COgDAZIIl%2B0VYUxaRmj1lgbI3WERbPZoyMpKMA%2B70i2aE1Gy3dPw8ZxM5YOYq3lBgVwXS%2FMLkdKTfs0zZSHHodaiw44JdE8DEoG0ZLwAgvSWBqagmOJahJWJKRqaOwUFmcY1FuIeeDsElPs052qk6Un8RFSKVgWsow37NUvGNXjkxaAup583PyZ6NUPu601NPV%2BDL%2BbHFQyHtyMBHdv9Yxv6TxMrNdsG%2BvF%2FqR9A2yymmqOkytITmYhobhoO5Mtnp7Za%2F4cCqLB%2BBCYSMd6xR6IibmaL4BsPE6kdS0BCDYgYICx4PPZ11l6AeBkxOkF5clCShrm%2FPN8olcO%2FcjnRIfCCEiySQQ60LExiGYyfUvfifgwNCJmO%2Fw6ik5ISQAD57D6abw3Kq9m%2FGTbjuq2R7RX9DVMd3Ft1z6nwa0pOyrMNrblcAGOqUBj1PznUGmTVygskBg4onsQohIKF%2F7r%2FmHjU7LxeXPG041Nd7IKeYKbV5lIx7PVnapdFOSaAPwKEqiAmsbnHp%2BOMi0ZmmQs6nxOSaj%2B6P0%2B1VAL%2FAVjlnz7pJMJKKAAsFjf8k4IUveeFZXXy1ercNsXvEOTUsSFXoXhFp5CGz%2FQ6q7%2FYf1cCmdALGMOGLfHKKIbNSktGBYxRrRtlpAnkCIkAjTZzZR&X-Amz-Signature=e6ba121a6eeb6d961f42957c81dc707fe58ef43e2f5360449fe8f8ccd15ffd5c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y4YTSEW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDUOWsGrZbCvVDgueW%2FyIkhPf9J%2FQDVxDF7xKVOWwVhmAIhAN32JLoEMJmLYLK1m0gjMVeDSgYK2Is1R1HM4K1NPZLcKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzNVcJKgd9nPmB1F0q3AM0A7e8YgBth3f8tG2jSHIUtIin3wMxmliBGTRd%2BfuAW68DFMVlDgPkkRou8d3AugC11BqtqcsgUAEMEjhAO6TUGaPsLwwp6RYTG3OpPMDqXQ1RV3AvHjBFstpZhlvx5UMcPYHYIz1z1WrVMQ2x6X6eA%2F8nAu%2FPERpWrq2Vy4GbriXwcp%2FYVDYOQz%2BjiMoPE9NrtaRC4jvt33NBpzi9X0Teb4BFdy71WPqAQE66Ca9l5tKn8arZibItuugki4V1JTQOH%2BWL5vKxxq02474lum61G%2FxBVlduG9tdzX2oMLk85fLNW3QF0sSp5y0e45tSrG3WUFKf34f%2BWLIO%2FbeGN3iJDewPDphGL2y%2F%2F1pDCd2eBveb%2FIfoI5H%2FF3fMgaXHRONrrrjLqeeg8RA9KFxEd25Kt%2FCNXVshOzZzD2PRfslwpWje4Jr6ZyWbp93Tfn4e9SqjQ%2Be02dDMFp9QnEUG4XkxkMShdWIOiEU%2BNkdGsfrLqkHphOgh72GAuiqc5xYbTE3KrrINWnOQs%2F5XnVaDCL%2Fhkee8nhZktKo3QodaXCLHSOyjbj1PM1MPdvuy9JxTNG3oqrAMpaohbRk0OyFehzi7pyeR%2BhiBdqVKKuNacXrpifi97EWe1SDBJBHrmTDY25XABjqkAXDIIwuMU%2Fcpd1wd1gxFu3LyzI8W2XXcizb1JfMb2zT8ijZ0%2BU8yiE9S4b2o%2B4EGHKSpkfYb%2FUBCu9hy0bTX7W%2BeqdiCWvZLUBfO4CRSBxyrsnPZQbmUf9m4FcDc76N8cibn2UlW51SU1Hi1MZPFmXv0i6lGJUX0Qzjafn1cZ4HvHIDY9wZvi4aqEYbXTrevAcuTjMBKH%2BTjdVFAc2SpMdvq%2FRAN&X-Amz-Signature=482f963a34e9fd41e23533d37b8652d9b5e1ee1717b805c150e1da684c433800&X-Amz-SignedHeaders=host&x-id=GetObject)

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
