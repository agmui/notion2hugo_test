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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657GUKPID%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T210714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCMcvltoI76Z7ZBLxmgHrDooF%2BOBz2YpmCbos%2B%2F0JSwuQIhAIs6ZyvYvEgko7XdjwhKM1B7rOgjP7deAbXcTDGHsOVEKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRd8EzoItY4ww6lUkq3APJV5NrsYa00yd3UGdhkFF465o0u7pnidbYXqfwbBpHASJxbTj8p6mIXhIbO6%2FHForSEkpuOXIdgGO42IbmuFlfKKSBu%2BmyA7JIJGTj44buTMs5NmcA2pyovkBFRKDg%2FRj0SZqqL58joSQGhDa6yV0dhc68FSWAve5H5j14DUdrcaBkUGgB3Jb7nOUsCnC0Di1nwpw6AC06%2BgbuPAf7h0XKIkVWyT7ofMbkKhLvuYpQnAixGUBHkcnHkH6BEiDJum72QM0Elm0Qt%2FzeCWbILkD3kqj8tBLcA%2BhNTo5EYwgg6dpZpT3jWO2gY66GVH%2FGwjaQLxfaNLK9mp%2B47dArjsF0ERZJpK71RogK07KkTdSylrMMxMaELC9CVOMqViC5jFNy%2FWjZdhTgyBK68o1fpxnH5admi4uUkgOcedOUnaR4s4nuCZz5n7eEKhpFlRMcxy3UtO5XnTgrPkma%2BxstcRX5zdcvyznEHlswPEK2dF0Lh0fN%2F36JnGRvZfUu2P9LFrRg2IXEUhFnrQa8B4gaplzdlFhzOtJDXn4hJKDoEQX3ERt9zUluudpPy00BlH%2FvVCJmY62p8jYtFCRk3wWoToe9tJyhfsxcAFO8KtSmVoQ8WqBFYcxMbPAkqCJi%2BjCcx%2BHCBjqkAUh9eE0qJAihEUPbkO4N7DK%2FCWYtlVS6X4ErfIOkz%2Bd2tuWhF4obbYYziQwkQzN3FcYeMkU9sczhosSMUw5Fygelz4iEBFx5VUgtJlZ%2BBjEHCsZD7ch4ZVFcK4KrueyeAUa%2Bd123qZiM7k4yIV7WCgy6f4GdgZxSRZyga2gdbS7rtGTvZ3SItJGbqTfBkop6y1Q9IEyCmzkGaDgv5cSl4jrt4gbs&X-Amz-Signature=ef3ecbc671665a1af73b7e0c7bba6117a05fca9e35c027de8c8bfce6bab48af9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UITDDENM%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCadBC9VkSWHyx9rU5n8jJWKjrn2ZOQ4M4ES%2F5qM88lEQIgfdR2qCBnrM1iENzGNWHmPWEM4%2BAlA5V1q9%2FGrO%2Bh6S8qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKgrsxLkww218Aiz1ircA%2FVGicdLAXqM9yCqDgVh842SVtprIGdqof%2FwF8%2FGCFKi3C%2FYlJXm49vaKj9rIy2vPmWerA96DqMbXgea6kr73UWEHnQ9v0VyCjSxGaijlWz7Qi0oyBBSW0VSRcQVAXFJ%2FdwnxOmmZ8M6slnTyLYEy7civZqeoDNJADiE4zIZcyZIZSLz950ZeGEHKwOwBqT00c8L%2FMN0XRd4ZdW1icep%2BOMD5Hw92kG55VQHlj196NlM3JoS6XucHi95Ym4Jbw17o84G55K%2BO2RXzWkTogOuHPZ1IWxPLuV7PEE9pudA8ciM0VBJa%2FdhXR3baDR2o78phGmQdxFL4%2Bwml1%2Fc8wkPfcBwvRGImUyNy%2FAC24pVPVzIsGfxKWm802MN5t0jMi7ZhN0pJpWstFdl9okv4bdvTIqtLdjpe9QPSg8t5KBMltxTD0qfmGA4YJFYYHoFAYvwlduc0Xg8piVuVer4rqAgp9qAZYXdCS4l2JaNN6Ob8v1BdIQOaMK1rzrf2POZFUF4H%2FkdOX7K3RLAHIMOg0ZcDrR5PYul%2BytoFsLTf%2B1CfbYiJ82dbrtkR03gPuar%2BqJjQZ%2BnZjcsOI4gFwk%2BnERJOaNnN72juNiOJlcdSeD9U%2BRMCQnYEldjV2CJ8uYUMPHH4cIGOqUBvu%2BExXDkB1emYCfZeAxHqUuS6PbK5%2BQ2Gho%2FLyjV%2B%2F8PD0opikTuF4GwvhhE%2B9CHilIgSl8vbhR6MtJKl3L6BSQLdXn05FTAquiaCV0ZuzfEudaWXg2CRlcRIQfQSHpgG4QXmplbViL6Drf32bPyArWrKNlg7fc63ZrqBo2nBDmxvHZPqJL4PBg8XEGHGMkSxqg7ZqbgqU7fzjpbvkWc9Ajhi2Z%2F&X-Amz-Signature=41e50411652b833ecf4ee582c9166ba407066973091edd7a2f6d0e0f6c6d11ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
