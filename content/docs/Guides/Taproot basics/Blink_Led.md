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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W63X54Z%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T050756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDkMAzhwLsDKrrlrDg3kdRyZqIDk99DQqCTnQ0Oy9vhMAIhALNjoeWNZ%2F%2B6X2oi5M6AXg4ClGsb3AgQNvPBNdrrRADGKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFvNarp9VhDD1Uurwq3AO49gAqQ7KrCBDuh9ddY%2FgxRikMMt%2BDgARGR9erYh8w8UWGci4BJE1FULBIOgz30p%2FJHiIBJnUzvgy93Ty0Tqf1ZnoyKs79mefGyXC6j%2FqG5%2Fp3vXOLuS%2BG8xoA7dxjvmzlx49Va3aELSwpfFk%2BMb89Yvn%2BCtj4yVlUSaNs90MKyWXj4IRVEZCo0An%2F11vPB1%2BGTeVOzppF0sC8ZkiKUV0NOQjSPPIX6vfza0fM2RFawA89zkefQyTlNcZrkVi%2BDgVJ9kIgvzb4sWYEI1QPG4zGnQM3IBERc4uRQSifTZDpdrzDK7fjil3VbfwJRlaWL0vMi139buC6kgYpO3oTHvJgdZoUC1QBu%2Bw8E4F1T5tshrqAZPmhF86ZBr4zYyqUKe3mEIbFCMrh0IPpkle7BwkztTrTKbe6sXcoEPHyUjHlgC%2FLzevsGety4sSMUzIThWqo9z9I7PuEGOm%2FGP2ejhJdP9TPZR%2BIg1pEvHXWTAhEm42cDw40qWOfuuBrv%2FxPp%2FFwQMLMObYd9F1rlP5BCvH4HPdOeYHUxrvEH%2BjJPZ1POYt0kgJ88emno6oIylYBAtGmsygwGa1U2I%2BI%2FgjiFRN07oxFnc7y%2BI%2BdCGwqYmMRDO0t24lz1Yxa5u01DTCLxdW9BjqkAZLVAbau65E3xgweLh7HZ0YjiHZDIgkbQwHIxCjju7qgWktIb8GuW2tXl28Jl5SBhlXyISZu4mhaOdKE%2FRbEjYijLq4LoRxKK45Q6EXZJOnmpgAUT41gpK3YlF8xW5hebUkBQZa5uv1mDXQRYT3CY13XFT9Q7tluot%2BFZRSsrsbcAFC3S20KjTWE4dEwnYjMm9FLMawOQnmRQPy%2FnCFBrkgkF4OM&X-Amz-Signature=46392545069589f7c9b5f012c4bb3113060d9d7e212f130f4f8956811c9d0584&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7GQZPKL%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T050756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDB2N%2FwqgtZQAYoflkjiM7sKuI2Kf5RjIaDy3UKEk%2FJcwIhAPY9%2B9vRF1ylS0Sh8YfyL%2B9q5uhkLl8HJX7olPmz96ZLKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxL3c62EizwoCup5%2BMq3ANmR0wYSVr1%2BmvR48CTgM795cijYos3DjabVLIS9LNrJaJGqcVCwQgwaJK5A%2BEbXrJNHCQN38hpm5CXTPdBSsjbvu12Op2Y6r%2FTpGZGUpaBPAFe9LKhNiA2rO6bNgW2OoLxY7Bsa3l15GRCykU%2FmHzKtVv1AlJgvVUaJiQBOkHwutTcpVheTmDA8d2wF61JIyBs59NrqnR9QY11doxYR7oeKd1vA5YNqvPIjDtYOWJjg5mWuRegP986VuqNZZOYZdRF2RyyA4WXh0yn1KQ5Ku42j2Wo5w0zShufJy3cj9evhq1%2B5Cfy%2F4aCMBoOH5CP7k00qofz92Kx6UODZKHiu%2Fa7rialNuYym8in122xnHliOZx28CaUL1UcnWwwC2nCzGLJGF2OoqzB31%2BHQ1B3uPu9beu1A%2BYn7%2BIb2B97cR1iCDfGxQx%2FLVigEXtJqh7TwSpVUJyUT1TTpnk9dFfZp7dBjvdpHsjAHnlfLEX7%2BA%2B%2Fbf1sc3%2F2ervppdpeY450ouz55vnTL%2BNJfmky9wMtrgEhJ8y4mMqo8ohUW9rp0sMUajUlu2tGzkJQofweIsv8EUBD1SyduN3LzvsB8Ufqo%2BSRKymI5TBlLyPm5j07wjvMpI6MdjZKqkZBURaJlDC8xdW9BjqkAZzqpFmAto6MwemCs4wPZnJMGo6Lmww4tch%2FZIShlFmPYt%2BAe8QP600YW%2F%2FcOG%2FnSbzuUhiRWrSROpoDh6ImkfNR%2Fr1DHV6i%2BfFq37cc6NBDx5iopGDxpn82%2BeU6YqwMz%2B5wISii%2Bp48S1wOBcjbl6dr84bXCx6D%2F0CVg3SMtXShup%2FLStNbt%2FS9wDsIuEMk7Nnczv7o7n5%2FarpkeRtIuvxzvFbX&X-Amz-Signature=db1a70544ce3a717f0b025a8dc04fd162f51c2540163a2216abf3d73ee054f49&X-Amz-SignedHeaders=host&x-id=GetObject)

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
