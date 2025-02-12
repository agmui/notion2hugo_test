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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4L36OAW%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICe2gvRfDVimwZ15x1k2jD5MC3hk5%2B3aZTLRFhJXLA4hAiEA%2FQXydanqW00eLFK4XnYMEPBN6tMlF6OfhZy770mQZw8qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBx%2B433SwKB9vwAm5ircAz8CgI4lQnnVHAvxLreTY5%2B334UX6vYH23MuPa9Qni%2F5EFApj%2FUlcN9641nB8rK7KDgOqpbXsjznSB88f7DFaBz3iOx2EyvCqvvvS%2FiJjabFdn6cOKkg8rrTmpgvmYoeWM9mYViFeMVQ4m1swaRQMvHybVkNBscj1tx6k357hCjvA9waUFek1Rj0UuPqPFy6O3U9epxNpigpAhLQ%2F6CwqBPCxzEx1Q%2BV%2BO04vbGFJJLhFPfssAZE4sqEx5UE0GfIuQDAsZNfeNdZ5rgTjyJOgoGUGv88A0dvj%2FWjy%2FqJJGPF3ioRekG0tKzwLisQ9mkIW%2BrT2In8VvMlfRl%2FLnN%2F%2BHoB6rhgey4vi3qJhqbBfkwbkaYFvRl6aXX%2F7GnSTNTcpphaXGX2n83ZMLp3rvvuB0wu%2BRa%2FRQbbRAbU8p%2FYGmo0NazG51bI1wXDaSYIJPPOBvdBdm53bOfUZxNwlMThVsTQzN97D2cOZ8%2FpRNVwhqNoS4KUUVsfWPxCsHmUWA2LdcqyydVVHJJPb0vmF80Mlv4lIxPPYMpSltdqAKO%2FE1l%2FSPEPUtE85jfqalqsmNMR5IQDQCbNC%2F8MBOI5ow02JMdKT2Pk5XhCJSO6uc4Smv6oEOBXrVUrULf%2BRDsLMK%2Bpsr0GOqUBbsZRjNLCGXlNFkn3FyIcMr%2BZ5SVDy9rkmw97bK4YFc1xua3r4HJ3emZDCk7W0TY60exif28VGsMRkojN3ZiwtAZFEuvji6DCmLmPj9Y5CSq2TRQD%2FY2BmqDbfqHvibFFdURhGjVZYpI5gCms7hddJC7ygQz2%2BLMnEhObMDIg%2FBT%2B1YzWRDwYtjjBmP50reZHOOXAU%2FtjS%2FrDWLD5IBKs1Rl%2F3%2FdK&X-Amz-Signature=6a988b8b7aacdf00534cec469094f88ee9248c962856ff0b9f223fe532cf41c5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DTKBDBB%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeayzMjpad0b2vForhHFx26FyHEUlieHPVYiKdz6uzKQIgbepLTJy0rKKrYk2AlNu9f7qGQg5q%2B4H%2BOR88Ua%2BvnK4qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlYQPCk%2BTx60JOoRyrcA4Wk61XoP9%2FrtejMHnqR4KjMPRQsAsrK0ZhrnCji8PnFkkDjPx7qB0zaFxvJImUE3Mk3VcMK7MzBGbac6zEhEgXEwfHZIk7HGBeatZfO9QOgyEhod9w0sv9iNkZoyRKgaa4mEcHYWY4F8jvKfZY2of9%2FKFClKhZ3DisWu8YbTGAFoNGxDZ386k2qq%2FEvGyzkW1%2FjZmaARvXptee21%2FgW%2FJfJG6VON7aPgKoG3uUbSBZ%2BxOnjdmB6VcgFV0Giy7dTw2Qyx550%2FozC2MBUsLFys3ZGkekgJrFbdqqvyeJj0wKy4zZ4rVvbZMx2K0rfwg99zt9oXU0DxAeU%2Bw6B7tFC8HXlhmvg8fyQv87CrykBGYxRkLc7zmnOycT%2BG%2FI%2Bn8r6dzBpEuE0Z8dRABpeBgsAOMqJjVIoOMtPb71KsP3eoF64K7Afm%2F%2FSHuCpFLnw%2B1T7mDOn%2BTsu3RjXtpUBhZhNsbu1lPnA7AljRfC70fwZFKs1B8Xv5DHPkmaHef7MU8nkQTYdDluciWHnLpNbBRUhMZPkaVQgGrgJnpaOIIsRKRM9I%2B8qiapmWTCj%2FberOH%2BqRp1gtXM3eylavBGcpAAa4fgV3CONSeSbdfF4kL5%2B4iE51dQ8i5XeMnNCxgxGMK%2Bzsr0GOqUBXWR7XfGoatfvCiGfCvy5i8mNQE%2B3ZxFzPVXsqa76mXTo54kRJFj9ZgS3tQX%2FQ4w36dDhuIgdcZKsydrJ8tWcVgS4ZIrKWWv0dgFsvILg8vri0q0l8c9kuTz6uQQeEgR4CQ82XYCY03JnRRT2QINzjL2NQILA9foAC66qW46gso%2FDFnC1E27SxWG7W5k%2FN7H%2FiGB0YkfawsTMngTkOmKliSdSnnio&X-Amz-Signature=e4d6395330e2c68f47ca1ef69ff45bf3d77d5aa05508ac4ac334f37b4943f07f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
