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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SGPDKUD%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIBBz2MZqznu9ReIg0Naf3ARMLvlaMxBmaQkK9GvjXxSjAiEAs4ydPeWrUpuutLHeNOc8LP8DLk%2FgQWk8p7o0uwgB0Hkq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDHNsnk9J88zXtfHrCircA8%2BCEomfCd8T5VdAL%2FeJ7ncg5mOddQJfLkkpwB%2BsLYELz1yB5UsMus01De3RBtiDU6gMWwkP8S2WqhW38CyEvppFN8A4%2BCeu3FH06BZLZbi4bHBsdaGLQVpF%2BHPIZgdNhQHcoZ9nNuODo9mpcUZhu1%2FYsKddQj26DErj0K34ulEZk%2FIphsz2%2BBSlkLiF2lmywJ12q9VAnwxFewcPcdeKEKx3YzmuYd0rLTgrYebkUqUP94HIhFd0SxtkcWy39%2BSqmEZEhBd86ZdYRluI%2BeDHBrzoOlQfaFP7USCMMkO5ifLdLja5meC2SP%2F0JVUSSbc7zIXrHh61QRC4ybUAjX78437UeAN1vg4xb4r%2B7Qh7CUyS3I%2BNava8%2FOd0frSn1lwYfWbnrBHHuetHAJ8xLLabXF7uk9oA9Esi7exdS2wQIEAIk0cbMvEQH4Cckqo%2FmVaBKWaJVeEyP%2FV3RMVxbwBFuCmLRPDPShIfdJyja6%2BsAAgcYgoTG%2BBo4wNnW8iMC4%2FsaYosyq0sXoG99P24oiiZ3ldbKgrTyRr8Z3N2zAp0jkTz%2B2SAkPIE3cex%2FwrgvW3P7pX7vrBiXC33tcWowsgv1AUatdeKNVLYOgZOW4qmsR%2FKTaRIAmh8%2B91H8V3eMJKO5cMGOqUBKBPIQQHVWFTCMZjHl3hIvQ4REyD9hh1f3kCWTLL9yz55jo0ATGDikMNK2Llbsd3vZW5wY3w45jfV21wvpDrh2QbvmveKD5kk2LWMfvpuQ6j2d9caNLhsBLc7%2Fmw%2F5oVo0DZK1twic23WC%2BhuIGo5sI%2B0yvZudr4ovHZMym2YDBgOUkj65%2B7iKK6qM9fQbFWR7%2FmhCMm%2B2IW6AJgEc0IK5r1cP150&X-Amz-Signature=af115c1398018a2c7e2e6c474c06a2abca91ce6ee69f10a5906f96a31a2f56fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRFSHVFL%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEp3ixdPDInP04jz2AwsVTQTDdn1RUPyEiVx5TkeMRgwAiEA9KWPxp%2FLxmDK%2FassFtQJxk8o9SuoJAbQFpaAo34%2BnYEq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDJ8n60mVpqv0fh3S5yrcA5fErI9FUn2rnp1GrQraP89N2t4UoDwstaFZ3nZ6QntxfaOvmn4WdSkx6uZGc6%2BbndiVGabvJ4IHNQUAv1hW1ia9MedBB8HZp%2B27SaPK8bkQ12Jvve3s1soTfPnOVLHCQF30S1e4lOBFlrMtuntuiTsQuYXteFiWJ0CX%2F2favDQJpgKiJFlrKaDs2kK4Xt9kLVmTvjV3ct3BI3fDHxiBgaxXtgdM4Zx1WX9%2BbBxKjCFzYKHpDU64KvQNIeupc9eNKDyy1itvPp8ZrNac%2BpZbvOx9hQuHiEb1LPJPNj5DWSyQEmPCfOMTtH8enM9w0MfSWFcw0EaLnoEw0%2BIKrsUQnejKX5qNrCAjwWdad%2BS1Q1Oc3MOXgcXy%2FtoGHRxhwkt3cFvSWRvJjkstqR2%2BIk9%2FlcUPRiWTEAkv%2FQzsNclj%2Fr4xDQWGbtcYO9HYRcU5cMHBIQ6tBBP04svfWzjjhhMEUGBz7SA5PsM1KKb9hKp64UNxl1%2BRK0drmKvM7lPE1dWmvF3oKEx6PCUHf67sItL4OM6KwFJIkbYEeHT7xVbj8Mwz3WBpdTwM9YeK2uUV5dNqXhLnHEwQoMS0qgdCOfIdLC%2FzvivU28rwGUirJCjJta68NVuPDeZm%2F5zNuK2iMJWO5cMGOqUBcAye3%2FvaFQYnMoA9Iz05gjzDL74YDXO5tUB7KWvWfJ8wwaTxEtnwFyHtjbybHdm7xwBsAKoCBzV0oAq1XEr2Ui66%2F7euuTkJOVh6A%2Fya67g3TIs1YG9Bl%2Bv0eojCvJ4ep4xLNyFoTRS%2B94j1hot4GCV4jII4LBc5tG6cPBUiSItC1HZkDY22RnZXnkfbi0qTzEwXcORVUS8u%2BdR2bYOdsSCySiD7&X-Amz-Signature=21960b0b86c7803ae439c36e30b445f6f27f1c92a147de6ac6c450c54564f099&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
