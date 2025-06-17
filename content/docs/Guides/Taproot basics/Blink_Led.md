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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIGWTDTV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlqjFtHwPGj7yOBhbvCFzoyXXBqaBns6hJz7ttr%2FzmqAIhAMcqbOskAECndOleIZVWgpLT55Rlf4ibiUvy1ZBAthf4Kv8DCG4QABoMNjM3NDIzMTgzODA1IgxfJZVLPMZn%2FqxVfW4q3AOMEhH1GRLsetrtGGpItqKb8QUXk%2FVaYYAewI%2BJihEda2bZF65EyeifgmARQp52vz5znNQpvLGcCYQB61qFUF5Lg8H5Xtce%2FxBh2upN6PN9tqWVxLtt3ay8KWHlH9F%2FJv8noofVAX1pTTUmjBq31XnHFtaxb6X4Zrc8EOjjrsmXHBeSVUCtF0j%2FmM1YhXz1NlMsATwTDhUf0A%2BAlUghL7HGYLwTobC6N91HxYtIAdvT773Ko8yKAIW8f6d0HDQhCD0KWjCrewCoetfz051WA5rV4FflWjEyCMKo1q1cAegZJJNzJIPHgSA3UHHfAF9YZNTpuq8KAUWodIJaCItes%2Bkyel7ZI9kRUqLSE9Af7Qv08lHWUOquNFJl12PDvE%2BA9bRcmPm7gdYDYCQB0fx%2BNV%2FWT3S%2BHBRm%2BlioWGon1aZVN2KUgwXhvwyq%2BTgrWIh2jaXwteGISTfaZMT9Tn6WJba%2F5eyVfnR1Yz97bA992C3VoXjMzjIE3GmSeYudsynU9L5YDFubyckWU8lqTMTMp7soLPqv8tjKCvhdjRXNWOiLfqayCQFldVpsBMFAVVvuVrY38C5cz1wyAnhpx7guPDvekm3t5FE1NyXrMeNAiO9zBBLsdXNN%2Byxwkv%2FtCzDb68PCBjqkAavzZtQo%2FPoTjrkc30sPpNwZEJlCWdhfWKTwi8YPTwyln4kxZ%2BUSjWje%2FyiHNkTcqInJfrWhDj9r2x9yIxMma3PvE4nIHJGVHOIRoT%2F6jluVu0fUbOzGI6Dmq0JJH3tXM7xrzcFrYogvO93R1Yro90ogzRgpTtHKWxizQyviq5uhXiHOIN5H0RW9AlZQUgedRl9qLITIc4TyRPI0VwMEi3WeiTmA&X-Amz-Signature=e23c2edf54601e03d75898a5b2c40062ff2f8567342d31f43e85a0a275e0f4bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSA64PQ7%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHxf1Ub2mJOC5lRrGWZi2hcZBi4pjibu0Q2tPtTTKdjBAiBbtKJnTWlHfvPAP7Ly7J0d8%2BZZp%2BqFXHxOx2YgBYBXTSr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMTrINqn5rU488b4%2FzKtwDzp22ie92hZps1As7SuD86uWQxxakafzva2P7HFPMgkqM0pFsretfcs5YslZlao3hS%2Fcns%2FPHgy41V%2FbNtcOeuvinmcvCs83CTafYgEbyfMc55hRF6Uo1pYPTrlA%2B3tf%2Bcjk80mi2S9z0q3xEqh%2FNYwAWPGrJuQdq4rhDazl5GVyojVLBmqD61O%2Fnb0KtSp%2BeuZFYYXPpVSOQ5ocfSid9SnZmnL4GvB7DKMVPoYS%2FWddPaLZZpvlLZ7XArtwiFCXnn%2FzC0A9JgZen97NRlC2hUnZrPlyX%2FffoUYWtnIxgoLXOaQV%2FsnbIZOEEl3WlhVXjG6wMq98Vl5%2B%2B7ZW7hy9qO7fKHPw0aOHejxBc5VPWbIBdEZYWb4%2BILqsKfwwr0OfNfnR4yK7Ovp0o5NCIVqv4HlewzOOLa7h3%2F2hfmNjFbFqdtEDkk5VSFM2okTU3eKE3RuwLwfCbQxKoV%2F8MLqLFprdDQ8MbBZhq9a%2BqMMv9rl7bWe8gSD2F1RYAMWrh3ZIEHqszt3ZlHLz1LVffAb%2FtYSY17oX0EMS5jn%2B7PZHqPo7yNCt59Ih0aB7fyeBeyXNKKUvQls73%2FUy7%2BQPQ7xNfSpTCjMHpGE545B3urK7iOTXM%2Fz9bwrjUu0oHCHswj%2BzDwgY6pgGFwBuX%2B10A2sSGNgInJRutrmI48DzzKhU3mWNR1yNfEotrliEH2%2FpvqwUCygdw7UUnAnCLeksnDYhe2cqUjKRI2oaq%2Fj0UkKNs8wDSH8ArbT44IottdY5BhdpA7Aoa%2FSzq8TfGMqLdnTtKsS53djVz7ZR4WLLRBn81eSWjSBpQTow1NPQgX%2FtR9ufoobjyEb4d6d5E%2Fh9qahtUHnuNuPrdwmLAd0w9&X-Amz-Signature=2f42d449652eca5e458a3c23de2c4d78376894838a70504782a342b5de87ba97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
