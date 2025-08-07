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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ26TIB7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIFcJ5aXnFikbgFkeAg1sFn6CwvILwDomH8ZCJi1gSL7TAiEA8pcANhvfj%2FeExpYhW8ncVYPJd24xwfmWjysmUfejjtMqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKB%2Fhv4ugCtIAEpvvCrcAyBoZQP847GeuLmxJ8Kd8ZRheValquDaEe%2B7chxcWn19JrvwImHWrgOze4vdSsB4RH9V0FPMsMTWkRnybCIlb44kAofAtz%2B5p1jVcvIJ%2Bo1Puw4C%2BVBRwhzilfK7VW5YR4SNTNyubiHKjTshHnYnIMJClMi32UqbX4S34OgKHqhhwGpYe47WjxbSfNVv3Kzu3A8HZs56SUExpFvJZEDFJx8XCghEDp4d0xB6E4%2BhGrEBF8NzvtMArvnm0QhyjKv962XXFWuH9BN7SZHSNk8YlI3WNtMGMjhS80s5fkieP1sr7S9yfi8FF1%2BzXN4%2FrTCTiphnp%2FTIzHa1CRAUeHhVyN1G3TvhvGKbjAsvnco4zEVTTDdDaLsuIVEFMH78a9ORKqLG1MitQ%2FuzshIeQjTeLdpSzn35j8UrW%2BpdctmAF3pwdFUeUqBl55JJ8bBA08WeIA%2FAQAnx1Af%2BMWJN0zIdsrHa1jLW7e2BmFgvhxp9L7zemKUR3Ax3FVNGjc9SGiin7sYD0CBPCWzmcIt%2FklYM%2BobJ9QZ2YTEMClQW9sjGdwWWkZRTg1KTZzbujX5NuXikO%2BChODzVOLEFEmavRjUy6Rrt3IHMNaVqTCLqETe2g8zM10fjyIfTG74wEuvbMMHu08QGOqUBju4l7wVxFluprQ3wDueAsLd3h4pkRpeCK2Csw6pZ5kWl8dpdWuxZTW5Nz48%2FmJdqQhFCIRT73HCKsa6tML%2Bmib%2BPZGL%2FwZH7axysm3WcG3wolFa5k2tj7qVh5l3Opg3ELV%2BcObri%2BnOENq3wnMYYSADwjuXSO0efelewIMMs9ErK8vYvHGi7Cfw5Sn4ZQ1krQiL5N1cxZQy5swJIKrfExVGx3f9m&X-Amz-Signature=6961166dd103bd7158c7959560fbd7e56c42945b0d81d129066678808022744a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY5D7ZSZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIE%2Fi0OoCDbPE6NNNiFm%2Bxo3g2LO8F%2FCxS8dhIk0IOQ22AiBeI0F%2Bo%2F90NyYCQ%2BeuIcySDNuTBDrXc8OQXfbqN3FwIiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGKLc9N813g7f%2B5tEKtwDo4iJ867acvu0Dntg8AQga%2BojW%2Fa9oTNIajYDSdUIHKtYWc9UBakr7cACylQ67tfBF7Bg%2B%2FBLaQu0a51m5rAe77FFBbsD9aXJOjaj6stOyPnFwkWxIetpG757JqnB8AszfSGFYCvIdjKZKUltZ1eE%2BFVR0xbAG%2F8qZWa8AAgGrlZp1jigUsLkbo6tVY5kFGf9qxjLxl%2F1u5MOEqheCMBfh3JrFnK%2BQGb2z2VSpnMTpb8vR%2BVJDALP6js4uy8RSaECLMfyI6h5%2FRqzyybGhVtpBJu%2BoIde4cttGDcR7dTzVdS5kA40MIdhZu8MxWPRDxrZSOcoChngeJaXfNVdRZHgDA%2BdqjjgFrNPbSbEDBfbt4buWIAaTT70Q49Fop4tWYrgSXYH9SXMmDtJPEWVVoAAtiXL7NhSR7Wcld9UAhFNcwyPLMNL3nFZ8R4AhMmXdMCNyEX5iEgzNhQPI6TUdpuWRpAg0Djkivw9o56XNlxLbc1cSHuxEhYFu94eBtnpv5%2FBHm2Nz8MCR12NxhofhWeT5H%2B6pR4q8HPxD55HXe4znNP9qha2bSSysxD2%2FBxMxPH8iOpotIdsc2%2BBS7ceonHtjPiK91yiZAyGFe4je5FaoZHNHSg52sI5MI7r4Jsw1e3TxAY6pgGRTytUaYzgxwuYPtR6Nzau1twD%2FpxO7ZnG6EgtQDtPzo6axA5SsbZtfRcMVfGUBRr5Fc3WTBOABqONJF1G9GtnLQF6cZmCee2oRKT78WxSx5RwSmTwEZ7lXZTzkaOf8xddWlG4n1WMXAcUQV2a3L0nTeWchWrQEcyXoWYbQ3gt6Qd2ixzmm6dnwKcAGzwFY1scIo%2BrVXrHjK5R4R7wF%2FkOucQRWuma&X-Amz-Signature=d8ad7500c54742ef24d13900a5f2c41b37e41825a70fbe6b753d3f26407bbc43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
