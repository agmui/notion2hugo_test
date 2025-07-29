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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CUMKT57%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkMss8h1wfSEz7DSoxMdMy503oxrsGIzpOdtlJOOJhuwIhAPmwiOOzu%2F%2B%2BwBjdiysOhGgFBhdY4ycuMgTsQiRJgH1oKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxligxKesQc52LaLyAq3AOS8SUqQDptH5BE0YWOLlwwrFFssjp0llT%2Fr3rwcMdXwpZ8vislLObgSQgFI0PJvd51Nyq%2FJvsqGB%2Bfo060gY1Pu8hCzd7b6a%2BVHtENlVaLBxJdzQv8Ng49z0%2Fa%2FvZCduS8Ta6fnc4hT2vRA2B39rIYJ0orgNHYXI0hMFHJuMBrJbasr1yb0Ldqw9BSlLWU1AAvA%2BbPTtruKtH0RaErbAXKpCsfdwIytNs062Ab1NbSxx0SgKoo2e6M0gIxPBU%2BAk4NpT2z%2FjI0izb8gJTWxfYc%2B9VFTI8n9NZRS5Z4GSqpy%2BETXt0aGbSrg1a1u584AAYKMlzAKiu%2FBbdagCcjjhtHGkdD3Vc8RkJZEQylq1SXCdvvvZWuXOoKxaB8sRBjoi19pqSnHp13YGFdFlSrhQKg419Pq3edIIeR%2Fdeqjed9y%2BBREFxKkgfIbirB5wqzeWoTYKyIsPwYqp98gwZY0%2BoYhxrpm6xdmDhzcBaV8PiGJ4dujs6pxx5BxCuC2VtjdkJXmnDSJ5UHcl0kSw0nigaDucMvG0hgdPPD1WL8SOLoaBLdlFZHHQ6sEY1hmKtPdcceDCQtaOOKL0kjqPU9z7ZtnU6MwiYwyeqcryhSY09wLi8hjzcWympxJMRQMjDDraTEBjqkAS2VMvsG1HbL5BRMegkisZUvqSSTXPfa%2BbKteJUOI03JcNn8le03gMqGIXsMLKhuJNL0QzlwCU9Yb%2F6V1yUOCorL79zCHiwLwX0pR2gz2fFvRQN7JescVggZ3nFpF1yzxTwExZshwta7DJfSGZ4ctDGScoGMGIsfDWuL%2BidVPvnKEIGtPtbkLULYd7RTBk9dUshI9XoBYQP64UKsowWr%2BNDK90yv&X-Amz-Signature=9b8340cbba8ed7485cb73260bde126829a23820eb0ea953f975f06e8cc0dd98a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZCFKVDD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgr3EM8oeaFupy2YQFKG224QY03af2%2FtfCzcKqStfD%2BgIgGBK7pB60%2BxFTSTQKHRfwiEXsb70S6eHVAjm9eYMweOQqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMY3I%2F08XKNSJhXeWircA7Gf5mCXy8YbEtrffUfpQr4AHAfW2kbHX5ldReAKz30Tg6fnAOuTPb80pEeFeJEILUcB5M73uQB%2BMrqx5pNLXBzXW499z4kSzMdUPhSKkcwwEk4qmg24OrdLe%2BYAmZXZzGLp%2BiF6oD%2FTwsHcfopMYycXWdmyqB5GNrtxCfO23g7G9G5RQd7lgT%2BdyvqhTAZiDKCrImT6yPCA4YXB4I469G6myevz78DC1TIAxRAikiowOG3rnt63IKJ4JyEKcOfF4LkpB5zmmPbYll7WsMSuFqaLMFAcNl5dUG764e%2BSBu4sIvED3N2gbLlhx7sr%2FG1506Tzgg0TzAtI48g4QteGEiMzmAk5vGJyDkrGVGgPKdaUHZ2bDtAh7iGmDv8JzG34pPZpVcIwRjpyvfxmD%2BekNexl8E1gn%2FvdCYD%2B1V889kJ76xqfNoXGF2%2F%2B1ZfnmU2mPKRAXTC8f08QDt6pmDBrUf2hZurhUBMS5i%2BXhLlKYNtis2aGrprSMDZ3ryTWO3htRSzPhzZWjGXYd1N%2BImVQAwUBvn2l5suPY0vlmOT3mmYZFph7Yo1GfFWS9PiNSZmvUBKXWaBz9YCAcxcEhk5O5asii4tyoldD%2BIKuMSjBzx2VaSXpDGq1KkwROvhvMMmtpMQGOqUBm3UQac0iSCB0fEPN4ShVXdjO7oC8NVFL9quBJOf0HLon40VqQGpGY17j07KXX0EbnBVJOZm3PsMNJWYzlX%2F2eFVvs9H%2FWX36SlHILBBdDBfYuj%2BcG14a4OA8%2BEL9H4fPkZFQj2HVJ7BSK4D3gHIoCmm5aHjWPRnyZQ%2B6XGtQBOYswc%2BJHWbFJDJTWyHK3U%2FRiYrbPaycfPVm%2BQurFuVCUhDo7FM0&X-Amz-Signature=d0d67fd02d62f8c221d966ca4379687803657130a576b63d84044a949011b470&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
