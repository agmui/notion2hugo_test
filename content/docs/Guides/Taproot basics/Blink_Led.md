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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7CMA234%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T081309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmj3oKL2WIFtl3S%2BImJFXWyLKmgjr%2Fm0w%2FS6LdCcKwFAiEAh5hvr0vfi7tyOQblucxAGVlDSL09FEKrUg6nxVdSTVsqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPs8iyy3MTCfVNzMGyrcAwC%2BF7zhs14u4ccEgg86fMvCw3etqQ9aGUeeOWcDSO8YnKRQqmuEIjHr5lcR9j2p5ML5CEAkz2%2BKs%2Bofj6V%2BPotrlQ9X4yTj1%2BiVt6Wr60I5vAQkPdMt4pT%2Fr%2F37dmf4MvX%2Fc%2FoQnafo0VI8WRPPAj9ONkz4ztOvKXqfVSLJXKfiFqVSyLZdPleXEUa9eEiOz6zRiuQvh%2BVIgMQOT8qmJw%2BuSJCemc6KgKCrsvmcGsEbbgrc3D%2FCuULrhZV1533y8V3VJR94zCYXCbbDRtTp1JYX69bQmV%2BC%2B3UyNrDvzkl4JDZn3olDyzVdFWaOrh%2BeVlTRYgVU1CVSYUxxZ4CDK27Q15k8pKOqCbV9Uhi%2B2HnU%2Fe5hOlwjyr%2B2Cop%2B%2Bis%2F%2BsNAaGDCN22L2OdFQ1mIWXYnx7H5WMKbK%2BmsCaE5f70DoxQyh6f42%2BZo0OxCylWzGKSUvtZSU2IMFdvXl8UvlNfH7WDqsQKo7aXR3tNsPxbK%2Bdl7yZdFx8MrTgCRNmsL%2BV7CWkO5WICDfsLsF5ykVI8kYZPPvnbLBfI5oyKaXnBBMKUPMEeZqF72QfkzzJkSnzsrYGDfAoIceT9OUky5D%2F8KSfKrKujL597i7AQPbJ4l4ABLWRQ2O0xIlnMNMN2FjsMGOqUBo1AVJUomjYBDB9JJTAIsb8C1myTKcChX1HSJoZFYjsnVeSHzHa%2BY1PbSNnjVMNo6J0a5Wox2ZKLxMLxXrZ4uvKPuxhSNuf4i5t8s9Dyz9fIaqKzQYm0cHaZRgFjRC7e7cK4Ylh2naHBVndPW7yk%2FZHVPnYTXNTtWhOlQn%2BlEELii59xZV57kB5ifyxShSMeI7eKGcc1wWUgMpqbBmd1BqSaKy07T&X-Amz-Signature=517ed64c1612dccb910ae8a7b1b4a8e77fe9e8cfbb7bb359a77fe9e92c18f74a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KKKK2ZF%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T081309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJI7AelrwPohxyPLa07fXRuTIomKQkQwjvfCCo5gH32gIhAKaTCIuwKUI%2B5NlnhZWwYIMYYBY0R15rdJ%2F4Mw5mAs50KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxt7BAxW9syJszZ6RQq3AO2twUb3GzFBU374M5Cy%2F1pmQ%2FJqYtOzJ%2FcJf6SJoIUA3odslgAQ8pPsAZ1UUgH2IRXYP4FzdB%2BLM%2BS%2BpBJQAcIdhVP1OOobvt%2BJ1EDL2hZ0rksEBR8NzR24mlIqQwHlpHsDiQQoVAwgVbDxU%2FkdzYda5qSeGOcIm7qfKaQqjIIadeXkwQB1aCZBGGzkyfV20xG0%2FCMHy%2BA2lw6Vbd4y6br8hMqA7Xq%2FV%2FdmDWQd1O5sUGiBGDErGVnNqd1h5uDH9rjUG%2FAqdOkYaoZPqv6IHga2NBRZp8Gha%2FVlm%2FiQsnPlSViLiryPdzrD8o7uj%2FSyH2WyOnRSZQmOggYF63q6ty%2Bl3UHRw8N2SR6bDd3vFZ3j55D%2F2h9wJ689asCD2uhN4ew6r9j7Ictr%2B%2BibG%2Bphk81mcwd8EYJIy4pbci6SVWbMSXzqjRXCdY8gHuLcZx3SZIZaTjT4MX1P6lLDAHBM7RFPgcMwKJHNnFukiEz4lDO79zzMYCo0RVHihI9BpGjtCwaUjttgHcknsGiJ0wcztPUh7k3bdRFTO%2F349keCjhJsFBOVz833o7gK%2Bdy3b%2Fv60pNVIhsiWAD64TvuoKh602rPuAXgnCJ%2FPf9qKvN8lc6Xi6XSNm6brwaiVysbTD%2BhY7DBjqkAQPbp%2Bz%2Bp09wV7Q5s%2BCJFmyMyR0l%2Bf2OZC32fqQkqIzHS5B%2FVvyweUl%2BhVPIRcRPE%2FaAqiflCTUxyLQiSuO9K29MaYRbaZ%2BvNC45ZQjPq1izqPCLWTk4rBHyN71SIsxJNZSd8OgSb6om%2B1BsJvC0GvibbxCWQ0J8AxxC%2B7d6P3Y3jg3fcwTCPtcB5pZSHMykPd41SNyyBnCWyGSO1%2BT47dlLXx81&X-Amz-Signature=c2477ec163c6eb5257bc3a57441cd9b33d9ed1e74009910489fb548fa8b6e6cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
