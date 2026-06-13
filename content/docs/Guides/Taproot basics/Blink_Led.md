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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFUAYYHK%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIEO1Bn0hD2PRmhaByAg7%2FaTlEfeEGbJhUf6S5J02OSk5AiAYP%2BG7VPhi8qvawJdxxJTukTLF8kPrBJ%2BM7coQaGmnwyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIM4X0eEz2uAIELxW5NKtwDwP2lhk7Q0P7LJOc96j2CMcbK4NsYuLns%2BqdhQqF5eHjazuyp%2Fk7WQs1D%2BqKS5%2F3ufDNQsysSraB07sgGerlFbLmLHmHV7oCLN%2BelM3mXg0zbhg%2BkZOLRnFfBNGjimCC1Vwpw6CssCsZ0lXOVvKgPgd8OWZ2bQ6LF7SZ4N0iMKK3jRNOdAiuFKwI4pnevaEDswCeFwZcobOPbo92b6JUOG8NGELFbl%2FZL3YarMKzvJ%2BEce07YsAY1X2gdWM7GEFxFj4nT54DoQaGlqK4f5fgxWVd%2Bl3%2Bl6YebvSGZdA1fEUvWCARHJWEhNFyL51d4gTLQWVXwR1qWRgsiNdy8v1%2B%2BmfRzgG3M58Aszn68kZW5VqPpYQuShlQhEQ8KzoZiIt76ttHH0MefGWREpl2i4l3tTilJXzj%2FiZq3a1%2B9sN9cVzd8IEj1aUcpuM%2FrbeP6%2FPOp8oLlSK9W39YmB7HMJ00ndy8DATkYWIkzfVtdsI%2FVpgRsH5bS0CR7HpfkYK6mgxrGYUyYwuS4q0%2Bhw6D12yj7BYzbSlHG1Mk%2B6qVBqrdNGwcA8CIXLi7rd1ixvXQ1zLP%2BuQ9EUIKBCoCZom6UTUYnSzuIO7Dby%2BmkZMJqWx1ZWZog8Ihe39cT2qbwE6cw%2Bvyy0QY6pgFBOREh4IWeyZ%2Fl5n68TJfGysab1%2BLnU2iR1kGPjT3wIoIy8lIA6YNrqT0aCY5bjreAId48ODnZRjCUE0Ozfs18LkoIjHk%2FBNgCLU78lYlAIf83bdihmhvNMJKaZMz5WAG5Ef39PuSc%2BGl1dGguE%2F4gWKsb9rsG0b%2FZkLxAu6qYDOCI3wW473Ao6hTfq37UzrDKWDtYLutROWj0omb4aDAb6wCfJFe4&X-Amz-Signature=6b9e1871eeb2c4c86453a3536dd702cddfd2f6afb70e15dd0b1c8720d496321e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QZULPMZ%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDOuVWCnBZHeGi8uSy9idRHP0HOt2SS7LojCKIRlSBAjgIhAMvC64Us2axTCRpJtv%2Bdz40h09SJLMa1TbuMRmmSSluvKv8DCCMQABoMNjM3NDIzMTgzODA1IgyxQwNeS%2BgDTPCt0wUq3ANVRHEx0PKt9ddKygsKLMgS0iOOgIEiVHf27Wxkv4Nc7SfEy6g30lUBxCD8CKypOH79ppuZgmScQmaYHT8Qmr%2BodRxqDJdm0Ne%2BA83Rqpzr%2F25tvCfhyD5CI%2FSm4dVtFV4Ls3wfnhGb%2BRYv0ww0hVNKiOijoV13C6rhAgg%2B4FVB1%2B%2FBlvOGPl02JFjNu%2B02Mj6HG678vh5zF61F%2Bax2BXhAjIry8ZJYHGtejxXv6XMXsUyQ5wIzJrOi0pXB7pAERvzMW%2FuoQ%2FjFEALjuXdakJUlRLvRthI0lvYHtEGt6Oh7UusASSpDN438GknduFi0DydLixpc1SUsIJA9w%2F4QYqHpTItEnaIeJVoXR7iWZd57l9k6saFAv5pmcVv1%2FqnrjG7IRY1idIqO6H%2B32H0MwvBEOktw9h0u3tDpBaG7PsdyfoZMMmFDVZ2PgDCs%2FzlidCeMeSgUpk7p8FQiORVFjkJHkMG5c8QADdAeyfWuc%2BIkkdJUBOA4KLkCrs%2BPL9FMjpTmz9OOUn0dKz9TObkTHZesuRxw8NFoRW3pM%2B2HndEVwVIykf5bnm1Yh%2BMKvpYpC4BVicAjv%2FfOXPh4iuk%2B42%2BbLSiM484XY8N%2Fq2ShEeUcyAg2E7BrwJDXnzWOnDD%2F%2B7LRBjqkAS1%2FeLeiMkkwUIfQziHhhEzgxc%2BLYNF6rViDAXFxWgx0yYEoW%2BP5Vz6w8MTH2mWeEBTsq1cgrp96RJooDCxuXvyBay4QDs6A3Fd1PTX78eotF%2B26vX5ZUuudDJcDarBiqGlpTLxgM1D5wGvtZ25dJhD09is8WlrVgHDB7EVxmFxoi3NJaa2PooJ9qLHNQGtEOcIMahrOv9Sl2owDOnYhMSjHSgLf&X-Amz-Signature=b25bb936355f364a2a8beffe4d5c5cb00e51edf09cb9b28a0033d9f496de445e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
