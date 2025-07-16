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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVC5YVPD%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T181300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCPWO9LwLMauzGs4bfp2uANVIysoFjLKLJ8oFHETSNorAIgYvIWLIxACeaa72yZplHDNQykG2JwW5ad8kFpALOE4pIq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDDfBuMco8CbFT34fDCrcA7URV0KMKIbv3MFJ5066xtCfG1peWl89npeM4XlWtnyXMHu35zIGTpp3wrnDwlBPgWlFUI%2F9DxYz1QvDo5ocuoxRnAqfxQO6P9rRmSAdEIGgje%2BMa9ST6o9S6E2kCaqmxX%2FoWQHmGywA%2BOsQ1FaflBwn%2B8t1OpcOU3dgv4DM1bpR8BZ%2BJQc5I00fkt%2FE%2BT5Tg25yRX319LhNZTuUqcyHF5R5dUfotmsO1Vqc8zGZCvtw4F%2F5qwLo51NN4RfYqw1DiuF538xf8DQstAocNLmcgnMisxgLfMajjU7rfDLSCWSraD57Z6QqL%2FhBvQc80FuyGx1xyMChfFayPoA1sCdqekmd154g%2Bf8m8AfY%2BzrDsDDbBp5nznlxH4y%2BGldTBjA5I5aRrlVm%2BMLX8RgAPwhhYMjSZl08KTbaFg%2FWknhA5tBIm7bWoQHUAwPqz5ustclBLnDnFmzuSkd54zEeReaB28EC%2Fyx2ovq2PZi9W%2BAQg5OLmqYGy4WTN9P9VktQKXObmXF2%2BxgIIC3GEAjCtNHdo5hf65Dd424A%2BlBb%2Bv7P9rWNnc6ZOvQC80GkfDBGE%2BvLmuZEU%2BsqAn6f4W6NXMHMhw6mwvNDsc%2BeTobyfJb7%2BlnKKhSu%2FwNSNBdTJok%2BMPKz38MGOqUBFmckAkVnTvepEg9DQT1iEX8N9HN%2F8fXuKZzk6YVzGVog1WKhSkrzILgcE%2FoeDvJurZh905bJXzrQOrq1TE2pjoHbtjgKSANgjdktCqqCFz2sjTrsyeI6Pwx%2BBZxJ3%2BgxbEGSreBLlgj%2BOr0aBspdOV4%2BATRYSoo%2Bfs65JeKJ3gytk6Awb%2FgaTeNjJNVExpgBNojb1RNtUYV79CvHadYWbm3e%2FQ%2BI&X-Amz-Signature=d9362316b963a53bf6057609a8754d27e7c21ca9ca9d5c1bb0fddf894cd82501&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W237TAWZ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T181300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCbIG1KH7kl7Vwrqj28mM%2Bqomh6bU0qP5Ctwcu0b9wXaAIhALWw19%2FSKl7ZU4NEPFnJmBe5obAgxzY0OMIEI3m5iib%2BKv8DCGIQABoMNjM3NDIzMTgzODA1Igwr8R0c%2B5IgVVrBvSwq3APfLSsd3gpzHv13i%2FBuvCkrIDOoWMn%2BgJT8TXrjHRpEBbWm%2FdTE49zeVq%2Bkc7E07X9AVAWcsW9kDhAZPltMIgApmwZeQ6u8x%2B10v5huVE7uywNGSoH4mMZ4N0P6uVOH7UUno2k6yPBf0abbPIem3OH3afQ6KqjkkM%2F4K6hbxqiUoSTTLKZRBjeAfaUUEWLdNIQDh5t2N0gtPGzkYEBFshlCRA8A1sqqLBRx7XQaIS7xcZeKT2zW6J2%2BB3AMeqUT7zycPZhqtE87RzTg6eU7uWI2SHRB%2FdAfFDvZ21KBZ1sJnTFF42thp7JZxq1UFjcpUMFpB0DTsqjLDiCw%2F%2BFu4wFeJ%2Bs2keg4xHIUEI4xJpTtGWt9uENe67SsN60JWQQCurxYqpa91ShnsiS92VtG6kVLTHTU8L4wm0jrPVgSMJA3LB%2FceRZavTo%2BrT1fx0i2jJc5Ld77S3rdCImQo18Mrq2v43CdulRN7o%2FRkDkptNKkhhfPKwBjE8g6MwBA59EeHdOrSGf6r9mbbHkXklVUiNalPgFMngHUkKxylKCA2Q3lyIGmDJWXui2wvVYq%2Bmgq1jH0mA5zHIlwbt9l2453IIbm5KdW0ZpSg%2F9ekt5q4TxU6ragmI%2BFRo21CE2tJDD%2Bs9%2FDBjqkAWnescahlmUzQS8EV8nVSM1KzGUZsEpJVWrHen%2FXUQodG9ao9ZB6s6POaYX1DlGJSlFO%2FlPmsZ9e2dSmxLbdDzAvnZfhqVfL68pqF3kU3o205YcRyWrrzFryLZZSh29fEafF68d9F9BD5L04ra9HDIwnt9j2x3oxngc2eWe91e7RxJARgxaXr9eQbBje0vh%2BQb6%2FAoI0lMNgQrTePJHxE4in7E8%2B&X-Amz-Signature=fa687672f1bed13b24865582b0d3b89c4e9233af63724e034df5f21ddb830e57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
