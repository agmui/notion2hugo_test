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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ML5UZAJ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCwWiDPf1%2BVdhmcUHhgIQIzprmNclx3rQkL2tOV9ddfkQIhANV8CS6vY%2BUTbUcojQEgK2FV2rRY1pkvbNp9BrR56YobKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzn8w6a9y0JlYxfGwcq3ANjGJ5IDj8wXNGhxm8CUd2%2BBYIqAUqi9D%2BbGCMeJjlemd%2FKDBofWnMOZ4LaXsTVNOKR7CH1NXu3DN0BRE95JWDpXiVm1uZNrWOlMd6AOf%2BRq1X4tQ8XyUqNUzxpXAa28KcKOhyQCBhKtV7KqHNybxrBodGkRbA19m%2F2xzXWUpJdlA4LrQMjslXx056yBB5mai14DlGNGMDzJvOxi%2FUt1GBnXoypc0hT9Pr1tktqnzSwVUX7qq5f8cMXnZr1kDfqMyj9aCGZvz91%2FwP9pNVGDT4N84688OU1gtB0YdzWY34hgCaNXt8saDX%2B88gdne6K%2BBhO7Cw2UIWTbB%2F%2FAiY47v1Bhkb3BGKW2HWT49agBNLTfJvksOlspHgxcZaHrqODe2yOuA1BiQJ85J0ZfdbpeeoGDx9XqcEmdyCifyVfcaqo8RIXbpb4MpZv59N%2FaVV9Q%2FhsVDsFOGlmWrEIugnKJGGA6BgYh1L6HOK1blH40PvYszT6bju8fxms4eGmRy61KYsquoIv6B2GSC0fn5hUvbN80YOUBPDM9UD0t9yB9N6Tn7IgW9cgB13Dt4i0o96q5Mx1PYbNjF87pJiu2h6zGCgpR3pqnsPQm9jFP5I5NZPjA4N0tzS%2B5pWB0VsrMTCsxcHBBjqkASuO5NPUwpBte70do8fY3yJfS%2BROv7hUD0werg1tvuG4zv0OMUKEp7OqlquhiIWO7dvC5wKrOgO5RHm0ToI3DKeU0WHCaMSBm5ERPf8MezS4eQ1K42m7O0gxxKuvdsRxsd%2FyEZfYCirjhlUrDY2Ft61j%2FfBOxRqcq%2Fq%2F40o4uYz%2FpisRBpsDMMpB6cbWjJZwvYqhNKoWlUl0bXV7PngmykKkMSEA&X-Amz-Signature=a4eff1f5ffd2b2e75e1433e4841c04055e4bad54a93798a20295211350785cb7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKYOLFNN%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQC%2Bs8LNmas3u6JsuqQuV8Yu7x%2BcLq8QklAx0Y0HAKoL%2BwIgbZGgcpMqBCBvzDmc95%2BXJxv6iP1OTmFtCF3jfWCAbTAqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLd1aV8GOuY7E1NX5ircA1CcbfC5J%2Bjtlkqe9brc3dnrZPjNBkfzHWN8Z7HP1tXBEBGhHK7reBFvQBwY18wKHH64pDITw%2Frm58Q%2Fd0pdSh19u3oW15V6U%2Ft7L3goFnI5IN9dMqT0E%2FuMHHhZl4BZJa%2BWJYAgxqAb0Z4g4srJJUsCFXxD0sYydFrSw4X1VlHMYdNpKXjdeRlfH3VmXiAKaPiOWHSI2HH8tKwkFA28Sl6DEyVWI4BrFcmELhHMfIGLOB6mGdT%2B0CvOPnBEcgkCrG%2BvFa3KZBKilVM1DZNuxZab%2B%2Baty4B5mVNU5WIMi7UJepVTysX19KMF8dXMBq2vw8p7R3vr41b32UWIOZZxglA%2B29VSxEizdP0cdQDUsLejr8%2FPxqMoUxnwzBUmr27q1b90P%2B%2BM94BKWAO%2FQvavxOKgp3ZpGEHamTOv8hpjYilL3lQBDsbiv%2FbLIfAUoLIcUR72WSo6AuqNxWQFglyW0ar4K2tiDPwyCXF4kdGQQtrds8sg7ZOlVcXg2Gns%2FFA2082Un26Ow8uwmSQJ9dLkAC6SWIREqWknj2Ixhsqm7n5hxYcZVBDmC9pfAKrNROMIm3ulXnd4xwAy5lKhyrmk3aL6mEAa2UocVt%2FcDnmWC2IRk0sX3HRb1ZCWCgCxMK3EwcEGOqUBbK5kLJOOD2RjKYlr5VLTZ0h0VYhedblbUi0KYsXF0%2FscfO9%2FaI6SpPtTNztcTdvOCdoB63xFGKptV1xabquGq7fJ1UKYXa0Bt52FLyLXqtrMDW3bBmDVyWVmHpflLXF%2BC0z2bvwTJB8zs56BzKyTQll5mHoNtift%2F7nqSsX3k96hdywPSukvnboQvW3UsEAAyq%2F2%2BKC3CVW4UleXUGQzFEvo%2BRTn&X-Amz-Signature=51575288b8fd1a35ee80b0359e4cd8c444d54d8bf51bf168e20feee33b03af5c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
