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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXUSNMGR%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T150720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCPzpoWsdmAyIVcms7LYkXsC%2B0dJBswUa7uJ60Ng46hUgIhAKVmsYLw5eFrbprFwZw4SutWJCuNdW7pJNEagLBYTU9rKv8DCC0QABoMNjM3NDIzMTgzODA1IgwBWpF1vMTBxV1%2Fqloq3AMdxcBTu913%2FFo%2B3lx9jy6Hkta%2BVu3roJ6PXCEaPvdCbQKLmP3oUKTgJAhsjooKYGl4E9n%2Fqxzaq4PKBFi6Urq%2F3EvIBnthSbDA8jdrxhSqAB1%2FIMt3b76GtpP12kbQEG%2FfJtM0RgaVJmHSzyFKEd%2FMzEg%2BQ7nkRPBT0l%2Ff4doy8AAF6tznEyT8vp%2FHfk2IO1vZxg6%2Fe%2FNHOYZNnuqf8tMHKe8bDnpApxQ49O2HevhirdF06hDoNfGW8oOKT6cwZpAfw7yxnZxKMXY4pEjqpHB7hg%2F1gFOqmGX5jUzDlVJjaRDbLk38N3XTWGw3wjhe4rdRJ%2FynFJFSfymDq3afK32UwKNUcS5uBCPjeccTv%2FYisr%2ByTS1XAOSE0Gj7cjLnJvWqg7I0EZADykDPZX0%2Fqy1SqDRPDeD6OQLryMU8JCQJKGHdmW5S8G7A2%2BgSO9HVACuT1itFgKc5Sz%2F5eRtzJ7mF78bfR4PnOvNjWPkdphxIGuXeag2AeV%2FyyBc5r%2FiIaWI4O3RUz3aRUlZQB2psbwx%2B%2BeuHJpjbxgdjwkINRihzu7dMBSbqdgbAak1MmAz4QfCbP5%2BJCjBXzpQadB8oDEYXV7u5%2BNYNZhYgbYN5OhCg17%2BYM9GvvcLa9QHGKDCowrXCBjqkAWTXH6bQAEm4dRhbrCFKSCaZy6jT5dFHP9RJwXf77LyRB2tIwEmkqdltBtKu38TwLQOl4DnXxAMN3CM3V9b56FbjE4quIlJSlId3ZaAdp3Sz63HCC%2FTKJipQ34EhUIWcmwWO5CpNUqcxZUsr9XGFAvwf%2FRCPSNnFOcD6IPuN1%2FSytl6jssz2iA%2BF7ii70fSKpzyXu%2BFLdvLfyJAm4jVgjb2fzPk2&X-Amz-Signature=7214bb6ab3bbea05ebb11b96f81431c3a97d5ebc3e86b28e9eb5059b3a33232e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3ZJQNPE%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T150720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIEU3zrK0seFRKRKAueomAXo0o%2BohsfjakbVRPaUSDCmzAiEAvpBSPNPjsrodkBf0WScMEgxcF0ntWT8fTFzi1mE%2BC9oq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDLPaPKu6%2BGeBGAbbxCrcA%2BTZpFNkEQJ%2FSUuGf%2FqgTaMCgLZlkh0BiBihNHQ3d3HVaqqyj0rDXFTMuDifhk74%2FLhRL3N9O07dG2pRc%2B%2BENTE%2BzQc4v%2BpQ2Vfw76BAU2ziw4%2BL%2BM9%2BVmqZNYLj6uGGXfNAjx3zvZmmiFgVh7fqJhNsow6yb56ZNin6olLClygKGiTTeXiXydbJrkNS1SubSXuyBBMsde0iAMDw1ilXIqeE1RszmzhKF76mIsHPUvUaU31MkjmAhpCAFS7HLCcrPMwQACE%2B9mLUXUvbfSm4rLmQGGFn7%2FmWHujea9SR55XY2UbrLtu3GzhIKJROhnXvHD604NBy6O1JoEHKOYT9JgONuHjXm5pq%2BL7rwXnuTotETEIyOK17jAHrOeszwHN1BMPA1vvgXNvvCId4bs7HR4accrsaifeDSKRl9EGr694i1pTGpmOiVCBqv3qFhxhvpOmN6FaMtGjCe9j3b9fujOlJBbEMXwRhPREapj40YhodTFb5nAWffQ%2FSLKMnnsXa0t0cr%2B7aheLwL5N1A%2FCtT4%2F0%2Fu77k8exZEbcI02q8RcSMTE0AkHDH3TbD3E%2BV3ce6h1FXLAXapp3LSjA54d8EYeO4iLjmUxF8NK4rboy4N7Uybv2%2BKQXNv1lA%2BBHMJbBtcIGOqUB09PmNiS9TPawt8AeIaiMoznxma7HBFnqWHUrFtGJxqeCBx3GhS7mSIIH6wk%2BcQG0XoL%2BD7Quwblud9QwLs5cwnBURCL9ZmiG4ip%2F0GzNvRIIc4DKg9modnHln3Lki0Q0fJO57o1T%2BPhP8WgxPtu5oS2Px2Rt%2BCtz57FP6t15ZeNajJlixk4C5nM3AoHkjbJjG%2BNgdLOiU5Hx9FNZePq5FhJjJbWz&X-Amz-Signature=b2717c69be1f22eb7cf36702207ad30ef23a0e09e5686239fda7d51a0ffa42b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
