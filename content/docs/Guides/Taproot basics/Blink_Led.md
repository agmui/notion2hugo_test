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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW4G5BSN%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSp9oSaMvWf%2BNj1pao%2BMtl59upOsHZBEbmRTqSNLOGggIhAJTJwY2uU9T4RKPG9h9zkk6zFDehfy669IUNYfqRNbpcKv8DCGIQABoMNjM3NDIzMTgzODA1IgzeyuI5mdpkgnO5VzQq3ANtkdU5lHKiYSZGt5faa1zHUXGjkKkmkNIaN2LEscwaogpemIS1TZUwHAfyyKHPzBerD5%2B0XGc72gSh22Iwrj5OvMSnY3nydqdNgQge5%2Bnd7BwBhTgmIn96pYU8S4Tt3XtD239OPqIkIwmAwgCplcXIeFAQNa2Er76ip%2Fp4AyNsB96J0GtMv%2BGJ4KlP51BwsmswqddSI34Nzha4tlsD1JRqAMRgLZeSGi42hrKdWQ7lJ1hFVHJVh%2B6tWz4VtP3oqKG9LgKdpEUSBP0zYFBQ%2BoF4WwRLpRUb9Pckg7Ma%2FgldVE8fi28gLvIaoFHAcQFmPG9QIVKkmcKhtRX7CQiMUSwG81%2F9maqQxT2zOG3KvGfxLoOAFeapSfPVvqm9qoRv1EaKxMDnh9nSx1S0BYjx14w5KziWyDwDr1loIr2Tft9Ii5tV6sdRrLX5WXBUXvRp%2BOcJQuyDsnK8hvzfli00sOJBW0CPgg1CEvkUgp00W6upFTfBtWJ94M10579wc45%2BoBQmX30WuCA7ulx5JVf17H8DtZ8ypQ5BfiVQ2lfmVVNhJ28sKpRTL%2FHY9ZGkvd5HcvWEm3iflGXGbDx6dCoqE0Q0Ducuu22C6knsLD49CrjB5rPvrllmb81EYAAEMzCa5bzKBjqkAbHhjgCq4bv6pz0IF5qsHl8kS2%2BVjzlTKrjwmemzM3Otu6LN5A7gUtNWJIN8Ht1%2BDvuNap6nST7RTQe9ABaKiXWp2RCeFBylQDdF98z0XoGFj9IUhpw2nHm0Oa6%2Fsawha%2Bd14N5Zfg0pRR5dpH1xYPc93H9MgZ76Y7Sx8MRXInqxPhORQPwrmNNwVpffRWzSs0JXCmS47RbRqt0c8aF1KI5bhrj%2B&X-Amz-Signature=0ad533e13b5d9e963d2c0c29b35506e96258b56996b439b6019a284e64d2ed6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPTMQLID%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDx4KR3%2Fk0yj5Z2pwqJ6vGti2CpM%2Ba8MGLN7a8LAzbx5gIhAN5hA3mquR2w8gp1DcbozrMlH7jJP1dwM5IgUMqqwvwDKv8DCGIQABoMNjM3NDIzMTgzODA1IgxeMlE0zboce1hawXcq3APHZWRWzLmnS5PUzt8ePTnC48uQ8MDkoUvNcy%2FPzT8N6%2B518m8xdbsppnhuPSC3ZBF2mPVZo9zJDX0TMYkokRt%2BSi5UQ9e%2FF4cZJfKyB3KB5MBPmVoySy0QCMxbIxLcpvDqut3RFwxlJDmyF8iNek74dT1QkeTNys7idmav6lrFzI7i647LTznMO2RLWPuqhIurDfRgQxS9pasxZS6CdvsWaBMiPT5a3RbTEaV0Ab%2FGNwN3NazfIvCCW%2BGb82NzsKDzTJZr6%2FLUK9ZCDS1b905txhUFFN%2BzdGy7P%2BTuSaciWMNIHmh2A4pIN8SC4cbd%2BINOGRIY15fgN3q09wa7NwtuNapROm46lvC11chvXw4TyZTA4tDxVp6reyU52wsdUdwoFRV46bbQOBi9H3qlDGny2sxrKuQs%2FN6aqwm9e%2B%2BlMX3qvGUUFLvLXEvKmh05kjs%2FjZZjV0vIpx6PYeN4dcOwrRvbxLuJkxA2%2BKReoHVQAJA%2Bk4a0Pv6ujl%2FWj0pP0oWN%2BMYUyj%2B3ojAzchuFpcVh520zoEY40hTTWtla9XqsEPzlaDMxqwRwHQ1ZQU9buh0tpH2eQBrJR6gzF1BvAyuUh1do0ibCYHPdf12JcO6Tn8TiSvYADHFWplo%2F%2FTCr4LzKBjqkAX5ELif7v11W2nqXzlzuEPpJa5B1Qhl3x7SxRP7S7rrYYA%2BiemFjqRVSh5FH%2FZlMjfaxkcZlFD%2BSN55VDYqYzSb9srqF7j81dmF%2B7qF0E4vkURQVEoGxgtjpvAznXHzCeLv92pwdYLZkZdI9zqPtgXzaK71mK9F68FQYl6wJ%2B5jb3%2BiL4MpiJMyK%2BFDcdfYZQeB6J8wFxz7%2FOVduBUyf8tZkEuBd&X-Amz-Signature=6769126296bc5a45df69ef916021acd9a9c7fe30c1647cf6b46ddcba8573ccbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
