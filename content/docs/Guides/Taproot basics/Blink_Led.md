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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW7ECZ72%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCPSxYW%2B4Hw6DZkYvTgvh8Qagaf%2Fr8i4X8Ec8pS2vgkoAIgDVHa%2FL9JtiCEJm4FayGKT3HBrpiFjE6HHxUkxqVCFg4qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk%2Fqi95U3qQMdbjOyrcA7R3dhmTXM4Co6cKczDKHMJ4OLfVnfNPT2KrTB9y%2BY94YXCMkP%2FUahvytkMYUfBMNonL0hNLfiSEOehbdPu4GIF5vZKyYqsZu2N03qGHdDpkjJ1aQS%2F%2B0a34s4wFbPFsUpqyQZuMJkC%2BWKKd8VZpvhhBZVDNwJfXW9bsTXWGp1VSnixUp97AS9YGdZLrFcRwGSRzezqi5p7YGEvGLmeETlWBpx9vy6zZoGAcygzyyHzRcHaWOnhcZcgxwV4CAJXggGLK1j0iWGbxEmM3Y3x2rvo%2FWZixjXoyrW7U2TBDOxqAcJEhgCqBlAhaTBBXe5AP56NCvelpJiAH54%2FgvCvCy0KUCIVEQ0gXqxo2brO6AJqTYGNFJeDxj7conDIbPztGApUdMDBmrBPhhPWwBfIsFMcc6oP7%2FKjOeBkc3fvP7hDdZTV7poz1rCl3S%2BN6wZ1S4FIdy3isygSOBXmoe64y2kk0bpDYBvQBsVRBHY1v9%2BvRVyo68wQJs0mYuCZSqA7TZrUdAhjKVRRtlIoJk1hAu%2BNiJUIX%2FiRMvD%2BHaTOes50BXIQUwuy7Odq6KnhzWmUt2P3LkABrAcHk6N8MGOl9htoZ4HUjkd2pd%2FwSPz8WJqb12IjCPposA2%2B14HsyMLvagsEGOqUBXN3VErVLq%2BHrm0dgUfx93%2FBzPPhCvxR7Bj%2BqVDlJJs8wHcuWvLYZctz6sCttmpC4Li8N0a0V6Aek3QRbWdhOL%2F%2Fv4oEw%2BJhyJ3dUagydWpCoUG3oM6k1GZqIdZTuf3SjryAN%2FOdDIHAvzhYIBfGxQIoZ80sKWyuABSj9zVINkMx2AE9oa6%2FmdkYE2wD7elljXuSUPKhNNx9OXe%2Bm2rAnnqb1Vpjk&X-Amz-Signature=427676ef38224340f16277517185ca712a78ef8b9f8daebfc3e80da23d2f0b8c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLAZ65RN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIG4h58D7PKCnWq1EUKI0%2BdI5e8bF1qKzp7KoMk8nPf7%2FAiEApfxAKnHyjPDy0bhhesMJq9%2B2Oxx592h5ysYDFVbdcXcqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpGqM9Na%2Fty0g8%2FYSrcA4GX%2FkRmOu7ppslDkTGkzm1s90UJksi6uCu2XrjCcSxjn4nfimYJqu0rA%2FZqysCVEpmTq6e4ax87%2BVHbTvPFaePOtUM3hMI%2FO7L%2FZvwk6f9S5WXRNwuZySp3SYrVLRnd6dqCk2rxc3t2sTRTDDu%2Fl8o3LwafOMkiQKyfmF4zswdDxA5lxcG5TgdpB6ZHZqCw%2BApS60QdTYeM5GXMcxmpLfx8pyZrcqtq2toujybsFU20nag3Xy%2Fui%2B5LTit6CWjOvS9tV6M8HHx5Zhb0zRdZySFxm0XcyqmawpDiyAl4hUKthhoxtDiRR5yccswh1vQ%2FtwHGyjRKedqEwSa2qd3le6N14WKtKN6o7lt2Gt3rw2Ljgfg3AeU6PJDoHuLaJwZYyk8%2FSRvQ7cxSdkbV%2BAH83X%2BBESLRHBluOICGEGd9yE7HUixv0%2BD2USrgcGCGm5M%2FzXkuSvz7oN4j0x9HUukTj0uZ20edr1QAoFR0bfaJHncQVa5VDdSYqKc2zSWqZ7LP6x7bN2B1kOmNGZd5L2cWWbYolRkBn9kf6uSbvDnnd5%2Fa4H4Xd6403q01lLozAoKCAnsYu8vyR8Jp2vODY4oWdbWv3MkC3i1ACRENRQObReNZNXHYi6PyzGIgTVMvMKfegsEGOqUB2CuiB8NX6FDyM1t5V4QF0Cg3VL8Eo3QvRUoqaUbORP9LET5kwzI%2FNTCUI%2F3Lc5480fgqYObk0CduV4gXJI0axp6TPmbbLMa7TRxYSLJLPziClBwJVjrJKs1s%2FfbYnKaN7I6AAt1t41x%2FLXlDwkK2hwDlRlt1LDUI9FTqd9rGDA0vgCYChHJ8O2IpFMow63D1f6matn2uienhiCfcv67c1RPJLopV&X-Amz-Signature=85858acf46281b18e0a9cc45d443f261b8b8646ba19c8d39fe403b03af2d9f8a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
