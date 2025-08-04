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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQHRODVB%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDom869aKofTsnR6OMKW3NA60glWGK%2FmqbzKTex75PfQgIgGAEliHuyltYdyf%2BopI0DeEqn5d9g5asL1NZet7k7kK0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDA8wXtD%2FEmCHOOmWeCrcA1pYoyQz7VhNQ%2Fx%2B%2BV3dOYDWDSsTsiM%2BywFOyuoCuT8mIMnJDNV40Kix3yC6SoLUfBUFhfLVTqq4di7b6SlCycpYjYGu6sYn7ri%2BPcx06ZJSVoJqF5OygPoAkv5OMK0EyZIjQl39TKKO5ea5T%2FK8LQlbv4nFmjOwytRACP%2FnCW6PuLbGttDfftPMzRpZCCUXXjZeXyb%2BvVVGNLaBf9m3kzEN%2FbfeUTMzYajB1pwqrBG3B10UKXScvOB6FuXxvE2JWR0leo9CKHzyXIp%2BT7jNCbTWUbcP3SM6soCBveVU6wvUqAiMkHEG7axJxJ0x2yPXEMY95vax7fITQQYCK1%2FR6WiQ7zpJ8%2BqtjgSPQMQA2Xms8fnULEx8jMMOReH57iGwt79V7H1AJIHru4RXNO3AnAlZQHFmjUcgBsxnapxkk2g0Xq%2BpuVDTBd0s2HrejLqDj2MhuTUybMbJNcF1f6D6tq%2Ff3mG967FdAkw%2BBxTCJGGB7xdkkoO04Wv2WJYRMJOdzpf3XuUm6XzUzBQF2cqmqUWHFB1hpxDMeACUJupULn2c2Hh6zpFph82uvACR8jbsvVCpMoqTMuIXdcPTh2TGD01z9g8Gg5bhMFUOjXW8dDZPOM147w3HlV8Y08l4MOX4w8QGOqUBeeXtvdxih5cxlgE1I9%2BlYwK1DwRCOLtDmBAIG2u%2FhE2U1YK%2FieLYCaZTgTt0%2BGhkrBsZVLoxjIeknFN4QNvlQcYSw6sM90dr%2FUNhpG3prk56ZBp7qniB4b5QflPE79erAkr4cjCzxed4COF%2BkiD0PWYSQzF1%2BDH9iE0rmT0td%2BXKWSdjk8PEpN1IRfq%2B4Fq20IvjcY2qhSGyxobOYNOP%2B4s7eDq8&X-Amz-Signature=ed2d7f99e7d26d97635218ccdc1584a084fa33715a8737f385ae2beb4a4a1d92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632X4NBIV%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIF7gVyANUkiLXng%2BCG4r1QLqAyFrRpO2fkW8VBOyuh4dAiEA8L5L7QnpXZCKGB3AxvFkGZVkg1KWqUgChAD01nc5Ocsq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDLJZvnUGtYvvebMTbircA0XRERrLGTehETEd4xiNgw7KfpWEhqc0GdQpqeP%2BeRKNH2A4aO3iy3lnYX3fyqylyXjHxQmNlkVqKuywOP7Jt9R7rgA1Ih%2FsjLvTmi3VfDqTzW8ITXRxX8uPcgk8%2FQVuwIuGWeSBwOPu30cFI0j5FDbm%2FJvHBY79txdGalbLp7%2FfW7fy5P7VZBKjBJFzFt8lo%2FNpAmw0330cISbUoPEPAD6A3eX8li%2BVvF%2FrAtyZBkyfNgrrVRXP05v0JTAzPvVcOA69X0wHMvLcGkXwHzr9F7OHrFz5ValfKNsXQaUMkYqxdgQfp%2BqXrTLU90onbPJpeHqQ9uOhqG%2FmWBfPJeeu8nWZaW0FraN8%2FvF6gWqEGhKGIu1LN6x3QCrV6GLeQQ02TWNWEQCSdlB%2B7rh66jcmS47fPgd28hsS0dozVNtcXDv3xwUssJTUCAODX7vLhNY8qBgRV7rV1%2FldeGq%2BAG2f%2Fzz3jHqRY4OP425EYj4ok0gXqlSE2B7tsSPqIZtMDOBuUyrVjzkft3cq7rIdHCxOrO8k44gVOUfFv52f51tzM75ESMT07aHY3wF3LG8Kbzu9ivqVFKny%2Fj%2Fs4XynXfb8lqzUBWCjphrXdeqMfP%2Fydg2iAVfuLzDetJ%2FAfZfOMOD5w8QGOqUBOD9cC0IvgNeyzZP%2BDIqkWMMLT%2BoN0DZt%2FAqc0sRZMyKCrNA%2BNQnYfpWWOOyUw6IxA3nIa%2B9dtSOCnCMgXKVU0ehMsxrDT0GW0YycbrVmvfbmNBVtsHafihUEpxRbSI2LRSIMefIk%2BtRabFo0ZdvQGe3cKZ7PVsN19UJVpK6Jt0WmCEu9%2B8GcLg9cIJFWkYt1CPKTZA8YJr3jzxjaVz7CrZEjowXW&X-Amz-Signature=0d8263d4d5857a60c507f56acd93915d583bf73942d618d47251acf6fde78cd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
