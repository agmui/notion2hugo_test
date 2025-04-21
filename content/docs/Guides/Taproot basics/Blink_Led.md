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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZPCLTKB%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCy1blhvY7FZkwA%2FJkLjyQ30kBIU4Jmobs2Szz5r6oxIAIhAMOCKnOO%2Bua8ouWtrW7caBjAW8PQJg4ZyVosn7R4o3Y5KogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIc5iV8cBzQwcedWIq3AMXoROn98FBcZM3cL506twayeLwQIwgY9%2FiWPpsnOhjY84d2tQ0G2VkaO5U4Ee%2FhmooCpr0XYHDKTd0Eb7AD9IphphF6tzBhFZYGcWFU207pcfAnPSbqk5S63vrtAR5WfTjmmdgPFL2h8gzQNGs2uEowMyg42GNDOU44IxCviQIykVVVod8a23uj0hCZtjNEZoI8pzOC2PWmXKhxqTPnTWTSb315utvIDsorAdVfGMxcyIi9DVSIkc3lfBO58hM7CixCeqps5WNEYXcn0oajWEcuSu7YVbnYTDix9LTBU6dJT06ihL3g6FdLitqheWuCF651bbS1ReInWFE2NokTuI21tyJ3TnFjyJ2IFD7HulEDNB7IZ3LU%2BNQkbtzOMO65qQJiBD84s3rNcgu6uQCyBQOaldgTJnFR%2Fj8N%2Fg6ZVVrmfHKQhgU4vVOLfRzuFE81YzCtgn0ndIhxm8tegkvHCG7lnZGyP3b2A%2F%2FcxdmQpVIPHK9ifkzxAP6OgWxevDjeIFouuw7y1OFNQwiYUrZdp3LHJ%2BZ%2B%2Fvxar8O9Yc40378Ul1iTdhMhkdtjzDtC54sJE0yY4YIUAnvL%2FMsW%2BnjxhoQCV55U5OyNNnO4%2FCJoJ2nxVNYd%2Fbp%2B0Aq2uYZATD5hpvABjqkAVMDb5V92l9W6o0jaywkKGKsbaRFvoBRGQHYn4jOm4QjuILzsiJVbqLeXk20giE3a1XKSOjdPzKY3nTpzkzleH25Uqq4KlkkK9yhbyhO1vq1NeYHLbNChRo86F7kOBfcRU1wKxh5rwlSAtELWC7ELQOrgs9gWLs6afVsL1Ce7%2BGep%2F6r9KtqE5Dp%2FGSuwGFKYJDWaktRrKs2mdXlNSXojm%2FvwXT0&X-Amz-Signature=0740e597c27f2b766aebb0c583a7084ca95a87aa8e258388b1692174a45eb953&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656ILOE6V%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIAmcObxHI04vuuNrcX4nOOWaG0fdAYdPlbZTlXVAivIfAiBXq4R7p9lGI6edmdRZt5145w5L10N%2FcTJszatq%2F8aPdyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhO6N%2F7JKz7Q1rAPfKtwDa%2FOm0lUsZaLXF%2BGUBY0ju5CxSsHYbl12JLpyURThV5ZvRZ3n9GC59DJ%2Be9rvvbRmwxg%2FeluAodh5q4G6YeIrBK%2BIliN0sEe7LibcQLpK3vQm89KhMuOO7ybu24kaSs0Pvhu6HlqCWrYK08GaGUO7%2BMEG5U%2F%2FWF%2BYoHzNKMQTCBoqTmQELA%2BBb3Ymo%2FCIARy6QL7VokP5sO7gOyA0bw6Hi8ZUmG43i9LemoB02PhiiWTrSGVlwCHrwtQQkr9mO3yog921%2BpHkPDWfDMpbnGxZj%2F3yTOxELwK%2BoR%2FLKVXR%2BeIS4YT3rRap4ble6k%2FJRdna4TwgDfUgNTBmqwCge2GcymNsMl48S5hLiurXmyywg5eLcnfKB6rPwH2W81BikziaJZjkBghAzCjWw29vJXXYiO9it0Kj8V2UR7272ZjtWdqjHNle5kcaFIutvUafwYN5JiUz2HZgGEj2gZb%2BBzIa%2FGHzF3%2BnMSd4NR9tQj0cz7XmCD0fOfdQQlaejAHHRwdoHLKzRX6ySTYjeY73ciQGOENrLzLwHvbP6iuBU6XS3ty9jSL0QkCzFEAOWmEuktLFXQUsxLFiejZfkc%2FbyMLyora84zqBWXlFCOGwshxtH2QFMfOdOy0s3%2FBLtacwtYebwAY6pgGntEwFxFxyuuNqf5Uox%2BuhndcLLMAKy0LejgtB832XS%2F7%2F2pQX6jRjqyB1HKvqRSu8ujYhzRD3VE3as3SKARgXptniAjZaKYCMBwSjhzV0rjb4mg%2Flwgu4GAMcuqp%2Fxg%2FYSJM4AKVk5OZIDvGJJGucjUu2%2FWBCqjlZyvJTKDrC1gR0BEbtwQvmK5v1vwOyr7CL75Hu7U3FOrwirznPZF8Pu1Z8Bv82&X-Amz-Signature=a94d361a68812e6486abe3c2ca20f792e35f028b4650e99a2f0854cbcb0a0918&X-Amz-SignedHeaders=host&x-id=GetObject)

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
