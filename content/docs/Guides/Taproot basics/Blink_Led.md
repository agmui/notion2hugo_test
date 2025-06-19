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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FBP7QJN%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T004251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtN4uTQubAOENkaRqxcoEO1m294MSWfcgNhfQMymL2DAIhAL5rWeL45Its9V81sqITK10A%2FmG0ZgsKYjw00NUBFV72KogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJlG1FRnrmgQ6MsYsq3APDUquhvvGH8e92uXI%2FWV1ZLnIsw9SIn9ERGf0riS%2FT8wH%2B55NqQ56L6gKXH4i3Ggj01f%2FKZcoGqlpWFH0Ai7se8DYuBp0vgDxP0TicO5vQugvcc48pVNUu0cAvdetjuRymw5XLVJcxvWDjf0o5fqgPayvQAduWcCRf99%2Bm3gACZO%2BZJ8ggqTPmxYuNv9%2FoxkwANjy%2FuPehLv396Qd5OFAeRq99Q6E7aSTI1KHnQC%2Fpvny50u1I%2Bf2CB2xD9yd%2BMq5AnrRD7gLcfLhN7x3CkTN5G%2FiMoRq6PV7AjsqtgHl2HplCfVefJmCFVbbnfWSdEVOph03qgJeLF9cZdYGVvyHpuFffnVkb2Wl7UcsiYmqa%2BbPBgQpN2Zi5wHkUXjB5WE8%2BrrawptNIEptBZabpPuPapNhDJx1u90npTAs3903lA6dqo4yUQpr%2Bp2F4jXfAubtGccnZAN6jnNB8JI48V%2B3%2FZaCdYk6KZ0py5Nu1SVEyWiIdFq7g2KcbI75nh3J5yCwdRazmhl17WAOZ0v0zKCdOqIpnd%2FCHAuvI84UP5STJMBHOXEUjwv2kZWwQZ2Fj595SA2uDsSLXKhpdhwb8C7h6b%2FVZNGtkKnzlovGu1Rb5%2B52yI3cHec3ioizXbDDNoM3CBjqkATgfho2D73Ef49Z%2BdaapWFxCuriZVZ7RJyMCe5zbJcig6aS91lDktkcrdvbjbOSJX12PFZFr0kjwu0vkTHpJ7RmNCCdHTd%2F5fRQqDDX4vhHrFC8zYTI4kpgtRTiLowCmvJEfvF9hYX%2F0x%2BEqdQLm9uRstd%2FcHNV2fHjUnvkMoAHh0RZy35WxKLV81NbwqW5D8LYtNvMouyedh8YzBUy%2FrVLR%2FbV9&X-Amz-Signature=9d19b7229d98a8469965217eb56af3f79cc53d5d8851dba65019844da0cc579f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZUTCWAN%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T004251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCznMPELgCto4HXpofjCBU4pFffyVk4ARieir%2BkVt54LAIhAIb%2Bd7nfZton%2Bf7oMYvPvWZ6JS7jj6awSFA%2FiSR%2Fyw%2FuKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6rgnqojoDxTjXb3Uq3APJ0w6I0H7iHO0gAlGJtlB%2BQAWdwjSC9ell3HgCmTQci19KJpmAeA5OJpLxlrFQoFnioailswCLiKPOFDcamWKY4fy%2FDXJm7Z69ZLhhZP5V%2FEBqKF1OQ2WX7PK9hXJauOCJF8cYpRiMRQEuK6WWIkiP5zyM9HBi8LABERUAzviIlx3QFH%2FutAyYZ7zuKHo%2BNFluumJeg9C9t4HjZeF7LckXBdcpS1igcp1LP2vlOB9tce5xFfMrscy2T5Y5wJUOiEsnf4HJY4V7YvhrNNEOX8Kcakbvtn%2BxnphTzNWIb8Knb%2FusRPIX8cJjyqScPFmmZU00QpUJ0E7JRFRuZthoEdtd4vsxexsk5Q98p9a3G1a4Chy0pFrF27dd4RkhwBT4mrBlG30J%2F5jPrrWBfBQ%2BhfyHxegOzQoGVwXDGtm0emOiHSZ7P2lceW2TSxR6bHs30BH%2BRl2UXn2PCWzSHtQEs7dQ2sc3aBBDfFhuqXuOesosQRdmKEYeBa2PYC9NybqBPR4czKQvthxOBZX8OuDxZN6E7wvF0ISGqeN5w%2Fy9SG44DrdpCva9tiUP2vQHIR5pMjHReaSld7bfIN6MbnvVdnBfZGgPlzcgEYx5MV4lf2VpGT8SbgwmUZrXqQn26zCtoM3CBjqkATEFFGO8m6X1l750ORgi4cPg63YONnLsF4tUEBQMMvE2s%2BaCGdXNzlKFnQtWstO7D3WqgyJpGLlG%2FernG9%2Bbaud5SBdC%2FFMVxkaI2loZuVxr5ha7lwAt7miFqlPGlThicGVeleAow81tRuyfRzqOIIREYeqq4hemaoLzktbQc1m%2BKjdmcQIQ1dosvUtVK%2BwJtBkjVGOzjiYLQngM1vJAyRQmOIr%2F&X-Amz-Signature=f82f387ef144bc0bdaafe7529bb98ae02ec24d54b65caf2b31bb56f1485a328f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
