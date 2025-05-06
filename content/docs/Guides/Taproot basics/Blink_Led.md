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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637TIBMMX%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF687OL4KzMoG5OzaClCiKiijfg%2BBm3IBFdVvcCgl%2Fl2AiEA3D4RBxljBod9at6X9mEU6WVKAK%2FEmGm6JzWeVUrRx0sq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAt%2F4ZaPpZsF5RJpuyrcA79x%2FXTHzz5AtIQp3H1UOwe98R3B29Zg7pOMSK9p0bPc41Ult3WY%2FCHbtfDvMawU6QaCFblPVT9JtFqvOiCLQBacv3OvNSeKO64wRgQoSJnn8kK5J%2FA25%2FvxrATtLSjZQ%2F8arEdrtahCWTxx84rzffUOz7kDCxynB67OW49T2ulD7avtniSK2BgZdA6s4K5eKcKuBXwWUJt75vzBYBjYd5wwtwpIMR0x1DU2vuHuVFdKS0Kw2lEO9cLrAQZc7Krh3mr4eS2G2rcMlsTXHmOLuj48GoQ75UMktzahCQi0fDrNqZDwhTPHfxjTOgHRGNMYobwldZhBlsvJ6VdsoijKn%2FmlsnCQnzJW%2BN9pS%2B7UZ6fscR5afLz%2FJLzyyasyuyXD%2BfYA4oYmSF8eeN3vkVzgVOAZ7RCcTG3S0tYu1vVihTuNAYRi%2FNjIVFEb%2Bd7Dby2V%2BPIDC9QaSSilq2sdyCoQmV4rLEtCCN%2FmvUSorXcEWd1XPrxj3eHaapSoncueAQ37TuaojCeqRvOqhVLz42xHdtBcdo2wOhztzdNqsaawghlHs3z7iztor4wRSZSVDRw4ZsuTq8xoMFpm6WR%2BQV6E7ObjrY1a5MDvPhxss0w7HU9R3GZYAFCsJcyMmUbCMPGz6cAGOqUBsT1K81HvWcQ2yHxqhNyvFp3%2Fzs%2BL%2BudrExDWU7YMkddwFoY39XyS22bc7cE73CT0tF1zsqhmuJOIkpCsct%2FNpNT%2BHaxlOWIBQKJFD0RfTPkAKZ6XwBuYJ1ETln2I4v7UuHkcX%2FkvVAOQsy9TdtGaS1W9cZUn41mx0MLW2zrqlTTtXWRJJC2N3gXOws4TFXATgwSaJizT2BgenJJMqdrkGMy5v3RA&X-Amz-Signature=e2cd63ba63cdd354753d27c945237c9401014a525c069c3833a78df386ad643a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VL7CCSI%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4vvTkMW3VVOymb5B8hy16EL5yyJlj%2FdyO2tJhn%2B%2BAyAiEAjMCOic%2F5dpIZxemocFlM2hNTh6phJGm7W1T5FI2ScOQq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMKwFJXwbDDhI8%2B%2B8yrcA%2FSdPqFOrld885FB4gS3mKgGJeraDe2GYiilFyH2T1HQHeHkWirBMQLfio8FmEFlIUf12TM7SV%2BIOwXcq9h1%2FQbRrzEUIOZmPRc%2BS2OhtCtKitpri88caVXMG%2B97gpDN4q0RqNMxkEEhhdJyAjqcb0nYaM2WjNmQas5T7Zr%2FdcCcoObKDu7nytzZUaHIo3AMpDO7cLOBbA6JWj0L4U0cbKf%2FOjfhHVKrf3TlbFzBfGGqje6CxYA%2BjAMaWEYsvpu61aMLSeMOgKZzZLeUilH4DM2rmhsdQbaxpHRHh%2FYifrJy1LxAE8SsEJCVu5m%2BdUqXpFyrMrD7ufDNaJi6YmcAb9a%2FjrjlW9zFjPW9MPMAXv2Ya1d48OHvVEPTkifdqD8c0%2FnuohT40Kdl4S69ITfE1ilf5ymK1V9kEbOSCzeOLPNaZ4FCV8pGDnapjdNgX1sNNjB1mTjlJ8E9UlKuyLBIvspC%2FzeFppq5gneiiiXnDNIaRaAFGi7Ki3lQ09ptDv5OyGIwv0NPcdgPMofuJ8THEtfT5oNqvWI3fBPcs3e1ASky0QjmznojBjx6p27EJ5drNKWw9FRAQ30Koh1X31bIjmahmMw5MSSMewNE9cRykwxKFcaQMu9gMTwD5MWYMJe06cAGOqUBtqhJptEN5oLj%2BNoAehFV5hbr7aKlx4qowiDUkWI%2FaXcJ7AEEhEx1s%2FMWoSeVZXUZQc8cMYDDuRoges8gF7TMwAqnbCd9%2FG8wS6%2FvkdTzlWWSasqdUK4D1wPipNM%2FhT3N0YkgnzbJs1ssbVW2NeMRwiT%2FzewMGpgWL7uXPkTWSMqZclBSSlOQ3YtQ6N2E5EJmJOehfpbJsemlYMUOCKtxbOMwQkT3&X-Amz-Signature=11f57a5674a28a95fd19a0d24429812777982d790ce3416b7e32bd975ebd16d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
