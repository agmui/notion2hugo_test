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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSHDCJS2%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T081542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZBMWWHQUNrTcYsfKn%2Bpe554q0lLaxCRM5Z4QxppcGmAiAoOCrRHggXjncYXTbxJ5Ebyqe9c5pLJMbs5hPf8MbzCSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBKnKN06VvKrNm1s%2FKtwDhvh5sIDvtBySSmjwiLFM8h00MUiwI%2BMZnyhjdMYBdqqZZ2og1BbM3VVAmuXnTvjNn8B9KN6ovNfnVPKoaJBJ93go4gLTX5ENqQMaI0IaXDGsaQca8JKHqzbn%2F1YydSQUrmKJEX0xDHMGQrp6NYnDpJ6cUXDt8ik8%2FK%2FzLlkETXTRIdgtVgzjW1%2BCrBMVLBe8nXUuaaAuDTVvq2R7sRWS57vWUw%2BuxrylXJN2TvfleHrtlX0PLxbi493gWz4XZdOr3LCHT7BZT8LQiJRJj0NPVb5DSuwYKp5%2BAc3V87jA1BbOFCfeV02XTaS2NJ7iq%2BDNR4LmNnTcGzlUD2CpWZR4%2FOg8cwmGRSOth2o%2Fwb8ex28Z%2BRR3Lnk3KdFaFUWYJ%2BXb%2B1pQ%2BZnll7Mfpqfdple%2BExfgaryL7EkxPS2mhoXPrk%2FZWRZvJGzNE95AN9DjlToBMo0KsJ8qxnc22QOhE6%2B8D1QWw0FVQ9PqTKgin7CI2LkcveswF6ZY6nCxzA3BNIYUYKC7QkyGSTuksKTgEO2KAabiR4CM8faG0ENGY7z3Zh92G8EnMpetcNxyOMybE7vUDzY4e8URTjrCl10TpYFrOWT35reBaof5PUUq1fx9%2FL3K86xl71qI8FBfT7Aw%2FZL3wwY6pgHRYEB8p3lDi4SnvvWLclsO4EcGCnQvBYtfzliStDYS9%2FyD2tc8SuSywZvCxaqi047EBPgYipC5KhRia%2B%2B62DyFmGp%2FxnUnwyFu4N09f30wMMFbiE9OXCvrV28k1ATgiJAqPUPC%2BbhwOrj4NyldgdM8jB%2BJ9DxGowPKz5PbHIFRBs1iDckxvqEkUr6rkzl%2Bi41YfmSxzGOZwFIqfiZZuVqj%2FbTTFLvm&X-Amz-Signature=495c2efdaad5c429ee54d2ad35c62356a3e5309fcefc137e02714552e2fd425c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YID3OIDV%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T081545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZoE5qzZxeVUOrcB4aKvyDEL3xJ4UNoCcCt%2BV605zPVAiEAxQPNO6pzfG9VzTsr8D8U9vcW4wPSH6ZOoJQ9yj3V0y4qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMsUjkbrmqjKAPPHHCrcA0Vp6L05369cX4I6tsBFmEQqBQi%2Bbacy7U1CbqMSonxqR2uFC%2F0Dnm1Gs1T55n5Eipol7ChDmmjx00YoOTKiZyCLebsHO6w3eZ4WHw6%2FS%2FOc6J%2FRYVGWtRgx0yCLrCVcjboRVPvPo3TrXPD%2FgPcgcbIvLgwu0G6CuwOD1gRKnD0TYxXp1wPdlDu2yldX52Z3rbc2VkcN4r%2FAlO0yNfibdPEYVH4jJFi8iXdmWKq%2BOoYhtLPDFbQbIR%2FyeMxmHA5%2FIksPsRO8H%2FPGxRx5NkFM7FMMmxFhyBeOHNOBMtXqdpPRq4lhXyVE06gVS9N2E642Fg3N2d4fHnsGwsuUKYAj01S6nmR3fiGrPxpYRkhsZ0Fnx2Ef3V%2Fw4vJ3S8NLrHXL%2Fj4GiC%2BhAKbf%2F6o6Yx0oaFWjOaScvNvdRRGQpYSdEJkLnetAXfkTlrmbzPb0p8TOxSJ7C9Ph5oBvHXVqGYX32mT%2BeSbhYH9zyb6eUW1SnyMjZKZHobPVedOJ2G9LzcRdmdDOZw57yuKLiELvMoLv41nfkxv89oCcelj7alJQbNvsu4Q8iwNq1BB4RBV4NEuc2jCa7fI3C4Gy3LwG6LFXbQ6FhVCJvIgSkJr1dolQRe0ZOxmozMt%2Bh2GqLSQXMPiS98MGOqUB%2FbDxi2o05KLxxvPha9x%2FHlUi5BNy%2BlruOcktAv1pc8LfIH8wOm5brcmWsq08C9%2FZss1u%2BGBmOXDjhBZNCiDfmo0BSK8wEnDN0gppuMhFkyDrHUM7bpFrLughrJ%2Bao6Z1aX2RkKfOnAhsqYNQXqryeF0zJ4sHp3QQapxvQo5K7eXRsXEiZwTHGURiowmcVr49wBAJzu%2FrKHOUtPZhfmpvzfE8DqCS&X-Amz-Signature=b610cfe486468b14ef503bd272663df65d72256432916c01b74e1f1c3814770b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
