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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB5NVDNU%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvVZKrD8RWKUJ%2F4V405%2BNLxUy6xiqN8XPAt9O5TjKWLwIhANO%2FOSJwDK2FCrBB8cLJ26pUBIrBZbBCUvd612Bg220SKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyS5Nz7ax%2BUg2so3hQq3ANqR5q4e3JqAhJf2jjlZsOsYPWQjGVzK71%2BlbN9BJxt0HSlNge97jty7Ag9YTGO8RcSlPeyUr4ZdW%2BTsZi2WRliHrcMd1cOUbyRM2T2c597kOoNULeEcTp7TPF1lQrsopBnOI2SyZBEME4ZKWyql9NAPwJG7e5TnO0NsytTshJ%2BpqRy1uH7AOWHvv%2BhHLJuz9ayOwJvxV7sQ9V4ufAJNl6H3jX3Gos3rjGIc3UKH33VuyLBrjKKsGqG%2F760UnBm0PQ58Zbxzhi0w2oYdP9pFs9kSA0swRp2VsZS2PDMIn8YnoQ1ZqxCnHVKivzJ5kwM4ApoWoSMdNotexoBmguiS6hDEh4KERVaYBMTPJJ6uL%2Bg4mrW7yqXgfl9mSPj%2FaYPaeGFv%2BnL%2F6yEpeKhZIE3xcj%2BStlLrmtmjgUGh3bEJcqIKo9BFNXRfjKnjKLDOiLtrJYi6B1owW6PRCdXSPPg1ALB%2FS%2BNuRb0y3hIpCcSmy%2BMIPPXhGD%2BGtgingAfW4BO%2BsCq5%2Fq1NYxva7x%2FwTpkefi3hq1wTRAkeX6ukwUKRftI5Q1n8tlA0jfQUXuscklRcuUaE2mKtCuuIemPnZDI0ShmR1U7aWxMTJWP%2FIHKsN%2BX20Qaz0fX8uMBGVUf3zCwosXABjqkARIB9bpNOoskY33KgPIJ%2Fz77fXG4Lash1aL3yn0R6MOJTSwxUIfAIhOPAjGrahRc0k796ZWrka%2BxzZPefN6NVgGl34%2FziSOhE1m9eejGCz0nuX%2B1rb7fg7Zs4HeikQHd7Q0ZhREWXZqVE7bLDFGtJKTHiFL9g2qZDdQeXeTo5sSCTDwukpKxHYEKG5Qf52nbum1fEwAAbrIqEGAVX3HU5pLmEnj0&X-Amz-Signature=e6bbf3b630da8016cf3467cc957333a20ec7110402d8e5408702321735bbe0fc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRZ2BCAM%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDT%2B5rAQd0YdmaDSIJH8W7OL7sc3C5P1SCfN8vpL9y9CwIgeR1uv58s2Zd54%2BAdtGJRmVmn4Kh8Dd731L7PeoCh6q0qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG99eLI4ctXDGaS9iCrcAxQEiy6A%2FSv0yGTUPvE8vH8NNg3eCtGC%2Byx9VhPBMjkULPrXzEbUoM73vxgA4rpLKUm9XS6ZX0INXfz3tDf8C65mSUVRcsRm0ZJBF56pN0B1XuYbjIzBI%2FiBn%2Bf44S4ZbztUZgZLP2ps7b5%2FUf8GJA02kIt13d5NrIP4yhcDE%2BXfJG%2BGnCMEYh1HKrr4rRVX7IPHgc%2F%2FtbU%2F7ys2e0HzvtIqzvpwNgubC70iarDCRNv%2FoJsY1a4M2u96Ya6slGGgHlQfYvOMFZeZyUSmujQZl5BLoGpgZ7TckY52zh2kXejVGqwp9Ua0pT34OuGZmlUYhoplrLNZqQrHj03NzetCvDRHIO2187bSr3Ecp5L3JapH15lSpwLtxqp3JiNMmQ0PZZDzApRAxT8htIh0GMP3SFTeS6YlFz95jHqVuKHY07Vj0kvVYw4gWzSGxzALqXECKCFx%2FpD1wBF6nC0V2x4qHkHoYQQnOXiohjz8qmp1cxllrYXpHw%2BNr75J3rkJ1edJLHbejIMeJlQbLyQjV5pV3K2VvhP%2F2HIc789KGOXBfI0gyC6pyJ7vjC9f8xnD03MaHQ4%2Bbs3Tk7e7erGN8S2lsqwvV%2Ff0AZa%2BFb5IzeLNmofNNTYDEY0AGhhBdGcgMJmixcAGOqUBTTGx5aTxoXdqu23J8%2B3UmPTx0uuk6%2FTtCyNfBJDwlHUm2vbKPVk%2FNbKU%2Bb2Cq07DTnz4%2BRAYUdkItFDbfRz3aZqWqJkQT9ESgEhMUIGSwpXtZ8fOyBtLIon1se%2B2eLC4xVAW6em9MtTI5KaT0HC6Ktxs%2FpiPlQOAF9Nrcqtic%2BFdcdh7rX7LeAOOmWqa9WoNXAV%2BI49Fqym2zycVSnl7N4QfuMbg&X-Amz-Signature=d30692082180953d2494fe69d68be57e8e4b199852951fc4ad07cff6d6fe54d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
