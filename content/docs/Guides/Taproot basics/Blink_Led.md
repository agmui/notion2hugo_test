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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XXGTRC6%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5UXk5VXgBBrENCo2QvkKY6macS7GX15vnEA0U4YajbAiBPnLVM8WYc0HLFO4mvzvUWmoYkJ34F8YZYGCIrvQ8S%2BCr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMngpjvqkU2HV2ew7HKtwDBv3ONN5ZrwnYfpITg4iSV6r0vKeQ4rfjko%2FW9rwsUs5%2BW769ie1LZ%2BxJVddne0xA1sL9VcgEh%2F6MjNB%2F0i4qsOx3vEGgFNmtsOnrpBjjrH3X478sr2gxQqcrn2uheYzV1bhQXurbmmuH254WoruCV%2Bms7nfK2QDpyTFf%2BZ5f6ACBT2GmHsU%2Fe5yqoLWmdtyy6WMEmIY2ImC0jcnNnCDLjcHxODYqC792kREPrHNJd6k4vMVy3IWmhry5N9Wk5WF5MwmJ5erlCDfMqjLInNM4HrD5BWvZU6ad2HlND%2F7yCGeIg1T8od84oX8lG%2Ffr2mjfzO0sH5GJWzDaSKnghfbe7IiSFS%2Fa3%2BkIjG62GqJoJGlv4hi6Toa9YD9kC1o%2BNBII1WSLiHaNQwcmbbWTejuLmV2TX0zyBEHAUhbShOHZhl7rQmASFl8Ysyu8bjd%2BoH%2FPEi%2BQCxzRrZqcj2w4E2jOzFS79Yu3jK00ROEq2sjs%2F0oLksNxD2ILuxmkFQq0relbs9tIbXTINiaZ2tX7FJ%2BrQmVM1DqsXO3UxTpSfX7EnEniCB60VsmmCRRs%2FFJOiX09f%2FSFdy5Fqf8w1xgewQMHeAktHebQXmalFaMorjxpE7gU1SivyW6t7TW%2FHZEw%2BIvDwgY6pgEsJtNcXknNNviMWzKDjgq1%2FiqqbCtBkYOQUCZdxE9cxW4rkK36lxqhZ%2Fx6AS34lGE56rGFs9AmKUkQdQA%2FAK950DuWL4WQ6TCAz6SRt1SwDGb6AldFL3LQR5XjUXlY6DrfMMZLvcdtIO2xfwvjxzEe0BR%2FW3sOBZgcjThKjWu6RcmTR0gK0zQF0KE%2FTrSBVmnjOqW88OAaQ3LfIma%2Bgc8LDgcVO6%2BC&X-Amz-Signature=9adcb1eca78378e29f6827be5635a3fccd61edfe83b3e2cd26f4241cb2c187e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CH22ZLJ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMaPH70yc2dw%2BmuYPT8VXsp21JzPKPYOw3InSpUtgRsQIhAMri1kXaUE0lS5povOh1vLPDH%2FYm4fwfUsRyfmEypmAPKv8DCGsQABoMNjM3NDIzMTgzODA1IgxAgoFSuAHNXFG8oEcq3ANJys%2F%2Buo6OLv%2FiVxpSzV4RfTITnWdm%2BMF2bneAfndSCCTksWhh0rI2zchgGOCrG7cihEdbVLWYK7x%2BTOsWXmzVxMCi4bJs9hEK8dDEdXcwQfXDI14ipXr%2FSeyJGmjn0qwRi4pM5wqRFJZH%2F0qGRIFlJSmfK91QljG7hQqY7Oo6UlIhzevHxTm7ZNHvFqZ%2BthGH32rRx01PaWqvkJ0PsCRSwOjRsJyodXCrE9xFuUO9EUAjOOuxfm9lCra47SqUFqDYTMe68QnrVMaUskIaUN6w3jIOis2UZEvn5WgHCtftOfRMO4AAD3zHb3zcWcneFKKN%2FW4IKiz8XlBMWl%2FE%2B2%2F%2FTNHfPmPuHBntnH5UpjKIUDXf8flCUqxbh3Kfox6VJTxMQ9ULQvP3%2Bw4BdpMNQDOq%2F7EHfrk0GdyXCQUDME0oC5GCNEeUHmwDOKw2d4n0zS53eYI7FmAnlkulD%2FglE5Wz6lmjC6ekMNm1x5EldFkt0ClUwshs4wAnqsYbfN7GmMEzCE3ZWUSz44mFgA27BwfIZHXz7xMhWZ%2FzAPgGLkz037G6GuypZTJQqs0B4LigLZOqWwQ5OZPBS6cnJNJZhIJ5vIVyGX%2Fj9hDkOySXIvB%2BvA2485HK%2BS2iLrDpLjC6jMPCBjqkASBwHpX%2BseoSBXAa6Rqv86TWPM3YK8TIzVR0s5xVItv0yCNr9eFZhPgyNjc60dihllrqwdUDk9D2TYZKarqFVMXHFSxKWsroR%2F9LIaD3yEXNXZ4FK%2Fy1Z399ev%2FTkTV%2BcTHBEYEtIptvElIl9KsMbKGSnECAiH5tJkyTif75%2Fgp1t22Xcss0R33PEmXTiRJUIovTYizL1dxZcQbh5yG4nhrwHQUK&X-Amz-Signature=15972edcefab4a443d2265d0d60a817983542d768a090e444634b26c07a97fc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
