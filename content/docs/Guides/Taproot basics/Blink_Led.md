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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZNFSZLQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQC3F4g5ZApAZpnDDiUiZvqfhjqyMHpLLBeZf0aVAQd2TAIgaiDNpBvkVm1TuUfb99MxrfGjKsEHFBEYloeX5Cm0cJgq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDDCs3tVHyvTz7IXYpyrcA180jguxX0s3fgb2LQ5ZkYyeQDIbBE7O7vc94iU5pY1hGEYV0aP%2BQ1A3m%2Fxua6Ye72ZtNyGK17iApgA1C3RuvMBAaNDh%2B9wzRElbtKlg%2Fh8jSycgASr312kZZPhwlW5FBFQE4Hlb3%2FUeQDcjpGnR7Tv%2BBMTvCfFtNCB3iQDbgN4o6e3P0XX9BguJueFz4q%2FXqGX5Io248Ple2tbalmH5keINJB7VHmtd4Inl2ccVxwNMeNqzj0B4tQSkYkdq%2FywMTZiD65UCzAxW726MV%2FHtIjgRxhuhXG1NeF7YpnuM%2FGqDt1b8CxBVPoczzH3xvTjnOYN%2FSIVLsww6TwFdVrg1EV%2Bq3mCf5NoxuSYSr3RhAFNdDGgFrdXXED9Mw0C3o4qXEvJeJyeh%2BVUQrXa6AFgzMT8j9t94FCKXUpvRkQ9%2Fx6P%2FKuH8ewV5ZSkb0t3g2CUXxqObxyf3qV3Ck8L%2Fs3tX5gDfdNGv3lhUmcnNLPqPOv9hGpjiXpN%2BhQvyQ21p5XnVkUOdmYorw9CDHhklAcpvvT2xBU4Oc3aPDvpNSAA7lsJ8ewFQfAkmmCD9iZ031e9Kaf2J%2BmB5j9Jzs9Q8292juqtUwwjU6QB2i5zRK2vaG3F4cfpYBScdDsuSsH6AMJLaxsQGOqUB0Qx91Z1dDeLpOfAB8t8oiouckbTUuST%2Beinid4Ahx5zBh6v6xznOMa8mjVUY5zLIpy40j7HLMlZmKPQwEz799bcjhhs92L%2BPd3hDZLHS2CnHX0HjPMY8h4GwaGpFmRMjU5nkqs%2FTms9DOKjv6w89tFsc3IeVoOBl1%2BwsexN6KrQFNzv3Df7ngta53Miy%2BllHE%2FXD7i4yBHPJlMhezvw6b0qyRF9y&X-Amz-Signature=f7b8190deb7e38b4be14725487bd848a94840f72648498c5277a3756cf622546&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PZJKNFL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIBVaosyaydGLKi1hu9xs%2Fiudz03mMs9LxkLx103TBj81AiEA8HuD2HlPfrvrRkpMrkl3DDr196bz6%2Bw%2BnL68JT3jhZ0q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDDxs5wWQS%2BHg9UwuqSrcA%2B2d0nyfCCt4ZxPDIM7L%2FgGM2M2LS3rcfxbdyrnkUchWZtUgSo37oOhcew4qJePoqAIVwDrKSjRsI%2FHdLoy%2BD3cmBYtpbp8ZgGnY0nRaTXGqtU502oMSwnHaP05gF6nDGB1FfKn5r3wtQAn1tbBohIqHh4ner0eqiDelzTDwaLOT1lBsW6C2InEr9bt6vOYWe%2BECIjCcpnwbxU5jpO%2FQtNw%2BTa%2FIlmVBm05t5Q3v37r6pUVWz7VudxP6C0J%2B0y9KhqXFaYMorab9Vcl6xfDMUxE2p6XnjXeB8nB%2B%2F9JdbwUBUYoynKABBAdemCGsmp6yZHXplm3p0IjLJKvKn%2FvH3a8QREFYFoM1vcfuuzUl9jqSFiGmYPhjaryEi2vQ0AnqEaZ1hxKHQv0meFodlul2cFWvALZzYObAE0tQRwCx2%2B%2FHR8fgbXzezQ8PPvTBxaUuhrTYRNfFOezOYBKGIDGlujTu64y74xxTPtqE9C4IpRe9kBNJKlSmcVZXq6Mey5g2BpvryqiTCHxlfSZ%2F0TlHUI5oADRteooktOX0ADJVXKWHsA2X5GupRrmkx%2FXbjyTVunR%2BDJH4apcd3P%2B6M43BgI7YhLVtpU4eaL5EyRI%2BHdmyvlq0qn3rwJFAzlggMNrZxsQGOqUBsosgb1QLopoN0loq7yTfs%2BN79umveUmjIKSCPWIPZYpWHfgc0k18WE3fTcG6oPshvt9k%2BXns0MAsmn2BdE3gqZIXQlttWquWo0HGz9hTRAVSPaJwtCl9jVeCZROfbNKTCnAK%2BW0cgH3gh4DBd7bMH726mqcz9UAFzIIA3yi02OKgNtfcqOnLTZ52NxzJUUDJQAKXjbR1xkzziNGMNhFm65Ks%2BkuL&X-Amz-Signature=38f118d4d787b3607a561a0cedfa52361ae684b560849d4da7b0791879475b04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
