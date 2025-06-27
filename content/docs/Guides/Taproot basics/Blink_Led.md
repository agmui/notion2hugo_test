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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPE4KNLN%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdXhf6SIaHFERmkGGikzoDdkFPcPvDk3wwI4H2J9tWrQIhAMs9B3eJjnjEOxWqp%2BuiHUxeT%2FAsGqj2FEvJeQxXb0mVKv8DCHwQABoMNjM3NDIzMTgzODA1Igz68LO8j%2BElbA7H%2Bhoq3AP2W%2FxQEf3mZ6FnrhlVaENDYlowqheU8dEAtTQ6ilsAGBXtQR%2Fl6xH19dEgVrX2eM%2FY3AKfvFzG4Sq8clo1wx%2BJcQHAG8RvLFR0BDuS21oPMSVLz2%2Fx%2BX%2BgyRfim7%2BpD%2Bavb84fE8yaOVomIGBSTVXWsen6Hxh4t%2B3pFcGBq7lViL8w5SaMj8wJP3ovxGI0QpLqxvdLeGBBBMjBfVnEF9aVq7cKeWDvmjrLLkds4J4VPANIuQFLyLrM7b3qF4MYsr2c1ZQa45u5hwNdjciDqdMngzEMaUoFNZar45LAPIfZralT7%2B9xfiv7ArMCrvpVvLa%2FsCx%2BojVNcyaQN4ifJHmBDUQZ1YZjjHhZZkmid4NuG8CseaTYCcuOK%2B%2FYC6E%2FxCw%2FdT8q62uEnOAK3frU18nJ%2BnePieWNSojU4cge3EvnsCUKO4h28g81TDN%2Fz9OBpwjeWfYzI3urwAfQkNIVGcX5l8Zx1mZTeq%2Fq4k%2Bp3BE6O19%2B05owobmdYgQSprzP7HvgIEKaehtXetMKs0mw2I1FnG9jxweUjDp2qyTRUF7%2Fgcgx0tQtJj%2FXY1mQe9efswd6Pf2yOPJd6mOFPLKa3uxkQKXR6WmQbIT8niWrmBcp7R3aYxHH%2FvDohphq4TCtyvvCBjqkAexfLk92eBI2b8Q2Xddvu9RWoNgANuAJYqJJeiyuA9I%2BRt8dCV6JcM91mIx1Jvh7ofhNcMOaWgpJU%2Bm37xW12C90o8yHkK1G1dorcoT5t4Gg2YriAcbHYMRwkOv%2BYmjV%2FBu3v%2BaffOfbN%2Fax8NSUIJOokR0o4oMVgh0Mh5EEkp7cgOtn7dRyj9rPGy9Uu3i%2FuJnpBjHDnj5aAMsOiA%2BAJ0AyQ5%2BY&X-Amz-Signature=63c42d9196e840357e0742f781b7c77c36f7cab22dd548671431fff4c0d15644&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXVIAAB6%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDye1ygLOcWhSgKurvG5X6bzDO%2BQ5d%2FfzQymYjGurso4AiEAlz0HXuqgF4FtuQYkoYDh6qXdCD7DrPzaMJX%2B5nyBJVQq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDNcexcpgk8iFhPvlryrcAyIUQqJnXCVym7c32f3i8vagcD8H7JUZ4ZTE97ZEtqnAtyzOMo4Vqk%2FveDw0scZJSUZQ5Ezh4dXcye87b8ThBhxux56AkaYqMt8Uv7qa2lzCgIBgD1eMgjPLFFkZQJrjBqlWRqo0XoCTEiPVEuXFrAKzgScpTewMvQ0qlttg5po1%2BL32INH0k6FINkSuB0B9hGNwFIglQx6pLqnLtd%2Bl0LVmrHM2C6oX%2FFJ5OYa4V0Zu0FIZQ7OlenbZ%2F%2FQz8v951o1bMoz8aLTdmaF8PEIlnf7blm1KaCULO8bRyfGZjE59EGnc%2FNPkT%2FgivK9HKti337DxclkB9f3PddN2pqohomgNGDFED5EGHusYjrx24cIDrfzAZ%2FhWFrc0V1RZarUAjlW%2FjiDxv7fDSyl%2FmKJ2kO2FvUO2ah9SHILTRSwBtQGxONMg%2F377NdPpENrUWfNRGUtl%2Bm8MWJTwQOQmf0qUevOII5zThB0Cwy7yHGvy6fvR68tJxsTnuovcnS6ICS2UqMreZeZGVOMWcU4Vq%2FJ5wPCM49ou%2BPy8zlrNSO6oU%2BYFatHx8ZR5vztt2k%2BhLZP8ubjODSQoHWYEHGoFxI9vwlpeJkBBU8vt6ufSuHIaVfuEdW%2FrYXGHqTBCVnszMKbK%2B8IGOqUBF8abwQ5eUPgG7zFs%2FLN%2FwBMQ3qnEL6qAgg7orfzuRTZoG6W9HM%2FLIPC9vWscLBI1fMP1xBZLRwo%2BpBopv%2BjvePw3tQ6Vog94hFR8ryrHo7dinXZHDeJhS2WrhWQepEutQlknPWrnavIvBc8GvKd82m2%2BuW191GeprlyLYBwN3i6tnNEBjXbC%2F91nhPOli2ks50On7xTkYuONUc1YPnWmQ50xAvjY&X-Amz-Signature=c6e73367d364c83630027bd5052456ce962175b7a6c3727a6fe60d13ededdeed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
