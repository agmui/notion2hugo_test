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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMGEN6M4%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKwYWcbwwqa6zGdTdmasDptmbWvV%2FRR9N56shEf5hHgAIgWSCIpr1E%2F5Y0rBNgoMJXi5FBCqe57mE2g2lC%2F%2FutEbgq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDC7HJY1xVccgxVsDgircAxziluZzaxys2kUNEJv1QF3vnrK%2BpuKQE4d5wPE%2FGIBajljJygF95b%2FeB9L6zhHfKEJioSe%2B0kS4nLtZV5oPLPBwsJjyL7qLpPq2mR417uGukBjvkCCrBOQlCYfD4C5dXYXz52dJhHHLMYAOA6bkpFPFVFOF6udosNiVis7pAT8bv8sbEKOgPmrKtgE4RN6mUDsnnQ6%2BeM8AdknwPWP62xTZg%2BBPK9jJGBq%2BeUS3NvwanaMWFvRncWvBEOb2280U%2F4c2hZZVyzzWsN%2BQ0TVgL8cKex9NjbhaAOsMp%2Fa6oGSRbIu4L99tB1u1aqViB9%2BE8TX5MHKIBVyyFVOa%2BytDgcXvX1w0kRQj81b%2BF3vuTkk96ohWELcok%2BROJ1TUjp20aOdgWNm6SxYojhbXdoRh%2FvnhFL%2BJIehY5vFr84i853QCOi%2FrNTMOVfM8ongZ2a7IYHz3SxXrP7NZDycaZaFCgypQTN3U6mDpNFDXZOJkKkQE0gsVfurTHiezmyA8l7tId9l%2BaPVZDnad%2B2CN3Q3kWIC9u8HO1T1K2b%2FyJnBf8%2FXNw%2Fs4ZU0kKjcbV03Q6X8L4TrHdaz%2Byapxql1gqKe8QfuMD%2BQT6keaDvDmj2Cin1OEUQb%2BG3%2Fe73sckrbwMKPF4b4GOqUBSEpcStJ4FPyU65FqkYd6F20U18nZ%2BlO97vSlt0tBWLBKx1rw%2BcXKK%2FnAjqHu5jMYauB8L9kipGsXCKPoGfsl80UsauD%2FG8dfbz3ft9iJQjdYd1PhAsoJCjZmB8jUzYsTYQ%2FOERjKBDSWT332kRbrbEpE8QpEyB7dKWAloYZn%2Fv%2BhZ%2B4N6a3%2Fc87aE8hCCIJbWbR5F%2F4sv3dYmLj1ieqvMl5XwrTP&X-Amz-Signature=1916ea874fd252ae86c85590b96d7bfc10f403763b1e2db78d271aea8a331893&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G3VRIOQ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR4SU33Z3qs2vx3xsfeZi9p1a09Gj1KZj3T1Be12l7UgIhAOPBjvv33JqkxuCHb8AIRD4bxM9NOt3JthMxJGligy8qKv8DCEsQABoMNjM3NDIzMTgzODA1IgyQETUK7vjHfg4GeJEq3AMvtqERVfH0Ky7VcYhZG3S9iNWhDqInzalDndExJOiQlmoBa5Q%2FQW5yrKREixsAagsE3qf2mz8uzoKr6cLXxaewKP8%2Bq3Xii%2FLnJ%2F3hi5AThWdnS4BNKnkzpTu0lGvkR7zaY%2Bfpsx6nt8jWLi%2BrKhK9DkMrDuoK%2F%2ByVsHsJ8qeOOuOjWGC39dehnuAFoctNYpyz2DZzfoc7v%2FYY02niZkkxn3E8EKlpIcueajV7zEzB7ri%2BkcWgj2UPx531pYbtNrKyh%2BvbpbnPEtQONnC19jJLySZua%2FMx3nIFK4U0wHlEcvcgRcyrk24UR%2B3%2FkF6PMOWKUi8GYXU5ug9HOqtnyCTHeQDkDQEQ8bjN7rrNRaEGaqqbxy5Fb4LmaSZ%2BQ4KpFXY86j7zhqpljsKgBwliS0RTf5WmEFp%2FhwuvRjwpFifjZyI9QaXpsy%2FAz3pnme4osUtK5tWG6Pl8TnkZ0bng4LoN1j79ss6JlifNxAQ%2Bk1AwEHiGQA3p4TbM9Bklez8aKhk%2Bu18EFCYZDfuT3vrrkOKCoku4vt0N4a%2BdTLjjyugpQDnHYQSUYFOHvBVyWO1xjHw552COgBuFkKZa0SQglZ5L%2B7R4%2BLl0iuixkiZRSiA60YmI%2FfJJjV1Ye7MwxzCbxuG%2BBjqkASNym2QVeLPtHRYwO97cn%2BYpgXfkBR%2BnlvwEvNLR4TU%2FF8CPwYbMelKRFfZKy3IcuP6T1JOysaXWPrnV%2FFdRYULD1TH%2F1jEFpRTZEsZTg3TLuYAkmpRTjlrX8u4dTW8nFwbkZeIxUpI35lo0yLiQpWuvTUcc5UGvZoucH1oZubVQBMr2AnaJT31eGf%2B7DvXOtBovH0s2rXNgoPcdRZ2yO1Q111F3&X-Amz-Signature=87f7ad7bbfd5209e4e288bc7d4d87a890a9a01861d63599bd081a2e3198ef49b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
