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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F5VBHGI%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T110205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCiS805yoqiU1xxBnf%2B%2FSTLg85FM16BN5bDPOvjACXdIQIgKg3HvSCb9VwoiKBPQk6cG4fkm%2BMCSU0Jr88AaY6AE9QqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpOy1ysteRJGT%2BX3ircA6E2A7rCZdhzE5xDcTDkOOkqRA%2F%2FWWvRCTAMrYQJ8%2Fl%2FaBCa5JSRsfL7VEA1FxdXVGraS4ltEbxnCBGHraSULhyIWzBuT7OX88FPBULmTr9%2FAu8uNEJT1boX7ju%2Fy5u%2F5pDhoRDNfrseVq1xTnUp9XcQ7wSXZ5VWnMAQzmdRScmZkoQhgXU%2BHslK8KpROZWt3ap6lqBKI5WKqQfbXv13bxBhtIAYxHYfpg%2BhV4RHS9mbehQzepq03ahOpsyRNFNIsCuOMbC3pV1nszwpoj%2F8ujShb2HdfpbykBBetqwyRPWGykzDlpgODiospeE3TBHIl4zkWDqmOQkxG%2F%2Bm%2FOJ5VWwlmmWrR6Gujwq1zmfdht2rUrfzRHK5WPuaqpaCZkJcbLphbxJWrRQKNH0lL9t6i6U%2BNbN6DmiKi6vr0gl9eLczed1YlvV329uhtwI%2FeLztOUhuI3sBTOOX5t0dYcv8uXp5Rc6AuzWk4%2BNOIzAktPvXT%2FizTsMBAVoLqubbbWvMssr5sWByAI%2B2HoH2pl%2Fc3q6o4TAJ6S5XHqhexhlMKmXkLAT%2FFNZKEMISYs9pNQ4oZt1bVz2TK3QHQ5Wk4PTfyJLXjfmn32MHsLKk%2BhWN0G5pmA9f8TUU%2FmZVfNzyMK65gcEGOqUBIZfawdczkPauvQXY4kezkinOxi%2FRlc2%2B66KoHP0v7RnjhVyyHdtnNNnUDjKqP8PvVB7v0hihZT9cKgGEA9bDIUnXhRULFj45QkMGqJ4d%2FQEGaj2ChqG%2BSZ8YuiS8Oi6%2FlCZdQFouQupnh8Qh4XgRq1aCyRj%2BBimU80U5o6QDkigzS%2B7EWl6y8UDClYRd6UM7U1xS6IP5IdeLIxKi1pOEndSGRXzp&X-Amz-Signature=8d56f674b953de2f21cdab2960323cd45640f2866e6d0cfe355451650f6c4963&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY3OCNRS%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T110206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCpNanaKtv4Dd63%2BVDruEY6P3fHl1kmXQorKmGz59R6UAIhAMxGzh2KKfI25CPZGzu13eqEsT0qxIXIkxXC6g2JSfYlKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHxSRjOry9ZN6dvUIq3AOVyDVziEa5f%2FxslBWF9P0ksacIcerV13bTq9KoTt%2BwS0jv3Eh5l5AsCDjHNzuRbVbeJEHHOd6Aq0qD1KPyxwUi7NkwEhF50hSshcQfMvrZfMMKDbL8RazoVizQTkCan41SGGiJcf4mL65dTq4ahF6kVe9YSAgu7L7JOsU74XrAz%2Fq4FS0NbdZ6VaDtUd3Tb5JZzv5uAZvDDZdaCRsEpOXSqQsDLC7PK%2BfwqBlUS2Gvmhur3yjtAcY%2Fos0wMYj6VOrBXB9b8lcGNGbCiMU7f2DIdXIhwuK8ZqBSOPXRtxDw84TtMkZIqYXs1IoyiB%2ButrRsenPZ2k2jTbQmw%2Ba250BlDPaozw1s8hrVF9dKjrbxwc8LUypN2kY5Y7vVc0dOT%2BO5dYST0At6dCNc9twe5tsHd1x8mN0WjTs2rp%2Fm9CB4gMXySGFK2Q2I3bu045wdYD0IZFoaNWmBF6JUhq2y6I2K61VOzGEp7P67j7sn2FMKzF2Yx%2FAxcNi3x8bHRWtAjdwupdlzW3%2B%2Bnz%2B9QbUQ3TqSOm7fmsxe3X6dFrlCvAU5zW66mggSUnl73sWgyuLK%2BiUAzl0l%2BkN4L10kO8s5bSz4kMYVo0Jzi4bbJzJH6ZtMockCGohcZeLfJZPsZzD7%2B4HBBjqkAZEDGAUcVfNXs2Thf8fGSFydKoc%2BPNIR%2FY5ezPaEd4S3E8VzOhMgytPFJxlOJnJVFFoYxwcxgBvA7koxLNRsxvAn8eCMV0Sz0qSQUlj9wQoNvHd0qhBQyQBc93Gy%2FVoIGqh70gFqDmwhozwiqXHhEMWlZaQSU5cY3Xrvaz%2FVkEQkL85TxYRIANA2A7Pgdx%2BtaBbCvNI2%2F5ikw6zcZjdVzyimWAla&X-Amz-Signature=00e4f789bcc12dbbfa5cacabb979955b71adb99dadff089c99922ee89d8c663e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
