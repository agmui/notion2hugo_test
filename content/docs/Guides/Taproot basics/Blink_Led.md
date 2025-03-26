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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPUIODRL%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T081118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuQSpHGJLP10qWRUi4ONizGZLnocPrjiC0n8hYkDf1KwIhAPccEVZKVPCB%2FCjHaBVFG9J8%2Bht1OvYwMbH9rqELsgO%2FKv8DCCcQABoMNjM3NDIzMTgzODA1IgyIQej1E0biBXAuy2cq3ANqRLP5qiU0FPklQzfJopDFgVVUlKht9cdr9CKGtDQsKvmR%2Fu1B1Cb%2BnvfvfdubZw%2Be26d2OGFU6bt%2F3OGCYroYpowp0i8Dtm%2BLplWumeDBmP0hTEUSbgw0LwXnJn%2B%2FFLoDvfUG%2F40zyFfDubxIT%2BYLzAeG%2FTNef14liMzIVqJFr%2B5kA%2Bolt4GM7jEEhJsYt1ip372ABrvxCtw5uyCp13fgeUBg6pbYx8UOi5I%2FB2kPCKhviL6izRDtvM5SG7TG08vPMXRK4hq8layGIp2RVsLBdKAG23wqBUjl4a9igdMff9hCroFNl9EFpAJixuvuhBuDnmDPkn8vSU6LDHaBZhaZ%2B97qx8bXqiyyrICRROgmNaV91Y0PzZXaXuxhC9mte%2F5zZCXCFsT8pn0YvWPep9KkhDWbtCoknQhxyqNw7xHYAZkPkrSUEfCS7%2BdQ8SZFWSoglMHaY0q0xTQaIqFT6VVv%2FJEs6GqPo4SvloLrIq4zBLymI18EEDhXy6Lg9ON5%2BHjOTve8xaQlo5rqkU6JMO6HifDWjtcduQTN6%2FtoKr8%2Frb2KdyURSbpGYlTe0M4ycXwAqrGh4SRmEpcGkT%2BOI8ihsI09qt16AhOgvSQqmA8rwIEypm0ULmidibQaIzCYrI6%2FBjqkAVzCpPGLqC5qDiWX4kO26oL1jYVuEDoizWUrBBKKAnEnJ2DJIMO3AFnQQuapLP%2FZdnqfyPpS54Ig7ZUZas09wNQ1wKazu0aSVPmzNdqVuhEgqP73NPLhfhHHvM3F1DqWOCYurQ1VPRGcQC5eMmdGjuUQO09S0ALCS7KrXrGFeO%2FUBIkt63s310TrzbkuVJ9MnUAJytJwdyuXlYEFW%2BJskcfkpOBn&X-Amz-Signature=b47f63afd3e50c6939cea63beb93659c8eea45c9a92b9fb895e63ef5a56fed98&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EGJ75Z7%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T081118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFH4vEgkc66RvNA7hECtOflGnFMLzDKpM6MWoEkowMHiAiEAvPEyE4%2BFVrkbQ%2FqIeQ5c901aumIe2pEPNtEc3WrG5oUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDODq5ks%2BKUw8NY%2FUtircA3OKLx3k8TPKaG8HQLRJfM%2BKM%2FCIxSaPzX%2FFVjRogghP0KXrq%2BpehOk0TwlS4PN3WiBEAf87vzwY9u7H0jdBeCsyJpOB6a2%2BySYCjAS2Gz96jRTjW8hc4S7JWQWKshQoS4435JrrfATGsT9qPJP4dHblv7TqOflGZ0hrv9OTy6swPhla1k8QrRY7XsY2b8GTnHxvRtLZZCaTCttJCUwJSgmqvaYRNz0vpy0MkBDBvuzwGM%2FzAOu4smV1nTgE41n9ZEYXOPM7qAtl0kKaHdXb9IcYmHZmEzS1X%2B0QhSC8RkkNcwlzU6GT3i8Vnk948zsc7x7xj7CWxtEeX%2FvogdckcSlVhZlFna%2Ba4RotEClQWj%2BRP6YzblOSL8RXn6OfWY30N3xTnF2CSnLdhbEgluPTHzrBdB%2Br3YDkYRq7C94LCS8k%2BKhhjeRRE6NmR2AaMUqxlOYj9NJmvmTTMeGL1W94JVpPFATGq2DW76LimPj9QFC1bPSF9%2BKGQ47y%2B%2FiQRYKB7rVUfI%2BL6lp%2Bq0PlzwkPT3eLWud7U5o9t1I7h2mQHvi5HPb4GvOIY9g4JZh23g%2B9W5WIQhhOCA5mXCMlLuNwnApd35mSx2f3YpSbEL%2BSEAeOjb3OxD3RUGWrEwUdMJ%2Frjr8GOqUBIPa2NgkAyNefGqQyy13%2BvLYZ7nVnNMM%2FKvdVu5UL90sLskhmXybjOaAQDoSBSB6beLc4QuLM9QTzUkQbXdvuwKdZ7fBSxz5WFKSAT%2FYdrzVsd%2Fih8Q%2FI%2Fa7f%2FEngVUJXh0jZQJd33DAyoDJF0Pvxuatajew27DBRPEfHiukOMkW9Ia1puwxTLnk6%2BqigMOUF8bhZwFALTYFaa8s%2F94xYyHkWKhmi&X-Amz-Signature=f084b03e411b7dbc480f779b28c8623f2bef253cfc0b27a90a5cd76490f10444&X-Amz-SignedHeaders=host&x-id=GetObject)

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
