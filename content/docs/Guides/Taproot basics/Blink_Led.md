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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMCA6M6G%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7ZGMyBmtJsuVJXyY2lw6pnxnCnXEqotd7G7UnbmpYcAiAJgqW6oO0Tvt8%2BN9l9oaHkCcgS3%2BPoKXUrhHi8LHJGpCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7SulxRVgHhy9DxqbKtwDGr%2B7VUXisok0b%2F9UWxeTBALECd2G3Rmn01DWgfC6gkD38uK%2Fjfslaoos5gNSA6hNMl%2ByFZVQNcy%2FCd8sOcQvkmnCJL1XmBZJP0w695pSfTsbpd3tZDoTBScrsSmTGHmaNPlIq2ozzpq53HBSi%2Fe7yig5lLj4ekxa1fkx4Nlm5kEEoiVinFI7VIPzy2CGO4Hdk4TfZvUMeCSEKZaePKFKc3v4UabLgwbDTVJJU%2FAdgive4AGV7M5Z6CjxkJ1ejFU9u80uHvGabvutftdo77tcDvcv1OMVSw9UiVve8MbsgUfdX%2FMw%2Fbn5LAKyAEl6XDosyzq%2FKImidqpmyo82QKWs0iFQ8nuBW9L0M1tbaZzjP6tQCk%2B%2FoP6PuBxy0UROmrBRi4xIoSIO8aFemJnpdprWcTkec0y4MNauxxLyeENbg1T%2BUCzMN5DFHswvirPS0Qo5hQ8w2kjWerQHNtOtxNjp%2Behz3NGG5%2Fn%2B4TcRBn9vE%2FKH9zpcmtoHk8VRh8WKbSU%2BZxA7Vm4TttWHSeOm3H1VOO%2BhQVN2HySXFomJhjU6ACl1rbNXAnOOe2DmGPVz60FOcbS6tas48oEardIrSuo4h9gxRy5XdKih6jnHqj9v1PkxFYW%2BWnlhk06gfjswkqPnxAY6pgELdAdL%2FPfmhipclVC8sG13VsnhTMZkOtGKP8dovubzDaMkiYD05v9GMHrb8sLL4AsjU9UX%2Beex6CRe0Fo5q1egAcqJkqRE5%2B5WK7IaLF2xkSOXsVs4QPfMpcOYFXWk%2FUuphO38%2F4yTnVuZNbnhOrKeZwzGFiFOgx7H6JPeO1raE%2Bc2q0eVMQs23fwgKp5KvFOUzZyj5T3JqXEowcRfTWmaOxFAabEr&X-Amz-Signature=c1cc592df3aec48fcb6ccab02aa4095989822e7357c7209ec069b73b9b4d3641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MHGJXNH%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqzrYgXHHWj%2FSD0xiHB%2BD98hD70QeQFVWbYTxrVrJRcwIgSHh0S2mM1bh69sF%2B3qQJOnK3HKhu8U2zWfHPfM5Rr8EqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEB6HG9OD1zmPiO9jyrcA88a1oMKm3IuulLg0lDxMgF1YM3yiIFqUd7xPlzWT7Fp8iu2O1O%2BqPqCJd7brzpWD5SQoSGiV4uw4g0x4p9d7JlARa1RgmLNnWqwDlT5GD5f0WviYpryvZ%2FMKJQ%2BHRugFd%2FNQZRJLoDJk4DrObaxk2ek5WcVw2BmML%2BCHSzdpgmbJJ0eFEP7CBjOW9V4oJQWxxBK17QF6enXqx12pv0pJhAWi%2FHqdwwam3ckbDdXKqoCiRGR4N80n5lUfRiunRSnNEwKcknWgMAIGUrvBOFuXoZi59spfDeJE6RmcMQKv2fCo59VopBg%2FhYmxzQhtMpZEeVix8K9F49wlbL%2BInA8ulHJA%2FgSni6jrdfWlhMd4hvqjQCM8jUiRxRbCDNqF0opSxZqIXUEHFyH%2B8K2pfXcASlVhRqXZHyXXp9CDBrKihTQHdOohdi9doF7rRouEGAM71Dq6qKL%2FmO9EYkua%2FOZTHXJMj%2FBx4%2BMAQX8jK5q4Jh6haBFFCP22dOnbhWScw4A8KWXNp8CQSUnVlDTjOLZgd1nw1VIBw0mvHLb%2FBAXufobVizlxZxP%2BaGwcz4fOX7hu%2FGSomLTA%2FGYqaWB2dayZ6%2F2OHY50sX6ziYwZWsbUHwDsqpE%2FzTmSRoAAHTLMMaj58QGOqUBrkg4LueVrzJzjdX41A14itBud0LxuOxwrD0seUyc4SQpgOr5TwIozbY4DITAxHlBJvGdUXkQGWMThLRo3RPRin1UmbEgFVwwAEC16ED7m46tR%2F8aTIhVyfykwypRGRMSNLKFhr%2Fx6%2BMpy4Mx%2FcETsrPDZz9JWNmLhdfwQShzQtyUfx93aI4D3BO27QS4XA%2FQHGFAM2u0z99PrPKkHeKbUiskjaVj&X-Amz-Signature=11394943942d55a6b062ce9b1a8c220a546328bca43f16d5d670727ae4da96e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
