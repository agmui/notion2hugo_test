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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHPOGOKW%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCE0kvjQCFiFD6LHCJd0ZkAcURLMjFzjJmCCG7y0E2OFgIgR17u%2BuU5cKaKtKcpo8PUnltvVuj1UCpNaS8py0jN%2FKEqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPC1UAMj7tkxtWnGtCrcAwx0Qx7Xehl5ixRAl5wYbVougvO1%2F2y4H%2BSpx%2B7bXtV5vgA51e2yijrlGcT8PB%2BI7N77C%2BBzBpFGwmXRqnJMBlxNV%2FHF49Dp0Kk6JuqlsyP8T3jenNhkUI6WFfameAOtoxxlyRXzlJQbYdDGBy44r3Gog%2FrRaYxFTCLbMDQ96Zq6AwGwJ5nYclgYwoNxBvNfKvktErx6%2BbPXVOhdOYntL%2FfSw10AmkR3GpV9s7hrulI3xVo6CeV%2FO5Q54QNCK%2FVRjfpO5bSb5VFqHW8dlJJhjxE1bdLrjVZRFjVYdJSJQzu4QspscOa084CCMrcKsST3xkkeNtQkbywWM0CMuZ6gkffpt%2B2zT86VNZqBCh1RTE001CQeEQItKktxTXhq3%2BcEEHtD40VDtMcD96E9V1RGul7gJo2M1adzT%2FGQDt94Jpg2LMSrA8O10IU1KHR57VDnUT%2FxdKIh3y4fHvBohbVNaQQoy%2BOPbeRw93C%2F0J%2FL7PdTM7p8g6JifHVh2jk07ehYOiticbmYXrWvTk4HzcQgCgtmxFKvdGeBsNLM6DHjGJURsFU2Qc5OKXqTr4%2B2sfDTB2QajZryrxq6PFelX5cTjHEq7FFHVhRaZN6EjaS5dH9IXmd5P8w431cil7TvMNL3zMIGOqUB3udDWWANobQlFIRVkUstOcnFlBil%2BmBS%2BqFQlbHPyb41E5T7j7vFqosz5zkKfjR%2FuVpKrRR2ZlwyQMtv5MhpZ3Po15w%2FdQNuC1TNE8bO6sMvu9Xmyp156xkbek%2F3h8PLE5bZGD7BdE96JLtb%2BOCQYbJQ4Je98pkVxqeVlsdZlxqPhBodYiBTPMjLxU2CiP3zoZVoZXepH%2BTsnTEeYGY9mrQ6KPZx&X-Amz-Signature=dc277d8203c2b0449658a315c68734f782b41d68cc83854bc86499598707d097&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HYQBRWF%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwJD%2FoMAMn0iZM4BOFANrOOp6uOy2gwnKp3H6D4fuD1AiBYe8asC7dSCOcq%2FvEX6wahUi%2FK1xFgZOeriu2EkY814yqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLFvNbke8g93jJwoEKtwD75vIEGRFKwBFGMLgzt0dHXZADZsAFrbgxqpLrIf1HxhDjwEqje%2BvR%2FpE4oBEa0QCXDnxFqUetBdGUs6lGg1DFUMiJKbDc9G1A%2BoEZE%2Bdg8U8B4zohzt0cXq05zGwzefMTPpTz87y0DnqxWJ11hSqv75Wi9YhNo9Jqlfk9UK39bDS9UdkxQTefATpUF4zeEMXfF9fj6xE7X1bWG0v7vDU7Oqvi8IIcFb9UiZYWbQmm9vga%2F%2FdX%2Bizw4ewUn51A4i4O1uj5l8iWVU30NnXR4uCuB%2FT0je3MFzBnjqQ1Lsvrmifz%2BrPBa1NAFtksiX5FTll7rrPLghg3BBLo3ANIE2Jv2ADFONHZsscns8gsMP33bYawjx5aq5lFWhpjYa9FyReZT%2BmSUmG9cjfl9wqjnsJxg1wFlgZHj29lOpz0TkHJwEbkSDECU39uavAlrWOcyks8KpWSTf1XFSbEyrThsz8mkJNqaTepLtGOjxoGPQRSf2RrnP2Zu4Y%2BWKrchRtJa%2Bv%2Bo5%2Bw9PmP5IKRDBDfbpDK2p4akJOfZehYqnI4OClPXbV2dH1tay09SN%2B4%2FqXhgFVOAL9JqICcuuJnFhuUQI%2FYxAbsahS2G9Gq83Vxt4BT%2BJReHNCa24XZuHCFycw1vfMwgY6pgFG7WNWVMjpHhIBeicrR9p5NvkzFeNnj4K%2FrInWSJCt9sn%2FVDgw7QNR4Zru1dC%2BFPOxLGONo2Wn%2FFTaHFD6RfvVCeXMVqQOlqA0AOAWtDJ5X8gnUSJhCSb0YIyH8U2JIIgNFG%2BnlzZtjEXfLx8%2FuA1ts%2B61bvYCj4xmj%2BPIitEPjfuAwdxH2JqpmPoFaoYX2F%2FV%2BMpqw532oKOGpe4pRPUbDbygPseV&X-Amz-Signature=ad035f65a3187329977f217ace429c059f9a583cac31f15bc1a7ed470f1466d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
