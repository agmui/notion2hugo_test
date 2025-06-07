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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KLGTYCY%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T061116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKwsU3a7HvyfEMh2mL0WzYoGRtsGyz6bPLNKSTpBRYSwIgQLTHNgV00uX4AXgjpx1L1h9VXb3v%2BYFjF1wlau4UDLMq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDIPPw%2Btn7%2FFe4c8SMSrcA6aIr%2BNzal9CyfZaMdTGupWimK7Nhf9mIOWDDiJohdwMHRBV8mjVw%2B%2F5JIv%2FeeomFN%2BR2qz%2BhTKrEJV33dZGpeOIbgM0Iqf%2Bo2mTcpsbs%2FkQz6KoV3aWQYa8WW6aUfDTU%2Fu4TnPEo%2BDciXZ2tRW%2BwaQcLmJSxQRc8kp4rlxlkSMCLlxb40BbnCdXjQJUsM2NPuz06b%2BiQgmXnjTYd7pWJmFdgL4vuQq8yvwHlulBKtOzjt8xBZ2TGSg35m%2BWDqGtzQv9xW2Vjou8GDYVFp5gV1e23SDOBnoACyz%2FFSQnIU9wLcCmC1SvX9UFAtnkPJUf6xkiQTwj%2B7QecnXobz3S%2BKb8BXfrqvQMINcRimgQPKGewJ5YVt54VkWDC1PbCLGHB2dh2zMJwWxoc8z01kU1i1U7%2BiV6xA02r6UuPln%2FblTV63fFwic9m6zzEnlj9HufCll0fcpaCg%2Bpw30rAMVB%2BZOTmc4ryl172UWTh5CBGVtUwRSWkbXrGckY9c5HNnxBW0Yvkxa1CiBCQpMjpaM3FzGFZm9r6n0%2B2GCQewubQC0RA%2Fc%2FIUPSL7FHoSbNNqBBelWQo%2FAbZgPqz9hv4svQY6nEDZ70hqmlQdiOH85uTqbA7TQ1sr7HnmcYwvIoMNL6jsIGOqUB%2F6WDiM4Yk%2FA1N4y0TVCMJcFZgYAj6qLzNmi77bsxVoZncWzCSwaKBs9UVRagAS3PyTu5N5PxLsffUKaW3XFZlF2oEpcwhVWPpFbgGPs26a5l3AvjhDOTHDxsU4nsx6tIZB9zsAkWHrKOtKw0ok5FsW4G6uHU3guxsHkM6ITMWvqlu80JwAm420HOhM4QC22%2FgxhvFcN2Etny%2BETXZ7f0gtFNMSSJ&X-Amz-Signature=f3160d068e1e1fafd577ed7ab67608feb55241653abfe1b6b05c55d265054086&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZWS3YOD%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T061117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZQK%2BqoRWEkm4DsJs4eNRRfnXZgQ1MEp1BuIfnEhPEWAiBvn9XtFAo2%2F5S%2B%2F%2BjHnALFqxDyNQDH3QygOV3E%2FPxHYir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMlH%2BdR9eY%2FmLFVLzvKtwD5dTbLb9ATaWaCPJ39c%2F0vu28fVh9akHLYXTmX2sHw2Qy8VWvzq9wsObHlDZ2JrqpNxE0SBn5XFpvaX%2BKc4ZBB3SV9Xa%2FLZH%2B4OFJDDXH3kn6UiAyVbcTjGBok%2B7aTjna%2FTVoZ6ctN5eIP2XupOZV%2BPOmADM31Azv2hv5Qj6ArvZwwGOsmg0vN25P9RfAGuVeoBSAsskvRGXbvPVVJ75ajlLEmWZiFNwX83EVC70Vj7EZ0e%2BFu8txAU22ZtlVqHn9Bmis3396fXgPfa7kfWgZ4l42FVZtl4omANuWABw6P9HfvJaBWRCwJvay9h3a2qd%2FLJkNY68E0PCZB4O65hQVoAtTVquwd14qjgbSFjmmCQCNLcsbJlRxf8g8OxOy2HFFAUdE0ru%2FKLDCp13RD%2Ftd2PsGQY0YQlMZ%2BiwnGgcIrczFlusoeB2PmBg7WK%2BBqJxpOL1z36a0VQqO1dOeGFzpBaCOUPB0LHEHh5oO%2FFpaitLSGh44SKcOjQ2SgYUhynqnrxWwqmVQGM5z6bPo48yrnefejNB6%2BTekp2xQKDRRtQgVP%2BlW47aF8ZlqzXBu8HFrK5d8GPEKUKogUpPT2Dm7lR%2BJtW8VwUB4MYSGejxOnVNT4wjipljaRc2EmUUwyfqOwgY6pgGzQxgZT%2BdL%2F%2B%2BLYskSF4%2BfzP2TJujvMzHZ8ujFcU%2FLHS5hUU8rR8SQdAv7ugh04kEgovxJevsvPyWdkt%2FXTLTeKY7ei1yI2uzT6H8qgn%2FRLKj%2B4q1n6s32ROekxU8ZWyNP9MuxDwYGPNtreRzm2eESzNGS6zn8fBVotbXcytJbFa4FOqqeweC1CkaS2GkLWns%2FQ%2FqqRiFlWS4oTSiBUHAx2dbjGgB7&X-Amz-Signature=97e4b5fe44535c1ec4622edebc20215dc8f7b04f0a25143245831974bf8aa2b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
