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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HUVTXOK%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T200809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgvNRb8skEltdKW%2BWKBdpe30dOFlGebSfkiBU4ESxPygIgK7g0sBeMxWfnk93IT34PBEGTCvLpfRI7SjJe3JoQXfwqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjZuU3MiN6MvrQ5iyrcAytE%2Fx%2FYyGRHR2fvBazQuNUIPM9jycj%2BX06VFepyYHbt4xv9ATyf5N92uA%2FVZ3nxNqN8nKvXHWhDLkWTa%2F23Ph4rEdng6XtqRdkodnZNCC1CTryaEHMEEEg89HXkxzAHt2cXEzgrxkapxLcJaOGZdFYpyrSNdOhRzKdlCgP4aSqKr59iRuHRLwz2tFlQGGE9BkPmRwBQ9WQhAuWsZJoivXyDrgWEvI3J1Qe9woo3EufAb2LanjdYzEdtl3kKlaDbJVNgFN%2BNqDj5ARLULnpK2lJa20jrZmb7PT5okGBO1M3%2Fqtx4xiotDu4ilSrcjvmavzZgcgvYNrxqV5omc%2FenLOzK70fcsTA1ntkPn0i%2BM0AwVRZ0wV30C8u4FXzzC05mIy3OT7oSKcSHbyBjes2MuCoQW0DijWwbWVkI6ktjuZRae2qAQpbc99xMnNuDs7YQnhd4FNH%2B4Ib7cK2LyoYwl32lCNi%2FdKLnj4RH%2FMKXV%2FfaLrMvw2vgfQBYvE3ObNcjg8qfNRrUus1fq1BBU1MVpOo8BTWQ6T5gAtER9stK49O7ILXSun%2FiIoQjOZaT%2FI509ORwg6jap3fJOh%2FH8%2FC44FRuhtVL%2B1n1bU6UaIVp7OKs%2B2EzNPpfPYIFv7K%2BMMrB9LwGOqUBbuWbq0n%2FwFPz8awkeoyXxdu73mxihsswgsjSqO7E7XjWbfrlyGQWZKz3o7IThKDW64axJEUwHo8L9lg9A7WUusbtxNv3UXdgf8TKPS806sguOJEkJVrGxChOsT6LPqKjarvSbsJRxE%2FWK92FsiHLtqCqDP%2Bx%2BQoOkTUFSJflF8ewNIshG2LrJmkIvp7L7uc6ofRs7DE9nAM1hW9zH4ihFyQyZlJ%2F&X-Amz-Signature=5f203521ce2ed4cf5b91c797097e3837679e52bedb9fa0d02a02e21079386ba7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVLGJWYI%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T200810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdBafFPi3j3gTrpGF1M07TwZblEdI1kVWvVc9av4VROQIgYuWNdgeSFpCNaaqvBSul1nn4zSsQ4SyvmI%2BZxnbxicAqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNVizEa0Q9vo8P%2BrFCrcA%2FQCNTnpKheFzpbJabmFbOqpAfjDNNQSH8kAyLZz6CWu77b1lS6vvPi4vuvZvVHRY5rC2HhQg4S%2BAGhnJbxnFQVuu6ikmLM1riIstEyqeH8sskEnzgzQyEJzUv1vTRRi6oserorDVURiyMOyIl1MWk40igVFxEF%2BFTSsqgkS9YC6Be9z09jICePXC7Zguy%2FJYYATp6%2BdkLONpOLIVZJKSJz%2FJ4gdUyG7GSDM9o0ULCKChGDVM0LE3PHSaSG4plRKPHm56SsCM6Sjx6StYQxc%2Bdl02e8TyFhfa4zhZs8uS1wQuRcdjkIuIQ7jx3J%2FYHaT2e92ML3Zy4cqqaRHWzM4QFqKBLuyukQPNy3Jg3D1PI0%2BYcLizHl76FOM3uG0xBZ6CwJ6oPOxXVjnGr1UALs36JPhgtYkWxPY5PQTzv1UyLttnKxaDRmJNXxLeL%2FrdObNm37hT5yl2zN82DX2n2PRUP5UCxJnqPBKaMOAi4uqcIPx15TLgyCS29n0lxpemAHhAy%2F6sRR7qyvpY0rWCT0Nmi%2BHUrUIQ%2FpcLa6Qs25NrBxi9r5YyJiOzpzkFXX%2FelWO%2FJjqFpcKOQDVSdeUkhQ%2FXRKsGITarmAkiqIyHIMHPz0WBtni2GtyjCl7NmoDMIDC9LwGOqUBD62Pw1STL%2Bs9Uv9DSpCTQdbtj3h6yYBEpCYQ%2BQz5dNGjq0yOfSnZOBfY7fZfTAO9kzlCEtTrRBF7oVIrGSN4waojn7q1UluiIN%2FSRy0E0MvFuqKF%2FNk%2BaENvybb2AVz%2FqZuI%2FPhaB7r01JiQok1YbJzUBAG80X%2FmkPqViGCvADtdj5UdpSjRhDZW41G1oRVIYJ9hW2zXJlEdPW4Ld%2B3TzrGuxXZV&X-Amz-Signature=fa683fda32f4989f1fe432692ddfbaa503fbde44d47dd63c5e9a10400283622b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
