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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2RLB7V6%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDxfvvzuqcH7V3xwlCwnx1uABYiTJpfkE7XplK5gkckBgIhAMCPKSXCmJav98GJfj7GGkVk2rWVH6vr11UC1dGU7tbNKv8DCD4QABoMNjM3NDIzMTgzODA1Igz7HXueOfG2gbQYgjkq3APU2ly1lrepLzX2S7%2FwEO0Vh2V60t%2FSFZzzBvrykKehrpZnFOifLEx9ZzzMwPC9NKcbnR7zscvkvcugO4ayymbDUXG3SUWhgsSBgJILkyaDznYz6QLQwVac1sEWzJDrMM8QK7FHAWFzV5wokk8eLX7AodKR%2BJRBSTN8EsUIjdlx1vK1wkSnOPVpoVXohjzW5dFWd6qW5RB0Zz236jmvKj539brbCEaXrZVnlNnftPwEKQ8U15WJQbNWZyPl9NOVIFR8xmWTD5vXrD%2FXoyNPIqWsftIoPFpEQ4MjyY6Har1xUBa6G%2Fb6xVNsJaYlTd4%2B8egyjN%2FwQo8Qtoq9oE%2FVlnmU2kIm5shACak9%2FMk8pBgamKCOo%2Fl%2BelGb3fP2Pe04qh2yuxFzDQCmlfhVTNYjOKUVy1smvYqZCoiS3hx8HycYMjKpvj%2FkssZOlXR2NSrmtg4JisaoZ4kGaR1ZbzgJ52VA4%2FyefLnGEhhmV1vzQb%2BmpX2CeaLgaC%2BuL52q8itePB6FmfihpzSeb7%2Bq0UvLP3uWjIB4bY26Cf%2FxT1pm5MivtUPufNF2Ss4QmATiVinLXP9CRu57q0CiAC6iPG1a3X%2FdGuySeWZtHmf9n3Zeh6oROVTaBvQh9dX4XCpFpjCvqbnCBjqkAaRppM%2FN4%2FVSXJzJNQ6Ud10JTlZsSHo3igLEFj3uhtLFvi4vXzUJhu30%2B3kbMI3bTh9gZVI%2BfYgiwg1eoF4xwIqXwv2RgtJY4gmeoefuoFqmsR%2FsE29Hs6gixKSm6Yw5tuR3Ahm0%2FUOqGtftiCeForJm5DofN5OX9NlSfLTqRrC6vphmD31Y771FveikEVPXLBguAJ8cr5p756F%2FVquV3d0QHZr8&X-Amz-Signature=235f99a637f2f2a78beb1b6567a5cfead315d082cfe7d8dafd507cb964b8c2b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B2OW6XY%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T050914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIFDZKWRDvFKX%2Fcr70WLGLgwTDnOMpggSMs6mdn56ETGgAiBj24J%2FMneL1Xf0NcpKxfDSssTBCqSAVhimzBNcazPM%2Byr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMPgpma8qg3qe7c1IKKtwDUXyQfq3N3z0HHcTX7nRjhFZMNU9Nh8fwdK0BxchGnYBigR5IefThGE%2BCbJzWeQ8bchi7RBQL5ffCFWM6iFtSWmADLrJRVvcNs%2Fvk8K39YY5B1bLU7IdvopGXCThgoeRopdE4Ct8CUhCSVtyFc0r75to5qmwIkboYs7eh2wGrF5tPUNnVPrdIKQkBN%2FlWkyCnwjgWpdMv8%2BODljlm%2FTWcqBLvkdLAYF6P0j0GdHUVpAd3BS1%2FQvbRzIHVza1pE0dby%2BApNczIsrOrbAW1TynKMAjUzCM0g%2F8lPs1LFqfm3CEiteDkXycT%2FYkmjABcM4IXammza%2FPnlGeJhmcnR9sbzI6IvL0AVOYWLfoXvCwNeKdTqCE4F%2BFOo9qy%2FvIHEDF5xciUT4n3QaVUJJQ18ReQh2y3K6%2BL3wBZicM3cD6P3k%2BgT1egtmw6MX%2FcUpHzHhEQz1rw103pVhGboP%2FN9Kd0VYzK2ZOE3aLuSRwsBaBcV21QE%2B1eE8x998c6htEOo0o%2B4l1%2FnsGtzG5xdo7VSv9lA%2FO7YkJ5O787wByab7muFZwlUE1%2Bwb5ygBwvb%2BFUzF%2FFPTLYatcnr930qXyWewlnbvWIix3%2FIIa3RGdP9b8rIEbYf%2FMFSEebKytSwYwwhv%2B4wgY6pgF0hC9SjK5P9Z%2BM4rAtOe%2BXUY4kqG0D%2F5hCR%2BN1lVv4OuuTr%2BHKCnczEgkcP0Mz2m8MVJQy8e5ET3k9IfWBalIWuupgDB%2BrC4QtIIpg9nWIoZ0nRSy9DMdfqZphYjeaDnQkpwaiMzKT9JQv7dWDR%2BwJkEtgg3c7OwvSs61un8MGm7kDdI92hM9fLfF0jL%2BZY12N7F6YiXGhrimt2uEBkov8fLk%2Boj0J&X-Amz-Signature=d106aab4958f4c4c811d229ee2220a85932d02a05882e739b00b115813e68ee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
