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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMUSRTNL%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T024054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOctJGWKiCNNixRM16kaw9REoJxfvtBuT2gYbYnm6CJAiEAxS3XppDPzgHb6bBt%2BAoZc40HVwQjAcjx1QFNVdBzaAEqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdBYCT0ZsusGWm%2FGyrcA4ew5vaAOdXpE%2BT47%2B8yp5kRw43AUTS5a9K7HmsvqPHZNUFFsdS5AWHP2Yc%2BuvKQ5rbbdsltChGlV%2FI1isGzVwPp5jAr%2BLr70vd0e1ArRx0gdv64tO1YC4M48GD5Yn6bl7wH1tsxdtbQqf1W7cPHeDuX5KrrJ7gg8Msy%2FmJC0aqNc52TPQwd4cZA6QNuCpz07gtjrUFY3C8JiL5HN6rR7Q05asA6DlnIZCAdk9cBNIDzK4kIJkDfAL9rY%2Br9A2xIwj38LuSAp6UeL4Ul%2Fr9e8ZV56m6t9ivKNI3X3I4g1q%2FwM%2B%2B1gvdftWvUC8ZBUzFO5AcI8k%2BMHG05cMZtY5X970rIiqmvZleGJ5eAWZjhA9OgGjk%2B4rM8bxsWgFxwUrDnYFVkDyThgojbJH6etvOzwoEaQyiRWOtWq%2FGgVU8L5%2By9lpCUms6vm3BnWpX2rumB%2FQYzOgE47AGHxZaAueKmUzRmql1C9n1s%2By3qjqXiKFj4elbzmG%2BywCmsoRReSuO7Y94CUZV3vvzTJSdHtr8YK%2BRfqdqZyaSACAQaCvA2B0SLCsmk9LpSsVvx1ag%2BWz38Pu0YHlCbUijlcZx2Nlu09r%2Bjm0PA%2FaOjxtNCwilv4mg5Ev9Vh3FTotyVqOFSMIieksMGOqUBhu4aZHEGpozsrfjhHiLAC1ENbGJfAxqxDKlLdeKRD%2BKCRksV7RMJt6GCo1352paO2gePlXsjbZ1oK6kmxEcqJ2x9Dc9vYa4r7mqCgrhDPC9ATEwMEEJ1FnDS6pDNp%2BPAbWi%2BRuway8m80nPd9Os8F%2Bp2spcbCXpEd3jOh8BaedVNfOM7oBB3G%2Bel1HNt70wwcDtGXzcdnJtzUlufCm6ve5BeGMW1&X-Amz-Signature=17c6b5ccb7ad3e77269a45232b156207fcdb1cdef237b2805a8e29090e61abf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMX7Z7QL%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T024055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2ifWmq3FxDT%2Fme1YgzsAM%2B8sK4%2BEP4j1sB4FiWRTeaAiB6jXJxLhfIzoctVq7VHzyD8xtqeFR6RZD%2BuvahcyIoHyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbI4kEFQstL1vANuuKtwDU%2FYLpFIIR7AFT8J20oxGNZNNipiDzjAw34bLlJDUSqX5%2ByE5FgJfe0EYE0usZle0fx%2BdzW5DxuU3pJP4QaZ210T0tEP67PxqVropIdgRTU3ABeZU4M0HqAizVUbV74qINTI63DPHfyQOaSJzQGryTjnip4ad5Sq9odd%2Fy%2Fa%2FhveXoHDMVRPdAwKE0RV8PT8%2BiFKV0xYEHLqkMyrCz4MUZRs2o8bvtcdOVvTsRFaT9uZwUOlVDpPKytXR453qv0Xq8%2BagmJgQT7J4FSzwzWCSY84n17%2BZMVkDU8BXJlnZ9KsxdD2I4CU1G2pe%2FGdyb9YxILukw6TEzcHbLllrt666UfhVP%2BqyvIx0GW3G47wWWs1OSCrCIR6FgG09VE8WwCeUSU%2FWA1RSa6aBxWNdO%2BCJPPOOzCe0tCv6Mnmz0KhHS4PvqC5B6lbSgBf0TZKGTc5jvSRisezmy%2B5OJ5xOTytVfKlGZlm1c1B2q7aVxHOIDI8V%2FKhp73EqC9wV0FyuMRNlChSsKX4k00Yvxy%2F3WI3z6B4M4zfbVjILOkdpwc6S7tAafT6AVi52WZh2Vgvk4Ms7XRnLjZgvrZF%2FHEp9AJfdlOhbbUzS0LHe%2BTGLpcEVSpeSF0yxcmyOZS%2FvFHYwop%2BSwwY6pgG7xja7L69qZPt3FA5ON0xUItech1J0pcqof%2BF%2Bn6l%2B0QBixcq8ExZSbEkARqcLPaVJ%2BN6ZJEAQwd0yABrjHZBmpWbxWLOH7rSrQQgSJoti%2FDjVdKJPDqXRAWxXuttJwGay64PP%2FWV2lI%2BFcxnp%2FKzNsmYRiy5ajMs%2F4yQKnNogSfo2X%2F7nmQX5U%2FeZt9Nv%2F6rmJywSDz4w7yEh7ON0FJ7Naci0%2F8oL&X-Amz-Signature=0ede870786c75f21527f23b9062e190b60c643d3d30d80bb6b9192f754e0531f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
