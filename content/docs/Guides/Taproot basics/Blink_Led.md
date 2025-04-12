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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673VMUZ4E%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T061026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIArMY7%2FdZWxgyNv%2FGWmyMX7XWKZAgZHgGeSDC6WlVytcAiEAzbuKWmlnejv4E7Eby1UQjd78bAAMeiMtYaltywHKv4cqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWd8a%2Fm4%2FTVVdUOjyrcA5kl6Ja6YasllRRaUTnh3Dd%2Fmm83jy%2BSghAObeIxvLvlnCROchHeXGGwUJB57EwtdHotDsqlcnky0hQCb5ZppfMG9aKrI2NKhnZD69JKEZ0xyIm3rceTv9q%2FwcM4c5VJnMjYPGK0sC8BA98zhdl2ya8kS0YTUpttkaroOOZ2usMNtdZ6UpV6CKxzjo75U86X9XN3hkgZ1GJ1uPNklJ7irqYRqBKkNKLRe91DXnFNaPwmxn%2FESc7yQa0PSNrJpfga3MXeUSLpEHktJRfJPuIw%2FjORmrOmUXiizeZMCwi58BF%2FdKeSmFX9VP2UNFxwkbwSx1SBxVkjNMESBVVoRBTKsTlEvMQXQD%2B3gbXC535rlCoaoPl8vsRpKaP2wLhDgxnCTAySRPhSkrNvHUjTOVjSfVF2BP42%2Fry2vyC8cpDFsHlswsS6NAI%2BdNv9JD9Ikk3eODX4BpGAeNEb4U3P%2FZGM8y5rCTo4CAXzEqKmFDAFrhBYfIdgA06twxXohfq329JgY1k%2Bqditbb9Kor7%2FfOr9lilo1l8I2oa99kV9anwlFOFxXMzjw3ZJFcxMYiVcsj61G2%2BGi3RKyDigF5YH4DZqrbVEajDB7lqRsHLDb7y7MqOLGj7%2FVoFM88VNAAyYMMft578GOqUBft9f3QWTpFvuOjxVJoczcoj3KCmRcrJeOMthX99RS%2FOoWshQa6q27Fq7VLZ2OwKiFmFH4uyOi9sqK0NzwBbu5Wt63t3RFDzLsWUa7HghYivsKLHahUoBhGTUk2qgF7c9HKZzzTz7UslyTv7w67bxgWesJuDwEm3T%2Busp%2BxExOFtTCtx8isa%2F8Wp2Il%2BNCyXoCUMUf%2FvPol2NCMLTUSYI8eV1MMNY&X-Amz-Signature=beaedb723ae6abdd3d46185b44e48347fa0627ed47b7712b3919e5f808343e1b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC6DDG3H%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T061027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIH7DQMwr%2Fnz%2FAJFXpMdTdc32ET4Jw8RSXTmShSq%2BQe%2F6AiB%2FlbqrqjSdhdBwzF%2BXlxTNYLy3cigfnJVUpV5kwpbyzyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWEj%2FyUikSUZWI4GVKtwDSmgZXX8wX%2Bh4L7Cqq2Dzu6PlSsGGAai5AeNN85Sj7WZn9dKX9hBWQpIMCe7dtkOLVpwcT2ihzbfewzT%2BsZwPB4xBOq11iXAgKKeDJuiB0YZiisGrz%2BZkmSukUB6%2F7B4muLRVb1Z8qAJPtlsgOqn3IZGGzo2xeJPrNUpV12dley3T9jfQjnIZQXVH%2F8JgRV45kBDGm3c3U6960N%2B9f555I9ikAVla%2Ftd%2Fo%2FTtKeeKuz2jhCQbPrLiyEWZKNm%2Fee9rFyHJLDBSZeOA5JFpYGe6BnTTfo9tJ5xnP4FQs2RNPiJ6MDv1C6uuMZTnP3bwhWpv8Pp%2F01pr7w8luxJe6fmFHkmXaqDI1z2sbmy7yJzKpJ%2BAi3H7FHuR79O3jjSWKzobR10aG2Ic5ThOXeiJ%2F35pIX2m1firM4WzQntrbQ3PL8hecfgFuvcrE55GhUuxMk2g%2FydG1OhJvCdVQM2Tvc287vBgLl%2Bwhq6h%2BShqlRAqMI9PrNYmcz%2Fl02V4MWi37g21HUi73NQeNjXgQ31LXmj41Hz4RXYncCnStvqmPu6u4vzK1P%2BGr1cTg2%2B%2BNstBF7rVgp%2Byf6ngbR8WALDiOXn%2FX9BiAALzumKhoqIxsu9aizUNtPt4d1x6lxbxuYgwxeznvwY6pgGiaPuCBAdqPUauPein%2F%2FBvseJ9rHK8FhbHxjx9tRiT5hjoZHzb1CZgyO8Mm6mTg22CJYN%2BfJfa%2F2hJWu983D0igCyt8xd1GF1uUmu7oP8yJQZqCzbyKOC8nGdblNMW2%2BYENEzOe3vvTEuAxbEUufKF12BcmqoOzxa6sXfu%2FAjbIzPXCnJRCxq05sxQwnL8OJecR4NdPZlALxGKCx4mJJ3Yw9Dp3g%2Fc&X-Amz-Signature=b5fa67763df63cf5a559a163ccc63ffad3291ce39c34cf73f3cf6bac23d40954&X-Amz-SignedHeaders=host&x-id=GetObject)

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
