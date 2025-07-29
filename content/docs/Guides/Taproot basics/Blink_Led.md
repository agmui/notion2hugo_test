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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623LJCDYR%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICyjHO%2B1LzAiUBzayo4ioeLVhCE59hyFuybCkzg7jg15AiAfoMlRfYD0PNvmrlY9bOlAvuENdAX0UiZuI2fZieec0yqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwattAK0TCf8P%2Fj41KtwDtSA8zR9SQWHNWD2WhbBBob7FhejiLzSUqBL%2B0%2BAfjxxrstaa4wn99iZjQonISg%2FT%2FWl%2BNN0Vd5PMXSWUNkMjv7AW1fL1NLv%2FiLPPmqfIZBC4nktrq95hqcJ9RZmvx3NL%2B38U8D6NSdgi2ahDMU1efOiYvtogN54GxAL7rXL4beqUYOodS36sBlcxSwRJll1hFCRQMwsm0990rlwFIK%2FCY0yT6sTRNvWiNt0FB%2BMYMswbyPT6MJhp%2BUZfHkCa8QNxhh5Ab60HXRaHtni7l25jABFUe%2B2hpfB2nszh7e1wiidR2j5lfocPaCVcEiFQFSW%2Fjswce6CPWWHyKP7r6Ru0410saACMIxIbqrRcAxdW29EJ%2FknEPSbHDybzzS31p1speN7kavuQQwSNZD1UWFGmHjLhc6vhXNoBF%2BVJAzPWAOGYGR3qibSm7syLAdwEMjsOndXn1XQEGF%2Frd2oiQm5cGImEbeglme6rYfqSkFMaA0sbFM%2FyGUbaWBTvzkxFooaTUHdNNcA%2FViLVkZyivsAfzBgrewN41bKATIHi1AB3wMRgFnJB159rqLBS6z35%2Be1keqyKxrIgXLRt02lGDCji3JOhpxdJSSw1nCjKt9%2FFXa2z1FZK66Lcd3NRhZMw9pejxAY6pgESjjFJ7IIUtBvuAK7x2YbgVSLUVba1XiModgRN9jEk9QUEvrfjyt9jeuNIlvc44jqZP4UTSHHW1%2B08ca91jU64DOqk%2BM4OKYpfhDDEWjsB%2FxqAmGCcmrBpHy4EUXaPjSA9GlhzjSq0aTa6Dxkb%2BelQTt0wt4O6IlwEpWJcWD4ER1ClL%2BrpT44%2B1YeGGO0IughPrFhwcygWrqMvaaq2ln4XsQgMl7QR&X-Amz-Signature=1c0446a8d78601a8eab0b2d836e1ecfda717e1e7aae684495201fcc05ed9475e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QZCTQJA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIB%2BKRMIEfXvy0q2dnXa%2B6YLjlZ7YahPcpBXnfDTbmi6FAiEAojn%2FquBEN3F5%2Fm2jIQOHIanRJyGHqMkjF%2BSLu0Kqq%2FwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMsziBk55FZXNmNqPSrcA1oBNAfZ1hqoiQum69ejvsYPOMqx7z6kdF6PUnDo6SqJaZ1jqoaAitYxsbTG27fL4bEgvfiN%2BIBjMHj4udgPWNm9rTwZqS%2BdD59%2BUyTPrtrNilPeRMyC8iU9%2FCtNA8Z%2Fhr1HvXbWicvD1Zv3su53ySvRkbS%2Fu%2B8iShdy%2B%2Bbe4mmwfrWyPf3P%2FxYzVIOfXvFaNYRJZQlWUOYxZ9fsn1eqUyPnrO2Btmxlxak38mdNWnEaMSy5UXEW4kIlJTBCQy%2Bg4UWqe%2F0hCI%2B%2Ft259B3CS6KsGFy0fVmC5wjtXyNBXHeCelZPKL6uJ8J4Dt1kMCrGQndWBYSuoeLc4c5f2bJQYrZ72vgjXIBG4JCNvjZ2khmRfhCGnno4Zv0M%2FECVr1aM1%2B7JpfKzXaLqSqRbyB7f1BN2uvnY2pAG8TdVANhYEIFVzWoNY%2B9sIT7tSf6YRjCiRzebv5p03ND1DfY5f%2B2DdS83t1bKKayoxZZqXzTNQtrFTWhPvi%2FiHnm2qW0ABRsAc68MoRS5y7nrtanqUQS3%2BFwljzQ57NTJY8Hccq0J7smVKq9zIHb9BXVrnYMhUjz29UuWGMsctWfIJCeEgjy%2Buc9965vFm9lLQpLfuFd7%2BGprhJC3kwTcb%2FfYunRgVMKiZo8QGOqUB%2B3Bjx1bOX6IxfWpZ3DWueGg3PUKYoc4IKGasjoMjPl4q%2FOEsSrQ4BCFJkuNJKxMBNa6tEQRGIrbJCyiPdcMGFlwzoBf2V68u83xk%2FIXMeJ4XFln1EuSFgJaBu%2BkKdr4iEZFRZ3%2FOrAEVx3FBgNKPjkBViNz2r0LY%2FGEi%2BQ480OmkxQa%2FoxBcxJdweTUJexvJ0Yb3iaJFElLb15WhV7ChXPxvDAVB&X-Amz-Signature=19f12445ef586bc2b22828295a630b88176a46e088abfd258b27d58a63583f77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
