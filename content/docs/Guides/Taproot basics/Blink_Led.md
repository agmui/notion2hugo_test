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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SDO2DTM%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T070937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAXBKFtxebVp3DG5E2acrBN531iIhXjmDGUGunXHkndiAiEA3GKBsgc%2FPYmixxSluSYdmzCwtUPDy8kGD74orva4TvwqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLIlv9NjYblAYEmvircA8SE8OeOFk%2FLjJVfgJWD7%2By9Bqt0hHmDoJem0AfinYcyTfZb79Wo9FfpjkUfLw3bMKyAWKMNuH1wexbEkHeCzUPSUwYZwPmreG8TXL3npIUDKP%2BZgAgUYeiAmPiKXp%2B5cDW6wmiiGzog12rZjUhnUxlESb5A%2FU1GH%2FSnK28FPJP94qG9ctAr10jeiDeJoVuCj7ow9Nm6WIOpMcD%2F%2B6ne9mgJW8CaPspz3ucuFnUy34gFH%2B9jbu%2FXzfVf2GrLJVwbrfB5p2%2BuLu93rsibPeMVT5ugkinffDj8AoJDKKB4Prt%2F1Yop928yKTfOygMxSXZ%2B6S6ByDvLAW4Vvd%2FT3SaAU4XgymePjT%2F8V76WumPYS5YuB49MPWuVilCZ9p9pbVpYmJbM3K4kYvGPGVmba42%2Boc3ULy4SzoEesAriK9LRDluvmM0veZkHD6iarJADrgtL6LavxP6P4DngPJ2AoBchxtRNjdgcsRZgeDA3051K6YpRISKBvdeC%2BrwN1227mIlg2x0S4ksG0XRMMLfvJTOtaOZCNeotVHeZVxx168upqiN%2B5doOsepY2CxDwhdE2Wdel3Fg9wM1egsgoPTzp28tQjTeLwblABlKKS7GbBN5CpEoELie%2BCqprBAHVH5NMIHZi8EGOqUBeGGyQSHb1MEyLOBqMxRSm6fSr9H1Bblygh0LqV3mEAeB9ncYv9Y0mNKcslzSMNQ1g1Z0t5duR51MU488ZYH9zURv%2BMwLmZ%2FxuW31Ja8PcwKvR2e12W7NcAK%2FqTzuz8ruRsClZDPnQ8D6cR8bKcxKSnj3nKkX417AA9LtCgkZOp%2B2gKVQu0gZLs5WJI9U20NoB2Zz%2BkMi0qiogDI1dxMFAlFBy0cy&X-Amz-Signature=dc1e35a578a0930bfb503839a92068173422041b00078a9bc538d9b71f1e6867&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUJBZWHR%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T070939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCICvOvSQnTUhXEROv8kHE3gWVX1MJwJFnHapYLmvmVJD7AiEA0GzQt5XsACxhUJiYYnoKm2IPI5iLa7Zdgl3QF%2FoTlkcqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGYEvxygasY3D7P6ZCrcA15i%2FeLb46DaDeUdl3WyXl%2FXTaTcrih4Jn7CvUS59F7F0yR0Yq%2FkGOk3kuFrsFeGDHu2znsnd2JDoUYe9hG98V4aKUfV7plmhhTMaFM%2FuSc0k%2B%2FSXPvMWk%2F0FzvECKE1A7Z0S1K6iJwQtOVU7JaWI68QEJfaGjCLooKbhKAH7nooVx1HLJiZUXmqLB5fTINczT%2FBmp8Ijwvqm21VWIfTvCTDYxm6inkrjHUvbELtXV3nlDIDE0IN2UzXTxoStCx8NQOafcV1pUQ%2BXfK73SiTRPXieJ0rHuEYeSSRKHCEfzTpUqeus18erRzWSFEGaKP5DtgE9oQC4CEDx3LUcQOwtOsZ70zYvqmmsaKGbuFlfD9qZ5rdaCHDD0TNqah82jOzDca82SPnZFQUQz%2Fka1j1Q7xt9702r0l%2FcfLuvyahTLIrYwfSbHSW01thDTC7mzi2YlqAghIBf6Im%2Fntevoq88FMBAsfOqw73mxGovQ9pPabVhaw%2F1hBxek8e0SEimzQULVTGDMUZV%2BNiAM8Yei0%2FOtKpsCoCTRIrBFzkhSKZtOj4y1xwmYEfmCWbudWWG%2FZGSiEXYEWpm%2FuGj5vNg3MiebT2eVgMUeOztD87c8HdE%2BiGCY9fyeYmhEvhkoMVMNfai8EGOqUBb3MRYdmM3ceK33q%2BSY8HoamM%2F%2FwMMsymawBCIwnVlT1VTM55bomjnJTLLviZdCOd4W0SAzMKPSxi83PP9yq%2BRc6D8zNDrzr9vT36AKoKt6ZVt3y8Rn8iw1jv4a0AOSSAA7jY5ZriYIbq%2FfrcmGWuDmMmSnmlACFvdjRTgFr5ZnfgAxrmO%2Fo1l3SA9DDQtARyXirt6%2FofXy3EcYGlvVKTB2p%2Bb7pv&X-Amz-Signature=7b8c1631e09a9b58202182c0563317560d7aa1269f15036897161a80ac239abc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
