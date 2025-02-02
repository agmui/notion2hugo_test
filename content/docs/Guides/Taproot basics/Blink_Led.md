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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIIS7Y22%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T003732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6i8UbpJ663NdVsbFNPiKttoPrYK6CWrNGMvH8bYUMmQIgNZk0UwFaxntS3xfT%2FhF1FHajQ8pffeQDa4Ao7w6jhyoqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlGGlpd1P5dIpwNSSrcA4V9CqbK62u7AJ3ObVBNITKuLj8AtrjC7iQ%2BrkEOlFQm%2FmYvV56EPV%2BJfoQmr40MqgZwLFKIgb9j98j4GpYkHwS%2FHmk4LtZZ%2FCNxyh3CreDktPoZ5nz259npsztMmqTzvKk0At91lC%2Bhxy0yd34bw6hHaQdydQOHYtsoT51Wm79lDEAE4w4u4uifnQV1dje1aef0bW2VDZivpu1NolHzcgcvfYSTWhf52NcyBMPG1HcxDWk0FIha7PCamfSR6DZSP7vr%2FXM99lnhEPPZx00riPbXwuK9oL6iJRTvz1LWRJisYQokOo%2BjbVqGgV49nQOU6UlKSP7fdPOiBeQ60Fl%2BoB%2FjL5cpWRmYMUdwvZtt7PFfY7Nx%2BWEm06VpRT9WD02uDWbCfSNm8PWQrLgYhIeKOzHdXrXrkYF4zrLx4kGVvLyLQFIrG6LkSsFVhw023ceVCRypW%2FT96wRD1uPNVAV5arYww3R2h%2FvAsd97fHQxogmlpdPPyZnBf6J%2Fh%2Bujuc1GEa4pOvZo5r88wXBdSpNu6uGoMLTTr%2Br%2BmwkGWBv0BUPT5n7fiA8ngFn%2Fk6wxZVj8uBYYEx4mehPH6AhnCm%2BIxYy163TLwBUWq0KiGPRi%2B4E1MDEaTLx%2FRKe2YQ0GMK3z%2BrwGOqUB1rugbadgbNz69LkicLOzvxtLewsSt6nb%2FhCj0vfCczlBoVhForwIPv0AK403nKpnHN0XRQVvfAZUGBhz4D8evbK8SG8xAD%2Bev9zak%2FsE%2FIByyRrES41Supeb5MdsbDi1YsMebPL2y6WK3ngcoWNiri75%2FNYYpNMDiSTVOiqEeV3Gp21CNyYPdZHTwVnjdT4ftCYgQeic%2BsxIPNRWa1xXMqcpy2ZF&X-Amz-Signature=a035ece3efbf5373de3b7bf9966c94b3d49e68b8595517028cfe80f846997190&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJSDWWLU%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T003732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgc4MVg6tDu1Zgu%2B8DjdoqfIxHmA2FTeLgwjh0flJQFAiBFTgkpO3jtoqoG5tNijLbSsB87O%2F8rP6DlbavduPG%2FOiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0ht6V2nT3PKUcMjTKtwDxGdTI8gO8%2BrvQkXvgJGViGGnVtMUs1vHMP5LN3RkrlG2CulH8F8TLLxm5%2FJrbaUmNz1z7zE%2FPfDgHpHUrCtoCOyD8k6nwq8J1zrGiMvEhetxMfsjzsELL6uXOMGi7eWhk92PtCh1bVNfSpIFyWjj87gxM7txljiBmeDTTWJzGKvAT4mCxgGc4uxJih8jo1tWMNxVbokfYsYL0txfUm3gKDaOMaN5k06FSLXJ5O1FguP%2FWhzH140lGcXQf4Fk5m9SowFPHMzFscsK%2BKKcUqpKgmyNdWArJ5J56qAC7mLPYSsRSaWi0Vl3OeIhyWZMSFyZjTdeEJWjGgwp8ox2LIJ3Jv5e86Fb2qu%2F8TTZm88brr%2BT6c6J2Ry6Tifr41qkb3LZ7CSqPepD8c56XbiX7ectUdcmrNum%2BIZ0FPoxUhbk1ZMxHdDokh%2FjR%2Fh%2FqpBQWy%2B4Mx1ErFM65tpR3pOvkO6ve59dPw%2BRLhfMfkH5tWVV6YF913hc59hfwYLMVYVAXIInmqe0jWPgTIu4Hzq1AQu%2F3kL9UcCRSqRDLKa2jwHOV%2FIM4uktxqyvXq2dajblOEwOfzoxzgz7qrE6ZZrSCsGNGUiYuqFFN1NHdQfyVXFn6uccOi7%2Bd3%2Fv3MoHiIswkPP6vAY6pgEX%2FvdG3VHlQLD1DfMzCK68RVfZHMnfbu0cp97hrsYx%2Bvd7ZtPfZ3eU1JF%2Floj5m%2FBsBVgroeQHGHJs%2FMBdrXHrQdoZwj79oAhTNapJTnNtuuec7P9TDocBRWEV1wlBVsiLmOTz7XtvgzXMtNppMWO7A%2Bwf6tbFGh%2FV7vh2On4p6HfvHBTnUmgquULZsXHttVG0pR%2FaaGS0UokN2m5WoFkoUnTGCCxZ&X-Amz-Signature=bed6d26f3b1dd826d1d37599d5f13e17e8932e047732be1d383662856e95ac52&X-Amz-SignedHeaders=host&x-id=GetObject)

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
