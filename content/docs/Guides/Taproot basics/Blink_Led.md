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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNBGSJJ2%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW%2FISm45FPd1JClbm%2BgjInvzIez0h4uyGnngqeMsVWFAIhAKkPtcTCopCWqYEJmCjTnoSbPl2UBW%2FN5oz7v6qxYUsGKv8DCCQQABoMNjM3NDIzMTgzODA1IgwCjRwyvOQs6Orocm4q3AMpLKrxIR5x3gz3aOVuPuWA%2FtU8Nn2k6lwLGc%2Bn3wVOhmfenjBlSSolMJGteDBADBqQihBtNhiPnxcRbbbzqTXS7FCjdipVtzsRxNApa%2BoeHEQ5Za%2Ff3e3m2%2FgH%2BeUPA38%2FBj%2BDFW8fQh6%2BM92THlyFNcawVrRonGAM%2B2u4bkFF68Lll9Dxo3mdjKYSENCq%2FvNbl1V5OWcMBK8F8K%2FkjeMgVzHOaA80DSZTODQZtBqLVG%2FVwZwBvUz9khpmgZ%2FGAbTeeBLg%2B6wnxQkzLtG9%2F8sJnA0Rw2Mz3bTnBQn8gznl2vOCCMaokN%2Bfsq51N1ZDaTBgQsCy%2FJL5dFxZVZUEs5%2Fad1c4UWEK5GHrAr7fTvTmXxLLNZ1bI37wUbnqh43%2FfrjsgldfJccURrk%2BU3VngFUhPEgyvMxcBPnitynAzHAS8Htb2fyYEC9uFOrodfXFH7FXCb1b73CW%2Be9hoBBDZVCg3f64A%2BzTxN8OEqMyVBoqfSvjHKCQ4B9B4BZddg8e26lwvIH29OC3AJscv03rlneXe0soB7SD6WIXwKonHDuBGZBqhk6kd5LBUjwSIKFnIgEWvO9aOG0lyFpcBXwcHA%2Flhb9U8FLPgncruli%2FgnTy1HjD%2BIGoqA8LFU%2FAyjDzyo2%2FBjqkAfli9HCnF6RqUyXLkxbTFwmwToYF429F7FavlmjQToV5IhqQQDHXATETyozqUelNr4CPS2Qw1IKGCU2jK8ivIJwW1bOergWhrZ7bPDz8Dv%2FQEG7ZWambPJeCBiHPQOXVAqrDxKOMDJrMGkxKOutfA48ZDsJuc04uk39TOvrB2%2FdbWo7Qe2DbqFGn53%2FhunO3P1JHSD5%2FVYBPordtNUCRTB9RIxm2&X-Amz-Signature=6097a99e3463c21489b5f3e38f0c0864a7a67aa8dd99f7f57454e90e39ad7a4d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSCEEWQS%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEOkdo8Z4qxBhJWK39dgwGIkwLUrBkDhCNrAl151j8tgIgC56pxKEcNL%2BXR%2BOFiVLwHmegBcfC3B3O21l9drEMFE4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNFj%2FMeGuefQ%2FSJ%2FNircAwV3EyQkxaxqyFTUEapoDEXKn%2FR1%2Fgw760TQLBiIXnXJhD%2FdbTi%2FiYzeb%2Bp7KhZWklkvyDTN7RXR9R3JI8Qraz2zCIwJae3YjEfvbKs3AhneAY3IHK4yPXfjSeDz7QcUBgQpYY3XsKRUHdo%2BDTj8PF3cKfmbUH5qqqSzpKP01dv%2BaixbmrKKzUye5nCgzSkOja%2FE9sPKYpQKztk8vwIAdcpIv5Zk2E87g1kGekUXRZIw4T3PgF%2FVoXw%2Buy8NsaQlOHGBTmTMG8FZp8XrOmGuncQUs%2BQiqZ9sTn0J9YM4QkYPdUuJuN1Vs6pUBRQs3okNLA%2FwGRTIaJM78lw1P%2BZCA8f80xpu6oOUbDFSE%2BGx6Kv0sKQVVKEbalGKYJoe9bXiiGhs9hZG1i8U0itjfJsriTmI9yzOp3Hyqdasqm7jwTjWJYG7zixp8wK8XrlLRD9PJzDFAcNJABXoKhWw5LXZZq3qCgX%2FzjTpgBqlo0pcYrooj9uJ%2FgtUvx%2BQVSexuHI2tETm1vmIOoiMOiKa1UouwQU3DEQGF8jyxrTGTzhfw61jwNTqvA0JlBKLIojlojPoBCBBzhRfaqbUrcmsQy5y6MwBjkR0gC3jyYA%2BMc1aoeEimyf5U7YK6RumhMKYMPTKjb8GOqUBVZIvvpCIA1Uf5eh9mtyY8Uv4Du7TpU6QhbJAWCqD73IxRLRURqhOb7n6TsXunOSyD8HThmxCKA23GUNOvkxNi%2Fvj9CN7tVnR4r%2FVhbdq65hRDa%2FA8ZicAJWIQLXnz6fXUWUpDEz%2B0No6FUBzuxMl%2BUmvq9%2FC1tm8Q8fkGcCg4hl1LjU2FuiQhZnIRs2EpIywquzYANTivVq%2FhEYwpoYo%2FgrPKAvl&X-Amz-Signature=3bdc52256231caebaf95e1963ff1493eec2b813467db09e6370a05538278b0fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
