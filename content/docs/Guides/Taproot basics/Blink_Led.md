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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMFLAJST%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T170333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIChGYTJor06LozyyK738Oq8S%2FRUZplPRwW%2Bi3RsWpf5%2BAiEAkO1eH8O4nEAWsEKTJsI1qVPhcR06giD9Cz7Hfz6hPxwqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8UKIjtcg1wWkQ3pyrcA9oS0W%2BlLT%2FdHXvE4s%2BdRdCn2mydqwfjIg8vTTbSoqM9LEic1TY1gCiu55NalNBJR09rvbP1YrNkAyi4%2BeIeiVU4kGQ1MwlCHCsZ0lwE3aC5%2FO4mZJuFdrW7MY9wfwi%2FTjtW8ADiLMnuLM4haLlPsH705kl2kgQIWBYGvgSoCuDkesu0W0KHXNYL9zD7OioWP7nOJdXrb3SyRZOm85m7fjuAKwsTrKpl%2BTvrBA8B1n5iEOz1wzUOS1500fv58PO3j69Azr6J2OckLgLlyd%2FEO9jMeql2I%2BE3%2Fz%2FcVI4O0l6zje7OjUZGa4vs3zn57od9lAwkegvHG7Xr0svasQW%2FlI%2Fwo%2Ftob6xVV%2Ft%2F96FD3p4%2FxvPVYvRyuHSrH%2BkBuiAwnDhvtY5eedH%2Fuy0YrC%2BH1JKI16voBvaHNzjYm4vmWZzv4h0mnsJwTi6vFKHm3Lg%2FccIqfvNgiGLIaPcYTTHF%2Fit5p9MgSaleNIZNDKr3tfzbwtgTm0gst0jxdqdPYQ5j60LWWq8sjHn19tIdDEUC%2BGSrNVhkmK6qFtpfKAO6Tqo7StjU34doq0QNUsGLbECEbV5Cfm4clfoQJlS24wPPSyWm3xzN2V8GvFL0XSRvQA8XqzxXtEiEYZM9NC%2FyMMSJ2cAGOqUBVbiBcb2utlFMEDL4FlhaKjbSvRoI2%2FhKIzPuv9xjz1T5IXsOBq7FlOq0LHPYRieqshDGdJgZhdzNHBLPElkNhN1Gkhmjo3M0F4RpFOogstj1BGhVr71071h97H2Xz4wmidbGVZEYLAtbel8qf2fFUxJ8Urn8xYXGj%2FV%2FILaHqi45%2Bf%2BLXnsEUDMiMmU7sathdALvkSx%2FQlt4OIHsv%2FWOzpr6Itsb&X-Amz-Signature=9438319b1428eaa597aca731548f50a46a98c948d01a466b07e9e0b438264c21&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW4GMIAC%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T170333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIDmwneCklzUqwgH3A2pj1p25iV%2F7hJY7UJPJA1%2FgYAICAiAMd7zO4pwWZ43C%2FCHaClayP41kneKWlTuG9WprbNxNtCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiBCumNWU8YKfP82sKtwDSdY6lEsNWeB9q22pbATQbfyKNV%2F4jKG0ZOp66DCMPev%2BY47Itq5R1E5XzBkFh52IJYUquqEglRwa5g%2FDR5RcY76qhwalN4B3kr7LlTkjd%2F5UjZJ4dG%2FRdACsLpi%2FUmAYFH6x7ZZ4zZcqY1ttULNFoxCrCggvAhvmRB%2FaPXOIPanwjUprNc4EC6vhPQ5zHZnJ5kHrcXOpaim04A9pm95Q8Glu8GxGmIzUjeL7R%2FJOd126H%2F5XE2ET3z4kNqXWXjgDoA5uzx%2FWhKLD%2FvfZRNgk8lhOiLiSy79O5OizMgqXMIMHJm53qGFJWQpdQA6iYxCPNecQCUQDmsRElQEkHFJrnjX07rGAAYUkD4HmCSnvAUt9ZsagZc2RGu0eSfABWjauIisDAfktgDzX%2BKMTe1lss9rWn1MvEPx0PIkmssv73pwBFI3BvfISyPDnh1J3%2FA2uUyXRfxRUXueAYs8cz%2FAoneKabNNaVslBUwuFtIjnZu6%2Fj1PtyEr%2Fb7Rrrl5GF%2FdqBQ3Bdnr2Jb1FAuk6pFTAP0gsVUY9tTIMYL%2BepAzL0YslYbk4T92kf4fiVzOE3s8d4d3eDo0x2chUYT0QMmnnE3d35KNBLugQo15owngFybZqMEIPKT%2Fizl05oCcwmbHYwAY6pgEBKbEWJEmMSt%2FqoPVlo674mE0bSlzV%2FA6pR9UPf1wTtmvOfK3RBhVk1HcMtpZpJ5cAd%2BrRbhF3aC2XF5dEEwkGoPfgUFo9WxsFTAV4jtn5olomEEU3K6leZe8AKvhka0ZVHF0UHSD9xWnm3oM98f9w7mmDNt6A%2FbgtL1CKtKcOYdEt%2FKz6%2BCI2hWch%2BA7s0hBO6kCc3nrcn4vzd5SoZOodw7K6MhgG&X-Amz-Signature=494223c2b1d3f8deba376dd2ad77ba8caf375bceca726890270f60c735f001e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
