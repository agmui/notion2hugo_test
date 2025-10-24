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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNEBEAWO%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2BNpRgpQ4bq%2FFolyRNjlHrWOim5tmTAY%2BrBh%2B8vbfdKAiAro18f249Wm9c7g1ebAjdebBR3ZmbXd23FUtV9e9CFwyr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMOt3SlBCL4l%2FpyipZKtwDo4UCmOsAivr30iSx74v33sQ2mYrTkGQNIfPBVn926CVet8O%2B0OysnBF88Oplr6ZnLi6ccDIp8rVdGwnI4s%2FV%2FbzPtKw90jf0AoPwW8Nu%2F9AvtJtSMl03%2BFV8ApRMqn6jYuqjjRPD68vbYOFZzcrG%2Bfs1D09W7M7JcSyATA1x3%2By0v9BXoMOt84Psl5a3VNKOZG8ZwrBSXORf6qgZc1JmLogI%2Fb3UPwMT%2BB00uiQQw7QEUdkF1OjOHy4CIqR0A2dvENUWhteDMd8OdUphU1eymamfomZvf1CwAjCQAFHgnSeunpCZkczG%2FVnSKpa2hZuWKHiK7xfOLwiQF0mwKT1VcpYwqxn0aCwjtGw%2F9wZdU57DSsfnZ%2BMJmuFdwRcY5DWBpS%2Bq8J2mEhGFP1MyPaw8ddT8qaR05LFXgeaCtg4aEhnHH3Ih5XhUbcHgOSJPlmUGwcrfUrnnrIBfMgbeudVNE3%2BpRWPpYGRasXy7QCY3TDp2GRsguk2M3JnwXuSxXVlbUSy6KMRIoUD8GelotLaotNKhpNfACF%2BERyVhMmkCD9blSsCCIlDcr%2FTNqztRisSf0hEdCLt33AaJ02eLN0iX6Qbv%2B0GwKehrvdiVfMxKZRhaPJJLX6cSmiW59rkwuZ%2FrxwY6pgG74k%2Fk%2FtOOmfGbRkwJM1Ql2%2FDjbYgpimApGsFpCrGDKI0%2Fr5xgACaaHN8n3zW87k1QCH322pY4Uisj1GfjXTg%2BD1MwWK9JbNjL68%2F0x%2FejxYbvPl4NYfaYL5VdafLHGtS1bMLAWxn88PXkkwyXVtkhBZ30TueVmboeWGpbEPmPbGuNTZWZpS09dSdYbJPprt2BzAZyM2nKCuEeE28Jhg5TAN1JK7gT&X-Amz-Signature=e4808285381b723607f555c0e1c12d283babd232b2169c76f1917df9f8fb70fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ2IACEC%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvI3tsdWHaUkKDYhTcOhEC8DKaEq3zr5oEl93MjkP6VQIgY9w1Q8k02kR%2BpMaGEZ%2FInyqtF1I6rgK0f3WFE3Z00RUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDMq1O2Tfb0mAuRKGJircA8YWvBkDsHeIL00RQq%2B0eJwdpEHshWzVgNq6zSkqwBf07swRzpFFs%2F1vRChHdniIKoBLQHJPVGuRFL3Ms%2F65DcAWLH1bQFe%2FzPUzMxqsq6g6TWgfxsmncrzfjOHfDyX2ypXvnbe7LBKVEFN4p4gy5kj%2FD2vCN29rVeP3d%2B2tfj833nYGtjNa%2BPiPnLyFD0q7CB%2By4Z3kVVu1%2B%2FnYbJeTRDc%2BAF%2F0MElTmGT0VStyVkOfGI2%2F1L6qQxxvao32p8SjTz2orjpZOqYoMbOyyQStQpb7QZ86mu7mIqShbDs4lAOMGh1Nzfamcm%2BgKIk3dQY2tKK4ZKdQbn1Q%2Bab%2BQ%2BdLF2zWzpMIICLVpbrvmnQTeihJOYwzPMwp1tLu1iEN%2FPC%2BTQF3w9kyT7hOLtzI5weVjFH0uQKgTvmuA7a1BsEUYLNTEvbCVlD9reHcCFyUFCF6pPtYrBlnra1koZ2QlY6ELd9isQXFk66TiKZfE9amMZlP2cUULyLob5Jtj2ROrNZZOe0C%2FcMWNKhycwzyl56zwhq826Mc8lCEgW7FGp6wWPkmC8SnP%2BilNG9VBfpyS01XyL6PB0Nr%2B189Jk51HmaYDNSaeFWvLVtd%2FKdkNaVEOuBCr3lyII8uWwk32NaUMIWf68cGOqUB3912JWqVmKyoixgU%2FUxzGnpptDg3FN8f5vXYXgrqbyBCetHhcO3cDaKS44QXOIqVmsNckru%2Fjsj3b1eZflNDYDgsl7k94bw8Yl765YLaoNbDleOtzPyHwd7jk8baPn8UGEzNcVmO0UKHc1oF4iXHOUBay9umcEWCCORObMEgcyDEqNu7ScQfhxVbp3N7I8lU2%2FimzT7dXBKrcsb6%2FKH8ibqzMJG3&X-Amz-Signature=1421917ff4062af7596cec30bf342eb020601ea939a497f0390ed5e2aeaf865b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
