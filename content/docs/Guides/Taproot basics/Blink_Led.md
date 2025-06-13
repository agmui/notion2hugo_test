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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466647VUZ72%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIEKoftn49hczMHwUoHXWJrWt7B34tescoY4d%2Fea%2F%2FwUiAiBwweriCsCyo3wKqiTbq71jCal2TPke3SWQaph9OUx6dSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMt%2BSuiK0j6zVFuhPOKtwDXgMN9R8S23XvAuhxBGeq8eRrWBub2pgupOkp6IPQSbmgJsXaVYa0tgV7JjTgJ47U3L1EjLkpDOX3FRSjb6wBve3avR8yIk7pllFfRHsOUCxrsq3tBBM76KzZDPXnQRdNdkLWxhcjm4LObZdsU8SqR5nTRAYz9WkFCGed9IjpvZoCKquUl4Yw%2Bg0nYZhmEKpWVu%2FlODztvaOxYQ9uvCcnPgMB1c4CvEVsVCzDv83wHkrIKUNhgtsdlGudRWp%2BljHngybu%2BWnSEZHPHoQrWP9mOHTnuY%2FB4e7%2FWmXHYCbX8F3V2QCO4hNYYeYD34dX%2BBteFmxMsjCUyFDSa7Ydf%2Fuxd2W2jv%2B6hb9c%2FygoTQv%2BaLoL0VVnZetFPr8QUOERT4QSRahp%2Fcv3u1fON87AiBKMza%2Bc7LzapdqyE4FHiUtLur3y0qbaW1GwICujTFjG9o2j7Alo9aQHqeWtIoT6iHYcj94KRexDvWTk1rEZphRoIjco8PpocRI8W8VaZbAWYOyL1H32i%2BNW6CVHYlFSJEcsCHMoLqnK2cTEmGKw8h%2BaeYhqDsRfemY57jpLo6qNngT1uQcGuo7sojefmokXd1x5zBzejaPzce%2BvIH%2Br42OJAb9glbZgpQqNOnCkw08wsqmwwgY6pgETRzvsHAitO6tpMZ%2FZ6oo5DKV1JV3RymtwJVfReaQytl6PuE80m5sWxyOQbG86UsLxGbbD8urX6Y%2F%2BGyooEYuSy5VNHRXBwZtETO1DE5wtJ8rdgqwqyH4SpY5CqMEIC%2BUxYu%2Bfez7mc1vj8wUtf0g6QpK%2BVkENiAyX4V9jw%2B3eJeIFyEnPUbC5neX5stev0wzWQHNqg%2BgUVxtcEBBSjkZAG7wCXZiK&X-Amz-Signature=f6dbfbc99f5e9e6b4b525c7be74b0bf0449f467e6f35879c6c02a6d980d8998b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDD7RXQF%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCPhdVRFPV6PpnrxjnkXZbcVxs0tkMrIhMGAkx0r2ZMJwIgIXQdCaLrhpK16BD9xm2Kai9%2Bf%2BF9iPuXVUiFRIzfLiEq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDIkWusV4H2xlAi8%2BwSrcA1EaZJatjHIr2r7%2B0023Mo3qxDLFoQmZm552Lk8C5XFoTge7rSpSISvtnmYzaJyZXL%2BsMZly7Ym5%2FbodtQPV83N%2BNtqa%2BPER8vq2FcvWRC5g15pFo8MoglsYUaLsUH7EiyRuKklmXQkkRKR5rqcE57WYZxutCCpVmHrXtx9GvJk2gn2JbsCQWGT1i4o2HtEE1dgSP3Ht76vYyjia%2FrOj%2FLXhNV5cDtaSMBzAW1DV%2Bg5%2FOKq%2B61eROJwF2VHrq6SWVSLLpzxSH7vHRFqnPvZuGIQzlBWBx6F%2B%2FwxGH7996DABQqFF9W%2Fw302hvIAnErLKEye8m%2BNFGTVpJSTI5Fv2z5L5%2BmKvqiFhHAGuxL39lqO1tQJ1PjcIlqoqQDuVZ5Atpp1Uu3RdpwGPIsYcc4w4uIv8QydJAS3kuPm93L2AV6fllMf6aVEXFSVXQqv4vnWo0OddsfkSi4Iqcrah9kBsDdvUS3PASrngLU9FfL2FwxQgC9xa1q2mNgI6m5Hl9peqsg48GVMh6GaN8eixvPaV8m5TrOpL8mqLiQAG%2F760VpyMYt7TBDR0yMMO1eEBaf8f0ZcuBgEVOkEP0C4A2w9Zcp8gS5PcJiludfLYcpb5WFxi%2BwXTOGtUvGJYPzsNMOOpsMIGOqUBNNoKyrzhmAJNIXTc9xRskR3PTVuJ4gLrv8CPnYmudA5wx2wMEenYig2PUpLrj0rgHPv%2Bhs5guEJr9aFV6kN1d4jY51Esh10hYoq0tNU5%2BryD8vjtNSJ3MAvH9EUJWd0H%2FOKRGk0hwPt0biSDDViXxUPSLE6v85OEGSFXiyFkoZlPFo1vPNK6SWY7tVf%2FAheNQL5v7D31m2RKNSO8nz0aBmi5LsCC&X-Amz-Signature=505358c4df7a3e2d78f615fc88b053f5a8e6520e31f8e961b7c0ec208f2d6f4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
