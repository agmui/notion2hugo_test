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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXSKCWOQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCkhPhjb5wWzrwpPDd07Xpy%2FOGvLO%2Fk2sAYYJ4nuBEDPwIhAN9LDJ687LKzRo9ItOEk9PNT94jOtPo1XqcOwSJm%2FlNBKv8DCHcQABoMNjM3NDIzMTgzODA1IgwPmhft3Ijbe3Uzmxwq3AMjgx%2BZOSMV50UhWo%2F6K92MdoPAWdjD%2BFrRQkJoU%2FFLiOWLBQ8%2BxThaPhUoGnXG7J%2BHVIE3ShBy6SoZ67mLl5599%2FArnndaCn2NlENqk%2FnDBrLBbJEz7jvL8UMEL%2FYmnq4bIHujVfyJkBZDAjYU4rN%2BvlLh3bPhqajnjytVgBvDi7CBonRyPbOtkJW2lhFWu08KKy09HW52BGIUBPczAwRmJD2NtdxXsXd0SF7v5n0YcrUBZyCUg1urlZz%2BkBZFD2zgtRV4vSsqoWdmNTvyPJVeAZPHJGo2T4qBJHik3Me1QHHALUCXE2AEwWPA1A%2F5Hm5ci3xqB2lZlZC6awpbqc%2B59m9FM3ddiAPkmJvYORGpH8GAZDFQPhsKkDBqM7KoH1wJrA1YUfG5tdTpyNimfc7i7CUwDhklzJaRVddhjgOjAo2VA01sAJZIZWAKWoWGZFpFEXRkH8AaUFbR7rUz9YXQFK1Jtc2lpyjqyWOl4b%2For99Wb4KwF%2FiR2S0Kredf470NREDvILPgjVOa39%2BRvdbEhjnoOnA6%2FN6vQSlZfyvw8ycYwZnBuy6slkEFVLrTUrJ5g0Fi523pKjnxNNf%2FRwLbLnGjylj1l3QQDJeuRsGC3svvnKsQ2Mp2dx6NRDDslYLFBjqkAVFJwfd1qkCWDMUTGURqkEF5m9wbn7QFCvGix80Q0iBet83OH1XXfhjYOMB%2FGKNBm9%2BkaLJ1VwHawZoSduYKIciDgHqRXgxWpiZcrfxlc7itWfuljDdH%2FT8KV8f6m7ourH%2FMdyEqcPbKISgG0r5mzlzA6CQRGuKIbsG8BHOHBBgtfsPaFzEIq2Bb9VpSMz7psgvKefEgvok6RnM1mTXN5XfF8%2B09&X-Amz-Signature=43d0e65e81363b386df773b84b8d6c5fec774ab2981d3d68e3d47b11d19febb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U323TFDU%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIARN4rJ0rcilJG4EhaLwo3Tp7lqSF%2FcSLPLMGnJ74%2BuzAiAAkXMTknEXJAK0G%2F%2BJptuSEDNS2lMxqgwsJSwOQ4ExDyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMK4DGsQrl2GVcFwf4KtwDEccVfLclFsImcD%2FfuZZYp3ae0lNHy3mpJ%2FkDtfDr%2FZ4SI5VT4J%2FYt%2Bc6vs3bS3I6sagqbFDBwDiIOWbMXqorG%2B72ZZAhmBvo%2BuZk3clzVqsuRM4RTeoFBSbuL%2FtgkI0UzW%2FU7O3bFvPjgjDbKqR38YPOiz0Uh9Srv5PTugW%2BQKTd%2BSW0TBNFno9OYPIegXskqLoa11CcbZorJdI57AoaRfVv5Vd3DM0VZ5Xs7A0RKjOtNtawjB9zpPr6t8v2MiPZIUkVYp9ClO1EpfrjzIRa0z5EuPOOSapQ0dSkUYPXmMuyUbYAD7xa%2FeVqYRDjXAuTGkCFnZ9tPdZXRhpFpzVgqJIsn0llmeDxR61gfTL0llJqM3Y2HZvlP1nSzDfrR8NH%2BHsCqZq2ZBxAFFRyBcCMHkfDHOmOoP8yZGm2pFxU1TN0PjQpUxc6cDeGZeXjzYuvQCka1p0ibOpXJHY%2Fh1wxApY%2FzJbmuW9Mr1ML718QRwjg%2Fk5jZpsJf88vb32qh1y%2BQW6nuku1T3Vetxz%2BcIeVPXQHKlXSCuDpf1tOxIRbsFRGkZ88vAi5rswoDNEECNLL7vCHgQ2Xks5HxU190b7z5iIj0Gpeva69jGhqHuLtMX5QXMuXman4guDahrcwz5eCxQY6pgE9haDkGjPT%2BCT8xl29M7CokBRpQgI1hMiarvG3JV6R3ty3v57HzhVmubrWuhL%2BsFnhYxpQcLGGR1ldXf%2FNCBLVrP97zt6e8nCtUuA9%2F0VTRp%2FM6%2FsAYohUMvLGn4ytBntKol1o5EKgSMWndjSBs%2B%2FLnJSGDuA04Fw5WhGGMBs0A15wgCO2%2BNHkICBziOHaSeXv7ESeB7bviBYUeprIlKLNk6jg%2Fak5&X-Amz-Signature=325145bf51402ac4e106df1bb8b0d14edf11c111f0e6d6e831256399103706da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
