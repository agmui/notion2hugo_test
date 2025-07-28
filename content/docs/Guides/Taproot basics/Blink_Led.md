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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YBVSB76%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCavYLMNeENtZidXOG4jx9knDGk2QDqXoxkJJJZf9DLCwIhAKQMA%2BxAprUlX%2BWZpPULWgzL5JSPtrkI86kFzVrZZAQUKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywqcDeV1ylguqvkywq3AOfUyF0E%2BRN1tsTU19TERiuACIUdIhaYy7n8AD1rJSrT3%2FhTM8h8v6vplNwCc%2FIZJutavSGOMqFyRo%2FXB6nQ260O5kxwbqmHJjm42yRIQwawRx%2BJlnzVL9ru3Aw28Bkg%2FgTXvuWzqb10Rl83GMEvJ3XZsBeUEeuop0n8qmg4KEnpCsogSnDLawmKekUahJEbGqNyyFLHuVoa2jymEvsvaMN0LlpaoQnSF9hxg%2F3MrkrqwzbqKCMHpeQ7ud%2BCnulRzu7YIi14Q6N60vv06NNE9cGTWOLRa%2Ff3Qzck5topd1KSmKGhvw7wexJ9p6zs9%2FG5K2868dnaBUJgjiR%2B4lafHvkdtHvNjZFYREnoH69ndEG0cltBsXQzDgfXmYgZrgN5CN%2FbpBaSSCHrERVk20Jm%2FaAEOsmYwLIOYht8DQVx1v6z3hy1%2B0EqrO3ZXB3h%2B9DcSaLsIuXpIsbqFryFnOqD77MXRVQHvgBRaShu8PYelP1dzul4B97uMjhKcJFPeOXLY%2FqfsCr3J7JKJ%2B6dVBP3z90aBo1uJSVLbssGEL3xllAod6D53rlEZfAymf%2BZAvHzpOd8iI1kHA%2FUaQav3s1X9NwtI%2B%2BjtvfWj4MMw6h4myTYig7vYMqnX7ajeMt6DCuuZ%2FEBjqkAd%2B2cGArAwu2WDpGuxcimYLTwrf2TXBLgOP%2FSjljPmHmcIu%2BInX3iS4ruiAsRaT7ya68TzCkgdHipTin%2FGTZDc%2B7F9a0T0iXnI3T4mwE4%2BKEoYNftGnLWRLbedasTU3i4q%2F15YaCKNOvGiR6yDQYWgksRXPThwX%2FXXVjJXrsC%2FygkdXJMe%2BByiC%2Bxhk00qxDEJ5ksF1ZpA8rXRK83qooN6Gfq9pA&X-Amz-Signature=536781e3983a5996a4af9ffeebe3944e25fa13413e4abb8a0595533412e34e65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SJXUN2H%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCyaG%2B7LEFD35KWhPGWMCEi9loeuSO6o%2FzxST04RmNmkQIgW%2FAWruu8fDxMU8IKaKvgxLMn4pslxA67dFBTcocPSeMqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgqHwHxVPsIdbfG5CrcAyijborItJqNpsBmStng7JEK6I2WWen4Ob4%2BAwIv9FXrqTvOVaF0XdVtv1at%2BIBiy9tcNz6Rbjn9wQHemWZGpwlWjS9YCUE0MrSDp%2F31y2GdbKOd4DjsApxO4Z4TR8r4q2QJYlrLIX5fON8MsZ5Hu4%2FfdO48A92ilL0uUiXOGVe71qC3eQdTG5DFux5V3c29GCfUDVhcwvgT2OZelBkGlSbYM%2BhzzYrSXA26XYykGA0lRWKt92PbHDbNHLNDrKgTZIoSoRWyyj%2BXestubxC6iFa3aMd4aWzF7EVvl5CXp%2BV7S7zrFsPEg8xLY41IeQmTC6jQvSN%2B89SsI115y5Cj%2BVZiAv1L1mgWSBw6mFAlt4wRNAU%2FXcRyn4NIkJNQOmhtkPESqSjL36AnlUB37WKjAIQvdbNcaEtHIj2FPXbtpx7Pifr5FySpmThCl5sAdy%2BK%2FEsBZBQ9kbZs0UZpfJemCrVMkZ3Y5nXWLpXsOVEXmbD9hQ2SvD%2BggiDs3szugmpNCw9vNZZ7b0y3ekBMXGD%2FvpLcSBLBwhfqUw4JxZ4aTdsTRxG7Ke9wHya8iz3ZoUu2c225HPeIOIxEkYf3omQeoX8q%2FkQXn2ECJFiAG7Zm6QStUd3p3lgMhn1u%2FXf1MIC6n8QGOqUBCAgANHQxqtfFXcFKuZw2a4i0YbA3%2BF8Q%2BKJ6flpQtU4ZKxXfciy6jPC1rFN6ekdQ2njmaKJLALQxbbUQOBmDckz6w3B9RGoGfHKAbD9R0KFsMrjcXPtesDTVEukRbeuospQfkP%2Bmwx9CuOmt8J6uQLHPra6Z%2BBvELB2MpW7PH7TV3LzgmGafJAT8CK5FiY5dPtUrz7GKi%2FCNNAn4zI84jyCHqtwK&X-Amz-Signature=644093faf9e91fe82b000f1e8bf88de8c1801aeb1a92ee023f82c3da0f68cbbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
