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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEOIALXO%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDGLKb9vgfLuB2NmjmloxQru0FnINiS838cc%2BTx9JtaegIgJ4YrIPdP8ZHhKykA%2BheGY9iSuJL%2FkDRqmRYdk0Ii0wYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNm4sBk63a3aE1c71SrcA8otIrWHC%2FVJ%2FyUTRyrxsxC3GlnMh5HErFugSgN1e1ZNqjGXSnIqFI2XBemsGerXGJ4sWvzutaqacemmC6AAi82PWwtS2fOUFSxQj5z7FuX3BIDg%2F1UDjTtw79j6N8oBz%2BysrFowVJe6StmOmRuZD5tFoDKt%2BGckcSvWhZhBflVqV5KnaBZWESH2mS0mZO7TKbvqJbRHc8%2BzamGK%2BZNOgp9CwSrt1MPHL6HTSpEiPAAmFNxo8WTMl2Q%2Ffao4ODjQHqyxEBuFuAAupAGMzdBLK%2FTExot7ugEIywP7LAHFDbHVETqhzFT4owT%2FjZxP7XvRa24HXl2xoJe8MdcRfi8naL5KYVmLO%2BpZX9roWOYZjqJqH94bEOlug8UJ7R%2FX5EvX%2F5YT9WYc5%2BxznbPylXNLDvi9wv7ab33cknBXDtx1kIU77HVv%2BcVri3j6wPLycsgcZu1kj1DyoSt9weIE%2BllSXdOhgi5ZTQ6R3elMhg9%2BBw2kU7S5S3eYIZM4WPHbM9hGxhgXUm2BCSNnExu7WZyHr7%2F31fNg1O1ZJsiAFy0tq9gOAaTLfoeJoLRD9J3WEF%2BrZZAMGMEZ3EyEbGeRKgFo2bCXtAs9%2F8VfD7HztvxwTAhpFYY%2F5bCA82kCNG%2BXMPadzcAGOqUBM4egmv0eClXLiQdk2Nu%2FiCUqrfM7w%2Bg%2FFr5xFmxebdjz8ZJUrXikn7Podx9J7QN%2F8sUQSUF8Fp14%2FV1DGSka2dhan2v%2B4ug3ZZ42pdbHXnKUMXo2WdUrBOzugzgltzmkbeUzu2N3SNs5WuVYhel3Brcm4UrcVP%2FAXzpyRd2bu7NlmuUA2kAIOC7Lbi6557Lm%2BVDP6SjcJbd2vrVovPqUQEYH%2FyG3&X-Amz-Signature=60436872744570d6d6dde7bb9903bb8dc25e8baacc63c7be2057d8f8912a363d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6LZFYM4%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDxUkkL45MTj0T2CqejDTdGDzwTUgkmOK8hn8SZjgeDJwIgPpC7aVOAJiDqqatkw7PJiF5i3xO93Vgt0fW8lyZn18YqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbCb8wxhl7LvxktjircA%2Bj7Mrxhf9%2FkLHKS2mMp6vLARyv39StASW11TEbwhv%2F7jVwTlJXEQUiBKscEqWh5gB4BDpH8DN6qeKei3Su8BdUGK%2F88GSzKyQrtJF1UYKL%2BykpcyPJVb6W5%2BFiuM4AfAaxdj0Bn5tPt3tGbR8Q7TsBoRdsULJEB96WEvGMd4wxyw7k1No1Jzz9G4khlPzvcDg7EJqZpnpa2BPjKlPh4Bt%2FJJ7sVbXoXfkgt3menLEXULqU1t0RKpdkl4CVXrlUZdID3tM9LecrLMr%2BBcFzkKCSvgbj44PBzu%2BiJXJ3SfBTNJ0FVbwE9cOHS3QW9K1S0nYAZoDsA957hEo%2FA2eBInwPPj19Nhs7TaKar1HpzP52IhxP0tp%2BGEvsBkWiOoZ9LMVlVbzjjRFNiQMsiZzdK%2F3jyQ0QpxsLlSCKA0xhx%2Bl6KQDLItSjds50u4Z3f2GkLvavdNDYHDWsjFv2rXSsCNW7ZbnKHnU%2FGHKHMNCVQuj7Z8j2wazzvXu8QKUKqKFcidSNiA8UbsP2dLWIjuQFs9g9DFlOzQv0psjIUw1Z7j7uLbNcC0YUuMR%2F9B3iAlMGCQDtK2isAnT46AcxGDTrBkPzxj25vVtnOy6xP2Wumw83MCd1FOXwI6TuGYK64MKyjzcAGOqUBrf2D5IrZ4jgyLjfUMNG3jLMx40JTEnhYwEXrx1n7KgkFJk1IRU2AOUdcLIQPpHns8ju%2B0Wylt33ZGerW%2BTk%2FA9onZhFrVuIyKPxEEvFTXnI%2BKKJYu1EMh2EKNcu6lm%2FzinUNhc6%2F%2B5s%2FJC5Hh0HKV7ivmFmaFsyPJn040SfqI5Mcbekjff8k2%2F3Rg2Y1Zo%2BL8lHoRVipvrzzkZTeU5Ghkt4Vl%2FZw&X-Amz-Signature=d3e8228e7e5535ff85dff993f69d6a5a0164869b49f81decc09b379ccbe3f537&X-Amz-SignedHeaders=host&x-id=GetObject)

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
