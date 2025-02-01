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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUFYMWVK%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4hbvHzb%2FoWPOSG0UhsOcJElW5Dzs5lUMszLPCeX52HwIgFyVECVhQxBI%2FF%2FXl4y6xq1LUY7l0fVLHm8u6JrkY6s4qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZRLXS3nuTmC86BeCrcA9%2F%2FHL19sJoWnCoCVaaNCScbcSFu%2BKm2Ht2KPxNFjVqIW2uJypQAyPPY2Akol81WfKVl78QYZYGPiOw%2FDmf2DNsG%2FiW0FSy0VfmYj436ecjQzIVWqPXhMediWzSfEx%2BMjB3Re5RigKt1ONCR%2BY0opaII%2FiOpxZs5s1OHdpIBuHtXLoF%2F9wJilOUaT2o0vMoyg5kzAll9o7gl5K5vdpweGd%2FrwJFF%2BlheyN0u1YqSkMJZJ%2FXBAFQK6mBX4FlnLLYCPJTKmWRCcV4nOIn4cw2KwwIRsobE5Mn14IMR4WWdpiPRXJzL8RKawn6JMppfLVoNV6O458MlkjIN7DjOtgL1aawifK1rPL8O83ViqfwZCGApzHX7N01KpDDjXlgTfXK%2Bl1ByZiNEOBEczBaVOpXWUGwkFbuKMm%2F4qVhSVxAsNZX7mmzl2SbV3OxL%2BkC%2Fax0GRfj2mFfihzuWrlAKF1MAjBlWwLbDECJK7ybG2X%2BpRZiFq37iDnVcflGDW0tspC5Wdx8%2Ba4mfEju3mHWB7oqtwbqEPGAiQZgmEbcy0O6TVkmyOnEWbdY0I%2BRaL8r7V66oWBKRJAcylx2RKoOwyQcg7KC95%2BpVvqQBpaAeSz%2BoVFIi5l%2BS8XP%2F6ArNw4DvMOnH%2BLwGOqUBgMcTmgjShR%2BXzJz3kmxSg5hoa1q6ltwHiIzYyTxXgOO5gZIDKYf%2FaPrKpVYwU1TKtU8K8QhlsU52UpvE2vhsIC4MuWuP%2Bx8N%2BFe8WM7cWb0sgfdjldIf0B3sm1Nr4Lkch4YHUEPEsZ%2F8Do%2FgWssrxp4BM0KTkq%2FyGtBKiBkCb9P4%2F1p1n6j%2BP4WrtDQatAam%2BDvdB1QtWzQy5x2oo%2BtdexNbCGfy&X-Amz-Signature=1b8433242a97e63cc1b8adba8b741f16d5d49b662ee42eb6fab875038c9f4053&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TJQCX3O%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbcnrNPa6M%2BYkjGGUCWTUTjn5w3dBR8ipYl68F%2BJBxWwIgXyeBdqHQagSnCSlo2MRme8%2BVi4l9%2Fd3shUQdY2a5lgUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCP%2FrckB6mM5m%2BHp1CrcA3q5Z3LmbEW26sEm9SdpZxbcjhNdm2pUo7gXCsYLTySPONAoSVOk%2Foly6ENYfvN2ixPh5sc4Qo2NTJvrv8%2BfQrGfrY4vily6SjKvvmcELcYF0%2FLBNF6MnzQwvv%2BfAtaVr8I%2BGzKpr8lgbk5cC5RgzPWy2%2BwSMDskLGaXuuR1uec2SVsbf1LbXfwOtrTzcRfyNIt2c2JoAyewaI6ZgD8Kg3AzIjfkPn9kVEQVzxI7KgsMIUtsQUdtI%2BT7C9PNJcvrupXQepJMS2y85Uu1pmFnHvq9UwNtWT8PNjeNAAor%2FTB4VMAeNiKrO12Dg0T8kB6MOGNmJh7YecFKeU6%2FBD65iKX3%2FfKxWPKEAPHD9%2BBHUB%2Fxz9%2F7kQ4ApKFRmhSCtPeRT6sg1eotVUoW1Whpu8GRcdEAcPioHjPNKpZzzbLg8Qo80s%2BPbAPL9k4FdOcfT9VwWc%2FQzZXThU%2BjYRNm6YCRsFF5W7mZR07iRxcONSGzgGbtPmwBf0K3BNbWWSaIvPn3GvniJsr9CL5W6maG1SfzuLtZ0pdv81s8LZqEVHE0WsgVspsVU5MZWNE3%2FVNC4G5t9Hw2R0wrCQAEbCUguEW0nPAkCGt6lwVlPz7hjikIVtmtgkWraj86bRK3iVghMLHL%2BLwGOqUBJJiMG740agio9j612QTGy5J379X9ITeBf65yaJjyJlfCSy4ZSJwMpQptMSpflJzQn%2FdNiyUUxXaIltC0QD3eNDACxcBHMandcrF2yL9ASiUetcJ8Xe8vKcDVlFHNxLxjz2xPx8kg5iUAIZOs%2FdCUUiw34auJDmzHtgub333BYSQ5n1%2FO04X9q%2BH3xpAmuNJRQy7fD6oRrTK6yL%2FgunmOdD3WBgGX&X-Amz-Signature=393dd0eec0c6e5c74c8a195aa038d2de978161c9bc9edb3604d2b63e287ed43b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
