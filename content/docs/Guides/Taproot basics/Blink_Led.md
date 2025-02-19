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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VL76TBR%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T070756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIARhmuhmo3V7qej8Z4QxsgJAr%2B0y4B%2BRNVh1yIhfDi4%2FAiEA6zOepCRXsCvfYRzo%2BHTa%2FpNRBQ2BC9hEWSvR2UNrcLUqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBoMojhR53hhcRQ1QyrcAyjF7Rm1FSZdtOZ4KPZ5A5MILViGnXnt9aTETtNvrICYsIssI%2Bs2ggbsnh%2BMyijwJM7tj1huoHolNehLVXjW%2Br2GinX5eWiUjSzCEiJ94XEkf%2FRJBkUmWnTwluSRmOWrpGVP4%2F7aoCydngwqaUO6pU%2F2exQbo0KUvxYAg5kNWyF6Cwgo%2FSc6N6uokIGhPmNixcNNlKnygydQq%2FuyXvfD2lwhvqUgYwqHi6o8VhHpCvWAFYCUjr6Mru0eJc525Gh8Nm1o%2Bthl26TDJARGAGdscKAWAo%2FTkyGDXh3h9dtUnkt9mt9S3CjLBKGUq4dVjfxxYHmNIdagxGYTq7PjZN139A6HdlrUkoGh%2BZqoqakTl3n%2Fp3b69LPKTzUfkRn1ThTfsrz2x4EEwbq7f6aJsJJH7D%2Bu9%2Bx4ReUgDPneMP6iOqfpdkHd1E6iyizP4WMBY3ZAkIIYiOFxT222CTFY3Ifwhbe%2FnxX2Jv0L4ZAj1m3%2FEd8EQ6gC%2BrlFqk33Gu9xuAVDDw6ipOvHfuwkjh3vU63G2xeNscFqcSQj1w5WOsdHo5%2FQ8U1PaPEOazydTzQqX2PWWfGJ%2FUFmYJIENJj1wqw3pdDpoKx1od5xqy56Q%2FXsnhNeDrY7CfoT4HXwOgLwMIT%2F1b0GOqUBmP8V2Gym3doMgES6Qzzgk6UdtQketpZuHmBhSa336lCPqE2mXWDK6zoTBp2J%2FcBBzDh8e%2BLZjQhcpsVQvS30Fu97E4HjlxdjBdeZFZa%2BYJPsxBWlAkDkrF%2F72AitzOpDC4I1Rkrp%2BsDpyT%2F%2BeSZpnzon4Ky4XfXybwMCDlMb6LAeZSmxL0H0LvA0EEEzEXWcanCRTmoW0axCxr9FeONgZgUtUPvr&X-Amz-Signature=8b1b4a9695b3ee964ea1eb67af8b02a88f59898b821cdf7a7ab665794725051f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAC56HFV%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T070756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIDpkmAEo5ejF1fVYHVqbRYWQoBKWjEwG%2FHuS7j5C2V70AiEAvJHInuEQ9AhR05AXJwANZXsJoCd80%2BOBvMt8qXDRqssqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6XF0WNXL%2F1T6YHuircA6Uu24dE4TrHIx39DvtLvebcqs1gtfxxLoJ%2FuykrnuJr2MSDW4c3ZtUp%2FMcgWM5eGowmzP7wfT1zOm4KutOOXXA9tkoifNnUkEpQ54QIbeu%2BmBEc1C6jIsvowmir%2FXw14faLdosCmzt7O3wBsy8sb3f8U74s%2FVbbrjVYk5uWlvnxzZsZciI%2BrUnuSy7NFK67wxHZCIs4AbQ0sQLYOqUbtylefw6mLFkCwfedRfYXspajhrx9XPlXt%2BKlyeI9Vw8UL%2FhVyWzZTKiYM4e2Gi0Yaq3SjZLyZ0sblqfB3y5whE77owhQ7Df2s3OzaQ1mXQGdVOsbyd52EUVOpSHIN%2Ff0v9xLt%2FYcuQfFQ0OtAv148CgAXzQzEuQuc86fAMZxebEe5HxEghpyGKEBvN43MCuHf2rfnNe6SKNuDH2Vb2ESxO3z62vv5uGL%2BeuMWZPF8tFBZEI4uMwvOAlJdNm8J1YGzbFVwFaSrDe%2FkUuuPeDh4BJqnbH80vtrsfAaKvaSjYR%2FPs2tZ6pc567c34qfP89kK0kf4HMB41ti5CalCbGOcoJ1rFOwfNuH7Bd7vBErnZhLJPufDv6ugjjNRO3UO7%2B6DJ%2FMR%2BGXPfHvlMBqoaW1ZKQ5uJSVpZ2HdwAMAYVGMNv%2B1b0GOqUBSH0qFN0ndWX3SHhG0bbxwNr3MZtu24WeYGaJx4ngpDCXDChPUIumlGXgK3w2iCu8L8tSq9qTwH0tduvuU1n%2BQcVUMizsGixCLvfGJYMiPKAF9Qrx6NX0lkjiEH8FImLgcpxC%2Bz44H6W8hWq3RJ92s2277yfYsKl7Aylo8t3rM%2Fcp0%2Bq6aKCBfV%2FHyx%2B7U2M53RVy%2Bl3vUFlvnaTOaA92nIMinhxQ&X-Amz-Signature=9b7a97de11cf0c64b8c2ce3752d82727445eb91664be5b170fb057af7447c0ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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
