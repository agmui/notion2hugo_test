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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QPDNYJW%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIGmItPmUt7KY4kURXeXpdTiMpE2WJHgoZH6wMus5pLc8AiEA3fVq5wa%2FfTn%2FZL9ibJiR4m8%2BvAK6CEYF72D7570R6mMqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFp3NDU0Wrp%2BwgCi4yrcA6uLaFoyiB1A7USOEYkVboXXohfYzT8gkXgGwDlbnuGbLvM6TYCDT1%2BwcZBPtEPpG6s8x24Hwjt73sP6QexofFaPE2nik5dgGJxHrX4pSfhSsBadp9Xgdu0ir30skq4%2BlHGrjrbkfv6lPuD97AR0tJ6k%2BNVRQpknW%2BqXNvXO%2BdsTaGkIENBgmy83nXHr8aVwAbVGqPspLQ5OUPNwsS6rNM%2Fn0xNevUplkpv9qAGr1pYiXR1OKghQ6KD%2FFyFCMR5YErdSFlqVc6uh7pFcqklWGPQuE1pFl6mMsWS170%2Bjtvw3wT%2B8UOaZwpfGYLEn20P9MoIT339EODRzkiGQHyAtOHLW%2ByAO3GNCC8RgT0duHfY1iYX4RgYJ7%2F83z9w4cs27t3BeFw3vp5QctBpjY%2BQJT1etyw8PEyoZbtxmtdYAS8KTM6%2BlZX2jESQ7NFfZIR5E7IwgNX4oyH%2F5JGvhue7CRgEjXLYDWkxQjJxdYi%2FQlbNgezZFFwn3zEB7hD07eCBn1pDAg1b3GAvNKUq7GmO3%2FrV9S0QQcfc3PO7sEZJHMxuEnns5C%2FMnJsaQmvEG8Vw1EMftzJkeKEvnuU3CQk2evpdg3jtuRfKiPHBmaSxZAV5uE%2FCo%2BAReC5VTF0dMMPmjksAGOqUBCWB0tzvg1a3m0ekmFDK40CImpcCt54KTQG1lL9OSBcbSe8nXrlgKJi%2BtQO7tQp0K0yRGgkt5xkXbHHxbshLAq8sfblKfmao3zvu9w2uplIwrg1T5btQV%2F4YaLu7H4XLoM1qus1l8dXeCj%2FbS5uJX3BzgRoN7gsKge%2F7ReO1WPStENV20TIP%2FQUONCXcFa2mH1MM82mUz6iGMYYFDVB7WFIznUfIi&X-Amz-Signature=c7a31a285b8683a52dea27b40b4110da6a113978032efdc343a814c5d169083f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJGAR6WC%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIBJTO7SxInofoWWboRKiOOHEAt8dlfPmr%2Besi7YhRG1XAiACQD4Rlot4DRzIlntmwLEIUHtUeuMgNHKu628%2FXSqoRiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv8BNpPitpT0WtLheKtwDhegSFrvCUxLXkbf6MeHKY9yJeXkPMkQqwsluE9%2F19sbokXlTcko0FOpnGVYA39nkVxxXzXXl%2B96aiNTVapKSQE1YwoSI77n2TcdCLDozg9PGuXrtdrOCj%2FNQbvQspRhYGd9kl5EoJrbNs1%2FlY0Jky2aJwba09S4WIcICJWBcQg0c39eNd%2BdfmGMSoFqbZuq99eBy0xd2zet%2FBvvlMCx%2Fb4fJVtB5ndsGamVXPtCni56s6SIkWitITHVm3XYE%2BgzXgT7AyOet8KQEb6Ry6KckDyy5eNIhDO3hJbaBQll24bkbGd4XOIz1OViyr770eLCm4FbIwu44%2BP5b3RCNlr8aHqSAwuwIkuM0yUHNyYP49uAYVj%2BZyzT5uw5VXz62WmOlosufFV837IXzgaM4NIovAKTc4Cgt5UXPrUykD8xhVtbJ2vTcg2UTMPiMJgK2jzbvP%2FH9ri%2B19RtVW5sTUqGeGz%2BGsUUxuD3EplYuPr4qo6MprEKK8g92QcIAErdAzpURyZP5SIkPbxz9fxH27TDOqa4AqOQwgS5Y4t9sUCfUUiizFfn%2BJOtzZPjofw40GacIsiyvpH2BBIFBLoXAFtNlmqxoXX7ZOCHtmgRIyCUPO%2BLyAYgvMCyjYnCBOqkwlaSSwAY6pgHeAvxkmSssejXHToNHYHtXtIfTsnWJ7yqlawZCYQLjZajPndJXIQlDTI87iT%2FQfkxAW%2FIrLMYxq1HcNqORnNb6GxxfNJhsZhVv4B%2BcZqTblvmha6wurDcpADgQz2%2FV5IBW4ZInf94DdVm7msh9LSZ5Or5A7JOkqJYbwRxVKYid7Aw%2FRjJ8D1eDDYXCVp%2F%2Bgq%2BPKtUgCR%2B5LAGWzwrFZgj%2B9QMV%2BxiZ&X-Amz-Signature=907cf4dfe3c013e83117b4a2bcff78ec380de43856412211d968a8e586589098&X-Amz-SignedHeaders=host&x-id=GetObject)

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
