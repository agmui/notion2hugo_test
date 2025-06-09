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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YAE6V7C%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAIHdN8TJ4IP%2FpRkjlxSeP3q48YpYmhXvLYGb1FU3h%2BMAiEA%2FLwa73G9FbBW59hkfXl5ORVNcBYge2WLBqkIRafE4wUqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBl1jceAluQRrhbHIircA%2B1taiNEbPNrdKe6xyyUQLkEQybPYNWRt75QnOMM3MmG%2BXoLgpXh6opE3IV5aGhb9jyROlMum0vf0K4vI7GB6CL3dV6sN7Xa2Rct3DH%2FuQiPrPn9WpV7qBPmpio1nLDjVdH%2BTNlW4rE8oSw1zBlZVc8UAWjXWjs%2B2lJFBBgn%2BDJpPsF4h2FSdXqHwcdvTkgLv%2F3HBrT8q4tJCLTyGF6WytdH1xpzdsJLrrX7ugk3%2BnzXsxPGFJFjBAuyM7ay0M91uPgbnrIc4iw%2FiG3EYjffdSA2fGFy%2F67rRsiQK05cScqtOdHgAXcOzaLLzFmr9hizry8rQIkTZDADflHK5Hq1gnXoFHCX1e%2FKmt6l9xyeMWpjH6e1zeKfZLv7cyauOHpQ9%2FgH0vFb18IqEtmhXMu8AGelJhKLiHioYg3fVc76kJcND0m8vQX61dhQd7kOuW%2BK1hVC4XexrFZGSJuFgK6vVrFjv1JdQqMEM4fHhAwexOvoqh%2ByImyPtatcJbwv8XPU9nc4Q2nielWJZPY7mAukMXpTV11%2BccX3X%2BQ9oX%2Fozs2vtqq8cYkhhI%2F6vEcvyi2ghrX5e%2FFCqQBv%2F4Rwbi40inoAaips8HAVImVyASzHNAPqX7uXTpMbZ7CerOJJMM2dmsIGOqUBXrcqlwS8TtRzq5NnfdTJUerO9e%2FknfXB2PVSDfCb4p6HVvoxBkRkgRqVcvLOAHVvzSWKoET2FSFNlMzZuQxUKo%2BsrPTKu16sEA955Uw2l3p8ecVZQisRSu2DVgFQ8JuLd9oAMe70gdEsyu9UIRHHGBIE61nQymsNongiQarcpQTuiikJRYsfkw1%2F32Uq6KHg1so8lUZdHnvJm0LRuLMP3B7FFxnE&X-Amz-Signature=799cfa1a3cba323f38e4e5c259dc26fadc67c9683059f888428bb0699c6a0e6e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNUKT3SZ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA8Gd09%2BpyjFVAR2c%2FXhc6iY4CxHFgp7YF3cc6qg0pMQIhAPCrjAyOxMAY4xwNxQD054EwGDoHKblO0o50s1azVA3UKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyZnXmkr26fMuulZQq3AOVzsInvcCm7Je7Ai38%2FKWQOZJaoyEtEkjEB7mEkwjDKyqtQ1Z4K5x%2B3LuB02meznMagt4%2Ftvz61ZPGs8f2MTH49HkhzMYh4vzVHPfD%2FVJvUtFrTiMw5DmIbNlxMWWAUOokLr8emEYAicRobjpeHIwjf4R3jbhmXfiOOO4fiWnvx1wZ0J2VN6zp2W%2B%2FxkKKyPsjeqcSd6na1A%2BYEJBh3CSUrBm3GkR4QChNciv%2Bx5SCR45NJZ3rH8xhnvrc%2FLiISscAhqyrMXaJMR5AKyze3a1Y0KoG3G4RiQNhJA7ImXHulLhuqIrctimYP0aLWABmeLjuThBb6O6zgk%2FQ0YMb8Wj1mJPLc7ezx%2Fr5%2BtQkGr5P11wVKCi2rGiP5y%2F3rQV9E8ygi8eEISkilSkhgWOSFrFpxyFcQz7pz5EM9l0L8fL%2BiaMBBx%2F4WqGkUkJ295XpZBpvXRMj2Ah2rvBprFAjsYp3ezaDWqFfRQaJuuf%2FCIBraMc%2Fqrp1QzLFRcue5hFpsvbgzVGGX0jFsdQL4JHKoWBSd5boJYXxCDHyYmjbq7hhihbDFdFmgsq1TpTuWA1kbP2Xfep8WeSlmjIPITk4OaHZeBIXBvjoRqqejJU219f%2BBeb5SG59%2FRqCrRGySTDvnZrCBjqkAQTzJ4hn8W%2B4vK8bPNVeZsoqum4DlKqF2Fd7gzMsrX2SVvoFlv5%2FMlNCAAixY0KDKcukaUCWVnYdRpXokAPrfOJUu91AXn5DMcsHmS5zHpBR%2FQAe5w9ptR2MiBzSJTvO64neW8GLMqiQ3vU7%2F%2FBlwtnBH0%2FhI%2F91SAEe1QTbIvSL%2F27Xa%2Fu0%2F17PrVgDVtJDFoYY4075FmLASEw6ckx8efUbTeY8&X-Amz-Signature=a4b188ae371318af5a8084d31139ff5062e7b34ed77a1eecf0ad15b116985569&X-Amz-SignedHeaders=host&x-id=GetObject)

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
