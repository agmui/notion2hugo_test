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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR2ZPPGZ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCzgN2FriJyEQXi9F9qwqKuyoJv2QiSYp8YhwATjxDUcAIhAKzFH4jsoyS6u7%2F10t7WoiPVd12115Vq54mPrCVHWG1QKv8DCCQQABoMNjM3NDIzMTgzODA1Igx2anxEjLFKUkIoBiwq3AMvbWgEr6CBp3TO4cimpmXHvQQBsA18JR5SdZMndCd1rvDzGwU50xfH2z6tRaaC2oGCBL2tJiFEwBWVfkfoOUYVRiUBSWvwwBIZJ7laylUFoJIPlN5ajDaT05FjgD%2FOyFGf%2BuNZljd20ZzygL1bwEMWgqcMbKvVoGOJIYaxmGWwRUfn8lcKljLcpwZcbN9tkFVLRtMd3ItVMl5tx3oHKw%2BZnoeJ9Zifz%2BrE6T%2BUIfwj83GCSsgCFvW0NHhCQlkHk6Hm6UtvObO3WBkxGAX3396RbqEsK4kDujXRSTHELCF005lLU0CzqtrrXJh8ljkthoh4Bb7AObpUY3mrw5T22dt54P3KqoFazfghIgnCPXFiRoi09AqDJEoyLBqbO%2B2QdKg2HtDrBDtMYOYfZyKLMKTYo%2BES8bJloCRvQDHfau%2FsfmIQNgqcMoJuvBbp6xZkni2tIw7yTxjpAe8zQNEIVqHOgdyflgy9RmtI%2BtT62B0mkMDnrrG5gSnMjqBJEdQJmZHwlg2m1%2BeWJ4HuAtVIv%2FV%2FujylHXZLh0puV8a5CjtmqlF4UVNgOvPH34yMsOXT7yWRW4AM6P%2FK%2BBLEzZeSRTnnf%2FnfJrVyiDPVLcFo0fDiwHSBk5C%2F6F%2FbIM9wczCWtpXBBjqkAWE64OObUyeanazeVB0XLaT5NyJTSTM%2BwCo4PVNSDURMRozjZVjP5wtI6Pwha%2FVOYwFCVhy2F%2BEjiH9l6%2BK8anA9AxGvkatZPfoOtDcZSRejoo29ejyIQrJbgsXeYXDshQNWORHfqpT3eeZp%2B1akogX6xAcx84bsNlCquOQjSBM4K5aZYrnvK%2BsMS87keYoV8d4aCH%2BVYhTNhjHGWEZD8pPvUolS&X-Amz-Signature=867fac7da617215165fc2ca767d47e4fd662bbd44ed30fd298ba9ae1cca56b1c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ARBUONV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIA2BGxEUZbgMOl05Jay%2FeA%2B%2FLdyAi%2FXPt0l9VqT0tpCTAiEAjbDEwtY%2FZ%2FAYLYPUx6aFz3uX9Kmomdj11VQZAWrGCwkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDF%2BDRDd%2BDnBP6ZqXMyrcA4CBt2OfgM%2FxGhaBPHz%2FrDuWVxq47ZNQx%2BnSA8CG9i2z7O5YNPX3ijCwLw1N7WGQEoqVrKd2tT%2FieBov2wc6YQFn6%2FVxyJ7vDaALmGrH%2BRhUDLBSW7kz5YL0VA%2FcmRVTES9F2zHKTsBz5%2Fcbi8Pc8WlwrpUQvF23VlmECfZ2woHJXsudwtHgfPbS7s309sFt40rBeb1zER%2BaP6A0BRbwfzRSTbOShQlcK%2FbsAurhpgDwYt5nGWlfuDAcQ19TnHFQtfDmjFzYk13cKHfjRp93pNvrCeEakjBl92ea6fzm5JH8QFvdf26ZZoHItFkD4NqbYg24y0sXYzpOWdR2btB2Z8SbSjYo19pqKsTNOPKcE5SrXbT6AkMUlmWTVhBZeFMi5gns8VkGZJGJUnMIkfBpO2OMiSGePHzxjm3V8To6WdW%2BFOVkBNiS8QNvW0DbOIdhdYFj9W1e09xkGyD2NNnZW9M2BCoF4lxJHSERTbmbpeTODvneIh02RG6LLfSCVKjKZi51IvMk5iaw9w7GcJUYSTPnjLeEpUYvDi4%2F%2BgdldpqK3QJMunQ4mt95ARtcTGlzX4Q7SGM5%2F8%2FKd%2FGfjNQOOuZ2a5XXMaEOnSHw8829iGU6%2FhkYdsJBydYpd2pSMOi1lcEGOqUBrq2KCFAPXCSTBu1VOqVWBz%2BgBgdm4qhhcH%2BNrmVEwapOswu%2F8BHoPFcM6e%2BXbgOvhjBvrjtmbBsIcm30Q8Yy6gGgKVpMnikUKDyeP4gbU3pXoYS%2F02zJ%2BEDGaQp0R1a%2Ba5rBrDb7Sx%2FFHz5QJVDnoF01ofFUbLgDnc241gs0Fgvcslli0fkvaf%2F8VeRa%2FPfLII21qzEb1MbSVaGg2EcrpOou4xbd&X-Amz-Signature=a5298869fe26e67583dc42917354d7bd725f372ecece79809e5383876bb2a406&X-Amz-SignedHeaders=host&x-id=GetObject)

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
