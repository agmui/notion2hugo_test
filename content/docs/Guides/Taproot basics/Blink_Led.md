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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JBVFG7R%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T042119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCr%2B22lGH5ovWa4I%2FBSIwTCz2pORJkCXF0Ov5tPTeBojQIgBRiOVcddNKNtFMGkDbaFN7EnlAQHoEVGDNNW51rgbQoqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERJ6zRzAa0XDepjXSrcA1QZosgQ3O70kqhq2b%2FD5%2FJkv%2BB6UImnOh04SfIEOgYCRHTJMtZAnvRec22o0pVlwnd%2Bm8%2B8MBcoDGUEu36xWyR3o9R1n0hJpFhLTOqHqgQJnHwjyapBSbt8e1Wud3tVlH%2FnnkE2zJ%2BBi%2Bb%2Btpte7wEVc6rDWr2DtCD59TKC9SrbZrTC6PdXid%2BJjjO%2B3lb0aUGEBULbErF46mIo3aGmP2HJ51VVgqaiQQhcIp4YUq7buJRUw4wQ5%2FT0fSRlobAtp2oqqNEinVTKWsJdr%2Bt0k0T2xGWOUQ7StSFNvC18fvviAh9T73igqySZ3RqYwI658ckGC1zP2D3CX%2FoaB0j%2Ba90iAw2GFvVSfuLzUH5g3oSXax0CCLRAwCFSJ245LVB%2BgA1EqCsqa%2BFMsGwr0%2BOrbi1w7EeC0jCo6JDO%2BGwzmXuT%2BaOeiat%2BCDHHiM5ptWnrajRrMdfrsTFhEP5EzhpFxBdHPgItr9jh0MT3M62Uo4yR6qoXRtufVaZo4KP5TLFrqGMcX7hinB3x3zexh8NhdlHau4HSbFZcnugBG2Sa5wocgwmljP6wfo%2BwV4VaVFQd9LIhEVIPXLT9Sos5U8%2BI6dkpa431ToEy2aabHQg4c2%2F8mq52TYZ%2FkowPA3w6MNK1xsMGOqUBHfeIGQ1aj6jd0Ro0CNmLMlJmyuYYYHMNm3jfsh2GwApe1lfHbCja%2Fmg3dd8swwnotvZ9zWxJOx02688k9aafW749Cr%2FWMv726gwrV1RjuHQbWFOwUC6m6tI%2FImqTg7aGvVXmuKejd60HCx05pgf%2F%2B65C%2FJyBnNXSpnhRBWyxOLlZKUUBJondSdG05FnMHqrRzfxwWEUE91c5Bycm5vxPg0gvqdS7&X-Amz-Signature=db64f66898460c5cb30b25fb95fe42dfd399d1f9087720c79416907cee02f21c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U4NT7FL%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T042119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID3uTdoB95qbWHkgUNLnk%2FOwmZT5wcSek44gpJ6SsXSrAiBhKda2FRl16J8IidJvVN0N%2BS%2FDcwidcx9Fs7ib09RuyiqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDueYkCXy70308gpLKtwDMS1S%2BhSV46miTWdfYKUK3vT38nPrLmRMBG0LoVTvCtfmKaIpIArhdP5ey9pFaF74DX%2FlCAAyIn4IIJsQywWJWg4oRp9m0tlViYuUIiz2tiJGXZ7Z6ZpKNnVUS3VcYITsrVt1pajD9VNJ8F4ORojs%2BCaLlOwvlmtpEtnr%2BWQG5Rw65sOiIwnrp2CgMbfV4Juk2yOMExdwkoJ6qj6Cs%2FnR7HQ%2Fsqy2KuSCmr59UTgjx0K1J8%2B9WiHLXICRb%2BEL2pgNSFt%2FYRaBKxkF%2FkoKIi6iJnpxH86Lw9%2BPC3keLJHVib3hKS9f04tT1jcHb421BZUXnDrf0f2GJeXKiKPQKAiyul4LAX0DbtxTJQwy0olAgM4rLtMC7x%2FeEzYXZgWjO4b%2BgC7JpcixcljYOSivpUg48h9dXcA0aLqXYRFskeOmo5JzWjA2JmQ7eMugM84Jnw0vR06yLjAf%2FHn2oJuGti4sRxnAcbH7uIr3VEROhTyVTIM%2BX1yZ%2F3FxJh1zzjma3v4mRtV98Ovw8KO54IIRGQQEbrDSkk2Uk9ORgcrXPcg3o9VmtCHsmg0dlt5G5FOOE23yHO%2F%2F29%2FipM0MZ7YFG61kqN%2ByTbUuRHpzpO46Dg5MuMeTLBKpBEG1UCi8Om8w%2B7TGwwY6pgFBqao%2FeaIjUae1SxzGQAvQYclU8wdE%2Bj1cKWL3XQyx8bMNreLxmFTWWL0Fj1w7K9KM8ksIVrj9%2FBrYHOTvNSbGNAX6%2FEM1gl4qwnUw4va8MRkU7IIJhsBWTds1zBK%2B7dR%2FJYRKzjbf48mxdhKZLbdS7YTZhiT4pMNvUaWQIfW6VDY2yEg0osOLhasHOzgMBloK6CHA%2Bfp%2BZTgOTuCCfnw90l1L4PAR&X-Amz-Signature=84e9318788567b0b4aeca826cdf11d8430ac752469de539f1c718bebfa4eb3f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
