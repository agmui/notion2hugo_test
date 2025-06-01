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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672NRK2IP%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDZSKSlRZYQFWxCU65Tw%2B4NHKjcs6g3tIswZPETY2i8oQIhAJ9x3cDodT%2Bu8yIU9ioyhhJ2PR82HtAFzonZssRMD6mRKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNRkAi0pJo%2Ba29bMwq3AN%2Fust9E2PaHgFDS5IVZoLHYrPiLtl26Xx0oNBUBP%2BAHAvwQ1%2FGqJFPA7G5Fc5jJ5eKN4b6lovCP6sNFc2Ijz%2FSR4FHjAh4fGoGHeBHVDwilBc9G2qHIDnwbL9QBKrdts47FzW%2FNkoa%2F%2B3M3NsY1U2zPkB3u0ZJy7%2BfW5P5LbCT0oSBr0MiKIIX%2FbM0lMVm3ZDjjnTjzG8B9mmST%2FMiStx7KdegMGIJAbroZVeyBxma993UlRRnWcp5qtLK6hXz9P25cWWFHfm8rB%2Bah5bR%2BkSyKxNanMgBA1YO8fsNUh0Ad6GiP5906WM7uj7ODVXlDFIrZXwWChuF023kkquAAi9ZL6oNU2kXbirn8sr8I%2Br5R%2B4v7L%2Bpmngb3nIAyLtsSNxHzqXHm4Bm5yBcyLHn9yhPlI04JwZ5BioPITwyijpPhabVGtnmv2ZvWz%2BDFGUXQuGi%2BOKbvoHKFYvyOUBDzwGNcFvMLL0aiA6UB0INuUV8SFPYfdjWJJkI5kutCCUOEOYRFRX4CEtRMz14%2FYFZFyZH%2B3RDbaAzGU78AjvnPw3VEIG2UonxH8rUruCKmkdtoKi%2BRq4RY%2F6qvLlSFp0oG4ommRlmNngaFkEAyAwkYLi5GePOKxh17KI%2BvI4orzC56%2B%2FBBjqkAagRGME6z1ReBrOSeHRJSEbjEoMgy8q%2F%2B8yHMr9Wpwu66IQ6XJJ%2B40oPlZIvo6DsftcBDj1NQeQCsDMho7oNOF069IsGogV6jTZ4vsYmyGlLPYv3p6yoKxbY%2BS7Z%2FpDkfmotg6SYDzbNPET5QBHVBwjhtP08FI7uP3u5%2FblqyoR5Ttgj8KkduBgCWvWyijaTNflHazdCZl8Zl3Ym98dBlfaJ0bQV&X-Amz-Signature=f3e77c7e8eb16d47128f92166afd818cbce5fab0565f5e03491848ef30d5767c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT3FRBZU%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T100856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIFq7VlWo7z7iyjfPC0MjHYYD2xXZsgTAXFzOtyQZVHU7AiEAhOfJV%2FqNgcJPG2Zy%2BRnzHOPiPoRFdGtqDYsqi%2F2gXWMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHhTQTo6g6LOEesEhircA9d1ym59DhS%2FwwhST8CqPRZbkNhaR%2FFYPL25Si%2B6wdcsWXF3qo0e1P4x0shIjE%2F9uiwCaf9lbJ6Z%2FrdEXXc0z4KkQ5W0Rds3j8ukjpOMSPhGZCgAl5GfAdauBt54SzlKsiRVjj6l1jLwLNgSbofNgfSTZ%2BPACxUxX2YVLDmlqG%2BGhSYg5O9EjDVJMpOqlh8YmjCcBwO1%2F3R0XUglbhPW%2Fby%2FXT0Ovp5o0cxSJriAXGWZw4LCxzaeviKo74w2NWKYTqrx%2Fn1lCkCEsNr1J4EFqNkKTBai4A%2FXKB1APJ49z%2BXUjkIocpekQQm1qSTlY7s1DS5nj507tnNiBZZLNdQhg9MaoG5rNoudNxUdRjgt0utU5AmOHH21%2FdPpoIPCo472W96tlc0hwE9yCPY9DypeRkh6UjQn8r1IrN%2FZ592O3RhdMF5nR3FPMWyqwTf1Rr%2FrYBwTkNcKHfdWF7HM%2B8C0uAOVULzYJhCBqRQZIgFtxTxWkJqzT4KWYZwt9lnZdpM2J%2FvECq5MbbBMe4OmSKxEi%2BNeE6SN72JE5ddH14tLWLauYDT0EZRoX7exezhKc0apVM7SRRNmdyuFttZ8BurcY6WA0pJvi13rDrXGAdv0MMBMH%2BEfCEaW%2BmzHUTgEMJ6F8MEGOqUBs6p%2BJqD3O5mjh6THLLLBbCHNUT%2Bc8hj9MEOqd8Xz0MqZWBWdmbiUUxvNDeuMaC7DCE2o4qqWYdP6SmrSh3qt6bpF1JdjcoieSYfkGvz%2FguZESsgMn31AZheXglh3hMv9coWA76JC6t7ZBvQiODEwzV90HUKf%2BBByS0jCu4KMgq6ZiKthnWH6yCE1zdnas67mIvRON3kyG0HveZ7BxU8FH%2BRs2bNc&X-Amz-Signature=525e86819ad9df8647813710a8acbb567f28a0f4c0a8d8bc23a8f7de960ba7a7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
