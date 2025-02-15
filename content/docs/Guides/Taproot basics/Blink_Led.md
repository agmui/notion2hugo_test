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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622B3YL3W%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T040847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQC7eJiSBTBNtnRqNrhswmT9EfLfc0e79BPlR4F2pacVjAIhAJ90an3pEq4yemFD7VsCEXjHT4f4%2B34nTMxH%2Bcyk%2FMOdKv8DCDkQABoMNjM3NDIzMTgzODA1Igw2hjKremCGXCeDiSoq3AMtZ%2FprcDqrnudv4THUQbEK2oYTubPteCdl27vHpotMg2TzapsQKUrvBepRq28b4MzjmbQdb8ZP%2BmgiO36ve0nVUbAMpduXiG3ZAS4n8yOZU%2FpCkxXgtrM4sx19WzVG7Xn48HPCzJ%2FA%2B%2FypSkMPypwP770MvTpqmvhLwUutqDJa0AuFw0NPi6gPLNQPdgu%2BCt%2Frk6qOdhXed9OF9fqiU%2FAepdST8LB6gtaJK6FuSWmomIu%2BTUJX7W%2BFcTu8jUSBH%2FguUcrNcmc56DV1Xf%2FmFxVmjGenXxANkKQR%2Fx8mEBq3oasFDJV8oWAQE3fdhBbgsFsoLdNMx%2Fx5PvAU0Q2IH5TbjIpeD8DJK18uvBt0ZRc6b1p53tvMxJLUZcqptEZhwwCPUE3fx7MA%2Fs4xhbNL1XJim6fnG%2FPxlEu22WyiE70nvmEKbDe%2FV5td%2Fpw7QJbMjtRvD8O7BS14ho1dMKZqFY63nxePqcEyjBxyPnqijyaqepAdbKHvmwAl5WDxBcYvVv8VmwuCCHWoSua0cKcjTWqyekCk85MR1gCOppmUqMV2HPsbXl%2BaWLVB4TvOMnAHELYrzqfVvNdlnJ7oDUn%2FjSRgL3lalCxG39x8FgEqvM36EK%2B1Ug%2FO%2FReNRrI10TDbtL%2B9BjqkAVM8p8G74cMU3pdU8NqRMIZKhrWAxxTmWk0TsBKg84ERj32NpAICsxBeLq8IIhoar2S9RsA6GydpodxawesVmYixpzFdNz%2FcrnyxMtytmGDffT9abYe2tXETSI4UJXvX9%2Fxg13KR%2BIw5T3AYegLmskkKkopDeR%2BAnvFap2ILyqIemtPr9bLbk9MCkAvltCBBZnBKdwwf8GhqqaF0lw5l5JYPNyQc&X-Amz-Signature=f8c499889827ff044c603a4b1d4c7d50915bacce95852d8fae10de02a5194ca0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OSH4WWB%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T040848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIDHiQlywcoxSYWfKxT1EbO6BtTlC9O94jhLbdqOMDJ57AiEA0SYY5PxL6HRDrljAe6kI4q2LJ2TF436Uc8%2Fg8ObJUAMq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCqu6gZW2%2FY5%2FskImCrcA395hieqXD5pmyG7VRHtCqbxZRkA2bXe1mD8UrTa5bVlOnRQ6vcwKCJkM%2FKksku%2BYpKDfAWx3qjBqwQnvRxCAhGwF6VHi1401ud87XDz7WTyshKu3juJKsZIhcIPTRLraB%2B7gOOZ6vxt93ZtGrPpGnxW4gTrBkA9Zfe0AMvnGYnZlJK5eZ15%2Fg5eiCcd9M2YS6BYLFeZyOtV533T25Ti4Inag8GqgOUtIXS6B72eMQJ8AQ2IoEDdEj%2BJdBab69kWyOMcObNopmPoPGLBb2GS%2BspH808OwV1vriihqFcuPZ1eO4kEZWHrQyf681zdNpjm2ZSod3Du%2FKE3i2mUwMMTNWgHTk3bW%2BNmH%2BANtg%2B28K5PUPDU%2F3HrR%2FV7x5MrVisBwMz%2FbRcc2rwewtOrjSJ6FEcL8iRfG6i1oJjvPLs%2FemG2O%2B5uLztiZyv3RnatUptHWiEfLWUthngFjwRQHqHAiBZj9%2FAdczugFRkirwOjmpatwoAlSt0yOUT7JoFWddkecfj6FeAKTp%2Bl3eTbrTkTfFe6jRCs%2FNkxRRe9Y%2F9NmeCNOKZc5W06JgjKZuwVb0DUdZB6vcL0gCMe6PMP9QHFh0OAo7%2BCj9fmC9hpeBAbLoSPq02df59xeiObW5l6MJC0v70GOqUBT2gRP%2BGzWugApYKSJnmhN0dJ6nwkBDgIX8u0omBgtCLpfdFBLLJ3jVbNUDD4zmhy0zTwZFEj8mf%2Bcs35ty0ZzNQ4z4ZY3uzmJn6VTLRbyFMF35FvXx9aT8IwANGOnEJMststrX%2FbjVepbCuhTuOGdLaWThYsuicLHtrduVJXALNvJF4bGAYMzKcIvyuqQPe9q8TbQU%2FSIuOuRD6SJBFbInEYIZS8&X-Amz-Signature=f35737fbc1b690d477e7118538ebb013dd5202d42833cffd48ddbb52938b556d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
