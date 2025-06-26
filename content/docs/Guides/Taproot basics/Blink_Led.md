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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z42JTSAX%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T061322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDkLiiBe26Fh3JJQi0gV7hYliVHEHNi3SdZr1nC6SM6VgIgc3aLR3UKlMSMjRqrIvYRvgdTt3z0Y%2Fdn8Q3LCoMsvowq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDGmMRDplXetaPzXaASrcA%2BzEIHhAMw8uWARCGnXft7dC4pm0peto9JTb5phDG28UWH4jgjWqh27dOUZ7XnaCZTaHcJIsKzBALB7EpbfCPEDP4Dy2iGYhS7dZ8nj1wneq5OTIkQSGG2bFWv3Di2AsEaM34VYiMr%2BUoVQPKtzeNJmJ%2Fy76aDt3v%2FIaSt4t%2F71hXViJ8eRLHfc2uPojN9oJNdoILEVYpsmvmw47vneWgQiOiyte08vG9M2mJcZS4xpyClJDgnzWa3xaRgZORrjYWm7qknTEyEfTRqmOUl832LTJ3UuLP%2FAFXPSf9WO9vfqUSD5CTUut8SJ7TPrfs5b5va8u4q94qssLtP97tKaT6n%2BirAorX777KePdoWWoPVK%2Bf%2FFL742u00xaDCN8kkyyzHb%2F%2FwCGjjRr5WQpaitV5Wsap087FLYLkEOqra5bqc6AH0UuOFhlhi7bc0GzrTZzWcKvOlAjayDngPx5Sw%2F5bE%2FWgl57yUiawB6lVza6V0Fwq4Nf%2B%2BNhD178gU9nWHq9H6wngNqkWQJMnKXVOHL4cclzwz4m7IbeAu9c4m%2Bz92XJKw%2F1HL31xKzMWpOS7%2BMmuYMYcPmN5DVMKTn%2B4b6yNJj4UEfz%2BLyAmo07OL6DGSr3ZNHS6zCYIgMvV13GMLyz88IGOqUBWoGvhPEInnpioAUvRiN3VRRhy93oZpFlMTvmNe%2Bhiub9hT7jTz92%2BjebqWMbEUUoMjwJv%2Fjv34Ags5ZdjNJ%2BnIIEgJr%2F1g%2F0QaSTR9svSeG86iZ%2FwTTl0Kl7S7Pq4%2FuimxUQJNTEP1PlFAQfx3X9AoC03w2GClq3rGc021FZeNwcL7ER30%2BmaV4QGKEhWVPofFQY3tT8Gf2VFFgiNh9XhBDmHGl6&X-Amz-Signature=8c95b50fbad85e26e81747741f8cc0686b8501123d85a739c8d77559ba2d7b4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CO4QVQF%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T061323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCICQ0fDhB%2Fd3aO5KKLzKcZg5MQMvtE0lFC6SpUNRLBDFMAiEAjrkxMRKa9Lo%2BKIZa95zexhDJIUEmr9KWxP5FVfSFvHQq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBS2nY2f8vQmRDis9yrcA54lFjGQKzBMiWwkJ3bDQxarWz0PVjF%2F42B9%2Bmo43XT0%2FK%2FTYoiSnlEdy8%2FdpnghRTWXUg4c9rUQxuEDO0KcOVCD28TXiVb6x7kvUJlfwz%2BKBT7nEQy9DVbYUc2nb1q0NRHYrgdkYX57qHMb8t1KIp5V0FHA44QW4Z6jGqEs0HfwR164woFW1je9O9ysXXuGYS3O%2Fwq5PjDiT3%2FpHLv7gt3sg4e%2BrTuUqW1%2BFrlwKYWhQImLmLYaMc1b6xq5O2X%2B8vzRM3vAYG8M2ClAXCOjWlhNHTmttgbYQo%2FZ%2BUGggTumWVswdgl6N9fJITrseBwRy5UeIQVIjMYSnq%2BdveLttu8gOkwptDE6LK2SPItdtlOwxfrdIPimK52HMOmOyEG8VfxqfZcZC1WJ1VDu8QjJzj%2BmeIQoKGCALO3tiS01RKY2EcNLjDLM5%2FgX5Zvopmr80noXH5d%2Fo57moU2ERQwXD8eDo%2B36o9mWAHGF1Jt1t%2FBM%2BktVGWmVcLvVQHQT8SDHZLZ08aU%2BJ5%2FMM1nhW94lONLxYLQJUOA%2FHUAL65hHfqP6%2BpVi%2F%2F6sN2K07G%2Fcd%2B%2FPVBm9wA6V1cRxE%2BTlZ1YYQz2delX%2BcfnOpiudbTdL1O%2FIWY9OPRDD1wPJMGxzMNmy88IGOqUBwVqpGSZj4OSJ1SbIs%2F1LKRx1lvFdLnz4bN392kNxpI4ek9nr%2FMCSsc3IQ7OsnfbvNkY9n35KFWPOmX70d8TGkSKziO1PbSLPTUJyV38DlcGL%2FE6bQlCpbAXv%2F6MAr7Ippk2GfL9C7DDSDvnwTKpys4SbLvZocJpihfutdMoZw4ADwfQwEfQT4ECj%2BNeMoNhMuK7OHq%2Brk%2FUjQkQgwkSnEb3D83Kn&X-Amz-Signature=842b849ed32f204797a4b1b6b7d88979fa2e602343cbc3725f2b915b3dddff32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
