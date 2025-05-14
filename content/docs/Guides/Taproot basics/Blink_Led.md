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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK7GJG3O%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T004113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDlgOJIw2oaTciDZECiS9py9MZm35i7Vk7femlcPm6LpAIhAMMa9LHrfs35ZUHncW169DkO1bz7qtMiNxh0mGSsX4obKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyLzmdIpzssIbbGIwq3APpbVZBB6UcKJPtPsvNI3rPq9Wcxv%2B51idp2fikpZJQRml0aWXM9hHGd0cWFcoO2FRq6s0MNC7OkznSebl8u%2BNZ9Q2iSBrV7a3py2HNDYQorOcmBUBuCcd7iabscJhRcD957tr6SK6MO0K1soaX%2B0sqiZxZmtcza%2B7JxVjX01G4QhgKB%2BPzP1d9qO0YKM6XtIrA3krL%2F72AC6bmVV%2BnmdcHYVYVe96ykwN25DPedezKzoIsJ1F1h3YyKObJtCNmAMBORRKZ5b5Eu981p4TGzhGKKhiJghxdKHo%2BRNCzumA9MZ0q8k9gt1oTiLDD82zkJR0aGKJg%2B9xAwlDpctuC7uHmwhJNXiErO3ylX3D6d9jXtODWuh0Ja7KP1KpCBMzldYkwgsEg8Alt3ggWFP9bh16HOYotj70i7iZYgTeqBcskwwmUR9b6xapeLq022LM9P3zCKWo5AdF1kKD%2FJrXojY0AvfLVMjSXeTKrjKamkxTToyF17n8HoXP15hoW%2FJBXLRgzvD9GDKd8uS8%2FOfuLxqOtgdZndwraicNXuBA99BItO7hIIXWidVPleN%2F7uTE9opg36U9cYmDUVC5WRXKRflgQY702pQ2JCimqqBmI41R5%2FeWs8sEApe3AGH6KSjC4vo%2FBBjqkAb2OXW%2BKsbUn5QD7ahY%2FlOpgQ8UjHzC0EJKfknOhkTbium%2FsU4fe1r7kjq9glR%2FiOTvh2SGUJ3AxHkq9%2FNqRVUaqT3NyMZBHKE3Z20qrm0PzLQesQzctKbww1sMQgArckrtuDQITDFM2xiN4oixJ%2BlvjMUD61vXC0RJyiIWBeGEmzjyVHi16PLzQ3%2B%2BvzUNyzuxvBJMuqjtn%2FVFpYTSaxhYnpyl%2B&X-Amz-Signature=c8c127ed3dcf2e0480dbd355c31a3c2d2464e3f0219bc2c63e9f6603de7af709&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIWUMBWO%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T004113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQD5z4wJRtVa6IO0%2FBPk8cWeC1%2FJ%2BF6nqkrjq3igjuVPoAIhAO%2F1Qdwnt%2FJaS9OaJWyYPDRE2nCjwx6F1O3Ng9X%2BihtDKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUQnEQ2Il%2BpN3Hdpwq3AMy4FNwUbo4G5Q3Td54s9QxTMewWqECeSUiwUHLzTCxAfVAvkiLL2uU0St6A%2FjBJSWq4fKpxxH6Gs0Orc8UQOKZlAyVgNZoDNkZ86h%2F2Rua8lq7pqzSG%2FpK4In4VoGhtCY2sIBgtUNBJLGrtQONFVvpTpuLldLSluf2E9Ipmr6YPr4NtAAaZkHJGK8blCuQnR%2BXz0KxPErWX0yJxqAnHngqW9qMIHSJSJR9kL6%2FUk8hVpgBhU58q7u3ZFaqbX689YX1oDocQDSnygDbhxfky4adQ%2FkUM4V8KJn5NNxPk3tqtcVa3cK2G7f1CKlb2TmXW2eCocsj%2BRW%2BdDFkFvYVWYSECX6blB61RT3QnL%2Fb7KcFASkoHPdGXL5zyJBGdwr3kaoBrZN62lO7ewij3F0N8UyoV%2BAqZQ7GmwmOqYxwJOONAOOA83UEqkxqAyQi3q3s89QpjDPJwmysV2g60g3brEw2yhD9gJ%2BKyox7OZHtematqoEJpmBVkm%2BuWGGXJgCpoFxXop8jBhc2QlBBhy41Ik9REmneWwheM2WAHZW%2BU5TwB9XCSpwasxmtAvgzFHUckxF33mYY7MPSTuVIg%2F2Rq%2BLx3b143ZXmfl%2FVWCFlcmz6Ma27K1DVpZZssc%2FfOjCivo%2FBBjqkAZJnMH5SCUpbke7au87dxINgdxNLCO9pBXXXVJLDPmwkNh0r8sYtxmRl%2BCI87FpsCsxiE8jzmuAhLXiN6Jf9tS6pg7ixDEVztCpVxJX2gnop8WK8iN5L8XBZLC2Djl%2BW44hH5onxv%2FNNTWzq0JV1gy5pgdBVD1Nye%2FwWKFXtKq9envPbqrd4Y4dWdgteUhUZh5B7G%2BZgkrJ5UvwXGiSKYPYDg2fa&X-Amz-Signature=65b24899a1d22db13f158c7b9234089b421289ab111642e24a05a49b7cfd436b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
