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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2GIG662%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T061312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIDKGyN9EDVgb%2BKESyeIlGGorsKL%2F5cIyYGLpGIf8AkJiAiBrdNu5XF90muB9Kbs2Z9gA9yrCwpmwc1y%2BSdcLkZ9J%2Bir%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMLPbW0EouEdc2dyWxKtwDtBEjwLirieyc%2FAPevhC4UUiSKPc93iEz973hKx0Y45yNZty4xZSyR2wjeQOVDdvJt2SXGQXemb0SVqJrs5wY4Q7o9E1VI%2B%2Fu83u49Vz9F7WNgLXU5e6TEokQj2zrDdUjVdKrntVhudcjsFKM9vHrbuK7%2F4epHqpgCOiTlt8jkosodvoV6CHOFWKyX5ywwQjKNhjvPn4hSzScyldDyMtkKXQm5ZUyvrlE6f2kEdE5MSY0%2BTM2O6xF6JQ35PQpAeunsyigmPG%2Fda0xTSz2lFywTDMZwRss53eegBgb1D71l9TQq1UU6yWjvbrQYUr88vDHNYQBztr%2FCJQrr8%2BSwq%2BfJdTm32goj0sIi5jTfYfuPqPcooMnGn%2B5Ar09nSJvkuev2YRgtUKPCtqklGDS82diwEseiIjoiC6UCCMp8vA6JcYhsDlTuneJe77wItAaejKZbDhtUu18RCJ9Q5tMKsEqV3BukOaR%2BfPbWNQweUcoyFCtsfNIyTvafcbxJjclkCeM0ET8xNBwAcW%2BcZ2MLnsERRuNpiUTkjKKIvZSweErASHiAVPbYR4Xx1Z%2FdHCt1Bw4O0zsbqF1JGZxiX3SmuKqwtOj%2BR6z3n27M6SvyGXyrTRN%2BSpdSw9UbNtHXhkwzoj%2FwQY6pgEpS5WktP91jXs6vilFInyQZw2%2F%2FQNwrdBSg%2FgPMzhAT5fFOpgT9hBjxP5fjxpLCOutd5vYLD787afU7ENf3AYXNHt2jfZuigpwePoGc4LSclNRxldpmrrtZhlsEurCe0Soz5z%2BExJ2ezSXuqMRCy7UbPYqSWABmGfJIDgYgPsK1pbxqX22IE7j57Wwavo%2FEM0n2plPZPrhGZ50133IKTJGKXhF9USQ&X-Amz-Signature=4bb3a85bbd0f011c1e6142e30a58b40bb17381f3d8ad3bec91d768d996af5c49&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7B4OR54%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T061314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIE6NuyCG9btNbqX%2Bj1rFoTE9lWkhWlBNGgnFgA%2FoQToXAiAwzmmicpJrU93c5ZB2Pj9m3BV%2BRjbfU%2FKhJo1HGRYVcSr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMyHlzsPJvCNk%2BZiDUKtwDr42oOswpUoVH0P%2F3jfLfRtlE5vdZuV7K8JSC0%2FaZK%2Foyu%2BrIYch9rI73zr%2BdHxw899ixOcDKTU9pxG1a2gEZEKemVmDPJGIHq%2BZkbnk66DSFYwDo92viFtpPJN5169UCK6KN7H2QMH7PAAEFJnX9Ud6JTdrp8OjHCBCfabl2pvXCl%2BdTOnsDlsc1xcw%2Bi4lG%2FXn6lKdiZqBWogjHWgW4YZwstn3D2Aj8n%2FN1jL0TxGx8l7aTRRsXeVlD9kumGrWyk8JC1XeE%2FeIWNzlNIi4qsX9jH0FtF0HYmlDF9m8ION5%2Fgw6CK3PSbPAitpEw2lstsGiRQRgGizUdLV1wlLGdn7y6e%2BY7O9swJFfX2QG2ICnGN4a0ig5CMTMNthzu1LWpgOR5L9o5Ub%2BtprhL2xqrRuoMZLZHISE3C96DhvOz6vxf2sFMQLwhDgqf6XfDVCnLsScZ%2Bb%2B9Zyxg7rXaalfSwSO0v5lp%2FZvUUb8kp8l3Tq3r8APO3sUrfeAVjdn52zS1J%2FcxxdfrGXQcOlRVVI2Cumv1f6UnFMEkdLJ3GIwAm%2FjqQugqDD2RGF%2BO1eaQiOr4sBUhtXzMY8paTz06SRsr3chMqbIq0pCTVQfr1Byokp%2Fu4CfvfKp4d8mgo94wgon%2FwQY6pgFw%2FLx%2BUXIf9mVOjvhE%2B0p4VdtoAqDoW47ALDPx1%2Fkh%2FoYElXdLnl06%2BopsWUUqXpIlmQc2D6SZbYWtJ0p6JFX3HzPGd4skcvSVf4myw7eohldUdTMRkUKG7he5E57qHi1co6VYKr%2FZxsNsjXZhAqyqBEE35GnAl3w%2Bav5JQvk7o%2FVkel05bSmDDQDrJ8tl2iGceXOUkeghS4s3uRlM77DRUCQsLnG7&X-Amz-Signature=3645d6eb90f3aaf06c077c1ba0839a1eb3aa57cb81dc3301c576eaf002ba43dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
