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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVY6U3GD%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZ61hwbDrbaI%2FmW%2B4bWclBgouUIjQR2dnCpNYxGXt2oAiAfOJEdeghXDYe04W1LtPqRFDbJ7dFq2o7RIFOXVeVQuSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMJGzUjCvwd6l21qphKtwDwm%2FFZ7zw%2F%2FpoXl4C2zFXo5c7fK8db8xaQW8qgppv8eN%2F0ZGIDhOqVWOGVklajthDVIj6MXZSG0tmudMQKHzcEwKezgfrTltClF7ZwJPyERR4jpKRJpJRMf0sCmO4J%2BqyIADt9tzAXPNy8bWCxcNlO57Px%2BMEWJYkGhhMYHhH%2BTNyF0h52BSJP69TeCIKmaHjvrUAOH5ywgMBCHmc%2BTAJCvjvzI1L4BAdB9RPoSSAS%2Fv9RsYa5GSjLuI2c9mqEVqArleZt9DrIr%2FnDUXy%2F6jArUiTIuvd0ybh60EYSvQjeuT05sHeHV8XLSYCsCYAhDT1aeoAlsoGGY1c6HeLCY6RWJfKS2Wrgc8GPjfYX%2FbupZx7faRQ7YmenhhO4mslsRy%2BgMOX0S6CWxdaekW1o59O7EN8hQ1WaD9Q%2FTTaRuqPVg2gjPv%2BAzDvDcHC7x6kMOso%2FPRsnZsNSBSdGLeVvJ66xxtsy1DYkBTaoeEgXxAveMwUj2T6j%2FKhgCgVxwpCb3fCeXKElf2ysAUr4DZn6I%2Fc8nkaacOTVmEQvE7X2nWoouZzj6dw144Ugvd3ct71iXWDguHtL6hZZfq0iKcC5GDHW1icDUDCOfTodRsakliI%2FLnKCQTvXXPH%2FGibwqIws6OjvgY6pgFScTZ6bBvTBIt0fZcpewRirCOxbKG4ofywWSVJQ%2F0hsHCOE4iP3emUTo80YmxmcqznMRa%2FlfgLdigNklsaLyOzbvsaJ682X1gS5AQfxRWpOXVEdXGKNZS6BqGQFtPaZbS6MXawu8r9Hh6yo9UwaKfbwyUnKxEO8G1PgDHdAZ2%2FF4BuDmH%2Be8fcwJ2uybB8N9emjKsVF1gagMYlFrSTH4TQfm5sro7V&X-Amz-Signature=e29faf27f8268eeff2a12b867cbae781febaf8f2bd6ec505d9c852305af1dc04&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CPXQNZE%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7dkeDh533cXxkL818jJPZhi58hCaJAmDSQab6ZZ8seAiEA4jF%2F8mQJl0VRLhPWoITX6ngXrXRukvB7XGAf6nyEpDMq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDMUSX1mXUe92zap9bSrcAzib39riiaTL1O36bAvAJV7wjs1Rzu%2FdcC5xPFvjaHkMX5JfhwAWA6D0pV3jzUeFXMcxeRzIUUyQwiwuprWqlUZykRO5cTrxAh4Ce7h23h5R5azTa768HAZDlsLSjmDE9ds2zFX%2BljiEXvetE8dAKgqW6K%2FrfQyYQedvJDKVqv08bS2FotAuvE2%2BKIQud6%2F%2Be92IUBOOmIzAHWbCZ7Hi0%2BNjD1SzcdO%2F49y%2BZBw3cKmE2Jk6GdMDxGLBls%2FMINlEkErCPzZdu14rJz0IOVtTayreB217UB2Afy0z3vVR8d2f0uTw52Cw2BT%2FLJ9P26%2FqGZzELWTSYicouveWLOeIToV9AZgCo2FQy%2BMbKv8QaZc3a4FkSvDeZ%2FSCnZ%2BPEC0kItrqaXATQmYfSCXZy1IKvdbDdU9%2BPUh27ySYPj6VdPQKCYq4aww4ys%2F3NKrDdr3QeDPKH5%2BzmlhjA5lnuAdZ0VNv2OFZZBA2WZQl0ysxZVp6YrZKeQZLh7Dj7qsdQS7CV1LYZiflrVQeP14X364%2FJ3vjBUG5%2FciKq%2BjzbCTvOcBrvQ242G3bRuqwphO26XkiUHdjc8%2BLuHcvtHgfPvmIE9QW2mSj06Fkg1I6JyBnOo%2FrKS4e9Re9WnQtRQJkMJKko74GOqUBriu2o7BzZXncLJu0Ppeu4fMVbUbeWVQMSHaZiqwq1dEH16ZahW8Tl01C%2B6DSOv4Px9Jw472GDJLBnEpEm3ETbfhghvrvFTh%2FpTJaGpahgX31uHdAaKIf4d53bODzZINMFQp9BOfoiVaCqlnTzikXRKuw1J3K2w7p1dQUrQklNUllo6vUUHJwdM%2B3xp%2BmjfImDx%2BOd%2FDU4BPkpnn7s0ETKW6z5AhO&X-Amz-Signature=1a5f521782db7896e15359a429f3dc159721b1c1ee7b91aacf7b5721c3c638ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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
