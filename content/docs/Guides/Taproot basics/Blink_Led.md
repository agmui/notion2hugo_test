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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR5G2BM3%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCDIW8kRMBn%2Fu6H2ty63CJwjf4UzZ52v6%2FtITkH4NppAiBtOFnTaomhh3weOOYIIoJydp2stbyOJPl8syKU6MyB9yqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaIyNpoe7Jto9zxcyKtwDlKFZNM8BkRyJJAFzXaObGHJzMOyrzqivIUaOFuPaCSlTRCyEWTycEubpHNyLULWGIYl6UOsthpyex8tRHy%2FOYgoWoGVYe2LOCuRopaEHUrT%2FV4AgalGnbBvmpu9beBEORf3nYJIE%2BJ2R0AOGQDbxC0Po9GiIugFwgTS7fVQWl4DnImHExcnTm1ZJNLGNL8eAT8eooyUgXFAEzgR0oCtUljRzhkN10nDPSRe64NGm64TbckRWCZaZGYRcrt6Q0wfwyZr%2BHVxObr2w%2FT%2BauRxoiYvIjzvA3lgzYpvYDKStboVtF5vlFi903RNEMuDIIMgmu1qx4tPedF7ll%2FtH58Sl3O3zxsRyXClNHouBw7leLq0e7UWVCnXVfBedLb%2F2tIEuD6SR4BqyCtv3DgvWehYVQI%2F5AAo%2Fw%2FHBd4TRMXPRTsbSjNp9pq87UaBqqusF20HcnxRzL9ES%2BV7YP5Za0Rsj7HdlGIElhFbRqyi9tBCT48cC1glYQr82GFOCbgpaLUMJiSrbntvXJvZMnc8c1ig%2FyXj4qSLof6bOR8XnnbE85Cs0WXEyHTtEhfwOqqLqNWMHsN8RlGQkN4szLe6YyzDc%2BgQmEEwslEB3dCynPKa7sHOz9UcrYyAbNHX9S60w4t%2BFwwY6pgFKxN%2B4d9jLausugW6iIMkuVjPdVkXx0rblez26AL48ht%2F6WSwPYpV5wNMulUvwod4zrGjRf%2Bn%2FHTuQHz2UR4H5RG9cOyQamtR6gI2NNxUatcr4DPnpMFB8OZVVODs0vhicxr5PJUsRwMo%2ByjjZ7ybxG1dz7iRsipf7q02Cz0zfe4qotQcVec6eaRUQJHXUEKHYVyI8P7S2aK%2Bqkp0r4yxb6Cue%2B0R9&X-Amz-Signature=de2a8121fb0e7aaf72ab13ba8b5b46688bfa6c13499a41491ff77e2c2bcb02ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y22YWFWT%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BxgBAud9Zv4uCCFJ3K794B%2ByNTotS0ovLRu4oZXdQHAIgMNe%2BECVRvwDdQuKCnSjkfna4dFh5AxOmpP57e5uhoY0qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3RfsFdQNl%2F2YXIoCrcA13cc46jUF9HiLx9d%2FmnNbbPI9j5vcUS%2FfIJzTTdL0Pfm3X%2FbzLcgrNFu9UVuDcENWNlWib5%2BTTGy73%2F%2Fxb5wsN5HHiuxo%2BbyT1WICghkmuJlVrtoqv2HodM2wjyucJq63DxFLH4%2BOWo1UtYbcKeqHralKawhUiI8tvVo6%2BzmddOjQ6yFEpbqFDR37jBjbzQKeVRCQBb7Xgk3fCdQES3COSROF6ZJhigjEwhYlYI6BWoIEoA9mOwwZSkKR5u%2BmbTbYsnFPvE6ls8tmOPTa9Mbwc73amzA%2Bcyr8V%2FCygrXPf5yPkI8ejnjastdXCQcpZ%2FvUEyHQcsoans4gZTBpHFcM3w4CTeOacAmL4pd0o6gTVnWFSvjjVZkdY%2F5KahNnP3WxUDQKaeGp8yMpHOdbJxUn01TsrP%2BU5CX2e1%2FvwJfqFkvQWeCy22%2FZm5kSTxIG1TExW0jVELjJb1f1M98LhLt7fcQlF71pGUDe%2BmrJYvbPxsEgAtGZLiMXenFiY%2BXk4%2BOV7gdseCEU18C5KSrtTIr9Js3OVRKIFKpSFous5lwcFydveuZYgeP0EZYQ%2BYtBAN%2Bex9vxqCiHcWqX0aFA%2BEjobLZubbOKmn9%2FQ%2FL%2Fg5wJNNSsUBEonbDkzhsTWsMJP9hMMGOqUBkNW93izW2OOg2PqM%2B7WTOUxqt3K8ooi5Afn%2BEl%2F%2FuoOsf%2BPdroUOe0QHW5V6MWV6ywUqPaY0cQqU%2FtHEPqcQglQXC7X%2FSkZqtdwzSkV79E80gpKgdqCj3GlBgsAF2Z7%2FG7jqs1E11zDaRbZJXdyXA7XgYteRMtcooTppNSxWkydK178Sd2p0miSuV%2FaUkM6E6ebUe9hLZG98p3ikTZ6DI7me2ynR&X-Amz-Signature=f05dfcd8b32304eb2222edab78f99af427021aaa73ca18e713c67003c108ec0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
