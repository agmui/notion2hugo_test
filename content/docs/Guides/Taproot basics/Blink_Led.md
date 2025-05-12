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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC2MRBNL%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDln00D88sBEABF1oD6cLo0DWp8%2FURXMKb2gXH9XlZN4gIhAO4s3zcFcUmqMYLaOD7hSHm%2FHcWNMGLbAxoaTTejXoGNKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQdTRK4dJibY7D9kAq3ANBtnUDPhBvxzPtfFS0uBaVuRAikVOLRFkJQKsSkwjcse0IWxMLJ7wiKV83H2NqXjkxq%2BmIY6di5K0rvcP%2FSv3jXp867USbI9XZQ0MOxJ4lZ7%2BYJDBCRauFbv30eX8Iz6a79u70t8R4Q0z1GqoYcZ3s0GKoEzKK2tTC6b8kXniU48HdRQO%2FIH3Tas1DyB5tCMoSPD8xLmVzGs1SIdwkn0Si9k%2BEcVVZ%2BmARx25RKdF4CngZbe7jmruVmcGGBLKm3rVOwOMutzCjeAXEiSon2U6S1o1MeQtJoujgN1RrNFTnrF4sFkxoje8yXtWnKzrYCkp3GN7OTUFpOIQNaHjPXnkMGZs5dZNePNTp8qcJf8Q84lTubnSXKeqyorPZWO4O6IftEcF%2B%2Bc7ii2%2FSx3B4ee9LXu5HIZRnKaSRL5Cj2%2BpVvk5J0IrlpxlDXBmoBY517GZtUbZ%2F1Neqhc8nc0%2FLL7H3CccZFfuFBfj%2FL1LLV7YfXaBE04tzvLoNmzpHK9y46MO9D0FV4q0sMTAK2ZJnM%2FvuH99yt8DNGF85s%2BGJtCvtWiNvPWC%2BU4OGKh5opq1XEjfd6wbwnznAKSCJX%2B30HSYZyJFzN3Qck8aWjm4E2j3exYuQU7OF0xcfr0OcTjDmhYXBBjqkAatcq3jZJo%2BtELwco%2F6tdJpYFkGiZ6q7zyspNgIJlb7vv4AgAePVpTVe9R0t87Eq1%2F6Fz%2F%2F8LqpAjmB59k%2FWKAosVb1DJkqzKkvmHIRYa1Bw9NmtW3D7QbtIXDPZWV6L0eJkKrlptzXFK9qLbFI1NiFOoI2PjZxysSURsj68hBf0eX1J9AiFqXlg0Q5VW1COgCmlJIjF8%2B5S7TKJPI2tB0uxg5J8&X-Amz-Signature=88c716937085bfdd4ce0916f6bf8ea749caf6e4f20b95f3a1e6f2b3ca5cd8466&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNRUTAFA%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIDtoddfCldOp%2FpEsGpd99q%2BsKZItl731PthadTOi%2Fm2kAiEAxLR4g3Rd%2FgaURGjK3nMtHJ1Lypkvpy%2Fj%2Fr79ALi%2F84YqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBwUKBThmhttGHhBircA0apUHNMM8%2FflXtGki51Ui1bDk7ZywUA6ovPWw106W%2BXnszUach%2BLQQPU0o68T%2Fc2d%2F%2BOjpoTV7gTmd%2F7IQDLc7t8A8vEsPh%2F6yFzwiZunf0iVb1oiR5LPStcncF1offmSAuk0aIYna76lYZU%2B0iFf9hI314Yzr0rRY7P4WpXPF4Olfdi1q3mDpigHnctyXdWiN%2BRPKqmiwrnLDhlxCft0ffrWww0WjFKu9dlmuPdQQUdeW4oNudGNxWfdHOLaWRRR0gU0aJ4KwxzVaNTddDSLKN1evmhObfiWhlqkeJ9Y3O3ZRNwvfHjcQbZtnBIfNvrPCT64KxK6DB7HjX8%2BEmzWa5FQA6E6BQzY56s8K5y8dQVoy0VKBjn8FceFrnsWGkFnmEBiQmQB4Wwp9XNqSivIpTvZA2axj604jcrZfOnmJJcHk7DnxeqSXTLJgihMiz0KbVbqtbHeslZYv%2B453%2BCe7%2Fzy6fChLbBiZKa1iqwVNlpSJ29pMO%2F4gc1i1Vdj075IwMuVwmeIPhxxrNci0Rtg5IG7nwvNWDkLkLhUKTAnotsTJkX6I24SACizsNe%2B1vDa2lcpNWQukadkW3aJmqFN2GVM14bQ3WZD13ud%2B%2BvTPOcWI96GA7R4aZ%2FPL1MOeFhcEGOqUBdoRLAStaidSzc3iq6bN0WB7eTLZDQhjoyovbdjna0cp%2Ft2KMBwAZDrSOdK9LAjJ%2FZp%2Fse%2BNbgyHQo2s3%2FBwemQymbGusRulhgH7AsFkYRAY3Xgs2z0f0ER5HNzVH8NmKPcE9CrFz%2FPph6%2FFH7yXWha9uSw75aAOzsVoAtrRV7uiu%2FiMi%2FDV30k3py14mCZw5bV2gu6Fa3V2qBl1zk70NTjmlDGML&X-Amz-Signature=a8ba6d86c1afd4d17b32a6d954807d6ce1050065b1b5471ef8b6aca01baa9cad&X-Amz-SignedHeaders=host&x-id=GetObject)

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
