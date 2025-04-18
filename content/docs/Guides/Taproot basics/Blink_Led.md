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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YALE3FA%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T100838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmSDXMQIz33pT1H%2FVkRKgeSUz5fdRqtTdrTReZEgiJ%2FAiEA8iZd%2FzOSJUtpMgFk7Pv1DIbsRyxmBNRLDQYmuRp7EjMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMhGKQfAlS5%2FGdzwWSrcAw0sUitIwdbHZoHBK8E7aV5L9zkdyEHG0rktOQQJxbhLFfhUKs5ZG9wsHMYLBQ2akU2IQoBrhYG%2BolBVLunyvEstILjK3KkT2yH6wq4uyfgM0P1iT6ppRR4krxj7rKB3d%2BUmlFAahGX1Yp0uv5B0fIzzeFOiAlCzy9uXQOGW%2Bg1K7%2FoWUFt%2BEAJ9zUDxTjiOXM2plAHCx9jebtbOXsu608kE9VR2T2VzjLv%2B3V2woYMDNGE0lYPnv865qfmMjgMAomJJPmIsBg0viOmzvP3tEMgvJyPKPvK2mWnHpnZn7qPOGCglu%2Fd0m%2BBRNArx6IHh4qS38yV%2Fonu9FGwiaeTrehl9UGQIvEbhMAUaF94WB62qwdUif3y7Oc%2BpsrTdh2%2FOyDqYtfVxcpHDrDPhLdfz5BiwjsF6jL7st91z84cBEJusekpFhKuWpnC7Slqk2vJ4o9rPfZoUSiBoZnOjwFvlbkuYSYB0HNqKU3SUZ6tWnw32MDoYEDyVO1byb5WAqx%2FsteJdZxLIYm%2FqEZnm6PzOibynijw54NfoJbCylBEqWNO0fXs40tyTSVAEpD5Ux0zmLUgvICkGYccFE3nQzW8Oe%2BC8Ju718%2F1fzfveYo%2F47Kmt59UyxT55KP8lgHjLMJOtiMAGOqUBMPI5WgYpqjuH3WAZPs68e%2B2aFxW3t75bxOUR%2F%2B0LfPphPU%2FydsFPZ3tV%2FLboM1FbeRTstkQm2fJnabAtFUdzFgNhcA67gegHkR2YjZFMAKu2whuDhfWQ18h8VzwTC%2FDjXHEVO3qwNoyD9vrpegY3%2F5xYZYpf2sXo76ZRaptsoSJE163lSmzSQlfhEQ4WZYxg8C8IH%2FyL%2F0A%2FrJYq51x1z%2FCA9gim&X-Amz-Signature=88f6e0a5ddfb1f03413b8993716855292fde88a3ed988dda225d4938eebf9864&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQCAFY5D%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T100838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FQlNcgTCqab6nvk%2B0GGOfXDJAHVWJ1cdHiixEPGtgyQIhAJrxtzVb3J110V6mRCuNqqBMPgdLh%2F70VBFz19Y1urXKKv8DCHIQABoMNjM3NDIzMTgzODA1IgxmySRY15yuvO2EDjMq3ANU1QygsA34qTUSGaW4J0%2BpLi5c5MVxALhW%2BBTeK7Ps8I0ASsy3m2aejv%2BzUHEZgc%2BR7zhBf3uVIt3yd%2FtayEnELZ1Vr%2BeDNRZj%2BoT%2FABn4rO43zbaEFmT78lKuVDWLJc4GtRa6E4P2LHSlqeDzYgZTT02RGL7UPJIt505UlSKB8Sbycim%2BRqhsJv17oiAlyyHYqATNhRhHZWjzBwQDYEubZSrY2DJI%2FodLzxpO2oUykpgRC%2BR6He%2BaCiuwhv0QoDrmgcr0%2B5HN%2BRPYLaS4nFRPt8ZQA7HY0SXlomhO3oKvvN1JmtsWkLgr7nQrfvCARl0wyHrxtCdQk7Kws5eiFwsHfOtpZxHVCOmwHOCAdAoozHs570UHGY%2BgoPAamMYcY6eFKnmgX4BRzufO3Gh9VtFwnBFgIpGP0eIC8btKZdIXiMKg6MC0xuqhwxU%2FZ4o2TtvM04W8TkvvZRY0fZlWTnm78ga5VZOgndcvK9QYUYS5CORi%2BWFA%2BP4DWe28IVneNp5Pgk15%2FF7kBHH2DXwAd9bkxNHKLDzsyT%2B%2Ft%2Fr7HXhC3UDT8zhz1rysDovbxVDlPQsYTLD6PgeDZPza%2FW7fR9DNPbb1fJfKO8JJ7PZw7RVh%2FfL1tPhJUv8TfdIaXDDFrYjABjqkAaDxNz7UpslRrTDWjD4nkw3vOoi9yfYv4dioo9eM18Zbh4Fqo4BZZuyf3j6fQc7mtDYeAp0z8tikQgjLpvZ8IrLGB20vh283EfWD2AuDeOzrJkbDct4w69xkeXDPrC1jYkqaISDOWhuU5eQQM%2FEayIvHq%2FYjoPEwtGMI6iy9VmHaNf%2B7Ud0sSFnf6VRGi9%2FcYpZ2RwXogpOWBEDgGurKHastnnlI&X-Amz-Signature=21e56f91c2282fe766c8cb196078a37c5ea9f7c77f8884b915fa72ece15f2e54&X-Amz-SignedHeaders=host&x-id=GetObject)

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
