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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEKBWFFM%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIDT7HAebwCvIa6m2i302RJW26SC%2FpH9NbNTBtjXUkkdxAiBtTVXS1b89lJ95J0t0OPws3NxvtvwhAfrTC6MyZh57bir%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMfBKTOlGnJ2PqfwTwKtwDWcc0Ih7npGentWTwSTL3SUL%2FcAdsqJ1793wpAqPuoiOFV3WlUEMUls732UmaiJzp26LKcyl49fb1YLUXZGRnzrUrl1ggGSmDfD3yoAU2Kqm9nAtxsB9NZYta%2B7lgTQfTiHU408V0pwOaUuvyLhoARg2PFWdckN%2BMNWhq%2Fe7PKSGUuqLH6L3Nmz7Kirl5E4VyqSyBo%2FI1tDZcIsfjJUu7Kw5EIIrspT5zLJC6b7FDl%2FAQTKC6BtMSgfyLI79R7dIIoMuZbSrukpRMNCTieoELREUZd0otux%2FXqFLpU4oQBFBauYFf5WLHPoP12GzCXPVT70VB8PtVGv78bnip%2BWdaAq4pHx4FHf%2FUHVDgpp1dWN%2FS3jpFJkM0vwezIqlXI1Mnm4%2FEmZlMNxTU1btbwVwYEvbt5MHKU%2Fb7KhugvhUt2iegi4VDAP%2BYJ0bpH%2FDuTkYo6oc9uh5EVxs2ZXswpgzlF29SCkVx4GEppzONi7tnWH3gFadryApOq9P0wsoKcvXEAUKgJGAbERrCoIs%2FTk6aBUTvAAgXnvogIett1B3zEb5MzyYxF6Qhb2UzCmbOWTkLhuw4Rrj%2BTVq2q09%2FjCfsRMrID57S%2BUAJSvlDsJXjjcC%2FVZ1C%2FW4rcHl1xaww%2BYj%2FwQY6pgGbyYM4WZkFOtAqFrME7UiIJMyK97AthJVQEJZ%2BW2jNIHUuTuep%2BsfiPeJJ%2B2vDCNDc4kodEHpg1RMt3YoXcQS%2B4Nj%2B43pf2GZHxeFZjSBXLHjgNyoSbHq8yl2o%2F%2FXl5uGP4DoqyPrie7MDM1UNpSm%2BMj252U7zKeJoxn%2FDQTNJd28rHm2cwgtQDRKDcLkcqzx0NzUTL0sniJNFwoQCGwGJGK%2FzHK7T&X-Amz-Signature=14f8544718783f38f1eeb87d6b297e172f67d5d664808ed2dd813738416a6ad4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLHIM3DG%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIG2mi8L%2FHg33mAjkuJv%2BMw7ulrN47feGgeJAg8Lq0qqxAiEAuMCEddZ02TQm1p0vt%2FEXRZf3df%2BJgkvxYpFLSM2zl44q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDIC9x9eqLEeSt5jtfSrcA3sxVtCqiJc2WTAxlgp4%2FL4JPcJBsUB4g2CqltgLHMCZhpAj6UL5gm3tYF%2FfBCqu33Uo%2FxJZhYHOXMovnLVvug8lkZ5Y7uJbZtozz9hNeZE9G1ymOUmRD05rWMoiHfTSNs9LxFWe5ZFqH9RaZYyjEZe0U%2BToA8CgIYNvC%2FCygy65y4nS9QFryQPUTABmKXkg9PeUtyddQ5zsd9GIeLyaOzcA0kM%2Fp9p4yZ5Qhf%2BDodqK7gj2PIA4pOKiHPm02geRFCM6hsv%2F5Ew302dwTEtBbBB%2FfAjTC3xtU8Q6IRjgQ92Bry1kshSS2huVSAeNBsNlPtfLiOM9Ylj20qcghrB%2B%2Fg8zzn7avKj1V4c8%2FxFz3vnbHJjuMg%2FEqIn63JxXx0v1NO9jPjjygSGZwCbKpiLw0v2KMQZyWyMLb%2BSZFawJlgvx8y0W8Kj3Vwjpxy6SsmNKG8cE%2FGuO5zd8kjB4MZqNCyYR4aFKuxLmyAQVJSJwnns4SVKjjIlLEhOwofST0AX1qQQRD69ZmaFAXqFlH9mL0jaTRqu2wSvnG2ASanx5JE4ebh1YRhS4cq%2BOLi%2FXzdHIXCZey%2BcY1IJ26laa3xnc6PnOFO64TH7gpl8rPJ2aFVNV4CX6BoWcXyQ5qaP1MOyI%2F8EGOqUBRHXk7UaIfXZRd2YQ4UNEed9WWvqqaqJZw%2Bb2FA%2BzTv9qosjfcsaI0jHRTrU8YhFsZNesxyYBv6Z3Z1E6p1vFDIQudb0ZKX4upQc9tdry566BzZpGciJDWddh5U2Tmh3C9J6ZvGTFmlpuO0GxYfUC5sQyGXvgG6GkbfH%2By%2BONv5vfijUnjVvlwKqjH%2BvPPs%2Fd1JOXMuk0IYDnSQ3DQUVV%2BnIBmpb%2B&X-Amz-Signature=31a73c330cc185ff6c4a4a4404c8676b7949915a96dd04ede934b49b24c96a7c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
