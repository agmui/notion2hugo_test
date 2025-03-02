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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG7CJPWW%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDC0HgN7SIy55vieVF6RoYoyFDHvkPF7dsAPZkGjAE9ZAIgYYOKtEfcP0G8BFPlimZiVn2sawmhoJ3%2FsNx80324u7oqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FWECHO59SoFbizOSrcA3KloIqxXXHjG7VoUkAMEsfqobQEJ9nhCY7CLmIe%2Bs9eEZd2KSI9KWQZiTzyYEzbCm%2FbU0EvWpvLUUHg5xjJLTLkqMON%2Bh40mWqFNDwA5fUTY6cH13fuEc2CpMQJy1bO1RVNLMQWH9NavQIKIeffpAIX4NHhpIIY9F8cD%2BuT01oMT9YwEr4MlxVbJL6Ow2cx3UzZqkYXqXHzSE6ap4i6Nu3Sp3%2B%2Fm4Zuh8jYNfBmhs35M%2F1a%2FnJV7btpWOZNtTwOD1%2FofyxtVTrImsfz31Bg0QG3RRQmBuvO6AhC%2B2lLeNudjh8hkA9bsEAJiJ14w296aGdngFJz3h8CoE95fwc53zsyui%2FG9mlcBKToEVXu1JaeyBSesz1VoCLasVAyPua1OvofjOnMKs4qjX0tCcQ1n5SzbNLWFvlTf5BR16jol4FtegdBrd3S6JT3QSpfV2iuVNCUgdpw1weEvaRdLSWqlS6UhJMsUwntmnft5cwVQP8LQEusujMCYMX2iNYTS%2BkH6zVpp5xlliXnIPgkfJm3BAH2Aur72LhWmXDX%2B140lXgysUCTGKzln468IbMe3BLsgtljNZ7VoNz0lBOzFwIF%2BJ7FnHCJRr%2B%2BAfd%2BNQ97az5klKTU%2BXe18C4arTP4MMvXj74GOqUBXwgRAx0%2BUQUiB92TwNWZjiq5HVBUCZpWyDwTRRtU50rXX4RAn68tqBSKm8QMhn1ps7stX6LIva2QB%2Fjim5L8Q9EMkzj9GYvdWb0We6rMwsZA%2FgMAD%2Bwa1fYsXi6%2FsJknwtY0dQ3L1QUFOi42r71TP7sZ5HXPwXzvexIXQgTW2bWp3AjQlZpfb63EkAnYB%2F001KmZ43IbqO2FQytq3zUErbHPt%2FfL&X-Amz-Signature=7a71f89ba7a549af04ecd25e08839e71567ed42d500cc74bf61026a43972bc36&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZM57OYO%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGsLkFHimrcGRjYu2otaEOU4I%2FVzV6WZqa1UYwFIF39nAiEA62TKPyeXA8IO1%2FEa6J0kSOTyL2u9sqid2PNbKkr9zJMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZ6mf5l0L36tsxsayrcAxMSLSD%2FWTTENfhAC5MkHURTwWRWKifXPxNnD%2FoB1y74ope4uCtGWlUxQR1%2BVaMYadQLxkgRZno4G5EkSgytHYxdMW7SNuzjlZ7%2FPo9GcecfH4lY%2BiYVAJxR9sKdCoX7WTR5rDTRXXeP1vJwOndfI5%2BZo17y09ZoBhlBmGLS73tUvyeQ%2B6HeFCHP2emBXyix%2BfTe%2BJSu5xYoAZpIPLXOiYDboaQ2kGYPccBSUna3ofnofOx%2FNRXKzinX0ubdq47NTDwc0SEToX4pj3MBsGToMVglEzXiBYp4oJKxhQTa4zH6XKAF0GLvGEVKRVAvKXudKkLHADKT%2F%2FeRGUYatzaDBf8gaqy7k7LbwpCGGE0Jdy5nRhmjtDluHWixUTinE%2Brwp%2BANC7j%2F2hyNRu4TzaKjdZ4lYkWVmC2scxItPMYF%2FML%2BpEahnrY58IL8QP6nOMk1T18zuA%2B01frBNITGn7kf9jAPynm3FNpnJ%2Fh1nlJBzubrhBB2p9vs2BvNq9hdJtpDosPazLHky%2B1bDHIIBjyQP90EzfMtFOnPrHkSYW9Lamo8o9o%2Fs6%2FRoBYwqIuAPdcQF%2BWedzgdDjqFIlfjyG8B4eoEyy5J6o1UxlZtv2Vp%2FYjSTn4fQaYZscq87FidMPLXj74GOqUBHaH4bMYTFxFjmwZcMz6jnEuFTXWeO%2FWwLuq4U990MUskJTClfHtdf8kHY3kfh37PHlrs1SnxXBwSAbzmEw6Xlbh52vGRIBDilVymALzk968%2BwMo02aHGPrQqHwqqa4kXDnz9bYKE41ifmQ6MFrYdIKMnxS%2FL3unFLLVR0%2FwAWYS6HifNqQ8aT%2Bh%2FnyGCAaZxvwGObhF82PJn2edrj%2FdzpebFqc8P&X-Amz-Signature=6256891273875682dbebb996a0e3ee43fdf9dc4d0685ea2096b2f8c231596af7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
