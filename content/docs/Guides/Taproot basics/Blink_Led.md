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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT3SCT25%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIC2NzcGzPog6YFcEIJ%2FVTzXO2rgV3TWDcwp5S9HaYuYOAiEAvArpCn5CpgdBjUykv9zMqGFgvIIuctn00yMp2Z4ezx4q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMzGWegZJat3nfjJwCrcA46pMI%2FX8VAAqP50cUz%2ByU1GGwelaMfy3wfW6xgRLT5%2F44vmeXGzp1SqKMweovU9WhHrzRS8jSZ01HT01oqBMDQCLx0293KPFPr1pi20T3cdjebw1LdNEpoS5Pu6ZViRVNFpORdFOnmtoq68mIShz1mv0TAD3uw6OM%2F9ZY7pMqH01Hv%2FyGnbyMrOgAIw%2FPIeNIXoZAjTxXckYjBkPNy4GidcPsYoS7RbzxyqcpKarnoftIPK1GYDgIb0AmmmMZ%2Fe%2B%2BJmcVGr4jzU4yz8yOj%2BFdCZNbpdLgnlRexqnkp9C8NdqU7bcFHG0q13lzyoXIu6qs0tME1asx%2FksXXPK%2F6Tc7lgZtP1qIX77hjTtD9ygjz3j7OFvHSbKml5p4kaznAvMqlBNnTtELGHaB62gBwqerMAIaomQdD%2FxoxeMuZIi3Z2f4JGNO79ADV5N5mVoMyozPOazusYmWZsl%2FPEvQvpnZIUMZ3EWJrIz%2BUVEvH5SsIGQOQU0ql45myswu0lEhxvg2gXSOsA7IaKrJSoADD%2FVFkCTxuonlkvEv3LVq5N7VGzGKbM7%2FAg%2FwcueqJ1Iy5F87kiutwKAqFHvOfcPuYcUMJYU0As3C75RpT%2Fzevjbs9wWAcQJ3YAM8Y38rkPMI3iycQGOqUB0NBlpvJm68ZTec1QNWcVw4ba1Brt0prcJnxo4U7UCU8XW13ecJdWdbDma0fCLrKJ1mHIr4T9sITpSJBw1sb%2FzVznXrjj3njAkmJwckLMWgCUw4DGy3MxmGX7nRMK8fSgxi%2F8IM%2Bx%2F5Sh2IWBCICjmJOMe3zBewjlPs403c%2FYfT0uip84gZTHR9YSphSlaTJPoHoAlIh155e5mbRMuaPV8Vohd8kz&X-Amz-Signature=597cadaf127d30e15bff61c33d655be9fdecfdbe0eb2aaaeb56a9c45e23ef69b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SMHTV6H%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGmZb15Vw9zfhma0zi%2B5Jkqsz2benuCys584evR5hGgBAiEA6WNMK5Bu119BNxEsKWZh%2FcBn7zTwfDgHdCYlBjIc%2F%2FEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOfnJiC4I7Qjta2SMSrcA2QI1brd%2FQmZzTOk%2FRVEsb00TIDEu0%2F%2BXotLG3cxld0KxCH6jNxUleJUl1im%2FGltcMpxT3ybky60szVCKsjvKEcu3%2BcBXcxeLB14lu9UK1jeeo62wObjbGDsUAxEmJpzre%2BPqiQguAnY9AEYpAJUPQL9V8l5pSJbXI3vmGPiyY790mc7%2Bb2donrnhdFuIFngMxtlMW3Vova1bRbb7uUqHl7mUh8dzJukYscCMtT7rRhffs%2FOelSE8UH%2B1%2FA15ud6NG4HBsut5o0tCc5NFmjjJDRyewGb%2FKPzxT5g1fnqo3qLcaLy7g1%2FA7b6934WYe1l9U5mAWqnsCg08J6C%2F1cYaxhTvJgR1kWJyVm4D3HYCOGHFSBKcrh5tX9z9tyHsekn4lkllD0CbvxDSQpMg%2BfeJMZCVO4kopnffL1phJ2mck0WWbhVtwWXzxVLrrC5pspwlNOySy%2BnKcjqk5LGrydOsLo0cVN6TgcK2nxAzzvHVBw2ug0dC8fU9P1cy3NxwDCXA%2FZOMtQJiw6%2BnmX3Kp6%2FIwI63DJAHfPUGqItl7FWxqmln%2Fh4KUwIftq6i6bFZOf83NeUSlhExDaNI7xRhCU0ydt8qPR%2F9pUkeiHUeIK7ko8Ek8Rm8OS%2FLQpVpGQSMKjhycQGOqUBC%2B1Vzx5YZvgShMV5254uau3LjT0XWDrHjrxN7wYKjbikbsvPk8kuwOWcszMA0Lw9ecdjU4C0ilHiqVL9PfFM3QlKjsPD0TXheU1G8M8SklK5pvi8MfacSVI0umujpQwroSlAs93inx2eJdRBULaSb1AiPDASLh9uWniazeTlkof2B%2F8RYDMdMBVpMtjaTCR7E8bkS2jECQXdVxXvF4KK3i3PW0j0&X-Amz-Signature=539e3a780efc0a3e2afb44ca065731ed0767a8b4ce237c7fb48bbb3d27aeed8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
