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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU6SIDIA%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T041118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9eHKpajglt2TunCRFGYVbRaaUFH2uRTPxNM15tfYjxwIhAJjhN%2BKsNnh2WkdIWFc6OxrxSsol1kpcBMws9G3D2pSSKv8DCDwQABoMNjM3NDIzMTgzODA1IgxR0Hcyia1KANopdZUq3ANMYxjo0k7W2%2BchPtl8vasLTyH1VkaNWm%2Fuxexp3aLF88UxLc9sseFqNKMXCqYswajVfHpzAbwfRGusj4zo3%2FCoOfHbPoNx5pqLWQNrH%2B8k%2FNVvCJbGDqz3bCrofjqffIdbAXyiKmcszETTY%2B81mXc%2FTiA6QQaTI%2BPpGYZ%2BiBcefHH4zwY56LWurw5T58tZ5MrCgBsbaE4c01EqQvZp%2FbPi1ATg6ZXJgChbxgjGzWME%2BOrakZsAQdlkdnDybWcjeyeYCmLy4AmuuTkuNJyHIO88uQoHwx609Sv%2F4AIlELbSnSPT0rD%2BL2YoEnzKc6WCGdC08ZKVDMuN8SzcZ2YB1t5yJm%2BmTun3UlDyH8ApbIPz4zRae74WAeXJR%2FA0i6XfhHZa9swfSYEkDePZ5cTaQ%2F%2BHXGWVrI%2BB%2BJ%2F%2BKVM24KPVSeganZPVzSftJ6NoGYl%2Bg20lWpncbrU8dUfjOrBPkbCw5b4Gjnl8qdiiBFX%2FA5J5AlLPaw2tNXh2QS1zZVJTAHgeTsHJB3R4%2BKh8Zr%2FIR0DnLTNJh8eLp2E4ppO3hHUgWnJMUe6%2FkCs%2FHWJKegvw4GHV8uFxQHSdtqfqXFBO0eVjRhkIHTenzJPSB5p6adDs7BVrb%2FH30LQ5TnB%2BCTCr%2FuXABjqkAYPsfBBlQw58f9EVW%2FNFfl8ybk3BHTAizojfGvg7Ymj1IovTBYiLPpUVm3mB295GwlGdcJsmKDl3ZH7oNxezlDyQJqPQz55898M9TaX64TE0IJcnFr0e8LXlqQ%2F%2BG9rkf9qtMOMCYjjRRzMKDyj1mZTw%2Fc84zaiElLVMSseFEhVYglwUsv9Ea76Waq%2BEiz1v61Cag4NjLz%2B%2BAHhqKdlmRpAxe8Xr&X-Amz-Signature=630b1f9e6b5ccb16a4506a98c91ac1c526c33300d0a90444c4f93f4ebc6e543c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3CVVTZB%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T041118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtKAXzqA0ALeHNOw49pwPsnVg1UXKKVeQXFd3bIoIxOAiAzmNifAg3pQLPJi6S7s4nR%2B5TZDlgnyBSjanf7eYVoSSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMu4Cf%2Bb4fmMalts0qKtwDvrhEQW0Rp%2ByvnfjK5Ytcdr2heTeag7ngLVsOFFJCYsJXLrcpvgRFHIuH5KxlqP6LCj8b%2BXlElDMUDUlCmmR4lVA8pO044WvB0K1p%2Buky7vCqtYRbBG4QLHcWLqWu9uLQUCbrPUfApVRjPxT%2FDln4LuDTUy%2B0KsqGrQAZGxpZhs7%2FHxoqKfmDSuaDOzsBvyylw398M6ADMwyL0VvOwuy3LSlEG6P1ydLMQVjfAr8dTew9rfYk0y4RYugGcfjQjExggszNP%2BDg6EPn%2BfIWWeRGzlIT0sdAT3GXmgdwsvmWnh8eEOVUi6HRPj0JzxVF%2F%2Fl%2F6mM68NLpGVi3GOX%2Bu%2BtpuGycZD388YJ0elSC6A8AkcvvfVK6h8OmLU60j8AZPwBeHOPwq3yzxVfhlsS5pTqcoYWgKS5qnLy3QWicW9qkVaElk8dBH2IwfuEIqnw7St2AUHhJgWpwbSKnl2fbDU65qRm9Du9CkCn9fT4MYvW8Sc5CvgyWNlKxyEm6yJRv7nKuDOEFGMu2cwhO4W0K%2B2sKIyqt%2FlLKRxZYwZT8nPPCaGwgJ3t31ZGBfJpx%2BoMVKphEG5IAzptJBrFLW%2FoV5MFNDMBvnph2EmqqAE7j8dq5bi1D0y5jJcyTqGVFD5Iwtf7lwAY6pgFeP%2F%2FsELkeZTtuQ4qV0qMGg%2BykIGUWRxRVFIxMHVfZwbA382jmrii5wmX2NWknro05fuN8aG3UtwtlPTegm0Xh6JepFT4XNonMaWmSQbpDBz%2BYaSnSqWFCIgvZu3z%2BMgYYxtpCf18rWExAN8tzZ8T39lTEjSrp%2Fyc7ekMGf0gGeO5wGqsT9K5IeGSQVWJkIle3p2Vi23a%2F6fXHvOl0Ob5sap2D%2FG5a&X-Amz-Signature=c54cc4114962e177f90ecce2697ce8b365444854657dd374aa98df13cd0f93b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
