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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z6VOZNN%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnfH0LE%2F1zPS7740uiXTah9hedGoW%2BUiBnA58FS5MSaAiEA3W30k8QGNUbgWtzFCZJPCvZ96wNgxLhJ2aNqwVqNHu0q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDIRIxvmawS41MH3fRSrcA8qoTiiH4iU2Sr9cQ46W2Zk5eFu0mBIDnZLx3vGhmZUZzNCbHdDQ4rBBGvw0o1dE%2FzXFq%2B314ktjibUoo36QaVrkxjv5URwvS36Xdw%2BbbpC8gOsh8t1%2Fg%2FBtAtUI5KLAlKIZgXNygIdgl2FD1dUMaPACmQCWX78hblXpRYxQKlzaLayaKlYQr9jyX86D4Jjd6c9lef%2FKPmCiuWdXSTS1dgnPzKjn%2Bj1IqrBygX%2FLI6it9Ll8Nix9XSlWmA5yMYGVh%2BmmZNcofCGd0ufrrfRZ5zJ7ajMq55gWZzP07jq%2BXrs1Cw7Kz4a6B8t%2BQp6Ph04%2FDrQUzI1r2L4GhbT6ZXkbTySWSOWRmK1RuTAYixid%2FvdkL6ImdpSilLaXodMbG65Gbp8d6GwQp0R3b5wxjXxEeHpc023ULHTbcEHLGfCEF1L02%2BWiD2306kupnGfYFBGQCYRSaLmcarIMze%2Brz27Ku0zdM6Sdowh2UrlI%2FpYLoEpwMhM8nbrSb%2BYlJbldyRye9wWcAMH8YFeppdQ%2FwGPWro9UaC83ReUdKkRu9rKz8c0zZ2VWAvhy6wzo4uzdEgVvvxlOTb2LSeid8%2FjXCZ9e8xskY2sGXgULj04hD4r6aFO6KC0x3XK8kK8cuNWLMIzm88AGOqUB36i7swcNx%2BybBNrdQkC9%2FKMEiDrW2WJc4LUfTo6JfXmqcE9XNU8U%2FQAvwsagDQl1%2FcqKlS6LC0%2FfTcWTrb7ma4MPC1dBp6oz8j0XFgSMdq2GriNHNS%2Bi07PxQjEQe%2Fer15aJVh5nYXNEkNv6iGmkrH%2FVvSOAt7mF%2B65XywKDbPj0%2FjGg7F1pMDinbUfcZjQNwGTOCZ1ZpFikN2yJhry4UNXVxF%2Fa&X-Amz-Signature=2e007ce133db43493afd3d768ead3ad35f8cd6cb98ea180c8e9e769ee041da4a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SLGE6CW%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKjDUwVnrfTFyc0SwVTbZxY5tZY0K4s%2FGlPncLaAFebAiAcHda4ObsH9lvyjtMnpNFETxPdKcsP%2Fp72zCNzHkk40yr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMVgihYYHMbec%2F8v%2FeKtwDo7MnSZJg67sN5IXutcXrXCJcU3vMIe5I35Phk18boaUIiV9LSQFDyQn%2BrbNNCSL8PNwIlGAc9eKTPX%2FpJLtulg%2FJYkicSrFOREldssrsp0J7PJARnm0oZr68dKVOBzLHKQzjddytXxAW603L1Ar%2F88Jv6dIVpanSpC5FKe7QX6Md%2BX4I2c38bzsMMqzR9eGsuxcVX0ugNF1t2pLHadCZ%2BwCfbb0K4fWMlgM7mO5D2dHmbINv4nu76s7v8snObp0a3MkJj%2B07qN3Qy6ah%2Bhd8OCszVsIhQi2OIn6hHQRjfmxmw%2BVrbBUDdZw8jZ0wZzbwK2lhssVVqK1xah%2FUT2UMlQ6ZbLTS8Hhm77cwHtCS7LqBM4AkVc6wu%2Fxn8xS%2BSGC8bRQ%2F0j3vnbcTcjEMwJZhqKs40nnm9pSfSZ4y4JKKxhFGZJaPevjjjKMjSOTJiKSZVr5QK3dA0ew7ftmqxsypX777VITCg42BvVqv2uuhgLcPbLFct5OOj0r4IMgzgTx5%2BfKDjRibPkUZd%2BZ6u6At26IhtOIdw5uFTHcFB3tHLfxBTUmJ2PNha66h7tOlxU%2FO6%2FlSJR4L9XT%2Fdhyndi%2BiVHeFSLaX7Pur4LyvUwSoVj%2Bzr0RJT%2FQGReJ6kL8wlubzwAY6pgF6D37B02BQ6ayojFJuKmRp3IZsYxPSJQYntXG%2Fhfxo7PO1GhRECfma8Vxb1Sc4TKCTJZDugZFslS3ZecMnKPqsm3ynNikyQiGFw08lIl%2BlpB83K1Yv%2F05x5zrG%2BptdglBwYJ2KNzX5AzdvixloXUoXVR%2BAcvExuM%2BNucacA1vHIRDN1bAhpec2w1hG4SoVsrn7ft1MEN90kOUi92z52FU0OnC2s%2FYF&X-Amz-Signature=e9721b2aa7e7526ddd037b106011b347d22203d9ddf1edf118044844f7f79a91&X-Amz-SignedHeaders=host&x-id=GetObject)

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
