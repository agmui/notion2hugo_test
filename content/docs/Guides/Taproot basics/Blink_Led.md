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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3OAMDZ4%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIC6cffrOq1NWrFt1jSxCTWyfoZ2jLvwF1WN3dZ1r6jSuAiEAjo5qsBqXMMF9ySzGQDzLucA0mMyqN066wI%2FCTGPDBzQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDF6xD6VaULmxfeCMfircA55zG3s5m6faf8FHecNzlWbMFIN2xelngNwv5utqijgJLZ1FAmKlpBSHGLplI7ehQM6cbbKLEQ5GtxJGu6SuJGiDhjJpwc7tCykTpaqu3rGJmHUmHCxRovQRzf6UeOvmiXNzeT2iSFCtYk7ugj%2BVhAuA13I%2Bn5zZmjjMaeuusKV2wDRwP8FPZixL%2FyWMFfJ1OLm7mSxh%2Bo49eHKNRHk%2B7089mUYDjy79Gbi4t%2BDFNVUTA0UK4rQg03iAthSBr5FQdqjPnUP6Um6PxPZHTVCbH458lxkRlcLtN9w5AqZPSiHTo1MRGW6ewT19tW%2FXDw8esB93I4FKmYWfh5%2FAjrlsmaA06dfLc61QBshx4lyj%2BloCuJQID4wjrYi0v%2BuTtgyFrQSlYHeDL7SRhSKfE9pMQEKkhD6jMI%2B3TFLO%2BQZW7Lji540QhZ1sKfvQx94f%2FvDSARORTls1DTl5MDT%2B0bjPxgZdX0a1M%2BYjad9klzP1JxL5JNKU7cWDIlqdAJBddMdBBC0TcJRw8MMeOPgPYFOZAT3g%2FSWdMZM2sDJlhiMqGIv9ZnTVycYJM%2FE3yGMaOhN5gmZxuiYm5neWk36NM8MnRJeTJffyDVcLz%2BhAD7R80nk9nd1%2FBFKBNM9NtiwhMO%2B6lsQGOqUByGgmWjsgQtGbWJ8pSP0%2BJPA8IMJoeDiCke%2BKHArkXgoQ22Nx7IrPQmuA%2BdP1kXGH24X30lmOaF58%2F11bXMT2obZvDZxW%2FUva1XYRFJY7vwppHDWtacfVFEX6ZppcB7RRIxgLqID8GbeznN2jWA8sI36wCnUtE%2Buc3sfK0BP4mNUmUXK0O2xxSMW8rCKgxGfGdrdGJjng8KvHlKbS%2Ff5%2BXMXtcyMn&X-Amz-Signature=ba54c4cb49fe7d56e279f1c9ed2545b16f48ac13abad9f441232eadeccbde0d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UDSUSLA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDYWovuVgXHtXU1QGZY4ig360MSLo5I1dZHaf9Kf9aPOAIgE5WcepS54M79GZb3WAruCIuloZfF%2FA1Dbg6Tz3jzGscq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDL%2FsQKOa7Mhk8BevXircA1ds800SsvMFcVbuZXADkLjm3Zk45aiHIMQySUmhQIeIvKigReUlDJBxJqDqfYb5Om4TQbToZpFNRA8dhp1XqfMxQOQ7KPuIW2X3vo14F8BJ%2BBE9TZQULBHlkl44K9cOOjU%2Fnm5%2BQFPVRam%2FsxMBdg2t92RJE7l8xEkeNaLX1YAc28vWPsnTBRqOpJmSFUgpzwRyMNlt2EibuESNNxEmR2hLpM2WlMH9BKT8z6f1a5f5uMqb6SMAhgvmO2bfC%2FO0zU7iZWPIXGA8C3M1ug%2FJEjzAt%2F%2BXMjWbEcATPlUOoVTbh8wKm3MKkZOPY6SYIyxiywyy%2BbEFLR%2Bb6AQzhHe42SqyaYyRnHY6wya0%2BBW57UwP%2B264Sj8b3cwUFZlABPlnNx1aOBFooW70YhH5kAANEkok8Qcxg2qxrbWQ%2Bqp9tuM4ong9hndeVQGSV8woX0TF1tXUSVfHAqAY7ZFFO5TGM%2F85d%2B77pcDUSVsA8FLPcmbsfz%2BpZXwnLeEvqNXYaN7uzW7EUsPo2m0%2BDUXhPidSf6jn0qGMBTFcUf4e7c23xdNUDUS4dFBrojhI9vkWMzH6EDOaqwUVTGXX2TJls%2BSSBr%2BhQoG39BQ488yiA6KPlBQCc3iuTFq41IzRN8B7MP26lsQGOqUBpMs0M3iZswN7XLVK%2BVg6ORQ8j7p4W9EzFXCdkipwI%2FJWpyiO836aq3hZRQ7n6gIt0nMPHnZuYtPihFkMQlpRYOb5bk7RpRNYudKRSU7D8AZtRGlCOkdh5EabW7I19GzYDK8HJujbGuiY%2BAYZSJ%2FYx5Qj3LFrETNodE%2BSzJoVIQgCbQ5y5qbjrSABL8%2BV876724RKBYB9soxK6NXprdZc4ADE%2Bm%2FF&X-Amz-Signature=f96e9059a220a5df82d2150bee7c5e7373b2c0900bbcbd043df7e0937911bc02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
