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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MFMKOI%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlx0eYQtZ%2F1FQKinzMkgGOI%2FeR3rcG1fAz1J5tNCXf9AIhAN33d%2BIOdrOX1SRtFaA01D1vivdo9tCoQ71fazk4FEpdKv8DCGkQABoMNjM3NDIzMTgzODA1IgyNzG7IUvVqWnpj6AEq3AO4%2B73JO%2BK2E%2FNGHVHpyV1IZA6HpotwZUWhfaagYWEbz1m7qc%2BO5C2Obs2zlEaur%2BEDiB4J6SH9GtF0TExUZqZO1BwbgGxt%2FmiCGf%2B4yqM7tSauGMWNxwgo55PMnRh%2BIb%2BQaq2lnEd6lrSBIS8Em%2FdlNbIo3WHYttvfv6hshgOh3fmtMmBeS2gM%2BOtMQxSiA%2FmTx1ERnbijtr%2F21s0hGOqg6N4sbXFxxb51FwntStbs4jmSIQ%2Bt3OTvYYF6S1FQTKeX6pWM%2FTz1nqfvyfDUiIsG9wF5ft3COg8lSIJ%2BVRPwf4%2FvlfLoK1FD7t6i%2BBIXCl%2BZU4C4vCdhA1%2BX2RfYIFAI2QAwZPQEUisPQRIWGouEeorb%2F6O0uKGEXpad5mY7rc%2B%2Bmt%2FVAlTcktcxIWQjHnxtEirQW3vAtqeNPJIs36%2B4dQ2klVXwAaVkx5dxLGb99S240zM6ySraW92k52HLrYlxu7O9GFt6bxKfq503A38u8pphFx8WOx9gU41YEF5RRAxu9a%2F4hp5dYiQYnxbwhgFOsg3MoMqDksha%2BOKzIO5hEa4VurUEtY35mFECi2CQp%2BbdY%2BVw94JKf5zOXmsTi6i3qu43dgqVL5mfye%2BgQ205bhg39I6DW6AII6Rm%2FDCx3sLCBjqkAZuKc2gt0DdmbVXQZ3ddS8fQfwy2IEA%2FiqCi8yL4JlYe2%2BIBk8FO9Sa9xEC9gLQa%2B0XoAS6KenYxVl0KhHUh53cNqPQVSmfm1QRpet%2FnpISMMUptrezERmlpAR8gFyOB2i76zk%2FJOT9ZMz%2FmYcVUSEZb3tdhoN91SvLtD3lKQwA9V10ghXEYlzTVcACm5pBASFmDSOR6r3NP2g1%2FO%2FmOA0yfDAF5&X-Amz-Signature=68b823228ee728a06b380df69164140cca5b936ad1e1091ec39d9e0215165b74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ3H7Y4Y%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHSkcLuIXQsVbLQNIhJR1u%2BO6o%2B8NKIV9eZcDLbt%2BpB7AiEAnU7z7q5ErT%2Fch6d7QJdH9SqjD07PxL%2FH1xKmGIrYS0Yq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDF9BkcY6%2Bn7px2oqJSrcA%2FXVMpHh9jgCcFYG%2BB6hzTxzbw%2BU12PyO4Olxg4Go%2FMOhHJXYcMcCImXiEcwSKWxE5QckLTDUSzsW%2FLybV3A9JcSYAKdw9NM0SmNPs4kb%2Bb4XVV7reDJxKjR7%2FrlAnDxQfciUFiaEpn2RrtMMIlQ3Y5tqkyPb1UGjbDDaqMt%2FBlF7%2BH%2FGwhxNpJ2UYu86PFnwvGRkylQT7GRFPexsW%2FbKCbiwMcDQNjUPr6%2BlnYtnCyiTUpjauMvhkGjPQyCz%2FjTCLlQm1cX15IBWrbKUrjPSCCVLw7b%2FOK7t3MZejpuwT63fRwaIF8Zd8UaH02O2ZnknuNE9RTnxGUJId1WJu56nNU9nFP6Xp43mM2CLhdHY0Tq4MzJh59u8pPSow0yH6QQ9lATsUWy05BTu098kzvb3%2BMv6QQLjetxqhy0hz11TqGWWhqSI%2FNXTO97ezNORAWUiYzZVig%2FfWq8JPgmr37%2F%2BChEbPmPa77u9Wp2O267CNasL%2FEe5wvljqofQ8BGbp1JUU9cCKoFHfm3Xr%2FzCy4AlTn%2BGY94DjbStyeFej4u%2Bv%2BlC3P9DBIElSjVx7EOCa8bQq2Qjjnk5%2Fg3xO3Gg2PEbk6dcXIhA5u1Yn%2FbjXCXnL6y2qUhTIbuJpfY2V6HMKTewsIGOqUBtNBPrc0vwI4SB%2FVOISaIdtWkT0gej8LiAIUl%2FVXwz6qGDfUmcIPBPnyX8hdM3B1AfZbzVzHfiSW2QNCQ7yYyObh3EG0DVlFPTcz3f7igPF6o4QT%2BVz2K0Dy7GfJXhsAAWIyqpetDL2Qw00JBjZ2YAgnG9PwXSBxMW5B3et%2B5PzZuQ7Mwg4L2kaNdxu5epFqWArnYHdZxpQq22j0UhKMB6gtlfagT&X-Amz-Signature=e43142fa6ee2a54671ed0485a82fef7f09e7428785115b37010609d74823d3c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
