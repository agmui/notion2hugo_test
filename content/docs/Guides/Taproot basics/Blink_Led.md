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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EKS52WP%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T121344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWO%2Ff%2FBfjzjWklDOkiVwqSGu%2Fuw7nrnjNSdSkouDgVDAiEA34aCOe68IB8Fa2Zln2fVp7mH0r%2FTTZk0XfV3fAFGpIEqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFAtGj3tAoPe5uopCrcA6LBjCEximXvgowROaKEPQXigP5gBI8D9P24hNgxz9aktlAhqlr%2FMusAmbeoVMw0uc%2BFmQSOhKTVHFiuMKrRxzl%2Frus8lMqBuB8x4DTWcqS%2F4WcAQ5PCP7pp1mIWrNaK1ieo2SGlCZCSSQc5X%2BPndRclH0qdYqb7d1nm%2BwOv2TSiD7EQHUZLdRnx5A0nBjB3HuFbECn3f1OcoLZvcUwy8DV4kC0QIZt7SHKcXDtG79W28f8f0dmwnSXt2mMmJeCZh0v9z8CYhkZO00K2zgrn9DoayOGHIjjubF2KoEsSZ8qISrgr9i%2BjkOld1Jr7%2FlbH7wM1Rc1W4O7bI2ZbFp1rLZw%2FBHtOIzrwrsCKIdeQYbAuJv5RGDqY%2B1TrqcTuAXc5Y0jf1j4XENaFjdzEbdTTZQg%2FWWjU%2B4VmyE57f4STnq72YXVJn1g%2BYp7OIn5tNRUemu4YBmz0DllDKR9q%2FbCGTUnyZR9TZDIOKSjwxm84Z2k64DfJA8FNoCA2kOSfap30wbv2HEKncdAzc0C5BRsbA9mSadIA4wpoykThEY9t%2FPvko%2FxvOrg0%2Fs39BxYj4dBGabSW53PM2YsiGW8Aq9rPYk3N6yyo0nCqhnw6HxDGDukjeLEXBjW%2B99vHTDWOMMeTsb0GOqUBvunpvf6yzRs742OgGJh8cQ5xPNpkPhdX6WS3%2BHlm%2B2UyrE%2F%2BDXaQWcmlxxjYi8CyTGdwgQBmayNRG7fH3UAzfNxTauotvCXaIEw2jGQQYpkqRV72h5KpRcMcADggSmbAJZ3b%2BLfx59wpl49Sy5JJXm4pw%2BhIkJBKDpxc5yZ2RWC1T3sHK9Pp3Z15gpzqYWQ9yU0PXxFzUxcdKNEfvBtChq8jUKxb&X-Amz-Signature=3e8a78037ed0335c98e464d2d6d3339b19dd99e35d02dd75d741f1628ed4e48c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y33YDCD3%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6tdVC2SW%2BKJyef54vzB03QOOygBx3eIXSX2HQ%2B89wOgIhALeemQVYmqQ7EeBZtGBDQ38azk%2F66yh9Ube9HaiM57ukKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTyzgevF80G9B2gA0q3ANkLwCWjng1kB%2Bakuxygpj3DauTtivu6oNRQQOEcSieVF4odrffwKn7W1EiZ4FIfhs0aIdWEAVd9TmGlsfeo8Uh%2Bgnefvhbcs8J34dV5yIuczYpSSyrwb%2Bt5cceVKB66e1uhUKny7yLk4%2BI4kHKqUq3gV%2Fvi0ITmXkh0ignDDNY%2FodJVu7Ni68J0h2JmNCtAaBm2uokWTMHZVvjDTK3AD3HnZBhOxemjBKVbAIY%2FVNvuMJXCtK2XccDK6TYJgQW5F3Qn4Qaa6LAszB8VVsvkzcc%2B9OjVv6WVpy2wNl9gfj9HWUXQNeQR8TvninSVzBVrGVFAhrSxazNBuC%2Fm43%2BakJUTWaZCVn7WMwFBkq4LGV4%2B%2FxjVWw8mE5BrqmmPXNRz3UCiNo75F3C63C7uEtcdqrdrphiEsMoDndQQxz%2BMY6Fdm6kWeEjTVGGSrAQsE1QaOLVoKJkCzd0CYcJwZU5E95MUBaxGJybqdWFOWWusyD4lq6Eni8MM%2BlFH5stYjrZoAaNGjw2MxXPi%2BSHraN4%2FtwDgTGAeAPfwaBodP9PWeUAWjPp2dGdIM7Lj3txcdm6b0f0UWJymNTj0eKJBTvFbJGW04kzMBn50QOUxmHi9UbO48pGoHfl104aHR%2F3czC6k7G9BjqkAXwxRDznMzqbQDYR0gaZUZNT7lGGM%2Bt9Qa2YylSeWk1McGAks3B5wId5NKLenkEJSLCAeAaIb8y9wEgK4jw0OgMPJRd1hKe4NBAHIXEMT1ieP3lu5CmwRANMeymLIimNWf633%2FZQQPXagspubvlzneqrvahw3bWdwZz86VoXASeUFC1wjQYnSUuuQib6hu%2BWAAm18zZ4r1uKRTu9QRjEq356dndT&X-Amz-Signature=04d2e025cf9af06736f5717007bac514958d2e55c16f8650ad6ecbcb8455533d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
