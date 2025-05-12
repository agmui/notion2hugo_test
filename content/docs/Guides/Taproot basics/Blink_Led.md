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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAF4AL7L%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T101006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIACyUPHiTwVWA1D3ElBppJJdKoB3IS5jIT8f977xyhehAiEAvHp08Ij2chxntpT7t6u7KH455uchKUITApVHXZVw57IqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJECJJ%2FprJZELfLcPCrcAywNJSeJ8PpqVekaV5Z8cdqsZuLryxsjIlkz7zOWGwOOpoFfQTHQYuGAap78DgsFv%2BX0QwLLDEMc0YJuIBHcHfYsdHmCo0UQd86UnqSOD2an3AEoZKlgg3Ijt6zvA592gnBBqreanJruAIeiXEF3apa2f34%2F0ofzhX7wbs4loic5oOKm%2FXQcfQUVf42ML52b%2BPvoG%2B1CE%2FhYxAaExQF4E%2BvHoXksaf4Zc7mEkkT2QvjfX3x2%2FLIOJEZa9pX7ZUsk8vYQhphin8%2FoNUsVK81ktvae8R9tHn%2FItV0p0oSySiWvBSGNK621Kv7Q7a8mQzGeXGlqXlhNsDqErtxgo1u6kwJEO7E4E1SAi%2BRCZWYtPzf%2BxJgEjWlXGxC%2BB3i9fI8VBN4RQuVCs%2F8dZUgpLdG0itpqQNKMkJ9Z7TTRQhQw%2Be2WYXoMX1r767TWor1FQuXlHiwDfvOwwtr2tIFFQUEQ6NuvCE5KNRTQCS3ezlYd4K1FqnbJmHx3nqnBvgFkMjKdHQGCzvOVP9nimRPlvpCSSghMlQVGywt%2BLV8qGGlh3cUSkfO3DR4gz2pWWXDzO1UkLEKZNRDwm3mt0HxSInkQVhC9qNg%2F6d9juueXM%2Fyc4ygQ01egJYGuv3h3ZJrrMO2Bh8EGOqUBD2E5yZgEmFc2uFdbXwzXXT363SSiD0YhF1AaJynqXizu%2Fd8HqHYgGBuhcGT1PxaCMAGsRcQYETKjBhCdHu80ua7EGuREI1pGAdxXwRYbCxv0TVui5T2n7cucXPzaWUMAHXKivS16WKd3qnvSxpFiP6beUHyIp0d1uD7JQEQuc7GzAVM457WWVZsw%2B6EsRg2tKR8ZSoWgCb7JBeSeRrHf7dyWwMuD&X-Amz-Signature=de9f89159e003ef4cffd3691ba31ad3628d6d6835e439a93c2248df6f328a598&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFEU5ROS%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T101007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDgRsbBGneXm4ROBFTCBFm9nX1t8A567q0CYfiIeAyHowIgN4a7wUgo7DHwM0VGW1U%2BRvTvsjQlKFewxugv%2F15eHmYqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNle8q5fqRrAfGhwJCrcA5keV6WE8obW4VoUbSQQeean5EWleuEw85pj%2BkrekkPh7r2AUd25Eq%2BF7ZFGW0qi4nvFvYqa20fqlRFibwU6Y0yHu3o7zoErwa9McOcGCywSP%2BxxLwc2D5kT28tEb2koARpRRasa%2BXnskwqIL0hTevhy5wn8GreLTDV1W%2Be9%2B6MgBx6G%2Fkss4fEKYpvYL7ar3EL73gIqJq1zxS38whYD2qp8orf3FeBmMK4qHDVXQbjIKOOWG3lTRm0vwm5dusB1LG48G9JAt2ggGlr5GiMMLVbd5yF6kw1vxmKazjXYHPgfBd%2BnNvj5jF9nrCAREXp308V3RGUFO1BPSu4efgwMk0m%2FjGe8OqL1uJefzuOzQf1mOcGKPlohPb2adnozYxEqun0K7toKx4HujgQF%2B9nP2DbZeYLLoCY5vZv35xqe64cO5Z%2F%2Fm%2BHM9PoR6YL06J0ca35qplpeI3j1UJZy8P73XyvaDJMeFhnt5Kwp3cW%2B9FbPobpIyT9%2Fam9GWSZKVPuls9dmqnUjVisyAZJ8ou9PJ8s1qb3RR0Sy2nQds5SXO0IpGm6h2KY8oNOkcKWfgcBHXbis91G98r%2BtOVGApqhALkopwGpee9%2BvAqWMCp9DfTb4ppR%2FnmKkIIcZ9j7zMPyCh8EGOqUBzvsY1oG1B8UEvcOfp0YUMUJ8bNwiU1uAK0xopnO34EYQU4sUCNLK3NTM6Yog8cvhIjFL8UB%2B4qRTSvsS9ZiXDrqo%2FpkIBE3ObJtfxE4j%2B5xOsonSHLw%2FEn6wxJ2daZ1VpYTppiTWkA97K%2BY2fbki2D8U4xf41r3%2BuICcTi9hyJpN%2BpSvAKHzq7Czg4anBfHF4sy%2B%2B72jrKgI9Tkf76%2B%2FWBCYzPu6&X-Amz-Signature=3b39d96c55a0ce711cfc4a0ea8d5da151a5438270a632d57df19365db42518f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
