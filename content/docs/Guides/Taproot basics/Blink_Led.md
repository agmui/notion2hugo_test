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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4L2F7J4%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEANbpVYSF4mmMrvd9xCRnAW9pYVLknL%2B7V7m%2FrfNcgDAiBYSIMQJ6jAdIkIIG2N4Rz2xiI0EYI3jXD48kViFZVJCCqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2fX%2FwboDeFhjx9xtKtwDRNw65UY7flCEiuSOtvNbAu0WgHt3MKMGMxC68dHlWnhAI4NemIPSw3k2UPeTX3rDoMuXuyZYiWSlIUz%2BR6d1ANsvHyqXzlpG2RQV0elc5EzcD%2FBEjxtZMimEPb7ezNhAQ5SQBYe91mCuNlFsemKBi7eXL050%2FtKxa9LPTsZh7oP8hqh6bBWAZnHQl4s1B4GRJki0Nz6KT9q%2BTGytHp4s3iNiguUuCsSbeH8lmX6tR7yku0sW1W1ECJ7hu0rs3iExSKVJtRkHapgpUmcAJHLQDk0LuO%2Fj5cI9CktNaDehW1qKXyFT%2F3XKecBsMBmMK1iJUnm%2FdoMTGlo8WpPl%2FuKn1xo4JQp%2FQ%2FIIJMKdMX2N2ASz7Z4a2Ma8NiL%2FY2SRXVtuDpn9rBwQBW3%2FG0J2eiCjkuv3nCtM8LbqUyW%2BRYHsHI8eAThYPwUHcRlGdqg827L0edDNHIi8XjcjtcoD74%2BE4ZI%2BzNBqqnsIOE%2BL8PKNbogcnW3M5j%2Fv%2BsZpw5a%2FNetQaJlNtR5EEHRaP6JHvRXAk%2BjYUqO9lDljDjLTTU0qy%2B2Ms%2BD%2F5kBdHGb8dPUHuH1qPYs62DUjM%2FfPqfUvZ7B4MEIECc0ZiyoGx88Ze12f4KoPJ5jg%2B7rf6khB3lgwhem8vwY6pgGm5A5p0vhH26QeXuH0qWJw11gkYobbH1A7NEzaSgBV7GSa5eJr%2F6Qu8dmS%2B2vjkfzDQMRjGBwekQ71yJfzi5Wgvp%2Fcs2ogjM4xaIhaGZEmgiP2K1xmBsrqKldjn4ZRhFPezBIfdwOpyi6%2F0REu6aD9A%2By21G9mFBU%2Fpgk0b4cR0gPLvyM9KhzziRvfxfdNdko9hJ63vtpWTMQ%2BhtAxm4NxugZhz%2B2a&X-Amz-Signature=0a880f6c6ecb4a52f8aae852a14967cde2554d1979024f4617fc6a97021f517c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT4GCUNT%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2B%2B0pR%2Fq2N7i6jXLL9JaJvlh8LaFj7viEx4autF%2FqMlAIhAN3OLeHiUrxmgWEGdvS48TF06rgKtPC%2B2PfDNMdNuaPkKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FOwLwwDsY%2FDfl6pMq3AOktwZeYd0X1yF6GZXbtHG9TP8GqRDk7%2BghYaKPDaQl24oUKm6mlpMowZ65mo4ZeXwM1C6LFcpcZw%2B8BsbYDXjrCTbIA3Bje2AC43chhnTXoovDuCU%2FYCLpbGOQc3uWNxbxOQJVb3PlNy%2BPwhwM%2FN0JN4w%2FhGuNemS6tNHT1EdvfufmdCQTm5u67IzrSy4npSB63KlTCEy5DAV6zcKPZJabi%2FByG86Ce1hs48edcFRnVn4mbkY9VWlGTy6tkD16%2BVMEdET4UHetg3xQToArQGpnns%2F8YvZ7Q3Nrahp24sjeKC%2FAQjYhu75%2F4tEL1JjQo4Bcxb9BhAmIOEM2lzH%2BN%2FLBveaV7aZdEYJKjvnV1n6wzMxOv3mEkLFgmaGnofBcvEJosZUhtkS9izCvfkzoSJFz1njWAYUB9irP7qhFIoJzJm9IEvRxFWmQfpM4Opd%2Fel1HUeIVAua3WzMOyGfOJ%2Fs29M4rq%2BU8bVDYRJ4bqZAI%2FaFxAYS01PQXuYsrnPqML0ZaU1nm2mIzrVM5hC9FKa3cJLrmSBV29MF28r389tlORfGZC%2BTLmPfp1C5RsXCeSJ5sxLpIRSBlePXouG3VVwu4P459wwb7ZdGlCXiLu1uKOIp5rmGII2qdXDy78jCk6Ly%2FBjqkAYBK3p%2B2B2qZ5xCZorcdZOLzou6yx5DcwLaFFVdrkJnwu4YqXodx4LqyJ%2FO6PXn4BuBYjilaZ0J8mtTWRMWlLjKaeKwkd6h51U9riHbFt4gBi84U4a95G3Tz4WCB68Jcyi7qNeJaVoarFRcIe%2FYMr%2Fe8ADav4krY2stk4ICB93Lm48azcZlzAoHr9um0YU1n15Dn3fxqVBQXxRvq%2FZMLXsVWnkB2&X-Amz-Signature=c22ef73a3d2a3d64de29a551b57da58271dfe371ccd9777c67d0b0f4edf58265&X-Amz-SignedHeaders=host&x-id=GetObject)

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
