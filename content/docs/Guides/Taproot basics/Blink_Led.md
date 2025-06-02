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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2SDR3IY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIDxtbyLRzk1GpMSbF4PUqw1fc9wbsRndidoBt5Sfx%2BdmAiEAvc%2BCFsbKk3BNVt%2BlCzWEZcd%2FfupB3XqTyNGUYiJgk7gqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbmib1kLgB5KDzQyyrcA7Ryfdr2V2ruDmGNZb2KBp0Ii%2F8qsATDAmi2Z%2BQff5HN4GYj6RTxlDVhStiItZZANk2JSdR5iJ9xnS0ISGMlsO5cUZexkm%2B7EB14geC9RCL5Re2JrjbcoF78kHD3GT2LFnHQ3CuhfEh%2BghzxTyvlto19ziSYnB99%2FV%2B3FUDg3pHVWfcBZ00SJIk1COZ7qYdRBuhrgX6fSJay1Oq04wsteRlApYjIDHhFsBc5Tpt%2BwPSXWt9JbJO5KYabTt9%2FX5%2B7r33n6FOpzbrBMo1Stbfx%2FtF1lBo1ZVjPT6Sh8M3KC%2B8EAuVGLKtLdcNWJkKf4Mv3CU1BJew2f2xSvs7JmploRNcOFasqoEHaPzx0F4N7XSDfQYvpAKmmk4eAf9QQ24nevwyh8dV1lO1a6LMqLLlvSz0%2FCmshYC46AhUEW6dqozMYi45eKtYcKmDXYdEWUmbRit7Xakq15bPkFFi8R5Cbz9F4uN85ToboPbAcdK5NWN0SmO6H4SbD91DeVPjTYndE37Jfc%2Fb3NHs5Acn47%2FUVmmllL0czz3qcZ79ih12mwdXeA37tVck%2F07nJOTcsCAgewdMPmIg6hRVIZPrADDQ5xLrdsqozetK8kW7WQZpd1JOOeFvGEnppKOmekulIMPuy98EGOqUBU8piuECCvC6SglT6KzTu2tdBipc3BHhJdM8dwlWlm9twEIgz2REKloHBJYOveEUn04tlN%2F24Z9sXluyI9avq7HSBL9rp3WXtZGUyaQFHB%2BmTxvkmcsDoud4mr67931qd%2FvXtN9JBOGqBgITY%2BPKGm0%2Bv%2F62pDO3EzgIgSUCmEHMFF7j%2F8SntFjZ7AEJUrNLk8ARg3XMB47hqBR0YIORNeQ6j3hkh&X-Amz-Signature=2df5559ee2b46099e5f3c36dd5b859bfcf7067c0695090787daca184460c2ea4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KLMHAI2%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDyQ3Pg95omzja628WuzXChlPTlyOfDERD2hg11Ek2K3AIgQF56BVSMrjCoC%2Flpn350m8DVC2EUojLGDwd9da4P7sgqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBiPPscv88%2BVoTWASrcA9xtBbK%2FD61qSxZz4aBuWtmWbHh8G3KnEQWzwJp9QgbVurU7aXtdxQ%2B%2Bhb4rTTNWqIWSCJq1n7a5wfCvWcCnQJl0yLwpUAJ4WXgJwRuS4Vbu%2FpaoLGxQP0GrlO3Vv5U9EPt3tx85QTFP18vmQdMngw6GAwGvmo%2BpKkCTOz5HfEWTSmqndIWHCt7kv%2BeqN0KkPpzF%2FoqmMMoscuAd3sd3JEf%2BAEIvdFDRbonfVjq0Oy50L6L7UZCXJaXkl%2Bav6zFvitEa0jJ2ov7jxRDZqm5uqoR1WfPa3l4wyvDKONRRImgp2mGJSlhxaUnBq7cq38NhYBzEiEaspBQflirWIAH6YFxwiCrHMfnTQJJywyXbBj6xIEBQ1Hy3AtcoE8yBbd%2BeCqnHRTnBTwm9Vx1CIxhk9pK5g6ey0V163h%2FqqZIAwWjiOy6wTq5A0iASULVYeEntHKRHGi5JYWtJKkFdeq2Mw51iSAQTHoS7uSwXN%2FzhGr5OOYopgXjZQvdFfVWYb6H4fQkpIV7inQy%2ByRRXh%2BWcUL44TLY1m3TLVOKU4ya5sW%2F8de%2BV%2FT1UWnDRtB%2FK2h2SIGZKH2RV0AlJ0XwpfSvWK9v8IUVR28r4Gtstzbwfm5hxkhFUO1CgeglYQ6eWMPmy98EGOqUBTFKTtmf3V1fggO9%2BAtaQelEKl1JmRnsN3XpsPfqN1dCbMXlbZ58bIsl8wo5HJRU%2FHFyfeLv4S8wXBGWHULwrwDdBjw2cM3JC%2BZJZ196R9iXD7JL%2B4w7K%2BMAxsnqQvzEFp4tv9%2FyKFkHl3PyAO2Hg23NSH9JkXWl%2B4anUKqRzgL52mHowUX5deb9%2FuQiy%2BZeNrZqdsenHTqu%2FR3112lLTCqJ%2BKHVP&X-Amz-Signature=9ca13a57d51f44cde1a40cfd5bb35df9a1ae54c80c1fa9f8a0268a04ce593876&X-Amz-SignedHeaders=host&x-id=GetObject)

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
