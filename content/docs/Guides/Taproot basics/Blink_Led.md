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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642MH6A36%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6P4cfYon8hX%2FJAZOR%2FGRcE2xVw9ecxCebQVSVmYAz1AIhAPTjirr5WwBOWmAjeeRyKvF6%2FmzDL63m4VslYEiT52zYKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwylX5WgVs2EQ0CVAYq3APEI8Ay%2FK1F8usK7u%2BKemaimIynGTEymhzs127oFB5usGpC%2FelsaMF5xQSyY3mlYaJKSOPa3A9136bXElhg8C9AfdT6K1oSG6gG3GkR3kkDLtvGqw4u8%2FXjgfUXYOO%2FHY%2F951vsUlgCgl9AljTMxeqADbaDPf6sqnMEb8BRBU04j%2B%2FSTZ%2Fc8T8ZFP1iLFF7KcGiz5ANQjMuFZ5bJWy44sA2A9wLmDVLLeICikE%2BGMaWrN6Y49f4Uzw%2BU8dMZYouYSYLeXTYaRBM7TVVx5WAfZLLVy7YU9BKu942dPHFk24QD2n60SUumATj2H0Js3WQOLt%2FeALvxyTpXbThcvILAIbqoZwdWScDUjDtw1dw%2FjiE%2FFHV12NS893x9FRl%2Bvr7%2B%2Bd6yFj6loFGYW1fulOZRPEsGnT6o2%2FKfsMfd62%2BP6F%2FVuDJrguRRn4Q%2F3Jl%2BsDHRI8CKZd6SWDYttCZ6bYr2V9QP0y2X%2BowDhHqOgIkzP11Xny0YMsbpeJgqGuHpS8Adcl9Es3v9a9cCO5qHtnrjr5SDzQUlwPz28ot%2FsAwIqaRAaPTMZ7J7d6lT2%2F21FmRw92N%2FCZxxtOXXoLYWJTSA6hXhlWKf4XwQtcZDQRLPNL2e%2BNh1zWQbOY01SXuNTC5xOq9BjqkAeT0815jwZUY%2B2nPDmt8fRSXbMPN6yif0eaUXErwz%2BeVp6vG8DaGkH5I5PtxcWpDGVIPvpIJxtfuwEGwnGIho2WlkCtoSZf5chs3BFx%2BwoUFjHG9bS7olidvbRXGW%2B4uj9RAS0eqNKWWHOBeLAQmj0evsn6ygN%2Fc44MZOPG2JH5%2B4B1bwwHs50Yr2hqzq3xrrm9r2v%2BLob5cwQbhimsRVJ%2BazapD&X-Amz-Signature=f8b99d4bb7e5b4f3de163a9e48d4fe3af11ead432b3e0fc228ac93e0ec8ffdd4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3X44SX3%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdxm0TUl7%2FyAf3GOm8Uu41eWzv1COXhjxfWignnaQ3bAIgdnusYPujDIK39rehDZKjA81t85%2BccjJd%2Fji9mEJoI1kqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNP6N6%2BBa79b%2F8BZ8SrcA5o1yC4JPdypCLcsOiWi6FnFrCGulh%2FTF2zJN7rqJeITD46HsFbK3t0IlJNfZtnCnG5Jm9Z8jKWnAHI3fxFRSx0gARqRQaLEFctWu1IaA7%2Bi8dI7dacxo7XWm9QbFHn3ueeixCrejjJWhOGbWWsDWFfvNhgHQFBG%2Fhq1AS9GHmG1r%2FcfFZ1v4bMxOVauqdB8zKZznFzrxqmf46R4l2Ydp4bokzspUf3HNr0bKATURbNaU%2FhTQELIhN%2BEAvIUnAmI3e%2BnIPIUhJCU2DBK57IUgXlPtI%2BQYXeN3x9tBpMqyIyUSSqqe9OxOu89oHaGRRTKP%2BwvCKuL%2Bcpp26Q8fF73nEA6LxQgI%2BMbS1Z0smsAY%2Fsdio0EeCrgTWXvHXHx5OBKh9RWYppcZ2hkTk2T7dpfqXzkMSkffCpzJwaSeCEI4imAiAFa9gXegK6Fk3U%2BjDEVeaim771TGuh1t89DdKLli1bPYHICd55NNnhi0lAwf7PQ5cw6Q%2BXDi2L%2BQjNOUkJ%2BbNAt644iTMe6rEMxcxO1Gwx50b3otXEtm%2FX68OVYwwmKoj27aDOMHOSmCcsD7seAhLpnxaVuCfRIRTve68eSyyIFiRuDI%2BI%2BK2FhHrbpoVtnsNyqJolBRpWCNqOhMP7H6r0GOqUBIai7FOyTG%2F9M2Do3CfyP%2FvplUn8dIUZXYYtVe2M7rzYYSGR5n7c2CrFzfCf4wEFYAx0rfzaLtCcRA5cBWmz%2FGigtx5Ogdrh3%2BzMchRfufmRdPBcGggmUlSKYMcJ8BNZ8UcUXpFjQGyMdlOd7FOuI86ZJn8trE6veKmgxvEhedMM0jopuYSZDxAldrVr1LzjnobMqJ4%2Bcqrm30wuXDiOH9b8qsS%2Bz&X-Amz-Signature=8f50703386fc7b644d07b7c42969e58b28340262b11d10bef9803aed61152096&X-Amz-SignedHeaders=host&x-id=GetObject)

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
