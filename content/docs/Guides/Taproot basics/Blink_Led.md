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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PVADPS2%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T181015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCgEgfzhooexuqq%2BDrXeW0ucyNsdBILBVI6ehpx8rxSvwIhANQ86N7TK5utolRlY157CktqT%2FkmifRLLRdhER7wQzTEKv8DCBsQABoMNjM3NDIzMTgzODA1Igxw1q5VMBlj4O4%2BnnAq3ANjLx2pO3TBslgXYvUCe3ogMbORHONrH%2FQOpmuG6exIxvqsKl0jiixUCjCP40Itj0U6%2BhMMVtwvGBU%2FbyoleMqRt4Rjj8XWc4jPdS2G0N3IkD%2FsIoAXV%2FBfpMRIE8s%2FcJOE2Hgod49nWE2098g%2B50QcloY2YTeNb9DpABG7bnBc%2B%2BD6YAGZj1fy813t0gEP8I35ElHA7Q57JsHl06KQYBYjdZYhoIg1ttqvgLsVzTlCuNPmHCYe%2BFnVw4xjw7bR%2FFPNGfE9DIEzPtc%2F5LKxHbnJmkidGMZL9MXshhVXhfguEM%2FgVq5U2K8q8%2BBhhsKQ8f69Ssk2Mt4A25XJU8nqMN051IVfVyNhrtzNq4xOgkkxsYK0KMKicVAXCbC71ak%2FQspjY13oIbGh4DM3LbgJF4R8RHSmB4gZjDN5P2HD8S6k0VlztjJ0H9JnV5AbjzbHjtE%2BbPAzrgoL%2BxKQUiQSLvjljzq4vuZmILTVwN4ZmaWg1UaoFvFdRgzuRY06mAYJBMb84AAzj2ancBWDi6IGTndfxUkYuJhp7Zui6TcCjHsxJKlO7rerIjaGhzxfCTb%2FqbiVaCvHcscAKm24gBZNNgy3awg3xj%2By20Pyzc%2FlKfRltwPmreZy06vumg9k4TD9hIS9BjqkAUmdikv7xM%2B7LfWopyIp8MRgmthAnIPxSiglZGxhA5u9k6AyYYgXl%2BKvhswaIfHYCP%2F5071OFsp4gEtEKxo%2Fh0w4q%2FeOLSnfnMj8hnAuxKueR1VOorP0%2BWuoJ4XEL5wlcW%2Fu%2FA1a1d4iyrt%2BBI0KJN2azaipU6J55KrMyPfTgSr70ZgNdGEyRccYTtP45YCKLum3t8EPfLm5H%2BodchSWQppZh3qG&X-Amz-Signature=4eaa03866c6ff6da8b703c4e1d435a6522157403634462f7dd3c7d6ffac24cb3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFC4XFXW%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T181015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCs8%2BRsDexwWb%2FHO1QWlZZjLJNZrmZ%2F3PJv3TdB78d5DwIgZmajcymp%2FUvTWugzk09vwxuL2OZOhlOgzQhTuOi8o1oq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDCoJX%2B2UvWqlkeC%2FESrcA4nqyN1VCdUDSbLCMRHx5LEIrSdH2EmQ4xM%2FJ9PtJMkhCKnTcqbkFh6Is3MPrqEXHAvP7V2NjloWTGeLmhP2I5wxR6nln%2FZfWMGRmH1usF4EXtKxbY0tXde2Eq%2FHvyJYipx%2F2GC%2BMtCGBxpqlCfxiAVMZ6alMnvNQUxL4qyqAArXCfqvig66IOKQZhd4w1K3gpC1KrUnEPGObQa5SmfiaiOlhQbx1hKPJ8sZhFMZZ9R7sCBRSc7KdtKdKlu5BahZ8%2FvEfy%2BmkWabCMVkTjlWRqAzGT9ABhxGa%2FNgMbBCBlKIwwhDY1WbxS4SdfdAMRthx4bxIBj%2FTBAbQPLbm28pE%2FZkCsWIBDmBdn4oXMVOtXk1qrhYCia1FUcuk9QZaJm1lyKBPtPwLSZhoMPOKc0Q00HHHcQlD0Mn4WaFQCMQ8GRnpNeOo5VMqGjPisZi1q2CaSit2k0QJH%2BPXfxvcBwEiebtEUsFcdTM5fETcq%2BEyX7Y5dMiwck2KwSJudKZY0dD8vWcLyfghqR5etKRlpwabtTPMFufQtLxHzFK2WDgx9%2B1OBdOmYN5OGBf9UTAxmOvfWxohEBNxJwpJd7KNi77LzHFs3zxYBCZXioe73l7F%2Blpxo89Q3q%2BQ7Rdt7VIMPeEhL0GOqUBydmJ9JSM6Ivfb6wO8%2F1IS5MucQDceKGlX4LJOeiWDn0hrTa8aDHncTmvQRQR1YAQeJdsUDy32i4nhurr6IWIkRx%2FDOiRuVs2SjzpMh8qNdhixoIFY7pA7i2naiWWigGUlJI4Lgtl3ckFskKL8VA9EtGtzWyBhqcjVicf17cSqYflbijE4YkUf%2FEDsXrYSQosDZ9Af6fFBsg%2BSGeXTE5iQFy81P67&X-Amz-Signature=3d79e98ac67a1f251da3c3752a8f8977231dd9bd06d3945a9720a462f72c8a9a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
