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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMYI3ZI4%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDsUR7X5wJ9%2FBKuxoSo8IK6q6IULLjt7%2BBJTrfGpNVBfwIgQV3ABLjAvObdk5kGCBv%2FXoihutqyY9Qx9wkQU3leMP0q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDIyfVJjOQNUZ3pGCESrcA3SK5ZLWqlbSKezFVmKySsnwR4DalVnKJH1W8v5Nn699dzoSRX0O9eyGNwKA4UukoRMb3DP1zL3I70En0ASGaWBk1zPB3IdzX%2FjYw0vQBPYw5DQyL7A6dzgPTuXIpbd6Po2aNr43cTDsj9vtVX%2BMPnouhhSsVwGdQXeHcWWauB5%2F5OUnvhQQdiXgTE7zWGKUbGB5rOHdq%2BMF5fTeEjmTl2TCEJDHAkwM9Gl%2BkH1x30YYr7KSOj2wjgf7VeJmJJWcSHoSium5sbYrrYvmcDCiW8ptf1pRA3EuhXP631Oks8PzrH6wOk8xCjsPfeTthNCewEAEIqSFwex37NiNbg0lHXBsBHDwrCn%2BhIGB7xBtBvUZRW1L%2BsTlC1qB0ee5aoGrcWbp1E%2F5DZ8ieoDMmolIe0vxclCoj2LufaSl0U5xidVn3nJvzrFqHYEEG5%2BGvELqo4d74p0Md%2FXRq%2FWYOLO6MUDdWplGevOkZBA53EUMbmTLhl2pUnqApe3BrIuXwmLpogL015Wa6R1GtOTDEvFHNekM7IFQbH3NQaWtm8E5eJyu92f56zyhBVKRMtBgUmjvQ%2FZ3WSGhON2dKhE8KwK1aVfGtRXxl4QzURKTsmD6A56wh8hbBkDck%2Fq1%2FppHMLux5MIGOqUBA4Y7xBNIwSsEgjFZNnpoVGUiyfaKoGe01rc4ArvwcH3f2HScofmp1pahcrl2uLTG2t6H0Zm0QuYAVpw%2BCStGhz8p4tbSgxf7Dfk28ZtEGHe9hh5vuo%2FhiGEsm6mf0BOKOXCC07qEdDcleBOTaj1dqskuwIGFo4pwO5cOKIFPMjmSeWW8KiU2HzNd2CX5RnNCGBuW%2FJY8t6EVadE8sduooLzJ0t5E&X-Amz-Signature=d0c7d2bef3dc35e484f39c4a828d2f8c96905b467e30eaa629bb91843f08cbbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3EO4UPE%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCICmD5UwaFXowJ7wkyUY8FwtFulhhz5%2BofoDUa%2BXv9KYXAiB90YEkdky2TOesf3hv47Gi2Pt9L9h0sTembGnN4tGlmir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMt6TDQKNoB6gwcV%2F%2BKtwDBOf8ALNT4n%2FZrRBIbRoigDCm3F%2FUu%2Bu1z%2Bq07o%2BaDloisTIbet1%2B6pyes5AcAJdbxA1kKMKgDAwP4Fa4kHHcKNjZUGbMraZt8wXEvX5HzGW9oH78u9GkAf0lpcwTmtVR%2BmH%2B4Tk2T87V9rQr2g5gZt95Cad18LfTJ1I0NwDwuFcmVjSHQqTp8%2BeEC4EU7F5KzDXqRRr2AkkZyv%2BqEGO5P9CIEGgajaaRtzLcZw4D%2FXSBzubnuoTZdAwUYN3oEHanfmmtQfIPMpHZqBs1wzTemgeqddsSZERVoHu0TrhHSnxg3WuL2sc8t3eJ7VfcjVL8AcPBTVxmmSrJuQZbvrh2wf4bA2SBM831nJCP04wc2VlpIJxeDclt9%2FSkWXDcS96VWOKDLLN4B2KPlgintphB24jnbzRASsn%2FsszMS1AX5zKmALvUAJfrbnmeZ3aO18dYozTI%2BMhRJRzMANTdeFPLwP8cYOQNImqLGhUWoeZODXl8ZHNmcjQvY4UqgaiIdjwKQ%2BDV9CVcLCB2jt8IJ4uywji3N7eS6uuXNhRYHNILZN28Iek9zfepPYt9c0S%2FchvslvNIr4OggB4F67MoUDIyTyuD3fh9OUx6Hk0SjWDMcvq%2BMeCOUtjrbVEfmnsw%2FYnkwgY6pgGYpqB0F%2FQdnJwU5xKcto8i0SJ3TJA%2FDRDNPPMhz4Utzhv2k7z7JWiS2G%2FR8UhvVsoQ%2Bj9d7rnMpOl2iI6VUiflRu8kigtQ0K%2FOFTRLJeuhW5vrpbAwFEIhh2z42XoBG5aJiwv3KLqtoZczhYszCuvKYrpcISYx%2F2N2ISDF3s4DEmqfS46Ktxa%2B7xnFTdy2PuWtmk6be0eM51DxY1KXFZFXmDYOWMXS&X-Amz-Signature=cb6c8856dad09e8635c647a239cbcdc51f3df4b3f0c468f4f8bb259dc5ad6546&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
