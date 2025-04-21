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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y64YWONE%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCICYVMCnTqUp%2BdZ%2FCpz66hn2S6L2Ze2qME87%2B41c3gYn9AiByH9MRWp3nEhu5FCE9%2FnnggOlJR836T%2FArh0P6wiqamCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9Iao0bLzjpkiq3pfKtwDNtsW%2BVBubhX6%2Fr4FvLSVpiFGi1OE%2FX2tnOXICwBHIuRT4Dy3g9Zn3yIPWSyi3PuZbjpNAPXQA5r6X1CMbbQ5FRI6q0XJEd%2BXxGvMhqebAhKQea1qLBUgSWf2x8sBWi4bMuWOAcuHXk9FVkcNPStnyYTY5J%2BqMZmKiBXdr%2FoPQrB0PIOc4FhKveVG7XDepMHLQ6pKlKLPckLB3LWlS7%2FQFgVBfYT0fc7xngF0jlyzsDkvWMFKsaaitrg7eWaomtDrF0XE3CZDwabO3lpD8bFGPsegZclrPhxbnwImEPbZwWthNvJ3wG%2FzE%2BVs%2FyNfl%2F9OO%2FPflYqbUn7uzUHsnnTU%2FvA4iQ8iZ0xe7%2BndMkx2ex9%2BLzRAutd3Pr0Ty3RHiZXwWznwxgl8N8%2F7bMHt8WtSPtJEHGpc0P3KIi4GWgJTUIerK6dkCtpHJ0ny5Ngzd8Y%2BarHH3uS%2BWOq%2B8DOEjZZLN%2F11NZuCQdWzYg15KlT0HZylhjuoS9Cx2r5DFkZPn7Y4ir0FfBQ5I%2FfrDy5NOgLcIRqTNcT5mu%2Fm4FnGPeCxOpgswFtuUYxezpdc96pCJhlzdi2BDVHL%2BL84V3oJBpbuK0u22%2BrZNruRt4R5fMCO4Kc9zKd1aT5NmYV7i9Aww6GZwAY6pgHp2nC5WAFxUHQtJnqpgaScDmQDXE6rO75rKhvGLew8eMSFP%2FdFWmh0JYxAPgsrnhkxt4ZMDWllYBVWj5Vbgoml12qfAPlgqx9lxdr0vyMzi%2F%2Bm8MC5UoF3Hrx1KPxzujn2eHyMB08L5%2FTDHF2wSAzoz57KU1mAj%2Fhi6dk%2B311LgTAE7cMhi5HSClgRmxkB85wyVpBT81rRjpU6%2ByYenI0I%2B%2Fqcmuf7&X-Amz-Signature=9bda2e0487ff90d6635f04488a3d4faa5d177a51571cb871ae6ee1b11bc6bbbe&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFCESKRL%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIF7ARdj7buzG6pEoTawUEQOaHc4ZjgRXuV8%2FwkSkGPtXAiBvBl59zk5NI5Hqw8uJLXUkaIUVQuEe0Zbn%2BSVZ1VsXKSqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwnggB2AH020FoUXrKtwDpUUN5iyC5eG%2FjY0VwhAE%2FmhBQWo0lLvC%2BNiWywZ5x2wzjGV5TtVGJxxC7QfPJrnFTn9fnEt6Wt78YdQVLi5Nig4T5AsAQx4FYBNLiC3snfjWPgZsqrv0pdlih%2FWmqYP5gpFEiCpoa4SXiC3TjPOC2Thvqm%2FR8HfhwPK9mkxc8I0fVFBi9uZtiMBZyCAqzxFySVh%2Fn8TNV3OeT4oRJoXoBb1lmksbn3XQm3AWpyNXP8aHFt7lGDqBTkpJQJkAHxLGfoK1Zu93Z0aQuijv39q4gwRClOFYwSONhkDipY0G%2F9qaMgM%2FsnsU9GMsVAzXDC1%2BQYuNOZKXrUnQ7ZCOqPO3fg2Wx50lDcEwkpcqPsmQx7yTMXSHCZKrI%2F2%2BBIaKpWReI0gOKImVRCIv5aIa99ax8UyyIhCA%2FpWP28JOsSlByq6OMu85SuX3fA%2FiW1ssu8qruZ07v1ZCWSoVKGu80FOMp5cqDPVj3Iq5gkFY0A4JzUggidgE9I%2BNJN%2BHzkxi3gFXIxfulxD1xqFNvK%2BI8seVOykeEatUhICfsSVY18JopjvItmvLtLCeO%2BV7eWMK9vOm64RB02AHNCOrNyg6tMX0joFGMHcqAVgFnR5IBHyfomDkT%2FSOgwpfzsJu9Jww8oeZwAY6pgHA3iyPiGIV7HR6%2B2ZMXhpExtA1o5L33H%2FdjotMMF4eYlCW1P8%2F6FabE7B1Kc7ctMEFnhcAen3Ig7tHqRVgqVXPLJog3tAIIMMk3HKtYmVQ9MWHOiPlyFPbWTGjW%2Fk9mTq%2FeoeADAsKxaH8I5z5uWKMFXZKHw%2Bm60BkcMX4jqoocpuncs9fGA3BsVvkwmpX6RjTKMaW55o0D%2BpZHs3vhrRr4S4fhHZ4&X-Amz-Signature=de94e4ebf933b17c08a1507e0dfe3a930dfaa12280004ed06a1f6224fb1466d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
