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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ILDIVNO%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIEX5CWPNUiY8%2FIipOmJWHdEyAoEu2UnATy7aHsrfqCC6AiEAhIv5gEZGlvQupNWUyEkQMPN1xL8OMo1wDy4Q9229cDEq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDHwxTR2dRCozH1r4gSrcAzSrZcCVqvM2uRPsVl0aexak0GTHzWWrFGIQ6geCTxl4EC3M%2BynB2ntkkKgdwjLZlydEZpGls9h8CYCBaht%2Bjn1xFU1li8OWS3T1ypzoSUetCyvGBDfy%2BeBjpR0dhGsAYgfSNQQsO1bwMLGg8WvSDTaMGaqnumWfed%2Bps%2B0xXb7rdCkokWPctgPenEqKUA0KpOGk5Qgpny%2B0fVVDqkiOwO9h67EfDkyZPR3VDZqVcoVOlB4WffJCPxdPk2liaMQQCPDbDUS0%2BegzWblpkk8Wg2S81bmMib%2BYuu0mk%2BacqCaXmKy%2FIlHMHLpwcjyxVf51YqOY08GrTF0EjWWMFV9CgNw0oSjQh63Z8O%2BT7Fg%2F5W%2FmjXr0W5lMAMSm2B3nsCphx8%2Fy0mfgpF3UdOH75z5saUAd8And42uXgl6Q27uDUZ2Y5vyCtQo%2FKBMuel6XlemDudF31QgXYVR8kvNMD4gVkOxTS1RD8wc%2FqxLdJ0Kv0aNchhhQCEku4g7AsjqClVrycCC73JIX3loJehngMYtxIvBTafkpP0GM0QCIg0oOW%2BTR9YMpf7B6jes0gBgriN6RGbltSLdHp2SLuGsXqT49tcoFOwbnDTL7RyGiRBDEBD%2Ff9Tum24SU7bA78knjMN%2BFvMIGOqUBRv2xavPF47wJhCpwXfEu7I4%2FUpmdO88M7br0uGP0Ps9L5VTtdGO4ygpoLUqK%2FO%2Flkysx3%2Fv32xUFOpq8SKT0yEWgCghIiXnG%2BVHNM8jz9gFSUSsT8Q2mFTVQyM8p49UtLAdFAAqzQoXnBMGkavpkIw1DkOs%2BJXa4nqnVP2TbOpHwZhHNNCax1konjLQrx%2FkC6vPu7dwVeilhwOGXWbqKre6c%2BRhi&X-Amz-Signature=68ec084fcd7c6438417088f84eab049a74b9595db7c5a516d8ce307c0bacac14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOW4LR3T%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIFpLDspa5%2BJxFP3nnL7VMjbaGoJ45EvpBaXmYibS1UYaAiEAln1dXL%2FvcSqSWjMoFb1izvYGxtkNXfpjuahycrYYg3cq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDGTVAMcVfmScqXFPtircA8Yxcd924xqzcKGYOuj3TfNGqEuVgPr%2B78Wm21jNERBqANIZc9oTLNbMrUiW7eXIIzoBr%2BiTS1xeYs6Nw6FYiGQyGHFGb9HKvi1BPeAq1cCmF5GfvK8ZjFl5ckAXpFWux2E0SIEULU%2FuyE8gj5AQaNpo9Rhk2C4ybmHT74Ex%2B%2BWWJvn5b1f7Hjf9%2FCxwHRSpEKQeU3brGZh61CM07dn7jMSNr8SDfSRL6M0gjMCLOGOC%2FACmvtzMz%2FYpMBi7s37Bpr8hW%2Bhg3lHBFbyD7UtruqWWhvS08xvKdsBYkX9og7FEcxoQkjYMbPh9aem1YOAHTY44laBOX%2Fcio%2FUCiWXAqmlG3qZ34nNmyRoA0V9IEAdlDJ3Hkm0m7c0Zeet%2B%2BlcOqNLASw9Eqy6S%2BH1nqKg8nqJTMh2LcqWPujt3pbK60aatPVAF6eJRtungGs%2FhVM7tg6VkSRTVuBh9rGNLVSvU%2BV1s1%2FLaVdQaSpUcAHMrTzczcSZ8sw2g5zxghMSASncGILWVZC%2Fn6iBftmNDrdgi4gxVyN4r%2F9w%2BUfVAcfAePOkauSR3rURK5Yp2%2Fj2PsX0CGGLLPgxht8eCEouTOasD7FIr2cs5ICaf3QuSyOv%2FALogwSgQNSvKVDclmJ8dMLaEvMIGOqUB%2BPd%2B30Sno9j6byzecNxDRc7MXfOeGkG88lCvuIJLvpbau4mUdAO3JRh%2FqRI1lXAKL5ZgtvUa5ljmy2VTyYxPIlTSIUEbMezBRvpjrTrFMQ2Lp1hRyE%2FuSkFO3PduG12DIOIKKE77CIg88DzApJNaC35%2BBTjikLsQtRvMw9eZGKVqFgJeT9Ffb7elP2I%2FOeaitaCZLlMvlF0uk%2F%2BqHTl2bjizied%2B&X-Amz-Signature=3c1bef2c40bb7b0df8b4c961b2989008aca77070656e626c38846819b8554888&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
