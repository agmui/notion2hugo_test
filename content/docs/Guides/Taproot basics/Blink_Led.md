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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXNCUP3D%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T190258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIG8UNe300%2BX8lmWQcUJLojxMcODGc2Y0VoDRyWGsCSQAAiBi1XGgmBFN%2BD9ny5IkKXzG%2Bsdp3Rt81gLgejmAh%2F%2BDlir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMoz%2FVhN7SwZxfkgtUKtwDCy%2B0xYhtBN4Xyc6X4UTnWA%2Bu%2FLCZObqIN7BfZNzhqNCE1bmrJQxeu9LN9EW6FDpJEPv3R9Dp%2F61WTv3XHsyc%2F1B8%2BvvJ8TM%2BLcHfbmlu%2Fy4smb5tcwwAUDeMm7ccRTVQAqW6kwMTmB%2FCMOZjKdt7otepjp1zl9NEKLAr%2BUa9SkR9Ejnjks%2Flv8k6LCUCTnGQcUTrNX3aU5E%2FD43PqFcVPbTjTiM4Oci3bmIlWLjK283BWpooFeL0M3iWm5a0nD6%2F%2FeQ77atq7bvW355eKQ%2Bz%2BVIgymwyx0TXAB8gKL4EDKmQTqPTyUcNuIIIRkd3hwWlJ5f%2FlukJ6wOxCW%2BJK0dKL8OfuOWojkrCyrjNw4qJxfGnEI1Irh%2Fwh8MXakerSFveg4afPaO4oFCdKc5YBa%2Bd5K9D87QoHQIretsY7WNyUIaJ3glAwtNX0tdCMasjRXUlzc5hKVuVbyxL4UIpT91hjfpH5Cn2%2BPjr5aMsVSMP93dRCdZAnSoNQrh1gDvPNNX3s6xDCHHXXdD%2FRr8gOsXDm8xNM5gR%2BKcdO%2FXvAnXBVUmqY8SFaa6IlbnV5kzKubcxRkpbSAbegLknMir4Q6NR4bmo9G1h9XUpsMVq%2Fykej2yuYxjY9K0Lkh5w%2FfAwrKe8wgY6pgFiTJvH9361MIDNCQeQpvV%2BrSeOz1Jka%2BGOB8UpRcQS%2BSLl97G9Yyt7qTYJ1NyXHAubFi7%2Br6ObtM3x2L17BKlKNlwGK3KNQeLBtBAZg98kz7KL4Iq5Pd7QG9pY6KpGftVsEjtc7sn%2BVr2jQr4HALX%2Bk7qf7H0ZpnehaDH03%2F%2FG4t%2Fkrj0oGnsD3DUs9wbT%2FKqRXuVXwlBBWhDJ0Df%2BJHNlJpcD4uq9&X-Amz-Signature=838f8ff76c65606b8861286226562915a414403fb398b3ce8551c5dc4d075e4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO3CESZU%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T190258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCceWpDiEKGkk8Nzl4HgysbIyGQKY%2B64vFbmhCBPEqoWAIhAIU598cDURVo82tiDx%2Bs6%2F98uYCWdh4qyI0olh85DNFcKv8DCEwQABoMNjM3NDIzMTgzODA1Igx4zWnKyEp9q%2B1tlwAq3APvHvu8XiPMAH%2Fki95xDvfSzKi%2FSHBI3amcjsRmlN2Dn6%2BX3VzNDsRpDZ0ifrdTZMqf38XhJ3rCFHommrW1RhnFTSZgq%2FgUFkLXv5SgXuIFeODJZpWH%2F%2Fr4Bi0BOrZiSzs3KUICH3pP2yIu5U%2BkRXC5J7J8fGWu8cdYLoHzL2TLCu6N9JT7zWyDMaa%2FaNfZ53%2BT6h5AZxzlJ0q9%2B2PntdHazMBUafdJLf3kntmKgy6mVuh2gT3fFgJRWNMmw2t0jeW8V6AmR10hYcRytcjvqWuI9L8AW03pdS5NhpxqqSNt9KHHfOtpVse1ZZqvp6NBISW6Lc8y0sCtChgbF00F6RnL40zyJVj7af87W3oK663SDnDvGKWqcWq8qHKrKHto1APEDDX6QDv%2FgkC2al7vJJIpQXoooETkzJa8JXEPzJ6bBwpO53P73Yye8JS9I2aaWBv9XGGR5oCHysRZzK8J%2BPJcpsn%2BcbPQOaIQkQTScGvWonZyPCaDMRVd7HmvOMlXaf7Pd2%2BDmLhVZFFY96zrKW1A1ZVzP%2BREwNGHGUHwtuwCHmYNDag1TXq97503My4yHYWluEGlii4hnUthjTk7uQJajytab7DJewlQOH5m5LN99%2FSteWQn3shmCiTerjDlprzCBjqkAZKUvwu4PUf5pU%2FSI%2B%2BKLQaUBCkl6hfGGmQE%2BL5Cn%2BSr3KHTtIv9hetoosJz9x9ieoyFEgBkvfubFKy8RSj5YYodsZfQSvv5kGmaBJVy4Ddgap%2B5G0PzV5i2wDX0VXl14z%2BY7f0WqfU4RSWpdxjxHwRhDWqFm1%2FAJGlUQFkJJoF0OYk4Eo7bUK5bn%2BLsB1pYwJReEOxubY8Q7bAhR%2BJEIr6wyhDE&X-Amz-Signature=3d03823bcf91384e27bfcbee1cfca24c0633f3708966e73c17f421ca593a68ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
