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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ETHQ7ZM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDywcNfR0hKB%2FbqLEAEH%2BHP3SFD7FibJavJx1HMnP278AIgYdv8UeUORkoP0KgTMIhpA2xz0kbtBtJMEDJ2W8ZqQpsqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFIZzxZb%2FG4ej2ouUCrcA11zS1hBCJdRpByDgFtHHPLR1cWfx7Q77kKGPGaKxBwzw8EEeafmQuoY8vi3T1ormoSKz3J0SVx3mzb3RHdmq59fWoMFMnTZ2TmlD9f1UmOIOgr5hLwyS4%2BZmzQt5c68aIdINWuXM5bKu3qL6CrJaKlLvbAOMb1gelny86IdCOpY1AEKIzPJRcbxmX%2B15BIy7uprS0oAIuE0tjIbdpZO3soK4YhWtIrofw6dyq4%2F4EGu53m4aABjK%2FqNwYFYttYUeSHU0wliytmsuRJOx5KQSV6i8ToV5Nf4Ng%2FFDJfjSuEYkU9KPzGj0Bc2lyMmb9BwVov4aKEsT9sbFYLBwC5DUAKHcVQrWHhV6%2BRpIbls7wvCtQ%2FL2vOSihvMeeTuIID7pzYDT8stau8NqAO7ED8PE8cKDAW5DkZ%2FYj7KGQi6NKG0j5hdZ1VnGunIIRIFktTGWKB4qZ1lOKrZkrlEc2JFi2FKuOEA8Gnrrj%2FlkYsw7VXkEQbSQu7ttBl%2BVi64Swk8xFaP82P9ssHW114jtyoVQpLSDKiBK3Wxj2MuvXoVpgG0sfaRcAPz%2FIJtuaH2Pcya7339i3g80Fb423SJkEVotVPHPvAj9fudaUhyX2PQLX8ZQkC7tR6hV%2BL%2B62LbML6S18QGOqUBheDQt8M7NdV05G9HoI%2FoGg5%2F60sWa%2BsfvElJewwh4SPa2nTxm1Fu3AdYVNaD9GboZt1ZWhS5VDZujMqN2mjuTk6ah5JUA5lR4%2B0RqiPm2q0Ix%2B0j%2BmVgTCgR8FQx9ysj%2BiwlqWGvgML2aRu36G60IFWYh%2Bpy5TFwLeTF5m0w7M7S9NedBH0geXQxgzkBbJqTosN7%2BoVwFuwqHVZzRrjW8Y9uCSUe&X-Amz-Signature=66e0fe50fc18277c3462319ec09668dfaf5a2f624335aa8ea524b1c640b6c90c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FPPRX5J%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCxPZDgbUkNRzvqNC%2Fs37AL1But5lKUUkx9w17RqH6pbQIhAJ8NH4NPpWr1MCo7zVJxT7iarxf%2FLCqWzJwc3fhjZbCKKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZnyri3jOkBtPjOuQq3AOaew5fidFpUcgfW4hX0Oq0y%2BkSwdhgXQsOYWAZObYg%2Besahe0DQGnhLFs3I%2BGb%2FSmsGyQm64rDn3mElnIIyAKVyhpUWGPRhmkskktZVfnZT8gwoh5u1Ph76nzuuU3KAmR%2FW%2BwLHLu4QKHzMeuPTrLIMF9G6REI1FVOrVn3oAouyw5x1ASTtiSpSl2kLnaWOKRVk5XfTtN9f%2B0PVWd7OTVUpZqIRqgOW3%2Fi3PgdcfzFtEUh9kZfnUIrf5zVfLC2Qev%2FTaWNjUslbroLWuvpmkMfTxoQCh9I0WB4Hz6IyNMwaflDxt5RIPt4U9tYfq%2FWH4hWQ0Har8sKdFDKw3ofzJjJYqVFB5n4MhFDWdtd9YDtPfYfQ7Kp5nIYkyJ%2BiqeuIKn4o8wzAYyHMpoyOZWk7wX7qvURdr7DLpudPmXgdf1mfNmNspxhp1ZPJBE8SdT%2B%2BIn1O2cHJBIrlQRrFltBK%2B4eGxcTMz3qYHog%2FtnAEuur4N%2F5W8F4jZzvJ4d9ZaIqI4MM7XvOpemKjb0bfyp%2FlMpq3r7BzAWVthuo75sX8pqdzElBtkAxN9MbeEExXu1nWUPUUBZPZFSGFpfqWx9RJuuW6L34VyNd3l9ge%2Fm3BVGHFzyccRCmpEE3iF37LTDLk9fEBjqkAT6wHhJk%2B1l%2FtX%2BMbMzjnOkC%2BBrvbVKkwSDIeiZS6fVyi8g%2BnIRAPxLVqv1Wm9oEOlIhvfizuBznx2oGKccXu%2B5nK7ahi0T1%2FdkIDIV%2FU8SgPA72DkZz2d6PArt7wl5w3ZOFg06Iwnwd95YGe5UhpTrUQ4WWrwB%2BYYDC%2BfxnIf7wlNba5mHVB2T5oNjimFCsdmYlkyfM1NYHLoS%2FRdadD8QauekX&X-Amz-Signature=49a1d3fda85389b5f8f654f1921d83f6f87acaee2045fa9a46facf7e1fe4aecd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
