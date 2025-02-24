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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E7T2AS4%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T031656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcNhhikb8sYR9NHvz570%2BWY3MY38hQPYktZOzIZF351AiEA4lSOCptwbirLJXrElcKVxQ6ocAT1vElEjwDECK2R0vYq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDAy4%2BNel%2BibV3R0m9SrcA%2Fci92sIxRxSP8KXiIEHPR2NwEK6YbswaLKTaTSEzEC1ZjM76gqvdvhPrrwoiHg1BbhMp7fnvBtC0%2FAIBbUp86y%2BZMDufMOHZhW7ZEQeziG4LawlFTPQnJKUznTDBFui7IxAtnYuwceT%2F9B6Q9X7wL5iiNOyTV57Qeqk76dikqJxcqtlNzKcXwGxxPq815JPS%2FAYGeL56EjXQAG2CkpHGBP6pj7R6yRZoNEFqCKyxdelydYq4HOIuzNMLae5VYtW08BcpY%2BGALoqrcHI8W%2F8JpwJfhHwDjtGSVf%2FvKXfrr3%2BrG%2BvqoULlABuP53PYtGWJOV%2BGUgyaCLNy8DSUnyjjMxxY9mvKaGvgcxkV6KuDgzV1pnxvRng7F%2BnMZshpdZchQ6lkc1Wanc%2F%2Bk4g3zrDZucAtzGpip58pf7NMPdQrY%2BOBDbsuuaFhHNM2ltse52uCC%2FXB9b%2FK1y7hlgKM5J7QsrimMHCMKHULf%2BW1rtIocJkOL0HzRRk9EV8DiZtXiyriHUdt0qvvItlIrTnN83bYIcImeoA%2Bw5QEVkB2V4Seom9JnDdCsgQ%2Bz2cAQ68bLDyqkW95C0CcMiOpSmETxZdXWvVafDz9OMyD82Qd3gP1wgjupto4kBMtmYS7h35MOqg770GOqUBuWJ%2BEJCSlI7J7UD4b5asDQvv8IZVEFu5GJhc5IX0EYjrJQksGeRHjMiY6JRIEBlsv3Y6xvplOne3FDFKInp6dJVP%2Bb2TLyV8%2B0E9u1qd9VwwJPGG6gV4HrD0u1aUqX%2BJWuuSB2n%2FYlmeTukUbgCwcC%2FPa3BMoEa97bdwkpUyge4aEkstsJxrVlMW3vzVRSMKUsXk0EED1jSls%2BSW3oL4UbAkDVt%2F&X-Amz-Signature=18348ad1c03cdd446fff670164df1bc6eb9c027a100d9b0327ab2137f12efc70&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK6A64FU%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T031702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChxNyMGNaCXJHmFcSCyG9SxA%2B1lM8xj%2BVChbZYD4%2BxswIgc14CpSaU6kXRY2eD5euIiY1q6km7fOF4PR8d7FOorBkq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDAQYGFkuN6%2FM%2BK49USrcA2Q%2B0T1NhMRRH%2FqqIOFK8AQ03VgJGN6MdkX%2B6e6RpRfIxvmylgsTJIf2ucUWjpLuwlXmkSoPjaj7uflXPioxLecDFvSASSbjqX6ig%2B1gOH6JhESDWIwgmPChPAQUt96TrmBDFEYdgHnaSQfnQc47pp%2BCKXArmPJYH6I9vmWP1K8ALDdLmQdX%2B6C9lIkwP4hkX6F8wMb8MvSdPAGrXjLprPoQYiuSXozj4gN%2B1JhYPG48GS68vahM45yn1JwJgjHoLHXS1ALh0SSwp%2FCNPzwqTRMa49fcJ9NIfbqeLxgE384bJlskeuNkAaQfD7rBe%2BcVBTfMgkL5U2jbiHpLyCxW9h8bvyKvRzqRn1WB4wfT%2Fa4MJS7l7lP%2FzCc2XfgUpStT3ekg%2Bz3HTujM4aS29b7AoPwQi%2FoPhgZ7ysqIdrfosf20NEbuVULn6RxJd1Nl5XKSgz48N2xlZhicgPSNHErHdOlXmv3P05snd8evgFbQfgeeiWD5PAKTSsVzssr%2BZULQkhVagBTm1wJENjp%2BWPebnpWJydAqLrjRRO1IMmB3bYeUO3f9JLL3axTWAlAy29ddhAw2mIypcsytXuJy%2Fe4kGOF7cCThZbtKQIkhZNRKhphkcom7%2BCCh3bE5ro9AMLDw7r0GOqUBQZ3rrEyZjNyqJWiciG4iKgY%2B3%2BrKfii08PECeCLB%2FPCJZfphE%2BEADKYznO%2BHSpzn%2Fsr4PRrSb1TRDeURtmE6HCsUJgSe18Fz1BPbldJRRtDM4MTzYRG2EDOGOG21R7FU18NHkyxcntclfNxFCsc82BqOdwNVAeiS8xNRjzbZukcabVG7NYonrgiHnJXHcynj%2FuISl4MGslE%2F9am8aCYnHHUmwTC4&X-Amz-Signature=81b52d899d55448e166dd46b3a726fc9025f9dc980c5c984aa2864d8c91740c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
