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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNHZPR6N%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIFxOGWO58S7bc8hevUpz%2BCml0PvkN9hrnlxPRf4%2FsfN%2FAiB1jE%2Fg%2BZgx4pLLt6GfVirUPbQbgJqVeP223LTFvr84QiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw%2FIYzPtIEYIncyR7KtwDqjVHw41eEMIvNdtM6zJAMemNFyp9bQjwv3li%2FwejZ%2FhtZY2M4SvmmAwbnJ4g%2FtJNHigZya2upaGF2xGWQCWztpTYYaEz%2FYJ5m3xlzgegGnXstCTuQj6voVP%2BnM0G2RLGVemUykPSKoyx1kCIFT7VBHjuekZPWyH61A8wnJa4Hmq%2B40Md5QUbS09pw0X6Tjfpzgn1lCVjPpVmw9LwkVBe2ZGMnMB4l7BIOzgrUdExktUGeQyO3%2FPqN6tdvZEO5toFB%2By5CJm2HYuS62Cvc360AyvoCy9H9en1CPNCM8Q3sHWkmDwiLAdHMqB9i%2FFIX%2Bi%2FZfRLFgx9lvYQ2ySk3hq1eunhRG%2FLIpwgnLVTv67Cn9%2BYhMeIMCz3GcIwmO2lUqRYNXLrWAnKWj%2BSJAmd9DuIcDcTUV9fkXO4QSPkKhqdA1cNqHbm9%2BseB%2FOJ7YiozIPmuDKTMCVKqGqNBGFxgChhM3KeG6Fwy6br5bKQyK9HOy70Zso%2BnoKXAxZUGe2p843pEAENvuWTY188pIidvYl3As6igSmnOvvtQrBHxlHzRL5S188eQp7OfT19eiTPGzGOVHujIOtAwR7NormTcFtegdpbEHI7wCtKgBasS8LCm7qdoepwv%2FEd18SJm8Ew94GRwAY6pgGHBZwI77QKpcH3D32uaCIuMjTwatx0YD%2FKkiOl9sOoQFnKHOVReIHwJhttC7nukMUksGYqP8O3ESUyBKNGeOL0G5FEUZtnV4ySmubMg%2Bl85l%2B8snTTaADIB0IgP0O9vhs9fzHWpFddmERLUwV8Y%2FFCUN68R7cqrQ2f3FpXK9BkNtxXE%2FEltWtZnhBJkjHzL2QRvmtXE3dRmaW2CBUXJZ13WC%2FSq6Jt&X-Amz-Signature=d9314712f3eea93444a93b14e0747b28930e8311faa230aed9c80d4aa3c61c26&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOJMZRWU%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDJ0r4MfYMjA%2BXaz73kyYtLQyQBkhQ3AwanhmbKJmLW%2FgIhAIsSz4dQd%2F8YO8usIkAxmT1pvpHl2rcnzwhM4zX%2B%2FIB%2BKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDeacaySVNdF%2FdpDIq3AOjtic5zBkSo1IWcwbv6hxgL4d5cPucuK1SGkbqygb3KF43PmFVIL1P%2F6JOCAJcbKLY9ktTH0L5M3oiPG3hnzM4Wb0JtZYob3ScEkDlemiQ1FM6P2Ekt9oJnCEQ92MJJ0KhM1hJUrnbsu8wa1lqhZjEE4uxbEesxhtPaOck2ciJ6Qaa6p8JLMd%2FBvY7O5Hwybw%2FTsQ2Fb7EC2ZPDt3TZvWOpeRsIV9FHJqm49jTlQSzgzI30hKyi8jTyhjaZrOezo2q0CVqE3NepvefrbxWuoytyHHF57QZh32q9i5RY6VL6gmPuQpQS6JJOMJUFzjjVh5kSC1LuLpKKoNt2c%2BGxgAuUy1L7mf90BSkA0%2FFIWwH%2BFrt55uuNJWUw3sCK%2BA8Ve3dUuwSbj%2Fxm7NC1kaxqC4iK4v00CRswBVDGpi5L63rs5Tee62f7c7XFcAjL05Wf4Ooz1Qmp48AUIwRkVV2smflLHSQIKO8hEvQiMfxbsuhYAsQ17%2B7Z6RsbNRWCSMlRvxixQaDfM%2Ff7nUX54f5lO1rmg0GskbBtp89jQsR9VqiT2MudxlVwBmMd04%2F6m%2BMejtVyqS2eTJoMtq0MqxUhGE1LYSPTGZuHmEkUekSu60pyseh7UNZpPhDu4uTtDCK2ZHABjqkAd9AOkWjziesTGfI2v%2B3p506pF1zc0K5Bve0eVTpsSf7lfyWO9x6O7EPS24YxA0IWi5BNFVtm%2FnV%2FaFP0rZru78q9sGISZTfES1JvWUR4V2l2ujmV29v8aylDwGyav9SQbEBs8HHBIx2vCVh%2B4D%2F9bW%2BK%2FE5wVIb%2FmyIYCf41KUQZT%2FJWLW7t8m6JQxU7EM0AyTnptbdGkDKluJZzB4cEduCnEr5&X-Amz-Signature=87de07cee9268760fc844d4c415c08eb5c3a61778e9ffd9e5c4695590507eac7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
