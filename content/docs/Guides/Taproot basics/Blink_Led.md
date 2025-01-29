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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E3XUXQY%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T061036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCv8YtZIWXym0Ef0M0XCWEW946Caleev6lfNh3es%2FJ1rQIhAPEHYx%2FqNpuVnAEsOTnR8zZ5IrW9N9KfZZCHacJQ5zu1KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdM2Bbu4TPMUKgIyAq3AOK7%2BO2Gc%2FzksOX5nNaeFwEQG65GEaQncoqIWl4vRnbZkZgKzXZ98B7aqc%2FfOjJZwnbIbpwrRzCxU9OMjMBzbcWVsZvbJP4RAVJh%2By2z%2FPJN0c3aMQ0zCwRlbiQuPOXeuzXhKWqqDgCiJ%2BNNoP%2FUTD0O%2F81L9Rj6MDnDl7WyZMEAe7ss6rRuxU0SXn1rDUTziroCzW01sroiYwvTo7VjSdDOPuftitepNcOei%2BogVxXZ2HrBdlLj45aLYH9hx7EIJ4jnQmGIFyUoTSw8GCDG%2FNhDa3rgpNM1JwceLcITRWpcSS7WUHpPwODlZGflXQg4Z6n0Vc7IBuDJZguw3jjbN7MrVoeCgvEuylnE5Eb3I2qi8C8gfF9OzAfkoNuD4qyFEq1kJ5IX%2B7ExI2HsTgw3gYobz8Nu0FAHiWWHjjr%2FmxfSI53FyFe%2F1FVpFGBec0WRywTsGCTTLv6e90GPrqjfphXYGqsOmfJgdWPJWjXxv9x%2Fg8%2Bj4OlWDEZ13u8QtA5fzBGD13RgnGYoZxHnyzhUSmcSMEhq0uZVMb37Ym4D3SVB2lnhtZTaecrvkhrWifRb3b2D%2B1HyNOkoYxAQoEfM7QJ5k218V0JH%2BPqkqCLgJ8MveocxJkxChIMFR1wLjCXvOa8BjqkAS6RMoteBbFgayPYVv%2BM6NLOVdMYMN8BudI2P0uG%2F5wo52ZTCjZkTFHpdpjE1fUNpeA%2Fe5JdBztWNBxIeS193HK3b53jeYkLD7UqEOLPR3%2Bl5FIeAI0tyceecqCWgQocyW474rHUlQ%2F7wOfM4NkmXnWoGfGnYO7X1Cqi2vozpOBG%2Fwb5Ef2%2FoVpTLwwLEkPpDNYTnUuFKJRpuuCbfjFOn27H9Pdp&X-Amz-Signature=3764d74db68963178d75eeb5821587cd88d866ab011b741ec0cefa353be4f55c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOAOSAHQ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T061037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDrnT%2FD%2B8AQ4qCXzTvdc%2F8cP9el%2Frowxi0W4JMDE6OMWwIhANrUklHR95cCEoNRqUc52FLaNC5S3XSCh1alTECcI5kNKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzzafra5dwM%2BEY7LEUq3AOu%2BrcEnjtzqRd9NRKSQXwp6nSaGwyCYmVQXo3I9EawKc9u8Ai9fFSiLvTGBRHvAzRp3eRy4nrfiLUkrOf62joxAKiZ5b%2FxHoAtvCUohoSueo0pYVHb9XBOyRO5ZM6iZT0BFmeN8xa26Sy7E%2Boik71t5zvus0BUbnggW4rnC1bph1WALuZTR%2F6sEQd95eNcJeXh5Ctdfptkfj%2F8OxrDZ2SWVLlN9Qv9xD%2Fe76YnoSeSMUyFJoUS3m3k08YDIkljuEWaJ1nTdK4JuDMf4240smHU04Nd%2BIACsCS%2FI7AsMpdJQ2Dlu4MlHlJH2EvPuboSp52zgCHTHzp%2F6kFpWT7NJN0WXyIWCnWGuf6sIuKZ2LpHvGIXA5FSqQ3N%2FIAGreQuCn5uVEpKJwbf0lLYEUrg%2FWYMvxtBzXp1GCPaght8f0Ba5SwMgR7zoOavgEwKRMVxPhN70w3fp0UrB4qziA3E8RApjj4JzoUy8S4fXxTP8fOZXlSlynOoxjEjErtANUc9GgEOb3XqnFjPj%2FBz8PhS77IGTBm3We%2Bxu0j7cAjS8HREpgeuidDhIUykg%2FDTSIJ1bV1RrqQvSaWj9zOTwDn%2Bq4YvngRQ%2FYRf6u0UQHDVNMnmgGBBM%2FdjkgMD8LIJrjCFvOa8BjqkAXb9x4wGeJc9WrVBx9MDy4IN3KQSVnh5FAirJP6JeztIthZbs6B1LqGUtDgvK45B23MeYLKGTUTqbBzLAEpUAjzoQKVrO3xiLBN9Q9L7bfjSl8w9HK6xCPHU0piBvb%2BUWCHfs2yDgCF91umHvciGXVAzFvhOqOerDWsL9DOCNt0sMOqA%2BNKkii0xsJNPBZ6UCKnlL0edADxltGjk1EYj3zw0Igbj&X-Amz-Signature=c6629a46612257445cbcfe72a8902fc15e6e69b25372a39b3a8cb1933108381b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
