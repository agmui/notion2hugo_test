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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE4QFAUP%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCMi%2FR%2Fs8vhw8kWdg34MRvaXZmKzv0sVk%2BiYZcGxMK55wIgJBh%2B66ll6WHD1caBUyzVQoXiyzQC9IHonttP8f6eeMsqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPh%2BfoKYtK7aqD5ooSrcA7tj60DL4%2B0Kg7tuKLIaPUn8h0Gy3qzKyeVcWelxdhT2VoOh2O17bPAX1lpne%2BJ%2FXK27bYEmzVBKc8L5Ek4yY3uOkfZh7ibQBrx1BtcZFWHXlAL898C9u%2BxVJDCStd0d4cJ2RQlQUW09bjAfUGIO4H6Wb28IX1PcE9TE53P7kDNZ3oqu4WD6vzT0En7esAfixWuMdAMkohIHyN46ZK17nfY2or3TDDN0WkZedg0pxzFiSCrv8e4vy34iG%2F%2BkOJmMmNvV5uzbszgPsTk%2BpJqCh8R4Cn%2FFMMnc%2FgVNtJi8RaSk2%2B9TRkKrcxqmIMnFFj8RTVrW9geOjO5hYIKE4E15znYCLxf1UlJIF32y6EHp2XH5khOGnQ7HohxjUuLGkt1ewqbm%2BkV3mia3%2BND0MDssdztbe7FkbucBd%2Bv1USDPdVvOW47zore%2BjjGAvZA4riE3qVP2siJlUmnKDUIGBGF9JSJX6ncoDtw3uHKp9RsFhnKwFWAluZxhTHaQghBFRjC6vZ8MPSeJsTbUggQzNDVWmDM6otg1yVeFuASc1Z5S%2F54f0cGXmS6OpGDJnfwGpsYuFwZS7AM3mqrda08EONGt1lxnskgcCvenzr0VabZADMkUnyagTTQSi3arC6X8MKGdycAGOqUBM4dKFNQILoCehUdfXbiQaYTqCpUdtiMiAoxIRkgZ3BiYE6tiew0QZuAItrf2LEy2OJ5WOnveJkKPPCaoLWnfnFwsA%2B%2FBANRZDP1aTRnYOjiqZSyZc8qa77VT%2Bt3w8wjIN0aWMDC0WV7WpgltjEVC25100S06KYkX90yXkqd%2FPk1ZrzMM7Df%2B716FFXA8nv0EpTUrvNvk2e4ZhJzu66dTLx%2FNv8jJ&X-Amz-Signature=d454c515baacc0f94f0d19876cd720ca1e06523405d21ffb9a3a831cb2ead7d7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGMIEB4F%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T181127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCSBcRbFjX5lPT5NwlngphamVGMFyDtSbflCChsFQ%2BodwIhALipqLCzjWlSKxHP8Qws0MsInJNqXEpBYx3rQdAL%2BBg1KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrvbbOfXL2EtfC678q3AOAXzdKwQJwxBBDdhgMJcP8TGMvzOPBokYwr6XOmsjTEMXK7O8iCVcUvA%2Fw0c%2BSs9v6Tr%2FJiPj68usTk%2BwtO7XF4W5rrfgz9C7Sjs9DxjoXFRmRpLEyYpEN84dJ%2F0PVAq8Xd0GmytIWJZkV6%2BzeXAKFCvaPKIL%2BIh6ufac%2BSYAPuox4I1lTikkz7rhqT9sV18ffExjWOhAeT2sM5Rfs1vdV%2BDcgJVToya5codfECrLZHes3Ll8GfbtPCkx9qcy7OvUFC6XwrXk%2Fdue5WQR8Dfz6ODfU6fHX2emCCxtHOaFLTYvk127bcdMiiRDBtIcgs%2B7ZyAx251Cj%2FbMr%2FO5EjwtTS9fl8ePwv9%2FbEI%2FUrm3VObNBWjONOW5bfNpRtYJIha3nu%2FBZd19FOLw5XZrZnriqDcQT4LuOdwhkP7BDWfOOfMwnjyMcbDwlXE%2BOjMKGoTdVwhZit3P7bjJsixCEbvaeRc%2B6GFQdBEFFviwQK9Mi3i7YVYGysdKPUp7IDuRElI%2FNPOdZbN%2Bz9IgH%2B3CxLTqRqiMfJpp95C%2FZ6SWCVS0uDFZS6fHiShdzup2Qs55sLC%2FIht23zFX2pAVsLH%2BQYnMfZUSMdn5ZPOic%2FXnLc8OBONy6dO6%2F3QEpEdjfrTC9ncnABjqkASZKpiSfyoBIhQdPA2mNN3x4yzD6sLYoORojB6%2FiMKi%2FSEyplwwwIUvX0%2FRpikjih%2F2Sgwc9OmZeI%2FZ%2FZr6Y2vwloOiMbNRUMSQgHH4lIVow%2FieUed%2Fxv4hVuukIRvRVrmvOZPAiyO52jMQ02oOUGPR1meRVv2AJlZfRDaMSia5nx6pgWBW0iLWmqjGbkfXUJwcdiTvppKAQo9%2FWsLnv%2BexB4WK7&X-Amz-Signature=f89ada0a00df0be7e61eb23a617c2dfe1398044e118d7659343371492763b30d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
