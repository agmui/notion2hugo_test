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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3GLL6NP%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBarORDh%2Fqyjv6nDIFGebnJk%2BB6dXA6yYYouDr%2Ffu9YqAiBN0W4mZJl0TeTv3vxsa0jfnwH3vAC29TMi8jg05DoJIyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMd%2Bnqg4pDnDB4dnScKtwD1ei8ZFrF7BoEy7F1WTNc%2BM7ZwLnDze24QONKgUalcJZg%2Fh0Uk3wTboO5lmmz%2FkiQip0D3KidPL9nkn2hU43RQxBbmvGqPFDorePOCQaJH2QZGVWcoDvJJnyYuCnPVKPR9QmO%2BaI4m1eNfChtUt%2BigtAgMko8EWRYCH%2FGL%2FEuwp2Qlb3Chd3zY0RG%2BUPiiy5DL1BgwZBtjndlhqKcfDfkgT5aTM6vR9JW5kVwSL2A%2FFKbtZ1B3%2FP%2BmOTDwSNRgQ7sBQKmIfpC5SEU7X%2FRt6yOwAr%2BZltIN1HZxJ4f0wW96JvFcaC150K6H02h2uvgGubanL07DvxP6HGqVD%2BJ09cf8iYYEbf5CvMImTbZ1793LxB9vYSFd%2BpPbDq%2F868rNrNeFh%2FsAl4oRHvRVMKpBkKHhX7TbCB72B60js5MoAQ2Om7W2qdIqxQPWA8iyVSPN77LLO4SMnMkGTAekATrs1%2FirbA13h3IXUFgur5lvp7%2BEYh7NEUMumS%2BlClfBSLSA1Q7kH35WCQjZm1OULROBO%2FcmkF8otzMNt7lrT236UURZNWfHe7Vpi5H7DZGJ%2Fs0vw6m8JWctxPtotuYTnbgjI1tN4GTyEi2DefYLlNN930cR0SEGH4uRIQwV6Rf46Mwmv2lwQY6pgGi5BUO9qtoOI8vFL0Qvw4HlQcjPJxe9D0qKrX3y9N08%2FsSY%2FBlQvC9rIRpf3mQlAgjMy1jfi2b%2BrnWygIZLZtuotc0iXSlxecUiJseFETM%2FEHo4TN%2Btb%2BdnotEhkZ9IK4LnP4mI3TFJi5sQAwW73uqYMFOl8laTNBLofk7qLKukY1IGDJRRUNVIFG3oD%2B6Qcht7Vcdo71keqxc7VJzPMjoW0u0wmM8&X-Amz-Signature=501f5265d08bade9a0a005e687445a16a3d342b21f6fd50ad0f3b2569335136b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F4VYNV2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9HCrGpig3k%2BpkcdM2ifXw5lB8O9jaMhzS7QFUoRAK9gIhALkf7zb0pYxSHlKArCi8zspnlt2tvDi%2BSVux1RIzGFVeKv8DCG0QABoMNjM3NDIzMTgzODA1IgxLy732iErnlaNIAm4q3ANCdhgUfR2y%2F3J%2BxSOyZmczJFhYVHDZ6NIKZkjbMjRC4bFZOO%2F0BJ98f4QBtUMzutLGI2F5AI3%2BXSU28wayUA1BjpOY9tnlFDWFss%2B8GzghZZXcPGS%2FJ%2F1y2P1hnT80p6MozyzjGcHVgspFPUKQbgKCerRMzyOt9dvxPz1CChTbqq4gIX%2BIxQDlLhwuHu3c5jzQMNRoQ0MgbpmkKkL9GVkT%2BhPHLu6i67%2Biw0D6cyx9F3VWR3RNa1RiHCtZOOKo7zA1ya1LcSCavLJ8f%2FzDBB95jwWm5OmF74vsll9JgAz3qI0J1f7juZfFZv6%2BFKrPlBjeiuMnj0VRO04MZThBudDD%2FTm3KTBRMvRHjkfzLIlSRYCDsWl3HxmrcJ23pcXTBpm4aug6sDHuO6RJHu9g27zkfbb6KP8aHJHftWLWtULrUlEbmzWzJiDahNhKL7W0cpLAPo4AaTeDGm95RFicnNvXpZhmk%2BujO8GPdl4LYwOhNcr6oeeLibS%2Fuv365zZF4rj4ue9J2VkmgtiCEH6i5SQzZZKqOaRkJ1Nsb2r0Ris2SCZzcKsHLjDI%2FSSbuDEAeR56gYOacmmtWljif2uGNDuZQ7Y0tyelIKJD%2FE6SQdVj0AQKqA%2B3ytWiKA6MjzCTsqXBBjqkATHQsFxpe8qz29Mdi2UnlESvXhMvd6Kh2R1DFyIJKSsLsXXucUyUUAAK4C4cYMtccofegdBUgXBwyubGNAt3OVMBZjW7o0Vn%2Brs%2FhKMtQGJve7kUj9G%2B8tBK9yMmrF5r17LycA%2FyTVzI0LcDMcfCKFuKmze%2FAEiYs%2F522FZGH7RYD0fQcmon7O74skK%2BSkjturcNjSXhNDqjrLBz1RA5m4l4n7lr&X-Amz-Signature=28011d6daf13ba7b809c216090184f750139a52221a9d77f09fac40f55156aa2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
