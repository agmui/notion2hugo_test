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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US4N26GO%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQSaCQRNusQ8SPx52IVDZ3oJFLCfDMLCCWgUEgvd243AiA0aqlwDgqGUtpfUj6K%2FFjvMPMVN1OV5Mefjazl3T7ywSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYRPQ83H2fzdntiDrKtwD068MIgAXaKvr6%2FO6ANU5AJKWdH9ONyeK%2B47jSH3uTJLhxsXNAWgqvx1sLYGGYIMcTYK42SdoTtKZgPkJ%2Fj4%2BcnN3BhUiMNKwmziDMeW0%2Fm3KOnWEsBBjs5m0R9acKbVLihrKFO6wIYEkphRAOtDVYv9SQRnJUC3K73ctRUJGTVrODRk2Met7ft98JE25S2u1cbOcA6PbHxapCGCKnDzJ3XO1R6Qk4CQFIvy4qgdLinIZA6dZpL1HiS3fFuewwbsAxjfa1Ly59fdkVhFSF2ofejZqqsdEpO%2BVZn7bf0eARDmGTrq516MQxLv89mlRI5seTv8hkgBNIBgBk1EDwmIbLRJZKNHiss63LhtsxU2d3sGrSqOo%2Bg3y6BkevvD3GNBDdzTVS%2Fnio7zerBVVOM%2BJmrRPzhLLrXSk6%2FN1zZix2XOsvQpLQufSlECQBRRzvAWkS6M5O9trilQh0TXcVwVmKM86L6%2BFCFgPHoul762pMsAI%2BS%2BJ6kN59WBRy7MMSTdTL7vt2TtpKZEo2yV2UR51Xxzkl2Y3DcX656LCXGx4%2FPa3tC8NR9%2BOXaETcSc%2B%2BA3lA3c3NB7POro6eogABBQb5ZwZl1iBPpdG2mVnLIDd980riKn6r8eNTLx%2FrpMwsP%2BdvgY6pgH41GbEoX2%2Bc%2F9UXY%2BYQ%2FxIDNyV1nVa9iDSh1bYL2u491Mh86YbBjDc2SXe6Yj1u%2FAI7jR3ZuHsArgjITuutu872Z1AuI%2B%2FKH9aFf8EuYZFpJwegJQ8hkB6Iz%2BKhpuP3zJpMgeerLTL8YQzuvSoLaqRjJbUj0Z1%2FGnGUDg0lsBvm78p7lsnFrUHq3Cww6bY8t6xBn6RNbCEvT9AnBx40wMyQI7uvOtz&X-Amz-Signature=eb0c33d159abbf26f21f7aa7ae89c2f08d2043e6ace9a6d9218d584d6cefa0cd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DF7YR2F%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T230735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ28mohpVnHuetF0T1uLkFAzKiuYAe24oRQKWnvpoeGQIgKNdL7b4x3CXkCo01RMR8YDpnEafAXx1i2aSdGfJ2uZ8qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1hAnJ9bxeBlQkkeyrcA1zljV4K%2F5vrl1eLXZQGeVMtNlnKcFKJEQhln3tyYUd7jjRl6CmP051K9sbUSI7nTVUPUwljCJJeiD4BmD4LtHni8DlgSt9dS%2FWvZNxg2Dl5%2FLj8k%2Bh7qE0sX9cOOiy7xedoEOVNfZCG75PDSdgbqJvZGvrLTpoxHW01I0wzikjcmudaSePNdxlCBEdYbJxfdUUgcxTBPBf3tO9RLJY1OFV43fkxftQGc3Ilj2hhvhBYgYr9jyLe63ZtKBhRvvIelkPaK4SGmQ%2BCi74T%2FIGlMNt9m0HU14B%2FowRiFGi3kilQqE%2BnUjqFHPVRVmmVhoX8wXpjIYv%2B3Bpznz22MEHAwV1U50He0gXAdyEkxmS14jK2LKPWgsA%2FFtmHv2%2F9Gwp7yms3qjFZOnoK7aSKoX1yg0tMH4ansDeaHqPkgZaKx1Ke%2F9jFuRSFmkrrrNYZxH%2BCPlRhvwRssbynDzXjXH0jG2bV4SBvP%2BS2E3Z%2BZeiYLEA1C08ltjmBild8av9jfpctL37XIFYgflLX9qjtwu1NVKm0GhZXNzynPs9Q1rUakDSq1FBhsitJERz1m4mUmPW6VS1hG5BF9pDmCCfwXRoxrnNWOhN%2Bp5f4XkIMBtsNovP614gcME5uu2uRc05eMNn%2Fnb4GOqUBao6eBeHDkeLcVPPSrSFsrwU44u4QScfh0QeFgy9VIV3sTyHftUUacuwnN%2FmQmfbJ7tcMoD0polYTj41Uk%2FFVVKjNGPg%2F4Jf7tYWivF7VCId6bYWRcGweUP4mkJfj%2FxD0bnpLQ233rLlxyFRNoW1EgV%2F6j8ylccdiuC0WLTx3unIvt%2BXQyJXhjJ1k5zo6dSgbIxRG1ltJoThVNrPJMDC1m%2FVvaxad&X-Amz-Signature=fc32d239dc62054aa669d2be3fddffe0ac2110260bbf41ad9a9390d69be5a4d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
