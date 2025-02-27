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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPWQWLHC%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIAQoDMSp15WOGoEvtjkieQDIxtNT3CezoJR%2FfJegtWnXAiATeytlcLkrTd3qVhKKys47DOU3YJfhJOF6CRxhJ9Vd8CqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYDIvwk%2FXnbxFST78KtwDGbUVhE1r31GmE37mMJ5QuI1pk0Z0ZkdJkmi6tBHOS9zI9K8vwJ7E5jNQGTZLJzvUUMUiLFPqzaE1MUMgUZk2t6K%2FzZo8WlJK9Zjl%2FNNd5F6DwjXUv%2B3FEh8noe9SB%2BEdmsqdJKOsAZh1UC07GITfmGSk7%2FdlI5%2FZS9Fr%2BvVqqe2d9hbeTDvjk5seogoR7M0zfKKBD1cQy8AjSp8u8upUD9AM9carEQLOeLl0KPn5A7FvD%2Fsom9XfY6j5F4VBIbKu2zHtIP8qPdyJOStG%2FrRoYfql1vSHGRNasayuLEX127zkUJCRQv238UVy3ntO%2BE1lwJQ0H6ZBUkTrcmDjh6QyFLoLiD%2FL%2BMLQvXZWTvYYSzzWQ3sdSWWKrC0BCMebDZF5SbfwQwHPh9H7jA%2ByHDyBDCh955MxWWJbxXnWAn3f5YihwhhAfJ5voSqgJLUCveQJBQUKpCfsmaxsnpaSnuJ%2BhDaznc48SEEIXryI9KFRu%2FsGPNtHjIv16isWYLl3HxLdBnE4sps4Cr3LyvYVgWGbXXqmj1EFM38YpGh%2FMUE%2BEXtz7oFhNSwaQXCqhtGORrNssGumwqM8HLZyZ4O6rJyLLJ6ckfVQhEHRPHVU%2FhYI6VZ8oUeGYT9jr1eTApMwwNmDvgY6pgECRS8a63S0YrabQCrtBTDQ%2BXjAHbfs6kXSl5S1K3sBsHz4jNrkAx2LgT8hWe0X92kSdxAqz4xlvXgyV%2Fiym5CKxXx32I%2Fu0yAwNccA35KjdOCfhDvO9QFmcNhNTE0VsgtHe6RiRAwgLoS7Aw%2F8lVJ50sveAvE5bYA%2FIG6JZhzTVX0x8g3%2B%2FvkmZjrRGZ8jpQ8pMs6D20mbvEawJSnQ5xnHZEDjdW7v&X-Amz-Signature=d85fc6484a0a9d3f4102e818fba338150779b00dab789219c7a6834716da178a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHL4KGVP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIEKwKIXBO0R7U0S708rFqUQ1jffaD1hd9n7R7bnRrmbYAiEAhKIIetLwVJJ6scUwunQDPubPT0PsAt6GaMxngre1WpIqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHqwST8Q%2Btji8m1YircAyxrHh%2BYzfLVzOeqd9Fu%2FsT1fgbx9HwX%2FpL3%2BRvX6JEEYS3O4cqtg7UndYBcIb1gREvHSWUMWN5onz85N%2Fn9j%2Frnz0vWf6XRPd1hf4zthcCcSoCPkGwwgEQXc%2FD7cnjY39a68G9W4aoBKbYLM%2FT%2BIdUj5j%2B3yzsmssNvf8FjGQERClVnbPfAmL%2Bx04nwoHIuBPMGMOADvKseX54QTGhMzGHUkFW2itAZ729B5%2BCbq1bhbSmHhNvZZPcUo6Ag%2BlgPR0isz%2FhRlzlLVSlKllZvLoKE5%2BYHz1F18U0%2BgTzJgH2GEZ8lFkF7X5xr%2FaO%2Bcous4HwYU362VnkLQwz3aqsZPOOs79XO28zUdODg6Xq547%2FG9plqPS3dX8LriSBKBKfHzjL1wP9doFldaQm1htzk8KmpYfCeJjTbnuJS9p5PeTAmloZck1F10tBet9gQHonPrtHWLpmK9glxLOodq0pkvYTe4rW4h4xZZoROyDvZlwOrzGTJO8JeWUuc5i%2B6U%2B7kEXvzProkkF41mRim8hVrrIoHGv5O2U4e5RjPsQfhjeN14oD0lq4iXPuaXN8ugczQMslMjJiUgRpjhmZwm4frvz5G%2B1h7Pe3XSr5NWXpCiY7q3tKsLbTsgbSCXTaiMMbeg74GOqUBLTFtcfr%2FzwsSm0fnRxAq7h84ivLnqI3PoV7HJ4HPyfGRnpoZihbz3uQQ64WwQ2nbDC00yHiPutYHcx1tnC%2Feq7PlqJg0y6qOcwK8SEMRNwrDuWZq8DPQIgyxqUDfatzEyMhDg9fKZvqqB%2BAVxA3qhp2CWR2ilznowUpYr1m4U7v9qHrFkWo6hSnYnfqGwA8dx812msHE2T%2BzeAuHd8opuQAgilJx&X-Amz-Signature=d1f3e5c01bba7e3bda8c24d70600c2e9fb376ea9f22d088c83789eecd111cc1e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
