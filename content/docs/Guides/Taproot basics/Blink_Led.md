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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMYJS677%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwH4hlC2DtyFufvJ3QrnhekRiN%2BsLzOviV9QzSn%2F8g5wIhAMUHJVfLMu9dO2EtM3khSCYBs8ghtcigAfCMoAQBWLtvKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0dqp%2B27H4vlAQIlUq3AMKkP%2FVSPQtVKvTOYHem%2FbQfhxtrL7TNYcIPXFd1Vo8Y4B%2B5DCNnIwW8TAvjkM7KRk7hzzzCwmRxMmadn%2F%2FeVfJaFnawIQBLw2zxVSUlMvVWRacwRcCKn7k0TQKrTtWcN23jrmYxT3RnK%2ByHGmrzVWg2K038rCg66ajIhUug%2Byc4nRhc4u6kjUVZaUxLjpeND7gUVjkXJi54vt91Fmw29t7%2FRyNMp6Zr9tPFfUAPQsJ0rFAnY1Ys6cAYudTEwmhroZh7Ss8ZSd703UNiSoSsXKTkalNS0ngoJrQvHogrvER%2BvXR2zZtvUOeOJtd9Yocc%2B7TN9R%2BxK5P9Pe8DUGXh5F1kuHC3WttWlrWKZf1wBU%2F3uh7AvaR1E5ngslY2edLnaCFFM84hpmuldMUIWHz7AqygxgSaM5NZ3SmLluDasGQb1TQYPB70ttnS5N5wFTZ7T0HOBBGD%2FvEi0FfxpwQT0A3hIKRruphHzuuH75t325F0VxYgykEEuJfn9Wm0WJI3isBKXzAFmlsMd8ad%2FW5o4CKgE1bbCsEjVBZgsD%2BviUgcxh6%2Bm1SUIWEBz7VxtiHMY8CfNTFDTWdZUTHH7xyLqmtxY2q2meRvdhgoVbZ1Z5VCxFpdGnpiDRloPYcVzCjzam9BjqkAczZlw3YeITz6boVub1%2FUIgrokOQpy7z6iUsK9tA4Yumgg7PFcqDrVBDhYl%2FEVtHIrbxHcFl%2FZEFEJ2MBy1I6K16nrEe%2BZvP0CDY4UNSQyoe8jya5rdnmGMKqwNBC6V4geMjAJV2sku6RFqpWiwxHVQYBA9vicfaMpmusppe4SVw96c7Dw2PRBlr8jx1cwMmkS9AYhXR4Wm167LeZTUVSOhVRHaq&X-Amz-Signature=e962780e7440ade6f43e7b35ffeb2faa4561b54b86946aaeaf557384c64b6832&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XUZ626B%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BzaSbC7luyPYMiQqH6%2BOufDm216p%2BBs%2FBWcGxCCNr%2FgIgbTQS7pvBH6uZzlGPaK8HPoiiJQdsip2hFMI2Z4GVcysqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGqtZ1zmtnlDoHtlSrcA3%2BBd9VOebKf%2BbHnPRVo8ZCNuzw13i5Y0z5k%2FLOwTgQrUNC3x7zzVLsEbNabxPo8vtnzGyRkMuzD0F2Kj95bQBAcbX5iSsRx7c8x1rlgL6snkI9TgyzJiYXHG%2FnnpfYMtr9nAAtRkwXvv5H1C3ajmj9kwUZLGGZ0Yv%2BQlk32FHuUsTgOLiINW70K4RsbnUAh4itqwia2srtirX16mXLn4rgwwIbCgRqpYFLN2e6JSE6%2FTbATAlgWxXTB3U5tX3SD1nTQSrOO740QACi2Jssetoo%2BydqHgpm1lJZGdEqn5vS9vfoNpIK3j1r3QiB%2FbisLbaoXit0T4AkezAYF86zPt2%2Fh9WhCbncjlT8%2BDGRGkCLcfLB2miOOjP7eEhGDf1ac1C54sc08w%2FLZ8kym5D6MlbPu47Osd2ce3z0t7C2xdTmzKd4Gh1zaJAy4kdQeu5CvTSIvsN2wSdMGQXWtkHo49%2BhH1HhCqZLSDalXGdl5YxDFGecIs2u0vgFl6hMuoRmofSHD%2BpkuKzZT1Sz%2BSrltupYgxHcvQCkMgJpRQXsKfnVsC%2BqAds%2BujdORhBUx2pPKDNcQlAreR2FxCRn3z%2BRbmlpgY%2BJD5%2FNb3FtZ0b0YBZ4DqbjxxfAD%2BDXt1zDzMOPNqb0GOqUBcqL5PKmvSOnJR3jnAMAaw8mZD4aovQtUa7fZcclX5AnAOBaw%2Fu5eYY1y7pABAZ3TuKIKDt3WAxo6R70QvBC3pb%2FEmdWhcYEp96Xm%2BEAIBpjHqayrdrAR8xt1yqK58w242sW6w8xNSyyuqvm9cGPgXgcAni9U4G%2BlJQrlG7KjYRyzo9N4UgzPEQ4NnrnHYPtBnheT8WO3SbGZczIny8RL%2B6FqO0Ax&X-Amz-Signature=c957e06dd40d3d867485429abb4bb0c5063d345ac6c1e7aca81c32626746e1ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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
