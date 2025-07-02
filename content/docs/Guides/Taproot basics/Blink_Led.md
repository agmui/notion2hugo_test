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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT73IQNQ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T004255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtbu%2BbWeSPOGiFgP14o%2FkchiSEDw%2Bf36XsLQhefaAP4QIgQYRip40dNmkTx94rDa3IJing5b%2Fv1N3usdy8%2Bn%2FMfl8qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhBUkzQY7rLZRebXSrcA%2FIN3sos4SpDJcV256AFwG52hE8ed6Glb0R5EYjXr2tTzRiDP%2BA7%2F46YVq%2B29zCtnF0EWxjrW5xfZsvbx5D4HYGSun18rs%2FAN3S%2BBtsZ%2F2ebsdVJehxxWHMyIkAerFIGjNg2z0UaichVfI02nfMt9unYwXw%2FD1isE54BqgVRfXUmWnXdYRK9PJE6SOSj%2Ba%2F%2ByLG2RikeSUN%2FlMo7zxdryBO%2FmYrsGcjfzNYyjHZvMqGdp7dQBhTwJ9SYRfVHFUkyukxyveOEQcLsilMgNwpY1h%2FKjc%2FC0nDQLUHZSRnsq7ZdeI8xGajIJ0RvVXBQOEo%2FrlI8qNPN6IZ4Ng2j0z8GCrU0AEl3kFSrMWxXiZgZPNgQSPNPnfnWUsz6BViS4gkgU719aHLAaMHKpeK1Z%2FzD0F4qrQ3dyfzoy6dvr6uvML78i3hG1KJF9VtQ8NLxlkH%2BRxG0MGSmo7OKj27lX8BpYn5n%2BS7mS8CS2OCe5xNiUwbvI2qsydmpr%2Bn%2Bfpr3ZtLHhJIbjTLErS6MGzaKKGyzMSqQVsN4oNSjGZ3uS3A4CZm5%2BQR5qbVHYzNCE6E%2FJbhrVxq7R1J6P6%2BBxA5OZh3cspb6VgPLTv%2Fr2ZDA80NJOy0BZkjSipXQhkvmWP6%2FMJD0kcMGOqUBcckXbQLtXadmd%2BKwhxB6rXQoB393pnSRdd4Dr6N%2Fq7XYB49QCe2nDoQM2WM%2F8q3lQY1OqAx5ZzjE67elcdG4371sUWV1qEIxOLDQt7waRKSuvZsNkkKCMVrIge8lhC1%2BXWE9FF8LlryP3z1jowmRExcL%2FKwt8Uge4r2Uv211EYu%2FPbQJe81MYEjGN3M0klyMU8ZBXewgQkYIMUgUbhRYCqMm0cHy&X-Amz-Signature=7efd55486bd815912d46c57922cad4fdb8ea29e12bf284e3970f6fd3dfe011f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW5LXO42%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T004256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAphH2wkIvnTFLZZwfsmE%2FjXzUSuscFT21c8%2BuV9%2Bs%2BdAiBidrIOi6X%2FMo5CnadimuS91N2DW%2B%2Bgn2wxl%2F%2Fo7CsCzyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5ZnD9Rnevm1ckjhgKtwD1oZmxHTzs%2FvM9yE5rfCRBJ%2B85%2FZ12LvvkEGlwa0EWSs0I3tNkfPRBCok4HtYhczL%2BpYvjGBm5JGO74nPlUXbPUCAq0%2BdV56d6EuTqWwK1on1XsE28IV2vNZ%2FAGZIQ53Ycn73IR9IpZlLnBBjF4B0DByndV1ohy0IgTbl3EFahM0dRpvxQgarMUUwpX07mGmQGp045rbYHM%2Bba6hpB%2FjdmFxAQPjHvC9XbtzflQ%2FEGIE9E2VG1aQvHUYIzrHl55AX5fIMF82e%2Bf7j7xV6MJQi4uJiyn3WS1ZCQDZMTKfL5AyEWb5WLunfJKrqIQBp88AygBWcX86rZcwQhYwUJoR25uufv%2FqrH%2FicWRxkW68YKDNF9bk%2F8oUNIPyokPA4AyLM1VZgRE%2BICTwZTqtgeqPRyDFWGp%2Bm3IcmkethFiputjWzFA9N%2BWrEFUTqZxWN5AWy31BdADdX8AnSyIJ4%2B8bkRvmpzc4DO1Gt%2BmbjXMcip6PR4pDGwMPJtT%2B9n%2BiJWqoWJdsIJWZhAcRjY5%2F1vFvvuJrhvL0Q18I7lDnfUJT3fZZvQELUnZjZTwSW9zxRJc%2B1auN7xshMfpnQAOAZx0xQWVO8BBbDBhJ6bddtaEvUVWsYj9aSch93sAYONJQwhvORwwY6pgEpZLNbJ5dJCSo9yMue2xVjRVV7M5jgOr9Lz3S10tWAMMF85hZt%2BeJCWoESStReRKCt8oQUa%2Fi%2B9Q25K3D362GR1xMbZLzuVTNCggO%2FDgVeEMBAl1Py0jo980g2FaO98f7qOjILWP58bom9znzCLnQpmHPgCynykGv%2BuVLnwnNOKcK3i2qEgcl9ZVzUcLfiSL672FrTOL%2BHArg8qrYGyMJuVP2kGtXl&X-Amz-Signature=40965ee435088fb2e82bcc3fc210ac2d0708526e0892f1b2dbc76d9f54998964&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
