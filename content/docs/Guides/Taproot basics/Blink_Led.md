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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5ZA7JK2%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T230906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIAcDdzgLjyCjJYEWxpH52dhEi0RSgXT2Ksoustko%2BkIjAiEAirqs3QKJNb4NAM4%2BCzFb63XtzDKE%2BvcgA64%2FwG%2FJ%2BfkqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJf%2FiEjS01F9ywBHbircAzVh2Pl%2FQ3eOEB7Kbm7QaErKlLOenf1NtRuouScu3unniwYBgLcQq2eqIsrtjPGRGWMSgqWRyemNLw9S%2FUzP9%2FJm%2FIIxfq0AysK%2BgOi6%2Fv4ntvsM2CS2MNYEc8Rit7qUIDd9PWpvBE9fFPe%2BorSrGl%2BFR%2B%2FkwLFw%2BNGMWK%2Bs42BoXVrDXdMLw27Gj9B7MsGibdKTignNfF46wFd%2BSgrA7gXVt6oYd3qgYuFyL3ylRcIb9o83T6VoglBjnWkY%2FqmEWmRM0fcoSU%2BdKIeuXMnCHl2gvkeU5Ze310LRbpvidIe6FWm6meorlf%2B9Aa72QpyAPBir7JowtEmdp4%2FOWMeuTnHKIoxjcKaHLoVzB7NB7B0lz94wYWWMawLBTj5OVVG1Lzz2SyTac5jS5jBSgTuwexl04SFI27Zv9r1PKP7uqbUfQV9spKNC7KibIhTbVbP4lbqZqywzI1AvHlh0ShSAxg5KDCPC4uuhpatCn99C0CyGUU5yYBHSfalI3y2UwDA2jXJ5zfuUFg5esCslUb2HNhWVL6GnKm%2FXYVKMWwah2Q3CUNZv1la25YZ4JJTH6w7hecJRvtX1xamgBzRbEFvRLSkgGXxiIRK4V1CAGeSIzNkbanE9F1FzYKFgr%2Fb1MLm4rcIGOqUB5bezibH%2FDNvPSJzfGM1FKaT9%2FbbBBUjbR8JQQyWIVvvv0iV6YtcAuOPYTg%2BHdJzZ3fGhzOfJyk55gAReLUCg9t4f0Q9QDVdqITkAFruI7W3Sub0pRY8he9EHRjm5p%2FRk3x9u5yHpHVgnQskFRDCqzO2QYtCKJg8AnR9fm5vd44lrs6sIkIWcYrcfGzSNrL5ah5pXACIIziW5FNiHaSxqgq42CdHE&X-Amz-Signature=b507acc6cd7c7861208e129390094ece9e6563d5402e488bcb0f7c039f2127b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GUUBZTH%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T230906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCKGHXbUNPhb8ic2N1tc1z5e%2BOYVyh7lkndt8L6KmiveAIhAOLKFmf%2Fr2iz2Ay%2FfoveQeKd2bWOH7Ifn3rlssLm0EIYKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxt5%2FfA1N45NSGPw1kq3AOnY6VEz7rtuiggdL%2BfWWXOxmoIhAIj0Hh5HTzE%2B%2Bwzz1fQVDG4FCEu3nZ3xlKqPcQaxjtlwsk%2Bncis3kiH26oW605Iy01iqx0MvEFT9aug%2BdqcqnCNQTS4wy8Gbgdvh7%2BZgnmcmBbx6a2H67Ca5zx6yKsoJTrNAyH8%2BxCdeEVa2jVt1%2BH%2Fs1DSFHbKNSS%2BRcGbvEfnp1uRYR18EddRo4%2Fvihk25bjgx33CJus7xQS9%2FHRbFxvYj3wwzQ5jNs9lDy3wnHHWmdMLBBY5oJIGQDtXytvfhcrr3Xdy%2FDyO9RBqW%2BifYa%2Bqt3HRGUzITeAk3vNZthvn8XSSC%2BmQS2%2B7J93t%2Fg%2BRSTvLye5c0w8RkbbCGAJH0%2FWBgNTyPPXpSCP%2BE7UJ49rr4YBvp3QmLr5qQtUU89D9mu%2Bbstc7ZwKOAL02Rl9fIik8mLnLoej5hYNtQ1Lyg6mco8f%2FGngBi%2BddvaMd8xnWnLJoQvdQZAPLmmIg2gwWY63fKwLiCG5N8purcpUg06gZ8pAB2MV40EkJ%2BhXuRmJpQ94CZ7%2BnHvJu2JsL0eT3Qqj5JfAiHXgZFoE04FQ8%2BgeDz%2Bk9H%2BCvmDT%2FpzopBjAGgs%2BobCQp32aWhyJYko7fmjRx3CeR7a4u0zD5uK3CBjqkAXHcjUcBlnruyuG3fU68C2aQ5qHHmBCc4Kvb86YlrirFaF9RLZL8Zh0rcN%2BHZLyoToJCK1h2C%2BCxoXsGoix3KYBM2Yaebshwxxa0XIzppiwFexrfycszM%2B6hFq%2FZNZIi%2FlCJFSVHmpZv78i0kzKFGAWuEpJjNIwQQCfns%2BOuZyxWC6ynkTE46DRx1Xf%2FtEL%2FXfwu9RmHZS5w5UfRi6XjFF5z%2B2cC&X-Amz-Signature=bdcd4cecf4c8ef3886eed595aadf96bc8433a4594aa4d3f8244468d6d6d5c3b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
