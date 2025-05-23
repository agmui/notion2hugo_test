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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG7UWDR3%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T161014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDYjF4tEFWflO%2FH0JyEDKKeVUwUC3d3zbssODbwCiNXmgIgRfXsGOd8liKFa%2BPsaFJ8jMGXbIKZurbKwGjCuZQ9C34qiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJ9Y%2FUV%2FPp13E5MhyrcA5AqF8BIRWetu%2BVHMVykrSjCM9iTXwzI9MQHRqgUbuY%2F6pcD9aIrU0ijlx7DZWJ%2BhnLSRNTKPwoqKRA%2F93SPpb3wya1wzwoWJ%2BE%2FUe5485mXQW3VEo%2FJfsMFjOwFU%2FSlMEArBX2%2F3dFagzvHQnVfgeYIbn2vO%2FUxCfy7ac5l095De%2FdMQnQdGlYWzWAn8QdCgFvz567hffIZHZlxy54pwRFGbPkBQ0vAzDQrYUuVu6dB4ne%2BjzCAbkCzuA7nrqyslgNB2sNDpaQxm%2BzZ6jlJqSXxe%2FQcN0DHIkpE0GbXB9DHF8gRxtGP27WPrU%2FES8%2B2E%2By5Od2Cp9hdWzfL2c%2FPdlGjIdi2Y1Rdjtv0G%2BtylpIG3rNAugV2ZOso4OI8WG6cUOOIrqxEjAv%2BMq3w%2BjmW2ofoROFm6yodSO%2BVYOcNTvT%2FyVH6ex6VuUSrwVxB5ugo2SyZp%2B%2Bti7iLy75PXw5%2FePCkQblWmH06%2FvwJ%2Br5lzgC5oaELDkkpFuYpO6ln%2BvLWybPK9ixN0UfTLHedr%2FJKmZ%2FNxHlfXwpgyn%2FETJECI8ggNBOpPeu7Wb0bXqidKW12kCWjs712l%2BQpi08Jau4HzXK%2F%2BjBY5TRWtm0tRPYlXq6sQ4TpKjZvjjIMbvXyMM%2BnwsEGOqUBHCworKyRbUE0fustsPOO9IZZoalhIb3zfqUZTHvV3OjoAddMDpvM2Qv8ur6BBZTThfCbiYHOfuRtMBTcx2z0u4Ip%2FC1ttqGQmGUYV8YXE007NdX4af8%2FcRObOM31OmUVgf8lm%2BsXGP6QVxL1QLxUmWss%2FyGbB3k6P5k0fsxptAnUm%2Bej0UE9uKQtoSgag4bDtxng4gyOL4E5iUv2XFMzJ3krocJV&X-Amz-Signature=09eb745b031d6e58411ae8421947283d2f075c6217512a080a5912dd7da0a725&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIK3RSE6%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCAGfKsEd61%2F77rd1caXmosfOX3GJjXJHT0SkEfKj%2FUqgIhALBgh2tGQ5Nu2PFOx8E3dHduTZDBZgyRaqSqVsrUzKe%2BKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLoumAW6HiP2S78lgq3AM8mVIkdy058zLT44emxIgAHCSFbQ5AWc%2BKfCKzSYEsubqjFDZO3pvkEjsd%2BHtD996B%2FfaojAP48hkt7V4xMDBFb1Hs6%2ByCIO57Vt4YXJhhyR2j9HZQj5wZhxwwMo4gMUXdQnvmfZIfmKu8I86fjPNWcTc5bhVL4kdzrs%2FijRm1mTuLcJ6V4Shotu0dSUh7O%2Fo3mjAm8WwRkBCFdse6jqOoAc0CqF%2Fx6JSvzDPbKSkftik6Tb9H%2F%2FzBAaAncaF7X7W2GRzSaL6DZWPSHaK1cM%2FzAP62J3NQLGIADxPZj6tjwQSguXQitf0kHrp0ACjsJevbuz7JdSMD0gNVEzF%2FufoEFIOBw2SaT2I6nEwC8se3IQEVVz1xp60BB6NrBvDcHABCXXL2LXfUzOw%2Bc9VFSFGC8VRgsIkpBj8QLCX6cypVz6Bf6R2tyyBg8%2BF9ZJAKWlvxcfAcZuPkxoENqoP%2B5OE7p8uHBObuONkcZU4MrUyuVTwGZL4lGjkUscC9zrZFrDaL1R%2Bczdpm0dcYaqkHGatwPzGE8%2B1IYM6OcZPKS2OWKJLHPyEBSJ%2Fqg9zQgVuH5SjTQtWpkDEEnp0Aa%2FuFnAhzhnQlcmZ2aUa9aCbqyb%2FmRb%2B4LcWCyXuJXk4W5DC%2Fp8LBBjqkAY%2BlEhoVyvq%2BWFRoBzKz7w2We3wf6Gqd53MCBobu8iy%2B2ume5kLlJuOV0PsJ%2F%2BsM02rOWHFC3uH8l2V%2F302rKnWRauS0Poxb8zKyLPmnLjHXRi6Nv171t2Z%2BA%2FYhgnbT4TRzBR84S2BkOIeJ2uMPOwnb%2B2kblKvYmdoW4DAgLyWpSL8SpVOVnldsqJCGBeGD7SZmJWREVeuKO78SAg%2FPbpfbcCh8&X-Amz-Signature=993168e4878aee54ba388105f3f288eb6513250ca0f0b13de492d5cd094e4293&X-Amz-SignedHeaders=host&x-id=GetObject)

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
