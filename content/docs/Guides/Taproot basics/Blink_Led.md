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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCKN2OFL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQCkrpQjnsrfRfBiYQfkSX%2Begh3pAUh3AJVcETXR29NnUwIhAJ8bGZbL0FV8x2pRknLOix6q7Wi%2Fp7x3%2BNT5%2FoxgYriyKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2XROSP77oLxgcSqUq3AOgJWorYpAk%2BE9Ao%2Fme55UYxUUzw%2BpTXFlqLEq%2BBiqNgbqm2D5%2ByoJjjHBdFlrPNxu2M6KevqYyVi4g97dqg3YueJjFJsA7asvGTYU%2Bnrf5OlIHrZq6PqDQryrizp5KdQIA%2FyNXeLTEJIfe%2Bfwg21kweIZeADzUQUIM5Hdv6O40GukdqKV0Qfbe1qBgNx1iPvU25V8itn5%2FOXwtIBY7ISsuJnZphABtsGUAvEBSjjrxLb68IuHzb0zYTCJHJLq5d9hPP%2BB7yQOy4oIRU5z4WxHQC0P7a3UiUiu87MUCavOqcjWnZbLHASfrcPkIiltfAllFPf3JFrb0aLpskPUFPmtfKnR9BIppZTYwAA0Sh4dZKhEykgjPGXsoifBkyLsmIJMx2PUiAtHnRkWqu%2FnmBEa6E2hhnOb1%2BAY81lpm41j83AewrvgxYSn9QrPMa9nwBVoJavOLPePnJnVF9hJ4pAFCPJoePwj5mWVpQ4WEUTasEJheUFl7v8imsZSk0McFlG71oZVlkr3D4srI21VnmO7FMQHrBy250SZGA2DrzaCcPaWK%2FnzqCdD%2BnH46z2i33MwBiThVeuzyMwTCdMUOTClScB%2B5A4pZHLlABaoVqEgdb6GLMJ%2FlhXzyBtiq1jDL5NHEBjqkAbzOUM6DmKjeMyp3hZ%2BJo%2FIiMM68LOt10D1sxeX%2BlW%2B3RhYqCS8tSf8y17ny%2FthCqPuYrbh0G7e24OWjJDOVyW5937F6zukhCVmxGgbe6NY03DcPTegVV%2FcmQSWHVn0DA3bnoHdUVOUDbGRpwzsk%2BnFdk5vGfbMKL53zApvIOZGfVYoTbEDnSPdDiXDT2we5Ri5KP00%2Bp89yHt5iEQhk8c60B34A&X-Amz-Signature=47a53e6cde7708b68fe86885eec0e2e37e976fb6187a7752351b80280d4c7f8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WROYSSTW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDA4bvErlBfsi7rB3%2F4P1HmO0BWxTRLsIzJKeDhoK21sgIhAKxsdFhJhhXzbi8gKiRAQCp7sx%2BCcpF7TQXbZ1og1YdNKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNzFJAla60lJhqCU8q3APkboBpZxxKNgN1wGZh8OAvASbnNUY%2Fbs0DBvq7zl8jxtSvckLPyNDBbVUIQK8dyXRf%2BgAeh0k5nynIZPBq4E1MhN2qJdoAd38iIeKWrTWBhuNKLZTqAClNL%2BECLlPKcN600aWVVuQvxVdJbnw0bNXzSYwBSRNGuE4oApiPT2llfRx3wOKemgLu84a20vrptVHT26FNvqVCWb1eCBKEIfuHa4hjSrgLHhBo3CxjkygAIM2UgP5tTEHbeAQZDw3evbxwpAcj0RYqPjyBzwyA8lurJdbt5GvFzh7ShFRp26N44w08Ihb3EJp3DkfUkhHsz8Mf16hLliSwWVXrkc48MKjSeTrJry8CqxjGTmd894FsIeJwN9xdzV08bYUHsd3fIgwrMWG%2F3m8f1bsm4PT3B6jSZXFa2v9yExScbYHLs9rziDSZxBUFyeuDhuZijW4AG6%2BnBniiHGqXk3NptOnA5a2jZGDQN8Nh4Fz9XYwr6fOyNRcxacpVRU%2FT0W%2F%2BCwCIeeHDwia%2B25XXze286QXNLcaYvPWTG7fmGhxz4KqQVTO9dFdhO3w7yGjqcqBuC%2F2OZB30Ij2MsZY1SboBLKHDEbUVK4rOPMEaw5qMpXL8Mgu5PsA0Bw3OTkwtaqu%2BmTD449HEBjqkAWFSh41dxe6J71bzwywP1wVn0K6b8y2B9%2Bj4Mru%2BB0aOhw4EdzWBmFGOs0nxEhkxobZslcaKUaE9Kc5uo1umg2wmAL4%2BrC64RxU%2B966vQDDmlWb6fQqE6lB5R6kxAKBzvIChSThZLNzbdpIQBpm%2BEBYGaGIEdiohJYczd5iCzjw4osgYJH51vRCDwCdF4Pz%2BeSBdMgWvV1lS%2FLsqGeby8f7kQaCc&X-Amz-Signature=0075dbaec6f9987356e27d37584a356c165223a778f01306811791ca5c2e1b38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
