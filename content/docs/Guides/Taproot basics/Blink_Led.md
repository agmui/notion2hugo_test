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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KIDNTBF%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIGUnEzwkNqzxk9IIo9nSgbIBu5nV8%2B9w3MloCUhbg2ClAiAp7THz74h07Hcve%2B4m6iZWB6qjMECh0tGB3XcXxCgzuiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN2vedmD9xZhjluX3KtwDMR5l2ltXYS1mcNoy1JnN7E6b5EgwlUFGewYeko%2F%2FqMoiQ1ujdmSHkWQRnpoEhrSR2q9cbGu8rmByyHbgxD9Wpr%2FOqY61r5%2Bynl%2BZLH4%2B5rv8OC7PeTas5XlBvWr6qF811FX6ZbVs56keoXsWN778ANInB81DxIsE30psMNk6TABfHSTYwXHGdrTY2I%2F58ySWRn153pmfik3JJhprmCtIJ%2B4n4UUBbXN0yT0dg%2F2c2x9aqxVTIded4U6rSu3VYHTbGVTFtWFQiI3wjI%2FenMXE2umVThepkdhr5HDVUV0aiXtUGvnLZ%2FjapmaEl1EjevVxxSjCscJgu1XFA%2BPP%2F43B9yPRepo%2Fm%2BOrlPBfE2dWAWT9o826%2BCP4X5a5H8iRPNHSDOJQe%2FS0BA7eggvQMGv6P7cYyrcIl39nMwD4YTMEcFiapUoTkBDw2m4p%2BHuDgOuvN%2FNm9AK7DHLE8SKs5ifisyWNV6Ss%2FvBI4z1nWdgEamiW4fKs3cj1g4DtOfaZn5Q5%2BvX9SUgvzeYY3o8FP9ClcJeoQwbIRMaNwLMfsnY6y7m3mACd1kKLUQV7b1ZGL%2FBeHob7Bw9g08VVYXSh8BLGP6afOdbtjRO9k40xPNup%2FPs6ZGTWmHltWkkqjw0wx%2B2awAY6pgFWzfmrFmyIRC5D5hxqkEL%2BHn4jadMIuUUx5UUaWIA5EJOC9SNgry5v5PDm4l9mzKsG8DeofsYbxukmTXCkhdRFaYBTERKa0WI1kZ9dHvVx3nshLZ3D4xc%2BkdN%2BgKpajzc8bIdCDDHhvqosO8M23epUjvG6I70lbUteRxvjFk7RRE5WK8sgbAm%2FLALTxqOmm3THLppd2vtgyLZ9ifyrI1tz0Z9iz%2F5A&X-Amz-Signature=d9dcd4ec77f102b6b1b5d97dbda33953b3c88a4efcd9587aa9e7dadd5eb64a4c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JDCAZGB%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCvgRkPFSYe%2F4PTnXiM%2FKdksi91A1HUzPmDYFKiyE2uwgIhAKPzHLd0iK3XfF5UpvkjFc9aD0zTviJNMjGtuehmRkt1KogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyXcSW9WI4flM6B7Aq3AOBrHdhGOYEvhjIAR%2Fq0EisvwdzfTsk46gm2Uju6Jyr%2BeaPjds%2F3pBdqij%2BedlKAy2ucJnC4uz%2BKU%2FmtzyQ85U8oJ2tdhKgdguZDHvxGzv2mQXxgHWhHLYIApH5Cgl3LDr1A9M6SFu8UW%2BLX9qa6nF61NleVXFJhIXK%2BsSfGCgKWglpbtc3rXnU1PzrPpO8vs0G5fZoqJIKAKZzFy0D5RWAz9SllF6Ozkd5oDNa5bFSnBc0vgV4oK0dadqI8hYoGuDjhXn867PyLX%2F1z%2FDZt8tXlmtXWpe3Bn%2FDnoTo8VkKCE%2BWRnloR%2FbhTgyEyRguxT2sKjFy6f7K5AWDdBIf6BtrKDGB%2F7dv95iVufWXRotbsoo9BFSWdduYwJU4puW1K9wuOV0RLDXWJxunrH5pN2gLQ8EeLvasQHwtsWFFTmzkLsAJrQkCH%2Fc9sAm5PNVg46OQHkrdSRFQoKSS9pdVX5MEp6FaZrplIUTbq0FT%2FS8fe8UrrggwreaCGfK%2B9gPXpV5BH5CBOj8JQ6lvbrwR0PYgHyL9vcy7bF7ncia1cbWj8IL%2F6GB7EQHJLIi9dAMTFCgJgTCXk7jYilAgEg3uTUwe2akzoSVD%2BIDsI3%2FUuvVALdbc7f9Tk7EvKj3%2FjDDI7ZrABjqkAWtIQq1rWW%2BryeaCUQn1l9Q4o5GHlzGsY%2FfdouzyXQ9Gce9SxBF9OtBPgIZCMNfjkVYsOsmdS%2FN28gzIOFs3j102dtpZDksE8AOjEyBsc2ZGL%2BTn%2BLhUSU4lot8b6NrMIkEboi2ecPfz2WqeD9s7BsGRs8A90BWXL8hbh%2FsAB%2FnR46QDZngFDvcKYZIgYyKW9e85vHUILmKsoHMoAJ1wopAfPLWT&X-Amz-Signature=ffe7c87d7de65ba119380e221db3b02ac430317075428ae65553d5e948d1bb28&X-Amz-SignedHeaders=host&x-id=GetObject)

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
