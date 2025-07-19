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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEJGVISL%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T190057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHuP9IxLlbpMsdzzRKQLFmkgLNPZ6cZWPmK3X%2FLobQEMAiB1wNnf8if%2BeZX30R7tz0JLOjA88of3HfqWKxpXB5%2B5biqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq4Xp%2BqfHfr2MqwJVKtwDfkQQxagiDcoSdqpbJBwLB%2Fz%2F%2BdOg76tV1EvBez%2BIE%2B5eoHAr7eN%2BLjGFgQbXfqrpJda0so5RdiIO2cTI%2Fto5bw5%2FXV6v2%2FJlhP8RWFO%2FLfFM0bEUzOJ1A657M93S6D1CCQ7i2N%2ByLiqS6petrbwATuK%2FKCv86jMiamaow6ppO%2FHLvaeLkV9m1TO8Ykv%2BE%2Fzyx5X0haAUQI%2FMdPekY1OTInam3Fav%2FzJ5jPAV%2FpboUD51t8v0Gl4P0dNqXhpgCB3qUHcCC%2BoJkxLf4tKaMWVb4xTqPQ4pN3%2BW0yb3ovsYW9vFbgjK3XwA81FcmE155UoZGtlLhnYCYbo7L3b2Ecrr6UZ7pCYK%2B8uhHL%2FMJufm9HvR6BLx38L1ONsiDbGWesvcV7Zb948e3pmpAY2zYXH4H%2BPPcZvrZ4E%2F3qhEuE7Nj12Ez%2B1v5iDsP7WEdp59uFrjukB9gzkKQoFdmZeLxdFlMN5AbGcATmLKcnWwnfXorptO%2B1qJbCR4BbxkyesI%2BxFXna1%2FmLXgboCVDv1AEAxs69CWMwllZ9ReaBMRiOr57etPpN%2B3fvVHCLu4tiLPC2y1LMxG7HmvrimgBFKZvIn92xO5DNBD%2BCXnJYQV5HxgIDefEB10aY8ytHVXhsww1bjuwwY6pgFFA%2B6apugc1FfZ9Ds6wTsUqmcRUchENInD1NoZECQKrtd%2BeAYVqoPeO5tzHILFkL%2BQW%2BRWmhR6wtsMJlzshkrdJYRV0Lul7neydgNicOXmHNq8b4aUUoCkfR4cD1NaKj1g79VsYhLH9J1KK8xbUm4Eym%2BcODx9HTJN9A6Q%2BCC%2B6QciTf3acfN0jOtDGxoRSk%2BtzmdLDqcKuwl17mQmfIy1K%2B8VXfGN&X-Amz-Signature=4e7a0838d6d53ad867d0299b399a7ad9ea83a6afcadf57316e39f8ce0bc369f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642Y4FOOK%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T190057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1uyxTYyKQFwTdq2Rf06nVWhrCfobauEmP2wuCkUlMuAiB7xWSVJcmWMkN%2FpsQNF%2Fjx%2FZwp91rcxaV2AfTmizg%2FzSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMH3YQ1v8A2Wr8d12KtwDxo8opEj%2BbeszSTcpO%2Fkhc816IVKhTZSFh8KTDd3htb3dKBOiGyZu4vw2hZ0zDFYA08x7w6Qzchu9WL8l8KE9fAbFXtlS9wKkXKMwX0OgUUTs9JBBh%2Be2RPOlLB%2BjbxureIblirl8tGMsebppDidB78mX4XihWKvC2hSpgzp%2BmphOgWgW4iy2JzQzrz7WfUVcX3zTrOv5fCV%2FYqfam4gewShskqAZ3t59CMscXZSLVpejWHB9V4A8IYw2OMg7kt%2BxucWphMegWTAW3XJlk6zmyXJIGka%2BW6uAMCnkc%2FJg9E3eGswUF4DPcF9%2FsY1DBOMKmiFK2gfNEw%2FWBFK4VDljS6gpD%2F3ZIY4WmGitn55vglVyvOIEK14IgGyygDr5aeHosRnNTqQzS2W6SQGcFETYpLuahNkbtJZLK3NUTD0SxC55plBbDeSpZ5j32%2BuA3%2BWT669dTrit1%2B7QQNpZrvItoQL6%2BPfPuFrEUFYUBTSzMKgLmshkAlzK0BUcFsbmHxQla%2FoQEYrcHE09vBrzD%2B0G8vKy3tG48aekXAmrvkEI5Ng%2BoemnRhPa058LKKJmx0BotVaJ1m7HjdHdqcFRJhF0AgP8ve%2B%2FLp8KkrvfCrwC6li2W%2FsfwWylTT1Yh%2FIwhrjuwwY6pgGQ9KCJbODleIcbemN0M1EHRajXH%2FfI01oEGueXTdiEPsw%2Bb1lEdxYlLgVjX5eBxul%2FhmZ7ZhWdpGaybcA7CnMQDT09%2B4Co46kfjptKotj8UbQYZY5XtJ0F6kOb8Ls1p34RnYbGVNnK9Y3EM7gFZwtA5aEzWPGpWZmXG29qHlMw3X7GO%2Fo5ifjstopbsAsI55naGkFOQzg%2B6Js9ccBkde0TW0ew9HL3&X-Amz-Signature=c60f02407b20b9e97e3232188be0947eeaa70fab21ce67d51a65bf4622c9986c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
