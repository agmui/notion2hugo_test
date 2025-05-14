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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIQYMF5W%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T033414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCyn5HP8dJsxPTYb3s1GLpp3BAEfKDf%2BrUyLq00BE1LcAIhAOpmwvCTOpp08dMFtHezWXkUXMSp3hvS5zdUiknbL5OwKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtng25JRnUMboX8Pwq3AMNNL%2B%2Bp20AFqXR8vBlzOYhLlII9S4QWQtvh2tcLuxjKJiEPdP201rqX8p4xc0%2BInPXgZXJ4k3ZePbpmBMvBkMZs%2FAwuWqZF89IGqNC39yArUrpQTj0gb7%2BhXYa%2FuC16L%2Ffhdftsh4Z2BHuEG%2BfIxMrQCnNmNtrWr7XPvwPNMTuwqzvxpOzjPvD8oGLGRhpdiGIAKZigafNWNqvQhG7uBCub5fURg%2FWhTXLtxYCun3mPHJr1nJNhfderEIf7LYkVY8Vtyt1XsbPCWra7Y%2BUxPVIyJ7eGq0hfyES4d0Jdq7kxZZrIw1lKKm3CxLWaZMXmCu8KjdbNhwaTw89AqxG6oQzSW5dZsPN5VCnulVJooHlHorth1Nqw1VRVrIjXFeWMfNcUyBEhFIUIk0BP3gl0usk6Kzbh6zG5l%2BLcB1rQUzuPj8yPw3YuRvwAyrQLiSBR7cPHWkwIqRL17usq3xbfGPiL06319Ii7PBwoWMs75tBETe7JnP0GgyrGcDMSVqIwsoz0iqbXaFz09zk5%2BO4YJ7yRxGjCykt4Zqjyo8AXuLW87IU85bXh7qQDkTR4ivZD1OHnpYnjk5KZ0PVW8oXOVWCTYAIi%2FpmvFV42xvqr0gtJAN%2BDuOryEfdQEMuWDD4h5DBBjqkAfHixAZmCBShCwF%2F15hS3fR3NE7KewYHDqFsAYqgfLNu4fDhBWTRRxlS7E8nO1h7J2%2FXRNXgd7AVdLPGEHl5ViT4%2Funco8XNHssmq5X70MHmczWQtY3jlygn2PfZDIAvldP1Rlh4yEKWjK8sChqeg5chvGKXuJzt2jExJkGiRJfuBVFhw7XPlKLtNvIBRHlIF4HV16A5waGPiWWmowHVCGu5UZxq&X-Amz-Signature=14948d86aaf9a38bc4b491e4b3ef604b4ed82e0025b7ccbf93c4bc5c2fef751b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NYBW573%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T033417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIDCMrHGOnzUGAHY6pCKhrBxkATgJ37kcVhL9x1AQR0cHAiB%2F4%2FsgqNhSQfUsRU885pq68tZ%2F8uVq8xqrlbCYBamc%2FiqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe5r3Hl2lxFZA3xkxKtwD%2BWAgSVAhiTsIuA%2Bm7rJRyM6dM530G8SmZiaDoj7m3%2BXMcQ5UD3ZMstjOMnv6gJBkoNJGAoAMM9JDXdyi%2BzcbKIgJOSbbjArjSA11dJnfk5rSd6hHIS9uriHTM35nOszPXuAvBcpapHBOoyzylo%2FCHUYmqdqu%2FogiaO2Kd1e%2BZheBzlaMmTPj4IvF9oQm4OuaSX1HBVaMT5gshxX25WCr%2F6wBOafHeSzbSMMDHpMN9AJ%2BQoVu92vbo8KJFMlgKArdL51vC1qY5Aqe5zfdUu4COdDRl7kmUhjRus%2B%2BfeURJy1MHLO%2Brm29iQ8jzQyf0ggynUyCmNaanAZBGXTJQICxlmCEnWLN8OtV%2Bosy%2FH48VwEkQZIr8sQdnAU57%2Bu3tdXR7mUuvaqWvXZ6lSEOWrL3bmxUXinriyBzyKvXxC3af0BGajQZIUSq%2FHNBTt1gV3cjHrEgzB5yKWDrtZmWloacP6ZgrB2HZY9nBxfXarQRK9S0CR5Q0FDTd1jryRPLlINr7Z7T2xbEgFIU%2F%2BH0OUBVwft6RVmMZxMQPBTmJRbLSWaUQqxPBVJlJ6Q%2Bo7dNgGmq4lgWPt0agBZ%2Bf%2FpjLlFHiAtH4xN1gaGSmjE%2F5dvTAGgAmU8ipjvktrXX1IQw6IaQwQY6pgEbrdUaoFi63v%2B%2BMlo3259SbMujbCfa6gVowElk7DTsARvsbJGRkfTQVjKfVIJH0n5%2Fgb9FzRcJRwbJwkeKGEhIimSBPAzoQ7It1uvuFvBJx4Axv2hGjRHNvSje0LN8CW72MVV67V%2FlJaMFwY3v039LN3OnGyrTX%2BxsEXvp%2FCVQc4juz3ukbYE5FyE9iF83gYsU0Z5KIeggkQE77arjbeHqJwCgz2xJ&X-Amz-Signature=e7ec631f601d3997b5282a4ebbc8c87b787ae3b7a868aaeeedd1a674ec38183b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
