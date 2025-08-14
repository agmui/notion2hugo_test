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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2B4YYYA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHargg2plrjyvntXO8qREeSpeDkYOSUh7PG4Ya9XWydhAiEAg6nO5r402DGScqwGdYnKT6jTEjrgV2WbfwJZ8cT5Vhgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDCKV%2FSvpp%2FGUlFB%2BcSrcA6bx6Xrgr9vhohZM2pLtQHLmKG8YA%2Bk1VAqlpNkns%2Bcv%2FKMfUmJGcD3xMC%2FWBgWjK8AXrM4YkfZRZziUYpl61FBd0iXqcVWfw7dVrvlWg%2B%2BKF9WA1FkGbYxhEM5cD%2FC%2B%2FAOfE7XZoyq%2BVOrY1HArAjiBpyVVyHoo94uDmOytOlTT4nzAs7emZeasEzYSSSG7PM3vYivEP2MlHYo6ipj42u5IJDyqh5FziA9X6lwt4TT9990wK5Y4YT9hGN4SHATYuN%2FGmDzHNVVRpMXtOn6yuwdbV8EH34uj9saTRnMeVlGL0w5twLoGZj7lkV4yhbvPD7uQ9DJW6gXuosdak4fwBBofsBa6DiVH5bDdQg7B8c2HfNNH2jqRlFtYMl0rJ9y%2FjN69dI4FVF5ySYnl4PBJJTd5%2Bt1ky63Qcv4m7bXgWqoKYE7CQGWHltijkNsTeA9FPGSvxBk5WJlwBdCcPRkYJQ9qu97VfhfsQpHsJT6a257CQ9ep%2B37KGwrnkfJnVmG3clo2hFnDTLRRvixvuh0Xr%2Fs3jugDPJMtUyrU9w0JGTQYyOuIIzMUOPzJakJmBgCJEtg%2F4Af4wRFU%2FWHgmYJEeG9ZFsQ1tKOMm4Hw4GgneBi0NAJBcpRA38A3SMqaMIaM9cQGOqUBHwf8UpfAn7nP8BH%2B15MA22cHWp2n7yy86jjuC9htS2Wz8Z7rLzEm6zjKca2l26lF6aQ51TmR%2B%2FcKDZodFnwsqg954C%2B4wqb5UHnFW1fMBe7eRNs%2B%2BB3hBwq2BQcU5QEFoHw8rztlByIGPHWlMHtgO1yZvsbneVb2nNFTQ9ngrFcFThF0VMXF3yJ6bfZXXUW3otIKsMBMZc4sV0p%2FMDkVRP%2FjBb11&X-Amz-Signature=ec3e6767048e82f6446e3551961c66498779bedfba47a8ff1831d9f98b879b80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPA45Y27%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvmdSO3fG4mRwcFt9me6K3IFvKdfZEJrRy9GU8p4JYFgIgVUPU51TD3abH4lHpIeXrERyaTS7quI%2FgrsgzC1Ypa5Mq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDNqfmSgMfIcioFAjeircA%2FTkfyqMOcTQqwwrLd70QOV3ufa%2BbeA%2B%2B5OJ51Og67wH8JE13Z5B6N%2BScOa3wyvqEUcIqbrSz4BsYXbwDr4k7QTS%2FoR7VZIA5eHVR2q4itwAded%2Fv0laZXmh0b3f0oWcFJ70%2BYp9VdHPegwWrZkvnGblqWlr5tzUJQZMHsWvtFp2YlIZlylUSVVR%2BsvnaK2PjsnZ1uVvWSvsrhSwlQkKDwIvPSKSRVQubiKAshrBAxEKF1TEdxiVlRRRtlSHUAmJUBuKu5cbox%2B5hA3YExVjku5%2FD1lh6i6s4T0y%2FWEUHQMXzG2OtCm8FIGx0DXfVKebBVQhRYdfQQi0DYC%2FpqoS%2FL6vZapdGhMWZNGYY63%2FwsPRuVoC2zd1Fei2y5BP1RwyCpvHZmIoDpsFHC3wHfs8jRWHoJHR6JxJS55LmyUhWbEHb4T3hfXaKnFkweeTuNcSopLdgXx0IA33aHtNFAPsZn2PkMuKGMiVTrOKQAxTwV%2B%2Fi2Cn8uplzUGeLbJ9rhrNX8T3Qg7Q%2FOT7itRKUMZaBWeZ903bHHq8KCEDw48iR%2BFy%2FMAD40ify%2BFRp3Oz4usDA270ipKryLI7gY4Zm4wHjsF0F8UegTiaNRlTc12Nb3KOCnEEG1t%2Frs6rgezIMJeM9cQGOqUBohhkt%2B2%2BiyYVDCVXAFahmXwIv20gPWEFiQ7R9%2FqvoyTOKVVB1%2BIhJgJ%2BYfzUz7vi3WGF%2FdKpKe%2BBFJLe3KZr42BpDTEsLLtrYsg69vEPphBJFSx8Yuip%2FUK3a5RGLDnEB5bkd7SsiHfcLOW0MefOQDTbVRqMGSlNElQUT2dmtsJmviCrL4CZFrwPI8zJOoFVqvvx60mO5OK2dV%2Bfjntbv5ojVsLS&X-Amz-Signature=a9173c67c03e090f416d27ed3177672a29942c576a0d4f71188bbbdef652ca93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
