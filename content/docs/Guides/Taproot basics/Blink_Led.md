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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLPRZLDS%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDEpIiiWf1LnpAKmT0UMYQcjKLBXdYjpKTG3whispcj5QIhAMCqWm00NAlWKTyyMezW%2F%2BAF%2Bspza5OjhD58IC1Y1Xu8Kv8DCDEQABoMNjM3NDIzMTgzODA1IgyNEpWCB8vlm%2B%2BAJuwq3ANYCnNH%2BBc4OoSQ3iqn%2FCSgklVQyQTPwdzUV0p%2FmakxqzAir5nvpNQqxyXL%2F%2B7OuktOyf9cSMvbWUzvOkuGIE3R0qIO6KLYgeK9ornEijupS2TmNbyGX5iaSrG8ysaJYDEAM%2FESG%2BqDh2I27XVnwS5cBacMSOKzLt0WONz8F0Wyhje7tuluncdO%2FrfX6Hy5T5KhnGoapE%2BR8XmFpfesZXaeUvFUEtlxqKLE2DN%2BniiihTibOl5LPZ0cHlZXINbAzpINbiSuezlPioR8bbE6tCry3n0kmJY5U7LX6XefZfH209c%2Bitbln66HgSsTUukgKle4IAruktWo3%2FJVMZqFi4TBM3wm6LCbqX5ErVVTaI1azwbDm26wBBmfZC8wng1o7r%2FQrhl8KOjgtxXgddJVmICgpQBW6lXQ9B7VyKA3w6cWFxNtGJhpibeN%2FLQBcRayNMeuaJnwLXAhXXHGrb8hdntz%2BLghu%2BazPas%2BZfyWwKxDVbm43OzNa974pPgT0Xy7zpDWzBacgrVgRXXrnmm1vJIbZ6ro5ZXvkxiCYlPsjjLLMMetVpcXb43R4%2BHshkzm6vnzzRLl3pwKQse9KeUoAqoyR4QYCPNsrOf7IMMvsvCBinlQh0S51Dz9MlY7LzCau7bCBjqkAezqoJRzhhCkMpB50Ddw5JSkXHsqMn7KKQHeU%2B3JYcwC9k0L1Ze2FaHlUGaGYsRWKfL7Ha8TlyMwGbS98qh6nYcaM1BIx5oV1ChEV4QTvOF2uowDdndNCVRX9x9W%2FbDgUkQZR%2Fcbb1UvcrfEjZGZA%2BJRQzj43tI%2BRHbfLGI4ALlPfHLhxFexTRiym2sNwZ3pNyYDqvxwI%2Btx%2BLc%2FIFJ1S2F0aaOt&X-Amz-Signature=9d0dbd307b2e7bdb83317c1856720eb009ac706feb77539d2454b99747720782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMMD6QRL%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIBHr3kraJTGDxeMipdcI9pwPyMRnHcf%2FrU6yD4ShK13uAiBAfe6mNP85D%2FknwsnF%2FTlDaX%2FlqD73NCYpaiWtK1n53Cr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMe3Xxy4KLWM%2FBr95mKtwDNjj%2BlBO2ZZlcfnBC4OL8o4nLfaay%2FoUFzRIcR%2FxrwboCzMG5HM2Rxa6MspeHVKzJ%2FL02A4dtvfG4NRq6j15Wk5%2BuNOqlkrT%2FzTV6ML80i7Il6uDfAteBSURpzL40r0b29y%2BNEol3FeTS0gOu7Jyk%2B4lqLIrQ8%2FlIHkeIQs0drXCSVYkN6PoMoQ7HHKdUSI94JJi314d%2BEWOKvgTeWHPQPoWI2N9vZoca0%2Fm%2FLj4ENPqx7MApWopby%2F%2BxqZ5LEKOXn2VSibvDx8A6j9elZ%2F1dTCbR1kpMRbVdtRSi%2FD%2FjE1gwI6hmF4XcaLb3%2BVC9MUWYmvG%2FuA2X2sGHzVf3Uc7EWxUN5fz7k9rnn3%2BB0vfHjx88%2By%2BNcEz0wlaitBcR2zf9GUHOtlZLqeWre3htwGEwDGoq3j%2BxFakphSuXAscXDmhj9di%2BzhmuvfpxMjFraH6%2B8wnp%2F98QyPTHluMpRMGOSMNaN%2FuxL%2BfCOO15NYG0o3i909expNVz5VF%2Fh6NEGVRF2erVlMqVnlxnpiulEXtmn6D%2BoDcABiDhBowNt8kQjwb1ey5aD%2BdztQbhMjcAUfD7RQlRefOOgV1RBzRVNSC0hC9pSNjoOEYMF7Fn0cFcYrX8YC3H5zZAQB954pswvbu2wgY6pgGHo8rwTg2WtnHD%2FSPhVGLAgv7NmdXPG19%2BwjgI37euUepb70hVyaailR5XwVee9crff7TJvFmu9UeS0CA9DOYFVq8uZZO93I5y70Z7hTHoV6DRjTpS68MlzITfJLzDIyhtWKcnQvCrnEIJQkUAe1FSvAjFsLr5oGdr8Y5KX2WyMTGGjE5%2F7kLmrFB7kkP720TnyDPEkjpLzU%2FE5Yd5p8Zpw0MQ5u3u&X-Amz-Signature=ab74abfa54b7537565faa01352bed01b80c57dcc6644e6b3281301e643410ff1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
