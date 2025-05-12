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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644RTWTI5%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T230817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIBdD9s5k0KEcnM3lAvegg7%2BXBzYQ577szhrpZHHuRdyAAiBEAq7Izk6C5%2FyfFNVGWz6PIznr2YHFxh4d1xQai8QMtyqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNP9HWNy4qknoxiMCKtwDlWJE7hCxnJw0o6MjqvlQ0iLm1f31s06DpGqVw5wU1fO8hlo1H1bj%2BF6fVk8OyT8HNuHPPTPnGOF5eFNd7axKM4qtjXrLZMQdJ1NvMfz1dCfXsm1zxYfx5YsirZrsHFjhMWrc1c15KFVLUDnAyy2kkkFNLdSsXAfZiApcFLini4eUJn8Q7Jx%2BSl5IKMS%2Fw0F%2ByOCuvz%2FNxjzJ2F0Ahj%2BIakkKM5Qd7KSx55W5Wyo9Q92tvk7l43xj6pfm8fGnRE4aZVgQIA3s%2BcTjBOL92342n%2B6%2Bhtpk2i%2BibrRmdZn8HsgLI54m3G11Pr3T%2BfkYQUfKC7Z%2BLgZvtKTgpx7K%2FOz2d677ideCdMRAVOshIiTwHrtUH9cmEQf7etBs2iIyTyeIXmk398jNU%2FF1zLyMcOUhMrQ88QIviFTDYTfrLzIKYlskYqw2vqO2Lwug%2BMqyxnZkKFPzQH1375mlkvHc3etGZ1OoWs40BkyX2UbWU9%2F%2BcY2HDydn%2BqvVIYJ8ZNYSIWzmn891ZKSr3z4yAiDiSuoi%2BVW4xHx2ogpy2nNhDw09x6Ud5qAf4ZGchFyD0WEK%2BnyTzv7T7CxWyfw%2Fzb1SfBhnW6kiOk4VW9BUnHxF16Vh%2BYLhZg3hoQ1COv4FAGgwwveJwQY6pgF1mWGLV%2FtVdarJlDCUC7NKmV4UMK2ihcsYYTRFqjw1YYsFQh06F%2FSQFJaaBP4vbN2hX9cQSjDT6OnXoG%2FmnlvxC9CQmn4bWfu7hIH7O4Gk%2FQKbHN1hBLPyi7HugHSYIwa3aV5aTCelote3TQGolloQ9dOrEwVOfiLohw7p9UtmxdjxS6gTIbpore1AZAvwhH4QKLdnB0VuzEIoAJqPjjImVWWQaTw%2B&X-Amz-Signature=aad9b91e626e76d219993699428a9a6cf112b13fbeb89138b5d39ac61c88ee66&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTCZSW6U%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T230817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHsAsSZ04odZm%2BpVW3QJFqGuD9FeiJUayCqaSqkWqXazAiBT8NUXAELDbSex1U4pNnRPwfUJ3nlgeS9lnvOI6D%2BzaCqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzZNqOHLzdrqJDTnUKtwDqqHTEuC%2BrB6pHQwC35RFcaHuEzq3Wu%2FTXPjvvxy7%2BrtVjWsdufqrm7p%2FVG0q9%2BNquJTM%2Frtv1l5vmg3uBZaVQ9%2FAL3krkr5H3AbjMouvUKgcs4HjoFatMie6W9El0%2FKCBFSKD80wCC4r6KZyltBNspmGoa3HEElzT3dGexEWBcCSr0hIq0G2A7HeEPd%2Fe5nmlqc8guPYew6fElFkK6a1%2BcV6i4iRCaYfc4z0oy8ML51jocSbT9bvf8XJGFUSFJtodbbZpBkYWFE61OpQBy5udyNPjR1Mm2eade3rE2wbPZ3akFgvBoFBxSjccOUpO5dfRL1Xl2%2FxdGNmk47ShsmTOyji7XeiA1H7DZf%2FnsoZGtQ4KGUwVEIAEz%2FadZynNk3IUFSC4dUjQA7dfnfHFZ0FSzcmkhoNmmxR9G9%2FkjZtlpj4TWKamHeyZId6EfXtDj6vIyLHFVvJTS6ZGkl0VX6xNlZL9qV8SxF5FtulpR6bEldmq0%2BOi2%2FXwG6M%2Ba9h1PVtm6ZlN%2FupEbh9JrP71b8%2BWd1v1NH3AMTHNa9IOT9dJ7zDCV%2B4s%2BlrPKmq%2BgyWxsubbUD0hx3XrRu7%2F04ZSFyTP26JoQ4yim6%2FgwBbGZ382jOAsurw4hA78r%2FVtMQw0%2FeJwQY6pgG%2BpgCXPrdgth1bTNqV3S0SmXJgVONhvv6%2B1wfTnqe5wUSRYAT8BHMXlZt5qbNygUBeVInt7A7%2BHnr3iU8VOHbljTwjcUdbkzBZQGDpep42RX7vtmMffkaTCmtPyQ96Z4xGBm7vkNBk849qUxkzSTEZFb1dQh%2BGM%2Bm%2BxJU8y3x%2FDXPMMlf0TfMVnKqqbLPgejh0DYDcGOuF6FMX8NPpeybAUOO%2Bk3wv&X-Amz-Signature=b0965519cdd4e5e7912a0b3d2dee28e0871a33bb408e160d515a8661b118f1be&X-Amz-SignedHeaders=host&x-id=GetObject)

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
