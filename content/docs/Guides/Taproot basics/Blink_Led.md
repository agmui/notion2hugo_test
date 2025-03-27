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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672P5T5TA%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T021750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDO4jK3%2BfyRD1BbKenOFCXYKTyhIv3OTBCZLfOXjDG11QIhAKjH0M0z22OheomLKBBb9VeqM0Lcbc6cC8XYo8dl4IlzKv8DCDgQABoMNjM3NDIzMTgzODA1IgwoR5WDJ%2FRLcaYUvpQq3AOkSMRjkgQNsSLioRVmeT3lmFDX3JQ06GDJtSZBdeSH28U72wEtCOrFyqeke%2BFSxDc1ENmYUQ6l2wPtFRealxoGVYWQuYBFaHUJoK8Q08cs4fLXUQ4Hpx%2BRuKcZ39AW7T1kdDnVi%2FeoyU%2FsG7eqYAJPR53K5Gh6%2BeVuK32hFa2btkun1oSw5Rrx4ZT9F5Zqfpc7kumQeb%2FyG29vWozJopGsKml%2Fw7jqNSKEHSq2INjtEjBZAi2fDH%2Ffq6HRs2MYE7bS9%2BG%2BcAjPd%2FupQJrMu3CaYgtZhW%2FyPK5gr0Tu6v%2BQrjPNWyAVWvplxxBnIqCjFC6jegm1sMw7LB4R9H8piKpD8vk7aE6ZDwYShiSha0zPYxpwGdA1%2FhCT9XFIjC9p781Vqgd%2FPuyS%2FO62vZehJeNQJtL8HGd9OHzSpZ%2F1VUVJiHnVz5nrtj6fkkwItX%2FtVprEI4nJjZlfrhw5f9KW1b4i22uu%2BRWa9rBxQ9RJTnuLEtK2%2Bk08%2FEyNmSpJAw1mQMs7K73rQ42dpCnMpCSe3%2FcJkD4QO7wDGtuEgZahrP5%2F4KbNT5tgoGfLXyvH%2FvflbgStWSXjjAb4nDyQXCAVqc%2BU2NSitXx6NXeN2zjlapBGZO3dv0lm6Q%2Fu%2BAP8fTCVjZK%2FBjqkAduIWo%2BFJCckc1gZMgxhQX9sd%2FYJxubZZLA21Mw3NuiiGZor7744WTStrf0Pi2UHqUrBOQLglod0uN4yqWyKIT3VoDopIUKU%2B5W8wTnyPbwkvXirV4rRtAyHOF5ZRH1WYCmj0rz4y6sSTZDmZQCOzyVYu4v1QuR5fDCvBEBHcXvmUAPzKZi0Oubd9%2BONd1t3s252xw2iqAm7TtlRDq4MA1USoURz&X-Amz-Signature=a2b6f22abd4db83a01b8f40cd500c8d32bb6a4b77408169b2715005611b47777&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4TXXX5W%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T021751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrUaSXrIsHEHaD%2FbaGhBd1IhitUQ9UQq2W9GasyjBj3AiEAzsGoxkdWyOBDySW0uU%2FH4LmEcGSKCfuY4DF0rDxaD6Qq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDO4k1lEgdO1AwFPM6CrcA7xX%2Fp7c4QusCZmqIGEhNkMK92z80ntHFaUdvRXJacZa2Yp%2FkVTB%2BDkZkHP3Mks06pNqEbQjnVChkvLnrl%2Bt9NCkvSe7%2FriEh2pqFq7iI09a39AImD%2FrxSBajVB0XaaEYaAD3ItpeQfNzCStvjrQ8dDgMLKF6W4ZJPP9dBPQ%2FFv3UskDVjh3WFqcx5%2FXJK8SrsOBViPzkQnWSiK%2FxgxtxmJf3EBVAUNFpVNt0S8b43BX68ie4vVQqtlPI4%2BG9aPhqY2OBfF9M2%2B8vVeeKQLwwgvHtyu0mtXT9y1OKOWfdSgtDZKVWOu2POTb5Un7IFNS6BZFvuzIACx1XzbrtVcwwFwgOXJhSPpV%2B2vudgp5XHnrUAu73sQr70gl9cUOAAFXMlUIjSBDp%2BwqY%2FNjI92oXsJfvTTeW0CKKr9U0SUaHPUknQBNH%2BgpmiMHXHPYw57nekQK0RzKt6M98ndsMchyic1pP3WQptzIRYM236MNzAhXyzxNE2hVImYX%2FMB6gJRJHbGsnJaKujVVRjLaa%2B9DNX68vs2d%2BlBOZFU%2Bz8MpokKBVaBu%2FiN0tYpYkeoI1xQDWPCiHluYuOEc%2BxYGlgS6l%2F%2FSfNQdsOfyjCFETKRt6MWadlXyoSEB%2BiZsMAO4MJ2Okr8GOqUBzo3NKMo3deOPymmsq5EqCeLV5NYeQilAEUL0Vtnf3dlaIVk9Id%2B%2Bf%2F%2BJnQZHcQrCfaFsRggW3prW5mVmLACtpyfyfyB5i0%2BxlRrCcMuO48GqvI9jP%2BwP8QdaifcxXTiH1pX3U6SwX7M3RdYwtqflN4wrx8CG3UKRkWjouVaX4vvGVS38anPqKemdWkOIvkZikEbk3f5%2BpqIMKgvFCfdjxK2Fje6s&X-Amz-Signature=983df2835d61e54a370ad782aceb52cafcd125f44eb861bcdfbe8cfad9a7a8de&X-Amz-SignedHeaders=host&x-id=GetObject)

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
