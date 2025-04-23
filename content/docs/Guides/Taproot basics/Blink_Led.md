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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGTYWLE7%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDRLCG%2BgRoaKE630cv8vrhkNdd0rXOnsRkVD7r6%2B%2F8ocAIgd5IXRUJyuLxl9taU4rBRm7GjxcCEbZIYLLIkqgEu2M8qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEwbQIlFczIItF2w3SrcA2dJXRLW1PsmRhBpOnFcthvvb36i0TFveSzlaTb7SvSieoNbL%2B87X%2BCD6BkXBCqw%2BwgVlpmcm0iH3cqAMoU2T4qFU%2BKYEKc3Qn2O8IiM9ONXTSkUaaGxafY2jHDYxLaiTJKYT1kuk8EWPy%2BXSGcLP4zNAgFdn3GPJVRBV9NLltTz2qTVnY1ykPIp19iE2p6H%2FETKfwB5xrldCY2ahF03slrZW1JWzMheFqmByIwZvkPVe4j4%2B2Iymg9uIR15EulX1AWTX7xH4r74vYaW055lYFqW2ZuxgsXdwDdjDd8centWrGcZJ6k9lnEAzZ%2FUGgWlUyWUCFwfca2WCZtBYLZ79qrP1jWY2GWozkimaVd0cm6gbVy6s6EujClhrCE3Z4u0g2ofSy5EY%2B2YtBKbDD85VbpQB6gkF6hnpBVTe6RnsQ1JndiCWdLgwTcngzDyqjnKCMV8IACTkigojE0B8PPwS5%2FMwpJoZhwGuUCbvzrscg6TIB3oXp9%2FHeFB2PoMkNTPX2U8u0rFsAwrGqAknTygYkcSfz9UPEMDLpGutUUqJT8n33ewOWA6tzSwic5fIMNJ2Saomqx%2Fjw%2B6kA4HumZiIUnmCdXnnZ0%2BS88od6sV9AxIg8%2B96sJFZuatPxxTMJ7GpcAGOqUBgrLKmOngb1Ri9yWednY3YabZxn9lO%2BGiRm%2Ficgz8o7cq4C71khXFFmkQ9s1NuwJ8QsX5Nj2uNusv6ZrNF1Zw2F6lBdGThjZGCiLVGr8X5DX2UgWPewBsaBWaGjTJjKHOv4QYUFX4fCKEstHbChKwY6HLNXWgpWfJq5tIrGJBsL6fs2AyMEyDYW5dHWePhXJQs%2B%2Ft9aggEwZJlUnQd2etdsFGqLup&X-Amz-Signature=dd4a480b4e150be7a9b24c128f03a24a04a1a0a92e58f17cfd3f4ae59b1f0856&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7L6KR6L%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCjgcLB%2Bc3LFtku2odypwkyZhBBHU%2FNQiG%2FURe4y5BtAAIhAMagQADW1hMIrzN7RNEvKKHWzDpht9wWnB4Gbwqv01aLKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHat6NX8tIMUseV8Yq3ANr%2Buy9FIGuQXDUnPp%2BzUderAzjwLC1%2FJuQzajSCdaV8gtUaalUT%2B6ZRpGKbG96Hz1RuMQciUTzH%2BZApvlfOW6utI%2BIhe78gGyijxXh6DppzKtPDbb%2FUqPqIKZCoYdNEnK3U6DlfQ2Mr83hizhToeHzYxkEdqsirnZ1aLkXtgxe1S52kGBHdPXaiu0%2F13Fx4qECG6o77BTurrvIiQdw4ug19hkG%2Ba3RnxFdYVqRKL%2BRacoRH2NzNpaD%2Bs649dsLRQVw%2BAQOzc2WzCpC7aaaPwl%2BZYciEWoAxBG6jeU9nqCN9IvbjfO6dXOl9%2BLxeIu4LGl2rnJ4061JTeLUpHPdf9EYFIGRwR98%2F4ajUHismpwpRbLxdhJ9iYTpZjbiRzjUO%2FhAnUYBXfXFI9djjfCj9cqwalvn49fTqJLZ86TzrXjPvH%2FmrG%2FRKkchexBcy95h2KFaHpFdCKsSGXqFYQqNVQCh5Fjllg6J9gAbYZcADsSBcHpqE0nkWQog6EJ7yMIjdvlxwG1Vpo55QcaRqPR3tIe71Ju9zyTXNEnLBpva7fJff7YV0zo4kShn%2FVyuW7uzBXX%2BAjm1deuY%2FPR16XsRTqOTKch0VozkPDzR%2FNM87MzvJQlt1RCgJJv%2BfLHJpDCgxqXABjqkAck1IIHAsv8a7AnXI4yjwgGodGW7%2FqTBeaSUGI2wechkL1iF5L7WwPuvDHSB%2B2QEh1zEFq5g49kKlBGD658yRBfPRyRNkeDYvH6gjeUPpSGhV%2BauBbTRM%2FPwHJMI%2B7sfYO%2BQGMgKn7eDBro8%2FkMStX9knF%2Fmza7L6GtYsS3KEPmVtihUmbXtIjHJCPu748%2BlvkO%2Bo261xR6ZGIxuI9qlOoUmYnKB&X-Amz-Signature=4529da4ac84fa150201030e25925f5c21ae4fb93049dedc429db7d64de43bf83&X-Amz-SignedHeaders=host&x-id=GetObject)

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
