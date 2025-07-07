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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672RCNFY6%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIGKlx6nPz%2BCA%2B5ToEKTatPnoAZqZhYpU%2BM%2BdkeSMkLdQAiAzpQZz80NRTRoTNFx31SKJn%2FUONRPgztqjesE42X2i9Sr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMfQepF6eEAJzoM0vjKtwDc5vp3keGjmkYJV%2Fag2%2BT39FAQqBfmbcYfQYMen5GJF29ee1QlPIQA1NyL%2FKHeUliQ8VPyiJ2vxoO1EbYMqBxOpc6Z8Q984NOJzphYFUJjBV%2BtS4rmLQlQVSL06WJlstJLyHVlr8M6dvhSNxKuuK%2Frmh6XZos7lz5Y%2FYQQqQHjhN0bhJj8nE3XdsnWtCw3EOksUMowrb48zBgp0lfVjjELc0mbt0YxrDi2t77O7z7CrcK8YtCL2i1%2FmRYu6%2B9FH5bNnfhZzPGSJ%2BwjOKMk60Vyeed0rv3bHFnBEEvkQIpJZLaeGeIt4DLdv1nOLoY%2BSNXn0hE%2BVE7sOm9RW2jgNFjhSP9ezOMXK0XgS%2BgUA%2Fgl%2F5fOmzW3Of4yjrghN6D36roqUsTzTW%2F6Gfh2Kt35DzzX5ixSxk7cjJCZFfRUv%2FDrBXE%2Burv8AVlCBoIkY1q2ZDqRMY6DR0KVq0SUxiIQDt8zVIhm1SMSIVO1pjJHZ78LGRd%2FW3F66B1nnW1S6f7EQFioxdm0OLBWBI4MbHZyHd8R2Rd6XkSqonLhEz%2FTOOd%2FIebs1hOMjiNDvnSYqcqaWxbuD5AeWSlQm%2B0Ch3ip2kIiBDw3WheYAB3wXyx7pYNcLkWfo3%2Fllb26n2glFkwk6ytwwY6pgFbVomPwLPw6yp00gsU9PhbMfyxPWHRbvTk2tM2GKqra2zeXlC17yT5kjAbyGIExG0EQyMc4f29Q87IP1i309pVV3aLik0Ox1pKb1phrcvfTKmr5pEa1WFvAvbPLhNzA68f3DmrDxVHBcVUDMNRecN%2BL0WzhYihxEXeUlIwxZgTrwwjOU3FOj3iLYJxe8o8CbGc79NmWRuUfyWAQXpUwvaddOaMnPqh&X-Amz-Signature=a2a31d16bc638dc6a22c5f0420fce16ac747f74c13fa8a1b4172265cece8b16f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZBC6WNY%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQD48UmRblpUlowTsk41g%2FJzggKy6NDysrQXqftZZXG4SQIgNkip7e0q9n41N5Em7MIoMbBjJ4uoMoOOhdnnfgAilWoq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDAzeqHE9YttepHQ9NCrcA1slLe5yEHG7j%2FheXz%2B5V78heq5tMsQEy1xUKSfot53EsDTACmPAe9c4jcT9LaNw%2F6VvT5YyYM9hKHCwhSa9juY2kezb6bGl126eqDL2JkHfa9kXIIb1kVVwt%2FiqYo5etjULcALbg4FbczLfNZsZeskdMTtoCAOCjngvxJAByCcbr7VmxUcSZwgQNmRmbBsOsEOmhtBN69fgiSmIqYuq2XjWetFu%2BNkeIUMxh4ys%2B8sVqFvrKg%2B2jBhKr2EErLxOvvZYyZ4%2BMbmbHrAMT5MtBGQFNOBsdVi4um4rnyogBkDBgh%2BF5tiNtkEfww940XyAsg%2FnoEdn6MJUhh3NDhn%2B1hhOtQTrNwtDQA3baktk%2BvpHQT%2FeZah7MhOD8O9YRbqiw%2FBjo6C3g%2BC5vSbS%2Fh3qxQqzmJq6vB%2FLk5yCScQuVfeHSEb1HvucWshczT7Iksha3wIEJ%2BcDR5kXtpIUYbQrCGKnTDShf%2B7BskGGpEMVzHF%2BdSMfzM2%2FHBYVAY0O4BRJHniR1XrqbDxCMcOem7j5QRJsnAnxEu3Y42BU0eayyY3hPjxSz2iaqsGYszI%2BtvvkXAsCFNMPKtebUJdZMRxgef3R8LzTJfaHybXAOAPDA%2BhSskTDcHvnX38cvpKdMLnErcMGOqUBQPCGjmNw%2Bo0bf%2F%2FttMUlW23yayygagXdvO8N8zh6EROCkvJJmyJPDiABVyEiUYwjXp2OdtkRb7PjDDiPCJQU74rcLoEO4S8BAeL%2BoCYWo9HzGvT9tRP9m05ErohzqM%2Fj8%2BUnH3jBJPRypudVCnzMKtqqeJozsfKuuQ3f%2BqqJQsum50F9%2FUkO1dBsLoJezJnf28CL9bIBrhF%2BRDu0QMmgPv%2FNEmTi&X-Amz-Signature=a89b25648bc0487b920307f20eca9c51458af827b936d5f76aeef0a6cf859f44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
