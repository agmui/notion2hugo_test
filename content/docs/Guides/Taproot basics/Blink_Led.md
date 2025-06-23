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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OXUG2XS%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T140942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCGhMieQL%2FVyAVMaUVw8OrQO9h9nQUramdSA2%2Fo5Qi1uAIhAPhaaO6jpfZlpT9hl0OlS9u9J%2B3r49AtK7Jep5ACVGqEKv8DCBYQABoMNjM3NDIzMTgzODA1IgygirRBnrf9NeZ6TZgq3APld5uHV2JhTJNlaVYJ246e46598oy1P8cEODNnj2eBgRm0XA8LRciNleOi7v9JGINsIad4TUGwNlQw6CrmpfU%2BPCZbPLwZFiJ%2B7RldC6KWCHb26XDRMCD8RFlcg3AkAU9n0mWVqjZ62mWzbijpTn8ycOL3c48zfmZ2cuLvB%2FQkCmKsrBXJ5198L275FG%2B9qiFHVeWLRJWdnHmsyMb%2FA4PC5Eb1WTqluAwMe1v2g%2F6WA3n1XVtH1oQLKa3lQvSa4W6QfRVVKSc2N8mu7XNR3MPF0JfQU8oVUNurv4DMjop0VKByRCZyvc%2BGN9vn%2BD4TOAGF0G0kTXjR5vsAGHJRV6s%2FGOFU5vIzCLFQbavUA%2FdKyZNI%2Bpbo6b8huZIU%2BfmQVL2PDgor0m1z8%2Fu4Gd%2F8q%2B2ZNGU9eX7gJs5%2B7Yssoqo2lgM7jqA%2BI0jLdv%2FgyaR76Y0DBaCJuQC8btUDJ0on24Uq3IKdiRDr685p4yQQjjTW4rtb%2F%2BkdwknqzDc%2F2sVQmg8Mwh7ZvgmmUVeLeUETXtY8Z5MoTTvu04DTbtwhVVjYYhIv7Ywj0s5LIf%2FmfmJ1QKM7AogSknUlLjX6SMotRsyGXHtz2BK5zPv3NQ82%2Fkze8CN04fIcrOkCqUSSJTDClOXCBjqkAcAQqnO6BzgASGDgTcbvUGUF6wVV3AnZ6vTt%2FSZCnZNNn0LX4j2bV38BGmSg%2Bx9beitr7Ub0EgISw%2BrlGBL9QNtmo3esJk9ZzyoP4wioMJfU55xTtIMSBiiKC%2FtAbDyDarJ050Fbb8vxOPsvZ6zB8jN7fkd48l3lk5JtWBlGaCy0dUKqp8ieKJ5bscog%2F36tl7vW6xDs%2BNfi%2B9v90LlE7%2BKV%2FhNX&X-Amz-Signature=d8c2543093e32fed45a4583f2ca2e685b35c81e96558a988b390ff8d95c289c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD3O2RVD%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T140942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDuVRZHkZUhV8lSuT0owepCMpfcvWQx7%2FQmfNfRcZ6vUwIgUE1kibMCJ%2F3gVgSNMWHYIDcuQKbkdk%2BrJtxFUPgwA%2F0q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDALC3ei4TtQd1vdYRSrcAycXizh76tPPYeYOw3eTRjHtReLmP9D4QxKvnv8KNotYYhEKnlhRE%2BkM6hWjYynB0lej6ZWkoTbDytABrBC6ag3XoIZv5wesFVSCdW%2FCRG8U5ShTbnBSFpRSmZgc%2FtOcZ2t%2B0jGQR2hCwbAeZQKz3RtTOxe8Oq%2FoX7Us2lriEE4N5k7gUUaveIpBSqQn%2FvOGL8IWp6ddBBh9pcQWjlycnPGk0n%2FNtAB99fo0h74W93tAJH18mD4S8NKwpwxz05KHQYTcj6kmr%2Bdv%2Fb7gtSVfKJYuyyLWrwfEfAvYgj3DQTjPFwaBmPS3fVoZaNFarHHvX1IHlrKcU%2FwNGtyhcrrQ%2FGccJxs8NgYlJN5MQ%2BK23goXJFGjWntaOtAoRsknDweoCdIyJxn%2BmWEAiZs2pbiLbMtWopjuJXt8KgwjIGl%2FQYWgswFgDI6HhYgtma8l8vhp898vc1AuLunTDzBI%2FaTDgGigsnidbf2mvhLFaRzeAu64hrOLleI%2BAGrq1z6hAp4ESVmQHDMTXLJIk%2BvVUpwhtLR29KbUW%2Fx%2B1K2NxPSOj3GVkUJYX6o7YPWkyxnfxo8E1CgKNqRCfqR7WE1fKJ%2FOEQ6JZNpB8yHxqzup1GyZV7en50zrVTnSZv9hSA6iMJu%2F5cIGOqUB8iXZkkIY%2BZZTWCjXwilUFNBEN4Dt4vJRFWHU4UZHqUBBLh5Y0WTruQCTlBNoAK0Ra0rAZ%2FKxf8O0gQB7ScEzoc9w35dneUguzO2lLSk6W307DXqn4Ic8yISPrtPE6%2FDSAhYDBq%2FGohw4EriNBThjeppWUWJsT3LLbOcdCwE3EZMWlqamp%2FvZJ%2FDIJ5Wiy7JlxXbyWeaXd3i2mToQxAhVujKVKFWp&X-Amz-Signature=849ade2f342c74ee7fa9ca44038920d13e4511621575f39c73dee8910bd83cc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
