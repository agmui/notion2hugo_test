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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U2RWG4X%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T021020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHxGSQYXGjgeJybTOgl%2BarrRkmj0u%2BHMbs0Xt7q9sl1WAiEA3U06bDQSNDvc5vCBLmCrJ7F4EXkQkQ%2BSPHfaXSO1o%2FMqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFvO2ebCUK0%2BY%2BFwRSrcA8m2DqZFezeL2G%2FThVjptn3D3xosllcNRbKq2DngfL4ahPKYUVguP5rebMWktzKIpWIVa1t3Md7XhJzMMhne8Ip57h9nnCoovhfgCHhXpnMogizz70PwAxcGaVRzoKwIcVpkjPpolyszMJwp8Lp05R%2BNKazc%2BDayl%2F42vvlpEuMGMfsqEpGPmFRbvM4%2BysTYbiOsNtemtmI3O1mmD1jVaScDm6UhhhL9rskkG%2Bu6dDKnRlM6C%2FjhqZ%2BsQh6rLOiKEx4NcSLAuMgwDejUvFaEam3cERgKo0gIvQZQnZQCNRbyWxsu%2FmkLt%2FgUbIElxk0AaHbSjys2JXxZ0u8CPyT%2FSxFCntkGzy%2F7K4dukYyaMfb74GtmMzoQWFLubeU0PTaIveFRz6Y51CC7Gf8GFTxM3G1Khp27E43BELndNOEhfeEPhLjlGTRy7l4rpwOrIbqrehWvbunCyeVCz15tQ9d3J003VWIDJQpF3dSc%2FhUK6Gz%2FhTdICgJdwS2bDocfLdDGt3MQ07rkqoT6M97eMbnDTcU1JwEyebtND8gBNThKWd6Re8qbmF1QR8hyibFXpmjb5qnfeUQ6cbuNjMwRIlb2eyJpoSRBrdli%2BFRS6BM8JTDPOO2l0MFhPLm81vnNMMru9bwGOqUBePO2ScRmQlWxdJPRbuyaArgYJyciW19GfHw%2FArvivSw%2BaZpnwGQaF%2BUhSGeO7PPDvspmyU3shB5eITPRL4r8fZqdXW2PdplNXCCjImwNwDSClUsAv1AMih1rPVT4nTpQeIr43gNuTlWWc8sPdlRJJCGjav0qIh74HUaaIc%2F%2BmswBkw%2F5zBp%2FP1DYa%2F5CrcdB1iV%2F1pOcusghJm9Qx7p1boglxm5h&X-Amz-Signature=37fdef3e50789125ac3b0a4313901d4d3310a95257e57ed1086033f58052171c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRR5NBI5%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T021020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIN9R%2Bo2FxvQkgk0vHmpwKcbvV0MF%2FbXDjCVw%2Bx1VvLQIhAOCuvghI2tygFww9OZkcw9njrdZ%2Bre1mWZvle0qG9UPIKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzj0kgbwOU0fnXOo1Eq3AMniDp5i9iQ8x2%2FAZbCa6QSxbG6RSRDpKnezYyU%2FS3nrVx2X69GDqO32nxZMrt4q9XYM%2FcMEL6Pc07yhktACA0eGOQspK9fyW7HBmO3hNXfCddvBsVo94CBByqWPc1gJCQPYFonHGcPj%2F%2Bgh4g0j7usfMm3hL42MQG8To6cPNvEoqdpdLfW6kcxmyPkJa14JkEDL88CmFdK6z6xIYJ%2Bgf2hHJWHplutOA7aSO7hhi6BZApQlY95OxeccRRyv9uWj8rNs85YR%2BXxTLQxkHTxjBZ94j7hpx21ir2dUARreohX0O5pk84X3L2WWuR%2BgYVd2uiqMlq2KjWENUyJzXXWyYDV93s17jp6rwvmhCLW%2FZRoEg9lCSL6t5Ok2uvV%2F9TQqxvWkMvmC8Ar0apKgcIlBZytHfQv9TmcIM2htSVMjvQM%2F8TywgOvESaXBE%2Fd6ethFMeR6bq7LXWH2hXjuDy3oFl7l2HqIJ4Ho5boCFmgfon6PFUNkaF7UF2e9DExLEg5m8%2F7W%2B%2B2dtAtnmJ%2FrZU0SXx%2B0LEBL4o%2FkMGI9M28c37soXm36qyMBnUjNkAQdaNM3pGdvJXHE%2B5tyOZhjJ8H%2ByojM9JAeKmQD1qMVMDsfC0w1lBgwrUkUTiEQH32%2BTDc7vW8BjqkAZ7FhJvR7%2BBW0y29kYjfg%2FrAiFA5ENFj7YhYt%2FnXfm5wWBGi71KchpM2K3fyX0IAVyiSmJ4DbLBQacTByPR4agnjHBw4BIT5qLrx3%2ByDNZJCS%2BCsRBt3ZJcpNXb6WCpui3SArvq8kZSRAlDYauP961fpQukUPYwOjrk4hDLGkQDyWBRxCxRrzLcraQjdodS0BOvGmNZYaG7DHwp%2BSM5Go15wxgWL&X-Amz-Signature=a7679ff715dd178baaa77b6c4c6b309b7c9feaa9dfacb523259e2b03315f7d17&X-Amz-SignedHeaders=host&x-id=GetObject)

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
