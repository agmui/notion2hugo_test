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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626C5DLWW%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T081111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcNlWsNiMRqwauuioSuxzGoNH7g%2BkXo%2BHqYaaed%2Ff8gAiEA6IF70n8yijeR72hvbN3dCtA6BB0smDeiH3tGZFEYPq4q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDGOvgtL9NWN5YexnySrcA1pSWju71NjeVcj5dKesCSEC2ozgKCoRCa7IqTvVLlnoWz%2BYw%2F1Mt8zwidQz%2BoUsBwc4P4UEpA8XcEW46%2FfwhwUPX4jApqzN78EoaJDeQpxcigF1zZrZT2YAsOqRc5JCa4QpNPTXGT6bMpfphZFcnUALo1xvCfkx2fgzlaGCOldfeDSYjtl6ARiv3ecsDk4ixKU53MfTAHK4ke7DWWAaITLU29hJGvW2cXp1gRzWJI9zvcGn5U7%2FX%2BqoPkyZEBVCOmpz3bB1niMbDO3oztZuKVRnYVYxyB%2BHKB7%2FE5atGQi15Y87FaOuyoYMBS4Qka%2BZwAnhUuvNjZmzZOUPTYycS5xlZZ04kHfMaWyZXJvBAFL2RTdBVC4V%2B6WbIvpvT0Kw0smgH5megN8PJEtu%2Bso6UCpiNdIdNPn2hKcb7PNtcbQVB017KfaNDexh5%2FdD8ryn%2BMKe6abN%2FgnWlKN43MoB1oPtDa0F3YLyd3MrviuHePauYkgym7B0uKatGP%2Fjeu5y5%2B0eJIx6xDZeHmqMZ6%2F9sjVkcsbIkWAkyGk4u4%2B1RP2XSeSgp5NEzY6hYAV%2BbikItzv7ZeuaMgN8u6evsXEtxgHeAvbOGx%2BoRVVfRivaJ%2F6WRhXeXB8RGfszJd%2BgMPCLoL4GOqUBOO3IFTKJLvJbknfFm%2BUtgkxYYLB9A8nZpGcKWVfdeMam6EjPhQPsboGzrFKrOw%2BjCcbjzZ6Bvx5cmwgVo5%2F19mwmM92O1AxuEyBTk70y1ganJ9p2RNgl%2FWfBg8sn4Se27wvXFhUUjUqEwPKdcspPL5DYBq%2BOLVGzklCQ73%2BAJdtd5Gre4c%2BI8dH9ayKW6KgXve8yeQyykwj7XYA4JBNVfAfdJlUu&X-Amz-Signature=4ede0743d22ea36073910e77a567615dc8464a1ff7838eaaedabe10bab9762aa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAIPLR3B%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T081111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGLvJEUZzkbl5WDIhiknP%2BHaaPwVH8Iwuh9CgdEeb59gIhAJ4Ra68JASmMJsg57lsVPXFG2PWqgMPJeS5vWdqsgMv1Kv8DCBEQABoMNjM3NDIzMTgzODA1IgwS5MgI1ScWogMGC5Uq3AOY0mAlLsiWRrY29hX0Uu8S6bm0tAd783g0tLrdsNnJUxOEvnbon3oxM7FRePm4xfp8BcNHRsyBJgeqKuZCWHiPxWFkjvbuCD75d92iltqoNgy5%2BPKWa49INmiTMfbvewdnefiPeXmmgDCFUdItivoA3U%2FURs7jlW5rPJzIgRDAmntBdvLnMaNVGEdHAZtEMAwlff7066bO%2FGHNI9%2ByBCaEVI%2FejxXAMhlWTUOua5fNdfpaRChh4k8dc%2B0409YfqfCP3eQG70gX%2FP5IBACATSMDFMGLC7LPqsYkEHapEofKiQEbfEt6U4Z6C3AnI8gAq2mocXoyAxo3TLgUov5FJ%2BuWRe5Syi0gsOepULRUUDI%2BTY0THSkOLv4AYSu0XkIbShC65eQ4kKrnhNNx8AEO5TKh9rEsMeOcPeH3WsCJ%2FtBt1lpyJNZv9JOwgqrjwW1FR8Bc7iZfRZbajmIojCWE6d5M4oeWFLOQr2DClwWGNLX68a%2BP1M5B4dGmbR427qn%2B%2B%2FToVx6GW1xrQpyPZ539qD1zVRTDyLztss4xZ8%2BOydmSDquWcAiq6O9tOX8foLCgd4wndAbYqKKFnB1QvJaM1%2FylrkVVnZqsum67CkaNvGseTXaFUn80CmWfoVsrYjDwi6C%2BBjqkAXMec6g50UOYErrDooGxFh9KfRA1XmT45FIfNXy5nsaK7h3yuZVkXFZ4t%2FzMDkd9eg0wLsjE1ednDGhBaHaNLqk5rUc1T9%2FQDhixitsziS9pCNFunX094695NQaMzsd13EeGQzCZR4V62HbXTUJdIkS4ROYmWw6HWtM%2BbQWBfRIWkAZZUZjMsgXRIL2eBsyf6blBasL56TUsj3tG42SusZwoqJxT&X-Amz-Signature=0ff21ad929bc9f8235f1b67aa0af45448ec32f25a25309db5fb56c206064af1a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
