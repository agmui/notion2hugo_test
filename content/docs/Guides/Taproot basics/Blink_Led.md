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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2URRS42%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T050840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH9DphmZLInB4DIVstAfP59btmZanUls0aC0rBUj%2FaAQIgcgdSc%2F%2FxJ2J8meLQC7a%2BtLmbE4RilNHmPaR%2BnIJCaKIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSZdh4ClzvjEHMwsCrcA8QtkgmgtYoYzTTA8FsKeDsC7qsg%2F47VHyjTnDrLHIpQ%2Fhj%2BfAiT%2Bpz6dRkj1oCTI%2BSnxRCFv4DVQqkY%2B4eqKWk9vLngrqd4M1q%2FLYIzH2Y67gdD28xQcawzvq4vQeu%2BoVUiTIqBaQd23GozvUjfBdrNuy66N5TffdOWYvvyt4%2BRaizX5SyHlSfWE7XjJIsM%2BbgMsj%2Fu1Ijds3tHsGW7fdMG7eOBOstXmljRFGR5%2FQGdP6pFvvln7SIphsaCokxIt0TDYdtNqJjpfYLiStOPmAC%2BJKz0kTX6Y7pIz3qOmZ%2ByZIPl0IMXG32mx%2BZszEMRLg9vAcXtyiKQRQA%2FcjtgvoFjWfO0KnBnqzuFW%2Fy0zKbPai84M3tw7DtTu%2Bj7EJihgUMpFmcPlZpC3jLyXZmpm9UvAo47ZcsyE2TllKOtJGy4omCwrwmaZIWbqLaWg%2Bp%2Fsm9uPk81jntIcdUV2n6Yhri%2BZ5oGthdzdcerfljWLtff0Gq6Kz1WKApLxLp9y2Q23i2jZTbG%2BZDqpKSlJE1dLtkUUd8m8aHmC3IpgeqqP%2FFR6N5BK3rZm5Bt0WsVGSULFLxcz6bEB11FxnImlQl9y%2FUz1RsRbOO%2FISztKj5gAJgbHX6LknNftjdRCgz6MOOv2MIGOqUBBcwnnxRJ0eyoTW%2F3qd4Lf4KNNxSBzH7H3OI%2BMHAENSCFGmEhgpThtuIHDj%2B1lbN%2FPvEpXFfG7jx1bOGI616MuSKwsF5tQ8j4QEVVGUI9cPAXBMY80t628rfMkz8aM1hFgb5MzSYC3Su37vktPHH0k8xj%2FXkOTmccb6au1sBTmYd0dsCn%2B%2BjD850oplgqoEZcKin7vIycGlmGfz24ByuRiDh6OrCd&X-Amz-Signature=b396ac09248e1b16097a96227a169b4343c487b5a84237420e991dada596ec36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EAPCQ2S%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T050840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2JViK%2BrPbHnutfRTy8FsU8EQO4LCr66MqbuOUkQIesAiEAuqvMGS6H1sY9EPlxYtYL0ysgTYKdPLR9QeZkH5F%2Fyq0qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNPXDToNZm3St79ACrcA36E%2FeTcuvwAVbQGP1YDtIL27MvRZM9K1Xa65DrArm%2Bl%2FyO6gVBjdJ2kcPYCS4JJ3IPB56zEyXobmfHsDAs0t2oJSRQDFwcwy%2BXXrnet1HSaBbV9ha5iSmIzmfk7kjMwRkR%2BPaNvvwK5jyc9TzwWY1mPTWfWT1XkM5%2FUFgIcL342agm9Ia6MlJbBCr0kG53jrEA3SfR4Z%2FkIf7mTtdaxF0SpTeTRGiJbAfpp%2BWImy1BasUmeMW7H6TBmW3sIuiqeQQgyZN3AwiNUKBSSxXUjN7zgAhbFJn4vrWkWY74zWl2TrgNRK7I1AQpZoPaIjRzsjBLXjtSDlLccNFc5%2BuF1z7EvsYL56jGrfmv15ZZFgrv%2BEp8DXKUBREjAgZy2p9XAUCxRkt4gkiUzLPVeZLJoXtkcNS8i48rRMFhFp31pBDbvxFuJ0kQM5Kf1CWbnhBd16tgXok0uONuyJqR88a%2Bmd0gYjd%2BvUKkMeCW4RfGvRbXYU4NdFOFJ4yWbDQi3ZYDOSW0vyFVcs7AB8VDo6IJ7HehnYLX0w1zNRD9D9XzenCS%2B0xmIzBoS8P5NCiGM4ZYZ33%2FdTtQVaJ9ksvHSC%2FdqUB8%2BX2XPuBZf8q2Xb5ibh%2FYX8Uu4K8ikgykPmJnbMMGv2MIGOqUBH4wevf%2FqeQP%2FETBVv564DPn143HMywVsAZsgcXIkkYqkcR5pHt5PQNtp%2BYcn5rvMMY2ZOEQfe%2BEbrZFKBJi0hIE%2BI9k7T%2B45iSJPDlyveIRJgEawv6810vi9wCjoR966LlhJE7LWTVS9PNp91zaqZZWHXIoXe0189pY4HcKP02x3XcAUbgIDOnZYfK%2BKHYydJUWZr80Cy8f02fdgo29LZD7inrTv&X-Amz-Signature=c147de241b49ddad5fc19af13d06e63ee2e6041492b0d4417f32a7cc6973aaf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
