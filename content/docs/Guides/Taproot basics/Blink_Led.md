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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AEKSD3R%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIE%2B8RnRcYMMxxadLFNXwnztgvFPKHmBgzJcNa%2FNOdjc0AiAcuTRT7yvdydIqBz%2F0T6t5uGjfuWghZ8viEcKn4YQ0Qir%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMF19fE9SiRDqOLmHiKtwDCoMxbxPlcpecm140QuTtSyvWJntmIFBqLe3RMJkmeElcF9ey5z5qY09ytM28HNhdiKTQuh3Uhr82PRrETTPvGiMuma7aDxiWjJkRXVxKOjh0L6XTpYOo6Ji5ngL0Y7BProiUeXCxOkZ3kClX%2FAsg5yCh22LM6x5fio0LaDbAbkRQZQsBSy8JI0TDC2idoHVfvO9IrnUcPun0QUipTijIAe41%2BMKny6W94eugTQdEDPjWDpEYQ09TvwI%2FVBj2UAg94SmbAXsuAT1xu76ALALZOzzF7cKTpSthLyRq2Wt3a%2BaRxWDB5y6CD90GDc9mMHQVInUSBNe2%2FyoWd9OoCZJ7WYfhZPEWtRagv5YpZ4O%2BzTuIE3vPr5Ee0YTL04kS1rPYu2JwRNebWnnowDOZMhCdMq%2F3ZDp%2FuyFJGPuxLSMVOEpnzDAXcSXXv3frkcfh5Nzvs3bJERqyj4NbERlrCkZqua40KpsnL%2FEvNh1Ewo98ykwsnu31x7C7OhOOqzZBO2hNzfdw9aqQs4RyGXm7YMjgkrov3GEgb06akQdZF7WAbl2YdfPK612p6UlsPxMpQvmCoHWnAXigeIowO84x9G96ZSE2LePpAGTMPabjO8ricQYc1POXQESVBscBAr4wus68wgY6pgFSPNDSgBpeO74GId282gyKEVdzI7TfD0XFW3lu8Y7WiUvIDfr4jZGJ%2F0BA5MS2EXYwZu8HNZ8pJ1gUigyN7%2Bjz2ThRElGOClz52I7mIhZ0aocIJ%2FgAvH6%2BB6IcUGPDyhU509wGdVu0u91y20BD1vA1UITwDiQGhdvWIGqZw6kMD962Bl60XreHztFkEr3IDlNbMVQi3Qah3kPNjZytLxK07MqF7s2n&X-Amz-Signature=c04aaaf824ca2fa81741df089c62e2cd14d63a5dbe9876a8e629be6b1459ab59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AJZONQ2%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDHd9p3ch%2FvEzOiFb82PeS7UdxBq2YXF63fJoGF7WA07gIgED6HAxhzr5gMdu2%2BdlEc3uqOa4IP7RKAZyuBNQ9ISrIq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDHeHPnAedCtcJnIjIyrcA1y4v9TUT4Goj6iMqu8i5P%2FAMrjC5DWCzl5AXAHR5FDxTI%2Fvr7Tr44L7aMXAmgOnOoJPjca%2BACKoUzFh9ZpyDAOhgB3sI9eDvQ4KphX6xz%2BEEVEepsn1by09VcPEW7ztwvf%2FY7%2BNPGVDYjutq2wmKF7fjNsLJbI7fvL0D8gpBGpSO1v%2Bb%2B5SBNcqkOvv%2F91vyI74%2BZpQOK04Iu%2F0sHnPsNRizjtg%2BZYYjFvkvLw2KR7vO931fhOeOY4LYTu4g4TqDQWAu9eBlHLg2JhVr656IZGwVWT58bnDgUC4NY%2FdxCo8f0LeVUC64yenAhuyNKQWAzDEMAlYUzH3n%2FinEewt97%2BY9mBeWdQtcr3XwBu6T2M87n6Bdlr5ppIx4THIWloAxc47SN1VX%2FQYfGKO9FcPwjLB4aJARIa9qVxCrrD7kj0eHfDkPCd4eiTi0mEWf0ks24Y2eEUEHVt3fABqxmrZjIzv0jYk%2Bp62kGO9Hbw7icIB%2BmktH0n7jMSSFV6qg11M%2F38RvlTanQmUYxUQEyqczTPT7dyn9Fz6qg8EWdU4u761Eq7FeGU0LS7COQ9o3%2FNsysEawV%2F%2Fs5VYyJBCe8yMQ6tclifufBgni%2BaElajRwyXZBp2vTnM0VMVthoLnMODOvMIGOqUBAtAiFdj1dSr9mcrjviud4mMbXXRNTMf2yewAzlC5WqmE%2FqWgq8KU6luNZMIEL9vZ0c6aVR%2Fy2xO%2FuZJVyDiMb5xvToyzdhXfSeSOZuJ8HGGU8wTBCB5HSVjUildFwB3ntrTfbARBo5i6HlRxJVxWJH3hU3F9Ez6jdLWypj1C3cskJNUzVnZGQfGDY%2FEPh%2BclQl028JE71q0PzrordW%2FyiWEt9IWH&X-Amz-Signature=46341b2638b14a6b40411c5afaf4a6373e4dff93a32c3d949e7cf18d298350da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
