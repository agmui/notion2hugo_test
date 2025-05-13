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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LY75PYP%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T190657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQC%2FLsl2pAcZs6LBayTYZ7ricA4tWH%2BjvXtPwyy9ZvjEKQIgY4nbUhwJfv9DBA7xjgFdv0PEMW%2BWED5xEpiPR%2BCPbhYqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGtY4xkttB10lZH9HyrcA8aN0ifFItPKBqxnLgsGeghA6huHj39oGhypvbewRvgzp4l7VMUMyRpRg9JFypaz6%2FVuCELHU%2FE0ricydTov%2BZuQcfVXaFeQvFRa8%2BpDxpAVOZSrWup%2B6Wnd9BXP4jB4l%2F6ZyFUesQ3u2EUeDomUyfwY4cx3%2BtFsV7aFZhvT3Ww2NpCCiRqRxj3W52kzukA6yo%2BuvuT6s1z8EAQfbVJ0%2F43iTxdLeh3Ji57I6KJIPPvfoUJJKcGJ%2FNWaiIu4CEou%2BNk0WjHkR2KJwy0QOE3091GXB%2FRY2XygdCQqX87gRKI2aZhEDYtE0AIcsyl2yH5z4Iw8zRWCul0viyjixKbuhdExeuB5zNzC%2Fg%2B58DlG3HilZLmuusJj59iKVfPw4DqTMXHotMBzQ5pvjq0RKaz4osYajqm5RH%2FAnvjDwWzpLq9iKC85Z2V24isR6S0Xfyh9HeNfQZZ3WhQ3FxNZ%2B9cs1YDCvmcT8uXE6hWG5S64sahsYVURPk78TL%2BGLVOZsnW7jF%2B6tvvo2qDt%2BRNa9G8yCq21xra0F2uhsbOS%2FUnxChHo3ExrXu9C3wQwOAvCoHIuDwFWUjl6DtmeIqA8TB%2FmgRkUIaMtVocCy2ZqU1QXlAgB%2BQmjpsUB6NF7Yq8RMMGpjsEGOqUB0UEPGUsaaonkH6FOM5mjvRhCGeg8IZ7GTOwQ9xqCoEDpm5qS%2F2Vwv9QQKg6EhdmBICL2LNpr0b9YToyeaQo2rA9xl1lypwJRD%2FbgsMf3H6MTyNA2L2bvJ2AYSyaTGAAQ7c3WszshJd1%2FoNCdDNSEOWe8ZVU9ZOfnn42csXqwDCi6up3hSwa%2Fp1O8gzU6gHJdxhD%2FNFIXofPz0504ir703QfURag4&X-Amz-Signature=f202ec696a489989757b19abe61dd6ad79beb39a2fec5907188967dfefeb7c9d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFFNREZG%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDZnhr35QLm6ahWqfayMdJpgsZw1kL9tpWwECXbW3cL%2FwIhAJ2NpAPTkiJxnODV8oPe8Rh7iPg3PjsNZiCpiNBtYc%2BIKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXfuncWWFhZyphScsq3AN0Jp3wx1i0HFiNMAdLZLwVd%2B9FyDE0Tf0EWQdg%2B0SNZpEM2%2BiaHPRr6I5AtHTm8r93fey7R6XHxA%2BPPiIloqB7DG7qQPh4p9FFnos37x%2Bs2q3qQyApLXYTgNStda4MUUfDqx547K1WvMos64VDzM3UViWM%2F7XFnizS%2F3xyqjVgmE5alrnk7DA7q7pE4cl2a%2BE2Gd19j7kyqYpz2HPrdD1LkEfA8I%2BxtUewNS%2Brk%2BuUaET1eqSp%2BZ0MsQdQLxrCDM0se6%2BREQCd5vEC1mFf8uB4s%2Bwe%2ByXtdDKpckTRfD50qNbzyTYQRHnA9pXicmmbyTORXT9Vx%2BOojkJITmqy3F5MwB2Bekoi2m1ru0gLGTkKUW%2FApItXrFK19VVe56BTQjO4KGOxecsQ%2BzPHM11Dy%2FtkJFd8o9IgDnT6HqzA28WAhH8E%2FT7%2BQVWz8wYkxu794YuJkcoyoc590McjkH48BHHjNlZsirW6yGlpzEkjUm8Bq0iQtMOS7FTNR6BEi8dSuF8JK2xFIprXDZifn4Qr8uw7nOLnaZBntgWAd3gL5EvoVixEoUWictXxF1XvzQ9HZrxgKNSyLpos%2Bn70pwbYEcNl1A8VvZ1G%2BBTPIL%2FNZToiDyeZM3apV%2F73xEswhzD5qY7BBjqkAXAkwSJjhL1BMeHAQvvEeijCdwsSEMh1RozzHtioX1GU%2FVgkBilYIHr1ZodXHohNDWtzncRjyl0NxZ93rGy8AGZRUbWM%2FvP1RbTLeIMiCSZp9eMeA%2BMU0OSCvIVFCAEBPLwKQ%2FMsou8A2Sx7LcCaouhKhPLDwC%2B18DBwGga%2BYX0LPzvENdoPCGcYa0HjWoYT3B5rQI%2Fnjej65bW3wxNy8MHVFTJt&X-Amz-Signature=b0ef2571e2fe5dfb939b8693d30e847b7163ee8ae41603252ae6634df7e3fc4c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
