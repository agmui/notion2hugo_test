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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGUUR77M%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T110100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIGBYnTcCaDSHeZXFjrZ%2Fexf5y93hGfoPPXLGb%2FerKlwIhAO6ncEh80XQHm%2BGgOt1JizhxaV3Eht%2Fj8NTFGG4ZhOHFKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxifACA9L0AgPYjvPAq3AN4vVeUSvzuLquebiQh4pbsnZHIodcJT33DXJWHG32RfP4GhWPoulhcBrhozp7Q6Jl4abdx%2BXGuIxN86GybEe1iEGQyCImB2wOOgjiMCUXrHDr%2BB%2BTO2YBu092ZWaMkJj83gPZcGZuL5js0iWSDtAz0sGadm8%2B56aP7vLx5PkTjfWanfR3xgbavM6aSB9PO7GrUVdN3YckF%2B4uPi02cM9bdxWWxciMwDT3QhLxOxVjth76c0NX5BSUcYF7iVR7frU4rNKE4OvCro2RktvlojIbhRt%2FiWv%2BkigbxZHBNcY89vNLn7%2FReT46mrjSlupmGX0KOK50RLx165qFP0iBVvl%2Fz1v5pOPvjZEfR5o1fLTM9K2WIhl6PDj6qHqqXHK%2FV%2FH9F1GKu4zcQAJjV13PkHsWMFHancs9jIl6T7JLubbB790fbvTG1O8Uw99gdysrjlhg5f0hJscvCCDpK%2FJX%2BTJ63H9yJR0d5GLJO7ws9SVAXRXofB9PaKbi6S1V9t3aiXyxzcvpehPW3NhVC6n13dU4yrwjMnNi3MlK158EsXq1Ka3v%2BaprB3P9DTzaXmKDMH89oeVmmbYRDPe0sSWO%2FY7eZjeS2EjAKeSZz9QmiE3LuO1gTtA5K2yxKkF21YjDpj%2FzABjqkAfutkf8B26jXTp8G3EDBE53%2Fm9kCSv%2BN0%2F3CT2YTnpIxiNSGslsquFuVlHNRElhilCItJG7gl%2FMr%2FEnJTO1XaXyFQGpV6iQV2kiAfQIY9ceRk7y%2BfMrFUF6lf7hpa9fsVD9OuNsQQVOgHb%2FNcS2ZLTAxSyZuQLIAz41eW1jjFyw04RoaVpjlvDefuuY%2FqyPCDeUa5hNZQhe5%2BqrJEsg8BvlnMULU&X-Amz-Signature=f099b65eeab8cb09494bbd378a1bf95a9fdc27e071afe6258a2c0be803fe6ddd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD46B4DX%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T110101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiPvnUXZK1ABzR8xQdTS4cdqrl4FsOhchtFB6dbFvwkwIhAJci1zhVRxN0CLimxGfoS1menfPXUjQkz7mryX5xC9KdKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBz%2F978TzKYLdpLA8q3AMsed3GQX8EA%2F3qpi0wNDJKveeFIEcTzU8vZWMUA63ThS90T902D%2FBRyQaN%2Bv3MvLlnmivw%2F4uIUSD1Ri6DihvJDzad1%2BlXfbLonvIBcvSXVsCCNw53sOa1zbqLMtgdTBV4q1ZNEGQbyvYQc7AhgoRBRyaZ%2BF0tQgfdc6sEbGcLf%2BIp2nz4g%2BjRXgiFaglJ9dJh85Xt%2BTuLmVtlEFScvC0GOlmel4ipHQ8ANddBLICg%2F4YQSfp9eGKV%2BREmkeUCYVrbHO%2F5CRF%2B3jM9lOsiUHXY1yqGMR4u%2BMwj2RXUTvzTYvmMm0w39vjZEMMGmy1DR7Eg6fdbdSSZ%2FGFLRpF6VrmBv%2FcBeV7SC4SrrMdbUW9%2FJdSl%2FGtilTfwSTpYGyUgxBfqImoZPmel%2FHjw70d4OClbx5mXqVTgHzMC8MFPbQGyUk%2FydNKmP0dLm1pq4MSq5DHFLydDd5ySzGIBvgjXZiDY2F9Ymg3WAI4u6t0JwVDQQyDqzeHzAFgNN6W7J2h2eRJIzZVzJbhVELz6QvVv%2Fmp%2BhIZRnMbd%2FnNK%2BqFAPo2TJ7M%2Fs66v%2BlSj2V62hfjx13D2uJ2g70MhJAIV537ClqYUC%2BiUT3odqIMiuY0%2BDTDfeimAzjOJ62WL1Ri33DC7j%2FzABjqkAU%2FNsdEYO7bCUhI0gT9L3Je0bwptNa9NV7ZNXVcbn8PRTrQIi%2FZ3lGyKsn1Yd7VVe6JSxxeVcY%2FG%2BEAbQ5CWHkwldG0RuefINB4oTaBnXk5UhKByx%2FAIKyNO%2FuYB0L9L%2BjIt4H8r4rDYpdWokXubX4ffwW4gPdXZAguzJ81CUjAq4btu9yq3ys9DXtZNmjwCmpLvRMycsab6405RLRViDToaqLLL&X-Amz-Signature=32d4394a5973b16c4afca6db7253d830b026aae5ca640a96597cd3c93b7fc8ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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
