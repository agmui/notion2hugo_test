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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FYWNSRA%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEeEr8uejkPHzXYpTEaXSWwifliMNABBH3oZGxpVdiesAiEA2dBlzbDAb49yGrcdUSDQ1wXkcdemZkeXy8WP%2FFb5VoMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVoQkrenz2EKt7gxyrcA9Xj4gwtIUrRMVOLm4axf59XjiaKatbsPMSsSXWlIaQyjtfP3GT0wF9aV03LygS3sFJFZ1dxlW3b%2FT3AtcHZwfsSYqtrOwcQAhgD%2FjfnP60l7isH2EZtb7kziDXt1gCVIulaTYj6AXyeS5XKWcXY1F0nRfApLpcj0P0STyj%2FAZLmrbQWSj5RlDimIzou65CM2nAaHwnMSYXKhk6v7lo9tE6ZRkBrWgYRPrDKaUF%2BjGIw8%2F3kppTHA00KKpmzZGjchjlke%2BYoxq9MwRy%2BP38WhknQAxY1%2FkRF5eA1buw%2FCqF28W8XaTEsiuiXDrc6PO2fOvF6tYY9lUHFJLnJ%2Fey1nxXEL%2BgGLTKRPs007E7jupTOsd6KEHBr9i3LCv5Rr0L587hyU8CzQ%2Fpxxc3xgekPG8%2FeaPVN1Z9E%2F9jOXTKmKSZEvtwjsi%2B0L7xYh%2FXHymZQKdY1fUwEPzVn9wBq5Uuj7A%2BX8WFJn98gtyl91zeibOSUKJhvnyy0lYKdiRsLHk85%2BuNLbanHzOjgmxM3O4BP9%2FkM2gsFj7RHypBHrrg0p8x%2Bas5MF1HkGZIQOPtgehtkuzjs%2FTXtTSFL99UfLqfDA0svbmYUg%2BJhMUH2oI4Qcxe6GqsmiKOaujkNw2sXMJrptb8GOqUBWE7wTmDAXJXwRPK2Wo9Oc0jRBLuzYT2fH3HWwfL6SBTnoGZkG1yMPWxRKkxrAeGxZ3OD0%2FDgtXbP6piCjLCUsB%2FHh3wWVkly5cd79vS491jODh0B0irxpXLEvAciq24BG1D72p0wjTVLZWQh0bWV4R4HeE7hccQ5cpMs%2B3uyzEaAzXgTwE2WcixFxfpWyBAZ0ZB6gP2ckzEU6HmExkceC3mFlZWc&X-Amz-Signature=56a1db7366d83fc66511f1bcd13f3d76c50bfe5fbc94efbf3bca3f0b8e34da44&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YECIIREJ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T190105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDO0S5NaNN2Uw7a27pEHWPZTnhrKBNUvRYFKLh5oBFH8QIhAOartlIYT7BUUsmE%2B1gWcBw4ha6TV7dCuP%2FQP0tnavKjKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw84lI2EcP92b1Ni78q3AOZVGj%2B9ANoTJKiL6hDC8fHZAlkNinHZ46kIX49V35OJToI%2BDfmoPz8ubMlXKmjWegv7mhm0l4p3QhhBvqfu3BjAJHf2tw%2F75yUu2LdNZjAvaMJM0i9Yh1xBWCkl1UNjdykYJUJnS6Bhrm93pnlRl7tRCYt%2B5DmzsPmEeHO%2BZyWHVmx8m3H6ptpLyAV0KtZ8r5tZOVtne4NbWR0fQ6yMDvhd98CHnU%2F6pS9EoCC%2BaUzA6BWPACAug2HTGeaTXdizvu4rhqWX4A%2Byk1Fod%2BiQvFRkxqdshQ3r7yY1UvkLSj5yR9EfB1%2F9%2Fvy8Zo2jZE0ok4igmMf7xOsAtzmzYnjUOlyn32Bj3PcoU4E0ByEe5SYThsJ7YnwgRILSLGl%2B3WZGbSagiWE%2BkcMHqtgXsPG5FzUf4ryJ1C7l1IxToy7F1LX2QQnO52mHCnVOacpkt2OvekgN1uebTeSZm0Jb9PN9utvSExTq7%2Fi65a6gmEm3SsCl%2F5ot0BMJmjXHkhQUnDK94frcfwhSgfaXo1Eds2HUcQXAYR2ObbnGge4t3NYWcL9PLnJnkQbm4QQ8C3u%2BGiVKOii5b8LH025L1sV9ANHIC7YhfIgtYGIXV0rdRYuWrUyjuFEhKIYCB9V7kQ8ljC66bW%2FBjqkAf08pnIyWLS25gZsIlP%2BEUff2KHCXdNLZ8Es00S3cd%2BJTCzv9VgPbQ9s6pPW4a2YvAUm5eGWIqpvXuFJNc%2BHReWipZfLhSlsgRcG3CbyxpIBuhE3LRaRZXbVsyWY4NHtO6I3jlD9icSGXADZG7mjtGFEHyyuILNnoRGIroFypGyYD%2BGvecRbA8uk3ZcDFIBNWFYXD6kT35SCczkTaDQQEjWEQv59&X-Amz-Signature=af1c856918472ff99fd77fb0293b61f60284a4fc60960b605355fd61cc9723b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
