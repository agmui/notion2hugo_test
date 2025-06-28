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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3HV2FKE%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T061124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCypbXdwySDiUNFaZZQeqNMMI3cUosq8v1JMFcSCNHrwIgS3OkzsWhV%2BASAEIZB1WEndMUgTIifqO%2BRjQi1eVK8P0qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BudWVXIiaObAoWJyrcAxUm1BM0W%2FVQnPKck2I%2BFqSTafl4dEwOAaX2I9niIqzKQrrefxoSCmij2gmIgz51FTQ9wpcdBpwDyizVVhPMdEmwVIZ4SPr%2Bim2OJ8aS5%2BiR%2FXgf1Cmn8nK%2BUAC3uerqb7Li2iUgP%2Fdgk8FNY%2FQRqVbTQkVAekXRG0Tp1FDizkFzI8CFYvsWk8%2B89yKRrIyph%2FeW0pp9kdVElZcRilBI80WfAyLYMrsEcyXy3U390x3XZEeJiE1FVFAsIVRcharpC4RqE2tc3nyGEJe9TXMfYxV%2FnRtC9RaUaPq26DCKvrZ4CnjS%2Fc3w6B%2F1pb4pc5pDFo6ZWQOddWotPmcXGS%2B9jE6TZS7KAA3%2FL5YBCaHtLAC0OoSzOs6Ep0deFwfwUdsE%2BN27D9ihm0MNp2fiV5%2FsBQBsOJQo44PMT5%2B0oSSPKnpH47PvWtIOnLamhIIn6zl9m8R2r7UwFj%2BGccaPr5HxjWSL%2BS2s%2By1gtrBodhg9VDr%2FSYaFjzU0vDGdPUB4BGVpfk%2BC%2BUxxR7e2qHK1nh9ej1Ha48InTMsexxr9jHV%2FpKfSPe9rRuByg1PyjY8CiY%2FBWIqq58RfEBD68lX9X%2FIVV1dDDisPSKGRJwlUk%2BouYld6Ouq46kQ15P3C8j6pMMf6%2FcIGOqUBFVSRAyGVGTnohfZia5jkWTlLAlgehtfoafeY2j7hmwntDR8iAArXZAZPIeHwFbB5ubIGcHyJO2evQJh3sJgMnW%2Fl7XHruhoP%2BzmCpPTZSM660ReDaV6H3DE6M6%2Fq5teUHswjMzhDMXYP8AM0GC0CjwJxzD%2BtnA8Hwy16Jybh1ExgCbz6yGgpPxW3bCVYxvU0fwGstNUV%2BmB2m7dnF0TWdjMveH7O&X-Amz-Signature=f705c66281659ceb9f77786dd02af52da7f6a624aa9e7027e0edacfa3ce804f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMQKENMH%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBOBxkql1zOQVivLjeTe5F%2FioB8DiTHXHbRcIWd3PfpAAiAoHHb6dBmNWb0gsl1lbuIma7DwGYQHn8NVyX5bZ2Og2CqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4eOHByQIgLSYMxY5KtwD1Mmu%2BjHC2cyMYhtY51oLnicxEjgzIMtU8g8TE6l8VbhgJw3GcZUVCH2Swm7b%2BrbC6%2B1J9NSLEmj3WHDNilRmsY4OOscNbD4rVNglt%2FaCMZnq5fnSqT7LoxLvgLqWqj2gwe%2BIY4dkzDJkVqkjPSWuvp08oVjMdIh8FHQmjckgDQb%2FNGWT6bSP%2FXMF0dEqO%2FbBvTzIjsuLYTHU%2BeAZ61FmvFftsaJtbCQBcK2fw15xVyJgGMLCgzezPqWPQwJnzwn7RoZvjgI9vfLajhrRRgZotTwIp9CzE9kxoC2UzCmg0CN%2B2ddiF0WtsR2tpZmJp55acvwNIUPScF4fprbwKoJjrs%2F7Y%2FlmzlmffxfESxPJw7b8o33QDdiaw1BubUoowMOyz4pfEBbrizWkJxcymt6fOJ12CkvclvVFygIRmNTNBRlXmWYYmCyEWO2F0mPlxjeN8id8YO4rlah50awX00d5FovqPjbY%2F6lf0BZ1HvcQm8nqUWP3hsVg20NRc869jg13PlSNI7UcIvDiOMzSXSF5LwXxnME0A0lXC%2FN7X9Qhwo1Hc1060VBnNMayC7nv6i0bpDW6DQtzajQPR5r5%2B2na9HLfWPBELR0IjaWahhFExJTn3Jsm8pjLYdeiBC0w0fn9wgY6pgFM50vRpwgQGAA%2Bawfeqpt2dXCgDMsmxM6vSF%2Bud2dGVIPGnDUk5Ad8slt7FPf7Svk2s%2F%2Fg3SRT7A%2FSX9mJOPGPe0xWcSJ9yApWPmlbTer6b1eTW3k3qccBPcfLwPg1FEIV3g9bg1KiuKAVvA7X%2B5CvmAD3dCpc2iraOp%2FjqfMwTKmgx98AYB8cg3Y2%2Bb%2FDtkNhiPbIo3s2nuHCZuENaUt7dd5T%2BAmK&X-Amz-Signature=3bf18730d5fbdb40c1f09726983d49175d86bc065e844f6f016878904a60100d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
