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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPI5LFN3%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T160809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIAY2HJzB1dhkAuojuyODlsajbm7cGIXMnE1zcD4ELtiXAiBVN6Ud7ivegyKfWcgSzgpjHNCMaoVjdm0fS%2B3j9OHAhiqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4qEn1jqYaR4RhYjEKtwDfT%2BvEkGPu8nSTSSQggM4qqujI47WhGBtaij%2BnAZxe%2FX6AvpIAn%2FZ22YOgOrHtqbz8WOLFYPEN68DJ46Xdm2Blq%2BsIpRlGOY%2FGPARQVTk6nrIKC%2BydtAwYElKmVw0rMxzJA%2BEsvG2UzeYBoRxLR%2F2iF2xaTw37ftAugRHbEENii9Nj9ZyfS9dDosXlTAofmqzysLopLKuxEcpE1jKYHBMx6EnZMWVYjGGBjILcKGMkSvg3%2FcBQPa32VMpG1XZqK%2B8Rs0F5mRWnWZsFfFoVizLBjcxkHEktpRYEGi%2FXckT%2FEtwjGdxr8FJHWwuw59CPOoJhsax19qzsJrzjbT88uEtf%2FEyBKarz5OQW5cQasfAHSnFQa2Cua61KoPkLld9EWs8Doo2t6PdHmKlkOkM5zf8OqwbGilhi7vmJr4fU91rZTJyGCP6JN0lXE1Kh8fAt0AuiClUGzHFF9zlr8v5AI6Rutrt69zkscQ4Xf9lORj4WTlcMOfGyC3UxL8pz%2FMwfk694%2FRpBLCjGY19ALnF4NX%2FRniW4QHm%2F7pqgM9pJekyBVFWtMwwxEfzx03bArrpg28tpFdascmGmIXDUO2HfO59Q2Wd8Dra4xXzHYjTARMcRsnMuVQLee1IYL%2F%2Bo1kwiJv7vgY6pgEpizCRh4XBIIbai7%2B7E6Twi690dlcGpwKXVmtm%2FzzBKnPJE30bSXE9%2FesKOltG9Xp2Sgy2BWfrYP%2FS77Rkl8z6wz7Z1FRlNI7S2BxMpVWEnSehqYBLFg51fG%2FSjmzU8h46kHQ9wiRvx2pbuwBl%2Fi83tbExy%2F3ytOAemen8FE52zeTD%2BVNRmV%2FcpoevQ8wu79kwAi3jHuQSiEjfbrB3jNUnVNOyEDQ6&X-Amz-Signature=78f96e2dbefb692955bc2cd383e342fb4d430cec817a1c9a09158c06d5e2819d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K7CSAYY%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T160809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDTW5alJ1VD3Bi%2BnYyQq6H8O12o9LA3FptZMDeQokkJXQIgUeKpoSLRdyRtfbJ8a31S7fW9l3Lir1jblW10MJ63Y4MqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKkdBi%2FZFuIwl3VKHircA2n%2Ffz4DSUt2plZaPtNmMHYs%2FQ3KZ2dUyi7XQHmrlLd38Zb0HhI%2BgE9Zruu8cMRymDMP3Bfr4CZ8YUH1fgO10F8By93ySsVn87o1gJGAwEscsh1zPNxJ2TiCip5A1eYJMA%2FCckyMPPmaEWP%2FR6FLac%2FMP8dBx%2FgKVR5ppLltu7jc9rE3ktazj8jvf6FMKL6QIxRsnLlsBGTUoSiWPqDQ0WFabsQTbPdEvwXIw0JB8JVcVlTyEbza1ynCA8zC2uFeq6mDP55P3B%2Bm8YscdpsxuUt9JZ1fgemH6YhQcfBLFtdNQcaam6atg8qc7q6G8EfVUYS9cxyESmAsTE1u4Xplfoe7fwE9hHlOQhhMqJfaXRXeEKfSHPji9YqlnqHmXnBCMg%2Bp5PyFoNpMahFsAdju19GLLF%2BCADk6eBg4LbUer7fQlifbGbx4GLXK7QEQxzk9Ssb%2BAS7iSl1l5X5xn7BrbBjM3P%2BujTPPyGj3gZQyorQ7BdTgegCaaaigvVzIVdV%2B6g4GUmB451TIRrClcyMoTliNHAjCepY1OY%2BF2Zj%2FAiuwQQF9mqms3QrNv0HgwRrew8pvQJ7NmuaIojn69S3yw7zVMz4sH4GcUGXx0p8qUUqhMGSI31sGGsIX5gybMJz2%2Br4GOqUBRVcMw8PYI4jYE2qL6fBOfUcrHOApnnIGbuxJN%2FJR5TJ4l40xv9TAvVHlt9MTeVwpQ5bG238EAsCDqN21ElZkWg3Mb%2BYKbbj8QQAzdtl7zdHp70SSMS8PYPxrjhRGt4a2%2FSbMvGBPTvZljiHeWeseyoz%2FjbbOJWfdtaZGhYNHYp6CsfcTvUHBr8%2FJDcq9zAY5tWfXBZ9NawunLTjItbUb16%2FBKph%2B&X-Amz-Signature=da467ff02966d939ae25e58f917e75741d1e9ee2a3823bb912ad19d4a278b168&X-Amz-SignedHeaders=host&x-id=GetObject)

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
