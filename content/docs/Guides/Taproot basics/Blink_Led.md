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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ2VSV5T%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCCnJSs3cNhB1AcoynTsonlKAh8RQsRYYTdYYGvhS18FgIhAPFTzl%2BvyCbstn5HJ5nCi2%2BHRObbKc5Ihq56rnKcnMiqKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzedeahZCTU4QUqTzkq3AMpKAZguJWe1nj7%2Fg5lUjqS%2F80dBy49jZkhdWL1BxsvkvXGtzecY7K92dooOpePkBWtCUbpY0yVTV3q7FSbAbdBiWyNDrGP6TiOT0S%2Bg6YKedD%2Bj2CaRTVAfLIzHmH3SyoYPEQRoboJozI77zs8AHLxb2ZGrLwgwycsQiFnYWbE64tBDLualJkhkiDpIEaWyfZzrHkR0IDCFLkL18Fz4vh7bkSkh4NXybqe5%2FyR4zubWGsSnbm%2FURvV5reXaIBC4Pj88BcDi9l22xC3ngmyu8oy%2FU01V%2BoxU112BYnmlO6ZHzZIeNsQRFLhVUkIiQyrSgmI1hq44er60EQ0CQj68YWmnSwAQteVcFoBTnu30vO90g5ruXQkMIPxpHMfIGZNnWubl11C6eXlluGOiP%2FMaUmjdPHYDYCwOhpAI%2BGO42vC4ERxPVOkx0KwUDrGvfCcBkLN5O4deyii6BtpHn4Do0RzXAjtUAkV2L53Rg2n6SCnvGe9bzprFDdBqepjx1a5%2BMk4FGHX%2BhkBAqQjYd5ZePFzhqsF6pxOyY2o6X2thq6qPwLnSDQLCd7pyUkuTi0YqKOfYTdlYk8VDx2EC5oj31oveekhMlOAPzWrzhP8Cxj3xaG2jKFX8Kv3PN1F4TCx4vfBBjqkAdedzrk%2BJZfP3y9V%2BzDzK%2FUMqLBcv0tPmVQPQJgNQ4XIqkncJP1eubPQkfIhiqUQKq5zeWbCo9NnAzUfyjMUTeeYKIjFzn5O0bnx5xQEdd4ROQbWHtf5nbsRoRFCOYsftpEB8kkaZI49%2Beqnoy7KmoiRbdoTYAVpGfPWsfZZq2X9%2FlAEX8j5A%2BpEQ%2Bc9pflr1vBuHQNvLDbT9MGDX8SZ8E8bR9uM&X-Amz-Signature=7039ca9d45373ad4810e0d80b09b53a988be3e4bb457d064d1b01318261510bc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4AR6FN3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCICROyWGSIAmCPVl%2B4vt9lyHUQgt%2FmyU66oyqckeDA28bAiEAwuGgVcFdNHkMnGV81j%2B4sGDywTt1n7LdEVe%2FuYwQk7QqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPaVCAV3uF2mfvSQGCrcA6Z2ofhGuk%2Bz%2BARRYyrQKOCPEJBn9orZRrIdDpP90UqalP78RFJ4OvnjQl5Y6PvhKkpPKFTmi%2BwGwqPNnVD0bz%2FtbthzuXPvFokKTXMlrbkW6ZrDF769HchHvM91GYnKh0cj4rnN75NehiBj%2BLPLuCH5uLTyaevrpa%2FyRN%2FuKa9tRsWmi6KDNjQCcz0OWxdqNvFz3dm2trMMAPXNwoL5rdLhl0sepe%2BAIWhap45%2FM7saCucqphyV5dcyHZJ%2FCOkcCGRp5%2B%2BHjT0%2FVgDG%2BDErMvUHoQwMvueNDd4%2BncHMlT%2Bd3qfsgnXk3R1OtiRkA7OpuTiccS0wVFHgwNEQWSDnjsLo%2B7gMFQYHritwrpwsyWqa7H16ypHtX5kZBezehc1cKOvbNLYdn6nyEKx%2FV1rQ7LtD9zswU82aC5GRaOmqW87xZoBIkt60ouo6sEZz8KhnnsClvafa9wW80GaMo2y7HiYDl5KnnU6iJIxhQk7aK1OQXwMypUv%2F31Ru6leUJ1MY3gvUjSocKK68N%2F25h8LxVHVjARH5VvrglSe0N3MKZnUFPld%2F5hqVk%2BT49NF7SXpEbd3%2Bnc6o7BKuE8kRN0EhwL8kM%2Fy%2BelLd%2FbtNndAIHj7A0AiRp40jrNcJlrG0MJzi98EGOqUB2RwfreR1NmiFNwbX2FnpvVX4te%2BWYV20DqD2XzrIlf%2Bjabt86dUm1z%2FLzCnRDs5AUafSVaG5%2FfmOFxlL3xAA58zZ%2F2Tc2qs0gP1BHuSQX4b7iZEyAyMzeYrR4oNVVvQHuxQujdsfobl7WFxkxlZEReX47kY5mvW%2B%2B6RCC8KACKgw3ya%2FCwTn1ztZU7hlA4Uu3gvWB0n%2FHuDXNg3kwnH%2FFLzh9ASQ&X-Amz-Signature=7bc3a2d0c8b8fa7cf85eb2bf2bf54410f0fae201977a85d7740a53ab4ba8d747&X-Amz-SignedHeaders=host&x-id=GetObject)

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
