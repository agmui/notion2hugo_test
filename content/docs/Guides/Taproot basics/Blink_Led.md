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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEDQL46D%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDgDaXDXKlhN8kHB%2BAHLOz9YCFcBVf7dbJvnAceb6RJxgIgO65iBsM8qC14os7eetqKi187kq%2FjqNXi06tONuX7%2BNgq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDNRusJMQXTnl265TzSrcA2b45rC1Jx76Ii57OXr%2BdhD3ClgdaSjiXeIiIyY4j%2BWTk5IXfz7RbsoU059%2FDvXjZUt49874aq78WF3arKVLU6xwMfmP0CRILAniGUctvVI5c6blx74YXFqwmxGJImMoWrT2USFGhSPMu4fAW1pkiAzQ9Pp6MwSHXrgQsq8j%2BbHF3HXR%2FowE9pUgHPw6tXNBfI%2BYbnkO5nz3ixBWjWw%2FfnLE8EBm5ZgRBcEGlYoU7HJM6NQt2FGSWREU8FNOf4CN6lAgIcYV4bm43zOuIyqqEqoNnhRvyWqI1eSQ1mdhuMZzxxhYvTzfs0pB2N2peBtBiae8KKmfu%2BGABqUKIL5qhCLmbf4TCHgRYfchNMg92XmoAhq0ayMnu0WpkjIjAZFeG4GzgGtQxGW%2BDYvImjih2kDPk4r3oH4NnH4mFg1GN3Z8oUsUfGTrnXBl6HMtc9Fgqbt2Qzj3TELgCSSEsFK7wOlVf963UfoUm%2BeKTx%2FieGclwDiSbri6Ioyw01jc1CyNWOjkjiowrsWymontM%2BgwE2U6twhU27zRfOX1Yoqtgaa003igxrpL%2Bib6kb3KLOSa2BrFwD2Tene3uVTq%2BrDir5nmY%2FX5ToJLT9du%2B4fP%2FvZnDI9Wbx72hS9r9%2F1LMKStqMMGOqUBXuYDgq9PB1ccpoYoRLwHtGQ8jPX3Y91Obw7bSZVpjfY2xjO9w7LZW%2BK%2BYSL25sRcYAOQBg0xWGViHavvb6ASH%2BUQL3LtCvQXKghMTwp6FT7DvbOg8%2BivjhjlgbOy806oHRyRxVCi%2FSGCYiCobSwb3VjPNl2QuRRggSOpn4IEZ7J9CIVLwAUTRqT8r%2BlYusFRPx9HA80f1ZYk13Nj15KAQ%2BHY7j9H&X-Amz-Signature=80cccf5c3373292f5e5e224336742818cd2bfe7efc300322451e76413dddfbc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5UWMPEC%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQC1gtxRGw29OI7GMWGTV9YwMXCfjbm202FJDbDz8TGekAIhAOALKc0WTfeB7guMz6icfKS16D4gDA8QE2wVuxzlK%2F%2F6Kv8DCFgQABoMNjM3NDIzMTgzODA1Igxi7qS72sq5KKCv8jIq3AMmT41aZN1Oxaj2ner%2BsQ73EHAUhsMH8eb6o80W5JLABEk1YmO2KsgclB9Ugmlg1ZHNXURtayt1JmYnOWpfP7txWieSmP1DZHg4L%2FcqDEYmvlPzCv1IawuQKJJWO0cl6hp21g4sDxMYFcIOucfVZsTrgoxqxatDkx%2BvdrZgwTbB96XjhDB%2Bdhb%2Bmq%2FcJYkXthXSWcug2Yo0NT2nVBbxqgT2K4RTaoGofSTm14aw58YekB0Z78PzhNOCuiDuA4SEheOvc%2FKhKXRXW15iDQwGLC%2FekRyuInXsSFAuRliBheYr%2F%2FaOMqM8mU%2BBm2ENYa2ywFSbf3ZIJYBoy1Sdp1G4CNjepw80u9yaewi5Z%2F8MeJcFn12ItVkWT%2ByezgRhhRJxBPTVjJcfxH1rsxpeVQChbwc%2F5be87W4ANDDnsXIqAV4TnyE4tXFFdQcc0kXKAljteqTeDPwa4wvA6WirDyL1hAY0bbxCQ2QHtwffRwSBuddLQdPLnVlMl4wE2ZYcNl%2BFzbuSZs%2FLBLDCTu1Mt7dHJcJcZH6i%2B4U9yDpaOfho5rhcn2y6lvGFoTSj28UPKDQJeTDRll0zgrVmGPdfjckVcYReZLSHkMk3vtOeBj9qmGlDBCvfEZDVGSn2CaDGmTDfrKjDBjqkAc8UYnb134eoe%2BoHl3AsCFEW36kqPWWpO%2BjxPh3uYLY0FYbkGCLJI0ym2%2FXu3oKQgJ5N09D9tg4SLW79%2FFmGtLa37fWjsfElDmUe8a6BuCWYenWyoPlSZFHT1oyHJPrCGbm1ETSQZEinBGBoUzOEdcUuABEItCBf7EZQFQZHGK%2Fw1B4CqrkNkT%2FPTWmo9R2aG8zAvndp8LL3K62jJ1lWrF905D5p&X-Amz-Signature=54c82ad586bea0185105803bf3174a2edcd39c1d918df7d7a8c4ec31239acc0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
