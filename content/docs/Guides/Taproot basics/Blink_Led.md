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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CX3FRWI%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIErQdlSz44TuFcnso8u3gPm8leEGhVRbJFw4%2Bl79rP7oAiEAvDxoriyk3VsmdS7xGMsXpoKGo1mauq0St%2BD6hKHPGu8qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAt%2BvGfXMliGB67XvyrcA4BS3j8S%2FNh4cNULYYTSQmPWZHAX3aJjPaxtiS5e%2BlLfpfD5vQyoYSdKNsNU70KoHbE20g7Yc4Je9zp6HRfqrpOvvJuHKDb6iPbUfdAHbhzUxaAO%2FCYe%2BYLmqkMZ%2Bla4v3%2BDfj0cPIzWlv31Uab6L8OmAkfiSllMAKeJuqPtlyj0bYb1fYbfy%2BxpI9ascbLcin8sA%2BQ1y5y1dU6HV5VT4fTCIVakNwrnHeIFRbvTAbAxOhkshBRj2z%2FFoB8vC9NzuqkxiH8PRke29iyn6JNtekSSRVT4ndzgOn27ZVV4a%2Fd6P5PKTVfXi4vFyWZtSNqjPzEcPi6Qd0pO0C9pVyyKA%2BEcWipbgkFr9MrD6f0S2yyH8QoXYmqJ6SbS%2BX1pG6yZ9r%2FZ1S8WKzv3hgy6F0OrJt4eGZ67nAi7PnA%2B%2BEDVtGVE0wxiKFABrYa4Vw%2BNKAcscLNT16%2Bi8sILFLiNFdJxMGh7kjKlUEpvGJ9TVpR1WIRqW4T%2BlIv6W9bdzBQYVmC%2FKahGf7%2BUmjSWm%2B4Hqi5YLtoBy1ck78K4bJ8fHjnQQjLaUTWJl%2FeqYCzGNBB8XL2F30WuZU%2FU9rvAQzOoCIjQiYvn3Vy1vhmuqesKfo7QFLHYGezzEmj7tubbb5bPMNP0gMMGOqUBzlQN31uWa0Iwg%2B2UoSMlzFs1UmPlpipNciKN1fHelo%2BuO0%2FrdGA4e6Q4n4wAdyHT9V9jTvTnCHOqbZn9wsJGExh49yTfUbIV8kYijGh%2BribBy9nDNdyvhFdOzhdN7QMDLwA6g8IHoDZMeUUF%2B5%2BTL%2BRjnurGDvPV6bc7fG9BtjmmO4Xh%2Bu1TY%2Bc4NpDqHh1Mw8u3LY2O9zW0EsUngOy2fGQDJCyh&X-Amz-Signature=e12bed166b9915cc6f49152f548c52ade2155279409bb6783d5f07f4a2277eaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVFVZIMA%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzGDKXQ0r9JAMt44WL79PsX6rimnSzN5EV%2B9VcuzYbSAiEAmAbxcfFpa6O2NG49NxCTAUE4YjeDzbu3lNjePO93zMwqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVxSH6Cv5TdeekxSyrcAyyRmBH580zmuXMrCra5QXZZgk5mxb0%2Fp5268bwvupc0gWrmgI4rPcUUZ3%2FDdkmltLlUzaSegg6%2F8MvjmyvHF5aSSXgY4xshlp0Xa8L84IXUpd8DVkEU8H4xPvIoOyfp6%2BBmJRmfC3J%2F%2FYCGJxIuc5fKiUPZ3CDDNNFlqmjicxRmimh866azM1v8CU8RtFFMpsP%2FDOdsNe9Hl0vjw%2FgQzOfcldLN5HmI%2BmULm%2BbciVGYeiiId8zzWj%2F49m69VL4oqDUR9S8ub5Y7bpG6f%2FE3DWWU0BGIftXAnAt4Eedm2LPGz%2B5JSsTVlwjUDzZLIwvGUKRTJ2Va9hxiukGdbTMHEAW0prvS6cvBP%2BQSFVpQPKIlX8zze1Qv8fscr2au72ZutVrknG2hnGiPbYsJ74FXgvOKihgLFyY2gXMLUhAyNawxZUEy%2FkyKmAQcaLnhB1Z2T%2BjPAYq%2FAik4ya8UUS6RWwH0jy6JzXn6pSHbbhrmDuR6Ue5%2FnwsD77ydZ%2FcOjuMLPbiy7AiG0cz1xPjjk%2BQxZDG7400OuzVaOd4MsC%2B06gsl2YdWCS72D2%2F0HduI4jVOkkqOuup%2BNbbiHlzVDxMRkg%2FH9eMrI5OEBzXT8TO4yv319zjL3gc1WQXpCo9nMPHdgcMGOqUBSYa1yfU5dgFfoPLz%2F27UbfTqL9O5RvzmvCOBj8AUfSoHofG4A5%2BVKKdabFvvVBt2EHiXVRF%2FbrdPoTyAOm9briedS4WPlD7v%2F1PPO0aMfqpnL%2FiqqGcfjzmb47EKZrpzOBZf7U1ODqBldI%2BewFsMA3Vb%2Ft72F7ctA3v0o5fmy8jO%2F8QrhhyngNb1lCCMo1UhwMpT76tWzYK2TJo4pCIGTy63A99T&X-Amz-Signature=ed7f1aa42a9a3b65740af9b573226ae7d692d8041617af437cedba4fb023b582&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
