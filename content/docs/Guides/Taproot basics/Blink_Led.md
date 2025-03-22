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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXPLCGE3%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T190055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCs5iji%2BcUzsCULy70QWrILfhwPbJWwIc1lf7KFSmbSBQIhAJycHsmS4G387l1t7tCIHFLMWFetChc2mqhlSsIIe6eYKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD8eSq2k4HBU15Ugcq3AORQF2u1uPPmXVUZuHEENlYB0qlkCjf60lgylSE1bzxroYNgCUGv%2BBPpSTw%2FaUg1%2BEK4XGOJ9ApwR1xUIXJ%2BSp7xra49xDKc5YJIRn355bmvyeZs9nQ9H46txgzFZT5IzHbhGA0GQJQ1SGGjZGvvqR8maT3ztghhX4UCWUQVNP%2FtKpvyu9SShcgg9MxArumvI9%2FN2%2FrUc%2F0z4uXVH5EEgLHabUwkkbpWOt62jdhHbbMwEz8HRk4f2s0AqtB%2FyiAET%2Fc5gkuzXZIk84HE%2FeBTKTTrZ7cqYLrV3v%2F9RMqM6mAFgUciZ9xIkNADIjBA0vzBqS7P1rxv1v%2F7qEwAytjbiH8o%2BLKOBn6YnowOUiCMQHgIlHq6l5vVZ7EESdWJKRu2MeQKZR0o19YInSUop7RDU7Kr2We4WWokKi5piJPuGEe%2BpKNWRo4jTjZV09hrc3VKDSH5aRRxbDYZfvSa%2BbQ%2Bm6O80XrgFoqZUv6x9RChNAJdoitaxrTfZHTwWqKyyoDUV4Un8TLanjrL5%2FS2EL8rGvCb%2FkTSyADdCTiPEPA0Qa8aBQDjAVdAzazU78qkeHNseHybvw%2FJ%2BGMJ%2B8fD9fyDxAF3SyMYaVsP3chXqOksNYW%2FFoPMF%2FjYxyu2bOu2jCP7%2Fu%2BBjqkAaAbT0kfTK%2F4GK%2FISuk%2BPY%2Faln3Er5s0mmHL0FZuPFl4SC4V7%2BN5O5tFMd%2FneI2%2FY0uOi%2FmHEPvmpGKOikzv17e%2FtN%2BUHminiz79mg24JPeNNcVO38jpsQv1ur2uWdnO0dJbp8A0zIcJLuxOLMXxLhH5RQzsr7FO2AflzZGfygz4wfRENyJ98m0Ojf3vISa663S%2FTCezShcMY4xQJ5Rift2B%2FeYN&X-Amz-Signature=4318c41e2c0d6b07c73027618916bb061d6d6071df2fc717182943e2ab57a86c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SAVNR3B%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T190056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIHuVnJi4SZrUw6GleAmfKnSuc3ezhkZjljkB5sBLt2bYAiEAnJfHmaJ2P3Vmh8yBEmQzELPCUJooLJ3I6tbAyKMTfYwqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKA1X8JMB5ySwTkdCrcA1koZVAqXw9DYTK7vrzQiKkJ26KQuz%2BOcm4%2BH7IZX1j7JXJg8GMmyoPu6MkH2q%2F9qjyV9lsVCTGjT%2B0gh61Dpj%2BDMcpaibslcHoVnbCKjcaSSbDIJ3AYtwyJpXW0mTtWlXbKZ5wD7p8ehDtlGOo5dBgr4cfnY9neUCHhhGrhzbfjUYfoTeUu726rsdRaEYfYBKJcVd347nuild970SXHACtw3Wjc4QlhTjH3ijcHk4gLBLSXan2r3zqHSN%2B0H6r%2Bu1x0ac%2Bu3FGCnOroajuSmRhohoFtPnIBRCsPmKBIDESLjkMXeYsvhwhBllvvafrQCfxMIhZlsJ0uiJ7xPKF5V5A7qyxonLhwN008mfG0JxKqiS4OyLUS8Aggoz5SVvMA5XX48nqjITGVhMZ6stxE3p%2FBjL5T%2FPu7H%2FCt28ooQWa%2BdHucBdgrxjE5WftAhaD%2BUffDgluc9in74OT13H7FXNu81lhN0Ycz33l62rIzmuS1FKDtgMNSn5Kmy%2FkicaTOuGGmXVNFAo370N5rpf8UvwGcHVXlNTTis%2FQ5DBtO1J8XRz2Iyk0XydGvmPWFTWs7yNOOiMImKJANkou5oOooT%2FfzmON1%2FY%2B3vLtRzE3qYS3V7u7Es8qZL2fqUGDlMKvv%2B74GOqUBopJM0DItIkPBVuCwpTlyGTW8eutzc0%2F3XQWWYxDh9Qy2%2F47RoGgP%2FvVSNgtUpazCyJrtcvbpr1UqiyFJUe1G%2BaENMM%2Bcyg2JBRMcHw6clGF8qITtIuuZzDarRLe2mmQdLrHtXQa1fS3ZoSRy0ilsMg2XlpHwHm4jNn2PPeo0OC%2B9ckOlYJZx0c1X1VPDuTB3jaKFNf6D6Gsyx3BAj2k7EVpPiPH8&X-Amz-Signature=b732a48e2852128996d1336f1e65cb895714da2ff6fdf567871129a34a4b4816&X-Amz-SignedHeaders=host&x-id=GetObject)

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
