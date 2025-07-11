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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667COQSAUT%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T100949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdylVXc5AOLCJ1ZF1HKNbTDU84mtFwvCpzC15mWWrCKQIgcQUGbCRwXTVRGDeL4RiPLu3agAG2Dr%2BQ%2BZO7qFZMyrIqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMQSn0y5buLDVE%2BByrcAyPy3Y6DAhwE0pp4agWpjnvcw6WLBhBak2ucLfDJml5%2BU88DbtFelAnGtjcydqOZ2NFRpUkjw3at5ZgrPUzCy4yM1euKCldox%2BrpfycGXfmgnEwamJwsq5x%2FGVRGVJdIVx126ojNOQhJQ8VwN1al85O1%2BZUbay6fOzF3e%2F6Ar%2BsYQdy7FoHHcXxlAWuXKJczGibs35ukbG0RwOW2zMeu9O7x3fMfe3fKa2lCa0xNGjYBJDG%2F5ofMxcgDXHCHsiNLC49%2BZrT%2FWgL%2BNZ3VEfqhZEqbdwnPLzTImwIKlrqISk7f4eBfdQeto%2BNo4yj6bY3ePinmAL1HEIvZKrQnOvCk3ExsQ5z9Hoa9EOqRoSdOalQ8puktzIWyrLzo1nQcZGtCw8WvASA%2F5mp%2B7kkB4zxTK%2Brp2BM7x5rczVsXzJHA91%2Fd9fh%2FIGwxT5Sa4s%2BjlQQ7hgTn4paQkx%2FR49Vk7pT8dbYgmoDOBExdsL%2BO2ew%2FirRtY9zPJERjsMl0FF61NV1Mqmk2i637k1WxcfsNLZ7wh%2F9laom8JJsJnjSyIkDuWdtzTGuDCirM2VJbdAWwEBy7U%2F8S3qG0Ck7SIQ6aFyQ984JiFcqzckcnlW9ktPXb1OjyXxnVPGAOWhuKfwdLMKWnw8MGOqUB9cAMdd4mg6%2BOKbLWCAFOAqtarzue1rAkvveHngvZ6ZCLoZKl8m7ktSuq8eFBe%2BEa6%2FhriPZJO58w23V9qkiz084fueAP9f%2BfvqO9eCBI3Ua6De5PLgF1KzR84BaqW%2FbyP495fQ7XohkezQFtx9AeHYVEO6RoX87E0DiPEMhFukbufYzLNWkknTEyK6yWk6s1R%2FSoqRGWC6E%2FFedBgxfZhaNTsTSu&X-Amz-Signature=5824106d2dd43fb681560d05477e948c0ed166b8561f15480f64ae6063ad9289&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UGJ2IEN%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T100949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkQD8Xa8wMBlEvbOa30jDgMMfAE4Bf4wL%2F7t0wy64tXQIhALsxSELIsAy%2FIuWxISdQVrGMolhsiyc20Cqph%2FkWMk0jKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtmwzMpCj%2F6KnebqQq3AMjQIrop8%2FB6Dh5bxzKC5kxzFx0DeiyolFpQ7ELVqpu8SzWMA9xtUTOJw4qV0KDbc7xhIl6TMgtvkUrKTdbFuXNHyzpQLxRCLfGsjx0oTBqMpegeme3fhjZ0Ug3AJUpsfFIRejEGJIx9bBqj65iJyrFIfPI5ZgAmeNjQDp3j4evivPg0dQeX2HI5kNDL%2BpI72aJk0Tw7LgK2rcgE8qkO1moV18saBMMpaXlGqVDGupMhoIgKIdgXVF3tj85g%2FbbR4qvSiVwwc3s4Euxt1jfPPsGmQh%2FhFImL666c0WtzwA20JC1SvdhfpnDyWEg3wyxk3SbfaxZT84TKhC6YnEijWQzLKj%2FslEp2NFeS%2FVqjli0BRUia9H0Xch61YNWoEfx9ifq%2BQCUyWAmezvF9HgfYp%2BZtgwYg0Ud9K%2BHKC7gx9%2Fm05D1%2BZtWMKe8T%2FrhjFihcdjvh5u3xq52HQa2pX25tCZRYbIOSI0dKUf4MTkBC0T4AaoRSe6mewvSrTqzISIMc7Jfqw%2B3xXbZwPHR1db9R1OqW%2B81mhRyBI4CMkDVyNGhjkZBXuPtz7jJ6Yg6lanA4DpATnUZNJ3pxRw4dQpkW9%2BBvaVfyktNo8Wj%2FbSIRd%2FF7ATRcpgppMeToQNgCjDzp8PDBjqkAVFCa%2B%2FE2LAWDt4Os9jDXgJPyv5I%2FNMbhF4uEpDz9GQwGMO5wHbOlGm33%2BTKhtRIfn2YZ3kBdbniFVX%2FVuGATXPG0j68gd5Gp90DQGXHdNrxq90ks4hz1Y6RGCI80Fg9vy9IlD2L3HnfY7%2FEXJJMC8EKXEd0oNofQF7F%2F45MuaHNpv6N6w17Y4IwzRXrHnbkw1AjpHT%2BlZuri6lJd0J1y0dLKbuV&X-Amz-Signature=ec1184941fec112ba38476e99cd5681707bf3261f161bb36f6b39e44f50a3370&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
