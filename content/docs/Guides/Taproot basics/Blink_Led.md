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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCJPKGFN%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T190205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDftn3u6lSKYcktwxGy4QVYB1%2BFNz6jbwCkcfP27KZ%2B%2BwIhALdBzItEhWxtqvQiacsZFvWzTkXC4hnZYjriHTUbg2e2KogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrHBy9NZvKIrBs9EMq3AOshbuFeKoIhjmUZyWFv41E614eSs1YxjCzmiDdx44nu87wp1xddOywkDHpm%2FxblbY6xQd70Tk5knXhYbawJ9mpfLgzxs5UnnjkDqwRDhiU9Vw9AxfWAveAQhVnq8H%2B25EmLPSaORqPmjYq41sGWPDHKDUZK7HYkqKr29WTtJjfhWh9rQgIugfWWUOCxVkPfTx%2FPO82mm%2FJ260%2FRUAMsRq7f1VyIZaGpeWBCPno%2FGIUG2xY95JD%2BBLhks%2B4jHtXMbi5syRnTUV59Yqfo%2Bn6rpuOCgHHtnUraQgrMtnumiaDw4jEwdcPJuepzWg1OlI0Tk8EXYkfV1JFJgpgxiA6mi5sS%2F3hXcVwmLtxSfAcRjcn7D8e3ur9OU0zjbvENOLqDZIeP0j8SyMA%2F10mxbjezDoAGPiDvNztQ8kUdOpNQKcaTXD5tOt4pvXE1R1STr%2BkyIZAqXnh%2BvVRWE5uxCmEC4X1GT2l0XP4BQBMs4sI%2BcjDP2Co%2ByE%2F3YdUpt%2BNhIbkaKWzhu%2FU0vCrw1ua9b7syP4jq066O5mA3BTebC7TY9XNZTKQ%2BoRZpn0jm09K8c7spQro5ifcRZY%2FClC%2FZhGxFdePuT20APbxKNeeocx49qkg%2FfQeQeEYigb0IIm1ZjDtmZ2%2BBjqkARAH%2BWv5f4LPY%2BQdKgJxddv%2BM9QibAFzewH2UDoD6mH1ThhCt6tn%2FGoUWQD7YMB%2FLYiqrmv1XWZPRxMHcOWClKD5jSrCy5dVGSQiz%2FeFDYxOKePrADyBNQ9B9dtmPAK%2BVyQN9yUyFZMB2LByMHlxeQjxk%2FTouz5hFIvPESpo3txyZNeYI5DrmL9tkUlKt6vsQ15kCmsDv4qkyed%2B3mfpfHCz8V1r&X-Amz-Signature=d07d8fae43c77e6977a44e7c4a92ed0823c418f87b8a41326df6c080a1e140dc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E6ZV2HY%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnzccIbedA2ZVO%2BwkgS4u2eMFwKOA8VIzZYxtpXiuB1AiBz18WLsy4eoFKFofT1WHuYIqnS8sC8Hl1z%2FpXGwNaUGCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM582p6OEpfZoYg974KtwDwvf5VsKgzWaY85bIvX3TOgnAXAvWMtvs9eduRNScOsF5JGp59iiFRlvusoM52enwi1ERQuHQjMReJC%2FBHYqmsJxFHpEHBhdUgQ%2BvrbT0y%2BzRllsYDX99%2F8axn357g96F8cUIeWz%2BEA9lWGCvzq703l4S6jTL%2B4F4IGfveCxsq1%2BV0nll1DvFDHDZAg8rwx6wjfhD9Nsoz9RX%2BEroUF1RhgHJSgR0bva%2FyLaDgjzwi6SquoRAJlw%2B5cmV4xLrouB9yFBvNOtkkxztBhSB%2By4hbk%2BlaXpnlOFol81MEP%2FUw9SJ4AdxctQs1OkKYRyHX4KRr6X2FzDR8FFeaQYuAIM83QeQsSxUuuIq64lJKinF4UyeF8br%2BM4CQ6J3I9iiY9u81ZBHxpk6M%2BhLQwbNe4GTcaH%2FVfoAw2aP5l3ifaBsZ1hrKOHESZtcw4sg5n1s0O5PsCuTnWKNWw91qduW%2FoVrZmDlIhowK8d1pQbzBs8PdlZPNrlrYdDSdNQnBnJwN8mRxgIowu796TlZ9%2Bx2NnQJGxRwD0u7DhAJE2umKFHX5C6qbbWAbJf4nz73Kqv4PitNAmWrk2RNXsCnbH9Q10J%2FwL1W8ikVt%2BUdHnpVOQ2ExTnjVp5SHGrdzP0Ouysw6JmdvgY6pgEAsOm5dGL6LjpXZ2UYApQe4iRQ0EmgUWhpzxI3oZBxpd9KDzkavaf%2BsRqaNjLCfm6oqi%2FEu%2FkTULsL8LQqJ3vRL9FCXTKzb1xW8X%2FvFMl7EspTScCNJyBhPs06%2BrLaet%2B8D8QpHlYD4YEV5r0qw3QwTbo7EbCB9GTM463FHVR0ZLs2Nh%2B8KATGRxhTR%2FjJPF2ynIR6YM076sl6LfmhQWQX3h6hjxhT&X-Amz-Signature=f9c2662f78b1a5b028b0881a822b63d34b547121c26b55015226fac2e9e036e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
