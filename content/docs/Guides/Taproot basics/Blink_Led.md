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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXJJBCZP%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T090708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsuIU7wEWqU3TFBSuMFSyoc92%2F76kmSUqk8wv3Q%2FpToAIhAPipp6ik7HHFkN4ONhTsY4Ucz2k4qBUIqvKEdhG8bvhoKv8DCEIQABoMNjM3NDIzMTgzODA1Igz7LEoOZAaNc2hkoE4q3AOg9o3l4f89fgQnw31EraZgaE6r936b%2BHqJr3eNtgBgdwBMIFvqbbUpacg8HsiCwauRTrAlaydYbNjULrRge6vtwP3eduXcUlNX3MjqyGBPlMNGwPIFPil6d9NDYZKpKYX8%2FzxOb8rgx6RLVrXhZXxAvoj67xbTfNbe0zWzG3y7RHk9HRhZyJgfIm%2BCAHEjsGp5WFvHfs4HDBJi%2BPBf3WzXp%2Fu1hgkkdgROOnHC%2Fz1CdS9GW1ARGP0bJdq6sjt9sYZgU%2FcejK3WK3%2BjkA%2FHL8wfUmPIVVQCTSLqLt7g%2FRKqcs9pDrDrroDOP26BZlKzBzi1tVQENrfWvIzwhq%2B8DYwfU9dXWFu2euSVR2yW7aFKSlyqyQTtdZs8eDR1FhwsmZM74BWgBgFIpj0uBR6JKn%2BUEoJmbBHd71AFucXP%2FaCgR%2BkxAjVuBFkjriRUpdL3nIujyk1dTqrygmQ3ZLXf0r3PrtHUvTbi3u2CDCt4RSu2uOKpMPN0RF7A8PchLAniZZDGMN9jiTJxDihtY5g0KhrokebMNYNt%2FMsdx7gyPaQqjxdIMvh5Hjtzt7t4Svd3hjIqiYM6mBhzKkHlKagwoQ9h9P6bGgCOE3ClOVIAZHu%2FGqzSpiqlAx3aqwFDmDDC%2F8i%2FBjqkAV2pbzvUhrqgc24%2Bq1b%2FFQBNitUe%2BeKXryvobw3QF8Cog16kb3tJB011KveBnBAATkA9fsTrrm20uMjgXdfB0T9j0dbjl7NvU7qLjRjGxy8N%2BUjbKNs9sPY9EhWA8iDSNcYzci9N%2BFEFFQI%2F682AjHHSnO5sSgMvBTkdamrCriAFzFxQkA6QsHmTZZ7t%2FwWDsId3CGhJRtS8NNiraKTmyztrFa01&X-Amz-Signature=d253f788d10392d7bd8ceb3e4c334868c12bed1dd7ffdc229d4288f78866f523&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIXYT7LB%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T090708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi4UT5MPNbHoYkq9nn48qRdw5pvk%2B9Piyczs442W13tQIhANqXOVKIT6ADX%2FPWHvLCIDnaP%2BLgsR9p2NHpvBXgi1lJKv8DCEIQABoMNjM3NDIzMTgzODA1Igw5qcFzAVclxFIvX5sq3ANHjB%2Bsaqw32KFUBgQqOrW83xyRxnoSGa9M5Y2sV3zqic0YNQf5RdMYp36R6Vh8dbhkxdiSWPlNQlpo%2F2IUYzItFsFwUqBmGc7PvaPpZHZrxvwYbUJBGbvO1EFzsCQrA4MgEMDNUwSLZx5ZsUE8JRQqaXzztSF0TugoifBY1YRXr7%2FHIL1N%2BRBjljbeRT54Wnhbm3F9xY8lFc2H9pegsiIc4SCb3zHoq9PV8Dl9UVz7KRa%2Blo4pvmcwixqW03pVzrSTNIidVF5EMT%2FaIBx3oKN58BJUSEN%2FUy4mCV7%2B1pkszHjm5SGHI0nqZIBU%2F%2FtrEL9xBve2b5eUPr1tyuYCoBK9Rpm3y26zTDYQ8bkOv3Gu43pIEJQwU5HBcVeoE4aJLU7Ve2fnlWR4BYVh3yCVlHKaG4hADQc%2BkvoUYrPXjoAiQElgA6DKp4nkPQLZE8WsVMp5UGsV8KDmeAa4WiD6JPx1wS66oppp6pfDRsMbgyOrDvnRtex0bd4Q%2B9OTdeDU%2F0XBl4x3wEKlTrn4X9mHYw9bjR0VS2J0hHc%2BF3cooW%2F33xVFblRBCY532UxexYETtvnSKj22YlDu3poQWaX%2B9OeVM6MvHyuMZhCCVffgfuqQI5bStiM3vQxi%2B6uh%2BjCs%2Fsi%2FBjqkAVbMhQaZvyvYASuL9CZHDEpCiJeOMyf2ZEOGe0XwhRVFIXfw2CkKKa33GY9WIEPzh%2Bb3F5gaubRW%2B0xpuZSdrguVaML0oYckd00AOV%2B2mQCKgoTXGFw%2BRLUTmMB%2Bgcm1UNG%2BYeC2AJxXFWs6EQnUvi4WqY9TWTOq7sryYoIzWYRbR4yAtnK7adecJi7ZP6qvWNtIeIANtsjRqXPgm7czdaWlDu1y&X-Amz-Signature=f61623db6c9e78f911bd9adafc2df2609cb307098e48c222b9974921db4e2e1f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
