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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYSHTYVC%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T081140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIAkDMXH9VTHls8e3RP7k9W1xfgi%2FmNTg7Bb0Bi8GtoMJAiEAtB%2Fx%2BLfBU28K6hS9pCvPTlr8sgV%2Fhm51Go2DtFjmpJMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNhVidgCBGvpKF%2BBAyrcA%2FrCB7UiABpQZpzIhHVFzQDxRXdcmw6E86vun%2BZZabcR7Q5jHuKkyliXQ4j6u4fINYvWveD3OJ3aTIZcODvQdRMmwSW0qN7XQhF63NJ7agQT6JOuuotA5HAujhBNDz5zvuHezDxd7I8A4WmVb0ht%2BYZG1Y4Pvv9MovG3rDvvz2XqSPqtt7G7gIW29I3hV3%2Fp2hpTIXkj%2FtHVLZf959hoNqA06C7KaTzRRkFOOgf9oVqEA73mntU8fQdKIciYrBb9HFTcJSvYa9ZweqEoW%2BcURBQ%2FED4VV1rwoh6e7MDVPjJ6JB8MbxLy0JJR2zFitBK%2BYoTHJn7HX9aZxHo8cBiptO9mmLsizc%2BVppC%2BkEwYq5zGcJDIHOEbKI6t1evYj4f8CuF41DU0fuNbVSPX3%2BqUtpzw%2FNOpmqXDkBPRIv1LGlCcPglqciyQr8vOD7VxgETVDb81%2BSBzLFL1WSvoaixQMkIneA9ZwsOI%2B1lu%2FqT%2FSl5ilkM7QIA2zSo4IS5QZrixsYbLI0EmofKxpxWFWuJsnyvOWs4go3HKigud7EN%2B5OlOR6LAlhDdTtddYuANJNLldSx4pCQymvr7XzBucB1iwi86XqtxV%2BXjqh1VMaXbDZfGAQel3nuu8LWElrLCMPbz0cAGOqUBYMj851yovh3%2FFFxjvg4TUFVntPITwToR9C2EO8fULCUFwxPGT4CNHVdQUzl4FbK88S8UoY7wKTrqfFIm69Mr8dt8JXoDteK6SannB%2BZmZAKoW10BZ1t5TI7rdPaSx0GdQVBEjK9y96bQ04OpewEHKBGmMDbk%2FD5JYgX%2FCFbJscrvd%2FKZo4mIoMaLgR20oERBpIflVbRF8UJ4BhjOjt6XTS33EC%2B5&X-Amz-Signature=6bda5f4d252422a6ea9db00e11fec73bd8ad0de38a302678000baa83598fb725&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H7Z6KT2%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T081141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDylKtV8QOLBdhbJRBRTGRPDfglOjwk4Nmq%2FeMrIHoH9AIgJ%2FH0gX8QQlyRqHXRHSKA3AFvpzrzkC%2FF9s3bpljoF3UqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDExTwYAS37x6qweneSrcA6MyNvayIrI17wXk5idYhVZjs2r5RIjnBSf%2FUb6KRG44vcgu4Uu3w%2FiiC34bBFedjZkfps%2F00N8SN9HD9fKUcYXpso8yUdFonAkaqAjILyJxWiVpoDx4c66%2BzJyLVcn7yIzKos%2BK9Xkrad4DKXQmO8rYFyJ32fS7LFIvWWgdIm%2F3HsuCJGn2e7I1nrbGWJUobHf8sNo0pp%2BpY4cbgTeNMV1qqbV7WA7btltts2uuYwp4tdLJ4%2F2y0FHOmGpKUDQe%2FXpdgb1AlUwsnkgm5IuqW2QAK9EWFcalCLQsL689EShhqg%2FPciR%2F49LR%2FtTVSOFCNu6EQ5v4VsD%2B24LGIvOojgMRK5CfrmlUQYmlOWVHrB0Zdad69bOXqeVv5HG2QSLmMz5HTqsljSteycNLLnfahM9WzYb%2F4%2Bg8HlCCBimAe4bstGFGHYJBss7NpVchFy9tmlXMzelbugPQAUVipZVXwx%2BWUaedV7QnNv%2FMHi1zIksvSQKjS%2FOtff1fMuXJtctcrJYybG9r%2BjN9EdYnUOH%2BvFQz9iXDjxCUscwoHj36w9e%2FQD%2Fil5iWe1KmOnly%2F9dr7wYvl3peVIwCA1tjNJ4P7ZWl8084zeWt0ae6ZQR6uV6HB3g11W7NH1%2F%2Bble8MPL00cAGOqUBQs4jjnR%2BXQZ6eQ4VG32%2BkL82CfAsUfdKxvyyd67mQm%2FZ%2FE7Qu57JCD6VUv%2BCwJT45Hn%2FxLbNrwxac9yt4HuaFKoFdf1BleIFZejKlvC9ew2ufE8r4Cog9VRCooZLg%2F699ThSvUZZcamR5xuY%2BMocbh82yIj45PDVz8REmIbbV2NFHBuXhS%2B2%2F37gQFCrkI%2B%2Fk7B4DvXLUM9evUeC1s4pdFaW8qKn&X-Amz-Signature=d30c688f708c046da73117e7e1d5bd6921ad6ed3abe450445af720f3f125d2e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
